<template><div><h1 id="电脑工作环境复原指南" tabindex="-1"><a class="header-anchor" href="#电脑工作环境复原指南"><span>电脑工作环境复原指南</span></a></h1>
<blockquote>
<p>为了能够方便地迁移环境，在就算我的电脑突然奔溃了或者更换电脑之后也能快速恢复的场景。</p>
</blockquote>
<h2 id="一、配置-windows-环境-以-win-11-为例" tabindex="-1"><a class="header-anchor" href="#一、配置-windows-环境-以-win-11-为例"><span>一、配置 Windows 环境（以 win 11 为例）</span></a></h2>
<h3 id="_1-软件" tabindex="-1"><a class="header-anchor" href="#_1-软件"><span>1 软件</span></a></h3>
<h4 id="_1-1-基础软件" tabindex="-1"><a class="header-anchor" href="#_1-1-基础软件"><span>1.1 基础软件</span></a></h4>
<ul>
<li>
<p>Scoop：可以通过这个一键配置Windows环境，包括需要安装的其他软件，以下所有的软件都可以尝试用这个安装</p>
<blockquote>
<p><a href="https://csdiy.wiki/%E5%BF%85%E5%AD%A6%E5%B7%A5%E5%85%B7/Scoop/" target="_blank" rel="noopener noreferrer">参考网站</a>
打开Power Shell安装：irm get.scoop.sh | iex</p>
</blockquote>
</li>
<li>
<p>Google Chrome：官网下载</p>
</li>
<li>
<p>IDM：移动硬盘（暂时不用）</p>
</li>
<li>
<p>火绒安全软件：官网</p>
</li>
<li>
<p>欧路词典：官网</p>
</li>
<li>
<p>Snipaste：官网（截图用）</p>
</li>
</ul>
<h4 id="_1-2-社交" tabindex="-1"><a class="header-anchor" href="#_1-2-社交"><span>1.2 社交</span></a></h4>
<ul>
<li>微信：官网</li>
<li>TIM：官网</li>
<li>腾讯会议：官网</li>
</ul>
<h4 id="_1-3-办公类" tabindex="-1"><a class="header-anchor" href="#_1-3-办公类"><span>1.3 办公类</span></a></h4>
<ul>
<li>360压缩：官网</li>
<li>Office系列：学校软件正版化（如果可以用的话）</li>
<li>Typora：移动硬盘</li>
<li>XMind：移动硬盘</li>
<li>OneNote2016：学校软件正版化（如果可以用的话）</li>
</ul>
<h4 id="_1-4-编程" tabindex="-1"><a class="header-anchor" href="#_1-4-编程"><span>1.4 编程</span></a></h4>
<ul>
<li>miniconda：官网</li>
<li>Clash for Windows：移动硬盘，链接在官网上设置<a href="https://v0120231124.sctaff.com/auth/login" target="_blank" rel="noopener noreferrer">SPEEDCAT</a>，电脑</li>
<li>git：官网</li>
<li>VScode：官网</li>
<li>Notepad++：官网</li>
<li>PowerToys：官网</li>
<li>Python：官网</li>
<li>WSL：官网</li>
</ul>
<h4 id="_1-5-论文" tabindex="-1"><a class="header-anchor" href="#_1-5-论文"><span>1.5 论文</span></a></h4>
<ul>
<li>Zotero：论文阅读</li>
</ul>
<h4 id="_1-6-其他" tabindex="-1"><a class="header-anchor" href="#_1-6-其他"><span>1.6 其他</span></a></h4>
<ul>
<li>.ssh：移动硬盘</li>
</ul>
<h3 id="_2-设置" tabindex="-1"><a class="header-anchor" href="#_2-设置"><span>2 设置</span></a></h3>
<ul>
<li>
<p>一键重置电脑：windows10-设置-恢复-重置此电脑</p>
<blockquote>
<p><strong>按“Windows 徽标键+I” 启动设置，选择“更新和安全”&gt;“恢复”&gt;“重置此电脑”，选择不保留个人文件重置设备，即可恢复出厂设置</strong>。</p>
</blockquote>
</li>
</ul>
<h3 id="_3-安装顺序" tabindex="-1"><a class="header-anchor" href="#_3-安装顺序"><span>3 安装顺序</span></a></h3>
<ol>
<li>Clash for Windows：复制.exe文件到桌面-双击安装-登录SPEEDCAT导入Clash订阅链接-安装ServiceMode-TUNMode-SystemProxy</li>
<li>Scoop：</li>
</ol>
<blockquote>
<p>Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex</p>
</blockquote>
<ol start="3">
<li>git</li>
</ol>
<blockquote>
<p>scoop install git  # 首先安装git</p>
</blockquote>
<ol start="3">
<li>google chrome：</li>
</ol>
<blockquote>
<p>scoop bucket known  # 查看目前有的官方软件源
scoop bucket add extras  # 添加软件源
scoop install googelchrome</p>
</blockquote>
<ol start="4">
<li>scoop install powertoys</li>
<li>scoop install snipaste vscode miniconda3 wechat notepadplusplus</li>
<li>根据自定义的设置安装国内的软件：火绒、欧路词典、TIM、腾讯会议</li>
<li>下载特定版本的Typora并激活：scoop install typora@1.3.8 （激活参照typora补丁.zip）</li>
</ol>
<h2 id="二、配置linux环境-以-ubuntu-24-04-为例" tabindex="-1"><a class="header-anchor" href="#二、配置linux环境-以-ubuntu-24-04-为例"><span>二、配置Linux环境（以 Ubuntu 24.04 为例）</span></a></h2>
<h3 id="_1-安装软件" tabindex="-1"><a class="header-anchor" href="#_1-安装软件"><span>1. 安装软件</span></a></h3>
<ul>
<li>
<h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h3>
<ul>
<li>Google Chrome：官网下载</li>
<li>Snipaste：官网下载（截图用）</li>
<li>GNOME Tweaks：（Ubuntu工具，可以用于按键映射）</li>
</ul>
<h3 id="社交" tabindex="-1"><a class="header-anchor" href="#社交"><span>社交</span></a></h3>
<ul>
<li>微信：官网（暂时没有Linux版本）</li>
<li>飞书</li>
</ul>
<h3 id="办公类" tabindex="-1"><a class="header-anchor" href="#办公类"><span>办公类</span></a></h3>
<ul>
<li>使用WPS平替</li>
<li>Typora：官网下载</li>
<li>XMind：移动硬盘</li>
</ul>
<h3 id="编程" tabindex="-1"><a class="header-anchor" href="#编程"><span>编程</span></a></h3>
<ul>
<li>miniconda：官网下载</li>
<li>Clash for Windows：移动硬盘，链接在官网上设置<a href="https://v0120231124.sctaff.com/auth/login" target="_blank" rel="noopener noreferrer">SPEEDCAT</a>，电脑</li>
<li>git：官网</li>
<li>VScode：官网</li>
<li>Pycharm：官网</li>
</ul>
<h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h3>
<ul>
<li>.ssh：移动硬盘</li>
<li>zotero：阅读英语文献</li>
</ul>
</li>
</ul>
<h3 id="_2-安装顺序" tabindex="-1"><a class="header-anchor" href="#_2-安装顺序"><span>2. 安装顺序</span></a></h3>
<ol>
<li>
<p>安装Ubuntu系统（Ubuntu24.04 fcitx 5会自带中文输入法）；</p>
</li>
<li>
<p>安装Git：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">sudo apt install git -y</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>安装Typora</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line"># 查看电脑架构</span>
<span class="line">uname -m</span>
<span class="line"></span>
<span class="line"># 下载 Typora 安装包</span>
<span class="line"># X86(Amd) 架构 </span>
<span class="line">wget https://download2.typoraio.cn/linux/typora_1.9.3_amd64.deb --output-document typora.deb</span>
<span class="line"></span>
<span class="line"># 安装 Typora 软件包</span>
<span class="line">sudo dpkg -i typora.deb</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><a href="https://zhuanlan.zhihu.com/p/636193675" target="_blank" rel="noopener noreferrer">安装并破解</a></li>
</ul>
</li>
<li>
<p>安装clash：</p>
<ul>
<li>
<p>登录SPEEDCAT（可通过outlook进行查找）复制Clash订阅链接：</p>
<ul>
<li>
<p>网站域名: <a href="https://u42002938.ct.sendgrid.net/ls/click?upn=u001.sJUdD1HgOi86VckL9VQzLWJTo-2B-2FKYxR62gKVvdwPLaeu9tmngRHILc0otYPaJh95AAkz_1bppnCrr0xPUk5R53WnW1Rpk-2BVDtfGehPgJrF-2FP70IfVRke0O9XPZ-2Bt2R5s91-2FVFycrCX-2BWALlgV0ciUGPlk-2Be9SDKpwTTu3kQ-2Bp5OjkItXkNPZanB-2BxP5qCjS-2FYCYOK6Rnw4SGAQuJ74RAP1h-2FI-2B59lj4ydB990WX6jmbn-2FbpmNcb6msg7d-2BrVbzQ3gmNb9xhvO6Ut1pv9JbUBM68dCRT5wOychUNdZVKUlc6asTbc-3D" target="_blank" rel="noopener noreferrer">https://www.speedcat.la</a>
备用域名: <a href="https://u42002938.ct.sendgrid.net/ls/click?upn=u001.sJUdD1HgOi86VckL9VQzLQ89ZlOSoNs6xRLZmk0kTw4IqX5JoZ25aMFfSFJGubVokP17_1bppnCrr0xPUk5R53WnW1Rpk-2BVDtfGehPgJrF-2FP70IfVRke0O9XPZ-2Bt2R5s91-2FVFycrCX-2BWALlgV0ciUGPlk-2BcmFq-2BRx5ExcbCeEaaXNgepEHIZ-2BShSmPAh3ut6dHH38seAmFYLk7KZ2pHGmfojUTixsAqfTPJRvFTcuB7ndGuhHnqylCPkE0U0S8-2Ftj0QdMuDLhP-2F8Qp6K8AXvatiEt-2FwjSBZZhSldTlMUi2hy2qvg-3D" target="_blank" rel="noopener noreferrer">https://www.speedcat.in</a>
全球加速: <a href="https://u42002938.ct.sendgrid.net/ls/click?upn=u001.sJUdD1HgOi86VckL9VQzLUqcrucOuPSaGPAM29VH1ss-3DRVlP_1bppnCrr0xPUk5R53WnW1Rpk-2BVDtfGehPgJrF-2FP70IfVRke0O9XPZ-2Bt2R5s91-2FVFycrCX-2BWALlgV0ciUGPlk-2BaY6E72BQnFf9rcd7xkEntVGmltQUYG1MfRcgVjgNb60nhezXRtC-2BDbkLrWjavX-2BIYlkM3x4xq3Pb2-2FUBlEeaYvafw-2FXsURfci0fsVBw2tbHYz-2B-2BgulWzlXwv346zPMmATWSH8pXlziK7dxxFcWxpTA-3D" target="_blank" rel="noopener noreferrer">https://www.scweb.cc</a></p>
</li>
<li>
<p>安装Clash。</p>
<p>方案1：参考：<a href="https://docs.gtk.pw/contents/linux/linux-clash-gui.html#%E4%B8%8B%E8%BD%BD" target="_blank" rel="noopener noreferrer">在 Linux 下使用 Clash for Windows GUI</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 解压缩，注意将具体的文件名字替换为自己下载的文件名。</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> clash-linux-amd64-*.gz</span>
<span class="line"><span class="token comment"># 运行cfw文件</span></span>
<span class="line">./cfw</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>方案2：直接使用自己硬盘里面下载好的程序直接复制到原电脑上就行</p>
</li>
<li>
<p>配置自己的代理：与普通的windows模式一样</p>
<ul>
<li>
<p>设置系统代理（相比windows系统多的一步）：</p>
<p>修改Linux系统的网络代理为<strong>手动</strong>：配置 http 和 https 为：127.0.0.1:7890</p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>另：可以下载Ubuntu系统中的软件商店（snap install）下载 vpnfly，可以凑合使用10GB</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">sudo snap install vpnfly</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>安装 Chrome 浏览器</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">1. 能够使用 www.google.com 时，搜索 chrome 直接从官网下载；</span>
<span class="line">2. sudo dpkg -i google-chrome-stable_current_amd64.deb</span>
<span class="line">3. 下载后登录自己的 gmail 账号便基本上完全恢复自己的 chrome 能力。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>修改输入法</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 需要将自己的输入法调整为 fcitx 5</span></span>
<span class="line">im-config</span>
<span class="line"><span class="token comment"># 重启电脑</span></span>
<span class="line"><span class="token function">reboot</span></span>
<span class="line"><span class="token comment"># clone 以下的安装包并选择完全自定义。</span></span>
<span class="line"><span class="token function">git</span> clone https://github.com/sanshi42/fcitx5_customizer</span>
<span class="line"><span class="token builtin class-name">cd</span> fcitx5_customizer/</span>
<span class="line"><span class="token function">bash</span> fcitx5_customizer.sh</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>安装build-essential</p>
<p><code v-pre>build-essential</code> 包含编译 C/C++ 程序所需的工具链，包括 <code v-pre>gcc</code>、<code v-pre>g++</code> 和 <code v-pre>make</code>，推荐一并安装：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> build-essential</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>安装Vim</p>
<p>推荐第一种方案：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> vim-gtk3 <span class="token parameter variable">-y</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者：</p>
<p>参照<a href="https://www.cnblogs.com/gmpy/p/11177719.html" target="_blank" rel="noopener noreferrer">这个</a>从官网安装，但比较折磨人</p>
</li>
<li>
<p>安装其他配置文件（需要在安装其他软件之前）</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 1. 需要安装的dotfiles文件，参照：https://github.com/sanshi42/dotfiles</span></span>
<span class="line"><span class="token function">rm</span> ~/.bashrc</span>
<span class="line"><span class="token function">git</span> clone https://github.com/sanshi42/dotfiles</span>
<span class="line"><span class="token builtin class-name">cd</span> dotfiles/</span>
<span class="line">./autoconfig.sh</span>
<span class="line"><span class="token comment"># 2. 配置其他的.ssh和.kube文件，这部分直接从硬盘中的my_dotfiles中复制</span></span>
<span class="line">ctrl + H <span class="token comment"># 显示隐藏文件</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>安装Snipaste</p>
</li>
</ol>
<ul>
<li>
<p>官网下载.AppImage文件</p>
</li>
<li>
<p>将其改为可运行文件：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 安装依赖</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> fuse <span class="token parameter variable">-y</span></span>
<span class="line"><span class="token comment"># 设置为可运行</span></span>
<span class="line"><span class="token function">chmod</span> a+x appimage文件</span>
<span class="line"><span class="token comment"># 运行程序</span></span>
<span class="line"><span class="token comment"># 设为开机启动并关闭更新提醒</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<ol start="11">
<li>安装Flatpak（暂时弃用，因为用不着，方便安装其他的ubuntu官方商店不存在的软件，如微信）</li>
</ol>
<ul>
<li>
<p>参照<a href="https://zhuanlan.zhihu.com/p/55299546" target="_blank" rel="noopener noreferrer">安装</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> flatpak</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> gnome-software-plugin-flatpak  <span class="token comment"># Gnome 提供了一个 Flatpak 插件，安装它就可以使用图形界面来安装 Flatpak app 了</span></span>
<span class="line"><span class="token function">sudo</span> flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo  <span class="token comment"># 添加 Flathub 仓库</span></span>
<span class="line"><span class="token function">sudo</span> flatpak remote-modify flathub <span class="token parameter variable">--url</span><span class="token operator">=</span>https://mirror.sjtu.edu.cn/flathub  <span class="token comment"># Flathub 镜像</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<ol start="11">
<li>安装WPS和Xmind</li>
</ol>
<ul>
<li>官网下载deb包</li>
<li>sudo dpkg -i wps-office_11.1.0.11719_amd64.deb</li>
</ul>
<ol start="11">
<li>
<p>安装 miniconda</p>
<p>建议Chrome搜索官网的推荐安装教程</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh</span>
<span class="line">bash ~/Miniconda3-latest-Linux-x86_64.sh</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>安装 docker（建议只安装docker.io，可能版本比较落后，但是极简）</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> docker.io</span>
<span class="line"><span class="token comment"># 将当前用户添加到 docker 组中。这样可以让你在不使用 sudo 的情况下运行 Docker 命令。</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> <span class="token environment constant">$USER</span></span>
<span class="line"><span class="token comment"># 可选，也可以直接运行 logout ，会自动添加</span></span>
<span class="line">newgrp <span class="token function">docker</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>（可选）安装kubectl</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line"># --classic 选项是必要的，因为 kubectl 是需要经典模式权限的</span>
<span class="line">sudo snap install kubectl --classic</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>安装VScode</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">sudo snap install code --classic</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>安装Pycharm（可选）</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">sudo snap install pycharm-community --classic</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>（可选）安装<a href="https://www.yydnas.cn/2023/08/2023.08.16-Ubuntu%E5%AE%89%E8%A3%85%E5%BE%AE%E4%BF%A1%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%96%B9%E6%B3%95/index.html" target="_blank" rel="noopener noreferrer">微信</a></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">flatpak install flathub com.tencent.WeChat</span>
<span class="line">flatpak run com.tencent.WeChat  # 运行程序</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>下载飞书</p>
<p>官网下载安装即可</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">sudo dpkg -i google-chrome-stable_current_amd64.deb</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>（可选）安装zotero</p>
<ul>
<li>使用Flatpak进行安装即可，记得下载翻译插件（google查找即可）</li>
</ul>
</li>
</ol>
<h3 id="_3-已弃用-目前的ubuntu支持得很好-修改vim下的按键设置" tabindex="-1"><a class="header-anchor" href="#_3-已弃用-目前的ubuntu支持得很好-修改vim下的按键设置"><span>3. （已弃用，目前的ubuntu支持得很好）修改vim下的按键设置</span></a></h3>
<ul>
<li>
<p>将esc和caps按键替换（已弃置），<a href="https://blog.csdn.net/qq_35333978/article/details/107602465" target="_blank" rel="noopener noreferrer">参照</a></p>
<ul>
<li>
<p>终端执行：sudo vim /etc/default/keyboard</p>
</li>
<li>
<p>在文件末尾加上：XKBOPTIONS=“caps:swapescape”</p>
</li>
<li>
<p>保存后执行：sudo dpkg-reconfigure keyboard-configuration</p>
</li>
</ul>
</li>
<li>
<p>可以使用 tweaks直接修改，然后在VScode中需要设置：&quot;keyboard.dispatch&quot;: &quot;keyCode&quot;</p>
</li>
</ul>
<h3 id="_4-linux上默认的设置" tabindex="-1"><a class="header-anchor" href="#_4-linux上默认的设置"><span>4. Linux上默认的设置</span></a></h3>
<p><strong>安装的包</strong></p>
<ul>
<li>
<p>cman</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> manpages-zh <span class="token parameter variable">-y</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>GNOME Tweaks：（可以用于设置按键映射）</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">sudo apt install gnome-tweaks -y</span>
<span class="line"># 安装连接到主机的插件</span>
<span class="line">sudo apt install chrome-gnome-shell -y</span>
<span class="line">gnome-tweaks </span>
<span class="line">修改按键映射</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>安装扩展（tweak 插件）</p>
<ol>
<li>推荐 Hide Top Bar</li>
<li>（必备）Input Method Panel ：输入法的优化</li>
</ol>
</li>
<li>
<p>tldr：查看命令的基本信息</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">sudo apt install tldr -y</span>
<span class="line">tldr -u  # 更新页面缓存才能使用</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>（可选，不常用）安装tmux</p>
<ul>
<li>sudo apt install tmux</li>
</ul>
</li>
</ul>
<h3 id="_5-问题修复" tabindex="-1"><a class="header-anchor" href="#_5-问题修复"><span>5. 问题修复</span></a></h3>
<ol>
<li>
<p>如果开机无法进入视图窗口</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">开机后使用 ctrl + F1（或F2）进入tty的窗口，里面可以查看 journal 日志，也可以卸载窗口程序，然后重新安装（好用）。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
</div></template>


