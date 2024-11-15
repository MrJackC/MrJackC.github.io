import{_ as e,c as n,a,o as i}from"./app-fWubcX7c.js";const l={};function t(s,o){return i(),n("div",null,o[0]||(o[0]=[a(`<h1 id="mongo进阶-mongodb体系结构" tabindex="-1"><a class="header-anchor" href="#mongo进阶-mongodb体系结构"><span>Mongo进阶 - MongoDB体系结构</span></a></h1><blockquote><p>上面章节已经对MongoDB生态中工具以及使用有了基础，后续文章我们将开始理解MongoDB是如何支撑这些功能的。我们将从最基本的MongoDB的体系结构开始介绍，主要包括<code>MongoDB的包结构</code>，<code>MongoDB的数据逻辑结构</code>，<code>MongoDB的数据文件结构</code>。其中围绕着MongoDB的数据文件结构，将为我们后续介绍MongoDB的存储引擎详解打下基础。</p></blockquote><h2 id="_1-mongodb包组件结构" tabindex="-1"><a class="header-anchor" href="#_1-mongodb包组件结构"><span>1. MongoDB包组件结构</span></a></h2><blockquote><p>主要是MongoDB数据库服务以及一些工具。</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130828743.png" alt="image-20230112170319247" tabindex="0" loading="lazy"><figcaption>image-20230112170319247</figcaption></figure><p>回顾下我们在MongoDB生态中展示的<a href="https://docs.mongodb.com/database-tools/" target="_blank" rel="noopener noreferrer">MongoDB Database Tools在新窗口打开</a></p><ul><li>二进制导入导出 <ul><li><code>mongodump</code> Creates a binary export of the contents of a mongod database.</li><li><code>mongorestore</code> Restores data from a mongodump database dump into a mongod or mongos</li><li><code>bsondump</code> Converts BSON dump files into JSON.</li></ul></li><li>数据导入导出 <ul><li><code>mongoimport</code> Imports content from an Extended JSON, CSV, or TSV export file.</li><li><code>mongoexport</code> Produces a JSON or CSV export of data stored in a mongod instance.</li></ul></li><li>诊断工具 <ul><li><code>mongostat</code> Provides a quick overview of the status of a currently running mongod or mongos instance.</li><li><code>mongotop</code> Provides an overview of the time a mongod instance spends reading and writing data.</li></ul></li><li>GridFS 工具 <ul><li><code>mongofiles</code> Supports manipulating files stored in your MongoDB instance in GridFS objects.</li></ul></li></ul><p>除了上述没有列举到，还有：</p><ul><li><code>mongoperf</code>: mongoDB自带工具，用于评估磁盘随机IO性能。</li></ul><p>包组件可以在<a href="https://docs.mongodb.com/manual/reference/program/#mongodb-package-components" target="_blank" rel="noopener noreferrer">官网MongoDB Package Components</a>找到详细的用法。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130828780.png" alt="image-20230112170442473" tabindex="0" loading="lazy"><figcaption>image-20230112170442473</figcaption></figure><p>其中最主要的程序当然是mongod（数据库服务），mongod在不同的部署方案中（单机部署，副本集部署，分片集群部署），通过不同的配置，可以扮演多种不同的角色：</p><ul><li>在单机部署中扮演 数据库服务器（提供所有读写功能）</li><li>在副本集部署中，通过配置，可以部署为 primary节点（主服务器，负责写数据，也可以提供查询）、secondary节点（从服务器，它从主节点复制数据，也可以提供查询）、以及arbiter节点（仲裁节点，不保存数据，主要用于参与选举投票）</li><li>在分片集群中，除了在每个分片中扮演上述角色外，还扮演着配置服务器的角色（存储有分片集群的所有元数据信息，mongos的数据路由分发等都要依赖于它）</li></ul><p>在一台服务器上，可以启动多个mongod服务。但在实际生产部署中，通常还是建议一台服务器部署一个mongod实例，这样不仅减少资源竞争，而且服务器故障也不会同时影响到多个服务。</p><h2 id="_2-mongodb数据逻辑结构" tabindex="-1"><a class="header-anchor" href="#_2-mongodb数据逻辑结构"><span>2. MongoDB数据逻辑结构</span></a></h2><p>MongoDB 数据逻辑结构分为数据库（database）、集合（collection）、文档（document）三层 :</p><ul><li>一个mongod实例中允许创建多个数据库。</li><li>一个数据库中允许创建多个集合（集合相当于关系型数据库的表）。</li><li>一个集合则是由若干个文档构成（文档相当于关系型数据库的行，是MongoDB中数据的基本单元）。</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130828811.png" alt="image-20230112170822434" tabindex="0" loading="lazy"><figcaption>image-20230112170822434</figcaption></figure><h3 id="_2-1-数据库" tabindex="-1"><a class="header-anchor" href="#_2-1-数据库"><span>2.1 数据库</span></a></h3><blockquote><p>一个数据库中可以创建多个集合，原则上我们通常把逻辑相近的集合都放在一个数据库中，当然出于性能或者数据量的关系，也可能进行拆分。</p></blockquote><p>在MongoDB中有几个内建的数据库：</p><ul><li><p><strong>admin</strong> admin库主要存放有数据库帐号相关信息。</p></li><li><p>local</p><p>local数据库永远不会被复制到从节点，可以用来存储限于本地单台服务器的任意集合副本集的配置信息、oplog就存储在local库中。</p><ul><li>重要的数据不要存储在local库，因为没有冗余副本，如果这个节点故障，存储在local库的数据就无法正常使用了。</li></ul></li><li><p><strong>config</strong> config数据库用于分片集群环境，存放了分片相关的元数据信息。</p></li><li><p><strong>test</strong> MongoDB默认创建的一个测试库，连接mongod服务时，如果不指定连接的具体数据库，默认就会连接到test库。</p></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130828837.png" alt="image-20230112171000116" tabindex="0" loading="lazy"><figcaption>image-20230112171000116</figcaption></figure><h3 id="_2-2-集合" tabindex="-1"><a class="header-anchor" href="#_2-2-集合"><span>2.2 集合</span></a></h3><blockquote><p>集合由若干条文档记录构成。</p></blockquote><ul><li>前面介绍MongoDB的时候提到过，集合是<strong>schema-less</strong>的（无模式或动态模式），这意味着集合不需要在读写数据前创建模式就可以使用，集合中的文档也可以拥有不同的字段，随时可以任意增减某个文档的字段。</li><li>在集合上可以对文档进行<strong>增删改查</strong>以及进行<strong>聚合</strong>操作。</li><li>在集合上还可以对文档中的字段创建<strong>索引</strong>。</li><li>除了一般的集合外，还可以创建一种叫做**定容集合（capped collection）**类型的集合，这种集合与一般集合主要的区别是，它可以限制集合的容量大小，在数据写满的时候，又可以从头开始覆盖最开始的文档进行循环写入。</li><li><strong>副本集</strong>就是利用这种类型的集合作为<strong>oplog</strong>，记录primary节点上的写操作，并且同步到从<strong>节点重放，以实现主副节点数据复制的功能</strong>。</li></ul><h3 id="_2-3-文档" tabindex="-1"><a class="header-anchor" href="#_2-3-文档"><span>2.3 文档</span></a></h3><blockquote><p>文档是MongoDB中数据的基本存储单元，它以一种叫做BSON文档的结构表示。BSON，即Binary JSON，多个键及其关联的值有序地存放在其中，类似映射，散列或字典。</p></blockquote><ul><li>文档中的键/值对是有序的，不同序则是不同文档。并且键是区分大小写的，否则也为不同文档。</li><li>文档的键是字符串，而值除了字符串，还可以是int, long, double，boolean，子文档，数组等多种类型。</li><li>文档中不能有重复的键。</li><li>每个文档都有一个<strong>默认的_id键</strong>，它相当于关系型数据库中的主键，这个键的值在同一个集合中必须是唯一的，<strong>_id键值默认是ObjectId类型</strong>，在插入文档的时候，如果用户不设置文档的_id值得话，MongoDB会自动生成生成一个唯一的ObjectId值进行填充。</li></ul><h2 id="_3-mongodb数据库文件" tabindex="-1"><a class="header-anchor" href="#_3-mongodb数据库文件"><span>3. MongoDB数据库文件</span></a></h2><blockquote><p>注意</p><p>MongoDB数据库文件和MongoDB存储的引擎有直接关系，MongoDB一共提供了三种存储引擎：WiredTiger，MMAPV1和In Memory；在MongoDB3.2之前采用的是MMAPV1; 后续版本v3.2开始默认采用WiredTiger； 且在v4.2版本中移除了MMAPV1的引擎。</p></blockquote><p>在后续文章中，还将对MongoDB存储引擎进行详解。</p><h3 id="_3-1-mongodb-mmapv1引擎下的数据库文件" tabindex="-1"><a class="header-anchor" href="#_3-1-mongodb-mmapv1引擎下的数据库文件"><span>3.1 MongoDB - MMAPv1引擎下的数据库文件</span></a></h3><blockquote><p>由于v3.0后续版本已经弃用了，所以这里不会详细介绍。</p></blockquote><ul><li>journal 日志文件</li><li>namespace 表名文件</li><li>data 数据及索引文件</li></ul><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">db</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">------journal</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">           |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">----_j.0</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">           |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">----_j.1</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">           |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">----lsn</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">------local</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">           |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">----local.ns</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">           |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">----local.0</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">           |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">----local.1</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">------mydb</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">           |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">----mydb.ns</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">           |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">----mydb.0</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">           |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">----mydb.1</span></span></code></pre></div><ul><li>如果感兴趣可以参看 <a href="https://docs.mongodb.com/v3.2/core/mmapv1/" target="_blank" rel="noopener noreferrer">官方文档 - MMAPv1 Storage Engine</a></li><li>如果你希望详解了解MongoDB MMAP的引擎（源码级别），你可以参考这篇<a href="https://cloud.tencent.com/developer/article/1004385" target="_blank" rel="noopener noreferrer">MongoDB Mmap 引擎分析</a></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130828885.png" alt="image-20230112171323722" tabindex="0" loading="lazy"><figcaption>image-20230112171323722</figcaption></figure><h3 id="_3-2-mongodb-wiredtiger" tabindex="-1"><a class="header-anchor" href="#_3-2-mongodb-wiredtiger"><span>3.2 MongoDB - WiredTiger</span></a></h3><blockquote><p>MongoDB v3.2已经将WiredTiger设置为了默认的存储引擎</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130828931.png" alt="image-20230112171350469" tabindex="0" loading="lazy"><figcaption>image-20230112171350469</figcaption></figure><ul><li><code>collection-*.wt</code> 存储collection的数据</li><li><code>index-*.wt</code> 存储索引的数据</li><li><code>WiredTiger</code> 存储基本配置信息</li><li><code>WiredTiger.wt</code> 存储所有其它collection的元数据信息</li><li><code>WiredTiger.lock</code> 存储进程ID，用于防止多个进程连接同一个Wiredtiger数据库</li><li><code>WiredTiger.turtle</code> 存储WiredTiger.wt的元数据信息</li><li><code>journal</code> 存储Write ahead log</li></ul><p>后续的文章将对WiredTiger存储引擎进行详解</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/db/nosql-mongo/mongo-y-arch.html" target="_blank" rel="noopener noreferrer">Mongo进阶 - MongoDB体系结构</a></p>`,45)]))}const g=e(l,[["render",t],["__file","mongo-y-arch.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/MongoDB/mongo-y-arch.html","title":"Mongo进阶 - MongoDB体系结构","lang":"zh-CN","frontmatter":{"aliases":"Mongo进阶 - MongoDB体系结构","tags":null,"cssclass":null,"source":null,"order":110,"category":["mongodb"],"created":"2024-02-22 10:49","updated":"2024-03-13 08:28","description":"Mongo进阶 - MongoDB体系结构 上面章节已经对MongoDB生态中工具以及使用有了基础，后续文章我们将开始理解MongoDB是如何支撑这些功能的。我们将从最基本的MongoDB的体系结构开始介绍，主要包括MongoDB的包结构，MongoDB的数据逻辑结构，MongoDB的数据文件结构。其中围绕着MongoDB的数据文件结构，将为我们后续介...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MongoDB/mongo-y-arch.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Mongo进阶 - MongoDB体系结构"}],["meta",{"property":"og:description","content":"Mongo进阶 - MongoDB体系结构 上面章节已经对MongoDB生态中工具以及使用有了基础，后续文章我们将开始理解MongoDB是如何支撑这些功能的。我们将从最基本的MongoDB的体系结构开始介绍，主要包括MongoDB的包结构，MongoDB的数据逻辑结构，MongoDB的数据文件结构。其中围绕着MongoDB的数据文件结构，将为我们后续介..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130828743.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mongo进阶 - MongoDB体系结构\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130828743.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130828780.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130828811.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130828837.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130828885.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130828931.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. MongoDB包组件结构","slug":"_1-mongodb包组件结构","link":"#_1-mongodb包组件结构","children":[]},{"level":2,"title":"2. MongoDB数据逻辑结构","slug":"_2-mongodb数据逻辑结构","link":"#_2-mongodb数据逻辑结构","children":[{"level":3,"title":"2.1 数据库","slug":"_2-1-数据库","link":"#_2-1-数据库","children":[]},{"level":3,"title":"2.2 集合","slug":"_2-2-集合","link":"#_2-2-集合","children":[]},{"level":3,"title":"2.3 文档","slug":"_2-3-文档","link":"#_2-3-文档","children":[]}]},{"level":2,"title":"3. MongoDB数据库文件","slug":"_3-mongodb数据库文件","link":"#_3-mongodb数据库文件","children":[{"level":3,"title":"3.1 MongoDB - MMAPv1引擎下的数据库文件","slug":"_3-1-mongodb-mmapv1引擎下的数据库文件","link":"#_3-1-mongodb-mmapv1引擎下的数据库文件","children":[]},{"level":3,"title":"3.2 MongoDB - WiredTiger","slug":"_3-2-mongodb-wiredtiger","link":"#_3-2-mongodb-wiredtiger","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.38,"words":1913},"filePathRelative":"posts/Database/MongoDB/mongo-y-arch.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>上面章节已经对MongoDB生态中工具以及使用有了基础，后续文章我们将开始理解MongoDB是如何支撑这些功能的。我们将从最基本的MongoDB的体系结构开始介绍，主要包括<code>MongoDB的包结构</code>，<code>MongoDB的数据逻辑结构</code>，<code>MongoDB的数据文件结构</code>。其中围绕着MongoDB的数据文件结构，将为我们后续介绍MongoDB的存储引擎详解打下基础。</p>\\n</blockquote>\\n<h2>1. MongoDB包组件结构</h2>\\n<blockquote>\\n<p>主要是MongoDB数据库服务以及一些工具。</p>\\n</blockquote>","autoDesc":true}');export{g as comp,c as data};
