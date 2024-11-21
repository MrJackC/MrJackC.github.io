import{_ as s,c as a,a as o,o as n}from"./app-CZJgH_ea.js";const r={};function i(t,e){return n(),a("div",null,e[0]||(e[0]=[o(`<h1 id="分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式锁"><span>分布式锁</span></a></h1><p><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-protection/" target="_blank" rel="noopener noreferrer"><code>yudao-spring-boot-starter-protection</code> (opens new window)</a>技术组件，使用 Redis 实现分布式锁的功能，它有 2 种使用方式：</p><ul><li>编程式锁：基于 <a href="https://github.com/redisson/redisson" target="_blank" rel="noopener noreferrer">Redisson (opens new window)</a>框架提供的<a href="https://github.com/redisson/redisson/wiki/8.-%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81%E5%92%8C%E5%90%8C%E6%AD%A5%E5%99%A8" target="_blank" rel="noopener noreferrer">各种 (opens new window)</a>分布式锁</li><li>声明式锁：基于 <a href="https://github.com/baomidou/lock4j" target="_blank" rel="noopener noreferrer">Lock4j (opens new window)</a>框架的 <code>@Lock4j</code> 注解</li></ul><p>Redis 分布式锁的实现原理？</p><p>参见 <a href="https://www.iocoder.cn/Redis/good-collection/?yudao" target="_blank" rel="noopener noreferrer">《Redis 实现原理与源码解析系列》 (opens new window)</a>文章。</p><h2 id="_1-编程式锁" tabindex="-1"><a class="header-anchor" href="#_1-编程式锁"><span><a href="https://doc.iocoder.cn/distributed-lock/#_1-%E7%BC%96%E7%A8%8B%E5%BC%8F%E9%94%81" target="_blank" rel="noopener noreferrer">#</a>1. 编程式锁</span></a></h2><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;org.redisson&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;redisson-spring-boot-starter&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h3 id="_1-1-redisson-配置" tabindex="-1"><a class="header-anchor" href="#_1-1-redisson-配置"><span><a href="https://doc.iocoder.cn/distributed-lock/#_1-1-redisson-%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">#</a>1.1 Redisson 配置</span></a></h3><p>无需配置。因为在 <a href="https://doc.iocoder.cn/redis-cache" target="_blank" rel="noopener noreferrer">Redis 缓存</a> 中，进行了 Spring Data Redis + Redisson 的配置。</p><h3 id="_1-2-实战案例" tabindex="-1"><a class="header-anchor" href="#_1-2-实战案例"><span><a href="https://doc.iocoder.cn/distributed-lock/#_1-2-%E5%AE%9E%E6%88%98%E6%A1%88%E4%BE%8B" target="_blank" rel="noopener noreferrer">#</a>1.2 实战案例</span></a></h3><p><code>yudao-module-pay</code> 模块的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-pay/yudao-module-pay-biz/src/main/java/cn/iocoder/yudao/module/pay/service/notify/PayNotifyServiceImpl.java#L155-L174" target="_blank" rel="noopener noreferrer"><code>notify</code> (opens new window)</a>功能，使用到分布式锁，确保<strong>每个</strong>支付通知任务有且仅有一个在执行。下面，来看看这个案例是如何实现的。</p><p>友情提示：</p><p>建议你已经阅读过 <a href="https://doc.iocoder.cn/redis-cache" target="_blank" rel="noopener noreferrer">《开发指南 —— Redis 缓存》</a> 文档。</p><p>① 在 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-pay/yudao-module-pay-biz/src/main/java/cn/iocoder/yudao/module/pay/dal/redis/RedisKeyConstants.java" target="_blank" rel="noopener noreferrer">RedisKeyConstants (opens new window)</a>类中，定义通知任务使用的分布式锁的 Redis Key。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/分布式锁/01.png" alt="PAY_NOTIFY_LOCK" tabindex="0" loading="lazy"><figcaption>PAY_NOTIFY_LOCK</figcaption></figure><p>② 创建 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-pay/yudao-module-pay-biz/src/main/java/cn/iocoder/yudao/module/pay/dal/redis/notify/PayNotifyLockRedisDAO.java" target="_blank" rel="noopener noreferrer">PayNotifyLockRedisDAO (opens new window)</a>类，使用 RedisClient 实现分布式锁的加锁与解锁。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/分布式锁/02.png" alt="PayNotifyLockRedisDAO" tabindex="0" loading="lazy"><figcaption>PayNotifyLockRedisDAO</figcaption></figure><p>③ 在 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-pay/yudao-module-pay-biz/src/main/java/cn/iocoder/yudao/module/pay/service/notify/PayNotifyServiceImpl.java#L155-L174" target="_blank" rel="noopener noreferrer">PayNotifyServiceImpl (opens new window)</a>执行指定的支付通知任务时，通过 PayNotifyLockRedisDAO 获得分布式锁。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/分布式锁/03.png" alt="PayNotifyLockRedisDAO" tabindex="0" loading="lazy"><figcaption>PayNotifyLockRedisDAO</figcaption></figure><p>技术选型：为什么不使用 Lock4j 提供的 LockTemplate 实现编程式锁？</p><p>两者各有优势，选择 Redisson 主要考虑它支持的 Redis 分布式锁的类型较多：可靠性较高的红锁、性能较好的读写锁等等。</p><p>Lock4j 的 LockTemplate 也是不错的选择，一方面不强依赖 Redisson 框架，一方面支持 ZooKeeper 等等。</p><h2 id="_2-声明式锁" tabindex="-1"><a class="header-anchor" href="#_2-声明式锁"><span><a href="https://doc.iocoder.cn/distributed-lock/#_2-%E5%A3%B0%E6%98%8E%E5%BC%8F%E9%94%81" target="_blank" rel="noopener noreferrer">#</a>2. 声明式锁</span></a></h2><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;com.baomidou&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;lock4j-redisson-spring-boot-starter&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h3 id="_2-1-lock4j-配置" tabindex="-1"><a class="header-anchor" href="#_2-1-lock4j-配置"><span><a href="https://doc.iocoder.cn/distributed-lock/#_2-1-lock4j-%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">#</a>2.1 Lock4j 配置</span></a></h3><p>在 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-server/src/main/resources/application-local.yaml#L111-L114" target="_blank" rel="noopener noreferrer"><code>application-local.yaml</code> (opens new window)</a>配置文件中，通过 <code>lock4j</code> 配置项，添加 Lock4j 全局默认的分布式锁配置。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/分布式锁/04.png" alt="配置文件" tabindex="0" loading="lazy"><figcaption>配置文件</figcaption></figure><h3 id="_2-2-使用案例" tabindex="-1"><a class="header-anchor" href="#_2-2-使用案例"><span><a href="https://doc.iocoder.cn/distributed-lock/#_2-2-%E4%BD%BF%E7%94%A8%E6%A1%88%E4%BE%8B" target="_blank" rel="noopener noreferrer">#</a>2.2 使用案例</span></a></h3><p>在需要使用到分布式锁的方法上，添加 <code>@Lock4j</code> 注解，非常方便。示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Service</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> DemoService</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 默认使用 lock4j 配置项</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Lock4j</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> simple</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //do something</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 完全配置，支持 Spring EL 表达式</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Lock4j</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">keys</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;#user.id&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;#user.name&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> expire</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 60000</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> acquireTimeout</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1000</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> User</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> customMethod</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">User</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> user</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上次更新: 2022/04/22, 22:48:53</p>`,31)]))}const p=s(r,[["render",i],["__file","25.分布式锁.html.vue"]]),d=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/25.%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81.html","title":"分布式锁","lang":"zh-CN","frontmatter":{"description":"分布式锁 yudao-spring-boot-starter-protection (opens new window)技术组件，使用 Redis 实现分布式锁的功能，它有 2 种使用方式： 编程式锁：基于 Redisson (opens new window)框架提供的各种 (opens new window)分布式锁 声明式锁：基于 Lock4j ...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/25.%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"分布式锁"}],["meta",{"property":"og:description","content":"分布式锁 yudao-spring-boot-starter-protection (opens new window)技术组件，使用 Redis 实现分布式锁的功能，它有 2 种使用方式： 编程式锁：基于 Redisson (opens new window)框架提供的各种 (opens new window)分布式锁 声明式锁：基于 Lock4j ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81/01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T07:41:53.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-21T07:41:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式锁\\",\\"image\\":[\\"https://doc.iocoder.cn/img/%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81/01.png\\",\\"https://doc.iocoder.cn/img/%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81/02.png\\",\\"https://doc.iocoder.cn/img/%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81/03.png\\",\\"https://doc.iocoder.cn/img/%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81/04.png\\"],\\"dateModified\\":\\"2024-11-21T07:41:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#1. 编程式锁","slug":"_1-编程式锁","link":"#_1-编程式锁","children":[{"level":3,"title":"#1.1 Redisson 配置","slug":"_1-1-redisson-配置","link":"#_1-1-redisson-配置","children":[]},{"level":3,"title":"#1.2 实战案例","slug":"_1-2-实战案例","link":"#_1-2-实战案例","children":[]}]},{"level":2,"title":"#2. 声明式锁","slug":"_2-声明式锁","link":"#_2-声明式锁","children":[{"level":3,"title":"#2.1 Lock4j 配置","slug":"_2-1-lock4j-配置","link":"#_2-1-lock4j-配置","children":[]},{"level":3,"title":"#2.2 使用案例","slug":"_2-2-使用案例","link":"#_2-2-使用案例","children":[]}]}],"git":{"createdTime":1732174913000,"updatedTime":1732174913000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.49,"words":747},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/2.后端手册/25.分布式锁.md","localizedDate":"2024年11月21日","excerpt":"\\n<p><a href=\\"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-protection/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>yudao-spring-boot-starter-protection</code> (opens new window)</a>技术组件，使用 Redis 实现分布式锁的功能，它有 2 种使用方式：</p>\\n<ul>\\n<li>编程式锁：基于 <a href=\\"https://github.com/redisson/redisson\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Redisson (opens new window)</a>框架提供的<a href=\\"https://github.com/redisson/redisson/wiki/8.-%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81%E5%92%8C%E5%90%8C%E6%AD%A5%E5%99%A8\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">各种 (opens new window)</a>分布式锁</li>\\n<li>声明式锁：基于 <a href=\\"https://github.com/baomidou/lock4j\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Lock4j (opens new window)</a>框架的 <code>@Lock4j</code> 注解</li>\\n</ul>","autoDesc":true}');export{p as comp,d as data};
