import{_ as i,c as l,a as s,o as r}from"./app-CpAF2rca.js";const d={};function t(a,e){return r(),l("div",null,e[0]||(e[0]=[s('<h1 id="redis面试-redis问题总结" tabindex="-1"><a class="header-anchor" href="#redis面试-redis问题总结"><span>Redis面试 - redis问题总结</span></a></h1><blockquote><p>Redis 面试会有哪些问题呢？或者学完整个体系，如何去用问题测试自己的理解呢？</p></blockquote><h2 id="_1-常规问题" tabindex="-1"><a class="header-anchor" href="#_1-常规问题"><span>1. 常规问题</span></a></h2><ul><li>什么是redis，为什么要使用它</li><li>redis一般有哪些使用场景</li><li>redis为什么快</li></ul><h2 id="_2-数据类型和数据结构" tabindex="-1"><a class="header-anchor" href="#_2-数据类型和数据结构"><span>2. 数据类型和数据结构</span></a></h2><ul><li>redis有哪些数据类型</li><li>redis数据类型有哪些命令</li><li>谈谈redis的对象机制（redisObject)</li><li>redis数据类型有哪些底层数据结构</li><li>为什么要设计sds？</li><li>一个字符串类型的值能存储最大容量是多少？512M</li><li>为什么会设计Stream</li><li>Stream用在什么样场景</li><li>消息ID的设计是否考虑了时间回拨的问题</li></ul><h2 id="_3-持久化和内存" tabindex="-1"><a class="header-anchor" href="#_3-持久化和内存"><span>3. 持久化和内存</span></a></h2><ul><li><p>Redis 的持久化机制是什么？各自的优缺点？一般怎么用？</p></li><li><p>Redis 过期键的删除策略有哪些</p></li><li><p>Redis 内存淘汰算法有哪些</p></li><li><p>Redis的内存用完了会发生什么？ 如果达到设置的上限，Redis的写命令会返回错误信息（但是读命令还可以正常返回。）或者你可以配置内存淘汰机制，当Redis达到内存上限时会冲刷掉旧的内容。</p></li><li><p>Redis如何做内存优化？</p></li><li><p>Redis key 的过期时间和永久有效分别怎么设置？</p><p>EXPIRE 和 PERSIST 命令</p></li><li><p>Redis 中的管道有什么用？</p><p>一次请求/响应服务器能实现处理新的请求即使旧的请求还未被响应，这样就可以将多个命令发送到服务器，而不用等待回复，最后在一个步骤中读取该答复。</p><p>这就是管道（pipelining），是一种几十年来广泛使用的技术。例如许多 POP3 协议已经实现支持这个功能，大大加快了从服务器下载新邮件的过程。</p></li></ul><h2 id="_4-事务" tabindex="-1"><a class="header-anchor" href="#_4-事务"><span>4. 事务</span></a></h2><ul><li>什么是redis事务</li><li>Redis事务相关命令</li><li>Redis事务的三个阶段</li><li>watch是如何监视实现的呢</li><li>为什么 Redis 不支持回滚</li><li>redis 对 ACID的支持性理解</li><li>Redis事务其他实现</li></ul><p>基于Lua脚本，Redis可以保证脚本内的命令一次性、按顺序地执行，其同时也不提供事务运行错误的回滚，执行过程中如果部分命令运行错误，剩下的命令还是会继续运行完</p><p>基于中间标记变量，通过另外的标记变量来标识事务是否执行完成，读取数据时先读取该标记变量判断是否事务执行完成。但这样会需要额外写代码实现，比较繁琐</p><h2 id="_5-集群" tabindex="-1"><a class="header-anchor" href="#_5-集群"><span>5. 集群</span></a></h2><h3 id="_5-1-主从复制" tabindex="-1"><a class="header-anchor" href="#_5-1-主从复制"><span>5.1 主从复制</span></a></h3><ul><li>Redis集群的主从复制模型是怎样的？</li><li>全量复制的三个阶段？</li><li>为什么会设计增量复制？</li><li>增量复制的流程？ 如果在网络断开期间，repl_backlog_size环形缓冲区写满之后，从库是会丢失掉那部分被覆盖掉的数据，还是直接进行全量复制呢？</li><li>为什么不持久化的主服务器自动重启非常危险呢?</li><li>为什么主从全量复制使用RDB而不使用AOF？</li><li>为什么还有无磁盘复制模式？</li><li>为什么还会有从库的从库的设计？</li></ul><h3 id="_5-2-哨兵机制" tabindex="-1"><a class="header-anchor" href="#_5-2-哨兵机制"><span>5.2 哨兵机制</span></a></h3><ul><li>Redis哨兵机制？哨兵实现了什么功能呢</li><li>哨兵集群是通过什么方式组建的？</li><li>哨兵是如何监控Redis集群的？</li><li>哨兵如何判断主库已经下线了呢？</li><li>哨兵的选举机制是什么样的？</li><li>Redis 1主4从，5个哨兵，哨兵配置quorum为2，如果3个哨兵故障，当主库宕机时，哨兵能否判断主库“客观下线”？能否自动切换？</li><li>主库判定客观下线了，那么如何从剩余的从库中选择一个新的主库呢？</li><li>新的主库选择出来后，如何进行故障的转移？</li></ul><h3 id="_5-3-redis集群" tabindex="-1"><a class="header-anchor" href="#_5-3-redis集群"><span>5.3 Redis集群</span></a></h3><ul><li>说说Redis哈希槽的概念？为什么是16384个？</li><li>Redis集群会有写操作丢失吗？为什么？</li></ul><p>Redis并不能保证数据的强一致性，这意味这在实际中集群在特定的条件下可能会丢失写操作。</p><h2 id="_6-应用场景" tabindex="-1"><a class="header-anchor" href="#_6-应用场景"><span>6. 应用场景</span></a></h2><ul><li><p>redis 客户端有哪些</p><p>Redisson、Jedis、lettuce等等，官方推荐使用Redisson。</p><p>Redisson是一个高级的分布式协调Redis客户端，能帮助用户在分布式环境中轻松实现一些Java的对象 (Bloom filter, BitSet, Set, SetMultimap, ScoredSortedSet, SortedSet, Map, ConcurrentMap, List, ListMultimap, Queue, BlockingQueue, Deque, BlockingDeque, Semaphore, Lock, ReadWriteLock, AtomicLong, CountDownLatch, Publish / Subscribe, HyperLogLog)。</p></li><li><p>Redis如何做大量数据插入？ Redis2.6开始redis-cli支持一种新的被称之为pipe mode的新模式用于执行大量数据插入工作。</p></li><li><p>redis实现分布式锁实现? 什么是 RedLock?</p></li><li><p>redis缓存有哪些问题，如何解决</p></li><li><p>redis和其它数据库一致性问题如何解决</p></li><li><p>redis性能问题有哪些，如何分析定位解决</p></li></ul><h2 id="_7-新版本" tabindex="-1"><a class="header-anchor" href="#_7-新版本"><span>7. 新版本</span></a></h2><ul><li><p>Redis单线程模型？ 在6.0之前如何提高多核CPU的利用率？</p><p>可以在同一个服务器部署多个Redis的实例，并把他们当作不同的服务器来使用，在某些时候，无论如何一个服务器是不够的， 所以，如果你想使用多个CPU，你可以考虑一下分片（shard）。</p></li><li><p>6.0版本中多线程</p></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/db/nosql-redis/db-redis-z-mianshi.html" target="_blank" rel="noopener noreferrer"><strong>Redis面试 - redis问题总结</strong></a></p>',26)]))}const p=i(d,[["render",t],["__file","redis-z-interview-overview.html.vue"]]),o=JSON.parse('{"path":"/posts/Redis/redis-z-interview-overview.html","title":"Redis面试 - redis问题总结","lang":"zh-CN","frontmatter":{"aliases":"Redis面试 - redis问题总结","tags":null,"cssclass":null,"source":null,"order":1010,"category":["数据库","Redis"],"created":"2024-02-22 10:49","updated":"2024-03-13 10:30","description":"Redis面试 - redis问题总结 Redis 面试会有哪些问题呢？或者学完整个体系，如何去用问题测试自己的理解呢？ 1. 常规问题 什么是redis，为什么要使用它 redis一般有哪些使用场景 redis为什么快 2. 数据类型和数据结构 redis有哪些数据类型 redis数据类型有哪些命令 谈谈redis的对象机制（redisObject)...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Redis/redis-z-interview-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis面试 - redis问题总结"}],["meta",{"property":"og:description","content":"Redis面试 - redis问题总结 Redis 面试会有哪些问题呢？或者学完整个体系，如何去用问题测试自己的理解呢？ 1. 常规问题 什么是redis，为什么要使用它 redis一般有哪些使用场景 redis为什么快 2. 数据类型和数据结构 redis有哪些数据类型 redis数据类型有哪些命令 谈谈redis的对象机制（redisObject)..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis面试 - redis问题总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 常规问题","slug":"_1-常规问题","link":"#_1-常规问题","children":[]},{"level":2,"title":"2. 数据类型和数据结构","slug":"_2-数据类型和数据结构","link":"#_2-数据类型和数据结构","children":[]},{"level":2,"title":"3. 持久化和内存","slug":"_3-持久化和内存","link":"#_3-持久化和内存","children":[]},{"level":2,"title":"4. 事务","slug":"_4-事务","link":"#_4-事务","children":[]},{"level":2,"title":"5. 集群","slug":"_5-集群","link":"#_5-集群","children":[{"level":3,"title":"5.1 主从复制","slug":"_5-1-主从复制","link":"#_5-1-主从复制","children":[]},{"level":3,"title":"5.2 哨兵机制","slug":"_5-2-哨兵机制","link":"#_5-2-哨兵机制","children":[]},{"level":3,"title":"5.3 Redis集群","slug":"_5-3-redis集群","link":"#_5-3-redis集群","children":[]}]},{"level":2,"title":"6. 应用场景","slug":"_6-应用场景","link":"#_6-应用场景","children":[]},{"level":2,"title":"7. 新版本","slug":"_7-新版本","link":"#_7-新版本","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.66,"words":1397},"filePathRelative":"posts/Redis/redis-z-interview-overview.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>Redis 面试会有哪些问题呢？或者学完整个体系，如何去用问题测试自己的理解呢？</p>\\n</blockquote>\\n<h2>1. 常规问题</h2>\\n<ul>\\n<li>什么是redis，为什么要使用它</li>\\n<li>redis一般有哪些使用场景</li>\\n<li>redis为什么快</li>\\n</ul>\\n<h2>2. 数据类型和数据结构</h2>\\n<ul>\\n<li>redis有哪些数据类型</li>\\n<li>redis数据类型有哪些命令</li>\\n<li>谈谈redis的对象机制（redisObject)</li>\\n<li>redis数据类型有哪些底层数据结构</li>\\n<li>为什么要设计sds？</li>\\n<li>一个字符串类型的值能存储最大容量是多少？512M</li>\\n<li>为什么会设计Stream</li>\\n<li>Stream用在什么样场景</li>\\n<li>消息ID的设计是否考虑了时间回拨的问题</li>\\n</ul>","autoDesc":true}');export{p as comp,o as data};
