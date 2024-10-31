import{_ as a,c as t,a as n,o as r}from"./app-mWs04Xnh.js";const s={};function i(l,e){return r(),t("div",null,e[0]||(e[0]=[n(`<h1 id="linux命令行学习-tldr" tabindex="-1"><a class="header-anchor" href="#linux命令行学习-tldr"><span>Linux命令行学习-tldr</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>对于很多使用终端的Linux和Mac用户，使用Terminal最难的就是要记住众多的Linux命令了。比如：<code>ssh</code>，<code>curl</code>，<code>grep</code>等，经常会记不住参数的顺序。这个时候通常在使用的时候通过man阅读长长的文档，从中对比一个个参数，这样费时又费力。</p><p>今天要介绍的一个好用的工具叫<code>tldr</code>，tldr全称Too long, Don’t read，翻译成中文就是[太长不读]。<code>tldr</code>根据二八原则将命令的常用场景给出示例，让人一看就懂。</p><h2 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装"><span>2. 安装</span></a></h2><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">yum</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -y</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> npm</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -g</span><span style="color:#98C379;--shiki-dark:#98C379;"> tldr（有可能报错，报错则再执行一次）</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tldr</span><span style="color:#98C379;--shiki-dark:#98C379;"> ssh</span><span style="color:#98C379;--shiki-dark:#98C379;"> //</span><span style="color:#98C379;--shiki-dark:#98C379;"> 查询ssh命令</span></span></code></pre></div><h3 id="_2-1-tldr-运行报错" tabindex="-1"><a class="header-anchor" href="#_2-1-tldr-运行报错"><span>2.1 tldr 运行报错</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231104770.png" alt="image-20210402112659028" tabindex="0" loading="lazy"><figcaption>image-20210402112659028</figcaption></figure><p>如果你第一次安装node 版本可能只有6.* ，则执行时会报错，可以参考升级<a href="https://segmentfault.com/a/1190000015302680" target="_blank" rel="noopener noreferrer">在centos7安装nodejs并升级nodejs到最新版本</a></p><h2 id="_3-使用" tabindex="-1"><a class="header-anchor" href="#_3-使用"><span>3. 使用</span></a></h2><p>使用tldr 查看tar命令</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>tldr tar</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231104816.png" alt="image-20210402113016559" tabindex="0" loading="lazy"><figcaption>image-20210402113016559</figcaption></figure><p>使用man查看tar命令(又臭又长)</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>man tar</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231104848.png" alt="image-20210402113051584" tabindex="0" loading="lazy"><figcaption>image-20210402113051584</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.hi-linux.com/posts/16098.html" target="_blank" rel="noopener noreferrer">Linux命令行学习神器 TLDR</a></p>`,18)]))}const d=a(s,[["render",i],["__file","linux-z-tldr.html.vue"]]),c=JSON.parse('{"path":"/posts/Linux/linux-z-tldr.html","title":"Linux命令行学习-tldr","lang":"zh-CN","frontmatter":{"description":"Linux命令行学习-tldr 1. 背景 对于很多使用终端的Linux和Mac用户，使用Terminal最难的就是要记住众多的Linux命令了。比如：ssh，curl，grep等，经常会记不住参数的顺序。这个时候通常在使用的时候通过man阅读长长的文档，从中对比一个个参数，这样费时又费力。 今天要介绍的一个好用的工具叫tldr，tldr全称Too l...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Linux/linux-z-tldr.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Linux命令行学习-tldr"}],["meta",{"property":"og:description","content":"Linux命令行学习-tldr 1. 背景 对于很多使用终端的Linux和Mac用户，使用Terminal最难的就是要记住众多的Linux命令了。比如：ssh，curl，grep等，经常会记不住参数的顺序。这个时候通常在使用的时候通过man阅读长长的文档，从中对比一个个参数，这样费时又费力。 今天要介绍的一个好用的工具叫tldr，tldr全称Too l..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231104770.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux命令行学习-tldr\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231104770.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231104816.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231104848.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 安装","slug":"_2-安装","link":"#_2-安装","children":[{"level":3,"title":"2.1 tldr 运行报错","slug":"_2-1-tldr-运行报错","link":"#_2-1-tldr-运行报错","children":[]}]},{"level":2,"title":"3. 使用","slug":"_3-使用","link":"#_3-使用","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.98,"words":295},"filePathRelative":"posts/Linux/linux-z-tldr.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>对于很多使用终端的Linux和Mac用户，使用Terminal最难的就是要记住众多的Linux命令了。比如：<code>ssh</code>，<code>curl</code>，<code>grep</code>等，经常会记不住参数的顺序。这个时候通常在使用的时候通过man阅读长长的文档，从中对比一个个参数，这样费时又费力。</p>\\n<p>今天要介绍的一个好用的工具叫<code>tldr</code>，tldr全称Too long, Don’t read，翻译成中文就是[太长不读]。<code>tldr</code>根据二八原则将命令的常用场景给出示例，让人一看就懂。</p>","autoDesc":true}');export{d as comp,c as data};
