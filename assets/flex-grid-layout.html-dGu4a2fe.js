import{_ as a,c as n,a as l,o as i}from"./app-mWs04Xnh.js";const e={};function r(p,s){return i(),n("div",null,s[0]||(s[0]=[l(`<h1 id="flex布局-网格布局" tabindex="-1"><a class="header-anchor" href="#flex布局-网格布局"><span>flex布局-网格布局</span></a></h1><ol><li>基本网格布局</li></ol><p>最简单的网格布局，就是平均分布。在容器里面平均分配空间，跟上面的骰子布局很像，但是需要设置项目的自动缩放。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230908128.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>HTML代码如下。</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Grid&quot;</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">  &lt;div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Grid-cell&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;...&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Grid-cell&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;...&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Grid-cell&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;...&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>CSS代码如下。</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.Grid</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  display: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">flex</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.Grid-cell</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  flex: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="_2-百分比布局" tabindex="-1"><a class="header-anchor" href="#_2-百分比布局"><span>2. 百分比布局</span></a></h2><p>某个网格的宽度为固定的百分比，其余网格平均分配剩余的空间。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230908166.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>HTML代码如下。</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Grid&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Grid-cell u-1of4&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;...&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Grid-cell&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;...&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Grid-cell u-1of3&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;...&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.Grid</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  display: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">flex</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.Grid-cell</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  flex: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.Grid-cell.u-full</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  flex: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.Grid-cell.u-1of2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  flex: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 50</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.Grid-cell.u-1of3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  flex: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 33.3333</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.Grid-cell.u-1of4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  flex: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 25</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="http://www.ruanyifeng.com/blog/2015/07/flex-examples.html" target="_blank" rel="noopener noreferrer">Flex 布局教程：实例篇</a></p>`,16)]))}const B=a(e,[["render",r],["__file","flex-grid-layout.html.vue"]]),t=JSON.parse('{"path":"/posts/Web/frontend-layout/flex-grid-layout.html","title":"flex布局-网格布局","lang":"zh-CN","frontmatter":{"created":"2024-05-13 20:48","updated":"2024-10-13 12:27","description":"flex布局-网格布局 基本网格布局 最简单的网格布局，就是平均分布。在容器里面平均分配空间，跟上面的骰子布局很像，但是需要设置项目的自动缩放。 imgimg HTML代码如下。 CSS代码如下。 2. 百分比布局 某个网格的宽度为固定的百分比，其余网格平均分配剩余的空间。 imgimg HTML代码如下。 参考文章 Flex 布局教程：实例篇","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-layout/flex-grid-layout.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"flex布局-网格布局"}],["meta",{"property":"og:description","content":"flex布局-网格布局 基本网格布局 最简单的网格布局，就是平均分布。在容器里面平均分配空间，跟上面的骰子布局很像，但是需要设置项目的自动缩放。 imgimg HTML代码如下。 CSS代码如下。 2. 百分比布局 某个网格的宽度为固定的百分比，其余网格平均分配剩余的空间。 imgimg HTML代码如下。 参考文章 Flex 布局教程：实例篇"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230908128.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"flex布局-网格布局\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230908128.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230908166.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"2. 百分比布局","slug":"_2-百分比布局","link":"#_2-百分比布局","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.79,"words":237},"filePathRelative":"posts/Web/frontend-layout/flex-grid-layout.md","localizedDate":"2024年10月21日","excerpt":"\\n<ol>\\n<li>基本网格布局</li>\\n</ol>\\n<p>最简单的网格布局，就是平均分布。在容器里面平均分配空间，跟上面的骰子布局很像，但是需要设置项目的自动缩放。</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230908128.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>\\n<p>HTML代码如下。</p>\\n<div class=\\"language-html\\" data-ext=\\"html\\" data-title=\\"html\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> class</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"Grid\\"</span></span>\\n<span class=\\"line\\"><span style=\\"color:#FFFFFF;--shiki-dark:#FFFFFF\\">  &lt;div</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> class</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"Grid-cell\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;...&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> class</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"Grid-cell\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;...&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> class</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"Grid-cell\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;...&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span></code></pre>\\n</div>","autoDesc":true}');export{B as comp,t as data};
