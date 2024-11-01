import{_ as a,c as t,a as n,o as r}from"./app-DP7tPpgD.js";const s={};function i(o,e){return r(),t("div",null,e[0]||(e[0]=[n('<h1 id="linux查看哪些进程占用cpu内存资源多" tabindex="-1"><a class="header-anchor" href="#linux查看哪些进程占用cpu内存资源多"><span>Linux查看哪些进程占用CPU内存资源多</span></a></h1><h2 id="_1-占用cpu资源最多的10个进程" tabindex="-1"><a class="header-anchor" href="#_1-占用cpu资源最多的10个进程"><span>1. 占用CPU资源最多的10个进程</span></a></h2><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>ps aux|head -1;ps aux|grep -v PID|sort -rn -k +3|head</span></span></code></pre></div><h2 id="_2-占用内存资源最多的10个进程" tabindex="-1"><a class="header-anchor" href="#_2-占用内存资源最多的10个进程"><span>2. 占用内存资源最多的10个进程</span></a></h2><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>ps aux|head -1;ps aux|grep -v PID|sort -rn -k +4|head</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/h330531987/article/details/74356347" target="_blank" rel="noopener noreferrer">Linux下如何查看哪些进程占用的CPU内存资源最多</a></p>',7)]))}const c=a(s,[["render",i],["__file","linux-y-cpu-top.html.vue"]]),l=JSON.parse('{"path":"/posts/Linux/linux-y-cpu-top.html","title":"Linux查看哪些进程占用CPU内存资源多","lang":"zh-CN","frontmatter":{"description":"Linux查看哪些进程占用CPU内存资源多 1. 占用CPU资源最多的10个进程 2. 占用内存资源最多的10个进程 参考文章 Linux下如何查看哪些进程占用的CPU内存资源最多","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Linux/linux-y-cpu-top.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Linux查看哪些进程占用CPU内存资源多"}],["meta",{"property":"og:description","content":"Linux查看哪些进程占用CPU内存资源多 1. 占用CPU资源最多的10个进程 2. 占用内存资源最多的10个进程 参考文章 Linux下如何查看哪些进程占用的CPU内存资源最多"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux查看哪些进程占用CPU内存资源多\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 占用CPU资源最多的10个进程","slug":"_1-占用cpu资源最多的10个进程","link":"#_1-占用cpu资源最多的10个进程","children":[]},{"level":2,"title":"2. 占用内存资源最多的10个进程","slug":"_2-占用内存资源最多的10个进程","link":"#_2-占用内存资源最多的10个进程","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.32,"words":96},"filePathRelative":"posts/Linux/linux-y-cpu-top.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 占用CPU资源最多的10个进程</h2>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>ps aux|head -1;ps aux|grep -v PID|sort -rn -k +3|head</span></span></code></pre>\\n</div>","autoDesc":true}');export{c as comp,l as data};
