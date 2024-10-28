import{_ as e,c as s,a as t,o as n}from"./app-W9QyTiMU.js";const i={};function r(p,a){return n(),s("div",null,a[0]||(a[0]=[t('<h1 id="dynamicinsert和-dynamicupdate生成动态sql语句" tabindex="-1"><a class="header-anchor" href="#dynamicinsert和-dynamicupdate生成动态sql语句"><span>@DynamicInsert和@DynamicUpdate生成动态SQL语句</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>@DynamicUpdate@DynamicInsert 是hibernate里面的注解</p><ul><li><p><strong>@DynamicInsert属性:</strong></p><p>设置为true,设置为true,表示insert对象的时候,生成动态的insert语句,如果这个字段的值是null就不会加入到insert语句当中.默认false。</p><blockquote><p>比如希望数据库插入日期或时间戳字段时，在对象字段为空的情况下，表字段能自动填写当前的sysdate。</p></blockquote></li><li><p><strong>@DynamicUpdate属性</strong>:</p><p>设置为true,设置为true,表示update对象的时候,生成动态的update语句,如果这个字段的值是null就不会被加入到update语句中,默认false。</p><blockquote><p>比如只想更新某个属性，但是却把整个对象的属性都更新了，这并不是我们希望的结果，我们希望的结果是：我更改了哪些字段，只要更新我修改的字段就够了。</p></blockquote></li></ul><h2 id="_2-举例" tabindex="-1"><a class="header-anchor" href="#_2-举例"><span>2. 举例</span></a></h2><h3 id="_2-1-动态插入" tabindex="-1"><a class="header-anchor" href="#_2-1-动态插入"><span>2.1 动态插入</span></a></h3><p><strong>@DynamicInsert注解下Hibernate日志打印SQL：</strong></p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">insert into</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> Cat (cat_name, id) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">values</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (?, ?)</span></span></code></pre></div><p>反之</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">insert into</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> Cat (create_time, update_time, cat_name, id) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">values</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (?, ?, ?, ?)</span></span></code></pre></div><h3 id="_2-2-动态更新" tabindex="-1"><a class="header-anchor" href="#_2-2-动态更新"><span>2.2 动态更新</span></a></h3><p>@DynamicUpdate注解下Hibernate日志打印SQL：</p><p>说明：如果字段有更新，Hibernate才会对该字段进行更新</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">update</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> Cat </span><span style="color:#C678DD;--shiki-dark:#C678DD;">set</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> update_time</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">? </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> id</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">?</span></span></code></pre></div><p>反之Cat实体类去掉@DynamicUpdate</p><p>说明：不管字段有没有更新，Hibernate都会对该字段进行更新</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">update</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> Cat </span><span style="color:#C678DD;--shiki-dark:#C678DD;">set</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> update_time</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">?, cat_name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">? </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> id</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">?</span></span></code></pre></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结:</span></a></h2><p>如果不需要全表更新就加上@DynamicInsert和@DynamicUpdate</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/itguangit/article/details/78696767" target="_blank" rel="noopener noreferrer">Spring Data JPA注解@DynamicInsert和@DynamicUpdate</a></p>',21)]))}const o=e(i,[["render",r],["__file","jpa-i-dynamic.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/jpa/jpa-i-dynamic.html","title":"@DynamicInsert和@DynamicUpdate生成动态SQL语句","lang":"zh-CN","frontmatter":{"description":"@DynamicInsert和@DynamicUpdate生成动态SQL语句 1. 简介 @DynamicUpdate@DynamicInsert 是hibernate里面的注解 @DynamicInsert属性: 设置为true,设置为true,表示insert对象的时候,生成动态的insert语句,如果这个字段的值是null就不会加入到insert...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/jpa/jpa-i-dynamic.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"@DynamicInsert和@DynamicUpdate生成动态SQL语句"}],["meta",{"property":"og:description","content":"@DynamicInsert和@DynamicUpdate生成动态SQL语句 1. 简介 @DynamicUpdate@DynamicInsert 是hibernate里面的注解 @DynamicInsert属性: 设置为true,设置为true,表示insert对象的时候,生成动态的insert语句,如果这个字段的值是null就不会加入到insert..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"@DynamicInsert和@DynamicUpdate生成动态SQL语句\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 举例","slug":"_2-举例","link":"#_2-举例","children":[{"level":3,"title":"2.1 动态插入","slug":"_2-1-动态插入","link":"#_2-1-动态插入","children":[]},{"level":3,"title":"2.2 动态更新","slug":"_2-2-动态更新","link":"#_2-2-动态更新","children":[]}]},{"level":2,"title":"总结:","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.26,"words":378},"filePathRelative":"posts/Java/Java第三方依赖/jpa/jpa-i-dynamic.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>@DynamicUpdate@DynamicInsert 是hibernate里面的注解</p>\\n<ul>\\n<li>\\n<p><strong>@DynamicInsert属性:</strong></p>\\n<p>设置为true,设置为true,表示insert对象的时候,生成动态的insert语句,如果这个字段的值是null就不会加入到insert语句当中.默认false。</p>\\n<blockquote>\\n<p>比如希望数据库插入日期或时间戳字段时，在对象字段为空的情况下，表字段能自动填写当前的sysdate。</p>\\n</blockquote>\\n</li>\\n<li>\\n<p><strong>@DynamicUpdate属性</strong>:</p>\\n<p>设置为true,设置为true,表示update对象的时候,生成动态的update语句,如果这个字段的值是null就不会被加入到update语句中,默认false。</p>\\n<blockquote>\\n<p>比如只想更新某个属性，但是却把整个对象的属性都更新了，这并不是我们希望的结果，我们希望的结果是：我更改了哪些字段，只要更新我修改的字段就够了。</p>\\n</blockquote>\\n</li>\\n</ul>","autoDesc":true}');export{o as comp,c as data};
