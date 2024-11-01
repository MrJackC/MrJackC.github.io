import{_ as e,c as i,a,o as n}from"./app-DP7tPpgD.js";const t={};function r(h,l){return n(),i("div",null,l[0]||(l[0]=[a('<h1 id="第五章-虚拟存储器" tabindex="-1"><a class="header-anchor" href="#第五章-虚拟存储器"><span>第五章：虚拟存储器</span></a></h1><h2 id="常规存储管理方式的特征" tabindex="-1"><a class="header-anchor" href="#常规存储管理方式的特征"><span>常规存储管理方式的特征</span></a></h2><ul><li>一次性</li><li>驻留性</li></ul><h2 id="局部性原理" tabindex="-1"><a class="header-anchor" href="#局部性原理"><span>局部性原理</span></a></h2><h3 id="程序在执行时将呈现出局部性特征-即在一较短的时间内-程序的执行仅局限于某个部分-相应地-它所访问的存储空间也局限于某个区域" tabindex="-1"><a class="header-anchor" href="#程序在执行时将呈现出局部性特征-即在一较短的时间内-程序的执行仅局限于某个部分-相应地-它所访问的存储空间也局限于某个区域"><span>程序在执行时将呈现出局部性特征，即在一较短的时间内，程序的执行仅局限于某个部分，相应地，它所访问的存储空间也局限于某个区域</span></a></h3><h3 id="时间局限性" tabindex="-1"><a class="header-anchor" href="#时间局限性"><span>时间局限性</span></a></h3><ul><li>如果程序中的某条指令一旦执行， 则不久以后该指令可能再次执行；如果某数据被访问过， 则不久以后该数据可能再次被访问。产生时间局限性的典型原因，是由于在程序中存在着大量的循环操作</li></ul><h3 id="空间局限性" tabindex="-1"><a class="header-anchor" href="#空间局限性"><span>空间局限性</span></a></h3><ul><li>一旦程序访问了某个存储单元，在不久之后，其附近的存储单元也将被访问，即程序在一段时间内所访问的地址，可能集中在一定的范围之内，其典型情况便是程序的顺序执行。</li></ul><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h2><h3 id="指具有请求调入功能和置换功能-能从逻辑上对内存容量加以扩充的一种存储器系统" tabindex="-1"><a class="header-anchor" href="#指具有请求调入功能和置换功能-能从逻辑上对内存容量加以扩充的一种存储器系统"><span>指具有请求调入功能和置换功能，能从逻辑上对内存容量加以扩充的一种存储器系统</span></a></h3><h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h2><ul><li>大程序：可在较小的可用内存中执行较大的用户程序；</li><li>大的用户空间：提供给用户可用的虚拟内存空间通常大于物理内存(real memory)</li><li>并发：可在内存中容纳更多程序并发执行；</li><li>易于开发：不必影响编程时的程序结构</li><li>以CPU时间和外存空间换取昂贵内存空间，这是操作系统中的资源转换技术</li></ul><h2 id="特征" tabindex="-1"><a class="header-anchor" href="#特征"><span>特征</span></a></h2><h3 id="离散性" tabindex="-1"><a class="header-anchor" href="#离散性"><span>离散性</span></a></h3><ul><li>指在内存分配时采用离散的分配方式，它是虚拟存储器的实现的基础</li></ul><h3 id="多次性" tabindex="-1"><a class="header-anchor" href="#多次性"><span>多次性</span></a></h3><ul><li>指一个作业被分成多次调入内存运行，即在作业运行时没有必要将其全部装入，只须将当前要运行的那部分程序和数据装入内存即可。多次性是虚拟存储器最重要的特征</li></ul><h3 id="对换性" tabindex="-1"><a class="header-anchor" href="#对换性"><span>对换性</span></a></h3><ul><li>指允许在作业的运行过程中在内存和外存的对换区之间换进、换出。</li></ul><h3 id="虚拟性" tabindex="-1"><a class="header-anchor" href="#虚拟性"><span>虚拟性</span></a></h3><ul><li>指能够从逻辑上扩充内存容量，使用户所看到的内存容量远大于实际内存容量。</li></ul><h2 id="虚拟存储器的实现方式" tabindex="-1"><a class="header-anchor" href="#虚拟存储器的实现方式"><span>虚拟存储器的实现方式</span></a></h2><h3 id="请求分页存储管理方式" tabindex="-1"><a class="header-anchor" href="#请求分页存储管理方式"><span>请求分页存储管理方式</span></a></h3><ul><li>硬件 <ul><li>请求页表机制 <ul><li>格式：页号+物理块号+状态位P+访问字段A+修改位M+外存地址</li></ul></li><li>缺页中断机构</li><li>地址变换机构（过程图很关键）</li></ul></li><li>请求分页中的内存分配 <ul><li>最小物理块数 <ul><li>即能保证进程正常运行所需的最小物理块数</li></ul></li><li>内存分配策略 <ul><li>固定分配局部置换（国王的大儿子）</li><li>可变分配全局置换（国王的二儿子）</li><li>可变分配局部置换（国王的小儿子）</li></ul></li></ul></li><li>物理块分配算法 <ul><li>平均分配算法</li><li>按比例分配算法</li><li>考虑优先权的分配算法</li></ul></li><li>页面调入策略 <ul><li>系统应在何时调入所需页面 <ul><li>预调页策略（不能实现）</li><li>请求调页策略（需要才给）</li></ul></li><li>系统应该从何处调入这些页面 <ul><li>对换区</li><li>文件区</li></ul></li><li>页面调入过程</li><li>缺页率（出计算题）</li></ul></li></ul><h3 id="请求分段系统" tabindex="-1"><a class="header-anchor" href="#请求分段系统"><span>请求分段系统</span></a></h3><ul><li>硬件 <ul><li>请求分段的段表机构</li><li>缺段中断机构</li><li>地址变换机构</li></ul></li></ul><h2 id="页面置换算法" tabindex="-1"><a class="header-anchor" href="#页面置换算法"><span>页面置换算法</span></a></h2><h3 id="抖动的概念" tabindex="-1"><a class="header-anchor" href="#抖动的概念"><span>抖动的概念</span></a></h3><ul><li>即刚被换出的页很快又要被访问，需要将它重新调入，此时又需要再选一页调出</li></ul><h3 id="最佳置换算法-需要预知后面进程-所以不能实现" tabindex="-1"><a class="header-anchor" href="#最佳置换算法-需要预知后面进程-所以不能实现"><span>最佳置换算法(需要预知后面进程，所以不能实现)</span></a></h3><h3 id="先进先出页面置换算法-fifo" tabindex="-1"><a class="header-anchor" href="#先进先出页面置换算法-fifo"><span>先进先出页面置换算法（FIFO）</span></a></h3><ul><li>选择在内存中驻留时间最久的页面予以淘汰</li></ul><h3 id="最近最久未使用置换算法-lru-recently" tabindex="-1"><a class="header-anchor" href="#最近最久未使用置换算法-lru-recently"><span>最近最久未使用置换算法（LRU）Recently</span></a></h3><ul><li>寄存器支持</li><li>特殊的栈结构</li></ul><h3 id="最少使用置换算法-lfu-frequently" tabindex="-1"><a class="header-anchor" href="#最少使用置换算法-lfu-frequently"><span>最少使用置换算法（LFU）Frequently</span></a></h3><h3 id="clock置换算法-对访问位a的判断" tabindex="-1"><a class="header-anchor" href="#clock置换算法-对访问位a的判断"><span>clock置换算法（对访问位A的判断）</span></a></h3><ul><li>改进型——增加对修改位M思维判断</li></ul><h3 id="页面缓冲算法-pba-page-buffering-algorithm" tabindex="-1"><a class="header-anchor" href="#页面缓冲算法-pba-page-buffering-algorithm"><span>页面缓冲算法（PBA,page buffering algorithm）</span></a></h3><ul><li>空闲页面链表</li><li>修改页面链表</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/第五章 虚拟存储器.png" alt="第五章 虚拟存储器" tabindex="0" loading="lazy"><figcaption>第五章 虚拟存储器</figcaption></figure>',41)]))}const c=e(t,[["render",r],["__file","第五章 虚拟存储器.html.vue"]]),d=JSON.parse('{"path":"/posts/Computer-Basics/Operating-System/%E7%AC%AC%E4%BA%94%E7%AB%A0%20%E8%99%9A%E6%8B%9F%E5%AD%98%E5%82%A8%E5%99%A8.html","title":"6、虚拟存储器","lang":"zh-CN","frontmatter":{"title":"6、虚拟存储器","date":"2024-01-01 11:56","category":["操作系统"],"tag":["操作系统"],"description":"第五章：虚拟存储器 常规存储管理方式的特征 一次性 驻留性 局部性原理 程序在执行时将呈现出局部性特征，即在一较短的时间内，程序的执行仅局限于某个部分，相应地，它所访问的存储空间也局限于某个区域 时间局限性 如果程序中的某条指令一旦执行， 则不久以后该指令可能再次执行；如果某数据被访问过， 则不久以后该数据可能再次被访问。产生时间局限性的典型原因，是由...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Computer-Basics/Operating-System/%E7%AC%AC%E4%BA%94%E7%AB%A0%20%E8%99%9A%E6%8B%9F%E5%AD%98%E5%82%A8%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"6、虚拟存储器"}],["meta",{"property":"og:description","content":"第五章：虚拟存储器 常规存储管理方式的特征 一次性 驻留性 局部性原理 程序在执行时将呈现出局部性特征，即在一较短的时间内，程序的执行仅局限于某个部分，相应地，它所访问的存储空间也局限于某个区域 时间局限性 如果程序中的某条指令一旦执行， 则不久以后该指令可能再次执行；如果某数据被访问过， 则不久以后该数据可能再次被访问。产生时间局限性的典型原因，是由..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/第五章%20虚拟存储器.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-25T09:16:19.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"操作系统"}],["meta",{"property":"article:published_time","content":"2024-01-01T11:56:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-25T09:16:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6、虚拟存储器\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/第五章%20虚拟存储器.png\\"],\\"datePublished\\":\\"2024-01-01T11:56:00.000Z\\",\\"dateModified\\":\\"2024-10-25T09:16:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"常规存储管理方式的特征","slug":"常规存储管理方式的特征","link":"#常规存储管理方式的特征","children":[]},{"level":2,"title":"局部性原理","slug":"局部性原理","link":"#局部性原理","children":[{"level":3,"title":"程序在执行时将呈现出局部性特征，即在一较短的时间内，程序的执行仅局限于某个部分，相应地，它所访问的存储空间也局限于某个区域","slug":"程序在执行时将呈现出局部性特征-即在一较短的时间内-程序的执行仅局限于某个部分-相应地-它所访问的存储空间也局限于某个区域","link":"#程序在执行时将呈现出局部性特征-即在一较短的时间内-程序的执行仅局限于某个部分-相应地-它所访问的存储空间也局限于某个区域","children":[]},{"level":3,"title":"时间局限性","slug":"时间局限性","link":"#时间局限性","children":[]},{"level":3,"title":"空间局限性","slug":"空间局限性","link":"#空间局限性","children":[]}]},{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[{"level":3,"title":"指具有请求调入功能和置换功能，能从逻辑上对内存容量加以扩充的一种存储器系统","slug":"指具有请求调入功能和置换功能-能从逻辑上对内存容量加以扩充的一种存储器系统","link":"#指具有请求调入功能和置换功能-能从逻辑上对内存容量加以扩充的一种存储器系统","children":[]}]},{"level":2,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":2,"title":"特征","slug":"特征","link":"#特征","children":[{"level":3,"title":"离散性","slug":"离散性","link":"#离散性","children":[]},{"level":3,"title":"多次性","slug":"多次性","link":"#多次性","children":[]},{"level":3,"title":"对换性","slug":"对换性","link":"#对换性","children":[]},{"level":3,"title":"虚拟性","slug":"虚拟性","link":"#虚拟性","children":[]}]},{"level":2,"title":"虚拟存储器的实现方式","slug":"虚拟存储器的实现方式","link":"#虚拟存储器的实现方式","children":[{"level":3,"title":"请求分页存储管理方式","slug":"请求分页存储管理方式","link":"#请求分页存储管理方式","children":[]},{"level":3,"title":"请求分段系统","slug":"请求分段系统","link":"#请求分段系统","children":[]}]},{"level":2,"title":"页面置换算法","slug":"页面置换算法","link":"#页面置换算法","children":[{"level":3,"title":"抖动的概念","slug":"抖动的概念","link":"#抖动的概念","children":[]},{"level":3,"title":"最佳置换算法(需要预知后面进程，所以不能实现)","slug":"最佳置换算法-需要预知后面进程-所以不能实现","link":"#最佳置换算法-需要预知后面进程-所以不能实现","children":[]},{"level":3,"title":"先进先出页面置换算法（FIFO）","slug":"先进先出页面置换算法-fifo","link":"#先进先出页面置换算法-fifo","children":[]},{"level":3,"title":"最近最久未使用置换算法（LRU）Recently","slug":"最近最久未使用置换算法-lru-recently","link":"#最近最久未使用置换算法-lru-recently","children":[]},{"level":3,"title":"最少使用置换算法（LFU）Frequently","slug":"最少使用置换算法-lfu-frequently","link":"#最少使用置换算法-lfu-frequently","children":[]},{"level":3,"title":"clock置换算法（对访问位A的判断）","slug":"clock置换算法-对访问位a的判断","link":"#clock置换算法-对访问位a的判断","children":[]},{"level":3,"title":"页面缓冲算法（PBA,page buffering algorithm）","slug":"页面缓冲算法-pba-page-buffering-algorithm","link":"#页面缓冲算法-pba-page-buffering-algorithm","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729847779000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":2}]},"readingTime":{"minutes":3.61,"words":1083},"filePathRelative":"posts/Computer-Basics/Operating-System/第五章 虚拟存储器.md","localizedDate":"2024年1月1日","excerpt":"\\n<h2>常规存储管理方式的特征</h2>\\n<ul>\\n<li>一次性</li>\\n<li>驻留性</li>\\n</ul>\\n<h2>局部性原理</h2>\\n<h3>程序在执行时将呈现出局部性特征，即在一较短的时间内，程序的执行仅局限于某个部分，相应地，它所访问的存储空间也局限于某个区域</h3>\\n<h3>时间局限性</h3>\\n<ul>\\n<li>如果程序中的某条指令一旦执行， 则不久以后该指令可能再次执行；如果某数据被访问过， 则不久以后该数据可能再次被访问。产生时间局限性的典型原因，是由于在程序中存在着大量的循环操作</li>\\n</ul>\\n<h3>空间局限性</h3>\\n<ul>\\n<li>一旦程序访问了某个存储单元，在不久之后，其附近的存储单元也将被访问，即程序在一段时间内所访问的地址，可能集中在一定的范围之内，其典型情况便是程序的顺序执行。</li>\\n</ul>","autoDesc":true}');export{c as comp,d as data};
