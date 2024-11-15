import{_ as e,c as t,a as i,o as s}from"./app-fWubcX7c.js";const p={};function l(r,a){return s(),t("div",null,a[0]||(a[0]=[i(`<h1 id="mybatis详解-二级缓存实现机制" tabindex="-1"><a class="header-anchor" href="#mybatis详解-二级缓存实现机制"><span>MyBatis详解 - 二级缓存实现机制</span></a></h1><blockquote><p>MyBatis的二级缓存是Application级别的缓存，它可以提高对数据库查询的效率，以提高应用的性能。</p></blockquote><h2 id="_1-mybatis二级缓存实现" tabindex="-1"><a class="header-anchor" href="#_1-mybatis二级缓存实现"><span>1. MyBatis二级缓存实现</span></a></h2><p>MyBatis的二级缓存是Application级别的缓存，它可以提高对数据库查询的效率，以提高应用的性能。</p><h3 id="_1-1-mybatis的缓存机制整体设计以及二级缓存的工作模式" tabindex="-1"><a class="header-anchor" href="#_1-1-mybatis的缓存机制整体设计以及二级缓存的工作模式"><span>1.1 MyBatis的缓存机制整体设计以及二级缓存的工作模式</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231546799.png" alt="image-20220730223727802" tabindex="0" loading="lazy"><figcaption>image-20220730223727802</figcaption></figure><p>如图所示，当开一个会话时，一个SqlSession对象会使用一个Executor对象来完成会话操作，MyBatis的二级缓存机制的关键就是对这个Executor对象做文章。如果用户配置了&quot;cacheEnabled=true&quot;，那么MyBatis在为SqlSession对象创建Executor对象时，会对Executor对象加上一个装饰者：CachingExecutor，这时SqlSession使用CachingExecutor对象来完成操作请求。CachingExecutor对于查询请求，会先判断该查询请求在Application级别的二级缓存中是否有缓存结果，如果有查询结果，则直接返回缓存结果；如果缓存中没有，再交给真正的Executor对象来完成查询操作，之后CachingExecutor会将真正Executor返回的查询结果放置到缓存中，然后在返回给用户。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231546840.png" alt="image-20220730223946842" tabindex="0" loading="lazy"><figcaption>image-20220730223946842</figcaption></figure><p>CachingExecutor是Executor的装饰者，以增强Executor的功能，使其具有缓存查询的功能，这里用到了设计模式中的装饰者模式，CachingExecutor和Executor的接口的关系如下类图所示：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231546872.png" alt="image-20220730224029324" tabindex="0" loading="lazy"><figcaption>image-20220730224029324</figcaption></figure><h3 id="_1-2-mybatis二级缓存的划分" tabindex="-1"><a class="header-anchor" href="#_1-2-mybatis二级缓存的划分"><span>1.2 MyBatis二级缓存的划分</span></a></h3><p>MyBatis并不是简单地对整个Application就只有一个Cache缓存对象，它将缓存划分的更细，即是Mapper级别的，即每一个Mapper都可以拥有一个Cache对象，具体如下：</p><ul><li><strong>为每一个Mapper分配一个Cache缓存对象</strong>（使用<code>&lt;cache&gt;</code>节点配置）</li></ul><p>MyBatis将Application级别的二级缓存细分到Mapper级别，即对于每一个Mapper.xml,如果在其中使用了<code>&lt;cache&gt;</code> 节点，则MyBatis会为这个Mapper创建一个Cache缓存对象，如下图所示：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231546905.png" alt="image-20220730224120468" tabindex="0" loading="lazy"><figcaption>image-20220730224120468</figcaption></figure><p>注：上述的每一个Cache对象，都会有一个自己所属的namespace命名空间，并且会将Mapper的 namespace作为它们的ID；</p><ul><li><strong>多个Mapper共用一个Cache缓存对象</strong>（使用<code>&lt;cache-ref&gt;</code>节点配置）</li></ul><p>如果你想让多个Mapper公用一个Cache的话，你可以使用<code>&lt;cache-ref namespace=&quot;&quot;&gt;</code>节点，来指定你的这个Mapper使用到了哪一个Mapper的Cache缓存。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231546935.png" alt="image-20220730224223709" tabindex="0" loading="lazy"><figcaption>image-20220730224223709</figcaption></figure><h3 id="_1-3-使用二级缓存-必须要具备的条件" tabindex="-1"><a class="header-anchor" href="#_1-3-使用二级缓存-必须要具备的条件"><span>1.3 使用二级缓存，必须要具备的条件</span></a></h3><p>MyBatis对二级缓存的支持粒度很细，它会指定某一条查询语句是否使用二级缓存。</p><p>虽然在Mapper中配置了<code>&lt;cache&gt;</code>,并且为此Mapper分配了Cache对象，这并不表示我们使用Mapper中定义的查询语句查到的结果都会放置到Cache对象之中，我们必须指定Mapper中的某条选择语句是否支持缓存，即如下所示，在<code>&lt;select&gt;</code> 节点中配置useCache=&quot;true&quot;，Mapper才会对此Select的查询支持缓存特性，否则，不会对此Select查询，不会经过Cache缓存。如下所示，Select语句配置了useCache=&quot;true&quot;，则表明这条Select语句的查询会使用二级缓存。</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">select</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;selectByMinSalary&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> resultMap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;BaseResultMap&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> parameterType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;java.util.Map&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> useCache</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>总之，要想使某条Select查询支持二级缓存，你需要保证：</p><ul><li>MyBatis支持二级缓存的总开关：全局配置变量参数 cacheEnabled=true</li><li>该select语句所在的Mapper，配置了<code>&lt;cache&gt;</code> 或<code>&lt;cached-ref&gt;</code>节点，并且有效</li><li>该select语句的参数 useCache=true</li></ul><h3 id="_1-4-一级缓存和二级缓存的使用顺序" tabindex="-1"><a class="header-anchor" href="#_1-4-一级缓存和二级缓存的使用顺序"><span>1.4 一级缓存和二级缓存的使用顺序</span></a></h3><p>请注意，如果你的MyBatis使用了二级缓存，并且你的Mapper和select语句也配置使用了二级缓存，那么在执行select查询的时候，MyBatis会先从二级缓存中取输入，其次才是一级缓存，即<strong>MyBatis查询数据的顺序是：二级缓存 ———&gt; 一级缓存 ——&gt; 数据库</strong>。</p><h3 id="_1-5-二级缓存实现的选择" tabindex="-1"><a class="header-anchor" href="#_1-5-二级缓存实现的选择"><span>1.5 二级缓存实现的选择</span></a></h3><p>MyBatis对二级缓存的设计非常灵活，它自己内部实现了一系列的Cache缓存实现类，并提供了各种缓存刷新策略如LRU，FIFO等等；另外，MyBatis还允许用户自定义Cache接口实现，用户是需要实现org.apache.ibatis.cache.Cache接口，然后将Cache实现类配置在<code>&lt;cache type=&quot;&quot;&gt;</code>节点的type属性上即可；除此之外，MyBatis还支持跟第三方内存缓存库如Memecached的集成，总之，使用MyBatis的二级缓存有三个选择:</p><ul><li>MyBatis自身提供的缓存实现；</li><li>用户自定义的Cache接口实现；</li><li>跟第三方内存缓存库的集成；</li></ul><h3 id="_1-6-mybatis自身提供的二级缓存的实现" tabindex="-1"><a class="header-anchor" href="#_1-6-mybatis自身提供的二级缓存的实现"><span>1.6 MyBatis自身提供的二级缓存的实现</span></a></h3><blockquote><p>MyBatis自身提供了丰富的，并且功能强大的二级缓存的实现，它拥有一系列的Cache接口装饰者，可以满足各种对缓存操作和更新的策略。</p></blockquote><p>MyBatis定义了大量的Cache的装饰器来增强Cache缓存的功能，如下类图所示。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231546972.png" alt="image-20220730224548219" tabindex="0" loading="lazy"><figcaption>image-20220730224548219</figcaption></figure><p>对于每个Cache而言，都有一个容量限制，MyBatis各供了各种策略来对Cache缓存的容量进行控制，以及对Cache中的数据进行刷新和置换。MyBatis主要提供了以下几个刷新和置换策略：</p><ul><li>LRU：（Least Recently Used）,最近最少使用算法，即如果缓存中容量已经满了，会将缓存中最近最少被使用的缓存记录清除掉，然后添加新的记录；</li><li>FIFO：（First in first out）,先进先出算法，如果缓存中的容量已经满了，那么会将最先进入缓存中的数据清除掉；</li><li>Scheduled：指定时间间隔清空算法，该算法会以指定的某一个时间间隔将Cache缓存中的数据清空；</li></ul><h2 id="_2-如何细粒度地控制你的mybatis二级缓存" tabindex="-1"><a class="header-anchor" href="#_2-如何细粒度地控制你的mybatis二级缓存"><span>2. 如何细粒度地控制你的MyBatis二级缓存</span></a></h2><h3 id="_2-1-一个关于mybatis的二级缓存的实际问题" tabindex="-1"><a class="header-anchor" href="#_2-1-一个关于mybatis的二级缓存的实际问题"><span>2.1 一个关于MyBatis的二级缓存的实际问题</span></a></h3><p>现有AMapper.xml中定义了对数据库表 ATable 的CRUD操作，BMapper定义了对数据库表BTable的CRUD操作；</p><p>假设 MyBatis 的二级缓存开启，并且 AMapper 中使用了二级缓存，AMapper对应的二级缓存为ACache；</p><p>除此之外，AMapper 中还定义了一个跟BTable有关的查询语句，类似如下所述：</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">select</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;selectATableWithJoin&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> resultMap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;BaseResultMap&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> useCache</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      select * from ATable left join BTable on ....  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>执行以下操作：</p><ul><li>执行AMapper中的&quot;selectATableWithJoin&quot; 操作，此时会将查询到的结果放置到AMapper对应的二级缓存ACache中；</li><li>执行BMapper中对BTable的更新操作(update、delete、insert)后，BTable的数据更新；</li><li>再执行1完全相同的查询，这时候会直接从AMapper二级缓存ACache中取值，将ACache中的值直接返回；</li></ul><p>好，<strong>问题就出现在第3步</strong>上：</p><p>由于AMapper的“selectATableWithJoin” 对应的SQL语句需要和BTable进行join查找，而在第 2 步BTable的数据已经更新了，但是第 3 步查询的值是第 1 步的缓存值，已经极有可能跟真实数据库结果不一样，即ACache中缓存数据过期了！</p><p>总结来看，就是：</p><p>对于某些使用了 join连接的查询，如果其关联的表数据发生了更新，join连接的查询由于先前缓存的原因，导致查询结果和真实数据不同步；</p><p>从MyBatis的角度来看，这个问题可以这样表述：</p><p><strong>对于某些表执行了更新(update、delete、insert)操作后，如何去清空跟这些表有关联的查询语句所造成的缓存</strong></p><h3 id="_2-2-当前mybatis二级缓存的工作机制" tabindex="-1"><a class="header-anchor" href="#_2-2-当前mybatis二级缓存的工作机制"><span>2.2 当前MyBatis二级缓存的工作机制</span></a></h3><blockquote><p>MyBatis二级缓存的一个重要特点：即松散的Cache缓存管理和维护</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231546006.png" alt="image-20220730224933178" tabindex="0" loading="lazy"><figcaption>image-20220730224933178</figcaption></figure><p>一个Mapper中定义的增删改查操作只能影响到自己关联的Cache对象。如上图所示的Mapper namespace1中定义的若干CRUD语句，产生的缓存只会被放置到相应关联的Cache1中，即Mapper namespace2,namespace3,namespace4 中的CRUD的语句不会影响到Cache1。</p><p>可以看出，<strong>Mapper之间的缓存关系比较松散，相互关联的程度比较弱</strong>。</p><p>现在再回到上面描述的问题，如果我们将AMapper和BMapper共用一个Cache对象，那么，当BMapper执行更新操作时，可以清空对应Cache中的所有的缓存数据，这样的话，数据不是也可以保持最新吗？</p><p>确实这个也是一种解决方案，不过，它会使缓存的使用效率变的很低！AMapper和BMapper的任意的更新操作都会将共用的Cache清空，会频繁地清空Cache，导致Cache实际的命中率和使用率就变得很低了，所以这种策略实际情况下是不可取的。</p><p>最理想的解决方案就是：</p><p><strong>对于某些表执行了更新(update、delete、insert)操作后，去清空跟这些指定的表有关联的查询语句所造成的缓存</strong>; 这样，就是以很细的粒度管理MyBatis内部的缓存，使得缓存的使用率和准确率都能大大地提升。</p><blockquote><p>这也太累了吧，难怪这么多人不用二级缓存</p></blockquote><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/framework/orm-mybatis/mybatis-y-cache-level2.html" target="_blank" rel="noopener noreferrer"><strong>MyBatis详解 - 二级缓存实现机制</strong></a></p>`,62)]))}const n=e(p,[["render",l],["__file","mybatis-y-cache-level2.html.vue"]]),o=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/mybatis/mybatis-y-cache-level2.html","title":"MyBatis详解 - 二级缓存实现机制","lang":"zh-CN","frontmatter":{"order":130,"category":["MyBatis"],"description":"MyBatis详解 - 二级缓存实现机制 MyBatis的二级缓存是Application级别的缓存，它可以提高对数据库查询的效率，以提高应用的性能。 1. MyBatis二级缓存实现 MyBatis的二级缓存是Application级别的缓存，它可以提高对数据库查询的效率，以提高应用的性能。 1.1 MyBatis的缓存机制整体设计以及二级缓存的工作...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/mybatis/mybatis-y-cache-level2.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"MyBatis详解 - 二级缓存实现机制"}],["meta",{"property":"og:description","content":"MyBatis详解 - 二级缓存实现机制 MyBatis的二级缓存是Application级别的缓存，它可以提高对数据库查询的效率，以提高应用的性能。 1. MyBatis二级缓存实现 MyBatis的二级缓存是Application级别的缓存，它可以提高对数据库查询的效率，以提高应用的性能。 1.1 MyBatis的缓存机制整体设计以及二级缓存的工作..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231546799.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MyBatis详解 - 二级缓存实现机制\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231546799.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231546840.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231546872.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231546905.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231546935.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231546972.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231546006.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. MyBatis二级缓存实现","slug":"_1-mybatis二级缓存实现","link":"#_1-mybatis二级缓存实现","children":[{"level":3,"title":"1.1 MyBatis的缓存机制整体设计以及二级缓存的工作模式","slug":"_1-1-mybatis的缓存机制整体设计以及二级缓存的工作模式","link":"#_1-1-mybatis的缓存机制整体设计以及二级缓存的工作模式","children":[]},{"level":3,"title":"1.2 MyBatis二级缓存的划分","slug":"_1-2-mybatis二级缓存的划分","link":"#_1-2-mybatis二级缓存的划分","children":[]},{"level":3,"title":"1.3 使用二级缓存，必须要具备的条件","slug":"_1-3-使用二级缓存-必须要具备的条件","link":"#_1-3-使用二级缓存-必须要具备的条件","children":[]},{"level":3,"title":"1.4 一级缓存和二级缓存的使用顺序","slug":"_1-4-一级缓存和二级缓存的使用顺序","link":"#_1-4-一级缓存和二级缓存的使用顺序","children":[]},{"level":3,"title":"1.5 二级缓存实现的选择","slug":"_1-5-二级缓存实现的选择","link":"#_1-5-二级缓存实现的选择","children":[]},{"level":3,"title":"1.6 MyBatis自身提供的二级缓存的实现","slug":"_1-6-mybatis自身提供的二级缓存的实现","link":"#_1-6-mybatis自身提供的二级缓存的实现","children":[]}]},{"level":2,"title":"2. 如何细粒度地控制你的MyBatis二级缓存","slug":"_2-如何细粒度地控制你的mybatis二级缓存","link":"#_2-如何细粒度地控制你的mybatis二级缓存","children":[{"level":3,"title":"2.1 一个关于MyBatis的二级缓存的实际问题","slug":"_2-1-一个关于mybatis的二级缓存的实际问题","link":"#_2-1-一个关于mybatis的二级缓存的实际问题","children":[]},{"level":3,"title":"2.2 当前MyBatis二级缓存的工作机制","slug":"_2-2-当前mybatis二级缓存的工作机制","link":"#_2-2-当前mybatis二级缓存的工作机制","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":7.85,"words":2356},"filePathRelative":"posts/Java/Java第三方依赖/mybatis/mybatis-y-cache-level2.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>MyBatis的二级缓存是Application级别的缓存，它可以提高对数据库查询的效率，以提高应用的性能。</p>\\n</blockquote>\\n<h2>1. MyBatis二级缓存实现</h2>\\n<p>MyBatis的二级缓存是Application级别的缓存，它可以提高对数据库查询的效率，以提高应用的性能。</p>\\n<h3>1.1 MyBatis的缓存机制整体设计以及二级缓存的工作模式</h3>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231546799.png\\" alt=\\"image-20220730223727802\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220730223727802</figcaption></figure>","autoDesc":true}');export{n as comp,o as data};
