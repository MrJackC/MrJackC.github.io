import{_ as i,c as a,a as s,o as l}from"./app-CpAF2rca.js";const r={};function t(n,e){return l(),a("div",null,e[0]||(e[0]=[s(`<h1 id="redis面试-持久化和内存" tabindex="-1"><a class="header-anchor" href="#redis面试-持久化和内存"><span>Redis面试 - 持久化和内存</span></a></h1><h2 id="_1-redis-的持久化机制是什么-各自的优缺点-一般怎么用" tabindex="-1"><a class="header-anchor" href="#_1-redis-的持久化机制是什么-各自的优缺点-一般怎么用"><span>1 Redis 的持久化机制是什么？各自的优缺点？一般怎么用？</span></a></h2><ol><li>RDB持久化是把当前进程数据生成快照保存到磁盘上的过程; 针对RDB不适合实时持久化的问题，Redis提供了AOF持久化方式来解决.</li><li>AOF是“写后”日志，Redis先执行命令，把数据写入内存，然后才记录日志。日志里记录的是Redis收到的每一条命令，这些命令是以文本形式保存。</li><li>Redis 4.0 中提出了一个<strong>混合使用 AOF 日志和内存快照</strong>的方法。简单来说，内存快照以一定的频率执行，在两次快照之间，使用 AOF 日志记录这期间的所有命令操作。</li></ol><p>这样一来，快照不用很频繁地执行，这就避免了频繁 fork 对主线程的影响。而且，AOF 日志也只用记录两次快照间的操作，也就是说，不需要记录所有操作了，因此，就不会出现文件过大的情况了，也可以避免重写开销。</p><p>如下图所示，T1 和 T2 时刻的修改，用 AOF 日志记录，等到第二次做全量快照时，就可以清空 AOF 日志，因为此时的修改都已经记录到快照中了，恢复时就不再用日志了。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131036479.png" alt="image-20220628222023267" tabindex="0" loading="lazy"><figcaption>image-20220628222023267</figcaption></figure><p>这个方法既能享受到 RDB 文件快速恢复的好处，又能享受到 AOF 只记录操作命令的简单优势, 实际环境中用的很多。</p><h2 id="_2-rdb-触发方式" tabindex="-1"><a class="header-anchor" href="#_2-rdb-触发方式"><span>2 RDB 触发方式?</span></a></h2><p>触发rdb持久化的方式有2种，分别是<strong>手动触发</strong>和<strong>自动触发</strong>。</p><ul><li>手动触发 <ul><li><strong>save命令</strong>：阻塞当前Redis服务器，直到RDB过程完成为止，对于内存 比较大的实例会造成长时间<strong>阻塞</strong>，线上环境不建议使用</li><li><strong>bgsave命令</strong>：Redis进程执行fork操作创建子进程，RDB持久化过程由子 进程负责，完成后自动结束。阻塞只发生在fork阶段，一般时间很短</li></ul></li></ul><p>bgsave流程图如下所示</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220628222152957-1684919708773-840.png" alt="image-20220628222152957-1684919708773-840" tabindex="0" loading="lazy"><figcaption>image-20220628222152957-1684919708773-840</figcaption></figure><ul><li>自动触发 <ul><li>redis.conf中配置<code>save m n</code>，即在m秒内有n次修改时，自动触发bgsave生成rdb文件；</li><li>主从复制时，从节点要从主节点进行全量复制时也会触发bgsave操作，生成当时的快照发送到从节点；</li><li>执行debug reload命令重新加载redis时也会触发bgsave操作；</li><li>默认情况下执行shutdown命令时，如果没有开启aof持久化，那么也会触发bgsave操作；</li></ul></li></ul><h2 id="_3-那么如何保证数据一致性呢" tabindex="-1"><a class="header-anchor" href="#_3-那么如何保证数据一致性呢"><span>3 那么如何保证数据一致性呢？</span></a></h2><blockquote><p><strong>RDB由于生产环境中我们为Redis开辟的内存区域都比较大（例如6GB），那么将内存中的数据同步到硬盘的过程可能就会持续比较长的时间，而实际情况是这段时间Redis服务一般都会收到数据写操作请求。那么如何保证数据一致性呢？</strong></p></blockquote><p>RDB中的核心思路是Copy-on-Write，来保证在进行快照操作的这段时间，需要压缩写入磁盘上的数据在内存中不会发生变化。在正常的快照操作中，一方面Redis主进程会fork一个新的快照进程专门来做这个事情，这样保证了Redis服务不会停止对客户端包括写请求在内的任何响应。另一方面这段时间发生的数据变化会以副本的方式存放在另一个新的内存区域，待快照操作结束后才会同步到原来的内存区域。</p><p>举个例子：如果主线程对这些数据也都是读操作（例如图中的键值对 A），那么，主线程和 bgsave 子进程相互不影响。但是，如果主线程要修改一块数据（例如图中的键值对 C），那么，这块数据就会被复制一份，生成该数据的副本。然后，bgsave 子进程会把这个副本数据写入 RDB 文件，而在这个过程中，主线程仍然可以直接修改原来的数据。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131036506.png" alt="image-20220628222325269" tabindex="0" loading="lazy"><figcaption>image-20220628222325269</figcaption></figure><h2 id="_4-在进行rdb快照操作的这段时间-如果发生服务崩溃怎么办" tabindex="-1"><a class="header-anchor" href="#_4-在进行rdb快照操作的这段时间-如果发生服务崩溃怎么办"><span>4 在进行RDB快照操作的这段时间，如果发生服务崩溃怎么办？</span></a></h2><p>很简单，在没有将数据全部写入到磁盘前，这次快照操作都不算成功。如果出现了服务崩溃的情况，将以上一次完整的RDB快照文件作为恢复内存数据的参考。也就是说，在快照操作过程中不能影响上一次的备份数据。Redis服务会在磁盘上创建一个临时文件进行数据操作，待操作成功后才会用这个临时文件替换掉上一次的备份。</p><h2 id="_5-可以每秒做一次rdb快照吗" tabindex="-1"><a class="header-anchor" href="#_5-可以每秒做一次rdb快照吗"><span>5 可以每秒做一次RDB快照吗？</span></a></h2><p>对于快照来说，所谓“连拍”就是指连续地做快照。这样一来，快照的间隔时间变得很短，即使某一时刻发生宕机了，因为上一时刻快照刚执行，丢失的数据也不会太多。但是，这其中的快照间隔时间就很关键了。</p><p>如下图所示，我们先在 T0 时刻做了一次快照，然后又在 T0+t 时刻做了一次快照，在这期间，数据块 5 和 9 被修改了。如果在 t 这段时间内，机器宕机了，那么，只能按照 T0 时刻的快照进行恢复。此时，数据块 5 和 9 的修改值因为没有快照记录，就无法恢复了。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131036537.png" alt="image-20220628222410531" tabindex="0" loading="lazy"><figcaption>image-20220628222410531</figcaption></figure><p>所以，要想尽可能恢复数据，t 值就要尽可能小，t 越小，就越像“连拍”。那么，t 值可以小到什么程度呢，比如说是不是可以每秒做一次快照？毕竟，每次快照都是由 bgsave 子进程在后台执行，也不会阻塞主线程。</p><p>这种想法其实是错误的。虽然 bgsave 执行时不阻塞主线程，但是，<strong>如果频繁地执行全量快照，也会带来两方面的开销</strong>：</p><ul><li>一方面，频繁将全量数据写入磁盘，会给磁盘带来很大压力，多个快照竞争有限的磁盘带宽，前一个快照还没有做完，后一个又开始做了，容易造成恶性循环。</li><li>另一方面，bgsave 子进程需要通过 fork 操作从主线程创建出来。虽然，子进程在创建后不会再阻塞主线程，但是，fork 这个创建过程本身会阻塞主线程，而且主线程的内存越大，阻塞时间越长。如果频繁 fork 出 bgsave 子进程，这就会频繁<strong>阻塞主线程</strong>了。</li></ul><p>那么，有什么其他好方法吗？此时，我们可以做增量快照，就是指做了一次全量快照后，后续的快照只对修改的数据进行快照记录，这样可以避免每次全量快照的开销。这个比较好理解。</p><p>但是它需要我们使用额外的元数据信息去记录哪些数据被修改了，这会带来额外的<strong>空间开销问题</strong>。那么，还有什么方法既能利用 RDB 的快速恢复，又能以较小的开销做到尽量少丢数据呢？RDB和AOF的混合方式。</p><h2 id="_6-aof是写前日志还是写后日志" tabindex="-1"><a class="header-anchor" href="#_6-aof是写前日志还是写后日志"><span>6 AOF是写前日志还是写后日志？</span></a></h2><p>AOF日志采用写后日志，即<strong>先写内存，后写日志</strong>。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131036569.png" alt="image-20220628222701583" tabindex="0" loading="lazy"><figcaption>image-20220628222701583</figcaption></figure><p><strong>为什么采用写后日志</strong>？</p><p>Redis要求高性能，采用写日志有两方面好处：</p><ul><li><strong>避免额外的检查开销</strong>：Redis 在向 AOF 里面记录日志的时候，并不会先去对这些命令进行语法检查。所以，如果先记日志再执行命令的话，日志中就有可能记录了错误的命令，Redis 在使用日志恢复数据时，就可能会出错。</li><li>不会阻塞当前的写操作</li></ul><p>但这种方式存在潜在风险：</p><ul><li>如果命令执行完成，写日志之前宕机了，会丢失数据。</li><li>主线程写磁盘压力大，导致写盘慢，阻塞后续操作。</li></ul><h2 id="_7-如何实现aof的" tabindex="-1"><a class="header-anchor" href="#_7-如何实现aof的"><span>7 如何实现AOF的？</span></a></h2><p>AOF日志记录Redis的每个写命令，步骤分为：命令追加（append）、文件写入（write）和文件同步（sync）。</p><ul><li><strong>命令追加</strong> 当AOF持久化功能打开了，服务器在执行完一个写命令之后，会以协议格式将被执行的写命令追加到服务器的 aof_buf 缓冲区。</li><li><strong>文件写入和同步</strong> 关于何时将 aof_buf 缓冲区的内容写入AOF文件中，Redis提供了三种写回策略：</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131036599.png" alt="image-20220628222755767" tabindex="0" loading="lazy"><figcaption>image-20220628222755767</figcaption></figure><p><code>Always</code>，同步写回：每个写命令执行完，立马同步地将日志写回磁盘；</p><p><code>Everysec</code>，每秒写回：每个写命令执行完，只是先把日志写到AOF文件的内存缓冲区，每隔一秒把缓冲区中的内容写入磁盘；</p><p><code>No</code>，操作系统控制的写回：每个写命令执行完，只是先把日志写到AOF文件的内存缓冲区，由操作系统决定何时将缓冲区内容写回磁盘。</p><h2 id="_8-三种写回策略的优缺点" tabindex="-1"><a class="header-anchor" href="#_8-三种写回策略的优缺点"><span>8 <strong>三种写回策略的优缺点</strong></span></a></h2><p>上面的三种写回策略体现了一个重要原则：<strong>trade-off</strong>，取舍，指在性能和可靠性保证之间做取舍。</p><p>关于AOF的同步策略是涉及到操作系统的 write 函数和 fsync 函数的，在《Redis设计与实现》中是这样说明的</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">为了提高文件写入效率，在现代操作系统中，当用户调用write函数，将一些数据写入文件时，操作系统通常会将数据暂存到一个内存缓冲区里，当缓冲区的空间被填满或超过了指定时限后，才真正将缓冲区的数据写入到磁盘里。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">这样的操作虽然提高了效率，但也为数据写入带来了安全问题：如果计算机停机，内存缓冲区中的数据会丢失。为此，系统提供了fsync、fdatasync同步函数，可以强制操作系统立刻将缓冲区中的数据写入到硬盘里，从而确保写入数据的安全性。</span></span></code></pre></div><h2 id="_9-什么是aof重写" tabindex="-1"><a class="header-anchor" href="#_9-什么是aof重写"><span>9 什么是AOF重写？</span></a></h2><p>Redis通过创建一个新的AOF文件来替换现有的AOF，新旧两个AOF文件保存的数据相同，但新AOF文件没有了冗余命令。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131036627.png" alt="image-20220628222858541" tabindex="0" loading="lazy"><figcaption>image-20220628222858541</figcaption></figure><h2 id="_10-aof重写会阻塞吗" tabindex="-1"><a class="header-anchor" href="#_10-aof重写会阻塞吗"><span>10 AOF重写会阻塞吗？</span></a></h2><p>AOF重写过程是由后台进程bgrewriteaof来完成的。主线程fork出后台的bgrewriteaof子进程，fork会把主线程的内存拷贝一份给bgrewriteaof子进程，这里面就包含了数据库的最新数据。然后，bgrewriteaof子进程就可以在不影响主线程的情况下，逐一把拷贝的数据写成操作，记入重写日志。</p><p>所以aof在重写时，在fork进程时是会阻塞住主线程的</p><h2 id="_11-aof日志何时会重写" tabindex="-1"><a class="header-anchor" href="#_11-aof日志何时会重写"><span>11 AOF日志何时会重写？</span></a></h2><p>有两个配置项控制AOF重写的触发：</p><p><code>auto-aof-rewrite-min-size</code>:表示运行AOF重写时文件的最小大小，默认为64MB。</p><p><code>auto-aof-rewrite-percentage</code>:这个值的计算方式是，当前aof文件大小和上一次重写后aof文件大小的差值，再除以上一次重写后aof文件大小。也就是当前aof文件比上一次重写后aof文件的增量大小，和上一次重写后aof文件大小的比值。</p><h2 id="_12-aof重写日志时-有新数据写入咋整" tabindex="-1"><a class="header-anchor" href="#_12-aof重写日志时-有新数据写入咋整"><span>12 AOF重写日志时，有新数据写入咋整？</span></a></h2><p>重写过程总结为：“一个拷贝，两处日志”。在fork出子进程时的拷贝，以及在重写时，如果有新数据写入，主线程就会将命令记录到两个aof日志内存缓冲区中。如果AOF写回策略配置的是always，则直接将命令写回旧的日志文件，并且保存一份命令至AOF重写缓冲区，这些操作对新的日志文件是不存在影响的。（旧的日志文件：主线程使用的日志文件，新的日志文件：bgrewriteaof进程使用的日志文件）</p><p>而在bgrewriteaof子进程完成会日志文件的重写操作后，会提示主线程已经完成重写操作，主线程会将AOF重写缓冲中的命令追加到新的日志文件后面。这时候在高并发的情况下，AOF重写缓冲区积累可能会很大，这样就会造成阻塞，Redis后来通过Linux管道技术让aof重写期间就能同时进行回放，这样aof重写结束后只需回放少量剩余的数据即可。</p><p>最后通过修改文件名的方式，保证文件切换的原子性。</p><p>在AOF重写日志期间发生宕机的话，因为日志文件还没切换，所以恢复数据时，用的还是旧的日志文件。</p><h2 id="_13-主线程fork出子进程的是如何复制内存数据的" tabindex="-1"><a class="header-anchor" href="#_13-主线程fork出子进程的是如何复制内存数据的"><span>13 主线程fork出子进程的是如何复制内存数据的？</span></a></h2><p>fork采用操作系统提供的写时复制（copy on write）机制，就是为了避免一次性拷贝大量内存数据给子进程造成阻塞。fork子进程时，子进程时会拷贝父进程的页表，即虚实映射关系（虚拟内存和物理内存的映射索引表），而不会拷贝物理内存。这个拷贝会消耗大量cpu资源，并且拷贝完成前会阻塞主线程，阻塞时间取决于内存中的数据量，数据量越大，则内存页表越大。拷贝完成后，父子进程使用相同的内存地址空间。</p><p>但主进程是可以有数据写入的，这时候就会拷贝物理内存中的数据。如下图（进程1看做是主进程，进程2看做是子进程）：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131036660.png" alt="image-20220628223022048" tabindex="0" loading="lazy"><figcaption>image-20220628223022048</figcaption></figure><p>在主进程有数据写入时，而这个数据刚好在页c中，操作系统会创建这个页面的副本（页c的副本），即拷贝当前页的物理数据，将其映射到主进程中，而子进程还是使用原来的的页c。</p><h2 id="_14-在重写日志整个过程时-主线程有哪些地方会被阻塞" tabindex="-1"><a class="header-anchor" href="#_14-在重写日志整个过程时-主线程有哪些地方会被阻塞"><span>14 在重写日志整个过程时，主线程有哪些地方会被阻塞？</span></a></h2><ol><li>fork子进程时，需要拷贝虚拟页表，会对主线程阻塞。</li><li>主进程有bigkey写入时，操作系统会创建页面的副本，并拷贝原有的数据，会对主线程阻塞。</li><li>子进程重写日志完成后，主进程追加aof重写缓冲区时可能会对主线程阻塞。</li></ol><h2 id="_15-为什么aof重写不复用原aof日志" tabindex="-1"><a class="header-anchor" href="#_15-为什么aof重写不复用原aof日志"><span>15 为什么AOF重写不复用原AOF日志？</span></a></h2><p>两方面原因：</p><ol><li>父子进程写同一个文件会产生竞争问题，影响父进程的性能。</li><li>如果AOF重写过程中失败了，相当于污染了原本的AOF文件，无法做恢复数据使用。</li></ol><h2 id="_16-redis-过期键的删除策略有哪些" tabindex="-1"><a class="header-anchor" href="#_16-redis-过期键的删除策略有哪些"><span>16 Redis 过期键的删除策略有哪些?</span></a></h2><p>在单机版Redis中，存在两种删除策略：</p><ul><li><strong>惰性删除</strong>：服务器不会主动删除数据，只有当客户端查询某个数据时，服务器判断该数据是否过期，如果过期则删除。</li><li><strong>定期删除</strong>：服务器执行定时任务删除过期数据，但是考虑到内存和CPU的折中（删除会释放内存，但是频繁的删除操作对CPU不友好），该删除的频率和执行时间都受到了限制。</li></ul><p>在主从复制场景下，为了主从节点的数据一致性，从节点不会主动删除数据，而是由主节点控制从节点中过期数据的删除。由于主节点的惰性删除和定期删除策略，都不能保证主节点及时对过期数据执行删除操作，因此，当客户端通过Redis从节点读取数据时，很容易读取到已经过期的数据。</p><p>Redis 3.2中，从节点在读取数据时，增加了对数据是否过期的判断：如果该数据已过期，则不返回给客户端；将Redis升级到3.2可以解决数据过期问题。</p><h2 id="_17-redis-内存淘汰算法有哪些" tabindex="-1"><a class="header-anchor" href="#_17-redis-内存淘汰算法有哪些"><span>17 Redis 内存淘汰算法有哪些?</span></a></h2><p>Redis共支持八种淘汰策略，分别是noeviction、volatile-random、volatile-ttl、volatile-lru、volatile-lfu、allkeys-lru、allkeys-random 和 allkeys-lfu 策略。</p><p><strong>怎么理解呢</strong>？主要看分三类看：</p><ul><li>不淘汰 <ul><li>noeviction （v4.0后默认的）</li></ul></li><li>对设置了过期时间的数据中进行淘汰 <ul><li>随机：volatile-random</li><li>ttl：volatile-ttl</li><li>lru：volatile-lru</li><li>lfu：volatile-lfu</li></ul></li><li>全部数据进行淘汰 <ul><li>随机：allkeys-random</li><li>lru：allkeys-lru</li><li>lfu：allkeys-lfu</li></ul></li></ul><p><strong>LRU算法</strong>：LRU 算法的全称是 Least Recently Used，按照最近最少使用的原则来筛选数据。这种模式下会使用 LRU 算法筛选设置了过期时间的键值对。</p><p>Redis优化的<strong>LRU算法实现</strong>：</p><p>Redis会记录每个数据的最近一次被访问的时间戳。在Redis在决定淘汰的数据时，第一次会随机选出 N 个数据，把它们作为一个候选集合。接下来，Redis 会比较这 N 个数据的 lru 字段，把 lru 字段值最小的数据从缓存中淘汰出去。通过随机读取待删除集合，可以让Redis不用维护一个巨大的链表，也不用操作链表，进而提升性能。</p><p><strong>LFU 算法</strong>：LFU 缓存策略是在 LRU 策略基础上，为每个数据增加了一个计数器，来统计这个数据的访问次数。当使用 LFU 策略筛选淘汰数据时，首先会根据数据的访问次数进行筛选，把访问次数最低的数据淘汰出缓存。如果两个数据的访问次数相同，LFU 策略再比较这两个数据的访问时效性，把距离上一次访问时间更久的数据淘汰出缓存。 Redis的LFU算法实现:</p><p>当 LFU 策略筛选数据时，Redis 会在候选集合中，根据数据 lru 字段的后 8bit 选择访问次数最少的数据进行淘汰。当访问次数相同时，再根据 lru 字段的前 16bit 值大小，选择访问时间最久远的数据进行淘汰。</p><p>Redis 只使用了 8bit 记录数据的访问次数，而 8bit 记录的最大值是 255，这样在访问快速的情况下，如果每次被访问就将访问次数加一，很快某条数据就达到最大值255，可能很多数据都是255，那么退化成LRU算法了。所以Redis为了解决这个问题，实现了一个更优的计数规则，并可以通过配置项，来控制计数器增加的速度。</p><h2 id="_18-redis的内存用完了会发生什么" tabindex="-1"><a class="header-anchor" href="#_18-redis的内存用完了会发生什么"><span>18 Redis的内存用完了会发生什么？</span></a></h2><p>如果达到设置的上限，Redis的写命令会返回错误信息（但是读命令还可以正常返回。）或者你可以配置内存淘汰机制，当Redis达到内存上限时会冲刷掉旧的内容。</p><h2 id="_19-redis如何做内存优化" tabindex="-1"><a class="header-anchor" href="#_19-redis如何做内存优化"><span>19 Redis如何做内存优化？</span></a></h2><ol><li>缩减键值对象: 缩减键（key）和值（value）的长度，</li></ol><p>key长度：如在设计键时，在完整描述业务情况下，键值越短越好。</p><p>value长度：值对象缩减比较复杂，常见需求是把业务对象序列化成二进制数组放入Redis。首先应该在业务上精简业务对象，去掉不必要的属性避免存储无效数据。其次在序列化工具选择上，应该选择更高效的序列化工具来降低字节数组大小。以JAVA为例，内置的序列化方式无论从速度还是压缩比都不尽如人意，这时可以选择更高效的序列化工具，如: protostuff，kryo等，下图是JAVA常见序列化工具空间压缩对比。</p><ol><li>共享对象池</li></ol><p>对象共享池指Redis内部维护[0-9999]的整数对象池。创建大量的整数类型redisObject存在内存开销，每个redisObject内部结构至少占16字节，甚至超过了整数自身空间消耗。所以Redis内存维护一个[0-9999]的整数对象池，用于节约内存。 除了整数值对象，其他类型如list,hash,set,zset内部元素也可以使用整数对象池。因此开发中在满足需求的前提下，尽量使用整数对象以节省内存。</p><ol><li>字符串优化</li><li>编码优化</li><li>控制key的数量</li></ol><h2 id="_20-redis-key-的过期时间和永久有效分别怎么设置" tabindex="-1"><a class="header-anchor" href="#_20-redis-key-的过期时间和永久有效分别怎么设置"><span>20 Redis key 的过期时间和永久有效分别怎么设置？</span></a></h2><p>EXPIRE 和 PERSIST 命令</p><h2 id="_21-redis-中的管道有什么用" tabindex="-1"><a class="header-anchor" href="#_21-redis-中的管道有什么用"><span>21 Redis 中的管道有什么用？</span></a></h2><p>一次请求/响应服务器能实现处理新的请求即使旧的请求还未被响应，这样就可以将多个命令发送到服务器，而不用等待回复，最后在一个步骤中读取该答复。</p><p>这就是管道（pipelining），是一种几十年来广泛使用的技术。例如许多 POP3 协议已经实现支持这个功能，大大加快了从服务器下载新邮件的过程。</p>`,102)]))}const d=i(r,[["render",t],["__file","redis-z-interview-persistence.html.vue"]]),p=JSON.parse('{"path":"/posts/Redis/redis-z-interview-persistence.html","title":"Redis面试 - 持久化和内存","lang":"zh-CN","frontmatter":{"aliases":"Redis面试 - 持久化和内存","tags":null,"cssclass":null,"source":null,"order":1050,"category":["数据库","Redis"],"created":"2024-02-22 10:49","updated":"2024-03-13 10:37","description":"Redis面试 - 持久化和内存 1 Redis 的持久化机制是什么？各自的优缺点？一般怎么用？ RDB持久化是把当前进程数据生成快照保存到磁盘上的过程; 针对RDB不适合实时持久化的问题，Redis提供了AOF持久化方式来解决. AOF是“写后”日志，Redis先执行命令，把数据写入内存，然后才记录日志。日志里记录的是Redis收到的每一条命令，这些...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Redis/redis-z-interview-persistence.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis面试 - 持久化和内存"}],["meta",{"property":"og:description","content":"Redis面试 - 持久化和内存 1 Redis 的持久化机制是什么？各自的优缺点？一般怎么用？ RDB持久化是把当前进程数据生成快照保存到磁盘上的过程; 针对RDB不适合实时持久化的问题，Redis提供了AOF持久化方式来解决. AOF是“写后”日志，Redis先执行命令，把数据写入内存，然后才记录日志。日志里记录的是Redis收到的每一条命令，这些..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131036479.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis面试 - 持久化和内存\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131036479.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220628222152957-1684919708773-840.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131036506.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131036537.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131036569.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131036599.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131036627.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131036660.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1 Redis 的持久化机制是什么？各自的优缺点？一般怎么用？","slug":"_1-redis-的持久化机制是什么-各自的优缺点-一般怎么用","link":"#_1-redis-的持久化机制是什么-各自的优缺点-一般怎么用","children":[]},{"level":2,"title":"2 RDB 触发方式?","slug":"_2-rdb-触发方式","link":"#_2-rdb-触发方式","children":[]},{"level":2,"title":"3 那么如何保证数据一致性呢？","slug":"_3-那么如何保证数据一致性呢","link":"#_3-那么如何保证数据一致性呢","children":[]},{"level":2,"title":"4 在进行RDB快照操作的这段时间，如果发生服务崩溃怎么办？","slug":"_4-在进行rdb快照操作的这段时间-如果发生服务崩溃怎么办","link":"#_4-在进行rdb快照操作的这段时间-如果发生服务崩溃怎么办","children":[]},{"level":2,"title":"5 可以每秒做一次RDB快照吗？","slug":"_5-可以每秒做一次rdb快照吗","link":"#_5-可以每秒做一次rdb快照吗","children":[]},{"level":2,"title":"6 AOF是写前日志还是写后日志？","slug":"_6-aof是写前日志还是写后日志","link":"#_6-aof是写前日志还是写后日志","children":[]},{"level":2,"title":"7 如何实现AOF的？","slug":"_7-如何实现aof的","link":"#_7-如何实现aof的","children":[]},{"level":2,"title":"8 三种写回策略的优缺点","slug":"_8-三种写回策略的优缺点","link":"#_8-三种写回策略的优缺点","children":[]},{"level":2,"title":"9 什么是AOF重写？","slug":"_9-什么是aof重写","link":"#_9-什么是aof重写","children":[]},{"level":2,"title":"10 AOF重写会阻塞吗？","slug":"_10-aof重写会阻塞吗","link":"#_10-aof重写会阻塞吗","children":[]},{"level":2,"title":"11 AOF日志何时会重写？","slug":"_11-aof日志何时会重写","link":"#_11-aof日志何时会重写","children":[]},{"level":2,"title":"12 AOF重写日志时，有新数据写入咋整？","slug":"_12-aof重写日志时-有新数据写入咋整","link":"#_12-aof重写日志时-有新数据写入咋整","children":[]},{"level":2,"title":"13 主线程fork出子进程的是如何复制内存数据的？","slug":"_13-主线程fork出子进程的是如何复制内存数据的","link":"#_13-主线程fork出子进程的是如何复制内存数据的","children":[]},{"level":2,"title":"14 在重写日志整个过程时，主线程有哪些地方会被阻塞？","slug":"_14-在重写日志整个过程时-主线程有哪些地方会被阻塞","link":"#_14-在重写日志整个过程时-主线程有哪些地方会被阻塞","children":[]},{"level":2,"title":"15 为什么AOF重写不复用原AOF日志？","slug":"_15-为什么aof重写不复用原aof日志","link":"#_15-为什么aof重写不复用原aof日志","children":[]},{"level":2,"title":"16 Redis 过期键的删除策略有哪些?","slug":"_16-redis-过期键的删除策略有哪些","link":"#_16-redis-过期键的删除策略有哪些","children":[]},{"level":2,"title":"17 Redis 内存淘汰算法有哪些?","slug":"_17-redis-内存淘汰算法有哪些","link":"#_17-redis-内存淘汰算法有哪些","children":[]},{"level":2,"title":"18 Redis的内存用完了会发生什么？","slug":"_18-redis的内存用完了会发生什么","link":"#_18-redis的内存用完了会发生什么","children":[]},{"level":2,"title":"19 Redis如何做内存优化？","slug":"_19-redis如何做内存优化","link":"#_19-redis如何做内存优化","children":[]},{"level":2,"title":"20 Redis key 的过期时间和永久有效分别怎么设置？","slug":"_20-redis-key-的过期时间和永久有效分别怎么设置","link":"#_20-redis-key-的过期时间和永久有效分别怎么设置","children":[]},{"level":2,"title":"21 Redis 中的管道有什么用？","slug":"_21-redis-中的管道有什么用","link":"#_21-redis-中的管道有什么用","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":18,"words":5400},"filePathRelative":"posts/Redis/redis-z-interview-persistence.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1 Redis 的持久化机制是什么？各自的优缺点？一般怎么用？</h2>\\n<ol>\\n<li>RDB持久化是把当前进程数据生成快照保存到磁盘上的过程; 针对RDB不适合实时持久化的问题，Redis提供了AOF持久化方式来解决.</li>\\n<li>AOF是“写后”日志，Redis先执行命令，把数据写入内存，然后才记录日志。日志里记录的是Redis收到的每一条命令，这些命令是以文本形式保存。</li>\\n<li>Redis 4.0 中提出了一个<strong>混合使用 AOF 日志和内存快照</strong>的方法。简单来说，内存快照以一定的频率执行，在两次快照之间，使用 AOF 日志记录这期间的所有命令操作。</li>\\n</ol>","autoDesc":true}');export{d as comp,p as data};
