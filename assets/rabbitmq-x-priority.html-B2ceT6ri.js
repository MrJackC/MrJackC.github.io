import{_ as a,c as i,a as n,o as r}from"./app-CpAF2rca.js";const l={};function o(p,s){return r(),i("div",null,s[0]||(s[0]=[n(`<h1 id="rabbitmq进阶-优先级队列" tabindex="-1"><a class="header-anchor" href="#rabbitmq进阶-优先级队列"><span>RabbitMQ进阶 - 优先级队列</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>优先级高的消息具备 <strong>优先被消费</strong> 的特权。</p><h2 id="_2-代码实现" tabindex="-1"><a class="header-anchor" href="#_2-代码实现"><span>2. 代码实现</span></a></h2><p>在定义队列时，可通过参数 <code>x-max-priority</code> 来指声明此队列的最大优先级别。在发送消息时，给消息设置的最大级别不能超过这个值</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 定义队列支持的最大级别</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">final</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> HashMap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Object</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> arguments </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> HashMap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">arguments</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">put</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;x-max-priority&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">queueDeclare</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;queue.priority&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, arguments);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 发送消息时设置消息的优先级</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">final</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> AMQP</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">BasicProperties</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Builder</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> builder </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> AMQP</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">BasicProperties</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">builder</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">builder</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">deliveryMode</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 持久化消息</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">builder</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">priority</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  //设置消息的优先级别</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">basicPublish</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(EXCHANGE_NAME,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">                     &quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                     builder</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">build</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(),</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">                     &quot;test&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getBytes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                    );</span></span></code></pre></div><p>在 web 中展示的竖线是 <code>Pri</code></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231121080.png" alt="image-20220923204004494" tabindex="0" loading="lazy"><figcaption>image-20220923204004494</figcaption></figure>`,8)]))}const e=a(l,[["render",o],["__file","rabbitmq-x-priority.html.vue"]]),t=JSON.parse('{"path":"/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-priority.html","title":"RabbitMQ进阶 - 优先级队列","lang":"zh-CN","frontmatter":{"aliases":"RabbitMQ进阶 - 优先级队列","tags":null,"cssclass":null,"source":null,"order":70,"category":["RabbitMQ","MQ"],"created":"2024-02-22 10:50","updated":"2024-10-26 09:55","description":"RabbitMQ进阶 - 优先级队列 1. 简介 优先级高的消息具备 优先被消费 的特权。 2. 代码实现 在定义队列时，可通过参数 x-max-priority 来指声明此队列的最大优先级别。在发送消息时，给消息设置的最大级别不能超过这个值 在 web 中展示的竖线是 Pri image-20220923204004494image-20220923...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-priority.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"RabbitMQ进阶 - 优先级队列"}],["meta",{"property":"og:description","content":"RabbitMQ进阶 - 优先级队列 1. 简介 优先级高的消息具备 优先被消费 的特权。 2. 代码实现 在定义队列时，可通过参数 x-max-priority 来指声明此队列的最大优先级别。在发送消息时，给消息设置的最大级别不能超过这个值 在 web 中展示的竖线是 Pri image-20220923204004494image-20220923..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231121080.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RabbitMQ进阶 - 优先级队列\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231121080.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 代码实现","slug":"_2-代码实现","link":"#_2-代码实现","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.68,"words":203},"filePathRelative":"posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-priority.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>优先级高的消息具备 <strong>优先被消费</strong> 的特权。</p>\\n<h2>2. 代码实现</h2>\\n<p>在定义队列时，可通过参数 <code>x-max-priority</code> 来指声明此队列的最大优先级别。在发送消息时，给消息设置的最大级别不能超过这个值</p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// 定义队列支持的最大级别</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">final</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> HashMap</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">String</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> Object</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> arguments </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> new</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> HashMap</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;&gt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">()</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">arguments</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">put</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"x-max-priority\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, </span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">10</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">channel</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">queueDeclare</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"queue.priority\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, </span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">true</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, </span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">false</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, </span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">false</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, arguments);</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// 发送消息时设置消息的优先级</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">final</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> AMQP</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">BasicProperties</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">Builder</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> builder </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> new</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> AMQP</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">BasicProperties</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">().</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">builder</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">builder</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">deliveryMode</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">2</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">);</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> // 持久化消息</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">builder</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">priority</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">5</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">);</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">  //设置消息的优先级别</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">channel</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">basicPublish</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(EXCHANGE_NAME,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#98C379;--shiki-dark:#98C379\\">                     \\"\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">                     builder</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">build</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(),</span></span>\\n<span class=\\"line\\"><span style=\\"color:#98C379;--shiki-dark:#98C379\\">                     \\"test\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">getBytes</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">                    );</span></span></code></pre>\\n</div>","autoDesc":true}');export{e as comp,t as data};