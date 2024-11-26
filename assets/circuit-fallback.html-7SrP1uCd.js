import{_ as t,c as a,a as n,o as i}from"./app-JRvFIbSa.js";const r={};function p(l,e){return i(),a("div",null,e[0]||(e[0]=[n('<h1 id="架构之高并发-降级和熔断-外卖案例" tabindex="-1"><a class="header-anchor" href="#架构之高并发-降级和熔断-外卖案例"><span>架构之高并发：降级和熔断-外卖案例</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><ul><li><p><strong>降级</strong></p><p>就是在调用的下游服务A出现问题（常见超时），提供PLAN-B，返回的效果可能没有服务A好，但是寥胜于无。</p></li><li><p><strong>熔断器</strong>：</p><p>熔断器的存在就是要保障何时走到降级方法，何时恢复，以什么样的策略恢复。</p></li></ul><h2 id="_2-外卖案例" tabindex="-1"><a class="header-anchor" href="#_2-外卖案例"><span>2. 外卖案例</span></a></h2><p>举个例子，详细说明熔断降级的作用和必要性。</p><h3 id="_2-1-正常流程" tabindex="-1"><a class="header-anchor" href="#_2-1-正常流程"><span>2.1 正常流程</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300939442.png" alt="image-20220702205055684" tabindex="0" loading="lazy"><figcaption>image-20220702205055684</figcaption></figure><p>如上图，我们公司在该地区一共有4个外面小哥，编号0-3；该地有6家流行餐厅，几乎是用户必点。编号从A-F。故事开始前，我们做如下假定：</p><p>（1）外卖火爆，几乎外卖小哥每次在外都能接到不止一单，且是不同的餐厅；</p><p>（2）外卖小哥都是耿直的人，不取完本次接单的几家餐厅，不轻易送餐。</p><h3 id="_2-2-餐厅a异常超时" tabindex="-1"><a class="header-anchor" href="#_2-2-餐厅a异常超时"><span>2.2 餐厅A异常超时</span></a></h3><p>一切看起来很和谐，直到有一天，餐厅A出事了，主厨的大叔失恋了，出餐的速度大降。每个要去餐厅A取餐的小哥都要花费更长的时间在A等餐。而且餐厅A越流行，出餐速度越慢，排队等待的小哥就会越多。在上图中，最后4个外卖小哥，有3个都排队在等A餐厅的饭食。这有两点直接影响：</p><p>（1）不光是A，其他餐厅单子也还没有配送，用户吃不到A的饭，就连其他用户点的B、C、D的饭也不能配送，差评，卸载，美团一生黑；</p><p>（2）3/4的外卖小哥处于低效率地排队等待，而不是送餐，降低了整个公司在该地区的配送效率，老王坐不住了。</p><h3 id="_2-3-餐厅b的plan-b-降级" tabindex="-1"><a class="header-anchor" href="#_2-3-餐厅b的plan-b-降级"><span>2.3 餐厅B的plan-B(降级)</span></a></h3><p>然而，正如江湖传言，美团外卖是个神秘的组织，有一天，一个机智的小哥，横空出世，改变了整个行业的布局。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300939483.png" alt="image-20220702205410716" tabindex="0" loading="lazy"><figcaption>image-20220702205410716</figcaption></figure><p>小哥在餐厅A亲自操刀，很快就做完后，送餐了。用户收到热乎乎的饭菜，吃起来没有以前的好吃，但也觉察不出任何异样，不会投诉；整个地区的小哥又重新流通起来，恢复到大叔失恋前的配送效率。</p><h3 id="_2-4-优化流程-熔断方案" tabindex="-1"><a class="header-anchor" href="#_2-4-优化流程-熔断方案"><span>2.4 优化流程（熔断方案）</span></a></h3><p>后来，在公司的内部总结中。发现不光是A餐厅的大叔会失恋，C餐厅D餐厅的大叔们也偶尔失恋，影响出餐速度。后来公司和这些餐厅们商量，为更好的规范化出餐流程，各餐厅新添加二叔，二叔厨艺一般，请二叔各餐厅花费成本不高，所以纷纷表示赞同。</p><p>在实践的过程中，小哥和大叔二叔们约定，如果在规定时间和次数，大叔不能按时出餐，那么二叔替代大叔，接相同的单，用同样的锅；大叔的出餐速度会被定期检查，是否恢复了正常水平，恢复了之后，单子慢慢还由大叔下厨。</p><p>现在，我们来对应下关系。</p><ul><li><p>美团外卖大本营——容器，常见的如tomcat，jetty的线程池</p></li><li><p>外卖小哥——线程</p></li><li><p>餐厅——服务接口</p></li><li><p>二叔——降级方法</p></li><li><p>大叔到二叔的切换——熔断</p></li><li><p>恢复大叔下厨——熔断降级的恢复策略。</p></li></ul><p>熔断保证了下游服务在出错率达到阈值时，上游调用切换到降级方法，提供有损服务，避免服务的级联失败，影响整个系统的稳定性。熔断的时机，取决于业务的实际场景和流量大小，不要过高，也不要过低；恢复的策略，其核心是恢复的速率，不要过快也不要过慢。一句废话，看需求。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.cnblogs.com/jenkov/p/circuit_fallback.html" target="_blank" rel="noopener noreferrer">谈谈熔断与降级</a></p>',26)]))}const o=t(r,[["render",p],["__file","circuit-fallback.html.vue"]]),s=JSON.parse('{"path":"/posts/Architect/base/circuit-fallback.html","title":"架构之高并发：降级和熔断-外卖案例","lang":"zh-CN","frontmatter":{"order":82,"category":["架构"],"description":"架构之高并发：降级和熔断-外卖案例 1. 简介 降级 就是在调用的下游服务A出现问题（常见超时），提供PLAN-B，返回的效果可能没有服务A好，但是寥胜于无。 熔断器： 熔断器的存在就是要保障何时走到降级方法，何时恢复，以什么样的策略恢复。 2. 外卖案例 举个例子，详细说明熔断降级的作用和必要性。 2.1 正常流程 image-20220702205...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/base/circuit-fallback.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"架构之高并发：降级和熔断-外卖案例"}],["meta",{"property":"og:description","content":"架构之高并发：降级和熔断-外卖案例 1. 简介 降级 就是在调用的下游服务A出现问题（常见超时），提供PLAN-B，返回的效果可能没有服务A好，但是寥胜于无。 熔断器： 熔断器的存在就是要保障何时走到降级方法，何时恢复，以什么样的策略恢复。 2. 外卖案例 举个例子，详细说明熔断降级的作用和必要性。 2.1 正常流程 image-20220702205..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300939442.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"架构之高并发：降级和熔断-外卖案例\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300939442.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300939483.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 外卖案例","slug":"_2-外卖案例","link":"#_2-外卖案例","children":[{"level":3,"title":"2.1 正常流程","slug":"_2-1-正常流程","link":"#_2-1-正常流程","children":[]},{"level":3,"title":"2.2 餐厅A异常超时","slug":"_2-2-餐厅a异常超时","link":"#_2-2-餐厅a异常超时","children":[]},{"level":3,"title":"2.3 餐厅B的plan-B(降级)","slug":"_2-3-餐厅b的plan-b-降级","link":"#_2-3-餐厅b的plan-b-降级","children":[]},{"level":3,"title":"2.4 优化流程（熔断方案）","slug":"_2-4-优化流程-熔断方案","link":"#_2-4-优化流程-熔断方案","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.36,"words":1008},"filePathRelative":"posts/Architect/base/circuit-fallback.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<ul>\\n<li>\\n<p><strong>降级</strong></p>\\n<p>就是在调用的下游服务A出现问题（常见超时），提供PLAN-B，返回的效果可能没有服务A好，但是寥胜于无。</p>\\n</li>\\n<li>\\n<p><strong>熔断器</strong>：</p>\\n<p>熔断器的存在就是要保障何时走到降级方法，何时恢复，以什么样的策略恢复。</p>\\n</li>\\n</ul>\\n<h2>2. 外卖案例</h2>\\n<p>举个例子，详细说明熔断降级的作用和必要性。</p>\\n<h3>2.1 正常流程</h3>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300939442.png\\" alt=\\"image-20220702205055684\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220702205055684</figcaption></figure>","autoDesc":true}');export{o as comp,s as data};
