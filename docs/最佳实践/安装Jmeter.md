# 安装 Jmeter

## 概述

Jmeter 安装的详细介绍。

## 步骤

请预先安装 Java 17。

1. 下载并解压到指定文件，由于是一般是使用 .sh 文件启动的，建议安装到用户目录中而不是 /opt，如：

   ```bash
   wget -qO - https://dlcdn.apache.org//jmeter/binaries/apache-jmeter-5.6.3.tgz | tar -xzv -C /home/huanglei/workspace/my_software
   ```

2. （可选）设置环境变量

   ```bash
   # 编辑文件
   vim ~/.bashrc
   # 压测工具 Jmeter
   export JMETER_HOME=/home/huanglei/workspace/my_software/apache-jmeter-5.6.3
   export PATH=$JMETER_HOME/bin:$PATH
   
   # 应用修改
   . ~/.bashrc
   
   # 验证安装
   jmeter -v
   ```

3. （可选）创建桌面快捷方式

   编辑用户级启动项

   ```bash
   vim ~/.local/share/applications/jmeter.desktop
   ```

   推荐配置如下，注意使用绝对路径，且不能使用`~`替代工作目录

   ```ini
   [Desktop Entry]
   Name=Apache JMeter
   Comment=Performance testing tool
   Exec=/home/huanglei/workspace/my_software/apache-jmeter-5.6.3/bin/jmeter.sh
   Icon=/home/huanglei/workspace/my_software/apache-jmeter-5.6.3/docs/images/jmeter_square.png
   Terminal=false
   Type=Application
   Categories=Development;Testing;
   StartupNotify=true
   ```

   赋予执行权限

   ```bash
   chmod +x ~/.local/share/applications/jmeter.desktop
   ```

   刷新桌面应用数据库

   ```bash
   update-desktop-database ~/.local/share/applications
   ```

4. 安装 Jmeter 插件管理器

   ```
   cd ~/workspace/my_software/apache-jmeter-5.6.3/lib/ext/
   # 必须使用--content-disposition选项，跟随重定向并使用推荐的文件名
   wget --content-disposition https://jmeter-plugins.org/get/
   ```

   重启 Jmeter GUI 即可

