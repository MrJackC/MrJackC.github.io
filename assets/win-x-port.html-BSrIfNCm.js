import{_ as s,c as e,a as o,o as t}from"./app-W9QyTiMU.js";const i={};function n(r,a){return t(),e("div",null,a[0]||(a[0]=[o('<h1 id="win7查看端口占用并杀死进程" tabindex="-1"><a class="header-anchor" href="#win7查看端口占用并杀死进程"><span>Win7查看端口占用并杀死进程</span></a></h1><ol><li><p>查看线程信息</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">netstat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -ano</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">findstr</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;端口号&quot;</span></span></code></pre></div></li><li><p>查看进程信息</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tasklist</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">findstr</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;PID&quot;</span></span></code></pre></div></li><li><p>强制关闭进程</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">taskkill</span><span style="color:#98C379;--shiki-dark:#98C379;"> /f</span><span style="color:#98C379;--shiki-dark:#98C379;"> /t</span><span style="color:#98C379;--shiki-dark:#98C379;"> /im</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;PID&quot;</span></span></code></pre></div></li></ol><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/MAOZEXIJR/article/details/85053695" target="_blank" rel="noopener noreferrer">Win7查看端口占用并杀死进程</a></p>',4)]))}const p=s(i,[["render",n],["__file","win-x-port.html.vue"]]),d=JSON.parse('{"path":"/posts/Development-Tools/Win/win-x-port.html","title":"Win7查看端口占用并杀死进程","lang":"zh-CN","frontmatter":{"created":"2024-05-14 07:56","updated":"2024-05-30 15:11","description":"Win7查看端口占用并杀死进程 查看线程信息 查看进程信息 强制关闭进程 参考文章 Win7查看端口占用并杀死进程","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Development-Tools/Win/win-x-port.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Win7查看端口占用并杀死进程"}],["meta",{"property":"og:description","content":"Win7查看端口占用并杀死进程 查看线程信息 查看进程信息 强制关闭进程 参考文章 Win7查看端口占用并杀死进程"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Win7查看端口占用并杀死进程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.27,"words":80},"filePathRelative":"posts/Development-Tools/Win/win-x-port.md","localizedDate":"2024年10月28日","excerpt":"\\n<ol>\\n<li>\\n<p>查看线程信息</p>\\n<div class=\\"language-sh\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">netstat</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -ano</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">|</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">findstr</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"端口号\\"</span></span></code></pre>\\n</div></li>\\n<li>\\n<p>查看进程信息</p>\\n<div class=\\"language-sh\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">tasklist</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">|</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">findstr</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"PID\\"</span></span></code></pre>\\n</div></li>\\n<li>\\n<p>强制关闭进程</p>\\n<div class=\\"language-sh\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">taskkill</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> /f</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> /t</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> /im</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"PID\\"</span></span></code></pre>\\n</div></li>\\n</ol>","autoDesc":true}');export{p as comp,d as data};
