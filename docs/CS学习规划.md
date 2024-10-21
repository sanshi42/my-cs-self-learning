# 我的 CS 学习规划

作为计算机专业的学生，实际应用时才发现自己所学的技能如此欠缺。

回顾过往，我的学习之路犯过不少错误。接下来，我想系统地弥补这些欠缺的知识。但面对如此庞杂的知识，我深知需要一个清晰明确的学习规划，才不至于在茫然和焦虑中继续犯错。

本项目旨在记录我在努力成为一个合格的五级计算机工程师的经历。
> 一名合格的五级软件工程师，首先应该是一个技术熟手，在工作中经历过了一定的历练，所以可以在不需要别人的指导下，就能独立完成安排的工作任务。比如上级/需求方给他安排了一个功能需求，他能够充分的理解这个需求背景和为什么学、以及能给出实现方案，并知道找公司的哪些人提供相应的资源和支持，然后能主动的推动资源来协助自己完成这个需求，最后实现成功上线。

## 总体路径

1. 基础：**会写程序。**
2. 数据结构和算法：**会写几万行的大程序。**
3. 计算机原理和计算机系统结构：**会写有效（效率较高）的程序。**
4. 应用类计算机课程：**会写实用的程序（学习如何将一个生活中的问题，编程一个计算机可以解决的问题）。**

## CS 基础

[MIT-Missing-Semester](编程入门/MIT-Missing-Semester.md)：系统性地了解计算机专业的入门工具箱。

[学会提问](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)：询问问题时所需要知道的常识。

翻墙：Google搜索和一些工具使用的必要条件。

命令行：了解Linux命令行的必要内容。

[Shell](必学工具/Shell.md)：编写必要的脚本的基础。

[VScode](必学工具/VScode.md)：IDE (Integrated Development Environment，集成开发环境）：学习一件趁手的工具进行软件开发。

[Vim](必学工具/Vim.md)：进行代码编写时的有力工具。

[Makefile](必学工具/Makefile.md)：这部分的学习需要等到shell的命令已经初步学完之后。等到要用的时候学习也是可以的。

[Linux](必学工具/Linux.md)：程序员必学的一个操作系统内容。

### 应用工具

开发环境

- Windows：使用 Scoop 管理足够。

数据库工具

- Redis：
  - [菜鸟教程简单入门](https://www.runoob.com/redis/redis-intro.html)
  - [菜鸟教程Python redis 使用介绍](https://www.runoob.com/w3cnote/python-redis-intro.html)
- MySQL：掌握基础的SQL语言的知识。
  - 《SQL必知必会（第5版）》

其他学习

- SSE（Server Sent Events）：
  - [Server-Sent Events 教程](https://www.ruanyifeng.com/blog/2017/05/server-sent_events.html)
  - [MDN 使用服务器发送事件](https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events/Using_server-sent_events)

## 学习路线

### 1. 编程基础

- [Python](编程入门/Python.md)
- C++：暂时没有系统学习
- Java：《Java核心技术·卷I》
- Web：掌握基础的Web开发相关知识。

### 2. 数据结构与算法

> 数据结构：盖房子的钢筋、门窗和大梁。
>
> 算法：盖房子的结构原理。
>
> 直接从沙石出发，很难盖成一个大厦。

- [算法导论](数据结构与算法/算法导论.md)

### 3. 计算机系统结构

- 体系结构

  - 为什么学：从零开始深入理解计算机的体系结构（包括硬件和软件）。
  - 如何学习：
    - 学习入门课程[Coursera: Nand2Tetris](https://csdiy.wiki/%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/N2T/)并完成相关作业：&#x2716;
    - 阅读书籍《计算机系统要素：从零开始构建现代计算机》
  
- 计算机系统基础

  - 为什么学：掌握基础的计算机原理和计算机系统结构知识。
  - 如何学习：
    - 学习课程并完成相关的项目[CMU CS15213: CSAPP](https://csdiy.wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%E5%9F%BA%E7%A1%80/CSAPP/)：&#x2716;

- 操作系统

  - 为什么学：没有什么能比自己写个内核更能加深对操作系统的理解了。

  - 如何学习：

    - 学习课程并完成相关的项目[CS162: Operating System](https://csdiy.wiki/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/CS162/)

      > 该课程难度可能比较大，时间上的开销也是比较大的，量力而行。

- 计算机网络

  - 为什么学：没有什么能比自己写个 TCP/IP 协议栈更能加深对计算机网络的理解了。
  - 如何学习：
    - 《自顶向下方法》和[配套教程](https://csdiy.wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/topdown/)。
    - 使用[Stanford CS144: Computer Network](https://csdiy.wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/CS144/)实现整个 TCP/IP 协议栈。

- 分布式系统

  - 为什么学：学习分布式和并行的相关知识。
  - 如何学习：
    - [分布式系统](https://csdiy.wiki/%E5%B9%B6%E8%A1%8C%E4%B8%8E%E5%88%86%E5%B8%83%E5%BC%8F%E7%B3%BB%E7%BB%9F/MIT6.824/)

### 4. 应用类计算机课程

- [DevOps工程师](https://devopscube.com/become-devops-engineer/)

  - 为什么学：成为四级工程师的必要之路。
  - 完成状态：

    - 微服务架构
      - 为什么学：开发工作中经常使用的架构，需要简单了解。
      - 完成状态：《凤凰架构：构建可靠的大型分布式系统》&#x2714;
    - [How to Learn Kubernetes (Complete Roadmap & Resources)](https://devopscube.com/learn-kubernetes-complete-roadmap/#)——[中文版本](https://zhuanlan.zhihu.com/p/590493078)
    - Kubernetes
      - 为什么学：
      - 完成状态
        - 书籍-《The Kubernetes Book: 2024 Edition》&#x2714;

- 操作系统的网络

  - 为什么学：因为使用的工具的原因，需要频繁地访问外网，但如何配置好网络是一个大问题，否则我的docker永远访问不了镜像网络。因此有必要学习一下相关的知识和内容。
  - 完成状态：
    - 《鸟哥的Linux私房菜-服务器架设篇》——这本书暂时没有电子版，因此难免需要自己买一本

- 数据库系统

  > 没有什么能比自己写个关系型数据库更能加深对数据库系统的理解了。

- 微服务架构

  - 为什么学：开发工作中经常使用的架构，需要简单了解。
  - 如何学习：
    - 《凤凰架构：构建可靠的大型分布式系统》