import{_ as s,c as e,a as o,o as n}from"./app-tJW29Kmg.js";const r={};function i(t,a){return n(),e("div",null,a[0]||(a[0]=[o(`<h1 id="_5e数据大表-分区表查数据" tabindex="-1"><a class="header-anchor" href="#_5e数据大表-分区表查数据"><span>5e数据大表，分区表查数据</span></a></h1><p>分区表是按日自动创建的。</p><p>记下思路</p><ol><li><p>查询出该表所有分区</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> PARTITION_NAME, HIGH_VALUE </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user_tab_partitions </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> table_name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;DAVE&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div></li><li><p>对比 HIGH_VALUE 查出近3年的所有分区值</p></li><li><p>将所有分区值进行union all</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dave </span><span style="color:#C678DD;--shiki-dark:#C678DD;">partition</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(SYS_P53)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">UNION ALL</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dave </span><span style="color:#C678DD;--shiki-dark:#C678DD;">partition</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(SYS_P54)</span></span></code></pre></div></li></ol>`,4)]))}const p=s(r,[["render",i],["__file","oracle-y-partition-query.html.vue"]]),c=JSON.parse(`{"path":"/posts/Database/ORACLE/oracle-y-partition-query.html","title":"5e数据大表，分区表查数据","lang":"zh-CN","frontmatter":{"aliases":"5e数据大表，分区表查数据","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 09:58","description":"5e数据大表，分区表查数据 分区表是按日自动创建的。 记下思路 查询出该表所有分区 对比 HIGH_VALUE 查出近3年的所有分区值 将所有分区值进行union all","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/ORACLE/oracle-y-partition-query.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"5e数据大表，分区表查数据"}],["meta",{"property":"og:description","content":"5e数据大表，分区表查数据 分区表是按日自动创建的。 记下思路 查询出该表所有分区 对比 HIGH_VALUE 查出近3年的所有分区值 将所有分区值进行union all"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5e数据大表，分区表查数据\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.37,"words":111},"filePathRelative":"posts/Database/ORACLE/oracle-y-partition-query.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>分区表是按日自动创建的。</p>\\n<p>记下思路</p>\\n<ol>\\n<li>\\n<p>查询出该表所有分区</p>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> PARTITION_NAME, HIGH_VALUE </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> user_tab_partitions </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">where</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> table_name</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'DAVE'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span></code></pre>\\n</div></li>\\n<li>\\n<p>对比 HIGH_VALUE 查出近3年的所有分区值</p>\\n</li>\\n<li>\\n<p>将所有分区值进行union all</p>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> * </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> dave </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">partition</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(SYS_P53)</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">UNION ALL</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> * </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> dave </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">partition</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(SYS_P54)</span></span></code></pre>\\n</div></li>\\n</ol>","autoDesc":true}`);export{p as comp,c as data};
