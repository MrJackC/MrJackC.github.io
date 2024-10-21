import{_ as i,c as e,a,o as n}from"./app-BhoNqsD-.js";const l={};function o(r,s){return n(),e("div",null,s[0]||(s[0]=[a(`<h1 id="redis进阶-持久化-rdb和aof机制详解" tabindex="-1"><a class="header-anchor" href="#redis进阶-持久化-rdb和aof机制详解"><span>Redis进阶 - 持久化：RDB和AOF机制详解</span></a></h1><blockquote><p>为了防止数据丢失以及服务重启时能够恢复数据，Redis支持数据的持久化，主要分为两种方式，分别是RDB和AOF; 当然实际场景下还会使用这两种的混合模式。</p></blockquote><h2 id="_1-redis持久化简介" tabindex="-1"><a class="header-anchor" href="#_1-redis持久化简介"><span>1. Redis持久化简介</span></a></h2><blockquote><p>从两个点，我们来了解下Redis持久化</p></blockquote><ul><li><strong>为什么需要持久化</strong>？</li></ul><p>Redis是个基于内存的数据库。那服务一旦宕机，内存中的数据将全部丢失。通常的解决方案是从后端数据库恢复这些数据，但后端数据库有性能瓶颈，如果是大数据量的恢复，</p><ol><li>会对数据库带来巨大的压力</li><li>数据库的性能不如Redis。导致程序响应慢。所以对Redis来说，实现数据的持久化，避免从后端数据库中恢复数据，是至关重要的。</li></ol><ul><li><strong>Redis持久化有哪些方式呢</strong>？<strong>为什么我们需要重点学RDB和AOF</strong>？</li></ul><p>从严格意义上说，Redis服务提供四种持久化存储方案：<code>RDB</code>、<code>AOF</code>、<code>虚拟内存（VM）</code>和　<code>DISKSTORE</code>。</p><blockquote><p>虚拟内存（VM）方式，从Redis Version 2.4开始就被官方明确表示不再建议使用，Version 3.2版本中更找不到关于虚拟内存（VM）的任何配置范例，Redis的主要作者Salvatore Sanfilippo还专门写了一篇论文，来反思Redis对虚拟内存（VM）存储技术的支持问题。</p><p>至于DISKSTORE方式，是从Redis Version 2.8版本开始提出的一个存储设想，到目前为止Redis官方也没有在任何stable版本中明确建议使用这用方式。在Version 3.2版本中同样找不到对于这种存储方式的明确支持。从网络上能够收集到的各种资料来看，DISKSTORE方式和RDB方式还有着一些千丝万缕的联系，不过各位读者也知道，除了官方文档以外网络资料很多就是大抄。</p></blockquote><p>最关键的是目前官方文档上能够看到的Redis对持久化存储的支持明确的就只有两种方案：<a href="https://redis.io/topics/persistence" target="_blank" rel="noopener noreferrer">RDB和AOF</a>。所以本文也只会具体介绍这两种持久化存储方案的工作特定和配置要点。</p><h2 id="_2-rdb-持久化" tabindex="-1"><a class="header-anchor" href="#_2-rdb-持久化"><span>2. RDB 持久化</span></a></h2><blockquote><p>RDB 就是 Redis DataBase 的缩写，中文名为快照/内存快照，RDB持久化是把当前进程数据生成快照保存到磁盘上的过程，由于是某一时刻的快照，那么快照中的值要早于或者等于内存中的值。</p></blockquote><h3 id="_2-1-触发方式" tabindex="-1"><a class="header-anchor" href="#_2-1-触发方式"><span>2.1 触发方式</span></a></h3><blockquote><p>触发rdb持久化的方式有2种，分别是<strong>手动触发</strong>和<strong>自动触发</strong>。</p></blockquote><h4 id="_2-1-1-手动触发" tabindex="-1"><a class="header-anchor" href="#_2-1-1-手动触发"><span>2.1.1 手动触发</span></a></h4><blockquote><p>手动触发分别对应save和bgsave命令</p></blockquote><ul><li><strong>save命令</strong>：阻塞当前Redis服务器，直到RDB过程完成为止，对于内存 比较大的实例会造成长时间<strong>阻塞</strong>，线上环境不建议使用</li><li><strong>bgsave命令</strong>：Redis进程执行fork操作创建子进程，RDB持久化过程由子 进程负责，完成后自动结束。阻塞只发生在fork阶段，一般时间很短</li></ul><p>bgsave流程图如下所示</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220623214217071.png" alt="image-20220623214217071" tabindex="0" loading="lazy"><figcaption>image-20220623214217071</figcaption></figure><p>具体流程如下：</p><ul><li>redis客户端执行bgsave命令或者自动触发bgsave命令；</li><li>主进程判断当前是否已经存在正在执行的子进程，如果存在，那么主进程直接返回；</li><li>如果不存在正在执行的子进程，那么就fork一个新的子进程进行持久化数据，fork过程是阻塞的，fork操作完成后主进程即可执行其他操作；</li><li>子进程先将数据写入到临时的rdb文件中，待快照数据写入完成后再原子替换旧的rdb文件；</li><li>同时发送信号给主进程，通知主进程rdb持久化完成，主进程更新相关的统计信息（info Persitence下的rdb_*相关选项）。</li></ul><h4 id="_2-2-2-自动触发" tabindex="-1"><a class="header-anchor" href="#_2-2-2-自动触发"><span>2.2.2 自动触发</span></a></h4><blockquote><p>在以下4种情况时会自动触发</p></blockquote><ul><li>redis.conf中配置<code>save m n</code>，即在m秒内有n次修改时，自动触发bgsave生成rdb文件；</li><li>主从复制时，从节点要从主节点进行全量复制时也会触发bgsave操作，生成当时的快照发送到从节点；</li><li>执行debug reload命令重新加载redis时也会触发bgsave操作；</li><li>默认情况下执行shutdown命令时，如果没有开启aof持久化，那么也会触发bgsave操作；</li></ul><h3 id="_2-2-redis-conf中配置rdb" tabindex="-1"><a class="header-anchor" href="#_2-2-redis-conf中配置rdb"><span>2.2 redis.conf中配置RDB</span></a></h3><p><strong>快照周期</strong>：内存快照虽然可以通过技术人员手动执行SAVE或BGSAVE命令来进行，但生产环境下多数情况都会设置其周期性执行条件。</p><ul><li><strong>Redis中默认的周期新设置</strong></li></ul><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 周期性执行条件的设置格式为</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">save</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">second</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">s&gt; &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">change</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">s&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 默认的设置为：</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">save</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 900</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">save</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 300</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">save</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 60</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 以下设置方式为关闭RDB快照功能</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">save</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;&quot;</span></span></code></pre></div><p>以上三项默认信息设置代表的意义是：</p><ul><li><p>如果900秒内有1条Key信息发生变化，则进行快照；</p></li><li><p>如果300秒内有10条Key信息发生变化，则进行快照；</p></li><li><p>如果60秒内有10000条Key信息发生变化，则进行快照。读者可以按照这个规则，根据自己的实际请求压力进行设置调整。</p></li><li><p><strong>其它相关配置</strong></p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 文件名称</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">dbfilename</span><span style="color:#98C379;--shiki-dark:#98C379;"> dump.rdb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 文件保存路径</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">dir</span><span style="color:#98C379;--shiki-dark:#98C379;"> /home/work/app/redis/data/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 如果持久化出错，主进程是否停止写入</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">stop-writes-on-bgsave-error</span><span style="color:#98C379;--shiki-dark:#98C379;"> yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 是否压缩</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rdbcompression</span><span style="color:#98C379;--shiki-dark:#98C379;"> yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 导入时是否检查</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rdbchecksum</span><span style="color:#98C379;--shiki-dark:#98C379;"> yes</span></span></code></pre></div></li><li><p><code>dbfilename</code>：RDB文件在磁盘上的名称。</p></li><li><p><code>dir</code>：RDB文件的存储路径。默认设置为“./”，也就是Redis服务的主目录。</p></li><li><p><code>stop-writes-on-bgsave-error</code>：上文提到的在快照进行过程中，主进程照样可以接受客户端的任何写操作的特性，是指在快照操作正常的情况下。如果快照操作出现异常（例如操作系统用户权限不够、磁盘空间写满等等）时，Redis就会禁止写操作。这个特性的主要目的是使运维人员在第一时间就发现Redis的运行错误，并进行解决。一些特定的场景下，您可能需要对这个特性进行配置，这时就可以调整这个参数项。该参数项默认情况下值为yes，如果要关闭这个特性，指定即使出现快照错误Redis一样允许写操作，则可以将该值更改为no。</p></li><li><p><code>rdbcompression</code>：该属性将在字符串类型的数据被快照到磁盘文件时，启用LZF压缩算法。Redis官方的建议是请保持该选项设置为yes，因为“it’s almost always a win”。</p></li><li><p><code>rdbchecksum</code>：从RDB快照功能的version 5 版本开始，一个64位的CRC冗余校验编码会被放置在RDB文件的末尾，以便对整个RDB文件的完整性进行验证。这个功能大概会多损失10%左右的性能，但获得了更高的数据可靠性。所以如果您的Redis服务需要追求极致的性能，就可以将这个选项设置为no。</p></li></ul><h3 id="_2-3-rdb-更深入理解" tabindex="-1"><a class="header-anchor" href="#_2-3-rdb-更深入理解"><span>2.3 RDB 更深入理解</span></a></h3><blockquote><p>我们通过几个实战问题来深入理解RDB</p></blockquote><ul><li><strong>由于生产环境中我们为Redis开辟的内存区域都比较大（例如6GB），那么将内存中的数据同步到硬盘的过程可能就会持续比较长的时间，而实际情况是这段时间Redis服务一般都会收到数据写操作请求。那么如何保证数据一致性呢</strong>？</li></ul><p>RDB中的核心思路是Copy-on-Write，来保证在进行快照操作的这段时间，需要压缩写入磁盘上的数据在内存中不会发生变化。在正常的快照操作中，一方面Redis主进程会fork一个新的快照进程专门来做这个事情，这样保证了Redis服务不会停止对客户端包括写请求在内的任何响应。另一方面这段时间发生的数据变化会以副本的方式存放在另一个新的内存区域，待快照操作结束后才会同步到原来的内存区域。</p><p>举个例子：如果主线程对这些数据也都是读操作（例如图中的键值对 A），那么，主线程和 bgsave 子进程相互不影响。但是，如果主线程要修改一块数据（例如图中的键值对 C），那么，这块数据就会被复制一份，生成该数据的副本。然后，bgsave 子进程会把这个副本数据写入 RDB 文件，而在这个过程中，主线程仍然可以直接修改原来的数据。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131019414.png" alt="image-20220623215145148" tabindex="0" loading="lazy"><figcaption>image-20220623215145148</figcaption></figure><ul><li><strong>在进行快照操作的这段时间，如果发生服务崩溃怎么办</strong>？</li></ul><p>很简单，在没有将数据全部写入到磁盘前，这次快照操作都不算成功。如果出现了服务崩溃的情况，将以上一次完整的RDB快照文件作为恢复内存数据的参考。也就是说，在快照操作过程中不能影响上一次的备份数据。Redis服务会在磁盘上创建一个临时文件进行数据操作，待操作成功后才会用这个临时文件替换掉上一次的备份。</p><ul><li><strong>可以每秒做一次快照吗</strong>？</li></ul><p>对于快照来说，所谓“连拍”就是指连续地做快照。这样一来，快照的间隔时间变得很短，即使某一时刻发生宕机了，因为上一时刻快照刚执行，丢失的数据也不会太多。但是，这其中的快照间隔时间就很关键了。</p><p>如下图所示，我们先在 T0 时刻做了一次快照，然后又在 T0+t 时刻做了一次快照，在这期间，数据块 5 和 9 被修改了。如果在 t 这段时间内，机器宕机了，那么，只能按照 T0 时刻的快照进行恢复。此时，数据块 5 和 9 的修改值因为没有快照记录，就无法恢复了。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131019477.png" alt="image-20220623215417131" tabindex="0" loading="lazy"><figcaption>image-20220623215417131</figcaption></figure><p>所以，要想尽可能恢复数据，t 值就要尽可能小，t 越小，就越像“连拍”。那么，t 值可以小到什么程度呢，比如说是不是可以每秒做一次快照？毕竟，每次快照都是由 bgsave 子进程在后台执行，也不会阻塞主线程。</p><p>这种想法其实是错误的。虽然 bgsave 执行时不阻塞主线程，但是，<strong>如果频繁地执行全量快照，也会带来两方面的开销</strong>：</p><ul><li>一方面，频繁将全量数据写入磁盘，会给磁盘带来很大压力，多个快照竞争有限的磁盘带宽，前一个快照还没有做完，后一个又开始做了，容易造成恶性循环。</li><li>另一方面，bgsave 子进程需要通过 fork 操作从主线程创建出来。虽然，子进程在创建后不会再阻塞主线程，但是，fork 这个创建过程本身会阻塞主线程，而且主线程的内存越大，阻塞时间越长。如果频繁 fork 出 bgsave 子进程，这就会频繁<strong>阻塞主线程</strong>了。</li></ul><p>那么，有什么其他好方法吗？此时，我们可以做增量快照，就是指做了一次全量快照后，后续的快照只对修改的数据进行快照记录，这样可以避免每次全量快照的开销。这个比较好理解。</p><p>但是它需要我们使用额外的元数据信息去记录哪些数据被修改了，这会带来额外的<strong>空间开销问题</strong>。那么，还有什么方法既能利用 RDB 的快速恢复，又能以较小的开销做到尽量少丢数据呢？且看后文中4.0版本中引入的RDB和AOF的混合方式。</p><h3 id="_2-4-rdb优缺点" tabindex="-1"><a class="header-anchor" href="#_2-4-rdb优缺点"><span>2.4 RDB优缺点</span></a></h3><ul><li><strong>优点</strong><ul><li>RDB文件是某个时间节点的快照，默认使用LZF算法进行压缩，压缩后的文件体积远远小于内存大小，适用于备份、全量复制等场景；</li><li>Redis加载RDB文件恢复数据要远远快于AOF方式；</li></ul></li><li><strong>缺点</strong><ul><li>RDB方式实时性不够，无法做到秒级的持久化；</li><li>每次调用bgsave都需要fork子进程，fork子进程属于重量级操作，频繁执行成本较高；</li><li>RDB文件是二进制的，没有可读性，AOF文件在了解其结构的情况下可以手动修改或者补全；</li><li>版本兼容RDB文件问题；</li></ul></li></ul><p>针对RDB不适合实时持久化的问题，Redis提供了AOF持久化方式来解决</p><h2 id="_3-aof-持久化" tabindex="-1"><a class="header-anchor" href="#_3-aof-持久化"><span>3. AOF 持久化</span></a></h2><blockquote><p>Redis是“写后”日志，Redis先执行命令，把数据写入内存，然后才记录日志。日志里记录的是Redis收到的每一条命令，这些命令是以文本形式保存。PS: 大多数的数据库采用的是写前日志（WAL），例如MySQL，通过写前日志和两阶段提交，实现数据和逻辑的一致性。</p></blockquote><p>而AOF日志采用写后日志，即<strong>先写内存，后写日志</strong>。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220623220343531.png" alt="image-20220623220343531" tabindex="0" loading="lazy"><figcaption>image-20220623220343531</figcaption></figure><p><strong>为什么采用写后日志</strong>？</p><p>Redis要求高性能，采用写日志有两方面好处：</p><ul><li><strong>避免额外的检查开销</strong>：Redis 在向 AOF 里面记录日志的时候，并不会先去对这些命令进行语法检查。所以，如果先记日志再执行命令的话，日志中就有可能记录了错误的命令，Redis 在使用日志恢复数据时，就可能会出错。</li><li>不会阻塞当前的写操作</li></ul><p>但这种方式存在潜在风险：</p><ul><li>如果命令执行完成，写日志之前宕机了，会丢失数据。</li><li>主线程写磁盘压力大，导致写盘慢，阻塞后续操作。</li></ul><h3 id="_3-1-如何实现aof" tabindex="-1"><a class="header-anchor" href="#_3-1-如何实现aof"><span>3.1 如何实现AOF</span></a></h3><p>AOF日志记录Redis的每个写命令，步骤分为：命令追加（append）、文件写入（write）和文件同步（sync）。</p><ul><li><strong>命令追加</strong> 当AOF持久化功能打开了，服务器在执行完一个写命令之后，会以协议格式将被执行的写命令追加到服务器的 aof_buf 缓冲区。</li><li><strong>文件写入和同步</strong> 关于何时将 aof_buf 缓冲区的内容写入AOF文件中，Redis提供了三种写回策略：</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131019511.png" alt="image-20220623220709538" tabindex="0" loading="lazy"><figcaption>image-20220623220709538</figcaption></figure><p><code>Always</code>，同步写回：每个写命令执行完，立马同步地将日志写回磁盘；</p><p><code>Everysec</code>，每秒写回：每个写命令执行完，只是先把日志写到AOF文件的内存缓冲区，每隔一秒把缓冲区中的内容写入磁盘；</p><p><code>No</code>，操作系统控制的写回：每个写命令执行完，只是先把日志写到AOF文件的内存缓冲区，由操作系统决定何时将缓冲区内容写回磁盘。</p><ul><li><strong>三种写回策略的优缺点</strong></li></ul><p>上面的三种写回策略体现了一个重要原则：<strong>trade-off</strong>，取舍，指在性能和可靠性保证之间做取舍。</p><p>关于AOF的同步策略是涉及到操作系统的 write 函数和 fsync 函数的，在《Redis设计与实现》中是这样说明的：</p><blockquote><p>为了提高文件写入效率，在现代操作系统中，当用户调用write函数，将一些数据写入文件时，操作系统通常会将数据暂存到一个内存缓冲区里，当缓冲区的空间被填满或超过了指定时限后，才真正将缓冲区的数据写入到磁盘里。</p><p>这样的操作虽然提高了效率，但也为数据写入带来了安全问题：如果计算机停机，内存缓冲区中的数据会丢失。为此，系统提供了fsync、fdatasync同步函数，可以强制操作系统立刻将缓冲区中的数据写入到硬盘里，从而确保写入数据的安全性。</p></blockquote><h3 id="_3-2-redis-conf中配置aof" tabindex="-1"><a class="header-anchor" href="#_3-2-redis-conf中配置aof"><span>3.2 redis.conf中配置AOF</span></a></h3><p>默认情况下，Redis是没有开启AOF的，可以通过配置redis.conf文件来开启AOF持久化，关于AOF的配置如下：</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># appendonly参数开启AOF持久化</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">appendonly</span><span style="color:#98C379;--shiki-dark:#98C379;"> no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># AOF持久化的文件名，默认是appendonly.aof</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">appendfilename</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;appendonly.aof&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># AOF文件的保存位置和RDB文件的位置相同，都是通过dir参数设置的</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">dir</span><span style="color:#98C379;--shiki-dark:#98C379;"> ./</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 同步策略</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># appendfsync always</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">appendfsync</span><span style="color:#98C379;--shiki-dark:#98C379;"> everysec</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># appendfsync no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># aof重写期间是否同步</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">no-appendfsync-on-rewrite</span><span style="color:#98C379;--shiki-dark:#98C379;"> no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 重写触发配置</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">auto-aof-rewrite-percentage</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 100</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">auto-aof-rewrite-min-size</span><span style="color:#98C379;--shiki-dark:#98C379;"> 64mb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 加载aof出错如何处理</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">aof-load-truncated</span><span style="color:#98C379;--shiki-dark:#98C379;"> yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 文件重写策略</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">aof-rewrite-incremental-fsync</span><span style="color:#98C379;--shiki-dark:#98C379;"> yes</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是Redis中关于AOF的主要配置信息：</p><ul><li><p><code>appendonly</code>：默认情况下AOF功能是关闭的，将该选项改为yes以便打开Redis的AOF功能。</p></li><li><p><code>appendfilename</code>：这个参数项很好理解了，就是AOF文件的名字。</p></li><li><p><code>appendfsync</code>：这个参数项是AOF功能最重要的设置项之一，主要用于设置“真正执行”操作命令向AOF文件中同步的策略。</p><p>什么叫“真正执行”呢？还记得Linux操作系统对磁盘设备的操作方式吗？ 为了保证操作系统中I/O队列的操作效率，应用程序提交的I/O操作请求一般是被放置在linux Page Cache中的，然后再由Linux操作系统中的策略自行决定正在写到磁盘上的时机。而Redis中有一个fsync()函数，可以将Page Cache中待写的数据真正写入到物理设备上，而缺点是频繁调用这个fsync()函数干预操作系统的既定策略，可能导致I/O卡顿的现象频繁 。</p><p>与上节对应，appendfsync参数项可以设置三个值，分别是：always、everysec、no，默认的值为everysec。</p></li><li><p><code>no-appendfsync-on-rewrite</code>：always和everysec的设置会使真正的I/O操作高频度的出现，甚至会出现长时间的卡顿情况，这个问题出现在操作系统层面上，所有靠工作在操作系统之上的Redis是没法解决的。为了尽量缓解这个情况，Redis提供了这个设置项，保证在完成fsync函数调用时，不会将这段时间内发生的命令操作放入操作系统的Page Cache（这段时间Redis还在接受客户端的各种写操作命令）。</p></li><li><p><code>auto-aof-rewrite-percentage</code>：上文说到在生产环境下，技术人员不可能随时随地使用“BGREWRITEAOF”命令去重写AOF文件。所以更多时候我们需要依靠Redis中对AOF文件的自动重写策略。Redis中对触发自动重写AOF文件的操作提供了两个设置：auto-aof-rewrite-percentage表示如果当前AOF文件的大小超过了上次重写后AOF文件的百分之多少后，就再次开始重写AOF文件。例如该参数值的默认设置值为100，意思就是如果AOF文件的大小超过上次AOF文件重写后的1倍，就启动重写操作。</p></li><li><p><code>auto-aof-rewrite-min-size</code>：参考auto-aof-rewrite-percentage选项的介绍，auto-aof-rewrite-min-size设置项表示启动AOF文件重写操作的AOF文件最小大小。如果AOF文件大小低于这个值，则不会触发重写操作。注意，auto-aof-rewrite-percentage和auto-aof-rewrite-min-size只是用来控制Redis中自动对AOF文件进行重写的情况，如果是技术人员手动调用“BGREWRITEAOF”命令，则不受这两个限制条件左右。</p></li></ul><h3 id="_3-3-深入理解aof重写" tabindex="-1"><a class="header-anchor" href="#_3-3-深入理解aof重写"><span>3.3 深入理解AOF重写</span></a></h3><blockquote><p>AOF会记录每个写命令到AOF文件，随着时间越来越长，AOF文件会变得越来越大。如果不加以控制，会对Redis服务器，甚至对操作系统造成影响，而且AOF文件越大，数据恢复也越慢。为了解决AOF文件体积膨胀的问题，Redis提供AOF文件重写机制来对AOF文件进行“瘦身”。</p></blockquote><ul><li><strong>图例解释AOF重写</strong></li></ul><p>Redis通过创建一个新的AOF文件来替换现有的AOF，新旧两个AOF文件保存的数据相同，但新AOF文件没有了冗余命令。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131019554.png" alt="image-20220623221419590" tabindex="0" loading="lazy"><figcaption>image-20220623221419590</figcaption></figure><ul><li><strong>AOF重写会阻塞吗</strong>？</li></ul><p>AOF重写过程是由后台进程bgrewriteaof来完成的。主线程fork出后台的bgrewriteaof子进程，fork会把主线程的内存拷贝一份给bgrewriteaof子进程，这里面就包含了数据库的最新数据。然后，bgrewriteaof子进程就可以在不影响主线程的情况下，逐一把拷贝的数据写成操作，记入重写日志。</p><p>所以aof在重写时，在fork进程时是会阻塞住主线程的。</p><ul><li><strong>AOF日志何时会重写</strong>？</li></ul><p>有两个配置项控制AOF重写的触发：</p><p><code>auto-aof-rewrite-min-size</code>:表示运行AOF重写时文件的最小大小，默认为64MB。</p><p><code>auto-aof-rewrite-percentage</code>:这个值的计算方式是，当前aof文件大小和上一次重写后aof文件大小的差值，再除以上一次重写后aof文件大小。也就是当前aof文件比上一次重写后aof文件的增量大小，和上一次重写后aof文件大小的比值。</p><ul><li><strong>重写日志时，有新数据写入咋整</strong>？</li></ul><p>重写过程总结为：“一个拷贝，两处日志”。在fork出子进程时的拷贝，以及在重写时，如果有新数据写入，主线程就会将命令记录到两个aof日志内存缓冲区中。如果AOF写回策略配置的是always，则直接将命令写回旧的日志文件，并且保存一份命令至AOF重写缓冲区，这些操作对新的日志文件是不存在影响的。（旧的日志文件：主线程使用的日志文件，新的日志文件：bgrewriteaof进程使用的日志文件）</p><p>而在bgrewriteaof子进程完成会日志文件的重写操作后，会提示主线程已经完成重写操作，主线程会将AOF重写缓冲中的命令追加到新的日志文件后面。这时候在高并发的情况下，AOF重写缓冲区积累可能会很大，这样就会造成阻塞，Redis后来通过Linux管道技术让aof重写期间就能同时进行回放，这样aof重写结束后只需回放少量剩余的数据即可。</p><p>最后通过修改文件名的方式，保证文件切换的原子性。</p><p>在AOF重写日志期间发生宕机的话，因为日志文件还没切换，所以恢复数据时，用的还是旧的日志文件。</p><p><strong>总结操作</strong>：</p><ul><li>主线程fork出子进程重写aof日志</li><li>子进程重写日志完成后，主线程追加aof日志缓冲</li><li>替换日志文件</li></ul><blockquote><p>温馨提示</p><p>这里的进程和线程的概念有点混乱。因为后台的bgreweiteaof进程就只有一个线程在操作，而主线程是Redis的操作进程，也是单独一个线程。这里想表达的是Redis主进程在fork出一个后台进程之后，后台进程的操作和主进程是没有任何关联的，也不会阻塞主线程。</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131019591.png" alt="image-20220623221830908" tabindex="0" loading="lazy"><figcaption>image-20220623221830908</figcaption></figure><ul><li><strong>主线程fork出子进程的是如何复制内存数据的</strong>？</li></ul><p>fork采用操作系统提供的写时复制（copy on write）机制，就是为了避免一次性拷贝大量内存数据给子进程造成阻塞。fork子进程时，子进程时会拷贝父进程的页表，即虚实映射关系（虚拟内存和物理内存的映射索引表），而不会拷贝物理内存。这个拷贝会消耗大量cpu资源，并且拷贝完成前会阻塞主线程，阻塞时间取决于内存中的数据量，数据量越大，则内存页表越大。拷贝完成后，父子进程使用相同的内存地址空间。</p><p>但主进程是可以有数据写入的，这时候就会拷贝物理内存中的数据。如下图（进程1看做是主进程，进程2看做是子进程）：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131019618.png" alt="image-20220623222011394" tabindex="0" loading="lazy"><figcaption>image-20220623222011394</figcaption></figure><p>在主进程有数据写入时，而这个数据刚好在页c中，操作系统会创建这个页面的副本（页c的副本），即拷贝当前页的物理数据，将其映射到主进程中，而子进程还是使用原来的的页c。</p><ul><li><strong>在重写日志整个过程时，主线程有哪些地方会被阻塞</strong>？</li></ul><ol><li>fork子进程时，需要拷贝虚拟页表，会对主线程阻塞。</li><li>主进程有bigkey写入时，操作系统会创建页面的副本，并拷贝原有的数据，会对主线程阻塞。</li><li>子进程重写日志完成后，主进程追加aof重写缓冲区时可能会对主线程阻塞。</li></ol><ul><li><strong>为什么AOF重写不复用原AOF日志</strong>？</li></ul><p>两方面原因：</p><ol><li>父子进程写同一个文件会产生竞争问题，影响父进程的性能。</li><li>如果AOF重写过程中失败了，相当于污染了原本的AOF文件，无法做恢复数据使用。</li></ol><h2 id="_4-rdb和aof混合方式-4-0版本" tabindex="-1"><a class="header-anchor" href="#_4-rdb和aof混合方式-4-0版本"><span>4. RDB和AOF混合方式（4.0版本)</span></a></h2><blockquote><p>Redis 4.0 中提出了一个<strong>混合使用 AOF 日志和内存快照</strong>的方法。简单来说，内存快照以一定的频率执行，在两次快照之间，使用 AOF 日志记录这期间的所有命令操作。</p></blockquote><p>这样一来，快照不用很频繁地执行，这就避免了频繁 fork 对主线程的影响。而且，AOF 日志也只用记录两次快照间的操作，也就是说，不需要记录所有操作了，因此，就不会出现文件过大的情况了，也可以避免重写开销。</p><p>如下图所示，T1 和 T2 时刻的修改，用 AOF 日志记录，等到第二次做全量快照时，就可以清空 AOF 日志，因为此时的修改都已经记录到快照中了，恢复时就不再用日志了。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131019652.png" alt="image-20220623222328421" tabindex="0" loading="lazy"><figcaption>image-20220623222328421</figcaption></figure><p>这个方法既能享受到 RDB 文件快速恢复的好处，又能享受到 AOF 只记录操作命令的简单优势, 实际环境中用的很多。</p><h2 id="_5-从持久化中恢复数据" tabindex="-1"><a class="header-anchor" href="#_5-从持久化中恢复数据"><span>5. 从持久化中恢复数据</span></a></h2><blockquote><p>数据的备份、持久化做完了，我们如何从这些持久化文件中恢复数据呢？如果一台服务器上有既有RDB文件，又有AOF文件，该加载谁呢？</p></blockquote><p>其实想要从这些文件中恢复数据，只需要重新启动Redis即可。我们还是通过图来了解这个流程：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220623222507856.png" alt="image-20220623222507856" tabindex="0" loading="lazy"><figcaption>image-20220623222507856</figcaption></figure><ul><li>redis重启时判断是否开启aof，如果开启了aof，那么就优先加载aof文件；</li><li>如果aof存在，那么就去加载aof文件，加载成功的话redis重启成功，如果aof文件加载失败，那么会打印日志表示启动失败，此时可以去修复aof文件后重新启动；</li><li>若aof文件不存在，那么redis就会转而去加载rdb文件，如果rdb文件不存在，redis直接启动成功；</li><li>如果rdb文件存在就会去加载rdb文件恢复数据，如加载失败则打印日志提示启动失败，如加载成功，那么redis重启成功，且使用rdb文件恢复数据；</li></ul><p>那么为什么会优先加载AOF呢？因为AOF保存的数据更完整，通过上面的分析我们知道AOF基本上最多损失1s的数据。</p><h2 id="_6-性能与实践" tabindex="-1"><a class="header-anchor" href="#_6-性能与实践"><span>6. 性能与实践</span></a></h2><p>通过上面的分析，我们都知道RDB的快照、AOF的重写都需要fork，这是一个重量级操作，会对Redis造成阻塞。因此为了不影响Redis主进程响应，我们需要尽可能降低阻塞。</p><ul><li>降低fork的频率，比如可以手动来触发RDB生成快照、与AOF重写；</li><li>控制Redis最大使用内存，防止fork耗时过长；</li><li>使用更牛逼的硬件；</li><li>合理配置Linux的内存分配策略，避免因为物理内存不足导致fork失败。</li></ul><p>在线上我们到底该怎么做？我提供一些自己的实践经验。</p><ul><li>如果Redis中的数据并不是特别敏感或者可以通过其它方式重写生成数据，可以关闭持久化，如果丢失数据可以通过其它途径补回；</li><li>自己制定策略定期检查Redis的情况，然后可以手动触发备份、重写数据；</li><li>单机如果部署多个实例，要防止多个机器同时运行持久化、重写操作，防止出现内存、CPU、IO资源竞争，让持久化变为串行；</li><li>可以加入主从机器，利用一台从机器进行备份处理，其它机器正常响应客户端的命令；</li><li>RDB持久化与AOF持久化可以同时存在，配合使用。</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/db/nosql-redis/db-redis-x-rdb-aof.html" target="_blank" rel="noopener noreferrer"><strong>Redis进阶 - 持久化：RDB和AOF机制详解</strong></a></p>`,126)]))}const p=i(l,[["render",o],["__file","db-redis-x-rdb-aof.html.vue"]]),d=JSON.parse('{"path":"/posts/Redis/db-redis-x-rdb-aof.html","title":"Redis进阶 - 持久化：RDB和AOF机制详解","lang":"zh-CN","frontmatter":{"aliases":"Redis进阶 - 持久化：RDB和AOF机制详解","tags":null,"cssclass":null,"source":null,"order":140,"category":["数据库","Redis"],"created":"2024-02-22 10:49","updated":"2024-03-13 10:20","description":"Redis进阶 - 持久化：RDB和AOF机制详解 为了防止数据丢失以及服务重启时能够恢复数据，Redis支持数据的持久化，主要分为两种方式，分别是RDB和AOF; 当然实际场景下还会使用这两种的混合模式。 1. Redis持久化简介 从两个点，我们来了解下Redis持久化 为什么需要持久化？ Redis是个基于内存的数据库。那服务一旦宕机，内存中的数...","head":[["meta",{"property":"og:url","content":"https://mrjason.me/posts/Redis/db-redis-x-rdb-aof.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis进阶 - 持久化：RDB和AOF机制详解"}],["meta",{"property":"og:description","content":"Redis进阶 - 持久化：RDB和AOF机制详解 为了防止数据丢失以及服务重启时能够恢复数据，Redis支持数据的持久化，主要分为两种方式，分别是RDB和AOF; 当然实际场景下还会使用这两种的混合模式。 1. Redis持久化简介 从两个点，我们来了解下Redis持久化 为什么需要持久化？ Redis是个基于内存的数据库。那服务一旦宕机，内存中的数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220623214217071.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis进阶 - 持久化：RDB和AOF机制详解\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220623214217071.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131019414.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131019477.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220623220343531.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131019511.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131019554.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131019591.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131019618.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131019652.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220623222507856.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjason.me\\"}]}"]]},"headers":[{"level":2,"title":"1. Redis持久化简介","slug":"_1-redis持久化简介","link":"#_1-redis持久化简介","children":[]},{"level":2,"title":"2. RDB 持久化","slug":"_2-rdb-持久化","link":"#_2-rdb-持久化","children":[{"level":3,"title":"2.1 触发方式","slug":"_2-1-触发方式","link":"#_2-1-触发方式","children":[]},{"level":3,"title":"2.2 redis.conf中配置RDB","slug":"_2-2-redis-conf中配置rdb","link":"#_2-2-redis-conf中配置rdb","children":[]},{"level":3,"title":"2.3 RDB 更深入理解","slug":"_2-3-rdb-更深入理解","link":"#_2-3-rdb-更深入理解","children":[]},{"level":3,"title":"2.4 RDB优缺点","slug":"_2-4-rdb优缺点","link":"#_2-4-rdb优缺点","children":[]}]},{"level":2,"title":"3. AOF 持久化","slug":"_3-aof-持久化","link":"#_3-aof-持久化","children":[{"level":3,"title":"3.1 如何实现AOF","slug":"_3-1-如何实现aof","link":"#_3-1-如何实现aof","children":[]},{"level":3,"title":"3.2 redis.conf中配置AOF","slug":"_3-2-redis-conf中配置aof","link":"#_3-2-redis-conf中配置aof","children":[]},{"level":3,"title":"3.3 深入理解AOF重写","slug":"_3-3-深入理解aof重写","link":"#_3-3-深入理解aof重写","children":[]}]},{"level":2,"title":"4. RDB和AOF混合方式（4.0版本)","slug":"_4-rdb和aof混合方式-4-0版本","link":"#_4-rdb和aof混合方式-4-0版本","children":[]},{"level":2,"title":"5. 从持久化中恢复数据","slug":"_5-从持久化中恢复数据","link":"#_5-从持久化中恢复数据","children":[]},{"level":2,"title":"6. 性能与实践","slug":"_6-性能与实践","link":"#_6-性能与实践","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":24.8,"words":7439},"filePathRelative":"posts/Redis/db-redis-x-rdb-aof.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>为了防止数据丢失以及服务重启时能够恢复数据，Redis支持数据的持久化，主要分为两种方式，分别是RDB和AOF; 当然实际场景下还会使用这两种的混合模式。</p>\\n</blockquote>\\n<h2>1. Redis持久化简介</h2>\\n<blockquote>\\n<p>从两个点，我们来了解下Redis持久化</p>\\n</blockquote>\\n<ul>\\n<li><strong>为什么需要持久化</strong>？</li>\\n</ul>\\n<p>Redis是个基于内存的数据库。那服务一旦宕机，内存中的数据将全部丢失。通常的解决方案是从后端数据库恢复这些数据，但后端数据库有性能瓶颈，如果是大数据量的恢复，</p>","autoDesc":true}');export{p as comp,d as data};
