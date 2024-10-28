import{_ as a,c as e,a as n,o as t}from"./app-W9QyTiMU.js";const i={};function l(r,s){return t(),e("div",null,s[0]||(s[0]=[n(`<h1 id="达梦数据库-写sql如何才能不带上模式名" tabindex="-1"><a class="header-anchor" href="#达梦数据库-写sql如何才能不带上模式名"><span>达梦数据库-写SQL如何才能不带上模式名？</span></a></h1><h2 id="_1-问题背景" tabindex="-1"><a class="header-anchor" href="#_1-问题背景"><span>1. 问题背景</span></a></h2><p>在达梦数据库中，SQL 查询时，需要加上模式名（数据库名）才能访问</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121417786.png" alt="image-20210629143738277" tabindex="0" loading="lazy"><figcaption>image-20210629143738277</figcaption></figure><h3 id="_2-问题原因" tabindex="-1"><a class="header-anchor" href="#_2-问题原因"><span>2. 问题原因</span></a></h3><p>其实这是把Mysql或者SQLSERVER的思维代入DM数据库造成的，Mysql的体系架构是单实例多库的，一个用户可以访问多个数据库，然后指定当前数据库写SQL的时候就不用带上数据库名了。</p><p><strong>达梦的体系架构是单库多实例的，也就是没有多个数据库的概念了，从Mysql或者SQLSERVER转到达梦，就需要建多个用户+表空间来对应Mysql的多个数据库。</strong></p><h3 id="_3-1-直接原因" tabindex="-1"><a class="header-anchor" href="#_3-1-直接原因"><span>3.1 直接原因</span></a></h3><ul><li>自己是通过 sysdba 登录，执行 select * from tab1 时，查询的其实是 select * from sysdba.tab1;</li><li>如果你要找 new_schema.tab1 的话，那你要执行的sql 其实是 select * from new_schema.tab1;</li></ul><h2 id="_3-解决方式" tabindex="-1"><a class="header-anchor" href="#_3-解决方式"><span>3. 解决方式</span></a></h2><p>例如MYSQL中有TESTDB1,TESTDB2两个库，都用root用户来访问</p><h3 id="_3-1-步骤1-新建表空间" tabindex="-1"><a class="header-anchor" href="#_3-1-步骤1-新建表空间"><span>3.1 步骤1：新建表空间</span></a></h3><p>在达梦中第一步就创建两个表空间：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> TABLESPACE</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> TESTDB1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> DATAFILE </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;TESTDB1.DBF&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> SIZE</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 128</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> TABLESPACE</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> TESTDB2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> DATAFILE </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;TESTDB2.DBF&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> SIZE</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 128</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h3 id="_3-2-步骤2-创建用户授权" tabindex="-1"><a class="header-anchor" href="#_3-2-步骤2-创建用户授权"><span>3.2 步骤2：创建用户授权</span></a></h3><p>第二步创建两个用户，授予对应的权限：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--以下SQL用SYSDBA用户登录执行</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> USER</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> TESTDB1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> IDENTIFIED </span><span style="color:#C678DD;--shiki-dark:#C678DD;">BY</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;123456789&quot;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> TABLESPACE TESTDB1;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> USER</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> TESTDB2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> IDENTIFIED </span><span style="color:#C678DD;--shiki-dark:#C678DD;">BY</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;123456789&quot;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> TABLESPACE TESTDB2;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">GRANT</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> RESOURCE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> TO</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> TESTDB1;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">GRANT</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> RESOURCE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> TO</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> TESTDB2;</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121417839.png" alt="image-20210629145138099" tabindex="0" loading="lazy"><figcaption>image-20210629145138099</figcaption></figure><h3 id="_3-3-步骤3-迁移工具迁移的时候用testdb1用户来迁移" tabindex="-1"><a class="header-anchor" href="#_3-3-步骤3-迁移工具迁移的时候用testdb1用户来迁移"><span>3.3 步骤3：迁移工具迁移的时候用TESTDB1用户来迁移</span></a></h3><p>迁移Mysql TESTDB1数据库里面的表，数据库迁移工具就使用TESTDB1用户来迁移；迁移Mysql TESTDB2数据库里面的表，数据库迁移工具就使用TESTDB2用户来迁移</p><h3 id="_3-4-步骤4-访问testdb1用户-模式-下的表-就使用testdb1用户登录" tabindex="-1"><a class="header-anchor" href="#_3-4-步骤4-访问testdb1用户-模式-下的表-就使用testdb1用户登录"><span>3.4 步骤4：访问TESTDB1用户（模式）下的表，就使用TESTDB1用户登录</span></a></h3><p>访问TESTDB1用户（模式）下的表，就使用TESTDB1用户登录来访问，就不需要加模式名TESTDB1</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121417874.png" alt="image-20210629145353834" tabindex="0" loading="lazy"><figcaption>image-20210629145353834</figcaption></figure>`,23)]))}const p=a(i,[["render",l],["__file","dm-problem-schema.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/DM/dm-problem-schema.html","title":"达梦数据库-写SQL如何才能不带上模式名？","lang":"zh-CN","frontmatter":{"aliases":"达梦数据库-写SQL如何才能不带上模式名？","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-12 14:17","description":"达梦数据库-写SQL如何才能不带上模式名？ 1. 问题背景 在达梦数据库中，SQL 查询时，需要加上模式名（数据库名）才能访问 image-20210629143738277image-20210629143738277 2. 问题原因 其实这是把Mysql或者SQLSERVER的思维代入DM数据库造成的，Mysql的体系架构是单实例多库的，一个用户可...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/DM/dm-problem-schema.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"达梦数据库-写SQL如何才能不带上模式名？"}],["meta",{"property":"og:description","content":"达梦数据库-写SQL如何才能不带上模式名？ 1. 问题背景 在达梦数据库中，SQL 查询时，需要加上模式名（数据库名）才能访问 image-20210629143738277image-20210629143738277 2. 问题原因 其实这是把Mysql或者SQLSERVER的思维代入DM数据库造成的，Mysql的体系架构是单实例多库的，一个用户可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121417786.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"达梦数据库-写SQL如何才能不带上模式名？\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121417786.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121417839.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121417874.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 问题背景","slug":"_1-问题背景","link":"#_1-问题背景","children":[{"level":3,"title":"2. 问题原因","slug":"_2-问题原因","link":"#_2-问题原因","children":[]},{"level":3,"title":"3.1 直接原因","slug":"_3-1-直接原因","link":"#_3-1-直接原因","children":[]}]},{"level":2,"title":"3. 解决方式","slug":"_3-解决方式","link":"#_3-解决方式","children":[{"level":3,"title":"3.1 步骤1：新建表空间","slug":"_3-1-步骤1-新建表空间","link":"#_3-1-步骤1-新建表空间","children":[]},{"level":3,"title":"3.2 步骤2：创建用户授权","slug":"_3-2-步骤2-创建用户授权","link":"#_3-2-步骤2-创建用户授权","children":[]},{"level":3,"title":"3.3 步骤3：迁移工具迁移的时候用TESTDB1用户来迁移","slug":"_3-3-步骤3-迁移工具迁移的时候用testdb1用户来迁移","link":"#_3-3-步骤3-迁移工具迁移的时候用testdb1用户来迁移","children":[]},{"level":3,"title":"3.4 步骤4：访问TESTDB1用户（模式）下的表，就使用TESTDB1用户登录","slug":"_3-4-步骤4-访问testdb1用户-模式-下的表-就使用testdb1用户登录","link":"#_3-4-步骤4-访问testdb1用户-模式-下的表-就使用testdb1用户登录","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.76,"words":528},"filePathRelative":"posts/Database/DM/dm-problem-schema.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 问题背景</h2>\\n<p>在达梦数据库中，SQL 查询时，需要加上模式名（数据库名）才能访问</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121417786.png\\" alt=\\"image-20210629143738277\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20210629143738277</figcaption></figure>\\n<h3>2. 问题原因</h3>\\n<p>其实这是把Mysql或者SQLSERVER的思维代入DM数据库造成的，Mysql的体系架构是单实例多库的，一个用户可以访问多个数据库，然后指定当前数据库写SQL的时候就不用带上数据库名了。</p>","autoDesc":true}');export{p as comp,c as data};
