import{_ as o,c as e,a,o as s}from"./app-CZJgH_ea.js";const n={};function r(d,t){return s(),e("div",null,t[0]||(t[0]=[a(`<h1 id="mongodb数据备份与还原" tabindex="-1"><a class="header-anchor" href="#mongodb数据备份与还原"><span>MongoDB数据备份与还原</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>MongoDB官方提供了两套数据导入导出工具，一般来说，</p><ul><li>mongodump和mongorestore <ul><li>进行整库导出导入时使用</li><li>操作的数据是BSON格式，进行大量dump和restore时效率较高。</li></ul></li><li>mongoexport和mongoimport <ul><li>进行单个集合导出导入时使用</li><li>操作的数据是JSON格式，可读性较高</li></ul></li></ul><h2 id="_2-mongodump-备份" tabindex="-1"><a class="header-anchor" href="#_2-mongodump-备份"><span>2. mongodump（备份）</span></a></h2><h3 id="_2-1-说明" tabindex="-1"><a class="header-anchor" href="#_2-1-说明"><span>2.1 说明</span></a></h3><p>mongodump是一个用于导出二进制数据库内容的实用工具，它导出的bson文档中只会包含着集合文档等信息，不包括索引信息（索引信息会单独导出），所以还原后，索引必须重建（这个不用担心，使用mongorestore会自动重建mongodump生成的索引信息）。3.4版本中添加了对只读视图的支持。</p><h3 id="_2-2-参数" tabindex="-1"><a class="header-anchor" href="#_2-2-参数"><span>2.2 参数</span></a></h3><table><thead><tr><th>命令</th><th>全称</th><th>默认值</th><th>参考释义</th></tr></thead><tbody><tr><td></td><td>--help</td><td></td><td>查看mongodump命令的使用帮助</td></tr><tr><td></td><td>--version</td><td></td><td>返回mongodump的版本号</td></tr><tr><td>-h</td><td><code>--host &lt;hostname&gt;&lt;:port&gt;</code></td><td><code>localhost:27017</code></td><td>指定mongod要连接的主机名及端口号</td></tr><tr><td></td><td><code>--port &lt;port&gt;</code></td><td><code>27017</code></td><td>指定MongoDB实例监听客户连接的TCP端口号</td></tr><tr><td>-u</td><td><code>--username &lt;username&gt;</code></td><td></td><td>指定用于向使用认证的MongoDB数据库认证的用户名，与--password和 --authenticationDatabase结合使用</td></tr><tr><td>-p</td><td><code>--password &lt;password&gt;</code></td><td></td><td>指定用于向使用认证的MongoDB数据库认证的密码。与--username和 -- authenticationDatabase选项结合使用。</td></tr><tr><td>-d</td><td><code>--db &lt;database&gt;</code></td><td></td><td>指定要备份的数据库。如果不指定，mongodump会将此实例中的所有数据库备份。</td></tr><tr><td>-c</td><td><code>--collection &lt;collection&gt;</code></td><td></td><td>指定要备份的集合。如果不指定，则会将指定数据库或实例中的所有集合备份。</td></tr><tr><td></td><td><code>--gzip</code></td><td></td><td>3.2版本+，压缩输出，如果mongodump指定导出到目录，则该选项会将每个文件都压缩， 并添加.gz后缀； 如果mongodump指定导出到文档或标准输出流，则该选项会压缩到文档或输出流中</td></tr><tr><td>-o</td><td><code>--out &lt;path&gt;</code></td><td></td><td>指定导出数据的目录路径，如不指定，则mongodump默认将文件输出到dump所在的工作目录中。 该选项不能和--archive一起使用</td></tr></tbody></table><h3 id="_2-3-举例" tabindex="-1"><a class="header-anchor" href="#_2-3-举例"><span>2.3 举例</span></a></h3><p>将mytest数据库中的user集合导出到F:\\bk目录下(win在要bin目录下执行)</p><div class="language-groovy" data-ext="groovy" data-title="groovy"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">mongodump </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">d mytest </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">c user </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">o </span><span style="color:#D19A66;--shiki-dark:#D19A66;">F</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:\\bk</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130834144.png" alt="image-20210104143705063" tabindex="0" loading="lazy"><figcaption>image-20210104143705063</figcaption></figure><p>其中的metadata.json即为索引信息</p><h2 id="_3-mongorestore" tabindex="-1"><a class="header-anchor" href="#_3-mongorestore"><span>3. mongorestore</span></a></h2><h3 id="_3-1-说明" tabindex="-1"><a class="header-anchor" href="#_3-1-说明"><span>3.1 说明</span></a></h3><p>mongorestore用来导入数据到MongoDB实例中，3.0.0版本以上支持通过标准输入流来导入数据。</p><h3 id="_3-2-参数" tabindex="-1"><a class="header-anchor" href="#_3-2-参数"><span>3.2 参数</span></a></h3><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">全称</th><th style="text-align:left;">参考释义</th></tr></thead><tbody><tr><td style="text-align:left;">-d</td><td style="text-align:left;"><code>--db &lt;database&gt;</code></td><td style="text-align:left;">指定要还原的数据库。如果不指定，restore将会还原dump记录的所有数据库，并会覆盖现有数据库数据</td></tr><tr><td style="text-align:left;">-c</td><td style="text-align:left;"><code>--collection &lt;collection&gt;</code></td><td style="text-align:left;"><code>指定要还原的集合。如果不指定，mongorestore会从文件名中读取识别集合名称（如果有扩展名则会省略扩展名）</code></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">--drop</td><td style="text-align:left;">还原集合之前会先从目标数据库中删除集合，不会删除不在备份中的集合。</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">--gzip</td><td style="text-align:left;">3.2版本+，从压缩文件中还原</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"><code>&lt;path&gt;</code></td><td style="text-align:left;">要还原的数据文件路径，该参数必须是mongorestore命令的最后一个参数</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">--dir</td><td style="text-align:left;">指定备份文件目录</td></tr></tbody></table><p>其他参数与mongodump基本一致。</p><h3 id="_3-3-举例" tabindex="-1"><a class="header-anchor" href="#_3-3-举例"><span>3.3 举例：</span></a></h3><p>通过user.bson文件还原mytest数据库中的user集合，并在还原之前进行删除</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mongorestore</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --drop</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -d</span><span style="color:#98C379;--shiki-dark:#98C379;"> mytest</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -c</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --dir</span><span style="color:#98C379;--shiki-dark:#98C379;"> F:</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\b</span><span style="color:#98C379;--shiki-dark:#98C379;">k</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\m</span><span style="color:#98C379;--shiki-dark:#98C379;">ytest</span></span></code></pre></div><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">mongorestore </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--drop -d mytest -c user F:\\bk\\mytest\\user.bson</span></span></code></pre></div><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">linux下可以使用：mongorestore</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -d</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">db_nam</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">e&gt; &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">bson_folde</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">r&gt;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">windows下可以使用：mongorestore.exe</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -d</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">db_nam</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">e&gt; &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">bson_folde</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">r&gt;</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130834189.png" alt="image-20210104143924453" tabindex="0" loading="lazy"><figcaption>image-20210104143924453</figcaption></figure><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">./mongorestore</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -h</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;127.0.0.1:27017&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;">  -d</span><span style="color:#98C379;--shiki-dark:#98C379;"> caseDB</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --dir</span><span style="color:#98C379;--shiki-dark:#98C379;"> /home/data/caseDB_200619</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --bypassDocumentValidation</span></span></code></pre></div><h2 id="_4-mongoexport-mongoimport与mongodump-mongorestore的对比" tabindex="-1"><a class="header-anchor" href="#_4-mongoexport-mongoimport与mongodump-mongorestore的对比"><span>4. mongoexport/mongoimport与mongodump/mongorestore的对比</span></a></h2><blockquote><ol><li>mongoexport/mongoimport导入/导出的是JSON格式，而mongodump/mongorestore导入/导出的是BSON格式。</li><li>JSON可读性强但体积较大，BSON则是二进制文件，体积小但对人类几乎没有可读性。</li><li>在一些mongodb版本之间，BSON格式可能会随版本不同而有所不同，所以不同版本之间用mongodump/mongorestore可能不会成功，具体要看版本之间的兼容性。当无法使用BSON进行跨版本的数据迁移的时候，使用JSON格式即mongoexport/mongoimport是一个可选项。跨版本的mongodump/mongorestore并不推荐，实在要做请先检查文档看两个版本是否兼容（大部分时候是的）。</li><li>JSON虽然具有较好的跨版本通用性，但其只保留了数据部分，不保留索引，账户等其他基础信息。使用时应该注意。</li></ol></blockquote><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.cnblogs.com/dbabd/p/13259147.html" target="_blank" rel="noopener noreferrer">MongoDB 逻辑还原工具mongorestore</a></p><p><a href="https://blog.csdn.net/qq_16313365/article/details/56494522" target="_blank" rel="noopener noreferrer">MongoDB学习（六）数据库的备份、还原、导入及导出</a></p><p><a href="https://segmentfault.com/a/1190000012330284" target="_blank" rel="noopener noreferrer">Docker MongoDB 数据库备份 并复制到宿主 恢复</a></p>`,33)]))}const i=o(n,[["render",r],["__file","mongodb-backup.html.vue"]]),p=JSON.parse('{"path":"/posts/Database/MongoDB/mongodb-backup.html","title":"MongoDB数据备份与还原","lang":"zh-CN","frontmatter":{"aliases":"MongoDB数据备份与还原","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 08:34","description":"MongoDB数据备份与还原 1. 简介 MongoDB官方提供了两套数据导入导出工具，一般来说， mongodump和mongorestore 进行整库导出导入时使用 操作的数据是BSON格式，进行大量dump和restore时效率较高。 mongoexport和mongoimport 进行单个集合导出导入时使用 操作的数据是JSON格式，可读性较高...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MongoDB/mongodb-backup.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"MongoDB数据备份与还原"}],["meta",{"property":"og:description","content":"MongoDB数据备份与还原 1. 简介 MongoDB官方提供了两套数据导入导出工具，一般来说， mongodump和mongorestore 进行整库导出导入时使用 操作的数据是BSON格式，进行大量dump和restore时效率较高。 mongoexport和mongoimport 进行单个集合导出导入时使用 操作的数据是JSON格式，可读性较高..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130834144.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MongoDB数据备份与还原\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130834144.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130834189.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. mongodump（备份）","slug":"_2-mongodump-备份","link":"#_2-mongodump-备份","children":[{"level":3,"title":"2.1 说明","slug":"_2-1-说明","link":"#_2-1-说明","children":[]},{"level":3,"title":"2.2 参数","slug":"_2-2-参数","link":"#_2-2-参数","children":[]},{"level":3,"title":"2.3 举例","slug":"_2-3-举例","link":"#_2-3-举例","children":[]}]},{"level":2,"title":"3. mongorestore","slug":"_3-mongorestore","link":"#_3-mongorestore","children":[{"level":3,"title":"3.1 说明","slug":"_3-1-说明","link":"#_3-1-说明","children":[]},{"level":3,"title":"3.2 参数","slug":"_3-2-参数","link":"#_3-2-参数","children":[]},{"level":3,"title":"3.3 举例：","slug":"_3-3-举例","link":"#_3-3-举例","children":[]}]},{"level":2,"title":"4. mongoexport/mongoimport与mongodump/mongorestore的对比","slug":"_4-mongoexport-mongoimport与mongodump-mongorestore的对比","link":"#_4-mongoexport-mongoimport与mongodump-mongorestore的对比","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.97,"words":1192},"filePathRelative":"posts/Database/MongoDB/mongodb-backup.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>MongoDB官方提供了两套数据导入导出工具，一般来说，</p>\\n<ul>\\n<li>mongodump和mongorestore\\n<ul>\\n<li>进行整库导出导入时使用</li>\\n<li>操作的数据是BSON格式，进行大量dump和restore时效率较高。</li>\\n</ul>\\n</li>\\n<li>mongoexport和mongoimport\\n<ul>\\n<li>进行单个集合导出导入时使用</li>\\n<li>操作的数据是JSON格式，可读性较高</li>\\n</ul>\\n</li>\\n</ul>\\n<h2>2. mongodump（备份）</h2>\\n<h3>2.1 说明</h3>","autoDesc":true}');export{i as comp,p as data};
