import{_ as e,c as i,a as t,o as a}from"./app-tJW29Kmg.js";const o={};function r(n,l){return a(),i("div",null,l[0]||(l[0]=[t('<h1 id="mall商城下单流程" tabindex="-1"><a class="header-anchor" href="#mall商城下单流程"><span>mall商城下单流程</span></a></h1><blockquote><p>该篇文章主要参考<a href="http://www.macrozheng.com/#/README" target="_blank" rel="noopener noreferrer">mall官方文档</a>，并结合自己的使用感受做的一些笔记</p></blockquote><h2 id="_1-流程" tabindex="-1"><a class="header-anchor" href="#_1-流程"><span>1. 流程</span></a></h2><h3 id="_1-1-将商品添加进购物车" tabindex="-1"><a class="header-anchor" href="#_1-1-将商品添加进购物车"><span>1.1 将商品添加进购物车</span></a></h3><ol><li>点击<strong>直接购买的商品</strong>，<strong>也需要将商品加入购物车</strong>，然后从购物车结算（只是程序帮我们做了）</li><li>添加进购物车时，需要将商品加入购物车时价格、商品主图，名称等基本信息就记录下来，以免商品修改导致的前后不一致问题</li></ol><h3 id="_1-2-根据购物车信息生成确认单" tabindex="-1"><a class="header-anchor" href="#_1-2-根据购物车信息生成确认单"><span>1.2 根据购物车信息生成确认单</span></a></h3><ol><li>根据购物车id列表生确认单</li><li>确认单包含 <ol><li>促销信息</li><li>用户收货地址</li><li>可用的优惠券信息</li><li>积分和积分使用规则</li><li>计算金额 <ol><li>总金额</li><li>应付金额</li><li>优惠金额</li></ol></li></ol></li></ol><h3 id="_1-3-生成订单" tabindex="-1"><a class="header-anchor" href="#_1-3-生成订单"><span>1.3 生成订单</span></a></h3><p>选择确认单中的优惠券，收货地址</p><ol><li>需要的参数 <ol><li>选中的购物车商品id列表</li><li>收货地址</li><li>优惠券id</li><li>支付方式</li></ol></li><li>流程 <ol><li>获取购物车及优惠信息 <ol><li>根据商品id列表获取商品信息 <ol><li>获取用户id的获取购物车中的商品信息 <ol><li>**为什么不直接通过购物车id去查？**因为担心用户在其他客户端已删除商品</li></ol></li><li>判断是否包含购物车id，有则添加</li></ol></li><li><strong>计算优惠后的商品信息</strong><ol><li>先根据productId对CartItem进行分组，以spu为单位进行计算优惠</li><li>查询所有商品的优惠相关信息</li><li><strong>根据商品促销类型计算商品促销优惠价格（计算促销还比较麻烦）</strong><ol><li>促销类型：0-&gt;没有促销使用原价;1-&gt;使用促销价；2-&gt;使用会员价；3-&gt;使用阶梯价格；4-&gt;使用满减价格；5-&gt;限时购</li></ol></li><li>计算库存 <ol><li>获取sku的库存信息-锁定的库存信息</li></ol></li></ol></li></ol></li><li>生成下单商品信息</li><li>判断购物车中商品是否都有库存</li><li>判断使用使用了优惠券</li><li>判断是否使用积分</li><li>计算order_item的实付金额</li><li>进行库存锁定</li><li>根据商品合计、运费、活动优惠、优惠券、积分计算应付金额</li><li>收货人信息：姓名、电话、邮编、地址</li><li>计算赠送积分、成长值</li><li>设置自动收货天数</li><li><strong>插入order表和order_item表</strong></li><li>如使用优惠券更新优惠券使用状态</li><li>如使用积分需要扣除积分</li><li>删除购物车中的下单商品</li><li>发送延迟消息取消订单</li></ol></li></ol><h2 id="_2-疑问" tabindex="-1"><a class="header-anchor" href="#_2-疑问"><span>2. 疑问</span></a></h2><h3 id="_2-1-什么时候锁的库存" tabindex="-1"><a class="header-anchor" href="#_2-1-什么时候锁的库存"><span>2.1 什么时候锁的库存？</span></a></h3><p>​ 在生成订单的时候，用户支付前。进行锁定</p>',13)]))}const c=e(o,[["render",r],["__file","mall-order-placing-process.html.vue"]]),p=JSON.parse('{"path":"/posts/Architect/mall/mall-order-placing-process.html","title":"mall商城下单流程","lang":"zh-CN","frontmatter":{"description":"mall商城下单流程 该篇文章主要参考mall官方文档，并结合自己的使用感受做的一些笔记 1. 流程 1.1 将商品添加进购物车 点击直接购买的商品，也需要将商品加入购物车，然后从购物车结算（只是程序帮我们做了） 添加进购物车时，需要将商品加入购物车时价格、商品主图，名称等基本信息就记录下来，以免商品修改导致的前后不一致问题 1.2 根据购物车信息生成...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/mall/mall-order-placing-process.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"mall商城下单流程"}],["meta",{"property":"og:description","content":"mall商城下单流程 该篇文章主要参考mall官方文档，并结合自己的使用感受做的一些笔记 1. 流程 1.1 将商品添加进购物车 点击直接购买的商品，也需要将商品加入购物车，然后从购物车结算（只是程序帮我们做了） 添加进购物车时，需要将商品加入购物车时价格、商品主图，名称等基本信息就记录下来，以免商品修改导致的前后不一致问题 1.2 根据购物车信息生成..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mall商城下单流程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 流程","slug":"_1-流程","link":"#_1-流程","children":[{"level":3,"title":"1.1 将商品添加进购物车","slug":"_1-1-将商品添加进购物车","link":"#_1-1-将商品添加进购物车","children":[]},{"level":3,"title":"1.2 根据购物车信息生成确认单","slug":"_1-2-根据购物车信息生成确认单","link":"#_1-2-根据购物车信息生成确认单","children":[]},{"level":3,"title":"1.3 生成订单","slug":"_1-3-生成订单","link":"#_1-3-生成订单","children":[]}]},{"level":2,"title":"2. 疑问","slug":"_2-疑问","link":"#_2-疑问","children":[{"level":3,"title":"2.1 什么时候锁的库存？","slug":"_2-1-什么时候锁的库存","link":"#_2-1-什么时候锁的库存","children":[]}]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.38,"words":715},"filePathRelative":"posts/Architect/mall/mall-order-placing-process.md","localizedDate":"2024年10月28日","excerpt":"\\n<blockquote>\\n<p>该篇文章主要参考<a href=\\"http://www.macrozheng.com/#/README\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">mall官方文档</a>，并结合自己的使用感受做的一些笔记</p>\\n</blockquote>\\n<h2>1. 流程</h2>\\n<h3>1.1 将商品添加进购物车</h3>\\n<ol>\\n<li>点击<strong>直接购买的商品</strong>，<strong>也需要将商品加入购物车</strong>，然后从购物车结算（只是程序帮我们做了）</li>\\n<li>添加进购物车时，需要将商品加入购物车时价格、商品主图，名称等基本信息就记录下来，以免商品修改导致的前后不一致问题</li>\\n</ol>","autoDesc":true}');export{c as comp,p as data};
