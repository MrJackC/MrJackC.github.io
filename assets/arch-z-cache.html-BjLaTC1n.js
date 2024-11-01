import{_ as i,c as a,a as s,o as l}from"./app-tJW29Kmg.js";const t={};function c(n,e){return l(),a("div",null,e[0]||(e[0]=[s('<h1 id="分布式系统-分布式缓存及方案实现" tabindex="-1"><a class="header-anchor" href="#分布式系统-分布式缓存及方案实现"><span>分布式系统-分布式缓存及方案实现</span></a></h1><blockquote><p>TODO 待完善中</p></blockquote><h2 id="_1-本地缓存和分布式缓存" tabindex="-1"><a class="header-anchor" href="#_1-本地缓存和分布式缓存"><span>1. 本地缓存和分布式缓存</span></a></h2><ul><li><strong>本地缓存</strong>：指的是在应用中的缓存组件，其最大的优点是应用和cache是在同一个进程内部，请求缓存非常快速，没有过多的网络开销等，在单应用不需要集群支持或者集群情况下各节点无需互相通知的场景下使用本地缓存较合适；同时，它的缺点也是因为缓存跟应用程序耦合，<strong>多个应用程序无法直接的共享缓存</strong>，各应用或集群的各节点都需要维护自己的单独缓存，对内存是一种浪费。</li><li><strong>分布式缓存</strong>：指的是与应用分离的缓存组件或服务，其最大的优点是自身就是一个独立的应用，与本地应用隔离，多个应用可直接的共享缓存。</li></ul><p>目前各种类型的缓存都活跃在成千上万的应用服务中，还没有一种缓存方案可以解决一切的业务场景或数据类型，我们需要根据自身的特殊场景和背景，选择最适合的缓存方案。缓存的使用是程序员、架构师的必备技能，好的程序员能根据数据类型、业务场景来准确判断使用何种类型的缓存，如何使用这种缓存，以最小的成本最快的效率达到最优的目的。</p><h2 id="_2-分布式缓存的实现方案" tabindex="-1"><a class="header-anchor" href="#_2-分布式缓存的实现方案"><span>2. 分布式缓存的实现方案</span></a></h2><h3 id="_2-1-redis缓存" tabindex="-1"><a class="header-anchor" href="#_2-1-redis缓存"><span>2.1 Redis缓存</span></a></h3><blockquote><p>Redis是一款内存高速缓存数据库。Redis全称为：<strong>Remote Dictionary Server</strong>（远程数据服务），使用C语言编写，Redis是一个key-value存储系统（键值存储系统），支持丰富的数据类型，如：String、list、set、zset、hash。</p></blockquote><p>Redis是一种支持key-value等多种数据结构的存储系统。可用于缓存，事件发布或订阅，高速队列等场景。支持网络，提供字符串，哈希，列表，队列，集合结构直接存取，基于内存，可持久化。同时性能强劲，具有复制特性以及解决问题而生的独一无二的数据模型。它可以存储键值对与5种不同类型的值之间的映射，可以将存储在内存的键值对数据持久化到硬盘，可以使用复制特性来扩展读性能，还可以使用客户端分片来扩展写性能。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300959028.png" alt="image-20220621192129955" tabindex="0" loading="lazy"><figcaption>image-20220621192129955</figcaption></figure><p>Redis内部使用一个redisObject对象来标识所有的key和value数据，redisObject最主要的信息如图所示：type代表一个value对象具体是何种数据类型，encoding是不同数据类型在Redis内部的存储方式，比如——type=string代表value存储的是一个普通字符串，那么对应的encoding可以是raw或是int，如果是int则代表世界Redis内部是按数值类型存储和表示这个字符串。</p><ul><li><p>编码方式</p><p>左边的raw列为对象的编码方式：字符串可以被编码为raw（一般字符串）或Rint（为了节约内存，Redis会将字符串表示的64位有符号整数编码为整数来进行储存）；列表可以被编码为ziplist或linkedlist，ziplist是为节约大小较小的列表空间而作的特殊表示；集合可以被编码为intset或者hashtable，intset是只储存数字的小集合的特殊表示；hash表可以编码为zipmap或者hashtable，zipmap是小hash表的特殊表示；有序集合可以被编码为ziplist或者skiplist格式，ziplist用于表示小的有序集合，而skiplist则用于表示任何大小的有序集合。</p></li><li><p>网络I/O模型</p><p>从网络I/O模型上看，Redis使用单线程的I/O复用模型，自己封装了一个简单的AeEvent事件处理框架，主要实现了epoll、kqueue和select。对于单纯只有I/O操作来说，单线程可以将速度优势发挥到最大，但是Redis也提供了一些简单的计算功能，比如排序、聚合等，对于这些操作，单线程模型实际会严重影响整体吞吐量，CPU计算过程中，整个I/O调度都是被阻塞住的，在这些特殊场景的使用中，需要额外的考虑。相较于memcached的预分配内存管理，Redis使用现场申请内存的方式来存储数据，并且很少使用free-list等方式来优化内存分配，会在一定程度上存在内存碎片。Redis跟据存储命令参数，会把带过期时间的数据单独存放在一起，并把它们称为临时数据，非临时数据是永远不会被剔除的，即便物理内存不够，导致swap也不会剔除任何非临时数据（但会尝试剔除部分临时数据）。</p></li><li><p>redis持久化</p><p>我们描述Redis为内存数据库，作为缓存服务，大量使用内存间的数据快速读写，支持高并发大吞吐；而作为数据库，则是指Redis对缓存的持久化支持。Redis由于支持了非常丰富的内存数据库结构类型，如何把这些复杂的内存组织方式持久化到磁盘上? Redis的持久化与传统数据库的方式差异较大，Redis一共支持四种持久化方式，主要使用的两种：</p><ul><li><p><strong>定时快照方式(snapshot)</strong>：该持久化方式实际是在Redis内部一个定时器事件，每隔固定时间去检查当前数据发生的改变次数与时间是否满足配置的持久化触发的条件，如果满足则通过操作系统fork调用来创建出一个子进程，这个子进程默认会与父进程共享相同的地址空间，这时就可以通过子进程来遍历整个内存来进行存储操作，而主进程则仍然可以提供服务，当有写入时由操作系统按照内存页（page）为单位来进行copy-on-write保证父子进程之间不会互相影响。它的缺点是快照只是代表一段时间内的内存映像，所以系统重启会丢失上次快照与重启之间所有的数据。</p></li><li><p><strong>基于语句追加文件的方式(aof)</strong>：aof方式实际类似MySQl的基于语句的binlog方式，即每条会使Redis内存数据发生改变的命令都会追加到一个log文件中，也就是说这个log文件就是Redis的持久化数据。 aof的方式的主要缺点是追加log文件可能导致体积过大，当系统重启恢复数据时如果是aof的方式则加载数据会非常慢，几十G的数据可能需要几小时才能加载完，当然这个耗时并不是因为磁盘文件读取速度慢，而是由于读取的所有命令都要在内存中执行一遍。另外由于每条命令都要写log，所以使用aof的方式，Redis的读写性能也会有所下降。</p><p>Redis的持久化使用了Buffer I/O，所谓Buffer I/O是指Redis对持久化文件的写入和读取操作都会使用物理内存的Page Cache，而大多数数据库系统会使用Direct I/O来绕过这层Page Cache并自行维护一个数据的Cache。而当Redis的持久化文件过大（尤其是快照文件），并对其进行读写时，磁盘文件中的数据都会被加载到物理内存中作为操作系统对该文件的一层Cache，而这层Cache的数据与Redis内存中管理的数据实际是重复存储的。虽然内核在物理内存紧张时会做Page Cache的剔除工作，但内核很可能认为某块Page Cache更重要，而让你的进程开始Swap，这时你的系统就会开始出现不稳定或者崩溃了，因此在持久化配置后，针对内存使用需要实时监控观察。</p></li></ul></li></ul><h4 id="_2-2-1-redis分布式存储方案" tabindex="-1"><a class="header-anchor" href="#_2-2-1-redis分布式存储方案"><span>2.2.1 Redis分布式存储方案</span></a></h4><p>与memcached客户端支持分布式方案不同，Redis更倾向于在服务端构建分布式存储，如图</p><p><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301001567.png" alt="image-20220621192129955" loading="lazy"><br> Redis分布式集群图1</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301001012.png" alt="image-20220621193334604" tabindex="0" loading="lazy"><figcaption>image-20220621193334604</figcaption></figure><p>Redis分布式集群图2</p><p>Redis Cluster是一个实现了分布式且允许单点故障的Redis高级版本，它<strong>没有中心节点，具有线性可伸缩的功能</strong>。如图2，其中节点与节点之间通过二进制协议进行通信，节点与客户端之间通过ascii协议进行通信。在数据的放置策略上，Redis Cluster将整个key的数值域分成2的14次方16384个hash槽，每个节点上可以存储一个或多个hash槽，也就是说当前Redis Cluster支持的最大节点数就是16384。Redis Cluster使用的分布式算法也很简单：<code>crc16( key ) % HASH_SLOTS_NUMBER</code>。整体设计可总结为：</p><ul><li>数据hash分布在不同的Redis节点实例上；</li><li>M/S（主/从）的切换采用Sentinel；</li><li>写：只会写master Instance，从sentinel获取当前的master Instance；</li><li>读：从Redis Node中基于权重选取一个Redis Instance读取，失败/超时则轮询其他Instance；Redis本身就很好的支持读写分离，在单进程的I/O场景下，可以有效的避免主库的阻塞风险；</li></ul><p>通过RPC服务访问，RPC server端封装了Redis客户端，客户端基于Jedis开发。 可以看到，通过集群+主从结合的设计，Redis在扩展和稳定高可用性能方面都是比较成熟的。但是，在数据一致性问题上，Redis没有提供CAS操作命令来保障高并发场景下的数据一致性问题，不过它却提供了事务的功能，Redis的Transactions提供的并不是严格的ACID的事务（比如一串用EXEC提交执行的命令，在执行中服务器宕机，那么会有一部分命令执行了，剩下的没执行）。但是这个Transactions还是提供了基本的命令打包执行的功能（在服务器不出问题的情况下，可以保证一连串的命令是顺序在一起执行的，中间有会有其它客户端命令插进来执行）。Redis还提供了一个Watch功能，你可以对一个key进行Watch，然后再执行Transactions，在这过程中，如果这个Watched的值进行了修改，那么这个Transactions会发现并拒绝执行。</p><h4 id="_2-2-2-失效策略" tabindex="-1"><a class="header-anchor" href="#_2-2-2-失效策略"><span>2.2.2 失效策略</span></a></h4><p>在失效策略上，Redis支持6种的数据淘汰策略：</p><ul><li>volatile-lru：从已设置过期时间的数据集（server.db[i].expires）中挑选最近最少使用的数据淘汰；</li><li>volatile-ttl：从已设置过期时间的数据集（server.db[i].expires）中挑选将要过期的数据淘汰；</li><li>volatile-random：从已设置过期时间的数据集（server.db[i].expires）中任意选择数据淘汰 ；</li><li>allkeys-lru：从数据集（server.db[i].dict）中挑选最近最少使用的数据淘汰；</li><li>allkeys-random：从数据集（server.db[i].dict）中任意选择数据淘汰；</li><li>no-enviction（驱逐）：禁止驱逐数据。</li></ul><h4 id="_2-2-3-redis应用场景" tabindex="-1"><a class="header-anchor" href="#_2-2-3-redis应用场景"><span>2.2.3 redis应用场景</span></a></h4><ul><li><strong>在主页中显示最新的项目列表</strong>：Redis使用的是常驻内存的缓存，速度非常快。LPUSH用来插入一个内容ID，作为关键字存储在列表头部。LTRIM用来限制列表中的项目数最多为5000。如果用户需要的检索的数据量超越这个缓存容量，这时才需要把请求发送到数据库。</li><li><strong>删除和过滤</strong>：如果一篇文章被删除，可以使用LREM从缓存中彻底清除掉。</li><li><strong>排行榜及相关问题</strong>：排行榜（leader board）按照得分进行排序。ZADD命令可以直接实现这个功能，而ZREVRANGE命令可以用来按照得分来获取前100名的用户，ZRANK可以用来获取用户排名，非常直接而且操作容易。</li><li><strong>按照用户投票和时间排序</strong>：排行榜，得分会随着时间变化。LPUSH和LTRIM命令结合运用，把文章添加到一个列表中。一项后台任务用来获取列表，并重新计算列表的排序，ZADD命令用来按照新的顺序填充生成列表。列表可以实现非常快速的检索，即使是负载很重的站点。</li><li><strong>过期项目处理</strong>：使用Unix时间作为关键字，用来保持列表能够按时间排序。对current_time和time_to_live进行检索，完成查找过期项目的艰巨任务。另一项后台任务使用ZRANGE…WITHSCORES进行查询，删除过期的条目。</li><li><strong>计数</strong>：进行各种数据统计的用途是非常广泛的，比如想知道什么时候封锁一个IP地址。INCRBY命令让这些变得很容易，通过原子递增保持计数；GETSET用来重置计数器；过期属性用来确认一个关键字什么时候应该删除。</li><li><strong>特定时间内的特定项目</strong>：这是特定访问者的问题，可以通过给每次页面浏览使用SADD命令来解决。SADD不会将已经存在的成员添加到一个集合。</li><li><strong>Pub/Sub</strong>：在更新中保持用户对数据的映射是系统中的一个普遍任务。Redis的pub/sub功能使用了SUBSCRIBE、UNSUBSCRIBE和PUBLISH命令，让这个变得更加容易。</li><li><strong>队列</strong>：在当前的编程中队列随处可见。除了push和pop类型的命令之外，Redis还有阻塞队列的命令，能够让一个程序在执行时被另一个程序添加到队列。 实际工程中，对于缓存的应用可以有多种的实战方式，包括侵入式硬编码，抽象服务化应用，以及轻量的注解式使用等。本文将主要介绍下注解式方式。</li></ul><h3 id="_2-2-memcached缓存" tabindex="-1"><a class="header-anchor" href="#_2-2-memcached缓存"><span>2.2 memcached缓存</span></a></h3><p>memcached是应用较广的开源分布式缓存产品之一，它本身其实不提供分布式解决方案。在服务端，memcached集群环境实际就是一个个memcached服务器的堆积，环境搭建较为简单；cache的分布式主要是在客户端实现，通过客户端的路由处理来达到分布式解决方案的目的。客户端做路由的原理非常简单，应用服务器在每次存取某key的value时，通过某种算法把key映射到某台memcached服务器nodeA上，因此这个key所有操作都在nodeA上，结构图如图6、图7所示。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300959073.png" alt="image-20220621202928495" tabindex="0" loading="lazy"><figcaption>image-20220621202928495</figcaption></figure><p>图6 memcached客户端路由图</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300959100.png" alt="image-20220621202947235" tabindex="0" loading="lazy"><figcaption>image-20220621202947235</figcaption></figure><p>图7 memcached一致性hash示例图</p><p>memcached客户端采用一致性hash算法作为路由策略，如图7，相对于一般hash（如简单取模）的算法，一致性hash算法除了计算key的hash值外，还会计算每个server对应的hash值，然后将这些hash值映射到一个有限的值域上（比如0~2^32）。通过寻找hash值大于hash(key)的最小server作为存储该key数据的目标server。如果找不到，则直接把具有最小hash值的server作为目标server。同时，一定程度上，解决了扩容问题，增加或删除单个节点，对于整个集群来说，不会有大的影响。最近版本，增加了虚拟节点的设计，进一步提升了可用性。</p><p>memcached是一个高效的分布式内存cache，了解memcached的内存管理机制，才能更好的掌握memcached，让我们可以针对我们数据特点进行调优，让其更好的为我所用。我们知道memcached仅支持基础的key-value键值对类型数据存储。在memcached内存结构中有两个非常重要的概念：slab和chunk。如图8所示。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300959126.png" alt="image-20220621203132597" tabindex="0" loading="lazy"><figcaption>image-20220621203132597</figcaption></figure><p>图8 memcached内存结构图</p><p>slab是一个内存块，它是memcached一次申请内存的最小单位。在启动memcached的时候一般会使用参数-m指定其可用内存，但是并不是在启动的那一刻所有的内存就全部分配出去了，只有在需要的时候才会去申请，而且每次申请一定是一个slab。Slab的大小固定为1M（1048576 Byte），一个slab由若干个大小相等的chunk组成。每个chunk中都保存了一个item结构体、一对key和value。</p><p>虽然在同一个slab中chunk的大小相等的，但是在不同的slab中chunk的大小并不一定相等，在memcached中按照chunk的大小不同，可以把slab分为很多种类（class），默认情况下memcached把slab分为40类（class1～class40），在class 1中，chunk的大小为80字节，由于一个slab的大小是固定的1048576字节（1M），因此在class1中最多可以有13107个chunk（也就是这个slab能存最多13107个小于80字节的key-value数据）。</p><p>memcached内存管理采取预分配、分组管理的方式，分组管理就是我们上面提到的slab class，按照chunk的大小slab被分为很多种类。内存预分配过程是怎样的呢? 向memcached添加一个item时候，memcached首先会根据item的大小，来选择最合适的slab class：例如item的大小为190字节，默认情况下class 4的chunk大小为160字节显然不合适，class 5的chunk大小为200字节，大于190字节，因此该item将放在class 5中（显然这里会有10字节的浪费是不可避免的），计算好所要放入的chunk之后，memcached会去检查该类大小的chunk还有没有空闲的，如果没有，将会申请1M（1个slab）的空间并划分为该种类chunk。例如我们第一次向memcached中放入一个190字节的item时，memcached会产生一个slab class 2（也叫一个page），并会用去一个chunk，剩余5241个chunk供下次有适合大小item时使用，当我们用完这所有的5242个chunk之后，下次再有一个在160～200字节之间的item添加进来时，memcached会再次产生一个class 5的slab（这样就存在了2个pages）。</p><p>总结来看，memcached内存管理需要注意的几个方面：</p><ul><li>chunk是在page里面划分的，而page固定为1m，所以chunk最大不能超过1m。</li><li>chunk实际占用内存要加48B，因为chunk数据结构本身需要占用48B。</li><li>如果用户数据大于1m，则memcached会将其切割，放到多个chunk内。</li><li>已分配出去的page不能回收。</li></ul><p>对于key-value信息，最好不要超过1m的大小；同时信息长度最好相对是比较均衡稳定的，这样能够保障最大限度的使用内存；同时，memcached采用的LRU清理策略，合理甚至过期时间，提高命中率。</p><p>无特殊场景下，key-value能满足需求的前提下，使用memcached分布式集群是较好的选择，搭建与操作使用都比较简单；分布式集群在单点故障时，只影响小部分数据异常，目前还可以通过Magent缓存代理模式，做单点备份，提升高可用；整个缓存都是基于内存的，因此响应时间是很快，不需要额外的序列化、反序列化的程序，但同时由于基于内存，数据没有持久化，集群故障重启数据无法恢复。高版本的memcached已经支持CAS模式的原子操作，可以低成本的解决并发控制问题。</p><h2 id="_3-分布式缓存的实现技术" tabindex="-1"><a class="header-anchor" href="#_3-分布式缓存的实现技术"><span>3. 分布式缓存的实现技术</span></a></h2><blockquote><p>在分布式缓存的实现方案中，有哪些常见的技术实现要点呢？从Redis的视角看，在它的实现中主要包含如下实现技术要点:</p></blockquote><ul><li>持久化：RDB和AOF机制详解 <ul><li>为了防止数据丢失以及服务重启时能够恢复数据，Redis支持数据的持久化，主要分为两种方式，分别是RDB和AOF; 当然实际场景下还会使用这两种的混合模式。</li></ul></li><li>消息传递：发布订阅模式详解 <ul><li>Redis 发布订阅(pub/sub)是一种消息通信模式：发送者(pub)发送消息，订阅者(sub)接收消息。</li></ul></li><li>事件：Redis事件机制详解 <ul><li>Redis 采用事件驱动机制来处理大量的网络IO。它并没有使用 libevent 或者 libev 这样的成熟开源方案，而是自己实现一个非常简洁的事件驱动库 ae_event。</li></ul></li><li>事务：Redis事务详解 <ul><li>Redis 事务的本质是一组命令的集合。事务支持一次执行多个命令，一个事务中所有命令都会被序列化。在事务执行过程，会按照顺序串行化执行队列中的命令，其他客户端提交的命令请求不会插入到事务执行命令序列中。</li></ul></li><li>高可用：主从复制详解 <ul><li>我们知道要避免单点故障，即保证高可用，便需要冗余（副本）方式提供集群服务。而Redis 提供了主从库模式，以保证数据副本的一致，主从库之间采用的是读写分离的方式。本文主要阐述Redis的主从复制。</li></ul></li><li>高可用：哨兵机制（Redis Sentinel）详解 <ul><li>在上文主从复制的基础上，如果注节点出现故障该怎么办呢？ 在 Redis 主从集群中，哨兵机制是实现主从库自动切换的关键机制，它有效地解决了主从复制模式下故障转移的问题。</li></ul></li><li>高可拓展：分片技术（Redis Cluster）详解 <ul><li>前面两篇文章，主从复制和哨兵机制保障了高可用，就读写分离而言虽然slave节点来扩展主从的读并发能力，但是写能力和存储能力是无法进行扩展的，就只能是master节点能够承载的上限。如果面对海量数据那么必然需要构建master（主节点分片)之间的集群，同时必然需要吸收高可用（主从复制和哨兵机制）能力，即每个master分片节点还需要有slave节点，这是分布式系统中典型的纵向扩展（集群的分片技术）的体现；所以在Redis 3.0版本中对应的设计就是Redis Cluster。</li></ul></li></ul><h2 id="_4-分布式缓存中常见的问题和解决方案" tabindex="-1"><a class="header-anchor" href="#_4-分布式缓存中常见的问题和解决方案"><span>4. 分布式缓存中常见的问题和解决方案</span></a></h2><blockquote><p>缓存中存在的问题如下，具体可以看：Redis进阶 - 缓存问题：一致性, 穿击, 穿透, 雪崩, 污染等</p></blockquote><ul><li>缓存穿透问题</li><li>缓存击穿问题</li><li>缓存雪崩问题</li><li>缓存污染（或满了） <ul><li>最大缓存设置多大</li><li>缓存淘汰策略</li></ul></li><li>数据库和缓存一致性问题 <ul><li>4种相关模式 <ul><li>Cache aside</li><li>Read through</li><li>Write through</li><li>Write behind caching</li></ul></li><li>方案：队列 + 重试机制</li><li>方案：异步更新缓存(基于订阅binlog的同步机制)</li></ul></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/arch/arch-z-cache.html" target="_blank" rel="noopener noreferrer">分布式系统 - 分布式缓存及方案实现</a></p>',50)]))}const h=i(t,[["render",c],["__file","arch-z-cache.html.vue"]]),d=JSON.parse('{"path":"/posts/Architect/distributed/arch-z-cache.html","title":"分布式系统-分布式缓存及方案实现","lang":"zh-CN","frontmatter":{"aliases":"分布式系统-分布式缓存及方案实现","tags":null,"cssclass":null,"source":null,"category":["架构"],"created":"2024-04-24 14:35","updated":"2024-04-30 10:01","description":"分布式系统-分布式缓存及方案实现 TODO 待完善中 1. 本地缓存和分布式缓存 本地缓存：指的是在应用中的缓存组件，其最大的优点是应用和cache是在同一个进程内部，请求缓存非常快速，没有过多的网络开销等，在单应用不需要集群支持或者集群情况下各节点无需互相通知的场景下使用本地缓存较合适；同时，它的缺点也是因为缓存跟应用程序耦合，多个应用程序无法直接的...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/distributed/arch-z-cache.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"分布式系统-分布式缓存及方案实现"}],["meta",{"property":"og:description","content":"分布式系统-分布式缓存及方案实现 TODO 待完善中 1. 本地缓存和分布式缓存 本地缓存：指的是在应用中的缓存组件，其最大的优点是应用和cache是在同一个进程内部，请求缓存非常快速，没有过多的网络开销等，在单应用不需要集群支持或者集群情况下各节点无需互相通知的场景下使用本地缓存较合适；同时，它的缺点也是因为缓存跟应用程序耦合，多个应用程序无法直接的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300959028.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式系统-分布式缓存及方案实现\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300959028.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301001567.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301001012.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300959073.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300959100.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300959126.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 本地缓存和分布式缓存","slug":"_1-本地缓存和分布式缓存","link":"#_1-本地缓存和分布式缓存","children":[]},{"level":2,"title":"2. 分布式缓存的实现方案","slug":"_2-分布式缓存的实现方案","link":"#_2-分布式缓存的实现方案","children":[{"level":3,"title":"2.1 Redis缓存","slug":"_2-1-redis缓存","link":"#_2-1-redis缓存","children":[]},{"level":3,"title":"2.2 memcached缓存","slug":"_2-2-memcached缓存","link":"#_2-2-memcached缓存","children":[]}]},{"level":2,"title":"3. 分布式缓存的实现技术","slug":"_3-分布式缓存的实现技术","link":"#_3-分布式缓存的实现技术","children":[]},{"level":2,"title":"4. 分布式缓存中常见的问题和解决方案","slug":"_4-分布式缓存中常见的问题和解决方案","link":"#_4-分布式缓存中常见的问题和解决方案","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":19.86,"words":5958},"filePathRelative":"posts/Architect/distributed/arch-z-cache.md","localizedDate":"2024年10月28日","excerpt":"\\n<blockquote>\\n<p>TODO 待完善中</p>\\n</blockquote>\\n<h2>1. 本地缓存和分布式缓存</h2>\\n<ul>\\n<li><strong>本地缓存</strong>：指的是在应用中的缓存组件，其最大的优点是应用和cache是在同一个进程内部，请求缓存非常快速，没有过多的网络开销等，在单应用不需要集群支持或者集群情况下各节点无需互相通知的场景下使用本地缓存较合适；同时，它的缺点也是因为缓存跟应用程序耦合，<strong>多个应用程序无法直接的共享缓存</strong>，各应用或集群的各节点都需要维护自己的单独缓存，对内存是一种浪费。</li>\\n<li><strong>分布式缓存</strong>：指的是与应用分离的缓存组件或服务，其最大的优点是自身就是一个独立的应用，与本地应用隔离，多个应用可直接的共享缓存。</li>\\n</ul>","autoDesc":true}');export{h as comp,d as data};
