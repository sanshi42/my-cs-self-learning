# 前端设计Agent最佳实践

## 概述

总结出一套可以广泛使用的最佳实践用来为写出的后端代码从零开始设计出一套还不错的前端页面。

## 步骤

1. 选择基础

   技术路线参照：https://github.com/sanshi42/my-full-stack-learning/tree/master

   ```markdown
   请参照：
   ```



2.

````markdown
是的。你现在发现的是一个重要的产品边界：

> `Agent 敏捷开发框架最佳实践.md` 不应该是要求用户照着执行的操作手册，而应该是用于生成自动化能力的设计规范。

让你逐个项目阅读文档、手动修改 `AGENTS.md`，确实不合理。

## 推荐架构

应当分成三层：

| 层级 | 面向对象 | 职责 |
|---|---|---|
| 最佳实践文档 | 你 | 维护框架设计、原则和决策 |
| 安装/升级 Skill | Agent | 自动把框架应用到具体项目 |
| 项目 `AGENTS.md` | 项目中的 Agent | 保存精简的运行时规则 |

### 1. 最佳实践文档

它是框架的 **source of truth**，主要给你审阅和持续改进。

不要求每个执行任务的 Agent 都完整阅读它，也不要求你照着逐步操作。

### 2. 创建一个 Skill

建议命名：

```text
setup-agent-agile-framework
```

使用方式：

```text
$setup-agent-agile-framework 将 Agent 轻量开发框架应用到当前项目
```

Skill 自动执行：

1. 阅读最佳实践设计。
2. 检查当前项目结构、`AGENTS.md` 和已有 Topic。
3. 判断是首次安装还是框架升级。
4. 自动更新项目 `AGENTS.md` 中的框架规则。
5. 迁移旧 Topic：
   - 补充 `proposal.md` YAML 状态。
   - 根据现有进度判断 `draft`、`active`、`paused` 或 `done`。
   - 将旧线性 `tasks.md` 转成依赖任务图。
6. 保留项目自身的语言、验证命令和 Git 约定。
7. 输出迁移结果和需要用户确认的问题。

以后最佳实践发生变化时，只需再次运行：

```text
$setup-agent-agile-framework 升级当前项目的框架
```

## 为什么仍然需要 `AGENTS.md`

不能只依赖 Skill。

Skill 通常只在匹配特定请求时触发，无法保证每次普通开发请求都会自动运行。例如：

```text
修复深色主题按钮颜色
```

这条请求不一定触发框架安装 Skill。

因此正确流程是：

```text
最佳实践文档
    ↓ 由 Skill 读取
安装/升级 Skill
    ↓ 自动生成或更新
项目 AGENTS.md 中的精简运行时规则
    ↓ 每次任务自动生效
Agent 自动调度 Topic 和 Task
```

`AGENTS.md` 不需要复制整份最佳实践，只保留十几条真正影响日常执行的规则。

## 用户最终体验

首次接入项目时只执行一次：

```text
$setup-agent-agile-framework 应用到当前项目
```

之后正常使用：

```text
实现阅读页前端改版
```

```text
继续
```

```text
整理 docs/ideas.md
```

用户不再手动维护框架，也不需要理解 Topic 生命周期。

## 不建议的方案

不建议创建一个要求每次开发都显式调用的 `$agent-agile-framework` Skill。

原因是：

- 用户仍然需要记住调用 Skill。
- 普通开发请求可能不会触发它。
- Skill 内容过长会反复占用上下文。
- 项目特有规则无法只存放在全局 Skill 中。

最合理的设计是：

> **Skill 负责安装和升级框架，`AGENTS.md` 负责让框架在项目中持续运行。**

下一步应当设计并创建 `setup-agent-agile-framework` Skill，同时把当前最佳实践文档调整为该 Skill 的框架规范来源。
````
