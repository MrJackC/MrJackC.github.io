import{_ as e,c as a,a as i,o as t}from"./app-DQS7qcOs.js";const r={};function o(p,n){return t(),a("div",null,n[0]||(n[0]=[i('<h1 id="spring-bean常见问题" tabindex="-1"><a class="header-anchor" href="#spring-bean常见问题"><span>Spring Bean常见问题</span></a></h1><h2 id="_1-什么是spring-bean" tabindex="-1"><a class="header-anchor" href="#_1-什么是spring-bean"><span>1. 什么是Spring Bean？</span></a></h2><ul><li>Bean 由Spring IoC 容器实例化，配置、装配和管理</li><li>Bean 是基于用户提供给IoC 容器的配置元数据Bean Definition 创建</li></ul><h2 id="_2-spring-有哪些配置方式" tabindex="-1"><a class="header-anchor" href="#_2-spring-有哪些配置方式"><span>2. Spring 有哪些配置方式</span></a></h2><p>单纯从Spring Framework 提供的方式，一共有三种：</p><ol><li>XML 配置文件</li><li>注解配置</li><li>Java Config 配置</li></ol><h2 id="_3-解释什么叫延迟加载" tabindex="-1"><a class="header-anchor" href="#_3-解释什么叫延迟加载"><span>3. 解释什么叫延迟加载？</span></a></h2><p>默认情况下，容器启动之后会将所有作用域为<strong>单例</strong>的 Bean 都创建好，但是有的业务场景我们并不需要它提前都创建好。此时，我们可以在Bean 中设置 <code>lzay-init = &quot;true&quot;</code> 。</p><ul><li>这样，当容器启动之后，作用域为单例的 Bean ，就不在创建。</li><li>而是在获得该 Bean 时，才真正在创建加载。</li></ul>',9)]))}const s=e(r,[["render",o],["__file","spring-y-ioc-bean.html.vue"]]),g=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-ioc-bean.html","title":"Spring Bean常见问题","lang":"zh-CN","frontmatter":{"created":"2024-05-14 07:56","updated":"2024-10-11 16:46","description":"Spring Bean常见问题 1. 什么是Spring Bean？ Bean 由Spring IoC 容器实例化，配置、装配和管理 Bean 是基于用户提供给IoC 容器的配置元数据Bean Definition 创建 2. Spring 有哪些配置方式 单纯从Spring Framework 提供的方式，一共有三种： XML 配置文件 注解配置 J...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-ioc-bean.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Spring Bean常见问题"}],["meta",{"property":"og:description","content":"Spring Bean常见问题 1. 什么是Spring Bean？ Bean 由Spring IoC 容器实例化，配置、装配和管理 Bean 是基于用户提供给IoC 容器的配置元数据Bean Definition 创建 2. Spring 有哪些配置方式 单纯从Spring Framework 提供的方式，一共有三种： XML 配置文件 注解配置 J..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring Bean常见问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是Spring Bean？","slug":"_1-什么是spring-bean","link":"#_1-什么是spring-bean","children":[]},{"level":2,"title":"2. Spring 有哪些配置方式","slug":"_2-spring-有哪些配置方式","link":"#_2-spring-有哪些配置方式","children":[]},{"level":2,"title":"3. 解释什么叫延迟加载？","slug":"_3-解释什么叫延迟加载","link":"#_3-解释什么叫延迟加载","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.71,"words":212},"filePathRelative":"posts/Java/Java框架/Spring/spring-y-ioc-bean.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 什么是Spring Bean？</h2>\\n<ul>\\n<li>Bean 由Spring IoC 容器实例化，配置、装配和管理</li>\\n<li>Bean 是基于用户提供给IoC 容器的配置元数据Bean Definition 创建</li>\\n</ul>\\n<h2>2. Spring 有哪些配置方式</h2>\\n<p>单纯从Spring Framework 提供的方式，一共有三种：</p>\\n<ol>\\n<li>XML 配置文件</li>\\n<li>注解配置</li>\\n<li>Java Config 配置</li>\\n</ol>\\n<h2>3. 解释什么叫延迟加载？</h2>\\n<p>默认情况下，容器启动之后会将所有作用域为<strong>单例</strong>的 Bean 都创建好，但是有的业务场景我们并不需要它提前都创建好。此时，我们可以在Bean 中设置 <code>lzay-init = \\"true\\"</code> 。</p>","autoDesc":true}');export{s as comp,g as data};
