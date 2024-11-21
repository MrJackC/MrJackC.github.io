import{_ as s,c as i,a as l,o as a}from"./app-CZJgH_ea.js";const t={};function r(o,e){return a(),i("div",null,e[0]||(e[0]=[l('<h1 id="redis进阶-高可用-主从复制详解" tabindex="-1"><a class="header-anchor" href="#redis进阶-高可用-主从复制详解"><span>Redis进阶 - 高可用：主从复制详解</span></a></h1><blockquote><p>我们知道要避免单点故障，即保证高可用，便需要冗余（副本）方式提供集群服务。而Redis 提供了主从库模式，以保证数据副本的一致，主从库之间采用的是读写分离的方式。本文主要阐述Redis的主从复制。</p></blockquote><h2 id="_1-主从复制概述" tabindex="-1"><a class="header-anchor" href="#_1-主从复制概述"><span>1. 主从复制概述</span></a></h2><blockquote><p>主从复制，是指将一台Redis服务器的数据，复制到其他的Redis服务器。前者称为主节点(master)，后者称为从节点(slave)；数据的复制是单向的，只能由主节点到从节点。</p></blockquote><p><strong>主从复制的作用</strong>主要包括：</p><ul><li><strong>数据冗余</strong>：主从复制实现了数据的热备份，是持久化之外的一种数据冗余方式。</li><li><strong>故障恢复</strong>：当主节点出现问题时，可以由从节点提供服务，实现快速的故障恢复；实际上是一种服务的冗余。</li><li><strong>负载均衡</strong>：在主从复制的基础上，配合读写分离，可以由主节点提供写服务，由从节点提供读服务（即写Redis数据时应用连接主节点，读Redis数据时应用连接从节点），分担服务器负载；尤其是在写少读多的场景下，通过多个从节点分担读负载，可以大大提高Redis服务器的并发量。</li><li><strong>高可用基石</strong>：除了上述作用以外，主从复制还是哨兵和集群能够实施的基础，因此说主从复制是Redis高可用的基础。</li></ul><p>主从库之间采用的是<strong>读写分离</strong>的方式。</p><ul><li>读操作：主库、从库都可以接收；</li><li>写操作：首先到主库执行，然后，主库将写操作同步给从库。</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131018898.png" alt="image-20220625212112011" tabindex="0" loading="lazy"><figcaption>image-20220625212112011</figcaption></figure><h2 id="_2-主从复制原理" tabindex="-1"><a class="header-anchor" href="#_2-主从复制原理"><span>2. 主从复制原理</span></a></h2><blockquote><p>注意：在2.8版本之前只有全量复制，而2.8版本后有全量和增量复制：</p></blockquote><ul><li><code>全量（同步）复制</code>：比如第一次同步时</li><li><code>增量（同步）复制</code>：只会把主从库网络断连期间主库收到的命令，同步给从库</li></ul><h3 id="_2-1-全量复制" tabindex="-1"><a class="header-anchor" href="#_2-1-全量复制"><span>2.1 全量复制</span></a></h3><blockquote><p>当我们启动多个 Redis 实例的时候，它们相互之间就可以通过 replicaof（Redis 5.0 之前使用 slaveof）命令形成主库和从库的关系，之后会按照三个阶段完成数据的第一次同步。</p></blockquote><ul><li><strong>确立主从关系</strong></li></ul><p>例如，现在有实例 1（ip：172.16.19.3）和实例 2（ip：172.16.19.5），我们在实例 2 上执行以下这个命令后，实例 2 就变成了实例 1 的从库，并从实例 1 上复制数据：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">replicaof</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 172.16.19.3</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 6379</span></span></code></pre></div><ul><li><strong>全量复制的三个阶段</strong></li></ul><p>你可以先看一下下面这张图，有个整体感知，接下来我再具体介绍。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131018946.png" alt="image-20220625212409651" tabindex="0" loading="lazy"><figcaption>image-20220625212409651</figcaption></figure><ul><li><p><strong>第一阶段是主从库间建立连接、协商同步的过程</strong>，主要是为全量复制做准备。在这一步，从库和主库建立起连接，并告诉主库即将进行同步，主库确认回复后，主从库间就可以开始同步了。</p><blockquote><p>具体来说，从库给主库发送 psync 命令，表示要进行数据同步，主库根据这个命令的参数来启动复制。psync 命令包含了主库的 runID 和复制进度 offset 两个参数。runID，是每个 Redis 实例启动时都会自动生成的一个随机 ID，用来唯一标记这个实例。当从库和主库第一次复制时，因为不知道主库的 runID，所以将 runID 设为“？”。offset，此时设为 -1，表示第一次复制。主库收到 psync 命令后，会用 FULLRESYNC 响应命令带上两个参数：主库 runID 和主库目前的复制进度 offset，返回给从库。从库收到响应后，会记录下这两个参数。这里有个地方需要注意，FULLRESYNC 响应表示第一次复制采用的全量复制，也就是说，主库会把当前所有的数据都复制给从库。</p></blockquote></li><li><p><strong>第二阶段，主库将所有数据同步给从库</strong>。从库收到数据后，在本地完成数据加载。这个过程依赖于内存快照生成的 RDB 文件。</p><blockquote><p>具体来说，主库执行 bgsave 命令，生成 RDB 文件，接着将文件发给从库。从库接收到 RDB 文件后，会先清空当前数据库，然后加载 RDB 文件。这是因为从库在通过 replicaof 命令开始和主库同步前，可能保存了其他数据。为了避免之前数据的影响，从库需要先把当前数据库清空。在主库将数据同步给从库的过程中，主库不会被阻塞，仍然可以正常接收请求。否则，Redis 的服务就被中断了。但是，这些请求中的写操作并没有记录到刚刚生成的 RDB 文件中。为了保证主从库的数据一致性，主库会在内存中用专门的 replication buffer，记录 RDB 文件生成后收到的所有写操作。</p></blockquote></li><li><p><strong>第三个阶段，主库会把第二阶段执行过程中新收到的写命令，再发送给从库</strong>。</p><blockquote><p>具体的操作是，当主库完成 RDB 文件发送后，就会把此时 replication buffer 中的修改操作发给从库，从库再重新执行这些操作。这样一来，主从库就实现同步了。</p></blockquote></li></ul><h3 id="_2-2-增量复制" tabindex="-1"><a class="header-anchor" href="#_2-2-增量复制"><span>2.2 增量复制</span></a></h3><blockquote><p>在 Redis 2.8 版本引入了增量复制。</p></blockquote><ul><li><strong>为什么会设计增量复制</strong>？</li></ul><p>如果主从库在命令传播时出现了网络闪断，那么，从库就会和主库重新进行一次全量复制，开销非常大。从 Redis 2.8 开始，网络断了之后，主从库会采用增量复制的方式继续同步。</p><ul><li><strong>增量复制的流程</strong></li></ul><p>你可以先看一下下面这张图，有个整体感知，接下来我再具体介绍。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131018005.png" alt="image-20220625212923450" tabindex="0" loading="lazy"><figcaption>image-20220625212923450</figcaption></figure><p>先看两个概念： <code>repl_backlog_buffer</code> 和 <code>replication buffer</code></p><ul><li><code>repl_backlog_buffer</code>：它是为了从库断开之后，如何找到主从差异数据而设计的环形缓冲区，从而避免全量复制带来的性能开销。如果从库断开时间太久，repl_backlog_buffer环形缓冲区被主库的写命令覆盖了，那么从库连上主库后只能乖乖地进行一次全量复制，所以<strong>repl_backlog_buffer配置尽量大一些，可以降低主从断开后全量复制的概率</strong>。而在repl_backlog_buffer中找主从差异的数据后，如何发给从库呢？这就用到了replication buffer。</li><li><code>replication buffer</code>：Redis和客户端通信也好，和从库通信也好，Redis都需要给分配一个 内存buffer进行数据交互，客户端是一个client，从库也是一个client，我们每个client连上Redis后，Redis都会分配一个client buffer，所有数据交互都是通过这个buffer进行的：Redis先把数据写到这个buffer中，然后再把buffer中的数据发到client socket中再通过网络发送出去，这样就完成了数据交互。所以主从在增量同步时，从库作为一个client，也会分配一个buffer，只不过这个buffer专门用来传播用户的写命令到从库，保证主从数据一致，我们通常把它叫做replication buffer。</li></ul><h4 id="_2-2-1-repl-backlog-size环形缓冲区写满之后" tabindex="-1"><a class="header-anchor" href="#_2-2-1-repl-backlog-size环形缓冲区写满之后"><span>2.2.1 repl_backlog_size环形缓冲区写满之后</span></a></h4><p><strong>如果在网络断开期间，repl_backlog_size环形缓冲区写满之后，从库是会丢失掉那部分被覆盖掉的数据，还是直接进行全量复制呢</strong>？</p><p>对于这个问题来说，有两个关键点：</p><ol><li>一个从库如果和主库断连时间过长，造成它在主库repl_backlog_buffer的slave_repl_offset位置上的数据已经被覆盖掉了，此时从库和主库间将进行全量复制。</li><li>每个从库会记录自己的slave_repl_offset，每个从库的复制进度也不一定相同。在和主库重连进行恢复时，从库会通过psync命令把自己记录的slave_repl_offset发给主库，主库会根据从库各自的复制进度，来决定这个从库可以进行增量复制，还是全量复制。</li></ol><h3 id="_2-3-命令传播" tabindex="-1"><a class="header-anchor" href="#_2-3-命令传播"><span>2.3 命令传播</span></a></h3><p>经过上面同步操作，此时主从的数据库状态其实已经一致了，但这种一致的状态的并不是一成不变的。 在完成同步之后，也许主服务器马上就接受到了新的写命令，执行完该命令后，主从的数据库状态又不一致。</p><p>数据同步阶段完成后，主从节点进入命令传播阶段；在这个阶段主节点将自己执行的写命令发送给从节点，从节点接收命令并执行，从而保证主从节点数据的一致性。</p><p>另外命令转播我们需要关注两个点： 延迟与不一致 和 心跳机制 我们下面介绍一下</p><p><strong>延迟与不一致</strong> 需要注意的是，命令传播是<strong>异步</strong>的过程，即主节点发送写命令后并不会等待从节点的回复；因此实际上主从节点之间很难保持实时的一致性，延迟在所难免。数据不一致的程度，与主从节点之间的网络状况、主节点写命令的执行频率、以及主节点中的repl-disable-tcp-nodelay配置等有关。</p><p>repl-disable-tcp-nodelay 配置如下：</p><ul><li>假如设置成yes，则redis会合并小的TCP包从而节省带宽，但会增加同步延迟（40ms），造成master与slave数据不一致</li><li><strong>假如设置成no，则redis master会立即发送同步数据，没有延迟（多数情况，强调一致性）</strong></li></ul><p>概括来说就是：前者关注性能，后者关注一致性</p><p>具体发送频率与Linux内核的配置有关，默认配置为40ms。当设置为no时，TCP会立马将主节点的数据发送给从节点，带宽增加但延迟变小。</p><p>一般来说，只有当应用对Redis数据不一致的容忍度较高，且主从节点之间网络状况不好时，才会设置为yes；多数情况使用默认值no</p><h2 id="_3-更深入理解" tabindex="-1"><a class="header-anchor" href="#_3-更深入理解"><span>3. 更深入理解</span></a></h2><blockquote><p>我们通过几个问题来深入理解主从复制。</p></blockquote><h3 id="_3-1-当主服务器不进行持久化时复制的安全性" tabindex="-1"><a class="header-anchor" href="#_3-1-当主服务器不进行持久化时复制的安全性"><span>3.1 当主服务器不进行持久化时复制的安全性</span></a></h3><blockquote><p>在进行主从复制设置时，强烈建议在主服务器上开启持久化，当不能这么做时，比如考虑到延迟的问题，应该将实例配置为避免自动重启。</p></blockquote><p><strong>为什么不持久化的主服务器自动重启非常危险呢</strong>？为了更好的理解这个问题，看下面这个失败的例子，其中主服务器和从服务器中数据库都被删除了。</p><ul><li>我们设置节点A为主服务器，关闭持久化，节点B和C从节点A复制数据。</li><li>这时出现了一个崩溃，但Redis具有自动重启系统，重启了进程，因为关闭了持久化，节点重启后只有一个空的数据集。</li><li>节点B和C从节点A进行复制，现在节点A是空的，所以节点B和C上的复制数据也会被删除。</li><li>当在高可用系统中使用Redis Sentinel，关闭了主服务器的持久化，并且允许自动重启，这种情况是很危险的。比如主服务器可能在很短的时间就完成了重启，以至于Sentinel都无法检测到这次失败，那么上面说的这种失败的情况就发生了。</li></ul><p>如果数据比较重要，并且在使用主从复制时关闭了主服务器持久化功能的场景中，都应该禁止实例自动重启。</p><h3 id="_3-2-为什么主从全量复制使用rdb而不使用aof" tabindex="-1"><a class="header-anchor" href="#_3-2-为什么主从全量复制使用rdb而不使用aof"><span>3.2 为什么主从全量复制使用RDB而不使用AOF？</span></a></h3><ol><li><strong>RDB文件内容是经过压缩的二进制数据（不同数据类型数据做了针对性优化），文件很小</strong>。而AOF文件记录的是每一次写操作的命令，写操作越多文件会变得很大，其中还包括很多对同一个key的多次冗余操作。在主从全量数据同步时，传输RDB文件可以尽量降低对主库机器网络带宽的消耗，从库在加载RDB文件时，一是文件小，读取整个文件的速度会很快，二是因为RDB文件存储的都是二进制数据，从库直接按照RDB协议解析还原数据即可，速度会非常快，而AOF需要依次重放每个写命令，这个过程会经历冗长的处理逻辑，恢复速度相比RDB会慢得多，所以使用RDB进行主从全量复制的成本最低。</li><li>假设要使用AOF做全量复制，意味着必须打开AOF功能，打开AOF就要选择文件刷盘的策略，选择不当会严重影响Redis性能。而RDB只有在需要定时备份和主从全量复制数据时才会触发生成一次快照。而在很多丢失数据不敏感的业务场景，其实是不需要开启AOF的。</li></ol><h3 id="_3-3-为什么还有无磁盘复制模式" tabindex="-1"><a class="header-anchor" href="#_3-3-为什么还有无磁盘复制模式"><span>3.3 为什么还有无磁盘复制模式？</span></a></h3><p>Redis 默认是磁盘复制，但是<strong>如果使用比较低速的磁盘，这种操作会给主服务器带来较大的压力</strong>。Redis从2.8.18版本开始尝试支持无磁盘的复制。使用这种设置时，子进程直接将RDB通过网络发送给从服务器，不使用磁盘作为中间存储。</p><p><strong>无磁盘复制模式</strong>：master创建一个新进程直接dump RDB到slave的socket，不经过主进程，不经过硬盘。适用于disk较慢，并且网络较快的时候。</p><p>使用<code>repl-diskless-sync</code>配置参数来启动无磁盘复制。</p><p>使用<code>repl-diskless-sync-delay</code> 参数来配置传输开始的延迟时间；master等待一个<code>repl-diskless-sync-delay</code>的秒数，如果没slave来的话，就直接传，后来的得排队等了; 否则就可以一起传。</p><h3 id="_3-4-为什么还会有从库的从库的设计" tabindex="-1"><a class="header-anchor" href="#_3-4-为什么还会有从库的从库的设计"><span>3.4 为什么还会有从库的从库的设计？</span></a></h3><p>通过分析主从库间第一次数据同步的过程，你可以看到，一次全量复制中，对于主库来说，需要完成两个耗时的操作：<strong>生成 RDB 文件和传输 RDB 文件</strong>。</p><p>如果从库数量很多，而且都要和主库进行全量复制的话，就会导致主库忙于 fork 子进程生成 RDB 文件，进行数据全量复制。fork 这个操作会阻塞主线程处理正常请求，从而导致主库响应应用程序的请求速度变慢。此外，传输 RDB 文件也会占用主库的网络带宽，同样会给主库的资源使用带来压力。那么，有没有好的解决方法可以分担主库压力呢？</p><p>其实是有的，这就是“主 - 从 - 从”模式。</p><p>在刚才介绍的主从库模式中，所有的从库都是和主库连接，所有的全量复制也都是和主库进行的。现在，我们可以通过“主 - 从 - 从”模式<strong>将主库生成 RDB 和传输 RDB 的压力，以级联的方式分散到从库上</strong>。</p><p>简单来说，我们在部署主从集群的时候，可以手动选择一个从库（比如选择内存资源配置较高的从库），用于级联其他的从库。然后，我们可以再选择一些从库（例如三分之一的从库），在这些从库上执行如下命令，让它们和刚才所选的从库，建立起主从关系。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">replicaof</span><span style="color:#98C379;--shiki-dark:#98C379;"> 所选从库的IP</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 6379</span></span></code></pre></div><p>这样一来，这些从库就会知道，在进行同步时，不用再和主库进行交互了，只要和级联的从库进行写操作同步就行了，这就可以减轻主库上的压力，如下图所示：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131018047.png" alt="image-20220625214600577" tabindex="0" loading="lazy"><figcaption>image-20220625214600577</figcaption></figure><p>级联的“主-从-从”模式好了，到这里，我们了解了主从库间通过全量复制实现数据同步的过程，以及通过“主 - 从 - 从”模式分担主库压力的方式。那么，一旦主从库完成了全量复制，它们之间就会一直维护一个网络连接，主库会通过这个连接将后续陆续收到的命令操作再同步给从库，这个过程也称为基于长连接的命令传播，可以避免频繁建立连接的开销。</p><h2 id="_4-读写分离及其中的问题" tabindex="-1"><a class="header-anchor" href="#_4-读写分离及其中的问题"><span>4. 读写分离及其中的问题</span></a></h2><p>在主从复制基础上实现的读写分离，可以实现Redis的读负载均衡：由主节点提供写服务，由一个或多个从节点提供读服务（多个从节点既可以提高数据冗余程度，也可以最大化读负载能力）；在读负载较大的应用场景下，可以大大提高Redis服务器的并发量。下面介绍在使用Redis读写分离时，需要注意的问题。</p><h3 id="_4-1-延迟与不一致问题" tabindex="-1"><a class="header-anchor" href="#_4-1-延迟与不一致问题"><span>4.1 <strong>延迟与不一致问题</strong></span></a></h3><p>前面已经讲到，<strong>由于主从复制的命令传播是异步的，延迟与数据的不一致不可避免。</strong></p><p>如果应用对数据不一致的接受程度程度较低，可能的优化措施包括：</p><ul><li>优化主从节点之间的网络环境（如在同机房部署）；</li><li>监控主从节点延迟（通过offset）判断，如果从节点延迟过大，通知应用不再通过该从节点读取数据；</li><li>使用集群同时扩展写负载和读负载等。</li></ul><p>在<strong>命令传播阶段以外的其他情况下，从节点的数据不一致可能更加严重</strong>，例如连接在数据同步阶段，或从节点失去与主节点的连接时等。<strong>从节点的slave-serve-stale-data参数便与此有关</strong>：它控制这种情况下从节点的表现；如果为yes（默认值），则从节点仍能够响应客户端的命令，<strong>如果为no，则从节点只能响应info、slaveof等少数命令</strong>。该参数的设置与应用对数据一致性的要求有关；如果对数据一致性要求很高，则应设置为no。</p><blockquote><p>对于分布式的场景，不一致是极有可能发生的。CAP 原理，在P 分区的情况下。C 一致性和 A高可用 只能二选一。如果数据强一致性，那么必然就没有高可用。然后高可用必然没有了一致性。我们只能保证做到最终一致性。减少延迟</p></blockquote><h3 id="_4-2-数据过期问题-过期键的删除策略" tabindex="-1"><a class="header-anchor" href="#_4-2-数据过期问题-过期键的删除策略"><span>4.2 数据过期问题（过期键的删除策略）</span></a></h3><p>在单机版Redis中，存在两种删除策略：</p><ul><li><code>惰性删除</code>：服务器不会主动删除数据，只有当客户端查询某个数据时，服务器判断该数据是否过期，如果过期则删除。</li><li><code>定期删除</code>：服务器执行定时任务删除过期数据，但是考虑到内存和CPU的折中（删除会释放内存，但是频繁的删除操作对CPU不友好），该删除的频率和执行时间都受到了限制。</li></ul><p>在主从复制场景下，为了主从节点的数据一致性，从节点不会主动删除数据，而是由主节点控制从节点中过期数据的删除。由于主节点的惰性删除和定期删除策略，都不能保证主节点及时对过期数据执行删除操作，因此，当客户端通过Redis从节点读取数据时，<strong>很容易读取到已经过期的数据</strong>。</p><blockquote><p>Redis 3.2中，从节点在读取数据时，增加了对数据是否过期的判断：如果该数据已过期，则不返回给客户端；将Redis升级到3.2可以解决数据过期问题。</p></blockquote><h3 id="_4-3-故障切换问题" tabindex="-1"><a class="header-anchor" href="#_4-3-故障切换问题"><span>4.3 <strong>故障切换问题</strong></span></a></h3><p>在没有使用哨兵的读写分离场景下，应用针对读和写分别连接不同的Redis节点；当主节点或从节点出现问题而发生更改时，需要及时修改应用程序读写Redis数据的连接；连接的切换可以手动进行，或者自己写监控程序进行切换，但前者响应慢、容易出错，后者实现复杂，成本都不算低。</p><h2 id="_5-总结" tabindex="-1"><a class="header-anchor" href="#_5-总结"><span>5. <strong>总结</strong></span></a></h2><p>在使用读写分离之前，可以考虑其他方法增加Redis的读负载能力：如尽量优化主节点（减少慢查询、减少持久化等其他情况带来的阻塞等）提高负载能力；使用Redis集群同时提高读负载能力和写负载能力等。如果使用读写分离，可以使用哨兵，使主从节点的故障切换尽可能自动化，并减少对应用程序的侵入。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/db/nosql-redis/db-redis-x-copy.html" target="_blank" rel="noopener noreferrer"><strong>Redis进阶 - 高可用：主从复制详解</strong></a></p>',87)]))}const p=s(t,[["render",r],["__file","db-redis-x-copy.html.vue"]]),d=JSON.parse('{"path":"/posts/Redis/db-redis-x-copy.html","title":"Redis进阶 - 高可用：主从复制详解","lang":"zh-CN","frontmatter":{"aliases":"Redis进阶 - 高可用：主从复制详解","tags":null,"cssclass":null,"source":null,"order":210,"category":["数据库","Redis"],"created":"2024-02-22 10:49","updated":"2024-03-13 10:18","description":"Redis进阶 - 高可用：主从复制详解 我们知道要避免单点故障，即保证高可用，便需要冗余（副本）方式提供集群服务。而Redis 提供了主从库模式，以保证数据副本的一致，主从库之间采用的是读写分离的方式。本文主要阐述Redis的主从复制。 1. 主从复制概述 主从复制，是指将一台Redis服务器的数据，复制到其他的Redis服务器。前者称为主节点(ma...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Redis/db-redis-x-copy.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis进阶 - 高可用：主从复制详解"}],["meta",{"property":"og:description","content":"Redis进阶 - 高可用：主从复制详解 我们知道要避免单点故障，即保证高可用，便需要冗余（副本）方式提供集群服务。而Redis 提供了主从库模式，以保证数据副本的一致，主从库之间采用的是读写分离的方式。本文主要阐述Redis的主从复制。 1. 主从复制概述 主从复制，是指将一台Redis服务器的数据，复制到其他的Redis服务器。前者称为主节点(ma..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131018898.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis进阶 - 高可用：主从复制详解\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131018898.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131018946.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131018005.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131018047.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 主从复制概述","slug":"_1-主从复制概述","link":"#_1-主从复制概述","children":[]},{"level":2,"title":"2. 主从复制原理","slug":"_2-主从复制原理","link":"#_2-主从复制原理","children":[{"level":3,"title":"2.1 全量复制","slug":"_2-1-全量复制","link":"#_2-1-全量复制","children":[]},{"level":3,"title":"2.2 增量复制","slug":"_2-2-增量复制","link":"#_2-2-增量复制","children":[]},{"level":3,"title":"2.3 命令传播","slug":"_2-3-命令传播","link":"#_2-3-命令传播","children":[]}]},{"level":2,"title":"3. 更深入理解","slug":"_3-更深入理解","link":"#_3-更深入理解","children":[{"level":3,"title":"3.1 当主服务器不进行持久化时复制的安全性","slug":"_3-1-当主服务器不进行持久化时复制的安全性","link":"#_3-1-当主服务器不进行持久化时复制的安全性","children":[]},{"level":3,"title":"3.2 为什么主从全量复制使用RDB而不使用AOF？","slug":"_3-2-为什么主从全量复制使用rdb而不使用aof","link":"#_3-2-为什么主从全量复制使用rdb而不使用aof","children":[]},{"level":3,"title":"3.3 为什么还有无磁盘复制模式？","slug":"_3-3-为什么还有无磁盘复制模式","link":"#_3-3-为什么还有无磁盘复制模式","children":[]},{"level":3,"title":"3.4 为什么还会有从库的从库的设计？","slug":"_3-4-为什么还会有从库的从库的设计","link":"#_3-4-为什么还会有从库的从库的设计","children":[]}]},{"level":2,"title":"4. 读写分离及其中的问题","slug":"_4-读写分离及其中的问题","link":"#_4-读写分离及其中的问题","children":[{"level":3,"title":"4.1 延迟与不一致问题","slug":"_4-1-延迟与不一致问题","link":"#_4-1-延迟与不一致问题","children":[]},{"level":3,"title":"4.2 数据过期问题（过期键的删除策略）","slug":"_4-2-数据过期问题-过期键的删除策略","link":"#_4-2-数据过期问题-过期键的删除策略","children":[]},{"level":3,"title":"4.3 故障切换问题","slug":"_4-3-故障切换问题","link":"#_4-3-故障切换问题","children":[]}]},{"level":2,"title":"5. 总结","slug":"_5-总结","link":"#_5-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":17.88,"words":5363},"filePathRelative":"posts/Redis/db-redis-x-copy.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>我们知道要避免单点故障，即保证高可用，便需要冗余（副本）方式提供集群服务。而Redis 提供了主从库模式，以保证数据副本的一致，主从库之间采用的是读写分离的方式。本文主要阐述Redis的主从复制。</p>\\n</blockquote>\\n<h2>1. 主从复制概述</h2>\\n<blockquote>\\n<p>主从复制，是指将一台Redis服务器的数据，复制到其他的Redis服务器。前者称为主节点(master)，后者称为从节点(slave)；数据的复制是单向的，只能由主节点到从节点。</p>\\n</blockquote>\\n<p><strong>主从复制的作用</strong>主要包括：</p>","autoDesc":true}');export{p as comp,d as data};
