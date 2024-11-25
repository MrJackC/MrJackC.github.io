import{_ as r,c as o,a,o as n}from"./app-BfIe-EZg.js";const t={};function s(i,e){return n(),o("div",null,e[0]||(e[0]=[a(`<h1 id="消息队列" tabindex="-1"><a class="header-anchor" href="#消息队列"><span>消息队列</span></a></h1><p><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-mq/" target="_blank" rel="noopener noreferrer"><code>yudao-spring-boot-starter-mq</code> (opens new window)</a>技术组件，基于 Redis 实现分布式消息队列：</p><ul><li>使用 <a href="http://www.redis.cn/topics/streams-intro.html" target="_blank" rel="noopener noreferrer">Stream (opens new window)</a>特性，提供【集群】消费的能力。</li><li>使用 <a href="http://www.redis.cn/topics/pubsub.html" target="_blank" rel="noopener noreferrer">Pub/Sub (opens new window)</a>特性，提供【广播】消费的能力。</li></ul><p>友情提示：</p><p>考虑到有部分同学对分布式消息队列了解的不多，所以在下文的广播消费、集群消费的描述，去除【消费者分组】的概念。如果你对这块感兴趣，可以看看艿艿写的系列文章：</p><ul><li><a href="http://www.iocoder.cn/Spring-Boot/RocketMQ/?yudao" target="_blank" rel="noopener noreferrer">《芋道 Spring Boot 消息队列 RocketMQ 入门》 (opens new window)</a>对应 <a href="https://github.com/YunaiV/SpringBoot-Labs/tree/master/lab-31" target="_blank" rel="noopener noreferrer">lab-31(opens new window)</a></li><li><a href="http://www.iocoder.cn/Spring-Boot/Kafka/?yudao" target="_blank" rel="noopener noreferrer">《芋道 Spring Boot 消息队列 Kafka 入门》 (opens new window)</a>对应 <a href="https://github.com/YunaiV/SpringBoot-Labs/tree/master/lab-03-kafka" target="_blank" rel="noopener noreferrer">lab-03-kafka(opens new window)</a></li><li><a href="http://www.iocoder.cn/Spring-Boot/RabbitMQ/?yudao" target="_blank" rel="noopener noreferrer">《芋道 Spring Boot 消息队列 RabbitMQ 入门》 (opens new window)</a>对应 <a href="https://github.com/YunaiV/SpringBoot-Labs/tree/master/lab-04-rabbitmq" target="_blank" rel="noopener noreferrer">lab-04-rabbitmq(opens new window)</a></li><li><a href="http://www.iocoder.cn/Spring-Boot/ActiveMQ/?yudao" target="_blank" rel="noopener noreferrer">《芋道 Spring Boot 消息队列 ActiveMQ 入门》 (opens new window)</a>对应 <a href="https://github.com/YunaiV/SpringBoot-Labs/tree/master/lab-32" target="_blank" rel="noopener noreferrer">lab-32(opens new window)</a></li></ul><h2 id="_0-消息队列的开启" tabindex="-1"><a class="header-anchor" href="#_0-消息队列的开启"><span><a href="https://doc.iocoder.cn/message-queue/#_0-%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97%E7%9A%84%E5%BC%80%E5%90%AF" target="_blank" rel="noopener noreferrer">#</a>0. 消息队列的开启</span></a></h2><p>消息队列默认是禁用状态，主要考虑一些团队可能不需要。如果你需要使用短信、邮箱等功能，需要进行开启。</p><p>通过修改 <code>application.yaml</code> 配置文件的 <code>yudao.mq.redis.pubsub.enable</code> 和 <code>yudao.mq.redis.pubsub.enable</code> 配置项目为 <code>true</code> 即可。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/消息队列/消息队列的开启.png" alt="消息队列的开启" tabindex="0" loading="lazy"><figcaption>消息队列的开启</figcaption></figure><h2 id="_1-集群消费" tabindex="-1"><a class="header-anchor" href="#_1-集群消费"><span><a href="https://doc.iocoder.cn/message-queue/#_1-%E9%9B%86%E7%BE%A4%E6%B6%88%E8%B4%B9" target="_blank" rel="noopener noreferrer">#</a>1. 集群消费</span></a></h2><p>集群消费，是指消息发送到 Redis 时，有且只会被一个消费者（应用 JVM 实例）收到，然后消费成功。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/消息队列/01.png" alt="集群消费" tabindex="0" loading="lazy"><figcaption>集群消费</figcaption></figure><h3 id="_1-1-使用场景" tabindex="-1"><a class="header-anchor" href="#_1-1-使用场景"><span><a href="https://doc.iocoder.cn/message-queue/#_1-1-%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF" target="_blank" rel="noopener noreferrer">#</a>1.1 使用场景</span></a></h3><p>集群消费在项目中的使用场景，主要是提供可靠的、可堆积的异步任务的能力。例如说：</p><ul><li>短信模块，使用它<a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/mq/consumer/sms/SmsSendConsumer.java" target="_blank" rel="noopener noreferrer">异步 (opens new window)</a>发送短信。</li><li>邮件模块，使用它<a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/mq/consumer/mail/MailSendConsumer.java" target="_blank" rel="noopener noreferrer">异步 (opens new window)</a>发送邮件。</li></ul><p>相比 <a href="https://doc.iocoder.cn/async-task" target="_blank" rel="noopener noreferrer">《开发指南 —— 异步任务》</a> 来说，Spring Async 在 JVM 实例重启时，会导致未执行完的任务丢失。而集群消费，因为消息是存储在 Redis 中，所以不会存在该问题。</p><h3 id="_1-2-实现源码" tabindex="-1"><a class="header-anchor" href="#_1-2-实现源码"><span><a href="https://doc.iocoder.cn/message-queue/#_1-2-%E5%AE%9E%E7%8E%B0%E6%BA%90%E7%A0%81" target="_blank" rel="noopener noreferrer">#</a>1.2 实现源码</span></a></h3><p>集群消费基于 Redis Stream 实现：</p><ul><li>实现 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-mq/src/main/java/cn/iocoder/yudao/framework/mq/core/stream/AbstractStreamMessage.java" target="_blank" rel="noopener noreferrer">AbstractStreamMessage (opens new window)</a>抽象类，定义【集群】消息。</li><li>使用 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-mq/src/main/java/cn/iocoder/yudao/framework/mq/core/RedisMQTemplate.java" target="_blank" rel="noopener noreferrer">RedisMQTemplate (opens new window)</a>的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-mq/src/main/java/cn/iocoder/yudao/framework/mq/core/RedisMQTemplate.java#L48-L64" target="_blank" rel="noopener noreferrer"><code>#send(message)</code> (opens new window)</a>方法，发送消息。</li><li>实现 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-mq/src/main/java/cn/iocoder/yudao/framework/mq/core/stream/AbstractStreamMessageListener.java" target="_blank" rel="noopener noreferrer">AbstractStreamMessageListener (opens new window)</a>接口，消费消息。</li></ul><p>最终使用 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-mq/src/main/java/cn/iocoder/yudao/framework/mq/config/YudaoMQAutoConfiguration.java" target="_blank" rel="noopener noreferrer">YudaoMQAutoConfiguration (opens new window)</a>配置类，扫描所有的 AbstractStreamMessageListener 监听器，初始化对应的消费者。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/消息队列/02.png" alt="YudaoMQAutoConfiguration" tabindex="0" loading="lazy"><figcaption>YudaoMQAutoConfiguration</figcaption></figure><h3 id="_1-3-实战案例" tabindex="-1"><a class="header-anchor" href="#_1-3-实战案例"><span><a href="https://doc.iocoder.cn/message-queue/#_1-3-%E5%AE%9E%E6%88%98%E6%A1%88%E4%BE%8B" target="_blank" rel="noopener noreferrer">#</a>1.3 实战案例</span></a></h3><p>以短信模块异步发送短息为例子，讲解集群消费的使用。</p><figure><img src="https://doc.iocoder.cn/img/消息队列/06.png" alt="实战案例" tabindex="0" loading="lazy"><figcaption>实战案例</figcaption></figure><h4 id="_1-3-1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_1-3-1-引入依赖"><span><a href="https://doc.iocoder.cn/message-queue/#_1-3-1-%E5%BC%95%E5%85%A5%E4%BE%9D%E8%B5%96" target="_blank" rel="noopener noreferrer">#</a>1.3.1 引入依赖</span></a></h4><p>在 <code>yudao-module-system-biz</code> 模块中，引入 <code>yudao-spring-boot-starter-mq</code> 技术组件。如下所示：</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;cn.iocoder.boot&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;yudao-spring-boot-starter-mq&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h4 id="_1-3-2-smssendmessage" tabindex="-1"><a class="header-anchor" href="#_1-3-2-smssendmessage"><span><a href="https://doc.iocoder.cn/message-queue/#_1-3-2-smssendmessage" target="_blank" rel="noopener noreferrer">#</a>1.3.2 SmsSendMessage</span></a></h4><p>在 <code>yudao-module-system-biz</code> 的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/mq/message/sms/" target="_blank" rel="noopener noreferrer"><code>mq/message/sms</code> (opens new window)</a>包下，创建 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/mq/message/sms/SmsSendMessage.java" target="_blank" rel="noopener noreferrer">SmsSendMessage (opens new window)</a>类，继承 AbstractStreamMessage 抽象类，短信发送消息。代码如下图：</p><figure><img src="https://doc.iocoder.cn/img/消息队列/03.png" alt="SmsSendMessage" tabindex="0" loading="lazy"><figcaption>SmsSendMessage</figcaption></figure><h4 id="_1-3-3-smsproducer" tabindex="-1"><a class="header-anchor" href="#_1-3-3-smsproducer"><span><a href="https://doc.iocoder.cn/message-queue/#_1-3-3-smsproducer" target="_blank" rel="noopener noreferrer">#</a>1.3.3 SmsProducer</span></a></h4><p>① 在 <code>yudao-module-system-biz</code> 的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/mq/producer/sms/" target="_blank" rel="noopener noreferrer"><code>mq/producer/sms</code> (opens new window)</a>包下，创建 <a href="https://github.com/YunaiV/ruoyi-vue-pro/tree/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/mq/producer/sms" target="_blank" rel="noopener noreferrer">SmsProducer (opens new window)</a>类，SmsSendMessage 的 Producer 生产者，核心是使用 RedisMQTemplate 发送 SmsSendMessage 消息。代码如下图：</p><figure><img src="https://doc.iocoder.cn/img/消息队列/04.png" alt="SmsProducer" tabindex="0" loading="lazy"><figcaption>SmsProducer</figcaption></figure><p>② 发送短信时，需要使用 SmsProducer 发送消息。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/消息队列/05.png" alt="调用 SmsProducer 示例" tabindex="0" loading="lazy"><figcaption>调用 SmsProducer 示例</figcaption></figure><h4 id="_1-3-4-smssendconsumer" tabindex="-1"><a class="header-anchor" href="#_1-3-4-smssendconsumer"><span><a href="https://doc.iocoder.cn/message-queue/#_1-3-4-smssendconsumer" target="_blank" rel="noopener noreferrer">#</a>1.3.4 SmsSendConsumer</span></a></h4><p>在 <code>yudao-module-system-biz</code> 的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/mq/consumer/sms/" target="_blank" rel="noopener noreferrer"><code>mq/consumer/sms</code> (opens new window)</a>包下，创建 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/mq/consumer/sms/SmsSendConsumer.java" target="_blank" rel="noopener noreferrer">SmsSendConsumer (opens new window)</a>类，SmsSendMessage 的 Consumer 消费者。代码如下图：</p><figure><img src="https://doc.iocoder.cn/img/消息队列/07.png" alt="SmsSendConsumer" tabindex="0" loading="lazy"><figcaption>SmsSendConsumer</figcaption></figure><h2 id="_2-广播消费" tabindex="-1"><a class="header-anchor" href="#_2-广播消费"><span><a href="https://doc.iocoder.cn/message-queue/#_2-%E5%B9%BF%E6%92%AD%E6%B6%88%E8%B4%B9" target="_blank" rel="noopener noreferrer">#</a>2. 广播消费</span></a></h2><p>广播消费，是指消息发送到 Redis 时，所有消费者（应用 JVM 实例）收到，然后消费成功。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/消息队列/11.png" alt="集群消费" tabindex="0" loading="lazy"><figcaption>集群消费</figcaption></figure><h3 id="_2-1-使用场景" tabindex="-1"><a class="header-anchor" href="#_2-1-使用场景"><span><a href="https://doc.iocoder.cn/message-queue/#_2-1-%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF" target="_blank" rel="noopener noreferrer">#</a>2.1 使用场景</span></a></h3><p>例如说，在应用中，缓存了数据字典等配置表在内存中，可以通过 Redis 广播消费，实现每个应用节点都消费消息，刷新本地内存的缓存。</p><p>又例如说，我们基于 WebSocket 实现了 IM 聊天，在我们给用户主动发送消息时，因为我们不知道用户连接的是哪个提供 WebSocket 的应用，所以可以通过 Redis 广播消费。每个应用判断当前用户是否是和自己提供的 WebSocket 服务连接，如果是，则推送消息给用户。</p><h3 id="_2-2-实现源码" tabindex="-1"><a class="header-anchor" href="#_2-2-实现源码"><span><a href="https://doc.iocoder.cn/message-queue/#_2-2-%E5%AE%9E%E7%8E%B0%E6%BA%90%E7%A0%81" target="_blank" rel="noopener noreferrer">#</a>2.2 实现源码</span></a></h3><p>广播消费基于 Redis Pub/Sub 实现：</p><ul><li>实现 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-mq/src/main/java/cn/iocoder/yudao/framework/mq/core/pubsub/AbstractChannelMessage.java" target="_blank" rel="noopener noreferrer">AbstractChannelMessage (opens new window)</a>抽象类，定义【广播】消息。</li><li>使用 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-mq/src/main/java/cn/iocoder/yudao/framework/mq/core/RedisMQTemplate.java" target="_blank" rel="noopener noreferrer">RedisMQTemplate (opens new window)</a>的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-mq/src/main/java/cn/iocoder/yudao/framework/mq/core/RedisMQTemplate.java#L33-L46" target="_blank" rel="noopener noreferrer"><code>#send(message)</code> (opens new window)</a>方法，发送消息。</li><li>实现 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-mq/src/main/java/cn/iocoder/yudao/framework/mq/core/pubsub/AbstractChannelMessageListener.java" target="_blank" rel="noopener noreferrer">AbstractChannelMessageListener (opens new window)</a>接口，消费消息。</li></ul><p>最终使用 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-mq/src/main/java/cn/iocoder/yudao/framework/mq/config/YudaoMQAutoConfiguration.java" target="_blank" rel="noopener noreferrer">YudaoMQAutoConfiguration (opens new window)</a>配置类，扫描所有的 AbstractChannelMessageListener 监听器，初始化对应的消费者。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/消息队列/12.png" alt="YudaoMQAutoConfiguration" tabindex="0" loading="lazy"><figcaption>YudaoMQAutoConfiguration</figcaption></figure><h3 id="_2-3-实战案例" tabindex="-1"><a class="header-anchor" href="#_2-3-实战案例"><span><a href="https://doc.iocoder.cn/message-queue/#_2-3-%E5%AE%9E%E6%88%98%E6%A1%88%E4%BE%8B" target="_blank" rel="noopener noreferrer">#</a>2.3 实战案例</span></a></h3><p>参见 <a href="https://doc.iocoder.cn/local-cache" target="_blank" rel="noopener noreferrer">《开发指南 —— 本地缓存》</a></p><p>上次更新: 2023/07/29, 15:56:49</p>`,53)]))}const p=r(t,[["render",s],["__file","1.消息队列.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/3.%E4%B8%AD%E9%97%B4%E4%BB%B6%E6%89%8B%E5%86%8C/1.%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97.html","title":"消息队列","lang":"zh-CN","frontmatter":{"description":"消息队列 yudao-spring-boot-starter-mq (opens new window)技术组件，基于 Redis 实现分布式消息队列： 使用 Stream (opens new window)特性，提供【集群】消费的能力。 使用 Pub/Sub (opens new window)特性，提供【广播】消费的能力。 友情提示： 考虑到有部...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/3.%E4%B8%AD%E9%97%B4%E4%BB%B6%E6%89%8B%E5%86%8C/1.%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"消息队列"}],["meta",{"property":"og:description","content":"消息队列 yudao-spring-boot-starter-mq (opens new window)技术组件，基于 Redis 实现分布式消息队列： 使用 Stream (opens new window)特性，提供【集群】消费的能力。 使用 Pub/Sub (opens new window)特性，提供【广播】消费的能力。 友情提示： 考虑到有部..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97%E7%9A%84%E5%BC%80%E5%90%AF.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-24T05:58:00.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-24T05:58:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"消息队列\\",\\"image\\":[\\"https://doc.iocoder.cn/img/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97%E7%9A%84%E5%BC%80%E5%90%AF.png\\",\\"https://doc.iocoder.cn/img/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/01.png\\",\\"https://doc.iocoder.cn/img/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/02.png\\",\\"https://doc.iocoder.cn/img/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/06.png\\",\\"https://doc.iocoder.cn/img/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/03.png\\",\\"https://doc.iocoder.cn/img/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/04.png\\",\\"https://doc.iocoder.cn/img/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/05.png\\",\\"https://doc.iocoder.cn/img/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/07.png\\",\\"https://doc.iocoder.cn/img/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/11.png\\",\\"https://doc.iocoder.cn/img/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/12.png\\"],\\"dateModified\\":\\"2024-11-24T05:58:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#0. 消息队列的开启","slug":"_0-消息队列的开启","link":"#_0-消息队列的开启","children":[]},{"level":2,"title":"#1. 集群消费","slug":"_1-集群消费","link":"#_1-集群消费","children":[{"level":3,"title":"#1.1 使用场景","slug":"_1-1-使用场景","link":"#_1-1-使用场景","children":[]},{"level":3,"title":"#1.2 实现源码","slug":"_1-2-实现源码","link":"#_1-2-实现源码","children":[]},{"level":3,"title":"#1.3 实战案例","slug":"_1-3-实战案例","link":"#_1-3-实战案例","children":[]}]},{"level":2,"title":"#2. 广播消费","slug":"_2-广播消费","link":"#_2-广播消费","children":[{"level":3,"title":"#2.1 使用场景","slug":"_2-1-使用场景","link":"#_2-1-使用场景","children":[]},{"level":3,"title":"#2.2 实现源码","slug":"_2-2-实现源码","link":"#_2-2-实现源码","children":[]},{"level":3,"title":"#2.3 实战案例","slug":"_2-3-实战案例","link":"#_2-3-实战案例","children":[]}]}],"git":{"createdTime":1732174913000,"updatedTime":1732427880000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.34,"words":1602},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/3.中间件手册/1.消息队列.md","localizedDate":"2024年11月21日","excerpt":"\\n<p><a href=\\"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-mq/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>yudao-spring-boot-starter-mq</code> (opens new window)</a>技术组件，基于 Redis 实现分布式消息队列：</p>\\n<ul>\\n<li>使用 <a href=\\"http://www.redis.cn/topics/streams-intro.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Stream (opens new window)</a>特性，提供【集群】消费的能力。</li>\\n<li>使用 <a href=\\"http://www.redis.cn/topics/pubsub.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Pub/Sub (opens new window)</a>特性，提供【广播】消费的能力。</li>\\n</ul>","autoDesc":true}');export{p as comp,c as data};
