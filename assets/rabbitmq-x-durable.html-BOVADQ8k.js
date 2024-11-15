import{_ as e,c as r,a,o as n}from"./app-fWubcX7c.js";const i={};function o(p,t){return n(),r("div",null,t[0]||(t[0]=[a('<h1 id="rabbitmq进阶-持久化" tabindex="-1"><a class="header-anchor" href="#rabbitmq进阶-持久化"><span>RabbitMQ进阶 - 持久化</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>持久化在前面多次提到，持久化可以提高 RabbitMQ 的可靠性，防止在异常情况（重启、关闭、宕机等）下的数据丢失。</p><p>本节针对这个概念做一个总结。RabbitMQ 的持久化分为三个部分：</p><ul><li><p>交换器的持久化</p><p>在声明交换器是将 durable 参数设置为 true 实现，如果不持久化，RabbitMQ 服务重启之后，相关的<strong>交换器元数据会丢失</strong>（没有这个交换器了），但是 <strong>队列和消息不会丢失</strong>（分情况是否设置持久化），只是 <strong>不能将消息发送到这个交换器</strong>了。</p></li><li><p>队列的持久化</p><p>在声明队列时将 durable 参数设置为 true 实现，如果不持久化，RabbitMQ 服务重启之后，相关的 <strong>元数据会丢失</strong>，<strong>消息也会丢失</strong>；</p></li><li><p>消息的持久化</p><p>但是队列的持久化，并 <strong>不能保证消息数据不丢失</strong>，要保证消息不丢失，需要将消息的投递模式设置为 2 （BasicProperties 中的 deliveryMode 属性）</p></li></ul><blockquote><p>注意要点</p><p>不是所有的消息都设置持久化，在一些对可靠性要求不是那么高的消息，可以不采用持久化。这样可以提高整体的吞吐量。</p></blockquote><h2 id="_2-设置持久化后消息也可能丢失" tabindex="-1"><a class="header-anchor" href="#_2-设置持久化后消息也可能丢失"><span>2. 设置持久化后消息也可能丢失</span></a></h2><p>交换器、队列、消息都设置为持久化，也有可能丢失，有以下一个方面：</p><ul><li><p>autoAck ：自动确认</p><p>在业务系统中，自动确认是最容易丢失的，如果处理过程中发生异常，消息可能就丢了。</p><p>解决方案：改成手动 ack</p></li><li><p>数据刷盘：RabbitMQ 依赖内核的 fsync 函数存盘</p><p>关于 fsync 函数，自己百度；大概就是数据先写缓存，等待缓存写满，或则内核需要重用缓存时，会将该缓存排入输出队列，进而同步到设备上。</p><p>服务器突然断电，就有可能导致丢失一部分数据；</p><p>解决方案：可以使用 RabbitMQ 的镜像队列机制（后面章节会讲解），相当于配置了副本，master 挂掉，会自动切换到 slave 节点，保证了高可用性。</p></li></ul><p>还可以在发送端引 <strong>入事物机制</strong> 或 <strong>发送方确认机制</strong> 来保证消息已经正确发送并存储至 RabbitMQ 中。下一章节讲解</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zq99299.github.io/mq-tutorial/rabbitmq-ac/04/07.html" target="_blank" rel="noopener noreferrer">持久化</a></p>',12)]))}const l=e(i,[["render",o],["__file","rabbitmq-x-durable.html.vue"]]),b=JSON.parse('{"path":"/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-durable.html","title":"RabbitMQ进阶 - 持久化","lang":"zh-CN","frontmatter":{"order":90,"category":["RabbitMQ","MQ"],"created":"2024-10-26 09:41","updated":"2024-10-26 09:55","description":"RabbitMQ进阶 - 持久化 1. 简介 持久化在前面多次提到，持久化可以提高 RabbitMQ 的可靠性，防止在异常情况（重启、关闭、宕机等）下的数据丢失。 本节针对这个概念做一个总结。RabbitMQ 的持久化分为三个部分： 交换器的持久化 在声明交换器是将 durable 参数设置为 true 实现，如果不持久化，RabbitMQ 服务重启之...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-durable.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"RabbitMQ进阶 - 持久化"}],["meta",{"property":"og:description","content":"RabbitMQ进阶 - 持久化 1. 简介 持久化在前面多次提到，持久化可以提高 RabbitMQ 的可靠性，防止在异常情况（重启、关闭、宕机等）下的数据丢失。 本节针对这个概念做一个总结。RabbitMQ 的持久化分为三个部分： 交换器的持久化 在声明交换器是将 durable 参数设置为 true 实现，如果不持久化，RabbitMQ 服务重启之..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RabbitMQ进阶 - 持久化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 设置持久化后消息也可能丢失","slug":"_2-设置持久化后消息也可能丢失","link":"#_2-设置持久化后消息也可能丢失","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.1,"words":629},"filePathRelative":"posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-durable.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>持久化在前面多次提到，持久化可以提高 RabbitMQ 的可靠性，防止在异常情况（重启、关闭、宕机等）下的数据丢失。</p>\\n<p>本节针对这个概念做一个总结。RabbitMQ 的持久化分为三个部分：</p>\\n<ul>\\n<li>\\n<p>交换器的持久化</p>\\n<p>在声明交换器是将 durable 参数设置为 true 实现，如果不持久化，RabbitMQ 服务重启之后，相关的<strong>交换器元数据会丢失</strong>（没有这个交换器了），但是 <strong>队列和消息不会丢失</strong>（分情况是否设置持久化），只是 <strong>不能将消息发送到这个交换器</strong>了。</p>\\n</li>\\n<li>\\n<p>队列的持久化</p>\\n<p>在声明队列时将 durable 参数设置为 true 实现，如果不持久化，RabbitMQ 服务重启之后，相关的 <strong>元数据会丢失</strong>，<strong>消息也会丢失</strong>；</p>\\n</li>\\n<li>\\n<p>消息的持久化</p>\\n<p>但是队列的持久化，并 <strong>不能保证消息数据不丢失</strong>，要保证消息不丢失，需要将消息的投递模式设置为 2 （BasicProperties 中的 deliveryMode 属性）</p>\\n</li>\\n</ul>","autoDesc":true}');export{l as comp,b as data};
