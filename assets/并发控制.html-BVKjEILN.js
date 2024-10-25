import{_ as l,c as a,a as i,o as n}from"./app-B1yAKrtW.js";const t={};function r(s,e){return n(),a("div",null,e[0]||(e[0]=[i('<h1 id="并发控制" tabindex="-1"><a class="header-anchor" href="#并发控制"><span>并发控制</span></a></h1><h2 id="多事务执行方式" tabindex="-1"><a class="header-anchor" href="#多事务执行方式"><span>多事务执行方式</span></a></h2><h3 id="_1-事务串行执行" tabindex="-1"><a class="header-anchor" href="#_1-事务串行执行"><span>(1)事务串行执行</span></a></h3><ul><li>每个时刻只有一个事务运行，其他事务必须等到这个事务结束以后方能运行</li><li>不能充分利用系统资源，发挥数据库共享资源的特点</li></ul><h3 id="_2-交叉并发方式-interleaved-concurrency" tabindex="-1"><a class="header-anchor" href="#_2-交叉并发方式-interleaved-concurrency"><span>(2)交叉并发方式（interleaved concurrency）</span></a></h3><ul><li>事务的并行执行是这些并行事务的并行操作轮流交叉运行</li><li>是单处理机系统中的并发方式，能够减少处理机的空闲时间，提高系统的效率</li></ul><h3 id="_3-同时并发方式-simultaneous-concurrency" tabindex="-1"><a class="header-anchor" href="#_3-同时并发方式-simultaneous-concurrency"><span>(3)同时并发方式（simultaneous concurrency）</span></a></h3><ul><li>多处理机系统中，每个处理机可以运行一个事务，多个处理机可以同时运行多个事务，实现多个事务真正的并行运行</li><li>最理想的并发方式，但受制于硬件环境</li><li>更复杂的并发方式机制</li></ul><h2 id="事务并发执行带来的问题" tabindex="-1"><a class="header-anchor" href="#事务并发执行带来的问题"><span>事务并发执行带来的问题</span></a></h2><ul><li>可能会存取和存储不正确的数据，破坏事务的隔离性和数据库的一致性</li><li>DBMS必须提供并发控制机制</li><li>并发控制机制是衡量一个DBMS性能的重要标志之一</li></ul><h2 id="并发控制机制的任务" tabindex="-1"><a class="header-anchor" href="#并发控制机制的任务"><span>并发控制机制的任务</span></a></h2><h3 id="对并发操作进行正确调度" tabindex="-1"><a class="header-anchor" href="#对并发操作进行正确调度"><span>对并发操作进行正确调度</span></a></h3><h3 id="保证事务的隔离性" tabindex="-1"><a class="header-anchor" href="#保证事务的隔离性"><span>保证事务的隔离性</span></a></h3><h3 id="保证数据库的一致性" tabindex="-1"><a class="header-anchor" href="#保证数据库的一致性"><span>保证数据库的一致性</span></a></h3><h2 id="并发操作带来的数据不一致性" tabindex="-1"><a class="header-anchor" href="#并发操作带来的数据不一致性"><span>并发操作带来的数据不一致性</span></a></h2><h3 id="丢失修改-lost-update" tabindex="-1"><a class="header-anchor" href="#丢失修改-lost-update"><span>丢失修改（lost update）</span></a></h3><ul><li>丢失修改是指事务1与事务2从数据库中读入同一数据并修改</li><li>事务2的提交结果破坏了事务1提交的结果，导致事务1的修改被丢失。</li></ul><h3 id="不可重复读-non-repeatable-read" tabindex="-1"><a class="header-anchor" href="#不可重复读-non-repeatable-read"><span>不可重复读（non-repeatable read）</span></a></h3><ul><li>不可重复读是指事务1读取数据后，事务2执行更新操作，使事务1无法再现前一次读取结果。</li></ul><h3 id="读-脏-数据-dirty-read" tabindex="-1"><a class="header-anchor" href="#读-脏-数据-dirty-read"><span>读“脏”数据（dirty read）</span></a></h3><ul><li>事务1修改某一数据，并将其写回磁盘</li><li>事务2读取同一数据后</li><li>事务1由于某种原因被撤消，这时事务1已修改过的数据恢复原值</li><li>事务2读到的数据就与数据库中的数据不一致，</li><li>是不正确的数据，又称为“脏”数据。</li></ul><h2 id="封锁" tabindex="-1"><a class="header-anchor" href="#封锁"><span>封锁</span></a></h2><h3 id="什么是封锁" tabindex="-1"><a class="header-anchor" href="#什么是封锁"><span>什么是封锁</span></a></h3><ul><li>封锁就是事务T在对某个数据对象（例如表、记录等）操作之前，先向系统发出请求，对其加锁</li><li>加锁后事务T就对该数据对象有了一定的控制，在事务T释放它的锁之前，其它的事务不能更新此数据对象。</li><li>封锁是实现并发控制的一个非常重要的技术</li></ul><h3 id="基本封锁类型" tabindex="-1"><a class="header-anchor" href="#基本封锁类型"><span>基本封锁类型</span></a></h3><ul><li>排它锁（eXclusive lock，简记为X锁） <ul><li>排它锁又称为写锁</li><li>若事务T对数据对象A加上X锁，则只允许T读取和修改A，其它任何事务都不能再对A加任何类型的锁，直到T释放A上的锁</li></ul></li><li>共享锁（Share lock，简记为S锁） <ul><li>共享锁又称为读锁</li><li>若事务T对数据对象A加上S锁，则其它事务只能再对A加S锁，而不能加X锁，直到T释放A上的S锁</li></ul></li></ul><h3 id="基本锁的相容矩阵" tabindex="-1"><a class="header-anchor" href="#基本锁的相容矩阵"><span>基本锁的相容矩阵</span></a></h3><h3 id="封锁协议" tabindex="-1"><a class="header-anchor" href="#封锁协议"><span>封锁协议</span></a></h3><ul><li>1级封锁协议 <ul><li>事务T在修改数据R之前必须先对其加X锁，直到事务结束才释放</li><li>1级封锁协议可防止丢失修改</li><li>在1级封锁协议中，如果是读数据，不需要加锁的，所以它不能保证可重复读和不读“脏”数据。 <ul><li>读“脏”数据</li><li>不可重复读</li></ul></li></ul></li><li>2级封锁协议 <ul><li>1级封锁协议+事务T在读取数据R前必须先加S锁，读完后即可释放S锁</li><li>2级封锁协议可以防止丢失修改和读“脏”数据。</li><li>在2级封锁协议中，由于读完数据后即可释放S锁，所以它不能保证可重复读。</li></ul></li><li>3级封锁协议 <ul><li>1级封锁协议 + 事务T在读取数据R之前必须先对其加S锁，直到事务结束才释放</li><li>3级封锁协议可防止丢失修改、读脏数据和不可重复读。</li></ul></li><li>三级协议的主要区别<br><em>XMind: ZEN - Trial Version</em></li></ul>',29)]))}const h=l(t,[["render",r],["__file","并发控制.html.vue"]]),d=JSON.parse('{"path":"/posts/Database/MySQL/%E5%B9%B6%E5%8F%91%E6%8E%A7%E5%88%B6.html","title":"8、并发控制","lang":"zh-CN","frontmatter":{"title":"8、并发控制","date":"2024-03-10 13:59","category":["数据库"],"tag":["MySQL"],"description":"并发控制 多事务执行方式 (1)事务串行执行 每个时刻只有一个事务运行，其他事务必须等到这个事务结束以后方能运行 不能充分利用系统资源，发挥数据库共享资源的特点 (2)交叉并发方式（interleaved concurrency） 事务的并行执行是这些并行事务的并行操作轮流交叉运行 是单处理机系统中的并发方式，能够减少处理机的空闲时间，提高系统的效率 ...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/MySQL/%E5%B9%B6%E5%8F%91%E6%8E%A7%E5%88%B6.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"8、并发控制"}],["meta",{"property":"og:description","content":"并发控制 多事务执行方式 (1)事务串行执行 每个时刻只有一个事务运行，其他事务必须等到这个事务结束以后方能运行 不能充分利用系统资源，发挥数据库共享资源的特点 (2)交叉并发方式（interleaved concurrency） 事务的并行执行是这些并行事务的并行操作轮流交叉运行 是单处理机系统中的并发方式，能够减少处理机的空闲时间，提高系统的效率 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-25T09:16:19.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2024-03-10T13:59:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-25T09:16:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"8、并发控制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-10T13:59:00.000Z\\",\\"dateModified\\":\\"2024-10-25T09:16:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"多事务执行方式","slug":"多事务执行方式","link":"#多事务执行方式","children":[{"level":3,"title":"(1)事务串行执行","slug":"_1-事务串行执行","link":"#_1-事务串行执行","children":[]},{"level":3,"title":"(2)交叉并发方式（interleaved concurrency）","slug":"_2-交叉并发方式-interleaved-concurrency","link":"#_2-交叉并发方式-interleaved-concurrency","children":[]},{"level":3,"title":"(3)同时并发方式（simultaneous  concurrency）","slug":"_3-同时并发方式-simultaneous-concurrency","link":"#_3-同时并发方式-simultaneous-concurrency","children":[]}]},{"level":2,"title":"事务并发执行带来的问题","slug":"事务并发执行带来的问题","link":"#事务并发执行带来的问题","children":[]},{"level":2,"title":"并发控制机制的任务","slug":"并发控制机制的任务","link":"#并发控制机制的任务","children":[{"level":3,"title":"对并发操作进行正确调度","slug":"对并发操作进行正确调度","link":"#对并发操作进行正确调度","children":[]},{"level":3,"title":"保证事务的隔离性","slug":"保证事务的隔离性","link":"#保证事务的隔离性","children":[]},{"level":3,"title":"保证数据库的一致性","slug":"保证数据库的一致性","link":"#保证数据库的一致性","children":[]}]},{"level":2,"title":"并发操作带来的数据不一致性","slug":"并发操作带来的数据不一致性","link":"#并发操作带来的数据不一致性","children":[{"level":3,"title":"丢失修改（lost update）","slug":"丢失修改-lost-update","link":"#丢失修改-lost-update","children":[]},{"level":3,"title":"不可重复读（non-repeatable read）","slug":"不可重复读-non-repeatable-read","link":"#不可重复读-non-repeatable-read","children":[]},{"level":3,"title":"读“脏”数据（dirty read）","slug":"读-脏-数据-dirty-read","link":"#读-脏-数据-dirty-read","children":[]}]},{"level":2,"title":"封锁","slug":"封锁","link":"#封锁","children":[{"level":3,"title":"什么是封锁","slug":"什么是封锁","link":"#什么是封锁","children":[]},{"level":3,"title":"基本封锁类型","slug":"基本封锁类型","link":"#基本封锁类型","children":[]},{"level":3,"title":"基本锁的相容矩阵","slug":"基本锁的相容矩阵","link":"#基本锁的相容矩阵","children":[]},{"level":3,"title":"封锁协议","slug":"封锁协议","link":"#封锁协议","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729847779000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":2}]},"readingTime":{"minutes":3.6,"words":1080},"filePathRelative":"posts/Database/MySQL/并发控制.md","localizedDate":"2024年3月10日","excerpt":"\\n<h2>多事务执行方式</h2>\\n<h3>(1)事务串行执行</h3>\\n<ul>\\n<li>每个时刻只有一个事务运行，其他事务必须等到这个事务结束以后方能运行</li>\\n<li>不能充分利用系统资源，发挥数据库共享资源的特点</li>\\n</ul>\\n<h3>(2)交叉并发方式（interleaved concurrency）</h3>\\n<ul>\\n<li>事务的并行执行是这些并行事务的并行操作轮流交叉运行</li>\\n<li>是单处理机系统中的并发方式，能够减少处理机的空闲时间，提高系统的效率</li>\\n</ul>\\n<h3>(3)同时并发方式（simultaneous  concurrency）</h3>","autoDesc":true}');export{h as comp,d as data};
