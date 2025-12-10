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

2. 如果是无法访问 gcr.io 等外部仓库导致

   ```bash
   # 检查 Deployment 使用的精确镜像引用
   kubectl -n kubernetes-dashboard get deployment dashboard-metrics-scraper  -o jsonpath='{.spec.template.spec.containers[*].image}{"\n"}'
   # 直接拉取这个精确镜像引用
   docker pull docker.io/...
   # 将这个包导入（注意不要带上 digest)
   minikube image load docker.io/kubernetesui/metrics-scraper:v1.0.8
   minikube image load docker.io/kubernetesui/dashboard:v2.7.0
   # 修改镜像拉取策略
   
   ```

   
