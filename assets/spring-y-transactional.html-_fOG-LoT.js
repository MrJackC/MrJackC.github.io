import{_ as s,c as n,a as i,o as t}from"./app-BQBjlK2G.js";const r={};function o(e,a){return t(),n("div",null,a[0]||(a[0]=[i(`<h1 id="spring事务" tabindex="-1"><a class="header-anchor" href="#spring事务"><span>Spring事务</span></a></h1><h2 id="_1-事务概念" tabindex="-1"><a class="header-anchor" href="#_1-事务概念"><span>1. 事务概念</span></a></h2><h3 id="_1-1-什么是事务" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是事务"><span>1.1 什么是事务</span></a></h3><p>事务是逻辑上的一组操作，要么都执行，要么都不执行</p><h3 id="_1-2-事务的特性" tabindex="-1"><a class="header-anchor" href="#_1-2-事务的特性"><span>1.2 事务的特性</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231732229.png" alt="image-20191011230807408" tabindex="0" loading="lazy"><figcaption>image-20191011230807408</figcaption></figure><ol><li>原子性：事务是最小的执行单位，不予许分割。事务的原子性确保动作要么全部完成，要么完全不起作用</li><li>一致性：执行事务前后，数据保持一致</li><li>隔离性：并发访问数据库时，一个用户的事务不被其他事务所干扰，个并发事务之间的数据库是独立的</li><li>持久性：一个事务被提交之后，他对数据库中数据的改变是持久的，即使数据库发生故障也不应该对其有任何影响</li></ol><h2 id="_2-spring事务管理接口" tabindex="-1"><a class="header-anchor" href="#_2-spring事务管理接口"><span>2. Spring事务管理接口</span></a></h2><ul><li><strong>PlatformTransactionManager</strong>: （平台）事务管理器</li><li><strong>TransactionDefinition：</strong> 事务定义信息(事务隔离级别、传播行为、超时、只读、回滚规则)</li><li><strong>TransactionStatus：</strong> 事务运行状态</li></ul><h3 id="_2-1-platformtransactionmanager接口介绍" tabindex="-1"><a class="header-anchor" href="#_2-1-platformtransactionmanager接口介绍"><span>2.1 PlatformTransactionManager接口介绍</span></a></h3><p><strong>所谓事务管理，其实就是“按照给定的事务规则来执行提交或者回滚操作”。</strong></p><p><strong>Spring并不直接管理事务，而是提供了多种事务管理器</strong> ，他们将事务管理的职责委托给Hibernate或者JTA等持久化机制所提供的相关平台框架的事务来实现。 Spring事务管理器的接口是： <strong>org.springframework.transaction.PlatformTransactionManager</strong> ，通过这个接口，Spring为各个平台如JDBC、Hibernate等都提供了对应的事务管理器，但是具体的实现就是各个平台自己的事情了。</p><h4 id="_2-1-1platformtransactionmanager接口代码如下" tabindex="-1"><a class="header-anchor" href="#_2-1-1platformtransactionmanager接口代码如下"><span>2.1.1PlatformTransactionManager接口代码如下：</span></a></h4><p>PlatformTransactionManager接口中定义了三个方法：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">Public </span><span style="color:#C678DD;--shiki-dark:#C678DD;">interface</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> PlatformTransactionManager</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()...</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // Return a currently active transaction or create a new one, according to the specified propagation behavior（根据指定的传播行为，返回当前活动的事务或创建一个新事务。）</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    TransactionStatus</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getTransaction</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">TransactionDefinition</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> definition</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> throws</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> TransactionException</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // Commit the given transaction, with regard to its status（使用事务目前的状态提交事务）</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    Void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> commit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">TransactionStatus</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> status</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> throws</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> TransactionException</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // Perform a rollback of the given transaction（对执行的事务进行回滚）</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    Void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> rollback</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">TransactionStatus</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> status</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> throws</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> TransactionException</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span></code></pre></div><h3 id="_2-2-transactiondefinition接口介绍" tabindex="-1"><a class="header-anchor" href="#_2-2-transactiondefinition接口介绍"><span>2.2 TransactionDefinition接口介绍</span></a></h3><p>事务管理器接口 <strong>PlatformTransactionManager</strong> 通过 <strong>getTransaction(TransactionDefinition definition)</strong> 方法来得到一个事务，这个方法里面的参数是 <strong>TransactionDefinition类</strong> ，这个类就定义了一些基本的事务属性。</p><p><strong>那么什么是事务属性呢？</strong></p><p>事务属性可以理解成事务的一些基本配置，描述了事务策略如何应用到方法上。事务属性包含了5个方面。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231732279.png" alt="image-20191011232517486" tabindex="0" loading="lazy"><figcaption>image-20191011232517486</figcaption></figure><h4 id="_2-2-1-transactiondefinition接口中的方法如下" tabindex="-1"><a class="header-anchor" href="#_2-2-1-transactiondefinition接口中的方法如下"><span>2.2.1 TransactionDefinition接口中的方法如下：</span></a></h4><p>TransactionDefinition接口中定义了5个方法以及一些表示事务属性的常量比如隔离级别、传播行为等等的常量。</p><p>我下面只是列出了TransactionDefinition接口中的方法而没有给出接口中定义的常量，该接口中的常量信息会在后面依次介绍到。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> interface</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> TransactionDefinition</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 返回事务的传播行为</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    int</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getPropagationBehavior</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 返回事务的隔离级别，事务管理器根据它来控制另外一个事务可以看到本事务内的哪些数据</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    int</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getIsolationLevel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 返回事务必须在多少秒内完成</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //返回事务的名字</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    String</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getName</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">；</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    int</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getTimeout</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 返回是否优化为只读事务。</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    boolean</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> isReadOnly</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h5 id="_2-2-1-1-隔离级别" tabindex="-1"><a class="header-anchor" href="#_2-2-1-1-隔离级别"><span>2.2.1.1 隔离级别</span></a></h5><p>TransactionDefinition 接口中定义了五个表示隔离级别的常量：</p><ul><li><strong>TransactionDefinition.ISOLATION_DEFAULT:</strong> 使用后端数据库默认的隔离级别，Mysql 默认采用的 REPEATABLE_READ隔离级别 Oracle 默认采用的 READ_COMMITTED隔离级别.</li><li><strong>TransactionDefinition.ISOLATION_READ_UNCOMMITTED:</strong> 最低的隔离级别，允许读取尚未提交的数据变更，<strong>可能会导致脏读、幻读或不可重复读</strong></li><li><strong>TransactionDefinition.ISOLATION_READ_COMMITTED:</strong> 允许读取并发事务已经提交的数据，<strong>可以阻止脏读，但是幻读或不可重复读仍有可能发生</strong></li><li><strong>TransactionDefinition.ISOLATION_REPEATABLE_READ:</strong> 对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，<strong>可以阻止脏读和不可重复读，但幻读仍有可能发生。</strong></li><li><strong>TransactionDefinition.ISOLATION_SERIALIZABLE:</strong> 最高的隔离级别，完全服从ACID的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，<strong>该级别可以防止脏读、不可重复读以及幻读</strong>。但是这将严重影响程序的性能。通常情况下也不会用到该级别。</li></ul><h5 id="_2-2-1-2-事务传播行为-为了解决业务层方法之间互相调用的事务问题" tabindex="-1"><a class="header-anchor" href="#_2-2-1-2-事务传播行为-为了解决业务层方法之间互相调用的事务问题"><span>2.2.1.2 事务传播行为（为了解决业务层方法之间互相调用的事务问题）</span></a></h5><p>当事务方法被另一个事务方法调用时，必须指定事务应该如何传播。例如：方法可能继续在现有事务中运行，也可能开启一个新事务，并在自己的事务中运行。在TransactionDefinition定义中包括了如下几个表示传播行为的常量：</p><p><strong>支持当前事务的情况：</strong></p><ul><li><strong>TransactionDefinition.PROPAGATION_REQUIRED：</strong> 如果当前存在事务，则加入该事务；如果当前没有事务，则创建一个新的事务。</li><li><strong>TransactionDefinition.PROPAGATION_SUPPORTS：</strong> 如果当前存在事务，则加入该事务；如果当前没有事务，则以非事务的方式继续运行。</li><li><strong>TransactionDefinition.PROPAGATION_MANDATORY：</strong> 如果当前存在事务，则加入该事务；如果当前没有事务，则抛出异常。（mandatory：强制性）</li></ul><p><strong>不支持当前事务的情况：</strong></p><ul><li><strong>TransactionDefinition.PROPAGATION_REQUIRES_NEW：</strong> 创建一个新的事务，如果当前存在事务，则把当前事务挂起。</li><li><strong>TransactionDefinition.PROPAGATION_NOT_SUPPORTED：</strong> 以非事务方式运行，如果当前存在事务，则把当前事务挂起。</li><li><strong>TransactionDefinition.PROPAGATION_NEVER：</strong> 以非事务方式运行，如果当前存在事务，则抛出异常。</li></ul><p><strong>其他情况：</strong></p><ul><li><strong>TransactionDefinition.PROPAGATION_NESTED：</strong> 如果当前存在事务，则创建一个事务作为当前事务的嵌套事务来运行；如果当前没有事务，则该取值等价于TransactionDefinition.PROPAGATION_REQUIRED。</li></ul><p>这里需要指出的是，前面的六种事务传播行为是 Spring 从 EJB 中引入的，他们共享相同的概念。而 <strong>PROPAGATION_NESTED</strong> 是 Spring 所特有的。以 PROPAGATION_NESTED 启动的事务内嵌于外部事务中（如果存在外部事务的话），此时，内嵌事务并不是一个独立的事务，它依赖于外部事务的存在，只有通过外部的事务提交，才能引起内部事务的提交，嵌套的子事务不能单独提交。如果熟悉 JDBC 中的保存点（SavePoint）的概念，那嵌套事务就很容易理解了，其实嵌套的子事务就是保存点的一个应用，一个事务中可以包括多个保存点，每一个嵌套子事务。另外，外部事务的回滚也会导致嵌套子事务的回滚。</p><h5 id="_2-2-1-3-事务超时属性-一个事务允许执行的最长时间" tabindex="-1"><a class="header-anchor" href="#_2-2-1-3-事务超时属性-一个事务允许执行的最长时间"><span>2.2.1.3 事务超时属性(一个事务允许执行的最长时间)</span></a></h5><p>所谓事务超时，就是指一个事务所允许执行的最长时间，如果超过该时间限制但事务还没有完成，则自动回滚事务。在 TransactionDefinition 中以 int 的值来表示超时时间，其单位是秒。</p><h5 id="_2-2-1-4-事务只读属性-对事物资源是否执行只读操作" tabindex="-1"><a class="header-anchor" href="#_2-2-1-4-事务只读属性-对事物资源是否执行只读操作"><span>2.2.1.4 事务只读属性（对事物资源是否执行只读操作）</span></a></h5><p>事务的只读属性是指，对事务性资源进行只读操作或者是读写操作。所谓事务性资源就是指那些被事务管理的资源，比如数据源、 JMS 资源，以及自定义的事务性资源等等。如果确定只对事务性资源进行只读操作，那么我们可以将事务标志为只读的，以提高事务处理的性能。在 TransactionDefinition 中以 boolean 类型来表示该事务是否只读。</p><h5 id="_2-2-1-5-回滚规则-定义事务回滚规则" tabindex="-1"><a class="header-anchor" href="#_2-2-1-5-回滚规则-定义事务回滚规则"><span>2.2.1.5 回滚规则（定义事务回滚规则）</span></a></h5><p>这些规则定义了哪些异常会导致事务回滚而哪些不会。默认情况下，事务只有遇到运行期异常时才会回滚，而在遇到检查型异常时不会回滚（这一行为与EJB的回滚行为是一致的）。 但是你可以声明事务在遇到特定的检查型异常时像遇到运行期异常那样回滚。同样，你还可以声明事务遇到特定的异常不回滚，即使这些异常是运行期异常。</p><h3 id="_2-3-transactionstatus接口介绍" tabindex="-1"><a class="header-anchor" href="#_2-3-transactionstatus接口介绍"><span>2.3 TransactionStatus接口介绍</span></a></h3><p>TransactionStatus接口用来记录事务的状态 该接口定义了一组方法,用来获取或判断事务的相应状态信息.</p><p>PlatformTransactionManager.getTransaction(…) 方法返回一个 TransactionStatus 对象。返回的TransactionStatus 对象可能代表一个新的或已经存在的事务（如果在当前调用堆栈有一个符合条件的事务）。</p><p><strong>TransactionStatus接口接口内容如下：</strong></p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> interface</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> TransactionStatus</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    boolean</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> isNewTransaction</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 是否是新的事物</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    boolean</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> hasSavepoint</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 是否有恢复点</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> setRollbackOnly</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 设置为只回滚</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    boolean</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> isRollbackOnly</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 是否为只回滚</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    boolean</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> isCompleted</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 是否已完成</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h3><p><a href="https://juejin.im/post/5b00c52ef265da0b95276091" target="_blank" rel="noopener noreferrer">可能是最漂亮的Spring事务管理详解</a></p>`,49)]))}const p=s(r,[["render",o],["__file","spring-y-transactional.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-transactional.html","title":"Spring事务","lang":"zh-CN","frontmatter":{"aliases":"Spring事务","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:50","updated":"2024-10-11 16:46","description":"Spring事务 1. 事务概念 1.1 什么是事务 事务是逻辑上的一组操作，要么都执行，要么都不执行 1.2 事务的特性 image-20191011230807408image-20191011230807408 原子性：事务是最小的执行单位，不予许分割。事务的原子性确保动作要么全部完成，要么完全不起作用 一致性：执行事务前后，数据保持一致 隔离性...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-transactional.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Spring事务"}],["meta",{"property":"og:description","content":"Spring事务 1. 事务概念 1.1 什么是事务 事务是逻辑上的一组操作，要么都执行，要么都不执行 1.2 事务的特性 image-20191011230807408image-20191011230807408 原子性：事务是最小的执行单位，不予许分割。事务的原子性确保动作要么全部完成，要么完全不起作用 一致性：执行事务前后，数据保持一致 隔离性..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231732229.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring事务\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231732229.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231732279.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 事务概念","slug":"_1-事务概念","link":"#_1-事务概念","children":[{"level":3,"title":"1.1 什么是事务","slug":"_1-1-什么是事务","link":"#_1-1-什么是事务","children":[]},{"level":3,"title":"1.2 事务的特性","slug":"_1-2-事务的特性","link":"#_1-2-事务的特性","children":[]}]},{"level":2,"title":"2. Spring事务管理接口","slug":"_2-spring事务管理接口","link":"#_2-spring事务管理接口","children":[{"level":3,"title":"2.1 PlatformTransactionManager接口介绍","slug":"_2-1-platformtransactionmanager接口介绍","link":"#_2-1-platformtransactionmanager接口介绍","children":[]},{"level":3,"title":"2.2 TransactionDefinition接口介绍","slug":"_2-2-transactiondefinition接口介绍","link":"#_2-2-transactiondefinition接口介绍","children":[]},{"level":3,"title":"2.3 TransactionStatus接口介绍","slug":"_2-3-transactionstatus接口介绍","link":"#_2-3-transactionstatus接口介绍","children":[]},{"level":3,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":7.53,"words":2259},"filePathRelative":"posts/Java/Java框架/Spring/spring-y-transactional.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 事务概念</h2>\\n<h3>1.1 什么是事务</h3>\\n<p>事务是逻辑上的一组操作，要么都执行，要么都不执行</p>\\n<h3>1.2 事务的特性</h3>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231732229.png\\" alt=\\"image-20191011230807408\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20191011230807408</figcaption></figure>\\n<ol>\\n<li>原子性：事务是最小的执行单位，不予许分割。事务的原子性确保动作要么全部完成，要么完全不起作用</li>\\n<li>一致性：执行事务前后，数据保持一致</li>\\n<li>隔离性：并发访问数据库时，一个用户的事务不被其他事务所干扰，个并发事务之间的数据库是独立的</li>\\n<li>持久性：一个事务被提交之后，他对数据库中数据的改变是持久的，即使数据库发生故障也不应该对其有任何影响</li>\\n</ol>","autoDesc":true}');export{p as comp,c as data};
