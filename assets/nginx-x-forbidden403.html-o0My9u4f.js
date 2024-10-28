import{_ as a,c as e,a as s,o as i}from"./app-BQBjlK2G.js";const o={};function r(p,n){return i(),e("div",null,n[0]||(n[0]=[s(`<h1 id="四种解决nginx出现403-forbidden-报错的方法" tabindex="-1"><a class="header-anchor" href="#四种解决nginx出现403-forbidden-报错的方法"><span>四种解决Nginx出现403 forbidden 报错的方法</span></a></h1><h2 id="_1-背景-访问时报403" tabindex="-1"><a class="header-anchor" href="#_1-背景-访问时报403"><span>1.背景：访问时报403</span></a></h2><p>nginx 访问静态资源文件提示</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231128565.png" alt="image-20190908163131411" tabindex="0" loading="lazy"><figcaption>image-20190908163131411</figcaption></figure><p>于是查看nginx日志，路径为/var/log/nginx/error.log。打开日志发现报错Permission denied，详细报错如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>2021/08/31 16:06:44 [error] 32713#32713: *5 open() &quot;/home/faduit/data/upload//blYctsOfficialSealController20210831152014.png&quot; failed (13: Permission denied), client: 10.8.0.23, server: 192.168.134.3, request: &quot;GET /upload/blYctsOfficialSealController20210831152014.png HTTP/1.1&quot;, host: &quot;192.168.134.3&quot;</span></span></code></pre></div><h2 id="_2-解决方式" tabindex="-1"><a class="header-anchor" href="#_2-解决方式"><span>2. 解决方式</span></a></h2><h3 id="_2-1-方式1-由于启动用户和nginx工作用户不一致所致" tabindex="-1"><a class="header-anchor" href="#_2-1-方式1-由于启动用户和nginx工作用户不一致所致"><span>2.1 方式1：<strong>由于启动用户和nginx工作用户不一致所致</strong></span></a></h3><ol><li><p>查看nginx启动的用户</p><p>发现是nobody，而为是用root启动的</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span> ps axu|grep &#39;nginx&#39;</span></span></code></pre></div><p>out</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>nobody      4936  0.0  0.0  45864  1176 ?        Ss   8月17   0:00 nginx: master process /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf</span></span></code></pre></div></li><li><p>将nginx.config的user改为和启动用户一致</p><p>命令：vi conf/nginx.conf</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span> #user nobody;</span></span>
<span class="line"><span> user root;</span></span></code></pre></div></li></ol><h3 id="_2-2-方式2-权限问题-如果nginx没有web目录的操作权限-也会出现403错误。" tabindex="-1"><a class="header-anchor" href="#_2-2-方式2-权限问题-如果nginx没有web目录的操作权限-也会出现403错误。"><span>2.2 方式2：权限问题，如果nginx没有web目录的操作权限，也会出现403错误。</span></a></h3><p>解决办法：修改web目录的读写权限，或者是把nginx的启动用户改成目录的所属用户，重启Nginx即可解决</p><ol><li>chmod -R 777 /data</li><li>chmod -R 777 /data/www/</li></ol><h4 id="_2-3-方式3-缺少index-html或者index-php文件-就是配置文件中index-index-html-index-htm这行中的指定的文件。" tabindex="-1"><a class="header-anchor" href="#_2-3-方式3-缺少index-html或者index-php文件-就是配置文件中index-index-html-index-htm这行中的指定的文件。"><span>2.3 方式3：<strong>缺少index.html或者index.php文件，就是配置文件中index index.html index.htm这行中的指定的文件。</strong></span></a></h4><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   listen 80;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  server_name localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  index index.php index.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  root /data/www/;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果把它当做文件目录，要列出文件目录</p><p>添加: autoindex on;</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># 文件服务器</span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       80;</span></span>
<span class="line"><span>        server_name  file.isture.com;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            root   /home/ftpuser/file;</span></span>
<span class="line"><span>            autoindex on;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="_2-4-方式4-selinux设置为开启状态-enabled-的原因。" tabindex="-1"><a class="header-anchor" href="#_2-4-方式4-selinux设置为开启状态-enabled-的原因。"><span>2.4 方式4：<strong>SELinux设置为开启状态（enabled）的原因。</strong></span></a></h3><p>查看当前selinux的状态。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>/usr/sbin/sestatus</span></span></code></pre></div><p>将SELINUX=enforcing 修改为 SELINUX=disabled 状态。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>vi /etc/selinux/config</span></span></code></pre></div><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>#SELINUX=enforcing</span></span>
<span class="line"><span></span></span>
<span class="line"><span> SELINUX=disabled</span></span></code></pre></div><p>重启生效。reboot。</p><hr><p>不想重启的可以使用临时关闭</p><p>临时关闭（不用重启机器）：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>setenforce 0          ##设置SELinux 成为permissive模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span> \\##setenforce 1 设置SELinux 成为enforcing模式</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.51cto.com/bguncle/957315" target="_blank" rel="noopener noreferrer">查看 SELinux状态及关闭SELinux</a></p><p><a href="https://blog.csdn.net/shadow_zed/article/details/106853355" target="_blank" rel="noopener noreferrer">四种解决Nginx出现403 forbidden 报错的方法</a></p>`,31)]))}const t=a(o,[["render",r],["__file","nginx-x-forbidden403.html.vue"]]),d=JSON.parse('{"path":"/posts/MiddleWare/Nginx/nginx-x-forbidden403.html","title":"四种解决Nginx出现403 forbidden 报错的方法","lang":"zh-CN","frontmatter":{"aliases":"四种解决Nginx出现403 forbidden 报错的方法","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:51","updated":"2024-04-23 11:28","description":"四种解决Nginx出现403 forbidden 报错的方法 1.背景：访问时报403 nginx 访问静态资源文件提示 image-20190908163131411image-20190908163131411 于是查看nginx日志，路径为/var/log/nginx/error.log。打开日志发现报错Permission denied，详细报...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/MiddleWare/Nginx/nginx-x-forbidden403.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"四种解决Nginx出现403 forbidden 报错的方法"}],["meta",{"property":"og:description","content":"四种解决Nginx出现403 forbidden 报错的方法 1.背景：访问时报403 nginx 访问静态资源文件提示 image-20190908163131411image-20190908163131411 于是查看nginx日志，路径为/var/log/nginx/error.log。打开日志发现报错Permission denied，详细报..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231128565.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"四种解决Nginx出现403 forbidden 报错的方法\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231128565.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1.背景：访问时报403","slug":"_1-背景-访问时报403","link":"#_1-背景-访问时报403","children":[]},{"level":2,"title":"2. 解决方式","slug":"_2-解决方式","link":"#_2-解决方式","children":[{"level":3,"title":"2.1 方式1：由于启动用户和nginx工作用户不一致所致","slug":"_2-1-方式1-由于启动用户和nginx工作用户不一致所致","link":"#_2-1-方式1-由于启动用户和nginx工作用户不一致所致","children":[]},{"level":3,"title":"2.2 方式2：权限问题，如果nginx没有web目录的操作权限，也会出现403错误。","slug":"_2-2-方式2-权限问题-如果nginx没有web目录的操作权限-也会出现403错误。","link":"#_2-2-方式2-权限问题-如果nginx没有web目录的操作权限-也会出现403错误。","children":[]},{"level":3,"title":"2.4 方式4：SELinux设置为开启状态（enabled）的原因。","slug":"_2-4-方式4-selinux设置为开启状态-enabled-的原因。","link":"#_2-4-方式4-selinux设置为开启状态-enabled-的原因。","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.62,"words":486},"filePathRelative":"posts/MiddleWare/Nginx/nginx-x-forbidden403.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1.背景：访问时报403</h2>\\n<p>nginx 访问静态资源文件提示</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231128565.png\\" alt=\\"image-20190908163131411\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20190908163131411</figcaption></figure>\\n<p>于是查看nginx日志，路径为/var/log/nginx/error.log。打开日志发现报错Permission denied，详细报错如下：</p>","autoDesc":true}');export{t as comp,d as data};
