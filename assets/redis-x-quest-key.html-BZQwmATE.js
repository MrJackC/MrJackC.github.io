import{_ as t,c as r,a as s,o}from"./app-CpAF2rca.js";const a={};function i(n,e){return o(),r("div",null,e[0]||(e[0]=[s('<h1 id="如何解决-redis-的并发竞争-key-问题" tabindex="-1"><a class="header-anchor" href="#如何解决-redis-的并发竞争-key-问题"><span>如何解决 Redis 的并发竞争 Key 问题</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>所谓 redis 的并发竞争 key 的问题也就是多个系统同时对一个key 进行操作，但是最后执行的顺序和我们期望的顺序不同，这样也就导致了结果的不同</p><h2 id="_2-解决方案" tabindex="-1"><a class="header-anchor" href="#_2-解决方案"><span>2.解决方案</span></a></h2><h2 id="_2-1-分布式锁" tabindex="-1"><a class="header-anchor" href="#_2-1-分布式锁"><span>2.1 分布式锁</span></a></h2><p>分布式锁（zookeeper 和 redis 都可以实现分布式锁）。（如果不存在 Redis 的并发竞争 Key 问题，不要使用分布式锁，这样会影响性能）</p><blockquote><p>基于zookeeper临时有序节点可以实现的分布式锁。大致思想为：每个客户端对某个方法加锁时，在zookeeper上的与该方法对应的指定节点的目录下，生成一个唯一的瞬时有序节点。 判断是否获取锁的方式很简单，只需要判断有序节点中序号最小的一个。 当释放锁的时候，只需将这个瞬时节点删除即可。同时，其可以避免服务宕机导致的锁无法释放，而产生的死锁问题。完成业务流程后，删除对应的子节点释放锁。</p><p>在实践中，当然是从以可靠性为主。所以首推Zookeeper。</p></blockquote>',7)]))}const d=t(a,[["render",i],["__file","redis-x-quest-key.html.vue"]]),l=JSON.parse('{"path":"/posts/Redis/redis-x-quest-key.html","title":"如何解决 Redis 的并发竞争 Key 问题","lang":"zh-CN","frontmatter":{"aliases":"如何解决 Redis 的并发竞争 Key 问题","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:24","description":"如何解决 Redis 的并发竞争 Key 问题 1. 简介 所谓 redis 的并发竞争 key 的问题也就是多个系统同时对一个key 进行操作，但是最后执行的顺序和我们期望的顺序不同，这样也就导致了结果的不同 2.解决方案 2.1 分布式锁 分布式锁（zookeeper 和 redis 都可以实现分布式锁）。（如果不存在 Redis 的并发竞争 Ke...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Redis/redis-x-quest-key.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"如何解决 Redis 的并发竞争 Key 问题"}],["meta",{"property":"og:description","content":"如何解决 Redis 的并发竞争 Key 问题 1. 简介 所谓 redis 的并发竞争 key 的问题也就是多个系统同时对一个key 进行操作，但是最后执行的顺序和我们期望的顺序不同，这样也就导致了结果的不同 2.解决方案 2.1 分布式锁 分布式锁（zookeeper 和 redis 都可以实现分布式锁）。（如果不存在 Redis 的并发竞争 Ke..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何解决 Redis 的并发竞争 Key 问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2.解决方案","slug":"_2-解决方案","link":"#_2-解决方案","children":[]},{"level":2,"title":"2.1 分布式锁","slug":"_2-1-分布式锁","link":"#_2-1-分布式锁","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.14,"words":342},"filePathRelative":"posts/Redis/redis-x-quest-key.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>所谓 redis 的并发竞争 key 的问题也就是多个系统同时对一个key 进行操作，但是最后执行的顺序和我们期望的顺序不同，这样也就导致了结果的不同</p>\\n<h2>2.解决方案</h2>\\n<h2>2.1 分布式锁</h2>\\n<p>分布式锁（zookeeper 和 redis 都可以实现分布式锁）。（如果不存在 Redis 的并发竞争 Key 问题，不要使用分布式锁，这样会影响性能）</p>\\n<blockquote>\\n<p>基于zookeeper临时有序节点可以实现的分布式锁。大致思想为：每个客户端对某个方法加锁时，在zookeeper上的与该方法对应的指定节点的目录下，生成一个唯一的瞬时有序节点。 判断是否获取锁的方式很简单，只需要判断有序节点中序号最小的一个。 当释放锁的时候，只需将这个瞬时节点删除即可。同时，其可以避免服务宕机导致的锁无法释放，而产生的死锁问题。完成业务流程后，删除对应的子节点释放锁。</p>\\n<p>在实践中，当然是从以可靠性为主。所以首推Zookeeper。</p>\\n</blockquote>","autoDesc":true}');export{d as comp,l as data};
