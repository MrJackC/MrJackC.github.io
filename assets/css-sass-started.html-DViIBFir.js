import{_ as a,c as n,a as i,o as e}from"./app-BQBjlK2G.js";const l={};function r(o,s){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="sass入门" tabindex="-1"><a class="header-anchor" href="#sass入门"><span>SASS入门</span></a></h1><h2 id="_1-历史背景" tabindex="-1"><a class="header-anchor" href="#_1-历史背景"><span>1. 历史背景</span></a></h2><p>CSS不是一种编程语言。</p><p><strong>你可以用它开发网页样式，但是没法用它编程</strong>。也就是说，CSS基本上是设计师的工具，不是程序员的工具。在程序员眼里，CSS是一件很麻烦的东西。<strong>它没有变量，也没有条件语句，只是一行行单纯的描述</strong>，写起来相当费事。</p><p>很自然地，有人就开始<strong>为CSS加入编程元素，这被叫做&quot;CSS预处理器&quot;（css preprocessor）</strong>。</p><p>它的基本思想是，用一种专门的编程语言，进行网页样式设计，然后再编译成正常的CSS文件。</p><h2 id="_2-什么是sass" tabindex="-1"><a class="header-anchor" href="#_2-什么是sass"><span>2. <strong>什么是SASS</strong></span></a></h2><p>SASS是一种CSS的开发工具，提供了许多便利的写法，大大节省了设计者的时间，使得CSS的开发，变得简单和可维护。</p><h2 id="_3-基本用法" tabindex="-1"><a class="header-anchor" href="#_3-基本用法"><span>3. <strong>基本用法</strong></span></a></h2><h3 id="_3-1-变量" tabindex="-1"><a class="header-anchor" href="#_3-1-变量"><span><strong>3.1 变量</strong></span></a></h3><p>SASS允许使用变量，所有变量以$开头。</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　$blue : </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">#1875e7</span><span style="color:#C678DD;--shiki-dark:#C678DD;">;　</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> 　　div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　color : $</span><span style="color:#D19A66;--shiki-dark:#D19A66;">blue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　}</span></span></code></pre></div><p>如果变量需要镶嵌在字符串之中，就必须需要写在#{}之中。</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　$side : left;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;"> 　　.rounded</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　border-#{$side}</span><span style="color:#C678DD;--shiki-dark:#C678DD;">-radius: 5px;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　}</span></span></code></pre></div><h3 id="_3-2-计算功能" tabindex="-1"><a class="header-anchor" href="#_3-2-计算功能"><span><strong>3.2 计算功能</strong></span></a></h3><p>SASS允许在代码中使用算式：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> 　　body</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　margin: (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">14</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　top: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">50</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> + </span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　right: $var * </span><span style="color:#D19A66;--shiki-dark:#D19A66;">10</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　}</span></span></code></pre></div><h3 id="_3-3-嵌套" tabindex="-1"><a class="header-anchor" href="#_3-3-嵌套"><span><strong>3.3 嵌套</strong></span></a></h3><p>SASS允许选择器嵌套。比如，下面的CSS代码：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> 　　div</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> h1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　color : </span><span style="color:#D19A66;--shiki-dark:#D19A66;">red</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　}</span></span></code></pre></div><p>可以写成：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> 　　div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　hi {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　　　color:</span><span style="color:#D19A66;--shiki-dark:#D19A66;">red</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　}</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　}</span></span></code></pre></div><p>属性也可以嵌套，比如border-color属性，可以写成：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> 　　p</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　border: {</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;"> 　　　　　　color</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">red</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　}</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　}</span></span></code></pre></div><p>注意，border后面必须加上冒号。</p><p>在嵌套的代码块内，可以使用&amp;引用父元素。比如a:hover伪类，可以写成：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> 　　a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　&amp;:hover { </span><span style="color:#D19A66;--shiki-dark:#D19A66;">color</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">#ffb3ff</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　}</span></span></code></pre></div><h3 id="_3-4-注释" tabindex="-1"><a class="header-anchor" href="#_3-4-注释"><span><strong>3.4 注释</strong></span></a></h3><p>SASS共有两种注释风格。</p><p>标准的CSS注释 /* comment */ ，会保留到编译后的文件。</p><p>单行注释 // comment，只保留在SASS源文件中，编译后被省略。</p><p>在/*后面加一个感叹号，表示这是&quot;重要注释&quot;。即使是压缩模式编译，也会保留这行注释，通常可以用于声明版权信息。</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　/*!</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　　　重要注释！</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> 　　*</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/</span></span></code></pre></div><h2 id="_4-代码的重用" tabindex="-1"><a class="header-anchor" href="#_4-代码的重用"><span><strong>4. 代码的重用</strong></span></a></h2><h3 id="_4-1-继承" tabindex="-1"><a class="header-anchor" href="#_4-1-继承"><span><strong>4.1 继承</strong></span></a></h3><p>SASS允许一个选择器，继承另一个选择器。比如，现有class1：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;"> 　　.class1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　border: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> solid</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> #ddd</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　}</span></span></code></pre></div><p>class2要继承class1，就要使用@extend命令：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;"> 　　.class2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　@extend .class1;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　font-size:</span><span style="color:#D19A66;--shiki-dark:#D19A66;">120</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　}</span></span></code></pre></div><h3 id="_4-2-mixin" tabindex="-1"><a class="header-anchor" href="#_4-2-mixin"><span><strong>4.2 Mixin</strong></span></a></h3><p>Mixin有点像C语言的宏（macro），是可以重用的代码块。</p><p>使用@mixin命令，定义一个代码块。</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　@mixin left {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　　　float: left;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> 　　　　margin-left</span><span style="color:#C678DD;--shiki-dark:#C678DD;">: 10px;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　}</span></span></code></pre></div><p>使用@include命令，调用这个mixin。</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">　　div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">　　　　@include left;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">　　}</span></span></code></pre></div><p>mixin的强大之处，在于可以指定参数和缺省值。</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　@mixin left($value: 10px) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　　　float: left;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> 　　　　margin-right</span><span style="color:#C678DD;--shiki-dark:#C678DD;">: $value;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　}</span></span></code></pre></div><p>使用的时候，根据需要加入参数：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> 　　div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　@include left(20px);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　}</span></span></code></pre></div><p>下面是一个mixin的实例，用来生成浏览器前缀。</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　@mixin rounded($vert, $horz, $radius: 10px) {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> 　　　　border-</span><span style="color:#C678DD;--shiki-dark:#C678DD;">#</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{$vert}</span><span style="color:#C678DD;--shiki-dark:#C678DD;">-#</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{$horz}</span><span style="color:#C678DD;--shiki-dark:#C678DD;">-radius: $radius;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　　　-moz-border-radius-#</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{$vert}</span><span style="color:#C678DD;--shiki-dark:#C678DD;">#</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{$horz}</span><span style="color:#C678DD;--shiki-dark:#C678DD;">: $radius;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　　　-webkit-border-#</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{$vert}</span><span style="color:#C678DD;--shiki-dark:#C678DD;">-#</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{$horz}</span><span style="color:#C678DD;--shiki-dark:#C678DD;">-radius: $radius;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　}</span></span></code></pre></div><p>使用的时候，可以像下面这样调用：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> 　　#navbar</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> li</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> { @include rounded(top, left); }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> 　　#footer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> { @include rounded(top, left, 5px); }</span></span></code></pre></div><h3 id="_4-3-颜色函数" tabindex="-1"><a class="header-anchor" href="#_4-3-颜色函数"><span><strong>4.3 颜色函数</strong></span></a></h3><p>SASS提供了一些内置的颜色函数，以便生成系列颜色。</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">　　lighten(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">#cc3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> 10%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) // </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">#d6d65c</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">　　darken(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">#cc3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> 10%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) // </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">#a3a329</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">　　grayscale(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">#cc3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) // </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">#808080</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">　　complement(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">#cc3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) // </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">#33c</span></span></code></pre></div><h3 id="_4-4-插入文件" tabindex="-1"><a class="header-anchor" href="#_4-4-插入文件"><span><strong>4.4 插入文件</strong></span></a></h3><template><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　@import &quot;path/filename.scss&quot;;</span></span></code></pre></div><p>如果插入的是.css文件，则等同于css的import命令。</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　@import &quot;foo.css&quot;;</span></span></code></pre></div><h2 id="_5-高级用法" tabindex="-1"><a class="header-anchor" href="#_5-高级用法"><span><strong>5. 高级用法</strong></span></a></h2><h3 id="_5-1-条件语句" tabindex="-1"><a class="header-anchor" href="#_5-1-条件语句"><span><strong>5.1 条件语句</strong></span></a></h3><p>@if可以用来判断：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> 　　p</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　@if 1 + 1 == 2 { border: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> solid</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　　　@if 5 &lt; 3 { border: 2px dotted; }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　}</span></span></code></pre></div><p>配套的还有@else命令：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　@if lightness($color)  30% {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> 　　　　background-color</span><span style="color:#C678DD;--shiki-dark:#C678DD;">: </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">#000</span><span style="color:#C678DD;--shiki-dark:#C678DD;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　}</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> @else</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> 　　　　background-color</span><span style="color:#C678DD;--shiki-dark:#C678DD;">: </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">#fff;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　}</span></span></code></pre></div><h3 id="_5-2-循环语句" tabindex="-1"><a class="header-anchor" href="#_5-2-循环语句"><span><strong>5.2 循环语句</strong></span></a></h3><p>SASS支持for循环：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　@for $i from 1 to 10 {</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;"> 　　　　.border-</span><span style="color:#C678DD;--shiki-dark:#C678DD;">#</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{$i} {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　　　border: #{$i}</span><span style="color:#C678DD;--shiki-dark:#C678DD;">px solid blue;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　　　}</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　}</span></span></code></pre></div><p>也支持while循环：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　$</span><span style="color:#E06C75;--shiki-dark:#E06C75;">i</span><span style="color:#C678DD;--shiki-dark:#C678DD;">: 6;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　@while $i  0 {</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;"> 　　　　.item-</span><span style="color:#C678DD;--shiki-dark:#C678DD;">#</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{$i} { width: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#E06C75;--shiki-dark:#E06C75;">em</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * $i; }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　　　$</span><span style="color:#E06C75;--shiki-dark:#E06C75;">i</span><span style="color:#C678DD;--shiki-dark:#C678DD;">: $</span><span style="color:#E06C75;--shiki-dark:#E06C75;">i</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> - 2;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　}</span></span></code></pre></div><p>each命令，作用与for类似：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　@each $member in a, b, c, d {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　　　.#</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{$member} {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　　　background-image: </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">url</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;/image/#{$member}.jpg&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　}</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　}</span></span></code></pre></div><h3 id="_5-3-自定义函数" tabindex="-1"><a class="header-anchor" href="#_5-3-自定义函数"><span><strong>5.3 自定义函数</strong></span></a></h3><p>SASS允许用户编写自己的函数。</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　@function double($n) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　　　@return $n * 2;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 　　}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> 　　#sidebar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　　　width: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">double</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">5</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 　　}</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.ruanyifeng.com/blog/2012/06/sass.html" target="_blank" rel="noopener noreferrer">SASS用法指南</a></p></template>`,58)]))}const c=a(l,[["render",r],["__file","css-sass-started.html.vue"]]),d=JSON.parse('{"path":"/posts/Web/frontend-css/css-sass-started.html","title":"SASS入门","lang":"zh-CN","frontmatter":{"description":"SASS入门 1. 历史背景 CSS不是一种编程语言。 你可以用它开发网页样式，但是没法用它编程。也就是说，CSS基本上是设计师的工具，不是程序员的工具。在程序员眼里，CSS是一件很麻烦的东西。它没有变量，也没有条件语句，只是一行行单纯的描述，写起来相当费事。 很自然地，有人就开始为CSS加入编程元素，这被叫做\\"CSS预处理器\\"（css preproc...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Web/frontend-css/css-sass-started.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"SASS入门"}],["meta",{"property":"og:description","content":"SASS入门 1. 历史背景 CSS不是一种编程语言。 你可以用它开发网页样式，但是没法用它编程。也就是说，CSS基本上是设计师的工具，不是程序员的工具。在程序员眼里，CSS是一件很麻烦的东西。它没有变量，也没有条件语句，只是一行行单纯的描述，写起来相当费事。 很自然地，有人就开始为CSS加入编程元素，这被叫做\\"CSS预处理器\\"（css preproc..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SASS入门\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 历史背景","slug":"_1-历史背景","link":"#_1-历史背景","children":[]},{"level":2,"title":"2. 什么是SASS","slug":"_2-什么是sass","link":"#_2-什么是sass","children":[]},{"level":2,"title":"3. 基本用法","slug":"_3-基本用法","link":"#_3-基本用法","children":[{"level":3,"title":"3.1 变量","slug":"_3-1-变量","link":"#_3-1-变量","children":[]},{"level":3,"title":"3.2 计算功能","slug":"_3-2-计算功能","link":"#_3-2-计算功能","children":[]},{"level":3,"title":"3.3 嵌套","slug":"_3-3-嵌套","link":"#_3-3-嵌套","children":[]},{"level":3,"title":"3.4 注释","slug":"_3-4-注释","link":"#_3-4-注释","children":[]}]},{"level":2,"title":"4. 代码的重用","slug":"_4-代码的重用","link":"#_4-代码的重用","children":[{"level":3,"title":"4.1 继承","slug":"_4-1-继承","link":"#_4-1-继承","children":[]},{"level":3,"title":"4.2 Mixin","slug":"_4-2-mixin","link":"#_4-2-mixin","children":[]},{"level":3,"title":"4.3 颜色函数","slug":"_4-3-颜色函数","link":"#_4-3-颜色函数","children":[]},{"level":3,"title":"4.4 插入文件","slug":"_4-4-插入文件","link":"#_4-4-插入文件","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.27,"words":980},"filePathRelative":"posts/Web/frontend-css/css-sass-started.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 历史背景</h2>\\n<p>CSS不是一种编程语言。</p>\\n<p><strong>你可以用它开发网页样式，但是没法用它编程</strong>。也就是说，CSS基本上是设计师的工具，不是程序员的工具。在程序员眼里，CSS是一件很麻烦的东西。<strong>它没有变量，也没有条件语句，只是一行行单纯的描述</strong>，写起来相当费事。</p>\\n<p>很自然地，有人就开始<strong>为CSS加入编程元素，这被叫做\\"CSS预处理器\\"（css preprocessor）</strong>。</p>\\n<p>它的基本思想是，用一种专门的编程语言，进行网页样式设计，然后再编译成正常的CSS文件。</p>","autoDesc":true}');export{c as comp,d as data};
