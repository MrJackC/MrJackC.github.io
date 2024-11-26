import{_ as s,c as e,a as o,o as n}from"./app-JRvFIbSa.js";const r={};function t(i,a){return n(),e("div",null,a[0]||(a[0]=[o(`<h1 id="幂等性-防重复提交" tabindex="-1"><a class="header-anchor" href="#幂等性-防重复提交"><span>幂等性（防重复提交）</span></a></h1><p><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-protection/" target="_blank" rel="noopener noreferrer"><code>yudao-spring-boot-starter-protection</code> (opens new window)</a>技术组件，由它的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-protection/src/main/java/cn/iocoder/yudao/framework/idempotent/" target="_blank" rel="noopener noreferrer"><code>idempotent</code> (opens new window)</a>包，提供声明式的幂等特性，可防止重复请求。例如说，用户快速的双击了某个按钮，前端没有禁用该按钮，导致发送了两次重复的请求。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// UserController.java</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Idempotent</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">timeout</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> timeUnit</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> TimeUnit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">SECONDS</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> message</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;正在添加用户中，请勿重复提交&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">PostMapping</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;/user/create&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> createUser</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">User</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> user){</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    userService</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">createUser</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(user);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;添加成功&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><h2 id="_1-实现原理" tabindex="-1"><a class="header-anchor" href="#_1-实现原理"><span><a href="https://doc.iocoder.cn/idempotent/#_1-%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86" target="_blank" rel="noopener noreferrer">#</a>1. 实现原理</span></a></h2><p>它的实现原理非常简单，针对相同参数的方法，一段时间内，有且仅能执行一次。执行流程如下：</p><p>① 在方法执行前，根据参数对应的 Key 查询是否存在。</p><ul><li>如果<strong>存在</strong>，说明正在执行中，则进行报错。</li><li>如果<strong>不在</strong>，则计算参数对应的 Key，存储到 Redis 中，并设置过期时间，即标记正在执行中。</li></ul><p>默认参数的 Redis Key 的计算规则由 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-protection/src/main/java/cn/iocoder/yudao/framework/idempotent/core/keyresolver/impl/DefaultIdempotentKeyResolver.java" target="_blank" rel="noopener noreferrer">DefaultIdempotentKeyResolver (opens new window)</a>实现，使用 MD5(方法名 + 方法参数)，避免 Redis Key 过长。</p><p>② 方法执行完成，<strong>不会</strong>主动删除参数对应的 Key。</p><p>如果希望会<strong>主动</strong>删除 Key，可以使用 <a href="https://doc.iocoder.cn/distributed-lock" target="_blank" rel="noopener noreferrer">《开发指南 —— 分布式锁》</a> 提供的 <code>@Lock</code> 来实现幂等性。</p><p>🙂 从本质上来说，<code>idempotent</code> 包提供的幂等特性，本质上也是基于 Redis 实现的分布式锁。</p><p>③ 如果方法执行时间较长，超过 Key 的过期时间，则 Redis 会自动删除对应的 Key。因此，需要大概评估下，避免方法的执行时间超过过期时间。</p><h2 id="_2-idempotent-注解" tabindex="-1"><a class="header-anchor" href="#_2-idempotent-注解"><span><a href="https://doc.iocoder.cn/idempotent/#_2-idempotent-%E6%B3%A8%E8%A7%A3" target="_blank" rel="noopener noreferrer">#</a>2. <code>@Idempotent</code> 注解</span></a></h2><p><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-protection/src/main/java/cn/iocoder/yudao/framework/idempotent/core/annotation/Idempotent.java" target="_blank" rel="noopener noreferrer"><code>@Idempotent</code> (opens new window)</a>注解，声明在方法上，表示该方法需要开启幂等性。代码如下：</p><figure><img src="https://doc.iocoder.cn/img/幂等性/01.png" alt=" 注解" tabindex="0" loading="lazy"><figcaption> 注解</figcaption></figure><p>① 对应的 AOP 切面是 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-protection/src/main/java/cn/iocoder/yudao/framework/idempotent/core/aop/IdempotentAspect.java" target="_blank" rel="noopener noreferrer">IdempotentAspect (opens new window)</a>类，核心就 10 行左右的代码，如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/幂等性/02.png" alt="IdempotentAspect 切面" tabindex="0" loading="lazy"><figcaption>IdempotentAspect 切面</figcaption></figure><p>② 对应的 Redis Key 的前缀是 <code>idempotent:%s</code>，可见 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-protection/src/main/java/cn/iocoder/yudao/framework/idempotent/core/redis/IdempotentRedisDAO.java" target="_blank" rel="noopener noreferrer">IdempotentRedisDAO (opens new window)</a>类，如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/幂等性/03.png" alt="IdempotentRedisDAO 存储" tabindex="0" loading="lazy"><figcaption>IdempotentRedisDAO 存储</figcaption></figure><h2 id="_3-使用示例" tabindex="-1"><a class="header-anchor" href="#_3-使用示例"><span><a href="https://doc.iocoder.cn/idempotent/#_3-%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B" target="_blank" rel="noopener noreferrer">#</a>3. 使用示例</span></a></h2><p>本小节，我们实现 <code>/admin-api/infra/test-demo/get</code> RESTful API 接口的幂等性。</p><p>① 在 <code>pom.xml</code> 文件中，引入 <code>yudao-spring-boot-starter-protection</code> 依赖。</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;cn.iocoder.boot&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;yudao-spring-boot-starter-protection&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>② 在 <code>/admin-api/infra/test-demo/get</code> RESTful API 接口的对应方法上，添加 <code>@Idempotent</code> 注解。代码如下：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// TestDemoController.java</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">GetMapping</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;/get&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Idempotent</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">timeout</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> message</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;重复请求，请稍后重试&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> CommonResult</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">TestDemoRespVO</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getTestDemo</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RequestParam</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;id&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> id) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // ... 省略代码</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><p>③ 调用 <code>/admin-api/infra/test-demo/get</code> RESTful API 接口，执行成功。</p><figure><img src="https://doc.iocoder.cn/img/幂等性/04.png" alt="调用成功" tabindex="0" loading="lazy"><figcaption>调用成功</figcaption></figure><p>④ 再次调用 <code>/admin-api/infra/test-demo/get</code> RESTful API 接口，被幂等性拦截，执行失败。</p><div class="language-json" data-ext="json" data-title="json"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  &quot;code&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">900</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  &quot;data&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  &quot;msg&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;重复请求，请稍后重试&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>上次更新: 2022/04/16, 01:42:17</p>`,30)]))}const l=s(r,[["render",t],["__file","26.幂等性（防重复提交）.html.vue"]]),d=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/26.%E5%B9%82%E7%AD%89%E6%80%A7%EF%BC%88%E9%98%B2%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%EF%BC%89.html","title":"幂等性（防重复提交）","lang":"zh-CN","frontmatter":{"description":"幂等性（防重复提交） yudao-spring-boot-starter-protection (opens new window)技术组件，由它的 idempotent (opens new window)包，提供声明式的幂等特性，可防止重复请求。例如说，用户快速的双击了某个按钮，前端没有禁用该按钮，导致发送了两次重复的请求。 #1. 实现原理 它的...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/26.%E5%B9%82%E7%AD%89%E6%80%A7%EF%BC%88%E9%98%B2%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"幂等性（防重复提交）"}],["meta",{"property":"og:description","content":"幂等性（防重复提交） yudao-spring-boot-starter-protection (opens new window)技术组件，由它的 idempotent (opens new window)包，提供声明式的幂等特性，可防止重复请求。例如说，用户快速的双击了某个按钮，前端没有禁用该按钮，导致发送了两次重复的请求。 #1. 实现原理 它的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/%E5%B9%82%E7%AD%89%E6%80%A7/01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T07:41:53.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-21T07:41:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"幂等性（防重复提交）\\",\\"image\\":[\\"https://doc.iocoder.cn/img/%E5%B9%82%E7%AD%89%E6%80%A7/01.png\\",\\"https://doc.iocoder.cn/img/%E5%B9%82%E7%AD%89%E6%80%A7/02.png\\",\\"https://doc.iocoder.cn/img/%E5%B9%82%E7%AD%89%E6%80%A7/03.png\\",\\"https://doc.iocoder.cn/img/%E5%B9%82%E7%AD%89%E6%80%A7/04.png\\"],\\"dateModified\\":\\"2024-11-21T07:41:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#1. 实现原理","slug":"_1-实现原理","link":"#_1-实现原理","children":[]},{"level":2,"title":"#2. @Idempotent 注解","slug":"_2-idempotent-注解","link":"#_2-idempotent-注解","children":[]},{"level":2,"title":"#3. 使用示例","slug":"_3-使用示例","link":"#_3-使用示例","children":[]}],"git":{"createdTime":1732174913000,"updatedTime":1732174913000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.58,"words":774},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/2.后端手册/26.幂等性（防重复提交）.md","localizedDate":"2024年11月21日","excerpt":"\\n<p><a href=\\"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-protection/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>yudao-spring-boot-starter-protection</code> (opens new window)</a>技术组件，由它的 <a href=\\"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-protection/src/main/java/cn/iocoder/yudao/framework/idempotent/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>idempotent</code> (opens new window)</a>包，提供声明式的幂等特性，可防止重复请求。例如说，用户快速的双击了某个按钮，前端没有禁用该按钮，导致发送了两次重复的请求。</p>","autoDesc":true}');export{l as comp,d as data};
