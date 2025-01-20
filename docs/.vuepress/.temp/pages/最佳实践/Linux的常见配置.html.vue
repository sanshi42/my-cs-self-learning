<template><div><h1 id="_0-linux安装" tabindex="-1"><a class="header-anchor" href="#_0-linux安装"><span>0.Linux安装</span></a></h1>
<p>以Rocky Linux为例子。</p>
<h1 id="_1-初始的管理任务" tabindex="-1"><a class="header-anchor" href="#_1-初始的管理任务"><span>1.初始的管理任务</span></a></h1>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 全系统更新</span></span>
<span class="line">dnf <span class="token parameter variable">-y</span> update</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 常用软件安装</span></span>
<span class="line">dnf <span class="token parameter variable">-y</span> <span class="token function">install</span> bind-utils vim-enhanced bash-completion net-tools yum-utils tuned</span>
<span class="line"></span>
<span class="line"><span class="token comment"># tuned 效能调整</span></span>
<span class="line">tuned-adm profile virtual-guest</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


