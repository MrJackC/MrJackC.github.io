import{_ as t,c as l,a as i,o as a}from"./app-BfIe-EZg.js";const n={};function p(r,e){return a(),l("div",null,e[0]||(e[0]=[i('<h1 id="中间件的一些认知" tabindex="-1"><a class="header-anchor" href="#中间件的一些认知"><span>中间件的一些认知</span></a></h1><h2 id="_1-什么是中间件" tabindex="-1"><a class="header-anchor" href="#_1-什么是中间件"><span>1. 什么是中间件</span></a></h2><p><strong>将具体业务和底层逻辑解耦的组件。</strong></p><p>大致的效果是：<br> 需要利用服务的人（前端写业务的），不需要知道底层逻辑（提供服务的）的具体实现，只要拿着中间件结果来用就好了</p><blockquote><ul><li><p><s>说法一：介于操作系统和应用程序之间的产品。*</s></p><p>也不单单局限于操作系统</p></li></ul></blockquote><h2 id="_2-中间件的好处" tabindex="-1"><a class="header-anchor" href="#_2-中间件的好处"><span>2. 中间件的好处</span></a></h2><p>中间件能给客户带来什么？</p><ul><li>为上层应用软件的开发提供便捷的、开箱即用的服务交互和计算的能力，缩短开发周期；</li><li>屏蔽底层runtime的差异；</li><li>节省应用本身的系统资源，减少运行成本。</li></ul><h2 id="_3-评判关键" tabindex="-1"><a class="header-anchor" href="#_3-评判关键"><span>3.评判关键</span></a></h2><p>从定义可以总结出评判的几个地方</p><ol><li>性质：中间件是软件。</li><li>作用层级：系统软件和应用软件之间、软件各部件之间；管理客户机与系统软件之间的计算资源和网络通信。</li><li>服务对象：中间件为应用软件服务，应用软件为最终用户服务，最终用户并不直接使用中间件。</li></ol><h2 id="_4-常用基础中间件" tabindex="-1"><a class="header-anchor" href="#_4-常用基础中间件"><span>4. 常用基础中间件</span></a></h2><ul><li><p>路由与web服务器</p><p>处理和转发其他服务器通信数据的服务器。 如被业界广泛使用的阿里基于 Nginx 研发的 Tengine、阿里内部的集中式路由服务 VipServer</p></li><li><p>RPC框架：</p><p>微服务时代的远程服务调用框架。如grpc, Thrift, 阿里的 HSF, Dubbo, SOFA-RPC</p></li><li><p>消息中间件</p><p>支持在分布式系统之间发送和接收消息的软件。 如 Apache kafka, Apache RabbitMQ, NSQ, 阿里孵化开源的 Apache RocketMQ</p></li><li><p>缓存服务:</p><p>分布式的高速数据存储层，一般是内存存储。如 阿里 Tair，业界的 Redis, Memcached, Ehcache</p></li><li><p>配置中心：</p><p>用来统一管理各个项目中所有配置的系统。如 阿里 Nacos、携程 Apollo、百度 Disconf</p></li><li><p>分布式事务：</p><p>事务的参与者、支持事务的服务器、资源服务器以及事务管理器分别位于不同的分布式系统的不同节点之上。 如 阿里 seata、腾讯 DTF</p></li><li><p>任务调度：</p><p>分布式环境下提供定时、任务编排、分布式跑批等功能的系统。如 阿里 SchedulerX、业界 xxl-job、当当 elastic-job、有赞 TSP</p></li><li><p>数据库层:</p><p>用于支持弹性扩容和分库分表的 TDDL，数据库连接池 Driud, Binlog 同步的 Canal 等。</p></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.zhihu.com/question/19730582" target="_blank" rel="noopener noreferrer">中间件是什么？如何解释比较通俗易懂？</a></p>',15)]))}const o=t(n,[["render",p],["__file","misc-x-middleware.html.vue"]]),c=JSON.parse('{"path":"/posts/Daily-Thoughts/misc/misc-x-middleware.html","title":"中间件的一些认知","lang":"zh-CN","frontmatter":{"aliases":"中间件的一些认知","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:53","updated":"2024-05-30 16:44","description":"中间件的一些认知 1. 什么是中间件 将具体业务和底层逻辑解耦的组件。 大致的效果是： 需要利用服务的人（前端写业务的），不需要知道底层逻辑（提供服务的）的具体实现，只要拿着中间件结果来用就好了 也不单单局限于操作系统 2. 中间件的好处 中间件能给客户带来什么？ 为上层应用软件的开发提供便捷的、开箱即用的服务交互和计算的能力，缩短开发周期； 屏蔽底层...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Daily-Thoughts/misc/misc-x-middleware.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"中间件的一些认知"}],["meta",{"property":"og:description","content":"中间件的一些认知 1. 什么是中间件 将具体业务和底层逻辑解耦的组件。 大致的效果是： 需要利用服务的人（前端写业务的），不需要知道底层逻辑（提供服务的）的具体实现，只要拿着中间件结果来用就好了 也不单单局限于操作系统 2. 中间件的好处 中间件能给客户带来什么？ 为上层应用软件的开发提供便捷的、开箱即用的服务交互和计算的能力，缩短开发周期； 屏蔽底层..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"中间件的一些认知\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是中间件","slug":"_1-什么是中间件","link":"#_1-什么是中间件","children":[]},{"level":2,"title":"2. 中间件的好处","slug":"_2-中间件的好处","link":"#_2-中间件的好处","children":[]},{"level":2,"title":"3.评判关键","slug":"_3-评判关键","link":"#_3-评判关键","children":[]},{"level":2,"title":"4. 常用基础中间件","slug":"_4-常用基础中间件","link":"#_4-常用基础中间件","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.26,"words":679},"filePathRelative":"posts/Daily-Thoughts/misc/misc-x-middleware.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 什么是中间件</h2>\\n<p><strong>将具体业务和底层逻辑解耦的组件。</strong></p>\\n<p>大致的效果是：<br>\\n需要利用服务的人（前端写业务的），不需要知道底层逻辑（提供服务的）的具体实现，只要拿着中间件结果来用就好了</p>\\n<blockquote>\\n<ul>\\n<li>\\n<p><s>说法一：介于操作系统和应用程序之间的产品。*</s></p>\\n<p>也不单单局限于操作系统</p>\\n</li>\\n</ul>\\n</blockquote>\\n<h2>2. 中间件的好处</h2>\\n<p>中间件能给客户带来什么？</p>\\n<ul>\\n<li>为上层应用软件的开发提供便捷的、开箱即用的服务交互和计算的能力，缩短开发周期；</li>\\n<li>屏蔽底层runtime的差异；</li>\\n<li>节省应用本身的系统资源，减少运行成本。</li>\\n</ul>","autoDesc":true}');export{o as comp,c as data};
