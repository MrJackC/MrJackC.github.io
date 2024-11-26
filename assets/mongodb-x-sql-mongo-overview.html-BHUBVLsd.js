import{_ as e,c as s,a as n,o}from"./app-JRvFIbSa.js";const r={};function t(l,a){return o(),s("div",null,a[0]||(a[0]=[n(`<h1 id="从sql到mongodb之概念篇" tabindex="-1"><a class="header-anchor" href="#从sql到mongodb之概念篇"><span>从SQL到MongoDB之概念篇</span></a></h1><h2 id="_1-概念对应关系" tabindex="-1"><a class="header-anchor" href="#_1-概念对应关系"><span>1. 概念对应关系</span></a></h2><p>SQL 术语和概念以及相应的 MongoDB 术语和概念.</p><p>下表介绍了各种 SQL 术语和概念以及相应的 MongoDB 术语和概念.</p><table><thead><tr><th>SQL术语/概念</th><th>MongoDB 术语/概念</th></tr></thead><tbody><tr><td>database</td><td><a href="https://docs.mongodb.com/manual/reference/glossary/#term-database" target="_blank" rel="noopener noreferrer">database</a></td></tr><tr><td>table</td><td><a href="https://docs.mongodb.com/manual/reference/glossary/#term-collection" target="_blank" rel="noopener noreferrer">collection</a></td></tr><tr><td>row</td><td><a href="https://docs.mongodb.com/manual/reference/glossary/#term-document" target="_blank" rel="noopener noreferrer">document</a>或 <a href="https://docs.mongodb.com/manual/reference/glossary/#term-bson" target="_blank" rel="noopener noreferrer">BSON</a>document</td></tr><tr><td>column</td><td><a href="https://docs.mongodb.com/manual/reference/glossary/#term-field" target="_blank" rel="noopener noreferrer">field</a></td></tr><tr><td>index</td><td><a href="https://docs.mongodb.com/manual/reference/glossary/#term-index" target="_blank" rel="noopener noreferrer">index</a></td></tr><tr><td>table joins （表联接）</td><td><a href="https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/#pipe._S_lookup" target="_blank" rel="noopener noreferrer">$lookup</a>, <code>embedded documents （嵌入式文档）</code></td></tr><tr><td>primary key 指定任何唯一的列或者列组合作为主键</td><td><a href="https://docs.mongodb.com/manual/reference/glossary/#term-primary-key" target="_blank" rel="noopener noreferrer">primary key </a>在 MongoDB 中, 主键自动设置为 <a href="https://docs.mongodb.com/manual/reference/glossary/#term-id" target="_blank" rel="noopener noreferrer">_id </a>字段</td></tr><tr><td>aggregation (如：group by)</td><td><code>aggregation pipeline （聚合管道）</code>参考： <a href="https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/" target="_blank" rel="noopener noreferrer">SQL to Aggregation Mapping Chart</a></td></tr><tr><td>SELECT INTO NEW_TABLE</td><td><a href="https://docs.mongodb.com/manual/reference/operator/aggregation/out/#pipe._S_out" target="_blank" rel="noopener noreferrer">$out </a>参考： <a href="https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/" target="_blank" rel="noopener noreferrer">SQL to Aggregation Mapping Chart</a></td></tr><tr><td>MERGE INTO TABLE</td><td><a href="https://docs.mongodb.com/manual/reference/operator/aggregation/merge/#pipe._S_merge" target="_blank" rel="noopener noreferrer">$merge</a>（从MongoDB 4.2开始可用） 参考： <a href="https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/" target="_blank" rel="noopener noreferrer">SQL to Aggregation Mapping Chart</a></td></tr><tr><td>transactions</td><td><a href="https://docs.mongodb.com/manual/core/transactions/" target="_blank" rel="noopener noreferrer">transactions</a></td></tr></tbody></table><blockquote><p>TIP</p><p><em>在许多情况下，</em> <code>非规范化数据模型（嵌入式文档和数组） denormalized data model (embedded documents and arrays)</code> <em>将继续是您数据和用例的最佳选择，而不是多文档事务. 也就是说，对于许多场景，对数据进行适当的建模将最大限度地减少对</em> <code>多文档事务（multi-document transactions）</code><em>的需求。</em></p></blockquote><h2 id="_2-可执行文件" tabindex="-1"><a class="header-anchor" href="#_2-可执行文件"><span>2. 可执行文件</span></a></h2><p>下表显示了一些数据库可执行文件和相应的 MongoDB 可执行文件。 这张表并不是详尽无遗的。</p><table><thead><tr><th></th><th>MongoDB</th><th>MySQL</th><th>Oracle</th><th>Informix</th><th>DB2</th></tr></thead><tbody><tr><td>Database Server</td><td>mongod</td><td>mysqld</td><td>oracle</td><td>IDS</td><td>DB2 Server</td></tr><tr><td>Database Client</td><td>mongo</td><td>mysql</td><td>sqlplus</td><td>DB-Access</td><td>DB2 Client</td></tr></tbody></table><h2 id="_3-示例" tabindex="-1"><a class="header-anchor" href="#_3-示例"><span>3. 示例</span></a></h2><p>下表显示了各种 SQL 语句和相应的 MongoDB 语句。 表中的例子假定以下条件:</p><ul><li>Sql 示例假设一个名为 people 的表。</li><li>MongoDB 的示例假定一个名为 people 的集合包含以下原型的文档：</li></ul><div class="language-javascript" data-ext="javascript" data-title="javascript"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  _id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">ObjectId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;509a8fb2f3f4948bd2f983a0&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  user_id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;abc123&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  age</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">55</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  status</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;A&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="_3-1-create-and-alter" tabindex="-1"><a class="header-anchor" href="#_3-1-create-and-alter"><span>3.1 Create and Alter</span></a></h3><h4 id="_3-1-1-create-table" tabindex="-1"><a class="header-anchor" href="#_3-1-1-create-table"><span>3.1.1 CREATE TABLE</span></a></h4><ul><li>SQL 模式语句：</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>CREATE TABLE people (</span></span>
<span class="line"><span>    id MEDIUMINT NOT NULL</span></span>
<span class="line"><span>        AUTO_INCREMENT,</span></span>
<span class="line"><span>    user_id Varchar(30),</span></span>
<span class="line"><span>    age Number,</span></span>
<span class="line"><span>    status char(1),</span></span>
<span class="line"><span>    PRIMARY KEY (id)</span></span>
<span class="line"><span>)</span></span></code></pre></div><ul><li>MongoDB 模式语句：</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.insertOne( {</span></span>
<span class="line"><span>    user_id: &quot;abc123&quot;,</span></span>
<span class="line"><span>    age: 55,</span></span>
<span class="line"><span>    status: &quot;A&quot;</span></span>
<span class="line"><span> } )</span></span></code></pre></div><h4 id="_3-1-2-alter-table-add" tabindex="-1"><a class="header-anchor" href="#_3-1-2-alter-table-add"><span>3.1.2 ALTER TABLE / ADD</span></a></h4><ul><li>SQL模式语句：</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>ALTER TABLE people</span></span>
<span class="line"><span>ADD join_date DATETIME</span></span></code></pre></div><ul><li>MongoDB 模式语句：</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.updateMany(</span></span>
<span class="line"><span>    { },</span></span>
<span class="line"><span>    { $set: { join_date: new Date() } }</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>集合不描述或强制执行其文档的结构；也就是说，在集合级别上没有结构上的改变。</p><p>但是，在文档级别， <a href="https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/#db.collection.updateMany" target="_blank" rel="noopener noreferrer">updateMany()</a>操作可以使用 <a href="https://docs.mongodb.com/manual/reference/operator/update/set/#up._S_set" target="_blank" rel="noopener noreferrer">$set</a>操作符向现有文档添加字段。</p><h4 id="_3-1-3-alter-table-drop-column" tabindex="-1"><a class="header-anchor" href="#_3-1-3-alter-table-drop-column"><span>3.1.3 ALTER TABLE / DROP COLUMN</span></a></h4><ul><li>SQL模式语句：</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>ALTER TABLE people</span></span>
<span class="line"><span>DROP COLUMN join_date</span></span></code></pre></div><ul><li>MongoDB 模式语句：</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.updateMany(</span></span>
<span class="line"><span>    { },</span></span>
<span class="line"><span>    { $unset: { &quot;join_date&quot;: &quot;&quot; } }</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>集合不描述或强制执行其文档的结构；也就是说，在集合级别上没有结构上的改变。</p><p>但是，在文档级别， <a href="https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/#db.collection.updateMany" target="_blank" rel="noopener noreferrer">updateMany()</a>操作可以使用 <a href="https://docs.mongodb.com/manual/reference/operator/update/unset/#up._S_unset" target="_blank" rel="noopener noreferrer">$unset</a>操作符从文档中删除字段。</p><h4 id="_3-1-4-create-index" tabindex="-1"><a class="header-anchor" href="#_3-1-4-create-index"><span>3.1.4 CREATE INDEX</span></a></h4><ul><li>SQL 模式语句：</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>CREATE INDEX idx_user_id_asc</span></span>
<span class="line"><span>ON people(user_id)</span></span></code></pre></div><ul><li>MongoDB 模式语句：</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.createIndex( { user_id: 1 } )</span></span></code></pre></div><h4 id="_3-1-5-create-index-multi" tabindex="-1"><a class="header-anchor" href="#_3-1-5-create-index-multi"><span>3.1.5 CREATE INDEX / Multi</span></a></h4><ul><li>SQL模式语句：</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>CREATE INDEX</span></span>
<span class="line"><span>       idx_user_id_asc_age_desc</span></span>
<span class="line"><span>ON people(user_id, age DESC)</span></span></code></pre></div><ul><li>MongoDB 模式语句：</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.createIndex( { user_id: 1, age: -1 } )</span></span></code></pre></div><h4 id="_3-1-6-drop-table" tabindex="-1"><a class="header-anchor" href="#_3-1-6-drop-table"><span>3.1.6 DROP TABLE</span></a></h4><ul><li>SQL模式语句：</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>DROP TABLE people</span></span></code></pre></div><ul><li>MongoDB 模式语句：</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.drop()</span></span></code></pre></div><h3 id="_3-2-insert" tabindex="-1"><a class="header-anchor" href="#_3-2-insert"><span>3.2 Insert</span></a></h3><p>下表显示了与向表中插入记录相关的各种 SQL 语句以及相应的 MongoDB 语句。</p><ul><li>SQL INSERT 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>INSERT INTO people(user_id,</span></span>
<span class="line"><span>                  age,</span></span>
<span class="line"><span>                  status)</span></span>
<span class="line"><span>VALUES (&quot;bcd001&quot;,</span></span>
<span class="line"><span>        45,</span></span>
<span class="line"><span>        &quot;A&quot;)</span></span></code></pre></div><ul><li>Mongodb insertOne() 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.insertOne(</span></span>
<span class="line"><span>   { user_id: &quot;bcd001&quot;, age: 45, status: &quot;A&quot; }</span></span>
<span class="line"><span>)</span></span></code></pre></div><h3 id="_3-3-select" tabindex="-1"><a class="header-anchor" href="#_3-3-select"><span>3.3 Select</span></a></h3><p>下表显示了与从表中读取记录相关的各种 SQL 语句以及相应的 MongoDB 语句。</p><blockquote><p>NOTE：</p><p><a href="https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find" target="_blank" rel="noopener noreferrer">find()</a>方法总是包含返回文档中的 <code>_id</code> 字段，除非通过 <a href="https://docs.mongodb.com/manual/tutorial/project-fields-from-query-results/#projection" target="_blank" rel="noopener noreferrer">projection</a>特别排除。 下面的一些 SQL 查询可能包含一个 <code>_id</code> 字段来反映这一点，即使该字段没有包含在相应的 <a href="https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find" target="_blank" rel="noopener noreferrer">find()</a>查询中。</p></blockquote><h4 id="_3-3-1-select-where" tabindex="-1"><a class="header-anchor" href="#_3-3-1-select-where"><span>3.3.1 SELECT ... WHERE</span></a></h4><ul><li>SQL 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT user_id, status</span></span>
<span class="line"><span>FROM people</span></span>
<span class="line"><span>WHERE status = &quot;A&quot;</span></span></code></pre></div><ul><li>Mongodb 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.find(</span></span>
<span class="line"><span>    { status: &quot;A&quot; },</span></span>
<span class="line"><span>    { user_id: 1, status: 1, _id: 0 }</span></span>
<span class="line"><span>)</span></span></code></pre></div><h4 id="_3-3-2-select-and" tabindex="-1"><a class="header-anchor" href="#_3-3-2-select-and"><span>3.3.2 SELECT ... AND</span></a></h4><ul><li>SQL 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT *</span></span>
<span class="line"><span>FROM people</span></span>
<span class="line"><span>WHERE age &gt; 25</span></span>
<span class="line"><span>AND   age &lt;= 50</span></span></code></pre></div><ul><li>Mongodb 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.find(</span></span>
<span class="line"><span>   { age: { $gt: 25, $lte: 50 } }</span></span>
<span class="line"><span>)</span></span></code></pre></div><h4 id="_3-3-3-select-or" tabindex="-1"><a class="header-anchor" href="#_3-3-3-select-or"><span>3.3.3 SELECT ... OR</span></a></h4><ul><li>SQL 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT *</span></span>
<span class="line"><span>FROM people</span></span>
<span class="line"><span>WHERE status = &quot;A&quot;</span></span>
<span class="line"><span>OR age = 50</span></span></code></pre></div><ul><li>Mongodb 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.find(</span></span>
<span class="line"><span>    { $or: [ { status: &quot;A&quot; } , { age: 50 } ] }</span></span>
<span class="line"><span>)</span></span></code></pre></div><h4 id="_3-3-4-select-like" tabindex="-1"><a class="header-anchor" href="#_3-3-4-select-like"><span>3.3.4 SELECT ... LIKE</span></a></h4><ul><li>SQL 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>FROM people</span></span>
<span class="line"><span>WHERE user_id like &quot;%bc%&quot;</span></span></code></pre></div><ul><li>Mongodb 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.find( { user_id: /bc/ } )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-or-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>db.people.find( { user_id: { $regex: /bc/ } } )</span></span></code></pre></div><h4 id="_3-3-5-select-oeder-by" tabindex="-1"><a class="header-anchor" href="#_3-3-5-select-oeder-by"><span>3.3.5 SELECT ... OEDER BY</span></a></h4><ul><li>SQL 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT *</span></span>
<span class="line"><span>FROM people</span></span>
<span class="line"><span>WHERE status = &quot;A&quot;</span></span>
<span class="line"><span>ORDER BY user_id ASC</span></span></code></pre></div><ul><li>Mongodb 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.find( { status: &quot;A&quot; } ).sort( { user_id: 1 } )</span></span></code></pre></div><h4 id="_3-3-6-select-count" tabindex="-1"><a class="header-anchor" href="#_3-3-6-select-count"><span>3.3.6 SELECT ... COUNT</span></a></h4><ul><li>SQL 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT COUNT(user_id)</span></span>
<span class="line"><span>FROM people</span></span></code></pre></div><ul><li>Mongodb 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.count( { user_id: { $exists: true } } )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>or</span></span>
<span class="line"><span></span></span>
<span class="line"><span>db.people.find( { user_id: { $exists: true } } ).count()</span></span></code></pre></div><h4 id="_3-3-7-select-distinct" tabindex="-1"><a class="header-anchor" href="#_3-3-7-select-distinct"><span>3.3.7 SELECT DISTINCT</span></a></h4><ul><li>SQL 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT DISTINCT(status)</span></span>
<span class="line"><span>FROM people</span></span></code></pre></div><ul><li>Mongodb 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.aggregate( [ { $group : { _id : &quot;$status&quot; } } ] )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>或者，对于不同的不超过 [BSON 大小限制](https://docs.mongodb.com/manual/reference/limits/#limit-bson-document-size) 的值集</span></span>
<span class="line"><span></span></span>
<span class="line"><span>db.people.distinct( &quot;status&quot; )</span></span></code></pre></div><h4 id="_3-3-8-select-limit-skip" tabindex="-1"><a class="header-anchor" href="#_3-3-8-select-limit-skip"><span>3.3.8 SELECT ... LIMIT SKIP</span></a></h4><ul><li>SQL 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT *</span></span>
<span class="line"><span>FROM people</span></span>
<span class="line"><span>LIMIT 5</span></span>
<span class="line"><span>SKIP 10</span></span></code></pre></div><ul><li>Mongodb 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.find().limit(5).skip(10)</span></span></code></pre></div><h4 id="_3-3-9-explain-select" tabindex="-1"><a class="header-anchor" href="#_3-3-9-explain-select"><span>3.3.9 EXPLAIN SELECT</span></a></h4><ul><li>SQL 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>EXPLAIN SELECT *</span></span>
<span class="line"><span>FROM people</span></span>
<span class="line"><span>WHERE status = &quot;A&quot;</span></span></code></pre></div><ul><li>Mongodb 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.find( { status: &quot;A&quot; } ).explain()</span></span></code></pre></div><h3 id="_3-4-update-records" tabindex="-1"><a class="header-anchor" href="#_3-4-update-records"><span>3.4 Update Records</span></a></h3><p>下面显示了与更新表中现有记录相关的各种 SQL 语句以及相应的 MongoDB 语句。</p><h4 id="_3-4-1-update-set" tabindex="-1"><a class="header-anchor" href="#_3-4-1-update-set"><span>3.4.1 UPDATE ... SET</span></a></h4><ul><li>SQL 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>UPDATE people</span></span>
<span class="line"><span>SET status = &quot;C&quot;</span></span>
<span class="line"><span>WHERE age &gt; 25</span></span></code></pre></div><ul><li>Mongodb 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.updateMany(</span></span>
<span class="line"><span>   { age: { $gt: 25 } },</span></span>
<span class="line"><span>   { $set: { status: &quot;C&quot; } }</span></span>
<span class="line"><span>)</span></span></code></pre></div><h4 id="_3-4-2-update-inc" tabindex="-1"><a class="header-anchor" href="#_3-4-2-update-inc"><span>3.4.2 UPDATE ... INC</span></a></h4><ul><li>SQL 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>UPDATE people</span></span>
<span class="line"><span>SET age = age + 3</span></span>
<span class="line"><span>WHERE status = &quot;A&quot;</span></span></code></pre></div><ul><li>Mongodb 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.updateMany(</span></span>
<span class="line"><span>   { status: &quot;A&quot; } ,</span></span>
<span class="line"><span>   { $inc: { age: 3 } }</span></span>
<span class="line"><span>)</span></span></code></pre></div><h3 id="_3-5-delete-records" tabindex="-1"><a class="header-anchor" href="#_3-5-delete-records"><span>3.5 Delete Records</span></a></h3><p>下面显示了与从表中删除记录相关的各种 SQL 语句以及相应的 MongoDB 语句。</p><h4 id="_3-5-1-delete-where" tabindex="-1"><a class="header-anchor" href="#_3-5-1-delete-where"><span>3.5.1 DELETE WHERE</span></a></h4><ul><li>SQL 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>DELETE FROM people</span></span>
<span class="line"><span>WHERE status = &quot;D&quot;</span></span></code></pre></div><ul><li>Mongodb 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.deleteMany( { status: &quot;D&quot; } )</span></span></code></pre></div><h4 id="_3-5-2-delete" tabindex="-1"><a class="header-anchor" href="#_3-5-2-delete"><span>3.5.2 DELETE</span></a></h4><ul><li>SQL 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>DELETE FROM people</span></span></code></pre></div><ul><li>Mongodb 语句</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.people.deleteMany({})</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://jelly.jd.com/exp/detail?id=5edf432cc27b86015c50187a" target="_blank" rel="noopener noreferrer"><strong>从 SQL 到 MongoDB 之概念篇</strong></a></p>`,128)]))}const p=e(r,[["render",t],["__file","mongodb-x-sql-mongo-overview.html.vue"]]),i=JSON.parse('{"path":"/posts/Database/MongoDB/mongodb-x-sql-mongo-overview.html","title":"从SQL到MongoDB之概念篇","lang":"zh-CN","frontmatter":{"aliases":"从SQL到MongoDB之概念篇","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 08:38","description":"从SQL到MongoDB之概念篇 1. 概念对应关系 SQL 术语和概念以及相应的 MongoDB 术语和概念. 下表介绍了各种 SQL 术语和概念以及相应的 MongoDB 术语和概念. TIP 在许多情况下， 非规范化数据模型（嵌入式文档和数组） denormalized data model (embedded documents and arr...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MongoDB/mongodb-x-sql-mongo-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"从SQL到MongoDB之概念篇"}],["meta",{"property":"og:description","content":"从SQL到MongoDB之概念篇 1. 概念对应关系 SQL 术语和概念以及相应的 MongoDB 术语和概念. 下表介绍了各种 SQL 术语和概念以及相应的 MongoDB 术语和概念. TIP 在许多情况下， 非规范化数据模型（嵌入式文档和数组） denormalized data model (embedded documents and arr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"从SQL到MongoDB之概念篇\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 概念对应关系","slug":"_1-概念对应关系","link":"#_1-概念对应关系","children":[]},{"level":2,"title":"2. 可执行文件","slug":"_2-可执行文件","link":"#_2-可执行文件","children":[]},{"level":2,"title":"3. 示例","slug":"_3-示例","link":"#_3-示例","children":[{"level":3,"title":"3.1 Create and Alter","slug":"_3-1-create-and-alter","link":"#_3-1-create-and-alter","children":[]},{"level":3,"title":"3.2 Insert","slug":"_3-2-insert","link":"#_3-2-insert","children":[]},{"level":3,"title":"3.3 Select","slug":"_3-3-select","link":"#_3-3-select","children":[]},{"level":3,"title":"3.4 Update Records","slug":"_3-4-update-records","link":"#_3-4-update-records","children":[]},{"level":3,"title":"3.5 Delete Records","slug":"_3-5-delete-records","link":"#_3-5-delete-records","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.51,"words":1353},"filePathRelative":"posts/Database/MongoDB/mongodb-x-sql-mongo-overview.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 概念对应关系</h2>\\n<p>SQL 术语和概念以及相应的 MongoDB 术语和概念.</p>\\n<p>下表介绍了各种 SQL 术语和概念以及相应的 MongoDB 术语和概念.</p>\\n<table>\\n<thead>\\n<tr>\\n<th>SQL术语/概念</th>\\n<th>MongoDB 术语/概念</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>database</td>\\n<td><a href=\\"https://docs.mongodb.com/manual/reference/glossary/#term-database\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">database</a></td>\\n</tr>\\n<tr>\\n<td>table</td>\\n<td><a href=\\"https://docs.mongodb.com/manual/reference/glossary/#term-collection\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">collection</a></td>\\n</tr>\\n<tr>\\n<td>row</td>\\n<td><a href=\\"https://docs.mongodb.com/manual/reference/glossary/#term-document\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">document</a>或 <a href=\\"https://docs.mongodb.com/manual/reference/glossary/#term-bson\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">BSON</a>document</td>\\n</tr>\\n<tr>\\n<td>column</td>\\n<td><a href=\\"https://docs.mongodb.com/manual/reference/glossary/#term-field\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">field</a></td>\\n</tr>\\n<tr>\\n<td>index</td>\\n<td><a href=\\"https://docs.mongodb.com/manual/reference/glossary/#term-index\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">index</a></td>\\n</tr>\\n<tr>\\n<td>table joins （表联接）</td>\\n<td><a href=\\"https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/#pipe._S_lookup\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">$lookup</a>, <code>embedded documents （嵌入式文档）</code></td>\\n</tr>\\n<tr>\\n<td>primary key 指定任何唯一的列或者列组合作为主键</td>\\n<td><a href=\\"https://docs.mongodb.com/manual/reference/glossary/#term-primary-key\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">primary key </a>在 MongoDB 中, 主键自动设置为 <a href=\\"https://docs.mongodb.com/manual/reference/glossary/#term-id\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">_id </a>字段</td>\\n</tr>\\n<tr>\\n<td>aggregation (如：group by)</td>\\n<td><code>aggregation pipeline （聚合管道）</code>参考： <a href=\\"https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">SQL to Aggregation Mapping Chart</a></td>\\n</tr>\\n<tr>\\n<td>SELECT INTO NEW_TABLE</td>\\n<td><a href=\\"https://docs.mongodb.com/manual/reference/operator/aggregation/out/#pipe._S_out\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">$out </a>参考： <a href=\\"https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">SQL to Aggregation Mapping Chart</a></td>\\n</tr>\\n<tr>\\n<td>MERGE INTO TABLE</td>\\n<td><a href=\\"https://docs.mongodb.com/manual/reference/operator/aggregation/merge/#pipe._S_merge\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">$merge</a>（从MongoDB 4.2开始可用） 参考： <a href=\\"https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">SQL to Aggregation Mapping Chart</a></td>\\n</tr>\\n<tr>\\n<td>transactions</td>\\n<td><a href=\\"https://docs.mongodb.com/manual/core/transactions/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">transactions</a></td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{p as comp,i as data};
