import{_ as d,c as e,a as l,o as r}from"./app-4x2aIoqi.js";const a={};function i(n,t){return r(),e("div",null,t[0]||(t[0]=[l('<h1 id="后台管理系统技术选型" tabindex="-1"><a class="header-anchor" href="#后台管理系统技术选型"><span>后台管理系统技术选型</span></a></h1><h2 id="_1-背景简介" tabindex="-1"><a class="header-anchor" href="#_1-背景简介"><span>1. 背景简介</span></a></h2><h3 id="_1-1-原有框架问题" tabindex="-1"><a class="header-anchor" href="#_1-1-原有框架问题"><span>1.1 原有框架问题</span></a></h3><p>原有公司内部框架已经很老了，最早的架构师已经离职了，维护更新不及时。且原有框架也有不少槽点</p><ul><li>UI 样式丑陋，原有框架是前后端不分离的，早期都是由java后端人员开发。现在的前端人员接手困难，后端人员维护起来效率低</li><li>数据持久层框架采用beetlsql，学习成本高，且后期遇到问题难排查</li><li>在改造成前后端分离时，登录与权限控制改造成本高</li><li>缺少数据监控功能</li></ul><h3 id="_1-2-新框架选型目标" tabindex="-1"><a class="header-anchor" href="#_1-2-新框架选型目标"><span>1.2 新框架选型目标</span></a></h3><p>现年底公司业务比较平稳，明年新项目启动，这段时间正好有时间可以做一个技术选型。以下是选型目标</p><ul><li>技术特性 <ul><li>易用性：使用常用技术框架（减少大家学习成本）</li><li>可维护性</li><li>可扩展性：</li><li>性能</li></ul></li><li>技术成熟度： <ul><li>不追求新技术，成熟稳定即可</li></ul></li><li>社区活跃度： <ul><li>尽量使用开源技术</li><li>社区活跃后期有问题方便咨询等</li></ul></li><li>架构匹配和演化： <ul><li>目前项目只需要前后端分离，未来可能有微服务改造需求，需提前有预案</li><li>数据库mysql、oralce、国产数据库-达梦（可自己改造，但不希望花太多时间）</li></ul></li><li>团队成员因素: <ul><li>前端同事技术栈：Vue、element、vue-element-admin</li></ul></li></ul><h2 id="_2-考量点" tabindex="-1"><a class="header-anchor" href="#_2-考量点"><span>2. 考量点</span></a></h2><table><thead><tr><th>考量点</th><th>公司内部框架</th><th>若依管理系统</th><th>jeecg管理系统</th><th>FEBS权限管理系统</th></tr></thead><tbody><tr><td>核心功能</td><td>满足核心功能需求</td><td>满足核心功能需求<br>部门管理、角色用户、菜单及按钮授权、数据权限、系统参数、日志管理、代码生成等。在线定时任务配置；支持集群，支持多数据源，支持分布式事务。</td><td>功能强大，部分付费。</td><td>满足核心功能需求</td></tr><tr><td>支持架构版本</td><td>单应用（随着业务壮大，缺乏扩展性）</td><td>单应用、前后端分离，微服务Cloud、还支持多语言平台</td><td>前后端分离，支持微服务</td><td>单应用、前后端分离，支持微服务</td></tr><tr><td>前端技术</td><td>easy-ui<br>(技术老，样式丑)</td><td>element<br></td><td>antd<br>（前端人员不太熟）</td><td>element<br></td></tr><tr><td>技术成熟度</td><td>相对老旧，学习成本高<br>springboot、betsql,easyui</td><td>技术常用且成熟，学习成本低<br>Spring Boot、Spring Security、MyBatis、Jwt、Vue</td><td>技术常用且成熟（前端有问题），学习成本低<br>SpringBoot 2.x，SpringCloud，Ant Design&amp;Vue，Mybatis-plus，Shiro，JWT</td><td>技术常用且成熟，学习成本低Spring Cloud 、Spring Cloud OAuth2 &amp; Spring Cloud Alibaba、 vue element admin</td></tr><tr><td>社区活跃度</td><td>只有公司内部使用。维护得少</td><td>维护活跃<br>2018年维护至今<br>gitee赞：18.9K<br><br>2020gitee十佳开源项目</td><td>2013年维护至今<br>维护活跃<br>gitlab赞：18.9K<br></td><td>维护活跃<br>github赞:5.3K</td></tr><tr><td>文档完善度</td><td>文档相对较少</td><td>文档完善<br>每个版本都有文档<br></td><td></td><td>文档完善度中等，部分文档还需要付费</td></tr><tr><td>付费情况</td><td>无</td><td>无</td><td>商业版付费</td><td>部分文档付费</td></tr><tr><td>性能</td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><h2 id="_3-功能点区别" tabindex="-1"><a class="header-anchor" href="#_3-功能点区别"><span>3. 功能点区别</span></a></h2><table><thead><tr><th>考量点</th><th>公司内部框架</th><th>若依管理系统</th><th>jeecg管理系统</th><th>FEBS权限管理系统</th></tr></thead><tbody><tr><td>基础RBAC权限</td><td>支持</td><td>支持</td><td>支持</td><td>支持</td></tr><tr><td>登录日志</td><td>支持</td><td>支持</td><td>支持</td><td>支持</td></tr><tr><td>操作日志</td><td>支持</td><td>支持</td><td>支持</td><td>支持</td></tr><tr><td>字典管理</td><td>支持</td><td>支持</td><td>支持</td><td>不支持</td></tr><tr><td>数据权限（仅部门成员能查看）</td><td>不支持</td><td>支持</td><td>支持</td><td>不支持</td></tr><tr><td>岗位</td><td>不支持</td><td>支持</td><td>支持</td><td>不支持</td></tr><tr><td>租户管理（SAAS）</td><td>不支持</td><td>不支持</td><td>支持</td><td>不支持</td></tr><tr><td>系统通告</td><td>不支持</td><td>不支持</td><td>支持</td><td>不支持</td></tr><tr><td>消息中心&amp;消息模板</td><td>不支持</td><td>不支持</td><td>支持</td><td>不支持</td></tr><tr><td>在线用户与强退</td><td>不支持</td><td>支持</td><td>支持</td><td>支持</td></tr><tr><td>监控</td><td>无</td><td>cpu,服务器信息，jvm，磁盘,缓存监控</td><td>网管，sql监控，性能监控，jvm，tomcat,缓存监控</td><td></td></tr><tr><td>参数配置</td><td>支持</td><td>支持</td><td></td><td></td></tr><tr><td>代码生成</td><td>不支持</td><td>支持（包含前后端代码，非常规范，扩展性也很强）</td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><h2 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结"><span>4. 总结</span></a></h2><ul><li><p>jeecg管理系统</p><p>项目功能强大，同时也造成过于复杂化，很多功能本身用不着。部分功能还收费，暂不考虑</p><ul><li><p>租户设计（SAAS）：适合需要将系统分配给其他公司自管理</p><blockquote><p>平台管理员只能管理租户的账号和相关信息，不能操作租户的内部业务。各租户拥有自己的角色和权限，相互不能影响。不同租户的数据、服务在物理上共享，而在逻辑上完全隔离，对于每个租户来说这个系统好像只为自己服务。为了确保系统数据的安全性，使用户能放心地将商业数据放在系统上使用，SaaS系统的权限管理在系统设计中成为尤为重要的一环。</p></blockquote></li><li><p>大屏设计器：非常适合有拖拽业务设计场景</p></li></ul></li><li><p><strong>若依（推荐）：</strong></p><p>满足核心功能，文档齐全。与当前团队适配程度高。推荐这个若依</p></li><li><p>febs：</p><p>相对来说偏简单了点，可以学习借鉴</p></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/36619380" target="_blank" rel="noopener noreferrer">技术选型的艺术</a></p><p><a href="http://www.woshipm.com/pd/824126.html" target="_blank" rel="noopener noreferrer">SaaS系统用户权限设计</a></p>',17)]))}const h=d(a,[["render",i],["__file","manage-system-technical-selection.html.vue"]]),o=JSON.parse('{"path":"/posts/Architect/manage-system/manage-system-technical-selection.html","title":"后台管理系统技术选型","lang":"zh-CN","frontmatter":{"description":"后台管理系统技术选型 1. 背景简介 1.1 原有框架问题 原有公司内部框架已经很老了，最早的架构师已经离职了，维护更新不及时。且原有框架也有不少槽点 UI 样式丑陋，原有框架是前后端不分离的，早期都是由java后端人员开发。现在的前端人员接手困难，后端人员维护起来效率低 数据持久层框架采用beetlsql，学习成本高，且后期遇到问题难排查 在改造成前...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/manage-system/manage-system-technical-selection.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"后台管理系统技术选型"}],["meta",{"property":"og:description","content":"后台管理系统技术选型 1. 背景简介 1.1 原有框架问题 原有公司内部框架已经很老了，最早的架构师已经离职了，维护更新不及时。且原有框架也有不少槽点 UI 样式丑陋，原有框架是前后端不分离的，早期都是由java后端人员开发。现在的前端人员接手困难，后端人员维护起来效率低 数据持久层框架采用beetlsql，学习成本高，且后期遇到问题难排查 在改造成前..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"后台管理系统技术选型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景简介","slug":"_1-背景简介","link":"#_1-背景简介","children":[{"level":3,"title":"1.1 原有框架问题","slug":"_1-1-原有框架问题","link":"#_1-1-原有框架问题","children":[]},{"level":3,"title":"1.2 新框架选型目标","slug":"_1-2-新框架选型目标","link":"#_1-2-新框架选型目标","children":[]}]},{"level":2,"title":"2. 考量点","slug":"_2-考量点","link":"#_2-考量点","children":[]},{"level":2,"title":"3. 功能点区别","slug":"_3-功能点区别","link":"#_3-功能点区别","children":[]},{"level":2,"title":"4. 总结","slug":"_4-总结","link":"#_4-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.58,"words":1374},"filePathRelative":"posts/Architect/manage-system/manage-system-technical-selection.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 背景简介</h2>\\n<h3>1.1 原有框架问题</h3>\\n<p>原有公司内部框架已经很老了，最早的架构师已经离职了，维护更新不及时。且原有框架也有不少槽点</p>\\n<ul>\\n<li>UI 样式丑陋，原有框架是前后端不分离的，早期都是由java后端人员开发。现在的前端人员接手困难，后端人员维护起来效率低</li>\\n<li>数据持久层框架采用beetlsql，学习成本高，且后期遇到问题难排查</li>\\n<li>在改造成前后端分离时，登录与权限控制改造成本高</li>\\n<li>缺少数据监控功能</li>\\n</ul>\\n<h3>1.2 新框架选型目标</h3>\\n<p>现年底公司业务比较平稳，明年新项目启动，这段时间正好有时间可以做一个技术选型。以下是选型目标</p>","autoDesc":true}');export{h as comp,o as data};
