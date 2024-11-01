import{_ as a,c as n,a as i,o as e}from"./app-tJW29Kmg.js";const t={};function l(r,s){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="linux网络监控" tabindex="-1"><a class="header-anchor" href="#linux网络监控"><span>Linux网络监控</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>linux中网络监控命令主要是netstat 和sar</p><h2 id="_2-监控命令" tabindex="-1"><a class="header-anchor" href="#_2-监控命令"><span>2. 监控命令</span></a></h2><h3 id="_2-1-netstat" tabindex="-1"><a class="header-anchor" href="#_2-1-netstat"><span>2.1 netstat</span></a></h3><h4 id="_2-1-1-简介" tabindex="-1"><a class="header-anchor" href="#_2-1-1-简介"><span>2.1.1 简介</span></a></h4><p>netstat命令一般用于检验本机各端口的网络连接情况，用于显示与IP、TCP、UDP和ICMP协议相关的统计数据。</p><h4 id="_2-1-2-常用实例" tabindex="-1"><a class="header-anchor" href="#_2-1-2-常用实例"><span>2.1.2 常用实例：</span></a></h4><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">netstat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -aup</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 输出所有UDP连接状况</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">netstat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -atp</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 输出所有TCP连接状况</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">netstat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -s</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 显示各个协议的网络统计信息</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">netstat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -i</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 显示网卡列表</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">netstat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -r</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 显示路由表信息</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">netstat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -l</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 只显示监听端口</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">netstat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -lt</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">       # 只列出所有监听 tcp 端口</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">netstat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -lu</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">       # 只列出所有监听 udp 端口</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">netstat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -lx</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">       # 只列出所有监听 UNIX 端口</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">netstat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -p或--programs</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 显示正在使用Socket的程序识别码和程序名称；</span></span></code></pre></div><h4 id="_2-1-3-tldr-中的介绍" tabindex="-1"><a class="header-anchor" href="#_2-1-3-tldr-中的介绍"><span>2.1.3 tldr 中的介绍</span></a></h4><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> netstat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  显示与网络相关的信息，如打开的连接、打开的套接字端口等.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  更多信息:</span><span style="color:#98C379;--shiki-dark:#98C379;"> https://www.unix.com/man-page/osx/1/netstat.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  -</span><span style="color:#98C379;--shiki-dark:#98C379;"> 列出所有端口:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    netstat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  -</span><span style="color:#98C379;--shiki-dark:#98C379;"> 列出所有被侦听端口:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    netstat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -l</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  -</span><span style="color:#98C379;--shiki-dark:#98C379;"> 列出侦听的</span><span style="color:#98C379;--shiki-dark:#98C379;"> TCP</span><span style="color:#98C379;--shiki-dark:#98C379;"> 端口:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    netstat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -t</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  -</span><span style="color:#98C379;--shiki-dark:#98C379;"> 显示监听给定协议监听的</span><span style="color:#98C379;--shiki-dark:#98C379;"> PID</span><span style="color:#98C379;--shiki-dark:#98C379;"> 和程序名:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    netstat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -p</span><span style="color:#98C379;--shiki-dark:#98C379;"> 协议</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  -</span><span style="color:#98C379;--shiki-dark:#98C379;"> 打印路由表:</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    netstat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -nr</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-4-示例" tabindex="-1"><a class="header-anchor" href="#_2-1-4-示例"><span>2.1.4 示例</span></a></h4><h5 id="_2-1-4-1-列出所有端口-包含tcp和udp" tabindex="-1"><a class="header-anchor" href="#_2-1-4-1-列出所有端口-包含tcp和udp"><span>2.1.4.1 <strong>列出所有端口(包含TCP和UDP)</strong></span></a></h5><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>netstat -a</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231043191.png" alt="image-20220408145537683" tabindex="0" loading="lazy"><figcaption>image-20220408145537683</figcaption></figure><h5 id="_2-1-4-2-列出所有tcp端口" tabindex="-1"><a class="header-anchor" href="#_2-1-4-2-列出所有tcp端口"><span>2.1.4.2 <strong>列出所有TCP端口</strong></span></a></h5><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&gt; netstat -at</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231043237.png" alt="image-20220408145637391" tabindex="0" loading="lazy"><figcaption>image-20220408145637391</figcaption></figure><h5 id="_2-1-4-3-列出所有udp端口" tabindex="-1"><a class="header-anchor" href="#_2-1-4-3-列出所有udp端口"><span>2.1.4.3 <strong>列出所有UDP端口</strong></span></a></h5><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">netstat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -au</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231043265.png" alt="image-20220408145728045" tabindex="0" loading="lazy"><figcaption>image-20220408145728045</figcaption></figure><h5 id="_2-1-4-4-找出程序运行的端口" tabindex="-1"><a class="header-anchor" href="#_2-1-4-4-找出程序运行的端口"><span>2.1.4.4 <strong>找出程序运行的端口</strong></span></a></h5><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span> netstat -tunlp | grep redis</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231043291.png" alt="image-20220408150002077" tabindex="0" loading="lazy"><figcaption>image-20220408150002077</figcaption></figure><h5 id="_2-1-4-5-找出运行在指定端口的进程" tabindex="-1"><a class="header-anchor" href="#_2-1-4-5-找出运行在指定端口的进程"><span>2.1.4.5 <strong>找出运行在指定端口的进程</strong></span></a></h5><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">netstat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -tunlp</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> | </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 6379</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231043318.png" alt="image-20220408150517112" tabindex="0" loading="lazy"><figcaption>image-20220408150517112</figcaption></figure><h5 id="_2-1-4-6-通过端口找进程id" tabindex="-1"><a class="header-anchor" href="#_2-1-4-6-通过端口找进程id"><span>2.1.4.6 通过端口找进程ID</span></a></h5><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">netstat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -tunlp</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> | </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> | </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">awk</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;{print $7}&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> | </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cut</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -d/</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -f1</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231043340.png" alt="image-20220408150717292" tabindex="0" loading="lazy"><figcaption>image-20220408150717292</figcaption></figure><h3 id="_2-2-sar" tabindex="-1"><a class="header-anchor" href="#_2-2-sar"><span>2.2 sar</span></a></h3><h4 id="_2-2-1-简介" tabindex="-1"><a class="header-anchor" href="#_2-2-1-简介"><span>2.2.1 简介</span></a></h4><p>sar命令 是Linux下系统运行状态统计工具，它将指定的操作系统状态计数器显示到标准输出设备。</p><h4 id="_2-2-2-字段说明" tabindex="-1"><a class="header-anchor" href="#_2-2-2-字段说明"><span>2.2.2 字段说明</span></a></h4><ul><li><code>IFACE</code>：网络设备的名称</li><li><code>rxpck/s</code>：每秒钟接收到的包数目</li><li><code>txpck/s</code>：每秒钟发送出去的包数目</li><li><code>rxkB/s</code>：每秒钟接收到的字节数</li><li><code>txkB/s</code>：每秒钟发送出去的字节数</li></ul><h4 id="_2-2-3-示例" tabindex="-1"><a class="header-anchor" href="#_2-2-3-示例"><span>2.2.3 示例</span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231043363.png" alt="image-20220401145225177" tabindex="0" loading="lazy"><figcaption>image-20220401145225177</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/398839850" target="_blank" rel="noopener noreferrer">Linux之netstat命令</a></p>`,39)]))}const p=a(t,[["render",l],["__file","linux-j-net.html.vue"]]),c=JSON.parse('{"path":"/posts/Linux/linux-j-net.html","title":"Linux网络监控","lang":"zh-CN","frontmatter":{"description":"Linux网络监控 1. 简介 linux中网络监控命令主要是netstat 和sar 2. 监控命令 2.1 netstat 2.1.1 简介 netstat命令一般用于检验本机各端口的网络连接情况，用于显示与IP、TCP、UDP和ICMP协议相关的统计数据。 2.1.2 常用实例： 2.1.3 tldr 中的介绍 2.1.4 示例 2.1.4.1 ...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Linux/linux-j-net.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Linux网络监控"}],["meta",{"property":"og:description","content":"Linux网络监控 1. 简介 linux中网络监控命令主要是netstat 和sar 2. 监控命令 2.1 netstat 2.1.1 简介 netstat命令一般用于检验本机各端口的网络连接情况，用于显示与IP、TCP、UDP和ICMP协议相关的统计数据。 2.1.2 常用实例： 2.1.3 tldr 中的介绍 2.1.4 示例 2.1.4.1 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231043191.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux网络监控\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231043191.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231043237.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231043265.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231043291.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231043318.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231043340.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231043363.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 监控命令","slug":"_2-监控命令","link":"#_2-监控命令","children":[{"level":3,"title":"2.1 netstat","slug":"_2-1-netstat","link":"#_2-1-netstat","children":[]},{"level":3,"title":"2.2 sar","slug":"_2-2-sar","link":"#_2-2-sar","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.77,"words":532},"filePathRelative":"posts/Linux/linux-j-net.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>linux中网络监控命令主要是netstat 和sar</p>\\n<h2>2. 监控命令</h2>\\n<h3>2.1 netstat</h3>\\n<h4>2.1.1 简介</h4>\\n<p>netstat命令一般用于检验本机各端口的网络连接情况，用于显示与IP、TCP、UDP和ICMP协议相关的统计数据。</p>\\n<h4>2.1.2 常用实例：</h4>\\n<div class=\\"language-sh\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">netstat</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -aup</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">      # 输出所有UDP连接状况</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">netstat</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -atp</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">      # 输出所有TCP连接状况</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">netstat</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -s</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">        # 显示各个协议的网络统计信息</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">netstat</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -i</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">        # 显示网卡列表</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">netstat</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -r</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">        # 显示路由表信息</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">netstat</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -l</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">        # 只显示监听端口</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">netstat</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -lt</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">       # 只列出所有监听 tcp 端口</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">netstat</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -lu</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">       # 只列出所有监听 udp 端口</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">netstat</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -lx</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">       # 只列出所有监听 UNIX 端口</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">netstat</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -p或--programs</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> # 显示正在使用Socket的程序识别码和程序名称；</span></span></code></pre>\\n</div>","autoDesc":true}');export{p as comp,c as data};
