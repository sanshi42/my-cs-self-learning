# Ubuntu 自启动程序

## 概述

尝试在ubuntu系统开机时自动启动部分的程序。

## 方法

使用`.desktop`文件，以 clash 文件为例：

- 创建一个启动项文件`~/.config/autostart/clash.desktop`

- 按照 INI 文件格式撰写如下最简内容：

  ```ini
  [Desktop Entry]
  # 其中Type、Name和Exec字段是必填的
  Type=Application
  Name=Clash
  Exec="/home/huanglei/workspace/my_software/my_Clash/cfw"
  # Nodisplapy设为false表示启动后隐藏
  NoDisplay=true
  # 不在终端中运行
  Terminal=false
  # 不启用启动动画
  StartupNotify=false
  ```

  
