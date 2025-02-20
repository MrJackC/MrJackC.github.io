import{_ as e,c as s,a as t,o as n}from"./app-4x2aIoqi.js";const l={};function o(i,a){return n(),s("div",null,a[0]||(a[0]=[t(`<h1 id="商城设计要点-一-避免重复下单" tabindex="-1"><a class="header-anchor" href="#商城设计要点-一-避免重复下单"><span>商城设计要点(一)-避免重复下单</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>用户快速点了两次 “提交订单” 按钮，浏览器会向后端发送两条创建订单的请求，最终会创建两条一模一样的订单。</p><h2 id="_2-解决方案" tabindex="-1"><a class="header-anchor" href="#_2-解决方案"><span>2. 解决方案</span></a></h2><p>解决方案就是采用<strong>幂等机制</strong>，多次请求和一次请求产生的效果是一样的。</p><h3 id="_2-1-方案一-创建订单页面-预生成订单id" tabindex="-1"><a class="header-anchor" href="#_2-1-方案一-创建订单页面-预生成订单id"><span>2.1 方案一：创建订单页面，预生成订单ID</span></a></h3><p>利用数据库自身特性 “主键唯一约束”，在插入订单记录时，带上主键值，如果订单重复，记录插入会失败。</p><p>操作过程：</p><ul><li>引入一个服务，用于生成一个“全局唯一的订单号”</li><li>进入<strong>创建订单页面时</strong>，前端请求该服务，<strong>预生成订单ID</strong></li><li>提交订单时，请求参数除了业务参数外，还要带上这个预生成订单ID</li></ul><blockquote><ol><li>mall 商城项目未采用该方案</li><li>订单id是在提交订单时sql生成</li></ol></blockquote><h3 id="_2-2-方案二-前端控制" tabindex="-1"><a class="header-anchor" href="#_2-2-方案二-前端控制"><span>2.2 **方案二：**前端控制</span></a></h3><p>前端通过js脚本控制，无法<strong>解决用户刷新提交的请求</strong>。另外<strong>也无法解决恶意提交。</strong></p><p>不建议采用该方案，如果想用，也只是作为一个<strong>补充方案</strong>。</p><blockquote><p>mall商城本身也没有商城前端</p></blockquote><h3 id="_2-3-方案三-创建订单页面-预生成token" tabindex="-1"><a class="header-anchor" href="#_2-3-方案三-创建订单页面-预生成token"><span>2.3 **方案三：**创建订单页面，预生成token</span></a></h3><p>前后约定附加参数校验。</p><p>当用户点击购买按钮时，渲染下单页面，展示商品、收货地址、运费、价格等信息，<strong>同时页面会埋上<code>Token </code>信息</strong>，用户提交订单时，后端业务逻辑会校验token，有且匹配才认为是合理请求。</p><p>注意：同一个 <code>Token</code> 只能用一次，用完后立马失效掉。</p><p>注意：同一个 <code>Token</code> 只能用一次，用完后立马失效掉。</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">form</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> action</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;/add-name-v2&quot;</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> method</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;post&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    {</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">%</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> csrf_token</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> %</span><span style="color:#C678DD;--shiki-dark:#C678DD;">}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">input</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> type</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;text&quot;</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;name&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">input</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> type</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;submit&quot;</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> value</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;提交&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">form</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><blockquote><ol><li><p>mall 商城项目未采用该方案</p></li><li><p>此方案与方案一，异曲同工之妙，一个是数据库id，一个是临时token</p></li></ol></blockquote><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://mp.weixin.qq.com/s/BgVr0jEBJwQI5UW_ele08A" target="_blank" rel="noopener noreferrer">聊聊电商系统中常见的9大坑！库存超卖、重复下单、物流单ABA</a></p><p>关于幂等的处理，更多解决方案可以看这两篇文章</p><ul><li><strong><a href="https://mp.weixin.qq.com/s?__biz=Mzg2NzYyNjQzNg==&amp;mid=2247485064&amp;idx=1&amp;sn=0596c89178b7c67c92bfaaf4e44a3b1d&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">高并发下如何保证接口的幂等性？</a></strong></li><li><strong><a href="https://mp.weixin.qq.com/s?__biz=Mzg2NzYyNjQzNg==&amp;mid=2247489368&amp;idx=1&amp;sn=428dc07c9e788d217d2e357933cb8bc4&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">幂等设计，都有哪些技术方案？</a></strong></li></ul><h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h3><h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1"><span></span></a></h3>`,27)]))}const p=e(l,[["render",o],["__file","mall-key-points-repeat-order.html.vue"]]),c=JSON.parse('{"path":"/posts/Architect/mall/mall-key-points-repeat-order.html","title":"商城设计要点(一)-避免重复下单","lang":"zh-CN","frontmatter":{"description":"商城设计要点(一)-避免重复下单 1. 简介 用户快速点了两次 “提交订单” 按钮，浏览器会向后端发送两条创建订单的请求，最终会创建两条一模一样的订单。 2. 解决方案 解决方案就是采用幂等机制，多次请求和一次请求产生的效果是一样的。 2.1 方案一：创建订单页面，预生成订单ID 利用数据库自身特性 “主键唯一约束”，在插入订单记录时，带上主键值，如果...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/mall/mall-key-points-repeat-order.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"商城设计要点(一)-避免重复下单"}],["meta",{"property":"og:description","content":"商城设计要点(一)-避免重复下单 1. 简介 用户快速点了两次 “提交订单” 按钮，浏览器会向后端发送两条创建订单的请求，最终会创建两条一模一样的订单。 2. 解决方案 解决方案就是采用幂等机制，多次请求和一次请求产生的效果是一样的。 2.1 方案一：创建订单页面，预生成订单ID 利用数据库自身特性 “主键唯一约束”，在插入订单记录时，带上主键值，如果..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"商城设计要点(一)-避免重复下单\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 解决方案","slug":"_2-解决方案","link":"#_2-解决方案","children":[{"level":3,"title":"2.1 方案一：创建订单页面，预生成订单ID","slug":"_2-1-方案一-创建订单页面-预生成订单id","link":"#_2-1-方案一-创建订单页面-预生成订单id","children":[]},{"level":3,"title":"2.2 **方案二：**前端控制","slug":"_2-2-方案二-前端控制","link":"#_2-2-方案二-前端控制","children":[]},{"level":3,"title":"2.3 **方案三：**创建订单页面，预生成token","slug":"_2-3-方案三-创建订单页面-预生成token","link":"#_2-3-方案三-创建订单页面-预生成token","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[{"level":3,"title":"","slug":"","link":"#","children":[]},{"level":3,"title":"","slug":"-1","link":"#-1","children":[]}]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.09,"words":626},"filePathRelative":"posts/Architect/mall/mall-key-points-repeat-order.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>用户快速点了两次 “提交订单”  按钮，浏览器会向后端发送两条创建订单的请求，最终会创建两条一模一样的订单。</p>\\n<h2>2. 解决方案</h2>\\n<p>解决方案就是采用<strong>幂等机制</strong>，多次请求和一次请求产生的效果是一样的。</p>\\n<h3>2.1 方案一：创建订单页面，预生成订单ID</h3>\\n<p>利用数据库自身特性 “主键唯一约束”，在插入订单记录时，带上主键值，如果订单重复，记录插入会失败。</p>\\n<p>操作过程：</p>\\n<ul>\\n<li>引入一个服务，用于生成一个“全局唯一的订单号”</li>\\n<li>进入<strong>创建订单页面时</strong>，前端请求该服务，<strong>预生成订单ID</strong></li>\\n<li>提交订单时，请求参数除了业务参数外，还要带上这个预生成订单ID</li>\\n</ul>","autoDesc":true}');export{p as comp,c as data};
