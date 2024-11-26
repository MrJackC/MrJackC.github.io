import{_ as a,c as l,a as n,o as i}from"./app-JRvFIbSa.js";const t={};function B(o,s){return i(),l("div",null,s[0]||(s[0]=[n(`<h1 id="python爬虫-xpath详解" tabindex="-1"><a class="header-anchor" href="#python爬虫-xpath详解"><span>Python爬虫 - XPath详解</span></a></h1><h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述"><span>1. 概述</span></a></h2><p>XPath，全称 XML Path Language，即 XML 路径语言，它是一门在XML文档中查找信息的语言。XPath 最初设计是用来搜寻XML文档的，但是它同样适用于 HTML 文档的搜索。</p><p>所以在做爬虫时，我们完全可以使用 XPath 来做相应的信息抽取，本节我们来介绍一下 XPath 的基本用法。</p><blockquote><p>XPath 的选择功能十分强大，它提供了非常简洁明了的路径选择表达式，另外它还提供了超过 100 个内建函数用于字符串、数值、时间的匹配以及节点、序列的处理等等，几乎所有我们想要定位的节点都可以用XPath来选择。</p><p>XPath 于 1999 年 11 月 16 日 成为 W3C 标准，它被设计为供 XSLT、XPointer 以及其他 XML 解析软件使用，更多的文档可以访问其官方网站：<a href="https://link.zhihu.com/?target=https%3A//www.w3.org/TR/xpath/" target="_blank" rel="noopener noreferrer">https://www.w3.org/TR/xpath/</a>。</p></blockquote><h2 id="_2-xpath常用规则" tabindex="-1"><a class="header-anchor" href="#_2-xpath常用规则"><span>2. XPath常用规则</span></a></h2><p>我们现用表格列举一下几个常用规则：</p><p>表达式描述</p><ul><li>nodename选取此节点的所有子节点</li><li>/从当前节点选取直接子节点</li><li>//从当前节点选取子孙节点</li><li>.选取当前节点</li><li>..选取当前节点的父节点</li><li>@选取属性</li></ul><blockquote><p>在这里列出了XPath的常用匹配规则，例如 / 代表选取直接子节点，// 代表选择所有子孙节点，. 代表选取当前节点，.. 代表选取当前节点的父节点，@ 则是加了属性的限定，选取匹配属性的特定节点。</p></blockquote><p>例如：</p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>//title[@lang=’eng’]</span></span></code></pre></div><p>这就是一个 XPath 规则，它就代表选择所有名称为 title，同时属性 lang 的值为 eng 的节点。</p><p>在后文我们会介绍 XPath 的详细用法，通过 Python 的 LXML 库利用 XPath 进行 HTML 的解析。</p><h2 id="_3-准备工作" tabindex="-1"><a class="header-anchor" href="#_3-准备工作"><span>3. 准备工作</span></a></h2><p>在使用之前我们首先要确保安装好了 LXML 库</p><h2 id="_4-实例引入" tabindex="-1"><a class="header-anchor" href="#_4-实例引入"><span>4. 实例引入</span></a></h2><p>我们现用一个实例来感受一下使用 XPath 来对网页进行解析的过程，代码如下：</p><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> lxml </span><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> etree</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">text </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">         &lt;li class=&quot;item-0&quot;&gt;&lt;a href=&quot;https://ask.hellobi.com/link1.html&quot;&gt;first item&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">         &lt;li class=&quot;item-1&quot;&gt;&lt;a href=&quot;https://ask.hellobi.com/link2.html&quot;&gt;second item&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">         &lt;li class=&quot;item-inactive&quot;&gt;&lt;a href=&quot;https://ask.hellobi.com/link3.html&quot;&gt;third item&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">         &lt;li class=&quot;item-1&quot;&gt;&lt;a href=&quot;https://ask.hellobi.com/link4.html&quot;&gt;fourth item&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">         &lt;li class=&quot;item-0&quot;&gt;&lt;a href=&quot;https://ask.hellobi.com/link5.html&quot;&gt;fifth item&lt;/a&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">     &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;"> &lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">html </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> etree.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">HTML</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(text)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">result </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> etree.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tostring</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(html)</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">print</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(result.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">decode</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;utf-8&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">))</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里我们首先导入了 LXML 库的 etree 模块，然后声明了一段 HTML 文本，调用 HTML 类进行初始化，这样我们就成功构造了一个 XPath 解析对象，在这里注意到 HTML 文本中的最后一个 li 节点是没有闭合的，但是 etree 模块可以对 HTML 文本进行自动修正。</p><p>在这里我们调用 tostring() 方法即可输出修正后的 HTML 代码，但是结果是 bytes 类型，在这里我们利用 decode() 方法转成 str 类型，结果如下：</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">html</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">body</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">ul</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-0&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> href</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link1.html&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;first item&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-1&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> href</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link2.html&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;second item&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-inactive&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> href</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link3.html&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;third item&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-1&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> href</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link4.html&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;fourth item&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-0&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> href</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link5.html&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;fifth item&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">     &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">ul</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">body</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">html</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>我们可以看到经过处理之后 li 节点标签被补全，并且还自动添加了 body、html 节点。</p><p>另外我们也可以直接读取文本文件进行解析，示例如下：</p><div class="language-python" data-ext="python" data-title="python"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> lxml </span><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> etree</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">html </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> etree.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">parse</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;./test.html&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, etree.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">HTMLParser</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">())</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">result </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> etree.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tostring</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(html)</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">print</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(result.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">decode</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;utf-8&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">))</span></span></code></pre></div><p>其中 test.html 的内容就是上面例子中的 HTML 代码，内容如下：</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">ul</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-0&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> href</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link1.html&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;first item&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-1&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> href</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link2.html&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;second item&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-inactive&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> href</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link3.html&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;third item&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-1&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> href</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link4.html&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;fourth item&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-0&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> href</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link5.html&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;fifth item&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">     &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">ul</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>这次的输出结果略有不同，多了一个 DOCTYPE 的声明，不过对解析无任何影响，结果如下：</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;!</span><span style="color:#E06C75;--shiki-dark:#E06C75;">DOCTYPE</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> html</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> PUBLIC</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;-//W3C//DTD HTML 4.0 Transitional//EN&quot;</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;http://www.w3.org/TR/REC-html40/loose.dtd&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">html</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">body</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">ul</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-0&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> href</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link1.html&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;first item&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-1&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> href</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link2.html&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;second item&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-inactive&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> href</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link3.html&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;third item&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-1&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> href</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link4.html&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;fourth item&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item-0&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> href</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;link5.html&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;fifth item&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">     &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">li</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">ul</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">body</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">html</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div>`,29)]))}const r=a(t,[["render",B],["__file","python-x-xpath.html.vue"]]),e=JSON.parse('{"path":"/posts/Python/python-x-xpath.html","title":"Python爬虫 - XPath详解","lang":"zh-CN","frontmatter":{"description":"Python爬虫 - XPath详解 1. 概述 XPath，全称 XML Path Language，即 XML 路径语言，它是一门在XML文档中查找信息的语言。XPath 最初设计是用来搜寻XML文档的，但是它同样适用于 HTML 文档的搜索。 所以在做爬虫时，我们完全可以使用 XPath 来做相应的信息抽取，本节我们来介绍一下 XPath 的基本...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Python/python-x-xpath.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Python爬虫 - XPath详解"}],["meta",{"property":"og:description","content":"Python爬虫 - XPath详解 1. 概述 XPath，全称 XML Path Language，即 XML 路径语言，它是一门在XML文档中查找信息的语言。XPath 最初设计是用来搜寻XML文档的，但是它同样适用于 HTML 文档的搜索。 所以在做爬虫时，我们完全可以使用 XPath 来做相应的信息抽取，本节我们来介绍一下 XPath 的基本..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python爬虫 - XPath详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 概述","slug":"_1-概述","link":"#_1-概述","children":[]},{"level":2,"title":"2. XPath常用规则","slug":"_2-xpath常用规则","link":"#_2-xpath常用规则","children":[]},{"level":2,"title":"3. 准备工作","slug":"_3-准备工作","link":"#_3-准备工作","children":[]},{"level":2,"title":"4. 实例引入","slug":"_4-实例引入","link":"#_4-实例引入","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.6,"words":1080},"filePathRelative":"posts/Python/python-x-xpath.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 概述</h2>\\n<p>XPath，全称 XML Path Language，即 XML 路径语言，它是一门在XML文档中查找信息的语言。XPath 最初设计是用来搜寻XML文档的，但是它同样适用于 HTML 文档的搜索。</p>\\n<p>所以在做爬虫时，我们完全可以使用 XPath 来做相应的信息抽取，本节我们来介绍一下 XPath 的基本用法。</p>\\n<blockquote>\\n<p>XPath 的选择功能十分强大，它提供了非常简洁明了的路径选择表达式，另外它还提供了超过 100 个内建函数用于字符串、数值、时间的匹配以及节点、序列的处理等等，几乎所有我们想要定位的节点都可以用XPath来选择。</p>\\n<p>XPath 于 1999 年 11 月 16 日 成为 W3C 标准，它被设计为供 XSLT、XPointer 以及其他 XML 解析软件使用，更多的文档可以访问其官方网站：<a href=\\"https://link.zhihu.com/?target=https%3A//www.w3.org/TR/xpath/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.w3.org/TR/xpath/</a>。</p>\\n</blockquote>","autoDesc":true}');export{r as comp,e as data};
