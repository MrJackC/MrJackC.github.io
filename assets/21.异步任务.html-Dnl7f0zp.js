import{_ as o,c as a,a as r,o as n}from"./app-BfIe-EZg.js";const t={};function s(i,e){return n(),a("div",null,e[0]||(e[0]=[r(`<h1 id="异步任务" tabindex="-1"><a class="header-anchor" href="#异步任务"><span>异步任务</span></a></h1><p><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-job/" target="_blank" rel="noopener noreferrer"><code>yudao-spring-boot-starter-job</code> (opens new window)</a>技术组件，除了提供定时任务的功能，还提供了 Async 异步任务的能力。系统使用异步任务，提升执行效率。例如说：</p><ul><li><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/service/logger/OperateLogServiceImpl.java#L42-L56" target="_blank" rel="noopener noreferrer">操作日志模块 (opens new window)</a>，异步记录【操作日志】</li><li><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-infra/yudao-module-infra-biz/src/main/java/cn/iocoder/yudao/module/infra/service/logger/ApiAccessLogServiceImpl.java#L39-L44" target="_blank" rel="noopener noreferrer">访问日志模块 (opens new window)</a>，异步记录【访问日志】</li></ul><p>友情提示：</p><p>如果你未学习过 Spring 异步任务，可以后续阅读 <a href="https://www.iocoder.cn/Spring-Boot/Async-Job/?yudao" target="_blank" rel="noopener noreferrer">《芋道 Spring Boot 异步任务入门 》 (opens new window)</a>文章。</p><h2 id="_1-async-配置" tabindex="-1"><a class="header-anchor" href="#_1-async-配置"><span><a href="https://doc.iocoder.cn/async-task/#_1-async-%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">#</a>1. Async 配置</span></a></h2><p>在 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-job/src/main/java/cn/iocoder/yudao/framework/quartz/config/YudaoAsyncAutoConfiguration.java" target="_blank" rel="noopener noreferrer">YudaoAsyncAutoConfiguration (opens new window)</a>配置类，设置使用 <a href="https://github.com/alibaba/transmittable-thread-local" target="_blank" rel="noopener noreferrer">TransmittableThreadLocal (opens new window)</a>，解决异步执行时上下文传递的问题。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/异步任务/01.png" alt="YudaoAsyncAutoConfiguration 配置" tabindex="0" loading="lazy"><figcaption>YudaoAsyncAutoConfiguration 配置</figcaption></figure><p>友情提示：</p><p>项目使用到 ThreadLocal 的地方，建议都使用 TransmittableThreadLocal 进行替换。</p><h2 id="_2-引入依赖" tabindex="-1"><a class="header-anchor" href="#_2-引入依赖"><span><a href="https://doc.iocoder.cn/async-task/#_2-%E5%BC%95%E5%85%A5%E4%BE%9D%E8%B5%96" target="_blank" rel="noopener noreferrer">#</a>2. 引入依赖</span></a></h2><p>以访问日志模块为例，讲解它如何使用异步任务，实现异步记录【访问日志】的功能。</p><h3 id="_2-1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_2-1-引入依赖"><span><a href="https://doc.iocoder.cn/async-task/#_2-1-%E5%BC%95%E5%85%A5%E4%BE%9D%E8%B5%96" target="_blank" rel="noopener noreferrer">#</a>2.1 引入依赖</span></a></h3><p>在 <code>yudao-module-system-infra</code> 模块中，引入 <code>yudao-spring-boot-starter-job</code> 技术组件。如下所示：</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;cn.iocoder.boot&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;yudao-spring-boot-starter-job&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h3 id="_2-2-添加-async-注解" tabindex="-1"><a class="header-anchor" href="#_2-2-添加-async-注解"><span><a href="https://doc.iocoder.cn/async-task/#_2-2-%E6%B7%BB%E5%8A%A0-async-%E6%B3%A8%E8%A7%A3" target="_blank" rel="noopener noreferrer">#</a>2.2 添加 @Async 注解</span></a></h3><p>在 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-infra/yudao-module-infra-biz/src/main/java/cn/iocoder/yudao/module/infra/service/logger/ApiAccessLogServiceImpl.java#L39-L44" target="_blank" rel="noopener noreferrer">ApiAccessLogServiceImpl (opens new window)</a>的 <code>#createApiAccessLogAsync(...)</code> 方法上，添加 <code>@Async</code> 注解，声明它要异步执行。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/异步任务/02.png" alt="ApiAccessLogServiceImpl 类" tabindex="0" loading="lazy"><figcaption>ApiAccessLogServiceImpl 类</figcaption></figure><h3 id="_2-3-测试调用" tabindex="-1"><a class="header-anchor" href="#_2-3-测试调用"><span><a href="https://doc.iocoder.cn/async-task/#_2-3-%E6%B5%8B%E8%AF%95%E8%B0%83%E7%94%A8" target="_blank" rel="noopener noreferrer">#</a>2.3 测试调用</span></a></h3><p>随便请求一个 RESTful API 接口，可以看到在异步任务的线程池中，进行了访问日志的记录。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/异步任务/03.png" alt="IDEA 控制台" tabindex="0" loading="lazy"><figcaption>IDEA 控制台</figcaption></figure><p>上次更新: 2022/04/22, 00:36:05</p>`,22)]))}const p=o(t,[["render",s],["__file","21.异步任务.html.vue"]]),l=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/21.%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1.html","title":"异步任务","lang":"zh-CN","frontmatter":{"description":"异步任务 yudao-spring-boot-starter-job (opens new window)技术组件，除了提供定时任务的功能，还提供了 Async 异步任务的能力。系统使用异步任务，提升执行效率。例如说： 操作日志模块 (opens new window)，异步记录【操作日志】 访问日志模块 (opens new window)，异步记录...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/21.%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"异步任务"}],["meta",{"property":"og:description","content":"异步任务 yudao-spring-boot-starter-job (opens new window)技术组件，除了提供定时任务的功能，还提供了 Async 异步任务的能力。系统使用异步任务，提升执行效率。例如说： 操作日志模块 (opens new window)，异步记录【操作日志】 访问日志模块 (opens new window)，异步记录..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1/01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-24T05:58:00.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-24T05:58:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"异步任务\\",\\"image\\":[\\"https://doc.iocoder.cn/img/%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1/01.png\\",\\"https://doc.iocoder.cn/img/%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1/02.png\\",\\"https://doc.iocoder.cn/img/%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1/03.png\\"],\\"dateModified\\":\\"2024-11-24T05:58:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#1. Async 配置","slug":"_1-async-配置","link":"#_1-async-配置","children":[]},{"level":2,"title":"#2. 引入依赖","slug":"_2-引入依赖","link":"#_2-引入依赖","children":[{"level":3,"title":"#2.1 引入依赖","slug":"_2-1-引入依赖","link":"#_2-1-引入依赖","children":[]},{"level":3,"title":"#2.2 添加 @Async 注解","slug":"_2-2-添加-async-注解","link":"#_2-2-添加-async-注解","children":[]},{"level":3,"title":"#2.3 测试调用","slug":"_2-3-测试调用","link":"#_2-3-测试调用","children":[]}]}],"git":{"createdTime":1732174913000,"updatedTime":1732427880000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.7,"words":510},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/2.后端手册/21.异步任务.md","localizedDate":"2024年11月21日","excerpt":"\\n<p><a href=\\"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-job/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>yudao-spring-boot-starter-job</code> (opens new window)</a>技术组件，除了提供定时任务的功能，还提供了 Async 异步任务的能力。系统使用异步任务，提升执行效率。例如说：</p>\\n<ul>\\n<li><a href=\\"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/service/logger/OperateLogServiceImpl.java#L42-L56\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">操作日志模块 (opens new window)</a>，异步记录【操作日志】</li>\\n<li><a href=\\"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-infra/yudao-module-infra-biz/src/main/java/cn/iocoder/yudao/module/infra/service/logger/ApiAccessLogServiceImpl.java#L39-L44\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">访问日志模块 (opens new window)</a>，异步记录【访问日志】</li>\\n</ul>","autoDesc":true}');export{p as comp,l as data};
