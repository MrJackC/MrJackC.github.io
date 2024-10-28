import{_ as a,c as n,a as i,o as l}from"./app-W9QyTiMU.js";const e={};function p(r,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="gc中对象自救" tabindex="-1"><a class="header-anchor" href="#gc中对象自救"><span>GC中对象自救</span></a></h1><p>即使在可达性分析算法中, 被判定为不可达的对象, 也并非是&#39;非死不可&#39; 的, 这时候他们暂处于&#39;缓刑&#39; 阶段, 要真正宣告一个对象死亡, 至少要经历两次标记过程:</p><ol><li>如果<strong>对象失去引用(在进行可达性分析后发现没有与 GC Roots 相连接的引用链), 并且该对象的 finalize()方法未调用过</strong>, 该对象将会被第一次标记</li><li>如果这个对象已经被标记了, 那么这个对象会被放入 ReferenceQueue 队列中, 由 FinalizeThread 线程去执行, 最终会调用该对象的 finalize() 方法. 这里所谓的&#39;执行&#39; 并不会保证 finalize() 方法调用结束,为如果 finalize() 方法执行缓慢, 极端情况下可能会导致 ReferenceQueue 队列中其他的对象永远处于等待, 甚至导致 GC 系统崩溃.</li></ol><p><strong>finalize() 方法是对象逃脱死亡命运的最后一次机会</strong>, 调用 finalize() 方法后,GC 系统将对 ReferenceQueue 队列中的对象进行第二次标记, 如果<strong>对象要在 finalize() 方法中成功自救, 只要重新与引用链建立引用即可, 如:把当前对象( this )赋值给某个类变量或者对象的成员变量</strong>, 那么在第二次标记时它将被移除出 &#39;即将回收&#39; 的集合, 这样该对象就完成了一次自救; <strong>如果该对象被第二次标记, 那就真的要被回收了</strong>.</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> FinalizeEscapeGC</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	// 用于自救的类变量</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> FinalizeEscapeGC</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> SAVA_HOOK</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	protected</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> finalize</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> throws</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Throwable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		super</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">finalize</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;当前对象: &quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> this</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot; 在 &quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">currentThread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot; 线程执行 finalize() 方法&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">		// 把当前对象( this )赋值给某个类变量, 重新与引用链建立引用</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		FinalizeEscapeGC</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">SAVA_HOOK</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> throws</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Throwable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">		// 创建一个对象 FinalizeEscapeGC@3654919e, SAVA_HOOK 引用该对象</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		SAVA_HOOK </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> FinalizeEscapeGC</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;第一次自救&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		SAVA_HOOK </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 失去引用</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">gc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(); </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 运行垃圾回收器</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sleep</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 让 GC 相关线程先走</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">		if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (SAVA_HOOK </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">			System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(SAVA_HOOK </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot; 对象自救成功&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		} </span><span style="color:#C678DD;--shiki-dark:#C678DD;">else</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">			System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;对象已被回收&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\n</span><span style="color:#98C379;--shiki-dark:#98C379;">第二次自救&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		SAVA_HOOK </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 失去引用</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">gc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(); </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 运行垃圾回收器</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sleep</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 让 GC 相关线程先走</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">		if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (SAVA_HOOK </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">			System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(SAVA_HOOK </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot; 对象自救成功&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		} </span><span style="color:#C678DD;--shiki-dark:#C678DD;">else</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">			System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;对象已被回收&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>运行结果:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第一次自救</span></span>
<span class="line"><span>当前对象: FinalizeEscapeGC@3654919e 在 Thread[Finalizer,8,system] 线程执行 finalize() 方法</span></span>
<span class="line"><span>FinalizeEscapeGC@3654919e 对象自救成功</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第二次自救</span></span>
<span class="line"><span>对象已被回收</span></span></code></pre></div><h3 id="为什么第二次自救失败" tabindex="-1"><a class="header-anchor" href="#为什么第二次自救失败"><span>为什么第二次自救失败？</span></a></h3><p><strong>另外一个值得注意的地方是, 代码中两次试图实现自救,</strong></p><p><strong>运行结果却是: 一次自救成功, 一次失败</strong></p><p><strong>这是因为任何对象的 finalize() 方法都只会被调用一次, 如果对象面临下一次 GC, 它的 finalize() 方法不会被再次执行, 因此第二次自救失败了.</strong></p><p>###Finalizer 线程</p><p>Finalizer 线程, 其优先级为 8, 用于在 GC 前, 执行对象的 finalize() 方法</p><p>关于 Finalizer 线程:</p><p>JVM 在 GC 时会将失去引用的对象包装成 java.lang.ref.Finalizer 对象（java.lang.ref.Reference 抽象类的实现），并放入ReferenceQueue，由 Finalizer$FinalizeThread 线程来处理</p>`,15)]))}const B=a(e,[["render",p],["__file","java-jvm-gc-help.html.vue"]]),t=JSON.parse(`{"path":"/posts/Java/JavaJVM/java-jvm-gc-help.html","title":"GC中对象自救","lang":"zh-CN","frontmatter":{"aliases":"GC中对象自救","tags":null,"cssclass":null,"source":null,"category":["Java","JVM"],"created":"2024-02-22 10:47","updated":"2024-03-12 09:58","description":"GC中对象自救 即使在可达性分析算法中, 被判定为不可达的对象, 也并非是'非死不可' 的, 这时候他们暂处于'缓刑' 阶段, 要真正宣告一个对象死亡, 至少要经历两次标记过程: 如果对象失去引用(在进行可达性分析后发现没有与 GC Roots 相连接的引用链), 并且该对象的 finalize()方法未调用过, 该对象将会被第一次标记 如果这个对象已...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/JavaJVM/java-jvm-gc-help.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"GC中对象自救"}],["meta",{"property":"og:description","content":"GC中对象自救 即使在可达性分析算法中, 被判定为不可达的对象, 也并非是'非死不可' 的, 这时候他们暂处于'缓刑' 阶段, 要真正宣告一个对象死亡, 至少要经历两次标记过程: 如果对象失去引用(在进行可达性分析后发现没有与 GC Roots 相连接的引用链), 并且该对象的 finalize()方法未调用过, 该对象将会被第一次标记 如果这个对象已..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GC中对象自救\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":3,"title":"为什么第二次自救失败？","slug":"为什么第二次自救失败","link":"#为什么第二次自救失败","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.77,"words":830},"filePathRelative":"posts/Java/JavaJVM/java-jvm-gc-help.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>即使在可达性分析算法中, 被判定为不可达的对象, 也并非是'非死不可' 的, 这时候他们暂处于'缓刑' 阶段, 要真正宣告一个对象死亡, 至少要经历两次标记过程:</p>\\n<ol>\\n<li>如果<strong>对象失去引用(在进行可达性分析后发现没有与 GC Roots 相连接的引用链), 并且该对象的 finalize()方法未调用过</strong>, 该对象将会被第一次标记</li>\\n<li>如果这个对象已经被标记了, 那么这个对象会被放入 ReferenceQueue 队列中, 由 FinalizeThread 线程去执行, 最终会调用该对象的 finalize() 方法. 这里所谓的'执行' 并不会保证 finalize() 方法调用结束,为如果 finalize() 方法执行缓慢, 极端情况下可能会导致 ReferenceQueue 队列中其他的对象永远处于等待, 甚至导致 GC 系统崩溃.</li>\\n</ol>","autoDesc":true}`);export{B as comp,t as data};
