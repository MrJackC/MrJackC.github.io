import{_ as a,c as n,a as i,o as e}from"./app-BOcQBfH9.js";const l={};function p(o,s){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="jdk监控和故障处理工具汇总" tabindex="-1"><a class="header-anchor" href="#jdk监控和故障处理工具汇总"><span>JDK监控和故障处理工具汇总</span></a></h1><h2 id="_1-jdk命令行工具" tabindex="-1"><a class="header-anchor" href="#_1-jdk命令行工具"><span>1. JDK命令行工具</span></a></h2><p>这些命令在JDK 安装目录下的bin目录下</p><ul><li><strong>jps</strong> (JVM Process Status）: 类似 UNIX 的 <code>ps</code> 命令。用户查看所有 Java 进程的启动类、传入参数和 Java 虚拟机参数等信息；</li><li><strong>jstat</strong>（ JVM Statistics Monitoring Tool）: 用于收集 HotSpot 虚拟机各方面的运行数据;</li><li><strong>jinfo</strong> (Configuration Info for Java) : Configuration Info forJava,显示虚拟机配置信息;</li><li><strong>jmap</strong> (Memory Map for Java) :生成堆转储快照;</li><li><strong>jhat</strong> (JVM Heap Dump Browser ) : 用于分析 heapdump 文件，它会建立一个 HTTP/HTML 服务器，让用户可以在浏览器上查看分析结果;</li><li><strong>jstack</strong> (Stack Trace for Java):生成虚拟机当前时刻的线程快照，线程快照就是当前虚拟机内每一条线程正在执行的方法堆栈的集合。</li></ul><h3 id="_1-1-jps-查看所有-java-进程" tabindex="-1"><a class="header-anchor" href="#_1-1-jps-查看所有-java-进程"><span>1.1 <code>jps</code>:查看所有 Java 进程</span></a></h3><p><code>jps</code>(JVM Process Status) 命令类似 UNIX 的 <code>ps</code> 命令。</p><p><code>jps</code>：显示虚拟机执行主类名称以及这些进程的本地虚拟机唯一 ID（Local Virtual Machine Identifier,LVMID）。<code>jps -q</code> ：只输出进程的本地虚拟机唯一 ID。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>C:\\Users\\SnailClimb&gt;jps</span></span>
<span class="line"><span>7360 NettyClient2</span></span>
<span class="line"><span>17396</span></span>
<span class="line"><span>7972 Launcher</span></span>
<span class="line"><span>16504 Jps</span></span>
<span class="line"><span>17340 NettyServer</span></span></code></pre></div><p><code>jps -l</code>:输出主类的全名，如果进程执行的是 Jar 包，输出 Jar 路径。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>C:\\Users\\SnailClimb&gt;jps -l</span></span>
<span class="line"><span>7360 firstNettyDemo.NettyClient2</span></span>
<span class="line"><span>17396</span></span>
<span class="line"><span>7972 org.jetbrains.jps.cmdline.Launcher</span></span>
<span class="line"><span>16492 sun.tools.jps.Jps</span></span>
<span class="line"><span>17340 firstNettyDemo.NettyServer</span></span>
<span class="line"><span>5541 mywebsocket.jar</span></span></code></pre></div><p><code>jps -v</code>：输出虚拟机进程启动时 JVM 参数。</p><p><code>jps -m</code>：输出传递给 Java 进程 main() 函数的参数。</p><h3 id="_1-2-jstat-监视虚拟机各种运行状态信息" tabindex="-1"><a class="header-anchor" href="#_1-2-jstat-监视虚拟机各种运行状态信息"><span>1.2 <code>jstat</code>: 监视虚拟机各种运行状态信息</span></a></h3><p>jstat（JVM Statistics Monitoring Tool） 使用于监视虚拟机各种运行状态信息的命令行工具。 它可以显示本地或者远程（需要远程主机提供 RMI 支持）虚拟机进程中的类信息、内存、垃圾收集、JIT 编译等运行数据，在没有 GUI，只提供了纯文本控制台环境的服务器上，它将是运行期间定位虚拟机性能问题的首选工具。</p><p><strong>jstat 命令使用格式：</strong></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>jstat -&lt;option&gt; [-t] [-h&lt;lines&gt;] &lt;vmid&gt; [&lt;interval&gt; [&lt;count&gt;]]</span></span></code></pre></div><p>比如 <code>jstat -gc -h3 31736 1000 10</code>表示分析进程 id 为 31736 的 gc 情况，每隔 1000ms 打印一次记录，打印 10 次停止，每 3 行后打印指标头部</p><p><strong>常见的 option 如下：</strong></p><ul><li><code>jstat -class vmid</code> ：显示 ClassLoader 的相关信息；</li><li><code>jstat -compiler vmid</code> ：显示 JIT 编译的相关信息；</li><li><code>jstat -gc vmid</code> ：显示与 GC 相关的堆信息；</li><li><code>jstat -gccapacity vmid</code> ：显示各个代的容量及使用情况；</li><li><code>jstat -gcnew vmid</code> ：显示新生代信息；</li><li><code>jstat -gcnewcapcacity vmid</code> ：显示新生代大小与使用情况；</li><li><code>jstat -gcold vmid</code> ：显示老年代和永久代的信息；</li><li><code>jstat -gcoldcapacity vmid</code> ：显示老年代的大小；</li><li><code>jstat -gcpermcapacity vmid</code> ：显示永久代大小；</li><li><code>jstat -gcutil vmid</code> ：显示垃圾收集信息；</li></ul><p>另外，加上 <code>-t</code>参数可以在输出信息上加一个 Timestamp 列，显示程序的运行时间。</p><h3 id="_1-3-jinfo-实时地查看和调整虚拟机各项参数" tabindex="-1"><a class="header-anchor" href="#_1-3-jinfo-实时地查看和调整虚拟机各项参数"><span>1.3 <code>jinfo</code>: 实时地查看和调整虚拟机各项参数</span></a></h3><p><code>jinfo vmid</code> :输出当前 jvm 进程的全部参数和系统属性 (第一部分是系统的属性，第二部分是 JVM 的参数)。</p><p><code>jinfo -flag name vmid</code> :输出对应名称的参数的具体值。比如输出 MaxHeapSize、查看当前 jvm 进程是否开启打印 GC 日志 ( <code>-XX:PrintGCDetails</code> :详细 GC 日志模式，这两个都是默认关闭的)。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>C:\\Users\\SnailClimb&gt;jinfo  -flag MaxHeapSize 17340</span></span>
<span class="line"><span>-XX:MaxHeapSize=2124414976</span></span>
<span class="line"><span>C:\\Users\\SnailClimb&gt;jinfo  -flag PrintGC 17340</span></span>
<span class="line"><span>-XX:-PrintGC</span></span></code></pre></div><p>使用 jinfo 可以在不重启虚拟机的情况下，可以动态的修改 jvm 的参数。尤其在线上的环境特别有用,请看下面的例子：</p><p><code>jinfo -flag [+|-]name vmid</code> 开启或者关闭对应名称的参数。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>C:\\Users\\SnailClimb&gt;jinfo  -flag  PrintGC 17340</span></span>
<span class="line"><span>-XX:-PrintGC</span></span>
<span class="line"><span></span></span>
<span class="line"><span>C:\\Users\\SnailClimb&gt;jinfo  -flag  +PrintGC 17340</span></span>
<span class="line"><span></span></span>
<span class="line"><span>C:\\Users\\SnailClimb&gt;jinfo  -flag  PrintGC 17340</span></span>
<span class="line"><span>-XX:+PrintGC</span></span></code></pre></div><h3 id="_1-4-jmap-生成堆转储快照" tabindex="-1"><a class="header-anchor" href="#_1-4-jmap-生成堆转储快照"><span>1.4 <code>jmap</code>:生成堆转储快照</span></a></h3><p><code>jmap</code>（Memory Map for Java）命令用于生成堆转储快照。 如果不使用 <code>jmap</code> 命令，要想获取 Java 堆转储，可以使用 <code>“-XX:+HeapDumpOnOutOfMemoryError”</code> 参数，可以让虚拟机在 OOM 异常出现之后自动生成 dump 文件，Linux 命令下可以通过 <code>kill -3</code> 发送进程退出信号也能拿到 dump 文件。</p><p><code>jmap</code> 的作用并不仅仅是为了获取 dump 文件，它还可以查询 finalizer 执行队列、Java 堆和永久代的详细信息，如空间使用率、当前使用的是哪种收集器等。和<code>jinfo</code>一样，<code>jmap</code>有不少功能在 Windows 平台下也是受限制的。</p><p>示例：将指定应用程序的堆快照输出到桌面。后面，可以通过 jhat、Visual VM 等工具分析该堆文件。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>jmap -dump:format=b,file=./heap.hprof 19012</span></span>
<span class="line"><span>Dumping heap to /home/ftpuser/services/mywebsocket/heap.hprof ...</span></span>
<span class="line"><span>Heap dump file created</span></span></code></pre></div><h3 id="_1-5-jhat-分析-heapdump-文件" tabindex="-1"><a class="header-anchor" href="#_1-5-jhat-分析-heapdump-文件"><span>1.5 <strong>jhat</strong>: 分析 heapdump 文件</span></a></h3><p><strong>jhat</strong> 用于分析 heapdump 文件，它会建立一个 HTTP/HTML 服务器，让用户可以在浏览器上查看分析结果。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>C:\\Users\\SnailClimb&gt;jhat C:\\Users\\SnailClimb\\Desktop\\heap.hprof</span></span>
<span class="line"><span>Reading from C:\\Users\\SnailClimb\\Desktop\\heap.hprof...</span></span>
<span class="line"><span>Dump file created Sat May 04 12:30:31 CST 2019</span></span>
<span class="line"><span>Snapshot read, resolving...</span></span>
<span class="line"><span>Resolving 131419 objects...</span></span>
<span class="line"><span>Chasing references, expect 26 dots..........................</span></span>
<span class="line"><span>Eliminating duplicate references..........................</span></span>
<span class="line"><span>Snapshot resolved.</span></span>
<span class="line"><span>Started HTTP server on port 7000</span></span>
<span class="line"><span>Server is ready.</span></span></code></pre></div><p>访问 <a href="http://localhost:7000/" target="_blank" rel="noopener noreferrer">http://localhost:7000/</a></p><h3 id="_1-6-jstack-生成虚拟机当前时刻的线程快照" tabindex="-1"><a class="header-anchor" href="#_1-6-jstack-生成虚拟机当前时刻的线程快照"><span>1.6 <strong>jstack</strong> :生成虚拟机当前时刻的线程快照</span></a></h3><p><code>jstack</code>（Stack Trace for Java）命令用于生成虚拟机当前时刻的线程快照。线程快照就是当前虚拟机内每一条线程正在执行的方法堆栈的集合.</p><p>生成线程快照的目的主要是定位线程长时间出现停顿的原因，如线程间死锁、死循环、请求外部资源导致的长时间等待等都是导致线程长时间停顿的原因。线程出现停顿的时候通过<code>jstack</code>来查看各个线程的调用堆栈，就可以知道没有响应的线程到底在后台做些什么事情，或者在等待些什么资源。</p><p><strong>下面是一个线程死锁的代码。我们下面会通过 jstack 命令进行死锁检查，输出死锁信息，找到发生死锁的线程</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> DeadLockDemo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> resource1 </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//资源 1</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> resource2 </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//资源 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(() </span><span style="color:#C678DD;--shiki-dark:#C678DD;">-&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            synchronized</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (resource1) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">currentThread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;get resource1&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                try</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sleep</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1000</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">InterruptedException</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">printStackTrace</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">currentThread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;waiting get resource2&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                synchronized</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (resource2) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">currentThread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;get resource2&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;线程 1&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">start</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(() </span><span style="color:#C678DD;--shiki-dark:#C678DD;">-&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            synchronized</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (resource2) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">currentThread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;get resource2&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                try</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sleep</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1000</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">InterruptedException</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">printStackTrace</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">currentThread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;waiting get resource1&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                synchronized</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (resource1) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">currentThread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;get resource1&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;线程 2&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">start</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>Thread[线程 1,5,main]get resource1</span></span>
<span class="line"><span>Thread[线程 2,5,main]get resource2</span></span>
<span class="line"><span>Thread[线程 1,5,main]waiting get resource2</span></span>
<span class="line"><span>Thread[线程 2,5,main]waiting get resource1</span></span></code></pre></div><p>线程 A 通过 synchronized (resource1) 获得 resource1 的监视器锁，然后通过<code> Thread.sleep(1000);</code>让线程 A 休眠 1s 为的是让线程 B 得到执行然后获取到 resource2 的监视器锁。线程 A 和线程 B 休眠结束了都开始企图请求获取对方的资源，然后这两个线程就会陷入互相等待的状态，这也就产生了死锁。</p><p><strong>通过 jstack 命令分析：</strong></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>C:\\Users\\SnailClimb&gt;jps</span></span>
<span class="line"><span>13792 KotlinCompileDaemon</span></span>
<span class="line"><span>7360 NettyClient2</span></span>
<span class="line"><span>17396</span></span>
<span class="line"><span>7972 Launcher</span></span>
<span class="line"><span>8932 Launcher</span></span>
<span class="line"><span>9256 DeadLockDemo</span></span>
<span class="line"><span>10764 Jps</span></span>
<span class="line"><span>17340 NettyServer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>C:\\Users\\SnailClimb&gt;jstack 9256</span></span></code></pre></div><p>输出的部分内容如下：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>Found one Java-level deadlock:</span></span>
<span class="line"><span>=============================</span></span>
<span class="line"><span>&quot;线程 2&quot;:</span></span>
<span class="line"><span>  waiting to lock monitor 0x000000000333e668 (object 0x00000000d5efe1c0, a java.lang.Object),</span></span>
<span class="line"><span>  which is held by &quot;线程 1&quot;</span></span>
<span class="line"><span>&quot;线程 1&quot;:</span></span>
<span class="line"><span>  waiting to lock monitor 0x000000000333be88 (object 0x00000000d5efe1d0, a java.lang.Object),</span></span>
<span class="line"><span>  which is held by &quot;线程 2&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Java stack information for the threads listed above:</span></span>
<span class="line"><span>===================================================</span></span>
<span class="line"><span>&quot;线程 2&quot;:</span></span>
<span class="line"><span>        at DeadLockDemo.lambda$main$1(DeadLockDemo.java:31)</span></span>
<span class="line"><span>        - waiting to lock &lt;0x00000000d5efe1c0&gt; (a java.lang.Object)</span></span>
<span class="line"><span>        - locked &lt;0x00000000d5efe1d0&gt; (a java.lang.Object)</span></span>
<span class="line"><span>        at DeadLockDemo$$Lambda$2/1078694789.run(Unknown Source)</span></span>
<span class="line"><span>        at java.lang.Thread.run(Thread.java:748)</span></span>
<span class="line"><span>&quot;线程 1&quot;:</span></span>
<span class="line"><span>        at DeadLockDemo.lambda$main$0(DeadLockDemo.java:16)</span></span>
<span class="line"><span>        - waiting to lock &lt;0x00000000d5efe1d0&gt; (a java.lang.Object)</span></span>
<span class="line"><span>        - locked &lt;0x00000000d5efe1c0&gt; (a java.lang.Object)</span></span>
<span class="line"><span>        at DeadLockDemo$$Lambda$1/1324119927.run(Unknown Source)</span></span>
<span class="line"><span>        at java.lang.Thread.run(Thread.java:748)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Found 1 deadlock.</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到 <code>jstack</code> 命令已经帮我们找到发生死锁的线程的具体信息。</p><h2 id="_2-jdk-可视化分析工具" tabindex="-1"><a class="header-anchor" href="#_2-jdk-可视化分析工具"><span>2. JDK 可视化分析工具</span></a></h2><h3 id="_2-1-visual-vm-多合一故障处理工具" tabindex="-1"><a class="header-anchor" href="#_2-1-visual-vm-多合一故障处理工具"><span>2.1 Visual VM:多合一故障处理工具</span></a></h3><p>VisualVM 提供在 Java 虚拟机 (Java Virutal Machine, JVM) 上运行的 Java 应用程序的详细信息。在 VisualVM 的图形用户界面中，您可以方便、快捷地查看多个 Java 应用程序的相关信息。Visual VM 官网：<a href="https://visualvm.github.io/" target="_blank" rel="noopener noreferrer">https://visualvm.github.io/</a> 。Visual VM 中文文档:<a href="https://visualvm.github.io/documentation.html" target="_blank" rel="noopener noreferrer">https://visualvm.github.io/documentation.html</a>。</p><p>下面这段话摘自《深入理解 Java 虚拟机》。</p><blockquote><p>VisualVM（All-in-One Java Troubleshooting Tool）是到目前为止随 JDK 发布的功能最强大的运行监视和故障处理程序，官方在 VisualVM 的软件说明中写上了“All-in-One”的描述字样，预示着他除了运行监视、故障处理外，还提供了很多其他方面的功能，如性能分析（Profiling）。VisualVM 的性能分析功能甚至比起 JProfiler、YourKit 等专业且收费的 Profiling 工具都不会逊色多少，而且 VisualVM 还有一个很大的优点：不需要被监视的程序基于特殊 Agent 运行，因此他对应用程序的实际性能的影响很小，使得他可以直接应用在生产环境中。这个优点是 JProfiler、YourKit 等工具无法与之媲美的。</p></blockquote><p>VisualVM 基于 NetBeans 平台开发，因此他一开始就具备了插件扩展功能的特性，通过插件扩展支持，VisualVM 可以做到：</p><ul><li><strong>显示虚拟机进程以及进程的配置、环境信息（jps、jinfo）。</strong></li><li><strong>监视应用程序的 CPU、GC、堆、方法区以及线程的信息（jstat、jstack）。</strong></li><li><strong>dump 以及分析堆转储快照（jmap、jhat）。</strong></li><li><strong>方法级的程序运行性能分析，找到被调用最多、运行时间最长的方法。</strong></li><li><strong>离线程序快照：收集程序的运行时配置、线程 dump、内存 dump 等信息建立一个快照，可以将快照发送开发者处进行 Bug 反馈。</strong></li><li><strong>其他 plugins 的无限的可能性......</strong></li></ul><p>这里就不具体介绍 VisualVM 的使用，如果想了解的话可以看:</p><ul><li><a href="https://visualvm.github.io/documentation.html" target="_blank" rel="noopener noreferrer">https://visualvm.github.io/documentation.html</a></li><li><a href="https://www.ibm.com/developerworks/cn/java/j-lo-visualvm/index.html" target="_blank" rel="noopener noreferrer">https://www.ibm.com/developerworks/cn/java/j-lo-visualvm/index.html</a></li></ul>`,58)]))}const t=a(l,[["render",p],["__file","java-jvm-tools-overview.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/JavaJVM/java-jvm-tools-overview.html","title":"JDK监控和故障处理工具汇总","lang":"zh-CN","frontmatter":{"aliases":"JDK监控和故障处理工具汇总","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:47","updated":"2024-03-12 12:08","description":"JDK监控和故障处理工具汇总 1. JDK命令行工具 这些命令在JDK 安装目录下的bin目录下 jps (JVM Process Status）: 类似 UNIX 的 ps 命令。用户查看所有 Java 进程的启动类、传入参数和 Java 虚拟机参数等信息； jstat（ JVM Statistics Monitoring Tool）: 用于收集 H...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/JavaJVM/java-jvm-tools-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"JDK监控和故障处理工具汇总"}],["meta",{"property":"og:description","content":"JDK监控和故障处理工具汇总 1. JDK命令行工具 这些命令在JDK 安装目录下的bin目录下 jps (JVM Process Status）: 类似 UNIX 的 ps 命令。用户查看所有 Java 进程的启动类、传入参数和 Java 虚拟机参数等信息； jstat（ JVM Statistics Monitoring Tool）: 用于收集 H..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JDK监控和故障处理工具汇总\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. JDK命令行工具","slug":"_1-jdk命令行工具","link":"#_1-jdk命令行工具","children":[{"level":3,"title":"1.1 jps:查看所有 Java 进程","slug":"_1-1-jps-查看所有-java-进程","link":"#_1-1-jps-查看所有-java-进程","children":[]},{"level":3,"title":"1.2 jstat: 监视虚拟机各种运行状态信息","slug":"_1-2-jstat-监视虚拟机各种运行状态信息","link":"#_1-2-jstat-监视虚拟机各种运行状态信息","children":[]},{"level":3,"title":"1.3 jinfo: 实时地查看和调整虚拟机各项参数","slug":"_1-3-jinfo-实时地查看和调整虚拟机各项参数","link":"#_1-3-jinfo-实时地查看和调整虚拟机各项参数","children":[]},{"level":3,"title":"1.4 jmap:生成堆转储快照","slug":"_1-4-jmap-生成堆转储快照","link":"#_1-4-jmap-生成堆转储快照","children":[]},{"level":3,"title":"1.5 jhat: 分析 heapdump 文件","slug":"_1-5-jhat-分析-heapdump-文件","link":"#_1-5-jhat-分析-heapdump-文件","children":[]},{"level":3,"title":"1.6 jstack :生成虚拟机当前时刻的线程快照","slug":"_1-6-jstack-生成虚拟机当前时刻的线程快照","link":"#_1-6-jstack-生成虚拟机当前时刻的线程快照","children":[]}]},{"level":2,"title":"2. JDK 可视化分析工具","slug":"_2-jdk-可视化分析工具","link":"#_2-jdk-可视化分析工具","children":[{"level":3,"title":"2.1 Visual VM:多合一故障处理工具","slug":"_2-1-visual-vm-多合一故障处理工具","link":"#_2-1-visual-vm-多合一故障处理工具","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":8.12,"words":2436},"filePathRelative":"posts/Java/JavaJVM/java-jvm-tools-overview.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. JDK命令行工具</h2>\\n<p>这些命令在JDK 安装目录下的bin目录下</p>\\n<ul>\\n<li><strong>jps</strong> (JVM Process Status）: 类似 UNIX 的 <code>ps</code> 命令。用户查看所有 Java 进程的启动类、传入参数和 Java 虚拟机参数等信息；</li>\\n<li><strong>jstat</strong>（ JVM Statistics Monitoring Tool）: 用于收集 HotSpot 虚拟机各方面的运行数据;</li>\\n<li><strong>jinfo</strong> (Configuration Info for Java) : Configuration Info forJava,显示虚拟机配置信息;</li>\\n<li><strong>jmap</strong> (Memory Map for Java) :生成堆转储快照;</li>\\n<li><strong>jhat</strong> (JVM Heap Dump Browser ) : 用于分析 heapdump 文件，它会建立一个 HTTP/HTML 服务器，让用户可以在浏览器上查看分析结果;</li>\\n<li><strong>jstack</strong> (Stack Trace for Java):生成虚拟机当前时刻的线程快照，线程快照就是当前虚拟机内每一条线程正在执行的方法堆栈的集合。</li>\\n</ul>","autoDesc":true}');export{t as comp,c as data};
