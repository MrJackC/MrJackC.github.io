import{_ as n,c as e,a as s,o as i}from"./app-BfIe-EZg.js";const r={};function t(o,a){return i(),e("div",null,a[0]||(a[0]=[s(`<h1 id="mac安装nginx" tabindex="-1"><a class="header-anchor" href="#mac安装nginx"><span>Mac安装nginx</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>Mac安装nginx，采用Mac的包管理工具 <strong>homebrew</strong> 安装</p><h2 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装"><span>2. 安装</span></a></h2><h3 id="_2-1-步骤一-先更新homebrew" tabindex="-1"><a class="header-anchor" href="#_2-1-步骤一-先更新homebrew"><span>2.1 <strong>步骤一：先更新homebrew</strong></span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>brew update</span></span></code></pre></div><p>如果上面操作长时间没任何动静，请更换镜像，参考清华的镜像 <a href="https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/" target="_blank" rel="noopener noreferrer">https://mirrors.tuna.tsinghua...</a></p><h3 id="_2-2-步骤二-查看nginx信息" tabindex="-1"><a class="header-anchor" href="#_2-2-步骤二-查看nginx信息"><span>2.2 <strong>步骤二</strong>： 查看nginx信息</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>brew search nginx</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231142884.png" alt="image-20210607150955882" tabindex="0" loading="lazy"><figcaption>image-20210607150955882</figcaption></figure><h3 id="_2-3-安装nginx" tabindex="-1"><a class="header-anchor" href="#_2-3-安装nginx"><span>2.3 <strong>安装nginx</strong></span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>brew install nginx</span></span></code></pre></div><p>安装完毕</p><ul><li>主页的文件在/usr/local/var/www 文件夹下</li><li>对应的配置文件地址在/usr/local/etc/nginx/nginx.conf</li></ul><h3 id="_2-4-步骤四-运行nginx" tabindex="-1"><a class="header-anchor" href="#_2-4-步骤四-运行nginx"><span><strong>2.4 步骤四：运行nginx</strong></span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>nginx</span></span></code></pre></div><p>nginx默认使用8080端口 如果发现端口被占用了，可以杀掉使用使用改端口的进程，也可以修改/usr/local/etc/nginx/nginx.conf 下的</p><div class="language-nginx" data-ext="nginx" data-title="nginx"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">http</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    server</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        listen </span><span style="color:#D19A66;--shiki-dark:#D19A66;">      8181</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        server_name </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> localhost;  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        #charset koi8-r;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        .....</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span></code></pre></div><h3 id="_2-5-重新启动nginx" tabindex="-1"><a class="header-anchor" href="#_2-5-重新启动nginx"><span>2.5 <strong>重新启动nginx</strong></span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>nginx -s reload</span></span></code></pre></div><p>成功看到欢迎页面～！（对应的html是/usr/local/var/www/index.html）</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231142931.png" alt="image-20210607151153045" tabindex="0" loading="lazy"><figcaption>image-20210607151153045</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://segmentfault.com/a/1190000016020328" target="_blank" rel="noopener noreferrer">MAC下安装nginx</a></p>`,24)]))}const c=n(r,[["render",t],["__file","nginx-y-mac-install.html.vue"]]),p=JSON.parse('{"path":"/posts/MiddleWare/Nginx/nginx-y-mac-install.html","title":"Mac安装nginx","lang":"zh-CN","frontmatter":{"description":"Mac安装nginx 1. 简介 Mac安装nginx，采用Mac的包管理工具 homebrew 安装 2. 安装 2.1 步骤一：先更新homebrew 如果上面操作长时间没任何动静，请更换镜像，参考清华的镜像 https://mirrors.tuna.tsinghua... 2.2 步骤二： 查看nginx信息 image-202106071509...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/MiddleWare/Nginx/nginx-y-mac-install.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Mac安装nginx"}],["meta",{"property":"og:description","content":"Mac安装nginx 1. 简介 Mac安装nginx，采用Mac的包管理工具 homebrew 安装 2. 安装 2.1 步骤一：先更新homebrew 如果上面操作长时间没任何动静，请更换镜像，参考清华的镜像 https://mirrors.tuna.tsinghua... 2.2 步骤二： 查看nginx信息 image-202106071509..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231142884.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mac安装nginx\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231142884.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231142931.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 安装","slug":"_2-安装","link":"#_2-安装","children":[{"level":3,"title":"2.1 步骤一：先更新homebrew","slug":"_2-1-步骤一-先更新homebrew","link":"#_2-1-步骤一-先更新homebrew","children":[]},{"level":3,"title":"2.2 步骤二： 查看nginx信息","slug":"_2-2-步骤二-查看nginx信息","link":"#_2-2-步骤二-查看nginx信息","children":[]},{"level":3,"title":"2.3 安装nginx","slug":"_2-3-安装nginx","link":"#_2-3-安装nginx","children":[]},{"level":3,"title":"2.4 步骤四：运行nginx","slug":"_2-4-步骤四-运行nginx","link":"#_2-4-步骤四-运行nginx","children":[]},{"level":3,"title":"2.5 重新启动nginx","slug":"_2-5-重新启动nginx","link":"#_2-5-重新启动nginx","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.71,"words":212},"filePathRelative":"posts/MiddleWare/Nginx/nginx-y-mac-install.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>Mac安装nginx，采用Mac的包管理工具 <strong>homebrew</strong> 安装</p>\\n<h2>2. 安装</h2>\\n<h3>2.1 <strong>步骤一：先更新homebrew</strong></h3>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>brew update</span></span></code></pre>\\n</div>","autoDesc":true}');export{c as comp,p as data};
