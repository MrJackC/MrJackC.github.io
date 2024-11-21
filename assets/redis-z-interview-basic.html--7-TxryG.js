import{_ as i,c as s,a as l,o as t}from"./app-CpAF2rca.js";const r={};function n(d,e){return t(),s("div",null,e[0]||(e[0]=[l('<h1 id="redis面试-常规问题" tabindex="-1"><a class="header-anchor" href="#redis面试-常规问题"><span>Redis面试 - 常规问题</span></a></h1><h2 id="_1-什么是redis-为什么用redis" tabindex="-1"><a class="header-anchor" href="#_1-什么是redis-为什么用redis"><span>1 什么是Redis，为什么用Redis？</span></a></h2><p>Redis是一种支持key-value等多种数据结构的存储系统。可用于缓存，事件发布或订阅，高速队列等场景。支持网络，提供字符串，哈希，列表，队列，集合结构直接存取，基于内存，可持久化。</p><ul><li>读写性能优异 <ul><li>Redis能读的速度是110000次/s,写的速度是81000次/s （测试条件见下一节）。</li></ul></li><li>数据类型丰富 <ul><li>Redis支持二进制案例的 Strings, Lists, Hashes, Sets 及 Ordered Sets 数据类型操作。</li></ul></li><li>原子性 <ul><li>Redis的所有操作都是原子性的，同时Redis还支持对几个操作全并后的原子性执行。</li></ul></li><li>丰富的特性 <ul><li>Redis支持 publish/subscribe, 通知, key 过期等特性。</li></ul></li><li>持久化 <ul><li>Redis支持RDB, AOF等持久化方式</li></ul></li><li>发布订阅 <ul><li>Redis支持发布/订阅模式</li></ul></li><li>分布式 <ul><li>Redis Cluster</li></ul></li></ul><h2 id="_2-为什么redis-是单线程的以及为什么这么快" tabindex="-1"><a class="header-anchor" href="#_2-为什么redis-是单线程的以及为什么这么快"><span>2. 为什么Redis 是单线程的以及为什么这么快？</span></a></h2><ul><li>redis完全基于内存,绝大部分请求是纯粹的内存操作,非常快速.</li><li>数据结构简单,对数据操作也简单,redis中的数据结构是专门进行设计的</li><li>采用单线程模型, 避免了不必要的上下文切换和竞争条件, 也不存在多线程或者多线程切换而消耗CPU, 不用考虑各种锁的问题, 不存在加锁, 释放锁的操作, 没有因为可能出现死锁而导致性能消耗</li><li>使用了多路IO复用模型,非阻塞IO</li><li>使用底层模型不同,它们之间底层实现方式及与客户端之间的 通信的应用协议不一样,Redis直接构建了自己的VM机制,因为一般的系统调用系统函数的话,会浪费一定的时间去移动和请求</li></ul><h2 id="_3-redis-一般有哪些使用场景" tabindex="-1"><a class="header-anchor" href="#_3-redis-一般有哪些使用场景"><span>3. Redis 一般有哪些使用场景？</span></a></h2><p>可以结合自己的项目讲讲，比如</p><ul><li><strong>热点数据的缓存</strong></li></ul><p>缓存是Redis最常见的应用场景，之所有这么使用，主要是因为Redis读写性能优异。而且逐渐有取代memcached，成为首选服务端缓存的组件。而且，Redis内部是支持事务的，在使用时候能有效保证数据的一致性。</p><ul><li><strong>限时业务的运用</strong></li></ul><p>redis中可以使用expire命令设置一个键的生存时间，到时间后redis会删除它。利用这一特性可以运用在限时的优惠活动信息、手机验证码等业务场景。</p><ul><li><strong>计数器相关问题</strong></li></ul><p>redis由于incrby命令可以实现原子性的递增，所以可以运用于高并发的秒杀活动、分布式序列号的生成、具体业务还体现在比如限制一个手机号发多少条短信、一个接口一分钟限制多少请求、一个接口一天限制调用多少次等等。</p><ul><li><strong>分布式锁</strong></li></ul><p>这个主要利用redis的setnx命令进行，setnx：&quot;set if not exists&quot;就是如果不存在则成功设置缓存同时返回1，否则返回0 ，这个特性在俞你奔远方的后台中有所运用，因为我们服务器是集群的，定时任务可能在两台机器上都会运行，所以在定时任务中首先 通过setnx设置一个lock，如果成功设置则执行，如果没有成功设置，则表明该定时任务已执行。 当然结合具体业务，我们可以给这个lock加一个过期时间，比如说30分钟执行一次的定时任务，那么这个过期时间设置为小于30分钟的一个时间就可以，这个与定时任务的周期以及定时任务执行消耗时间相关。</p><p>在分布式锁的场景中，主要用在比如秒杀系统等。</p>',17)]))}const o=i(r,[["render",n],["__file","redis-z-interview-basic.html.vue"]]),u=JSON.parse('{"path":"/posts/Redis/redis-z-interview-basic.html","title":"Redis面试 - 常规问题","lang":"zh-CN","frontmatter":{"aliases":"Redis面试 - 常规问题","tags":null,"cssclass":null,"source":null,"order":1030,"category":["数据库","Redis"],"created":"2024-02-22 10:49","updated":"2024-03-13 10:27","description":"Redis面试 - 常规问题 1 什么是Redis，为什么用Redis？ Redis是一种支持key-value等多种数据结构的存储系统。可用于缓存，事件发布或订阅，高速队列等场景。支持网络，提供字符串，哈希，列表，队列，集合结构直接存取，基于内存，可持久化。 读写性能优异 Redis能读的速度是110000次/s,写的速度是81000次/s （测试条...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Redis/redis-z-interview-basic.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis面试 - 常规问题"}],["meta",{"property":"og:description","content":"Redis面试 - 常规问题 1 什么是Redis，为什么用Redis？ Redis是一种支持key-value等多种数据结构的存储系统。可用于缓存，事件发布或订阅，高速队列等场景。支持网络，提供字符串，哈希，列表，队列，集合结构直接存取，基于内存，可持久化。 读写性能优异 Redis能读的速度是110000次/s,写的速度是81000次/s （测试条..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis面试 - 常规问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1 什么是Redis，为什么用Redis？","slug":"_1-什么是redis-为什么用redis","link":"#_1-什么是redis-为什么用redis","children":[]},{"level":2,"title":"2. 为什么Redis 是单线程的以及为什么这么快？","slug":"_2-为什么redis-是单线程的以及为什么这么快","link":"#_2-为什么redis-是单线程的以及为什么这么快","children":[]},{"level":2,"title":"3. Redis 一般有哪些使用场景？","slug":"_3-redis-一般有哪些使用场景","link":"#_3-redis-一般有哪些使用场景","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.4,"words":1021},"filePathRelative":"posts/Redis/redis-z-interview-basic.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1 什么是Redis，为什么用Redis？</h2>\\n<p>Redis是一种支持key-value等多种数据结构的存储系统。可用于缓存，事件发布或订阅，高速队列等场景。支持网络，提供字符串，哈希，列表，队列，集合结构直接存取，基于内存，可持久化。</p>\\n<ul>\\n<li>读写性能优异\\n<ul>\\n<li>Redis能读的速度是110000次/s,写的速度是81000次/s （测试条件见下一节）。</li>\\n</ul>\\n</li>\\n<li>数据类型丰富\\n<ul>\\n<li>Redis支持二进制案例的 Strings, Lists, Hashes, Sets 及 Ordered Sets 数据类型操作。</li>\\n</ul>\\n</li>\\n<li>原子性\\n<ul>\\n<li>Redis的所有操作都是原子性的，同时Redis还支持对几个操作全并后的原子性执行。</li>\\n</ul>\\n</li>\\n<li>丰富的特性\\n<ul>\\n<li>Redis支持 publish/subscribe, 通知, key 过期等特性。</li>\\n</ul>\\n</li>\\n<li>持久化\\n<ul>\\n<li>Redis支持RDB, AOF等持久化方式</li>\\n</ul>\\n</li>\\n<li>发布订阅\\n<ul>\\n<li>Redis支持发布/订阅模式</li>\\n</ul>\\n</li>\\n<li>分布式\\n<ul>\\n<li>Redis Cluster</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{o as comp,u as data};
