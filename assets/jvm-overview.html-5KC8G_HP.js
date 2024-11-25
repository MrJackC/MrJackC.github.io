import{_ as a,c as t,a as r,o as l}from"./app-BfIe-EZg.js";const o={};function i(n,e){return l(),t("div",null,e[0]||(e[0]=[r('<h1 id="jvm相关知识体系详解" tabindex="-1"><a class="header-anchor" href="#jvm相关知识体系详解"><span>JVM相关知识体系详解</span></a></h1><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121212286.png" alt="jvm-overview" tabindex="0" loading="lazy"><figcaption>jvm-overview</figcaption></figure><h2 id="_1-学习要点" tabindex="-1"><a class="header-anchor" href="#_1-学习要点"><span>1. 学习要点</span></a></h2><blockquote><p>不同的虚拟机实现方式上也有差别，如果没有特别指出，这里的JVM指的是sun的HotSpot；不同的JDK版本略有差别，这里主要以1.8为主，具体差异请看各个章节中详解。下图主要表示的逻辑关系，用来将所有知识点放到一张图里，帮助你理解。</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121212350.png" alt="java-jvm-overview" tabindex="0" loading="lazy"><figcaption>java-jvm-overview</figcaption></figure><blockquote><p><strong>A. Java进阶 - JVM相关 知识体系</strong>： 首先按照上述<code>学习思路</code>，理解总体知识点在全局上与知识体系之间的对应关系。</p></blockquote><ul><li><a href="https://pdai.tech/md/java/jvm/java-jvm-x-overview.html" target="_blank" rel="noopener noreferrer">JVM 相关知识体系</a></li></ul><blockquote><p><strong>B. Java进阶 - JVM相关 类加载</strong>： 然后理解类字节码和类的加载机制。</p></blockquote><ul><li><a href="https://pdai.tech/md/java/jvm/java-jvm-class.html" target="_blank" rel="noopener noreferrer">JVM基础 - 类字节码详解</a><ul><li>源代码通过编译器编译为字节码，再通过类加载子系统进行加载到JVM中运行</li></ul></li><li><a href="https://pdai.tech/md/java/jvm/java-jvm-class-enhancer.html" target="_blank" rel="noopener noreferrer">JVM基础 - 字节码的增强技术</a><ul><li>在上文中，着重介绍了字节码的结构，这为我们了解字节码增强技术的实现打下了基础。字节码增强技术就是一类对现有字节码进行修改或者动态生成全新字节码文件的技术。接下来，我们将从最直接操纵字节码的实现方式开始深入进行剖析。</li></ul></li><li><a href="https://pdai.tech/md/java/jvm/java-jvm-classload.html" target="_blank" rel="noopener noreferrer">JVM基础 - Java 类加载机制</a><ul><li>这篇文章将带你深入理解Java 类加载机制</li></ul></li></ul><blockquote><p><strong>C. Java进阶 - JVM相关 内存结构</strong>： 因为类字节码是加载到JVM内存结构中的，所以紧接着理解JVM内存结构。</p></blockquote><ul><li><a href="https://pdai.tech/md/java/jvm/java-jvm-struct.html" target="_blank" rel="noopener noreferrer">JVM基础 - JVM内存结构</a><ul><li>本文主要对JVM 内存结构进行讲解，注意不要和Java内存模型混淆了</li></ul></li></ul><blockquote><p><strong>D. Java进阶 - JVM相关 JMM</strong>： 然后通过理解JVM与硬件之间的联系，理解Java 通过其内存模型保证数据线程安全等，这是JVM在并发上底层的支持。</p></blockquote><ul><li><a href="https://pdai.tech/md/java/jvm/java-jvm-x-introduce.html" target="_blank" rel="noopener noreferrer">JVM基础 - Java 内存模型引入</a><ul><li>很多人都Java内存模型和JVM内存结构，以及Java内存模型与物理内存之间的关系。本文从堆栈角度引入JMM，然后介绍JMM和物理内存之间的关系, 为后面<code>JMM详解</code>, <code>JVM 内存结构详解</code>, <code>Java 对象模型详解</code>等铺垫。</li></ul></li><li><a href="https://pdai.tech/md/java/jvm/java-jvm-jmm.html" target="_blank" rel="noopener noreferrer">JVM基础 - Java 内存模型详解</a><ul><li>本文主要转载自 Info 上<a href="https://www.infoq.cn/article/java_memory_model/" target="_blank" rel="noopener noreferrer">深入理解Java内存模型</a>, 作者程晓明。这篇文章对JMM讲的很清楚了，大致分三部分：重排序与顺序一致性；三个同步原语（lock，volatile，final）的内存语义，重排序规则及在处理器中的实现；java 内存模型的设计，及其与处理器内存模型和顺序一致性内存模型的关系</li></ul></li></ul><blockquote><p><strong>E. Java进阶 - JVM相关 GC</strong>： 再者理解下Java GC机制，如何回收内存等。</p></blockquote><ul><li><a href="https://pdai.tech/md/java/jvm/java-jvm-gc.html" target="_blank" rel="noopener noreferrer">GC - Java 垃圾回收基础知识</a><ul><li>垃圾收集主要是针对堆和方法区进行；程序计数器、虚拟机栈和本地方法栈这三个区域属于线程私有的，只存在于线程的生命周期内，线程结束之后也会消失，因此不需要对这三个区域进行垃圾回收。</li></ul></li><li><a href="https://pdai.tech/md/java/jvm/java-jvm-gc-g1.html" target="_blank" rel="noopener noreferrer">GC - Java 垃圾回收器之G1详解</a><ul><li>G1垃圾回收器是在Java7 update 4之后引入的一个新的垃圾回收器。同优秀的CMS垃圾回收器一样，G1也是关注最小时延的垃圾回收器，也同样适合大尺寸堆内存的垃圾收集，官方在ZGC还没有出现时也推荐使用G1来代替选择CMS。G1最大的特点是引入分区的思路，弱化了分代的概念，合理利用垃圾收集各个周期的资源，解决了其他收集器甚至CMS的众多缺陷。</li></ul></li><li><a href="">GC - Java 垃圾回收器之ZGC详解</a><ul><li>ZGC（The Z Garbage Collector）是JDK 11中推出的一款低延迟垃圾回收器, 是JDK 11+ 最为重要的更新之一，适用于<strong>大内存低延迟</strong>服务的内存管理和回收。在梳理相关知识点时，发现美团技术团队分享的文章<a href="https://tech.meituan.com/2020/08/06/new-zgc-practice-in-meituan.html" target="_blank" rel="noopener noreferrer">新一代垃圾回收器ZGC的探索与实践 (opens new window)</a>比较完善（包含G1收集器停顿时间瓶颈，原理，优化等）, 这里分享给你，帮你构建ZGC相关的知识体系</li></ul></li><li><a href="https://pdai.tech/md/java/jvm/java-jvm-gc-zgc.html" target="_blank" rel="noopener noreferrer">GC - Java 垃圾回收器之CMS GC问题分析与解决</a><ul><li>本文整理自<a href="https://tech.meituan.com/2020/11/12/java-9-cms-gc.html" target="_blank" rel="noopener noreferrer">美团技术团队</a>, 这篇文章将可以帮助你构建CMS GC相关问题解决的知识体系，分享给你。</li></ul></li></ul><blockquote><p><strong>F. Java进阶 - JVM相关 排错调优</strong>： 最后围绕着调试和排错，分析理解JVM调优参数，动态字节码技术及动态在线调试的原理；学会使用常用的调工具和在线动态调试工具等。</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121212385.png" alt="image-20220819213534570" tabindex="0" loading="lazy"><figcaption>image-20220819213534570</figcaption></figure><ul><li><a href="https://pdai.tech/md/java/jvm/java-jvm-param.html" target="_blank" rel="noopener noreferrer">调试排错 - JVM 调优参数</a><ul><li>本文对JVM涉及的常见的调优参数和垃圾回收参数进行阐述</li></ul></li><li><a href="https://pdai.tech/md/java/jvm/java-jvm-oom.html" target="_blank" rel="noopener noreferrer">调试排错 - Java 内存分析之堆内存和MetaSpace内存</a><ul><li>本文以两个简单的例子(<code>堆内存溢出</code>和<code>MetaSpace (元数据) 内存溢出</code>）解释Java 内存溢出的分析过程</li></ul></li><li><a href="https://pdai.tech/md/java/jvm/java-jvm-oom-offheap.html" target="_blank" rel="noopener noreferrer">调试排错 - Java 内存分析之堆外内存</a><ul><li>Java 堆外内存分析相对来说是复杂的，美团技术团队的<a href="https://tech.meituan.com/2019/01/03/spring-boot-native-memory-leak.html" target="_blank" rel="noopener noreferrer">Spring Boot引起的“堆外内存泄漏”排查及经验总结</a>可以为很多Native Code内存泄漏/占用提供方向性指引。</li></ul></li><li><a href="https://pdai.tech/md/java/jvm/java-jvm-thread-dump.html" target="_blank" rel="noopener noreferrer">调试排错 - Java 线程分析之线程Dump分析</a><ul><li>Thread Dump是非常有用的诊断Java应用问题的工具。</li></ul></li><li><a href="https://pdai.tech/md/java/jvm/java-jvm-debug-tools-linux.html" target="_blank" rel="noopener noreferrer">调试排错 - Java 问题排查之Linux命令</a><ul><li>Java 在线问题排查之通过linux常用命令排查。</li></ul></li><li><a href="https://pdai.tech/md/java/jvm/java-jvm-debug-tools-list.html" target="_blank" rel="noopener noreferrer">调试排错 - Java 问题排查之工具单</a><ul><li>Java 在线问题排查之通过java调试/排查工具进行问题定位。</li></ul></li><li><a href="https://pdai.tech/md/java/jvm/java-jvm-oom-tool.html" target="_blank" rel="noopener noreferrer">调试排错 - Java 问题排查之JVM可视化工具</a><ul><li>本文主要梳理常见的JVM可视化的分析工具，主要包括JConsole, Visual VM, Vusial GC, JProfile 和 MAT等。</li></ul></li><li><a href="https://pdai.tech/md/java/jvm/java-jvm-agent-arthas.html" target="_blank" rel="noopener noreferrer">调试排错 - Java 问题排查之应用在线调试Arthas</a><ul><li>本文主要介绍Alibaba开源的Java诊断工具，开源到现在已经1.7万个点赞了，深受开发者喜爱。具体解决在线问题，比如：</li><li>这个类从哪个 jar 包加载的? 为什么会报各种类相关的 Exception?</li><li>我改的代码为什么没有执行到? 难道是我没 commit? 分支搞错了?</li><li>遇到问题无法在线上 debug，难道只能通过加日志再重新发布吗?</li><li>线上遇到某个用户的数据处理有问题，但线上同样无法 debug，线下无法重现！</li><li>是否有一个全局视角来查看系统的运行状况?</li><li>有什么办法可以监控到JVM的实时运行状态?</li></ul></li><li><a href="https://pdai.tech/md/java/jvm/java-jvm-debug-idea.html" target="_blank" rel="noopener noreferrer">调试排错 - Java 问题排查之使用IDEA本地调试和远程调试</a><ul><li>Debug用来追踪代码的运行流程，通常在程序运行过程中出现异常，启用Debug模式可以分析定位异常发生的位置，以及在运行过程中参数的变化；并且在实际的排错过程中，还会用到Remote Debug。IDEA 相比 Eclipse/STS效率更高，本文主要介绍基于IDEA的Debug和Remote Debug的技巧。</li></ul></li><li><a href="https://pdai.tech/md/java/jvm/java-jvm-agent-usage.html" target="_blank" rel="noopener noreferrer">调试排错 - Java动态调试技术原理</a><ul><li>本文转载自 美团技术团队胡健的<a href="https://tech.meituan.com/2019/11/07/java-dynamic-debugging-technology.html" target="_blank" rel="noopener noreferrer">Java 动态调试技术原理及实践</a>, 通过学习java agent方式进行动态调试了解目前很多大厂开源的一些基于此的调试工具。</li></ul></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/java/jvm/java-jvm-x-overview.html" target="_blank" rel="noopener noreferrer"><strong>♥JVM相关知识体系详解♥</strong></a></p>',20)]))}const m=a(o,[["render",i],["__file","jvm-overview.html.vue"]]),p=JSON.parse('{"path":"/posts/Java/JavaJVM/jvm-overview.html","title":"JVM相关知识体系详解","lang":"zh-CN","frontmatter":{"aliases":"JVM相关知识体系详解","tags":null,"cssclass":null,"source":null,"order":10,"category":["Java","JVM"],"created":"2024-02-22 10:47","updated":"2024-03-12 12:12","description":"JVM相关知识体系详解 jvm-overviewjvm-overview 1. 学习要点 不同的虚拟机实现方式上也有差别，如果没有特别指出，这里的JVM指的是sun的HotSpot；不同的JDK版本略有差别，这里主要以1.8为主，具体差异请看各个章节中详解。下图主要表示的逻辑关系，用来将所有知识点放到一张图里，帮助你理解。 java-jvm-overv...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/JavaJVM/jvm-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"JVM相关知识体系详解"}],["meta",{"property":"og:description","content":"JVM相关知识体系详解 jvm-overviewjvm-overview 1. 学习要点 不同的虚拟机实现方式上也有差别，如果没有特别指出，这里的JVM指的是sun的HotSpot；不同的JDK版本略有差别，这里主要以1.8为主，具体差异请看各个章节中详解。下图主要表示的逻辑关系，用来将所有知识点放到一张图里，帮助你理解。 java-jvm-overv..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121212286.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM相关知识体系详解\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121212286.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121212350.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121212385.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 学习要点","slug":"_1-学习要点","link":"#_1-学习要点","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":7.08,"words":2123},"filePathRelative":"posts/Java/JavaJVM/jvm-overview.md","localizedDate":"2024年10月21日","excerpt":"\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121212286.png\\" alt=\\"jvm-overview\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>jvm-overview</figcaption></figure>\\n<h2>1. 学习要点</h2>\\n<blockquote>\\n<p>不同的虚拟机实现方式上也有差别，如果没有特别指出，这里的JVM指的是sun的HotSpot；不同的JDK版本略有差别，这里主要以1.8为主，具体差异请看各个章节中详解。下图主要表示的逻辑关系，用来将所有知识点放到一张图里，帮助你理解。</p>\\n</blockquote>","autoDesc":true}');export{m as comp,p as data};