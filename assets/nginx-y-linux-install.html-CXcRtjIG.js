import{_ as a,c as e,a as s,o as i}from"./app-BQBjlK2G.js";const l={};function r(o,n){return i(),e("div",null,n[0]||(n[0]=[s(`<h1 id="linux安装nginx" tabindex="-1"><a class="header-anchor" href="#linux安装nginx"><span>Linux安装nginx</span></a></h1><h2 id="_1-安装步骤" tabindex="-1"><a class="header-anchor" href="#_1-安装步骤"><span>1. 安装步骤</span></a></h2><h3 id="_1-1-安装依赖包" tabindex="-1"><a class="header-anchor" href="#_1-1-安装依赖包"><span>1.1 安装依赖包</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>//一键安装上面四个依赖</span></span>
<span class="line"><span>yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel</span></span></code></pre></div><h3 id="_1-2-下载并解压安装包" tabindex="-1"><a class="header-anchor" href="#_1-2-下载并解压安装包"><span>1.2 下载并解压安装包</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>//下载tar包</span></span>
<span class="line"><span>wget http://nginx.org/download/nginx-1.16.1.tar.gz</span></span>
<span class="line"><span>tar -xvf nginx-1.16.1.tar.gz</span></span></code></pre></div><p>wget 下载的tar包版本可以通过<a href="https://nginx.org/en/download.html" target="_blank" rel="noopener noreferrer">nginx官网</a>查看</p><h3 id="_1-3-安装nginx" tabindex="-1"><a class="header-anchor" href="#_1-3-安装nginx"><span>1.3 安装nginx</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>//进入nginx目录</span></span>
<span class="line"><span>cd nginx-1.16.1</span></span>
<span class="line"><span>//执行命令</span></span>
<span class="line"><span>./configure</span></span>
<span class="line"><span>//执行make命令</span></span>
<span class="line"><span>make</span></span>
<span class="line"><span>//执行make install命令</span></span>
<span class="line"><span>make install</span></span></code></pre></div><p>安装完成会在/usr/local目录下出现nginx</p><ul><li>注：如果需要支持http需要加如上</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>./configure  --with-http_ssl_module</span></span></code></pre></div><h3 id="_1-4-配置nginx-conf" tabindex="-1"><a class="header-anchor" href="#_1-4-配置nginx-conf"><span>1.4 配置nginx.conf</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># 打开配置文件</span></span>
<span class="line"><span>vi /usr/local/nginx/conf/nginx.conf</span></span></code></pre></div><p>按需修改配置</p><p>如默认端口为80，可以修改成想要的地址</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>        listen       80;</span></span>
<span class="line"><span>        server_name  localhost;</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>        }</span></span></code></pre></div><h3 id="_1-5-启动nginx" tabindex="-1"><a class="header-anchor" href="#_1-5-启动nginx"><span>1.5 启动nginx</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>/usr/local/nginx/sbin/nginx -s reload</span></span></code></pre></div><p>查看nginx进程是否启动</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>ps -ef | grep nginx</span></span></code></pre></div><h3 id="_1-6-浏览器打开" tabindex="-1"><a class="header-anchor" href="#_1-6-浏览器打开"><span>1.6 浏览器打开</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231132548.png" alt="image-20190907221848439" tabindex="0" loading="lazy"><figcaption>image-20190907221848439</figcaption></figure><h2 id="_2-启动可能遇到的问题" tabindex="-1"><a class="header-anchor" href="#_2-启动可能遇到的问题"><span>2. 启动可能遇到的问题</span></a></h2><h3 id="_2-1-logs-文件夹目录没有" tabindex="-1"><a class="header-anchor" href="#_2-1-logs-文件夹目录没有"><span>2.1 logs 文件夹目录没有</span></a></h3><p>错误提示如下</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span> [alert] could not open error log file: open() &quot;/usr/local/nginx/logs/error.log&quot; failed (2: No such file or directory)</span></span></code></pre></div><p>解决方案：在提示的指定目录创建logs文件夹</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>mkdir logs</span></span></code></pre></div><h3 id="_2-2-nginx-pid-异常" tabindex="-1"><a class="header-anchor" href="#_2-2-nginx-pid-异常"><span>2.2 nginx.pid 异常</span></a></h3><p>错误提示如下</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span> [error] 21478#0: open() &quot;/usr/local/nginx/logs/nginx.pid&quot; failed (2: No such file or directory)</span></span></code></pre></div><p>解决方案：先设置配置文件</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf</span></span></code></pre></div><h3 id="_2-3-启动无反应-error-log-疯狂打印-worker-process-22327-exited-on-signal" tabindex="-1"><a class="header-anchor" href="#_2-3-启动无反应-error-log-疯狂打印-worker-process-22327-exited-on-signal"><span>2.3 启动无反应，error.log 疯狂打印 worker process 22327 exited on signal</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231132591.png" alt="image-20210115112252704" tabindex="0" loading="lazy"><figcaption>image-20210115112252704</figcaption></figure><p>因为nginx对fastdfs进行了代理,我们启动fdfs 即可恢复</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>/etc/init.d/fdfs_trackerd start</span></span></code></pre></div><h2 id="_3-nginx-命令" tabindex="-1"><a class="header-anchor" href="#_3-nginx-命令"><span>3. nginx 命令</span></a></h2><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>./nginx 启动</span></span>
<span class="line"><span></span></span>
<span class="line"><span>./nginx -s stop 关闭</span></span>
<span class="line"><span></span></span>
<span class="line"><span>./nginx -s reload 重启</span></span></code></pre></div><h2 id="_4-附录" tabindex="-1"><a class="header-anchor" href="#_4-附录"><span>4. 附录</span></a></h2><h3 id="_4-1-rpm-版本-nginx-部署" tabindex="-1"><a class="header-anchor" href="#_4-1-rpm-版本-nginx-部署"><span>4.1 rpm 版本 Nginx 部署</span></a></h3><ol><li><p>上传nginx对应版本的rpm</p></li><li><p>安装rpm</p><p>rpm -ivh nginx-1.16.1-1.el6.ngx.x86_64.rpm</p></li><li><p>启动nginx</p><p>service nginx start</p></li><li><p>创建前端存放文件夹</p><p>mkdir /usr/share/nginx/html/frontend</p></li><li><p>替换配置文件</p><p>替换覆盖nginx.conf 到/etc/nginx/目录下</p></li></ol><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.debugger.wiki/article/html/1575597633434520" target="_blank" rel="noopener noreferrer">nginx重启后，反向代理失败之问题排查记录</a></p>`,45)]))}const t=a(l,[["render",r],["__file","nginx-y-linux-install.html.vue"]]),c=JSON.parse('{"path":"/posts/MiddleWare/Nginx/nginx-y-linux-install.html","title":"Linux安装nginx","lang":"zh-CN","frontmatter":{"aliases":"Linux安装nginx","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:51","updated":"2024-04-23 11:42","description":"Linux安装nginx 1. 安装步骤 1.1 安装依赖包 1.2 下载并解压安装包 wget 下载的tar包版本可以通过nginx官网查看 1.3 安装nginx 安装完成会在/usr/local目录下出现nginx 注：如果需要支持http需要加如上 1.4 配置nginx.conf 按需修改配置 如默认端口为80，可以修改成想要的地址 1.5 ...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/MiddleWare/Nginx/nginx-y-linux-install.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Linux安装nginx"}],["meta",{"property":"og:description","content":"Linux安装nginx 1. 安装步骤 1.1 安装依赖包 1.2 下载并解压安装包 wget 下载的tar包版本可以通过nginx官网查看 1.3 安装nginx 安装完成会在/usr/local目录下出现nginx 注：如果需要支持http需要加如上 1.4 配置nginx.conf 按需修改配置 如默认端口为80，可以修改成想要的地址 1.5 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231132548.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux安装nginx\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231132548.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231132591.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 安装步骤","slug":"_1-安装步骤","link":"#_1-安装步骤","children":[{"level":3,"title":"1.1 安装依赖包","slug":"_1-1-安装依赖包","link":"#_1-1-安装依赖包","children":[]},{"level":3,"title":"1.2 下载并解压安装包","slug":"_1-2-下载并解压安装包","link":"#_1-2-下载并解压安装包","children":[]},{"level":3,"title":"1.3 安装nginx","slug":"_1-3-安装nginx","link":"#_1-3-安装nginx","children":[]},{"level":3,"title":"1.4 配置nginx.conf","slug":"_1-4-配置nginx-conf","link":"#_1-4-配置nginx-conf","children":[]},{"level":3,"title":"1.5 启动nginx","slug":"_1-5-启动nginx","link":"#_1-5-启动nginx","children":[]},{"level":3,"title":"1.6 浏览器打开","slug":"_1-6-浏览器打开","link":"#_1-6-浏览器打开","children":[]}]},{"level":2,"title":"2. 启动可能遇到的问题","slug":"_2-启动可能遇到的问题","link":"#_2-启动可能遇到的问题","children":[{"level":3,"title":"2.1 logs 文件夹目录没有","slug":"_2-1-logs-文件夹目录没有","link":"#_2-1-logs-文件夹目录没有","children":[]},{"level":3,"title":"2.2 nginx.pid 异常","slug":"_2-2-nginx-pid-异常","link":"#_2-2-nginx-pid-异常","children":[]},{"level":3,"title":"2.3 启动无反应，error.log 疯狂打印 worker process 22327 exited on signal","slug":"_2-3-启动无反应-error-log-疯狂打印-worker-process-22327-exited-on-signal","link":"#_2-3-启动无反应-error-log-疯狂打印-worker-process-22327-exited-on-signal","children":[]}]},{"level":2,"title":"3. nginx 命令","slug":"_3-nginx-命令","link":"#_3-nginx-命令","children":[]},{"level":2,"title":"4. 附录","slug":"_4-附录","link":"#_4-附录","children":[{"level":3,"title":"4.1 rpm 版本 Nginx 部署","slug":"_4-1-rpm-版本-nginx-部署","link":"#_4-1-rpm-版本-nginx-部署","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.59,"words":478},"filePathRelative":"posts/MiddleWare/Nginx/nginx-y-linux-install.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 安装步骤</h2>\\n<h3>1.1 安装依赖包</h3>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>//一键安装上面四个依赖</span></span>\\n<span class=\\"line\\"><span>yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel</span></span></code></pre>\\n</div>","autoDesc":true}');export{t as comp,c as data};
