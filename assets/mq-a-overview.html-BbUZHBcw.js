import{_ as a,c as e,a as i,o as l}from"./app-BfIe-EZg.js";const r={};function d(n,t){return l(),e("div",null,t[0]||(t[0]=[i('<h1 id="消息中间件-主流的mq的对比与业务选型" tabindex="-1"><a class="header-anchor" href="#消息中间件-主流的mq的对比与业务选型"><span>消息中间件 - 主流的MQ的对比与业务选型</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>消息队列中间件是分布式系统中重要的组件，主要解决应用耦合、异步消息、流量削锋等问题。它可以实现高性能、高可用、可伸缩和最终一致性架构，是大型分布式系统不可缺少的中间件。</p><p>消息队列在电商系统、消息通讯、日志收集等应用中扮演着关键作用，以阿里为例，其研发的消息队列（RocketMQ）在历次天猫 “双十一” 活动中支撑了万亿级的数据洪峰，为大规模交易提供了有力保障。</p><p>作为提升应用性能的重要手段，分布式消息队列技术在互联网领域得到了越来越广泛的关注 。在之前的博文中，我们介绍了四种常用的消息中间件：ActiveMQ、RabbitMQ、RocketMQ 及 Kafka的基础使用以及配置，本文将主要介绍这4中消息中间件的对比以及业务选型。</p><h2 id="_2-对比" tabindex="-1"><a class="header-anchor" href="#_2-对比"><span>2. 对比</span></a></h2><table><thead><tr><th>特性</th><th>ActiveMQ</th><th>RabbitMQ</th><th>RocketMQ</th><th>Kafka</th></tr></thead><tbody><tr><td>客户端支持语言</td><td>JAVA、C、C++、Python、PHP、Pert、net等</td><td>官方支持Erlang、Java/Ruby等，社区产出多种语言API，几乎支持所有常用语言</td><td>JAVA、C++（不成熟）</td><td>官方支持JAVA,开源社区有多语言版本，如PHP,Python,GO,C/C++，Ruby，NodeJS等编程语言</td></tr><tr><td>单机吞吐量</td><td>万级，吞吐量RocketMQ和Kafka要低了一个数量级</td><td>万级，吞吐量比RocketMQ和Kafka要低了一个数量级</td><td>10万级，RocketMQ也是可以支撑高吞吐的一种MQ</td><td>10万级别，这是kafka最大的优点，就是吞吐量高。 一般配合大数据类的系统来进行实时数据计算、日志采集等场景</td></tr><tr><td>topic数量对吞吐量的影响</td><td></td><td></td><td>topic可以达到几百，几千个的级别，吞吐量会有较小幅度的下降 这是RocketMQ的一大优势，在同等机器下，可以支撑大量的topic</td><td>topic从几十个到几百个的时候，吞吐量会大幅度下降 所以在同等机器下，kafka尽量保证topic数量不要过多。如果要支撑大规模topic，需要增加更多的机器资源</td></tr><tr><td>时效性</td><td>ms级</td><td>微秒级，这是rabbitmq的一大特点，延迟是最低的</td><td>ms级</td><td>延迟在ms级以内</td></tr><tr><td>可用性</td><td>高，基于主从架构实现高可用性</td><td>高，基于主从架构实现高可用性</td><td>非常高，分布式架构</td><td>非常高，kafka是分布式的，一个数据多个副本，少数机器宕机，不会丢失数据，不会导致不可用</td></tr><tr><td>消息可靠性</td><td>有较低的概率丢失数据</td><td>基本不丢</td><td>经过参数优化配置，可以做到0丢失</td><td>经过参数优化配置，消息可以做到0丢失</td></tr><tr><td>持久化</td><td>内存、文件、数据库</td><td>内存、文件，支持数据堆积，但数据堆积会影响生产速率</td><td>磁盘文件</td><td>磁盘文件，只要磁盘容量足够，可以做到无限消息堆积</td></tr><tr><td>功能支持</td><td>MQ领域的功能极其完备</td><td>基于erlang开发，所以并发能力很强，性能极其好，延时很低</td><td>MQ功能较为完善，还是分布式的，扩展性好</td><td>功能较为简单，主要支持简单的MQ功能，在大数据领域的实时计算以及日志采集被大规模使用，是事实上的标准</td></tr></tbody></table><h2 id="_3-优缺点" tabindex="-1"><a class="header-anchor" href="#_3-优缺点"><span>3. 优缺点</span></a></h2><h3 id="_2-1-activemq" tabindex="-1"><a class="header-anchor" href="#_2-1-activemq"><span>2.1 ActiveMQ</span></a></h3><p>ActiveMQ 是由Apache出品，ActiveMQ 是一个完全支持JMS1.1和J2EE 1.4规范的 JMS Provider实现。它非常快速，支持多种语言的客户端和协议，而且可以非常容易的嵌入到企业的应用环境中，并有许多高级功能。</p><h4 id="_3-1-1-优点" tabindex="-1"><a class="header-anchor" href="#_3-1-1-优点"><span>3.1.1 优点</span></a></h4><ul><li>跨平台(JAVA编写与平台无关有，ActiveMQ几乎可以运行在任何的JVM上)</li><li>在阿里大规模应用过，有阿里品牌保障 日处理消息上百亿之多，可以做到大规模吞吐，性能也非常好，分布式扩展也很方便</li><li>可以支撑大规模的topic数量，支持复杂MQ业务场景</li><li>Java源码可阅读以及定制MQ</li><li>可以用JDBC：可以将数据持久化到数据库。虽然使用JDBC会降低ActiveMQ的性能，但是数据库一直都是开发人员最熟悉的存储介质。将消息存到数据库，看得见摸得着。而且公司有专门的DBA去对数据库进行调优，主从分离</li><li>支持JMS ：支持JMS的统一接口</li><li>支持自动重连；</li><li>有安全机制：支持基于shiro，jaas等多种安全配置机制，可以对Queue/Topic进行认证和授权。</li><li>监控完善：拥有完善的监控，包括Web Console，JMX，Shell命令行，Jolokia的REST API；</li><li>界面友善：提供的Web Console可以满足大部分情况，还有很多第三方的组件可以使用，如hawtio；</li></ul><h4 id="_3-1-2-缺点" tabindex="-1"><a class="header-anchor" href="#_3-1-2-缺点"><span>3.1.2 缺点</span></a></h4><ul><li>社区活跃度不及RabbitMQ高</li><li>可能会出现消息丢失</li><li>目前重心放到activemq6.0产品-apollo，对5.x的维护较少</li><li>不适合用于上千个队列的应用场景</li></ul><h3 id="_3-2-rabbitmq" tabindex="-1"><a class="header-anchor" href="#_3-2-rabbitmq"><span>3.2 RabbitMQ</span></a></h3><p>RabbitMQ是一套开源（MPL）的消息队列服务软件，是由 LShift 提供的一个 Advanced Message Queuing Protocol (AMQP) 的开源实现，由以高性能、健壮以及可伸缩性出名的 Erlang 写成</p><h4 id="_3-2-1-优点" tabindex="-1"><a class="header-anchor" href="#_3-2-1-优点"><span>3.2.1 优点</span></a></h4><ul><li>erlang语言开发，性能极其好，延时很低</li><li>吞吐量到万级，MQ功能比较完备</li><li>健壮、稳定、易用、跨平台、支持多种语言、文档齐全</li><li>有消息确认机制和持久化机制，可靠性高</li><li>高度可定制的路由</li><li>管理界面较丰富，在互联网公司也有较大规模的应用</li><li>社区活跃度高，几乎每个月都发布几个版本</li></ul><h4 id="_3-2-2-缺点" tabindex="-1"><a class="header-anchor" href="#_3-2-2-缺点"><span>3.2.2 缺点</span></a></h4><ul><li>实现了代理架构，意味着消息在发送到客户端之前可以在中央节点上排队。此特性使得RabbitMQ易于使用和部署，但是使得其运行速度较慢，因为中央节点增加了延迟，消息封装后也比较大。</li><li>erlang语言开发，很难看懂源码，无法进行源码级别的研究和定制，不利于二次维护和开发</li><li>rabbitmq集群动态扩展比较麻烦</li><li>需要学习比较复杂的接口和协议，学习和维护成本较高</li></ul><h3 id="_3-3-rocketmq" tabindex="-1"><a class="header-anchor" href="#_3-3-rocketmq"><span>3.3 RocketMQ</span></a></h3><p>RocketMQ 出自 阿里公司的开源产品，用 Java 语言实现，在设计时参考了 Kafka，并做出了自己的一些改进，消息可靠性上比 Kafka 更好。RocketMQ在阿里集团被广泛应用在订单，交易，充值，流计算，消息推送，日志流式处理，binglog分发等场景。</p><h4 id="_3-3-1-优点" tabindex="-1"><a class="header-anchor" href="#_3-3-1-优点"><span>3.3.1 优点</span></a></h4><ul><li>单机支持 1 万以上持久化队列</li><li>RocketMQ 的所有消息都是持久化的，先写入系统 PAGECACHE，然后刷盘，可以保证内存与磁盘都有一份数据，访问时，直接从内存读取</li><li>模型简单，接口易用（JMS 的接口很多场合并不太实用）</li><li>性能非常好，可以大量堆积消息在broker中</li><li>支持多种消费，包括集群消费、广播消费等</li><li>各个环节分布式扩展设计，主从HA</li><li>开发度较活跃，版本更新很快</li></ul><h4 id="_3-3-2-缺点" tabindex="-1"><a class="header-anchor" href="#_3-3-2-缺点"><span>3.3.2 缺点</span></a></h4><ul><li>支持的客户端语言不多，目前是java及c++，其中c++不成熟</li><li>RocketMQ社区关注度及成熟度也不及前两者</li><li>没有web管理界面，提供了一个CLI(命令行界面)管理工具带来查询、管理和诊断各种问题</li><li>没有在 mq 核心中去实现JMS等接口</li></ul><h3 id="_3-4-kafka" tabindex="-1"><a class="header-anchor" href="#_3-4-kafka"><span>3.4 Kafka</span></a></h3><p>Apache Kafka是一个分布式消息发布订阅系统。它最初由LinkedIn公司基于独特的设计实现为一个分布式的提交日志系统( a distributed commit log)，，之后成为Apache项目的一部分。Kafka系统快速、可扩展并且可持久化。它的分区特性，可复制和可容错都是其不错的特性。</p><h4 id="_3-4-1-优点" tabindex="-1"><a class="header-anchor" href="#_3-4-1-优点"><span>3.4.1 优点</span></a></h4><ul><li>客户端语言丰富，支持java、.net、php、ruby、python、go等多种语言；</li><li>性能卓越，单机写入TPS约在百万条/秒，消息大小10个字节；</li><li>提供完全分布式架构, 并有replica机制, 拥有较高的可用性和可靠性, 理论上支持消息无限堆积；</li><li>支持批量操作；</li><li>消费者采用Pull方式获取消息, 消息有序, 通过控制能够保证所有消息被消费且仅被消费一次;</li><li>有优秀的第三方Kafka Web管理界面Kafka-Manager；</li><li>在日志领域比较成熟，被多家公司和多个开源项目使用；</li></ul><h4 id="_3-4-2-缺点" tabindex="-1"><a class="header-anchor" href="#_3-4-2-缺点"><span>3.4.2 缺点</span></a></h4><ul><li>Kafka单机超过64个队列/分区，Load会发生明显的飙高现象，队列越多，load越高，发送消息响应时间变长</li><li>使用短轮询方式，实时性取决于轮询间隔时间；</li><li>消费失败不支持重试；</li><li>支持消息顺序，但是一台代理宕机后，就会产生消息乱序；</li><li>社区更新较慢；</li></ul><h2 id="_4-业务选型" tabindex="-1"><a class="header-anchor" href="#_4-业务选型"><span>4. 业务选型</span></a></h2><ol><li>一般的业务系统要引入MQ，最早大家都用ActiveMQ，但是现在确实大家用的不多了，没经过大规模吞吐量场景的验证，社区也不是很活跃</li><li>如果是中小型公司，基础架构研发能力较弱，采用RabbitMQ是不错的选择，虽然erlang语言阻止了大量的java工程师去深入研究和掌控他，但是社区十分活跃</li><li>如果系统有较大吞吐量需求，同时可能会有大量的topic，基础架构研发实力较强的大公司，完全可以采用RocketMQ，即使社区不再更新，也可以自己去维护</li><li>如果是大数据领域的实时计算、日志采集等场景，用Kafka是业内标准的，绝对没问题，社区活跃度很高，绝对不会黄，何况几乎是全世界这个领域的事实性规范</li></ol><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.jianshu.com/p/0b1d1fe84e70" target="_blank" rel="noopener noreferrer">MQ 主流的MQ的对比与业务选型</a></p>',36)]))}const h=a(r,[["render",d],["__file","mq-a-overview.html.vue"]]),c=JSON.parse('{"path":"/posts/MiddleWare/MQ/mq-a-overview.html","title":"消息中间件 - 主流的MQ的对比与业务选型","lang":"zh-CN","frontmatter":{"order":10,"category":["MQ"],"description":"消息中间件 - 主流的MQ的对比与业务选型 1. 简介 消息队列中间件是分布式系统中重要的组件，主要解决应用耦合、异步消息、流量削锋等问题。它可以实现高性能、高可用、可伸缩和最终一致性架构，是大型分布式系统不可缺少的中间件。 消息队列在电商系统、消息通讯、日志收集等应用中扮演着关键作用，以阿里为例，其研发的消息队列（RocketMQ）在历次天猫 “双十...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/MiddleWare/MQ/mq-a-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"消息中间件 - 主流的MQ的对比与业务选型"}],["meta",{"property":"og:description","content":"消息中间件 - 主流的MQ的对比与业务选型 1. 简介 消息队列中间件是分布式系统中重要的组件，主要解决应用耦合、异步消息、流量削锋等问题。它可以实现高性能、高可用、可伸缩和最终一致性架构，是大型分布式系统不可缺少的中间件。 消息队列在电商系统、消息通讯、日志收集等应用中扮演着关键作用，以阿里为例，其研发的消息队列（RocketMQ）在历次天猫 “双十..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"消息中间件 - 主流的MQ的对比与业务选型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 对比","slug":"_2-对比","link":"#_2-对比","children":[]},{"level":2,"title":"3. 优缺点","slug":"_3-优缺点","link":"#_3-优缺点","children":[{"level":3,"title":"2.1 ActiveMQ","slug":"_2-1-activemq","link":"#_2-1-activemq","children":[]},{"level":3,"title":"3.2 RabbitMQ","slug":"_3-2-rabbitmq","link":"#_3-2-rabbitmq","children":[]},{"level":3,"title":"3.3 RocketMQ","slug":"_3-3-rocketmq","link":"#_3-3-rocketmq","children":[]},{"level":3,"title":"3.4 Kafka","slug":"_3-4-kafka","link":"#_3-4-kafka","children":[]}]},{"level":2,"title":"4. 业务选型","slug":"_4-业务选型","link":"#_4-业务选型","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":8.59,"words":2578},"filePathRelative":"posts/MiddleWare/MQ/mq-a-overview.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>消息队列中间件是分布式系统中重要的组件，主要解决应用耦合、异步消息、流量削锋等问题。它可以实现高性能、高可用、可伸缩和最终一致性架构，是大型分布式系统不可缺少的中间件。</p>\\n<p>消息队列在电商系统、消息通讯、日志收集等应用中扮演着关键作用，以阿里为例，其研发的消息队列（RocketMQ）在历次天猫 “双十一” 活动中支撑了万亿级的数据洪峰，为大规模交易提供了有力保障。</p>\\n<p>作为提升应用性能的重要手段，分布式消息队列技术在互联网领域得到了越来越广泛的关注 。在之前的博文中，我们介绍了四种常用的消息中间件：ActiveMQ、RabbitMQ、RocketMQ 及 Kafka的基础使用以及配置，本文将主要介绍这4中消息中间件的对比以及业务选型。</p>","autoDesc":true}');export{h as comp,c as data};
