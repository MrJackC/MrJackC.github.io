import{_ as a,c as n,a as i,o as l}from"./app-fWubcX7c.js";const e={};function r(p,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="reentrantlock源码分析-三-应用" tabindex="-1"><a class="header-anchor" href="#reentrantlock源码分析-三-应用"><span>ReentrantLock源码分析(三)-应用</span></a></h1><h2 id="_1-aqs应用" tabindex="-1"><a class="header-anchor" href="#_1-aqs应用"><span>1. AQS应用</span></a></h2><p>**ReentrantLock的可重入应用：**ReentrantLock的可重入性是 AQS很好的应用之一，在了解完上述知识点以后，我们很容易得知ReentrantLock实现可重入的方法。在ReentrantLock里面，不管是公平锁还是非公平锁，都有一段逻辑。</p><p>公平锁：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// java.util.concurrent.locks.ReentrantLock.FairSync#tryAcquire</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">hasQueuedPredecessors</span><span style="color:#E06C75;--shiki-dark:#E06C75;">() </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&amp;&amp;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> compareAndSetState</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> acquires)) {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        setExclusiveOwnerThread</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(current)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">else</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (current </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getExclusiveOwnerThread</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> nextc </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> acquires</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (nextc </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        throw</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Error</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Maximum lock count exceeded&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    setState</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(nextc)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>非公平锁：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// java.util.concurrent.locks.ReentrantLock.Sync#nonfairTryAcquire</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">compareAndSetState</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> acquires)){</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        setExclusiveOwnerThread</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(current)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">else</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (current </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getExclusiveOwnerThread</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> nextc </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> acquires</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (nextc </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// overflow</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        throw</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Error</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Maximum lock count exceeded&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    setState</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(nextc)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面这两段都可以看到，有一个同步状态State来控制整体可重入的情况。State是Volatile修饰的，用于保证一定的可见性和有序性。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> volatile</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> state</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h3 id="_1-1-state这个字段主要的过程" tabindex="-1"><a class="header-anchor" href="#_1-1-state这个字段主要的过程"><span>1.1 State这个字段主要的过程</span></a></h3><p>接下来看State这个字段主要的过程：</p><ol><li>State初始化的时候为0，表示没有任何线程持有锁。</li><li>当有线程持有该锁时，值就会在原来的基础上+1，同一个线程多次获得锁是，就会多次+1，这里就是可重入的概念。</li><li>解锁也是对这个字段-1，一直到0，此线程对锁释放。</li></ol><h3 id="_1-2-juc中的应用场景" tabindex="-1"><a class="header-anchor" href="#_1-2-juc中的应用场景"><span>1.2 <strong>JUC中的应用场景</strong></span></a></h3><p>JUC中的应用场景：除了上边ReentrantLock的可重入性的应用，AQS作为并发编程的框架，为很多其他同步工具提供了良好的解决方案。下面列出了JUC中的几种同步工具，大体介绍一下AQS的应用场景：</p><table><thead><tr><th>同步工具</th><th>同步工具与AQS的关联</th></tr></thead><tbody><tr><td>ReentrantLock</td><td>使用AQS保存锁重复持有的次数。当一个线程获取锁时，ReentrantLock记录当前获得锁的线程标识，用于检测是否重复获取，以及错误线程试图解锁操作时异常情况的处理。</td></tr><tr><td>Semaphore</td><td>使用AQS同步状态来保存信号量的当前计数。tryRelease会增加计数，acquireShared会减少计数。</td></tr><tr><td>CountDownLatch</td><td>使用AQS同步状态来表示计数。计数为0时，所有的Acquire操作（CountDownLatch的await方法）才可以通过。</td></tr><tr><td>ReentrantReadWriteLock</td><td>使用AQS同步状态中的16位保存写锁持有的次数，剩下的16位用于保存读锁的持有次数。</td></tr><tr><td>ThreadPoolExecutor</td><td>Worker利用AQS同步状态实现对独占线程变量的设置（tryAcquire和tryRelease）。</td></tr></tbody></table><h2 id="_2-自定义同步工具" tabindex="-1"><a class="header-anchor" href="#_2-自定义同步工具"><span>2. 自定义同步工具</span></a></h2><hr><p>了解 AQS基本原理以后，按照上面所说的 AQS知识点，自己实现一个同步工具。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> LeeLock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Sync</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> extends</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> AbstractQueuedSynchronizer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        protected</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> boolean</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> tryAcquire</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> arg</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            return</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> compareAndSetState</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        protected</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> boolean</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> tryRelease</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> arg</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">            setState</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        protected</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> boolean</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> isHeldExclusively</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            return</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getState</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Sync</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> sync </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Sync</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> lock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        sync</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">acquire</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> unlock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        sync</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">release</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过我们自己定义的Lock完成一定的同步功能。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> LeeMain</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> count </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    static</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> LeeLock</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> leeLock </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> LeeLock</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> throws</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> InterruptedException</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Runnable</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> runnable</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Runnable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> run</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                try</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    leeLock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">lock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                    for</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> i</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; i </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10000</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; i++) {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                        count++;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Exception</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">printStackTrace</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">finally</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    leeLock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">unlock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        };</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Thread</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> thread1</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(runnable);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Thread</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> thread2</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(runnable);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        thread1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">start</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        thread2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">start</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        thread1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">join</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        thread2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">join</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(count);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码每次运行结果都会是20000。通过简单的几行代码就能实现同步功能，这就是AQS的强大之处。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/zhengzhaoyang122/article/details/110847701" target="_blank" rel="noopener noreferrer">ReentrantLock 锁详解</a></p>`,24)]))}const t=a(e,[["render",r],["__file","java-thread-x-lock-reentrantlock-source3.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-x-lock-reentrantlock-source3.html","title":"ReentrantLock源码分析(三)-应用","lang":"zh-CN","frontmatter":{"aliases":"ReentrantLock源码分析(三)-应用","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:48","updated":"2024-03-11 17:27","description":"ReentrantLock源码分析(三)-应用 1. AQS应用 **ReentrantLock的可重入应用：**ReentrantLock的可重入性是 AQS很好的应用之一，在了解完上述知识点以后，我们很容易得知ReentrantLock实现可重入的方法。在ReentrantLock里面，不管是公平锁还是非公平锁，都有一段逻辑。 公平锁： 非公平锁：...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-x-lock-reentrantlock-source3.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"ReentrantLock源码分析(三)-应用"}],["meta",{"property":"og:description","content":"ReentrantLock源码分析(三)-应用 1. AQS应用 **ReentrantLock的可重入应用：**ReentrantLock的可重入性是 AQS很好的应用之一，在了解完上述知识点以后，我们很容易得知ReentrantLock实现可重入的方法。在ReentrantLock里面，不管是公平锁还是非公平锁，都有一段逻辑。 公平锁： 非公平锁：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ReentrantLock源码分析(三)-应用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. AQS应用","slug":"_1-aqs应用","link":"#_1-aqs应用","children":[{"level":3,"title":"1.1 State这个字段主要的过程","slug":"_1-1-state这个字段主要的过程","link":"#_1-1-state这个字段主要的过程","children":[]},{"level":3,"title":"1.2 JUC中的应用场景","slug":"_1-2-juc中的应用场景","link":"#_1-2-juc中的应用场景","children":[]}]},{"level":2,"title":"2. 自定义同步工具","slug":"_2-自定义同步工具","link":"#_2-自定义同步工具","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.9,"words":871},"filePathRelative":"posts/Java/Java多线程/java-thread-x-lock-reentrantlock-source3.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. AQS应用</h2>\\n<p>**ReentrantLock的可重入应用：**ReentrantLock的可重入性是 AQS很好的应用之一，在了解完上述知识点以后，我们很容易得知ReentrantLock实现可重入的方法。在ReentrantLock里面，不管是公平锁还是非公平锁，都有一段逻辑。</p>\\n<p>公平锁：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// java.util.concurrent.locks.ReentrantLock.FairSync#tryAcquire</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">if</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> (c </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">==</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> 0</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">    if</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> (</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">!</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">hasQueuedPredecessors</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">() </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&amp;&amp;</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> compareAndSetState</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">(</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">0</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> acquires)) {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">        setExclusiveOwnerThread</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">(current)</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">        return</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> true</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">else</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> if</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> (current </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">==</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> getExclusiveOwnerThread</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">()) {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">    int</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> nextc </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> c </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">+</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> acquires</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">    if</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> (nextc </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> 0</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">        throw</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> new</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> Error</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">(</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"Maximum lock count exceeded\\"</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">)</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">    setState</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">(nextc)</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">    return</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> true</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as comp,c as data};
