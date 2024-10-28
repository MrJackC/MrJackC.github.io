import{_ as t,c as e,a as r,o as n}from"./app-BQBjlK2G.js";const p={};function i(a,o){return n(),e("div",null,o[0]||(o[0]=[r('<h1 id="springboot的模块及结构" tabindex="-1"><a class="header-anchor" href="#springboot的模块及结构"><span>SpringBoot的模块及结构</span></a></h1><blockquote><p>注：该源码分析对应SpringBoot版本为<strong>2.1.0.RELEASE</strong></p></blockquote><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言"><span><strong>1. 前言</strong></span></a></h2><p><strong>阅读源码，此时我们一定要对项目结构等有一个整体的认识，然后再进行源码分析调试</strong> 。</p><h2 id="_2-springboot源码模块一览" tabindex="-1"><a class="header-anchor" href="#_2-springboot源码模块一览"><span><strong>2. SpringBoot源码模块一览</strong></span></a></h2><p>我们先来对SpringBoot的源码模块来一个大致的了解，如下图：</p><figure><img src="https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232213446.png" alt="image-20220331162621887" tabindex="0" loading="lazy"><figcaption>image-20220331162621887</figcaption></figure><p>从上图可以看到，主要有以下四个模块：</p><ul><li><strong>spring-boot-project</strong>：整个SpringBoot框架全部功能在这个模块实现，SpringBoot项目95%的代码都在这里实现，源码总共有25万行左右。</li><li><strong>Spring-boot-samples</strong>：这个是SpringBoot给小伙伴们赠送的福利，里面包含了各种各样使用SpringBoot的简单demo，我们调试阅读源码的时候可以充分利用该模块。</li><li><strong>Spring-boot-sample-invoker</strong>：这个模块应该是跟sample模块有关，注意根pom.xml中有这么一句话：<code>Samples are built via the invoker plugin</code>，该模块无代码。</li><li><strong>Spring-boot-tests</strong>：这个模块SpringBoot的测试模块，跟部署测试和集成测试有关。</li></ul><p>因为SpringBoot的全部功能在spring-boot-project模块实现，因此下面重点来介绍下 spring-boot-project 模块。</p><h2 id="_3-spring-boot-project源码模块详解" tabindex="-1"><a class="header-anchor" href="#_3-spring-boot-project源码模块详解"><span><strong>3. spring-boot-project源码模块详解</strong></span></a></h2><p>先来看下spring-boot-project整体模块结构，如下图，然后我们再逐个来介绍：</p><figure><img src="https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232213484.png" alt="image-20220331162733623" tabindex="0" loading="lazy"><figcaption>image-20220331162733623</figcaption></figure><h4 id="_3-1-spring-boot-parent" tabindex="-1"><a class="header-anchor" href="#_3-1-spring-boot-parent"><span><strong>3.1 spring-boot-parent</strong></span></a></h4><p>这个模块没有代码，是spring-boot模块的父项目，被其他子模块继承。</p><h4 id="_3-2-spring-boot" tabindex="-1"><a class="header-anchor" href="#_3-2-spring-boot"><span>3.<strong>2 spring-boot</strong></span></a></h4><p>这个模块是SpringBoot项目的核心，可以说一些基础核心的功能都在这里实现，为SpringBoot的其他模块组件功能提供了支持，主要包括以下核心功能：</p><ul><li><code>SpringApplication</code>类，这个是SpringBoot的启动类，提供了一个静态的<code>run</code>方法来启动程序，该类主要用来创建并且刷新Spring容器<code>ApplicationContext</code>.</li><li>支持选择不同的容器比如Tomcat,Jetty等来作为应用的嵌入容器，这个是SpringBoot的新特性之一。</li><li>外部配置支持，这个指的是我们执行<code>java -jar xxx.jar</code>命令时可以带一些参数，比如执行<code>java -jar demo.jar --server.port=8888</code>来将应用端口修改为8888.</li><li>该模块内置了一些SpringBoot启动时的生命周期事件和一些容器初始化器(<code>ApplicationContext</code> initializers)，来执行一些SpringBoot启动时的初始化逻辑。</li></ul><h4 id="_3-3-spring-boot-autoconfigure" tabindex="-1"><a class="header-anchor" href="#_3-3-spring-boot-autoconfigure"><span>3.<strong>3 spring-boot-autoconfigure</strong></span></a></h4><p>这个模块跟SpringBoot的自动配置有关，也是SpringBoot的新特性之一。比如SpringBoot能基于类路径来自动配置某个项目模块，自动配置最为关键的注解是<code>@EnableAutoConfiguration</code>,这个注解能触发Spring上下文的自动配置。另外一个重要的注解是<code>@Conditional</code>。</p><blockquote><p>举个栗子，若<code>HSQLDB</code>在项目的类路径中，且我们没有配置任何其他<a href="https://cloud.tencent.com/solution/database?from=10680" target="_blank" rel="noopener noreferrer">数据库</a>的连接，此时自动配置就会自动根据类路径来创建相应的<code>bean</code>。</p></blockquote><p>除了根据类路径来进行自动配置外，还有根据容器中是否存在某个bean等方式来进行自动配置，这里不会进入到具体细节中。</p><h4 id="_3-4-spring-boot-starters" tabindex="-1"><a class="header-anchor" href="#_3-4-spring-boot-starters"><span><strong>3.4 spring-boot-starters</strong></span></a></h4><p>这个模块是跟SpringBoot的起步依赖有关，也是SpringBoot的新特性之一。SpringBoot通过提供众多起步依赖降低项目依赖的复杂度。起步依赖其实就是利用maven项目模型将其他相关的依赖给聚合起来，里面各种依赖的版本号都给定义好，避免用户在引入依赖时出现各种版本冲突，方便了我们的使用。</p><blockquote><p>举个栗子，我们要用到activemq时，此时可以直接引入<code>spring-boot-starter-activemq</code>起步依赖即可，若SpringBoot官网或第三方组织没有提供相应的SpringBoot起步依赖时，此时我们可以进行定制自己的起步依赖。</p></blockquote><p>注意，该模块没有代码，主要是通过maven的pom.xml来组织各种依赖。</p><h4 id="_3-5-spring-boot-cli" tabindex="-1"><a class="header-anchor" href="#_3-5-spring-boot-cli"><span><strong>3.5 spring-boot-cli</strong></span></a></h4><p>Spring Boot CLI是一个<a href="https://cloud.tencent.com/product/cli?from=10680" target="_blank" rel="noopener noreferrer">命令行工具</a>，如果您想使用Spring快速开发，可以使用它。它允许您运行Groovy脚本，这意味着您有一个熟悉的类似Java的语法，而没有那么多样板代码。您还可以引导一个新项目或编写自己的命令。</p><h4 id="_3-6-spring-boot-actuator" tabindex="-1"><a class="header-anchor" href="#_3-6-spring-boot-actuator"><span><strong>3.6 spring-boot-actuator</strong></span></a></h4><p>这个跟SpringBoot的监控有关，也是SpringBoot的新特性之一。可以通过HTTP端点或JMX等来管理和监控应用。审计、运行状况和度量收集可以自动应用到应用程序。这个监控模块是开箱即用的，提供了一系列端点包括<code>HealthEndpoint</code>, <code>EnvironmentEndpoint</code>和<code>BeansEndpoint</code>等端点。</p><h4 id="_3-7-spring-boot-actuator-autoconfigure" tabindex="-1"><a class="header-anchor" href="#_3-7-spring-boot-actuator-autoconfigure"><span>3.<strong>7 spring-boot-actuator-autoconfigure</strong></span></a></h4><p>这个模块为监控模块提供自动配置的功能，通常也是根据类路径来进行配置。比如<code>Micrometer</code>存在于类路径中，那么将会自动配置<code>MetricsEndpoint</code>。</p><h4 id="_3-8-spring-boot-test" tabindex="-1"><a class="header-anchor" href="#_3-8-spring-boot-test"><span><strong>3.8 spring-boot-test</strong></span></a></h4><p>这个模式是spring-boot的跟测试有关的模块，包含了一些帮助我们测试的核心类和注解（比如<code>@SpringBootTest</code>）。</p><h4 id="_3-9-spring-boot-dependencies" tabindex="-1"><a class="header-anchor" href="#_3-9-spring-boot-dependencies"><span>3.<strong>9 spring-boot-dependencies</strong></span></a></h4><p>这个模块也没有代码，主要是定义了一些SpringBoot的maven相关的一些依赖及其版本。</p><h4 id="_3-10-spring-boot-devtools" tabindex="-1"><a class="header-anchor" href="#_3-10-spring-boot-devtools"><span>3.<strong>10 spring-boot-devtools</strong></span></a></h4><p>这个模块跟SpringBoot的热部署有关，即修改代码后无需重启应用即生效。</p><h4 id="_3-11-spring-boot-docs" tabindex="-1"><a class="header-anchor" href="#_3-11-spring-boot-docs"><span>3.<strong>11 spring-boot-docs</strong></span></a></h4><p>这个模块应该是跟文档相关的模块。</p><h4 id="_3-12-spring-boot-properties-migrator" tabindex="-1"><a class="header-anchor" href="#_3-12-spring-boot-properties-migrator"><span><strong>3.12 spring-boot-properties-migrator</strong></span></a></h4><p>看到 migrator 这个单词，估计就是跟项目迁移有关，没有去细 究。</p><h4 id="_3-13-spring-boot-test-autoconfigure" tabindex="-1"><a class="header-anchor" href="#_3-13-spring-boot-test-autoconfigure"><span><strong>3.13 spring-boot-test-autoconfigure</strong></span></a></h4><p>这个模块一看就是跟SpringBoot的测试的自动配置有关。</p><h4 id="_3-14-spring-boot-tools" tabindex="-1"><a class="header-anchor" href="#_3-14-spring-boot-tools"><span><strong>3.14 spring-boot-tools</strong></span></a></h4><p>这个模块一看就是SpringBoot的工具相关的模块，提供了加载，maven插件,metadata和后置处理相关的支持。</p><p>上面介绍了这么多spring-boot模块下的子模块，不用慌，我们要进行解读的模块不多，我们真正要看的模块有<code>spring-boot</code>，<code>spring-boot-autoconfigure</code>，<code>spring-boot-starters</code>和<code>spring-boot-actuator</code>模块。</p><h2 id="_4-思维导图" tabindex="-1"><a class="header-anchor" href="#_4-思维导图"><span>4. 思维导图</span></a></h2><p><strong>用一个思维导图来总结下SpringBoot源码项目的脉络</strong></p><figure><img src="https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232213520.png" alt="image-20220331163705752" tabindex="0" loading="lazy"><figcaption>image-20220331163705752</figcaption></figure><h2 id="_5-springboot模块之间的pom关系详解" tabindex="-1"><a class="header-anchor" href="#_5-springboot模块之间的pom关系详解"><span>5. <strong>SpringBoot模块之间的pom关系详解</strong></span></a></h2><p>前面弄清楚了SpringBoot的各个模块的具体功能，此时我们来看下SpringBoot模块的pom之间的关系是怎样的，因为项目是通过maven构建的，因此还是有必要去研究下这块关系滴。</p><p>先看SpringBoot源码项目的pom关系，如下图：</p><figure><img src="https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232213539.png" alt="image-20220331163745484" tabindex="0" loading="lazy"><figcaption>image-20220331163745484</figcaption></figure><p>根据上图可得出以下结论：</p><ul><li><code>spring-boot-build(pom.xml)</code>是项目的根pom，其子pom有<code>spring-boot-project(pom.xml)</code>和<code>spring-boot-dependencies(pom.xml)</code>；</li><li><code>spring-boot-dependencies(pom.xml)</code>主要定义了SpringBoot项目的各种依赖及其版本，其子pom有<code>spring-boot-parent(pom.xml)</code>和<code>spring-boot-starter-parent(pom.xml)</code>；</li><li><code>spring-boot-project(pom.xml)</code>起到聚合module的作用，其子模块并不继承于它，而是继承于<code>spring-boot-parent(pom.xml)</code>；</li><li><code>spring-boot-parent(pom.xml)</code>是<code>spring-boot-project(pom.xml)</code>的子module，但继承的父pom为<code>spring-boot-dependencies(pom.xml)</code>，其定义了一些properties等相关的东西。其子pom为<code>spring-boot-project(pom.xml)</code>的子module（注意除去<code>spring-boot-dependencies(pom.xml)</code>），比如有<code>spring-boot(pom.xml)</code>,<code>spring-boot-starters(pom.xml)</code>和<code>spring-boot-actuator(pom.xml)</code>等；</li><li><code>spring-boot-starters(pom.xml)</code>是所有具体起步依赖的父pom，其子pom有<code>spring-boot-starter-data-jdbc(pom.xml)</code>和<code>spring-boot-starter-data-redis(pom.xml)</code>等。</li><li><code>spring-boot-starter-parent(pom.xml)</code>，是我们的所有具体SpringBoot项目的父pom，比如SpringBoot自带的样例的<code>spring-boot-samples(pom.xml)</code>是继承于它的。</li></ul><p>SpringBoot的各模块之间的pom关系有点复杂，确实有点绕，如果看完上面的图片和解释还是不太清楚的话，建议小伙伴们自己打开idea的项目，逐个去捋一下。总之记得SpringBoot的一些父pom无非是做了一些版本管理，聚合模块之间的事情。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://cloud.tencent.com/developer/article/1628785" target="_blank" rel="noopener noreferrer">SpringBoot的模块及结构</a></p>',59)]))}const g=t(p,[["render",i],["__file","springboot-y-source-module.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-y-source-module.html","title":"SpringBoot的模块及结构","lang":"zh-CN","frontmatter":{"aliases":"SpringBoot的模块及结构","tags":null,"cssclass":null,"source":null,"created":"2024-04-23 20:40","updated":"2024-10-11 16:46","description":"SpringBoot的模块及结构 注：该源码分析对应SpringBoot版本为2.1.0.RELEASE 1. 前言 阅读源码，此时我们一定要对项目结构等有一个整体的认识，然后再进行源码分析调试 。 2. SpringBoot源码模块一览 我们先来对SpringBoot的源码模块来一个大致的了解，如下图： image-20220331162621887...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-y-source-module.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"SpringBoot的模块及结构"}],["meta",{"property":"og:description","content":"SpringBoot的模块及结构 注：该源码分析对应SpringBoot版本为2.1.0.RELEASE 1. 前言 阅读源码，此时我们一定要对项目结构等有一个整体的认识，然后再进行源码分析调试 。 2. SpringBoot源码模块一览 我们先来对SpringBoot的源码模块来一个大致的了解，如下图： image-20220331162621887..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232213446.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot的模块及结构\\",\\"image\\":[\\"https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232213446.png\\",\\"https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232213484.png\\",\\"https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232213520.png\\",\\"https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232213539.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 前言","slug":"_1-前言","link":"#_1-前言","children":[]},{"level":2,"title":"2. SpringBoot源码模块一览","slug":"_2-springboot源码模块一览","link":"#_2-springboot源码模块一览","children":[]},{"level":2,"title":"3. spring-boot-project源码模块详解","slug":"_3-spring-boot-project源码模块详解","link":"#_3-spring-boot-project源码模块详解","children":[]},{"level":2,"title":"4. 思维导图","slug":"_4-思维导图","link":"#_4-思维导图","children":[]},{"level":2,"title":"5. SpringBoot模块之间的pom关系详解","slug":"_5-springboot模块之间的pom关系详解","link":"#_5-springboot模块之间的pom关系详解","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.7,"words":2011},"filePathRelative":"posts/Java/Java框架/SpringBoot/springboot-y-source-module.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>注：该源码分析对应SpringBoot版本为<strong>2.1.0.RELEASE</strong></p>\\n</blockquote>\\n<h2><strong>1. 前言</strong></h2>\\n<p><strong>阅读源码，此时我们一定要对项目结构等有一个整体的认识，然后再进行源码分析调试</strong> 。</p>\\n<h2><strong>2. SpringBoot源码模块一览</strong></h2>\\n<p>我们先来对SpringBoot的源码模块来一个大致的了解，如下图：</p>\\n<figure><img src=\\"https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232213446.png\\" alt=\\"image-20220331162621887\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220331162621887</figcaption></figure>","autoDesc":true}');export{g as comp,c as data};
