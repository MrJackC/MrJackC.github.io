import{_ as n,c as a,a as i,o as e}from"./app-mWs04Xnh.js";const l={};function t(o,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="mongodb索引详解" tabindex="-1"><a class="header-anchor" href="#mongodb索引详解"><span>mongoDB索引详解</span></a></h1><h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述"><span>1. 概述</span></a></h2><p>我们使用索引的目的是什么呢？</p><p>终极目的：借助索引快速搜索，有效减少了扫描的行数</p><p>精髓：不止要有索引，索引的过滤性还要好，区分度要足够高，这才是好的设计</p><h2 id="_2-索引的类型" tabindex="-1"><a class="header-anchor" href="#_2-索引的类型"><span>2. 索引的类型</span></a></h2><h3 id="_2-1-唯一索引" tabindex="-1"><a class="header-anchor" href="#_2-1-唯一索引"><span>2.1 唯一索引</span></a></h3><p>唯一索引是索引具有的一种属性，让索引具备唯一性，确保这张表中，该条索引数据不会重复出现。在每一次insert和update操作时，都会进行索引的唯一性校验，保证该索引的字段组合在表中唯一。</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">db</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">containers</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">createIndex</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span><span style="color:#E06C75;--shiki-dark:#E06C75;">name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">},{</span><span style="color:#E06C75;--shiki-dark:#E06C75;">unique</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">background</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">db</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">packages</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">createIndex</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({ </span><span style="color:#E06C75;--shiki-dark:#E06C75;">appId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> },{</span><span style="color:#E06C75;--shiki-dark:#E06C75;">unique</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">background</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><blockquote><p><strong>知识点一：</strong><br><strong>创建索引时,1表示按升序存储,-1表示按降序存储。</strong></p></blockquote><blockquote><p><strong>知识点二：</strong><br><strong>Mongo提供两种建索引的方式foreground和background。</strong><br><strong>前台操作，它会阻塞用户对数据的读写操作直到index构建完毕；</strong><br><strong>后台模式，不阻塞数据读写操作，独立的后台线程异步构建索引，此时仍然允许对数据的读写操作。</strong><br><strong>创建索引时一定要写{background: true}</strong><br><strong>创建索引时一定要写{background: true}</strong><br><strong>创建索引时一定要写{background: true}</strong></p></blockquote><h3 id="_2-2-复合索引" tabindex="-1"><a class="header-anchor" href="#_2-2-复合索引"><span>2.2 <strong>复合索引</strong></span></a></h3><p>**概念：**指的是将多个键组合到一起创建索引，终极目的是加速匹配多个键的查询。</p><p>看例子来理解复合索引是最直接的方式：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130837930.png" alt="image-20211220202249659" tabindex="0" loading="lazy"><figcaption>image-20211220202249659</figcaption></figure><p>图中模拟了简单的航班信息表的数据。</p><p>对表中指定航班进行查询，查询后按价格排序。</p><p><strong>db.getCollection(&#39;flight&#39;).find({flight: “CA12345”}).sort({price: 1})</strong></p><p><strong>在没有索引的情况下，那么他其实是会一条一条的扫描全部8条数据，找到</strong>CA12345航班，然后再在内存中按价钱进行排序。</p><p>如果这时我给航班添加一条索引<strong>db.flights.createIndex({</strong> <strong>flight: 1</strong> <strong>},{background: true})，那么索引会类似于下图一样，将数据按照索引规则进行排序，此时就只需要扫描4条</strong>CA12345航班的数据，然后再在内存中进行排序。如果数据量大了以后，在内存中进行排序的代价是非常大的。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130837975.png" alt="image-20211220202329079" tabindex="0" loading="lazy"><figcaption>image-20211220202329079</figcaption></figure><p>所以我们可以建立<strong>复合索引 db.flights.createIndex({ flight: 1, price: 1 },{background: true})</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130837999.png" alt="image-20211220202348127" tabindex="0" loading="lazy"><figcaption>image-20211220202348127</figcaption></figure><p>让数据按照索引先将所有数据以航班号有序排列，再在航班号相同的数据集中按价格升序排列，这样在进行查询的时候，就可以准确的使用索引扫描4条数据，并且他们本身就是有序的，无需再进行额外的排序工作。以上实现了通过复合索引，让查询变得最优，这就是复合索引的作用。</p><h3 id="_2-3-内嵌索引" tabindex="-1"><a class="header-anchor" href="#_2-3-内嵌索引"><span>2.3 内嵌索引</span></a></h3><p>可以在嵌套的文档上建立索引，方式与建立正常索引完全一致。</p><p>个人信息表结构如下,包含了省市区三级的地址信息，如果想要给城市（city）添加索引，其实就和正常添索引一样</p><p><strong>db.personInfos.createIndex({“address.city”:1})</strong></p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>const personInfo = new Schema({</span></span>
<span class="line"><span>  name: { type: String, required: true },</span></span>
<span class="line"><span>  address: {</span></span>
<span class="line"><span>    province: { type: String, required: true },</span></span>
<span class="line"><span>    city: { type: String, required: true }, </span></span>
<span class="line"><span>    district: { type: String, required: true },</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}, {timestamps: true});</span></span></code></pre></div><blockquote><p>知识点三：<br> 对嵌套文档本身“address”建立索引，与对嵌套文档的某个字段（address.city）建立索引是完全不相同的。<br> 对整个文档建立索引，只有在使用文档完整匹配时才会使用到这个索引，例如建立了这样一个索引db.personInfos.createIndex({“address”:1})，那么只有使用db.personInfos.find({“address”:{“province”:”xxx”,”city”:”xxx”,&quot;&quot;district&quot;:&quot;xxx&quot;}})这种完整匹配时才会使用到这个索引，使用db.personInfos.find({“address.city”:”xxx”})是不会使用到该索引的。</p></blockquote><h3 id="_2-4-数组索引" tabindex="-1"><a class="header-anchor" href="#_2-4-数组索引"><span>2.4 数组索引</span></a></h3><p><strong>MongoDB支持对数组建立索引，这样就可以高效的搜索数组中的特定元素。</strong></p><blockquote><p>知识点四：<br> 但是！对数组建立索引的代价是非常高的，他实际上是会对数组中的每一项都单独建立索引，就相当于假设数组中有十项，那么就会在原基础上，多出十倍的索引大小。如果有一百个一千个呢？<br> 所以在mongo中是禁止对两个数组添加复合索引的，对两个数组添加索引那么索引大小将是爆炸增长，所以谨记在心。</p></blockquote><h3 id="_2-5-过期索引-ttl" tabindex="-1"><a class="header-anchor" href="#_2-5-过期索引-ttl"><span>2.5 过期索引（TTL）</span></a></h3><p>可以针对某个时间字段，指定文档的过期时间（经过指定时间后过期 或 在某个时间点过期）</p><h3 id="_2-6-哈希索引-hashed-index" tabindex="-1"><a class="header-anchor" href="#_2-6-哈希索引-hashed-index"><span>2.6 哈希索引（Hashed Index）</span></a></h3><p>是指按照某个字段的hash值来建立索引，hash索引只能满足字段完全匹配的查询，不能满足范围查询等</p><h3 id="_2-7-地理位置索引-geospatial-index" tabindex="-1"><a class="header-anchor" href="#_2-7-地理位置索引-geospatial-index"><span>2.7 地理位置索引（Geospatial Index）</span></a></h3><p>能很好的解决一些场景，比如『查找附近的美食』、『查找附近的加油站』等</p><h3 id="_2-8-文本索引-text-index" tabindex="-1"><a class="header-anchor" href="#_2-8-文本索引-text-index"><span>2.8 文本索引（Text Index）</span></a></h3><p>能解决快速文本查找的需求，比如，日志平台，相对日志关键词查找，如果通过正则来查找的话效率极低，这时就可以通过文本索引的形式来进行查找</p><h2 id="_3-索引优缺点" tabindex="-1"><a class="header-anchor" href="#_3-索引优缺点"><span>3. 索引优缺点</span></a></h2><h3 id="_3-1-有点" tabindex="-1"><a class="header-anchor" href="#_3-1-有点"><span>3.1 有点</span></a></h3><p><strong>1.减少数据扫描：避免全表扫描代价</strong></p><p><strong>2.减少内存计算：避免分组排序计算</strong></p><p><strong>3.提供数据约束：唯一和时间约束性</strong></p><h3 id="_3-2-索引的缺点" tabindex="-1"><a class="header-anchor" href="#_3-2-索引的缺点"><span>3.2 <strong>索引的缺点</strong></span></a></h3><p><strong>1.增加容量消耗：创建时需额外存储索引数据</strong></p><p><strong>2.增加修改代价：增删改都需要维护索引数据</strong></p><p><strong>3.索引依赖内存：会占用极其宝贵的内存资源</strong></p><p>索引固然不全是优点，如果不能了解到索引可能带来的危害滥用索引，后果也是非常严重的。</p><p>索引虽然也是持久化在磁盘中的，但为了确保索引的速度，实际上需要将索引加载到内存中使用，使用过后还会进行缓存，内存资源相比磁盘空间那是非常的珍贵了。当内存不足以承载索引的时候，就会出现内存——磁盘交换的情况，这时会大大降低索引的性能。</p><p>有人说研究索引好累啊？我给我的每个字段都加一个索引不就完事了么？其实每个人都知道这样不好，但实战中好多人都是这样干的。无脑的给每个字段都加上索引就意味着每一次数据库操作，不仅需要更新文档，还需要有大量索引需要更新。mongo每次查询只会使用一个索引。想不到吧？不是你想的我先查航班，在用价格排序，会先走航班的索引，再走价格的索引，你做梦去吧，不可能的，他只会选定一条索引，并不会因为你给每个字端都加了索引就解决问题了。</p><blockquote><p>知识点五：<br><strong>为了追求索引的速度，索引是加载在内存中使用的，不能合理使用索引后果严重。</strong><br><strong>mongo每次查询只会使用一次索引！！！只有$or或查询特殊，他会给每一个或分支使用索引然后再合并</strong></p></blockquote><h2 id="_4-何时不应该使用索引" tabindex="-1"><a class="header-anchor" href="#_4-何时不应该使用索引"><span>4. <strong>何时不应该使用索引</strong></span></a></h2><p>也有一些查询不使用索引会更快。<strong>结果集在原集合中所占的比例越大，查询效率越慢</strong>。因为使用索引需要进行两次查找：一次查找索引条目，一次根据索引指针去查找相应的文档。而全表扫描只需要进行一次查询。在最坏的情况，使用索引进行查找次数会是全表扫描的两倍。效率会明显比全表扫描低。</p><p>相反在提取较小的子数据集时，索引就非常有效，这就是我们为什么会使用分页。</p><h2 id="_5-查询优化器" tabindex="-1"><a class="header-anchor" href="#_5-查询优化器"><span>5. 查询优化器</span></a></h2><p>Mongo自带了一个查询优化器会为我们选择最合适的查询方案。</p><p>如果一个索引能够精确匹配一个查询，那么查询优化器就会使用这个索引。</p><p>如果不能精确匹配呢？可能会有几个索引都适合你的查询，那MongoDB是怎样选择的呢？</p><ul><li>MongoDB的查询计划会将多个索引并行的去执行，最先返回第101个结果的就是胜者，其他查询计划都会被终止，执行优胜的查询计划；</li><li>这个查询计划会被缓存，接下来相同的查询条件都会使用它；</li></ul><h3 id="_5-1-何时查询计划缓存才会变呢" tabindex="-1"><a class="header-anchor" href="#_5-1-何时查询计划缓存才会变呢"><span>5.1 何时查询计划缓存才会变呢？</span></a></h3><ol><li>在计划评估之后表发生了比较大的数据波动，查询优化器就会重新挑选可行的查询计划</li><li>建立索引时</li><li>每执行1000次查询之后，查询优化器就会重新评估查询计划</li></ol><h3 id="_5-2-联合索引的优化" tabindex="-1"><a class="header-anchor" href="#_5-2-联合索引的优化"><span>5.2 联合索引的优化</span></a></h3><p>当你查询条件的顺序和你索引的顺序不一致的话，mongo会自动的调整查询顺序，保证你可以使用上索引。</p><p>例如：你的查询条件是(a,c,b)但是你的索引是（a,b,c）mongo会自动将你的查询条件调整为abc，寻找最优解。</p><h3 id="_5-3-聚合管道的优化" tabindex="-1"><a class="header-anchor" href="#_5-3-聚合管道的优化"><span>5.3 聚合管道的优化</span></a></h3><ol><li>如果管道中不需要使用一个完整的文档的全部字段的话，管道不会将多余字段进行传递</li><li>$sort 和 $limit 合并,在内存中只会维护limit个数量的文档，不需要将所有的文档维护在内存中，大大降低内存中sort的压力</li></ol><p>然而管道中的索引使用情况是极其不佳的，在管道中，只有在管道最开始时的match sort可以使用到索引，一旦发生过project投射，group分组，lookup表关联，unwind打散等操作后，就完全无法使用索引。</p><h2 id="_6-explain查询计划" tabindex="-1"><a class="header-anchor" href="#_6-explain查询计划"><span>6. Explain查询计划</span></a></h2><p>提到查的慢，二话不说直接看查询计划好么？具体每一个字段的含义我就不做赘述了很容易查到，我截取winningPlan的部分和大家一起看一下。WinningPlan就是在查询计划中胜出的方案，那肯定就有被淘汰的方案，是在rejectPlan里。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 查询计划中的winningPlan部分</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">&quot;winningPlan&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">	&quot;stage&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;FETCH&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">	&quot;filter&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">		&quot;createdAt&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">			&quot;$gte&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">ISODate(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;2019-07-22T12:00:44.000Z&quot;</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	},</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">	&quot;inputStage&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">		&quot;stage&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;IXSCAN&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">		&quot;keyPattern&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">			&quot;load&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		},</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">		&quot;indexName&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;load_1&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">		&quot;isMultiKey&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">		&quot;multiKeyPaths&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">			&quot;load&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: []</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		},</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">		&quot;isUnique&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">		&quot;isSparse&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">		&quot;isPartial&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">		&quot;indexVersion&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">		&quot;direction&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;backward&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">		&quot;indexBounds&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">			&quot;load&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">				&quot;[MaxKey, MinKey]&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">			]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">},</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看不懂？没关系，先学习了下面两个知识点，我带你读一遍。</p><blockquote><p><strong>知识点六：</strong><br><strong>explain 结果将查询计划以阶段树的形式呈现。</strong><br><strong>每个阶段将其结果（文档或索引键）传递给父节点。</strong><br><strong>中间节点操纵由子节点产生的文档或索引键。</strong><br><strong>根节点是MongoDB从中派生结果集的最后阶段。</strong></p></blockquote><p>对于新人一定要特别注意：在看查询结果的阶段树的时候一定一定是从最里层一层一层往外看的，不是直接顺着读下来的。</p><blockquote><p><strong>知识点七：</strong><br><strong>在查询计划中出现了很多stage，下面列举的经常出现的stage以及他的含义：</strong><br><strong>COLLSCAN：全表扫描</strong><br><strong>IXSCAN：索引扫描</strong><br><strong>FETCH：根据前面扫描到的位置抓取完整文档</strong><br><strong>SORT：进行内存排序，最终返回结果</strong><br><strong>SORT_KEY_GENERATOR：获取每一个文档排序所用的键值</strong><br><strong>LIMIT：使用limit限制返回数</strong><br><strong>SKIP：使用skip进行跳过</strong><br><strong>IDHACK：针对_id进行查询</strong><br><strong>COUNTSCAN：count不使用用Index进行count时的stage返回</strong><br><strong>COUNT_SCAN：count使用了Index进行count时的stage返回</strong><br><strong>TEXT：使用全文索引进行查询时候的stage返回</strong></p></blockquote><p><strong>Explain解读：</strong></p><p><strong>将解读写在了注释中，按顺序阅读</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>// 查询计划中的winningPlan部分</span></span>
<span class="line"><span>&quot;winningPlan&quot;: {</span></span>
<span class="line"><span>	&quot;stage&quot;: &quot;FETCH&quot;,                                            // 5. 根据内层阶段树查到的索引去抓取完整的文档</span></span>
<span class="line"><span>	&quot;filter&quot;: {                                                  // 6. 再根据createdAt参数进行筛选</span></span>
<span class="line"><span>		&quot;createdAt&quot;: {</span></span>
<span class="line"><span>			&quot;$gte&quot;: ISODate(&quot;2019-07-22T12:00:44.000Z&quot;)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;inputStage&quot;: {                                               // 1. 每个阶段将自己的查询结果传递给父阶段树，所以从里往外读Explain</span></span>
<span class="line"><span>		&quot;stage&quot;: &quot;IXSCAN&quot;,                                    // 2. IXSCAN该阶段使用了索引进行扫描</span></span>
<span class="line"><span>		&quot;keyPattern&quot;: {</span></span>
<span class="line"><span>			&quot;load&quot;: 1                                     // 3. 使用了 load:1 这条索引</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		&quot;indexName&quot;: &quot;load_1&quot;,</span></span>
<span class="line"><span>		&quot;isMultiKey&quot;: false,</span></span>
<span class="line"><span>		&quot;multiKeyPaths&quot;: {</span></span>
<span class="line"><span>			&quot;load&quot;: []</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		&quot;isUnique&quot;: false,</span></span>
<span class="line"><span>		&quot;isSparse&quot;: false,</span></span>
<span class="line"><span>		&quot;isPartial&quot;: false,</span></span>
<span class="line"><span>		&quot;indexVersion&quot;: 2,</span></span>
<span class="line"><span>		&quot;direction&quot;: &quot;backward&quot;,                                       </span></span>
<span class="line"><span>		&quot;indexBounds&quot;: {</span></span>
<span class="line"><span>			&quot;load&quot;: [</span></span>
<span class="line"><span>				&quot;[MaxKey, MinKey]&quot;                      // 4. 边界</span></span>
<span class="line"><span>			]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>},</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-最期望看到的查询组合" tabindex="-1"><a class="header-anchor" href="#_7-最期望看到的查询组合"><span>7. 最期望看到的查询组合</span></a></h2><ul><li><strong>Fetch+IDHACK</strong></li><li><strong>Fetch+ixscan</strong></li><li><strong>Limit+（Fetch+ixscan）</strong></li><li><strong>PROJECTION+ixscan</strong></li></ul><h2 id="_8-最不期望看到的查询组合" tabindex="-1"><a class="header-anchor" href="#_8-最不期望看到的查询组合"><span>8. <strong>最不期望看到的查询组合</strong></span></a></h2><ul><li><strong>COLLSCAN（全表扫）</strong></li><li><strong>SORT（使用sort但是无index）</strong></li><li><strong>COUNTSCAN</strong>**（不使用索引进行count）**</li></ul><h2 id="_9-最左前缀原则" tabindex="-1"><a class="header-anchor" href="#_9-最左前缀原则"><span>9. <strong>最左前缀原则</strong></span></a></h2><p><strong>假定索引(a，b，c) 它可能满足的查询如下：</strong></p><p><strong>1. a</strong></p><p><strong>2. a，b</strong></p><p><strong>3. a，b，c</strong></p><p><strong>4. a，c [该组合只能用a部分]</strong></p><p><strong>5. a, c, b [cb在查询时会被优化换位置]</strong></p><p><strong>显然，最左前缀的核心是查询条件字段必须含有索引第一个字段</strong></p><p><strong>最左值尽可能用最精确过滤性最好的值，不要用那种可能会用于范围模糊查询，用于排序的字段</strong></p><h2 id="_10-效率极低的操作符" tabindex="-1"><a class="header-anchor" href="#_10-效率极低的操作符"><span>10. <strong>效率极低的操作符</strong></span></a></h2><ol><li><strong><code>$where</code>和<code>$exists</code>：这两个操作符，完全不能使用索引。</strong></li><li><strong><code>$ne</code>和<code>$not:</code>通常来说取反和不等于,可以使用索引，但是效率极低，不是很有效，往往也会退化成扫描全表。</strong></li><li><strong>$nin:不包含，这个操作符也总是会全表扫描</strong></li><li><strong>对于管道中的索引，也很容易出现意外，只有在管道最开始时的match sort可以使用到索引，一旦发生过project投射，group分组，lookup表关联，unwind打散等操作后，就完全无法使用索引。</strong></li></ol><h2 id="_11-索引设计和优化原则" tabindex="-1"><a class="header-anchor" href="#_11-索引设计和优化原则"><span>11. <strong>索引设计和优化原则</strong></span></a></h2><ol><li>主键的设置</li></ol><p>​ <strong>业务无关、显示指定、递增属性</strong></p><ol><li>数据区分度**</li></ol><p>​ 原则上区分度高的字段优先做索引字段，如果是组合索引优先放前面</p><ol><li>字段更新频率</li></ol><p>​ 频繁更新的字段是否做索引字段需要综合考虑对业务的影响及查询的代价</p><ol><li>前缀索引问题</li></ol><p>​ 需要注意的是因前缀索引只包含部分值因此无法通过前缀索引优化排序</p><ol><li>适当冗余设计</li></ol><p>​ 对于存储较长字符串字段可额外增加字段存储原字段计算(如hash)后的值</p><p>​ 创建索引时只需要对额外字段创建索引即可</p><ol><li>避免无效索引</li></ol><p>​ 通常类似表已经含有主键ID就无需再创建额外唯一性的ID索引</p><ol><li>查询覆盖率</li></ol><p>​ 设计一个索引我们需要考虑尽量覆盖更多的查询场景</p><ol><li>控制字段数</li></ol><p>​ 如果你设计的索引例如含有7、8个字段通常需要考虑设计是否合理</p><h2 id="_12-优化原则" tabindex="-1"><a class="header-anchor" href="#_12-优化原则"><span>12. 优化原则</span></a></h2><ol><li>减少网络带宽</li></ol><p>​ 按需返回所需字段、尽量避免返回大字段</p><ol><li><p>减少内存计算</p><p>减少无必要中间结果存储、减少内存计算</p></li><li><p>减少磁盘IO</p></li></ol><p>​ 添加合适的索引、关注SQL改写</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/77971681" target="_blank" rel="noopener noreferrer">你真的会用索引么？</a></p>`,120)]))}const p=n(l,[["render",t],["__file","mongodb-index-overview.html.vue"]]),d=JSON.parse('{"path":"/posts/Database/MongoDB/mongodb-index-overview.html","title":"mongoDB索引详解","lang":"zh-CN","frontmatter":{"aliases":"mongoDB索引详解","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 08:38","description":"mongoDB索引详解 1. 概述 我们使用索引的目的是什么呢？ 终极目的：借助索引快速搜索，有效减少了扫描的行数 精髓：不止要有索引，索引的过滤性还要好，区分度要足够高，这才是好的设计 2. 索引的类型 2.1 唯一索引 唯一索引是索引具有的一种属性，让索引具备唯一性，确保这张表中，该条索引数据不会重复出现。在每一次insert和update操作时，...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MongoDB/mongodb-index-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"mongoDB索引详解"}],["meta",{"property":"og:description","content":"mongoDB索引详解 1. 概述 我们使用索引的目的是什么呢？ 终极目的：借助索引快速搜索，有效减少了扫描的行数 精髓：不止要有索引，索引的过滤性还要好，区分度要足够高，这才是好的设计 2. 索引的类型 2.1 唯一索引 唯一索引是索引具有的一种属性，让索引具备唯一性，确保这张表中，该条索引数据不会重复出现。在每一次insert和update操作时，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130837930.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mongoDB索引详解\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130837930.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130837975.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130837999.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 概述","slug":"_1-概述","link":"#_1-概述","children":[]},{"level":2,"title":"2. 索引的类型","slug":"_2-索引的类型","link":"#_2-索引的类型","children":[{"level":3,"title":"2.1 唯一索引","slug":"_2-1-唯一索引","link":"#_2-1-唯一索引","children":[]},{"level":3,"title":"2.2 复合索引","slug":"_2-2-复合索引","link":"#_2-2-复合索引","children":[]},{"level":3,"title":"2.3 内嵌索引","slug":"_2-3-内嵌索引","link":"#_2-3-内嵌索引","children":[]},{"level":3,"title":"2.4 数组索引","slug":"_2-4-数组索引","link":"#_2-4-数组索引","children":[]},{"level":3,"title":"2.5 过期索引（TTL）","slug":"_2-5-过期索引-ttl","link":"#_2-5-过期索引-ttl","children":[]},{"level":3,"title":"2.6 哈希索引（Hashed Index）","slug":"_2-6-哈希索引-hashed-index","link":"#_2-6-哈希索引-hashed-index","children":[]},{"level":3,"title":"2.7 地理位置索引（Geospatial Index）","slug":"_2-7-地理位置索引-geospatial-index","link":"#_2-7-地理位置索引-geospatial-index","children":[]},{"level":3,"title":"2.8 文本索引（Text Index）","slug":"_2-8-文本索引-text-index","link":"#_2-8-文本索引-text-index","children":[]}]},{"level":2,"title":"3. 索引优缺点","slug":"_3-索引优缺点","link":"#_3-索引优缺点","children":[{"level":3,"title":"3.1 有点","slug":"_3-1-有点","link":"#_3-1-有点","children":[]},{"level":3,"title":"3.2 索引的缺点","slug":"_3-2-索引的缺点","link":"#_3-2-索引的缺点","children":[]}]},{"level":2,"title":"4. 何时不应该使用索引","slug":"_4-何时不应该使用索引","link":"#_4-何时不应该使用索引","children":[]},{"level":2,"title":"5. 查询优化器","slug":"_5-查询优化器","link":"#_5-查询优化器","children":[{"level":3,"title":"5.1 何时查询计划缓存才会变呢？","slug":"_5-1-何时查询计划缓存才会变呢","link":"#_5-1-何时查询计划缓存才会变呢","children":[]},{"level":3,"title":"5.2 联合索引的优化","slug":"_5-2-联合索引的优化","link":"#_5-2-联合索引的优化","children":[]},{"level":3,"title":"5.3 聚合管道的优化","slug":"_5-3-聚合管道的优化","link":"#_5-3-聚合管道的优化","children":[]}]},{"level":2,"title":"6. Explain查询计划","slug":"_6-explain查询计划","link":"#_6-explain查询计划","children":[]},{"level":2,"title":"7. 最期望看到的查询组合","slug":"_7-最期望看到的查询组合","link":"#_7-最期望看到的查询组合","children":[]},{"level":2,"title":"8. 最不期望看到的查询组合","slug":"_8-最不期望看到的查询组合","link":"#_8-最不期望看到的查询组合","children":[]},{"level":2,"title":"9. 最左前缀原则","slug":"_9-最左前缀原则","link":"#_9-最左前缀原则","children":[]},{"level":2,"title":"10. 效率极低的操作符","slug":"_10-效率极低的操作符","link":"#_10-效率极低的操作符","children":[]},{"level":2,"title":"11. 索引设计和优化原则","slug":"_11-索引设计和优化原则","link":"#_11-索引设计和优化原则","children":[]},{"level":2,"title":"12. 优化原则","slug":"_12-优化原则","link":"#_12-优化原则","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":12.83,"words":3848},"filePathRelative":"posts/Database/MongoDB/mongodb-index-overview.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 概述</h2>\\n<p>我们使用索引的目的是什么呢？</p>\\n<p>终极目的：借助索引快速搜索，有效减少了扫描的行数</p>\\n<p>精髓：不止要有索引，索引的过滤性还要好，区分度要足够高，这才是好的设计</p>\\n<h2>2. 索引的类型</h2>\\n<h3>2.1 唯一索引</h3>\\n<p>唯一索引是索引具有的一种属性，让索引具备唯一性，确保这张表中，该条索引数据不会重复出现。在每一次insert和update操作时，都会进行索引的唯一性校验，保证该索引的字段组合在表中唯一。</p>\\n<div class=\\"language-js\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">db</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">containers</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">createIndex</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">({</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">name</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">1</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">},{</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">unique</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">true</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, </span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">background</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">true</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">})</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">db</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">packages</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">createIndex</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">({ </span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">appId</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">1</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, </span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">version</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">1</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> },{</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">unique</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">true</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, </span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">background</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">true</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">})</span></span></code></pre>\\n</div>","autoDesc":true}');export{p as comp,d as data};
