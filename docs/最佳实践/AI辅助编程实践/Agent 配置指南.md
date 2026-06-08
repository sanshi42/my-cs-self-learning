# Agent 配置指南

## 概述

为了方便快速迁移环境，就算我使用了新的电脑也能很快地配置好 Agent 环境。

## 基础工具

- Claude Code：官网下载
- Codex：官网下载
- CC Switch（可选）：[官网下载](https://github.com/farion1231/cc-switch)

## 主要配置

### skills：

- 基础：
  - skilll creator：官方

  - find skills（可选）：vercel-labs/skills

- 常用：

  - [andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)：CC 使用官方github仓库，Codex 等需要使用 skill creator 参照实现
  - [mattpocock/skills](https://github.com/mattpocock/skills)：比较重要的是有
    - setup-matt-pocock-skills：初始设置环境
    - grill-me：日常命令使用来明确需求
    - grill-with-docs：grill-me 在特定项目中的升级版
    - diagnose：修复 bug 用
    - zoom-out：review 代码用
    - handoff：换一个会话窗口继续任务
    - improve-codebase-architecture：用来尝试升级整体的代码架构

### Plugins:

- 基础
  - [superpowers](https://github.com/obra/superpowers)：官方插件下载

### 全局 AGENTS 配置：

以 Codex 为例（位于 `~/.codex/AGENTS.md`），主要分为沟通方式、工作约定、Commit 规范、Branch 规范等，示例如下：

```markdown
# 全局 Codex 指令

## 沟通方式

- 默认使用中文回答，除非用户明确要求英文。
- 代码、命名、命令、配置项和技术术语可以保持英文，避免引入歧义。
- 代码注释、文档说明、提交信息等面向人类阅读的内容，优先遵循项目已有风格；如果项目没有明确风格，默认使用中文。
- 对非平凡修改，先说明打算怎么改，再落地改动；改完后补一句“为什么这样改”。
- 避免只给结论不解释原因；但也不要过度展开无关背景。

## 工作约定

- 优先采用“边做边说明”的协作方式：复杂任务分阶段说明思路，简单任务直接完成并总结。
- 修改前先观察现有代码结构和项目约定，不要一上来就重构。
- 优先做小而聚焦的修改，避免扩大任务范围。
- 修改完成后，总结实际的改动、验证方式和仍需注意的问题。
- 如果改动范围较大，或者涉及用户可能不熟悉的语法、框架机制、设计模式，需要主动提供“代码导读”选项。
- 代码导读应优先解释关键模块、关键函数、调用链和不常见语法，方便 Python 开发工程师进行人工 review。
- 遇到缺少本机工具、CLI、依赖或系统能力时，不要直接退化到低质量 workaround；先说明缺少什么、它能解决什么、是否建议安装。
- 如果安装合理，且需要系统权限、联网下载或修改全局环境，先询问用户是否允许安装，并给出具体安装命令；只有安装不合适或用户拒绝时，才采用替代方案。

## Commit 规范

- 除非用户明确要求，否则不要主动执行 `git commit`、`git push` 或修改 Git 历史。
- 如果用户需要提交信息，默认使用中文 Conventional Commits 格式：`type(scope): 中文描述`。
- 常用类型包括：`build`、`feat`、`fix`、`docs`、`refactor`、`test`、`chore`、 `ci`、`perf`、`style`。
- `scope` 使用能表达修改范围的短标签，例如 `AI`、`docs`、`tests`、`backend`。
- 示例：`feat(AI): 增加 skill 加载能力`。
- 如果用户没有特别指定提交信息，优先生成一条简短、准确的中文 commit message。

## Branch 规范

- 新建个人工作分支时，默认采用带前缀的 Conventional Branch 格式：`<成员缩写>/<目标分支>/<type>/<description>`。
- 对当前用户，成员缩写固定使用 `hl`。
- 目标分支通常使用 `master`；如果明确要合并到其它目标分支，则把第二段替换为真实目标分支名。
- 后半部分遵循 Conventional Branch 风格，`type` 要匹配实际改动类型，例如 `feat`、`fix`、`bugfix`、`hotfix`、`chore`、`docs`、`refactor`、`test`。
- 示例：`hl/master/bugfix/fix-some-bugs`。
- 不要把示例中的 `bugfix` 当作默认类型；创建分支前应根据本次修改内容选择合适的 `type`。
```

### 额外参考：

- 01MVP：https://01mvp.com/docs/resources/skills/quickstart
