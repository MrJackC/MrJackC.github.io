import{_ as e,c as s,a,o as i}from"./app-mWs04Xnh.js";const n={};function r(o,l){return i(),s("div",null,l[0]||(l[0]=[a(`<h1 id="mysql-一条sql语句执行过程" tabindex="-1"><a class="header-anchor" href="#mysql-一条sql语句执行过程"><span>MySQL - 一条SQL语句执行过程</span></a></h1><p>本文会分析一个sql 语句在MySQL中的执行流程，包括</p><ul><li>sql的查询在Mysql内部会怎么流转</li><li>sql语句的更新是怎么完成的</li></ul><p>分析之前会先看Mysql的基础架构</p><ul><li>知道Mysql由哪些组件组成</li><li>这些组件有什么作用</li><li>可以帮助我们解决什么问题</li></ul><h2 id="_1-mysql-基础架构分析" tabindex="-1"><a class="header-anchor" href="#_1-mysql-基础架构分析"><span>1. MySQL 基础架构分析</span></a></h2><h3 id="_1-1-mysql-基本架构概览" tabindex="-1"><a class="header-anchor" href="#_1-1-mysql-基本架构概览"><span>1.1 MySQL 基本架构概览</span></a></h3><p>下图是Mysql 的一个简要架构图，从下面的可以清晰的看到用户的SQL语句在MySQL内部是如何执行的</p><p>先简单介绍一下下图涉及到的一些组件的基本作用，帮忙大家理解这幅图。在1.2 章会详细介绍到这些组件的作用</p><ul><li>连接器：身份认证和权限相关（登录MySQL的时候）</li><li>查询缓存：执行查询语句的时候，会先查询缓存（MySQL 8.0 版本后移除，因为这个功能不太实用）</li><li>分析器：没有命中缓存的话，SQL 语句就会经过分析器，分析器说白了就是要先看你的SQL 语句要干嘛，再检查你的SQL 语句语法是否正确</li><li>优化器：按照MySQL 认为最优的方案去执行</li><li>执行器：执行语句，然后从存储引擎返回数据</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130852015.png" alt="image-20190913212622310" tabindex="0" loading="lazy"><figcaption>image-20190913212622310</figcaption></figure><p>简单来说Mysql 主要分为Server层和存储引擎层</p><ul><li>Server层 <ul><li>主要包括连接器，查询缓存，分析器，优化器，执行器等</li><li>所有跨存储引擎的功能都在这一层实现，比如 <ul><li>存储过程</li><li>触发器</li><li>视图</li><li>函数等</li><li>还有一个通过的日志模块binglog日志模块</li></ul></li></ul></li><li>存储引擎层 <ul><li>主要负责数据的存取和读取，采用可以替换的插件式架构。</li><li>支持InnoDB、MyISAM、Memory等多个存储引擎</li><li>其中innoDB 引擎有自有的日志模块redolog</li><li><strong>现在最常用的存储引擎是InnoDB,他从MySQL5.5.5 版本开始就被当做默认的存储引擎了</strong></li></ul></li></ul><h3 id="_1-2-server-层基本组件介绍" tabindex="-1"><a class="header-anchor" href="#_1-2-server-层基本组件介绍"><span>1.2 Server 层基本组件介绍</span></a></h3><h4 id="_1-2-1-连接器" tabindex="-1"><a class="header-anchor" href="#_1-2-1-连接器"><span>1.2.1 连接器</span></a></h4><p>连接器主要和身份认证和权限相关的功能，就好比一个级别很高的门卫一样</p><p>主要负责用户登录数据库，进行用户的身份认证，包括校验账户密码，权限等操作，如果用户账户密码已通过，连接器会到权限表中查询该用户的所有权限，之后在这个连接里的权限逻辑判断都是会依赖此时读取到的权限数据，也就是说，后续只要这个连接不断开，即时管理员修改了该用户的权限，该用户也是不受影响的。</p><h4 id="_1-2-2-查询缓存-mysql-8-0-版本后移除" tabindex="-1"><a class="header-anchor" href="#_1-2-2-查询缓存-mysql-8-0-版本后移除"><span>1.2.2 查询缓存（MySQL 8.0 版本后移除）</span></a></h4><p>查询缓存主要用来缓存我们所执行的 SELECT 语句以及该语句的结果集。</p><p>连接建立后，执行查询语句的时候，会先查询缓存，MySQL 会先校验这个 sql 是否执行过，以 Key-Value 的形式缓存在内存中，Key 是查询语句，Value 是结果集。如果缓存 key 被命中，就会直接返回给客户端，如果没有命中，就会执行后续的操作，完成后也会把结果缓存起来，方便下一次调用。当然在真正执行缓存查询的时候还是会校验用户的权限，是否有该表的查询条件。</p><p>MySQL 查询不建议使用缓存，因为查询缓存失效在实际业务场景中可能会非常频繁，假如你对一个表更新的话，这个表上的所有的查询缓存都会被清空。对于不经常更新的数据来说，使用缓存还是可以的。</p><p>所以，一般在大多数情况下我们都是不推荐去使用查询缓存的。</p><p>MySQL 8.0 版本后删除了缓存的功能，官方也是认为该功能在实际的应用场景比较少，所以干脆直接删掉了。</p><h4 id="_1-2-3-分析器" tabindex="-1"><a class="header-anchor" href="#_1-2-3-分析器"><span>1.2.3 分析器</span></a></h4><p>MySQL 没有命中缓存，那么就会进入分析器，分析器主要是用来分析 SQL 语句是来干嘛的，分析器也会分为几步：</p><p><strong>第一步，词法分析</strong>，一条 SQL 语句有多个字符串组成，首先要提取关键字，比如 select，提出查询的表，提出字段名，提出查询条件等等。做完这些操作后，就会进入第二步。</p><p><strong>第二步，语法分析</strong>，主要就是判断你输入的 sql 是否正确，是否符合 MySQL 的语法。</p><p>完成这 2 步之后，MySQL 就准备开始执行了，但是如何执行，怎么执行是最好的结果呢？这个时候就需要优化器上场了。</p><h4 id="_1-2-4-优化器" tabindex="-1"><a class="header-anchor" href="#_1-2-4-优化器"><span>1.2.4 优化器</span></a></h4><p>优化器的作用就是它认为的最优的执行方案去执行（有时候可能也不是最优，这篇文章涉及对这部分知识的深入讲解），比如多个索引的时候该如何选择索引，多表查询的时候如何选择关联顺序等。</p><p>可以说，经过了优化器之后可以说这个语句具体该如何执行就已经定下来。</p><h4 id="_1-2-5-执行器" tabindex="-1"><a class="header-anchor" href="#_1-2-5-执行器"><span>1.2.5 执行器</span></a></h4><p>当选择了执行方案后，MySQL 就准备开始执行了，首先执行前会校验该用户有没有权限，如果没有权限，就会返回错误信息，如果有权限，就会去调用引擎的接口，返回接口执行的结果。</p><h2 id="_2-语法分析" tabindex="-1"><a class="header-anchor" href="#_2-语法分析"><span>2. 语法分析</span></a></h2><h3 id="_2-1-查询语句" tabindex="-1"><a class="header-anchor" href="#_2-1-查询语句"><span>2.1 查询语句</span></a></h3><p>说了以上这么多，那么究竟一条 sql 语句是如何执行的呢？其实我们的 sql 可以分为两种，一种是查询，一种是更新（增加，更新，删除）。我们先分析下查询语句，语句如下：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tb_student  A </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> A</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">age</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;18&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> and</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> A</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39; 张三 &#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>结合上面的说明，我们分析下这个语句的执行流程：</p><ul><li>先检查该语句是否有权限，如果没有权限，直接返回错误信息，如果有权限，在 MySQL8.0 版本以前，会先查询缓存，以这条 sql 语句为 key 在内存中查询是否有结果，如果有直接缓存，如果没有，执行下一步。</li><li>通过分析器进行词法分析，提取 sql 语句的关键元素，比如提取上面这个语句是查询 select，提取需要查询的表名为 tb_student,需要查询所有的列，查询条件是这个表的 id=&#39;1&#39;。然后判断这个 sql 语句是否有语法错误，比如关键词是否正确等等，如果检查没问题就执行下一步。</li><li>接下来就是优化器进行确定执行方案，上面的 sql 语句，可以有两种执行方案：</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>  a.先查询学生表中姓名为“张三”的学生，然后判断是否年龄是 18。 </span></span>
<span class="line"><span>  b.先找出学生中年龄 18 岁的学生，然后再查询姓名为“张三”的学生。</span></span></code></pre></div><p>​ 那么优化器根据自己的优化算法进行选择执行效率最好的一个方案（优化器认为，有时候不一定最好）。那么确认了执行计划后就准备开始执行了。</p><ul><li>进行权限校验，如果没有权限就会返回错误信息，如果有权限就会调用数据库引擎接口，返回引擎的执行结果。</li></ul><h3 id="_2-2-更新语句" tabindex="-1"><a class="header-anchor" href="#_2-2-更新语句"><span>2.2 更新语句</span></a></h3><p>以上就是一条查询 sql 的执行流程，那么接下来我们看看一条更新语句如何执行的呢？sql 语句如下：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">update</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tb_student A </span><span style="color:#C678DD;--shiki-dark:#C678DD;">set</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> A</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">age</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;19&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> where</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> A</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39; 张三 &#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>我们来给张三修改下年龄，在实际数据库肯定不会设置年龄这个字段的，不然要被技术负责人打的。其实条语句也基本上会沿着上一个查询的流程走，只不过执行更新的时候肯定要记录日志啦，这就会引入日志模块了，MySQL 自带的日志模块式 <strong>binlog（归档日志）</strong> ，所有的存储引擎都可以使用，我们常用的 InnoDB 引擎还自带了一个日志模块 <strong>redo log（重做日志）</strong>，我们就以 InnoDB 模式下来探讨这个语句的执行流程。流程如下：</p><ul><li>先查询到张三这一条数据，如果有缓存，也是会用到缓存。</li><li>然后拿到查询的语句，把 age 改为 19，然后调用引擎 API 接口，写入这一行数据，InnoDB 引擎把数据保存在内存中，同时记录 redo log，此时 redo log 进入 prepare 状态，然后告诉执行器，执行完成了，随时可以提交。</li><li>执行器收到通知后记录 binlog，然后调用引擎接口，提交 redo log 为提交状态。</li><li>更新完成。</li></ul><h2 id="_3-为什么要用两个日志模块" tabindex="-1"><a class="header-anchor" href="#_3-为什么要用两个日志模块"><span>3. 为什么要用两个日志模块</span></a></h2><p><strong>这里肯定有同学会问，为什么要用两个日志模块，用一个日志模块不行吗?</strong></p><p>这是因为最开始 MySQL 并没与 InnoDB 引擎( InnoDB 引擎是其他公司以插件形式插入 MySQL 的) ，MySQL 自带的引擎是 MyISAM，但是我们知道 redo log 是 InnoDB 引擎特有的，其他存储引擎都没有，这就导致会没有 crash-safe 的能力(crash-safe 的能力即使数据库发生异常重启，之前提交的记录都不会丢失)，binlog 日志只能用来归档。</p><p>并不是说只用一个日志模块不可以，只是 InnoDB 引擎就是通过 redo log 来支持事务的。那么，又会有同学问，我用两个日志模块，但是不要这么复杂行不行，为什么 redo log 要引入 prepare 预提交状态？这里我们用反证法来说明下为什么要这么做？</p><ul><li><strong>先写 redo log 直接提交，然后写 binlog</strong>，假设写完 redo log 后，机器挂了，binlog 日志没有被写入，那么机器重启后，这台机器会通过 redo log 恢复数据，但是这个时候 bingog 并没有记录该数据，后续进行机器备份的时候，就会丢失这一条数据，同时主从同步也会丢失这一条数据。</li><li><strong>先写 binlog，然后写 redo log</strong>，假设写完了 binlog，机器异常重启了，由于没有 redo log，本机是无法恢复这一条记录的，但是 binlog 又有记录，那么和上面同样的道理，就会产生数据不一致的情况。</li></ul><p>如果采用 redo log 两阶段提交的方式就不一样了，写完 binglog 后，然后再提交 redo log 就会防止出现上述的问题，从而保证了数据的一致性。那么问题来了，有没有一个极端的情况呢？假设 redo log 处于预提交状态，binglog 也已经写完了，这个时候发生了异常重启会怎么样呢？ 这个就要依赖于 MySQL 的处理机制了，MySQL 的处理过程如下：</p><ul><li>判断 redo log 是否完整，如果判断是完整的，就立即提交。</li><li>如果 redo log 只是预提交但不是 commit 状态，这个时候就会去判断 binlog 是否完整，如果完整就提交 redo log, 不完整就回滚事务。</li></ul><p>这样就解决了<strong>数据一致性的问题</strong>。</p><h2 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结"><span>4. 总结</span></a></h2><ul><li>MySQL 主要分为 Server 层和引擎层，Server 层主要包括连接器、查询缓存、分析器、优化器、执行器，同时还有一个日志模块（binlog），这个日志模块所有执行引擎都可以共用,redolog 只有 InnoDB 有。</li><li>引擎层是插件式的，目前主要包括，MyISAM,InnoDB,Memory 等。</li><li>SQL 等执行过程分为两类，一类对于查询等过程如下：权限校验---》查询缓存---》分析器---》优化器---》权限校验---》执行器---》引擎</li><li>对于更新等语句执行流程如下：分析器----》权限校验----》执行器---》引擎---redo log prepare---》binlog---》redo log commit</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247485097&amp;idx=1&amp;sn=84c89da477b1338bdf3e9fcd65514ac1&amp;chksm=cea24962f9d5c074d8d3ff1ab04ee8f0d6486e3d015cfd783503685986485c11738ccb542ba7&amp;token=79317275&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">一条SQL语句在MySQL中如何执行</a></p>`,59)]))}const p=e(n,[["render",r],["__file","mysql-x-optimize-execute.html.vue"]]),d=JSON.parse('{"path":"/posts/Database/MySQL/mysql-x-optimize-execute.html","title":"MySQL - 一条SQL语句执行过程","lang":"zh-CN","frontmatter":{"aliases":"MySQL - 一条SQL语句执行过程","tags":null,"cssclass":null,"source":null,"order":340,"category":["Mysql","数据库"],"created":"2024-02-22 10:49","updated":"2024-03-13 08:52","description":"MySQL - 一条SQL语句执行过程 本文会分析一个sql 语句在MySQL中的执行流程，包括 sql的查询在Mysql内部会怎么流转 sql语句的更新是怎么完成的 分析之前会先看Mysql的基础架构 知道Mysql由哪些组件组成 这些组件有什么作用 可以帮助我们解决什么问题 1. MySQL 基础架构分析 1.1 MySQL 基本架构概览 下图是M...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MySQL/mysql-x-optimize-execute.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"MySQL - 一条SQL语句执行过程"}],["meta",{"property":"og:description","content":"MySQL - 一条SQL语句执行过程 本文会分析一个sql 语句在MySQL中的执行流程，包括 sql的查询在Mysql内部会怎么流转 sql语句的更新是怎么完成的 分析之前会先看Mysql的基础架构 知道Mysql由哪些组件组成 这些组件有什么作用 可以帮助我们解决什么问题 1. MySQL 基础架构分析 1.1 MySQL 基本架构概览 下图是M..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130852015.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL - 一条SQL语句执行过程\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130852015.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. MySQL 基础架构分析","slug":"_1-mysql-基础架构分析","link":"#_1-mysql-基础架构分析","children":[{"level":3,"title":"1.1 MySQL 基本架构概览","slug":"_1-1-mysql-基本架构概览","link":"#_1-1-mysql-基本架构概览","children":[]},{"level":3,"title":"1.2 Server 层基本组件介绍","slug":"_1-2-server-层基本组件介绍","link":"#_1-2-server-层基本组件介绍","children":[]}]},{"level":2,"title":"2. 语法分析","slug":"_2-语法分析","link":"#_2-语法分析","children":[{"level":3,"title":"2.1 查询语句","slug":"_2-1-查询语句","link":"#_2-1-查询语句","children":[]},{"level":3,"title":"2.2 更新语句","slug":"_2-2-更新语句","link":"#_2-2-更新语句","children":[]}]},{"level":2,"title":"3. 为什么要用两个日志模块","slug":"_3-为什么要用两个日志模块","link":"#_3-为什么要用两个日志模块","children":[]},{"level":2,"title":"4. 总结","slug":"_4-总结","link":"#_4-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":10.29,"words":3088},"filePathRelative":"posts/Database/MySQL/mysql-x-optimize-execute.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>本文会分析一个sql 语句在MySQL中的执行流程，包括</p>\\n<ul>\\n<li>sql的查询在Mysql内部会怎么流转</li>\\n<li>sql语句的更新是怎么完成的</li>\\n</ul>\\n<p>分析之前会先看Mysql的基础架构</p>\\n<ul>\\n<li>知道Mysql由哪些组件组成</li>\\n<li>这些组件有什么作用</li>\\n<li>可以帮助我们解决什么问题</li>\\n</ul>\\n<h2>1. MySQL 基础架构分析</h2>\\n<h3>1.1 MySQL 基本架构概览</h3>\\n<p>下图是Mysql 的一个简要架构图，从下面的可以清晰的看到用户的SQL语句在MySQL内部是如何执行的</p>","autoDesc":true}');export{p as comp,d as data};
