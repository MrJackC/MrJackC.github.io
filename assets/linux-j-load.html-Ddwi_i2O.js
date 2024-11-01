import{_ as s,c as n,a as i,o as e}from"./app-DP7tPpgD.js";const l={};function r(o,a){return e(),n("div",null,a[0]||(a[0]=[i(`<h1 id="linux概念-load-平均负载" tabindex="-1"><a class="header-anchor" href="#linux概念-load-平均负载"><span>Linux概念 - Load 平均负载</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>Linux load averages 是系统负载平均值（system load averages），它将正在运行的线程（任务）对系统的需求显示为平均运行数和等待线程数。Linux load averages 可以衡量任务对系统的需求，并且它可能大于系统当前正在处理的数量，大多数工具将其显示为三个平均值，分别为 1、5 和 15 分钟值。</p><h3 id="_1-1-查看命令" tabindex="-1"><a class="header-anchor" href="#_1-1-查看命令"><span>1.1 查看命令</span></a></h3><p>以下为系统中显示 Linux load averages 的实例：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 方法一：uptime</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> uptime</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> 16:48:24</span><span style="color:#98C379;--shiki-dark:#98C379;"> up</span><span style="color:#98C379;--shiki-dark:#98C379;">  4:11,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">  1</span><span style="color:#98C379;--shiki-dark:#98C379;"> user,</span><span style="color:#98C379;--shiki-dark:#98C379;">  load</span><span style="color:#98C379;--shiki-dark:#98C379;"> average:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 25.25,</span><span style="color:#98C379;--shiki-dark:#98C379;"> 23.40,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 23.46</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 方法二：top</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">top</span><span style="color:#98C379;--shiki-dark:#98C379;"> -</span><span style="color:#98C379;--shiki-dark:#98C379;"> 16:48:42</span><span style="color:#98C379;--shiki-dark:#98C379;"> up</span><span style="color:#98C379;--shiki-dark:#98C379;">  4:12,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">  1</span><span style="color:#98C379;--shiki-dark:#98C379;"> user,</span><span style="color:#98C379;--shiki-dark:#98C379;">  load</span><span style="color:#98C379;--shiki-dark:#98C379;"> average:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 25.25,</span><span style="color:#98C379;--shiki-dark:#98C379;"> 23.14,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 23.37</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 方法三：cat /proc/loadavg</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> cat</span><span style="color:#98C379;--shiki-dark:#98C379;"> /proc/loadavg</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">25.72</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 23.19</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 23.35</span><span style="color:#98C379;--shiki-dark:#98C379;"> 42/3411</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 43603</span></span></code></pre></div><h3 id="_1-2-简单分析" tabindex="-1"><a class="header-anchor" href="#_1-2-简单分析"><span>1.2 简单分析</span></a></h3><ul><li>如果平均值为 0.0，意味着系统处于空闲状态；</li><li>当CPU工作量饱和的时候，平均负荷为1。</li><li>&quot;load average&quot;的值越低，比如等于0.2或0.3，就说明电脑的工作量越小，系统负荷比较轻。</li><li>如果 1min 平均值高于 5min 或 15min 平均值，则负载正在增加</li><li>如果 1min 平均值低于 5min 或 15min 平均值，则负载正在减少</li><li>如果它们高于系统 CPU 的数量，那么系统很可能会遇到性能问题（视情况而定）</li></ul><blockquote><p>1min、5min、15min 作为一个三元组，可以通过这三个值来判断系统中负载是正在增加还是减少。同时，它们也可以应用于其他的场景，例如作为云计算中实例自动扩缩容的规则。</p></blockquote><h2 id="_2-一个类比" tabindex="-1"><a class="header-anchor" href="#_2-一个类比"><span>2. 一个类比</span></a></h2><p>判断系统负荷是否过重，必须理解load average的真正含义。</p><p>首先，假设最简单的情况，你的电脑只有一个CPU，所有的运算都必须由这个CPU来完成。</p><p>那么，我们不妨把这个CPU想象成一座大桥，桥上只有一根车道，所有车辆都必须从这根车道上通过。（很显然，这座桥只能单向通行。）</p><ul><li><p>系统负荷为0，意味着大桥上一辆车也没有。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041613.png" alt="image-20230510101406905" tabindex="0" loading="lazy"><figcaption>image-20230510101406905</figcaption></figure></li><li><p>系统负荷为0.5，意味着大桥一半的路段有车。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041656.png" alt="image-20230510101428274" tabindex="0" loading="lazy"><figcaption>image-20230510101428274</figcaption></figure></li><li><p>系统负荷为1.0，意味着大桥的所有路段都有车，也就是说大桥已经&quot;满&quot;了。但是必须注意的是，直到此时大桥还是能顺畅通行的。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041686.png" alt="image-20230510101453298" tabindex="0" loading="lazy"><figcaption>image-20230510101453298</figcaption></figure></li><li><p>系统负荷为1.7，意味着车辆太多了，大桥已经被占满了（100%），后面等着上桥的车辆为桥面车辆的70%。以此类推，系统负荷2.0，意味着等待上桥的车辆与桥面的车辆一样多；系统负荷3.0，意味着等待上桥的车辆是桥面车辆的2倍。总之，当系统负荷大于1，后面的车辆就必须等待了；系统负荷越大，过桥就必须等得越久。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041716.png" alt="image-20230510101526551" tabindex="0" loading="lazy"><figcaption>image-20230510101526551</figcaption></figure></li></ul><p>CPU的系统负荷，基本上等同于上面的类比。大桥的通行能力，就是CPU的最大工作量；桥梁上的车辆，就是一个个等待CPU处理的进程（process）。</p><p>如果CPU每分钟最多处理100个进程，那么系统负荷0.2，意味着CPU在这1分钟里只处理20个进程；系统负荷1.0，意味着CPU在这1分钟里正好处理100个进程；系统负荷1.7，意味着除了CPU正在处理的100个进程以外，还有70个进程正排队等着CPU处理。</p><p>为了电脑顺畅运行，系统负荷最好不要超过1.0，这样就没有进程需要等待了，所有进程都能第一时间得到处理。很显然，1.0是一个关键值，超过这个值，系统就不在最佳状态了，你要动手干预了。</p><h2 id="_3-系统负荷的经验法则" tabindex="-1"><a class="header-anchor" href="#_3-系统负荷的经验法则"><span>3. <strong>系统负荷的经验法则</strong></span></a></h2><p>1.0是系统负荷的理想值吗？</p><p>不一定，系统管理员往往会留一点余地，当这个值达到0.7，就应当引起注意了。经验法则是这样的：</p><p>当系统负荷持续大于0.7，你必须开始调查了，问题出在哪里，防止情况恶化。</p><p>当系统负荷持续大于1.0，你必须动手寻找解决办法，把这个值降下来。</p><p>当系统负荷达到5.0，就表明你的系统有很严重的问题，长时间没有响应，或者接近死机了。你不应该让系统达到这个值。</p><h2 id="_4-多处理器" tabindex="-1"><a class="header-anchor" href="#_4-多处理器"><span>4. <strong>多处理器</strong></span></a></h2><p>上面，我们假设你的电脑只有1个CPU。如果你的电脑装了2个CPU，会发生什么情况呢？</p><p>2个CPU，意味着电脑的处理能力翻了一倍，能够同时处理的进程数量也翻了一倍。</p><p>还是用大桥来类比，两个CPU就意味着大桥有两根车道了，通车能力翻倍了。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041743.png" alt="image-20230510101736793" tabindex="0" loading="lazy"><figcaption>image-20230510101736793</figcaption></figure><p>所以，2个CPU表明系统负荷可以达到2.0，此时每个CPU都达到100%的工作量。推广开来，n个CPU的电脑，可接受的系统负荷最大为n.0。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.ruanyifeng.com/blog/2011/07/linux_load_average_explained.html" target="_blank" rel="noopener noreferrer">理解Linux系统负荷</a></p><p><a href="https://zhuanlan.zhihu.com/p/75975041" target="_blank" rel="noopener noreferrer">Linux Load Averages：什么是平均负载？</a></p>`,32)]))}const t=s(l,[["render",r],["__file","linux-j-load.html.vue"]]),c=JSON.parse('{"path":"/posts/Linux/linux-j-load.html","title":"Linux概念 - Load 平均负载","lang":"zh-CN","frontmatter":{"description":"Linux概念 - Load 平均负载 1. 简介 Linux load averages 是系统负载平均值（system load averages），它将正在运行的线程（任务）对系统的需求显示为平均运行数和等待线程数。Linux load averages 可以衡量任务对系统的需求，并且它可能大于系统当前正在处理的数量，大多数工具将其显示为三个平均...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Linux/linux-j-load.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Linux概念 - Load 平均负载"}],["meta",{"property":"og:description","content":"Linux概念 - Load 平均负载 1. 简介 Linux load averages 是系统负载平均值（system load averages），它将正在运行的线程（任务）对系统的需求显示为平均运行数和等待线程数。Linux load averages 可以衡量任务对系统的需求，并且它可能大于系统当前正在处理的数量，大多数工具将其显示为三个平均..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041613.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux概念 - Load 平均负载\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041613.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041656.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041686.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041716.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231041743.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 查看命令","slug":"_1-1-查看命令","link":"#_1-1-查看命令","children":[]},{"level":3,"title":"1.2 简单分析","slug":"_1-2-简单分析","link":"#_1-2-简单分析","children":[]}]},{"level":2,"title":"2. 一个类比","slug":"_2-一个类比","link":"#_2-一个类比","children":[]},{"level":2,"title":"3. 系统负荷的经验法则","slug":"_3-系统负荷的经验法则","link":"#_3-系统负荷的经验法则","children":[]},{"level":2,"title":"4. 多处理器","slug":"_4-多处理器","link":"#_4-多处理器","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.36,"words":1309},"filePathRelative":"posts/Linux/linux-j-load.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>Linux load averages 是系统负载平均值（system load averages），它将正在运行的线程（任务）对系统的需求显示为平均运行数和等待线程数。Linux load averages 可以衡量任务对系统的需求，并且它可能大于系统当前正在处理的数量，大多数工具将其显示为三个平均值，分别为 1、5 和 15 分钟值。</p>\\n<h3>1.1 查看命令</h3>\\n<p>以下为系统中显示 Linux load averages 的实例：</p>\\n<div class=\\"language-bash\\" data-ext=\\"bash\\" data-title=\\"bash\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 方法一：uptime</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">$</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> uptime</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> 16:48:24</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> up</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">  4:11,</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">  1</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> user,</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">  load</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> average:</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 25.25,</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 23.40,</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> 23.46</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 方法二：top</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">top</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> -</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 16:48:42</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> up</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">  4:12,</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">  1</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> user,</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">  load</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> average:</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 25.25,</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 23.14,</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> 23.37</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 方法三：cat /proc/loadavg</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">$</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> cat</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> /proc/loadavg</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">25.72</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> 23.19</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> 23.35</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 42/3411</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> 43603</span></span></code></pre>\\n</div>","autoDesc":true}');export{t as comp,c as data};
