import{_ as t,c as s,a as i,o as n}from"./app-BfIe-EZg.js";const r={};function d(o,e){return n(),s("div",null,e[0]||(e[0]=[i('<h1 id="redis连接客户端选择-jedis-redisson-lettuce" tabindex="-1"><a class="header-anchor" href="#redis连接客户端选择-jedis-redisson-lettuce"><span>redis连接客户端选择：Jedis,Redisson,Lettuce</span></a></h1><p>在spring boot2之后，对redis连接的支持，默认就采用了lettuce。这就一定程度说明了lettuce 和Jedis的优劣。</p><h2 id="_1-redis-常见连接客户端" tabindex="-1"><a class="header-anchor" href="#_1-redis-常见连接客户端"><span>1. redis 常见连接客户端</span></a></h2><ul><li><p>Jedis：是老牌的Redis的Java实现客户端，提供了比较全面的Redis命令的支持</p><p>优势：比较全面的提供了Redis的操作特性</p></li><li><p>Redisson：实现了分布式和可扩展的Java数据结构。</p><p>优势：促使使用者对Redis的关注分离，提供很多分布式相关操作服务，例如，<strong>分布式锁，分布式集合，可通过Redis支持延迟队列</strong></p></li><li><p>Lettuce：高级Redis客户端，用于线程安全同步，异步和响应使用，支持集群，Sentinel，管道和编码器。</p><p>优势：<strong>基于Netty框架的事件驱动的通信层</strong>，其方法调用是异步的。Lettuce的API是<strong>线程安全</strong>的，所以可以操作单个Lettuce连接来完成各种操作</p></li></ul><h2 id="_2-lettuce和jedis比较" tabindex="-1"><a class="header-anchor" href="#_2-lettuce和jedis比较"><span>2. lettuce和jedis比较</span></a></h2><p>jedis是直接连接redis server,如果在多线程环境下是<strong>非线程安全</strong>的，这个时候只有<strong>使用连接池，为每个jedis实例增加物理连接 ；</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131026503.png" alt="image-20191005112810662" tabindex="0" loading="lazy"><figcaption>image-20191005112810662</figcaption></figure><p>lettuce的连接是基于Netty的，连接实例（StatefulRedisConnection）可以在多个线程间并发访问，StatefulRedisConnection是线程安全的，所以一个连接实例可以满足多线程环境下的并发访问，当然这也是可伸缩的设计，一个连接实例不够的情况也可以按需增加连接实例。</p><p>Redisson实现了分布式和可扩展的Java数据结构，和Jedis相比，功能较为简单，不支持字符串操作，不支持排序、事务、管道、分区等Redis特性。Redisson的宗旨是促进使用者对Redis的关注分离，从而让使用者能够将精力更集中地放在处理业务逻辑上。</p><p>总结：<br> 优先使用Lettuce，如果需要分布式锁，分布式集合等分布式的高级特性，添加Redisson结合使用，因为Redisson本身对字符串的操作支持很差。</p>',10)]))}const c=t(r,[["render",d],["__file","redis-y-action-client.html.vue"]]),p=JSON.parse('{"path":"/posts/Redis/redis-y-action-client.html","title":"redis连接客户端选择：Jedis,Redisson,Lettuce","lang":"zh-CN","frontmatter":{"aliases":"redis连接客户端选择：Jedis,Redisson,Lettuce","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:27","description":"redis连接客户端选择：Jedis,Redisson,Lettuce 在spring boot2之后，对redis连接的支持，默认就采用了lettuce。这就一定程度说明了lettuce 和Jedis的优劣。 1. redis 常见连接客户端 Jedis：是老牌的Redis的Java实现客户端，提供了比较全面的Redis命令的支持 优势：比较全面的提...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Redis/redis-y-action-client.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"redis连接客户端选择：Jedis,Redisson,Lettuce"}],["meta",{"property":"og:description","content":"redis连接客户端选择：Jedis,Redisson,Lettuce 在spring boot2之后，对redis连接的支持，默认就采用了lettuce。这就一定程度说明了lettuce 和Jedis的优劣。 1. redis 常见连接客户端 Jedis：是老牌的Redis的Java实现客户端，提供了比较全面的Redis命令的支持 优势：比较全面的提..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131026503.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"redis连接客户端选择：Jedis,Redisson,Lettuce\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131026503.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. redis 常见连接客户端","slug":"_1-redis-常见连接客户端","link":"#_1-redis-常见连接客户端","children":[]},{"level":2,"title":"2. lettuce和jedis比较","slug":"_2-lettuce和jedis比较","link":"#_2-lettuce和jedis比较","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.88,"words":563},"filePathRelative":"posts/Redis/redis-y-action-client.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>在spring boot2之后，对redis连接的支持，默认就采用了lettuce。这就一定程度说明了lettuce 和Jedis的优劣。</p>\\n<h2>1. redis 常见连接客户端</h2>\\n<ul>\\n<li>\\n<p>Jedis：是老牌的Redis的Java实现客户端，提供了比较全面的Redis命令的支持</p>\\n<p>优势：比较全面的提供了Redis的操作特性</p>\\n</li>\\n<li>\\n<p>Redisson：实现了分布式和可扩展的Java数据结构。</p>\\n<p>优势：促使使用者对Redis的关注分离，提供很多分布式相关操作服务，例如，<strong>分布式锁，分布式集合，可通过Redis支持延迟队列</strong></p>\\n</li>\\n<li>\\n<p>Lettuce：高级Redis客户端，用于线程安全同步，异步和响应使用，支持集群，Sentinel，管道和编码器。</p>\\n<p>优势：<strong>基于Netty框架的事件驱动的通信层</strong>，其方法调用是异步的。Lettuce的API是<strong>线程安全</strong>的，所以可以操作单个Lettuce连接来完成各种操作</p>\\n</li>\\n</ul>","autoDesc":true}');export{c as comp,p as data};
