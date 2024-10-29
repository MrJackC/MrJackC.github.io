import{_ as t,c as i,a as p,o as a}from"./app-DEK5G3U7.js";const n={};function o(r,e){return a(),i("div",null,e[0]||(e[0]=[p('<h1 id="springaop" tabindex="-1"><a class="header-anchor" href="#springaop"><span>SpringAOP</span></a></h1><h2 id="_1-什么是aop" tabindex="-1"><a class="header-anchor" href="#_1-什么是aop"><span>1. 什么是AOP</span></a></h2><p>AOP既面向切面编程，官方定义</p><blockquote><p>面向切面—— Spring提供了面向切面编程的丰富支持，允许通过分离应用的业务逻辑与系统级服务（例如审计（auditing）和事务（transaction）管理）进行内聚性的开发。应用对象只实现它们应该做的——完成业务逻辑——仅此而已。它们并不负责（甚至是意识）其它的系统级关注点，例如日志或事务支持。</p></blockquote><p>AOP可以分离系统的业务逻辑和系统服务(日志，安全等)，这个功能我想是不难明白（原理是使用了<code>代理模式</code>），但关键是为什么要将这两种进行分离呢？或者说这样做有什么好处？</p><h3 id="_1-1-面向切面的好处" tabindex="-1"><a class="header-anchor" href="#_1-1-面向切面的好处"><span>1.1 面向切面的好处</span></a></h3><p>在日常的软件开发中，拿日志来说，一个系统软件的开发都是必须进行日志记录的，不然万一系统出现什么bug，你都不知道是哪里出了问题。举个小栗子，当你开发一个登陆功能，你可能需要在用户登陆前后进行权限校验并将校验信息（<code>用户名</code>,<code>密码</code>,<code>请求登陆时间，ip地址</code>等）记录在日志文件中，当用户登录进来之后，当他访问某个其他功能时，也需要进行合法性校验。想想看，当系统非常地庞大，系统中专门进行权限验证的代码是非常多的，而且非常地散乱，我们就想能不能将这些权限校验、日志记录等非业务逻辑功能的部分独立拆分开，并且在系统运行时需要的地方（<code>连接点</code>）进行动态插入运行，不需要的时候就不理，因此AOP是能够解决这种状况的思想吧！</p><p>下图就很直观地展示这个过程：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231723541.png" alt="image-20191011214543898" tabindex="0" loading="lazy"><figcaption>image-20191011214543898</figcaption></figure><h2 id="_2-aop中的基本概念" tabindex="-1"><a class="header-anchor" href="#_2-aop中的基本概念"><span>2. AOP中的基本概念</span></a></h2><ul><li><p>通知（Adivce）</p><p>通知有5种类型:</p><ul><li><code>Before</code> 在方法被调用之前调用</li><li><code>After</code> 在方法完成后调用通知，无论方法是否执行成功</li><li><code>After-returning</code> 在方法成功执行之后调用通知</li><li><code>After-throwing</code> 在方法抛出异常后调用通知</li><li><code>Around</code> 通知了好、包含了被通知的方法，在被通知的方法调用之前后调用之后执行自定义的行为</li></ul></li><li><p>切点（Pointcut）</p><p>切点在Spring AOP中确实是对应系统中的方法。但是这个方法是定义在切面中的方法，一般和通知一起使用，一起组成了切面。</p></li><li><p>连接点（Join point）</p><p>比如：方法调用、方法执行、字段设置/获取、异常处理执行、类初始化、甚至是 for 循环中的某个点</p><p>理论上, 程序执行过程中的任何时点都可以作为作为织入点, 而所有这些执行时点都是 Joint point</p><p>但 Spring AOP 目前仅支持方法执行 (method execution) 也可以这样理解，连接点就是你准备在系统中执行切点和切入通知的地方（一般是一个方法，一个字段）</p></li><li><p>切面（Aspect）</p><p>切面是切点和通知的集合，一般单独作为一个类。通知和切点共同定义了关于切面的全部内容，它是什么时候，在何时和何处完成功能。</p></li><li><p>引入（Introduction）</p><p>引用允许我们向现有的类添加新的方法或者属性</p></li><li><p>织入（Weaving）</p><p>组装方面来创建一个被通知对象。这可以在编译时完成（例如使用AspectJ编译器），也可以在运行时完成。Spring和其他纯Java AOP框架一样，在运行时完成织入。</p></li></ul><h2 id="_3-spring-中对aop的支持" tabindex="-1"><a class="header-anchor" href="#_3-spring-中对aop的支持"><span>3. Spring 中对AOP的支持</span></a></h2><p>首先AOP思想的实现一般都是基于代理模式，在JAVA中一般采用JDK动态代理模式，但是我们都知道，JDK动态代理模式只能代理接口，如果要代理类那么就不行了</p><p>Spring AOP 同时支持 CGLIB、ASPECTJ、JDK动态代理，当你的真实对象有实现接口时，Spring AOP会默认采用JDK动态代理，否则采用cglib代理。</p><ul><li>如果目标对象的实现类实现了接口，Spring AOP 将会采用 JDK 动态代理来生成 AOP 代理类；</li><li>如果目标对象的实现类没有实现接口，Spring AOP 将会采用 CGLIB 来生成 AOP 代理类——不过这个选择过程对开发者完全透明、开发者也无需关心。</li></ul>',15)]))}const l=t(n,[["render",o],["__file","spring-y-aop-overview.html.vue"]]),s=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-aop-overview.html","title":"SpringAOP","lang":"zh-CN","frontmatter":{"aliases":"SpringAOP","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:50","updated":"2024-10-11 16:46","description":"SpringAOP 1. 什么是AOP AOP既面向切面编程，官方定义 面向切面—— Spring提供了面向切面编程的丰富支持，允许通过分离应用的业务逻辑与系统级服务（例如审计（auditing）和事务（transaction）管理）进行内聚性的开发。应用对象只实现它们应该做的——完成业务逻辑——仅此而已。它们并不负责（甚至是意识）其它的系统级关注点，...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-aop-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"SpringAOP"}],["meta",{"property":"og:description","content":"SpringAOP 1. 什么是AOP AOP既面向切面编程，官方定义 面向切面—— Spring提供了面向切面编程的丰富支持，允许通过分离应用的业务逻辑与系统级服务（例如审计（auditing）和事务（transaction）管理）进行内聚性的开发。应用对象只实现它们应该做的——完成业务逻辑——仅此而已。它们并不负责（甚至是意识）其它的系统级关注点，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231723541.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringAOP\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231723541.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是AOP","slug":"_1-什么是aop","link":"#_1-什么是aop","children":[{"level":3,"title":"1.1 面向切面的好处","slug":"_1-1-面向切面的好处","link":"#_1-1-面向切面的好处","children":[]}]},{"level":2,"title":"2. AOP中的基本概念","slug":"_2-aop中的基本概念","link":"#_2-aop中的基本概念","children":[]},{"level":2,"title":"3. Spring 中对AOP的支持","slug":"_3-spring-中对aop的支持","link":"#_3-spring-中对aop的支持","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.88,"words":1163},"filePathRelative":"posts/Java/Java框架/Spring/spring-y-aop-overview.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 什么是AOP</h2>\\n<p>AOP既面向切面编程，官方定义</p>\\n<blockquote>\\n<p>面向切面—— Spring提供了面向切面编程的丰富支持，允许通过分离应用的业务逻辑与系统级服务（例如审计（auditing）和事务（transaction）管理）进行内聚性的开发。应用对象只实现它们应该做的——完成业务逻辑——仅此而已。它们并不负责（甚至是意识）其它的系统级关注点，例如日志或事务支持。</p>\\n</blockquote>\\n<p>AOP可以分离系统的业务逻辑和系统服务(日志，安全等)，这个功能我想是不难明白（原理是使用了<code>代理模式</code>），但关键是为什么要将这两种进行分离呢？或者说这样做有什么好处？</p>","autoDesc":true}');export{l as comp,s as data};
