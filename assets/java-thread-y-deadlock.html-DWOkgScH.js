import{_ as a,c as s,a as e,o as i}from"./app-DEK5G3U7.js";const l={};function p(c,n){return i(),s("div",null,n[0]||(n[0]=[e(`<h1 id="如何发现、预防、解决死锁" tabindex="-1"><a class="header-anchor" href="#如何发现、预防、解决死锁"><span>如何发现、预防、解决死锁</span></a></h1><h2 id="_1-死锁的定义" tabindex="-1"><a class="header-anchor" href="#_1-死锁的定义"><span>1. 死锁的定义</span></a></h2><p>“死锁是指两个或两个以上的进程在执行过程中，由于竞争资源或者由于彼此通信而造成的一种阻塞的现象，若无外力作用，它们都将无法推进下去。”</p><p>竞争的资源可以是：锁、网络连接、通知事件，磁盘、带宽，以及一切可以被称作“资源”的东西。</p><h2 id="_2-举例" tabindex="-1"><a class="header-anchor" href="#_2-举例"><span>2. 举例</span></a></h2><p>如果此时有一个线程A，按照先锁a再获得锁b的顺序获得锁，而在此时又有一个线程B，按照先锁b再锁a的顺序获得锁</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120852230.png" alt="image-20200311231729573" tabindex="0" loading="lazy"><figcaption>image-20200311231729573</figcaption></figure><p>我们可以用一段代码来表示：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>public static void main(String[] args) {</span></span>
<span class="line"><span>    final Object a = new Object();</span></span>
<span class="line"><span>    final Object b = new Object();</span></span>
<span class="line"><span>    Thread threadA = new Thread(new Runnable() {</span></span>
<span class="line"><span>        public void run() {</span></span>
<span class="line"><span>            synchronized (a) {</span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                    System.out.println(&quot;now i in threadA-locka&quot;);</span></span>
<span class="line"><span>                    Thread.sleep(1000l);</span></span>
<span class="line"><span>                    synchronized (b) {</span></span>
<span class="line"><span>                        System.out.println(&quot;now i in threadA-lockb&quot;);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                } catch (Exception e) {</span></span>
<span class="line"><span>                    // ignore</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Thread threadB = new Thread(new Runnable() {</span></span>
<span class="line"><span>        public void run() {</span></span>
<span class="line"><span>            synchronized (b) {</span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                    System.out.println(&quot;now i in threadB-lockb&quot;);</span></span>
<span class="line"><span>                    Thread.sleep(1000l);</span></span>
<span class="line"><span>                    synchronized (a) {</span></span>
<span class="line"><span>                        System.out.println(&quot;now i in threadB-locka&quot;);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                } catch (Exception e) {</span></span>
<span class="line"><span>                    // ignore</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    threadA.start();</span></span>
<span class="line"><span>    threadB.start();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看到执行结果如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120852267.png" alt="image-20200311232054845" tabindex="0" loading="lazy"><figcaption>image-20200311232054845</figcaption></figure><p>很明显，程序执行停滞了</p><h2 id="_2-死锁检测" tabindex="-1"><a class="header-anchor" href="#_2-死锁检测"><span>2. 死锁检测</span></a></h2><p>主要介绍两种死锁检查工具</p><h2 id="_2-1-jstack命令" tabindex="-1"><a class="header-anchor" href="#_2-1-jstack命令"><span>2.1 Jstack命令</span></a></h2><p>Jstack 是java 虚拟机自带的一种堆栈跟踪工具。jstack 用于<strong>打印</strong>出给定的java 进程ID或core file 或远程调试服务的<strong>java堆栈信息</strong>。Jstack工具可以用于生成Java虚拟机当前时刻的线程快照，<strong>线程快照</strong>是当前java虚拟机内每一条线程<strong>正在执行</strong>的<strong>方法堆栈</strong>的集合，生成线程快照的主要目的是定位线程出现长时间停顿原因，如<code>线程间死锁</code>、<code>死循环</code>、<code>请求外部资源导致的长时间等待</code>等。线程出现停顿的时候通过jstack来查看各个线程的调用堆栈，就可以知道没有相应的线程到底在后台做了什么事情，或者等待什么资源</p><p>首先，我们通过jps确定当前执行任务的进程号:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>jonny@~$ jps</span></span>
<span class="line"><span>597</span></span>
<span class="line"><span>1370 JConsole</span></span>
<span class="line"><span>1362 AppMain</span></span>
<span class="line"><span>1421 Jps</span></span>
<span class="line"><span>1361 Launcher</span></span></code></pre></div><p>可以确定任务进程号1362，然后执行jstack命令查看当前进程堆栈信息：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>jonny@~$ jstack -F 1362</span></span>
<span class="line"><span>Attaching to process ID 1362, please wait...</span></span>
<span class="line"><span>Debugger attached successfully.</span></span>
<span class="line"><span>Server compiler detected.</span></span>
<span class="line"><span>JVM version is 23.21-b01</span></span>
<span class="line"><span>Deadlock Detection:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Found one Java-level deadlock:</span></span>
<span class="line"><span>=============================</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;Thread-1&quot;:</span></span>
<span class="line"><span>  waiting to lock Monitor@0x00007fea1900f6b8 (Object@0x00000007efa684c8, a java/lang/Object),</span></span>
<span class="line"><span>  which is held by &quot;Thread-0&quot;</span></span>
<span class="line"><span>&quot;Thread-0&quot;:</span></span>
<span class="line"><span>  waiting to lock Monitor@0x00007fea1900ceb0 (Object@0x00000007efa684d8, a java/lang/Object),</span></span>
<span class="line"><span>  which is held by &quot;Thread-1&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Found a total of 1 deadlock.</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，进程的确存在死锁，两个线程分别在等待对方持有的Object对象</p><h3 id="_2-2-jconsole-工具" tabindex="-1"><a class="header-anchor" href="#_2-2-jconsole-工具"><span>2.2 JConsole 工具</span></a></h3><p>Jconsole 是 Jdk自带的监控工具，在Jdk/bin 目录下可以找到，他用户连接正在运行的本地或者远程的JVM，对运行在Java 应用程序的资源消耗和性能进行监控，并画出大量的图表，提供强大的可视化界面。而且本身占用的服务器内存很小</p><p>我们在命令行中敲入jconsole命令，会自动弹出以下对话框，选择进程1362，并点击“<strong>链接</strong>”</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120852299.png" alt="image-20200311234432625" tabindex="0" loading="lazy"><figcaption>image-20200311234432625</figcaption></figure><p>进入锁检查的进程后，选择“线程”选项卡，并点击“检查死锁”</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120852324.png" alt="image-20200311234702867" tabindex="0" loading="lazy"><figcaption>image-20200311234702867</figcaption></figure><p>我们可以看到</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120852354.png" alt="image-20200311234651568" tabindex="0" loading="lazy"><figcaption>image-20200311234651568</figcaption></figure><p>可以看到进程中存在死锁</p><h2 id="_2-预防与解决死锁" tabindex="-1"><a class="header-anchor" href="#_2-预防与解决死锁"><span>2. 预防与解决死锁</span></a></h2><p>破坏死锁产生的四个必要条件</p><h3 id="_2-1-破坏互斥条件" tabindex="-1"><a class="header-anchor" href="#_2-1-破坏互斥条件"><span>2.1 破坏互斥条件</span></a></h3><p>这个条件我们没有办法破坏，因为我们用锁本来就是想让他们互斥的（临界资源需要互斥访问）</p><h3 id="_2-2-破坏请求与保持条件" tabindex="-1"><a class="header-anchor" href="#_2-2-破坏请求与保持条件"><span>2.2 破坏请求与保持条件</span></a></h3><p>一次性申请所有的资源</p><h3 id="_2-3-破坏不可剥夺条件" tabindex="-1"><a class="header-anchor" href="#_2-3-破坏不可剥夺条件"><span>2.3 破坏不可剥夺条件</span></a></h3><p>占用部分资源的线程进一步申请其他资源时，如果申请不到，可以<strong>主动释放他占有的资源</strong></p><h3 id="_2-4-破坏循环等待条件" tabindex="-1"><a class="header-anchor" href="#_2-4-破坏循环等待条件"><span>2.4 破坏循环等待条件</span></a></h3><p>靠按顺序申请资源来预防，按某一顺序申请资源，释放资源则反序释放。破坏循环等待条件</p>`,40)]))}const d=a(l,[["render",p],["__file","java-thread-y-deadlock.html.vue"]]),r=JSON.parse('{"path":"/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-deadlock.html","title":"如何发现、预防、解决死锁","lang":"zh-CN","frontmatter":{"aliases":"如何发现、预防、解决死锁","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:48","updated":"2024-03-12 08:52","description":"如何发现、预防、解决死锁 1. 死锁的定义 “死锁是指两个或两个以上的进程在执行过程中，由于竞争资源或者由于彼此通信而造成的一种阻塞的现象，若无外力作用，它们都将无法推进下去。” 竞争的资源可以是：锁、网络连接、通知事件，磁盘、带宽，以及一切可以被称作“资源”的东西。 2. 举例 如果此时有一个线程A，按照先锁a再获得锁b的顺序获得锁，而在此时又有一个...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-deadlock.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"如何发现、预防、解决死锁"}],["meta",{"property":"og:description","content":"如何发现、预防、解决死锁 1. 死锁的定义 “死锁是指两个或两个以上的进程在执行过程中，由于竞争资源或者由于彼此通信而造成的一种阻塞的现象，若无外力作用，它们都将无法推进下去。” 竞争的资源可以是：锁、网络连接、通知事件，磁盘、带宽，以及一切可以被称作“资源”的东西。 2. 举例 如果此时有一个线程A，按照先锁a再获得锁b的顺序获得锁，而在此时又有一个..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120852230.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何发现、预防、解决死锁\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120852230.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120852267.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120852299.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120852324.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120852354.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 死锁的定义","slug":"_1-死锁的定义","link":"#_1-死锁的定义","children":[]},{"level":2,"title":"2. 举例","slug":"_2-举例","link":"#_2-举例","children":[]},{"level":2,"title":"2. 死锁检测","slug":"_2-死锁检测","link":"#_2-死锁检测","children":[]},{"level":2,"title":"2.1 Jstack命令","slug":"_2-1-jstack命令","link":"#_2-1-jstack命令","children":[{"level":3,"title":"2.2 JConsole 工具","slug":"_2-2-jconsole-工具","link":"#_2-2-jconsole-工具","children":[]}]},{"level":2,"title":"2. 预防与解决死锁","slug":"_2-预防与解决死锁","link":"#_2-预防与解决死锁","children":[{"level":3,"title":"2.1 破坏互斥条件","slug":"_2-1-破坏互斥条件","link":"#_2-1-破坏互斥条件","children":[]},{"level":3,"title":"2.2 破坏请求与保持条件","slug":"_2-2-破坏请求与保持条件","link":"#_2-2-破坏请求与保持条件","children":[]},{"level":3,"title":"2.3 破坏不可剥夺条件","slug":"_2-3-破坏不可剥夺条件","link":"#_2-3-破坏不可剥夺条件","children":[]},{"level":3,"title":"2.4 破坏循环等待条件","slug":"_2-4-破坏循环等待条件","link":"#_2-4-破坏循环等待条件","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.49,"words":1048},"filePathRelative":"posts/Java/Java多线程/java-thread-y-deadlock.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 死锁的定义</h2>\\n<p>“死锁是指两个或两个以上的进程在执行过程中，由于竞争资源或者由于彼此通信而造成的一种阻塞的现象，若无外力作用，它们都将无法推进下去。”</p>\\n<p>竞争的资源可以是：锁、网络连接、通知事件，磁盘、带宽，以及一切可以被称作“资源”的东西。</p>\\n<h2>2. 举例</h2>\\n<p>如果此时有一个线程A，按照先锁a再获得锁b的顺序获得锁，而在此时又有一个线程B，按照先锁b再锁a的顺序获得锁</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120852230.png\\" alt=\\"image-20200311231729573\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20200311231729573</figcaption></figure>","autoDesc":true}');export{d as comp,r as data};
