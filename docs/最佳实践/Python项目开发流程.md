# Python项目开发流程

## 概述

Python 项目的开发流程也存在着最优解，为了方便使用可重复的开发流程探索，故制作这份笔记。

## 最佳实践

### 虚拟环境

推荐使用 **uv**，可选 **conda**

### 项目结构

推荐使用包含`src/`目录的结构：

```bash
my-project/
├── dist
├── LICENSE
├── pyproject.toml
├── README.md
├── src
│   └── my_package
│       ├── __init__.py
│       └── main.py
├── tests
└── uv.lock
```

### 打包与分发

参照官方 PyPA 的[“Packaging Python Projects 教程”](https://packaging.pythonlang.cn/en/latest/tutorials/packaging-projects/)

### 具体流程

1. 新建项目 my-project

   ```bash
   # 如果是已有项目，则直接在项目中运行 uv init
   # 默认安装的是系统默认的python版本，可以指定python版本
   uv init my-project --python python 3.13
   # uv init 的默认行为是：
   # 1. 创建目录 my-project/
   # 2. 进入该目录
   # 3. 创建虚拟环境 .venv，并自动选择默认的Python版本
   # 4. 生成空的pyproject.toml、main.py、.git、.gitignore、.python-version、README.md
   ```

2. 创建简单的项目

   创建源代码文件`src/`和测试目录`tests/`

   ```bash
   cd my-project/
   mkdir src/
   mkdir tests/
   
   cd src/
   mkdir my_package/
   cd my_package/
   touch __init__.py
   mv ../my_package/../../main.py .
   ```

3. 选择构建后端

   使用setuptools，编辑pyproject.toml，添加以下内容：

   ```toml
   [build-system]
   requires = ["setuptools >= 77.0.3"]
   build-backend = "setuptools.build_meta"
   ```

4. 配置元数据

   参照官方 PyPA 的[“Packaging Python Projects 教程”](https://packaging.pythonlang.cn/en/latest/tutorials/packaging-projects/)，示例如下：

   ```toml
   [project]
   name = "example_package_YOUR_USERNAME_HERE"
   version = "0.0.1"
   authors = [
     { name="Example Author", email="author@example.com" },
   ]
   description = "A small example package"
   readme = "README.md"
   requires-python = ">=3.9"
   classifiers = [
       "Programming Language :: Python :: 3",
       "Operating System :: OS Independent",
   ]
   license = "MIT"
   license-files = ["LICEN[CS]E*"]
   
   [project.urls]
   Homepage = "https://github.com/pypa/sampleproject"
   Issues = "https://github.com/pypa/sampleproject/issues"
   ```

5. 编辑 README.md

6. 创建 LICENSE

   参照https://choosealicense.com/，示例如下：

   ```bash
   Copyright (c) 2025 sanshi42
   
   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:
   
   The above copyright notice and this permission notice shall be included in all
   copies or substantial portions of the Software.
   
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   SOFTWARE.
   ```

7. 生成分发软件包

   ```bash
   uv build
   uv lock
   uv sync
   ```

   
