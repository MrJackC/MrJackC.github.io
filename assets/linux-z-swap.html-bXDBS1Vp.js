import{_ as s,c as e,a as i,o as n}from"./app-CZJgH_ea.js";const p={};function r(t,a){return n(),e("div",null,a[0]||(a[0]=[i(`<h1 id="linux-swap交换分区" tabindex="-1"><a class="header-anchor" href="#linux-swap交换分区"><span>Linux Swap交换分区</span></a></h1><h2 id="_1-swap交换分区概念" tabindex="-1"><a class="header-anchor" href="#_1-swap交换分区概念"><span>1. Swap交换分区概念</span></a></h2><p>Linux内核为了提高读写效率与速度，会将文件在内存中进行缓存，这部分内存就是Cache Memory(缓存内存)。<strong>即使你的程序运行结束后，Cache Memory也不会自动释放。<strong>这就会导致你再Linux系统中</strong>程序频繁读写文件</strong>后，你会发现<strong>可用内存变少</strong>。当系统的无力内存不够用的时候，就需要将无力内存的一部分释放出来，以供当前运行的程序使用。</p><p>那些被释放的空间可能来自一些很长时间没有什么操作的程序，这些**被释放的空间被临时保存到Swap空间中，**等到那些程序要运行时，再从Swap分区中恢复保存的数据到内存中。这样，系统总是在物理内存不够时，才进行Swap交换。</p><h2 id="_2-查看swap分区大小" tabindex="-1"><a class="header-anchor" href="#_2-查看swap分区大小"><span>2. 查看Swap分区大小</span></a></h2><p>查看Swap分区的大小以及使用情况，一般使用free命令。当前我们并没设置swap分区</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231103407.png" alt="image-20200206122221579" tabindex="0" loading="lazy"><figcaption>image-20200206122221579</figcaption></figure><p>我们可以使用swapon命令查看当前swap相关信息：例如swap空间是swap partition，Swap size，使用情况等详细信息</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>swapon -s</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231103449.png" alt="image-20200206130028437" tabindex="0" loading="lazy"><figcaption>image-20200206130028437</figcaption></figure><h2 id="_3-创建swap区分" tabindex="-1"><a class="header-anchor" href="#_3-创建swap区分"><span>3. 创建swap区分</span></a></h2><h3 id="_3-1-创建swap文件" tabindex="-1"><a class="header-anchor" href="#_3-1-创建swap文件"><span>3.1 创建swap文件</span></a></h3><div class="language-swift" data-ext="swift" data-title="swift"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">cd /</span><span style="color:#C678DD;--shiki-dark:#C678DD;">var</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">sudo mkdir swap</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">sudo dd </span><span style="color:#C678DD;--shiki-dark:#C678DD;">if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=/dev/zero of=swapfile bs=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1024</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> count=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2000000</span></span></code></pre></div><p>count代表的是大小，我这里是2G。</p><h3 id="_3-2-把文件转换为swap文件" tabindex="-1"><a class="header-anchor" href="#_3-2-把文件转换为swap文件"><span>3.2 把文件转换为swap文件</span></a></h3><div class="language-csharp" data-ext="csharp" data-title="csharp"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> sudo</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> mkswap</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> swapfile</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231103480.png" alt="image-20200206124047741" tabindex="0" loading="lazy"><figcaption>image-20200206124047741</figcaption></figure><h3 id="_3-3-激活swap文件" tabindex="-1"><a class="header-anchor" href="#_3-3-激活swap文件"><span>3.3 激活swap文件</span></a></h3><p>这里可以直接用命令挂载上一个swap分区，但是重启后要重新挂载：</p><div class="language-csharp" data-ext="csharp" data-title="csharp"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">挂载： </span><span style="color:#E06C75;--shiki-dark:#E06C75;">sudo</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> swapon</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> /</span><span style="color:#E06C75;--shiki-dark:#E06C75;">var</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">swapfile</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">如果不需要了，可以也可以卸载：</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">卸载：</span><span style="color:#E06C75;--shiki-dark:#E06C75;">sudo</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> swapoff</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> /</span><span style="color:#E06C75;--shiki-dark:#E06C75;">var</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">swapfile</span></span></code></pre></div><h3 id="_3-4-开机启动后自动挂载" tabindex="-1"><a class="header-anchor" href="#_3-4-开机启动后自动挂载"><span>3.4 开机启动后自动挂载</span></a></h3><p>如果需要开机启动后自动挂载的话，可以把它添加到/etc/fstab文件中。</p><p>开机自动挂载SWAP分区，</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>vim /etc/fstab</span></span></code></pre></div><p>在文件末尾添加</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>/var/swapfile   swap  swap  defaults  0  0</span></span></code></pre></div><h3 id="_3-5-查看使用成功" tabindex="-1"><a class="header-anchor" href="#_3-5-查看使用成功"><span>3.5 查看使用成功</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231103515.png" alt="image-20200206125218923" tabindex="0" loading="lazy"><figcaption>image-20200206125218923</figcaption></figure><h2 id="_4-swappiness属性" tabindex="-1"><a class="header-anchor" href="#_4-swappiness属性"><span>4. swappiness属性</span></a></h2><h3 id="_4-1-swappiness属性介绍" tabindex="-1"><a class="header-anchor" href="#_4-1-swappiness属性介绍"><span>4.1 swappiness属性介绍</span></a></h3><p>swappiness的值得大小对如何使用swap分区是有很大联系的。Linux下设置swappiness<strong>参数来配置内存使用到多少才开始使用swap分区</strong></p><ul><li>swappiness=0:表示最大限度使用物理内存，然后才是swap空间</li><li>swappiness＝100:表示积极的使用swap分区，并且把内存上的数据及时的搬运到swap空间里面</li></ul><h3 id="_4-2-永久更改方法" tabindex="-1"><a class="header-anchor" href="#_4-2-永久更改方法"><span>4.2 永久更改方法</span></a></h3><p>修改 /etc/sysctl.conf</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>sudo vim /etc/sysctl.conf</span></span></code></pre></div><p>在末尾加上</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>vm.swappiness = 10</span></span></code></pre></div><p>生效</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>sudo sysctl -p</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.jianshu.com/p/04c7a9ab438c" target="_blank" rel="noopener noreferrer">Linux 开启 Swap分区 教程</a></p>`,41)]))}const l=s(p,[["render",r],["__file","linux-z-swap.html.vue"]]),c=JSON.parse('{"path":"/posts/Linux/linux-z-swap.html","title":"Linux Swap交换分区","lang":"zh-CN","frontmatter":{"description":"Linux Swap交换分区 1. Swap交换分区概念 Linux内核为了提高读写效率与速度，会将文件在内存中进行缓存，这部分内存就是Cache Memory(缓存内存)。即使你的程序运行结束后，Cache Memory也不会自动释放。这就会导致你再Linux系统中程序频繁读写文件后，你会发现可用内存变少。当系统的无力内存不够用的时候，就需要将无力内...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Linux/linux-z-swap.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Linux Swap交换分区"}],["meta",{"property":"og:description","content":"Linux Swap交换分区 1. Swap交换分区概念 Linux内核为了提高读写效率与速度，会将文件在内存中进行缓存，这部分内存就是Cache Memory(缓存内存)。即使你的程序运行结束后，Cache Memory也不会自动释放。这就会导致你再Linux系统中程序频繁读写文件后，你会发现可用内存变少。当系统的无力内存不够用的时候，就需要将无力内..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231103407.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux Swap交换分区\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231103407.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231103449.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231103480.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231103515.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. Swap交换分区概念","slug":"_1-swap交换分区概念","link":"#_1-swap交换分区概念","children":[]},{"level":2,"title":"2. 查看Swap分区大小","slug":"_2-查看swap分区大小","link":"#_2-查看swap分区大小","children":[]},{"level":2,"title":"3. 创建swap区分","slug":"_3-创建swap区分","link":"#_3-创建swap区分","children":[{"level":3,"title":"3.1 创建swap文件","slug":"_3-1-创建swap文件","link":"#_3-1-创建swap文件","children":[]},{"level":3,"title":"3.2 把文件转换为swap文件","slug":"_3-2-把文件转换为swap文件","link":"#_3-2-把文件转换为swap文件","children":[]},{"level":3,"title":"3.3 激活swap文件","slug":"_3-3-激活swap文件","link":"#_3-3-激活swap文件","children":[]},{"level":3,"title":"3.4 开机启动后自动挂载","slug":"_3-4-开机启动后自动挂载","link":"#_3-4-开机启动后自动挂载","children":[]},{"level":3,"title":"3.5 查看使用成功","slug":"_3-5-查看使用成功","link":"#_3-5-查看使用成功","children":[]}]},{"level":2,"title":"4. swappiness属性","slug":"_4-swappiness属性","link":"#_4-swappiness属性","children":[{"level":3,"title":"4.1 swappiness属性介绍","slug":"_4-1-swappiness属性介绍","link":"#_4-1-swappiness属性介绍","children":[]},{"level":3,"title":"4.2 永久更改方法","slug":"_4-2-永久更改方法","link":"#_4-2-永久更改方法","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.19,"words":657},"filePathRelative":"posts/Linux/linux-z-swap.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. Swap交换分区概念</h2>\\n<p>Linux内核为了提高读写效率与速度，会将文件在内存中进行缓存，这部分内存就是Cache Memory(缓存内存)。<strong>即使你的程序运行结束后，Cache Memory也不会自动释放。<strong>这就会导致你再Linux系统中</strong>程序频繁读写文件</strong>后，你会发现<strong>可用内存变少</strong>。当系统的无力内存不够用的时候，就需要将无力内存的一部分释放出来，以供当前运行的程序使用。</p>\\n<p>那些被释放的空间可能来自一些很长时间没有什么操作的程序，这些**被释放的空间被临时保存到Swap空间中，**等到那些程序要运行时，再从Swap分区中恢复保存的数据到内存中。这样，系统总是在物理内存不够时，才进行Swap交换。</p>","autoDesc":true}');export{l as comp,c as data};
