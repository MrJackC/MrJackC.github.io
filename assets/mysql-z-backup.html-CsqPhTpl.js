import{_ as e,c as a,a as i,o as t}from"./app-BOcQBfH9.js";const n={};function s(r,l){return t(),a("div",null,l[0]||(l[0]=[i('<h1 id="热备份和冷备份概念" tabindex="-1"><a class="header-anchor" href="#热备份和冷备份概念"><span>热备份和冷备份概念</span></a></h1><h2 id="_1-冷备份" tabindex="-1"><a class="header-anchor" href="#_1-冷备份"><span>1. 冷备份</span></a></h2><h3 id="_1-1-特点" tabindex="-1"><a class="header-anchor" href="#_1-1-特点"><span>1.1 特点</span></a></h3><ul><li>离线off</li><li>慢</li><li>时间点上恢复</li></ul><h3 id="_1-2-冷备份概念" tabindex="-1"><a class="header-anchor" href="#_1-2-冷备份概念"><span>1.2 冷备份概念</span></a></h3><p>冷备份发生在数据库已经正常关闭的情况下，当正常关闭时会提供给我们一个完整的数据库。冷备份是将关键性文件拷贝到另外位置的一种说法。对于备份数据库信息而言，冷备份是最快和最安全的方法</p><p>简述：<strong>离线（没有新的数据来）复制一份保存，有事就直接用这备份来恢复。</strong></p><h3 id="_1-3-冷备份的优点" tabindex="-1"><a class="header-anchor" href="#_1-3-冷备份的优点"><span>1.3 冷备份的优点</span></a></h3><ol><li>非常快速的备份方法（只需拷贝文件）</li><li>容易归档（简单拷贝即可）</li><li>容易恢复到某个时间点上（只需将文件拷贝回去）</li><li>能与归档方法相结合，作数据库”最新状态“的恢复</li><li>低度维护，高度安全</li></ol><h3 id="_1-4-冷备份缺点" tabindex="-1"><a class="header-anchor" href="#_1-4-冷备份缺点"><span>1.4 冷备份缺点</span></a></h3><ol><li>单独使用时，只能提供到”某一时间点上“的恢复</li><li>在实施备份的全过程中，数据库必须要作备份而不能作其他工作。也就是说，在冷备份过程中，数据库必须是关闭状态。</li><li>若磁盘空间有限，只能拷贝到磁盘等其他外部存储设备上。速度会很慢</li><li>不能按表或按用户恢复。</li></ol><p>值得注意的是冷备份必须在数据库关闭的情况下进行，当数据库处于打开状态时，执行数据库文件系统备份是无效的。而且在恢复后一定要把数据库文件的属组合属主改为mysql。</p><h2 id="_2-热备份" tabindex="-1"><a class="header-anchor" href="#_2-热备份"><span>2. 热备份</span></a></h2><h3 id="_2-1-特点" tabindex="-1"><a class="header-anchor" href="#_2-1-特点"><span>2.1 特点</span></a></h3><ul><li>在线on</li><li>快</li></ul><h3 id="_2-2-热备份概念" tabindex="-1"><a class="header-anchor" href="#_2-2-热备份概念"><span>2.2 热备份概念</span></a></h3><p>热备份是在数据库运行的情况下，备份数据库操作的sql语句，<strong>当数据库发生问题时，可以重新执行一遍备份的sql语句</strong>。</p><p>简述：在线的保存对数据库操作的sql语句，有事就再跑一遍这些sql语句</p><h3 id="_2-3-热备份优点" tabindex="-1"><a class="header-anchor" href="#_2-3-热备份优点"><span>2.3 热备份优点</span></a></h3><ol><li>可在表空间或数据文件级备份，备份时间短</li><li>备份时数据库仍可使用</li><li>可达到秒级恢复（恢复到某一个时间点上）</li><li>可对几乎所有数据库实体作恢复</li><li>恢复是快速的，在大多数情况下载数据库仍工作时恢复</li></ol><h3 id="_2-4-热备份缺点" tabindex="-1"><a class="header-anchor" href="#_2-4-热备份缺点"><span>2.4 热备份缺点</span></a></h3><ol><li>不能出错，否则后果严重</li><li>若热备份不成功，所得结果不可用于时间点恢复</li><li>因难于维护，所以要特别仔细小心，不允许”以失败而告终“</li></ol>',22)]))}const h=e(n,[["render",s],["__file","mysql-z-backup.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/MySQL/mysql-z-backup.html","title":"热备份和冷备份概念","lang":"zh-CN","frontmatter":{"aliases":"热备份和冷备份概念","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 09:40","description":"热备份和冷备份概念 1. 冷备份 1.1 特点 离线off 慢 时间点上恢复 1.2 冷备份概念 冷备份发生在数据库已经正常关闭的情况下，当正常关闭时会提供给我们一个完整的数据库。冷备份是将关键性文件拷贝到另外位置的一种说法。对于备份数据库信息而言，冷备份是最快和最安全的方法 简述：离线（没有新的数据来）复制一份保存，有事就直接用这备份来恢复。 1.3...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/MySQL/mysql-z-backup.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"热备份和冷备份概念"}],["meta",{"property":"og:description","content":"热备份和冷备份概念 1. 冷备份 1.1 特点 离线off 慢 时间点上恢复 1.2 冷备份概念 冷备份发生在数据库已经正常关闭的情况下，当正常关闭时会提供给我们一个完整的数据库。冷备份是将关键性文件拷贝到另外位置的一种说法。对于备份数据库信息而言，冷备份是最快和最安全的方法 简述：离线（没有新的数据来）复制一份保存，有事就直接用这备份来恢复。 1.3..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"热备份和冷备份概念\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 冷备份","slug":"_1-冷备份","link":"#_1-冷备份","children":[{"level":3,"title":"1.1 特点","slug":"_1-1-特点","link":"#_1-1-特点","children":[]},{"level":3,"title":"1.2 冷备份概念","slug":"_1-2-冷备份概念","link":"#_1-2-冷备份概念","children":[]},{"level":3,"title":"1.3 冷备份的优点","slug":"_1-3-冷备份的优点","link":"#_1-3-冷备份的优点","children":[]},{"level":3,"title":"1.4 冷备份缺点","slug":"_1-4-冷备份缺点","link":"#_1-4-冷备份缺点","children":[]}]},{"level":2,"title":"2. 热备份","slug":"_2-热备份","link":"#_2-热备份","children":[{"level":3,"title":"2.1 特点","slug":"_2-1-特点","link":"#_2-1-特点","children":[]},{"level":3,"title":"2.2 热备份概念","slug":"_2-2-热备份概念","link":"#_2-2-热备份概念","children":[]},{"level":3,"title":"2.3 热备份优点","slug":"_2-3-热备份优点","link":"#_2-3-热备份优点","children":[]},{"level":3,"title":"2.4 热备份缺点","slug":"_2-4-热备份缺点","link":"#_2-4-热备份缺点","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.31,"words":694},"filePathRelative":"posts/Database/MySQL/mysql-z-backup.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 冷备份</h2>\\n<h3>1.1 特点</h3>\\n<ul>\\n<li>离线off</li>\\n<li>慢</li>\\n<li>时间点上恢复</li>\\n</ul>\\n<h3>1.2 冷备份概念</h3>\\n<p>冷备份发生在数据库已经正常关闭的情况下，当正常关闭时会提供给我们一个完整的数据库。冷备份是将关键性文件拷贝到另外位置的一种说法。对于备份数据库信息而言，冷备份是最快和最安全的方法</p>\\n<p>简述：<strong>离线（没有新的数据来）复制一份保存，有事就直接用这备份来恢复。</strong></p>\\n<h3>1.3 冷备份的优点</h3>\\n<ol>\\n<li>非常快速的备份方法（只需拷贝文件）</li>\\n<li>容易归档（简单拷贝即可）</li>\\n<li>容易恢复到某个时间点上（只需将文件拷贝回去）</li>\\n<li>能与归档方法相结合，作数据库”最新状态“的恢复</li>\\n<li>低度维护，高度安全</li>\\n</ol>","autoDesc":true}');export{h as comp,c as data};
