import{_ as a,c as s,a as t,o as l}from"./app-4x2aIoqi.js";const n={};function o(i,e){return l(),s("div",null,e[0]||(e[0]=[t(`<h1 id="element-吐槽点" tabindex="-1"><a class="header-anchor" href="#element-吐槽点"><span>Element-吐槽点</span></a></h1><h2 id="_1-关于-el-radio-group-增加垂直排列的建议" tabindex="-1"><a class="header-anchor" href="#_1-关于-el-radio-group-增加垂直排列的建议"><span>1. 关于 el-radio-group 增加垂直排列的建议</span></a></h2><p><a href="https://github.com/ElemeFE/element/issues/3037" target="_blank" rel="noopener noreferrer">关于 el-radio-group 增加垂直排列的建议</a></p><blockquote><p>官方回复：没有太多人有这个需求，可能暂时没有这个计划，你可以用CSS处理。</p></blockquote><p>这么简单的需求，硬是不加。需要自己实现。一大堆评论要求加，视而不见。</p><p>2017 年提的，现在都2022年了，还没解决</p><h3 id="_1-1-解决方案-增加div" tabindex="-1"><a class="header-anchor" href="#_1-1-解决方案-增加div"><span>1.1 解决方案: 增加div</span></a></h3><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">template</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">el-radio-group</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> v-model</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;selectMod&quot;</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> size</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;small&quot;</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> type</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;vertical&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> v-for</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">=</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> index</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> of</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> 3&gt;</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> &lt;el-radio-button</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> label</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;第一列&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">el-radio-button</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">el-radio-group</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">template</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span></code></pre></div><h2 id="_2-可搜索cascader-级联选择器使用时-多次搜索错误的内容-点击下拉无匹配数据区域-会-导致-页面卡死" tabindex="-1"><a class="header-anchor" href="#_2-可搜索cascader-级联选择器使用时-多次搜索错误的内容-点击下拉无匹配数据区域-会-导致-页面卡死"><span>2. 可搜索Cascader 级联选择器使用时 多次搜索错误的内容，点击下拉无匹配数据区域 会 导致 页面卡死</span></a></h2><p><a href="https://github.com/ElemeFE/element/issues/22006#top" target="_blank" rel="noopener noreferrer">Bug Report] 可搜索Cascader 级联选择器使用时 多次搜索错误的内容，点击下拉无匹配数据区域 会 导致 页面卡死</a></p>`,10)]))}const p=a(n,[["render",o],["__file","fe-lib-element-teasing.html.vue"]]),c=JSON.parse('{"path":"/posts/Web/frontend-lib/fe-lib-element-teasing.html","title":"Element-吐槽点","lang":"zh-CN","frontmatter":{"description":"Element-吐槽点 1. 关于 el-radio-group 增加垂直排列的建议 关于 el-radio-group 增加垂直排列的建议 官方回复：没有太多人有这个需求，可能暂时没有这个计划，你可以用CSS处理。 这么简单的需求，硬是不加。需要自己实现。一大堆评论要求加，视而不见。 2017 年提的，现在都2022年了，还没解决 1.1 解决方案:...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-lib/fe-lib-element-teasing.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Element-吐槽点"}],["meta",{"property":"og:description","content":"Element-吐槽点 1. 关于 el-radio-group 增加垂直排列的建议 关于 el-radio-group 增加垂直排列的建议 官方回复：没有太多人有这个需求，可能暂时没有这个计划，你可以用CSS处理。 这么简单的需求，硬是不加。需要自己实现。一大堆评论要求加，视而不见。 2017 年提的，现在都2022年了，还没解决 1.1 解决方案:..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Element-吐槽点\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 关于 el-radio-group 增加垂直排列的建议","slug":"_1-关于-el-radio-group-增加垂直排列的建议","link":"#_1-关于-el-radio-group-增加垂直排列的建议","children":[{"level":3,"title":"1.1 解决方案: 增加div","slug":"_1-1-解决方案-增加div","link":"#_1-1-解决方案-增加div","children":[]}]},{"level":2,"title":"2. 可搜索Cascader 级联选择器使用时 多次搜索错误的内容，点击下拉无匹配数据区域 会 导致 页面卡死","slug":"_2-可搜索cascader-级联选择器使用时-多次搜索错误的内容-点击下拉无匹配数据区域-会-导致-页面卡死","link":"#_2-可搜索cascader-级联选择器使用时-多次搜索错误的内容-点击下拉无匹配数据区域-会-导致-页面卡死","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.78,"words":234},"filePathRelative":"posts/Web/frontend-lib/fe-lib-element-teasing.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 关于 el-radio-group 增加垂直排列的建议</h2>\\n<p><a href=\\"https://github.com/ElemeFE/element/issues/3037\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">关于 el-radio-group 增加垂直排列的建议</a></p>\\n<blockquote>\\n<p>官方回复：没有太多人有这个需求，可能暂时没有这个计划，你可以用CSS处理。</p>\\n</blockquote>\\n<p>这么简单的需求，硬是不加。需要自己实现。一大堆评论要求加，视而不见。</p>\\n<p>2017 年提的，现在都2022年了，还没解决</p>","autoDesc":true}');export{p as comp,c as data};
