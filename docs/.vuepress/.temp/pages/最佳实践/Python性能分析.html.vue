<template><div><h1 id="python-性能分析" tabindex="-1"><a class="header-anchor" href="#python-性能分析"><span>Python 性能分析</span></a></h1>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2>
<ul>
<li>先修要求：</li>
<li>难度系数：🌟🌟🌟</li>
<li>预计学时：</li>
</ul>
<p>目前主要使用的是 Python 的性能分析工具 Viztracer。可以考虑编写一个测试，进行性能的基准测试。</p>
<h2 id="资源" tabindex="-1"><a class="header-anchor" href="#资源"><span>资源</span></a></h2>
<ul>
<li>网站：<a href="https://github.com/gaogaotiantian/viztracer/tree/master" target="_blank" rel="noopener noreferrer">Viztracer 的 github 网站</a></li>
<li>视频：<a href="https://www.bilibili.com/video/BV1d34y1C78W?p=1&amp;vd_source=1bcb5908804c91c0b3861acbd9aab0f8" target="_blank" rel="noopener noreferrer">VizTracer 作者的讲解</a></li>
<li>教材：《Python 高性能编程（第 2 版）》</li>
<li>作业：</li>
<li>补充：</li>
</ul>
<h2 id="附注" tabindex="-1"><a class="header-anchor" href="#附注"><span>附注</span></a></h2>
<p>以Python模块 julia.py 中的 <code v-pre>calc_pure_python(desired_width, max_iterations)</code> 函数为例子。</p>
<ul>
<li>
<p>测量时间</p>
<ol>
<li>使用 print 语句以及相应的装饰器。</li>
<li>使用 <strong>timeit</strong> 模块（会暂时禁用垃圾收集器）。</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 1.命令行运行 timeit，由于timeit的默认设置更加适合简短的代码，因此这里最好指定循环测试（-n）和重复次数（-r），同时使用（-v）显示每次重复中所有循环的累计时间，使用（-s）导入模块。</span></span>
<span class="line">python <span class="token parameter variable">-m</span> timeit <span class="token parameter variable">-n</span> <span class="token number">5</span> <span class="token parameter variable">-r</span> <span class="token number">2</span> <span class="token parameter variable">-s</span> <span class="token string">"import julia"</span> <span class="token parameter variable">-v</span> <span class="token string">"julia.calc_pure_python(desired_width=1000, max_iterations=300)"</span></span>
<span class="line"><span class="token comment"># 2.IPython 中的使用方法</span></span>
<span class="line"><span class="token function">import</span> julia</span>
<span class="line">%timeit julia.calc_pure_python<span class="token punctuation">(</span>desired_width<span class="token operator">=</span><span class="token number">1000</span>,max_iterations<span class="token operator">=</span><span class="token number">300</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>
<p>使用UNIX命令/usr/bin/time （包括启动Python解释器的时间）</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 使用 -p 或者 --verbose 获得更加详细的信息</span></span>
<span class="line">/usr/bin/time <span class="token parameter variable">--verbose</span> python julia.py</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用 cProfile 模块：使用cProfile很难搞明白每行代码的情况，因为它只提供了有关函数调用的剖析信息，而没有提供函数中各行代码的剖析信息。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># -s cumulative 根据占用的累计时间对函数进行排序，并保存到profile.stats中</span></span>
<span class="line">python <span class="token parameter variable">-m</span> cProfile <span class="token parameter variable">-s</span> cumulative <span class="token parameter variable">-o</span> profile.stats julia.py</span>
<span class="line"><span class="token comment"># 使用snakeviz可视化刚生成的输出文件</span></span>
<span class="line">pip <span class="token function">install</span> snakeviz</span>
<span class="line">snakevize profile.stats</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用<strong>line_profiler</strong>逐行剖析：找出Python代码中<strong>CPU密集型问题最强大的工具</strong>。剖析会降低运行速度，但专注于性能改进空间最大的代码行自有其价值。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">pip <span class="token function">install</span> line_profiler</span>
<span class="line"><span class="token comment"># 装饰器@profile标记待剖析函数，使用脚本kernprof记录选定函数中每行代码的CPU时间和其他统计数据，其中-l表示逐行，-v表示提供详细输出，否则输出为一个文件。</span></span>
<span class="line">python <span class="token parameter variable">-m</span> kernprof <span class="token parameter variable">-l</span> <span class="token parameter variable">-v</span> julia.py</span>
<span class="line"><span class="token comment"># 或者</span></span>
<span class="line">kernprof <span class="token parameter variable">-l</span> <span class="token parameter variable">-v</span> julia.py</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</li>
<li>
<p>内存占用分析</p>
<ol>
<li>
<p>memory_profiler：逐行分析内存占用情况，速度较慢。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">pip <span class="token function">install</span> memory_profiler psutil</span>
<span class="line"><span class="token comment"># 与line_profiler 相同使用装饰器@profile，进程大小超过100MB时启动调试器pdb</span></span>
<span class="line">python <span class="token parameter variable">-m</span> memory_profiller --pdb-mmem<span class="token operator">=</span><span class="token number">100</span> julia.py <span class="token comment"># 时间非常慢</span></span>
<span class="line"><span class="token comment"># 可视化方法</span></span>
<span class="line">pip <span class="token function">install</span> matplotlib</span>
<span class="line">mprof run julia.py <span class="token comment"># 生成一个统计文件，如mprofile_20240718085044.dat</span></span>
<span class="line">mprof plot mprofile_20240718085044.dat <span class="token comment"># 可视化该文件</span></span>
<span class="line"><span class="token comment"># 可以使用上下文管理器来添加标签，在代码中增加如下内容</span></span>
<span class="line">with profile.timestamp<span class="token punctuation">(</span><span class="token string">"label_name"</span><span class="token punctuation">)</span>:</span>
<span class="line">    <span class="token comment"># 代码片段</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>IPython 中使用%memit</p>
</li>
</ol>
</li>
</ul>
</div></template>


