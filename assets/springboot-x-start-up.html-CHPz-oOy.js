import{_ as a,c as n,a as s,o}from"./app-CpAF2rca.js";const r={};function p(t,i){return o(),n("div",null,i[0]||(i[0]=[s(`<h1 id="springboot进阶-springboot启动过程" tabindex="-1"><a class="header-anchor" href="#springboot进阶-springboot启动过程"><span>SpringBoot进阶 - SpringBoot启动过程</span></a></h1><h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述"><span>1. 概述</span></a></h2><p>SpringBoot 的启动很简单，代码如下：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">SpringBootApplication</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> MyApplication</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        SpringApplication</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">run</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">MyApplication</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, args);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>从代码上可以看出，调用了SpringApplication的静态方法run。这个run 方法会<strong>构造一个SpringApplication的实例</strong>，然后再调用这里实例的<strong>run方法就表示启动SpringBoot</strong>。</p><ol><li>构造一个SpringApplication的实例</li><li>run方法就表示启动SpringBoot</li></ol><figure><img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232148664.png" alt="image-20200321004400020" tabindex="0" loading="lazy"><figcaption>image-20200321004400020</figcaption></figure><h2 id="_2-总结" tabindex="-1"><a class="header-anchor" href="#_2-总结"><span>2. 总结</span></a></h2><p>SpringBoot启动的时候，不论调用什么方法，都会构造一个SpringApplication的实例，然后调用这个实例的run方法，这样就表示启动SpringBoot。</p><h3 id="_2-1-构造一个springapplication的实例" tabindex="-1"><a class="header-anchor" href="#_2-1-构造一个springapplication的实例"><span>2.1 构造一个SpringApplication的实例</span></a></h3><p>在run方法调用之前，也就是<strong>构造SpringApplication的时候会进行初始化的工作</strong>，初始化的时候会做以下几件事：</p><ol><li>把参数sources设置到SpringApplication属性中，这个sources可以是任何类型的参数。本文的例子中这个sources就是MyApplication的class对象</li><li>判断是否是web程序，并设置到webEnvironment这个boolean属性中</li><li>找出所有的初始化器，默认有5个，设置到initializers属性中</li><li>找出所有的应用程序监听器，默认有9个，设置到listeners属性中</li><li>找出运行的主类(main class)</li></ol><figure><img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232148694.png" alt="image-20200321004534266" tabindex="0" loading="lazy"><figcaption>image-20200321004534266</figcaption></figure><h3 id="_2-2-run方法" tabindex="-1"><a class="header-anchor" href="#_2-2-run方法"><span>2.2 run方法</span></a></h3><p>SpringApplication构造完成之后调用run方法，启动SpringApplication，run方法执行的时候会做以下几件事：</p><ol><li>构造一个StopWatch，观察SpringApplication的执行</li><li>找出所有的SpringApplicationRunListener并封装到SpringApplicationRunListeners中，用于监听run方法的执行。监听的过程中会封装成事件并广播出去让初始化过程中产生的应用程序监听器进行监听</li><li>构造Spring容器(ApplicationContext)，并返回 <ol><li>创建Spring容器的判断是否是web环境，是的话构造AnnotationConfigEmbeddedWebApplicationContext，否则构造AnnotationConfigApplicationContext</li><li>初始化过程中产生的初始化器在这个时候开始工作</li><li>Spring容器的刷新(完成bean的解析、各种processor接口的执行、条件注解的解析等等)</li></ol></li><li>从Spring容器中找出ApplicationRunner和CommandLineRunner接口的实现类并排序后依次执行</li></ol><figure><img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232148716.png" alt="image-20200321004718521" tabindex="0" loading="lazy"><figcaption>image-20200321004718521</figcaption></figure><p>run方法的第4步</p><figure><img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232148739.png" alt="image-20200321010602661" tabindex="0" loading="lazy"><figcaption>image-20200321010602661</figcaption></figure><h2 id="面试真题" tabindex="-1"><a class="header-anchor" href="#面试真题"><span>面试真题</span></a></h2><p>你能讲一下SpringBootApplication的启动过程是怎么样子？</p><blockquote><p>SpringBoot启动的时候，会构造一个SpringApplication的实例，然后调用这个实例的run方法。这就表示启动了SpringBoot</p><p>构造SpringApplication实例的时候</p><ol><li>把参数设置到SpringApplication属性</li><li>判断是否是web程序</li><li>找出所有的初始化器</li><li>找出所有的应用程序监听器</li><li>找出运行的主类</li></ol><p>运行run方法</p><ol><li>构造一个StopWatch，观察SpringApplication的执行</li><li>SpringApplicationRunListener 监听run方法的执行</li><li>构造Spring容器(ApplicationContext)，并返回</li><li>从Spring容器中找出ApplicationRunner和CommandLineRunner接口的实现类并排序后依次执行</li></ol></blockquote><p>业务提炼 精简版</p><blockquote><p>springboot 通过根据配置文件自动装配所属依赖的类，再用动态代理的方式注入到Spring容器里面</p></blockquote><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://fangjian0423.github.io/2017/04/30/springboot-startup-analysis/" target="_blank" rel="noopener noreferrer">SpringBoot源码分析之SpringBoot的启动过程</a></p>`,26)]))}const e=a(r,[["render",p],["__file","springboot-x-start-up.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-x-start-up.html","title":"SpringBoot进阶 - SpringBoot启动过程","lang":"zh-CN","frontmatter":{"aliases":"SpringBoot进阶 - SpringBoot启动过程","tags":null,"cssclass":null,"source":null,"order":60,"created":"2024-04-23 20:40","updated":"2024-10-11 16:46","description":"SpringBoot进阶 - SpringBoot启动过程 1. 概述 SpringBoot 的启动很简单，代码如下： 从代码上可以看出，调用了SpringApplication的静态方法run。这个run 方法会构造一个SpringApplication的实例，然后再调用这里实例的run方法就表示启动SpringBoot。 构造一个SpringApp...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-x-start-up.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"SpringBoot进阶 - SpringBoot启动过程"}],["meta",{"property":"og:description","content":"SpringBoot进阶 - SpringBoot启动过程 1. 概述 SpringBoot 的启动很简单，代码如下： 从代码上可以看出，调用了SpringApplication的静态方法run。这个run 方法会构造一个SpringApplication的实例，然后再调用这里实例的run方法就表示启动SpringBoot。 构造一个SpringApp..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232148664.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-01T03:19:07.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-01T03:19:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot进阶 - SpringBoot启动过程\\",\\"image\\":[\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232148664.png\\",\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232148694.png\\",\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232148716.png\\",\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232148739.png\\"],\\"dateModified\\":\\"2024-11-01T03:19:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 概述","slug":"_1-概述","link":"#_1-概述","children":[]},{"level":2,"title":"2. 总结","slug":"_2-总结","link":"#_2-总结","children":[{"level":3,"title":"2.1 构造一个SpringApplication的实例","slug":"_2-1-构造一个springapplication的实例","link":"#_2-1-构造一个springapplication的实例","children":[]},{"level":3,"title":"2.2 run方法","slug":"_2-2-run方法","link":"#_2-2-run方法","children":[]}]},{"level":2,"title":"面试真题","slug":"面试真题","link":"#面试真题","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1730431147000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":2}]},"readingTime":{"minutes":2.76,"words":827},"filePathRelative":"posts/Java/Java框架/SpringBoot/springboot-x-start-up.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 概述</h2>\\n<p>SpringBoot 的启动很简单，代码如下：</p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">@</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">SpringBootApplication</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">public</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> class</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> MyApplication</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">    public</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> static</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> void</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> main</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">String</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">[] </span><span style=\\"color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">args</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">        SpringApplication</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">run</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">MyApplication</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">class</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, args);</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n</div>","autoDesc":true}');export{e as comp,c as data};
