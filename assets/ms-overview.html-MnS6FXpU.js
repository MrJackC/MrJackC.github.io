import{_ as r,c as n,a as t,o as a}from"./app-W9QyTiMU.js";const l={};function o(i,e){return a(),n("div",null,e[0]||(e[0]=[t('<h1 id="微服务-概述" tabindex="-1"><a class="header-anchor" href="#微服务-概述"><span>微服务 - 概述</span></a></h1><ul><li><p>nacos（服务发现和配置中心、元数据中心）</p><ul><li><a href="https://nacos.io/zh-cn/docs/what-is-nacos.html" target="_blank" rel="noopener noreferrer">官方文档：https://nacos.io/zh-cn/docs/what-is-nacos.html</a></li><li><a href="https://blog.csdn.net/a745233700/article/details/122915663" target="_blank" rel="noopener noreferrer">好文：Nacos注册中心的部署与用法详细介绍</a></li><li><a href="https://blog.csdn.net/a745233700/article/details/122916208" target="_blank" rel="noopener noreferrer">好文：Nacos配置中心用法详细介绍</a></li></ul></li><li><p>spring-cloud-loadbalancer（负载均衡）</p></li><li><p>Dubbo: RPC通信 与 微服务治理</p><ul><li><a href="https://dubbo.apache.org/zh/overview/what/overview/" target="_blank" rel="noopener noreferrer">官方文档：https://dubbo.apache.org/zh/overview/what/overview/</a></li></ul></li><li><p>sentinel 服务容错（流控、降级、服务负载）</p><ul><li><a href="https://sentinelguard.io/zh-cn/docs/introduction.html" target="_blank" rel="noopener noreferrer">官方文档：https://sentinelguard.io/zh-cn/docs/introduction.html</a></li><li><a href="https://sentinelguard.io/zh-cn/blog/sentinel-vs-hystrix.html" target="_blank" rel="noopener noreferrer">官方文档：Sentinel 与 Hystrix 的对比</a></li></ul></li><li><p>spring-cloud-stream（mq封装）</p><ul><li><a href="https://spring.io/projects/spring-cloud-stream" target="_blank" rel="noopener noreferrer">官方文档：https://spring.io/projects/spring-cloud-stream</a></li><li><a href="https://fangjian0423.github.io/2019/04/03/spring-cloud-stream-intro/" target="_blank" rel="noopener noreferrer">好文：干货｜Spring Cloud Stream 体系及原理介绍</a></li></ul></li><li><p>SpringCloud Gateway (服务网关)</p><ul><li><a href="https://spring.io/projects/spring-cloud-gateway" target="_blank" rel="noopener noreferrer">官方文档：https://spring.io/projects/spring-cloud-gateway</a></li><li><a href="https://blog.csdn.net/a745233700/article/details/122917167" target="_blank" rel="noopener noreferrer">好文：Spring Cloud Gateway 服务网关的部署与使用详细介绍</a></li></ul></li><li><p>认证中心</p><ul><li><a href="https://sa-token.dev33.cn/doc.html#/micro/dcs-session" target="_blank" rel="noopener noreferrer">Sa-Token官网：微服务 - 分布式Session会话</a></li></ul></li><li><p>Skywalking （链路追踪）</p><ul><li><a href="https://skyapm.github.io/document-cn-translation-of-skywalking/zh/8.0.0/concepts-and-designs/" target="_blank" rel="noopener noreferrer">中文官网</a></li><li><a href="https://blog.csdn.net/a745233700/article/details/124456810" target="_blank" rel="noopener noreferrer">好文：Skywalking全链路追踪使用说明</a></li></ul></li><li><p>seata（分布式事务）</p><blockquote><p>核心原理：Seata把一个分布式事务理解成一个包含了若干分支事务的全局事务，而一个分支事务是一个满足 ACID 的本地事务，因此我们可以操作分布式事务像操作本地事务一样。</p><p>Seata 内部定义了 3个模块来处理全局事务和分支事务的关系和处理过程，这三个组件分别是：</p><ul><li>Transaction Coordinator (TC)： 事务协调器，维护全局事务的运行状态，负责协调并驱动全局事务的提交或回滚。</li><li>Transaction Manager (TM)： 控制全局事务的边界，负责开启一个全局事务，并最终发起全局提交或全局回滚的决议。</li><li>Resource Manager (RM)： 控制分支事务，负责分支注册、状态汇报，并接收事务协调器的指令，驱动分支（本地）事务的提交和回滚。</li></ul><p>简要说说整个全局事务的执行步骤：</p><ol><li>TM 向 TC 申请开启一个全局事务，TC 创建全局事务后返回全局唯一的 XID，XID 会在全局事务的上下文中传播；</li><li>RM 向 TC 注册分支事务，该分支事务归属于拥有相同 XID 的全局事务；</li><li>TM 向 TC 发起全局提交或回滚；</li><li>TC 调度 XID 下的分支事务完成提交或者回滚。</li></ol><h3 id="分支事务如何提交和回滚" tabindex="-1"><a class="header-anchor" href="#分支事务如何提交和回滚"><span>分支事务如何提交和回滚？</span></a></h3><p>下面详细说说分支事务是如何提交和回滚的：</p><ul><li>第一阶段：</li></ul><p>分支事务利用 RM 模块中对 JDBC 数据源代理，加入了若干流程，对业务 SQL 进行解释，把业务数据在更新前后的数据镜像组织成回滚日志，并生成 undo log 日志，对全局事务锁的检查以及分支事务的注册等，利用本地事务 ACID 特性，将业务 SQL 和 undo log 写入同一个事物中一同提交到数据库中，保证业务 SQL 必定存在相应的回滚日志，最后对分支事务状态向 TC 进行上报。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301225350.png" alt="image-20221215234622450" tabindex="0" loading="lazy"><figcaption>image-20221215234622450</figcaption></figure><ul><li>第二阶段：</li></ul><p>TM决议全局提交：</p><p>当 TM 决议提交时，就不需要同步协调处理了，TC 会异步调度各个 RM 分支事务删除对应的 undo log 日志即可，这个步骤非常快速地可以完成。这个机制对于性能提升非常关键，我们知道正常的业务运行过程中，事务执行的成功率是非常高的，因此可以直接在本地事务中提交，这步对于提升性能非常显著。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301225395.png" alt="image-20221215234611409" tabindex="0" loading="lazy"><figcaption>image-20221215234611409</figcaption></figure><p>TM决议全局回滚：</p><p>当 TM 决议回滚时，RM 收到 TC 发送的回滚请求，RM 通过 XID 找到对应的 undo log 回滚日志，然后利用本地事务 ACID 特性，执行回滚日志完成回滚操作并删除 undo log 日志，最后向 TC 进行回滚结果上报。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301225418.png" alt="image-20221215234558952" tabindex="0" loading="lazy"><figcaption>image-20221215234558952</figcaption></figure><p>业务对以上所有的流程都无感知，业务完全不关心全局事务的具体提交和回滚，而且最重要的一点是 Seata 将两段式提交的同步协调分解到各个分支事务中了，分支事务与普通的本地事务无任何差异，这意味着我们使用 Seata 后，分布式事务就像使用本地事务一样，完全将数据库层的事务协调机制交给了中间件层 Seata 去做了，这样虽然事务协调搬到应用层了，但是依然可以做到对业务的零侵入，从而剥离了分布式事务方案对数据库在协议支持上的要求，且 Seata 在分支事务完成之后直接释放资源，极大减少了分支事务对资源的锁定时间，完美避免了 XA 协议需要同步协调导致资源锁定时间过长的问题。</p><p>Q:<code>Seata</code>作为分布式事务时，有些时候我们的分布式时候并不是每次都可以成功的，而对于这些失败的分布式事务就需要进行通知</p><p>A：实现FailureHandler，来监听失败处理</p></blockquote><ul><li><a href="http://seata.io/zh-cn/" target="_blank" rel="noopener noreferrer">官网</a></li><li><a href="https://seata.io/zh-cn/blog/seata-at-mode-design.html" target="_blank" rel="noopener noreferrer">官网：分布式事务中间件Seata 的设计原理</a></li><li><a href="https://juejin.cn/post/7116023320989925389#heading-1" target="_blank" rel="noopener noreferrer">好文：分布式事务(Seata) 四大模式详解</a></li><li><a href="https://blog.csdn.net/fu_huo_1993/article/details/120655233" target="_blank" rel="noopener noreferrer">好文：Seata分布式事务失败后的处理</a></li></ul></li><li><p>elk</p><ul><li><a href="https://blog.csdn.net/u012562943/article/details/101060053" target="_blank" rel="noopener noreferrer">好文：ELK学习总结（2）——ELK 原理介绍及实践详解</a></li><li><a href="https://developer.aliyun.com/article/801870" target="_blank" rel="noopener noreferrer">好文：干货 | Logstash Grok数据结构化ETL实战</a></li></ul></li><li><p>Prometheus/grafana(服务监控)（补充、可不看）</p><ul><li><a href="https://www.hellopz.com/2020/09/18/Prometheus-%E7%9B%91%E6%8E%A7%E6%96%B9%E6%A1%88%E7%AE%80%E8%BF%B0/" target="_blank" rel="noopener noreferrer">Prometheus 监控方案简述</a></li></ul></li></ul>',2)]))}const p=r(l,[["render",o],["__file","ms-overview.html.vue"]]),c=JSON.parse('{"path":"/posts/Architect/microservices/ms-overview.html","title":"微服务 - 概述","lang":"zh-CN","frontmatter":{"aliases":"微服务 - 概述","tags":null,"cssclass":null,"source":null,"order":10,"category":["架构","微服务"],"created":"2024-04-24 14:35","updated":"2024-04-30 12:27","description":"微服务 - 概述 nacos（服务发现和配置中心、元数据中心） 官方文档：https://nacos.io/zh-cn/docs/what-is-nacos.html 好文：Nacos注册中心的部署与用法详细介绍 好文：Nacos配置中心用法详细介绍 spring-cloud-loadbalancer（负载均衡） Dubbo: RPC通信 与 微服务治...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Architect/microservices/ms-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"微服务 - 概述"}],["meta",{"property":"og:description","content":"微服务 - 概述 nacos（服务发现和配置中心、元数据中心） 官方文档：https://nacos.io/zh-cn/docs/what-is-nacos.html 好文：Nacos注册中心的部署与用法详细介绍 好文：Nacos配置中心用法详细介绍 spring-cloud-loadbalancer（负载均衡） Dubbo: RPC通信 与 微服务治..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301225350.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"微服务 - 概述\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301225350.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301225395.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301225418.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.98,"words":1494},"filePathRelative":"posts/Architect/microservices/ms-overview.md","localizedDate":"2024年10月28日","excerpt":"\\n<ul>\\n<li>\\n<p>nacos（服务发现和配置中心、元数据中心）</p>\\n<ul>\\n<li><a href=\\"https://nacos.io/zh-cn/docs/what-is-nacos.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方文档：https://nacos.io/zh-cn/docs/what-is-nacos.html</a></li>\\n<li><a href=\\"https://blog.csdn.net/a745233700/article/details/122915663\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">好文：Nacos注册中心的部署与用法详细介绍</a></li>\\n<li><a href=\\"https://blog.csdn.net/a745233700/article/details/122916208\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">好文：Nacos配置中心用法详细介绍</a></li>\\n</ul>\\n</li>\\n<li>\\n<p>spring-cloud-loadbalancer（负载均衡）</p>\\n</li>\\n<li>\\n<p>Dubbo: RPC通信 与 微服务治理</p>\\n<ul>\\n<li><a href=\\"https://dubbo.apache.org/zh/overview/what/overview/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方文档：https://dubbo.apache.org/zh/overview/what/overview/</a></li>\\n</ul>\\n</li>\\n<li>\\n<p>sentinel 服务容错（流控、降级、服务负载）</p>\\n<ul>\\n<li><a href=\\"https://sentinelguard.io/zh-cn/docs/introduction.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方文档：https://sentinelguard.io/zh-cn/docs/introduction.html</a></li>\\n<li><a href=\\"https://sentinelguard.io/zh-cn/blog/sentinel-vs-hystrix.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方文档：Sentinel 与 Hystrix 的对比</a></li>\\n</ul>\\n</li>\\n<li>\\n<p>spring-cloud-stream（mq封装）</p>\\n<ul>\\n<li><a href=\\"https://spring.io/projects/spring-cloud-stream\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方文档：https://spring.io/projects/spring-cloud-stream</a></li>\\n<li><a href=\\"https://fangjian0423.github.io/2019/04/03/spring-cloud-stream-intro/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">好文：干货｜Spring Cloud Stream 体系及原理介绍</a></li>\\n</ul>\\n</li>\\n<li>\\n<p>SpringCloud Gateway (服务网关)</p>\\n<ul>\\n<li><a href=\\"https://spring.io/projects/spring-cloud-gateway\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方文档：https://spring.io/projects/spring-cloud-gateway</a></li>\\n<li><a href=\\"https://blog.csdn.net/a745233700/article/details/122917167\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">好文：Spring Cloud Gateway 服务网关的部署与使用详细介绍</a></li>\\n</ul>\\n</li>\\n<li>\\n<p>认证中心</p>\\n<ul>\\n<li><a href=\\"https://sa-token.dev33.cn/doc.html#/micro/dcs-session\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Sa-Token官网：微服务 - 分布式Session会话</a></li>\\n</ul>\\n</li>\\n<li>\\n<p>Skywalking （链路追踪）</p>\\n<ul>\\n<li><a href=\\"https://skyapm.github.io/document-cn-translation-of-skywalking/zh/8.0.0/concepts-and-designs/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">中文官网</a></li>\\n<li><a href=\\"https://blog.csdn.net/a745233700/article/details/124456810\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">好文：Skywalking全链路追踪使用说明</a></li>\\n</ul>\\n</li>\\n<li>\\n<p>seata（分布式事务）</p>\\n<blockquote>\\n<p>核心原理：Seata把一个分布式事务理解成一个包含了若干分支事务的全局事务，而一个分支事务是一个满足 ACID 的本地事务，因此我们可以操作分布式事务像操作本地事务一样。</p>\\n<p>Seata 内部定义了 3个模块来处理全局事务和分支事务的关系和处理过程，这三个组件分别是：</p>\\n<ul>\\n<li>Transaction Coordinator (TC)： 事务协调器，维护全局事务的运行状态，负责协调并驱动全局事务的提交或回滚。</li>\\n<li>Transaction Manager (TM)： 控制全局事务的边界，负责开启一个全局事务，并最终发起全局提交或全局回滚的决议。</li>\\n<li>Resource Manager (RM)： 控制分支事务，负责分支注册、状态汇报，并接收事务协调器的指令，驱动分支（本地）事务的提交和回滚。</li>\\n</ul>\\n<p>简要说说整个全局事务的执行步骤：</p>\\n<ol>\\n<li>TM 向 TC 申请开启一个全局事务，TC 创建全局事务后返回全局唯一的 XID，XID 会在全局事务的上下文中传播；</li>\\n<li>RM 向 TC 注册分支事务，该分支事务归属于拥有相同 XID 的全局事务；</li>\\n<li>TM 向 TC 发起全局提交或回滚；</li>\\n<li>TC 调度 XID 下的分支事务完成提交或者回滚。</li>\\n</ol>\\n<h3>分支事务如何提交和回滚？</h3>\\n<p>下面详细说说分支事务是如何提交和回滚的：</p>\\n<ul>\\n<li>第一阶段：</li>\\n</ul>\\n<p>分支事务利用 RM 模块中对 JDBC 数据源代理，加入了若干流程，对业务 SQL 进行解释，把业务数据在更新前后的数据镜像组织成回滚日志，并生成 undo log 日志，对全局事务锁的检查以及分支事务的注册等，利用本地事务 ACID 特性，将业务 SQL 和 undo log 写入同一个事物中一同提交到数据库中，保证业务 SQL 必定存在相应的回滚日志，最后对分支事务状态向 TC 进行上报。</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301225350.png\\" alt=\\"image-20221215234622450\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20221215234622450</figcaption></figure>\\n<ul>\\n<li>第二阶段：</li>\\n</ul>\\n<p>TM决议全局提交：</p>\\n<p>当 TM 决议提交时，就不需要同步协调处理了，TC 会异步调度各个 RM 分支事务删除对应的 undo log 日志即可，这个步骤非常快速地可以完成。这个机制对于性能提升非常关键，我们知道正常的业务运行过程中，事务执行的成功率是非常高的，因此可以直接在本地事务中提交，这步对于提升性能非常显著。</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301225395.png\\" alt=\\"image-20221215234611409\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20221215234611409</figcaption></figure>\\n<p>TM决议全局回滚：</p>\\n<p>当 TM 决议回滚时，RM 收到 TC 发送的回滚请求，RM 通过 XID 找到对应的 undo log 回滚日志，然后利用本地事务 ACID 特性，执行回滚日志完成回滚操作并删除 undo log 日志，最后向 TC 进行回滚结果上报。</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301225418.png\\" alt=\\"image-20221215234558952\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20221215234558952</figcaption></figure>\\n<p>业务对以上所有的流程都无感知，业务完全不关心全局事务的具体提交和回滚，而且最重要的一点是 Seata 将两段式提交的同步协调分解到各个分支事务中了，分支事务与普通的本地事务无任何差异，这意味着我们使用 Seata 后，分布式事务就像使用本地事务一样，完全将数据库层的事务协调机制交给了中间件层 Seata 去做了，这样虽然事务协调搬到应用层了，但是依然可以做到对业务的零侵入，从而剥离了分布式事务方案对数据库在协议支持上的要求，且 Seata 在分支事务完成之后直接释放资源，极大减少了分支事务对资源的锁定时间，完美避免了 XA 协议需要同步协调导致资源锁定时间过长的问题。</p>\\n<p>Q:<code>Seata</code>作为分布式事务时，有些时候我们的分布式时候并不是每次都可以成功的，而对于这些失败的分布式事务就需要进行通知</p>\\n<p>A：实现FailureHandler，来监听失败处理</p>\\n</blockquote>\\n<ul>\\n<li><a href=\\"http://seata.io/zh-cn/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官网</a></li>\\n<li><a href=\\"https://seata.io/zh-cn/blog/seata-at-mode-design.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官网：分布式事务中间件Seata 的设计原理</a></li>\\n<li><a href=\\"https://juejin.cn/post/7116023320989925389#heading-1\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">好文：分布式事务(Seata) 四大模式详解</a></li>\\n<li><a href=\\"https://blog.csdn.net/fu_huo_1993/article/details/120655233\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">好文：Seata分布式事务失败后的处理</a></li>\\n</ul>\\n</li>\\n<li>\\n<p>elk</p>\\n<ul>\\n<li><a href=\\"https://blog.csdn.net/u012562943/article/details/101060053\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">好文：ELK学习总结（2）——ELK 原理介绍及实践详解</a></li>\\n<li><a href=\\"https://developer.aliyun.com/article/801870\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">好文：干货 | Logstash Grok数据结构化ETL实战</a></li>\\n</ul>\\n</li>\\n<li>\\n<p>Prometheus/grafana(服务监控)（补充、可不看）</p>\\n<ul>\\n<li><a href=\\"https://www.hellopz.com/2020/09/18/Prometheus-%E7%9B%91%E6%8E%A7%E6%96%B9%E6%A1%88%E7%AE%80%E8%BF%B0/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Prometheus 监控方案简述</a></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{p as comp,c as data};
