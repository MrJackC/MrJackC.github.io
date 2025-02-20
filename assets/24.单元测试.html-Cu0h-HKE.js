import{_ as a,c as s,a as t,o}from"./app-4x2aIoqi.js";const r={};function n(i,e){return o(),s("div",null,e[0]||(e[0]=[t(`<h1 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试"><span>单元测试</span></a></h1><p>项目使用 Junit5 + Mockito 实现单元测试，提升代码质量、重复测试效率、部署可靠性等。</p><p>截止目前，项目已经有 500+ 测试用例。</p><p>内容推荐</p><p>如果你想系统学习单元测试，可以阅读<a href="https://www.iocoder.cn/Architecture/books-recommended/?yudao" target="_blank" rel="noopener noreferrer">《有效的单元测试》 (opens new window)</a>这本书，非常适合 Java 工程师。</p><p>如果只是想学习 Spring Boot Test 的话，可以阅读 <a href="https://www.iocoder.cn/Spring-Boot/Unit-Test/?yudao" target="_blank" rel="noopener noreferrer">《芋道 Spring Boot 单元测试 Test 入门 》 (opens new window)</a>文章。</p><h2 id="_1-测试组件" tabindex="-1"><a class="header-anchor" href="#_1-测试组件"><span><a href="https://doc.iocoder.cn/unit-test/#_1-%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6" target="_blank" rel="noopener noreferrer">#</a>1.测试组件</span></a></h2><p><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-test/" target="_blank" rel="noopener noreferrer"><code>yudao-spring-boot-starter-test</code> (opens new window)</a>是项目提供的测试组件，用于单元测试、集成测试等等。</p><h3 id="_1-1-快速测试的基类" tabindex="-1"><a class="header-anchor" href="#_1-1-快速测试的基类"><span><a href="https://doc.iocoder.cn/unit-test/#_1-1-%E5%BF%AB%E9%80%9F%E6%B5%8B%E8%AF%95%E7%9A%84%E5%9F%BA%E7%B1%BB" target="_blank" rel="noopener noreferrer">#</a>1.1 快速测试的基类</span></a></h3><p>测试组件提供了 4 种单元测试的基类，通过继承它们，可以快速的构建单元测试的环境。</p><table><thead><tr><th>基类</th><th>作用</th></tr></thead><tbody><tr><td><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-test/src/main/java/cn/iocoder/yudao/framework/test/core/ut/BaseMockitoUnitTest.java" target="_blank" rel="noopener noreferrer">BaseMockitoUnitTest(opens new window)</a></td><td>纯 Mockito 的单元测试</td></tr><tr><td><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-test/src/main/java/cn/iocoder/yudao/framework/test/core/ut/BaseDbUnitTest.java" target="_blank" rel="noopener noreferrer">BaseDbUnitTest(opens new window)</a></td><td>使用内嵌的 H2 数据库的单元测试</td></tr><tr><td><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-test/src/main/java/cn/iocoder/yudao/framework/test/core/ut/BaseRedisUnitTest.java" target="_blank" rel="noopener noreferrer">BaseRedisUnitTest(opens new window)</a></td><td>使用内嵌的 Redis 缓存的单元测试</td></tr><tr><td><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-test/src/main/java/cn/iocoder/yudao/framework/test/core/ut/BaseDbAndRedisUnitTest.java" target="_blank" rel="noopener noreferrer">BaseDbAndRedisUnitTest(opens new window)</a></td><td>使用内嵌的 H2 数据库 + Redis 缓存的单元测试</td></tr></tbody></table><p>疑问：什么是内嵌的 Redis 缓存？</p><p>基于 <a href="https://github.com/fppt/jedis-mock" target="_blank" rel="noopener noreferrer">jedis-mock (opens new window)</a>开源项目，通过 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-test/src/main/java/cn/iocoder/yudao/framework/test/config/RedisTestConfiguration.java" target="_blank" rel="noopener noreferrer">RedisTestConfiguration (opens new window)</a>配置类，启动一个 Redis 进程。一般情况下，会使用 16379 端口。</p><h3 id="_1-2-测试工具类" tabindex="-1"><a class="header-anchor" href="#_1-2-测试工具类"><span><a href="https://doc.iocoder.cn/unit-test/#_1-2-%E6%B5%8B%E8%AF%95%E5%B7%A5%E5%85%B7%E7%B1%BB" target="_blank" rel="noopener noreferrer">#</a>1.2 测试工具类</span></a></h3><p>① <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-test/src/main/java/cn/iocoder/yudao/framework/test/core/util/RandomUtils.java" target="_blank" rel="noopener noreferrer">RandomUtils (opens new window)</a>基于 <a href="https://github.com/mtedone/podam" target="_blank" rel="noopener noreferrer">podam (opens new window)</a>开源项目，实现 Bean 对象的随机生成。</p><p>② <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-test/src/main/java/cn/iocoder/yudao/framework/test/core/util/AssertUtils" target="_blank" rel="noopener noreferrer">AssertUtils (opens new window)</a>封装 Junit 的 Assert 断言，实现 Bean 对象的断言，支持忽略部分属性。</p><h2 id="_2-basedbunittest-实战案例" tabindex="-1"><a class="header-anchor" href="#_2-basedbunittest-实战案例"><span><a href="https://doc.iocoder.cn/unit-test/#_2-basedbunittest-%E5%AE%9E%E6%88%98%E6%A1%88%E4%BE%8B" target="_blank" rel="noopener noreferrer">#</a>2. BaseDbUnitTest 实战案例</span></a></h2><p>以字典类型模块的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/service/dict/DictDataServiceImpl.java" target="_blank" rel="noopener noreferrer">DictTypeServiceImpl (opens new window)</a>为例子，讲解它的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/test/java/cn/iocoder/yudao/module/system/service/dict/DictDataServiceTest.java" target="_blank" rel="noopener noreferrer">DictTypeServiceTest (opens new window)</a>单元测试的编写实现。</p><h3 id="_2-1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_2-1-引入依赖"><span><a href="https://doc.iocoder.cn/unit-test/#_2-1-%E5%BC%95%E5%85%A5%E4%BE%9D%E8%B5%96" target="_blank" rel="noopener noreferrer">#</a>2.1 引入依赖</span></a></h3><p>在 <code>yudao-module-system-biz</code> 模块中，引入 <code>yudao-spring-boot-starter-test</code> 技术组件。如下所示：</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;cn.iocoder.boot&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;yudao-spring-boot-starter-test&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">scope</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;test&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">scope</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h3 id="_2-2-新建-ut-配置文件" tabindex="-1"><a class="header-anchor" href="#_2-2-新建-ut-配置文件"><span><a href="https://doc.iocoder.cn/unit-test/#_2-2-%E6%96%B0%E5%BB%BA-ut-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6" target="_blank" rel="noopener noreferrer">#</a>2.2 新建 ut 配置文件</span></a></h3><p>在 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/test/resources/" target="_blank" rel="noopener noreferrer"><code>test/resources</code> (opens new window)</a>目录，新建单元测试的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/test/resources/application-unit-test.yaml" target="_blank" rel="noopener noreferrer"><code>application-unit-test.yaml</code> (opens new window)</a>配置文件，内容如下：</p><figure><img src="https://doc.iocoder.cn/img/单元测试/02.png" alt="application-unit-test.yaml\` 配置文件" tabindex="0" loading="lazy"><figcaption>application-unit-test.yaml\` 配置文件</figcaption></figure><h3 id="_2-3-添加-h2-sql-脚本" tabindex="-1"><a class="header-anchor" href="#_2-3-添加-h2-sql-脚本"><span><a href="https://doc.iocoder.cn/unit-test/#_2-3-%E6%B7%BB%E5%8A%A0-h2-sql-%E8%84%9A%E6%9C%AC" target="_blank" rel="noopener noreferrer">#</a>2.3 添加 H2 SQL 脚本</span></a></h3><p>修改 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/test/resources/sql/" target="_blank" rel="noopener noreferrer"><code>test/resources/sql</code> (opens new window)</a>目录的两个 H2 SQL 脚本：</p><p>① 在 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/test/resources/sql/create_tables.sql" target="_blank" rel="noopener noreferrer"><code>create_tables.sql</code> (opens new window)</a>文件中，添加 <code>system_dict_type</code> 的 H2 建表语句。SQL 如下：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> TABLE</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> IF</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NOT</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> EXISTS</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;system_dict_type&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    &quot;id&quot;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> bigint</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NOT NULL</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> GENERATED</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> BY</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> AS</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> IDENTITY</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    &quot;name&quot;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NOT NULL</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    &quot;type&quot;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NOT NULL</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    &quot;status&quot;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> tinyint</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NOT NULL</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;0&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    &quot;remark&quot;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">500</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">DEFAULT</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    &quot;creator&quot;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">64</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">DEFAULT</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    &quot;create_time&quot;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> timestamp</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NOT NULL</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> CURRENT_TIMESTAMP,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    &quot;updater&quot;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">64</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">DEFAULT</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    &quot;update_time&quot;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> timestamp</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NOT NULL</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> CURRENT_TIMESTAMP,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    &quot;deleted&quot;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> bit</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NOT NULL</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> FALSE,</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    PRIMARY KEY</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;id&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;字典类型表&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>注意，H2 和 MySQL 的建表语句有区别，需要手动进行转换。如果你不想进行转换，可以使用 [基础设置 -&gt; 代码生成] 菜单的代码生成器功能，如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/单元测试/03.png" alt="基础设置 -&gt; 代码生成" tabindex="0" loading="lazy"><figcaption>基础设置 -&gt; 代码生成</figcaption></figure><p>② 在 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/test/resources/sql/clean.sql" target="_blank" rel="noopener noreferrer"><code>clean.sql</code> (opens new window)</a>文件中，添加 <code>system_dict_type</code> 的清空数据的语句。SQL 如下：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">DELETE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> FROM</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;system_dict_type&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>每次单元测试的方法执行完后，会执行 <code>clean.sql</code> 脚本，进行数据的清理，保证每个单元测试的方法的数据隔离性。</p><h3 id="_2-3-新建-dicttypeservicetest-类" tabindex="-1"><a class="header-anchor" href="#_2-3-新建-dicttypeservicetest-类"><span><a href="https://doc.iocoder.cn/unit-test/#_2-3-%E6%96%B0%E5%BB%BA-dicttypeservicetest-%E7%B1%BB" target="_blank" rel="noopener noreferrer">#</a>2.3 新建 DictTypeServiceTest 类</span></a></h3><p>新建 DictTypeServiceTest 测试类，继承 BaseMockitoUnitTest 基类，并完成它的配置。代码如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/单元测试/01.png" alt="DictTypeServiceTest 总体" tabindex="0" loading="lazy"><figcaption>DictTypeServiceTest 总体</figcaption></figure><ul><li>属于自己模块的，使用 Spring 初始化成真实的 Bean，然后通过 <code>@Resource</code> 注入。例如说：<code>dictTypeService</code>、<code>dictTypeMapper</code></li><li>属于别人模块的，使用 Spring <code>@MockBean</code> 注解，模拟 Mock 成一个 Bean 后注入。例如说：<code>dictDataService</code></li></ul><p>疑问：为什么有的进行 Mock，有的不进行 Mock 呢？</p><ul><li>单元测试需要避免对外部的依赖，而 <code>dictDataService</code> 是外部依赖，所以需要 Mock 掉。</li><li><code>dictTypeMapper</code> 某种程度来说，也是一种外部依赖，但是通过内嵌的 H2 内存数据库，进行“真实”的数据库操作，反而单元测试的编写效率更高，效果更好，所以不需要 Mock 掉。</li></ul><p>另外，[基础设置 -&gt; 代码生成] 菜单的代码生成器功能，已经生成了绝大多数的单元测试的逻辑，这里主要是希望让你了解单元测试的具体使用，所以并没有使用它。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/单元测试/04.png" alt="基础设置 -&gt; 代码生成" tabindex="0" loading="lazy"><figcaption>基础设置 -&gt; 代码生成</figcaption></figure><h3 id="_2-4-新增方法的单测" tabindex="-1"><a class="header-anchor" href="#_2-4-新增方法的单测"><span><a href="https://doc.iocoder.cn/unit-test/#_2-4-%E6%96%B0%E5%A2%9E%E6%96%B9%E6%B3%95%E7%9A%84%E5%8D%95%E6%B5%8B" target="_blank" rel="noopener noreferrer">#</a>2.4 新增方法的单测</span></a></h3><figure><img src="https://doc.iocoder.cn/img/单元测试/05.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_2-5-修改方法的单测" tabindex="-1"><a class="header-anchor" href="#_2-5-修改方法的单测"><span><a href="https://doc.iocoder.cn/unit-test/#_2-5-%E4%BF%AE%E6%94%B9%E6%96%B9%E6%B3%95%E7%9A%84%E5%8D%95%E6%B5%8B" target="_blank" rel="noopener noreferrer">#</a>2.5 修改方法的单测</span></a></h3><figure><img src="https://doc.iocoder.cn/img/单元测试/06.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_2-6-删除方法的单测" tabindex="-1"><a class="header-anchor" href="#_2-6-删除方法的单测"><span><a href="https://doc.iocoder.cn/unit-test/#_2-6-%E5%88%A0%E9%99%A4%E6%96%B9%E6%B3%95%E7%9A%84%E5%8D%95%E6%B5%8B" target="_blank" rel="noopener noreferrer">#</a>2.6 删除方法的单测</span></a></h3><figure><img src="https://doc.iocoder.cn/img/单元测试/07.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_2-7-单条查询方法的单测" tabindex="-1"><a class="header-anchor" href="#_2-7-单条查询方法的单测"><span><a href="https://doc.iocoder.cn/unit-test/#_2-7-%E5%8D%95%E6%9D%A1%E6%9F%A5%E8%AF%A2%E6%96%B9%E6%B3%95%E7%9A%84%E5%8D%95%E6%B5%8B" target="_blank" rel="noopener noreferrer">#</a>2.7 单条查询方法的单测</span></a></h3><figure><img src="https://doc.iocoder.cn/img/单元测试/08.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_2-8-分页查询方法的单测" tabindex="-1"><a class="header-anchor" href="#_2-8-分页查询方法的单测"><span><a href="https://doc.iocoder.cn/unit-test/#_2-8-%E5%88%86%E9%A1%B5%E6%9F%A5%E8%AF%A2%E6%96%B9%E6%B3%95%E7%9A%84%E5%8D%95%E6%B5%8B" target="_blank" rel="noopener noreferrer">#</a>2.8 分页查询方法的单测</span></a></h3><figure><img src="https://doc.iocoder.cn/img/单元测试/09.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="_3-basemockitounittest-实战案例" tabindex="-1"><a class="header-anchor" href="#_3-basemockitounittest-实战案例"><span><a href="https://doc.iocoder.cn/unit-test/#_3-basemockitounittest-%E5%AE%9E%E6%88%98%E6%A1%88%E4%BE%8B" target="_blank" rel="noopener noreferrer">#</a>3. BaseMockitoUnitTest 实战案例</span></a></h2><p>一些类由于不依赖 MySQL 和 Redis，可以通过继承 BaseMockitoUnitTest 基类，实现纯 Mockito 的单元测试。例如说 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/test/java/cn/iocoder/yudao/module/system/service/sms/SmsSendServiceTest.java" target="_blank" rel="noopener noreferrer">SmsSendServiceTest (opens new window)</a>单元测试类，代码如下：</p><figure><img src="https://doc.iocoder.cn/img/单元测试/10.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>具体 SmsSendServiceTest 的每个测试方法，和 DictTypeServiceTest 并没有什么差别，还是 Mock 模拟 + Assert 断言 + Verify 调用，你可以自己花点时间瞅瞅。</p><p>上次更新: 2022/04/22, 00:36:05</p>`,56)]))}const l=a(r,[["render",n],["__file","24.单元测试.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/24.%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95.html","title":"单元测试","lang":"zh-CN","frontmatter":{"description":"单元测试 项目使用 Junit5 + Mockito 实现单元测试，提升代码质量、重复测试效率、部署可靠性等。 截止目前，项目已经有 500+ 测试用例。 内容推荐 如果你想系统学习单元测试，可以阅读《有效的单元测试》 (opens new window)这本书，非常适合 Java 工程师。 如果只是想学习 Spring Boot Test 的话，可以...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/24.%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"单元测试"}],["meta",{"property":"og:description","content":"单元测试 项目使用 Junit5 + Mockito 实现单元测试，提升代码质量、重复测试效率、部署可靠性等。 截止目前，项目已经有 500+ 测试用例。 内容推荐 如果你想系统学习单元测试，可以阅读《有效的单元测试》 (opens new window)这本书，非常适合 Java 工程师。 如果只是想学习 Spring Boot Test 的话，可以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95/02.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T07:41:53.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-21T07:41:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"单元测试\\",\\"image\\":[\\"https://doc.iocoder.cn/img/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95/02.png\\",\\"https://doc.iocoder.cn/img/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95/03.png\\",\\"https://doc.iocoder.cn/img/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95/01.png\\",\\"https://doc.iocoder.cn/img/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95/04.png\\",\\"https://doc.iocoder.cn/img/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95/05.png\\",\\"https://doc.iocoder.cn/img/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95/06.png\\",\\"https://doc.iocoder.cn/img/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95/07.png\\",\\"https://doc.iocoder.cn/img/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95/08.png\\",\\"https://doc.iocoder.cn/img/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95/09.png\\",\\"https://doc.iocoder.cn/img/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95/10.png\\"],\\"dateModified\\":\\"2024-11-21T07:41:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#1.测试组件","slug":"_1-测试组件","link":"#_1-测试组件","children":[{"level":3,"title":"#1.1 快速测试的基类","slug":"_1-1-快速测试的基类","link":"#_1-1-快速测试的基类","children":[]},{"level":3,"title":"#1.2 测试工具类","slug":"_1-2-测试工具类","link":"#_1-2-测试工具类","children":[]}]},{"level":2,"title":"#2. BaseDbUnitTest 实战案例","slug":"_2-basedbunittest-实战案例","link":"#_2-basedbunittest-实战案例","children":[{"level":3,"title":"#2.1 引入依赖","slug":"_2-1-引入依赖","link":"#_2-1-引入依赖","children":[]},{"level":3,"title":"#2.2 新建 ut 配置文件","slug":"_2-2-新建-ut-配置文件","link":"#_2-2-新建-ut-配置文件","children":[]},{"level":3,"title":"#2.3 添加 H2 SQL 脚本","slug":"_2-3-添加-h2-sql-脚本","link":"#_2-3-添加-h2-sql-脚本","children":[]},{"level":3,"title":"#2.3 新建 DictTypeServiceTest 类","slug":"_2-3-新建-dicttypeservicetest-类","link":"#_2-3-新建-dicttypeservicetest-类","children":[]},{"level":3,"title":"#2.4 新增方法的单测","slug":"_2-4-新增方法的单测","link":"#_2-4-新增方法的单测","children":[]},{"level":3,"title":"#2.5 修改方法的单测","slug":"_2-5-修改方法的单测","link":"#_2-5-修改方法的单测","children":[]},{"level":3,"title":"#2.6 删除方法的单测","slug":"_2-6-删除方法的单测","link":"#_2-6-删除方法的单测","children":[]},{"level":3,"title":"#2.7 单条查询方法的单测","slug":"_2-7-单条查询方法的单测","link":"#_2-7-单条查询方法的单测","children":[]},{"level":3,"title":"#2.8 分页查询方法的单测","slug":"_2-8-分页查询方法的单测","link":"#_2-8-分页查询方法的单测","children":[]}]},{"level":2,"title":"#3. BaseMockitoUnitTest 实战案例","slug":"_3-basemockitounittest-实战案例","link":"#_3-basemockitounittest-实战案例","children":[]}],"git":{"createdTime":1732174913000,"updatedTime":1732174913000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.43,"words":1629},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/2.后端手册/24.单元测试.md","localizedDate":"2024年11月21日","excerpt":"\\n<p>项目使用 Junit5 + Mockito 实现单元测试，提升代码质量、重复测试效率、部署可靠性等。</p>\\n<p>截止目前，项目已经有 500+ 测试用例。</p>\\n<p>内容推荐</p>\\n<p>如果你想系统学习单元测试，可以阅读<a href=\\"https://www.iocoder.cn/Architecture/books-recommended/?yudao\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">《有效的单元测试》 (opens new window)</a>这本书，非常适合 Java 工程师。</p>\\n<p>如果只是想学习 Spring Boot Test 的话，可以阅读 <a href=\\"https://www.iocoder.cn/Spring-Boot/Unit-Test/?yudao\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">《芋道 Spring Boot 单元测试 Test 入门 》 (opens new window)</a>文章。</p>","autoDesc":true}');export{l as comp,c as data};
