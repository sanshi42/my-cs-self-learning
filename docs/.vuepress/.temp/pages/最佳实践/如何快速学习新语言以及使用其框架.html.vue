<template><div><h1 id="如何快速学习一门新的编程语言以及使用其框架" tabindex="-1"><a class="header-anchor" href="#如何快速学习一门新的编程语言以及使用其框架"><span>如何快速学习一门新的编程语言以及使用其框架</span></a></h1>
<p>引用并翻译自 <a href="https://e.saasbook.info/chapter/2/section/1" target="_blank" rel="noopener noreferrer">saasbook</a></p>
<ol>
<li>学习该语言的不同之处：大多数命令式面向对象语言都具有用于处理原语（变量、类型和控制流）、复用（继承、接口）、复杂性管理（组合、继承、数据隐藏）、调试、以及库的使用（导入、包或依赖的管理）的简单机制。与其他最近流行的语言相比，该语言有哪些习语或功能的不同之处？该语言如何管理库（学习库通常比学习语言本身更加费时）？</li>
<li>理解框架所隐含的应用程序架构：该框架所具体化的应用程序结构（或模式集）是什么？对于一个使用该框架构建的应用程序，其主要“移动部件”（框架中各个可变或互动的部分，可以包括模块、组件、类、函数等，它们共同协作以实现框架的功能）是什么？“移动部件”的排列或配置怎样影响根据该框架制定应用程序功能的方式？</li>
<li>将语言的特性与框架的结构进行关联。程序语言的机制揭示了框架的架构和模式。比如，Rails 框架非常依赖“约定由于配置”（例如，通过遵循特定的命名规则，可以不用提供解释应用程序的哪个类负责访问哪个数据库表的配置文件）。这种架构和模式的背后是Ruby的反射（refection）和元编程（metaprogramming）的特殊机制。</li>
</ol>
<p>学习新的命令式面向对象语言的 8 个要点：</p>
<ol>
<li>类型与类型系统。该语言是强类型还是弱类型，类型系统是静态的（如 C++ 和 Java）还是动态的（如 Ruby 和 JavaScript）？在 C++ 和 Java 中，变量的类型必须在编译时声明且运行时不能更改（静态类型），并且只能将该类型（或兼容的子类型）的对象分配给变量（强类型）。而在 Ruby 中，变量在编译时没有类型声明（动态类型），并且可以分配给任何类型的对象（弱类型）。后一种策略使得某些类型错误更容易发生，但也支持一种非常强大的代码复用，称为混入（mix-ins，类似于 Java 中的接口，但灵活性要高得多）。</li>
<li>原语。基本数据类型是什么？比如：数字、字符串、集合等。命名事物（Naming things，包括变量、函数、类、命名空间等）的规则和约定是什么？变量赋值、变量范围和控制流的基本机制是什么？操作字符串的基本方式（包括使用正则表达式和字符串插值）有哪些？</li>
<li>方法。如何定义和调用方法（包括函数和过程）？如何命名方法？类方法（包括静态的）与实例方法有什么区别？</li>
<li>抽象和封装。类是如何定义、子类化和组合的？指定特定实例的方法和变量、类（静态）方法和变量、接口等的机制是什么？</li>
<li>习语（在编程语境中，特指一种通常由于语言或库的设计而产生的惯用的、常见的、有效的编码方式或模式）。与其他了解的语言相比，该语言有哪些特别的习语。这些习语如何使用？举些突出例子，在Ruby中，符号（symbols，类似于不可变字符串）、块（blocks，也称为匿名 lambda 或闭包，在 Ruby 中大量用于实现<strong>迭代器</strong>）以及用于操作  collections 的函数式编程习语。</li>
<li>库。语言具有哪些用于管理库的功能？如何命名、导入和使用库及其中的函数？有哪些包管理（也称为依赖管理）工具可用于确保应用程序可由其他开发人员重复部署，或在生产系统上部署该应用程序所有的拥有正确版本的依赖库？</li>
<li>调试。有哪些可用的调试工具？可以从正在运行的程序中进入交互式调试器吗？可以设置断点或观察点（基于数据值的断点）来停止正在运行的程序并检查或修改其状态吗？是否可以轻松通过交互式控制台、读取-求值-打印循环（REPL）或其他机制来以交互方式尝试简短的代码？</li>
<li>测试。如何创建和运行自动化测试？</li>
</ol>
</div></template>


