import{_ as a,c as n,a as i,o as l}from"./app-DQS7qcOs.js";const e={};function o(r,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="vuerouter概念" tabindex="-1"><a class="header-anchor" href="#vuerouter概念"><span>VueRouter概念</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>官方文档介绍如下</p><blockquote><p>Vue Router 是 Vue.js 官方的路由管理器，适合用于构建单页面应用。包含的功能有：</p><ul><li>嵌套的路由/视图表</li><li>模块化的、基于组件的路由配置</li><li>路由参数、查询、通配符</li><li>基于 Vue.js 过渡系统的视图过渡效果</li><li>细粒度的导航控制</li><li>带有自动激活的 CSS class 的链接</li><li>HTML5 历史模式或 hash 模式，在 IE9 中自动降级</li><li>自定义的滚动条行为</li></ul></blockquote><p>简而言之，就是vue的官方路由插件，用于构建单页面应用。</p><h3 id="_1-1-路由的作用" tabindex="-1"><a class="header-anchor" href="#_1-1-路由的作用"><span>1.1 路由的作用</span></a></h3><p>vue的单页面应用是基于路由和组件的，路由用于<strong>设定访问路径，并将路径和组件映射起来</strong>。</p><blockquote><p>传统的页面应用，是用一些超链接来实现页面切换和跳转的。<strong>在vue-router单页面应用中，则是路径之间的切换，也就是组件的切换</strong>。</p></blockquote><h3 id="_1-2-单页应用" tabindex="-1"><a class="header-anchor" href="#_1-2-单页应用"><span>1.2 单页应用</span></a></h3><p>相比起多页应用，单页应用有如下这些好处：</p><ul><li>无需重复加载公共资源</li><li>页面切换速度快，用户体验好</li><li>页面切换可以实现转场动画</li></ul><p>虽然单页应用有着难以SEO、开发难度更加大的缺点，但是相比于传统的多页应用有着更好的用户体验上，目前单页应用已经是Web应用开发的潮流</p><h2 id="_2-基础使用" tabindex="-1"><a class="header-anchor" href="#_2-基础使用"><span>2. 基础使用</span></a></h2><ol><li><p>新建vue应用</p></li><li><p>新建view文件夹，并添加login.vue和home.vue两个文件</p><ol><li><p>login.vue</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">template</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">input</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> v-model</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;name&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;text&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> placeholder</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;请输入用户名&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">input</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> v-model</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;password&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;password&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> placeholder</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;请输入密码&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">button</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> @click</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;login&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;登录&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">button</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">template</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">script</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> default</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  data</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      password</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    };</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  methods</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    login</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 设置登录成功状态</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">      sessionStorage</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setItem</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;login&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 路由跳转</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">      this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">$router</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">push</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;home&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">script</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Home.vue</p><div class="language-vue" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">template</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;首页&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">template</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div></li></ol></li><li><p>新建router/index.js，并添加如下代码</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> Vue</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;vue&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> Router</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;vue-router&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> home</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;../view/home.vue&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> login</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;../view/login.vue&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">use</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Router</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> router</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Router</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  mode</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;history&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 配置对应路径下应该加载的组件</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  routes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      component</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E06C75;--shiki-dark:#E06C75;">login</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;/login&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;login&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      component</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E06C75;--shiki-dark:#E06C75;">login</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;/home&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;home&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      component</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E06C75;--shiki-dark:#E06C75;">home</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 添加路由守卫，在路由跳转之前执行</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">router</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">beforeEach</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">to</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">next</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 如果是要去登录页面，则直接允许</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">to</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">path</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ===</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> to</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">path</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ===</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;/login&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    sessionStorage</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">removeItem</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;login&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    next</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  let</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> isLogin</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> sessionStorage</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getItem</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;login&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 判断用户是否登录</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!</span><span style="color:#E06C75;--shiki-dark:#E06C75;">isLogin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 没登录则跳转登录页</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    next</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({ </span><span style="color:#E06C75;--shiki-dark:#E06C75;">path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;/login&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> });</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">else</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 允许跳转</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    next</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> default</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> router</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在main.js中引入router</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> router</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;./router&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  router</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  render</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">h</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> =&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> h</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">App</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$mount</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;#app&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div></li><li><p>在App.vue中引入Vue-router组件</p><div class="language-vue" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">template</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;app&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">router-view</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">template</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div></li><li><p>当我们在右侧直接输入/home路径访问时，由于没有登录，直接跳转到了登录页面</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20210527191603740.png" alt="image-20210527191603740" tabindex="0" loading="lazy"><figcaption>image-20210527191603740</figcaption></figure></li><li><p>当输入用户名、密码登录后，则跳转到了首页</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20210527191625999.png" alt="image-20210527191625999" tabindex="0" loading="lazy"><figcaption>image-20210527191625999</figcaption></figure></li></ol>`,14)]))}const B=a(e,[["render",o],["__file","vuerouter-overview.html.vue"]]),t=JSON.parse('{"path":"/posts/Web/frontend-vue/vuerouter-overview.html","title":"VueRouter概念","lang":"zh-CN","frontmatter":{"description":"VueRouter概念 1. 简介 官方文档介绍如下 Vue Router 是 Vue.js 官方的路由管理器，适合用于构建单页面应用。包含的功能有： 嵌套的路由/视图表 模块化的、基于组件的路由配置 路由参数、查询、通配符 基于 Vue.js 过渡系统的视图过渡效果 细粒度的导航控制 带有自动激活的 CSS class 的链接 HTML5 历史模式或...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Web/frontend-vue/vuerouter-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"VueRouter概念"}],["meta",{"property":"og:description","content":"VueRouter概念 1. 简介 官方文档介绍如下 Vue Router 是 Vue.js 官方的路由管理器，适合用于构建单页面应用。包含的功能有： 嵌套的路由/视图表 模块化的、基于组件的路由配置 路由参数、查询、通配符 基于 Vue.js 过渡系统的视图过渡效果 细粒度的导航控制 带有自动激活的 CSS class 的链接 HTML5 历史模式或..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20210527191603740.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VueRouter概念\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20210527191603740.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20210527191625999.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 路由的作用","slug":"_1-1-路由的作用","link":"#_1-1-路由的作用","children":[]},{"level":3,"title":"1.2 单页应用","slug":"_1-2-单页应用","link":"#_1-2-单页应用","children":[]}]},{"level":2,"title":"2. 基础使用","slug":"_2-基础使用","link":"#_2-基础使用","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.42,"words":727},"filePathRelative":"posts/Web/frontend-vue/vuerouter-overview.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>官方文档介绍如下</p>\\n<blockquote>\\n<p>Vue Router 是  Vue.js 官方的路由管理器，适合用于构建单页面应用。包含的功能有：</p>\\n<ul>\\n<li>嵌套的路由/视图表</li>\\n<li>模块化的、基于组件的路由配置</li>\\n<li>路由参数、查询、通配符</li>\\n<li>基于 Vue.js 过渡系统的视图过渡效果</li>\\n<li>细粒度的导航控制</li>\\n<li>带有自动激活的 CSS class 的链接</li>\\n<li>HTML5 历史模式或 hash 模式，在 IE9 中自动降级</li>\\n<li>自定义的滚动条行为</li>\\n</ul>\\n</blockquote>","autoDesc":true}');export{B as comp,t as data};
