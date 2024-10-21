import{_ as a,c as s,a as e,o as n}from"./app-BhoNqsD-.js";const t={};function r(i,o){return n(),s("div",null,o[0]||(o[0]=[e(`<h1 id="mongodb大数据量查询慢问题" tabindex="-1"><a class="header-anchor" href="#mongodb大数据量查询慢问题"><span>mongodb大数据量查询慢问题</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>我单个collection 有100多万数据，单单一个count查询就要1分多钟，其他分页查数据也是慢成狗了。甚至有时候服务器直接挂掉</p><p>但是这个数据量在robo 3t 很快，但在我的代码和idea 的datagrid 中就特别慢。</p><p>经过一系列的排查大致可以从几个方面入手</p><h2 id="_2-解决" tabindex="-1"><a class="header-anchor" href="#_2-解决"><span>2. 解决</span></a></h2><h3 id="_2-1-降低mongodb-版本" tabindex="-1"><a class="header-anchor" href="#_2-1-降低mongodb-版本"><span>2.1 降低mongodb 版本</span></a></h3><p>原本spring-boot版本为2.5.x 关联的mongo版本为4.x</p><blockquote><p>4.x版本改动比较大，查询的优化可能没做好导致</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130837214.png" alt="image-20220126164949424" tabindex="0" loading="lazy"><figcaption>image-20220126164949424</figcaption></figure><p>降低spring-boot版本为2.2.x 关联的mongo版本为3.x</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130837250.png" alt="image-20220126164746396" tabindex="0" loading="lazy"><figcaption>image-20220126164746396</figcaption></figure><p>速度快了好多</p><h3 id="_2-2-mongorepository-替换为mongotemplate-cursor-形式" tabindex="-1"><a class="header-anchor" href="#_2-2-mongorepository-替换为mongotemplate-cursor-形式"><span>2.2 MongoRepository 替换为MongoTemplate.cursor 形式</span></a></h3><p>使用MongoTemplate.cursor形式会快很多</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">     FindIterable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Document</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> findIterable </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> mongoTemplate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getCollection</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;test&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">find</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        findIterable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">limit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">pageable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getPageSize</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">skip</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">((</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">pageable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getOffset</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        MongoCursor</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Document</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> cursor </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> findIterable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cursor</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span></code></pre></div>`,16)]))}const p=a(t,[["render",r],["__file","mongodb-problem-slow.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/MongoDB/mongodb-problem-slow.html","title":"mongodb大数据量查询慢问题","lang":"zh-CN","frontmatter":{"aliases":"mongodb大数据量查询慢问题","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 08:37","description":"mongodb大数据量查询慢问题 1. 背景 我单个collection 有100多万数据，单单一个count查询就要1分多钟，其他分页查数据也是慢成狗了。甚至有时候服务器直接挂掉 但是这个数据量在robo 3t 很快，但在我的代码和idea 的datagrid 中就特别慢。 经过一系列的排查大致可以从几个方面入手 2. 解决 2.1 降低mongod...","head":[["meta",{"property":"og:url","content":"https://mrjason.me/posts/Database/MongoDB/mongodb-problem-slow.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"mongodb大数据量查询慢问题"}],["meta",{"property":"og:description","content":"mongodb大数据量查询慢问题 1. 背景 我单个collection 有100多万数据，单单一个count查询就要1分多钟，其他分页查数据也是慢成狗了。甚至有时候服务器直接挂掉 但是这个数据量在robo 3t 很快，但在我的代码和idea 的datagrid 中就特别慢。 经过一系列的排查大致可以从几个方面入手 2. 解决 2.1 降低mongod..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130837214.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mongodb大数据量查询慢问题\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130837214.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130837250.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjason.me\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 解决","slug":"_2-解决","link":"#_2-解决","children":[{"level":3,"title":"2.1 降低mongodb 版本","slug":"_2-1-降低mongodb-版本","link":"#_2-1-降低mongodb-版本","children":[]},{"level":3,"title":"2.2 MongoRepository 替换为MongoTemplate.cursor 形式","slug":"_2-2-mongorepository-替换为mongotemplate-cursor-形式","link":"#_2-2-mongorepository-替换为mongotemplate-cursor-形式","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.8,"words":241},"filePathRelative":"posts/Database/MongoDB/mongodb-problem-slow.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>我单个collection 有100多万数据，单单一个count查询就要1分多钟，其他分页查数据也是慢成狗了。甚至有时候服务器直接挂掉</p>\\n<p>但是这个数据量在robo 3t 很快，但在我的代码和idea 的datagrid 中就特别慢。</p>\\n<p>经过一系列的排查大致可以从几个方面入手</p>\\n<h2>2. 解决</h2>\\n<h3>2.1 降低mongodb 版本</h3>\\n<p>原本spring-boot版本为2.5.x 关联的mongo版本为4.x</p>\\n<blockquote>\\n<p>4.x版本改动比较大，查询的优化可能没做好导致</p>\\n</blockquote>","autoDesc":true}');export{p as comp,c as data};
