import{_ as s,c as n,a as e,o as r}from"./app-DP7tPpgD.js";const i={};function t(o,a){return r(),n("div",null,a[0]||(a[0]=[e(`<h1 id="使用zxing生成二维码乱码问题" tabindex="-1"><a class="header-anchor" href="#使用zxing生成二维码乱码问题"><span>使用zxing生成二维码乱码问题</span></a></h1><p>直接上代码</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> QRCodeWriter</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> writer </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> QRCodeWriter</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 解决中文乱码问题</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> contentCharset </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> String</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">content</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getBytes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;UTF-8&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">),</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;ISO-8859-1&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        BitMatrix</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> matrix </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> writer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">encode</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(contentCharset, format, width, height);</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.jianshu.com/p/532832542d91" target="_blank" rel="noopener noreferrer">生成可防止中文乱码的二维码（zxing-android-embeded）</a></p>`,5)]))}const l=s(i,[["render",t],["__file","qr-x-zxing-garbled-code.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/qr/qr-x-zxing-garbled-code.html","title":"使用zxing生成二维码乱码问题","lang":"zh-CN","frontmatter":{"description":"使用zxing生成二维码乱码问题 直接上代码 参考文章 生成可防止中文乱码的二维码（zxing-android-embeded）","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/qr/qr-x-zxing-garbled-code.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"使用zxing生成二维码乱码问题"}],["meta",{"property":"og:description","content":"使用zxing生成二维码乱码问题 直接上代码 参考文章 生成可防止中文乱码的二维码（zxing-android-embeded）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用zxing生成二维码乱码问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.23,"words":70},"filePathRelative":"posts/Java/Java第三方依赖/qr/qr-x-zxing-garbled-code.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>直接上代码</p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> QRCodeWriter</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> writer </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> new</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> QRCodeWriter</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">()</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">        // 解决中文乱码问题</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">        String</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> contentCharset </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> new</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> String</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">(</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">content</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">getBytes</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"UTF-8\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">),</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"ISO-8859-1\\"</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">)</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">        BitMatrix</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> matrix </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> writer</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">encode</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(contentCharset, format, width, height);</span></span></code></pre>\\n</div>","autoDesc":true}');export{l as comp,c as data};
