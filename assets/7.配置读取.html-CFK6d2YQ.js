import{_ as a,c as n,a as o,o as t}from"./app-JRvFIbSa.js";const r={};function i(s,e){return t(),n("div",null,e[0]||(e[0]=[o(`<h1 id="配置读取" tabindex="-1"><a class="header-anchor" href="#配置读取"><span>配置读取</span></a></h1><p>在 [基础设施 -&gt; 配置管理] 菜单，可以动态修改配置，无需重启服务器即可生效。</p><figure><img src="https://doc.iocoder.cn/img/Vue3/配置读取/01.png" alt="配置管理" tabindex="0" loading="lazy"><figcaption>配置管理</figcaption></figure><p>提示</p><p>对应 <a href="https://doc.iocoder.cn/config-center/" target="_blank" rel="noopener noreferrer">《后端手册 —— 配置中心》</a> 文档。</p><h2 id="_1-读取配置" tabindex="-1"><a class="header-anchor" href="#_1-读取配置"><span><a href="https://doc.iocoder.cn/vue3/config-center/#_1-%E8%AF%BB%E5%8F%96%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">#</a>1. 读取配置</span></a></h2><p>前端调用 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/api/infra/config/index.ts#L25-L28" target="_blank" rel="noopener noreferrer"><code>/@api/infra/config/index.ts</code> (opens new window)</a>的 <code>#getConfigKey(configKey)</code> 方法，获取指定 key 对应的配置的值。代码如下：</p><div class="language-typescript" data-ext="typescript" data-title="typescript"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 根据参数键名查询参数值</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> const</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getConfigKey</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">configKey</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">string</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> request</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">get</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({ </span><span style="color:#E06C75;--shiki-dark:#E06C75;">url</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;/infra/config/get-value-by-key?key=&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> configKey</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> })</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="_2-实战案例" tabindex="-1"><a class="header-anchor" href="#_2-实战案例"><span><a href="https://doc.iocoder.cn/vue3/config-center/#_2-%E5%AE%9E%E6%88%98%E6%A1%88%E4%BE%8B" target="_blank" rel="noopener noreferrer">#</a>2. 实战案例</span></a></h2><p>在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/views/infra/server/index.vue" target="_blank" rel="noopener noreferrer"><code>src/views/infra/server/index.vue</code> (opens new window)</a>页面中，获取 key 为 <code>&quot;url.skywalking&quot;</code> 的配置的值。代码如下：</p><figure><img src="https://doc.iocoder.cn/img/配置中心/07-vue3.png" alt="前端案例" tabindex="0" loading="lazy"><figcaption>前端案例</figcaption></figure><p>上次更新: 2023/04/08, 00:13:01</p>`,12)]))}const c=a(r,[["render",i],["__file","7.配置读取.html.vue"]]),l=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/12.%E5%89%8D%E7%AB%AF%E6%89%8B%E5%86%8C%20Vue%203/7.%E9%85%8D%E7%BD%AE%E8%AF%BB%E5%8F%96.html","title":"配置读取","lang":"zh-CN","frontmatter":{"description":"配置读取 在 [基础设施 -> 配置管理] 菜单，可以动态修改配置，无需重启服务器即可生效。 配置管理配置管理 提示 对应 《后端手册 —— 配置中心》 文档。 #1. 读取配置 前端调用 /@api/infra/config/index.ts (opens new window)的 #getConfigKey(configKey) 方法，获取指定 k...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/12.%E5%89%8D%E7%AB%AF%E6%89%8B%E5%86%8C%20Vue%203/7.%E9%85%8D%E7%BD%AE%E8%AF%BB%E5%8F%96.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"配置读取"}],["meta",{"property":"og:description","content":"配置读取 在 [基础设施 -> 配置管理] 菜单，可以动态修改配置，无需重启服务器即可生效。 配置管理配置管理 提示 对应 《后端手册 —— 配置中心》 文档。 #1. 读取配置 前端调用 /@api/infra/config/index.ts (opens new window)的 #getConfigKey(configKey) 方法，获取指定 k..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/Vue3/%E9%85%8D%E7%BD%AE%E8%AF%BB%E5%8F%96/01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T07:41:53.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-21T07:41:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置读取\\",\\"image\\":[\\"https://doc.iocoder.cn/img/Vue3/%E9%85%8D%E7%BD%AE%E8%AF%BB%E5%8F%96/01.png\\",\\"https://doc.iocoder.cn/img/%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83/07-vue3.png\\"],\\"dateModified\\":\\"2024-11-21T07:41:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#1. 读取配置","slug":"_1-读取配置","link":"#_1-读取配置","children":[]},{"level":2,"title":"#2. 实战案例","slug":"_2-实战案例","link":"#_2-实战案例","children":[]}],"git":{"createdTime":1732174913000,"updatedTime":1732174913000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.71,"words":212},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/12.前端手册 Vue 3/7.配置读取.md","localizedDate":"2024年11月21日","excerpt":"\\n<p>在 [基础设施 -&gt; 配置管理] 菜单，可以动态修改配置，无需重启服务器即可生效。</p>\\n<figure><img src=\\"https://doc.iocoder.cn/img/Vue3/配置读取/01.png\\" alt=\\"配置管理\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>配置管理</figcaption></figure>\\n<p>提示</p>\\n<p>对应 <a href=\\"https://doc.iocoder.cn/config-center/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">《后端手册 —— 配置中心》</a> 文档。</p>","autoDesc":true}');export{c as comp,l as data};
