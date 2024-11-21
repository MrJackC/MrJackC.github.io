import{_ as a,c as n,a as i,o as l}from"./app-CpAF2rca.js";const o={};function e(p,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="首屏优化之-vue路由懒加载和使用懒加载prefetch问题" tabindex="-1"><a class="header-anchor" href="#首屏优化之-vue路由懒加载和使用懒加载prefetch问题"><span>首屏优化之-vue路由懒加载和使用懒加载prefetch问题</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>使用路由懒加载以后 webpack 打包可以根据页面划分来生成文件，根据路由的不同来加载文件，解决了首页一次性加载文件过大导致打开过慢的问题。</p><h2 id="_2-优化操作" tabindex="-1"><a class="header-anchor" href="#_2-优化操作"><span>2. 优化操作</span></a></h2><h3 id="_2-1-常规引入页面" tabindex="-1"><a class="header-anchor" href="#_2-1-常规引入页面"><span>2.1 常规引入页面</span></a></h3><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//常规引入页面</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> Home</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;./views/Home.vue&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> routes</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;/&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;home&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">component</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E06C75;--shiki-dark:#E06C75;">Home</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">meta</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">title</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;Home&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> } },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">];</span></span></code></pre></div><h3 id="_2-2-具体优化-实现懒加载" tabindex="-1"><a class="header-anchor" href="#_2-2-具体优化-实现懒加载"><span>2.2 具体优化：实现懒加载</span></a></h3><div class="language-jsx" data-ext="jsx" data-title="jsx"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Home</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> () </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;./views/home.vue&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> pageA</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> () </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;./views/homeA.vue&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> pageB</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> () </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;./views/homeB.vue&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> routes</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;/&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;home&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">component</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E06C75;--shiki-dark:#E06C75;">Home</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">meta</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">title</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;Home&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> } },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;/a&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;pageA&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">component</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E06C75;--shiki-dark:#E06C75;">pageA</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">meta</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">title</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;APage&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> } },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;/b&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;pageB&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">component</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E06C75;--shiki-dark:#E06C75;">pageB</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">meta</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">title</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;BPage&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> } }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">];</span></span></code></pre></div><p>看一下打包之后的效果，会看到打包出了多个chunk异步块。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131243534.png" alt="image-20200326162422455" tabindex="0" loading="lazy"><figcaption>image-20200326162422455</figcaption></figure><h3 id="_2-3-将chunk打包组" tabindex="-1"><a class="header-anchor" href="#_2-3-将chunk打包组"><span>2.3 将chunk打包组</span></a></h3><p>不指定分组，chunk name会随机生成，我们可以将它指定成chunk name打包到一起</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//引入页面</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Home</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> () </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;./views/Home.vue&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//把页面进行分组 home-group</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> pageA</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> () </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* webpackChunkName: &quot;home-group&quot; */</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;./views/homeA.vue&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> pageB</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> () </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* webpackChunkName: &quot;home-group&quot; */</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;./views/homeB.vue&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> routes</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;/&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;home&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">component</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E06C75;--shiki-dark:#E06C75;">Home</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">meta</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">title</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;Home&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> } },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;/a&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;pageA&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">component</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E06C75;--shiki-dark:#E06C75;">pageA</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">meta</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">title</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;APage&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> } },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;/b&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;pageB&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">component</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E06C75;--shiki-dark:#E06C75;">pageB</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">meta</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">title</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;BPage&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> } }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">];</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131243576.png" alt="image-20200326162720918" tabindex="0" loading="lazy"><figcaption>image-20200326162720918</figcaption></figure><h2 id="_3-解决prefetch提前加载导致问题" tabindex="-1"><a class="header-anchor" href="#_3-解决prefetch提前加载导致问题"><span>3. 解决prefetch提前加载导致问题</span></a></h2><p>实际在浏览器里访问首页的时候也加载了其他chunk的块，是prefetch 提前加载的原因。理论上这个是不影响加载速度的，但是我实际测试还是会影响。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131243615.png" alt="image-20200326163849626" tabindex="0" loading="lazy"><figcaption>image-20200326163849626</figcaption></figure><p>这里请求了1016个请求</p><h3 id="_3-1-通过在vue-config-js里添加以下配置prefetch" tabindex="-1"><a class="header-anchor" href="#_3-1-通过在vue-config-js里添加以下配置prefetch"><span>3.1 通过在vue.config.js里添加以下配置Prefetch</span></a></h3><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// vue.config.js</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">module</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">exports</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  chainWebpack</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">config</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> =&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 移除 prefetch 插件</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">plugins</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">delete</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;prefetch&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 或者</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 修改它的选项：</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">plugin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;prefetch&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">options</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> =&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      options</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">].</span><span style="color:#E06C75;--shiki-dark:#E06C75;">fileBlacklist</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> options</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">].</span><span style="color:#E06C75;--shiki-dark:#E06C75;">fileBlacklist</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> []</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      options</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">].</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">fileBlacklist</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">push</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">/myasyncRoute(.)</span><span style="color:#D19A66;--shiki-dark:#D19A66;">+?</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">js</span><span style="color:#C678DD;--shiki-dark:#C678DD;">$</span><span style="color:#E06C75;--shiki-dark:#E06C75;">/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">      return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> options</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    })</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.jianshu.com/p/45fe75d059e2" target="_blank" rel="noopener noreferrer">vue路由懒加载，vue首屏加载慢和使用懒加载prefetch问题，新增组件懒加载</a></p>`,22)]))}const B=a(o,[["render",e],["__file","fe-vue-route-lazy-loading.html.vue"]]),k=JSON.parse(`{"path":"/posts/Web/frontend-base/fe-vue-route-lazy-loading.html","title":"首屏优化之-vue路由懒加载和使用懒加载prefetch问题","lang":"zh-CN","frontmatter":{"description":"首屏优化之-vue路由懒加载和使用懒加载prefetch问题 1. 背景 使用路由懒加载以后 webpack 打包可以根据页面划分来生成文件，根据路由的不同来加载文件，解决了首页一次性加载文件过大导致打开过慢的问题。 2. 优化操作 2.1 常规引入页面 2.2 具体优化：实现懒加载 看一下打包之后的效果，会看到打包出了多个chunk异步块。 imag...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-base/fe-vue-route-lazy-loading.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"首屏优化之-vue路由懒加载和使用懒加载prefetch问题"}],["meta",{"property":"og:description","content":"首屏优化之-vue路由懒加载和使用懒加载prefetch问题 1. 背景 使用路由懒加载以后 webpack 打包可以根据页面划分来生成文件，根据路由的不同来加载文件，解决了首页一次性加载文件过大导致打开过慢的问题。 2. 优化操作 2.1 常规引入页面 2.2 具体优化：实现懒加载 看一下打包之后的效果，会看到打包出了多个chunk异步块。 imag..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131243534.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"首屏优化之-vue路由懒加载和使用懒加载prefetch问题\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131243534.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131243576.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131243615.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 优化操作","slug":"_2-优化操作","link":"#_2-优化操作","children":[{"level":3,"title":"2.1 常规引入页面","slug":"_2-1-常规引入页面","link":"#_2-1-常规引入页面","children":[]},{"level":3,"title":"2.2 具体优化：实现懒加载","slug":"_2-2-具体优化-实现懒加载","link":"#_2-2-具体优化-实现懒加载","children":[]},{"level":3,"title":"2.3 将chunk打包组","slug":"_2-3-将chunk打包组","link":"#_2-3-将chunk打包组","children":[]}]},{"level":2,"title":"3. 解决prefetch提前加载导致问题","slug":"_3-解决prefetch提前加载导致问题","link":"#_3-解决prefetch提前加载导致问题","children":[{"level":3,"title":"3.1 通过在vue.config.js里添加以下配置Prefetch","slug":"_3-1-通过在vue-config-js里添加以下配置prefetch","link":"#_3-1-通过在vue-config-js里添加以下配置prefetch","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.58,"words":475},"filePathRelative":"posts/Web/frontend-base/fe-vue-route-lazy-loading.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>使用路由懒加载以后 webpack 打包可以根据页面划分来生成文件，根据路由的不同来加载文件，解决了首页一次性加载文件过大导致打开过慢的问题。</p>\\n<h2>2. 优化操作</h2>\\n<h3>2.1 常规引入页面</h3>\\n<div class=\\"language-js\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">//常规引入页面</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">import</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> Home</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> from</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> './views/Home.vue'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">const</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> routes</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> [</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    { </span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">path</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'/'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, </span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">name</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'home'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, </span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">component</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">Home</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, </span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">meta</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: { </span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">title</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'Home'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> } },</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">];</span></span></code></pre>\\n</div>","autoDesc":true}`);export{B as comp,k as data};
