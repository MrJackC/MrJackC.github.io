import{_ as a,c as n,a as o,o as t}from"./app-CZJgH_ea.js";const r={};function i(s,e){return t(),n("div",null,e[0]||(e[0]=[o(`<h1 id="saas-多租户【数据库隔离】" tabindex="-1"><a class="header-anchor" href="#saas-多租户【数据库隔离】"><span>SaaS 多租户【数据库隔离】</span></a></h1><p>本章节，讲解 SaaS 租户的 DATASOURCE 模式，实现数据库级别的隔离。</p><p>注意，需要前置阅读 <a href="https://doc.iocoder.cn/saas-tenant" target="_blank" rel="noopener noreferrer">《SaaS 多租户【字段隔离】》</a> 文档。</p><h2 id="_0-极速体验" tabindex="-1"><a class="header-anchor" href="#_0-极速体验"><span><a href="https://doc.iocoder.cn/saas-tenant/dynamic/#_0-%E6%9E%81%E9%80%9F%E4%BD%93%E9%AA%8C" target="_blank" rel="noopener noreferrer">#</a>0. 极速体验</span></a></h2><p>① 克隆 <a href="https://gitee.com/zhijiantianya/ruoyi-vue-pro" target="_blank" rel="noopener noreferrer">https://gitee.com/zhijiantianya/ruoyi-vue-pro (opens new window)</a>仓库，并切换到 <code>feature/dev-yunai</code> 分支。</p><p>② 创建 <code>ruoyi-vue-pro-master</code>、<code>ruoyi-vue-pro-tenant-a</code>、<code>ruoyi-vue-pro-tenant-b</code> 三个数据库。</p><p>③ 下载 <a href="https://doc.iocoder.cn/file/%E5%A4%9A%E7%A7%9F%E6%88%B7%E5%A4%9Adb.zip" target="_blank" rel="noopener noreferrer"><code>多租户多db.zip</code></a> 并解压，将 SQL 导入到对应的数据库中。</p><p>友情提示：</p><p>随着版本的迭代，SQL 脚本可能过期。如果碰到问题，可以在星球给我反馈下。</p><p>④ 启动前端和后端项目，即可愉快的体验了。</p><h2 id="_1-实现原理" tabindex="-1"><a class="header-anchor" href="#_1-实现原理"><span><a href="https://doc.iocoder.cn/saas-tenant/dynamic/#_1-%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86" target="_blank" rel="noopener noreferrer">#</a>1. 实现原理</span></a></h2><p>DATASOURCE 模式，基于 <a href="https://github.com/baomidou/dynamic-datasource-spring-boot-starter" target="_blank" rel="noopener noreferrer">dynamic-datasource (opens new window)</a>进行拓展实现。</p><p>核心：每次对数据库操作时，动态切换到该租户所在的数据源，然后执行 SQL 语句。</p><h2 id="_2-功能演示" tabindex="-1"><a class="header-anchor" href="#_2-功能演示"><span><a href="https://doc.iocoder.cn/saas-tenant/dynamic/#_2-%E5%8A%9F%E8%83%BD%E6%BC%94%E7%A4%BA" target="_blank" rel="noopener noreferrer">#</a>2. 功能演示</span></a></h2><p><strong>我们来新增一个租户，使用 DATASOURCE 模式。</strong></p><p>① 点击 [基础设施 -&gt; 数据源配置] 菜单，点击 [新增] 按钮，新增一个名字为 <code>tenant-a</code> 数据源。</p><figure><img src="https://doc.iocoder.cn/img/Saas多租户/独立数据源/新增数据源.png" alt="新增数据源" tabindex="0" loading="lazy"><figcaption>新增数据源</figcaption></figure><p>然后，手动将如下表拷贝到 <code>ruoyi-vue-pro</code> 主库中的如下表，拷贝到 <code>ruoyi-vue-pro-tenant-a</code> 库中。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/Saas多租户/独立数据源/拷贝表结构.png" alt="拷贝表结构到数据源" tabindex="0" loading="lazy"><figcaption>拷贝表结构到数据源</figcaption></figure><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>system_dept</span></span>
<span class="line"><span>system_login_log</span></span>
<span class="line"><span>system_notice</span></span>
<span class="line"><span>system_notify_message</span></span>
<span class="line"><span>system_operate_log</span></span>
<span class="line"><span>system_post</span></span>
<span class="line"><span>system_role</span></span>
<span class="line"><span>system_role_menu</span></span>
<span class="line"><span>system_social_user</span></span>
<span class="line"><span>system_social_user_bind</span></span>
<span class="line"><span>system_user_post</span></span>
<span class="line"><span>system_user_role</span></span>
<span class="line"><span>system_users</span></span></code></pre></div><p>友情提示：</p><p>随着版本的迭代，可能需要拷贝更多的表。如果碰到问题，可以在星球给我反馈下。</p><p>② 点击 [基础设施 -&gt; 租户管理] 菜单，点击 [新增] 按钮，新增一个名字为 <code>土豆租户</code> 的租户，并使用 <code>tenant-a</code> 数据源。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/Saas多租户/独立数据源/新增租户.png" alt="新增租户" tabindex="0" loading="lazy"><figcaption>新增租户</figcaption></figure><p>此时，在 <code>ruoyi-vue-pro-tenant-a</code> 库中，可以查询到对应的租户管理员、角色等信息。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/Saas多租户/独立数据源/查询用户.png" alt="查询用户" tabindex="0" loading="lazy"><figcaption>查询用户</figcaption></figure><p>③ 退出系统，登录刚创建的租户。</p><figure><img src="https://doc.iocoder.cn/img/Saas多租户/独立数据源/登录界面.png" alt="登录界面" tabindex="0" loading="lazy"><figcaption>登录界面</figcaption></figure><p>至此，我们已经完成了租户的创建。</p><p>补充说明：</p><p>后续在使用时，建议把拷贝到其它租户数据库的表，从 <code>ruoyi-vue-pro</code> 主库中进行删除。</p><p>目的是，主库只保留所有租户共享的全局表。例如说，菜单表、定时任表等等。</p><h2 id="_3-创建表" tabindex="-1"><a class="header-anchor" href="#_3-创建表"><span><a href="https://doc.iocoder.cn/saas-tenant/dynamic/#_3-%E5%88%9B%E5%BB%BA%E8%A1%A8" target="_blank" rel="noopener noreferrer">#</a>3. 创建表</span></a></h2><p>在使用 DATASOURCE 模式时，数据库可以分为两种：主库、租户库。</p><h3 id="_3-1-主库" tabindex="-1"><a class="header-anchor" href="#_3-1-主库"><span><a href="https://doc.iocoder.cn/saas-tenant/dynamic/#_3-1-%E4%B8%BB%E5%BA%93" target="_blank" rel="noopener noreferrer">#</a>3.1 主库</span></a></h3><p>① 存放所有租户共享的表。例如说：菜单表、定时任务表等等。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/Saas多租户/独立数据源/主库.png" alt="主库" tabindex="0" loading="lazy"><figcaption>主库</figcaption></figure><p>② 对应 <code>master</code> 数据源，配置在 <code>application-{env}.yaml</code> 配置文件。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/Saas多租户/独立数据源/master数据源.png" alt=" 数据源" tabindex="0" loading="lazy"><figcaption> 数据源</figcaption></figure><p>③ 每个主库对应的 Mapper，必须添加 <a href="https://github.com/baomidou/dynamic-datasource-spring-boot-starter/blob/master/core/src/main/java/com/baomidou/dynamic/datasource/annotation/Master.java" target="_blank" rel="noopener noreferrer"><code>@Master</code> (opens new window)</a>注解。例如说：</p><figure><img src="https://doc.iocoder.cn/img/Saas多租户/独立数据源/Master注解.png" alt=" 注解" tabindex="0" loading="lazy"><figcaption> 注解</figcaption></figure><h3 id="_3-2-租户库" tabindex="-1"><a class="header-anchor" href="#_3-2-租户库"><span><a href="https://doc.iocoder.cn/saas-tenant/dynamic/#_3-2-%E7%A7%9F%E6%88%B7%E5%BA%93" target="_blank" rel="noopener noreferrer">#</a>3.2 租户库</span></a></h3><p>① 存放每个租户的表。例如说：用户表、角色表等等。</p><p>② 在 [基础设施 -&gt; 数据源配置] 菜单中，配置数据源。</p><p>③ 每个主库对应的 Mapper，必须添加 <a href="https://doc.iocoder.cn/saas-tenant/dynamic/TODO" target="_blank" rel="noopener noreferrer"><code>@TenantDS</code></a> 注解。例如说：</p><figure><img src="https://doc.iocoder.cn/img/Saas多租户/独立数据源/TenantDS注解.png" alt=" 注解" tabindex="0" loading="lazy"><figcaption> 注解</figcaption></figure><h3 id="_3-3-租户字段" tabindex="-1"><a class="header-anchor" href="#_3-3-租户字段"><span><a href="https://doc.iocoder.cn/saas-tenant/dynamic/#_3-3-%E7%A7%9F%E6%88%B7%E5%AD%97%E6%AE%B5" target="_blank" rel="noopener noreferrer">#</a>3.3 租户字段</span></a></h3><p>① 考虑到拓展性，在使用 DATASOURCE 模式时，默认会叠加 COLUMN 模式，即还有 <code>tenant_id</code> 租户字段：</p><ul><li>在 <code>INSERT</code> 操作时，会自动记录租户编号到 <code>tenant_id</code> 字段。</li><li>在 <code>SELECT</code> 操作时，会自动添加 <code>WHERE tenant_id = ?</code> 查询条件。</li></ul><p>如果你不需要，可以直接删除 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-biz-tenant/src/main/java/cn/iocoder/yudao/framework/tenant/core/db/TenantDatabaseInterceptor.java" target="_blank" rel="noopener noreferrer">TenantDatabaseInterceptor (opens new window)</a>类，以及它的 Bean 自动配置。</p><p>拓展性，指的是部分【大】租户独立数据库，部分【小】租户共享数据。</p><p>② 也因为叠加了 COLUMN 模式，<strong>主库</strong>的表需要根据情况添加 <code>tenant_id</code> 字段。</p><ul><li>情况一：不需要添加 <code>tenant_id</code> 字段。例如说：菜单表、定时任务表等等。注意，需要把表名添加到 <code>yudao.tenant.ignore-tables</code> 配置项中。</li><li>情况二：需要 <code>tenant_id</code> 字段。例如说：访问日志表、异常日志表等等。目的，排查是哪个租户的系统级别的日志。</li></ul><h2 id="_4-多数据源事务" tabindex="-1"><a class="header-anchor" href="#_4-多数据源事务"><span><a href="https://doc.iocoder.cn/saas-tenant/dynamic/#_4-%E5%A4%9A%E6%95%B0%E6%8D%AE%E6%BA%90%E4%BA%8B%E5%8A%A1" target="_blank" rel="noopener noreferrer">#</a>4. 多数据源事务</span></a></h2><p>使用 DATASOURCE 模式后，可能一个操作涉及到多个数据源。例如说：创建租户时，即需要操作主库，也需要操作租户库。</p><p>考虑到多数据的数据一致性，我们会采用事务的方式，而使用 Spring 事务时，会存在多数据库无法切换的问题。不了解的胖友，可以阅读 <a href="https://zhuanlan.zhihu.com/p/410915221" target="_blank" rel="noopener noreferrer">《MyBatis Plus 的多数据源 <code>@DS</code> 切换不起作用了，谁的锅 》 (opens new window)</a>文章。</p><p>多数据源的事务方案，是一个老生常谈的问题。比较主流的，有如下两种，都是相对重量级的方案：</p><ol><li>使用 <a href="https://cloud.tencent.com/developer/article/1436662" target="_blank" rel="noopener noreferrer">Atomikos (opens new window)</a>实现 JTA 分布式事务，配置复杂，性能较差。</li><li>使用 <a href="https://www.iocoder.cn/Seata/install/" target="_blank" rel="noopener noreferrer">Seata (opens new window)</a>实现分布式事务，使用简单，性能不错，但是需要额外引入 Seata Server 服务。</li></ol><h3 id="_4-1-本地事务" tabindex="-1"><a class="header-anchor" href="#_4-1-本地事务"><span><a href="https://doc.iocoder.cn/saas-tenant/dynamic/#_4-1-%E6%9C%AC%E5%9C%B0%E4%BA%8B%E5%8A%A1" target="_blank" rel="noopener noreferrer">#</a>4.1 本地事务</span></a></h3><p>考虑到项目是单体架构，不适合采用重量级的事务，因此采用 <a href="https://github.com/baomidou/dynamic-datasource-spring-boot-starter" target="_blank" rel="noopener noreferrer">dynamic-datasource (opens new window)</a>提供的 <strong>“本地事务”</strong> 轻量级方案。</p><p>它的实现原理是：自定义 <a href="https://github.com/baomidou/dynamic-datasource-spring-boot-starter/blob/master/core/src/main/java/com/baomidou/dynamic/datasource/annotation/DSTransactional.java" target="_blank" rel="noopener noreferrer"><code>@DSTransactional</code> (opens new window)</a>事务注解，替代 Spring <code>@Transactional</code> 事务注解。</p><ul><li>在逻辑执行成功时，循环提交每个数据源的事务。</li><li>在逻辑执行失败时，循环回滚每个数据源的事务。</li></ul><p>但是它存在一个风险点，如果数据库发生异常（例如说宕机），那么本地事务就可能会存在数据不一致的问题。例如说：</p><ul><li>① 主库的事务提交</li><li>② 租户库发生异常，租户的事务提交失败</li><li>结果：主库的数据已经提交，而租户库的数据没有提交，就会导致数据不一致。</li></ul><p><strong>因此，如果你的系统对数据一致性要求很高，那么请使用 Seata 方案。</strong></p><h3 id="_4-2-使用示例" tabindex="-1"><a class="header-anchor" href="#_4-2-使用示例"><span><a href="https://doc.iocoder.cn/saas-tenant/dynamic/#_4-2-%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B" target="_blank" rel="noopener noreferrer">#</a>4.2 使用示例</span></a></h3><p>在最外层的 Service 方法上，添加 <code>@DSTransactional</code> 注解。例如说，创建租户的 Service 方法：</p><figure><img src="https://doc.iocoder.cn/img/Saas多租户/独立数据源/本地事务的使用示例.png" alt="使用示例" tabindex="0" loading="lazy"><figcaption>使用示例</figcaption></figure><p>注意，里面不能嵌套有 Spring 自带的事务，就是上图中【黄圈】的 Service 方法不能使用 Spring <code>@Transactional</code> 注解，否则会导致数据源无法切换。</p><p>如果【黄圈】的 Service 自身还需要事务，那么可以使用 <code>@DSTransactional</code> 注解。</p>`,70)]))}const c=a(r,[["render",i],["__file","9.SaaS 多租户【数据库隔离】.html.vue"]]),d=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/9.SaaS%20%E5%A4%9A%E7%A7%9F%E6%88%B7%E3%80%90%E6%95%B0%E6%8D%AE%E5%BA%93%E9%9A%94%E7%A6%BB%E3%80%91.html","title":"SaaS 多租户【数据库隔离】","lang":"zh-CN","frontmatter":{"description":"SaaS 多租户【数据库隔离】 本章节，讲解 SaaS 租户的 DATASOURCE 模式，实现数据库级别的隔离。 注意，需要前置阅读 《SaaS 多租户【字段隔离】》 文档。 #0. 极速体验 ① 克隆 https://gitee.com/zhijiantianya/ruoyi-vue-pro (opens new window)仓库，并切换到 fe...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/9.SaaS%20%E5%A4%9A%E7%A7%9F%E6%88%B7%E3%80%90%E6%95%B0%E6%8D%AE%E5%BA%93%E9%9A%94%E7%A6%BB%E3%80%91.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"SaaS 多租户【数据库隔离】"}],["meta",{"property":"og:description","content":"SaaS 多租户【数据库隔离】 本章节，讲解 SaaS 租户的 DATASOURCE 模式，实现数据库级别的隔离。 注意，需要前置阅读 《SaaS 多租户【字段隔离】》 文档。 #0. 极速体验 ① 克隆 https://gitee.com/zhijiantianya/ruoyi-vue-pro (opens new window)仓库，并切换到 fe..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/Saas%E5%A4%9A%E7%A7%9F%E6%88%B7/%E7%8B%AC%E7%AB%8B%E6%95%B0%E6%8D%AE%E6%BA%90/%E6%96%B0%E5%A2%9E%E6%95%B0%E6%8D%AE%E6%BA%90.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T07:41:53.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-21T07:41:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SaaS 多租户【数据库隔离】\\",\\"image\\":[\\"https://doc.iocoder.cn/img/Saas%E5%A4%9A%E7%A7%9F%E6%88%B7/%E7%8B%AC%E7%AB%8B%E6%95%B0%E6%8D%AE%E6%BA%90/%E6%96%B0%E5%A2%9E%E6%95%B0%E6%8D%AE%E6%BA%90.png\\",\\"https://doc.iocoder.cn/img/Saas%E5%A4%9A%E7%A7%9F%E6%88%B7/%E7%8B%AC%E7%AB%8B%E6%95%B0%E6%8D%AE%E6%BA%90/%E6%8B%B7%E8%B4%9D%E8%A1%A8%E7%BB%93%E6%9E%84.png\\",\\"https://doc.iocoder.cn/img/Saas%E5%A4%9A%E7%A7%9F%E6%88%B7/%E7%8B%AC%E7%AB%8B%E6%95%B0%E6%8D%AE%E6%BA%90/%E6%96%B0%E5%A2%9E%E7%A7%9F%E6%88%B7.png\\",\\"https://doc.iocoder.cn/img/Saas%E5%A4%9A%E7%A7%9F%E6%88%B7/%E7%8B%AC%E7%AB%8B%E6%95%B0%E6%8D%AE%E6%BA%90/%E6%9F%A5%E8%AF%A2%E7%94%A8%E6%88%B7.png\\",\\"https://doc.iocoder.cn/img/Saas%E5%A4%9A%E7%A7%9F%E6%88%B7/%E7%8B%AC%E7%AB%8B%E6%95%B0%E6%8D%AE%E6%BA%90/%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2.png\\",\\"https://doc.iocoder.cn/img/Saas%E5%A4%9A%E7%A7%9F%E6%88%B7/%E7%8B%AC%E7%AB%8B%E6%95%B0%E6%8D%AE%E6%BA%90/%E4%B8%BB%E5%BA%93.png\\",\\"https://doc.iocoder.cn/img/Saas%E5%A4%9A%E7%A7%9F%E6%88%B7/%E7%8B%AC%E7%AB%8B%E6%95%B0%E6%8D%AE%E6%BA%90/master%E6%95%B0%E6%8D%AE%E6%BA%90.png\\",\\"https://doc.iocoder.cn/img/Saas%E5%A4%9A%E7%A7%9F%E6%88%B7/%E7%8B%AC%E7%AB%8B%E6%95%B0%E6%8D%AE%E6%BA%90/Master%E6%B3%A8%E8%A7%A3.png\\",\\"https://doc.iocoder.cn/img/Saas%E5%A4%9A%E7%A7%9F%E6%88%B7/%E7%8B%AC%E7%AB%8B%E6%95%B0%E6%8D%AE%E6%BA%90/TenantDS%E6%B3%A8%E8%A7%A3.png\\",\\"https://doc.iocoder.cn/img/Saas%E5%A4%9A%E7%A7%9F%E6%88%B7/%E7%8B%AC%E7%AB%8B%E6%95%B0%E6%8D%AE%E6%BA%90/%E6%9C%AC%E5%9C%B0%E4%BA%8B%E5%8A%A1%E7%9A%84%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B.png\\"],\\"dateModified\\":\\"2024-11-21T07:41:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#0. 极速体验","slug":"_0-极速体验","link":"#_0-极速体验","children":[]},{"level":2,"title":"#1. 实现原理","slug":"_1-实现原理","link":"#_1-实现原理","children":[]},{"level":2,"title":"#2. 功能演示","slug":"_2-功能演示","link":"#_2-功能演示","children":[]},{"level":2,"title":"#3. 创建表","slug":"_3-创建表","link":"#_3-创建表","children":[{"level":3,"title":"#3.1 主库","slug":"_3-1-主库","link":"#_3-1-主库","children":[]},{"level":3,"title":"#3.2 租户库","slug":"_3-2-租户库","link":"#_3-2-租户库","children":[]},{"level":3,"title":"#3.3 租户字段","slug":"_3-3-租户字段","link":"#_3-3-租户字段","children":[]}]},{"level":2,"title":"#4. 多数据源事务","slug":"_4-多数据源事务","link":"#_4-多数据源事务","children":[{"level":3,"title":"#4.1 本地事务","slug":"_4-1-本地事务","link":"#_4-1-本地事务","children":[]},{"level":3,"title":"#4.2 使用示例","slug":"_4-2-使用示例","link":"#_4-2-使用示例","children":[]}]}],"git":{"createdTime":1732174913000,"updatedTime":1732174913000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.75,"words":2026},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/2.后端手册/9.SaaS 多租户【数据库隔离】.md","localizedDate":"2024年11月21日","excerpt":"\\n<p>本章节，讲解 SaaS 租户的 DATASOURCE 模式，实现数据库级别的隔离。</p>\\n<p>注意，需要前置阅读 <a href=\\"https://doc.iocoder.cn/saas-tenant\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">《SaaS 多租户【字段隔离】》</a> 文档。</p>\\n<h2><a class=\\"header-anchor\\" href=\\"#_0-极速体验\\"><span></span></a><a href=\\"https://doc.iocoder.cn/saas-tenant/dynamic/#_0-%E6%9E%81%E9%80%9F%E4%BD%93%E9%AA%8C\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">#</a>0. 极速体验</h2>","autoDesc":true}');export{c as comp,d as data};
