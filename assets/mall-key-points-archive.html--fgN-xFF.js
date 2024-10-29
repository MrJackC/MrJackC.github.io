import{_ as t,c as a,a as l,o as n}from"./app-DEK5G3U7.js";const i={};function r(s,e){return n(),a("div",null,e[0]||(e[0]=[l('<h1 id="商城设计要点-八-历史订单-归档" tabindex="-1"><a class="header-anchor" href="#商城设计要点-八-历史订单-归档"><span>商城设计要点(八)-历史订单，归档</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><h3 id="_1-1-冷热数据" tabindex="-1"><a class="header-anchor" href="#_1-1-冷热数据"><span>1.1 冷热数据</span></a></h3><p>根据<strong>二八定律</strong>，系统绝大部分的性能开销花在20%的业务。数据也不例外，从数据的使用频率来看，经常被业务访问的数据称为热点数据；反之，称之为冷数据。</p><h3 id="_1-2-订单数据划分" tabindex="-1"><a class="header-anchor" href="#_1-2-订单数据划分"><span>1.2 订单数据划分</span></a></h3><p>在了解的数据的冷、热特性后，便可以指导我们做一些有针对性的性能优化。这里面有业务层面的优化，也有技术层面的优化。比如：电商网站，一般只能查询3个月内的订单，如果你想看看3个月前的订单，需要访问历史订单页面。</p><h2 id="_2-实现思路" tabindex="-1"><a class="header-anchor" href="#_2-实现思路"><span>2. 实现思路</span></a></h2><h3 id="_2-1-冷热数据区分的标准是什么" tabindex="-1"><a class="header-anchor" href="#_2-1-冷热数据区分的标准是什么"><span>2.1 冷热数据区分的标准是什么？</span></a></h3><p>冷热数据区分的标准是什么？要结合业务思考，可能要找产品同学一块讨论才能做决策，切记不要拍脑袋。以电商订单为例：</p><ul><li>方案一：以“下单时间”为标准，将3 个月前的订单数据当作冷数据，3 个月内的当作热数据。</li><li>方案二：根据“订单状态”字段来区分，已完结的订单当作冷数据，未完结的订单当作热数据。</li><li>方案三：组合方式，把下单时间 &gt; 3 个月且状态为“已完结”的订单标识为冷数据，其他的当作热数据。</li></ul><h3 id="_2-2-如何触发冷热数据的分离" tabindex="-1"><a class="header-anchor" href="#_2-2-如何触发冷热数据的分离"><span>2.2 如何触发冷热数据的分离</span></a></h3><ul><li>方案一：直接修改业务代码，每次业务请求触发冷热数据判断，根据结果路由到对应的冷数据表或热数据表。缺点：如果判断标准是 <code>时间维度</code>，数据过期了无法主动感知。</li><li>方案二：如果觉得修改业务代码，耦合性高，不易于后期维护。可以通过监听数据库变更日志 binlog 方式来触发</li><li>方案三：<strong>常用的手段是跑定时任务，一般是选择凌晨系统压力小的时候，通过跑批任务，将满足条件的冷数据迁移到其他存储介质。在途业务表中只留下来少量的热点数据。</strong></li></ul><h2 id="_3-如何实现冷热数据分离" tabindex="-1"><a class="header-anchor" href="#_3-如何实现冷热数据分离"><span>3. 如何实现冷热数据分离</span></a></h2><p>过程大概分为三步：</p><ul><li>判断数据是冷、还是热</li><li>将冷数据插入冷数据表中</li><li>然后，从原来的热库中删除迁移的数据</li></ul><h2 id="_4-如何使用冷热数据" tabindex="-1"><a class="header-anchor" href="#_4-如何使用冷热数据"><span>4. 如何使用冷热数据</span></a></h2><ul><li>方案一：界面设计时会有选项区分，如上面举例的电商订单</li><li>方案二：直接在业务代码里区分。</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://mp.weixin.qq.com/s/BgVr0jEBJwQI5UW_ele08A" target="_blank" rel="noopener noreferrer">聊聊电商系统中常见的9大坑！库存超卖、重复下单、物流单ABA</a></p>',19)]))}const o=t(i,[["render",r],["__file","mall-key-points-archive.html.vue"]]),c=JSON.parse('{"path":"/posts/Architect/mall/mall-key-points-archive.html","title":"商城设计要点(八)-历史订单，归档","lang":"zh-CN","frontmatter":{"description":"商城设计要点(八)-历史订单，归档 1. 简介 1.1 冷热数据 根据二八定律，系统绝大部分的性能开销花在20%的业务。数据也不例外，从数据的使用频率来看，经常被业务访问的数据称为热点数据；反之，称之为冷数据。 1.2 订单数据划分 在了解的数据的冷、热特性后，便可以指导我们做一些有针对性的性能优化。这里面有业务层面的优化，也有技术层面的优化。比如：电...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Architect/mall/mall-key-points-archive.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"商城设计要点(八)-历史订单，归档"}],["meta",{"property":"og:description","content":"商城设计要点(八)-历史订单，归档 1. 简介 1.1 冷热数据 根据二八定律，系统绝大部分的性能开销花在20%的业务。数据也不例外，从数据的使用频率来看，经常被业务访问的数据称为热点数据；反之，称之为冷数据。 1.2 订单数据划分 在了解的数据的冷、热特性后，便可以指导我们做一些有针对性的性能优化。这里面有业务层面的优化，也有技术层面的优化。比如：电..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"商城设计要点(八)-历史订单，归档\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 冷热数据","slug":"_1-1-冷热数据","link":"#_1-1-冷热数据","children":[]},{"level":3,"title":"1.2 订单数据划分","slug":"_1-2-订单数据划分","link":"#_1-2-订单数据划分","children":[]}]},{"level":2,"title":"2. 实现思路","slug":"_2-实现思路","link":"#_2-实现思路","children":[{"level":3,"title":"2.1 冷热数据区分的标准是什么？","slug":"_2-1-冷热数据区分的标准是什么","link":"#_2-1-冷热数据区分的标准是什么","children":[]},{"level":3,"title":"2.2 如何触发冷热数据的分离","slug":"_2-2-如何触发冷热数据的分离","link":"#_2-2-如何触发冷热数据的分离","children":[]}]},{"level":2,"title":"3. 如何实现冷热数据分离","slug":"_3-如何实现冷热数据分离","link":"#_3-如何实现冷热数据分离","children":[]},{"level":2,"title":"4. 如何使用冷热数据","slug":"_4-如何使用冷热数据","link":"#_4-如何使用冷热数据","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.29,"words":688},"filePathRelative":"posts/Architect/mall/mall-key-points-archive.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<h3>1.1 冷热数据</h3>\\n<p>根据<strong>二八定律</strong>，系统绝大部分的性能开销花在20%的业务。数据也不例外，从数据的使用频率来看，经常被业务访问的数据称为热点数据；反之，称之为冷数据。</p>\\n<h3>1.2 订单数据划分</h3>\\n<p>在了解的数据的冷、热特性后，便可以指导我们做一些有针对性的性能优化。这里面有业务层面的优化，也有技术层面的优化。比如：电商网站，一般只能查询3个月内的订单，如果你想看看3个月前的订单，需要访问历史订单页面。</p>\\n<h2>2. 实现思路</h2>\\n<h3>2.1 冷热数据区分的标准是什么？</h3>","autoDesc":true}');export{o as comp,c as data};
