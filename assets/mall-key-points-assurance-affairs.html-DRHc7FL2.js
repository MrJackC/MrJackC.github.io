import{_ as t,c as a,a as o,o as r}from"./app-JRvFIbSa.js";const n={};function c(s,e){return r(),a("div",null,e[0]||(e[0]=[o('<h1 id="商城设计要点-六-账户余额更新-保证事务" tabindex="-1"><a class="header-anchor" href="#商城设计要点-六-账户余额更新-保证事务"><span>商城设计要点(六)-账户余额更新，保证事务</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>用户支付，我们要从买家账户减掉一定金额，再往卖家增加一定金额，为了保证数据的<code>完整性</code>、<code>可追溯性</code>，变更余额时，我们通常会同时插入一条<code>记录流水</code>。</p><p><strong>账户流水核心字段</strong>：流水ID、金额、交易双方账户、交易时间戳、订单号、</p><blockquote><p>注意：账户流水只能新增，不能修改和删除。流水号必须是自增的。</p></blockquote><p>后续，系统对账时，我们只需要对交易流水明细数据做累计即可，如果出现和余额不一致情况，一般以交易流水为准来修复余额数据。</p><p><code>更新余额</code>、<code>记录流水</code> 虽属于两个操作，但是要保证要么都成功，要么都失败。要做到事务。</p><h2 id="_2-解决" tabindex="-1"><a class="header-anchor" href="#_2-解决"><span>2. 解决</span></a></h2><p>数据库的事务隔离级别有：<code>读未提交（RU）</code>、<code>读已提交（RC）</code>、<code>可重复读（RR）</code>、<code>串行化（Serializable）</code></p><p>常用的隔离级别是 RC 和 RR ，因为这两种隔离级别都可以避免脏读。</p><ul><li><strong><a href="https://mp.weixin.qq.com/s?__biz=Mzg2NzYyNjQzNg==&amp;mid=2247488721&amp;idx=1&amp;sn=28bbdd6818da9b6afeda46319e060fb3&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">跑了4个实验，实战讲解 MySQL的行锁、间隙锁...</a></strong></li><li><strong><a href="https://mp.weixin.qq.com/s?__biz=Mzg2NzYyNjQzNg==&amp;mid=2247486613&amp;idx=1&amp;sn=1ce63f19e077d8230799bc0e4c41b04f&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">InnoDB解决幻读的方案 -- LBCC&amp;MVCC</a></strong></li></ul><p>当然，如果涉及多个微服务调用，会用到<strong>分布式事务</strong></p><p>分布式事务，细想下也很容易理解，就是将<code>一个大事务</code>拆分为多个<code>本地事务</code>，本地事务依然借助于数据库自身事务来解决，难点在于解决这个分布式一致性问题，借助<strong>重试</strong>机制，保证最终一致是我们常用的方案</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://mp.weixin.qq.com/s/BgVr0jEBJwQI5UW_ele08A" target="_blank" rel="noopener noreferrer">聊聊电商系统中常见的9大坑！库存超卖、重复下单、物流单ABA</a></p>',15)]))}const i=t(n,[["render",c],["__file","mall-key-points-assurance-affairs.html.vue"]]),l=JSON.parse('{"path":"/posts/Architect/mall/mall-key-points-assurance-affairs.html","title":"商城设计要点(六)-账户余额更新，保证事务","lang":"zh-CN","frontmatter":{"description":"商城设计要点(六)-账户余额更新，保证事务 1. 简介 用户支付，我们要从买家账户减掉一定金额，再往卖家增加一定金额，为了保证数据的完整性、可追溯性，变更余额时，我们通常会同时插入一条记录流水。 账户流水核心字段：流水ID、金额、交易双方账户、交易时间戳、订单号、 注意：账户流水只能新增，不能修改和删除。流水号必须是自增的。 后续，系统对账时，我们只需...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/mall/mall-key-points-assurance-affairs.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"商城设计要点(六)-账户余额更新，保证事务"}],["meta",{"property":"og:description","content":"商城设计要点(六)-账户余额更新，保证事务 1. 简介 用户支付，我们要从买家账户减掉一定金额，再往卖家增加一定金额，为了保证数据的完整性、可追溯性，变更余额时，我们通常会同时插入一条记录流水。 账户流水核心字段：流水ID、金额、交易双方账户、交易时间戳、订单号、 注意：账户流水只能新增，不能修改和删除。流水号必须是自增的。 后续，系统对账时，我们只需..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"商城设计要点(六)-账户余额更新，保证事务\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 解决","slug":"_2-解决","link":"#_2-解决","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.59,"words":476},"filePathRelative":"posts/Architect/mall/mall-key-points-assurance-affairs.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>用户支付，我们要从买家账户减掉一定金额，再往卖家增加一定金额，为了保证数据的<code>完整性</code>、<code>可追溯性</code>，变更余额时，我们通常会同时插入一条<code>记录流水</code>。</p>\\n<p><strong>账户流水核心字段</strong>：流水ID、金额、交易双方账户、交易时间戳、订单号、</p>\\n<blockquote>\\n<p>注意：账户流水只能新增，不能修改和删除。流水号必须是自增的。</p>\\n</blockquote>\\n<p>后续，系统对账时，我们只需要对交易流水明细数据做累计即可，如果出现和余额不一致情况，一般以交易流水为准来修复余额数据。</p>","autoDesc":true}');export{i as comp,l as data};