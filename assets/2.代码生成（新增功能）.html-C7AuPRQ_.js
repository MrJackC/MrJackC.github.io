import{_ as e,c as s,a as o,o as n}from"./app-CZJgH_ea.js";const i={};function r(p,a){return n(),s("div",null,a[0]||(a[0]=[o('<h1 id="代码生成-新增功能" tabindex="-1"><a class="header-anchor" href="#代码生成-新增功能"><span>代码生成（新增功能）</span></a></h1><p>大部分项目里，其实有很多代码是重复的，几乎每个模块都有 CRUD 增删改查的功能，而这些功能的实现代码往往是大同小异的。如果这些功能都要自己去手写，非常无聊枯燥，浪费时间且效率很低，还可能会写错。</p><p>所以这种重复性的代码，项目提供了 <a href="https://github.com/YunaiV/ruoyi-vue-pro/tree/master/yudao-module-infra/yudao-module-infra-biz/src/main/java/cn/iocoder/yudao/module/infra/service/codegen" target="_blank" rel="noopener noreferrer">codegen (opens new window)</a>代码生成器，只需要在数据库中设计好表结构，就可以一键生成前后端代码 + 单元测试 + Swagger 接口文档 + Validator 参数校验。</p><p>下面，我们使用代码生成器，在 <code>yudao-module-system</code> 模块中，开发一个【<strong>用户组</strong>】的功能。</p><h2 id="👍-相关视频教程" tabindex="-1"><a class="header-anchor" href="#👍-相关视频教程"><span><a href="https://doc.iocoder.cn/new-feature/#%F0%9F%91%8D-%E7%9B%B8%E5%85%B3%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B" target="_blank" rel="noopener noreferrer">#</a>👍 相关视频教程</span></a></h2><ul><li><a href="https://t.zsxq.com/07Jm2vrzJ" target="_blank" rel="noopener noreferrer">从零开始 05：如何 5 分钟，开发一个新功能？(opens new window)</a></li></ul><h2 id="_1-数据库表结构设计" tabindex="-1"><a class="header-anchor" href="#_1-数据库表结构设计"><span><a href="https://doc.iocoder.cn/new-feature/#_1-%E6%95%B0%E6%8D%AE%E5%BA%93%E8%A1%A8%E7%BB%93%E6%9E%84%E8%AE%BE%E8%AE%A1" target="_blank" rel="noopener noreferrer">#</a>1. 数据库表结构设计</span></a></h2><p>设计用户组的数据库表名为 <code>system_group</code>，其建表语句如下：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> TABLE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> `</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">system_group</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">` (</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    `id`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> bigint</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NOT NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> AUTO_INCREMENT COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;编号&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    `name`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">255</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">COLLATE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4_unicode_ci </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NOT NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;名字&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    `description`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">512</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">COLLATE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4_unicode_ci </span><span style="color:#C678DD;--shiki-dark:#C678DD;">DEFAULT</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;描述&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    `status`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> tinyint</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NOT NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;状态&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    `creator`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">64</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">CHARACTER</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> SET</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">COLLATE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4_unicode_ci </span><span style="color:#C678DD;--shiki-dark:#C678DD;">DEFAULT</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;创建者&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    `create_time`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> datetime</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NOT NULL</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> CURRENT_TIMESTAMP COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;创建时间&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    `updater`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">64</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">CHARACTER</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> SET</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">COLLATE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> utf8mb4_unicode_ci </span><span style="color:#C678DD;--shiki-dark:#C678DD;">DEFAULT</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;更新者&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    `update_time`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> datetime</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NOT NULL</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> CURRENT_TIMESTAMP </span><span style="color:#C678DD;--shiki-dark:#C678DD;">ON</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> UPDATE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> CURRENT_TIMESTAMP COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;更新时间&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    `deleted`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> bit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NOT NULL</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> b</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;0&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;是否删除&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    `tenant_id`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> bigint</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NOT NULL</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;0&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;租户编号&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    PRIMARY KEY</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#98C379;--shiki-dark:#98C379;">`id`</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">USING</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> BTREE</span></span>\n<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) ENGINE</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">InnoDB </span><span style="color:#C678DD;--shiki-dark:#C678DD;">DEFAULT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> CHARSET</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">utf8mb4 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">COLLATE</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">utf8mb4_unicode_ci COMMENT</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;用户组&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><figure><img src="https://doc.iocoder.cn/img/代码生成/01.png" alt="建表语句" tabindex="0" loading="lazy"><figcaption>建表语句</figcaption></figure><p>① 表名的前缀，要和 Maven Module 的模块名保持一致。例如说，用户组在 <code>yudao-module-system</code> 模块，所以表名的前缀是 <code>system_</code>。</p><p>疑问：为什么要保持一致？</p><p>代码生成器会自动解析表名的前缀，获得其所属的 Maven Module 模块，简化配置过程。</p><p>② 设置 ID 主键，一般推荐使用 <code>bigint</code> 长整形，并设置自增长。</p><p>③ 正确设置每个字段是否允许空，代码生成器会根据它生成参数是否允许空的校验规则。</p><p>④ 正确设置注释，代码生成器会根据它生成字段名与提示等信息。</p><p>⑤ 添加 <code>creator</code>、<code>create_time</code>、<code>updater</code>、<code>update_time</code>、<code>deleted</code> 是必须设置的系统字段；如果开启多租户的功能，并且该表需要多租户的隔离，则需要添加 <code>tenant_id</code> 字段。</p><h2 id="_2-代码生成" tabindex="-1"><a class="header-anchor" href="#_2-代码生成"><span><a href="https://doc.iocoder.cn/new-feature/#_2-%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90" target="_blank" rel="noopener noreferrer">#</a>2. 代码生成</span></a></h2><p>① 点击 [基础设施 -&gt; 代码生成] 菜单，点击 [基于 DB 导入] 按钮，选择 <code>system_group</code> 表，后点击 [确认] 按钮。</p><figure><img src="https://doc.iocoder.cn/img/代码生成/02.png" alt="基于 DB 导入" tabindex="0" loading="lazy"><figcaption>基于 DB 导入</figcaption></figure><p>代码实现？</p><p>可见 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-infra/yudao-module-infra-biz/src/main/java/cn/iocoder/yudao/module/infra/service/codegen/inner/CodegenBuilder.java" target="_blank" rel="noopener noreferrer">CodegenBuilder (opens new window)</a>类，自动解析数据库的表结构，生成默认的配置。</p><p>② 点击 <code>system_group</code> 所在行的 [编辑] 按钮，修改生成配置。后操作如下：</p><figure><img src="https://doc.iocoder.cn/img/代码生成/03.png" alt="基本信息" tabindex="0" loading="lazy"><figcaption>基本信息</figcaption></figure><figure><img src="https://doc.iocoder.cn/img/代码生成/04.png" alt="字段信息" tabindex="0" loading="lazy"><figcaption>字段信息</figcaption></figure><ul><li>将 <code>status</code> 字段的显示类型为【下拉框】，字典类型为【系统状态】。</li><li>将 <code>description</code> 字段的【查询】取消。</li><li>将 <code>id</code>、<code>name</code>、<code>description</code>、<code>status</code> 字段的【示例】填写上。</li></ul><p>字段信息</p><ul><li>插入：新增时，是否传递该字段。</li><li>编辑：修改时，是否传递该字段。</li><li>列表：Table 表格，是否展示该字段。</li><li>查询：搜索框，是否支持该字段查询，查询的条件是什么。</li><li>允许空：新增或修改时，是否必须传递该字段，用于 Validator 参数校验。</li><li>字典类型：在显示类型是下拉框、单选框、复选框时，选择使用的字典。</li><li>示例：参数示例，用于 Swagger 接口文档的 <code>example</code> 示例。</li></ul><figure><img src="https://doc.iocoder.cn/img/代码生成/05.png" alt="生成信息" tabindex="0" loading="lazy"><figcaption>生成信息</figcaption></figure><ul><li>将【上级菜单】设置为【系统管理】。</li><li>将【前端类型】设置为【Vue2 Element UI 标准模版】或【Vue3 Element Plus 标准模版】，具体根据你使用哪种管理后台。</li></ul><p>生成信息</p><ul><li>生成场景：分成管理后台、用户 App 两种，用于生成 Controller 放在 <code>admin</code> 还是 <code>app</code> 包。</li><li>上级菜单：生成场景是管理后台时，需要设置其所属的上级菜单。</li><li>前端类型： 提供多种 UI 模版。 <ul><li>【Vue3 Element Plus Schema 模版】，对应 <a href="https://doc.iocoder.cn/vue3/crud-schema" target="_blank" rel="noopener noreferrer">《前端手册 Vue 3.X —— CRUD 组件》</a> 说明。</li><li>后端的 <code>application.yaml</code> 配置文件中的 <code>yudao.codegen.front-type</code> 配置项，设置默认的 UI 模版，避免每次都需要设置。</li></ul></li></ul><p>完成后，点击 [提交] 按钮，保存生成配置。</p><p>③ 点击 <code>system_group</code> 所在行的 [预览] 按钮，在线预览生成的代码，检查是否符合预期。</p><figure><img src="https://doc.iocoder.cn/img/代码生成/06.png" alt="生成信息" tabindex="0" loading="lazy"><figcaption>生成信息</figcaption></figure><p>④ 点击 <code>system_group</code> 所在行的 [生成代码] 按钮，下载生成代码的压缩包，双击进行解压。</p><figure><img src="https://doc.iocoder.cn/img/代码生成/07.png" alt="生成代码" tabindex="0" loading="lazy"><figcaption>生成代码</figcaption></figure><p>代码实现？</p><p>可见 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-infra/yudao-module-infra-biz/src/main/java/cn/iocoder/yudao/module/infra/service/codegen/inner/CodegenEngine.java" target="_blank" rel="noopener noreferrer">CodegenEngine (opens new window)</a>类，基于 Velocity 模板引擎，生成具体代码。模板文件，可见 <a href="https://github.com/YunaiV/ruoyi-vue-pro/tree/master/yudao-module-infra/yudao-module-infra-biz/src/main/resources/codegen" target="_blank" rel="noopener noreferrer"><code>resources/codegen</code> (opens new window)</a>目录。</p><h2 id="_3-代码运行" tabindex="-1"><a class="header-anchor" href="#_3-代码运行"><span><a href="https://doc.iocoder.cn/new-feature/#_3-%E4%BB%A3%E7%A0%81%E8%BF%90%E8%A1%8C" target="_blank" rel="noopener noreferrer">#</a>3. 代码运行</span></a></h2><p>本小节，我们将生成的代码，复制到项目中，并进行运行。</p><h3 id="_3-1-后端运行" tabindex="-1"><a class="header-anchor" href="#_3-1-后端运行"><span><a href="https://doc.iocoder.cn/new-feature/#_3-1-%E5%90%8E%E7%AB%AF%E8%BF%90%E8%A1%8C" target="_blank" rel="noopener noreferrer">#</a>3.1 后端运行</span></a></h3><p>① 将生成的后端代码，复制到项目中。操作如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/代码生成/10.png" alt="复制后端" tabindex="0" loading="lazy"><figcaption>复制后端</figcaption></figure><p>② 将 <code>ErrorCodeConstants.java_手动操作</code> 文件的错误码，复制到该模块 ErrorCodeConstants 类中，并设置对应的错误码编号，之后进行删除。操作如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/代码生成/11.png" alt="添加错误码" tabindex="0" loading="lazy"><figcaption>添加错误码</figcaption></figure><p>③ 将 <code>h2.sql</code> 的 CREATE 语句复制到该模块的 <code>create_tables.sql</code> 文件，DELETE 语句复制到该模块的 <code>clean.sql</code>。操作如下图：</p><figure><img src="https://doc.iocoder.cn/img/代码生成/12.png" alt="复制 h2 SQL" tabindex="0" loading="lazy"><figcaption>复制 h2 SQL</figcaption></figure><p>疑问：<code>create_tables.sql</code> 和 <code>clean.sql</code> 文件的作用是什么？</p><p>项目的单元测试，需要使用到 H2 内存数据库，<code>create_tables.sql</code> 用于创建所有的表结构，<code>clean.sql</code> 用于每个单元测试的方法跑完后清理数据。</p><p>然后，运行 GroupServiceImplTest 单元测试，执行通过。</p><p>④ 打开数据库工具，运行代码生成的 <code>sql/sql.sql</code> 文件，用于菜单的初始化。</p><figure><img src="https://doc.iocoder.cn/img/代码生成/13.png" alt="初始化菜单" tabindex="0" loading="lazy"><figcaption>初始化菜单</figcaption></figure><p>⑤ Debug 运行 YudaoServerApplication 类，启动后端项目。通过 IDEA 的 [Actuator -&gt; Mappings] 菜单，可以看到代码生成的 GroupController 的 RESTful API 接口已经生效。</p><figure><img src="https://doc.iocoder.cn/img/代码生成/14.png" alt="RESTful API 接口" tabindex="0" loading="lazy"><figcaption>RESTful API 接口</figcaption></figure><h3 id="_3-2-前端运行" tabindex="-1"><a class="header-anchor" href="#_3-2-前端运行"><span><a href="https://doc.iocoder.cn/new-feature/#_3-2-%E5%89%8D%E7%AB%AF%E8%BF%90%E8%A1%8C" target="_blank" rel="noopener noreferrer">#</a>3.2 前端运行</span></a></h3><p>① 将生成的前端代码，复制到项目中。操作如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/代码生成/15.png" alt="复制前端" tabindex="0" loading="lazy"><figcaption>复制前端</figcaption></figure><p>② <strong>重新</strong>执行 <code>npm run dev</code> 命令，启动前端项目。点击 [系统管理 -&gt; 用户组管理] 菜单，就可以看到用户组的 UI 界面。</p><figure><img src="https://doc.iocoder.cn/img/代码生成/16.png" alt="前端界面" tabindex="0" loading="lazy"><figcaption>前端界面</figcaption></figure><hr><p>至此，我们已经完成了【<strong>用户组</strong>】功能的代码生成，基本节省了你 80% 左右的开发任务，后续可以根据自己的需求，进行剩余的 20% 的开发！</p><h2 id="_4-后续变更" tabindex="-1"><a class="header-anchor" href="#_4-后续变更"><span><a href="https://doc.iocoder.cn/new-feature/#_4-%E5%90%8E%E7%BB%AD%E5%8F%98%E6%9B%B4" target="_blank" rel="noopener noreferrer">#</a>4. 后续变更</span></a></h2><p>随着业务的发展，已经生成代码的功能需要变更。继续以【<strong>用户组</strong>】举例子，它的 <code>system_group</code> 表需要新增一个分类 <code>category</code> 字段，此时<strong>不建议</strong>使用代码生成器，而是直接修改已经生成的代码：</p><p>① 后端：修改 GroupDO 数据实体类、GroupBaseVO 基础 VO 类、GroupExcelVO 导出结果 VO 类，新增 <code>category</code> 字段。</p><p>② 前端：修改 <code>index.vue</code> 界面的列表和表单组件，新增 <code>category</code> 字段。</p><p>③ 重新编译后后端，并进行启动。</p><p>over！非常简单方便，即保证了代码的整洁规范，又不增加过多的开发量。</p>',68)]))}const l=e(i,[["render",r],["__file","2.代码生成（新增功能）.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/2.%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90%EF%BC%88%E6%96%B0%E5%A2%9E%E5%8A%9F%E8%83%BD%EF%BC%89.html","title":"代码生成（新增功能）","lang":"zh-CN","frontmatter":{"description":"代码生成（新增功能） 大部分项目里，其实有很多代码是重复的，几乎每个模块都有 CRUD 增删改查的功能，而这些功能的实现代码往往是大同小异的。如果这些功能都要自己去手写，非常无聊枯燥，浪费时间且效率很低，还可能会写错。 所以这种重复性的代码，项目提供了 codegen (opens new window)代码生成器，只需要在数据库中设计好表结构，就可以...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/2.%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90%EF%BC%88%E6%96%B0%E5%A2%9E%E5%8A%9F%E8%83%BD%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"代码生成（新增功能）"}],["meta",{"property":"og:description","content":"代码生成（新增功能） 大部分项目里，其实有很多代码是重复的，几乎每个模块都有 CRUD 增删改查的功能，而这些功能的实现代码往往是大同小异的。如果这些功能都要自己去手写，非常无聊枯燥，浪费时间且效率很低，还可能会写错。 所以这种重复性的代码，项目提供了 codegen (opens new window)代码生成器，只需要在数据库中设计好表结构，就可以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90/01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T07:41:53.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-21T07:41:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码生成（新增功能）\\",\\"image\\":[\\"https://doc.iocoder.cn/img/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90/01.png\\",\\"https://doc.iocoder.cn/img/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90/02.png\\",\\"https://doc.iocoder.cn/img/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90/03.png\\",\\"https://doc.iocoder.cn/img/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90/04.png\\",\\"https://doc.iocoder.cn/img/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90/05.png\\",\\"https://doc.iocoder.cn/img/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90/06.png\\",\\"https://doc.iocoder.cn/img/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90/07.png\\",\\"https://doc.iocoder.cn/img/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90/10.png\\",\\"https://doc.iocoder.cn/img/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90/11.png\\",\\"https://doc.iocoder.cn/img/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90/12.png\\",\\"https://doc.iocoder.cn/img/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90/13.png\\",\\"https://doc.iocoder.cn/img/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90/14.png\\",\\"https://doc.iocoder.cn/img/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90/15.png\\",\\"https://doc.iocoder.cn/img/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90/16.png\\"],\\"dateModified\\":\\"2024-11-21T07:41:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#👍 相关视频教程","slug":"👍-相关视频教程","link":"#👍-相关视频教程","children":[]},{"level":2,"title":"#1. 数据库表结构设计","slug":"_1-数据库表结构设计","link":"#_1-数据库表结构设计","children":[]},{"level":2,"title":"#2. 代码生成","slug":"_2-代码生成","link":"#_2-代码生成","children":[]},{"level":2,"title":"#3. 代码运行","slug":"_3-代码运行","link":"#_3-代码运行","children":[{"level":3,"title":"#3.1 后端运行","slug":"_3-1-后端运行","link":"#_3-1-后端运行","children":[]},{"level":3,"title":"#3.2 前端运行","slug":"_3-2-前端运行","link":"#_3-2-前端运行","children":[]}]},{"level":2,"title":"#4. 后续变更","slug":"_4-后续变更","link":"#_4-后续变更","children":[]}],"git":{"createdTime":1732174913000,"updatedTime":1732174913000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.74,"words":2023},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/2.后端手册/2.代码生成（新增功能）.md","localizedDate":"2024年11月21日","excerpt":"\\n<p>大部分项目里，其实有很多代码是重复的，几乎每个模块都有 CRUD 增删改查的功能，而这些功能的实现代码往往是大同小异的。如果这些功能都要自己去手写，非常无聊枯燥，浪费时间且效率很低，还可能会写错。</p>\\n<p>所以这种重复性的代码，项目提供了 <a href=\\"https://github.com/YunaiV/ruoyi-vue-pro/tree/master/yudao-module-infra/yudao-module-infra-biz/src/main/java/cn/iocoder/yudao/module/infra/service/codegen\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">codegen (opens new window)</a>代码生成器，只需要在数据库中设计好表结构，就可以一键生成前后端代码 + 单元测试 + Swagger 接口文档 + Validator 参数校验。</p>","autoDesc":true}');export{l as comp,c as data};
