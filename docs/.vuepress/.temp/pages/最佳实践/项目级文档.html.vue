<template><div><h1 id="项目级文档" tabindex="-1"><a class="header-anchor" href="#项目级文档"><span>项目级文档</span></a></h1>
<p>制作项目文档的必要规范。</p>
<h2 id="合理做法" tabindex="-1"><a class="header-anchor" href="#合理做法"><span>合理做法</span></a></h2>
<ol>
<li>先将这种文档作为一个顶级README文件；</li>
<li>必要时再扩展为一个 docs/ 文件夹。</li>
</ol>
<h2 id="内容结构" tabindex="-1"><a class="header-anchor" href="#内容结构"><span>内容结构</span></a></h2>
<ul>
<li>项目的目的</li>
<li>各个文件夹包含的内容</li>
<li>数据来源</li>
<li>哪些文件至关重要</li>
<li>如何运行项目（包括测试）</li>
<li>（可选）使用 Docker</li>
<li>添加一个包含单元测试的 tests/ 文件夹</li>
</ul>
<h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span>Tips</span></a></h2>
<ul>
<li>（可选）如果继承了缺乏测试的遗留代码，那么先给它添加测试将带来极高的回报</li>
<li>（可选）编写一些集成测试，对整个项目流程进行检查，确认特定的数据输入将生成特定输出，这有助于以后检查代码时保持理智</li>
<li>每当遇到代码出现问题时，都添加一个测试。在同一个地方跌到两次毫无意义。</li>
<li>给每个函数、类和模块都编写文档字符串。目标是提供有用的描述，指出函数实现了什么，并在可能的情况下通过简短的示例指出函数的预期输出（可参考 numpy 和 scikit-learn）中的文档字符串</li>
<li>每当发现代码快太长（如函数超过一屏）时，一定要通过重构来缩短它们。代码块越短，测试和支持起来就越轻松。</li>
<li>编写测试时，遵循测试驱动开发的方法。</li>
<li>务必进行源代码版本控制，并且频繁提交（每天乃至每10分钟提交一次）以及每天推送到仓库的习惯。</li>
<li>使用 flake8。</li>
</ul>
</div></template>


