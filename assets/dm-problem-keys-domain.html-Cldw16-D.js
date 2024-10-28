import{_ as s,c as n,a as i,o as e}from"./app-BOcQBfH9.js";const r={};function o(l,a){return e(),n("div",null,a[0]||(a[0]=[i(`<h1 id="达梦数据库-关键字-domain等-导致的异常" tabindex="-1"><a class="header-anchor" href="#达梦数据库-关键字-domain等-导致的异常"><span>达梦数据库-关键字（domain等）导致的异常</span></a></h1><h2 id="_1-问题背景" tabindex="-1"><a class="header-anchor" href="#_1-问题背景"><span>1. 问题背景</span></a></h2><p>在项目运行时发现ORACLE 没问题的语句，在达梦出现了问题</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  @SQL:</span><span style="color:#98C379;--shiki-dark:#98C379;">  SELECT</span><span style="color:#98C379;--shiki-dark:#98C379;"> WorkID,Domain,</span><span style="color:#98C379;--shiki-dark:#98C379;"> FROM</span><span style="color:#98C379;--shiki-dark:#98C379;"> Test</span><span style="color:#98C379;--shiki-dark:#98C379;"> WHERE</span><span style="color:#98C379;--shiki-dark:#98C379;"> WorkID</span><span style="color:#98C379;--shiki-dark:#98C379;"> =:WorkID</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  @Param:</span><span style="color:#98C379;--shiki-dark:#98C379;"> Num=1,</span><span style="color:#98C379;--shiki-dark:#98C379;"> WorkID=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1386</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  @异常信息:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 第</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#98C379;--shiki-dark:#98C379;"> 行,</span><span style="color:#98C379;--shiki-dark:#98C379;"> 第</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1483</span><span style="color:#98C379;--shiki-dark:#98C379;"> 列[Domain]附近出现错误:</span><span style="color:#98C379;--shiki-dark:#98C379;">  语法分析出错]</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">java.lang.RuntimeException:</span><span style="color:#98C379;--shiki-dark:#98C379;"> @运行查询在</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">RunSQLReturnTable_200705_Ora</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#98C379;--shiki-dark:#98C379;">出错。</span></span></code></pre></div><p>在使用达梦数据库时，查询SQL中涉及XML,EXCHANGE,DOMAIN,link字段，在达梦中是关键字，SQL报关键词不能使用的错误。</p><h2 id="_2-解决办法" tabindex="-1"><a class="header-anchor" href="#_2-解决办法"><span>2. 解决办法</span></a></h2><h3 id="_2-1-方法一-双引号法" tabindex="-1"><a class="header-anchor" href="#_2-1-方法一-双引号法"><span>2.1 方法一：双引号法</span></a></h3><p>这个一般可以用来处理建表语句中的保留字冲突，如表名或者字段名是 DM 的保留字。这种方法一般可以快速地绕过问题，但是对于大小写敏感的库，这种用双引号的方法会固定死字段大小写，对于小写的字段，可能会带来无效的表名或者列名的问题。</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">SELECT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> WorkID,</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Domain&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#C678DD;--shiki-dark:#C678DD;">FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> Test </span><span style="color:#C678DD;--shiki-dark:#C678DD;">WHERE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> WorkID </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:WorkID</span></span></code></pre></div><h3 id="_2-2-方法2-dm-ini-中的参数设置-实测没用" tabindex="-1"><a class="header-anchor" href="#_2-2-方法2-dm-ini-中的参数设置-实测没用"><span>2.2 方法2：dm.ini 中的参数设置（实测没用）</span></a></h3><p>在 dm.ini 中有个参数 <code>EXCLUDE_RESERVED_WORDS</code>，这个参数可以用来屏蔽保留字，将需要屏蔽的保留字写在 = 号后面，然后以逗号分隔。</p><p>设置在 dm.ini 中的好处就是一旦设置，永久生效而且对所有客户端都有效，这样就不需要在所有客户端系统中进行专门配置。但是设置在 dm.ini 中之后，这个保留字就永久性失效了，哪怕你想通过 Manager 客户端工具在本地连接也没用了。而且该方式还存在一个隐患就是由于屏蔽掉了一些系统的保留字，所以可能会导致系统的一些功能无法正常使用。</p><p>配置达梦安装文件D:\\dmdbms\\data\\DAMENG\\dm.ini 忽略这些关键词，</p><div class="language-ini" data-ext="ini" data-title="ini"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">EXCLUDE_RESERVED_WORDS</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      =</span><span style="color:#98C379;--shiki-dark:#98C379;">  XML,EXCHANGE,DOMAIN,link           </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#Reserved words to be exclude</span></span></code></pre></div><p>使得SQL可以使用。</p><h4 id="_2-2-1-配置图文详解" tabindex="-1"><a class="header-anchor" href="#_2-2-1-配置图文详解"><span>2.2.1 配置图文详解：</span></a></h4><p>1.找到dm.ini文件</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121416917.png" alt="image-20210629152019604" tabindex="0" loading="lazy"><figcaption>image-20210629152019604</figcaption></figure><p>2.打开dm.ini文件,Ctrl+F找到“EXCLUDE_RESERVED_WORDS”</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121416968.png" alt="image-20210629152046748" tabindex="0" loading="lazy"><figcaption>image-20210629152046748</figcaption></figure><p>3.在“EXCLUDE_RESERVED_WORDS”编码 的 等号后边加上 需要忽略的关键字“XML,EXCHANGE,DOMAIN,link”， 保存即可。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121416002.png" alt="image-20210629152145059" tabindex="0" loading="lazy"><figcaption>image-20210629152145059</figcaption></figure><h2 id="_3-总结" tabindex="-1"><a class="header-anchor" href="#_3-总结"><span>3. 总结</span></a></h2><p><strong>不建议用这个参数，会有严重的副作用</strong>，并且比较隐蔽；在不改表的字段的情况下，最好的方案是改名字，次之给对象名加双引号。</p><h2 id="参考文章s" tabindex="-1"><a class="header-anchor" href="#参考文章s"><span>参考文章s</span></a></h2><p><a href="https://www.modb.pro/db/34639" target="_blank" rel="noopener noreferrer">查询DM达梦数据库关键字列表 保留字</a></p><p><a href="https://www.cnblogs.com/zcx-94/p/11936551.html" target="_blank" rel="noopener noreferrer">达梦关键字(如:XML,EXCHANsGE,DOMAIN,link等)配置忽略</a></p>`,27)]))}const p=s(r,[["render",o],["__file","dm-problem-keys-domain.html.vue"]]),d=JSON.parse('{"path":"/posts/Database/DM/dm-problem-keys-domain.html","title":"达梦数据库-关键字（domain等）导致的异常","lang":"zh-CN","frontmatter":{"aliases":"达梦数据库-关键字（domain等）导致的异常","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-12 14:17","description":"达梦数据库-关键字（domain等）导致的异常 1. 问题背景 在项目运行时发现ORACLE 没问题的语句，在达梦出现了问题 在使用达梦数据库时，查询SQL中涉及XML,EXCHANGE,DOMAIN,link字段，在达梦中是关键字，SQL报关键词不能使用的错误。 2. 解决办法 2.1 方法一：双引号法 这个一般可以用来处理建表语句中的保留字冲突，如...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/DM/dm-problem-keys-domain.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"达梦数据库-关键字（domain等）导致的异常"}],["meta",{"property":"og:description","content":"达梦数据库-关键字（domain等）导致的异常 1. 问题背景 在项目运行时发现ORACLE 没问题的语句，在达梦出现了问题 在使用达梦数据库时，查询SQL中涉及XML,EXCHANGE,DOMAIN,link字段，在达梦中是关键字，SQL报关键词不能使用的错误。 2. 解决办法 2.1 方法一：双引号法 这个一般可以用来处理建表语句中的保留字冲突，如..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121416917.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"达梦数据库-关键字（domain等）导致的异常\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121416917.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121416968.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121416002.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 问题背景","slug":"_1-问题背景","link":"#_1-问题背景","children":[]},{"level":2,"title":"2. 解决办法","slug":"_2-解决办法","link":"#_2-解决办法","children":[{"level":3,"title":"2.1 方法一：双引号法","slug":"_2-1-方法一-双引号法","link":"#_2-1-方法一-双引号法","children":[]},{"level":3,"title":"2.2 方法2：dm.ini 中的参数设置（实测没用）","slug":"_2-2-方法2-dm-ini-中的参数设置-实测没用","link":"#_2-2-方法2-dm-ini-中的参数设置-实测没用","children":[]}]},{"level":2,"title":"3. 总结","slug":"_3-总结","link":"#_3-总结","children":[]},{"level":2,"title":"参考文章s","slug":"参考文章s","link":"#参考文章s","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.28,"words":685},"filePathRelative":"posts/Database/DM/dm-problem-keys-domain.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 问题背景</h2>\\n<p>在项目运行时发现ORACLE 没问题的语句，在达梦出现了问题</p>\\n<div class=\\"language-sh\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">  @SQL:</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">  SELECT</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> WorkID,Domain,</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> FROM</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> Test</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> WHERE</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> WorkID</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> =:WorkID</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">  @Param:</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> Num=1,</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> WorkID=</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">1386</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">String</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">  @异常信息:</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 第</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> 1</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 行,</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 第</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> 1483</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 列[Domain]附近出现错误:</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">  语法分析出错]</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">java.lang.RuntimeException:</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> @运行查询在</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">RunSQLReturnTable_200705_Ora</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">出错。</span></span></code></pre>\\n</div>","autoDesc":true}');export{p as comp,d as data};
