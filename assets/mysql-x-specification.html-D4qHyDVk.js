import{_ as a,c as n,a as e,o as i}from"./app-CZJgH_ea.js";const l={};function r(o,s){return i(),n("div",null,s[0]||(s[0]=[e(`<h1 id="mysql-mysql使用规范" tabindex="-1"><a class="header-anchor" href="#mysql-mysql使用规范"><span>MySQL - MySQL使用规范</span></a></h1><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130938775.png" alt="image-20221014231941357" tabindex="0" loading="lazy"><figcaption>image-20221014231941357</figcaption></figure><blockquote><p>16条MySQL使用规范，减少80%问题.</p><p>合理规范的使用MySQL，可以大大减少开发工作量和线上问题，并提升SQL查询性能。</p></blockquote><h2 id="_1-禁止使用select" tabindex="-1"><a class="header-anchor" href="#_1-禁止使用select"><span><strong>1. 禁止使用select *</strong></span></a></h2><p>阿里开发规范中，有这么一句话：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130938829.png" alt="image-20221014230752999" tabindex="0" loading="lazy"><figcaption>image-20221014230752999</figcaption></figure><p><strong>select *</strong> 会查询表中所有字段，如果表中的字段有更改，必须修改SQL语句，不然就会执行错误。</p><p>查询出非必要的字段，徒增磁盘IO和网络延迟。</p><h2 id="_2-用小表驱动大表" tabindex="-1"><a class="header-anchor" href="#_2-用小表驱动大表"><span><strong>2. 用小表驱动大表</strong></span></a></h2><p>关联查询的时候，先用小表查到结果，再用结果去大表查询，可以大大减少连接次数。</p><p>比如我们要查询某个部门下的员工，由于部门数量远远小于员工数量。我们可以把部门表当作驱动表，员工表当作被驱动表。</p><p>查询SQL类似这样：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> department</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">inner join</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> employee</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">on</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> department</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">id</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">employee</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">department_id</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> department_name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;部门1&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h2 id="_3-join关联表不宜过多" tabindex="-1"><a class="header-anchor" href="#_3-join关联表不宜过多"><span><strong>3. join关联表不宜过多</strong></span></a></h2><p>join关联表禁止超过3张，join关联过多，不但会增加查询时间，降低查询性能，还会产生临时表缓存结果数据，推荐拆成多条小SQL执行。</p><p>另外关联字段的类型一定要保持一致，并且在每张表都要建立关联字段的索引。</p><h2 id="_4-禁止使用左模糊或者全模糊查询" tabindex="-1"><a class="header-anchor" href="#_4-禁止使用左模糊或者全模糊查询"><span><strong>4. 禁止使用左模糊或者全模糊查询</strong></span></a></h2><p>当我们在SQL查询使用左模糊或者全模糊匹配的时候，类似下面这样：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"># 左模糊查询</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;%一灯&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"># 全模糊查询</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;%一灯%&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>根据B+树的特性，即使我们在name字段上建立了索引，查询的时候也是无法用到索引的。</p><h2 id="_5-索引访问类型至少达到range级别" tabindex="-1"><a class="header-anchor" href="#_5-索引访问类型至少达到range级别"><span><strong>5. 索引访问类型至少达到range级别</strong></span></a></h2><p>索引访问类型常见的有这几个级别，从上到下，性能由好到差。</p><p><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20221014231245873.png" alt="image-20221014231245873" loading="lazy"><br> 要求SQL索引访问类型至少要达到<strong>range</strong>级别，最好到<strong>const</strong>级别。</p><h2 id="_6-更优雅的使用联合索引" tabindex="-1"><a class="header-anchor" href="#_6-更优雅的使用联合索引"><span><strong>6. 更优雅的使用联合索引</strong></span></a></h2><p>由于联合索引有最左匹配原则，所以需要优先把区分度高的字段放在最左边第一列。</p><p>比如要统计用户表中生日字段和性别字段区分度，可以这样统计：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">    count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">distinct</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> birthday)/</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(*), </span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">    count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">distinct</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> gender)/</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(*) </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user;</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130938866.png" alt="image-20221014231410497" tabindex="0" loading="lazy"><figcaption>image-20221014231410497</figcaption></figure><p>值越大，区分度越高。</p><p>出道面试题，下面这条SQL该怎么创建联合索引：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> a </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> table_name </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> b</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> order by</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> c;</span></span></code></pre></div><p>SQL中用到abc三个字段，创建联合索引的顺序是**（b,c,a）**。</p><p>这道题还涉及到另一个知识点，SQL执行的顺序：</p><blockquote><p>from &gt; on &gt; join &gt; where &gt; group by &gt; having &gt; select &gt; distinct &gt; order by &gt; limit</p></blockquote><h2 id="_7-注意避免深分页" tabindex="-1"><a class="header-anchor" href="#_7-注意避免深分页"><span><strong>7. 注意避免深分页</strong></span></a></h2><p>MySQL深分页的时候，查询性能较差。</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;一灯&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> limit</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10000</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>我们可以采用子查询的方式进行优化：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> id </span><span style="color:#C678DD;--shiki-dark:#C678DD;">in</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> id </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  where</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;一灯&#39;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  limit</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10000</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">10</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><p>这样可以减少非聚簇索引回表查询的次数。</p><h2 id="_8-单表字段不要超过30个" tabindex="-1"><a class="header-anchor" href="#_8-单表字段不要超过30个"><span><strong>8. 单表字段不要超过30个</strong></span></a></h2><p>当单表字段数量过多的时候，加载大量数据也会拖慢查询性能。</p><p>如果字段超过30个，不用看，肯定是表设计的不合理。</p><p>这时候，可以拆成多张表，用垂直分表的方式，进行冷热字段分离。</p><h2 id="_9-枚举字段不要使用字符类型" tabindex="-1"><a class="header-anchor" href="#_9-枚举字段不要使用字符类型"><span><strong>9. 枚举字段不要使用字符类型</strong></span></a></h2><p>字符类型会占用更多的存储空间，当我们想要存储枚举值或者表示是否的时候，可以采用<strong>tinyint</strong>数值类型，最好采用无符号整数<strong>unsigned tinyint</strong>。</p><h2 id="_10-小数类型禁止使用float和double" tabindex="-1"><a class="header-anchor" href="#_10-小数类型禁止使用float和double"><span><strong>10. 小数类型禁止使用float和double</strong></span></a></h2><p>在存储和计算的时候，<strong>float</strong> 和 <strong>double</strong> 都存在精度损失的问题，无法得到正确的结果。</p><p>所以在涉及到存储小数的时候，必须使用<strong>decimal</strong>类型。</p><h2 id="_11-所有字段必须设置默认值且不允许为null" tabindex="-1"><a class="header-anchor" href="#_11-所有字段必须设置默认值且不允许为null"><span><strong>11. 所有字段必须设置默认值且不允许为null</strong></span></a></h2><p>字段允许为null，会占用额外的存储空间。</p><p>索引并不会索引null值，所以查询null值的时候无法用到索引。</p><p>当数值类型允许为null，返回给映射实体类的时候还可能会报空指针异常。</p><h2 id="_12-必须创建主键-最好是有序数值类型" tabindex="-1"><a class="header-anchor" href="#_12-必须创建主键-最好是有序数值类型"><span><strong>12. 必须创建主键，最好是有序数值类型</strong></span></a></h2><p>如果我们自己没有给表设置主键，InnoDB会自动增加一列隐藏的主键，我们无法使用到，并且也占用的更多的存储空间，所以建表的时候，必须设置主键。</p><p>有序数值更适合做主键，插入数据的时候，由于是有序的，不会频繁调整B+树结构，性能更好。</p><h2 id="_13-快速判断是否存在某条记录" tabindex="-1"><a class="header-anchor" href="#_13-快速判断是否存在某条记录"><span><strong>13. 快速判断是否存在某条记录</strong></span></a></h2><p>一般我们判断表中是否存在某条记录的时候，会使用count函数，然后判断返回值是否大于1。</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(*) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;一灯&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>InnoDB存储引擎并没有像MyIsAm那样缓存表的总行数，每次查询都是实时计算的，耗时较长。</p><p>我们可以采用limit加快查询效率：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> id </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;一灯&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> limit</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p><strong>limit 1</strong>表示匹配到一条就返回，查询效率更好，结果集只返回id，还可以用到覆盖索引。</p><h2 id="_14-in条件中数量不宜过多" tabindex="-1"><a class="header-anchor" href="#_14-in条件中数量不宜过多"><span><strong>14. in条件中数量不宜过多</strong></span></a></h2><p>in条件中数量不要超过1000个，不然耗时会非常长，可以拆成多批次查询。</p><h2 id="_15-禁止创建预留字段" tabindex="-1"><a class="header-anchor" href="#_15-禁止创建预留字段"><span><strong>15. 禁止创建预留字段</strong></span></a></h2><p>无法通过预留字段的名称判断这个字段是干嘛用的。</p><p>预留字段的类型不一定合适。</p><p>无法为预留字段创建合适的索引。</p><h2 id="_16-单表索引数不要超过5个" tabindex="-1"><a class="header-anchor" href="#_16-单表索引数不要超过5个"><span><strong>16. 单表索引数不要超过5个</strong></span></a></h2><p>创建适当的索引可以提高查询效率，但是过多的索引，不但占用更多存储空间，还会拖慢更新SQL的性能。</p><p>所以，索引好用，适度即可。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/550146428" target="_blank" rel="noopener noreferrer">精心整理16条MySQL使用规范，减少80%问题，推荐分享给团队</a></p>`,74)]))}const t=a(l,[["render",r],["__file","mysql-x-specification.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/MySQL/mysql-x-specification.html","title":"MySQL - MySQL使用规范","lang":"zh-CN","frontmatter":{"aliases":"MySQL - MySQL使用规范","tags":null,"cssclass":null,"source":null,"order":510,"category":["数据库","Mysql"],"created":"2024-02-22 10:49","updated":"2024-03-13 09:39","description":"MySQL - MySQL使用规范 image-20221014231941357image-20221014231941357 16条MySQL使用规范，减少80%问题. 合理规范的使用MySQL，可以大大减少开发工作量和线上问题，并提升SQL查询性能。 1. 禁止使用select * 阿里开发规范中，有这么一句话： image-2022101423...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MySQL/mysql-x-specification.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"MySQL - MySQL使用规范"}],["meta",{"property":"og:description","content":"MySQL - MySQL使用规范 image-20221014231941357image-20221014231941357 16条MySQL使用规范，减少80%问题. 合理规范的使用MySQL，可以大大减少开发工作量和线上问题，并提升SQL查询性能。 1. 禁止使用select * 阿里开发规范中，有这么一句话： image-2022101423..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130938775.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL - MySQL使用规范\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130938775.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130938829.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20221014231245873.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130938866.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 禁止使用select *","slug":"_1-禁止使用select","link":"#_1-禁止使用select","children":[]},{"level":2,"title":"2. 用小表驱动大表","slug":"_2-用小表驱动大表","link":"#_2-用小表驱动大表","children":[]},{"level":2,"title":"3. join关联表不宜过多","slug":"_3-join关联表不宜过多","link":"#_3-join关联表不宜过多","children":[]},{"level":2,"title":"4. 禁止使用左模糊或者全模糊查询","slug":"_4-禁止使用左模糊或者全模糊查询","link":"#_4-禁止使用左模糊或者全模糊查询","children":[]},{"level":2,"title":"5. 索引访问类型至少达到range级别","slug":"_5-索引访问类型至少达到range级别","link":"#_5-索引访问类型至少达到range级别","children":[]},{"level":2,"title":"6. 更优雅的使用联合索引","slug":"_6-更优雅的使用联合索引","link":"#_6-更优雅的使用联合索引","children":[]},{"level":2,"title":"7. 注意避免深分页","slug":"_7-注意避免深分页","link":"#_7-注意避免深分页","children":[]},{"level":2,"title":"8. 单表字段不要超过30个","slug":"_8-单表字段不要超过30个","link":"#_8-单表字段不要超过30个","children":[]},{"level":2,"title":"9. 枚举字段不要使用字符类型","slug":"_9-枚举字段不要使用字符类型","link":"#_9-枚举字段不要使用字符类型","children":[]},{"level":2,"title":"10. 小数类型禁止使用float和double","slug":"_10-小数类型禁止使用float和double","link":"#_10-小数类型禁止使用float和double","children":[]},{"level":2,"title":"11. 所有字段必须设置默认值且不允许为null","slug":"_11-所有字段必须设置默认值且不允许为null","link":"#_11-所有字段必须设置默认值且不允许为null","children":[]},{"level":2,"title":"12. 必须创建主键，最好是有序数值类型","slug":"_12-必须创建主键-最好是有序数值类型","link":"#_12-必须创建主键-最好是有序数值类型","children":[]},{"level":2,"title":"13. 快速判断是否存在某条记录","slug":"_13-快速判断是否存在某条记录","link":"#_13-快速判断是否存在某条记录","children":[]},{"level":2,"title":"14. in条件中数量不宜过多","slug":"_14-in条件中数量不宜过多","link":"#_14-in条件中数量不宜过多","children":[]},{"level":2,"title":"15. 禁止创建预留字段","slug":"_15-禁止创建预留字段","link":"#_15-禁止创建预留字段","children":[]},{"level":2,"title":"16. 单表索引数不要超过5个","slug":"_16-单表索引数不要超过5个","link":"#_16-单表索引数不要超过5个","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.2,"words":1560},"filePathRelative":"posts/Database/MySQL/mysql-x-specification.md","localizedDate":"2024年10月21日","excerpt":"\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130938775.png\\" alt=\\"image-20221014231941357\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20221014231941357</figcaption></figure>\\n<blockquote>\\n<p>16条MySQL使用规范，减少80%问题.</p>\\n<p>合理规范的使用MySQL，可以大大减少开发工作量和线上问题，并提升SQL查询性能。</p>\\n</blockquote>","autoDesc":true}');export{t as comp,c as data};
