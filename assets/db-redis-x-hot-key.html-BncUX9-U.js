import{_ as s,c as a,a as i,o as r}from"./app-DQS7qcOs.js";const n={};function l(o,e){return r(),a("div",null,e[0]||(e[0]=[i(`<h1 id="redis进阶-redis热key问题" tabindex="-1"><a class="header-anchor" href="#redis进阶-redis热key问题"><span>Redis进阶 - Redis热key问题</span></a></h1><h2 id="_0-引言" tabindex="-1"><a class="header-anchor" href="#_0-引言"><span>0. 引言</span></a></h2><p>其实热key问题说来也很简单，就是瞬间有几十万的请求去访问redis上某个固定的key，从而压垮缓存服务的情情况。<br> 其实生活中也是有不少这样的例子。比如XX明星结婚。那么关于XX明星的Key就会瞬间增大，就会出现热数据问题。</p><blockquote><p><code>ps:</code>hot key和big key问题，大家一定要有所了解。</p></blockquote><p>本文预计分为如下几个部分</p><ul><li>热key问题</li><li>如何发现</li><li>业内方案</li></ul><h2 id="_1-热key问题" tabindex="-1"><a class="header-anchor" href="#_1-热key问题"><span>1. 热Key问题</span></a></h2><p>上面提到，所谓热key问题就是，突然有几十万的请求去访问redis上的某个特定key。那么，这样会造成流量过于集中，达到物理网卡上限，从而导致这台redis的服务器宕机。<br> 那接下来这个key的请求，就会直接怼到你的数据库上，导致你的服务不可用。</p><h2 id="_2-怎么发现热key" tabindex="-1"><a class="header-anchor" href="#_2-怎么发现热key"><span>2. 怎么发现热key</span></a></h2><ul><li><em>方法一:凭借业务经验，进行预估哪些是热key</em><br> 其实这个方法还是挺有可行性的。比如某商品在做秒杀，那这个商品的key就可以判断出是热key。缺点很明显，并非所有业务都能预估出哪些key是热key。</li><li><em>方法二:在客户端进行收集</em><br> 这个方式就是在操作redis之前，加入一行代码进行数据统计。那么这个数据统计的方式有很多种，也可以是给外部的通讯系统发送一个通知信息。缺点就是对客户端代码造成入侵。</li><li><em>方法三:在Proxy层做收集</em><br> 有些集群架构是下面这样的，Proxy可以是Twemproxy，是统一的入口。可以在Proxy层做收集上报，但是缺点很明显，并非所有的redis集群架构都有proxy。</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131019429.png" alt="image-20221128232245563" tabindex="0" loading="lazy"><figcaption>image-20221128232245563</figcaption></figure><ul><li><em>方法四:用redis自带命令</em><br> (1)monitor命令，该命令可以实时抓取出redis服务器接收到的命令，然后写代码统计出热key是啥。当然，也有现成的分析工具可以给你使用，比如<code>redis-faina</code>。但是该命令在高并发的条件下，有内存增暴增的隐患，还会降低redis的性能。<br> (2)hotkeys参数，redis 4.0.3提供了redis-cli的热点key发现功能，执行redis-cli时加上–hotkeys选项即可。但是该参数在执行的时候，如果key比较多，执行起来比较慢。</li><li><em>方法五:自己抓包评估</em><br> Redis客户端使用TCP协议与服务端进行交互，通信协议采用的是RESP。自己写程序监听端口，按照RESP协议规则解析数据，进行分析。缺点就是开发成本高，维护困难，有丢包可能性。</li></ul><p>以上五种方案，各有优缺点。根据自己业务场景进行抉择即可。那么发现热key后，如何解决呢？</p><h2 id="_3-如何解决" tabindex="-1"><a class="header-anchor" href="#_3-如何解决"><span>3. 如何解决</span></a></h2><p>目前业内的方案有两种</p><h3 id="_3-1-利用二级缓存" tabindex="-1"><a class="header-anchor" href="#_3-1-利用二级缓存"><span><em>3.1 利用二级缓存</em></span></a></h3><p>比如利用<code>ehcache</code>，或者一个<code>HashMap</code>都可以。在你发现热key以后，把热key加载到系统的JVM中。<br> 针对这种热key请求，会直接从jvm中取，而不会走到redis层。<br> 假设此时有十万个针对同一个key的请求过来,如果没有本地缓存，这十万个请求就直接怼到同一台redis上了。<br> 现在假设，你的应用层有50台机器，OK，你也有jvm缓存了。这十万个请求平均分散开来，每个机器有2000个请求，会从JVM中取到value值，然后返回数据。避免了十万个请求怼到同一台redis上的情形。</p><h3 id="_3-2-备份热key" tabindex="-1"><a class="header-anchor" href="#_3-2-备份热key"><span><em>3.2 备份热key</em></span></a></h3><p>这个方案也很简单。不要让key走到同一台redis上不就行了。我们把这个key，在多个redis上都存一份不就好了。接下来，有热key请求进来的时候，我们就在有备份的redis上随机选取一台，进行访问取值，返回数据。<br> 假设redis的集群数量为N，步骤如下图所示</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131019478.png" alt="image-20221128232534600" tabindex="0" loading="lazy"><figcaption>image-20221128232534600</figcaption></figure><p>注:不一定是2N，你想取3N，4N都可以，看要求。<br> 伪代码如下</p><div class="language-haskell" data-ext="haskell" data-title="haskell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">const </span><span style="color:#D19A66;--shiki-dark:#D19A66;">M</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> = </span><span style="color:#D19A66;--shiki-dark:#D19A66;">N</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">//生成随机数</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">random = </span><span style="color:#D19A66;--shiki-dark:#D19A66;">GenRandom</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">M</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">//构造备份新key</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">bakHotKey = hotKey + “_” + random</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">data</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> = redis.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">GET</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">bakHotKey</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> data == </span><span style="color:#D19A66;--shiki-dark:#D19A66;">NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    data</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> = </span><span style="color:#D19A66;--shiki-dark:#D19A66;">GetFromDB()</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    redis.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">SET</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(bakHotKey, expireTime + </span><span style="color:#D19A66;--shiki-dark:#D19A66;">GenRandom</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="_4-业内方案" tabindex="-1"><a class="header-anchor" href="#_4-业内方案"><span>4. 业内方案</span></a></h2><p>OK，其实看完上面的内容，大家可能会有一个疑问。</p><blockquote><p><strong>有办法在项目运行过程中，自动发现热key，然后程序自动处理么？</strong></p></blockquote><p>嗯，好问题，那我们来讲讲业内怎么做的。其实只有两步<br> (1)监控热key<br> (2)通知系统做处理<br> 正巧，前几天有赞出了一篇《有赞透明多级缓存解决方案（TMC）》，里头也有提到热点key问题，我们刚好借此说明</p><h3 id="_4-1-监控热key" tabindex="-1"><a class="header-anchor" href="#_4-1-监控热key"><span>4.1 监控热key</span></a></h3><p>在监控热key方面，有赞用的是方式二：<strong>在客户端进行收集</strong>。<br> 在《有赞透明多级缓存解决方案（TMC）》中有一句话提到</p><blockquote><p><strong>TMC 对原生jedis包的JedisPool和Jedis类做了改造，在JedisPool初始化过程中集成TMC“热点发现”+“本地缓存”功能Hermes-SDK包的初始化逻辑。</strong></p></blockquote><p>也就说人家改写了jedis原生的jar包，加入了Hermes-SDK包。<br> 那Hermes-SDK包用来干嘛？<br> OK，就是做<strong>热点发现</strong>和<strong>本地缓存</strong>。<br> 从监控的角度看，该包对于Jedis-Client的每次key值访问请求，Hermes-SDK 都会通过其通信模块将key访问事件异步上报给Hermes服务端集群，以便其根据上报数据进行“热点探测”。</p><p>当然，这只是其中一种方式，有的公司在监控方面用的是方式五:<strong>自己抓包评估</strong>。<br> 具体是这么做的，先利用flink搭建一套流式计算系统。然后自己写一个抓包程序抓redis监听端口的数据，抓到数据后往kafka里丢。<br> 接下来，流式计算系统消费kafka里的数据，进行数据统计即可，也能达到监控热key的目的。</p><h3 id="_4-2-通知系统做处理" tabindex="-1"><a class="header-anchor" href="#_4-2-通知系统做处理"><span>4.2 通知系统做处理</span></a></h3><p>在这个角度，有赞用的是上面的解决方案一:利用二级缓存进行处理。<br> 有赞在监控到热key后，Hermes服务端集群会通过各种手段通知各业务系统里的Hermes-SDK，告诉他们:&quot;老弟，这个key是热key，记得做本地缓存。&quot;<br> 于是Hermes-SDK就会将该key缓存在本地，对于后面的请求。Hermes-SDK发现这个是一个热key，直接从本地中拿，而不会去访问集群。</p><p>除了这种通知方式以外。我们也可以这么做，比如你的流式计算系统监控到热key了，往zookeeper里头的某个节点里写。然后你的业务系统监听该节点，发现节点数据变化了，就代表发现热key。最后往本地缓存里写，也是可以的。</p><p>通知方式各种各样，大家可以自由发挥。本文只是提供一个思路。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.cnblogs.com/rjzheng/p/10874537.html" target="_blank" rel="noopener noreferrer">谈谈redis的热key问题如何解决</a></p>`,37)]))}const p=s(n,[["render",l],["__file","db-redis-x-hot-key.html.vue"]]),d=JSON.parse('{"path":"/posts/Redis/db-redis-x-hot-key.html","title":"Redis进阶 - Redis热key问题","lang":"zh-CN","frontmatter":{"aliases":"Redis进阶 - Redis热key问题","tags":null,"cssclass":null,"source":null,"order":311,"category":["数据库","Redis"],"created":"2024-02-22 10:49","updated":"2024-03-13 10:19","description":"Redis进阶 - Redis热key问题 0. 引言 其实热key问题说来也很简单，就是瞬间有几十万的请求去访问redis上某个固定的key，从而压垮缓存服务的情情况。 其实生活中也是有不少这样的例子。比如XX明星结婚。那么关于XX明星的Key就会瞬间增大，就会出现热数据问题。 ps:hot key和big key问题，大家一定要有所了解。 本文预计...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Redis/db-redis-x-hot-key.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis进阶 - Redis热key问题"}],["meta",{"property":"og:description","content":"Redis进阶 - Redis热key问题 0. 引言 其实热key问题说来也很简单，就是瞬间有几十万的请求去访问redis上某个固定的key，从而压垮缓存服务的情情况。 其实生活中也是有不少这样的例子。比如XX明星结婚。那么关于XX明星的Key就会瞬间增大，就会出现热数据问题。 ps:hot key和big key问题，大家一定要有所了解。 本文预计..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131019429.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis进阶 - Redis热key问题\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131019429.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131019478.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"0. 引言","slug":"_0-引言","link":"#_0-引言","children":[]},{"level":2,"title":"1. 热Key问题","slug":"_1-热key问题","link":"#_1-热key问题","children":[]},{"level":2,"title":"2. 怎么发现热key","slug":"_2-怎么发现热key","link":"#_2-怎么发现热key","children":[]},{"level":2,"title":"3. 如何解决","slug":"_3-如何解决","link":"#_3-如何解决","children":[{"level":3,"title":"3.1 利用二级缓存","slug":"_3-1-利用二级缓存","link":"#_3-1-利用二级缓存","children":[]},{"level":3,"title":"3.2 备份热key","slug":"_3-2-备份热key","link":"#_3-2-备份热key","children":[]}]},{"level":2,"title":"4. 业内方案","slug":"_4-业内方案","link":"#_4-业内方案","children":[{"level":3,"title":"4.1 监控热key","slug":"_4-1-监控热key","link":"#_4-1-监控热key","children":[]},{"level":3,"title":"4.2 通知系统做处理","slug":"_4-2-通知系统做处理","link":"#_4-2-通知系统做处理","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.19,"words":1856},"filePathRelative":"posts/Redis/db-redis-x-hot-key.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>0. 引言</h2>\\n<p>其实热key问题说来也很简单，就是瞬间有几十万的请求去访问redis上某个固定的key，从而压垮缓存服务的情情况。<br>\\n其实生活中也是有不少这样的例子。比如XX明星结婚。那么关于XX明星的Key就会瞬间增大，就会出现热数据问题。</p>\\n<blockquote>\\n<p><code>ps:</code>hot key和big key问题，大家一定要有所了解。</p>\\n</blockquote>\\n<p>本文预计分为如下几个部分</p>\\n<ul>\\n<li>热key问题</li>\\n<li>如何发现</li>\\n<li>业内方案</li>\\n</ul>\\n<h2>1. 热Key问题</h2>","autoDesc":true}');export{p as comp,d as data};
