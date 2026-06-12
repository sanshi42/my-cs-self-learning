# Agent 编程最佳实践

## 概述

为了能够方便地在任何项目开发过程中，能够快速通过该实践直接开始编程，而不必重新探索与踩坑，记录到目前为止使用 Agent 辅助编程的最佳实践方案。

## 一、Python 编程

> 以 Codex 为例子，其他工具类似。

### 0、 Agent 环境

参照  [Agent 配置指南.md](Agent 配置指南.md) 配置好环境

### 1、Python 工具依赖

**基础工具**

- uv
- ruff
- pyrefly
- pre-commit
- pytest

**Web 服务**

- FastAPI
- Pydantic
- sqlmodel

**可观测性**

- Prometheus
  - prometheus-client
  - prometheus-fastapi-instrumentator
- Grafana

### 2、风格

| 配置        | 值                                                   | 说明                                          |
| ----------- | ---------------------------------------------------- | --------------------------------------------- |
| 行宽        | 88                                                   | 参照 Black 代码行宽使用现代项目常用的 88 字符 |
| uv.index    | https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple | 下载包的地址                                  |
| isort       | 启用                                                 | 导入排序                                      |
| pydocstyle  | google                                               | Google的文档字符串结构                        |
| quote-style | single                                               | 使用单引号                                    |

### 3、最佳实践顺序

**1. 初始化**：

如果是新项目：

```bash
uv init
```

如果是已有项目：

```bash
# 检查是否有未提交改动
git status --short
```

**2. 配置环境**

- 清理环境

  - 比如整体的语言（中英注释之类的）之类的

    ```markdown
    $grill-me 请帮我中文化当前项目的注释
    ```

**3. 敏捷开发框架**

参照： [Agent 敏捷开发框架最佳实践.md](Agent 敏捷开发框架最佳实践.md)

### 4、测试相关

暂未有最佳实践

### 5、额外补充

参考[mattpocock/skills](https://github.com/mattpocock/skills/tree/main)：

- 使用Setup Matt Pocock Skills
- （如果是已有项目，可以周期性使用）使用Improve Codebase Architecture
