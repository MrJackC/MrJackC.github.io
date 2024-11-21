import{_ as e,c as i,a as n,o as t}from"./app-CpAF2rca.js";const s={};function r(h,a){return t(),i("div",null,a[0]||(a[0]=[n('<h1 id="linux-which查看可执行文件" tabindex="-1"><a class="header-anchor" href="#linux-which查看可执行文件"><span>Linux-which查看可执行文件</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1 简介</span></a></h2><p><strong>查看可执行文件的位置</strong></p><p>which命令的作用是，<strong>在PATH变量指定的路径中</strong>，搜索某个系统命令的位置，并且返回第一个搜索结果。</p><blockquote><p>也就是说，使用which命令，就可以看到某个系统命令是否存在，以及执行的到底是哪一个位置的命令。</p></blockquote><h2 id="_2-命令语法" tabindex="-1"><a class="header-anchor" href="#_2-命令语法"><span>2 命令语法</span></a></h2><p>which 可执行文件名称</p><h2 id="_3-命令参数" tabindex="-1"><a class="header-anchor" href="#_3-命令参数"><span>3 命令参数</span></a></h2><ul><li>-a 如果有多个匹配结果则打印所有结果:</li><li>-n 指定文件名长度，指定的长度必须大于或等于所有文件中最长的文件名。</li><li>-p 与-n参数相同，但此处的包括了文件的路径。</li><li>-w 指定输出时栏位的宽度。</li><li>-V 显示版本信息</li></ul><h2 id="_4-实例" tabindex="-1"><a class="header-anchor" href="#_4-实例"><span>4 实例</span></a></h2><h3 id="_4-1-java-命令所在的位置" tabindex="-1"><a class="header-anchor" href="#_4-1-java-命令所在的位置"><span>4.1 java 命令所在的位置</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">which</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -a</span><span style="color:#98C379;--shiki-dark:#98C379;"> java</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231056344.png" alt="image-20220418174207332" tabindex="0" loading="lazy"><figcaption>image-20220418174207332</figcaption></figure><h3 id="_4-2-找出-cd-这个命令" tabindex="-1"><a class="header-anchor" href="#_4-2-找出-cd-这个命令"><span><strong>4.2 找出 cd 这个命令</strong></span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">which</span><span style="color:#98C379;--shiki-dark:#98C379;"> cd</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231056390.png" alt="image-20220418174012154" tabindex="0" loading="lazy"><figcaption>image-20220418174012154</figcaption></figure><h3 id="_4-3-找出-xx这个命令" tabindex="-1"><a class="header-anchor" href="#_4-3-找出-xx这个命令"><span>4.3 找出 xx这个命令</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">which</span><span style="color:#98C379;--shiki-dark:#98C379;"> xxx</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231056417.png" alt="image-20220418174248167" tabindex="0" loading="lazy"><figcaption>image-20220418174248167</figcaption></figure><h3 id="_4-4-找出-redis-这个命令" tabindex="-1"><a class="header-anchor" href="#_4-4-找出-redis-这个命令"><span>4.4 找出 redis 这个命令</span></a></h3><p>redis 只是软件，并不是命令</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span> which redis</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231056451.png" alt="image-20220419105639815" tabindex="0" loading="lazy"><figcaption>image-20220419105639815</figcaption></figure><h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h3>',24)]))}const l=e(s,[["render",r],["__file","linux-x-which.html.vue"]]),o=JSON.parse('{"path":"/posts/Linux/linux-x-which.html","title":"Linux-which查看可执行文件","lang":"zh-CN","frontmatter":{"description":"Linux-which查看可执行文件 1 简介 查看可执行文件的位置 which命令的作用是，在PATH变量指定的路径中，搜索某个系统命令的位置，并且返回第一个搜索结果。 也就是说，使用which命令，就可以看到某个系统命令是否存在，以及执行的到底是哪一个位置的命令。 2 命令语法 which 可执行文件名称 3 命令参数 -a 如果有多个匹配结果则打...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Linux/linux-x-which.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Linux-which查看可执行文件"}],["meta",{"property":"og:description","content":"Linux-which查看可执行文件 1 简介 查看可执行文件的位置 which命令的作用是，在PATH变量指定的路径中，搜索某个系统命令的位置，并且返回第一个搜索结果。 也就是说，使用which命令，就可以看到某个系统命令是否存在，以及执行的到底是哪一个位置的命令。 2 命令语法 which 可执行文件名称 3 命令参数 -a 如果有多个匹配结果则打..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231056344.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux-which查看可执行文件\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231056344.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231056390.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231056417.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231056451.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2 命令语法","slug":"_2-命令语法","link":"#_2-命令语法","children":[]},{"level":2,"title":"3 命令参数","slug":"_3-命令参数","link":"#_3-命令参数","children":[]},{"level":2,"title":"4 实例","slug":"_4-实例","link":"#_4-实例","children":[{"level":3,"title":"4.1 java 命令所在的位置","slug":"_4-1-java-命令所在的位置","link":"#_4-1-java-命令所在的位置","children":[]},{"level":3,"title":"4.2 找出 cd 这个命令","slug":"_4-2-找出-cd-这个命令","link":"#_4-2-找出-cd-这个命令","children":[]},{"level":3,"title":"4.3 找出 xx这个命令","slug":"_4-3-找出-xx这个命令","link":"#_4-3-找出-xx这个命令","children":[]},{"level":3,"title":"4.4 找出 redis 这个命令","slug":"_4-4-找出-redis-这个命令","link":"#_4-4-找出-redis-这个命令","children":[]},{"level":3,"title":"","slug":"","link":"#","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.93,"words":278},"filePathRelative":"posts/Linux/linux-x-which.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1 简介</h2>\\n<p><strong>查看可执行文件的位置</strong></p>\\n<p>which命令的作用是，<strong>在PATH变量指定的路径中</strong>，搜索某个系统命令的位置，并且返回第一个搜索结果。</p>\\n<blockquote>\\n<p>也就是说，使用which命令，就可以看到某个系统命令是否存在，以及执行的到底是哪一个位置的命令。</p>\\n</blockquote>\\n<h2>2 命令语法</h2>\\n<p>which 可执行文件名称</p>\\n<h2>3 命令参数</h2>\\n<ul>\\n<li>-a 如果有多个匹配结果则打印所有结果:</li>\\n<li>-n 指定文件名长度，指定的长度必须大于或等于所有文件中最长的文件名。</li>\\n<li>-p 与-n参数相同，但此处的包括了文件的路径。</li>\\n<li>-w 指定输出时栏位的宽度。</li>\\n<li>-V 显示版本信息</li>\\n</ul>","autoDesc":true}');export{l as comp,o as data};
