<template><div><h1 id="git-工作流程" tabindex="-1"><a class="header-anchor" href="#git-工作流程"><span>Git 工作流程</span></a></h1>
<blockquote>
<p>Git 提交信息的撰写规范请参照<RouteLink to="/%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC.html">代码风格</RouteLink></p>
</blockquote>
<h2 id="一、新建并切换到该分支" tabindex="-1"><a class="header-anchor" href="#一、新建并切换到该分支"><span>一、新建并切换到该分支</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> iss53  <span class="token comment"># 会将未暂存的内容也迁移到新的分支</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="二、合并特定分支的内容" tabindex="-1"><a class="header-anchor" href="#二、合并特定分支的内容"><span>二、合并特定分支的内容</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> checkout master  <span class="token comment"># 切换到主分支或者想要合并之前的修改的分支</span></span>
<span class="line"><span class="token function">git</span> merge iss53</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、删除分支" tabindex="-1"><a class="header-anchor" href="#三、删除分支"><span>三、删除分支</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-d</span> iss53  <span class="token comment"># 删除过时的分支名</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="四、解决合并冲突" tabindex="-1"><a class="header-anchor" href="#四、解决合并冲突"><span>四、解决合并冲突</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> mergetool  <span class="token comment"># 使用图形化工具进行合并</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


