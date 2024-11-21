import{_ as a,c as e,a as n,o as i}from"./app-CpAF2rca.js";const r={};function p(l,s){return i(),e("div",null,s[0]||(s[0]=[n(`<h1 id="vue实战-预览pdf" tabindex="-1"><a class="header-anchor" href="#vue实战-预览pdf"><span>vue实战 - 预览pdf</span></a></h1><h2 id="_0-前言" tabindex="-1"><a class="header-anchor" href="#_0-前言"><span>0. 前言</span></a></h2><ul><li>方式1：火狐</li><li>方式2：vue-pdf</li></ul><h2 id="_1-火狐集成使用" tabindex="-1"><a class="header-anchor" href="#_1-火狐集成使用"><span>1. 火狐集成使用</span></a></h2><ol><li><p>将pdf文件夹放在public 目录下</p><p>链接:<a href="https://pan.baidu.com/s/1RTSb0jGWQdZ3xk4TX9FgaA" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1RTSb0jGWQdZ3xk4TX9FgaA</a> 密码:g9c5</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230919970.png" alt="image-20210515161010336" tabindex="0" loading="lazy"><figcaption>image-20210515161010336</figcaption></figure></li><li><p>将base64 设置到sessionStorage, 打开新窗口展示</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$post</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;getBase64PdfStr&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">params</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">then</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">res</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">res</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">code</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 200</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">          let</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> base64PdfStr</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> res</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">data</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">          sessionStorage</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setItem</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;_imgUrl&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">base64PdfStr</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">          window</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">location</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">href</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;/pdf/web/viewer.html&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      });</span></span></code></pre></div></li></ol><h2 id="_2-方式二-vue-pdf" tabindex="-1"><a class="header-anchor" href="#_2-方式二-vue-pdf"><span>2. 方式二：vue-pdf</span></a></h2><ul><li><p><a href="http://www.ycmbcd.com/blog/html/16261748155391.html" target="_blank" rel="noopener noreferrer">好文：Vue使用vue-pdf.js进行PDF分页、滚动预览放大缩小缩放及文件提取码下载加密下载的方法</a></p><p>有两种翻页方式：一：滚动翻页、二：点击翻页</p></li></ul><p>​</p>`,8)]))}const t=a(r,[["render",p],["__file","fe-lib-vue-preview-pdf.html.vue"]]),B=JSON.parse('{"path":"/posts/Web/frontend-lib/fe-lib-vue-preview-pdf.html","title":"vue实战 - 预览pdf","lang":"zh-CN","frontmatter":{"order":510,"category":["Vue"],"description":"vue实战 - 预览pdf 0. 前言 方式1：火狐 方式2：vue-pdf 1. 火狐集成使用 将pdf文件夹放在public 目录下 链接:https://pan.baidu.com/s/1RTSb0jGWQdZ3xk4TX9FgaA 密码:g9c5 image-20210515161010336image-20210515161010336 将b...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-lib/fe-lib-vue-preview-pdf.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"vue实战 - 预览pdf"}],["meta",{"property":"og:description","content":"vue实战 - 预览pdf 0. 前言 方式1：火狐 方式2：vue-pdf 1. 火狐集成使用 将pdf文件夹放在public 目录下 链接:https://pan.baidu.com/s/1RTSb0jGWQdZ3xk4TX9FgaA 密码:g9c5 image-20210515161010336image-20210515161010336 将b..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230919970.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue实战 - 预览pdf\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230919970.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"0. 前言","slug":"_0-前言","link":"#_0-前言","children":[]},{"level":2,"title":"1. 火狐集成使用","slug":"_1-火狐集成使用","link":"#_1-火狐集成使用","children":[]},{"level":2,"title":"2. 方式二：vue-pdf","slug":"_2-方式二-vue-pdf","link":"#_2-方式二-vue-pdf","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.49,"words":147},"filePathRelative":"posts/Web/frontend-lib/fe-lib-vue-preview-pdf.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>0. 前言</h2>\\n<ul>\\n<li>方式1：火狐</li>\\n<li>方式2：vue-pdf</li>\\n</ul>\\n<h2>1. 火狐集成使用</h2>\\n<ol>\\n<li>\\n<p>将pdf文件夹放在public 目录下</p>\\n<p>链接:<a href=\\"https://pan.baidu.com/s/1RTSb0jGWQdZ3xk4TX9FgaA\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://pan.baidu.com/s/1RTSb0jGWQdZ3xk4TX9FgaA</a>  密码:g9c5</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230919970.png\\" alt=\\"image-20210515161010336\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20210515161010336</figcaption></figure>\\n</li>\\n<li>\\n<p>将base64 设置到sessionStorage, 打开新窗口展示</p>\\n<div class=\\"language-js\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">this</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">$post</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"getBase64PdfStr\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, </span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">params</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">).</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">then</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">((</span><span style=\\"color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">res</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">=&gt;</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">        if</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">res</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">code</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> ==</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> 200</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">          let</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> base64PdfStr</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> res</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">data</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">          sessionStorage</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">setItem</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"_imgUrl\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, </span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">base64PdfStr</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">          window</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">location</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">href</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"/pdf/web/viewer.html\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        }</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">      });</span></span></code></pre>\\n</div></li>\\n</ol>","autoDesc":true}');export{t as comp,B as data};
