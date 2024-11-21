import{_ as o,c as n,a as i,o as t}from"./app-CZJgH_ea.js";const e={};function p(a,r){return t(),n("div",null,r[0]||(r[0]=[i('<h1 id="springboot入门-springboot简介" tabindex="-1"><a class="header-anchor" href="#springboot入门-springboot简介"><span>SpringBoot入门 - SpringBoot简介</span></a></h1><blockquote><p>为什么有了SpringFramework还会诞生SpringBoot？简单而言，因为虽然Spring的组件代码是轻量级的，但它的配置却是重量级的；所以SpringBoot的设计策略是通过<strong>开箱即用</strong>和<strong>约定大于配置</strong> 来解决配置重的问题的。</p></blockquote><h2 id="_1-springframework解决了什么问题-没有解决什么问题" tabindex="-1"><a class="header-anchor" href="#_1-springframework解决了什么问题-没有解决什么问题"><span>1. SpringFramework解决了什么问题，没有解决什么问题？</span></a></h2><h3 id="_1-1-springframework解决了什么问题" tabindex="-1"><a class="header-anchor" href="#_1-1-springframework解决了什么问题"><span>1.1 SpringFramework解决了什么问题？</span></a></h3><p>Spring是Java企业版（Java Enterprise Edition，JEE，也称J2EE）的轻量级代替品。无需开发重量级的EnterpriseJavaBean（EJB），Spring为企业级Java开发提供了一种相对简单的方法，通过依赖注入和面向切面编程，用简单的Java对象（Plain Old Java Object，POJO）实现了EJB的功能。</p><ol><li>使用Spring的IOC容器,将对象之间的依赖关系交给Spring,降低组件之间的耦合性,让我们更专注于应用逻辑</li><li>可以提供众多服务,事务管理,WS等</li><li>AOP的很好支持,方便面向切面编程。</li><li>对主流的框架提供了很好的集成支持,如Hibernate,Struts2,JPA等</li><li>Spring DI机制降低了业务对象替换的复杂性。</li><li>Spring属于低侵入,代码污染极低。</li><li>Spring的高度可开放性,并不强制依赖于Spring,开发者可以自由选择Spring部分或全部</li></ol><h3 id="_1-2-springframework没有解决了什么问题" tabindex="-1"><a class="header-anchor" href="#_1-2-springframework没有解决了什么问题"><span>1.2 SpringFramework没有解决了什么问题？</span></a></h3><p><strong>虽然Spring的组件代码是轻量级的，但它的配置却是重量级的</strong>。</p><ol><li>一开始，Spring用XML配置，而且是很多XML配置。</li><li>Spring 2.5引入了基于注解的组件扫描，这消除了大量针对应用程序自身组件的显式XML配置。</li><li>Spring 3.0引入了基于Java的配置，这是一种类型安全的可重构配置方式，可以代替XML。</li></ol><p>所有这些配置都代表了开发时的损耗。因为在思考Spring特性配置和解决业务问题之间需要进行思维切换，所以编写配置挤占了编写应用程序逻辑的时间。和所有框架一样，Spring实用，但与此同时它要求的回报也不少。</p><p>除此之外，<strong>项目的依赖管理也是一件耗时耗力的事</strong>情。在环境搭建时，需要分析要导入哪些库的坐标，而且还需要分析导入与之有依赖关系的其他库的坐标，<strong>一旦选错了依赖的版本，随之而来的不兼容问题就会严重阻碍项目的开发进度</strong>。</p><ol><li>jsp中要写很多代码、控制器过于灵活,缺少一个公用控制器</li><li>Spring不支持分布式,这也是EJB仍然在用的原因之一。</li></ol><h2 id="_2-sringboot的概述" tabindex="-1"><a class="header-anchor" href="#_2-sringboot的概述"><span>2. SringBoot的概述</span></a></h2><h3 id="_2-1-springboot解决上述spring的缺点" tabindex="-1"><a class="header-anchor" href="#_2-1-springboot解决上述spring的缺点"><span>2.1 SpringBoot解决上述Spring的缺点</span></a></h3><p>SpringBoot对上述Spring的缺点进行的改善和优化，基于约定优于配置的思想，可以让开发人员不必在配置与逻辑业务之间进行思维的切换，全身心的投入到逻辑业务的代码编写中，从而大大提高了开发的效率，一定程度上缩短了项目周期。</p><h3 id="_2-2-springboot的特点" tabindex="-1"><a class="header-anchor" href="#_2-2-springboot的特点"><span>2.2 SpringBoot的特点</span></a></h3><ol><li>为基于Spring的开发提供更快的入门体验</li><li>开箱即用，没有代码生成，也无需XML配置。同时也可以修改默认值来满足特定的需求</li><li>提供了一些大型项目中常见的非功能性特性，如嵌入式服务器、安全、指标，健康检测、外部配置等</li></ol><p>SpringBoot不是对Spring功能上的增强，而是提供了一种快速使用Spring的方式</p><h3 id="_2-3-springboot的核心功能" tabindex="-1"><a class="header-anchor" href="#_2-3-springboot的核心功能"><span>2.3 SpringBoot的核心功能</span></a></h3><ul><li><p><strong>起步依赖</strong> 起步依赖本质上是一个Maven项目对象模型（Project Object Model，POM），定义了对其他库的传递依赖，这些东西加在一起即支持某项功能。</p><blockquote><p>简单的说，起步依赖就是将具备某种功能的坐标打包到一起，并提供一些默认的功能。</p></blockquote></li><li><p><strong>自动配置</strong></p><p>Spring Boot的自动配置是一个运行时（更准确地说，是应用程序启动时）的过程，考虑了众多因素，才决定Spring配置应该用哪个，不该用哪个。该过程是Spring自动完成的。</p></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/spring/springboot/springboot-x-overview.html" target="_blank" rel="noopener noreferrer">SpringBoot入门 - SpringBoot简介</a></p>',22)]))}const s=o(e,[["render",p],["__file","springboot-x-overview.html.vue"]]),l=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-x-overview.html","title":"SpringBoot入门 - SpringBoot简介","lang":"zh-CN","frontmatter":{"order":10,"created":"2024-05-14 07:56","updated":"2024-10-11 16:46","description":"SpringBoot入门 - SpringBoot简介 为什么有了SpringFramework还会诞生SpringBoot？简单而言，因为虽然Spring的组件代码是轻量级的，但它的配置却是重量级的；所以SpringBoot的设计策略是通过开箱即用和约定大于配置 来解决配置重的问题的。 1. SpringFramework解决了什么问题，没有解决什么...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-x-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"SpringBoot入门 - SpringBoot简介"}],["meta",{"property":"og:description","content":"SpringBoot入门 - SpringBoot简介 为什么有了SpringFramework还会诞生SpringBoot？简单而言，因为虽然Spring的组件代码是轻量级的，但它的配置却是重量级的；所以SpringBoot的设计策略是通过开箱即用和约定大于配置 来解决配置重的问题的。 1. SpringFramework解决了什么问题，没有解决什么..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot入门 - SpringBoot简介\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. SpringFramework解决了什么问题，没有解决什么问题？","slug":"_1-springframework解决了什么问题-没有解决什么问题","link":"#_1-springframework解决了什么问题-没有解决什么问题","children":[{"level":3,"title":"1.1 SpringFramework解决了什么问题？","slug":"_1-1-springframework解决了什么问题","link":"#_1-1-springframework解决了什么问题","children":[]},{"level":3,"title":"1.2 SpringFramework没有解决了什么问题？","slug":"_1-2-springframework没有解决了什么问题","link":"#_1-2-springframework没有解决了什么问题","children":[]}]},{"level":2,"title":"2. SringBoot的概述","slug":"_2-sringboot的概述","link":"#_2-sringboot的概述","children":[{"level":3,"title":"2.1 SpringBoot解决上述Spring的缺点","slug":"_2-1-springboot解决上述spring的缺点","link":"#_2-1-springboot解决上述spring的缺点","children":[]},{"level":3,"title":"2.2 SpringBoot的特点","slug":"_2-2-springboot的特点","link":"#_2-2-springboot的特点","children":[]},{"level":3,"title":"2.3 SpringBoot的核心功能","slug":"_2-3-springboot的核心功能","link":"#_2-3-springboot的核心功能","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.72,"words":1116},"filePathRelative":"posts/Java/Java框架/SpringBoot/springboot-x-overview.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>为什么有了SpringFramework还会诞生SpringBoot？简单而言，因为虽然Spring的组件代码是轻量级的，但它的配置却是重量级的；所以SpringBoot的设计策略是通过<strong>开箱即用</strong>和<strong>约定大于配置</strong> 来解决配置重的问题的。</p>\\n</blockquote>\\n<h2>1. SpringFramework解决了什么问题，没有解决什么问题？</h2>\\n<h3>1.1 SpringFramework解决了什么问题？</h3>\\n<p>Spring是Java企业版（Java Enterprise Edition，JEE，也称J2EE）的轻量级代替品。无需开发重量级的EnterpriseJavaBean（EJB），Spring为企业级Java开发提供了一种相对简单的方法，通过依赖注入和面向切面编程，用简单的Java对象（Plain Old Java Object，POJO）实现了EJB的功能。</p>","autoDesc":true}');export{s as comp,l as data};
