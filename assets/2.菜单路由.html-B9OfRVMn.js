import{_ as s,c as a,a as e,o as i}from"./app-JRvFIbSa.js";const l={};function p(d,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="菜单路由" tabindex="-1"><a class="header-anchor" href="#菜单路由"><span>菜单路由</span></a></h1><p>前端项目基于 vue-element-plus-admin 实现，它的 路由和侧边栏 (opens new window)是组织起一个后台应用的关键骨架。</p><p>侧边栏和路由是绑定在一起的，所以你只有在 @/router/index.js (opens new window)下面配置对应的路由，侧边栏就能动态的生成了，大大减轻了手动重复编辑侧边栏的工作量。</p><p>当然，这样就需要在配置路由的时候，遵循一些约定的规则。</p><h2 id="路由配置" tabindex="-1"><a class="header-anchor" href="#路由配置"><span>路由配置</span></a></h2><p>首先，我们了解一下本项目配置路由时，提供了哪些配置项：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* redirect: noredirect        当设置 noredirect 的时候该路由在面包屑导航中不可被点击</span></span>
<span class="line"><span>* name:&#39;router-name&#39;          设定路由的名字，一定要填写不然使用&lt;keep-alive&gt;时会出现各种问题</span></span>
<span class="line"><span>* meta : {</span></span>
<span class="line"><span>    hidden: true              当设置 true 的时候该路由不会再侧边栏出现 如404，login等页面(默认 false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    alwaysShow: true          当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式，</span></span>
<span class="line"><span>                              只有一个时，会将那个子路由当做根路由显示在侧边栏，</span></span>
<span class="line"><span>                              若你想不管路由下面的 children 声明的个数都显示你的根路由，</span></span>
<span class="line"><span>                              你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，</span></span>
<span class="line"><span>                              一直显示根路由(默认 false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    title: &#39;title&#39;            设置该路由在侧边栏和面包屑中展示的名字</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    icon: &#39;svg-name&#39;          设置该路由的图标</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    noCache: true             如果设置为true，则不会被 &lt;keep-alive&gt; 缓存(默认 false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    breadcrumb: false         如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    affix: true               如果设置为true，则会一直固定在tag项中(默认 false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    noTagsView: true          如果设置为true，则不会出现在tag中(默认 false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    activeMenu: &#39;/dashboard&#39;  显示高亮的路由路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    followAuth: &#39;/dashboard&#39;  跟随哪个路由进行权限过滤</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    canTo: true               设置为true即使hidden为true，也依然可以进行路由跳转(默认 false)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>**/</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-普通示例" tabindex="-1"><a class="header-anchor" href="#_1-1-普通示例"><span>1.1 普通示例</span></a></h3><blockquote><p>注意事项：</p><ul><li>整个项目所有路由 name 不能重复</li><li>所有的多级路由最终都会转成二级路由，所以不能内嵌子路由</li><li>除了 <strong>layout</strong> 对应的 <strong>path</strong> 前面需要加 <strong>/</strong>，其余子路由都不要以 <strong>/</strong> 开头</li></ul></blockquote><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  path: &#39;/level&#39;,</span></span>
<span class="line"><span>  component: Layout,</span></span>
<span class="line"><span>  redirect: &#39;/level/menu1/menu1-1/menu1-1-1&#39;,</span></span>
<span class="line"><span>  name: &#39;Level&#39;,</span></span>
<span class="line"><span>  meta: {</span></span>
<span class="line"><span>    title: t(&#39;router.level&#39;),</span></span>
<span class="line"><span>    icon: &#39;carbon:skill-level-advanced&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  children: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      path: &#39;menu1&#39;,</span></span>
<span class="line"><span>      name: &#39;Menu1&#39;,</span></span>
<span class="line"><span>      component: getParentLayout(),</span></span>
<span class="line"><span>      redirect: &#39;/level/menu1/menu1-1/menu1-1-1&#39;,</span></span>
<span class="line"><span>      meta: {</span></span>
<span class="line"><span>        title: t(&#39;router.menu1&#39;)</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      children: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          path: &#39;menu1-1&#39;,</span></span>
<span class="line"><span>          name: &#39;Menu11&#39;,</span></span>
<span class="line"><span>          component: getParentLayout(),</span></span>
<span class="line"><span>          redirect: &#39;/level/menu1/menu1-1/menu1-1-1&#39;,</span></span>
<span class="line"><span>          meta: {</span></span>
<span class="line"><span>            title: t(&#39;router.menu11&#39;),</span></span>
<span class="line"><span>            alwaysShow: true</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          children: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>              path: &#39;menu1-1-1&#39;,</span></span>
<span class="line"><span>              name: &#39;Menu111&#39;,</span></span>
<span class="line"><span>              component: () =&gt; import(&#39;@/views/Level/Menu111.vue&#39;),</span></span>
<span class="line"><span>              meta: {</span></span>
<span class="line"><span>                title: t(&#39;router.menu111&#39;)</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          ]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          path: &#39;menu1-2&#39;,</span></span>
<span class="line"><span>          name: &#39;Menu12&#39;,</span></span>
<span class="line"><span>          component: () =&gt; import(&#39;@/views/Level/Menu12.vue&#39;),</span></span>
<span class="line"><span>          meta: {</span></span>
<span class="line"><span>            title: t(&#39;router.menu12&#39;)</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      path: &#39;menu2&#39;,</span></span>
<span class="line"><span>      name: &#39;Menu2Demo&#39;,</span></span>
<span class="line"><span>      component: () =&gt; import(&#39;@/views/Level/Menu2.vue&#39;),</span></span>
<span class="line"><span>      meta: {</span></span>
<span class="line"><span>        title: t(&#39;router.menu2&#39;)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-外链示例" tabindex="-1"><a class="header-anchor" href="#_1-2-外链示例"><span>1.2 外链示例</span></a></h3><p>只需要将 path 设置为需要跳转的 HTTP 地址即可。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  path: &#39;/external-link&#39;,</span></span>
<span class="line"><span>  component: Layout,</span></span>
<span class="line"><span>  meta: {</span></span>
<span class="line"><span>    name: &#39;ExternalLink&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  children: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      path: &#39;https://www.iocoder.cn&#39;,</span></span>
<span class="line"><span>      meta: { name: &#39;Link&#39;, title: &#39;芋道源码&#39; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><a href="https://doc.iocoder.cn/vue3/route/" target="_blank" rel="noopener noreferrer">路由模块在线文档</a></p>`,14)]))}const r=s(l,[["render",p],["__file","2.菜单路由.html.vue"]]),t=JSON.parse(`{"path":"/posts/Java/Ruoyi-Vue-Pro/12.%E5%89%8D%E7%AB%AF%E6%89%8B%E5%86%8C%20Vue%203/2.%E8%8F%9C%E5%8D%95%E8%B7%AF%E7%94%B1.html","title":"菜单路由","lang":"zh-CN","frontmatter":{"description":"菜单路由 前端项目基于 vue-element-plus-admin 实现，它的 路由和侧边栏 (opens new window)是组织起一个后台应用的关键骨架。 侧边栏和路由是绑定在一起的，所以你只有在 @/router/index.js (opens new window)下面配置对应的路由，侧边栏就能动态的生成了，大大减轻了手动重复编辑侧边栏的...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/12.%E5%89%8D%E7%AB%AF%E6%89%8B%E5%86%8C%20Vue%203/2.%E8%8F%9C%E5%8D%95%E8%B7%AF%E7%94%B1.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"菜单路由"}],["meta",{"property":"og:description","content":"菜单路由 前端项目基于 vue-element-plus-admin 实现，它的 路由和侧边栏 (opens new window)是组织起一个后台应用的关键骨架。 侧边栏和路由是绑定在一起的，所以你只有在 @/router/index.js (opens new window)下面配置对应的路由，侧边栏就能动态的生成了，大大减轻了手动重复编辑侧边栏的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T08:42:43.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-21T08:42:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"菜单路由\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-21T08:42:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"路由配置","slug":"路由配置","link":"#路由配置","children":[{"level":3,"title":"1.1 普通示例","slug":"_1-1-普通示例","link":"#_1-1-普通示例","children":[]},{"level":3,"title":"1.2 外链示例","slug":"_1-2-外链示例","link":"#_1-2-外链示例","children":[]}]}],"git":{"createdTime":1732174913000,"updatedTime":1732178563000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":2}]},"readingTime":{"minutes":2.44,"words":731},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/12.前端手册 Vue 3/2.菜单路由.md","localizedDate":"2024年11月21日","excerpt":"\\n<p>前端项目基于 vue-element-plus-admin 实现，它的 路由和侧边栏 (opens new window)是组织起一个后台应用的关键骨架。</p>\\n<p>侧边栏和路由是绑定在一起的，所以你只有在 @/router/index.js (opens new window)下面配置对应的路由，侧边栏就能动态的生成了，大大减轻了手动重复编辑侧边栏的工作量。</p>\\n<p>当然，这样就需要在配置路由的时候，遵循一些约定的规则。</p>\\n<h2>路由配置</h2>\\n<p>首先，我们了解一下本项目配置路由时，提供了哪些配置项：</p>\\n<div class=\\"language- line-numbers-mode\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>/**</span></span>\\n<span class=\\"line\\"><span>* redirect: noredirect        当设置 noredirect 的时候该路由在面包屑导航中不可被点击</span></span>\\n<span class=\\"line\\"><span>* name:'router-name'          设定路由的名字，一定要填写不然使用&lt;keep-alive&gt;时会出现各种问题</span></span>\\n<span class=\\"line\\"><span>* meta : {</span></span>\\n<span class=\\"line\\"><span>    hidden: true              当设置 true 的时候该路由不会再侧边栏出现 如404，login等页面(默认 false)</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    alwaysShow: true          当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式，</span></span>\\n<span class=\\"line\\"><span>                              只有一个时，会将那个子路由当做根路由显示在侧边栏，</span></span>\\n<span class=\\"line\\"><span>                              若你想不管路由下面的 children 声明的个数都显示你的根路由，</span></span>\\n<span class=\\"line\\"><span>                              你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，</span></span>\\n<span class=\\"line\\"><span>                              一直显示根路由(默认 false)</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    title: 'title'            设置该路由在侧边栏和面包屑中展示的名字</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    icon: 'svg-name'          设置该路由的图标</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    noCache: true             如果设置为true，则不会被 &lt;keep-alive&gt; 缓存(默认 false)</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    breadcrumb: false         如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    affix: true               如果设置为true，则会一直固定在tag项中(默认 false)</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    noTagsView: true          如果设置为true，则不会出现在tag中(默认 false)</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    activeMenu: '/dashboard'  显示高亮的路由路径</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    followAuth: '/dashboard'  跟随哪个路由进行权限过滤</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    canTo: true               设置为true即使hidden为true，也依然可以进行路由跳转(默认 false)</span></span>\\n<span class=\\"line\\"><span>  }</span></span>\\n<span class=\\"line\\"><span>**/</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{r as comp,t as data};
