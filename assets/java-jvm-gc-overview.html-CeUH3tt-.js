import{_ as e,c as t,a as r,o as n}from"./app-BQBjlK2G.js";const l={};function s(i,a){return n(),t("div",null,a[0]||(a[0]=[r(`<h1 id="垃圾收集器" tabindex="-1"><a class="header-anchor" href="#垃圾收集器"><span>垃圾收集器</span></a></h1><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003614.png" alt="image-20190925231744013" tabindex="0" loading="lazy"><figcaption>image-20190925231744013</figcaption></figure><p><strong>如果说收集算法是内存回收的方法论，那么垃圾收集器就是内存回收的具体实现。</strong></p><p>虽然我们对各个收集器进行比较，但并非要挑选出一个最好的收集器。因为直到现在为止还没有最好的垃圾收集器出现，更加没有万能的垃圾收集器，<strong>我们能做的就是根据具体应用场景选择适合自己的垃圾收集器</strong>。试想一下：如果有一种四海之内、任何场景下都适用的完美收集器存在，那么我们的 HotSpot 虚拟机就不会实现那么多不同的垃圾收集器了。</p><h3 id="_4-1-serial-收集器" tabindex="-1"><a class="header-anchor" href="#_4-1-serial-收集器"><span>4.1 Serial 收集器</span></a></h3><p>Serial（串行）收集器收集器是最基本、历史最悠久的垃圾收集器了。大家看名字就知道这个收集器是一个单线程收集器了。它的 <strong>“单线程”</strong> 的意义不仅仅意味着它只会使用一条垃圾收集线程去完成垃圾收集工作，更重要的是它在进行垃圾收集工作的时候必须暂停其他所有的工作线程（ <strong>&quot;Stop The World&quot;</strong> ），直到它收集结束。</p><p><strong>新生代采用复制算法，老年代采用标记-整理算法。</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003666.png" alt="image-20190925231803153" tabindex="0" loading="lazy"><figcaption>image-20190925231803153</figcaption></figure><p>虚拟机的设计者们当然知道 Stop The World 带来的不良用户体验，所以在后续的垃圾收集器设计中停顿时间在不断缩短（仍然还有停顿，寻找最优秀的垃圾收集器的过程仍然在继续）。</p><p>但是 Serial 收集器有没有优于其他垃圾收集器的地方呢？当然有，它<strong>简单而高效（与其他收集器的单线程相比）</strong>。Serial 收集器由于没有线程交互的开销，自然可以获得很高的单线程收集效率。Serial 收集器对于运行在 Client 模式下的虚拟机来说是个不错的选择。</p><h3 id="_4-2-parnew-收集器" tabindex="-1"><a class="header-anchor" href="#_4-2-parnew-收集器"><span>4.2 ParNew 收集器</span></a></h3><p><strong>ParNew 收集器其实就是 Serial 收集器的多线程版本，除了使用多线程进行垃圾收集外，其余行为（控制参数、收集算法、回收策略等等）和 Serial 收集器完全一样。</strong></p><p><strong>新生代采用复制算法，老年代采用标记-整理算法。</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003689.png" alt="image-20190925231830782" tabindex="0" loading="lazy"><figcaption>image-20190925231830782</figcaption></figure><p>它是许多运行在 Server 模式下的虚拟机的首要选择，除了 Serial 收集器外，只有它能与 CMS 收集器（真正意义上的并发收集器，后面会介绍到）配合工作。</p><p><strong>并行和并发概念补充：</strong></p><ul><li><strong>并行（Parallel）</strong> ：指多条垃圾收集线程并行工作，但此时用户线程仍然处于等待状态。</li><li><strong>并发（Concurrent）</strong>：指用户线程与垃圾收集线程同时执行（但不一定是并行，可能会交替执行），用户程序在继续运行，而垃圾收集器运行在另一个 CPU 上。</li></ul><h3 id="_4-3-parallel-scavenge-收集器" tabindex="-1"><a class="header-anchor" href="#_4-3-parallel-scavenge-收集器"><span>4.3 Parallel Scavenge 收集器</span></a></h3><p>Parallel Scavenge 收集器也是使用复制算法的多线程收集器，它看上去几乎和ParNew都一样。 <strong>那么它有什么特别之处呢？</strong></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>-XX:+UseParallelGC </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    使用 Parallel 收集器+ 老年代串行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-XX:+UseParallelOldGC</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    使用 Parallel 收集器+ 老年代并行</span></span></code></pre></div><p><strong>Parallel Scavenge 收集器关注点是吞吐量（高效率的利用 CPU）。CMS 等垃圾收集器的关注点更多的是用户线程的停顿时间（提高用户体验）。所谓吞吐量就是 CPU 中用于运行用户代码的时间与 CPU 总消耗时间的比值。</strong> Parallel Scavenge 收集器提供了很多参数供用户找到最合适的停顿时间或最大吞吐量，如果对于收集器运作不太了解的话，手工优化存在困难的话可以选择把内存管理优化交给虚拟机去完成也是一个不错的选择。</p><p><strong>新生代采用复制算法，老年代采用标记-整理算法。</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003724.png" alt="image-20190925231846088" tabindex="0" loading="lazy"><figcaption>image-20190925231846088</figcaption></figure><h3 id="_4-4-serial-old-收集器" tabindex="-1"><a class="header-anchor" href="#_4-4-serial-old-收集器"><span>4.4.Serial Old 收集器</span></a></h3><p><strong>Serial 收集器的老年代版本</strong>，它同样是一个单线程收集器。它主要有两大用途：一种用途是在 JDK1.5 以及以前的版本中与 Parallel Scavenge 收集器搭配使用，另一种用途是作为 CMS 收集器的后备方案。</p><h3 id="_4-5-parallel-old-收集器" tabindex="-1"><a class="header-anchor" href="#_4-5-parallel-old-收集器"><span>4.5 Parallel Old 收集器</span></a></h3><p><strong>Parallel Scavenge 收集器的老年代版本</strong>。使用多线程和“标记-整理”算法。在注重吞吐量以及 CPU 资源的场合，都可以优先考虑 Parallel Scavenge 收集器和 Parallel Old 收集器。</p><h3 id="_4-6-cms-收集器" tabindex="-1"><a class="header-anchor" href="#_4-6-cms-收集器"><span>4.6 CMS 收集器</span></a></h3><p><strong>CMS（Concurrent Mark Sweep）收集器是一种以获取最短回收停顿时间为目标的收集器。它非常符合在注重用户体验的应用上使用。</strong></p><p><strong>CMS（Concurrent Mark Sweep）收集器是 HotSpot 虚拟机第一款真正意义上的并发收集器，它第一次实现了让垃圾收集线程与用户线程（基本上）同时工作。</strong></p><p>从名字中的<strong>Mark Sweep</strong>这两个词可以看出，CMS 收集器是一种 <strong>“标记-清除”算法</strong>实现的，它的运作过程相比于前面几种垃圾收集器来说更加复杂一些。整个过程分为四个步骤：</p><ul><li><strong>初始标记：</strong> 暂停所有的其他线程，并记录下直接与 root 相连的对象，速度很快 ；</li><li><strong>并发标记：</strong> 同时开启 GC 和用户线程，用一个闭包结构去记录可达对象。但在这个阶段结束，这个闭包结构并不能保证包含当前所有的可达对象。因为用户线程可能会不断的更新引用域，所以 GC 线程无法保证可达性分析的实时性。所以这个算法里会跟踪记录这些发生引用更新的地方。</li><li><strong>重新标记：</strong> 重新标记阶段就是为了修正并发标记期间因为用户程序继续运行而导致标记产生变动的那一部分对象的标记记录，这个阶段的停顿时间一般会比初始标记阶段的时间稍长，远远比并发标记阶段时间短</li><li><strong>并发清除：</strong> 开启用户线程，同时 GC 线程开始对为标记的区域做清扫。</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003752.png" alt="image-20190925231858020" tabindex="0" loading="lazy"><figcaption>image-20190925231858020</figcaption></figure><p>从它的名字就可以看出它是一款优秀的垃圾收集器，主要优点：<strong>并发收集、低停顿</strong>。但是它有下面三个明显的缺点：</p><ul><li><strong>对 CPU 资源敏感；</strong></li><li><strong>无法处理浮动垃圾；</strong></li><li><strong>它使用的回收算法-“标记-清除”算法会导致收集结束时会有大量空间碎片产生。</strong></li></ul><h3 id="_4-7-g1-收集器" tabindex="-1"><a class="header-anchor" href="#_4-7-g1-收集器"><span>4.7 G1 收集器</span></a></h3><p><strong>G1 (Garbage-First) 是一款面向服务器的垃圾收集器,主要针对配备多颗处理器及大容量内存的机器. 以极高概率满足 GC 停顿时间要求的同时,还具备高吞吐量性能特征.</strong></p><p>被视为 JDK1.7 中 HotSpot 虚拟机的一个重要进化特征。它具备一下特点：</p><ul><li><strong>并行与并发</strong>：G1 能充分利用 CPU、多核环境下的硬件优势，使用多个 CPU（CPU 或者 CPU 核心）来缩短 Stop-The-World 停顿时间。部分其他收集器原本需要停顿 Java 线程执行的 GC 动作，G1 收集器仍然可以通过并发的方式让 java 程序继续执行。</li><li><strong>分代收集</strong>：虽然 G1 可以不需要其他收集器配合就能独立管理整个 GC 堆，但是还是保留了分代的概念。</li><li><strong>空间整合</strong>：与 CMS 的“标记--清理”算法不同，G1 从整体来看是基于“标记整理”算法实现的收集器；从局部上来看是基于“复制”算法实现的。</li><li><strong>可预测的停顿</strong>：这是 G1 相对于 CMS 的另一个大优势，降低停顿时间是 G1 和 CMS 共同的关注点，但 G1 除了追求低停顿外，还能建立可预测的停顿时间模型，能让使用者明确指定在一个长度为 M 毫秒的时间片段内。</li></ul><p>G1 收集器的运作大致分为以下几个步骤：</p><ul><li><strong>初始标记</strong></li><li><strong>并发标记</strong></li><li><strong>最终标记</strong></li><li><strong>筛选回收</strong></li></ul><p><strong>G1 收集器在后台维护了一个优先列表，每次根据允许的收集时间，优先选择回收价值最大的 Region(这也就是它的名字 Garbage-First 的由来)</strong>。这种使用 Region 划分内存空间以及有优先级的区域回收方式，保证了 GF 收集器在有限时间内可以尽可能高的收集效率（把内存化整为零）。</p>`,42)]))}const g=e(l,[["render",s],["__file","java-jvm-gc-overview.html.vue"]]),p=JSON.parse('{"path":"/posts/Java/JavaJVM/java-jvm-gc-overview.html","title":"垃圾收集器","lang":"zh-CN","frontmatter":{"aliases":"垃圾收集器","tags":null,"cssclass":null,"source":null,"category":["Java","JVM"],"created":"2024-02-22 10:47","updated":"2024-03-12 10:04","description":"垃圾收集器 image-20190925231744013image-20190925231744013 如果说收集算法是内存回收的方法论，那么垃圾收集器就是内存回收的具体实现。 虽然我们对各个收集器进行比较，但并非要挑选出一个最好的收集器。因为直到现在为止还没有最好的垃圾收集器出现，更加没有万能的垃圾收集器，我们能做的就是根据具体应用场景选择适合自己...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/JavaJVM/java-jvm-gc-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"垃圾收集器"}],["meta",{"property":"og:description","content":"垃圾收集器 image-20190925231744013image-20190925231744013 如果说收集算法是内存回收的方法论，那么垃圾收集器就是内存回收的具体实现。 虽然我们对各个收集器进行比较，但并非要挑选出一个最好的收集器。因为直到现在为止还没有最好的垃圾收集器出现，更加没有万能的垃圾收集器，我们能做的就是根据具体应用场景选择适合自己..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003614.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"垃圾收集器\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003614.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003666.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003689.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003724.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003752.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":3,"title":"4.1 Serial 收集器","slug":"_4-1-serial-收集器","link":"#_4-1-serial-收集器","children":[]},{"level":3,"title":"4.2 ParNew 收集器","slug":"_4-2-parnew-收集器","link":"#_4-2-parnew-收集器","children":[]},{"level":3,"title":"4.3 Parallel Scavenge 收集器","slug":"_4-3-parallel-scavenge-收集器","link":"#_4-3-parallel-scavenge-收集器","children":[]},{"level":3,"title":"4.4.Serial Old 收集器","slug":"_4-4-serial-old-收集器","link":"#_4-4-serial-old-收集器","children":[]},{"level":3,"title":"4.5 Parallel Old 收集器","slug":"_4-5-parallel-old-收集器","link":"#_4-5-parallel-old-收集器","children":[]},{"level":3,"title":"4.6 CMS 收集器","slug":"_4-6-cms-收集器","link":"#_4-6-cms-收集器","children":[]},{"level":3,"title":"4.7 G1 收集器","slug":"_4-7-g1-收集器","link":"#_4-7-g1-收集器","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":7.36,"words":2209},"filePathRelative":"posts/Java/JavaJVM/java-jvm-gc-overview.md","localizedDate":"2024年10月21日","excerpt":"\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003614.png\\" alt=\\"image-20190925231744013\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20190925231744013</figcaption></figure>\\n<p><strong>如果说收集算法是内存回收的方法论，那么垃圾收集器就是内存回收的具体实现。</strong></p>\\n<p>虽然我们对各个收集器进行比较，但并非要挑选出一个最好的收集器。因为直到现在为止还没有最好的垃圾收集器出现，更加没有万能的垃圾收集器，<strong>我们能做的就是根据具体应用场景选择适合自己的垃圾收集器</strong>。试想一下：如果有一种四海之内、任何场景下都适用的完美收集器存在，那么我们的 HotSpot 虚拟机就不会实现那么多不同的垃圾收集器了。</p>","autoDesc":true}');export{g as comp,p as data};
