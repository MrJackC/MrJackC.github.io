import{_ as e,c as s,a as i,o as l}from"./app-mWs04Xnh.js";const t={};function n(o,a){return l(),s("div",null,a[0]||(a[0]=[i(`<h1 id="linux-locate查找文件" tabindex="-1"><a class="header-anchor" href="#linux-locate查找文件"><span>Linux-locate查找文件</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1 简介</span></a></h2><p>locate命令其实是“find -name”的另一种写法，但是要比后者快得多，原因在于它不搜索具体目录，<strong>而是搜索一个数据库（/var/lib/locatedb），这个数据库中含有本地所有文件信息</strong>。Linux系统自动创建这个数据库，并且<strong>每天自动更新一次</strong>，所以使用locate命令查不到最新变动过的文件。为了避免这种情况，可以在使用locate之前，先使用updatedb命令，手动更新数据库。</p><h2 id="_2-命令语法" tabindex="-1"><a class="header-anchor" href="#_2-命令语法"><span>2 命令语法</span></a></h2><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">locate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [OPTION]… [PATTERN]…</span></span></code></pre></div><h2 id="_3-命令参数-用得不多" tabindex="-1"><a class="header-anchor" href="#_3-命令参数-用得不多"><span>3 命令参数（用得不多）</span></a></h2><p>在mlocate数据库中搜索条目.</p><ul><li>-A, --all 只显示匹配所有模式的条目</li><li>-b, --basename 匹配唯一的路径名称的基本文件名</li><li>-c, --count 只显示找到条目的号码</li><li>-d, --database DBPATH 用 DBPATH 替代默认的数据库(/var/lib/mlocate/mlocate.db)</li><li>-e, --existing 只显示当前存在的文件条目</li><li>-L, --follow 当文件存在时跟随蔓延的符号链接 (默认)</li><li>-h, --help 显示本帮助</li><li>-i, --ignore-case 匹配模式时忽略大小写区别</li><li>-l, --limit, -n LIMIT 限制为 LIMIT项目的输出 (或 计数)</li><li>-m, --mmap 忽略向后兼容性</li><li>-P, --nofollow, -H 当检查文件时不跟随蔓延的符号链接</li><li>-0, --null 输出时以 NUL 分隔项目</li><li>-S, --statistics 不搜索项目,显示有关每个已用数据库的统计信息</li><li>-q, --quiet 不报告关于读取数据库的错误消息</li><li>-r, --regexp REGEXP 搜索基本正则表达式 REGEXP 来代替模式<br> --regex 模式是扩展正则表达式</li><li>-s, --stdio 忽略向后兼容性</li><li>-V, --version 显示版本信息</li><li>-w, --wholename 匹配完整路径名 (默认)</li></ul><h2 id="_4-实例" tabindex="-1"><a class="header-anchor" href="#_4-实例"><span>4 实例</span></a></h2><h3 id="_4-1-查找包含某个字符串的相关文件" tabindex="-1"><a class="header-anchor" href="#_4-1-查找包含某个字符串的相关文件"><span>4.1 查找包含某个字符串的相关文件</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">locate</span><span style="color:#98C379;--shiki-dark:#98C379;"> redis</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231054512.png" alt="image-20220419113313972" tabindex="0" loading="lazy"><figcaption>image-20220419113313972</figcaption></figure><h3 id="_4-2-按文件名查找文件-不包含填充字符的模式被解释为-关键字" tabindex="-1"><a class="header-anchor" href="#_4-2-按文件名查找文件-不包含填充字符的模式被解释为-关键字"><span>4.2 按文件名查找文件（不包含填充字符的模式被解释为 <em>关键字</em>）:</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 语法</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">locate</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> *</span><span style="color:#98C379;--shiki-dark:#98C379;">/文件名</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 示例</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> locate</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> *</span><span style="color:#98C379;--shiki-dark:#98C379;">/redis</span></span></code></pre></div><p>这样过滤出的结果更加符合我们想要的</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231054560.png" alt="image-20220419134741153" tabindex="0" loading="lazy"><figcaption>image-20220419134741153</figcaption></figure><h3 id="_4-3-重新建立文件数据索引数据库。" tabindex="-1"><a class="header-anchor" href="#_4-3-重新建立文件数据索引数据库。"><span>4.3 重新建立文件数据索引数据库。</span></a></h3><p>如果要查找最近添加的文件，则需要执行此操作:</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sudo</span><span style="color:#98C379;--shiki-dark:#98C379;"> updatedb</span></span></code></pre></div><h3 id="_4-4-搜索目录下所有以-sh开头的文件" tabindex="-1"><a class="header-anchor" href="#_4-4-搜索目录下所有以-sh开头的文件"><span>4.4 搜索目录下所有以 sh开头的文件</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">locate</span><span style="color:#98C379;--shiki-dark:#98C379;"> /bin/sh</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231054589.png" alt="image-20220419113440829" tabindex="0" loading="lazy"><figcaption>image-20220419113440829</figcaption></figure><h3 id="_4-5-指定显示数量" tabindex="-1"><a class="header-anchor" href="#_4-5-指定显示数量"><span>4.5 指定显示数量</span></a></h3><p>如果显示的内容过多，可以使用 -n 选项来限定显示数量。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">locate</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -n</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 3</span><span style="color:#98C379;--shiki-dark:#98C379;"> redis</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231054623.png" alt="image-20220419113647925" tabindex="0" loading="lazy"><figcaption>image-20220419113647925</figcaption></figure><h2 id="_5-locate-命令安装" tabindex="-1"><a class="header-anchor" href="#_5-locate-命令安装"><span>5 locate 命令安装</span></a></h2><p>如果locate 搜索时提示命令不存在</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231054667.png" alt="image-20220419112033248" tabindex="0" loading="lazy"><figcaption>image-20220419112033248</figcaption></figure><p>则需要先安装一下</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">yum</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> mlocate</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sudo</span><span style="color:#98C379;--shiki-dark:#98C379;"> updatedb</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">locate</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">  *</span><span style="color:#98C379;--shiki-dark:#98C379;">.doc</span></span></code></pre></div>`,31)]))}const c=e(t,[["render",n],["__file","linux-x-locate.html.vue"]]),d=JSON.parse('{"path":"/posts/Linux/linux-x-locate.html","title":"Linux-locate查找文件","lang":"zh-CN","frontmatter":{"description":"Linux-locate查找文件 1 简介 locate命令其实是“find -name”的另一种写法，但是要比后者快得多，原因在于它不搜索具体目录，而是搜索一个数据库（/var/lib/locatedb），这个数据库中含有本地所有文件信息。Linux系统自动创建这个数据库，并且每天自动更新一次，所以使用locate命令查不到最新变动过的文件。为了避免...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Linux/linux-x-locate.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Linux-locate查找文件"}],["meta",{"property":"og:description","content":"Linux-locate查找文件 1 简介 locate命令其实是“find -name”的另一种写法，但是要比后者快得多，原因在于它不搜索具体目录，而是搜索一个数据库（/var/lib/locatedb），这个数据库中含有本地所有文件信息。Linux系统自动创建这个数据库，并且每天自动更新一次，所以使用locate命令查不到最新变动过的文件。为了避免..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231054512.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux-locate查找文件\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231054512.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231054560.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231054589.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231054623.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231054667.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2 命令语法","slug":"_2-命令语法","link":"#_2-命令语法","children":[]},{"level":2,"title":"3 命令参数（用得不多）","slug":"_3-命令参数-用得不多","link":"#_3-命令参数-用得不多","children":[]},{"level":2,"title":"4 实例","slug":"_4-实例","link":"#_4-实例","children":[{"level":3,"title":"4.1 查找包含某个字符串的相关文件","slug":"_4-1-查找包含某个字符串的相关文件","link":"#_4-1-查找包含某个字符串的相关文件","children":[]},{"level":3,"title":"4.2 按文件名查找文件（不包含填充字符的模式被解释为 关键字）:","slug":"_4-2-按文件名查找文件-不包含填充字符的模式被解释为-关键字","link":"#_4-2-按文件名查找文件-不包含填充字符的模式被解释为-关键字","children":[]},{"level":3,"title":"4.3 重新建立文件数据索引数据库。","slug":"_4-3-重新建立文件数据索引数据库。","link":"#_4-3-重新建立文件数据索引数据库。","children":[]},{"level":3,"title":"4.4 搜索目录下所有以 sh开头的文件","slug":"_4-4-搜索目录下所有以-sh开头的文件","link":"#_4-4-搜索目录下所有以-sh开头的文件","children":[]},{"level":3,"title":"4.5 指定显示数量","slug":"_4-5-指定显示数量","link":"#_4-5-指定显示数量","children":[]}]},{"level":2,"title":"5 locate 命令安装","slug":"_5-locate-命令安装","link":"#_5-locate-命令安装","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.18,"words":653},"filePathRelative":"posts/Linux/linux-x-locate.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1 简介</h2>\\n<p>locate命令其实是“find -name”的另一种写法，但是要比后者快得多，原因在于它不搜索具体目录，<strong>而是搜索一个数据库（/var/lib/locatedb），这个数据库中含有本地所有文件信息</strong>。Linux系统自动创建这个数据库，并且<strong>每天自动更新一次</strong>，所以使用locate命令查不到最新变动过的文件。为了避免这种情况，可以在使用locate之前，先使用updatedb命令，手动更新数据库。</p>\\n<h2>2 命令语法</h2>\\n<div class=\\"language-bash\\" data-ext=\\"bash\\" data-title=\\"bash\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">locate</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> [OPTION]… [PATTERN]…</span></span></code></pre>\\n</div>","autoDesc":true}');export{c as comp,d as data};
