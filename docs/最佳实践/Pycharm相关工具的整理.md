# Pycharm 相关工具的整理

## Python 代码格式化工具——Ruff

> 由于blue 暂时没有维护了，并且不支持 Python3.11 的部分语法，而black不支持使用字符串的单引号表示方式，故改用 Ruff

### 安装 `Ruff`

```
# 推荐使用pipx全局安装
pipx install ruff
# 也可以在虚拟环境中安装
pip install ruff
```

### 配置 `Ruff`：

在 PyCharm 中，配置 `Ruff` 作为代码格式化工具：

1. **打开 PyCharm 设置**：在 PyCharm 中，进入 `File` -> `Settings`

2. **找到 External Tools**：导航到 `Tools` -> `External Tools`。

3. **添加 `Ruff`**（具体如下图）：

   - 点击 `+` 添加一个新的外部工具。
   - **Name**: `RuffFormat`
   - **Program**: 输入 `ruff` 可执行文件的路径（通常为 `ruff`，如果未识别，手动指定路径）。
   - **Arguments**: 输入 `format $FilePathRelativeToProjectRoot$`
   - **Working Directory**: 选择 `$ProjectFileDir$`
   - **Output Filters**: 使用默认值。

4. **（推荐）设置快捷键**：你可以通过 `Keymap` 中为 `RuffFormat` 设置快捷键，以便快速格式化代码，建议配置为`Shift + Alt + L`。

5. （推荐）配置使用单引号字符串格式（其他配置类似）

   配置本地 `pyproject.toml`，加上如下内容：

   ```toml
   [tool.ruff.format]
   quote-style = "single"
   ```

   

## Python 包导入排序工具——isort

### 安装 `isort`：

首先，安装 `isort`。

```
pip install isort
```

### 配置 `isort`：

在 PyCharm 中，可以通过以下步骤配置 `isort`。

1. **打开 PyCharm 设置**：和配置 `Blue` 相同，进入 `File` -> `Settings` -> `Tools` -> `External Tools`。
2. **添加 `isort`**（具体配置如参考下图）：
   - 点击 `+`。
   - **Name**: `isort`
   - **Program**: 输入 `isort`（可执行文件的路径，通常为 `isort`）。
   - **Arguments**: 使用 `$FilePathRelativeToProjectRoot$`。
   - **Working Directory**: 选择 `$ProjectFileDir$`。
   - **Output Filters**: 保持默认。
3. **设置快捷键**：同样在 `Keymap` 中为 `isort` 设置快捷键，以便快速格式化导入部分，参考配置为 `Shift + Alt + I`。

## 相关插件

1. Mirrod：用来进行k8s环境的流量拦截 3.55.0版本，binary版本3.67.0

2. ideal0

   