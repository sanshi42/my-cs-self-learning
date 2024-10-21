# Pycharm 相关工具的整理

## Python 代码格式化工具——Blue

### 安装 `Blue`：

```
pip install blue
```

### 配置 `Blue`：

在 PyCharm 中，配置 `Blue` 作为代码格式化工具：

1. **打开 PyCharm 设置**：在 PyCharm 中，进入 `File` -> `Settings`
2. **找到 External Tools**：导航到 `Tools` -> `External Tools`。
3. **添加 `Blue`**（具体如下图）：
   - 点击 `+` 添加一个新的外部工具。
   - **Name**: `Blue`
   - **Program**: 输入 `blue` 可执行文件的路径（通常为 `blue`，如果未识别，手动指定路径）。
   - **Arguments**: 输入 `$FilePathRelativeToProjectRoot$`
   - **Working Directory**: 选择 `$ProjectFileDir$`
   - **Output Filters**: 使用默认值。
4. **（可选）设置快捷键**：你可以通过 `Keymap` 中为 `Blue` 设置快捷键，以便快速格式化代码，建议配置为`Shift + Alt + L`。

![oIx6miqvyo](/home/huanglei/.config/LarkShell/sdk_storage/711701cdf2b12ecfb46930acd135c090/resources/images/oIx6miqvyo.jpg)

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

![ubdtHgZYj2](/home/huanglei/.config/LarkShell/sdk_storage/711701cdf2b12ecfb46930acd135c090/resources/images/ubdtHgZYj2.jpg)