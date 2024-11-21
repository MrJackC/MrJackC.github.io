import{_ as n,c as s,a as i,o as r}from"./app-CpAF2rca.js";const o={};function l(p,a){return r(),s("div",null,a[0]||(a[0]=[i(`<h1 id="spring-boot常见知识点" tabindex="-1"><a class="header-anchor" href="#spring-boot常见知识点"><span>Spring Boot常见知识点</span></a></h1><h2 id="_1-spring-boot-的自动配置是如何实现" tabindex="-1"><a class="header-anchor" href="#_1-spring-boot-的自动配置是如何实现"><span>1. Spring Boot 的自动配置是如何实现</span></a></h2><p>Spring Boot 项目的启动注解是：@SpringBootApplication，其实他由下面三个注解组成的：</p><ul><li>@SpringBootConfiguration</li><li>@ComponentScan</li><li>@EnableAutoConfiguration</li></ul><h3 id="_1-1-加载过程" tabindex="-1"><a class="header-anchor" href="#_1-1-加载过程"><span>1.1 加载过程</span></a></h3><ul><li><p>其中@EnableAutoConfiguration 是实现自动配置的入口，</p></li><li><p>该注解又通过 @Import 注解导入了AutoConfigurationImportSelector，在该类中加载 META-INF/spring.factories 的配置信息。</p></li><li><p>然后筛选出以EnableAutoConfiguration 为key的数据，加入到IOC 容器中，实现自动配置功能</p></li></ul><h2 id="_2-什么是嵌入式服务器-我们为什么要使用嵌入式服务器呢" tabindex="-1"><a class="header-anchor" href="#_2-什么是嵌入式服务器-我们为什么要使用嵌入式服务器呢"><span>2. 什么是嵌入式服务器？我们为什么要使用嵌入式服务器呢？</span></a></h2><p>当我们创建一个可以部署的应用程序的时候，我们将会把服务器（例如：tomcat）嵌入到可部署的服务器中。</p><p>例如：对于一个 Spring Boot 应用程序来说，你可以生成一个包含 Embedded Tomcat 的应用程序 jar。你就可以像运行正常 Java 应用程序一样来运行 web 应用程序了。</p><p>嵌入式服务器就是我们的可执行单元包含服务器的二进制文件（例如，tomcat.jar）。</p><blockquote><p>思考一下再你虚拟机部署应用程序需要什么</p><ol><li>安装java</li><li>安装web 或者是应用程序的服务器（Tomcat、weblogic等等）</li><li>部署应用程序war</li></ol><p>如果我们想简化这些步骤，应该怎么做呢？</p><p>让我们来思考如何使服务器成为应用程序的一部分？</p><p>你只需要一个安装了 Java 的虚拟机，就可以直接在上面部署应用程序了，</p></blockquote><h2 id="_3-微服务同时调用多个服务-怎么支持事务的" tabindex="-1"><a class="header-anchor" href="#_3-微服务同时调用多个服务-怎么支持事务的"><span>3. 微服务同时调用多个服务，怎么支持事务的？</span></a></h2><ul><li><p>集成 Aatomikos 支持分布式事务</p><p>一般不建议这样使用，因为使用分布式事务会增加请求的响应时间，影响系统的TPS</p></li><li><p>消息的补偿机制来处理分布式事务</p></li></ul><h2 id="_4-个服务之间通信-对restful-和rpc-这2中方式如何选择" tabindex="-1"><a class="header-anchor" href="#_4-个服务之间通信-对restful-和rpc-这2中方式如何选择"><span>4. 个服务之间通信，对Restful 和RPC 这2中方式如何选择</span></a></h2><p>在传统的SOA治理中，使用rpc的居多；Spring Cloud默认使用restful进行服务之间的通讯。rpc通讯效率会比restful要高一些，但是对于大多数公司来讲，这点效率影响甚微。我建议使用restful这种方式，易于在不同语言实现的服务之间通讯。</p><h2 id="_5-怎么设计无状态服务" tabindex="-1"><a class="header-anchor" href="#_5-怎么设计无状态服务"><span>5. 怎么设计无状态服务</span></a></h2><h3 id="_5-1-什么是无状态" tabindex="-1"><a class="header-anchor" href="#_5-1-什么是无状态"><span>5.1 什么是无状态</span></a></h3><p>如果一个数据需要被多个服务共享，才能完成一笔交易，那么<strong>这个数据被称为状态</strong>。进而依赖这个“状态”数据的服务被称为有状态服务，反之称为无状态服务</p><h3 id="_5-2-如何设计" tabindex="-1"><a class="header-anchor" href="#_5-2-如何设计"><span>5.2 如何设计</span></a></h3><p>无状态服务原则并不是说在微服务架构里就不允许存在状态，表达的真实意思是要把有状态的业务服务改变为无状态的计算类服务，那么状态数据也就相应的迁移到对应的“有状态数据服务”中</p><h3 id="_5-3-场景说明" tabindex="-1"><a class="header-anchor" href="#_5-3-场景说明"><span>5.3 场景说明</span></a></h3><p>例如我们以前在本地内存中建立的数据缓存、Session缓存，到现在的微服务架构中就应该把这些数据迁移到分布式缓存中存储，让业务服务变成一个无状态的计算节点。迁移后，就可以做到按需动态伸缩，微服务应用在运行时动态增删节点，就不再需要考虑缓存数据如何同步的问题。</p><h2 id="_6-spring-cache-三种常用的缓存注解和意义" tabindex="-1"><a class="header-anchor" href="#_6-spring-cache-三种常用的缓存注解和意义"><span>6. Spring Cache 三种常用的缓存注解和意义？</span></a></h2><ul><li><p>@Cacheable：</p><p>用来声明方法是可缓存的，将结果存储到缓存中以便后续使用相同参数调用时不需执行实际的方法，直接从缓存中取值。</p></li><li><p>CachePut：</p><p>使用 @CachePut 标注的方法在执行前，不会去检查缓存中是否存在之前执行过的结果，而是每次都会执行该方法，并将执行结果以键值对的形式存入指定的缓存中。</p></li><li><p>@CacheEvict:</p><p>是用来标注在需要清除缓存元素的方法或类上的，当标记在一个类上时表示其中所有的方法的执行都会触发缓存的清除操作。</p></li></ul><h2 id="_7-spring-boot-如何设置支持跨域请求" tabindex="-1"><a class="header-anchor" href="#_7-spring-boot-如何设置支持跨域请求"><span>7. Spring Boot 如何设置支持跨域请求</span></a></h2><h3 id="_7-1-什么是跨域" tabindex="-1"><a class="header-anchor" href="#_7-1-什么是跨域"><span>7.1 什么是跨域</span></a></h3><p>现代浏览器出于安全的考虑， HTTP 请求时必须遵守同源策略，否则就是跨域的 HTTP 请求，默认情况下是被禁止的，IP（域名）不同、或者端口不同、协议不同（比如 HTTP、HTTPS）都会造成跨域问题。</p><h3 id="_7-2-支持跨域" tabindex="-1"><a class="header-anchor" href="#_7-2-支持跨域"><span>7.2 支持跨域</span></a></h3><p>配置CoreFilter</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Configuration</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> CorsConfig</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Bean</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> CorsFilter</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> corsFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        final</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> UrlBasedCorsConfigurationSource</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> source</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> UrlBasedCorsConfigurationSource</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        final</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> CorsConfiguration</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> config</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> CorsConfiguration</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setAllowCredentials</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setAllowedOrigins</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Arrays</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">asList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;*&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)); </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//http:www.a.com</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setAllowedHeaders</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Arrays</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">asList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;*&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setAllowedMethods</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Arrays</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">asList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;*&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setMaxAge</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">300l</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        source</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">registerCorsConfiguration</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;/**&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, config);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> CorsFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(source);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-jpa-和-hibernate-有哪些区别-jpa-可以支持动态-sql-吗" tabindex="-1"><a class="header-anchor" href="#_8-jpa-和-hibernate-有哪些区别-jpa-可以支持动态-sql-吗"><span>8. JPA 和 Hibernate 有哪些区别？JPA 可以支持动态 SQL 吗？</span></a></h2><h3 id="_8-1-jpa-和-hibernate-有哪些区别" tabindex="-1"><a class="header-anchor" href="#_8-1-jpa-和-hibernate-有哪些区别"><span>8.1 JPA 和 Hibernate 有哪些区别？</span></a></h3><p>JPA本身是一种规范，它的本质是一种ORM规范（不是ORM框架，因为JPA并未提供ORM实现，只是制定了规范）因为JPA是一种规范，所以，只是提供了一些相关的接口，但是接口并不能直接使用，JPA底层需要某种JPA实现，Hibernate 是 JPA 的一个实现集。</p><h3 id="_8-2-jpa-可以支持动态-sql-吗" tabindex="-1"><a class="header-anchor" href="#_8-2-jpa-可以支持动态-sql-吗"><span>8.2 JPA 可以支持动态 SQL 吗？</span></a></h3><p>JPA 是根据实体类的注解来创建对应的表和字段，如果需要动态创建表或者字段，需要动态构建对应的实体类，再重新调用Jpa刷新整个Entity。动态SQL，mybatis支持的最好，jpa也可以支持，但是没有Mybatis那么灵活。</p><h2 id="_9-spring-boot-约定优先于配置-最大的优势" tabindex="-1"><a class="header-anchor" href="#_9-spring-boot-约定优先于配置-最大的优势"><span>9.Spring Boot 约定优先于配置（最大的优势）</span></a></h2><p>Spring Boot 的最大的优势是“约定优于配置“。“约定优于配置“是一种软件设计范式，开发人员按照约定的方式来进行编程，可以减少软件开发人员需做决定的数量，获得简单的好处，而又不失灵活性。</p><h3 id="_9-1-spring-boot-中-约定优于配置-的具体体现在哪里" tabindex="-1"><a class="header-anchor" href="#_9-1-spring-boot-中-约定优于配置-的具体体现在哪里"><span>9.1 Spring Boot 中“约定优于配置”的具体体现在哪里</span></a></h3><p>Spring Boot Starter、Spring Boot Jpa 都是“约定优于配置“的一种体现。都是通过“约定优于配置“的设计思路来设计的，Spring Boot Starter 在启动的过程中会根据约定的信息对资源进行初始化；Spring Boot Jpa 通过约定的方式来自动生成 Sql ，避免大量无效代码编写</p><h3 id="_9-2-spring-boot-在启动的时候会做的几件事情" tabindex="-1"><a class="header-anchor" href="#_9-2-spring-boot-在启动的时候会做的几件事情"><span>9.2 Spring Boot 在启动的时候会做的几件事情</span></a></h3><ul><li>① Spring Boot 在启动时会去依赖的 Starter 包中寻找 resources/META-INF/spring.factories 文件，然后根据文件中配置的 Jar 包去扫描项目所依赖的 Jar 包。</li><li>② 根据 spring.factories 配置加载 AutoConfigure 类</li><li>③ 根据 @Conditional 注解的条件，进行自动配置并将 Bean 注入 Spring Context</li></ul><p>总结一下，其实就是 Spring Boot 在启动的时候，按照约定去读取 Spring Boot Starter 的配置信息，再根据配置信息对资源进行初始化，并注入到 Spring 容器中。这样 Spring Boot 启动完毕后，就已经准备好了一切资源，使用过程中直接注入对应 Bean 资源即可。</p><h2 id="_10-spring-、spring-boot-和-spring-cloud-的关系" tabindex="-1"><a class="header-anchor" href="#_10-spring-、spring-boot-和-spring-cloud-的关系"><span>10. Spring 、Spring Boot 和 Spring Cloud 的关系?</span></a></h2><p>Spring 最初最核心的两大核心功能 Spring Ioc 和 Spring Aop 成就了 Spring，Spring 在这两大核心的功能上不断的发展，才有了 Spring 事务、Spring Mvc 等一系列伟大的产品，最终成就了 Spring 帝国，到了后期 Spring 几乎可以解决企业开发中的所有问题。</p><p>Spring Boot 是在强大的 Spring 帝国生态基础上面发展而来，发明 Spring Boot 不是为了取代 Spring ,是为了让人们更容易的使用 Spring 。</p><p>Spring Cloud 是一系列框架的有序集合。它利用 Spring Boot 的开发便利性巧妙地简化了分布式系统基础设施的开发，如服务发现注册、配置中心、消息总线、负载均衡、断路器、数据监控等，都可以用 Spring Boot 的开发风格做到一键启动和部署。</p><p>Spring Cloud 是为了解决微服务架构中服务治理而提供的一系列功能的开发框架，并且 Spring Cloud 是完全基于 Spring Boot 而开发，Spring Cloud 利用 Spring Boot 特性整合了开源行业中优秀的组件，整体对外提供了一套在微服务架构中服务治理的解决方案。</p><p>用一组不太合理的包含关系来表达它们之间的关系。</p><p>Spring ioc/aop &gt; Spring &gt; Spring Boot &gt; Spring Cloud</p>`,49)]))}const t=n(o,[["render",l],["__file","Springboot.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/Springboot.html","title":"Spring Boot常见知识点","lang":"zh-CN","frontmatter":{"created":"2024-05-14 07:56","updated":"2024-10-11 16:46","description":"Spring Boot常见知识点 1. Spring Boot 的自动配置是如何实现 Spring Boot 项目的启动注解是：@SpringBootApplication，其实他由下面三个注解组成的： @SpringBootConfiguration @ComponentScan @EnableAutoConfiguration 1.1 加载过程 其...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/Springboot.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Spring Boot常见知识点"}],["meta",{"property":"og:description","content":"Spring Boot常见知识点 1. Spring Boot 的自动配置是如何实现 Spring Boot 项目的启动注解是：@SpringBootApplication，其实他由下面三个注解组成的： @SpringBootConfiguration @ComponentScan @EnableAutoConfiguration 1.1 加载过程 其..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring Boot常见知识点\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. Spring Boot 的自动配置是如何实现","slug":"_1-spring-boot-的自动配置是如何实现","link":"#_1-spring-boot-的自动配置是如何实现","children":[{"level":3,"title":"1.1 加载过程","slug":"_1-1-加载过程","link":"#_1-1-加载过程","children":[]}]},{"level":2,"title":"2. 什么是嵌入式服务器？我们为什么要使用嵌入式服务器呢？","slug":"_2-什么是嵌入式服务器-我们为什么要使用嵌入式服务器呢","link":"#_2-什么是嵌入式服务器-我们为什么要使用嵌入式服务器呢","children":[]},{"level":2,"title":"3. 微服务同时调用多个服务，怎么支持事务的？","slug":"_3-微服务同时调用多个服务-怎么支持事务的","link":"#_3-微服务同时调用多个服务-怎么支持事务的","children":[]},{"level":2,"title":"4. 个服务之间通信，对Restful 和RPC 这2中方式如何选择","slug":"_4-个服务之间通信-对restful-和rpc-这2中方式如何选择","link":"#_4-个服务之间通信-对restful-和rpc-这2中方式如何选择","children":[]},{"level":2,"title":"5. 怎么设计无状态服务","slug":"_5-怎么设计无状态服务","link":"#_5-怎么设计无状态服务","children":[{"level":3,"title":"5.1 什么是无状态","slug":"_5-1-什么是无状态","link":"#_5-1-什么是无状态","children":[]},{"level":3,"title":"5.2 如何设计","slug":"_5-2-如何设计","link":"#_5-2-如何设计","children":[]},{"level":3,"title":"5.3 场景说明","slug":"_5-3-场景说明","link":"#_5-3-场景说明","children":[]}]},{"level":2,"title":"6. Spring Cache 三种常用的缓存注解和意义？","slug":"_6-spring-cache-三种常用的缓存注解和意义","link":"#_6-spring-cache-三种常用的缓存注解和意义","children":[]},{"level":2,"title":"7. Spring Boot 如何设置支持跨域请求","slug":"_7-spring-boot-如何设置支持跨域请求","link":"#_7-spring-boot-如何设置支持跨域请求","children":[{"level":3,"title":"7.1 什么是跨域","slug":"_7-1-什么是跨域","link":"#_7-1-什么是跨域","children":[]},{"level":3,"title":"7.2 支持跨域","slug":"_7-2-支持跨域","link":"#_7-2-支持跨域","children":[]}]},{"level":2,"title":"8. JPA 和 Hibernate 有哪些区别？JPA 可以支持动态 SQL 吗？","slug":"_8-jpa-和-hibernate-有哪些区别-jpa-可以支持动态-sql-吗","link":"#_8-jpa-和-hibernate-有哪些区别-jpa-可以支持动态-sql-吗","children":[{"level":3,"title":"8.1 JPA 和 Hibernate 有哪些区别？","slug":"_8-1-jpa-和-hibernate-有哪些区别","link":"#_8-1-jpa-和-hibernate-有哪些区别","children":[]},{"level":3,"title":"8.2 JPA 可以支持动态 SQL 吗？","slug":"_8-2-jpa-可以支持动态-sql-吗","link":"#_8-2-jpa-可以支持动态-sql-吗","children":[]}]},{"level":2,"title":"9.Spring Boot 约定优先于配置（最大的优势）","slug":"_9-spring-boot-约定优先于配置-最大的优势","link":"#_9-spring-boot-约定优先于配置-最大的优势","children":[{"level":3,"title":"9.1 Spring Boot 中“约定优于配置”的具体体现在哪里","slug":"_9-1-spring-boot-中-约定优于配置-的具体体现在哪里","link":"#_9-1-spring-boot-中-约定优于配置-的具体体现在哪里","children":[]},{"level":3,"title":"9.2 Spring Boot 在启动的时候会做的几件事情","slug":"_9-2-spring-boot-在启动的时候会做的几件事情","link":"#_9-2-spring-boot-在启动的时候会做的几件事情","children":[]}]},{"level":2,"title":"10. Spring 、Spring Boot 和 Spring Cloud 的关系?","slug":"_10-spring-、spring-boot-和-spring-cloud-的关系","link":"#_10-spring-、spring-boot-和-spring-cloud-的关系","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":7.09,"words":2128},"filePathRelative":"posts/Java/Java框架/SpringBoot/Springboot.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. Spring Boot 的自动配置是如何实现</h2>\\n<p>Spring Boot 项目的启动注解是：@SpringBootApplication，其实他由下面三个注解组成的：</p>\\n<ul>\\n<li>@SpringBootConfiguration</li>\\n<li>@ComponentScan</li>\\n<li>@EnableAutoConfiguration</li>\\n</ul>\\n<h3>1.1 加载过程</h3>\\n<ul>\\n<li>\\n<p>其中@EnableAutoConfiguration 是实现自动配置的入口，</p>\\n</li>\\n<li>\\n<p>该注解又通过 @Import 注解导入了AutoConfigurationImportSelector，在该类中加载 META-INF/spring.factories 的配置信息。</p>\\n</li>\\n<li>\\n<p>然后筛选出以EnableAutoConfiguration 为key的数据，加入到IOC 容器中，实现自动配置功能</p>\\n</li>\\n</ul>","autoDesc":true}');export{t as comp,c as data};
