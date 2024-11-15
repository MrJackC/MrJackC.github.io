import{_ as a,c as t,a as i,o as n}from"./app-fWubcX7c.js";const r={};function s(p,e){return n(),t("div",null,e[0]||(e[0]=[i('<h1 id="数据库主键的一些思考" tabindex="-1"><a class="header-anchor" href="#数据库主键的一些思考"><span>数据库主键的一些思考</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>对于分布式场景，主键自增会带来全局唯一性的问题。无疑采用雪花算法等是最合适分布式场景的。</p><p>但在若依框架中，并没有采用雪花算法。而是使用主键自增。并在git上作者这么说到</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131423139.png" alt="image-20220607195954128" tabindex="0" loading="lazy"><figcaption>image-20220607195954128</figcaption></figure><p>是呀，大部分人，大部分场景确实用不到。要改自己改也不是件难事</p><h2 id="_2-用主键自增可以吗" tabindex="-1"><a class="header-anchor" href="#_2-用主键自增可以吗"><span>2. 用主键自增可以吗？</span></a></h2><p>其实大部分场景我们一主多从读写分离就够用了。在只有一主写的情况下，自增完全是能解决我们的问题的。</p><p>作为框架再说，不用做的那么绝。如果真有需要自己去扩展就好了</p><h2 id="_3-主键生成方案" tabindex="-1"><a class="header-anchor" href="#_3-主键生成方案"><span>3. 主键生成方案</span></a></h2><h3 id="_3-1-主键自增的优缺点" tabindex="-1"><a class="header-anchor" href="#_3-1-主键自增的优缺点"><span>3.1 主键自增的优缺点</span></a></h3><h4 id="_3-1-1-优点" tabindex="-1"><a class="header-anchor" href="#_3-1-1-优点"><span>3.1.1 优点:</span></a></h4><p>1、数据存储空间小</p><p>2、查询效率高</p><h4 id="_3-1-2-缺点" tabindex="-1"><a class="header-anchor" href="#_3-1-2-缺点"><span>3.1.2 缺点:</span></a></h4><p>1、如果数据量过大,会超出自增长的值范围</p><p>2、分布式存储的表操作,尤其是在合并的时候操作复杂</p><p>3、安全性低,因为是有规律的,如果恶意扒取用户信息会很容易,如果是单据编号使用,竞争对手会容易查询出货量</p><h3 id="_3-2-使用uuid主键" tabindex="-1"><a class="header-anchor" href="#_3-2-使用uuid主键"><span>3.2 使用UUID主键</span></a></h3><h4 id="_3-2-1-优点" tabindex="-1"><a class="header-anchor" href="#_3-2-1-优点"><span>3.2.1 优点:</span></a></h4><p>1、出现重复的机会少</p><p>2、适合大量数据的插入和更新操作,尤其是在高并发和分布式环境下</p><p>3、安全性较高</p><h4 id="_3-2-2-缺点" tabindex="-1"><a class="header-anchor" href="#_3-2-2-缺点"><span>3.2.2 缺点:</span></a></h4><p>1、存储空间大（16 byte）,因此它将会占用更多的磁盘空间, MySQL官方有明确的建议主键要尽量越短越好，36个字符长度的UUID不符合要求</p><p>2、性能降低,对MySQL索引不利: 如果作为数据库主键，在InnoDB引擎下，UUID的无序性可能会引起数据位置频繁变动，严重影响性能。</p><h3 id="_3-3-分布式环境下保证主键的唯一性" tabindex="-1"><a class="header-anchor" href="#_3-3-分布式环境下保证主键的唯一性"><span>3.3 分布式环境下保证主键的唯一性</span></a></h3><p>目前两种解决方式,下面分别介绍:</p><h4 id="_3-3-1-twitter-snowflake-64位自增id算法" tabindex="-1"><a class="header-anchor" href="#_3-3-1-twitter-snowflake-64位自增id算法"><span>3.3.1 Twitter-Snowflake 64位自增id算法</span></a></h4><h5 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景:</span></a></h5><p>Twitter-Snowflake算法产生的背景相当简单,为了满足Twitter每秒上万条消息的请求,每条消息都必须分配一条唯一的id,这些id还需要一些大致的顺序（方便客户端排序）,并且在分布式系统中不同机器产生的id必须不同</p><h5 id="snowflake算法核心" tabindex="-1"><a class="header-anchor" href="#snowflake算法核心"><span>Snowflake算法核心</span></a></h5><p>时间戳 + 工作机器id + 序列</p><p>Snowflake ID有64bits长 由如图4部分组成:</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131423190.png" alt="image-20220607201205121" tabindex="0" loading="lazy"><figcaption>image-20220607201205121</figcaption></figure><p>第一位不可用</p><p>第二组 timestamp—41bits 使用41位时间戳,精确到毫秒,意味着其可以表示长达<code>(2^41-1)/(1000360024*365)=139.5年</code>，另外使用者可以自己定义一个开始纪元（epoch)，然后用(当前时间-开始纪元）算出time，这表示在time这个部分在140年的时间里是不会重复的,另外这里用time还有一个很重要的原因，就是可以直接更具time进行排序，对于twitter这种更新频繁的应用，时间排序就显得尤为重要了。</p><p>machine id—10bits(工作机器id),该部分其实由datacenterId和workerId两部分组成，这两部分是在配置文件中指明的:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>10位的数据机器位，可以部署在1024个节点，包括5位datacenterId和5位workerId</span></span></code></pre></div><p>1、datacenterId，方便搭建多个生成uid的service，并保证uid不重复，比如在datacenter0将机器0，1，2组成了一个生成uid的service，而datacenter1此时也需要一个生成uid的service，从本中心获取uid显然是最快最方便的，那么它可以在自己中心搭建，只要保证datacenterId唯一。如果没有datacenterId，即用10bits，那么在搭建一个新的service前必须知道目前已经在用的id，否则不能保证生成的id唯一，比如搭建的两个uid service中都有machine id为100的机器，如果其server时间相同，那么产生相同id的情况不可避免。</p><p>2、workerId是实际server机器的代号，最大到32，同一个datacenter下的workerId是不能重复的。它会被注册到consul上，确保workerId未被其他机器占用，并将host:port值存入，注册成功后就可以对外提供服务了。</p><ul><li>sequence id —12bits(序列号),该id可以表示4096个数字，它是在time相同的情况下，递增该值直到为0，即一个循环结束，此时便只能等到下一个ms到来，一般情况下4096/ms的请求是不太可能出现的，所以足够使用了。</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://juejin.cn/post/6844903753603252232" target="_blank" rel="noopener noreferrer">数据库主键是自增好还是UUID好,分布式环境下如何保证主键的唯一性</a></p>',44)]))}const o=a(r,[["render",s],["__file","optimization-x-db-id.html.vue"]]),c=JSON.parse('{"path":"/posts/Daily-Thoughts/optimization/optimization-x-db-id.html","title":"数据库主键的一些思考","lang":"zh-CN","frontmatter":{"aliases":"数据库主键的一些思考","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:53","updated":"2024-05-30 17:05","description":"数据库主键的一些思考 1. 简介 对于分布式场景，主键自增会带来全局唯一性的问题。无疑采用雪花算法等是最合适分布式场景的。 但在若依框架中，并没有采用雪花算法。而是使用主键自增。并在git上作者这么说到 image-20220607195954128image-20220607195954128 是呀，大部分人，大部分场景确实用不到。要改自己改也不是件...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Daily-Thoughts/optimization/optimization-x-db-id.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"数据库主键的一些思考"}],["meta",{"property":"og:description","content":"数据库主键的一些思考 1. 简介 对于分布式场景，主键自增会带来全局唯一性的问题。无疑采用雪花算法等是最合适分布式场景的。 但在若依框架中，并没有采用雪花算法。而是使用主键自增。并在git上作者这么说到 image-20220607195954128image-20220607195954128 是呀，大部分人，大部分场景确实用不到。要改自己改也不是件..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131423139.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据库主键的一些思考\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131423139.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131423190.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 用主键自增可以吗？","slug":"_2-用主键自增可以吗","link":"#_2-用主键自增可以吗","children":[]},{"level":2,"title":"3. 主键生成方案","slug":"_3-主键生成方案","link":"#_3-主键生成方案","children":[{"level":3,"title":"3.1 主键自增的优缺点","slug":"_3-1-主键自增的优缺点","link":"#_3-1-主键自增的优缺点","children":[]},{"level":3,"title":"3.2 使用UUID主键","slug":"_3-2-使用uuid主键","link":"#_3-2-使用uuid主键","children":[]},{"level":3,"title":"3.3 分布式环境下保证主键的唯一性","slug":"_3-3-分布式环境下保证主键的唯一性","link":"#_3-3-分布式环境下保证主键的唯一性","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.1,"words":1230},"filePathRelative":"posts/Daily-Thoughts/optimization/optimization-x-db-id.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>对于分布式场景，主键自增会带来全局唯一性的问题。无疑采用雪花算法等是最合适分布式场景的。</p>\\n<p>但在若依框架中，并没有采用雪花算法。而是使用主键自增。并在git上作者这么说到</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131423139.png\\" alt=\\"image-20220607195954128\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220607195954128</figcaption></figure>","autoDesc":true}');export{o as comp,c as data};
