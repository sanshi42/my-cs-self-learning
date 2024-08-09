# Python 性能分析

## 简介

- 先修要求：
- 难度系数：🌟🌟🌟
- 预计学时：

目前主要使用的是 Python 的性能分析工具 Viztracer。可以考虑编写一个测试，进行性能的基准测试。

## 资源

- 网站：[Viztracer 的 github 网站](https://github.com/gaogaotiantian/viztracer/tree/master)
- 视频：[VizTracer 作者的讲解](https://www.bilibili.com/video/BV1d34y1C78W?p=1&vd_source=1bcb5908804c91c0b3861acbd9aab0f8)
- 教材：《Python 高性能编程（第 2 版）》
- 作业：
- 补充：

## 附注

以Python模块 julia.py 中的 `calc_pure_python(desired_width, max_iterations)` 函数为例子。

- 测量时间

  1. 使用 print 语句以及相应的装饰器。
  2. 使用 **timeit** 模块（会暂时禁用垃圾收集器）。

  ```bash
  # 1.命令行运行 timeit，由于timeit的默认设置更加适合简短的代码，因此这里最好指定循环测试（-n）和重复次数（-r），同时使用（-v）显示每次重复中所有循环的累计时间，使用（-s）导入模块。
  python -m timeit -n 5 -r 2 -s "import julia" -v "julia.calc_pure_python(desired_width=1000, max_iterations=300)"
  # 2.IPython 中的使用方法
  import julia
  %timeit julia.calc_pure_python(desired_width=1000,max_iterations=300)
  ```

  3. 使用UNIX命令/usr/bin/time （包括启动Python解释器的时间）

     ```bash
     # 使用 -p 或者 --verbose 获得更加详细的信息
     /usr/bin/time --verbose python julia.py
     ```

  4. 使用 cProfile 模块：使用cProfile很难搞明白每行代码的情况，因为它只提供了有关函数调用的剖析信息，而没有提供函数中各行代码的剖析信息。

     ```bash
     # -s cumulative 根据占用的累计时间对函数进行排序，并保存到profile.stats中
     python -m cProfile -s cumulative -o profile.stats julia.py
     # 使用snakeviz可视化刚生成的输出文件
     pip install snakeviz
     snakevize profile.stats
     ```

  5. 使用**line_profiler**逐行剖析：找出Python代码中**CPU密集型问题最强大的工具**。剖析会降低运行速度，但专注于性能改进空间最大的代码行自有其价值。

     ```bash
     pip install line_profiler
     # 装饰器@profile标记待剖析函数，使用脚本kernprof记录选定函数中每行代码的CPU时间和其他统计数据，其中-l表示逐行，-v表示提供详细输出，否则输出为一个文件。
     python -m kernprof -l -v julia.py
     # 或者
     kernprof -l -v julia.py
     ```

- 内存占用分析

  1. memory_profiler：逐行分析内存占用情况，速度较慢。

     ```bash
     pip install memory_profiler psutil
     # 与line_profiler 相同使用装饰器@profile，进程大小超过100MB时启动调试器pdb
     python -m memory_profiller --pdb-mmem=100 julia.py # 时间非常慢
     # 可视化方法
     pip install matplotlib
     mprof run julia.py # 生成一个统计文件，如mprofile_20240718085044.dat
     mprof plot mprofile_20240718085044.dat # 可视化该文件
     # 可以使用上下文管理器来添加标签，在代码中增加如下内容
     with profile.timestamp("label_name"):
         # 代码片段
     ```

  2. IPython 中使用%memit

  
