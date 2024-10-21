import{_ as i,c as e,a,o as n}from"./app-BhoNqsD-.js";const t={};function s(h,l){return n(),e("div",null,l[0]||(l[0]=[a('<h1 id="第四章-存储器管理" tabindex="-1"><a class="header-anchor" href="#第四章-存储器管理"><span>第四章:存储器管理</span></a></h1><h2 id="存储器的层次结构" tabindex="-1"><a class="header-anchor" href="#存储器的层次结构"><span>存储器的层次结构</span></a></h2><h3 id="多层结构的存储系统" tabindex="-1"><a class="header-anchor" href="#多层结构的存储系统"><span>多层结构的存储系统</span></a></h3><ul><li>存储器的多层结构 <ul><li>CPU寄存器</li><li>主存</li><li>辅存</li></ul></li><li>可执行存储器 <ul><li>寄存器和主存的总称</li><li>访问速度快，进程可以在很少的时钟周期内用一条load或store指令完成存取。</li></ul></li></ul><h3 id="主存储器与寄存器" tabindex="-1"><a class="header-anchor" href="#主存储器与寄存器"><span>主存储器与寄存器</span></a></h3><h3 id="高速缓存和磁盘缓存" tabindex="-1"><a class="header-anchor" href="#高速缓存和磁盘缓存"><span>高速缓存和磁盘缓存</span></a></h3><h2 id="程序的装入和链接" tabindex="-1"><a class="header-anchor" href="#程序的装入和链接"><span>程序的装入和链接</span></a></h2><h3 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤"><span>步骤</span></a></h3><ul><li>编译 <ul><li>源程序 -&gt;目标模块（Object modules）--------Compiler <ul><li>由编译程序对用户源程序进行编译，形成若干个目标模块</li></ul></li></ul></li><li>链接 <ul><li>一组目标模块 -&gt;装入模块 （Load Module）----------Linker <ul><li>由链接程序将编译后形成的一组目标模板以及它们所需要的库函数链接在一起，形成一个完整的装入模块</li></ul></li></ul></li><li>装入 <ul><li>装入模块 -&gt;内存 --------Loader <ul><li>由装入程序将装入模块装入内存</li></ul></li></ul></li></ul><h3 id="程序的装入" tabindex="-1"><a class="header-anchor" href="#程序的装入"><span>程序的装入</span></a></h3><ul><li>绝对装入方式 <ul><li>在编译时，如果知道程序将驻留在内存中指定的位置。编译程序将产生绝对地址的目标代码。</li></ul></li><li>可重定位装入方式 <ul><li>在可执行文件中，列出各个需要重定位的地址单元和相对地址值。当用户程序被装入内存时，一次性实现逻辑地址到物理地址的转换，以后不再转换(一般在装入内存时由软件完成)。</li><li>优点：不需硬件支持，可以装入有限多道程序。</li><li>缺点：一个程序通常需要占用连续的内存空间，程序装入内存后不能移动。不易实现共享。</li></ul></li><li>动态运行时的装入方式 <ul><li>动态运行时的装入程序在把装入模块装入内存后，并不立即把装入模块中的逻辑地址转换为物理地址，而是把这种地址转换推迟到程序真正要执行时才进行</li><li>优点： <ul><li>OS可以将一个程序分散存放于不连续的内存空间，可以移动程序，有利用实现共享。</li><li>能够支持程序执行中产生的地址引用，如指针变量（而不仅是生成可执行文件时的地址引用）。</li></ul></li><li>缺点：需要硬件支持，OS实现较复杂。</li><li>它是虚拟存储的基础。</li></ul></li></ul><h3 id="程序的链接" tabindex="-1"><a class="header-anchor" href="#程序的链接"><span>程序的链接</span></a></h3><ul><li>静态链接方式(lib)</li><li>装入时动态链接</li><li>运行时动态链接(dll)</li></ul><h2 id="连续分配存储管理方式" tabindex="-1"><a class="header-anchor" href="#连续分配存储管理方式"><span>连续分配存储管理方式</span></a></h2><h3 id="连续分配" tabindex="-1"><a class="header-anchor" href="#连续分配"><span>连续分配</span></a></h3><ul><li>单一连续分配(DOS)</li><li>固定分区分配(浪费很多空间)</li><li>动态分区分配</li></ul><h3 id="地址映射和存储保护措施" tabindex="-1"><a class="header-anchor" href="#地址映射和存储保护措施"><span>地址映射和存储保护措施</span></a></h3><ul><li>基址寄存器：程序的最小物理地址</li><li>界限寄存器：程序的逻辑地址范围</li><li>物理地址 = 逻辑地址 + 基址</li></ul><h3 id="内碎片-占用分区之内未被利用的空间" tabindex="-1"><a class="header-anchor" href="#内碎片-占用分区之内未被利用的空间"><span>内碎片：占用分区之内未被利用的空间</span></a></h3><h3 id="外碎片-占用分区之间难以利用的空闲分区-通常是小空闲分区" tabindex="-1"><a class="header-anchor" href="#外碎片-占用分区之间难以利用的空闲分区-通常是小空闲分区"><span>外碎片：占用分区之间难以利用的空闲分区（通常是小空闲分区）</span></a></h3><h3 id="把内存划分为若干个固定大小的连续分区。固定式分区又称为静态分区。" tabindex="-1"><a class="header-anchor" href="#把内存划分为若干个固定大小的连续分区。固定式分区又称为静态分区。"><span>把内存划分为若干个固定大小的连续分区。固定式分区又称为静态分区。</span></a></h3><ul><li>分区大小相等：只适合于多个相同程序的并发执行（处理多个类型相同的对象）。</li><li>分区大小不等：多个小分区、适量的中等分区、少量的大分区。根据程序的大小，分配当前空闲的、适当大小的分区。</li><li>优点：无外碎片、易实现、开销小。</li><li>缺点： <ul><li>存在内碎片，造成浪费</li><li>分区总数固定，限制了并发执行的程序数目。</li><li>通用Os很少采用，部分控制系统中采用</li></ul></li></ul><h3 id="动态创建分区-指在作业装入内存时-从可用的内存中划出一块连续的区域分配给它-且分区大小正好等于该作业的大小。可变式分区中分区的大小和分区的个数都是可变的-而且是根据作业的大小和多少动态地划分。" tabindex="-1"><a class="header-anchor" href="#动态创建分区-指在作业装入内存时-从可用的内存中划出一块连续的区域分配给它-且分区大小正好等于该作业的大小。可变式分区中分区的大小和分区的个数都是可变的-而且是根据作业的大小和多少动态地划分。"><span>动态创建分区：指在作业装入内存时，从可用的内存中划出一块连续的区域分配给它，且分区大小正好等于该作业的大小。可变式分区中分区的大小和分区的个数都是可变的，而且是根据作业的大小和多少动态地划分。</span></a></h3><ul><li>基于顺序搜索的动态分区分配算法 <ul><li>首次适应算法（first fit,FF） <ul><li>顺序找，找到一个满足的就分配，但是可能存在浪费</li><li>这种方法目的在于减少查找时间。</li><li>空闲分区表（空闲区链）中的空闲分区要按地址由低到高进行排序</li></ul></li><li>循环首次适应算法（next fit，NF） <ul><li>相对上面那种，不是顺序，类似哈希算法中左右交叉排序</li><li>空闲分区分布得更均匀，查找开销小</li><li>从上次找到的空闲区的下一个空闲区开始查找，直到找到第一个能满足要求的的空闲区为止，并从中划出一块与请求大小相等的内存空间分配给作业。</li></ul></li><li>最佳适应算法（best fit，BF） <ul><li>找到最合适的，但是大区域的访问次数减少</li><li>这种方法能使外碎片尽量小。</li><li>空闲分区表（空闲区链）中的空闲分区要按大小从小到大进行排序，自表头开始查找到第一个满足要求的自由分区分配。</li></ul></li><li>最坏适应算法（worst fit，WF） <ul><li>相对于最好而言，找最大的区域下手，导致最大的区域可能很少，也造成许多碎片</li><li>空闲分区按大小由大到小排序</li></ul></li></ul></li><li>基于索引搜索的动态分区分配算法 <ul><li>快速适应算法（quick fit）</li><li>伙伴系统（buddy system）</li><li>哈希算法</li></ul></li><li>动态可重定位分区分配 <ul><li>紧凑</li><li>动态重定位 <ul><li>动态运行时装入，地址转化在指令执行时进行，需获得硬件地址变换机制的支持</li><li>内存地址=相对地址+起始地址</li></ul></li><li>动态重定位分区分配算法 <ul><li>1、在某个分区被释放后立即进行紧凑，系统总是只有一个连续的分区而无碎片，此法很花费机时。</li><li>2、当“请求分配模块”找不到足够大的自由分区分给用户时再进行紧凑，这样紧缩的次数比上种方法少得多，但管理复杂。采用此法的动态重定位分区分配算法框图如下：</li></ul></li></ul></li><li>优点：没有内碎片。</li><li>缺点：外碎片。</li></ul><h2 id="对换-了解" tabindex="-1"><a class="header-anchor" href="#对换-了解"><span>对换（了解）</span></a></h2><h3 id="系统把所有的作业放在外存-每次只调用一个作业进入内存运行-当时间片用完时-将它调至外存后备队列上等待-在从后备队列调入另一个作业进入内存运行。" tabindex="-1"><a class="header-anchor" href="#系统把所有的作业放在外存-每次只调用一个作业进入内存运行-当时间片用完时-将它调至外存后备队列上等待-在从后备队列调入另一个作业进入内存运行。"><span>系统把所有的作业放在外存，每次只调用一个作业进入内存运行，当时间片用完时，将它调至外存后备队列上等待，在从后备队列调入另一个作业进入内存运行。</span></a></h3><h2 id="基本分页存储管理方式" tabindex="-1"><a class="header-anchor" href="#基本分页存储管理方式"><span>基本分页存储管理方式</span></a></h2><h3 id="分页存储管理的基本方式" tabindex="-1"><a class="header-anchor" href="#分页存储管理的基本方式"><span>分页存储管理的基本方式</span></a></h3><ul><li>页面 <ul><li>将一个进程的逻辑地址空间分成若干个大小相等的片</li></ul></li><li>页框（frame） <ul><li>内存空间分成与页面相同大小的存储块</li></ul></li><li>由于进程的最后一页经常装不满一块而形成了不可利用的碎片，称之为“页内碎片”</li><li>地址结构 <ul><li>页号P+位移量W(0-31)</li></ul></li><li>页表 <ul><li>在分页系统中，允许将进程的各个页离散地存储在内存在内存的任一物理块中，为保证进程仍然能够正确地运行，即能在内存中找到每一个页面所对应的物理块，系统又为每个进程建立了一张页面映像表，简称页表</li><li>页表的作用是实现从页面号到物理块号的地址映射</li></ul></li></ul><h3 id="地址变换机构" tabindex="-1"><a class="header-anchor" href="#地址变换机构"><span>地址变换机构</span></a></h3><ul><li>基本的地址变换机构 <ul><li>要访问两次内存</li><li>页表大都驻留在内存中</li><li>为了实现地址变换功能，在系统中设置页表寄存器（PTR），用来存放页表的始址和页表的长度。</li><li>在进程未执行时，每个进程对应的页表的始址和长度存放在进程的PCB中，当该进程被调度时，就将它们装入页表寄存器。</li></ul></li><li>具有快表的地址变换机构 <ul><li>提高了效率，此处会有计算题</li><li>如果页表存放在内存中，则每次访问内存时，都要先访问内存中的页表，然后根据所形成的物理地址再访问内存。这样CPU存一个数据必须访问两次内存，从而使计算机的处理速度降低了1/2。</li><li>为了提高地址变换的速度，在地址变换机构中增设了一个具有并行查询功能的特殊的高速缓冲存储器，称为“联想存储器”或“快表”，用以存放当前访问的那些页表项。</li><li>地址变换过程为： <ul><li>1、CPU给出有效地址</li><li>2、地址变换机构自动地将页号送入高速缓存，确定所需要的页是否在快表中。</li><li>3、若是，则直接读出该页所对应的物理块号，送入物理地址寄存器；</li><li>4、若快表中未找到对应的页表项，则需再访问内存中的页表</li><li>5、找到后，把从页表中读出的页表项存入快表中的一个寄存器单元中，以取代一个旧的页表项。</li></ul></li></ul></li></ul><h3 id="两级和多级页表" tabindex="-1"><a class="header-anchor" href="#两级和多级页表"><span>两级和多级页表</span></a></h3><ul><li>主要是有的时候页表太多了，要化简</li><li>格式：外层页号P1+外层页内地址P2+页内地址d</li><li>基本方法：将页表进行分页，每个页面的大小与内存物理块的大小相同，并为它们进行编号，可以离散地将各个页面分别存放在不同的物理块中。</li></ul><h3 id="反置页表" tabindex="-1"><a class="header-anchor" href="#反置页表"><span>反置页表</span></a></h3><ul><li>反置页表为每一个物理块（页框）设置一个页表项，并按物理块排序，其内容则是页号和其所属进程的标识。</li></ul><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点：</span></a></h3><ul><li>没有外碎片，每个内碎片不超过页大小。</li><li>一个程序不必连续存放。</li><li>便于改变程序占用空间的大小。即随着程序运行而动态生成的数据增多，地址空间可相应增长。</li></ul><h3 id="缺点-程序全部装入内存。" tabindex="-1"><a class="header-anchor" href="#缺点-程序全部装入内存。"><span>缺点：程序全部装入内存。</span></a></h3><h2 id="分段存储管理方式" tabindex="-1"><a class="header-anchor" href="#分段存储管理方式"><span>分段存储管理方式</span></a></h2><h3 id="引入" tabindex="-1"><a class="header-anchor" href="#引入"><span>引入</span></a></h3><ul><li>方便编程</li><li>信息共享</li><li>动态增长</li><li>动态链接</li></ul><h3 id="在分段存储管理方式中-作业的地址空间被划分为若干个段-每个段是一组完整的逻辑信息-每个段都有自己的名字-都是从零开始编址的一段连续的地址空间-各段长度是不等的。" tabindex="-1"><a class="header-anchor" href="#在分段存储管理方式中-作业的地址空间被划分为若干个段-每个段是一组完整的逻辑信息-每个段都有自己的名字-都是从零开始编址的一段连续的地址空间-各段长度是不等的。"><span>在分段存储管理方式中，作业的地址空间被划分为若干个段，每个段是一组完整的逻辑信息，每个段都有自己的名字，都是从零开始编址的一段连续的地址空间，各段长度是不等的。</span></a></h3><h3 id="内存空间被动态的划分为若干个长度不相同的区域-称为物理段-每个物理段由起始地址和长度确定" tabindex="-1"><a class="header-anchor" href="#内存空间被动态的划分为若干个长度不相同的区域-称为物理段-每个物理段由起始地址和长度确定"><span>内存空间被动态的划分为若干个长度不相同的区域，称为物理段，每个物理段由起始地址和长度确定</span></a></h3><h3 id="分段系统的基本原理" tabindex="-1"><a class="header-anchor" href="#分段系统的基本原理"><span>分段系统的基本原理</span></a></h3><ul><li>分段 <ul><li>格式：段号+段内地址</li></ul></li><li>段表 <ul><li>段表实现了从逻辑段到物理内存区的映射。</li></ul></li><li>地址变换机构</li></ul><h3 id="和分页的区别" tabindex="-1"><a class="header-anchor" href="#和分页的区别"><span>和分页的区别</span></a></h3><ul><li>页是信息的物理单位</li><li>页的大小固定且由系统固定</li><li>分页的用户程序地址空间是一维的</li><li>通常段比页大，因而段表比页表短，可以缩短查找时间，提高访问速度。</li><li>分页是系统管理的需要，分段是用户应用的需要。一条指令或一个操作数可能会跨越两个页的分界处，而不会跨越两个段的分界处。</li></ul><h3 id="信息共享" tabindex="-1"><a class="header-anchor" href="#信息共享"><span>信息共享</span></a></h3><ul><li>这是分段最重要的优点</li></ul><h3 id="段页式存储管理方式" tabindex="-1"><a class="header-anchor" href="#段页式存储管理方式"><span>段页式存储管理方式</span></a></h3><ul><li>基本原理 <ul><li>格式：段号（S）+段内页号（P）+页内地址（W）</li></ul></li><li>地址变换过程 <ul><li>需要三次访问过程</li></ul></li><li>在段页式系统中，为了获得一条指令或数据，需三次访问内存：第一次访问内存中的段表，从中取得页表始址；第二次访问内存中的页表，从中取出该页所在的物理块号，并将该块号与页内地址一起形成指令或数据的物理地址；第三次访问才是真正根据所得的物理地址取出指令或数据。</li></ul><p><em>XMind: ZEN - Trial Version</em></p>',52)]))}const u=i(t,[["render",s],["__file","第四章 存储器管理.html.vue"]]),d=JSON.parse('{"path":"/posts/Computer-Basics/Operating-System/%E7%AC%AC%E5%9B%9B%E7%AB%A0%20%E5%AD%98%E5%82%A8%E5%99%A8%E7%AE%A1%E7%90%86.html","title":"5、存储器管理","lang":"zh-CN","frontmatter":{"title":"5、存储器管理","date":"2024-01-01 10:56","category":["操作系统"],"tag":["操作系统"],"description":"第四章:存储器管理 存储器的层次结构 多层结构的存储系统 存储器的多层结构 CPU寄存器 主存 辅存 可执行存储器 寄存器和主存的总称 访问速度快，进程可以在很少的时钟周期内用一条load或store指令完成存取。 主存储器与寄存器 高速缓存和磁盘缓存 程序的装入和链接 步骤 编译 源程序 ->目标模块（Object modules）--------C...","head":[["meta",{"property":"og:url","content":"https://mrjason.me/posts/Computer-Basics/Operating-System/%E7%AC%AC%E5%9B%9B%E7%AB%A0%20%E5%AD%98%E5%82%A8%E5%99%A8%E7%AE%A1%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"5、存储器管理"}],["meta",{"property":"og:description","content":"第四章:存储器管理 存储器的层次结构 多层结构的存储系统 存储器的多层结构 CPU寄存器 主存 辅存 可执行存储器 寄存器和主存的总称 访问速度快，进程可以在很少的时钟周期内用一条load或store指令完成存取。 主存储器与寄存器 高速缓存和磁盘缓存 程序的装入和链接 步骤 编译 源程序 ->目标模块（Object modules）--------C..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"操作系统"}],["meta",{"property":"article:published_time","content":"2024-01-01T10:56:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5、存储器管理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-01T10:56:00.000Z\\",\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjason.me\\"}]}"]]},"headers":[{"level":2,"title":"存储器的层次结构","slug":"存储器的层次结构","link":"#存储器的层次结构","children":[{"level":3,"title":"多层结构的存储系统","slug":"多层结构的存储系统","link":"#多层结构的存储系统","children":[]},{"level":3,"title":"主存储器与寄存器","slug":"主存储器与寄存器","link":"#主存储器与寄存器","children":[]},{"level":3,"title":"高速缓存和磁盘缓存","slug":"高速缓存和磁盘缓存","link":"#高速缓存和磁盘缓存","children":[]}]},{"level":2,"title":"程序的装入和链接","slug":"程序的装入和链接","link":"#程序的装入和链接","children":[{"level":3,"title":"步骤","slug":"步骤","link":"#步骤","children":[]},{"level":3,"title":"程序的装入","slug":"程序的装入","link":"#程序的装入","children":[]},{"level":3,"title":"程序的链接","slug":"程序的链接","link":"#程序的链接","children":[]}]},{"level":2,"title":"连续分配存储管理方式","slug":"连续分配存储管理方式","link":"#连续分配存储管理方式","children":[{"level":3,"title":"连续分配","slug":"连续分配","link":"#连续分配","children":[]},{"level":3,"title":"地址映射和存储保护措施","slug":"地址映射和存储保护措施","link":"#地址映射和存储保护措施","children":[]},{"level":3,"title":"内碎片：占用分区之内未被利用的空间","slug":"内碎片-占用分区之内未被利用的空间","link":"#内碎片-占用分区之内未被利用的空间","children":[]},{"level":3,"title":"外碎片：占用分区之间难以利用的空闲分区（通常是小空闲分区）","slug":"外碎片-占用分区之间难以利用的空闲分区-通常是小空闲分区","link":"#外碎片-占用分区之间难以利用的空闲分区-通常是小空闲分区","children":[]},{"level":3,"title":"把内存划分为若干个固定大小的连续分区。固定式分区又称为静态分区。","slug":"把内存划分为若干个固定大小的连续分区。固定式分区又称为静态分区。","link":"#把内存划分为若干个固定大小的连续分区。固定式分区又称为静态分区。","children":[]},{"level":3,"title":"动态创建分区：指在作业装入内存时，从可用的内存中划出一块连续的区域分配给它，且分区大小正好等于该作业的大小。可变式分区中分区的大小和分区的个数都是可变的，而且是根据作业的大小和多少动态地划分。","slug":"动态创建分区-指在作业装入内存时-从可用的内存中划出一块连续的区域分配给它-且分区大小正好等于该作业的大小。可变式分区中分区的大小和分区的个数都是可变的-而且是根据作业的大小和多少动态地划分。","link":"#动态创建分区-指在作业装入内存时-从可用的内存中划出一块连续的区域分配给它-且分区大小正好等于该作业的大小。可变式分区中分区的大小和分区的个数都是可变的-而且是根据作业的大小和多少动态地划分。","children":[]}]},{"level":2,"title":"对换（了解）","slug":"对换-了解","link":"#对换-了解","children":[{"level":3,"title":"系统把所有的作业放在外存，每次只调用一个作业进入内存运行，当时间片用完时，将它调至外存后备队列上等待，在从后备队列调入另一个作业进入内存运行。","slug":"系统把所有的作业放在外存-每次只调用一个作业进入内存运行-当时间片用完时-将它调至外存后备队列上等待-在从后备队列调入另一个作业进入内存运行。","link":"#系统把所有的作业放在外存-每次只调用一个作业进入内存运行-当时间片用完时-将它调至外存后备队列上等待-在从后备队列调入另一个作业进入内存运行。","children":[]}]},{"level":2,"title":"基本分页存储管理方式","slug":"基本分页存储管理方式","link":"#基本分页存储管理方式","children":[{"level":3,"title":"分页存储管理的基本方式","slug":"分页存储管理的基本方式","link":"#分页存储管理的基本方式","children":[]},{"level":3,"title":"地址变换机构","slug":"地址变换机构","link":"#地址变换机构","children":[]},{"level":3,"title":"两级和多级页表","slug":"两级和多级页表","link":"#两级和多级页表","children":[]},{"level":3,"title":"反置页表","slug":"反置页表","link":"#反置页表","children":[]},{"level":3,"title":"优点：","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点：程序全部装入内存。","slug":"缺点-程序全部装入内存。","link":"#缺点-程序全部装入内存。","children":[]}]},{"level":2,"title":"分段存储管理方式","slug":"分段存储管理方式","link":"#分段存储管理方式","children":[{"level":3,"title":"引入","slug":"引入","link":"#引入","children":[]},{"level":3,"title":"在分段存储管理方式中，作业的地址空间被划分为若干个段，每个段是一组完整的逻辑信息，每个段都有自己的名字，都是从零开始编址的一段连续的地址空间，各段长度是不等的。","slug":"在分段存储管理方式中-作业的地址空间被划分为若干个段-每个段是一组完整的逻辑信息-每个段都有自己的名字-都是从零开始编址的一段连续的地址空间-各段长度是不等的。","link":"#在分段存储管理方式中-作业的地址空间被划分为若干个段-每个段是一组完整的逻辑信息-每个段都有自己的名字-都是从零开始编址的一段连续的地址空间-各段长度是不等的。","children":[]},{"level":3,"title":"内存空间被动态的划分为若干个长度不相同的区域，称为物理段，每个物理段由起始地址和长度确定","slug":"内存空间被动态的划分为若干个长度不相同的区域-称为物理段-每个物理段由起始地址和长度确定","link":"#内存空间被动态的划分为若干个长度不相同的区域-称为物理段-每个物理段由起始地址和长度确定","children":[]},{"level":3,"title":"分段系统的基本原理","slug":"分段系统的基本原理","link":"#分段系统的基本原理","children":[]},{"level":3,"title":"和分页的区别","slug":"和分页的区别","link":"#和分页的区别","children":[]},{"level":3,"title":"信息共享","slug":"信息共享","link":"#信息共享","children":[]},{"level":3,"title":"段页式存储管理方式","slug":"段页式存储管理方式","link":"#段页式存储管理方式","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":10.08,"words":3023},"filePathRelative":"posts/Computer-Basics/Operating-System/第四章 存储器管理.md","localizedDate":"2024年1月1日","excerpt":"\\n<h2>存储器的层次结构</h2>\\n<h3>多层结构的存储系统</h3>\\n<ul>\\n<li>存储器的多层结构\\n<ul>\\n<li>CPU寄存器</li>\\n<li>主存</li>\\n<li>辅存</li>\\n</ul>\\n</li>\\n<li>可执行存储器\\n<ul>\\n<li>寄存器和主存的总称</li>\\n<li>访问速度快，进程可以在很少的时钟周期内用一条load或store指令完成存取。</li>\\n</ul>\\n</li>\\n</ul>\\n<h3>主存储器与寄存器</h3>\\n<h3>高速缓存和磁盘缓存</h3>\\n<h2>程序的装入和链接</h2>\\n<h3>步骤</h3>\\n<ul>\\n<li>编译\\n<ul>\\n<li>源程序 -&gt;目标模块（Object modules）--------Compiler\\n<ul>\\n<li>由编译程序对用户源程序进行编译，形成若干个目标模块</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>链接\\n<ul>\\n<li>一组目标模块 -&gt;装入模块 （Load Module）----------Linker\\n<ul>\\n<li>由链接程序将编译后形成的一组目标模板以及它们所需要的库函数链接在一起，形成一个完整的装入模块</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>装入\\n<ul>\\n<li>装入模块 -&gt;内存  --------Loader\\n<ul>\\n<li>由装入程序将装入模块装入内存</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{u as comp,d as data};
