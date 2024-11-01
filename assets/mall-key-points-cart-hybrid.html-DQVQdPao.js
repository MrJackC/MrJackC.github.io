import{_ as t,c as a,a as l,o as i}from"./app-tJW29Kmg.js";const r={};function o(n,e){return i(),a("div",null,e[0]||(e[0]=[l('<h1 id="商城设计要点-三-购物车-混合存储" tabindex="-1"><a class="header-anchor" href="#商城设计要点-三-购物车-混合存储"><span>商城设计要点(三)-购物车，混合存储</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>购物车是电商系统的标配功能，暂存用户想要购买的商品。分为添加商品、列表查看、结算下单三个动作。</p><p>技术设计并不是特别复杂，存储的信息也相对有限（用户id、商品id、sku_id、数量、添加时间）。这里特别拿出来单讲主要是用户体验层面要注意几个问题：</p><h3 id="_1-1-未登录时添加商品" tabindex="-1"><a class="header-anchor" href="#_1-1-未登录时添加商品"><span>1.1 未登录时添加商品</span></a></h3><p>添加购物车时，后端校验用户未登录，常规思路，引导用户跳转登录页，待登录成功后，再添加购物车。多了一步操作，给用户一种强迫的感觉，体验会比较差。有没有更好的方式？</p><p>如果细心体验京东、淘宝等大平台，你会发现即使未登录态也可以添加购物车，这到底是怎么实现的？</p><h2 id="_2-解决" tabindex="-1"><a class="header-anchor" href="#_2-解决"><span>2. 解决</span></a></h2><p>细细琢磨其实原理并不复杂，服务端这边在用户登录态校验时，做了分支路由</p><ol><li><p>当用户未登录时，会创建一个临时<code>Token</code>，作为用户的唯一标识，购物车数据挂载在该<code>Token</code>下</p></li><li><p>为了避免购物车数据相互影响以及设计的复杂度，这里会有一个临时购物车表。</p><p>当然，临时购物车表的数据量并不会太大，why？用户不会一直闲着添加购物车玩</p></li><li><p>当用户登录后，查看自己的购物车，服务端会从请求的cookie里<strong>查找购物车<code>Token</code>标识</strong>，并<strong>查询临时购物车表是否有数据，然后合并到正式购物车表里</strong>。</p></li></ol><blockquote><ol><li>mall 商城项目未采用该方案</li><li>Mall 购物车一定要登录才能使用</li></ol></blockquote><h2 id="_3-特别说明" tabindex="-1"><a class="header-anchor" href="#_3-特别说明"><span>3. 特别说明</span></a></h2><p>临时购物车是不是一定要在服务端存储？未必。</p><p>有架构师倾向前置存储，将数据存储在浏览器或者<code>APP LocalStorage</code>，这部分数据毕竟不是共享的，但是不太好的增加了设计的复杂度。</p><ul><li>客户端需要借助本地数据索引，远程请求查完整信息</li><li>如果是登录态，还要增加数据合并逻辑</li></ul><p>考虑到这两部分数据只是用户标识的差异性，所以作者还是建议统一存到服务端，日后即使业务逻辑变更，只需要改一处就可以了，毕竟自运营系统，良好的可维护性也需要我们非常关注的。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://mp.weixin.qq.com/s/BgVr0jEBJwQI5UW_ele08A" target="_blank" rel="noopener noreferrer">聊聊电商系统中常见的9大坑！库存超卖、重复下单、物流单ABA</a></p>',18)]))}const s=t(r,[["render",o],["__file","mall-key-points-cart-hybrid.html.vue"]]),c=JSON.parse('{"path":"/posts/Architect/mall/mall-key-points-cart-hybrid.html","title":"商城设计要点(三)-购物车，混合存储","lang":"zh-CN","frontmatter":{"description":"商城设计要点(三)-购物车，混合存储 1. 简介 购物车是电商系统的标配功能，暂存用户想要购买的商品。分为添加商品、列表查看、结算下单三个动作。 技术设计并不是特别复杂，存储的信息也相对有限（用户id、商品id、sku_id、数量、添加时间）。这里特别拿出来单讲主要是用户体验层面要注意几个问题： 1.1 未登录时添加商品 添加购物车时，后端校验用户未登...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/mall/mall-key-points-cart-hybrid.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"商城设计要点(三)-购物车，混合存储"}],["meta",{"property":"og:description","content":"商城设计要点(三)-购物车，混合存储 1. 简介 购物车是电商系统的标配功能，暂存用户想要购买的商品。分为添加商品、列表查看、结算下单三个动作。 技术设计并不是特别复杂，存储的信息也相对有限（用户id、商品id、sku_id、数量、添加时间）。这里特别拿出来单讲主要是用户体验层面要注意几个问题： 1.1 未登录时添加商品 添加购物车时，后端校验用户未登..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"商城设计要点(三)-购物车，混合存储\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 未登录时添加商品","slug":"_1-1-未登录时添加商品","link":"#_1-1-未登录时添加商品","children":[]}]},{"level":2,"title":"2. 解决","slug":"_2-解决","link":"#_2-解决","children":[]},{"level":2,"title":"3. 特别说明","slug":"_3-特别说明","link":"#_3-特别说明","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.27,"words":681},"filePathRelative":"posts/Architect/mall/mall-key-points-cart-hybrid.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>购物车是电商系统的标配功能，暂存用户想要购买的商品。分为添加商品、列表查看、结算下单三个动作。</p>\\n<p>技术设计并不是特别复杂，存储的信息也相对有限（用户id、商品id、sku_id、数量、添加时间）。这里特别拿出来单讲主要是用户体验层面要注意几个问题：</p>\\n<h3>1.1 未登录时添加商品</h3>\\n<p>添加购物车时，后端校验用户未登录，常规思路，引导用户跳转登录页，待登录成功后，再添加购物车。多了一步操作，给用户一种强迫的感觉，体验会比较差。有没有更好的方式？</p>\\n<p>如果细心体验京东、淘宝等大平台，你会发现即使未登录态也可以添加购物车，这到底是怎么实现的？</p>","autoDesc":true}');export{s as comp,c as data};
