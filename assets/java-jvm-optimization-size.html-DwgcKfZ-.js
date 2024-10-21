import{_ as e,c as t,a as n,o as i}from"./app-BhoNqsD-.js";const r={};function o(l,a){return i(),t("div",null,a[0]||(a[0]=[n('<h1 id="java堆设置多大合适" tabindex="-1"><a class="header-anchor" href="#java堆设置多大合适"><span>Java堆设置多大合适</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>针对堆空间的优化是Java性能调优的重点之一。如果没有设置JVM堆空间大小，JVM会根据服务器物理内存大小设置默认堆大小的值。例如，在64位的服务器端，</p><ul><li>当物理内存小于192MB时，JVM堆大小默认选为物理内存的一半；</li><li><strong>当物理内存大192MB且小于128GB时，JVM堆大小默认选为物理内存的四分之一</strong>；</li><li>当物理内存大于等于128GB时，都为32GB。</li></ul><p>通常情况下，Java应用程序的会通过参数指定堆大小，具体方法下文会有说明。</p><h2 id="_2-推荐配置原则" tabindex="-1"><a class="header-anchor" href="#_2-推荐配置原则"><span>2. 推荐配置原则：</span></a></h2><ol><li>应用程序运行时，计算<strong>老年代存活对象的占用空间大小X</strong>。 <ol><li>程序整个堆大小（Xmx和Xms）设置为X的3~4倍；</li><li>永久代PermSize和MaxPermSize设置为X的1.2~1.5倍。</li><li>年轻代Xmn的设置为X的1<sub>1.5倍。老年代内存大小设置为X的2</sub>3倍。</li></ol></li><li>JDK官方建议年轻代占整个堆大小空间的3/8左右。</li><li>完成一次Full GC后，应该释放出70%的堆空间（30%的空间仍然占用）。</li><li>设置JVM 初始堆内存-Xms和最大堆内-Xmx相同，<strong>以避免每次垃圾回收完成后JVM重新分配内存。</strong></li></ol><h2 id="_3-暴力设置" tabindex="-1"><a class="header-anchor" href="#_3-暴力设置"><span>3. 暴力设置</span></a></h2><p>若依和IBM等堆大小都设置为512M, 如有额外需求，才根据上面原则进行调整</p><blockquote><p>对于大多数环境而言，最大 Java 堆大小为 512 兆字节（如上图所示）已足够。</p><p>---<a href="https://www.ibm.com/docs/zh/itcam-app-mgr/7.2.1?topic=spa-setting-maximum-java-heap-size-1" target="_blank" rel="noopener noreferrer">IBM 文档</a></p></blockquote><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://support.huaweicloud.com/tuningtip-kunpenggrf/kunpengtuning_12_0063.html" target="_blank" rel="noopener noreferrer">华为鲲鹏-设置JVM堆空间大小</a></p><p><a href="https://www.ibm.com/docs/zh/itcam-app-mgr/7.2.1?topic=spa-setting-maximum-java-heap-size-1" target="_blank" rel="noopener noreferrer">IBM 文档</a></p><p><a href="https://blog.csdn.net/weixin_28782251/article/details/114547003" target="_blank" rel="noopener noreferrer">java堆设置成多少合适_jvm~xmx设置多少合适</a></p>',14)]))}const p=e(r,[["render",o],["__file","java-jvm-optimization-size.html.vue"]]),m=JSON.parse('{"path":"/posts/Java/JavaJVM/java-jvm-optimization-size.html","title":"Java堆设置多大合适","lang":"zh-CN","frontmatter":{"aliases":"Java堆设置多大合适","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:47","updated":"2024-03-12 12:02","description":"Java堆设置多大合适 1. 简介 针对堆空间的优化是Java性能调优的重点之一。如果没有设置JVM堆空间大小，JVM会根据服务器物理内存大小设置默认堆大小的值。例如，在64位的服务器端， 当物理内存小于192MB时，JVM堆大小默认选为物理内存的一半； 当物理内存大192MB且小于128GB时，JVM堆大小默认选为物理内存的四分之一； 当物理内存大于...","head":[["meta",{"property":"og:url","content":"https://mrjason.me/posts/Java/JavaJVM/java-jvm-optimization-size.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Java堆设置多大合适"}],["meta",{"property":"og:description","content":"Java堆设置多大合适 1. 简介 针对堆空间的优化是Java性能调优的重点之一。如果没有设置JVM堆空间大小，JVM会根据服务器物理内存大小设置默认堆大小的值。例如，在64位的服务器端， 当物理内存小于192MB时，JVM堆大小默认选为物理内存的一半； 当物理内存大192MB且小于128GB时，JVM堆大小默认选为物理内存的四分之一； 当物理内存大于..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java堆设置多大合适\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjason.me\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 推荐配置原则：","slug":"_2-推荐配置原则","link":"#_2-推荐配置原则","children":[]},{"level":2,"title":"3. 暴力设置","slug":"_3-暴力设置","link":"#_3-暴力设置","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.69,"words":506},"filePathRelative":"posts/Java/JavaJVM/java-jvm-optimization-size.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>针对堆空间的优化是Java性能调优的重点之一。如果没有设置JVM堆空间大小，JVM会根据服务器物理内存大小设置默认堆大小的值。例如，在64位的服务器端，</p>\\n<ul>\\n<li>当物理内存小于192MB时，JVM堆大小默认选为物理内存的一半；</li>\\n<li><strong>当物理内存大192MB且小于128GB时，JVM堆大小默认选为物理内存的四分之一</strong>；</li>\\n<li>当物理内存大于等于128GB时，都为32GB。</li>\\n</ul>\\n<p>通常情况下，Java应用程序的会通过参数指定堆大小，具体方法下文会有说明。</p>\\n<h2>2. 推荐配置原则：</h2>","autoDesc":true}');export{p as comp,m as data};
