import{_ as a,c as l,a as t,o as n}from"./app-CpAF2rca.js";const i={};function r(e,s){return n(),l("div",null,s[0]||(s[0]=[t(`<h1 id="lxml入门" tabindex="-1"><a class="header-anchor" href="#lxml入门"><span>lxml入门</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>lxml 是一个流行的解析库，使用Xpath语法</p><h2 id="_2-xpath常用语法" tabindex="-1"><a class="header-anchor" href="#_2-xpath常用语法"><span>2. Xpath常用语法</span></a></h2><p>XPath 使用路径表达式在 XML 文档中选取节点。节点是通过沿着路径或者 step 来选取的。</p><h3 id="_2-1-选取节点" tabindex="-1"><a class="header-anchor" href="#_2-1-选取节点"><span>2.1 选取节点</span></a></h3><p>下面列出了最有用的路径表达式：</p><table><thead><tr><th>表达式</th><th>描述</th></tr></thead><tbody><tr><td>nodename</td><td>选取此节点的所有子节点。</td></tr><tr><td>/</td><td>从根节点选取。</td></tr><tr><td>//</td><td>从匹配选择的当前节点选择文档中的节点，而不考虑它们的位置。</td></tr><tr><td>.</td><td>选取当前节点。</td></tr><tr><td>..</td><td>选取当前节点的父节点。</td></tr><tr><td>@</td><td>选取属性。</td></tr></tbody></table><p>XPath 通配符可用来选取未知的 XML 元素。</p><table><thead><tr><th>通配符</th><th>描述</th></tr></thead><tbody><tr><td>*</td><td>匹配任何元素节点。</td></tr><tr><td>@*</td><td>匹配任何属性节点。</td></tr><tr><td>node()</td><td>匹配任何类型的节点。</td></tr><tr><td></td><td></td></tr></tbody></table><p>通过在路径表达式中使用“|”运算符，可以选取若干个路径，“|”两边的表达式是互相独立的，并非是一个表达式下。</p><h4 id="_2-2-谓语" tabindex="-1"><a class="header-anchor" href="#_2-2-谓语"><span>2.2 <strong>谓语</strong></span></a></h4><p>通过以上介绍我们基本可以进行选取节点了，但是有可能选的节点有点多，那么这时候就需要用谓语了。谓语就是用来做过滤的，过滤条件均写在<code>[]</code>中。</p><table><thead><tr><th>路径表达式</th><th>结果</th></tr></thead><tbody><tr><td>/bookstore/book[1]</td><td>选取属于 bookstore 子元素的第一个 book 元素。</td></tr><tr><td>/bookstore/book[last()]</td><td>选取属于 bookstore 子元素的最后一个 book 元素。</td></tr><tr><td>/bookstore/book[last()-1]</td><td>选取属于 bookstore 子元素的倒数第二个 book 元素。</td></tr><tr><td>/bookstore/book[position()❤️]</td><td>选取最前面的两个属于 bookstore 元素的子元素的 book 元素。</td></tr><tr><td>//title[@lang]</td><td>选取所有拥有名为 lang 的属性的 title 元素。</td></tr><tr><td>//title[@lang=&#39;eng&#39;]</td><td>选取所有 title 元素，且这些元素拥有值为 eng 的 lang 属性。</td></tr><tr><td>/bookstore/book[price&gt;35.00]</td><td>选取 bookstore 元素的所有 book 元素，且其中的 price 元素的值须大于 35.00。</td></tr><tr><td>/bookstore/book[price&gt;35.00]/title</td><td>选取 bookstore 元素中的 book 元素的所有 title 元素，且其中的 price 元素的值须大于 35.00。</td></tr></tbody></table><h2 id="_3-lxml用法" tabindex="-1"><a class="header-anchor" href="#_3-lxml用法"><span>3. lxml用法</span></a></h2><h3 id="_3-1-初步使用" tabindex="-1"><a class="header-anchor" href="#_3-1-初步使用"><span>3.1 初步使用</span></a></h3><p>利用他解析Html代码</p><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> lxml </span><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> etree</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">text </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">         &lt;li class=&quot;item-0&quot;&gt;&lt;a href=&quot;link1.html&quot;&gt;first item&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">         &lt;li class=&quot;item-1&quot;&gt;&lt;a href=&quot;link2.html&quot;&gt;second item&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">         &lt;li class=&quot;item-inactive&quot;&gt;&lt;a href=&quot;link3.html&quot;&gt;third item&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">         &lt;li class=&quot;item-1&quot;&gt;&lt;a href=&quot;link4.html&quot;&gt;fourth item&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">         &lt;li class=&quot;item-0&quot;&gt;&lt;a href=&quot;link5.html&quot;&gt;fifth item&lt;/a&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">     &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;"> &lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">html </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> etree.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">HTML</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(text)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">result </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> etree.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tostring</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(html)</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">print</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(result)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用 lxml 的 etree 库</li><li>利用 etree.HTML 初始化</li><li>最后将其打印出来</li></ul><p>里体现了 lxml 的一个非常实用的功能就是自动修正 html 代码，大家应该注意到了，最后一个 li 标签，其实我把尾标签删掉了，是不闭合的。不过，lxml 因为继承了 libxml2 的特性，具有自动修正 HTML 代码的功能。 所以输出结果是这样的</p><div class="language-python" data-ext="python" data-title="python"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">html</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">body</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">div</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">    &lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">ul</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">         &lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li </span><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-0&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a href</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link1.html&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">first item</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">         &lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li </span><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-1&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a href</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link2.html&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">second item</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">         &lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li </span><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-inactive&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a href</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link3.html&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">third item</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">         &lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li </span><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-1&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a href</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link4.html&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">fourth item</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">         &lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li </span><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-0&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a href</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link5.html&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">fifth item</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">ul</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> &lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">div</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">body</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">html</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span></code></pre></div><p>不仅补全了 li 标签，还添加了 body，html 标签。</p><h3 id="_3-2-文件读取" tabindex="-1"><a class="header-anchor" href="#_3-2-文件读取"><span>3.2 文件读取</span></a></h3><p>除了直接读取字符串，还支持从文件读取内容。比如我们新建一个文件叫做 hello.html，内容为</p><div class="language-python" data-ext="python" data-title="python"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">div</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">    &lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">ul</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">         &lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li </span><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-0&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a href</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link1.html&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">first item</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">         &lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li </span><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-1&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a href</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link2.html&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">second item</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">         &lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li </span><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-inactive&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a href</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link3.html&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">span </span><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;bold&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">third item</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">span</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">         &lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li </span><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-1&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a href</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link4.html&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">fourth item</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">         &lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li </span><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-0&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a href</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link5.html&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">fifth item</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">a</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">li</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">     &lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">ul</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> &lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">div</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span></code></pre></div><p>利用 parse 方法来读取文件。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>from lxml import etree</span></span>
<span class="line"><span>html = etree.parse(&#39;hello.html&#39;)</span></span>
<span class="line"><span>result = etree.tostring(html, pretty_print=True)</span></span>
<span class="line"><span>print(result)</span></span></code></pre></div><p>同样可以得到相同的结果。</p><h3 id="_3-3-xpath-实例测试" tabindex="-1"><a class="header-anchor" href="#_3-3-xpath-实例测试"><span>3.3 XPath 实例测试</span></a></h3><p>依然以上一段程序为例 （1）</p><h4 id="_3-3-1-获取所有的标签" tabindex="-1"><a class="header-anchor" href="#_3-3-1-获取所有的标签"><span>3.3.1 获取所有的标签</span></a></h4><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>from lxml import etree</span></span>
<span class="line"><span>html = etree.parse(&#39;hello.html&#39;)</span></span>
<span class="line"><span>print (&quot;type(html):     &quot;+str(type(html)))</span></span>
<span class="line"><span>result = html.xpath(&#39;//li&#39;)</span></span>
<span class="line"><span>print (&quot;result:     &quot;+str(result))</span></span>
<span class="line"><span>print (&quot;len(result):    &quot;+str(len(result)))</span></span>
<span class="line"><span>print (&quot;type(result):   &quot;+str(type(result)))</span></span>
<span class="line"><span>print (&quot;type(result[0]):    &quot;+str(type(result[0])))</span></span></code></pre></div><p>运行结果</p><div class="language-python" data-ext="python" data-title="python"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(html):     </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;lxml.etree._ElementTree&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">result:     [</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">Element li at </span><span style="color:#C678DD;--shiki-dark:#C678DD;">0x</span><span style="color:#D19A66;--shiki-dark:#D19A66;">56b8e80</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">Element li at </span><span style="color:#C678DD;--shiki-dark:#C678DD;">0x</span><span style="color:#D19A66;--shiki-dark:#D19A66;">562d6c0</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">Element li at </span><span style="color:#C678DD;--shiki-dark:#C678DD;">0x</span><span style="color:#D19A66;--shiki-dark:#D19A66;">56dab80</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">Element li at </span><span style="color:#C678DD;--shiki-dark:#C678DD;">0x</span><span style="color:#D19A66;--shiki-dark:#D19A66;">56dabc0</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">Element li at </span><span style="color:#C678DD;--shiki-dark:#C678DD;">0x</span><span style="color:#D19A66;--shiki-dark:#D19A66;">56dac00</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">len</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(result):    </span><span style="color:#D19A66;--shiki-dark:#D19A66;">5</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(result):   </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;list&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(result[</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]):    </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;lxml.etree._Element&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span></code></pre></div><p>可见，etree.parse 的类型是 ElementTree，通过调用 xpath 以后，得到了一个列表，包含了 5 个元素，每个元素都是 Element 类型</p><h4 id="_3-3-2-获取标签所有的class" tabindex="-1"><a class="header-anchor" href="#_3-3-2-获取标签所有的class"><span>3.3.2 获取标签所有的class</span></a></h4><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>result = html.xpath(&#39;//li/@class&#39;)</span></span>
<span class="line"><span>print(result )</span></span></code></pre></div><p>运行结果</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[&#39;item-0&#39;, &#39;item-1&#39;, &#39;item-inactive&#39;, &#39;item-1&#39;, &#39;item-0&#39;]</span></span></code></pre></div><h4 id="_3-3-3-获取标签下href-为link1-html-的-标签" tabindex="-1"><a class="header-anchor" href="#_3-3-3-获取标签下href-为link1-html-的-标签"><span>3.3.3 获取标签下href 为link1.html 的 标签</span></a></h4><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>result = html.xpath(&#39;//li/a[@href=&quot;link1.html&quot;]&#39;)</span></span>
<span class="line"><span>print(result )</span></span></code></pre></div><p>运行结果</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[&lt;Element a at 0x5587b00&gt;]</span></span></code></pre></div><h4 id="_3-3-4-获取标签下的所有-标签" tabindex="-1"><a class="header-anchor" href="#_3-3-4-获取标签下的所有-标签"><span>3.3.4 获取标签下的所有 标签</span></a></h4><p><strong>错误写法</strong></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>result = html.xpath(&#39;//li/span&#39;)</span></span></code></pre></div><p>因为 / 是用来获取子元素的，这样获取得为空数组。所以要用双斜杠</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>result = html.xpath(&#39;//li//span&#39;)</span></span>
<span class="line"><span>print(result )</span></span></code></pre></div><p>运行结果</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[&lt;Element span at 0x5636d80&gt;]</span></span></code></pre></div><h4 id="_3-3-5-获取最后一个href" tabindex="-1"><a class="header-anchor" href="#_3-3-5-获取最后一个href"><span>3.3.5 获取最后一个href</span></a></h4><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>result = html.xpath(&#39;//li[last()]/a/@href&#39;)print result</span></span></code></pre></div><p>运行结果：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[&#39;link5.html&#39;]</span></span></code></pre></div><h4 id="_3-3-6-获取倒数第二个元素的内容" tabindex="-1"><a class="header-anchor" href="#_3-3-6-获取倒数第二个元素的内容"><span>3.3.6 获取倒数第二个元素的内容</span></a></h4><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>result = html.xpath(&#39;//li[last()-1]/a&#39;)</span></span>
<span class="line"><span>print result[0].text</span></span></code></pre></div><p>运行结果</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>fourth item</span></span></code></pre></div><h4 id="_3-3-7-获取-class-为-bold-的标签名" tabindex="-1"><a class="header-anchor" href="#_3-3-7-获取-class-为-bold-的标签名"><span>3.3.7 获取 class 为 bold 的标签名</span></a></h4><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>result = html.xpath(&#39;//*[@class=&quot;bold&quot;]&#39;)</span></span>
<span class="line"><span>print result[0].tag</span></span></code></pre></div><p>运行结果</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>span</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://cuiqingcai.com/2621.html" target="_blank" rel="noopener noreferrer">Python 爬虫利器三之 Xpath 语法与 lxml 库的用法</a></p><p><a href="https://www.jianshu.com/p/e084c2b2b66d" target="_blank" rel="noopener noreferrer">lxml 学习笔记</a></p>`,65)]))}const o=a(i,[["render",r],["__file","python-lxml.html.vue"]]),B=JSON.parse('{"path":"/posts/Python/python-lxml.html","title":"lxml入门","lang":"zh-CN","frontmatter":{"description":"lxml入门 1. 简介 lxml 是一个流行的解析库，使用Xpath语法 2. Xpath常用语法 XPath 使用路径表达式在 XML 文档中选取节点。节点是通过沿着路径或者 step 来选取的。 2.1 选取节点 下面列出了最有用的路径表达式： XPath 通配符可用来选取未知的 XML 元素。 通过在路径表达式中使用“|”运算符，可以选取若干个...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Python/python-lxml.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"lxml入门"}],["meta",{"property":"og:description","content":"lxml入门 1. 简介 lxml 是一个流行的解析库，使用Xpath语法 2. Xpath常用语法 XPath 使用路径表达式在 XML 文档中选取节点。节点是通过沿着路径或者 step 来选取的。 2.1 选取节点 下面列出了最有用的路径表达式： XPath 通配符可用来选取未知的 XML 元素。 通过在路径表达式中使用“|”运算符，可以选取若干个..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lxml入门\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. Xpath常用语法","slug":"_2-xpath常用语法","link":"#_2-xpath常用语法","children":[{"level":3,"title":"2.1 选取节点","slug":"_2-1-选取节点","link":"#_2-1-选取节点","children":[]}]},{"level":2,"title":"3. lxml用法","slug":"_3-lxml用法","link":"#_3-lxml用法","children":[{"level":3,"title":"3.1 初步使用","slug":"_3-1-初步使用","link":"#_3-1-初步使用","children":[]},{"level":3,"title":"3.2 文件读取","slug":"_3-2-文件读取","link":"#_3-2-文件读取","children":[]},{"level":3,"title":"3.3 XPath 实例测试","slug":"_3-3-xpath-实例测试","link":"#_3-3-xpath-实例测试","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.25,"words":1274},"filePathRelative":"posts/Python/python-lxml.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>lxml 是一个流行的解析库，使用Xpath语法</p>\\n<h2>2. Xpath常用语法</h2>\\n<p>XPath 使用路径表达式在 XML 文档中选取节点。节点是通过沿着路径或者 step 来选取的。</p>\\n<h3>2.1 选取节点</h3>\\n<p>下面列出了最有用的路径表达式：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>表达式</th>\\n<th>描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>nodename</td>\\n<td>选取此节点的所有子节点。</td>\\n</tr>\\n<tr>\\n<td>/</td>\\n<td>从根节点选取。</td>\\n</tr>\\n<tr>\\n<td>//</td>\\n<td>从匹配选择的当前节点选择文档中的节点，而不考虑它们的位置。</td>\\n</tr>\\n<tr>\\n<td>.</td>\\n<td>选取当前节点。</td>\\n</tr>\\n<tr>\\n<td>..</td>\\n<td>选取当前节点的父节点。</td>\\n</tr>\\n<tr>\\n<td>@</td>\\n<td>选取属性。</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{o as comp,B as data};
