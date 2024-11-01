import{_ as t,c as a,a as n,o as r}from"./app-DP7tPpgD.js";const l={};function s(i,e){return r(),a("div",null,e[0]||(e[0]=[n('<h1 id="索引" tabindex="-1"><a class="header-anchor" href="#索引"><span>索引</span></a></h1><h2 id="_1-为什么要使用索引" tabindex="-1"><a class="header-anchor" href="#_1-为什么要使用索引"><span>1. 为什么要使用索引</span></a></h2><p>因为索引能避免使用全表扫描去查询数据，提升检索效率</p><h2 id="_2-什么样的信息能成为索引" tabindex="-1"><a class="header-anchor" href="#_2-什么样的信息能成为索引"><span>2. 什么样的信息能成为索引</span></a></h2><p>主键、唯一键等，只要能让数据具有一定区分性的字段</p><h2 id="_3-索引的数据结构" tabindex="-1"><a class="header-anchor" href="#_3-索引的数据结构"><span>3. 索引的数据结构</span></a></h2><p>主流的B+tree、hash结构，bitmap</p><h2 id="_4-索引是建立得越多越好吗" tabindex="-1"><a class="header-anchor" href="#_4-索引是建立得越多越好吗"><span>4. 索引是建立得越多越好吗</span></a></h2><ul><li>数据量小的表不需要建立索引，建立会增加二外的索引开销</li><li>数据变更需要维护索引，因此更多的索引意味着更多的维护成本</li><li>更多的索引也需要更多的空间</li></ul>',9)]))}const p=t(l,[["render",s],["__file","mysql-c-index.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/MySQL/mysql-c-index.html","title":"索引","lang":"zh-CN","frontmatter":{"aliases":"索引","tags":null,"cssclass":null,"source":null,"category":["数据库"],"created":"2024-02-22 10:49","updated":"2024-03-13 08:38","description":"索引 1. 为什么要使用索引 因为索引能避免使用全表扫描去查询数据，提升检索效率 2. 什么样的信息能成为索引 主键、唯一键等，只要能让数据具有一定区分性的字段 3. 索引的数据结构 主流的B+tree、hash结构，bitmap 4. 索引是建立得越多越好吗 数据量小的表不需要建立索引，建立会增加二外的索引开销 数据变更需要维护索引，因此更多的索引意...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MySQL/mysql-c-index.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"索引"}],["meta",{"property":"og:description","content":"索引 1. 为什么要使用索引 因为索引能避免使用全表扫描去查询数据，提升检索效率 2. 什么样的信息能成为索引 主键、唯一键等，只要能让数据具有一定区分性的字段 3. 索引的数据结构 主流的B+tree、hash结构，bitmap 4. 索引是建立得越多越好吗 数据量小的表不需要建立索引，建立会增加二外的索引开销 数据变更需要维护索引，因此更多的索引意..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"索引\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 为什么要使用索引","slug":"_1-为什么要使用索引","link":"#_1-为什么要使用索引","children":[]},{"level":2,"title":"2. 什么样的信息能成为索引","slug":"_2-什么样的信息能成为索引","link":"#_2-什么样的信息能成为索引","children":[]},{"level":2,"title":"3. 索引的数据结构","slug":"_3-索引的数据结构","link":"#_3-索引的数据结构","children":[]},{"level":2,"title":"4. 索引是建立得越多越好吗","slug":"_4-索引是建立得越多越好吗","link":"#_4-索引是建立得越多越好吗","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.62,"words":187},"filePathRelative":"posts/Database/MySQL/mysql-c-index.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 为什么要使用索引</h2>\\n<p>因为索引能避免使用全表扫描去查询数据，提升检索效率</p>\\n<h2>2. 什么样的信息能成为索引</h2>\\n<p>主键、唯一键等，只要能让数据具有一定区分性的字段</p>\\n<h2>3. 索引的数据结构</h2>\\n<p>主流的B+tree、hash结构，bitmap</p>\\n<h2>4. 索引是建立得越多越好吗</h2>\\n<ul>\\n<li>数据量小的表不需要建立索引，建立会增加二外的索引开销</li>\\n<li>数据变更需要维护索引，因此更多的索引意味着更多的维护成本</li>\\n<li>更多的索引也需要更多的空间</li>\\n</ul>\\n","autoDesc":true}');export{p as comp,c as data};
