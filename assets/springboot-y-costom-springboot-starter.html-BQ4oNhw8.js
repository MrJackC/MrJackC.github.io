import{_ as a,c as n,a as i,o as l}from"./app-tJW29Kmg.js";const r={};function o(e,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="自定义springboot-starter实现自动化配置" tabindex="-1"><a class="header-anchor" href="#自定义springboot-starter实现自动化配置"><span>自定义SpringBoot Starter实现自动化配置</span></a></h1><p>自动化配置需满足两个条件</p><ol><li>能够生成Bean，并注册到Bean容器中</li><li>能够自动配置项目所需要的配置</li></ol><h2 id="_1-自定义步骤" tabindex="-1"><a class="header-anchor" href="#_1-自定义步骤"><span>1. 自定义步骤</span></a></h2><h3 id="_1-1-引入springboot-自动化配置依赖" tabindex="-1"><a class="header-anchor" href="#_1-1-引入springboot-自动化配置依赖"><span>1.1 引入SpringBoot 自动化配置依赖：</span></a></h3><p>引入 SpringBoot 自动化配置依赖：</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependencies</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;org.springframework.boot&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;spring-boot-autoconfigure&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;1.5.9.RELEASE&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependencies</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h3 id="_1-2-创建-service" tabindex="-1"><a class="header-anchor" href="#_1-2-创建-service"><span>1.2 创建 Service</span></a></h3><p>spring-boot-starter-helloworld 只是作为例子演示自定义 starter 的过程，实现的功能很简单就是创建一个 HelloworldService 的，并配置 sayHello() 方法打印的语句。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> HelloworldService</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> words</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getWords</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> words;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> setWords</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> words</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">words</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> words;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> sayHello</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">     return</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;hello, &quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> words;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-创建属性类" tabindex="-1"><a class="header-anchor" href="#_1-3-创建属性类"><span>1.3 创建属性类</span></a></h3><p>创建属性类，prefix = “helloworld”代表该项目在属性文件中配置的前缀，即可以在属性文件中通过 helloworld.words=springboot，就可以改变属性类字段 words 的值了。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ConfigurationProperties</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">prefix</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;helloworld&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> HelloworldProperties</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> final</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> DEFAULT_WORDS </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;world&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> words </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> DEFAULT_WORDS</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getWords</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> words;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> setWords</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> words</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">words</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> words;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="_1-4-创建自动配置类" tabindex="-1"><a class="header-anchor" href="#_1-4-创建自动配置类"><span>1.4 创建自动配置类</span></a></h3><p>创建自动化配置类，这个相当于就是一个普通的 Java 配置类，可以在这里创建 Bean，并可获得与 application.properties 属性文件相对应的属性类的 Bean。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 相当于一个普通的 java 配置类</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Configuration</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 当 HelloworldService 在类路径的条件下</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ConditionalOnClass</span><span style="color:#E06C75;--shiki-dark:#E06C75;">({</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">HelloworldService</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#E06C75;--shiki-dark:#E06C75;">})</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 将 application.properties 的相关的属性字段与该类一一对应，并生成 Bean</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">EnableConfigurationProperties</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">HelloworldProperties</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> HelloworldAutoConfiguration</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 注入属性类</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Autowired</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> HelloworldProperties</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> hellowordProperties</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Bean</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 当容器没有这个 Bean 的时候才创建这个 Bean</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ConditionalOnMissingBean</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">HelloworldService</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> HelloworldService</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> helloworldService</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    HelloworldService</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> helloworldService</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> HelloworldService</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    helloworldService</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setWords</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">hellowordProperties</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getWords</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> helloworldService;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-meta-inf-目录下创建-spring-factories" tabindex="-1"><a class="header-anchor" href="#_1-5-meta-inf-目录下创建-spring-factories"><span>1.5 META-INF 目录下创建 spring.factories</span></a></h3><p>在 META-INF 目录下创建 spring.factories，这个属性文件可重要啦，因为 SpringBoot 自动化配置最终就是要扫描 META-INF/spring.factories 来加载项目的自动化配置类。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"># </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Auto</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Configure</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">org</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">springframework</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">boot</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">autoconfigure</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">EnableAutoConfiguration</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">com</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">objcoding</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">starters</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">helloworld</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">HelloworldAutoConfiguration</span></span></code></pre></div><h2 id="_2-引用starter" tabindex="-1"><a class="header-anchor" href="#_2-引用starter"><span>2. 引用Starter</span></a></h2><p>为了引入 starter，我在这里再创建一个 spring-boot-starter-helloworld-sample 项目。</p><p>添加 spring-boot-starter-helloworld 起步依赖：</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;com.objcoding&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;spring-boot-starter-helloworld&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;1.0-SNAPSHOT&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>在 application.properties 中添加属性：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>helloworld.words=springboot</span></span></code></pre></div><p>在 SpringBoot 主程序中 注入 helloworldService</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RestController</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">SpringBootApplication</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> HelloworldApplication</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Autowired</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> HelloworldService</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> helloworldService</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RequestMapping</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;/&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> sayHello</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> helloworldService</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sayHello</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    SpringApplication</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">run</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">HelloworldApplication</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, args);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问 <a href="http://localhost:8080/%EF%BC%8C%E6%89%93%E5%8D%B0%E4%BB%A5%E4%B8%8B%E7%BB%93%E6%9E%9C%EF%BC%9A" target="_blank" rel="noopener noreferrer">http://localhost:8080/，打印以下结果：</a></p><figure><img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232158879.png" alt="image-20200321000541904" tabindex="0" loading="lazy"><figcaption>image-20200321000541904</figcaption></figure><h2 id="面试真题" tabindex="-1"><a class="header-anchor" href="#面试真题"><span>面试真题</span></a></h2><p>你自己有定义过一些（Springboot）自动化配置吗？</p><blockquote><p>我之前做过xxx使用到了，他的创建步骤</p><ol><li>使用 @ConfigurationProperties 创建属性类</li><li>主要通过@Configuration 和 @Bean 实现 Java显示配置，并注入属性</li><li>创建 META-INF/spring.factories 文件，添加这个允许自动配置的类</li></ol></blockquote><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://objcoding.com/2018/02/02/Costom-SpringBoot-Starter/" target="_blank" rel="noopener noreferrer">实战|如何自定义SpringBoot Starter？</a></p>`,34)]))}const B=a(r,[["render",o],["__file","springboot-y-costom-springboot-starter.html.vue"]]),t=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-y-costom-springboot-starter.html","title":"自定义SpringBoot Starter实现自动化配置","lang":"zh-CN","frontmatter":{"aliases":"自定义SpringBoot Starter实现自动化配置","tags":null,"cssclass":null,"source":null,"created":"2024-04-23 20:40","updated":"2024-10-11 16:46","description":"自定义SpringBoot Starter实现自动化配置 自动化配置需满足两个条件 能够生成Bean，并注册到Bean容器中 能够自动配置项目所需要的配置 1. 自定义步骤 1.1 引入SpringBoot 自动化配置依赖： 引入 SpringBoot 自动化配置依赖： 1.2 创建 Service spring-boot-starter-hellow...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-y-costom-springboot-starter.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"自定义SpringBoot Starter实现自动化配置"}],["meta",{"property":"og:description","content":"自定义SpringBoot Starter实现自动化配置 自动化配置需满足两个条件 能够生成Bean，并注册到Bean容器中 能够自动配置项目所需要的配置 1. 自定义步骤 1.1 引入SpringBoot 自动化配置依赖： 引入 SpringBoot 自动化配置依赖： 1.2 创建 Service spring-boot-starter-hellow..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232158879.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-01T03:19:07.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-01T03:19:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自定义SpringBoot Starter实现自动化配置\\",\\"image\\":[\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232158879.png\\"],\\"dateModified\\":\\"2024-11-01T03:19:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 自定义步骤","slug":"_1-自定义步骤","link":"#_1-自定义步骤","children":[{"level":3,"title":"1.1 引入SpringBoot 自动化配置依赖：","slug":"_1-1-引入springboot-自动化配置依赖","link":"#_1-1-引入springboot-自动化配置依赖","children":[]},{"level":3,"title":"1.2 创建 Service","slug":"_1-2-创建-service","link":"#_1-2-创建-service","children":[]},{"level":3,"title":"1.3 创建属性类","slug":"_1-3-创建属性类","link":"#_1-3-创建属性类","children":[]},{"level":3,"title":"1.4 创建自动配置类","slug":"_1-4-创建自动配置类","link":"#_1-4-创建自动配置类","children":[]},{"level":3,"title":"1.5 META-INF 目录下创建 spring.factories","slug":"_1-5-meta-inf-目录下创建-spring-factories","link":"#_1-5-meta-inf-目录下创建-spring-factories","children":[]}]},{"level":2,"title":"2. 引用Starter","slug":"_2-引用starter","link":"#_2-引用starter","children":[]},{"level":2,"title":"面试真题","slug":"面试真题","link":"#面试真题","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1730431147000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":2}]},"readingTime":{"minutes":2.38,"words":713},"filePathRelative":"posts/Java/Java框架/SpringBoot/springboot-y-costom-springboot-starter.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>自动化配置需满足两个条件</p>\\n<ol>\\n<li>能够生成Bean，并注册到Bean容器中</li>\\n<li>能够自动配置项目所需要的配置</li>\\n</ol>\\n<h2>1. 自定义步骤</h2>\\n<h3>1.1 引入SpringBoot 自动化配置依赖：</h3>\\n<p>引入 SpringBoot 自动化配置依赖：</p>\\n<div class=\\"language-xml\\" data-ext=\\"xml\\" data-title=\\"xml\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">dependencies</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">dependency</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">groupId</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;org.springframework.boot&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">groupId</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">artifactId</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;spring-boot-autoconfigure&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">artifactId</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">version</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;1.5.9.RELEASE&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">version</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  &lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">dependency</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">dependencies</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span></code></pre>\\n</div>","autoDesc":true}');export{B as comp,t as data};
