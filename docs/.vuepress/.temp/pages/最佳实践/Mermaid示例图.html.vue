<template><div><h1 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h1>
<h2 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图"><span>流程图</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid" data-title="mermaid"><pre v-pre><code><span class="line"><span class="token keyword">flowchart</span> TD</span>
<span class="line">    A<span class="token text string">[开始]</span> <span class="token arrow operator">--></span> B<span class="token text string">{工作正常吗?}</span></span>
<span class="line">    B <span class="token arrow operator">--></span><span class="token label property">|是|</span> C<span class="token text string">[继续]</span></span>
<span class="line">    B <span class="token arrow operator">--></span><span class="token label property">|否|</span> D<span class="token text string">[修复]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> E<span class="token text string">[完成]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="时序图" tabindex="-1"><a class="header-anchor" href="#时序图"><span>时序图</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid" data-title="mermaid"><pre v-pre><code><span class="line"><span class="token keyword">sequenceDiagram</span></span>
<span class="line">    <span class="token keyword">participant</span> 张三</span>
<span class="line">    <span class="token keyword">participant</span> 李四</span>
<span class="line">    张三<span class="token arrow operator">->></span>李四<span class="token operator">:</span> 你好，李四，你怎么样？</span>
<span class="line">    李四<span class="token arrow operator">-->></span>张三<span class="token operator">:</span> 我很好，谢谢！</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类图" tabindex="-1"><a class="header-anchor" href="#类图"><span>类图</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid" data-title="mermaid"><pre v-pre><code><span class="line"><span class="token keyword">classDiagram</span></span>
<span class="line">    <span class="token keyword">class</span> 动物 <span class="token punctuation">{</span></span>
<span class="line">        +String 名字</span>
<span class="line">        +int 年龄</span>
<span class="line">        +void 吃<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">class</span> 狗 <span class="token punctuation">{</span></span>
<span class="line">        +String 品种</span>
<span class="line">        +void 吠<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    动物 <span class="token arrow operator">&lt;|--</span> 狗</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="状态图" tabindex="-1"><a class="header-anchor" href="#状态图"><span>状态图</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid" data-title="mermaid"><pre v-pre><code><span class="line"><span class="token keyword">stateDiagram</span></span>
<span class="line">    <span class="token text string">[*]</span> <span class="token arrow operator">--></span> 空闲</span>
<span class="line">    空闲 <span class="token arrow operator">--></span> 移动 <span class="token operator">:</span> 开始</span>
<span class="line">    移动 <span class="token arrow operator">--></span> 空闲 <span class="token operator">:</span> 停止</span>
<span class="line">    空闲 <span class="token arrow operator">--></span> <span class="token text string">[*]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="甘特图" tabindex="-1"><a class="header-anchor" href="#甘特图"><span>甘特图</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid" data-title="mermaid"><pre v-pre><code><span class="line"><span class="token keyword">gantt</span></span>
<span class="line">    title 甘特图示例</span>
<span class="line">    dateFormat  YYYY-MM-DD</span>
<span class="line">    section 第一部分</span>
<span class="line">    任务A          <span class="token operator">:</span>a1, 2023-06-01, 30d</span>
<span class="line">    任务B          <span class="token operator">:</span>after a1  , 20d</span>
<span class="line">    section 第二部分</span>
<span class="line">    第二部分任务C  <span class="token operator">:</span>2023-06-12  , 12d</span>
<span class="line">    另一个任务    <span class="token operator">:</span> 24d</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


