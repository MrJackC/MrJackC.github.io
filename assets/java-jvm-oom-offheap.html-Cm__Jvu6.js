import{_ as a,c as n,a as i,o as e}from"./app-W9QyTiMU.js";const l={};function r(p,s){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="调试排错-java-内存分析之堆外内存" tabindex="-1"><a class="header-anchor" href="#调试排错-java-内存分析之堆外内存"><span>调试排错 - Java 内存分析之堆外内存</span></a></h1><blockquote><p>Java 堆外内存分析相对来说是复杂的，美团技术团队的<a href="https://tech.meituan.com/2019/01/03/spring-boot-native-memory-leak.html" target="_blank" rel="noopener noreferrer">Spring Boot引起的“堆外内存泄漏”排查及经验总结</a>可以为很多Native Code内存泄漏/占用提供方向性指引。</p></blockquote><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>为了更好地实现对项目的管理，我们将组内一个项目迁移到MDP框架（基于Spring Boot），随后我们就发现系统会频繁报出Swap区域使用量过高的异常。笔者被叫去帮忙查看原因，发现配置了4G堆内内存，但是实际使用的物理内存竟然高达7G，确实不正常。JVM参数配置是“-XX:MetaspaceSize=256M -XX:MaxMetaspaceSize=256M -XX:+AlwaysPreTouch -XX:ReservedCodeCacheSize=128m -XX:InitialCodeCacheSize=128m, -Xss512k -Xmx4g -Xms4g,-XX:+UseG1GC -XX:G1HeapRegionSize=4M”，实际使用的物理内存如下图所示：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006551.png" alt="image-20220825215559298" tabindex="0" loading="lazy"><figcaption>image-20220825215559298</figcaption></figure><h2 id="_2-排查过程" tabindex="-1"><a class="header-anchor" href="#_2-排查过程"><span>2. 排查过程</span></a></h2><h3 id="_2-1-使用java层面的工具定位内存区域" tabindex="-1"><a class="header-anchor" href="#_2-1-使用java层面的工具定位内存区域"><span>2.1 使用Java层面的工具定位内存区域</span></a></h3><blockquote><p>使用Java层面的工具可以定位出堆内内存、Code区域或者使用unsafe.allocateMemory和DirectByteBuffer申请的堆外内存</p></blockquote><p>笔者在项目中添加<code>-XX:NativeMemoryTracking=detailJVM</code>参数重启项目，使用命令<code>jcmd pid VM.native_memory detail</code>查看到的内存分布如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006591.png" alt="image-20220825215747039" tabindex="0" loading="lazy"><figcaption>image-20220825215747039</figcaption></figure><p>发现命令显示的committed的内存小于物理内存，因为jcmd命令显示的内存包含堆内内存、Code区域、通过unsafe.allocateMemory和DirectByteBuffer申请的内存，<strong>但是不包含其他Native Code（C代码）申请的堆外内存。所以猜测是使用Native Code申请内存所导致的问题</strong>。</p><p>为了防止误判，笔者使用了pmap查看内存分布，发现大量的64M的地址；而这些地址空间不在jcmd命令所给出的地址空间里面，基本上就断定就是这些64M的内存所导致。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006618.png" alt="image-20220825215847183" tabindex="0" loading="lazy"><figcaption>image-20220825215847183</figcaption></figure><h3 id="_2-2-使用系统层面的工具定位堆外内存" tabindex="-1"><a class="header-anchor" href="#_2-2-使用系统层面的工具定位堆外内存"><span>2.2 使用系统层面的工具定位堆外内存</span></a></h3><p>因为笔者已经基本上确定是Native Code所引起，而Java层面的工具不便于排查此类问题，只能使用系统层面的工具去定位问题。</p><h4 id="_2-2-1-首先-使用了gperftools去定位问题" tabindex="-1"><a class="header-anchor" href="#_2-2-1-首先-使用了gperftools去定位问题"><span>2.2.1 首先，使用了gperftools去定位问题</span></a></h4><p>gperftools的使用方法可以参考gperftools，gperftools的监控如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006650.png" alt="image-20220825215952863" tabindex="0" loading="lazy"><figcaption>image-20220825215952863</figcaption></figure><p>从上图可以看出：使用malloc申请的的内存最高到3G之后就释放了，之后始终维持在700M-800M。笔者第一反应是：难道Native Code中没有使用malloc申请，直接使用mmap/brk申请的？（gperftools原理就使用动态链接的方式替换了操作系统默认的内存分配器（glibc）。）</p><h4 id="_2-2-2-然后-使用strace去追踪系统调用" tabindex="-1"><a class="header-anchor" href="#_2-2-2-然后-使用strace去追踪系统调用"><span>2.2.2 然后，使用strace去追踪系统调用</span></a></h4><p>因为使用gperftools没有追踪到这些内存，于是直接使用命令“strace -f -e”brk,mmap,munmap” -p pid”追踪向OS申请内存请求，但是并没有发现有可疑内存申请。strace监控如下图所示:</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006677.png" alt="image-20220825220050258" tabindex="0" loading="lazy"><figcaption>image-20220825220050258</figcaption></figure><h4 id="_2-2-3-接着-使用gdb去dump可疑内存" tabindex="-1"><a class="header-anchor" href="#_2-2-3-接着-使用gdb去dump可疑内存"><span>2.2.3 接着，使用GDB去dump可疑内存</span></a></h4><p>因为使用strace没有追踪到可疑内存申请；于是想着看看内存中的情况。就是直接使用命令gdp -pid pid进入GDB之后，然后使用命令dump memory mem.bin startAddress endAddressdump内存，其中startAddress和endAddress可以从/proc/pid/smaps中查找。然后使用strings mem.bin查看dump的内容，如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006708.png" alt="image-20220825220135272" tabindex="0" loading="lazy"><figcaption>image-20220825220135272</figcaption></figure><p>从内容上来看，像是解压后的JAR包信息。读取JAR包信息应该是在项目启动的时候，那么在项目启动之后使用strace作用就不是很大了。所以应该在项目启动的时候使用strace，而不是启动完成之后。</p><h4 id="_2-2-4-再次-项目启动时使用strace去追踪系统调用" tabindex="-1"><a class="header-anchor" href="#_2-2-4-再次-项目启动时使用strace去追踪系统调用"><span>2.2.4 再次，项目启动时使用strace去追踪系统调用</span></a></h4><p>项目启动使用strace追踪系统调用，发现确实申请了很多64M的内存空间，截图如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006740.png" alt="image-20220825220221582" tabindex="0" loading="lazy"><figcaption>image-20220825220221582</figcaption></figure><p>使用该mmap申请的地址空间在pmap对应如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006774.png" alt="image-20220825220237025" tabindex="0" loading="lazy"><figcaption>image-20220825220237025</figcaption></figure><h4 id="_2-2-5-最后-使用jstack去查看对应的线程" tabindex="-1"><a class="header-anchor" href="#_2-2-5-最后-使用jstack去查看对应的线程"><span>2.2.5 最后，使用jstack去查看对应的线程</span></a></h4><p>因为strace命令中已经显示申请内存的线程ID。直接使用命令jstack pid去查看线程栈，找到对应的线程栈（注意10进制和16进制转换）如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006803.png" alt="image-20220825220300342" tabindex="0" loading="lazy"><figcaption>image-20220825220300342</figcaption></figure><p>这里基本上就可以看出问题来了：MCC（美团统一配置中心）使用了Reflections进行扫包，底层使用了Spring Boot去加载JAR。因为解压JAR使用Inflater类，需要用到堆外内存，然后使用Btrace去追踪这个类，栈如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006828.png" alt="image-20220825220334012" tabindex="0" loading="lazy"><figcaption>image-20220825220334012</figcaption></figure><p>然后查看使用MCC的地方，发现没有配置扫包路径，默认是扫描所有的包。于是修改代码，配置扫包路径，发布上线后内存问题解决。</p><h3 id="_2-3-为什么堆外内存没有释放掉呢" tabindex="-1"><a class="header-anchor" href="#_2-3-为什么堆外内存没有释放掉呢"><span>2.3 为什么堆外内存没有释放掉呢？</span></a></h3><p>虽然问题已经解决了，但是有几个疑问：</p><ul><li>为什么使用旧的框架没有问题？</li><li>为什么堆外内存没有释放？</li><li>为什么内存大小都是64M，JAR大小不可能这么大，而且都是一样大？</li><li>为什么gperftools最终显示使用的的内存大小是700M左右，解压包真的没有使用malloc申请内存吗？</li></ul><p>带着疑问，笔者直接看了一下<a href="https://github.com/spring-projects/spring-boot/tree/master/spring-boot-project/spring-boot-tools/spring-boot-loader/src/main/java/org/springframework/boot/loader" target="_blank" rel="noopener noreferrer">Spring Boot Loader</a>那一块的源码。发现Spring Boot对Java JDK的InflaterInputStream进行了包装并且使用了Inflater，而Inflater本身用于解压JAR包的需要用到堆外内存。而包装之后的类ZipInflaterInputStream没有释放Inflater持有的堆外内存。于是笔者以为找到了原因，立马向Spring Boot社区反馈了<a href="https://github.com/spring-projects/spring-boot/issues/13935" target="_blank" rel="noopener noreferrer">这个bug</a>。但是反馈之后，笔者就发现Inflater这个对象本身实现了finalize方法，在这个方法中有调用释放堆外内存的逻辑。也就是说Spring Boot依赖于GC释放堆外内存。</p><p>笔者使用jmap查看堆内对象时，发现已经基本上没有Inflater这个对象了。于是就怀疑GC的时候，没有调用finalize。带着这样的怀疑，笔者把Inflater进行包装在Spring Boot Loader里面替换成自己包装的Inflater，在finalize进行打点监控，结果finalize方法确实被调用了。于是笔者又去看了Inflater对应的C代码，发现初始化的使用了malloc申请内存，end的时候也调用了free去释放内存。</p><p>此刻，笔者只能怀疑free的时候没有真正释放内存，便把Spring Boot包装的InflaterInputStream替换成Java JDK自带的，发现替换之后，内存问题也得以解决了。</p><p>这时，再返过来看gperftools的内存分布情况，发现使用Spring Boot时，内存使用一直在增加，突然某个点内存使用下降了好多（使用量直接由3G降为700M左右）。这个点应该就是GC引起的，内存应该释放了，但是在操作系统层面并没有看到内存变化，那是不是没有释放到操作系统，被内存分配器持有了呢？</p><p>继续探究，发现系统默认的内存分配器（glibc 2.12版本）和使用gperftools内存地址分布差别很明显，2.5G地址使用smaps发现它是属于Native Stack。内存地址分布如下</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006854.png" alt="image-20220825220540538" tabindex="0" loading="lazy"><figcaption>image-20220825220540538</figcaption></figure><p>到此，基本上可以确定是内存分配器在捣鬼；搜索了一下glibc 64M，发现glibc从2.11开始对每个线程引入内存池（64位机器大小就是64M内存），原文如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006881.png" alt="image-20220825220614752" tabindex="0" loading="lazy"><figcaption>image-20220825220614752</figcaption></figure><p>按照文中所说去修改MALLOC_ARENA_MAX环境变量，发现没什么效果。查看tcmalloc（gperftools使用的内存分配器）也使用了内存池方式。</p><p>为了验证是内存池搞的鬼，笔者就简单写个不带内存池的内存分配器。使用命令<code>gcc zjbmalloc.c -fPIC -shared -o zjbmalloc.so</code>生成动态库，然后使用<code>export LD_PRELOAD=zjbmalloc.so</code>替换掉glibc的内存分配器。其中代码Demo如下：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">#include</span><span style="color:#98C379;--shiki-dark:#98C379;">&lt;sys/mman.h&gt;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">#include</span><span style="color:#98C379;--shiki-dark:#98C379;">&lt;stdlib.h&gt;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">#include</span><span style="color:#98C379;--shiki-dark:#98C379;">&lt;string.h&gt;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">#include</span><span style="color:#98C379;--shiki-dark:#98C379;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//作者使用的64位机器，sizeof(size_t)也就是sizeof(long) </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">void*</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> malloc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> size_t</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> size</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> )</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">   long*</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ptr </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> mmap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">( </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, size </span><span style="color:#C678DD;--shiki-dark:#C678DD;">+</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> sizeof</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">long</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">), PROT_READ </span><span style="color:#C678DD;--shiki-dark:#C678DD;">|</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> PROT_WRITE, MAP_PRIVATE </span><span style="color:#C678DD;--shiki-dark:#C678DD;">|</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> MAP_ANONYMOUS, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> );</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">   if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (ptr </span><span style="color:#C678DD;--shiki-dark:#C678DD;">==</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> MAP_FAILED) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  	return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">   *</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">ptr </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> size;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                     // First 8 bytes contain length.</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">   return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void*</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">&amp;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">ptr</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]);</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // Memory that is after length variable</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> *</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">calloc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">size_t</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> n</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> size_t</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> size</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> void*</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ptr </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> malloc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(n </span><span style="color:#C678DD;--shiki-dark:#C678DD;">*</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> size);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (ptr </span><span style="color:#C678DD;--shiki-dark:#C678DD;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> memset</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(ptr, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, n </span><span style="color:#C678DD;--shiki-dark:#C678DD;">*</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> size);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ptr;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> *</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">realloc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> *</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">ptr</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> size_t</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> size</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (size </span><span style="color:#C678DD;--shiki-dark:#C678DD;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">	free</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(ptr);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (ptr </span><span style="color:#C678DD;--shiki-dark:#C678DD;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	return</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> malloc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(size);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> long</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> *</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">plen </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">long*</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)ptr;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> plen</span><span style="color:#C678DD;--shiki-dark:#C678DD;">--</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                          // Reach top of memory</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> long</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> len </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> *</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">plen;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (size </span><span style="color:#C678DD;--shiki-dark:#C678DD;">&lt;=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> len) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ptr;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> void*</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> rptr </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> malloc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(size);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (rptr </span><span style="color:#C678DD;--shiki-dark:#C678DD;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">	free</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(ptr);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> rptr </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> memcpy</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(rptr, ptr, len);</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> free</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(ptr);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> rptr;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> free</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void*</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> ptr</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> )</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">   if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (ptr </span><span style="color:#C678DD;--shiki-dark:#C678DD;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	 return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">   long</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> *</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">plen </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">long*</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)ptr;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   plen</span><span style="color:#C678DD;--shiki-dark:#C678DD;">--</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                          // Reach top of memory</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">   long</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> len </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> *</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">plen;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">               // Read length</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   munmap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">((</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void*</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)plen, len </span><span style="color:#C678DD;--shiki-dark:#C678DD;">+</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> sizeof</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">long</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过在自定义分配器当中埋点可以发现其实程序启动之后应用实际申请的堆外内存始终在700M-800M之间，gperftools监控显示内存使用量也是在700M-800M左右。但是从操作系统角度来看进程占用的内存差别很大（这里只是监控堆外内存）。</p><p>笔者做了一下测试，使用不同分配器进行不同程度的扫包，占用的内存如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006904.png" alt="image-20220825220652536" tabindex="0" loading="lazy"><figcaption>image-20220825220652536</figcaption></figure><p><strong>为什么自定义的malloc申请800M，最终占用的物理内存在1.7G呢</strong>？</p><p>因为自定义内存分配器采用的是mmap分配内存，mmap分配内存按需向上取整到整数个页，所以存在着巨大的空间浪费。通过监控发现最终申请的页面数目在536k个左右，那实际上向系统申请的内存等于512k * 4k（pagesize） = 2G。</p><p><strong>为什么这个数据大于1.7G呢</strong>？</p><p>因为操作系统采取的是延迟分配的方式，通过mmap向系统申请内存的时候，系统仅仅返回内存地址并没有分配真实的物理内存。只有在真正使用的时候，系统产生一个缺页中断，然后再分配实际的物理Page。</p><h2 id="_3-总结" tabindex="-1"><a class="header-anchor" href="#_3-总结"><span>3. 总结</span></a></h2><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006929.png" alt="image-20220825220804117" tabindex="0" loading="lazy"><figcaption>image-20220825220804117</figcaption></figure><p>整个内存分配的流程如上图所示。MCC扫包的默认配置是扫描所有的JAR包。在扫描包的时候，Spring Boot不会主动去释放堆外内存，导致在扫描阶段，堆外内存占用量一直持续飙升。当发生GC的时候，Spring Boot依赖于finalize机制去释放了堆外内存；但是glibc为了性能考虑，并没有真正把内存归返到操作系统，而是留下来放入内存池了，导致应用层以为发生了“内存泄漏”。所以修改MCC的配置路径为特定的JAR包，问题解决。笔者在发表这篇文章时，发现<strong>Spring Boot的最新版本（2.0.5.RELEASE）已经做了修改，在ZipInflaterInputStream主动释放了堆外内存不再依赖GC</strong>；所以Spring Boot升级到最新版本，这个问题也可以得到解决。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/java/jvm/java-jvm-oom-offheap.html" target="_blank" rel="noopener noreferrer"><strong>调试排错 - Java 内存分析之堆外内存</strong></a></p>`,63)]))}const t=a(l,[["render",r],["__file","java-jvm-oom-offheap.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/JavaJVM/java-jvm-oom-offheap.html","title":"调试排错 - Java 内存分析之堆外内存","lang":"zh-CN","frontmatter":{"aliases":"调试排错 - Java 内存分析之堆外内存","tags":null,"cssclass":null,"source":null,"order":230,"category":["Java","JVM"],"created":"2024-02-22 10:47","updated":"2024-03-12 10:07","description":"调试排错 - Java 内存分析之堆外内存 Java 堆外内存分析相对来说是复杂的，美团技术团队的Spring Boot引起的“堆外内存泄漏”排查及经验总结可以为很多Native Code内存泄漏/占用提供方向性指引。 1. 背景 为了更好地实现对项目的管理，我们将组内一个项目迁移到MDP框架（基于Spring Boot），随后我们就发现系统会频繁报出...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/JavaJVM/java-jvm-oom-offheap.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"调试排错 - Java 内存分析之堆外内存"}],["meta",{"property":"og:description","content":"调试排错 - Java 内存分析之堆外内存 Java 堆外内存分析相对来说是复杂的，美团技术团队的Spring Boot引起的“堆外内存泄漏”排查及经验总结可以为很多Native Code内存泄漏/占用提供方向性指引。 1. 背景 为了更好地实现对项目的管理，我们将组内一个项目迁移到MDP框架（基于Spring Boot），随后我们就发现系统会频繁报出..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006551.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"调试排错 - Java 内存分析之堆外内存\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006551.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006591.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006618.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006650.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006677.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006708.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006740.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006774.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006803.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006828.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006854.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006881.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006904.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121006929.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 排查过程","slug":"_2-排查过程","link":"#_2-排查过程","children":[{"level":3,"title":"2.1 使用Java层面的工具定位内存区域","slug":"_2-1-使用java层面的工具定位内存区域","link":"#_2-1-使用java层面的工具定位内存区域","children":[]},{"level":3,"title":"2.2 使用系统层面的工具定位堆外内存","slug":"_2-2-使用系统层面的工具定位堆外内存","link":"#_2-2-使用系统层面的工具定位堆外内存","children":[]},{"level":3,"title":"2.3 为什么堆外内存没有释放掉呢？","slug":"_2-3-为什么堆外内存没有释放掉呢","link":"#_2-3-为什么堆外内存没有释放掉呢","children":[]}]},{"level":2,"title":"3. 总结","slug":"_3-总结","link":"#_3-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":9.39,"words":2816},"filePathRelative":"posts/Java/JavaJVM/java-jvm-oom-offheap.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>Java 堆外内存分析相对来说是复杂的，美团技术团队的<a href=\\"https://tech.meituan.com/2019/01/03/spring-boot-native-memory-leak.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Spring Boot引起的“堆外内存泄漏”排查及经验总结</a>可以为很多Native Code内存泄漏/占用提供方向性指引。</p>\\n</blockquote>\\n<h2>1. 背景</h2>\\n<p>为了更好地实现对项目的管理，我们将组内一个项目迁移到MDP框架（基于Spring Boot），随后我们就发现系统会频繁报出Swap区域使用量过高的异常。笔者被叫去帮忙查看原因，发现配置了4G堆内内存，但是实际使用的物理内存竟然高达7G，确实不正常。JVM参数配置是“-XX:MetaspaceSize=256M -XX:MaxMetaspaceSize=256M -XX:+AlwaysPreTouch -XX:ReservedCodeCacheSize=128m -XX:InitialCodeCacheSize=128m, -Xss512k -Xmx4g -Xms4g,-XX:+UseG1GC -XX:G1HeapRegionSize=4M”，实际使用的物理内存如下图所示：</p>","autoDesc":true}');export{t as comp,c as data};
