import{_ as a,c as n,a as t,o as i}from"./app-mWs04Xnh.js";const e={};function l(p,s){return i(),n("div",null,s[0]||(s[0]=[t(`<h1 id="python爬取脉脉" tabindex="-1"><a class="header-anchor" href="#python爬取脉脉"><span>python爬取脉脉</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>该项目主要是根据<a href="https://github.com/Joezhangs/PythonSpider/tree/master/Item5%EF%BC%9Aspider_maimai" target="_blank" rel="noopener noreferrer">github项目爬取脉脉网</a> 学习，并根据自己的业务需求改造</p><h3 id="_1-1-页面爬取的内容" tabindex="-1"><a class="header-anchor" href="#_1-1-页面爬取的内容"><span>1.1 页面爬取的内容</span></a></h3><blockquote><p>这是一个基于python3而写的爬虫，爬取的网站的脉脉网(<a href="https://maimai.cn/" target="_blank" rel="noopener noreferrer">https://maimai.cn/</a>)，在搜索框中搜索“CHO”，并切换到“人脉”选项卡，点击姓名，进入详情页，爬取其详细信息</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230953775.png" alt="image-20210701215737588" tabindex="0" loading="lazy"><figcaption>image-20210701215737588</figcaption></figure><h3 id="_1-2-爬取的接口分析" tabindex="-1"><a class="header-anchor" href="#_1-2-爬取的接口分析"><span>1.2 爬取的接口分析</span></a></h3><div class="language-apl" data-ext="apl" data-title="apl"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">https://</span><span style="color:#E06C75;--shiki-dark:#E06C75;">maimai</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">cn</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">search</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">contacts</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">?</span><span style="color:#E06C75;--shiki-dark:#E06C75;">count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">20</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&amp;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">page</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&amp;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">query</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Cho</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&amp;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dist</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&amp;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">searchTokens</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=&amp;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">highlight</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&amp;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">jsononly</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&amp;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">pc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span></span></code></pre></div><p>根据开发者模式下的接口信息可以看到</p><p>请求接口：<a href="https://maimai.cn/search/contacts" target="_blank" rel="noopener noreferrer">https://maimai.cn/search/contacts</a></p><p>参数为</p><ul><li>count：20 <ul><li>单次查询条数20条</li></ul></li><li>page=0 <ul><li>当前页数，第0页</li></ul></li><li>query=Cho <ul><li>查询的关键词</li></ul></li><li>dist=0</li><li>searchTokens=</li><li>highlight=true <ul><li>是否高亮</li></ul></li><li>jsononly=1 <ul><li>是否以json格式返回</li></ul></li><li>pc=1 <ul><li>是否为电脑端数据</li></ul></li></ul><h3 id="_1-3-接口返回结果分析" tabindex="-1"><a class="header-anchor" href="#_1-3-接口返回结果分析"><span>1.3 接口返回结果分析</span></a></h3><p>该接口的返回结果为</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230953817.png" alt="image-20210701221518719" tabindex="0" loading="lazy"><figcaption>image-20210701221518719</figcaption></figure><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;result&quot;: &quot;ok&quot;,</span></span>
<span class="line"><span>	&quot;data&quot;: {</span></span>
<span class="line"><span>		&quot;contacts&quot;: [{</span></span>
<span class="line"><span>			&quot;uid&quot;: &quot;a9f9b8c4-3c9d-46ac-b32e-0a1bfeefc2ea&quot;,</span></span>
<span class="line"><span>			&quot;contact&quot;: {</span></span>
<span class="line"><span>				&quot;id&quot;: &quot;a9f9b8c4-3c9d-46ac-b32e-0a1bfeefc2ea&quot;,</span></span>
<span class="line"><span>				&quot;name&quot;: &quot;wing&quot;,</span></span>
<span class="line"><span>				&quot;py&quot;: &quot;wing&quot;,</span></span>
<span class="line"><span>				&quot;avatar&quot;: &quot;https://i9.taou.com/maimai/p/25657/400_42_2jgEOv22b8xMTrtp-a160&quot;,</span></span>
<span class="line"><span>				&quot;line1&quot;: &quot;法大大CHO&quot;,</span></span>
<span class="line"><span>				&quot;line3&quot;: &quot;法大大CHO(广东)&quot;,</span></span>
<span class="line"><span>				&quot;line4&quot;: &quot;IT互联网 | 高管, 影响力: 79&quot;,</span></span>
<span class="line"><span>				&quot;rank&quot;: 79,</span></span>
<span class="line"><span>				&quot;compos&quot;: &quot;法大大CHO&quot;,</span></span>
<span class="line"><span>				&quot;loc&quot;: &quot;广东&quot;,</span></span>
<span class="line"><span>				&quot;short_compos&quot;: &quot;法大大CHO&quot;,</span></span>
<span class="line"><span>				&quot;company&quot;: &quot;法大大&quot;,</span></span>
<span class="line"><span>				&quot;career&quot;: &quot;法大大CHO&quot;,</span></span>
<span class="line"><span>				&quot;gender&quot;: 2,</span></span>
<span class="line"><span>				&quot;position&quot;: &quot;CHO&quot;,</span></span>
<span class="line"><span>				&quot;short_career&quot;: &quot;法大大CHO&quot;,</span></span>
<span class="line"><span>				&quot;mmid&quot;: &quot;231791658&quot;,</span></span>
<span class="line"><span>				&quot;status&quot;: 1,</span></span>
<span class="line"><span>				&quot;province&quot;: &quot;广东&quot;,</span></span>
<span class="line"><span>				&quot;city&quot;: &quot;深圳&quot;,</span></span>
<span class="line"><span>				&quot;user_pfmj&quot;: {</span></span>
<span class="line"><span>					&quot;major1&quot;: &quot;0104&quot;,</span></span>
<span class="line"><span>					&quot;profession1&quot;: &quot;0108&quot;,</span></span>
<span class="line"><span>					&quot;pf_path1&quot;: &quot;01,0108&quot;,</span></span>
<span class="line"><span>					&quot;pf_name1&quot;: &quot;企业级软件&quot;,</span></span>
<span class="line"><span>					&quot;mj_name1&quot;: &quot;CEO/创始人/企业高管&quot;,</span></span>
<span class="line"><span>					&quot;src_type&quot;: 3</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}],</span></span>
<span class="line"><span>		&quot;contacts_total&quot;: 756,</span></span>
<span class="line"><span>		&quot;searchTokens&quot;: [&quot;cho&quot;, &quot;hrvp&quot;],</span></span>
<span class="line"><span>		&quot;more&quot;: 746,</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;ab_conf&quot;: {</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;env&quot;: {</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;auth_info&quot;: {</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回结果过多，此处只截取部分关键字段</p><p>我们需要的数据</p><ul><li>用户结果列表：在data-&gt;contacts-&gt;contact 下</li><li>搜索的关键词：&quot;searchTokens&quot;: [&quot;cho&quot;, &quot;hrvp&quot;], <ul><li>这里并不一定只有你搜索的结果</li></ul></li></ul><h4 id="_1-3-1-contact的数据结构分析" tabindex="-1"><a class="header-anchor" href="#_1-3-1-contact的数据结构分析"><span>1.3.1 <strong>contact</strong>的数据结构分析</span></a></h4><ul><li>name: &quot;wing&quot; <ul><li>用户名为wing</li></ul></li><li>company: &quot;法大大&quot; <ul><li>公司名：法大大</li></ul></li><li>career: &quot;法大大CHO&quot; <ul><li>职业：法大大CHO</li></ul></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://github.com/Joezhangs/PythonSpider/tree/master/Item5%EF%BC%9Aspider_maimai" target="_blank" rel="noopener noreferrer">爬取的网站的脉脉网</a></p>`,23)]))}const r=a(e,[["render",l],["__file","python-maimai.html.vue"]]),c=JSON.parse('{"path":"/posts/Python/python-maimai.html","title":"python爬取脉脉","lang":"zh-CN","frontmatter":{"description":"python爬取脉脉 1. 简介 该项目主要是根据github项目爬取脉脉网 学习，并根据自己的业务需求改造 1.1 页面爬取的内容 这是一个基于python3而写的爬虫，爬取的网站的脉脉网(https://maimai.cn/)，在搜索框中搜索“CHO”，并切换到“人脉”选项卡，点击姓名，进入详情页，爬取其详细信息 image-20210701215...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Python/python-maimai.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"python爬取脉脉"}],["meta",{"property":"og:description","content":"python爬取脉脉 1. 简介 该项目主要是根据github项目爬取脉脉网 学习，并根据自己的业务需求改造 1.1 页面爬取的内容 这是一个基于python3而写的爬虫，爬取的网站的脉脉网(https://maimai.cn/)，在搜索框中搜索“CHO”，并切换到“人脉”选项卡，点击姓名，进入详情页，爬取其详细信息 image-20210701215..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230953775.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"python爬取脉脉\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230953775.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230953817.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 页面爬取的内容","slug":"_1-1-页面爬取的内容","link":"#_1-1-页面爬取的内容","children":[]},{"level":3,"title":"1.2 爬取的接口分析","slug":"_1-2-爬取的接口分析","link":"#_1-2-爬取的接口分析","children":[]},{"level":3,"title":"1.3 接口返回结果分析","slug":"_1-3-接口返回结果分析","link":"#_1-3-接口返回结果分析","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.61,"words":482},"filePathRelative":"posts/Python/python-maimai.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>该项目主要是根据<a href=\\"https://github.com/Joezhangs/PythonSpider/tree/master/Item5%EF%BC%9Aspider_maimai\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">github项目爬取脉脉网</a> 学习，并根据自己的业务需求改造</p>\\n<h3>1.1 页面爬取的内容</h3>\\n<blockquote>\\n<p>这是一个基于python3而写的爬虫，爬取的网站的脉脉网(<a href=\\"https://maimai.cn/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://maimai.cn/</a>)，在搜索框中搜索“CHO”，并切换到“人脉”选项卡，点击姓名，进入详情页，爬取其详细信息</p>\\n</blockquote>","autoDesc":true}');export{r as comp,c as data};
