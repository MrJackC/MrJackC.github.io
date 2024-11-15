import{_ as i,c as e,a,o as n}from"./app-fWubcX7c.js";const t={};function s(h,l){return n(),e("div",null,l[0]||(l[0]=[a('<h1 id="第六章-输入输出系统" tabindex="-1"><a class="header-anchor" href="#第六章-输入输出系统"><span>第六章：输入输出系统</span></a></h1><h2 id="i-o系统的功能-模型和接口" tabindex="-1"><a class="header-anchor" href="#i-o系统的功能-模型和接口"><span>I/O系统的功能，模型和接口</span></a></h2><h3 id="i-o系统管理的对象是i-o设备和相应的设备控制器。" tabindex="-1"><a class="header-anchor" href="#i-o系统管理的对象是i-o设备和相应的设备控制器。"><span>I/O系统管理的对象是I/O设备和相应的设备控制器。</span></a></h3><h3 id="i-o系统的基本功能" tabindex="-1"><a class="header-anchor" href="#i-o系统的基本功能"><span>I/O系统的基本功能</span></a></h3><ul><li>隐藏物理设备的细节</li><li>与设备的无关性</li><li>提高处理机和I/O设备的利用率</li><li>对I/O设备进行控制</li><li>确保对设备的正确共享</li><li>错误处理</li></ul><h3 id="i-o软件的层次结构" tabindex="-1"><a class="header-anchor" href="#i-o软件的层次结构"><span>I/O软件的层次结构</span></a></h3><ul><li>用户层I/O软件</li><li>设备独立性软件</li><li>设备驱动程序（厂家开发）</li><li>中断处理程序</li><li>硬件</li></ul><h3 id="i-o系统的分层" tabindex="-1"><a class="header-anchor" href="#i-o系统的分层"><span>I/O系统的分层</span></a></h3><ul><li>中断处理程序</li><li>设备驱动程序</li><li>设备独立性软件</li></ul><h3 id="i-o系统接口" tabindex="-1"><a class="header-anchor" href="#i-o系统接口"><span>I/O系统接口</span></a></h3><ul><li>块设备接口 <ul><li>指以数据块为单位来组织和传送数据信息的设备</li><li>典型的块设备是磁盘、光盘</li><li>块设备的基本特征 <ul><li>①传输速率较高，通常每秒钟为几兆位；</li><li>②它是可寻址的，即可随机地读/写任意一块；</li><li>③磁盘设备的I/O采用DMA方式。</li></ul></li></ul></li><li>流设备接口 <ul><li>又称字符设备指以单个字符为单位来传送数据信息的设备</li><li>这类设备一般用于数据的输入和输出，有交互式终端、打印机</li><li>字符设备的基本特征 <ul><li>①传输速率较低；</li><li>②不可寻址，即不能指定输入时的源地址或输出时的目标地址；</li><li>③字符设备的I/O常采用中断驱动方式。</li></ul></li></ul></li><li>网络通信接口 <ul><li>提供网络接入功能，使计算机能通过网络与其他计算机进行通信或上网浏览。</li></ul></li></ul><h2 id="i-o设备和设备控制器" tabindex="-1"><a class="header-anchor" href="#i-o设备和设备控制器"><span>I/O设备和设备控制器</span></a></h2><h3 id="分类" tabindex="-1"><a class="header-anchor" href="#分类"><span>分类</span></a></h3><ul><li>使用特性分 <ul><li>存储设备</li><li>I/O设备</li></ul></li><li>传输速率分 <ul><li>低速设备（几字节——几百字节） <ul><li>典型的设备有键盘、鼠标、语音的输入</li></ul></li><li>中速设备（数千——数万字节） <ul><li>典型的设备有行式打印机、激光打印机</li></ul></li><li>高速设备（数十万——千兆字节） <ul><li>典型的设备有磁带机、磁盘机、光盘机</li></ul></li></ul></li></ul><h3 id="设备并不是直接与cpu进行通信-而是与设备控制器通信。在设备与设备控制器之间应该有一个接口。" tabindex="-1"><a class="header-anchor" href="#设备并不是直接与cpu进行通信-而是与设备控制器通信。在设备与设备控制器之间应该有一个接口。"><span>设备并不是直接与CPU进行通信，而是与设备控制器通信。在设备与设备控制器之间应该有一个接口。</span></a></h3><ul><li>数据信号：控制器 ← 设备 ← 控制器 <ul><li>传送数据信号，输入、输出bit</li></ul></li><li>控制信号: 控制器 → 设备 <ul><li>执行读、写操作的信号</li></ul></li><li>状态信号：设备当前使用状态</li></ul><h3 id="设备控制器" tabindex="-1"><a class="header-anchor" href="#设备控制器"><span>设备控制器</span></a></h3><ul><li>主要功能：控制一个或多个I/O设备，以实现I/O设备和计算机之间的数据交换</li><li>基本功能 <ul><li>接收和识别命令 <ul><li>控制寄存器、命令译码器</li></ul></li><li>数据交换 <ul><li>实现CPU与控制器，控制器与设备间的数据交换</li></ul></li><li>标识和报告设备的状态</li><li>地址识别 <ul><li>配置地址译码器，识别不同的设备</li></ul></li><li>数据缓冲区</li><li>差错控制</li></ul></li><li>设备控制器的组成 <ul><li>设备控制器与处理机（CPU）的接口 <ul><li>实现CPU与设备控制器之间的通信</li></ul></li><li>设备控制器与设备的接口 <ul><li>控制器可连接多个设备</li></ul></li><li>I/O逻辑 <ul><li>实现对设备的控制</li><li>CPU利用该逻辑向控制器发送I/O命令</li><li>命令、地址译码</li></ul></li></ul></li></ul><h3 id="内存映像i-o" tabindex="-1"><a class="header-anchor" href="#内存映像i-o"><span>内存映像I/O</span></a></h3><ul><li>驱动程序将抽象I/O命令转换出的一系列具体的命令，参数等数据装入设备控制器的相应寄存器，由控制器来执行这些命令，具体实施对I/O设备的操作</li></ul><h3 id="i-o通道" tabindex="-1"><a class="header-anchor" href="#i-o通道"><span>I/O通道</span></a></h3><ul><li><p>目的：建立独立的I/O操作(组织, 管理和结束)，使由CPU处理的I/O工作转由通道完成（解放CPU，实现并行）</p></li><li><p>什么是I/O通道？</p><ul><li>是一种特殊的处理机，具有通过执行通道程序完成I/O操作的指令</li><li>特点：指令单一(局限于与I/O操作相关的指令)，与CPU共享内存</li></ul></li><li><p>基本过程：</p><ul><li>CPU向通道发出I/O指令-&gt;通道接收指令-&gt;从内存取出通道程序处理I/O-&gt;向CPU发出中断</li></ul></li><li><p>通道类型</p><ul><li>字节多路通道 <ul><li>低中速连接子通道时间片轮转方式共享主通道</li><li>字节多路通道不适于连接高速设备，这推动了按数组方式进行数据传送的数组选择通道的形成。</li></ul></li><li>数组选择通道 <ul><li>这种通道可以连接多台高速设备，但只含有一个分配型子通道，在一段时间内只能执行一道通道程序， 控制一台设备进行数据传送， 直至该设备传送完毕释放该通道。这种通道的利用率很低。</li></ul></li><li>数组多路通道 <ul><li>含有多个非分配型子通道，前两种通道的组合，通道利用率较好</li></ul></li></ul></li><li><p>瓶颈问题</p><ul><li>原因;通道不足</li><li>解决办法：增加设备到主机间的通路，而不增加通道（结果类似RS触发器）</li></ul></li></ul><h2 id="中断机构和中断处理程序" tabindex="-1"><a class="header-anchor" href="#中断机构和中断处理程序"><span>中断机构和中断处理程序</span></a></h2><h3 id="中断" tabindex="-1"><a class="header-anchor" href="#中断"><span>中断</span></a></h3><ul><li>分类 <ul><li>中断（外部触发） <ul><li>对外部I/O设备发出的中断信号的响应</li></ul></li><li>陷入（内部原因：除0） <ul><li>由CPU内部事件引起的中断</li></ul></li></ul></li><li>中断向量表（类比51单片机） <ul><li>中断程序的入口地址表</li></ul></li><li>中断优先级 <ul><li>对紧急程度不同的中断处理方式</li></ul></li><li>对多中断源的处理方式 <ul><li>屏蔽中断</li><li>嵌套中断</li></ul></li></ul><h3 id="中断处理程序" tabindex="-1"><a class="header-anchor" href="#中断处理程序"><span>中断处理程序</span></a></h3><ul><li>测定是否有未响应的中断信号</li><li>保护被中断进程的CPU环境</li><li>转入相应的设备处理程序</li><li>中断处理</li><li>恢复CPU 的现场并退出中断</li></ul><h2 id="设备驱动程序" tabindex="-1"><a class="header-anchor" href="#设备驱动程序"><span>设备驱动程序</span></a></h2><h3 id="是i-o进程与设备控制器之间的通信程序-又由于它常以进程的形式存在-故以后就简称为设备驱动进程" tabindex="-1"><a class="header-anchor" href="#是i-o进程与设备控制器之间的通信程序-又由于它常以进程的形式存在-故以后就简称为设备驱动进程"><span>是I/O进程与设备控制器之间的通信程序，又由于它常以进程的形式存在，故以后就简称为设备驱动进程</span></a></h3><h3 id="主要任务是接受来自它上一层的与设备无关软件的抽象请求-并执行这个请求。" tabindex="-1"><a class="header-anchor" href="#主要任务是接受来自它上一层的与设备无关软件的抽象请求-并执行这个请求。"><span>主要任务是接受来自它上一层的与设备无关软件的抽象请求，并执行这个请求。</span></a></h3><h3 id="功能" tabindex="-1"><a class="header-anchor" href="#功能"><span>功能</span></a></h3><ul><li><ol><li>接收由I/O进程发来的命令和参数， 并将命令中的抽象要求转换为具体要求。例如，将磁盘块号转换为磁盘的盘面、 磁道号及扇区号。</li></ol></li><li><ol start="2"><li>检查用户I/O请求的合法性，了解I/O设备的状态，传递有关参数，设置设备的工作方式。</li></ol></li><li><ol start="3"><li>发出I/O命令，如果设备空闲，便立即启动I/O设备去完成指定的I/O操作；如果设备处于忙碌状态，则将请求者的请求块挂在设备队列上等待。</li></ol></li><li><ol start="4"><li>及时响应由控制器或通道发来的中断请求，并根据其中断类型调用相应的中断处理程序进行处理。</li></ol></li><li><ol start="5"><li>对于设置有通道的计算机系统，驱动程序还应能够根据用户的I/O请求，自动地构成通道程序。</li></ol></li></ul><h3 id="设备驱动程序的处理过程" tabindex="-1"><a class="header-anchor" href="#设备驱动程序的处理过程"><span>设备驱动程序的处理过程</span></a></h3><ul><li>将用户和上层软件对设备控制的抽象要求转换成对设备的具体要求，如对抽象要求的盘块号转换为磁盘的盘面、磁道及扇区。</li><li>检查I/O请求的合理性。</li><li>读出和检查设备的状态，确保设备处于就绪态。</li><li>传送必要的参数，如传送的字节数，数据在主存的首址等。</li><li>工作方式的设置。</li><li>启动I/O设备，并检查启动是否成功，如成功则将控制返回给I/O控制系统，在I/O设备忙于传送数据时，该用户进程把自己阻塞，直至中断到来才将它唤醒，而CPU可干别的事。</li></ul><h3 id="对i-o设备的控制方式" tabindex="-1"><a class="header-anchor" href="#对i-o设备的控制方式"><span>对I/O设备的控制方式</span></a></h3><ul><li>I/O控制的宗旨 <ul><li>减少CPU对I/O控制的干预</li><li>充分利用CPU完成数据处理工作</li></ul></li><li>I/O 控制方式 <ul><li>轮询的可编程I/O方式</li><li>中断驱动I/O方式</li><li>DMA控制方式</li><li>I/O通道控制方式</li></ul></li></ul><h3 id="dma控制器组成" tabindex="-1"><a class="header-anchor" href="#dma控制器组成"><span>DMA控制器组成</span></a></h3><ul><li>主机与DMA控制器的接口</li><li>DMA控制器与块设备的接口</li><li>I/O控制逻辑</li></ul><h2 id="与设备无关的i-o软件" tabindex="-1"><a class="header-anchor" href="#与设备无关的i-o软件"><span>与设备无关的I/O软件</span></a></h2><h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h3><ul><li>含义： 应用程序独立于具体使用的物理设备。</li><li>驱动程序是一个与硬件(或设备)紧密相关的软件。为实现设备独立性，须在驱动程序上设置一层软件，称为设备独立性软件。</li><li>设备独立性(Device Independence)的优点 <ul><li>以物理设备名使用设备</li><li>引入了逻辑设备名</li><li>逻辑设备名称到物理设备名称的转换（易于实现I/O重定向）</li></ul></li></ul><h3 id="与设备无关的软件" tabindex="-1"><a class="header-anchor" href="#与设备无关的软件"><span>与设备无关的软件</span></a></h3><ul><li>设备驱动程序的统一接口</li><li>缓存管理</li><li>差错控制</li><li>对独立设备的分配与回收</li><li>独立于设备的逻辑数据块</li></ul><h3 id="设备分配中的数据结构" tabindex="-1"><a class="header-anchor" href="#设备分配中的数据结构"><span>设备分配中的数据结构</span></a></h3><ul><li>设备控制表DCT</li><li>控制器控制表COCT</li><li>通道控制表CHCT</li><li>显然，在有通道的系统中，一个进程只有获得了通道，控制器和所需设备三者之后，才具备了进行I/O操作的物理条件</li><li>系统设备表SDT</li><li>逻辑设备表LUT</li><li>分配的流程，从资源多的到资源紧张的:LUT-&gt;SDT-&gt;DCT-&gt;COCT-&gt;CHCT</li><li>在申请设备的过程中，根据用户请求的I/O设备的逻辑名，查找逻辑设备和物理设备的映射表；以物理设备为索引，查找SDT，找到该设备所连接的DCT；继续查找与该设备连接的COCT和CHCT，就找到了一条通路。</li></ul><h2 id="用户层的i-o软件" tabindex="-1"><a class="header-anchor" href="#用户层的i-o软件"><span>用户层的I/O软件</span></a></h2><h3 id="系统调用与库函数" tabindex="-1"><a class="header-anchor" href="#系统调用与库函数"><span>系统调用与库函数</span></a></h3><ul><li>OS向用户提供的所有功能，用户进程都必须通过系统调用来获取</li><li>在C语言以及UNIX系统中，系统调用（如read）与各系统调用所使用的库函数（如read）之间几乎是一一对应的。而微软的叫Win32API</li></ul><h3 id="假脱机系统-spooling" tabindex="-1"><a class="header-anchor" href="#假脱机系统-spooling"><span>假脱机系统（spooling）</span></a></h3><ul><li>spooling技术是对脱机输入/输出系统的模拟</li><li>主要组成 <ul><li>输入/输出井</li><li>输入/输出缓冲区</li><li>输入/输出进程</li><li>井管理程序</li></ul></li><li>特点（体现操作系统的虚拟性） <ul><li>提高了I/O的速度 <ul><li>对数据所进行的I/O操作，已从对低速设备演变为对输入井或输出井中的数据存取。</li></ul></li><li>将独占设备改造为共享设备 <ul><li>实际分给用户进程的不是打印设备，而是共享输出井中的存储区域</li></ul></li><li>实现了虚拟设备功能 <ul><li>将独占设备变成多台独占的虚拟设备。</li></ul></li></ul></li></ul><h2 id="缓冲区管理" tabindex="-1"><a class="header-anchor" href="#缓冲区管理"><span>缓冲区管理</span></a></h2><h3 id="缓冲的引入-原因" tabindex="-1"><a class="header-anchor" href="#缓冲的引入-原因"><span>缓冲的引入（原因）</span></a></h3><ul><li>缓和CPU与I/O设备间速度不匹配的矛盾</li><li>减少对CPU的中断频率，放宽对CPU中断响应时间的限制</li><li>提高CPU和I/O设备之间的并行性</li><li>解决数据粒度不匹配的问题</li></ul><h3 id="单缓冲区" tabindex="-1"><a class="header-anchor" href="#单缓冲区"><span>单缓冲区</span></a></h3><ul><li>即在CPU计算的时候，将数据数据输入到缓冲区(大小取决与T和C的大小)</li></ul><h3 id="双缓冲区" tabindex="-1"><a class="header-anchor" href="#双缓冲区"><span>双缓冲区</span></a></h3><ul><li>即允许CPU连续工作（T不断）</li></ul><h3 id="环形缓冲区-专为生产者和消费者打造" tabindex="-1"><a class="header-anchor" href="#环形缓冲区-专为生产者和消费者打造"><span>环形缓冲区（专为生产者和消费者打造）</span></a></h3><ul><li>组成 <ul><li>多个缓冲区</li><li>多个指针</li></ul></li><li>使用 <ul><li>Getbuf过程</li><li>Releasebuf过程</li></ul></li><li>同步问题</li></ul><h3 id="缓冲池-理解为更大的缓冲区" tabindex="-1"><a class="header-anchor" href="#缓冲池-理解为更大的缓冲区"><span>缓冲池(理解为更大的缓冲区)</span></a></h3><ul><li>组成 <ul><li>空白缓冲队列（emq） <ul><li>由空缓冲区链接而成F(emq)，L(emq)分别指向该队列首尾缓冲区</li></ul></li><li>输入队列（inq） <ul><li>由装满输入数据的缓冲区链接而成F(inq)，L(inq)分别指向该队列首尾缓冲区</li></ul></li><li>输出队列（outq） <ul><li>由装满输出数据的缓冲区链接而成F(outq)， L(outq)分别指向该队列首尾缓冲</li></ul></li></ul></li><li>Getbuf和Putbuf过程 <ul><li>收容：缓冲池接收外界数据</li><li>提取：外界从缓冲池获得数据</li></ul></li><li>缓冲区工作方式（从缓冲区的角度来看） <ul><li>收容输入</li><li>提取输入</li><li>收容输出</li><li>提取输出</li></ul></li></ul><h2 id="磁盘存储器的性能和调度" tabindex="-1"><a class="header-anchor" href="#磁盘存储器的性能和调度"><span>磁盘存储器的性能和调度</span></a></h2><h3 id="数据的组织和格式" tabindex="-1"><a class="header-anchor" href="#数据的组织和格式"><span>数据的组织和格式</span></a></h3><h3 id="磁盘的类型" tabindex="-1"><a class="header-anchor" href="#磁盘的类型"><span>磁盘的类型</span></a></h3><ul><li>固定头磁盘（贵）</li><li>移动头磁盘</li></ul><h3 id="磁盘访问的时间-关键" tabindex="-1"><a class="header-anchor" href="#磁盘访问的时间-关键"><span>磁盘访问的时间（关键）</span></a></h3><ul><li>寻道时间Ts=m*n+s</li><li>旋转延迟时间Tr</li><li>传输时间Tt=b/rN</li><li>总时间Ta=Ts+1/2r+b/rN</li></ul><h3 id="磁盘的调度算法-掌握图表" tabindex="-1"><a class="header-anchor" href="#磁盘的调度算法-掌握图表"><span>磁盘的调度算法（掌握图表）</span></a></h3><ul><li>先来先服务（FCFS） <ul><li>优点：公平，简单</li><li>缺点：可能导致某些进程的请求长期得不到满足</li></ul></li><li>最短寻道时间优先（SSTF） <ul><li>说明：要求访问的磁道和当前磁头所在的磁道距离最近，以使每次的寻道时间最短</li></ul></li><li>扫描算法（SCAN） <ul><li>扫描算法不仅考虑到欲访问的磁道与当前磁道间的距离，更优先考虑的是磁道当前的移动方向</li><li>联想电梯的运行</li><li>可防止低优先级进程出现“饥饿”的现象</li></ul></li><li>循环扫描算法（CSCAN） <ul><li>算法规定磁头单向移动，例如，只是自里向外移动，当磁头移到最外的磁道并访问后，磁头立即返回到最里的欲访问磁道，亦即将最小磁道号紧接着最大磁道号构成循环，进行循环扫描</li></ul></li><li>NStepScan算法 <ul><li>N步SCAN算法是将磁盘请求队列分成若干个长度为N的子队列，磁盘调度将按FCFS算法依次这些子队列。</li></ul></li><li>FSCAN算法 <ul><li>是Nstepscan算法的简化，将磁盘请求队列分成两个子队列</li></ul></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/第六章 输入输出系统.png" alt="第六章 输入输出系统" tabindex="0" loading="lazy"><figcaption>第六章 输入输出系统</figcaption></figure>',70)]))}const u=i(t,[["render",s],["__file","第六章 输入输出系统.html.vue"]]),o=JSON.parse('{"path":"/posts/Computer-Basics/Operating-System/%E7%AC%AC%E5%85%AD%E7%AB%A0%20%E8%BE%93%E5%85%A5%E8%BE%93%E5%87%BA%E7%B3%BB%E7%BB%9F.html","title":"7、输入输出系统","lang":"zh-CN","frontmatter":{"title":"7、输入输出系统","date":"2024-01-01 12:56","category":["操作系统"],"tag":["操作系统"],"description":"第六章：输入输出系统 I/O系统的功能，模型和接口 I/O系统管理的对象是I/O设备和相应的设备控制器。 I/O系统的基本功能 隐藏物理设备的细节 与设备的无关性 提高处理机和I/O设备的利用率 对I/O设备进行控制 确保对设备的正确共享 错误处理 I/O软件的层次结构 用户层I/O软件 设备独立性软件 设备驱动程序（厂家开发） 中断处理程序 硬件 I...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Computer-Basics/Operating-System/%E7%AC%AC%E5%85%AD%E7%AB%A0%20%E8%BE%93%E5%85%A5%E8%BE%93%E5%87%BA%E7%B3%BB%E7%BB%9F.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"7、输入输出系统"}],["meta",{"property":"og:description","content":"第六章：输入输出系统 I/O系统的功能，模型和接口 I/O系统管理的对象是I/O设备和相应的设备控制器。 I/O系统的基本功能 隐藏物理设备的细节 与设备的无关性 提高处理机和I/O设备的利用率 对I/O设备进行控制 确保对设备的正确共享 错误处理 I/O软件的层次结构 用户层I/O软件 设备独立性软件 设备驱动程序（厂家开发） 中断处理程序 硬件 I..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/第六章%20输入输出系统.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-25T09:16:19.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"操作系统"}],["meta",{"property":"article:published_time","content":"2024-01-01T12:56:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-25T09:16:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7、输入输出系统\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/第六章%20输入输出系统.png\\"],\\"datePublished\\":\\"2024-01-01T12:56:00.000Z\\",\\"dateModified\\":\\"2024-10-25T09:16:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"I/O系统的功能，模型和接口","slug":"i-o系统的功能-模型和接口","link":"#i-o系统的功能-模型和接口","children":[{"level":3,"title":"I/O系统管理的对象是I/O设备和相应的设备控制器。","slug":"i-o系统管理的对象是i-o设备和相应的设备控制器。","link":"#i-o系统管理的对象是i-o设备和相应的设备控制器。","children":[]},{"level":3,"title":"I/O系统的基本功能","slug":"i-o系统的基本功能","link":"#i-o系统的基本功能","children":[]},{"level":3,"title":"I/O软件的层次结构","slug":"i-o软件的层次结构","link":"#i-o软件的层次结构","children":[]},{"level":3,"title":"I/O系统的分层","slug":"i-o系统的分层","link":"#i-o系统的分层","children":[]},{"level":3,"title":"I/O系统接口","slug":"i-o系统接口","link":"#i-o系统接口","children":[]}]},{"level":2,"title":"I/O设备和设备控制器","slug":"i-o设备和设备控制器","link":"#i-o设备和设备控制器","children":[{"level":3,"title":"分类","slug":"分类","link":"#分类","children":[]},{"level":3,"title":"设备并不是直接与CPU进行通信，而是与设备控制器通信。在设备与设备控制器之间应该有一个接口。","slug":"设备并不是直接与cpu进行通信-而是与设备控制器通信。在设备与设备控制器之间应该有一个接口。","link":"#设备并不是直接与cpu进行通信-而是与设备控制器通信。在设备与设备控制器之间应该有一个接口。","children":[]},{"level":3,"title":"设备控制器","slug":"设备控制器","link":"#设备控制器","children":[]},{"level":3,"title":"内存映像I/O","slug":"内存映像i-o","link":"#内存映像i-o","children":[]},{"level":3,"title":"I/O通道","slug":"i-o通道","link":"#i-o通道","children":[]}]},{"level":2,"title":"中断机构和中断处理程序","slug":"中断机构和中断处理程序","link":"#中断机构和中断处理程序","children":[{"level":3,"title":"中断","slug":"中断","link":"#中断","children":[]},{"level":3,"title":"中断处理程序","slug":"中断处理程序","link":"#中断处理程序","children":[]}]},{"level":2,"title":"设备驱动程序","slug":"设备驱动程序","link":"#设备驱动程序","children":[{"level":3,"title":"是I/O进程与设备控制器之间的通信程序，又由于它常以进程的形式存在，故以后就简称为设备驱动进程","slug":"是i-o进程与设备控制器之间的通信程序-又由于它常以进程的形式存在-故以后就简称为设备驱动进程","link":"#是i-o进程与设备控制器之间的通信程序-又由于它常以进程的形式存在-故以后就简称为设备驱动进程","children":[]},{"level":3,"title":"主要任务是接受来自它上一层的与设备无关软件的抽象请求，并执行这个请求。","slug":"主要任务是接受来自它上一层的与设备无关软件的抽象请求-并执行这个请求。","link":"#主要任务是接受来自它上一层的与设备无关软件的抽象请求-并执行这个请求。","children":[]},{"level":3,"title":"功能","slug":"功能","link":"#功能","children":[]},{"level":3,"title":"设备驱动程序的处理过程","slug":"设备驱动程序的处理过程","link":"#设备驱动程序的处理过程","children":[]},{"level":3,"title":"对I/O设备的控制方式","slug":"对i-o设备的控制方式","link":"#对i-o设备的控制方式","children":[]},{"level":3,"title":"DMA控制器组成","slug":"dma控制器组成","link":"#dma控制器组成","children":[]}]},{"level":2,"title":"与设备无关的I/O软件","slug":"与设备无关的i-o软件","link":"#与设备无关的i-o软件","children":[{"level":3,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":3,"title":"与设备无关的软件","slug":"与设备无关的软件","link":"#与设备无关的软件","children":[]},{"level":3,"title":"设备分配中的数据结构","slug":"设备分配中的数据结构","link":"#设备分配中的数据结构","children":[]}]},{"level":2,"title":"用户层的I/O软件","slug":"用户层的i-o软件","link":"#用户层的i-o软件","children":[{"level":3,"title":"系统调用与库函数","slug":"系统调用与库函数","link":"#系统调用与库函数","children":[]},{"level":3,"title":"假脱机系统（spooling）","slug":"假脱机系统-spooling","link":"#假脱机系统-spooling","children":[]}]},{"level":2,"title":"缓冲区管理","slug":"缓冲区管理","link":"#缓冲区管理","children":[{"level":3,"title":"缓冲的引入（原因）","slug":"缓冲的引入-原因","link":"#缓冲的引入-原因","children":[]},{"level":3,"title":"单缓冲区","slug":"单缓冲区","link":"#单缓冲区","children":[]},{"level":3,"title":"双缓冲区","slug":"双缓冲区","link":"#双缓冲区","children":[]},{"level":3,"title":"环形缓冲区（专为生产者和消费者打造）","slug":"环形缓冲区-专为生产者和消费者打造","link":"#环形缓冲区-专为生产者和消费者打造","children":[]},{"level":3,"title":"缓冲池(理解为更大的缓冲区)","slug":"缓冲池-理解为更大的缓冲区","link":"#缓冲池-理解为更大的缓冲区","children":[]}]},{"level":2,"title":"磁盘存储器的性能和调度","slug":"磁盘存储器的性能和调度","link":"#磁盘存储器的性能和调度","children":[{"level":3,"title":"数据的组织和格式","slug":"数据的组织和格式","link":"#数据的组织和格式","children":[]},{"level":3,"title":"磁盘的类型","slug":"磁盘的类型","link":"#磁盘的类型","children":[]},{"level":3,"title":"磁盘访问的时间（关键）","slug":"磁盘访问的时间-关键","link":"#磁盘访问的时间-关键","children":[]},{"level":3,"title":"磁盘的调度算法（掌握图表）","slug":"磁盘的调度算法-掌握图表","link":"#磁盘的调度算法-掌握图表","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729847779000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":2}]},"readingTime":{"minutes":11.36,"words":3407},"filePathRelative":"posts/Computer-Basics/Operating-System/第六章 输入输出系统.md","localizedDate":"2024年1月1日","excerpt":"\\n<h2>I/O系统的功能，模型和接口</h2>\\n<h3>I/O系统管理的对象是I/O设备和相应的设备控制器。</h3>\\n<h3>I/O系统的基本功能</h3>\\n<ul>\\n<li>隐藏物理设备的细节</li>\\n<li>与设备的无关性</li>\\n<li>提高处理机和I/O设备的利用率</li>\\n<li>对I/O设备进行控制</li>\\n<li>确保对设备的正确共享</li>\\n<li>错误处理</li>\\n</ul>\\n<h3>I/O软件的层次结构</h3>\\n<ul>\\n<li>用户层I/O软件</li>\\n<li>设备独立性软件</li>\\n<li>设备驱动程序（厂家开发）</li>\\n<li>中断处理程序</li>\\n<li>硬件</li>\\n</ul>","autoDesc":true}');export{u as comp,o as data};
