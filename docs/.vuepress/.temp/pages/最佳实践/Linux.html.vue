<template><div><h1 id="linux-学习记录与规划" tabindex="-1"><a class="header-anchor" href="#linux-学习记录与规划"><span>Linux 学习记录与规划</span></a></h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>
<ol>
<li><a href="#%E5%AD%A6%E4%B9%A0%E7%9B%AE%E6%A0%87">学习目标</a></li>
<li><a href="#%E5%AD%A6%E4%B9%A0%E8%AE%A1%E5%88%92">学习计划</a></li>
<li><a href="#%E4%B9%A6%E7%B1%8D%E5%88%97%E8%A1%A8">书籍列表</a>
<ul>
<li><a href="#%E4%B9%A6%E7%B1%8D1">书籍1</a></li>
<li><a href="#%E4%B9%A6%E7%B1%8D2">书籍2</a></li>
<li><a href="#%E4%B9%A6%E7%B1%8D3">书籍3</a></li>
</ul>
</li>
<li><a href="#%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0">学习笔记</a>
<ul>
<li><a href="#%E4%B9%A6%E7%B1%8D1%E7%AC%94%E8%AE%B0">书籍1笔记</a></li>
<li><a href="#%E4%B9%A6%E7%B1%8D2%E7%AC%94%E8%AE%B0">书籍2笔记</a></li>
<li><a href="#%E4%B9%A6%E7%B1%8D3%E7%AC%94%E8%AE%B0">书籍3笔记</a></li>
</ul>
</li>
<li><a href="#%E6%80%BB%E7%BB%93%E4%B8%8E%E5%8F%8D%E6%80%9D">总结与反思</a></li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标"><span>学习目标</span></a></h2>
<blockquote>
<p>参照《鸟哥的Linux私房菜-基础学习篇(第四版)》的目录进行的规划</p>
</blockquote>
<ul>
<li>掌握Linux基本命令和操作。
<ul>
<li>Linux的规则与安装（这部分需要考虑将自己的笔记本电脑进行这样的操作与安装）</li>
</ul>
</li>
<li>理解Linux文件系统和权限管理。
<ul>
<li>Linux文件、目录与磁盘格式</li>
<li>Linux使用者管理</li>
</ul>
</li>
<li>能够编写Shell脚本进行系统自动化。
<ul>
<li>学习shell与shell script</li>
</ul>
</li>
<li>了解系统管理和网络配置。
<ul>
<li>Linux系统管理员</li>
</ul>
</li>
<li>考虑将自己的老旧的笔记本改装成一个小型的服务器。
<ul>
<li>学习《鸟哥的Linux私房菜-服务器架设篇（第三版修改版）》</li>
</ul>
</li>
</ul>
<h2 id="学习计划" tabindex="-1"><a class="header-anchor" href="#学习计划"><span>学习计划</span></a></h2>
<ul>
<li><strong>第一周（2024年5月27日——2024年6月02日）</strong>：阅读《鸟哥的Linux私房菜-基础学习篇（第四版）》第1-6章，学习基本命令。
<ul>
<li>跳过了第二章-主机规划与测盘分区、第三章-安装CentOS 7.x。这部分在自己的笔记本电脑上安装Linux时再看。</li>
<li>2024年6月16日在重装的笔记本系统中重新学习了第二章和第三章。</li>
</ul>
</li>
<li><strong>第二周（2024年6月03日——2024年6月09日）</strong>：阅读《鸟哥的Linux私房菜-基础学习篇（第四版）》第7-14章，练习文件系统、权限管理、shell与shell script以及Linux使用者管理。
<ul>
<li>第14章看得比较潦草，后续可以考虑进行实际的笔记本电脑上进行服务器设置时，再来看。</li>
</ul>
</li>
<li><strong>第三周（2024年6月10日——2024年6月16日）</strong>：阅读《鸟哥的Linux私房菜-基础学习篇（第四版）》第15-18章，学习Linux系统管理员的相关知识。
<ul>
<li>2024年6月10日：阅读完第15章和第16章，由于第16章的selinux进行设置的时候出现了系统宕机，使用tty3进行禁用SELinux才恢复过来，因此这部分的内容暂时就这样，等有需要的时候再学习。</li>
<li>2024年6月14日：阅读完《鸟哥的Linux私房菜-基础学习篇（第四版）》第19-24章，学习系统管理和网络配置等知识。跳过了不少内容，有些内容不感兴趣，有些内容无法复现。最后一章干脆是没去管了。</li>
<li>2024年6月15日——2024年6月16日：在自己的旧电脑上安装一个新的Linux，尝试从内核编译开始做起，主要用作服务器架设的基础。</li>
</ul>
</li>
<li><strong>第四周（2024年6月17日——2024年6月23日）</strong>：阅读《鸟哥的Linux私房菜-服务器架设篇（第三版修改版）》，对照着<a href="https://linux.vbird.org/linux_server/rocky9/0150networking.php" target="_blank" rel="noopener noreferrer">鸟哥的Linux私房菜2023版网站</a>
<ul>
<li>注意到这个第三版已经是十多年前（2011年）的版本，目前我安装的主机也是最新的RockyLinux9.4，因此我决定完全抛弃旧有的那本书，直接跟随最新版的教程开始学习。</li>
</ul>
</li>
<li><strong>第五周（2024年6月24日——2024年6月30日）</strong>：……待定</li>
</ul>
<h2 id="书籍列表" tabindex="-1"><a class="header-anchor" href="#书籍列表"><span>书籍列表</span></a></h2>
<h3 id="书籍1" tabindex="-1"><a class="header-anchor" href="#书籍1"><span>书籍1</span></a></h3>
<ul>
<li><strong>书名</strong>：书籍1的名称</li>
<li><strong>作者</strong>：作者名字</li>
<li><strong>简介</strong>：简要介绍书籍内容</li>
</ul>
<h3 id="书籍2" tabindex="-1"><a class="header-anchor" href="#书籍2"><span>书籍2</span></a></h3>
<ul>
<li><strong>书名</strong>：书籍2的名称</li>
<li><strong>作者</strong>：作者名字</li>
<li><strong>简介</strong>：简要介绍书籍内容</li>
</ul>
<h3 id="书籍3" tabindex="-1"><a class="header-anchor" href="#书籍3"><span>书籍3</span></a></h3>
<ul>
<li><strong>书名</strong>：书籍3的名称</li>
<li><strong>作者</strong>：作者名字</li>
<li><strong>简介</strong>：简要介绍书籍内容</li>
</ul>
<h2 id="学习笔记" tabindex="-1"><a class="header-anchor" href="#学习笔记"><span>学习笔记</span></a></h2>
<h3 id="书籍1笔记" tabindex="-1"><a class="header-anchor" href="#书籍1笔记"><span>书籍1笔记</span></a></h3>
<h4 id="第1章-标题" tabindex="-1"><a class="header-anchor" href="#第1章-标题"><span>第1章 标题</span></a></h4>
<ul>
<li>关键点1</li>
<li>关键点2</li>
<li>关键点3</li>
</ul>
<h4 id="第2章-标题" tabindex="-1"><a class="header-anchor" href="#第2章-标题"><span>第2章 标题</span></a></h4>
<ul>
<li>关键点1</li>
<li>关键点2</li>
<li>关键点3</li>
</ul>
<h3 id="书籍2笔记" tabindex="-1"><a class="header-anchor" href="#书籍2笔记"><span>书籍2笔记</span></a></h3>
<h4 id="第1章-标题-1" tabindex="-1"><a class="header-anchor" href="#第1章-标题-1"><span>第1章 标题</span></a></h4>
<ul>
<li>关键点1</li>
<li>关键点2</li>
<li>关键点3</li>
</ul>
<h4 id="第2章-标题-1" tabindex="-1"><a class="header-anchor" href="#第2章-标题-1"><span>第2章 标题</span></a></h4>
<ul>
<li>关键点1</li>
<li>关键点2</li>
<li>关键点3</li>
</ul>
<h3 id="书籍3笔记" tabindex="-1"><a class="header-anchor" href="#书籍3笔记"><span>书籍3笔记</span></a></h3>
<h4 id="第1章-标题-2" tabindex="-1"><a class="header-anchor" href="#第1章-标题-2"><span>第1章 标题</span></a></h4>
<ul>
<li>关键点1</li>
<li>关键点2</li>
<li>关键点3</li>
</ul>
<h4 id="第2章-标题-2" tabindex="-1"><a class="header-anchor" href="#第2章-标题-2"><span>第2章 标题</span></a></h4>
<ul>
<li>关键点1</li>
<li>关键点2</li>
<li>关键点3</li>
</ul>
<h2 id="总结与反思" tabindex="-1"><a class="header-anchor" href="#总结与反思"><span>总结与反思</span></a></h2>
<ul>
<li>学习过程中遇到的困难和解决方法。</li>
<li>对每本书的整体评价和总结。</li>
<li>下一步的学习计划和改进措施。</li>
</ul>
</div></template>


