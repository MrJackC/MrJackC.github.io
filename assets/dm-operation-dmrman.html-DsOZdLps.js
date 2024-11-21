import{_ as s,c as e,a as i,o}from"./app-CZJgH_ea.js";const r={};function t(n,a){return o(),e("div",null,a[0]||(a[0]=[i('<h1 id="达梦数据库-dmrman-备份-恢复" tabindex="-1"><a class="header-anchor" href="#达梦数据库-dmrman-备份-恢复"><span>达梦数据库-DMRMAN（备份，恢复）</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>我们再Windows中,我们可以使用图形化客户端工具进行备份还原，但是在Linux 中就不太好使了。需要使用DMRMAN</p><h2 id="_2-使用步骤" tabindex="-1"><a class="header-anchor" href="#_2-使用步骤"><span>2. 使用步骤</span></a></h2><p>前置步骤</p><ol><li>停止服务</li></ol><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   systemctl</span><span style="color:#98C379;--shiki-dark:#98C379;"> stop</span><span style="color:#98C379;--shiki-dark:#98C379;"> DmServiceDAMENG.service</span></span></code></pre></div><ol start="2"><li>切换到 dmaba用户</li></ol><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    su</span><span style="color:#98C379;--shiki-dark:#98C379;"> -</span><span style="color:#98C379;--shiki-dark:#98C379;"> dmdba</span></span></code></pre></div><ol start="3"><li>在bin目录下启动DMRMAN</li></ol><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   ./dmrman</span></span></code></pre></div><h3 id="_2-1-备份" tabindex="-1"><a class="header-anchor" href="#_2-1-备份"><span>2.1 备份</span></a></h3><ol><li><p>全量备份</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">BACKUP</span><span style="color:#98C379;--shiki-dark:#98C379;"> DATABASE</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;/soft/dm8/data/DAMENG/dm.ini&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;"> FULL</span><span style="color:#98C379;--shiki-dark:#98C379;"> BACKUPSET</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;/soft/dm8/back/dmmback&#39;</span></span></code></pre></div></li></ol><h3 id="_2-2-还原" tabindex="-1"><a class="header-anchor" href="#_2-2-还原"><span>2.2 还原</span></a></h3><ol><li><p>还原数据库</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">RESTORE</span><span style="color:#98C379;--shiki-dark:#98C379;"> DATABASE</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;/soft/dm8/data/DAMENG/dm.ini&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;"> from</span><span style="color:#98C379;--shiki-dark:#98C379;"> backupset</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;/soft/dm8/back/dmmback&#39;</span></span></code></pre></div></li><li><p>恢复数据库</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">RECOVER</span><span style="color:#98C379;--shiki-dark:#98C379;"> DATABASE</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;/soft/dm8/data/DAMENG/dm.ini&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;"> from</span><span style="color:#98C379;--shiki-dark:#98C379;"> backupset</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;/soft/dm8/back/dmmback&#39;</span></span></code></pre></div></li><li><p>更新dm_nagic</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">RECOVER</span><span style="color:#98C379;--shiki-dark:#98C379;"> DATABASE</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;/soft/dm8/data/DAMENG/dm.ini&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;"> update</span><span style="color:#98C379;--shiki-dark:#98C379;"> db_magic</span></span></code></pre></div></li><li><p>启动</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>systemctl start DmServiceDAMENG.service</span></span></code></pre></div></li></ol>',15)]))}const d=s(r,[["render",t],["__file","dm-operation-dmrman.html.vue"]]),p=JSON.parse('{"path":"/posts/Database/DM/dm-operation-dmrman.html","title":"达梦数据库-DMRMAN（备份，恢复）","lang":"zh-CN","frontmatter":{"aliases":"达梦数据库-DMRMAN（备份，恢复）","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-02-22 17:59","description":"达梦数据库-DMRMAN（备份，恢复） 1. 简介 我们再Windows中,我们可以使用图形化客户端工具进行备份还原，但是在Linux 中就不太好使了。需要使用DMRMAN 2. 使用步骤 前置步骤 停止服务 切换到 dmaba用户 在bin目录下启动DMRMAN 2.1 备份 全量备份 2.2 还原 还原数据库 恢复数据库 更新dm_nagic 启动","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/DM/dm-operation-dmrman.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"达梦数据库-DMRMAN（备份，恢复）"}],["meta",{"property":"og:description","content":"达梦数据库-DMRMAN（备份，恢复） 1. 简介 我们再Windows中,我们可以使用图形化客户端工具进行备份还原，但是在Linux 中就不太好使了。需要使用DMRMAN 2. 使用步骤 前置步骤 停止服务 切换到 dmaba用户 在bin目录下启动DMRMAN 2.1 备份 全量备份 2.2 还原 还原数据库 恢复数据库 更新dm_nagic 启动"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"达梦数据库-DMRMAN（备份，恢复）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 使用步骤","slug":"_2-使用步骤","link":"#_2-使用步骤","children":[{"level":3,"title":"2.1 备份","slug":"_2-1-备份","link":"#_2-1-备份","children":[]},{"level":3,"title":"2.2 还原","slug":"_2-2-还原","link":"#_2-2-还原","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.6,"words":179},"filePathRelative":"posts/Database/DM/dm-operation-dmrman.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>我们再Windows中,我们可以使用图形化客户端工具进行备份还原，但是在Linux 中就不太好使了。需要使用DMRMAN</p>\\n<h2>2. 使用步骤</h2>\\n<p>前置步骤</p>\\n<ol>\\n<li>停止服务</li>\\n</ol>\\n<div class=\\"language-sh\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">   systemctl</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> stop</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> DmServiceDAMENG.service</span></span></code></pre>\\n</div>","autoDesc":true}');export{d as comp,p as data};
