import{_ as e,c as s,a as n,o as t}from"./app-BOcQBfH9.js";const p={};function i(l,a){return t(),s("div",null,a[0]||(a[0]=[n(`<h1 id="vuejs中引入图片路径的几种方式" tabindex="-1"><a class="header-anchor" href="#vuejs中引入图片路径的几种方式"><span>Vuejs中引入图片路径的几种方式</span></a></h1><h2 id="_1-vue中静态资源的引入机制" tabindex="-1"><a class="header-anchor" href="#_1-vue中静态资源的引入机制"><span>1. vue中静态资源的引入机制</span></a></h2><blockquote><p>Vue.js关于静态资源的<a href="https://cli.vuejs.org/zh/guide/html-and-static-assets.html#%E5%A4%84%E7%90%86%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90" target="_blank" rel="noopener noreferrer">官方文档</a></p></blockquote><p>静态资源可以通过两种方式进行处理：</p><ol><li>在 JavaScript 被导入或在 template/CSS 中通过相对路径(以 . 开头)被引用。这类引用会被 webpack 处理。 <ul><li>诸如 <code>&lt;img src=&quot;...&quot;&gt;</code>、<code>background: url(...)</code> 和 <code>CSS @import</code> 的资源 <ul><li>写在 template 中内联 style 的 <code>background: url(...)</code> 样式，在当前版本的测试中，即使使用了相对路径也不会被webpack处理</li></ul></li><li>例如，<code>url(./image.png)</code> 会被翻译为 <code>require(&#39;./image.png&#39;)</code></li></ul></li><li>放置在 <code>public</code> 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理，你需要通过绝对路径来引用它们。 <ul><li>如果 URL 是一个绝对路径，例如 <code>/images/foo.png</code> ，它将会被保留不变。</li></ul></li></ol><h2 id="_2-目录结构" tabindex="-1"><a class="header-anchor" href="#_2-目录结构"><span>2. 目录结构</span></a></h2><blockquote><p>vue-path/<br> ----- public/<br> -------- images/<br> ------------ XX.jpg<br> ----- src/<br> -------- assets/<br> ------------ images/<br> ---------------- XX.jpg<br> -------- App.vue<br> ...</p></blockquote><h2 id="_3-引入示例" tabindex="-1"><a class="header-anchor" href="#_3-引入示例"><span>3. 引入示例</span></a></h2><p><code>App.vue</code>:</p><ol><li><p><strong>√</strong></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;img src=&quot;assets/images/01.jpg&quot; alt=&quot;&quot;&gt; // √</span></span>
<span class="line"><span>// 编译后:</span></span>
<span class="line"><span>&lt;img src=&quot;/img/01.f0cfc21d.jpg&quot; alt=&quot;&quot;&gt;</span></span></code></pre></div><p>常见的引入方式，路径是固定的字符串，图片会被webpack处理，文件若丢失会直接在编译时报错，生成的文件包含了哈希值</p></li><li><p><strong>×</strong></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;img :src=&quot;&#39;assets/images/02.jpg&#39;&quot; alt=&quot;&quot;&gt; // ×</span></span>
<span class="line"><span>// 编译后:</span></span>
<span class="line"><span>&lt;img src=&quot;assets/images/02.jpg&quot; alt=&quot;&quot;&gt;</span></span></code></pre></div><p>错误的引入方式，使用<code>:src</code>调用了<code>v-bind</code>指令处理其内容，相对路径不会被webpack的<code>file-loader</code>处理</p></li><li><p><strong>√</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;img :src=&quot;require(&#39;assets/images/03.jpg&#39;)&quot; alt=&quot;&quot;&gt; // √</span></span>
<span class="line"><span>&lt;img :src=&quot;require(&#39;assets/images/&#39;+ this.imgName +&#39;.jpg&#39;)&quot; alt=&quot;&quot;&gt; // √</span></span>
<span class="line"><span>&lt;img :src=&quot;img3&quot; alt=&quot;&quot;&gt; // √</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default:{</span></span>
<span class="line"><span>    data(){</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>          imgName:&#39;03.jpg&#39;,</span></span>
<span class="line"><span>          img3:require(&#39;assets/images/03.jpg&#39;),</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>// 编译后:</span></span>
<span class="line"><span>&lt;img src=&quot;/img/03.ea62525c.jpg&quot; alt=&quot;&quot;&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当路径的文件名需要拼接变量的时候，可使用 <code>require()</code> 引入，在 template 的<code>:src</code> 或者 script 的 <code>data</code> <code>computed</code> 中都可以进行 <code>require</code> 引入或拼接</p></li><li><p><strong>×</strong></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;img src=&quot;/images/04.jpg&quot; alt=&quot;&quot;&gt; // -</span></span>
<span class="line"><span>// 编译后:</span></span>
<span class="line"><span>&lt;img src=&quot;/images/04.jpg&quot; alt=&quot;&quot;&gt;</span></span></code></pre></div><p>用绝对路径引入时，路径读取的是public文件夹中的资源，任何放置在 <code>public</code> 文件夹的静态资源都会被简单的复制到编译后的目录中，而不经过 webpack特殊处理。<br> 当你的应用被部署在一个域名的根路径上时，比如<code>http://www.abc.com/</code>，此时这种引入方式可以正常显示<br> 但是如果你的应用没有部署在域名的根部，那么你需要为你的 URL 配置 publicPath 前缀<br><code>publicPath</code> 是部署应用包时的基本 URL，在 <code>vue.config.js</code> 中进行配置，详情参阅<a href="https://cli.vuejs.org/zh/config/#publicpath" target="_blank" rel="noopener noreferrer">官方文档</a></p></li><li><p>√**</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;img :src=&quot;this.publicPath + &#39;images/05.jpg&#39;&quot; alt=&quot;&quot;&gt; // √</span></span>
<span class="line"><span>// 编译后:</span></span>
<span class="line"><span>&lt;img src=&quot;/foo/images/05.jpg&quot; alt=&quot;&quot;&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default:{</span></span>
<span class="line"><span>    data(){</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>          publicPath: process.env.BASE_URL,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>vue.config.js中:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>//vue.config.js</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    publicPath:&#39;/foo/&#39;,</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>引入publicPath并且将其拼接在路径中，实现引入路径的动态变动</p></li></ol><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://segmentfault.com/a/1190000019495695" target="_blank" rel="noopener noreferrer">Vue.js中引入图片路径的几种方式</a></p>`,12)]))}const c=e(p,[["render",i],["__file","vue-introduce-picture-path.html.vue"]]),r=JSON.parse(`{"path":"/posts/Web/frontend-vue/vue-introduce-picture-path.html","title":"Vuejs中引入图片路径的几种方式","lang":"zh-CN","frontmatter":{"description":"Vuejs中引入图片路径的几种方式 1. vue中静态资源的引入机制 Vue.js关于静态资源的官方文档 静态资源可以通过两种方式进行处理： 在 JavaScript 被导入或在 template/CSS 中通过相对路径(以 . 开头)被引用。这类引用会被 webpack 处理。 诸如 <img src=\\"...\\">、background: url(....","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Web/frontend-vue/vue-introduce-picture-path.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Vuejs中引入图片路径的几种方式"}],["meta",{"property":"og:description","content":"Vuejs中引入图片路径的几种方式 1. vue中静态资源的引入机制 Vue.js关于静态资源的官方文档 静态资源可以通过两种方式进行处理： 在 JavaScript 被导入或在 template/CSS 中通过相对路径(以 . 开头)被引用。这类引用会被 webpack 处理。 诸如 <img src=\\"...\\">、background: url(...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vuejs中引入图片路径的几种方式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. vue中静态资源的引入机制","slug":"_1-vue中静态资源的引入机制","link":"#_1-vue中静态资源的引入机制","children":[]},{"level":2,"title":"2. 目录结构","slug":"_2-目录结构","link":"#_2-目录结构","children":[]},{"level":2,"title":"3. 引入示例","slug":"_3-引入示例","link":"#_3-引入示例","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.33,"words":698},"filePathRelative":"posts/Web/frontend-vue/vue-introduce-picture-path.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. vue中静态资源的引入机制</h2>\\n<blockquote>\\n<p>Vue.js关于静态资源的<a href=\\"https://cli.vuejs.org/zh/guide/html-and-static-assets.html#%E5%A4%84%E7%90%86%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方文档</a></p>\\n</blockquote>\\n<p>静态资源可以通过两种方式进行处理：</p>\\n<ol>\\n<li>在 JavaScript 被导入或在 template/CSS 中通过相对路径(以 . 开头)被引用。这类引用会被 webpack 处理。\\n<ul>\\n<li>诸如 <code>&lt;img src=\\"...\\"&gt;</code>、<code>background: url(...)</code> 和 <code>CSS @import</code> 的资源\\n<ul>\\n<li>写在 template 中内联 style 的 <code>background: url(...)</code> 样式，在当前版本的测试中，即使使用了相对路径也不会被webpack处理</li>\\n</ul>\\n</li>\\n<li>例如，<code>url(./image.png)</code> 会被翻译为 <code>require('./image.png')</code></li>\\n</ul>\\n</li>\\n<li>放置在 <code>public</code> 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理，你需要通过绝对路径来引用它们。\\n<ul>\\n<li>如果 URL 是一个绝对路径，例如 <code>/images/foo.png</code> ，它将会被保留不变。</li>\\n</ul>\\n</li>\\n</ol>","autoDesc":true}`);export{c as comp,r as data};
