import{_ as o,c as t,a as n,o as a}from"./app-BfIe-EZg.js";const r={};function i(c,e){return a(),t("div",null,e[0]||(e[0]=[n('<h1 id="删除功能" tabindex="-1"><a class="header-anchor" href="#删除功能"><span>删除功能</span></a></h1><p>项目内置<a href="https://doc.iocoder.cn/feature" target="_blank" rel="noopener noreferrer">功能</a>较多，会存在一些你可能用不到的功能。一般的情况下，建议通过设置该功能对应的菜单为【<strong>禁用</strong>】，实现功能的“删除”。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/删除功能/设置菜单禁用.png" alt="设置菜单为禁用" tabindex="0" loading="lazy"><figcaption>设置菜单为禁用</figcaption></figure><p>后续，如果你又需要使用到该功能，只需要设置该功能对应的菜单为【<strong>开启</strong>】即可。</p><p>🙂 当然，如果你希望彻底删除功能，那么就需要采用删除代码的方式。整个过程如下：</p><p>① 【菜单】第一步，使用管理后台的菜单管理，删除对应的菜单、按钮。<br> ② 【数据库表】第二步，删除对应的数据库表。<br> ③ 【后端代码】第三步，删除对应的 Controller、Service、数据库实体等后端代码；然后启动后端项目，若存在代码报错，则继续删除相关联的代码，之后如此反复，直到成功。<br> ④ 【前端代码】第四步，删除对应的 View 和 API 等前端代码；然后启动前端项目，若存在代码报错，则继续删除相关联的代码，之后如此反复，直到成功。</p><p>下面，我们来举一些例子。</p><h2 id="👍-相关视频教程" tabindex="-1"><a class="header-anchor" href="#👍-相关视频教程"><span><a href="https://doc.iocoder.cn/delete-code/#%F0%9F%91%8D-%E7%9B%B8%E5%85%B3%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B" target="_blank" rel="noopener noreferrer">#</a>👍 相关视频教程</span></a></h2><ul><li><a href="https://t.zsxq.com/07EUrZrNV" target="_blank" rel="noopener noreferrer">从零开始 07：如何有效的删除不用的功能？(opens new window)</a></li></ul><h2 id="删除「多租户」功能" tabindex="-1"><a class="header-anchor" href="#删除「多租户」功能"><span><a href="https://doc.iocoder.cn/delete-code/#%E5%88%A0%E9%99%A4%E3%80%8C%E5%A4%9A%E7%A7%9F%E6%88%B7%E3%80%8D%E5%8A%9F%E8%83%BD" target="_blank" rel="noopener noreferrer">#</a>删除「多租户」功能</span></a></h2><ul><li>对应功能的文档：<a href="https://doc.iocoder.cn/saas-tenant/" target="_blank" rel="noopener noreferrer">多租户</a></li><li>对应的关键字是 <code>tenant</code></li></ul><h3 id="第一步-删除菜单" tabindex="-1"><a class="header-anchor" href="#第一步-删除菜单"><span><a href="https://doc.iocoder.cn/delete-code/#%E7%AC%AC%E4%B8%80%E6%AD%A5-%E5%88%A0%E9%99%A4%E8%8F%9C%E5%8D%95" target="_blank" rel="noopener noreferrer">#</a>第一步，删除菜单</span></a></h3><p>删除“租户管理“下的所有菜单，从最里层的按钮开始。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/删除功能/租户-删除菜单.png" alt="删除“租户管理“菜单" tabindex="0" loading="lazy"><figcaption>删除“租户管理“菜单</figcaption></figure><h3 id="第二步-删除数据库表" tabindex="-1"><a class="header-anchor" href="#第二步-删除数据库表"><span><a href="https://doc.iocoder.cn/delete-code/#%E7%AC%AC%E4%BA%8C%E6%AD%A5-%E5%88%A0%E9%99%A4%E6%95%B0%E6%8D%AE%E5%BA%93%E8%A1%A8" target="_blank" rel="noopener noreferrer">#</a>第二步，删除数据库表</span></a></h3><p>删除 <code>system_tenant</code> 和 <code>system_tenant_package</code> 表。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/删除功能/租户-删除数据库表.png" alt="删除数据库表" tabindex="0" loading="lazy"><figcaption>删除数据库表</figcaption></figure><h3 id="第三步-删除后端代码" tabindex="-1"><a class="header-anchor" href="#第三步-删除后端代码"><span><a href="https://doc.iocoder.cn/delete-code/#%E7%AC%AC%E4%B8%89%E6%AD%A5-%E5%88%A0%E9%99%A4%E5%90%8E%E7%AB%AF%E4%BB%A3%E7%A0%81" target="_blank" rel="noopener noreferrer">#</a>第三步，删除后端代码</span></a></h3><p>① 删除 <code>yudao-module-system-api</code> 模块的 <a href="https://gitee.com/zhijiantianya/ruoyi-vue-pro/tree/master/yudao-module-system/yudao-module-system-api/src/main/java/cn/iocoder/yudao/module/system/api/tenant" target="_blank" rel="noopener noreferrer"><code>api/tenant</code> (opens new window)</a>包。</p><p>② 删除 <code>yudao-module-system-api</code> 模块的 <a href="https://gitee.com/zhijiantianya/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-api/src/main/java/cn/iocoder/yudao/module/system/enums/ErrorCodeConstants.java" target="_blank" rel="noopener noreferrer">ErrorCodeConstants (opens new window)</a>类中，和租户、租户套餐相关的错误码。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/删除功能/租户-删除错误码.png" alt="删除错误码" tabindex="0" loading="lazy"><figcaption>删除错误码</figcaption></figure><p>如果想删除的更干净，可以把 <code>system_error_code</code> 表中，对应编号的错误码也都删除一下。</p><p>③ 删除 <code>yudao-module-system-biz</code> 模块的如下包：</p><ul><li><a href="https://gitee.com/zhijiantianya/ruoyi-vue-pro/tree/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/api/tenant" target="_blank" rel="noopener noreferrer"><code>api/tenant</code>(opens new window)</a></li><li><a href="https://gitee.com/zhijiantianya/ruoyi-vue-pro/tree/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/controller/admin/tenant" target="_blank" rel="noopener noreferrer"><code>controller/admin/tenant</code>(opens new window)</a></li><li><a href="https://gitee.com/zhijiantianya/ruoyi-vue-pro/tree/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/service/tenant" target="_blank" rel="noopener noreferrer"><code>service/tenant</code>(opens new window)</a></li><li><a href="https://gitee.com/zhijiantianya/ruoyi-vue-pro/tree/master/yudao-module-system/yudao-module-system-biz/src/test/java/cn/iocoder/yudao/module/system/service/tenant" target="_blank" rel="noopener noreferrer"><code>test/service/tenant</code>(opens new window)</a></li><li><a href="https://gitee.com/zhijiantianya/ruoyi-vue-pro/tree/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/dal/dataobject/tenant" target="_blank" rel="noopener noreferrer"><code>dal/dataobject/tenant</code>(opens new window)</a></li><li><a href="https://gitee.com/zhijiantianya/ruoyi-vue-pro/tree/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/dal/mysql/tenant" target="_blank" rel="noopener noreferrer"><code>dal/mysql/tenant</code>(opens new window)</a></li><li><a href="https://gitee.com/zhijiantianya/ruoyi-vue-pro/tree/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/convert/tenant" target="_blank" rel="noopener noreferrer"><code>convert/tenant</code>(opens new window)</a></li></ul><p>④ 删除 <a href="https://gitee.com/zhijiantianya/ruoyi-vue-pro/tree/master/yudao-framework/yudao-spring-boot-starter-biz-tenant" target="_blank" rel="noopener noreferrer"><code>yudao-spring-boot-starter-biz-tenant</code> (opens new window)</a>模块。</p><p>然后，使用 IDEA 搜索 <code>yudao-spring-boot-starter-biz-tenant</code> 关键字，删除 Maven 中所有对它的定义与引用。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/删除功能/租户-删除Maven依赖.png" alt="删除  使用" tabindex="0" loading="lazy"><figcaption>删除 使用</figcaption></figure><p>之后，使用 IDEA 刷新下 Maven 依赖。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/删除功能/租户-刷新Maven依赖.png" alt="租户-刷新Maven依赖" tabindex="0" loading="lazy"><figcaption>租户-刷新Maven依赖</figcaption></figure><p>⑤ 运行 YudaoServerApplication 启动类，会报 <code>cn.iocoder.yudao.framework.tenant.core.db</code> 不存在的错误，需要将继承 TenantBaseDO 的数据库实体，都改成继承 BaseDO 基类。</p><figure><img src="https://doc.iocoder.cn/img/删除功能/租户-修改继承BaseDO类.png" alt="租户-修改继承BaseDO类" tabindex="0" loading="lazy"><figcaption>租户-修改继承BaseDO类</figcaption></figure><p>⑥ 运行 YudaoServerApplication 启动类，会报 <code>cn.iocoder.yudao.framework.tenant.core.aop</code> 不存在的错误，需要去除对 <code>@TenantIgnore</code> 注解的使用。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/删除功能/租户-删除@TenantIgnore注解.png" alt="租户-删除@TenantIgnore注解" tabindex="0" loading="lazy"><figcaption>租户-删除@TenantIgnore注解</figcaption></figure><p>⑦ 运行 YudaoServerApplication 启动类，会报 <code>cn.iocoder.yudao.module.system.service.tenant</code> 不存在的错误，需要去除对 TenantService 的使用。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/删除功能/租户-删除TenantService的使用.png" alt="租户-删除TenantService的使用" tabindex="0" loading="lazy"><figcaption>租户-删除TenantService的使用</figcaption></figure><p>⑧ 运行 YudaoServerApplication 启动类，会报 <code>cn.iocoder.yudao.framework.tenant.core.context</code> 不存在的错误，需要去除对 TenantContextHolder 的使用。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/删除功能/租户-删除TenantContextHolder的使用.png" alt="租户-删除TenantContextHolder的使用" tabindex="0" loading="lazy"><figcaption>租户-删除TenantContextHolder的使用</figcaption></figure><p>⑨ 运行 YudaoServerApplication 启动类，终于成功了！！！</p><p>ps：可以将 <code>application.yaml</code> 配置文件中，对应的 <code>yudao.tenant</code> 配置项给进一步删除。</p><h3 id="第四步-删除前端代码" tabindex="-1"><a class="header-anchor" href="#第四步-删除前端代码"><span><a href="https://doc.iocoder.cn/delete-code/#%E7%AC%AC%E5%9B%9B%E6%AD%A5-%E5%88%A0%E9%99%A4%E5%89%8D%E7%AB%AF%E4%BB%A3%E7%A0%81" target="_blank" rel="noopener noreferrer">#</a>第四步，删除前端代码</span></a></h3><p>以 <code>yudao-admin-ui</code> 为示例~</p><p>① 删除 View 和 API 的前端代码：</p><ul><li><a href="https://gitee.com/zhijiantianya/ruoyi-vue-pro/tree/master/yudao-ui-admin/src/views/system/tenant" target="_blank" rel="noopener noreferrer"><code>views/system/tenant</code>(opens new window)</a></li><li><a href="https://gitee.com/zhijiantianya/ruoyi-vue-pro/tree/master/yudao-ui-admin/src/views/system/tenantPackage" target="_blank" rel="noopener noreferrer"><code>views/system/tenantPackage</code>(opens new window)</a></li><li><a href="https://gitee.com/zhijiantianya/ruoyi-vue-pro/blob/master/yudao-ui-admin/src/api/system/tenant.js" target="_blank" rel="noopener noreferrer"><code>api/system/tenant.js</code>(opens new window)</a></li><li><a href="https://gitee.com/zhijiantianya/ruoyi-vue-pro/blob/master/yudao-ui-admin/src/api/system/tenantPackage.js" target="_blank" rel="noopener noreferrer"><code>api/system/tenantPackage.js</code>(opens new window)</a></li></ul><p>② 在 <code>yudao-admin-ui</code> 目录下，执行 <code>npm run local</code> 成功。访问登录页，结果访问白屏。需要清理 <code>login.vue</code> 页，涉及 <code>tenant</code> 关键字的代码。例如说：</p><figure><img src="https://doc.iocoder.cn/img/删除功能/租户-清理login页的代码.png" alt="清理 login.vue 的代码" tabindex="0" loading="lazy"><figcaption>清理 login.vue 的代码</figcaption></figure><p>刷新，成功访问登录界面。</p><p>③ 在 <code>yudao-admin-ui</code> 目录下，搜索 <code>tenant</code> 或 <code>Tenant</code> 关键字，可进一步清理多租户的代码。例如说：</p><figure><img src="https://doc.iocoder.cn/img/删除功能/租户-进一步清理前端代码.png" alt="进一步清理前端代码" tabindex="0" loading="lazy"><figcaption>进一步清理前端代码</figcaption></figure><h3 id="第五步-测试验收" tabindex="-1"><a class="header-anchor" href="#第五步-测试验收"><span><a href="https://doc.iocoder.cn/delete-code/#%E7%AC%AC%E4%BA%94%E6%AD%A5-%E6%B5%8B%E8%AF%95%E9%AA%8C%E6%94%B6" target="_blank" rel="noopener noreferrer">#</a>第五步，测试验收</span></a></h3><p>至此，我们已经完成了多租户的代码删除，还是蛮艰辛的~</p><p>后续，你可以简单测试一下，看看是不是删除代码，导致一些小问题。</p><h2 id="更多" tabindex="-1"><a class="header-anchor" href="#更多"><span><a href="https://doc.iocoder.cn/delete-code/#%E6%9B%B4%E5%A4%9A" target="_blank" rel="noopener noreferrer">#</a>更多...</span></a></h2><p>如果你有其它功能想要删除，可以在 <a href="https://gitee.com/zhijiantianya/ruoyi-vue-pro/issues" target="_blank" rel="noopener noreferrer">Issue (opens new window)</a>留言，可以不断补充到该文档。</p>',53)]))}const s=o(r,[["render",i],["__file","12.删除功能.html.vue"]]),p=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/1.%E8%90%8C%E6%96%B0%E5%BF%85%E8%AF%BB/12.%E5%88%A0%E9%99%A4%E5%8A%9F%E8%83%BD.html","title":"删除功能","lang":"zh-CN","frontmatter":{"description":"删除功能 项目内置功能较多，会存在一些你可能用不到的功能。一般的情况下，建议通过设置该功能对应的菜单为【禁用】，实现功能的“删除”。如下图所示： 设置菜单为禁用设置菜单为禁用 后续，如果你又需要使用到该功能，只需要设置该功能对应的菜单为【开启】即可。 🙂 当然，如果你希望彻底删除功能，那么就需要采用删除代码的方式。整个过程如下： ① 【菜单】第一步，...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/1.%E8%90%8C%E6%96%B0%E5%BF%85%E8%AF%BB/12.%E5%88%A0%E9%99%A4%E5%8A%9F%E8%83%BD.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"删除功能"}],["meta",{"property":"og:description","content":"删除功能 项目内置功能较多，会存在一些你可能用不到的功能。一般的情况下，建议通过设置该功能对应的菜单为【禁用】，实现功能的“删除”。如下图所示： 设置菜单为禁用设置菜单为禁用 后续，如果你又需要使用到该功能，只需要设置该功能对应的菜单为【开启】即可。 🙂 当然，如果你希望彻底删除功能，那么就需要采用删除代码的方式。整个过程如下： ① 【菜单】第一步，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/%E5%88%A0%E9%99%A4%E5%8A%9F%E8%83%BD/%E8%AE%BE%E7%BD%AE%E8%8F%9C%E5%8D%95%E7%A6%81%E7%94%A8.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-24T05:58:00.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-24T05:58:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"删除功能\\",\\"image\\":[\\"https://doc.iocoder.cn/img/%E5%88%A0%E9%99%A4%E5%8A%9F%E8%83%BD/%E8%AE%BE%E7%BD%AE%E8%8F%9C%E5%8D%95%E7%A6%81%E7%94%A8.png\\",\\"https://doc.iocoder.cn/img/%E5%88%A0%E9%99%A4%E5%8A%9F%E8%83%BD/%E7%A7%9F%E6%88%B7-%E5%88%A0%E9%99%A4%E8%8F%9C%E5%8D%95.png\\",\\"https://doc.iocoder.cn/img/%E5%88%A0%E9%99%A4%E5%8A%9F%E8%83%BD/%E7%A7%9F%E6%88%B7-%E5%88%A0%E9%99%A4%E6%95%B0%E6%8D%AE%E5%BA%93%E8%A1%A8.png\\",\\"https://doc.iocoder.cn/img/%E5%88%A0%E9%99%A4%E5%8A%9F%E8%83%BD/%E7%A7%9F%E6%88%B7-%E5%88%A0%E9%99%A4%E9%94%99%E8%AF%AF%E7%A0%81.png\\",\\"https://doc.iocoder.cn/img/%E5%88%A0%E9%99%A4%E5%8A%9F%E8%83%BD/%E7%A7%9F%E6%88%B7-%E5%88%A0%E9%99%A4Maven%E4%BE%9D%E8%B5%96.png\\",\\"https://doc.iocoder.cn/img/%E5%88%A0%E9%99%A4%E5%8A%9F%E8%83%BD/%E7%A7%9F%E6%88%B7-%E5%88%B7%E6%96%B0Maven%E4%BE%9D%E8%B5%96.png\\",\\"https://doc.iocoder.cn/img/%E5%88%A0%E9%99%A4%E5%8A%9F%E8%83%BD/%E7%A7%9F%E6%88%B7-%E4%BF%AE%E6%94%B9%E7%BB%A7%E6%89%BFBaseDO%E7%B1%BB.png\\",\\"https://doc.iocoder.cn/img/%E5%88%A0%E9%99%A4%E5%8A%9F%E8%83%BD/%E7%A7%9F%E6%88%B7-%E5%88%A0%E9%99%A4@TenantIgnore%E6%B3%A8%E8%A7%A3.png\\",\\"https://doc.iocoder.cn/img/%E5%88%A0%E9%99%A4%E5%8A%9F%E8%83%BD/%E7%A7%9F%E6%88%B7-%E5%88%A0%E9%99%A4TenantService%E7%9A%84%E4%BD%BF%E7%94%A8.png\\",\\"https://doc.iocoder.cn/img/%E5%88%A0%E9%99%A4%E5%8A%9F%E8%83%BD/%E7%A7%9F%E6%88%B7-%E5%88%A0%E9%99%A4TenantContextHolder%E7%9A%84%E4%BD%BF%E7%94%A8.png\\",\\"https://doc.iocoder.cn/img/%E5%88%A0%E9%99%A4%E5%8A%9F%E8%83%BD/%E7%A7%9F%E6%88%B7-%E6%B8%85%E7%90%86login%E9%A1%B5%E7%9A%84%E4%BB%A3%E7%A0%81.png\\",\\"https://doc.iocoder.cn/img/%E5%88%A0%E9%99%A4%E5%8A%9F%E8%83%BD/%E7%A7%9F%E6%88%B7-%E8%BF%9B%E4%B8%80%E6%AD%A5%E6%B8%85%E7%90%86%E5%89%8D%E7%AB%AF%E4%BB%A3%E7%A0%81.png\\"],\\"dateModified\\":\\"2024-11-24T05:58:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#👍 相关视频教程","slug":"👍-相关视频教程","link":"#👍-相关视频教程","children":[]},{"level":2,"title":"#删除「多租户」功能","slug":"删除「多租户」功能","link":"#删除「多租户」功能","children":[{"level":3,"title":"#第一步，删除菜单","slug":"第一步-删除菜单","link":"#第一步-删除菜单","children":[]},{"level":3,"title":"#第二步，删除数据库表","slug":"第二步-删除数据库表","link":"#第二步-删除数据库表","children":[]},{"level":3,"title":"#第三步，删除后端代码","slug":"第三步-删除后端代码","link":"#第三步-删除后端代码","children":[]},{"level":3,"title":"#第四步，删除前端代码","slug":"第四步-删除前端代码","link":"#第四步-删除前端代码","children":[]},{"level":3,"title":"#第五步，测试验收","slug":"第五步-测试验收","link":"#第五步-测试验收","children":[]}]},{"level":2,"title":"#更多...","slug":"更多","link":"#更多","children":[]}],"git":{"createdTime":1732174913000,"updatedTime":1732427880000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.57,"words":1672},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/1.萌新必读/12.删除功能.md","localizedDate":"2024年11月21日","excerpt":"\\n<p>项目内置<a href=\\"https://doc.iocoder.cn/feature\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">功能</a>较多，会存在一些你可能用不到的功能。一般的情况下，建议通过设置该功能对应的菜单为【<strong>禁用</strong>】，实现功能的“删除”。如下图所示：</p>\\n<figure><img src=\\"https://doc.iocoder.cn/img/删除功能/设置菜单禁用.png\\" alt=\\"设置菜单为禁用\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>设置菜单为禁用</figcaption></figure>","autoDesc":true}');export{s as comp,p as data};
