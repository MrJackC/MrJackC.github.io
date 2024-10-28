import{_ as a,c as n,a as i,o as t}from"./app-BQBjlK2G.js";const e={};function l(r,s){return t(),n("div",null,s[0]||(s[0]=[i(`<h1 id="redis入门-数据类型-5种基础数据类型详解" tabindex="-1"><a class="header-anchor" href="#redis入门-数据类型-5种基础数据类型详解"><span>Redis入门 - 数据类型：5种基础数据类型详解</span></a></h1><h2 id="_1-redis数据结构简介" tabindex="-1"><a class="header-anchor" href="#_1-redis数据结构简介"><span>1. Redis数据结构简介</span></a></h2><p>首先对redis来说，所有的key（键）都是字符串。我们在谈基础数据结构时，讨论的是存储值的数据类型，主要包括常见的5种数据类型，分别是：String、List、Set、Zset、Hash。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131013259.png" alt="image-20220622210134108" tabindex="0" loading="lazy"><figcaption>image-20220622210134108</figcaption></figure><table><thead><tr><th>结构类型</th><th>结构存储的值</th><th>结构的读写能力</th></tr></thead><tbody><tr><td><strong>String字符串</strong></td><td>可以是字符串、整数或浮点数</td><td>对整个字符串或字符串的一部分进行操作；对整数或浮点数进行自增或自减操作；</td></tr><tr><td><strong>List列表</strong></td><td>一个链表，链表上的每个节点都包含一个字符串</td><td>对链表的两端进行push和pop操作，读取单个或多个元素；根据值查找或删除元素；</td></tr><tr><td><strong>Set集合</strong></td><td>包含字符串的无序集合</td><td>字符串的集合，包含基础的方法有看是否存在添加、获取、删除；还包含计算交集、并集、差集等</td></tr><tr><td><strong>Hash散列</strong></td><td>包含键值对的无序散列表</td><td>包含方法有添加、获取、删除单个元素</td></tr><tr><td><strong>Zset有序集合</strong></td><td>和散列一样，用于存储键值对</td><td>字符串成员与浮点数分数之间的有序映射；元素的排列顺序由分数的大小决定；包含方法有添加、获取、删除单个元素以及根据分值范围或成员来获取元素</td></tr></tbody></table><h2 id="_2-基础数据结构详解" tabindex="-1"><a class="header-anchor" href="#_2-基础数据结构详解"><span>2. 基础数据结构详解</span></a></h2><h3 id="_2-1-string字符串" tabindex="-1"><a class="header-anchor" href="#_2-1-string字符串"><span>2.1 String字符串</span></a></h3><blockquote><p>String是redis中最基本的数据类型，一个key对应一个value。</p></blockquote><p><strong>String类型是二进制安全的</strong>，意思是 redis 的 string 可以包含任何数据。如数字，字符串，jpg图片或者序列化的对象。</p><h4 id="_2-1-1-图例" tabindex="-1"><a class="header-anchor" href="#_2-1-1-图例"><span>2.1.1 <strong>图例</strong></span></a></h4><p>下图是一个String类型的实例，其中键为hello，值为world</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181055857.png" alt="image-20220622210653978.png" tabindex="0" loading="lazy"><figcaption>image-20220622210653978.png</figcaption></figure><h4 id="_2-1-2-命令使用" tabindex="-1"><a class="header-anchor" href="#_2-1-2-命令使用"><span>2.1.2 <strong>命令使用</strong></span></a></h4><table><thead><tr><th>命令</th><th>简述</th><th>使用</th></tr></thead><tbody><tr><td>GET</td><td>获取存储在给定键中的值</td><td>GET name</td></tr><tr><td>SET</td><td>设置存储在给定键中的值</td><td>SET name value</td></tr><tr><td>DEL</td><td>删除存储在给定键中的值</td><td>DEL name</td></tr><tr><td>INCR</td><td>将键存储的值加1</td><td>INCR key</td></tr><tr><td>DECR</td><td>将键存储的值减1</td><td>DECR key</td></tr><tr><td>INCRBY</td><td>将键存储的值加上整数</td><td>INCRBY key amount</td></tr><tr><td>DECRBY</td><td>将键存储的值减去整数</td><td>DECRBY key amount</td></tr></tbody></table><h4 id="_2-1-3-命令执行" tabindex="-1"><a class="header-anchor" href="#_2-1-3-命令执行"><span>2.1.3 <strong>命令执行</strong></span></a></h4><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">set</span><span style="color:#98C379;--shiki-dark:#98C379;"> hello</span><span style="color:#98C379;--shiki-dark:#98C379;"> world</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">OK</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">get</span><span style="color:#98C379;--shiki-dark:#98C379;"> hello</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;world&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">del</span><span style="color:#98C379;--shiki-dark:#98C379;"> hello</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">get</span><span style="color:#98C379;--shiki-dark:#98C379;"> hello</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">nil</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">set</span><span style="color:#98C379;--shiki-dark:#98C379;"> counter</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">OK</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">get</span><span style="color:#98C379;--shiki-dark:#98C379;"> counter</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;2&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">incr</span><span style="color:#98C379;--shiki-dark:#98C379;"> counter</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">get</span><span style="color:#98C379;--shiki-dark:#98C379;"> counter</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;3&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">incrby</span><span style="color:#98C379;--shiki-dark:#98C379;"> counter</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 100</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">103</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">get</span><span style="color:#98C379;--shiki-dark:#98C379;"> counter</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;103&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">decr</span><span style="color:#98C379;--shiki-dark:#98C379;"> counter</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">102</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">get</span><span style="color:#98C379;--shiki-dark:#98C379;"> counter</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;102&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-3-实战场景" tabindex="-1"><a class="header-anchor" href="#_2-1-3-实战场景"><span>2.1.3 实战场景</span></a></h4><ul><li><strong>缓存</strong>： 经典使用场景，把常用信息，字符串，图片或者视频等信息放到redis中，redis作为缓存层，mysql做持久化层，降低mysql的读写压力。</li><li><strong>计数器</strong>：redis是单线程模型，一个命令执行完才会执行下一个，同时数据可以一步落地到其他的数据源。</li><li><strong>session</strong>：常见方案spring session + redis实现session共享</li></ul><h3 id="_2-2-list列表" tabindex="-1"><a class="header-anchor" href="#_2-2-list列表"><span>2.2 List列表</span></a></h3><blockquote><p>Redis中的List其实就是链表（Redis用双端链表实现List）。</p></blockquote><p>使用List结构，我们可以轻松地实现最新消息排队功能（比如新浪微博的TimeLine）。List的另一个应用就是消息队列，可以利用List的 PUSH 操作，将任务存放在List中，然后工作线程再用 POP 操作将任务取出进行执行。</p><h4 id="_2-2-1-图例" tabindex="-1"><a class="header-anchor" href="#_2-2-1-图例"><span>2.2.1 <strong>图例</strong></span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181055895.png" alt="image-20220622211206945.png" tabindex="0" loading="lazy"><figcaption>image-20220622211206945.png</figcaption></figure><h4 id="_2-2-2-命令使用" tabindex="-1"><a class="header-anchor" href="#_2-2-2-命令使用"><span>2.2.2 <strong>命令使用</strong></span></a></h4><table><thead><tr><th>命令</th><th>简述</th><th>使用</th></tr></thead><tbody><tr><td>RPUSH</td><td>将给定值推入到列表右端</td><td>RPUSH key value</td></tr><tr><td>LPUSH</td><td>将给定值推入到列表左端</td><td>LPUSH key value</td></tr><tr><td>RPOP</td><td>从列表的右端弹出一个值，并返回被弹出的值</td><td>RPOP key</td></tr><tr><td>LPOP</td><td>从列表的左端弹出一个值，并返回被弹出的值</td><td>LPOP key</td></tr><tr><td>LRANGE</td><td>获取列表在给定范围上的所有值</td><td>LRANGE key 0 -1</td></tr><tr><td>LINDEX</td><td>通过索引获取列表中的元素。你也可以使用负数下标，以 -1 表示列表的最后一个元素， -2 表示列表的倒数第二个元素，以此类推。</td><td>LINDEX key index</td></tr></tbody></table><h4 id="_2-2-3-使用列表的技巧" tabindex="-1"><a class="header-anchor" href="#_2-2-3-使用列表的技巧"><span>2.2.3 使用列表的技巧</span></a></h4><ul><li>lpush+lpop=Stack(栈)</li><li>lpush+rpop=Queue（队列）</li><li>lpush+ltrim=Capped Collection（有限集合）</li><li>lpush+brpop=Message Queue（消息队列）</li></ul><h4 id="_2-2-4-命令执行" tabindex="-1"><a class="header-anchor" href="#_2-2-4-命令执行"><span>2.2.4 <strong>命令执行</strong></span></a></h4><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">lpush</span><span style="color:#98C379;--shiki-dark:#98C379;"> mylist</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span><span style="color:#98C379;--shiki-dark:#98C379;"> ll</span><span style="color:#98C379;--shiki-dark:#98C379;"> ls</span><span style="color:#98C379;--shiki-dark:#98C379;"> mem</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">5</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">lrange</span><span style="color:#98C379;--shiki-dark:#98C379;"> mylist</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;mem&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;ls&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;ll&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;2&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">lindex</span><span style="color:#98C379;--shiki-dark:#98C379;"> mylist</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">lindex</span><span style="color:#98C379;--shiki-dark:#98C379;"> mylist</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # index不在 mylist 的区间范围内</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">nil</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><h4 id="_2-2-5-实战场景" tabindex="-1"><a class="header-anchor" href="#_2-2-5-实战场景"><span>2.2.5 实战场景</span></a></h4><ul><li><strong>微博TimeLine</strong>: 有人发布微博，用lpush加入时间轴，展示新的列表信息。</li><li><strong>消息队列</strong></li></ul><h3 id="_2-3-set集合" tabindex="-1"><a class="header-anchor" href="#_2-3-set集合"><span>2.3. Set集合</span></a></h3><blockquote><p>Redis 的 Set 是 String 类型的无序集合。集合成员是唯一的，这就意味着集合中不能出现重复的数据。</p></blockquote><p>Redis 中集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是 O(1)。</p><h4 id="_2-3-1-图例" tabindex="-1"><a class="header-anchor" href="#_2-3-1-图例"><span>2.3.1 <strong>图例</strong></span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181055936.png" alt="image-20220622211817956.png" tabindex="0" loading="lazy"><figcaption>image-20220622211817956.png</figcaption></figure><h4 id="_2-3-2-命令使用" tabindex="-1"><a class="header-anchor" href="#_2-3-2-命令使用"><span>2.3.2 命令使用</span></a></h4><table><thead><tr><th>命令</th><th>简述</th><th>使用</th></tr></thead><tbody><tr><td>SADD</td><td>向集合添加一个或多个成员</td><td>SADD key value</td></tr><tr><td>SCARD</td><td>获取集合的成员数</td><td>SCARD key</td></tr><tr><td>SMEMBERS</td><td>返回集合中的所有成员</td><td>SMEMBERS key member</td></tr><tr><td>SISMEMBER</td><td>判断 member 元素是否是集合 key 的成员</td><td>SISMEMBER key member</td></tr></tbody></table><p>其它一些集合操作，请参考这里<a href="https://www.runoob.com/redis/redis-sets.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/redis/redis-sets.html</a></p><h4 id="_2-3-3-命令执行" tabindex="-1"><a class="header-anchor" href="#_2-3-3-命令执行"><span>2.3.3 <strong>命令执行</strong></span></a></h4><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">sadd</span><span style="color:#98C379;--shiki-dark:#98C379;"> myset</span><span style="color:#98C379;--shiki-dark:#98C379;"> hao</span><span style="color:#98C379;--shiki-dark:#98C379;"> hao1</span><span style="color:#98C379;--shiki-dark:#98C379;"> xiaohao</span><span style="color:#98C379;--shiki-dark:#98C379;"> hao</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">smembers</span><span style="color:#98C379;--shiki-dark:#98C379;"> myset</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;xiaohao&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;hao1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;hao&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">sismember</span><span style="color:#98C379;--shiki-dark:#98C379;"> myset</span><span style="color:#98C379;--shiki-dark:#98C379;"> hao</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span></code></pre></div><h4 id="_2-3-4-实战场景" tabindex="-1"><a class="header-anchor" href="#_2-3-4-实战场景"><span>2.3.4 实战场景</span></a></h4><ul><li><strong>标签</strong>（tag）,给用户添加标签，或者用户给消息添加标签，这样有同一标签或者类似标签的可以给推荐关注的事或者关注的人。</li><li><strong>点赞，或点踩，收藏等</strong>，可以放到set中实现</li></ul><h3 id="_2-4-hash散列" tabindex="-1"><a class="header-anchor" href="#_2-4-hash散列"><span>2.4 Hash散列</span></a></h3><p>Redis hash 是一个 string 类型的 field（字段） 和 value（值） 的映射表，hash 特别适合用于存储对象。</p><h4 id="_2-4-1-图例" tabindex="-1"><a class="header-anchor" href="#_2-4-1-图例"><span>2.4.1 <strong>图例</strong></span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181055973.png" alt="image-20220622212202064.png" tabindex="0" loading="lazy"><figcaption>image-20220622212202064.png</figcaption></figure><h4 id="_2-4-2-命令使用" tabindex="-1"><a class="header-anchor" href="#_2-4-2-命令使用"><span>2.4.2 <strong>命令使用</strong></span></a></h4><table><thead><tr><th>命令</th><th>简述</th><th>使用</th></tr></thead><tbody><tr><td>HSET</td><td>添加键值对</td><td>HSET hash-key sub-key1 value1</td></tr><tr><td>HGET</td><td>获取指定散列键的值</td><td>HGET hash-key key1</td></tr><tr><td>HGETALL</td><td>获取散列中包含的所有键值对</td><td>HGETALL hash-key</td></tr><tr><td>HDEL</td><td>如果给定键存在于散列中，那么就移除这个键</td><td>HDEL hash-key sub-key1</td></tr></tbody></table><h4 id="_2-4-3-命令执行" tabindex="-1"><a class="header-anchor" href="#_2-4-3-命令执行"><span>2.4.3 <strong>命令执行</strong></span></a></h4><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">hset</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> name1</span><span style="color:#98C379;--shiki-dark:#98C379;"> hao</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">hset</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> email1</span><span style="color:#98C379;--shiki-dark:#98C379;"> hao@163.com</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">hgetall</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;name1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;hao&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;email1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;hao@163.com&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">hget</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">nil</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">hget</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> name1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;hao&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">hset</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> name2</span><span style="color:#98C379;--shiki-dark:#98C379;"> xiaohao</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">hset</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> email2</span><span style="color:#98C379;--shiki-dark:#98C379;"> xiaohao@163.com</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">hgetall</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;name1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;hao&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;email1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;hao@163.com&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;name2&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">6</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;xiaohao&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">7</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;email2&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">8</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;xiaohao@163.com&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-4-实战场景" tabindex="-1"><a class="header-anchor" href="#_2-4-4-实战场景"><span>2.4.4 实战场景</span></a></h4><ul><li><strong>缓存</strong>： 相比string更节省空间，能直观的维护缓存信息，如用户信息，视频信息等。</li></ul><h3 id="_2-5-zset有序集合" tabindex="-1"><a class="header-anchor" href="#_2-5-zset有序集合"><span>2.5 Zset有序集合</span></a></h3><blockquote><p>Redis 有序集合和集合一样也是 string 类型元素的集合,且不允许重复的成员。不同的是每个元素都会关联一个 double 类型的分数。redis 正是通过分数来为集合中的成员进行从小到大的排序。</p></blockquote><p>有序集合的成员是唯一的, 但分数(score)却可以重复。有序集合是通过两种数据结构实现：</p><ol><li><strong>压缩列表(ziplist)</strong>: ziplist是为了提高存储效率而设计的一种特殊编码的双向链表。它可以存储字符串或者整数，存储整数时是采用整数的二进制而不是字符串形式存储。它能在O(1)的时间复杂度下完成list两端的push和pop操作。但是因为每次操作都需要重新分配ziplist的内存，所以实际复杂度和ziplist的内存使用量相关</li><li><strong>跳跃表（zSkiplist)</strong>: 跳跃表的性能可以保证在查找，删除，添加等操作的时候在对数期望时间内完成，这个性能是可以和平衡树来相比较的，而且在实现方面比平衡树要优雅，这是采用跳跃表的主要原因。跳跃表的复杂度是O(log(n))。</li></ol><h4 id="_2-5-1-图例" tabindex="-1"><a class="header-anchor" href="#_2-5-1-图例"><span>2.5.1 <strong>图例</strong></span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181055012.png" alt="image-20220622212618638.png" tabindex="0" loading="lazy"><figcaption>image-20220622212618638.png</figcaption></figure><h4 id="_2-5-2-命令使用" tabindex="-1"><a class="header-anchor" href="#_2-5-2-命令使用"><span>2.5.2 <strong>命令使用</strong></span></a></h4><table><thead><tr><th>命令</th><th>简述</th><th>使用</th></tr></thead><tbody><tr><td>ZADD</td><td>将一个带有给定分值的成员添加到有序集合里面</td><td>ZADD zset-key 178 member1</td></tr><tr><td>ZRANGE</td><td>根据元素在有序集合中所处的位置，从有序集合中获取多个元素</td><td>ZRANGE zset-key 0-1 withccores</td></tr><tr><td>ZREM</td><td>如果给定元素成员存在于有序集合中，那么就移除这个元素</td><td>ZREM zset-key member1</td></tr></tbody></table><h4 id="_2-5-3-命令执行" tabindex="-1"><a class="header-anchor" href="#_2-5-3-命令执行"><span>2.5.3 <strong>命令执行</strong></span></a></h4><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">zadd</span><span style="color:#98C379;--shiki-dark:#98C379;"> myscoreset</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 100</span><span style="color:#98C379;--shiki-dark:#98C379;"> hao</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 90</span><span style="color:#98C379;--shiki-dark:#98C379;"> xiaohao</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">ZRANGE</span><span style="color:#98C379;--shiki-dark:#98C379;"> myscoreset</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;xiaohao&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;hao&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">ZSCORE</span><span style="color:#98C379;--shiki-dark:#98C379;"> myscoreset</span><span style="color:#98C379;--shiki-dark:#98C379;"> hao</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;100&quot;</span></span></code></pre></div><h4 id="_2-5-4-实战场景" tabindex="-1"><a class="header-anchor" href="#_2-5-4-实战场景"><span>2.5.4 实战场景</span></a></h4><ul><li><strong>排行榜</strong>：有序集合经典使用场景。例如小说视频等网站需要对用户上传的小说视频做排行榜，榜单可以按照用户关注数，更新时间，字数等打分，做排行。</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/db/nosql-redis/db-redis-data-types.html" target="_blank" rel="noopener noreferrer"><strong>Redis入门 - 数据类型：5种基础数据类型详解</strong></a></p>`,67)]))}const p=a(e,[["render",l],["__file","db-redis-data-types.html.vue"]]),d=JSON.parse('{"path":"/posts/Redis/db-redis-data-types.html","title":"Redis入门 - 数据类型：5种基础数据类型详解","lang":"zh-CN","frontmatter":{"aliases":"Redis入门 - 数据类型：5种基础数据类型详解","tags":null,"cssclass":null,"source":null,"order":30,"category":["数据库","Redis"],"created":"2024-02-22 10:49","updated":"2024-10-18 10:50","description":"Redis入门 - 数据类型：5种基础数据类型详解 1. Redis数据结构简介 首先对redis来说，所有的key（键）都是字符串。我们在谈基础数据结构时，讨论的是存储值的数据类型，主要包括常见的5种数据类型，分别是：String、List、Set、Zset、Hash。 image-20220622210134108image-20220622210...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Redis/db-redis-data-types.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis入门 - 数据类型：5种基础数据类型详解"}],["meta",{"property":"og:description","content":"Redis入门 - 数据类型：5种基础数据类型详解 1. Redis数据结构简介 首先对redis来说，所有的key（键）都是字符串。我们在谈基础数据结构时，讨论的是存储值的数据类型，主要包括常见的5种数据类型，分别是：String、List、Set、Zset、Hash。 image-20220622210134108image-20220622210..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131013259.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis入门 - 数据类型：5种基础数据类型详解\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131013259.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181055857.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181055895.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181055936.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181055973.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410181055012.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. Redis数据结构简介","slug":"_1-redis数据结构简介","link":"#_1-redis数据结构简介","children":[]},{"level":2,"title":"2. 基础数据结构详解","slug":"_2-基础数据结构详解","link":"#_2-基础数据结构详解","children":[{"level":3,"title":"2.1 String字符串","slug":"_2-1-string字符串","link":"#_2-1-string字符串","children":[]},{"level":3,"title":"2.2 List列表","slug":"_2-2-list列表","link":"#_2-2-list列表","children":[]},{"level":3,"title":"2.3. Set集合","slug":"_2-3-set集合","link":"#_2-3-set集合","children":[]},{"level":3,"title":"2.4 Hash散列","slug":"_2-4-hash散列","link":"#_2-4-hash散列","children":[]},{"level":3,"title":"2.5 Zset有序集合","slug":"_2-5-zset有序集合","link":"#_2-5-zset有序集合","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":7.52,"words":2257},"filePathRelative":"posts/Redis/db-redis-data-types.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. Redis数据结构简介</h2>\\n<p>首先对redis来说，所有的key（键）都是字符串。我们在谈基础数据结构时，讨论的是存储值的数据类型，主要包括常见的5种数据类型，分别是：String、List、Set、Zset、Hash。</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131013259.png\\" alt=\\"image-20220622210134108\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220622210134108</figcaption></figure>","autoDesc":true}');export{p as comp,d as data};
