import{_ as e,c as n,a as t,o as l}from"./app-DQS7qcOs.js";const r={};function s(i,a){return l(),n("div",null,a[0]||(a[0]=[t('<h1 id="多线程" tabindex="-1"><a class="header-anchor" href="#多线程"><span>多线程</span></a></h1><h2 id="_1-什么是线程和进程" tabindex="-1"><a class="header-anchor" href="#_1-什么是线程和进程"><span>1. 什么是线程和进程</span></a></h2><h3 id="_1-1-什么是进程" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是进程"><span>1.1 什么是进程</span></a></h3><p><strong>进程是程序的一次执行过程，是操作系统分配资源的最小单位</strong>。系统运行一个程序即是一个进程从创建，运行到消亡的过程</p><blockquote><p>在java中，当我们启动 main 函数时其实就是启动了一个 JVM 的进程，而main函数所在的线程就是这个进程中的一个线程，也称主线程</p></blockquote><h3 id="_1-2-什么是线程" tabindex="-1"><a class="header-anchor" href="#_1-2-什么是线程"><span>1.2 什么是线程</span></a></h3><p>他是<strong>操作系统运算调度（程序执行）的最小单位，一个进程包含一个或多个线程</strong>（重点是调度）</p><blockquote><p>与进程不同的是同类的多个线程共享<strong>堆和方法区</strong>资源，但每个线程有自己的<strong>程序计数器、虚拟机栈和本地方法栈</strong>。所以系统在产生一个线程，或者在各个线程切换工作时，负担要比进程小得多</p></blockquote><h2 id="_2-线程与进程的关系与区别及优缺点" tabindex="-1"><a class="header-anchor" href="#_2-线程与进程的关系与区别及优缺点"><span>2. 线程与进程的关系与区别及优缺点</span></a></h2><h3 id="_2-1-进程与线程的关系" tabindex="-1"><a class="header-anchor" href="#_2-1-进程与线程的关系"><span>2.1 进程与线程的关系</span></a></h3><p>一个进程包含多个线程</p><h3 id="_2-2-进程与线程的区别" tabindex="-1"><a class="header-anchor" href="#_2-2-进程与线程的区别"><span>2.2 进程与线程的区别</span></a></h3><ol><li><p><strong>进程是资源分配的最小单位，线程是程序执行的最小单位</strong></p></li><li><p><strong>线程之间的通信更方便</strong>，因为同一进程下的线程共享全局变量，静态变量等数据，而进程之间的通信需要以IPC的方式进行通信</p></li><li><p><strong>进程有自己独立的地址空间</strong>，创建销毁开销大</p><p><strong>线程是共享进程中的数据的，使用相同的地址空间</strong>，创建、切换、销毁开销小</p></li><li><p>各进程是独立的，而线程则不一定。因为同一进程中的线程极有可能相互影响</p></li></ol><h2 id="_3-进程与线程的内存区域" tabindex="-1"><a class="header-anchor" href="#_3-进程与线程的内存区域"><span>3. 进程与线程的内存区域</span></a></h2><p>下图是java 的内存区域</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120850859.png" alt="image-20190919231017632" tabindex="0" loading="lazy"><figcaption>image-20190919231017632</figcaption></figure><p>从上图可以看出：一个进程中可以有多个线程，多个线程共享<strong>堆</strong>和<strong>方法区</strong>（JDK1.8之后的元空间）资源，<strong>但是每个线程有自己的程序计数器、虚拟机栈和本地方法栈</strong></p><h3 id="_3-1-从内存区域角度来分析进程与线程区别" tabindex="-1"><a class="header-anchor" href="#_3-1-从内存区域角度来分析进程与线程区别"><span>3.1 从内存区域角度来分析进程与线程区别</span></a></h3><ol><li>线程是进程划分成更小的运行单位</li><li>线程和进程最大的不同在于各进程是独立的，而线程则不一定。因为同一进程中的线程极有可能相互影响</li><li>线程执行开销小，但不利于资源的管理和保护，而进程相反</li></ol><h3 id="_3-2-程序计数器为什么是私有的" tabindex="-1"><a class="header-anchor" href="#_3-2-程序计数器为什么是私有的"><span>3.2 程序计数器为什么是私有的？</span></a></h3><p>程序计数器主要有下面两个作用：</p><ol><li>字节码解释器通过改变程序计数器来依次读取指令，从而实现代码的流程控制，如：顺序执行、选择、循环、异常处理。</li><li>在多线程的情况下，程序计数器用于记录当前线程执行的位置，从而当线程被切换回来的时候能够知道该线程上次运行到哪儿了。</li></ol><p>需要注意的是，如果执行的是 native 方法，那么程序计数器记录的是 undefined 地址，只有执行的是 Java 代码时程序计数器记录的才是下一条指令的地址。</p><p>所以，程序计数器私有主要是为了<strong>线程切换后能恢复到正确的执行位置</strong>。</p><h3 id="_3-3-虚拟机栈和本地方法栈为什么是私有的" tabindex="-1"><a class="header-anchor" href="#_3-3-虚拟机栈和本地方法栈为什么是私有的"><span>3.3 虚拟机栈和本地方法栈为什么是私有的</span></a></h3><ul><li><strong>虚拟机栈：</strong> 每个 Java 方法在执行的同时会创建一个栈帧用于存储局部变量表、操作数栈、常量池引用等信息。从方法调用直至执行完成的过程，就对应着一个栈帧在 Java 虚拟机栈中入栈和出栈的过程。</li><li><strong>本地方法栈：</strong> 和虚拟机栈所发挥的作用非常相似，区别是： <strong>虚拟机栈为虚拟机执行 Java 方法 （也就是字节码）服务，而本地方法栈则为虚拟机使用到的 Native 方法服务。</strong> 在 HotSpot 虚拟机中和 Java 虚拟机栈合二为一。</li></ul><p>所以，为了<strong>保证线程中的局部变量不被别的线程访问到</strong>，虚拟机栈和本地方法栈是线程私有的。</p><h3 id="_3-4-一句话简单了解堆和方法区" tabindex="-1"><a class="header-anchor" href="#_3-4-一句话简单了解堆和方法区"><span>3.4. 一句话简单了解堆和方法区</span></a></h3><p>堆和方法区是所有线程共享的资源，其中堆是进程中最大的一块内存，主要用于存放新创建的对象 (所有对象都在这里分配内存)，方法区主要用于存放已被加载的类信息、常量、静态变量、即时编译器编译后的代码等数据。</p><h2 id="_4-并发和并行" tabindex="-1"><a class="header-anchor" href="#_4-并发和并行"><span>4. 并发和并行</span></a></h2><ul><li><strong>并发：</strong> 同一时间段，多个任务都在执行 (单位时间内不一定同时执行)；</li><li><strong>并行：</strong> 单位时间内，多个任务同时执行。</li></ul><h2 id="_5-为什么要使用多线程" tabindex="-1"><a class="header-anchor" href="#_5-为什么要使用多线程"><span>5. 为什么要使用多线程</span></a></h2><ul><li><p>从计算机底层来说:</p><ol><li>线程比作轻量级的进程，是程序执行的最小单位，<strong>线程间的切换和调度成本远远小于进程</strong></li><li>多核CPU时代意味着<strong>多个线程可以同时运行</strong>，这减少了线程上下文切换的开销</li></ol></li><li><p>从当代互联网发展趋势来说：<br> 3. 现在的系统动不动就要求百万级甚至千万级的并发量，而<strong>多线程并发编程正式开发高并发系统的基础</strong><br> 4. 利用好多线程机制可以<strong>大大提高系统整体的并发能力以及性能</strong></p></li></ul><h2 id="_6-多线程可能带来的问题" tabindex="-1"><a class="header-anchor" href="#_6-多线程可能带来的问题"><span>6. 多线程可能带来的问题</span></a></h2><p>并发编程的目的就是为了能提高程序的执行效率提高程序运行速度，但是并发编程并不总是能提高程序运行速度的，而且并发编程可能会遇到很多问题，比如：</p><ul><li>内存泄漏</li><li>上下文切换</li><li>死锁</li><li>还有受限于硬件和软件的资源闲置问题。</li></ul><h2 id="_7-什么是上下文切换" tabindex="-1"><a class="header-anchor" href="#_7-什么是上下文切换"><span>7. 什么是上下文切换</span></a></h2><p>当前任务在执行完 CPU 时间片切换到另一个任务之前会先保存自己的状态，以便下次再切换到回这个任务时，可以再加载这个任务的状态。<strong>任务从保存到再加载的过程就是一次上下文切换</strong></p><h3 id="_7-1-为什么需要上下文切换" tabindex="-1"><a class="header-anchor" href="#_7-1-为什么需要上下文切换"><span>7.1 为什么需要上下文切换</span></a></h3><p>多线程编程中一般线程的个数都大于CPU核心的个数，而一个CPU核心在任意时刻只能被一个线程使用，为了让这些线程都能得到有效的执行，CPU 采取的策略是为每个线程分配时间片并轮转的形式，当一个线程的时间片用完的时候就会重新处于就绪状态让其他线程使用，这个过程就是上下文切换</p><h3 id="_7-2-为什么说上下文切换消耗时间" tabindex="-1"><a class="header-anchor" href="#_7-2-为什么说上下文切换消耗时间"><span>7.2 为什么说上下文切换消耗时间</span></a></h3><p>上下文切换通常是计算密集型的。也就是说，它需要相当可观的处理器时间，在每秒几十上百次的切换中，每次切换都需要纳秒量级的时间。所以，上下文切换对系统来说意味着消耗大量的 CPU 时间，事实上，可能是操作系统中时间消耗最大的操作。</p><h2 id="_8-为什么我们不能直接调用-run-方法" tabindex="-1"><a class="header-anchor" href="#_8-为什么我们不能直接调用-run-方法"><span>8. 为什么我们不能直接调用 run() 方法？</span></a></h2><p><strong>调用 start 方法方可启动线程并使线程进入就绪状态，而 run 方法只是 thread 的一个普通方法调用，还是在主线程里执行。</strong></p><h2 id="_9-什么是线程安全" tabindex="-1"><a class="header-anchor" href="#_9-什么是线程安全"><span>9. 什么是线程安全</span></a></h2><blockquote><p>当<strong>多个线程访问同一个对象</strong>时，如果<strong>不用考虑</strong>这些线程在运行时环境下的调度和交替运行，也不需要进行额外的同步，或者在调用方进行任何其他的协调操作，调用这个对象的行为<strong>都可以获取正确的结果</strong>，那这个对象是线程安全的。 《深入java虚拟机》</p></blockquote>',46)]))}const h=e(r,[["render",s],["__file","java-thread-y-base.html.vue"]]),p=JSON.parse('{"path":"/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-base.html","title":"多线程","lang":"zh-CN","frontmatter":{"aliases":"多线程","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:48","updated":"2024-03-12 08:50","description":"多线程 1. 什么是线程和进程 1.1 什么是进程 进程是程序的一次执行过程，是操作系统分配资源的最小单位。系统运行一个程序即是一个进程从创建，运行到消亡的过程 在java中，当我们启动 main 函数时其实就是启动了一个 JVM 的进程，而main函数所在的线程就是这个进程中的一个线程，也称主线程 1.2 什么是线程 他是操作系统运算调度（程序执行）...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-base.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"多线程"}],["meta",{"property":"og:description","content":"多线程 1. 什么是线程和进程 1.1 什么是进程 进程是程序的一次执行过程，是操作系统分配资源的最小单位。系统运行一个程序即是一个进程从创建，运行到消亡的过程 在java中，当我们启动 main 函数时其实就是启动了一个 JVM 的进程，而main函数所在的线程就是这个进程中的一个线程，也称主线程 1.2 什么是线程 他是操作系统运算调度（程序执行）..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120850859.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多线程\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120850859.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是线程和进程","slug":"_1-什么是线程和进程","link":"#_1-什么是线程和进程","children":[{"level":3,"title":"1.1 什么是进程","slug":"_1-1-什么是进程","link":"#_1-1-什么是进程","children":[]},{"level":3,"title":"1.2 什么是线程","slug":"_1-2-什么是线程","link":"#_1-2-什么是线程","children":[]}]},{"level":2,"title":"2. 线程与进程的关系与区别及优缺点","slug":"_2-线程与进程的关系与区别及优缺点","link":"#_2-线程与进程的关系与区别及优缺点","children":[{"level":3,"title":"2.1 进程与线程的关系","slug":"_2-1-进程与线程的关系","link":"#_2-1-进程与线程的关系","children":[]},{"level":3,"title":"2.2 进程与线程的区别","slug":"_2-2-进程与线程的区别","link":"#_2-2-进程与线程的区别","children":[]}]},{"level":2,"title":"3. 进程与线程的内存区域","slug":"_3-进程与线程的内存区域","link":"#_3-进程与线程的内存区域","children":[{"level":3,"title":"3.1 从内存区域角度来分析进程与线程区别","slug":"_3-1-从内存区域角度来分析进程与线程区别","link":"#_3-1-从内存区域角度来分析进程与线程区别","children":[]},{"level":3,"title":"3.2 程序计数器为什么是私有的？","slug":"_3-2-程序计数器为什么是私有的","link":"#_3-2-程序计数器为什么是私有的","children":[]},{"level":3,"title":"3.3 虚拟机栈和本地方法栈为什么是私有的","slug":"_3-3-虚拟机栈和本地方法栈为什么是私有的","link":"#_3-3-虚拟机栈和本地方法栈为什么是私有的","children":[]},{"level":3,"title":"3.4. 一句话简单了解堆和方法区","slug":"_3-4-一句话简单了解堆和方法区","link":"#_3-4-一句话简单了解堆和方法区","children":[]}]},{"level":2,"title":"4. 并发和并行","slug":"_4-并发和并行","link":"#_4-并发和并行","children":[]},{"level":2,"title":"5. 为什么要使用多线程","slug":"_5-为什么要使用多线程","link":"#_5-为什么要使用多线程","children":[]},{"level":2,"title":"6. 多线程可能带来的问题","slug":"_6-多线程可能带来的问题","link":"#_6-多线程可能带来的问题","children":[]},{"level":2,"title":"7. 什么是上下文切换","slug":"_7-什么是上下文切换","link":"#_7-什么是上下文切换","children":[{"level":3,"title":"7.1 为什么需要上下文切换","slug":"_7-1-为什么需要上下文切换","link":"#_7-1-为什么需要上下文切换","children":[]},{"level":3,"title":"7.2 为什么说上下文切换消耗时间","slug":"_7-2-为什么说上下文切换消耗时间","link":"#_7-2-为什么说上下文切换消耗时间","children":[]}]},{"level":2,"title":"8. 为什么我们不能直接调用 run() 方法？","slug":"_8-为什么我们不能直接调用-run-方法","link":"#_8-为什么我们不能直接调用-run-方法","children":[]},{"level":2,"title":"9. 什么是线程安全","slug":"_9-什么是线程安全","link":"#_9-什么是线程安全","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.75,"words":2026},"filePathRelative":"posts/Java/Java多线程/java-thread-y-base.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 什么是线程和进程</h2>\\n<h3>1.1 什么是进程</h3>\\n<p><strong>进程是程序的一次执行过程，是操作系统分配资源的最小单位</strong>。系统运行一个程序即是一个进程从创建，运行到消亡的过程</p>\\n<blockquote>\\n<p>在java中，当我们启动 main 函数时其实就是启动了一个 JVM 的进程，而main函数所在的线程就是这个进程中的一个线程，也称主线程</p>\\n</blockquote>\\n<h3>1.2 什么是线程</h3>\\n<p>他是<strong>操作系统运算调度（程序执行）的最小单位，一个进程包含一个或多个线程</strong>（重点是调度）</p>","autoDesc":true}');export{h as comp,p as data};
