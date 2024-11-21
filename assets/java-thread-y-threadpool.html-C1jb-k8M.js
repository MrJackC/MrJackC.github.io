import{_ as t,c as a,a as l,o as n}from"./app-CpAF2rca.js";const r={};function o(s,e){return n(),a("div",null,e[0]||(e[0]=[l('<h1 id="线程池" tabindex="-1"><a class="header-anchor" href="#线程池"><span>线程池</span></a></h1><h2 id="_1-为什么要使用线程池" tabindex="-1"><a class="header-anchor" href="#_1-为什么要使用线程池"><span>1. 为什么要使用线程池</span></a></h2><ul><li><strong>降低资源消耗</strong>：通过重复利用已创建的线程降低线程创建和销毁造成的消耗。</li><li><strong>提高响应速度</strong>：当任务到达时，任务可以不需要的等到线程创建就能立即执行。</li><li><strong>提高线程的可管理行性</strong>：线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控。</li></ul><h2 id="_2-实现runnable接口和callable接口的区别" tabindex="-1"><a class="header-anchor" href="#_2-实现runnable接口和callable接口的区别"><span>2. 实现Runnable接口和Callable接口的区别</span></a></h2><p>两者的区别在于 Runnable 接口不会返回结果但是 Callable 接口可以返回结果。</p><blockquote><p><strong>备注：</strong> 工具类<code>Executors</code>可以实现<code>Runnable</code>对象和<code>Callable</code>对象之间的相互转换。（<code>Executors.callable（Runnable task）</code>或<code>Executors.callable（Runnable task，Object resule）</code>）</p></blockquote><h2 id="_3-执行execute-方法和submit-方法的区别是什么呢" tabindex="-1"><a class="header-anchor" href="#_3-执行execute-方法和submit-方法的区别是什么呢"><span>3. 执行execute()方法和submit()方法的区别是什么呢？</span></a></h2><p>1)<strong>execute() 方法用于提交不需要返回值的任务，所以无法判断任务是否被线程池执行成功与否；</strong></p><p>2)<strong>submit() 方法用于提交需要返回值的任务。线程池会返回一个Future类型的对象，通过这个Future对象可以判断任务是否执行成功</strong>，并且可以通过future的get()方法来获取返回值，get()方法会阻塞当前线程直到任务完成，而使用 <code>get（long timeout，TimeUnit unit）</code>方法则会阻塞当前线程一段时间后立即返回，这时候有可能任务没有执行完。</p><h2 id="_4-如何创建线程池" tabindex="-1"><a class="header-anchor" href="#_4-如何创建线程池"><span>4. 如何创建线程池</span></a></h2><p>《阿里巴巴Java开发手册》中强制线程池不允许使用 Executors 去创建，而是通过 ThreadPoolExecutor 的方式，这样的处理方式让写的同学更加明确线程池的运行规则，规避资源耗尽的风险</p><blockquote><p>Executors 返回线程池对象的弊端如下：</p><ul><li><strong>FixedThreadPool 和 SingleThreadExecutor</strong> ： 允许<strong>请求的队列</strong>长度为 Integer.MAX_VALUE ，可能堆积大量的请求，从而导致OOM。 <ul><li>请求队列（LinkedBlockingQueue）不是指默认是 Integer.MAX_VALUE</li></ul></li><li><strong>CachedThreadPool 和 ScheduledThreadPool</strong> ： 允许创建的线程数量为 Integer.MAX_VALUE ，可能会创建大量线程，从而导致OOM。 <ul><li>他们默认最大线程都是MAX</li></ul></li></ul></blockquote><p><strong>方式一：通过构造方法实现</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120854750.png" alt="image-20190915224722981" tabindex="0" loading="lazy"><figcaption>image-20190915224722981</figcaption></figure><p><strong>方式二：通过Executor 框架的工具类Executors来实现</strong> 我们可以创建三种类型的ThreadPoolExecutor：</p><ul><li><strong>FixedThreadPool</strong> ： 该方法返回一个固定线程数量的线程池。该线程池中的线程数量始终不变。当有一个新的任务提交时，线程池中若有空闲线程，则立即执行。若没有，则新的任务会被暂存在一个任务队列中，待有线程空闲时，便处理在任务队列中的任务。</li><li><strong>SingleThreadExecutor：</strong> 方法返回一个只有一个线程的线程池。若多余一个任务被提交到该线程池，任务会被保存在一个任务队列中，待线程空闲，按先入先出的顺序执行队列中的任务。</li><li><strong>CachedThreadPool：</strong> 该方法返回一个可根据实际情况调整线程数量的线程池。线程池的线程数量不确定，但若有空闲线程可以复用，则会优先使用可复用的线程。若所有线程均在工作，又有新的任务提交，则会创建新的线程处理任务。所有线程在当前任务执行完毕后，将返回线程池进行复用。</li></ul><p>对应Executors工具类中的方法如图所示：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120854802.png" alt="image-20190915224747235" tabindex="0" loading="lazy"><figcaption>image-20190915224747235</figcaption></figure><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2>',19)]))}const c=t(r,[["render",o],["__file","java-thread-y-threadpool.html.vue"]]),d=JSON.parse('{"path":"/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-threadpool.html","title":"线程池","lang":"zh-CN","frontmatter":{"aliases":"线程池","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:48","updated":"2024-03-12 08:56","description":"线程池 1. 为什么要使用线程池 降低资源消耗：通过重复利用已创建的线程降低线程创建和销毁造成的消耗。 提高响应速度：当任务到达时，任务可以不需要的等到线程创建就能立即执行。 提高线程的可管理行性：线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控。 2. 实现Runnable接口和Ca...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-threadpool.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"线程池"}],["meta",{"property":"og:description","content":"线程池 1. 为什么要使用线程池 降低资源消耗：通过重复利用已创建的线程降低线程创建和销毁造成的消耗。 提高响应速度：当任务到达时，任务可以不需要的等到线程创建就能立即执行。 提高线程的可管理行性：线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控。 2. 实现Runnable接口和Ca..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120854750.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线程池\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120854750.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120854802.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 为什么要使用线程池","slug":"_1-为什么要使用线程池","link":"#_1-为什么要使用线程池","children":[]},{"level":2,"title":"2. 实现Runnable接口和Callable接口的区别","slug":"_2-实现runnable接口和callable接口的区别","link":"#_2-实现runnable接口和callable接口的区别","children":[]},{"level":2,"title":"3. 执行execute()方法和submit()方法的区别是什么呢？","slug":"_3-执行execute-方法和submit-方法的区别是什么呢","link":"#_3-执行execute-方法和submit-方法的区别是什么呢","children":[]},{"level":2,"title":"4. 如何创建线程池","slug":"_4-如何创建线程池","link":"#_4-如何创建线程池","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.03,"words":910},"filePathRelative":"posts/Java/Java多线程/java-thread-y-threadpool.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 为什么要使用线程池</h2>\\n<ul>\\n<li><strong>降低资源消耗</strong>：通过重复利用已创建的线程降低线程创建和销毁造成的消耗。</li>\\n<li><strong>提高响应速度</strong>：当任务到达时，任务可以不需要的等到线程创建就能立即执行。</li>\\n<li><strong>提高线程的可管理行性</strong>：线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控。</li>\\n</ul>\\n<h2>2. 实现Runnable接口和Callable接口的区别</h2>\\n<p>两者的区别在于 Runnable 接口不会返回结果但是 Callable 接口可以返回结果。</p>","autoDesc":true}');export{c as comp,d as data};
