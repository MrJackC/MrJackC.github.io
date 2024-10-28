import{_ as a,c as i,a as n,o as t}from"./app-BOcQBfH9.js";const r={};function l(s,e){return t(),i("div",null,e[0]||(e[0]=[n('<h1 id="mysql-分表分库详解" tabindex="-1"><a class="header-anchor" href="#mysql-分表分库详解"><span>MySQL - 分表分库详解</span></a></h1><h2 id="_0-前言" tabindex="-1"><a class="header-anchor" href="#_0-前言"><span>0. 前言</span></a></h2><ol><li>什么是分库分表</li><li>为什么需要分库分表</li><li>如何分库分表</li><li>什么时候开始考虑分库分表</li><li>分库分表会导致哪些问题</li><li>分库分表中间件简介</li></ol><h2 id="_1-什么是分库分表" tabindex="-1"><a class="header-anchor" href="#_1-什么是分库分表"><span>1. 什么是分库分表</span></a></h2><p><strong>分库</strong>：就是一个数据库分成多个数据库，部署到不同机器。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130931552.png" alt="image-20220705204426671" tabindex="0" loading="lazy"><figcaption>image-20220705204426671</figcaption></figure><p><strong>分表</strong>：就是一个数据库表分成多个表。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130931612.png" alt="image-20220705204453540" tabindex="0" loading="lazy"><figcaption>image-20220705204453540</figcaption></figure><h2 id="_2-为什么需要分库分表" tabindex="-1"><a class="header-anchor" href="#_2-为什么需要分库分表"><span>2. 为什么需要分库分表</span></a></h2><h3 id="_2-1-为什么需要分库呢" tabindex="-1"><a class="header-anchor" href="#_2-1-为什么需要分库呢"><span>2.1 为什么需要分库呢？</span></a></h3><p>如果业务量剧增，数据库可能会出现性能瓶颈，这时候我们就需要考虑拆分数据库。从这几方面来看：</p><ul><li><strong>磁盘存储</strong></li></ul><p>业务量剧增，MySQL单机磁盘容量会撑爆，拆成多个数据库，磁盘使用率大大降低。</p><ul><li><strong>并发连接支撑</strong></li></ul><p>我们知道数据库连接是有限的。在高并发的场景下，大量请求访问数据库，MySQL单机是扛不住的！当前非常火的<strong>微服务架构</strong>出现，就是为了应对高并发。它把<strong>订单、用户、商品</strong>等不同模块，拆分成多个应用，并且把单个数据库也拆分成多个不同功能模块的数据库（<strong>订单库、用户库、商品库</strong>），以分担读写压力。</p><h3 id="_2-2-为什么需要分表" tabindex="-1"><a class="header-anchor" href="#_2-2-为什么需要分表"><span>2.2 为什么需要分表？</span></a></h3><p>数据量太大的话，SQL的查询就会变慢。如果一个查询SQL<strong>没命中索引</strong>，千百万数据量级别的表可能会拖垮整个数据库。</p><p>即使SQL命中了索引，如果表的数据量<strong>超过一千万</strong>的话，<strong>查询也是会明显变慢的</strong>。这是因为索引一般是B+树结构，数据千万级别的话，B+树的高度会增高，查询就变慢啦。</p><p><strong>小伙伴们是否还记得，MySQL的B+树的高度怎么计算的呢？</strong> 顺便复习一下吧</p><p>InnoDB存储引擎最小储存单元是页，一页大小就是16k。B+树叶子存的是数据，内部节点存的是键值+指针。索引组织表通过非叶子节点的二分查找法以及指针确定数据在哪个页中，进而再去数据页中找到需要的数据，B+树结构图如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130931637.png" alt="image-20220705205234881" tabindex="0" loading="lazy"><figcaption>image-20220705205234881</figcaption></figure><p>假设B+树的高度为2的话，即有一个根结点和若干个叶子结点。这棵B+树的存放总记录数为=根结点指针数*单个叶子节点记录行数。</p><ul><li>如果一行记录的数据大小为1k，那么单个叶子节点可以存的记录数 =16k/1k =16.</li><li>非叶子节点内存放多少指针呢？我们假设主键ID为<strong>bigint类型，长度为8字节</strong>(<strong>面试官问你int类型，一个int就是32位，4字节</strong>)，而指针大小在InnoDB源码中设置为6字节，所以就是 8+6=14 字节，16k/14B =16*1024B/14B = 1170</li></ul><p>因此，一棵高度为2的B+树，能存放1170 * 16=18720条这样的数据记录。同理一棵高度为3的B+树，能存放1170 *1170 *16 =21902400，大概可以存放两千万左右的记录。B+树高度一般为1-3层，如果B+到了4层，查询的时候会<strong>多查磁盘</strong>的次数，SQL就会变慢。</p><p>因此单表数据量太大，SQL查询会变慢，所以就需要考虑分表啦。</p><h2 id="_3-如何分库分表" tabindex="-1"><a class="header-anchor" href="#_3-如何分库分表"><span>3. 如何分库分表</span></a></h2><h3 id="_3-1-垂直拆分" tabindex="-1"><a class="header-anchor" href="#_3-1-垂直拆分"><span>3.1 垂直拆分</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130931677.png" alt="image-20220705205329917" tabindex="0" loading="lazy"><figcaption>image-20220705205329917</figcaption></figure><h4 id="_3-1-1-垂直分库" tabindex="-1"><a class="header-anchor" href="#_3-1-1-垂直分库"><span>3.1.1 垂直分库</span></a></h4><p>在业务发展初期，业务功能模块比较少，为了快速上线和迭代，往往采用单个数据库来保存数据。数据库架构如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181452674.png" alt="image-20220705205413804.png" tabindex="0" loading="lazy"><figcaption>image-20220705205413804.png</figcaption></figure><p>但是随着业务蒸蒸日上，系统功能逐渐完善。这时候，可以按照系统中的不同业务进行拆分，比如拆分成<strong>用户库、订单库、积分库、商品库</strong>，把它们部署在不同的数据库服务器，这就是<strong>垂直分库</strong>。</p><p>垂直分库，将原来一个单数据库的压力分担到不同的数据库，可以很好应对高并发场景。数据库垂直拆分后的架构如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181452712.png" alt="image-20220705205503335.png" tabindex="0" loading="lazy"><figcaption>image-20220705205503335.png</figcaption></figure><h4 id="_3-1-2-垂直分表" tabindex="-1"><a class="header-anchor" href="#_3-1-2-垂直分表"><span>3.1.2 垂直分表</span></a></h4><p>如果一个单表包含了几十列甚至上百列，管理起来很混乱，每次都select *的话，还占用IO资源。这时候，我们可以将一些<strong>不常用的、数据较大或者长度较长的列</strong>拆分到另外一张表。</p><p>比如一张用户表，它包含user_id、user_name、mobile_no、age、email、nickname、address、user_desc，如果email、address、user_desc等字段不常用，我们可以把它拆分到另外一张表，命名为用户详细信息表。这就是垂直分表</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130931707.png" alt="image-20220705205532089" tabindex="0" loading="lazy"><figcaption>image-20220705205532089</figcaption></figure><h3 id="_3-2-水平拆分" tabindex="-1"><a class="header-anchor" href="#_3-2-水平拆分"><span>3.2 水平拆分</span></a></h3><h4 id="_3-2-1-水平分库" tabindex="-1"><a class="header-anchor" href="#_3-2-1-水平分库"><span>3.2.1 水平分库</span></a></h4><p>水平分库是指，将表的数据量切分到不同的数据库服务器上，每个服务器具有相同的库和表，只是表中的数据集合不一样。它可以有效地缓解单机单库的性能瓶颈和压力。</p><p>用户库的水平拆分架构如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130931744.png" alt="image-20220705205601757" tabindex="0" loading="lazy"><figcaption>image-20220705205601757</figcaption></figure><h4 id="_3-2-2-水平分表" tabindex="-1"><a class="header-anchor" href="#_3-2-2-水平分表"><span>3.2.2 水平分表</span></a></h4><p>如果一个表的数据量太大，可以按照某种规则（如hash取模、range），把数据切分到多张表去。</p><p>一张订单表，按时间range拆分如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130931764.png" alt="image-20220705205623364" tabindex="0" loading="lazy"><figcaption>image-20220705205623364</figcaption></figure><h3 id="_3-3-水平分库分表策略" tabindex="-1"><a class="header-anchor" href="#_3-3-水平分库分表策略"><span>3.3. 水平分库分表策略</span></a></h3><p>分库分表策略一般有几种，使用于不同的场景：</p><ul><li><p>range范围</p></li><li><p>hash取模</p></li><li><p>range+hash取模混合</p></li><li><p>一致性Hash算法</p><p>优点：扩容后无需迁移数据。</p></li><li><p>Snowflake 分片（一般是这样)</p></li></ul><p>​ 优点：扩容后无需迁移数据。</p><h4 id="_3-3-1-range范围" tabindex="-1"><a class="header-anchor" href="#_3-3-1-range范围"><span>3.3.1 range范围</span></a></h4><p>range，即范围策略划分表。比如我们可以将表的主键，按照从<code>0~1000万</code>划分为一个表，<code>1000~2000万</code>划分到另外一个表。如下图：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181452742.png" alt="image-20220705205656048.png" tabindex="0" loading="lazy"><figcaption>image-20220705205656048.png</figcaption></figure><p>当然，有时候我们也可以按时间范围来划分，如不同年月的订单放到不同的表，它也是一种range的划分策略。</p><p><strong>这种方案的优点：</strong></p><ul><li>这种方案有利于扩容，不需要数据迁移。假设数据量增加到5千万，我们只需要水平增加一张表就好啦，之前0~4000万的数据，不需要迁移。</li></ul><p><strong>缺点：</strong></p><ul><li>这种方案会有热点问题，因为订单id是一直在增大的，也就是说最近一段时间都是汇聚在一张表里面的。比如最近一个月的订单都在1000万~2000万之间，平时用户一般都查最近一个月的订单比较多，请求都打到order_1表啦，这就导致<strong>数据热点</strong>问题。</li></ul><h4 id="_3-3-2-hash取模" tabindex="-1"><a class="header-anchor" href="#_3-3-2-hash取模"><span>3.3.2 hash取模</span></a></h4><p>hash取模策略：指定的路由key（一般是user_id、订单id作为key）对分表总数进行取模，把数据分散到各个表中。</p><p>比如原始订单表信息，我们把它分成4张分表：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181452777.png" alt="image-20220705210221066.png" tabindex="0" loading="lazy"><figcaption>image-20220705210221066.png</figcaption></figure><ul><li>比如id=1，对4取模，就会得到1，就把它放到t_order_1;</li><li>id=3，对4取模，就会得到3，就把它放到t_order_3;</li></ul><p><strong>这种方案的优点：</strong></p><ul><li>hash取模的方式，不会存在明显的热点问题。</li></ul><p><strong>缺点：</strong></p><ul><li>如果一开始按照hash取模分成4个表了，未来某个时候，表数据量又到瓶颈了，需要扩容，这就比较棘手了。比如你从4张表，又扩容成8张表，那之前id=5的数据是在（5%4=1，即t_order_1），现在应该放到（5%8=5，即t_order_5），也就是说<strong>历史数据要做迁移了</strong>。</li></ul><h4 id="_3-3-3-range-hash取模混合" tabindex="-1"><a class="header-anchor" href="#_3-3-3-range-hash取模混合"><span>3.3.3 range+hash取模混合</span></a></h4><p>既然range存在热点数据问题，hash取模扩容迁移数据比较困难，我们可以综合两种方案一起嘛，取之之长，弃之之短。</p><p>比较简单的做法就是，在拆分库的时候，我们可以先用<strong>range范围</strong>方案，比如订单id在<code>0~4000</code>万的区间，划分为订单库1;id在<code>4000万~8000万</code>的数据，划分到订单库2,将来要扩容时，id在8000万~1.2亿的数据，划分到订单库3。然后订单库内，再用<strong>hash取模</strong>的策略，把不同订单划分到不同的表。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130931793.png" alt="image-20220705211003966" tabindex="0" loading="lazy"><figcaption>image-20220705211003966</figcaption></figure><h2 id="_4-什么时候才考虑分库分表呢" tabindex="-1"><a class="header-anchor" href="#_4-什么时候才考虑分库分表呢"><span>4. 什么时候才考虑分库分表呢？</span></a></h2><h3 id="_4-1-什么时候分表" tabindex="-1"><a class="header-anchor" href="#_4-1-什么时候分表"><span>4.1 什么时候分表？</span></a></h3><p>如果你的系统处于快速发展时期，如果每天的订单流水都新增几十万，并且，订单表的查询效率明变慢时，就需要规划分库分表了。一般B+树索引高度是2~3层最佳，如果<strong>数据量千万级别</strong>，可能高度就变4层了，数据量就会明显变慢了。不过业界流传，一般500万数据就要<strong>考虑分表</strong>了。</p><h3 id="_4-2-什么时候分库" tabindex="-1"><a class="header-anchor" href="#_4-2-什么时候分库"><span>4.2 什么时候分库</span></a></h3><p>业务发展很快，还是多个服务共享一个单体数据库，数据库成为了性能瓶颈，就需要考虑分库了。比如订单、用户等，都可以抽取出来，新搞个应用（其实就是微服务思想），并且拆分数据库（订单库、用户库）。</p><h2 id="_5-分库分表会导致哪些问题" tabindex="-1"><a class="header-anchor" href="#_5-分库分表会导致哪些问题"><span>5. 分库分表会导致哪些问题</span></a></h2><p>分库分表之后，也会存在一些问题：</p><ul><li>事务问题</li><li>跨库关联</li><li>排序问题</li><li>分页问题</li><li>分布式ID</li></ul><h3 id="_5-1-事务问题" tabindex="-1"><a class="header-anchor" href="#_5-1-事务问题"><span>5.1 事务问题</span></a></h3><p>分库分表后，假设两个表在不同的数据库，那么本地事务已经无效啦，需要使用分布式事务了。</p><h3 id="_5-2-跨库关联" tabindex="-1"><a class="header-anchor" href="#_5-2-跨库关联"><span>5.2 跨库关联</span></a></h3><p>跨节点Join的问题：解决这一问题可以分两次查询实现</p><h3 id="_5-3-排序问题" tabindex="-1"><a class="header-anchor" href="#_5-3-排序问题"><span>5.3 排序问题</span></a></h3><p>跨节点的count,order by,group by以及聚合函数等问题：可以分别在各个节点上得到结果后在应用程序端进行合并。</p><h3 id="_5-4-分页问题" tabindex="-1"><a class="header-anchor" href="#_5-4-分页问题"><span>5.4 分页问题</span></a></h3><ul><li>方案1：在个节点查到对应结果后，在代码端汇聚再分页。</li><li>方案2：把分页交给前端，前端传来pageSize和pageNo，在各个数据库节点都执行分页，然后汇聚总数量前端。这样缺点就是会造成空查，如果分页需要排序，也不好搞。</li></ul><h3 id="_5-5-分布式id" tabindex="-1"><a class="header-anchor" href="#_5-5-分布式id"><span>5.5 分布式ID</span></a></h3><p>数据库被切分后，不能再依赖数据库自身的主键生成机制啦，最简单可以考虑UUID，或者使用雪花算法生成分布式ID。</p><h2 id="_6-分库分表中间件" tabindex="-1"><a class="header-anchor" href="#_6-分库分表中间件"><span>6. 分库分表中间件</span></a></h2><p>目前流行的分库分表中间件比较多：</p><ul><li>cobar</li><li>Mycat</li><li>Sharding-JDBC</li><li>Atlas</li><li>TDDL（淘宝）</li><li>vitess</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181452806.png" alt="image-20220705211813481.png" tabindex="0" loading="lazy"><figcaption>image-20220705211813481.png</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.toutiao.com/article/7085144655066677792/?app=news_article&amp;timestamp=1657009918&amp;use_new_style=1&amp;req_id=202207051631580101580282190F0250BD&amp;group_id=7085144655066677792&amp;wxshare_count=1&amp;tt_from=weixin&amp;utm_source=weixin&amp;utm_medium=toutiao_android&amp;utm_campaign=client_share&amp;share_token=d49c3912-c033-46cd-a340-6146ca8fcb3f&amp;source=m_redirect" target="_blank" rel="noopener noreferrer">我们为什么要分库分表？</a></p>',96)]))}const p=a(r,[["render",l],["__file","mysql-x-sharding-detail.html.vue"]]),h=JSON.parse('{"path":"/posts/Database/MySQL/mysql-x-sharding-detail.html","title":"MySQL - 分表分库详解","lang":"zh-CN","frontmatter":{"aliases":"MySQL - 分表分库详解","tags":null,"cssclass":null,"source":null,"order":311,"category":["Mysql","数据库"],"created":"2024-02-22 10:49","updated":"2024-10-18 14:53","description":"MySQL - 分表分库详解 0. 前言 什么是分库分表 为什么需要分库分表 如何分库分表 什么时候开始考虑分库分表 分库分表会导致哪些问题 分库分表中间件简介 1. 什么是分库分表 分库：就是一个数据库分成多个数据库，部署到不同机器。 image-20220705204426671image-20220705204426671 分表：就是一个数据库表...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/MySQL/mysql-x-sharding-detail.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"MySQL - 分表分库详解"}],["meta",{"property":"og:description","content":"MySQL - 分表分库详解 0. 前言 什么是分库分表 为什么需要分库分表 如何分库分表 什么时候开始考虑分库分表 分库分表会导致哪些问题 分库分表中间件简介 1. 什么是分库分表 分库：就是一个数据库分成多个数据库，部署到不同机器。 image-20220705204426671image-20220705204426671 分表：就是一个数据库表..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130931552.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL - 分表分库详解\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130931552.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130931612.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130931637.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130931677.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181452674.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181452712.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130931707.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130931744.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130931764.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181452742.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181452777.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130931793.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181452806.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"0. 前言","slug":"_0-前言","link":"#_0-前言","children":[]},{"level":2,"title":"1. 什么是分库分表","slug":"_1-什么是分库分表","link":"#_1-什么是分库分表","children":[]},{"level":2,"title":"2. 为什么需要分库分表","slug":"_2-为什么需要分库分表","link":"#_2-为什么需要分库分表","children":[{"level":3,"title":"2.1 为什么需要分库呢？","slug":"_2-1-为什么需要分库呢","link":"#_2-1-为什么需要分库呢","children":[]},{"level":3,"title":"2.2 为什么需要分表？","slug":"_2-2-为什么需要分表","link":"#_2-2-为什么需要分表","children":[]}]},{"level":2,"title":"3. 如何分库分表","slug":"_3-如何分库分表","link":"#_3-如何分库分表","children":[{"level":3,"title":"3.1 垂直拆分","slug":"_3-1-垂直拆分","link":"#_3-1-垂直拆分","children":[]},{"level":3,"title":"3.2 水平拆分","slug":"_3-2-水平拆分","link":"#_3-2-水平拆分","children":[]},{"level":3,"title":"3.3. 水平分库分表策略","slug":"_3-3-水平分库分表策略","link":"#_3-3-水平分库分表策略","children":[]}]},{"level":2,"title":"4. 什么时候才考虑分库分表呢？","slug":"_4-什么时候才考虑分库分表呢","link":"#_4-什么时候才考虑分库分表呢","children":[{"level":3,"title":"4.1 什么时候分表？","slug":"_4-1-什么时候分表","link":"#_4-1-什么时候分表","children":[]},{"level":3,"title":"4.2 什么时候分库","slug":"_4-2-什么时候分库","link":"#_4-2-什么时候分库","children":[]}]},{"level":2,"title":"5. 分库分表会导致哪些问题","slug":"_5-分库分表会导致哪些问题","link":"#_5-分库分表会导致哪些问题","children":[{"level":3,"title":"5.1 事务问题","slug":"_5-1-事务问题","link":"#_5-1-事务问题","children":[]},{"level":3,"title":"5.2 跨库关联","slug":"_5-2-跨库关联","link":"#_5-2-跨库关联","children":[]},{"level":3,"title":"5.3 排序问题","slug":"_5-3-排序问题","link":"#_5-3-排序问题","children":[]},{"level":3,"title":"5.4 分页问题","slug":"_5-4-分页问题","link":"#_5-4-分页问题","children":[]},{"level":3,"title":"5.5 分布式ID","slug":"_5-5-分布式id","link":"#_5-5-分布式id","children":[]}]},{"level":2,"title":"6. 分库分表中间件","slug":"_6-分库分表中间件","link":"#_6-分库分表中间件","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":9.08,"words":2724},"filePathRelative":"posts/Database/MySQL/mysql-x-sharding-detail.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>0. 前言</h2>\\n<ol>\\n<li>什么是分库分表</li>\\n<li>为什么需要分库分表</li>\\n<li>如何分库分表</li>\\n<li>什么时候开始考虑分库分表</li>\\n<li>分库分表会导致哪些问题</li>\\n<li>分库分表中间件简介</li>\\n</ol>\\n<h2>1. 什么是分库分表</h2>\\n<p><strong>分库</strong>：就是一个数据库分成多个数据库，部署到不同机器。</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130931552.png\\" alt=\\"image-20220705204426671\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220705204426671</figcaption></figure>","autoDesc":true}');export{p as comp,h as data};
