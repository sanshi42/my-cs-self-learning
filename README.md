# CS 学习规划

> 我的 CS 学习的规划，其实也是我的 CS 学习的回忆。

作为计算机专业的学生，找工作时才发现自己所学的技能如此欠缺。回顾过往，我的学习之路犯过不少错误。接下来，我想系统地弥补这些欠缺的知识。但面对如此庞杂的知识，我深知需要一个清晰明确的学习规划，才不至于在茫然和焦虑中继续犯错。参照一位[大佬](https://csdiy.wiki/CS%E5%AD%A6%E4%B9%A0%E8%A7%84%E5%88%92/)的笔记，我制定了自己的 CS 学习规划。

## 一、前言

### 1. 目标

成为一个合格的计算机工程师

### 2. 总体路径

1. 基础
   - 会写程序
   - 掌握相关工作的**技术栈**的要求
2. 数据结构和算法
   - 会写几万行的大程序
3. 计算机原理和计算机系统结构
   - 会写有效（效率较高）的程序
4. 应用类计算机课程
   - 会写实用的程序（学习如何将一个生活中的问题，编程一个计算机可以解决的问题）
   - 例如：NLP、数据库、计算机控制、计算机视觉等。

**注：以下内容是不全面，更加全面的内容值得参考[大佬](https://csdiy.wiki/CS%E5%AD%A6%E4%B9%A0%E8%A7%84%E5%88%92/)的笔记**

## 二、基础

### 1. 基础工具

- [x] [MIT-Missing-Semester](https://csdiy.wiki/%E7%BC%96%E7%A8%8B%E5%85%A5%E9%97%A8/MIT-Missing-Semester/) 
- [x] [学会提问](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)
- [x] 翻墙

- [x] 命令行：[命令行的艺术](https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md)、[Shell 脚本教程](https://www.shellscript.sh/)

- [x] IDE (Integrated Development Environment)：集成开发环境，VS Code
- [x] [Vim](https://csdiy.wiki/%E5%BF%85%E5%AD%A6%E5%B7%A5%E5%85%B7/Vim/)

- [x] [Git](必学工具/Git.md)

- [x] GitHub

  其他后续补充……

### 2. 环境配置

#### PC 端环境配置

- [x] Windows：Scoop

  如果遇到其他的系统，参考[CS学习规划](https://csdiy.wiki/CS%E5%AD%A6%E4%B9%A0%E8%A7%84%E5%88%92/)

#### 服务器端环境配置

同上，因为没有遇到，暂时不管。

## 三、课程地图

### 1. 编程基础

#### Shell

- [x] [Shell 脚本教程](https://www.shellscript.sh/)

#### Python

- [x] 《流畅的Python》第二版

#### C++

- 暂时没有系统学习

#### Java

- 《Java核心技术·卷I》

#### Web

- [x] [MDN Web Docs: MDN 网络开发入门手册](https://developer.mozilla.org/zh-CN/docs/Learn)

  > Web知识（html、css、JavaScript）从入门到适应。顺便了解Vue.js、Django等。
  >
  > （2024年4月13日学完）
  >
  > - [x] HTML
  > - [x] CSS
  > - [x] JavaScript
  > - [x] 客户端框架，及其代表——Vue.js
  > - [x] 服务器端网络编程

#### MySQL

- [ ] 入门：《SQL必知必会（第5版）》

#### Linux

- [ ] 《Linux命令行大全（第2版）》——入门Linux的命令，最好能清楚一些

### 2. 数据结构与算法

- [ ] 《算法》第4版——初步

- [ ] 《算法导论》第4版——进阶

### 3. 计算机原理和计算机系统结构

#### 计算机系统导论

- [ ] [CMU CS15213: CSAPP](https://csdiy.wiki/%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/CSAPP/)

#### 体系结构入门

- [ ] [Coursera: Nand2Tetris](https://csdiy.wiki/%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/N2T/)

#### 体系结构进阶

- [ ] [CS61C: Great Ideas in Computer Architecture](https://csdiy.wiki/%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/CS61C/)

#### 操作系统

> 没有什么能比自己写个内核更能加深对操作系统的理解了。

暂未确定。

#### 计算机网络

> 没有什么能比自己写个 TCP/IP 协议栈更能加深对计算机网络的理解了。

- [ ] 《自顶向下方法》和[配套教程](https://csdiy.wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/topdown/)

- [ ] [Stanford CS144: Computer Network](计算机网络/CS144.md)：实现整个 TCP/IP 协议栈。

### 4. 应用类计算机课程

#### 数据库系统

> 没有什么能比自己写个关系型数据库更能加深对数据库系统的理解了。

CMU 的著名数据库神课 [CMU 15-445: Introduction to Database System](数据库系统/15445.md) 会通过 4 个 Project 带你为一个用于教学的关系型数据库 [bustub](https://github.com/cmu-db/bustub) 添加各种功能。实验的评测框架也免费开源了，非常适合大家自学。此外课程实验会用到 C++11 的众多新特性，也是一个锻炼 C++ 代码能力的好机会。

Berkeley 作为著名开源数据库 postgres 的发源地也不遑多让，[UCB CS186: Introduction to Database System](数据库系统/CS186.md) 会让你用 Java 语言实现一个支持 SQL 并发查询、B+ 树索引和故障恢复的关系型数据库。

#### 并行与分布式系统

- [ ] [分布式系统](https://csdiy.wiki/%E5%B9%B6%E8%A1%8C%E4%B8%8E%E5%88%86%E5%B8%83%E5%BC%8F%E7%B3%BB%E7%BB%9F/MIT6.824/)

## 四、常见技术栈

### Python开发工程师

> 来源于：易道博识-HR

- Python
- Web：Flask，FastAPI
- 数据库：MySQL、Redis
- 项目部署：Docker、K4S
- 项目管理：Git、CI/CD、GitLab
- Linux
- 流量控制：

### 成长路线：

1. 一般的小公司都是走项目经理的路线；
2. 大公司：技术专家。
