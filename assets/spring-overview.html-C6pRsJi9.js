import{_ as n,c as e,a as i,o as t}from"./app-W9QyTiMU.js";const a={};function g(p,r){return t(),e("div",null,r[0]||(r[0]=[i('<h1 id="spring基础-spring和spring框架组成" tabindex="-1"><a class="header-anchor" href="#spring基础-spring和spring框架组成"><span>Spring基础 - Spring和Spring框架组成</span></a></h1><blockquote><p>Spring是什么？它是怎么诞生的？有哪些主要的组件和核心功能呢? 本文通过这几个问题帮助你构筑Spring和Spring Framework的整体认知</p></blockquote><h2 id="_1-什么是spring" tabindex="-1"><a class="header-anchor" href="#_1-什么是spring"><span>1. 什么是Spring</span></a></h2><h3 id="_1-1-概念" tabindex="-1"><a class="header-anchor" href="#_1-1-概念"><span>1.1 概念</span></a></h3><p>Spring 是一种轻量级开发框架，<strong>旨在提高开发人员的开发效率以及系统的可维护性</strong>。</p><p>我们一般说的Spring框架指的都是Spring Framwork，他是很多模块的集合，使用这些模块可以很方便地协助我们进行开发</p><h3 id="_1-2-spring的起源" tabindex="-1"><a class="header-anchor" href="#_1-2-spring的起源"><span>1.2 Spring的起源</span></a></h3><p>要谈Spring的历史，就要先谈J2EE。J2EE应用程序的广泛实现是在1999年和2000年开始的，它的出现带来了诸如事务管理之类的<strong>核心中间层概念的标准化</strong>，但是在实践中并没有获得绝对的成功，因为<strong>开发效率</strong>，开发难度和实际的<strong>性能</strong>都令人失望。</p><p><strong>Spring的一个最大的目的就是使JAVA EE开发更加容易</strong>。</p><h3 id="_1-3-spring的特性和优势" tabindex="-1"><a class="header-anchor" href="#_1-3-spring的特性和优势"><span>1.3 Spring的特性和优势</span></a></h3><blockquote><p>Spring Framework有哪些特性，用了这个框架对开发而言有什么好处呢？</p></blockquote><p>从Spring 框架的<strong>特性</strong>来看：</p><ul><li>非侵入式：基于Spring开发的应用中的对象可以不依赖于Spring的API</li><li>控制反转：IOC——Inversion of Control，指的是将对象的创建权交给 Spring 去创建。使用 Spring 之前，对象的创建都是由我们自己在代码中new创建。而使用 Spring 之后。对象的创建都是给了 Spring 框架。</li><li>依赖注入：DI——Dependency Injection，是指依赖的对象不需要手动调用 setXX 方法去设置，而是通过配置赋值。</li><li>面向切面编程：Aspect Oriented Programming——AOP</li><li>容器：Spring 是一个容器，因为它包含并且管理应用对象的生命周期</li><li>组件化：Spring 实现了使用简单的组件配置组合成一个复杂的应用。在 Spring 中可以使用XML和Java注解组合这些对象。</li><li>一站式：在 IOC 和 AOP 的基础上可以整合各种企业应用的开源框架和优秀的第三方类库（实际上 Spring 自身也提供了表现层的 SpringMVC 和持久层的 Spring JDBC）</li></ul><p>从使用Spring 框架的<strong>好处</strong>看：</p><ul><li>Spring 可以使开发人员使用 POJOs 开发企业级的应用程序。只使用 POJOs 的好处是你不需要一个 EJB 容器产品，比如一个应用程序服务器，但是你可以选择使用一个健壮的 servlet 容器，比如 Tomcat 或者一些商业产品。</li><li>Spring 在一个单元模式中是有组织的。即使包和类的数量非常大，你只要担心你需要的，而其它的就可以忽略了。</li><li>Spring 不会让你白费力气做重复工作，它真正的利用了一些现有的技术，像 ORM 框架、日志框架、JEE、Quartz 和 JDK 计时器，其他视图技术。</li><li>测试一个用 Spring 编写的应用程序很容易，因为环境相关的代码被移动到这个框架中。此外，通过使用 JavaBean-style POJOs，它在使用依赖注入注入测试数据时变得更容易。</li><li>Spring 的 web 框架是一个设计良好的 web MVC 框架，它为比如 Structs 或者其他工程上的或者不怎么受欢迎的 web 框架提供了一个很好的供替代的选择。MVC 模式导致应用程序的不同方面(输入逻辑，业务逻辑和UI逻辑)分离，同时提供这些元素之间的松散耦合。模型(Model)封装了应用程序数据，通常它们将由 POJO 类组成。视图(View)负责渲染模型数据，一般来说它生成客户端浏览器可以解释 HTML 输出。控制器(Controller)负责处理用户请求并构建适当的模型，并将其传递给视图进行渲染。</li><li>Spring 对 JavaEE 开发中非常难用的一些 API（JDBC、JavaMail、远程调用等），都提供了封装，使这些API应用难度大大降低。</li><li>轻量级的 IOC 容器往往是轻量级的，例如，特别是当与 EJB 容器相比的时候。这有利于在内存和 CPU 资源有限的计算机上开发和部署应用程序。</li><li>Spring 提供了一致的事务管理接口，可向下扩展到（使用一个单一的数据库，例如）本地事务并扩展到全局事务（例如，使用 JTA）</li></ul><h2 id="_2-spring有哪些组件" tabindex="-1"><a class="header-anchor" href="#_2-spring有哪些组件"><span>2. Spring有哪些组件?</span></a></h2><blockquote><p>Spring Framework有哪些组件呢？</p></blockquote><p>下图来自，<a href="https://docs.spring.io/spring-framework/docs/5.0.0.M4/spring-framework-reference/pdf/spring-framework-reference.pdf" target="_blank" rel="noopener noreferrer">官方文档 Spring-framework 5.0</a>；需要注意的是，虽然这个图来源于Spring Framwork5.0 M4 版本，但是它依然是V4版本的图，比如Spring 5版本中的web模块已经去掉了<strong>Portlet模块</strong>，新增了<strong>WebFlux模块</strong>等。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622154.png" alt="image-20220709094411825" tabindex="0" loading="lazy"><figcaption>image-20220709094411825</figcaption></figure><p>上图中包含了 Spring 框架的所有模块，这些模块可以满足一切企业级应用开发的需求，在开发过程中可以根据需求有选择性地使用所需要的模块。下面分别对这些模块的作用进行简单介绍（并且结合SpringFramework5.x源码模块帮助你对应好各模块关系）。</p><h3 id="_2-1-core-container-spring的核心容器" tabindex="-1"><a class="header-anchor" href="#_2-1-core-container-spring的核心容器"><span>2.1 Core Container（Spring的核心容器）</span></a></h3><p>Spring 的核心容器是其他模块建立的基础，由 Beans 模块、Core 核心模块、Context 上下文模块和 SpEL 表达式语言模块组成，没有这些核心容器，也不可能有 AOP、Web 等上层的功能。具体介绍如下。</p><ul><li><strong>Beans 模块</strong>：提供了框架的基础部分，包括控制反转和依赖注入。</li><li><strong>Core 核心模块</strong>：封装了 Spring 框架的底层部分，包括资源访问、类型转换及一些常用工具类。</li><li><strong>Context 上下文模块</strong>：建立在 Core 和 Beans 模块的基础之上，集成 Beans 模块功能并添加资源绑定、数据验证、国际化、Java EE 支持、容器生命周期、事件传播等。ApplicationContext 接口是上下文模块的焦点。</li><li><strong>SpEL 模块</strong>：提供了强大的表达式语言支持，支持访问和修改属性值，方法调用，支持访问及修改数组、容器和索引器，命名变量，支持算数和逻辑运算，支持从 Spring 容器获取 Bean，它也支持列表投影、选择和一般的列表聚合等。</li></ul><p>对应的源码模块如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622200.png" alt="image-20220709094925366" tabindex="0" loading="lazy"><figcaption>image-20220709094925366</figcaption></figure><h3 id="_2-2-data-access-integration-数据访问-集成" tabindex="-1"><a class="header-anchor" href="#_2-2-data-access-integration-数据访问-集成"><span>2.2 Data Access/Integration（数据访问／集成）</span></a></h3><p>数据访问／集成层包括 JDBC、ORM、OXM、JMS 和 Transactions 模块，具体介绍如下。</p><ul><li><strong>JDBC 模块</strong>：提供了一个 JBDC 的样例模板，使用这些模板能消除传统冗长的 JDBC 编码还有必须的事务控制，而且能享受到 Spring 管理事务的好处。</li><li><strong>ORM 模块</strong>：提供与流行的“对象-关系”映射框架无缝集成的 API，包括 JPA、JDO、Hibernate 和 MyBatis 等。而且还可以使用 Spring 事务管理，无需额外控制事务。</li><li><strong>OXM 模块</strong>：提供了一个支持 Object /XML 映射的抽象层实现，如 JAXB、Castor、XMLBeans、JiBX 和 XStream。将 Java 对象映射成 XML 数据，或者将XML 数据映射成 Java 对象。</li><li><strong>JMS 模块</strong>：指 Java 消息服务，提供一套 “消息生产者、消息消费者”模板用于更加简单的使用 JMS，JMS 用于用于在两个应用程序之间，或分布式系统中发送消息，进行异步通信。</li><li><strong>Transactions 事务模块</strong>：支持编程和声明式事务管理。</li></ul><p>对应的源码模块如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622228.png" alt="image-20220709095314072" tabindex="0" loading="lazy"><figcaption>image-20220709095314072</figcaption></figure><h3 id="_2-3-web模块" tabindex="-1"><a class="header-anchor" href="#_2-3-web模块"><span>2.3 Web模块</span></a></h3><p>Spring 的 Web 层包括 Web、Servlet、WebSocket 和 Webflux 组件，具体介绍如下。</p><ul><li><strong>Web 模块</strong>：提供了基本的 Web 开发集成特性，例如多文件上传功能、使用的 Servlet 监听器的 IOC 容器初始化以及 Web 应用上下文。</li><li><strong>Servlet 模块</strong>：提供了一个 Spring MVC Web 框架实现。Spring MVC 框架提供了基于注解的请求资源注入、更简单的数据绑定、数据验证等及一套非常易用的 JSP 标签，完全无缝与 Spring 其他技术协作。</li><li><strong>WebSocket 模块</strong>：提供了简单的接口，用户只要实现响应的接口就可以快速的搭建 WebSocket Server，从而实现双向通讯。</li><li><strong>Webflux 模块</strong>： Spring WebFlux 是 Spring Framework 5.x中引入的新的响应式web框架。与Spring MVC不同，它不需要Servlet API，是完全异步且非阻塞的，并且通过Reactor项目实现了Reactive Streams规范。Spring WebFlux 用于创建基于事件循环执行模型的完全异步且非阻塞的应用程序。</li></ul><p>此外Spring4.x中还有Portlet 模块，在Spring 5.x中已经移除</p><ul><li><strong>Portlet 模块</strong>：提供了在 Portlet 环境中使用 MVC 实现，类似 Web-Servlet 模块的功能。</li></ul><p>对应的源码模块如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622263.png" alt="image-20220709095421975" tabindex="0" loading="lazy"><figcaption>image-20220709095421975</figcaption></figure><h3 id="_2-4-aop、aspects、instrumentation和messaging" tabindex="-1"><a class="header-anchor" href="#_2-4-aop、aspects、instrumentation和messaging"><span>2.4 AOP、Aspects、Instrumentation和Messaging</span></a></h3><p>在 Core Container 之上是 AOP、Aspects 等模块，具体介绍如下：</p><ul><li><strong>AOP 模块</strong>：提供了面向切面编程实现，提供比如日志记录、权限控制、性能统计等通用功能和业务逻辑分离的技术，并且能动态的把这些功能添加到需要的代码中，这样各司其职，降低业务逻辑和通用功能的耦合。</li><li><strong>Aspects 模块</strong>：提供与 AspectJ 的集成，是一个功能强大且成熟的面向切面编程（AOP）框架。</li><li><strong>Instrumentation 模块</strong>：提供了类工具的支持和类加载器的实现，可以在特定的应用服务器中使用。</li><li><strong>messaging 模块</strong>：Spring 4.0 以后新增了消息（Spring-messaging）模块，该模块提供了对消息传递体系结构和协议的支持。</li><li><strong>jcl 模块</strong>： Spring 5.x中新增了日志框架集成的模块。</li></ul><p>对应的源码模块如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622307.png" alt="image-20220709102945449" tabindex="0" loading="lazy"><figcaption>image-20220709102945449</figcaption></figure><h3 id="_2-5-test模块" tabindex="-1"><a class="header-anchor" href="#_2-5-test模块"><span>2.5 Test模块</span></a></h3><p>Test 模块：Spring 支持 Junit 和 TestNG 测试框架，而且还额外提供了一些基于 Spring 的测试功能，比如在测试 Web 框架时，模拟 Http 请求的功能。</p><p>包含Mock Objects, TestContext Framework, Spring MVC Test, WebTestClient。</p><p>对应的源码模块如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622341.png" alt="image-20220709103037369" tabindex="0" loading="lazy"><figcaption>image-20220709103037369</figcaption></figure><h2 id="_3-为什么用spring" tabindex="-1"><a class="header-anchor" href="#_3-为什么用spring"><span>3. 为什么用Spring?</span></a></h2><blockquote><p>那么为什么用Spring呢？来看看<a href="https://spring.io/why-spring" target="_blank" rel="noopener noreferrer">官网对这个问题的回答</a></p></blockquote><p>最重要的体现在它能做什么，这是Spring的核心所在</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622370.png" alt="image-20220709103353729" tabindex="0" loading="lazy"><figcaption>image-20220709103353729</figcaption></figure><p>且官方对此专门对此做了详细介绍，感兴趣可以看下</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622398.png" alt="image-20220709103410353" tabindex="0" loading="lazy"><figcaption>image-20220709103410353</figcaption></figure><h2 id="_4-学习spring时参考哪些资料呢" tabindex="-1"><a class="header-anchor" href="#_4-学习spring时参考哪些资料呢"><span>4. 学习Spring时参考哪些资料呢？</span></a></h2><blockquote><p>非常负责任的告诉你，最好最全的资料在Spring的官网，Spring能成为最主要的企业开发框架，文档和生态体系也做的很好；这里介绍下如何获取官方的学习资源。</p></blockquote><h3 id="_4-1-spring-的官方项目和教程" tabindex="-1"><a class="header-anchor" href="#_4-1-spring-的官方项目和教程"><span>4.1 Spring 的官方项目和教程</span></a></h3><p>官方的项目和教程，地址在<a href="https://spring.io/projects/spring-framework" target="_blank" rel="noopener noreferrer">这里</a>，在学习Spring时，一定要把它当做生态体系，而是不是一个简单的开发框架。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622426.png" alt="image-20220709103505374" tabindex="0" loading="lazy"><figcaption>image-20220709103505374</figcaption></figure><h3 id="_4-2-spring-的归档文档" tabindex="-1"><a class="header-anchor" href="#_4-2-spring-的归档文档"><span>4.2 Spring 的归档文档</span></a></h3><p>官方提供了系统性的文档的FTP，你可以在<a href="https://docs.spring.io/spring-framework/docs/" target="_blank" rel="noopener noreferrer">这里 (opens new window)</a>找到所有历史版本的PDF/HTML版本。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622456.png" alt="image-20220709103536540" tabindex="0" loading="lazy"><figcaption>image-20220709103536540</figcaption></figure><p>可以看到很多系统性的文档，包括上面引用的图，</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622495.png" alt="image-20220709103614697" tabindex="0" loading="lazy"><figcaption>image-20220709103614697</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622523.png" alt="image-20220709103625296" tabindex="0" loading="lazy"><figcaption>image-20220709103625296</figcaption></figure><h3 id="_4-3-spring-的官方github" tabindex="-1"><a class="header-anchor" href="#_4-3-spring-的官方github"><span>4.3 Spring 的官方Github</span></a></h3><p>Spring官方的GitHub在<a href="https://github.com/spring-projects/spring-framework" target="_blank" rel="noopener noreferrer">这里 (opens new window)</a>，它包含着Spring-framework的源码，如果你感兴趣，可以从这里clone代码进行阅读。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622553.png" alt="image-20220709103647666" tabindex="0" loading="lazy"><figcaption>image-20220709103647666</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/spring/spring-x-framework-introduce.html" target="_blank" rel="noopener noreferrer"><strong>Spring基础 - Spring和Spring框架组成</strong></a></p>',69)]))}const o=n(a,[["render",g],["__file","spring-overview.html.vue"]]),l=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-overview.html","title":"Spring基础 - Spring和Spring框架组成","lang":"zh-CN","frontmatter":{"aliases":"Spring基础 - Spring和Spring框架组成","tags":null,"cssclass":null,"source":null,"order":10,"created":"2024-02-22 10:50","updated":"2024-10-11 16:46","description":"Spring基础 - Spring和Spring框架组成 Spring是什么？它是怎么诞生的？有哪些主要的组件和核心功能呢? 本文通过这几个问题帮助你构筑Spring和Spring Framework的整体认知 1. 什么是Spring 1.1 概念 Spring 是一种轻量级开发框架，旨在提高开发人员的开发效率以及系统的可维护性。 我们一般说的Spr...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Spring基础 - Spring和Spring框架组成"}],["meta",{"property":"og:description","content":"Spring基础 - Spring和Spring框架组成 Spring是什么？它是怎么诞生的？有哪些主要的组件和核心功能呢? 本文通过这几个问题帮助你构筑Spring和Spring Framework的整体认知 1. 什么是Spring 1.1 概念 Spring 是一种轻量级开发框架，旨在提高开发人员的开发效率以及系统的可维护性。 我们一般说的Spr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622154.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring基础 - Spring和Spring框架组成\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622154.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622200.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622228.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622263.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622307.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622341.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622370.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622398.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622426.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622456.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622495.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622523.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231622553.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是Spring","slug":"_1-什么是spring","link":"#_1-什么是spring","children":[{"level":3,"title":"1.1 概念","slug":"_1-1-概念","link":"#_1-1-概念","children":[]},{"level":3,"title":"1.2 Spring的起源","slug":"_1-2-spring的起源","link":"#_1-2-spring的起源","children":[]},{"level":3,"title":"1.3 Spring的特性和优势","slug":"_1-3-spring的特性和优势","link":"#_1-3-spring的特性和优势","children":[]}]},{"level":2,"title":"2. Spring有哪些组件?","slug":"_2-spring有哪些组件","link":"#_2-spring有哪些组件","children":[{"level":3,"title":"2.1 Core Container（Spring的核心容器）","slug":"_2-1-core-container-spring的核心容器","link":"#_2-1-core-container-spring的核心容器","children":[]},{"level":3,"title":"2.2 Data Access/Integration（数据访问／集成）","slug":"_2-2-data-access-integration-数据访问-集成","link":"#_2-2-data-access-integration-数据访问-集成","children":[]},{"level":3,"title":"2.3 Web模块","slug":"_2-3-web模块","link":"#_2-3-web模块","children":[]},{"level":3,"title":"2.4 AOP、Aspects、Instrumentation和Messaging","slug":"_2-4-aop、aspects、instrumentation和messaging","link":"#_2-4-aop、aspects、instrumentation和messaging","children":[]},{"level":3,"title":"2.5 Test模块","slug":"_2-5-test模块","link":"#_2-5-test模块","children":[]}]},{"level":2,"title":"3. 为什么用Spring?","slug":"_3-为什么用spring","link":"#_3-为什么用spring","children":[]},{"level":2,"title":"4. 学习Spring时参考哪些资料呢？","slug":"_4-学习spring时参考哪些资料呢","link":"#_4-学习spring时参考哪些资料呢","children":[{"level":3,"title":"4.1 Spring 的官方项目和教程","slug":"_4-1-spring-的官方项目和教程","link":"#_4-1-spring-的官方项目和教程","children":[]},{"level":3,"title":"4.2 Spring 的归档文档","slug":"_4-2-spring-的归档文档","link":"#_4-2-spring-的归档文档","children":[]},{"level":3,"title":"4.3 Spring 的官方Github","slug":"_4-3-spring-的官方github","link":"#_4-3-spring-的官方github","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":9.79,"words":2937},"filePathRelative":"posts/Java/Java框架/Spring/spring-overview.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>Spring是什么？它是怎么诞生的？有哪些主要的组件和核心功能呢? 本文通过这几个问题帮助你构筑Spring和Spring Framework的整体认知</p>\\n</blockquote>\\n<h2>1. 什么是Spring</h2>\\n<h3>1.1 概念</h3>\\n<p>Spring 是一种轻量级开发框架，<strong>旨在提高开发人员的开发效率以及系统的可维护性</strong>。</p>\\n<p>我们一般说的Spring框架指的都是Spring Framwork，他是很多模块的集合，使用这些模块可以很方便地协助我们进行开发</p>\\n<h3>1.2 Spring的起源</h3>","autoDesc":true}');export{o as comp,l as data};
