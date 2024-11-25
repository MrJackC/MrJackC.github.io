import{_ as a,c as t,a as l,o as n}from"./app-BfIe-EZg.js";const o={};function i(r,e){return n(),t("div",null,e[0]||(e[0]=[l(`<h1 id="商城设计要点-库存超卖" tabindex="-1"><a class="header-anchor" href="#商城设计要点-库存超卖"><span>商城设计要点-库存超卖</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><h2 id="_2-库存扣减方式" tabindex="-1"><a class="header-anchor" href="#_2-库存扣减方式"><span>2. 库存扣减方式</span></a></h2><h3 id="_2-1-下单减库存" tabindex="-1"><a class="header-anchor" href="#_2-1-下单减库存"><span>2.1 下单减库存</span></a></h3><p>即当买家下单后，在商品的总库存中减去买家购买数量。下单减库存是最简单的减库存方式，也是控制最精确的一种，下单时直接通过数据库的事务机制控制商品库存，这样一定不会出现超卖的情况。<strong>但是你要知道，有些人下完单可能并不会付款。</strong></p><h3 id="_2-2-付款减库存" tabindex="-1"><a class="header-anchor" href="#_2-2-付款减库存"><span>2.2 付款减库存</span></a></h3><p>即买家下单后，并不立即减库存，而是等到有用户付款后才真正减库存，否则库存一直保留给其他买家。但因为付款时才减库存，如果并发比较高，有可能出现<strong>买家下单后付不了款的情况，因为可能商品已经被其他人买走了。</strong></p><h3 id="_2-3-预扣库存" tabindex="-1"><a class="header-anchor" href="#_2-3-预扣库存"><span>2.3 预扣库存</span></a></h3><p>这种方式相对复杂一些，</p><ol><li>买家下单后，<strong>库存为其保留一定的时间（如 30 分钟），超过这个时间，库存将会自动释放</strong></li><li>释放后其他买家就可以继续购买</li><li>在买家付款前，系统会校验该订单的库存是否还有保留： <ol><li>如果没有保留，则再次尝试预扣；</li><li>如果库存不足（也就是预扣失败）则不允许继续付款</li><li>如果预扣成功，则完成付款并实际地减去库存。</li></ol></li></ol><blockquote><p>Mall 商城采用的方式类似于这种预扣库存的，</p><ol><li>下单锁定库存</li><li>付款才真正减库存</li><li>超时付款时加库存</li></ol></blockquote><h2 id="_3-解决方案" tabindex="-1"><a class="header-anchor" href="#_3-解决方案"><span>3. 解决方案</span></a></h2><p>采用哪一种减库存方式更多是业务层面的考虑，减库存最核心的是大并发请求时保证数据库中的库存字段值不能为负数。</p><h3 id="_3-1-方案一-行级锁校验库存" tabindex="-1"><a class="header-anchor" href="#_3-1-方案一-行级锁校验库存"><span>3.1 方案一：行级锁校验库存</span></a></h3><p>通常在扣减库存的场景下使用行级锁，通过数据库引擎本身对记录加锁的控制，保证数据库的更新的安全性，并且通过<code>where</code>语句的条件，保证库存不会被减到 <code>0</code> 以下，也就是能够有效的控制超卖的场景。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>update ... set amount = amount - 1 where id = $id and amount - 1 &gt;=0</span></span></code></pre></div><blockquote><ol><li>mall 商城项目未采用该方案</li><li>Mall 商城并没有校验库存数量</li></ol></blockquote><h3 id="_3-2-方案二-数据库无符号整数" tabindex="-1"><a class="header-anchor" href="#_3-2-方案二-数据库无符号整数"><span>3.2 **方案二：**数据库无符号整数</span></a></h3><p>设置数据库的字段数据为无符号整数，这样减后库存字段值<strong>小于零时 SQL 语句会报错</strong>。</p><blockquote><ol><li>mall 商城项目未采用该方案</li><li>数据库存储字段是int</li></ol><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>stock           int default 0  null comment &#39;库存&#39;,</span></span>
<span class="line"><span>lock_stock      int default 0  null comment &#39;锁定库存&#39;,</span></span></code></pre></div></blockquote><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://mp.weixin.qq.com/s/BgVr0jEBJwQI5UW_ele08A" target="_blank" rel="noopener noreferrer">聊聊电商系统中常见的9大坑！库存超卖、重复下单、物流单ABA</a></p>`,22)]))}const p=a(o,[["render",i],["__file","mall-key-points-Inventory.html.vue"]]),c=JSON.parse('{"path":"/posts/Architect/mall/mall-key-points-Inventory.html","title":"商城设计要点-库存超卖","lang":"zh-CN","frontmatter":{"description":"商城设计要点-库存超卖 1. 简介 2. 库存扣减方式 2.1 下单减库存 即当买家下单后，在商品的总库存中减去买家购买数量。下单减库存是最简单的减库存方式，也是控制最精确的一种，下单时直接通过数据库的事务机制控制商品库存，这样一定不会出现超卖的情况。但是你要知道，有些人下完单可能并不会付款。 2.2 付款减库存 即买家下单后，并不立即减库存，而是等到...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/mall/mall-key-points-Inventory.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"商城设计要点-库存超卖"}],["meta",{"property":"og:description","content":"商城设计要点-库存超卖 1. 简介 2. 库存扣减方式 2.1 下单减库存 即当买家下单后，在商品的总库存中减去买家购买数量。下单减库存是最简单的减库存方式，也是控制最精确的一种，下单时直接通过数据库的事务机制控制商品库存，这样一定不会出现超卖的情况。但是你要知道，有些人下完单可能并不会付款。 2.2 付款减库存 即买家下单后，并不立即减库存，而是等到..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"商城设计要点-库存超卖\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 库存扣减方式","slug":"_2-库存扣减方式","link":"#_2-库存扣减方式","children":[{"level":3,"title":"2.1 下单减库存","slug":"_2-1-下单减库存","link":"#_2-1-下单减库存","children":[]},{"level":3,"title":"2.2 付款减库存","slug":"_2-2-付款减库存","link":"#_2-2-付款减库存","children":[]},{"level":3,"title":"2.3 预扣库存","slug":"_2-3-预扣库存","link":"#_2-3-预扣库存","children":[]}]},{"level":2,"title":"3. 解决方案","slug":"_3-解决方案","link":"#_3-解决方案","children":[{"level":3,"title":"3.1 方案一：行级锁校验库存","slug":"_3-1-方案一-行级锁校验库存","link":"#_3-1-方案一-行级锁校验库存","children":[]},{"level":3,"title":"3.2 **方案二：**数据库无符号整数","slug":"_3-2-方案二-数据库无符号整数","link":"#_3-2-方案二-数据库无符号整数","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.39,"words":717},"filePathRelative":"posts/Architect/mall/mall-key-points-Inventory.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<h2>2. 库存扣减方式</h2>\\n<h3>2.1 下单减库存</h3>\\n<p>即当买家下单后，在商品的总库存中减去买家购买数量。下单减库存是最简单的减库存方式，也是控制最精确的一种，下单时直接通过数据库的事务机制控制商品库存，这样一定不会出现超卖的情况。<strong>但是你要知道，有些人下完单可能并不会付款。</strong></p>\\n<h3>2.2 付款减库存</h3>\\n<p>即买家下单后，并不立即减库存，而是等到有用户付款后才真正减库存，否则库存一直保留给其他买家。但因为付款时才减库存，如果并发比较高，有可能出现<strong>买家下单后付不了款的情况，因为可能商品已经被其他人买走了。</strong></p>","autoDesc":true}');export{p as comp,c as data};
