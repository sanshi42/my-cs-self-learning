# Agent 敏捷开发框架最佳实践

## 目标

这是一套可以照着执行的 Agent 敏捷开发框架，用来把一个产品想法逐步变成可执行、可验收、可持续推进的 MVP 项目。

它的核心思想是：

> 先用文档收敛产品和技术边界，再让 Agent 一次只实现一个小任务。

这不是完整 Scrum 管理流程，也不是瀑布式需求规格模板。它更适合个人开发者、小团队，或者一个人配合 Codex、Claude Code、Cursor、OpenCode 等 Agent 工具开发本地项目、Web App、后端服务、AI 应用原型。

------

## 适用场景

适合：

- 从 0 到 1 创建一个 MVP 项目。
- 想让 Agent 按小任务稳定推进，而不是一次性乱改。
- 希望项目中有清晰的产品范围、技术方案、任务记录和进度面板。
- 项目还不大，但希望后续能持续演进。
- 需要把 ChatGPT 中讨论出来的想法沉淀成 Codex 可以执行的仓库任务。

不适合：

- 大型公司完整 Scrum 管理。
- 已经有成熟 Jira、Confluence、RFC、ADR 流程的团队。
- 只写一个一次性脚本，不需要长期维护。
- 需求还没想清楚，却希望 Agent 直接写完整系统。

------

## 核心流程

项目启动时，按这个顺序生成文档和任务：

```text
idea
-> docs/proposal.md
-> docs/mvp-scope.md
-> docs/product-backlog.md
-> docs/tech-design.md
-> CONTEXT.md
-> docs/sprint-plan.md
-> AGENTS.md
-> tasks/progress.md
-> tasks/000-project-workflow/task-spec.md
-> tasks/001-.../task-spec.md
-> implementation
```

已有项目中新增功能时，不重新走完整流程，只使用缩小版：

```text
读现有 docs
-> 判断是否在 scope/backlog/sprint 内
-> 创建 tasks/<id>/task-spec.md
-> 实现
-> 验证
-> 更新 tasks/progress.md
```

------

## 推荐目录结构

项目根目录建议长这样：

```text
.
├── AGENTS.md
├── CONTEXT.md
├── docs/
│   ├── proposal.md
│   ├── mvp-scope.md
│   ├── product-backlog.md
│   ├── tech-design.md
│   ├── sprint-plan.md
│   ├── adr/
│   │   └── 0001-example.md
│   └── designs/
│       └── complex-feature.md
└── tasks/
    ├── progress.md
    ├── 000-project-workflow/
    │   └── task-spec.md
    └── 001-first-real-task/
        └── task-spec.md
```

原则：

- `docs/` 是长期知识库。
- `tasks/` 是执行工作台。
- `AGENTS.md` 是 Agent 工作规约。
- `CONTEXT.md` 是领域语言和上下文。
- `task-spec.md` 是单次任务规格，不是 ADR。

------

## 第 0 步：准备项目和 Git checkpoint

### 目的

开始让 Agent 修改项目前，先有一个干净起点，方便回滚和对比。

### 操作

如果是新项目：

```bash
mkdir my-mvp
cd my-mvp
git init -b main
```

如果是已有项目：

```bash
git status --short
```

如果当前改动很重要，先提交或至少确认它们不是 Agent 本轮要覆盖的内容。

### 检查点

- 项目目录已经确定。
- Git 状态清楚。
- 你知道哪些文件是自己已有改动。
- 后续 Agent 不应该随手覆盖未提交内容。

------

## 第 1 步：生成 `docs/proposal.md`

### 目的

`proposal.md` 是初始产品简报，不是完整需求规格书。

它回答：

- 为什么做。
- 给谁用。
- 解决什么问题。
- 第一版大概长什么样。
- 成功验收大概是什么样。
- 当前有哪些关键假设。

### 提示词

```text
我想[在这里用自然语言写你的产品想法]
请根据这个想法创建或更新 `docs/proposal.md`。
要求：
- 把它写成初始产品简报，而不是完整需求规格书。
- 包含 Summary、Target Users、Problem、Proposed Solution、Key Requirements、Acceptance Criteria、Assumptions。
- 明确第一版只解决什么核心问题。
- 不要写技术实现细节，技术方案后面会放到 `docs/tech-design.md`。
- 如果需求不清楚，先问我 1-3 个关键问题，不要自己脑补复杂功能。
```

### 产物

```text
docs/proposal.md
```

### 人工检查点

- 是否能用一两段话说清产品是什么。
- 是否说明目标用户。
- 是否说明第一版成功标准。
- 是否没有过早写技术细节。
- 是否没有把未来功能都塞进第一版。

------

## 第 2 步：生成 `docs/mvp-scope.md`

### 目的

`mvp-scope.md` 是 MVP 范围合同。它决定第一版做什么、不做什么。

这个文件非常重要，因为 Agent 后续最容易犯的错就是顺手扩大范围。

### 提示词

```text
请阅读 `docs/proposal.md`，然后创建 `docs/mvp-scope.md`。

要求：
- 明确 MVP 目标。
- 分成 “MVP 做什么” 和 “MVP 不做什么”。
- 写出 MVP 用户故事。
- 写出 MVP 验收标准。
- 写出第一版迭代建议。
- 明确哪些功能必须 deferred，不允许在第一版偷偷实现。
- 不要写详细技术实现，技术方案后面放到 `docs/tech-design.md`。
```

### 产物

```text
docs/mvp-scope.md
```

### 人工检查点

- “不做什么” 是否足够明确。
- 是否能防止 Agent 顺手做账号系统、云同步、复杂 UI、批量任务、AI 总结等非 MVP 内容。
- MVP 验收标准是否能人工或自动验证。
- 是否真的只保留第一版核心闭环。

### 注意

MVP 完成后不要删除 `mvp-scope.md`。它是 v1 的历史范围合同，用来解释第一版为什么做这些、为什么不做那些。

------

## 第 3 步：生成 `docs/product-backlog.md`

### 目的

`product-backlog.md` 是产品需求池。

它回答：

> 有哪些事情值得做？

它不负责决定每个 Sprint 做什么，也不写具体代码实现。

### 提示词

```text
请阅读 `docs/proposal.md` 和 `docs/mvp-scope.md`，然后创建 `docs/product-backlog.md`。

要求：
- 使用表格记录 backlog。
- 每个 backlog item 要有 ID、Priority、Status、Epic、User Story、Acceptance Criteria、Dependencies。
- Priority 使用 P0、P1、P2、Later。
- Status 使用 Todo、Ready、Doing、Review、Done、Deferred。
- P0 必须能支撑 MVP 核心闭环。
- 不进入 MVP 的内容放到 Deferred Items。
- 每个用户故事都要有可验收标准。
- 如果一个故事太大，请拆成多个更小的故事。
```

### 产物

```text
docs/product-backlog.md
```

### 人工检查点

- P0 是否真的是 MVP 必须项。
- Later/Deferred 是否明确记录。
- 每个 item 是否有验收标准。
- 是否出现了无法在一个 Sprint 内理解的大需求。
- 依赖关系是否清楚。

------

## 第 4 步：生成 `docs/tech-design.md`

### 目的

`tech-design.md` 是最小技术方案和核心契约。

它回答：

> 这个 MVP 技术上最小怎么做？

它不是传统瀑布式详细设计，不要提前写死每个函数、每个组件、每条 SQL。

### 提示词

```text
请阅读：
- `docs/proposal.md`
- `docs/mvp-scope.md`
- `docs/product-backlog.md`

然后创建 `docs/tech-design.md`。

要求：
- 写出最小技术方案，不要写成完整详细设计。
- 包含技术选型、项目结构、数据模型、API 草案、关键模块边界、本地运行方式、技术非目标。
- 每个技术选择都要说明为什么适合 MVP。
- 优先使用简单、可本地运行、容易验证的方案。
- 不要引入超出 MVP 需要的复杂依赖。
- 如果某个技术决策会长期影响项目，请标记为可能需要 ADR。
```

### 产物

```text
docs/tech-design.md
```

### 人工检查点

- 技术方案是否足够让 Sprint 1 开工。
- 是否没有过度设计。
- 是否明确目录结构。
- 是否明确数据和 API 的核心契约。
- 是否说明了哪些技术能力暂时不做。

------

## 第 5 步：生成 `CONTEXT.md`

### 目的

`CONTEXT.md` 是领域语言和上下文文档。

它解决的问题是：

> Agent 后续写代码时，不要一会儿叫 article，一会儿叫 document，一会儿叫 material。

它不是任务计划，也不是需求文档。

### 提示词

```text
请阅读：
- `docs/proposal.md`
- `docs/mvp-scope.md`
- `docs/product-backlog.md`
- `docs/tech-design.md`

然后创建 `CONTEXT.md`。

要求：
- 提取项目中最核心的领域概念。
- 每个概念包含中文名、英文名、定义、使用场景、避免使用的混淆词。
- 只记录稳定概念，不记录临时实现细节。
- 帮助后续 Agent 在命名、代码、接口、文档中保持统一语言。
```

### 产物

```text
CONTEXT.md
```

### 人工检查点

- 是否列出了真正的领域核心词。
- 是否避免把技术实现词误当领域词。
- 是否说明哪些词不要乱用。
- 是否能帮助后续代码命名。

### 示例

比如一个阅读器项目里，可以定义：

```text
阅读材料（Reading Material）
结构化正文（Structured Body）
材料库（Material Library）
来源身份（Source Identity）
```

------

## 第 6 步：生成 `docs/sprint-plan.md`

### 目的

`sprint-plan.md` 是交付节奏计划。

它回答：

> backlog 里的事情按什么顺序交付？

它不替代 `product-backlog.md`。

### 提示词

```text
请阅读：
- `docs/mvp-scope.md`
- `docs/product-backlog.md`
- `docs/tech-design.md`
- `CONTEXT.md`

然后创建 `docs/sprint-plan.md`。

要求：
- 把 MVP 拆成 3-5 个小 Sprint。
- 每个 Sprint 包含目标、Backlog 范围、进入条件、实施重点、不做什么、验收演示、完成标准、风险。
- Sprint 1 必须能产生最小可运行或可验证的基础闭环。
- 不要把无依赖关系的大量功能塞进同一个 Sprint。
- 如果 backlog item 太大，请建议拆分。
```

### 产物

```text
docs/sprint-plan.md
```

### 人工检查点

- Sprint 顺序是否符合依赖关系。
- Sprint 1 是否足够小。
- 每个 Sprint 是否有清楚的完成标准。
- 是否把体验打磨、可选项和核心闭环分开。

------

## 第 7 步：生成 `AGENTS.md`

### 目的

`AGENTS.md` 是 Agent 工作规约。

它告诉 Agent：

- 开始任务前读哪些文档。
- 一次只做一个小任务。
- 如何创建 task。
- 什么不允许做。
- 完成后如何验证和总结。

### 提示词

```text
请阅读：
- `docs/mvp-scope.md`
- `docs/product-backlog.md`
- `docs/tech-design.md`
- `docs/sprint-plan.md`
- `CONTEXT.md`

然后创建 `AGENTS.md`。

要求：
- 写成当前项目的 Agent 工作规约。
- 明确开始任何任务前必须阅读哪些文档。
- 明确一次只完成一个小任务。
- 明确每个任务必须有 `tasks/<task-id>/task-spec.md`。
- 明确任务结束前必须更新 `tasks/progress.md`。
- 明确如果新需求超出 MVP scope，默认放入 backlog 或 deferred，不直接实现。
- 写出项目技术约束、开发边界、验证原则。
- 不要把单次任务写进 `AGENTS.md`。
```

### 产物

```text
AGENTS.md
```

### 人工检查点

- 是否能约束 Agent 不扩大范围。
- 是否说明任务目录规则。
- 是否说明完成任务后必须更新进度。
- 是否包含项目特有技术约束。
- 是否没有把临时任务写成长期规则。

------

## 第 8 步：初始化 `tasks/` 工作台

### 目的

`tasks/` 是执行工作台。它记录每次 Agent 实际要做什么、做到哪里算完成、完成后做了什么。

### 为什么不放进 `docs/tasks/*.md`

可以放，但不推荐作为默认。

推荐保留：

```text
tasks/<task-id>/task-spec.md
```

原因是每个任务未来可能不止一个 Markdown 文件，还可能有：

```text
manual-test.md
sample-input.txt
screenshot.png
verification-output.md
```

独立目录让任务边界更清楚。

### 复制给 Agent 的 prompt

```text
请根据当前项目文档初始化 `tasks/` 工作台。

要求：
- 创建 `tasks/progress.md`。
- 创建 `tasks/000-project-workflow/task-spec.md`。
- `000-project-workflow` 是元任务，用来记录本项目开始采用单任务推进工作流。
- `tasks/progress.md` 需要包含当前状态、已完成任务、当前任务、下一步、阻塞项、最近变更记录、维护规则。
- `task-spec.md` 需要包含 Task ID、Task Title、Backlog Reference、Goal、Scope、Non-goals、Implementation Notes、Acceptance Criteria、Test Plan、Completion Notes。
- 这一步只创建任务工作台，不实现业务代码。
```

### 产物

```text
tasks/progress.md
tasks/000-project-workflow/task-spec.md
```

### 人工检查点

- `progress.md` 是否能让新 Agent 快速知道项目状态。
- `000-project-workflow` 是否只是元任务，没有混入业务功能。
- 后续任务编号规则是否清楚。

------

## 第 9 步：开始第一个真实 task

### 目的

从这里才开始让 Agent 写代码。

第一个真实 task 应该来自当前 Sprint 中最小、最基础、依赖最少的 backlog item。

### 复制给 Agent 的 prompt

```text
请开始第一个真实开发任务。

要求：
1. 先阅读：
   - `docs/mvp-scope.md`
   - `docs/product-backlog.md`
   - `docs/tech-design.md`
   - `docs/sprint-plan.md`
   - `CONTEXT.md`
   - `AGENTS.md`
   - `tasks/progress.md`
2. 从当前 Sprint 中选择一个最小可交付任务。
3. 先创建 `tasks/<next-id>-<slug>/task-spec.md`，写清 Goal、Scope、Non-goals、Acceptance Criteria、Test Plan。
4. 在写完 task-spec 后再开始实现。
5. 不要合并多个 backlog item。
6. 完成后运行合适的验证命令。
7. 更新 `tasks/progress.md`。
```

### 产物

```text
tasks/001-.../task-spec.md
业务代码或文档改动
tasks/progress.md
```

### 人工检查点

- task 是否足够小。
- 是否能独立验收。
- 是否没有混入多个 Sprint 目标。
- 是否有验证方式。
- 完成后是否更新 `progress.md`。

------

## 中途新增功能怎么用

已有项目中新增功能时，不要重新生成全套文档。

使用缩小版流程：

```text
1. 阅读现有 mvp-scope、product-backlog、tech-design、sprint-plan、progress。
2. 判断新功能是否在当前 scope/backlog 内。
3. 如果已在 scope 内：创建新的 task-spec。
4. 如果不在 scope 内但合理：先更新 product-backlog，必要时更新 sprint-plan。
5. 如果改变产品边界：更新 mvp-scope 或创建后续版本 scope。
6. 如果改变长期技术方向：新增 ADR。
7. 如果功能复杂且横跨多个任务：新增 docs/designs/<feature>.md。
8. 再开始实现。
```

### 新增功能 prompt

```text
我想在当前项目中新增一个功能：

[描述功能]

请先不要写代码。

请阅读当前项目的 `docs/`、`CONTEXT.md`、`AGENTS.md` 和 `tasks/progress.md`，判断这个功能属于哪种情况：

1. 已在当前 scope/backlog 内，可以直接拆 task。
2. 需要先更新 product-backlog 或 sprint-plan。
3. 改变了 MVP 范围，需要先更新 mvp-scope 或放入后续版本。
4. 改变了长期技术方向，需要新增 ADR。
5. 功能过大，需要先拆成多个 task 或写专题设计。

请先给出判断和推荐处理方式，不要直接实现。
```

------

## ADR 什么时候写

ADR 是 Architecture Decision Record，放在：

```text
docs/adr/
```

它只记录重大、长期、难以轻易反转的决策。

适合写 ADR：

- MVP 用 SQLite 还是 Postgres。
- 第一版只做本地应用还是公网服务。
- TTS 用系统命令还是本地模型。
- 是否保存用户凭据。
- 是否引入新的任务队列或消息系统。

不适合写 ADR：

- 新增一个普通 API。
- 修一个 bug。
- 调整一个按钮。
- 增加一个测试。
- 记录某次任务的实现步骤。

### ADR prompt

```text
当前项目出现一个可能影响长期架构或产品边界的决策：

[描述决策]

请先阅读现有 `docs/` 和 `CONTEXT.md`，判断是否值得写 ADR。

如果值得，请创建 `docs/adr/000X-<short-title>.md`。

ADR 需要包含：
- Status
- Context
- Decision
- Consequences
- Alternatives Considered

如果不值得写 ADR，请说明原因，并建议放到哪个 task-spec 或设计文档中。
```

------

## 专题详细设计什么时候写

默认不要创建 `detailed-design.md`。

只有遇到复杂专题时，才创建：

```text
docs/designs/<feature>.md
```

适合写专题详细设计：

- 功能横跨多个 Sprint。
- 涉及复杂状态机。
- 涉及同步协议。
- 涉及权限模型。
- 涉及数据迁移。
- 多个 Agent 或多人需要并行开发。

不适合：

- 一个小 API。
- 一个简单页面。
- 一个单文件修复。
- 已经能在一个 task-spec 中说清楚的任务。

------

## 文档职责速查表

| 文件 | 作用 | 不做什么 |
| --- | --- | --- |
| `docs/proposal.md` | 初始产品简报 | 不写完整技术方案 |
| `docs/mvp-scope.md` | MVP 范围合同 | 不塞后续版本功能 |
| `docs/product-backlog.md` | 产品需求池 | 不决定 Sprint 节奏 |
| `docs/tech-design.md` | 最小技术方案和核心契约 | 不写全部实现细节 |
| `CONTEXT.md` | 领域语言和上下文 | 不写任务计划 |
| `docs/sprint-plan.md` | Sprint 交付节奏 | 不替代 backlog |
| `AGENTS.md` | Agent 工作规约 | 不写单次任务 |
| `tasks/progress.md` | 当前事实面板 | 不做需求源头 |
| `tasks/<id>/task-spec.md` | 单次任务规格 | 不是 ADR |
| `docs/adr/*.md` | 长期决策记录 | 不记录普通任务 |
| `docs/designs/*.md` | 复杂专题详细设计 | 不默认创建 |

------

## 常见错误

### 错误 1：一上来就让 Agent 写代码

不推荐：

```text
帮我做一个 AI 学习 App
```

推荐：

```text
请先不要写代码。请先根据我的想法生成 proposal.md 和 mvp-scope.md，让我确认第一版边界。
```

### 错误 2：一个 task 包含多个 backlog item

不推荐：

```text
实现登录、支付、课程导入、播放器和部署。
```

推荐：

```text
本次只实现 `MVP-001` 的服务骨架和健康检查。
```

### 错误 3：把 `task-spec.md` 当 ADR

`task-spec.md` 记录这次任务怎么做。

ADR 记录项目以后为什么必须沿着某个方向走。

### 错误 4：每个功能都写详细设计

普通小任务直接写 `task-spec.md`。

只有复杂专题才写 `docs/designs/*.md`。

### 错误 5：任务完成后不更新 `progress.md`

这样下一次打开项目时，Agent 不知道真实状态，只能重新猜。

每次任务结束都应该更新：

- 当前状态。
- 已完成任务。
- 当前任务。
- 下一步。
- 阻塞项。
- 最近变更记录。

### 错误 6：用生成命令替代项目文档

`/init`、`/grill-with-docs`、`$grill-me`、ChatGPT 对话都是生成辅助。

最终 source of truth 是仓库里的 Markdown：

```text
AGENTS.md
CONTEXT.md
docs/*.md
tasks/**/*.md
```

------

## 最终检查清单

完成项目启动框架后，检查这些问题：

- [ ] 是否有 `docs/proposal.md`。
- [ ] 是否有 `docs/mvp-scope.md`，并明确“不做什么”。
- [ ] 是否有 `docs/product-backlog.md`，并区分 P0/P1/P2/Later。
- [ ] 是否有 `docs/tech-design.md`，并保持最小技术方案。
- [ ] 是否有 `CONTEXT.md`，并统一领域语言。
- [ ] 是否有 `docs/sprint-plan.md`，并拆成 3-5 个 Sprint。
- [ ] 是否有 `AGENTS.md`，并约束 Agent 工作方式。
- [ ] 是否有 `tasks/progress.md`。
- [ ] 是否有 `tasks/000-project-workflow/task-spec.md`。
- [ ] 第一个真实任务是否来自当前 Sprint。
- [ ] 每个任务是否足够小，可以独立验收。
- [ ] 是否明确何时写 ADR。
- [ ] 是否明确何时写 `docs/designs/*.md`。

如果这些都满足，你就已经有了一个可以持续使用的 Agent 敏捷开发框架。

------

## 最短可复制启动 prompt

如果你只想快速开始，可以把下面这段直接交给 Agent：

```text
我想为当前项目建立一套 Agent 敏捷开发框架。

请先不要写业务代码。

请按以下顺序创建项目文档：

1. `docs/proposal.md`：初始产品简报。
2. `docs/mvp-scope.md`：MVP 范围合同，明确做什么和不做什么。
3. `docs/product-backlog.md`：产品需求池，包含优先级、状态、依赖和验收标准。
4. `docs/tech-design.md`：最小技术方案和核心契约。
5. `CONTEXT.md`：领域语言和上下文。
6. `docs/sprint-plan.md`：3-5 个 Sprint 的交付计划。
7. `AGENTS.md`：Agent 工作规约。
8. `tasks/progress.md`：当前事实面板。
9. `tasks/000-project-workflow/task-spec.md`：建立单任务推进工作流的元任务。

要求：
- 每一步先生成清晰可读的 Markdown。
- 不要提前实现业务代码。
- 如果需求不清楚，先问我关键问题。
- 每个文档都要说明自己的职责边界。
- 默认一次只推进一个小任务。
```

这个 prompt 适合快速搭框架；如果是认真做项目，仍然建议按本文前面的步骤逐步确认。
