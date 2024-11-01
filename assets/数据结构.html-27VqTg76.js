import{_ as i,c as e,a,o as r}from"./app-tJW29Kmg.js";const n={};function t(u,l){return r(),e("div",null,l[0]||(l[0]=[a('<h1 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构"><span>数据结构</span></a></h1><h2 id="第一章-数据结构" tabindex="-1"><a class="header-anchor" href="#第一章-数据结构"><span>第一章：数据结构</span></a></h2><p>基本概念</p><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h3><ul><li>在任何问题中，数据元素都不是孤立存在的，而是在它们之间存在着某种关系，这种数据元素相互之间的关系称为结构（Structure）。数据结构是相互之间存在一种或多种特定关系的数据元素的集合。数据结构包括三方面的内容：逻辑结构、存储结构和数据的运算。数据的逻辑结构和存储结构是密不可分的两个方面，一个算法的设计取决于所选定的逻辑结构，而算法的实现依赖于所采用的存储结构。</li></ul><h3 id="逻辑结构" tabindex="-1"><a class="header-anchor" href="#逻辑结构"><span>逻辑结构</span></a></h3><ul><li>逻辑结构是指数据元素之间的逻辑关系，即从逻辑关系上描述数据。它与数据的存储无关，是独立于计算机的</li><li>数据的逻辑结构分为线性结构和非线性结构 <ul><li>集合 结构中的数据元素之间除了“同属于一个集合”的关系外，别无其他关系。 类似于数学上的集合</li><li>线性结构 结构中的数据元素之间只存在一对一的关系。比如排队</li><li>树形结构 结构中的数据元素之间存在一对多的关系。比如家族族谱</li><li>图状结构或网状结构 结构中的数据元素之间存在多对多的关系。 比如地图</li></ul></li></ul><h3 id="物理结构" tabindex="-1"><a class="header-anchor" href="#物理结构"><span>物理结构</span></a></h3><ul><li>存储结构是指数据结构在计算机中的表示（又称映像），也称物理结构。它包括数据元素的表示和关系的表示。数据的存储结构是逻辑结构用计算机语言的实现，它依赖于计算机语言。数据的存储结构主要有：顺序存储、链式存储、索引存储和散列存储。 <ul><li>顺序存储：存储的物理位置相邻。（p.s. 物理位置即信息在计算机中的位置。）</li><li>链接存储：存储的物理位置未必相邻，通过记录相邻元素的物理位置来找到相邻元素。</li><li>索引存储：类似于目录，以后可以联系操作系统的文件系统章节来理解。</li><li>散列存储：通过关键字直接计算出元素的物理地址（以后详解）。</li></ul></li></ul><h3 id="算法的五个特征" tabindex="-1"><a class="header-anchor" href="#算法的五个特征"><span>算法的五个特征</span></a></h3><ul><li>1，有穷性：有限步之后结束</li><li>2，确定性：不存在二义性，即没有歧义</li><li>3，可行性：比如受限于计算机的计算能力，有些算法虽然理论上可行，但实际上无法完成。</li><li>4，输入：能被计算机处理的各种类型数据，如数字，音频，图像等等。</li><li>5，输出：一至多个程序输出结果。</li></ul><h3 id="算法的复杂度" tabindex="-1"><a class="header-anchor" href="#算法的复杂度"><span>算法的复杂度</span></a></h3><ul><li>时间复杂度： <ul><li>• 它用来衡量算法随着问题规模增大，算法执行时间增长的快慢；</li><li>• 是问题规模的函数：T(n)是时间规模函数 时间复杂度主要分析T(n)的数量级</li><li>• T(n)=O(f(n)) f(n)是算法中基本运算的频度 一般我们考虑最坏情况下的时间复杂度</li></ul></li><li>空间复杂度： <ul><li>• 它用来衡量算法随着问题规模增大，算法所需空间的快慢；</li><li>• 是问题规模的函数：S(n)=O(g(n)) ；算法所需空间的增长率和g(n)的增长率相同。</li></ul></li></ul><h3 id="概要-复杂度计算为重点" tabindex="-1"><a class="header-anchor" href="#概要-复杂度计算为重点"><span>概要: 复杂度计算为重点</span></a></h3><ul><li>常用的时间复杂度大小关系：</li><li>复杂度如何计算 <ul><li>时间复杂度计算（单个循环体） <ul><li>直接关注循环体的执行次数，设为k</li></ul></li><li>时间复杂度计算（多个循环体） <ul><li>两个运算规则：乘法规则，加法规则。</li></ul></li></ul></li></ul><h2 id="第二章-线性表" tabindex="-1"><a class="header-anchor" href="#第二章-线性表"><span>第二章：线性表</span></a></h2><h3 id="线性表的逻辑结构" tabindex="-1"><a class="header-anchor" href="#线性表的逻辑结构"><span>线性表的逻辑结构</span></a></h3><ul><li>定义：线性表是具有相同数据类型的n（n≥0）个数据元素的有限序列。其中n为表长。当n=0时 线性表是一个空表</li><li>特点：线性表中第一个元素称为表头元素；最后一个元素称为表尾元素。<br> 除第一个元素外，每个元素有且仅有一个直接前驱。<br> 除最后一个元素外，每个元素有且仅有一个直接后继。</li></ul><h3 id="线性表的顺序存储结构" tabindex="-1"><a class="header-anchor" href="#线性表的顺序存储结构"><span>线性表的顺序存储结构</span></a></h3><ul><li>线性表的顺序存储又称为顺序表。<br> 它是用一组地址连续的存储单元（比如C语言里面的数组），依次存储线性表中的数据元素，从而使得逻<br> 辑上相邻的两个元素在物理位置上也相邻。</li><li>建立顺序表的三个属性:<br> 1.存储空间的起始位置（数组名data）<br> 2.顺序表最大存储容量（MaxSize）<br> 3.顺序表当前的长度（length）</li><li>其实数组还可以动态分配空间，存储数组的空间是在程序执行过程中通过动态存储分配语句分配</li><li>总结： <ul><li>1.顺序表最主要的特点是随机访问（C语言中基于数组），即通过首地址和元素序号可以在O(1)的时间内找到指定的元素。</li><li>2.顺序表的存储密度高，每个结点只存储数据元素。无需给表中元素花费空间建立它们之间的逻辑关系（因为物理位置相邻特性决定）</li><li>3.顺序表逻辑上相邻的元素物理上也相邻，所以插入和删除操作需要移动大量元素。</li></ul></li></ul><h3 id="顺序表的操作" tabindex="-1"><a class="header-anchor" href="#顺序表的操作"><span>顺序表的操作</span></a></h3><ul><li>1.插入 <ul><li>算法思路： <ul><li>1.判断i的值是否正确</li><li>2.判断表长是否超过数组长度</li><li>3.从后向前到第i个位置，分别将这些元素都向后移动一位</li><li>4.将该元素插入位置i 并修改表长</li></ul></li><li>代码</li><li>分析： <ul><li>最好情况：在表尾插入（即i=n+1），元素后移语句将不执行，时间复杂度为O(1)。</li><li>最坏情况：在表头插入（即i=1），元素后移语句将执行<br> n次，时间复杂度为O(n)。</li><li>平均情况：假设pi（pi=1/(n+1) ）是在第i个位置上插入<br> 一个结点的概率，则在长度为n的线性表中插入一个结<br> 点时所需移动结点的平均次数为</li></ul></li></ul></li><li>2.删除 <ul><li>算法思路： <ul><li>1.判断i的值是否正确</li><li>2.取删除的元素</li><li>3.将被删元素后面的所有元素都依次向前移动一位</li><li>4.修改表长</li></ul></li><li>代码</li><li>分析 <ul><li>最好情况：删除表尾元素（即i=n），无须移动元素，时间复杂度为O(1)。</li><li>最坏情况：删除表头元素（即i=1），需要移动除第一个元素外的所有元素，时间复杂度为O(n)。</li><li>平均情况：假设pi(pi=1/n)是删除第i个位置上结点的概率，则在长度为n的线性表中删除一个结点时所需移动结点的平均次数为</li></ul></li></ul></li></ul><h3 id="线性表的链式存储结构" tabindex="-1"><a class="header-anchor" href="#线性表的链式存储结构"><span>线性表的链式存储结构</span></a></h3><ul><li>线性表的链式存储是指通过一组任意的存储单元来存储线性表中的数据元素。</li><li>头结点和头指针的区别？ <ul><li>不管带不带头结点，头指针始终指向链表的第一个结点，而头结点是带头结点链表中的第一个结点，结点内通常不存储信息</li></ul></li><li>为什么要设置头结点？ <ul><li>1.处理操作起来方便 例如：对在第一元素结点前插入结点和删除第一结点起操作与其它结点的操作就统一了</li><li>2.无论链表是否为空，其头指针是指向头结点的非空指针，因此空表和非空表的处理也就统一了。</li></ul></li></ul><h3 id="单链表的操作" tabindex="-1"><a class="header-anchor" href="#单链表的操作"><span>单链表的操作</span></a></h3><ul><li>1.头插法建立单链表： <ul><li>建立新的结点分配内存空间，将新结点插入到当前链表的表头</li><li>代码</li></ul></li><li>2.尾插法建立单链表： <ul><li>建立新的结点分配内存空间，将新结点插入到当前链表的表尾</li><li>代码</li></ul></li><li>3.按序号查找结点 <ul><li>在单链表中从第一个结点出发，顺指针next域逐个往下搜索，直到找到第i个结点为止,否则返回最后一个结点指针域NULL。</li><li>代码</li></ul></li><li>4.按值查找结点 <ul><li>从单链表第一个结点开始，由前往后依次比较表中各结点数据域的值，若某结点数据域的值等于给定值e，则返回该结点的指针；若整个单链表中没有这样的结点，则返回NULL。</li><li>代码</li></ul></li><li>5．插入 <ul><li>插入操作是将值为x的新结点插入到单链表的第i个位置上。先检查插入位置的合法性，然后找到待插入位置的前驱结点，即第i−1个结点，再在其后插入新结点。</li><li>算法思路：<br> 1.取指向插入位置的前驱结点的指针<br> ① p=GetElem(L,i-1);<br> 2.令新结点<em>s的指针域指向</em>p的后继结点<br> ② s-&gt;next=p-&gt;next;<br> 3.令结点<em>p的指针域指向新插入的结点</em>s<br> ③ p-&gt;next=s;</li></ul></li><li>6．删除 <ul><li>删除操作是将单链表的第i个结点删除。先检查删除位置的合法性，然后查找表中第i−1个结点，即被删结点的前驱结点，再将其删除。</li><li>算法思路：<br> 1.取指向删除位置的前驱结点的指针 p=GetElem(L,i-1);<br> 2.取指向删除位置的指针 q=p-&gt;next;<br> 3.p指向结点的后继指向被删除结点的后继 p-&gt;next=q-&gt;next<br> 4.释放删除结点 free(q);</li></ul></li></ul><h3 id="双链表" tabindex="-1"><a class="header-anchor" href="#双链表"><span>双链表</span></a></h3><ul><li>定义</li><li>1.插入：(方法不唯一)<br> ① s-&gt;next=p-&gt;next;<br> ② p-&gt;next-&gt;prior=s;<br> ③ s-&gt;prior=p;<br> ④ p-&gt;next=s;</li><li>2.删除：<br> ① p-&gt;next=q-&gt;next;<br> ② q-&gt;next-&gt;prior=p;<br> ③ free(q);</li></ul><h3 id="循环链表-静态链表" tabindex="-1"><a class="header-anchor" href="#循环链表-静态链表"><span>循环链表&amp;&amp;静态链表</span></a></h3><ul><li>循环单链表：循环单链表和单链表的区别在于，表中最后一个结点的指针不是NULL，而改为指向头结点，从而整个链表形成一个环</li><li>循环双链表：类比循环单链表，循环双链表链表区别于双链表就是首尾结点构成环 <ul><li>当循环双链表为空表时，其头结点的prior域和next域都等于Head。</li></ul></li><li>静态链表：静态链表是用数组来描述线性表的链式存储结构。 <ul><li>数组第一个元素不存储数据，它的指针域存储第一个元素所在的数组下标。链表最后一个元素的指针域值为-1。</li><li>例子</li></ul></li></ul><h2 id="第三章-栈和队列" tabindex="-1"><a class="header-anchor" href="#第三章-栈和队列"><span>第三章：栈和队列</span></a></h2><h3 id="栈" tabindex="-1"><a class="header-anchor" href="#栈"><span>栈</span></a></h3><ul><li>栈（Stack）：只允许在一端进行插入或删除操作的线性表。</li><li>栈顶（Top）：线性表允许进行插入和删除的那一端。</li><li>栈底（Bottom）：固定的，不允许进行插入和删除的另一端</li><li>特点：<br> 1.栈是受限的线性表，所以自然具有线性关<br> 系。<br> 2.栈中元素后进去的必然先出来，即后进先出<br> LIFO（Last In First Out） <ul><li>栈中元素后进<br> 去的必然先出<br> 来，即后进先<br> 出LIFO（Last In<br> First Out）</li></ul></li><li>顺序栈 <ul><li>栈是线性表的特例，那栈的顺序存储也是线性表顺序存储的简化。栈的顺序存储结构也叫作顺序栈。</li><li>顺序栈的操作 <ul><li>1.判空：</li><li>2.进栈：</li><li>3.出栈：</li><li>4.读取栈顶元素：</li></ul></li></ul></li><li>共享栈 <ul><li>顺序栈的存储空间大小需要事先开辟好，很多时候对每个栈各自单独开辟存储空间的利用率不如将各个栈的存储空间共享</li><li>示意图</li><li>共享栈的结构</li><li>共享栈的操作：（进栈）</li></ul></li><li>链式栈 <ul><li>栈是线性表的特例，线性表的存储结构还有链式存储结构，所以也可以用链表的方式来实现栈。栈的链式存储结构也叫作链栈。</li><li>特点<br> 1.链栈一般不存在栈满的情况。<br> 2.空栈的判定条件通常定为top==NULL；</li><li>结构</li><li>链式栈的操作 <ul><li>1.进栈</li><li>2.出栈</li></ul></li></ul></li></ul><h3 id="队列" tabindex="-1"><a class="header-anchor" href="#队列"><span>队列</span></a></h3><ul><li>队列是只允许在一端进行插入，而在另一端进行删除的线性表</li><li>队头（Front）：允许删除的一端，又称为队首。</li><li>队尾（Rear）： 允许插入的一端。</li><li>先进入队列的元素必然先离开队列，即先进先出（First In First Out）简称FIFO</li><li>顺序队列 <ul><li>用数组来实现队列，可以将队首放在数组下标为0的位置。</li></ul></li><li>循环队列 <ul><li>把数组“掰弯”，形成一个环。Rear指针到了下标为4的位置还能继续指回到下标为0的地方。这样首尾相连的顺序存储的队列就叫循环队列</li><li>入队：rear=(rear+1)%MaxSize</li><li>出队：front=(front+1)%MaxSize</li><li>循环队列的操作 <ul><li>1.入队：</li><li>2.出队：</li></ul></li><li>概要: 那如何分辨队列是空还是满呢？ <ul><li>方法一：设置标志位flag，当flag=0且rear等于front时为队列空，当flag=1且rear等于front时为队列满。</li><li>方法二：我们把front=rear仅作为队空的判定条件。当队列满的时候，令数组中仍然保留一个空余单元。我们认为这种情况就是队列满了。</li></ul></li></ul></li><li>链式队列 <ul><li>队列的链式存储结构，其实就是线性表的单链表，只不过需要加点限制，只能表尾插入元素，表头删除元素。</li><li>为了方便操作，我们分别设置队头指针和队尾指针，队头指针指向头结点，队尾指针指向尾结点。</li><li>链式队列的操作 <ul><li><p>1.入队：我们知道队列只能从队尾插入元素，队头删除元素。于是入队就是在队尾指针进行插入结点操作。链队的插入操作和单链表的插入操作是一致的。</p></li><li><p>2.出队：出队就是头结点的后继结点出队，然后将头结点的后继改为它后面的结点。</p></li></ul></li></ul></li><li>双端队列 <ul><li>双端队列是指允许两端都可以进行入队和出队操作的队列</li></ul></li></ul><h3 id="栈的应用" tabindex="-1"><a class="header-anchor" href="#栈的应用"><span>栈的应用</span></a></h3><ul><li>1、括号匹配：假设有两种括号，一种圆的()，一种方的[]，嵌套的顺序是任意的。 <ul><li><p>算法思想：若是左括号，入栈；若是右括号，出栈一个左括号判断是否与之匹配；检验到字符串尾，还要检查栈是否为空。只有栈空，整个字符串才是括号匹配的。</p></li><li><p>代码</p></li></ul></li><li>2、表达式求值：<br> * <ul><li>规则：从左到右扫描表达式的每个数字和符号，遇到数字就进栈，遇到符号就将处于栈顶的两个数字出栈然后跟这个符号进行运算，最后将运算结果进栈，直到最终获得结果。</li></ul></li><li>3、递归： <ul><li>要理解递归，你要先理解递归，直到你能理解递归。<br> 如果在一个函数、过程或数据结构的定义中又应用了它自身，那么这个函数、过程或数据结构称为是递归定义的，简称递归。递归最重要的是递归式和递归边界。</li><li>1.阶乘 <ul><li>时间复杂度：O(NlogN)</li></ul></li><li>2.斐波那契数列 <ul><li>时间复杂度 O(2^n)</li></ul></li></ul></li><li>概要: 如何将中缀表达式转换成后缀表达式？ <ul><li>1.按运算符优先级对所有运算符和它的运算数加括号。(原本的括号不用加)</li><li>2.把运算符移到对应的括号后。</li><li>3.去掉括号。</li><li>例子</li></ul></li></ul><h2 id="第四章-树" tabindex="-1"><a class="header-anchor" href="#第四章-树"><span>第四章：树</span></a></h2><h3 id="树的基本概念" tabindex="-1"><a class="header-anchor" href="#树的基本概念"><span>树的基本概念</span></a></h3><ul><li>树是递归定义的结构</li><li>结点 <ul><li>根节点：树只有一个根结点</li><li>结点的度：结点拥有的子树的数量 <ul><li>度为0：叶子结点或者终端结点</li><li>度不为0：分支结点或者非终端结点 <ul><li>分支结点除去根结点也称为内部结点</li></ul></li></ul></li></ul></li><li>树的度：树中所有结点的度数的最大值</li><li>结点关系 <ul><li>祖先结点 <ul><li>根结点到该结点的唯一路径的任意结点</li></ul></li><li>子孙结点</li><li>双亲结点 <ul><li>根结点到该结点的唯一路径上最接近该结点的结点</li></ul></li><li>孩子结点</li><li>兄弟结点 <ul><li>有相同双亲结点的结点</li></ul></li></ul></li><li>层次，高度，深度，树的高度 <ul><li>层次：根为第一层，它的孩子为第二层，以此类推</li><li>结点的深度：根结点开始自顶向下累加</li><li>结点的高度：叶节点开始自底向上累加</li><li>树的高度（深度）：树中结点的最大层数</li></ul></li><li>树的性质 <ul><li>1.树中的结点数等于所有结点的度数加1。 <ul><li>证明：不难想象，除根结点以外，每个结点有且仅有一个指向它的前驱结点。也就是说每个结点和指向它的分支一一对应。<br> 假设树中一共有b个分支，那么除了根结点，整个树就包含有b个结点，所以整个树的结点数就是这b个结点加上根结点，设为n，则n=b+1。而分支数b也就是所有结点的度数，证毕。</li></ul></li><li>2.度为m的树中第i层上至多有m^(i−1)个结点（i≥1）。 <ul><li>证明：（数学归纳法）<br> 首先考虑i=1的情况：第一层只有根结点，即一个结点，i=1带入式子满足。<br> 假设第i-1层满足这个性质，第i-1层最多有m i-2个结点。<br> ……… ..........<br> i-1层<br> ………<br> 又因为树的度为m,所以对于第i-1层的每个结点，最多<br> 有m个孩子结点。所以第i层的结点数最多是i-1层的m<br> 倍，所以第i层上最多有m ^(i-1)个结点。</li></ul></li><li>3.高度为h的m叉树至多有(m^h-1)/(m-1)个结点</li><li>4.具有n个结点的m叉树的最小高度为logm(n(m-1)+1)</li></ul></li></ul><h3 id="树的存储结构" tabindex="-1"><a class="header-anchor" href="#树的存储结构"><span>树的存储结构</span></a></h3><ul><li>顺序存储结构 <ul><li>双亲表示法：用一组连续的存储空间存储树的结点，同时在每个结点中，用一个变量存储该结点的双亲结点在数组中的位置。</li></ul></li><li>链式存储结构 <ul><li><p>孩子表示法：把每个结点的孩子结点排列起来存储成一个单链表。所以n个结点就有n个链表；<br> 如果是叶子结点，那这个结点的孩子单链表就是空的；<br> 然后n个单链表的的头指针又存储在一个顺序表（数组）中。</p></li><li><p>孩子兄弟表示法：顾名思义就是要存储孩子和孩子结点的兄弟，具体来说，就是设置两个指针，分别指向该结<br> 点的第一个孩子结点和这个孩子结点的右兄弟结点。</p></li></ul></li></ul><h3 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树"><span>二叉树</span></a></h3><ul><li>定义 <ul><li>二叉树是n（n≥0）个结点的有限集合：<br> ① 或者为空二叉树，即n=0。<br> ② 或者由一个根结点和两个互不相交的被称为根的左子树<br> 和右子树组成。左子树和右子树又分别是一棵二叉树。 <ul><li>1.每个结点最多有两棵子树。</li><li>2.左右子树有顺序</li></ul></li></ul></li><li>二叉树的五种基本形态： <ul><li>1.空树</li><li>2.只有一个根结点</li><li>3.根结点只有左子树</li><li>4.根结点只有右子树</li><li>5.根结点既有左子树又有右子树</li></ul></li><li>特殊二叉树 <ul><li>1.斜树</li><li>2.满二叉树:</li><li>3.完全二叉树</li></ul></li><li>二叉树的性质 <ul><li>1.非空二叉树上叶子结点数等于度为2的结点数加1</li><li>2.非空二叉树上第K层上至多有2^k−1个结点（K≥1）</li><li>3.高度为H的二叉树至多有2^H-1个结点（H≥1）</li><li>4.具有N个（N&gt;0）结点的完全二叉树的高度为 [log2(N+1)]或[log2N] +1。</li></ul></li></ul><h3 id="二叉树的存储结构" tabindex="-1"><a class="header-anchor" href="#二叉树的存储结构"><span>二叉树的存储结构</span></a></h3><ul><li>顺序存储 <ul><li>二叉树的顺序存储结构就是用一组地址连续的存储单元依次自上而下、自左至右存储完全二叉树上的结点元素。</li></ul></li><li>链式存储 <ul><li>二叉树每个结点最多两个孩子，所以设计二叉树的结点结构时考虑两个指针指向该结点的两个孩子。</li></ul></li></ul><h3 id="二叉树的遍历" tabindex="-1"><a class="header-anchor" href="#二叉树的遍历"><span>二叉树的遍历</span></a></h3><ul><li>先序遍历：<br> 1）访问根结点；<br> 2）先序遍历左子树；<br> 3）先序遍历右子树。 <ul><li>递归</li><li>非递归</li></ul></li><li>中序遍历：<br> 1）中序遍历左子树；<br> 2）访问根结点；<br> 3）中序遍历右子树。 <ul><li>递归</li><li>非递归</li></ul></li><li>后序遍历：<br> 1）后序遍历左子树；<br> 2）后序遍历右子树；<br> 3）访问根结点。 <ul><li>递归</li><li>非递归</li></ul></li><li>层次遍历：<br> 若树为空，则什么都不做直接返回。<br> 否则从树的第一层开始访问，从上而下逐层遍历，在同一层中，按从左到右的顺序对结点逐个访问。</li></ul><h3 id="线索二叉树" tabindex="-1"><a class="header-anchor" href="#线索二叉树"><span>线索二叉树</span></a></h3><ul><li><p>N个结点的二叉链表，每个结点都有指向左右孩子的<br> 结点指针，所以一共有2N个指针，而N个结点的二叉<br> 树一共有N-1条分支，也就是说存在2N-(N-1)=N+1个空指针。比如左图二叉树中有6个结点，那么就有7个空<br> 指针。</p></li><li><p>大量的空余指针能否利用起来？</p><ul><li>指向前驱和后继的指针称为线索，加上线索的二叉链表就称为线索链表，相应的二叉树就称为线索二叉树</li><li>对二叉树以某种次序遍历使其变为线索二叉树的过程就叫做线索化</li></ul></li></ul><h3 id="哈夫曼树和哈夫曼编码" tabindex="-1"><a class="header-anchor" href="#哈夫曼树和哈夫曼编码"><span>哈夫曼树和哈夫曼编码</span></a></h3><ul><li>算法的描述如下：<br> 1）将这N个结点分别作为N棵仅含一个结点的二叉树，构成森林F。<br> 2）构造一个新结点，并从F中选取两棵根结点权值最小的树作为新结点的左、右子树，并且将新结点的权值<br> 置为左、右子树上根结点的权值之和。<br> 3）从F中删除刚才选出的两棵树，同时将新得到的树加入F中。<br> 4）重复步骤2）和3），直至F中只剩下一棵树为止。</li></ul>',52)]))}const h=i(n,[["render",t],["__file","数据结构.html.vue"]]),p=JSON.parse('{"path":"/posts/Data-Structure/Structure/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html","title":"1、数据结构概念","lang":"zh-CN","frontmatter":{"title":"1、数据结构概念","date":"2024-03-10 07:56","category":["数据结构"],"tag":["数据结构"],"description":"数据结构 第一章：数据结构 基本概念 定义 在任何问题中，数据元素都不是孤立存在的，而是在它们之间存在着某种关系，这种数据元素相互之间的关系称为结构（Structure）。数据结构是相互之间存在一种或多种特定关系的数据元素的集合。数据结构包括三方面的内容：逻辑结构、存储结构和数据的运算。数据的逻辑结构和存储结构是密不可分的两个方面，一个算法的设计取决于...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Data-Structure/Structure/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"1、数据结构概念"}],["meta",{"property":"og:description","content":"数据结构 第一章：数据结构 基本概念 定义 在任何问题中，数据元素都不是孤立存在的，而是在它们之间存在着某种关系，这种数据元素相互之间的关系称为结构（Structure）。数据结构是相互之间存在一种或多种特定关系的数据元素的集合。数据结构包括三方面的内容：逻辑结构、存储结构和数据的运算。数据的逻辑结构和存储结构是密不可分的两个方面，一个算法的设计取决于..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"数据结构"}],["meta",{"property":"article:published_time","content":"2024-03-10T07:56:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1、数据结构概念\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-10T07:56:00.000Z\\",\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"第一章：数据结构","slug":"第一章-数据结构","link":"#第一章-数据结构","children":[{"level":3,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":3,"title":"逻辑结构","slug":"逻辑结构","link":"#逻辑结构","children":[]},{"level":3,"title":"物理结构","slug":"物理结构","link":"#物理结构","children":[]},{"level":3,"title":"算法的五个特征","slug":"算法的五个特征","link":"#算法的五个特征","children":[]},{"level":3,"title":"算法的复杂度","slug":"算法的复杂度","link":"#算法的复杂度","children":[]},{"level":3,"title":"概要: 复杂度计算为重点","slug":"概要-复杂度计算为重点","link":"#概要-复杂度计算为重点","children":[]}]},{"level":2,"title":"第二章：线性表","slug":"第二章-线性表","link":"#第二章-线性表","children":[{"level":3,"title":"线性表的逻辑结构","slug":"线性表的逻辑结构","link":"#线性表的逻辑结构","children":[]},{"level":3,"title":"线性表的顺序存储结构","slug":"线性表的顺序存储结构","link":"#线性表的顺序存储结构","children":[]},{"level":3,"title":"顺序表的操作","slug":"顺序表的操作","link":"#顺序表的操作","children":[]},{"level":3,"title":"线性表的链式存储结构","slug":"线性表的链式存储结构","link":"#线性表的链式存储结构","children":[]},{"level":3,"title":"单链表的操作","slug":"单链表的操作","link":"#单链表的操作","children":[]},{"level":3,"title":"双链表","slug":"双链表","link":"#双链表","children":[]},{"level":3,"title":"循环链表&&静态链表","slug":"循环链表-静态链表","link":"#循环链表-静态链表","children":[]}]},{"level":2,"title":"第三章：栈和队列","slug":"第三章-栈和队列","link":"#第三章-栈和队列","children":[{"level":3,"title":"栈","slug":"栈","link":"#栈","children":[]},{"level":3,"title":"队列","slug":"队列","link":"#队列","children":[]},{"level":3,"title":"栈的应用","slug":"栈的应用","link":"#栈的应用","children":[]}]},{"level":2,"title":"第四章：树","slug":"第四章-树","link":"#第四章-树","children":[{"level":3,"title":"树的基本概念","slug":"树的基本概念","link":"#树的基本概念","children":[]},{"level":3,"title":"树的存储结构","slug":"树的存储结构","link":"#树的存储结构","children":[]},{"level":3,"title":"二叉树","slug":"二叉树","link":"#二叉树","children":[]},{"level":3,"title":"二叉树的存储结构","slug":"二叉树的存储结构","link":"#二叉树的存储结构","children":[]},{"level":3,"title":"二叉树的遍历","slug":"二叉树的遍历","link":"#二叉树的遍历","children":[]},{"level":3,"title":"线索二叉树","slug":"线索二叉树","link":"#线索二叉树","children":[]},{"level":3,"title":"哈夫曼树和哈夫曼编码","slug":"哈夫曼树和哈夫曼编码","link":"#哈夫曼树和哈夫曼编码","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":18.73,"words":5619},"filePathRelative":"posts/Data-Structure/Structure/数据结构.md","localizedDate":"2024年3月10日","excerpt":"\\n<h2>第一章：数据结构</h2>\\n<p>基本概念</p>\\n<h3>定义</h3>\\n<ul>\\n<li>在任何问题中，数据元素都不是孤立存在的，而是在它们之间存在着某种关系，这种数据元素相互之间的关系称为结构（Structure）。数据结构是相互之间存在一种或多种特定关系的数据元素的集合。数据结构包括三方面的内容：逻辑结构、存储结构和数据的运算。数据的逻辑结构和存储结构是密不可分的两个方面，一个算法的设计取决于所选定的逻辑结构，而算法的实现依赖于所采用的存储结构。</li>\\n</ul>\\n<h3>逻辑结构</h3>\\n<ul>\\n<li>逻辑结构是指数据元素之间的逻辑关系，即从逻辑关系上描述数据。它与数据的存储无关，是独立于计算机的</li>\\n<li>数据的逻辑结构分为线性结构和非线性结构\\n<ul>\\n<li>集合 结构中的数据元素之间除了“同属于一个集合”的关系外，别无其他关系。 类似于数学上的集合</li>\\n<li>线性结构 结构中的数据元素之间只存在一对一的关系。比如排队</li>\\n<li>树形结构 结构中的数据元素之间存在一对多的关系。比如家族族谱</li>\\n<li>图状结构或网状结构 结构中的数据元素之间存在多对多的关系。 比如地图</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{h as comp,p as data};
