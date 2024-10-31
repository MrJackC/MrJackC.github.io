import{_ as e,c as s,a as l,o as n}from"./app-mWs04Xnh.js";const p={};function t(i,a){return n(),s("div",null,a[0]||(a[0]=[l(`<h1 id="线上如何排查fullgc-系统-cpu-突然飙升且-gc-频繁-你该如何排查" tabindex="-1"><a class="header-anchor" href="#线上如何排查fullgc-系统-cpu-突然飙升且-gc-频繁-你该如何排查"><span>线上如何排查FullGC(系统 CPU 突然飙升且 GC 频繁，你该如何排查)</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>处理过线上问题的同学基本上都会遇到系统突然运行缓慢，CPU 100%,以及Full GC 次数过多的问题。</p><h2 id="_2-初步解决方案" tabindex="-1"><a class="header-anchor" href="#_2-初步解决方案"><span>2. 初步解决方案</span></a></h2><p>如果出现该问题导致线上系统不可用，那么首先需要做的就是，<strong>导出jstack和内存信息，然后重启系统</strong>。尽快保证系统的可用性。</p><h2 id="_3-产生的原因" tabindex="-1"><a class="header-anchor" href="#_3-产生的原因"><span>3. 产生的原因</span></a></h2><p>常见原因</p><ol><li>代码中某个位置读取数据量较大，导致系统内存耗尽，从而导致Full GC次数过多，系统缓慢</li><li>代码中有较多消耗CPU的操作，导致CPU过高，系统运行缓慢</li></ol><p>相对来说，这是出现频率最高的两种线上问题，而且它们会直接导致系统不可用。另外有几种情况也会导致某个功能运行缓慢，但是不至于导致系统不可用：</p><ol><li>代码某个位置有阻塞性的操作，导致该功能调用整体比较耗时，但出现是比较随机的</li><li>某个线程由于某种原因而进入WAITING状态，从而导致系统整体比较缓慢</li><li>由于锁使用不当，导致多个线程进入死锁状态，从而导致系统整体比较缓慢</li></ol><p>对于这三种情况，通过查看CPU和系统内存情况是无法查看出具体问题的，因为它们相对来说都是具有一定阻塞性操作，CPU和系统内存使用情况都不高，但是功能却很慢。下面我们就通过查看系统日志来一步一步甄别上述几种问题。</p><h3 id="_3-1-full-gc次数过多导致" tabindex="-1"><a class="header-anchor" href="#_3-1-full-gc次数过多导致"><span>3.1 Full GC次数过多导致</span></a></h3><p>相对来说，这种情况是最容易出现的，尤其是新功能上线时。对于Full GC较多的情况，其主要有如下两个特征：</p><ul><li>线上多个线程的CPU都超过了100%，通过jstack命令可以看到这些线程主要是垃圾回收线程</li><li>通过jstat命令监控GC情况，可以看到Full GC次数非常多，并且次数在不断增加。</li></ul><p>首先我们可以使用<code>top</code>命令查看系统CPU的占用情况，如下是系统CPU较高的一个示例：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>top - 08:31:10 up 30 min,  0 users,  load average: 0.73, 0.58, 0.34</span></span>
<span class="line"><span>KiB Mem:   2046460 total,  1923864 used,   122596 free,    14388 buffers</span></span>
<span class="line"><span>KiB Swap:  1048572 total,        0 used,  1048572 free.  1192352 cached Mem</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND</span></span>
<span class="line"><span>    9 root      20   0 2557160 288976  15812 S  98.0 14.1   0:42.60 java</span></span></code></pre></div><p>可以看到，有一个Java程序此时CPU占用量达到了98.8%，此时我们可以复制该进程id<code>9</code>，并且使用如下命令查看呢该进程的各个线程运行情况：</p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>top -Hp 9</span></span></code></pre></div><p>该进程下的各个线程运行情况如下：</p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>top - 08:31:16 up 30 min,  0 users,  load average: 0.75, 0.59, 0.35</span></span>
<span class="line"><span>Threads:  11 total,   1 running,  10 sleeping,   0 stopped,   0 zombie</span></span>
<span class="line"><span>%Cpu(s):  3.5 us,  0.6 sy,  0.0 ni, 95.9 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st</span></span>
<span class="line"><span>KiB Mem:   2046460 total,  1924856 used,   121604 free,    14396 buffers</span></span>
<span class="line"><span>KiB Swap:  1048572 total,        0 used,  1048572 free.  1192532 cached Mem</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  PID USER      PR  NI    VIRT    RES    SHR S %CPU %MEM     TIME+ COMMAND</span></span>
<span class="line"><span>   10 root      20   0 2557160 289824  15872 R 79.3 14.2   0:41.49 java</span></span>
<span class="line"><span>   11 root      20   0 2557160 289824  15872 S 13.2 14.2   0:06.78 java</span></span></code></pre></div><p>可以看到，在进程为<code>9</code>的Java程序中各个线程的CPU占用情况，接下来我们可以通过jstack命令查看线程id为<code>10</code>的线程为什么耗费CPU最高。需要注意的是，在jsatck命令展示的结果中，线程id都转换成了十六进制形式。可以用如下命令查看转换结果，也可以找一个科学计算器进行转换：</p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>root@a39de7e7934b:/# printf &quot;%x\\n&quot; 10</span></span>
<span class="line"><span>a</span></span></code></pre></div><p>这里打印结果说明该线程在jstack中的展现形式为<code>0xa</code>，通过jstack命令我们可以看到如下信息</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&quot;main&quot; #1 prio=5 os_prio=0 tid=0x00007f8718009800 nid=0xb runnable [0x00007f871fe41000]</span></span>
<span class="line"><span>   java.lang.Thread.State: RUNNABLE</span></span>
<span class="line"><span>	at com.aibaobei.chapter2.eg2.UserDemo.main(UserDemo.java:9)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;VM Thread&quot; os_prio=0 tid=0x00007f871806e000 nid=0xa runnable</span></span></code></pre></div><p>这里的VM Thread一行的最后显示<code>nid=0xa</code>，这里nid的意思就是操作系统线程id的意思。而VM Thread指的就是垃圾回收的线程。这里我们基本上可以确定，当前系统缓慢的原因主要是垃圾回收过于频繁，导致GC停顿时间较长。我们通过如下命令可以查看GC的情况：</p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>root@8d36124607a0:/# jstat -gcutil 9 1000 10</span></span>
<span class="line"><span>  S0     S1     E      O      M     CCS    YGC     YGCT    FGC    FGCT     GCT</span></span>
<span class="line"><span>  0.00   0.00   0.00  75.07  59.09  59.60   3259    0.919  6517    7.715    8.635</span></span>
<span class="line"><span>  0.00   0.00   0.00   0.08  59.09  59.60   3306    0.930  6611    7.822    8.752</span></span>
<span class="line"><span>  0.00   0.00   0.00   0.08  59.09  59.60   3351    0.943  6701    7.924    8.867</span></span>
<span class="line"><span>  0.00   0.00   0.00   0.08  59.09  59.60   3397    0.955  6793    8.029    8.984</span></span></code></pre></div><p>可以看到，这里FGC指的是Full GC数量，这里高达6793，而且还在不断增长。从而进一步证实了是由于内存溢出导致的系统缓慢。那么这里确认了内存溢出，但是如何查看你是哪些对象导致的内存溢出呢，这个可以dump出内存日志，然后通过eclipse的mat工具进行查看，如下是其展示的一个对象树结构：</p><p>![image-20200317004122623](/Users/zsz/Library/Application Support/typora-user-images/image-20200317004122623.png)</p><p>经过mat工具分析之后，我们基本上就能确定内存中主要是哪个对象比较消耗内存，然后找到该对象的创建位置，进行处理即可。这里的主要是PrintStream最多，但是我们也可以看到，其内存消耗量只有12.2%。也就是说，其还不足以导致大量的Full GC，此时我们需要考虑另外一种情况，就是代码或者第三方依赖的包中有显示的<code>System.gc()</code>调用。这种情况我们查看dump内存得到的文件即可判断，因为其会打印GC原因：</p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[Full GC (System.gc()) [Tenured: 262546K-&gt;262546K(349568K), 0.0014879 secs] 262546K-&gt;262546K(506816K), [Metaspace: 3109K-&gt;3109K(1056768K)], 0.0015151 secs] [Times: user=0.00 sys=0.00, real=0.01 secs] </span></span>
<span class="line"><span>[GC (Allocation Failure) [DefNew: 2795K-&gt;0K(157248K), 0.0001504 secs][Tenured: 262546K-&gt;402K(349568K), 0.0012949 secs] 265342K-&gt;402K(506816K), [Metaspace: 3109K-&gt;3109K(1056768K)], 0.0014699 secs] [Times: user=0.00</span></span></code></pre></div><p>比如这里第一次GC是由于<code>System.gc()</code>的显示调用导致的，而第二次GC则是JVM主动发起的。总结来说，对于Full GC次数过多，主要有以下两种原因：</p><ul><li>代码中一次获取了大量的对象，导致内存溢出，此时可以通过eclipse的mat工具查看内存中有哪些对象比较多；</li><li>内存占用不高，但是Full GC次数还是比较多，此时可能是显示的<code>System.gc()</code>调用导致GC次数过多，这可以通过添加<code>-XX:+DisableExplicitGC</code>来禁用JVM对显示GC的响应。</li></ul><h3 id="_3-2-cpu过高" tabindex="-1"><a class="header-anchor" href="#_3-2-cpu过高"><span>3.2 CPU过高</span></a></h3><p>查看参考文章</p><h3 id="_3-3-不定期出现的接口耗时现象" tabindex="-1"><a class="header-anchor" href="#_3-3-不定期出现的接口耗时现象"><span>3.3 不定期出现的接口耗时现象</span></a></h3><p>查看参考文章</p><h3 id="_3-4-某个线程进入waiting状态" tabindex="-1"><a class="header-anchor" href="#_3-4-某个线程进入waiting状态"><span>3.4 某个线程进入WAITING状态</span></a></h3><p>查看参考文章</p><h3 id="_3-5-死锁" tabindex="-1"><a class="header-anchor" href="#_3-5-死锁"><span>3.5 死锁</span></a></h3><p>查看参考文章</p><h2 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结"><span>4. 总结</span></a></h2><ol><li>通过top命令查看cpu情况，</li><li>如果CPU比较高， <ol><li>则通过<code>top -Hp &lt;pid&gt;</code> 命令查看当前进程的各个线程运行情况，</li><li>找出CPU过高的线程之后，将其线程id转换为十六进制的表现形式</li><li>然后在jstack日志中查看该线程主要在进行的工作 <ol><li>如果是正常的用户线程，则通过该线程的堆栈信息查看其具体是在哪处用户代码处运行比较消耗CPU；</li><li>如果该线程是<code>VM Thread</code>，则通过<code>jstat -gcutil </code>命令监控当前系统的GC状况，然后通过<code>jmap dump:format=b,file= </code>导出系统当前的内存数据。导出之后将内存情况放到eclipse的mat工具中进行分析即可得出内存中主要是什么对象比较消耗内存，进而可以处理相关代码；</li></ol></li><li>如果通过<code>top</code>命令看到CPU并不高，并且系统内存占用率也比较低。此时就可以考虑是否是由于另外三种情况导致的问题 <ol><li>如果是接口调用比较耗时，并且是不定时出现，则可以通过压测的方式加大阻塞点出现的频率，从而通过<code>jstack</code>查看堆栈信息，找到阻塞点；</li><li>如果是某个功能突然出现停滞的状况，这种情况也无法复现，此时可以通过多次导出<code>jstack</code>日志的方式对比哪些用户线程是一直都处于等待状态，这些线程就是可能存在问题的线程；</li><li>如果通过<code>jstack</code>可以查看到死锁状态，则可以检查产生死锁的两个线程的具体阻塞点，从而处理相应的问题。</li></ol></li></ol></li></ol><h2 id="面试实战" tabindex="-1"><a class="header-anchor" href="#面试实战"><span>面试实战</span></a></h2><p>FullGC你再线上遇到问题你应该怎么排查？</p><blockquote><ol><li>使用 jstat -gcutil 命令监控当前系统GC状况</li><li>通过jmap dump：format=b,file=导出系统当前的内存数据</li><li>通过mat工具分析得出内存中主要什么对象消耗内存，进而可以处理相关代码</li></ol></blockquote><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/84203026" target="_blank" rel="noopener noreferrer">面试被问：如果系统 CPU 突然飙升且 GC 频繁，你该如何排查？</a></p>`,47)]))}const o=e(p,[["render",t],["__file","java-jvm-gc-fullgc.html.vue"]]),r=JSON.parse('{"path":"/posts/Java/JavaJVM/java-jvm-gc-fullgc.html","title":"线上如何排查FullGC(系统 CPU 突然飙升且 GC 频繁，你该如何排查)","lang":"zh-CN","frontmatter":{"aliases":"线上如何排查FullGC(系统 CPU 突然飙升且 GC 频繁，你该如何排查)","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:47","updated":"2024-03-12 09:56","description":"线上如何排查FullGC(系统 CPU 突然飙升且 GC 频繁，你该如何排查) 1. 背景 处理过线上问题的同学基本上都会遇到系统突然运行缓慢，CPU 100%,以及Full GC 次数过多的问题。 2. 初步解决方案 如果出现该问题导致线上系统不可用，那么首先需要做的就是，导出jstack和内存信息，然后重启系统。尽快保证系统的可用性。 3. 产生的...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/JavaJVM/java-jvm-gc-fullgc.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"线上如何排查FullGC(系统 CPU 突然飙升且 GC 频繁，你该如何排查)"}],["meta",{"property":"og:description","content":"线上如何排查FullGC(系统 CPU 突然飙升且 GC 频繁，你该如何排查) 1. 背景 处理过线上问题的同学基本上都会遇到系统突然运行缓慢，CPU 100%,以及Full GC 次数过多的问题。 2. 初步解决方案 如果出现该问题导致线上系统不可用，那么首先需要做的就是，导出jstack和内存信息，然后重启系统。尽快保证系统的可用性。 3. 产生的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://springg.us.kg/Users/zsz/Library/Application Support/typora-user-images/image-20200317004122623.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线上如何排查FullGC(系统 CPU 突然飙升且 GC 频繁，你该如何排查)\\",\\"image\\":[\\"https://springg.us.kg/Users/zsz/Library/Application Support/typora-user-images/image-20200317004122623.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 初步解决方案","slug":"_2-初步解决方案","link":"#_2-初步解决方案","children":[]},{"level":2,"title":"3. 产生的原因","slug":"_3-产生的原因","link":"#_3-产生的原因","children":[{"level":3,"title":"3.1 Full GC次数过多导致","slug":"_3-1-full-gc次数过多导致","link":"#_3-1-full-gc次数过多导致","children":[]},{"level":3,"title":"3.2 CPU过高","slug":"_3-2-cpu过高","link":"#_3-2-cpu过高","children":[]},{"level":3,"title":"3.3 不定期出现的接口耗时现象","slug":"_3-3-不定期出现的接口耗时现象","link":"#_3-3-不定期出现的接口耗时现象","children":[]},{"level":3,"title":"3.4 某个线程进入WAITING状态","slug":"_3-4-某个线程进入waiting状态","link":"#_3-4-某个线程进入waiting状态","children":[]},{"level":3,"title":"3.5 死锁","slug":"_3-5-死锁","link":"#_3-5-死锁","children":[]}]},{"level":2,"title":"4. 总结","slug":"_4-总结","link":"#_4-总结","children":[]},{"level":2,"title":"面试实战","slug":"面试实战","link":"#面试实战","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":7.82,"words":2345},"filePathRelative":"posts/Java/JavaJVM/java-jvm-gc-fullgc.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>处理过线上问题的同学基本上都会遇到系统突然运行缓慢，CPU 100%,以及Full GC 次数过多的问题。</p>\\n<h2>2. 初步解决方案</h2>\\n<p>如果出现该问题导致线上系统不可用，那么首先需要做的就是，<strong>导出jstack和内存信息，然后重启系统</strong>。尽快保证系统的可用性。</p>\\n<h2>3. 产生的原因</h2>\\n<p>常见原因</p>\\n<ol>\\n<li>代码中某个位置读取数据量较大，导致系统内存耗尽，从而导致Full GC次数过多，系统缓慢</li>\\n<li>代码中有较多消耗CPU的操作，导致CPU过高，系统运行缓慢</li>\\n</ol>","autoDesc":true}');export{o as comp,r as data};
