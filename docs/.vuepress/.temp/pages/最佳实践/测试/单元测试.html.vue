<template><div><h1 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试"><span>单元测试</span></a></h1>
<blockquote>
<p>引用自：<a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=%e7%ac%ac%e5%8d%81%e4%ba%8c%e7%ab%a0-%e5%8d%95%e5%85%83%e6%b5%8b%e8%af%95" target="_blank" rel="noopener noreferrer">Google软件工程-单元测试</a></p>
</blockquote>
<p>测试的<strong>可维护性</strong>与实现的技术</p>
<h2 id="一、preventing-brittle-tests-预防脆性测试" tabindex="-1"><a class="header-anchor" href="#一、preventing-brittle-tests-预防脆性测试"><span>一、<a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=preventing-brittle-tests-%E9%A2%84%E9%98%B2%E8%84%86%E6%80%A7%E6%B5%8B%E8%AF%95" target="_blank" rel="noopener noreferrer">Preventing Brittle Tests 预防脆性测试</a></span></a></h2>
<ul>
<li>
<p><a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=strive-for-unchanging-tests-%E5%8A%9B%E6%B1%82%E7%A8%B3%E5%AE%9A%E7%9A%84%E6%B5%8B%E8%AF%95" target="_blank" rel="noopener noreferrer">Strive for Unchanging Tests 力求稳定的测试</a></p>
<p>测试一般的使用场景：</p>
<ul>
<li>重构</li>
<li>新功能</li>
<li>Bug修复</li>
<li>行为改变</li>
</ul>
</li>
<li>
<p><a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=test-via-public-apis-%E9%80%9A%E8%BF%87%E5%85%AC%E5%85%B1api%E8%BF%9B%E8%A1%8C%E6%B5%8B%E8%AF%95" target="_blank" rel="noopener noreferrer">Test via Public APIs 通过公共API进行测试</a></p>
</li>
<li>
<p><a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=test-state-not-interactions-%E6%B5%8B%E8%AF%95%E7%8A%B6%E6%80%81%EF%BC%8C%E8%80%8C%E4%B8%8D%E6%98%AF%E4%BA%A4%E4%BA%92" target="_blank" rel="noopener noreferrer">Test State, Not Interactions 测试状态，而不是交互</a></p>
</li>
</ul>
<h2 id="二、writing-clear-tests-编写清晰的测试" tabindex="-1"><a class="header-anchor" href="#二、writing-clear-tests-编写清晰的测试"><span>二、<a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=writing-clear-tests-%E7%BC%96%E5%86%99%E6%B8%85%E6%99%B0%E7%9A%84%E6%B5%8B%E8%AF%95" target="_blank" rel="noopener noreferrer">Writing Clear Tests 编写清晰的测试</a></span></a></h2>
<ul>
<li>
<p><a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=make-your-tests-complete-and-concise-%E7%A1%AE%E4%BF%9D%E4%BD%A0%E7%9A%84%E6%B5%8B%E8%AF%95%E5%AE%8C%E6%95%B4%E5%92%8C%E7%AE%80%E6%98%8E" target="_blank" rel="noopener noreferrer">Make Your Tests Complete and Concise 确保你的测试完整和简明</a></p>
</li>
<li>
<p><a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=test-behaviors-not-methods-%E6%B5%8B%E8%AF%95%E8%A1%8C%E4%B8%BA%EF%BC%8C%E8%80%8C%E4%B8%8D%E6%98%AF%E6%96%B9%E6%B3%95" target="_blank" rel="noopener noreferrer">Test Behaviors, Not Methods 测试行为，而不是方法</a></p>
<ul>
<li><a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=structure-tests-to-emphasize-behaviors-%E5%BC%BA%E8%B0%83%E8%A1%8C%E4%B8%BA%E7%9A%84%E7%BB%93%E6%9E%84%E6%B5%8B%E8%AF%95" target="_blank" rel="noopener noreferrer">Structure tests to emphasize behaviors 强调行为的结构测试</a></li>
<li><a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=name-tests-after-the-behavior-being-tested-%E4%BB%A5%E8%A2%AB%E6%B5%8B%E8%AF%95%E7%9A%84%E8%A1%8C%E4%B8%BA%E5%91%BD%E5%90%8D%E6%B5%8B%E8%AF%95" target="_blank" rel="noopener noreferrer">Name tests after the behavior being tested 以被测试的行为命名测试</a></li>
</ul>
</li>
<li>
<p><a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=dont-put-logic-in-tests-%E4%B8%8D%E8%A6%81%E6%8A%8A%E9%80%BB%E8%BE%91%E6%94%BE%E8%BF%9B%E6%B5%8B%E8%AF%95%E4%B8%AD" target="_blank" rel="noopener noreferrer">Don’t Put Logic in Tests 不要把逻辑放进测试中</a></p>
</li>
<li>
<p><a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=write-clear-failure-messages-%E7%BB%99%E5%87%BA%E6%B8%85%E6%99%B0%E7%9A%84%E5%A4%B1%E8%B4%A5%E4%BF%A1%E6%81%AF" target="_blank" rel="noopener noreferrer">Write Clear Failure Messages 给出清晰的失败信息</a></p>
</li>
</ul>
<h2 id="三、tests-and-code-sharing-damp-not-dry-测试和代码共享-damp-descriptive-and-meaningful-phrases-而不是dry" tabindex="-1"><a class="header-anchor" href="#三、tests-and-code-sharing-damp-not-dry-测试和代码共享-damp-descriptive-and-meaningful-phrases-而不是dry"><span>三、<a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=tests-and-code-sharing-damp-not-dry-%E6%B5%8B%E8%AF%95%E5%92%8C%E4%BB%A3%E7%A0%81%E5%85%B1%E4%BA%AB%EF%BC%9Adamp%EF%BC%8C%E8%80%8C%E4%B8%8D%E6%98%AFdry" target="_blank" rel="noopener noreferrer">Tests and Code Sharing: DAMP, Not DRY 测试和代码共享：DAMP（Descriptive And Meaningful Phrases），而不是DRY</a></span></a></h2>
<ul>
<li><a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=shared-values-%E5%85%B1%E4%BA%AB%E5%80%BC" target="_blank" rel="noopener noreferrer">Shared Values 共享值</a></li>
<li><a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=shared-setup-%E5%85%B1%E4%BA%AB%E8%AE%BE%E7%BD%AE" target="_blank" rel="noopener noreferrer">Shared Setup 共享设置</a></li>
<li><a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=shared-helpers-and-validation-%E5%85%B1%E4%BA%AB%E8%BE%85%E5%8A%A9%E5%92%8C%E9%AA%8C%E8%AF%81" target="_blank" rel="noopener noreferrer">Shared Helpers and Validation 共享辅助和验证</a></li>
<li><a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-12_Unit_Testing/Chapter-12_Unit_Testing?id=defining-test-infrastructure-%E7%95%8C%E5%AE%9A%E6%B5%8B%E8%AF%95%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6" target="_blank" rel="noopener noreferrer">Defining Test Infrastructure 界定测试基础框架</a></li>
</ul>
</div></template>


