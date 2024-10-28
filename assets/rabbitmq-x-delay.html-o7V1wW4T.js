import{_ as e,c as a,a as i,o as r}from"./app-W9QyTiMU.js";const n={};function o(s,t){return r(),a("div",null,t[0]||(t[0]=[i('<h1 id="rabbitmq进阶-延迟队列" tabindex="-1"><a class="header-anchor" href="#rabbitmq进阶-延迟队列"><span>RabbitMQ进阶 - 延迟队列</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>在 AMQP 协议或 RabbitMQ 中，本身没有直接支持延迟队列的功能。可以 **通过 DLX 和 TTL **模拟出延迟队列的功能。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231119401.png" alt="image-20220923203315852" tabindex="0" loading="lazy"><figcaption>image-20220923203315852</figcaption></figure><p>上图是死信队列的用法，也是延迟队列的用法。唯一不同的是，消费者订阅的是 <strong>死信队列</strong>，没有消费者订阅普通队列的话，当消息过期时间到了，就会被路由到死信队列，这就达成了，消息被延迟消费的目的。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zq99299.github.io/mq-tutorial/rabbitmq-ac/04/04.html" target="_blank" rel="noopener noreferrer">延迟队列</a></p>',7)]))}const l=e(n,[["render",o],["__file","rabbitmq-x-delay.html.vue"]]),p=JSON.parse('{"path":"/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-delay.html","title":"RabbitMQ进阶 - 延迟队列","lang":"zh-CN","frontmatter":{"aliases":"RabbitMQ进阶 - 延迟队列","tags":null,"cssclass":null,"source":null,"order":60,"description":"RabbitMQ进阶 - 延迟队列 1. 简介 在 AMQP 协议或 RabbitMQ 中，本身没有直接支持延迟队列的功能。可以 **通过 DLX 和 TTL **模拟出延迟队列的功能。 image-20220923203315852image-20220923203315852 上图是死信队列的用法，也是延迟队列的用法。唯一不同的是，消费者订阅的是 ...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-delay.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"RabbitMQ进阶 - 延迟队列"}],["meta",{"property":"og:description","content":"RabbitMQ进阶 - 延迟队列 1. 简介 在 AMQP 协议或 RabbitMQ 中，本身没有直接支持延迟队列的功能。可以 **通过 DLX 和 TTL **模拟出延迟队列的功能。 image-20220923203315852image-20220923203315852 上图是死信队列的用法，也是延迟队列的用法。唯一不同的是，消费者订阅的是 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231119401.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RabbitMQ进阶 - 延迟队列\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231119401.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.54,"words":161},"filePathRelative":"posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-delay.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>在 AMQP 协议或 RabbitMQ 中，本身没有直接支持延迟队列的功能。可以 **通过 DLX 和 TTL **模拟出延迟队列的功能。</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231119401.png\\" alt=\\"image-20220923203315852\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220923203315852</figcaption></figure>","autoDesc":true}');export{l as comp,p as data};
