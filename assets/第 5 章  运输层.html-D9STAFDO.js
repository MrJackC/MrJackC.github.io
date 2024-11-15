import{_ as e,c as a,a as i,o as t}from"./app-fWubcX7c.js";const n={};function r(s,l){return t(),a("div",null,l[0]||(l[0]=[i('<h1 id="第-5-章-运输层" tabindex="-1"><a class="header-anchor" href="#第-5-章-运输层"><span>第 5 章 运输层</span></a></h1><h2 id="运输层协议概述" tabindex="-1"><a class="header-anchor" href="#运输层协议概述"><span>运输层协议概述</span></a></h2><h3 id="进程之间的通信" tabindex="-1"><a class="header-anchor" href="#进程之间的通信"><span>进程之间的通信</span></a></h3><ul><li>运输层向它上面的应用层提供通信服务，它属于面向通信部分的最高层，同时也是用户功能中的最低层。</li><li>两个主机进行通信实际上就是两个主机中的应用进程互相通信。</li><li>应用进程之间的通信又称为端到端的通信。</li><li>运输层协议和网络层协议的主要区别</li></ul><h3 id="运输层的两个主要协议" tabindex="-1"><a class="header-anchor" href="#运输层的两个主要协议"><span>运输层的两个主要协议</span></a></h3><ul><li>(1) 用户数据报协议 UDP(User Datagram Protocol) <ul><li>UDP 传送的数据单位协议是 UDP 报文或用户数据报。</li></ul></li><li>(2) 传输控制协议 TCP(Transmission Control Protocol) <ul><li>TCP 传送的数据单位协议是 TCP 报文段(segment)</li></ul></li></ul><h3 id="运输层的端口" tabindex="-1"><a class="header-anchor" href="#运输层的端口"><span>运输层的端口</span></a></h3><ul><li>软件端口与硬件端口 <ul><li>在协议栈层间的抽象的协议端口是软件端口。</li><li>路由器或交换机上的端口是硬件端口。</li></ul></li><li>三类端口 <ul><li>熟知端口，数值一般为 0~1023。</li><li>登记端口号，数值为1024~49151，为没有熟知端口号的应用程序使用的。使用这个范围的端口号必须在 IANA 登记，以防止重复。</li><li>客户端口号或短暂端口号，数值为49152~65535，留给客户进程选择暂时使用。当服务器进程收到客户进程的报文时，就知道了客户进程所使用的动态端口号。通信结束后，这个端口号可供其他客户进程以后使用。</li></ul></li></ul><h2 id="用户数据报协议-udp" tabindex="-1"><a class="header-anchor" href="#用户数据报协议-udp"><span>用户数据报协议 UDP</span></a></h2><h3 id="udp-概述" tabindex="-1"><a class="header-anchor" href="#udp-概述"><span>UDP 概述</span></a></h3><ul><li>用户数据报协议 UDP（User Datagram Protocol）是无连接的，尽最大可能交付，没有拥塞控制，面向报文（对于应用程序传下来的报文不合并也不拆分，只是添加 UDP 首部），支持一对一、一对多、多对一和多对多的交互通信。</li></ul><h3 id="udp-的首部格式" tabindex="-1"><a class="header-anchor" href="#udp-的首部格式"><span>UDP 的首部格式</span></a></h3><h2 id="传输控制协议-tcp-概述" tabindex="-1"><a class="header-anchor" href="#传输控制协议-tcp-概述"><span>传输控制协议 TCP 概述</span></a></h2><h3 id="tcp-最主要的特点" tabindex="-1"><a class="header-anchor" href="#tcp-最主要的特点"><span>TCP 最主要的特点</span></a></h3><ul><li>传输控制协议 TCP（Transmission Control Protocol）是面向连接的，提供可靠交付，有流量控制，拥塞控制，提供全双工通信，面向字节流（把应用层传下来的报文看成字节流，把字节流组织成大小不等的数据块），每一条 TCP 连接只能是点对点的（一对一）。</li></ul><h3 id="tcp-的连接" tabindex="-1"><a class="header-anchor" href="#tcp-的连接"><span>TCP 的连接</span></a></h3><ul><li>TCP 连接的端点叫做套接字(socket)或插口。 <ul><li>套接字 socket = (IP地址: 端口号)</li></ul></li></ul><h2 id="可靠传输的工作原理" tabindex="-1"><a class="header-anchor" href="#可靠传输的工作原理"><span>可靠传输的工作原理</span></a></h2><h3 id="停止等待协议" tabindex="-1"><a class="header-anchor" href="#停止等待协议"><span>停止等待协议</span></a></h3><h3 id="连续-arq-协议" tabindex="-1"><a class="header-anchor" href="#连续-arq-协议"><span>连续 ARQ 协议</span></a></h3><h2 id="tcp-报文段的首部格式" tabindex="-1"><a class="header-anchor" href="#tcp-报文段的首部格式"><span>TCP 报文段的首部格式</span></a></h2><ul><li>序号 ：用于对字节流进行编号，例如序号为 301，表示第一个字节的编号为 301，如果携带的数据长度为 100 字节，那么下一个报文段的序号应为 401。</li><li>确认号 ：期望收到的下一个报文段的序号。例如 B 正确收到 A 发送来的一个报文段，序号为 501，携带的数据长度为 200 字节，因此 B 期望下一个报文段的序号为 701，B 发送给 A 的确认报文段中确认号就为 701。</li><li>数据偏移 ：指的是数据部分距离报文段起始处的偏移量，实际上指的是首部的长度。</li><li>确认 ACK ：当 ACK=1 时确认号字段有效，否则无效。TCP 规定，在连接建立后所有传送的报文段都必须把 ACK 置 1。</li><li>同步 SYN ：在连接建立时用来同步序号。当 SYN=1，ACK=0 时表示这是一个连接请求报文段。若对方同意建立连接，则响应报文中 SYN=1，ACK=1。</li><li>终止 FIN ：用来释放一个连接，当 FIN=1 时，表示此报文段的发送方的数据已发送完毕，并要求释放连接。</li><li>窗口 ：窗口值作为接收方让发送方设置其发送窗口的依据。之所以要有这个限制，是因为接收方的数据缓存空间是有限的。</li><li>概要: 示意图</li></ul><h2 id="tcp-可靠传输的实现" tabindex="-1"><a class="header-anchor" href="#tcp-可靠传输的实现"><span>TCP 可靠传输的实现</span></a></h2><h3 id="以字节为单位的滑动窗口" tabindex="-1"><a class="header-anchor" href="#以字节为单位的滑动窗口"><span>以字节为单位的滑动窗口</span></a></h3><ul><li>窗口是缓存的一部分，用来暂时存放字节流。发送方和接收方各有一个窗口，接收方通过 TCP 报文段中的窗口字段告诉发送方自己的窗口大小，发送方根据这个值和其它信息设置自己的窗口大小。</li></ul><p>发送窗口内的字节都允许被发送，接收窗口内的字节都允许被接收。如果发送窗口左部的字节已经发送并且收到了确认，那么就将发送窗口向右滑动一定距离，直到左部第一个字节不是已发送并且已确认的状态；接收窗口的滑动类似，接收窗口左部字节已经发送确认并交付主机，就向右滑动接收窗口。</p><p>接收窗口只会对窗口内最后一个按序到达的字节进行确认，例如接收窗口已经收到的字节为 {31, 34, 35}，其中 {31} 按序到达，而 {34, 35} 就不是，因此只对字节 31 进行确认。发送方得到一个字节的确认之后，就知道这个字节之前的所有字节都已经被接收。<br> * 1<br> * 2<br> * 3<br> * 4</p><h3 id="超时重传时间的选择" tabindex="-1"><a class="header-anchor" href="#超时重传时间的选择"><span>超时重传时间的选择</span></a></h3><ul><li>超时重传 <ul><li>TCP 使用超时重传来实现可靠传输：如果一个已经发送的报文段在超时时间内没有收到确认，那么就重传这个报文段。</li></ul></li></ul><p>一个报文段从发送再到接收到确认所经过的时间称为往返时间 RTT，加权平均往返时间 RTTs 计算如下：<br> * 其中，0 ≤ a ＜ 1，RTTs 随着 a 的增加更容易受到 RTT 的影响。</p><p>超时时间 RTO 应该略大于 RTTs，TCP 使用的超时时间计算如下：（其中 RTTd 为偏差的加权平均值）</p><h3 id="选择确认-sack" tabindex="-1"><a class="header-anchor" href="#选择确认-sack"><span>选择确认 SACK</span></a></h3><h2 id="tcp的流量控制" tabindex="-1"><a class="header-anchor" href="#tcp的流量控制"><span>TCP的流量控制</span></a></h2><h3 id="利用滑动窗口实现流量控制" tabindex="-1"><a class="header-anchor" href="#利用滑动窗口实现流量控制"><span>利用滑动窗口实现流量控制</span></a></h3><ul><li>TCP 流量控制 <ul><li>流量控制是为了控制发送方发送速率，保证接收方来得及接收。</li></ul></li></ul><p>接收方发送的确认报文中的窗口字段可以用来控制发送方窗口大小，从而影响发送方的发送速率。将窗口字段设置为 0，则发送方不能发送数据。</p><ul><li>流量控制举例</li></ul><h3 id="必须考虑传输效率" tabindex="-1"><a class="header-anchor" href="#必须考虑传输效率"><span>必须考虑传输效率</span></a></h3><h2 id="tcp-的拥塞控制" tabindex="-1"><a class="header-anchor" href="#tcp-的拥塞控制"><span>TCP 的拥塞控制</span></a></h2><h3 id="拥塞控制的一般原理" tabindex="-1"><a class="header-anchor" href="#拥塞控制的一般原理"><span>拥塞控制的一般原理</span></a></h3><ul><li>如果网络出现拥塞，分组将会丢失，此时发送方会继续重传，从而导致网络拥塞程度更高。因此当出现拥塞时，应当控制发送方的速率。这一点和流量控制很像，但是出发点不同。流量控制是为了让接收方能来得及接收，而拥塞控制是为了降低整个网络的拥塞程度。</li><li>拥塞控制所起的作用</li></ul><h3 id="几种拥塞控制方法" tabindex="-1"><a class="header-anchor" href="#几种拥塞控制方法"><span>几种拥塞控制方法</span></a></h3><ul><li>TCP 主要通过四个算法来进行拥塞控制：慢开始、拥塞避免、快重传、快恢复。 <ul><li>发送方需要维护一个叫做拥塞窗口（cwnd）的状态变量，注意拥塞窗口与发送方窗口的区别：拥塞窗口只是一个状态变量，实际决定发送方能发送多少数据的是发送方窗口。</li></ul></li></ul><p>为了便于讨论，做如下假设：</p><p>接收方有足够大的接收缓存，因此不会发生流量控制；<br> 虽然 TCP 的窗口基于字节，但是这里设窗口的大小单位为报文段。<br> * 1. 慢开始与拥塞避免<br> * 发送的最初执行慢开始，令 cwnd = 1，发送方只能发送 1 个报文段；当收到确认后，将 cwnd 加倍，因此之后发送方能够发送的报文段数量为：2、4、8 ...</p><p>注意到慢开始每个轮次都将 cwnd 加倍，这样会让 cwnd 增长速度非常快，从而使得发送方发送的速度增长速度过快，网络拥塞的可能性也就更高。设置一个慢开始门限 ssthresh，当 cwnd &gt;= ssthresh 时，进入拥塞避免，每个轮次只将 cwnd 加 1。</p><p>如果出现了超时，则令 ssthresh = cwnd / 2，然后重新执行慢开始。<br> * 2. 快重传与快恢复<br> * 在接收方，要求每次接收到报文段都应该对最后一个已收到的有序报文段进行确认。例如已经接收到 M1 和 M2，此时收到 M4，应当发送对 M2 的确认。</p><p>在发送方，如果收到三个重复确认，那么可以知道下一个报文段丢失，此时执行快重传，立即重传下一个报文段。例如收到三个 M2，则 M3 丢失，立即重传 M3。</p><p>在这种情况下，只是丢失个别报文段，而不是网络拥塞。因此执行快恢复，令 ssthresh = cwnd / 2 ，cwnd = ssthresh，注意到此时直接进入拥塞避免。</p><p>慢开始和快恢复的快慢指的是 cwnd 的设定值，而不是 cwnd 的增长速率。慢开始 cwnd 设定为 1，而快恢复 cwnd 设定为 ssthresh。</p><h3 id="随机早期检测-red" tabindex="-1"><a class="header-anchor" href="#随机早期检测-red"><span>随机早期检测 RED</span></a></h3><h2 id="tcp-的运输连接管理" tabindex="-1"><a class="header-anchor" href="#tcp-的运输连接管理"><span>TCP 的运输连接管理</span></a></h2><h3 id="tcp-的连接建立" tabindex="-1"><a class="header-anchor" href="#tcp-的连接建立"><span>TCP 的连接建立</span></a></h3><ul><li>假设 A 为客户端，B 为服务器端。</li></ul><p>首先 B 处于 LISTEN（监听）状态，等待客户的连接请求。</p><p>A 向 B 发送连接请求报文，SYN=1，ACK=0，选择一个初始的序号 x。</p><p>B 收到连接请求报文，如果同意建立连接，则向 A 发送连接确认报文，SYN=1，ACK=1，确认号为 x+1，同时也选择一个初始的序号 y。</p><p>A 收到 B 的连接确认报文后，还要向 B 发出确认，确认号为 y+1，序号为 x+1。</p><p>B 收到 A 的确认后，连接建立。</p><ul><li>三次握手的原因 <ul><li>第三次握手是为了防止失效的连接请求到达服务器，让服务器错误打开连接。</li></ul></li></ul><p>客户端发送的连接请求如果在网络中滞留，那么就会隔很长一段时间才能收到服务器端发回的连接确认。客户端等待一个超时重传时间之后，就会重新请求连接。但是这个滞留的连接请求最后还是会到达服务器，如果不进行三次握手，那么服务器就会打开两个连接。如果有第三次握手，客户端会忽略服务器之后发送的对滞留连接请求的连接确认，不进行第三次握手，因此就不会再次打开连接。</p><h3 id="tcp-的连接释放" tabindex="-1"><a class="header-anchor" href="#tcp-的连接释放"><span>TCP 的连接释放</span></a></h3><ul><li>以下描述不讨论序号和确认号，因为序号和确认号的规则比较简单。并且不讨论 ACK，因为 ACK 在连接建立之后都为 1。</li></ul><p>A 发送连接释放报文，FIN=1。</p><p>B 收到之后发出确认，此时 TCP 属于半关闭状态，B 能向 A 发送数据但是 A 不能向 B 发送数据。</p><p>当 B 不再需要连接时，发送连接释放报文，FIN=1。</p><p>A 收到后发出确认，进入 TIME-WAIT 状态，等待 2 MSL（最大报文存活时间）后释放连接。</p><p>B 收到 A 的确认后释放连接。</p><ul><li>四次挥手的原因 <ul><li>客户端发送了 FIN 连接释放报文之后，服务器收到了这个报文，就进入了 CLOSE-WAIT 状态。这个状态是为了让服务器端发送还未传送完毕的数据，传送完毕之后，服务器会发送 FIN 连接释放报文。</li></ul></li><li>TIME_WAIT <ul><li>客户端接收到服务器端的 FIN 报文后进入此状态，此时并不是直接进入 CLOSED 状态，还需要等待一个时间计时器设置的时间 2MSL。这么做有两个理由： <ul><li>确保最后一个确认报文能够到达。如果 B 没收到 A 发送来的确认报文，那么就会重新发送连接释放请求报文，A 等待一段时间就是为了处理这种情况的发生。</li><li>等待一段时间是为了让本连接持续时间内所产生的所有报文都从网络中消失，使得下一个新的连接不会出现旧的连接请求报文。</li></ul></li></ul></li></ul><h3 id="tcp-的有限状态机" tabindex="-1"><a class="header-anchor" href="#tcp-的有限状态机"><span>TCP 的有限状态机</span></a></h3><ul><li>粗实线箭头表示对客户进程的正常变迁。<br> 粗虚线箭头表示对服务器进程的正常变迁。<br> 另一种细线箭头表示异常变迁。</li></ul>',71)]))}const h=e(n,[["render",r],["__file","第 5 章  运输层.html.vue"]]),c=JSON.parse('{"path":"/posts/Computer-Basics/Computer-Network/%E7%AC%AC%205%20%E7%AB%A0%20%20%E8%BF%90%E8%BE%93%E5%B1%82.html","title":"5、运输层","lang":"zh-CN","frontmatter":{"title":"5、运输层","date":"2024-02-05 12:56","category":["计算机网络"],"tag":["计算机网络"],"description":"第 5 章 运输层 运输层协议概述 进程之间的通信 运输层向它上面的应用层提供通信服务，它属于面向通信部分的最高层，同时也是用户功能中的最低层。 两个主机进行通信实际上就是两个主机中的应用进程互相通信。 应用进程之间的通信又称为端到端的通信。 运输层协议和网络层协议的主要区别 运输层的两个主要协议 (1) 用户数据报协议 UDP(User Datagr...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Computer-Basics/Computer-Network/%E7%AC%AC%205%20%E7%AB%A0%20%20%E8%BF%90%E8%BE%93%E5%B1%82.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"5、运输层"}],["meta",{"property":"og:description","content":"第 5 章 运输层 运输层协议概述 进程之间的通信 运输层向它上面的应用层提供通信服务，它属于面向通信部分的最高层，同时也是用户功能中的最低层。 两个主机进行通信实际上就是两个主机中的应用进程互相通信。 应用进程之间的通信又称为端到端的通信。 运输层协议和网络层协议的主要区别 运输层的两个主要协议 (1) 用户数据报协议 UDP(User Datagr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-25T09:16:19.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"计算机网络"}],["meta",{"property":"article:published_time","content":"2024-02-05T12:56:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-25T09:16:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5、运输层\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-05T12:56:00.000Z\\",\\"dateModified\\":\\"2024-10-25T09:16:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"运输层协议概述","slug":"运输层协议概述","link":"#运输层协议概述","children":[{"level":3,"title":"进程之间的通信","slug":"进程之间的通信","link":"#进程之间的通信","children":[]},{"level":3,"title":"运输层的两个主要协议","slug":"运输层的两个主要协议","link":"#运输层的两个主要协议","children":[]},{"level":3,"title":"运输层的端口","slug":"运输层的端口","link":"#运输层的端口","children":[]}]},{"level":2,"title":"用户数据报协议 UDP","slug":"用户数据报协议-udp","link":"#用户数据报协议-udp","children":[{"level":3,"title":"UDP 概述","slug":"udp-概述","link":"#udp-概述","children":[]},{"level":3,"title":"UDP 的首部格式","slug":"udp-的首部格式","link":"#udp-的首部格式","children":[]}]},{"level":2,"title":"传输控制协议 TCP 概述","slug":"传输控制协议-tcp-概述","link":"#传输控制协议-tcp-概述","children":[{"level":3,"title":"TCP 最主要的特点","slug":"tcp-最主要的特点","link":"#tcp-最主要的特点","children":[]},{"level":3,"title":"TCP 的连接","slug":"tcp-的连接","link":"#tcp-的连接","children":[]}]},{"level":2,"title":"可靠传输的工作原理","slug":"可靠传输的工作原理","link":"#可靠传输的工作原理","children":[{"level":3,"title":"停止等待协议","slug":"停止等待协议","link":"#停止等待协议","children":[]},{"level":3,"title":"连续 ARQ 协议","slug":"连续-arq-协议","link":"#连续-arq-协议","children":[]}]},{"level":2,"title":"TCP 报文段的首部格式","slug":"tcp-报文段的首部格式","link":"#tcp-报文段的首部格式","children":[]},{"level":2,"title":"TCP 可靠传输的实现","slug":"tcp-可靠传输的实现","link":"#tcp-可靠传输的实现","children":[{"level":3,"title":"以字节为单位的滑动窗口","slug":"以字节为单位的滑动窗口","link":"#以字节为单位的滑动窗口","children":[]},{"level":3,"title":"超时重传时间的选择","slug":"超时重传时间的选择","link":"#超时重传时间的选择","children":[]},{"level":3,"title":"选择确认 SACK","slug":"选择确认-sack","link":"#选择确认-sack","children":[]}]},{"level":2,"title":"TCP的流量控制","slug":"tcp的流量控制","link":"#tcp的流量控制","children":[{"level":3,"title":"利用滑动窗口实现流量控制","slug":"利用滑动窗口实现流量控制","link":"#利用滑动窗口实现流量控制","children":[]},{"level":3,"title":"必须考虑传输效率","slug":"必须考虑传输效率","link":"#必须考虑传输效率","children":[]}]},{"level":2,"title":"TCP 的拥塞控制","slug":"tcp-的拥塞控制","link":"#tcp-的拥塞控制","children":[{"level":3,"title":"拥塞控制的一般原理","slug":"拥塞控制的一般原理","link":"#拥塞控制的一般原理","children":[]},{"level":3,"title":"几种拥塞控制方法","slug":"几种拥塞控制方法","link":"#几种拥塞控制方法","children":[]},{"level":3,"title":"随机早期检测 RED","slug":"随机早期检测-red","link":"#随机早期检测-red","children":[]}]},{"level":2,"title":"TCP 的运输连接管理","slug":"tcp-的运输连接管理","link":"#tcp-的运输连接管理","children":[{"level":3,"title":"TCP 的连接建立","slug":"tcp-的连接建立","link":"#tcp-的连接建立","children":[]},{"level":3,"title":"TCP 的连接释放","slug":"tcp-的连接释放","link":"#tcp-的连接释放","children":[]},{"level":3,"title":"TCP 的有限状态机","slug":"tcp-的有限状态机","link":"#tcp-的有限状态机","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729847779000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":2}]},"readingTime":{"minutes":10.64,"words":3192},"filePathRelative":"posts/Computer-Basics/Computer-Network/第 5 章  运输层.md","localizedDate":"2024年2月5日","excerpt":"\\n<h2>运输层协议概述</h2>\\n<h3>进程之间的通信</h3>\\n<ul>\\n<li>运输层向它上面的应用层提供通信服务，它属于面向通信部分的最高层，同时也是用户功能中的最低层。</li>\\n<li>两个主机进行通信实际上就是两个主机中的应用进程互相通信。</li>\\n<li>应用进程之间的通信又称为端到端的通信。</li>\\n<li>运输层协议和网络层协议的主要区别</li>\\n</ul>\\n<h3>运输层的两个主要协议</h3>\\n<ul>\\n<li>(1) 用户数据报协议 UDP(User Datagram Protocol)\\n<ul>\\n<li>UDP 传送的数据单位协议是 UDP 报文或用户数据报。</li>\\n</ul>\\n</li>\\n<li>(2) 传输控制协议 TCP(Transmission Control Protocol)\\n<ul>\\n<li>TCP 传送的数据单位协议是 TCP 报文段(segment)</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{h as comp,c as data};
