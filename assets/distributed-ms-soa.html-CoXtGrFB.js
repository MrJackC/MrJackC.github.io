import{_ as t,c as n,a as r,o as i}from"./app-CpAF2rca.js";const a={};function l(s,e){return i(),n("div",null,e[0]||(e[0]=[r('<h1 id="分布式、集群、微服务、soa相关概念" tabindex="-1"><a class="header-anchor" href="#分布式、集群、微服务、soa相关概念"><span>分布式、集群、微服务、SOA相关概念</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><blockquote><ul><li><p><strong>分布式</strong>：一个业务分拆多个子业务，部署在不同的服务器上，<strong>解决高并发的问题</strong></p></li><li><p><strong>集群</strong>：同一个业务，部署在多个服务器上，<strong>提高系统可用性</strong></p></li><li><p><strong>分布式中的每一个节点，都可以做集群。而集群并不一定就是分布式的。</strong></p></li></ul></blockquote><ul><li><p><strong>分布式</strong>：不同模块部署在不同服务器上</p><p>作用：分布式解决网站高并发带来问题</p></li><li><p><strong>集群</strong>：多台服务器部署相同应用构成一个集群</p><p>作用：通过负载均衡设备共同对外提供服务</p></li><li><p><strong>SOA</strong>：业务系统分解为多个组件，让每个组件都独立提供离散，自治，可复用的服务能力，通过服务的组合和编排来实现上层的业务流程</p><p>作用：简化维护,降低整体风险,伸缩灵活</p></li><li><p><strong>微服务</strong>：架构设计概念,各服务间隔离（分布式也是隔离）,自治（分布式依赖整体组合）其它特性(单一职责,边界,异步通信,独立部署)是分布式概念的更严格执行SOA到微服务架构的演进过程</p><p>作用：各服务可独立应用，组合服务也可系统应用</p></li></ul><h3 id="_1-1-大白话讲分布式-集群" tabindex="-1"><a class="header-anchor" href="#_1-1-大白话讲分布式-集群"><span>1.1 大白话讲分布式/集群</span></a></h3><p>小饭店原来只有一个厨师，切菜洗菜备料炒菜全干。后来客人多了，厨房一个厨师忙不过来，又请了个厨师，两个厨师都能炒一样的菜，这<strong>两个厨师的关系是集群</strong>。</p><p>为了让厨师专心炒菜，把菜做到极致，又请了个配菜师负责切菜，备菜，备料，<strong>厨师和配菜师的关系是分布式</strong>，一个配菜师也忙不过来了，又请了个配菜师，两个配菜师关系是集群。</p><h2 id="_2-分布式架构" tabindex="-1"><a class="header-anchor" href="#_2-分布式架构"><span>2. 分布式架构</span></a></h2><h3 id="_2-1-只有web-server-是分布式-集群" tabindex="-1"><a class="header-anchor" href="#_2-1-只有web-server-是分布式-集群"><span>2.1 只有web server 是分布式（集群）</span></a></h3><blockquote><p>对于一般小型的网站其实足够用了，web server 集群，数据库db 主从读写分离</p></blockquote><p>分布式可繁可简，最简单的分布式就是大家最常用的，在负载均衡服务器后加一堆web服务器，然后在上面搞一个缓存服务器来保存临时状态，后面共享一个数据库，其实很多号称分布式专家的人也就停留于此，大致结构如下图所示：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220616200046673.png" alt="image-20220616200046673" tabindex="0" loading="lazy"><figcaption>image-20220616200046673</figcaption></figure><p>这种环境下真正进行分布式的只是web server而已，并且web server之间没有任何联系，所以结构和实现都非常简单。</p><h3 id="_2-2-复杂分布式服务" tabindex="-1"><a class="header-anchor" href="#_2-2-复杂分布式服务"><span>2.2 复杂分布式服务</span></a></h3><p>有些情况下，对分布式的需求就没这么简单，<strong>在每个环节上都有分布式的需求</strong>，比如Load Balance、DB、Cache和文件等等，并且当分布式节点之间有关联时，还得考虑之间的通讯，另外，节点非常多的时候，得有监控和管理来支撑。</p><p>这样看起来，分布式是一个非常庞大的体系，只不过你可以根据具体需求进行适当地裁剪。按照最完备的分布式体系来看，可以由以下模块组成：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220616200940794.png" alt="image-20220616200940794" tabindex="0" loading="lazy"><figcaption>image-20220616200940794</figcaption></figure><ul><li>**分布式任务处理服务：**负责具体的业务逻辑处理</li><li>**分布式节点注册和查询：**负责管理所有分布式节点的命名和物理信息的注册与查询，是节点之间联系的桥梁</li><li>**分布式DB：**分布式结构化数据存取</li><li>**分布式Cache：**分布式缓存数据（非持久化）存取</li><li>**分布式文件：**分布式文件存取</li><li>**网络通信：**节点之间的网络数据通信</li><li>**监控管理：**搜集、监控和诊断所有节点运行状态</li><li>**分布式编程语言：**用于分布式环境下的专有编程语言，比如Elang、Scala</li><li>**分布式算法：**为解决分布式环境下一些特有问题的算法，比如解决一致性问题的Paxos算法</li></ul><p>因此，若要深入研究云计算和分布式，就得深入研究以上领域，而这些领域每一块的水都很深，都需要很底层的知识和技术来支撑，所以说，对于想提升技术的开发者来说，以分布式来作为切入点是非常好的，可以以此为线索，探索计算机世界的各个角落。</p><h2 id="_3-自己对分布式的理解" tabindex="-1"><a class="header-anchor" href="#_3-自己对分布式的理解"><span>3. 自己对分布式的理解</span></a></h2><p>分布式可以有两种表现形式，</p><ul><li><p>一种是拆分业务的分布式SOA , 以微服务为代表</p><p>但不限于微服务。只要拆分了子系统就算</p></li><li><p>一种是不拆分业务的分布式集群，只是将服务部署在多个节点</p></li></ul><p>这两种都属于分布式，只是划分得不一样。</p><h3 id="_3-1-若依前后端分离算分布式吗" tabindex="-1"><a class="header-anchor" href="#_3-1-若依前后端分离算分布式吗"><span>3.1 若依前后端分离算分布式吗？</span></a></h3><p>这跟前后端分离没有直接关系，就看部署的形式</p><ul><li>单体：一个业务服务+一个db+一个redis</li><li>集群：多个业务服务+db主从分离+主从分离redis</li><li>分布式：多个业务服务+多个任务调度服务+监控服务+缓存服务+多个文件服务+多个数据库服务</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/133508606" target="_blank" rel="noopener noreferrer">分布式、集群、微服务、SOA 之间的区别？（详解）</a></p>',28)]))}const p=t(a,[["render",l],["__file","distributed-ms-soa.html.vue"]]),g=JSON.parse('{"path":"/posts/Architect/distributed/theory/distributed-ms-soa.html","title":"分布式、集群、微服务、SOA相关概念","lang":"zh-CN","frontmatter":{"order":50,"category":["架构"],"description":"分布式、集群、微服务、SOA相关概念 1. 简介 分布式：一个业务分拆多个子业务，部署在不同的服务器上，解决高并发的问题 集群：同一个业务，部署在多个服务器上，提高系统可用性 分布式中的每一个节点，都可以做集群。而集群并不一定就是分布式的。 分布式：不同模块部署在不同服务器上 作用：分布式解决网站高并发带来问题 集群：多台服务器部署相同应用构成一个集群...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/distributed/theory/distributed-ms-soa.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"分布式、集群、微服务、SOA相关概念"}],["meta",{"property":"og:description","content":"分布式、集群、微服务、SOA相关概念 1. 简介 分布式：一个业务分拆多个子业务，部署在不同的服务器上，解决高并发的问题 集群：同一个业务，部署在多个服务器上，提高系统可用性 分布式中的每一个节点，都可以做集群。而集群并不一定就是分布式的。 分布式：不同模块部署在不同服务器上 作用：分布式解决网站高并发带来问题 集群：多台服务器部署相同应用构成一个集群..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220616200046673.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式、集群、微服务、SOA相关概念\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220616200046673.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220616200940794.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 大白话讲分布式/集群","slug":"_1-1-大白话讲分布式-集群","link":"#_1-1-大白话讲分布式-集群","children":[]}]},{"level":2,"title":"2. 分布式架构","slug":"_2-分布式架构","link":"#_2-分布式架构","children":[{"level":3,"title":"2.1 只有web server 是分布式（集群）","slug":"_2-1-只有web-server-是分布式-集群","link":"#_2-1-只有web-server-是分布式-集群","children":[]},{"level":3,"title":"2.2 复杂分布式服务","slug":"_2-2-复杂分布式服务","link":"#_2-2-复杂分布式服务","children":[]}]},{"level":2,"title":"3. 自己对分布式的理解","slug":"_3-自己对分布式的理解","link":"#_3-自己对分布式的理解","children":[{"level":3,"title":"3.1 若依前后端分离算分布式吗？","slug":"_3-1-若依前后端分离算分布式吗","link":"#_3-1-若依前后端分离算分布式吗","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.55,"words":1366},"filePathRelative":"posts/Architect/distributed/theory/distributed-ms-soa.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<blockquote>\\n<ul>\\n<li>\\n<p><strong>分布式</strong>：一个业务分拆多个子业务，部署在不同的服务器上，<strong>解决高并发的问题</strong></p>\\n</li>\\n<li>\\n<p><strong>集群</strong>：同一个业务，部署在多个服务器上，<strong>提高系统可用性</strong></p>\\n</li>\\n<li>\\n<p><strong>分布式中的每一个节点，都可以做集群。而集群并不一定就是分布式的。</strong></p>\\n</li>\\n</ul>\\n</blockquote>\\n<ul>\\n<li>\\n<p><strong>分布式</strong>：不同模块部署在不同服务器上</p>\\n<p>作用：分布式解决网站高并发带来问题</p>\\n</li>\\n<li>\\n<p><strong>集群</strong>：多台服务器部署相同应用构成一个集群</p>\\n<p>作用：通过负载均衡设备共同对外提供服务</p>\\n</li>\\n<li>\\n<p><strong>SOA</strong>：业务系统分解为多个组件，让每个组件都独立提供离散，自治，可复用的服务能力，通过服务的组合和编排来实现上层的业务流程</p>\\n<p>作用：简化维护,降低整体风险,伸缩灵活</p>\\n</li>\\n<li>\\n<p><strong>微服务</strong>：架构设计概念,各服务间隔离（分布式也是隔离）,自治（分布式依赖整体组合）其它特性(单一职责,边界,异步通信,独立部署)是分布式概念的更严格执行SOA到微服务架构的演进过程</p>\\n<p>作用：各服务可独立应用，组合服务也可系统应用</p>\\n</li>\\n</ul>","autoDesc":true}');export{p as comp,g as data};
