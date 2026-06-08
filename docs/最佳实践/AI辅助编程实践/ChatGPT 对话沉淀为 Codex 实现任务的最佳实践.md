# ChatGPT 对话沉淀为 Codex 实现任务的最佳实践

## 1. 概述

当我们在 ChatGPT 中围绕代码实现、架构设计、问题排查或重构方案进行讨论后，**不建议把完整聊天记录直接交给 Codex**。

更推荐的做法是：
**先将 ChatGPT 对话整理成一份清晰、可执行、可留档的实现任务说明，再交给 Codex 在代码仓库中实现。**

推荐分工：

| 工具              | 主要作用                                                 |
| ----------------- | -------------------------------------------------------- |
| ChatGPT           | 讨论需求、分析方案、澄清边界、整理任务说明               |
| Codex             | 阅读代码仓库、制定实现计划、修改代码、运行测试、总结改动 |
| `AGENTS.md`       | 保存项目长期规则、代码风格、测试命令、完成标准           |
| `docs/tasks/*.md` | 保存单次实现任务，便于复盘和交接                         |

核心原则：

> **ChatGPT 负责把问题想清楚，Codex 负责在仓库里把事情做出来。**

------

## 2. 实现步骤

### 第一步：在 ChatGPT 中充分讨论需求

可以先和 ChatGPT 讨论以下内容：

- 要解决什么问题
- 当前代码可能存在什么缺陷
- 应该采用什么实现方案
- 哪些地方需要重构
- 哪些行为不能改变
- 应该如何测试
- 有哪些风险点

这一阶段的目标不是马上写代码，而是**把需求、方案和边界讨论清楚**。

------

### 第二步：让 ChatGPT 整理成 Codex 任务包

可以使用如下提示词：

```text
请把我们上面的讨论整理成一份可以交给 Codex 执行的实现任务说明。

要求包括：
1. 背景
2. 目标
3. 需要修改的文件或模块
4. 明确不做什么
5. 实现步骤
6. 验收标准
7. 建议运行的测试命令
8. 风险点和注意事项

不要保留无关讨论，只保留 Codex 实现所需信息。
```

整理后的内容建议保存到项目中：

```text
docs/tasks/2026-04-28-xxx-implementation.md
```

------

### 第三步：在项目中维护长期规则（可选）

在项目根目录创建或维护：

```text
AGENTS.md
```

用于保存长期有效的项目规则，例如：

```md
# AGENTS.md

## Project overview

This is a Python 3.12 + FastAPI backend project.

## Development rules

- Prefer synchronous FastAPI style unless the existing module is already async.
- Do not introduce new production dependencies without asking.
- Keep service-layer logic separate from API route handlers.
- Use existing Pydantic schemas when possible.
- Prefer explicit error handling over broad except blocks.

## Commands

- Run tests with: `pytest`
- Run lint if available: `ruff check .`

## Done means

- Relevant tests pass.
- Changed behavior is covered by tests or clearly explained.
- Final response must list changed files and verification results.
```

注意区分：

| 文件                       | 用途         |
| -------------------------- | ------------ |
| `AGENTS.md`                | 长期项目规则 |
| `docs/tasks/*.md`          | 单次实现任务 |
| `docs/decisions/*.md`      | 架构决策记录 |
| `docs/review_checklist.md` | 代码审查清单 |

------

### 第四步：把任务交给 Codex 实现

在项目目录中运行 Codex 后，可以这样描述任务：

```text
请阅读 docs/tasks/2026-04-28-xxx-implementation.md，并基于当前仓库实现这个任务。

工作要求：
- 先阅读相关代码，不要直接凭空修改。
- 先给出实现计划，等我确认后再修改代码。
- 优先保持现有架构风格，不引入不必要的新依赖。
- 修改完成后运行相关测试。
- 最后总结修改了哪些文件、为什么这样改、如何验证。
```

对于复杂任务，建议先让 Codex 规划：

```text
请先不要修改代码。
请阅读相关文件后，先给出实现计划、影响范围和风险点。
```

确认计划后，再让 Codex 实现。

------

## 3. 验收标准

一次 ChatGPT → Codex 的交接流程完成后，应满足以下标准：

### 任务说明清晰

Codex 打开任务文档后，应能快速知道：

- 为什么要做
- 要做什么
- 不做什么
- 修改范围在哪里
- 预期效果是什么
- 如何验证是否完成

------

### 修改范围可控

Codex 的实现应符合：

- 不引入无关重构
- 不随意改变公共接口
- 不随意新增依赖
- 不破坏已有代码风格
- 不修改与任务无关的模块

------

### 测试验证明确

Codex 完成后应说明：

- 运行了哪些测试命令
- 哪些测试通过
- 哪些测试未运行，原因是什么
- 是否需要人工进一步验证

例如：

```text
已运行：
- pytest tests/test_xxx.py

结果：
- 全部通过

未运行：
- 全量 pytest，原因是当前环境缺少测试数据库配置。
```

------

### 最终结果可复盘

Codex 最终总结应包含：

- 修改了哪些文件
- 每个文件改了什么
- 为什么这样改
- 如何验证
- 是否存在遗留问题

------

## 4. 注意事项

### 不要直接把完整聊天记录交给 Codex

不推荐：

```text
这是我和 ChatGPT 的全部对话，请你实现。
```

原因是：

- 聊天记录中有大量无关信息
- Codex 不一定能准确提炼最终决策
- 容易扩大修改范围
- 容易遗漏约束条件

更推荐：

```text
这是整理后的实现任务，请按任务说明执行。
```

------

### 单次任务不要写进 `AGENTS.md`

`AGENTS.md` 适合放长期规则，例如：

- 项目技术栈
- 代码风格
- 测试命令
- 分层规范
- 完成标准

单次任务应放在：

```text
docs/tasks/
```

例如：

```text
docs/tasks/2026-04-28-refactor-parser-pipeline.md
```

------

### 复杂任务先计划，后实现

对于以下任务，不要让 Codex 直接改代码：

- 跨多个模块的重构
- 涉及数据库或接口兼容性
- 涉及异步流程、任务取消、并发控制
- 涉及核心业务逻辑
- 涉及测试体系调整

推荐流程：

```text
先阅读代码 → 给出计划 → 人工确认 → 再实现 → 运行测试 → 总结结果
```

------

### 任务说明要明确“不做什么”

很多 Codex 失控修改，往往不是因为目标不明确，而是因为**边界不明确**。

建议在任务中专门写：

```md
## Non-goals

- 不重构整个模块。
- 不修改数据库表结构。
- 不改变现有接口返回格式。
- 不引入新的第三方依赖。
- 不处理与本任务无关的历史问题。
```

------

### 最佳落地结构

推荐项目中保留如下结构：

```text
project-root/
  AGENTS.md
  docs/
    tasks/
      2026-04-28-xxx-implementation.md
    decisions/
      2026-04-28-xxx-design-decision.md
    review_checklist.md
```

这样可以形成稳定流程：

```text
ChatGPT 讨论需求
↓
ChatGPT 整理任务说明
↓
保存到 docs/tasks/
↓
Codex 阅读任务和代码
↓
Codex 先计划
↓
确认后实现
↓
运行测试
↓
总结改动
↓
人工 review
```

最终目标是：

> **把 ChatGPT 中零散的代码讨论，沉淀成可执行、可追踪、可复盘的工程任务，再交给 Codex 稳定实现。**
