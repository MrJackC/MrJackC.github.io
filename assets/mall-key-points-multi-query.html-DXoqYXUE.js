import{_ as t,c as o,a as r,o as a}from"./app-CZJgH_ea.js";const c={};function d(n,e){return a(),o("div",null,e[0]||(e[0]=[r('<h1 id="商城设计要点-九-订单分库分表-多维度查询" tabindex="-1"><a class="header-anchor" href="#商城设计要点-九-订单分库分表-多维度查询"><span>商城设计要点(九)-订单分库分表，多维度查询</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>如果电商网站的订单数过多，我们一般会想到 <code>分库分表</code> 解决策略。没问题，这个方向是对的。</p><p><strong>但是查询维度很多</strong></p><p>1、买家，查询 <code>我的订单</code> 列表，需要根据 <code>buyer_id</code> 来查询</p><p>2、查看订单详情，需要根据 <code>order_id</code> 来查询</p><p>3、卖家，查询 <code>我的销售</code> 列表，需要根据 <code>seller_id</code> 来查询</p><p>而订单分表只有一个分表键，如何满足多维度 SQL 操作呢？</p><h2 id="_2-解决方案" tabindex="-1"><a class="header-anchor" href="#_2-解决方案"><span>2. 解决方案</span></a></h2><p>而订单分表只有一个分表键，如何满足多维度 SQL 操作呢？</p><p>我们一般是基于买家维度来设计，下图是 <code>淘宝</code> 的订单列表</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301141009.png" alt="image-20220326213429736" tabindex="0" loading="lazy"><figcaption>image-20220326213429736</figcaption></figure><p>一个订单号 19 位，我们会发现同一个用户不同订单的最后 6 位都是一样的，没错，那是用户id的后6位。</p><p>这样，上文中 <code>场景1</code>、<code>场景2</code> 的查询可以共性抽取， 采用 <code>buyer_id</code> 或 <code>order_id</code> 的 <code>后六位</code> 作为分表键，对 <code>1 000 000</code> 取模，得到买家维度的订单分表的编号。</p><p>至于 <code>场景3</code> 卖家维度的订单查询，我们可以采用数据异构方式，按 <code>seller_id</code> 维度另外存储一份数据，专门供卖家使用。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://mp.weixin.qq.com/s/BgVr0jEBJwQI5UW_ele08A" target="_blank" rel="noopener noreferrer">聊聊电商系统中常见的9大坑！库存超卖、重复下单、物流单ABA</a></p>',17)]))}const p=t(c,[["render",d],["__file","mall-key-points-multi-query.html.vue"]]),l=JSON.parse('{"path":"/posts/Architect/mall/mall-key-points-multi-query.html","title":"商城设计要点(九)-订单分库分表，多维度查询","lang":"zh-CN","frontmatter":{"description":"商城设计要点(九)-订单分库分表，多维度查询 1. 简介 如果电商网站的订单数过多，我们一般会想到 分库分表 解决策略。没问题，这个方向是对的。 但是查询维度很多 1、买家，查询 我的订单 列表，需要根据 buyer_id 来查询 2、查看订单详情，需要根据 order_id 来查询 3、卖家，查询 我的销售 列表，需要根据 seller_id 来查询...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/mall/mall-key-points-multi-query.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"商城设计要点(九)-订单分库分表，多维度查询"}],["meta",{"property":"og:description","content":"商城设计要点(九)-订单分库分表，多维度查询 1. 简介 如果电商网站的订单数过多，我们一般会想到 分库分表 解决策略。没问题，这个方向是对的。 但是查询维度很多 1、买家，查询 我的订单 列表，需要根据 buyer_id 来查询 2、查看订单详情，需要根据 order_id 来查询 3、卖家，查询 我的销售 列表，需要根据 seller_id 来查询..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301141009.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"商城设计要点(九)-订单分库分表，多维度查询\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301141009.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 解决方案","slug":"_2-解决方案","link":"#_2-解决方案","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.23,"words":370},"filePathRelative":"posts/Architect/mall/mall-key-points-multi-query.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>如果电商网站的订单数过多，我们一般会想到 <code>分库分表</code> 解决策略。没问题，这个方向是对的。</p>\\n<p><strong>但是查询维度很多</strong></p>\\n<p>1、买家，查询 <code>我的订单</code> 列表，需要根据 <code>buyer_id</code> 来查询</p>\\n<p>2、查看订单详情，需要根据 <code>order_id</code> 来查询</p>\\n<p>3、卖家，查询 <code>我的销售</code> 列表，需要根据 <code>seller_id</code> 来查询</p>\\n<p>而订单分表只有一个分表键，如何满足多维度 SQL 操作呢？</p>","autoDesc":true}');export{p as comp,l as data};
