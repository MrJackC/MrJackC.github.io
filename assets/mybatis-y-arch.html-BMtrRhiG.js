import{_ as a,c as t,a as i,o as s}from"./app-tJW29Kmg.js";const l={};function n(r,e){return s(),t("div",null,e[0]||(e[0]=[i('<h1 id="mybatis详解-总体框架设计" tabindex="-1"><a class="header-anchor" href="#mybatis详解-总体框架设计"><span>MyBatis详解 - 总体框架设计</span></a></h1><blockquote><p>MyBatis整体架构包含哪些层呢？这些层次是如何设计的呢？</p></blockquote><h2 id="_1-mybatis架构概览" tabindex="-1"><a class="header-anchor" href="#_1-mybatis架构概览"><span>1. MyBatis架构概览</span></a></h2><p>MyBatis框架整体设计如下:</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231532792.png" alt="image-20220727202556295" tabindex="0" loading="lazy"><figcaption>image-20220727202556295</figcaption></figure><h3 id="_1-1-接口层-和数据库交互的方式" tabindex="-1"><a class="header-anchor" href="#_1-1-接口层-和数据库交互的方式"><span>1.1 接口层-和数据库交互的方式</span></a></h3><p>MyBatis和数据库的交互有两种方式：</p><ul><li>使用传统的MyBatis提供的API；</li><li>使用Mapper接口；</li></ul><h4 id="_1-1-1-使用传统的mybatis提供的api" tabindex="-1"><a class="header-anchor" href="#_1-1-1-使用传统的mybatis提供的api"><span>1.1.1 使用传统的MyBatis提供的API</span></a></h4><p>这是传统的传递Statement Id 和查询参数给 SqlSession 对象，使用 SqlSession对象完成和数据库的交互；MyBatis 提供了非常方便和简单的API，供用户实现对数据库的增删改查数据操作，以及对数据库连接信息和MyBatis 自身配置信息的维护操作。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231532843.png" alt="image-20220727202754413" tabindex="0" loading="lazy"><figcaption>image-20220727202754413</figcaption></figure><p>上述使用MyBatis 的方法，是创建一个和数据库打交道的SqlSession对象，然后根据Statement Id 和参数来操作数据库，这种方式固然很简单和实用，但是它不符合面向对象语言的概念和面向接口编程的编程习惯。由于面向接口的编程是面向对象的大趋势，MyBatis 为了适应这一趋势，增加了第二种使用MyBatis 支持接口（Interface）调用方式。</p><h4 id="_1-1-2-使用mapper接口" tabindex="-1"><a class="header-anchor" href="#_1-1-2-使用mapper接口"><span>1.1.2 使用Mapper接口</span></a></h4><p>MyBatis 将配置文件中的每一个<code>&lt;mapper&gt;</code> 节点抽象为一个 Mapper 接口，而这个接口中声明的方法和跟<code>&lt;mapper&gt;</code> 节点中的<code>&lt;select|update|delete|insert&gt;</code> 节点项对应，即<code>&lt;select|update|delete|insert&gt;</code> 节点的id值为Mapper 接口中的方法名称，parameterType 值表示Mapper 对应方法的入参类型，而resultMap 值则对应了Mapper 接口表示的返回值类型或者返回结果集的元素类型。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231532876.png" alt="image-20220727203127027" tabindex="0" loading="lazy"><figcaption>image-20220727203127027</figcaption></figure><p>根据MyBatis 的配置规范配置好后，通过SqlSession.getMapper(XXXMapper.class)方法，MyBatis 会根据相应的接口声明的方法信息，通过动态代理机制生成一个Mapper 实例，我们使用Mapper 接口的某一个方法时，MyBatis 会根据这个方法的方法名和参数类型，确定Statement Id，底层还是通过SqlSession.select(&quot;statementId&quot;,parameterObject);或者SqlSession.update(&quot;statementId&quot;,parameterObject); 等等来实现对数据库的操作， MyBatis 引用Mapper 接口这种调用方式，纯粹是为了满足面向接口编程的需要。（其实还有一个原因是在于，面向接口的编程，使得用户在接口上可以使用注解来配置SQL语句，这样就可以脱离XML配置文件，实现“0配置”）。</p><h3 id="_1-2-数据处理层" tabindex="-1"><a class="header-anchor" href="#_1-2-数据处理层"><span>1.2 数据处理层</span></a></h3><p>数据处理层可以说是MyBatis 的核心，从大的方面上讲，它要完成两个功能：</p><ul><li>通过传入参数构建动态SQL语句；</li><li>SQL语句的执行以及封装查询结果集成<code>List&lt;E&gt;</code></li></ul><h4 id="_1-2-1-参数映射和动态sql语句生成" tabindex="-1"><a class="header-anchor" href="#_1-2-1-参数映射和动态sql语句生成"><span>1.2.1 参数映射和动态SQL语句生成</span></a></h4><p>动态语句生成可以说是MyBatis框架非常优雅的一个设计，MyBatis 通过传入的参数值，使用 Ognl 来动态地构造SQL语句，使得MyBatis 有很强的灵活性和扩展性。</p><p>参数映射指的是对于java 数据类型和jdbc数据类型之间的转换：这里有包括两个过程：查询阶段，我们要将java类型的数据，转换成jdbc类型的数据，通过 preparedStatement.setXXX() 来设值；另一个就是对resultset查询结果集的jdbcType 数据转换成java 数据类型。</p><h4 id="_1-2-2-sql语句的执行以及封装查询结果集成list" tabindex="-1"><a class="header-anchor" href="#_1-2-2-sql语句的执行以及封装查询结果集成list"><span>1.2.2 SQL语句的执行以及封装查询结果集成List</span></a></h4><p>动态SQL语句生成之后，MyBatis 将执行SQL语句，并将可能返回的结果集转换成<code>List&lt;E&gt;</code> 列表。MyBatis 在对结果集的处理中，支持结果集关系一对多和多对一的转换，并且有两种支持方式，一种为嵌套查询语句的查询，还有一种是嵌套结果集的查询。</p><h3 id="_1-3-框架支撑层" tabindex="-1"><a class="header-anchor" href="#_1-3-框架支撑层"><span>1.3 框架支撑层</span></a></h3><ul><li>事务管理机制</li></ul><p>事务管理机制对于ORM框架而言是不可缺少的一部分，事务管理机制的质量也是考量一个ORM框架是否优秀的一个标准。</p><ul><li>连接池管理机制</li></ul><p>由于创建一个数据库连接所占用的资源比较大， 对于数据吞吐量大和访问量非常大的应用而言，连接池的设计就显得非常重要。</p><ul><li>缓存机制</li></ul><p>为了提高数据利用率和减小服务器和数据库的压力，MyBatis 会对于一些查询提供会话级别的数据缓存，会将对某一次查询，放置到SqlSession 中，在允许的时间间隔内，对于完全相同的查询，MyBatis 会直接将缓存结果返回给用户，而不用再到数据库中查找。</p><ul><li>SQL语句的配置方式</li></ul><p>传统的MyBatis 配置SQL 语句方式就是使用XML文件进行配置的，但是这种方式不能很好地支持面向接口编程的理念，为了支持面向接口的编程，MyBatis 引入了Mapper接口的概念，面向接口的引入，对使用注解来配置SQL 语句成为可能，用户只需要在接口上添加必要的注解即可，不用再去配置XML文件了，但是，目前的MyBatis 只是对注解配置SQL 语句提供了有限的支持，某些高级功能还是要依赖XML配置文件配置SQL 语句。</p><h3 id="_1-4-引导层" tabindex="-1"><a class="header-anchor" href="#_1-4-引导层"><span>1.4 引导层</span></a></h3><p>引导层是配置和启动MyBatis配置信息的方式。MyBatis 提供两种方式来引导MyBatis ：基于XML配置文件的方式和基于Java API 的方式。</p><h2 id="_2-主要构件及其相互关系" tabindex="-1"><a class="header-anchor" href="#_2-主要构件及其相互关系"><span>2. 主要构件及其相互关系</span></a></h2><p>从MyBatis代码实现的角度来看，主体构件和关系如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231532908.png" alt="image-20220727204256217" tabindex="0" loading="lazy"><figcaption>image-20220727204256217</figcaption></figure><p>主要的核心部件解释如下：</p><ul><li><code>SqlSession</code> 作为MyBatis工作的主要顶层API，表示和数据库交互的会话，完成必要数据库增删改查功能</li><li><code>Executor</code> MyBatis执行器，是MyBatis 调度的核心，负责SQL语句的生成和查询缓存的维护</li><li><code>StatementHandler</code> 封装了JDBC Statement操作，负责对JDBC statement 的操作，如设置参数、将Statement结果集转换成List集合。</li><li><code>ParameterHandler</code> 负责对用户传递的参数转换成JDBC Statement 所需要的参数，</li><li><code>ResultSetHandler</code> 负责将JDBC返回的ResultSet结果集对象转换成List类型的集合；</li><li><code>TypeHandler</code> 负责java数据类型和jdbc数据类型之间的映射和转换</li><li><code>MappedStatement</code> MappedStatement维护了一条<code>&lt;select|update|delete|insert&gt;</code>节点的封装，</li><li><code>SqlSource</code> 负责根据用户传递的parameterObject，动态地生成SQL语句，将信息封装到BoundSql对象中，并返回</li><li><code>BoundSql</code> 表示动态生成的SQL语句以及相应的参数信息</li><li><code>Configuration</code> MyBatis所有的配置信息都维持在Configuration对象之中。</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/framework/orm-mybatis/mybatis-y-arch.html" target="_blank" rel="noopener noreferrer">MyBatis详解 - 总体框架设计</a></p>',42)]))}const o=a(l,[["render",n],["__file","mybatis-y-arch.html.vue"]]),c=JSON.parse(`{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/mybatis/mybatis-y-arch.html","title":"MyBatis详解 - 总体框架设计","lang":"zh-CN","frontmatter":{"aliases":"MyBatis详解 - 总体框架设计, 'MyBatis详解 - 总体框架设计'","tags":null,"cssclass":null,"source":null,"order":20,"category":["MyBatis"],"created":"2024-02-22 10:50","updated":"2024-04-23 15:39","description":"MyBatis详解 - 总体框架设计 MyBatis整体架构包含哪些层呢？这些层次是如何设计的呢？ 1. MyBatis架构概览 MyBatis框架整体设计如下: image-20220727202556295image-20220727202556295 1.1 接口层-和数据库交互的方式 MyBatis和数据库的交互有两种方式： 使用传统的MyBa...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/mybatis/mybatis-y-arch.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"MyBatis详解 - 总体框架设计"}],["meta",{"property":"og:description","content":"MyBatis详解 - 总体框架设计 MyBatis整体架构包含哪些层呢？这些层次是如何设计的呢？ 1. MyBatis架构概览 MyBatis框架整体设计如下: image-20220727202556295image-20220727202556295 1.1 接口层-和数据库交互的方式 MyBatis和数据库的交互有两种方式： 使用传统的MyBa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231532792.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MyBatis详解 - 总体框架设计\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231532792.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231532843.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231532876.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231532908.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. MyBatis架构概览","slug":"_1-mybatis架构概览","link":"#_1-mybatis架构概览","children":[{"level":3,"title":"1.1 接口层-和数据库交互的方式","slug":"_1-1-接口层-和数据库交互的方式","link":"#_1-1-接口层-和数据库交互的方式","children":[]},{"level":3,"title":"1.2 数据处理层","slug":"_1-2-数据处理层","link":"#_1-2-数据处理层","children":[]},{"level":3,"title":"1.3 框架支撑层","slug":"_1-3-框架支撑层","link":"#_1-3-框架支撑层","children":[]},{"level":3,"title":"1.4 引导层","slug":"_1-4-引导层","link":"#_1-4-引导层","children":[]}]},{"level":2,"title":"2. 主要构件及其相互关系","slug":"_2-主要构件及其相互关系","link":"#_2-主要构件及其相互关系","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.86,"words":1757},"filePathRelative":"posts/Java/Java第三方依赖/mybatis/mybatis-y-arch.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>MyBatis整体架构包含哪些层呢？这些层次是如何设计的呢？</p>\\n</blockquote>\\n<h2>1. MyBatis架构概览</h2>\\n<p>MyBatis框架整体设计如下:</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231532792.png\\" alt=\\"image-20220727202556295\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220727202556295</figcaption></figure>","autoDesc":true}`);export{o as comp,c as data};
