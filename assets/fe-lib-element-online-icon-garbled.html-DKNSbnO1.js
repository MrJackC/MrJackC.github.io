import{_ as s,c as a,a as n,o as t}from"./app-DP7tPpgD.js";const o={};function r(l,e){return t(),a("div",null,e[0]||(e[0]=[n(`<h1 id="线上element的字体图标乱码" tabindex="-1"><a class="header-anchor" href="#线上element的字体图标乱码"><span>线上element的字体图标乱码</span></a></h1><h2 id="_1-现象" tabindex="-1"><a class="header-anchor" href="#_1-现象"><span>1. 现象</span></a></h2><p>本地开发测试都没有问题，部署到线上环境图标第一次显示不出来</p><h2 id="_2-问题原因" tabindex="-1"><a class="header-anchor" href="#_2-问题原因"><span>2. 问题原因</span></a></h2><p>dart-sass编译时会将对应的unicode编码转换成对应unicode明文，所以通过伪元素来展示的图标如el-icon-arrow:before{ content: &quot;\\e6df&quot;}，编译之后就变成了el-icon-arrow:before{ content: &quot;&quot;}，“”便是一个双字节字符</p><ul><li>正常情况我们会在meta标签上设置：<code>&lt;meta charset=&quot;utf-8&quot; &gt;</code>，<strong>但这只对HTML内容解析有效，</strong></li><li>对于css内容中(外部样式表下)的双字节字符（如中文）解析并没有作用的，所以如果浏览器请求回来的css资源的HTTP响应头里的Content-Type未指明&quot;charset=utf-8&quot;的话，浏览器根据自身的嗅探机制来决定采用哪一种编码解析，结果就会概率出现双字节字符乱码的情况</li></ul><h2 id="_3-解决方法" tabindex="-1"><a class="header-anchor" href="#_3-解决方法"><span>3. 解决方法</span></a></h2><h3 id="_3-1-改为node-sass编译-亲测有效" tabindex="-1"><a class="header-anchor" href="#_3-1-改为node-sass编译-亲测有效"><span>3.1 改为node-sass编译(亲测有效)</span></a></h3><p>element-ui采用的时node-sass编译，可以把dart-sass换成node-sass，但是官网主推dart-sass，dart-sass会是未来主流</p><h3 id="_3-2-css-增加-charset-utf-8-响应头" tabindex="-1"><a class="header-anchor" href="#_3-2-css-增加-charset-utf-8-响应头"><span>3.2 css 增加&quot;charset=utf-8&quot;响应头</span></a></h3><p>让css资源请求的响应头的Content-Type增加&quot;charset=utf-8&quot;声明，因为涉及到后端，所以具体笔者没试验过，不知道可不可行。</p><h3 id="_3-3-设置sassoptions不压缩" tabindex="-1"><a class="header-anchor" href="#_3-3-设置sassoptions不压缩"><span>3.3 设置sassOptions不压缩</span></a></h3><p>因为 sass-loader 会检查运行环境的模式，给 dart-sass 传入 <code>{ outputStyle: &quot;compressed&quot; }</code>。 dart-sass 在这时会使用 BOM 而不是输出 <code>@charset</code>。</p><p>如果是通过 @vue/cli 搭建的环境，因为有 cssnano 处理压缩，所以可以给 vue.config.js 传入 sassOptions 避免 compressed。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">module</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">exports</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> { </span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  css</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    loaderOptions</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      sass</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        sassOptions</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> { outputStyle</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;expanded&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.cnblogs.com/shandou/p/14867943.html" target="_blank" rel="noopener noreferrer">dart-sass编译element-ui打包出来的icon乱码的解决方案</a></p><p><a href="https://github.com/PanJiaChen/vue-element-admin/issues/3526" target="_blank" rel="noopener noreferrer">用最新的框架，打包出来element的字体图标乱码了？</a></p>`,18)]))}const p=s(o,[["render",r],["__file","fe-lib-element-online-icon-garbled.html.vue"]]),c=JSON.parse('{"path":"/posts/Web/frontend-lib/fe-lib-element-online-icon-garbled.html","title":"线上element的字体图标乱码","lang":"zh-CN","frontmatter":{"description":"线上element的字体图标乱码 1. 现象 本地开发测试都没有问题，部署到线上环境图标第一次显示不出来 2. 问题原因 dart-sass编译时会将对应的unicode编码转换成对应unicode明文，所以通过伪元素来展示的图标如el-icon-arrow:before{ content: \\"\\\\e6df\\"}，编译之后就变成了el-icon-arrow...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-lib/fe-lib-element-online-icon-garbled.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"线上element的字体图标乱码"}],["meta",{"property":"og:description","content":"线上element的字体图标乱码 1. 现象 本地开发测试都没有问题，部署到线上环境图标第一次显示不出来 2. 问题原因 dart-sass编译时会将对应的unicode编码转换成对应unicode明文，所以通过伪元素来展示的图标如el-icon-arrow:before{ content: \\"\\\\e6df\\"}，编译之后就变成了el-icon-arrow..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线上element的字体图标乱码\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 现象","slug":"_1-现象","link":"#_1-现象","children":[]},{"level":2,"title":"2. 问题原因","slug":"_2-问题原因","link":"#_2-问题原因","children":[]},{"level":2,"title":"3. 解决方法","slug":"_3-解决方法","link":"#_3-解决方法","children":[{"level":3,"title":"3.1 改为node-sass编译(亲测有效)","slug":"_3-1-改为node-sass编译-亲测有效","link":"#_3-1-改为node-sass编译-亲测有效","children":[]},{"level":3,"title":"3.2 css 增加\\"charset=utf-8\\"响应头","slug":"_3-2-css-增加-charset-utf-8-响应头","link":"#_3-2-css-增加-charset-utf-8-响应头","children":[]},{"level":3,"title":"3.3 设置sassOptions不压缩","slug":"_3-3-设置sassoptions不压缩","link":"#_3-3-设置sassoptions不压缩","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.59,"words":476},"filePathRelative":"posts/Web/frontend-lib/fe-lib-element-online-icon-garbled.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 现象</h2>\\n<p>本地开发测试都没有问题，部署到线上环境图标第一次显示不出来</p>\\n<h2>2. 问题原因</h2>\\n<p>dart-sass编译时会将对应的unicode编码转换成对应unicode明文，所以通过伪元素来展示的图标如el-icon-arrow:before{ content: \\"\\\\e6df\\"}，编译之后就变成了el-icon-arrow:before{ content: \\"\\"}，“”便是一个双字节字符</p>\\n<ul>\\n<li>正常情况我们会在meta标签上设置：<code>&lt;meta charset=\\"utf-8\\" &gt;</code>，<strong>但这只对HTML内容解析有效，</strong></li>\\n<li>对于css内容中(外部样式表下)的双字节字符（如中文）解析并没有作用的，所以如果浏览器请求回来的css资源的HTTP响应头里的Content-Type未指明\\"charset=utf-8\\"的话，浏览器根据自身的嗅探机制来决定采用哪一种编码解析，结果就会概率出现双字节字符乱码的情况</li>\\n</ul>","autoDesc":true}');export{p as comp,c as data};
