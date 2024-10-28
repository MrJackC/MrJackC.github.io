import{_ as i,c as s,a as l,o as t}from"./app-W9QyTiMU.js";const a={};function r(d,e){return t(),s("div",null,e[0]||(e[0]=[l('<h1 id="redis入门-redis概念和基础" tabindex="-1"><a class="header-anchor" href="#redis入门-redis概念和基础"><span>Redis入门 - Redis概念和基础</span></a></h1><h2 id="_1-什么是redis" tabindex="-1"><a class="header-anchor" href="#_1-什么是redis"><span>1. 什么是redis</span></a></h2><p>Redis是一款内存高速缓存数据库。Redis全称为：<strong>Remote Dictionary Server</strong>（远程数据(字典)服务），使用C语言编写，Redis是一个key-value存储系统（键值存储系统），支持丰富的数据类型，如：String、list、set、zset、hash。</p><p>Redis是一种支持key-value等多种数据结构的存储系统。可用于缓存，事件发布或订阅，高速队列等场景。支持网络，提供字符串，哈希，列表，队列，集合结构直接存取，基于内存，可持久化。</p><h2 id="_2-为什么要使用redis" tabindex="-1"><a class="header-anchor" href="#_2-为什么要使用redis"><span>2. 为什么要使用Redis</span></a></h2><blockquote><p>一个产品的使用场景肯定是需要根据产品的特性，先列举一下Redis的特点：</p></blockquote><ul><li>读写性能优异 <ul><li>Redis能读的速度是110000次/s,写的速度是81000次/s （测试条件见下一节）。</li></ul></li><li>数据类型丰富 <ul><li>Redis支持二进制案例的 Strings, Lists, Hashes, Sets 及 Ordered Sets 数据类型操作。</li></ul></li><li>原子性 <ul><li>Redis的所有操作都是原子性的，同时Redis还支持对几个操作合并后的原子性执行。</li></ul></li><li>丰富的特性 <ul><li>Redis支持 publish/subscribe, 通知, key 过期等特性。</li></ul></li><li>持久化 <ul><li>Redis支持RDB, AOF等持久化方式</li></ul></li><li>发布订阅 <ul><li>Redis支持发布/订阅模式</li></ul></li><li>分布式 <ul><li>Redis Cluster</li></ul></li></ul><h2 id="_3-redis的使用场景" tabindex="-1"><a class="header-anchor" href="#_3-redis的使用场景"><span>3. Redis的使用场景</span></a></h2><blockquote><p>redis应用场景总结redis平时我们用到的地方蛮多的，下面就了解的应用场景做个总结：</p></blockquote><h3 id="_3-1-热点数据的缓存" tabindex="-1"><a class="header-anchor" href="#_3-1-热点数据的缓存"><span>3.1 热点数据的缓存</span></a></h3><p>缓存是Redis最常见的应用场景，之所有这么使用，主要是因为Redis读写性能优异。而且逐渐有取代memcached，成为首选服务端缓存的组件。而且，Redis内部是支持事务的，在使用时候能有效保证数据的一致性。</p><p>作为缓存使用时，一般有两种方式保存数据：</p><h4 id="_3-1-1-写入数据时机-方案一" tabindex="-1"><a class="header-anchor" href="#_3-1-1-写入数据时机-方案一"><span>3.1.1 写入数据时机--方案一：</span></a></h4><p><strong>读取前，先去读Redis，如果没有数据，读取数据库，将数据拉入Redis。</strong></p><p>实施起来简单，但是有两个需要注意的地方：</p><ul><li>避免缓存击穿。（数据库没有就需要命中的数据，导致Redis一直没有数据，而一直命中数据库。）</li><li>数据的实时性相对会差一点。</li></ul><h4 id="_3-1-2-写入数据时机-方案二" tabindex="-1"><a class="header-anchor" href="#_3-1-2-写入数据时机-方案二"><span>3.1.2 写入数据时机--方案二：</span></a></h4><p><strong>插入数据时，同时写入Redis。</strong></p><p>数据实时性强，但是开发时不便于统一处理。</p><h4 id="_3-1-3-两种写入方案如何选择" tabindex="-1"><a class="header-anchor" href="#_3-1-3-两种写入方案如何选择"><span>3.1.3 两种写入方案如何选择</span></a></h4><p>当然，两种方式根据实际情况来适用。如：</p><ul><li>方案一适用于对于数据实时性要求不是特别高的场景。</li><li>方案二适用于字典表、数据量不大的数据存储。</li></ul><blockquote><p>在项目中一般两种插入时机都用，增删改完成后都写入缓存。</p><p>查的时候无数据，查完数据库后还要再写入缓存</p></blockquote><h3 id="_3-2-限时业务的运用" tabindex="-1"><a class="header-anchor" href="#_3-2-限时业务的运用"><span>3.2 限时业务的运用</span></a></h3><p>redis中可以使用expire命令设置一个键的生存时间，到时间后redis会删除它。利用这一特性可以运用在限时的优惠活动信息、手机验证码，登录token 过期时间等业务场景。</p><blockquote><p>在若依中主要应用于</p><ul><li>登录的token过期</li><li>图片验证码</li><li>限流算法也有用到</li></ul></blockquote><h3 id="_3-3-计数器相关问题" tabindex="-1"><a class="header-anchor" href="#_3-3-计数器相关问题"><span>3.3 计数器相关问题</span></a></h3><p>redis由于incrby命令可以实现原子性的递增，所以可以运用于高并发的秒杀活动、分布式序列号的生成、具体业务还体现在比如限制一个手机号发多少条短信、一个接口一分钟限制多少请求、一个接口一天限制调用多少次等等。</p><blockquote><p>若依中</p><ul><li>限流：使用reids lua 脚本递增访问次数</li></ul><p>自己项目中</p><ul><li>分布式序列号生成/ 商城订单id</li></ul></blockquote><h3 id="_3-4-分布式锁" tabindex="-1"><a class="header-anchor" href="#_3-4-分布式锁"><span>3.4 分布式锁</span></a></h3><p>这个主要利用redis的setnx命令进行，setnx：&quot;set if not exists&quot;就是如果不存在则成功设置缓存同时返回1，否则返回0 ，这个特性在很多后台中都有所运用，因为我们服务器是集群的，定时任务可能在两台机器上都会运行，所以在定时任务中首先 通过setnx设置一个lock， 如果成功设置则执行，如果没有成功设置，则表明该定时任务已执行。 当然结合具体业务，我们可以给这个lock加一个过期时间，比如说30分钟执行一次的定时任务，那么这个过期时间设置为小于30分钟的一个时间就可以，这个与定时任务的周期以及定时任务执行消耗时间相关。</p><p>在分布式锁的场景中，主要用在比如秒杀系统等。</p><blockquote><p>若依中本身对分布式支持是比较差的，并没有分布式锁的应用</p><p>实际自己项目中</p><ul><li>多人同时处理同一个工作流节点问题</li><li>定时任务重复执行问题等</li></ul></blockquote><h3 id="_3-5-延时操作" tabindex="-1"><a class="header-anchor" href="#_3-5-延时操作"><span>3.5 延时操作</span></a></h3><p>比如在订单生产后我们占用了库存，10分钟后去检验用户是否真正购买，如果没有购买将该单据设置无效，同时还原库存。 由于redis自2.8.0之后版本提供Keyspace Notifications功能，允许客户订阅Pub/Sub频道，以便以某种方式接收影响Redis数据集的事件。 所以我们对于上面的需求就可以用以下解决方案，我们在订单生产时，设置一个key，同时设置10分钟后过期， 我们在后台实现一个监听器，监听key的实效，监听到key失效时将后续逻辑加上。</p><p>当然我们也可以利用rabbitmq、activemq等消息中间件的延迟队列服务实现该需求。</p><blockquote><p>在项目中很少使用</p></blockquote><h3 id="_3-6-排行榜相关问题" tabindex="-1"><a class="header-anchor" href="#_3-6-排行榜相关问题"><span>3.6 排行榜相关问题</span></a></h3><p>关系型数据库在排行榜方面查询速度普遍偏慢，所以可以借助redis的SortedSet进行热点数据的排序。</p><p>比如点赞排行榜，做一个SortedSet, 然后以用户的openid作为上面的username, 以用户的点赞数作为上面的score, 然后针对每个用户做一个hash, 通过zrangebyscore就可以按照点赞数获取排行榜，然后再根据username获取用户的hash信息，这个当时在实际运用中性能体验也蛮不错的。</p><blockquote><p>没在项目中使用过，可以尝试</p></blockquote><h3 id="_3-7-点赞、好友等相互关系的存储" tabindex="-1"><a class="header-anchor" href="#_3-7-点赞、好友等相互关系的存储"><span>3.7 点赞、好友等相互关系的存储</span></a></h3><p>Redis 利用集合的一些命令，比如求交集、并集、差集等。</p><p>在微博应用中，每个用户关注的人存在一个集合中，就很容易实现求两个人的共同好友功能。</p><blockquote><p>没在项目中使用过，可以尝试</p></blockquote><h3 id="_3-8-简单队列" tabindex="-1"><a class="header-anchor" href="#_3-8-简单队列"><span>3.8 简单队列</span></a></h3><p>由于Redis有list push和list pop这样的命令，所以能够很方便的执行队列操作。</p><blockquote><p>在redis客户端redisson中，已经实现各种集合和分布式队列</p></blockquote><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/db/nosql-redis/db-redis-introduce.html" target="_blank" rel="noopener noreferrer"><strong>Redis入门 - Redis概念和基础</strong></a></p>',50)]))}const o=i(a,[["render",r],["__file","db-redis-introduce.html.vue"]]),p=JSON.parse('{"path":"/posts/Redis/db-redis-introduce.html","title":"Redis入门 - Redis概念和基础","lang":"zh-CN","frontmatter":{"aliases":"Redis入门 - Redis概念和基础","tags":null,"cssclass":null,"source":null,"order":20,"category":["数据库","Redis"],"created":"2024-02-22 10:49","updated":"2024-03-13 10:13","description":"Redis入门 - Redis概念和基础 1. 什么是redis Redis是一款内存高速缓存数据库。Redis全称为：Remote Dictionary Server（远程数据(字典)服务），使用C语言编写，Redis是一个key-value存储系统（键值存储系统），支持丰富的数据类型，如：String、list、set、zset、hash。 Red...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Redis/db-redis-introduce.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis入门 - Redis概念和基础"}],["meta",{"property":"og:description","content":"Redis入门 - Redis概念和基础 1. 什么是redis Redis是一款内存高速缓存数据库。Redis全称为：Remote Dictionary Server（远程数据(字典)服务），使用C语言编写，Redis是一个key-value存储系统（键值存储系统），支持丰富的数据类型，如：String、list、set、zset、hash。 Red..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis入门 - Redis概念和基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是redis","slug":"_1-什么是redis","link":"#_1-什么是redis","children":[]},{"level":2,"title":"2. 为什么要使用Redis","slug":"_2-为什么要使用redis","link":"#_2-为什么要使用redis","children":[]},{"level":2,"title":"3. Redis的使用场景","slug":"_3-redis的使用场景","link":"#_3-redis的使用场景","children":[{"level":3,"title":"3.1 热点数据的缓存","slug":"_3-1-热点数据的缓存","link":"#_3-1-热点数据的缓存","children":[]},{"level":3,"title":"3.2 限时业务的运用","slug":"_3-2-限时业务的运用","link":"#_3-2-限时业务的运用","children":[]},{"level":3,"title":"3.3 计数器相关问题","slug":"_3-3-计数器相关问题","link":"#_3-3-计数器相关问题","children":[]},{"level":3,"title":"3.4 分布式锁","slug":"_3-4-分布式锁","link":"#_3-4-分布式锁","children":[]},{"level":3,"title":"3.5 延时操作","slug":"_3-5-延时操作","link":"#_3-5-延时操作","children":[]},{"level":3,"title":"3.6 排行榜相关问题","slug":"_3-6-排行榜相关问题","link":"#_3-6-排行榜相关问题","children":[]},{"level":3,"title":"3.7 点赞、好友等相互关系的存储","slug":"_3-7-点赞、好友等相互关系的存储","link":"#_3-7-点赞、好友等相互关系的存储","children":[]},{"level":3,"title":"3.8 简单队列","slug":"_3-8-简单队列","link":"#_3-8-简单队列","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.07,"words":1820},"filePathRelative":"posts/Redis/db-redis-introduce.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 什么是redis</h2>\\n<p>Redis是一款内存高速缓存数据库。Redis全称为：<strong>Remote Dictionary Server</strong>（远程数据(字典)服务），使用C语言编写，Redis是一个key-value存储系统（键值存储系统），支持丰富的数据类型，如：String、list、set、zset、hash。</p>\\n<p>Redis是一种支持key-value等多种数据结构的存储系统。可用于缓存，事件发布或订阅，高速队列等场景。支持网络，提供字符串，哈希，列表，队列，集合结构直接存取，基于内存，可持久化。</p>\\n<h2>2. 为什么要使用Redis</h2>","autoDesc":true}');export{o as comp,p as data};
