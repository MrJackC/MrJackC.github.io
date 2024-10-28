import{_ as i,c as t,a as r,o as s}from"./app-BQBjlK2G.js";const n={};function a(o,e){return s(),t("div",null,e[0]||(e[0]=[r('<h1 id="redis面试-集群-哨兵机制" tabindex="-1"><a class="header-anchor" href="#redis面试-集群-哨兵机制"><span>Redis面试 - 集群-哨兵机制</span></a></h1><h2 id="_1-redis哨兵机制-哨兵实现了什么功能呢" tabindex="-1"><a class="header-anchor" href="#_1-redis哨兵机制-哨兵实现了什么功能呢"><span>1 Redis哨兵机制？哨兵实现了什么功能呢?</span></a></h2><p>哨兵的核心功能是主节点的自动故障转移。</p><p>下图是一个典型的哨兵集群监控的逻辑图：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131040356.png" alt="image-20220628230005184" tabindex="0" loading="lazy"><figcaption>image-20220628230005184</figcaption></figure><p>哨兵实现了什么功能呢？下面是Redis官方文档的描述：</p><ul><li><strong>监控（Monitoring）</strong>：哨兵会不断地检查主节点和从节点是否运作正常。</li><li><strong>自动故障转移（Automatic failover）</strong>：当主节点不能正常工作时，哨兵会开始自动故障转移操作，它会将失效主节点的其中一个从节点升级为新的主节点，并让其他从节点改为复制新的主节点。</li><li><strong>配置提供者（Configuration provider）</strong>：客户端在初始化时，通过连接哨兵来获得当前Redis服务的主节点地址。</li><li><strong>通知（Notification）</strong>：哨兵可以将故障转移的结果发送给客户端。</li></ul><p>其中，监控和自动故障转移功能，使得哨兵可以及时发现主节点故障并完成转移；而配置提供者和通知功能，则需要在与客户端的交互中才能体现。</p><h2 id="_2-redis-哨兵集群是通过什么方式组建的" tabindex="-1"><a class="header-anchor" href="#_2-redis-哨兵集群是通过什么方式组建的"><span>2 Redis 哨兵集群是通过什么方式组建的？</span></a></h2><p>哨兵实例之间可以相互发现，要归功于 Redis 提供的 pub/sub 机制，也就是发布 / 订阅机制。</p><p>在主从集群中，主库上有一个名为<code>__sentinel__:hello</code>的频道，不同哨兵就是通过它来相互发现，实现互相通信的。在下图中，哨兵 1 把自己的 IP（172.16.19.3）和端口（26579）发布到<code>__sentinel__:hello</code>频道上，哨兵 2 和 3 订阅了该频道。那么此时，哨兵 2 和 3 就可以从这个频道直接获取哨兵 1 的 IP 地址和端口号。然后，哨兵 2、3 可以和哨兵 1 建立网络连接。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131040391.png" alt="image-20220628230047534" tabindex="0" loading="lazy"><figcaption>image-20220628230047534</figcaption></figure><p>通过这个方式，哨兵 2 和 3 也可以建立网络连接，这样一来，哨兵集群就形成了。它们相互间可以通过网络连接进行通信，比如说对主库有没有下线这件事儿进行判断和协商。</p><h2 id="_3-redis-哨兵是如何监控redis集群的" tabindex="-1"><a class="header-anchor" href="#_3-redis-哨兵是如何监控redis集群的"><span>3 Redis 哨兵是如何监控Redis集群的？</span></a></h2><p>这是由哨兵向主库发送 INFO 命令来完成的。就像下图所示，哨兵 2 给主库发送 INFO 命令，主库接受到这个命令后，就会把从库列表返回给哨兵。接着，哨兵就可以根据从库列表中的连接信息，和每个从库建立连接，并在这个连接上持续地对从库进行监控。哨兵 1 和 3 可以通过相同的方法和从库建立连接。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131040430.png" alt="image-20220628230125379" tabindex="0" loading="lazy"><figcaption>image-20220628230125379</figcaption></figure><h2 id="_4-redis-哨兵如何判断主库已经下线了呢" tabindex="-1"><a class="header-anchor" href="#_4-redis-哨兵如何判断主库已经下线了呢"><span>4 Redis 哨兵如何判断主库已经下线了呢？</span></a></h2><p>首先要理解两个概念：<strong>主观下线</strong>和<strong>客观下线</strong></p><ul><li><strong>主观下线</strong>：任何一个哨兵都是可以监控探测，并作出Redis节点下线的判断；</li><li><strong>客观下线</strong>：有哨兵集群共同决定Redis节点是否下线；</li></ul><p>当某个哨兵（如下图中的哨兵2）判断主库“主观下线”后，就会给其他哨兵发送 <code>is-master-down-by-addr</code> 命令。接着，其他哨兵会根据自己和主库的连接情况，做出 Y 或 N 的响应，Y 相当于赞成票，N 相当于反对票。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131040461.png" alt="image-20220628230146608" tabindex="0" loading="lazy"><figcaption>image-20220628230146608</figcaption></figure><p>如果赞成票数（这里是2）是大于等于哨兵配置文件中的 <code>quorum</code> 配置项（比如这里如果是quorum=2）, 则可以判定<strong>主库客观下线</strong>了。</p><h2 id="_4-redis-哨兵的选举机制是什么样的" tabindex="-1"><a class="header-anchor" href="#_4-redis-哨兵的选举机制是什么样的"><span>4 Redis 哨兵的选举机制是什么样的？</span></a></h2><ul><li><strong>为什么必然会出现选举/共识机制</strong>？</li></ul><p>为了避免哨兵的单点情况发生，所以需要一个哨兵的分布式集群。作为分布式集群，必然涉及共识问题（即选举问题）；同时故障的转移和通知都只需要一个主的哨兵节点就可以了。</p><ul><li><strong>哨兵的选举机制是什么样的</strong>？</li></ul><p>哨兵的选举机制其实很简单，就是一个Raft选举算法： <strong>选举的票数大于等于num(sentinels)/2+1时，将成为领导者，如果没有超过，继续选举</strong></p><p>Raft算法你可以参看这篇文章<a href="">分布式算法 - Raft算法</a></p><ul><li>任何一个想成为 Leader 的哨兵，要满足两个条件： <ul><li>第一，拿到半数以上的赞成票；</li><li>第二，拿到的票数同时还需要大于等于哨兵配置文件中的 quorum 值。</li></ul></li></ul><p>以 3 个哨兵为例，假设此时的 quorum 设置为 2，那么，任何一个想成为 Leader 的哨兵只要拿到 2 张赞成票，就可以了。</p><h2 id="_5-redis-1主4从-5个哨兵-哨兵配置quorum为2-如果3个哨兵故障-当主库宕机时-哨兵能否判断主库-客观下线-能否自动切换" tabindex="-1"><a class="header-anchor" href="#_5-redis-1主4从-5个哨兵-哨兵配置quorum为2-如果3个哨兵故障-当主库宕机时-哨兵能否判断主库-客观下线-能否自动切换"><span>5 Redis 1主4从，5个哨兵，哨兵配置quorum为2，如果3个哨兵故障，当主库宕机时，哨兵能否判断主库“客观下线”？能否自动切换？</span></a></h2><p>经过实际测试：</p><p>1、哨兵集群可以判定主库“主观下线”。由于quorum=2，所以当一个哨兵判断主库“主观下线”后，询问另外一个哨兵后也会得到同样的结果，2个哨兵都判定“主观下线”，达到了quorum的值，因此，<strong>哨兵集群可以判定主库为“客观下线”</strong>。</p><p>2、<strong>但哨兵不能完成主从切换</strong>。哨兵标记主库“客观下线后”，在选举“哨兵领导者”时，一个哨兵必须拿到超过多数的选票(5/2+1=3票)。但目前只有2个哨兵活着，无论怎么投票，一个哨兵最多只能拿到2票，永远无法达到<code>N/2+1</code>选票的结果。</p><h2 id="_6-主库判定客观下线了-那么如何从剩余的从库中选择一个新的主库呢" tabindex="-1"><a class="header-anchor" href="#_6-主库判定客观下线了-那么如何从剩余的从库中选择一个新的主库呢"><span>6 主库判定客观下线了，那么如何从剩余的从库中选择一个新的主库呢？</span></a></h2><ul><li>过滤掉不健康的（下线或断线），没有回复过哨兵ping响应的从节点</li><li>选择<code>salve-priority</code>从节点优先级最高（redis.conf）的</li><li>选择复制偏移量最大，只复制最完整的从节点</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131040486.png" alt="image-20220628230308886" tabindex="0" loading="lazy"><figcaption>image-20220628230308886</figcaption></figure><h2 id="_7-新的主库选择出来后-如何进行故障的转移" tabindex="-1"><a class="header-anchor" href="#_7-新的主库选择出来后-如何进行故障的转移"><span>7 新的主库选择出来后，如何进行故障的转移？</span></a></h2><p>假设根据我们一开始的图：（我们假设：判断主库客观下线了，同时选出<code>sentinel 3</code>是哨兵leader）</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131040521.png" alt="image-20220628230332745" tabindex="0" loading="lazy"><figcaption>image-20220628230332745</figcaption></figure><p><strong>故障转移流程如下</strong>：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131040562.png" alt="image-20220628230347436" tabindex="0" loading="lazy"><figcaption>image-20220628230347436</figcaption></figure><ul><li>将slave-1脱离原从节点（PS: 5.0 中应该是<code>replicaof no one</code>)，升级主节点，</li><li>将从节点slave-2指向新的主节点</li><li>通知客户端主节点已更换</li><li>将原主节点（oldMaster）变成从节点，指向新的主节点</li></ul><p><strong>转移之后</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131040600.png" alt="image-20220628230408904" tabindex="0" loading="lazy"><figcaption>image-20220628230408904</figcaption></figure>',45)]))}const l=i(n,[["render",a],["__file","redis-z-interview-sentinel.html.vue"]]),g=JSON.parse('{"path":"/posts/Redis/redis-z-interview-sentinel.html","title":"Redis面试 - 集群-哨兵机制","lang":"zh-CN","frontmatter":{"aliases":"Redis面试 - 集群-哨兵机制","tags":null,"cssclass":null,"source":null,"order":1090,"category":["数据库","Redis"],"created":"2024-02-22 10:49","updated":"2024-03-13 10:44","description":"Redis面试 - 集群-哨兵机制 1 Redis哨兵机制？哨兵实现了什么功能呢? 哨兵的核心功能是主节点的自动故障转移。 下图是一个典型的哨兵集群监控的逻辑图： image-20220628230005184image-20220628230005184 哨兵实现了什么功能呢？下面是Redis官方文档的描述： 监控（Monitoring）：哨兵会不断...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Redis/redis-z-interview-sentinel.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis面试 - 集群-哨兵机制"}],["meta",{"property":"og:description","content":"Redis面试 - 集群-哨兵机制 1 Redis哨兵机制？哨兵实现了什么功能呢? 哨兵的核心功能是主节点的自动故障转移。 下图是一个典型的哨兵集群监控的逻辑图： image-20220628230005184image-20220628230005184 哨兵实现了什么功能呢？下面是Redis官方文档的描述： 监控（Monitoring）：哨兵会不断..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131040356.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis面试 - 集群-哨兵机制\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131040356.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131040391.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131040430.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131040461.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131040486.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131040521.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131040562.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131040600.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1 Redis哨兵机制？哨兵实现了什么功能呢?","slug":"_1-redis哨兵机制-哨兵实现了什么功能呢","link":"#_1-redis哨兵机制-哨兵实现了什么功能呢","children":[]},{"level":2,"title":"2 Redis 哨兵集群是通过什么方式组建的？","slug":"_2-redis-哨兵集群是通过什么方式组建的","link":"#_2-redis-哨兵集群是通过什么方式组建的","children":[]},{"level":2,"title":"3 Redis 哨兵是如何监控Redis集群的？","slug":"_3-redis-哨兵是如何监控redis集群的","link":"#_3-redis-哨兵是如何监控redis集群的","children":[]},{"level":2,"title":"4 Redis 哨兵如何判断主库已经下线了呢？","slug":"_4-redis-哨兵如何判断主库已经下线了呢","link":"#_4-redis-哨兵如何判断主库已经下线了呢","children":[]},{"level":2,"title":"4 Redis 哨兵的选举机制是什么样的？","slug":"_4-redis-哨兵的选举机制是什么样的","link":"#_4-redis-哨兵的选举机制是什么样的","children":[]},{"level":2,"title":"5 Redis 1主4从，5个哨兵，哨兵配置quorum为2，如果3个哨兵故障，当主库宕机时，哨兵能否判断主库“客观下线”？能否自动切换？","slug":"_5-redis-1主4从-5个哨兵-哨兵配置quorum为2-如果3个哨兵故障-当主库宕机时-哨兵能否判断主库-客观下线-能否自动切换","link":"#_5-redis-1主4从-5个哨兵-哨兵配置quorum为2-如果3个哨兵故障-当主库宕机时-哨兵能否判断主库-客观下线-能否自动切换","children":[]},{"level":2,"title":"6 主库判定客观下线了，那么如何从剩余的从库中选择一个新的主库呢？","slug":"_6-主库判定客观下线了-那么如何从剩余的从库中选择一个新的主库呢","link":"#_6-主库判定客观下线了-那么如何从剩余的从库中选择一个新的主库呢","children":[]},{"level":2,"title":"7 新的主库选择出来后，如何进行故障的转移？","slug":"_7-新的主库选择出来后-如何进行故障的转移","link":"#_7-新的主库选择出来后-如何进行故障的转移","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.62,"words":1687},"filePathRelative":"posts/Redis/redis-z-interview-sentinel.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1 Redis哨兵机制？哨兵实现了什么功能呢?</h2>\\n<p>哨兵的核心功能是主节点的自动故障转移。</p>\\n<p>下图是一个典型的哨兵集群监控的逻辑图：</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131040356.png\\" alt=\\"image-20220628230005184\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220628230005184</figcaption></figure>\\n<p>哨兵实现了什么功能呢？下面是Redis官方文档的描述：</p>","autoDesc":true}');export{l as comp,g as data};
