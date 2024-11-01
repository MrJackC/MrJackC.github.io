import{_ as a,c as n,a as i,o as e}from"./app-tJW29Kmg.js";const l={};function o(p,s){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="flex布局-悬挂式布局" tabindex="-1"><a class="header-anchor" href="#flex布局-悬挂式布局"><span>flex布局-悬挂式布局</span></a></h1><p>有时，主栏的左侧或右侧，需要添加一个图片栏。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230909401.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>HTML代码如下。</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Media&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">img</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Media-figure&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> src</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> alt</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">p</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Media-body&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;">...</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">&lt;/p</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>CSS代码如下。</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.Media</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  display: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">flex</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  align-items: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">flex-start</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.Media-figure</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  margin-right: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">em</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.Media-body</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  flex: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div>`,7)]))}const r=a(l,[["render",o],["__file","flex-suspended-layout.html.vue"]]),B=JSON.parse('{"path":"/posts/Web/frontend-layout/flex-suspended-layout.html","title":"flex布局-悬挂式布局","lang":"zh-CN","frontmatter":{"created":"2024-05-13 20:48","updated":"2024-10-13 12:27","description":"flex布局-悬挂式布局 有时，主栏的左侧或右侧，需要添加一个图片栏。 imgimg HTML代码如下。 CSS代码如下。","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-layout/flex-suspended-layout.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"flex布局-悬挂式布局"}],["meta",{"property":"og:description","content":"flex布局-悬挂式布局 有时，主栏的左侧或右侧，需要添加一个图片栏。 imgimg HTML代码如下。 CSS代码如下。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230909401.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"flex布局-悬挂式布局\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230909401.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.29,"words":86},"filePathRelative":"posts/Web/frontend-layout/flex-suspended-layout.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>有时，主栏的左侧或右侧，需要添加一个图片栏。</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230909401.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>\\n<p>HTML代码如下。</p>\\n<div class=\\"language-html\\" data-ext=\\"html\\" data-title=\\"html\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> class</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"Media\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">img</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> class</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"Media-figure\\"</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> src</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"\\"</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> alt</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">p</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> class</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"Media-body\\"</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">...</span><span style=\\"color:#FFFFFF;--shiki-dark:#FFFFFF\\">&lt;/p</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span></code></pre>\\n</div>","autoDesc":true}');export{r as comp,B as data};
