import{_ as a,c as n,a as t,o as e}from"./app-fWubcX7c.js";const o={};function l(r,s){return e(),n("div",null,s[0]||(s[0]=[t(`<h1 id="商城设计要点-二-订单快照-减少存储成本" tabindex="-1"><a class="header-anchor" href="#商城设计要点-二-订单快照-减少存储成本"><span>商城设计要点(二)-订单快照，减少存储成本</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><h3 id="_1-1-什么是订单快照" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是订单快照"><span>1.1 什么是订单快照</span></a></h3><p>商品信息是可以修改的，当用户下单后，<strong>为了更好解决后面可能存在的买卖纠纷</strong>，创建订单时会同步保存一份商品详情信息，称之为<strong>订单快照</strong>。</p><h3 id="_1-2-背景" tabindex="-1"><a class="header-anchor" href="#_1-2-背景"><span>1.2 背景</span></a></h3><p>同一件商品，会有很多用户会购买，如果热销商品，短时间就会有上万的订单。如果每个订单都创建一份快照，<strong>存储成本太高</strong>。另外商品信息虽然支持修改，但毕竟是一个<strong>低频动作</strong>。我们可以理解成，大部分订单的商品快照信息都是一样的，除非下单时用户修改过。</p><h2 id="_2-解决方案-摘要比对的方法‍" tabindex="-1"><a class="header-anchor" href="#_2-解决方案-摘要比对的方法‍"><span>2. 解决方案：摘要比对的方法‍</span></a></h2><p><strong>如何实时识别修改动作是解决快照成本的关键所在</strong>。我们采用<strong>摘要比对的方法‍</strong>。</p><ol><li>创建订单时，先检查商品信息摘要是否已经存在，</li><li>如果不存在，会创建快照记录。</li><li>订单<strong>明细会关联商品的快照主键</strong>。</li></ol><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> DigestTest</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> encodeStr</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> data</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> encodeS</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> DigestUtils</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">md5Hex</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(data);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(encodeS);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> data</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;订单快照信息......&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        encodeStr</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(data);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>由于订单快照属于非核心操作，即使失败也不应该影响用户正常购买流程，所以通常采用异步流程执行。</p><blockquote><ol><li>mall 商城项目未采用该方案</li><li>mall 商城下单时直接存了商品名，下单时价格等基本信息，并没有存快照信息</li></ol></blockquote><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://mp.weixin.qq.com/s/BgVr0jEBJwQI5UW_ele08A" target="_blank" rel="noopener noreferrer">聊聊电商系统中常见的9大坑！库存超卖、重复下单、物流单ABA</a></p>`,14)]))}const p=a(o,[["render",l],["__file","mall-key-points-storage-cost.html.vue"]]),c=JSON.parse('{"path":"/posts/Architect/mall/mall-key-points-storage-cost.html","title":"商城设计要点(二)-订单快照，减少存储成本","lang":"zh-CN","frontmatter":{"description":"商城设计要点(二)-订单快照，减少存储成本 1. 简介 1.1 什么是订单快照 商品信息是可以修改的，当用户下单后，为了更好解决后面可能存在的买卖纠纷，创建订单时会同步保存一份商品详情信息，称之为订单快照。 1.2 背景 同一件商品，会有很多用户会购买，如果热销商品，短时间就会有上万的订单。如果每个订单都创建一份快照，存储成本太高。另外商品信息虽然支持...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/mall/mall-key-points-storage-cost.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"商城设计要点(二)-订单快照，减少存储成本"}],["meta",{"property":"og:description","content":"商城设计要点(二)-订单快照，减少存储成本 1. 简介 1.1 什么是订单快照 商品信息是可以修改的，当用户下单后，为了更好解决后面可能存在的买卖纠纷，创建订单时会同步保存一份商品详情信息，称之为订单快照。 1.2 背景 同一件商品，会有很多用户会购买，如果热销商品，短时间就会有上万的订单。如果每个订单都创建一份快照，存储成本太高。另外商品信息虽然支持..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"商城设计要点(二)-订单快照，减少存储成本\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 什么是订单快照","slug":"_1-1-什么是订单快照","link":"#_1-1-什么是订单快照","children":[]},{"level":3,"title":"1.2 背景","slug":"_1-2-背景","link":"#_1-2-背景","children":[]}]},{"level":2,"title":"2. 解决方案：摘要比对的方法‍","slug":"_2-解决方案-摘要比对的方法‍","link":"#_2-解决方案-摘要比对的方法‍","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.47,"words":440},"filePathRelative":"posts/Architect/mall/mall-key-points-storage-cost.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<h3>1.1 什么是订单快照</h3>\\n<p>商品信息是可以修改的，当用户下单后，<strong>为了更好解决后面可能存在的买卖纠纷</strong>，创建订单时会同步保存一份商品详情信息，称之为<strong>订单快照</strong>。</p>\\n<h3>1.2 背景</h3>\\n<p>同一件商品，会有很多用户会购买，如果热销商品，短时间就会有上万的订单。如果每个订单都创建一份快照，<strong>存储成本太高</strong>。另外商品信息虽然支持修改，但毕竟是一个<strong>低频动作</strong>。我们可以理解成，大部分订单的商品快照信息都是一样的，除非下单时用户修改过。</p>","autoDesc":true}');export{p as comp,c as data};
