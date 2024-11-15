import{_ as s,c as a,a as n,o as e}from"./app-fWubcX7c.js";const p={};function l(i,t){return e(),a("div",null,t[0]||(t[0]=[n(`<h1 id="sql多字段聚合统计的思考" tabindex="-1"><a class="header-anchor" href="#sql多字段聚合统计的思考"><span>SQL多字段聚合统计的思考</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>我项目中有个需求，需要统计分组中的两个字段的汇总值。</p><p>需求大体如下：</p><p>假设要统计每个年段的主科教师人数，这些教师信息是存在每个班级中</p><blockquote><p>可能例子不够恰当，但是在我的业务中是存在这样一个场景的</p></blockquote><table><thead><tr><th>班级id</th><th>年段</th><th>语文老师</th><th>数学老师</th></tr></thead><tbody><tr><td>1</td><td>一年级</td><td>张三</td><td>李四</td></tr><tr><td>2</td><td>一年级</td><td>李四</td><td>张三</td></tr><tr><td>3</td><td>二年级</td><td>张三</td><td>李四</td></tr></tbody></table><h2 id="_2-面临的问题" tabindex="-1"><a class="header-anchor" href="#_2-面临的问题"><span>2. 面临的问题</span></a></h2><p>我要得到每个年段的，语文老师数和数学老师数，都非常好取</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 年级, </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">distinct</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 语文老师) , </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">distinct</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 数学老师) ,</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 班级表 </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">group by</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 年级;</span></span></code></pre></div><p>我也没有建表，只讲思路</p><p>但现在要求老师总和，我 <code>count(distinct 语文老师) , count(distinct 数学老师)</code> 并不能合在一起。</p><ul><li>count(distinct 语文老师)+ count(distinct 数学老师) 不等于总老师数</li></ul><p>因为他们会存在重复的情况</p><h2 id="_3-解决" tabindex="-1"><a class="header-anchor" href="#_3-解决"><span>3. 解决</span></a></h2><h3 id="_3-1-方案一" tabindex="-1"><a class="header-anchor" href="#_3-1-方案一"><span>3.1 方案一：</span></a></h3><p>使用union all 查出符合条件的老师。再group by 出来</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>select 年级,count (distinct 老师)</span></span>
<span class="line"><span>from (</span></span>
<span class="line"><span>         select f1.年级 年级,f1.语文老师 as 老师</span></span>
<span class="line"><span>         from 班级表 f1</span></span>
<span class="line"><span>         where f1.KPFAID = &#39;5f67db08f3a848bdb7d1993206c9efff&#39;</span></span>
<span class="line"><span>         group by f1.年级,f1.语文老师</span></span>
<span class="line"><span>         union all</span></span>
<span class="line"><span>         select f2.年级  年级, f2.数学老师 as 老师</span></span>
<span class="line"><span>         from 班级表 f2</span></span>
<span class="line"><span>         where f2.KPFAID = &#39;5f67db08f3a848bdb7d1993206c9efff&#39;</span></span>
<span class="line"><span>        group by f2.年级,f2.数学老师</span></span>
<span class="line"><span>         )</span></span>
<span class="line"><span>group by 年级</span></span></code></pre></div><p>这样可能存在性能问题，如果表太大的话</p><h3 id="_3-2-redis" tabindex="-1"><a class="header-anchor" href="#_3-2-redis"><span>3.2 redis</span></a></h3><p>将老师放到redis set中</p>`,21)]))}const d=s(p,[["render",l],["__file","sql-multi-field-aggregation.html.vue"]]),o=JSON.parse('{"path":"/posts/Daily-Thoughts/deepImpression/sql-multi-field-aggregation.html","title":"SQL多字段聚合统计的思考","lang":"zh-CN","frontmatter":{"aliases":"SQL多字段聚合统计的思考","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:53","updated":"2024-03-13 14:16","description":"SQL多字段聚合统计的思考 1. 背景 我项目中有个需求，需要统计分组中的两个字段的汇总值。 需求大体如下： 假设要统计每个年段的主科教师人数，这些教师信息是存在每个班级中 可能例子不够恰当，但是在我的业务中是存在这样一个场景的 2. 面临的问题 我要得到每个年段的，语文老师数和数学老师数，都非常好取 我也没有建表，只讲思路 但现在要求老师总和，我 c...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Daily-Thoughts/deepImpression/sql-multi-field-aggregation.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"SQL多字段聚合统计的思考"}],["meta",{"property":"og:description","content":"SQL多字段聚合统计的思考 1. 背景 我项目中有个需求，需要统计分组中的两个字段的汇总值。 需求大体如下： 假设要统计每个年段的主科教师人数，这些教师信息是存在每个班级中 可能例子不够恰当，但是在我的业务中是存在这样一个场景的 2. 面临的问题 我要得到每个年段的，语文老师数和数学老师数，都非常好取 我也没有建表，只讲思路 但现在要求老师总和，我 c..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SQL多字段聚合统计的思考\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 面临的问题","slug":"_2-面临的问题","link":"#_2-面临的问题","children":[]},{"level":2,"title":"3. 解决","slug":"_3-解决","link":"#_3-解决","children":[{"level":3,"title":"3.1 方案一：","slug":"_3-1-方案一","link":"#_3-1-方案一","children":[]},{"level":3,"title":"3.2 redis","slug":"_3-2-redis","link":"#_3-2-redis","children":[]}]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.4,"words":419},"filePathRelative":"posts/Daily-Thoughts/deepImpression/sql-multi-field-aggregation.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>我项目中有个需求，需要统计分组中的两个字段的汇总值。</p>\\n<p>需求大体如下：</p>\\n<p>假设要统计每个年段的主科教师人数，这些教师信息是存在每个班级中</p>\\n<blockquote>\\n<p>可能例子不够恰当，但是在我的业务中是存在这样一个场景的</p>\\n</blockquote>\\n<table>\\n<thead>\\n<tr>\\n<th>班级id</th>\\n<th>年段</th>\\n<th>语文老师</th>\\n<th>数学老师</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>1</td>\\n<td>一年级</td>\\n<td>张三</td>\\n<td>李四</td>\\n</tr>\\n<tr>\\n<td>2</td>\\n<td>一年级</td>\\n<td>李四</td>\\n<td>张三</td>\\n</tr>\\n<tr>\\n<td>3</td>\\n<td>二年级</td>\\n<td>张三</td>\\n<td>李四</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{d as comp,o as data};
