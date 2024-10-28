import{_ as e,c as i,a as t,o as n}from"./app-W9QyTiMU.js";const r={};function o(s,a){return n(),i("div",null,a[0]||(a[0]=[t(`<h1 id="调试排错-java-问题排查之jvm可视化工具" tabindex="-1"><a class="header-anchor" href="#调试排错-java-问题排查之jvm可视化工具"><span>调试排错 - Java 问题排查之JVM可视化工具</span></a></h1><blockquote><p>这些工具只是你排查问题的产生数据，帮助你更好的分析问题的工具，而真正分析还是需要你自己的经验总结。如OOM 和死锁,什么情况会导致OOM/死锁，OOM/死锁的原理是什么?</p></blockquote><blockquote><p>本文主要梳理常见的JVM可视化的分析工具，主要包括JConsole, Visual VM, Vusial GC, JProfile 和 MAT等。</p></blockquote><h2 id="_1-jconsole" tabindex="-1"><a class="header-anchor" href="#_1-jconsole"><span>1. JConsole</span></a></h2><blockquote><p>Jconsole （Java Monitoring and Management Console），JDK自带的基于JMX的可视化监视、管理工具。 官方文档可以参考<a href="https://docs.oracle.com/javase/8/docs/technotes/guides/management/jconsole.html" target="_blank" rel="noopener noreferrer">这里</a></p></blockquote><ul><li><strong>找到jconsole工具</strong></li></ul><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">pdai@MacBook-Pro</span><span style="color:#98C379;--shiki-dark:#98C379;"> bin</span><span style="color:#98C379;--shiki-dark:#98C379;"> %</span><span style="color:#98C379;--shiki-dark:#98C379;"> ls</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">jaotc</span><span style="color:#98C379;--shiki-dark:#98C379;">		jcmd</span><span style="color:#98C379;--shiki-dark:#98C379;">		jinfo</span><span style="color:#98C379;--shiki-dark:#98C379;">		jshell</span><span style="color:#98C379;--shiki-dark:#98C379;">		rmid</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">jar</span><span style="color:#98C379;--shiki-dark:#98C379;">		jconsole</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">这里</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)	</span><span style="color:#98C379;--shiki-dark:#98C379;">jjs</span><span style="color:#98C379;--shiki-dark:#98C379;">		jstack</span><span style="color:#98C379;--shiki-dark:#98C379;">		rmiregistry</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">jarsigner</span><span style="color:#98C379;--shiki-dark:#98C379;">	jdb</span><span style="color:#98C379;--shiki-dark:#98C379;">		jlink</span><span style="color:#98C379;--shiki-dark:#98C379;">		jstat</span><span style="color:#98C379;--shiki-dark:#98C379;">		serialver</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">java</span><span style="color:#98C379;--shiki-dark:#98C379;">		jdeprscan</span><span style="color:#98C379;--shiki-dark:#98C379;">	jmap</span><span style="color:#98C379;--shiki-dark:#98C379;">		jstatd</span><span style="color:#98C379;--shiki-dark:#98C379;">		unpack200</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">javac</span><span style="color:#98C379;--shiki-dark:#98C379;">		jdeps</span><span style="color:#98C379;--shiki-dark:#98C379;">		jmod</span><span style="color:#98C379;--shiki-dark:#98C379;">		keytool</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">javadoc</span><span style="color:#98C379;--shiki-dark:#98C379;">		jhsdb</span><span style="color:#98C379;--shiki-dark:#98C379;">		jps</span><span style="color:#98C379;--shiki-dark:#98C379;">		pack200</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">javap</span><span style="color:#98C379;--shiki-dark:#98C379;">		jimage</span><span style="color:#98C379;--shiki-dark:#98C379;">		jrunscript</span><span style="color:#98C379;--shiki-dark:#98C379;">	rmic</span></span></code></pre></div><ul><li><strong>打开jconsole</strong></li></ul><p>选择</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220826211042545.png" alt="image-20220826211042545"><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220826211105054.png" alt="image-20220826211105054"><ul><li><strong>查看概述、内存、线程、类、VM概要、MBean</strong></li></ul><p>概述</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007312.png" alt="image-20220826211138575" tabindex="0" loading="lazy"><figcaption>image-20220826211138575</figcaption></figure><p>内存</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007354.png" alt="image-20220826211158645" tabindex="0" loading="lazy"><figcaption>image-20220826211158645</figcaption></figure><p>线程</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007383.png" alt="image-20220826211221102" tabindex="0" loading="lazy"><figcaption>image-20220826211221102</figcaption></figure><p>类</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007417.png" alt="image-20220826211238946" tabindex="0" loading="lazy"><figcaption>image-20220826211238946</figcaption></figure><p>VM概要</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007446.png" alt="image-20220826211302951" tabindex="0" loading="lazy"><figcaption>image-20220826211302951</figcaption></figure><h2 id="_2-visual-vm" tabindex="-1"><a class="header-anchor" href="#_2-visual-vm"><span>2. Visual VM</span></a></h2><blockquote><p>VisualVM 是一款免费的，集成了多个 JDK 命令行工具的可视化工具，它能为您提供强大的分析能力，对 Java 应用程序做性能分析和调优。这些功能包括生成和分析海量数据、跟踪内存泄漏、监控垃圾回收器、执行内存和 CPU 分析，同时它还支持在 MBeans 上进行浏览和操作。</p></blockquote><p>Overview</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007467.png" alt="image-20220826211421295" tabindex="0" loading="lazy"><figcaption>image-20220826211421295</figcaption></figure><p>Monitor</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007493.png" alt="image-20220826211450960" tabindex="0" loading="lazy"><figcaption>image-20220826211450960</figcaption></figure><p>线程</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007524.png" alt="image-20220826211511264" tabindex="0" loading="lazy"><figcaption>image-20220826211511264</figcaption></figure><p>Sampler</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007550.png" alt="image-20220826211556683" tabindex="0" loading="lazy"><figcaption>image-20220826211556683</figcaption></figure><h2 id="_3-visual-gc" tabindex="-1"><a class="header-anchor" href="#_3-visual-gc"><span>3. Visual GC</span></a></h2><blockquote><p>visual gc 是 visualvm 中的图形化查看 gc 状况的插件。官方文档可以参考<a href="https://www.oracle.com/java/technologies/visual-garbage-collection-monitoring-tool.html" target="_blank" rel="noopener noreferrer">这里</a></p></blockquote><p>比如我在IDEA中使用visual GC 插件来看GC状况。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007573.png" alt="image-20220826211647985" tabindex="0" loading="lazy"><figcaption>image-20220826211647985</figcaption></figure><h2 id="_4-jprofiler" tabindex="-1"><a class="header-anchor" href="#_4-jprofiler"><span>4. JProfiler</span></a></h2><blockquote><p>Profiler 是一个商业的主要用于检查和跟踪系统（限于Java开发的）的性能的工具。JProfiler可以通过时时的监控系统的内存使用情况，随时监视垃圾回收，线程运行状况等手段，从而很好的监视JVM运行情况及其性能。</p></blockquote><p>JProfiler 是一个全功能的Java剖析工具（profiler），专用于分析J2SE和J2EE应用程序。它把CPU、执行绪和内存的剖析组合在一个强大的应用中。 JProfiler可提供许多IDE整合和应用服务器整合用途。JProfiler直觉式的GUI让你可以找到效能瓶颈、抓出内存漏失(memory leaks)、并解决执行绪的问题。它让你得以对heap walker作资源回收器的root analysis，可以轻易找出内存漏失；heap快照（snapshot）模式让未被参照（reference）的对象、稍微被参照的对象、或在终结（finalization）队列的对象都会被移除；整合精灵以便剖析浏览器的Java外挂功能。</p><h3 id="_4-1-核心组件" tabindex="-1"><a class="header-anchor" href="#_4-1-核心组件"><span>4.1 核心组件</span></a></h3><p>JProfiler 包含用于采集目标 JVM 分析数据的 JProfiler agent、用于可视化分析数据的 JProfiler UI、提供各种功能的命令行工具，它们之间的关系如下图所示。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007593.png" alt="image-20220826212237379" tabindex="0" loading="lazy"><figcaption>image-20220826212237379</figcaption></figure><ul><li><strong>JProfiler agent</strong></li></ul><p>JProfiler agent 是一个本地库，它可以在 JVM 启动时通过参数<code>-agentpath:&lt;path to native library&gt;</code>进行加载或者在程序运行时通过<a href="http://lovestblog.cn/blog/2014/06/18/jvm-attach/" target="_blank" rel="noopener noreferrer">JVM Attach 机制 (opens new window)</a>进行加载。Agent 被成功加载后，会设置 JVMTI 环境，监听虚拟机产生的事件，如类加载、线程创建等。例如，当它监听到类加载事件后，会给这些类注入用于执行度量操作的字节码。</p><ul><li><strong>JProfiler UI</strong></li></ul><p>JProfiler UI 是一个可独立部署的组件，它通过 socket 和 agent 建立连接。这意味着不论目标 JVM 运行在本地还是远端，JProfiler UI 和 agent 间的通信机制都是一样的。</p><p>JProfiler UI 的主要功能是展示通过 agent 采集上来的分析数据，此外还可以通过它控制 agent 的采集行为，将快照保存至磁盘，展示保存的快照。</p><ul><li><strong>命令行工具</strong></li></ul><p>JProfiler 提供了一系列命令行工具以实现不同的功能。</p><ol><li>jpcontroller - 用于控制 agent 的采集行为。它通过 agent 注册的 JProfiler MBean 向 agent 传递命令。</li><li>jpenable - 用于将 agent 加载到一个正在运行的 JVM 上。</li><li>jpdump - 用于获取正在运行的 JVM 的堆快照。</li><li>jpexport &amp; jpcompare - 用于从保存的快照中提取数据并创建 HTML 报告。</li></ol><h3 id="_4-2-运行测试" tabindex="-1"><a class="header-anchor" href="#_4-2-运行测试"><span>4.2 运行测试</span></a></h3><p><strong>我们运行一个SpringBoot测试工程，选择attach到JVM</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007621.png" alt="image-20220826212442277" tabindex="0" loading="lazy"><figcaption>image-20220826212442277</figcaption></figure><p>选择指定的进程</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007647.png" alt="image-20220826212509327" tabindex="0" loading="lazy"><figcaption>image-20220826212509327</figcaption></figure><p><strong>设置数据采集模式</strong></p><p>JProfier 提供两种数据采集模式 Sampling 和 Instrumentation。</p><ul><li>Sampling - 适合于不要求数据完全精确的场景。优点是对系统性能的影响较小，缺点是某些特性不支持（如方法级别的统计信息）。</li><li>Instrumentation - 完整功能模式，统计信息也是精确的。缺点是如果需要分析的类比较多，对应用性能影响较大。为了降低影响，往往需要和 Filter 一起使用。</li></ul><p>由于我们需要获取方法级别的统计信息，这里选择了 Instrumentation 模式。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007670.png" alt="image-20220826212729645" tabindex="0" loading="lazy"><figcaption>image-20220826212729645</figcaption></figure><p>概览</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007698.png" alt="image-20220826212745879" tabindex="0" loading="lazy"><figcaption>image-20220826212745879</figcaption></figure><p>内存</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007722.png" alt="image-20220826212806029" tabindex="0" loading="lazy"><figcaption>image-20220826212806029</figcaption></figure><p>实时内存分布（类对象）</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007750.png" alt="image-20220826212834350" tabindex="0" loading="lazy"><figcaption>image-20220826212834350</figcaption></figure><p>dump 堆内存</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007772.png" alt="image-20220826212851940" tabindex="0" loading="lazy"><figcaption>image-20220826212851940</figcaption></figure><p>dump完会直接打开显示</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007795.png" alt="image-20220826212912268" tabindex="0" loading="lazy"><figcaption>image-20220826212912268</figcaption></figure><p>线程存储</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007820.png" alt="image-20220826212929892" tabindex="0" loading="lazy"><figcaption>image-20220826212929892</figcaption></figure><p>导出HTML报告</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007844.png" alt="image-20220826212945966" tabindex="0" loading="lazy"><figcaption>image-20220826212945966</figcaption></figure><p>CPU 调用树</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007869.png" alt="image-20220826213003289" tabindex="0" loading="lazy"><figcaption>image-20220826213003289</figcaption></figure><p>线程历史</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007893.png" alt="image-20220826213020235" tabindex="0" loading="lazy"><figcaption>image-20220826213020235</figcaption></figure><p>JEE &amp; 探针</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007925.png" alt="image-20220826213038472" tabindex="0" loading="lazy"><figcaption>image-20220826213038472</figcaption></figure><p>MBeans</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007958.png" alt="image-20220826213101053" tabindex="0" loading="lazy"><figcaption>image-20220826213101053</figcaption></figure><h2 id="_5-eclipse-memory-analyzer-mat" tabindex="-1"><a class="header-anchor" href="#_5-eclipse-memory-analyzer-mat"><span>5. Eclipse Memory Analyzer (MAT)</span></a></h2><blockquote><p>MAT 是一种快速且功能丰富的 Java 堆分析器，可帮助你发现内存泄漏并减少内存消耗。 MAT在的堆内存分析问题使用极为广泛，需要重点掌握。</p></blockquote><p>可以在<a href="https://www.eclipse.org/mat/" target="_blank" rel="noopener noreferrer">这里</a>下载， 官方文档可以看<a href="http://help.eclipse.org/latest/index.jsp?topic=/org.eclipse.mat.ui.help/welcome.html" target="_blank" rel="noopener noreferrer">这里</a></p><ul><li><strong>Overview</strong></li></ul><p>包含内存分布，以及潜在的问题推测</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007986.png" alt="image-20220826213253381" tabindex="0" loading="lazy"><figcaption>image-20220826213253381</figcaption></figure><ul><li><strong>Histogram</strong></li></ul><p>可以列出内存中的对象，对象的个数以及大小。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007019.png" alt="image-20220826213315424" tabindex="0" loading="lazy"><figcaption>image-20220826213315424</figcaption></figure><p>具体需要重点理解如下两个概念，可参考<a href="http://help.eclipse.org/latest/index.jsp?topic=/org.eclipse.mat.ui.help/welcome.html" target="_blank" rel="noopener noreferrer">官网文档</a>的解释</p><ol><li>Shallow Heap ：一个对象内存的消耗大小，不包含对其他对象的引用</li><li>Retained Heap ：是shallow Heap的总和，也就是该对象被GC之后所能回收到内存的总和</li></ol><ul><li><strong>Dominator Tree</strong></li></ul><p>可以列出那个线程，以及线程下面的那些对象占用的空间。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007045.png" alt="image-20220826213354422" tabindex="0" loading="lazy"><figcaption>image-20220826213354422</figcaption></figure><ul><li><strong>Top consumers</strong></li></ul><p>通过图形列出最大的object。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007075.png" alt="image-20220826213415340" tabindex="0" loading="lazy"><figcaption>image-20220826213415340</figcaption></figure><ul><li><strong>Leak Suspects</strong></li></ul><p>自动分析潜在可能的泄漏。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007104.png" alt="image-20220826213433274" tabindex="0" loading="lazy"><figcaption>image-20220826213433274</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/java/jvm/java-jvm-oom-tool.html" target="_blank" rel="noopener noreferrer"><strong>调试排错 - Java 问题排查之JVM可视化工具</strong></a></p>`,104)]))}const g=e(r,[["render",o],["__file","java-jvm-oom-tool.html.vue"]]),p=JSON.parse(`{"path":"/posts/Java/JavaJVM/java-jvm-oom-tool.html","title":"调试排错 - Java 问题排查之JVM可视化工具","lang":"zh-CN","frontmatter":{"aliases":"调试排错 - Java 问题排查之JVM可视化工具, '调试排错 - Java 问题排查之JVM可视化工具'","tags":null,"cssclass":null,"source":null,"order":270,"category":["Java","JVM"],"created":"2024-02-22 10:47","updated":"2024-03-12 11:24","description":"调试排错 - Java 问题排查之JVM可视化工具 这些工具只是你排查问题的产生数据，帮助你更好的分析问题的工具，而真正分析还是需要你自己的经验总结。如OOM 和死锁,什么情况会导致OOM/死锁，OOM/死锁的原理是什么? 本文主要梳理常见的JVM可视化的分析工具，主要包括JConsole, Visual VM, Vusial GC, JProfile...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/JavaJVM/java-jvm-oom-tool.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"调试排错 - Java 问题排查之JVM可视化工具"}],["meta",{"property":"og:description","content":"调试排错 - Java 问题排查之JVM可视化工具 这些工具只是你排查问题的产生数据，帮助你更好的分析问题的工具，而真正分析还是需要你自己的经验总结。如OOM 和死锁,什么情况会导致OOM/死锁，OOM/死锁的原理是什么? 本文主要梳理常见的JVM可视化的分析工具，主要包括JConsole, Visual VM, Vusial GC, JProfile..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007312.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"调试排错 - Java 问题排查之JVM可视化工具\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007312.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007354.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007383.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007417.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007446.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007467.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007493.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007524.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007550.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007573.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007593.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007621.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007647.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007670.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007698.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007722.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007750.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007772.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007795.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007820.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007844.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007869.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007893.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007925.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007958.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007986.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007019.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007045.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007075.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121007104.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. JConsole","slug":"_1-jconsole","link":"#_1-jconsole","children":[]},{"level":2,"title":"2. Visual VM","slug":"_2-visual-vm","link":"#_2-visual-vm","children":[]},{"level":2,"title":"3. Visual GC","slug":"_3-visual-gc","link":"#_3-visual-gc","children":[]},{"level":2,"title":"4. JProfiler","slug":"_4-jprofiler","link":"#_4-jprofiler","children":[{"level":3,"title":"4.1 核心组件","slug":"_4-1-核心组件","link":"#_4-1-核心组件","children":[]},{"level":3,"title":"4.2 运行测试","slug":"_4-2-运行测试","link":"#_4-2-运行测试","children":[]}]},{"level":2,"title":"5. Eclipse Memory Analyzer (MAT)","slug":"_5-eclipse-memory-analyzer-mat","link":"#_5-eclipse-memory-analyzer-mat","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.84,"words":1751},"filePathRelative":"posts/Java/JavaJVM/java-jvm-oom-tool.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>这些工具只是你排查问题的产生数据，帮助你更好的分析问题的工具，而真正分析还是需要你自己的经验总结。如OOM 和死锁,什么情况会导致OOM/死锁，OOM/死锁的原理是什么?</p>\\n</blockquote>\\n<blockquote>\\n<p>本文主要梳理常见的JVM可视化的分析工具，主要包括JConsole, Visual VM, Vusial GC, JProfile 和 MAT等。</p>\\n</blockquote>\\n<h2>1. JConsole</h2>\\n<blockquote>\\n<p>Jconsole （Java Monitoring and Management Console），JDK自带的基于JMX的可视化监视、管理工具。 官方文档可以参考<a href=\\"https://docs.oracle.com/javase/8/docs/technotes/guides/management/jconsole.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">这里</a></p>\\n</blockquote>","autoDesc":true}`);export{g as comp,p as data};
