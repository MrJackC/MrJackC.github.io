import{_ as e,c as a,a as r,o as i}from"./app-tJW29Kmg.js";const n={};function o(l,t){return i(),a("div",null,t[0]||(t[0]=[r('<h1 id="rabbitmq问题-防止数据丢失-补充" tabindex="-1"><a class="header-anchor" href="#rabbitmq问题-防止数据丢失-补充"><span>RabbitMQ问题 - 防止数据丢失(补充)</span></a></h1><h2 id="_1-消息可靠传输" tabindex="-1"><a class="header-anchor" href="#_1-消息可靠传输"><span>1. 消息可靠传输</span></a></h2><p><strong>消息可靠传输</strong> 一般是业务系统接入消息中间件首要考虑的问题，一般消息中间件的消息传输保障分为三个层级：</p><ul><li><code>At most once</code>：最多一次。消息可能会丢失，但绝不会重复传输</li><li><code>At least once</code>：最少一次。消息绝不会丢失，但可能重复传输</li><li><code>Exactly once</code>：恰好一次。每条消息肯定会被传输一次且仅传输一次。</li></ul><p><strong>RabbitMQ 支持 「最多一次」和「最少一次」，不支持恰好一次</strong></p><h2 id="_2-最少一次投递考虑点" tabindex="-1"><a class="header-anchor" href="#_2-最少一次投递考虑点"><span>2. 最少一次投递考虑点</span></a></h2><p>最少一次投递实现需要考虑以下几个方面：</p><ul><li>消息生产者需要开启事物机制或 publisher confirm 机制。<strong>确保消息传输到 RabbitMQ 中</strong></li><li>消息生产者需要配合使用 mandatory 参数或则备份交换器来 <strong>确保消息</strong> 能够从交换器路 <strong>由到队列中</strong>，进而能够保存而不被丢弃</li><li>消息和队列都需要持久化处理，确保消息不会在 RabbitMQ 遇到异常情况时丢失。</li><li>消费者在消费小时时，需要将 autoAck 设置为 fasle，手动进行 ack</li></ul><h2 id="_3-最多一次投递考虑点" tabindex="-1"><a class="header-anchor" href="#_3-最多一次投递考虑点"><span>3. 最多一次投递考虑点</span></a></h2><p>最多一次，无需考虑。</p><h2 id="_4-恰好一次-rabbitmq无法保障-。" tabindex="-1"><a class="header-anchor" href="#_4-恰好一次-rabbitmq无法保障-。"><span>4. 恰好一次(RabbitMQ无法保障)。</span></a></h2><ul><li><p>考虑一种情况，来说明为什么无法保障：</p><p>消费者在 <strong>消费完一条消息后</strong>，向 RabbitMQ <strong>发送确认 Basic.Ack 命令</strong>，此时某种原因（网络断开等）<strong>导致 RabbitMQ 并没有收到这个确认命令</strong>。此时 RabbitMQ 不会将此条消息标记删除。在 <strong>重新建立连接后，还会消费到这一条消息</strong>，这就造成了 <strong>重复消费</strong>。</p></li><li><p>再来看一种情况：</p><p>生产者使用 publisher confirm 机制，发送一条消息等待 RabbitMQ 返回确认通知，此时网络断开，生产者捕获到异常情况，为了确保消息可靠性选择重新发送，这样 RabbitMQ 中就有两条同样的消息。消费时就相当于重复消费。</p></li></ul><p>总结起来，发生在业务系统与 RabbitMQ 交互网络连接方面。所以目前大多数主流的消息中间件都没有消息去重机制，来保障「恰好一次」。<strong>去重一般是在客户端实现，比如引入 GUID（Globally Unique Identifier）概念</strong>。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zq99299.github.io/mq-tutorial/rabbitmq-ac/04/10.html" target="_blank" rel="noopener noreferrer">消息传输保障</a></p>',15)]))}const c=e(n,[["render",o],["__file","rabbitmq-x-safe.html.vue"]]),p=JSON.parse('{"path":"/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-safe.html","title":"RabbitMQ问题 - 防止数据丢失(补充)","lang":"zh-CN","frontmatter":{"order":310,"category":["RabbitMQ","MQ"],"created":"2024-10-26 09:41","updated":"2024-10-26 09:55","description":"RabbitMQ问题 - 防止数据丢失(补充) 1. 消息可靠传输 消息可靠传输 一般是业务系统接入消息中间件首要考虑的问题，一般消息中间件的消息传输保障分为三个层级： At most once：最多一次。消息可能会丢失，但绝不会重复传输 At least once：最少一次。消息绝不会丢失，但可能重复传输 Exactly once：恰好一次。每条消息...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-safe.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"RabbitMQ问题 - 防止数据丢失(补充)"}],["meta",{"property":"og:description","content":"RabbitMQ问题 - 防止数据丢失(补充) 1. 消息可靠传输 消息可靠传输 一般是业务系统接入消息中间件首要考虑的问题，一般消息中间件的消息传输保障分为三个层级： At most once：最多一次。消息可能会丢失，但绝不会重复传输 At least once：最少一次。消息绝不会丢失，但可能重复传输 Exactly once：恰好一次。每条消息..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RabbitMQ问题 - 防止数据丢失(补充)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 消息可靠传输","slug":"_1-消息可靠传输","link":"#_1-消息可靠传输","children":[]},{"level":2,"title":"2. 最少一次投递考虑点","slug":"_2-最少一次投递考虑点","link":"#_2-最少一次投递考虑点","children":[]},{"level":2,"title":"3. 最多一次投递考虑点","slug":"_3-最多一次投递考虑点","link":"#_3-最多一次投递考虑点","children":[]},{"level":2,"title":"4. 恰好一次(RabbitMQ无法保障)。","slug":"_4-恰好一次-rabbitmq无法保障-。","link":"#_4-恰好一次-rabbitmq无法保障-。","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.09,"words":628},"filePathRelative":"posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-safe.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 消息可靠传输</h2>\\n<p><strong>消息可靠传输</strong> 一般是业务系统接入消息中间件首要考虑的问题，一般消息中间件的消息传输保障分为三个层级：</p>\\n<ul>\\n<li><code>At most once</code>：最多一次。消息可能会丢失，但绝不会重复传输</li>\\n<li><code>At least once</code>：最少一次。消息绝不会丢失，但可能重复传输</li>\\n<li><code>Exactly once</code>：恰好一次。每条消息肯定会被传输一次且仅传输一次。</li>\\n</ul>\\n<p><strong>RabbitMQ 支持 「最多一次」和「最少一次」，不支持恰好一次</strong></p>","autoDesc":true}');export{c as comp,p as data};
