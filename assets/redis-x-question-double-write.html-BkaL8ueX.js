import{_ as r,c as t,a as n,o as a}from"./app-JRvFIbSa.js";const s={};function i(o,e){return a(),t("div",null,e[0]||(e[0]=[n(`<h1 id="redis保证缓存与数据库双写时的数据一致性" tabindex="-1"><a class="header-anchor" href="#redis保证缓存与数据库双写时的数据一致性"><span>Redis保证缓存与数据库双写时的数据一致性</span></a></h1><h2 id="_1-引言" tabindex="-1"><a class="header-anchor" href="#_1-引言"><span>1.引言</span></a></h2><ul><li>在读取缓存方面的方案流程图</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131024116.png" alt="image-20191008234809789" tabindex="0" loading="lazy"><figcaption>image-20191008234809789</figcaption></figure><ul><li><p>更新缓存方面</p><p>对于更新完数据库，是更新缓存，还是删除缓存，又或者是先删除缓存，再更新数据库，其实大家存在很大的争议。</p></li></ul><h2 id="_2-三种更新策略" tabindex="-1"><a class="header-anchor" href="#_2-三种更新策略"><span>2. 三种更新策略</span></a></h2><ol><li>先更新数据库，再更新缓存</li><li>先删除缓存，再更新数据库</li><li><strong>先更新数据库，再删除缓存</strong>（推荐）</li></ol><h3 id="_2-1-先更新数据库-再更新缓存" tabindex="-1"><a class="header-anchor" href="#_2-1-先更新数据库-再更新缓存"><span>2.1 先更新数据库，再更新缓存</span></a></h3><p>这套方案，大家是普遍反对的。为什么呢？有如下两点原因。</p><p><strong>原因1：（线程安全角度）</strong></p><p>同时有请求A和请求B进行更新操作，那么会出现<br> （1）线程A更新了数据库<br> （2）线程B更新了数据库<br> （3）线程B更新了缓存<br> （4）线程A更新了缓存<br> 这就出现请求A更新缓存应该比请求B更新缓存早才对，但是因为网络等原因，B却比A更早更新了缓存。这就导致了脏数据，因此不考虑。</p><p><strong>原因二（业务场景角度）</strong><br> 有如下两点：<br> （1）如果你是一个写数据库场景比较多，而读数据场景比较少的业务需求，采用这种方案就会导致，数据压根还没读到，缓存就被频繁的更新，浪费性能。<br> （2）如果你写入数据库的值，并不是直接写入缓存的，而是要经过一系列复杂的计算再写入缓存。那么，每次写入数据库后，都再次计算写入缓存的值，无疑是浪费性能的。显然，删除缓存更为适合。</p><h3 id="_2-2-先删缓存-在更新数据库-争议最大" tabindex="-1"><a class="header-anchor" href="#_2-2-先删缓存-在更新数据库-争议最大"><span>2.2 先删缓存，在更新数据库（争议最大）</span></a></h3><p>）请求A进行写操作，删除缓存<br> （2）请求B查询发现缓存不存在<br> （3）请求B去数据库查询得到旧值<br> （4）请求B将旧值写入缓存<br> （5）请求A将新值写入数据库<br> 上述情况就会导致不一致的情形出现。而且，如果不采用给缓存设置过期时间策略，该数据永远都是脏数据。<br> 那么，<strong>如何解决呢？采用延时双删策略</strong><br> 伪代码如下</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>public void write(String key,Object data){</span></span>
<span class="line"><span>        redis.delKey(key);</span></span>
<span class="line"><span>        db.updateData(data);</span></span>
<span class="line"><span>        Thread.sleep(1000);</span></span>
<span class="line"><span>        redis.delKey(key);</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>转化为中文描述就是<br> （1）先淘汰缓存<br> （2）再写数据库（这两步和原来一样）<br> （3）休眠1秒，再次淘汰缓存<br> 这么做，可以将1秒内所造成的缓存脏数据，再次删除。<br><strong>那么，这个1秒怎么确定的，具体该休眠多久呢？</strong><br> 针对上面的情形，读者应该自行评估自己的项目的读数据业务逻辑的耗时。然后写数据的休眠时间则在读数据业务逻辑的耗时基础上，加几百ms即可。这么做的目的，就是确保读请求结束，写请求可以删除读请求造成的缓存脏数据。<br><strong>如果你用了mysql的读写分离架构怎么办？</strong><br> ok，在这种情况下，造成数据不一致的原因如下，还是两个请求，一个请求A进行更新操作，另一个请求B进行查询操作。<br> （1）请求A进行写操作，删除缓存<br> （2）请求A将数据写入数据库了，<br> （3）请求B查询缓存发现，缓存没有值<br> （4）请求B去从库查询，这时，还没有完成主从同步，因此查询到的是旧值<br> （5）请求B将旧值写入缓存<br> （6）数据库完成主从同步，从库变为新值<br> 上述情形，就是数据不一致的原因。还是使用双删延时策略。只是，睡眠时间修改为在主从同步的延时时间基础上，加几百ms。<br><strong>采用这种同步淘汰策略，吞吐量降低怎么办？</strong><br> ok，那就将第二次删除作为异步的。自己起一个线程，异步删除。这样，写的请求就不用沉睡一段时间后了，再返回。这么做，加大吞吐量。<br><strong>第二次删除,如果删除失败怎么办？</strong><br> 这是个非常好的问题，因为第二次删除失败，就会出现如下情形。还是有两个请求，一个请求A进行更新操作，另一个请求B进行查询操作，为了方便，假设是单库：<br> （1）请求A进行写操作，删除缓存<br> （2）请求B查询发现缓存不存在<br> （3）请求B去数据库查询得到旧值<br> （4）请求B将旧值写入缓存<br> （5）请求A将新值写入数据库<br> （6）请求A试图去删除请求B写入对缓存值，结果失败了。<br> ok,这也就是说。如果第二次删除缓存失败，会再次出现缓存和数据库不一致的问题。<br><strong>如何解决呢？</strong><br> 具体解决方案，且看博主对第(3)种更新策略的解析。</p><h3 id="_2-3-先更新数据库-再删除缓存" tabindex="-1"><a class="header-anchor" href="#_2-3-先更新数据库-再删除缓存"><span>2.3 先更新数据库，再删除缓存</span></a></h3><p>首先，先说一下。老外提出了一个缓存更新套路，名为<a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/cache-aside" target="_blank" rel="noopener noreferrer">《Cache-Aside pattern》</a>。其中就指出</p><ul><li><strong>失效</strong>：应用程序先从cache取数据，没有得到，则从数据库中取数据，成功后，放到缓存中。</li><li><strong>命中</strong>：应用程序从cache中取数据，取到后返回。</li><li><strong>更新</strong>：先把数据存到数据库中，成功后，再让缓存失效。</li></ul><p><strong>这种情况不存在并发问题么？</strong><br> 不是的。假设这会有两个请求，一个请求A做查询操作，一个请求B做更新操作，那么会有如下情形产生<br> （1）缓存刚好失效<br> （2）请求A查询数据库，得一个旧值<br> （3）请求B将新值写入数据库<br> （4）请求B删除缓存<br> （5）请求A将查到的旧值写入缓存<br> ok，如果发生上述情况，确实是会发生脏数据。<br><strong>然而，发生这种情况的概率又有多少呢？</strong><br> 发生上述情况有一个先天性条件，就是步骤（3）的写数据库操作比步骤（2）的读数据库操作耗时更短，才有可能使得步骤（4）先于步骤（5）。可是，大家想想，数据库的读操作的速度远快于写操作的（不然做读写分离干嘛，做读写分离的意义就是因为读操作比较快，耗资源少），因此步骤（3）耗时比步骤（2）更短，这一情形很难出现。<br> 假设，有人非要抬杠，有强迫症，一定要解决怎么办？<br><strong>如何解决上述并发问题？</strong><br> 首先，给缓存设有效时间是一种方案。其次，采用策略（2）里给出的异步延时删除策略，保证读请求完成以后，再进行删除操作。<br><strong>还有其他造成不一致的原因么？</strong><br> 有的，这也是缓存更新策略（2）和缓存更新策略（3）都存在的一个问题，如果删缓存失败了怎么办，那不是会有不一致的情况出现么。比如一个写数据请求，然后写入数据库了，删缓存失败了，这会就出现不一致的情况了。这也是缓存更新策略（2）里留下的最后一个疑问。<br><strong>如何解决？</strong><br> 提供一个保障的重试机制即可，这里给出两套方案。<br><strong>方案一</strong>：<br> 如下图所示</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131024168.png" alt="image-20191008235658639" tabindex="0" loading="lazy"><figcaption>image-20191008235658639</figcaption></figure><p>流程如下所示<br> （1）更新数据库数据；<br> （2）缓存因为种种问题删除失败<br> （3）将需要删除的key发送至消息队列<br> （4）自己消费消息，获得需要删除的key<br> （5）继续重试删除操作，直到成功<br> 然而，该方案有一个缺点，对业务线代码造成大量的侵入。于是有了方案二，在方案二中，启动一个订阅程序去订阅数据库的binlog，获得需要操作的数据。在应用程序中，另起一段程序，获得这个订阅程序传来的信息，进行删除缓存操作。<br><strong>方案二</strong>：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131024202.png" alt="image-20191008235715281" tabindex="0" loading="lazy"><figcaption>image-20191008235715281</figcaption></figure><p>流程如下图所示：<br> （1）更新数据库数据<br> （2）数据库会将操作信息写入binlog日志当中<br> （3）订阅程序提取出所需要的数据以及key<br> （4）另起一段非业务代码，获得该信息<br> （5）尝试删除缓存操作，发现删除失败<br> （6）将这些信息发送至消息队列<br> （7）重新从消息队列中获得该数据，重试操作。</p>`,24)]))}const p=r(s,[["render",i],["__file","redis-x-question-double-write.html.vue"]]),g=JSON.parse('{"path":"/posts/Redis/redis-x-question-double-write.html","title":"Redis保证缓存与数据库双写时的数据一致性","lang":"zh-CN","frontmatter":{"aliases":"Redis保证缓存与数据库双写时的数据一致性","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:24","description":"Redis保证缓存与数据库双写时的数据一致性 1.引言 在读取缓存方面的方案流程图 image-20191008234809789image-20191008234809789 更新缓存方面 对于更新完数据库，是更新缓存，还是删除缓存，又或者是先删除缓存，再更新数据库，其实大家存在很大的争议。 2. 三种更新策略 先更新数据库，再更新缓存 先删除缓存，...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Redis/redis-x-question-double-write.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis保证缓存与数据库双写时的数据一致性"}],["meta",{"property":"og:description","content":"Redis保证缓存与数据库双写时的数据一致性 1.引言 在读取缓存方面的方案流程图 image-20191008234809789image-20191008234809789 更新缓存方面 对于更新完数据库，是更新缓存，还是删除缓存，又或者是先删除缓存，再更新数据库，其实大家存在很大的争议。 2. 三种更新策略 先更新数据库，再更新缓存 先删除缓存，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131024116.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis保证缓存与数据库双写时的数据一致性\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131024116.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131024168.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131024202.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1.引言","slug":"_1-引言","link":"#_1-引言","children":[]},{"level":2,"title":"2. 三种更新策略","slug":"_2-三种更新策略","link":"#_2-三种更新策略","children":[{"level":3,"title":"2.1 先更新数据库，再更新缓存","slug":"_2-1-先更新数据库-再更新缓存","link":"#_2-1-先更新数据库-再更新缓存","children":[]},{"level":3,"title":"2.2 先删缓存，在更新数据库（争议最大）","slug":"_2-2-先删缓存-在更新数据库-争议最大","link":"#_2-2-先删缓存-在更新数据库-争议最大","children":[]},{"level":3,"title":"2.3 先更新数据库，再删除缓存","slug":"_2-3-先更新数据库-再删除缓存","link":"#_2-3-先更新数据库-再删除缓存","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":7.42,"words":2227},"filePathRelative":"posts/Redis/redis-x-question-double-write.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1.引言</h2>\\n<ul>\\n<li>在读取缓存方面的方案流程图</li>\\n</ul>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131024116.png\\" alt=\\"image-20191008234809789\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20191008234809789</figcaption></figure>\\n<ul>\\n<li>\\n<p>更新缓存方面</p>\\n<p>对于更新完数据库，是更新缓存，还是删除缓存，又或者是先删除缓存，再更新数据库，其实大家存在很大的争议。</p>\\n</li>\\n</ul>","autoDesc":true}');export{p as comp,g as data};
