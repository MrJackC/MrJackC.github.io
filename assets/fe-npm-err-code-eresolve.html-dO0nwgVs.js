import{_ as n,c as a,a as p,o as s}from"./app-W9QyTiMU.js";const t={};function l(o,e){return s(),a("div",null,e[0]||(e[0]=[p(`<h1 id="npm-install时遇到的问题-npm-err-code-eresolve" tabindex="-1"><a class="header-anchor" href="#npm-install时遇到的问题-npm-err-code-eresolve"><span>npm install时遇到的问题 npm ERR! code ERESOLVE</span></a></h1><h2 id="_1-问题描述" tabindex="-1"><a class="header-anchor" href="#_1-问题描述"><span>1. 问题描述</span></a></h2><p>在使用npm install时遇到的问题</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>npm ERR! code ERESOLVE</span></span>
<span class="line"><span>npm ERR! ERESOLVE unable to resolve dependency tree</span></span>
<span class="line"><span>npm ERR!</span></span>
<span class="line"><span>npm ERR! While resolving: ruoyi@3.4.0</span></span>
<span class="line"><span>npm ERR! Found: webpack@5.35.0</span></span>
<span class="line"><span>npm ERR! node_modules/webpack</span></span>
<span class="line"><span>npm ERR!   peer webpack@&quot;^4.0.0 || ^5.0.0&quot; from html-webpack-plugin@4.5.2</span></span></code></pre></div><h2 id="_2-原因" tabindex="-1"><a class="header-anchor" href="#_2-原因"><span>2. 原因</span></a></h2><p><strong>因为npm7.x对某些事情比npm6.x更严格</strong></p><h2 id="_3-解决" tabindex="-1"><a class="header-anchor" href="#_3-解决"><span>3. 解决</span></a></h2><p>通常，最简单的解决方法是将--legacy-peer-deps标志传递给npm(e.g.，npm i --legacy-peer-deps），或者使用npm@6。</p><blockquote><p>提示：使用npm@6不需要卸载npm@7。使用npx指定npm的版本。例如：npx -p npm@6 npm i --legacy-peer-deps。</p></blockquote><p>如果这不能立即起作用，也许可以先删除node_modules和package-lock.json。它们将被重新创建。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/qq_22832075/article/details/115999117" target="_blank" rel="noopener noreferrer">在使用npm install时遇到的问题 npm ERR! code ERESOLVE</a></p>`,12)]))}const i=n(t,[["render",l],["__file","fe-npm-err-code-eresolve.html.vue"]]),c=JSON.parse('{"path":"/posts/Web/frontend-problem/fe-npm-err-code-eresolve.html","title":"npm install时遇到的问题 npm ERR! code ERESOLVE","lang":"zh-CN","frontmatter":{"description":"npm install时遇到的问题 npm ERR! code ERESOLVE 1. 问题描述 在使用npm install时遇到的问题 2. 原因 因为npm7.x对某些事情比npm6.x更严格 3. 解决 通常，最简单的解决方法是将--legacy-peer-deps标志传递给npm(e.g.，npm i --legacy-peer-deps），...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Web/frontend-problem/fe-npm-err-code-eresolve.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"npm install时遇到的问题 npm ERR! code ERESOLVE"}],["meta",{"property":"og:description","content":"npm install时遇到的问题 npm ERR! code ERESOLVE 1. 问题描述 在使用npm install时遇到的问题 2. 原因 因为npm7.x对某些事情比npm6.x更严格 3. 解决 通常，最简单的解决方法是将--legacy-peer-deps标志传递给npm(e.g.，npm i --legacy-peer-deps），..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"npm install时遇到的问题 npm ERR! code ERESOLVE\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 问题描述","slug":"_1-问题描述","link":"#_1-问题描述","children":[]},{"level":2,"title":"2. 原因","slug":"_2-原因","link":"#_2-原因","children":[]},{"level":2,"title":"3. 解决","slug":"_3-解决","link":"#_3-解决","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.65,"words":195},"filePathRelative":"posts/Web/frontend-problem/fe-npm-err-code-eresolve.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 问题描述</h2>\\n<p>在使用npm install时遇到的问题</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>npm ERR! code ERESOLVE</span></span>\\n<span class=\\"line\\"><span>npm ERR! ERESOLVE unable to resolve dependency tree</span></span>\\n<span class=\\"line\\"><span>npm ERR!</span></span>\\n<span class=\\"line\\"><span>npm ERR! While resolving: ruoyi@3.4.0</span></span>\\n<span class=\\"line\\"><span>npm ERR! Found: webpack@5.35.0</span></span>\\n<span class=\\"line\\"><span>npm ERR! node_modules/webpack</span></span>\\n<span class=\\"line\\"><span>npm ERR!   peer webpack@\\"^4.0.0 || ^5.0.0\\" from html-webpack-plugin@4.5.2</span></span></code></pre>\\n</div>","autoDesc":true}');export{i as comp,c as data};
