import{_ as e,c as s,a as n,o as t}from"./app-mWs04Xnh.js";const r={};function i(o,a){return t(),s("div",null,a[0]||(a[0]=[n(`<h1 id="对象已经死亡" tabindex="-1"><a class="header-anchor" href="#对象已经死亡"><span>对象已经死亡？</span></a></h1><p>堆中几乎放着所有的对象实例，对堆垃圾回收前的第一步就是判断哪些对象已经死亡（即不能再被任何途径使用的对象）。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120959800.png" alt="image-20190925214601299" tabindex="0" loading="lazy"><figcaption>image-20190925214601299</figcaption></figure><h2 id="_1-如何判断对象已经死亡" tabindex="-1"><a class="header-anchor" href="#_1-如何判断对象已经死亡"><span>1. 如何判断对象已经死亡</span></a></h2><h3 id="_1-1-引用计数法" tabindex="-1"><a class="header-anchor" href="#_1-1-引用计数法"><span>1.1 引用计数法</span></a></h3><p><strong>给对象中添加一个引用计数器，每当有一个地方引用他。计数器就+1，当引用失效，计数器就减1.任何时候计数器为0 的对象就是不可能再被使用的</strong></p><p><strong>这个方法实现简单，效率高，但是目前主流的虚拟机中并没有选择这个算法来管理内存，其最主要的原因是它很难解决对象之间相互循环引用的问题</strong></p><p>所谓对象之间的相互引用问题，如下面代码所示：除了对象 objA 和 objB 相互引用着对方之外，这两个对象之间再无任何引用。但是他们因为互相引用对方，导致它们的引用计数器都不为 0，于是引用计数算法无法通知 GC 回收器回收他们。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ReferenceCountingGc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> instance </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		ReferenceCountingGc</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> objA</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> ReferenceCountingGc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		ReferenceCountingGc</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> objB</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> ReferenceCountingGc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		objA</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">instance</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> objB;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		objB</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">instance</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> objA;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		objA </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		objB </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="_1-2-可达性分析算法" tabindex="-1"><a class="header-anchor" href="#_1-2-可达性分析算法"><span>1.2 可达性分析算法</span></a></h3><p>这个算法的基本思想就是通过一系列的称为 <strong>“GC Roots”</strong> 的对象作为起点，从这些节点开始向下搜索，节点所走过的路径称为引用链，当一个对象到 GC Roots 没有任何引用链相连的话，则证明此对象是不可用的。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120959849.png" alt="image-20190925215155911" tabindex="0" loading="lazy"><figcaption>image-20190925215155911</figcaption></figure><h2 id="_2-再谈引用" tabindex="-1"><a class="header-anchor" href="#_2-再谈引用"><span>2 再谈引用</span></a></h2><p>无论是通过引用计数法判断对象引用数量，还是通过可达性分析法判断对象的引用链是否可达，判定对象的存活都与“引用”有关。</p><p>JDK1.2 之前，Java 中引用的定义很传统：如果 reference 类型的数据存储的数值代表的是另一块内存的起始地址，就称这块内存代表一个引用。</p><p>JDK1.2 以后，Java 对引用的概念进行了扩充，将引用分为强引用、软引用、弱引用、虚引用四种（引用强度逐渐减弱）</p><h3 id="_2-1-强引用" tabindex="-1"><a class="header-anchor" href="#_2-1-强引用"><span><strong>2.1．强引用</strong></span></a></h3><p>以前我们使用的大部分引用实际上都是强引用，这是使用最普遍的引用。如果一个对象具有强引用，那就类似于必不可少的生活用品，垃圾回收器绝不会回收它。<strong>当内存空间不足，Java 虚拟机宁愿抛出 OutOfMemoryError</strong> 错误，使程序异常终止，也不会靠随意回收具有强引用的对象来解决内存不足问题。</p><h3 id="_2-2-软引用-softreference" tabindex="-1"><a class="header-anchor" href="#_2-2-软引用-softreference"><span>2.2 软引用（SoftReference）</span></a></h3><p>如果一个对象只具有软引用，那就类似于<strong>可有可无的生活用品</strong>。如果内存空间足够，垃圾回收器就不会回收它，如果<strong>内存空间不足了，就会回收这些对象的内存</strong>。只要垃圾回收器没有回收它，该对象就可以被程序使用。软引用可用来实现内存敏感的高速缓存。</p><p>软引用可以和一个引用队列（ReferenceQueue）联合使用，如果软引用所引用的对象被垃圾回收，JAVA 虚拟机就会把这个软引用加入到与之关联的引用队列中。</p><h3 id="_2-3-弱引用-weakreference" tabindex="-1"><a class="header-anchor" href="#_2-3-弱引用-weakreference"><span><strong>2.3 弱引用（WeakReference）</strong></span></a></h3><p>如果一个对象只具有弱引用，那就类似于<strong>可有可无的生活用品</strong>。弱引用与软引用的区别在于：只具有弱引用的对象拥有更短暂的生命周期。<strong>在垃圾回收器线程扫描它所管辖的内存区域的过程中，一旦发现了只具有弱引用的对象，不管当前内存空间足够与否，都会回收它的内存</strong>。不过，由于垃圾回收器是一个优先级很低的线程， 因此不一定会很快发现那些只具有弱引用的对象。</p><p>弱引用可以和一个引用队列（ReferenceQueue）联合使用，如果弱引用所引用的对象被垃圾回收，Java 虚拟机就会把这个弱引用加入到与之关联的引用队列中。</p><h3 id="_2-4-虚引用-phantomreference" tabindex="-1"><a class="header-anchor" href="#_2-4-虚引用-phantomreference"><span><strong>2.4 虚引用（PhantomReference）</strong></span></a></h3><p>&quot;虚引用&quot;顾名思义，就是形同虚设，与其他几种引用都不同，虚引用并不会决定对象的生命周期。如果一个对象仅持有虚引用，那么它就和没有任何引用一样，在任何时候都可能被垃圾回收。</p><p><strong>虚引用主要用来跟踪对象被垃圾回收的活动</strong>。</p><p><strong>虚引用与软引用和弱引用的一个区别在于：</strong> 虚引用必须和引用队列（ReferenceQueue）联合使用。当垃圾回收器准备回收一个对象时，如果发现它还有虚引用，就会在回收对象的内存之前，把这个虚引用加入到与之关联的引用队列中。程序可以通过判断引用队列中是否已经加入了虚引用，来了解被引用的对象是否将要被垃圾回收。程序如果发现某个虚引用已经被加入到引用队列，那么就可以在所引用的对象的内存被回收之前采取必要的行动。</p><p>特别注意，在程序设计中一般很少使用弱引用与虚引用，使用软引用的情况较多，这是因为<strong>软引用可以加速 JVM 对垃圾内存的回收速度，可以维护系统的运行安全，防止内存溢出（OutOfMemory）等问题的产生</strong>。</p><h2 id="_3-不可达的对象并非-非死不可" tabindex="-1"><a class="header-anchor" href="#_3-不可达的对象并非-非死不可"><span>3. 不可达的对象并非“非死不可”</span></a></h2><p>即使在可达性分析法中不可达的对象，也并非是“非死不可”的，这时候它们暂时处于“缓刑阶段”，要真正宣告一个对象死亡，至少要经历两次标记过程；可达性分析法中不可达的对象被第一次标记并且进行一次筛选，筛选的条件是此对象是否有必要执行 finalize 方法。当对象没有覆盖 finalize 方法，或 finalize 方法已经被虚拟机调用过时，虚拟机将这两种情况视为没有必要执行。</p><p>被判定为需要执行的对象将会被放在一个队列中进行第二次标记，除非这个对象与引用链上的任何一个对象建立关联，否则就会被真的回收。</p><h2 id="_4-如何判断一个常量是废弃常量" tabindex="-1"><a class="header-anchor" href="#_4-如何判断一个常量是废弃常量"><span>4. 如何判断一个常量是废弃常量</span></a></h2><p>运行时常量池主要回收的是废弃的常量。那么，我们如何判断一个常量是废弃常量呢？</p><p>假如在常量池中存在字符串 &quot;abc&quot;，如果当前没有任何 String 对象引用该字符串常量的话，就说明常量 &quot;abc&quot; 就是废弃常量，如果这时发生内存回收的话而且有必要的话，&quot;abc&quot; 就会被系统清理出常量池。</p><h2 id="_5-如何判断一个类是无用类" tabindex="-1"><a class="header-anchor" href="#_5-如何判断一个类是无用类"><span>5. 如何判断一个类是无用类</span></a></h2><p>方法区主要回收的是无用的类，那么如何判断一个类是无用的类的呢？</p><p>判定一个常量是否是“废弃常量”比较简单，而要判定一个类是否是“无用的类”的条件则相对苛刻许多。类需要同时满足下面 3 个条件才能算是 <strong>“无用的类”</strong> ：</p><ul><li>该类所有的实例都已经被回收，也就是 Java 堆中不存在该类的任何实例。</li><li>加载该类的 ClassLoader 已经被回收。</li><li>该类对应的 java.lang.Class 对象没有在任何地方被引用，无法在任何地方通过反射访问该类的方法。</li></ul><p>虚拟机可以对满足上述 3 个条件的无用类进行回收，这里说的仅仅是“可以”，而并不是和对象一样不使用了就会必然被回收。</p>`,40)]))}const p=e(r,[["render",i],["__file","java-jvm-gc-object-die.html.vue"]]),c=JSON.parse(`{"path":"/posts/Java/JavaJVM/java-jvm-gc-object-die.html","title":"对象已经死亡？","lang":"zh-CN","frontmatter":{"aliases":"对象已经死亡？, '对象已经死亡？'","tags":null,"cssclass":null,"source":null,"category":["Java","JVM"],"created":"2024-02-22 10:47","updated":"2024-03-12 10:03","description":"对象已经死亡？ 堆中几乎放着所有的对象实例，对堆垃圾回收前的第一步就是判断哪些对象已经死亡（即不能再被任何途径使用的对象）。 image-20190925214601299image-20190925214601299 1. 如何判断对象已经死亡 1.1 引用计数法 给对象中添加一个引用计数器，每当有一个地方引用他。计数器就+1，当引用失效，计数器就减...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/JavaJVM/java-jvm-gc-object-die.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"对象已经死亡？"}],["meta",{"property":"og:description","content":"对象已经死亡？ 堆中几乎放着所有的对象实例，对堆垃圾回收前的第一步就是判断哪些对象已经死亡（即不能再被任何途径使用的对象）。 image-20190925214601299image-20190925214601299 1. 如何判断对象已经死亡 1.1 引用计数法 给对象中添加一个引用计数器，每当有一个地方引用他。计数器就+1，当引用失效，计数器就减..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120959800.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"对象已经死亡？\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120959800.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120959849.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 如何判断对象已经死亡","slug":"_1-如何判断对象已经死亡","link":"#_1-如何判断对象已经死亡","children":[{"level":3,"title":"1.1 引用计数法","slug":"_1-1-引用计数法","link":"#_1-1-引用计数法","children":[]},{"level":3,"title":"1.2 可达性分析算法","slug":"_1-2-可达性分析算法","link":"#_1-2-可达性分析算法","children":[]}]},{"level":2,"title":"2 再谈引用","slug":"_2-再谈引用","link":"#_2-再谈引用","children":[{"level":3,"title":"2.1．强引用","slug":"_2-1-强引用","link":"#_2-1-强引用","children":[]},{"level":3,"title":"2.2 软引用（SoftReference）","slug":"_2-2-软引用-softreference","link":"#_2-2-软引用-softreference","children":[]},{"level":3,"title":"2.3 弱引用（WeakReference）","slug":"_2-3-弱引用-weakreference","link":"#_2-3-弱引用-weakreference","children":[]},{"level":3,"title":"2.4 虚引用（PhantomReference）","slug":"_2-4-虚引用-phantomreference","link":"#_2-4-虚引用-phantomreference","children":[]}]},{"level":2,"title":"3. 不可达的对象并非“非死不可”","slug":"_3-不可达的对象并非-非死不可","link":"#_3-不可达的对象并非-非死不可","children":[]},{"level":2,"title":"4. 如何判断一个常量是废弃常量","slug":"_4-如何判断一个常量是废弃常量","link":"#_4-如何判断一个常量是废弃常量","children":[]},{"level":2,"title":"5. 如何判断一个类是无用类","slug":"_5-如何判断一个类是无用类","link":"#_5-如何判断一个类是无用类","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.8,"words":2041},"filePathRelative":"posts/Java/JavaJVM/java-jvm-gc-object-die.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>堆中几乎放着所有的对象实例，对堆垃圾回收前的第一步就是判断哪些对象已经死亡（即不能再被任何途径使用的对象）。</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120959800.png\\" alt=\\"image-20190925214601299\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20190925214601299</figcaption></figure>\\n<h2>1. 如何判断对象已经死亡</h2>\\n<h3>1.1 引用计数法</h3>","autoDesc":true}`);export{p as comp,c as data};
