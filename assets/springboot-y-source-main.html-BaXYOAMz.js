import{_ as s,c as n,a as i,o as e}from"./app-CZJgH_ea.js";const r={};function o(l,a){return e(),n("div",null,a[0]||(a[0]=[i(`<h1 id="为什么springboot中main方法执行完毕后程序不会直接退出呢" tabindex="-1"><a class="header-anchor" href="#为什么springboot中main方法执行完毕后程序不会直接退出呢"><span>为什么SpringBoot中main方法执行完毕后程序不会直接退出呢</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>正常情况下我们main方法执行结束后，该进程就结束了。那为什么springboot main函数执行完不会退出呢？</p><figure><img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232212356.png" alt="image-20220515222654390" tabindex="0" loading="lazy"><figcaption>image-20220515222654390</figcaption></figure><p>针对这个问题我们可以转化一下思路：一个JVM进程，在什么情况下会正常退出？</p><h2 id="_2-什么情况jvm进程-在什么情况下会正常退出" tabindex="-1"><a class="header-anchor" href="#_2-什么情况jvm进程-在什么情况下会正常退出"><span>2. 什么情况JVM进程，在什么情况下会正常退出？</span></a></h2><h3 id="_2-1-方式1-system-exit-或runtime-exit" tabindex="-1"><a class="header-anchor" href="#_2-1-方式1-system-exit-或runtime-exit"><span>2.1 方式1：System.exit()<code>或</code>Runtime.exit()</span></a></h3><p>使用<code>System.exit()</code>或<code>Runtime.exit()</code>可以直接导致当前JVM进程退出，</p><p>但是仔细想想这个好像跟SpringBoot没啥关系哈</p><h3 id="_2-2-方式2-非daemon进程完全终止" tabindex="-1"><a class="header-anchor" href="#_2-2-方式2-非daemon进程完全终止"><span>2.2 方式2：<strong>非daemon进程完全终止</strong></span></a></h3><p>另外一个可能会导致进程退出的是所有的<strong>非daemon进程完全终止</strong>，那么根据这个条件反推的话是不是说只要保证SpringBoot进程中包含1个以上的daemon进程就可以保证程序不会退出</p><h2 id="_3-springboot是如何实现" tabindex="-1"><a class="header-anchor" href="#_3-springboot是如何实现"><span>3. SpringBoot是如何实现</span></a></h2><p>我们以SpringBoot默认使用的Tomcat容器为例，在我之前SpringBoot源码分析的文章中也提到过，在启动Tomcat的时候，会调用<code>TomcatWebServer</code>的<code>initialize</code>方法，在这个方法中会调用一个<code>startDaemonAwaitThread</code>方法</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> startDaemonAwaitThread</span><span style="color:#E06C75;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Thread</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> awaitThread </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Thread</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;container-&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> containerCounter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">get</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> run</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                TomcatWebServer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">tomcat</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getServer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">await</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        }</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        awaitThread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setContextClassLoader</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getClass</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getClassLoader</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        awaitThread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setDaemon</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        awaitThread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">start</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span></code></pre></div><p>下面我们在深挖一下，在Tomcat的<code>this.tomcat.getServer().await()</code>这个方法中，线程是如何实现不退出的。这里为了阅读方便，去掉了不相关的代码。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> await</span><span style="color:#E06C75;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // ...</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        if</span><span style="color:#E06C75;--shiki-dark:#E06C75;">( port</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==-</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            try</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                awaitThread </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">currentThread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                while</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!</span><span style="color:#E06C75;--shiki-dark:#E06C75;">stopAwait) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                    try</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                        Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sleep</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">( </span><span style="color:#D19A66;--shiki-dark:#D19A66;">10000</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> );</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                    } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#E06C75;--shiki-dark:#E06C75;">( </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">InterruptedException</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> ex</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                        // continue and check the flag</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">finally</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                awaitThread </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // ...</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在await方法中，实际上当前线程在一个while循环中每10秒检查一次 stopAwait这个变量，它是一个volatile类型变量，用于确保被另一个线程修改后，当前线程能够立即看到这个变化。如果没有变化，就会一直处于while循环中。这就是该线程不退出的原因，也就是整个spring-boot应用不退出的原因。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://mp.weixin.qq.com/s?__biz=MzU5MDgzOTYzMw==&amp;mid=2247484897&amp;idx=1&amp;sn=abe1f147fc9e574393523ee0930aba9b&amp;chksm=fe396fdfc94ee6c95a8e428f012e8922a7b8719bea48ea8086680b74265358a2ffb7acde53a4&amp;scene=178&amp;cur_album_id=1344428721251598337#rd" target="_blank" rel="noopener noreferrer">科普：为什么SpringBoot中main方法执行完毕后程序不会直接退出呢</a></p>`,19)]))}const p=s(r,[["render",o],["__file","springboot-y-source-main.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-y-source-main.html","title":"为什么SpringBoot中main方法执行完毕后程序不会直接退出呢","lang":"zh-CN","frontmatter":{"aliases":"为什么SpringBoot中main方法执行完毕后程序不会直接退出呢","tags":null,"cssclass":null,"source":null,"created":"2024-04-23 20:40","updated":"2024-10-11 16:46","description":"为什么SpringBoot中main方法执行完毕后程序不会直接退出呢 1. 简介 正常情况下我们main方法执行结束后，该进程就结束了。那为什么springboot main函数执行完不会退出呢？ image-20220515222654390image-20220515222654390 针对这个问题我们可以转化一下思路：一个JVM进程，在什么情况下...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-y-source-main.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"为什么SpringBoot中main方法执行完毕后程序不会直接退出呢"}],["meta",{"property":"og:description","content":"为什么SpringBoot中main方法执行完毕后程序不会直接退出呢 1. 简介 正常情况下我们main方法执行结束后，该进程就结束了。那为什么springboot main函数执行完不会退出呢？ image-20220515222654390image-20220515222654390 针对这个问题我们可以转化一下思路：一个JVM进程，在什么情况下..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232212356.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-01T03:19:07.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-01T03:19:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"为什么SpringBoot中main方法执行完毕后程序不会直接退出呢\\",\\"image\\":[\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232212356.png\\"],\\"dateModified\\":\\"2024-11-01T03:19:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 什么情况JVM进程，在什么情况下会正常退出？","slug":"_2-什么情况jvm进程-在什么情况下会正常退出","link":"#_2-什么情况jvm进程-在什么情况下会正常退出","children":[{"level":3,"title":"2.1 方式1：System.exit()或Runtime.exit()","slug":"_2-1-方式1-system-exit-或runtime-exit","link":"#_2-1-方式1-system-exit-或runtime-exit","children":[]},{"level":3,"title":"2.2 方式2：非daemon进程完全终止","slug":"_2-2-方式2-非daemon进程完全终止","link":"#_2-2-方式2-非daemon进程完全终止","children":[]}]},{"level":2,"title":"3. SpringBoot是如何实现","slug":"_3-springboot是如何实现","link":"#_3-springboot是如何实现","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1730431147000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":2}]},"readingTime":{"minutes":2.01,"words":603},"filePathRelative":"posts/Java/Java框架/SpringBoot/springboot-y-source-main.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>正常情况下我们main方法执行结束后，该进程就结束了。那为什么springboot main函数执行完不会退出呢？</p>\\n<figure><img src=\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232212356.png\\" alt=\\"image-20220515222654390\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220515222654390</figcaption></figure>\\n<p>针对这个问题我们可以转化一下思路：一个JVM进程，在什么情况下会正常退出？</p>","autoDesc":true}');export{p as comp,c as data};
