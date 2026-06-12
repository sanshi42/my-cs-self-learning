# Agent 轻量开发框架最佳实践

这是一套面向个人开发者和小团队的 Agent 开发框架。

它只解决一个问题：

> 先把一个主题想清楚，再让 Agent 一次完成一个小任务。

默认不使用复杂流程，不默认创建额外目录，也不把每个功能都拆成一堆流程文件。

## 核心原则

- Less is more，默认文件越少越好。
- 一个复杂主题一个目录。
- 先写清 `Goal` 和 `Boundary`，再写实现计划。
- 一次只推进一个 `Task`。
- 每次完成后更新 `Status`。
- 如果三份文件已经装不下，优先拆成多个 `Topic`，不要继续加流程文件。

## 核心术语

| 术语 | 中文 | 用途 |
| --- | --- | --- |
| `Topic` | 主题 | 一个可以独立规划、实现、验收的复杂方向 |
| `Goal` | 目标 | 这个主题要达成什么结果 |
| `Boundary` | 边界 | 本主题做什么、不做什么 |
| `Milestone` | 里程碑 | 分阶段交付的顺序 |
| `Task` | 任务 | 一次 Agent 可以独立完成并验证的小工作 |
| `Status` | 状态 | 当前进度、完成记录、下一步和阻塞项 |

## 默认结构

```text
.
├── AGENTS.md
└── docs/
    └── <topic>/
        ├── proposal.md
        ├── plan.md
        └── tasks.md
```

说明：

- `AGENTS.md` 是仓库级长期规则，告诉 Agent 如何在这个项目中工作。
- `docs/<topic>/proposal.md` 写清主题、目标和边界。
- `docs/<topic>/plan.md` 写清实现思路、里程碑和验证方式。
- `docs/<topic>/tasks.md` 记录任务、状态和下一步。

默认只创建这三个主题文件，不默认创建额外流程文件。

## 三个文件怎么写

### `proposal.md`

`proposal.md` 用来回答：

- 这个 `Topic` 是什么。
- `Goal` 是什么。
- `Boundary` 是什么。
- 完成后应该能看到什么结果。

推荐结构：

```markdown
# <Topic> Proposal

## Goal

## Boundary

### In

### Out
```

提示词：

```text
$grill-me 我想做一个主题：[描述想法]

请创建或更新 `docs/<topic>/proposal.md`。
要求：
- 只写 Topic、Goal 和 Boundary。
- Boundary 必须同时写清 In 和 Out。
- 不写技术实现细节。
- 不扩展成复杂产品需求文档。
```

### `plan.md`

`plan.md` 用来回答：

- 怎么做。
- 分几个 `Milestone` 做。
- 每个阶段怎么验收。
- 有哪些关键实现取舍。

推荐结构：

```markdown
# <Topic> Plan

## Milestones

### M1: <milestone title>

- Goal:
- Boundary:
- Verification:
```

提示词：

```text
请阅读 `docs/<topic>/proposal.md`，创建或更新 `docs/<topic>/plan.md`。

要求：
- 写出最小可执行方案。
- 用 Milestones 表达交付顺序。
- 每个 Milestone 必须写清 Goal、Boundary 和 Verification。
- 不创建额外流程文件。
```

### `tasks.md`

`tasks.md` 用来回答：

- 当前 `Status` 是什么。
- 当前正在做哪个 `Task`。
- 后续有哪些 `Task`。
- 哪些已经完成。

推荐结构：

```markdown
# <Topic> Tasks

## Status

## Current Task

## Next Tasks

## Done
```

每个 `Task` 推荐只保留这些字段：

```markdown
### T001: <task title>

- Goal:
- Boundary:
- Verification:
- Status:
```

提示词：

```text
请阅读：
- `docs/<topic>/proposal.md`
- `docs/<topic>/plan.md`

然后创建或更新 `docs/<topic>/tasks.md`。

要求：
- 只拆出当前需要的 Task。
- 每个 Task 都要有 Goal、Boundary、Verification 和 Status。
- 选择一个最小 Current Task，其余放入 Next Tasks。
- 不创建额外目录。
```

## 标准流程

```text
Idea
-> docs/<topic>/proposal.md
-> docs/<topic>/plan.md
-> docs/<topic>/tasks.md
-> Implementation
-> Update Status
```

执行规则：

1. 先确定 `Topic` 名称。
2. 先写 `proposal.md`，确认 `Goal` 和 `Boundary`。
3. 再写 `plan.md`，确认 `Milestone` 和验证方式。
4. 再写 `tasks.md`，选择一个最小 `Task`。
5. Agent 只实现当前 `Task`。
6. 完成后运行验证。
7. 最后更新 `tasks.md` 里的 `Status`。

## 拆分主题的规则

不要通过增加文件解决复杂度。

如果一个主题变得太大，拆成多个主题目录：

```text
docs/ai-reading-app/
├── proposal.md
├── plan.md
└── tasks.md

docs/ai-reading-import/
├── proposal.md
├── plan.md
└── tasks.md

docs/ai-reading-tts/
├── proposal.md
├── plan.md
└── tasks.md
```

适合拆分的信号：

- 一个 `Topic` 里出现多个互相独立的 `Goal`。
- 一个 `Milestone` 已经像另一个完整主题。
- `Next Tasks` 里出现两条以上可以独立验收的主线。
- Agent 需要同时理解太多上下文才能开始一个小任务。

拆分后，每个新 `Topic` 仍然只保留 `proposal.md`、`plan.md`、`tasks.md`。

## `AGENTS.md` 怎么写

`AGENTS.md` 只写长期规则，不写某个主题的一次性任务。

推荐包含：

```markdown
# AGENTS.md

## 工作方式

- 默认使用中文沟通。
- 开始任务前先阅读当前 `docs/<topic>/` 下的三个文件。
- 一次只完成一个 Task。
- 不要主动扩大 Boundary。
- 如果新想法超出当前 Boundary，先记录到 `tasks.md`，不要直接实现。
- 完成后运行验证，并更新 `tasks.md` 的 Status。

## 验证方式

- 写清本项目常用测试、格式化、启动和检查命令。

## Git 约定

- 未经用户明确要求，不主动 commit、push 或改写 Git 历史。
```

## 常见错误

### 一开始就写代码

先写 `proposal.md`，再写 `plan.md`，最后才进入 `tasks.md` 和实现。

### 把一个主题写成流程仓库

默认只需要三个主题文件。文件越多，Agent 越容易读错 source of truth。

### 一个任务里塞多个目标

一个 `Task` 应该能独立完成、独立验证、独立更新 `Status`。

### 主题太大但继续加文件

复杂度过高时，拆成多个 `Topic`。不要默认增加额外流程文件。

### 完成后不更新状态

每次实现后必须更新 `tasks.md`，至少说明：

- 当前 `Status`。
- 已完成什么。
- 验证方式和结果。
- 下一步是什么。

## 最终检查清单

- [ ] 是否只有一个清楚的 `Topic`。
- [ ] `Goal` 是否能用几句话说明。
- [ ] `Boundary` 是否写清做什么和不做什么。
- [ ] `plan.md` 是否有清楚的 `Milestone`。
- [ ] 当前 `Task` 是否足够小。
- [ ] 每个 `Task` 是否有验证方式。
- [ ] 完成后是否更新了 `Status`。
- [ ] 如果主题太大，是否拆成了多个 `docs/<topic>/` 目录。

满足这些条件，就可以开始让 Agent 稳定推进开发。
