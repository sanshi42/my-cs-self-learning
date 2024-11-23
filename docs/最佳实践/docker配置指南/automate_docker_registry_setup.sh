sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
    "registry-mirrors": [
        "https://docker.registry.cyou",
        "https://docker-cf.registry.cyou",
        "https://dockerpull.com",
        "https://dockerproxy.cn",
        "https://docker.1panel.live",
        "https://hub.rat.dev",
        "https://dhub.kubesre.xyz",
        "https://docker.hlyun.org",
        "https://docker.kejilion.pro",
        "https://registry.dockermirror.com",
        "https://docker.mrxn.net",
        "https://docker.chenby.cn",
        "https://ccr.ccs.tencentyun.com",
        "https://hub.littlediary.cn",
        "https://hub.firefly.store",
        "https://docker.nat.tf",
        "https://hub.yuzuha.cc",
        "https://hub.crdz.gq",
        "https://noohub.ru",
        "https://docker.nastool.de",
        "https://hub.docker-ttc.xyz",
        "https://freeno.xyz",
        "https://docker.hpcloud.cloud",
        "https://dislabaiot.xyz",
        "https://docker.wget.at",
        "https://ginger20240704.asia",
        "https://lynn520.xyz",
        "https://doublezonline.cloud",
        "https://dockerproxy.com",
        "https://hub.xdark.top",
        "https://docker.awsl9527.cn"
    ]
}
EOF
sudo systemctl daemon-reload && sudo systemctl restart docker
docker info 
