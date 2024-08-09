# 配置 Docker 容器使用主机代理

要在 Docker 容器中使用本地代理 `127.0.0.1:7890`，你需要确保 Docker 容器能够访问该代理。由于 Docker 容器内部的 `127.0.0.1` 指向的是容器本身，而不是主机，你需要使用 Docker 的网络功能来实现这一点。

可以通过以下步骤来配置 Docker 容器使用主机代理：

### 1. 确定主机的 IP 地址

在 Linux 或 macOS 上，可以使用以下命令获取主机的 IP 地址：

```sh
ip -4 addr show docker0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}'
```

通常，这个地址是 `172.17.0.1`，但请根据实际情况调整。

### 2. 修改 Dockerfile

在 `Dockerfile` 中设置环境变量 `HTTP_PROXY` 和 `HTTPS_PROXY` 指向主机 IP 和代理端口。

假设主机 IP 为 `172.17.0.1`，你的 `Dockerfile` 可能如下：

```Dockerfile
FROM golang:1.20-alpine

WORKDIR /src

# 设置代理
ENV HTTP_PROXY=http://172.17.0.1:7890
ENV HTTPS_PROXY=http://172.17.0.1:7890

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN go build -o /app

CMD ["/app"]
```

### 3. 构建 Docker 镜像

使用修改后的 `Dockerfile` 构建镜像：

```sh
docker build --tag=buildme .
```

### 4. 运行 Docker 容器

构建完成后，运行容器时同样需要设置代理环境变量：

```sh
docker run -e HTTP_PROXY=http://172.17.0.1:7890 -e HTTPS_PROXY=http://172.17.0.1:7890 buildme
```

通过这些步骤，你应该能够在 Docker 容器中使用本地代理来下载 Go 模块和其他资源。