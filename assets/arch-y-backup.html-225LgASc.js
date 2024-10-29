import{_ as t,c as a,a as n,o as r}from"./app-DEK5G3U7.js";const l={};function o(i,e){return r(),a("div",null,e[0]||(e[0]=[n('<h1 id="架构之高可用-容灾备份-故障转移" tabindex="-1"><a class="header-anchor" href="#架构之高可用-容灾备份-故障转移"><span>架构之高可用：容灾备份,故障转移</span></a></h1><blockquote><p>容灾技术是系统的高可用性技术的一个组成部分，容灾系统更加强调处理外界环境对系统的影响，特别是灾难性事件对整个IT节点的影响，提供节点级别的系统恢复功能。故障转移（failover），即当活动的服务或应用意外终止时，快速启用<strong>冗余</strong>或备用的服务器、系统、硬件或者网络接替它们工作。故障恢复是在计划内或计划外中断解决后<strong>切换回主站点</strong>的过程。</p></blockquote><h2 id="_1-什么是容灾和备份" tabindex="-1"><a class="header-anchor" href="#_1-什么是容灾和备份"><span>1. 什么是容灾和备份？</span></a></h2><blockquote><p>容灾技术是系统的高可用性技术的一个组成部分，容灾系统更加强调处理外界环境对系统的影响，特别是灾难性事件对整个IT节点的影响，提供节点级别的系统恢复功能。</p></blockquote><p>容灾备份实际上是两个概念:</p><ul><li><strong>容灾</strong>是为了在遭遇灾害时能保证信息系统能正常运行，帮助企业实现业务连续性的目标；</li><li><strong>备份</strong>是为了应对灾难来临时造成的数据丢失问题。</li></ul><p>在容灾备份一体化产品出现之前，容灾系统与备份系统是独立的。容灾备份产品的最终目标是帮助企业应对人为误操作、软件错误、病毒入侵等“软”性灾害以及硬件故障、自然灾害等“硬”性灾害。</p><h3 id="_1-1-容灾的分类" tabindex="-1"><a class="header-anchor" href="#_1-1-容灾的分类"><span>1.1 容灾的分类</span></a></h3><p>从其对系统的保护程度来分，可以将容灾系统分为:</p><ul><li><strong>数据级容灾</strong>是指通过建立异地容灾中心，做数据的远程备份，在灾难发生之后要确保原有的数据不会丢失或者遭到破坏，但在数据级容灾这个级别，发生灾难时应用是会中断的。在数据级容灾方式下，所建立的异地容灾中心可以简单地把它理解成一个远程的数据备份中心。数据级容灾的恢复时间比较长，但是相比其他容灾级别来讲它的费用比较低，而且构建实施也相对简单。</li><li><strong>应用级容灾</strong>是在数据级容灾的基础之上，在备份站点同样构建一套相同的应用系统，通过同步或异步复制技术，这样可以保证关键应用在允许的时间范围内恢复运行，尽可能减少灾难带来的损失，让用户基本感受不到灾难的发生，这样就使系统所提供的服务是完整的、可靠的和安全的。应用级容灾生产中心和异地灾备中心之间的数据传输是采用异类的广域网传输方式；同时应用级容灾系统需要通过更多的软件来实现，可以使多种应用在灾难发生时可以进行快速切换，确保业务的连续性。</li><li><strong>业务级容灾</strong>是全业务的灾备，除了必要的IT相关技术，还要求具备全部的基础设施。其大部分内容是非IT系统（如电话、办公地点等），当大灾难发生后，原有的办公场所都会受到破坏，除了数据和应用的恢复，更需要一个备份的工作场所能够正常的开展业务。</li></ul><h3 id="_1-2-容灾的技术指标" tabindex="-1"><a class="header-anchor" href="#_1-2-容灾的技术指标"><span>1.2 容灾的技术指标</span></a></h3><blockquote><p>主要有RPO（数据恢复点目标）和 RTO（恢复时间目标）, 从客户的角度而言就是RPO需要为0（没有数据丢失），RTO越接近0越好（恢复时间越短越好）。</p></blockquote><p><strong>RPO（Recovery Point Objective）</strong>：即数据恢复点目标，主要指的是业务系统所能容忍的数据丢失量，指灾难发生后，从IT系统宕机导致业务停顿之时开始，到IT系统恢复至可以支持各部门运作、恢复运营之时，此两点之间的时间段称为RTO，广道容灾备份系统RTO达到分钟级。</p><p><strong>RTO（Recovery Time Objective）</strong>：即恢复时间目标，主要指的是所能容忍的业务停止服务的最长时间，也就是从灾难发生到业务系统恢复服务功能所需要的最短时间周期。</p><p>指从系统和应用数据而言，要实现能够恢复至可以支持各部门业务运作，系统及生产数据应恢复到怎样的更新程度，这种更新程度可以是上一周的备份数据，也可以是上一次交易的实时数据。</p><p>RPO针对的是数据丢失，而RTO针对的是服务丢失，二者没有必然的关联性。RTO和RPO的确定必须在进行风险分析和业务影响分析后根据不同的业务需求确定。对于不同企业的同一种业务，RTO和RPO的需求也会有所不同。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300944215.png" alt="image-20220702220035271" tabindex="0" loading="lazy"><figcaption>image-20220702220035271</figcaption></figure><h3 id="_1-3-容灾和容错的区别" tabindex="-1"><a class="header-anchor" href="#_1-3-容灾和容错的区别"><span>1.3 容灾和容错的区别</span></a></h3><blockquote><p>例子中的图片来源于<a href="http://www.pbenson.net/2014/02/the-difference-between-fault-tolerance-high-availability-disaster-recovery/" target="_blank" rel="noopener noreferrer">这里</a>，能够非常好的帮助你理解。</p></blockquote><ul><li><p><strong>容灾（Disaster Tolerance）</strong>：就是在上述的灾难发生时，在保证生产系统的数据尽量少丢失的情况下，保持生存系统的业务不间断地运行。容灾通常是通过冗余方式来实现的。</p><p>举例：飞机上有两个发动机，一个是主发动机，另外一个是备用发动机，主发动机坏了以后，立马切换到备用的发动机。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300944260.png" alt="image-20220702220141592" tabindex="0" loading="lazy"><figcaption>image-20220702220141592</figcaption></figure></li><li><p><strong>容错（fault tolerance）</strong>: 发生故障时，系统还能继续运行。容错的目的是，发生故障时，系统的运行水平可能有所下降，但是依然可用，不会完全失败。</p><p>举例：飞机有四个引擎，如果一个引擎坏了，剩下三个引擎，还能继续飞，这就是&quot;容错&quot;。同样的，汽车的一个轮子扎破了，剩下三个轮子，也还是勉强能行驶。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300944285.png" alt="image-20220702220248718" tabindex="0" loading="lazy"><figcaption>image-20220702220248718</figcaption></figure></li></ul><h3 id="_1-4-容灾备份的等级" tabindex="-1"><a class="header-anchor" href="#_1-4-容灾备份的等级"><span>1.4 容灾备份的等级</span></a></h3><blockquote><p>国际标准SHARE 78 对容灾系统的定义有七个层次：从最简单的仅在本地进行磁带备份，到将备份的磁带存储在异地，再到建立应用系统实时切换的异地备份系统，恢复时间也可以从几天到小时级到分钟级、秒级或零数据丢失等。目前针对这七个层次，都有相应的容灾方案，所以，用户在选择容灾方案时应重点区分它们各自的特点和适用范围，结合自己对容灾系统的要求判断选择哪个层次的方案。</p></blockquote><ul><li><strong>0级：无异地备份</strong></li></ul><p>0等级容灾方案数据仅在本地进行备份，没有在异地备份数据，未制定灾难恢复计划。这种方式是成本最低的灾难恢复解决方案，但不具备真正灾难恢复能力。</p><p>在这种容灾方案中，最常用的是备份管理软件加上磁带机，可以是手工加载磁带机或自动加载磁带机。它是所有容灾方案的基础，从个人用户到企业级用户都广泛采用了这种方案。其特点是用户投资较少，技术实现简单。缺点是一旦本地发生毁灭性灾难，将丢失全部的本地备份数据，业务无法恢复。</p><ul><li><strong>1级：实现异地备份</strong></li></ul><p>第1级容灾方案是将关键数据备份到本地磁带介质上，然后送往异地保存，但异地没有可用的备份中心、备份数据处理系统和备份网络通信系统，未制定灾难恢复计划。灾难发生后，使用新的主机，利用异地数据备份介质（磁带）将数据恢复起来。</p><p>这种方案成本较低，运用本地备份管理软件，可以在本地发生毁灭性灾难后，恢复从异地运送过来的备份数据到本地，进行业务恢复。但难以管理，即很难知道什么数据在什么地方，恢复时间长短依赖于何时硬件平台能够被提供和准备好。以前被许多进行关键业务生产的大企业所广泛采用，作为异地容灾的手段。目前，这一等级方案在许多中小网站和中小企业用户中采用较多。对于要求快速进行业务恢复和海量数据恢复的用户，这种方案是不能够被接受的。</p><ul><li><strong>2级：热备份站点备份</strong></li></ul><p>第2级容灾方案是将关键数据进行备份并存放到异地，制定有相应灾难恢复计划，具有热备份能力的站点灾难恢复。一旦发生灾难，利用热备份主机系统将数据恢复。它与第1级容灾方案的区别在于异地有一个热备份站点，该站点有主机系统，平时利用异地的备份管理软件将运送到异地的数据备份介质（磁带）上的数据备份到主机系统。当灾难发生时可以快速接管应用，恢复生产。</p><p>由于有了热备中心，用户投资会增加，相应的管理人员要增加。技术实现简单，利用异地的热备份系统，可以在本地发生毁灭性灾难后，快速进行业务恢复。但这种容灾方案由于备份介质是采用交通运输方式送往异地，异地热备中心保存的数据是上一次备份的数据，可能会有几天甚至几周的数据丢失。这对于关键数据的容灾是不能容忍的。</p><ul><li><strong>3级：在线数据恢复</strong></li></ul><p>第3级容灾方案是通过网络将关键数据进行备份并存放至异地，制定有相应灾难恢复计划，有备份中心，并配备部分数据处理系统及网络通信系统。该等级方案特点是用电子数据传输取代交通工具传输备份数据，从而提高了灾难恢复的速度。利用异地的备份管理软件将通过网络传送到异地的数据备份到主机系统。一旦灾难发生，需要的关键数据通过网络可迅速恢复，通过网络切换，关键应用恢复时间可降低到一天或小时级。这一等级方案由于备份站点要保持持续运行，对网络的要求较高，因此成本相应有所增加。</p><ul><li><strong>4级：定时数据备份</strong></li></ul><p>第4级容灾方案是在第3级容灾方案的基础上，利用备份管理软件自动通过通信网络将部分关键数据定时备份至异地，并制定相应的灾难恢复计划。一旦灾难发生，利用备份中心已有资源及异地备份数据恢复关键业务系统运行。</p><p>这一等级方案特点是备份数据是采用自动化的备份管理软件备份到异地，异地热备中心保存的数据是定时备份的数据，根据备份策略的不同，数据的丢失与恢复时间达到天或小时级。由于对备份管理软件设备和网络设备的要求较高，因此投入成本也会增加。但由于该级别备份的特点，业务恢复时间和数据的丢失量还不能满足关键行业对关键数据容灾的要求。</p><ul><li><strong>5级：实时数据备份</strong></li></ul><p>第5级容灾方案在前面几个级别的基础上使用了硬件的镜像技术和软件的数据复制技术，也就是说，可以实现在应用站点与备份站点的数据都被更新。数据在两个站点之间相互镜像，由远程异步提交来同步，因为关键应用使用了双重在线存储，所以在灾难发生时，仅仅很小部分的数据被丢失，恢复的时间被降低到了分钟级或秒级。由于对存储系统和数据复制软件的要求较高，所需成本也大大增加。</p><p>这一等级的方案由于既能保证不影响当前交易的进行，又能实时复制交易产生的数据到异地，所以这一层次的方案是目前应用最广泛的一类，正因为如此，许多厂商都有基于自己产品的容灾解决方案。如存储厂商EMC等推出的基于智能存储服务器的数据远程拷贝；系统复制软件提供商VERITAS等提供的基于系统软件的数据远程复制；数据库厂商Oracle和Sybase提供的数据库复制方案等。但这些方案有一个不足之处就是异地的备份数据是处于备用（Standby）备份状态而不是实时可用的数据，这样灾难发生后需要一定时间来进行业务恢复。更为理想的应该是备份站点不仅仅是一个分离的备份系统，而且还处于活动状态，能够提供生产应用服务，所以可以提供快速的业务接管，而备份数据则可以双向传输，数据的丢失与恢复时间达到分钟甚至秒级。据了解，目前DSG公司的RealSync全局复制软件能够提供这一功能。</p><ul><li><strong>6级：零数据丢失</strong></li></ul><p>第6级容灾方案是灾难恢复中最昂贵的方式，也是速度最快的恢复方式，它是灾难恢复的最高级别，利用专用的存储网络将关键数据同步镜像至备份中心，数据不仅在本地进行确认，而且需要在异地（备份）进行确认。因为，数据是镜像地写到两个站点，所以灾难发生时异地容灾系统保留了全部的数据，实现零数据丢失。</p><p>这一方案在本地和远程的所有数据被更新的同时，利用了双重在线存储和完全的网络切换能力，不仅保证数据的完全一致性，而且存储和网络等环境具备了应用的自动切换能力。一旦发生灾难，备份站点不仅有全部的数据，而且应用可以自动接管，实现零数据丢失的备份。通常在这两个系统中的光纤设备连接中还提供冗余通道，以备工作通道出现故障时及时接替工作，当然由于对存储系统和存储系统专用网络的要求很高，用户的投资巨大。采取这种容灾方式的用户主要是资金实力较为雄厚的大型企业和电信级企业。但在实际应用过程中，由于完全同步的方式对生产系统的运行效率会产生很大影响，所以适用于生产交易较少或非实时交易的关键数据系统，目前采用该级别容灾方案的用户还很少。</p><h2 id="_2-容灾备份的解决方案" tabindex="-1"><a class="header-anchor" href="#_2-容灾备份的解决方案"><span>2. 容灾备份的解决方案</span></a></h2><blockquote><p>阿里云的容灾备份解决方案为例。</p></blockquote><h3 id="_2-1-ecs的容灾备份" tabindex="-1"><a class="header-anchor" href="#_2-1-ecs的容灾备份"><span>2.1 ECS的容灾备份</span></a></h3><blockquote><p>来源于阿里云<a href="https://help.aliyun.com/document_detail/98198.html?spm=5176.22414175.sslink.10.473f5c2de0EUTt" target="_blank" rel="noopener noreferrer">官方文档</a></p></blockquote><ul><li><strong>备份恢复</strong></li></ul><p>阿里云ECS可通过<strong>快照</strong>与<strong>镜像</strong>对系统盘、数据盘进行备份。如果存储在磁盘上的数据本身就是错误的数据，例如由于应用错误导致的数据错误，或者黑客利用应用漏洞进行恶意读写，此时就可以使用快照服务将磁盘上的数据恢复到期望的状态。另外ECS可通过镜像重新初始化磁盘或使用自定义镜像新购ECS实例。</p><ul><li><strong>容灾应用</strong></li></ul><p>ECS可以从架构上实现容灾场景下的应用。例如，在应用前端购买SLB产品，后端相同应用部署至少两台ECS服务器，或者是使用阿里云的弹性伸缩技术，根据自定义ECS自身资源的使用规则进行弹性扩容。这样即便其中一台ECS服务器故障或者资源利用超负荷，也不会使服务对外终止，从而实现容灾场景下的应用。下图以同城两可用区机房部署ECS集群为例，所有通信均在阿里云千兆内网中完成，响应快速并减少了公网流量费用：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300944305.png" alt="image-20220702220929150" tabindex="0" loading="lazy"><figcaption>image-20220702220929150</figcaption></figure><ol><li><strong>负载均衡SLB</strong>：设备侧通过多可用区级别SLB做首层流量接入，用户流量被分发至两个及以上的可用区机房，机房内均部署ECS集群。</li><li><strong>ECS集群</strong>：可用区机房部署的ECS节点是对等的，单节点故障不影响数据层应用和服务器管控功能。发生故障后系统会自动热迁移，另外的ECS节点可以持续提供业务访问，防止可能的单点故障或者热迁移失败导致的业务访问中断。热迁移失败后通过系统事件获知故障信息，您可以及时部署新节点。</li><li><strong>数据层</strong>：在地域级别部署对象存储，不同可用区机房的ECS节点可以直接读取文件信息。若是数据库应用，使用多可用区ApsaraDB for RDS服务做承载，主节点支持多可用区读写，与应用层流量来源无冲突关系。同时，备节点支持多可用区读能力，防止主节点故障时，ECS无法读取数据。</li></ol><h3 id="_2-2-同城容灾" tabindex="-1"><a class="header-anchor" href="#_2-2-同城容灾"><span>2.2 同城容灾</span></a></h3><blockquote><p>来源于阿里云<a href="https://help.aliyun.com/document_detail/419804.html?spm=a2c4g.26937906.0.0.763f292cjWILT6" target="_blank" rel="noopener noreferrer">官方文档</a></p></blockquote><p><strong>同城容灾</strong>指应用服务部署是<strong>多机房、单地域</strong>时，当其中一机房出现故障时，系统可实现业务7*24小时稳定运行，即使单机房故障也不影响业务的可持续性，保障用户访问连续不间断。</p><p><strong>同城双活容灾</strong>架构，是指在同城建立两个可独立承担关键系统运行的数据中心，双中心具备基本等同的业务处理能力并通过高速链路实时同步数据，日常情况下可同时分担业务及管理系统的运行，并可切换运行；灾难情况下可在基本不丢失数据的情况下进行灾备应急切换，保持业务连续运行。多数企业为了兼顾成本与高可用性问题，会优先选择同城双活的部署方式。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300944332.png" alt="image-20220702221131412.png" tabindex="0" loading="lazy"><figcaption>image-20220702221131412.png</figcaption></figure><h3 id="_2-3-异地容灾-两地三中心" tabindex="-1"><a class="header-anchor" href="#_2-3-异地容灾-两地三中心"><span>2.3 异地容灾(两地三中心)</span></a></h3><blockquote><p>来源于阿里云<a href="https://help.aliyun.com/practice_detail/419526?spm=a2c4g.26937898.0.0.75ed6fc5iInM61" target="_blank" rel="noopener noreferrer">官方文档</a></p></blockquote><p><strong>异地容灾</strong>是指应用服务部署在不同地域时，当其中一地出现故障时，系统可以将出现故障地域的用户访问流量，调度至异地灾备中心，保障用户访问连续不间断。</p><p><strong>两地三中心容灾</strong>架构，是指在同城双中心的基础上，在异地的城市建立一个备份的灾备中心，用于双中心的数据备份，当双中心出现自然灾害等原因而发生故障时，异地灾备中心可以用备份数据进行业务的恢复。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300944355.png" alt="image-20220702221230747" tabindex="0" loading="lazy"><figcaption>image-20220702221230747</figcaption></figure><h2 id="_3-故障转移和恢复" tabindex="-1"><a class="header-anchor" href="#_3-故障转移和恢复"><span>3. 故障转移和恢复</span></a></h2><h3 id="_3-1-什么是故障转移" tabindex="-1"><a class="header-anchor" href="#_3-1-什么是故障转移"><span>3.1 什么是故障转移</span></a></h3><blockquote><p>故障转移（failover），即当活动的服务或应用意外终止时，快速启用冗余或备用的服务器、系统、硬件或者网络接替它们工作。 故障转移(failover)与交换转移操作基本相同，只是故障转移通常是<strong>自动完成</strong>的，没有警告提醒手动完成，而交换转移需要手动进行。</p></blockquote><p>要使故障转移正常工作，必须有一个数据备份裸机服务器或虚拟机充当恢复站点系统，以便在发生故障时替换主站点。由于故障转移是灾难恢复中必不可少的步骤，因此数据备份系统本身必须不受故障影响。</p><p>需要持续可用性的系统需要整体故障转移和灾难恢复。在服务器级别，数据备份环境跟踪主服务器的“脉冲”，并在检测到中断时执行自动故障转移。</p><h3 id="_3-2-如何进行故障转移" tabindex="-1"><a class="header-anchor" href="#_3-2-如何进行故障转移"><span>3.2 如何进行故障转移</span></a></h3><blockquote><p>有两种方法可以设置故障转移系统：<strong>主动-主动</strong>和<strong>主动-被动</strong>（或主动-备用）配置。两种设置都需要至少两个节点（服务器或虚拟机）才能正常工作。</p></blockquote><p>在<strong>主动-主动</strong>设置中，多个节点同时运行。这允许他们分担工作量并防止任何一个节点过载。如果一个节点停止工作，它的工作负载将被其他活动节点占用，直到它重新激活。</p><p><strong>主动-被动</strong>（主动-备用）设置还包括多个节点，但并非所有节点都同时处于活动状态。一旦主动节点停止工作，被动节点就会被激活并充当故障转移节点。当主节点再次运行时，数据备份节点将操作切换回主节点并再次变为被动状态。</p><p>无论采用哪种故障转移方法，两种配置都要求每个节点具有相同的配置。这确保了在站点之间切换时的一致性和稳定性。</p><h3 id="_3-3-什么是故障恢复" tabindex="-1"><a class="header-anchor" href="#_3-3-什么是故障恢复"><span>3.3 什么是故障恢复</span></a></h3><blockquote><p>故障恢复是在计划内或计划外中断解决后<strong>切换回主站点</strong>的过程。故障恢复通常在故障转移之后作为灾难恢复计划的一部分。</p></blockquote><p>故障恢复不是完成故障转移的唯一方法。使用虚拟机时，您可以执行永久故障恢复，使数据备份虚拟机成为新的主站点。</p><h3 id="_3-4-如何进行故障恢复" tabindex="-1"><a class="header-anchor" href="#_3-4-如何进行故障恢复"><span>3.4 如何进行故障恢复</span></a></h3><p>成功执行故障回复需要一些准备。在切换回主站点之前，请考虑以下步骤：</p><ol><li>检查与主站点的连接的质量和网络带宽。</li><li>检查备份站点上的所有数据是否存在潜在错误。这对于关键文件和文档尤其重要。</li><li>在开始故障恢复之前彻底测试所有主系统。</li><li>准备并实施故障恢复计划，以最大限度地减少停机时间和用户不便。</li></ol><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/arch/arch-y-backup.html" target="_blank" rel="noopener noreferrer"><strong>架构之高可用：容灾备份,故障转移</strong></a></p>',80)]))}const p=t(l,[["render",o],["__file","arch-y-backup.html.vue"]]),c=JSON.parse(`{"path":"/posts/Architect/base/arch-y-backup.html","title":"架构之高可用：容灾备份,故障转移","lang":"zh-CN","frontmatter":{"aliases":"架构之高可用：容灾备份,故障转移, '架构之高可用：容灾备份,故障转移'","tags":null,"cssclass":null,"source":null,"order":100,"category":["架构"],"created":"2024-04-24 14:35","updated":"2024-04-30 09:44","description":"架构之高可用：容灾备份,故障转移 容灾技术是系统的高可用性技术的一个组成部分，容灾系统更加强调处理外界环境对系统的影响，特别是灾难性事件对整个IT节点的影响，提供节点级别的系统恢复功能。故障转移（failover），即当活动的服务或应用意外终止时，快速启用冗余或备用的服务器、系统、硬件或者网络接替它们工作。故障恢复是在计划内或计划外中断解决后切换回主站...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Architect/base/arch-y-backup.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"架构之高可用：容灾备份,故障转移"}],["meta",{"property":"og:description","content":"架构之高可用：容灾备份,故障转移 容灾技术是系统的高可用性技术的一个组成部分，容灾系统更加强调处理外界环境对系统的影响，特别是灾难性事件对整个IT节点的影响，提供节点级别的系统恢复功能。故障转移（failover），即当活动的服务或应用意外终止时，快速启用冗余或备用的服务器、系统、硬件或者网络接替它们工作。故障恢复是在计划内或计划外中断解决后切换回主站..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300944215.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"架构之高可用：容灾备份,故障转移\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300944215.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300944260.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300944285.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300944305.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300944332.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300944355.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是容灾和备份？","slug":"_1-什么是容灾和备份","link":"#_1-什么是容灾和备份","children":[{"level":3,"title":"1.1 容灾的分类","slug":"_1-1-容灾的分类","link":"#_1-1-容灾的分类","children":[]},{"level":3,"title":"1.2 容灾的技术指标","slug":"_1-2-容灾的技术指标","link":"#_1-2-容灾的技术指标","children":[]},{"level":3,"title":"1.3 容灾和容错的区别","slug":"_1-3-容灾和容错的区别","link":"#_1-3-容灾和容错的区别","children":[]},{"level":3,"title":"1.4 容灾备份的等级","slug":"_1-4-容灾备份的等级","link":"#_1-4-容灾备份的等级","children":[]}]},{"level":2,"title":"2. 容灾备份的解决方案","slug":"_2-容灾备份的解决方案","link":"#_2-容灾备份的解决方案","children":[{"level":3,"title":"2.1 ECS的容灾备份","slug":"_2-1-ecs的容灾备份","link":"#_2-1-ecs的容灾备份","children":[]},{"level":3,"title":"2.2 同城容灾","slug":"_2-2-同城容灾","link":"#_2-2-同城容灾","children":[]},{"level":3,"title":"2.3 异地容灾(两地三中心)","slug":"_2-3-异地容灾-两地三中心","link":"#_2-3-异地容灾-两地三中心","children":[]}]},{"level":2,"title":"3. 故障转移和恢复","slug":"_3-故障转移和恢复","link":"#_3-故障转移和恢复","children":[{"level":3,"title":"3.1 什么是故障转移","slug":"_3-1-什么是故障转移","link":"#_3-1-什么是故障转移","children":[]},{"level":3,"title":"3.2 如何进行故障转移","slug":"_3-2-如何进行故障转移","link":"#_3-2-如何进行故障转移","children":[]},{"level":3,"title":"3.3 什么是故障恢复","slug":"_3-3-什么是故障恢复","link":"#_3-3-什么是故障恢复","children":[]},{"level":3,"title":"3.4 如何进行故障恢复","slug":"_3-4-如何进行故障恢复","link":"#_3-4-如何进行故障恢复","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":19.5,"words":5850},"filePathRelative":"posts/Architect/base/arch-y-backup.md","localizedDate":"2024年10月28日","excerpt":"\\n<blockquote>\\n<p>容灾技术是系统的高可用性技术的一个组成部分，容灾系统更加强调处理外界环境对系统的影响，特别是灾难性事件对整个IT节点的影响，提供节点级别的系统恢复功能。故障转移（failover），即当活动的服务或应用意外终止时，快速启用<strong>冗余</strong>或备用的服务器、系统、硬件或者网络接替它们工作。故障恢复是在计划内或计划外中断解决后<strong>切换回主站点</strong>的过程。</p>\\n</blockquote>\\n<h2>1. 什么是容灾和备份？</h2>\\n<blockquote>\\n<p>容灾技术是系统的高可用性技术的一个组成部分，容灾系统更加强调处理外界环境对系统的影响，特别是灾难性事件对整个IT节点的影响，提供节点级别的系统恢复功能。</p>\\n</blockquote>","autoDesc":true}`);export{p as comp,c as data};
