<template><div><h1 id="pycharm-相关工具的整理" tabindex="-1"><a class="header-anchor" href="#pycharm-相关工具的整理"><span>Pycharm 相关工具的整理</span></a></h1>
<h2 id="python-代码格式化工具——blue" tabindex="-1"><a class="header-anchor" href="#python-代码格式化工具——blue"><span>Python 代码格式化工具——Blue</span></a></h2>
<h3 id="安装-blue" tabindex="-1"><a class="header-anchor" href="#安装-blue"><span>安装 <code v-pre>Blue</code>：</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">pip install blue</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="配置-blue" tabindex="-1"><a class="header-anchor" href="#配置-blue"><span>配置 <code v-pre>Blue</code>：</span></a></h3>
<p>在 PyCharm 中，配置 <code v-pre>Blue</code> 作为代码格式化工具：</p>
<ol>
<li><strong>打开 PyCharm 设置</strong>：在 PyCharm 中，进入 <code v-pre>File</code> -&gt; <code v-pre>Settings</code></li>
<li><strong>找到 External Tools</strong>：导航到 <code v-pre>Tools</code> -&gt; <code v-pre>External Tools</code>。</li>
<li><strong>添加 <code v-pre>Blue</code></strong>（具体如下图）：
<ul>
<li>点击 <code v-pre>+</code> 添加一个新的外部工具。</li>
<li><strong>Name</strong>: <code v-pre>Blue</code></li>
<li><strong>Program</strong>: 输入 <code v-pre>blue</code> 可执行文件的路径（通常为 <code v-pre>blue</code>，如果未识别，手动指定路径）。</li>
<li><strong>Arguments</strong>: 输入 <code v-pre>$FilePathRelativeToProjectRoot$</code></li>
<li><strong>Working Directory</strong>: 选择 <code v-pre>$ProjectFileDir$</code></li>
<li><strong>Output Filters</strong>: 使用默认值。</li>
</ul>
</li>
<li><strong>（可选）设置快捷键</strong>：你可以通过 <code v-pre>Keymap</code> 中为 <code v-pre>Blue</code> 设置快捷键，以便快速格式化代码，建议配置为<code v-pre>Shift + Alt + L</code>。</li>
</ol>
<p><img src="/home/huanglei/.config/LarkShell/sdk_storage/711701cdf2b12ecfb46930acd135c090/resources/images/oIx6miqvyo.jpg" alt="oIx6miqvyo"></p>
<h2 id="python-包导入排序工具——isort" tabindex="-1"><a class="header-anchor" href="#python-包导入排序工具——isort"><span>Python 包导入排序工具——isort</span></a></h2>
<h3 id="安装-isort" tabindex="-1"><a class="header-anchor" href="#安装-isort"><span>安装 <code v-pre>isort</code>：</span></a></h3>
<p>首先，安装 <code v-pre>isort</code>。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">pip install isort</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="配置-isort" tabindex="-1"><a class="header-anchor" href="#配置-isort"><span>配置 <code v-pre>isort</code>：</span></a></h3>
<p>在 PyCharm 中，可以通过以下步骤配置 <code v-pre>isort</code>。</p>
<ol>
<li><strong>打开 PyCharm 设置</strong>：和配置 <code v-pre>Blue</code> 相同，进入 <code v-pre>File</code> -&gt; <code v-pre>Settings</code> -&gt; <code v-pre>Tools</code> -&gt; <code v-pre>External Tools</code>。</li>
<li><strong>添加 <code v-pre>isort</code></strong>（具体配置如参考下图）：
<ul>
<li>点击 <code v-pre>+</code>。</li>
<li><strong>Name</strong>: <code v-pre>isort</code></li>
<li><strong>Program</strong>: 输入 <code v-pre>isort</code>（可执行文件的路径，通常为 <code v-pre>isort</code>）。</li>
<li><strong>Arguments</strong>: 使用 <code v-pre>$FilePathRelativeToProjectRoot$</code>。</li>
<li><strong>Working Directory</strong>: 选择 <code v-pre>$ProjectFileDir$</code>。</li>
<li><strong>Output Filters</strong>: 保持默认。</li>
</ul>
</li>
<li><strong>设置快捷键</strong>：同样在 <code v-pre>Keymap</code> 中为 <code v-pre>isort</code> 设置快捷键，以便快速格式化导入部分，参考配置为 <code v-pre>Shift + Alt + I</code>。</li>
</ol>
<p><img src="/home/huanglei/.config/LarkShell/sdk_storage/711701cdf2b12ecfb46930acd135c090/resources/images/ubdtHgZYj2.jpg" alt="ubdtHgZYj2"></p>
</div></template>


