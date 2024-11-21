import{_ as o,c as r,a,o as n}from"./app-CpAF2rca.js";const t={};function d(c,e){return n(),r("div",null,e[0]||(e[0]=[a('<h2 id="mongodb异常关闭后-如何修复启动" tabindex="-1"><a class="header-anchor" href="#mongodb异常关闭后-如何修复启动"><span>mongodb异常关闭后，如何修复启动</span></a></h2><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>当独立的<code>mongod</code>实例禁用日记功能时，<strong>不正常的关闭可能会使数据处于不一致状态</strong>。异常关闭后，如果存在非空的<code>mongod.lock</code>文件，则mongod实例在重新启动时记录以下消息：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>Detected unclean shutdown - mongod.lock is not empty.</span></span></code></pre></div><p>如果dbPath包含非空的<code>mongod.lock</code>文件，则必须修复数据库</p><blockquote><p>不要使用本教程恢复<a href="https://www.docs4dev.com/docs/zh/mongodb/v3.6/reference/reference-glossary.html#term-replica-set" target="_blank" rel="noopener noreferrer">replica set</a>的成员。相反，您应该从<a href="https://www.docs4dev.com/docs/zh/mongodb/v3.6/reference/core-backups.html" target="_blank" rel="noopener noreferrer">backup</a>恢复，或者从集合的另一个成员重新同步，如<a href="https://www.docs4dev.com/docs/zh/mongodb/v3.6/reference/tutorial-resync-replica-set-member.html" target="_blank" rel="noopener noreferrer">重新同步副本集的成员</a>中所述。</p></blockquote><blockquote><p>默认情况下，MongoDB 在启用<a href="https://www.docs4dev.com/docs/zh/mongodb/v3.6/reference/core-journaling.html" target="_blank" rel="noopener noreferrer">journaling</a>的情况下运行，以防止在关闭时出现数据不一致的情况。要彻底关闭，请参阅<a href="https://www.docs4dev.com/docs/zh/mongodb/v3.6/reference/tutorial-manage-mongodb-processes.html#terminate-mongod-processes" target="_blank" rel="noopener noreferrer">停止 mongod 进程</a>。</p></blockquote><h2 id="_2-以-repair-启动-mongod" tabindex="-1"><a class="header-anchor" href="#_2-以-repair-启动-mongod"><span>2. 以--repair 启动 mongod</span></a></h2><p>要修复数据文件，请使用<code>--repair</code>选项启动<code>mongod</code>实例。默认情况下，在修复操作期间，MongoDB 使用<code>--dbpath</code>中的<code>_tmp</code>目录。</p><p>发出类似于以下内容的命令：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>mongod --dbpath /data/db --repair</span></span></code></pre></div><p>完成后，<code>dbpath</code>应包含已修复的数据文件和一个空的<code>mongod.lock</code>文件。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.docs4dev.com/docs/zh/mongodb/v3.6/reference/tutorial-recover-data-following-unexpected-shutdown.html#%E4%BB%A5--repair-%E5%90%AF%E5%8A%A8-mongod" target="_blank" rel="noopener noreferrer">意外关闭后恢复独立服务器</a></p>',14)]))}const l=o(t,[["render",d],["__file","mongodb-problem-repair.html.vue"]]),p=JSON.parse('{"path":"/posts/Database/MongoDB/mongodb-problem-repair.html","title":"","lang":"zh-CN","frontmatter":{"tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 08:37","description":"mongodb异常关闭后，如何修复启动 1. 背景 当独立的mongod实例禁用日记功能时，不正常的关闭可能会使数据处于不一致状态。异常关闭后，如果存在非空的mongod.lock文件，则mongod实例在重新启动时记录以下消息： 如果dbPath包含非空的mongod.lock文件，则必须修复数据库 不要使用本教程恢复replica set的成员。相...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MongoDB/mongodb-problem-repair.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:description","content":"mongodb异常关闭后，如何修复启动 1. 背景 当独立的mongod实例禁用日记功能时，不正常的关闭可能会使数据处于不一致状态。异常关闭后，如果存在非空的mongod.lock文件，则mongod实例在重新启动时记录以下消息： 如果dbPath包含非空的mongod.lock文件，则必须修复数据库 不要使用本教程恢复replica set的成员。相..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"mongodb异常关闭后，如何修复启动","slug":"mongodb异常关闭后-如何修复启动","link":"#mongodb异常关闭后-如何修复启动","children":[]},{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 以--repair 启动 mongod","slug":"_2-以-repair-启动-mongod","link":"#_2-以-repair-启动-mongod","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.21,"words":362},"filePathRelative":"posts/Database/MongoDB/mongodb-problem-repair.md","localizedDate":"2024年10月21日","excerpt":"<h2>mongodb异常关闭后，如何修复启动</h2>\\n<h2>1. 背景</h2>\\n<p>当独立的<code>mongod</code>实例禁用日记功能时，<strong>不正常的关闭可能会使数据处于不一致状态</strong>。异常关闭后，如果存在非空的<code>mongod.lock</code>文件，则mongod实例在重新启动时记录以下消息：</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>Detected unclean shutdown - mongod.lock is not empty.</span></span></code></pre>\\n</div>","autoDesc":true}');export{l as comp,p as data};
