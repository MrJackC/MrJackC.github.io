import{_ as n,c as e,a,o as l}from"./app-4x2aIoqi.js";const i={};function r(p,s){return l(),e("div",null,s[0]||(s[0]=[a(`<h1 id="关闭eslint" tabindex="-1"><a class="header-anchor" href="#关闭eslint"><span>关闭eslint</span></a></h1><h2 id="_1-vue-cli脚手架的关闭方法" tabindex="-1"><a class="header-anchor" href="#_1-vue-cli脚手架的关闭方法"><span>1. vue-cli脚手架的关闭方法</span></a></h2><p><code>build/webpack.base.conf.js</code> 配置文件中的eslint rules注释掉</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">module: {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    rules: [</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      // {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      //   test: /\\.(js|vue)$/,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      //   loader: &#39;eslint-loader&#39;,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      //   enforce: &#39;pre&#39;,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      //   include: [resolve(&#39;src&#39;), resolve(&#39;test&#39;)],</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      //   options: {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      //     formatter: require(&#39;eslint-friendly-formatter&#39;)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      //   }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      // },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      ...</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">     ]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">     ...</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   }</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想保留eslint的语法检测，那就把不符合自己习惯的规则</p><h2 id="_2-关闭vue-cli3-0-的eslint" tabindex="-1"><a class="header-anchor" href="#_2-关闭vue-cli3-0-的eslint"><span>2. 关闭vue-cli3.0 的eslint</span></a></h2><p>在 vue.config.js中将以下三项设置为false</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">module</span><span style="color:#D19A66;--shiki-dark:#D19A66;">.exports</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    ...</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    // lintOnSave: process.env.NODE_ENV === </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;development&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    lintOnSave: false,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	devServer: {</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">        overlay</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            warnings: false,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            errors: false</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/qq_34645412/article/details/78974413" target="_blank" rel="noopener noreferrer">关闭令人抓狂的ESlint 语法检测配置方法</a></p><p><a href="https://www.jianshu.com/p/bfc7e7329cff" target="_blank" rel="noopener noreferrer">vue-cli3的eslint配置问题</a></p>`,11)]))}const B=n(i,[["render",r],["__file","fe-lib-eslint.html.vue"]]),c=JSON.parse(`{"path":"/posts/Web/frontend-lib/fe-lib-eslint.html","title":"关闭eslint","lang":"zh-CN","frontmatter":{"description":"关闭eslint 1. vue-cli脚手架的关闭方法 build/webpack.base.conf.js 配置文件中的eslint rules注释掉 如果想保留eslint的语法检测，那就把不符合自己习惯的规则 2. 关闭vue-cli3.0 的eslint 在 vue.config.js中将以下三项设置为false 参考文章 关闭令人抓狂的ESl...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-lib/fe-lib-eslint.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"关闭eslint"}],["meta",{"property":"og:description","content":"关闭eslint 1. vue-cli脚手架的关闭方法 build/webpack.base.conf.js 配置文件中的eslint rules注释掉 如果想保留eslint的语法检测，那就把不符合自己习惯的规则 2. 关闭vue-cli3.0 的eslint 在 vue.config.js中将以下三项设置为false 参考文章 关闭令人抓狂的ESl..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"关闭eslint\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. vue-cli脚手架的关闭方法","slug":"_1-vue-cli脚手架的关闭方法","link":"#_1-vue-cli脚手架的关闭方法","children":[]},{"level":2,"title":"2. 关闭vue-cli3.0 的eslint","slug":"_2-关闭vue-cli3-0-的eslint","link":"#_2-关闭vue-cli3-0-的eslint","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.51,"words":152},"filePathRelative":"posts/Web/frontend-lib/fe-lib-eslint.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. vue-cli脚手架的关闭方法</h2>\\n<p><code>build/webpack.base.conf.js</code> 配置文件中的eslint rules注释掉</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\" data-title=\\"html\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">module: {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    rules: [</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">      // {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">      //   test: /\\\\.(js|vue)$/,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">      //   loader: 'eslint-loader',</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">      //   enforce: 'pre',</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">      //   include: [resolve('src'), resolve('test')],</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">      //   options: {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">      //     formatter: require('eslint-friendly-formatter')</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">      //   }</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">      // },</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">      </span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">      ...</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">     ]</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">     ...</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">   }</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{B as comp,c as data};
