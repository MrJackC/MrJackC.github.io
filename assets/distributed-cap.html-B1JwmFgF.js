import{_ as t,c as a,a as i,o as r}from"./app-DEK5G3U7.js";const n={};function c(o,e){return r(),a("div",null,e[0]||(e[0]=[i('<h1 id="分布式理论-cap" tabindex="-1"><a class="header-anchor" href="#分布式理论-cap"><span>分布式理论-CAP</span></a></h1><h2 id="_1-cap-理论简介" tabindex="-1"><a class="header-anchor" href="#_1-cap-理论简介"><span>1. CAP 理论简介</span></a></h2><p>CAP理论是分布式系统、特别是分布式存储领域中被讨论的最多的理论。其中C代表一致性 (Consistency)，A代表可用性 (Availability)，P代表分区容错性 (Partition tolerance)。CAP理论告诉我们C、A、P三者不能同时满足，最多只能满足其中两个。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220617212438370.png" alt="image-20220617212438370" tabindex="0" loading="lazy"><figcaption>image-20220617212438370</figcaption></figure><h3 id="_1-1-cap-三选二" tabindex="-1"><a class="header-anchor" href="#_1-1-cap-三选二"><span>1.1 CAP 三选二</span></a></h3><ul><li><code>一致性 (Consistency)</code>: 一个写操作返回成功，那么之后的读请求都必须读到这个新数据；如果返回失败，那么所有读操作都不能读到这个数据。所有节点访问同一份最新的数据。</li><li><code>可用性 (Availability)</code>: 对数据更新具备高可用性，请求能够及时处理，不会一直等待，即使出现节点失效。</li><li><code>分区容错性 (Partition tolerance)</code>: 能容忍网络分区，在网络断开的情况下，被分隔的节点仍能正常对外提供服务。</li></ul><h2 id="_2-对cap理论的理解" tabindex="-1"><a class="header-anchor" href="#_2-对cap理论的理解"><span>2. 对CAP理论的理解</span></a></h2><p>理解CAP理论最简单的方式是想象两个副本处于分区两侧，即<strong>两个副本之间的网络断开，不能通信</strong>。</p><ul><li>如果允许其中一个副本更新，则会导致数据不一致，即丧失了C性质。</li><li>如果为了保证一致性，将分区某一侧的副本设置为不可用，那么又丧失了A性质。</li><li>除非两个副本可以互相通信，才能既保证C又保证A，这又会导致丧失P性质。</li></ul><p>一般来说使用网络通信的分布式系统，无法舍弃P性质，那么就只能在一致性和可用性上做一个艰难的选择。</p><blockquote><p>CAP理论的表述很好地服务了它的目的，开阔了分布式系统设计者的思路，在多样化的取舍方案下设计出多样化的系统。在过去的十几年里确实涌现了不计其数的新系统，也随之在一致性和可用性的相对关系上产生了相当多的争论。</p></blockquote><h2 id="_3-cap理论深入理解" tabindex="-1"><a class="header-anchor" href="#_3-cap理论深入理解"><span>3. CAP理论深入理解</span></a></h2><p>在CAP理论提出十二年之后，其作者又出来辟谣。“三选二”的公式一直存在着误导性，它会过分简单化各性质之间的相互关系:</p><ul><li>首先，由于分区很少发生，那么在系统不存在分区的情况下没什么理由牺牲C或A。</li><li>其次，C与A之间的取舍可以在同一系统内以非常细小的粒度反复发生，而每一次的决策可能因为具体的操作，乃至因为牵涉到特定的数据或用户而有所不同。</li><li>最后，这三种性质都可以在程度上衡量，并不是非黑即白的有或无。可用性显然是在0%到100%之间连续变化的，一致性分很多级别，连分区也可以细分为不同含义，如系统内的不同部分对于是否存在分区可以有不一样的认知。</li></ul><p>所以一致性和可用性并不是水火不容，非此即彼的。Paxos、Raft等分布式一致性算法就是在一致性和可用性之间做到了很好的平衡的见证。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/dev-spec/spec/dev-th-cap.html" target="_blank" rel="noopener noreferrer"><strong>分布式理论 - CAP</strong></a></p>',17)]))}const p=t(n,[["render",c],["__file","distributed-cap.html.vue"]]),s=JSON.parse('{"path":"/posts/Architect/distributed/theory/distributed-cap.html","title":"分布式理论-CAP","lang":"zh-CN","frontmatter":{"order":20,"category":["架构"],"description":"分布式理论-CAP 1. CAP 理论简介 CAP理论是分布式系统、特别是分布式存储领域中被讨论的最多的理论。其中C代表一致性 (Consistency)，A代表可用性 (Availability)，P代表分区容错性 (Partition tolerance)。CAP理论告诉我们C、A、P三者不能同时满足，最多只能满足其中两个。 image-20220...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Architect/distributed/theory/distributed-cap.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"分布式理论-CAP"}],["meta",{"property":"og:description","content":"分布式理论-CAP 1. CAP 理论简介 CAP理论是分布式系统、特别是分布式存储领域中被讨论的最多的理论。其中C代表一致性 (Consistency)，A代表可用性 (Availability)，P代表分区容错性 (Partition tolerance)。CAP理论告诉我们C、A、P三者不能同时满足，最多只能满足其中两个。 image-20220..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220617212438370.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式理论-CAP\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220617212438370.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. CAP 理论简介","slug":"_1-cap-理论简介","link":"#_1-cap-理论简介","children":[{"level":3,"title":"1.1 CAP 三选二","slug":"_1-1-cap-三选二","link":"#_1-1-cap-三选二","children":[]}]},{"level":2,"title":"2. 对CAP理论的理解","slug":"_2-对cap理论的理解","link":"#_2-对cap理论的理解","children":[]},{"level":2,"title":"3. CAP理论深入理解","slug":"_3-cap理论深入理解","link":"#_3-cap理论深入理解","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.85,"words":854},"filePathRelative":"posts/Architect/distributed/theory/distributed-cap.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. CAP 理论简介</h2>\\n<p>CAP理论是分布式系统、特别是分布式存储领域中被讨论的最多的理论。其中C代表一致性 (Consistency)，A代表可用性 (Availability)，P代表分区容错性 (Partition tolerance)。CAP理论告诉我们C、A、P三者不能同时满足，最多只能满足其中两个。</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220617212438370.png\\" alt=\\"image-20220617212438370\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220617212438370</figcaption></figure>","autoDesc":true}');export{p as comp,s as data};
