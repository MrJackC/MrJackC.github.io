import{_ as a,c as n,a as l,o as i}from"./app-DP7tPpgD.js";const e={};function o(r,s){return i(),n("div",null,s[0]||(s[0]=[l(`<h1 id="关键字-volatile" tabindex="-1"><a class="header-anchor" href="#关键字-volatile"><span>关键字: volatile</span></a></h1><blockquote><p>Java语言为了解决并发编程中存在的原子性、可见性和有序性问题，提供了一系列和并发处理相关的关键字，比如<code>synchronized</code>、<code>volatile</code>、<code>final</code>、<code>concurren包</code>等</p></blockquote><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p><code>volatile</code>通常被比喻成&quot;轻量级的<code>synchronized</code>&quot;，也是Java并发编程中比较重要的一个关键字。和<code>synchronized</code>不同，<code>volatile</code>是一个变量修饰符，只能用来修饰变量。无法修饰方法及代码块等。</p><blockquote><p><code>synchronized</code>可以保证原子性、有序性和可见性。而<code>volatile</code>却只能保证有序性和可见性</p></blockquote><h3 id="_1-1-作用" tabindex="-1"><a class="header-anchor" href="#_1-1-作用"><span>1.1 作用</span></a></h3><ol><li>保证了不同线程对这个变量进行操作时的可见性，即一个线程修改了某个变量的值，这新值对其他线程来说是立即可见的。（<strong>保证可见性</strong>）</li><li>禁止进行指令重排序。（<strong>保证有序性</strong>）</li></ol><h2 id="_2-用法" tabindex="-1"><a class="header-anchor" href="#_2-用法"><span>2. 用法</span></a></h2><p><code>volatile</code>的用法比较简单，只需要在声明一个<strong>可能被多线程同时访问的变量时，使用<code>volatile</code>修饰</strong>就可以了。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Singleton</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> volatile</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Singleton</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> singleton</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Singleton</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (){}</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Singleton</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getSingleton</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {  </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (singleton </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {  </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        synchronized</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Singleton</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {  </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (singleton </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            singleton </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Singleton</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }  </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> singleton;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><blockquote><p>单例模式的实例，可能在多线程中被子线程同时访问</p></blockquote><p>如以上代码，是一个比较典型的使用双重锁校验的形式实现单例的，<strong>其中使用<code>volatile</code>关键字修饰可能被多个线程同时访问到的singleton</strong>。</p><h2 id="_3-volatile的原理" tabindex="-1"><a class="header-anchor" href="#_3-volatile的原理"><span>3. volatile的原理</span></a></h2><p>为了提高处理器的执行速度，<strong>在处理器和内存之间增加了多级缓存来提升</strong>。但是由于引入了多级缓存，就<strong>存在缓存数据不一致问题</strong>。</p><p>但是，对于<code>volatile</code>变量，<strong>当对<code>volatile</code>变量进行写操作的时候</strong>，<strong>JVM会向处理器发送一条lock前缀的指令，将这个缓存中的变量回写到系统主存中。</strong></p><p>但是就算写回到内存，如果其他处理器缓存的值还是旧的，再执行计算操作就会有问题，所以在多处理器下，为了保证各个处理器的缓存是一致的，就会实现<strong>缓存一致性协议</strong></p><h3 id="_3-1-缓存一致性协议" tabindex="-1"><a class="header-anchor" href="#_3-1-缓存一致性协议"><span>3.1 缓存一致性协议</span></a></h3><p><strong>缓存一致性协议</strong>：每个处理器通过嗅探在总线上传播的数据来检查自己缓存的值是不是过期了，当处理器发现自己缓存行对应的内存地址被修改，就会将当前处理器的缓存行设置成无效状态，当处理器要对这个数据进行修改操作的时候，会强制重新从系统内存里把数据读到处理器缓存里。</p><h3 id="_3-2-原理总结" tabindex="-1"><a class="header-anchor" href="#_3-2-原理总结"><span>3.2 原理总结</span></a></h3><p>如果<strong>一个变量被<code>volatile</code>所修饰的话，在每次数据变化之后，其值都会被强制刷入主存。而其他处理器的缓存由于遵守了缓存一致性协议，也会把这个变量的值从主存加载到自己的缓存中。这就保证了一个<code>volatile</code>在并发编程中，其值在多个缓存中是可见的</strong>。</p><h2 id="_4-volatile-与并发问题" tabindex="-1"><a class="header-anchor" href="#_4-volatile-与并发问题"><span>4. volatile 与并发问题</span></a></h2><h3 id="_4-1-volatile与可见性" tabindex="-1"><a class="header-anchor" href="#_4-1-volatile与可见性"><span>4.1 volatile与可见性</span></a></h3><h4 id="_4-1-1-定义" tabindex="-1"><a class="header-anchor" href="#_4-1-1-定义"><span>4.1.1 定义</span></a></h4><p>可见性是指当多个线程访问同一个变量时，一个线程修改了这个变量的值，其他线程能够立即看得到修改的值。</p><h4 id="_4-1-2-背景" tabindex="-1"><a class="header-anchor" href="#_4-1-2-背景"><span>4.1.2 背景</span></a></h4><p>Java内存模型规定了<strong>所有的变量都存储在主内存</strong>中，<strong>每条线程还有自己的工作内存</strong>，线程的<strong>工作内存中保存了该线程中是用到的变量的主内存副本拷贝</strong>，线程对变量的所有操作都必须在工作内存中进行，而不能直接读写主内存。不同的线程之间也无法直接访问对方工作内存中的变量，<strong>线程间变量的传递均需要自己的工作内存和主存之间进行数据同步进行</strong>。所以，就<strong>可能出现线程1改了某个变量的值，但是线程2不可见的情况</strong>。</p><h4 id="_4-1-3-结论-保证可见性" tabindex="-1"><a class="header-anchor" href="#_4-1-3-结论-保证可见性"><span>4.1.3 结论（保证可见性）</span></a></h4><p>前面的关于<code>volatile</code>的原理中介绍过了，Java中的<code>volatile</code>关键字提供了一个功能，那就是<strong>被其修饰的变量在被修改后可以立即同步到主内存</strong>，被其修饰的变量在每次是用之前都从主内存刷新。因此，可以使用**<code>volatile</code>来保证多线程操作时变量的可见性**。</p><h3 id="_4-2-volatile与有序性" tabindex="-1"><a class="header-anchor" href="#_4-2-volatile与有序性"><span>4.2 volatile与有序性</span></a></h3><h4 id="_4-2-1-定义" tabindex="-1"><a class="header-anchor" href="#_4-2-1-定义"><span>4.2.1 定义</span></a></h4><p>有序性即程序执行的顺序按照代码的先后顺序执行。</p><h4 id="_4-2-2-背景" tabindex="-1"><a class="header-anchor" href="#_4-2-2-背景"><span>4.2.2 背景</span></a></h4><p>除了引入了时间片以外，由于处理器优化和指令重排等，CPU还可能对输入代码进行乱序执行，比如<code>load-&gt;add-&gt;save</code> 有可能被优化成<code>load-&gt;save-&gt;add</code> 。这就是可能存在有序性问题。</p><h4 id="_4-2-3-结论-保证有序性" tabindex="-1"><a class="header-anchor" href="#_4-2-3-结论-保证有序性"><span>4.2.3 结论（保证有序性）</span></a></h4><p>而<code>volatile</code>除了可以保证数据的可见性之外，还有一个强大的功能，那就是他可以<strong>禁止指令重排优化</strong>等。</p><p>普通的变量仅仅会保证在该方法的执行过程中所依赖的赋值结果的地方都能获得正确的结果，而不能保证变量的赋值操作的顺序与程序代码中的执行顺序一致。</p><p>volatile可以禁止指令重排，这就保证了代码的程序会严格按照代码的先后顺序执行。这就保证了有序性。<strong>被<code>volatile</code>修饰的变量的操作，会严格按照代码顺序执行，<code>load-&gt;add-&gt;save</code> 的执行顺序就是：load、add、save。</strong></p><h3 id="_4-3-volatile与原子性" tabindex="-1"><a class="header-anchor" href="#_4-3-volatile与原子性"><span>4.3 volatile与原子性</span></a></h3><h4 id="_4-3-1-定义" tabindex="-1"><a class="header-anchor" href="#_4-3-1-定义"><span>4.3.1 定义</span></a></h4><p>原子性是指一个操作是不可中断的，要全部执行完成，要不就都不执行。</p><h4 id="_4-3-2-背景" tabindex="-1"><a class="header-anchor" href="#_4-3-2-背景"><span>4.3.2 背景</span></a></h4><p>线程是CPU调度的基本单位。CPU有时间片的概念，会根据不同的调度算法进行线程调度。当一个线程获得时间片之后开始执行，在时间片耗尽之后，就会失去CPU使用权。所以在多线程场景下，由于时间片在线程间轮换，就会发生原子性问题。</p><h4 id="_4-3-3-结论-不保证原子性" tabindex="-1"><a class="header-anchor" href="#_4-3-3-结论-不保证原子性"><span>4.3.3 结论（不保证原子性）</span></a></h4><p>我们介绍<code>synchronized</code>的时候，提到过，为了保证原子性，需要通过字节码指令<code>monitorenter</code>和<code>monitorexit</code>，但是<code>volatile</code>和这两个指令之间是没有任何关系的。</p><p><strong>所以，<code>volatile</code>是不能保证原子性的。</strong></p><h2 id="_5-volatile的原理和实现机制" tabindex="-1"><a class="header-anchor" href="#_5-volatile的原理和实现机制"><span>5. volatile的原理和实现机制</span></a></h2><p>下面这段话摘自《深入理解Java虚拟机》：</p><p>“观察加入volatile关键字和没有加入volatile关键字时所生成的汇编代码发现，加入volatile关键字时，会多出一个lock前缀指令”</p><p>lock前缀指令实际上相当于一个内存屏障（也成内存栅栏），内存屏障会提供3个功能：</p><ol><li>它确保指令重排序时不会把其后面的指令排到内存屏障之前的位置，也不会把前面的指令排到内存屏障的后面；即在执行到内存屏障这句指令时，在它前面的操作已经全部完成；</li><li>它会强制将对缓存的修改操作立即写入主存；</li><li>如果是写操作，它会导致其他CPU中对应的缓存行无效。</li></ol><h2 id="_6-volatile-使用场景" tabindex="-1"><a class="header-anchor" href="#_6-volatile-使用场景"><span>6. volatile 使用场景</span></a></h2><p>在以下两个场景中可以使用<code>volatile</code>来代替<code>synchronized</code>：</p><ol><li><strong>对变量的写操作不依赖于当前值</strong></li><li>变量不需要与其他状态变量共同参与不变约束。</li></ol><p>除以上场景外，都需要使用其他方式来保证原子性，如<code>synchronized</code>或者<code>concurrent包</code>。</p><h3 id="_6-1-场景实例1-状态标记" tabindex="-1"><a class="header-anchor" href="#_6-1-场景实例1-状态标记"><span>6.1 场景实例1：状态标记</span></a></h3><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">volatile</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> boolean</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> flag </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">while</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!</span><span style="color:#E06C75;--shiki-dark:#E06C75;">flag){</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    doSomething</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> setFlag</span><span style="color:#E06C75;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    flag </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">volatile</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> boolean</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> inited </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//线程1:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">context </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> loadContext</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">inited </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">            </span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//线程2:</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">while</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!</span><span style="color:#E06C75;--shiki-dark:#E06C75;">inited ){</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sleep</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">doSomethingwithconfig</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(context)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h3 id="_6-2-单例模式双层校验锁" tabindex="-1"><a class="header-anchor" href="#_6-2-单例模式双层校验锁"><span>6.2 单例模式双层校验锁</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Singleton</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> volatile</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Singleton</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> instance </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">     </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Singleton</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">     </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Singleton</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getInstance</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(instance</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;">null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            synchronized</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Singleton</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(instance</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;">null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                    instance </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Singleton</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> instance;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-volatile和原子性的例子" tabindex="-1"><a class="header-anchor" href="#_7-volatile和原子性的例子"><span>7. volatile和原子性的例子</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Test</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> volatile</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> inc </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> increase</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        inc++;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        final</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Test</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> test</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Test</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        for</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> i</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;i</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#D19A66;--shiki-dark:#D19A66;">10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;i++){</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> run</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                    for</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> j</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;j</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1000</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;j++)</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                        test</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">increase</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                };</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            }.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">start</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        while</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">activeCount</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)  </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//保证前面的线程都执行完</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">yield</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">test</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">inc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码比较简单，就是创建10个线程，然后分别执行1000次<code>i++</code>操作。正常情况下，程序的输出结果应该是10000，但是，多次执行的结果都小于10000。这其实就是<code>volatile</code>无法满足原子性的原因。</p><p>为什么会出现这种情况呢，那就是<strong>因为虽然volatile可以保证<code>inc</code>在多个线程之间的可见性。但是无法<code>inc++</code>的原子性</strong>。</p><h2 id="_8-总结" tabindex="-1"><a class="header-anchor" href="#_8-总结"><span>8. 总结</span></a></h2><p><code>synchronized</code>可以保证原子性、有序性和可见性。而<code>volatile</code>却只能保证有序性和可见性</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://juejin.cn/post/6844903656274264078" target="_blank" rel="noopener noreferrer">深入理解Java中的volatile关键字</a></p>`,67)]))}const t=a(e,[["render",o],["__file","java-thread-x-key-volatile.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-x-key-volatile.html","title":"关键字: volatile","lang":"zh-CN","frontmatter":{"aliases":"关键字: volatile","tags":null,"cssclass":null,"source":null,"order":120,"category":["Java","并发"],"created":"2024-02-22 10:48","updated":"2024-03-11 16:23","description":"关键字: volatile Java语言为了解决并发编程中存在的原子性、可见性和有序性问题，提供了一系列和并发处理相关的关键字，比如synchronized、volatile、final、concurren包等 1. 简介 volatile通常被比喻成\\"轻量级的synchronized\\"，也是Java并发编程中比较重要的一个关键字。和synchroni...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-x-key-volatile.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"关键字: volatile"}],["meta",{"property":"og:description","content":"关键字: volatile Java语言为了解决并发编程中存在的原子性、可见性和有序性问题，提供了一系列和并发处理相关的关键字，比如synchronized、volatile、final、concurren包等 1. 简介 volatile通常被比喻成\\"轻量级的synchronized\\"，也是Java并发编程中比较重要的一个关键字。和synchroni..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"关键字: volatile\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 作用","slug":"_1-1-作用","link":"#_1-1-作用","children":[]}]},{"level":2,"title":"2. 用法","slug":"_2-用法","link":"#_2-用法","children":[]},{"level":2,"title":"3. volatile的原理","slug":"_3-volatile的原理","link":"#_3-volatile的原理","children":[{"level":3,"title":"3.1 缓存一致性协议","slug":"_3-1-缓存一致性协议","link":"#_3-1-缓存一致性协议","children":[]},{"level":3,"title":"3.2 原理总结","slug":"_3-2-原理总结","link":"#_3-2-原理总结","children":[]}]},{"level":2,"title":"4. volatile 与并发问题","slug":"_4-volatile-与并发问题","link":"#_4-volatile-与并发问题","children":[{"level":3,"title":"4.1 volatile与可见性","slug":"_4-1-volatile与可见性","link":"#_4-1-volatile与可见性","children":[]},{"level":3,"title":"4.2 volatile与有序性","slug":"_4-2-volatile与有序性","link":"#_4-2-volatile与有序性","children":[]},{"level":3,"title":"4.3 volatile与原子性","slug":"_4-3-volatile与原子性","link":"#_4-3-volatile与原子性","children":[]}]},{"level":2,"title":"5. volatile的原理和实现机制","slug":"_5-volatile的原理和实现机制","link":"#_5-volatile的原理和实现机制","children":[]},{"level":2,"title":"6. volatile 使用场景","slug":"_6-volatile-使用场景","link":"#_6-volatile-使用场景","children":[{"level":3,"title":"6.1 场景实例1：状态标记","slug":"_6-1-场景实例1-状态标记","link":"#_6-1-场景实例1-状态标记","children":[]},{"level":3,"title":"6.2 单例模式双层校验锁","slug":"_6-2-单例模式双层校验锁","link":"#_6-2-单例模式双层校验锁","children":[]}]},{"level":2,"title":"7. volatile和原子性的例子","slug":"_7-volatile和原子性的例子","link":"#_7-volatile和原子性的例子","children":[]},{"level":2,"title":"8. 总结","slug":"_8-总结","link":"#_8-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":7.62,"words":2285},"filePathRelative":"posts/Java/Java多线程/java-thread-x-key-volatile.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>Java语言为了解决并发编程中存在的原子性、可见性和有序性问题，提供了一系列和并发处理相关的关键字，比如<code>synchronized</code>、<code>volatile</code>、<code>final</code>、<code>concurren包</code>等</p>\\n</blockquote>\\n<h2>1. 简介</h2>\\n<p><code>volatile</code>通常被比喻成\\"轻量级的<code>synchronized</code>\\"，也是Java并发编程中比较重要的一个关键字。和<code>synchronized</code>不同，<code>volatile</code>是一个变量修饰符，只能用来修饰变量。无法修饰方法及代码块等。</p>","autoDesc":true}');export{t as comp,c as data};
