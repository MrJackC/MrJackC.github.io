import{_ as i,c as a,a as l,o as t}from"./app-BfIe-EZg.js";const n={};function r(g,e){return t(),a("div",null,e[0]||(e[0]=[l('<h1 id="架构-理解架构的模式2" tabindex="-1"><a class="header-anchor" href="#架构-理解架构的模式2"><span>架构-理解架构的模式2</span></a></h1><blockquote><p>革命尚未成功，同志们还需努力。需要多揣摩揣摩</p></blockquote><blockquote><p>TIP</p><p>本文整理自<a href="https://www.cnblogs.com/lovecindywang/p/9670356.html" target="_blank" rel="noopener noreferrer">朱晔的互联网架构实践心得</a>, 他是结合了 <strong>微软给出的云架构的一些模式</strong>的基础上加入他自己的理解来总结互联网架构中具体的一些模式。</p></blockquote><blockquote><p>朱晔：设计模式是前人通过大量的实践总结出来的一些经验总结和最佳实践。在经过多年的软件开发实践之后，回过头来去看23种设计模式你会发现很多平时写代码的套路和OO的套路和设计模式里总结的类似，这也说明了你悟到的东西和别人悟到的一样，经过大量实践总能趋向性得出一些最佳实践的结论。架构设计也是一样，这里结合自己的理解分析一下微软给出的云架构的一些模式。话说微软干这方面的事情真的很厉害，之前翻译过的《微软应用架构指南》写的也很不错。有了模式的好处是，技术人员和技术人员之间的对话可以毫不费力的通过几个模式关键词进行交流，就像现在大家沟通提到职责链模式，如果双方都理解这个模式的意义那么这五个字替代的可能就是半小时的解释。废话不多说，接下去来看一下这些其实已经很熟悉亲切的模式。</p></blockquote><h2 id="管理和监控" tabindex="-1"><a class="header-anchor" href="#管理和监控"><span>管理和监控</span></a></h2><h3 id="_1-大使模式-创建代表消费者服务或应用程序发送网络请求的帮助服务" tabindex="-1"><a class="header-anchor" href="#_1-大使模式-创建代表消费者服务或应用程序发送网络请求的帮助服务"><span>1. 大使模式：创建代表消费者服务或应用程序发送网络请求的帮助服务</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947736.png" alt="image-20220704231448639" tabindex="0" loading="lazy"><figcaption>image-20220704231448639</figcaption></figure><p>进程外的代理服务（之前介绍中间件的时候也提到了，很多框架层面的事情可以以软件框架的形式寄宿在进程内，也可以以独立的代理形式做一个网络中间件）。这里的大使模式意思就是这么一个网络代理进程，用于和远端的服务进行通讯，完成下面的工作：</p><ul><li>服务路由</li><li>服务熔断</li><li>服务跟踪</li><li>服务监控</li><li>服务授权</li><li>数据加密</li><li>日志记录</li></ul><p>由于是独立进程的网络服务，所以这个模式适合于我们有多语言多框架都需要干同样的事情，那么我们的框架中客户端部分的很多工作可以移出来放到大使服务中去。当然了，多一层网络调用多一层开销，大使服务的部署也要考虑到性能不一定可以集中部署，这些都是要考虑的问题。</p><h3 id="_2-反腐模式-在现代应用程序和遗留系统之间实现装饰或适配器层" tabindex="-1"><a class="header-anchor" href="#_2-反腐模式-在现代应用程序和遗留系统之间实现装饰或适配器层"><span>2. 反腐模式：在现代应用程序和遗留系统之间实现装饰或适配器层</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947777.png" alt="image-20220704231641497" tabindex="0" loading="lazy"><figcaption>image-20220704231641497</figcaption></figure><p>使用一层反腐层来作为新老系统通讯的中间人。这样新系统可以完全使用新的通讯方式和架构方式，老的系统又不用进行特别改造可以暂时保留，等老系统不用之后可以废弃这个反腐层。这种模式适合新老系统迁移的过渡方案，不属于永久使用的架构设计模式</p><h3 id="_3-外部配置存储-将应用程序部署包中的配置信息移动到中心化的位置" tabindex="-1"><a class="header-anchor" href="#_3-外部配置存储-将应用程序部署包中的配置信息移动到中心化的位置"><span>3. 外部配置存储：将应用程序部署包中的配置信息移动到中心化的位置</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947799.png" alt="image-20220704231728207" tabindex="0" loading="lazy"><figcaption>image-20220704231728207</figcaption></figure><p>这个模式说的就是可以有一个外部的配置服务来保存配置信息，在之前第五篇文章介绍中间件的时候我详细说明过配置服务的功能。不管是处于管理运维的角度还是方便安全的角度，具有配置共享配置外存特点的独立配置服务对于大型的网站来说必不可少。实现的话有很多开源项目提供了配置服务。</p><h3 id="_4-网关聚合模式-使用网关将多个单独的请求聚合到一个请求中" tabindex="-1"><a class="header-anchor" href="#_4-网关聚合模式-使用网关将多个单独的请求聚合到一个请求中"><span>4. 网关聚合模式：使用网关将多个单独的请求聚合到一个请求中</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947821.png" alt="image-20220704231830304.png" tabindex="0" loading="lazy"><figcaption>image-20220704231830304.png</figcaption></figure><p>应用程序如果需要和多个服务交互的话，在中间构建起一个聚合网关层，网关并发发出多个请求给后面的服务，然后汇总数据给到应用程序。这种模式有几个好处：</p><ul><li>允许并发调用多个服务提高性能，允许只返回部分数据</li><li>网关里可以做一些弹性设计方案（熔断、重试、限流）</li><li>网关里可以做一些缓存方案</li><li>对于外网通讯的时候，可以让网关作为一个网络中间层</li><li>当然，使用这种模式需要考虑到网关的负载、高可用、高性能（异步IO）等等。</li></ul><p>其实这种模式不仅仅用于纯后端服务之间的通讯，很多面向前端的API请求都会做一个聚合层，这样前端可以只发一个请求的情况下任意向后端一次性索取多个API的返回，减少网络请求次数提高性能。</p><p>实现上最简单的方式可以使用OpenResty或Nginx实现。</p><h3 id="_5-网关卸压模式-把共享或特定的服务功能放到网关代理" tabindex="-1"><a class="header-anchor" href="#_5-网关卸压模式-把共享或特定的服务功能放到网关代理"><span>5. 网关卸压模式：把共享或特定的服务功能放到网关代理</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947852.png" alt="image-20220704231932879" tabindex="0" loading="lazy"><figcaption>image-20220704231932879</figcaption></figure><p>名字有点难以理解，其实这种模式我们可能一直在用。就是用一个代理网关层做一些和业务无关的又麻烦的点，比如SSL，实现上用Nginx实现就很简单。我们经常会对外启用HTTPS服务，然后对内服务实际提供的是HTTP接口，通过网关做一下协议转换。</p><h3 id="_6-网关路由模式-使用单个端点将请求路由到多个服务" tabindex="-1"><a class="header-anchor" href="#_6-网关路由模式-使用单个端点将请求路由到多个服务"><span>6. 网关路由模式：使用单个端点将请求路由到多个服务</span></a></h3><p><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947884.png" alt="image-20220704232037739" loading="lazy"><br> 这也是很常见的作法，我们对外的接口可能是/cart、/order、/search这样的API，在其背后其实是不同的服务，通过网关层进行转发，不仅仅可以做后端服务的负载均衡和故障转移，在后端服务变更切换对外API路径（比如版本升级）的时候我们也可以进行灵活的路由，确保了对外接口的一致性。可以使用Nginx来实现，相信大部分公司都是由Nginx这样的网关来对外的，不会把域名直接解析到底层服务上对外。</p><h3 id="_7-健康端点监控模式-在应用程序中执行功能检查-外部工具可以定期通过暴露的端点访问" tabindex="-1"><a class="header-anchor" href="#_7-健康端点监控模式-在应用程序中执行功能检查-外部工具可以定期通过暴露的端点访问"><span>7. 健康端点监控模式：在应用程序中执行功能检查，外部工具可以定期通过暴露的端点访问</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947915.png" alt="image-20220704232130905" tabindex="0" loading="lazy"><figcaption>image-20220704232130905</figcaption></figure><p>这个模式其实是挺重要的一点，有几个点需要注意：</p><ul><li>需要暴露哪些信息？不仅仅是服务本身或框架本身是否启动成功，尽可能暴露出服务依赖的外部存储或系统是否可用，原因是网络通讯是复杂的，从外部看到某个服务可用不代表我们的网站就可以成功连接，如果底层的数据库都无法连接，即使这个网站本身启动成功，那么我们应该认为这个服务是不健康的。外部存储即使对于A节点是可以连通对于B节点不能连通也是有可能的，可能是因为网络问题或权限问题，还可能因为负载问题，有的时候对于长连接的请求A节点因为始终连着存储不会有问题，新的B节点要求连接的时候因为超出最大连接限制无法连接。如果有可能的话还暴露一些服务内部各种线程池、连接池和队列的信息吧（对象数，队列长度等），这些指标很关键，但是因为在程序内部所以外围很难感知到，有了一些关键指标的外露对于排查性能问题会方便很多。</li><li>不只是网站，服务也应该暴露出健康信息，一来我们可以在外部收集这些信息进行监控汇总，二来我们的负载均衡器或发布系统需要有一个方式来判断服务是否可用，不可用的时候进行重启或故障转移。</li><li>对外的服务注意health端口的授权，这里可能会有一些敏感信息，不宜让匿名用户看到。</li></ul><p>实现上，我们应当把health端口作为插件形式集成到系统，配置一下即可启用，用不着每一个系统都自己开发一套。如果使用SpringBoot的话可以直接使用Actuator模块实现。</p><h3 id="_8-绞杀者模式-通过使用新的应用程序和服务逐渐替换特定功能部件来逐步迁移旧系统" tabindex="-1"><a class="header-anchor" href="#_8-绞杀者模式-通过使用新的应用程序和服务逐渐替换特定功能部件来逐步迁移旧系统"><span>8. 绞杀者模式：通过使用新的应用程序和服务逐渐替换特定功能部件来逐步迁移旧系统</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947945.png" alt="image-20220704232408285" tabindex="0" loading="lazy"><figcaption>image-20220704232408285</figcaption></figure><p>名字挺吓人，这个模式说的是如何做迁移。通过建立一个门面来作为后端新老服务的路由，慢慢把服务替换为新服务，最后当所有的服务都是新服务后删除这个门面即可。这样对于消费者感知不到这个迁移的过程。在上一篇文章中我们提到的换引擎的方式其实说的是保留原有的门面，也是通过这个门面做底层引擎的替换。其实我觉得对于减少外围影响这种模式是完全可以理所当然想到的，真正难的过程还是之前说的数据迁移和底层服务实现的过程。</p><h2 id="性能和可扩展性" tabindex="-1"><a class="header-anchor" href="#性能和可扩展性"><span>性能和可扩展性</span></a></h2><h3 id="_9-缓存辅助模式-按需将数据从数据存储加载到缓存中" tabindex="-1"><a class="header-anchor" href="#_9-缓存辅助模式-按需将数据从数据存储加载到缓存中"><span>9. 缓存辅助模式：按需将数据从数据存储加载到缓存中</span></a></h3><p><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947969.png" alt="image-20220704232506125" loading="lazy"><br> 这个模式说的不是广义上的缓存使用，而是其中的一种使用方式。我们对于缓存的使用一般有这么几种方式：</p><ul><li>查缓存，不存在查库，然后更新缓存</li><li>直接维护一大块“全量”数据，尽量和数据库同步</li></ul><p>这个模式说的是后一种方式，对于数据变动不大，这种模式是性能最好的，几乎实现了100%的命中率，而且如果数据量不大可以容纳进进程的话不需要跨进程通讯。往细致一点去想，这里还有一层性能优化的点，因为我们在内存中维护了一套复杂的全量数据的数据结构，内存中对象的引用只是指针引用，内存中的数据搜索可以很快，对于数据量不大但是关系复杂的数据，这个搜索效率可以是数据库的几百倍。实现上一般会在应用程序启动的时候把数据完全加入内存，在后续通过一些策略进行数据更新：</p><ul><li>定时更新同步数据，不同数据可以有不同的更新频率由后台线程来更新</li><li>数据具有不同的过期时间，过期后由请求触发主动更新或回调方式被动更新</li><li>数据修改后同步修改缓存和数据库中的数据</li></ul><h3 id="_10-命令和查询责任分离模式-通过使用单独的接口来分离读取数据和更新数据的操作" tabindex="-1"><a class="header-anchor" href="#_10-命令和查询责任分离模式-通过使用单独的接口来分离读取数据和更新数据的操作"><span>10. 命令和查询责任分离模式：通过使用单独的接口来分离读取数据和更新数据的操作</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947989.png" alt="image-20220704232715071" tabindex="0" loading="lazy"><figcaption>image-20220704232715071</figcaption></figure><p>英文缩写是CQRS，看到这个关键字你可能会觉得有点熟悉了。CQRS原来说的是我们可以有两套数据模型分别用于读和写。好处是，我们可以让读和写具有完全不同的数据结构，减少相互的干扰，减少权限控制的复杂度。这里说的不一定是指架构层面我们可以这么做，也指在程序内部，我们可以有两套命令模型来处理读写这两个事情，分别进行优化和定制。</p><p>现在一般的做法是类似于上图的做法，为读写配置两套独立的数据源，并且和事件溯源的方式结合起来做（见后面一节）。我们来说说读写两套模型在存储上分离这个事情，在《相辅相成的存储五件套》一文中我们的架构图其实就有这方面的意思。对于读写这两个事情，我们完全可以不用一套数据源，为读建立专门的物化视图，可以针对读进行优化，避免在读的时候做很多Join的工作，可以把性能做到极致（后面会有物化视图模式的介绍）。事件溯源+CQRS+物化视图三者一般会结合起来使用。</p><h3 id="_11-事件溯源模式-使用仅追加存储去记录描述对域中的数据采取的操作的完整系列事件" tabindex="-1"><a class="header-anchor" href="#_11-事件溯源模式-使用仅追加存储去记录描述对域中的数据采取的操作的完整系列事件"><span>11. 事件溯源模式：使用仅追加存储去记录描述对域中的数据采取的操作的完整系列事件</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947017.png" alt="image-20220704232750858" tabindex="0" loading="lazy"><figcaption>image-20220704232750858</figcaption></figure><p>事件溯源（ES）是一种有趣的模式，说的是我们记录的不是数据的当前状态而是叠加的数据变化序列（是不是想到了区块链的数据记录方式）。传统的CRUD方式因为有更新这个操作，所以会产生性能并发方面的局限性，而且我们还需要配备额外的日志来做审计，否则就产生了信息丢失。而事件溯源模式记录的是事件而不是当前状态，所以有下面的特点：</p><ul><li>事件不可变，只是追加新的事件，没有冲突，性能高</li><li>以事件驱动做外部处理，耦合低</li><li>保留第一手原始信息，信息没有损耗</li></ul><p>其实有一些业务场景下这种模式会比CRUD存储更适合：</p><ul><li>业务更看重数据的意图和目的而不是当前的状态，注重审计、回滚、历史方面的功能</li><li>希望避免数据更新的冲突，希望数据的产生能有较高性能，又能接受数据状态的最终一致性</li><li>整个系统中本身就是以事件在驱动的（我们可以想一下在真实的世界中，物体和物体之间相互影响，通过事件来影响，每个物体观察到其它物体发出的事件来做出自己的反映，这是最自然的，而不是观察到别的物体属性的变化来调整自己的属性）</li></ul><p>反过来说，业务逻辑很简单的系统，需要强一致性的系统，数据很少更新的系统不适合这种模式。不知你所了解到的采用ES模式的业务场景有哪些？大家一起交流一下。</p><h3 id="_12-物化视图模式-针对所需的查询操作-当数据没有理想地格式化时-在一个或多个数据存储中的数据上生成预填充视图" tabindex="-1"><a class="header-anchor" href="#_12-物化视图模式-针对所需的查询操作-当数据没有理想地格式化时-在一个或多个数据存储中的数据上生成预填充视图"><span>12. 物化视图模式：针对所需的查询操作，当数据没有理想地格式化时，在一个或多个数据存储中的数据上生成预填充视图</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947045.png" alt="image-20220704232902291" tabindex="0" loading="lazy"><figcaption>image-20220704232902291</figcaption></figure><p>我们在使用数据存储的时候往往会更多考虑存储而不是读取。我们使用各种数据库范式来设计数据库，在读取数据的时候我们需要做大量的关联查询以输出符合需要的查询结果。这个时候性能往往会成为瓶颈，物化视图是一种空间换时间的做法。与其在查询的时候做关联，倒不如提前保存一份面向于查询和输出的数据格式。因此，物化视图适合下面的场景：</p><ul><li>经过复杂的计算才能查询出数据</li><li>背后存储可能会有不稳定的情况</li><li>需要连接多个不同类型的存储才能查询到结果</li></ul><p>但是因为需要考虑到物化视图计算保存的开销，所以也不太适合于数据变化太频繁的情况，因为数据加工需要时间，所以不适合需要数据强一致性的场景。</p><p>实现上一般是基于消息监听做额外维护一套物化视图的数据源和主流程解耦。惠普的Vertica是一款高性能的列式分析数据库，它的一个特性就是物化视图，通过事先提供SQL语句直接缓存面向于统计的查询结果，极大程度提高了性能，也是空间换时间的思想。</p><h3 id="_13-基于队列的负载均衡模式-使用一个队列作为任务和服务之间的缓冲区-平滑间歇性重负载" tabindex="-1"><a class="header-anchor" href="#_13-基于队列的负载均衡模式-使用一个队列作为任务和服务之间的缓冲区-平滑间歇性重负载"><span>13. 基于队列的负载均衡模式：使用一个队列作为任务和服务之间的缓冲区，平滑间歇性重负载</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947064.png" alt="image-20220704232956349" tabindex="0" loading="lazy"><figcaption>image-20220704232956349</figcaption></figure><p>消息队列我们太熟悉了，之前我们也反复提高过好多次，甚至我说这是架构三马车之一。这个模式在这里强调的是削峰的优势。这里我还想提几点：</p><ul><li>引入消息队列不会提高处理能力，而是会降低性能，只是我们把耦合解开了允许每一个部件单独有自己的弹性，对于不能负荷的部分在队列中进行缓冲，缓冲不是存储不意味无限制</li><li>队列看的是处理速度和入队速度的比例，一般而言，我们需要预先做评估确保处理TPS超过2倍的最高峰的入队TPS，确保留出一半的富裕，这样在业务逻辑有修改的时候处理TPS哪怕下降了30%，还能抗住压力</li></ul><h3 id="_14-优先级队列模式-确定发送到服务的请求的优先级-使得具有较高优先级的请求更快地被接收和处理" tabindex="-1"><a class="header-anchor" href="#_14-优先级队列模式-确定发送到服务的请求的优先级-使得具有较高优先级的请求更快地被接收和处理"><span>14. 优先级队列模式：确定发送到服务的请求的优先级，使得具有较高优先级的请求更快地被接收和处理</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947090.png" alt="image-20220704233208874" tabindex="0" loading="lazy"><figcaption>image-20220704233208874</figcaption></figure><p>区别于FIFO结构的队列，优先级队列允许消息标识处理优先级。这里实现上如上面两个图有两种方式：</p><ul><li>消息优先级方式。在队列中进行实时位置重排，永远优先处理级别较高的消息。</li><li>不同的处理池方式。我们可以针对不同的处理级别配备专门的处理池来处理这些消息，高级别的消息具有更多的处理资源，更好的硬件来处理，这样势必会有较高的处理能力。</li></ul><p>在方案选择和实现上要考虑消息优先级是否需要绝对按照优先级来处理，还是说相对优先处理即可，如果需要绝对优先那么除了消息位置重排还需要有抢占处理。还有，如果我们采用第二种多池的方式来处理的话可能会发生低级别的消息处理时间比高级别的消息更快的可能性（如果两者处理业务逻辑是完全不同的话）。</p><p>实现上的话RabbitMQ 3.5以上版本支持了消息优先级，实现的是第一种方式，在消息有缓冲的堆积的时候进行消息重排，消费端可以先看到先处理优先级高的消息，这种方式在消费速度大于产出速度的场景下是无法实现高级别消息优先处理的。</p><p>补充一点，对于队列中的消息，还有一种需要特别考虑的就是一直停留在队列的消息应当视为低优先级或是死信消息来处理，最好是有单独的消费者来处理，避免此类消息影响了整个队列的处理，见过很多个事故是由于队列中被废弃消息卡死导致彻底丧失处理能力的。</p><h3 id="_15-限流模式-控制应用程序-个人租户或整个服务的实例消耗的资源" tabindex="-1"><a class="header-anchor" href="#_15-限流模式-控制应用程序-个人租户或整个服务的实例消耗的资源"><span>15. 限流模式：控制应用程序，个人租户或整个服务的实例消耗的资源</span></a></h3><p>在做压力测试的时候我们会发现，随着压力的上升系统的吞吐慢慢变大而且这个时候响应时间可以基本保持可控（1秒内），当压力突破一个边界后，响应时间一下子会不可控，随之系统的吞吐就会下降，最后会彻底崩溃。任何系统对于压力的负荷是有边界的，超过这个边界之后系统的SLA肯定无法满足标准，导致大家都无法好好用这个服务。因为系统的扩展往往不是秒级可以做到的，所以这个时候最快的手段就是限流，只有限流了才能保护现在的系统不至于突破这个边界彻底崩溃。对于业务量超大的系统搞活动，对关键服务甚至入口层面做限流是必然的，别无它法，淘宝双11凌晨0点那一刻也能看到一定比例的下单被限流了。</p><p>常见的限流算法有这么几种：</p><ul><li>计数器算法。最简单的算法，资源使用加一，释放减一，达到一定的计数拒绝服务。</li><li>令牌桶算法。按照固定速率往桶里加令牌，桶里最多存放n个令牌，填满丢弃。处理的时候需要获取令牌，获取不到则拒绝请求。</li><li>漏桶算法。一个固定容量的漏洞，按照一定的速度流出水滴（任务）。可以以任意速度流入水滴（任务），满了则溢出丢弃。</li></ul><p>令牌桶算法限制的是平均流入速度，允许一定程度的突发请求，漏桶算法限制的是常量的流出速率用于平滑流入的速度。实现上，常用的一些开源类库都会有相关的实现，比如google的Guava提供的RateLimiter就是令牌桶算法。</p><p>限流模式有下面的一些注意事项：</p><ul><li>限流需要快速执行，任何一个超出流量控制的请求不允许放行，否则没有意义。</li><li>限流需要提前执行，最好在系统能力达到80%的时候进行限流，越晚限流风险越大。</li><li>可以返回特定的限流控制错误代码给客户端，让用户知道这不是错误是限流，可以稍后再试。</li><li>因为我们的系统很多地方都会做限流，在监控图上我们最好对这类限流的曲线有敏感，限流后的曲线是一下子失去了增长的梯度变为了平稳的状态，如果监控图看的时间范围过小的话会误判这是一个正常的请求量。</li><li>限流可以在边缘节点做。我们来考虑秒杀的场景，如果一秒有100万个请求，这100万个请求全部打到我们的应用服务器没有意义，我们可以在边缘节点（CDN）甚至客户端上做简单的边缘计算，让这100万个请求采用命中注定的方式直接随机放弃其中的99.9%留下1000个请求，最终可以进入我们的业务服务，这样TPS在1000一般是没有问题的。所以很多时候我们参与秒杀，系统会在极短的时间内毫无思考告知你活动已结束，说明你已经是被选中的命中注定的无法进入后端系统来参与秒杀的那些人。</li></ul><h2 id="数据管理模式" tabindex="-1"><a class="header-anchor" href="#数据管理模式"><span>数据管理模式</span></a></h2><h3 id="_16-分片模式-将数据存储区划分为一组水平分区或分片" tabindex="-1"><a class="header-anchor" href="#_16-分片模式-将数据存储区划分为一组水平分区或分片"><span>16. 分片模式：将数据存储区划分为一组水平分区或分片</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947117.png" alt="image-20220704233331801" tabindex="0" loading="lazy"><figcaption>image-20220704233331801</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947142.png" alt="image-20220704233343555" tabindex="0" loading="lazy"><figcaption>image-20220704233343555</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947162.png" alt="image-20220704233353950" tabindex="0" loading="lazy"><figcaption>image-20220704233353950</figcaption></figure><p>一直有一个说法就是不到没路可走的时候不要考虑数据库分片。有的时候业务量大到单个业务表在经过缓存+队列削峰等措施之后的平均的TPS超过1万，单表实在是扛不住，还是只能考虑分片手段。</p><p>分片前：</p><ul><li>需要根据数据分布、压力情况、业务逻辑确定分片的方式，按照条件还是范围还是哈希等等（三个图展示了三种策略）。</li><li>需要进行业务代码改造，改掉所有不允许的SQL。</li><li>需要确定用HardCode方式还是框架方式还是中间件方式做数据路由。</li></ul><p>分片后：</p><ul><li>需要有运维工具可以对这么多套分片的数据进行统一的加索引等操作。</li><li>最好有数据仓库可以汇总所有数据，使得adhoc查询可以更方便。</li><li>最好有辅助工具可以用来帮助定位数据会在哪个分片中。</li></ul><h3 id="_17-静态内容托管模式-将静态内容部署到基于云的存储服务-可以将它们直接传递给客户端" tabindex="-1"><a class="header-anchor" href="#_17-静态内容托管模式-将静态内容部署到基于云的存储服务-可以将它们直接传递给客户端"><span>17. 静态内容托管模式：将静态内容部署到基于云的存储服务，可以将它们直接传递给客户端</span></a></h3><p>相信互联网公司90%+肯定都使用了这个模式。把静态资源从动态网站中剥离由Nginx等高性能服务器来处理静态资源，然后使用三方CDN对静态资源进行加速，不但减轻了动态网站的负载而且数据在边缘节点加速让用户的访问跟快，使用单独的一个或多个子域名做静态资源还能提高下载资源的并行度提高网页加载的速度。</p><p>使用CDN来进行资源加速一般有主动数据传送到CDN存储和在CDN配置回源站拉取两种方式，文件类一般使用主动推送数据，静态资源类一般使用回源方式。在使用CDN的时候考虑下面的问题：</p><ul><li>CDN以什么方式来认定同一个文件的，CDN提供了什么工具来刷新边缘节点的缓存？根据不同的策略做相应的缓存刷新方案。</li><li>源站对于相同的文件需要有一致性（最好版本变化后文件名变化），不能今天是这个版本明天是另一个版本，这样很可能导致边缘节点缓存了不同版本的文件，导致各种怪问题。</li><li>使用了CDN后不同地区的用户访问的都是CDN节点上的数据，一旦出现问题排查比较困难，考虑引入前端的错误处理框架来记录前端出现脚本错误时的调用栈，方便定位问题。</li></ul><h3 id="_18-索引表模式-为查询经常引用的数据存储区中的字段创建索引" tabindex="-1"><a class="header-anchor" href="#_18-索引表模式-为查询经常引用的数据存储区中的字段创建索引"><span>18. 索引表模式：为查询经常引用的数据存储区中的字段创建索引</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947187.png" alt="image-20220704233457711" tabindex="0" loading="lazy"><figcaption>image-20220704233457711</figcaption></figure><p>出于下面的原因，我们会考虑索引表：</p><ul><li>虽然我们的关系型数据库大多支持主键之外的非聚集索引，但是在某些情况下直接对大表做很多索引性能并不好。</li><li>做了Sharding后我们确实没有办法以分片键之外的维度来查询数据。</li><li>希望以空间换时间，直接把某个维度的复合查询作为主键单独保存一份数据。</li></ul><p>不过需要考虑一点索引只有在数据区分度高的情况下才能发挥价值，如果90%以上的数据都是相同的值，那么走索引进行查询性能会比全表扫还要差一点。</p><h2 id="设计和实现模式" tabindex="-1"><a class="header-anchor" href="#设计和实现模式"><span>设计和实现模式</span></a></h2><h3 id="_19-前端专用的后端模式-通过使用单独的接口来分离读取数据和更新数据的操作" tabindex="-1"><a class="header-anchor" href="#_19-前端专用的后端模式-通过使用单独的接口来分离读取数据和更新数据的操作"><span>19. 前端专用的后端模式：通过使用单独的接口来分离读取数据和更新数据的操作</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947216.png" alt="image-20220704233641416" tabindex="0" loading="lazy"><figcaption>image-20220704233641416</figcaption></figure><p>这里说的是不同的前端配以不同的专用后端。比如PC网站和APP的后端是两套程序。这种模式是否适合其实还是看两端的后端提供的数据差异有多大，我们总是希望可以尽量统一一套后端，业务逻辑不用重复写，但是我们要考虑到PC网站和APP的差异性：</p><ul><li>APP系统的接口交互一般会签名验证，有的时候还会加密</li><li>PC系统的流程一般和APP系统不一样</li><li>PC一个页面能显示的内容会比APP一个界面显示的更多</li><li>安全性设计上PC和APP不一样，APP很少有图形验证码</li></ul><p>考虑到这些差异，我们是在一个工程内根据来源做适配，还是独立两套工程来做独立的后端取决于差异度有多大了。</p><h3 id="_20-计算资源整合模式-将多个任务或操作整合到单个计算单元中" tabindex="-1"><a class="header-anchor" href="#_20-计算资源整合模式-将多个任务或操作整合到单个计算单元中"><span>20. 计算资源整合模式：将多个任务或操作整合到单个计算单元中</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947235.png" alt="image-20220704233737997" tabindex="0" loading="lazy"><figcaption>image-20220704233737997</figcaption></figure><p>这个模式从资源节省的角度来说我们的计算单元任务可以进行一些合并，减少因为资源限制导致不必要的开销。</p><h3 id="_21-选举模式-通过选举一个实例作为负责管理其它实例的负责人-来协调分布式应用程序中的协作任务实例集合执行的操作" tabindex="-1"><a class="header-anchor" href="#_21-选举模式-通过选举一个实例作为负责管理其它实例的负责人-来协调分布式应用程序中的协作任务实例集合执行的操作"><span>21. 选举模式：通过选举一个实例作为负责管理其它实例的负责人，来协调分布式应用程序中的协作任务实例集合执行的操作</span></a></h3><p>对于分布式服务，我们趋向于把服务设计为无状态可以任意扩展的，但是在某些业务场景下我们不得不在服务中选举出一个Leader（Primary节点，Master节点）来做一些不适合重复做的协调管理工作。这个时候我们需要有算法来做选举。</p><p>最常见的实现方式是使用Zookeeper来实现，我们知道ZK的znode有Sequence和NonSequence两种，前者多个客户端只有一个可创建成功同名节点，后者创建后会自动加上序列号命名多个客户端可以创建多个同名节点，利用这个特性有两种常见实现方式：</p><ul><li><strong>非公平实现</strong>。多个客户端同时创建EPHEMERAL+NONSEQUENCE节点。只有一个可以创建成功，创建成功的就是Leader，其它的Follower需要注册watch，一旦Leader放弃节点（注意，EPHEMERAL意味着Leader待机后Session结束节点被删除），再一次重复之前的过程注册节点抢占成为Leader。这个模式实现简单，问题是在节点数量过多的时候一旦发生重新竞选，这个时候可能会有性能问题。</li><li><strong>公平实现</strong>。多个客户端同时创建EPHEMERAL+SEQUENCE节点。客户端都可以创建成功节点，客户端如果判断自己是最小的节点则为Leader否则为Follower。每一个Follower都去watch序号比自己小的节点（大家都看前一位）。一旦有Leader节点因为宕机被删除（还是EPHEMERAL特性），收到通知的节点会看自己是不是最小的序号，如果是的话成为Leader。节点宕机后，原先watch宕机节点的客户端重新watch比自己序号小的有效节点。这个模式实现复杂，但是由于watch的都只是一个节点所以不会发生像非公平实现的性能问题，而且竞选根据节点序号来而不是抢占式所以显得Leader的选举公平有序。</li></ul><h3 id="_22-管道和过滤器模式-将需要执行复杂处理的任务分解成可以重复使用的一系列单独的元素" tabindex="-1"><a class="header-anchor" href="#_22-管道和过滤器模式-将需要执行复杂处理的任务分解成可以重复使用的一系列单独的元素"><span>22. 管道和过滤器模式：将需要执行复杂处理的任务分解成可以重复使用的一系列单独的元素</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947263.png" alt="image-20220704233828863" tabindex="0" loading="lazy"><figcaption>image-20220704233828863</figcaption></figure><p>在软件设计模式中过滤器构成的管道这种模式很常见（图上的业务逻辑就是Handler，之前的那些Task就是Filter，模式上可以是Filter+Handler也可以是Filter+Handler+Filter也可以是Handler+Filter），不管是Spring MVC框架也好，Netty这种网络框架也好都提供了这样的设计。每一个过滤器单独完成一个功能，可以独立插拔随意组合配置成一套管道，不但数据处理的整个过程清晰可见还增加了灵活性。</p><p>对于架构上也可以有这样的模式，在数据源进入到业务逻辑处理之前（或之后，或前后），我们可以配置一系列的数据过滤器完成各种数据转化和处理的任务。Task和Task之间可以是同步调用，也可以使用MQ做一定的可伸缩性设计。还可以把过滤器的配置信息保存在配置系统中甚至根据上下文动态构建出管道，实现更灵活的前置或后置流程处理。</p><h2 id="消息模式" tabindex="-1"><a class="header-anchor" href="#消息模式"><span>消息模式</span></a></h2><h3 id="_23-竞争消费者模式-使用多个并发消费者来处理在同一消息通道上接收的消息" tabindex="-1"><a class="header-anchor" href="#_23-竞争消费者模式-使用多个并发消费者来处理在同一消息通道上接收的消息"><span>23. 竞争消费者模式：使用多个并发消费者来处理在同一消息通道上接收的消息</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947289.png" alt="image-20220704233914820" tabindex="0" loading="lazy"><figcaption>image-20220704233914820</figcaption></figure><p>这里说的是消息队列的消息消费者是一组对等的消费者，通过竞争方式来拉取数据执行。之前提到过这是MQ的最常见的一种模式，一般而言我们会部署多个消费节点进行负载均衡，在负载较大的时候可以方便得增加消费者进行消费能力扩容。不过对于这种模式消费者应当是对等的无状态的，在某个消费者在消费失败的时候消息重新回到队列随后可能会被另一个消费者进行处理。</p><h3 id="_24-重试模式-在应用程序尝试连接到服务或网络资源遇到预期的临时故障时-让程序通过透明地重试以前失败的操作来处理" tabindex="-1"><a class="header-anchor" href="#_24-重试模式-在应用程序尝试连接到服务或网络资源遇到预期的临时故障时-让程序通过透明地重试以前失败的操作来处理"><span>24. 重试模式：在应用程序尝试连接到服务或网络资源遇到预期的临时故障时，让程序通过透明地重试以前失败的操作来处理</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947315.png" alt="image-20220704233949973" tabindex="0" loading="lazy"><figcaption>image-20220704233949973</figcaption></figure><p>重试适用于瞬态故障，之后会提到断路器模式，两种模式可以结合使用。首先说说重试的几个发起人：</p><ul><li>让用户自己发起，遇到错误的时候及时返回错误信息，让用户自己稍后重试整个业务功能。这种方式不容易产生瞬时的压力，但是体验较差。</li><li>在中间件自动发起，比如在RPC调用的时候遇到服务超时自动进行一定次数的重试，这样可以在外部没有感知的情况下有一定概率消除错误。这个方式要求服务是支持重试的。</li><li>由业务逻辑手动发起，不同的业务逻辑根据需求在代码中去写重试的逻辑（当然也可以通过类似Spring-Retry这种组件来做）。实现繁琐但是不容易出错。</li><li>由补偿逻辑发起进行同步转异步操作，非重要逻辑同步行则行，不行不在主流程重试，由单独的异步流程进行重试补偿。</li></ul><p>重试也要考虑几种策略：</p><ul><li>次数。最多重试几次。</li><li>异常。遇到什么样的异常（黑白名单）应该去重试。</li><li>等待。考虑每次重试是相同的间隔呢还是有一个延迟的递增，随着重试次数增加而增加延时时间。</li></ul><h3 id="_25-调度、代理、主管模式-在一组分布式服务和其它远程资源之间协调一组操作" tabindex="-1"><a class="header-anchor" href="#_25-调度、代理、主管模式-在一组分布式服务和其它远程资源之间协调一组操作"><span>25. 调度、代理、主管模式：在一组分布式服务和其它远程资源之间协调一组操作</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947336.png" alt="image-20220704234033054" tabindex="0" loading="lazy"><figcaption>image-20220704234033054</figcaption></figure><p>这个模式说的是三者的角色：</p><ul><li>调度负责安排任务，在执行每个步骤的时候维护任务的状态，具体业务逻辑由代理负责。</li><li>代理负责和远程的服务和资源进行通讯，实现错误处理和重试。</li><li>管理者负责监视任务的执行状态，作为调度的补充，在合适的时候要求调度进行补偿。</li></ul><p>三个角色相互配合完成复杂的，具有较多远程服务参与的任务，确保任务的最终有效执行。在之前架构三马车一文中说到定时任务的时候提到过一种任务驱动表的模式，说到了一些驱动表的实现细节，其实整体和这个模式是类似的思想。当我们的一个复杂逻辑有多个步骤构成，每一步都依赖外部服务，这个时候我们可以选择全程MQ+补偿方式（乐观方式），也可以选择全程任务驱动的被动模式（悲观方式），具体选择取决于更看重可靠性还是及时性。</p><h2 id="弹性模式" tabindex="-1"><a class="header-anchor" href="#弹性模式"><span>弹性模式</span></a></h2><h3 id="_26-舱壁模式-将应用程序的元素隔离到池中-如果其中一个失败-其它的将继续运行" tabindex="-1"><a class="header-anchor" href="#_26-舱壁模式-将应用程序的元素隔离到池中-如果其中一个失败-其它的将继续运行"><span>26. 舱壁模式：将应用程序的元素隔离到池中，如果其中一个失败，其它的将继续运行</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947358.png" alt="image-20220704234117476" tabindex="0" loading="lazy"><figcaption>image-20220704234117476</figcaption></figure><p>资源隔离有好几个层次，可以在进程内部做线程池或队列的隔离，在微服务的服务划分上考虑隔离出单独的物理服务，或是在服务器层面通过虚拟化技术或Docker技术进行资源隔离。隔离了就不会相互影响，但是会有成本、性能、管理便利性方面的开销。实现能够根据需求分析出可能的资源相互影响的点，提前规划隔离往往可以避免很多问题的发生。之前有遇到过几个事故是这样的：</p><ul><li>程序内部大量使用了Java8的ParallelStream特性进行并行处理，由于默认共享了相同的线程池，某一个业务的执行占满了线程影响了其它业务的正常进行。</li><li>消息队列因为没有对执行过多次失败的死信消息和正常的新消息进行隔离，导致一些业务下线后无法处理的死消息占满了整个队列，正常消息无法消费。</li><li>某个服务提供了类似文件上传的重量级操作，也提供了数据查询的轻量级操作，在上传业务大的时候服务的线程都被IO所占满，导致其它查询操作无法进行。</li></ul><h3 id="_27-断路器模式-连接到远程服务或资源时-处理可能需要花费时间来修复的故障" tabindex="-1"><a class="header-anchor" href="#_27-断路器模式-连接到远程服务或资源时-处理可能需要花费时间来修复的故障"><span>27. 断路器模式：连接到远程服务或资源时, 处理可能需要花费时间来修复的故障</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947383.png" alt="image-20220704234159148" tabindex="0" loading="lazy"><figcaption>image-20220704234159148</figcaption></figure><p>分布式应用环节多网络环境复杂，如果遇到依赖服务调用失败的情况我们或许可以进行重试期待服务马上可以恢复，但是在某些时候依赖的服务是彻底挂了而不是网络故障无法及时恢复，如果不考虑进行熔断的，可能服务调用方会被服务提供方拖死。这个时候可以引入断路器机制，如图所示断路器一般采用三态实现，瞬间恢复可能会让底层服务压力过大：</p><ul><li>关闭：出现错误的时候增加计数器</li><li>打开：计数器到达阈值打开断路器，直接返回错误</li><li>半开：超时后允许一定的请求通过，成功率达到阈值关闭断路器，操作还是失败的话还是进入打开状态</li></ul><p>实现模式的时候考虑下面注意点：</p><ul><li>考虑熔断后怎么来处理，熔断后我们肯定拿不到实际的处理结果，这个时候考虑是功能降级还是采用后备的数据提供方来提供数据</li><li>紧急的时候需要人工介入，最好在外部提供手动的方式可以干预断路器的三态</li><li>不同的业务考虑不同的断路器打开阈值，每一个错误还能有不同的权重，比如对于下游程序返回了太多请求的错误，每次错误可以+2提高权重尽可能早断路</li><li>断路器应当记录熔断时的请求原始信息，在之后必要的时候可以进行重放或数据修复工作</li><li>注意设置好外部服务的超时，如果客户端超时比服务端短，很可能进行错误的熔断</li></ul><p>实现上我们可以看一下Netflix的Hystrix进行进一步了解。</p><h3 id="_28-事务补偿模式-撤消通过一系列步骤执行的工作-它们一起定义最终一致的操作" tabindex="-1"><a class="header-anchor" href="#_28-事务补偿模式-撤消通过一系列步骤执行的工作-它们一起定义最终一致的操作"><span>28. 事务补偿模式：撤消通过一系列步骤执行的工作，它们一起定义最终一致的操作</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947402.png" alt="image-20220704234234642" tabindex="0" loading="lazy"><figcaption>image-20220704234234642</figcaption></figure><p>这个模式说的是失败时必须进行撤销的操作，可以由一组补偿程序来做相应的补偿。在这里我想说的更广一点，在服务调用的时候，调用失败有几种可能：</p><ul><li>请求客户端发出但是没到服务端，业务逻辑没有执行</li><li>请求客户端发出服务端收到也处理成功了，业务逻辑执行了客户端没收到结果</li><li>请求客户端发出服务端收到但处理失败了，客户端没收到结果</li></ul><p>所以在出现服务调用失败或超时的时候，服务端执行究竟有没有成功客户端是不明确的（只有客户端收到了明确的服务端返回的业务错误才真正代表执行失败），这个时候需要有补偿逻辑来同步服务端的执行状态。如果这样的补偿不可避免而且需要补偿的服务特别多，这样的逻辑逐一来写是一件很烦的事情，我们可以把这个工作封装成一个补偿中间件来处理：</p><ul><li>所有关键服务调用标记为需要自动补偿</li><li>补偿中间件在数据库记录服务的调用状态</li><li>关键服务的提供者提供统一状态查询接口，消费者提供统一的补偿回调接口（来处理成功和失败的情况）</li><li>补偿中间件根据数据库的记录调用服务提供方的状态查询和服务消费方的补偿回调接口进行补偿</li></ul><p>这样，我们在服务调用的时候就不需要考虑补偿逻辑的实现，只要实现这个标准即可。</p><h2 id="安全模式" tabindex="-1"><a class="header-anchor" href="#安全模式"><span>安全模式</span></a></h2><h3 id="_29-代客密钥模式-使用向客户端提供对特定资源或服务的有限直接访问权限的令牌或密钥" tabindex="-1"><a class="header-anchor" href="#_29-代客密钥模式-使用向客户端提供对特定资源或服务的有限直接访问权限的令牌或密钥"><span>29. 代客密钥模式：使用向客户端提供对特定资源或服务的有限直接访问权限的令牌或密钥</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947427.png" alt="image-20220704234318864" tabindex="0" loading="lazy"><figcaption>image-20220704234318864</figcaption></figure><p>这个模式说的是，在访问敏感资源的时候，我们可以不必让应用程序在其中作为一个代理转一层做权限控制，而是生成一个密钥，让用户直接拿着密钥到资源池换数据。</p><p>一些CDN在提供资源上传下载服务的时候一般都会提供类似的安全策略，需要实现生成Token才能去使用下载和上传服务，避免了CDN数据被非法利用作为图床的可能。</p><p>实现上比较简单，应用程序和资源提供方约定好Token的生成算法，对资源+请求资源的时间+密钥联合在一起做签名，资源提供方如果校验到签名不正确或Token过期或资源不匹配都将拒绝服务。</p><h3 id="_30-联合身份模式-将认证委托给外部身份提供者" tabindex="-1"><a class="header-anchor" href="#_30-联合身份模式-将认证委托给外部身份提供者"><span>30. 联合身份模式：将认证委托给外部身份提供者</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947452.png" alt="image-20220704234435596" tabindex="0" loading="lazy"><figcaption>image-20220704234435596</figcaption></figure><p>这个模式说的是将身份验证委托给专门的程序或模块来做。使用专门的模块来统一负责登录授权不仅仅可以提供单点登录的功能，而且服务实现上更简单不需要每次都考虑登录那套东西。实现上可以看一下Spring Security实现的OAuth 2.0。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>总结一下，对于其中的很多模式，我们可以发现其实在之前的一些介绍或多或少有一些涉及。这里提到的30种模式有些体现的是一些设计细节，有些体现的是一种设计理念，它们大多时候是组合使用的，适合的就是最好的，大家可以细细品味一下每种模式的适合场景，在合适的时候可以想到它或许会有一种豁然开朗的感觉。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/arch/arch-x-pattern-2.html" target="_blank" rel="noopener noreferrer"><strong>架构 - 理解架构的模式2</strong></a></p>',159)]))}const c=i(n,[["render",r],["__file","arch-x-pattern-2.html.vue"]]),h=JSON.parse(`{"path":"/posts/Architect/base/arch-x-pattern-2.html","title":"架构-理解架构的模式2","lang":"zh-CN","frontmatter":{"aliases":"架构-理解架构的模式2, '架构-理解架构的模式2'","tags":null,"cssclass":null,"source":null,"order":42,"category":["架构"],"created":"2024-04-24 14:35","updated":"2024-04-30 09:08","description":"架构-理解架构的模式2 革命尚未成功，同志们还需努力。需要多揣摩揣摩 TIP 本文整理自朱晔的互联网架构实践心得, 他是结合了 微软给出的云架构的一些模式的基础上加入他自己的理解来总结互联网架构中具体的一些模式。 朱晔：设计模式是前人通过大量的实践总结出来的一些经验总结和最佳实践。在经过多年的软件开发实践之后，回过头来去看23种设计模式你会发现很多平时...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/base/arch-x-pattern-2.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"架构-理解架构的模式2"}],["meta",{"property":"og:description","content":"架构-理解架构的模式2 革命尚未成功，同志们还需努力。需要多揣摩揣摩 TIP 本文整理自朱晔的互联网架构实践心得, 他是结合了 微软给出的云架构的一些模式的基础上加入他自己的理解来总结互联网架构中具体的一些模式。 朱晔：设计模式是前人通过大量的实践总结出来的一些经验总结和最佳实践。在经过多年的软件开发实践之后，回过头来去看23种设计模式你会发现很多平时..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947736.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"架构-理解架构的模式2\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947736.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947777.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947799.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947821.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947852.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947884.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947915.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947945.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947969.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947989.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947017.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947045.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947064.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947090.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947117.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947142.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947162.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947187.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947216.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947235.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947263.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947289.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947315.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947336.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947358.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947383.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947402.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947427.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300947452.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"管理和监控","slug":"管理和监控","link":"#管理和监控","children":[{"level":3,"title":"1. 大使模式：创建代表消费者服务或应用程序发送网络请求的帮助服务","slug":"_1-大使模式-创建代表消费者服务或应用程序发送网络请求的帮助服务","link":"#_1-大使模式-创建代表消费者服务或应用程序发送网络请求的帮助服务","children":[]},{"level":3,"title":"2. 反腐模式：在现代应用程序和遗留系统之间实现装饰或适配器层","slug":"_2-反腐模式-在现代应用程序和遗留系统之间实现装饰或适配器层","link":"#_2-反腐模式-在现代应用程序和遗留系统之间实现装饰或适配器层","children":[]},{"level":3,"title":"3. 外部配置存储：将应用程序部署包中的配置信息移动到中心化的位置","slug":"_3-外部配置存储-将应用程序部署包中的配置信息移动到中心化的位置","link":"#_3-外部配置存储-将应用程序部署包中的配置信息移动到中心化的位置","children":[]},{"level":3,"title":"4. 网关聚合模式：使用网关将多个单独的请求聚合到一个请求中","slug":"_4-网关聚合模式-使用网关将多个单独的请求聚合到一个请求中","link":"#_4-网关聚合模式-使用网关将多个单独的请求聚合到一个请求中","children":[]},{"level":3,"title":"5. 网关卸压模式：把共享或特定的服务功能放到网关代理","slug":"_5-网关卸压模式-把共享或特定的服务功能放到网关代理","link":"#_5-网关卸压模式-把共享或特定的服务功能放到网关代理","children":[]},{"level":3,"title":"6. 网关路由模式：使用单个端点将请求路由到多个服务","slug":"_6-网关路由模式-使用单个端点将请求路由到多个服务","link":"#_6-网关路由模式-使用单个端点将请求路由到多个服务","children":[]},{"level":3,"title":"7. 健康端点监控模式：在应用程序中执行功能检查，外部工具可以定期通过暴露的端点访问","slug":"_7-健康端点监控模式-在应用程序中执行功能检查-外部工具可以定期通过暴露的端点访问","link":"#_7-健康端点监控模式-在应用程序中执行功能检查-外部工具可以定期通过暴露的端点访问","children":[]},{"level":3,"title":"8. 绞杀者模式：通过使用新的应用程序和服务逐渐替换特定功能部件来逐步迁移旧系统","slug":"_8-绞杀者模式-通过使用新的应用程序和服务逐渐替换特定功能部件来逐步迁移旧系统","link":"#_8-绞杀者模式-通过使用新的应用程序和服务逐渐替换特定功能部件来逐步迁移旧系统","children":[]}]},{"level":2,"title":"性能和可扩展性","slug":"性能和可扩展性","link":"#性能和可扩展性","children":[{"level":3,"title":"9. 缓存辅助模式：按需将数据从数据存储加载到缓存中","slug":"_9-缓存辅助模式-按需将数据从数据存储加载到缓存中","link":"#_9-缓存辅助模式-按需将数据从数据存储加载到缓存中","children":[]},{"level":3,"title":"10. 命令和查询责任分离模式：通过使用单独的接口来分离读取数据和更新数据的操作","slug":"_10-命令和查询责任分离模式-通过使用单独的接口来分离读取数据和更新数据的操作","link":"#_10-命令和查询责任分离模式-通过使用单独的接口来分离读取数据和更新数据的操作","children":[]},{"level":3,"title":"11. 事件溯源模式：使用仅追加存储去记录描述对域中的数据采取的操作的完整系列事件","slug":"_11-事件溯源模式-使用仅追加存储去记录描述对域中的数据采取的操作的完整系列事件","link":"#_11-事件溯源模式-使用仅追加存储去记录描述对域中的数据采取的操作的完整系列事件","children":[]},{"level":3,"title":"12. 物化视图模式：针对所需的查询操作，当数据没有理想地格式化时，在一个或多个数据存储中的数据上生成预填充视图","slug":"_12-物化视图模式-针对所需的查询操作-当数据没有理想地格式化时-在一个或多个数据存储中的数据上生成预填充视图","link":"#_12-物化视图模式-针对所需的查询操作-当数据没有理想地格式化时-在一个或多个数据存储中的数据上生成预填充视图","children":[]},{"level":3,"title":"13. 基于队列的负载均衡模式：使用一个队列作为任务和服务之间的缓冲区，平滑间歇性重负载","slug":"_13-基于队列的负载均衡模式-使用一个队列作为任务和服务之间的缓冲区-平滑间歇性重负载","link":"#_13-基于队列的负载均衡模式-使用一个队列作为任务和服务之间的缓冲区-平滑间歇性重负载","children":[]},{"level":3,"title":"14. 优先级队列模式：确定发送到服务的请求的优先级，使得具有较高优先级的请求更快地被接收和处理","slug":"_14-优先级队列模式-确定发送到服务的请求的优先级-使得具有较高优先级的请求更快地被接收和处理","link":"#_14-优先级队列模式-确定发送到服务的请求的优先级-使得具有较高优先级的请求更快地被接收和处理","children":[]},{"level":3,"title":"15. 限流模式：控制应用程序，个人租户或整个服务的实例消耗的资源","slug":"_15-限流模式-控制应用程序-个人租户或整个服务的实例消耗的资源","link":"#_15-限流模式-控制应用程序-个人租户或整个服务的实例消耗的资源","children":[]}]},{"level":2,"title":"数据管理模式","slug":"数据管理模式","link":"#数据管理模式","children":[{"level":3,"title":"16. 分片模式：将数据存储区划分为一组水平分区或分片","slug":"_16-分片模式-将数据存储区划分为一组水平分区或分片","link":"#_16-分片模式-将数据存储区划分为一组水平分区或分片","children":[]},{"level":3,"title":"17. 静态内容托管模式：将静态内容部署到基于云的存储服务，可以将它们直接传递给客户端","slug":"_17-静态内容托管模式-将静态内容部署到基于云的存储服务-可以将它们直接传递给客户端","link":"#_17-静态内容托管模式-将静态内容部署到基于云的存储服务-可以将它们直接传递给客户端","children":[]},{"level":3,"title":"18. 索引表模式：为查询经常引用的数据存储区中的字段创建索引","slug":"_18-索引表模式-为查询经常引用的数据存储区中的字段创建索引","link":"#_18-索引表模式-为查询经常引用的数据存储区中的字段创建索引","children":[]}]},{"level":2,"title":"设计和实现模式","slug":"设计和实现模式","link":"#设计和实现模式","children":[{"level":3,"title":"19. 前端专用的后端模式：通过使用单独的接口来分离读取数据和更新数据的操作","slug":"_19-前端专用的后端模式-通过使用单独的接口来分离读取数据和更新数据的操作","link":"#_19-前端专用的后端模式-通过使用单独的接口来分离读取数据和更新数据的操作","children":[]},{"level":3,"title":"20. 计算资源整合模式：将多个任务或操作整合到单个计算单元中","slug":"_20-计算资源整合模式-将多个任务或操作整合到单个计算单元中","link":"#_20-计算资源整合模式-将多个任务或操作整合到单个计算单元中","children":[]},{"level":3,"title":"21. 选举模式：通过选举一个实例作为负责管理其它实例的负责人，来协调分布式应用程序中的协作任务实例集合执行的操作","slug":"_21-选举模式-通过选举一个实例作为负责管理其它实例的负责人-来协调分布式应用程序中的协作任务实例集合执行的操作","link":"#_21-选举模式-通过选举一个实例作为负责管理其它实例的负责人-来协调分布式应用程序中的协作任务实例集合执行的操作","children":[]},{"level":3,"title":"22. 管道和过滤器模式：将需要执行复杂处理的任务分解成可以重复使用的一系列单独的元素","slug":"_22-管道和过滤器模式-将需要执行复杂处理的任务分解成可以重复使用的一系列单独的元素","link":"#_22-管道和过滤器模式-将需要执行复杂处理的任务分解成可以重复使用的一系列单独的元素","children":[]}]},{"level":2,"title":"消息模式","slug":"消息模式","link":"#消息模式","children":[{"level":3,"title":"23. 竞争消费者模式：使用多个并发消费者来处理在同一消息通道上接收的消息","slug":"_23-竞争消费者模式-使用多个并发消费者来处理在同一消息通道上接收的消息","link":"#_23-竞争消费者模式-使用多个并发消费者来处理在同一消息通道上接收的消息","children":[]},{"level":3,"title":"24. 重试模式：在应用程序尝试连接到服务或网络资源遇到预期的临时故障时，让程序通过透明地重试以前失败的操作来处理","slug":"_24-重试模式-在应用程序尝试连接到服务或网络资源遇到预期的临时故障时-让程序通过透明地重试以前失败的操作来处理","link":"#_24-重试模式-在应用程序尝试连接到服务或网络资源遇到预期的临时故障时-让程序通过透明地重试以前失败的操作来处理","children":[]},{"level":3,"title":"25. 调度、代理、主管模式：在一组分布式服务和其它远程资源之间协调一组操作","slug":"_25-调度、代理、主管模式-在一组分布式服务和其它远程资源之间协调一组操作","link":"#_25-调度、代理、主管模式-在一组分布式服务和其它远程资源之间协调一组操作","children":[]}]},{"level":2,"title":"弹性模式","slug":"弹性模式","link":"#弹性模式","children":[{"level":3,"title":"26. 舱壁模式：将应用程序的元素隔离到池中，如果其中一个失败，其它的将继续运行","slug":"_26-舱壁模式-将应用程序的元素隔离到池中-如果其中一个失败-其它的将继续运行","link":"#_26-舱壁模式-将应用程序的元素隔离到池中-如果其中一个失败-其它的将继续运行","children":[]},{"level":3,"title":"27. 断路器模式：连接到远程服务或资源时, 处理可能需要花费时间来修复的故障","slug":"_27-断路器模式-连接到远程服务或资源时-处理可能需要花费时间来修复的故障","link":"#_27-断路器模式-连接到远程服务或资源时-处理可能需要花费时间来修复的故障","children":[]},{"level":3,"title":"28. 事务补偿模式：撤消通过一系列步骤执行的工作，它们一起定义最终一致的操作","slug":"_28-事务补偿模式-撤消通过一系列步骤执行的工作-它们一起定义最终一致的操作","link":"#_28-事务补偿模式-撤消通过一系列步骤执行的工作-它们一起定义最终一致的操作","children":[]}]},{"level":2,"title":"安全模式","slug":"安全模式","link":"#安全模式","children":[{"level":3,"title":"29. 代客密钥模式：使用向客户端提供对特定资源或服务的有限直接访问权限的令牌或密钥","slug":"_29-代客密钥模式-使用向客户端提供对特定资源或服务的有限直接访问权限的令牌或密钥","link":"#_29-代客密钥模式-使用向客户端提供对特定资源或服务的有限直接访问权限的令牌或密钥","children":[]},{"level":3,"title":"30. 联合身份模式：将认证委托给外部身份提供者","slug":"_30-联合身份模式-将认证委托给外部身份提供者","link":"#_30-联合身份模式-将认证委托给外部身份提供者","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":36.57,"words":10970},"filePathRelative":"posts/Architect/base/arch-x-pattern-2.md","localizedDate":"2024年10月28日","excerpt":"\\n<blockquote>\\n<p>革命尚未成功，同志们还需努力。需要多揣摩揣摩</p>\\n</blockquote>\\n<blockquote>\\n<p>TIP</p>\\n<p>本文整理自<a href=\\"https://www.cnblogs.com/lovecindywang/p/9670356.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">朱晔的互联网架构实践心得</a>, 他是结合了 <strong>微软给出的云架构的一些模式</strong>的基础上加入他自己的理解来总结互联网架构中具体的一些模式。</p>\\n</blockquote>\\n<blockquote>\\n<p>朱晔：设计模式是前人通过大量的实践总结出来的一些经验总结和最佳实践。在经过多年的软件开发实践之后，回过头来去看23种设计模式你会发现很多平时写代码的套路和OO的套路和设计模式里总结的类似，这也说明了你悟到的东西和别人悟到的一样，经过大量实践总能趋向性得出一些最佳实践的结论。架构设计也是一样，这里结合自己的理解分析一下微软给出的云架构的一些模式。话说微软干这方面的事情真的很厉害，之前翻译过的《微软应用架构指南》写的也很不错。有了模式的好处是，技术人员和技术人员之间的对话可以毫不费力的通过几个模式关键词进行交流，就像现在大家沟通提到职责链模式，如果双方都理解这个模式的意义那么这五个字替代的可能就是半小时的解释。废话不多说，接下去来看一下这些其实已经很熟悉亲切的模式。</p>\\n</blockquote>","autoDesc":true}`);export{c as comp,h as data};