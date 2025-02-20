import{_ as a,c as n,a as i,o as l}from"./app-4x2aIoqi.js";const r={};function p(e,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="arraylist-的扩容机制" tabindex="-1"><a class="header-anchor" href="#arraylist-的扩容机制"><span>ArrayList 的扩容机制</span></a></h1><h2 id="_1-如何实现扩容" tabindex="-1"><a class="header-anchor" href="#_1-如何实现扩容"><span>1.如何实现扩容</span></a></h2><p>底层主要是这三个私有方法配合实现<code>grow()</code>,<code>grow(int minCapacity)</code>,<code>newCapacity(int minCapacity)</code>扩容。<strong>最终是调用了<code>Arrays.copyOf</code>方法来进行扩充数组容量的</strong>。默认情况下，新的容量是<strong>原容量的1.5倍</strong>。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 扩容一个</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;">[] </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grow</span><span style="color:#E06C75;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	return</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> grow</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(size </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 保证扩容到期望容量minCapacity及以上</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;">[] </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grow</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> minCapacity) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> elementData </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Arrays</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">copyOf</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(elementData,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">                                       newCapacity</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(minCapacity));</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 根据期望容量minCapacity计算实际需要扩容的容量</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> newCapacity</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> minCapacity) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // overflow-conscious code</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> oldCapacity </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> elementData</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">length</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 得到旧容量</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> newCapacity </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> oldCapacity </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (oldCapacity </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&gt;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 设置新容量为旧容量的1.5倍</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (newCapacity </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> minCapacity </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) { </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 如果新容量仍然小于期望容量</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (elementData </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> DEFAULTCAPACITY_EMPTY_ELEMENTDATA) </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 如果是使用的默认容量</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            return</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Math</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">max</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(DEFAULT_CAPACITY, minCapacity);</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 取默认容量和期望容量较大值返回</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (minCapacity </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// overflow // 检查期望容量是否越界（int 的范围）</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            throw</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> OutOfMemoryError</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> minCapacity</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 返回期望容量</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 如果新容量大于期望容量，判断一下新容量是否越界</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (newCapacity </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> MAX_ARRAY_SIZE</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> &lt;=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        ?</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> newCapacity</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        :</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> hugeCapacity</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(minCapacity)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-手动扩容" tabindex="-1"><a class="header-anchor" href="#_2-手动扩容"><span>2. 手动扩容</span></a></h2><p>grow方法主要用于实现自动扩容的，而用户也可以通过调用以下方法实现手动扩容：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> ensureCapacity</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> minCapacity) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (minCapacity </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> elementData</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">length</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">        &amp;&amp;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> !</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(elementData </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> DEFAULTCAPACITY_EMPTY_ELEMENTDATA</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">             &amp;&amp;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> minCapacity </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> DEFAULT_CAPACITY)) {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        modCount</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">++;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        grow</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(minCapacity)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><p>为什么需要手动扩容？试想一下，如果用户已经知道即将存入大量的元素，比如目前有20个元素，即将存入2000个。那这个时候使用自动扩容就会扩容多次。而手动扩容可以一次性扩容到2000，可以提高性能。</p>`,8)]))}const t=a(r,[["render",p],["__file","arraylist-expansion.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E9%9B%86%E5%90%88/arraylist-expansion.html","title":"ArrayList 的扩容机制","lang":"zh-CN","frontmatter":{"aliases":"ArrayList 的扩容机制","tags":null,"cssclass":null,"source":null,"order":930,"category":["Java"],"created":"2024-02-22 10:47","updated":"2024-05-17 10:29","description":"ArrayList 的扩容机制 1.如何实现扩容 底层主要是这三个私有方法配合实现grow(),grow(int minCapacity),newCapacity(int minCapacity)扩容。最终是调用了Arrays.copyOf方法来进行扩充数组容量的。默认情况下，新的容量是原容量的1.5倍。 2. 手动扩容 grow方法主要用于实现自动扩...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E9%9B%86%E5%90%88/arraylist-expansion.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"ArrayList 的扩容机制"}],["meta",{"property":"og:description","content":"ArrayList 的扩容机制 1.如何实现扩容 底层主要是这三个私有方法配合实现grow(),grow(int minCapacity),newCapacity(int minCapacity)扩容。最终是调用了Arrays.copyOf方法来进行扩充数组容量的。默认情况下，新的容量是原容量的1.5倍。 2. 手动扩容 grow方法主要用于实现自动扩..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ArrayList 的扩容机制\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1.如何实现扩容","slug":"_1-如何实现扩容","link":"#_1-如何实现扩容","children":[]},{"level":2,"title":"2. 手动扩容","slug":"_2-手动扩容","link":"#_2-手动扩容","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.48,"words":443},"filePathRelative":"posts/Java/Java集合/arraylist-expansion.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1.如何实现扩容</h2>\\n<p>底层主要是这三个私有方法配合实现<code>grow()</code>,<code>grow(int minCapacity)</code>,<code>newCapacity(int minCapacity)</code>扩容。<strong>最终是调用了<code>Arrays.copyOf</code>方法来进行扩充数组容量的</strong>。默认情况下，新的容量是<strong>原容量的1.5倍</strong>。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// 扩容一个</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">private</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> Object</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">[] </span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">grow</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">() {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">\\treturn</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> grow</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">(size </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">+</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> 1</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">)</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// 保证扩容到期望容量minCapacity及以上</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">private</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> Object</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">[] </span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">grow</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">(</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">int</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> minCapacity) {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">    return</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> elementData </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> Arrays</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">copyOf</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(elementData,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">                                       newCapacity</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(minCapacity));</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// 根据期望容量minCapacity计算实际需要扩容的容量</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">private</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> int</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> newCapacity</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">(</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">int</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> minCapacity) {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    // overflow-conscious code</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">    int</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> oldCapacity </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> elementData</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">length</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> // 得到旧容量</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">    int</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> newCapacity </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> oldCapacity </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">+</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> (oldCapacity </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&gt;&gt;</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> 1</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">)</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> // 设置新容量为旧容量的1.5倍</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">    if</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> (newCapacity </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">-</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> minCapacity </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&lt;=</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> 0</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">) { </span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// 如果新容量仍然小于期望容量</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">        if</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> (elementData </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">==</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> DEFAULTCAPACITY_EMPTY_ELEMENTDATA) </span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// 如果是使用的默认容量</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">            return</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> Math</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">max</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(DEFAULT_CAPACITY, minCapacity);</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> // 取默认容量和期望容量较大值返回</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">        if</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> (minCapacity </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> 0</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">) </span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// overflow // 检查期望容量是否越界（int 的范围）</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">            throw</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> new</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> OutOfMemoryError</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">()</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">        return</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> minCapacity</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> // 返回期望容量</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    // 如果新容量大于期望容量，判断一下新容量是否越界</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">    return</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> (newCapacity </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">-</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> MAX_ARRAY_SIZE</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> &lt;=</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> 0</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">        ?</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> newCapacity</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">        :</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> hugeCapacity</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">(minCapacity)</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as comp,c as data};
