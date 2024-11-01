import{_ as a,c as s,a as e,o as i}from"./app-DP7tPpgD.js";const r={};function n(l,t){return i(),s("div",null,t[0]||(t[0]=[e('<h1 id="mybatis概念" tabindex="-1"><a class="header-anchor" href="#mybatis概念"><span>Mybatis概念</span></a></h1><h3 id="_1-什么是mybatis" tabindex="-1"><a class="header-anchor" href="#_1-什么是mybatis"><span>1. 什么是MyBatis？</span></a></h3><blockquote><p>MyBatis是一款优秀的基于java的持久层框架，它内部封装了jdbc，使开发者只需要关注sql语句本身，而不需要花费精力去处理加载驱动、创建连接、创建statement等繁杂的过程。</p></blockquote><p>MyBatis 是一款优秀的持久层框架，它支持定制化 SQL、存储过程以及高级映射。</p><ul><li>mybatis是一个优秀的基于java的持久层框架，它内部封装了jdbc，使开发者只需要关注sql语句本身，而不需要花费精力去处理加载驱动、创建连接、创建statement等繁杂的过程。</li><li>mybatis通过xml或注解的方式将要执行的各种statement配置起来，并通过java对象和statement中sql的动态参数进行映射生成最终执行的sql语句，最后由mybatis框架执行sql并将结果映射为java对象并返回。</li></ul><p><strong>MyBatis的主要设计目</strong>的就是让我们对执行SQL语句时对输入输出的数据管理更加方便，所以方便地写出SQL和方便地获取SQL的执行结果才是MyBatis的核心竞争力。</p><p><strong>Mybatis的功能架构分为三层</strong>：</p><ul><li><strong>API接口层</strong>：提供给外部使用的接口API，开发人员通过这些本地API来操纵数据库。接口层一接收到调用请求就会调用数据处理层来完成具体的数据处理。</li><li><strong>数据处理层</strong>：负责具体的SQL查找、SQL解析、SQL执行和执行结果映射处理等。它主要的目的是根据调用的请求完成一次数据库操作。</li><li><strong>基础支撑层</strong>：负责最基础的功能支撑，包括连接管理、事务管理、配置加载和缓存处理，这些都是共用的东西，将他们抽取出来作为最基础的组件。为上层的数据处理层提供最基础的支撑。</li></ul><p>更多介绍可以参考：<a href="https://mybatis.org/mybatis-3/" target="_blank" rel="noopener noreferrer">MyBatis3 官方网站</a></p><h3 id="_2-为什么说mybatis是半自动orm" tabindex="-1"><a class="header-anchor" href="#_2-为什么说mybatis是半自动orm"><span>2. 为什么说MyBatis是半自动ORM？</span></a></h3><blockquote><p>为什么说MyBatis是半自动ORM？</p></blockquote><ul><li><strong>什么是ORM</strong>？</li></ul><p>JDBC，ORM知识点可以参考<a href="">SpringBoot入门 - 添加内存数据库H2</a></p><ul><li><strong>什么是全自动ORM</strong>？</li></ul><p>ORM框架可以根据对象关系模型直接获取，查询关联对象或者关联集合对象，简单而言使用全自动的ORM框架查询时可以不再写SQL。典型的框架如Hibernate； 因为Spring-data-jpa很多代码也是Hibernate团队贡献的，所以spring-data-jpa也是全自动ORM框架。</p><ul><li><strong>MyBatis是半自动ORM</strong>？</li></ul><p>Mybatis 在查询关联对象或关联集合对象时，需要手动编写 sql 来完成，所以，称之为半自动ORM 映射工具。</p><p>（PS: 正是由于MyBatis是半自动框架，基于MyBatis技术栈的框架开始考虑兼容MyBatis开发框架的基础上提供自动化的能力，比如MyBatis-plus等框架）</p><h3 id="_3-mybatis栈技术演进" tabindex="-1"><a class="header-anchor" href="#_3-mybatis栈技术演进"><span>3. MyBatis栈技术演进</span></a></h3><blockquote><p>了解MyBatis技术栈的演进，对你构建基于MyBatis的知识体系极为重要。</p></blockquote><h4 id="_3-1-jdbc-自行封装jdbcutil" tabindex="-1"><a class="header-anchor" href="#_3-1-jdbc-自行封装jdbcutil"><span>3.1 JDBC，自行封装JDBCUtil</span></a></h4><p>Java5的时代，通常的开发中会自行封装JDBC的Util，比如创建 Connection，以及确保关闭 Connection等。</p><h4 id="_3-2-ibatis" tabindex="-1"><a class="header-anchor" href="#_3-2-ibatis"><span>3.2 IBatis</span></a></h4><p>MyBatis的前身，它封装了绝大多数的 JDBC 样板代码，使得开发者只需关注 SQL 本身，而不需要花费精力去处理例如注册驱动，创建 Connection，以及确保关闭 Connection 这样繁杂的代码。</p><h4 id="_3-3-mybatis" tabindex="-1"><a class="header-anchor" href="#_3-3-mybatis"><span>3.3 MyBatis</span></a></h4><p>伴随着JDK5+ 泛型和注解特性开始流行，IBatis在3.0变更为MyBatis，对泛型和注解等特性开始全面支持，同时支持了很多新的特性，比如：</p><ol><li>mybatis实现了接口绑定，通过Dao接口 和xml映射文件的绑定，自动生成接口的具体实现</li><li>mybatis支持 ognl表达式，比如 <code>&lt;if&gt;, &lt;else&gt;</code>使用ognl进行解析</li><li>mybatis插件机制等，（PageHelper分页插件应用而生，解决了数据库层的分页封装问题）</li></ol><p>所以这个时期，<strong>MyBatis XML 配置方式 + PageHelper</strong> 成为重要的开发方式。</p><h4 id="_3-4-mybatis衍生-代码生成工具等" tabindex="-1"><a class="header-anchor" href="#_3-4-mybatis衍生-代码生成工具等"><span>3.4 MyBatis衍生：代码生成工具等</span></a></h4><p>MyBatis提供了开发上的便捷，但是依然需要写大量的xml配置，并且很多都是CRUD级别的（这便有了很多重复性的工作），所以为了减少重复编码，衍生出了MyBatis代码生成工具, 比如CodeGenerator等。</p><p>其它开发IDE也开始出现封装一些工具和插件来生成代码生成工具等。</p><p>由于后端视图解析引擎多样性（比如freemarker, volicty, thymeleaf等），以及前后端分离前端独立等，为了进一步减少重复代码的编写（包括视图层），自动生成的代码工具也开始演化为自动生成前端视图代码。</p><h4 id="_3-5-pring-mybatis基于注解的配置集成" tabindex="-1"><a class="header-anchor" href="#_3-5-pring-mybatis基于注解的配置集成"><span>3.5 pring+MyBatis基于注解的配置集成</span></a></h4><p>与此同时，Spring 2.5 开始完全支持基于注解的配置并且也支持JSR250 注解。在Spring后续的版本发展倾向于通过注解和Java配置结合使用。基于Spring+MyBatis开发技术栈开始有xml配置方式往注解和java配置方式反向发展。</p><p>Spring Boot的出现便是要解决配置过多的问题，它实际上通过约定大于配置的方式大大简化了用户的配置，对于三方组件使用xx-starter统一的对Bean进行默认初始化，用户只需要很少的配置就可以进行开发了。所以出现了mybatis-spring-boot-starter的封装等。</p><p>这个阶段，主要的开发技术栈是 <strong>Spring + mybatis-spring-boot-starter 自动化配置 + PageHelper</strong>，并且很多数据库实体mapper还是通过xml方式配置的（伴随着使用一些自动化生成工具）。</p><h4 id="_3-6-mybatis-plus" tabindex="-1"><a class="header-anchor" href="#_3-6-mybatis-plus"><span>3.6 MyBatis-Plus</span></a></h4><p>为了更高的效率，出现了MyBatis-Plus这类工具，对MyBatis进行增强。</p><ol><li><strong>考虑到MyBatis是半自动化ORM</strong>，MyBatis-Plus 启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作; 并且内置通用 Mapper、通用 Service，仅仅通过少量配置即可实现单表大部分 CRUD 操作，更有强大的条件构造器，满足各类使用需求；总体上让其支持全自动化的使用方式（本质上借鉴了Hibernate思路）。</li><li><strong>考虑到Java8 Lambda（函数式编程）开始流行</strong>，MyBatis-Plus支持 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错</li><li><strong>考虑到MyBatis还需要独立引入PageHelper分页插件</strong>，MyBatis-Plus支持了内置分页插件，同PageHelper一样基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询</li><li><strong>考虑到自动化代码生成方式</strong>，MyBatis-Plus也支持了内置代码生成器，采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码，支持模板引擎，更有超多自定义配置等您来使用</li><li><strong>考虑到SQL性能优化等问题</strong>，MyBatis-Plus内置性能分析插件, 可输出 SQL 语句以及其执行时间，建议开发测试时启用该功能，能快速揪出慢查询</li><li>其它还有解决一些常见开发问题，比如<strong>支持主键自动生成</strong>，支持4 种主键策略（内含分布式唯一 ID 生成器 - Sequence），可自由配置，完美解决主键问题；以及<strong>内置全局拦截插件</strong>，提供全表 delete 、 update 操作智能分析阻断，也可自定义拦截规则，预防误操作</li></ol><blockquote><p>顶层思维能力</p><p>用这种思路去理解，你便能很快了解MyBatis技术栈的演化（能够快速维护老一些的技术框架），以及理解新的中小项目中MyBatis-Plus被大量使用的原因（新项目的技术选型参考）；所以java全栈知识体系的目标是帮助你构建知识体系，甚至是辅助你培养顶层思维能力。</p></blockquote><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/spring/springboot/springboot-x-mysql-mybatis-xml.html" target="_blank" rel="noopener noreferrer"><strong>SpringBoot集成MySQL - MyBatis XML方式</strong></a></p>',42)]))}const p=a(r,[["render",n],["__file","mybatis-i-overview.html.vue"]]),y=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/mybatis/mybatis-i-overview.html","title":"Mybatis概念","lang":"zh-CN","frontmatter":{"description":"Mybatis概念 1. 什么是MyBatis？ MyBatis是一款优秀的基于java的持久层框架，它内部封装了jdbc，使开发者只需要关注sql语句本身，而不需要花费精力去处理加载驱动、创建连接、创建statement等繁杂的过程。 MyBatis 是一款优秀的持久层框架，它支持定制化 SQL、存储过程以及高级映射。 mybatis是一个优秀的基于...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/mybatis/mybatis-i-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Mybatis概念"}],["meta",{"property":"og:description","content":"Mybatis概念 1. 什么是MyBatis？ MyBatis是一款优秀的基于java的持久层框架，它内部封装了jdbc，使开发者只需要关注sql语句本身，而不需要花费精力去处理加载驱动、创建连接、创建statement等繁杂的过程。 MyBatis 是一款优秀的持久层框架，它支持定制化 SQL、存储过程以及高级映射。 mybatis是一个优秀的基于..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mybatis概念\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":3,"title":"1. 什么是MyBatis？","slug":"_1-什么是mybatis","link":"#_1-什么是mybatis","children":[]},{"level":3,"title":"2. 为什么说MyBatis是半自动ORM？","slug":"_2-为什么说mybatis是半自动orm","link":"#_2-为什么说mybatis是半自动orm","children":[]},{"level":3,"title":"3. MyBatis栈技术演进","slug":"_3-mybatis栈技术演进","link":"#_3-mybatis栈技术演进","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.91,"words":2073},"filePathRelative":"posts/Java/Java第三方依赖/mybatis/mybatis-i-overview.md","localizedDate":"2024年10月21日","excerpt":"\\n<h3>1. 什么是MyBatis？</h3>\\n<blockquote>\\n<p>MyBatis是一款优秀的基于java的持久层框架，它内部封装了jdbc，使开发者只需要关注sql语句本身，而不需要花费精力去处理加载驱动、创建连接、创建statement等繁杂的过程。</p>\\n</blockquote>\\n<p>MyBatis 是一款优秀的持久层框架，它支持定制化 SQL、存储过程以及高级映射。</p>\\n<ul>\\n<li>mybatis是一个优秀的基于java的持久层框架，它内部封装了jdbc，使开发者只需要关注sql语句本身，而不需要花费精力去处理加载驱动、创建连接、创建statement等繁杂的过程。</li>\\n<li>mybatis通过xml或注解的方式将要执行的各种statement配置起来，并通过java对象和statement中sql的动态参数进行映射生成最终执行的sql语句，最后由mybatis框架执行sql并将结果映射为java对象并返回。</li>\\n</ul>","autoDesc":true}');export{p as comp,y as data};
