import{_ as i,c as e,a,o as t}from"./app-mWs04Xnh.js";const r={};function s(n,l){return t(),e("div",null,l[0]||(l[0]=[a('<h1 id="第三章-处理机调度与死锁" tabindex="-1"><a class="header-anchor" href="#第三章-处理机调度与死锁"><span>第三章:处理机调度与死锁</span></a></h1><h2 id="处理机调度算法的目标" tabindex="-1"><a class="header-anchor" href="#处理机调度算法的目标"><span>处理机调度算法的目标</span></a></h2><h3 id="处理机调度算法的共同目标" tabindex="-1"><a class="header-anchor" href="#处理机调度算法的共同目标"><span>处理机调度算法的共同目标</span></a></h3><ul><li>资源利用率:CPU的利用率=CPU有效工作时间/(CPU有效工作时间+CPU空闲等待时间)</li><li>公平性</li><li>平衡性</li><li>策略强制执行</li></ul><h3 id="批处理系统的目标" tabindex="-1"><a class="header-anchor" href="#批处理系统的目标"><span>批处理系统的目标</span></a></h3><ul><li>平均周转时间短</li><li>系统吞吐量高</li><li>处理机利用率高</li></ul><h3 id="分时系统的目标" tabindex="-1"><a class="header-anchor" href="#分时系统的目标"><span>分时系统的目标</span></a></h3><ul><li>响应时间快</li><li>均衡性</li></ul><h3 id="实时系统目标" tabindex="-1"><a class="header-anchor" href="#实时系统目标"><span>实时系统目标</span></a></h3><ul><li>截止时间的保证</li><li>可预测性</li></ul><h3 id="处理机调度的层次" tabindex="-1"><a class="header-anchor" href="#处理机调度的层次"><span>处理机调度的层次</span></a></h3><ul><li>高级调度（作业调度） <ul><li>分时系统无需作业调度，因为需要交互</li><li>批处理系统需要作业调度</li></ul></li><li>中级调度（和挂起有关）</li><li>低级调度（进程调度） <ul><li>进程调度是最基本的调度，任何操作系统都有进程调度。</li><li>低级调度的三个基本机制 <ul><li>排队器</li><li>分派器</li><li>上下文切换</li></ul></li><li>进程调度方式 <ul><li>非抢占方式</li><li>抢占方式 <ul><li>优先权原则</li><li>短进程优先原则</li><li>时间片原则</li></ul></li></ul></li><li>进程调度的任务 <ul><li>保存处理机的现场信息</li><li>按某种算法选取进程</li><li>把处理器分配给进程</li></ul></li><li>进程调度的算法 <ul><li>优先级调度算法 <ul><li>优先级调度算法的类型 <ul><li>非抢占式优先级调度算法 <ul><li>等当前进程执行完以后，再执行另一个优先权最高的进程</li><li>这种调度算法主要用于批处理系统中；也可用于某些对实时性要求不严的实时系统中。</li></ul></li><li>抢占式优先级调度算法 <ul><li>不等当前进程结束，直接抢处理机</li><li>常用于要求比较严格的实时系统中， 以及对性能要求较高的批处理和分时系统中。</li></ul></li></ul></li><li>优先级的类型 <ul><li>静态优先级 <ul><li>优先权是在创建进程时确定的，且在进程的整个运行期间保持不变。一般地，优先权是利用某一范围内的一个整数来表示的，例如，0<sub>7或0</sub>255中的某一整数， 又把该整数称为优先数。</li><li>可以参考BIOS系统中设置boot的优先级</li></ul></li><li>动态优先级 <ul><li>在创建进程时所赋予的优先权，是可以随进程的推进或随其等待时间的增加而改变的，以便获得更好的调度性能。</li></ul></li></ul></li></ul></li><li>轮转调度算法 <ul><li>基本原理:在轮转(RR)法中，系统根据FCFS策略，将所有的就绪进程排成一个就绪队列，并可设置每隔一定时间间隔(如30ms)即产生一次中断，激活系统中的进程调度程序，完成一次调度，将CPU分配给队首进程，令其执行</li><li>进程切换时机 <ul><li>时间片未用完，进程完成</li><li>时间片到，进程未完成</li></ul></li><li>时间片大小的确定 <ul><li>太小利于短作业，增加系统切换开销</li><li>太长就退化为FCFS算法</li><li>一般选择: q略大于一次交互所需要的时间，使大多数进程在一个时间片内完成</li></ul></li><li>一般来说，平均周转时间将比SJF长，但是有较好的响应时间</li></ul></li><li>多队列调度算法</li><li>多级反馈队列调度算法 <ul><li>调度机制 <ul><li>设置多个就绪队列</li><li>每个队列都采用FCFS算法</li><li>按照队列优先级调度，在第n队列中采取按时间片轮转的方式运行</li></ul></li><li>调度算法的性能 <ul><li>对于终端型用户，由于作业小，感觉满意</li><li>对于短批处理作业用户，周转时间也较小</li><li>长批处理作业用户，也能够得到执行</li></ul></li></ul></li><li>基于公平原则的调度算法 <ul><li>保证调度算法</li><li>公平分享调度算法</li></ul></li></ul></li></ul></li></ul><h2 id="作业与作业调度" tabindex="-1"><a class="header-anchor" href="#作业与作业调度"><span>作业与作业调度</span></a></h2><h3 id="作业" tabindex="-1"><a class="header-anchor" href="#作业"><span>作业</span></a></h3><ul><li>作业不仅包含程序和数据，还配有一份作业说明书，系统根据说明书对程序的运行进行控制。批处理系统是以作业为单位从外存掉入内存的。</li></ul><h3 id="作业控制块jcb" tabindex="-1"><a class="header-anchor" href="#作业控制块jcb"><span>作业控制块JCB</span></a></h3><ul><li>为每个作业设置一个JCB，保存了对作业管理调度的全部信息。是作业存在的标志。</li></ul><h3 id="作业步" tabindex="-1"><a class="header-anchor" href="#作业步"><span>作业步</span></a></h3><ul><li>作业步，每个作业都必须经过若干相对独立，有相互关联的顺序步骤才能得到结果。每一个步骤就是一个作业步。</li></ul><h3 id="作业运行的三个阶段" tabindex="-1"><a class="header-anchor" href="#作业运行的三个阶段"><span>作业运行的三个阶段</span></a></h3><ul><li>收容阶段</li><li>运行阶段</li><li>完成阶段</li></ul><h3 id="作业运行的三个状态" tabindex="-1"><a class="header-anchor" href="#作业运行的三个状态"><span>作业运行的三个状态</span></a></h3><ul><li>后备状态</li><li>运行状态</li><li>完成状态</li></ul><h3 id="作业调度的主要任务" tabindex="-1"><a class="header-anchor" href="#作业调度的主要任务"><span>作业调度的主要任务</span></a></h3><ul><li>接纳多少个作业</li><li>接纳哪些作业</li></ul><h3 id="先来先服务-first–come-first–served-fcfs-调度算法" tabindex="-1"><a class="header-anchor" href="#先来先服务-first–come-first–served-fcfs-调度算法"><span>先来先服务(first–come first–served，FCFS)调度算法</span></a></h3><ul><li>比较有利于长作业，而不利于短作业。</li><li>有利于CPU繁忙的作业，而不利于I/O繁忙的作业。</li></ul><h3 id="短作业优先-short-job-first-sjf-的调度算法" tabindex="-1"><a class="header-anchor" href="#短作业优先-short-job-first-sjf-的调度算法"><span>短作业优先(short job first，SJF)的调度算法</span></a></h3><ul><li>优点 <ul><li>比FCFS改善平均周转时间和平均带权周转时间，缩短作业的等待时间；</li><li>提高系统的吞吐量；</li></ul></li><li>缺点 <ul><li>必须预知作业的运行时间</li><li>对长作业非常不利，长作业的周转时间会明显地增长</li><li>在采用SJF算法时，人–机无法实现交互</li><li>该调度算法完全未考虑作业的紧迫程度，故不能保证紧迫性作业能得到及时处理</li></ul></li></ul><h3 id="优先级调度算法-priority–scheduling-algorithm-psa" tabindex="-1"><a class="header-anchor" href="#优先级调度算法-priority–scheduling-algorithm-psa"><span>优先级调度算法(priority–scheduling algorithm，PSA)</span></a></h3><h3 id="高响应比优先调度算法-highest-response-ratio-next-hrrn" tabindex="-1"><a class="header-anchor" href="#高响应比优先调度算法-highest-response-ratio-next-hrrn"><span>高响应比优先调度算法(Highest Response Ratio Next,HRRN)</span></a></h3><ul><li>原理 <ul><li>在每次选择作业投入运行时，先计算此时后备作业队列中每个作业的响应比RP然后选择其值最大的作业投入运行</li><li>优先权=(等待时间+要求服务时间)/要求服务时间=响应时间/要求服务时间=1+等待时间/要求服务时间</li></ul></li><li>特点 <ul><li>如果作业的等待时间相同，则要求服务的时间愈短，其优先权愈高，因而类似于SJF算法，有利于短作业</li><li>当要求服务的时间相同时，作业的优先权又决定于其等待时间，因而该算法又类似于FCFS算法</li><li>对于长时间的优先级，可以为随等待时间的增加而提高，当等待时间足够长时，也可获得处理机</li></ul></li></ul><h2 id="实时调度-hrt和srt任务" tabindex="-1"><a class="header-anchor" href="#实时调度-hrt和srt任务"><span>实时调度(HRT和SRT任务)</span></a></h2><h3 id="实现实时调度的基本条件" tabindex="-1"><a class="header-anchor" href="#实现实时调度的基本条件"><span>实现实时调度的基本条件</span></a></h3><ul><li>提供必要信息 <ul><li>就绪时间</li><li>开始截止时间和完成截止时间</li><li>处理时间</li><li>资源要求</li><li>优先级</li></ul></li><li>系统处理能力强 <ul><li>∑(Ci/Pi)≤1</li><li>N个处理机:∑(Ci/Pi)≤N</li></ul></li><li>采用抢占式调度机制</li><li>具有快速切换机制 <ul><li>对中断的快速响应能力</li><li>快速的任务分派能力</li></ul></li></ul><h3 id="实时调度算法的分类" tabindex="-1"><a class="header-anchor" href="#实时调度算法的分类"><span>实时调度算法的分类</span></a></h3><ul><li>非抢占式调度算法 <ul><li>非抢占式轮转调度算法</li><li>非抢占式优先调度算法</li></ul></li><li>抢占式调度算法 <ul><li>基于时钟中断的抢占式优先级调度算法</li><li>立即抢占的优先级调度算法</li></ul></li></ul><h3 id="最早截止时间优先edf-earliest-deadline-first-算法" tabindex="-1"><a class="header-anchor" href="#最早截止时间优先edf-earliest-deadline-first-算法"><span>最早截止时间优先EDF(Earliest Deadline First)算法</span></a></h3><ul><li>根据任务的开始截至时间来确定任务的优先级 <ul><li>截至时间越早，优先级越高</li></ul></li><li>非抢占式调度方式用于非周期实时任务</li><li>抢占式调度方式用于周期实时任务</li></ul><h3 id="最低松弛度优先llf-least-laxity-first-算法" tabindex="-1"><a class="header-anchor" href="#最低松弛度优先llf-least-laxity-first-算法"><span>最低松弛度优先LLF(Least Laxity First)算法</span></a></h3><ul><li>类似EDF</li><li>算法根据任务紧急(或松弛)的程度，来确定任务的优先级。任务的紧急程度愈高，为该任务所赋予的优先级就愈高， 以使之优先执行。</li><li>松弛度例子 <ul><li>例如，一个任务在200ms时必须完成，而它本身所需的运行时间就有100ms，因此，调度程序必须在100 ms之前调度执行，该任务的紧急程度(松弛程度)为100 ms</li></ul></li></ul><h3 id="优先级倒置-priority-inversion-problem" tabindex="-1"><a class="header-anchor" href="#优先级倒置-priority-inversion-problem"><span>优先级倒置(Priority inversion problem)</span></a></h3><ul><li>优先级倒置的形成 <ul><li>高优先级进程被低优先级进程延迟或阻塞。</li></ul></li><li>优先级倒置的解决方法 <ul><li>简单的:假如进程P3在进入临界区后P3所占用的处理机就不允许被抢占</li><li>实用的:建立在动态优先级继承基础上的</li></ul></li></ul><h2 id="死锁概述" tabindex="-1"><a class="header-anchor" href="#死锁概述"><span>死锁概述</span></a></h2><h3 id="资源问题" tabindex="-1"><a class="header-anchor" href="#资源问题"><span>资源问题</span></a></h3><ul><li>可重用性资源 <ul><li>计算机外设</li></ul></li><li>消耗性资源 <ul><li>数据，消息</li></ul></li><li>可抢占性资源 <ul><li>不引起死锁</li><li>CPU，内存</li></ul></li><li>不可抢占性资源 <ul><li>光驱，打印机</li></ul></li></ul><h3 id="计算机系统中的死锁" tabindex="-1"><a class="header-anchor" href="#计算机系统中的死锁"><span>计算机系统中的死锁</span></a></h3><ul><li>竞争不可抢占性资源引起死锁</li><li>竞争可消耗资源引起死锁</li><li>进程推进顺序不当引起死锁</li></ul><h3 id="死锁的定义-必要条件和处理方法" tabindex="-1"><a class="header-anchor" href="#死锁的定义-必要条件和处理方法"><span>死锁的定义，必要条件和处理方法</span></a></h3><ul><li>定义:如果一组进程中的每一个进程都在等待仅由该进程中的其他进程才能引发的事件，那么该组进程是死锁的</li><li>产生死锁的必要条件 <ul><li>互斥条件</li><li>请求和保存条件</li><li>不可抢占条件</li><li>循环等待条件 <ul><li>如果每个资源只有一个实例，则环路等待条件是死锁存在的充分必要条件</li></ul></li></ul></li><li>处理死锁的方法 <ul><li>预防死锁 <ul><li>静态方法，在进程执行前采取的措施，通过设置某些限制条件，去破坏产生死锁的四个条件之一，防止发生死锁。</li><li>预防死锁的策略 <ul><li>破坏&quot;请求和保存&quot;条件 <ul><li>第一种协议 <ul><li>所有进程在开始运行之前，必须一次性地申请其在整个运行过程中所需的全部资源</li><li>优点:简单，易行，安全</li><li>缺点 <ul><li>资源被严重浪费，严重地恶化了资源的利用率</li><li>使进程经常会发生饥饿现象</li></ul></li></ul></li><li>第二种协议 <ul><li>它允许一个进程只获得运行初期所需的资源后，便开始运行。进程运行过程中再逐步释放已分配给自己的，且已用毕的全部资源，然后再请求新的所需资源</li></ul></li></ul></li><li>破坏&quot;不可抢占&quot;条件 <ul><li>当一个已经保存了某些不可被抢占资源的进程，提出新的资源请求而不能得到满足时，它必须释放已经保持的所有资源，待以后需要时再重新申请</li></ul></li><li>破坏&quot;循环等待&quot;条件 <ul><li>对系统所以资源类型进行线性排序，并赋予不同的序号</li><li>例如令输入机的序号为1，打印机序号为2，磁盘机序号为3等。所有进程对资源的请求必须严格按资源序号递增的次序提出。</li></ul></li></ul></li></ul></li><li>避免死锁 <ul><li>动态的方法，在进程执行过程中采取的措施，不需事先采取限制措施破坏产生死锁的必要条件，而是在进程申请资源时用某种方法去防止系统进入不安全状态，从而避免发生死锁。如银行家算法</li><li>避免死锁的策略 <ul><li>系统安全状态 <ul><li>安全状态 <ul><li>某时刻，对于并发执行的n个进程，若系统能够按照某种顺序如&lt;p1,p2…pn&gt;来为每个进程分配所需资源，直至最大需求，从而使每个进程都可顺利完成，则认为该时刻系统处于安全状态，这样的序列为安全序列</li></ul></li><li>安全状态之例</li><li>由安全状态向不安全状态的转换</li></ul></li><li>利用银行家算法避免死锁 <ul><li>含义:每一个新进程在进入系统时，它必须申明在运行过程中，可能需要每种资源类型的最大单元数目，其数目不应超过系统所拥有的资源总量。当进程请求一组资源时，系统必须首先确定是否有足够的资源分配给该进程。若有，再进一步计算在将这些资源分配给进程后，是否会使系统处于不安全状态。如果不会，才将资源分配给它，否则让进程等待</li><li>银行家算法中的数据结构 <ul><li>可用资源向量 Available[m]：m为系统中资源种类数，Available[j]=k表示系统中第j类资源数为k个。</li><li>最大需求矩阵 Max[n,m]：n为系统中进程数，Max[i,j]=k表示进程i对j类资源的最大需求数为中k。</li><li>分配矩阵 Allocation[n，m]:它定义了系统中每一类资源当前已分配给每一进程资源数， Allocation[i,j] = k表示进程i已分得j类资源的数目为k个。</li><li>需求矩阵 Need[n,m]：它表示每个进程尚需的各类资源数，Need[i,j]=k 表示进程i 还需要j类资源k个。Need[i,j]=Max[i,j] - Allocation[i,j]</li></ul></li><li>银行家算法</li><li>安全性算法</li><li>银行家算法之例</li><li>解题 <ul><li>矩阵</li><li>列表</li></ul></li></ul></li></ul></li></ul></li><li>检测死锁 <ul><li>死锁的检测与解除 <ul><li>死锁的检测 <ul><li>资源分配图 <ul><li>简化步骤 <ul><li>选择一个没有阻塞的进程p</li><li>将p移走，包括它的所有请求边和分配边</li><li>重复步骤1，2，直至不能继续下去</li></ul></li></ul></li><li>死锁定理 <ul><li>若一系列简化以后不能使所有的进程节点都成为孤立节点</li></ul></li><li>检测时机 <ul><li>当进程等待时检测死锁 （其缺点是系统的开销大）</li><li>定时检测</li><li>系统资源利用率下降时检测死锁</li></ul></li><li>死锁检测中的数据结构</li></ul></li><li>死锁的解除 <ul><li>抢占资源</li><li>终止(或撤销)进程</li><li>终止进程的方法 <ul><li>终止所有死锁进程</li><li>逐个终止进程 <ul><li>代价最小 <ul><li>进程的优先级的大小</li><li>进程已执行了多少时间，还需时间</li><li>进程在运行中已经使用资源的多少，还需多少资源</li><li>进程的性质是交互式还是批处理的</li></ul></li></ul></li></ul></li><li>付出代价最小的死锁解除算法 <ul><li>是使用一个有效的挂起和解除机构来挂起一些死锁的进程</li></ul></li></ul></li></ul></li></ul></li><li>解除死锁</li></ul></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/第三章 处理机调度与死锁.png" alt="第三章 处理机调度与死锁" tabindex="0" loading="lazy"><figcaption>第三章 处理机调度与死锁</figcaption></figure>',51)]))}const h=i(r,[["render",s],["__file","第三章 处理机调度与死锁.html.vue"]]),o=JSON.parse('{"path":"/posts/Computer-Basics/Operating-System/%E7%AC%AC%E4%B8%89%E7%AB%A0%20%E5%A4%84%E7%90%86%E6%9C%BA%E8%B0%83%E5%BA%A6%E4%B8%8E%E6%AD%BB%E9%94%81.html","title":"4、处理机调度与死锁","lang":"zh-CN","frontmatter":{"title":"4、处理机调度与死锁","date":"2024-01-01 10:36","category":["操作系统"],"tag":["操作系统"],"description":"第三章:处理机调度与死锁 处理机调度算法的目标 处理机调度算法的共同目标 资源利用率:CPU的利用率=CPU有效工作时间/(CPU有效工作时间+CPU空闲等待时间) 公平性 平衡性 策略强制执行 批处理系统的目标 平均周转时间短 系统吞吐量高 处理机利用率高 分时系统的目标 响应时间快 均衡性 实时系统目标 截止时间的保证 可预测性 处理机调度的层次 ...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Computer-Basics/Operating-System/%E7%AC%AC%E4%B8%89%E7%AB%A0%20%E5%A4%84%E7%90%86%E6%9C%BA%E8%B0%83%E5%BA%A6%E4%B8%8E%E6%AD%BB%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"4、处理机调度与死锁"}],["meta",{"property":"og:description","content":"第三章:处理机调度与死锁 处理机调度算法的目标 处理机调度算法的共同目标 资源利用率:CPU的利用率=CPU有效工作时间/(CPU有效工作时间+CPU空闲等待时间) 公平性 平衡性 策略强制执行 批处理系统的目标 平均周转时间短 系统吞吐量高 处理机利用率高 分时系统的目标 响应时间快 均衡性 实时系统目标 截止时间的保证 可预测性 处理机调度的层次 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/第三章%20处理机调度与死锁.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-25T09:16:19.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"操作系统"}],["meta",{"property":"article:published_time","content":"2024-01-01T10:36:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-25T09:16:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4、处理机调度与死锁\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/第三章%20处理机调度与死锁.png\\"],\\"datePublished\\":\\"2024-01-01T10:36:00.000Z\\",\\"dateModified\\":\\"2024-10-25T09:16:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"处理机调度算法的目标","slug":"处理机调度算法的目标","link":"#处理机调度算法的目标","children":[{"level":3,"title":"处理机调度算法的共同目标","slug":"处理机调度算法的共同目标","link":"#处理机调度算法的共同目标","children":[]},{"level":3,"title":"批处理系统的目标","slug":"批处理系统的目标","link":"#批处理系统的目标","children":[]},{"level":3,"title":"分时系统的目标","slug":"分时系统的目标","link":"#分时系统的目标","children":[]},{"level":3,"title":"实时系统目标","slug":"实时系统目标","link":"#实时系统目标","children":[]},{"level":3,"title":"处理机调度的层次","slug":"处理机调度的层次","link":"#处理机调度的层次","children":[]}]},{"level":2,"title":"作业与作业调度","slug":"作业与作业调度","link":"#作业与作业调度","children":[{"level":3,"title":"作业","slug":"作业","link":"#作业","children":[]},{"level":3,"title":"作业控制块JCB","slug":"作业控制块jcb","link":"#作业控制块jcb","children":[]},{"level":3,"title":"作业步","slug":"作业步","link":"#作业步","children":[]},{"level":3,"title":"作业运行的三个阶段","slug":"作业运行的三个阶段","link":"#作业运行的三个阶段","children":[]},{"level":3,"title":"作业运行的三个状态","slug":"作业运行的三个状态","link":"#作业运行的三个状态","children":[]},{"level":3,"title":"作业调度的主要任务","slug":"作业调度的主要任务","link":"#作业调度的主要任务","children":[]},{"level":3,"title":"先来先服务(first–come first–served，FCFS)调度算法","slug":"先来先服务-first–come-first–served-fcfs-调度算法","link":"#先来先服务-first–come-first–served-fcfs-调度算法","children":[]},{"level":3,"title":"短作业优先(short job first，SJF)的调度算法","slug":"短作业优先-short-job-first-sjf-的调度算法","link":"#短作业优先-short-job-first-sjf-的调度算法","children":[]},{"level":3,"title":"优先级调度算法(priority–scheduling algorithm，PSA)","slug":"优先级调度算法-priority–scheduling-algorithm-psa","link":"#优先级调度算法-priority–scheduling-algorithm-psa","children":[]},{"level":3,"title":"高响应比优先调度算法(Highest Response Ratio Next,HRRN)","slug":"高响应比优先调度算法-highest-response-ratio-next-hrrn","link":"#高响应比优先调度算法-highest-response-ratio-next-hrrn","children":[]}]},{"level":2,"title":"实时调度(HRT和SRT任务)","slug":"实时调度-hrt和srt任务","link":"#实时调度-hrt和srt任务","children":[{"level":3,"title":"实现实时调度的基本条件","slug":"实现实时调度的基本条件","link":"#实现实时调度的基本条件","children":[]},{"level":3,"title":"实时调度算法的分类","slug":"实时调度算法的分类","link":"#实时调度算法的分类","children":[]},{"level":3,"title":"最早截止时间优先EDF(Earliest Deadline First)算法","slug":"最早截止时间优先edf-earliest-deadline-first-算法","link":"#最早截止时间优先edf-earliest-deadline-first-算法","children":[]},{"level":3,"title":"最低松弛度优先LLF(Least Laxity First)算法","slug":"最低松弛度优先llf-least-laxity-first-算法","link":"#最低松弛度优先llf-least-laxity-first-算法","children":[]},{"level":3,"title":"优先级倒置(Priority inversion problem)","slug":"优先级倒置-priority-inversion-problem","link":"#优先级倒置-priority-inversion-problem","children":[]}]},{"level":2,"title":"死锁概述","slug":"死锁概述","link":"#死锁概述","children":[{"level":3,"title":"资源问题","slug":"资源问题","link":"#资源问题","children":[]},{"level":3,"title":"计算机系统中的死锁","slug":"计算机系统中的死锁","link":"#计算机系统中的死锁","children":[]},{"level":3,"title":"死锁的定义，必要条件和处理方法","slug":"死锁的定义-必要条件和处理方法","link":"#死锁的定义-必要条件和处理方法","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729847779000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":2}]},"readingTime":{"minutes":12,"words":3600},"filePathRelative":"posts/Computer-Basics/Operating-System/第三章 处理机调度与死锁.md","localizedDate":"2024年1月1日","excerpt":"\\n<h2>处理机调度算法的目标</h2>\\n<h3>处理机调度算法的共同目标</h3>\\n<ul>\\n<li>资源利用率:CPU的利用率=CPU有效工作时间/(CPU有效工作时间+CPU空闲等待时间)</li>\\n<li>公平性</li>\\n<li>平衡性</li>\\n<li>策略强制执行</li>\\n</ul>\\n<h3>批处理系统的目标</h3>\\n<ul>\\n<li>平均周转时间短</li>\\n<li>系统吞吐量高</li>\\n<li>处理机利用率高</li>\\n</ul>\\n<h3>分时系统的目标</h3>\\n<ul>\\n<li>响应时间快</li>\\n<li>均衡性</li>\\n</ul>\\n<h3>实时系统目标</h3>","autoDesc":true}');export{h as comp,o as data};
