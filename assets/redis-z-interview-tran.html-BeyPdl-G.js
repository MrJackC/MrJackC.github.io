import{_ as a,c as i,a as n,o as e}from"./app-DEK5G3U7.js";const l={};function r(p,s){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="redis面试-事务" tabindex="-1"><a class="header-anchor" href="#redis面试-事务"><span>Redis面试 - 事务</span></a></h1><h2 id="_1-什么是redis事务" tabindex="-1"><a class="header-anchor" href="#_1-什么是redis事务"><span>1 什么是redis事务？</span></a></h2><p>Redis 事务的本质是一组命令的集合。事务支持一次执行多个命令，一个事务中所有命令都会被序列化。在事务执行过程，会按照顺序串行化执行队列中的命令，其他客户端提交的命令请求不会插入到事务执行命令序列中。</p><p>总结说：redis事务就是一次性、顺序性、排他性的执行一个队列中的一系列命令。</p><h2 id="_2-redis事务相关命令" tabindex="-1"><a class="header-anchor" href="#_2-redis事务相关命令"><span>2 Redis事务相关命令？</span></a></h2><p>MULTI 、 EXEC 、 DISCARD 和 WATCH 是 Redis 事务相关的命令。</p><ul><li>MULTI ：开启事务，redis会将后续的命令逐个放入队列中，然后使用EXEC命令来原子化执行这个命令系列。</li><li>EXEC：执行事务中的所有操作命令。</li><li>DISCARD：取消事务，放弃执行事务块中的所有命令。</li><li>WATCH：监视一个或多个key,如果事务在执行前，这个key(或多个key)被其他命令修改，则事务被中断，不会执行事务中的任何命令。</li><li>UNWATCH：取消WATCH对所有key的监视</li></ul><h2 id="_3-redis事务的三个阶段" tabindex="-1"><a class="header-anchor" href="#_3-redis事务的三个阶段"><span>3 Redis事务的三个阶段？</span></a></h2><p>Redis事务执行是三个阶段：</p><ul><li><strong>开启</strong>：以MULTI开始一个事务</li><li><strong>入队</strong>：将多个命令入队到事务中，接到这些命令并不会立即执行，而是放到等待执行的事务队列里面</li><li><strong>执行</strong>：由EXEC命令触发事务</li></ul><p>当一个客户端切换到事务状态之后， 服务器会根据这个客户端发来的不同命令执行不同的操作：</p><ul><li>如果客户端发送的命令为 EXEC 、 DISCARD 、 WATCH 、 MULTI 四个命令的其中一个， 那么服务器立即执行这个命令。</li><li>与此相反， 如果客户端发送的命令是 EXEC 、 DISCARD 、 WATCH 、 MULTI 四个命令以外的其他命令， 那么服务器并不立即执行这个命令， 而是将这个命令放入一个事务队列里面， 然后向客户端返回 QUEUED 回复。</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131044332.png" alt="image-20220628223526301" tabindex="0" loading="lazy"><figcaption>image-20220628223526301</figcaption></figure><h2 id="_4-redis事务其它实现" tabindex="-1"><a class="header-anchor" href="#_4-redis事务其它实现"><span>4 Redis事务其它实现？</span></a></h2><ul><li>基于Lua脚本，Redis可以保证脚本内的命令一次性、按顺序地执行，其同时也不提供事务运行错误的回滚，执行过程中如果部分命令运行错误，剩下的命令还是会继续运行完</li><li>基于中间标记变量，通过另外的标记变量来标识事务是否执行完成，读取数据时先读取该标记变量判断是否事务执行完成。但这样会需要额外写代码实现，比较繁琐</li></ul><h2 id="_5-redis事务中出现错误的处理" tabindex="-1"><a class="header-anchor" href="#_5-redis事务中出现错误的处理"><span>5 Redis事务中出现错误的处理？</span></a></h2><ul><li><strong>语法错误（编译器错误）</strong></li></ul><p>在开启事务后，修改k1值为11，k2值为22，但k2语法错误，<strong>最终导致事务提交失败，k1、k2保留原值</strong>。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">set</span><span style="color:#98C379;--shiki-dark:#98C379;"> k1</span><span style="color:#98C379;--shiki-dark:#98C379;"> v1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">OK</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">set</span><span style="color:#98C379;--shiki-dark:#98C379;"> k2</span><span style="color:#98C379;--shiki-dark:#98C379;"> v2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">OK</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">MULTI</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">OK</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">set</span><span style="color:#98C379;--shiki-dark:#98C379;"> k1</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 11</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">QUEUED</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">sets</span><span style="color:#98C379;--shiki-dark:#98C379;"> k2</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 22</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">error</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">ERR</span><span style="color:#98C379;--shiki-dark:#98C379;"> unknown</span><span style="color:#98C379;--shiki-dark:#98C379;"> command</span><span style="color:#98C379;--shiki-dark:#98C379;"> \`</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sets</span><span style="color:#98C379;--shiki-dark:#98C379;">\`</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;"> with</span><span style="color:#98C379;--shiki-dark:#98C379;"> args</span><span style="color:#98C379;--shiki-dark:#98C379;"> beginning</span><span style="color:#98C379;--shiki-dark:#98C379;"> with:</span><span style="color:#98C379;--shiki-dark:#98C379;"> \`</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">k2</span><span style="color:#98C379;--shiki-dark:#98C379;">\`</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;"> \`</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">22</span><span style="color:#98C379;--shiki-dark:#98C379;">\`</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">,</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">exec</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">error</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">EXECABORT</span><span style="color:#98C379;--shiki-dark:#98C379;"> Transaction</span><span style="color:#98C379;--shiki-dark:#98C379;"> discarded</span><span style="color:#98C379;--shiki-dark:#98C379;"> because</span><span style="color:#98C379;--shiki-dark:#98C379;"> of</span><span style="color:#98C379;--shiki-dark:#98C379;"> previous</span><span style="color:#98C379;--shiki-dark:#98C379;"> errors.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">get</span><span style="color:#98C379;--shiki-dark:#98C379;"> k1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;v1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">get</span><span style="color:#98C379;--shiki-dark:#98C379;"> k2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;v2&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Redis类型错误（运行时错误）</strong></li></ul><p>在开启事务后，修改k1值为11，k2值为22，但将k2的类型作为List，<strong>在运行时检测类型错误，最终导致事务提交失败，此时事务并没有回滚，而是跳过错误命令继续执行</strong>， 结果k1值改变、k2保留原值</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">set</span><span style="color:#98C379;--shiki-dark:#98C379;"> k1</span><span style="color:#98C379;--shiki-dark:#98C379;"> v1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">OK</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">set</span><span style="color:#98C379;--shiki-dark:#98C379;"> k1</span><span style="color:#98C379;--shiki-dark:#98C379;"> v2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">OK</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">MULTI</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">OK</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">set</span><span style="color:#98C379;--shiki-dark:#98C379;"> k1</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 11</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">QUEUED</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">lpush</span><span style="color:#98C379;--shiki-dark:#98C379;"> k2</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 22</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">QUEUED</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">EXEC</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) OK</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) (</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">error</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) WRONGTYPE Operation against a key holding the wrong kind of value</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">get</span><span style="color:#98C379;--shiki-dark:#98C379;"> k1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;11&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">get</span><span style="color:#98C379;--shiki-dark:#98C379;"> k2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;v2&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-redis事务中watch是如何监视实现的呢" tabindex="-1"><a class="header-anchor" href="#_6-redis事务中watch是如何监视实现的呢"><span>6 Redis事务中watch是如何监视实现的呢？</span></a></h2><p>Redis使用WATCH命令来决定事务是继续执行还是回滚，那就需要在MULTI之前使用WATCH来监控某些键值对，然后使用MULTI命令来开启事务，执行对数据结构操作的各种命令，此时这些命令入队列。</p><p>当使用EXEC执行事务时，首先会比对WATCH所监控的键值对，如果没发生改变，它会执行事务队列中的命令，提交事务；如果发生变化，将不会执行事务中的任何命令，同时事务回滚。当然无论是否回滚，Redis都会取消执行事务前的WATCH命令。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131044393.png" alt="image-20220628223740040" tabindex="0" loading="lazy"><figcaption>image-20220628223740040</figcaption></figure><h2 id="_7-为什么-redis-不支持回滚" tabindex="-1"><a class="header-anchor" href="#_7-为什么-redis-不支持回滚"><span>7 为什么 Redis 不支持回滚？</span></a></h2><p>以下是这种做法的优点：</p><ul><li>Redis 命令只会因为错误的语法而失败（并且这些问题不能在入队时发现），或是命令用在了错误类型的键上面：这也就是说，从实用性的角度来说，失败的命令是由编程错误造成的，而这些错误应该在开发的过程中被发现，而不应该出现在生产环境中。</li><li>因为不需要对回滚进行支持，所以 Redis 的内部可以保持简单且快速。</li></ul><p>有种观点认为 Redis 处理事务的做法会产生 bug ， 然而需要注意的是， 在通常情况下， <strong>回滚并不能解决编程错误带来的问题</strong>。 举个例子， 如果你本来想通过 INCR 命令将键的值加上 1 ， 却不小心加上了 2 ， 又或者对错误类型的键执行了 INCR ， 回滚是没有办法处理这些情况的。</p><h2 id="_8-redis-对-acid的支持性理解" tabindex="-1"><a class="header-anchor" href="#_8-redis-对-acid的支持性理解"><span>8 Redis 对 ACID的支持性理解？</span></a></h2><ul><li><strong>原子性atomicity</strong></li></ul><p>首先通过上文知道 运行期的错误是不会回滚的，很多文章由此说Redis事务违背原子性的；而官方文档认为是遵从原子性的。</p><p>Redis官方文档给的理解是，<strong>Redis的事务是原子性的：所有的命令，要么全部执行，要么全部不执行</strong>。而不是完全成功。</p><ul><li><strong>一致性consistency</strong></li></ul><p>redis事务可以保证命令失败的情况下得以回滚，数据能恢复到没有执行之前的样子，是保证一致性的，除非redis进程意外终结。</p><ul><li><strong>隔离性Isolation</strong></li></ul><p>redis事务是严格遵守隔离性的，原因是redis是单进程单线程模式(v6.0之前），可以保证命令执行过程中不会被其他客户端命令打断。</p><p>但是，Redis不像其它结构化数据库有隔离级别这种设计。</p><ul><li><strong>持久性Durability</strong></li></ul><p><strong>redis事务是不保证持久性的</strong>，这是因为redis持久化策略中不管是RDB还是AOF都是异步执行的，不保证持久性是出于对性能的考虑。</p><h2 id="_9-redis事务其他实现" tabindex="-1"><a class="header-anchor" href="#_9-redis事务其他实现"><span>9 Redis事务其他实现？</span></a></h2><p>基于Lua脚本，Redis可以保证脚本内的命令一次性、按顺序地执行，其同时也不提供事务运行错误的回滚，执行过程中如果部分命令运行错误，剩下的命令还是会继续运行完</p><p>基于中间标记变量，通过另外的标记变量来标识事务是否执行完成，读取数据时先读取该标记变量判断是否事务执行完成。但这样会需要额外写代码实现，比较繁琐</p>`,44)]))}const o=a(l,[["render",r],["__file","redis-z-interview-tran.html.vue"]]),t=JSON.parse('{"path":"/posts/Redis/redis-z-interview-tran.html","title":"Redis面试 - 事务","lang":"zh-CN","frontmatter":{"aliases":"Redis面试 - 事务","tags":null,"cssclass":null,"source":null,"order":1060,"category":["数据库","Redis"],"created":"2024-02-22 10:49","updated":"2024-03-13 10:48","description":"Redis面试 - 事务 1 什么是redis事务？ Redis 事务的本质是一组命令的集合。事务支持一次执行多个命令，一个事务中所有命令都会被序列化。在事务执行过程，会按照顺序串行化执行队列中的命令，其他客户端提交的命令请求不会插入到事务执行命令序列中。 总结说：redis事务就是一次性、顺序性、排他性的执行一个队列中的一系列命令。 2 Redis事...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Redis/redis-z-interview-tran.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis面试 - 事务"}],["meta",{"property":"og:description","content":"Redis面试 - 事务 1 什么是redis事务？ Redis 事务的本质是一组命令的集合。事务支持一次执行多个命令，一个事务中所有命令都会被序列化。在事务执行过程，会按照顺序串行化执行队列中的命令，其他客户端提交的命令请求不会插入到事务执行命令序列中。 总结说：redis事务就是一次性、顺序性、排他性的执行一个队列中的一系列命令。 2 Redis事..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131044332.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis面试 - 事务\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131044332.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131044393.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1 什么是redis事务？","slug":"_1-什么是redis事务","link":"#_1-什么是redis事务","children":[]},{"level":2,"title":"2 Redis事务相关命令？","slug":"_2-redis事务相关命令","link":"#_2-redis事务相关命令","children":[]},{"level":2,"title":"3 Redis事务的三个阶段？","slug":"_3-redis事务的三个阶段","link":"#_3-redis事务的三个阶段","children":[]},{"level":2,"title":"4 Redis事务其它实现？","slug":"_4-redis事务其它实现","link":"#_4-redis事务其它实现","children":[]},{"level":2,"title":"5 Redis事务中出现错误的处理？","slug":"_5-redis事务中出现错误的处理","link":"#_5-redis事务中出现错误的处理","children":[]},{"level":2,"title":"6 Redis事务中watch是如何监视实现的呢？","slug":"_6-redis事务中watch是如何监视实现的呢","link":"#_6-redis事务中watch是如何监视实现的呢","children":[]},{"level":2,"title":"7 为什么 Redis 不支持回滚？","slug":"_7-为什么-redis-不支持回滚","link":"#_7-为什么-redis-不支持回滚","children":[]},{"level":2,"title":"8 Redis 对 ACID的支持性理解？","slug":"_8-redis-对-acid的支持性理解","link":"#_8-redis-对-acid的支持性理解","children":[]},{"level":2,"title":"9 Redis事务其他实现？","slug":"_9-redis事务其他实现","link":"#_9-redis事务其他实现","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.12,"words":1837},"filePathRelative":"posts/Redis/redis-z-interview-tran.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1 什么是redis事务？</h2>\\n<p>Redis 事务的本质是一组命令的集合。事务支持一次执行多个命令，一个事务中所有命令都会被序列化。在事务执行过程，会按照顺序串行化执行队列中的命令，其他客户端提交的命令请求不会插入到事务执行命令序列中。</p>\\n<p>总结说：redis事务就是一次性、顺序性、排他性的执行一个队列中的一系列命令。</p>\\n<h2>2 Redis事务相关命令？</h2>\\n<p>MULTI 、 EXEC 、 DISCARD 和 WATCH 是 Redis 事务相关的命令。</p>\\n<ul>\\n<li>MULTI ：开启事务，redis会将后续的命令逐个放入队列中，然后使用EXEC命令来原子化执行这个命令系列。</li>\\n<li>EXEC：执行事务中的所有操作命令。</li>\\n<li>DISCARD：取消事务，放弃执行事务块中的所有命令。</li>\\n<li>WATCH：监视一个或多个key,如果事务在执行前，这个key(或多个key)被其他命令修改，则事务被中断，不会执行事务中的任何命令。</li>\\n<li>UNWATCH：取消WATCH对所有key的监视</li>\\n</ul>","autoDesc":true}');export{o as comp,t as data};
