import{_ as e,c as a,a as d,o as r}from"./app-fWubcX7c.js";const l={};function n(i,t){return r(),a("div",null,t[0]||(t[0]=[d('<h1 id="java如何选择合适的垃圾回收器" tabindex="-1"><a class="header-anchor" href="#java如何选择合适的垃圾回收器"><span>Java如何选择合适的垃圾回收器</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>垃圾回收器是内存回收的具体实现，JDK自带的垃圾回收器已经完成集成垃圾回收和清理算法，业务程序可以通过设置参数选择垃圾回收器，虚拟机用到的7种经典的垃圾回收器如下表。根据适用内存区域不同，JDK自带的垃圾回收器可分为新生代回收器和老年代回收器，两者可以配合使用。新生代回收器用于堆空间中新生代区域的垃圾回收，老年代回收器用于堆空间中老年代区域的垃圾回收。G1是一种新型的堆内垃圾收集器，既可以用于新生代也可以用于老年代垃圾回收。</p><h2 id="_2-7种垃圾回收器" tabindex="-1"><a class="header-anchor" href="#_2-7种垃圾回收器"><span>2. 7种垃圾回收器</span></a></h2><table><thead><tr><th>名称</th><th>说明</th><th>收集模式</th><th>分代适用类型</th></tr></thead><tbody><tr><td>Serial</td><td>单线程串行收集器</td><td>串行收集器</td><td>新生代</td></tr><tr><td>ParNew</td><td>多线程并行Serial收集器</td><td>并行收集器</td><td>新生代</td></tr><tr><td>Parallel Scavenge</td><td>并行吞吐量优先收集器</td><td>并行收集器</td><td>新生代</td></tr><tr><td>Serial Old</td><td>Serial单线程收集器老年代版本</td><td>串行收集器</td><td>老年代</td></tr><tr><td>CMS(Concurrent Mark Sweep)</td><td>并行最短停顿时间收集器</td><td>并发收集器</td><td>老年代</td></tr><tr><td>Parallel Old</td><td>Parallel Scavenge并行收集器老年代版本</td><td>并行收集器</td><td>老年代</td></tr><tr><td>G1</td><td>面向局部收集和基于Region内存布局的新型低延时收集器</td><td>并发/并行收集器</td><td>新生代/老年代</td></tr></tbody></table><p>下图展示了新生代GC和老年代GC配合使用方法，有连线的表示可以配合使用。注意ParNew和Parallel Old是不能同时使用的</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120953100.png" alt="image-20220429231123110" tabindex="0" loading="lazy"><figcaption>image-20220429231123110</figcaption></figure><h2 id="_3-如何选择合适的垃圾回收器" tabindex="-1"><a class="header-anchor" href="#_3-如何选择合适的垃圾回收器"><span>3. 如何选择合适的垃圾回收器</span></a></h2><p>垃圾回收器的选择方法没有通用的准则，要结合项目应用的实际并对GC运行数据的检测来决定。</p><p>根据收集模式经典垃圾回收器可分为三类：串行收集器、并行收集器、并发收集器。串行收集器只适用于小数据量的情况，选择主要针对并行收集器和并发收集器。默认情况下，JDK1.5以前都是使用串行收集器，如果想使用其他收集器需要在启动时加入相应参数。JDK1.5以后，JVM会根据当前<a href="http://java.sun.com/j2se/1.5.0/docs/guide/vm/server-class.html" target="_blank" rel="noopener noreferrer">系统配置</a>进行判断。</p><h3 id="_3-1-垃圾回收器选择建议" tabindex="-1"><a class="header-anchor" href="#_3-1-垃圾回收器选择建议"><span>3.1 垃圾回收器选择建议：</span></a></h3><ul><li>业务应用对吞吐量要求较高，对响应时间没有特别要求的，推荐使用并行收集器。如：科学计算和后台处理程序等等。</li><li>对响应时间要求较高的中大型应用程序，推荐使用并发收集器。如：web服务器等。</li><li>对应JDK版本1.8以上，多CPU处理器且内存资源不是瓶颈，建议优先考虑使用G1回收器。</li><li>单线程应用使用串行收集器。</li></ul><h2 id="_4-修改方式" tabindex="-1"><a class="header-anchor" href="#_4-修改方式"><span>4. 修改方式</span></a></h2><p>以下表格汇总了各种回收器的分类、特点和修改参数：</p><table><thead><tr><th>名称</th><th>修改参数</th><th>特点</th></tr></thead><tbody><tr><td>Serial</td><td>-XX:+UseSerialGC</td><td>用于新生代的单线程收集器，采用复制算法进行垃圾收集。Serial 进行垃圾收集时，所有的用户线程必须暂停（Stop The World）。</td></tr><tr><td>ParNew</td><td>-XX:+UseParNewGC</td><td>Serial的多线程版本，在单核CPU环境并不会比Serial更优，它默认开启的收集线程数和CPU核数，可以通过-XX:ParallelGCThreads来设置垃圾收集的线程数。</td></tr><tr><td>Parallel Scavenge</td><td>-XX:+UseParallelGC jdk1.7、jdk1.8 新生代默认使用</td><td>用于新生代的多线程收集器，ParNew的目标是尽可能缩短垃圾收集时用户线程的停顿时间，Parallel Scavenge的目标是达到一个可控制的吞吐量。通过-XX:MaxGCPauseMillis来设置收集器尽可能在多长时间内完成内存回收，通过-XX:GCTimeRatio来精确控制吞吐量。</td></tr><tr><td>Serial Old</td><td>-XX:+UseSerialOldGC</td><td>Serial的老年代版本，采用标记-整理算法单线程收集器。</td></tr><tr><td>CMS</td><td>-XX:+UseConMarkSweepGC</td><td>一种以最短回收停顿时间为目标的收集器，尽量做到最短用户线程停顿时间。CMS是基于标记-清除算法，所以垃圾回收后会产生空间碎片，通过-XX:UseCMSCompactAtFullCollection开启碎片整理（默认开启）。用-XX:CMSFullGCsBeforeCompaction设置执行多少次不压缩（不进行碎片整理）的Full GC之后，跟着来一次带压缩（碎片整理）的Full GC。-XX:ParallelCMSThreads：设定CMS的线程数量。</td></tr><tr><td>Parallel Old</td><td>-XX:+UseParallelOldGC jdk1.7、jdk1.8老年代默认使用</td><td>Parallel Scavenge的老年代版本，使用-XX:ParallelGCThreads限制线程数量。</td></tr><tr><td>G1</td><td>-XX:+UseG1GCjdk1.7以后才提供，jdk1.9默认</td><td>一款全新的收集器，兼顾并行和并发功能，能充分利用多CPU资源，运行期间不会产生内存碎片。通过-XX:ParallelGCThreads设置限制线程数量；-XX:MaxGCPauseMillis设置最大停顿时间。</td></tr></tbody></table><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://support.huaweicloud.com/tuningtip-kunpenggrf/kunpengtuning_12_0064.html" target="_blank" rel="noopener noreferrer">华为鲲鹏-选择合适的垃圾回收器</a></p>',17)]))}const o=e(l,[["render",n],["__file","java-jvm-gc-adapter.html.vue"]]),h=JSON.parse('{"path":"/posts/Java/JavaJVM/java-jvm-gc-adapter.html","title":"Java如何选择合适的垃圾回收器","lang":"zh-CN","frontmatter":{"aliases":"Java如何选择合适的垃圾回收器","tags":null,"cssclass":null,"source":null,"category":["Java","JVM"],"created":"2024-02-22 10:47","updated":"2024-03-12 09:53","description":"Java如何选择合适的垃圾回收器 1. 简介 垃圾回收器是内存回收的具体实现，JDK自带的垃圾回收器已经完成集成垃圾回收和清理算法，业务程序可以通过设置参数选择垃圾回收器，虚拟机用到的7种经典的垃圾回收器如下表。根据适用内存区域不同，JDK自带的垃圾回收器可分为新生代回收器和老年代回收器，两者可以配合使用。新生代回收器用于堆空间中新生代区域的垃圾回收，...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/JavaJVM/java-jvm-gc-adapter.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Java如何选择合适的垃圾回收器"}],["meta",{"property":"og:description","content":"Java如何选择合适的垃圾回收器 1. 简介 垃圾回收器是内存回收的具体实现，JDK自带的垃圾回收器已经完成集成垃圾回收和清理算法，业务程序可以通过设置参数选择垃圾回收器，虚拟机用到的7种经典的垃圾回收器如下表。根据适用内存区域不同，JDK自带的垃圾回收器可分为新生代回收器和老年代回收器，两者可以配合使用。新生代回收器用于堆空间中新生代区域的垃圾回收，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120953100.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java如何选择合适的垃圾回收器\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120953100.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 7种垃圾回收器","slug":"_2-7种垃圾回收器","link":"#_2-7种垃圾回收器","children":[]},{"level":2,"title":"3. 如何选择合适的垃圾回收器","slug":"_3-如何选择合适的垃圾回收器","link":"#_3-如何选择合适的垃圾回收器","children":[{"level":3,"title":"3.1 垃圾回收器选择建议：","slug":"_3-1-垃圾回收器选择建议","link":"#_3-1-垃圾回收器选择建议","children":[]}]},{"level":2,"title":"4. 修改方式","slug":"_4-修改方式","link":"#_4-修改方式","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.35,"words":1305},"filePathRelative":"posts/Java/JavaJVM/java-jvm-gc-adapter.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>垃圾回收器是内存回收的具体实现，JDK自带的垃圾回收器已经完成集成垃圾回收和清理算法，业务程序可以通过设置参数选择垃圾回收器，虚拟机用到的7种经典的垃圾回收器如下表。根据适用内存区域不同，JDK自带的垃圾回收器可分为新生代回收器和老年代回收器，两者可以配合使用。新生代回收器用于堆空间中新生代区域的垃圾回收，老年代回收器用于堆空间中老年代区域的垃圾回收。G1是一种新型的堆内垃圾收集器，既可以用于新生代也可以用于老年代垃圾回收。</p>\\n<h2>2. 7种垃圾回收器</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>名称</th>\\n<th>说明</th>\\n<th>收集模式</th>\\n<th>分代适用类型</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Serial</td>\\n<td>单线程串行收集器</td>\\n<td>串行收集器</td>\\n<td>新生代</td>\\n</tr>\\n<tr>\\n<td>ParNew</td>\\n<td>多线程并行Serial收集器</td>\\n<td>并行收集器</td>\\n<td>新生代</td>\\n</tr>\\n<tr>\\n<td>Parallel Scavenge</td>\\n<td>并行吞吐量优先收集器</td>\\n<td>并行收集器</td>\\n<td>新生代</td>\\n</tr>\\n<tr>\\n<td>Serial Old</td>\\n<td>Serial单线程收集器老年代版本</td>\\n<td>串行收集器</td>\\n<td>老年代</td>\\n</tr>\\n<tr>\\n<td>CMS(Concurrent Mark Sweep)</td>\\n<td>并行最短停顿时间收集器</td>\\n<td>并发收集器</td>\\n<td>老年代</td>\\n</tr>\\n<tr>\\n<td>Parallel Old</td>\\n<td>Parallel Scavenge并行收集器老年代版本</td>\\n<td>并行收集器</td>\\n<td>老年代</td>\\n</tr>\\n<tr>\\n<td>G1</td>\\n<td>面向局部收集和基于Region内存布局的新型低延时收集器</td>\\n<td>并发/并行收集器</td>\\n<td>新生代/老年代</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{o as comp,h as data};
