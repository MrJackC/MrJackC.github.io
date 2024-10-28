import{_ as s,c as n,a as e,o as r}from"./app-W9QyTiMU.js";const i={};function l(o,a){return r(),n("div",null,a[0]||(a[0]=[e(`<h1 id="npm源管理" tabindex="-1"><a class="header-anchor" href="#npm源管理"><span>npm源管理</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><h2 id="_2-设置源" tabindex="-1"><a class="header-anchor" href="#_2-设置源"><span>2. 设置源</span></a></h2><h3 id="_2-1-查看源" tabindex="-1"><a class="header-anchor" href="#_2-1-查看源"><span>2.1 查看源</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">//查看源，可以看到设置过的所有的源</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> config</span><span style="color:#98C379;--shiki-dark:#98C379;"> get</span><span style="color:#98C379;--shiki-dark:#98C379;"> registry</span></span></code></pre></div><h3 id="_2-2-永久设置源" tabindex="-1"><a class="header-anchor" href="#_2-2-永久设置源"><span>2.2 永久设置源</span></a></h3><p>源可以是多个，<strong>但只有一个是生效的</strong>。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">//设置淘宝源</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> config</span><span style="color:#98C379;--shiki-dark:#98C379;"> set</span><span style="color:#98C379;--shiki-dark:#98C379;"> registry</span><span style="color:#98C379;--shiki-dark:#98C379;"> https://registry.npm.taobao.org</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">//设置公司的源</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> config</span><span style="color:#98C379;--shiki-dark:#98C379;"> set</span><span style="color:#98C379;--shiki-dark:#98C379;"> registry</span><span style="color:#98C379;--shiki-dark:#98C379;"> http://127.0.0.1:4873</span></span></code></pre></div><h3 id="_2-3-临时改变源" tabindex="-1"><a class="header-anchor" href="#_2-3-临时改变源"><span>2.3 临时改变源</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">//本次从淘宝仓库源下载</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --registry=https://registry.npm.taobao.org</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span></span></code></pre></div><h2 id="_3-使用nrm管理源" tabindex="-1"><a class="header-anchor" href="#_3-使用nrm管理源"><span>3. 使用nrm管理源</span></a></h2><p><code>nrm </code>是一个 NPM 源管理器，可以使用 <code>nrm</code> 在不同的源切换。</p><h3 id="_3-1-安装nrm" tabindex="-1"><a class="header-anchor" href="#_3-1-安装nrm"><span>3.1 安装nrm</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -g</span><span style="color:#98C379;--shiki-dark:#98C379;"> nrm</span></span></code></pre></div><h3 id="_3-2-列出可选的源" tabindex="-1"><a class="header-anchor" href="#_3-2-列出可选的源"><span>3.2 列出可选的源</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">nrm</span><span style="color:#98C379;--shiki-dark:#98C379;"> ls</span></span></code></pre></div><p>结果：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>nrm ls            </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  npm ---------- https://registry.npmjs.org/</span></span>
<span class="line"><span>  yarn --------- https://registry.yarnpkg.com/</span></span>
<span class="line"><span>  tencent ------ https://mirrors.cloud.tencent.com/npm/</span></span>
<span class="line"><span>  cnpm --------- https://r.cnpmjs.org/</span></span>
<span class="line"><span>  taobao ------- https://registry.npmmirror.com/</span></span>
<span class="line"><span>  npmMirror ---- https://skimdb.npmjs.com/registry/</span></span>
<span class="line"><span>* ali ---------- https://registry.npm.taobao.org/</span></span></code></pre></div><p>当前的源，前面会有一个*</p><h3 id="_3-3-查看当前源" tabindex="-1"><a class="header-anchor" href="#_3-3-查看当前源"><span>3.3 查看当前源</span></a></h3><p>显示当前使用的镜像源名称。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>nrm current</span></span></code></pre></div><h3 id="_3-4-切换源" tabindex="-1"><a class="header-anchor" href="#_3-4-切换源"><span>3.4 切换源</span></a></h3><p>切换到taobao：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">nrm</span><span style="color:#98C379;--shiki-dark:#98C379;"> use</span><span style="color:#98C379;--shiki-dark:#98C379;"> taobao</span></span></code></pre></div><h3 id="_3-4-增加源" tabindex="-1"><a class="header-anchor" href="#_3-4-增加源"><span>3.4 增加源</span></a></h3><p>可以增加定制的源，特别适用于添加企业内部的私有源。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">nrm</span><span style="color:#98C379;--shiki-dark:#98C379;"> add</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">registr</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">y&gt; &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">ur</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">l&gt; [home]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 例如</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">nrm</span><span style="color:#98C379;--shiki-dark:#98C379;"> add</span><span style="color:#98C379;--shiki-dark:#98C379;"> company</span><span style="color:#98C379;--shiki-dark:#98C379;"> http://npm.company.com/</span></span></code></pre></div><h3 id="_3-5-删除源" tabindex="-1"><a class="header-anchor" href="#_3-5-删除源"><span>3.5 删除源</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">nrm</span><span style="color:#98C379;--shiki-dark:#98C379;"> del</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">registr</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">y&gt;</span></span></code></pre></div><h3 id="_3-6-测试速度" tabindex="-1"><a class="header-anchor" href="#_3-6-测试速度"><span>3.6 测试速度</span></a></h3><p>还可以通过 <code>nrm test </code>测试相应源的响应时间。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">nrm</span><span style="color:#98C379;--shiki-dark:#98C379;"> test</span><span style="color:#98C379;--shiki-dark:#98C379;"> npm</span></span></code></pre></div><p>结果：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> ----</span><span style="color:#98C379;--shiki-dark:#98C379;"> 1328ms</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://segmentfault.com/a/1190000038997036" target="_blank" rel="noopener noreferrer">npm源管理</a></p>`,37)]))}const t=s(i,[["render",l],["__file","npm-manage.html.vue"]]),c=JSON.parse('{"path":"/posts/Web/frontend-base/npm-manage.html","title":"npm源管理","lang":"zh-CN","frontmatter":{"description":"npm源管理 1. 简介 2. 设置源 2.1 查看源 2.2 永久设置源 源可以是多个，但只有一个是生效的。 2.3 临时改变源 3. 使用nrm管理源 nrm 是一个 NPM 源管理器，可以使用 nrm 在不同的源切换。 3.1 安装nrm 3.2 列出可选的源 结果： 当前的源，前面会有一个* 3.3 查看当前源 显示当前使用的镜像源名称。 3....","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Web/frontend-base/npm-manage.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"npm源管理"}],["meta",{"property":"og:description","content":"npm源管理 1. 简介 2. 设置源 2.1 查看源 2.2 永久设置源 源可以是多个，但只有一个是生效的。 2.3 临时改变源 3. 使用nrm管理源 nrm 是一个 NPM 源管理器，可以使用 nrm 在不同的源切换。 3.1 安装nrm 3.2 列出可选的源 结果： 当前的源，前面会有一个* 3.3 查看当前源 显示当前使用的镜像源名称。 3...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"npm源管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 设置源","slug":"_2-设置源","link":"#_2-设置源","children":[{"level":3,"title":"2.1 查看源","slug":"_2-1-查看源","link":"#_2-1-查看源","children":[]},{"level":3,"title":"2.2  永久设置源","slug":"_2-2-永久设置源","link":"#_2-2-永久设置源","children":[]},{"level":3,"title":"2.3 临时改变源","slug":"_2-3-临时改变源","link":"#_2-3-临时改变源","children":[]}]},{"level":2,"title":"3. 使用nrm管理源","slug":"_3-使用nrm管理源","link":"#_3-使用nrm管理源","children":[{"level":3,"title":"3.1 安装nrm","slug":"_3-1-安装nrm","link":"#_3-1-安装nrm","children":[]},{"level":3,"title":"3.2 列出可选的源","slug":"_3-2-列出可选的源","link":"#_3-2-列出可选的源","children":[]},{"level":3,"title":"3.3 查看当前源","slug":"_3-3-查看当前源","link":"#_3-3-查看当前源","children":[]},{"level":3,"title":"3.4  切换源","slug":"_3-4-切换源","link":"#_3-4-切换源","children":[]},{"level":3,"title":"3.4 增加源","slug":"_3-4-增加源","link":"#_3-4-增加源","children":[]},{"level":3,"title":"3.5 删除源","slug":"_3-5-删除源","link":"#_3-5-删除源","children":[]},{"level":3,"title":"3.6 测试速度","slug":"_3-6-测试速度","link":"#_3-6-测试速度","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.03,"words":310},"filePathRelative":"posts/Web/frontend-base/npm-manage.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<h2>2. 设置源</h2>\\n<h3>2.1 查看源</h3>\\n<div class=\\"language-bash\\" data-ext=\\"bash\\" data-title=\\"bash\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">//查看源，可以看到设置过的所有的源</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">npm</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> config</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> get</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> registry</span></span></code></pre>\\n</div>","autoDesc":true}');export{t as comp,c as data};
