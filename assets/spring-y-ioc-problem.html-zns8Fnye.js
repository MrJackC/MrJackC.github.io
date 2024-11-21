import{_ as a,c as n,a as i,o as l}from"./app-CpAF2rca.js";const e={};function p(t,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="spring-ioc常见问题" tabindex="-1"><a class="header-anchor" href="#spring-ioc常见问题"><span>Spring IoC常见问题</span></a></h1><h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述"><span>1. 概述</span></a></h2><p>Spring 框架的核心是Spring IoC 容器。容器创建 Bean 对象，将它们装配在一起，配置它们并管理它们的完整生命周期</p><ul><li>Spring 容器使用<strong>依赖注入</strong>来管理组成应用程序的 Bean 对象。</li><li>容器通过读取提供的<strong>配置元数据</strong> Bean Definition来接收对象进行实例化，配置和组装的指令</li><li>该配置元数据Bean Definition 可以<strong>通过XML，Java 注解或Java Config代码提供</strong></li></ul><h2 id="_2-什么是依赖注入" tabindex="-1"><a class="header-anchor" href="#_2-什么是依赖注入"><span>2. 什么是依赖注入？</span></a></h2><p>在依赖注入中，你不必主动，手动创建对象，但必须描述如何创建它们。</p><ul><li>你不是直接在代码中将组件和服务连接在一起，而是描述配置文件中哪些组件需要哪些服务</li><li>然后，再由IoC容器将他们装配在一起</li></ul><p>依赖注入的英文缩写是 Dependency Injection ，简称 DI 。</p><h2 id="_3-ioc-和-di-有什么区别" tabindex="-1"><a class="header-anchor" href="#_3-ioc-和-di-有什么区别"><span>3. IoC 和 DI 有什么区别？</span></a></h2><p>IoC 是个更宽泛的概念，DI 是更具体的。</p><h2 id="_4-可以通过多少种方式完成依赖注入" tabindex="-1"><a class="header-anchor" href="#_4-可以通过多少种方式完成依赖注入"><span>4. 可以通过多少种方式完成依赖注入？</span></a></h2><p>通常，依赖注入可以通过以下三种方式完成</p><ul><li>接口注入</li><li>构造函数注入</li><li>setter 注入</li></ul><p>目前，在Spring Framework中，仅使用<strong>构造函数和setter 注入</strong>这两种方式</p><h3 id="_4-1-构造函数和setter-注入的优缺点" tabindex="-1"><a class="header-anchor" href="#_4-1-构造函数和setter-注入的优缺点"><span>4.1 构造函数和setter 注入的优缺点</span></a></h3><table><thead><tr><th>构造函数注入</th><th>setter注入</th></tr></thead><tbody><tr><td>没有部分注入</td><td>有部分注入</td></tr><tr><td>不会覆盖setter 属性</td><td>会覆盖setter属性</td></tr><tr><td>任意修改都会创建一个新的实例</td><td>任意修改不会创建一个新实例</td></tr><tr><td>适用于设置很多属性</td><td>适用于设置少量属性</td></tr></tbody></table><p>实际场景下，setter 注入使用的更多</p><h2 id="_5-spring-中有多少种ioc-容器" tabindex="-1"><a class="header-anchor" href="#_5-spring-中有多少种ioc-容器"><span>5. Spring 中有多少种IoC 容器</span></a></h2><p>Spring 提供了两种（不是”个“）IoC 容器，分别是BeanFactory、ApplicationContext</p><ul><li><p>BeanFactory</p><blockquote><p>BeanFactory 在Spring-beans 项目提供</p></blockquote><p>BeanFactory，就像一个包含Bean 集合的工厂类。他会在客户端要求时实例化 Bean 对象。</p></li><li><p>ApplicationContext</p><blockquote><p>ApplicationContext 在 spring-context 项目提供</p></blockquote><p>ApplicationContext接口扩展了BeanFactory接口，他在BeanFactory基础上提供了一些额外的功能。内置如下功能：</p><ul><li>MesssageSource：管理message，实现国际化等功能</li><li>ApplicationEventPublisher：事件发布。</li><li>ResourcePatternResolver：多资源加载</li><li>EnvironmentCapable：系统Environment（profile+Properties）相关</li><li>Lifecycle：管理生命周期</li><li>Closable：关闭，释放资源</li><li>initalizingBean：自定义初始化</li><li>BeanNameAware : 设置beanName的Aware接口</li></ul><p>另外，ApplicationContext 会自动初始化非懒加载的Bean 对象们</p><h3 id="_5-1-beanfactory-与-applicationcontext-的两种差异" tabindex="-1"><a class="header-anchor" href="#_5-1-beanfactory-与-applicationcontext-的两种差异"><span>5.1 BeanFactory 与 ApplicationContext 的两种差异</span></a></h3><table><thead><tr><th>BeanFactory</th><th>ApplicationContext</th></tr></thead><tbody><tr><td>使用懒加载</td><td>使用即时加载</td></tr><tr><td>它使用语法显式提供资源对象</td><td>它自己创建和管理资源对象</td></tr><tr><td>不支持国际化</td><td>支持国际化</td></tr><tr><td>不支持基于依赖的注解</td><td>支持基于依赖的注解</td></tr></tbody></table><p>另外、BeanFactory 也被称为<strong>低级</strong>容器，而ApplicationContext 被称为<strong>高级</strong>容器</p></li></ul><h2 id="_6-请介绍下常用的beanfactory-容器" tabindex="-1"><a class="header-anchor" href="#_6-请介绍下常用的beanfactory-容器"><span>6. 请介绍下常用的BeanFactory 容器？</span></a></h2><p>BeanFactory 最常用的是XmlBeanFactory，它可以根据XML文件中定义的内容，创建相应的Bean</p><h2 id="_7-请介绍下常用的-applicationcontext-容器" tabindex="-1"><a class="header-anchor" href="#_7-请介绍下常用的-applicationcontext-容器"><span>7.请介绍下常用的 ApplicationContext 容器？</span></a></h2><p>以下是三种较常见的ApplicationContext 实现方式</p><ul><li><p>ClassPathXmlApplicationContext：从ClassPath的XML 配置文件中读取上下文，并生成上下文定义。应用程序上下文从程序环境变量中取得</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ApplicationContext</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> context </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> ClassPathXmlApplicationContext</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(“</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">bean</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">xml</span><span style="color:#E06C75;--shiki-dark:#E06C75;">”)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div></li><li><p>FileSystemXmlApplicationContext: 由文件系统的XML配置文件读取上下文。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ApplicationContext</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> context </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> FileSytemXmlApplicationContext</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;bean.xml&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span></code></pre></div></li><li><p>XmlWebApplicationContext: 由Web 应用的XML文件读取上下文。例如我们在Spring MVC 使用情况</p></li></ul><p><strong>ConfigServletWebServerApplicationContext</strong>（Spring Boot）：</p><p>目前我们更多使用的是Spring Boot 为主，所以使用的是第四种ApplicationContext容器。ConfigServletWebServerApplicationContext。</p><h2 id="_8-列举一些-ioc-的一些好处" tabindex="-1"><a class="header-anchor" href="#_8-列举一些-ioc-的一些好处"><span>8. 列举一些 IoC 的一些好处？</span></a></h2><ul><li>它将最小化应用程序中的代码</li><li>它以最小的影响和最少的侵入机制促进松耦合</li><li>它支持即时的实例化和延迟加载Bean对象</li><li>它将使您的应用程序易于测试，因为他不需要单元测试用例中的任何单例或JNDI查找机制</li></ul><h2 id="_9-简述spring-ioc-的实现机制" tabindex="-1"><a class="header-anchor" href="#_9-简述spring-ioc-的实现机制"><span>9. 简述Spring IoC 的实现机制？</span></a></h2><p>简单来说，Spring 中的IoC的实现原理，就是<strong>工厂模式</strong>加<strong>反射机制</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">interface</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Fruit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">     public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> abstract</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> eat</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">     </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Apple</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> implements</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Fruit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> eat</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Apple&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Orange</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> implements</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Fruit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> eat</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Orange&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Factory</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Fruit</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getInstance</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> className</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Fruit</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> f</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        try</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            f </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (Fruit) </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">forName</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(className).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">newInstance</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Exception</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">printStackTrace</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> f;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Client</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Fruit</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> f</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Factory</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getInstance</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;io.github.dunwu.spring.Apple&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(f </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            f</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">eat</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Fruit接口，有Apple 和Orange两个实现类</li><li>Factory工厂，通过反射机制，创建className 对应的Fruit 对象</li><li>Client 通过Factory 工厂，获得对应的Fruit 对象</li><li>实际情况下，Spring IoC 比这个复杂很多很多，例如单例Bean 对象，Bean 的属性注入，相互依赖的Bean 的处理</li></ul><h2 id="_10-spring-框架中有哪些不同类型的事件" tabindex="-1"><a class="header-anchor" href="#_10-spring-框架中有哪些不同类型的事件"><span>10. Spring 框架中有哪些不同类型的事件？</span></a></h2><p>Spring 的ApplicationContext 提供了支持事件和代码中监听器的功能。</p><p>我们可以创建 Bean 用来监听在 ApplicationContext 中发布的事件。如果一个 Bean 实现了 ApplicationListener 接口，当一个ApplicationEvent 被发布以后，Bean 会自动被通知。示例代码如下</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> AllApplicationEventListener</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> implements</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ApplicationListener</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ApplicationEvent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> onApplicationEvent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ApplicationEvent</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> applicationEvent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {  </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // process event  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p><strong>Spring 提供了以下五种标准的事件</strong></p><ol><li>上下文更新事件（ContextRefreshedEvent）：该事件会在ApplicationContext 被初始化或者更新时发布。也可以在调用ConfigurableApplicationContext 接口中的<code>#refresh（）</code>方法时被触发</li><li>上下文开始事件（ContextStartedEvent）：当容器调用ConfigurableApplicationContext的<code>#start（）</code>方法开始/重新开始容器时触发该事件。</li><li>上下文停止事件（ContextStoppedEvent）：当容器调用ConfigurableApplicationContext 的<code>#stop()</code>方法停止容器时触发该事件</li><li>上下文关闭事件（ContextCloseEvent）：当ApplicationContext 被关闭时触发该事件。容器被关闭时，其管理的所有单例 Bean 都被销毁</li><li>请求处理事件（RequestHandledEvent）：在Web应用中，当一个Http 请求（request）结束触发该事件</li></ol><h3 id="_10-1-自定义扩展事件" tabindex="-1"><a class="header-anchor" href="#_10-1-自定义扩展事件"><span>10.1 自定义扩展事件</span></a></h3><p>除了以上事件，还可以通过扩展 ApplicationEvent 类来开发<strong>自定义</strong>的事件</p><ol><li><p>实例自定义的事件的类</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> CustomApplicationEvent</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> extends</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ApplicationEvent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> CustomApplicationEvent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Object</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> source</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#C678DD;--shiki-dark:#C678DD;">final</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> msg</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {  </span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        super</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(source);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div></li><li><p>为了监听这个事件，还需要创建一个监听器</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> CustomEventListener</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> implements</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ApplicationListener</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">CustomApplicationEvent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> onApplicationEvent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">CustomApplicationEvent</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> applicationEvent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {  </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // handle event  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div></li><li><p>之后通过ApplicationContext 接口的<code>#publishEvent(Object event)</code>方法，来发布自定义事件</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>// 创建 CustomApplicationEvent 事件</span></span>
<span class="line"><span>CustomApplicationEvent customEvent = new CustomApplicationEvent(applicationContext, &quot;Test message&quot;);</span></span>
<span class="line"><span>// 发布事件</span></span>
<span class="line"><span>applicationContext.publishEvent(customEvent);</span></span></code></pre></div></li></ol>`,42)]))}const r=a(e,[["render",p],["__file","spring-y-ioc-problem.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-ioc-problem.html","title":"Spring IoC常见问题","lang":"zh-CN","frontmatter":{"created":"2024-05-14 07:56","updated":"2024-10-11 16:46","description":"Spring IoC常见问题 1. 概述 Spring 框架的核心是Spring IoC 容器。容器创建 Bean 对象，将它们装配在一起，配置它们并管理它们的完整生命周期 Spring 容器使用依赖注入来管理组成应用程序的 Bean 对象。 容器通过读取提供的配置元数据 Bean Definition来接收对象进行实例化，配置和组装的指令 该配置元数...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-ioc-problem.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Spring IoC常见问题"}],["meta",{"property":"og:description","content":"Spring IoC常见问题 1. 概述 Spring 框架的核心是Spring IoC 容器。容器创建 Bean 对象，将它们装配在一起，配置它们并管理它们的完整生命周期 Spring 容器使用依赖注入来管理组成应用程序的 Bean 对象。 容器通过读取提供的配置元数据 Bean Definition来接收对象进行实例化，配置和组装的指令 该配置元数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring IoC常见问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 概述","slug":"_1-概述","link":"#_1-概述","children":[]},{"level":2,"title":"2. 什么是依赖注入？","slug":"_2-什么是依赖注入","link":"#_2-什么是依赖注入","children":[]},{"level":2,"title":"3. IoC 和 DI 有什么区别？","slug":"_3-ioc-和-di-有什么区别","link":"#_3-ioc-和-di-有什么区别","children":[]},{"level":2,"title":"4. 可以通过多少种方式完成依赖注入？","slug":"_4-可以通过多少种方式完成依赖注入","link":"#_4-可以通过多少种方式完成依赖注入","children":[{"level":3,"title":"4.1 构造函数和setter 注入的优缺点","slug":"_4-1-构造函数和setter-注入的优缺点","link":"#_4-1-构造函数和setter-注入的优缺点","children":[]}]},{"level":2,"title":"5. Spring 中有多少种IoC 容器","slug":"_5-spring-中有多少种ioc-容器","link":"#_5-spring-中有多少种ioc-容器","children":[]},{"level":2,"title":"6. 请介绍下常用的BeanFactory 容器？","slug":"_6-请介绍下常用的beanfactory-容器","link":"#_6-请介绍下常用的beanfactory-容器","children":[]},{"level":2,"title":"7.请介绍下常用的 ApplicationContext 容器？","slug":"_7-请介绍下常用的-applicationcontext-容器","link":"#_7-请介绍下常用的-applicationcontext-容器","children":[]},{"level":2,"title":"8. 列举一些 IoC 的一些好处？","slug":"_8-列举一些-ioc-的一些好处","link":"#_8-列举一些-ioc-的一些好处","children":[]},{"level":2,"title":"9. 简述Spring IoC 的实现机制？","slug":"_9-简述spring-ioc-的实现机制","link":"#_9-简述spring-ioc-的实现机制","children":[]},{"level":2,"title":"10. Spring 框架中有哪些不同类型的事件？","slug":"_10-spring-框架中有哪些不同类型的事件","link":"#_10-spring-框架中有哪些不同类型的事件","children":[{"level":3,"title":"10.1 自定义扩展事件","slug":"_10-1-自定义扩展事件","link":"#_10-1-自定义扩展事件","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.38,"words":1613},"filePathRelative":"posts/Java/Java框架/Spring/spring-y-ioc-problem.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 概述</h2>\\n<p>Spring 框架的核心是Spring IoC 容器。容器创建 Bean 对象，将它们装配在一起，配置它们并管理它们的完整生命周期</p>\\n<ul>\\n<li>Spring 容器使用<strong>依赖注入</strong>来管理组成应用程序的 Bean 对象。</li>\\n<li>容器通过读取提供的<strong>配置元数据</strong> Bean Definition来接收对象进行实例化，配置和组装的指令</li>\\n<li>该配置元数据Bean Definition 可以<strong>通过XML，Java 注解或Java Config代码提供</strong></li>\\n</ul>","autoDesc":true}');export{r as comp,c as data};
