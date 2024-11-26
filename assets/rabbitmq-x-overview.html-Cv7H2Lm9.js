import{_ as a,c as t,a as i,o as n}from"./app-JRvFIbSa.js";const r={};function g(o,e){return n(),t("div",null,e[0]||(e[0]=[i('<h1 id="rabbitmq入门-开篇" tabindex="-1"><a class="header-anchor" href="#rabbitmq入门-开篇"><span>RabbitMQ入门 - 开篇</span></a></h1><h2 id="_1-什么是消息队列" tabindex="-1"><a class="header-anchor" href="#_1-什么是消息队列"><span>1. 什么是消息队列</span></a></h2><p><strong>消息</strong>指的是两个应用间传递的数据。数据的类型有很多种形式，可能只包含文本字符串，也可能包含嵌入对象。</p><p><strong>“消息队列(Message Queue)”是在消息的传输过程中保存消息的容器</strong>。在消息队列中，通常有生产者和消费者两个角色。生产者只负责发送数据到消息队列，谁从消息队列中取出数据处理，他不管。消费者只负责从消息队列中取出数据处理，他不管这是谁发送的数据。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120224.png" alt="image-20220922195726878" tabindex="0" loading="lazy"><figcaption>image-20220922195726878</figcaption></figure><h2 id="_2-为什么使用消息队列" tabindex="-1"><a class="header-anchor" href="#_2-为什么使用消息队列"><span>2. 为什么使用消息队列</span></a></h2><p>主要有三个作用：</p><ul><li><strong>解耦</strong>。如图所示。假设有系统B、C、D都需要系统A的数据，于是系统A调用三个方法发送数据到B、C、D。这时，系统D不需要了，那就需要在系统A把相关的代码删掉。假设这时有个新的系统E需要数据，这时系统A又要增加调用系统E的代码。为了降低这种强耦合，就可以使用MQ，<strong>系统A只需要把数据发送到MQ，其他系统如果需要数据，则从MQ中获取即可</strong>。</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120263.png" alt="image-20220922195842827" tabindex="0" loading="lazy"><figcaption>image-20220922195842827</figcaption></figure><ul><li>异步。如图所示。一个客户端请求发送进来，系统A会调用系统B、C、D三个系统，同步请求的话，响应时间就是系统A、B、C、D的总和，也就是800ms。<strong>如果使用MQ，系统A发送数据到MQ，然后就可以返回响应给客户端，不需要再等待系统B、C、D的响应，可以大大地提高性能</strong>。对于一些非必要的业务，比如发送短信，发送邮件等等，就可以采用MQ。</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120288.png" alt="image-20220922200103149" tabindex="0" loading="lazy"><figcaption>image-20220922200103149</figcaption></figure><ul><li>削峰。如图所示。这其实是MQ一个很重要的应用。假设系统A在某一段时间请求数暴增，有5000个请求发送过来，系统A这时就会发送5000条SQL进入MySQL进行执行，MySQL对于如此庞大的请求当然处理不过来，MySQL就会崩溃，导致系统瘫痪。<strong>如果使用MQ，系统A不再是直接发送SQL到数据库，而是把数据发送到MQ，MQ短时间积压数据是可以接受的，然后由消费者每次拉取2000条进行处理，防止在请求峰值时期大量的请求直接发送到MySQL导致系统崩溃</strong>。</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120311.png" alt="image-20220922200337872" tabindex="0" loading="lazy"><figcaption>image-20220922200337872</figcaption></figure><h2 id="_3-rabbitmq-简介" tabindex="-1"><a class="header-anchor" href="#_3-rabbitmq-简介"><span>3. RabbitMQ 简介</span></a></h2><p>RabbitMQ是一款使用Erlang语言开发的，实现AMQP(Advanced Message Queuing Protocol，高级消息队列协议)的开源消息中间件，最初起源于金融系统，用于在分布式系统中存储转发消息。</p><h3 id="_3-1-特点" tabindex="-1"><a class="header-anchor" href="#_3-1-特点"><span>3.1 特点</span></a></h3><ul><li><strong>可靠性</strong>：支持持久化，传输确认，发布确认等保证了MQ的可靠性。</li><li><strong>灵活的分发消息策略(路由)</strong>：这应该是RabbitMQ的一大特点。在消息进入MQ前由Exchange(交换机)进行路由消息。分发消息策略有：简单模式、工作队列模式、发布订阅模式、路由模式、通配符模式。</li><li><strong>支持集群</strong>：多台RabbitMQ服务器可以组成一个集群，形成一个逻辑Broker。</li><li><strong>多种协议</strong>：RabbitMQ支持多种消息队列协议，比如 STOMP、MQTT 等等。</li><li><strong>支持多种语言客户端</strong>：RabbitMQ几乎支持所有常用编程语言，包括 Java、.NET、Ruby 等等。</li><li><strong>可视化管理界面</strong>：RabbitMQ提供了一个易用的用户界面，使得用户可以监控和管理消息 Broker。</li><li><strong>插件机制</strong>：RabbitMQ提供了许多插件，可以通过插件进行扩展，也可以编写自己的插件。</li></ul><h2 id="_4-rabbitmq中的组成部分" tabindex="-1"><a class="header-anchor" href="#_4-rabbitmq中的组成部分"><span>4. RabbitMQ中的组成部分</span></a></h2><ul><li>Broker：消息队列服务进程。此进程包括两个部分：Exchange和Queue。</li><li>Exchange：消息队列交换机。<strong>按一定的规则将消息路由转发到某个队列</strong>。</li><li>Queue：消息队列，存储消息的队列。</li><li>Producer：消息生产者。生产方客户端将消息同交换机路由发送到队列中。</li><li>Consumer：消息消费者。消费队列中存储的消息。</li></ul><p>这些组成部分是如何协同工作的呢，大概的流程如下，请看下图：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120344.png" alt="image-20220922203245154" tabindex="0" loading="lazy"><figcaption>image-20220922203245154</figcaption></figure><ul><li>消息生产者连接到RabbitMQ Broker，创建connection，开启channel。</li><li>生产者声明交换机类型、名称、是否持久化等。</li><li>生产者发送消息，并指定消息是否持久化等属性和routing key。</li><li>exchange收到消息之后，<strong>根据routing key路由到跟当前交换机绑定的相匹配的队列</strong>里面。</li><li>消费者监听接收到消息之后开始业务处理。</li></ul><h2 id="_5-exchange的四种类型以及用法" tabindex="-1"><a class="header-anchor" href="#_5-exchange的四种类型以及用法"><span>5. Exchange的四种类型以及用法</span></a></h2><p>从上面的工作流程可以看出，实际上有个关键的组件Exchange，因为<strong>消息发送到RabbitMQ后首先要经过Exchange路由才能找到对应的Queue</strong>。</p><p>实际上Exchange类型有四种，根据不同的类型工作的方式也有所不同。在HelloWord例子中，我们就使用了比较简单的<strong>Direct Exchange</strong>，翻译就是直连交换机。其余三种分别是：<strong>Fanout exchange、Topic exchange、Headers exchange</strong>。</p><h3 id="_5-1-direct-exchange-直连" tabindex="-1"><a class="header-anchor" href="#_5-1-direct-exchange-直连"><span>5.1 Direct Exchange(直连)</span></a></h3><p>见文知意，直连交换机意思是此交换机需要绑定一个队列，要求<strong>该消息与一个特定的路由键完全匹配</strong>。简单点说就是一对一的，点对点的发送。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120365.png" alt="image-20220922203746317" tabindex="0" loading="lazy"><figcaption>image-20220922203746317</figcaption></figure><h3 id="_5-2-fanout-exchange-发布订阅" tabindex="-1"><a class="header-anchor" href="#_5-2-fanout-exchange-发布订阅"><span>5.2 Fanout exchange(发布订阅)</span></a></h3><p>这种类型的交换机需要将队列绑定到交换机上。<strong>一个发送到交换机的消息都会被转发到与该交换机绑定的所有队列上</strong>。很像子网广播，每台子网内的主机都获得了一份复制的消息。简单点说就是发布订阅。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120389.png" alt="image-20220922204506785" tabindex="0" loading="lazy"><figcaption>image-20220922204506785</figcaption></figure><h3 id="_5-3-topic-exchange-通配符" tabindex="-1"><a class="header-anchor" href="#_5-3-topic-exchange-通配符"><span>5.3 Topic Exchange(通配符)</span></a></h3><p>直接翻译的话叫做主题交换机，如果从用法上面翻译可能叫通配符交换机会更加贴切。这种交换机是使用通配符去匹配，路由到对应的队列。通配符有两种：&quot;*&quot; 、 &quot;#&quot;。需要注意的是通配符前面必须要加上&quot;.&quot;符号。</p><p><code>*</code> 符号：有且只匹配一个词。比如 <code>a.*</code>可以匹配到&quot;a.b&quot;、&quot;a.c&quot;，但是匹配不了&quot;a.b.c&quot;。</p><p><code>#</code> 符号：匹配一个或多个词。比如&quot;rabbit.#&quot;既可以匹配到&quot;rabbit.a.b&quot;、&quot;rabbit.a&quot;，也可以匹配到&quot;rabbit.a.b.c&quot;。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120412.png" alt="image-20220922204704979" tabindex="0" loading="lazy"><figcaption>image-20220922204704979</figcaption></figure><p>比较常用的就是以上三种：直连(DirectExchange)，发布订阅(FanoutExchange)，通配符(TopicExchange)。熟练运用这三种交换机类型，基本上可以解决大部分的业务场景。</p><p>实际上稍微思考一下，可以发现通配符(TopicExchange)这种模式其实是可以达到直连(DirectExchange)和发布订阅(FanoutExchange)这两种的效果的。</p><p>FanoutExchange不需要绑定routingKey，所以性能相对TopicExchange会好一点。</p><h3 id="_5-4-headers-exchange-请求头匹配-不推荐" tabindex="-1"><a class="header-anchor" href="#_5-4-headers-exchange-请求头匹配-不推荐"><span>5.4 Headers Exchange(请求头匹配，不推荐)</span></a></h3><p>这种交换机用的相对没这么多。<strong>它跟上面三种有点区别，它的路由不是用routingKey进行路由匹配，而是在匹配请求头中所带的键值进行路由</strong>。如图所示：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120436.png" alt="image-20220922204955736" tabindex="0" loading="lazy"><figcaption>image-20220922204955736</figcaption></figure><p>创建队列需要设置绑定的头部信息，有两种模式：<strong>全部匹配和部分匹配</strong>。如上图所示，交换机会根据生产者发送过来的头部信息携带的键值去匹配队列绑定的键值，路由到对应的队列。</p><h2 id="_6-交换器无法根据自身类型和路由键找到符合条件队列时-有哪些处理" tabindex="-1"><a class="header-anchor" href="#_6-交换器无法根据自身类型和路由键找到符合条件队列时-有哪些处理"><span>6. 交换器无法根据自身类型和路由键找到符合条件队列时，有哪些处理？</span></a></h2><p>mandatory ：true 返回消息给生产者。</p><p>mandatory: false 直接丢弃。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://developer.aliyun.com/article/769883" target="_blank" rel="noopener noreferrer">超详细的RabbitMQ入门，看这篇就够了！</a></p><p><a href="https://medium.com/@zamhuang/rabbitmq-%E4%BA%94%E5%88%86%E9%90%98%E8%BC%95%E9%AC%86%E4%BA%86%E8%A7%A3-rabbitmq-%E9%81%8B%E4%BD%9C-fcaecbaa69d4" target="_blank" rel="noopener noreferrer">【RabbitMQ】五分鐘輕鬆了解 RabbitMQ 運作</a></p><p><a href="https://www.cnblogs.com/vipstone/p/9275256.html" target="_blank" rel="noopener noreferrer">RabbitMQ系列（二）深入了解RabbitMQ工作原理及简单使用</a></p>',50)]))}const s=a(r,[["render",g],["__file","rabbitmq-x-overview.html.vue"]]),l=JSON.parse('{"path":"/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-overview.html","title":"RabbitMQ入门 - 开篇","lang":"zh-CN","frontmatter":{"aliases":"RabbitMQ入门 - 开篇","tags":null,"cssclass":null,"source":null,"order":10,"category":["RabbitMQ","MQ"],"created":"2024-02-22 10:50","updated":"2024-10-26 09:55","description":"RabbitMQ入门 - 开篇 1. 什么是消息队列 消息指的是两个应用间传递的数据。数据的类型有很多种形式，可能只包含文本字符串，也可能包含嵌入对象。 “消息队列(Message Queue)”是在消息的传输过程中保存消息的容器。在消息队列中，通常有生产者和消费者两个角色。生产者只负责发送数据到消息队列，谁从消息队列中取出数据处理，他不管。消费者只负...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"RabbitMQ入门 - 开篇"}],["meta",{"property":"og:description","content":"RabbitMQ入门 - 开篇 1. 什么是消息队列 消息指的是两个应用间传递的数据。数据的类型有很多种形式，可能只包含文本字符串，也可能包含嵌入对象。 “消息队列(Message Queue)”是在消息的传输过程中保存消息的容器。在消息队列中，通常有生产者和消费者两个角色。生产者只负责发送数据到消息队列，谁从消息队列中取出数据处理，他不管。消费者只负..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120224.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RabbitMQ入门 - 开篇\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120224.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120263.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120288.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120311.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120344.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120365.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120389.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120412.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120436.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是消息队列","slug":"_1-什么是消息队列","link":"#_1-什么是消息队列","children":[]},{"level":2,"title":"2. 为什么使用消息队列","slug":"_2-为什么使用消息队列","link":"#_2-为什么使用消息队列","children":[]},{"level":2,"title":"3. RabbitMQ 简介","slug":"_3-rabbitmq-简介","link":"#_3-rabbitmq-简介","children":[{"level":3,"title":"3.1 特点","slug":"_3-1-特点","link":"#_3-1-特点","children":[]}]},{"level":2,"title":"4. RabbitMQ中的组成部分","slug":"_4-rabbitmq中的组成部分","link":"#_4-rabbitmq中的组成部分","children":[]},{"level":2,"title":"5. Exchange的四种类型以及用法","slug":"_5-exchange的四种类型以及用法","link":"#_5-exchange的四种类型以及用法","children":[{"level":3,"title":"5.1 Direct Exchange(直连)","slug":"_5-1-direct-exchange-直连","link":"#_5-1-direct-exchange-直连","children":[]},{"level":3,"title":"5.2 Fanout exchange(发布订阅)","slug":"_5-2-fanout-exchange-发布订阅","link":"#_5-2-fanout-exchange-发布订阅","children":[]},{"level":3,"title":"5.3 Topic Exchange(通配符)","slug":"_5-3-topic-exchange-通配符","link":"#_5-3-topic-exchange-通配符","children":[]},{"level":3,"title":"5.4 Headers Exchange(请求头匹配，不推荐)","slug":"_5-4-headers-exchange-请求头匹配-不推荐","link":"#_5-4-headers-exchange-请求头匹配-不推荐","children":[]}]},{"level":2,"title":"6. 交换器无法根据自身类型和路由键找到符合条件队列时，有哪些处理？","slug":"_6-交换器无法根据自身类型和路由键找到符合条件队列时-有哪些处理","link":"#_6-交换器无法根据自身类型和路由键找到符合条件队列时-有哪些处理","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.83,"words":2049},"filePathRelative":"posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-overview.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 什么是消息队列</h2>\\n<p><strong>消息</strong>指的是两个应用间传递的数据。数据的类型有很多种形式，可能只包含文本字符串，也可能包含嵌入对象。</p>\\n<p><strong>“消息队列(Message Queue)”是在消息的传输过程中保存消息的容器</strong>。在消息队列中，通常有生产者和消费者两个角色。生产者只负责发送数据到消息队列，谁从消息队列中取出数据处理，他不管。消费者只负责从消息队列中取出数据处理，他不管这是谁发送的数据。</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231120224.png\\" alt=\\"image-20220922195726878\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220922195726878</figcaption></figure>","autoDesc":true}');export{s as comp,l as data};
