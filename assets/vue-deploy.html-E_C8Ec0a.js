import{_ as a,c as n,a as i,o as l}from"./app-fWubcX7c.js";const e={};function p(o,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="vue前端部署" tabindex="-1"><a class="header-anchor" href="#vue前端部署"><span>Vue前端部署</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1.简介</span></a></h2><h2 id="_2-vue部署配置" tabindex="-1"><a class="header-anchor" href="#_2-vue部署配置"><span>2.Vue部署配置</span></a></h2><h3 id="_2-1-修改vue-config-js-文件" tabindex="-1"><a class="header-anchor" href="#_2-1-修改vue-config-js-文件"><span>2.1 修改vue.config.js 文件</span></a></h3><p>主要修改module.exports</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">module</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">exports</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  publicPath</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;./&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  outputDir</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;dist&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  assetsDir</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;assets&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  ...</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span></code></pre></div><ul><li><p><strong>publicPath</strong>: 部署应用包时的基本 URL</p><p><strong>如果为配置，会导致资源无法正常加载</strong></p><ul><li>部署在域名的根路径 <code>https://www.my-app.com/</code>，则设置 <code>publicPath</code> 为 <code>/</code>即可</li><li>部署在 <code>https://www.my-app.com/my-app/</code>，则设置 <code>publicPath</code> 为 <code>/my-app/</code></li><li>直接使用相对路径 (<code>&#39;./&#39;</code>)，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径</li></ul><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">module</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">exports</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  publicPath</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">process</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">env</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">NODE_ENV</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ===</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;production&#39;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    ?</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;./&#39;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    :</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;/&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div></li><li><p><strong>outputDir</strong>: 打包输出目录名称</p><p>默认为dist。可改为项目打包名称，以免每次打包更改</p></li></ul><h2 id="_3-部署" tabindex="-1"><a class="header-anchor" href="#_3-部署"><span>3. 部署</span></a></h2><h3 id="_3-1-部署在nginx" tabindex="-1"><a class="header-anchor" href="#_3-1-部署在nginx"><span>3.1 部署在nginx</span></a></h3><div class="language-nginx" data-ext="nginx" data-title="nginx"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 边检执法办案管理系统</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">server</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    listen </span><span style="color:#D19A66;--shiki-dark:#D19A66;">         9802</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    location</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> / {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        root </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  /home/my_app;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        index </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> index.html index.htm;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">		try_files </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">$</span><span style="color:#E06C75;--shiki-dark:#E06C75;">uri</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> $</span><span style="color:#E06C75;--shiki-dark:#E06C75;">uri</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/ /index.html;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>如果vue 以history模式需要增加try_files $uri $uri/ /index.html; ,has 模式则不需要</p><h2 id="_4-大文件处理方案" tabindex="-1"><a class="header-anchor" href="#_4-大文件处理方案"><span>4.大文件处理方案</span></a></h2><h3 id="_4-1-部署在nginx解决vue项目打包后js文件过大的问题" tabindex="-1"><a class="header-anchor" href="#_4-1-部署在nginx解决vue项目打包后js文件过大的问题"><span>4.1 部署在nginx解决Vue项目打包后js文件过大的问题</span></a></h3><p>引入插件</p><p>我们可以通过引入 compression-webpack-plugin 插件，然后开启 gzip 来解决本问题</p><p>首先安装插件依赖</p><blockquote><p>npm i compression-webpack-plugin@5.0.1</p></blockquote><p>修改文件 vue.config.js</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> CompressionPlugin</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> require</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;compression-webpack-plugin&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">module</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">exports</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    baseUrl</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;./&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    assetsDir</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;static&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    productionSourceMap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    configureWebpack</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">config</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> =&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">process</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">env</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">NODE_ENV</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ===</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;production&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                plugins</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                    new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> CompressionPlugin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                        filename</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;[path][name].gz&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                        algorithm</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;gzip&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                        test</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> /</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">js</span><span style="color:#C678DD;--shiki-dark:#C678DD;">$</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">html</span><span style="color:#C678DD;--shiki-dark:#C678DD;">$</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">css/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                        threshold</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">10240</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                        minRatio</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0.8</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                        deleteOriginalAssets</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                    })</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                ]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2修改nginx配置" tabindex="-1"><a class="header-anchor" href="#_4-2修改nginx配置"><span>4.2修改Nginx配置</span></a></h3><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># on为启用，off为关闭</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">gzip </span><span style="color:#D19A66;--shiki-dark:#D19A66;">on</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Nginx的动态压缩是对每个请求先压缩再输出，这样造成虚拟机浪费了很多cpu，解决这个问题可以利用nginx模块Gzip Precompression，这个模块的作用是对于需要压缩的文件，直接读取已经压缩好的文件(文件名为加.gz)，而不是动态压缩，对于不支持gzip的请求则读取原文件</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">gzip_static </span><span style="color:#D19A66;--shiki-dark:#D19A66;">on</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 设置允许压缩的页面最小字节数，页面字节数从header头中的Content-Length中进行获取。默认值是0，不管页面多大都压缩。建议设置成大于1k的字节数，小于1k可能会越压越大。</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">gzip_min_length </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1k</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 获取多少内存用于缓存压缩结果，‘4 16k’表示以16k*4为单位获得</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">gzip_buffers </span><span style="color:#D19A66;--shiki-dark:#D19A66;">4</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 32k</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 识别http协议的版本,早起浏览器可能不支持gzip自解压,用户会看到乱码</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">gzip_http_version </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1.1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># gzip压缩比（1~9），越小压缩效果越差，但是越大处理越慢，所以一般取中间值;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">gzip_comp_level </span><span style="color:#D19A66;--shiki-dark:#D19A66;">5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 对特定的MIME类型生效,其中&#39;text/html’被系统强制启用</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#gzip_types text/plain application/x-javascript text/css application/xml;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">gzip_types </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">text/plain application/javascript application/x-javascript text/javascript text/xml text/css;  </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 启用应答头&quot;Vary: Accept-Encoding&quot;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">gzip_vary </span><span style="color:#D19A66;--shiki-dark:#D19A66;">on</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># IE5.5和IE6 SP1使用msie6参数来禁止gzip压缩 )指定哪些不需要gzip压缩的浏览器(将和User-Agents进行匹配),依赖于PCRE库</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">gzip_disable </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;MSIE [1-6].&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置后重启nginx服务。</p>`,22)]))}const t=a(e,[["render",p],["__file","vue-deploy.html.vue"]]),c=JSON.parse(`{"path":"/posts/Web/frontend-vue/vue-deploy.html","title":"Vue前端部署","lang":"zh-CN","frontmatter":{"description":"Vue前端部署 1.简介 2.Vue部署配置 2.1 修改vue.config.js 文件 主要修改module.exports publicPath: 部署应用包时的基本 URL 如果为配置，会导致资源无法正常加载 部署在域名的根路径 https://www.my-app.com/，则设置 publicPath 为 /即可 部署在 https://w...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-vue/vue-deploy.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Vue前端部署"}],["meta",{"property":"og:description","content":"Vue前端部署 1.简介 2.Vue部署配置 2.1 修改vue.config.js 文件 主要修改module.exports publicPath: 部署应用包时的基本 URL 如果为配置，会导致资源无法正常加载 部署在域名的根路径 https://www.my-app.com/，则设置 publicPath 为 /即可 部署在 https://w..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue前端部署\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1.简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2.Vue部署配置","slug":"_2-vue部署配置","link":"#_2-vue部署配置","children":[{"level":3,"title":"2.1 修改vue.config.js 文件","slug":"_2-1-修改vue-config-js-文件","link":"#_2-1-修改vue-config-js-文件","children":[]}]},{"level":2,"title":"3. 部署","slug":"_3-部署","link":"#_3-部署","children":[{"level":3,"title":"3.1 部署在nginx","slug":"_3-1-部署在nginx","link":"#_3-1-部署在nginx","children":[]}]},{"level":2,"title":"4.大文件处理方案","slug":"_4-大文件处理方案","link":"#_4-大文件处理方案","children":[{"level":3,"title":"4.1 部署在nginx解决Vue项目打包后js文件过大的问题","slug":"_4-1-部署在nginx解决vue项目打包后js文件过大的问题","link":"#_4-1-部署在nginx解决vue项目打包后js文件过大的问题","children":[]},{"level":3,"title":"4.2修改Nginx配置","slug":"_4-2修改nginx配置","link":"#_4-2修改nginx配置","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.52,"words":756},"filePathRelative":"posts/Web/frontend-vue/vue-deploy.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1.简介</h2>\\n<h2>2.Vue部署配置</h2>\\n<h3>2.1 修改vue.config.js 文件</h3>\\n<p>主要修改module.exports</p>\\n<div class=\\"language-js\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">module</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">exports</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">  publicPath</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"./\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">  outputDir</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'dist'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">  assetsDir</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'assets'</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  ...</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  }</span></span></code></pre>\\n</div>","autoDesc":true}`);export{t as comp,c as data};
