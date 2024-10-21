import{_ as i,c as t,a as n,o as l}from"./app-BhoNqsD-.js";const r={};function o(a,e){return l(),t("div",null,e[0]||(e[0]=[n('<h1 id="mysql-mysql-innodb的mvcc实现机制" tabindex="-1"><a class="header-anchor" href="#mysql-mysql-innodb的mvcc实现机制"><span>MySQL - MySQL InnoDB的MVCC实现机制</span></a></h1><h2 id="_1-前提概要" tabindex="-1"><a class="header-anchor" href="#_1-前提概要"><span>1. 前提概要</span></a></h2><h3 id="_1-1-什么是-mvcc" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是-mvcc"><span>1.1 什么是 MVCC ?</span></a></h3><blockquote><p>MVCC<br> MVCC，全称 Multi-Version Concurrency Control ，即多版本并发控制。MVCC 是一种并发控制的方法，一般在数据库管理系统中，实现对数据库的并发访问，在编程语言中实现事务内存。</p></blockquote><p>MVCC 在 MySQL InnoDB 中的实现主要是为了提高数据库并发性能，用更好的方式去处理读-写冲突，做到即使有读写冲突时，也能做到不加锁，非阻塞并发读</p><h3 id="_1-2-什么是当前读和快照读" tabindex="-1"><a class="header-anchor" href="#_1-2-什么是当前读和快照读"><span>1.2 什么是当前读和快照读？</span></a></h3><p>在学习 MVCC 多版本并发控制之前，我们必须先了解一下，什么是 MySQL InnoDB 下的当前读和快照读?</p><ul><li><p>当前读<br> 像 select lock in share mode (<strong>共享锁</strong>), select for update; update; insert; delete (<strong>排他锁</strong>)这些操作都是一种当前读，为什么叫当前读？就是它读取的是记录的最新版本，读取时还要保证其他并发事务不能修改当前记录，会对读取的记录进行加锁</p></li><li><p>快照读<br> 像<strong>不加锁</strong>的 select 操作就是快照读，即不加锁的非阻塞读；快照读的前提是隔离级别不是串行级别，串行级别下的快照读会退化成当前读；之所以出现快照读的情况，是基于提高并发性能的考虑，快照读的实现是基于多版本并发控制，即 MVCC ,可以认为 MVCC 是行锁的一个变种，但它在很多情况下，避免了加锁操作，降低了开销；既然是基于多版本，即快照读可能读到的并不一定是数据的最新版本，而有可能是之前的历史版本</p></li></ul><p><strong>说白了 MVCC 就是为了实现读-写冲突不加锁，而这个读指的就是快照读, 而非当前读，当前读实际上是一种加锁的操作，是悲观锁的实现</strong></p><h3 id="_1-3-当前读-快照读和mvcc的关系" tabindex="-1"><a class="header-anchor" href="#_1-3-当前读-快照读和mvcc的关系"><span>1.3 当前读，快照读和MVCC的关系</span></a></h3><ul><li>MVCC 多版本并发控制是 「维持一个数据的多个版本，使得读写操作没有冲突」 的概念，只是一个抽象概念，并非实现</li><li>因为 MVCC 只是一个抽象概念，要实现这么一个概念，MySQL 就需要提供具体的功能去实现它，「快照读就是 MySQL 实现 MVCC 理想模型的其中一个非阻塞读功能」。而相对而言，<strong>当前读就是悲观锁的具体功能实现</strong></li><li>要说的再细致一些，<strong>快照读本身也是一个抽象概念，再深入研究。MVCC 模型在 MySQL 中的具体实现则是由 3 个隐式字段，undo 日志 ，Read View 等去完成的</strong>，具体可以看下面的 MVCC 实现原理</li></ul><h3 id="_1-4-mvcc-能解决什么问题-好处是" tabindex="-1"><a class="header-anchor" href="#_1-4-mvcc-能解决什么问题-好处是"><span>1.4 MVCC 能解决什么问题，好处是？</span></a></h3><p>数据库并发场景有三种，分别为：</p><ul><li>读-读：不存在任何问题，也不需要并发控制</li><li>读-写：有线程安全问题，可能会造成事务隔离性问题，可能遇到脏读，幻读，不可重复读</li><li>写-写：有线程安全问题，可能会存在更新丢失问题，比如第一类更新丢失，第二类更新丢失</li></ul><p><strong>MVCC 带来的好处是？</strong></p><p>多版本并发控制（MVCC）是一种<strong>用来解决读-写冲突的无锁并发控制</strong>，也就是<strong>为事务分配单向增长的时间戳，为每个修改保存一个版本，版本与事务时间戳关联，读操作只读该事务开始前的数据库的快照。</strong> 所以 MVCC 可以为数据库解决以下问题</p><ul><li>在并发读写数据库时，可以做到在读操作时不用阻塞写操作，写操作也不用阻塞读操作，提高了数据库并发读写的性能</li><li>同时还可以解决脏读，幻读，不可重复读等事务隔离问题，但不能解决更新丢失问题</li></ul><p><strong>小结一下咯</strong></p><p>简而言之，MVCC 就是因为大佬们，不满意只让数据库采用悲观锁这样性能不佳的形式去解决读-写冲突问题，而提出的解决方案，所以在数据库中，<strong>因为有了 MVCC，所以我们可以形成两个组合：</strong></p><ul><li><code>MVCC + 悲观锁</code><br> MVCC解决读写冲突，悲观锁解决写写冲突</li><li><code>MVCC + 乐观锁</code><br> MVCC 解决读写冲突，乐观锁解决写写冲突</li></ul><p>这种组合的方式就可以最大程度的提高数据库并发性能，并解决读写冲突，和写写冲突导致的问题</p><h2 id="_2-mvcc-的实现原理" tabindex="-1"><a class="header-anchor" href="#_2-mvcc-的实现原理"><span>2. MVCC 的实现原理</span></a></h2><p>MVCC 的目的就是多版本并发控制，在数据库中的实现，就是为了解决读写冲突，它的<strong>实现原理主要是依赖记录中的 3个隐式字段，undo日志 ，Read View 来实现的</strong>。所以我们先来看看这个三个 point 的概念</p><h3 id="_2-1-隐式字段" tabindex="-1"><a class="header-anchor" href="#_2-1-隐式字段"><span>2.1 隐式字段</span></a></h3><p>每行记录除了我们自定义的字段外，还有数据库隐式定义的 <strong>DB_TRX_ID, DB_ROLL_PTR, DB_ROW_ID</strong> 等字段</p><ul><li><strong>DB_TRX_ID</strong><br> 6 byte，<strong>最近修改(修改/插入)事务 ID</strong>：记录创建这条记录/最后一次修改该记录的事务 ID</li><li><strong>DB_ROLL_PTR</strong><br> 7 byte，<strong>回滚指针</strong>，指向这条记录的上一个版本（存储于 rollback segment 里）</li><li><strong>DB_ROW_ID</strong><br> 6 byte，<strong>隐含的自增 ID（隐藏主键）</strong>，如果数据表没有主键，InnoDB 会自动以DB_ROW_ID产生一个聚簇索引</li><li>实际还有一个删除 flag 隐藏字段, 既记录被更新或删除并不代表真的删除，而是删除 flag 变了</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939824.png" alt="image-20220609230228840" tabindex="0" loading="lazy"><figcaption>image-20220609230228840</figcaption></figure><p>如上图，<code>DB_ROW_ID</code> 是数据库默认为该行记录生成的唯一隐式主键，<code>DB_TRX_ID</code> 是当前操作该记录的事务 ID ,而 <code>DB_ROLL_PTR</code> 是一个回滚指针，用于配合 undo日志，指向上一个旧版本</p><h3 id="_2-2-undo日志" tabindex="-1"><a class="header-anchor" href="#_2-2-undo日志"><span>2.2 undo日志</span></a></h3><p>undo log 主要分为两种：</p><ul><li><strong>insert undo log</strong><br> 代表事务在 <strong>insert</strong> 新记录时产生的 <strong>undo log</strong>, 只在事务回滚时需要，并且在事务提交后可以被立即丢弃</li><li><strong>update undo log</strong><br> 事务在进行 <strong>update</strong> 或 <strong>delete</strong> 时产生的 <strong>undo log</strong> ; <strong>不仅在事务回滚时需要，在快照读时也需要；所以不能随便删除</strong>，只有在快速读或事务回滚不涉及该日志时，对应的日志才会被 purge 线程统一清除</li></ul><blockquote><p>purge</p><ul><li><p>从前面的分析可以看出，为了实现 InnoDB 的 MVCC 机制，更新或者删除操作都只是设置一下老记录的 deleted_bit ，并不真正将过时的记录删除。</p></li><li><p>为了节省磁盘空间，InnoDB 有专门的 purge 线程来清理 deleted_bit 为 true 的记录。为了不影响 MVCC 的正常工作，purge 线程自己也维护了一个read view（这个 read view 相当于系统中最老活跃事务的 read view ）;如果某个记录的 deleted_bit 为 true ，并且 DB_TRX_ID 相对于 purge 线程的 read view 可见，那么这条记录一定是可以被安全清除的。</p></li></ul></blockquote><p>对 MVCC 有帮助的实质是 <strong>update undo log</strong> ，<strong>undo log</strong> 实际上就是存在 <strong>rollback segment</strong> 中旧记录链，它的执行流程如下：</p><h4 id="_2-2-1-示例" tabindex="-1"><a class="header-anchor" href="#_2-2-1-示例"><span>2.2.1 示例</span></a></h4><ol><li>比如一个有个事务插入 persion 表插入了一条新记录，记录如下，name 为 Jerry , age 为 24 岁，<strong>隐式主键是 1，事务 ID和回滚指针</strong>，我们假设为 NULL</li></ol><p>​ <img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939861.png" alt="image-20220609230825307" loading="lazy"></p><ol><li><p><strong>现在来了一个<code>事务 1</code>对该记录的 <code>name</code> 做出了修改，改为 Tom</strong></p><ul><li>在<code>事务 1</code>修改该行(记录)数据时，数据库会先对该行加<code>排他锁</code></li><li>然后把该行数据拷贝到 undo log 中，作为旧记录，既在 undo log 中有当前行的拷贝副本</li><li>拷贝完毕后，修改该行name为Tom，并且修改隐藏字段的事务 ID 为当前事务 1的 ID, 我们默认从 1 开始，之后递增，回滚指针指向拷贝到 undo log 的副本记录，既表示我的上一个版本就是它</li><li>事务提交后，释放锁</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939894.png" alt="image-20220609231103326" tabindex="0" loading="lazy"><figcaption>image-20220609231103326</figcaption></figure></li><li><p>又来了个事务 2修改person 表的同一个记录，将age修改为 30 岁</p><ul><li>在事务2修改该行数据时，数据库也先为该行加锁</li><li><strong>然后把该行数据拷贝到 undo log 中，作为旧记录，发现该行记录已经有 undo log 了，那么最新的旧数据作为链表的表头，插在该行记录的 undo log 最前面</strong></li><li>修改该行 age 为 30 岁，并且修改隐藏字段的事务 ID 为当前事务 2的 ID, 那就是 2 ，回滚指针指向刚刚拷贝到 undo log 的副本记录</li><li>事务提交，释放锁</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939915.png" alt="image-20220609231216790" tabindex="0" loading="lazy"><figcaption>image-20220609231216790</figcaption></figure></li></ol><p>从上面，我们就可以看出，不同事务或者相同事务的对同一记录的修改，会导致该记录的undo log成为一条记录版本线性表，既<strong>链表</strong>，<strong>undo log 的链首就是最新的旧记录，链尾就是最早的旧记录</strong>（当然就像之前说的该 undo log 的节点可能是会 purge 线程清除掉，向图中的第一条 insert undo log，其实在事务提交之后可能就被删除丢失了，不过这里为了演示，所以还放在这里）</p><h3 id="_2-3-read-view-读视图" tabindex="-1"><a class="header-anchor" href="#_2-3-read-view-读视图"><span>2.3 Read View 读视图</span></a></h3><h4 id="_2-3-1-什么是-read-view" tabindex="-1"><a class="header-anchor" href="#_2-3-1-什么是-read-view"><span>2.3.1 什么是 Read View?</span></a></h4><p>什么是 Read View，说白了 Read View 就是事务进行<strong>快照读</strong>操作的时候生产的<strong>读视图 (Read View)</strong>，在该事务执行的快照读的那一刻，会生成数据库系统当前的一个快照，记录并维护系统当前活跃事务的 ID (<strong>当每个事务开启时，都会被分配一个 ID , 这个 ID 是递增的，所以最新的事务，ID 值越大)</strong></p><p>所以我们知道 Read View 主要是用来做可见性判断的, 即当我们某个事务执行快照读的时候，对该记录创建一个 Read View 读视图，把它比作条件用来判断当前事务能够看到哪个版本的数据，既可能是当前最新的数据，也有可能是该行记录的undo log里面的某个版本的数据。</p><p>Read View遵循一个可见性算法，主要是将<strong>要被修改的数据</strong>的最新记录中的 DB_TRX_ID（即当前事务 ID ）取出来，与系统当前其他活跃事务的 ID 去对比（由 Read View 维护），如果 DB_TRX_ID 跟 Read View 的属性做了某些比较，不符合可见性，那就通过 DB_ROLL_PTR 回滚指针去取出 Undo Log 中的 DB_TRX_ID 再比较，即遍历链表的 DB_TRX_ID（从链首到链尾，即从最近的一次修改查起），直到找到满足特定条件的 DB_TRX_ID , <strong>那么这个 DB_TRX_ID 所在的旧记录就是当前事务能看见的最新老版本</strong></p><blockquote><p>总之：就是为了找到最新的老版本</p></blockquote><p>那么这个判断条件是什么呢？</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939945.png" alt="image-20220609232020276" tabindex="0" loading="lazy"><figcaption>image-20220609232020276</figcaption></figure><p>如上，它是一段 MySQL 判断可见性的一段源码，即 changes_visible 方法（不完全哈，但能看出大致逻辑），该方法展示了我们拿 DB_TRX_ID 去跟 Read View 某些属性进行怎么样的比较</p><p>在展示之前，我先简化一下 Read View，我们可以把 Read View 简单的理解成有三个全局属性</p><blockquote><ul><li>trx_list（名称我随意取的）</li><li>一个数值列表</li><li>用于维护 Read View 生成时刻系统 正活跃的事务 ID 列表</li><li>up_limit_id</li><li>lower water remark</li><li>是 trx_list 列表中事务 ID 最小的 ID</li><li>low_limit_id</li><li>hight water mark</li><li>ReadView 生成时刻系统尚未分配的下一个事务 ID ，也就是 目前已出现过的事务 ID 的最大值 + 1</li><li>为什么是 low_limit ? 因为它也是系统此刻可分配的事务 ID 的最小值</li></ul></blockquote><ul><li>首先比较 DB_TRX_ID &lt; up_limit_id , 如果小于，则当前事务能看到 DB_TRX_ID 所在的记录，如果大于等于进入下一个判断</li><li>接下来判断 DB_TRX_ID &gt;= low_limit_id , 如果大于等于则代表 DB_TRX_ID 所在的记录在 Read View 生成后才出现的，那对当前事务肯定不可见，如果小于则进入下一个判断</li><li>判断 DB_TRX_ID 是否在活跃事务之中，trx_list.contains (DB_TRX_ID)，如果在，则代表我 Read View 生成时刻，你这个事务还在活跃，还没有 Commit，你修改的数据，我当前事务也是看不见的；如果不在，则说明，你这个事务在 Read View 生成之前就已经 Commit 了，你修改的结果，我当前事务是能看见的</li></ul><h2 id="_3-整体流程" tabindex="-1"><a class="header-anchor" href="#_3-整体流程"><span>3. 整体流程</span></a></h2><p>我们在了解了 <strong>隐式字段，undo log， 以及 Read View</strong> 的概念之后，就可以来看看 MVCC 实现的整体流程是怎么样了</p><p><strong>整体的流程是怎么样的呢？我们可以模拟一下</strong></p><ul><li><p>当事务 2对某行数据执行了快照读，数据库为该行数据生成一个Read View读视图，假设当前事务 ID 为 2，此时还有事务1和事务3在活跃中，事务 4在事务 2快照读前一刻提交更新了，所以 Read View 记录了系统当前活跃事务 1，3 的 ID，维护在一个列表上，假设我们称为trx_list</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939976.png" alt="image-20220609232400027" tabindex="0" loading="lazy"><figcaption>image-20220609232400027</figcaption></figure></li><li><p>Read View 不仅仅会通过一个列表 trx_list 来维护事务 2执行快照读那刻系统正活跃的事务 ID 列表，还会有两个属性 up_limit_id（ trx_list 列表中事务 ID 最小的 ID ），low_limit_id ( 快照读时刻系统尚未分配的下一个事务 ID ，也就是目前已出现过的事务ID的最大值 + 1。所以在这里例子中 up_limit_id 就是1，low_limit_id 就是 4 + 1 = 5，trx_list 集合的值是 1, 3，Read View 如下图</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939008.png" alt="image-20220609232430132" tabindex="0" loading="lazy"><figcaption>image-20220609232430132</figcaption></figure></li><li><p>我们的例子中，只有事务 4 修改过该行记录，并在事务 2 执行快照读前，就提交了事务，所以当前该行当前数据的 undo log 如下图所示；我们的事务 2 在快照读该行记录的时候，就会拿该行记录的 DB_TRX_ID 去跟 up_limit_id , low_limit_id 和活跃事务 ID 列表( trx_list )进行比较，判断当前事务 2能看到该记录的版本是哪个。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939038.png" alt="image-20220609232509367" tabindex="0" loading="lazy"><figcaption>image-20220609232509367</figcaption></figure></li><li><p>所以先拿该记录 DB_TRX_ID 字段记录的事务 ID 4 去跟 Read View 的 up_limit_id 比较，看 4 是否小于 up_limit_id( 1 )，所以不符合条件，继续判断 4 是否大于等于 low_limit_id( 5 )，也不符合条件，最后判断 4 是否处于 trx_list 中的活跃事务, 最后发现事务 ID 为 4 的事务不在当前活跃事务列表中, 符合可见性条件，所以事务 4修改后提交的最新结果对事务 2 快照读时是可见的，所以事务 2 能读到的最新数据记录是事务4所提交的版本，而事务4提交的版本也是全局角度上最新的版本</p></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939073.png" alt="image-20220609232531276" tabindex="0" loading="lazy"><figcaption>image-20220609232531276</figcaption></figure><ul><li>也正是 Read View 生成时机的不同，从而造成 RC , RR 级别下快照读的结果的不同</li></ul><h2 id="_4-mvcc-相关问题" tabindex="-1"><a class="header-anchor" href="#_4-mvcc-相关问题"><span>4. MVCC 相关问题</span></a></h2><h3 id="_4-1-rr-是如何在-rc-级的基础上解决不可重复读的" tabindex="-1"><a class="header-anchor" href="#_4-1-rr-是如何在-rc-级的基础上解决不可重复读的"><span>4.1 RR 是如何在 RC 级的基础上解决不可重复读的？</span></a></h3><p>当前读和快照读在 RR 级别下的区别：<br> 表1:</p><p><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939097.png" alt="image-20220609232704533" loading="lazy"><br> 在上表的顺序下，事务 B 的在事务 A 提交修改后的快照读是旧版本数据，而当前读是实时新数据 400</p><p>表2:</p><p><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939132.png" alt="image-20220609232910320" loading="lazy"><br> 而在表 2这里的顺序中，事务 B 在事务 A 提交后的快照读和当前读都是实时的新数据 400，这是为什么呢？</p><ul><li>这里与上表的唯一区别仅仅是<code>表 1</code>的<strong>事务 B 在事务 A 修改金额前<code>快照读</code>过一次金额数据</strong>，而<code>表 2</code>的事务B在事务A修改金额前没有进行过快照读。</li></ul><p>所以我们知道事务中快照读的结果是非常依赖该事务首次出现快照读的地方，即某个事务中首次出现快照读的地方非常关键，它有决定该事务后续快照读结果的能力</p><p>我们这里测试的是更新，同时删除和更新也是一样的，如果事务B的快照读是在事务A操作之后进行的，事务B的快照读也是能读取到最新的数据的</p><h3 id="_4-2-rc-rr-级别下的-innodb-快照读有什么不同" tabindex="-1"><a class="header-anchor" href="#_4-2-rc-rr-级别下的-innodb-快照读有什么不同"><span>4.2 RC , RR 级别下的 InnoDB 快照读有什么不同？</span></a></h3><p>正是 Read View 生成时机的不同，从而造成 RC , RR 级别下快照读的结果的不同</p><ul><li>在 RR 级别下的某个事务的对某条记录的第一次快照读会创建一个快照及 Read View, 将当前系统活跃的其他事务记录起来，此后在调用快照读的时候，还是使用的是同一个 Read View，所以只要当前事务在其他事务提交更新之前使用过快照读，那么之后的快照读使用的都是同一个 Read View，所以对之后的修改不可见；</li><li>即 RR 级别下，快照读生成 Read View 时，Read View 会记录此时所有其他活动事务的快照，这些事务的修改对于当前事务都是不可见的。而早于Read View创建的事务所做的修改均是可见</li><li>而在 RC 级别下的，事务中，每次快照读都会新生成一个快照和 Read View , 这就是我们在 RC 级别下的事务中可以看到别的事务提交的更新的原因</li></ul><p><strong>总之在 RC 隔离级别下，是每个快照读都会生成并获取最新的 Read View；而在 RR 隔离级别下，则是同一个事务中的第一个快照读才会创建 Read View, 之后的快照读获取的都是同一个 Read View。</strong></p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><ul><li><a href="https://pdai.tech/md/db/sql-mysql/sql-mysql-mvcc.html" target="_blank" rel="noopener noreferrer"><strong>MySQL - MySQL InnoDB的MVCC实现机制</strong></a></li><li><a href="https://blog.csdn.net/SnailMann/article/details/94724197" target="_blank" rel="noopener noreferrer">【MySQL笔记】正确的理解MySQL的MVCC及实现原理</a></li></ul>',71)]))}const c=i(r,[["render",o],["__file","mysql-y-lock-mvvc.html.vue"]]),g=JSON.parse('{"path":"/posts/Database/MySQL/mysql-y-lock-mvvc.html","title":"MySQL - MySQL InnoDB的MVCC实现机制","lang":"zh-CN","frontmatter":{"aliases":"MySQL - MySQL InnoDB的MVCC实现机制","tags":null,"cssclass":null,"source":null,"order":330,"category":["Mysql","数据库"],"created":"2024-02-22 10:49","updated":"2024-03-13 09:39","description":"MySQL - MySQL InnoDB的MVCC实现机制 1. 前提概要 1.1 什么是 MVCC ? MVCC MVCC，全称 Multi-Version Concurrency Control ，即多版本并发控制。MVCC 是一种并发控制的方法，一般在数据库管理系统中，实现对数据库的并发访问，在编程语言中实现事务内存。 MVCC 在 MySQL ...","head":[["meta",{"property":"og:url","content":"https://mrjason.me/posts/Database/MySQL/mysql-y-lock-mvvc.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"MySQL - MySQL InnoDB的MVCC实现机制"}],["meta",{"property":"og:description","content":"MySQL - MySQL InnoDB的MVCC实现机制 1. 前提概要 1.1 什么是 MVCC ? MVCC MVCC，全称 Multi-Version Concurrency Control ，即多版本并发控制。MVCC 是一种并发控制的方法，一般在数据库管理系统中，实现对数据库的并发访问，在编程语言中实现事务内存。 MVCC 在 MySQL ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939824.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL - MySQL InnoDB的MVCC实现机制\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939824.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939861.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939894.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939915.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939945.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939976.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939008.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939038.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939073.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939097.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130939132.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjason.me\\"}]}"]]},"headers":[{"level":2,"title":"1. 前提概要","slug":"_1-前提概要","link":"#_1-前提概要","children":[{"level":3,"title":"1.1 什么是 MVCC ?","slug":"_1-1-什么是-mvcc","link":"#_1-1-什么是-mvcc","children":[]},{"level":3,"title":"1.2 什么是当前读和快照读？","slug":"_1-2-什么是当前读和快照读","link":"#_1-2-什么是当前读和快照读","children":[]},{"level":3,"title":"1.3 当前读，快照读和MVCC的关系","slug":"_1-3-当前读-快照读和mvcc的关系","link":"#_1-3-当前读-快照读和mvcc的关系","children":[]},{"level":3,"title":"1.4 MVCC 能解决什么问题，好处是？","slug":"_1-4-mvcc-能解决什么问题-好处是","link":"#_1-4-mvcc-能解决什么问题-好处是","children":[]}]},{"level":2,"title":"2. MVCC 的实现原理","slug":"_2-mvcc-的实现原理","link":"#_2-mvcc-的实现原理","children":[{"level":3,"title":"2.1 隐式字段","slug":"_2-1-隐式字段","link":"#_2-1-隐式字段","children":[]},{"level":3,"title":"2.2 undo日志","slug":"_2-2-undo日志","link":"#_2-2-undo日志","children":[]},{"level":3,"title":"2.3 Read View 读视图","slug":"_2-3-read-view-读视图","link":"#_2-3-read-view-读视图","children":[]}]},{"level":2,"title":"3. 整体流程","slug":"_3-整体流程","link":"#_3-整体流程","children":[]},{"level":2,"title":"4. MVCC 相关问题","slug":"_4-mvcc-相关问题","link":"#_4-mvcc-相关问题","children":[{"level":3,"title":"4.1 RR 是如何在 RC 级的基础上解决不可重复读的？","slug":"_4-1-rr-是如何在-rc-级的基础上解决不可重复读的","link":"#_4-1-rr-是如何在-rc-级的基础上解决不可重复读的","children":[]},{"level":3,"title":"4.2 RC , RR 级别下的 InnoDB 快照读有什么不同？","slug":"_4-2-rc-rr-级别下的-innodb-快照读有什么不同","link":"#_4-2-rc-rr-级别下的-innodb-快照读有什么不同","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":15.2,"words":4560},"filePathRelative":"posts/Database/MySQL/mysql-y-lock-mvvc.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 前提概要</h2>\\n<h3>1.1 什么是 MVCC ?</h3>\\n<blockquote>\\n<p>MVCC<br>\\nMVCC，全称 Multi-Version Concurrency Control ，即多版本并发控制。MVCC 是一种并发控制的方法，一般在数据库管理系统中，实现对数据库的并发访问，在编程语言中实现事务内存。</p>\\n</blockquote>\\n<p>MVCC 在 MySQL InnoDB 中的实现主要是为了提高数据库并发性能，用更好的方式去处理读-写冲突，做到即使有读写冲突时，也能做到不加锁，非阻塞并发读</p>\\n<h3>1.2 什么是当前读和快照读？</h3>","autoDesc":true}');export{c as comp,g as data};
