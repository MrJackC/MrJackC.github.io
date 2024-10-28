import{_ as a,c as n,a as s,o}from"./app-DQS7qcOs.js";const i={};function r(t,e){return o(),n("div",null,e[0]||(e[0]=[s(`<h1 id="executors创建线程池" tabindex="-1"><a class="header-anchor" href="#executors创建线程池"><span>Executors创建线程池</span></a></h1><p>Executors类中提供的几个静态方法来创建线程池：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>Executors.newCachedThreadPool();        //创建一个缓冲池，缓冲池容量大小为Integer.MAX_VALUE</span></span>
<span class="line"><span>Executors.newSingleThreadExecutor();   //创建容量为1的缓冲池</span></span>
<span class="line"><span>Executors.newFixedThreadPool(int);    //创建固定容量大小的缓冲池</span></span></code></pre></div><p>三个静态方法的具体实现</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>public static ExecutorService newFixedThreadPool(int nThreads) {</span></span>
<span class="line"><span>    return new ThreadPoolExecutor(nThreads, nThreads,</span></span>
<span class="line"><span>                                  0L, TimeUnit.MILLISECONDS,</span></span>
<span class="line"><span>                                  new LinkedBlockingQueue&lt;Runnable&gt;());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public static ExecutorService newSingleThreadExecutor() {</span></span>
<span class="line"><span>    return new FinalizableDelegatedExecutorService</span></span>
<span class="line"><span>        (new ThreadPoolExecutor(1, 1,</span></span>
<span class="line"><span>                                0L, TimeUnit.MILLISECONDS,</span></span>
<span class="line"><span>                                new LinkedBlockingQueue&lt;Runnable&gt;()));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public static ExecutorService newCachedThreadPool() {</span></span>
<span class="line"><span>    return new ThreadPoolExecutor(0, Integer.MAX_VALUE,</span></span>
<span class="line"><span>                                  60L, TimeUnit.SECONDS,</span></span>
<span class="line"><span>                                  new SynchronousQueue&lt;Runnable&gt;());</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从它们的具体实现来看，它们实际上也是调用了ThreadPoolExecutor，只不过参数都已配置好了。</p><p>newFixedThreadPool创建的线程池corePoolSize和maximumPoolSize值是相等的，它使用的LinkedBlockingQueue；</p><p>newSingleThreadExecutor将corePoolSize和maximumPoolSize都设置为1，也使用的LinkedBlockingQueue；</p><p>newCachedThreadPool将corePoolSize设置为0，将maximumPoolSize设置为Integer.MAX_VALUE，使用的SynchronousQueue，也就是说来了任务就创建线程运行，当线程空闲超过60秒，就销毁线程。</p>`,9)]))}const c=a(i,[["render",r],["__file","java-thread-y-threadpool-executors-create.html.vue"]]),p=JSON.parse('{"path":"/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-threadpool-executors-create.html","title":"Executors创建线程池","lang":"zh-CN","frontmatter":{"aliases":"Executors创建线程池","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:48","updated":"2024-03-12 08:56","description":"Executors创建线程池 Executors类中提供的几个静态方法来创建线程池： 三个静态方法的具体实现 从它们的具体实现来看，它们实际上也是调用了ThreadPoolExecutor，只不过参数都已配置好了。 newFixedThreadPool创建的线程池corePoolSize和maximumPoolSize值是相等的，它使用的LinkedB...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-threadpool-executors-create.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Executors创建线程池"}],["meta",{"property":"og:description","content":"Executors创建线程池 Executors类中提供的几个静态方法来创建线程池： 三个静态方法的具体实现 从它们的具体实现来看，它们实际上也是调用了ThreadPoolExecutor，只不过参数都已配置好了。 newFixedThreadPool创建的线程池corePoolSize和maximumPoolSize值是相等的，它使用的LinkedB..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Executors创建线程池\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.87,"words":261},"filePathRelative":"posts/Java/Java多线程/java-thread-y-threadpool-executors-create.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>Executors类中提供的几个静态方法来创建线程池：</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>Executors.newCachedThreadPool();        //创建一个缓冲池，缓冲池容量大小为Integer.MAX_VALUE</span></span>\\n<span class=\\"line\\"><span>Executors.newSingleThreadExecutor();   //创建容量为1的缓冲池</span></span>\\n<span class=\\"line\\"><span>Executors.newFixedThreadPool(int);    //创建固定容量大小的缓冲池</span></span></code></pre>\\n</div>","autoDesc":true}');export{c as comp,p as data};
