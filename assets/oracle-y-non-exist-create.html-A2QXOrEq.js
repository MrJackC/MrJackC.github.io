import{_ as a,c as n,a as i,o as l}from"./app-fWubcX7c.js";const e={};function r(p,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="oracle如果表不存在-则创建该表" tabindex="-1"><a class="header-anchor" href="#oracle如果表不存在-则创建该表"><span>ORACLE如果表不存在，则创建该表</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>Oracle使用的是PL/SQL, 不支持IF NOT EXISTS 条件。</p><h2 id="_2-示例" tabindex="-1"><a class="header-anchor" href="#_2-示例"><span>2. 示例</span></a></h2><p>使用counter在USER_ALL_TABLES中来列举有几个PRODUCT表 ，如果i&gt;0则说明至少有一个PRODUCT表。</p><p>根据条件的判断删或增PRODUCT表。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">DECLARE</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">i </span><span style="color:#C678DD;--shiki-dark:#C678DD;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">BEGIN</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	SELECT</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(*) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">INTO</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> i </span><span style="color:#C678DD;--shiki-dark:#C678DD;">FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> USER_ALL_TABLES </span><span style="color:#C678DD;--shiki-dark:#C678DD;">WHERE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> TABLE_NAME</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;PRODUCT&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	IF</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> i</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	THEN</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">		EXECUTE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> immediate</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;DROP TABLE PRODUCT&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	END</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> IF</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	EXECUTE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> immediate</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;CREATE TABLE PRODUCT</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">		(</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">			ID integer NOT NULL,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">			VERSION integer,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">			TITLE varchar (255),</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">			SKU varchar (255),</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">			PARENTSKU varchar (255),</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">			COLOR varchar (255),</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">			DESCRIPTION varchar (255),</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">			PRICE varchar (255),</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">			CONSTRAINT PK_PRODUCT_ID PRIMARY KEY(ID)</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">		)&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">END</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注： 删除之后还是要新建！！！，网上很多教程删除后就删了，不建表</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/qq_24702233/article/details/89483613" target="_blank" rel="noopener noreferrer">ORACLE 如果表不存在，则创建该表</a></p>`,10)]))}const o=a(e,[["render",r],["__file","oracle-y-non-exist-create.html.vue"]]),c=JSON.parse(`{"path":"/posts/Database/ORACLE/oracle-y-non-exist-create.html","title":"ORACLE如果表不存在，则创建该表","lang":"zh-CN","frontmatter":{"aliases":"ORACLE如果表不存在，则创建该表","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 09:57","description":"ORACLE如果表不存在，则创建该表 1. 背景 Oracle使用的是PL/SQL, 不支持IF NOT EXISTS 条件。 2. 示例 使用counter在USER_ALL_TABLES中来列举有几个PRODUCT表 ，如果i>0则说明至少有一个PRODUCT表。 根据条件的判断删或增PRODUCT表。 注： 删除之后还是要新建！！！，网上很多教程...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/ORACLE/oracle-y-non-exist-create.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"ORACLE如果表不存在，则创建该表"}],["meta",{"property":"og:description","content":"ORACLE如果表不存在，则创建该表 1. 背景 Oracle使用的是PL/SQL, 不支持IF NOT EXISTS 条件。 2. 示例 使用counter在USER_ALL_TABLES中来列举有几个PRODUCT表 ，如果i>0则说明至少有一个PRODUCT表。 根据条件的判断删或增PRODUCT表。 注： 删除之后还是要新建！！！，网上很多教程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ORACLE如果表不存在，则创建该表\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 示例","slug":"_2-示例","link":"#_2-示例","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.68,"words":203},"filePathRelative":"posts/Database/ORACLE/oracle-y-non-exist-create.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>Oracle使用的是PL/SQL, 不支持IF NOT EXISTS 条件。</p>\\n<h2>2. 示例</h2>\\n<p>使用counter在USER_ALL_TABLES中来列举有几个PRODUCT表 ，如果i&gt;0则说明至少有一个PRODUCT表。</p>\\n<p>根据条件的判断删或增PRODUCT表。</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">DECLARE</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">i </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">integer</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">BEGIN</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">\\tSELECT</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> count</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(*) </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">INTO</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> i </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">FROM</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> USER_ALL_TABLES </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">WHERE</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> TABLE_NAME</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'PRODUCT'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">\\tIF</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> i</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&gt;</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">0</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">\\tTHEN</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">\\t\\tEXECUTE</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> immediate</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 'DROP TABLE PRODUCT'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">\\tEND</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> IF</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">\\tEXECUTE</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> immediate</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 'CREATE TABLE PRODUCT</span></span>\\n<span class=\\"line\\"><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\t\\t(</span></span>\\n<span class=\\"line\\"><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\t\\t\\tID integer NOT NULL,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\t\\t\\tVERSION integer,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\t\\t\\tTITLE varchar (255),</span></span>\\n<span class=\\"line\\"><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\t\\t\\tSKU varchar (255),</span></span>\\n<span class=\\"line\\"><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\t\\t\\tPARENTSKU varchar (255),</span></span>\\n<span class=\\"line\\"><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\t\\t\\tCOLOR varchar (255),</span></span>\\n<span class=\\"line\\"><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\t\\t\\tDESCRIPTION varchar (255),</span></span>\\n<span class=\\"line\\"><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\t\\t\\tPRICE varchar (255),</span></span>\\n<span class=\\"line\\"><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\t\\t\\tCONSTRAINT PK_PRODUCT_ID PRIMARY KEY(ID)</span></span>\\n<span class=\\"line\\"><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\t\\t)'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">END</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{o as comp,c as data};
