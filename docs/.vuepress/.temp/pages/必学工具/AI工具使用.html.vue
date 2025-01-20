<template><div><h1 id="一、代码辅助工具" tabindex="-1"><a class="header-anchor" href="#一、代码辅助工具"><span>一、代码辅助工具</span></a></h1>
<h2 id="_1-代码的辅助编写辅助工具" tabindex="-1"><a class="header-anchor" href="#_1-代码的辅助编写辅助工具"><span>1. 代码的辅助编写辅助工具</span></a></h2>
<p>Copilot工具（效果应该是最好的，但付费）</p>
<p>通义灵码：国产免费</p>
<p>ChatGPT 常用提示词：</p>
<ol>
<li>
<p>中文文本润色：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">作为一名中文学术论文写作改进助理，你的任务是改进所提供文本的拼写、语法、清晰、简洁和整体可读性，同时分解长句，减少重复，并提供改进建议。请只提供文本的更正版本，避免包括解释。请编辑以下文本</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>提炼函数：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">你将被每次提供一段Python代码片段，里面包含了少量的关于这段代码片段要完成任务的代码注释。你需要根据这些代码片段和注释将给定的代码片段提炼为一个函数。请按照以下顺序完成任务：</span>
<span class="line"><span class="token number">1</span>. 分析这段函数的主要功能；</span>
<span class="line"><span class="token number">2</span>. 根据主要功能给出这段代码的主要优化建议；</span>
<span class="line"><span class="token number">3</span>. 根据优化建议重构这段代码；</span>
<span class="line"><span class="token number">4</span>. 根据优化后的代码和要完成主要功能，将这段代码整合为一个函数，并提炼出一个非常能说明这段代码功能的函数名。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>根据需求编写合适的文档</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">你将被提供一段关于要实现的Python项目的需求描述，里面的是关于需求的非常简略的描述。你需要根据这些内容，完善该需求描述的内容。请不要考虑完整性，但不要过度扩展。请按照一下顺序完成该任务：</span>
<span class="line"><span class="token number">1</span>. 分析这段描述的内容的主要思路；</span>
<span class="line"><span class="token number">2</span>. 根据这个思路提出可以改进的优化建议；</span>
<span class="line"><span class="token number">3</span>. 根据优化建议完善这段描述的内容；</span>
<span class="line"><span class="token number">4</span>. 最终根据完成的内容，提出可以进一步思考的点。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>重构 Python 代码：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">你将被每次提供一段Python代码，里面包含了少量的关于这段代码片段要完成任务的代码注释。你需要根据这些代码片段和注释将给定的代码片段将代码进一步重构并优化。请按照以下顺序完成任务：</span>
<span class="line"><span class="token number">1</span>. 分析这段代码的主要功能；</span>
<span class="line"><span class="token number">2</span>. 运用领域驱动设计中的领域模型、柔性设计等概念分析代码；</span>
<span class="line"><span class="token number">3</span>. 结合根据主要功能给出这段代码的主要优化建议；</span>
<span class="line"><span class="token number">4</span>. 根据优化建议重构这段代码，包括提炼函数、内联函数、提炼变量、改变函数声明、变量改名、函数组合成类等重构方法。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>按照要求给 Python 程序起类名、函数名、方法名、变量名、文件名：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">你将被提供一段关于Python元素的功能的简略描述。提供的格式如下：</span>
<span class="line"><span class="token punctuation">{</span>元素类型<span class="token punctuation">}</span> <span class="token punctuation">{</span>功能描述<span class="token punctuation">}</span></span>
<span class="line">其中以<span class="token punctuation">{</span><span class="token punctuation">}</span>标注的表示主要的类型，其中元素类型表示该Python元素的类型包括：类名、函数名、方法名、变量名、文件名。功能描述是关于这个元素的功能的简略描述。请按照以下顺序完成任务：</span>
<span class="line"><span class="token number">1</span>. 简略分析这个元素要完成的主要功能；</span>
<span class="line"><span class="token number">2</span>. 根据这些主要功能提供候选的3个名称建议。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>按照要求写一份 Python 代码</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">你将每次被提供一段要实现的需求的简单介绍，请提供一段能够完成所提需求功能的具有最佳实践的 Python 代码。请按照以下顺序完成任务：</span>
<span class="line"><span class="token number">1</span>. 分析该需求所提出的主要功能点；</span>
<span class="line"><span class="token number">2</span>. 根据这些功能要求给出最佳实践的建议；</span>
<span class="line"><span class="token number">3</span>. 遵守这些建议提供一段具有 Python 风格的 Python 代码。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li>
<p>按照要求优化所提供的代码片段</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">你将每次被提供一段简单的脚本，可能会附带需要进一步完善的需求，请提供一段能够完成所提需求功能的具有最佳实践的代码脚本。请按照以下顺序完成任务：</span>
<span class="line"><span class="token number">1</span>. 分析该需求所提出的主要功能点；</span>
<span class="line"><span class="token number">2</span>. 根据这些功能要求给出最佳实践的建议；</span>
<span class="line"><span class="token number">3</span>. 遵守这些建议提供一段具有简洁风格的代码脚本。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>写周报</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">你将每次接收到一位Python软件开发工程师在一周内每天具体完成的工作记录。请根据这些记录帮助他编写该周的周报。周报应该包括两个主要部分：</span>
<span class="line">本周工作：详细描述本周完成的工作内容和成果，可以包括项目进展、解决的问题、代码提交等。</span>
<span class="line">下周计划：简要概述下周的工作计划和目标，可以涵盖主要任务和预期成果。</span>
<span class="line">请确保周报结构清晰，内容准确，并能够突出本周的关键工作和下周的工作重点。请按照以下顺序完成任务：</span>
<span class="line"><span class="token number">1</span>. 分析该周的主要工作和完成情况；</span>
<span class="line"><span class="token number">2</span>. 根据分析结果撰写本周工作内容；</span>
<span class="line"><span class="token number">3</span>. 根据撰写的本周工作内容，撰写下周的计划。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>解决 BUG</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">你将每次接收到关于一段需要解决的代码脚本问题，这里面会附带出现这种问题的具体介绍，请根据这些介绍，尝试帮助解决该问题。请按照以下的顺序进行解答：</span>
<span class="line"><span class="token number">1</span>. 理解和分析所接收到问题；</span>
<span class="line"><span class="token number">2</span>. 解释产生这种结果的底层原理；</span>
<span class="line"><span class="token number">3</span>. 根据这些顶层原理提供可行的解决方案；</span>
<span class="line"><span class="token number">4</span>. 从这些解决方案中推荐一个最佳实践。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>优化测试架构</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">你将被每次提供一段Python的页面自动化测试框架代码，主要使用了Pytest和Selenium工具，里面包含了少量的关于这段代码片段要完成任务的代码注释。你需要根据这些代码片段和注释将给定的代码片段将代码进一步重构并优化。请按照以下顺序完成任务：</span>
<span class="line"><span class="token number">1</span>. 分析这段代码的主要功能；</span>
<span class="line"><span class="token number">2</span>. 分析是否符合 Selenium 进行测试的最佳实践；</span>
<span class="line"><span class="token number">3</span>. 分析是否符合 Pytest 的推荐最佳实践；</span>
<span class="line"><span class="token number">4</span>. 分析是否符合测试相关流程的最佳实践，比如：arrange-act-assert；</span>
<span class="line"><span class="token number">5</span>. 给出这段代码的主要优化建议；</span>
<span class="line"><span class="token number">3</span>. 根据优化建议重构这段代码。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="11">
<li>
<p>学习助手</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line">你将作为一个资深的算法工程师去帮助一个 Python 程序开发员学习《算法导论》这本书，被每次提供一段关于某些算法的描述片段。你需要根据这些描述片段，对可能涉及的相关算法知识提出详细的解释。请按照以下顺序完成任务：</span>
<span class="line"><span class="token number">1.</span> 分析这段算法相关描述的主要内容；</span>
<span class="line"><span class="token number">2.</span> 根据主要内容给出算法的主要介绍；</span>
<span class="line"><span class="token number">3.</span> 根据主要介绍提供一个简单的业务场景，并给出 Python 代码示例；</span>
<span class="line"><span class="token number">4.</span> 总结并给出后续学习的建议。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>写绩效自评</p>
</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">你将接收到一位Python软件开发工程师在本年Q4季度的绩效自评。请根据这些记录帮助他进一步完善，改进所提供文本的拼写、语法、清晰、简洁和整体可读性，同时分解长句，减少重复，并提供改进建议。。</span>
<span class="line">请确保结构清晰，内容准确，请按照以下顺序完成任务：</span>
<span class="line">1. 分析该绩效自评的主要内容；</span>
<span class="line">2. 根据分析结果撰写新的绩效自评。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="13">
<li>写月总结</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">你将每次接收到一位Python软件开发工程师在一个月内每天具体完成的工作记录。请根据这些记录帮助他编写该月的月总结。简略梳理本月完成的主要工作内容和成果等。</span>
<span class="line">请确保总结结构清晰，内容准确，并改进所提供文本的拼写、语法、清晰、简洁和整体可读性，同时分解长句，减少重复，并提供改进建议。请按照以下顺序完成任务：</span>
<span class="line">1. 梳理该月的主要工作和完成情况；、</span>
<span class="line">2. 根据分析结果总结本月主题；</span>
<span class="line">3. 按照本月主题，在撰写本月总结；</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-chatgpt-的提示词工程学习" tabindex="-1"><a class="header-anchor" href="#_2-chatgpt-的提示词工程学习"><span>2.ChatGPT 的提示词工程学习：</span></a></h2>
<p><a href="https://learn.deeplearning.ai/courses/chatgpt-prompt-eng/lesson/1/introduction" target="_blank" rel="noopener noreferrer">给开发者的ChatGPT提示语工程</a> 笔记如下：</p>
<h3 id="原则-1-write-clear-and-specific-instructions-编写清晰和具体的说明" tabindex="-1"><a class="header-anchor" href="#原则-1-write-clear-and-specific-instructions-编写清晰和具体的说明"><span>原则 1：<strong>Write clear and specific instructions</strong>（编写清晰和具体的说明）</span></a></h3>
<ol>
<li>
<p><strong>使用分隔符清楚地指示输入的不同部分</strong>（Use delimiters to clearly indicate distinct parts of the input）</p>
<ul>
<li>
<p>分隔符可以是任何东西，如： <code v-pre>```</code>, &quot;&quot;&quot;, &lt; &gt;, <code v-pre>&lt;tag&gt; &lt;/tag&gt;</code>, <code v-pre>:</code></p>
</li>
<li>
<p>例子：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">将由三个反引号分隔的文本总结为一句话。</span>
<span class="line">``<span class="token variable"><span class="token variable">`</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token variable">`</span></span>``</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>要求结构化输出</strong>（Ask for a structured output）</p>
<ul>
<li>
<p>JSON, HTML等格式</p>
</li>
<li>
<p>例子：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">生成三个虚构的书名，以及它们的作者和类型。</span>
<span class="line">以JSON格式提供，包含以下键值：book_id, title, author, genre。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>要求模型检查条件是否满足</strong>（Ask the model to check whether conditions are satisfied）</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">你将获得由三个引号分隔的文本。如果它包含一系列指令，</span>
<span class="line">请以如下格式重新编写这些指令：</span>
<span class="line"></span>
<span class="line">第一步 - <span class="token punctuation">..</span>.</span>
<span class="line">第二步 - …</span>
<span class="line">…</span>
<span class="line">第N步 - …</span>
<span class="line"></span>
<span class="line">如果文本不包含一系列指令， </span>
<span class="line">则简单地写“未提供步骤。”</span>
<span class="line"></span>
<span class="line"><span class="token string">""</span>"<span class="token punctuation">{</span>text_1<span class="token punctuation">}</span><span class="token string">""</span>"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>少样本提示</strong>（&quot;Few-shot&quot; prompting）</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">你的任务是以一致的风格回答。</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>孩子<span class="token operator">></span>: 教我关于耐心的知识。</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>祖父母<span class="token operator">></span>: 刻画最深峡谷的河流来自谦逊的泉源； </span>
<span class="line">最宏大的交响乐始于一个音符； </span>
<span class="line">最复杂的织锦始于一根单线。</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>孩子<span class="token operator">></span>: 教我关于韧性的知识。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原则-2-给模型一些时间来思考-give-the-model-time-to-think" tabindex="-1"><a class="header-anchor" href="#原则-2-给模型一些时间来思考-give-the-model-time-to-think"><span>原则 2：给模型一些时间来思考（Give the model time to “think”）</span></a></h3>
<ol>
<li>
<p><strong>指定完成任务所需的步骤</strong>（Specify the steps required to complete a task）</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">执行以下操作： </span>
<span class="line"><span class="token number">1</span> - 用一句话总结由三个反引号分隔的文本。</span>
<span class="line"><span class="token number">2</span> - 将总结翻译成法语。</span>
<span class="line"><span class="token number">3</span> - 列出法语总结中的每个名字。</span>
<span class="line"><span class="token number">4</span> - 输出一个包含以下键的JSON对象：french_summary, num_names。</span>
<span class="line"></span>
<span class="line">用换行符分隔你的答案。</span>
<span class="line"></span>
<span class="line">文本：</span>
<span class="line">``<span class="token variable"><span class="token variable">`</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token variable">`</span></span>``</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>要求输出指定格式的内容</strong>（Ask for output in a specified format）</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">你的任务是执行以下操作： </span>
<span class="line"><span class="token number">1</span> - 用一句话总结由<span class="token operator">&lt;></span>分隔的文本。</span>
<span class="line"><span class="token number">2</span> - 将总结翻译成法语。</span>
<span class="line"><span class="token number">3</span> - 列出法语总结中的每个名字。</span>
<span class="line"><span class="token number">4</span> - 输出一个包含以下键的JSON对象：french_summary, num_names。</span>
<span class="line"></span>
<span class="line">使用以下格式：</span>
<span class="line">Text: <span class="token operator">&lt;</span>要总结的文本<span class="token operator">></span></span>
<span class="line">Summary: <span class="token operator">&lt;</span>总结<span class="token operator">></span></span>
<span class="line">Translation: <span class="token operator">&lt;</span>总结的翻译<span class="token operator">></span></span>
<span class="line">Names: <span class="token operator">&lt;</span>总结中列出的名字<span class="token operator">></span></span>
<span class="line">Output JSON: <span class="token operator">&lt;</span>包含总结和num_names的json<span class="token operator">></span></span>
<span class="line"></span>
<span class="line">文本: <span class="token operator">&lt;</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>指示模型在得出结论前自己先解决问题</strong>（Instruct the model to work out its own solution before rushing to a conclusion）</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">你的任务是确定学生的解决方案是否正确。</span>
<span class="line">为了解决这个问题，请执行以下操作：</span>
<span class="line">- 首先，自己解决问题并得出最终答案。 </span>
<span class="line">- 然后将你的解决方案与学生的解决方案进行比较， </span>
<span class="line">  并评估学生的解决方案是否正确。</span>
<span class="line">在你自己完成问题之前，不要判断学生的解决方案是否正确。</span>
<span class="line"></span>
<span class="line">使用以下格式：</span>
<span class="line">问题：</span>
<span class="line">``<span class="token variable"><span class="token variable">`</span></span>
<span class="line">这里写问题</span>
<span class="line"><span class="token variable">`</span></span>`<span class="token variable"><span class="token variable">`</span></span>
<span class="line">学生的解决方案：</span>
<span class="line"><span class="token variable">`</span></span>`<span class="token variable"><span class="token variable">`</span></span>
<span class="line">这里写学生的解决方案</span>
<span class="line"><span class="token variable">`</span></span>`<span class="token variable"><span class="token variable">`</span></span>
<span class="line">实际解决方案：</span>
<span class="line"><span class="token variable">`</span></span>`<span class="token variable"><span class="token variable">`</span></span>
<span class="line">这里写解决问题的步骤以及你的解决方案</span>
<span class="line"><span class="token variable">`</span></span>`<span class="token variable"><span class="token variable">`</span></span>
<span class="line">学生的解决方案与实际解决方案是否相同：</span>
<span class="line"><span class="token variable">`</span></span>`<span class="token variable"><span class="token variable">`</span></span>
<span class="line">是或否</span>
<span class="line"><span class="token variable">`</span></span>`<span class="token variable"><span class="token variable">`</span></span>
<span class="line">学生评分：</span>
<span class="line"><span class="token variable">`</span></span>`<span class="token variable"><span class="token variable">`</span></span>
<span class="line">正确或错误</span>
<span class="line"><span class="token variable">`</span></span>`<span class="token variable"><span class="token variable">`</span></span>
<span class="line"></span>
<span class="line">问题：</span>
<span class="line"><span class="token variable">`</span></span>`<span class="token variable"><span class="token variable">`</span></span>
<span class="line">我正在建设一个太阳能发电厂，需要帮助计算财务状况。</span>
<span class="line">- 土地成本为每平方英尺100美元</span>
<span class="line">- 我可以以每平方英尺250美元购买太阳能电池板</span>
<span class="line">- 我谈判了一份维护合同，每年将花费我10万美元，外加每平方英尺10美元的费用</span>
<span class="line">第一年的总成本作为平方英尺数量的函数是多少？</span>
<span class="line"><span class="token variable">`</span></span>`<span class="token variable"><span class="token variable">`</span> </span>
<span class="line">学生的解决方案：</span>
<span class="line"><span class="token variable">`</span></span>`<span class="token variable"><span class="token variable">`</span></span>
<span class="line">设x为安装面积（平方英尺）。</span>
<span class="line">成本：</span>
<span class="line"><span class="token number">1</span>. 土地成本：100x</span>
<span class="line"><span class="token number">2</span>. 太阳能电池板成本：250x</span>
<span class="line"><span class="token number">3</span>. 维护成本：100,000 + 100x</span>
<span class="line">总成本：100x + 250x + <span class="token number">100,000</span> + 100x <span class="token operator">=</span> 450x + <span class="token number">100,000</span></span>
<span class="line"><span class="token variable">`</span></span>``</span>
<span class="line">实际解决方案：</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</li>
</ol>
<p>减少模型幻觉的策略，以基于一段文本生成答案的情况为例，先要求模型找到文本中的相关引用，然后让它使用这些引用来回答问题。</p>
</div></template>


