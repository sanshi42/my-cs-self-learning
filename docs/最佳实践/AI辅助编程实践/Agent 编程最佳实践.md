# Agent 编程最佳实践

## 概述

为了能够方便地在任何项目开发过程中，能够快速通过该实践直接开始编程，而不必重新探索与踩坑，记录到目前为止使用 Agent 辅助编程的最佳实践方案。

## 一、Python 编程

> 以 Codex 为例子，其他工具类似。

### 0、 Agent 环境

参照  [Agent 配置指南.md](Agent 配置指南.md) 配置好环境

### 1、Python 工具依赖

- uv
- ruff
- pyrefly
- pre-commit
- mypy
- pytest

### 2、风格

| 配置        | 值                                                   | 说明                                          |
| ----------- | ---------------------------------------------------- | --------------------------------------------- |
| 行宽        | 88                                                   | 参照 Black 代码行宽使用现代项目常用的 88 字符 |
| uv.index    | https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple | 下载包的地址                                  |
| isort       | 启用                                                 | 导入排序                                      |
| pydocstyle  | google                                               | Google的文档字符串结构                        |
| quote-style | single                                               | 使用单引号                                    |

### 3、最佳实践顺序

**1. 创建新项目**：

`uv init`

**2. 敏捷开发框架**

参照

`docs/`目录：

以下文件按照顺序依次创建：

- proposal.md：这个就是需求文档吗？
- mvp-scope.md：这个是要做说明说明，后续如果mvp产品完成了，是否应该删除
- product-backlog.md：产品待办事项
- tech-design.md：技术上怎么做，最小技术方案
- sprint-plan.md：冲刺计划，拆成 3-5 个小 Sprint，Scrum 中 Sprint Backlog 是开发者为当前 Sprint 制定的工作计划，并会随着开发过程持续更新。

待讨论的：

- ADR：架构决策记录（Architecture Decision Record），保存在类似 `docs/decisions/0001-use-sqlite-for-mvp.md`，或者`docs/adr/`下面似乎更加好一些
- detailed-design.mdL：详细设计，在当前的结构中是否是冗余的？对于敏捷开发是否需要详细设计

`tasks/`目录：

- progress.md：记录当前做到那里了

- 类似：`tasks/000-project-workflow/`Agent 每次执行任务之前先记录下当前的任务，任务拆分，每个模块怎么做，这个子目录下面放着 task-spec.md 文件用来记录
- 感觉这个目录其实就是 ADR 吧，里面的每个，都像是一个任务的决策？？？

CONTEXT.md：上下文，使用`/grill-with-docs`生成

AGENTS.md：agent 配置，使用`/init`命令生成



如果中途在某个项目中实现某个功能是否也值得这么做，或者说，这些结构其实是相对于整个项目的，仅仅只是部分功能是否应该创建一个子项目？



### 4、测试相关

暂未有最佳实践
