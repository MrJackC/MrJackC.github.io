import{_ as a,c as n,a as i,o as l}from"./app-CQys7GfP.js";const r={};function e(p,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="达梦数据库管理常用-sql-命令" tabindex="-1"><a class="header-anchor" href="#达梦数据库管理常用-sql-命令"><span>达梦数据库管理常用 SQL 命令</span></a></h1><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--查询数据库版本</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  v$</span><span style="color:#C678DD;--shiki-dark:#C678DD;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--查询授权信息</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  v$license;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--查询服务器信息</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  V$SYSTEMINFO;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--查询会话连接信息</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  v$</span><span style="color:#C678DD;--shiki-dark:#C678DD;">sessions</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">  count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(*),</span><span style="color:#C678DD;--shiki-dark:#C678DD;">state</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> v$</span><span style="color:#C678DD;--shiki-dark:#C678DD;">sessions</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> group by</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> state</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">  count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(*),clnt_ip </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> v$</span><span style="color:#C678DD;--shiki-dark:#C678DD;">sessions</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> group by</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> clnt_ip;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--查看数据库服务器配置参数</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  v$dm_ini;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--查询最近的 SQL 执行记录</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  v$sql_history;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--查询某个用户下所有的表</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  user_tables; </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--查询当前用户下所有的表</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  all_tables </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> owner</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">’TEST’; </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--dba 用户查询某个模式下的所有表</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--查询某个用户下所有表字段</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  all_tab_cols </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> owner</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">’TEST’;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--查看表注释</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  ALL_TAB_COMMENTS </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ower</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">’TEST’;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--查看字段注释</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  ALL_COL_COMMENTS </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ower</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">’TEST’;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;实例名称&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 数据库选项,INSTANCE_NAME 数据库集群相关参数值 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> v$instance </span><span style="color:#C678DD;--shiki-dark:#C678DD;">union all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;数据库版本&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,substr(svr_version,instr(svr_version,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;(&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> v$instance </span><span style="color:#C678DD;--shiki-dark:#C678DD;">union all</span><span style="color:#C678DD;--shiki-dark:#C678DD;">   SELECT</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;字符集&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;">CASE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> SF_GET_UNICODE_FLAG()</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">WHEN</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;0&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> THEN</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;GBK18030&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> WHEN</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;1&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> then</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;UTF-8&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> when</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;2&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> then</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;EUC-KR&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> end</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> union all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">SELECT</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;页大小&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">cast</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">PAGE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()/</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1024</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> as</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">union all</span><span style="color:#C678DD;--shiki-dark:#C678DD;">   SELECT</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;簇大小&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">cast</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(SF_GET_EXTENT_SIZE() </span><span style="color:#C678DD;--shiki-dark:#C678DD;">as</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">union all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">SELECT</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;大小写敏感&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">cast</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(SF_GET_CASE_SENSITIVE_FLAG() </span><span style="color:#C678DD;--shiki-dark:#C678DD;">as</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">union all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;数据库模式&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,MODE$ </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> v$instance </span><span style="color:#C678DD;--shiki-dark:#C678DD;">union all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;唯一魔数&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">cast</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(permanent_magic </span><span style="color:#C678DD;--shiki-dark:#C678DD;">as</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">union all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;LSN&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">cast</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(cur_lsn </span><span style="color:#C678DD;--shiki-dark:#C678DD;">as</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> v$rlog;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.modb.pro/db/34627" target="_blank" rel="noopener noreferrer">DM达梦数据库管理常用 SQL 命令</a></p>`,4)]))}const k=a(r,[["render",e],["__file","dm-manage-sql.html.vue"]]),B=JSON.parse(`{"path":"/posts/Database/DM/dm-manage-sql.html","title":"达梦数据库管理常用 SQL 命令","lang":"zh-CN","frontmatter":{"description":"达梦数据库管理常用 SQL 命令 参考文章 DM达梦数据库管理常用 SQL 命令","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/DM/dm-manage-sql.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"达梦数据库管理常用 SQL 命令"}],["meta",{"property":"og:description","content":"达梦数据库管理常用 SQL 命令 参考文章 DM达梦数据库管理常用 SQL 命令"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"达梦数据库管理常用 SQL 命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.13,"words":339},"filePathRelative":"posts/Database/DM/dm-manage-sql.md","localizedDate":"2024年10月21日","excerpt":"\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">--查询数据库版本</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> * </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  v$</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">version</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">--查询授权信息</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> * </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  v$license;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">--查询服务器信息</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> * </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  V$SYSTEMINFO;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">--查询会话连接信息</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> * </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  v$</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">sessions</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">  count</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(*),</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">state</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> v$</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">sessions</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> group by</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> state</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">  count</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(*),clnt_ip </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> v$</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">sessions</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> group by</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> clnt_ip;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">--查看数据库服务器配置参数</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> * </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  v$dm_ini;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">--查询最近的 SQL 执行记录</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> * </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  v$sql_history;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">--查询某个用户下所有的表</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> * </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  user_tables; </span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">--查询当前用户下所有的表</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> * </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  all_tables </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">where</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> owner</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">’TEST’; </span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">--dba 用户查询某个模式下的所有表</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">--查询某个用户下所有表字段</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> * </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  all_tab_cols </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">where</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> owner</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">’TEST’;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">--查看表注释</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> * </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  ALL_TAB_COMMENTS </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">where</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> ower</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">’TEST’;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">--查看字段注释</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> * </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  ALL_COL_COMMENTS </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">where</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> ower</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">’TEST’;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> '实例名称'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> 数据库选项,INSTANCE_NAME 数据库集群相关参数值 </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">FROM</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> v$instance </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">union all</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> '数据库版本'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,substr(svr_version,instr(svr_version,</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'('</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">))</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">FROM</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> v$instance </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">union all</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">   SELECT</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> '字符集'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">CASE</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> SF_GET_UNICODE_FLAG()</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">WHEN</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> '0'</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> THEN</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 'GBK18030'</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> WHEN</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> '1'</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> then</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 'UTF-8'</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> when</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> '2'</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> then</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 'EUC-KR'</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> end</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> union all</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">SELECT</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> '页大小'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">cast</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">PAGE</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">()/</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">1024</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> as</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> varchar</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">union all</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">   SELECT</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> '簇大小'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">cast</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(SF_GET_EXTENT_SIZE() </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">as</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> varchar</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">union all</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">SELECT</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> '大小写敏感'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">cast</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(SF_GET_CASE_SENSITIVE_FLAG() </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">as</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> varchar</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">union all</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> '数据库模式'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,MODE$ </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> v$instance </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">union all</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> '唯一魔数'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">cast</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(permanent_magic </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">as</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> varchar</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">union all</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 'LSN'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">cast</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(cur_lsn </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">as</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> varchar</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> v$rlog;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{k as comp,B as data};