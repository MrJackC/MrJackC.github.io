import{_ as s,c as e,a as n,o as t}from"./app-CpAF2rca.js";const c={};function i(r,a){return t(),e("div",null,a[0]||(a[0]=[n(`<h1 id="wc统计命令" tabindex="-1"><a class="header-anchor" href="#wc统计命令"><span>wc统计命令</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1 简介</span></a></h2><p>统计文件里面有多少单词，多少行，多少字符。</p><h2 id="_2-wc语法" tabindex="-1"><a class="header-anchor" href="#_2-wc语法"><span>2 wc语法</span></a></h2><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span> wc [-lwm]</span></span></code></pre></div><p>选项与参数：<br> -l ：仅列出行；<br> -w ：仅列出多少字(英文单字)；<br> -m ：多少字符；</p><h2 id="_3-wc使用" tabindex="-1"><a class="header-anchor" href="#_3-wc使用"><span>3 wc使用</span></a></h2><div class="language-cmd" data-ext="cmd" data-title="cmd"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">wc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> /</span><span style="color:#E06C75;--shiki-dark:#E06C75;">etc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">passwd</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">25</span><span style="color:#D19A66;--shiki-dark:#D19A66;">   35</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1095</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> /</span><span style="color:#E06C75;--shiki-dark:#E06C75;">etc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">passwd</span></span></code></pre></div><p>258是行数，462是单词数，6919是字节数</p><p>wc的命令比较简单使用，每个参数使用如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>#wc -l /etc/passwd   #统计行数，在对记录数时，很常用</span></span>
<span class="line"><span>/etc/passwd       #表示系统有40个账户</span></span>
<span class="line"><span>#wc -w /etc/passwd  #统计单词出现次数</span></span>
<span class="line"><span>/etc/passwd</span></span>
<span class="line"><span>#wc -m /etc/passwd  #统计文件的字节数</span></span></code></pre></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2>`,12)]))}const o=s(c,[["render",i],["__file","linux-k-wc.html.vue"]]),l=JSON.parse('{"path":"/posts/Linux/linux-k-wc.html","title":"wc统计命令","lang":"zh-CN","frontmatter":{"description":"wc统计命令 1 简介 统计文件里面有多少单词，多少行，多少字符。 2 wc语法 选项与参数： -l ：仅列出行； -w ：仅列出多少字(英文单字)； -m ：多少字符； 3 wc使用 258是行数，462是单词数，6919是字节数 wc的命令比较简单使用，每个参数使用如下：","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Linux/linux-k-wc.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"wc统计命令"}],["meta",{"property":"og:description","content":"wc统计命令 1 简介 统计文件里面有多少单词，多少行，多少字符。 2 wc语法 选项与参数： -l ：仅列出行； -w ：仅列出多少字(英文单字)； -m ：多少字符； 3 wc使用 258是行数，462是单词数，6919是字节数 wc的命令比较简单使用，每个参数使用如下："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"wc统计命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2 wc语法","slug":"_2-wc语法","link":"#_2-wc语法","children":[]},{"level":2,"title":"3 wc使用","slug":"_3-wc使用","link":"#_3-wc使用","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.5,"words":150},"filePathRelative":"posts/Linux/linux-k-wc.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1 简介</h2>\\n<p>统计文件里面有多少单词，多少行，多少字符。</p>\\n<h2>2 wc语法</h2>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span> wc [-lwm]</span></span></code></pre>\\n</div>","autoDesc":true}');export{o as comp,l as data};
