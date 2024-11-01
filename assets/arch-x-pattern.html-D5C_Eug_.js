import{_ as a,c as t,a as n,o as r}from"./app-tJW29Kmg.js";const l={};function p(i,e){return r(),t("div",null,e[0]||(e[0]=[n('<h1 id="架构-理解架构的模式1" tabindex="-1"><a class="header-anchor" href="#架构-理解架构的模式1"><span>架构-理解架构的模式1</span></a></h1><blockquote><p>架构演进中有很多知识点，总体上可以归结为以下模式，<strong>这里说的模式本质是架构中技术点的抽象</strong>。</p></blockquote><h2 id="_1-架构的模式" tabindex="-1"><a class="header-anchor" href="#_1-架构的模式"><span>1. 架构的模式</span></a></h2><p>每一个模式描述了一个在我们周围不断重复发生的问题及该问题解决方案的核心。这样，你就能一次又一次地使用该方案而不必做重复工作。</p><p>所谓网站架构模式即为了解决大型网站面临的高并发访问、海量数据、高可靠运行等一系列问题与挑战。为此，在实践中提出了许多解决方案，以实现网站高性能、高可靠性、易伸缩、可扩展、安全等各种技术架构目标。</p><h3 id="_1-1-分层" tabindex="-1"><a class="header-anchor" href="#_1-1-分层"><span>1.1 分层</span></a></h3><p>分层是企业应用系统中最常见的一种架构模式，将系统在横向维度上切分成几个部分，每个部分负责一部分相对简单并比较单一的职责，然后通过上层对下层的依赖和调度组成一个完整的系统。</p><p>在网站的分层架构中，常见的为3层，即<code>应用层</code>、<code>服务层</code>、<code>数据层</code>:</p><ul><li>应用层具体负责业务和视图的展示；</li><li>服务层为应用层提供服务支持；</li><li>数据库提供数据存储访问服务，如数据库、缓存、文件、搜索引擎等。</li></ul><p>分层架构是逻辑上的，在物理部署上，三层架构可以部署在同一个物理机器上，但是随着网站业务的发展，必然需要对已经分层的模块分离部署，即三层结构分别部署在不同的服务器上，是网站拥有更多的计算资源以应对越来越多的用户访问。</p><p>所以虽然分层架构模式最初的目的是规划软件清晰的逻辑结构以便于开发维护，但在网站的发展过程中，分层结构对网站支持高并发向分布式方向的发展至关重要。</p><h3 id="_1-2-分隔" tabindex="-1"><a class="header-anchor" href="#_1-2-分隔"><span>1.2 分隔</span></a></h3><p>如果说分层是将软件在横向方面进行切分，那么分隔就是在纵向方面对软件进行切分。</p><p>网站越大，功能越复杂，服务和数据处理的种类也越多，将这些不同的功能和服务分隔开来，包装成高内聚低耦合的模块单元，不仅有助于软件的开发维护也便于不同模块的分布式部署，提高网站的并发处理能力和功能扩展能力。</p><p>大型网站分隔的粒度可能会很小。比如在应用层，将不同业务进行分隔，例如将购物、论坛、搜索、广告分隔成不同的应用，有对立的团队负责，部署在不同的服务器上。</p><h3 id="_1-3-分布式" tabindex="-1"><a class="header-anchor" href="#_1-3-分布式"><span>1.3 分布式</span></a></h3><p>对于大型网站，分层和分隔的一个主要目的是为了切分后的模块便于分布式部署，即将不同模块部署在不同的服务器上，通过远程调用协同工作。分布式意味着可以使用更多的计算机完同样的工作，计算机越多，CPU、内存、存储资源就越多，能过处理的并发访问和数据量就越大，进而能够为更多的用户提供服务。</p><p>在网站应用中，常用的分布式方案有一下几种.</p><ul><li><code>分布式应用和服务</code>：将分层和分隔后的应用和服务模块分布式部署，可以改善网站性能和并发性、加快开发和发布速度、减少数据库连接资源消耗。</li><li><code>分布式静态资源</code>：网站的静态资源如JS、CSS、Logo图片等资源对立分布式部署，并采用独立的域名，即人们常说的动静分离。静态资源分布式部署可以减轻应用服务器的负载压力；通过使用独立域名加快浏览器并发加载的速度。</li><li><code>分布式数据和存储</code>：大型网站需要处理以P为单位的海量数据，单台计算机无法提供如此大的存储空间，这些数据库需要分布式存储。</li><li><code>分布式计算</code>：目前网站普遍使用Hadoop和MapReduce分布式计算框架进行此类批处理计算，其特点是移动计算而不是移动数据，将计算程序分发到数据所在的位置以加速计算和分布式计算。</li></ul><h3 id="_1-4-集群" tabindex="-1"><a class="header-anchor" href="#_1-4-集群"><span>1.4 集群</span></a></h3><p>对于用户访问集中的模块需要将独立部署的服务器集群化，即多台服务器部署相同的应用构成一个集群，通过负载均衡设备共同对外提供服务。</p><p>服务器集群能够为相同的服务提供更多的并发支持，因此当有更多的用户访问时，只需要向集群中加入新的机器即可；另外可以实现当其中的某台服务器发生故障时，可以通过负载均衡的失效转移机制将请求转移至集群中其他的服务器上，因此可以提高系统的可用性。</p><h3 id="_1-5-缓存" tabindex="-1"><a class="header-anchor" href="#_1-5-缓存"><span>1.5 缓存</span></a></h3><p>缓存目的就是减轻服务器的计算，使数据直接返回给用户。在现在的软件设计中，缓存已经无处不在。具体实现有CDN、反向代理、本地缓存、分布式缓存等。</p><p>使用缓存有两个条件：访问数据热点不均衡，即某些频繁访问的数据需要放在缓存中；数据在某个时间段内有效，不过很快过期，否则会因为数据过期而脏读，影响数据的正确性。</p><h3 id="_1-6-异步" tabindex="-1"><a class="header-anchor" href="#_1-6-异步"><span>1.6 异步</span></a></h3><p>使用异步，业务之间的消息传递不是同步调用，而是将一个业务操作分成多个阶段，每个阶段之间通过共享数据的方法异步执行进行协作。</p><p>具体实现则在单一服务器内部可用通过多线程共享内存对了的方式处理；在分布式系统中可用通过分布式消息队列来实现异步。</p><p>异步架构的典型就是生产者消费者方式，两者不存在直接调用。</p><h3 id="_1-7-冗余" tabindex="-1"><a class="header-anchor" href="#_1-7-冗余"><span>1.7 冗余</span></a></h3><p>网站需要7×24小时连续运行，那么就得有相应的冗余机制，以防某台机器宕掉时无法访问，而冗余则可以通过部署至少两台服务器构成一个集群实现服务高可用。数据库除了定期备份还需要实现冷热备份。甚至可以在全球范围内部署灾备数据中心。</p><h3 id="_1-8-自动化" tabindex="-1"><a class="header-anchor" href="#_1-8-自动化"><span>1.8 自动化</span></a></h3><p>具体有自动化发布过程，自动化代码管理、自动化测试、自动化安全检测、自动化部署、自动化监控、自动化报警、自动化失效转移、自动化失效恢复等。</p><h3 id="_1-9-安全" tabindex="-1"><a class="header-anchor" href="#_1-9-安全"><span>1.9 安全</span></a></h3><p>网站在安全架构方面有许多模式：通过密码和手机校验码进行身份认证；登录、交易需要对网络通信进行加密；为了防止机器人程序滥用资源，需要使用验证码进行识别；对常见的XSS攻击、SQL注入需要编码转换；垃圾信息需要过滤等。</p><h3 id="_1-10-敏捷性" tabindex="-1"><a class="header-anchor" href="#_1-10-敏捷性"><span>1.10 敏捷性</span></a></h3><p>积极接受需求变更，快速响应业务发展需求。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/arch/arch-x-pattern.html" target="_blank" rel="noopener noreferrer"><strong>架构 - 理解架构的模式1</strong></a></p>',39)]))}const s=a(l,[["render",p],["__file","arch-x-pattern.html.vue"]]),c=JSON.parse('{"path":"/posts/Architect/base/arch-x-pattern.html","title":"架构-理解架构的模式1","lang":"zh-CN","frontmatter":{"order":41,"category":["架构"],"description":"架构-理解架构的模式1 架构演进中有很多知识点，总体上可以归结为以下模式，这里说的模式本质是架构中技术点的抽象。 1. 架构的模式 每一个模式描述了一个在我们周围不断重复发生的问题及该问题解决方案的核心。这样，你就能一次又一次地使用该方案而不必做重复工作。 所谓网站架构模式即为了解决大型网站面临的高并发访问、海量数据、高可靠运行等一系列问题与挑战。为此...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/base/arch-x-pattern.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"架构-理解架构的模式1"}],["meta",{"property":"og:description","content":"架构-理解架构的模式1 架构演进中有很多知识点，总体上可以归结为以下模式，这里说的模式本质是架构中技术点的抽象。 1. 架构的模式 每一个模式描述了一个在我们周围不断重复发生的问题及该问题解决方案的核心。这样，你就能一次又一次地使用该方案而不必做重复工作。 所谓网站架构模式即为了解决大型网站面临的高并发访问、海量数据、高可靠运行等一系列问题与挑战。为此..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"架构-理解架构的模式1\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 架构的模式","slug":"_1-架构的模式","link":"#_1-架构的模式","children":[{"level":3,"title":"1.1 分层","slug":"_1-1-分层","link":"#_1-1-分层","children":[]},{"level":3,"title":"1.2 分隔","slug":"_1-2-分隔","link":"#_1-2-分隔","children":[]},{"level":3,"title":"1.3 分布式","slug":"_1-3-分布式","link":"#_1-3-分布式","children":[]},{"level":3,"title":"1.4 集群","slug":"_1-4-集群","link":"#_1-4-集群","children":[]},{"level":3,"title":"1.5 缓存","slug":"_1-5-缓存","link":"#_1-5-缓存","children":[]},{"level":3,"title":"1.6 异步","slug":"_1-6-异步","link":"#_1-6-异步","children":[]},{"level":3,"title":"1.7 冗余","slug":"_1-7-冗余","link":"#_1-7-冗余","children":[]},{"level":3,"title":"1.8 自动化","slug":"_1-8-自动化","link":"#_1-8-自动化","children":[]},{"level":3,"title":"1.9 安全","slug":"_1-9-安全","link":"#_1-9-安全","children":[]},{"level":3,"title":"1.10 敏捷性","slug":"_1-10-敏捷性","link":"#_1-10-敏捷性","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.42,"words":1925},"filePathRelative":"posts/Architect/base/arch-x-pattern.md","localizedDate":"2024年10月28日","excerpt":"\\n<blockquote>\\n<p>架构演进中有很多知识点，总体上可以归结为以下模式，<strong>这里说的模式本质是架构中技术点的抽象</strong>。</p>\\n</blockquote>\\n<h2>1. 架构的模式</h2>\\n<p>每一个模式描述了一个在我们周围不断重复发生的问题及该问题解决方案的核心。这样，你就能一次又一次地使用该方案而不必做重复工作。</p>\\n<p>所谓网站架构模式即为了解决大型网站面临的高并发访问、海量数据、高可靠运行等一系列问题与挑战。为此，在实践中提出了许多解决方案，以实现网站高性能、高可靠性、易伸缩、可扩展、安全等各种技术架构目标。</p>\\n<h3>1.1 分层</h3>","autoDesc":true}');export{s as comp,c as data};
