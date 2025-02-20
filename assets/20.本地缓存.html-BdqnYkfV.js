import{_ as a,c as e,a as n,o as i}from"./app-4x2aIoqi.js";const l={};function r(o,s){return i(),e("div",null,s[0]||(s[0]=[n(`<h1 id="本地缓存" tabindex="-1"><a class="header-anchor" href="#本地缓存"><span>本地缓存</span></a></h1><p>重要说明：</p><p>① 由于大家普遍反馈，“本地缓存”学习成本太高，一般 Redis 缓存足够满足大多数场景的性能要求，所以基本使用 <a href="https://doc.iocoder.cn/redis-cache" target="_blank" rel="noopener noreferrer">Spring Cache</a> + Redis 所替代。</p><p>也因此，本章节更多的，是讲解如何在项目中使用本地缓存。如果你不需要本地缓存，可以忽略本章节。</p><p>② 项目中还保留了部分地方使用本地缓存，例如说：短信客户端、文件客户端、敏感词等。主要原因是，它们是“有状态”的 Java 对象，无法缓存到 Redis 中。</p><p>系统使用本地缓存，提升公用逻辑的执行性能。 例如说：</p><ul><li><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/service/tenant/TenantServiceImpl.java" target="_blank" rel="noopener noreferrer">租户模块 (opens new window)</a>缓存租户信息，每次 RESTful API 校验租户是否禁用、过期时，无需读库。</li><li><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/service/dept/DeptServiceImpl.java" target="_blank" rel="noopener noreferrer">部门模块 (opens new window)</a>缓存部门信息，每次数据权限校验时，无需读库。</li><li><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/service/permission/PermissionServiceImpl.java" target="_blank" rel="noopener noreferrer">权限模块 (opens new window)</a>缓存权限信息，每次功能权限校验时，无需读库。</li></ul><h2 id="_1-实现原理" tabindex="-1"><a class="header-anchor" href="#_1-实现原理"><span><a href="https://doc.iocoder.cn/local-cache/#_1-%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86" target="_blank" rel="noopener noreferrer">#</a>1. 实现原理</span></a></h2><p>本地缓存的实现，一共有两步，如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/本地缓存/04.png" alt="整体流程" tabindex="0" loading="lazy"><figcaption>整体流程</figcaption></figure><ul><li>项目启动时，初始化缓存：从数据库中读取数据，写入到本地缓存（例如说一个 Map 对象）</li><li>数据变化时，实时刷新缓存：（例如说通过管理后台修改数据）重新从数据库中读取数据，重新写入到本地缓存</li></ul><h2 id="_2-实战案例" tabindex="-1"><a class="header-anchor" href="#_2-实战案例"><span><a href="https://doc.iocoder.cn/local-cache/#_2-%E5%AE%9E%E6%88%98%E6%A1%88%E4%BE%8B" target="_blank" rel="noopener noreferrer">#</a>2. 实战案例</span></a></h2><p>以 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/service/permission/RoleServiceImpl.java" target="_blank" rel="noopener noreferrer">角色模块 (opens new window)</a>为例，讲解如何实现角色信息的本地缓存。</p><h3 id="_2-1-初始化缓存" tabindex="-1"><a class="header-anchor" href="#_2-1-初始化缓存"><span><a href="https://doc.iocoder.cn/local-cache/#_2-1-%E5%88%9D%E5%A7%8B%E5%8C%96%E7%BC%93%E5%AD%98" target="_blank" rel="noopener noreferrer">#</a>2.1 初始化缓存</span></a></h3><p>① 在 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/service/permission/RoleService.java" target="_blank" rel="noopener noreferrer">RoleService (opens new window)</a>接口中，定义 <code>#initLocalCache()</code> 方法。代码如下：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// RoleService.java</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 初始化角色的本地缓存</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> initLocalCache</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>为什么要定义接口方法？</p><p>稍后实时刷新缓存时，会调用 RoleService 接口的该方法。</p><p>② 在 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/service/permission/RoleServiceImpl.java" target="_blank" rel="noopener noreferrer">RoleServiceImpl (opens new window)</a>类中，实现 <code>#initLocalCache()</code> 方法，通过 <code>@PostConstruct</code> 注解，在项目启动时进行本地缓存的初始化。代码如下：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// RoleServiceImpl.java</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 角色缓存</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * key：角色编号 {</span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@link</span><span style="color:#E5C07B;font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;"> RoleDO</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">getId()</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 这里声明 volatile 修饰的原因是，每次刷新时，直接修改指向</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Getter</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> volatile</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Map</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Long</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> RoleDO</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> roleCache</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 初始化 {@link #roleCache} 缓存</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">PostConstruct</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> initLocalCache</span><span style="color:#E06C75;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 注意：忽略自动多租户，因为要全局初始化缓存</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    TenantUtils</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">executeIgnore</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(() </span><span style="color:#C678DD;--shiki-dark:#C678DD;">-&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 第一步：查询数据</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RoleDO</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#E06C75;--shiki-dark:#E06C75;">roleList</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> roleMapper</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">selectList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        log</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">info</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;[initLocalCache][缓存角色，数量为:{}]&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">roleList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">size</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 第二步：构建缓存</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        roleCache </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> CollectionUtils</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">convertMap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(roleList, RoleDO</span><span style="color:#C678DD;--shiki-dark:#C678DD;">::</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">getId);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    });</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>疑问：为什么使用 TenantUtils 的 executeIgnore 方法来执行逻辑？</p><p>由于 RoleDO 是多租户隔离，如果使用 TenantUtils 方法，会导致缓存刷新时，只加载某个租户的角色数据，导致本地缓存的错误。</p><p>所以，如果缓存的数据不存在多租户隔离的情况，可以不使用 TenantUtils 方法！！！！</p><h3 id="_2-2-实时刷新缓存" tabindex="-1"><a class="header-anchor" href="#_2-2-实时刷新缓存"><span><a href="https://doc.iocoder.cn/local-cache/#_2-2-%E5%AE%9E%E6%97%B6%E5%88%B7%E6%96%B0%E7%BC%93%E5%AD%98" target="_blank" rel="noopener noreferrer">#</a>2.2 实时刷新缓存</span></a></h3><p>为什么需要使用 Redis Pub/Sub 来实时刷新缓存？考虑到高可用，线上会部署多个 JVM 实例，需要通过 Redis 广播到所有实例，实现本地缓存的刷新。</p><figure><img src="https://doc.iocoder.cn/img/本地缓存/02.png" alt="实时刷新缓存" tabindex="0" loading="lazy"><figcaption>实时刷新缓存</figcaption></figure><p>友情提示：</p><p>Redis Pub/Sub 的使用与讲解，可见 <a href="https://doc.iocoder.cn/message-queue" target="_blank" rel="noopener noreferrer">《开发指南 —— 消息队列》</a> 文档。</p><h4 id="_2-2-1-rolerefreshmessage" tabindex="-1"><a class="header-anchor" href="#_2-2-1-rolerefreshmessage"><span><a href="https://doc.iocoder.cn/local-cache/#_2-2-1-rolerefreshmessage" target="_blank" rel="noopener noreferrer">#</a>2.2.1 RoleRefreshMessage</span></a></h4><p>新建 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/a426384d41/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/mq/message/permission/RoleRefreshMessage.java" target="_blank" rel="noopener noreferrer">RoleRefreshMessage (opens new window)</a>类，角色数据刷新 Message。代码如下：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Data</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">EqualsAndHashCode</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">callSuper</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> RoleRefreshMessage</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> extends</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> AbstractChannelMessage</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getChannel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;system.role.refresh&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h4 id="_2-2-2-roleproducer" tabindex="-1"><a class="header-anchor" href="#_2-2-2-roleproducer"><span><a href="https://doc.iocoder.cn/local-cache/#_2-2-2-roleproducer" target="_blank" rel="noopener noreferrer">#</a>2.2.2 RoleProducer</span></a></h4><p>① 新建 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/a426384d41/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/mq/producer/permission/RoleProducer.java" target="_blank" rel="noopener noreferrer">RoleProducer (opens new window)</a>类，RoleRefreshMessage 的 Producer 生产者。代码如下：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Component</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> RoleProducer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Resource</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> RedisMQTemplate</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> redisMQTemplate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 发送 {@link RoleRefreshMessage} 消息</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> sendRoleRefreshMessage</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        RoleRefreshMessage</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> message</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> RoleRefreshMessage</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        redisMQTemplate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">send</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(message);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>② 在数据的新增 / 修改 / 删除等写入操作时，需要使用 RoleProducer 发送消息。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/本地缓存/03.png" alt="调用 RoleProducer 示例" tabindex="0" loading="lazy"><figcaption>调用 RoleProducer 示例</figcaption></figure><h4 id="_2-2-3-rolerefreshconsumer" tabindex="-1"><a class="header-anchor" href="#_2-2-3-rolerefreshconsumer"><span><a href="https://doc.iocoder.cn/local-cache/#_2-2-3-rolerefreshconsumer" target="_blank" rel="noopener noreferrer">#</a>2.2.3 RoleRefreshConsumer</span></a></h4><p>新建 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/a426384d41/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/mq/consumer/permission/RoleRefreshConsumer.java" target="_blank" rel="noopener noreferrer">RoleRefreshConsumer (opens new window)</a>类，RoleRefreshMessage 的 Consumer 消费者，刷新本地缓存。代码如下：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Component</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Slf4j</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> RoleRefreshConsumer</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> extends</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> AbstractChannelMessageListener</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RoleRefreshMessage</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Resource</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> RoleService</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> roleService</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> onMessage</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RoleRefreshMessage</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> message</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        log</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">info</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;[onMessage][收到 Role 刷新消息]&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        roleService</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">initLocalCache</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>上次更新: 2023/03/03, 22:14:22</p>`,40)]))}const t=a(l,[["render",r],["__file","20.本地缓存.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/20.%E6%9C%AC%E5%9C%B0%E7%BC%93%E5%AD%98.html","title":"本地缓存","lang":"zh-CN","frontmatter":{"description":"本地缓存 重要说明： ① 由于大家普遍反馈，“本地缓存”学习成本太高，一般 Redis 缓存足够满足大多数场景的性能要求，所以基本使用 Spring Cache + Redis 所替代。 也因此，本章节更多的，是讲解如何在项目中使用本地缓存。如果你不需要本地缓存，可以忽略本章节。 ② 项目中还保留了部分地方使用本地缓存，例如说：短信客户端、文件客户端、...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/20.%E6%9C%AC%E5%9C%B0%E7%BC%93%E5%AD%98.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"本地缓存"}],["meta",{"property":"og:description","content":"本地缓存 重要说明： ① 由于大家普遍反馈，“本地缓存”学习成本太高，一般 Redis 缓存足够满足大多数场景的性能要求，所以基本使用 Spring Cache + Redis 所替代。 也因此，本章节更多的，是讲解如何在项目中使用本地缓存。如果你不需要本地缓存，可以忽略本章节。 ② 项目中还保留了部分地方使用本地缓存，例如说：短信客户端、文件客户端、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/%E6%9C%AC%E5%9C%B0%E7%BC%93%E5%AD%98/04.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T07:41:53.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-21T07:41:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"本地缓存\\",\\"image\\":[\\"https://doc.iocoder.cn/img/%E6%9C%AC%E5%9C%B0%E7%BC%93%E5%AD%98/04.png\\",\\"https://doc.iocoder.cn/img/%E6%9C%AC%E5%9C%B0%E7%BC%93%E5%AD%98/02.png\\",\\"https://doc.iocoder.cn/img/%E6%9C%AC%E5%9C%B0%E7%BC%93%E5%AD%98/03.png\\"],\\"dateModified\\":\\"2024-11-21T07:41:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#1. 实现原理","slug":"_1-实现原理","link":"#_1-实现原理","children":[]},{"level":2,"title":"#2. 实战案例","slug":"_2-实战案例","link":"#_2-实战案例","children":[{"level":3,"title":"#2.1 初始化缓存","slug":"_2-1-初始化缓存","link":"#_2-1-初始化缓存","children":[]},{"level":3,"title":"#2.2 实时刷新缓存","slug":"_2-2-实时刷新缓存","link":"#_2-2-实时刷新缓存","children":[]}]}],"git":{"createdTime":1732174913000,"updatedTime":1732174913000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.88,"words":1163},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/2.后端手册/20.本地缓存.md","localizedDate":"2024年11月21日","excerpt":"\\n<p>重要说明：</p>\\n<p>① 由于大家普遍反馈，“本地缓存”学习成本太高，一般 Redis 缓存足够满足大多数场景的性能要求，所以基本使用 <a href=\\"https://doc.iocoder.cn/redis-cache\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Spring Cache</a> + Redis 所替代。</p>\\n<p>也因此，本章节更多的，是讲解如何在项目中使用本地缓存。如果你不需要本地缓存，可以忽略本章节。</p>\\n<p>② 项目中还保留了部分地方使用本地缓存，例如说：短信客户端、文件客户端、敏感词等。主要原因是，它们是“有状态”的 Java 对象，无法缓存到 Redis 中。</p>","autoDesc":true}');export{t as comp,c as data};
