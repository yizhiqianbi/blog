# 博客美术风格规范

后续论文精读和综述博客优先采用 `posts/innerscene-paper-review.html` 这套美术风格。

## 核心气质

- Editorial paper / research zine：像一篇排版好的研究笔记，不像产品落地页。
- 暖纸张底色、深墨文字、赤褐强调色，辅以低饱和蓝/绿/金。
- 大标题有杂志感，正文保持中文长文阅读友好。
- 页面靠线、留白、字体层级组织信息，不靠花哨渐变和装饰图形。

## 视觉基准

- 背景：`#f4f0e8`，次级纸张块 `#ebe4d4`。
- 主文字：`#1a1614`。
- 强调色：`#c8421f`；只用于关键结论、章节强调、best row、marker。
- 辅助色：`#2d4a6e`、`#5a6b3a`、`#b8924a`。
- 字体：
  - 英文大标题：Fraunces。
  - 中文正文：Noto Serif SC。
  - UI、表格、短标签：Noto Sans SC / JetBrains Mono。
- 边框：用 1px 细线和 double border，避免厚重卡片。

## 文章结构

每篇文章默认使用下面的信息层级：

1. Masthead：返回 Paper Reading、年份/类型、超大标题、byline、摘要、tags。
2. TLDR 深色块：用 Problem / Method / Result / Cost 写清楚核心。
3. 正文章节：`§ 1`、`§ 2` 这种编号，标题里允许一个 italic emphasis。
4. Pullquote：只放真正的核心判断。
5. Insight box：专门写作者视角、机制解释、实现洞察。
6. Tables：实验对比、方法对比、复现清单优先用表格。
7. Formula / Algorithm：公式块和伪代码块要能横向滚动，适配手机。
8. Footer：返回主页、文章类型、日期。

## 写作规则

- 删除口水话、过程话、提醒式废话。
- 多写“为什么有效 / 代价是什么 / 如何实现 / 怎么复现”。
- 每个关键方法点尽量按：旧瓶颈 -> 改法 -> 机制 -> 代价 -> 可验证实验。
- 综述文章要有 taxonomy、代表方法表、设计空间、代码实现视角、open problem。
- 论文精读文章要保留公式、算法、实验表、复现坑点，不只写摘要。

## 前端约束

- 保持单文件静态 HTML，除字体和 MathJax 外不依赖构建工具。
- 每篇文章必须有 `<meta name="viewport" content="width=device-width, initial-scale=1">`。
- 宽表格、公式块、代码块在移动端必须容器内滚动，不能撑开 body。
- 首页只加一行入口，长内容留在 `posts/`。
- 图片放到 `assets/`，文章用相对路径引用，避免外链失效。

