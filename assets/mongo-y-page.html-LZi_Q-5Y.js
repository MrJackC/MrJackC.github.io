import{_ as a,c as t,a as p,o as g}from"./app-CpAF2rca.js";const l={};function n(o,e){return g(),t("div",null,e[0]||(e[0]=[p('<h1 id="mongo进阶-wt引擎-page生命周期" tabindex="-1"><a class="header-anchor" href="#mongo进阶-wt引擎-page生命周期"><span>Mongo进阶 - WT引擎：Page生命周期</span></a></h1><blockquote><p>通过前文我们了解到数据以page为单位加载到cache; 有必要系统的分析一页page的生命周期、状态以及相关参数的配置，这对后续MongoDB的性能调优和故障问题的定位和解决有帮助。</p></blockquote><h2 id="_1-为什么要了解page生命周期" tabindex="-1"><a class="header-anchor" href="#_1-为什么要了解page生命周期"><span>1. 为什么要了解Page生命周期</span></a></h2><p>通过前文我们了解到数据以page为单位加载到cache、cache里面又会生成各种不同类型的page及为不同类型的page分配不同大小的内存、eviction触发机制和reconcile动作都发生在page上、page大小持续增加时会被分割成多个小page，所有这些操作都是围绕一个page来完成的。</p><p>因此，有必要系统的分析一页page的生命周期、状态以及相关参数的配置，这对后续MongoDB的性能调优和故障问题的定位和解决有帮助。</p><h2 id="_2-page的生命周期" tabindex="-1"><a class="header-anchor" href="#_2-page的生命周期"><span>2. Page的生命周期</span></a></h2><p>Page的典型生命周期如下图所示：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130833464.png" alt="image-20230112214945444" tabindex="0" loading="lazy"><figcaption>image-20230112214945444</figcaption></figure><ul><li>第一步：pages从磁盘读到内存；</li><li>第二步：pages在内存中被修改；</li><li>第三步：被修改的脏pages在内存被reconcile，完成后将discard这些pages。</li><li>第四步：pages被选中，加入淘汰队列，等待被evict线程淘汰出内存；</li><li>第五步：evict线程会将“干净“的pages直接从内存丢弃（因为相对于磁盘page来说没做任何修改），将经过reconcile处理后的磁盘映像写到磁盘再丢弃“脏的”pages。</li></ul><p>pages的状态是在不断变化的，因此，对于读操作来说，它首先会检查pages的状态是否为<code>WT_REF_MEM</code>，然后设置一个hazard指针指向要读的pages，如果刷新后，pages的状态仍为WT_REF_MEM，读操作才能继续处理。</p><p>与此同时，evict线程想要淘汰pages时，它会先锁住pages，即将pages的状态设为<code>WT_REF_LOCKED</code>，然后检查pages上是否有读操作设置的hazard指针，如有，说明还有线程正在读这个page则停止evict，重新将page的状态设置为<code>WT_REF_MEM</code>；如果没有，则pages被淘汰出去。</p><h2 id="_3-page的各种状态" tabindex="-1"><a class="header-anchor" href="#_3-page的各种状态"><span>3. Page的各种状态</span></a></h2><p>针对一页page的每一种状态，详细描述如下：</p><ul><li><strong>WT_REF_DISK</strong>： 初始状态，page在磁盘上的状态，必须被读到内存后才能使用，当page被evict后，状态也会被设置为这个。</li><li><strong>WT_REF_DELETED</strong>： page在磁盘上，但是已经从内存B-Tree上删除，当我们不在需要读某个leaf page时，可以将其删除。</li><li><strong>WT_REF_LIMBO</strong>： page的映像已经被加载到内存，但page上还有额外的修改数据在lookasidetable上没有被加载到内存。</li><li><strong>WT_REF_LOOKASIDE</strong>： page在磁盘上，但是在lookasidetable也有与此page相关的修改内容，在page可读之前，也需要加载这部分内容。</li></ul><p>当对一个page进行reconcile时，如果系统中还有之前的读操作正在访问此page上修改的数据，则会将这些数据保存到lookasidetable；当page再被读时，可以利用lookasidetable中的数据重新构建内存page。</p><ul><li><strong>WT_REF_LOCKED</strong>： 当page被evict时，会将page锁住，其它线程不可访问。</li><li><strong>WT_REF_MEM</strong>： page已经从磁盘读到内存，并且能正常访问。</li><li><strong>WT_REF_READING</strong>： page正在被某个线程从磁盘读到内存，其它的读线程等待它被读完，不需要重复去读。</li><li><strong>WT_REF_SPLIT</strong>： 当page变得过大时，会被split，状态设为WT_REF_SPLIT，原来指向的page不再被使用。</li></ul><h2 id="_4-page的大小参数" tabindex="-1"><a class="header-anchor" href="#_4-page的大小参数"><span>4. Page的大小参数</span></a></h2><p>无论将数据从磁盘读到内存，还是从内存写到磁盘，都是以page为单位调度的，但是在磁盘上一个page到底多大？是否是最小分割单元？以及内存里面的各种page的大小对存储引擎的性能是否有影响？本节将围绕这些问题，分析与page大小相关的参数是如何影响存储引擎性能的。 总的来说，涉及到的关键参数和默认值如下表所示：</p><table><thead><tr><th>参数名称</th><th>默认配置值</th><th>含义</th></tr></thead><tbody><tr><td>allocation_size</td><td>4KB</td><td>磁盘上最小分配单元</td></tr><tr><td>memory_page_max</td><td>5MB</td><td>内存中允许的最大page值</td></tr><tr><td>internal_page_max</td><td>4KB</td><td>磁盘上允许的最大internal page值</td></tr><tr><td>leaf_page_max</td><td>32KB</td><td>磁盘上允许的最大leaf page值</td></tr><tr><td>internal_key_max</td><td>1/10*internal_page</td><td>internal page上允许的最大key值</td></tr><tr><td>leaf_key_max</td><td>1/10*leaf_page</td><td>leaf page上允许的最大key值</td></tr><tr><td>leaf_key_value</td><td>1/2*leaf_page</td><td>leaf page上允许的最大value值</td></tr><tr><td>split_pct</td><td>75%</td><td>reconciled的page的分割百分比</td></tr></tbody></table><p>详细说明如下：</p><ul><li><strong>allocation_size</strong>：</li></ul><p>MongoDB磁盘文件的最小分配单元（由WiredTiger自带的块管理模块来分配），一个page的可以由一个或多个这样的单元组成；默认值是4KB，与主机操作系统虚拟内存页的大小相当，大多数场景下不需要修改这个值。</p><ul><li><strong>memory_page_max</strong>：</li></ul><p>WiredTigerCache里面一个内存page随着不断插入修改等操作，允许增长达到的最大值，默认值为5MB。当一个内存page达到这个最大值时，将会被split成较小的内存pages且通过reconcile将这些pages写到磁盘pages，一旦完成写到磁盘，这些内存pages将从内存移除。</p><p>需要注意的是：split和reconcile这两个动作都需要获得page的排它锁，导致应用程序在此page上的其它写操作会等待，因此设置一个合理的最大值，对系统的性能也很关键。</p><p>如果值太大，虽然spilt和reconcile发生的机率减少，但一旦发生这样的动作，持有排它锁的时间会较长，导致应用程序的插入或修改操作延迟增大；</p><p>如果值太小，虽然单次持有排它锁的时间会较短，但是会导致spilt和reconcile发生的机率增加。</p><ul><li><strong>internal_page_max</strong>：</li></ul><p>磁盘上internalpage的最大值，默认为4KB。随着reconcile进行，internalpage超过这个值时，会被split成多个pages。</p><p>这个值的大小会影响磁盘上B-Tree的深度和internalpage上key的数量，如果太大，则internalpage上的key的数量会很多，通过遍历定位到正确leaf page的时间会增加；如果太小，则B-Tree的深度会增加，也会影响定位到正确leaf page的时间。</p><ul><li><strong>leaf_page_max</strong>：</li></ul><p>磁盘上leaf page的最大值，默认为32KB。随着reconcile进行，leaf page超过这个值时，会被split成多个pages。</p><p>这个值的大小会影响磁盘的I/O性能，因为我们在从磁盘读取数据时，总是期望一次I/O能多读取一点数据，所以希望把这个参数调大；但是太大，又会造成读写放大，因为读出来的很多数据可能后续都用不上。</p><ul><li><strong>internal_key_max</strong>：</li></ul><p>internalpage上允许的最大key值，默认大小为internalpage初始值的1/10，如果超过这个值，将会额外存储。导致读取key时需要额外的磁盘I/O。</p><ul><li><strong>leaf_key_max</strong>：</li></ul><p>leaf page上允许的最大key值，默认大小为leaf page初始值的1/10，如果超过这个值，将会额外存储。导致读取key时需要额外的磁盘I/O。</p><ul><li><strong>leaf_value_max</strong>：</li></ul><p>leaf page上允许的最大value值（保存真正的集合数据），默认大小为leaf page初始值的1/2，如果超过这个值，将会额外存储。导致读取value时需要额外的磁盘I/O。</p><ul><li><strong>split_pct</strong>：</li></ul><p>内存里面将要被reconciled的 page大小与internal_page_max或leaf_page_max值的百分比，默认值为75%，如果内存里面被reconciled的page能够装进一个单独的磁盘page上，则不会发生spilt，否则按照该百分比值*最大允许的page值分割新page的大小。</p><h2 id="_5-page无锁及压缩" tabindex="-1"><a class="header-anchor" href="#_5-page无锁及压缩"><span>5. Page无锁及压缩</span></a></h2><p><a href="https://blog.csdn.net/weixin_45583158/article/details/100143033" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_45583158/article/details/100143033</a></p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/db/nosql-mongo/mongo-y-page.html" target="_blank" rel="noopener noreferrer">Mongo进阶 - WT引擎：Page生命周期</a></p>',45)]))}const i=a(l,[["render",n],["__file","mongo-y-page.html.vue"]]),s=JSON.parse('{"path":"/posts/Database/MongoDB/mongo-y-page.html","title":"Mongo进阶 - WT引擎：Page生命周期","lang":"zh-CN","frontmatter":{"aliases":"Mongo进阶 - WT引擎：Page生命周期","tags":null,"cssclass":null,"source":null,"order":140,"category":["mongodb"],"created":"2024-02-22 10:49","updated":"2024-03-13 08:33","description":"Mongo进阶 - WT引擎：Page生命周期 通过前文我们了解到数据以page为单位加载到cache; 有必要系统的分析一页page的生命周期、状态以及相关参数的配置，这对后续MongoDB的性能调优和故障问题的定位和解决有帮助。 1. 为什么要了解Page生命周期 通过前文我们了解到数据以page为单位加载到cache、cache里面又会生成各种不...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MongoDB/mongo-y-page.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Mongo进阶 - WT引擎：Page生命周期"}],["meta",{"property":"og:description","content":"Mongo进阶 - WT引擎：Page生命周期 通过前文我们了解到数据以page为单位加载到cache; 有必要系统的分析一页page的生命周期、状态以及相关参数的配置，这对后续MongoDB的性能调优和故障问题的定位和解决有帮助。 1. 为什么要了解Page生命周期 通过前文我们了解到数据以page为单位加载到cache、cache里面又会生成各种不..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130833464.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mongo进阶 - WT引擎：Page生命周期\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130833464.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 为什么要了解Page生命周期","slug":"_1-为什么要了解page生命周期","link":"#_1-为什么要了解page生命周期","children":[]},{"level":2,"title":"2. Page的生命周期","slug":"_2-page的生命周期","link":"#_2-page的生命周期","children":[]},{"level":2,"title":"3. Page的各种状态","slug":"_3-page的各种状态","link":"#_3-page的各种状态","children":[]},{"level":2,"title":"4. Page的大小参数","slug":"_4-page的大小参数","link":"#_4-page的大小参数","children":[]},{"level":2,"title":"5. Page无锁及压缩","slug":"_5-page无锁及压缩","link":"#_5-page无锁及压缩","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.69,"words":2007},"filePathRelative":"posts/Database/MongoDB/mongo-y-page.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>通过前文我们了解到数据以page为单位加载到cache; 有必要系统的分析一页page的生命周期、状态以及相关参数的配置，这对后续MongoDB的性能调优和故障问题的定位和解决有帮助。</p>\\n</blockquote>\\n<h2>1. 为什么要了解Page生命周期</h2>\\n<p>通过前文我们了解到数据以page为单位加载到cache、cache里面又会生成各种不同类型的page及为不同类型的page分配不同大小的内存、eviction触发机制和reconcile动作都发生在page上、page大小持续增加时会被分割成多个小page，所有这些操作都是围绕一个page来完成的。</p>","autoDesc":true}');export{i as comp,s as data};
