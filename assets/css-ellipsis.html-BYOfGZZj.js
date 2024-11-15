import{_ as a,c as n,a as e,o as i}from"./app-fWubcX7c.js";const l={};function t(p,s){return i(),n("div",null,s[0]||(s[0]=[e(`<h1 id="css文本超出就隐藏并且显示省略号" tabindex="-1"><a class="header-anchor" href="#css文本超出就隐藏并且显示省略号"><span>css文本超出就隐藏并且显示省略号</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>css文本超出就隐藏并且显示省略号，非常常见的需求。但也有一些坑。特此记录一下</p><h2 id="_2-实现" tabindex="-1"><a class="header-anchor" href="#_2-实现"><span>2. 实现</span></a></h2><h3 id="_2-1-单行实现" tabindex="-1"><a class="header-anchor" href="#_2-1-单行实现"><span>2.1 单行实现</span></a></h3><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">overflow:hidden;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> //</span><span style="color:#C678DD;--shiki-dark:#C678DD;">超出的文本隐藏</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">text-overflow</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:ellipsis;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> //</span><span style="color:#C678DD;--shiki-dark:#C678DD;">溢出用省略号显示</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">white-space</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:nowrap;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> //</span><span style="color:#C678DD;--shiki-dark:#C678DD;">溢出不换行</span></span></code></pre></div><h3 id="_2-2-两行的内容时候" tabindex="-1"><a class="header-anchor" href="#_2-2-两行的内容时候"><span>2.2 <strong>两行的内容时候</strong></span></a></h3><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">overflow: hidden;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">text-overflow</span><span style="color:#C678DD;--shiki-dark:#C678DD;">: ellipsis;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">display:-webkit-box;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> //</span><span style="color:#C678DD;--shiki-dark:#C678DD;">作为弹性伸缩盒子模型显示。</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">-webkit-box-orient:vertical;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> //</span><span style="color:#C678DD;--shiki-dark:#C678DD;">设置伸缩盒子的子元素排列方式--从上到下垂直排列</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">-webkit-line-clamp:2;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> //</span><span style="color:#C678DD;--shiki-dark:#C678DD;">显示的行</span></span></code></pre></div><h2 id="_3-遇到的坑" tabindex="-1"><a class="header-anchor" href="#_3-遇到的坑"><span>3. 遇到的坑</span></a></h2><h3 id="_3-1-flex布局与white-space-nowrap-冲突问题" tabindex="-1"><a class="header-anchor" href="#_3-1-flex布局与white-space-nowrap-冲突问题"><span>3.1 flex布局与white-space: nowrap 冲突问题</span></a></h3><p>如果我们flex布局的<strong>孙子容器</strong>中包含了white-space: nowrap。那么他可能会失效。</p><p>如</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">view</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;content&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">			&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">view</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;left&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">				&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">view</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;text&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;我是测试文本我有这么这么长，我是测试文本我有这么这么长，我是测试文本我有这么这么长，我是测试文本我有这么这么长&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">view</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">				&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">view</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;描述文字&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">view</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">			&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">view</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">			&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">view</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;right&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;查看详情&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">view</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">view</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>css属性</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.content</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		display: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">flex</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		flex-direction: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">row</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		.left{</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">			flex: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">			.text {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">				font-size: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">50</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">rpx;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">				overflow: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">hidden</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">				text-overflow: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">ellipsis</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">				white-space: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">nowrap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">			}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">		.right</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">			width: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">rpx;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">			background-color: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">#ff0000</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-1-解决办法" tabindex="-1"><a class="header-anchor" href="#_3-1-1-解决办法"><span>3.1.1 解决办法</span></a></h4><p>在子容器中新增 min-width: 0;</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">.left</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">			flex: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">			min-width: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="_3-2-在uniapp-的text标签中省略号不生效" tabindex="-1"><a class="header-anchor" href="#_3-2-在uniapp-的text标签中省略号不生效"><span>3.2 在uniapp 的text标签中省略号不生效</span></a></h3><p>如果是<code>&lt;text&gt;</code> 标签</p><blockquote><p>Ps:text 标签设置宽度都不管用</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230859808.png" alt="image-20220401214519580" tabindex="0" loading="lazy"><figcaption>image-20220401214519580</figcaption></figure><h4 id="_3-2-1-解决办法" tabindex="-1"><a class="header-anchor" href="#_3-2-1-解决办法"><span>3.2.1 解决办法</span></a></h4><p>换成<code>&lt;view&gt;</code>标签就可以</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230859851.png" alt="image-20220401214627701" tabindex="0" loading="lazy"><figcaption>image-20220401214627701</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/u013868665/article/details/78893158" target="_blank" rel="noopener noreferrer">css 文本超出就隐藏并且显示省略号</a></p>`,27)]))}const o=a(l,[["render",t],["__file","css-ellipsis.html.vue"]]),c=JSON.parse('{"path":"/posts/Web/frontend-css/css-ellipsis.html","title":"css文本超出就隐藏并且显示省略号","lang":"zh-CN","frontmatter":{"description":"css文本超出就隐藏并且显示省略号 1. 简介 css文本超出就隐藏并且显示省略号，非常常见的需求。但也有一些坑。特此记录一下 2. 实现 2.1 单行实现 2.2 两行的内容时候 3. 遇到的坑 3.1 flex布局与white-space: nowrap 冲突问题 如果我们flex布局的孙子容器中包含了white-space: nowrap。那么他...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-css/css-ellipsis.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"css文本超出就隐藏并且显示省略号"}],["meta",{"property":"og:description","content":"css文本超出就隐藏并且显示省略号 1. 简介 css文本超出就隐藏并且显示省略号，非常常见的需求。但也有一些坑。特此记录一下 2. 实现 2.1 单行实现 2.2 两行的内容时候 3. 遇到的坑 3.1 flex布局与white-space: nowrap 冲突问题 如果我们flex布局的孙子容器中包含了white-space: nowrap。那么他..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230859808.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"css文本超出就隐藏并且显示省略号\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230859808.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230859851.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 实现","slug":"_2-实现","link":"#_2-实现","children":[{"level":3,"title":"2.1 单行实现","slug":"_2-1-单行实现","link":"#_2-1-单行实现","children":[]},{"level":3,"title":"2.2 两行的内容时候","slug":"_2-2-两行的内容时候","link":"#_2-2-两行的内容时候","children":[]}]},{"level":2,"title":"3. 遇到的坑","slug":"_3-遇到的坑","link":"#_3-遇到的坑","children":[{"level":3,"title":"3.1 flex布局与white-space: nowrap 冲突问题","slug":"_3-1-flex布局与white-space-nowrap-冲突问题","link":"#_3-1-flex布局与white-space-nowrap-冲突问题","children":[]},{"level":3,"title":"3.2 在uniapp 的text标签中省略号不生效","slug":"_3-2-在uniapp-的text标签中省略号不生效","link":"#_3-2-在uniapp-的text标签中省略号不生效","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.36,"words":409},"filePathRelative":"posts/Web/frontend-css/css-ellipsis.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>css文本超出就隐藏并且显示省略号，非常常见的需求。但也有一些坑。特此记录一下</p>\\n<h2>2. 实现</h2>\\n<h3>2.1 单行实现</h3>\\n<div class=\\"language-css\\" data-ext=\\"css\\" data-title=\\"css\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">overflow:hidden;</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> //</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">超出的文本隐藏</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">text-overflow</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">:ellipsis;</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> //</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">溢出用省略号显示</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">white-space</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">:nowrap;</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> //</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">溢出不换行</span></span></code></pre>\\n</div>","autoDesc":true}');export{o as comp,c as data};
