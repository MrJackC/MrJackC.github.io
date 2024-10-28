import{_ as n,c as s,a as i,o}from"./app-BQBjlK2G.js";const e={};function r(t,a){return o(),s("div",null,a[0]||(a[0]=[i(`<h1 id="configuration注解" tabindex="-1"><a class="header-anchor" href="#configuration注解"><span>@Configuration注解</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>@Conﬁguration注释类，<strong>表明类其主要目的是作为bean定义的源</strong>；</p><p>一个类声明一个或多个 @Bean方法，并且可以由Spring容器进行处理，以在运行时为这些bean生成bean定义和服务请求，例如：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Configuration</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> AppConfig</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Bean</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> MyBean</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> myBean</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // instantiate, configure and return bean ...</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="_2-configuration-内部实现" tabindex="-1"><a class="header-anchor" href="#_2-configuration-内部实现"><span>2. @Configuration 内部实现</span></a></h2><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Target</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ElementType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">TYPE</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Retention</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RetentionPolicy</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RUNTIME</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Documented</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Component</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> @</span><span style="color:#C678DD;--shiki-dark:#C678DD;">interface</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Configuration</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">   String</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> value</span><span style="color:#E06C75;--shiki-dark:#E06C75;">() </span><span style="color:#C678DD;--shiki-dark:#C678DD;">default</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><p>可以看到这个 <code>@Component</code> 注解, 意味也将会注册为bean, 其内部也可以依赖注入。 (换个方式说,一般Bean能用的东西,它也能用) 例如: @Autowired、@Inject、@Scope等</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.jianshu.com/p/721c76c1529c" target="_blank" rel="noopener noreferrer">Spring @Configuration 注解介绍</a></p>`,10)]))}const l=n(e,[["render",r],["__file","spring-y-annotation-configuration.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-annotation-configuration.html","title":"@Configuration注解","lang":"zh-CN","frontmatter":{"created":"2024-05-14 07:56","updated":"2024-10-11 16:46","description":"@Configuration注解 1. 简介 @Conﬁguration注释类，表明类其主要目的是作为bean定义的源； 一个类声明一个或多个 @Bean方法，并且可以由Spring容器进行处理，以在运行时为这些bean生成bean定义和服务请求，例如： 2. @Configuration 内部实现 可以看到这个 @Component 注解, 意味也将...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-annotation-configuration.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"@Configuration注解"}],["meta",{"property":"og:description","content":"@Configuration注解 1. 简介 @Conﬁguration注释类，表明类其主要目的是作为bean定义的源； 一个类声明一个或多个 @Bean方法，并且可以由Spring容器进行处理，以在运行时为这些bean生成bean定义和服务请求，例如： 2. @Configuration 内部实现 可以看到这个 @Component 注解, 意味也将..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"@Configuration注解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. @Configuration 内部实现","slug":"_2-configuration-内部实现","link":"#_2-configuration-内部实现","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.61,"words":183},"filePathRelative":"posts/Java/Java框架/Spring/spring-y-annotation-configuration.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>@Conﬁguration注释类，<strong>表明类其主要目的是作为bean定义的源</strong>；</p>\\n<p>一个类声明一个或多个 @Bean方法，并且可以由Spring容器进行处理，以在运行时为这些bean生成bean定义和服务请求，例如：</p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">@</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">Configuration</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">public</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> class</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> AppConfig</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    @</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">Bean</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">    public</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> MyBean</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> myBean</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">()</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">        // instantiate, configure and return bean ...</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n</div>","autoDesc":true}');export{l as comp,c as data};
