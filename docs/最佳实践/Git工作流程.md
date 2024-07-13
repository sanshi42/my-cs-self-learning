# Git 工作流程

> Git 提交信息的撰写规范请参照[代码风格](代码风格.md)

## 一、新建并切换到该分支

```bash
git checkout -b iss53  # 会将未暂存的内容也迁移到新的分支
```

## 二、合并特定分支的内容

```bash
git checkout master  # 切换到主分支或者想要合并之前的修改的分支
git merge iss53
```

## 三、删除分支

```bash
git branch -d iss53  # 删除过时的分支名
```

## 四、解决合并冲突

```bash
git mergetool  # 使用图形化工具进行合并
```



