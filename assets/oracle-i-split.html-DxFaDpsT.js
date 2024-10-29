import{_ as s,c as e,a as i,o as n}from"./app-DEK5G3U7.js";const r={};function o(l,a){return n(),e("div",null,a[0]||(a[0]=[i(`<h1 id="oracle取出-号分割的id对应中文名" tabindex="-1"><a class="header-anchor" href="#oracle取出-号分割的id对应中文名"><span>oracle取出，号分割的id对应中文名</span></a></h1><h2 id="_1-需求" tabindex="-1"><a class="header-anchor" href="#_1-需求"><span>1. 需求</span></a></h2><p>我们部门表中存着祖籍列表，我们希望能直接查出所有祖籍部门的中文名</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130956609.png" alt="image-20220302144445229" tabindex="0" loading="lazy"><figcaption>image-20220302144445229</figcaption></figure><p>如：这几个部门的祖籍都是什么</p><h2 id="_2-实现" tabindex="-1"><a class="header-anchor" href="#_2-实现"><span>2.实现</span></a></h2><h3 id="_2-1-达梦数据库" tabindex="-1"><a class="header-anchor" href="#_2-1-达梦数据库"><span>2.1 达梦数据库</span></a></h3><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> D</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">DEPT_ID</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">D</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">PARENT_ID</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">D</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">ANCESTORS</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">D</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">DEPT_NAME</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">       (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">SELECT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> WM_CONCAT(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">T</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">DEPT_NAME</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">SELECT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> DEPT_NAME</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">              FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> SYS_DEPT S </span><span style="color:#C678DD;--shiki-dark:#C678DD;">START</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">              WITH</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> S</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">DEPT_ID</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">D</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">DEPT_ID</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">              CONNECT</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> BY</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> NOCYCLE </span><span style="color:#C678DD;--shiki-dark:#C678DD;">PRIOR</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> S</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">PARENT_ID</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> S</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">DEPT_ID</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) T) DEPT_URL</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> SYS_DEPT </span><span style="color:#C678DD;--shiki-dark:#C678DD;">AS</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> D;</span></span></code></pre></div>`,8)]))}const p=s(r,[["render",o],["__file","oracle-i-split.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/ORACLE/oracle-i-split.html","title":"oracle取出，号分割的id对应中文名","lang":"zh-CN","frontmatter":{"aliases":"oracle取出，号分割的id对应中文名","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 09:56","description":"oracle取出，号分割的id对应中文名 1. 需求 我们部门表中存着祖籍列表，我们希望能直接查出所有祖籍部门的中文名 image-20220302144445229image-20220302144445229 如：这几个部门的祖籍都是什么 2.实现 2.1 达梦数据库","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/ORACLE/oracle-i-split.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"oracle取出，号分割的id对应中文名"}],["meta",{"property":"og:description","content":"oracle取出，号分割的id对应中文名 1. 需求 我们部门表中存着祖籍列表，我们希望能直接查出所有祖籍部门的中文名 image-20220302144445229image-20220302144445229 如：这几个部门的祖籍都是什么 2.实现 2.1 达梦数据库"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130956609.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"oracle取出，号分割的id对应中文名\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130956609.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 需求","slug":"_1-需求","link":"#_1-需求","children":[]},{"level":2,"title":"2.实现","slug":"_2-实现","link":"#_2-实现","children":[{"level":3,"title":"2.1 达梦数据库","slug":"_2-1-达梦数据库","link":"#_2-1-达梦数据库","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.44,"words":133},"filePathRelative":"posts/Database/ORACLE/oracle-i-split.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 需求</h2>\\n<p>我们部门表中存着祖籍列表，我们希望能直接查出所有祖籍部门的中文名</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130956609.png\\" alt=\\"image-20220302144445229\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220302144445229</figcaption></figure>\\n<p>如：这几个部门的祖籍都是什么</p>\\n<h2>2.实现</h2>","autoDesc":true}');export{p as comp,c as data};
