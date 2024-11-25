import{_ as a,c as n,a as i,o}from"./app-BfIe-EZg.js";const r={};function e(l,s){return o(),n("div",null,s[0]||(s[0]=[i('<h1 id="配置管理" tabindex="-1"><a class="header-anchor" href="#配置管理"><span>配置管理</span></a></h1><p>在 [基础设施 -&gt; 配置管理] 菜单，可以查看和管理配置，适合业务上需要动态的管理某个配置。</p><p>例如说：创建用户时，需要配置用户的默认密码，这个密码是不会变的，但是有时候需要修改这个默认密码，这个时候就可以通过配置管理来修改。</p><figure><img src="https://doc.iocoder.cn/img/配置中心/01.png" alt="配置中心" tabindex="0" loading="lazy"><figcaption>配置中心</figcaption></figure><p>对应的后端代码是 <code>yudao-module-infra</code> 的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-infra/yudao-module-infra-biz/src/main/java/cn/iocoder/yudao/module/infra/service/config/" target="_blank" rel="noopener noreferrer"><code>config</code> (opens new window)</a>业务模块。</p><h2 id="_1-配置的表结构" tabindex="-1"><a class="header-anchor" href="#_1-配置的表结构"><span><a href="https://doc.iocoder.cn/config-center/#_1-%E9%85%8D%E7%BD%AE%E7%9A%84%E8%A1%A8%E7%BB%93%E6%9E%84" target="_blank" rel="noopener noreferrer">#</a>1. 配置的表结构</span></a></h2><p><code>infra_config</code> 的表结构如下：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> TABLE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> `</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">infra_config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">` (</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  `id`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NOT NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> AUTO_INCREMENT COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;参数主键&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  `group`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">50</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">CHARACTER</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> SET</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">COLLATE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4_unicode_ci </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NOT NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;参数分组&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  `type`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> tinyint</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NOT NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;参数类型&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  `name`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">CHARACTER</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> SET</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">COLLATE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4_unicode_ci </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NOT NULL</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;参数名称&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  `key`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">CHARACTER</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> SET</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">COLLATE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4_unicode_ci </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NOT NULL</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;参数键名&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  `value`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">500</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">CHARACTER</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> SET</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">COLLATE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4_unicode_ci </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NOT NULL</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;参数键值&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  `sensitive`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> bit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NOT NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;是否敏感&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  `remark`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">500</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">CHARACTER</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> SET</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">COLLATE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4_unicode_ci </span><span style="color:#C678DD;--shiki-dark:#C678DD;">DEFAULT</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;备注&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  `creator`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">64</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">CHARACTER</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> SET</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">COLLATE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4_unicode_ci </span><span style="color:#C678DD;--shiki-dark:#C678DD;">DEFAULT</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;创建者&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  `create_time`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> datetime</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NOT NULL</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> CURRENT_TIMESTAMP COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;创建时间&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  `updater`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">64</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">CHARACTER</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> SET</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">COLLATE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4_unicode_ci </span><span style="color:#C678DD;--shiki-dark:#C678DD;">DEFAULT</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;更新者&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  `update_time`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> datetime</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NOT NULL</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> CURRENT_TIMESTAMP </span><span style="color:#C678DD;--shiki-dark:#C678DD;">ON</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> UPDATE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> CURRENT_TIMESTAMP COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;更新时间&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  `deleted`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> bit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NOT NULL</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> b</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;0&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;是否删除&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  PRIMARY KEY</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#98C379;--shiki-dark:#98C379;">`id`</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">USING</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> BTREE</span></span>\n<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) ENGINE</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">InnoDB AUTO_INCREMENT</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">8</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> CHARSET</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">utf8mb4 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">COLLATE</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">utf8mb4_unicode_ci COMMENT</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;参数配置表&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>key</code> 字段，对应到 Spring Boot 配置文件的配置项，例如说 <code>yudao.captcha.enable</code>、<code>sys.user.init-password</code> 等等。</li></ul><h2 id="_3-后端案例" tabindex="-1"><a class="header-anchor" href="#_3-后端案例"><span><a href="https://doc.iocoder.cn/config-center/#_3-%E5%90%8E%E7%AB%AF%E6%A1%88%E4%BE%8B" target="_blank" rel="noopener noreferrer">#</a>3. 后端案例</span></a></h2><p>TODO 芋艿：待补充</p><h2 id="_4-前端案例" tabindex="-1"><a class="header-anchor" href="#_4-前端案例"><span><a href="https://doc.iocoder.cn/config-center/#_4-%E5%89%8D%E7%AB%AF%E6%A1%88%E4%BE%8B" target="_blank" rel="noopener noreferrer">#</a>4. 前端案例</span></a></h2><p>后端提供了 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-infra/yudao-module-infra-biz/src/main/java/cn/iocoder/yudao/module/infra/controller/admin/config/ConfigController.java#L70-L82" target="_blank" rel="noopener noreferrer"><code>/admin-api/infra/config/get-value-by-key</code> (opens new window)</a>RESTful API 接口，返回指定配置项的值。前端的使用示例如下图：</p><figure><img src="https://doc.iocoder.cn/img/配置中心/07-vue2.png" alt="前端案例" tabindex="0" loading="lazy"><figcaption>前端案例</figcaption></figure><p>上次更新: 2023/04/08, 00:13:01</p>',15)]))}const B=a(r,[["render",e],["__file","22.配置管理.html.vue"]]),t=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/22.%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86.html","title":"配置管理","lang":"zh-CN","frontmatter":{"description":"配置管理 在 [基础设施 -> 配置管理] 菜单，可以查看和管理配置，适合业务上需要动态的管理某个配置。 例如说：创建用户时，需要配置用户的默认密码，这个密码是不会变的，但是有时候需要修改这个默认密码，这个时候就可以通过配置管理来修改。 配置中心配置中心 对应的后端代码是 yudao-module-infra 的 config (opens new w...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/22.%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"配置管理"}],["meta",{"property":"og:description","content":"配置管理 在 [基础设施 -> 配置管理] 菜单，可以查看和管理配置，适合业务上需要动态的管理某个配置。 例如说：创建用户时，需要配置用户的默认密码，这个密码是不会变的，但是有时候需要修改这个默认密码，这个时候就可以通过配置管理来修改。 配置中心配置中心 对应的后端代码是 yudao-module-infra 的 config (opens new w..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83/01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-24T05:58:00.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-24T05:58:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置管理\\",\\"image\\":[\\"https://doc.iocoder.cn/img/%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83/01.png\\",\\"https://doc.iocoder.cn/img/%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83/07-vue2.png\\"],\\"dateModified\\":\\"2024-11-24T05:58:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#1. 配置的表结构","slug":"_1-配置的表结构","link":"#_1-配置的表结构","children":[]},{"level":2,"title":"#3. 后端案例","slug":"_3-后端案例","link":"#_3-后端案例","children":[]},{"level":2,"title":"#4. 前端案例","slug":"_4-前端案例","link":"#_4-前端案例","children":[]}],"git":{"createdTime":1732174913000,"updatedTime":1732427880000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.64,"words":493},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/2.后端手册/22.配置管理.md","localizedDate":"2024年11月21日","excerpt":"\\n<p>在 [基础设施 -&gt; 配置管理] 菜单，可以查看和管理配置，适合业务上需要动态的管理某个配置。</p>\\n<p>例如说：创建用户时，需要配置用户的默认密码，这个密码是不会变的，但是有时候需要修改这个默认密码，这个时候就可以通过配置管理来修改。</p>\\n<figure><img src=\\"https://doc.iocoder.cn/img/配置中心/01.png\\" alt=\\"配置中心\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>配置中心</figcaption></figure>\\n<p>对应的后端代码是 <code>yudao-module-infra</code> 的 <a href=\\"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-infra/yudao-module-infra-biz/src/main/java/cn/iocoder/yudao/module/infra/service/config/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>config</code> (opens new window)</a>业务模块。</p>","autoDesc":true}');export{B as comp,t as data};
