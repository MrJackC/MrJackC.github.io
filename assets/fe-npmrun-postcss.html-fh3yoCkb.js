import{_ as s,c as a,a as n,o as r}from"./app-DQS7qcOs.js";const t={};function o(i,e){return r(),a("div",null,e[0]||(e[0]=[n(`<h1 id="npm-运行项目时-error-postcss-received-undefined-instead-of-css-string" tabindex="-1"><a class="header-anchor" href="#npm-运行项目时-error-postcss-received-undefined-instead-of-css-string"><span>npm 运行项目时 Error: PostCSS received undefined instead of CSS string</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>新拉下来的项目，启动项目 npm run dev 的时候就报错：</p><div class="language-javascript" data-ext="javascript" data-title="javascript"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">Error</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E06C75;--shiki-dark:#E06C75;">PostCSS</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> received</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> undefined</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> instead</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> of</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> CSS</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> string</span></span></code></pre></div><h2 id="_2-原因" tabindex="-1"><a class="header-anchor" href="#_2-原因"><span>2. 原因</span></a></h2><p>我的node的版本影响了node-sass的应用。</p><h2 id="_3-解决办法" tabindex="-1"><a class="header-anchor" href="#_3-解决办法"><span>3. 解决办法</span></a></h2><p>卸载当前版本，安装最新版本的node-sass</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>npm uninstall node-sass</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm install node-sass --save-dev</span></span></code></pre></div><p>删除依赖，重新安装又依赖</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>rimraf node_modules</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm install</span></span></code></pre></div><p>然后再重新启动项目就成功了</p><h1 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h1><p><a href="https://blog.csdn.net/Sunday97/article/details/116492447" target="_blank" rel="noopener noreferrer">Error: PostCSS received undefined instead of CSS string</a></p>`,14)]))}const d=s(t,[["render",o],["__file","fe-npmrun-postcss.html.vue"]]),c=JSON.parse('{"path":"/posts/Web/frontend-base/fe-npmrun-postcss.html","title":"npm 运行项目时 Error: PostCSS received undefined instead of CSS string","lang":"zh-CN","frontmatter":{"description":"npm 运行项目时 Error: PostCSS received undefined instead of CSS string 1. 背景 新拉下来的项目，启动项目 npm run dev 的时候就报错： 2. 原因 我的node的版本影响了node-sass的应用。 3. 解决办法 卸载当前版本，安装最新版本的node-sass 删除依赖，重新安...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Web/frontend-base/fe-npmrun-postcss.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"npm 运行项目时 Error: PostCSS received undefined instead of CSS string"}],["meta",{"property":"og:description","content":"npm 运行项目时 Error: PostCSS received undefined instead of CSS string 1. 背景 新拉下来的项目，启动项目 npm run dev 的时候就报错： 2. 原因 我的node的版本影响了node-sass的应用。 3. 解决办法 卸载当前版本，安装最新版本的node-sass 删除依赖，重新安..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"npm 运行项目时 Error: PostCSS received undefined instead of CSS string\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1.  背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 原因","slug":"_2-原因","link":"#_2-原因","children":[]},{"level":2,"title":"3. 解决办法","slug":"_3-解决办法","link":"#_3-解决办法","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.45,"words":135},"filePathRelative":"posts/Web/frontend-base/fe-npmrun-postcss.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1.  背景</h2>\\n<p>新拉下来的项目，启动项目 npm run dev 的时候就报错：</p>\\n<div class=\\"language-javascript\\" data-ext=\\"javascript\\" data-title=\\"javascript\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">Error</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">PostCSS</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> received</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> undefined</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> instead</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> of</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> CSS</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> string</span></span></code></pre>\\n</div>","autoDesc":true}');export{d as comp,c as data};
