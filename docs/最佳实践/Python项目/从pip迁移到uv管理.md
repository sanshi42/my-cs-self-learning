# 从pip迁移到uv管理

## 概述

制定一个从pip迁移到uv管理的最佳路径。

## 步骤

1. （可选但建议）把 Python 版本固定为 3.11：

```bash
uv python pin 3.11
```

2. 进入你的项目目录，初始化 uv 项目（生成 `pyproject.toml`）：

```bash
uv init
```

3. 导入你现有的 requirements

```bash
uv add -r requirements.txt
```

4. 生成/更新 lockfile 并在本地创建环境：

```
uv lock        #（可选，uv add 会自动生成 lock，但可以手动运行）
uv sync        # 在项目本地创建 .venv 并安装依赖
```
