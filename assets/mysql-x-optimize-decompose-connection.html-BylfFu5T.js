import{_ as a,c as n,a as o,o as l}from"./app-BhoNqsD-.js";const i={};function e(r,s){return l(),n("div",null,s[0]||(s[0]=[o(`<h1 id="分解大连接查询" tabindex="-1"><a class="header-anchor" href="#分解大连接查询"><span>分解大连接查询</span></a></h1><h2 id="_1-大连接查询分解好处" tabindex="-1"><a class="header-anchor" href="#_1-大连接查询分解好处"><span>1. 大连接查询分解好处</span></a></h2><p>将一个大连接查询分解成对每一个表进行一次单表查询，然后将结果在应用程序中进行关联，这样做的好处有:</p><ul><li><strong>让缓存更高效</strong>。对于连接查询，如果其中一个表发生变化，那么整个查询缓存就无法使用。而分解后的多个查询，即使其中一个表发生变化，对其它表的查询缓存依然可以使用。</li><li>分解成多个单表查询，这些<strong>单表查询的缓存结果更可能被其它查询使用到</strong>，从而减少冗余记录的查询。</li><li><strong>减少锁竞争</strong>；</li><li>在应用层进行连接，可以更容易对数据库进行拆分，从而<strong>更容易做到高性能和可伸缩</strong>。</li><li>查询本身效率也可能会有所提升。例如下面的例子中，使用 IN() 代替连接查询，可以让 MySQL 按照 ID 顺序进行查询，这可能比随机的连接要更高效。</li></ul><h2 id="_2-示例" tabindex="-1"><a class="header-anchor" href="#_2-示例"><span>2. 示例</span></a></h2><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">SELECT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tab</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">JOIN</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tag_post </span><span style="color:#C678DD;--shiki-dark:#C678DD;">ON</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> tag_post</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">tag_id</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">tag</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">id</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">JOIN</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> post </span><span style="color:#C678DD;--shiki-dark:#C678DD;">ON</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> tag_post</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">post_id</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">post</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">id</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">WHERE</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> tag</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">tag</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;mysql&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">SELECT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tag </span><span style="color:#C678DD;--shiki-dark:#C678DD;">WHERE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tag</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;mysql&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">SELECT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tag_post </span><span style="color:#C678DD;--shiki-dark:#C678DD;">WHERE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tag_id</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1234</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">SELECT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> post </span><span style="color:#C678DD;--shiki-dark:#C678DD;">WHERE</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> post</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">id</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> IN</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">123</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">456</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">567</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">9098</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">8904</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/db/sql-mysql/sql-mysql-performance.html" target="_blank" rel="noopener noreferrer">MySQL - 性能优化</a></p>`,9)]))}const p=a(i,[["render",e],["__file","mysql-x-optimize-decompose-connection.html.vue"]]),B=JSON.parse('{"path":"/posts/Database/MySQL/mysql-x-optimize-decompose-connection.html","title":"分解大连接查询","lang":"zh-CN","frontmatter":{"aliases":"分解大连接查询","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 08:52","description":"分解大连接查询 1. 大连接查询分解好处 将一个大连接查询分解成对每一个表进行一次单表查询，然后将结果在应用程序中进行关联，这样做的好处有: 让缓存更高效。对于连接查询，如果其中一个表发生变化，那么整个查询缓存就无法使用。而分解后的多个查询，即使其中一个表发生变化，对其它表的查询缓存依然可以使用。 分解成多个单表查询，这些单表查询的缓存结果更可能被其它...","head":[["meta",{"property":"og:url","content":"https://mrjason.me/posts/Database/MySQL/mysql-x-optimize-decompose-connection.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"分解大连接查询"}],["meta",{"property":"og:description","content":"分解大连接查询 1. 大连接查询分解好处 将一个大连接查询分解成对每一个表进行一次单表查询，然后将结果在应用程序中进行关联，这样做的好处有: 让缓存更高效。对于连接查询，如果其中一个表发生变化，那么整个查询缓存就无法使用。而分解后的多个查询，即使其中一个表发生变化，对其它表的查询缓存依然可以使用。 分解成多个单表查询，这些单表查询的缓存结果更可能被其它..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分解大连接查询\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjason.me\\"}]}"]]},"headers":[{"level":2,"title":"1. 大连接查询分解好处","slug":"_1-大连接查询分解好处","link":"#_1-大连接查询分解好处","children":[]},{"level":2,"title":"2. 示例","slug":"_2-示例","link":"#_2-示例","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.18,"words":354},"filePathRelative":"posts/Database/MySQL/mysql-x-optimize-decompose-connection.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 大连接查询分解好处</h2>\\n<p>将一个大连接查询分解成对每一个表进行一次单表查询，然后将结果在应用程序中进行关联，这样做的好处有:</p>\\n<ul>\\n<li><strong>让缓存更高效</strong>。对于连接查询，如果其中一个表发生变化，那么整个查询缓存就无法使用。而分解后的多个查询，即使其中一个表发生变化，对其它表的查询缓存依然可以使用。</li>\\n<li>分解成多个单表查询，这些<strong>单表查询的缓存结果更可能被其它查询使用到</strong>，从而减少冗余记录的查询。</li>\\n<li><strong>减少锁竞争</strong>；</li>\\n<li>在应用层进行连接，可以更容易对数据库进行拆分，从而<strong>更容易做到高性能和可伸缩</strong>。</li>\\n<li>查询本身效率也可能会有所提升。例如下面的例子中，使用 IN() 代替连接查询，可以让 MySQL 按照 ID 顺序进行查询，这可能比随机的连接要更高效。</li>\\n</ul>","autoDesc":true}');export{p as comp,B as data};
