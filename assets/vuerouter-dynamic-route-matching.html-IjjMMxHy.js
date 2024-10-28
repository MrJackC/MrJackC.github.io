import{_ as a,c as e,a as n,o as r}from"./app-BOcQBfH9.js";const o={};function i(l,s){return r(),e("div",null,s[0]||(s[0]=[n(`<h1 id="vue-router动态路由匹配" tabindex="-1"><a class="header-anchor" href="#vue-router动态路由匹配"><span>Vue Router动态路由匹配</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><blockquote><p>我们经常需要把某种模式匹配到的所有路由，<strong>全都映射到同个组件</strong></p></blockquote><p>n 个url地址，映射到通过组件</p><h2 id="_2-动态路径参数-冒号开头" tabindex="-1"><a class="header-anchor" href="#_2-动态路径参数-冒号开头"><span>2. 动态路径参数（冒号开头）</span></a></h2><p>我们有一个 <code>User</code> 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 <code>vue-router</code> 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果：</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> User</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  template</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;&lt;div&gt;User&lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> router</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> VueRouter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  routes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 动态路径参数 以冒号开头</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;/user/:id&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">component</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E06C75;--shiki-dark:#E06C75;">User</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><p>现在呢，像 <code>/user/foo</code> 和 <code>/user/bar</code> 都将映射到相同的路由。</p><h3 id="_2-1-获取路径参数-route-params" tabindex="-1"><a class="header-anchor" href="#_2-1-获取路径参数-route-params"><span>2.1 获取路径参数（$route.params）</span></a></h3><p>一个“路径参数”使用冒号 <code>:</code> 标记。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>/user/:id</span></span></code></pre></div><p>当匹配到一个路由时，参数值会被设置到 <code>this.$route.params</code>，可以在每个组件内使用。于是，我们可以更新 <code>User</code> 的模板，输出当前用户的 ID：</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> User</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  template</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;&lt;div&gt;User {{ $route.params.id }}&lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="_2-2-获取url查询参数-route-query" tabindex="-1"><a class="header-anchor" href="#_2-2-获取url查询参数-route-query"><span>2.2 获取URL查询参数($route.query)</span></a></h3><p>例如</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>/user?id=zsz</span></span></code></pre></div><p>获取参数</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>$route.query.id</span></span></code></pre></div><h3 id="_2-3-获取hash值-route-hash" tabindex="-1"><a class="header-anchor" href="#_2-3-获取hash值-route-hash"><span>2.3 获取hash值（$route.hash）</span></a></h3><p>用得偏少</p><h2 id="_3-响应-监听-路由参数的变化" tabindex="-1"><a class="header-anchor" href="#_3-响应-监听-路由参数的变化"><span>3. 响应（监听）路由参数的变化</span></a></h2><p>当使用路由参数时，例如从 <code>/user/foo</code> 导航到 <code>/user/bar</code>，<strong>原来的组件实例会被复用</strong>。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。</p><p><strong>不过，这也意味着组件的生命周期钩子不会再被调用！！！</strong>。</p><h3 id="_3-1-方案1-watch-监测变化" tabindex="-1"><a class="header-anchor" href="#_3-1-方案1-watch-监测变化"><span>3.1 方案1：watch (监测变化）</span></a></h3><p>复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) <code>$route</code> 对象</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> User</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  template</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;...&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  watch</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    $route</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">to</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 对路由变化作出响应...</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="_3-2-方案2-beforerouteupdate-导航守卫" tabindex="-1"><a class="header-anchor" href="#_3-2-方案2-beforerouteupdate-导航守卫"><span>3.2 方案2：<code>beforeRouteUpdate</code> 导航守卫</span></a></h3><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> User</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  template</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;...&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  beforeRouteUpdate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">to</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">next</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // react to route changes...</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // don&#39;t forget to call next()</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="_4-匹配任意路径" tabindex="-1"><a class="header-anchor" href="#_4-匹配任意路径"><span>4. 匹配任意路径</span></a></h2><p>常规参数只会匹配被 <code>/</code> 分隔的 URL 片段中的字符。如果想匹配<strong>任意路径</strong>，我们可以使用通配符 (<code>*</code>)：</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 会匹配所有路径</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;*&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 会匹配以 \`/user-\` 开头的任意路径</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;/user-*&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>使用<em>通配符</em>路由时，请确保路由的顺序是正确的，也就是说含有<em>通配符</em>的路由应该放在最后。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96" target="_blank" rel="noopener noreferrer">Vue官方文档</a></p>`,34)]))}const p=a(o,[["render",i],["__file","vuerouter-dynamic-route-matching.html.vue"]]),c=JSON.parse(`{"path":"/posts/Web/frontend-vue/vuerouter-dynamic-route-matching.html","title":"Vue Router动态路由匹配","lang":"zh-CN","frontmatter":{"description":"Vue Router动态路由匹配 1. 背景 我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件 n 个url地址，映射到通过组件 2. 动态路径参数（冒号开头） 我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用“动态路径参数”(dynamic segm...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Web/frontend-vue/vuerouter-dynamic-route-matching.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Vue Router动态路由匹配"}],["meta",{"property":"og:description","content":"Vue Router动态路由匹配 1. 背景 我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件 n 个url地址，映射到通过组件 2. 动态路径参数（冒号开头） 我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用“动态路径参数”(dynamic segm..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue Router动态路由匹配\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 动态路径参数（冒号开头）","slug":"_2-动态路径参数-冒号开头","link":"#_2-动态路径参数-冒号开头","children":[{"level":3,"title":"2.1 获取路径参数（$route.params）","slug":"_2-1-获取路径参数-route-params","link":"#_2-1-获取路径参数-route-params","children":[]},{"level":3,"title":"2.2 获取URL查询参数($route.query)","slug":"_2-2-获取url查询参数-route-query","link":"#_2-2-获取url查询参数-route-query","children":[]},{"level":3,"title":"2.3 获取hash值（$route.hash）","slug":"_2-3-获取hash值-route-hash","link":"#_2-3-获取hash值-route-hash","children":[]}]},{"level":2,"title":"3. 响应（监听）路由参数的变化","slug":"_3-响应-监听-路由参数的变化","link":"#_3-响应-监听-路由参数的变化","children":[{"level":3,"title":"3.1 方案1：watch (监测变化）","slug":"_3-1-方案1-watch-监测变化","link":"#_3-1-方案1-watch-监测变化","children":[]},{"level":3,"title":"3.2 方案2：beforeRouteUpdate 导航守卫","slug":"_3-2-方案2-beforerouteupdate-导航守卫","link":"#_3-2-方案2-beforerouteupdate-导航守卫","children":[]}]},{"level":2,"title":"4. 匹配任意路径","slug":"_4-匹配任意路径","link":"#_4-匹配任意路径","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.03,"words":609},"filePathRelative":"posts/Web/frontend-vue/vuerouter-dynamic-route-matching.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<blockquote>\\n<p>我们经常需要把某种模式匹配到的所有路由，<strong>全都映射到同个组件</strong></p>\\n</blockquote>\\n<p>n 个url地址，映射到通过组件</p>\\n<h2>2. 动态路径参数（冒号开头）</h2>\\n<p>我们有一个 <code>User</code> 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 <code>vue-router</code> 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果：</p>\\n<div class=\\"language-js\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">const</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> User</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">  template</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'&lt;div&gt;User&lt;/div&gt;'</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">const</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> router</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> new</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> VueRouter</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">({</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">  routes</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: [</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    // 动态路径参数 以冒号开头</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    { </span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">path</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'/user/:id'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, </span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">component</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">User</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> }</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  ]</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">})</span></span></code></pre>\\n</div>","autoDesc":true}`);export{p as comp,c as data};
