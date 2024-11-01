import{_ as e,c as i,a as o,o as n}from"./app-tJW29Kmg.js";const a={};function l(p,t){return n(),i("div",null,t[0]||(t[0]=[o('<h1 id="计算大数据量-频繁操作数据库优化" tabindex="-1"><a class="header-anchor" href="#计算大数据量-频繁操作数据库优化"><span>计算大数据量，频繁操作数据库优化</span></a></h1><h2 id="_1-背景介绍" tabindex="-1"><a class="header-anchor" href="#_1-背景介绍"><span>1. 背景介绍</span></a></h2><p>我们有个业务场景是需要计算几万个用户的特征，这些用户特征分布在10个表中（不单单是获取某个字段，拿到记录后还需要手动计算）。</p><p><strong>最初的版本</strong></p><ol><li>循环出这几万个用户信息</li><li>根据用户信息到对应的10张表中查询特征值，并计算</li><li>将这n个特征值合并</li><li>保存到数据库中</li></ol><p>在数据量小的时候，该方案并没有什么问题，几分钟就完事了。但我们线上环境需要计算几万，甚至几十万的时候，时间成倍增长（我们同步3万个用户，花费了15个小时）。</p><h2 id="_2-优化方案1" tabindex="-1"><a class="header-anchor" href="#_2-优化方案1"><span>2. 优化方案1</span></a></h2><p>尝试使用线程池，将3万个数据划分成每100个用户一组添加到线程池。</p><blockquote><p>线程池配置：核心线程20个，最大线程40个</p></blockquote><p>但效果并不好，我们这里的操作主要是频繁操作数据库，这一部分耗费的时间过长。</p><blockquote><p>每个用户查询10张关联表，在保存。</p><p>3万个用户，实际查询就需要30万次，保存3万次</p></blockquote><h2 id="_3-优化方案2" tabindex="-1"><a class="header-anchor" href="#_3-优化方案2"><span>3. 优化方案2</span></a></h2><p>关于这种频繁操作数据库，io密集型的操作。我们的优化方式思路：</p><ul><li>减少请求数量</li><li>减少请求大小</li></ul><p>关于请求数量上，我们查询一个用户的时间和查询100个用户的时间是差不多的，我们把计算放在内存中操作，最后再将这些数据组合就会快很多。</p><p>实现思路</p><ol><li>将3万个用户，每100个划分为一组，添加进线程池</li><li>一次查询出线程中的100个用户的关联数据</li><li>分别计算这100个用户特征，然后将特征值放入特征map中（key 为用户id，value对应的特征值）</li><li>将特征集的n个map，通过用户id查询组合成新特征集</li><li>批量保存100个特征集</li></ol><p>优化后3万个用户同步花费时间为5分钟</p>',18)]))}const s=e(a,[["render",l],["__file","optimization-x-frequent-operation-db.html.vue"]]),c=JSON.parse('{"path":"/posts/Daily-Thoughts/optimization/optimization-x-frequent-operation-db.html","title":"计算大数据量，频繁操作数据库优化","lang":"zh-CN","frontmatter":{"aliases":"计算大数据量，频繁操作数据库优化","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:53","updated":"2024-05-30 17:10","description":"计算大数据量，频繁操作数据库优化 1. 背景介绍 我们有个业务场景是需要计算几万个用户的特征，这些用户特征分布在10个表中（不单单是获取某个字段，拿到记录后还需要手动计算）。 最初的版本 循环出这几万个用户信息 根据用户信息到对应的10张表中查询特征值，并计算 将这n个特征值合并 保存到数据库中 在数据量小的时候，该方案并没有什么问题，几分钟就完事了。...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Daily-Thoughts/optimization/optimization-x-frequent-operation-db.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"计算大数据量，频繁操作数据库优化"}],["meta",{"property":"og:description","content":"计算大数据量，频繁操作数据库优化 1. 背景介绍 我们有个业务场景是需要计算几万个用户的特征，这些用户特征分布在10个表中（不单单是获取某个字段，拿到记录后还需要手动计算）。 最初的版本 循环出这几万个用户信息 根据用户信息到对应的10张表中查询特征值，并计算 将这n个特征值合并 保存到数据库中 在数据量小的时候，该方案并没有什么问题，几分钟就完事了。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"计算大数据量，频繁操作数据库优化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景介绍","slug":"_1-背景介绍","link":"#_1-背景介绍","children":[]},{"level":2,"title":"2. 优化方案1","slug":"_2-优化方案1","link":"#_2-优化方案1","children":[]},{"level":2,"title":"3. 优化方案2","slug":"_3-优化方案2","link":"#_3-优化方案2","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.96,"words":589},"filePathRelative":"posts/Daily-Thoughts/optimization/optimization-x-frequent-operation-db.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 背景介绍</h2>\\n<p>我们有个业务场景是需要计算几万个用户的特征，这些用户特征分布在10个表中（不单单是获取某个字段，拿到记录后还需要手动计算）。</p>\\n<p><strong>最初的版本</strong></p>\\n<ol>\\n<li>循环出这几万个用户信息</li>\\n<li>根据用户信息到对应的10张表中查询特征值，并计算</li>\\n<li>将这n个特征值合并</li>\\n<li>保存到数据库中</li>\\n</ol>\\n<p>在数据量小的时候，该方案并没有什么问题，几分钟就完事了。但我们线上环境需要计算几万，甚至几十万的时候，时间成倍增长（我们同步3万个用户，花费了15个小时）。</p>","autoDesc":true}');export{s as comp,c as data};
