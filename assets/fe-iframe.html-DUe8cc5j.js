import{_ as s,c as e,a as n,o as r}from"./app-JRvFIbSa.js";const i={};function t(o,a){return r(),e("div",null,a[0]||(a[0]=[n(`<h1 id="iframe" tabindex="-1"><a class="header-anchor" href="#iframe"><span>iframe</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1.简介</span></a></h2><p>在页面嵌套iframe标签，指定src就可以展示一个外部的url</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">iframe</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> src</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;www.baidu.com&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">iframe</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>iframe 标签功能强大，但也是能耗最高的一个原生，安全性也差。在使用时要权衡使用</p><h2 id="_2-基础使用" tabindex="-1"><a class="header-anchor" href="#_2-基础使用"><span>2. 基础使用</span></a></h2><p>基础使用</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">iframe</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> src</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;www.baidu.com&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">iframe</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>常用属性</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>1.frameborder:是否显示边框，1(yes),0(no)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.height:框架作为一个普通元素的高度，建议在使用css设置。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.width:框架作为一个普通元素的宽度，建议使用css设置。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4.name:框架的名称，window.frames[name]时专用的属性。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5.scrolling:框架的是否滚动。yes,no,auto。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>6.src：内框架的地址，可以使页面地址，也可以是图片的地址。</span></span></code></pre></div><h2 id="_2-重新加载iframe" tabindex="-1"><a class="header-anchor" href="#_2-重新加载iframe"><span>2. 重新加载iframe</span></a></h2><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">let</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> pdfIframe</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">$refs</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">pdfIframe</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">pdfIframe</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">contentWindow</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">location</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">reload</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://segmentfault.com/a/1190000004502619" target="_blank" rel="noopener noreferrer">iframe,我们来谈一谈</a></p>`,14)]))}const p=s(i,[["render",t],["__file","fe-iframe.html.vue"]]),c=JSON.parse('{"path":"/posts/Web/frontend-base/fe-iframe.html","title":"iframe","lang":"zh-CN","frontmatter":{"description":"iframe 1.简介 在页面嵌套iframe标签，指定src就可以展示一个外部的url iframe 标签功能强大，但也是能耗最高的一个原生，安全性也差。在使用时要权衡使用 2. 基础使用 基础使用 常用属性 2. 重新加载iframe 参考文章 iframe,我们来谈一谈","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-base/fe-iframe.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"iframe"}],["meta",{"property":"og:description","content":"iframe 1.简介 在页面嵌套iframe标签，指定src就可以展示一个外部的url iframe 标签功能强大，但也是能耗最高的一个原生，安全性也差。在使用时要权衡使用 2. 基础使用 基础使用 常用属性 2. 重新加载iframe 参考文章 iframe,我们来谈一谈"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"iframe\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1.简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 基础使用","slug":"_2-基础使用","link":"#_2-基础使用","children":[]},{"level":2,"title":"2. 重新加载iframe","slug":"_2-重新加载iframe","link":"#_2-重新加载iframe","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.7,"words":210},"filePathRelative":"posts/Web/frontend-base/fe-iframe.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1.简介</h2>\\n<p>在页面嵌套iframe标签，指定src就可以展示一个外部的url</p>\\n<div class=\\"language-html\\" data-ext=\\"html\\" data-title=\\"html\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">iframe</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> src</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"www.baidu.com\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">iframe</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span></code></pre>\\n</div>","autoDesc":true}');export{p as comp,c as data};
