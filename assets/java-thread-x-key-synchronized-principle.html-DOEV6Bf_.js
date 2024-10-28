import{_ as a,c as n,a as i,o as e}from"./app-BQBjlK2G.js";const o={};function l(r,s){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="synchronized的实现原理" tabindex="-1"><a class="header-anchor" href="#synchronized的实现原理"><span>Synchronized的实现原理</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p><code>synchronized</code>，是Java中用于解决并发情况下数据同步访问的一个很重要的关键字。当我们想要保证一个共享资源在同一时间只会被一个线程访问到时，我们可以在代码中使用<code>synchronized</code>关键字对类或者对象加锁。</p><p>那么<code>synchronized</code>关键字的实现原理是什么呢？</p><h2 id="_2-准备工作-反编译" tabindex="-1"><a class="header-anchor" href="#_2-准备工作-反编译"><span>2. 准备工作（反编译）</span></a></h2><h3 id="_2-1-源代码" tabindex="-1"><a class="header-anchor" href="#_2-1-源代码"><span>2.1 源代码</span></a></h3><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> SynchronizedTest</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> synchronized</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> doSth</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Hello World&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> doSth1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        synchronized</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">SynchronizedTest</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Hello World&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="_2-2-编译-javac" tabindex="-1"><a class="header-anchor" href="#_2-2-编译-javac"><span>2.2 编译 javac</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>javac SynchronizedTest.java</span></span></code></pre></div><p>我们可以看到编译出来的class 代码我们是无法直接阅读的二进制文件</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111615529.png" alt="image-20220519170413379" tabindex="0" loading="lazy"><figcaption>image-20220519170413379</figcaption></figure><h3 id="_2-3-反编译javap" tabindex="-1"><a class="header-anchor" href="#_2-3-反编译javap"><span>2.3 反编译javap</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>javap -c SynchronizedTest</span></span></code></pre></div><p>编译出的结果</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Compiled</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> from </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;SynchronizedTest.java&quot;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> SynchronizedTest</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  public</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> SynchronizedTest</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    Code</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       0</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> aload_0</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       1</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> invokespecial #</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  // Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       4</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> return</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> synchronized</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> doSth</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    Code</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       0</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> get</span><span style="color:#C678DD;--shiki-dark:#C678DD;">static</span><span style="color:#E06C75;--shiki-dark:#E06C75;">     #</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  // Field java/lang/System.out:Ljava/io/PrintStream;</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       3</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ldc           #</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  // String Hello World</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       5</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> invokevirtual #</span><span style="color:#D19A66;--shiki-dark:#D19A66;">4</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  // Method java/io/PrintStream.println:(Ljava/lang/String;)V</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       8</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> return</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> doSth1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    Code</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       0</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ldc           #</span><span style="color:#D19A66;--shiki-dark:#D19A66;">5</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  // class SynchronizedTest</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       2</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> dup</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       3</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> astore_1</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       4</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> monitorenter</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       5</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> get</span><span style="color:#C678DD;--shiki-dark:#C678DD;">static</span><span style="color:#E06C75;--shiki-dark:#E06C75;">     #</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  // Field java/lang/System.out:Ljava/io/PrintStream;</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       8</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ldc           #</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  // String Hello World</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      10</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> invokevirtual #</span><span style="color:#D19A66;--shiki-dark:#D19A66;">4</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  // Method java/io/PrintStream.println:(Ljava/lang/String;)V</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      13</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> aload_1</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      14</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> monitorexit</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      15</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> goto</span><span style="color:#D19A66;--shiki-dark:#D19A66;">          23</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      18</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> astore_2</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      19</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> aload_1</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      20</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> monitorexit</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      21</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> aload_2</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      22</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> athrow</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      23</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> return</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    Exception</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> table</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">       from    to  target type</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">           5</span><span style="color:#D19A66;--shiki-dark:#D19A66;">    15</span><span style="color:#D19A66;--shiki-dark:#D19A66;">    18</span><span style="color:#E06C75;--shiki-dark:#E06C75;">   any</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">          18</span><span style="color:#D19A66;--shiki-dark:#D19A66;">    21</span><span style="color:#D19A66;--shiki-dark:#D19A66;">    18</span><span style="color:#E06C75;--shiki-dark:#E06C75;">   any</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-原理" tabindex="-1"><a class="header-anchor" href="#_3-原理"><span>3. 原理</span></a></h2><p>反编译 后，我们可以看到Java编译器为我们生成的字节码。在对于<code>doSth</code>和<code>doSth1</code>的处理上稍有不同。也就是说。<strong>JVM对于同步方法和同步代码块的处理方式不同</strong>。</p><ul><li>同步方法：<strong>JVM采用<code>ACC_SYNCHRONIZED</code>标记符来实现同步</strong></li><li>同步代码块：<strong>JVM采用<code>monitorenter</code>、<code>monitorexit</code>两个指令来实现同步</strong>。</li></ul><h3 id="_3-1-同步方法" tabindex="-1"><a class="header-anchor" href="#_3-1-同步方法"><span>3.1 同步方法</span></a></h3><p><a href="https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html#jvms-2.11.10" target="_blank" rel="noopener noreferrer">The Java® Virtual Machine Specification</a>中有关于方法级同步的介绍：</p><blockquote><p>Method-level synchronization is performed implicitly, as part of method invocation and return. A synchronized method is distinguished in the run-time constant pool’s method_info structure by the ACC_SYNCHRONIZED flag, which is checked by the method invocation instructions. When invoking a method for which ACC_SYNCHRONIZED is set, the executing thread enters a monitor, invokes the method itself, and exits the monitor whether the method invocation completes normally or abruptly. During the time the executing thread owns the monitor, no other thread may enter it. If an exception is thrown during invocation of the synchronized method and the synchronized method does not handle the exception, the monitor for the method is automatically exited before the exception is rethrown out of the synchronized method.</p></blockquote><p>主要说的是： <strong>方法级的同步是隐式的</strong>。</p><ul><li>同步方法的<strong>常量池中会有一个<code>ACC_SYNCHRONIZED</code>标志</strong>。</li><li>当某个线程要访问某个方法的时候，<strong>会检查是否有<code>ACC_SYNCHRONIZED</code>，如果有设置，则需要先获得监视器锁</strong>，然后开始执行方法，<strong>方法执行之后再释放监视器锁</strong>。</li><li>这时如果其他线程来请求执行方法，会因为<strong>无法获得监视器锁而被阻断住</strong>。</li><li>值得注意的是，如果在方法执行过程中，<strong>发生了异常</strong>，并且方法内部并没有处理该异常，那么在异常被抛到方法外面之前监视器<strong>锁会被自动释放</strong>。</li></ul><h3 id="_3-2-同步代码块" tabindex="-1"><a class="header-anchor" href="#_3-2-同步代码块"><span>3.2 同步代码块</span></a></h3><p>同步代码块使用<code>monitorenter</code>和<code>monitorexit</code>两个指令实现。 <a href="https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-6.html" target="_blank" rel="noopener noreferrer">The Java® Virtual Machine Specification</a> 中有关于这两个指令的介绍：</p><h4 id="monitorenter" tabindex="-1"><a class="header-anchor" href="#monitorenter"><span>monitorenter</span></a></h4><blockquote><p>Each object is associated with a monitor. A monitor is locked if and only if it has an owner. The thread that executes monitorenter attempts to gain ownership of the monitor associated with objectref, as follows:</p><blockquote><p>If the entry count of the monitor associated with objectref is zero, the thread enters the monitor and sets its entry count to one. The thread is then the owner of the monitor.</p><p>If the thread already owns the monitor associated with objectref, it reenters the monitor, incrementing its entry count.</p><p>If another thread already owns the monitor associated with objectref, the thread blocks until the monitor’s entry count is zero, then tries again to gain ownership.</p></blockquote></blockquote><h4 id="monitorexit" tabindex="-1"><a class="header-anchor" href="#monitorexit"><span>monitorexit</span></a></h4><blockquote><p>The thread that executes monitorexit must be the owner of the monitor associated with the instance referenced by objectref.</p><p>The thread decrements the entry count of the monitor associated with objectref. If as a result the value of the entry count is zero, the thread exits the monitor and is no longer its owner. Other threads that are blocking to enter the monitor are allowed to attempt to do so.</p></blockquote><p>大致内容如下：</p><ul><li><strong>可以把执行<code>monitorenter</code>指令理解为加锁，执行<code>monitorexit</code>理解为释放锁</strong>。</li><li><strong>每个对象维护着一个记录着被锁次数的计数器</strong>。未被锁定的对象的该计数器为0，<strong>当一个线程获得锁（执行<code>monitorenter</code>）后，该计数器自增变为 1</strong> ，当同一个线程再次获得该对象的锁的时候，计数器再次自增。</li><li>当同一个<strong>线程释放锁（执行<code>monitorexit</code>指令）的时候，计数器再自减</strong>。</li><li>当<strong>计数器为0的时候。锁将被释放，其他线程便可以获得锁</strong>。</li></ul><h3 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结"><span>4. 总结</span></a></h3><ul><li><p>同步方法通过<code>ACC_SYNCHRONIZED</code>关键字隐式的对方法进行加锁。当线程要执行的方法被标注上<code>ACC_SYNCHRONIZED</code>时，需要先获得锁才能执行该方法。</p></li><li><p>同步代码块通过<code>monitorenter</code>和<code>monitorexit</code>执行来进行加锁。当线程执行到<code>monitorenter</code>的时候要先获得所锁，才能执行后面的方法。当线程执行到<code>monitorexit</code>的时候则要释放锁。</p><p><strong>每个对象自身维护这一个被加锁次数的计数器，当计数器数字为0时表示可以被任意线程获得锁。当计数器不为0时，只有获得锁的线程才能再次获得锁。即可重入锁</strong>。</p></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.hollischuang.com/archives/1883" target="_blank" rel="noopener noreferrer">深入理解多线程（一）——Synchronized的实现原理</a></p>`,35)]))}const p=a(o,[["render",l],["__file","java-thread-x-key-synchronized-principle.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-x-key-synchronized-principle.html","title":"Synchronized的实现原理","lang":"zh-CN","frontmatter":{"aliases":"Synchronized的实现原理","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:48","updated":"2024-03-11 16:15","description":"Synchronized的实现原理 1. 简介 synchronized，是Java中用于解决并发情况下数据同步访问的一个很重要的关键字。当我们想要保证一个共享资源在同一时间只会被一个线程访问到时，我们可以在代码中使用synchronized关键字对类或者对象加锁。 那么synchronized关键字的实现原理是什么呢？ 2. 准备工作（反编译） 2....","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-x-key-synchronized-principle.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Synchronized的实现原理"}],["meta",{"property":"og:description","content":"Synchronized的实现原理 1. 简介 synchronized，是Java中用于解决并发情况下数据同步访问的一个很重要的关键字。当我们想要保证一个共享资源在同一时间只会被一个线程访问到时，我们可以在代码中使用synchronized关键字对类或者对象加锁。 那么synchronized关键字的实现原理是什么呢？ 2. 准备工作（反编译） 2...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111615529.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Synchronized的实现原理\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111615529.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 准备工作（反编译）","slug":"_2-准备工作-反编译","link":"#_2-准备工作-反编译","children":[{"level":3,"title":"2.1 源代码","slug":"_2-1-源代码","link":"#_2-1-源代码","children":[]},{"level":3,"title":"2.2 编译 javac","slug":"_2-2-编译-javac","link":"#_2-2-编译-javac","children":[]},{"level":3,"title":"2.3 反编译javap","slug":"_2-3-反编译javap","link":"#_2-3-反编译javap","children":[]}]},{"level":2,"title":"3. 原理","slug":"_3-原理","link":"#_3-原理","children":[{"level":3,"title":"3.1 同步方法","slug":"_3-1-同步方法","link":"#_3-1-同步方法","children":[]},{"level":3,"title":"3.2 同步代码块","slug":"_3-2-同步代码块","link":"#_3-2-同步代码块","children":[]},{"level":3,"title":"4. 总结","slug":"_4-总结","link":"#_4-总结","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.47,"words":1340},"filePathRelative":"posts/Java/Java多线程/java-thread-x-key-synchronized-principle.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p><code>synchronized</code>，是Java中用于解决并发情况下数据同步访问的一个很重要的关键字。当我们想要保证一个共享资源在同一时间只会被一个线程访问到时，我们可以在代码中使用<code>synchronized</code>关键字对类或者对象加锁。</p>\\n<p>那么<code>synchronized</code>关键字的实现原理是什么呢？</p>\\n<h2>2. 准备工作（反编译）</h2>\\n<h3>2.1 源代码</h3>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">public</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> class</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> SynchronizedTest</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">    public</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> synchronized</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> void</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> doSth</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(){</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">        System</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">out</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">println</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"Hello World\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">    public</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> void</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> doSth1</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(){</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">        synchronized</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">SynchronizedTest</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">class</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">){</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">            System</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">out</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">println</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"Hello World\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        }</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n</div>","autoDesc":true}');export{p as comp,c as data};
