import{_ as s,c as e,a,o as i}from"./app-BfIe-EZg.js";const p={};function l(t,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="首页优化之-gzip压缩" tabindex="-1"><a class="header-anchor" href="#首页优化之-gzip压缩"><span>首页优化之-gzip压缩</span></a></h1><p>当前打包出来的dist 是13.6M</p><p>使用gzip压缩之后变成15.8M,在原有的基础上加上了gzip</p><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>gzip 压缩是一种http请求优化方式，通过减少文件体积来提高加载速度。html、js、css文件甚至json数据都可以用它来压缩，可以减少60%以上的体积</p><h2 id="_2-压缩配置" tabindex="-1"><a class="header-anchor" href="#_2-压缩配置"><span>2. 压缩配置</span></a></h2><h3 id="_2-1-安装-compression-webpack-plugin-插件" tabindex="-1"><a class="header-anchor" href="#_2-1-安装-compression-webpack-plugin-插件"><span>2.1 安装 compression webpack plugin 插件</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>npm install --save-dev compression-webpack-plugin</span></span></code></pre></div><h3 id="_2-2-在vue-cli3-0-生成的项目里-可在vue-config-js-中按照如下方式配置" tabindex="-1"><a class="header-anchor" href="#_2-2-在vue-cli3-0-生成的项目里-可在vue-config-js-中按照如下方式配置"><span>2.2 在vue cli3.0 生成的项目里，可在vue.config.js 中按照如下方式配置</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>const CompressionWebpackPlugin = require(&quot;compression-webpack-plugin&quot;);</span></span>
<span class="line"><span>const productionGzipExtensions = /\\.(js|css|json|txt|html|ico|svg)(\\?.*)?$/i;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span> 	...</span></span>
<span class="line"><span>  configureWebpack: config =&gt; {</span></span>
<span class="line"><span>    const plugins = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Begin 生成 gzip 压缩文件</span></span>
<span class="line"><span>    plugins.push(</span></span>
<span class="line"><span>        new CompressionWebpackPlugin({</span></span>
<span class="line"><span>            filename: &quot;[path].gz[query]&quot;,</span></span>
<span class="line"><span>            algorithm: &quot;gzip&quot;,</span></span>
<span class="line"><span>            test: productionGzipExtensions,</span></span>
<span class="line"><span>            threshold: 10240,</span></span>
<span class="line"><span>            minRatio: 0.8</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    // End 生成 gzip 压缩文件</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    config.plugins = [...config.plugins, ...plugins];</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	...</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-nginx-配置" tabindex="-1"><a class="header-anchor" href="#_2-3-nginx-配置"><span>2.3 nginx 配置</span></a></h3><p>在nginx.conf 的 在http 中添加</p><pre><code>gzip                on;
#gzip_static         on;
gzip_min_length     1k;
gzip_comp_level     5;
gzip_http_version   1.0;
gzip_types          text/plain application/javascript application/x-javascript text/javascript text/xml text/css;
</code></pre><p>使用 gzip_static 需要nginx 支持，可选择性开启</p><ul><li><p>使用前876KB</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230858868.png" alt="image-20200326183747822" tabindex="0" loading="lazy"><figcaption>image-20200326183747822</figcaption></figure></li><li><p>使用后311KB</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230858910.png" alt="image-20200326183657671" tabindex="0" loading="lazy"><figcaption>image-20200326183657671</figcaption></figure></li></ul>`,15)]))}const o=s(p,[["render",l],["__file","fe-gzip.html.vue"]]),r=JSON.parse('{"path":"/posts/Web/frontend-base/fe-gzip.html","title":"首页优化之-gzip压缩","lang":"zh-CN","frontmatter":{"description":"首页优化之-gzip压缩 当前打包出来的dist 是13.6M 使用gzip压缩之后变成15.8M,在原有的基础上加上了gzip 1. 简介 gzip 压缩是一种http请求优化方式，通过减少文件体积来提高加载速度。html、js、css文件甚至json数据都可以用它来压缩，可以减少60%以上的体积 2. 压缩配置 2.1 安装 compression...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-base/fe-gzip.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"首页优化之-gzip压缩"}],["meta",{"property":"og:description","content":"首页优化之-gzip压缩 当前打包出来的dist 是13.6M 使用gzip压缩之后变成15.8M,在原有的基础上加上了gzip 1. 简介 gzip 压缩是一种http请求优化方式，通过减少文件体积来提高加载速度。html、js、css文件甚至json数据都可以用它来压缩，可以减少60%以上的体积 2. 压缩配置 2.1 安装 compression..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230858868.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"首页优化之-gzip压缩\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230858868.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230858910.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 压缩配置","slug":"_2-压缩配置","link":"#_2-压缩配置","children":[{"level":3,"title":"2.1 安装 compression webpack plugin 插件","slug":"_2-1-安装-compression-webpack-plugin-插件","link":"#_2-1-安装-compression-webpack-plugin-插件","children":[]},{"level":3,"title":"2.2 在vue cli3.0 生成的项目里，可在vue.config.js 中按照如下方式配置","slug":"_2-2-在vue-cli3-0-生成的项目里-可在vue-config-js-中按照如下方式配置","link":"#_2-2-在vue-cli3-0-生成的项目里-可在vue-config-js-中按照如下方式配置","children":[]},{"level":3,"title":"2.3 nginx 配置","slug":"_2-3-nginx-配置","link":"#_2-3-nginx-配置","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.87,"words":262},"filePathRelative":"posts/Web/frontend-base/fe-gzip.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>当前打包出来的dist 是13.6M</p>\\n<p>使用gzip压缩之后变成15.8M,在原有的基础上加上了gzip</p>\\n<h2>1. 简介</h2>\\n<p>gzip 压缩是一种http请求优化方式，通过减少文件体积来提高加载速度。html、js、css文件甚至json数据都可以用它来压缩，可以减少60%以上的体积</p>\\n<h2>2. 压缩配置</h2>\\n<h3>2.1 安装 compression webpack plugin 插件</h3>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>npm install --save-dev compression-webpack-plugin</span></span></code></pre>\\n</div>","autoDesc":true}');export{o as comp,r as data};
