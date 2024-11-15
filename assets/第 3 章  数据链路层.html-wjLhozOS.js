import{_ as i,c as e,a,o as n}from"./app-fWubcX7c.js";const t={};function r(s,l){return n(),e("div",null,l[0]||(l[0]=[a('<h1 id="第-3-章-数据链路层" tabindex="-1"><a class="header-anchor" href="#第-3-章-数据链路层"><span>第 3 章 数据链路层</span></a></h1><h2 id="使用点对点信道的数据链路层" tabindex="-1"><a class="header-anchor" href="#使用点对点信道的数据链路层"><span>使用点对点信道的数据链路层</span></a></h2><h3 id="数据链路和帧" tabindex="-1"><a class="header-anchor" href="#数据链路和帧"><span>数据链路和帧</span></a></h3><ul><li>数据链路层使用的信道主要有以下两种类型： <ul><li>点对点信道。这种信道使用一对一的点对点通信方式。</li><li>广播信道。这种信道使用一对多的广播通信方式，因此过程比较复杂。广播信道上连接的主机很多，因此必须使用专用的共享信道协议来协调这些主机的数据发</li></ul></li><li>数据链路层模型</li><li>链路(link)是一条无源的点到点的物理线路段，中间没有任何其他的交换结点。</li><li>数据链路(data link) 除了物理线路外，还必须有通信协议来控制这些数据的传输。若把实现这些协议的硬件和软件加到链路上，就构成了数据链路。</li><li>数据链路层传送的是帧</li></ul><h3 id="三个基本问题" tabindex="-1"><a class="header-anchor" href="#三个基本问题"><span>三个基本问题</span></a></h3><ul><li>(1) 封装成帧 <ul><li>将网络层传下来的分组添加首部和尾部，用于标记帧的开始和结束。<br> *</li></ul></li><li>(2) 透明传输 <ul><li>透明表示一个实际存在的事物看起来好像不存在一样。</li><li>帧使用首部和尾部进行定界，如果帧的数据部分含有和首部尾部相同的内容，那么帧的开始和结束位置就会被错误的判定。需要在数据部分出现首部尾部相同的内容前面插入转义字符。如果数据部分出现转义字符，那么就在转义字符前面再加个转义字符。在接收端进行处理之后可以还原出原始数据。这个过程透明传输的内容是转义字符，用户察觉不到转义字符的存在。<br> *</li></ul></li><li>(3) 差错控制 <ul><li><p>循环冗余检验 CRC<br> 目前数据链路层广泛使用了循环冗余检验（CRC）来检查比特差错。</p></li><li><p>帧检验序列 FCS<br> 在数据后面添加上的冗余码称为帧检验序列 FCS (Frame Check Sequence)。</p></li><li><p>冗余码的计算</p><ul><li>例子：<br> 现在 k = 6, M = 101001。<br> 设 n = 3, 除数 P = 1101，<br> 被除数是 2^nM = 101001000。<br> 模 2 运算的结果是：商 Q = 110101，<br> 余数 R = 001。<br> 把余数 R 作为冗余码添加在数据 M 的后面发送出去。发送的数据是：2^nM + R<br> 即：101001001，共 (k + n) 位。</li></ul></li><li><p>概要: CRC 是一种常用的检错方法，而 FCS 是添加在数据后面的冗余码。<br> FCS 可以用 CRC 这种方法得出，但 CRC 并非用来获得 FCS 的唯一方法。</p></li></ul></li></ul><h2 id="点对点协议-ppp" tabindex="-1"><a class="header-anchor" href="#点对点协议-ppp"><span>点对点协议 PPP</span></a></h2><h3 id="ppp-协议的特点" tabindex="-1"><a class="header-anchor" href="#ppp-协议的特点"><span>PPP 协议的特点</span></a></h3><ul><li>互联网用户通常需要连接到某个 ISP 之后才能接入到互联网，PPP 协议是用户计算机和 ISP 进行通信时所使用的数据链路层协议。</li></ul><h3 id="ppp-协议的帧格式" tabindex="-1"><a class="header-anchor" href="#ppp-协议的帧格式"><span>PPP 协议的帧格式</span></a></h3><ul><li>示意图：<br> F 字段为帧的定界符<br> A 和 C 字段暂时没有意义<br> FCS 字段是使用 CRC 的检验序列<br> 信息部分的长度不超过 1500</li></ul><h3 id="ppp-协议的工作状态" tabindex="-1"><a class="header-anchor" href="#ppp-协议的工作状态"><span>PPP 协议的工作状态</span></a></h3><ul><li>过程：<br> 当用户拨号接入 ISP 时，路由器的调制解调器对拨号做出确认，并建立一条物理连接。<br> PC 机向路由器发送一系列的 LCP 分组（封装成多个 PPP 帧）。<br> 这些分组及其响应选择一些 PPP 参数，和进行网络层配置，NCP 给新接入的 PC机分配一个临时的 IP 地址，使 PC 机成为因特网上的一个主机。<br> 通信完毕时，NCP 释放网络层连接，收回原来分配出去的 IP 地址。接着，LCP 释放数据链路层连接。最后释放的是物理层的连接。</li></ul><h2 id="使用广播信道的数据链路层" tabindex="-1"><a class="header-anchor" href="#使用广播信道的数据链路层"><span>使用广播信道的数据链路层</span></a></h2><h3 id="局域网的数据链路层" tabindex="-1"><a class="header-anchor" href="#局域网的数据链路层"><span>局域网的数据链路层</span></a></h3><ul><li>局域网是一种典型的广播信道，主要特点是网络为一个单位所拥有，且地理范围和站点数目均有限。</li><li>主要有以太网、令牌环网、FDDI 和 ATM 等局域网技术，目前以太网占领着有线局域网市场。</li><li>可以按照网络拓扑结构对局域网进行分类： <ul><li>星形网</li><li>环形网</li><li>总线网</li><li>树形网</li></ul></li><li>数据链路层的两个子层 <ul><li>逻辑链路控制 LLC (Logical Link Control)子层</li><li>媒体接入控制 MAC (Medium Access Control)子层。</li><li>概要: 与接入到传输媒体有关的内容都放在 MAC子层，而 LLC 子层则与传输媒体无关，不管采用何种协议的局域网对 LLC 子层来说都是透明的<br> 所以以后一般不考虑 LLC 子层</li></ul></li><li>适配器 <ul><li>网络接口板又称为通信适配器(adapter)或网络接口卡 NIC (Network Interface Card)，或“网卡”。 <ul><li>适配器的重要功能： <ul><li>进行串行/并行转换。</li><li>对数据进行缓存。</li><li>在计算机的操作系统安装设备驱动程序。</li><li>实现以太网协议。</li></ul></li></ul></li></ul></li></ul><h3 id="csma-cd-协议" tabindex="-1"><a class="header-anchor" href="#csma-cd-协议"><span>CSMA/CD 协议</span></a></h3><ul><li>CSMA/CD 表示载波监听多点接入 / 碰撞检测。 <ul><li>多点接入 ：说明这是总线型网络，许多主机以多点的方式连接到总线上。</li><li>载波监听 ：每个主机都必须不停地监听信道。在发送前，如果监听到信道正在使用，就必须等待。</li><li>碰撞检测 ：在发送中，如果监听到信道已有其它主机正在发送数据，就表示发生了碰撞。虽然每个主机在发送数据之前都已经监听到信道为空闲，但是由于电磁波的传播时延的存在，还是有可能会发生碰撞。</li></ul></li><li>具体内容 <ul><li>记端到端的传播时延为 τ，最先发送的站点最多经过 2τ 就可以知道是否发生了碰撞，称 2τ 为 争用期 。只有经过争用期之后还没有检测到碰撞，才能肯定这次发送不会发生碰撞。</li><li>当发生碰撞时，站点要停止发送，等待一段时间再发送。这个时间采用 截断二进制指数退避算法 来确定。从离散的整数集合 {0, 1, .., (2k-1)} 中随机取出一个数，记作 r，然后取 r 倍的争用期作为重传等待时间。</li><li>概要: 示意图</li></ul></li></ul><h2 id="使用广播信道的以太网" tabindex="-1"><a class="header-anchor" href="#使用广播信道的以太网"><span>使用广播信道的以太网</span></a></h2><h3 id="使用集线器的星形拓扑" tabindex="-1"><a class="header-anchor" href="#使用集线器的星形拓扑"><span>使用集线器的星形拓扑</span></a></h3><ul><li>传统以太网最初是使用粗同轴电缆，后来演进到使用比较便宜的细同轴电缆，最后发展为使用更便宜和更灵活的双绞线。<br> 这种以太网采用星形拓扑，在星形的中心则增加了一种可靠性非常高的设备，叫做集线器(hub)</li></ul><h3 id="以太网的信道利用率" tabindex="-1"><a class="header-anchor" href="#以太网的信道利用率"><span>以太网的信道利用率</span></a></h3><ul><li>一个帧从开始发送，经可能发生的碰撞后，将再重传数次，到发送成功且信道转为空闲(即再经过时间 τ 使得信道上无信号在传播)时为止，是发送一帧所需的平均时间。</li><li>发送一帧占用线路的时间是 T0 + τ ，而帧本身的发送时间是 T0。于是我们可计算出理想情况下的极限信道利用率 Smax为：</li></ul><h3 id="以太网的-mac-层" tabindex="-1"><a class="header-anchor" href="#以太网的-mac-层"><span>以太网的 MAC 层</span></a></h3><ul><li>MAC 地址是链路层地址，长度为 6 字节（48 位），用于唯一标识网络适配器（网卡）。</li><li>一台主机拥有多少个网络适配器就有多少个 MAC 地址。例如笔记本电脑普遍存在无线网络适配器和有线网络适配器，因此就有两个 MAC 地址。</li></ul><h3 id="以太网帧格式" tabindex="-1"><a class="header-anchor" href="#以太网帧格式"><span>以太网帧格式：</span></a></h3><ul><li>类型 ：标记上层使用的协议；<br> 数据 ：长度在 46-1500 之间，如果太小则需要填充；<br> FCS ：帧检验序列，使用的是 CRC 检验方法；</li></ul><h2 id="扩展的以太网" tabindex="-1"><a class="header-anchor" href="#扩展的以太网"><span>扩展的以太网</span></a></h2><h3 id="在物理层扩展以太网" tabindex="-1"><a class="header-anchor" href="#在物理层扩展以太网"><span>在物理层扩展以太网</span></a></h3><ul><li>用多个集线器可连成更大的局域网 <ul><li>用集线器组成更大的局域网都在一个碰撞域中 <ul><li>优点 <ul><li>使原来属于不同碰撞域的局域网上的计算机能够进行跨碰撞域的通信。</li><li>扩大了局域网覆盖的地理范围。</li></ul></li><li>缺点 <ul><li>碰撞域增大了，但总的吞吐量并未提高。</li><li>如果不同的碰撞域使用不同的数据率，那么就不能用集线器将它们互连起来。</li></ul></li></ul></li></ul></li></ul><h3 id="在数据链路层扩展以太网" tabindex="-1"><a class="header-anchor" href="#在数据链路层扩展以太网"><span>在数据链路层扩展以太网</span></a></h3><ul><li>在数据链路层扩展局域网是使用网桥。 <ul><li>网桥工作在数据链路层，它根据 MAC 帧的目的地址对收到的帧进行转发。<br> 网桥具有过滤帧的功能。当网桥收到一个帧时，并不是向所有的接口转发此帧，而是先检查此帧的目的 MAC 地址，然后再确定将该帧转发到哪一个接口 。 <ul><li>优点 <ul><li>过滤通信量。</li><li>扩大了物理范围。</li><li>提高了可靠性。</li><li>可互连不同物理层、不同 MAC 子层和不同速率（如10 Mb/s 和 100 Mb/s 以太网）的局域网。</li></ul></li><li>缺点 <ul><li>存储转发增加了时延。</li><li>在MAC 子层并没有流量控制功能。</li><li>具有不同 MAC 子层的网段桥接在一起时时延更大。</li><li>网桥只适合于用户数不太多(不超过几百个)和通信量不太大的局域网，否则有时还会因传播过多的广播信息而产生网络拥塞。这就是所谓的广播风暴。</li></ul></li></ul></li><li>交换机 <ul><li>交换机具有自学习能力，学习的是交换表的内容，交换表中存储着 MAC 地址到接口的映射。<br> 正是由于这种自学习能力，因此交换机是一种即插即用设备，不需要网络管理员手动配置交换表内容。 <ul><li>下图中，交换机有 4 个接口，主机 A 向主机 B 发送数据帧时，交换机把主机 A 到接口 1 的映射写入交换表中。为了发送数据帧到 B，先查交换表，此时没有主机 B 的表项，那么主机 A 就发送广播帧，主机 C 和主机 D 会丢弃该帧，主机 B 回应该帧向主机 A 发送数据包时，交换机查找交换表得到主机 A 映射的接口为 1，就发送数据帧到接口 1，同时交换机添加主机 B 到接口 2 的映射。</li></ul></li></ul></li></ul></li></ul><h3 id="虚拟局域网" tabindex="-1"><a class="header-anchor" href="#虚拟局域网"><span>虚拟局域网</span></a></h3><ul><li>虚拟局域网可以建立与物理位置无关的逻辑组，只有在同一个虚拟局域网中的成员才会收到链路层广播信息。</li><li>例如下图中 (A1, A2, A3, A4) 属于一个虚拟局域网，A1 发送的广播会被 A2、A3、A4 收到，而其它站点收不到。</li><li>使用 VLAN 干线连接来建立虚拟局域网，每台交换机上的一个特殊接口被设置为干线接口，以互连 VLAN 交换机。IEEE 定义了一种扩展的以太网帧格式 802.1Q，它在标准以太网帧上加进了 4 字节首部 VLAN 标签，用于表示该帧属于哪一个虚拟局域网。</li></ul><h2 id="高速以太网" tabindex="-1"><a class="header-anchor" href="#高速以太网"><span>高速以太网</span></a></h2><h3 id="_100base-t-以太网" tabindex="-1"><a class="header-anchor" href="#_100base-t-以太网"><span>100BASE-T 以太网</span></a></h3><ul><li>速率达到或超过 100 Mb/s 的以太网称为高速以太网</li><li>可在全双工方式下工作而无冲突发生。因此，不使用 CSMA/CD 协议。</li></ul><h3 id="吉比特以太网" tabindex="-1"><a class="header-anchor" href="#吉比特以太网"><span>吉比特以太网</span></a></h3><ul><li>允许在 1 Gb/s 下全双工和半双工两种方式工作。</li><li>在半双工方式下使用 CSMA/CD 协议（全双工方式不需要使用 CSMA/CD 协议）。</li></ul><h3 id="_10-吉比特以太网" tabindex="-1"><a class="header-anchor" href="#_10-吉比特以太网"><span>10 吉比特以太网</span></a></h3><ul><li>10 吉比特以太网只工作在全双工方式</li><li>也不使用 CSMA/CD 协议。</li></ul><h3 id="使用高速以太网进行宽带接入" tabindex="-1"><a class="header-anchor" href="#使用高速以太网进行宽带接入"><span>使用高速以太网进行宽带接入</span></a></h3><ul><li>以太网接入的重要特点是它可提供双向的宽带通信，并且可根据用户对带宽的需求灵活地进行带宽升级。</li><li>采用以太网接入可实现端到端的以太网传输，中间不需要再进行帧格式的转换。这就提高了数据的传输效率和降低了传输的成本。</li></ul><h2 id="其他类型的高速局域网接口" tabindex="-1"><a class="header-anchor" href="#其他类型的高速局域网接口"><span>其他类型的高速局域网接口</span></a></h2><h2 id="集线器在转发帧时-不对传输媒体进行检测。" tabindex="-1"><a class="header-anchor" href="#集线器在转发帧时-不对传输媒体进行检测。"><span>集线器在转发帧时，不对传输媒体进行检测。</span></a></h2><p>网桥在转发帧之前必须执行 CSMA/CD 算法。</p>',46)]))}const p=i(t,[["render",r],["__file","第 3 章  数据链路层.html.vue"]]),c=JSON.parse('{"path":"/posts/Computer-Basics/Computer-Network/%E7%AC%AC%203%20%E7%AB%A0%20%20%E6%95%B0%E6%8D%AE%E9%93%BE%E8%B7%AF%E5%B1%82.html","title":"3、数据链路层","lang":"zh-CN","frontmatter":{"title":"3、数据链路层","date":"2024-02-03 12:56","category":["计算机网络"],"tag":["计算机网络"],"description":"第 3 章 数据链路层 使用点对点信道的数据链路层 数据链路和帧 数据链路层使用的信道主要有以下两种类型： 点对点信道。这种信道使用一对一的点对点通信方式。 广播信道。这种信道使用一对多的广播通信方式，因此过程比较复杂。广播信道上连接的主机很多，因此必须使用专用的共享信道协议来协调这些主机的数据发 数据链路层模型 链路(link)是一条无源的点到点的物...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Computer-Basics/Computer-Network/%E7%AC%AC%203%20%E7%AB%A0%20%20%E6%95%B0%E6%8D%AE%E9%93%BE%E8%B7%AF%E5%B1%82.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"3、数据链路层"}],["meta",{"property":"og:description","content":"第 3 章 数据链路层 使用点对点信道的数据链路层 数据链路和帧 数据链路层使用的信道主要有以下两种类型： 点对点信道。这种信道使用一对一的点对点通信方式。 广播信道。这种信道使用一对多的广播通信方式，因此过程比较复杂。广播信道上连接的主机很多，因此必须使用专用的共享信道协议来协调这些主机的数据发 数据链路层模型 链路(link)是一条无源的点到点的物..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"计算机网络"}],["meta",{"property":"article:published_time","content":"2024-02-03T12:56:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3、数据链路层\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-03T12:56:00.000Z\\",\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"使用点对点信道的数据链路层","slug":"使用点对点信道的数据链路层","link":"#使用点对点信道的数据链路层","children":[{"level":3,"title":"数据链路和帧","slug":"数据链路和帧","link":"#数据链路和帧","children":[]},{"level":3,"title":"三个基本问题","slug":"三个基本问题","link":"#三个基本问题","children":[]}]},{"level":2,"title":"点对点协议 PPP","slug":"点对点协议-ppp","link":"#点对点协议-ppp","children":[{"level":3,"title":"PPP 协议的特点","slug":"ppp-协议的特点","link":"#ppp-协议的特点","children":[]},{"level":3,"title":"PPP 协议的帧格式","slug":"ppp-协议的帧格式","link":"#ppp-协议的帧格式","children":[]},{"level":3,"title":"PPP 协议的工作状态","slug":"ppp-协议的工作状态","link":"#ppp-协议的工作状态","children":[]}]},{"level":2,"title":"使用广播信道的数据链路层","slug":"使用广播信道的数据链路层","link":"#使用广播信道的数据链路层","children":[{"level":3,"title":"局域网的数据链路层","slug":"局域网的数据链路层","link":"#局域网的数据链路层","children":[]},{"level":3,"title":"CSMA/CD 协议","slug":"csma-cd-协议","link":"#csma-cd-协议","children":[]}]},{"level":2,"title":"使用广播信道的以太网","slug":"使用广播信道的以太网","link":"#使用广播信道的以太网","children":[{"level":3,"title":"使用集线器的星形拓扑","slug":"使用集线器的星形拓扑","link":"#使用集线器的星形拓扑","children":[]},{"level":3,"title":"以太网的信道利用率","slug":"以太网的信道利用率","link":"#以太网的信道利用率","children":[]},{"level":3,"title":"以太网的 MAC 层","slug":"以太网的-mac-层","link":"#以太网的-mac-层","children":[]},{"level":3,"title":"以太网帧格式：","slug":"以太网帧格式","link":"#以太网帧格式","children":[]}]},{"level":2,"title":"扩展的以太网","slug":"扩展的以太网","link":"#扩展的以太网","children":[{"level":3,"title":"在物理层扩展以太网","slug":"在物理层扩展以太网","link":"#在物理层扩展以太网","children":[]},{"level":3,"title":"在数据链路层扩展以太网","slug":"在数据链路层扩展以太网","link":"#在数据链路层扩展以太网","children":[]},{"level":3,"title":"虚拟局域网","slug":"虚拟局域网","link":"#虚拟局域网","children":[]}]},{"level":2,"title":"高速以太网","slug":"高速以太网","link":"#高速以太网","children":[{"level":3,"title":"100BASE-T 以太网","slug":"_100base-t-以太网","link":"#_100base-t-以太网","children":[]},{"level":3,"title":"吉比特以太网","slug":"吉比特以太网","link":"#吉比特以太网","children":[]},{"level":3,"title":"10 吉比特以太网","slug":"_10-吉比特以太网","link":"#_10-吉比特以太网","children":[]},{"level":3,"title":"使用高速以太网进行宽带接入","slug":"使用高速以太网进行宽带接入","link":"#使用高速以太网进行宽带接入","children":[]}]},{"level":2,"title":"其他类型的高速局域网接口","slug":"其他类型的高速局域网接口","link":"#其他类型的高速局域网接口","children":[]},{"level":2,"title":"集线器在转发帧时，不对传输媒体进行检测。","slug":"集线器在转发帧时-不对传输媒体进行检测。","link":"#集线器在转发帧时-不对传输媒体进行检测。","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":10.38,"words":3115},"filePathRelative":"posts/Computer-Basics/Computer-Network/第 3 章  数据链路层.md","localizedDate":"2024年2月3日","excerpt":"\\n<h2>使用点对点信道的数据链路层</h2>\\n<h3>数据链路和帧</h3>\\n<ul>\\n<li>数据链路层使用的信道主要有以下两种类型：\\n<ul>\\n<li>点对点信道。这种信道使用一对一的点对点通信方式。</li>\\n<li>广播信道。这种信道使用一对多的广播通信方式，因此过程比较复杂。广播信道上连接的主机很多，因此必须使用专用的共享信道协议来协调这些主机的数据发</li>\\n</ul>\\n</li>\\n<li>数据链路层模型</li>\\n<li>链路(link)是一条无源的点到点的物理线路段，中间没有任何其他的交换结点。</li>\\n<li>数据链路(data link) 除了物理线路外，还必须有通信协议来控制这些数据的传输。若把实现这些协议的硬件和软件加到链路上，就构成了数据链路。</li>\\n<li>数据链路层传送的是帧</li>\\n</ul>","autoDesc":true}');export{p as comp,c as data};
