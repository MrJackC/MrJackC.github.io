import{_ as s,c as n,a as i,o as e}from"./app-tJW29Kmg.js";const l={};function o(r,a){return e(),n("div",null,a[0]||(a[0]=[i(`<h1 id="线程池的处理流程" tabindex="-1"><a class="header-anchor" href="#线程池的处理流程"><span>线程池的处理流程</span></a></h1><h2 id="_1-处理流程" tabindex="-1"><a class="header-anchor" href="#_1-处理流程"><span>1. 处理流程</span></a></h2><p>创建线程池需要使用ThreadPoolExecutor 类，他的构造函数参数如下</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> ThreadPoolExecutor</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> corePoolSize</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //核心线程的数量</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                          int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> maximumPoolSize</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //最大线程数量</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                          long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> keepAliveTime</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //超出核心线程数量以外的线程空余存活时间</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                          TimeUnit</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> unit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //存活时间的单位</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                          BlockingQueue</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Runnable</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> workQueue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //保存待执行任务的队列</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                          ThreadFactory</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> threadFactory</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //创建新线程使用的工厂</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                          RejectedExecutionHandler</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> handler </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 当任务无法执行时的处理器</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                          ) {</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">...</span><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><p>参数介绍如注释所示，要了解这些参数左右着什么，就需要了解线程池具体的执行方法<code>ThreadPoolExecutor.execute</code>:</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>public void execute(Runnable command) {</span></span>
<span class="line"><span>    if (command == null)</span></span>
<span class="line"><span>        throw new NullPointerException();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int c = ctl.get();</span></span>
<span class="line"><span>    //1.当前池中线程比核心数少，新建一个线程执行任务</span></span>
<span class="line"><span>    if (workerCountOf(c) &lt; corePoolSize) {   </span></span>
<span class="line"><span>        if (addWorker(command, true))</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        c = ctl.get();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //2.核心池已满，但任务队列未满，添加到队列中</span></span>
<span class="line"><span>    if (isRunning(c) &amp;&amp; workQueue.offer(command)) {   </span></span>
<span class="line"><span>        int recheck = ctl.get();</span></span>
<span class="line"><span>        if (! isRunning(recheck) &amp;&amp; remove(command))    //如果这时被关闭了，拒绝任务</span></span>
<span class="line"><span>            reject(command);</span></span>
<span class="line"><span>        else if (workerCountOf(recheck) == 0)    //如果之前的线程已被销毁完，新建一个线程</span></span>
<span class="line"><span>            addWorker(null, false);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //3.核心池已满，队列已满，试着创建一个新线程</span></span>
<span class="line"><span>    else if (!addWorker(command, false))</span></span>
<span class="line"><span>        reject(command);    //如果创建新线程失败了，说明线程池被关闭或者线程池完全满了，拒绝任务</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>流程图</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120856004.png" alt="image-20200316223656604" tabindex="0" loading="lazy"><figcaption>image-20200316223656604</figcaption></figure><h2 id="_2-构造器的作用" tabindex="-1"><a class="header-anchor" href="#_2-构造器的作用"><span>2. 构造器的作用</span></a></h2><ul><li>corePoolSize：核心线程池数量 <ul><li>在线程数少于核心数量时，有新任务进来就新建一个线程，即使有的线程没事干</li><li>等超出核心数量后，就不会新建线程了，空闲的线程就得去任务队列里取任务执行</li></ul></li><li>maximumPoolSize: 最大线程数量 <ul><li>包含核心线程池数量+核心以为的数量</li><li>如果任务队列满了，并且池中线程数小于最大线程数，会再创建新的线程执行任务</li></ul></li><li><code>keepAliveTime</code>：核心池以外的线程存活时间，即没有任务的外包的存活时间 <ul><li>如果给线程池设置 <code>allowCoreThreadTimeOut(true)</code>，则核心线程在空闲时头上也会响起死亡的倒计时</li><li>如果任务是多而容易执行的，可以调大这个参数，那样线程就可以在存活的时间里有更大可能接受新任务</li></ul></li><li><code>workQueue</code>：保存待执行任务的阻塞队列 <ul><li>ArrayBlockingQueue：基于数组、有界，按 FIFO（先进先出）原则对元素进行排序</li><li>LinkedBlockingQueue：基于链表，按FIFO （先进先出） 排序元素 <ul><li>吞吐量通常要高于 ArrayBlockingQueue</li><li>Executors.newFixedThreadPool() 使用了这个队列</li></ul></li><li>SynchronousQueue：不存储元素的阻塞队列 <ul><li>每个插入操作必须等到另一个线程调用移除操作，否则插入操作一直处于阻塞状态</li><li>吞吐量通常要高于 LinkedBlockingQueue</li><li>Executors.newCachedThreadPool使用了这个队列</li></ul></li><li>PriorityBlockingQueue：具有优先级的、无限阻塞队列</li></ul></li><li><code>threadFactory</code>：每个线程创建的地方 <ul><li>可以给线程起个好听的名字，设置个优先级啥的</li></ul></li><li>handler：饱和策略，大家都很忙，咋办呢，有四种策略 <ul><li>CallerRunsPolicy：只要线程池没关闭，就直接用调用者所在线程来运行任务</li><li>AbortPolicy：直接抛出 RejectedExecutionException 异</li><li>DiscardPolicy：悄悄把任务放生，不做了</li><li>DiscardOldestPolicy：把队列里待最久的那个任务扔了，然后再调用 execute() 试试看能行不</li><li>我们也可以实现自己的 RejectedExecutionHandler 接口自定义策略，比如如记录日志什么的</li></ul></li></ul>`,10)]))}const p=s(l,[["render",o],["__file","java-thread-y-threadpool-handler.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-threadpool-handler.html","title":"线程池的处理流程","lang":"zh-CN","frontmatter":{"aliases":"线程池的处理流程","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:48","updated":"2024-03-12 08:56","description":"线程池的处理流程 1. 处理流程 创建线程池需要使用ThreadPoolExecutor 类，他的构造函数参数如下 参数介绍如注释所示，要了解这些参数左右着什么，就需要了解线程池具体的执行方法ThreadPoolExecutor.execute: 流程图 image-20200316223656604image-20200316223656604 2....","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-threadpool-handler.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"线程池的处理流程"}],["meta",{"property":"og:description","content":"线程池的处理流程 1. 处理流程 创建线程池需要使用ThreadPoolExecutor 类，他的构造函数参数如下 参数介绍如注释所示，要了解这些参数左右着什么，就需要了解线程池具体的执行方法ThreadPoolExecutor.execute: 流程图 image-20200316223656604image-20200316223656604 2...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120856004.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线程池的处理流程\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120856004.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 处理流程","slug":"_1-处理流程","link":"#_1-处理流程","children":[]},{"level":2,"title":"2. 构造器的作用","slug":"_2-构造器的作用","link":"#_2-构造器的作用","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.02,"words":907},"filePathRelative":"posts/Java/Java多线程/java-thread-y-threadpool-handler.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 处理流程</h2>\\n<p>创建线程池需要使用ThreadPoolExecutor 类，他的构造函数参数如下</p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">public</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> ThreadPoolExecutor</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">(</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">int</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> corePoolSize</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    //核心线程的数量</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">                          int</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> maximumPoolSize</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    //最大线程数量</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">                          long</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> keepAliveTime</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    //超出核心线程数量以外的线程空余存活时间</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">                          TimeUnit</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> unit</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    //存活时间的单位</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">                          BlockingQueue</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">Runnable</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&gt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> workQueue</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    //保存待执行任务的队列</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">                          ThreadFactory</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> threadFactory</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    //创建新线程使用的工厂</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">                          RejectedExecutionHandler</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> handler </span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// 当任务无法执行时的处理器</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">                          ) {</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">...</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">}</span></span></code></pre>\\n</div>","autoDesc":true}');export{p as comp,c as data};
