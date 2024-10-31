import{_ as a,c as n,a as l,o as s}from"./app-mWs04Xnh.js";const t={};function i(p,e){return s(),n("div",null,e[0]||(e[0]=[l(`<h1 id="联合索引" tabindex="-1"><a class="header-anchor" href="#联合索引"><span>联合索引</span></a></h1><h2 id="_1-什么是联合索引" tabindex="-1"><a class="header-anchor" href="#_1-什么是联合索引"><span>1. 什么是联合索引</span></a></h2><p>两个或更多个列上的索引被称为联合索引，联合索引又叫复合索引。</p><p>对于联合索引：</p><ul><li>MySql从左到右使用索引中字段</li><li>一个查询可以只使用索引中的一部分，但只能是最左部分（最左前缀）</li></ul><p>例如：</p><p>索引是key index（a,b,c） 可以支持<strong>a|a,b|a,b,c</strong>，三种组合查找，但不支持b,c 进行查找。当最左侧字段是常量引用时，索引就十分有效</p><h2 id="_2-需要遵循的规则" tabindex="-1"><a class="header-anchor" href="#_2-需要遵循的规则"><span>2. 需要遵循的规则</span></a></h2><ol><li>需要加索引的字段，要在where条件中</li><li>数据量少的字段不需要加索引</li><li>如何where条件中是or关系，加索引不起作用</li><li>符合最左前缀原则</li></ol><h2 id="_3-原理" tabindex="-1"><a class="header-anchor" href="#_3-原理"><span>3. 原理</span></a></h2><h3 id="_3-1-b-tree结构" tabindex="-1"><a class="header-anchor" href="#_3-1-b-tree结构"><span>3.1 B+Tree结构</span></a></h3><p>每一个磁盘快在mysql中是一个页，页大小是固定的，mysql innodb的默认的页大小是16k。每个索引会分配在页上的数量是由字段的大小决定。当字段值长度越长，每一页上的数量就会越少，因此在一定数据量的情况下，所以的深度会越深，影响索引查找效率</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130851564.png" alt="image-20190909223519018" tabindex="0" loading="lazy"><figcaption>image-20190909223519018</figcaption></figure><p>对于复合索引（多列b+tree,使用多列值组合而成的b+tree索引）。遵循最左前缀原则，从左到右的使用索引中的字段，<strong>一个查询可以只使用索引中的一部分，但只能是做左侧部分</strong></p><h3 id="_3-2-实例" tabindex="-1"><a class="header-anchor" href="#_3-2-实例"><span>3.2 实例</span></a></h3><p>创建表test</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>create table test(</span></span>
<span class="line"><span></span></span>
<span class="line"><span>a int,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>b int,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>c int,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>KEY a(a,b,c)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>);</span></span></code></pre></div><p>比如（a,b,c）的时候，b+tree是按照从<strong>左到右的顺序来建立搜索树</strong>的</p><ul><li>当（a =? and b= ? and c=?) 这样的数据来检索的时候 <ul><li>b+树会优先比较a列来确定下一步的方向</li><li>如果a列相同再依次比较b列和c列</li><li>最后得到检索数据</li></ul></li><li>但当（b=? and c =?）这样没有a列的数据来的时候 <ul><li>b+树就不知道下一步该查那个节点，因为建立搜索树的时候a列就是第一个比较因子。必须要先跟a列来搜索才能知道下一步去哪里查询</li></ul></li><li>当（a=? and c =?）这样的数据来检索时 <ul><li>b+树可以用a列来制定搜索方向，但下一个字段b列的缺失，只能吧a列的数据找到</li><li>然后在匹配c列的数据</li></ul></li></ul><h2 id="_4-多列索引的应用" tabindex="-1"><a class="header-anchor" href="#_4-多列索引的应用"><span>4. 多列索引的应用</span></a></h2><h3 id="_4-1-多列索引在and查询中的应用" tabindex="-1"><a class="header-anchor" href="#_4-1-多列索引在and查询中的应用"><span>4.1 多列索引在and查询中的应用</span></a></h3><ul><li><p>select * from test where a=? and b=? and c=?；</p><p>查询效率最高，索引全覆盖。</p></li><li><p>select * from test where a=? and b=?</p><p>索引覆盖a和b。</p></li><li><p>select * from test where b=? and a=?</p><p>经过mysql的查<strong>询分析器的优化，索引覆盖a和b</strong>。</p></li><li><p>select * from test where a=?；</p><p>索引覆盖a。</p></li><li><p>select * from test where b=? and c=?</p><p>没有a列，不走索引，索引失效。</p></li><li><p>select * from test where c=?；</p><p>没有a列，不走索引，索引失效。</p></li></ul><h3 id="_4-2-多列索引在范围查询中应用" tabindex="-1"><a class="header-anchor" href="#_4-2-多列索引在范围查询中应用"><span>4.2 多列索引在范围查询中应用</span></a></h3><ul><li><p>select * from test where a=? and b between ? and ? and c=?；</p><p>索引覆盖a和b，<strong>因b列是范围查询，因此c列不能走索引</strong>。</p></li><li><p>select * from test where a between ? and ? and b=?；</p><p>a列走索引，因a列是范围查询，因此b列是无法使用索引。</p></li><li><p>select * from test where a between ? and ? and b between ? and ? and c=?；</p><p>a列走索引，因a列是范围查询，b列是范围查询也不能使用索引。</p></li></ul><h3 id="_4-3-多列索引在排序中应用" tabindex="-1"><a class="header-anchor" href="#_4-3-多列索引在排序中应用"><span>4.3 <strong>多列索引在排序中应用</strong></span></a></h3><ul><li><p>select * from test where a=? and b=? order by c；</p><p>a、b、c三列全覆盖索引，查询效率最高。</p></li><li><p>select * from test where a=? and b between ? and ? order by c；</p><p>a、b列使用索引查找，因b列是范围查询，因此c列不能使用索引，会出现file sort。</p></li></ul><h2 id="_5-总结" tabindex="-1"><a class="header-anchor" href="#_5-总结"><span>5. 总结</span></a></h2><ul><li>联合索引的使用在写where调的顺序无关，mysql 查询分析会进行优化而使用索引，但是为了减轻查询分析器的压力，最好和索引的从左到右的顺序一致</li><li>使用等值查询，多列同时查询，索引会一直传递并生效。因此等值查询效率最好。</li><li>索引查找遵循最左侧原则。<strong>但是遇到范围查询列之后的列索引失效。</strong></li><li>排序也能使用索引，合理使用索引排序，避免出现file sort。</li></ul>`,28)]))}const c=a(t,[["render",i],["__file","mysql-c-index-uni.html.vue"]]),o=JSON.parse('{"path":"/posts/Database/MySQL/mysql-c-index-uni.html","title":"联合索引","lang":"zh-CN","frontmatter":{"aliases":"联合索引","tags":null,"cssclass":null,"source":null,"category":["数据库"],"created":"2024-02-22 10:49","updated":"2024-03-13 08:51","description":"联合索引 1. 什么是联合索引 两个或更多个列上的索引被称为联合索引，联合索引又叫复合索引。 对于联合索引： MySql从左到右使用索引中字段 一个查询可以只使用索引中的一部分，但只能是最左部分（最左前缀） 例如： 索引是key index（a,b,c） 可以支持a|a,b|a,b,c，三种组合查找，但不支持b,c 进行查找。当最左侧字段是常量引用时，...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MySQL/mysql-c-index-uni.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"联合索引"}],["meta",{"property":"og:description","content":"联合索引 1. 什么是联合索引 两个或更多个列上的索引被称为联合索引，联合索引又叫复合索引。 对于联合索引： MySql从左到右使用索引中字段 一个查询可以只使用索引中的一部分，但只能是最左部分（最左前缀） 例如： 索引是key index（a,b,c） 可以支持a|a,b|a,b,c，三种组合查找，但不支持b,c 进行查找。当最左侧字段是常量引用时，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130851564.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"联合索引\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130851564.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是联合索引","slug":"_1-什么是联合索引","link":"#_1-什么是联合索引","children":[]},{"level":2,"title":"2. 需要遵循的规则","slug":"_2-需要遵循的规则","link":"#_2-需要遵循的规则","children":[]},{"level":2,"title":"3. 原理","slug":"_3-原理","link":"#_3-原理","children":[{"level":3,"title":"3.1 B+Tree结构","slug":"_3-1-b-tree结构","link":"#_3-1-b-tree结构","children":[]},{"level":3,"title":"3.2 实例","slug":"_3-2-实例","link":"#_3-2-实例","children":[]}]},{"level":2,"title":"4. 多列索引的应用","slug":"_4-多列索引的应用","link":"#_4-多列索引的应用","children":[{"level":3,"title":"4.1 多列索引在and查询中的应用","slug":"_4-1-多列索引在and查询中的应用","link":"#_4-1-多列索引在and查询中的应用","children":[]},{"level":3,"title":"4.2 多列索引在范围查询中应用","slug":"_4-2-多列索引在范围查询中应用","link":"#_4-2-多列索引在范围查询中应用","children":[]},{"level":3,"title":"4.3 多列索引在排序中应用","slug":"_4-3-多列索引在排序中应用","link":"#_4-3-多列索引在排序中应用","children":[]}]},{"level":2,"title":"5. 总结","slug":"_5-总结","link":"#_5-总结","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.76,"words":1128},"filePathRelative":"posts/Database/MySQL/mysql-c-index-uni.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 什么是联合索引</h2>\\n<p>两个或更多个列上的索引被称为联合索引，联合索引又叫复合索引。</p>\\n<p>对于联合索引：</p>\\n<ul>\\n<li>MySql从左到右使用索引中字段</li>\\n<li>一个查询可以只使用索引中的一部分，但只能是最左部分（最左前缀）</li>\\n</ul>\\n<p>例如：</p>\\n<p>索引是key index（a,b,c） 可以支持<strong>a|a,b|a,b,c</strong>，三种组合查找，但不支持b,c 进行查找。当最左侧字段是常量引用时，索引就十分有效</p>\\n<h2>2. 需要遵循的规则</h2>\\n<ol>\\n<li>需要加索引的字段，要在where条件中</li>\\n<li>数据量少的字段不需要加索引</li>\\n<li>如何where条件中是or关系，加索引不起作用</li>\\n<li>符合最左前缀原则</li>\\n</ol>","autoDesc":true}');export{c as comp,o as data};
