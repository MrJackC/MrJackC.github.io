import{_ as a,c as n,a as i,o as e}from"./app-tJW29Kmg.js";const l={};function o(r,s){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="vue实战-vuerouter-history模式" tabindex="-1"><a class="header-anchor" href="#vue实战-vuerouter-history模式"><span>Vue实战 - VueRouter History模式</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p><code>vue-router</code> 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，<strong>于是当 URL 改变时，页面不会重新加载</strong>。</p><p>如果不想要很丑的 hash，我们可以用路由的 <strong>history 模式</strong>，这种模式充分利用 <code>history.pushState</code> API 来完成 URL 跳转而无须重新加载页面。</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> router</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> VueRouter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  mode</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;history&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  routes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [...]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><p>当你使用 history 模式时，URL 就像正常的 url，例如 <code>http://yoursite.com/user/id</code></p><h3 id="_1-1-未正确配置导致404的问题" tabindex="-1"><a class="header-anchor" href="#_1-1-未正确配置导致404的问题"><span>1.1 未正确配置导致404的问题</span></a></h3><p>history 虽好，但是未正确配置，会导致页面404。</p><p><strong>解决方案</strong>：</p><p>在访问到404的时候，需要定位到首页，也就是index.html页</p><h2 id="_2-前端配置" tabindex="-1"><a class="header-anchor" href="#_2-前端配置"><span>2. 前端配置</span></a></h2><h3 id="_2-1-放域名根目录下" tabindex="-1"><a class="header-anchor" href="#_2-1-放域名根目录下"><span>2.1 放域名根目录下</span></a></h3><p>域名根目录下，如：<a href="http://oursite.com" target="_blank" rel="noopener noreferrer">http://oursite.com</a></p><ol><li><p>路由配置：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">export </span><span style="color:#C678DD;--shiki-dark:#C678DD;">default</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Router</span><span style="color:#E06C75;--shiki-dark:#E06C75;">({</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  mode</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;history&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 去掉url中的#</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  scrollBehavior</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> () </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ({ y</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> })</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  routes</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> constantRoutes</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">})</span></span></code></pre></div></li><li><p>配置 vue.config.js 文件</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">module</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">exports</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 部署生产环境和开发环境下的URL。应用被部署在一个子路径,需指向相对路径或特定路径</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  publicPath</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;/&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  assetsDir</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;static&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span></code></pre></div></li></ol><h3 id="_2-2-放域名二级目录下" tabindex="-1"><a class="header-anchor" href="#_2-2-放域名二级目录下"><span>2.2 放域名二级目录下</span></a></h3><p>域名二级目录下。如：<a href="http://oursite.com/myapp" target="_blank" rel="noopener noreferrer">http://oursite.com/myapp</a></p><ol><li><p>路由配置：</p><p>除了mode 还需要配置 base、base 这里是要写死的目录（所以还不能动态设置、nginx 需要与前端保持一致）</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> default</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Router</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  mode</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;history&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 去掉url中的#</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 应用的基路径。例如，如果整个单页应用服务在 /myapp/ 下，然后 base 就应该设为 &quot;/myapp/&quot;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  base</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;/myapp/&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 新增base</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  scrollBehavior</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: () </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ({ </span><span style="color:#E06C75;--shiki-dark:#E06C75;">y</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> }),</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  routes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E06C75;--shiki-dark:#E06C75;">constantRoutes</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div></li><li><p>配置 vue.config.js 文件</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">module</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">exports</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 部署生产环境和开发环境下的URL。应用被部署在一个子路径,需指向相对路径或特定路径</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  publicPath</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;./&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//指向相对路径</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  //publicPath: &quot;/myapp/&quot;, // 固定路径</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  assetsDir</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;static&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 不需要修改也不影响</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  ...</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div></li></ol><h2 id="_3-后端配置" tabindex="-1"><a class="header-anchor" href="#_3-后端配置"><span>3. 后端配置</span></a></h2><h3 id="_3-1-nginx-配置" tabindex="-1"><a class="header-anchor" href="#_3-1-nginx-配置"><span>3.1 nginx 配置</span></a></h3><h4 id="_3-1-1-放域名根目录下" tabindex="-1"><a class="header-anchor" href="#_3-1-1-放域名根目录下"><span>3.1.1 放域名根目录下</span></a></h4><div class="language-nginx" data-ext="nginx" data-title="nginx"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	server</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        listen </span><span style="color:#D19A66;--shiki-dark:#D19A66;">         9802</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        location</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> / {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            root </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  /home/myapp;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            index </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> index.html index.htm;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">						try_files </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">$</span><span style="color:#E06C75;--shiki-dark:#E06C75;">uri</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> $</span><span style="color:#E06C75;--shiki-dark:#E06C75;">uri</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/ /index.html;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span></code></pre></div><h4 id="_3-1-2-放域名二级目录下" tabindex="-1"><a class="header-anchor" href="#_3-1-2-放域名二级目录下"><span>3.1.2 放域名二级目录下</span></a></h4><div class="language-nginx" data-ext="nginx" data-title="nginx"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	server</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        listen </span><span style="color:#D19A66;--shiki-dark:#D19A66;">         19801</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        location</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> /myapp {    </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            alias </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  /home/myapp;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            index </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> index.html index.htm;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            try_files </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">$</span><span style="color:#E06C75;--shiki-dark:#E06C75;">uri</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> $</span><span style="color:#E06C75;--shiki-dark:#E06C75;">uri</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/ /myapp/index.html;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span></code></pre></div><h3 id="_3-2-tomcat" tabindex="-1"><a class="header-anchor" href="#_3-2-tomcat"><span>3.2 tomcat</span></a></h3><h4 id="_3-2-1-放域名根目录下" tabindex="-1"><a class="header-anchor" href="#_3-2-1-放域名根目录下"><span>3.2.1 放域名根目录下</span></a></h4><p>tomcat基本很少直接放在根目录下的情况，不做介绍</p><h4 id="_3-2-2-放域名二级目录下" tabindex="-1"><a class="header-anchor" href="#_3-2-2-放域名二级目录下"><span>3.2.2 放域名二级目录下</span></a></h4><ol><li><p>前端在public目录下新增：WEB-INF/web.xml文件</p><p>在前端再打包输出的文件中，还需要新增WEB-INF文件夹，并包含一个web.xml文件</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;?</span><span style="color:#E06C75;--shiki-dark:#E06C75;">xml</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;1.0&#39;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> encoding</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;UTF-8&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">?&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">web-app</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> xmlns:xsi</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">         xmlns</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;http://xmlns.jcp.org/xml/ns/javaee&quot;</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">         xsi:schemaLocation</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;http://xmlns.jcp.org/xml/ns/javaee/web-app_2_5.xsd&quot;</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">         id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;scplatform&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;2.5&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">display-name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;/&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">display-name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">error-page</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">error-code</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;404&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">error-code</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">location</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;/index.html&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">location</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">error-page</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">web-app</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131207353.png" alt="image-20210529154237920" tabindex="0" loading="lazy"><figcaption>image-20210529154237920</figcaption></figure></li><li><p>打包之后dist(打包目录)，下会新增WEB-INF文件夹</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131207391.png" alt="image-20210529154331815" tabindex="0" loading="lazy"><figcaption>image-20210529154331815</figcaption></figure></li><li><p>将文件放到tomcat的webapps目录下即可</p></li></ol><h2 id="_4-可能遇到的问题" tabindex="-1"><a class="header-anchor" href="#_4-可能遇到的问题"><span>4. 可能遇到的问题</span></a></h2><h3 id="_4-1-初次进入可以-刷新页面后404-页面地址变成根目录" tabindex="-1"><a class="header-anchor" href="#_4-1-初次进入可以-刷新页面后404-页面地址变成根目录"><span>4.1 初次进入可以，刷新页面后404(页面地址变成根目录)</span></a></h3><p>初次进入可以，刷新页面后404，页面路径由原来的二级目录<a href="http://oursite.com/myapp%EF%BC%8C%E5%8F%98%E6%88%90%E6%A0%B9%E7%9B%AE%E5%BD%95http://oursite.com%E3%80%82%E6%89%80%E4%BB%A5%E6%97%A0%E6%B3%95%E5%88%B7%E6%96%B0" target="_blank" rel="noopener noreferrer">http://oursite.com/myapp，变成根目录http://oursite.com。所以无法刷新</a></p><p><strong>解决方案</strong></p><p>好好检查配置！特别是</p><ul><li>路由的base 是否配置正确</li></ul><h3 id="_4-2-初次进入可以-刷新页面后404-页面地址不变-刷新就是不行" tabindex="-1"><a class="header-anchor" href="#_4-2-初次进入可以-刷新页面后404-页面地址不变-刷新就是不行"><span>4.2 初次进入可以，刷新页面后404(页面地址不变，刷新就是不行)</span></a></h3><p>初次进入可以，刷新页面后404(页面地址不变，刷新就是不行)</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131207418.png" alt="image-20210529142826597" tabindex="0" loading="lazy"><figcaption>image-20210529142826597</figcaption></figure><p><strong>解决方案</strong></p><p>好好检查配置！特别是</p><ul><li>nginx配置是否有加：try_files $uri $uri/ /myapp/index.html;</li></ul><h3 id="_4-3-页面进入后相关资源找不到" tabindex="-1"><a class="header-anchor" href="#_4-3-页面进入后相关资源找不到"><span>4.3 页面进入后相关资源找不到</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131207448.png" alt="image-20210529142019445" tabindex="0" loading="lazy"><figcaption>image-20210529142019445</figcaption></figure><p>我们指定二级目录了，但是资源还是一级目录的地址。</p><p><strong>解决方案</strong></p><p>好好检查配置！特别是</p><ul><li>配置 vue.config.js 文件，publicPath: &quot;./&quot;, //指向相对路径，或者全路径</li></ul>`,46)]))}const t=a(l,[["render",o],["__file","vuerouter-history.html.vue"]]),c=JSON.parse(`{"path":"/posts/Web/frontend-vue/vuerouter-history.html","title":"Vue实战 - VueRouter History模式","lang":"zh-CN","frontmatter":{"description":"Vue实战 - VueRouter History模式 1. 背景 vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。 如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 ...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-vue/vuerouter-history.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Vue实战 - VueRouter History模式"}],["meta",{"property":"og:description","content":"Vue实战 - VueRouter History模式 1. 背景 vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。 如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131207353.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue实战 - VueRouter History模式\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131207353.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131207391.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131207418.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131207448.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[{"level":3,"title":"1.1 未正确配置导致404的问题","slug":"_1-1-未正确配置导致404的问题","link":"#_1-1-未正确配置导致404的问题","children":[]}]},{"level":2,"title":"2. 前端配置","slug":"_2-前端配置","link":"#_2-前端配置","children":[{"level":3,"title":"2.1 放域名根目录下","slug":"_2-1-放域名根目录下","link":"#_2-1-放域名根目录下","children":[]},{"level":3,"title":"2.2 放域名二级目录下","slug":"_2-2-放域名二级目录下","link":"#_2-2-放域名二级目录下","children":[]}]},{"level":2,"title":"3. 后端配置","slug":"_3-后端配置","link":"#_3-后端配置","children":[{"level":3,"title":"3.1 nginx 配置","slug":"_3-1-nginx-配置","link":"#_3-1-nginx-配置","children":[]},{"level":3,"title":"3.2 tomcat","slug":"_3-2-tomcat","link":"#_3-2-tomcat","children":[]}]},{"level":2,"title":"4. 可能遇到的问题","slug":"_4-可能遇到的问题","link":"#_4-可能遇到的问题","children":[{"level":3,"title":"4.1 初次进入可以，刷新页面后404(页面地址变成根目录)","slug":"_4-1-初次进入可以-刷新页面后404-页面地址变成根目录","link":"#_4-1-初次进入可以-刷新页面后404-页面地址变成根目录","children":[]},{"level":3,"title":"4.2 初次进入可以，刷新页面后404(页面地址不变，刷新就是不行)","slug":"_4-2-初次进入可以-刷新页面后404-页面地址不变-刷新就是不行","link":"#_4-2-初次进入可以-刷新页面后404-页面地址不变-刷新就是不行","children":[]},{"level":3,"title":"4.3 页面进入后相关资源找不到","slug":"_4-3-页面进入后相关资源找不到","link":"#_4-3-页面进入后相关资源找不到","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.32,"words":995},"filePathRelative":"posts/Web/frontend-vue/vuerouter-history.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<p><code>vue-router</code> 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，<strong>于是当 URL 改变时，页面不会重新加载</strong>。</p>\\n<p>如果不想要很丑的 hash，我们可以用路由的 <strong>history 模式</strong>，这种模式充分利用 <code>history.pushState</code> API 来完成 URL 跳转而无须重新加载页面。</p>\\n<div class=\\"language-js\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">const</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> router</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> new</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> VueRouter</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">({</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">  mode</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'history'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">  routes</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: [...]</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">})</span></span></code></pre>\\n</div>","autoDesc":true}`);export{t as comp,c as data};
