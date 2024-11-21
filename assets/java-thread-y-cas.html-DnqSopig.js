import{_ as a,c as n,a as l,o as i}from"./app-CZJgH_ea.js";const e={};function p(r,s){return i(),n("div",null,s[0]||(s[0]=[l(`<h1 id="cas-比较并替换" tabindex="-1"><a class="header-anchor" href="#cas-比较并替换"><span>CAS（比较并替换）</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>CAS（compare and Swap），既比较并替换，实现并发算法时常用到的一种技术</p><blockquote><p>在java同步器中大量使用了CAS技术，鬼斧神工的实现了多线程执行的安全性</p></blockquote><p>CAS的思想很简单: 三个参数，一个当前内存值V、旧的预期值A、即将更新的值B、<strong>当且仅当<code>预期值A</code>和<code>内存值V</code>相同时</strong>，将内存值修改为B并返回true，否则什么都不做，并返回false</p><h2 id="_2-n-的问题-不能保证原子性" tabindex="-1"><a class="header-anchor" href="#_2-n-的问题-不能保证原子性"><span>2. n++的问题(不能保证原子性)</span></a></h2><p>一个<code>n++</code>的问题</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Case</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> volatile</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> n</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> add</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        n++;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>通过<code>javac Case.java</code> 将java文件先编译成class</p><p>再通过<code>javap -verbose Case</code>看看add方法的字节码指令</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> add</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    descriptor</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ()</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">V</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    flags</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ACC_PUBLIC</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    Code</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      stack</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> locals</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> args_size</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">         0</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> aload_0</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">         1</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> dup</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">         2</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> getfield      #</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  // Field n:I</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">         5</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> iconst_1</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">         6</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> iadd</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">         7</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> putfield      #</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  // Field n:I</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">        10</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> return</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      LineNumberTable</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        line </span><span style="color:#D19A66;--shiki-dark:#D19A66;">12</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        line </span><span style="color:#D19A66;--shiki-dark:#D19A66;">13</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">SourceFile</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;Case.java&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>n++ 被拆分成了几个指令</p><ol><li>执行<code>getfield</code>拿到原始n；</li><li>执行<code>iadd</code>进行加1操作</li><li>执行<code>putfield</code>写把累加后的值写回n；</li></ol><p>通过volatile修饰的变量可以保证线程之间的可见性，但并不能保证这3个指令的原子执行，在多线程并发执行下，无法做到线程安全，得到正确的结果，那么如何解决呢？</p><h2 id="_3-如何解决" tabindex="-1"><a class="header-anchor" href="#_3-如何解决"><span>3. 如何解决</span></a></h2><h3 id="_3-1-方案1-在add-方法加上synchrnized修饰" tabindex="-1"><a class="header-anchor" href="#_3-1-方案1-在add-方法加上synchrnized修饰"><span>3.1 方案1：在add 方法加上synchrnized修饰</span></a></h3><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Case</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> volatile</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> n</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> synchronized</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> add</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        n++;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>这个方案当然可行，但是性能上差了点</p><p>我们再来看一段代码</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> a </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> boolean</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> compareAndSwapInt</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> b) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (a </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        a </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> b</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><p>如果这段代码在并发下执行，会发生什么？</p><p>假设线程1和线程2 都过了<code>a==1</code>的检查。都准备执行a进行赋值，结果就是两个线程同时修改了变量a。显然这种结果是无法符合预期的，无法确定a的最终值。</p><p>解决方案也同样暴力,在compareAndSwapInt方法加锁同步，变成一个原子操作，同一时刻只有一个线程才能修改变量a。</p><h3 id="_3-2-方案2-cas方案" tabindex="-1"><a class="header-anchor" href="#_3-2-方案2-cas方案"><span>3.2 方案2：CAS方案</span></a></h3><p>除了低性能的加锁方案，我们还可以使用JDK自带的CAS方案，在CAS中，比较和替换是一组原子操作，不会被外部打断，且在性能上更占优势</p><p>下面是<code>AtomicInteger</code>的实现为例，分析一下CAS是如何实现的</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> AtomicInteger</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> extends</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Number</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> implements</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> java.io.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Serializable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // setup to use Unsafe.compareAndSwapInt for updates</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> final</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Unsafe</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> unsafe </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Unsafe</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getUnsafe</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> final</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> valueOffset</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    static</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        try</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            valueOffset </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> unsafe</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">objectFieldOffset</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">AtomicInteger</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getDeclaredField</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;value&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Exception</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> ex</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) { </span><span style="color:#C678DD;--shiki-dark:#C678DD;">throw</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Error</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(ex)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> volatile</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> final</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> get</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span><span style="color:#C678DD;--shiki-dark:#C678DD;">return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> value;}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>Unsafe,是CAS的核心类，由于Java方法无法直接访问底层系统，需要通过本地（native）方法来访问，Unsafe相当于一个后门，基于该类可以直接操作特定内存数据</li><li>变量valueOffset，表示该变量值在内存中的偏移地址，因为Unsafe就是根据内存偏移地址获取数据的</li><li>变量value和volatile修饰，保证了多线程之间内存的可见性</li></ol><p>看看<code>AtomicInteger</code>如何实现并发下的累加操作：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> final</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getAndAdd</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> delta) {    </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> unsafe</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getAndAddInt</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, valueOffset, delta);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//unsafe.getAndAddInt</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> final</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getAndAddInt</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> var1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> var2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> var4) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> var5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    do</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        var5 </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getIntVolatile</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(var1, var2);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">while</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">compareAndSwapInt</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(var1, var2, var5, var5 </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> var4)</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> var5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><p>假设线程A和线程B同时执行getAndAdd操作（分别跑在不同的CPU上）</p><ol><li>AtomicInteger里面的value原始值为3，既<strong>主内存中AtomicInteger的value为3</strong>，根据java内存模型，<strong>线程A和线程B各自持有一份value的副本，值为3</strong></li><li>线程A通过<code>getIntVolatile(var1, var2)</code>拿到value值3，这时线程A被挂起。</li><li>线程B也通过<code>getIntVolatile(var1, var2)</code>方法获取到value值3，运气好，线程B没有被挂起，并执行<code>compareAndSwapInt</code>方法比较内存值也为3，成功修改内存值为2。</li><li>这时线程A恢复，执行<code>compareAndSwapInt</code>方法比较，发现自己手里的值(3)和内存的值(2)不一致，说明该值已经被其它线程提前修改过了，那只能重新来一遍了。</li><li>重新获取value值，因为变量value被volatile修饰，所以其它线程对它的修改，线程A总是能够看到，线程A继续执行<code>compareAndSwapInt</code>进行比较替换，直到成功</li></ol><p>整个过程中，利用CAS保证了对于value的修改的并发安全，继续深入看看Unsafe类中的compareAndSwapInt方法实现。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> final</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> native</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> boolean</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> compareAndSwapInt</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> paramObject</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> lo</span></span></code></pre></div><p>Unsafe类中的compareAndSwapInt，是一个本地方法，该方法的实现位于<code>unsafe.cpp</code>中</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">UNSAFE_ENTRY</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(jboolean</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Unsafe_CompareAndSwapInt</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(JNIEnv </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">*</span><span style="color:#E06C75;--shiki-dark:#E06C75;">env</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> jobject unsafe</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> jobject obj</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> jlong offset</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> jint e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> jint x))</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  UnsafeWrapper</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Unsafe_CompareAndSwapInt&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  oop p </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> JNIHandles</span><span style="color:#C678DD;--shiki-dark:#C678DD;">::</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">resolve</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(obj)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  jint</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">*</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> addr </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (jint </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">*</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">index_oop_from_field_offset_long</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(p</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> offset)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (jint)(Atomic</span><span style="color:#C678DD;--shiki-dark:#C678DD;">::</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cmpxchg</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(x</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> addr</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> e)) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">UNSAFE_END</span></span></code></pre></div><ol><li>先想办法拿到变量value在内存中的地址</li><li>通过Atomic::cmpxchg实现替换，其中参数x是即将更新的值，参数e是原内存的值</li></ol><h2 id="_4-cas缺点-三大问题" tabindex="-1"><a class="header-anchor" href="#_4-cas缺点-三大问题"><span>4. CAS缺点(三大问题)</span></a></h2><h3 id="_4-1-aba问题" tabindex="-1"><a class="header-anchor" href="#_4-1-aba问题"><span>4.1 ABA问题</span></a></h3><p>CAS存在一个很明显的问题，既ABA问题</p><p>问题：如果变量V初次读取的时候是A，并且在准备赋值的时候检查到他的仍然是A，那能说明他的值没有被其他线程修改了吗？</p><p>如果在这段期间层级被改成B,然后又改回A，那么CAS操作就会误认为他从来没有被修改过。针对这种情况，java并发包中提供了一个带有标记的原子引用类<code>AtomicStampedReference</code>,它可以<strong>通过控制变量值的版本来保证CAS的正确性</strong></p><h3 id="_4-2-循环时间长开销很大" tabindex="-1"><a class="header-anchor" href="#_4-2-循环时间长开销很大"><span>4.2 <strong>循环时间长开销很大</strong></span></a></h3><p>我们可以看到getAndAddInt方法执行时，如果CAS失败，会一直进行尝试。如果CAS长时间一直不成功，可能会给CPU带来很大的开销。</p><h3 id="_4-3-只能保证一个共享变量的原子操作" tabindex="-1"><a class="header-anchor" href="#_4-3-只能保证一个共享变量的原子操作"><span>4.3 <strong>只能保证一个共享变量的原子操作</strong></span></a></h3><p>当对一个共享变量执行操作时，我们可以使用循环CAS的方式来保证原子操作，但是对多个共享变量操作时，循环CAS就无法保证操作的原子性，这个时候就可以用锁来保证原子性。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.jianshu.com/p/fb6e91b013cc" target="_blank" rel="noopener noreferrer">深入浅出CAS</a></p>`,48)]))}const k=a(e,[["render",p],["__file","java-thread-y-cas.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-cas.html","title":"CAS（比较并替换）","lang":"zh-CN","frontmatter":{"aliases":"CAS（比较并替换）","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:48","updated":"2024-03-12 08:50","description":"CAS（比较并替换） 1. 简介 CAS（compare and Swap），既比较并替换，实现并发算法时常用到的一种技术 在java同步器中大量使用了CAS技术，鬼斧神工的实现了多线程执行的安全性 CAS的思想很简单: 三个参数，一个当前内存值V、旧的预期值A、即将更新的值B、当且仅当预期值A和内存值V相同时，将内存值修改为B并返回true，否则什么...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-cas.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"CAS（比较并替换）"}],["meta",{"property":"og:description","content":"CAS（比较并替换） 1. 简介 CAS（compare and Swap），既比较并替换，实现并发算法时常用到的一种技术 在java同步器中大量使用了CAS技术，鬼斧神工的实现了多线程执行的安全性 CAS的思想很简单: 三个参数，一个当前内存值V、旧的预期值A、即将更新的值B、当且仅当预期值A和内存值V相同时，将内存值修改为B并返回true，否则什么..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CAS（比较并替换）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. n++的问题(不能保证原子性)","slug":"_2-n-的问题-不能保证原子性","link":"#_2-n-的问题-不能保证原子性","children":[]},{"level":2,"title":"3. 如何解决","slug":"_3-如何解决","link":"#_3-如何解决","children":[{"level":3,"title":"3.1 方案1：在add 方法加上synchrnized修饰","slug":"_3-1-方案1-在add-方法加上synchrnized修饰","link":"#_3-1-方案1-在add-方法加上synchrnized修饰","children":[]},{"level":3,"title":"3.2 方案2：CAS方案","slug":"_3-2-方案2-cas方案","link":"#_3-2-方案2-cas方案","children":[]}]},{"level":2,"title":"4. CAS缺点(三大问题)","slug":"_4-cas缺点-三大问题","link":"#_4-cas缺点-三大问题","children":[{"level":3,"title":"4.1 ABA问题","slug":"_4-1-aba问题","link":"#_4-1-aba问题","children":[]},{"level":3,"title":"4.2 循环时间长开销很大","slug":"_4-2-循环时间长开销很大","link":"#_4-2-循环时间长开销很大","children":[]},{"level":3,"title":"4.3 只能保证一个共享变量的原子操作","slug":"_4-3-只能保证一个共享变量的原子操作","link":"#_4-3-只能保证一个共享变量的原子操作","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.38,"words":1615},"filePathRelative":"posts/Java/Java多线程/java-thread-y-cas.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>CAS（compare and Swap），既比较并替换，实现并发算法时常用到的一种技术</p>\\n<blockquote>\\n<p>在java同步器中大量使用了CAS技术，鬼斧神工的实现了多线程执行的安全性</p>\\n</blockquote>\\n<p>CAS的思想很简单: 三个参数，一个当前内存值V、旧的预期值A、即将更新的值B、<strong>当且仅当<code>预期值A</code>和<code>内存值V</code>相同时</strong>，将内存值修改为B并返回true，否则什么都不做，并返回false</p>\\n<h2>2. n++的问题(不能保证原子性)</h2>","autoDesc":true}');export{k as comp,c as data};
