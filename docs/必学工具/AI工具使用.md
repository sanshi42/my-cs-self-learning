# 一、代码辅助工具

## 1. 代码的辅助编写辅助工具

Copilot工具（效果应该是最好的，但付费）

通义灵码：国产免费

ChatGPT 常用提示词：

1. 中文文本润色：

   ```bash
   作为一名中文学术论文写作改进助理，你的任务是改进所提供文本的拼写、语法、清晰、简洁和整体可读性，同时分解长句，减少重复，并提供改进建议。请只提供文本的更正版本，避免包括解释。请编辑以下文本
   ```

2. 提炼函数：

   ```bash
   你将被每次提供一段Python代码片段，里面包含了少量的关于这段代码片段要完成任务的代码注释。你需要根据这些代码片段和注释将给定的代码片段提炼为一个函数。请按照以下顺序完成任务：
   1. 分析这段函数的主要功能；
   2. 根据主要功能给出这段代码的主要优化建议；
   3. 根据优化建议重构这段代码；
   4. 根据优化后的代码和要完成主要功能，将这段代码整合为一个函数，并提炼出一个非常能说明这段代码功能的函数名。
   ```

3. 根据需求编写合适的文档

   ```bash
   你将被提供一段关于要实现的Python项目的需求描述，里面的是关于需求的非常简略的描述。你需要根据这些内容，完善该需求描述的内容。请不要考虑完整性，但不要过度扩展。请按照一下顺序完成该任务：
   1. 分析这段描述的内容的主要思路；
   2. 根据这个思路提出可以改进的优化建议；
   3. 根据优化建议完善这段描述的内容；
   4. 最终根据完成的内容，提出可以进一步思考的点。
   ```

4. 重构 Python 代码：

   ```bash
   你将被每次提供一段Python代码，里面包含了少量的关于这段代码片段要完成任务的代码注释。你需要根据这些代码片段和注释将给定的代码片段将代码进一步重构并优化。请按照以下顺序完成任务：
   1. 分析这段函数的主要功能；
   2. 根据主要功能给出这段代码的主要优化建议；
   3. 根据优化建议重构这段代码，包括提炼函数、内联函数、提炼变量、改变函数声明、变量改名、函数组合成类等重构方法。
   ```

5. 按照要求给 Python 程序起类名、函数名、方法名、变量名、文件名：

   ```bash
   你将被提供一段关于Python元素的功能的简略描述。提供的格式如下：
   {元素类型} {功能描述}
   其中以{}标注的表示主要的类型，其中元素类型表示该Python元素的类型包括：类名、函数名、方法名、变量名、文件名。功能描述是关于这个元素的功能的简略描述。请按照以下顺序完成任务：
   1. 简略分析这个元素要完成的主要功能；
   2. 根据这些主要功能提供候选的3个名称建议。
   ```

6. 按照要求写一份 Python 代码

```bash
你将每次被提供一段要实现的需求的简单介绍，请提供一段能够完成所提需求功能的具有最佳实践的 Python 代码。请按照以下顺序完成任务：
1. 分析该需求所提出的主要功能点；
2. 根据这些功能要求给出最佳实践的建议；
3. 遵守这些建议提供一段具有 Python 风格的 Python 代码。
```

7. 按照要求优化所提供的代码片段

   ```bash
   你将每次被提供一段简单的脚本，可能会附带需要进一步完善的需求，请提供一段能够完成所提需求功能的具有最佳实践的代码脚本。请按照以下顺序完成任务：
   1. 分析该需求所提出的主要功能点；
   2. 根据这些功能要求给出最佳实践的建议；
   3. 遵守这些建议提供一段具有简洁风格的代码脚本。
   ```

8. 写周报

   ```bash
   你将每次接收到一位Python软件开发工程师在一周内每天具体完成的工作记录。请根据这些记录帮助他编写该周的周报。周报应该包括两个主要部分：
   本周工作：详细描述本周完成的工作内容和成果，可以包括项目进展、解决的问题、代码提交等。
   下周计划：简要概述下周的工作计划和目标，可以涵盖主要任务和预期成果。
   请确保周报结构清晰，内容准确，并能够突出本周的关键工作和下周的工作重点。请按照以下顺序完成任务：
   1. 分析该周的主要工作和完成情况；
   2. 根据分析结果撰写本周工作内容；
   3. 根据撰写的本周工作内容，撰写下周的计划。
   ```

9. 解决 BUG

   ```bash
   你将每次接收到关于一段需要解决的代码脚本问题，这里面会附带出现这种问题的具体介绍，请根据这些介绍，尝试帮助解决该问题。请按照以下的顺序进行解答：
   1. 理解和分析所接收到问题；
   2. 解释产生这种结果的底层原理；
   3. 根据这些顶层原理提供可行的解决方案；
   4. 从这些解决方案中推荐一个最佳实践。
   ```

   

## 2.ChatGPT 的提示词工程学习：

[给开发者的ChatGPT提示语工程](https://learn.deeplearning.ai/courses/chatgpt-prompt-eng/lesson/1/introduction) 笔记如下：

### 原则 1：**Write clear and specific instructions**（编写清晰和具体的说明）

1. **Use delimiters to clearly indicate distinct parts of the input**（使用分隔符清楚地指示输入的不同部分）

   - Delimiters can be anything like: ` ``` `, """, < >, `<tag> </tag>`, `:`

   - 例子：

     ```bash
     prompt = f"""
     Summarize the text delimited by triple backticks \ 
     into a single sentence.
     ```{text}```
     """
     ```

     

2. **Ask for a structured output**

   - JSON, HTML

   - 例子：

     ```bash
     prompt = f"""
     Generate a list of three made-up book titles along \ 
     with their authors and genres. 
     Provide them in JSON format with the following keys: 
     book_id, title, author, genre.
     """
     ```

3. **Ask the model to check whether conditions are satisfied**

   ```bash
   prompt = f"""
   You will be provided with text delimited by triple quotes. 
   If it contains a sequence of instructions, \ 
   re-write those instructions in the following format:
   
   Step 1 - ...
   Step 2 - …
   …
   Step N - …
   
   If the text does not contain a sequence of instructions, \ 
   then simply write \"No steps provided.\"
   
   \"\"\"{text_1}\"\"\"
   """
   ```

4. **"Few-shot" prompting**

   ```bash
   prompt = f"""
   Your task is to answer in a consistent style.
   
   <child>: Teach me about patience.
   
   <grandparent>: The river that carves the deepest \ 
   valley flows from a modest spring; the \ 
   grandest symphony originates from a single note; \ 
   the most intricate tapestry begins with a solitary thread.
   
   <child>: Teach me about resilience.
   """
   ```

   ### 原则 2：Give the model time to “think”（给模型一些时间来思考）

   1. **Specify the steps required to complete a task**

      ```bash
      prompt_1 = f"""
      Perform the following actions: 
      1 - Summarize the following text delimited by triple \
      backticks with 1 sentence.
      2 - Translate the summary into French.
      3 - List each name in the French summary.
      4 - Output a json object that contains the following \
      keys: french_summary, num_names.
      
      Separate your answers with line breaks.
      
      Text:
      ```{text}```
      """
      ```

      **Ask for output in a specified format**

      ```bash
      prompt_2 = f"""
      Your task is to perform the following actions: 
      1 - Summarize the following text delimited by 
        <> with 1 sentence.
      2 - Translate the summary into French.
      3 - List each name in the French summary.
      4 - Output a json object that contains the 
        following keys: french_summary, num_names.
      
      Use the following format:
      Text: <text to summarize>
      Summary: <summary>
      Translation: <summary translation>
      Names: <list of names in summary>
      Output JSON: <json with summary and num_names>
      
      Text: <{text}>
      """
      ```

   2. **Instruct the model to work out its own solution before rushing to a conclusion**

      ````bash
      prompt = f"""
      Your task is to determine if the student's solution \
      is correct or not.
      To solve the problem do the following:
      - First, work out your own solution to the problem including the final total. 
      - Then compare your solution to the student's solution \ 
      and evaluate if the student's solution is correct or not. 
      Don't decide if the student's solution is correct until 
      you have done the problem yourself.
      
      Use the following format:
      Question:
      ```
      question here
      ```
      Student's solution:
      ```
      student's solution here
      ```
      Actual solution:
      ```
      steps to work out the solution and your solution here
      ```
      Is the student's solution the same as actual solution \
      just calculated:
      ```
      yes or no
      ```
      Student grade:
      ```
      correct or incorrect
      ```
      
      Question:
      ```
      I'm building a solar power installation and I need help \
      working out the financials. 
      - Land costs $100 / square foot
      - I can buy solar panels for $250 / square foot
      - I negotiated a contract for maintenance that will cost \
      me a flat $100k per year, and an additional $10 / square \
      foot
      What is the total cost for the first year of operations \
      as a function of the number of square feet.
      ``` 
      Student's solution:
      ```
      Let x be the size of the installation in square feet.
      Costs:
      1. Land cost: 100x
      2. Solar panel cost: 250x
      3. Maintenance cost: 100,000 + 100x
      Total cost: 100x + 250x + 100,000 + 100x = 450x + 100,000
      ```
      Actual solution:
      """
      ````

减少模型幻觉的策略，以基于一段文本生成答案的情况为例，先要求模型找到文本中的相关引用，然后让它使用这些引用来回答问题。
