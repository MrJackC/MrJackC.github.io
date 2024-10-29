import{_ as a,c as n,a as i,o as e}from"./app-DEK5G3U7.js";const t={};function l(r,s){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="spring进阶-spring事务原理" tabindex="-1"><a class="header-anchor" href="#spring进阶-spring事务原理"><span>Spring进阶 - Spring事务原理</span></a></h1><h2 id="_1-spring事务的基本原理" tabindex="-1"><a class="header-anchor" href="#_1-spring事务的基本原理"><span>1. Spring事务的基本原理</span></a></h2><p>Spring事务的本质其实就是数据库对事务的支持，没有数据库的事务支持，spring是无法提供事务功能的。对于纯JDBC操作数据库，想要用到事务，可以按照以下步骤进行：</p><ol><li>获取连接 Connection con = DriverManager.getConnection()</li><li>开启事务con.setAutoCommit(true/false);</li><li>执行CRUD</li><li>提交事务/回滚事务 con.commit() / con.rollback();</li><li>关闭连接 conn.close();</li></ol><p>使用Spring的事务管理功能后，我们可以不再写步骤 2 和 4 的代码，而是由Spirng 自动完成。那么Spring是如何在我们书写的 CRUD 之前和之后开启事务和关闭事务的呢？解决这个问题，也就可以从整体上理解Spring的事务管理实现原理了。</p><h3 id="_1-1-spring事务-使用案例" tabindex="-1"><a class="header-anchor" href="#_1-1-spring事务-使用案例"><span>1.1 Spring事务 使用案例</span></a></h3><p>下面简单地介绍下，注解方式为例子</p><ol><li>配置文件开启注解驱动，在相关的类和方法上通过注解@Transactional标识。</li><li><strong>spring 在启动的时候会去解析生成相关的bean，这时候会查看拥有相关注解的类和方法，并且为这些类和方法生成代理</strong>，并根据@Transaction的相关参数进行相关配置注入，这样就在代理中为我们把相关的事务处理掉了（开启正常提交事务，异常回滚事务）。</li><li>真正的数据库层的事务提交和回滚是通过binlog或者redo log实现的。</li></ol><h2 id="_2-spring的事务机制-platformtransactionmanager接口" tabindex="-1"><a class="header-anchor" href="#_2-spring的事务机制-platformtransactionmanager接口"><span>2. <strong>Spring的事务机制</strong>（PlatformTransactionManager接口）</span></a></h2><p><strong>所谓事务管理，其实就是“按照给定的事务规则来执行提交或者回滚操作”。</strong></p><p><strong>Spring并不直接管理事务，而是提供了多种事务管理器</strong> ，他们将事务管理的职责委托给Hibernate或者JTA等持久化机制所提供的相关平台框架的事务来实现。 Spring事务管理器的接口是： <strong>org.springframework.transaction.PlatformTransactionManager</strong> ，通过这个接口，Spring为各个平台如JDBC、Hibernate等都提供了对应的事务管理器，但是具体的实现就是各个平台自己的事情了。</p><h3 id="_2-1-各平台事务管理器" tabindex="-1"><a class="header-anchor" href="#_2-1-各平台事务管理器"><span>2.1 各平台事务管理器</span></a></h3><table><thead><tr><th style="text-align:left;">数据访问技术</th><th style="text-align:left;">实现</th></tr></thead><tbody><tr><td style="text-align:left;">JDBC</td><td style="text-align:left;">DataSourceTransactionManager</td></tr><tr><td style="text-align:left;">JPA</td><td style="text-align:left;">JapTransactionManager</td></tr><tr><td style="text-align:left;">Hibernate</td><td style="text-align:left;">HibernateTransactionManager</td></tr><tr><td style="text-align:left;">JDO</td><td style="text-align:left;">JdoTransactionManager</td></tr><tr><td style="text-align:left;">分布式事务</td><td style="text-align:left;">JtaTransactionManager</td></tr></tbody></table><p>在程序中定义事务管理器的代码如下：</p><div class="language-javascript" data-ext="javascript" data-title="javascript"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Bean</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">public</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> PlatformTransactionManager</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> transactionManager</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() { </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> JpaTransactionManager</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> transactionManager</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> JpaTransactionManager</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(); </span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> transactionManager</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setDataSource</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">dataSource</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()); </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> transactionManager</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="_2-2-platformtransactionmanager接口代码如下" tabindex="-1"><a class="header-anchor" href="#_2-2-platformtransactionmanager接口代码如下"><span>2.2 PlatformTransactionManager接口代码如下：</span></a></h3><p>PlatformTransactionManager接口中定义了三个方法：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">Public </span><span style="color:#C678DD;--shiki-dark:#C678DD;">interface</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> PlatformTransactionManager</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()...</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // Return a currently active transaction or create a new one, according to the specified propagation behavior（根据指定的传播行为，返回当前活动的事务或创建一个新事务。）</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    TransactionStatus</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getTransaction</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">TransactionDefinition</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> definition</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> throws</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> TransactionException</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // Commit the given transaction, with regard to its status（使用事务目前的状态提交事务）</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    Void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> commit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">TransactionStatus</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> status</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> throws</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> TransactionException</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // Perform a rollback of the given transaction（对执行的事务进行回滚）</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    Void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> rollback</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">TransactionStatus</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> status</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> throws</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> TransactionException</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span></code></pre></div><h2 id="_3-声名式事务" tabindex="-1"><a class="header-anchor" href="#_3-声名式事务"><span>3. <strong>声名式事务</strong></span></a></h2><p>Spring支持声名式事务，即使用注解来选择需要使用事务的方法，它使用@Transactional注解在方法上表明该方法需要事务支持。这是一个基于AOP的实现操作。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Transactional</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> saveSomething</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Long</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> name) { </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //数据库操作 </span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><p>在此处需要特别注意的是，此@Transactional注解来自org.springframework.transaction.annotation包，而不是javax.transaction。</p><h3 id="_3-1-aop-代理的两种实现" tabindex="-1"><a class="header-anchor" href="#_3-1-aop-代理的两种实现"><span>3.1 <strong>AOP 代理的两种实现：</strong></span></a></h3><ul><li><p>jdk是代理接口</p><p>注：私有方法必然不会存在在接口里，所以就不会被拦截到；</p></li><li><p>cglib是子类</p><p>注：private的方法照样不会出现在子类里，也不能被拦截。</p></li></ul><h4 id="_3-1-1-java-动态代理。" tabindex="-1"><a class="header-anchor" href="#_3-1-1-java-动态代理。"><span>3.1.1 <strong>Java 动态代理。</strong></span></a></h4><p>具体有如下四步骤：</p><ol><li>通过实现 InvocationHandler 接口创建自己的调用处理器；</li><li>通过为 Proxy 类指定 ClassLoader 对象和一组 interface 来创建动态代理类；</li><li>通过反射机制获得动态代理类的构造函数，其唯一参数类型是调用处理器接口类型；</li><li>通过构造函数创建动态代理类实例，构造时调用处理器对象作为参数被传入。</li></ol><h4 id="_3-1-2-gclib代理" tabindex="-1"><a class="header-anchor" href="#_3-1-2-gclib代理"><span>3.1.2 <strong>GCLIB代理</strong></span></a></h4><p>cglib（Code Generation Library）是一个强大的,高性能,高质量的Code生成类库。它可以在运行期扩展Java类与实现Java接口。</p><ul><li>cglib封装了asm，可以在运行期动态生成新的class（<strong>子类</strong>）。</li><li>cglib用于AOP，jdk中的proxy必须基于接口，cglib却没有这个限制。</li></ul><h4 id="_3-1-3-原理区别" tabindex="-1"><a class="header-anchor" href="#_3-1-3-原理区别"><span>3.1.3 <strong>原理区别：</strong></span></a></h4><p>java动态代理是利用反射机制生成一个实现代理接口的匿名类，在调用具体方法前调用InvokeHandler来处理。而cglib动态代理是利用asm开源包，对代理对象类的class文件加载进来，通过修改其字节码生成子类来处理。</p><ol><li>如果目标对象实现了接口，默认情况下会采用JDK的动态代理实现AOP</li><li>如果目标对象实现了接口，可以强制使用CGLIB实现AOP</li><li>如果目标对象没有实现了接口，必须采用CGLIB库，spring会自动在JDK动态代理和CGLIB之间转换</li></ol><p><strong>如果是类内部方法直接不是走代理，这个时候可以通过维护一个自身实例的代理。</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Service</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> PersonServiceImpl</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> implements</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> PersonService</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Autowired</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    PersonRepository</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> personRepository</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 注入自身代理对象，在本类内部方法调用事务的传递性才会生效</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Autowired</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    PersonService</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> selfProxyPersonService</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 测试事务的传递性</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> person</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@return</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Transactional</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Person</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> save</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Person</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> person</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Person</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> p</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> personRepository</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">save</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(person);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        try</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // 新开事务 独立回滚</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            selfProxyPersonService</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">delete</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Exception</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">printStackTrace</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        try</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // 使用当前事务 全部回滚</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            selfProxyPersonService</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">save2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(person);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Exception</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">printStackTrace</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        personRepository</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">save</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(person);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> p;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Transactional</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> save2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Person</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> person</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        personRepository</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">save</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(person);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        throw</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> RuntimeException</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Transactional</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">propagation</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Propagation</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">REQUIRES_NEW</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> delete</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        personRepository</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">delete</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1L</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        throw</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> RuntimeException</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-spring-事务的传播属性" tabindex="-1"><a class="header-anchor" href="#_4-spring-事务的传播属性"><span>4. <strong>Spring 事务的传播属性</strong></span></a></h2><p>所谓spring事务的传播属性，就是定义在存在多个事务同时存在的时候，spring应该如何处理这些事务的行为。这些属性在TransactionDefinition中定义，具体常量的解释见下表：</p><table><thead><tr><th style="text-align:left;">常量名称</th><th style="text-align:left;">常量解释</th></tr></thead><tbody><tr><td style="text-align:left;">PROPAGATION_REQUIRED</td><td style="text-align:left;">支持当前事务，如果当前没有事务，就新建一个事务。这是最常见的选择，也是 Spring 默认的事务的传播。</td></tr><tr><td style="text-align:left;">PROPAGATION_REQUIRES_NEW</td><td style="text-align:left;">新建事务，如果当前存在事务，把当前事务挂起。新建的事务将和被挂起的事务没有任何关系，是两个独立的事务，外层事务失败回滚之后，不能回滚内层事务执行的结果，内层事务失败抛出异常，外层事务捕获，也可以不处理回滚操作</td></tr><tr><td style="text-align:left;">PROPAGATION_SUPPORTS</td><td style="text-align:left;">支持当前事务，如果当前没有事务，就以非事务方式执行。</td></tr><tr><td style="text-align:left;">PROPAGATION_MANDATORY</td><td style="text-align:left;">支持当前事务，如果当前没有事务，就抛出异常。</td></tr><tr><td style="text-align:left;">PROPAGATION_NOT_SUPPORTED</td><td style="text-align:left;">以非事务方式执行操作，如果当前存在事务，就把当前事务挂起。</td></tr><tr><td style="text-align:left;">PROPAGATION_NEVER</td><td style="text-align:left;">以非事务方式执行，如果当前存在事务，则抛出异常。</td></tr><tr><td style="text-align:left;">PROPAGATION_NESTED</td><td style="text-align:left;">如果一个活动的事务存在，则运行在一个嵌套的事务中。如果没有活动事务，则按REQUIRED属性执行。它使用了一个单独的事务，这个事务拥有多个可以回滚的保存点。内部事务的回滚不会对外部事务造成影响。它只对DataSourceTransactionManager事务管理器起效。</td></tr></tbody></table><h2 id="_5-数据库隔离级别" tabindex="-1"><a class="header-anchor" href="#_5-数据库隔离级别"><span>5. <strong>数据库隔离级别</strong></span></a></h2><table><thead><tr><th style="text-align:left;">隔离级别</th><th style="text-align:left;">隔离级别的值</th><th style="text-align:left;">导致的问题</th></tr></thead><tbody><tr><td style="text-align:left;">Read-Uncommitted</td><td style="text-align:left;">0</td><td style="text-align:left;"><strong>可能会导致脏读、幻读或不可重复读</strong></td></tr><tr><td style="text-align:left;">Read-Committed</td><td style="text-align:left;">1</td><td style="text-align:left;"><strong>可以阻止脏读，但是幻读或不可重复读仍有可能发生</strong></td></tr><tr><td style="text-align:left;">Repeatable-Read</td><td style="text-align:left;">2</td><td style="text-align:left;"><strong>可以阻止脏读和不可重复读，但幻读仍有可能发生。</strong></td></tr><tr><td style="text-align:left;">Serializable</td><td style="text-align:left;">3</td><td style="text-align:left;"><strong>该级别可以防止脏读、不可重复读以及幻读</strong>。但是这将严重影响程序的性能</td></tr></tbody></table><p>脏读：一事务对数据进行了增删改，但未提交，另一事务可以读取到未提交的数据。如果第一个事务这时候回滚了，那么第二个事务就读到了脏数据。</p><p>不可重复读：一个事务中发生了两次读操作，第一次读操作和第二次操作之间，另外一个事务对数据进行了修改，这时候两次读取的数据是不一致的。</p><p>幻读：第一个事务对一定范围的数据进行批量修改，第二个事务在这个范围增加一条数据，这时候第一个事务就会丢失对新增数据的修改。</p><p>总结：</p><p>隔离级别越高，越能保证数据的完整性和一致性，但是对并发性能的影响也越大。</p><p>大多数的数据库默认隔离级别为 Read Commited，比如 SqlServer、Oracle</p><p>少数数据库默认隔离级别为：Repeatable Read 比如：<a href="https://cloud.tencent.com/product/cdb?from=10680" target="_blank" rel="noopener noreferrer">MySQL</a> InnoDB</p><h2 id="_6-spring中的隔离级别" tabindex="-1"><a class="header-anchor" href="#_6-spring中的隔离级别"><span>6. <strong>Spring中的隔离级别</strong></span></a></h2><table><thead><tr><th style="text-align:left;">常量</th><th style="text-align:left;">解释</th></tr></thead><tbody><tr><td style="text-align:left;">ISOLATION_DEFAULT</td><td style="text-align:left;">这是个 PlatfromTransactionManager 默认的隔离级别，使用数据库默认的事务隔离级别。另外四个与 JDBC 的隔离级别相对应。</td></tr><tr><td style="text-align:left;">ISOLATION_READ_UNCOMMITTED</td><td style="text-align:left;">这是事务最低的隔离级别，它充许另外一个事务可以看到这个事务未提交的数据。这种隔离级别会产生脏读，不可重复读和幻像读。</td></tr><tr><td style="text-align:left;">ISOLATION_READ_COMMITTED</td><td style="text-align:left;">保证一个事务修改的数据提交后才能被另外一个事务读取。另外一个事务不能读取该事务未提交的数据。</td></tr><tr><td style="text-align:left;">ISOLATION_REPEATABLE_READ</td><td style="text-align:left;">这种事务隔离级别可以防止脏读，不可重复读。但是可能出现幻像读。</td></tr><tr><td style="text-align:left;">ISOLATION_SERIALIZABLE</td><td style="text-align:left;">这是花费最高代价但是最可靠的事务隔离级别。事务被处理为顺序执行。</td></tr></tbody></table><h2 id="_7-事务的嵌套" tabindex="-1"><a class="header-anchor" href="#_7-事务的嵌套"><span>7. <strong>事务的嵌套</strong></span></a></h2><p>通过上面的理论知识的铺垫，我们大致知道了数据库事务和spring事务的一些属性和特点，接下来我们通过分析一些嵌套事务的场景，来深入理解spring事务传播的机制。</p><p>假设<strong>外层事务 Service A</strong> 的 Method A() 调用 <strong>内层Service B</strong> 的 Method B()</p><h3 id="_7-1-propagation-required-spring-默认" tabindex="-1"><a class="header-anchor" href="#_7-1-propagation-required-spring-默认"><span>7.1 <strong>PROPAGATION_REQUIRED(spring 默认)</strong></span></a></h3><p>如果ServiceB.methodB() 的事务级别定义为 PROPAGATION_REQUIRED，那么执行 ServiceA.methodA() 的时候spring已经起了事务，这时调用 ServiceB.methodB()，ServiceB.methodB() 看到自己已经运行在 ServiceA.methodA() 的事务内部，就不再起新的事务。</p><p>假如 ServiceB.methodB() 运行的时候发现自己没有在事务中，他就会为自己分配一个事务。</p><p>这样，在 ServiceA.methodA() 或者在 ServiceB.methodB() 内的任何地方出现异常，事务都会被回滚。</p><h3 id="_7-2-propagation-requires-new" tabindex="-1"><a class="header-anchor" href="#_7-2-propagation-requires-new"><span>7.2 <strong>PROPAGATION_REQUIRES_NEW</strong></span></a></h3><p>比如我们设计 ServiceA.methodA() 的事务级别为 PROPAGATION_REQUIRED，ServiceB.methodB() 的事务级别为 PROPAGATION_REQUIRES_NEW。</p><p>那么当执行到 ServiceB.methodB() 的时候，ServiceA.methodA() 所在的事务就会挂起，ServiceB.methodB() 会起一个新的事务，等待 ServiceB.methodB() 的事务完成以后，它才继续执行。</p><p>他与 PROPAGATION_REQUIRED 的事务区别在于事务的回滚程度了。因为 ServiceB.methodB() 是新起一个事务，那么就是存在两个不同的事务。如果 ServiceB.methodB() 已经提交，那么 ServiceA.methodA() 失败回滚，ServiceB.methodB() 是不会回滚的。如果 ServiceB.methodB() 失败回滚，如果他抛出的异常被 ServiceA.methodA() 捕获，ServiceA.methodA() 事务仍然可能提交(主要看B抛出的异常是不是A会回滚的异常)。</p><h3 id="_7-3-propagation-supports" tabindex="-1"><a class="header-anchor" href="#_7-3-propagation-supports"><span>7.3 <strong>PROPAGATION_SUPPORTS</strong></span></a></h3><p>假设ServiceB.methodB() 的事务级别为 PROPAGATION_SUPPORTS，那么当执行到ServiceB.methodB()时，如果发现ServiceA.methodA()已经开启了一个事务，则加入当前的事务，如果发现ServiceA.methodA()没有开启事务，则自己也不开启事务。这种时候，内部方法的事务性完全依赖于最外层的事务。</p><h3 id="_7-4-propagation-nested" tabindex="-1"><a class="header-anchor" href="#_7-4-propagation-nested"><span>7.4 <strong>PROPAGATION_NESTED</strong></span></a></h3><p>现在的情况就变得比较复杂了, ServiceB.methodB() 的事务属性被配置为 PROPAGATION_NESTED, 此时两者之间又将如何协作呢? ServiceB#methodB 如果 rollback, 那么内部事务(即 ServiceB#methodB) 将回滚到它执行前的 SavePoint 而外部事务(即 ServiceA#methodA) 可以有以下两种处理方式:</p><p>a、捕获异常，执行异常分支逻辑</p><div class="language-javascript" data-ext="javascript" data-title="javascript"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> methodA</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() { </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        try</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> { </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            ServiceB</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">methodB</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E06C75;--shiki-dark:#E06C75;">SomeException</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) { </span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // 执行其他业务, 如 ServiceC.methodC(); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        } </span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span></code></pre></div><p>这种方式也是嵌套事务最有价值的地方, 它起到了分支执行的效果, 如果 ServiceB.methodB 失败, 那么执行 ServiceC.methodC(), 而 ServiceB.methodB 已经回滚到它执行之前的 SavePoint, 所以不会产生脏数据(相当于此方法从未执行过), 这种特性可以用在某些特殊的业务中, 而 PROPAGATION_REQUIRED 和 PROPAGATION_REQUIRES_NEW 都没有办法做到这一点。</p><p>b、 外部事务回滚/提交 代码不做任何修改, 那么如果内部事务(ServiceB#methodB) rollback, 那么首先 ServiceB.methodB 回滚到它执行之前的 SavePoint(在任何情况下都会如此), 外部事务(即 ServiceA#methodA) 将根据具体的配置决定自己是 commit 还是 rollback</p><p>另外三种事务传播属性基本用不到，在此不做分析。</p><h2 id="_8-spring-boot-对事务的支持" tabindex="-1"><a class="header-anchor" href="#_8-spring-boot-对事务的支持"><span>8.<strong>Spring Boot 对事务的支持</strong></span></a></h2><p>通过org.springframework.boot.autoconfigure.transaction.TransactionAutoConfiguration类。我们可以看出Spring Boot自动开启了对注解事务的支持 Spring</p><h2 id="_9-只读事务-transactional-readonly-true-的一些概念" tabindex="-1"><a class="header-anchor" href="#_9-只读事务-transactional-readonly-true-的一些概念"><span>9. <strong>只读事务（@Transactional(readOnly = true)）的一些概念</strong></span></a></h2><ul><li>概念：</li></ul><p>从这一点设置的时间点开始（时间点a）到这个事务结束的过程中，其他事务所提交的数据，该事务将看不见！（查询中不会出现别人在时间点a之后提交的数据）。</p><p>@Transcational(readOnly=true) 这个注解一般会写在业务类上，或者其方法上，用来对其添加事务控制。当括号中添加readOnly=true, 则会告诉底层数据源，这个是一个只读事务，对于JDBC而言，只读事务会有一定的速度优化。而这样写的话，事务控制的其他配置则采用默认值，事务的隔离级别(isolation) 为DEFAULT,也就是跟随底层数据源的隔离级别，事务的传播行为(propagation)则是REQUIRED，所以还是会有事务存在，一代在代码中抛出RuntimeException，依然会导致事务回滚。</p><ul><li>应用场合：</li></ul><ol><li>如果你一次执行单条查询语句，则没有必要启用事务支持，数据库默认支持SQL执行期间的读一致性；</li><li>如果你一次执行多条查询语句，例如统计查询，<a href="https://cloud.tencent.com/product/bi?from=10680" target="_blank" rel="noopener noreferrer">报表</a>查询，在这种场景下，多条查询SQL必须保证整体的读一致性，否则，在前条SQL查询之后，后条SQL查询之前，数据被其他用户改变，则该次整体的统计查询将会出现读数据不一致的状态，此时，应该启用事务支持。</li></ol><h2 id="_10-总结" tabindex="-1"><a class="header-anchor" href="#_10-总结"><span>10. <strong>总结</strong></span></a></h2><p>对于项目中需要使用到事务的地方，我建议开发者还是使用spring的TransactionCallback接口来实现事务，不要盲目使用spring事务注解，如果一定要使用注解，那么一定要对spring事务的传播机制和隔离级别有个详细的了解，否则很可能发生意想不到的效果。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://cloud.tencent.com/developer/article/1832182" target="_blank" rel="noopener noreferrer">深入理解Spring事务原理</a></p>`,81)]))}const p=a(t,[["render",l],["__file","spring-x-framework-transaction.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-x-framework-transaction.html","title":"Spring进阶 - Spring事务原理","lang":"zh-CN","frontmatter":{"order":180,"created":"2024-05-14 07:56","updated":"2024-10-11 16:46","description":"Spring进阶 - Spring事务原理 1. Spring事务的基本原理 Spring事务的本质其实就是数据库对事务的支持，没有数据库的事务支持，spring是无法提供事务功能的。对于纯JDBC操作数据库，想要用到事务，可以按照以下步骤进行： 获取连接 Connection con = DriverManager.getConnection() 开...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-x-framework-transaction.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Spring进阶 - Spring事务原理"}],["meta",{"property":"og:description","content":"Spring进阶 - Spring事务原理 1. Spring事务的基本原理 Spring事务的本质其实就是数据库对事务的支持，没有数据库的事务支持，spring是无法提供事务功能的。对于纯JDBC操作数据库，想要用到事务，可以按照以下步骤进行： 获取连接 Connection con = DriverManager.getConnection() 开..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring进阶 - Spring事务原理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. Spring事务的基本原理","slug":"_1-spring事务的基本原理","link":"#_1-spring事务的基本原理","children":[{"level":3,"title":"1.1 Spring事务 使用案例","slug":"_1-1-spring事务-使用案例","link":"#_1-1-spring事务-使用案例","children":[]}]},{"level":2,"title":"2. Spring的事务机制（PlatformTransactionManager接口）","slug":"_2-spring的事务机制-platformtransactionmanager接口","link":"#_2-spring的事务机制-platformtransactionmanager接口","children":[{"level":3,"title":"2.1 各平台事务管理器","slug":"_2-1-各平台事务管理器","link":"#_2-1-各平台事务管理器","children":[]},{"level":3,"title":"2.2 PlatformTransactionManager接口代码如下：","slug":"_2-2-platformtransactionmanager接口代码如下","link":"#_2-2-platformtransactionmanager接口代码如下","children":[]}]},{"level":2,"title":"3. 声名式事务","slug":"_3-声名式事务","link":"#_3-声名式事务","children":[{"level":3,"title":"3.1 AOP 代理的两种实现：","slug":"_3-1-aop-代理的两种实现","link":"#_3-1-aop-代理的两种实现","children":[]}]},{"level":2,"title":"4. Spring 事务的传播属性","slug":"_4-spring-事务的传播属性","link":"#_4-spring-事务的传播属性","children":[]},{"level":2,"title":"5. 数据库隔离级别","slug":"_5-数据库隔离级别","link":"#_5-数据库隔离级别","children":[]},{"level":2,"title":"6. Spring中的隔离级别","slug":"_6-spring中的隔离级别","link":"#_6-spring中的隔离级别","children":[]},{"level":2,"title":"7. 事务的嵌套","slug":"_7-事务的嵌套","link":"#_7-事务的嵌套","children":[{"level":3,"title":"7.1 PROPAGATION_REQUIRED(spring 默认)","slug":"_7-1-propagation-required-spring-默认","link":"#_7-1-propagation-required-spring-默认","children":[]},{"level":3,"title":"7.2 PROPAGATION_REQUIRES_NEW","slug":"_7-2-propagation-requires-new","link":"#_7-2-propagation-requires-new","children":[]},{"level":3,"title":"7.3 PROPAGATION_SUPPORTS","slug":"_7-3-propagation-supports","link":"#_7-3-propagation-supports","children":[]},{"level":3,"title":"7.4 PROPAGATION_NESTED","slug":"_7-4-propagation-nested","link":"#_7-4-propagation-nested","children":[]}]},{"level":2,"title":"8.Spring Boot 对事务的支持","slug":"_8-spring-boot-对事务的支持","link":"#_8-spring-boot-对事务的支持","children":[]},{"level":2,"title":"9. 只读事务（@Transactional(readOnly = true)）的一些概念","slug":"_9-只读事务-transactional-readonly-true-的一些概念","link":"#_9-只读事务-transactional-readonly-true-的一些概念","children":[]},{"level":2,"title":"10. 总结","slug":"_10-总结","link":"#_10-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":12.57,"words":3771},"filePathRelative":"posts/Java/Java框架/Spring/spring-x-framework-transaction.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. Spring事务的基本原理</h2>\\n<p>Spring事务的本质其实就是数据库对事务的支持，没有数据库的事务支持，spring是无法提供事务功能的。对于纯JDBC操作数据库，想要用到事务，可以按照以下步骤进行：</p>\\n<ol>\\n<li>获取连接 Connection con = DriverManager.getConnection()</li>\\n<li>开启事务con.setAutoCommit(true/false);</li>\\n<li>执行CRUD</li>\\n<li>提交事务/回滚事务 con.commit() / con.rollback();</li>\\n<li>关闭连接 conn.close();</li>\\n</ol>","autoDesc":true}');export{p as comp,c as data};
