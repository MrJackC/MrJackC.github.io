import{_ as a,c as i,a as e,o as n}from"./app-CpAF2rca.js";const l={};function o(r,s){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="linux磁盘监控" tabindex="-1"><a class="header-anchor" href="#linux磁盘监控"><span>Linux磁盘监控</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>linux磁盘监控命令主要有，df，iostat,iotop</p><h2 id="_2-监控命令" tabindex="-1"><a class="header-anchor" href="#_2-监控命令"><span>2. 监控命令</span></a></h2><h3 id="_2-1-df" tabindex="-1"><a class="header-anchor" href="#_2-1-df"><span>2.1 df</span></a></h3><h4 id="_2-1-1-简介" tabindex="-1"><a class="header-anchor" href="#_2-1-1-简介"><span>2.1.1 简介</span></a></h4><p>df命令 用于显示磁盘分区上的可使用的磁盘空间。如果没有文件名被指定，则显示当前所有被挂载的文件系统，默认以 KB 为单位。</p><h4 id="_2-1-2-语法" tabindex="-1"><a class="header-anchor" href="#_2-1-2-语法"><span>2.1.2 语法：</span></a></h4><div class="language-erlang" data-ext="erlang" data-title="erlang"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">df</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (选项) (参数)</span></span></code></pre></div><p>选项：<br><code>-a</code> 全部文件系统列表<br><code>-h</code> 以方便阅读的方式显示<br><code>-i</code> 显示inode信息<br><code>-T</code> 显示文件系统类型<br><code>-l</code> 只显示本地文件系统<br><code>-k</code> 以KB为单位<br><code>-m</code> 以MB为单位</p><p>参数：</p><ul><li>文件：指定文件系统上的文件。</li></ul><h4 id="_2-1-3-示例" tabindex="-1"><a class="header-anchor" href="#_2-1-3-示例"><span>2.1.3 示例</span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231036020.png" alt="image-20220401145602336" tabindex="0" loading="lazy"><figcaption>image-20220401145602336</figcaption></figure><h4 id="_2-1-4-tldr-中的介绍" tabindex="-1"><a class="header-anchor" href="#_2-1-4-tldr-中的介绍"><span>2.1.4 tldr 中的介绍</span></a></h4><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> df</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  Gives</span><span style="color:#98C379;--shiki-dark:#98C379;"> an</span><span style="color:#98C379;--shiki-dark:#98C379;"> overview</span><span style="color:#98C379;--shiki-dark:#98C379;"> of</span><span style="color:#98C379;--shiki-dark:#98C379;"> the</span><span style="color:#98C379;--shiki-dark:#98C379;"> filesystem</span><span style="color:#98C379;--shiki-dark:#98C379;"> disk</span><span style="color:#98C379;--shiki-dark:#98C379;"> space</span><span style="color:#98C379;--shiki-dark:#98C379;"> usage.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  概述了文件系统磁盘空间的使用情况。</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  More</span><span style="color:#98C379;--shiki-dark:#98C379;"> information:</span><span style="color:#98C379;--shiki-dark:#98C379;"> https://www.gnu.org/software/coreutils/df.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  -</span><span style="color:#98C379;--shiki-dark:#98C379;"> Display</span><span style="color:#98C379;--shiki-dark:#98C379;"> all</span><span style="color:#98C379;--shiki-dark:#98C379;"> filesystems</span><span style="color:#98C379;--shiki-dark:#98C379;"> and</span><span style="color:#98C379;--shiki-dark:#98C379;"> their</span><span style="color:#98C379;--shiki-dark:#98C379;"> disk</span><span style="color:#98C379;--shiki-dark:#98C379;"> usage:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  	显示所有文件系统及其磁盘使用情况:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    df</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  -</span><span style="color:#98C379;--shiki-dark:#98C379;"> Display</span><span style="color:#98C379;--shiki-dark:#98C379;"> all</span><span style="color:#98C379;--shiki-dark:#98C379;"> filesystems</span><span style="color:#98C379;--shiki-dark:#98C379;"> and</span><span style="color:#98C379;--shiki-dark:#98C379;"> their</span><span style="color:#98C379;--shiki-dark:#98C379;"> disk</span><span style="color:#98C379;--shiki-dark:#98C379;"> usage</span><span style="color:#98C379;--shiki-dark:#98C379;"> in</span><span style="color:#98C379;--shiki-dark:#98C379;"> human</span><span style="color:#98C379;--shiki-dark:#98C379;"> readable</span><span style="color:#98C379;--shiki-dark:#98C379;"> form:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  	以人类可读的形式显示所有文件系统及其磁盘使用情况:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    df</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  -</span><span style="color:#98C379;--shiki-dark:#98C379;"> Display</span><span style="color:#98C379;--shiki-dark:#98C379;"> the</span><span style="color:#98C379;--shiki-dark:#98C379;"> filesystem</span><span style="color:#98C379;--shiki-dark:#98C379;"> and</span><span style="color:#98C379;--shiki-dark:#98C379;"> its</span><span style="color:#98C379;--shiki-dark:#98C379;"> disk</span><span style="color:#98C379;--shiki-dark:#98C379;"> usage</span><span style="color:#98C379;--shiki-dark:#98C379;"> containing</span><span style="color:#98C379;--shiki-dark:#98C379;"> the</span><span style="color:#98C379;--shiki-dark:#98C379;"> given</span><span style="color:#98C379;--shiki-dark:#98C379;"> file</span><span style="color:#98C379;--shiki-dark:#98C379;"> or</span><span style="color:#98C379;--shiki-dark:#98C379;"> directory:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  	显示包含指定文件或目录的文件系统及其磁盘使用情况:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    df</span><span style="color:#98C379;--shiki-dark:#98C379;"> path/to/file_or_directory</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  -</span><span style="color:#98C379;--shiki-dark:#98C379;"> Display</span><span style="color:#98C379;--shiki-dark:#98C379;"> statistics</span><span style="color:#98C379;--shiki-dark:#98C379;"> on</span><span style="color:#98C379;--shiki-dark:#98C379;"> the</span><span style="color:#98C379;--shiki-dark:#98C379;"> number</span><span style="color:#98C379;--shiki-dark:#98C379;"> of</span><span style="color:#98C379;--shiki-dark:#98C379;"> free</span><span style="color:#98C379;--shiki-dark:#98C379;"> inodes:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    df</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -i</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  -</span><span style="color:#98C379;--shiki-dark:#98C379;"> Display</span><span style="color:#98C379;--shiki-dark:#98C379;"> filesystems</span><span style="color:#98C379;--shiki-dark:#98C379;"> but</span><span style="color:#98C379;--shiki-dark:#98C379;"> exclude</span><span style="color:#98C379;--shiki-dark:#98C379;"> the</span><span style="color:#98C379;--shiki-dark:#98C379;"> specified</span><span style="color:#98C379;--shiki-dark:#98C379;"> types:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    df</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -x</span><span style="color:#98C379;--shiki-dark:#98C379;"> squashfs</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -x</span><span style="color:#98C379;--shiki-dark:#98C379;"> tmpfs</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-iostat" tabindex="-1"><a class="header-anchor" href="#_2-2-iostat"><span>2.2 iostat</span></a></h3><h4 id="_2-2-1-简介" tabindex="-1"><a class="header-anchor" href="#_2-2-1-简介"><span>2.2.1 简介</span></a></h4><p>iostat命令 被用于监视系统输入输出设备和CPU的使用情况。</p><h4 id="_2-2-2-语法" tabindex="-1"><a class="header-anchor" href="#_2-2-2-语法"><span>2.2.2 语法：</span></a></h4><div class="language-erlang" data-ext="erlang" data-title="erlang"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">iostat</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (选项) (参数)</span></span></code></pre></div><p>选项：<br><code>-c</code>：仅显示CPU使用情况；<br><code>-d</code>：仅显示设备利用率；<br><code>-k</code>：显示状态以千字节每秒为单位，而不使用块每秒；<br><code>-m</code>：显示状态以兆字节每秒为单位；<br><code>-p</code>：仅显示块设备和所有被使用的其他分区的状态；<br><code>-t</code>：显示每个报告产生时的时间；<br><code>-V</code>：显示版号并退出；<br><code>-x</code>：显示扩展状态。</p><p>参数：</p><ul><li>间隔时间：每次报告的间隔时间（秒）；</li><li>次数：显示报告的次数。</li></ul><h4 id="_2-2-3-字段说明" tabindex="-1"><a class="header-anchor" href="#_2-2-3-字段说明"><span>2.2.3 字段说明：</span></a></h4><ul><li><code>r/s</code>: 每秒完成的读 I/O 设备次数。</li><li><code>w/s</code>: 每秒完成的写 I/O 设备次数。</li><li><code>rkB/s</code>: 每秒读K字节数.是 rsect/s 的一半,因为每扇区大小为512字节。</li><li><code>wkB/s</code>: 每秒写K字节数.是 wsect/s 的一半。</li><li><code>avgrq-sz</code>: 平均每次设备I/O操作的数据大小 (扇区)。</li><li><code>avgqu-sz</code>: 平均I/O队列长度。</li><li><code>await</code>: 平均每次设备I/O操作的等待时间 (毫秒)。</li><li><code>svctm</code>: 平均每次设备I/O操作的服务时间 (毫秒)。</li><li><code>%util</code>: 一秒中有百分之多少的时间用于 I/O 操作,或者说一秒中有多少时间 I/O 队列是非空的。</li></ul><h4 id="_2-2-4-示例" tabindex="-1"><a class="header-anchor" href="#_2-2-4-示例"><span>2.2.4 示例</span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231036066.png" alt="image-20220401145950590" tabindex="0" loading="lazy"><figcaption>image-20220401145950590</figcaption></figure><h3 id="_2-3-iotop" tabindex="-1"><a class="header-anchor" href="#_2-3-iotop"><span>2.3 . iotop</span></a></h3><blockquote><p>centos没有该命名</p></blockquote><h4 id="_2-3-1-简介" tabindex="-1"><a class="header-anchor" href="#_2-3-1-简介"><span>2.3.1 简介</span></a></h4><p>iotop命令 是一个用来监视磁盘I/O使用状况的top类工具。</p><p>iotop具有与top相似的UI，其中包括PID、用户、I/O、进程等相关信息。Linux下的IO统计工具如iostat，nmon等大多数是只能统计到per设备的读写情况，如果你想知道每个进程是如何使用IO的就比较麻烦，使用iotop命令可以很方便的查看。</p><h4 id="_2-3-2-语法" tabindex="-1"><a class="header-anchor" href="#_2-3-2-语法"><span>2.3.2 语法：</span></a></h4><div class="language-erlang" data-ext="erlang" data-title="erlang"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">iotop</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (选项)</span></span></code></pre></div><p>选项：<br><code>-o</code>：只显示有io操作的进程<br><code>-b</code>：批量显示，无交互，主要用作记录到文件。<br><code>-n</code>： NUM：显示NUM次，主要用于非交互式模式。<br><code>-d SEC</code>：间隔SEC秒显示一次。<br><code>-p PID</code>：监控的进程pid。<br><code>-u USER</code>：监控的进程用户。</p><h4 id="_2-3-3-iotop常用快捷键" tabindex="-1"><a class="header-anchor" href="#_2-3-3-iotop常用快捷键"><span>2.3.3 iotop常用快捷键：</span></a></h4><ul><li>左右箭头：改变排序方式，默认是按IO排序。</li><li>r：改变排序顺序。</li><li>o：只显示有IO输出的进程。</li><li>p：进程/线程的显示方式的切换。</li><li>a：显示累积使用量。</li><li>q：退出。</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231036090.png" alt="image-20220401150415728" tabindex="0" loading="lazy"><figcaption>image-20220401150415728</figcaption></figure>`,39)]))}const d=a(l,[["render",o],["__file","linux-j-disk.html.vue"]]),t=JSON.parse('{"path":"/posts/Linux/linux-j-disk.html","title":"Linux磁盘监控","lang":"zh-CN","frontmatter":{"description":"Linux磁盘监控 1. 简介 linux磁盘监控命令主要有，df，iostat,iotop 2. 监控命令 2.1 df 2.1.1 简介 df命令 用于显示磁盘分区上的可使用的磁盘空间。如果没有文件名被指定，则显示当前所有被挂载的文件系统，默认以 KB 为单位。 2.1.2 语法： 选项： -a 全部文件系统列表 -h 以方便阅读的方式显示 -i ...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Linux/linux-j-disk.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Linux磁盘监控"}],["meta",{"property":"og:description","content":"Linux磁盘监控 1. 简介 linux磁盘监控命令主要有，df，iostat,iotop 2. 监控命令 2.1 df 2.1.1 简介 df命令 用于显示磁盘分区上的可使用的磁盘空间。如果没有文件名被指定，则显示当前所有被挂载的文件系统，默认以 KB 为单位。 2.1.2 语法： 选项： -a 全部文件系统列表 -h 以方便阅读的方式显示 -i ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231036020.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux磁盘监控\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231036020.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231036066.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231036090.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 监控命令","slug":"_2-监控命令","link":"#_2-监控命令","children":[{"level":3,"title":"2.1 df","slug":"_2-1-df","link":"#_2-1-df","children":[]},{"level":3,"title":"2.2 iostat","slug":"_2-2-iostat","link":"#_2-2-iostat","children":[]},{"level":3,"title":"2.3 . iotop","slug":"_2-3-iotop","link":"#_2-3-iotop","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.14,"words":943},"filePathRelative":"posts/Linux/linux-j-disk.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>linux磁盘监控命令主要有，df，iostat,iotop</p>\\n<h2>2. 监控命令</h2>\\n<h3>2.1 df</h3>\\n<h4>2.1.1 简介</h4>\\n<p>df命令 用于显示磁盘分区上的可使用的磁盘空间。如果没有文件名被指定，则显示当前所有被挂载的文件系统，默认以 KB 为单位。</p>\\n<h4>2.1.2 语法：</h4>\\n<div class=\\"language-erlang\\" data-ext=\\"erlang\\" data-title=\\"erlang\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">df</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (选项) (参数)</span></span></code></pre>\\n</div>","autoDesc":true}');export{d as comp,t as data};
