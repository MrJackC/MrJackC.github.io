import{_ as e,c as i,a,o as n}from"./app-DEK5G3U7.js";const t={};function r(s,l){return n(),i("div",null,l[0]||(l[0]=[a('<h1 id="一-操作系统引论" tabindex="-1"><a class="header-anchor" href="#一-操作系统引论"><span>一.操作系统引论</span></a></h1><h2 id="_1-操作系统的目标和功能" tabindex="-1"><a class="header-anchor" href="#_1-操作系统的目标和功能"><span>1.操作系统的目标和功能</span></a></h2><h3 id="目标" tabindex="-1"><a class="header-anchor" href="#目标"><span>目标</span></a></h3><ul><li>方便性</li><li>有效性 <ul><li>提高系统资源利用率</li><li>提高系统吞吐量</li></ul></li><li>可扩充性</li><li>开放性</li></ul><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用</span></a></h3><ul><li>OS作为用户与计算机硬件系统之间的接口 <ul><li>命令方式</li><li>系统调用方式</li><li>图标–窗口方式</li></ul></li><li>OS实现了对计算机资源的抽象</li></ul><h2 id="_2-操作系统的发展过程" tabindex="-1"><a class="header-anchor" href="#_2-操作系统的发展过程"><span>2.操作系统的发展过程</span></a></h2><h3 id="未配置操作系统的计算机系统" tabindex="-1"><a class="header-anchor" href="#未配置操作系统的计算机系统"><span>未配置操作系统的计算机系统</span></a></h3><ul><li><p>人工操作方式</p></li><li><blockquote><p>用户独占全机 CPU等待人工操作 严重降低了计算机资源的利用率</p></blockquote></li><li><p>脱机输入/输出(Off–Line I/O)方式</p></li><li><blockquote><p>减少了CPU的空闲时间 提高了I/O速度 效率仍然不理想</p></blockquote></li></ul><h3 id="单道批处理系统" tabindex="-1"><a class="header-anchor" href="#单道批处理系统"><span>单道批处理系统</span></a></h3><h3 id="多道批处理系统" tabindex="-1"><a class="header-anchor" href="#多道批处理系统"><span>多道批处理系统</span></a></h3><blockquote><p>1.资源利用率高<br> 2.系统吞吐量大<br> 3.平均周转时间长<br> 4.无交互能力</p></blockquote><ul><li>(宏观并行，微观串行)</li></ul><h3 id="分时系统" tabindex="-1"><a class="header-anchor" href="#分时系统"><span>分时系统</span></a></h3><blockquote><p>特征:<br> 1.多路性<br> 2.独立性<br> 3.及时性<br> 4.交互性</p></blockquote><h3 id="实时系统" tabindex="-1"><a class="header-anchor" href="#实时系统"><span>实时系统</span></a></h3><ul><li>集群系统–超算~云计算</li><li>微机操作系统的发展</li></ul><h2 id="_3-操作系统的基本特征" tabindex="-1"><a class="header-anchor" href="#_3-操作系统的基本特征"><span>3.操作系统的基本特征</span></a></h2><h3 id="_1-并发concurrence" tabindex="-1"><a class="header-anchor" href="#_1-并发concurrence"><span>1.并发concurrence</span></a></h3><ul><li>区别并行和并发</li><li>并行性是指两个或多个事件在同一时刻发生→宏观并行，微观并行</li><li>并发性是指两个或多个事件在同一时间间隔内发生→宏观并行，微观串行 <ul><li>并发是进程宏观一起运行，微观上交替运行，而并行是指同时运行</li></ul></li><li>引入进程</li><li>进程是指在系统中能独立运行并作为资源分配的基本单位，它是由一组机器指令，数据和堆栈等组成的，是一个能独立运行的活动实体</li></ul><h3 id="_2-共享sharing" tabindex="-1"><a class="header-anchor" href="#_2-共享sharing"><span>2.共享sharing</span></a></h3><ul><li>1.互斥共享方式</li><li>2.同时访问方式</li><li>并发和共享是多用户(多任务)OS的两个最基本的特征。它们又是互为存在的条件</li></ul><h3 id="_3-虚拟virtual" tabindex="-1"><a class="header-anchor" href="#_3-虚拟virtual"><span>3.虚拟virtual</span></a></h3><ul><li>时分复用技术</li><li>空分复用技术</li></ul><h3 id="_4-异步asynchronism" tabindex="-1"><a class="header-anchor" href="#_4-异步asynchronism"><span>4.异步asynchronism</span></a></h3><h2 id="_4-操作系统的主要功能" tabindex="-1"><a class="header-anchor" href="#_4-操作系统的主要功能"><span>4.操作系统的主要功能</span></a></h2><h3 id="_1-处理机管理功能" tabindex="-1"><a class="header-anchor" href="#_1-处理机管理功能"><span>1.处理机管理功能</span></a></h3><ul><li>进程控制</li><li>进程同步 <ul><li>进程互斥方式</li><li>进程同步方式(协同)</li></ul></li><li>进程通信</li><li>调度 <ul><li>作业调度</li><li>进程调度</li></ul></li></ul><h3 id="_2-存储器管理功能" tabindex="-1"><a class="header-anchor" href="#_2-存储器管理功能"><span>2.存储器管理功能</span></a></h3><ul><li>内存分配 <ul><li>静态分配</li><li>动态分配</li></ul></li><li>内存保护</li><li>地址映射</li><li>内存扩充</li></ul><h3 id="_3-设备管理功能" tabindex="-1"><a class="header-anchor" href="#_3-设备管理功能"><span>3.设备管理功能</span></a></h3><ul><li>缓冲管理</li><li>设备分配</li><li>设备处理 <ul><li>设备处理程序又称设备驱动程序</li></ul></li></ul><h3 id="_4-文件管理功能" tabindex="-1"><a class="header-anchor" href="#_4-文件管理功能"><span>4.文件管理功能</span></a></h3><ul><li>文件存储空间的管理</li><li>目录管理</li><li>文件的读写管理和保护</li></ul><h3 id="_5-操作系统与用户之间的接口" tabindex="-1"><a class="header-anchor" href="#_5-操作系统与用户之间的接口"><span>5.操作系统与用户之间的接口</span></a></h3><ul><li>用户接口</li><li>程序接口</li></ul><h3 id="_6-现代操作系统的新功能" tabindex="-1"><a class="header-anchor" href="#_6-现代操作系统的新功能"><span>6.现代操作系统的新功能</span></a></h3><ul><li>系统安全</li><li>网络的功能和服务</li><li>支持多媒体</li></ul><h2 id="_5-os结构设计" tabindex="-1"><a class="header-anchor" href="#_5-os结构设计"><span>5.OS结构设计</span></a></h2><h3 id="传统操作系统结构" tabindex="-1"><a class="header-anchor" href="#传统操作系统结构"><span>传统操作系统结构</span></a></h3><ul><li>无结构操作系统</li><li>模块化OS</li><li>分层式结构OS</li></ul><h3 id="微内核os结构" tabindex="-1"><a class="header-anchor" href="#微内核os结构"><span>微内核os结构</span></a></h3><ul><li>客户/服务器模式</li><li>面对对象的程序设计</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/第一章 操作系统引论.png" alt="第一章 操作系统引论" tabindex="0" loading="lazy"><figcaption>第一章 操作系统引论</figcaption></figure>',44)]))}const c=e(t,[["render",r],["__file","第一章 操作系统引论.html.vue"]]),o=JSON.parse('{"path":"/posts/Computer-Basics/Operating-System/%E7%AC%AC%E4%B8%80%E7%AB%A0%20%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%BC%95%E8%AE%BA.html","title":"2、操作系统引论","lang":"zh-CN","frontmatter":{"title":"2、操作系统引论","date":"2024-01-01 08:56","category":["操作系统"],"tag":["操作系统"],"description":"一.操作系统引论 1.操作系统的目标和功能 目标 方便性 有效性 提高系统资源利用率 提高系统吞吐量 可扩充性 开放性 作用 OS作为用户与计算机硬件系统之间的接口 命令方式 系统调用方式 图标–窗口方式 OS实现了对计算机资源的抽象 2.操作系统的发展过程 未配置操作系统的计算机系统 人工操作方式 用户独占全机 CPU等待人工操作 严重降低了计算机资...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Computer-Basics/Operating-System/%E7%AC%AC%E4%B8%80%E7%AB%A0%20%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%BC%95%E8%AE%BA.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"2、操作系统引论"}],["meta",{"property":"og:description","content":"一.操作系统引论 1.操作系统的目标和功能 目标 方便性 有效性 提高系统资源利用率 提高系统吞吐量 可扩充性 开放性 作用 OS作为用户与计算机硬件系统之间的接口 命令方式 系统调用方式 图标–窗口方式 OS实现了对计算机资源的抽象 2.操作系统的发展过程 未配置操作系统的计算机系统 人工操作方式 用户独占全机 CPU等待人工操作 严重降低了计算机资..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/第一章%20操作系统引论.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-25T09:16:19.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"操作系统"}],["meta",{"property":"article:published_time","content":"2024-01-01T08:56:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-25T09:16:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2、操作系统引论\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/第一章%20操作系统引论.png\\"],\\"datePublished\\":\\"2024-01-01T08:56:00.000Z\\",\\"dateModified\\":\\"2024-10-25T09:16:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1.操作系统的目标和功能","slug":"_1-操作系统的目标和功能","link":"#_1-操作系统的目标和功能","children":[{"level":3,"title":"目标","slug":"目标","link":"#目标","children":[]},{"level":3,"title":"作用","slug":"作用","link":"#作用","children":[]}]},{"level":2,"title":"2.操作系统的发展过程","slug":"_2-操作系统的发展过程","link":"#_2-操作系统的发展过程","children":[{"level":3,"title":"未配置操作系统的计算机系统","slug":"未配置操作系统的计算机系统","link":"#未配置操作系统的计算机系统","children":[]},{"level":3,"title":"单道批处理系统","slug":"单道批处理系统","link":"#单道批处理系统","children":[]},{"level":3,"title":"多道批处理系统","slug":"多道批处理系统","link":"#多道批处理系统","children":[]},{"level":3,"title":"分时系统","slug":"分时系统","link":"#分时系统","children":[]},{"level":3,"title":"实时系统","slug":"实时系统","link":"#实时系统","children":[]}]},{"level":2,"title":"3.操作系统的基本特征","slug":"_3-操作系统的基本特征","link":"#_3-操作系统的基本特征","children":[{"level":3,"title":"1.并发concurrence","slug":"_1-并发concurrence","link":"#_1-并发concurrence","children":[]},{"level":3,"title":"2.共享sharing","slug":"_2-共享sharing","link":"#_2-共享sharing","children":[]},{"level":3,"title":"3.虚拟virtual","slug":"_3-虚拟virtual","link":"#_3-虚拟virtual","children":[]},{"level":3,"title":"4.异步asynchronism","slug":"_4-异步asynchronism","link":"#_4-异步asynchronism","children":[]}]},{"level":2,"title":"4.操作系统的主要功能","slug":"_4-操作系统的主要功能","link":"#_4-操作系统的主要功能","children":[{"level":3,"title":"1.处理机管理功能","slug":"_1-处理机管理功能","link":"#_1-处理机管理功能","children":[]},{"level":3,"title":"2.存储器管理功能","slug":"_2-存储器管理功能","link":"#_2-存储器管理功能","children":[]},{"level":3,"title":"3.设备管理功能","slug":"_3-设备管理功能","link":"#_3-设备管理功能","children":[]},{"level":3,"title":"4.文件管理功能","slug":"_4-文件管理功能","link":"#_4-文件管理功能","children":[]},{"level":3,"title":"5.操作系统与用户之间的接口","slug":"_5-操作系统与用户之间的接口","link":"#_5-操作系统与用户之间的接口","children":[]},{"level":3,"title":"6.现代操作系统的新功能","slug":"_6-现代操作系统的新功能","link":"#_6-现代操作系统的新功能","children":[]}]},{"level":2,"title":"5.OS结构设计","slug":"_5-os结构设计","link":"#_5-os结构设计","children":[{"level":3,"title":"传统操作系统结构","slug":"传统操作系统结构","link":"#传统操作系统结构","children":[]},{"level":3,"title":"微内核os结构","slug":"微内核os结构","link":"#微内核os结构","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729847779000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":2}]},"readingTime":{"minutes":2.72,"words":816},"filePathRelative":"posts/Computer-Basics/Operating-System/第一章 操作系统引论.md","localizedDate":"2024年1月1日","excerpt":"\\n<h2>1.操作系统的目标和功能</h2>\\n<h3>目标</h3>\\n<ul>\\n<li>方便性</li>\\n<li>有效性\\n<ul>\\n<li>提高系统资源利用率</li>\\n<li>提高系统吞吐量</li>\\n</ul>\\n</li>\\n<li>可扩充性</li>\\n<li>开放性</li>\\n</ul>\\n<h3>作用</h3>\\n<ul>\\n<li>OS作为用户与计算机硬件系统之间的接口\\n<ul>\\n<li>命令方式</li>\\n<li>系统调用方式</li>\\n<li>图标–窗口方式</li>\\n</ul>\\n</li>\\n<li>OS实现了对计算机资源的抽象</li>\\n</ul>\\n<h2>2.操作系统的发展过程</h2>","autoDesc":true}');export{c as comp,o as data};
