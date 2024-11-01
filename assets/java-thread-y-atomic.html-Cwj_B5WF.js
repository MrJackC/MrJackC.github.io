import{_ as s,c as n,a as e,o as i}from"./app-tJW29Kmg.js";const l={};function t(o,a){return i(),n("div",null,a[0]||(a[0]=[e(`<h1 id="atomic原子类" tabindex="-1"><a class="header-anchor" href="#atomic原子类"><span>Atomic原子类</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>Java从JDK1.5开始提供了java.util.concurrent.atomic包，<strong>atomic包中的类用于在多线程环境下实现单个变量多个独立操作（比如读-写）的连续原子性。</strong></p><p>并且都比较高效，因为它们都是由基于偏移量（类似于指针）的<strong>非阻塞CAS算法实现，用于替代锁的使用。</strong></p><blockquote><p>无锁的进行原子操作，用于替代锁的使用</p><p>原理：<strong>volatile字段修饰符+CAS算法（Unsafe提供）</strong></p></blockquote><h2 id="_2-juc包中的4类原子类" tabindex="-1"><a class="header-anchor" href="#_2-juc包中的4类原子类"><span>2. JUC包中的4类原子类</span></a></h2><p>并发包 <code>java.util.concurrent</code> 的原子类都存放在<code>java.util.concurrent.atomic</code>下,如下图所示。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120850453.png" alt="image-20190917225827634" tabindex="0" loading="lazy"><figcaption>image-20190917225827634</figcaption></figure><h3 id="_2-1-基本类型" tabindex="-1"><a class="header-anchor" href="#_2-1-基本类型"><span><strong>2.1 基本类型</strong></span></a></h3><p>使用原子的方式更新基本类型</p><ul><li>AtomicInteger：整形原子类</li><li>AtomicLong：长整型原子类</li><li>AtomicBoolean：布尔型原子类</li></ul><h3 id="_2-2-数组类型" tabindex="-1"><a class="header-anchor" href="#_2-2-数组类型"><span><strong>2.2 数组类型</strong></span></a></h3><p>使用原子的方式更新数组里的某个元素</p><ul><li>AtomicIntegerArray：整形数组原子类</li><li>AtomicLongArray：长整形数组原子类</li><li>AtomicReferenceArray：引用类型数组原子类</li></ul><h3 id="_2-3-引用类型" tabindex="-1"><a class="header-anchor" href="#_2-3-引用类型"><span>2.3 <strong>引用类型</strong></span></a></h3><ul><li>AtomicReference：引用类型原子类</li><li>AtomicStampedReference：原子更新引用类型里的字段原子类</li><li>AtomicMarkableReference ：原子更新带有标记位的引用类型</li></ul><h3 id="_2-4-对象的属性修改类型" tabindex="-1"><a class="header-anchor" href="#_2-4-对象的属性修改类型"><span><strong>2.4 对象的属性修改类型</strong></span></a></h3><ul><li>AtomicIntegerFieldUpdater：原子更新整形字段的更新器</li><li>AtomicLongFieldUpdater：原子更新长整形字段的更新器</li><li>AtomicStampedReference：原子更新带有版本号的引用类型。该类将整数值与引用关联起来，可用于解决原子的更新数据和数据的版本号，可以解决使用 CAS 进行原子更新时可能出现的 ABA 问题。</li></ul><h2 id="_3-带版本号的原子类" tabindex="-1"><a class="header-anchor" href="#_3-带版本号的原子类"><span>3. 带版本号的原子类</span></a></h2><p>通过原子的方式更新单个变量的原子类的升级版，Atomic包提供了以下2个类：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>1. AtomicMarkableReference&lt; V &gt;：维护带有标记位的对象引用，可以原子方式对其进行更新。</span></span>
<span class="line"><span>2. AtomicStampedReference&lt; V &gt;：维护带有整数标志的对象引用，可用原子方式对其进行更新。</span></span></code></pre></div><p>上面两个原子类的方法以及原理几乎一致，属于带有版本号的原子类。</p><h3 id="_3-1-为什么需要带版本号-aba问题" tabindex="-1"><a class="header-anchor" href="#_3-1-为什么需要带版本号-aba问题"><span>3.1 为什么需要带版本号？（ABA问题）</span></a></h3><p>我们知道CAS操作的三大问题之一就是“ABA”问题：<strong>CAS在操作值的时候，需要检查预期值有没有发生变化，如果没有发生变化则更新。但是，如果一个线程t1首先获取了预期值A，此时另一个线程t2则将值从A变成了B，随后又变成了A，随后t1再使用CAS进行比较交换的时候，会发现它的预期值“没有变化”，但实际上是变化过的。这就是ABA问题的由来</strong>。</p><h3 id="_3-2-如何解决aba问题" tabindex="-1"><a class="header-anchor" href="#_3-2-如何解决aba问题"><span>3.2 如何解决ABA问题</span></a></h3><p>ABA问题的解决思路就是使用版本号，1A-&gt;2B-&gt;3A，在Atomic包中，提供了一个现成的AtomicStampedReference类来解决ABA问题，使用的就是添加版本号的方法。还有一个AtomicMarkableReference实现类，它比AtomicStampedReference更加简单，AtomicStampedReference中每更新一次数据版本号也会更新一次，这样可以使用版本号统计到底更新了多少次，而AtomicMarkableReference仅仅使用了一个boolean值来表示值是否改变过，因此使用的比较少。</p><h2 id="_4-atomicinteger-的使用" tabindex="-1"><a class="header-anchor" href="#_4-atomicinteger-的使用"><span>4. AtomicInteger 的使用</span></a></h2><p><strong>AtomicInteger 类常用方法</strong></p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> final</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> get</span><span style="color:#E06C75;--shiki-dark:#E06C75;">() </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//获取当前的值</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> final</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getAndSet</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> newValue)</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//获取当前的值，并设置新的值</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> final</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getAndIncrement</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//获取当前的值，并自增</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> final</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getAndDecrement</span><span style="color:#E06C75;--shiki-dark:#E06C75;">() </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//获取当前的值，并自减</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> final</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getAndAdd</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> delta) </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//获取当前的值，并加上预期的值</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">boolean</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> compareAndSet</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> expect</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> update) </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//如果输入的数值等于预期值，则以原子方式将该值设置为输入值（update）</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> final</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> lazySet</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> newValue)</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//最终设置为newValue,使用 lazySet 设置之后可能导致其他线程在之后的一小段时间内还是可以读到旧的值。</span></span></code></pre></div><p><strong>AtomicInteger 类的使用示例</strong></p><p>使用 AtomicInteger 之后，不用对 increment() 方法加锁也可以保证线程安全。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> AtomicIntegerTest</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> AtomicInteger</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> count </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> AtomicInteger</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      //使用AtomicInteger之后，不需要对该方法加锁，也可以实现线程安全。</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> increment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                  count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">incrementAndGet</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">     </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">       public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getCount</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                return</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">get</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="_5-atomicinteger-类的原理" tabindex="-1"><a class="header-anchor" href="#_5-atomicinteger-类的原理"><span>5. AtomicInteger 类的原理</span></a></h2><p>AtomicInteger 类的部分源码：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // setup to use Unsafe.compareAndSwapInt for updates（更新操作时提供“比较并替换”的作用）</span></span>
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
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> volatile</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>AtomicInteger 类主要利用 CAS (compare and swap) + volatile 和 native 方法来保证原子操作，从而避免 synchronized 的高开销，执行效率大为提升。</p><p>CAS的原理是拿期望的值和原本的一个值作比较，如果相同则更新成新的值。UnSafe 类的 objectFieldOffset() 方法是一个本地方法，这个方法是用来拿到“原来的值”的内存地址，返回值是 valueOffset。另外 value 是一个volatile变量，在内存中可见，因此 JVM 可以保证任何时刻任何线程总能拿到该变量的最新值。</p><h2 id="_6-jdk1-8中新增的原子加强类" tabindex="-1"><a class="header-anchor" href="#_6-jdk1-8中新增的原子加强类"><span>6. JDK1.8中新增的原子加强类</span></a></h2><h3 id="_6-1-jdk1-8-新增的原子加强类" tabindex="-1"><a class="header-anchor" href="#_6-1-jdk1-8-新增的原子加强类"><span>6.1 jdk1.8 新增的原子加强类</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>1. LongAdder：long类型的数值累加器，从0开始累加，累加规则为加法运算。</span></span>
<span class="line"><span>2. LongAccumulator：long类型的数值累加器，可从指定值开始累加，可指定累加规则。</span></span>
<span class="line"><span>3. DoubleAdder：double类型的数值累加器，从0开始累加，累加规则为加法运算。</span></span>
<span class="line"><span>4. DoubleAccumulator：double类型的数值累加器，可从指定值开始累加，可指定累加规则。</span></span></code></pre></div><h3 id="_6-2-为什么需要加强" tabindex="-1"><a class="header-anchor" href="#_6-2-为什么需要加强"><span>6.2 为什么需要加强</span></a></h3><p>自从原子类问世之后，<strong>多线程环境下如果用于统计计数操作，一般可以使用AtomicLong来代替锁作为计数器</strong>，AtomicLong 通过CAS 提供了非阻塞的原子性操作，相比使用阻塞算法的同步器来说它的性能己经很好了，那么，它们有什么缺点吗？</p><p>实际上，AtomicLong等其他传统的atomic原子类对于数值的更改，通常都是<strong>在一个无限循环（自旋）中不断尝试CAS 的修改操作，一旦CAS失败则循环重试，这样来保证最终CAS操作成功</strong>。如果竞争不激烈，那么修改成功的概率就很高，但是如果<strong>在高并发下大量线程频繁的竞争修改计数器，会造成一次CAS修改失败的概率就很高</strong>。在大量修改失败时，这些原子操作就会进行多次循环尝试**，白白浪费CPU 资源，因此性能还是会受到影响**。</p><p><strong>JDK1.8新增这些类，正是为了解决高并发环境下由于频繁读写AtomicLong等计数器而可能造成某些线程持续的空转（循环）进而浪费CPU的情况，它们也被称为“累加器”！</strong></p><h2 id="_7-atomic-合适场景" tabindex="-1"><a class="header-anchor" href="#_7-atomic-合适场景"><span>7. atomic 合适场景</span></a></h2><p><strong>单个变量的复合操作（比如读-写）中可以代替锁的来保证操作的原子性和安全性，并且由于没有使用锁而有不错的性能</strong></p><blockquote><p>对于多个变量的复合操作以及一批代码的原子性和安全性却无能为力，此时只能使用锁。</p></blockquote><h2 id="_8-总结" tabindex="-1"><a class="header-anchor" href="#_8-总结"><span>8. 总结</span></a></h2><p>实际上volatile关键字以及Unsafe类提供的CAS的方法就是构成原子类的基石，原子类的方法实际上就是对于Unsafe中的CAS方法的二次包装，方便开发人员使用而已。Unsafe中的CAS方法作为native方法，本身并不是Java语言实现的，它们的源码位于JVM虚拟机的源码中，HotSpot虚拟机的源码中就有这些native方法的具体实现，它们都是采用C++的代码实现的，方便与底层系统交互，在openjdk中可以找到。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/weixin_43767015/article/details/107895944" target="_blank" rel="noopener noreferrer">Java atomic原子操作类的介绍</a></p>`,51)]))}const p=s(l,[["render",t],["__file","java-thread-y-atomic.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-atomic.html","title":"Atomic原子类","lang":"zh-CN","frontmatter":{"aliases":"Atomic原子类","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:48","updated":"2024-03-12 08:50","description":"Atomic原子类 1. 简介 Java从JDK1.5开始提供了java.util.concurrent.atomic包，atomic包中的类用于在多线程环境下实现单个变量多个独立操作（比如读-写）的连续原子性。 并且都比较高效，因为它们都是由基于偏移量（类似于指针）的非阻塞CAS算法实现，用于替代锁的使用。 无锁的进行原子操作，用于替代锁的使用 原理...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-atomic.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Atomic原子类"}],["meta",{"property":"og:description","content":"Atomic原子类 1. 简介 Java从JDK1.5开始提供了java.util.concurrent.atomic包，atomic包中的类用于在多线程环境下实现单个变量多个独立操作（比如读-写）的连续原子性。 并且都比较高效，因为它们都是由基于偏移量（类似于指针）的非阻塞CAS算法实现，用于替代锁的使用。 无锁的进行原子操作，用于替代锁的使用 原理..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120850453.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Atomic原子类\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120850453.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. JUC包中的4类原子类","slug":"_2-juc包中的4类原子类","link":"#_2-juc包中的4类原子类","children":[{"level":3,"title":"2.1 基本类型","slug":"_2-1-基本类型","link":"#_2-1-基本类型","children":[]},{"level":3,"title":"2.2 数组类型","slug":"_2-2-数组类型","link":"#_2-2-数组类型","children":[]},{"level":3,"title":"2.3 引用类型","slug":"_2-3-引用类型","link":"#_2-3-引用类型","children":[]},{"level":3,"title":"2.4 对象的属性修改类型","slug":"_2-4-对象的属性修改类型","link":"#_2-4-对象的属性修改类型","children":[]}]},{"level":2,"title":"3. 带版本号的原子类","slug":"_3-带版本号的原子类","link":"#_3-带版本号的原子类","children":[{"level":3,"title":"3.1 为什么需要带版本号？（ABA问题）","slug":"_3-1-为什么需要带版本号-aba问题","link":"#_3-1-为什么需要带版本号-aba问题","children":[]},{"level":3,"title":"3.2 如何解决ABA问题","slug":"_3-2-如何解决aba问题","link":"#_3-2-如何解决aba问题","children":[]}]},{"level":2,"title":"4. AtomicInteger 的使用","slug":"_4-atomicinteger-的使用","link":"#_4-atomicinteger-的使用","children":[]},{"level":2,"title":"5. AtomicInteger 类的原理","slug":"_5-atomicinteger-类的原理","link":"#_5-atomicinteger-类的原理","children":[]},{"level":2,"title":"6. JDK1.8中新增的原子加强类","slug":"_6-jdk1-8中新增的原子加强类","link":"#_6-jdk1-8中新增的原子加强类","children":[{"level":3,"title":"6.1 jdk1.8 新增的原子加强类","slug":"_6-1-jdk1-8-新增的原子加强类","link":"#_6-1-jdk1-8-新增的原子加强类","children":[]},{"level":3,"title":"6.2 为什么需要加强","slug":"_6-2-为什么需要加强","link":"#_6-2-为什么需要加强","children":[]}]},{"level":2,"title":"7. atomic 合适场景","slug":"_7-atomic-合适场景","link":"#_7-atomic-合适场景","children":[]},{"level":2,"title":"8. 总结","slug":"_8-总结","link":"#_8-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.66,"words":1997},"filePathRelative":"posts/Java/Java多线程/java-thread-y-atomic.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>Java从JDK1.5开始提供了java.util.concurrent.atomic包，<strong>atomic包中的类用于在多线程环境下实现单个变量多个独立操作（比如读-写）的连续原子性。</strong></p>\\n<p>并且都比较高效，因为它们都是由基于偏移量（类似于指针）的<strong>非阻塞CAS算法实现，用于替代锁的使用。</strong></p>\\n<blockquote>\\n<p>无锁的进行原子操作，用于替代锁的使用</p>\\n<p>原理：<strong>volatile字段修饰符+CAS算法（Unsafe提供）</strong></p>\\n</blockquote>","autoDesc":true}');export{p as comp,c as data};
