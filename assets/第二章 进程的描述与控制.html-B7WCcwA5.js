import{_ as i,c as e,a,o as n}from"./app-B1yAKrtW.js";const t={};function u(r,l){return n(),e("div",null,l[0]||(l[0]=[a('<h1 id="第二章进程的描述与控制" tabindex="-1"><a class="header-anchor" href="#第二章进程的描述与控制"><span>第二章进程的描述与控制</span></a></h1><h2 id="程序并发执行" tabindex="-1"><a class="header-anchor" href="#程序并发执行"><span>程序并发执行</span></a></h2><h3 id="程序并发执行时的特征" tabindex="-1"><a class="header-anchor" href="#程序并发执行时的特征"><span>程序并发执行时的特征</span></a></h3><ul><li>间断性</li><li>失去封闭性</li><li>不可再现性</li></ul><h2 id="进程的描述" tabindex="-1"><a class="header-anchor" href="#进程的描述"><span>进程的描述</span></a></h2><h3 id="进程的定义" tabindex="-1"><a class="header-anchor" href="#进程的定义"><span>进程的定义</span></a></h3><ul><li>进程是程序的一次执行</li><li>进程是一个程序及其数据在处理机上顺序执行时所发生的活动</li><li>进程是具有独立功能的程序在一个数据集合上运行的过程，它是系统进行资源分配和调度的一个独立单位</li></ul><h3 id="进程的特征" tabindex="-1"><a class="header-anchor" href="#进程的特征"><span>进程的特征</span></a></h3><ul><li>动态性</li><li>并发性</li><li>独立性</li><li>异步性</li></ul><h3 id="从操作系统角度分类" tabindex="-1"><a class="header-anchor" href="#从操作系统角度分类"><span>从操作系统角度分类</span></a></h3><ul><li>系统进程</li><li>用户进程</li></ul><h3 id="进程和程序的区别" tabindex="-1"><a class="header-anchor" href="#进程和程序的区别"><span>进程和程序的区别</span></a></h3><ul><li>进程是动态概念，而程序则是静态概念</li><li>程序是指令的有序集合，永远存在；进程强调是程序在数据集上的一次执行，有创建有撤销，存在是暂时的；</li><li>进程具有并发性，而程序没有</li><li>进程可创建其他进程，而程序并不能形成新的程序</li><li>进程是竞争计算机资源的基本单位，程序不是</li></ul><h3 id="进程和程序的联系" tabindex="-1"><a class="header-anchor" href="#进程和程序的联系"><span>进程和程序的联系</span></a></h3><ul><li>进程是程序在数据集上的一次执行</li><li>程序是构成进程的组成部分，一个程序可对应多个进程，一个进程可包括多个程序</li><li>进程的运行目标是执行所对应的程序</li><li>从静态看，进程由程序、数据和进程控制块（PCB）组成</li></ul><h3 id="进程的基本状态及转换" tabindex="-1"><a class="header-anchor" href="#进程的基本状态及转换"><span>进程的基本状态及转换</span></a></h3><ul><li>进程的三种基本状态 <ul><li>就绪状态ready</li><li>执行状态running</li><li>阻塞状态block</li></ul></li><li>三种基本状态的转换</li><li>创建状态和终止状态 <ul><li>五状态进程模型</li></ul></li><li>注意 <ul><li>阻塞态-&gt;运行态和就绪态-&gt;阻塞态这二种状态转换不可能发生</li></ul></li></ul><h3 id="挂起操作和进程状态的转换" tabindex="-1"><a class="header-anchor" href="#挂起操作和进程状态的转换"><span>挂起操作和进程状态的转换</span></a></h3><ul><li>挂起和阻塞的区别</li><li>挂起操作的目的 <ul><li>终端用户的需要: 修改、检查进程</li><li>父进程的需要：修改、协调子进程</li><li>对换的需要：缓和内存</li><li>负荷调节的需要：保证实时任务的执行</li></ul></li><li>关键图</li></ul><h3 id="进程管理中的数据结构" tabindex="-1"><a class="header-anchor" href="#进程管理中的数据结构"><span>进程管理中的数据结构</span></a></h3><ul><li>进程控制块PCB的作用 <ul><li>作为独立运行基本单位的标志</li><li>能实现间断性运行方式</li><li>提供进程管理所需要的信息</li><li>提供进程调度所需要的信息</li><li>实现与其他进程的同步与通信</li></ul></li><li>进程控制块的信息 <ul><li>进程标识符 <ul><li>外部标识符PID</li><li>内部标识符(端口)</li></ul></li><li>处理机状态 <ul><li>通用寄存器</li><li>指令计数器</li><li>程序状态字PSW</li><li>用户栈指针</li></ul></li><li>进程调度信息 <ul><li>进程状态</li><li>进程优先级</li><li>进程调度所需的其他信息</li><li>事件</li></ul></li><li>进程控制信息 <ul><li>程序和数据的地址</li><li>进程同步和通信机制</li><li>资源清单</li><li>链接指针</li></ul></li><li>进程控制块的组织方式 <ul><li>线性方式</li><li>链接方式</li><li>索引方式</li></ul></li></ul></li></ul><h2 id="进程控制" tabindex="-1"><a class="header-anchor" href="#进程控制"><span>进程控制</span></a></h2><h3 id="操作系统内核" tabindex="-1"><a class="header-anchor" href="#操作系统内核"><span>操作系统内核</span></a></h3><ul><li>两大功能 <ul><li>支撑功能 <ul><li>中断管理</li><li>时钟管理</li><li>原语操作 <ul><li>进程的管理，由若干原语（primitive）来执行</li></ul></li></ul></li><li>资源管理功能 <ul><li>进程管理</li><li>存储器管理</li><li>设备管理</li></ul></li></ul></li><li>状态 <ul><li>系统态，管态，内核态</li><li>用户态，目态</li></ul></li></ul><h3 id="进程的创建" tabindex="-1"><a class="header-anchor" href="#进程的创建"><span>进程的创建</span></a></h3><ul><li>进程的层次结构 <ul><li>父进程</li><li>子进程</li></ul></li><li>引起创建进程的事件 <ul><li>用户登录</li><li>作业调度</li><li>提供服务</li><li>应用请求</li></ul></li><li>进程的创建过程 <ul><li>1.申请空白PCB</li><li>2.为新进程分配其运行所需的资源</li><li>3.初始化进程块PCB</li><li>4.如果进程就绪队列能够接纳新进程，便将新进程插入就绪队列</li></ul></li><li>进程的终止 <ul><li>引起进程终止的事件 <ul><li>1.正常结束</li><li>2.异常结束</li><li>3.外界干预</li></ul></li><li>进程的终止过程 <ul><li>1.根据被终止进程的标识符</li></ul></li></ul></li><li>进程的阻塞与唤醒 <ul><li>引起进程阻塞和唤醒的事件 <ul><li>请求系统服务而未满足</li><li>启动某种操作而阻塞当前进程</li><li>新数据尚未到达</li><li>无新工作可做：系统进程</li></ul></li><li>进程阻塞过程(自己阻塞自己)</li><li>进程唤醒过程(系统或其他进程唤醒自己)</li></ul></li><li>进程的挂起与激活 <ul><li>suspend</li><li>active</li></ul></li></ul><h3 id="进程同步" tabindex="-1"><a class="header-anchor" href="#进程同步"><span>进程同步</span></a></h3><ul><li>基本概念 <ul><li>两种形式的制约关系 <ul><li>间接相互制约关系 <ul><li>互斥——竞争</li></ul></li><li>直接相互制约关系 <ul><li>同步——协作</li></ul></li></ul></li><li>临界资源</li><li>分区 <ul><li>进入区enter section</li><li>临界区critical section</li><li>退出区exit section</li><li>剩余区remainder section</li></ul></li><li>同步机制应遵循的规则 <ul><li>1.空闲让进</li><li>2.忙则等待</li><li>3.有限等待</li><li>4.让权等待</li></ul></li></ul></li><li>进程同步机制 <ul><li>软件同步机制:都没有解决让权等待，而且部分方法还会产生死锁的情况</li><li>硬件同步机制 <ul><li>关中断</li><li>利用Test-and-Set指令实现互斥</li><li>利用swap指令实现进程互斥</li></ul></li><li>信号量机制 <ul><li>整型信号量</li><li>记录型信号量 <ul><li>由于整型信号量没有遵循让权等待原则，记录型允许负数，即阻塞链表</li></ul></li><li>AND型信号量</li><li>信号量集 <ul><li>理解:AND型号量的wait和signal仅能对信号施以加1或减1操作，意味着每次只能对某类临界资源进行一个单位的申请或释放。当一次需要N个单位时，便要进行N次wait操作，这显然是低效的，甚至会增加死锁的概率。此外，在有些情况下，为确保系统的安全性，当所申请的资源数量低于某一下限值时，还必须进行管制，不予以分配。因此，当进程申请某类临界资源时，在每次分配前，都必须测试资源数量，判断是否大于可分配的下限值，决定是否予以分配</li><li>操作 <ul><li>Swait(S1，t1，d1…Sn，tn，dn)</li><li>Ssignal(S1，d1…Sn，dn)</li></ul></li><li>特殊情况</li></ul></li></ul></li></ul></li><li>经典进程的同步问题 <ul><li>生产者–消费者问题</li><li>哲学家进餐问题</li><li>读者–写者问题</li></ul></li></ul><h2 id="进程通信" tabindex="-1"><a class="header-anchor" href="#进程通信"><span>进程通信</span></a></h2><h3 id="进程通信是指进程之间的信息交换-又称低级进程通信" tabindex="-1"><a class="header-anchor" href="#进程通信是指进程之间的信息交换-又称低级进程通信"><span>进程通信是指进程之间的信息交换，又称低级进程通信</span></a></h3><h3 id="进程通信的类型" tabindex="-1"><a class="header-anchor" href="#进程通信的类型"><span>进程通信的类型</span></a></h3><ul><li>共享存储器系统 <ul><li>基于共享数据结构的通信方式 <ul><li>生产者和消费者</li></ul></li><li>基于共享存储区的通信方式 <ul><li>高级通信</li></ul></li></ul></li><li>管道通信系统(pipe) <ul><li>高级通信</li></ul></li><li>消息传递系统 <ul><li>高级通信</li><li>方式分类 <ul><li>直接通信</li><li>间接通信</li></ul></li></ul></li><li>客服机–服务器系统</li></ul><h3 id="消息传递通信的实现方式" tabindex="-1"><a class="header-anchor" href="#消息传递通信的实现方式"><span>消息传递通信的实现方式</span></a></h3><ul><li>直接消息传递系统</li><li>信箱通信</li></ul><h2 id="线程的基本概念" tabindex="-1"><a class="header-anchor" href="#线程的基本概念"><span>线程的基本概念</span></a></h2><h3 id="线程的引入" tabindex="-1"><a class="header-anchor" href="#线程的引入"><span>线程的引入</span></a></h3><ul><li>线程的引入正是为了简化线程间的通信，以小的开销来提高进程内的并发程度</li><li>多线程并发的不足 <ul><li>进程的两个基本属性 <ul><li>一个拥有资源的独立单位，可独立分配系统资源</li><li>一个可独立调度和分派的基本单位，PCB</li></ul></li><li>程序并发执行所需付出的时空开销 <ul><li>创建进程</li><li>撤销进程</li><li>进程切换</li></ul></li><li>进程间通信效率低</li><li>将分配资源和调度两个属性分开</li></ul></li><li>线程——作为调度和分派的基本单位 <ul><li>进程是系统资源分配的单位，线程是处理器调度的单位</li><li>线程表示进程的一个控制点，可以执行一系列的指令。通常，和应用程序的一个函数相对应</li><li>进程分解为线程还可以有效利用多处理器和多核计算机</li></ul></li></ul><h3 id="线程与进程的比较" tabindex="-1"><a class="header-anchor" href="#线程与进程的比较"><span>线程与进程的比较</span></a></h3><ul><li>不同点 <ul><li>调度的基本单位</li><li>并发性</li></ul></li><li>相似点 <ul><li>状态：运行、阻塞、就绪</li><li>线程具有一定的生命期</li><li>进程可创建线程，一个线程可创建另一个子线程</li><li>多个线程并发执行时仍然存在互斥与同步</li></ul></li></ul><h3 id="线程的实现" tabindex="-1"><a class="header-anchor" href="#线程的实现"><span>线程的实现</span></a></h3><ul><li>线程的实现方式 <ul><li>内核支持线程KST</li><li>用户级线程ULT</li><li>组合方式</li></ul></li><li>多线程OS中的进程属性 <ul><li>进程是一个可拥有资源的基本单位</li><li>多个线程可并发执行</li><li>进程已不是可执行的实体</li></ul></li><li>线程的状态和线程控制块 <ul><li>线程运行的三个状态 <ul><li>执行状态</li><li>就绪状态</li><li>阻塞状态</li></ul></li><li>线程控制块TCB</li></ul></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/第二章 进程的描述与控制.png" alt="第二章 进程的描述与控制" tabindex="0" loading="lazy"><figcaption>第二章 进程的描述与控制</figcaption></figure>',42)]))}const h=i(t,[["render",u],["__file","第二章 进程的描述与控制.html.vue"]]),c=JSON.parse('{"path":"/posts/Computer-Basics/Operating-System/%E7%AC%AC%E4%BA%8C%E7%AB%A0%20%E8%BF%9B%E7%A8%8B%E7%9A%84%E6%8F%8F%E8%BF%B0%E4%B8%8E%E6%8E%A7%E5%88%B6.html","title":"3、进程的描述与控制","lang":"zh-CN","frontmatter":{"title":"3、进程的描述与控制","date":"2024-01-01 09:56","category":["操作系统"],"tag":["操作系统"],"description":"第二章进程的描述与控制 程序并发执行 程序并发执行时的特征 间断性 失去封闭性 不可再现性 进程的描述 进程的定义 进程是程序的一次执行 进程是一个程序及其数据在处理机上顺序执行时所发生的活动 进程是具有独立功能的程序在一个数据集合上运行的过程，它是系统进行资源分配和调度的一个独立单位 进程的特征 动态性 并发性 独立性 异步性 从操作系统角度分类 系...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Computer-Basics/Operating-System/%E7%AC%AC%E4%BA%8C%E7%AB%A0%20%E8%BF%9B%E7%A8%8B%E7%9A%84%E6%8F%8F%E8%BF%B0%E4%B8%8E%E6%8E%A7%E5%88%B6.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"3、进程的描述与控制"}],["meta",{"property":"og:description","content":"第二章进程的描述与控制 程序并发执行 程序并发执行时的特征 间断性 失去封闭性 不可再现性 进程的描述 进程的定义 进程是程序的一次执行 进程是一个程序及其数据在处理机上顺序执行时所发生的活动 进程是具有独立功能的程序在一个数据集合上运行的过程，它是系统进行资源分配和调度的一个独立单位 进程的特征 动态性 并发性 独立性 异步性 从操作系统角度分类 系..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/第二章%20进程的描述与控制.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-25T09:16:19.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"操作系统"}],["meta",{"property":"article:published_time","content":"2024-01-01T09:56:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-25T09:16:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3、进程的描述与控制\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/第二章%20进程的描述与控制.png\\"],\\"datePublished\\":\\"2024-01-01T09:56:00.000Z\\",\\"dateModified\\":\\"2024-10-25T09:16:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"程序并发执行","slug":"程序并发执行","link":"#程序并发执行","children":[{"level":3,"title":"程序并发执行时的特征","slug":"程序并发执行时的特征","link":"#程序并发执行时的特征","children":[]}]},{"level":2,"title":"进程的描述","slug":"进程的描述","link":"#进程的描述","children":[{"level":3,"title":"进程的定义","slug":"进程的定义","link":"#进程的定义","children":[]},{"level":3,"title":"进程的特征","slug":"进程的特征","link":"#进程的特征","children":[]},{"level":3,"title":"从操作系统角度分类","slug":"从操作系统角度分类","link":"#从操作系统角度分类","children":[]},{"level":3,"title":"进程和程序的区别","slug":"进程和程序的区别","link":"#进程和程序的区别","children":[]},{"level":3,"title":"进程和程序的联系","slug":"进程和程序的联系","link":"#进程和程序的联系","children":[]},{"level":3,"title":"进程的基本状态及转换","slug":"进程的基本状态及转换","link":"#进程的基本状态及转换","children":[]},{"level":3,"title":"挂起操作和进程状态的转换","slug":"挂起操作和进程状态的转换","link":"#挂起操作和进程状态的转换","children":[]},{"level":3,"title":"进程管理中的数据结构","slug":"进程管理中的数据结构","link":"#进程管理中的数据结构","children":[]}]},{"level":2,"title":"进程控制","slug":"进程控制","link":"#进程控制","children":[{"level":3,"title":"操作系统内核","slug":"操作系统内核","link":"#操作系统内核","children":[]},{"level":3,"title":"进程的创建","slug":"进程的创建","link":"#进程的创建","children":[]},{"level":3,"title":"进程同步","slug":"进程同步","link":"#进程同步","children":[]}]},{"level":2,"title":"进程通信","slug":"进程通信","link":"#进程通信","children":[{"level":3,"title":"进程通信是指进程之间的信息交换，又称低级进程通信","slug":"进程通信是指进程之间的信息交换-又称低级进程通信","link":"#进程通信是指进程之间的信息交换-又称低级进程通信","children":[]},{"level":3,"title":"进程通信的类型","slug":"进程通信的类型","link":"#进程通信的类型","children":[]},{"level":3,"title":"消息传递通信的实现方式","slug":"消息传递通信的实现方式","link":"#消息传递通信的实现方式","children":[]}]},{"level":2,"title":"线程的基本概念","slug":"线程的基本概念","link":"#线程的基本概念","children":[{"level":3,"title":"线程的引入","slug":"线程的引入","link":"#线程的引入","children":[]},{"level":3,"title":"线程与进程的比较","slug":"线程与进程的比较","link":"#线程与进程的比较","children":[]},{"level":3,"title":"线程的实现","slug":"线程的实现","link":"#线程的实现","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729847779000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":2}]},"readingTime":{"minutes":7.22,"words":2166},"filePathRelative":"posts/Computer-Basics/Operating-System/第二章 进程的描述与控制.md","localizedDate":"2024年1月1日","excerpt":"\\n<h2>程序并发执行</h2>\\n<h3>程序并发执行时的特征</h3>\\n<ul>\\n<li>间断性</li>\\n<li>失去封闭性</li>\\n<li>不可再现性</li>\\n</ul>\\n<h2>进程的描述</h2>\\n<h3>进程的定义</h3>\\n<ul>\\n<li>进程是程序的一次执行</li>\\n<li>进程是一个程序及其数据在处理机上顺序执行时所发生的活动</li>\\n<li>进程是具有独立功能的程序在一个数据集合上运行的过程，它是系统进行资源分配和调度的一个独立单位</li>\\n</ul>\\n<h3>进程的特征</h3>\\n<ul>\\n<li>动态性</li>\\n<li>并发性</li>\\n<li>独立性</li>\\n<li>异步性</li>\\n</ul>","autoDesc":true}');export{h as comp,c as data};
