import{_ as a,c as s,a as i,o as t}from"./app-JRvFIbSa.js";const h={};function r(n,e){return t(),s("div",null,e[0]||(e[0]=[i('<h1 id="redis集群-hash寻址算法" tabindex="-1"><a class="header-anchor" href="#redis集群-hash寻址算法"><span>Redis集群：hash寻址算法</span></a></h1><h2 id="_1-普通hash" tabindex="-1"><a class="header-anchor" href="#_1-普通hash"><span>1. 普通hash</span></a></h2><p>普通hash也就是最简单的hash算法，即</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>index = hash(key) % N</span></span></code></pre></div><p>index表示机器的索引，N表示机器的数量，假设有三台机器，即N=3，那么普通hash结果如下图，很简单是吧</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181100114.png" alt="image-20220701202555551.png" tabindex="0" loading="lazy"><figcaption>image-20220701202555551.png</figcaption></figure><p>那如果现在增加了一台机器呢？</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131013529.png" alt="image-20220701202611289" tabindex="0" loading="lazy"><figcaption>image-20220701202611289</figcaption></figure><p>情况似乎变得复杂起来，因为新增加了一个节点4，即N=4，那么所有key取模的结果都变了，导致所有的数据都要重新迁移一遍，如果节点4下线了呢？那么毫无疑问所有数据都要还原回去，就redis而言，这就叫大量缓存的重建，那么有没有新增/删除节点影响不那么大的hash算法呢？答案肯定是有，下面轮到一致性hash出场。</p><h2 id="_2-一致性hash" tabindex="-1"><a class="header-anchor" href="#_2-一致性hash"><span>2. 一致性hash</span></a></h2><blockquote><p>一致哈希由MIT的Karger及其合作者提出，现在这一思想已经扩展到其它领域。在这篇1997年发表的学术论文中介绍了“一致哈希”如何应用于用户易变的分布式Web服务中。哈希表中的每一个代表分布式系统中一个节点，在系统添加或删除节点只需要移动K/n （方法K是总key的个数，n是节点个数）</p></blockquote><p>一致性hash的特性</p><ul><li><strong>平衡性</strong>：尽可能让数据尽可能分散到所有节点上，避免造成极其不均匀</li><li><strong>单调性</strong>：要求在新增或者减少节点的时候，原有的结果绝大部分不受影响，而新增的数据尽可能分配到新加的节点</li><li><strong>分散性</strong>：好的算法在不同终端，针对相同的数据的计算，得到的结果应该是一样的，一致性要很强</li><li><strong>负载</strong>：针对相同的节点，避免被不同终端映射不同的内容</li><li><strong>平滑性</strong>：对于增加节点或者减少节点，应该能够平滑过渡</li></ul><h3 id="_2-1-hash环" tabindex="-1"><a class="header-anchor" href="#_2-1-hash环"><span>2.1 hash环</span></a></h3><p>普通hash算法导致大量数据迁移的根本原因是N的不确定性，有没有在N变化的时候影响范围更小的算法呢？有人提出了<strong>环</strong>的概念</p><blockquote><p>一致性哈希算法在1997年由麻省理工学院的Karger等人在解决分布式Cache中提出的，设计目标是为了解决因特网中的热点(Hot spot)问题，初衷和CARP十分类似。一致性哈希修正了CARP使用的简单哈希算法带来的问题，使得DHT可以在P2P环境中真正得到应用</p></blockquote><p>hash环通过构建环状的hash空间代替线性hash空间的方法解决了上面的问题，假设将0~2^32-1的hash空间分布到一个环上</p><ul><li>节点加入环：将节点通过hash(节点的信息如ip端口等) % 2^32-1取节点在环上位置</li><li>数据读写：读写数据时同样取key的hash，即hash(key) % 2^32-1落到环上的某一位置，再<strong>顺时针</strong>找到离环最近的那个节点进行读写</li></ul><p>整个过程如下图</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181059472.png" alt="image-20220701202831442" tabindex="0" loading="lazy"><figcaption>image-20220701202831442</figcaption></figure><p>假设现在新增一个节点4，只会影响到节点2到节点4之间的数据，其他的数据不会被影响到，这也是<strong>一致性</strong>的体现</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181059523.png" alt="image-20220701202903831" tabindex="0" loading="lazy"><figcaption>image-20220701202903831</figcaption></figure><p>删除一个节点也是同样的道理，假设删除节点4，也只是会影响到节点2到原节点4之间的数据，总之不管新增还是删除线路都只会影响到变动节点到变动节点逆时针找到的最近一个节点的数据。</p><p>当然hash环也不是没有问题的，假设节点分布不均匀（hash算法并不能保证绝对的平衡性），那么大部分数据都会落在一个节点上，导致请求和数据倾斜，这样就不能很好的保证负载均衡。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181059563.png" alt="image-20220701202933471" tabindex="0" loading="lazy"><figcaption>image-20220701202933471</figcaption></figure><p>那么解决办法就是增加虚拟节点（注意，此时环上<strong>全部都是虚拟节点</strong>），对每一个节点计算多个hash，尽量保证环上的节点是均匀的，如下图</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181059609.png" alt="image-20220701203001093" tabindex="0" loading="lazy"><figcaption>image-20220701203001093</figcaption></figure><h2 id="_3-hash槽" tabindex="-1"><a class="header-anchor" href="#_3-hash槽"><span>3. hash槽</span></a></h2><p>redis默认分配16384个hash槽位，然后将槽位均匀分配到不同的redis实例中去，找数据的时候通过CRC16算法计算后再取模找到对应的槽位（CRC16我们应该不陌生，这个winrar里面使用的CRC32是一样的，只是校验长度不一样而已），算法如下</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>CRC16(key) % 16384</span></span></code></pre></div><p>再看槽位在哪台实例上，最后去实例上取数据，如下图所示</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131013574.png" alt="image-20220701203055236" tabindex="0" loading="lazy"><figcaption>image-20220701203055236</figcaption></figure><p>如果该槽位不在请求的实例上呢？此时该实例会返回重定向指令：MOVED 槽位 目标实例，能这么做的基础是每一台redis实例上都有全量的hash槽的映射表，如下图所示为重定向的例子</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131013616.png" alt="image-20220701203120231" tabindex="0" loading="lazy"><figcaption>image-20220701203120231</figcaption></figure><p>使用槽位将具体的数据与redis实例解耦，当新增或者减少redis实例的时候用redis cluster总线通过Ping/Pong报文进行广播，告知整个redis集群新节点上线/下线，并迁移槽位和更新集群中的槽位映射表，整个过程尽量保证hash槽的平均分布</p><h3 id="_3-1-那么是基于什么样的考虑-redis的作者没有用hash环呢" tabindex="-1"><a class="header-anchor" href="#_3-1-那么是基于什么样的考虑-redis的作者没有用hash环呢"><span>3.1 那么是基于什么样的考虑，redis的作者没有用hash环呢？</span></a></h3><ul><li>redis的作者认为他的CRC16(key) mod 16384的效果已经不错了，虽然没有一致性hash灵活，但实现很简单，节点增删时处理起来也很方便</li><li>当然还有个原因是hash槽的分布更加均匀，如果有N个节点，那么每个节点都负载1/N，</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.modb.pro/db/64646" target="_blank" rel="noopener noreferrer">Redis Cluster集群原理+实战</a></p>',39)]))}const d=a(h,[["render",r],["__file","db-redis-hash.html.vue"]]),p=JSON.parse('{"path":"/posts/Redis/db-redis-hash.html","title":"Redis集群：hash寻址算法","lang":"zh-CN","frontmatter":{"aliases":"Redis集群：hash寻址算法","tags":null,"cssclass":null,"source":null,"category":["数据库","Redis"],"created":"2024-02-22 10:49","updated":"2024-10-18 10:57","description":"Redis集群：hash寻址算法 1. 普通hash 普通hash也就是最简单的hash算法，即 index表示机器的索引，N表示机器的数量，假设有三台机器，即N=3，那么普通hash结果如下图，很简单是吧 image-20220701202555551.pngimage-20220701202555551.png 那如果现在增加了一台机器呢？ ima...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Redis/db-redis-hash.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis集群：hash寻址算法"}],["meta",{"property":"og:description","content":"Redis集群：hash寻址算法 1. 普通hash 普通hash也就是最简单的hash算法，即 index表示机器的索引，N表示机器的数量，假设有三台机器，即N=3，那么普通hash结果如下图，很简单是吧 image-20220701202555551.pngimage-20220701202555551.png 那如果现在增加了一台机器呢？ ima..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181100114.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis集群：hash寻址算法\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181100114.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131013529.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181059472.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181059523.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181059563.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181059609.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131013574.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131013616.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 普通hash","slug":"_1-普通hash","link":"#_1-普通hash","children":[]},{"level":2,"title":"2. 一致性hash","slug":"_2-一致性hash","link":"#_2-一致性hash","children":[{"level":3,"title":"2.1 hash环","slug":"_2-1-hash环","link":"#_2-1-hash环","children":[]}]},{"level":2,"title":"3. hash槽","slug":"_3-hash槽","link":"#_3-hash槽","children":[{"level":3,"title":"3.1 那么是基于什么样的考虑，redis的作者没有用hash环呢？","slug":"_3-1-那么是基于什么样的考虑-redis的作者没有用hash环呢","link":"#_3-1-那么是基于什么样的考虑-redis的作者没有用hash环呢","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.05,"words":1516},"filePathRelative":"posts/Redis/db-redis-hash.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 普通hash</h2>\\n<p>普通hash也就是最简单的hash算法，即</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>index = hash(key) % N</span></span></code></pre>\\n</div>","autoDesc":true}');export{d as comp,p as data};
