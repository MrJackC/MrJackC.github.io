import{_ as e,c as l,a as o,o as n}from"./app-W9QyTiMU.js";const a={};function r(s,t){return n(),l("div",null,t[0]||(t[0]=[o('<h1 id="mongodb数据导入与导出" tabindex="-1"><a class="header-anchor" href="#mongodb数据导入与导出"><span>MongoDB数据导入与导出</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>MongoDB官方提供了两套数据导入导出工具，一般来说，</p><ul><li>mongodump和mongorestore <ul><li>进行整库导出导入时使用</li><li>操作的数据是BSON格式，进行大量dump和restore时效率较高。</li></ul></li><li>mongoexport和mongoimport <ul><li>进行单个集合导出导入时使用</li><li>操作的数据是JSON格式，可读性较高</li></ul></li></ul><h2 id="_2-mongoexport-导出" tabindex="-1"><a class="header-anchor" href="#_2-mongoexport-导出"><span>2. mongoexport（导出）</span></a></h2><h3 id="_2-1-参数" tabindex="-1"><a class="header-anchor" href="#_2-1-参数"><span>2.1 参数</span></a></h3><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">全称</th><th style="text-align:left;">默认值</th><th style="text-align:left;">参考释义</th></tr></thead><tbody><tr><td style="text-align:left;"></td><td style="text-align:left;">--help</td><td style="text-align:left;"></td><td style="text-align:left;">查看mongoexport的使用帮助</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">--version</td><td style="text-align:left;"></td><td style="text-align:left;">查看mongoexport的版本号</td></tr><tr><td style="text-align:left;">-d</td><td style="text-align:left;"><code>--db &lt;database&gt;</code></td><td style="text-align:left;"></td><td style="text-align:left;">指定要在哪个数据库上运行该命令</td></tr><tr><td style="text-align:left;">-c</td><td style="text-align:left;"><code>--collection &lt;collection&gt;</code></td><td style="text-align:left;"></td><td style="text-align:left;">指定要导出的集合</td></tr><tr><td style="text-align:left;">-f</td><td style="text-align:left;">--fields &lt;field1[,field2]&gt;</td><td style="text-align:left;"></td><td style="text-align:left;">指定导出时只导出一个或多个字段，导出多个时，需要使用逗号分隔; 当字段中有空格时，需要用英文引号括起来。</td></tr><tr><td style="text-align:left;">-q</td><td style="text-align:left;"><code>--query &lt;JSON&gt;</code></td><td style="text-align:left;"></td><td style="text-align:left;">导出指定查询条件的数据</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"><code>--type &lt;string&gt;</code></td><td style="text-align:left;">json</td><td style="text-align:left;">指定要导出的文件类型，可选值：json，csv</td></tr><tr><td style="text-align:left;">-o</td><td style="text-align:left;"><code>--out &lt;file&gt;</code></td><td style="text-align:left;"></td><td style="text-align:left;">指定要导出的文件路径（含文件名），如果不指定，则会导出为标准输出（例如stdout）</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">--limit</td><td style="text-align:left;"></td><td style="text-align:left;">查询几条数据</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">--skip</td><td style="text-align:left;"></td><td style="text-align:left;">跳过指定数量的数据</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">--sort</td><td style="text-align:left;"></td><td style="text-align:left;">排序规则</td></tr></tbody></table><h3 id="_2-2-举例" tabindex="-1"><a class="header-anchor" href="#_2-2-举例"><span>2.2 举例</span></a></h3><p>导出mytest数据库中的user集合到user.json文件中</p><div class="language-groovy" data-ext="groovy" data-title="groovy"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">D</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:\\tool\\mongodb</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">server\\bin\\mongoexport.exe --collection myCollection --db myDB </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">o </span><span style="color:#D19A66;--shiki-dark:#D19A66;">D</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:\\data\\myCollection.json</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130834762.png" alt="image-20210104144117228" tabindex="0" loading="lazy"><figcaption>image-20210104144117228</figcaption></figure><h2 id="_3-mongoimport-导入" tabindex="-1"><a class="header-anchor" href="#_3-mongoimport-导入"><span>3. mongoimport（导入）</span></a></h2><h3 id="_3-1-参数" tabindex="-1"><a class="header-anchor" href="#_3-1-参数"><span>3.1 参数</span></a></h3><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">可选值</th><th style="text-align:left;">参考释义</th></tr></thead><tbody><tr><td style="text-align:left;">--ignoreBlanks</td><td style="text-align:left;"></td><td style="text-align:left;">忽略要导入文件中的空字段，如果不指定该参数，则默认会读取空字段并创建</td></tr><tr><td style="text-align:left;">--type &lt;json|csv|tsv&gt;</td><td style="text-align:left;">json，csv，tsv</td><td style="text-align:left;">要导入的文件类型，另外支持tsv</td></tr><tr><td style="text-align:left;">--headerline</td><td style="text-align:left;"></td><td style="text-align:left;">使用第一行作为字段名称</td></tr><tr><td style="text-align:left;">--mode &lt;insert|upsert|merge&gt;</td><td style="text-align:left;">insert（插入）， upsert（替换数据库中的文档）， merge（合并）</td><td style="text-align:left;">指定导入过程中，如何应对数据库文档与导入文件中的文档匹配 （默认会使用_id字段对比）的情况</td></tr><tr><td style="text-align:left;">--drop</td><td style="text-align:left;"></td><td style="text-align:left;">导入之前drop集合</td></tr><tr><td style="text-align:left;">--stopOnError</td><td style="text-align:left;"></td><td style="text-align:left;">选项指定在mongorestore<strong>还原导入时一出错就中止</strong>，默认情况下， 当mongorestore遇到主键重复或文档较验失败等错误时，导入进程并不会中止。</td></tr><tr><td style="text-align:left;">--maintainInsertionOrder</td><td style="text-align:left;"></td><td style="text-align:left;">选项从版本4.2开始引入，如果指定该选项，<strong>mongorestore在还原导入文档时以实际导出时的插入顺序一致</strong>，这其中包括批量写文档的顺序以及在批量中文档的插入顺序，在早期版本中只能保证批量写文档的顺序。如果指定该选项同时也指定了选项</td></tr></tbody></table><p>其他参数与mongoexport基本一致</p><h3 id="_3-2-举例" tabindex="-1"><a class="header-anchor" href="#_3-2-举例"><span>3.2 举例</span></a></h3><p>从user.json文件导入到mytest数据库中的user集合，并在之前进行删除</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">mongoimport </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--drop -d mytest -c user --file F:\\bk\\user.json</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130834797.png" alt="image-20210104144243185" tabindex="0" loading="lazy"><figcaption>image-20210104144243185</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.cnblogs.com/dbabd/p/13259147.html" target="_blank" rel="noopener noreferrer">MongoDB 逻辑还原工具mongorestore</a></p><p><a href="https://blog.csdn.net/qq_16313365/article/details/56494522" target="_blank" rel="noopener noreferrer">MongoDB学习（六）数据库的备份、还原、导入及导出</a></p><p><a href="https://segmentfault.com/a/1190000012330284" target="_blank" rel="noopener noreferrer">Docker MongoDB 数据库备份 并复制到宿主 恢复</a></p>',23)]))}const d=e(a,[["render",r],["__file","mongodb-backup-import.html.vue"]]),g=JSON.parse('{"path":"/posts/Database/MongoDB/mongodb-backup-import.html","title":"MongoDB数据导入与导出","lang":"zh-CN","frontmatter":{"aliases":"MongoDB数据导入与导出","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 08:35","description":"MongoDB数据导入与导出 1. 简介 MongoDB官方提供了两套数据导入导出工具，一般来说， mongodump和mongorestore 进行整库导出导入时使用 操作的数据是BSON格式，进行大量dump和restore时效率较高。 mongoexport和mongoimport 进行单个集合导出导入时使用 操作的数据是JSON格式，可读性较高...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/MongoDB/mongodb-backup-import.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"MongoDB数据导入与导出"}],["meta",{"property":"og:description","content":"MongoDB数据导入与导出 1. 简介 MongoDB官方提供了两套数据导入导出工具，一般来说， mongodump和mongorestore 进行整库导出导入时使用 操作的数据是BSON格式，进行大量dump和restore时效率较高。 mongoexport和mongoimport 进行单个集合导出导入时使用 操作的数据是JSON格式，可读性较高..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130834762.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MongoDB数据导入与导出\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130834762.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130834797.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. mongoexport（导出）","slug":"_2-mongoexport-导出","link":"#_2-mongoexport-导出","children":[{"level":3,"title":"2.1 参数","slug":"_2-1-参数","link":"#_2-1-参数","children":[]},{"level":3,"title":"2.2 举例","slug":"_2-2-举例","link":"#_2-2-举例","children":[]}]},{"level":2,"title":"3. mongoimport（导入）","slug":"_3-mongoimport-导入","link":"#_3-mongoimport-导入","children":[{"level":3,"title":"3.1 参数","slug":"_3-1-参数","link":"#_3-1-参数","children":[]},{"level":3,"title":"3.2 举例","slug":"_3-2-举例","link":"#_3-2-举例","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.54,"words":761},"filePathRelative":"posts/Database/MongoDB/mongodb-backup-import.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>MongoDB官方提供了两套数据导入导出工具，一般来说，</p>\\n<ul>\\n<li>mongodump和mongorestore\\n<ul>\\n<li>进行整库导出导入时使用</li>\\n<li>操作的数据是BSON格式，进行大量dump和restore时效率较高。</li>\\n</ul>\\n</li>\\n<li>mongoexport和mongoimport\\n<ul>\\n<li>进行单个集合导出导入时使用</li>\\n<li>操作的数据是JSON格式，可读性较高</li>\\n</ul>\\n</li>\\n</ul>\\n<h2>2. mongoexport（导出）</h2>\\n<h3>2.1 参数</h3>","autoDesc":true}');export{d as comp,g as data};
