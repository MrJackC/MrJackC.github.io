import{_ as a,c as e,a as r,o as l}from"./app-DP7tPpgD.js";const n={};function i(o,s){return l(),e("div",null,s[0]||(s[0]=[r(`<h1 id="sql语句优化" tabindex="-1"><a class="header-anchor" href="#sql语句优化"><span>SQL语句优化</span></a></h1><h2 id="_1-负向查询不能使用索引" tabindex="-1"><a class="header-anchor" href="#_1-负向查询不能使用索引"><span>1. 负向查询不能使用索引</span></a></h2><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> name</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> id </span><span style="color:#C678DD;--shiki-dark:#C678DD;">not</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> in</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><p>应该修改为:</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> name</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> id </span><span style="color:#C678DD;--shiki-dark:#C678DD;">in</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">6</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><h2 id="_2-前导模糊查询不能使用索引" tabindex="-1"><a class="header-anchor" href="#_2-前导模糊查询不能使用索引"><span>2. 前导模糊查询不能使用索引</span></a></h2><p>如:</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> name</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> name</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> like</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;%zhangsan&#39;</span></span></code></pre></div><p>非前导则可以:</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> name</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> name</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> like</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;zhangsan%&#39;</span></span></code></pre></div><p>建议可以考虑使用 <code>Lucene</code> 等全文索引工具来代替频繁的模糊查询。</p><h2 id="_3-数据区分不明显的不建议创建索引" tabindex="-1"><a class="header-anchor" href="#_3-数据区分不明显的不建议创建索引"><span>3. 数据区分不明显的不建议创建索引</span></a></h2><p>如 user 表中的性别字段，可以明显区分的才建议创建索引，如身份证等字段。</p><h2 id="_4-字段的默认值不要为-null" tabindex="-1"><a class="header-anchor" href="#_4-字段的默认值不要为-null"><span>4. 字段的默认值不要为 null</span></a></h2><p>这样会带来和预期不一致的查询结果。</p><h2 id="_5-在字段上进行计算不能命中索引" tabindex="-1"><a class="header-anchor" href="#_5-在字段上进行计算不能命中索引"><span>5. 在字段上进行计算不能命中索引</span></a></h2><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> name</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> FROM_UNIXTIME(create_time) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> CURDATE();</span></span></code></pre></div><p>应该修改为:</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> name</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> create_time </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> FROM_UNIXTIME(CURDATE());</span></span></code></pre></div><h2 id="_6-最左前缀问题" tabindex="-1"><a class="header-anchor" href="#_6-最左前缀问题"><span>6. 最左前缀问题</span></a></h2><p>如果给 user 表中的 username pwd 字段创建了复合索引那么使用以下SQL 都是可以命中索引:</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> username </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> username</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;zhangsan&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> and</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> pwd </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;axsedf1sd&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> username </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> pwd </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;axsedf1sd&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> and</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> username</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;zhangsan&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> username </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> username</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;zhangsan&#39;</span></span></code></pre></div><p>但是使用</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> username </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> pwd </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;axsedf1sd&#39;</span></span></code></pre></div><p>是不能命中索引的。</p><h2 id="_7-如果明确知道只有一条记录返回" tabindex="-1"><a class="header-anchor" href="#_7-如果明确知道只有一条记录返回"><span>7. 如果明确知道只有一条记录返回</span></a></h2><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> name</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> username</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;zhangsan&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> limit</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span></span></code></pre></div><p>可以提高效率，可以让数据库停止游标移动。</p><h2 id="_8-不要让数据库帮我们做强制类型转换" tabindex="-1"><a class="header-anchor" href="#_8-不要让数据库帮我们做强制类型转换"><span>8. 不要让数据库帮我们做强制类型转换</span></a></h2><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> name</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> telno</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">18722222222</span></span></code></pre></div><p>这样虽然可以查出数据，但是会导致全表扫描。</p><p>需要修改为</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> name</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> telno</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;18722222222&#39;</span></span></code></pre></div><h2 id="_9-如果需要进行-join-的字段两表的字段类型要相同" tabindex="-1"><a class="header-anchor" href="#_9-如果需要进行-join-的字段两表的字段类型要相同"><span>9. 如果需要进行 join 的字段两表的字段类型要相同</span></a></h2><p>不然也不会命中索引。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/db/sql-lan/sql-lan-optimize.html" target="_blank" rel="noopener noreferrer"><strong>SQL语言 - SQL语句优化</strong></a></p>`,37)]))}const t=a(n,[["render",i],["__file","sql-x-optimization.html.vue"]]),k=JSON.parse('{"path":"/posts/Database/MySQL/sql-x-optimization.html","title":"17、SQL语句优化","lang":"zh-CN","frontmatter":{"title":"17、SQL语句优化","date":"2024-03-10 11:59","category":["数据库"],"tag":["MySQL"],"description":"SQL语句优化 1. 负向查询不能使用索引 应该修改为: 2. 前导模糊查询不能使用索引 如: 非前导则可以: 建议可以考虑使用 Lucene 等全文索引工具来代替频繁的模糊查询。 3. 数据区分不明显的不建议创建索引 如 user 表中的性别字段，可以明显区分的才建议创建索引，如身份证等字段。 4. 字段的默认值不要为 null 这样会带来和预期不一...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MySQL/sql-x-optimization.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"17、SQL语句优化"}],["meta",{"property":"og:description","content":"SQL语句优化 1. 负向查询不能使用索引 应该修改为: 2. 前导模糊查询不能使用索引 如: 非前导则可以: 建议可以考虑使用 Lucene 等全文索引工具来代替频繁的模糊查询。 3. 数据区分不明显的不建议创建索引 如 user 表中的性别字段，可以明显区分的才建议创建索引，如身份证等字段。 4. 字段的默认值不要为 null 这样会带来和预期不一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2024-03-10T11:59:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"17、SQL语句优化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-10T11:59:00.000Z\\",\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 负向查询不能使用索引","slug":"_1-负向查询不能使用索引","link":"#_1-负向查询不能使用索引","children":[]},{"level":2,"title":"2. 前导模糊查询不能使用索引","slug":"_2-前导模糊查询不能使用索引","link":"#_2-前导模糊查询不能使用索引","children":[]},{"level":2,"title":"3. 数据区分不明显的不建议创建索引","slug":"_3-数据区分不明显的不建议创建索引","link":"#_3-数据区分不明显的不建议创建索引","children":[]},{"level":2,"title":"4. 字段的默认值不要为 null","slug":"_4-字段的默认值不要为-null","link":"#_4-字段的默认值不要为-null","children":[]},{"level":2,"title":"5. 在字段上进行计算不能命中索引","slug":"_5-在字段上进行计算不能命中索引","link":"#_5-在字段上进行计算不能命中索引","children":[]},{"level":2,"title":"6. 最左前缀问题","slug":"_6-最左前缀问题","link":"#_6-最左前缀问题","children":[]},{"level":2,"title":"7. 如果明确知道只有一条记录返回","slug":"_7-如果明确知道只有一条记录返回","link":"#_7-如果明确知道只有一条记录返回","children":[]},{"level":2,"title":"8. 不要让数据库帮我们做强制类型转换","slug":"_8-不要让数据库帮我们做强制类型转换","link":"#_8-不要让数据库帮我们做强制类型转换","children":[]},{"level":2,"title":"9. 如果需要进行 join 的字段两表的字段类型要相同","slug":"_9-如果需要进行-join-的字段两表的字段类型要相同","link":"#_9-如果需要进行-join-的字段两表的字段类型要相同","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.58,"words":473},"filePathRelative":"posts/Database/MySQL/sql-x-optimization.md","localizedDate":"2024年3月10日","excerpt":"\\n<h2>1. 负向查询不能使用索引</h2>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> name</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> user </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">where</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> id </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">not</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> in</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">1</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">3</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">4</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">);</span></span></code></pre>\\n</div>","autoDesc":true}');export{t as comp,k as data};
