import{_ as t,c as a,a as i,o as n}from"./app-CZJgH_ea.js";const r={};function l(s,e){return n(),a("div",null,e[0]||(e[0]=[i('<h1 id="分页插件的二次封装" tabindex="-1"><a class="header-anchor" href="#分页插件的二次封装"><span>分页插件的二次封装</span></a></h1><h3 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h3><p>分页是在项目中非常常见的需求。如果每次都要在业务代码中嵌入分页代码，将会</p><ul><li>非常繁琐</li><li>影响业务代码的阅读</li><li>不同数据库分页写法不一，数据库迁移困难</li><li>还需要额外写计算总数count sql</li></ul><h2 id="_2-设计思路" tabindex="-1"><a class="header-anchor" href="#_2-设计思路"><span>2. 设计思路</span></a></h2><ol><li><p>与前端约定分页参数</p><p>约定好的参数，我们就不需要每次写。通过<code>Servlet</code> 的request 就可以获取到参数</p></li><li><p>如果有传递分页参数就进行分页</p></li><li><p>针对返回值也进行封装，计算分页前的总条数</p></li></ol><h2 id="_3-源码阅读" tabindex="-1"><a class="header-anchor" href="#_3-源码阅读"><span>3. 源码阅读</span></a></h2><h3 id="_3-1-分页请求参数" tabindex="-1"><a class="header-anchor" href="#_3-1-分页请求参数"><span>3.1 分页请求参数</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301220088.png" alt="image-20211022213635796" tabindex="0" loading="lazy"><figcaption>image-20211022213635796</figcaption></figure><p>我们在 BaseController中定义startPage 方法，调用此方法则代表要做分页操作。</p><h3 id="_3-2-参数获取" tabindex="-1"><a class="header-anchor" href="#_3-2-参数获取"><span>3.2 参数获取</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301220136.png" alt="image-20211022213809675" tabindex="0" loading="lazy"><figcaption>image-20211022213809675</figcaption></figure><p>Servlet 中的实现</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301220165.png" alt="image-20211022213930030" tabindex="0" loading="lazy"><figcaption>image-20211022213930030</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301220194.png" alt="image-20211022214008185" tabindex="0" loading="lazy"><figcaption>image-20211022214008185</figcaption></figure><h3 id="_3-3-返回封装" tabindex="-1"><a class="header-anchor" href="#_3-3-返回封装"><span>3.3 返回封装</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301220227.png" alt="image-20211022214059348" tabindex="0" loading="lazy"><figcaption>image-20211022214059348</figcaption></figure>',17)]))}const c=t(r,[["render",l],["__file","manage-system-db-page.html.vue"]]),p=JSON.parse('{"path":"/posts/Architect/manage-system/manage-system-db-page.html","title":"分页插件的二次封装","lang":"zh-CN","frontmatter":{"aliases":"分页插件的二次封装","tags":null,"cssclass":null,"source":null,"created":"2024-04-24 14:35","updated":"2024-04-30 12:22","description":"分页插件的二次封装 1. 简介 分页是在项目中非常常见的需求。如果每次都要在业务代码中嵌入分页代码，将会 非常繁琐 影响业务代码的阅读 不同数据库分页写法不一，数据库迁移困难 还需要额外写计算总数count sql 2. 设计思路 与前端约定分页参数 约定好的参数，我们就不需要每次写。通过Servlet 的request 就可以获取到参数 如果有传递分...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/manage-system/manage-system-db-page.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"分页插件的二次封装"}],["meta",{"property":"og:description","content":"分页插件的二次封装 1. 简介 分页是在项目中非常常见的需求。如果每次都要在业务代码中嵌入分页代码，将会 非常繁琐 影响业务代码的阅读 不同数据库分页写法不一，数据库迁移困难 还需要额外写计算总数count sql 2. 设计思路 与前端约定分页参数 约定好的参数，我们就不需要每次写。通过Servlet 的request 就可以获取到参数 如果有传递分..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301220088.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分页插件的二次封装\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301220088.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301220136.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301220165.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301220194.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301220227.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":3,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 设计思路","slug":"_2-设计思路","link":"#_2-设计思路","children":[]},{"level":2,"title":"3. 源码阅读","slug":"_3-源码阅读","link":"#_3-源码阅读","children":[{"level":3,"title":"3.1 分页请求参数","slug":"_3-1-分页请求参数","link":"#_3-1-分页请求参数","children":[]},{"level":3,"title":"3.2 参数获取","slug":"_3-2-参数获取","link":"#_3-2-参数获取","children":[]},{"level":3,"title":"3.3 返回封装","slug":"_3-3-返回封装","link":"#_3-3-返回封装","children":[]}]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.88,"words":263},"filePathRelative":"posts/Architect/manage-system/manage-system-db-page.md","localizedDate":"2024年10月28日","excerpt":"\\n<h3>1. 简介</h3>\\n<p>分页是在项目中非常常见的需求。如果每次都要在业务代码中嵌入分页代码，将会</p>\\n<ul>\\n<li>非常繁琐</li>\\n<li>影响业务代码的阅读</li>\\n<li>不同数据库分页写法不一，数据库迁移困难</li>\\n<li>还需要额外写计算总数count sql</li>\\n</ul>\\n<h2>2. 设计思路</h2>\\n<ol>\\n<li>\\n<p>与前端约定分页参数</p>\\n<p>约定好的参数，我们就不需要每次写。通过<code>Servlet</code> 的request 就可以获取到参数</p>\\n</li>\\n<li>\\n<p>如果有传递分页参数就进行分页</p>\\n</li>\\n<li>\\n<p>针对返回值也进行封装，计算分页前的总条数</p>\\n</li>\\n</ol>","autoDesc":true}');export{c as comp,p as data};
