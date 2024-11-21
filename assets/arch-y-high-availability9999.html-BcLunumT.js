import{_ as t,c as a,a as r,o as p}from"./app-CpAF2rca.js";const n={};function l(s,e){return p(),a("div",null,e[0]||(e[0]=[r('<h1 id="架构之高可用-可用性几个9" tabindex="-1"><a class="header-anchor" href="#架构之高可用-可用性几个9"><span>架构之高可用: 可用性几个9</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p><strong>SLA</strong>：服务等级协议（简称：SLA，全称：service level agreement）。是在一定开销下为保障服务的性能和可用性，服务提供商与用户间定义的一种双方认可的协定。通常这个开销是驱动提供服务质量的主要因素。</p><p>SLA的定义来源百度，这到底是什么意思呢？</p><blockquote><p>我们平常经常看到互联网公司喊口号，我们今年一定要做到3个9、4个9，即99.9%、99.99%，甚至还有5个9，即99.999%。</p></blockquote><h2 id="_2-这么多9代表什么意思呢" tabindex="-1"><a class="header-anchor" href="#_2-这么多9代表什么意思呢"><span>2. <strong>这么多9代表什么意思呢？</strong></span></a></h2><p>首先，SLA的概念，对互联网公司来说就是网站服务可用性的一个保证。9越多代表全年服务可用时间越长服务更可靠，停机时间越短，反之亦然。</p><h2 id="_3-这么多9是怎么计算的呢" tabindex="-1"><a class="header-anchor" href="#_3-这么多9是怎么计算的呢"><span>3. <strong>这么多9是怎么计算的呢？</strong></span></a></h2><p>全年拿365天做计算吧，看看几个9要停机多久时间做能才能达到！</p><blockquote><p>1年 = 365天 = 8760小时</p><p>99.9 = 8760 * 0.1% = 8760 * 0.001 = 8.76小时</p><p>99.99 = 8760 * 0.0001 = 0.876小时 = 0.876 * 60 = 52.6分钟</p><p>99.999 = 8760 * 0.00001 = 0.0876小时 = 0.0876 * 60 = 5.26分钟</p></blockquote><p>从以上看来，全年停机5.26分钟才能做到99.999%，即5个9。依此类推，要达到6个9及更多9，可说是非常难了吧。</p><h2 id="_4-为什么需要更多的9" tabindex="-1"><a class="header-anchor" href="#_4-为什么需要更多的9"><span>4. <strong>为什么需要更多的9</strong></span></a></h2><p>每个公司对几个9的定义都不一样，<strong>互联网公司至少都是99.99</strong>吧。像一些<strong>政府网站，如社保公积金等，经常故障服务不可用，能做到99.9</strong>就不错了。</p><p>如果我们提供的服务可用性越低，意味着造成的损失也越大，别的不说，如果是特别重要的时刻，或许就在某一分钟，你可能就会因服务不可用而丢掉一笔大的订单，这都是始料未及的。所以，只要尽可能的提升SLA可用性才能最大化的提高企业生产力。</p><p>要做到更多的9，<strong>就要不断的监控自己的服务，服务挂掉能及时恢复服务</strong>。就像开车出远门，首先得检查轮胎，同时还得准备一个备胎一样的道理。</p><h2 id="_5-怎么做到更多的9" tabindex="-1"><a class="header-anchor" href="#_5-怎么做到更多的9"><span>5. 怎么做到更多的9</span></a></h2><ul><li><p><a href="https://java.isture.com/arch/base/arch-y-loadbalance.html" target="_blank" rel="noopener noreferrer">架构之高可用: 负载均衡</a></p></li><li><p><a href="https://java.isture.com/arch/base/arch-y-backup.html" target="_blank" rel="noopener noreferrer">架构之高可用：容灾备份,故障转移</a></p></li></ul><h2 id="_6-补充-性能指标tp50、tp90、tp99、tp999" tabindex="-1"><a class="header-anchor" href="#_6-补充-性能指标tp50、tp90、tp99、tp999"><span>6. （补充）性能指标TP50、TP90、TP99、TP999</span></a></h2><h3 id="_6-1-tp指标说明" tabindex="-1"><a class="header-anchor" href="#_6-1-tp指标说明"><span>6.1 TP指标说明</span></a></h3><p>TP指标: 指在一个时间段内，统计该方法每次调用所消耗的时间，并将这些时间按从小到大的顺序进行排序, 并取出结果为：总次数*指标数=对应TP指标的值，再取出排序好的时间。</p><p>TP=Top Percentile，Top百分数，是一个统计学里的术语，与平均数、中位数都是一类。</p><p>TP50、TP90、TP99和TP999等指标常用于系统性能监控场景，指高于50%、90%、99%等百分线的情况</p><h3 id="_6-2-计算-统计方法" tabindex="-1"><a class="header-anchor" href="#_6-2-计算-统计方法"><span>6.2 计算/统计方法</span></a></h3><p>TP50：指在一个时间段内（如5分钟），统计该方法每次调用所消耗的时间，并将这些时间按从小到大的顺序进行排序，取第50%的那个值作为TP50的值；配置此监控指标对应的报警阀值后，需要保证在这个时间段内该方法所有调用的消耗时间至少有50%的值要小于此阀值，否则系统将会报警。</p><p>TP90，TP99，TP999与TP50值计算方式一致，它们分别代表着对方法的不同性能要求，TP50相对较低，TP90则比较高，TP99，TP999则对方法性能要求很高</p><h3 id="_6-3-举例说明" tabindex="-1"><a class="header-anchor" href="#_6-3-举例说明"><span>6.3 举例说明</span></a></h3><ol><li><p>有一个方法testTP()，6次请求的响应时间：13ms、38ms、23ms、45ms、17ms、56ms，升序排序后为[13ms、17ms、23ms、38ms、45ms、56ms]</p></li><li><p>计算取值</p><p>TP50：6<em>50%=3，</em></p><p><em>TP90：6</em>90%=5.4~6，</p><p>TP99：6*99%=5.94~6，</p><p>TP999：6*99.9%=5.994~6，</p></li><li><p>根据百分数的定义可知</p><p>TP50=23ms，取排序为3的值，</p><p>TP90=56ms，取排序为6的值，</p><p>TP99=56ms，取排序为6的值，</p><p>TP999=56ms，取排序为6的值</p></li></ol><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://cloud.tencent.com/developer/article/1080683" target="_blank" rel="noopener noreferrer">SLA服务可用性4个9是什么意思？怎么达到？</a></p>',29)]))}const o=t(n,[["render",l],["__file","arch-y-high-availability9999.html.vue"]]),h=JSON.parse('{"path":"/posts/Architect/base/arch-y-high-availability9999.html","title":"架构之高可用: 可用性几个9","lang":"zh-CN","frontmatter":{"order":101,"category":["架构"],"description":"架构之高可用: 可用性几个9 1. 简介 SLA：服务等级协议（简称：SLA，全称：service level agreement）。是在一定开销下为保障服务的性能和可用性，服务提供商与用户间定义的一种双方认可的协定。通常这个开销是驱动提供服务质量的主要因素。 SLA的定义来源百度，这到底是什么意思呢？ 我们平常经常看到互联网公司喊口号，我们今年一定要...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/base/arch-y-high-availability9999.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"架构之高可用: 可用性几个9"}],["meta",{"property":"og:description","content":"架构之高可用: 可用性几个9 1. 简介 SLA：服务等级协议（简称：SLA，全称：service level agreement）。是在一定开销下为保障服务的性能和可用性，服务提供商与用户间定义的一种双方认可的协定。通常这个开销是驱动提供服务质量的主要因素。 SLA的定义来源百度，这到底是什么意思呢？ 我们平常经常看到互联网公司喊口号，我们今年一定要..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"架构之高可用: 可用性几个9\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 这么多9代表什么意思呢？","slug":"_2-这么多9代表什么意思呢","link":"#_2-这么多9代表什么意思呢","children":[]},{"level":2,"title":"3. 这么多9是怎么计算的呢？","slug":"_3-这么多9是怎么计算的呢","link":"#_3-这么多9是怎么计算的呢","children":[]},{"level":2,"title":"4. 为什么需要更多的9","slug":"_4-为什么需要更多的9","link":"#_4-为什么需要更多的9","children":[]},{"level":2,"title":"5. 怎么做到更多的9","slug":"_5-怎么做到更多的9","link":"#_5-怎么做到更多的9","children":[]},{"level":2,"title":"6. （补充）性能指标TP50、TP90、TP99、TP999","slug":"_6-补充-性能指标tp50、tp90、tp99、tp999","link":"#_6-补充-性能指标tp50、tp90、tp99、tp999","children":[{"level":3,"title":"6.1 TP指标说明","slug":"_6-1-tp指标说明","link":"#_6-1-tp指标说明","children":[]},{"level":3,"title":"6.2 计算/统计方法","slug":"_6-2-计算-统计方法","link":"#_6-2-计算-统计方法","children":[]},{"level":3,"title":"6.3 举例说明","slug":"_6-3-举例说明","link":"#_6-3-举例说明","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.57,"words":1071},"filePathRelative":"posts/Architect/base/arch-y-high-availability9999.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<p><strong>SLA</strong>：服务等级协议（简称：SLA，全称：service level agreement）。是在一定开销下为保障服务的性能和可用性，服务提供商与用户间定义的一种双方认可的协定。通常这个开销是驱动提供服务质量的主要因素。</p>\\n<p>SLA的定义来源百度，这到底是什么意思呢？</p>\\n<blockquote>\\n<p>我们平常经常看到互联网公司喊口号，我们今年一定要做到3个9、4个9，即99.9%、99.99%，甚至还有5个9，即99.999%。</p>\\n</blockquote>\\n<h2>2. <strong>这么多9代表什么意思呢？</strong></h2>","autoDesc":true}');export{o as comp,h as data};
