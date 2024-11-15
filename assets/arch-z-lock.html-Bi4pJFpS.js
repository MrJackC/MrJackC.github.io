import{_ as a,c as n,a as i,o as l}from"./app-fWubcX7c.js";const r={};function e(o,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="分布式系统-分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式系统-分布式锁"><span>分布式系统 - 分布式锁</span></a></h1><h2 id="_1-什么是分布式锁" tabindex="-1"><a class="header-anchor" href="#_1-什么是分布式锁"><span>1. 什么是分布式锁</span></a></h2><blockquote><p>要介绍分布式锁，首先要提到与分布式锁相对应的是线程锁、进程锁。</p></blockquote><ul><li><strong>线程锁</strong>：主要用来给方法、代码块加锁。当某个方法或代码使用锁，在同一时刻仅有一个线程执行该方法或该代码段。线程锁只在同一JVM中有效果，因为线程锁的实现在根本上是依靠线程之间共享内存实现的，比如synchronized是共享对象头，显示锁Lock是共享某个变量（state）。</li><li><strong>进程锁</strong>：为了控制同一操作系统中多个进程访问某个共享资源，因为进程具有独立性，各个进程无法访问其他进程的资源，因此无法通过synchronized等线程锁实现进程锁。</li><li><strong>分布式锁</strong>：<strong>当多个进程不在同一个系统中(比如分布式系统中控制共享资源访问)，用分布式锁控制多个进程对资源的访问。</strong></li></ul><h2 id="_2-分布式锁的设计原则" tabindex="-1"><a class="header-anchor" href="#_2-分布式锁的设计原则"><span>2. 分布式锁的设计原则</span></a></h2><blockquote><p>分布式锁的最小设计原则：<strong>安全性</strong>和<strong>有效性</strong></p></blockquote><p><a href="https://redis.io/docs/reference/patterns/distributed-locks/" target="_blank" rel="noopener noreferrer">Redis的官网</a>上对使用分布式锁提出至少需要满足如下三个要求：</p><ol><li><strong>互斥</strong>（属于安全性）：在任何给定时刻，只有一个客户端可以持有锁。</li><li><strong>无死锁</strong>（属于有效性）：即使锁定资源的客户端崩溃或被分区，也总是可以获得锁；通常通过超时机制实现。</li><li><strong>容错性</strong>（属于有效性）：只要大多数 Redis 节点都启动，客户端就可以获取和释放锁。</li></ol><p>除此之外，分布式锁的设计中还可以/需要考虑：</p><ol><li>加锁解锁的<strong>同源性</strong>：A加的锁，不能被B解锁</li><li>获取锁是<strong>非阻塞</strong>的：如果获取不到锁，不能无限期等待；</li><li><strong>高性能</strong>：加锁解锁是高性能的</li></ol><h2 id="_3-基于数据库如何实现分布式锁-有什么缺陷" tabindex="-1"><a class="header-anchor" href="#_3-基于数据库如何实现分布式锁-有什么缺陷"><span>3. 基于数据库如何实现分布式锁？有什么缺陷？</span></a></h2><blockquote><p>基于数据库如何实现分布式锁？有什么缺陷？</p></blockquote><h3 id="_3-1-基于数据库表-锁表-很少使用" tabindex="-1"><a class="header-anchor" href="#_3-1-基于数据库表-锁表-很少使用"><span>3.1 基于数据库表（锁表，很少使用）</span></a></h3><p>最简单的方式可能就是直接创建一张锁表，然后通过操作该表中的数据来实现了。当我们想要获得锁的时候，就可以在该表中增加一条记录，想要释放锁的时候就删除这条记录。</p><p>为了更好的演示，我们先创建一张数据库表，参考如下：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> TABLE</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> database_lock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">	\`id\`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> BIGINT</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NOT NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> AUTO_INCREMENT,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">	\`resource\`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NOT NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;锁定的资源&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">	\`description\`</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1024</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NOT NULL</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DEFAULT</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;描述&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	PRIMARY KEY</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (id),</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	UNIQUE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> KEY</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> uiq_idx_resource (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">resource</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) ENGINE</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">InnoDB </span><span style="color:#C678DD;--shiki-dark:#C678DD;">DEFAULT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> CHARSET</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">utf8mb4 COMMENT</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;数据库分布式锁表&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>当我们想要获得锁时，可以插入一条数据：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">INSERT INTO</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> database_lock(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">resource</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#C678DD;--shiki-dark:#C678DD;">description</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">VALUES</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;lock&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><p>当需要释放锁的时，可以删除这条数据：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">DELETE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> database_lock </span><span style="color:#C678DD;--shiki-dark:#C678DD;">WHERE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> resource</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h3 id="_3-2-基于悲观锁" tabindex="-1"><a class="header-anchor" href="#_3-2-基于悲观锁"><span>3.2 基于悲观锁</span></a></h3><h4 id="_3-2-1-悲观锁实现思路" tabindex="-1"><a class="header-anchor" href="#_3-2-1-悲观锁实现思路"><span>3.2.1 <strong>悲观锁实现思路</strong>？</span></a></h4><ol><li>在对任意记录进行修改前，先尝试为该记录加上排他锁（exclusive locking）。</li><li>如果加锁失败，说明该记录正在被修改，那么当前查询可能要等待或者抛出异常。 具体响应方式由开发者根据实际需要决定。</li><li>如果成功加锁，那么就可以对记录做修改，事务完成后就会解锁了。</li><li>其间如果有其他对该记录做修改或加排他锁的操作，都会等待我们解锁或直接抛出异常。</li></ol><h4 id="_3-2-2-以mysql-innodb中使用悲观锁为例" tabindex="-1"><a class="header-anchor" href="#_3-2-2-以mysql-innodb中使用悲观锁为例"><span>3.2.2 以MySQL InnoDB中使用悲观锁为例？</span></a></h4><p>要使用悲观锁，我们必须关闭mysql数据库的自动提交属性，因为MySQL默认使用autocommit模式，也就是说，当你执行一个更新操作后，MySQL会立刻将结果进行提交。set autocommit=0;</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">//</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.开始事务</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">begin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;/</span><span style="color:#C678DD;--shiki-dark:#C678DD;">begin work</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;/</span><span style="color:#C678DD;--shiki-dark:#C678DD;">start transaction</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; (三者选一就可以)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">//</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.查询出商品信息</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> status</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t_goods </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> id</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> for</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> update</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">//</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.根据商品信息生成订单</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">insert into</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t_orders (id,goods_id) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">values</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">//</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.修改商品status为2</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">update</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t_goods </span><span style="color:#C678DD;--shiki-dark:#C678DD;">set</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> status</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">//</span><span style="color:#D19A66;--shiki-dark:#D19A66;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.提交事务</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">commit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;/</span><span style="color:#C678DD;--shiki-dark:#C678DD;">commit work</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>上面的查询语句中，我们使用了<code>select…for update</code>的方式，这样就通过开启排他锁的方式实现了悲观锁。此时在t_goods表中，id为1的 那条数据就被我们锁定了，其它的事务必须等本次事务提交之后才能执行。这样我们可以保证当前的数据不会被其它事务修改。</p><p>上面我们提到，使用<code>select…for update</code>会把数据给锁住，不过我们需要注意一些锁的级别，<strong>MySQL InnoDB默认行级锁。行级锁都是基于索引的</strong>，如果一条SQL语句用不到索引是不会使用行级锁的，会使用表级锁把整张表锁住，这点需要注意。</p><h3 id="_3-3-基于乐观锁" tabindex="-1"><a class="header-anchor" href="#_3-3-基于乐观锁"><span>3.3 基于乐观锁</span></a></h3><p>乐观并发控制（又名“乐观锁”，Optimistic Concurrency Control，缩写“OCC”）是一种并发控制的方法。它假设多用户并发的事务在处理时不会彼此互相影响，各事务能够在不产生锁的情况下处理各自影响的那部分数据。在提交数据更新之前，每个事务会先检查在该事务读取数据后，有没有其他事务又修改了该数据。如果其他事务有更新的话，正在提交的事务会进行回滚。</p><h4 id="_3-3-1-以使用版本号实现乐观锁为例" tabindex="-1"><a class="header-anchor" href="#_3-3-1-以使用版本号实现乐观锁为例"><span>3.3.1 <strong>以使用版本号实现乐观锁为例？</strong></span></a></h4><p>使用版本号时，可以在数据初始化时指定一个版本号，每次对数据的更新操作都对版本号执行+1操作。并判断当前版本号是不是该数据的最新的版本号。</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.查询出商品信息</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">status</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;">status</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t_goods </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> id</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">#{id}</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.根据商品信息生成订单</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.修改商品status为2</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">update</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t_goods </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">set</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> status</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;">version</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">+</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> id</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">#{id} </span><span style="color:#C678DD;--shiki-dark:#C678DD;">and</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> version</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">#{</span><span style="color:#C678DD;--shiki-dark:#C678DD;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div><p>需要注意的是，乐观锁机制往往基于系统中数据存储逻辑，因此也具备一定的局限性。由于乐观锁机制是在我们的系统中实现的，对于来自外部系统的用户数据更新操作不受我们系统的控制，因此可能会造成脏数据被更新到数据库中。在系统设计阶段，我们应该充分考虑到这些情况，并进行相应的调整（如将乐观锁策略在数据库存储过程中实现，对外只开放基于此存储过程的数据更新途径，而不是将数据库表直接对外公开）。</p><h3 id="_3-4-缺陷" tabindex="-1"><a class="header-anchor" href="#_3-4-缺陷"><span>3.4 缺陷</span></a></h3><ul><li>对数据库依赖</li><li>开销问题</li><li>行锁变表锁问题</li><li>无法解决数据库单点和可重入的问题。</li></ul><h2 id="_4-基于redis如何实现分布式锁-有什么缺陷" tabindex="-1"><a class="header-anchor" href="#_4-基于redis如何实现分布式锁-有什么缺陷"><span>4. 基于redis如何实现分布式锁？有什么缺陷？</span></a></h2><blockquote><p>基于redis如何实现分布式锁？这里一定要看<a href="https://redis.io/docs/reference/patterns/distributed-locks/" target="_blank" rel="noopener noreferrer">Redis的官网 (opens new window)</a>的分布式锁的实现这篇文章。</p></blockquote><h3 id="_4-1-set-nx-px-lua" tabindex="-1"><a class="header-anchor" href="#_4-1-set-nx-px-lua"><span>4.1 set NX PX + Lua</span></a></h3><p><strong>加锁</strong>： set NX PX + 重试 + 重试间隔</p><p>向Redis发起如下命令: <code>SET productId:lock 0xx9p03001 NX PX 30000</code> 其中，&quot;productId&quot;由自己定义，可以是与本次业务有关的id，&quot;0xx9p03001&quot;是一串随机值，必须保证全局唯一(原因在后文中会提到)，“NX&quot;指的是当且仅当key(也就是案例中的&quot;productId:lock”)在Redis中不存在时，返回执行成功，否则执行失败。&quot;PX 30000&quot;指的是在30秒后，key将被自动删除。执行命令后返回成功，表明服务成功的获得了锁。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> boolean</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> lock</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> key</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> expire</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> retryTimes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> retryDuration) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // use JedisCommands instead of setIfAbsense</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    boolean</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> result </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> setRedis</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(key</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> expire)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // retry if needed</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    while</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ((</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!</span><span style="color:#E06C75;--shiki-dark:#E06C75;">result) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&amp;&amp;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> retryTimes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">--</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> &gt;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        try</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            log</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">debug</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;lock failed, retrying...&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> retryTimes);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sleep</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(retryDuration);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Exception</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // use JedisCommands instead of setIfAbsense</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        result </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> setRedis</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(key</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> expire)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> result</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> boolean</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> setRedis</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> key</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> expire) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    try</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        RedisCallback</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> redisCallback </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> connection </span><span style="color:#C678DD;--shiki-dark:#C678DD;">-&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            JedisCommands</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> commands </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (JedisCommands) </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">connection</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getNativeConnection</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> uuid </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> SnowIDUtil</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">uniqueStr</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            lockFlag</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">set</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(uuid);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            return</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> commands</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">set</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(key, uuid, NX, PX, expire);</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 看这里</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        }</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> result </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> redisTemplate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">execute</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(redisCallback);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> !</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">StringUtil</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">isEmpty</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(result);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Exception</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        log</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">error</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;set redis occurred an exception&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, e);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解锁</strong>：采用lua脚本</p><p>在删除key之前，一定要判断服务A持有的value与Redis内存储的value是否一致。如果贸然使用服务A持有的key来删除锁，则会误将服务B的锁释放掉。</p><div class="language-lua" data-ext="lua" data-title="lua"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> redis</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">call</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;get&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">KEYS</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">])==</span><span style="color:#E06C75;--shiki-dark:#E06C75;">ARGV</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">] </span><span style="color:#C678DD;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> redis</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">call</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;del&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">KEYS</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">])</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">else</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">end</span></span></code></pre></div><h3 id="_4-2-基于redlock实现分布式锁" tabindex="-1"><a class="header-anchor" href="#_4-2-基于redlock实现分布式锁"><span>4.2 基于RedLock实现分布式锁</span></a></h3><blockquote><p>这是Redis作者推荐的分布式集群情况下的方式，请看这篇文章<a href="http://antirez.com/news/101" target="_blank" rel="noopener noreferrer">Is Redlock safe?</a></p></blockquote><p>假设有两个服务A、B都希望获得锁，有一个包含了5个redis master的Redis Cluster，执行过程大致如下:</p><ol><li>客户端获取当前时间戳，单位: 毫秒</li><li>服务A轮寻每个master节点，尝试创建锁。(这里锁的过期时间比较短，一般就几十毫秒) RedLock算法会尝试在大多数节点上分别创建锁，假如节点总数为n，那么大多数节点指的是n/2+1。</li><li>客户端计算成功建立完锁的时间，如果建锁时间小于超时时间，就可以判定锁创建成功。如果锁创建失败，则依次(遍历master节点)删除锁。</li><li>只要有其它服务创建过分布式锁，那么当前服务就必须轮寻尝试获取锁。</li></ol><h3 id="_4-3-基于redis的客户端" tabindex="-1"><a class="header-anchor" href="#_4-3-基于redis的客户端"><span>4.3 基于Redis的客户端</span></a></h3><blockquote><p>这里Redis的客户端（Jedis, Redisson, Lettuce等）都是基于上述两类形式来实现分布式锁的，只是两类形式的封装以及一些优化（比如Redisson的watch dog)。</p></blockquote><p>以基于Redisson实现分布式锁为例（支持了 单实例、Redis哨兵、redis cluster、redis master-slave等各种部署架构）：</p><h4 id="_4-3-1-特色" tabindex="-1"><a class="header-anchor" href="#_4-3-1-特色"><span>4.3.1 <strong>特色</strong>？</span></a></h4><ol><li><strong>redisson所有指令都通过lua脚本执行，保证了操作的原子性</strong></li><li>redisson设置了watchdog看门狗，“看门狗”的逻辑保证了没有死锁发生</li><li>redisson支持Redlock的实现方式。</li></ol><h4 id="_4-3-2-过程" tabindex="-1"><a class="header-anchor" href="#_4-3-2-过程"><span>4.3.2 <strong>过程</strong>？</span></a></h4><ol><li>线程去获取锁，获取成功: 执行lua脚本，保存数据到redis数据库。</li><li>线程去获取锁，获取失败: 订阅了解锁消息，然后再尝试获取锁，获取成功后，执行lua脚本，保存数据到redis数据库。</li></ol><h4 id="_4-3-3-互斥" tabindex="-1"><a class="header-anchor" href="#_4-3-3-互斥"><span>4.3.3 <strong>互斥</strong>？</span></a></h4><p>如果这个时候客户端B来尝试加锁，执行了同样的一段lua脚本。第一个if判断会执行“exists myLock”，发现myLock这个锁key已经存在。接着第二个if判断，判断myLock锁key的hash数据结构中，是否包含客户端B的ID，但明显没有，那么客户端B会获取到pttl myLock返回的一个数字，代表myLock这个锁key的剩余生存时间。此时客户端B会进入一个while循环，不听的尝试加锁。</p><h4 id="_4-3-4-watch-dog自动延时机制" tabindex="-1"><a class="header-anchor" href="#_4-3-4-watch-dog自动延时机制"><span>4.3.4 <strong>watch dog自动延时机制</strong>？</span></a></h4><p>客户端A加锁的锁key默认生存时间只有30秒，如果超过了30秒，客户端A还想一直持有这把锁，怎么办？其实只要客户端A一旦加锁成功，就会启动一个watch dog看门狗，它是一个后台线程，会每隔10秒检查一下，如果客户端A还持有锁key，那么就会不断的延长锁key的生存时间。</p><h5 id="_4-3-5-可重入" tabindex="-1"><a class="header-anchor" href="#_4-3-5-可重入"><span>4.3.5 <strong>可重入</strong>？</span></a></h5><p>每次lock会调用incrby，每次unlock会减一。</p><h3 id="_4-4-进一步理解" tabindex="-1"><a class="header-anchor" href="#_4-4-进一步理解"><span>4.4 进一步理解</span></a></h3><ol><li>借助Redis实现分布式锁时，有一个共同的缺陷: 当获取锁被拒绝后，需要不断的循环，重新发送获取锁(创建key)的请求，直到请求成功。这就造成空转，浪费宝贵的CPU资源。</li><li>RedLock算法本身有争议，具体看这篇文章<a href="https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html" target="_blank" rel="noopener noreferrer">How to do distributed locking (opens new window)</a> 以及作者的回复<a href="http://antirez.com/news/101" target="_blank" rel="noopener noreferrer">Is Redlock safe?</a></li></ol><h2 id="_5-基于zookeeper如何实现分布式锁" tabindex="-1"><a class="header-anchor" href="#_5-基于zookeeper如何实现分布式锁"><span>5. 基于zookeeper如何实现分布式锁？</span></a></h2><p>说几个核心点：</p><ul><li><strong>顺序节点</strong></li></ul><p>创建一个用于发号的节点“/test/lock”，然后以它为父亲节点的前缀为“/test/lock/seq-”依次发号：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301003008.png" alt="image-20220611092208711" tabindex="0" loading="lazy"><figcaption>image-20220611092208711</figcaption></figure><ul><li><p><strong>获得最小号得锁</strong></p><p>由于序号的递增性，可以规定排号最小的那个获得锁。所以，每个线程在尝试占用锁之前，首先判断自己是排号是不是当前最小，如果是，则获取锁。</p></li><li><p><strong>节点监听机制</strong></p><p>每个线程抢占锁之前，先抢号创建自己的ZNode。同样，释放锁的时候，就需要删除抢号的Znode。抢号成功后，如果不是排号最小的节点，就处于等待通知的状态。等谁的通知呢？不需要其他人，只需要等前一个Znode 的通知就可以了。当前一个Znode 删除的时候，就是轮到了自己占有锁的时候。第一个通知第二个、第二个通知第三个，击鼓传花似的依次向后。</p></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/arch/arch-z-lock.html" target="_blank" rel="noopener noreferrer">分布式系统 - 分布式锁及实现方案</a></p>`,72)]))}const t=a(r,[["render",e],["__file","arch-z-lock.html.vue"]]),k=JSON.parse('{"path":"/posts/Architect/distributed/arch-z-lock.html","title":"分布式系统 - 分布式锁","lang":"zh-CN","frontmatter":{"aliases":"分布式系统 - 分布式锁","tags":null,"cssclass":null,"source":null,"order":30,"category":["架构"],"created":"2024-04-24 14:35","updated":"2024-04-30 10:03","description":"分布式系统 - 分布式锁 1. 什么是分布式锁 要介绍分布式锁，首先要提到与分布式锁相对应的是线程锁、进程锁。 线程锁：主要用来给方法、代码块加锁。当某个方法或代码使用锁，在同一时刻仅有一个线程执行该方法或该代码段。线程锁只在同一JVM中有效果，因为线程锁的实现在根本上是依靠线程之间共享内存实现的，比如synchronized是共享对象头，显示锁Loc...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/distributed/arch-z-lock.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"分布式系统 - 分布式锁"}],["meta",{"property":"og:description","content":"分布式系统 - 分布式锁 1. 什么是分布式锁 要介绍分布式锁，首先要提到与分布式锁相对应的是线程锁、进程锁。 线程锁：主要用来给方法、代码块加锁。当某个方法或代码使用锁，在同一时刻仅有一个线程执行该方法或该代码段。线程锁只在同一JVM中有效果，因为线程锁的实现在根本上是依靠线程之间共享内存实现的，比如synchronized是共享对象头，显示锁Loc..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301003008.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式系统 - 分布式锁\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301003008.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是分布式锁","slug":"_1-什么是分布式锁","link":"#_1-什么是分布式锁","children":[]},{"level":2,"title":"2. 分布式锁的设计原则","slug":"_2-分布式锁的设计原则","link":"#_2-分布式锁的设计原则","children":[]},{"level":2,"title":"3. 基于数据库如何实现分布式锁？有什么缺陷？","slug":"_3-基于数据库如何实现分布式锁-有什么缺陷","link":"#_3-基于数据库如何实现分布式锁-有什么缺陷","children":[{"level":3,"title":"3.1 基于数据库表（锁表，很少使用）","slug":"_3-1-基于数据库表-锁表-很少使用","link":"#_3-1-基于数据库表-锁表-很少使用","children":[]},{"level":3,"title":"3.2 基于悲观锁","slug":"_3-2-基于悲观锁","link":"#_3-2-基于悲观锁","children":[]},{"level":3,"title":"3.3 基于乐观锁","slug":"_3-3-基于乐观锁","link":"#_3-3-基于乐观锁","children":[]},{"level":3,"title":"3.4 缺陷","slug":"_3-4-缺陷","link":"#_3-4-缺陷","children":[]}]},{"level":2,"title":"4. 基于redis如何实现分布式锁？有什么缺陷？","slug":"_4-基于redis如何实现分布式锁-有什么缺陷","link":"#_4-基于redis如何实现分布式锁-有什么缺陷","children":[{"level":3,"title":"4.1 set NX PX + Lua","slug":"_4-1-set-nx-px-lua","link":"#_4-1-set-nx-px-lua","children":[]},{"level":3,"title":"4.2 基于RedLock实现分布式锁","slug":"_4-2-基于redlock实现分布式锁","link":"#_4-2-基于redlock实现分布式锁","children":[]},{"level":3,"title":"4.3 基于Redis的客户端","slug":"_4-3-基于redis的客户端","link":"#_4-3-基于redis的客户端","children":[]},{"level":3,"title":"4.4 进一步理解","slug":"_4-4-进一步理解","link":"#_4-4-进一步理解","children":[]}]},{"level":2,"title":"5. 基于zookeeper如何实现分布式锁？","slug":"_5-基于zookeeper如何实现分布式锁","link":"#_5-基于zookeeper如何实现分布式锁","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":11.01,"words":3302},"filePathRelative":"posts/Architect/distributed/arch-z-lock.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 什么是分布式锁</h2>\\n<blockquote>\\n<p>要介绍分布式锁，首先要提到与分布式锁相对应的是线程锁、进程锁。</p>\\n</blockquote>\\n<ul>\\n<li><strong>线程锁</strong>：主要用来给方法、代码块加锁。当某个方法或代码使用锁，在同一时刻仅有一个线程执行该方法或该代码段。线程锁只在同一JVM中有效果，因为线程锁的实现在根本上是依靠线程之间共享内存实现的，比如synchronized是共享对象头，显示锁Lock是共享某个变量（state）。</li>\\n<li><strong>进程锁</strong>：为了控制同一操作系统中多个进程访问某个共享资源，因为进程具有独立性，各个进程无法访问其他进程的资源，因此无法通过synchronized等线程锁实现进程锁。</li>\\n<li><strong>分布式锁</strong>：<strong>当多个进程不在同一个系统中(比如分布式系统中控制共享资源访问)，用分布式锁控制多个进程对资源的访问。</strong></li>\\n</ul>","autoDesc":true}');export{t as comp,k as data};
