import{_ as t,c as a,a as i,o as r}from"./app-CpAF2rca.js";const l={};function n(s,e){return r(),a("div",null,e[0]||(e[0]=[i('<h1 id="架构-架构基础" tabindex="-1"><a class="header-anchor" href="#架构-架构基础"><span>架构-架构基础</span></a></h1><h2 id="_1-软件架构简介" tabindex="-1"><a class="header-anchor" href="#_1-软件架构简介"><span>1. 软件架构简介</span></a></h2><p>所谓架构，见仁见智，很难有一个明确或标准的定义；但架构并非镜花水月或阳春白雪，有系统的地方就需要架构，大到航空飞机，小到一个电商系统里面的一个功能组件，都需要设计和架构。<strong>抽象而言，架构就是对系统中的实体以及实体之间的关系所进行的抽象描述，是对物/信息的功能与形式元素之间的对应情况所做的分配，是对元素之间的关系以及元素同周边环境之间的关系所做的定义</strong>。架构能将目标系统按某个原则进行切分，切分的原则，是要便于不同的角色进行并行工作，结构良好的创造活动要优于毫无结构的创造活动。</p><p>软件架构的核心价值，即是控制系统的复杂性，将核心业务逻辑和技术细节的分离与解耦。软件架构是系统的草图，它描述的对象是直接构成系统的抽象组件；各个组件之间的连接则明确和相对细致地描述组件之间的通信。在实现阶段，这些抽象组件被细化为实际的组件，比如具体某个类或者对象。在面向对象领域中，组件之间的连接通常用接口来实现。架构师的职责是努力训练自己的思维，用它去理解复杂的系统，通过合理的分解和抽象，理解并解析需求，创建有用的模型，确认、细化并扩展模型，管理架构；能够进行系统分解形成整体架构，能够正确的技术选型，能够制定技术规格说明并有效推动实施落地。</p><h2 id="_2-系统复杂性的来源与应对" tabindex="-1"><a class="header-anchor" href="#_2-系统复杂性的来源与应对"><span>2. 系统复杂性的来源与应对</span></a></h2><p>在软件开发中，程序员往往能够脱离现实规律的束缚，创造出天马行空的世界，其也是最具有创造力的活动之一。编程唯一需要的是创造力思维和思维组织能力，这意味着在软件开发过程中最大限制是理解我们正在创建的对象。随着软件的演进，加入更多的功能点，系统变得越来越复杂：各个模块（Module）间存在着各种微妙的依赖关系。系统的复杂性随着时间积累，对于程序员来说，修改系统时考虑周全所有的的相关因素变得越来越困难。这就会使软件开放进度变缓慢，并且引入 Bug，而导致会进一步延缓开发进度，增加开发成本。在任何一个系统的生命周期中，复杂性不可避免会增加；系统越大，需要更多的人开发，管理系统复杂性的工作就越困难。</p><p>Eric Evans 在 Domain‐Driven Design 一书中吐槽了所谓的意大利面式架构，即代码确实做了有用的事，但很难解释它是如何去执行的；他认为造成这种窘境的主要原因是，将领域问题的复杂度与技术细节的复杂度混合在了一起，最终导致整体复杂度的指数级增长。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300852051.png" alt="image-20220704092621383" tabindex="0" loading="lazy"><figcaption>image-20220704092621383</figcaption></figure><p>复杂性不是凭空而来，很多时候也不是刻意为之，这也就意味着复杂性的增加往往不会以我们的主观意志为转移。就像房间里的大象，我们无法逃避，也不能视而不见。复杂性的来源可能是：</p><ul><li>吸积与持续迭代：增量式设计意味着软件设计永不结束，设计在系统的生命周期中持续发生，程序员要时刻考虑设计问题。增量开发也意味着持续重构。一个系统的初始设计几乎从来都不是最好的方案。随着经验的增加，必然会发现更好的设计方案。</li><li>交互且无扩展性设计：当吸积效应导致的大规模系统，结合了交互这个特性，会使技术系统更加复杂。一个技术系统除了作用于自身，还会与其它大量系统产生交互。比如下单购买一件商品，那么订单系统，商品系统，支付系统，物流系统，卡券系统就会交互协作。这样吸积的复杂性，由于交互特性的出现，会呈现几何级数上升。</li><li>不合理的业务封装：不合理的业务封装是一个相对宽泛的概念，其具体的表现譬如面向过程而不是对象、分层不合理等。</li><li>缺乏统一语言：典型的敏捷开发的结构，流水线上的各个角色往往会专注于自己负责的环节，精细化的分工也限制了每个角色的全局视角；虽然我们经常提倡所谓的主人翁意识，但是在落地时又很难去推进。</li><li>缺乏约束与规范：在团队协作开发的背景下，缺少规范和约束会严重损害架构的一致性（Consistency），代码的可维护性将急剧下降。可能规范在实现层面就是命名、分包等不影响代码运行的小问题，但是千里之堤，溃于蚁穴，正是这些微末的不注意导致了整体复杂性的雪崩。</li></ul><p>复杂性的应对永远不会是一劳永逸，我们需要不断地推陈出新，是动态、渐进的重塑自己对软件系统的认识，不断认识问题和寻找更优解的持续迭代。第一个控制复杂性的途径是代码简单，意图清晰（Obvious）。例如: 减少特殊场景的处理，或变量命名一致性都能降低系统复杂性。另一种方式就是对复杂问题的抽象然后分而治之。</p><h2 id="_3-大型网站的特点" tabindex="-1"><a class="header-anchor" href="#_3-大型网站的特点"><span>3. 大型网站的特点</span></a></h2><ul><li>用户多，分布广泛</li><li>大流量，高并发</li><li>海量数据，服务高可用</li><li>安全环境恶劣，易受网络攻击</li><li>功能多，变更快，频繁发布</li><li>从小到大，渐进发展</li><li>以用户为中心</li><li>免费服务，付费体验</li></ul><h2 id="_4-大型网站架构目标" tabindex="-1"><a class="header-anchor" href="#_4-大型网站架构目标"><span>4. 大型网站架构目标</span></a></h2><ul><li>高性能：提供快速的访问体验。</li><li>高可用：网站服务一直可以正常访问。</li><li>可伸缩：通过硬件增加/减少，提高/降低处理能力。</li><li>安全性：提供网站安全访问和数据加密，安全存储等策略。</li><li>扩展性：方便的通过新增/移除方式，增加/减少新的功能/模块。</li><li>敏捷性：随需应变，快速响应；</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/arch/arch-x-basic.html" target="_blank" rel="noopener noreferrer">架构 - 架构基础: 特点,本质...</a></p>',17)]))}const c=t(l,[["render",n],["__file","arch-basic.html.vue"]]),p=JSON.parse('{"path":"/posts/Architect/base/arch-basic.html","title":"架构-架构基础","lang":"zh-CN","frontmatter":{"aliases":"架构-架构基础","tags":null,"cssclass":null,"source":null,"order":10,"category":["架构"],"created":"2024-04-24 14:35","updated":"2024-04-30 08:52","description":"架构-架构基础 1. 软件架构简介 所谓架构，见仁见智，很难有一个明确或标准的定义；但架构并非镜花水月或阳春白雪，有系统的地方就需要架构，大到航空飞机，小到一个电商系统里面的一个功能组件，都需要设计和架构。抽象而言，架构就是对系统中的实体以及实体之间的关系所进行的抽象描述，是对物/信息的功能与形式元素之间的对应情况所做的分配，是对元素之间的关系以及元素...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/base/arch-basic.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"架构-架构基础"}],["meta",{"property":"og:description","content":"架构-架构基础 1. 软件架构简介 所谓架构，见仁见智，很难有一个明确或标准的定义；但架构并非镜花水月或阳春白雪，有系统的地方就需要架构，大到航空飞机，小到一个电商系统里面的一个功能组件，都需要设计和架构。抽象而言，架构就是对系统中的实体以及实体之间的关系所进行的抽象描述，是对物/信息的功能与形式元素之间的对应情况所做的分配，是对元素之间的关系以及元素..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300852051.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"架构-架构基础\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300852051.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 软件架构简介","slug":"_1-软件架构简介","link":"#_1-软件架构简介","children":[]},{"level":2,"title":"2. 系统复杂性的来源与应对","slug":"_2-系统复杂性的来源与应对","link":"#_2-系统复杂性的来源与应对","children":[]},{"level":2,"title":"3. 大型网站的特点","slug":"_3-大型网站的特点","link":"#_3-大型网站的特点","children":[]},{"level":2,"title":"4. 大型网站架构目标","slug":"_4-大型网站架构目标","link":"#_4-大型网站架构目标","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.95,"words":1786},"filePathRelative":"posts/Architect/base/arch-basic.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 软件架构简介</h2>\\n<p>所谓架构，见仁见智，很难有一个明确或标准的定义；但架构并非镜花水月或阳春白雪，有系统的地方就需要架构，大到航空飞机，小到一个电商系统里面的一个功能组件，都需要设计和架构。<strong>抽象而言，架构就是对系统中的实体以及实体之间的关系所进行的抽象描述，是对物/信息的功能与形式元素之间的对应情况所做的分配，是对元素之间的关系以及元素同周边环境之间的关系所做的定义</strong>。架构能将目标系统按某个原则进行切分，切分的原则，是要便于不同的角色进行并行工作，结构良好的创造活动要优于毫无结构的创造活动。</p>\\n<p>软件架构的核心价值，即是控制系统的复杂性，将核心业务逻辑和技术细节的分离与解耦。软件架构是系统的草图，它描述的对象是直接构成系统的抽象组件；各个组件之间的连接则明确和相对细致地描述组件之间的通信。在实现阶段，这些抽象组件被细化为实际的组件，比如具体某个类或者对象。在面向对象领域中，组件之间的连接通常用接口来实现。架构师的职责是努力训练自己的思维，用它去理解复杂的系统，通过合理的分解和抽象，理解并解析需求，创建有用的模型，确认、细化并扩展模型，管理架构；能够进行系统分解形成整体架构，能够正确的技术选型，能够制定技术规格说明并有效推动实施落地。</p>","autoDesc":true}');export{c as comp,p as data};
