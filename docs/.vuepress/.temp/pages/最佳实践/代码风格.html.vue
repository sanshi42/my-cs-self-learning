<template><div><h1 id="程序编写规范" tabindex="-1"><a class="header-anchor" href="#程序编写规范"><span>程序编写规范</span></a></h1>
<h2 id="一、shell" tabindex="-1"><a class="header-anchor" href="#一、shell"><span>一、Shell</span></a></h2>
<h3 id="编写规范" tabindex="-1"><a class="header-anchor" href="#编写规范"><span>编写规范</span></a></h3>
<blockquote>
<p>为了未来程序的改写与调试</p>
</blockquote>
<ul>
<li>
<p>Shebang行</p>
</li>
<li>
<p>程序内容的说明：</p>
<ol>
<li>内容与功能；</li>
<li>版本信息；</li>
<li>作者与联络方式；</li>
<li>建文件日期；</li>
<li>历史记录等；</li>
<li>脚本内特殊的命令，使用【绝对路径】的方式执行；</li>
</ol>
</li>
<li>
<p>主要环境变量的声明：</p>
<ul>
<li>设置PATH与LANG（如有必要）</li>
</ul>
</li>
<li>
<p>主要程序部分</p>
</li>
<li>
<p>执行结果告知（定义返回值）</p>
</li>
<li>
<p>参考示例：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"><span class="token comment"># Program:</span></span>
<span class="line"><span class="token comment"># 	This program shows "Hello World!" in your screen.</span></span>
<span class="line"><span class="token comment"># History:</span></span>
<span class="line"><span class="token comment"># 	2015/07/16 VBird First release</span></span>
<span class="line"><span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin</span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">"Hello World! <span class="token entity" title="\a">\a</span> <span class="token entity" title="\n">\n</span>"</span></span>
<span class="line"><span class="token builtin class-name">exit</span> <span class="token number">0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="二、python" tabindex="-1"><a class="header-anchor" href="#二、python"><span>二、Python</span></a></h2>
<h3 id="编写规范-1" tabindex="-1"><a class="header-anchor" href="#编写规范-1"><span>编写规范</span></a></h3>
<h4 id="代码风格" tabindex="-1"><a class="header-anchor" href="#代码风格"><span>代码风格</span></a></h4>
<ul>
<li>
<p>最简示例（参照《Effective Python： 编写高质量 Python 代码的 90 个有效方法》）：</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> when<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">"""Log a message with a timestamp.</span>
<span class="line"></span>
<span class="line">    Args:</span>
<span class="line">        message: Message to print.</span>
<span class="line">        when: datetime of when the message occurred.</span>
<span class="line">            Defaults to the present time.</span>
<span class="line">    """</span></span>
<span class="line">    <span class="token keyword">if</span> when <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span></span>
<span class="line">        when <span class="token operator">=</span> datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>when<span class="token punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token punctuation">{</span>message<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>细则参照<a href="https://github.com/google/styleguide/blob/gh-pages/pyguide.md#38-comments-and-docstrings" target="_blank" rel="noopener noreferrer">Google Python Style Guide</a></p>
</li>
<li>
<p>lint工具：mypy，VScode插件（Pylance和Mypy Type Checker）</p>
</li>
<li>
<p>插入docstring的工具：autoDocstring（vscode插件）</p>
</li>
<li>
<p>注释和文档字符串：<a href="https://github.com/google/styleguide/blob/gh-pages/pyguide.md#38-comments-and-docstrings" target="_blank" rel="noopener noreferrer">参照</a></p>
<ul>
<li>
<p>模块</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token triple-quoted-string string">"""1.模块或程序的一行摘要，以句点结束。</span>
<span class="line"></span>
<span class="line">2.（可选）留一个空行。该文档字符串的其余部分应包含模块或程序的总体描述。可选地，还可以包含导出的类和函数和（或）用法的简短描述例子。</span>
<span class="line"></span>
<span class="line">3.（可选）典型用法示例：</span>
<span class="line"></span>
<span class="line">    >>> foo = ClassFoo()  # 主要是用于doctest的测试</span>
<span class="line">    >>> bar = foo.FunctionBar()</span>
<span class="line">"""</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>测试模块</p>
<blockquote>
<p>非必须，不要使用不提供新信息的文档字符串。</p>
</blockquote>
</li>
<li>
<p>函数和方法</p>
<blockquote>
<p>文档字符串应提供足够的信息，以便无需阅读函数代码即可编写对函数的调用。</p>
<p>文档字符串应描述函数的调用语法及其语义，但通常不描述其实现细节，除非这些细节与函数的使用方式相关。例如，作为副作用而改变其参数之一的函数应在其文档字符串中注明这一点。否则，与调用者无关的函数实现的细微但重要的细节最好以注释的形式表达在代码旁边，而不是在函数的文档字符串中。</p>
</blockquote>
<ul>
<li>
<p>格式</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">fetch_smalltable_rows</span><span class="token punctuation">(</span></span>
<span class="line">    table_handle<span class="token punctuation">:</span> smalltable<span class="token punctuation">.</span>Table<span class="token punctuation">,</span></span>
<span class="line">    keys<span class="token punctuation">:</span> Sequence<span class="token punctuation">[</span><span class="token builtin">bytes</span> <span class="token operator">|</span> <span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    require_all_keys<span class="token punctuation">:</span> <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">False</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> Mapping<span class="token punctuation">[</span><span class="token builtin">bytes</span><span class="token punctuation">,</span> <span class="token builtin">tuple</span><span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">"""（1.描述性风格或者命令性风格文档字符串，以摘要开头）从 Bigtable 抓取行。</span>
<span class="line"></span>
<span class="line">    （2.前后空一行，与文件字符串类似）从 table_handle 所代表的表实例中读取与给定键相关</span>
<span class="line">    的记录中读取与给定键相关的记录。字符串键将采用 UTF-8 编码。</span>
<span class="line"></span>
<span class="line">    Args:（3.按名称列出每个参数。说明应跟在名称后面，并用冒号分隔，后跟空格或换行符。）</span>
<span class="line">      table_handle:</span>
<span class="line">        An open smalltable.Table instance.</span>
<span class="line">      keys:</span>
<span class="line">        A sequence of strings representing the key of each table row to</span>
<span class="line">        fetch.  String keys will be UTF-8 encoded.</span>
<span class="line">      require_all_keys:</span>
<span class="line">        If True only rows with values set for all keys will be returned.</span>
<span class="line"></span>
<span class="line">    Returns:（4.描述返回值的语义，包括类型注释未提供的任何类型信息。如果函数仅返回 </span>
<span class="line">    None，则此部分不是必需的。如果文档字符</span>
<span class="line">    以“Return”、“Returns”、“Yield”或“Yields”（例如"""</span>Returns row <span class="token keyword">from</span> Bigtable 	<span class="token keyword">as</span> a <span class="token builtin">tuple</span> of strings<span class="token punctuation">.</span><span class="token triple-quoted-string string">"""）开头，并且开头的句子足以描述返回值，则也可以省略它。）</span>
<span class="line">      A dict mapping keys to the corresponding table row data</span>
<span class="line">      fetched. Each row is represented as a tuple of strings. For</span>
<span class="line">      example:</span>
<span class="line"></span>
<span class="line">      {b'Serak': ('Rigel VII', 'Preparer'),</span>
<span class="line">       b'Zim': ('Irk', 'Invader'),</span>
<span class="line">       b'Lrrr': ('Omicron Persei 8', 'Emperor')}</span>
<span class="line"></span>
<span class="line">      Returned keys are always bytes.  If a key from the keys argument is</span>
<span class="line">      missing from the dictionary, then that row was not found in the</span>
<span class="line">      table (and require_all_keys must have been False).</span>
<span class="line"></span>
<span class="line">    Raises:（5.列出与接口相关的所有异常，后跟描述。）</span>
<span class="line">      IOError: An error occurred accessing the smalltable.</span>
<span class="line">    """</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>类</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">SampleClass</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">"""Summary of class here.</span>
<span class="line"></span>
<span class="line">    Longer class information...</span>
<span class="line">    Longer class information...</span>
<span class="line"></span>
<span class="line">    Attributes:</span>
<span class="line">        likes_spam: A boolean indicating if we like SPAM or not.</span>
<span class="line">        eggs: An integer count of the eggs we have laid.</span>
<span class="line">    """</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> likes_spam<span class="token punctuation">:</span> <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token triple-quoted-string string">"""Initializes the instance based on spam preference.</span>
<span class="line"></span>
<span class="line">        Args:</span>
<span class="line">          likes_spam: Defines if instance exhibits this preference.</span>
<span class="line">        """</span></span>
<span class="line">        self<span class="token punctuation">.</span>likes_spam <span class="token operator">=</span> likes_spam</span>
<span class="line">        self<span class="token punctuation">.</span>eggs <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">    <span class="token decorator annotation punctuation">@property</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">butter_sticks</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token triple-quoted-string string">"""The number of butter sticks we have."""</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>块注释和内联注释</p>
<p>最后需要注释的地方是代码中比较棘手的部分。如果你需要在下次<a href="http://en.wikipedia.org/wiki/Code_review" target="_blank" rel="noopener noreferrer">代码审查</a>时解释它，你应该现在就注释它。复杂的操作在操作开始前会得到几行注释。不太明显的操作在行末得到注释</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token comment"># We use a weighted dictionary search to find out where i is in</span></span>
<span class="line"><span class="token comment"># the array.  We extrapolate position based on the largest num</span></span>
<span class="line"><span class="token comment"># in the array and the array size and then do binary search to</span></span>
<span class="line"><span class="token comment"># get the exact number.</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> i <span class="token operator">&amp;</span> <span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>  <span class="token comment"># True if i is 0 or a power of 2.</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>不要写的注释：永远不要描述代码。假设阅读代码的人比你更懂Python。</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token comment"># BAD COMMENT: Now go through the b array and make sure whenever i occurs</span></span>
<span class="line"><span class="token comment"># the next element is i+1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h4 id="包导入风格" tabindex="-1"><a class="header-anchor" href="#包导入风格"><span>包导入风格</span></a></h4>
<p>导入包的顺序按照以下顺序进行：</p>
<ol>
<li>出现import包和from的包，先导入import包；</li>
<li>优先级为：系统包、第三方库包、自建包；</li>
<li>中间使用空格分隔。</li>
</ol>
<h2 id="三、git" tabindex="-1"><a class="header-anchor" href="#三、git"><span>三、Git</span></a></h2>
<h3 id="commit-风格" tabindex="-1"><a class="header-anchor" href="#commit-风格"><span>Commit 风格</span></a></h3>
<blockquote>
<p>建议按照 Semantic Commit 风格进行规范化。</p>
<p>参照：</p>
<ol>
<li><a href="https://www.conventionalcommits.org/zh-hans/v1.0.0/" target="_blank" rel="noopener noreferrer">https://www.conventionalcommits.org/zh-hans/v1.0.0/</a></li>
<li><a href="https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716" target="_blank" rel="noopener noreferrer">https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716</a></li>
</ol>
</blockquote>
<p>优秀的 Git Commit 信息的 7 条规则：</p>
<ol>
<li>使用空行将主题与正文分开；</li>
<li>将主题行限制为 50 个字符（25个汉字）；</li>
<li>主题行大写；</li>
<li>不要以句号结尾主题行；</li>
<li>在主题行中使用祈使语气；</li>
<li>正文在 72 个字符处换行；</li>
<li>使用正文来解释What、Why 和 How。</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">首字母大写的摘要（不多于 <span class="token number">50</span> 个字符）</span>
<span class="line"></span>
<span class="line">如果必要的话，加入更详细的解释文字。在大概 <span class="token number">72</span> 个字符的时候换行。</span>
<span class="line">在某些情形下，第一行被当作一封电子邮件的标题，剩下的文本作为正文。</span>
<span class="line">分隔摘要与正文的空行是必须的（除非你完全省略正文），</span>
<span class="line">如果你将两者混在一起，那么类似变基等工具无法正常工作。</span>
<span class="line"></span>
<span class="line">使用指令式的语气来编写提交信息：使用“Fix bug”而非“Fixed bug”或“Fixes bug”。</span>
<span class="line">此约定与 <span class="token function">git</span> merge 和 <span class="token function">git</span> revert 命令生成提交说明相同。</span>
<span class="line"></span>
<span class="line">空行接着更进一步的段落。</span>
<span class="line"></span>
<span class="line">- 标号也是可以的。</span>
<span class="line"></span>
<span class="line">- 项目符号可以使用典型的连字符或星号，后跟一个空格，行之间用空行隔开，</span>
<span class="line">  但是可以依据不同的惯例有所不同。</span>
<span class="line"></span>
<span class="line">- 使用悬挂式缩进</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修复 Bug ：</p>
<ul>
<li>标题摘要前面加上前缀<code v-pre>[bugfix]</code>，后面接一个空格；</li>
<li>摘要以 “修复” 或者“增加”等动词开头。</li>
<li>主要内容里面加上bug id</li>
</ul>
<p>增加特征的提交，增加前缀<code v-pre>[feat]</code>，后面接一个空格；</p>
<p>代码重构，增加前缀：[refactoring]</p>
<h3 id="分支命名规范" tabindex="-1"><a class="header-anchor" href="#分支命名规范"><span>分支命名规范</span></a></h3>
<blockquote>
<p>参照：<a href="https://graphite.dev/guides/git-branch-naming-conventions" target="_blank" rel="noopener noreferrer">https://graphite.dev/guides/git-branch-naming-conventions</a></p>
</blockquote>
<p><strong>Git 分支前缀</strong></p>
<p>在分支名称中使用前缀是一种流行的策略，可以根据分支的用途对其进行分类：</p>
<ul>
<li><strong>功能分支</strong>：以<code v-pre>feature/</code> 为前缀，这些分支用于开发新功能。</li>
<li><strong>错误修复分支</strong>：以<code v-pre>bugfix/</code> 为前缀，这些分支用于进行修复。</li>
<li><strong>发布分支</strong>：这些分支以<code v-pre>release/</code>为前缀，为新发布准备代码库。</li>
<li><strong>热修复分支</strong>：以<code v-pre>hotfix/</code>为前缀，这些分支解决生产中的紧急问题。</li>
</ul>
<p><strong>Git 分支名</strong></p>
<p>前缀后面接问题名称，比如：问题#8433的完整分支名称为<code v-pre>bugfix/iss8433</code></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> bugfix/iss8433</span>
<span class="line"><span class="token comment"># 主分支合并</span></span>
<span class="line"><span class="token function">git</span> checkout master</span>
<span class="line"><span class="token function">git</span> merge bugfix/iss8433</span>
<span class="line"><span class="token comment"># 删除次要分支</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-d</span> bugfix/iss8433</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


