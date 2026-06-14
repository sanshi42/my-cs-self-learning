# Agent 轻量开发框架最佳实践

这是一套面向个人开发者和小团队的轻量 Agent 开发框架。

用户只需要描述目标，Agent 负责判断工作大小：

- 一次可以完成并验证的小任务，直接实现。
- 需要拆分、排序或并行的复杂目标，自动建立 Topic 和任务依赖图。
- 用户说“继续”时，Agent 自动找到并推进当前最合适的工作。

Topic 是 Agent 内部的规划和调度机制。默认不要要求用户创建、激活、暂停、切换或关闭 Topic。

## 核心原则

- Less is more，只在复杂工作确实需要时创建 Topic。
- 用户关注目标和结果，Agent 负责维护内部工作状态。
- `AGENTS.md` 只记录长期规则，不写死具体 Topic。
- 一个 Topic 表达一个可以独立验收的复杂目标。
- 每个 Topic 最多只有 `proposal.md`、`plan.md` 和 `tasks.md`。
- 用任务依赖图表达执行顺序，允许互不冲突的任务并行。
- 同一时刻最多只有一个 Active Topic。

## 默认结构

```text
.
├── AGENTS.md
└── docs/
    ├── ideas.md              # 按需创建，由用户维护
    └── <topic>/
        ├── proposal.md       # Draft 阶段仅有此文件
        ├── plan.md           # 开始执行时创建
        └── tasks.md          # 开始执行时创建
```

不创建额外的 Topic 注册表。Agent 通过扫描 `docs/*/proposal.md` 中的 YAML Front Matter 获取 Topic 状态。

## 何时创建 Topic

以下请求直接实现，不创建 Topic：

- 可以作为一个任务一次完成并验证。
- 不需要拆分依赖关系。
- 不需要多个 Agent 并行协作。

满足以下任一条件时，Agent 自动创建 Topic：

- 需要两个以上可以独立验证的 Task。
- Task 之间存在依赖顺序。
- 存在适合并行执行的独立 Task。
- 目标需要跨多次执行持续维护上下文。

不要用文件数量或预计耗时作为唯一判断标准。跨多个文件的原子修改仍然可以是一个小任务。

## Topic 生命周期

Topic 状态直接记录在 `proposal.md`：

```yaml
---
status: draft
priority: P2
created: 2026-06-14
---
```

状态含义：

| 状态 | 含义 |
| --- | --- |
| `draft` | 尚未投入执行的复杂候选工作，只有 `proposal.md` |
| `active` | 当前正在执行的唯一 Topic，具备完整三文件 |
| `paused` | 尚未完成，但当前无法继续或被新的复杂目标抢占 |
| `done` | 全部 Task 和 Topic 级验证已完成 |
| `closed` | 未完成，但已经过时、被替代或用户不再需要 |

规则：

- 优先级使用 `P0` 至 `P3`，`P0` 最高，默认 `P2`。
- 同一时刻最多只有一个 `active` Topic。
- `done` 和 `closed` 只做逻辑归档，不移动或删除 Topic 目录。
- `done` 是不可重新打开的完成快照；后续复杂改进创建新 Topic。
- `closed` 需要用户确认，可以在用户要求后恢复为 `draft` 并重新规划。
- Agent 发现 Topic 可能已经过时或被替代时，只提出关闭建议，不自动关闭。

## 自动调度

Agent 收到请求后按以下顺序处理：

1. 判断请求是小任务还是复杂目标。
2. 扫描 `docs/*/proposal.md`，确认当前是否存在 Active Topic。
3. 判断请求是否属于当前 Active Topic 的 Goal 和 Boundary。
4. 直接实现小任务，或自动更新、创建和调度 Topic。

### 新请求

| 请求类型 | 行为 |
| --- | --- |
| 小任务 | 直接实现，不创建或暂停 Topic |
| 属于当前 Active Topic 的复杂请求 | 更新当前 Topic 的 proposal、plan 和任务图，然后继续执行 |
| 独立的新复杂目标 | 停止为旧 Topic 领取新 Task；执行中 Task 在安全检查点收敛后，将旧 Topic 标记为 `paused`，再创建并执行新 Topic |
| 没有 Active Topic 的复杂目标 | 自动创建完整 Topic，并标记为 `active` |

### 用户说“继续”

如果存在 Active Topic，继续调度它的 Ready Task。

如果没有 Active Topic，从 `draft` 和 `paused` 中选择下一项：

1. 优先级更高的 Topic 优先。
2. 相同优先级时，`paused` 优先于 `draft`。
3. 状态和优先级相同时，创建时间更早的优先。

选中 Draft 后，Agent 自动补齐 `plan.md` 和 `tasks.md`，再将它标记为 `active`。选中 Paused Topic 后，直接将它恢复为 `active` 并继续调度。用户不需要执行激活操作。

### 自动暂停和完成

- Active Topic 有未完成 Task，但没有 Ready 或 In Progress Task 时，记录阻塞原因并自动标记为 `paused`，然后调度下一 Topic。
- 全部 Task 为 Done 后运行 Topic 级验证。
- Topic 级验证失败时，自动创建修复 Task，保持 `active` 并继续调度。
- 全部 Task 和 Topic 级验证完成后，自动标记为 `done`。

复杂目标或“继续”请求应持续调度，直到 Topic 进入 `done` 或 `paused`，不要每完成一个 Task 就要求用户再次操作。

## 三个 Topic 文件

### `proposal.md`

`proposal.md` 记录 Topic 状态、优先级、目标和边界。Draft 阶段只创建此文件。

```markdown
---
status: draft
priority: P2
created: 2026-06-14
---

# <Topic> Proposal

## Goal

## Boundary

### In

### Out
```

当用户提出属于当前 Goal 的新要求时，Agent 可以更新 Boundary；独立 Goal 应创建新的 Topic。

### `plan.md`

`plan.md` 在 Topic 开始执行时创建，只记录实现方案、关键决策和 Topic 级验证，不强制使用 Milestone。

```markdown
# <Topic> Plan

## Approach

## Key Decisions

## Verification
```

### `tasks.md`

`tasks.md` 在 Topic 开始执行时创建，用 Task 的依赖关系表达执行顺序和并行机会。

```markdown
# <Topic> Tasks

### T001: <任务名称>

- Goal:
- Depends on: []
- Verification:
- Status: Pending

### T002: <任务名称>

- Goal:
- Depends on: [T001]
- Verification:
- Status: Pending
```

每个 Task 只保留：

- `Goal`：这个 Task 要交付什么。
- `Depends on`：必须先完成的 Task ID。
- `Verification`：如何独立验证。
- `Status`：`Pending`、`In Progress`、`Done` 或 `Blocked`。
- `Claimed by`：仅在 Task 被领取时临时增加，完成或重置后移除。

`Ready` 不需要手写。当一个 Pending Task 的全部依赖均为 Done 时，它自动成为 Ready Task。

## Task 领取与并行

Agent 从 Active Topic 中自动领取 Ready Task：

- 存在多个互不冲突的 Ready Task，且多 Agent 工具可用时，自动并行分派。
- Task 修改同一文件边界、共享未稳定接口或存在合并风险时，顺序执行。
- 领取 Task 时将状态改为 `In Progress`，并增加 `Claimed by`。
- 完成验证后将状态改为 `Done`，移除 `Claimed by`。
- 外部条件或执行失败导致 Task 无法继续时，将状态改为 `Blocked` 并记录原因。

如果后续 Agent 发现遗留的 `In Progress` 或 `Claimed by`，且无法确认原领取者仍在执行：

1. 检查已有改动、执行状态和验证结果。
2. 保留可以复用的进度。
3. 由当前 Agent 接管，或恢复为 Pending 后重新领取。

不要因为旧 Claim 要求用户手动处理。

## `ideas.md`

`docs/ideas.md` 是按需创建、由用户自由编辑的想法收件箱。

Agent 默认不读取、不整理、不修改 `ideas.md`。只有用户明确要求整理时才处理它。

整理时：

1. 合并可以一起实现的想法。
2. 拆分包含多个独立目标的想法。
3. 按优先级归类。
4. 小型想法直接实现。
5. 大型想法只创建 Draft proposal，不抢占当前 Active Topic。
6. 从 `ideas.md` 移除已经处理的内容，历史由 Git 保留。

不要给 `ideas.md` 增加状态字段，使它变成另一套任务系统。

## 用户如何使用

用户只需要使用自然请求：

```text
实现阅读页的前端改版。
```

Agent 自动判断直接实现，还是创建 Topic 和任务图。

```text
继续。
```

Agent 自动推进 Active Topic；没有 Active Topic 时，自动选择下一 Draft 或 Paused Topic。

```text
整理 `docs/ideas.md`。
```

Agent 处理想法收件箱：小项直接实现，大项整理为 Draft。

```text
这个想法已经过时，不需要了。
```

Agent 确认用户指向的 Draft 或 Paused Topic 后，将它标记为 `closed`。

默认不要让用户使用“创建 Topic”“激活 Topic”“领取 Task”之类的内部工作流术语。

## `AGENTS.md` 怎么写

`AGENTS.md` 只写仓库级长期规则，不写具体 Topic 路径或一次性任务。

推荐模板：

```markdown
# AGENTS.md

## 工作方式

- 默认使用中文沟通。
- 用户只需要描述目标；Topic 生命周期和 Task 调度由 Agent 自动维护。
- 一次可以完成并验证的小任务直接实现，不创建 Topic。
- 需要两个以上独立可验证 Task、依赖排序或并行执行的复杂目标，自动创建 Topic。
- 开始开发任务前扫描 `docs/*/proposal.md`，确认是否存在 Active Topic。
- 新请求属于当前 Active Topic 的 Goal 时，更新其计划和任务图后继续执行。
- 独立的新复杂目标到来时，在安全检查点暂停旧 Active Topic，再执行新 Topic。
- 用户说“继续”时，自动调度 Active Topic；没有 Active Topic 时，按优先级选择 Draft 或 Paused Topic。
- 持续领取 Ready Task，直到 Topic 自动进入 Done 或 Paused。
- 多个 Ready Task 互不冲突且工具可用时，自动并行执行。
- 全部 Task 完成后运行 Topic 级验证；通过后自动标记 Done，失败则创建修复 Task。
- Agent 默认不读取或修改 `docs/ideas.md`，只有用户明确要求整理时才处理。
- 发现 Topic 可能过时，只提出关闭建议；标记 Closed 需要用户确认。

## Topic 文档

- Topic 状态和优先级记录在 `docs/<topic>/proposal.md` 的 YAML Front Matter。
- Draft 只有 `proposal.md`；Active 和 Paused Topic 使用 `proposal.md`、`plan.md` 和 `tasks.md`。
- `plan.md` 记录实现方案、关键决策和 Topic 级验证。
- `tasks.md` 使用 Depends on 表达任务依赖图。
- 不创建额外 Topic 注册表，不在 `AGENTS.md` 中写死具体 Topic。

## 验证方式

- 写清本项目常用测试、格式化、启动和检查命令。

## Git 约定

- 未经用户明确要求，不主动 commit、push 或改写 Git 历史。
```

## 场景检查

| 场景 | Agent 行为 |
| --- | --- |
| 用户提出小型请求 | 直接完成，不创建或暂停 Topic |
| 用户提出独立复杂目标 | 安全暂停旧 Active Topic，自动创建并执行新 Topic |
| 用户补充当前 Goal 内的新要求 | 更新当前 Topic 的计划和任务图 |
| 用户说“继续” | 自动推进 Active Topic，或选择最高优先级 Draft/Paused Topic |
| 多个 Task 的依赖已满足 | 无冲突且工具可用时并行领取 |
| Topic 未完成但没有 Ready 或 In Progress Task | 记录阻塞并自动 Paused |
| 全部 Task Done，但整体验证失败 | 自动创建修复 Task并继续 |
| 全部 Task 和整体验证通过 | 自动标记 Done |
| 用户未要求整理 `ideas.md` | 不读取、不修改 |
| 用户要求整理 `ideas.md` | 小项直接实现，大项创建 Draft |
| Agent 发现 Topic 过时 | 提出 Closed 建议，等待用户确认 |

## 最终检查清单

- [ ] 用户是否只需描述目标，不需要管理 Topic。
- [ ] 是否只在复杂目标需要任务图时创建 Topic。
- [ ] 是否取消了额外 Topic 注册表。
- [ ] Topic 状态和优先级是否只记录在 `proposal.md`。
- [ ] Draft 是否只有 `proposal.md`。
- [ ] `plan.md` 是否避免重复维护 Task 顺序。
- [ ] `tasks.md` 是否可以推导 Ready Task 和并行机会。
- [ ] Agent 是否持续调度直到 Topic Done 或 Paused。
- [ ] Topic Done 前是否通过 Topic 级验证。
- [ ] Agent 是否默认忽略 `ideas.md`。

满足这些条件，框架既能支持复杂工作和多 Agent 协作，也不会把内部流程负担转嫁给用户。
