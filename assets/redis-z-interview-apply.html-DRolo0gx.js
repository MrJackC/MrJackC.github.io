import{_ as a,c as e,a as i,o as l}from"./app-tJW29Kmg.js";const n={};function r(o,s){return l(),e("div",null,s[0]||(s[0]=[i(`<h1 id="redis面试-应用场景" tabindex="-1"><a class="header-anchor" href="#redis面试-应用场景"><span>Redis面试 - 应用场景</span></a></h1><h2 id="_1-redis-客户端有哪些" tabindex="-1"><a class="header-anchor" href="#_1-redis-客户端有哪些"><span>1 Redis 客户端有哪些？</span></a></h2><p>Redisson、Jedis、lettuce等等，官方推荐使用Redisson。</p><p>Redisson是一个高级的分布式协调Redis客服端，能帮助用户在分布式环境中轻松实现一些Java的对象 (Bloom filter, BitSet, Set, SetMultimap, ScoredSortedSet, SortedSet, Map, ConcurrentMap, List, ListMultimap, Queue, BlockingQueue, Deque, BlockingDeque, Semaphore, Lock, ReadWriteLock, AtomicLong, CountDownLatch, Publish / Subscribe, HyperLogLog)。</p><h2 id="_2-redis如何做大量数据插入" tabindex="-1"><a class="header-anchor" href="#_2-redis如何做大量数据插入"><span>2 Redis如何做大量数据插入？</span></a></h2><p>Redis2.6开始redis-cli支持一种新的被称之为pipe mode的新模式用于执行大量数据插入工作。</p><h2 id="_3-redis实现分布式锁实现-什么是-redlock" tabindex="-1"><a class="header-anchor" href="#_3-redis实现分布式锁实现-什么是-redlock"><span>3 Redis实现分布式锁实现? 什么是 RedLock?</span></a></h2><ul><li><strong>常规</strong></li></ul><p>加锁： SET NX PX + 校验唯一随机值</p><p>解锁： Lua脚本</p><ul><li><strong>RedLock</strong></li></ul><p>搞多个Redis master部署，以保证它们不会同时宕掉。并且这些master节点是完全相互独立的，相互之间不存在数据同步。同时，需要确保在这多个master实例上，是与在Redis单实例，使用相同方法来获取和释放锁。</p><ul><li><strong>Redisson框架</strong></li></ul><p>Redisson watchdog或者它实现了RedLock方式</p><p>具体可以看后文分布式锁中实现方式。</p><h2 id="_4-redis缓存有哪些问题-如何解决" tabindex="-1"><a class="header-anchor" href="#_4-redis缓存有哪些问题-如何解决"><span>4 Redis缓存有哪些问题，如何解决？</span></a></h2><p>当缓存库出现时，必须要考虑如下问题：</p><ul><li><strong>缓存穿透</strong><ul><li><strong>问题来源</strong>: 缓存穿透是指<strong>缓存和数据库中都没有的数据</strong>，而用户不断发起请求。由于缓存是不命中时被动写的，并且出于容错考虑，如果从存储层查不到数据则不写入缓存，这将导致这个不存在的数据每次请求都要到存储层去查询，失去了缓存的意义。</li><li>解决方案 <ul><li>接口层增加校验，如用户鉴权校验，id做基础校验，id&lt;=0的直接拦截；</li><li>从缓存取不到的数据，在数据库中也没有取到，这时也可以将key-value对写为key-null，缓存有效时间可以设置短点，如30秒（设置太长会导致正常情况也没法使用）。这样可以防止攻击用户反复用同一个id暴力攻击</li><li>布隆过滤器。bloomfilter就类似于一个hash set，用于快速判某个元素是否存在于集合中，其典型的应用场景就是快速判断一个key是否存在于某容器，不存在就直接返回。布隆过滤器的关键就在于hash算法和容器大小</li></ul></li></ul></li><li><strong>缓存穿击</strong><ul><li><strong>问题来源</strong>: 缓存击穿是指<strong>缓存中没有但数据库中有的数据</strong>（一般是缓存时间到期），这时由于并发用户特别多，同时读缓存没读到数据，又同时去数据库去取数据，引起数据库压力瞬间增大，造成过大压力。</li><li>解决方案 <ul><li>设置热点数据永远不过期。</li><li>接口限流与熔断，降级。重要的接口一定要做好限流策略，防止用户恶意刷接口，同时要降级准备，当接口中的某些 服务 不可用时候，进行熔断，失败快速返回机制。</li><li>加互斥锁</li></ul></li></ul></li><li><strong>缓存雪崩</strong><ul><li><strong>问题来源</strong>: 缓存雪崩是指缓存中<strong>数据大批量到过期时间，而查询数据量巨大，引起数据库压力过大甚至down机</strong>。和缓存击穿不同的是，缓存击穿指并发查同一条数据，缓存雪崩是不同数据都过期了，很多数据都查不到从而查数据库。</li><li>解决方案 <ul><li>缓存数据的过期时间设置随机，防止同一时间大量数据过期现象发生。</li><li>如果缓存数据库是分布式部署，将热点数据均匀分布在不同的缓存数据库中。</li><li>设置热点数据永远不过期。</li></ul></li></ul></li><li><strong>缓存污染</strong>（或者满了）</li></ul><p>缓存污染问题说的是缓存中一些只会被访问一次或者几次的的数据，被访问完后，再也不会被访问到，但这部分数据依然留存在缓存中，消耗缓存空间。</p><p>缓存污染会随着数据的持续增加而逐渐显露，随着服务的不断运行，缓存中会存在大量的永远不会再次被访问的数据。缓存空间是有限的，如果缓存空间满了，再往缓存里写数据时就会有额外开销，影响Redis性能。这部分额外开销主要是指写的时候判断淘汰策略，根据淘汰策略去选择要淘汰的数据，然后进行删除操作。</p><h2 id="_5-redis性能问题有哪些-如何分析定位解决" tabindex="-1"><a class="header-anchor" href="#_5-redis性能问题有哪些-如何分析定位解决"><span>5 Redis性能问题有哪些，如何分析定位解决?</span></a></h2><p>举几个例子</p><ul><li><strong>看延迟</strong> 60 秒内的最大响应延迟：</li></ul><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> redis-cli</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -h</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 127.0.0.1</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -p</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 6379</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --intrinsic-latency</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 60</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Max</span><span style="color:#98C379;--shiki-dark:#98C379;"> latency</span><span style="color:#98C379;--shiki-dark:#98C379;"> so</span><span style="color:#98C379;--shiki-dark:#98C379;"> far:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#98C379;--shiki-dark:#98C379;"> microseconds.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Max</span><span style="color:#98C379;--shiki-dark:#98C379;"> latency</span><span style="color:#98C379;--shiki-dark:#98C379;"> so</span><span style="color:#98C379;--shiki-dark:#98C379;"> far:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 15</span><span style="color:#98C379;--shiki-dark:#98C379;"> microseconds.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Max</span><span style="color:#98C379;--shiki-dark:#98C379;"> latency</span><span style="color:#98C379;--shiki-dark:#98C379;"> so</span><span style="color:#98C379;--shiki-dark:#98C379;"> far:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 17</span><span style="color:#98C379;--shiki-dark:#98C379;"> microseconds.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Max</span><span style="color:#98C379;--shiki-dark:#98C379;"> latency</span><span style="color:#98C379;--shiki-dark:#98C379;"> so</span><span style="color:#98C379;--shiki-dark:#98C379;"> far:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 18</span><span style="color:#98C379;--shiki-dark:#98C379;"> microseconds.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Max</span><span style="color:#98C379;--shiki-dark:#98C379;"> latency</span><span style="color:#98C379;--shiki-dark:#98C379;"> so</span><span style="color:#98C379;--shiki-dark:#98C379;"> far:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 31</span><span style="color:#98C379;--shiki-dark:#98C379;"> microseconds.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Max</span><span style="color:#98C379;--shiki-dark:#98C379;"> latency</span><span style="color:#98C379;--shiki-dark:#98C379;"> so</span><span style="color:#98C379;--shiki-dark:#98C379;"> far:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 32</span><span style="color:#98C379;--shiki-dark:#98C379;"> microseconds.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Max</span><span style="color:#98C379;--shiki-dark:#98C379;"> latency</span><span style="color:#98C379;--shiki-dark:#98C379;"> so</span><span style="color:#98C379;--shiki-dark:#98C379;"> far:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 59</span><span style="color:#98C379;--shiki-dark:#98C379;"> microseconds.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Max</span><span style="color:#98C379;--shiki-dark:#98C379;"> latency</span><span style="color:#98C379;--shiki-dark:#98C379;"> so</span><span style="color:#98C379;--shiki-dark:#98C379;"> far:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 72</span><span style="color:#98C379;--shiki-dark:#98C379;"> microseconds.</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1428669267</span><span style="color:#98C379;--shiki-dark:#98C379;"> total</span><span style="color:#98C379;--shiki-dark:#98C379;"> runs</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (avg </span><span style="color:#98C379;--shiki-dark:#98C379;">latency:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0.0420</span><span style="color:#98C379;--shiki-dark:#98C379;"> microseconds</span><span style="color:#98C379;--shiki-dark:#98C379;"> /</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 42.00</span><span style="color:#98C379;--shiki-dark:#98C379;"> nanoseconds</span><span style="color:#98C379;--shiki-dark:#98C379;"> per</span><span style="color:#98C379;--shiki-dark:#98C379;"> run</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">).</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Worst</span><span style="color:#98C379;--shiki-dark:#98C379;"> run</span><span style="color:#98C379;--shiki-dark:#98C379;"> took</span><span style="color:#98C379;--shiki-dark:#98C379;"> 1429x</span><span style="color:#98C379;--shiki-dark:#98C379;"> longer</span><span style="color:#98C379;--shiki-dark:#98C379;"> than</span><span style="color:#98C379;--shiki-dark:#98C379;"> the</span><span style="color:#98C379;--shiki-dark:#98C379;"> average</span><span style="color:#98C379;--shiki-dark:#98C379;"> latency.</span></span></code></pre></div><ul><li><strong>慢日志</strong>（slowlog）</li></ul><p>慢查询，就会导致后面的请求发生排队，对于客户端来说，响应延迟也会变长。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131027737.png" alt="image-20220628231317888" tabindex="0" loading="lazy"><figcaption>image-20220628231317888</figcaption></figure><ul><li><strong>bigkey</strong></li></ul><p>大对象</p><ul><li><strong>集中过期</strong></li></ul><p>一般有两种方案来规避这个问题：</p><ol><li>集中过期 key 增加一个随机过期时间，把集中过期的时间打散，降低 Redis 清理过期 key 的压力</li><li>如果你使用的 Redis 是 4.0 以上版本，可以开启 lazy-free 机制，当删除过期 key 时，把释放内存的操作放到后台线程中执行，避免阻塞主线程</li></ol><ul><li><strong>fork耗时严重</strong></li></ul><p>主进程创建子进程，会调用操作系统提供的 fork 函数</p><ul><li><strong>使用Swap</strong></li></ul><p>当内存中的数据被换到磁盘上后，Redis 再访问这些数据时，就需要从磁盘上读取，访问磁盘的速度要比访问内存慢几百倍！</p><ul><li><strong>内存碎片</strong></li></ul><p>Redis 4.0 版本，它正好提供了自动碎片整理的功能，可以通过配置开启碎片自动整理</p>`,38)]))}const p=a(n,[["render",r],["__file","redis-z-interview-apply.html.vue"]]),d=JSON.parse('{"path":"/posts/Redis/redis-z-interview-apply.html","title":"Redis面试 - 应用场景","lang":"zh-CN","frontmatter":{"aliases":"Redis面试 - 应用场景","tags":null,"cssclass":null,"source":null,"order":1100,"category":["数据库","Redis"],"created":"2024-02-22 10:49","updated":"2024-03-13 10:27","description":"Redis面试 - 应用场景 1 Redis 客户端有哪些？ Redisson、Jedis、lettuce等等，官方推荐使用Redisson。 Redisson是一个高级的分布式协调Redis客服端，能帮助用户在分布式环境中轻松实现一些Java的对象 (Bloom filter, BitSet, Set, SetMultimap, ScoredSort...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Redis/redis-z-interview-apply.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis面试 - 应用场景"}],["meta",{"property":"og:description","content":"Redis面试 - 应用场景 1 Redis 客户端有哪些？ Redisson、Jedis、lettuce等等，官方推荐使用Redisson。 Redisson是一个高级的分布式协调Redis客服端，能帮助用户在分布式环境中轻松实现一些Java的对象 (Bloom filter, BitSet, Set, SetMultimap, ScoredSort..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131027737.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis面试 - 应用场景\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131027737.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1 Redis 客户端有哪些？","slug":"_1-redis-客户端有哪些","link":"#_1-redis-客户端有哪些","children":[]},{"level":2,"title":"2 Redis如何做大量数据插入？","slug":"_2-redis如何做大量数据插入","link":"#_2-redis如何做大量数据插入","children":[]},{"level":2,"title":"3 Redis实现分布式锁实现? 什么是 RedLock?","slug":"_3-redis实现分布式锁实现-什么是-redlock","link":"#_3-redis实现分布式锁实现-什么是-redlock","children":[]},{"level":2,"title":"4 Redis缓存有哪些问题，如何解决？","slug":"_4-redis缓存有哪些问题-如何解决","link":"#_4-redis缓存有哪些问题-如何解决","children":[]},{"level":2,"title":"5 Redis性能问题有哪些，如何分析定位解决?","slug":"_5-redis性能问题有哪些-如何分析定位解决","link":"#_5-redis性能问题有哪些-如何分析定位解决","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.21,"words":1563},"filePathRelative":"posts/Redis/redis-z-interview-apply.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1 Redis 客户端有哪些？</h2>\\n<p>Redisson、Jedis、lettuce等等，官方推荐使用Redisson。</p>\\n<p>Redisson是一个高级的分布式协调Redis客服端，能帮助用户在分布式环境中轻松实现一些Java的对象 (Bloom filter, BitSet, Set, SetMultimap, ScoredSortedSet, SortedSet, Map, ConcurrentMap, List, ListMultimap, Queue, BlockingQueue, Deque, BlockingDeque, Semaphore, Lock, ReadWriteLock, AtomicLong, CountDownLatch, Publish / Subscribe, HyperLogLog)。</p>","autoDesc":true}');export{p as comp,d as data};
