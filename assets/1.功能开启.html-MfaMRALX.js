import{_ as t,c as o,a as r,o as n}from"./app-JRvFIbSa.js";const a={};function d(i,e){return n(),o("div",null,e[0]||(e[0]=[r('<h1 id="功能开启" tabindex="-1"><a class="header-anchor" href="#功能开启"><span>功能开启</span></a></h1><p><a href="https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Overview.html" target="_blank" rel="noopener noreferrer">微信公众号 (opens new window)</a>的功能，由 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-mp/" target="_blank" rel="noopener noreferrer"><code>yudao-module-mp</code> (opens new window)</a>模块实现，对应前端代码为 <a href="https://github.com/YunaiV/ruoyi-vue-pro/tree/master/yudao-ui-admin/src/views/mp" target="_blank" rel="noopener noreferrer"><code>@/views/mp</code> (opens new window)</a>目录。</p><p>主要包括如下 10 个功能（菜单）：</p><figure><img src="https://doc.iocoder.cn/img/公众号手册/功能开启/功能列表.png" alt="功能列表" tabindex="0" loading="lazy"><figcaption>功能列表</figcaption></figure><table><thead><tr><th>功能</th><th>描述</th></tr></thead><tbody><tr><td>账号管理</td><td>配置接入的微信公众号，可支持多个公众号</td></tr><tr><td>数据统计</td><td>统计公众号的用户增减、累计用户、消息概况、接口分析等数据</td></tr><tr><td>粉丝管理</td><td>查看已关注、取关的粉丝列表，可对粉丝进行同步、打标签等操作</td></tr><tr><td>消息管理</td><td>查看粉丝发送的消息列表，可主动回复粉丝消息</td></tr><tr><td>自动回复</td><td>自动回复粉丝发送的消息，支持关注回复、消息回复、关键字回复</td></tr><tr><td>标签管理</td><td>对公众号的标签进行创建、查询、修改、删除等操作</td></tr><tr><td>菜单管理</td><td>自定义公众号的菜单，也可以从公众号同步菜单</td></tr><tr><td>素材管理</td><td>管理公众号的图片、语音、视频等素材，支持在线播放语音、视频</td></tr><tr><td>图文草稿箱</td><td>新增常用的图文素材到草稿箱，可发布到公众号</td></tr><tr><td>图文发表记录</td><td>查看已发布成功的图文素材，支持删除操作</td></tr></tbody></table><p>考虑到编译速度，默认 <code>yudao-module-mp</code> 模块是关闭的，需要手动开启。步骤如下：</p><ul><li>第一步，开启 <code>yudao-module-mp</code> 模块</li><li>第二步，导入公众号的 SQL 数据库脚本</li><li>第三步，重启后端项目，确认功能是否生效</li></ul><h2 id="_1-第一步-开启模块" tabindex="-1"><a class="header-anchor" href="#_1-第一步-开启模块"><span><a href="https://doc.iocoder.cn/mp/build/#_1-%E7%AC%AC%E4%B8%80%E6%AD%A5-%E5%BC%80%E5%90%AF%E6%A8%A1%E5%9D%97" target="_blank" rel="noopener noreferrer">#</a>1. 第一步，开启模块</span></a></h2><p>① 修改根目录的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/pom.xml" target="_blank" rel="noopener noreferrer"><code>pom.xml</code> (opens new window)</a>文件，取消 <code>yudao-module-mp</code> 模块的注释。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/公众号手册/功能开启/第一步-01.png" alt="取消  模块的注释" tabindex="0" loading="lazy"><figcaption>取消 模块的注释</figcaption></figure><p>② 修改 <code>yudao-server</code> 目录的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-server/pom.xml" target="_blank" rel="noopener noreferrer"><code>pom.xml</code> (opens new window)</a>文件，引入 <code>yudao-module-mp</code> 模块。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/公众号手册/功能开启/第一步-02.png" alt="引入  模块" tabindex="0" loading="lazy"><figcaption>引入 模块</figcaption></figure><p>③ 点击 IDEA 右上角的【Reload All Maven Projects】，刷新 Maven 依赖。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/公众号手册/功能开启/第一步-03.png" alt="刷新 Maven 依赖" tabindex="0" loading="lazy"><figcaption>刷新 Maven 依赖</figcaption></figure><h2 id="_2-第二步-导入-sql" tabindex="-1"><a class="header-anchor" href="#_2-第二步-导入-sql"><span><a href="https://doc.iocoder.cn/mp/build/#_2-%E7%AC%AC%E4%BA%8C%E6%AD%A5-%E5%AF%BC%E5%85%A5-sql" target="_blank" rel="noopener noreferrer">#</a>2. 第二步，导入 SQL</span></a></h2><p>下载 <a href="https://doc.iocoder.cn/file/mp.sql" target="_blank" rel="noopener noreferrer"><code>mp.sql</code></a> 脚本，并导入到数据库中。如下图所示：</p><p>友情提示：↑↑↑ mp.sql 是可以点击下载的！ ↑↑↑</p><figure><img src="https://doc.iocoder.cn/img/公众号手册/功能开启/第二步-01.png" alt="导入数据库" tabindex="0" loading="lazy"><figcaption>导入数据库</figcaption></figure><p>以 <code>mp_</code> 作为前缀的表，就是公众号模块的表。</p><h2 id="_3-第三步-重新项目" tabindex="-1"><a class="header-anchor" href="#_3-第三步-重新项目"><span><a href="https://doc.iocoder.cn/mp/build/#_3-%E7%AC%AC%E4%B8%89%E6%AD%A5-%E9%87%8D%E6%96%B0%E9%A1%B9%E7%9B%AE" target="_blank" rel="noopener noreferrer">#</a>3. 第三步，重新项目</span></a></h2><p>重启后端项目，然后访问前端的公众号菜单，确认功能是否生效。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/公众号手册/功能开启/第三步-01.png" alt="确认功能是否生效" tabindex="0" loading="lazy"><figcaption>确认功能是否生效</figcaption></figure><p>至此，我们就成功开启了公众号的功能 🙂</p><p>上次更新: 2023/07/31, 03:22:09</p>',24)]))}const c=t(a,[["render",d],["__file","1.功能开启.html.vue"]]),l=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/8.%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/1.%E5%8A%9F%E8%83%BD%E5%BC%80%E5%90%AF.html","title":"功能开启","lang":"zh-CN","frontmatter":{"description":"功能开启 微信公众号 (opens new window)的功能，由 yudao-module-mp (opens new window)模块实现，对应前端代码为 @/views/mp (opens new window)目录。 主要包括如下 10 个功能（菜单）： 功能列表功能列表 考虑到编译速度，默认 yudao-module-mp 模块是关闭的，...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/8.%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/1.%E5%8A%9F%E8%83%BD%E5%BC%80%E5%90%AF.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"功能开启"}],["meta",{"property":"og:description","content":"功能开启 微信公众号 (opens new window)的功能，由 yudao-module-mp (opens new window)模块实现，对应前端代码为 @/views/mp (opens new window)目录。 主要包括如下 10 个功能（菜单）： 功能列表功能列表 考虑到编译速度，默认 yudao-module-mp 模块是关闭的，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E5%8A%9F%E8%83%BD%E5%BC%80%E5%90%AF/%E5%8A%9F%E8%83%BD%E5%88%97%E8%A1%A8.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T07:41:53.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-21T07:41:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"功能开启\\",\\"image\\":[\\"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E5%8A%9F%E8%83%BD%E5%BC%80%E5%90%AF/%E5%8A%9F%E8%83%BD%E5%88%97%E8%A1%A8.png\\",\\"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E5%8A%9F%E8%83%BD%E5%BC%80%E5%90%AF/%E7%AC%AC%E4%B8%80%E6%AD%A5-01.png\\",\\"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E5%8A%9F%E8%83%BD%E5%BC%80%E5%90%AF/%E7%AC%AC%E4%B8%80%E6%AD%A5-02.png\\",\\"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E5%8A%9F%E8%83%BD%E5%BC%80%E5%90%AF/%E7%AC%AC%E4%B8%80%E6%AD%A5-03.png\\",\\"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E5%8A%9F%E8%83%BD%E5%BC%80%E5%90%AF/%E7%AC%AC%E4%BA%8C%E6%AD%A5-01.png\\",\\"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E5%8A%9F%E8%83%BD%E5%BC%80%E5%90%AF/%E7%AC%AC%E4%B8%89%E6%AD%A5-01.png\\"],\\"dateModified\\":\\"2024-11-21T07:41:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#1. 第一步，开启模块","slug":"_1-第一步-开启模块","link":"#_1-第一步-开启模块","children":[]},{"level":2,"title":"#2. 第二步，导入 SQL","slug":"_2-第二步-导入-sql","link":"#_2-第二步-导入-sql","children":[]},{"level":2,"title":"#3. 第三步，重新项目","slug":"_3-第三步-重新项目","link":"#_3-第三步-重新项目","children":[]}],"git":{"createdTime":1732174913000,"updatedTime":1732174913000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.03,"words":908},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/8.公众号手册/1.功能开启.md","localizedDate":"2024年11月21日","excerpt":"\\n<p><a href=\\"https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Overview.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">微信公众号 (opens new window)</a>的功能，由 <a href=\\"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-mp/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>yudao-module-mp</code> (opens new window)</a>模块实现，对应前端代码为 <a href=\\"https://github.com/YunaiV/ruoyi-vue-pro/tree/master/yudao-ui-admin/src/views/mp\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>@/views/mp</code> (opens new window)</a>目录。</p>","autoDesc":true}');export{c as comp,l as data};
