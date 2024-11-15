import{_ as a,c as n,a as l,o as i}from"./app-fWubcX7c.js";const o={};function e(t,s){return i(),n("div",null,s[0]||(s[0]=[l(`<h1 id="beautifulsoup入门" tabindex="-1"><a class="header-anchor" href="#beautifulsoup入门"><span>BeautifulSoup入门</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p><strong>Beautiful Soup</strong> 是一个可以从 <strong>HTML</strong> 或 <strong>XML</strong> 文件中提取数据的 <strong>Python</strong> 库.它能够通过你喜欢的转换器实现惯用的文档导航,查找,修改文档的方式.<strong>Beautiful Soup</strong> 会帮你节省数小时甚至数天的工作时间.</p><h2 id="_2-简单用法" tabindex="-1"><a class="header-anchor" href="#_2-简单用法"><span>2. 简单用法</span></a></h2><p>将一段文档传入 <strong>BeautifulSoup</strong> 的构造方法,就能得到一个文档的对象, 可以传入一段字符串或一个文件句柄.</p><div class="language-python" data-ext="python" data-title="python"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> bs4 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> BeautifulSoup</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> soup </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> BeautifulSoup</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&lt;html&gt;&lt;body&gt;&lt;p&gt;data&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> soup</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">html</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">body</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">p</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">data</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">p</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">body</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">html</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> soup</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;p&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">p</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">data</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">p</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span></code></pre></div><ol><li><p>首先传入一个 <strong>html</strong> 文档，<code>soup</code> 是获得文档的对象。</p></li><li><p>然后,文档被转换成 <strong>Unicode</strong> ,并且 <strong>HTML</strong> 的实例都被转换成 <strong>Unicode</strong> 编码。</p></li><li><p>然后,<strong>Beautiful Soup</strong> 选择最合适的解析器来解析这段文档,</p><p>如果手动指定解析器那么 <strong>Beautiful Soup</strong> 会选择指定的解析器来解析文档。但是一般最好手动指定解析器，</p></li></ol><ul><li>要解析的文档是什么类型: 目前支持, <strong>html, xml,</strong> 和 <strong>html5</strong></li><li>指定使用哪种解析器: 目前支持, <strong>lxml, html5lib,</strong> 和 <strong>html.parser</strong></li></ul><div class="language-python" data-ext="python" data-title="python"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> bs4 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> BeautifulSoup</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">html </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> requests.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">get</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(‘http:</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">//</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">www.jianshu.com</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">’).content  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">soup </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> BeautifulSoup</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(html, </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;html.parser&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">from_encoding</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;utf-8&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">result </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> soup</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;div&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><h2 id="_3-对象种类" tabindex="-1"><a class="header-anchor" href="#_3-对象种类"><span>3. 对象种类</span></a></h2><p><strong>Beautiful Soup</strong> 将复杂 <strong>HTML</strong> 文档转换成一个复杂的树形结构,每个节点都是 <strong>Python</strong> 对象,所有对象可以归纳为 4 种: <code>Tag , NavigableString , BeautifulSoup , Comment .</code></p><ul><li><p><code>Tag</code>：通俗点讲就是 <strong>HTML</strong> 中的一个个标签，像上面的 <code>div，p</code>。每个 <code>Tag</code> 有两个重要的属性 <code>name</code> 和 <code>attrs，name</code> 指标签的名字或者 <code>tag</code> 本身的 <code>name，attrs</code> 通常指一个标签的 <code>class</code>。</p></li><li><p><code>NavigableString</code>：获取标签内部的文字，如，<code>soup.p.string</code>。</p></li><li><p><code>BeautifulSoup</code>：表示一个文档的全部内容。</p></li><li><p><code>Comment：Comment</code> 对象是一个特殊类型的 <code>NavigableString</code> 对象，其输出的内容不包括注释符号.</p></li></ul><h2 id="_4-示例" tabindex="-1"><a class="header-anchor" href="#_4-示例"><span>4. 示例</span></a></h2><p>如下示例，<strong>Beautiful Soup</strong> 的常见用法</p><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> sys  </span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">reload</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(sys)  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">sys.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setdefaultencoding</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;utf-8&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> bs4 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> BeautifulSoup</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> requests</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">html_doc </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">      &lt;meta charset=&quot;utf-8&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">      &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=Edge&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    &lt;title&gt;首页 - 简书&lt;/title&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">&lt;/head&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">&lt;body class=&quot;output fluid zh cn win reader-day-mode reader-font2 &quot; data-js-module=&quot;recommendation&quot; data-locale=&quot;zh-CN&quot;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">&lt;ul class=&quot;article-list thumbnails&quot;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  &lt;li class=have-img&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">      &lt;a class=&quot;wrap-img&quot; href=&quot;/p/49c4728c3ab2&quot;&gt;&lt;img src=&quot;http://upload-images.jianshu.io/upload_images/2442470-745c6471c6f8258c.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300&quot; alt=&quot;300&quot; /&gt;&lt;/a&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">      &lt;p class=&quot;list-top&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">        &lt;a class=&quot;author-name blue-link&quot; target=&quot;_blank&quot; href=&quot;/users/0af6b163b687&quot;&gt;阿随向前冲&lt;/a&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">        &lt;em&gt;·&lt;/em&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">        &lt;span class=&quot;time&quot; data-shared-at=&quot;2016-07-27T07:03:54+08:00&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">      &lt;/p&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">      &lt;h4 class=&quot;title&quot;&gt;&lt;a target=&quot;_blank&quot; href=&quot;/p/49c4728c3ab2&quot;&gt; 只装了这六款软件，工作就高效到有时间逛某宝刷某圈&lt;/a&gt;&lt;/h4&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">      &lt;div class=&quot;list-footer&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">        &lt;a target=&quot;_blank&quot; href=&quot;/p/49c4728c3ab2&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">          阅读 1830</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">&lt;/a&gt;        &lt;a target=&quot;_blank&quot; href=&quot;/p/49c4728c3ab2#comments&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">           · 评论 35</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">&lt;/a&gt;        &lt;span&gt; · 喜欢 95&lt;/span&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">          &lt;span&gt; · 打赏 1&lt;/span&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">        </span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  &lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">&lt;/ul&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">soup </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> BeautifulSoup</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(html_doc, </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;html.parser&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">from_encoding</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;utf-8&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查找所有有关的节点</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">tags </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> soup.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">find_all</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;li&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">class_</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;have-img&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">for</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tag </span><span style="color:#C678DD;--shiki-dark:#C678DD;">in</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tags:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        image </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tag.img[</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;src&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        article_user </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tag.p.a.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">get_text</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        article_user_url </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tag.p.a[</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;href&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]      </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        created </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tag.p.span[</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;data-shared-at&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]        </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        article_url </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tag.h4.a[</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;href&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 可以在查找的 tag 下继续使用 find_all()</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        tag_span </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tag.div.div.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">find_all</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;span&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        likes </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tag_span[</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">].</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">get_text</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">strip</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">True</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-find-all" tabindex="-1"><a class="header-anchor" href="#_4-1-find-all"><span>4.1 find_all()</span></a></h3><p><strong>BeautifulSoup</strong> 主要用来遍历子节点及子节点的属性，通过点取属性的方式只能获得当前文档中的第一个 <code>tag</code>，例如，<code>soup.li</code>。如果想要得到所有的<code>&lt;li&gt;</code> 标签,或是通过名字得到比一个 <code>tag</code> 更多的内容的时候,就需要用到 <code>find_all()</code>，<code>find_all()</code> 方法搜索当前 tag 的所有 tag 子节点,并判断是否符合过滤器的条件<code>find_all()</code> 所接受的参数如下：</p><div class="language-cpp" data-ext="cpp" data-title="cpp"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">find_all</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">( name , attrs , recursive , string , </span><span style="color:#C678DD;--shiki-dark:#C678DD;">**</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">kwargs )</span></span></code></pre></div><ol><li><p>按 <code>name</code> 搜索: <code>name</code> 参数可以查找所有名字为 <code>name</code> 的 <code>tag</code>,字符串对象会被自动忽略掉:</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> soup.find_all(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;li&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div></li><li><p>按 <code>id</code> 搜索: 如果包含一个名字为 <code>id</code> 的参数,搜索时会把该参数当作指定名字 <code>tag</code> 的属性来搜索:</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> soup.find_all(id</span><span style="color:#98C379;--shiki-dark:#98C379;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&#39;link2&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div></li><li><p>按 <code>attr</code> 搜索：有些 <code>tag</code> 属性在搜索不能使用,比如 <strong>HTML5</strong> 中的 <code>data-*</code> 属性，但是可以通过 <code>find_all()</code> 方法的 <code>attrs</code> 参数定义一个字典参数来搜索包含特殊属性的 <code>tag</code>:</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> data_soup.find_all(attrs</span><span style="color:#98C379;--shiki-dark:#98C379;">={</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">data-foo</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;: &quot;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">value</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;})</span></span></code></pre></div></li><li><p>按 <code>CSS</code> 搜索: 按照 <code>CSS</code> 类名搜索 <code>tag</code> 的功能非常实用,但标识<code>CSS</code> 类名的关键字 <code>class</code> 在 <strong>Python</strong> 中是保留字,使用 <code>class</code> 做参数会导致语法错误.从 <strong>Beautiful Soup</strong> 的 4.1.1 版本开始,可以通过 <code>class_</code> 参数搜索有指定 <code>CSS</code> 类名的 <code>tag</code>:</p><div class="language-ruby" data-ext="ruby" data-title="ruby"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> soup.find_all(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;li&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, class_</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;have-img&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div></li><li><p><code>string</code> 参数：通过 <code>string</code> 参数可以搜搜文档中的字符串内容.与 <code>name</code> 参数的可选值一样, <code>string</code> 参数接受 字符串 , 正则表达式 , 列表, <code>True</code> 。 看例子:</p><div class="language-cpp" data-ext="cpp" data-title="cpp"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> soup</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">find_all</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;a&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, string</span><span style="color:#C678DD;--shiki-dark:#C678DD;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Elsie&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div></li><li><p><code>recursive</code> 参数：调用 <code>tag</code> 的 <code>find_all()</code> 方法时,<strong>Beautiful Soup</strong> 会检索当前 <code>tag</code> 的所有子孙节点,如果只想搜索 <code>tag</code> 的直接子节点,可以使用参数 <code>recursive=False</code> .</p><div class="language-php" data-ext="php" data-title="php"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> soup</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">find_all</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;title&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> recursive</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">False</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div></li></ol><blockquote><p><strong>find_all()</strong> 几乎是 <strong>Beautiful Soup</strong>中最常用的搜索方法,也可以使用其简写方法，以下代码等价：</p><div class="language-python" data-ext="python" data-title="python"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    soup.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">find_all</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;a&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    soup</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;a&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div></blockquote><h3 id="_4-2-get-text" tabindex="-1"><a class="header-anchor" href="#_4-2-get-text"><span>4.2 get_text()</span></a></h3><p>如果只想得到 <code>tag</code> 中包含的文本内容,那么可以用 <code>get_text()</code> 方法,这个方法获取到 <code>tag</code> 中包含的所有文版内容包括子孙 <code>tag</code> 中的内容,并将结果作为 <code>Unicode</code> 字符串返回:</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    tag</span><span style="color:#D19A66;--shiki-dark:#D19A66;">.p.a</span><span style="color:#C678DD;--shiki-dark:#C678DD;">.get_text(</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.jianshu.com/p/2b783f7914c6" target="_blank" rel="noopener noreferrer">python：BeautifulSoup 模块使用指南</a></p>`,25)]))}const r=a(o,[["render",e],["__file","python-beautiful-soup-started.html.vue"]]),d=JSON.parse('{"path":"/posts/Python/python-beautiful-soup-started.html","title":"BeautifulSoup入门","lang":"zh-CN","frontmatter":{"description":"BeautifulSoup入门 1. 简介 Beautiful Soup 是一个可以从 HTML 或 XML 文件中提取数据的 Python 库.它能够通过你喜欢的转换器实现惯用的文档导航,查找,修改文档的方式.Beautiful Soup 会帮你节省数小时甚至数天的工作时间. 2. 简单用法 将一段文档传入 BeautifulSoup 的构造方法,就...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Python/python-beautiful-soup-started.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"BeautifulSoup入门"}],["meta",{"property":"og:description","content":"BeautifulSoup入门 1. 简介 Beautiful Soup 是一个可以从 HTML 或 XML 文件中提取数据的 Python 库.它能够通过你喜欢的转换器实现惯用的文档导航,查找,修改文档的方式.Beautiful Soup 会帮你节省数小时甚至数天的工作时间. 2. 简单用法 将一段文档传入 BeautifulSoup 的构造方法,就..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"BeautifulSoup入门\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 简单用法","slug":"_2-简单用法","link":"#_2-简单用法","children":[]},{"level":2,"title":"3. 对象种类","slug":"_3-对象种类","link":"#_3-对象种类","children":[]},{"level":2,"title":"4. 示例","slug":"_4-示例","link":"#_4-示例","children":[{"level":3,"title":"4.1 find_all()","slug":"_4-1-find-all","link":"#_4-1-find-all","children":[]},{"level":3,"title":"4.2 get_text()","slug":"_4-2-get-text","link":"#_4-2-get-text","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.42,"words":1326},"filePathRelative":"posts/Python/python-beautiful-soup-started.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p><strong>Beautiful Soup</strong> 是一个可以从 <strong>HTML</strong> 或 <strong>XML</strong> 文件中提取数据的 <strong>Python</strong> 库.它能够通过你喜欢的转换器实现惯用的文档导航,查找,修改文档的方式.<strong>Beautiful Soup</strong> 会帮你节省数小时甚至数天的工作时间.</p>\\n<h2>2. 简单用法</h2>\\n<p>将一段文档传入 <strong>BeautifulSoup</strong> 的构造方法,就能得到一个文档的对象, 可以传入一段字符串或一个文件句柄.</p>","autoDesc":true}');export{r as comp,d as data};
