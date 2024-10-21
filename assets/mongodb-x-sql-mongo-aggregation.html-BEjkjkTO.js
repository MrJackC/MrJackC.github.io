import{_ as s,c as n,a as e,o as p}from"./app-BhoNqsD-.js";const o={};function r(l,a){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="从sql到mongodb之聚合篇" tabindex="-1"><a class="header-anchor" href="#从sql到mongodb之聚合篇"><span>从SQL到MongoDB之聚合篇</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>聚合管道 （ <a href="https://docs.mongodb.com/manual/core/aggregation-pipeline/" target="_blank" rel="noopener noreferrer">aggregation pipeline</a>） 让 MongoDB 提供与 SQL 中的许多常见数据聚合操作相对应的，原生的聚合功能。</p><h3 id="_1-1-术语" tabindex="-1"><a class="header-anchor" href="#_1-1-术语"><span>1.1 术语</span></a></h3><p>下表概述了常见的 SQL 聚合术语、函数和概念以及相应的 MongoDB 聚合操作符（ <a href="https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/#aggregation-pipeline-operator-reference" target="_blank" rel="noopener noreferrer">aggregation operators</a>）：</p><table><thead><tr><th>SQL 术语、函数和概念</th><th>MongoDB 聚合操作符</th></tr></thead><tbody><tr><td>WHERE</td><td><a href="https://docs.mongodb.com/manual/reference/operator/aggregation/match/#pipe._S_match" target="_blank" rel="noopener noreferrer">$match</a></td></tr><tr><td>GROUP BY</td><td><a href="https://docs.mongodb.com/manual/reference/operator/aggregation/group/#pipe._S_group" target="_blank" rel="noopener noreferrer">$group</a></td></tr><tr><td>HAVING</td><td><a href="https://docs.mongodb.com/manual/reference/operator/aggregation/match/#pipe._S_match" target="_blank" rel="noopener noreferrer">$match</a></td></tr><tr><td>SELECT</td><td><a href="https://docs.mongodb.com/manual/reference/operator/aggregation/project/#pipe._S_project" target="_blank" rel="noopener noreferrer">$project</a></td></tr><tr><td>ORDER BY</td><td><a href="https://docs.mongodb.com/manual/reference/operator/aggregation/sort/#pipe._S_sort" target="_blank" rel="noopener noreferrer">$sort</a></td></tr><tr><td>LIMIT</td><td><a href="https://docs.mongodb.com/manual/reference/operator/aggregation/limit/#pipe._S_limit" target="_blank" rel="noopener noreferrer">$limit</a></td></tr><tr><td>SUM()</td><td><a href="https://docs.mongodb.com/manual/reference/operator/aggregation/sum/#grp._S_sum" target="_blank" rel="noopener noreferrer">$sum</a></td></tr><tr><td>COUNT()</td><td><a href="https://docs.mongodb.com/manual/reference/operator/aggregation/sortByCount/#pipe._S_sortByCount" target="_blank" rel="noopener noreferrer"><span class="katex-error" title="ParseError: KaTeX parse error: Expected &#39;EOF&#39;, got &#39;#&#39; at position 74: …ggregation/sum/#̲grp._S_sum)[" style="color:#cc0000;">sum ](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/#grp._S_sum)[</span>sortByCount</a></td></tr><tr><td>join</td><td><a href="https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/#pipe._S_lookup" target="_blank" rel="noopener noreferrer">$lookup</a></td></tr><tr><td>SELECT INTO NEW_TABLE</td><td><a href="https://docs.mongodb.com/manual/reference/operator/aggregation/out/#pipe._S_out" target="_blank" rel="noopener noreferrer">$out</a></td></tr><tr><td>MERGE INTO TABLE</td><td><a href="https://docs.mongodb.com/manual/reference/operator/aggregation/merge/#pipe._S_merge" target="_blank" rel="noopener noreferrer">$merge </a>MongoDB 4.2 可用</td></tr></tbody></table><p>有关所有聚合管道和表达式操作符的列表，请参见： <a href="https://docs.mongodb.com/manual/meta/aggregation-quick-reference/" target="_blank" rel="noopener noreferrer">Aggregation Pipeline Quick Reference</a>。</p><h2 id="_2-语法示例" tabindex="-1"><a class="header-anchor" href="#_2-语法示例"><span>2. 语法示例</span></a></h2><p>下面提供了 SQL 聚合语句和相应的 MongoDB 语句，表中的例子假定以下条件：</p><ul><li>SQL 示例假定有两个表：<code>orders</code> 和 <code>order_lineitem</code>，然后通过 <code>order_lineitem.order_id</code> 和 <code>orders.id</code> 进行 <code>join</code> 操作。</li><li>MongoDB 示例假设其中一个集合（collection） <code>orders</code> 包含以下原型的文档（documents）：</li></ul><div class="language-json" data-ext="json" data-title="json"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">  cust_id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;abc123&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">  ord_date</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">ISODate(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;2012-11-02T17:04:11.102Z&quot;</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">  status</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">&#39;A&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">  price</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">50</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">  items</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [ { </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">sku</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;xxx&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">qty</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">25</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">price</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">           { </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">sku</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;yyy&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">qty</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">25</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">price</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> } ]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="_2-1-count-vs-count" tabindex="-1"><a class="header-anchor" href="#_2-1-count-vs-count"><span>2.1 COUNT vs count</span></a></h3><p>计算所有 <code>orders</code> 记录数量：</p><ul><li>SQL 示例</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT COUNT(*) AS count</span></span>
<span class="line"><span>FROM orders</span></span></code></pre></div><ul><li>MongoDB 示例</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.orders.aggregate( [</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>     $group: {</span></span>
<span class="line"><span>        _id: null,</span></span>
<span class="line"><span>        count: { $sum: 1 }</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>] )</span></span></code></pre></div><h3 id="_2-2-sum-vs-sum" tabindex="-1"><a class="header-anchor" href="#_2-2-sum-vs-sum"><span>2.2 SUM vs <code>$sum</code></span></a></h3><p>计算 <code>orders</code> 中 <code>price</code> 的总和：</p><ul><li>SQL 示例</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT SUM(price) AS total</span></span>
<span class="line"><span>FROM orders</span></span></code></pre></div><ul><li>MongoDB 示例</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.orders.aggregate( [</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>     $group: {</span></span>
<span class="line"><span>        _id: null,</span></span>
<span class="line"><span>        total: { $sum: &quot;$price&quot; }</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>] )</span></span></code></pre></div><h3 id="_2-3-group-by-vs-group" tabindex="-1"><a class="header-anchor" href="#_2-3-group-by-vs-group"><span>2.3 GROUP BY vs <code>$group</code></span></a></h3><p>对于每一个独特的 <code>cust_id</code>，计算 <code>price</code> 字段总和：</p><ul><li>SQL 示例</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT cust_id,</span></span>
<span class="line"><span>       SUM(price) AS total</span></span>
<span class="line"><span>FROM orders</span></span>
<span class="line"><span>GROUP BY cust_id</span></span></code></pre></div><ul><li>MongoDB 示例</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.orders.aggregate( [</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>     $group: {</span></span>
<span class="line"><span>        _id: &quot;$cust_id&quot;,</span></span>
<span class="line"><span>        total: { $sum: &quot;$price&quot; }</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>] )</span></span></code></pre></div><h3 id="_2-4-order-by-vs-sort" tabindex="-1"><a class="header-anchor" href="#_2-4-order-by-vs-sort"><span>2.4 ORDER BY vs <code>$sort</code></span></a></h3><p>对于每一个独特的 <code>cust_id</code>，计算 <code>price</code> 字段总和，且结果按总和排序：</p><ul><li>SQL 示例</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT cust_id,</span></span>
<span class="line"><span>       SUM(price) AS total</span></span>
<span class="line"><span>FROM orders</span></span>
<span class="line"><span>GROUP BY cust_id</span></span>
<span class="line"><span>ORDER BY total</span></span></code></pre></div><ul><li>MongoDB 示例</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.orders.aggregate( [</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>     $group: {</span></span>
<span class="line"><span>        _id: &quot;$cust_id&quot;,</span></span>
<span class="line"><span>        total: { $sum: &quot;$price&quot; }</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>   { $sort: { total: 1 } }</span></span>
<span class="line"><span>] )</span></span></code></pre></div><h3 id="_2-5-group-by-multi" tabindex="-1"><a class="header-anchor" href="#_2-5-group-by-multi"><span>2.5 GROUP BY Multi</span></a></h3><p>对于每一个独特的 <code>cust_id</code>，按照 <code>ord_date</code> 进行分组，且不包含日期的时间部分，计算 <code>price</code> 字段总和。</p><ul><li>SQL 示例</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT cust_id,</span></span>
<span class="line"><span>       ord_date,</span></span>
<span class="line"><span>       SUM(price) AS total</span></span>
<span class="line"><span>FROM orders</span></span>
<span class="line"><span>GROUP BY cust_id,</span></span>
<span class="line"><span>         ord_date</span></span></code></pre></div><ul><li>MongoDB 示例</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.orders.aggregate( [</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>     $group: {</span></span>
<span class="line"><span>        _id: {</span></span>
<span class="line"><span>           cust_id: &quot;$cust_id&quot;,</span></span>
<span class="line"><span>           ord_date: { $dateToString: {</span></span>
<span class="line"><span>              format: &quot;%Y-%m-%d&quot;,</span></span>
<span class="line"><span>              date: &quot;$ord_date&quot;</span></span>
<span class="line"><span>           }}</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        total: { $sum: &quot;$price&quot; }</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>] )</span></span></code></pre></div><h3 id="_2-6-having-vs-match" tabindex="-1"><a class="header-anchor" href="#_2-6-having-vs-match"><span>2.6 HAVING vs <code>$match</code></span></a></h3><p>对于 <code>cust_id</code> 如果有多个记录，就返回 <code>cust_id</code> 以及相应的记录数量：</p><ul><li>SQL 示例</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT cust_id,</span></span>
<span class="line"><span>       count(*)</span></span>
<span class="line"><span>FROM orders</span></span>
<span class="line"><span>GROUP BY cust_id</span></span>
<span class="line"><span>HAVING count(*) &gt; 1</span></span></code></pre></div><ul><li>MongoDB 示例</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.orders.aggregate( [</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>     $group: {</span></span>
<span class="line"><span>        _id: &quot;$cust_id&quot;,</span></span>
<span class="line"><span>        count: { $sum: 1 }</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>   { $match: { count: { $gt: 1 } } }</span></span>
<span class="line"><span>] )</span></span></code></pre></div><h3 id="_2-7-where-vs-match" tabindex="-1"><a class="header-anchor" href="#_2-7-where-vs-match"><span>2.7 WHERE vs <code>$match</code></span></a></h3><p>对于每一个独特的 <code>cust_id</code>，且 <code>status = ‘A’</code>，计算 <code>price</code> 字段总和，只有在总和大于 250 的情况下，才可以返回。</p><ul><li>SQL 示例</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT cust_id,</span></span>
<span class="line"><span>       SUM(price) as total</span></span>
<span class="line"><span>FROM orders</span></span>
<span class="line"><span>WHERE status = &#39;A&#39;</span></span>
<span class="line"><span>GROUP BY cust_id</span></span>
<span class="line"><span>HAVING total &gt; 250</span></span></code></pre></div><ul><li>MongoDB 示例</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.orders.aggregate( [</span></span>
<span class="line"><span>   { $match: { status: &#39;A&#39; } },</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>     $group: {</span></span>
<span class="line"><span>        _id: &quot;$cust_id&quot;,</span></span>
<span class="line"><span>        total: { $sum: &quot;$price&quot; }</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>   { $match: { total: { $gt: 250 } } }</span></span>
<span class="line"><span>] )</span></span></code></pre></div><h3 id="_2-8-unwind" tabindex="-1"><a class="header-anchor" href="#_2-8-unwind"><span>2.8 <code>$unwind</code></span></a></h3><p>对于每一个独特的 <code>cust_id</code>，对相应的行的 item 项求和得到 <code>qty</code>：</p><ul><li>SQL 示例</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT cust_id,</span></span>
<span class="line"><span>       SUM(li.qty) as qty</span></span>
<span class="line"><span>FROM orders o,</span></span>
<span class="line"><span>     order_lineitem li</span></span>
<span class="line"><span>WHERE li.order_id = o.id</span></span>
<span class="line"><span>GROUP BY cust_id</span></span></code></pre></div><ul><li>MongoDB 示例</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>db.orders.aggregate( [</span></span>
<span class="line"><span>   { $unwind: &quot;$items&quot; },</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>     $group: {</span></span>
<span class="line"><span>        _id: &quot;$cust_id&quot;,</span></span>
<span class="line"><span>        qty: { $sum: &quot;$items.qty&quot; }</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>] )</span></span></code></pre></div><h3 id="_2-9-multi-aggregate" tabindex="-1"><a class="header-anchor" href="#_2-9-multi-aggregate"><span>2.9 Multi aggregate</span></a></h3><p>将 <code>cust_id</code>, <code>ord_date</code> 分组并计算数量 ，不包括日期的时间部分。</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT COUNT(*)</span></span>
<span class="line"><span>FROM (SELECT cust_id,</span></span>
<span class="line"><span>             ord_date</span></span>
<span class="line"><span>      FROM orders</span></span>
<span class="line"><span>      GROUP BY cust_id,</span></span>
<span class="line"><span>               ord_date)</span></span>
<span class="line"><span>      as DerivedTable</span></span>
<span class="line"><span>db.orders.aggregate( [</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>     $group: {</span></span>
<span class="line"><span>        _id: {</span></span>
<span class="line"><span>           cust_id: &quot;$cust_id&quot;,</span></span>
<span class="line"><span>           ord_date: { $dateToString: {</span></span>
<span class="line"><span>              format: &quot;%Y-%m-%d&quot;,</span></span>
<span class="line"><span>              date: &quot;$ord_date&quot;</span></span>
<span class="line"><span>           }}</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>     $group: {</span></span>
<span class="line"><span>        _id: null,</span></span>
<span class="line"><span>        count: { $sum: 1 }</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>] )</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://jelly.jd.com/article/5edf43da70bb2b0168e022b2" target="_blank" rel="noopener noreferrer"><strong>从 SQL 到 MongoDB 之聚合篇</strong></a></p>`,64)]))}const t=s(o,[["render",r],["__file","mongodb-x-sql-mongo-aggregation.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/MongoDB/mongodb-x-sql-mongo-aggregation.html","title":"从SQL到MongoDB之聚合篇","lang":"zh-CN","frontmatter":{"aliases":"从SQL到MongoDB之聚合篇","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 08:38","description":"从SQL到MongoDB之聚合篇 1. 简介 聚合管道 （ aggregation pipeline） 让 MongoDB 提供与 SQL 中的许多常见数据聚合操作相对应的，原生的聚合功能。 1.1 术语 下表概述了常见的 SQL 聚合术语、函数和概念以及相应的 MongoDB 聚合操作符（ aggregation operators）： 有关所有聚合...","head":[["meta",{"property":"og:url","content":"https://mrjason.me/posts/Database/MongoDB/mongodb-x-sql-mongo-aggregation.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"从SQL到MongoDB之聚合篇"}],["meta",{"property":"og:description","content":"从SQL到MongoDB之聚合篇 1. 简介 聚合管道 （ aggregation pipeline） 让 MongoDB 提供与 SQL 中的许多常见数据聚合操作相对应的，原生的聚合功能。 1.1 术语 下表概述了常见的 SQL 聚合术语、函数和概念以及相应的 MongoDB 聚合操作符（ aggregation operators）： 有关所有聚合..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"从SQL到MongoDB之聚合篇\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjason.me\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 术语","slug":"_1-1-术语","link":"#_1-1-术语","children":[]}]},{"level":2,"title":"2. 语法示例","slug":"_2-语法示例","link":"#_2-语法示例","children":[{"level":3,"title":"2.1 COUNT vs count","slug":"_2-1-count-vs-count","link":"#_2-1-count-vs-count","children":[]},{"level":3,"title":"2.2 SUM vs $sum","slug":"_2-2-sum-vs-sum","link":"#_2-2-sum-vs-sum","children":[]},{"level":3,"title":"2.3 GROUP BY vs $group","slug":"_2-3-group-by-vs-group","link":"#_2-3-group-by-vs-group","children":[]},{"level":3,"title":"2.4 ORDER BY vs $sort","slug":"_2-4-order-by-vs-sort","link":"#_2-4-order-by-vs-sort","children":[]},{"level":3,"title":"2.5 GROUP BY Multi","slug":"_2-5-group-by-multi","link":"#_2-5-group-by-multi","children":[]},{"level":3,"title":"2.6 HAVING vs $match","slug":"_2-6-having-vs-match","link":"#_2-6-having-vs-match","children":[]},{"level":3,"title":"2.7 WHERE vs $match","slug":"_2-7-where-vs-match","link":"#_2-7-where-vs-match","children":[]},{"level":3,"title":"2.8 $unwind","slug":"_2-8-unwind","link":"#_2-8-unwind","children":[]},{"level":3,"title":"2.9 Multi aggregate","slug":"_2-9-multi-aggregate","link":"#_2-9-multi-aggregate","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.77,"words":832},"filePathRelative":"posts/Database/MongoDB/mongodb-x-sql-mongo-aggregation.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>聚合管道 （ <a href=\\"https://docs.mongodb.com/manual/core/aggregation-pipeline/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">aggregation pipeline</a>） 让 MongoDB 提供与 SQL 中的许多常见数据聚合操作相对应的，原生的聚合功能。</p>\\n<h3>1.1 术语</h3>\\n<p>下表概述了常见的 SQL 聚合术语、函数和概念以及相应的 MongoDB 聚合操作符（ <a href=\\"https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/#aggregation-pipeline-operator-reference\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">aggregation operators</a>）：</p>","autoDesc":true}');export{t as comp,c as data};
