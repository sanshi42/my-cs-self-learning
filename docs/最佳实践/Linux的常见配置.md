# 0.Linux安装

以Rocky Linux为例子。

# 1.初始的管理任务

```bash
# 全系统更新
dnf -y update

# 常用软件安装
dnf -y install bind-utils vim-enhanced bash-completion net-tools yum-utils tuned

# tuned 效能调整
tuned-adm profile virtual-guest
```



