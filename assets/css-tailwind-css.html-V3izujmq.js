import{_ as a,c as n,a as i,o as l}from"./app-CZJgH_ea.js";const e={};function r(p,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="为什么使用tailwind-css" tabindex="-1"><a class="header-anchor" href="#为什么使用tailwind-css"><span>为什么使用Tailwind CSS</span></a></h1><h2 id="_1-tailwind-css-是什么" tabindex="-1"><a class="header-anchor" href="#_1-tailwind-css-是什么"><span>1. Tailwind CSS 是什么</span></a></h2><p>就是一个CSS框架，和你知道的bootstrap，element ui，Antd，bulma。一样。将一些css样式封装好，用来加速我们开发的一个工具。</p><h2 id="_2-css框架的发展" tabindex="-1"><a class="header-anchor" href="#_2-css框架的发展"><span>2 CSS框架的发展</span></a></h2><h3 id="_2-1-第一阶段-原生写法" tabindex="-1"><a class="header-anchor" href="#_2-1-第一阶段-原生写法"><span><strong>2.1 第一阶段：原生写法</strong></span></a></h3><p>是类似于编程中<strong>面向过程的写法</strong>，<strong>需要什么样式，自己在css中写什么样式</strong>。对代码有洁癖的程序员会进行简单的css复用。但是也只是简单的复用，大多数时候还是需要什么写什么，想怎么写怎么写。</p><h3 id="_2-2-第二个阶段-css组件化" tabindex="-1"><a class="header-anchor" href="#_2-2-第二个阶段-css组件化"><span>2.2 <strong>第二个阶段：CSS组件化</strong></span></a></h3><p>类似于编程中面向对象的写法，将相同视觉的UI封装成一个组件。比如一个按钮，整个项目中，这个按钮被多次使用，并且样式一致。那么就可以封装成一个按钮类。使用的时候直接使用这个类名称就OK。</p><blockquote><p>这也是bootstrap，element ui，Antd，bulma的做法。</p><p>这种框架的优势在于，封装了大量常见的UI。比如你需要一个表单，，需要一个导航，需要一个弹窗，Card卡片。有现成的class。直接拿过来用，就可以快速的完成效果。完全不需要动手写css。</p><p>这也是目前比较流行的方法。这几年几乎很少有项目是自己一点一点手写样式的了，多多少少都会使用到一些css框架</p></blockquote><p>对于一些需要快速交付的项目，非常适合使用这种组件化css框架。</p><h3 id="_2-3第三个阶段-css零件化。" tabindex="-1"><a class="header-anchor" href="#_2-3第三个阶段-css零件化。"><span><strong>2.3第三个阶段，CSS零件化。</strong></span></a></h3><p>也叫做CSS原子化。和上面第一个阶段第二个阶段都有类似的地方。<strong>依旧是组件，只是每个组件都是一个单一功能的css属性</strong>。</p><p>上面第一个阶段的时候，我们讲了有些有对代码有追求的人，会开始复用css。</p><p>比如页面中大量的用到 <code>float:left</code>。那么就可以封装一个类，比如是这样</p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>.left {float:left}</span></span></code></pre></div><p>然后需要使用 <code>float:left</code>的时候，直接使用<code> .left</code>就可以。</p><h4 id="_2-3-1-以前写法" tabindex="-1"><a class="header-anchor" href="#_2-3-1-以前写法"><span>2.3.1 以前写法</span></a></h4><p>但是我们自己写css的时候，仅仅是封装一些常用的简单的类，绝大多数的css，都需要动手去写css。比如你要写个宽度12像素。你就得老老实实的去写 <code>width:12px</code>，逃避不了，不过估计也没人想过逃避。</p><h4 id="_2-3-2-tailwind-css怎么做" tabindex="-1"><a class="header-anchor" href="#_2-3-2-tailwind-css怎么做"><span>2.3.2 Tailwind CSS怎么做</span></a></h4><p>它将所有的css属性全部封装成语义化的类，比如你想要一个<code>float:left</code>，它已经帮你封装好了，你直接使用一个<code>float-left</code>就可以。</p><p>需要一个宽度为12像素，只需要写<code>w-3</code>就可以。</p><h4 id="_2-3-3-示例" tabindex="-1"><a class="header-anchor" href="#_2-3-3-示例"><span>2.3.3 示例</span></a></h4><p>举一个完整的例子，你可能需要实现下面这样一个效果：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131257503.png" alt="image-20220327102115199" tabindex="0" loading="lazy"><figcaption>image-20220327102115199</figcaption></figure><p>按照我们正常的写法，需要这样写</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;chat-notification&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;chat-notification-logo-wrapper&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">img</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;chat-notification-logo&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> src</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;/img/logo.svg&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> alt</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;ChitChat Logo&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;chat-notification-content&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">h4</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;chat-notification-title&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;ChitChat&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">h4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">p</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;chat-notification-message&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;You have a new message!&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">p</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">style</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">  .chat-notification</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    display: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">flex</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    max-width: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">24</span><span style="color:#E06C75;--shiki-dark:#E06C75;">rem</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    margin: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> auto</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    padding: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1.5</span><span style="color:#E06C75;--shiki-dark:#E06C75;">rem</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    border-radius: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0.5</span><span style="color:#E06C75;--shiki-dark:#E06C75;">rem</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    background-color: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">#fff</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    box-shadow: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 20</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 25</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -5</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> rgba</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0.1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">), </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -5</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> rgba</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0.04</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">  .chat-notification-logo-wrapper</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    flex-shrink: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">  .chat-notification-logo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    height: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#E06C75;--shiki-dark:#E06C75;">rem</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    width: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#E06C75;--shiki-dark:#E06C75;">rem</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">  .chat-notification-content</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    margin-left: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1.5</span><span style="color:#E06C75;--shiki-dark:#E06C75;">rem</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    padding-top: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0.25</span><span style="color:#E06C75;--shiki-dark:#E06C75;">rem</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">  .chat-notification-title</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    color: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">#1a202c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    font-size: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1.25</span><span style="color:#E06C75;--shiki-dark:#E06C75;">rem</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    line-height: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1.25</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">  .chat-notification-message</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    color: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">#718096</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    font-size: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">rem</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    line-height: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1.5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">style</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是使用Tailwind CSS，你只需要这样写就可以</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;flex-shrink-0&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">img</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;h-12 w-12&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> src</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;/img/logo.svg&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> alt</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;ChitChat Logo&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;text-xl font-medium text-black&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;ChitChat&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">p</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;text-gray-500&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;You have a new message!&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">p</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>极大的减少了代码量。</p><blockquote><p>这种写法其实并不稀奇，就如同上面第一个阶段所说，我们自己写css的时候，也会做一些类似Tailwind CSS这样的事情，简单的封装一些css属性。</p><p>新浪网在十几年前就干过这事，还有ACSS，也是这个原理。只是被大家喷成了筛子。错误的时间做了正确的事情，免不了付出代价，造物弄人。</p></blockquote><h2 id="_3-和其他的css框架有什么区别" tabindex="-1"><a class="header-anchor" href="#_3-和其他的css框架有什么区别"><span>3. 和其他的CSS框架有什么区别？</span></a></h2><blockquote><p>区别在于bootstrap帮你封装好了一些样式，比如卡片，表单，按钮，导航等等。</p><p>Tailwind CSS没有封装任何样式，一丝一毫都没有。</p><p>bootstrap降低了定制性，你很难依靠bootstrap去定制一个自己的类，虽然bootstrap也有部分原子化的类名，但那只是常用的一些css属性。</p><p>Tailwind CSS完全自由，你可以玩出自己的花样，你甚至可以通过Tailwind CSS，打造一套属于自己的类似bootstrap这样的ui框架。</p></blockquote><ol><li>bootstrap 帮你封装的是组件的样式，而Tailwind CSS 帮你原子化CSS</li></ol><h2 id="_4-tailwind-css有什么优点" tabindex="-1"><a class="header-anchor" href="#_4-tailwind-css有什么优点"><span>4. Tailwind CSS有什么优点？</span></a></h2><h3 id="_4-1-可定制化程度极高。" tabindex="-1"><a class="header-anchor" href="#_4-1-可定制化程度极高。"><span>4.1 <strong>可定制化程度极高。</strong></span></a></h3><p>你可以随心所欲写出自己的样式。想怎么折腾怎么折腾。</p><p>如果使用bootstrap，你如果想改变一个按钮的样式，就会比较困难。你得用覆盖式的写法，通过自己的样式覆盖掉bootstrap自带的样式。如果框架本身不支持修改，你通过自己的写法去修改框架本身的特性，这是一种很脏的写法。非常别扭。</p><p>但是这个问题在Tailwind CSS完全不存在。Tailwind CSS没有自以为是的封装任何样式给你。</p><h3 id="_4-2-不需要在写css。" tabindex="-1"><a class="header-anchor" href="#_4-2-不需要在写css。"><span>4.2 <strong>不需要在写css。</strong></span></a></h3><p>使用Tailwind CSS，基本可以不用再写css。所有的效果都可以通过class名来完成。我用Tailwind CSS写了几个页面，到目前位置，还没有写过一行css</p><h3 id="_4-3-不需要再为class取个什么名字而苦恼。" tabindex="-1"><a class="header-anchor" href="#_4-3-不需要再为class取个什么名字而苦恼。"><span>4.3 <strong>不需要再为class取个什么名字而苦恼。</strong></span></a></h3><p>对于经常手写css的程序员来说，最大的噩梦可能就是怎么给class取名了。尤其是在同一个区块里面，区块名称，子元素名称，等等，一个页面动辄几十个几百个类名。非常痛苦。而这其中，真正能复用的class可能就个别几个。</p><p>使用Tailwind CSS完全不用为取名字烦恼，因为所有的css属性都被框架语义化封装好了。只需要在class里面引用就好。</p><h3 id="_4-4-响应式设计" tabindex="-1"><a class="header-anchor" href="#_4-4-响应式设计"><span>4.4 响应式设计</span></a></h3><p>Tailwind CSS遵循移动优先的设计模式。断点系统很灵活。也是目前所有css框架里做的最好的。比如你要实现一个媒体查询，根据不同的屏幕宽度实现不同的图片宽度。</p><p>按照之前的写法，你可能得这么干</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">@media</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> only</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> screen </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">and</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (max-width:</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1280</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) { </span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">    .img</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {     </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    width:</span><span style="color:#D19A66;--shiki-dark:#D19A66;">196</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    } </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">@media</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> only</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> screen </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">and</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (max-width: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">760</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) { </span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">    .img</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {     </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    width:</span><span style="color:#D19A66;--shiki-dark:#D19A66;">128</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    } </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>但是在Tailwind CSS，一句话就能搞定：</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">img</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;w-16 md:w-32 lg:w-48&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> src</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;...&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h3 id="_4-5-一套专业的ui属性值" tabindex="-1"><a class="header-anchor" href="#_4-5-一套专业的ui属性值"><span>4.5 <strong>一套专业的UI属性值</strong></span></a></h3><p>Tailwind CSS虽然没有封装任何UI，但是他默认提供的一些属性值都是很专业的。比如颜色</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131257541.png" alt="image-20220327103207080" tabindex="0" loading="lazy"><figcaption>image-20220327103207080</figcaption></figure><p>还有各种内边距外边距，宽高，文字大小行高颜色等等。即使你不懂设计，按照他内置的属性做出来的东西，也不会太差。</p><h2 id="_5-tailwind-css和内联样式有什么区别" tabindex="-1"><a class="header-anchor" href="#_5-tailwind-css和内联样式有什么区别"><span>5. <strong>Tailwind CSS和内联样式有什么区别？</strong></span></a></h2><p>Tailwind CSS是把所有样式写在class里面。内联样式是把所有样式写在style里面，所以会让很多人造成一个印象：Tailwind CSS和内联样式差不多，大同小异。</p><p>其实是有很大的区别，Tailwind CSS相比于内联样式，有以下几点特点：</p><h3 id="_5-1-有约束的设计。" tabindex="-1"><a class="header-anchor" href="#_5-1-有约束的设计。"><span>5.1 <strong>有约束的设计。</strong></span></a></h3><p>使用内联样式，每个值都是一个随便填写的数字。使用Tailwind CSS类，你要从预先定义好的设计系统中选择样式，这样你开发出来的页面，视觉上会保持一致，不会乱七八糟。</p><h3 id="_5-2-响应式设计。" tabindex="-1"><a class="header-anchor" href="#_5-2-响应式设计。"><span>5.2 <strong>响应式设计。</strong></span></a></h3><p>您不能在内联样式中使用媒体查询，但您可以使用Tailwind的响应式类来轻松开发完全响应式界面。比如你可以在class里写一个<code>sm:text-left</code>,代表的是，在小屏幕上，文字居中的方式是居左显示。但是你在内联样式是不可能做到这些的。</p><h3 id="_5-3-可以直接写鼠标滑过-点击等其他状态的样式。" tabindex="-1"><a class="header-anchor" href="#_5-3-可以直接写鼠标滑过-点击等其他状态的样式。"><span>5.3 <strong>可以直接写鼠标滑过，点击等其他状态的样式。</strong></span></a></h3><p>比如你可以在class里面写一个<code>hover:text-white</code> ,代表的是鼠标滑过的时候，文本是白色。</p><p><strong>其他的很多特点，比如可维护性等等。</strong></p><h2 id="_6-tailwind-css有什么缺点" tabindex="-1"><a class="header-anchor" href="#_6-tailwind-css有什么缺点"><span>6. Tailwind CSS有什么缺点？</span></a></h2><h3 id="_6-1-类名很长" tabindex="-1"><a class="header-anchor" href="#_6-1-类名很长"><span>6.1 <strong>类名很长</strong></span></a></h3><p>正如Tailwind CSS官网首页的口号一样，从此让你写样式不再离开html页面。Tailwind CSS将HTML与CSS高度解耦，<strong>把本来CSS的一些工作转嫁给了HTML</strong>。好处是使用Tailwind CSS你可以从此不再写css。但坏处是你的<strong>html标签的类名会很长很长</strong>。比如</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> href</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;#&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;text-sm font-medium bg-purple-600 rounded-full py-4 px-11 text-white inline-block border border-solid shadow hover:text-purple-600 hover:bg-white hover:border-purple-600 transition duration-300&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> role</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;button&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;Start Ticketing&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>虽然Tailwind CSS也支持把很多属性提取成一个组件，但是对于不会再次复用的class。提取组件也没什么必要。</p><p>所以类名很多是我目前遇到的不太舒服的问题。</p><h3 id="_6-2-熟悉使用有成本" tabindex="-1"><a class="header-anchor" href="#_6-2-熟悉使用有成本"><span>6.2 <strong>熟悉使用有成本</strong></span></a></h3><p>这一点逃避不了，所有的新技术，所有的css框架都有熟悉成本。Tailwind CSS也一样。比如你想做一个圆角，那你得知道Tailwind CSS里面的圆角属性怎么写，边框怎么写，边框样式怎么写等等。你需要不断的去看文档。</p><p>所以一开始使用Tailwind CSS，特别是第一个项目，你会用起来比较痛苦。很多不喜欢Tailwind CSS的人可能从第一个项目就会放弃了。</p><p>但是只要你用Tailwind CSS做一两个项目，基本明确的告诉你，你以后很难再回到手写css的时候了。大多人都会觉得&quot;很香&quot;。</p><p>另外是，Tailwind CSS的作者针对这个问题，开发了一个专门用于vscode的Tailwind CSS代码提示插件。会有效的提高开发效率。</p><h2 id="_7-要不要对以前的项目用tailwind-css进行重构" tabindex="-1"><a class="header-anchor" href="#_7-要不要对以前的项目用tailwind-css进行重构"><span>7. 要不要对以前的项目用Tailwind CSS进行重构？</span></a></h2><p>大多数情况下不建议，Tailwind CSS的主要优势在于开发效率的提升。如果一个项目你已经开发完成了。就没必要重新使用Tailwind CSS了。</p><p>但如果你之前的这个项目，你本来也准备重构了。在犹豫用什么css框架，那你可以试试Tailwind CSS。</p><p>另外是，如果一个项目，三天两头的更新迭代前端界面，并且之前的代码写的也不怎么好，那建议使用Tailwind CSS重构。</p><h2 id="_8-是不是以后可以放弃bootstrap之类的框架了" tabindex="-1"><a class="header-anchor" href="#_8-是不是以后可以放弃bootstrap之类的框架了"><span>8. 是不是以后可以放弃bootstrap之类的框架了？</span></a></h2><p>不是，主要看你的场景。我个人感想，如果一个项目，需要快速或者简单交付，那没必要用Tailwind CSS。用bootstrap，bulma之类的框架可以让你很快的完成一个项目。不用纠结太深的技术。</p><p><strong>Tailwind CSS更适合于页面定制化高的场景(重点)。</strong></p><h2 id="_9-听说tailwind-css的文件很大是不是" tabindex="-1"><a class="header-anchor" href="#_9-听说tailwind-css的文件很大是不是"><span>9. 听说Tailwind CSS的文件很大是不是？</span></a></h2><p>是的。因为它需要把所有的css属性全部都封装一遍，所以<a href="https://www.zhihu.com/search?q=css%E6%96%87%E4%BB%B6&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1693039814%7D" target="_blank" rel="noopener noreferrer">css文件</a>巨大，3M多。所以不建议在页面内直接引入Tailwind 原生css文件的做法。</p><p>Tailwind CSS官方团队为了解决这个问题，提出了一个方案，在编译的时候引入PurgeCSS 这个工具，构建的时候，会自动删除掉所有你没用到的css。只保留你用到的css。这样最终打包出来的css文件极小极小，一般的项目构建出来的css文件,压缩一下甚至不会超过10K。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.zhihu.com/question/337939566/answer/1693039814" target="_blank" rel="noopener noreferrer">如何评价CSS框架TailwindCSS？</a></p>`,86)]))}const t=a(e,[["render",r],["__file","css-tailwind-css.html.vue"]]),B=JSON.parse('{"path":"/posts/Web/frontend-css/css-tailwind-css.html","title":"为什么使用Tailwind CSS","lang":"zh-CN","frontmatter":{"created":"2024-05-13 20:48","updated":"2024-10-13 12:57","description":"为什么使用Tailwind CSS 1. Tailwind CSS 是什么 就是一个CSS框架，和你知道的bootstrap，element ui，Antd，bulma。一样。将一些css样式封装好，用来加速我们开发的一个工具。 2 CSS框架的发展 2.1 第一阶段：原生写法 是类似于编程中面向过程的写法，需要什么样式，自己在css中写什么样式。对代...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-css/css-tailwind-css.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"为什么使用Tailwind CSS"}],["meta",{"property":"og:description","content":"为什么使用Tailwind CSS 1. Tailwind CSS 是什么 就是一个CSS框架，和你知道的bootstrap，element ui，Antd，bulma。一样。将一些css样式封装好，用来加速我们开发的一个工具。 2 CSS框架的发展 2.1 第一阶段：原生写法 是类似于编程中面向过程的写法，需要什么样式，自己在css中写什么样式。对代..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131257503.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"为什么使用Tailwind CSS\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131257503.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131257541.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. Tailwind CSS 是什么","slug":"_1-tailwind-css-是什么","link":"#_1-tailwind-css-是什么","children":[]},{"level":2,"title":"2 CSS框架的发展","slug":"_2-css框架的发展","link":"#_2-css框架的发展","children":[{"level":3,"title":"2.1 第一阶段：原生写法","slug":"_2-1-第一阶段-原生写法","link":"#_2-1-第一阶段-原生写法","children":[]},{"level":3,"title":"2.2 第二个阶段：CSS组件化","slug":"_2-2-第二个阶段-css组件化","link":"#_2-2-第二个阶段-css组件化","children":[]},{"level":3,"title":"2.3第三个阶段，CSS零件化。","slug":"_2-3第三个阶段-css零件化。","link":"#_2-3第三个阶段-css零件化。","children":[]}]},{"level":2,"title":"3. 和其他的CSS框架有什么区别？","slug":"_3-和其他的css框架有什么区别","link":"#_3-和其他的css框架有什么区别","children":[]},{"level":2,"title":"4. Tailwind CSS有什么优点？","slug":"_4-tailwind-css有什么优点","link":"#_4-tailwind-css有什么优点","children":[{"level":3,"title":"4.1 可定制化程度极高。","slug":"_4-1-可定制化程度极高。","link":"#_4-1-可定制化程度极高。","children":[]},{"level":3,"title":"4.2 不需要在写css。","slug":"_4-2-不需要在写css。","link":"#_4-2-不需要在写css。","children":[]},{"level":3,"title":"4.3 不需要再为class取个什么名字而苦恼。","slug":"_4-3-不需要再为class取个什么名字而苦恼。","link":"#_4-3-不需要再为class取个什么名字而苦恼。","children":[]},{"level":3,"title":"4.4 响应式设计","slug":"_4-4-响应式设计","link":"#_4-4-响应式设计","children":[]},{"level":3,"title":"4.5 一套专业的UI属性值","slug":"_4-5-一套专业的ui属性值","link":"#_4-5-一套专业的ui属性值","children":[]}]},{"level":2,"title":"5. Tailwind CSS和内联样式有什么区别？","slug":"_5-tailwind-css和内联样式有什么区别","link":"#_5-tailwind-css和内联样式有什么区别","children":[{"level":3,"title":"5.1 有约束的设计。","slug":"_5-1-有约束的设计。","link":"#_5-1-有约束的设计。","children":[]},{"level":3,"title":"5.2 响应式设计。","slug":"_5-2-响应式设计。","link":"#_5-2-响应式设计。","children":[]},{"level":3,"title":"5.3 可以直接写鼠标滑过，点击等其他状态的样式。","slug":"_5-3-可以直接写鼠标滑过-点击等其他状态的样式。","link":"#_5-3-可以直接写鼠标滑过-点击等其他状态的样式。","children":[]}]},{"level":2,"title":"6. Tailwind CSS有什么缺点？","slug":"_6-tailwind-css有什么缺点","link":"#_6-tailwind-css有什么缺点","children":[{"level":3,"title":"6.1 类名很长","slug":"_6-1-类名很长","link":"#_6-1-类名很长","children":[]},{"level":3,"title":"6.2 熟悉使用有成本","slug":"_6-2-熟悉使用有成本","link":"#_6-2-熟悉使用有成本","children":[]}]},{"level":2,"title":"7. 要不要对以前的项目用Tailwind CSS进行重构？","slug":"_7-要不要对以前的项目用tailwind-css进行重构","link":"#_7-要不要对以前的项目用tailwind-css进行重构","children":[]},{"level":2,"title":"8. 是不是以后可以放弃bootstrap之类的框架了？","slug":"_8-是不是以后可以放弃bootstrap之类的框架了","link":"#_8-是不是以后可以放弃bootstrap之类的框架了","children":[]},{"level":2,"title":"9. 听说Tailwind CSS的文件很大是不是？","slug":"_9-听说tailwind-css的文件很大是不是","link":"#_9-听说tailwind-css的文件很大是不是","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":10.17,"words":3052},"filePathRelative":"posts/Web/frontend-css/css-tailwind-css.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. Tailwind CSS 是什么</h2>\\n<p>就是一个CSS框架，和你知道的bootstrap，element ui，Antd，bulma。一样。将一些css样式封装好，用来加速我们开发的一个工具。</p>\\n<h2>2 CSS框架的发展</h2>\\n<h3><strong>2.1 第一阶段：原生写法</strong></h3>\\n<p>是类似于编程中<strong>面向过程的写法</strong>，<strong>需要什么样式，自己在css中写什么样式</strong>。对代码有洁癖的程序员会进行简单的css复用。但是也只是简单的复用，大多数时候还是需要什么写什么，想怎么写怎么写。</p>","autoDesc":true}');export{t as comp,B as data};
