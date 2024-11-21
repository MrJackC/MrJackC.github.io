import{_ as s,c as e,a as r,o as i}from"./app-CZJgH_ea.js";const l={};function n(o,a){return i(),e("div",null,a[0]||(a[0]=[r(`<h1 id="jpa使用原生sql查询数据库like的用法" tabindex="-1"><a class="header-anchor" href="#jpa使用原生sql查询数据库like的用法"><span>JPA使用原生SQL查询数据库like的用法</span></a></h1><p>jpa使用like查询，需要拼接字符串，如下</p><h2 id="oracle用法" tabindex="-1"><a class="header-anchor" href="#oracle用法"><span>oracle用法：</span></a></h2><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//dao层代码</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Query</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">value</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;SELECT * FROM TABLENAME WHERE USER_NAME LIKE &#39;%&#39;||?1||&#39;%&#39;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> nativeQuery</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">List</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Map</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> Object</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> queryUserInfoByName</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> userName)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h2 id="mysql用法" tabindex="-1"><a class="header-anchor" href="#mysql用法"><span>mysql用法：</span></a></h2><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//dao层代码</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Query</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">value</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;SELECT * FROM TABLENAME WHERE USER_NAME LIKE CONCAT(&#39;%&#39;,:userName,&#39;%&#39;)&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> nativeQuery</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">List</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Map</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> Object</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> queryUserInfoByName</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Param</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;userName&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> userName)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://yspxyz.blog.csdn.net/article/details/105383240" target="_blank" rel="noopener noreferrer">jpa使用原生SQL查询数据库like的用法</a></p>`,8)]))}const p=s(l,[["render",n],["__file","jpa-y-like.html.vue"]]),k=JSON.parse(`{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/jpa/jpa-y-like.html","title":"JPA使用原生SQL查询数据库like的用法","lang":"zh-CN","frontmatter":{"description":"JPA使用原生SQL查询数据库like的用法 jpa使用like查询，需要拼接字符串，如下 oracle用法： mysql用法： 参考文章 jpa使用原生SQL查询数据库like的用法","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/jpa/jpa-y-like.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"JPA使用原生SQL查询数据库like的用法"}],["meta",{"property":"og:description","content":"JPA使用原生SQL查询数据库like的用法 jpa使用like查询，需要拼接字符串，如下 oracle用法： mysql用法： 参考文章 jpa使用原生SQL查询数据库like的用法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JPA使用原生SQL查询数据库like的用法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"oracle用法：","slug":"oracle用法","link":"#oracle用法","children":[]},{"level":2,"title":"mysql用法：","slug":"mysql用法","link":"#mysql用法","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.35,"words":106},"filePathRelative":"posts/Java/Java第三方依赖/jpa/jpa-y-like.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>jpa使用like查询，需要拼接字符串，如下</p>\\n<h2>oracle用法：</h2>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">//dao层代码</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">@</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">Query</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">(</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">value</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"SELECT * FROM TABLENAME WHERE USER_NAME LIKE '%'||?1||'%'\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> nativeQuery</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> true</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">List</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">Map</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">String</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> Object</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&gt;&gt;</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> queryUserInfoByName</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">(</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">String</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> userName)</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span></code></pre>\\n</div>","autoDesc":true}`);export{p as comp,k as data};
