import{_ as a,c as e,a as n,o as i}from"./app-mWs04Xnh.js";const l={};function r(t,s){return i(),e("div",null,s[0]||(s[0]=[n(`<h1 id="vue插件" tabindex="-1"><a class="header-anchor" href="#vue插件"><span>Vue插件</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>Vue 插件主要用来添加<strong>全局功能</strong>，功能指的是什么？只是一个全局方法吗？肯定不是。</p><ol><li>添加全局方法或者 property。如：<a href="https://github.com/karol-f/vue-custom-element" target="_blank" rel="noopener noreferrer">vue-custom-element</a></li><li>添加全局资源：指令/过滤器/过渡等。如 <a href="https://github.com/vuejs/vue-touch" target="_blank" rel="noopener noreferrer">vue-touch</a></li><li>通过全局混入来添加一些组件选项。如 <a href="https://github.com/vuejs/vue-router" target="_blank" rel="noopener noreferrer">vue-router</a></li><li>添加 Vue 实例方法，通过把它们添加到 <code>Vue.prototype</code> 上实现。</li><li>一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 <a href="https://github.com/vuejs/vue-router" target="_blank" rel="noopener noreferrer">vue-router</a></li></ol><h2 id="_2-使用插件" tabindex="-1"><a class="header-anchor" href="#_2-使用插件"><span>2. 使用插件</span></a></h2><p>通过全局方法 <code>Vue.use()</code> 使用插件。它需要在你调用 <code>new Vue()</code> 启动应用之前完成：</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 调用 \`MyPlugin.install(Vue)\`</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">use</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">MyPlugin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // ...组件选项</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><p>也可以传入一个可选的选项对象：</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">use</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">MyPlugin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">someOption</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> })</span></span></code></pre></div><p><code>Vue.use</code> 会自动阻止多次注册相同插件，届时即使多次调用也只会注册一次该插件。</p><h2 id="_3-开发插件" tabindex="-1"><a class="header-anchor" href="#_3-开发插件"><span>3. 开发插件</span></a></h2><p>Vue.js 的插件应该暴露一个 <code>install</code> 方法。这个方法的第一个参数是 <code>Vue</code> 构造器，第二个参数是一个可选的选项对象：</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">MyPlugin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">install</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> function</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">options</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 1. 添加全局方法或 property</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">  Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">myGlobalMethod</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> function</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 逻辑...</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 2. 添加全局资源</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">  Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">directive</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;my-directive&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    bind</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">el</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">binding</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">vnode</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">oldVnode</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 逻辑...</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    ...</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 3. 注入组件选项</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">  Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mixin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    created</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#C678DD;--shiki-dark:#C678DD;">function</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 逻辑...</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    ...</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 4. 添加实例方法</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">  Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">prototype</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$myMethod</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> function</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">methodOptions</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 逻辑...</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const p=a(l,[["render",r],["__file","vue-plugin.html.vue"]]),c=JSON.parse('{"path":"/posts/Web/frontend-vue/vue-plugin.html","title":"Vue插件","lang":"zh-CN","frontmatter":{"description":"Vue插件 1. 简介 Vue 插件主要用来添加全局功能，功能指的是什么？只是一个全局方法吗？肯定不是。 添加全局方法或者 property。如：vue-custom-element 添加全局资源：指令/过滤器/过渡等。如 vue-touch 通过全局混入来添加一些组件选项。如 vue-router 添加 Vue 实例方法，通过把它们添加到 Vue.p...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-vue/vue-plugin.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Vue插件"}],["meta",{"property":"og:description","content":"Vue插件 1. 简介 Vue 插件主要用来添加全局功能，功能指的是什么？只是一个全局方法吗？肯定不是。 添加全局方法或者 property。如：vue-custom-element 添加全局资源：指令/过滤器/过渡等。如 vue-touch 通过全局混入来添加一些组件选项。如 vue-router 添加 Vue 实例方法，通过把它们添加到 Vue.p..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 使用插件","slug":"_2-使用插件","link":"#_2-使用插件","children":[]},{"level":2,"title":"3. 开发插件","slug":"_3-开发插件","link":"#_3-开发插件","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.26,"words":377},"filePathRelative":"posts/Web/frontend-vue/vue-plugin.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>Vue 插件主要用来添加<strong>全局功能</strong>，功能指的是什么？只是一个全局方法吗？肯定不是。</p>\\n<ol>\\n<li>添加全局方法或者 property。如：<a href=\\"https://github.com/karol-f/vue-custom-element\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">vue-custom-element</a></li>\\n<li>添加全局资源：指令/过滤器/过渡等。如 <a href=\\"https://github.com/vuejs/vue-touch\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">vue-touch</a></li>\\n<li>通过全局混入来添加一些组件选项。如 <a href=\\"https://github.com/vuejs/vue-router\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">vue-router</a></li>\\n<li>添加 Vue 实例方法，通过把它们添加到 <code>Vue.prototype</code> 上实现。</li>\\n<li>一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 <a href=\\"https://github.com/vuejs/vue-router\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">vue-router</a></li>\\n</ol>","autoDesc":true}');export{p as comp,c as data};
