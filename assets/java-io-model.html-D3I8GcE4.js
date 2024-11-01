import{_ as i,c as a,a as t,o as l}from"./app-DP7tPpgD.js";const n={};function o(s,e){return l(),a("div",null,e[0]||(e[0]=[t('<h1 id="io-模型-unix-io-模型" tabindex="-1"><a class="header-anchor" href="#io-模型-unix-io-模型"><span>IO 模型 - Unix IO 模型</span></a></h1><blockquote><p>本文主要简要介绍 Unix I/O 5种模型，并对5大模型比较，并重点为后续章节解释IO多路复用做铺垫。</p></blockquote><h2 id="_1-unix-io-模型简介" tabindex="-1"><a class="header-anchor" href="#_1-unix-io-模型简介"><span>1. Unix IO 模型简介</span></a></h2><p>一个输入操作通常包括两个阶段:</p><ul><li>等待数据准备好</li><li>从内核向进程复制数据</li></ul><p>对于一个套接字上的输入操作，第一步通常涉及等待数据从网络中到达。当所等待分组到达时，它被复制到内核中的某个缓冲区。第二步就是把数据从内核缓冲区复制到应用进程缓冲区。</p><p>Unix 下有五种 I/O 模型:</p><ul><li>阻塞式 I/O</li><li>非阻塞式 I/O</li><li>I/O 复用(select 和 poll)</li><li>信号驱动式 I/O(SIGIO)</li><li>异步 I/O(AIO)</li></ul><h3 id="_1-1-阻塞式-i-o" tabindex="-1"><a class="header-anchor" href="#_1-1-阻塞式-i-o"><span>1.1 阻塞式 I/O</span></a></h3><p>应用进程被阻塞，直到数据复制到应用进程缓冲区中才返回。</p><p>应该注意到，在阻塞的过程中，其它程序还可以执行，因此阻塞不意味着整个操作系统都被阻塞。因为其他程序还可以执行，因此不消耗 CPU 时间，这种模型的执行效率会比较高。</p><p>下图中，recvfrom 用于接收 Socket 传来的数据，并复制到应用进程的缓冲区 buf 中。这里把 recvfrom() 当成系统调用。</p><div class="language-c" data-ext="c" data-title="c"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">ssize_t</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> recvfrom</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> sockfd</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> *</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">buf</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> size_t</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> len</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> flags</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> struct</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> sockaddr </span><span style="color:#C678DD;--shiki-dark:#C678DD;">*</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">src_addr</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> socklen_t</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> *</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">addrlen</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935078.png" alt="image-20220830212837589" tabindex="0" loading="lazy"><figcaption>image-20220830212837589</figcaption></figure><p>或者网友提供的</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935125.png" alt="image-20220830212901021" tabindex="0" loading="lazy"><figcaption>image-20220830212901021</figcaption></figure><h3 id="_1-2-非阻塞式-i-o" tabindex="-1"><a class="header-anchor" href="#_1-2-非阻塞式-i-o"><span>1.2 非阻塞式 I/O</span></a></h3><p>应用进程执行系统调用之后，内核返回一个错误码。应用进程可以继续执行，但是需要不断的执行系统调用来获知 I/O 是否完成，这种方式称为轮询(polling)。</p><p>由于 CPU 要处理更多的系统调用，因此这种模型是比较低效的。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935152.png" alt="image-20220830213005982" tabindex="0" loading="lazy"><figcaption>image-20220830213005982</figcaption></figure><p>或者网友提供的</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935170.png" alt="image-20220830213019907" tabindex="0" loading="lazy"><figcaption>image-20220830213019907</figcaption></figure><h3 id="_1-3-i-o-复用" tabindex="-1"><a class="header-anchor" href="#_1-3-i-o-复用"><span>1.3 I/O 复用</span></a></h3><p>使用 select 或者 poll 等待数据，并且可以等待多个套接字中的任何一个变为可读，这一过程会被阻塞，当某一个套接字可读时返回。之后再使用 recvfrom 把数据从内核复制到进程中。</p><p>它可以让单个进程具有处理多个 I/O 事件的能力。又被称为 Event Driven I/O，即事件驱动 I/O。</p><p>如果一个 Web 服务器没有 I/O 复用，那么每一个 Socket 连接都需要创建一个线程去处理。如果同时有几万个连接，那么就需要创建相同数量的线程。并且相比于多进程和多线程技术，I/O 复用不需要进程线程创建和切换的开销，系统开销更小。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935197.png" alt="image-20220830213352173" tabindex="0" loading="lazy"><figcaption>image-20220830213352173</figcaption></figure><p>或者网友提供的</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935220.png" alt="image-20220830213407568" tabindex="0" loading="lazy"><figcaption>image-20220830213407568</figcaption></figure><h3 id="_1-4-信号驱动-i-o" tabindex="-1"><a class="header-anchor" href="#_1-4-信号驱动-i-o"><span>1.4 信号驱动 I/O</span></a></h3><p>应用进程使用 sigaction 系统调用，内核立即返回，应用进程可以继续执行，也就是说等待数据阶段应用进程是非阻塞的。内核在数据到达时向应用进程发送 SIGIO 信号，应用进程收到之后在信号处理程序中调用 recvfrom 将数据从内核复制到应用进程中。</p><p>相比于非阻塞式 I/O 的轮询方式，信号驱动 I/O 的 CPU 利用率更高。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935245.png" alt="image-20220830213543801" tabindex="0" loading="lazy"><figcaption>image-20220830213543801</figcaption></figure><p>或者网友提供的</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935267.png" alt="image-20220830213557200" tabindex="0" loading="lazy"><figcaption>image-20220830213557200</figcaption></figure><h3 id="_1-5-异步-i-o" tabindex="-1"><a class="header-anchor" href="#_1-5-异步-i-o"><span>1.5 异步 I/O</span></a></h3><p>进行 aio_read 系统调用会立即返回，应用进程继续执行，不会被阻塞，内核会在所有操作完成之后向应用进程发送信号。</p><p>异步 I/O 与信号驱动 I/O 的区别在于，异步 I/O 的信号是通知应用进程 I/O 完成，而信号驱动 I/O 的信号是通知应用进程可以开始 I/O。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935292.png" alt="image-20220830213739485" tabindex="0" loading="lazy"><figcaption>image-20220830213739485</figcaption></figure><p>或者网友提供的</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935326.png" alt="image-20220830213757293" tabindex="0" loading="lazy"><figcaption>image-20220830213757293</figcaption></figure><h2 id="_2-i-o-模型比较" tabindex="-1"><a class="header-anchor" href="#_2-i-o-模型比较"><span>2. I/O 模型比较</span></a></h2><h3 id="_2-1-同步-i-o-与异步-i-o" tabindex="-1"><a class="header-anchor" href="#_2-1-同步-i-o-与异步-i-o"><span>2.1 同步 I/O 与异步 I/O</span></a></h3><ul><li>同步 I/O: 应用进程在调用 recvfrom 操作时会阻塞。</li><li>异步 I/O: 不会阻塞。</li></ul><p>阻塞式 I/O、非阻塞式 I/O、I/O 复用和信号驱动 I/O 都是同步 I/O，虽然非阻塞式 I/O 和信号驱动 I/O 在等待数据阶段不会阻塞，但是在之后的将数据从内核复制到应用进程这个操作会阻塞。</p><h3 id="_2-2-五大-i-o-模型比较" tabindex="-1"><a class="header-anchor" href="#_2-2-五大-i-o-模型比较"><span>2.2 五大 I/O 模型比较</span></a></h3><p>前四种 I/O 模型的主要区别在于第一个阶段，而第二个阶段是一样的: 将数据从内核复制到应用进程过程中，应用进程会被阻塞。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935351.png" alt="image-20220830214003251" tabindex="0" loading="lazy"><figcaption>image-20220830214003251</figcaption></figure><h2 id="_3-io多路复用" tabindex="-1"><a class="header-anchor" href="#_3-io多路复用"><span>3. IO多路复用</span></a></h2><blockquote><p>IO多路复用最为重要，后面的文章<a href="https://pdai.tech/md/java/io/java-io-nio-select-epoll.html" target="_blank" rel="noopener noreferrer">Java NIO - IO多路复用详解</a>将对IO多路复用，Ractor模型以及Java NIO对其的支持作详解。</p></blockquote><p>这里主要概要性的理解: IO多路复用工作模式和应用。</p><h3 id="_3-1-io多路复用工作模式" tabindex="-1"><a class="header-anchor" href="#_3-1-io多路复用工作模式"><span>3.1 IO多路复用工作模式</span></a></h3><p>epoll 的描述符事件有两种触发模式: LT(level trigger)和 ET(edge trigger)。</p><h4 id="_3-1-1-lt-模式" tabindex="-1"><a class="header-anchor" href="#_3-1-1-lt-模式"><span>3.1.1 LT 模式</span></a></h4><p>当 epoll_wait() 检测到描述符事件到达时，将此事件通知进程，进程可以不立即处理该事件，下次调用 epoll_wait() 会再次通知进程。是默认的一种模式，并且同时支持 Blocking 和 No-Blocking。</p><h4 id="_3-1-2-et-模式" tabindex="-1"><a class="header-anchor" href="#_3-1-2-et-模式"><span>3.1.2 ET 模式</span></a></h4><p>和 LT 模式不同的是，通知之后进程必须立即处理事件，下次再调用 epoll_wait() 时不会再得到事件到达的通知。</p><p>很大程度上减少了 epoll 事件被重复触发的次数，因此效率要比 LT 模式高。只支持 No-Blocking，以避免由于一个文件句柄的阻塞读/阻塞写操作把处理多个文件描述符的任务饿死。</p><h3 id="_3-2-应用场景" tabindex="-1"><a class="header-anchor" href="#_3-2-应用场景"><span>3.2 应用场景</span></a></h3><p>很容易产生一种错觉认为只要用 epoll 就可以了，select 和 poll 都已经过时了，其实它们都有各自的使用场景。</p><h4 id="_3-2-1-select-应用场景" tabindex="-1"><a class="header-anchor" href="#_3-2-1-select-应用场景"><span>3.2.1. select 应用场景</span></a></h4><p>select 的 timeout 参数精度为 1ns，而 poll 和 epoll 为 1ms，因此 select 更加适用于实时要求更高的场景，比如核反应堆的控制。</p><p>select 可移植性更好，几乎被所有主流平台所支持。</p><h4 id="_3-2-2-poll-应用场景" tabindex="-1"><a class="header-anchor" href="#_3-2-2-poll-应用场景"><span>3.2.2 poll 应用场景</span></a></h4><p>poll 没有最大描述符数量的限制，如果平台支持并且对实时性要求不高，应该使用 poll 而不是 select。</p><p>需要同时监控小于 1000 个描述符，就没有必要使用 epoll，因为这个应用场景下并不能体现 epoll 的优势。</p><p>需要监控的描述符状态变化多，而且都是非常短暂的，也没有必要使用 epoll。因为 epoll 中的所有描述符都存储在内核中，造成每次需要对描述符的状态改变都需要通过 epoll_ctl() 进行系统调用，频繁系统调用降低效率。并且epoll 的描述符存储在内核，不容易调试。</p><h4 id="_3-2-3-epoll-应用场景" tabindex="-1"><a class="header-anchor" href="#_3-2-3-epoll-应用场景"><span>3.2.3 epoll 应用场景</span></a></h4><p>只需要运行在 Linux 平台上，并且有非常大量的描述符需要同时轮询，而且这些连接最好是长连接。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/java/io/java-io-model.html" target="_blank" rel="noopener noreferrer"><strong>IO 模型 - Unix IO 模型</strong></a></p>',71)]))}const p=i(n,[["render",o],["__file","java-io-model.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/JavaIO/java-io-model.html","title":"IO 模型 - Unix IO 模型","lang":"zh-CN","frontmatter":{"aliases":"IO 模型 - Unix IO 模型","tags":null,"cssclass":null,"source":null,"order":70,"category":["Java","IO"],"created":"2024-02-22 10:47","updated":"2024-03-12 09:36","description":"IO 模型 - Unix IO 模型 本文主要简要介绍 Unix I/O 5种模型，并对5大模型比较，并重点为后续章节解释IO多路复用做铺垫。 1. Unix IO 模型简介 一个输入操作通常包括两个阶段: 等待数据准备好 从内核向进程复制数据 对于一个套接字上的输入操作，第一步通常涉及等待数据从网络中到达。当所等待分组到达时，它被复制到内核中的某个缓...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/JavaIO/java-io-model.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"IO 模型 - Unix IO 模型"}],["meta",{"property":"og:description","content":"IO 模型 - Unix IO 模型 本文主要简要介绍 Unix I/O 5种模型，并对5大模型比较，并重点为后续章节解释IO多路复用做铺垫。 1. Unix IO 模型简介 一个输入操作通常包括两个阶段: 等待数据准备好 从内核向进程复制数据 对于一个套接字上的输入操作，第一步通常涉及等待数据从网络中到达。当所等待分组到达时，它被复制到内核中的某个缓..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935078.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"IO 模型 - Unix IO 模型\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935078.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935125.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935152.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935170.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935197.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935220.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935245.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935267.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935292.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935326.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120935351.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. Unix IO 模型简介","slug":"_1-unix-io-模型简介","link":"#_1-unix-io-模型简介","children":[{"level":3,"title":"1.1 阻塞式 I/O","slug":"_1-1-阻塞式-i-o","link":"#_1-1-阻塞式-i-o","children":[]},{"level":3,"title":"1.2 非阻塞式 I/O","slug":"_1-2-非阻塞式-i-o","link":"#_1-2-非阻塞式-i-o","children":[]},{"level":3,"title":"1.3 I/O 复用","slug":"_1-3-i-o-复用","link":"#_1-3-i-o-复用","children":[]},{"level":3,"title":"1.4 信号驱动 I/O","slug":"_1-4-信号驱动-i-o","link":"#_1-4-信号驱动-i-o","children":[]},{"level":3,"title":"1.5 异步 I/O","slug":"_1-5-异步-i-o","link":"#_1-5-异步-i-o","children":[]}]},{"level":2,"title":"2. I/O 模型比较","slug":"_2-i-o-模型比较","link":"#_2-i-o-模型比较","children":[{"level":3,"title":"2.1 同步 I/O 与异步 I/O","slug":"_2-1-同步-i-o-与异步-i-o","link":"#_2-1-同步-i-o-与异步-i-o","children":[]},{"level":3,"title":"2.2 五大 I/O 模型比较","slug":"_2-2-五大-i-o-模型比较","link":"#_2-2-五大-i-o-模型比较","children":[]}]},{"level":2,"title":"3. IO多路复用","slug":"_3-io多路复用","link":"#_3-io多路复用","children":[{"level":3,"title":"3.1 IO多路复用工作模式","slug":"_3-1-io多路复用工作模式","link":"#_3-1-io多路复用工作模式","children":[]},{"level":3,"title":"3.2 应用场景","slug":"_3-2-应用场景","link":"#_3-2-应用场景","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6,"words":1799},"filePathRelative":"posts/Java/JavaIO/java-io-model.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>本文主要简要介绍 Unix I/O 5种模型，并对5大模型比较，并重点为后续章节解释IO多路复用做铺垫。</p>\\n</blockquote>\\n<h2>1. Unix IO 模型简介</h2>\\n<p>一个输入操作通常包括两个阶段:</p>\\n<ul>\\n<li>等待数据准备好</li>\\n<li>从内核向进程复制数据</li>\\n</ul>\\n<p>对于一个套接字上的输入操作，第一步通常涉及等待数据从网络中到达。当所等待分组到达时，它被复制到内核中的某个缓冲区。第二步就是把数据从内核缓冲区复制到应用进程缓冲区。</p>\\n<p>Unix 下有五种 I/O 模型:</p>\\n<ul>\\n<li>阻塞式 I/O</li>\\n<li>非阻塞式 I/O</li>\\n<li>I/O 复用(select 和 poll)</li>\\n<li>信号驱动式 I/O(SIGIO)</li>\\n<li>异步 I/O(AIO)</li>\\n</ul>","autoDesc":true}');export{p as comp,c as data};
