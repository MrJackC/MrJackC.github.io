import{_ as s,c as e,a as i,o as n}from"./app-BOcQBfH9.js";const r={};function l(p,a){return n(),e("div",null,a[0]||(a[0]=[i(`<h1 id="linux内存监控" tabindex="-1"><a class="header-anchor" href="#linux内存监控"><span>Linux内存监控</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>内存监控主要有free 和 vmstat</p><h2 id="_2-监控命令" tabindex="-1"><a class="header-anchor" href="#_2-监控命令"><span>2. 监控命令</span></a></h2><h3 id="_2-1-free" tabindex="-1"><a class="header-anchor" href="#_2-1-free"><span>2.1 free</span></a></h3><p>Linux free命令用于显示内存状态。</p><p>free指令会显示内存的使用情况，包括实体内存，虚拟的交换文件内存，共享内存区段，以及系统核心使用的缓冲区等。</p><h4 id="_2-1-1-语法" tabindex="-1"><a class="header-anchor" href="#_2-1-1-语法"><span>2.1.1 语法</span></a></h4><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">free</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [-bkmotV][-s </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">间隔秒数</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span></code></pre></div><p>常用选项：<br><code>-b</code>：以Byte为单位显示内存使用情况；<br><code>-k</code>：以KB为单位显示内存使用情况；<br><code>-m</code>：以MB为单位显示内存使用情况；<br><code>-g</code>：以GB为单位显示内存使用情况;</p><p><strong><code>-h</code>: 以合适的单位显示内存使用情况，最大为三位数，自动计算对应的单位值。单位有：</strong></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>B = bytes</span></span>
<span class="line"><span>K = kilos</span></span>
<span class="line"><span>M = megas</span></span>
<span class="line"><span>G = gigas</span></span>
<span class="line"><span>T = teras</span></span></code></pre></div><p><code>-o</code>：不显示缓冲区调节列；<br><code>-t</code>：显示内存总和列；<br><code>-V</code>：显示版本信息。****</p><p><strong><code>-s</code>: &lt;间隔秒数&gt; 持续观察内存使用状况。</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041167.png" alt="image-20220401101834998" tabindex="0" loading="lazy"><figcaption>image-20220401101834998</figcaption></figure><h4 id="_2-1-2-字段说明" tabindex="-1"><a class="header-anchor" href="#_2-1-2-字段说明"><span>2.1.2 字段说明：</span></a></h4><ul><li>total：内存总数；</li><li>used：已经使用的内存数，包括 cached 和应用程序实际使用的内存；</li><li>free：空闲的内存数；</li><li>shared：当前已经废弃不用；</li><li>buffers：缓存内存数；</li><li>cached：缓存内存数。</li></ul><p>关系：total = used +available</p><h4 id="_2-1-3-实例" tabindex="-1"><a class="header-anchor" href="#_2-1-3-实例"><span>2.1.3 实例</span></a></h4><h5 id="_2-1-3-1-显示内存使用情况" tabindex="-1"><a class="header-anchor" href="#_2-1-3-1-显示内存使用情况"><span>2.1.3.1 显示内存使用情况</span></a></h5><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>free</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041209.png" alt="image-20220401141256030" tabindex="0" loading="lazy"><figcaption>image-20220401141256030</figcaption></figure><h5 id="_2-1-3-2-以合适的单位显示内存使用情况" tabindex="-1"><a class="header-anchor" href="#_2-1-3-2-以合适的单位显示内存使用情况"><span>2.1.3.2 以合适的单位显示内存使用情况</span></a></h5><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041230.png" alt="image-20220401141510962" tabindex="0" loading="lazy"><figcaption>image-20220401141510962</figcaption></figure><h5 id="_2-1-3-3-以总和的形式显示内存的使用信息" tabindex="-1"><a class="header-anchor" href="#_2-1-3-3-以总和的形式显示内存的使用信息"><span>2.1.3.3 以总和的形式显示内存的使用信息</span></a></h5><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">free</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -t</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041255.png" alt="image-20220401141403556" tabindex="0" loading="lazy"><figcaption>image-20220401141403556</figcaption></figure><h5 id="_2-1-3-4-周期性的查询内存使用信息" tabindex="-1"><a class="header-anchor" href="#_2-1-3-4-周期性的查询内存使用信息"><span>2.1.3.4 周期性的查询内存使用信息</span></a></h5><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">free</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -s</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10</span><span style="color:#98C379;--shiki-dark:#98C379;"> //每10s</span><span style="color:#98C379;--shiki-dark:#98C379;"> 执行一次命令</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041280.png" alt="image-20220401141645744" tabindex="0" loading="lazy"><figcaption>image-20220401141645744</figcaption></figure><h4 id="_2-1-4-tldr-中的介绍" tabindex="-1"><a class="header-anchor" href="#_2-1-4-tldr-中的介绍"><span>2.1.4 tldr 中的介绍</span></a></h4><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">base</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">➜</span><span style="color:#98C379;--shiki-dark:#98C379;">  ~</span><span style="color:#98C379;--shiki-dark:#98C379;"> tldr</span><span style="color:#98C379;--shiki-dark:#98C379;"> free</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  free</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  Display</span><span style="color:#98C379;--shiki-dark:#98C379;"> amount</span><span style="color:#98C379;--shiki-dark:#98C379;"> of</span><span style="color:#98C379;--shiki-dark:#98C379;"> free</span><span style="color:#98C379;--shiki-dark:#98C379;"> and</span><span style="color:#98C379;--shiki-dark:#98C379;"> used</span><span style="color:#98C379;--shiki-dark:#98C379;"> memory</span><span style="color:#98C379;--shiki-dark:#98C379;"> in</span><span style="color:#98C379;--shiki-dark:#98C379;"> the</span><span style="color:#98C379;--shiki-dark:#98C379;"> system.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  显示系统中可用和已使用的内存量。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  -</span><span style="color:#98C379;--shiki-dark:#98C379;"> Display</span><span style="color:#98C379;--shiki-dark:#98C379;"> system</span><span style="color:#98C379;--shiki-dark:#98C379;"> memory:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  	显示系统内存:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    free</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  -</span><span style="color:#98C379;--shiki-dark:#98C379;"> Display</span><span style="color:#98C379;--shiki-dark:#98C379;"> memory</span><span style="color:#98C379;--shiki-dark:#98C379;"> in</span><span style="color:#98C379;--shiki-dark:#98C379;"> Bytes/KB/MB/GB:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  	以字节/KB/MB/GB为单位显示内存:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    free</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -b</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">k</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">m</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  -</span><span style="color:#98C379;--shiki-dark:#98C379;"> Display</span><span style="color:#98C379;--shiki-dark:#98C379;"> memory</span><span style="color:#98C379;--shiki-dark:#98C379;"> in</span><span style="color:#98C379;--shiki-dark:#98C379;"> human</span><span style="color:#98C379;--shiki-dark:#98C379;"> readable</span><span style="color:#98C379;--shiki-dark:#98C379;"> units:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  	以人类可读单位显示内存:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    free</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  -</span><span style="color:#98C379;--shiki-dark:#98C379;"> Refresh</span><span style="color:#98C379;--shiki-dark:#98C379;"> the</span><span style="color:#98C379;--shiki-dark:#98C379;"> output</span><span style="color:#98C379;--shiki-dark:#98C379;"> every</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span><span style="color:#98C379;--shiki-dark:#98C379;"> seconds:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  	每2秒刷新一次输出:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    free</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -s</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-vmstat" tabindex="-1"><a class="header-anchor" href="#_2-2-vmstat"><span>2.2 vmstat</span></a></h3><h4 id="_2-2-1-简介" tabindex="-1"><a class="header-anchor" href="#_2-2-1-简介"><span>2.2.1 简介</span></a></h4><p>mstat命令 的含义为显示虚拟内存状态（“Viryual Memor Statics”），但是它可以报告关于进程、内存、I/O等系统整体运行状态。</p><h4 id="_2-2-2-语法" tabindex="-1"><a class="header-anchor" href="#_2-2-2-语法"><span>2.2.2 语法</span></a></h4><div class="language-erlang" data-ext="erlang" data-title="erlang"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">vmstat</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (选项) (参数)</span></span></code></pre></div><p>选项<br><code>-a</code>：显示活动内页；<br><code>-f</code>：显示启动后创建的进程总数；<br><code>-m</code>：显示slab信息；<br><code>-n</code>：头信息仅显示一次；<br><code>-s</code>：以表格方式显示事件计数器和内存状态；<br><code>-d</code>：报告磁盘状态；<br><code>-p</code>：显示指定的硬盘分区状态；<br><code>-S</code>：输出信息的单位。</p><p>参数</p><ul><li>事件间隔：状态信息刷新的时间间隔；</li><li>次数：显示报告的次数</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041303.png" alt="image-20220401141913473" tabindex="0" loading="lazy"><figcaption>image-20220401141913473</figcaption></figure><h4 id="_2-2-3-字段说明" tabindex="-1"><a class="header-anchor" href="#_2-2-3-字段说明"><span>2.2.3 字段说明</span></a></h4><p>Procs（进程）</p><ul><li>r: 运行和等待CPU时间片的进程数，这个值如果长期大于系统CPU个数，就说明CPU资源不足，可以考虑增加CPU</li><li>b: 等待资源的进程数，比如正在等待I/O或者内存交换等</li></ul><p>Memory（内存）</p><ul><li>swpd: 使用虚拟内存大小，如果swpd的值不为0，但是SI，SO的值长期为0，这种情况不会影响系统性能。</li><li>free: 空闲物理内存大小（以KB为单位）。</li><li>buff: 用作缓冲的内存大小。</li><li>cache: 用作缓存的内存大小，如果cache的值大的时候，说明cache处的文件数多。如果此时IO中的bi比较小，就说明文件系统效率比较好。</li></ul><p>Swap</p><ul><li>si: 每秒从交换区写到内存的大小，由磁盘调入内存。</li><li>so: 每秒写入交换区的内存大小，由内存调入磁盘。</li></ul><p>注意：内存够用的时候，这2个值都是0，如果这2个值长期大于0时，系统性能会受到影响，磁盘IO和CPU资源都会被消耗。有些朋友看到空闲内存（free）很少的或接近于0时，就认为内存不够用了，不能光看这一点，还要结合si和so，如果free很少，但是si和so也很少（大多时候是0），那么不用担心，系统性能这时不会受到影响的。</p><p>IO（现在的Linux版本块的大小为1kb）</p><ul><li>bi: 每秒读取的块数</li><li>bo: 每秒写入的块数</li></ul><p>注意：随机磁盘读写的时候，这2个值较大（如超出1024k)，而且wa值比较大，则表示系统磁盘IO性能瓶颈。</p><p>system（系统）</p><ul><li>in: 每秒中断数，包括时钟中断。</li><li>cs: 每秒上下文切换数。</li></ul><p>注意：上面2个值越大，会看到由内核消耗的CPU时间会越大。</p><p>CPU（以百分比表示）<br> us: 用户进程执行时间百分比(user time)<br> us的值比较高时，说明用户进程消耗的CPU时间多，但是如果长期超50%的使用，那么我们就该考虑优化程序算法或者进行加速。</p><ul><li>sy: 内核系统进程执行时间百分比(system time)</li></ul><p>sy的值高时，说明系统内核消耗的CPU资源多，这并不是良性表现，我们应该检查原因。</p><ul><li>id: 空闲时间百分比</li><li>wa: IO等待时间百分比</li></ul><p>wa的值高时，说明IO等待比较严重，这可能由于磁盘大量作随机访问造成，也有可能磁盘出现瓶颈（块操作）。</p><ul><li>st：一般不关注，虚拟机占用的时间百分比。</li></ul><h4 id="_2-2-4-实例" tabindex="-1"><a class="header-anchor" href="#_2-2-4-实例"><span>2.2.4 实例</span></a></h4><p>每2s显示一次</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041303.png" alt="image-20220401141913473" tabindex="0" loading="lazy"><figcaption>image-20220401141913473</figcaption></figure>`,64)]))}const t=s(r,[["render",l],["__file","linux-j-mem.html.vue"]]),c=JSON.parse('{"path":"/posts/Linux/linux-j-mem.html","title":"Linux内存监控","lang":"zh-CN","frontmatter":{"description":"Linux内存监控 1. 简介 内存监控主要有free 和 vmstat 2. 监控命令 2.1 free Linux free命令用于显示内存状态。 free指令会显示内存的使用情况，包括实体内存，虚拟的交换文件内存，共享内存区段，以及系统核心使用的缓冲区等。 2.1.1 语法 常用选项： -b：以Byte为单位显示内存使用情况； -k：以KB为单位...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Linux/linux-j-mem.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Linux内存监控"}],["meta",{"property":"og:description","content":"Linux内存监控 1. 简介 内存监控主要有free 和 vmstat 2. 监控命令 2.1 free Linux free命令用于显示内存状态。 free指令会显示内存的使用情况，包括实体内存，虚拟的交换文件内存，共享内存区段，以及系统核心使用的缓冲区等。 2.1.1 语法 常用选项： -b：以Byte为单位显示内存使用情况； -k：以KB为单位..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041167.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux内存监控\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041167.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041209.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041230.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041255.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041280.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041303.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041303.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 监控命令","slug":"_2-监控命令","link":"#_2-监控命令","children":[{"level":3,"title":"2.1 free","slug":"_2-1-free","link":"#_2-1-free","children":[]},{"level":3,"title":"2.2 vmstat","slug":"_2-2-vmstat","link":"#_2-2-vmstat","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.54,"words":1361},"filePathRelative":"posts/Linux/linux-j-mem.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>内存监控主要有free 和 vmstat</p>\\n<h2>2. 监控命令</h2>\\n<h3>2.1 free</h3>\\n<p>Linux free命令用于显示内存状态。</p>\\n<p>free指令会显示内存的使用情况，包括实体内存，虚拟的交换文件内存，共享内存区段，以及系统核心使用的缓冲区等。</p>\\n<h4>2.1.1 语法</h4>\\n<div class=\\"language-bash\\" data-ext=\\"bash\\" data-title=\\"bash\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">free</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> [-bkmotV][-s </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">间隔秒数</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&gt;</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">]</span></span></code></pre>\\n</div>","autoDesc":true}');export{t as comp,c as data};
