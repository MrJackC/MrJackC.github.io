import{_ as a,c as n,a as e,o as l}from"./app-BOcQBfH9.js";const i={};function p(r,s){return l(),n("div",null,s[0]||(s[0]=[e(`<h1 id="布局垂直居中" tabindex="-1"><a class="header-anchor" href="#布局垂直居中"><span>布局垂直居中</span></a></h1><h2 id="_1-实现方式" tabindex="-1"><a class="header-anchor" href="#_1-实现方式"><span>1. 实现方式</span></a></h2><h3 id="_1-1-方式一-不知道父子高度" tabindex="-1"><a class="header-anchor" href="#_1-1-方式一-不知道父子高度"><span>1.1 方式一：不知道父子高度</span></a></h3><p>不知道自己高度和父容器高度的情况下, 利用绝对定位只需要以下三行：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">parentElement</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        position:</span><span style="color:#D19A66;--shiki-dark:#D19A66;">relative</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> childElement</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        position: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">absolute</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        top: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">50</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        transform: </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">translateY</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">-50</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> }</span></span></code></pre></div><h3 id="_1-2-方式二-父高度知道-子只有一个元素" tabindex="-1"><a class="header-anchor" href="#_1-2-方式二-父高度知道-子只有一个元素"><span>1.2 方式二：父高度知道，子只有一个元素</span></a></h3><p>若父容器下只有一个元素，且父元素设置了高度，则只需要使用相对定位即可</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    parentElement</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        height:xxx;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">    .childElement</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      position: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">relative</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      top: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">50</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      transform: </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">translateY</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">-50</span><span style="color:#E06C75;--shiki-dark:#E06C75;">%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span></code></pre></div><h3 id="_1-3-方式三-flex-布局" tabindex="-1"><a class="header-anchor" href="#_1-3-方式三-flex-布局"><span>1.3 方式三：Flex 布局：</span></a></h3><p>不考虑兼容老式浏览器的话，用Flex布局简单直观一劳永逸：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">parentElement</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    display:</span><span style="color:#D19A66;--shiki-dark:#D19A66;">flex</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/*Flex布局*/</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    display: -webkit-flex; </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* Safari */</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    align-items:</span><span style="color:#D19A66;--shiki-dark:#D19A66;">center</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/*指定垂直居中*/</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p>[<a href="https://www.zhihu.com/question/20543196" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/question/20543196</a>](用 CSS 实现元素垂直居中，有哪些好的方案？)</p>`,13)]))}const o=a(i,[["render",p],["__file","layout-vertical-center.html.vue"]]),B=JSON.parse('{"path":"/posts/Web/frontend-layout/layout-vertical-center.html","title":"布局垂直居中","lang":"zh-CN","frontmatter":{"created":"2024-05-13 20:48","updated":"2024-10-13 12:34","description":"布局垂直居中 1. 实现方式 1.1 方式一：不知道父子高度 不知道自己高度和父容器高度的情况下, 利用绝对定位只需要以下三行： 1.2 方式二：父高度知道，子只有一个元素 若父容器下只有一个元素，且父元素设置了高度，则只需要使用相对定位即可 1.3 方式三：Flex 布局： 不考虑兼容老式浏览器的话，用Flex布局简单直观一劳永逸： 参考文章 [ht...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Web/frontend-layout/layout-vertical-center.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"布局垂直居中"}],["meta",{"property":"og:description","content":"布局垂直居中 1. 实现方式 1.1 方式一：不知道父子高度 不知道自己高度和父容器高度的情况下, 利用绝对定位只需要以下三行： 1.2 方式二：父高度知道，子只有一个元素 若父容器下只有一个元素，且父元素设置了高度，则只需要使用相对定位即可 1.3 方式三：Flex 布局： 不考虑兼容老式浏览器的话，用Flex布局简单直观一劳永逸： 参考文章 [ht..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"布局垂直居中\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1.  实现方式","slug":"_1-实现方式","link":"#_1-实现方式","children":[{"level":3,"title":"1.1 方式一：不知道父子高度","slug":"_1-1-方式一-不知道父子高度","link":"#_1-1-方式一-不知道父子高度","children":[]},{"level":3,"title":"1.2 方式二：父高度知道，子只有一个元素","slug":"_1-2-方式二-父高度知道-子只有一个元素","link":"#_1-2-方式二-父高度知道-子只有一个元素","children":[]},{"level":3,"title":"1.3 方式三：Flex 布局：","slug":"_1-3-方式三-flex-布局","link":"#_1-3-方式三-flex-布局","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.72,"words":216},"filePathRelative":"posts/Web/frontend-layout/layout-vertical-center.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1.  实现方式</h2>\\n<h3>1.1 方式一：不知道父子高度</h3>\\n<p>不知道自己高度和父容器高度的情况下, 利用绝对定位只需要以下三行：</p>\\n<div class=\\"language-css\\" data-ext=\\"css\\" data-title=\\"css\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">parentElement</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        position:</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">relative</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> childElement</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        position: </span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">absolute</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        top: </span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">50</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">%</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        transform: </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">translateY</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">-50</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">%</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> }</span></span></code></pre>\\n</div>","autoDesc":true}');export{o as comp,B as data};
