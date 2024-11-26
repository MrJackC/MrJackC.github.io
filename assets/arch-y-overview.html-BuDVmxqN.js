import{_ as t,c as n,a as r,o as a}from"./app-JRvFIbSa.js";const s={};function p(l,e){return a(),n("div",null,e[0]||(e[0]=[r('<h1 id="架构-高并发-概述" tabindex="-1"><a class="header-anchor" href="#架构-高并发-概述"><span>架构-高并发：概述</span></a></h1><blockquote><p><strong>摘要</strong>：本文介绍高并发系统的度量指标，讲述高并发系统的设计思路，再梳理高并发的关键技术，最后结合作者的经验做一些延伸探讨。</p></blockquote><p>当前，数字化在给企业带来业务创新，推动企业高速发展的同时，也给企业的IT软件系统带来了严峻的挑战。面对流量高峰，不同的企业是如何通过技术手段解决高并发难题的呢?</p><h2 id="_0-引言" tabindex="-1"><a class="header-anchor" href="#_0-引言"><span>0. 引言</span></a></h2><p>软件系统有三个追求：<strong>高性能、高并发、高可用</strong>，俗称三高。三者既有区别也有联系，门门道道很多，全面讨论需要三天三夜，本篇讨论高并发。</p><p><strong>高并发（High Concurrency）</strong>。并发是操作系统领域的一个概念，指的是一段时间内多任务流交替执行的现象，后来这个概念被泛化，高并发用来指大流量、高请求的业务情景，比如春运抢票，电商双十一，秒杀大促等场景。</p><p>很多程序员每天忙着搬砖，平时接触不到高并发，哪天受不了跑去面试，还常常会被面试官犀利的高并发问题直接KO，其实吧，高并发系统也不高深，我保证任何一个智商在线的看过这篇文章后，都能战胜恐惧，重拾生活的信心。</p><p>本文先介绍高并发系统的度量指标，然后讲述高并发系统的设计思路，再梳理高并发的关键技术，最后结合作者的经验做一些延伸探讨。</p><h2 id="_1-高并发的度量指标" tabindex="-1"><a class="header-anchor" href="#_1-高并发的度量指标"><span>1. 高并发的度量指标</span></a></h2><p>既然是高并发系统，那并发一定要高，不然就名不副实。并发的指标一般有<strong>QPS、TPS、IOPS</strong>，这几个指标都是可归为<strong>系统吞吐率</strong>，QPS越高系统能hold住的请求数越多，但光关注这几个指标不够，我们还需要关注RT，即响应时间，也就是从发出request到收到response的时延，这个指标跟吞吐往往是此消彼长的，我们追求的是一定时延下的高吞吐。</p><p>比如有100万次请求，99万次请求都在10毫秒内响应，其他次数10秒才响应，平均时延不高，但时延高的用户受不了，所以，就有了<strong>TP90/TP99指标</strong>，这个指标不是求平均，而是把时延从小到大排序，取排名90%/99%的时延，这个指标越大，对慢请求越敏感。</p><p>除此之外，有时候，我们也会关注可用性指标，这可归到稳定性。</p><p>一般而言，用户感知友好的高并发系统，时延应该控制在250毫秒以内。</p><p>什么样的系统才能称为高并发？这个不好回答，因为它取决于系统或者业务的类型。不过我可以告诉你一些众所周知的指标，这样能帮助你下次在跟人扯淡的时候稍微靠点儿谱，不至于贻笑大方。</p><p>通常，数据库单机每秒也就能抗住几千这个量级，而做逻辑处理的服务单台每秒抗几万、甚至几十万都有可能，而消息队列等中间件单机每秒处理个几万没问题，所以我们经常听到每秒处理数百万、数千万的消息中间件集群，而像阿某的API网关，每日百亿请求也有可能。</p><h2 id="_2-高并发的设计思路" tabindex="-1"><a class="header-anchor" href="#_2-高并发的设计思路"><span>2. 高并发的设计思路</span></a></h2><p>高并发的设计思路有两个方向：</p><ol><li>垂直方向扩展，也叫竖向扩展</li><li>水平方向扩展，也叫横向扩展</li></ol><h3 id="_2-1-垂直方向-提升单机能力" tabindex="-1"><a class="header-anchor" href="#_2-1-垂直方向-提升单机能力"><span>2.1 垂直方向：提升单机能力</span></a></h3><p>提升单机处理能力又可分为硬件和软件两个方面：</p><ul><li>硬件方向，很好理解，花钱升级机器，更多核更高主频更大存储空间更多带宽</li><li>软件方向，包括用各快的数据结构，改进架构，应用多线程、协程，以及上性能优化各种手段，但这玩意儿天花板低，就像提升个人产出一样，996、007、最多24 X 7。</li></ul><h3 id="_2-2-水平方向-分布式集群" tabindex="-1"><a class="header-anchor" href="#_2-2-水平方向-分布式集群"><span>2.2 水平方向：分布式集群</span></a></h3><p>为了解决分布式系统的复杂性问题，一般会用到<strong>架构分层和服务拆分</strong>，通过分层做<strong>隔离</strong>，通过微服务<strong>解耦</strong>。</p><p>这个理论上没有上限，只要做好层次和服务划分，加机器扩容就能满足需求，但实际上并非如此，一方面分布式会增加系统复杂性，另一方面集群规模上去之后，也会引入一堆AIOps、服务发现、服务治理的新问题。</p><p>因为垂直向的限制，所以，我们通常更关注水平扩展，高并发系统的实施也主要围绕水平方向展开。</p><h2 id="_3-高并发的关键技术" tabindex="-1"><a class="header-anchor" href="#_3-高并发的关键技术"><span>3. 高并发的关键技术</span></a></h2><p>玩具式的网络服务程序，用户可以直连服务器，甚至不需要数据库，直接写磁盘文件。但春运购票系统显然不能这么做，它肯定扛不住这个压力，那一般的高并发系统是怎么做呢？比如某宝这样的正经系统是怎么处理高并发的呢？</p><p>其实大的思路都差不多，层次划分 + 功能划分。可以把层次划分理解为水平方向的划分，而功能划分理解为垂直方向的划分。</p><p>首先，用户不能直连服务器，要做分布式就要解决“分”的问题，有多个服务实例就需要做负载均衡，有不同服务类型就需要服务发现。</p><h3 id="_3-1-集群化-负载均衡" tabindex="-1"><a class="header-anchor" href="#_3-1-集群化-负载均衡"><span>3.1 集群化：负载均衡</span></a></h3><p>负载均衡就是把负载（request）均衡分配到不同的服务实例，利用集群的能力去对抗高并发，负载均衡是服务集群化的实施要素，它分3种：</p><ol><li><strong>DNS负载均衡</strong>，客户端通过URL发起网络服务请求的时候，会去DNS服务器做域名解释，DNS会按一定的策略（比如就近策略）把URL转换成IP地址，同一个URL会被解释成不同的IP地址，这便是DNS负载均衡，它是一种粗粒度的负载均衡，它只用URL前半部分，因为DNS负载均衡一般采用就近原则，所以通常能降低时延，但DNS有cache，所以也会更新不及时的问题。</li><li><strong>硬件负载均衡</strong>，通过布置特殊的负载均衡设备到机房做负载均衡，比如F5，这种设备贵，性能高，可以支撑每秒百万并发，还能做一些安全防护，比如防火墙。</li><li><strong>软件负载均衡</strong>，根据工作在ISO 7层网络模型的层次，可分为四层负载均衡（比如章文嵩博士的LVS）和七层负载均衡（NGINX），软件负载均衡配置灵活，扩展性强，阿某云的SLB作为服务对外售卖，Nginx可以对URL的后半部做解释承担API网关的职责。</li></ol><p>所以，完整的负载均衡链路是 client &lt;-&gt; DNS负载均衡 -&gt; F5 -&gt; LVS/SLB -&gt; NGINX</p><p>不管选择哪种LB策略，或者组合LB策略，逻辑上，我们都可以视为负载均衡层，通过添加负载均衡层，我们将负载均匀分散到了后面的服务集群，具备基础的高并发能力，但这只是万里长征第一步。</p><h3 id="_3-2-数据库层面-分库分表-读写分离" tabindex="-1"><a class="header-anchor" href="#_3-2-数据库层面-分库分表-读写分离"><span>3.2 数据库层面：分库分表+读写分离</span></a></h3><p>前面通过<strong>负载均衡解决了无状态服务的水平扩展问题</strong>，但我们的系统不全是无状态的，后面通常还有有状态的数据库，所以解决了前面的问题，存储有可能成为系统的瓶颈，我们需要<strong>对有状态存储做分片路由</strong>。</p><p>数据库的单机QPS一般不高，也就几千，显然满足不了高并发的要求。</p><p>所以，我们需要做分库分表 + 读写分离。</p><p>就是把一个库分成多个库，部署在多个数据库服务上，主库承载写请求，从库承载读请求。从库可以挂载多个，因为很多场景写的请求远少于读的请求，这样就把对单个库的压力降下来了。</p><p>如果写的请求上升就继续分库分表，如果读的请求上升就挂更多的从库，但数据库天生不是很适合高并发，而且数据库对机器配置的要求一般很高，导致单位服务成本高，所以，这样加机器抗压力成本太高，还得另外想招。</p><h3 id="_3-3-读多写少-缓存" tabindex="-1"><a class="header-anchor" href="#_3-3-读多写少-缓存"><span>3.3 读多写少：缓存</span></a></h3><p>缓存的理论依据是<strong>局部性原理</strong>。</p><p>一般系统的写入请求远少于读请求，针对写少读多的场景，很适合引入缓存集群。</p><p>在写数据库的时候同时写一份数据到缓存集群里，然后用缓存集群来承载大部分的读请求，因为缓存集群很容易做到高性能，所以，这样的话，通过缓存集群，就可以用更少的机器资源承载更高的并发。</p><p>缓存的命中率一般能做到很高，而且速度很快，处理能力也强（单机很容易做到几万并发），是理想的解决方案。</p><p>CDN本质上就是缓存，被用户大量访问的静态资源缓存在CDN中是目前的通用做法。</p><h4 id="_3-3-1-缓存也有很多需要谨慎处理的问题" tabindex="-1"><a class="header-anchor" href="#_3-3-1-缓存也有很多需要谨慎处理的问题"><span>3.3.1 缓存也有很多需要谨慎处理的问题：</span></a></h4><ol><li><strong>一致性问题</strong>：(a)更新db成功+更新cache失败 -&gt; 不一致 (b)更新db失败+更新cache成功 -&gt; 不一致 ©更新db成功+淘汰缓存失败 -&gt; 不一致</li><li><strong>缓存穿透</strong>：查询一定不存在的数据，会穿透缓存直接压到数据库，从而导致缓存失去作用，如果有人利用这个漏洞，大量查询一定不存在的数据，会对数据库造成压力，甚至打挂数据库。解决方案：布隆过滤器 或者 简单的方案，查询不存在的key，也把空结果写入缓存（设置较短的过期淘汰时间），从而降低命失</li><li><strong>缓存雪崩</strong>：如果大量缓存在一个时刻同时失效，则请求会转到DB，则对DB形成压迫，导致雪崩。简单的解决方案是为缓存失效时间添加随机值，降低同一时间点失效淘汰缓存数，避免集体失效事件发生</li></ol><p>但缓存是针对读，如果写的压力很大，怎么办？</p><h3 id="_3-4-高写入-消息中间件" tabindex="-1"><a class="header-anchor" href="#_3-4-高写入-消息中间件"><span>3.4 高写入：消息中间件</span></a></h3><p>同理，通过跟主库加机器，耗费的机器资源是很大的，这个就是数据库系统的特点所决定的。</p><p>相同的资源下，数据库系统太重太复杂，所以并发承载能力就在几千/s的量级，所以此时你需要引入别的一些技术。</p><p>比如说消息中间件技术，也就是MQ集群，它是非常好的做写请求异步化处理，实现<strong>削峰填谷</strong>的效果。</p><p>消息队列能做<strong>解耦</strong>，在只需要最终一致性的场景下，很适合用来配合做流控。</p><p>假如说，每秒是1万次写请求，其中比如5千次请求是必须请求过来立马写入数据库中的，但是另外5千次写请求是可以允许异步化等待个几十秒，甚至几分钟后才落入数据库内的。</p><p>那么此时完全可以引入消息中间件集群，把允许异步化的每秒5千次请求写入MQ，然后基于MQ做一个削峰填谷。比如就以平稳的1000/s的速度消费出来然后落入数据库中即可，此时就会大幅度降低数据库的写入压力。</p><p>业界有很多著名的消息中间件，比如ZeroMQ，rabbitMQ，kafka等。</p><p>消息队列本身也跟缓存系统一样，可以用很少的资源支撑很高的并发请求，用它来支撑部分允许异步化的高并发写入是很合适的，比使用数据库直接支撑那部分高并发请求要减少很多的机器使用量。</p><h3 id="_3-5-避免挤兑-流控" tabindex="-1"><a class="header-anchor" href="#_3-5-避免挤兑-流控"><span>3.5 避免挤兑：流控</span></a></h3><p>再强大的系统，也怕流量短时间内集中爆发，就像银行怕挤兑一样，所以，高并发另一个必不可少的模块就是流控。</p><p>流控的关键是流控算法，有4种常见的流控算法。</p><ol><li><strong>计数器算法</strong>（固定窗口）：计数器算法是使用计数器在周期内累加访问次数，当达到设定的限流值时，触发限流策略，下一个周期开始时，进行清零，重新计数，实现简单。计数器算法方式限流对于周期比较长的限流，存在很大的弊端，有严重的临界问题。</li><li><strong>滑动窗口算法</strong>：将时间周期分为N个小周期，分别记录每个小周期内访问次数，并且根据时间滑动删除过期的小周期，当滑动窗口的格子划分的越多，那么滑动窗口的滚动就越平滑，限流的统计就会越精确。此算法可以很好的解决固定窗口算法的临界问题。</li><li><strong>漏桶算法</strong>：访问请求到达时直接放入漏桶，如当前容量已达到上限（限流值），则进行丢弃（触发限流策略）。漏桶以固定的速率进行释放访问请求（即请求通过），直到漏桶为空。分布式环境下实施难度高。</li><li><strong>令牌桶算法</strong>：程序以r（r=时间周期/限流值）的速度向令牌桶中增加令牌，直到令牌桶满，请求到达时向令牌桶请求令牌，如获取到令牌则通过请求，否则触发限流策略。分布式环境下实施难度高。</li></ol><h2 id="_4-高并发的实践经验" tabindex="-1"><a class="header-anchor" href="#_4-高并发的实践经验"><span>4. 高并发的实践经验</span></a></h2><p>接入-逻辑-存储是经典的互联网后端分层，但随着业务规模的提高，逻辑层的复杂度也上升了，所以，针对逻辑层的架构设计也出现很多新的技术和思路，常见的做法包括系统拆分，微服务。</p><p>除此之外，也有很多业界的优秀实践，包括某信服务器通过协程（无侵入，已开源libco）改造，极大的提高了系统的并发度和稳定性，另外，缓存预热，预计算，批量读写（减少IO），池技术等也广泛应用在实践中，有效的提升了系统并发能力。</p><p>为了提升并发能力，逻辑后端对请求的处理，一般会用到生产者-消费者多线程模型，即I/O线程负责网络IO，协议编解码，网络字节流被解码后产生的协议对象，会被包装成task投入到task queue，然后worker线程会从该队列取出task执行，有些系统会用多进程而非多线程，通过共享存储，维护2个方向的shm queue，一个input q，一个output q，为了提高并发度，有时候会引入协程，协程是用户线程态的多执行流，它的切换成本更低，通常有更好的调度效率。</p><p>另外，构建<strong>漏斗型业务或者系统</strong>，从客户端请求到接入层，到逻辑层，到DB层，层层递减，过滤掉请求，Fail Fast（尽早发现尽早过滤），嘴大屁眼小，哈哈。</p><p>漏斗型系统不仅仅是一个技术模型，它也可以是一个<strong>产品思维</strong>，配合产品的用户分流，逻辑分离，可以构建全方位的立体模型。</p><h2 id="_5-小结" tabindex="-1"><a class="header-anchor" href="#_5-小结"><span>5. 小结</span></a></h2><p>莫让浮云遮望眼，除尽繁华识真颜。我们不能掌握了大方案，吹完了牛皮，而忽视了<strong>编程最本质的东西，掌握最基本最核心的编程能力</strong>，比如数据架构和算法，设计，惯用法，培养技术的审美，也是很重要的，<strong>既要致高远，又要尽精微</strong>。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/187336277" target="_blank" rel="noopener noreferrer">高并发，你真的了解吗？</a></p>',72)]))}const i=t(s,[["render",p],["__file","arch-y-overview.html.vue"]]),h=JSON.parse('{"path":"/posts/Architect/base/arch-y-overview.html","title":"架构-高并发：概述","lang":"zh-CN","frontmatter":{"aliases":"架构-高并发：概述","tags":null,"cssclass":null,"source":null,"order":60,"category":["架构"],"created":"2024-04-24 14:35","updated":"2024-04-30 09:14","description":"架构-高并发：概述 摘要：本文介绍高并发系统的度量指标，讲述高并发系统的设计思路，再梳理高并发的关键技术，最后结合作者的经验做一些延伸探讨。 当前，数字化在给企业带来业务创新，推动企业高速发展的同时，也给企业的IT软件系统带来了严峻的挑战。面对流量高峰，不同的企业是如何通过技术手段解决高并发难题的呢? 0. 引言 软件系统有三个追求：高性能、高并发、高...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/base/arch-y-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"架构-高并发：概述"}],["meta",{"property":"og:description","content":"架构-高并发：概述 摘要：本文介绍高并发系统的度量指标，讲述高并发系统的设计思路，再梳理高并发的关键技术，最后结合作者的经验做一些延伸探讨。 当前，数字化在给企业带来业务创新，推动企业高速发展的同时，也给企业的IT软件系统带来了严峻的挑战。面对流量高峰，不同的企业是如何通过技术手段解决高并发难题的呢? 0. 引言 软件系统有三个追求：高性能、高并发、高..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"架构-高并发：概述\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"0. 引言","slug":"_0-引言","link":"#_0-引言","children":[]},{"level":2,"title":"1. 高并发的度量指标","slug":"_1-高并发的度量指标","link":"#_1-高并发的度量指标","children":[]},{"level":2,"title":"2. 高并发的设计思路","slug":"_2-高并发的设计思路","link":"#_2-高并发的设计思路","children":[{"level":3,"title":"2.1 垂直方向：提升单机能力","slug":"_2-1-垂直方向-提升单机能力","link":"#_2-1-垂直方向-提升单机能力","children":[]},{"level":3,"title":"2.2 水平方向：分布式集群","slug":"_2-2-水平方向-分布式集群","link":"#_2-2-水平方向-分布式集群","children":[]}]},{"level":2,"title":"3. 高并发的关键技术","slug":"_3-高并发的关键技术","link":"#_3-高并发的关键技术","children":[{"level":3,"title":"3.1 集群化：负载均衡","slug":"_3-1-集群化-负载均衡","link":"#_3-1-集群化-负载均衡","children":[]},{"level":3,"title":"3.2 数据库层面：分库分表+读写分离","slug":"_3-2-数据库层面-分库分表-读写分离","link":"#_3-2-数据库层面-分库分表-读写分离","children":[]},{"level":3,"title":"3.3 读多写少：缓存","slug":"_3-3-读多写少-缓存","link":"#_3-3-读多写少-缓存","children":[]},{"level":3,"title":"3.4 高写入：消息中间件","slug":"_3-4-高写入-消息中间件","link":"#_3-4-高写入-消息中间件","children":[]},{"level":3,"title":"3.5 避免挤兑：流控","slug":"_3-5-避免挤兑-流控","link":"#_3-5-避免挤兑-流控","children":[]}]},{"level":2,"title":"4. 高并发的实践经验","slug":"_4-高并发的实践经验","link":"#_4-高并发的实践经验","children":[]},{"level":2,"title":"5. 小结","slug":"_5-小结","link":"#_5-小结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":13.95,"words":4185},"filePathRelative":"posts/Architect/base/arch-y-overview.md","localizedDate":"2024年10月28日","excerpt":"\\n<blockquote>\\n<p><strong>摘要</strong>：本文介绍高并发系统的度量指标，讲述高并发系统的设计思路，再梳理高并发的关键技术，最后结合作者的经验做一些延伸探讨。</p>\\n</blockquote>\\n<p>当前，数字化在给企业带来业务创新，推动企业高速发展的同时，也给企业的IT软件系统带来了严峻的挑战。面对流量高峰，不同的企业是如何通过技术手段解决高并发难题的呢?</p>\\n<h2>0. 引言</h2>\\n<p>软件系统有三个追求：<strong>高性能、高并发、高可用</strong>，俗称三高。三者既有区别也有联系，门门道道很多，全面讨论需要三天三夜，本篇讨论高并发。</p>","autoDesc":true}');export{i as comp,h as data};
