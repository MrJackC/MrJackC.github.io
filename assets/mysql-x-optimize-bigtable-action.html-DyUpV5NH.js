import{_ as e,c as i,a,o as s}from"./app-CZJgH_ea.js";const n={};function t(p,l){return s(),i("div",null,l[0]||(l[0]=[a(`<h1 id="大表优化过程" tabindex="-1"><a class="header-anchor" href="#大表优化过程"><span>大表优化过程</span></a></h1><h2 id="_1-场景问题" tabindex="-1"><a class="header-anchor" href="#_1-场景问题"><span>1. 场景问题</span></a></h2><p>有个用户操作记录表6个月的数据量近2000万，保留最近一年的数据量达到4000万，查询速度极慢，日常卡死。严重影响业务</p><h2 id="_2-方案概述" tabindex="-1"><a class="header-anchor" href="#_2-方案概述"><span>2. 方案概述</span></a></h2><ul><li><p>方案一：优化现有mysql数据库</p><p>优点：不影响现有业务，源程序不需要修改代码，成本低</p><p>缺点：有优化瓶颈，数据量过亿就玩不动了</p></li><li><p>方案二：升级数据库类型</p><p>换一种100%兼容mysql的数据库</p><p>优点：不影响现有业务，源程序不需要修改代码，你几乎不需要做任何操作就能提升数据库性能</p><p>缺点：多花钱</p></li><li><p>方案三：一步到位，大数据解决方案，更换newsql/nosql数据库</p><p>优点：扩展性强，成本低，没有数据容量瓶颈</p><p>缺点：需要修改源程序代码</p></li></ul><p>以上三种方案，按顺序使用即可，数据量在亿级别以下的没必要换nosql，开发成本太高。</p><h2 id="_3-方案一-优化现有mysql数据库-重点" tabindex="-1"><a class="header-anchor" href="#_3-方案一-优化现有mysql数据库-重点"><span>3. 方案一：优化现有mysql数据库（重点）</span></a></h2><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结：</span></a></h3><ol><li>数据库设计和表创建时就要考虑性能</li><li>sql的编写需要注意优化</li><li>分区</li><li>分表</li><li>分库</li></ol><h3 id="_3-1-数据库设计和表创建表时就要考虑性能" tabindex="-1"><a class="header-anchor" href="#_3-1-数据库设计和表创建表时就要考虑性能"><span>3.1 数据库设计和表创建表时就要考虑性能</span></a></h3><p>mysql 数据库本身高度灵活，造成性能不足，严重依赖开发人员能力。也就是说开发人员能力高。则mysql 性能高。</p><p><strong>设计表时要注意</strong>：（非空，合适的类型，单表字段不超过20）</p><ol><li>表字段避免null值出现，null 值很难查询优化且占用额外的索引空间。推荐默认数字0代替null。</li><li>尽量使用INT 而非BIGINT，如果非负则加上UNSIGNED (这样数值容量会扩大一倍)，当然能使用TINYINT、SMALLINT、MEDIUM_INT更好。</li><li>使用枚举或整数代替字符串类型</li><li>尽量使用TIMESTAMP 而非 DATETIME</li><li>表单不要有太多字段，建议在20以内</li><li>用整型来存IP</li></ol><p><strong>索引</strong></p><ol><li>索引并不是越多越好，要根据查询有针对性的创建，考虑在where和 order by 命令上涉及的列建立索引，可根据EXPLAIN来查看是否用了索引还是全表扫描</li><li>应尽量避免在where 子句中对字段进行NULL值判断，否则将导致引擎放弃使用索引而进行全表扫描</li><li>值分布很少的字段不适合建索引，例如”性别“这种只有两三个值得字段</li><li>字符字段只建前缀索引</li><li>字符字段不要做主键</li><li>不用外键，由程序保证约束</li><li>尽量不用UNIQUE,由程序保证约束</li><li>使用多列索引时注意顺序和查询条件保持一致，同时删除不必要的单列索引</li></ol><p><strong>简言之就是使用合适的数据类型，选择合适的索引</strong></p><p>原来开发人员跑路，措施无法执行，放弃</p><h3 id="_3-2-sql的编写需要注意的优化" tabindex="-1"><a class="header-anchor" href="#_3-2-sql的编写需要注意的优化"><span>3.2 sql的编写需要注意的优化</span></a></h3><ol><li>使用limit 对数据查询的记录进行限定</li><li>避免select * ，将需要查询的字段列出来</li><li>使用连接（join）来代替子查询</li><li>拆分大的delete或insert语句</li><li>可通过开启慢查询日志来找出慢的SQL</li><li>不做列运算：SELECT id WHERE age+1=10，任何对列的操作都会导致表扫描，它包含数据库教程函数、计算表达式等等，查询时要尽可能将操作移至等号右边</li><li>sql语句尽可能简单：一条sql只能在一个cpu运算，大语句拆小语句，减少锁时间；一条大sql可以堵死整个库</li><li>OR 改写成IN: OR的效率是n级别，IN的效率是log（n）级别，in的个数建议控制在200以内</li><li>不用函数和触发器，在应用程序中实现</li><li>避免%xxx式查询</li><li>少用JOIN</li><li>使用同类型进行比较，比如用’123‘和’123‘比，123 和 123比</li><li>尽量避免在WHERE 子句中使用!= 或&lt;&gt; 操作符，否则将引擎放弃使用索引而进行全表扫描</li><li>对于连续数值，使用BETWEEN 不用 IN: SELECT id FROM t WHERE num BETWEEN I AND 5</li><li>列表数据不要拿全表，要使用LIMIT 来分页，每页数量也不要太大</li></ol><p><strong>引擎</strong></p><p>使用innodb</p><h3 id="_3-3-分区" tabindex="-1"><a class="header-anchor" href="#_3-3-分区"><span>3.3 分区</span></a></h3><p>Mysql在5.1 版本引入的分区是一种简单的水平拆分，用户需要在建表的时候加上分区参数，对应用是透明的无需修改代码</p><p>对用户来说，分区表是一个独立的逻辑表，但是底层由多个物理子表组成，实现分区的代码实际上是通过对一组底层的对象封装，但对SQL层来说是一个完全封装底层的黑盒子。Mysql 实现分区的方式也意味着索引也是按照分区的子表定义，没有全局索引</p><p>用户的SQL 语句是需要针对分区表做优化，SQL条件中带上分区条件的列，从而使查询定位到少量的分区上，否则就会扫描全部分区，可以通过EXPLAIN PARTITIONS来查看某条SQL语句会落在那些分区上，从而进行SQL优化，我测试，查询时不带分区条件的列，也会提高速度，故该措施值得一试。</p><p><strong>分区的好处：</strong></p><ol><li>可以让单表存储更多的数据</li><li>分区表的数据更容易维护，可以通过清楚整个区分批量删除大量数据，也可以增加新的分区来支持新插入的数据。另外，还可以对一个独立分区进行优化，检查，修复等操作</li><li>部门查询能够从查询条件确定只落在少数分区上，速度会很快</li><li>分区表的数据还可以分布在不同的物理设备上，从而高效利用多个硬件设备</li><li>可以使用分区表赖避免某些特殊瓶颈，例如innoDB当索引的互斥访问，ext3文件系统的inode锁竞争</li><li>可以备份和恢复单个分区</li></ol><p><strong>分区的限制和缺点：</strong></p><ol><li>一个表最多只能有1024个分区</li><li>如果分区字段中有主键或者唯一索引的列，那么所有主键列和唯一索引列都必须包含进来</li><li>分区表无法使用外键约束</li><li>NULL值会使分区过滤无效</li><li>所有分区必须使用相同的存储引擎</li></ol><p><strong>分区的类型</strong></p><ol><li>RANGE分区：基于属于一个给定连续区间的列值，把多行分配给分区</li><li>LIST分区：类似于按RANGE分区，区别在于LIST分区是基于列值匹配一个离散值集合中的某个值来进行选择</li><li>HASH分区：基于用户定义的表达式的返回值来进行选择的分区，该表达式使用将要插入到表中的这些行的列值进行计算。这个函数可以包含MySQL中有效的、产生非负整数值的任何表达式</li><li>KEY分区：类似于按HASH分区，区别在于KEY分区只支持计算一列或多列，且MySQL服务器提供其自身的哈希函数。必须有一列或多列包含整数值</li></ol><p>我首先根据月份把上网记录表RANGE分区了12份，查询效率提高6倍左右，效果不明显，故：换id为HASH分区，分了64个分区，查询速度提升显著。问题解决!</p><p>结果如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>PARTITION BY HASH (id)PARTITIONS 64</span></span></code></pre></div><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>select count() from readroom_website; --11901336行记录  </span></span>
<span class="line"><span>/ 受影响行数: 0 已找到记录: 1 警告: 0 持续时间 1 查询: 5.734 sec. /  </span></span>
<span class="line"><span>select * from readroom_website where month(accesstime) =11 limit 10;  </span></span>
<span class="line"><span>/ 受影响行数: 0 已找到记录: 10 警告: 0 持续时间 1 查询: 0.719 sec. */</span></span></code></pre></div><h3 id="_3-4-分表" tabindex="-1"><a class="header-anchor" href="#_3-4-分表"><span>3.4 分表</span></a></h3><p>分表就是把一张大表，按照如上过程都优化了，还是查询卡死，那就把这个表分成多张表，把一次查询分成多次查询，然后把结果组合返回给用户。</p><p>分表分为垂直拆分和水平拆分，通常以某个字段做拆分项。比如以id字段拆分为100张表：表名为tableName_id%100</p><p>但：分表需要修改源程序代码，会给开发带来大量工作，极大的增加了开发成本。故：只适合在开发初级就考虑到了大量数据存在，做好了分表处理，不合适应用上线了在做修改，成本太高！不建议采用</p><h3 id="_3-5-分库" tabindex="-1"><a class="header-anchor" href="#_3-5-分库"><span>3.5 分库</span></a></h3><p>把一个数据库分成多个，建议做个读写分离就行了，真正的做分库也会带来大量的开发成本，得不偿失！不推荐使用</p><h2 id="_4-方案二-升级数据库-换一个100-兼容mysql的数据库" tabindex="-1"><a class="header-anchor" href="#_4-方案二-升级数据库-换一个100-兼容mysql的数据库"><span>4. 方案二：升级数据库，换一个100%兼容mysql的数据库</span></a></h2><p>mysql性能不行，那就换个。为保证源程序代码不修改，保证现有业务平稳迁移，故需要换一个100%兼容mysql的数据库。</p><p><strong>开源选择</strong></p><ol><li>tiDB <a href="https://github.com/pingcap/tidb" target="_blank" rel="noopener noreferrer">https://github.com/pingcap/tidb</a></li><li>Cubrid <a href="https://www.cubrid.org/" target="_blank" rel="noopener noreferrer">https://www.cubrid.org/</a></li><li>开源数据库会带来大量的运维成本且其工业品质和MySQL尚有差距，有很多坑要踩，如果你公司要求必须自建数据库，那么选择该类型产品。</li></ol><p><strong>云数据库</strong></p><ol><li>阿里云POLARDB</li><li><a href="https://www.aliyun.com/product/polardb?spm=a2c4g.11174283.cloudEssentials.47.7a984b5cS7h4wH" target="_blank" rel="noopener noreferrer">https://www.aliyun.com/product/polardb?spm=a2c4g.11174283.cloudEssentials.47.7a984b5cS7h4wH</a></li></ol><p>官方介绍语：POLARDB 是阿里云自研的下一代关系型分布式云原生数据库，100%兼容MySQL，存储容量<strong>可达 100T，性能</strong>提升至 MySQL 的 6 倍。POLARDB 既融合了商业数据库稳定、可靠、高性能的特征，又具有开源数据库简单、可扩展、持续迭代的优势，而成本只需商用数据库的 1/10。</p><h2 id="_5-方案三详细说明-去掉mysql-换大数据引擎处理数据" tabindex="-1"><a class="header-anchor" href="#_5-方案三详细说明-去掉mysql-换大数据引擎处理数据"><span>5. 方案三详细说明：去掉mysql，换大数据引擎处理数据</span></a></h2><p>数据量过亿了，没得选了，只能上大数据了。</p><p><strong>开源解决方案</strong></p><p>hadoop家族。hbase/hive怼上就是了。但是有很高的运维成本，一般公司是玩不起的，没十万投入是不会有很好的产出的!</p><p><strong>云解决方案</strong></p><p>这个就比较多了，也是一种未来趋势，大数据由专业的公司提供专业的服务，小公司或个人购买服务，大数据就像水/电等公共设施一样，存在于社会的方方面面。</p><p>国内做的比较好的当属阿里云。</p><p>我选择了阿里云的MaxCompute配合DataWorks，使用超级舒服，按量付费，成本极低。</p><p>MaxCompute可以理解为开源的Hive，提供sql/mapreduce/ai算法/python脚本/shell脚本等方式操作数据，数据以表格的形式展现，以分布式方式存储，采用定时任务和批处理的方式处理数据。DataWorks提供了一种工作流的方式管理你的数据处理任务和调度监控。</p><p>当然你也可以选择阿里云hbase等其他产品，我这里主要是离线处理，故选择MaxCompute，基本都是图形界面操作，大概写了300行sql，费用不超过100块钱就解决了数据处理问题。</p><h2 id="面试真题" tabindex="-1"><a class="header-anchor" href="#面试真题"><span>面试真题</span></a></h2><p>数据库都有哪些优化方式</p><blockquote><ul><li>设计表时：合适的索引、合适的数据类型、非空，单表字段不超过20</li><li>编写sql时：禁止一切会影响sql速度的语句</li><li>分表：水平拆分和垂直拆分</li><li>分库：读写分离</li></ul></blockquote><p>你做过的具体优化：</p><blockquote><p>之前有个记录用户操作的日志表，有4000万条数据，我们要对数据进行相关统计的时候都非常慢。</p><p>当时我们</p><ol><li>检查了索引是否合理（对操作动作和操作人加了索引）</li><li>对所有NULL字段设置默认值</li><li>当时还有一些sql写的很不规范 <ol><li>select 把所有字段都列出来了，而不是需要查询的字段</li><li>把OR 改成了IN (OR的效率是n级别，IN的效率是log（n）级别)</li><li>WHERE 子句中使用!= ，导致了放弃了索引进行了全表扫描</li><li>使用like 语句的时候，以%开头，导致全表扫描</li></ol></li><li>当时也想过进行分表，不过单表字段其实不多，且需要改代码。就没做了</li></ol></blockquote><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://database.51cto.com/art/201902/592522.htm" target="_blank" rel="noopener noreferrer">记录一次MySQL两千万数据的大表优化解决过程，提供三种解决方案</a></p><p><a href="https://zhuanlan.zhihu.com/p/48385127" target="_blank" rel="noopener noreferrer">这大概是最全的sql优化方案了</a></p>`,66)]))}const o=e(n,[["render",t],["__file","mysql-x-optimize-bigtable-action.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/MySQL/mysql-x-optimize-bigtable-action.html","title":"大表优化过程","lang":"zh-CN","frontmatter":{"aliases":"大表优化过程","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 08:52","description":"大表优化过程 1. 场景问题 有个用户操作记录表6个月的数据量近2000万，保留最近一年的数据量达到4000万，查询速度极慢，日常卡死。严重影响业务 2. 方案概述 方案一：优化现有mysql数据库 优点：不影响现有业务，源程序不需要修改代码，成本低 缺点：有优化瓶颈，数据量过亿就玩不动了 方案二：升级数据库类型 换一种100%兼容mysql的数据库 ...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MySQL/mysql-x-optimize-bigtable-action.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"大表优化过程"}],["meta",{"property":"og:description","content":"大表优化过程 1. 场景问题 有个用户操作记录表6个月的数据量近2000万，保留最近一年的数据量达到4000万，查询速度极慢，日常卡死。严重影响业务 2. 方案概述 方案一：优化现有mysql数据库 优点：不影响现有业务，源程序不需要修改代码，成本低 缺点：有优化瓶颈，数据量过亿就玩不动了 方案二：升级数据库类型 换一种100%兼容mysql的数据库 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"大表优化过程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 场景问题","slug":"_1-场景问题","link":"#_1-场景问题","children":[]},{"level":2,"title":"2. 方案概述","slug":"_2-方案概述","link":"#_2-方案概述","children":[]},{"level":2,"title":"3. 方案一：优化现有mysql数据库（重点）","slug":"_3-方案一-优化现有mysql数据库-重点","link":"#_3-方案一-优化现有mysql数据库-重点","children":[{"level":3,"title":"总结：","slug":"总结","link":"#总结","children":[]},{"level":3,"title":"3.1 数据库设计和表创建表时就要考虑性能","slug":"_3-1-数据库设计和表创建表时就要考虑性能","link":"#_3-1-数据库设计和表创建表时就要考虑性能","children":[]},{"level":3,"title":"3.2 sql的编写需要注意的优化","slug":"_3-2-sql的编写需要注意的优化","link":"#_3-2-sql的编写需要注意的优化","children":[]},{"level":3,"title":"3.3 分区","slug":"_3-3-分区","link":"#_3-3-分区","children":[]},{"level":3,"title":"3.4 分表","slug":"_3-4-分表","link":"#_3-4-分表","children":[]},{"level":3,"title":"3.5 分库","slug":"_3-5-分库","link":"#_3-5-分库","children":[]}]},{"level":2,"title":"4. 方案二：升级数据库，换一个100%兼容mysql的数据库","slug":"_4-方案二-升级数据库-换一个100-兼容mysql的数据库","link":"#_4-方案二-升级数据库-换一个100-兼容mysql的数据库","children":[]},{"level":2,"title":"5. 方案三详细说明：去掉mysql，换大数据引擎处理数据","slug":"_5-方案三详细说明-去掉mysql-换大数据引擎处理数据","link":"#_5-方案三详细说明-去掉mysql-换大数据引擎处理数据","children":[]},{"level":2,"title":"面试真题","slug":"面试真题","link":"#面试真题","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":10.75,"words":3224},"filePathRelative":"posts/Database/MySQL/mysql-x-optimize-bigtable-action.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 场景问题</h2>\\n<p>有个用户操作记录表6个月的数据量近2000万，保留最近一年的数据量达到4000万，查询速度极慢，日常卡死。严重影响业务</p>\\n<h2>2. 方案概述</h2>\\n<ul>\\n<li>\\n<p>方案一：优化现有mysql数据库</p>\\n<p>优点：不影响现有业务，源程序不需要修改代码，成本低</p>\\n<p>缺点：有优化瓶颈，数据量过亿就玩不动了</p>\\n</li>\\n<li>\\n<p>方案二：升级数据库类型</p>\\n<p>换一种100%兼容mysql的数据库</p>\\n<p>优点：不影响现有业务，源程序不需要修改代码，你几乎不需要做任何操作就能提升数据库性能</p>\\n<p>缺点：多花钱</p>\\n</li>\\n<li>\\n<p>方案三：一步到位，大数据解决方案，更换newsql/nosql数据库</p>\\n<p>优点：扩展性强，成本低，没有数据容量瓶颈</p>\\n<p>缺点：需要修改源程序代码</p>\\n</li>\\n</ul>","autoDesc":true}');export{o as comp,c as data};
