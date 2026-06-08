#  AI Web MVP 的最简单复现步骤

## 目标

做一个最小版本的“AI 行程规划网页”：

1. 用户打开网页
2. 输入目的地、天数、预算、偏好
3. 后端先返回一份假数据 itinerary
4. 页面把结果显示出来
5. 这就算第一个 MVP 跑通

先**不要**做订票、支付、日历同步、多 agent。

------

## 第 0 步：把项目代码下到本地

先进入你平时放项目的目录：

```bash
cd ~/workspace
```

把 FastAPI 官方全栈模板克隆下来。官方 README 明确说可以直接 fork 或 clone 使用；如果你想换成自己的项目名，也可以在 clone 时直接改目录名。([GitHub](https://github.com/fastapi/full-stack-fastapi-template))

```bash
git clone https://github.com/fastapi/full-stack-fastapi-template.git ai-trip-mvp
cd ai-trip-mvp
```

到这里，你已经完成了“项目初始化”的第一步。

------

## 第 1 步：先做一次 Git 备份点

Codex 官方 quickstart 明确建议：开始让 AI 改代码前，先做 Git checkpoint，方便回滚。([OpenAI开发者](https://developers.openai.com/codex/quickstart/))

所以你先执行：

```bash
# 清理 Git 历史
rm -rf .git
git init -b main
git add .
git commit -m "chore: initialize from fastapi template"
```

这一步的意义很简单：
**后面 AI 改乱了，你可以随时退回来。**

------

## 第 2 步：最小化地“改成你的项目”

先不要乱改代码。
你先只加 3 个东西：

- `AGENTS.md`
- `docs/backlog.md`
- `prompts/`

执行：

```bash
mkdir -p docs
mkdir -p prompts/system
touch AGENTS.md
touch docs/backlog.md
touch prompts/system/itinerary_planner.md
```

现在你的项目根目录多了这几个东西，这一步就是“把普通 FastAPI 模板改成适合 AI 协作的项目”。

------

## 第 3 步：写一个最小版 `AGENTS.md`

`AGENTS.md` 的作用是：给 Codex / OpenCode 看这个仓库的规则。
Codex 会在开始工作前读取 `AGENTS.md`；OpenCode 也支持项目根目录的 `AGENTS.md`，还可以用 `/init` 自动生成。([OpenAI开发者](https://developers.openai.com/codex/guides/agents-md/))

直接把下面内容复制进 `AGENTS.md`：

```md
# AI Trip MVP Project

这是一个最小可行性产品（MVP）项目。

## 当前目标
做一个 AI 行程规划网页：
- 用户输入目的地、天数、预算、偏好
- 后端返回 itinerary 草案
- 前端展示结果

## 当前阶段
当前只做 mock 版本：
- 先不要接真实 LLM
- 先不要做支付、订票、日历同步、多 agent

## 技术栈
- Backend: FastAPI
- Frontend: React
- Database: PostgreSQL
- Tests: pytest

## 修改规则
- 不要大规模重构
- 每次只改完成当前任务所需的最少文件
- 不要在 router 中直接写复杂 AI 逻辑
- 和 LLM 相关的 prompt 统一放在 /prompts
- 如果改了接口，补充最基本的测试

## 每次完成任务后，必须输出
1. 改了哪些文件
2. 如何运行/验证
3. 已知限制
```

这就够了。
不用追求完美，先有就行。

------

## 第 4 步：写一个最小版 backlog

backlog 就是**待办任务清单**。
你现在只写最小的 4 条，不要一开始写很多。

把下面内容复制进 `docs/backlog.md`：

```md
# Backlog

## P0
- [ ] 跑通原始模板
- [ ] 新增后端 /api/v1/trip/mock-plan 接口
- [ ] 新增一个最简单的前端页面，用表单提交目的地/天数/预算
- [ ] 页面显示 mock itinerary 返回结果
```

这样你后面就不会对 AI 说“继续完善项目”，而是只说其中一条。

------

## 第 5 步：先把模板原样跑起来

FastAPI 官方模板 README 说明它可以直接 clone 使用；模板使用 Docker Compose 做开发和生产。后端 README 也说明依赖用 `uv` 管理，测试脚本在 `./scripts/test.sh`。前端 README 里给出的一个最简单启动栈命令是 `docker compose up -d --wait backend`。([GitHub](https://github.com/fastapi/full-stack-fastapi-template))

你先执行：

```bash
docker compose up -d --wait
```

如果这个命令失败，再试：

```bash
docker compose up -d
```

然后看容器状态：

```bash
docker compose ps
```

如果你只想先确认后端能起来，可以执行：

```bash
docker compose up -d --wait backend
```

这一步的目标不是理解所有 Docker 细节，而是：
**先确认模板本身能在你机器上跑。**

------

## 第 6 步：修改环境变量里的关键密码

FastAPI 官方模板 README 明确提醒，至少要改这些值：

- `SECRET_KEY`
- `FIRST_SUPERUSER_PASSWORD`
- `POSTGRES_PASSWORD`

README 还给了生成随机密钥的命令。([GitHub](https://github.com/fastapi/full-stack-fastapi-template))

先生成一个随机字符串：

```bash
python -c "import secrets; print(secrets.token_urlsafe(32))"
```

把输出复制下来。

然后在项目里找到 `.env` 文件，把下面几个值改掉：

- `SECRET_KEY=...`
- `FIRST_SUPERUSER_PASSWORD=...`
- `POSTGRES_PASSWORD=...`

改完后，如果容器已经启动，重启一下：

```bash
docker compose down
docker compose up -d --wait
```

你不用一次把所有环境变量都搞懂。
先把这三个最重要的改掉就够。

------

## 第 7 步：再做一次 Git 提交

```bash
git add .
git commit -m "chore: add AGENTS and MVP planning files"
```

现在你的仓库已经从“官方模板”变成了“你自己的 AI MVP 项目底座”。

------

# 接下来开始用 Codex

## 第 8 步：安装 Codex CLI

Codex 官方 quickstart 给出的安装方式是：

```bash
npm install -g @openai/codex
```

或者用 Homebrew：

```bash
brew install codex
```

安装后，在项目目录运行 `codex`，它会让你登录；Codex 在 Agent mode 下默认可以读取文件、运行命令、修改当前项目目录中的代码。([OpenAI开发者](https://developers.openai.com/codex/quickstart/))

所以你现在执行：

```bash
npm install -g @openai/codex
cd ~/workspace/ai-trip-mvp
codex
```

------

## 第 9 步：给 Codex 的第一条任务，不要太大

进入 Codex 后，不要说：

> 帮我做一个 AI 私人助理

你要说这句：

```text
请先阅读当前仓库和 AGENTS.md。
然后只完成一件事：

在后端新增一个 mock 行程规划接口：
- 路径：/api/v1/trip/mock-plan
- 输入字段：destination, days, budget, preferences
- 暂时不要接真实 LLM
- 返回固定的 3 天 itinerary 假数据
- 补最基本的 pytest
- 最后告诉我：
  1. 改了哪些文件
  2. 如何验证
  3. 已知限制
```

这是非常关键的一步。
你要训练自己以后都这样给 AI 下任务：**小、清楚、可验证。**

------

## 第 10 步：让 Codex 改完后，你自己做验证

假设 Codex 改完了，你不要马上继续让它做第二件事。

你先做这几步：

```bash
git diff
```

看看它改了哪些文件。

然后跑测试。后端 README 说明了后端测试命令是：

```bash
bash ./scripts/test.sh
```

或者在 `backend/` 下使用 `uv sync` 安装依赖、激活虚拟环境。([GitHub](https://github.com/fastapi/full-stack-fastapi-template/blob/master/backend/README.md))

所以你可以先试：

```bash
bash ./scripts/test.sh
```

如果你打算在本地 Python 环境里跑：

```bash
cd backend
uv sync
source .venv/bin/activate
```

然后再根据项目里的 pytest 配置运行测试。后端 README 明确给出了 `uv sync` 和激活虚拟环境的方式。([GitHub](https://github.com/fastapi/full-stack-fastapi-template/blob/master/backend/README.md))

如果测试通过，再提交：

```bash
git add .
git commit -m "feat: add mock trip planning api"
```

------

# 如果你想用 OpenCode

## 第 11 步：安装 OpenCode

OpenCode 官方文档给出的安装方式有两种最简单的：

```bash
curl -fsSL https://opencode.ai/install | bash
```

或者：

```bash
npm install -g opencode-ai
```

OpenCode 默认直接启动 TUI，命令就是 `opencode`。它也支持 `opencode [project]` 在指定目录打开。([OpenCode](https://opencode.ai/docs/))

所以你执行：

```bash
npm install -g opencode-ai
cd ~/workspace/ai-trip-mvp
opencode
```

------

## 第 12 步：让 OpenCode 认识你的项目

OpenCode 官方 rules 文档说明：你可以在项目根目录放 `AGENTS.md`，也可以直接在 OpenCode 里运行 `/init` 自动生成或补充 `AGENTS.md`，并且建议把这个文件提交到 Git。([OpenCode](https://opencode.ai/docs/rules/))

如果你已经自己写了 `AGENTS.md`，可以直接用。
如果你想让它再自动补一版，就在 OpenCode 里输入：

```text
/init
```

然后检查生成内容，不满意就改。

------

## 第 13 步：给 OpenCode 的第一条任务

如果你已经用 Codex 做完了后端 mock 接口，那 OpenCode 最适合接着做前端。

给它这句话：

```text
请阅读 AGENTS.md 和 docs/backlog.md。
现在只完成这一个任务：

在前端新增一个最简单的页面：
- 页面上有 4 个输入项：destination, days, budget, preferences
- 点击提交按钮后，请求后端 /api/v1/trip/mock-plan
- 把返回的 itinerary 显示在页面上
- 不要美化，不要做复杂组件
- 最后告诉我：
  1. 改了哪些文件
  2. 如何验证
  3. 已知限制
```

这样你就形成了一个很稳定的分工：

- **Codex**：先做后端接口、测试、设计性更强的任务
- **OpenCode**：再做前端页面、接线、连续小迭代

这不是硬规定，但对你现在最稳。

------

# 以后每次做类似项目，就按这个顺序

## 最小固定流程

### 1

克隆成熟模板

```bash
git clone https://github.com/fastapi/full-stack-fastapi-template.git 项目名
cd 项目名
```

模板官方 README 明确支持直接 clone 使用。([GitHub](https://github.com/fastapi/full-stack-fastapi-template))

### 2

立刻加 3 个东西

```bash
mkdir -p docs prompts/system
touch AGENTS.md docs/backlog.md prompts/system/main.md
```

### 3

写最小 `AGENTS.md`

只写：

- 项目目标
- 当前范围
- 修改规则
- 完成任务后怎么汇报

### 4

写最小 `backlog.md`

只写 3 到 5 条任务，不要写太多。

### 5

先跑通模板

```bash
docker compose up -d --wait
```

### 6

改掉最关键的 `.env` 密钥
至少改：

- `SECRET_KEY`
- `FIRST_SUPERUSER_PASSWORD`
- `POSTGRES_PASSWORD` ([GitHub](https://github.com/fastapi/full-stack-fastapi-template))

### 7

做 Git checkpoint

```bash
git add .
git commit -m "chore: project initialized"
```

### 8

打开 Codex

```bash
codex
```

Codex CLI 官方安装方式与“在当前目录工作”的方式就是这样。([OpenAI开发者](https://developers.openai.com/codex/quickstart/))

### 9

只让它做一个小任务
例如只做一个 mock API。

### 10

你自己看 diff、跑测试、再提交

### 11

打开 OpenCode

```bash
opencode
```

OpenCode CLI 默认就是这样启动 TUI。([OpenCode](https://opencode.ai/docs/cli/))

### 12

只让它接着做下一个小任务
例如前端表单页。

------

# 你以后最该死记硬背的 6 句话

1. **先 clone 模板，不要从零搭架构。**
2. **先加 AGENTS.md、backlog、prompts，再让 AI 开工。**
3. **先跑通模板，再改业务。**
4. **先做 mock API，再接真实 LLM。**
5. **一次只给 AI 一个小任务。**
6. **每次都先 commit，再让 AI 改。**

------

# 给未来的你的一份“极简照抄版”

以后开新项目，直接照这个执行：

```bash
cd ~/workspace
git clone https://github.com/fastapi/full-stack-fastapi-template.git my-mvp
cd my-mvp

mkdir -p docs prompts/system
touch AGENTS.md docs/backlog.md prompts/system/main.md

git add .
git commit -m "chore: initialize from fastapi template"

docker compose up -d --wait

# 修改 .env 中的 SECRET_KEY / FIRST_SUPERUSER_PASSWORD / POSTGRES_PASSWORD

git add .
git commit -m "chore: configure project secrets"

codex
```

进入 Codex 后发：

```text
请阅读当前仓库和 AGENTS.md。
只完成一件事：
新增一个 mock API，并补最基本测试。
完成后说明改了哪些文件、如何验证、已知限制。
```

做完后：

```bash
git diff
bash ./scripts/test.sh
git add .
git commit -m "feat: add first mock api"
opencode
```

进入 OpenCode 后发：

```text
请阅读 AGENTS.md 和 docs/backlog.md。
只完成一件事：
做一个最简单的前端页面，调用 mock API 并显示结果。
完成后说明改了哪些文件、如何验证、已知限制。
```

------

