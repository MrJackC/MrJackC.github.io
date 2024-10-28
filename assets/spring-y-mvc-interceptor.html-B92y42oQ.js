import{_ as i,c as a,a as l,o as n}from"./app-DQS7qcOs.js";const e={};function t(r,s){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="springmvc拦截器" tabindex="-1"><a class="header-anchor" href="#springmvc拦截器"><span>SpringMVC拦截器</span></a></h1><h2 id="_1-详细介绍下-spring-mvc-拦截器" tabindex="-1"><a class="header-anchor" href="#_1-详细介绍下-spring-mvc-拦截器"><span>1. 详细介绍下 Spring MVC 拦截器？</span></a></h2><p><code>org.springframework.web.servlet.HandlerInterceptor</code> ，拦截器接口。代码如下：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// HandlerInterceptor.java</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 拦截处理器，在 {</span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@link</span><span style="color:#E5C07B;font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;"> HandlerAdapter</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">handle(HttpServletRequest, HttpServletResponse, Object)</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">} 执行之前</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">default</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> boolean</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> preHandle</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">HttpServletRequest</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> request</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> HttpServletResponse</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> response</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> handler)</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">		throws Exception {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 拦截处理器，在 {</span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@link</span><span style="color:#E5C07B;font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;"> HandlerAdapter</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">handle(HttpServletRequest, HttpServletResponse, Object)</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">} 执行成功之后</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">default</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> postHandle</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">HttpServletRequest</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> request</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> HttpServletResponse</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> response</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> handler</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Nullable</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ModelAndView</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> modelAndView) throws Exception {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 拦截处理器，在 {</span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@link</span><span style="color:#E5C07B;font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;"> HandlerAdapter</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">handle(HttpServletRequest, HttpServletResponse, Object)</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">} 执行完之后，无论成功还是失败</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 并且，只有该处理器 {</span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@link</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">preHandle(HttpServletRequest, HttpServletResponse, Object)</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">} 执行成功之后，才会被执行</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">default</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> afterCompletion</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">HttpServletRequest</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> request</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> HttpServletResponse</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> response</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> handler</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Nullable</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Exception</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ex) throws Exception {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>一共有三个方法，分别为：</p><ul><li>preHandle（...）方法，调用Controller方法之<strong>前</strong>执行</li><li>postHandle（...）方法，调用Controller方法之<strong>后</strong>执行</li><li>afterCompletion(...)方法，处理完Controller 方法返回结果之后执行 <ul><li>例如：页面渲染后</li><li>注意：<strong>无论调用Controller方法是否成功，都会执行</strong></li></ul></li></ul></li><li><p>举个例子：</p><ul><li>当两个拦截器都实现放行操作是，执行顺序<code>preHandle[1] =&gt; preHandle[2] =&gt; postHandle[2] =&gt; postHandle[1] =&gt; afterCompletion[2] =&gt; afterCompletion[1]</code> 。</li><li>当第一个拦截器preHandle(...)返回false 的时候，也就是对其进行拦截时，第二个拦截器是完全不执行的，第一个拦截器只执行 <code>#preHandle(...)</code> 部分。</li><li>当第一个拦截器 <code>#preHandle(...)</code> 方法返回 <code>true</code> ，第二个拦截器 <code>#preHandle(...)</code> 返回 <code>false</code> ，执行顺序为 <code>preHandle[1] =&gt; preHandle[2] =&gt; afterCompletion[1]</code> 。</li></ul></li><li><p>总结：</p><ul><li>preHandle(...)方法，按拦截器定义<strong>顺序</strong>调用，若任一拦截器返回false，则Controller方法不再调用</li><li><code>#postHandle(...)</code> 和 <code>#afterCompletion(...)</code> 方法，按拦截器定义<strong>逆序</strong>调用。</li><li><code>#postHandler(...)</code> 方法，在调用 Controller 方法之<strong>后</strong>执行。</li><li><code>#afterCompletion(...)</code> 方法，只有该拦截器在 <code>#preHandle(...)</code> 方法返回 <code>true</code> 时，才能够被调用，且一定会被调用。为什么“且一定会被调用”呢？即使 <code>#afterCompletion(...)</code> 方法，按拦截器定义<strong>逆序</strong>调用时，前面的拦截器发生异常，后面的拦截器还能够调用，<strong>即无视异常</strong>。</li></ul></li></ul><h2 id="_2-spring-mvc-的拦截器可以做哪些事情" tabindex="-1"><a class="header-anchor" href="#_2-spring-mvc-的拦截器可以做哪些事情"><span>2. Spring MVC 的拦截器可以做哪些事情？</span></a></h2><p>拦截器能做的事情非常非常多，例如：</p><ul><li>记录访问日志</li><li>记录异常日志</li><li>需要登录的请求操作，拦截未登录的用户</li><li>...</li></ul><h2 id="_3-spring-mvc-的拦截器和filter-过滤器有什么差别" tabindex="-1"><a class="header-anchor" href="#_3-spring-mvc-的拦截器和filter-过滤器有什么差别"><span>3. Spring MVC 的拦截器和Filter 过滤器有什么差别</span></a></h2><ul><li><strong>功能相同</strong>：拦截器和Filter 都能实现相应的功能，谁都不比谁强</li><li><strong>容器不同</strong>：拦截器构建在Spring MVC 体系中，Filter 构建在 Servlet 容器之上</li><li><strong>使用便利性不同</strong>：拦截器提供了三个方法，分别在不同的时机执行；过滤器仅提供一个方法，当然也能现实拦截器的执行时机的效果，就是麻烦一些</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="http://svip.iocoder.cn/Spring-MVC/Interview/" target="_blank" rel="noopener noreferrer">过滤器(Filter)和拦截器(Interceptor)的区别</a></p>`,12)]))}const p=i(e,[["render",t],["__file","spring-y-mvc-interceptor.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-mvc-interceptor.html","title":"SpringMVC拦截器","lang":"zh-CN","frontmatter":{"created":"2024-05-14 07:56","updated":"2024-10-11 16:46","description":"SpringMVC拦截器 1. 详细介绍下 Spring MVC 拦截器？ org.springframework.web.servlet.HandlerInterceptor ，拦截器接口。代码如下： 一共有三个方法，分别为： preHandle（...）方法，调用Controller方法之前执行 postHandle（...）方法，调用Contro...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-mvc-interceptor.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"SpringMVC拦截器"}],["meta",{"property":"og:description","content":"SpringMVC拦截器 1. 详细介绍下 Spring MVC 拦截器？ org.springframework.web.servlet.HandlerInterceptor ，拦截器接口。代码如下： 一共有三个方法，分别为： preHandle（...）方法，调用Controller方法之前执行 postHandle（...）方法，调用Contro..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringMVC拦截器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 详细介绍下 Spring MVC 拦截器？","slug":"_1-详细介绍下-spring-mvc-拦截器","link":"#_1-详细介绍下-spring-mvc-拦截器","children":[]},{"level":2,"title":"2. Spring MVC 的拦截器可以做哪些事情？","slug":"_2-spring-mvc-的拦截器可以做哪些事情","link":"#_2-spring-mvc-的拦截器可以做哪些事情","children":[]},{"level":2,"title":"3. Spring MVC 的拦截器和Filter 过滤器有什么差别","slug":"_3-spring-mvc-的拦截器和filter-过滤器有什么差别","link":"#_3-spring-mvc-的拦截器和filter-过滤器有什么差别","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.41,"words":722},"filePathRelative":"posts/Java/Java框架/Spring/spring-y-mvc-interceptor.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 详细介绍下 Spring MVC 拦截器？</h2>\\n<p><code>org.springframework.web.servlet.HandlerInterceptor</code> ，拦截器接口。代码如下：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// HandlerInterceptor.java</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">/**</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> * 拦截处理器，在 {</span><span style=\\"color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic\\">@link</span><span style=\\"color:#E5C07B;font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic\\"> HandlerAdapter</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#</span><span style=\\"color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">handle(HttpServletRequest, HttpServletResponse, Object)</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">} 执行之前</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> */</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">default</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> boolean</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> preHandle</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">(</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">HttpServletRequest</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> request</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> HttpServletResponse</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> response</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> Object</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> handler)</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">\\t\\tthrows Exception {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">\\treturn</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> true</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">/**</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> * 拦截处理器，在 {</span><span style=\\"color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic\\">@link</span><span style=\\"color:#E5C07B;font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic\\"> HandlerAdapter</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#</span><span style=\\"color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">handle(HttpServletRequest, HttpServletResponse, Object)</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">} 执行成功之后</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> */</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">default</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> void</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> postHandle</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">(</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">HttpServletRequest</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> request</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> HttpServletResponse</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> response</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> Object</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> handler</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">\\t\\t@</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">Nullable</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> ModelAndView</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> modelAndView) throws Exception {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">/**</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> * 拦截处理器，在 {</span><span style=\\"color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic\\">@link</span><span style=\\"color:#E5C07B;font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic\\"> HandlerAdapter</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#</span><span style=\\"color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">handle(HttpServletRequest, HttpServletResponse, Object)</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">} 执行完之后，无论成功还是失败</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> *</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> * 并且，只有该处理器 {</span><span style=\\"color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic\\">@link</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> #</span><span style=\\"color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">preHandle(HttpServletRequest, HttpServletResponse, Object)</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">} 执行成功之后，才会被执行</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> */</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">default</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> void</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> afterCompletion</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">(</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">HttpServletRequest</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> request</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> HttpServletResponse</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> response</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> Object</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> handler</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">\\t\\t@</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">Nullable</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> Exception</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> ex) throws Exception {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{p as comp,c as data};
