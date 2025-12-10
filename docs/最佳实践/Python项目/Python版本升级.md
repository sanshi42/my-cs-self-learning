# Python版本升级

## 概述

记录将 Python 的版本从 3.11 升级到 3.12 的过程，使用的包管理器是 uv。

## 步骤

1. 升级 uv 自身

   ```bash
   uv self update
   ```

2. 修改 pyproject.toml

   ```toml
   [project]
   requires-python = ">=3.12,<3.13"
   ```

3. 安装 python 3.12

   ```bash
   uv python install 3.12 --default
   ```

4. 升级依赖

   ```bash
   uv sync --upgrade
   ```

   当遇到不兼容的包时，暂时在pyproject.toml上删除这些依赖项，然后再重新运行以上命令直至成功。

5. 重新安装之前删除的依赖项目

   ```bash
   uv add xxx
   ```

6. 同步更改

   ```bash
   uv sync
   uv lock
   ```

   
