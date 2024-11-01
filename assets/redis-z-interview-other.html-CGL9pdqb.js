import{_ as t,c as i,a as r,o as n}from"./app-DP7tPpgD.js";const a={};function s(o,e){return n(),i("div",null,e[0]||(e[0]=[r('<h1 id="redis面试-其他特性" tabindex="-1"><a class="header-anchor" href="#redis面试-其他特性"><span>Redis面试 - 其他特性</span></a></h1><h2 id="_1-redis事件机制" tabindex="-1"><a class="header-anchor" href="#_1-redis事件机制"><span>1 Redis事件机制?</span></a></h2><p>Redis中的事件驱动库只关注网络IO，以及定时器。该事件库处理下面两类事件：</p><ul><li><strong>文件事件</strong>(file event)：用于处理 Redis 服务器和客户端之间的网络IO。</li><li><strong>时间事件</strong>(time eveat)：Redis 服务器中的一些操作（比如serverCron函数）需要在给定的时间点执行，而时间事件就是处理这类定时操作的。</li></ul><p>事件驱动库的代码主要是在<code>src/ae.c</code>中实现的，其示意图如下所示。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028682.png" alt="image-20220628231834918" tabindex="0" loading="lazy"><figcaption>image-20220628231834918</figcaption></figure><p><code>aeEventLoop</code>是整个事件驱动的核心，它管理着文件事件表和时间事件列表，不断地循环处理着就绪的文件事件和到期的时间事件。</p><h2 id="_2-redis文件事件的模型" tabindex="-1"><a class="header-anchor" href="#_2-redis文件事件的模型"><span>2 Redis文件事件的模型？</span></a></h2><p>Redis基于<strong>Reactor模式</strong>开发了自己的网络事件处理器，也就是文件事件处理器。文件事件处理器使用<strong>IO多路复用技术</strong>，同时监听多个套接字，并为套接字关联不同的事件处理函数。当套接字的可读或者可写事件触发时，就会调用相应的事件处理函数。</p><ul><li><strong>1. 为什么单线程的 Redis 能那么快</strong>？</li></ul><p>Redis的瓶颈主要在IO而不是CPU，所以为了省开发量，在6.0版本前是单线程模型；其次，Redis 是单线程主要是指 <strong>Redis 的网络 IO 和键值对读写是由一个线程来完成的</strong>，这也是 Redis 对外提供键值存储服务的主要流程。（但 Redis 的其他功能，比如持久化、异步删除、集群数据同步等，其实是由额外的线程执行的）。</p><p>Redis 采用了多路复用机制使其在网络 IO 操作中能并发处理大量的客户端请求，实现高吞吐率。</p><ul><li><strong>2. Redis事件响应框架ae_event及文件事件处理器</strong></li></ul><p>Redis并没有使用 libevent 或者 libev 这样的成熟开源方案，而是自己实现一个非常简洁的事件驱动库 ae_event。</p><p>Redis 使用的IO多路复用技术主要有：<code>select</code>、<code>epoll</code>、<code>evport</code>和<code>kqueue</code>等。每个IO多路复用函数库在 Redis 源码中都对应一个单独的文件，比如<code>ae_select.c</code>，<code>ae_epoll.c</code>， <code>ae_kqueue.c</code>等。Redis 会根据不同的操作系统，按照不同的优先级选择多路复用技术。事件响应框架一般都采用该架构，比如 netty 和 libevent。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028721.png" alt="image-20220628231916751" tabindex="0" loading="lazy"><figcaption>image-20220628231916751</figcaption></figure><p>如下图所示，文件事件处理器有四个组成部分，它们分别是套接字、I/O多路复用程序、文件事件分派器以及事件处理器。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028756.png" alt="image-20220628231940531" tabindex="0" loading="lazy"><figcaption>image-20220628231940531</figcaption></figure><p>文件事件是对套接字操作的抽象，每当一个套接字准备好执行 <code>accept</code>、<code>read</code>、<code>write</code>和 <code>close</code> 等操作时，就会产生一个文件事件。因为 Redis 通常会连接多个套接字，所以多个文件事件有可能并发的出现。</p><p>I/O多路复用程序负责监听多个套接字，并向文件事件派发器传递那些产生了事件的套接字。</p><p>尽管多个文件事件可能会并发地出现，但I/O多路复用程序总是会将所有产生的套接字都放到同一个队列(也就是后文中描述的aeEventLoop的fired就绪事件表)里边，然后文件事件处理器会以有序、同步、单个套接字的方式处理该队列中的套接字，也就是处理就绪的文件事件。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028795.png" alt="image-20220628232005169" tabindex="0" loading="lazy"><figcaption>image-20220628232005169</figcaption></figure><h2 id="_3-什么是redis发布订阅" tabindex="-1"><a class="header-anchor" href="#_3-什么是redis发布订阅"><span>3 什么是Redis发布订阅？</span></a></h2><p>Redis 发布订阅(pub/sub)是一种消息通信模式：发送者(pub)发送消息，订阅者(sub)接收消息。</p><p>Redis 的 SUBSCRIBE 命令可以让客户端订阅任意数量的频道， 每当有新信息发送到被订阅的频道时， 信息就会被发送给所有订阅指定频道的客户端。</p><p>作为例子， 下图展示了频道 channel1 ， 以及订阅这个频道的三个客户端 —— client2 、 client5 和 client1 之间的关系</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220628232200617.png" alt="image-20220628232200617" tabindex="0" loading="lazy"><figcaption>image-20220628232200617</figcaption></figure><p>当有新消息通过 PUBLISH 命令发送给频道 channel1 时， 这个消息就会被发送给订阅它的三个客户端：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220628232219119.png" alt="image-20220628232219119" tabindex="0" loading="lazy"><figcaption>image-20220628232219119</figcaption></figure><h2 id="_4-redis发布订阅有哪两种方式" tabindex="-1"><a class="header-anchor" href="#_4-redis发布订阅有哪两种方式"><span>4 Redis发布订阅有哪两种方式？</span></a></h2><ul><li><strong>基于频道(Channel)的发布/订阅</strong></li></ul><p>&quot;发布/订阅&quot;模式包含两种角色，分别是发布者和订阅者。发布者可以向指定的频道(channel)发送消息; 订阅者可以订阅一个或者多个频道(channel),所有订阅此频道的订阅者都会收到此消息。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028822.png" alt="image-20220628232251439" tabindex="0" loading="lazy"><figcaption>image-20220628232251439</figcaption></figure><ul><li><strong>基于模式(pattern)的发布/订阅</strong></li></ul><p>下图展示了一个带有频道和模式的例子， 其中 <a href="http://tweet.shop" target="_blank" rel="noopener noreferrer">tweet.shop</a>.* 模式匹配了 tweet.shop.kindle 频道和 tweet.shop.ipad 频道， 并且有不同的客户端分别订阅它们三个：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028869.png" alt="image-20220628232314728" tabindex="0" loading="lazy"><figcaption>image-20220628232314728</figcaption></figure><p>当有信息发送到 tweet.shop.kindle 频道时， 信息除了发送给 clientX 和 clientY 之外， 还会发送给订阅 <a href="http://tweet.shop" target="_blank" rel="noopener noreferrer">tweet.shop</a>.* 模式的 client123 和 client256 ：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028898.png" alt="image-20220628232334451" tabindex="0" loading="lazy"><figcaption>image-20220628232334451</figcaption></figure><p>另一方面， 如果接收到信息的是频道 tweet.shop.ipad ， 那么 client123 和 client256 同样会收到信息：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028931.png" alt="image-20220628232349308" tabindex="0" loading="lazy"><figcaption>image-20220628232349308</figcaption></figure>',40)]))}const c=t(a,[["render",s],["__file","redis-z-interview-other.html.vue"]]),g=JSON.parse('{"path":"/posts/Redis/redis-z-interview-other.html","title":"Redis面试 -  其他特性","lang":"zh-CN","frontmatter":{"aliases":"Redis面试  -  其他特性","tags":null,"cssclass":null,"source":null,"order":1130,"category":["数据库","Redis"],"created":"2024-02-22 10:49","updated":"2024-03-13 10:30","description":"Redis面试 - 其他特性 1 Redis事件机制? Redis中的事件驱动库只关注网络IO，以及定时器。该事件库处理下面两类事件： 文件事件(file event)：用于处理 Redis 服务器和客户端之间的网络IO。 时间事件(time eveat)：Redis 服务器中的一些操作（比如serverCron函数）需要在给定的时间点执行，而时间事件...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Redis/redis-z-interview-other.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis面试 -  其他特性"}],["meta",{"property":"og:description","content":"Redis面试 - 其他特性 1 Redis事件机制? Redis中的事件驱动库只关注网络IO，以及定时器。该事件库处理下面两类事件： 文件事件(file event)：用于处理 Redis 服务器和客户端之间的网络IO。 时间事件(time eveat)：Redis 服务器中的一些操作（比如serverCron函数）需要在给定的时间点执行，而时间事件..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028682.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis面试 -  其他特性\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028682.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028721.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028756.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028795.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220628232200617.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220628232219119.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028822.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028869.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028898.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131028931.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1 Redis事件机制?","slug":"_1-redis事件机制","link":"#_1-redis事件机制","children":[]},{"level":2,"title":"2 Redis文件事件的模型？","slug":"_2-redis文件事件的模型","link":"#_2-redis文件事件的模型","children":[]},{"level":2,"title":"3 什么是Redis发布订阅？","slug":"_3-什么是redis发布订阅","link":"#_3-什么是redis发布订阅","children":[]},{"level":2,"title":"4 Redis发布订阅有哪两种方式？","slug":"_4-redis发布订阅有哪两种方式","link":"#_4-redis发布订阅有哪两种方式","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.49,"words":1347},"filePathRelative":"posts/Redis/redis-z-interview-other.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1 Redis事件机制?</h2>\\n<p>Redis中的事件驱动库只关注网络IO，以及定时器。该事件库处理下面两类事件：</p>\\n<ul>\\n<li><strong>文件事件</strong>(file event)：用于处理 Redis 服务器和客户端之间的网络IO。</li>\\n<li><strong>时间事件</strong>(time eveat)：Redis 服务器中的一些操作（比如serverCron函数）需要在给定的时间点执行，而时间事件就是处理这类定时操作的。</li>\\n</ul>\\n<p>事件驱动库的代码主要是在<code>src/ae.c</code>中实现的，其示意图如下所示。</p>","autoDesc":true}');export{c as comp,g as data};
