<template><div><h1 id="领域驱动设计" tabindex="-1"><a class="header-anchor" href="#领域驱动设计"><span>领域驱动设计</span></a></h1>
<h2 id="分离领域" tabindex="-1"><a class="header-anchor" href="#分离领域"><span>分离领域</span></a></h2>
<p><strong>分层架构：</strong></p>
<p><img src="/home/huanglei/workspace/my-cs-self-learning/docs/images/领域驱动设计-分层架构.png" alt=""></p>
<ul>
<li>
<p>用户界面层（或表示层）</p>
<p>负责向用户显示信息和解释用户指令。这里指的用户可以是另一个计算机系统，不一定是使用用户界面的人。</p>
</li>
<li>
<p>应用层</p>
<p>定义软件要完成的任务，并且指挥表达领域概念的对象来解决问题。这一层所负责的工作对业务来说意义重大，也是与其他系统的应用层进行交互的必要渠道。</p>
<p>应用层要尽量简单，不包含业务规则或者知识，而只为下一层中的领域对象协调任务，分配工作，使它们互相协作。它没有反映业务情况的状态，但是却可以具有另外的状态，为用户或程序显示某个任务的进度。</p>
</li>
<li>
<p><strong>领域层（或模型层）</strong></p>
<p>负责表达业务概念，业务状态信息以及业务规则。尽管保存业务状态的技术细节是由基础设施层实现的，但是反映业务情况的状态是由本层控制并且使用的。<strong>领域层是业务软件的核心。</strong></p>
</li>
<li>
<p>基础设施层</p>
<p>为上面各层提供通用的技术能力：为应用层传递消息，为领域层提供持久化机制，为用户界面层绘制屏幕组件，等等。基础设施层还能够通过架构框架来支持 4 个层次间的交互模式。</p>
</li>
</ul>
</div></template>


