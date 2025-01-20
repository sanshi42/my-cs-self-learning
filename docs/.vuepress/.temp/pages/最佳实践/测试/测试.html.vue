<template><div><h1 id="如何测试" tabindex="-1"><a class="header-anchor" href="#如何测试"><span>如何测试</span></a></h1>
<h2 id="测试驱动开发" tabindex="-1"><a class="header-anchor" href="#测试驱动开发"><span>测试驱动开发</span></a></h2>
<p>先写测试是测试驱动开发（test-driven development, TDD）的基本要求。</p>
<ul>
<li>python：<code v-pre>doctest</code> --- 测试交互式的 Python 示例
<ul>
<li>直接从官方文档上学习这个内容。</li>
</ul>
</li>
<li>Pytest 学习：工程上使用的测试工具，而且我还有成型的项目可以参考模仿。
<ul>
<li>官网学习</li>
</ul>
</li>
<li><a href="https://roman.pt/posts/python-performance-profiling/" target="_blank" rel="noopener noreferrer">Flame graphs</a>（火焰图）找个机会看看。</li>
</ul>
<h2 id="调试工作的清单" tabindex="-1"><a class="header-anchor" href="#调试工作的清单"><span>调试工作的清单</span></a></h2>
<ul>
<li>复现：被报告的问题是潜在的Bug的直接结果，还是仅仅是一种症状？
<ul>
<li>运行程序，输入测试用例，查看是否符合Bug描述；</li>
<li>预估错误理由，定位并调试估计发生Bug位置程序的程序，以程序的视角查看发生了什么；</li>
<li>准确定位到发生bug的代码位置；</li>
</ul>
</li>
<li>归因：真的是你所使用的框架的Bug吗？是OS的问题吗？还是仅仅是你代码的问题？</li>
<li>整理：如果你要向同事详细解释这个问题，你会怎么说？</li>
<li>测试：如果怀疑的代码通过了单元测试，那么测试是否足够完整？如果使用这些数据运行测试，会发生什么？</li>
<li>完善：导致这个Bug的条件是否存在于系统的其他地方？还有其他Bug处于幼虫期等着孵化吗？</li>
</ul>
<h2 id="测试风格-行为驱动测试" tabindex="-1"><a class="header-anchor" href="#测试风格-行为驱动测试"><span>测试风格：行为驱动测试</span></a></h2>
<p>一个结构良好的测试（强调行为的结构测试）：配置-检查-验证（setup-
exercise-verify）、given-when-then或者准备-行为-断言（arrange-act-assert）等</p>
<blockquote>
<p>引用自：<a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=structure-tests-to-emphasize-behaviors-%e5%bc%ba%e8%b0%83%e8%a1%8c%e4%b8%ba%e7%9a%84%e7%bb%93%e6%9e%84%e6%b5%8b%e8%af%95" target="_blank" rel="noopener noreferrer">Google软件工程-单元测试</a></p>
<p>将测试视为与行为而非方法相耦合会显著影响测试的结构。请记住，每个行为都有三个部分：一个是定义系统如何设置的 &quot;given&quot;组件，一个是定义对系统采取的行动的 &quot;when&quot;组件，以及一个验证结果的 &quot;then&quot;组件。当此结构是显式的时，测试是最清晰的。一些框架直接加入了given/when/then的功能支持。其他语言可以使用空格和可选注释使结构突出</p>
</blockquote>
<p>这种程度的描述在琐碎的测试中并不总是必要的，通常省略注释并依靠空白来使各部分清晰。然而，明确的注释可以使更复杂的测试更容易理解。这种模式使我们有可能在三个层次的粒度上阅读测试:</p>
<ol>
<li>读者可以从测试方法的名称开始（下面讨论），以获得对被测试行为的粗略描述。</li>
<li>如果这还不够，读者可以查看given/when/then注释，以获得行为的正式描述。</li>
<li>最后，读者可以查看实际代码，以准确地看到该行为是如何表达的。</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Test</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">transferFundsShouldMoveMoneyBetweenAccounts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Given two accounts with initial balances of $150 and $20</span></span>
<span class="line">    <span class="token class-name">Account</span> account1 <span class="token operator">=</span> <span class="token function">newAccountWithBalance</span><span class="token punctuation">(</span><span class="token function">usd</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">Account</span> account2 <span class="token operator">=</span> <span class="token function">newAccountWithBalance</span><span class="token punctuation">(</span><span class="token function">usd</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// When transferring $100 from the first to the second account</span></span>
<span class="line">    bank<span class="token punctuation">.</span><span class="token function">transferFunds</span><span class="token punctuation">(</span>account1<span class="token punctuation">,</span> account2<span class="token punctuation">,</span> <span class="token function">usd</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// Then the new account balances should reflect the transfer </span></span>
<span class="line">    <span class="token function">assertThat</span><span class="token punctuation">(</span>account1<span class="token punctuation">.</span><span class="token function">getBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEqualTo</span><span class="token punctuation">(</span><span class="token function">usd</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">assertThat</span><span class="token punctuation">(</span>account2<span class="token punctuation">.</span><span class="token function">getBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEqualTo</span><span class="token punctuation">(</span><span class="token function">usd</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试命名" tabindex="-1"><a class="header-anchor" href="#测试命名"><span>测试命名</span></a></h2>
<p>引用自 <a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=structure-tests-to-emphasize-behaviors-%e5%bc%ba%e8%b0%83%e8%a1%8c%e4%b8%ba%e7%9a%84%e7%bb%93%e6%9e%84%e6%b5%8b%e8%af%95" target="_blank" rel="noopener noreferrer">Google软件工程</a></p>
<p>许多不同的命名策略是可以接受的，只要它们在一个测试类中使用一致。如果你陷入困境，一个好的技巧是尝试用 &quot;应当&quot;这个词来开始测试名称。当与被测类的名称一起使用时，这种命名方案允许将测试名称作为一个句子来阅读。例如，一个名为shouldNotAllowWithdrawalsWhenBalanceIsEmpty的BankAccount类的测试可以被理解为 &quot;BankAccount不应该允许在余额为空时提款&quot;。通过阅读套件中所有测试方法的名称，你应该对被测系统实现的行为有一个很好的了解。这样的名字也有助于确保测试集中在单个行为上：如果你需要在测试名称中使用 &quot;and&quot;这个词，很有可能你实际上是在测试多个行为，应该写多个测试！</p>
<h2 id="建议" tabindex="-1"><a class="header-anchor" href="#建议"><span>建议</span></a></h2>
<ol>
<li><a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=name-tests-after-the-behavior-being-tested-%E4%BB%A5%E8%A2%AB%E6%B5%8B%E8%AF%95%E7%9A%84%E8%A1%8C%E4%B8%BA%E5%91%BD%E5%90%8D%E6%B5%8B%E8%AF%95" target="_blank" rel="noopener noreferrer">Name tests after the behavior being tested 以被测试的行为命名测试</a></li>
<li><a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=dont-put-logic-in-tests-%E4%B8%8D%E8%A6%81%E6%8A%8A%E9%80%BB%E8%BE%91%E6%94%BE%E8%BF%9B%E6%B5%8B%E8%AF%95%E4%B8%AD" target="_blank" rel="noopener noreferrer">Don’t Put Logic in Tests 不要把逻辑放进测试中</a></li>
<li><a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=write-clear-failure-messages-%E7%BB%99%E5%87%BA%E6%B8%85%E6%99%B0%E7%9A%84%E5%A4%B1%E8%B4%A5%E4%BF%A1%E6%81%AF" target="_blank" rel="noopener noreferrer">Write Clear Failure Messages 给出清晰的失败信息</a></li>
<li><a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=tests-and-code-sharing-damp-not-dry-%E6%B5%8B%E8%AF%95%E5%92%8C%E4%BB%A3%E7%A0%81%E5%85%B1%E4%BA%AB%EF%BC%9Adamp%EF%BC%8C%E8%80%8C%E4%B8%8D%E6%98%AFdry" target="_blank" rel="noopener noreferrer">Tests and Code Sharing: DAMP, Not DRY 测试和代码共享：DAMP（Descriptive And Meaningful Phrases），而不是DRY</a></li>
</ol>
</div></template>


