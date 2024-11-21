import{_ as i,c as e,a,o as t}from"./app-CpAF2rca.js";const n={};function p(r,l){return t(),e("div",null,l[0]||(l[0]=[a('<h1 id="mall框架使用感受" tabindex="-1"><a class="header-anchor" href="#mall框架使用感受"><span>mall框架使用感受</span></a></h1><h2 id="_1-为什么选择mall" tabindex="-1"><a class="header-anchor" href="#_1-为什么选择mall"><span>1. 为什么选择mall</span></a></h2><h3 id="_1-1-优点" tabindex="-1"><a class="header-anchor" href="#_1-1-优点"><span>1.1 优点</span></a></h3><ul><li><p>功能丰富，代码</p><ul><li>商品（商品，商品分类，sku）</li><li>订单完整流程（购物车下单，发货，确认收货，取消订单，退货）</li></ul></li><li><p>当时的业务需求，</p><ul><li><p>优惠券，促销等玩法</p></li><li><p>积分</p></li><li><p>商品推荐</p></li><li><p>秒杀</p></li></ul></li></ul><p>​ mall 是完全能支持的，减少了二开的工作量。加快开发进度</p><h3 id="_1-2-缺点" tabindex="-1"><a class="header-anchor" href="#_1-2-缺点"><span>1.2 缺点</span></a></h3><ul><li>代码生成模块不实用</li><li>sku 设计不够合理 <ul><li>选择商品属性分类，后出现属性分类，然后刷新类表，要自己输入每件价格，很麻烦</li><li>刷新列表，刷新库存，刷新价格很混乱，用户压根不懂用</li></ul></li><li>缺少字典管理，非常多的魔法值，少了扩展性</li><li>代码活跃度不高，跟两三年前的版本基本没差别。 <ul><li>github 活跃度倒是挺高的，不过基本都是刷活跃度的，没有实质改动</li></ul></li></ul><h3 id="_1-3-待完善的功能" tabindex="-1"><a class="header-anchor" href="#_1-3-待完善的功能"><span>1.3 待完善的功能</span></a></h3><ul><li><p>缺少价格变更相关逻辑</p><ul><li>商品在加入购物车时就已经记录了价格，但是修改商品价格后并没有方式通知购物车</li></ul></li><li><p>返回购物车列表的时候没有返回库存量</p><ul><li>用户选购商品时，数量可以一直加。只能在结算的时候才发现</li><li>且在修改购物车商品数量的时候，也没有校验库存数量</li></ul></li><li><p>sku图片设置只能针对第一个属性设置单张图片</p><ul><li>希望针对每个规则能设置多张图片</li></ul></li><li><p>缺少商品评价功能</p><ul><li>不过国内服务的 UGC 都需要接入公安审计，这就很麻烦了。可能就不容易上架了</li></ul></li><li><p>余额功能</p></li><li><p>排序</p><ul><li>很多接口没有排序，或者只有sort 排序，但很多情况默认不设置的时候，应该按创建时间倒序</li></ul></li><li><p>运费模板</p><ul><li>设计了表，但还没有实现</li></ul></li><li><p>首页为假数据</p></li><li><p>导出功能</p></li><li></li></ul><h3 id="_1-4-无关紧要的规范问题" tabindex="-1"><a class="header-anchor" href="#_1-4-无关紧要的规范问题"><span>1.4 无关紧要的规范问题</span></a></h3><ul><li>代码中很多魔法值 <ul><li>例如订单状态，只有实体类备注，没有定义成常量或枚举，导致在代码中判断需要判断状态时都是魔法值</li></ul></li><li>有全局异常，且一直抛runtime</li></ul><h2 id="_2-bug" tabindex="-1"><a class="header-anchor" href="#_2-bug"><span>2. bug</span></a></h2><ul><li>订单计算优惠的时候，将总优惠平摊到各个商品（四舍五入了）。再加起来计算总优惠，这就导致金额错误</li><li></li></ul><h2 id="_3-吐槽点" tabindex="-1"><a class="header-anchor" href="#_3-吐槽点"><span>3. 吐槽点</span></a></h2><ol><li><p>多模块设计问题，项目分为admin后端服务和portal前端服务。service都写在各自的服务上，导致服务无法复用。</p><p>且已经抽离不懂了，当前阶段移动到基础库，关联的东西又太多</p></li></ol><h2 id="_4-适应自身项目的改造点" tabindex="-1"><a class="header-anchor" href="#_4-适应自身项目的改造点"><span>4. 适应自身项目的改造点</span></a></h2><ol><li>项目原本只有分类树，但我们商品数量比较小。只有一个公司的商品。类似于外卖平台，希望展示商品分类同时显示商品</li><li>日志模块，采用logback可以更灵活的配置</li><li>微信相关功能</li></ol><h2 id="_5-难点" tabindex="-1"><a class="header-anchor" href="#_5-难点"><span>5. 难点</span></a></h2><ol><li>生成订单时的逻辑。需要考虑的关联因素太多</li><li>各种促销规则玩法，关联性强。非常容易影响到其他商品与总价</li></ol>',19)]))}const o=i(n,[["render",p],["__file","mall-use-feeling.html.vue"]]),u=JSON.parse('{"path":"/posts/Architect/mall/mall-use-feeling.html","title":"mall框架使用感受","lang":"zh-CN","frontmatter":{"description":"mall框架使用感受 1. 为什么选择mall 1.1 优点 功能丰富，代码 商品（商品，商品分类，sku） 订单完整流程（购物车下单，发货，确认收货，取消订单，退货） 当时的业务需求， 优惠券，促销等玩法 积分 商品推荐 秒杀 ​ mall 是完全能支持的，减少了二开的工作量。加快开发进度 1.2 缺点 代码生成模块不实用 sku 设计不够合理 选择...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/mall/mall-use-feeling.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"mall框架使用感受"}],["meta",{"property":"og:description","content":"mall框架使用感受 1. 为什么选择mall 1.1 优点 功能丰富，代码 商品（商品，商品分类，sku） 订单完整流程（购物车下单，发货，确认收货，取消订单，退货） 当时的业务需求， 优惠券，促销等玩法 积分 商品推荐 秒杀 ​ mall 是完全能支持的，减少了二开的工作量。加快开发进度 1.2 缺点 代码生成模块不实用 sku 设计不够合理 选择..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mall框架使用感受\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 为什么选择mall","slug":"_1-为什么选择mall","link":"#_1-为什么选择mall","children":[{"level":3,"title":"1.1 优点","slug":"_1-1-优点","link":"#_1-1-优点","children":[]},{"level":3,"title":"1.2 缺点","slug":"_1-2-缺点","link":"#_1-2-缺点","children":[]},{"level":3,"title":"1.3 待完善的功能","slug":"_1-3-待完善的功能","link":"#_1-3-待完善的功能","children":[]},{"level":3,"title":"1.4 无关紧要的规范问题","slug":"_1-4-无关紧要的规范问题","link":"#_1-4-无关紧要的规范问题","children":[]}]},{"level":2,"title":"2. bug","slug":"_2-bug","link":"#_2-bug","children":[]},{"level":2,"title":"3.  吐槽点","slug":"_3-吐槽点","link":"#_3-吐槽点","children":[]},{"level":2,"title":"4. 适应自身项目的改造点","slug":"_4-适应自身项目的改造点","link":"#_4-适应自身项目的改造点","children":[]},{"level":2,"title":"5. 难点","slug":"_5-难点","link":"#_5-难点","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.73,"words":819},"filePathRelative":"posts/Architect/mall/mall-use-feeling.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 为什么选择mall</h2>\\n<h3>1.1 优点</h3>\\n<ul>\\n<li>\\n<p>功能丰富，代码</p>\\n<ul>\\n<li>商品（商品，商品分类，sku）</li>\\n<li>订单完整流程（购物车下单，发货，确认收货，取消订单，退货）</li>\\n</ul>\\n</li>\\n<li>\\n<p>当时的业务需求，</p>\\n<ul>\\n<li>\\n<p>优惠券，促销等玩法</p>\\n</li>\\n<li>\\n<p>积分</p>\\n</li>\\n<li>\\n<p>商品推荐</p>\\n</li>\\n<li>\\n<p>秒杀</p>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n<p>​\\t\\tmall 是完全能支持的，减少了二开的工作量。加快开发进度</p>","autoDesc":true}');export{o as comp,u as data};
