<template><div><h1 id="配置-docker-容器使用主机代理" tabindex="-1"><a class="header-anchor" href="#配置-docker-容器使用主机代理"><span>配置 Docker 容器使用主机代理</span></a></h1>
<p>要在 Docker 容器中使用本地代理 <code v-pre>127.0.0.1:7890</code>，你需要确保 Docker 容器能够访问该代理。由于 Docker 容器内部的 <code v-pre>127.0.0.1</code> 指向的是容器本身，而不是主机，你需要使用 Docker 的网络功能来实现这一点。</p>
<p>可以通过以下步骤来配置 Docker 容器使用主机代理：</p>
<h3 id="_1-确定主机的-ip-地址" tabindex="-1"><a class="header-anchor" href="#_1-确定主机的-ip-地址"><span>1. 确定主机的 IP 地址</span></a></h3>
<p>在 Linux 或 macOS 上，可以使用以下命令获取主机的 IP 地址：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">ip</span> <span class="token parameter variable">-4</span> addr show docker0 <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-oP</span> <span class="token string">'(?&lt;=inet\s)\d+(\.\d+){3}'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>通常，这个地址是 <code v-pre>172.17.0.1</code>，但请根据实际情况调整。</p>
<h3 id="_2-修改-dockerfile" tabindex="-1"><a class="header-anchor" href="#_2-修改-dockerfile"><span>2. 修改 Dockerfile</span></a></h3>
<p>在 <code v-pre>Dockerfile</code> 中设置环境变量 <code v-pre>HTTP_PROXY</code> 和 <code v-pre>HTTPS_PROXY</code> 指向主机 IP 和代理端口。</p>
<p>假设主机 IP 为 <code v-pre>172.17.0.1</code>，你的 <code v-pre>Dockerfile</code> 可能如下：</p>
<div class="language-Dockerfile line-numbers-mode" data-highlighter="prismjs" data-ext="Dockerfile" data-title="Dockerfile"><pre v-pre><code><span class="line">FROM golang:1.20-alpine</span>
<span class="line"></span>
<span class="line">WORKDIR /src</span>
<span class="line"></span>
<span class="line"># 设置代理</span>
<span class="line">ENV HTTP_PROXY=http://172.17.0.1:7890</span>
<span class="line">ENV HTTPS_PROXY=http://172.17.0.1:7890</span>
<span class="line"></span>
<span class="line">COPY go.mod go.sum ./</span>
<span class="line">RUN go mod download</span>
<span class="line"></span>
<span class="line">COPY . .</span>
<span class="line"></span>
<span class="line">RUN go build -o /app</span>
<span class="line"></span>
<span class="line">CMD [&quot;/app&quot;]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-构建-docker-镜像" tabindex="-1"><a class="header-anchor" href="#_3-构建-docker-镜像"><span>3. 构建 Docker 镜像</span></a></h3>
<p>使用修改后的 <code v-pre>Dockerfile</code> 构建镜像：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> build <span class="token parameter variable">--tag</span><span class="token operator">=</span>buildme <span class="token builtin class-name">.</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_4-运行-docker-容器" tabindex="-1"><a class="header-anchor" href="#_4-运行-docker-容器"><span>4. 运行 Docker 容器</span></a></h3>
<p>构建完成后，运行容器时同样需要设置代理环境变量：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-e</span> <span class="token assign-left variable">HTTP_PROXY</span><span class="token operator">=</span>http://172.17.0.1:7890 <span class="token parameter variable">-e</span> <span class="token assign-left variable">HTTPS_PROXY</span><span class="token operator">=</span>http://172.17.0.1:7890 buildme</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>通过这些步骤，你应该能够在 Docker 容器中使用本地代理来下载 Go 模块和其他资源。</p>
</div></template>


