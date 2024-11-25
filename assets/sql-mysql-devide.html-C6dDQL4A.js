import{_ as a,c as i,a as t,o as n}from"./app-BfIe-EZg.js";const l={};function r(s,e){return n(),i("div",null,e[0]||(e[0]=[t('<h1 id="mysql-分表分库" tabindex="-1"><a class="header-anchor" href="#mysql-分表分库"><span>MySQL - 分表分库</span></a></h1><h2 id="_1-水平切分" tabindex="-1"><a class="header-anchor" href="#_1-水平切分"><span>1. 水平切分</span></a></h2><p>水平切分又称为 Sharding，它是将同一个表中的记录拆分到多个结构相同的表中。</p><p>当一个表的数据不断增多时，Sharding 是必然的选择，它可以将数据分布到集群的不同节点上，从而缓解单个数据库的压力。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181455345.png" alt="image-20220630203012598.png" tabindex="0" loading="lazy"><figcaption>image-20220630203012598.png</figcaption></figure><h2 id="_2-垂直切分" tabindex="-1"><a class="header-anchor" href="#_2-垂直切分"><span>2. 垂直切分</span></a></h2><p>垂直切分是将一张表按列切分成多个表，通常是按照列的关系密集程度进行切分，也可以利用垂直切分将经常被使用的列和不经常被使用的列切分到不同的表中。</p><p>在数据库的层面使用垂直切分将按数据库中表的密集程度部署到不同的库中，例如将原来的电商数据库垂直切分成商品数据库、用户数据库等。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181455404.png" alt="image-20220630203247107.png" tabindex="0" loading="lazy"><figcaption>image-20220630203247107.png</figcaption></figure><h2 id="_3-sharding-策略" tabindex="-1"><a class="header-anchor" href="#_3-sharding-策略"><span>3. Sharding 策略</span></a></h2><ul><li>哈希取模: hash(key) % NUM_DB</li><li>范围: 可以是 ID 范围也可以是时间范围</li><li>映射表: 使用单独的一个数据库来存储映射关系</li></ul><h2 id="_4-sharding-存在的问题及解决方案" tabindex="-1"><a class="header-anchor" href="#_4-sharding-存在的问题及解决方案"><span>4. Sharding 存在的问题及解决方案</span></a></h2><h3 id="_4-1-事务问题" tabindex="-1"><a class="header-anchor" href="#_4-1-事务问题"><span>4.1 事务问题</span></a></h3><p>使用分布式事务来解决，比如 XA 接口。</p><h3 id="_4-2-链接" tabindex="-1"><a class="header-anchor" href="#_4-2-链接"><span>4.2 链接</span></a></h3><p>可以将原来的 JOIN 分解成多个单表查询，然后在用户程序中进行 JOIN。</p><h3 id="_4-3-id-唯一性" tabindex="-1"><a class="header-anchor" href="#_4-3-id-唯一性"><span>4.3 ID 唯一性</span></a></h3><ul><li>使用全局唯一 ID: GUID</li><li>为每个分片指定一个 ID 范围</li><li>分布式 ID 生成器 (如 Twitter 的 Snowflake 算法)</li></ul><h2 id="_5-数据库分片两种方案" tabindex="-1"><a class="header-anchor" href="#_5-数据库分片两种方案"><span>5. 数据库分片两种方案</span></a></h2><h3 id="_5-1-客户端代理" tabindex="-1"><a class="header-anchor" href="#_5-1-客户端代理"><span>5.1 客户端代理</span></a></h3><p><strong>分片逻辑在应用端，封装在jar包中，通过修改或者封装JDBC层来实现</strong></p><ul><li>当当网的Sharding-JDBC</li><li>阿里的TDDL是两种比较常用的实现</li></ul><h3 id="_5-2-中间件代理" tabindex="-1"><a class="header-anchor" href="#_5-2-中间件代理"><span>5.2 中间件代理</span></a></h3><p><strong>在应用和数据中间加了一层代理层，分片逻辑统一维护在中间件服务中</strong>。</p><ul><li>Mycat</li><li>360的Atlas</li><li>网易的DDB</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/db/sql-mysql/sql-mysql-devide.html" target="_blank" rel="noopener noreferrer">MySQL - 分表分库</a></p>',27)]))}const d=a(l,[["render",r],["__file","sql-mysql-devide.html.vue"]]),p=JSON.parse('{"path":"/posts/Database/MySQL/sql-mysql-devide.html","title":"MySQL - 分表分库","lang":"zh-CN","frontmatter":{"aliases":"MySQL - 分表分库","tags":null,"cssclass":null,"source":null,"order":310,"category":["Mysql","数据库"],"created":"2024-02-22 10:49","updated":"2024-10-18 14:55","description":"MySQL - 分表分库 1. 水平切分 水平切分又称为 Sharding，它是将同一个表中的记录拆分到多个结构相同的表中。 当一个表的数据不断增多时，Sharding 是必然的选择，它可以将数据分布到集群的不同节点上，从而缓解单个数据库的压力。 image-20220630203012598.pngimage-20220630203012598.pn...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MySQL/sql-mysql-devide.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"MySQL - 分表分库"}],["meta",{"property":"og:description","content":"MySQL - 分表分库 1. 水平切分 水平切分又称为 Sharding，它是将同一个表中的记录拆分到多个结构相同的表中。 当一个表的数据不断增多时，Sharding 是必然的选择，它可以将数据分布到集群的不同节点上，从而缓解单个数据库的压力。 image-20220630203012598.pngimage-20220630203012598.pn..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181455345.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL - 分表分库\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181455345.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181455404.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 水平切分","slug":"_1-水平切分","link":"#_1-水平切分","children":[]},{"level":2,"title":"2. 垂直切分","slug":"_2-垂直切分","link":"#_2-垂直切分","children":[]},{"level":2,"title":"3. Sharding 策略","slug":"_3-sharding-策略","link":"#_3-sharding-策略","children":[]},{"level":2,"title":"4. Sharding 存在的问题及解决方案","slug":"_4-sharding-存在的问题及解决方案","link":"#_4-sharding-存在的问题及解决方案","children":[{"level":3,"title":"4.1 事务问题","slug":"_4-1-事务问题","link":"#_4-1-事务问题","children":[]},{"level":3,"title":"4.2 链接","slug":"_4-2-链接","link":"#_4-2-链接","children":[]},{"level":3,"title":"4.3 ID 唯一性","slug":"_4-3-id-唯一性","link":"#_4-3-id-唯一性","children":[]}]},{"level":2,"title":"5. 数据库分片两种方案","slug":"_5-数据库分片两种方案","link":"#_5-数据库分片两种方案","children":[{"level":3,"title":"5.1 客户端代理","slug":"_5-1-客户端代理","link":"#_5-1-客户端代理","children":[]},{"level":3,"title":"5.2 中间件代理","slug":"_5-2-中间件代理","link":"#_5-2-中间件代理","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.75,"words":526},"filePathRelative":"posts/Database/MySQL/sql-mysql-devide.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 水平切分</h2>\\n<p>水平切分又称为 Sharding，它是将同一个表中的记录拆分到多个结构相同的表中。</p>\\n<p>当一个表的数据不断增多时，Sharding 是必然的选择，它可以将数据分布到集群的不同节点上，从而缓解单个数据库的压力。</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181455345.png\\" alt=\\"image-20220630203012598.png\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220630203012598.png</figcaption></figure>","autoDesc":true}');export{d as comp,p as data};
