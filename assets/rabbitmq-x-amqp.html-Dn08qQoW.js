import{_ as t,c as a,a as i,o as r}from"./app-JRvFIbSa.js";const l={};function n(p,e){return r(),a("div",null,e[0]||(e[0]=[i('<h1 id="rabbitmq相关概念-aqmp-协议介绍" tabindex="-1"><a class="header-anchor" href="#rabbitmq相关概念-aqmp-协议介绍"><span>RabbitMQ相关概念 - AQMP 协议介绍</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>RabbitMQ 是 AMQP 协议的 Erlang 的实现（RabbitMQ 还支持 STOMP、MQTT 等协议）。</p><p>AMQP 的模型架构和 RabbitMQ 的模型架构是一样的：</p><ol><li>生产者发送消息给交换器</li><li>交换器和队列绑定</li><li>当 RoutingKey 和 BindingKey 相匹配时，消息被存入相应的队列中</li><li>消费者可以订阅相应的队列来获取消息。</li></ol><p>RabbitMQ 中的交换器、交换器类型、队列、绑定、路由键等都遵循 AMQP 协议中相应的概念。本书讲解的 RabbitMQ 版本对应的是 <code>AMQP 0-9-1 </code>版本协议。如无特指，则以该协议为基准介绍。</p><blockquote><ul><li>STOPM：Simple/Streaming Text Oriented Messaging Protocol</li></ul><p>简单/流文本面向消息协议，提供了一个可互操作的连接格式，运行 STOMP 客户端与任意 STOMP 消息代理（Broker）进行交互。</p><p>STOMP 协议由于设计简单，易于开发客户端，因此在多种遇上和平台上得到广泛应用</p><ul><li>MQTT：Message Queuing Telemetry Transport</li></ul><p>消息队列遥测传输。是 IBM 开发的一个 <strong>及时通信协议</strong>，有可能成为物联网的重要组成部分。</p><p>该协议支持所有平台，几乎可以把所有物联网和外部连接起来，被用来当做传感器和制动器的通信协议。</p></blockquote><h2 id="_2-amqp-三层协议" tabindex="-1"><a class="header-anchor" href="#_2-amqp-三层协议"><span>2. AMQP 三层协议</span></a></h2><p>AMQP 协议本身包括三层：</p><ul><li><p>Module Layer：</p><p>位于协议最高层，主要定义了一些供客户端调用的命令，客户端可以利用这些命令实现自己的业务逻辑。</p><p>例如：客户端可以使用 <code>Queue.Declare</code> 命令声明一个队列或使用 <code>Basic.Consume</code> 订阅消费一个队列中的消息。</p></li><li><p>Session Layer：</p><p>位于中间层，主要负责将客户端的命令发送给服务器，再将服务端的应答返回给客户端，主要为客户端与服务器之间的通信提供可靠性同步机制和错误处理。</p></li><li><p>Transport Layer：</p><p>位于最底层，主要传输二进制数据流，提供帧的处理、信道复用、错误检测和数据表示等。</p></li></ul><h2 id="_3-amqp-报文交互" tabindex="-1"><a class="header-anchor" href="#_3-amqp-报文交互"><span>3. AMQP 报文交互</span></a></h2><p>AMQP 是一个通信协议，会涉及到 <strong>报文交互</strong>：</p><ul><li>从 low-level 举例来说，AMQP 本身是应用层的协议，填充于 TCP 协议层的数据部分</li><li>从 high-level 来说，AMQP 是通过协议命令进行交互的。可以看成是一系列结构化命令的集合，这里的命令代表一种操作，类似于 HTTP 中的方法，GET、POST...</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zq99299.github.io/mq-tutorial/rabbitmq-ac/02/02.html" target="_blank" rel="noopener noreferrer">AQMP 协议介绍</a></p>',15)]))}const s=t(l,[["render",n],["__file","rabbitmq-x-amqp.html.vue"]]),b=JSON.parse('{"path":"/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-amqp.html","title":"RabbitMQ相关概念 - AQMP 协议介绍","lang":"zh-CN","frontmatter":{"order":200,"category":["RabbitMQ","MQ"],"description":"RabbitMQ相关概念 - AQMP 协议介绍 1. 简介 RabbitMQ 是 AMQP 协议的 Erlang 的实现（RabbitMQ 还支持 STOMP、MQTT 等协议）。 AMQP 的模型架构和 RabbitMQ 的模型架构是一样的： 生产者发送消息给交换器 交换器和队列绑定 当 RoutingKey 和 BindingKey 相匹配时，消...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-amqp.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"RabbitMQ相关概念 - AQMP 协议介绍"}],["meta",{"property":"og:description","content":"RabbitMQ相关概念 - AQMP 协议介绍 1. 简介 RabbitMQ 是 AMQP 协议的 Erlang 的实现（RabbitMQ 还支持 STOMP、MQTT 等协议）。 AMQP 的模型架构和 RabbitMQ 的模型架构是一样的： 生产者发送消息给交换器 交换器和队列绑定 当 RoutingKey 和 BindingKey 相匹配时，消..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RabbitMQ相关概念 - AQMP 协议介绍\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. AMQP 三层协议","slug":"_2-amqp-三层协议","link":"#_2-amqp-三层协议","children":[]},{"level":2,"title":"3. AMQP 报文交互","slug":"_3-amqp-报文交互","link":"#_3-amqp-报文交互","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.21,"words":663},"filePathRelative":"posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-amqp.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>RabbitMQ 是 AMQP 协议的 Erlang 的实现（RabbitMQ 还支持 STOMP、MQTT 等协议）。</p>\\n<p>AMQP 的模型架构和 RabbitMQ 的模型架构是一样的：</p>\\n<ol>\\n<li>生产者发送消息给交换器</li>\\n<li>交换器和队列绑定</li>\\n<li>当 RoutingKey 和 BindingKey 相匹配时，消息被存入相应的队列中</li>\\n<li>消费者可以订阅相应的队列来获取消息。</li>\\n</ol>\\n<p>RabbitMQ 中的交换器、交换器类型、队列、绑定、路由键等都遵循 AMQP 协议中相应的概念。本书讲解的 RabbitMQ 版本对应的是 <code>AMQP 0-9-1 </code>版本协议。如无特指，则以该协议为基准介绍。</p>","autoDesc":true}');export{s as comp,b as data};
