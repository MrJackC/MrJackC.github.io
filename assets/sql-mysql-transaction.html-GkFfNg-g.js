import{_ as n,c as s,a as e,o as a}from"./app-W9QyTiMU.js";const l={};function r(o,t){return a(),s("div",null,t[0]||(t[0]=[e(`<h1 id="mysql-事务" tabindex="-1"><a class="header-anchor" href="#mysql-事务"><span>MySQL - 事务</span></a></h1><h2 id="_1-什么是事务" tabindex="-1"><a class="header-anchor" href="#_1-什么是事务"><span>1. 什么是事务</span></a></h2><p><strong>事务就是逻辑上的一组操作，要么都执行，要么都不执行</strong></p><h3 id="_1-1-案例" tabindex="-1"><a class="header-anchor" href="#_1-1-案例"><span>1.1 案例</span></a></h3><p>事务最经典例子转账：假设小明要给小红转账1000元，这个转账会涉及到两个关键操作</p><ul><li>将小明的余额减少1000元</li><li>将小红的余额增加1000元</li></ul><p>万一在这两个操作之间突然出现错误比如银行系统奔溃，导致小明余额减少而小红的余额没有增加，这就不对了。<br> 事务就是保证这两个关键操作要么都成功，要么都失败</p><h2 id="_2-事务的四大特性-acid" tabindex="-1"><a class="header-anchor" href="#_2-事务的四大特性-acid"><span>2. 事务的四大特性（ACID）</span></a></h2><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130947334.png" alt="image-20190911000830006" tabindex="0" loading="lazy"><figcaption>image-20190911000830006</figcaption></figure><ol><li><p><strong>原子性（Atomicity）</strong>:</p><p>事务是<strong>最小的执行单位，不予许分割</strong>，事务的原子性保证动作么全部完成，要么完全不起作用</p></li><li><p><strong>一致性（Consistency）</strong>:</p><p>执行事务前后，数据保持一致，<strong>多个事务对同一个数据读取结果是相同的</strong></p></li><li><p><strong>隔离性（Isolation）</strong>：</p><p>并发访问数据库时，一个用户的事务不被其他事务所干扰，<strong>各并发事务之间数据库是独立的</strong></p></li><li><p><strong>持久性（Durability）</strong></p><p>一个事务被提交之后，它<strong>对数据库中数据的改变是持久的</strong>，即使数据库发生故障也不应该对其有任何影响</p></li></ol><h3 id="_2-1-数据库是如何保证acid的" tabindex="-1"><a class="header-anchor" href="#_2-1-数据库是如何保证acid的"><span>2.1 数据库是如何保证ACID的</span></a></h3><ul><li><p>四个特性，最重要的就是一致性。而<strong>一致性</strong>由原子性、隔离性、持久性来保证</p></li><li><p>原子性由Undo log保证：</p><p>Undo Log 会保存每次变更之前的记录，从而在发生错误时进行回滚</p></li><li><p>隔离性由MVVC和Lock保证</p></li><li><p>持久性有Redo Log保证</p><p>每次真正修改数据之前，都会将记录写到Redo Log中，只有redo log 写入成功，才会真正写入到B+tree中。如果提交之前断电，就可以通过Redo log恢复记录</p></li></ul><h2 id="_3-并发事务带来哪些问题" tabindex="-1"><a class="header-anchor" href="#_3-并发事务带来哪些问题"><span>3. 并发事务带来哪些问题</span></a></h2><p>在典型的应用程序中，多个事务并发运行，经常会操作相同的数据来完成各自的任务（<strong>多个用户对同一数据进行操作</strong>）。</p><p>并发虽然是必须的，但是可能会导致以下问题</p><ul><li><p><strong>脏读（Dirty read）</strong></p><ul><li>当一个事务正在访问数据并且对数据进行了修改，<strong>这种修改还没有提交到数据库中</strong></li><li>这时另外一个事务也访问了这个数据，然后<strong>使用了这个数据</strong></li><li>因为这个数据是还没有提交的数据，那么另外一个事务读到这个数据是“脏数据”，<strong>依据“脏数据”<strong>所做的</strong>操作可能是不正确的</strong></li></ul></li><li><p><strong>丢失修改（Lost to modify）</strong></p><ul><li><p>在<strong>一个事务读取</strong>一个数据时，另外一个事务<strong>也访问了该数据</strong></p></li><li><p>那么在<strong>第一个事务中修改</strong>了数据数据后，<strong>第二个事务也修改</strong>了这个数据</p></li><li><p>这样<strong>第一个事务内的修改就被丢失</strong>，因此称为丢失修改</p><p>例如：事务1 读取某表中的数据A=20，事务2也读取了A=20，事务1修改A=A-1,事务2也修改了A-1，最终结果A=19，事务1的修改被丢失</p></li></ul></li><li><p><strong>不可重复读（Unrepeatableread）</strong></p><ul><li><p>指在一个事务内<strong>多次读同一数据</strong>，在这个事务还没有结束时，<strong>另一个事务也访问该数据</strong></p></li><li><p>那么，在第一个事务中的两次读数据之间，<strong>由于第二个事务的修改</strong>导致<strong>第一个事务两次读取</strong>的数据可能不太一样</p><p>这样就发生了在一个事务内两次读到的数据是不一样的情况，因此称为不可重读读</p></li></ul></li><li><p><strong>幻读（Phantom read）</strong></p><ul><li>幻读与不可重复读类似。</li><li>他发生在<strong>一个事务（T1）读取了几行数据</strong>，接着另一个并发<strong>事务（T2）插入了一些数据</strong>时</li><li>在随后的查询中，第一个事务（T1）就会发现<strong>多了一些根本不存在的记录</strong></li></ul><p>就好像发生了幻觉一样，所以称为幻读</p></li></ul><h3 id="_3-1-不可重复读和幻读区别" tabindex="-1"><a class="header-anchor" href="#_3-1-不可重复读和幻读区别"><span>3.1 不可重复读和幻读区别</span></a></h3><ul><li><p>不可重复读的<strong>重点是修改</strong></p><p>比如：多次读取一条记录，发现其中某些列的值被修改</p></li><li><p>幻读的<strong>重点在与新增或者删除</strong></p><p>比如：多次读取一条记录，发现记录增多或减少了</p></li></ul><h2 id="_4-事务隔离级别有哪些" tabindex="-1"><a class="header-anchor" href="#_4-事务隔离级别有哪些"><span>4. 事务隔离级别有哪些</span></a></h2><p>SQL 标准定义了四个隔离级别</p><ul><li><p><strong>READ-UNCOMMITTED(读取未提交)：</strong></p><p>最低的隔离级别，允许读取尚未提交的数据变更，<strong>可能会导致脏读，幻读，或不可重复读</strong></p></li><li><p><strong>READ-COMMITTED(读取已提交)：</strong></p><p>允许读取并发事务已经提交的数据，<strong>可以阻止脏读，但是幻读或者不可重复读仍然有可能发生</strong></p></li><li><p><strong>REPEATABLE-READ(可重复读)：</strong></p><p>对同一个字段的多次读取结果结果都是一致的，除非数据是被本身事务自己所修改，<strong>可以阻止脏读和不可重复读，但幻读仍有可能发生</strong></p></li><li><p><strong>SERIALIZABLE(可串行化)：</strong></p><p>最高的隔离级别，完全服从ACID的隔离级别。<strong>所有的事务依次逐个执行</strong>，这样事务之间不可能产生干扰，也就是说，<strong>该级别可以防止脏读，不可重复读以及幻读</strong></p></li></ul><p>​</p><table><thead><tr><th>隔离级别</th><th>脏读</th><th>不可重复读</th><th>幻影读</th></tr></thead><tbody><tr><td>READ-UNCOMMITTED</td><td>√</td><td>√</td><td>√</td></tr><tr><td>READ-COMMITTED</td><td>×</td><td>√</td><td>√</td></tr><tr><td>REPEATABLE-READ</td><td>×</td><td>×</td><td>√</td></tr><tr><td>SERIALIZABLE</td><td>×</td><td>×</td><td>×</td></tr></tbody></table><h2 id="_5-隔离级别案例" tabindex="-1"><a class="header-anchor" href="#_5-隔离级别案例"><span>5. 隔离级别案例</span></a></h2><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130947379.png" alt="image-20221017203116041" tabindex="0" loading="lazy"><figcaption>image-20221017203116041</figcaption></figure><p>我们来看看在不同的隔离级别下，事务 A 会有哪些不同的返回结果，也就是图里面 V1、V2、V3 的返回值分别是什么。</p><ul><li>若隔离级别是“读未提交”， 则 V1 的值就是 2。这时候事务 B 虽然还没有提交，但是结果已经被 A 看到了。因此，V2、V3 也都是2。</li><li>若隔离级别是“读提交”，则 V1 是 1，V2 的值是 2。事务 B 的更新在提交后才能被 A 看到。所以， V3 的值也是2。</li><li>若隔离级别是“可重复读”，则 V1、V2 是 1，V3 是 2。之所以 V2 还是 1，遵循的就是这个要求：事务在执行期间看到的数据前后必须是一致的。</li><li>若隔离级别是“串行化”，则在事务 B 执行“将 1 改成 2”的时候，会被锁住。直到事务 A 提交后，事务 B 才可以继续执行。所以从 A 的角度看， V1、V2 值是 1，V3 的值是 2。</li></ul><blockquote><p>在实现上，数据库里面会创建一个视图，访问的时候以视图的逻辑结果为准。在“可重复读”隔离级别下，这个视图是在事务启动时创建的，整个事务存在期间都用这个视图。在“读提交”隔离级别下，这个视图是在每个 SQL 语句开始执行的时候创建的。这里需要注意的是，“读未提交”隔离级别下直接返回记录上的最新值，没有视图概念；而“串行化”隔离级别下直接用加锁的方式来避免并行访问。</p></blockquote><h2 id="_6-mysql-innodb-的隔离级别" tabindex="-1"><a class="header-anchor" href="#_6-mysql-innodb-的隔离级别"><span>6. MySQL innoDB 的隔离级别</span></a></h2><p>MySQL innoDB 存储引擎的默认支持的隔离级别是<strong>REPEATABLE-READ（可重复读）</strong></p><p>可以通过<code>SELECT @@tx_isolation;</code>命令来查看</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT @@tx_isolation;</span></span>
<span class="line"><span>+-----------------+</span></span>
<span class="line"><span>| @@tx_isolation  |</span></span>
<span class="line"><span>+-----------------+</span></span>
<span class="line"><span>| REPEATABLE-READ |</span></span>
<span class="line"><span>+-----------------+</span></span>
<span class="line"><span>1 row in set, 1 warning (0.00 sec)</span></span></code></pre></div><h3 id="_5-1-innodb-的-repeatable-read为什么可以避免幻读" tabindex="-1"><a class="header-anchor" href="#_5-1-innodb-的-repeatable-read为什么可以避免幻读"><span>5.1 InnoDB 的 REPEATABLE-READ为什么可以避免幻读</span></a></h3><ul><li><strong>Next-key Lock锁算法</strong>。因此可以避免幻读的产生 <ul><li>与SQL 标准不同的地方在于InnoDB 存储在 <strong>REPEATABLE-READ（可重读）<strong>事务隔离界别下使用的是</strong>Next-key Lock锁算法</strong>。因此可以<strong>避免幻读的产生</strong></li><li>这与其他数据库系统（如：SQL Server）是不同的，所以说InnoDB 存在引擎的默认支持的隔离级别是REPEATABLE-READ（可重读），已经可以完全保证事务的隔离性要求，既达到了SQL 标准的<strong>SERIALIZABLE(可串行化)</strong> 隔离级别</li><li>因为隔离级别越低，事务请求的锁越少，但是大部分数据库的隔离级别都是<strong>READ-COMMITTED(读取提交内容)</strong> ，但是你要知道的是InnoDB 存储引擎默认使用 <strong>REPEAaTABLE-READ（可重读）</strong> 并不会有任何性能损失。</li></ul></li><li>InnoDB 存储引擎在 <strong>分布式事务</strong> 的情况下一般会用到 <strong>SERIALIZABLE(可串行化)</strong> 隔离级别。</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://time.geekbang.org/column/article/68963" target="_blank" rel="noopener noreferrer">03 | 事务隔离：为什么你改了我还看不见?</a></p>`,36)]))}const p=n(l,[["render",r],["__file","sql-mysql-transaction.html.vue"]]),g=JSON.parse('{"path":"/posts/Database/MySQL/sql-mysql-transaction.html","title":"MySQL - 事务","lang":"zh-CN","frontmatter":{"aliases":"MySQL - 事务","tags":null,"cssclass":null,"source":null,"order":40,"category":["数据库","Mysql"],"created":"2024-02-22 10:49","updated":"2024-03-13 09:47","description":"MySQL - 事务 1. 什么是事务 事务就是逻辑上的一组操作，要么都执行，要么都不执行 1.1 案例 事务最经典例子转账：假设小明要给小红转账1000元，这个转账会涉及到两个关键操作 将小明的余额减少1000元 将小红的余额增加1000元 万一在这两个操作之间突然出现错误比如银行系统奔溃，导致小明余额减少而小红的余额没有增加，这就不对了。 事务就是...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/MySQL/sql-mysql-transaction.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"MySQL - 事务"}],["meta",{"property":"og:description","content":"MySQL - 事务 1. 什么是事务 事务就是逻辑上的一组操作，要么都执行，要么都不执行 1.1 案例 事务最经典例子转账：假设小明要给小红转账1000元，这个转账会涉及到两个关键操作 将小明的余额减少1000元 将小红的余额增加1000元 万一在这两个操作之间突然出现错误比如银行系统奔溃，导致小明余额减少而小红的余额没有增加，这就不对了。 事务就是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130947334.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL - 事务\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130947334.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130947379.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是事务","slug":"_1-什么是事务","link":"#_1-什么是事务","children":[{"level":3,"title":"1.1 案例","slug":"_1-1-案例","link":"#_1-1-案例","children":[]}]},{"level":2,"title":"2. 事务的四大特性（ACID）","slug":"_2-事务的四大特性-acid","link":"#_2-事务的四大特性-acid","children":[{"level":3,"title":"2.1 数据库是如何保证ACID的","slug":"_2-1-数据库是如何保证acid的","link":"#_2-1-数据库是如何保证acid的","children":[]}]},{"level":2,"title":"3. 并发事务带来哪些问题","slug":"_3-并发事务带来哪些问题","link":"#_3-并发事务带来哪些问题","children":[{"level":3,"title":"3.1 不可重复读和幻读区别","slug":"_3-1-不可重复读和幻读区别","link":"#_3-1-不可重复读和幻读区别","children":[]}]},{"level":2,"title":"4. 事务隔离级别有哪些","slug":"_4-事务隔离级别有哪些","link":"#_4-事务隔离级别有哪些","children":[]},{"level":2,"title":"5. 隔离级别案例","slug":"_5-隔离级别案例","link":"#_5-隔离级别案例","children":[]},{"level":2,"title":"6. MySQL innoDB 的隔离级别","slug":"_6-mysql-innodb-的隔离级别","link":"#_6-mysql-innodb-的隔离级别","children":[{"level":3,"title":"5.1 InnoDB 的 REPEATABLE-READ为什么可以避免幻读","slug":"_5-1-innodb-的-repeatable-read为什么可以避免幻读","link":"#_5-1-innodb-的-repeatable-read为什么可以避免幻读","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":7.22,"words":2165},"filePathRelative":"posts/Database/MySQL/sql-mysql-transaction.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 什么是事务</h2>\\n<p><strong>事务就是逻辑上的一组操作，要么都执行，要么都不执行</strong></p>\\n<h3>1.1 案例</h3>\\n<p>事务最经典例子转账：假设小明要给小红转账1000元，这个转账会涉及到两个关键操作</p>\\n<ul>\\n<li>将小明的余额减少1000元</li>\\n<li>将小红的余额增加1000元</li>\\n</ul>\\n<p>万一在这两个操作之间突然出现错误比如银行系统奔溃，导致小明余额减少而小红的余额没有增加，这就不对了。<br>\\n事务就是保证这两个关键操作要么都成功，要么都失败</p>\\n<h2>2. 事务的四大特性（ACID）</h2>","autoDesc":true}');export{p as comp,g as data};
