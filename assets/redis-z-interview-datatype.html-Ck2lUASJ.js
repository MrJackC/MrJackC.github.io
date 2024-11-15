import{_ as a,c as i,a as n,o as l}from"./app-fWubcX7c.js";const e={};function r(t,s){return l(),i("div",null,s[0]||(s[0]=[n(`<h1 id="redis面试-数据类型和数据结构" tabindex="-1"><a class="header-anchor" href="#redis面试-数据类型和数据结构"><span>Redis面试 - 数据类型和数据结构</span></a></h1><h2 id="_1-redis-有哪些数据类型" tabindex="-1"><a class="header-anchor" href="#_1-redis-有哪些数据类型"><span>1 Redis 有哪些数据类型？</span></a></h2><ul><li><strong>5种基础数据类型</strong>，分别是：String、List、Set、Zset、Hash。</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028133.png" alt="image-20220628220310533" tabindex="0" loading="lazy"><figcaption>image-20220628220310533</figcaption></figure><table><thead><tr><th>结构类型</th><th>结构存储的值</th><th>结构的读写能力</th></tr></thead><tbody><tr><td><strong>String字符串</strong></td><td>可以是字符串、整数或浮点数</td><td>对整个字符串或字符串的一部分进行操作；对整数或浮点数进行自增或自减操作；</td></tr><tr><td><strong>List列表</strong></td><td>一个链表，链表上的每个节点都包含一个字符串</td><td>对链表的两端进行push和pop操作，读取单个或多个元素；根据值查找或删除元素；</td></tr><tr><td><strong>Set集合</strong></td><td>包含字符串的无序集合</td><td>字符串的集合，包含基础的方法有看是否存在添加、获取、删除；还包含计算交集、并集、差集等</td></tr><tr><td><strong>Hash散列</strong></td><td>包含键值对的无序散列表</td><td>包含方法有添加、获取、删除单个元素</td></tr><tr><td><strong>Zset有序集合</strong></td><td>和散列一样，用于存储键值对</td><td>字符串成员与浮点数分数之间的有序映射；元素的排列顺序由分数的大小决定；包含方法有添加、获取、删除单个元素以及根据分值范围或成员来获取元素</td></tr></tbody></table><ul><li><strong>三种特殊的数据类型</strong> 分别是 HyperLogLogs（基数统计）， Bitmaps (位图) 和 geospatial （地理位置)</li></ul><h2 id="_2-谈谈redis-的对象机制-redisobject" tabindex="-1"><a class="header-anchor" href="#_2-谈谈redis-的对象机制-redisobject"><span>2 谈谈Redis 的对象机制（redisObject)？</span></a></h2><p>比如说， 集合类型就可以由字典和整数集合两种不同的数据结构实现， 但是， 当用户执行 ZADD 命令时， 他/她应该不必关心集合使用的是什么编码， 只要 Redis 能按照 ZADD 命令的指示， 将新元素添加到集合就可以了。</p><p>这说明, <strong>操作数据类型的命令除了要对键的类型进行检查之外, 还需要根据数据类型的不同编码进行多态处理</strong>.</p><p>为了解决以上问题, <strong>Redis 构建了自己的类型系统</strong>, 这个系统的主要功能包括:</p><ul><li>redisObject 对象.</li><li>基于 redisObject 对象的类型检查.</li><li>基于 redisObject 对象的显式多态函数.</li><li>对 redisObject 进行分配、共享和销毁的机制.</li></ul><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/*</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * Redis 对象</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">typedef</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> struct</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> redisObject {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 类型</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    unsigned</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> type:</span><span style="color:#D19A66;--shiki-dark:#D19A66;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 编码方式</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    unsigned</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> encoding:</span><span style="color:#D19A66;--shiki-dark:#D19A66;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // LRU - 24位, 记录最末一次访问时间（相对于lru_clock）; 或者 LFU（最少使用的数据：8位频率，16位访问时间）</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    unsigned</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> lru:LRU_BITS;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // LRU_BITS: 24</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 引用计数</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    int</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> refcount;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 指向底层数据结构实例</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    void</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> *</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">ptr;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">} robj;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下图对应上面的结构</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028178.png" alt="image-20220628220842046" tabindex="0" loading="lazy"><figcaption>image-20220628220842046</figcaption></figure><h2 id="_3-redis-数据类型有哪些底层数据结构" tabindex="-1"><a class="header-anchor" href="#_3-redis-数据类型有哪些底层数据结构"><span>3 Redis 数据类型有哪些底层数据结构？</span></a></h2><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028214.png" alt="image-20220628220915518" tabindex="0" loading="lazy"><figcaption>image-20220628220915518</figcaption></figure><ul><li>简单动态字符串 - sds</li><li>压缩列表 - ZipList</li><li>快表 - QuickList</li><li>字典/哈希表 - Dict</li><li>整数集 - IntSet</li><li>跳表 - ZSkipList</li></ul><h2 id="_4-为什么要设计sds" tabindex="-1"><a class="header-anchor" href="#_4-为什么要设计sds"><span>4 为什么要设计sds？</span></a></h2><ul><li><strong>常数复杂度获取字符串长度</strong></li></ul><p>由于 len 属性的存在，我们获取 SDS 字符串的长度只需要读取 len 属性，时间复杂度为 O(1)。而对于 C 语言，获取字符串的长度通常是经过遍历计数来实现的，时间复杂度为 O(n)。通过 <code>strlen key</code> 命令可以获取 key 的字符串长度。</p><ul><li><strong>杜绝缓冲区溢出</strong></li></ul><p>我们知道在 C 语言中使用 <code>strcat</code> 函数来进行两个字符串的拼接，一旦没有分配足够长度的内存空间，就会造成缓冲区溢出。而对于 SDS 数据类型，在进行字符修改的时候，<strong>会首先根据记录的 len 属性检查内存空间是否满足需求</strong>，如果不满足，会进行相应的空间扩展，然后在进行修改操作，所以不会出现缓冲区溢出。</p><ul><li><strong>减少修改字符串的内存重新分配次数</strong></li></ul><p>C语言由于不记录字符串的长度，所以如果要修改字符串，必须要重新分配内存（先释放再申请），因为如果没有重新分配，字符串长度增大时会造成内存缓冲区溢出，字符串长度减小时会造成内存泄露。</p><p>而对于SDS，由于<code>len</code>属性和<code>alloc</code>属性的存在，对于修改字符串SDS实现了<strong>空间预分配</strong>和<strong>惰性空间释放</strong>两种策略：</p><ol><li><strong>空间预分配</strong>：对字符串进行空间扩展的时候，扩展的内存比实际需要的多，这样可以减少连续执行字符串增长操作所需的内存重分配次数。</li><li><strong>惰性空间释放</strong>：对字符串进行缩短操作时，程序不立即使用内存重新分配来回收缩短后多余的字节，而是使用 <code>alloc</code> 属性将这些字节的数量记录下来，等待后续使用。（当然SDS也提供了相应的API，当我们有需要时，也可以手动释放这些未使用的空间。）</li></ol><ul><li><strong>二进制安全</strong></li></ul><p>因为C字符串以空字符作为字符串结束的标识，而对于一些二进制文件（如图片等），内容可能包括空字符串，因此C字符串无法正确存取；而所有 SDS 的API 都是以处理二进制的方式来处理 <code>buf</code> 里面的元素，并且 SDS 不是以空字符串来判断是否结束，而是以 len 属性表示的长度来判断字符串是否结束。</p><ul><li><strong>兼容部分 C 字符串函数</strong></li></ul><p>虽然 SDS 是二进制安全的，但是一样遵从每个字符串都是以空字符串结尾的惯例，这样可以重用 C 语言库<code>&lt;string.h&gt;</code> 中的一部分函数。</p><h2 id="_5-redis-一个字符串类型的值能存储最大容量是多少" tabindex="-1"><a class="header-anchor" href="#_5-redis-一个字符串类型的值能存储最大容量是多少"><span>5 Redis 一个字符串类型的值能存储最大容量是多少？</span></a></h2><p>512M</p><h2 id="_6-为什么会设计stream" tabindex="-1"><a class="header-anchor" href="#_6-为什么会设计stream"><span>6 为什么会设计Stream？</span></a></h2><p>用过Redis做消息队列的都了解，基于Reids的消息队列实现有很多种，例如：</p><ul><li>PUB/SUB，订阅/发布模式 <ul><li>但是发布订阅模式是无法持久化的，如果出现网络断开、Redis 宕机等，消息就会被丢弃；</li></ul></li><li>基于List LPUSH+BRPOP 或者 基于Sorted-Set 的实现 <ul><li>支持了持久化，但是不支持多播，分组消费等</li></ul></li></ul><p><strong>消费组消费图</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028254.png" alt="image-20220628221135429" tabindex="0" loading="lazy"><figcaption>image-20220628221135429</figcaption></figure><h2 id="_7-redis-stream用在什么样场景" tabindex="-1"><a class="header-anchor" href="#_7-redis-stream用在什么样场景"><span>7 Redis Stream用在什么样场景？</span></a></h2><p>可用作时通信等，大数据分析，异地数据备份等</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028290.png" alt="image-20220628221236545" tabindex="0" loading="lazy"><figcaption>image-20220628221236545</figcaption></figure><p>客户端可以平滑扩展，提高处理能力</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028320.png" alt="image-20220628221321712" tabindex="0" loading="lazy"><figcaption>image-20220628221321712</figcaption></figure><h2 id="_8-redis-stream消息id的设计是否考虑了时间回拨的问题" tabindex="-1"><a class="header-anchor" href="#_8-redis-stream消息id的设计是否考虑了时间回拨的问题"><span>8 Redis Stream消息ID的设计是否考虑了时间回拨的问题？</span></a></h2><p>XADD生成的1553439850328-0，就是Redis生成的消息ID，由两部分组成:<strong>时间戳-序号</strong>。时间戳是毫秒级单位，是生成消息的Redis服务器时间，它是个64位整型（int64）。序号是在这个毫秒时间点内的消息序号，它也是个64位整型。</p><p>可以通过multi批处理，来验证序号的递增：</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">MULTI</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">OK</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">XADD</span><span style="color:#98C379;--shiki-dark:#98C379;"> memberMessage</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> *</span><span style="color:#98C379;--shiki-dark:#98C379;"> msg</span><span style="color:#98C379;--shiki-dark:#98C379;"> one</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">QUEUED</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">XADD</span><span style="color:#98C379;--shiki-dark:#98C379;"> memberMessage</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> *</span><span style="color:#98C379;--shiki-dark:#98C379;"> msg</span><span style="color:#98C379;--shiki-dark:#98C379;"> two</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">QUEUED</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">XADD</span><span style="color:#98C379;--shiki-dark:#98C379;"> memberMessage</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> *</span><span style="color:#98C379;--shiki-dark:#98C379;"> msg</span><span style="color:#98C379;--shiki-dark:#98C379;"> three</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">QUEUED</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">XADD</span><span style="color:#98C379;--shiki-dark:#98C379;"> memberMessage</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> *</span><span style="color:#98C379;--shiki-dark:#98C379;"> msg</span><span style="color:#98C379;--shiki-dark:#98C379;"> four</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">QUEUED</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">XADD</span><span style="color:#98C379;--shiki-dark:#98C379;"> memberMessage</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> *</span><span style="color:#98C379;--shiki-dark:#98C379;"> msg</span><span style="color:#98C379;--shiki-dark:#98C379;"> five</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">QUEUED</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">EXEC</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1553441006884-0&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1553441006884-1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1553441006884-2&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1553441006884-3&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1553441006884-4&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于一个redis命令的执行很快，所以可以看到在同一时间戳内，是通过序号递增来表示消息的。</p><p>为了保证消息是有序的，因此Redis生成的ID是单调递增有序的。由于ID中包含时间戳部分，为了避免服务器时间错误而带来的问题（例如服务器时间延后了），Redis的每个Stream类型数据都维护一个latest_generated_id属性，用于记录最后一个消息的ID。<strong>若发现当前时间戳退后（小于latest_generated_id所记录的），则采用时间戳不变而序号递增的方案来作为新消息ID</strong>（这也是序号为什么使用int64的原因，保证有足够多的的序号），从而保证ID的单调递增性质。</p><p>强烈建议使用Redis的方案生成消息ID，因为这种时间戳+序号的单调递增的ID方案，几乎可以满足你全部的需求。但同时，记住ID是支持自定义的，别忘了！</p><h2 id="_9-redis-stream消费者崩溃带来的会不会消息丢失问题" tabindex="-1"><a class="header-anchor" href="#_9-redis-stream消费者崩溃带来的会不会消息丢失问题"><span>9 Redis Stream消费者崩溃带来的会不会消息丢失问题?</span></a></h2><p>为了解决组内消息读取但处理期间消费者崩溃带来的消息丢失问题，STREAM 设计了 Pending 列表，用于记录读取但并未处理完毕的消息。命令XPENDIING 用来获消费组或消费内消费者的未处理完毕的消息。演示如下：</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">XPENDING</span><span style="color:#98C379;--shiki-dark:#98C379;"> mq</span><span style="color:#98C379;--shiki-dark:#98C379;"> mqGroup</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # mpGroup的Pending情况</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) (</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 5 </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 5个已读取但未处理的消息</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1553585533795-0&quot;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 起始ID</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1553585533795-4&quot;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 结束ID</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 1) 1) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;consumerA&quot;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 消费者A有3个</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;3&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 1) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;consumerB&quot;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 消费者B有1个</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 1) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;consumerC&quot;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 消费者C有1个</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">XPENDING</span><span style="color:#98C379;--shiki-dark:#98C379;"> mq</span><span style="color:#98C379;--shiki-dark:#98C379;"> mqGroup</span><span style="color:#98C379;--shiki-dark:#98C379;"> -</span><span style="color:#98C379;--shiki-dark:#98C379;"> +</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 使用 start end count 选项可以获取详细信息</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 1) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1553585533795-0&quot;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 消息ID</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;consumerA&quot;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 消费者</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) (</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 1654355 </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 从读取到现在经历了1654355ms，IDLE</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) (</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 5 </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 消息被读取了5次，delivery counter</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 1) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1553585533795-1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;consumerA&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) (</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 1654355</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) (</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 4</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 共5个，余下3个省略 ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">XPENDING</span><span style="color:#98C379;--shiki-dark:#98C379;"> mq</span><span style="color:#98C379;--shiki-dark:#98C379;"> mqGroup</span><span style="color:#98C379;--shiki-dark:#98C379;"> -</span><span style="color:#98C379;--shiki-dark:#98C379;"> +</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10</span><span style="color:#98C379;--shiki-dark:#98C379;"> consumerA</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 在加上消费者参数，获取具体某个消费者的Pending列表</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 1) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1553585533795-0&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;consumerA&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) (</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 1641083</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) (</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 5</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 共3个，余下2个省略 ...</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个Pending的消息有4个属性：</p><ul><li>消息ID</li><li>所属消费者</li><li>IDLE，已读取时长</li><li>delivery counter，消息被读取次数</li></ul><p>上面的结果我们可以看到，我们之前读取的消息，都被记录在Pending列表中，说明全部读到的消息都没有处理，仅仅是读取了。那如何表示消费者处理完毕了消息呢？使用命令 XACK 完成告知消息处理完成，演示如下：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">XACK</span><span style="color:#98C379;--shiki-dark:#98C379;"> mq</span><span style="color:#98C379;--shiki-dark:#98C379;"> mqGroup</span><span style="color:#98C379;--shiki-dark:#98C379;"> 1553585533795-0</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 通知消息处理结束，用消息ID标识</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">XPENDING</span><span style="color:#98C379;--shiki-dark:#98C379;"> mq</span><span style="color:#98C379;--shiki-dark:#98C379;"> mqGroup</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 再次查看Pending列表</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) (</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 4 </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 已读取但未处理的消息已经变为4个</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1553585533795-1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1553585533795-4&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 1) 1) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;consumerA&quot;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 消费者A，还有2个消息处理</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;2&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 1) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;consumerB&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 1) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;consumerC&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>有了这样一个Pending机制，就意味着在某个消费者读取消息但未处理后，消息是不会丢失的。等待消费者再次上线后，可以读取该Pending列表，就可以继续处理该消息了，保证消息的有序和不丢失。</p><h2 id="_10-redis-steam-坏消息问题-死信问题" tabindex="-1"><a class="header-anchor" href="#_10-redis-steam-坏消息问题-死信问题"><span>10 Redis Steam 坏消息问题，死信问题?</span></a></h2><p>正如上面所说，如果某个消息，不能被消费者处理，也就是不能被XACK，这是要长时间处于Pending列表中，即使被反复的转移给各个消费者也是如此。此时该消息的delivery counter就会累加（上一节的例子可以看到），当累加到某个我们预设的临界值时，我们就认为是坏消息（也叫死信，DeadLetter，无法投递的消息），由于有了判定条件，我们将坏消息处理掉即可，删除即可。删除一个消息，使用XDEL语法，演示如下：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除队列中的消息</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">XDEL</span><span style="color:#98C379;--shiki-dark:#98C379;"> mq</span><span style="color:#98C379;--shiki-dark:#98C379;"> 1553585533795-1</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看队列中再无此消息</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">XRANGE</span><span style="color:#98C379;--shiki-dark:#98C379;"> mq</span><span style="color:#98C379;--shiki-dark:#98C379;"> -</span><span style="color:#98C379;--shiki-dark:#98C379;"> +</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 1) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1553585533795-0&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 1) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;msg&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 1) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1553585533795-2&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 1) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;msg&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;3&quot;</span></span></code></pre></div><p>注意本例中，并没有删除Pending中的消息因此你查看Pending，消息还会在。可以执行XACK标识其处理完毕！</p>`,61)]))}const p=a(e,[["render",r],["__file","redis-z-interview-datatype.html.vue"]]),d=JSON.parse('{"path":"/posts/Redis/redis-z-interview-datatype.html","title":"Redis面试 - 数据类型和数据结构","lang":"zh-CN","frontmatter":{"aliases":"Redis面试 - 数据类型和数据结构","tags":null,"cssclass":null,"source":null,"order":1040,"category":["数据库","Redis"],"created":"2024-02-22 10:49","updated":"2024-03-13 10:28","description":"Redis面试 - 数据类型和数据结构 1 Redis 有哪些数据类型？ 5种基础数据类型，分别是：String、List、Set、Zset、Hash。 image-20220628220310533image-20220628220310533 三种特殊的数据类型 分别是 HyperLogLogs（基数统计）， Bitmaps (位图) 和 geos...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Redis/redis-z-interview-datatype.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis面试 - 数据类型和数据结构"}],["meta",{"property":"og:description","content":"Redis面试 - 数据类型和数据结构 1 Redis 有哪些数据类型？ 5种基础数据类型，分别是：String、List、Set、Zset、Hash。 image-20220628220310533image-20220628220310533 三种特殊的数据类型 分别是 HyperLogLogs（基数统计）， Bitmaps (位图) 和 geos..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028133.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis面试 - 数据类型和数据结构\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028133.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028178.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028214.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028254.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028290.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028320.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1 Redis 有哪些数据类型？","slug":"_1-redis-有哪些数据类型","link":"#_1-redis-有哪些数据类型","children":[]},{"level":2,"title":"2 谈谈Redis 的对象机制（redisObject)？","slug":"_2-谈谈redis-的对象机制-redisobject","link":"#_2-谈谈redis-的对象机制-redisobject","children":[]},{"level":2,"title":"3 Redis 数据类型有哪些底层数据结构？","slug":"_3-redis-数据类型有哪些底层数据结构","link":"#_3-redis-数据类型有哪些底层数据结构","children":[]},{"level":2,"title":"4 为什么要设计sds？","slug":"_4-为什么要设计sds","link":"#_4-为什么要设计sds","children":[]},{"level":2,"title":"5 Redis 一个字符串类型的值能存储最大容量是多少？","slug":"_5-redis-一个字符串类型的值能存储最大容量是多少","link":"#_5-redis-一个字符串类型的值能存储最大容量是多少","children":[]},{"level":2,"title":"6 为什么会设计Stream？","slug":"_6-为什么会设计stream","link":"#_6-为什么会设计stream","children":[]},{"level":2,"title":"7 Redis Stream用在什么样场景？","slug":"_7-redis-stream用在什么样场景","link":"#_7-redis-stream用在什么样场景","children":[]},{"level":2,"title":"8 Redis Stream消息ID的设计是否考虑了时间回拨的问题？","slug":"_8-redis-stream消息id的设计是否考虑了时间回拨的问题","link":"#_8-redis-stream消息id的设计是否考虑了时间回拨的问题","children":[]},{"level":2,"title":"9 Redis Stream消费者崩溃带来的会不会消息丢失问题?","slug":"_9-redis-stream消费者崩溃带来的会不会消息丢失问题","link":"#_9-redis-stream消费者崩溃带来的会不会消息丢失问题","children":[]},{"level":2,"title":"10 Redis Steam 坏消息问题，死信问题?","slug":"_10-redis-steam-坏消息问题-死信问题","link":"#_10-redis-steam-坏消息问题-死信问题","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":9.84,"words":2953},"filePathRelative":"posts/Redis/redis-z-interview-datatype.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1 Redis 有哪些数据类型？</h2>\\n<ul>\\n<li><strong>5种基础数据类型</strong>，分别是：String、List、Set、Zset、Hash。</li>\\n</ul>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028133.png\\" alt=\\"image-20220628220310533\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220628220310533</figcaption></figure>","autoDesc":true}');export{p as comp,d as data};
