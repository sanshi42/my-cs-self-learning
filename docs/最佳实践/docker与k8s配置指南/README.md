# Docker与K8S的配置问题

## Docker 的使用

> 被拉取 Docker 时的遇到的各种镜像仓库的问题所折磨。
>
> 随下定决心，不要再吃这个苦了。

### 一、镜像源指南

参照：<https://www.coderjia.cn/archives/dba3f94c-a021-468a-8ac6-e840f85867ea>

### 二、使用指南

```bash
chmod a+x automate_docker_registry_setup.sh 

./automate_docker_registry_setup.sh 
```

2025年4月17日——我在这里对之前的自己磕头一个，感谢！！！

## Kubernetes 拉取镜像指南

使用 k8s 拉取镜像的时候也会失败，镜像源被墙了，可以使用以下方法解决，以拉取 minikube dashboard 的镜像为例。

### 步骤

1. 分析具体错误

   ```bash
   kubectl -n kubernetes-dashboard get pods
   # 查看具体 pod 信息
   kubectl -n kubernetes-dashboard describe pod <POD_NAME>
   # 或查看简短的日志信息（太短）
   kubectl -n kubernetes-dashboard logs <POD_NAME> -c <CONTAINER_NAME>
   # 或查看事件信息（推荐）
   kubectl -n kubernetes-dashboard get events --sort-by='.lastTimestamp'
   ```

2. 如果是无法访问 docker.io 等外部仓库导致

   ```bash
   # 检查 Deployment 使用的精确镜像引用
   kubectl -n kubernetes-dashboard get deployment dashboard-metrics-scraper  -o jsonpath='{.spec.template.spec.containers[*].image}{"\n"}'
   # 直接拉取这个精确镜像引用
   docker pull docker.io/...
   # 将这个包导入（注意不要带上 digest)
   minikube image load docker.io/kubernetesui/metrics-scraper:v1.0.8
   minikube image load docker.io/kubernetesui/dashboard:v2.7.0
   # 更新部署的容器镜像(明确指定新的新的镜像的路径，由于没有带digest，所以可以直接用导入的)
   kubectl -n kubernetes-dashboard set image deployment/dashboard-metrics-scraper dashboard-metrics-scraper=docker.io/kubernetesui/metrics-scraper:v1.0.8
   # （可选）修改镜像拉取策略，如果已经是IfNotPresent了，就不用修改
   kubectl -n kubernetes-dashboard patch deployment/dashboard-metrics-scraper -p '{
     "spec": {"template": {"spec": {"containers":[{"name":"dashboard-metrics-scraper","imagePullPolicy":"IfNotPresent"}]}}}
   }'
   # (可选）重启部署以生效，一般是自动就生效了
   kubectl -n kubernetes-dashboard rollout restart deployment/dashboard-metrics-scraper
   ```

3. 如果是无法访问 registry.k8s.io 等网站导致

   1. 如果使用了 Clash 代理，且网络能够正常访问 google（比如通过 curl），此时应该考虑给 docker 配置代理。理由如下：

      **curl 会读取 Shell 环境变量中的 http_proxy，并主动走代理，而 docker pull 由 dockerd 执行（而不是Shell）不继承环境变量，且除非开启 TUN 或者为 docker 配置专用代理，否则不会主动走代理。**因此，总体思路是让 docker pull/ docker build 走代理（即配置 dockerd 的代理）。
   
   2. 对于一个 systemd 服务，使用代理的最标准做法是 在 `/etc/systemd/system/docker.service.d/` 放置 override 文件（即 drop-in 文件）。这里主要是为 Dockerd 添加作为代理服务器的环境变量。
   
      ```bash
      sudo mkdir -p /etc/systemd/system/docker.service.d
      
      cat <<'EOF' | sudo tee /etc/systemd/system/docker.service.d/http-proxy.conf
      [Service]
      Environment="HTTP_PROXY=http://127.0.0.1:7890"
      Environment="HTTPS_PROXY=http://127.0.0.1:7890"
      Environment="NO_PROXY=localhost,127.0.0.1,::1"
      EOF
      ```
   
      然后重启 docker
   
      ```bash
      # 1. 重新加载 systemd 配置（使 drop-in 文件生效）
      sudo systemctl daemon-reload
      # 2. 重启服务应用更改
      sudo systemctl restart docker
      ```
   
      验证环境变量是否修改
   
      ```bash
      systemctl show --property=Environment docker
      ```
   
   3. 如果生效之后还是不行，则需要使用curl调试网络，过程如下：
   
      ```bash
      # 使用 docker pull 时，使用了代理，但是连接被端重置，意味着拉去失败，这里使用的HEAD请求的失败
      sudo docker pull registry.k8s.io/e2e-test-images/agnhost:2.53
      报错信息如下：
      Error response from daemon: Head "https://europe-west3-docker.pkg.dev/v2/k8s-artifacts-prod/images/e2e-test-images/agnhost/manifests/2.53": read tcp 127.0.0.1:47816->127.0.0.1:7890: read: connection reset by peer
      
      # 使用 curl 进行网络重试（-v 查看全部信息，-x 强制使用代理）
      curl -v -x http://127.0.0.1:7890 https://europe-west3-docker.pkg.dev/v2/k8s-artifacts-prod/images/e2e-test-images/agnhost/manifests/2.53
      报错信息如下：
      ......
      * TLSv1.3 (OUT), TLS handshake, Client hello (1):
      *  CAfile: /etc/ssl/certs/ca-certificates.crt
      *  CApath: /etc/ssl/certs
      * Recv failure: 连接被对方重置
      * OpenSSL SSL_connect: 连接被对方重置 in connection to europe-west3-docker.pkg.dev:443 
      * Closing connection
      curl: (35) Recv failure: 连接被对方重置
      ```
   
      以上往往意味着clash配置的代理使得该请求没有走何时的代理，此时可以通过开全局代理尝试，如果可以，则通过`Profile`-`edit rules`添加类似 `DOMAIN-SUFFIX:docker.pkg.dev,PROXY` 来解决
   
   4. 其余步骤与步骤 2 类似
