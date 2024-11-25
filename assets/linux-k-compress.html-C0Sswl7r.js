import{_ as a,c as n,a as p,o as r}from"./app-BfIe-EZg.js";const i={};function l(o,s){return r(),n("div",null,s[0]||(s[0]=[p(`<h1 id="linux文件解压" tabindex="-1"><a class="header-anchor" href="#linux文件解压"><span>Linux文件解压</span></a></h1><h2 id="_1-tar命令详解" tabindex="-1"><a class="header-anchor" href="#_1-tar命令详解"><span>1. tar命令详解</span></a></h2><h3 id="_1-1-五个独立命令" tabindex="-1"><a class="header-anchor" href="#_1-1-五个独立命令"><span>1.1 五个独立命令</span></a></h3><p>这五个是独立的命令，压缩解压都要<strong>用到其中一个</strong>，<strong>可以和别的命令连用但只能用其中一个</strong>。</p><p>-c: 建立压缩档案</p><p>-x：解压</p><p>-t：查看内容</p><p>-r：向压缩归档文件末尾追加文件</p><p>-u：更新原压缩包中的文件</p><h3 id="_1-2-可选命令" tabindex="-1"><a class="header-anchor" href="#_1-2-可选命令"><span>1.2 可选命令</span></a></h3><p>下面的参数是根据需要在压缩或解压档案时可选的。</p><p>-z：有gzip属性的</p><p>-j：有bz2属性的</p><p>-Z：有compress属性的</p><p>-v：显示所有过程</p><p>-O：将文件解开到标准输出</p><h3 id="_1-3-最后一个必须参数-f" tabindex="-1"><a class="header-anchor" href="#_1-3-最后一个必须参数-f"><span>1.3 最后一个必须参数-f</span></a></h3><p>-f: 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名。</p><h2 id="_2-常用解压" tabindex="-1"><a class="header-anchor" href="#_2-常用解压"><span>2. 常用解压</span></a></h2><p><strong>压缩</strong></p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tar</span><span style="color:#98C379;--shiki-dark:#98C379;"> –cvf</span><span style="color:#98C379;--shiki-dark:#98C379;"> jpg.tar</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> *</span><span style="color:#98C379;--shiki-dark:#98C379;">.jpg</span><span style="color:#98C379;--shiki-dark:#98C379;">       //</span><span style="color:#98C379;--shiki-dark:#98C379;"> 将目录里所有jpg文件打包成</span><span style="color:#98C379;--shiki-dark:#98C379;"> tar.jpg</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tar</span><span style="color:#98C379;--shiki-dark:#98C379;"> –czf</span><span style="color:#98C379;--shiki-dark:#98C379;"> jpg.tar.gz</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> *</span><span style="color:#98C379;--shiki-dark:#98C379;">.jpg</span><span style="color:#98C379;--shiki-dark:#98C379;">    //</span><span style="color:#98C379;--shiki-dark:#98C379;"> 将目录里所有jpg文件打包成</span><span style="color:#98C379;--shiki-dark:#98C379;"> jpg.tar</span><span style="color:#98C379;--shiki-dark:#98C379;"> 后，并且将其用</span><span style="color:#98C379;--shiki-dark:#98C379;"> gzip</span><span style="color:#98C379;--shiki-dark:#98C379;"> 压缩，生成一个</span><span style="color:#98C379;--shiki-dark:#98C379;"> gzip</span><span style="color:#98C379;--shiki-dark:#98C379;"> 压缩过的包，命名为</span><span style="color:#98C379;--shiki-dark:#98C379;"> jpg.tar.gz</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tar</span><span style="color:#98C379;--shiki-dark:#98C379;"> –cjf</span><span style="color:#98C379;--shiki-dark:#98C379;"> jpg.tar.bz2</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> *</span><span style="color:#98C379;--shiki-dark:#98C379;">.jpg</span><span style="color:#98C379;--shiki-dark:#98C379;">   //</span><span style="color:#98C379;--shiki-dark:#98C379;"> 将目录里所有jpg文件打包成</span><span style="color:#98C379;--shiki-dark:#98C379;"> jpg.tar</span><span style="color:#98C379;--shiki-dark:#98C379;"> 后，并且将其用</span><span style="color:#98C379;--shiki-dark:#98C379;"> bzip2</span><span style="color:#98C379;--shiki-dark:#98C379;"> 压缩，生成一个</span><span style="color:#98C379;--shiki-dark:#98C379;"> bzip2</span><span style="color:#98C379;--shiki-dark:#98C379;"> 压缩过的包，命名为jpg.tar.bz2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tar</span><span style="color:#98C379;--shiki-dark:#98C379;"> –cZf</span><span style="color:#98C379;--shiki-dark:#98C379;"> jpg.tar.Z</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> *</span><span style="color:#98C379;--shiki-dark:#98C379;">.jpg</span><span style="color:#98C379;--shiki-dark:#98C379;">     //</span><span style="color:#98C379;--shiki-dark:#98C379;"> 将目录里所有</span><span style="color:#98C379;--shiki-dark:#98C379;"> jpg</span><span style="color:#98C379;--shiki-dark:#98C379;"> 文件打包成</span><span style="color:#98C379;--shiki-dark:#98C379;"> jpg.tar</span><span style="color:#98C379;--shiki-dark:#98C379;"> 后，并且将其用</span><span style="color:#98C379;--shiki-dark:#98C379;"> compress</span><span style="color:#98C379;--shiki-dark:#98C379;"> 压缩，生成一个</span><span style="color:#98C379;--shiki-dark:#98C379;"> umcompress</span><span style="color:#98C379;--shiki-dark:#98C379;"> 压缩过的包，命名为jpg.tar.Z</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rar</span><span style="color:#98C379;--shiki-dark:#98C379;"> a</span><span style="color:#98C379;--shiki-dark:#98C379;"> jpg.rar</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> *</span><span style="color:#98C379;--shiki-dark:#98C379;">.jpg</span><span style="color:#98C379;--shiki-dark:#98C379;">          //</span><span style="color:#98C379;--shiki-dark:#98C379;"> rar格式的压缩，需要先下载</span><span style="color:#98C379;--shiki-dark:#98C379;"> rar</span><span style="color:#98C379;--shiki-dark:#98C379;"> for</span><span style="color:#98C379;--shiki-dark:#98C379;"> linux</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">zip</span><span style="color:#98C379;--shiki-dark:#98C379;"> jpg.zip</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> *</span><span style="color:#98C379;--shiki-dark:#98C379;">.jpg</span><span style="color:#98C379;--shiki-dark:#98C379;">            //</span><span style="color:#98C379;--shiki-dark:#98C379;"> zip格式的压缩，需要先下载</span><span style="color:#98C379;--shiki-dark:#98C379;"> zip</span><span style="color:#98C379;--shiki-dark:#98C379;"> for</span><span style="color:#98C379;--shiki-dark:#98C379;"> linux</span></span></code></pre></div><p><strong>解压</strong></p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tar</span><span style="color:#98C379;--shiki-dark:#98C379;"> –xvf</span><span style="color:#98C379;--shiki-dark:#98C379;"> file.tar</span><span style="color:#98C379;--shiki-dark:#98C379;">         //</span><span style="color:#98C379;--shiki-dark:#98C379;"> 解压</span><span style="color:#98C379;--shiki-dark:#98C379;"> tar</span><span style="color:#98C379;--shiki-dark:#98C379;"> 包</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tar</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -xzvf</span><span style="color:#98C379;--shiki-dark:#98C379;"> file.tar.gz</span><span style="color:#98C379;--shiki-dark:#98C379;">     //</span><span style="color:#98C379;--shiki-dark:#98C379;"> 解压</span><span style="color:#98C379;--shiki-dark:#98C379;"> tar.gz</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tar</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -xjvf</span><span style="color:#98C379;--shiki-dark:#98C379;"> file.tar.bz2</span><span style="color:#98C379;--shiki-dark:#98C379;">    //</span><span style="color:#98C379;--shiki-dark:#98C379;"> 解压</span><span style="color:#98C379;--shiki-dark:#98C379;"> tar.bz2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tar</span><span style="color:#98C379;--shiki-dark:#98C379;"> –xZvf</span><span style="color:#98C379;--shiki-dark:#98C379;"> file.tar.Z</span><span style="color:#98C379;--shiki-dark:#98C379;">      //</span><span style="color:#98C379;--shiki-dark:#98C379;"> 解压</span><span style="color:#98C379;--shiki-dark:#98C379;"> tar.Z</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">unrar</span><span style="color:#98C379;--shiki-dark:#98C379;"> e</span><span style="color:#98C379;--shiki-dark:#98C379;"> file.rar</span><span style="color:#98C379;--shiki-dark:#98C379;">          //</span><span style="color:#98C379;--shiki-dark:#98C379;"> 解压</span><span style="color:#98C379;--shiki-dark:#98C379;"> rar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">unzip</span><span style="color:#98C379;--shiki-dark:#98C379;"> file.zip</span><span style="color:#98C379;--shiki-dark:#98C379;">            //</span><span style="color:#98C379;--shiki-dark:#98C379;"> 解压</span><span style="color:#98C379;--shiki-dark:#98C379;"> zip</span></span></code></pre></div><h2 id="_2-7z-操作" tabindex="-1"><a class="header-anchor" href="#_2-7z-操作"><span>2. 7z 操作</span></a></h2><ol><li><p>安装</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>yum install p7zip</span></span></code></pre></div></li><li><p>压缩</p></li></ol><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>7za a 压缩包.7z 被压缩文件或目录</span></span></code></pre></div><ol start="3"><li><p>解压</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>#将压缩包解压到指定目录，注意：指定目录参数-o后面不要有空格</span></span>
<span class="line"><span>7za x 压缩包.7z -o解压目录</span></span>
<span class="line"><span>#将压缩包解压到当前目录</span></span>
<span class="line"><span>7za x 压缩包.7z</span></span></code></pre></div></li></ol>`,27)]))}const t=a(i,[["render",l],["__file","linux-k-compress.html.vue"]]),k=JSON.parse('{"path":"/posts/Linux/linux-k-compress.html","title":"Linux文件解压","lang":"zh-CN","frontmatter":{"description":"Linux文件解压 1. tar命令详解 1.1 五个独立命令 这五个是独立的命令，压缩解压都要用到其中一个，可以和别的命令连用但只能用其中一个。 -c: 建立压缩档案 -x：解压 -t：查看内容 -r：向压缩归档文件末尾追加文件 -u：更新原压缩包中的文件 1.2 可选命令 下面的参数是根据需要在压缩或解压档案时可选的。 -z：有gzip属性的 -j...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Linux/linux-k-compress.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Linux文件解压"}],["meta",{"property":"og:description","content":"Linux文件解压 1. tar命令详解 1.1 五个独立命令 这五个是独立的命令，压缩解压都要用到其中一个，可以和别的命令连用但只能用其中一个。 -c: 建立压缩档案 -x：解压 -t：查看内容 -r：向压缩归档文件末尾追加文件 -u：更新原压缩包中的文件 1.2 可选命令 下面的参数是根据需要在压缩或解压档案时可选的。 -z：有gzip属性的 -j..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux文件解压\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1.  tar命令详解","slug":"_1-tar命令详解","link":"#_1-tar命令详解","children":[{"level":3,"title":"1.1 五个独立命令","slug":"_1-1-五个独立命令","link":"#_1-1-五个独立命令","children":[]},{"level":3,"title":"1.2 可选命令","slug":"_1-2-可选命令","link":"#_1-2-可选命令","children":[]},{"level":3,"title":"1.3 最后一个必须参数-f","slug":"_1-3-最后一个必须参数-f","link":"#_1-3-最后一个必须参数-f","children":[]}]},{"level":2,"title":"2. 常用解压","slug":"_2-常用解压","link":"#_2-常用解压","children":[]},{"level":2,"title":"2. 7z 操作","slug":"_2-7z-操作","link":"#_2-7z-操作","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.71,"words":513},"filePathRelative":"posts/Linux/linux-k-compress.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1.  tar命令详解</h2>\\n<h3>1.1 五个独立命令</h3>\\n<p>这五个是独立的命令，压缩解压都要<strong>用到其中一个</strong>，<strong>可以和别的命令连用但只能用其中一个</strong>。</p>\\n<p>-c: 建立压缩档案</p>\\n<p>-x：解压</p>\\n<p>-t：查看内容</p>\\n<p>-r：向压缩归档文件末尾追加文件</p>\\n<p>-u：更新原压缩包中的文件</p>\\n<h3>1.2 可选命令</h3>\\n<p>下面的参数是根据需要在压缩或解压档案时可选的。</p>\\n<p>-z：有gzip属性的</p>\\n<p>-j：有bz2属性的</p>","autoDesc":true}');export{t as comp,k as data};
