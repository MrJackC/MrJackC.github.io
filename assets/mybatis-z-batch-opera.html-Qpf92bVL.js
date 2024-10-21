import{_ as a,c as l,a as n,o as i}from"./app-BhoNqsD-.js";const e={};function o(r,s){return i(),l("div",null,s[0]||(s[0]=[n(`<h1 id="mybatis进阶操作mapper模板" tabindex="-1"><a class="header-anchor" href="#mybatis进阶操作mapper模板"><span>Mybatis进阶操作Mapper模板</span></a></h1><h2 id="_1-批量插入" tabindex="-1"><a class="header-anchor" href="#_1-批量插入"><span>1. 批量插入</span></a></h2><h3 id="_1-1-mysql版本" tabindex="-1"><a class="header-anchor" href="#_1-1-mysql版本"><span>1.1 Mysql版本</span></a></h3><p>sql 语句</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">insert into</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> my_table(field_1,field_2)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">values</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(value_1,value_2),</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(value_1,value_2),</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(value_1,value_2);</span></span></code></pre></div><p>mybatis的模板</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">insert</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;insertBatch&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        INSERT INTO t_user</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        (id, name)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        VALUES</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">foreach</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> collection</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;list&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> item</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;user&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> separator</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;,&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            (#{user.id}, #{user.name})</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">foreach</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">insert</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h3 id="_1-2-oracle版本" tabindex="-1"><a class="header-anchor" href="#_1-2-oracle版本"><span>1.2 Oracle版本</span></a></h3><p>在oracle中不支持mysql的方法,需使用insert all</p><blockquote><p>insert all还支持往不同的表里插入数据</p></blockquote><p>sql 语句</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">insert</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> all </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">into</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> table1(filed1,filed2)</span><span style="color:#C678DD;--shiki-dark:#C678DD;">values</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;value1&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;value2&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">into</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> table2(字段1，字段2，字段3) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">values</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(值1，值2，值3)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dual;</span></span></code></pre></div><p>mybatis的模板</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#C678DD;--shiki-dark:#C678DD;">insert</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> id</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;insertBatch&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> useGeneratedKeys</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;false&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">   insert</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> all</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">   &lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">foreach item</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item&quot;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> index</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;index&quot;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> collection</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;list&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">      into</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t_user(id, </span><span style="color:#C678DD;--shiki-dark:#C678DD;">name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">values</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (#{</span><span style="color:#D19A66;--shiki-dark:#D19A66;">item</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">},#{</span><span style="color:#D19A66;--shiki-dark:#D19A66;">item</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">   &lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/foreach</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">   SELECT</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> DUAL</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/</span><span style="color:#C678DD;--shiki-dark:#C678DD;">insert</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span></code></pre></div><h2 id="_2-批量更新" tabindex="-1"><a class="header-anchor" href="#_2-批量更新"><span>2. 批量更新</span></a></h2><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">update</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;updateBatchUserByIds&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">foreach</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> collection</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;list&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> item</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> index</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;index&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> separator</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;;&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> open</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;begin&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> close</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;;end;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            UPDATE t_user</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">set</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">if</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> test</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;name != null&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                    name = #{item.name,jdbcType=VARCHAR},</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">if</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> test</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;sex != null&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                    sex = #{item.sex,jdbcType=VARCHAR},</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">              </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">set</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            where ID = #{item.id,jdbcType=VARCHAR}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">foreach</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">update</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-批量删除" tabindex="-1"><a class="header-anchor" href="#_3-批量删除"><span>3. 批量删除</span></a></h2><p>Mysql和Oracle版本一致</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">delete</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;deleteBatch&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> parameterType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;List&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">DELETE FROM STUDENT WHERE id IN</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">foreach</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> collection</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;list&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> index</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;index&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> item</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> open</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;(&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> separator</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;,&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> close</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;)&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">#{item}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">foreach</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">delete</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div>`,19)]))}const B=a(e,[["render",o],["__file","mybatis-z-batch-opera.html.vue"]]),t=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/mybatis/mybatis-z-batch-opera.html","title":"Mybatis进阶操作Mapper模板","lang":"zh-CN","frontmatter":{"description":"Mybatis进阶操作Mapper模板 1. 批量插入 1.1 Mysql版本 sql 语句 mybatis的模板 1.2 Oracle版本 在oracle中不支持mysql的方法,需使用insert all insert all还支持往不同的表里插入数据 sql 语句 mybatis的模板 2. 批量更新 3. 批量删除 Mysql和Oracle版本一致","head":[["meta",{"property":"og:url","content":"https://mrjason.me/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/mybatis/mybatis-z-batch-opera.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Mybatis进阶操作Mapper模板"}],["meta",{"property":"og:description","content":"Mybatis进阶操作Mapper模板 1. 批量插入 1.1 Mysql版本 sql 语句 mybatis的模板 1.2 Oracle版本 在oracle中不支持mysql的方法,需使用insert all insert all还支持往不同的表里插入数据 sql 语句 mybatis的模板 2. 批量更新 3. 批量删除 Mysql和Oracle版本一致"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mybatis进阶操作Mapper模板\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjason.me\\"}]}"]]},"headers":[{"level":2,"title":"1. 批量插入","slug":"_1-批量插入","link":"#_1-批量插入","children":[{"level":3,"title":"1.1 Mysql版本","slug":"_1-1-mysql版本","link":"#_1-1-mysql版本","children":[]},{"level":3,"title":"1.2 Oracle版本","slug":"_1-2-oracle版本","link":"#_1-2-oracle版本","children":[]}]},{"level":2,"title":"2. 批量更新","slug":"_2-批量更新","link":"#_2-批量更新","children":[]},{"level":2,"title":"3. 批量删除","slug":"_3-批量删除","link":"#_3-批量删除","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.81,"words":244},"filePathRelative":"posts/Java/Java第三方依赖/mybatis/mybatis-z-batch-opera.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 批量插入</h2>\\n<h3>1.1 Mysql版本</h3>\\n<p>sql 语句</p>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">insert into</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> my_table(field_1,field_2)</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">values</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(value_1,value_2),</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(value_1,value_2),</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(value_1,value_2);</span></span></code></pre>\\n</div>","autoDesc":true}');export{B as comp,t as data};
