import{_ as a,c as o,a as n,o as r}from"./app-JRvFIbSa.js";const i={};function l(p,s){return r(),o("div",null,s[0]||(s[0]=[n(`<h1 id="达梦数据库-sql创建用户与授权" tabindex="-1"><a class="header-anchor" href="#达梦数据库-sql创建用户与授权"><span>达梦数据库-SQL创建用户与授权</span></a></h1><h2 id="_1-创建用户" tabindex="-1"><a class="header-anchor" href="#_1-创建用户"><span>1. 创建用户</span></a></h2><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">create</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> tablespace</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &quot;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">TEST</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot; datafile </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;/mypath/TEST.DBF&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> size</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 180</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> autoextend </span><span style="color:#C678DD;--shiki-dark:#C678DD;">on</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> maxsize </span><span style="color:#D19A66;--shiki-dark:#D19A66;">16777215</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> CACHE </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> NORMAL;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">create</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> user</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &quot;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">TEST</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot; identified </span><span style="color:#C678DD;--shiki-dark:#C678DD;">by</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;mypassword&quot;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> limit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> failed_login_attemps </span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, password_lock_time </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, password_grace_time </span><span style="color:#D19A66;--shiki-dark:#D19A66;">10</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> default</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tablespace </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;TEST&quot;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> default</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> index</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tablespace </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;TEST&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">grant</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;DBA&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;RESOURCE&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;PUBLIC&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;SOI&quot;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;TEST&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">grant</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> CREATE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> SCHEMA</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> TABLE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> VIEW,</span><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> PROCEDURE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> SEQUENCE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> TRIGGER,</span><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> INDEX</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> CONTEXT </span><span style="color:#C678DD;--shiki-dark:#C678DD;">INDEX</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> LINK </span><span style="color:#C678DD;--shiki-dark:#C678DD;">to</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;TEST&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> SCHEMA</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &quot;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">TEST</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot; AUTHORIZATION </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;TEST&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h2 id="_2-给其他用户授权" tabindex="-1"><a class="header-anchor" href="#_2-给其他用户授权"><span>2. 给其他用户授权</span></a></h2><p>将A用户的视图授权给B用户</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">create</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> user</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &quot;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">B</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot; identified </span><span style="color:#C678DD;--shiki-dark:#C678DD;">by</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;mypassword&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">grant</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> select</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> on</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;A&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.V_SYS_USER </span><span style="color:#C678DD;--shiki-dark:#C678DD;">to</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> B ;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">grant</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> select</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> on</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;A&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.V_SYS_DEPT </span><span style="color:#C678DD;--shiki-dark:#C678DD;">to</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> B ;</span></span></code></pre></div>`,6)]))}const e=a(i,[["render",l],["__file","dm-operation-create-user.html.vue"]]),t=JSON.parse(`{"path":"/posts/Database/DM/dm-operation-create-user.html","title":"达梦数据库-SQL创建用户与授权","lang":"zh-CN","frontmatter":{"description":"达梦数据库-SQL创建用户与授权 1. 创建用户 2. 给其他用户授权 将A用户的视图授权给B用户","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/DM/dm-operation-create-user.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"达梦数据库-SQL创建用户与授权"}],["meta",{"property":"og:description","content":"达梦数据库-SQL创建用户与授权 1. 创建用户 2. 给其他用户授权 将A用户的视图授权给B用户"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"达梦数据库-SQL创建用户与授权\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 创建用户","slug":"_1-创建用户","link":"#_1-创建用户","children":[]},{"level":2,"title":"2. 给其他用户授权","slug":"_2-给其他用户授权","link":"#_2-给其他用户授权","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.43,"words":128},"filePathRelative":"posts/Database/DM/dm-operation-create-user.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 创建用户</h2>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">create</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> tablespace</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> \\"</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">TEST</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">\\" datafile </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'/mypath/TEST.DBF'</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> size</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> 180</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> autoextend </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">on</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> maxsize </span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">16777215</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> CACHE </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> NORMAL;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">create</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> user</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> \\"</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">TEST</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">\\" identified </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">by</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"mypassword\\"</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> limit</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> failed_login_attemps </span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">3</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, password_lock_time </span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">1</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, password_grace_time </span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">10</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> default</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> tablespace </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"TEST\\"</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> default</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> index</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> tablespace </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"TEST\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">grant</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"DBA\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"RESOURCE\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"PUBLIC\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"SOI\\"</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> to</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"TEST\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">grant</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> CREATE</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> SCHEMA</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">CREATE</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> TABLE</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">CREATE</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> VIEW,</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">CREATE</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> PROCEDURE</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">CREATE</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> SEQUENCE</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">CREATE</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> TRIGGER,</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">CREATE</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> INDEX</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">CREATE</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> CONTEXT </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">INDEX</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">CREATE</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> LINK </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">to</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"TEST\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">CREATE</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> SCHEMA</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> \\"</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">TEST</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">\\" AUTHORIZATION </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"TEST\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span></code></pre>\\n</div>","autoDesc":true}`);export{e as comp,t as data};
