import{_ as a,c as n,a as l,o as i}from"./app-4x2aIoqi.js";const p={};function o(r,s){return i(),n("div",null,s[0]||(s[0]=[l(`<h1 id="calc-函数" tabindex="-1"><a class="header-anchor" href="#calc-函数"><span>calc()函数</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>CSS3 的 calc() 函数允许我们在属性值中执行数学操作。例如，我们可以使用 calc() 指定一个元素宽的固定像素值为多个数值的和。</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.foo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  width: </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">calc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 50</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="_2-为什么使用-calc" tabindex="-1"><a class="header-anchor" href="#_2-为什么使用-calc"><span>2. 为什么使用 calc()</span></a></h2><h3 id="_2-1-css-预处理器-是如何处理的" tabindex="-1"><a class="header-anchor" href="#_2-1-css-预处理器-是如何处理的"><span>2.1 CSS 预处理器 是如何处理的</span></a></h3><p>使用 CSS 预处理器，比如 SASS的情况</p><div class="language-scss" data-ext="scss" data-title="scss"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.foo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    width: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 50</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">$width-one</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">$width-two</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">50</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.bar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    width: </span><span style="color:#E06C75;--shiki-dark:#E06C75;">$width-one</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> $width-two</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="_2-2-calc-函数-优势一-可以混合计算绝对单位" tabindex="-1"><a class="header-anchor" href="#_2-2-calc-函数-优势一-可以混合计算绝对单位"><span>2.2 calc() 函数 优势一：可以混合计算绝对单位</span></a></h3><p><code>calc()</code> 函数能够组合不同的单元。特别是，<strong>我们可以混合计算绝对单位（比如百分比与视口单元）与相对单位（比如像素）</strong>。例如，我们可以创造一个表达式，用一个百分比减掉一个像素值。</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.foo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    width: </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">calc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> -</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 50</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>本例中，<code>.foo</code> 元素总是小于它父元素宽度 50px。</p><h3 id="_2-3-函数-优势二-更清晰" tabindex="-1"><a class="header-anchor" href="#_2-3-函数-优势二-更清晰"><span>2.3 函数 优势二：更清晰</span></a></h3><p>使用 <code>calc()</code>，计算值是表达式它自己，而非表达式的结果。当使用 CSS 预处理器做数学运算时，给定值为表达式的结果。</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.foo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    width: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> + </span><span style="color:#D19A66;--shiki-dark:#D19A66;">50</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.foo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    width: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">150</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>然而，浏览器解析的 calc() 的值为真实的 calc() 表达式。</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.foo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    width: </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">calc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> -</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 50</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.foo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    width: </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">calc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> -</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 50</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>这意味着浏览器中的值可以更加灵活，能够响应视口的改变。我们能够给元素设定一个高度为视口的高度减去一个绝对值，它将随视口的改变进行调节。</p><h2 id="_3-使用-calc" tabindex="-1"><a class="header-anchor" href="#_3-使用-calc"><span>3. 使用 calc()</span></a></h2><p>calc() 函数可以用来对数值属性执行四则运算。比如，<code>&lt;length&gt;</code>，<code>&lt;frequency&gt;</code>，<code>&lt;angle&gt;</code>，<code>&lt;time&gt;</code>，<code>&lt;number&gt;</code> 或者 <code>&lt;integer&gt;</code> 数据类型。</p><p>这里有一些示例：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.foo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    width: </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">calc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">50</span><span style="color:#E06C75;--shiki-dark:#E06C75;">vmax</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 3</span><span style="color:#E06C75;--shiki-dark:#E06C75;">rem</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    padding: </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">calc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">vw</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">em</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    transform: </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">rotate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">( </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">calc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">turn</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 28</span><span style="color:#E06C75;--shiki-dark:#E06C75;">deg</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) );</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    background: </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">hsl</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">calc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> *</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 20</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">), </span><span style="color:#D19A66;--shiki-dark:#D19A66;">40</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    font-size: </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">calc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">50</span><span style="color:#E06C75;--shiki-dark:#E06C75;">vw</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> /</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="_4-clac-嵌套" tabindex="-1"><a class="header-anchor" href="#_4-clac-嵌套"><span>4. clac() 嵌套</span></a></h2><p>calc() 函数可以嵌套。在函数里边，会被视为简单的括号表达式，如下例所示。</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.foo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    width: </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">calc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">( </span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> /</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> calc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> *</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) );</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>函数的计算值如下所示：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.foo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    width: </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">calc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">( </span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> /</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> *</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) );</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="_5-什么场景使用-calc" tabindex="-1"><a class="header-anchor" href="#_5-什么场景使用-calc"><span>5. 什么场景使用 calc()</span></a></h2><h3 id="_5-1-example-1-居中元素" tabindex="-1"><a class="header-anchor" href="#_5-1-example-1-居中元素"><span>5.1 Example 1 - 居中元素</span></a></h3><p>使用 calc() 给我们提供另一个垂直居中元素的解决方案。如果我们知道元素的尺寸，一个典型的解决方案是使用负外边距移动自身距离高与宽的一半，如下所示：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.foo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    position: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">absolute</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">    top</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">50</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    left: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">50</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    marging-top: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">-150</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    margin-left: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">-150</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>使用 calc() 函数，我们仅仅通过 top 与 left 属性便能实现相同的效果：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.foo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    position: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">absolute</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">    top</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">calc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">50</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> -</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 150</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    left: </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">calc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">50</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> -</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 150</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>Flexbox 的介入，已经很少需要这种方法了。不过，一些情况下 Flexbox 不能被使用。比如，元素需要绝对定位或者固定定位，这种方法是有用的。</p><h3 id="_5-2-example-2-创建根栅格尺寸" tabindex="-1"><a class="header-anchor" href="#_5-2-example-2-创建根栅格尺寸"><span>5.2 Example 2 - 创建根栅格尺寸</span></a></h3><p>使用 rem，<code>calc()</code> 函数能够用来创建一个基于视口的栅格。我们可以设置根元素的字体大小为视口宽度的一部分。</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">html</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    font-size: </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">calc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">vw</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> /</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 30</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>现在，1rem 为视口宽度的 1/30。在页面上的任何文本，将会根据你的视口自动缩放。更进一步，相同比例的视口总会显示相同的文本数量，不管视口的真实尺寸是多少。</p><p>如果我们对非文本使用 rem 设置大小，它们同样遵守这个行为。一个 1rem 宽度的元素总是视口元素宽度的 1/30。</p><h3 id="_5-3-example-3-清晰度" tabindex="-1"><a class="header-anchor" href="#_5-3-example-3-清晰度"><span>5.3 Example 3 - 清晰度</span></a></h3><p>最后，<code>calc()</code>使计算更加清晰。如果你使一组项目为它们父元素容器宽度的 1/6，你可能这么写：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.foo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    width: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">16.666666667</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>然而，它能够更加清晰并具有可读性：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.foo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    width: </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">calc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> /</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 6</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>使用 <code>calc()</code>，我们还能做更多的事情，比如创建一个栅格系统。它是 CSS 最有用的新特性之一。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://segmentfault.com/a/1190000019392639" target="_blank" rel="noopener noreferrer">浅谈CSS calc()函数的用法</a></p>`,47)]))}const c=a(p,[["render",o],["__file","css-calc.html.vue"]]),B=JSON.parse('{"path":"/posts/Web/frontend-css/css-calc.html","title":"calc()函数","lang":"zh-CN","frontmatter":{"description":"calc()函数 1. 简介 CSS3 的 calc() 函数允许我们在属性值中执行数学操作。例如，我们可以使用 calc() 指定一个元素宽的固定像素值为多个数值的和。 2. 为什么使用 calc() 2.1 CSS 预处理器 是如何处理的 使用 CSS 预处理器，比如 SASS的情况 2.2 calc() 函数 优势一：可以混合计算绝对单位 cal...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-css/css-calc.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"calc()函数"}],["meta",{"property":"og:description","content":"calc()函数 1. 简介 CSS3 的 calc() 函数允许我们在属性值中执行数学操作。例如，我们可以使用 calc() 指定一个元素宽的固定像素值为多个数值的和。 2. 为什么使用 calc() 2.1 CSS 预处理器 是如何处理的 使用 CSS 预处理器，比如 SASS的情况 2.2 calc() 函数 优势一：可以混合计算绝对单位 cal..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"calc()函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 为什么使用 calc()","slug":"_2-为什么使用-calc","link":"#_2-为什么使用-calc","children":[{"level":3,"title":"2.1 CSS 预处理器 是如何处理的","slug":"_2-1-css-预处理器-是如何处理的","link":"#_2-1-css-预处理器-是如何处理的","children":[]},{"level":3,"title":"2.2 calc() 函数 优势一：可以混合计算绝对单位","slug":"_2-2-calc-函数-优势一-可以混合计算绝对单位","link":"#_2-2-calc-函数-优势一-可以混合计算绝对单位","children":[]},{"level":3,"title":"2.3 函数 优势二：更清晰","slug":"_2-3-函数-优势二-更清晰","link":"#_2-3-函数-优势二-更清晰","children":[]}]},{"level":2,"title":"3. 使用 calc()","slug":"_3-使用-calc","link":"#_3-使用-calc","children":[]},{"level":2,"title":"4. clac() 嵌套","slug":"_4-clac-嵌套","link":"#_4-clac-嵌套","children":[]},{"level":2,"title":"5. 什么场景使用 calc()","slug":"_5-什么场景使用-calc","link":"#_5-什么场景使用-calc","children":[{"level":3,"title":"5.1 Example 1 - 居中元素","slug":"_5-1-example-1-居中元素","link":"#_5-1-example-1-居中元素","children":[]},{"level":3,"title":"5.2 Example 2 - 创建根栅格尺寸","slug":"_5-2-example-2-创建根栅格尺寸","link":"#_5-2-example-2-创建根栅格尺寸","children":[]},{"level":3,"title":"5.3 Example 3 - 清晰度","slug":"_5-3-example-3-清晰度","link":"#_5-3-example-3-清晰度","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.26,"words":979},"filePathRelative":"posts/Web/frontend-css/css-calc.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>CSS3 的 calc() 函数允许我们在属性值中执行数学操作。例如，我们可以使用 calc() 指定一个元素宽的固定像素值为多个数值的和。</p>\\n<div class=\\"language-css\\" data-ext=\\"css\\" data-title=\\"css\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">.foo</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  width: </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">calc</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">100</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">px</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> +</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> 50</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">px</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n</div>","autoDesc":true}');export{c as comp,B as data};
