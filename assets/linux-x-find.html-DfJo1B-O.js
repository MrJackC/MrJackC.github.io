import{_ as s,c as i,a as n,o as e}from"./app-DQS7qcOs.js";const l={};function o(r,a){return e(),i("div",null,a[0]||(a[0]=[n(`<h1 id="linux-查找文件" tabindex="-1"><a class="header-anchor" href="#linux-查找文件"><span>Linux - 查找文件</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>find是最常见和最强大的查找命令，你可以用它找到任何你想找的文件。</p><h2 id="_2-命令语法" tabindex="-1"><a class="header-anchor" href="#_2-命令语法"><span>2 命令语法</span></a></h2><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">find</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt; </span><span style="color:#98C379;--shiki-dark:#98C379;">path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &gt; &lt; </span><span style="color:#98C379;--shiki-dark:#98C379;">expression</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &gt; &lt; </span><span style="color:#98C379;--shiki-dark:#98C379;">cmd</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &gt;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">find</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">指定目</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">录&gt; &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">指定条</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">件&gt; &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">指定动</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">作&gt;</span></span></code></pre></div><ul><li>path： 所要搜索的目录及其所有子目录。默认为当前目录。</li><li>expression： 所要搜索的文件的特征。</li><li>cmd： 对搜索结果进行特定的处理。</li></ul><p>如果什么参数也不加，find默认搜索当前目录及其子目录，并且不过滤任何结果（也就是返回所有文件），将它们全都显示在屏幕上。</p><h2 id="_3-实例" tabindex="-1"><a class="header-anchor" href="#_3-实例"><span>3 实例</span></a></h2><h3 id="_3-1-按扩展名查找文件" tabindex="-1"><a class="header-anchor" href="#_3-1-按扩展名查找文件"><span>3.1 按扩展名查找文件</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 语法</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> find</span><span style="color:#98C379;--shiki-dark:#98C379;"> root_path</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -name</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;*.ext&#39;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 示例</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> find</span><span style="color:#98C379;--shiki-dark:#98C379;"> /home</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -name</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;*.txt&quot;</span></span></code></pre></div><h3 id="_3-2-在不区分大小写的模式下-查找与给定名称匹配的目录" tabindex="-1"><a class="header-anchor" href="#_3-2-在不区分大小写的模式下-查找与给定名称匹配的目录"><span>3.2 在不区分大小写的模式下，查找与给定名称匹配的目录</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 语法</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">find</span><span style="color:#98C379;--shiki-dark:#98C379;"> root_path</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -type</span><span style="color:#98C379;--shiki-dark:#98C379;"> d</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -iname</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;*lib*&#39;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 示例</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> find</span><span style="color:#98C379;--shiki-dark:#98C379;"> /home</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -type</span><span style="color:#98C379;--shiki-dark:#98C379;"> d</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -name</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;*service*&quot;</span></span></code></pre></div><h3 id="_3-3-通过匹配多个模式查找文件" tabindex="-1"><a class="header-anchor" href="#_3-3-通过匹配多个模式查找文件"><span>3.3 通过匹配多个模式查找文件</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 语法</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">find</span><span style="color:#98C379;--shiki-dark:#98C379;"> root_path</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -name</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;*pattern_1*&#39;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -or</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -name</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;*pattern_2*&#39;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 示例</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">find</span><span style="color:#98C379;--shiki-dark:#98C379;"> .</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -name</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;*.txt&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -o</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -name</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;*.pdf&quot;</span></span></code></pre></div><h3 id="_3-4-查找与路径模式匹配的文件" tabindex="-1"><a class="header-anchor" href="#_3-4-查找与路径模式匹配的文件"><span>3.4 查找与路径模式匹配的文件:</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 语法</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> find</span><span style="color:#98C379;--shiki-dark:#98C379;"> root_path</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -path</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;**/lib/**/*.ext&#39;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 示例</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> find</span><span style="color:#98C379;--shiki-dark:#98C379;"> /usr/</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -path</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;*local*&quot;</span></span></code></pre></div><h3 id="_3-5查找与给定大小范围匹配的文件" tabindex="-1"><a class="header-anchor" href="#_3-5查找与给定大小范围匹配的文件"><span>3.5查找与给定大小范围匹配的文件:</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">find</span><span style="color:#98C379;--shiki-dark:#98C379;"> root_path</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -size</span><span style="color:#98C379;--shiki-dark:#98C379;"> +500k</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -size</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -10M</span></span></code></pre></div><h3 id="_3-6-找到最近7天修改过的文件-并删除它们" tabindex="-1"><a class="header-anchor" href="#_3-6-找到最近7天修改过的文件-并删除它们"><span>3.6 找到最近7天修改过的文件，并删除它们:</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">find</span><span style="color:#98C379;--shiki-dark:#98C379;"> root_path</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -mtime</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -7</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -delete</span></span></code></pre></div><h3 id="_3-7-根据文件类型进行搜索" tabindex="-1"><a class="header-anchor" href="#_3-7-根据文件类型进行搜索"><span>3.7 根据文件类型进行搜索</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>find . -type 类型参数</span></span></code></pre></div><p>类型参数列表：</p><ul><li><strong>f</strong> 普通文件</li><li><strong>l</strong> 符号连接</li><li><strong>d</strong> 目录</li><li><strong>c</strong> 字符设备</li><li><strong>b</strong> 块设备</li><li><strong>s</strong> 套接字</li><li><strong>p</strong> Fifo</li></ul><h3 id="_3-8-根据文件时间戳进行搜索" tabindex="-1"><a class="header-anchor" href="#_3-8-根据文件时间戳进行搜索"><span>3.8 根据文件时间戳进行搜索</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>find . -type f 时间戳</span></span></code></pre></div><p>UNIX/Linux文件系统每个文件都有三种时间戳：</p><ul><li><strong>访问时间</strong>（-atime/天，-amin/分钟）：用户最近一次访问时间。</li><li><strong>修改时间</strong>（-mtime/天，-mmin/分钟）：文件最后一次修改时间。</li><li><strong>变化时间</strong>（-ctime/天，-cmin/分钟）：文件数据元（例如权限等）最后一次修改时间。</li></ul><p>搜索最近七天内被访问过的所有文件</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>find . -type f -atime -7</span></span></code></pre></div><p>搜索恰好在七天前被访问过的所有文件</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>find . -type f -atime 7</span></span></code></pre></div><p>搜索超过七天内被访问过的所有文件</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>find . -type f -atime +7</span></span></code></pre></div><p>搜索访问时间超过10分钟的所有文件</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>find . -type f -amin +10</span></span></code></pre></div><p>找出比<a href="http://man.linuxde.net/file" target="_blank" rel="noopener noreferrer">file</a>.log修改时间更长的所有文件</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>find . -type f -newer file.log</span></span></code></pre></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h3>`,39)]))}const p=s(l,[["render",o],["__file","linux-x-find.html.vue"]]),d=JSON.parse('{"path":"/posts/Linux/linux-x-find.html","title":"Linux - 查找文件","lang":"zh-CN","frontmatter":{"description":"Linux - 查找文件 1. 简介 find是最常见和最强大的查找命令，你可以用它找到任何你想找的文件。 2 命令语法 path： 所要搜索的目录及其所有子目录。默认为当前目录。 expression： 所要搜索的文件的特征。 cmd： 对搜索结果进行特定的处理。 如果什么参数也不加，find默认搜索当前目录及其子目录，并且不过滤任何结果（也就是返回...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Linux/linux-x-find.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Linux - 查找文件"}],["meta",{"property":"og:description","content":"Linux - 查找文件 1. 简介 find是最常见和最强大的查找命令，你可以用它找到任何你想找的文件。 2 命令语法 path： 所要搜索的目录及其所有子目录。默认为当前目录。 expression： 所要搜索的文件的特征。 cmd： 对搜索结果进行特定的处理。 如果什么参数也不加，find默认搜索当前目录及其子目录，并且不过滤任何结果（也就是返回..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux - 查找文件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2 命令语法","slug":"_2-命令语法","link":"#_2-命令语法","children":[]},{"level":2,"title":"3 实例","slug":"_3-实例","link":"#_3-实例","children":[{"level":3,"title":"3.1 按扩展名查找文件","slug":"_3-1-按扩展名查找文件","link":"#_3-1-按扩展名查找文件","children":[]},{"level":3,"title":"3.2 在不区分大小写的模式下，查找与给定名称匹配的目录","slug":"_3-2-在不区分大小写的模式下-查找与给定名称匹配的目录","link":"#_3-2-在不区分大小写的模式下-查找与给定名称匹配的目录","children":[]},{"level":3,"title":"3.3 通过匹配多个模式查找文件","slug":"_3-3-通过匹配多个模式查找文件","link":"#_3-3-通过匹配多个模式查找文件","children":[]},{"level":3,"title":"3.4 查找与路径模式匹配的文件:","slug":"_3-4-查找与路径模式匹配的文件","link":"#_3-4-查找与路径模式匹配的文件","children":[]},{"level":3,"title":"3.5查找与给定大小范围匹配的文件:","slug":"_3-5查找与给定大小范围匹配的文件","link":"#_3-5查找与给定大小范围匹配的文件","children":[]},{"level":3,"title":"3.6 找到最近7天修改过的文件，并删除它们:","slug":"_3-6-找到最近7天修改过的文件-并删除它们","link":"#_3-6-找到最近7天修改过的文件-并删除它们","children":[]},{"level":3,"title":"3.7 根据文件类型进行搜索","slug":"_3-7-根据文件类型进行搜索","link":"#_3-7-根据文件类型进行搜索","children":[]},{"level":3,"title":"3.8 根据文件时间戳进行搜索","slug":"_3-8-根据文件时间戳进行搜索","link":"#_3-8-根据文件时间戳进行搜索","children":[]},{"level":3,"title":"","slug":"","link":"#","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.98,"words":595},"filePathRelative":"posts/Linux/linux-x-find.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>find是最常见和最强大的查找命令，你可以用它找到任何你想找的文件。</p>\\n<h2>2 命令语法</h2>\\n<div class=\\"language-bash\\" data-ext=\\"bash\\" data-title=\\"bash\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">find</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> &lt; </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">path</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> &gt; &lt; </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">expression</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> &gt; &lt; </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">cmd</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> &gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">find</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">指定目</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">录&gt; &lt;</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">指定条</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">件&gt; &lt;</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">指定动</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">作&gt;</span></span></code></pre>\\n</div>","autoDesc":true}');export{p as comp,d as data};
