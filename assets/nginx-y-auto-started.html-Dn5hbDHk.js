import{_ as a,c as s,a as n,o as i}from"./app-BfIe-EZg.js";const t={};function r(c,e){return i(),s("div",null,e[0]||(e[0]=[n(`<h1 id="nginx设置开机自启动" tabindex="-1"><a class="header-anchor" href="#nginx设置开机自启动"><span>nginx设置开机自启动</span></a></h1><blockquote><p>centos 7开机自启动有两种不同的设置方式，如果是yum直接安装的软件服务，则直接开启即可，如果是源码编译安装的，则需要在系统服务（system）创建service文件，然后才能设置。</p></blockquote><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言"><span>1. 前言</span></a></h2><p>centos 7以上是用Systemd进行系统初始化的，Systemd 是 Linux 系统中最新的初始化系统（init），它主要的设计目标是克服 sysvinit 固有的缺点，提高系统的启动速度。</p><h2 id="_2-安装方式为-yum直接安装nginx服务" tabindex="-1"><a class="header-anchor" href="#_2-安装方式为-yum直接安装nginx服务"><span>2. 安装方式为：yum直接安装Nginx服务</span></a></h2><p>Systemd服务文件以<code>.service</code>结尾，比如现在要建立nginx为开机启动，如果用<code>yum install</code>命令安装的，yum命令会自动创建<code>nginx.service</code>文件，直接用命令:</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">systemcel</span><span style="color:#98C379;--shiki-dark:#98C379;"> enable</span><span style="color:#98C379;--shiki-dark:#98C379;"> nginx.service</span></span></code></pre></div><h2 id="_3-安装方式为-源码编译安装" tabindex="-1"><a class="header-anchor" href="#_3-安装方式为-源码编译安装"><span>3.安装方式为： 源码编译安装</span></a></h2><p>在这里我是用源码编译安装的，所以要手动创建<code>nginx.service</code>服务文件。开机没有登陆情况下就能运行的程序，存在系统服务（system）里，即：</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">/lib/systemd/system/</span></span></code></pre></div><h3 id="_3-1-创建nginx-service文件" tabindex="-1"><a class="header-anchor" href="#_3-1-创建nginx-service文件"><span>3.1 创建nginx.service文件</span></a></h3><p>在系统服务目录里创建nginx.service文件</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>vim /lib/systemd/system/nginx.service</span></span></code></pre></div><p>写入内容如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=nginx</span></span>
<span class="line"><span>After=network.target</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type=forking</span></span>
<span class="line"><span>ExecStart=/usr/local/nginx/sbin/nginx</span></span>
<span class="line"><span>ExecReload=/usr/local/nginx/sbin/nginx -s reload</span></span>
<span class="line"><span>ExecStop=/usr/local/nginx/sbin/nginx -s quit</span></span>
<span class="line"><span>PrivateTmp=true</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span></code></pre></div><p><strong>[Unit]:服务的说明</strong></p><p>Description:描述服务<br> After:描述服务类别<br> [Service]服务运行参数的设置<br> Type=forking是后台运行的形式<br> ExecStart为服务的具体运行命令<br> ExecReload为重启命令<br> ExecStop为停止命令<br> PrivateTmp=True表示给服务分配独立的临时空间<br> 注意：[Service]的启动、重启、停止命令全部要求使用绝对路径<br> [Install]运行级别下服务安装的相关设置，可设置为多用户，即系统运行级别为3</p><h3 id="_3-2-设置开机启动" tabindex="-1"><a class="header-anchor" href="#_3-2-设置开机启动"><span>3.2 设置开机启动</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>systemctl enable nginx.service</span></span></code></pre></div><h3 id="_3-3-查看nginx状态" tabindex="-1"><a class="header-anchor" href="#_3-3-查看nginx状态"><span>3.3 查看nginx状态</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>systemctl status nginx.service</span></span></code></pre></div><h3 id="_3-4-其他命令" tabindex="-1"><a class="header-anchor" href="#_3-4-其他命令"><span>3.4 其他命令</span></a></h3><p>启动nginx服务</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>systemctl start nginx.service</span></span></code></pre></div><p>设置开机自启动</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>systemctl enable nginx.service</span></span></code></pre></div><p>停止开机自启动</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>systemctl disable nginx.service</span></span></code></pre></div><p>查看服务当前状态</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>systemctl status nginx.service</span></span></code></pre></div><p>重新启动服务</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>systemctl status nginx.service</span></span></code></pre></div><p>查看所有已启动的服务</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>systemctl list-units --type=service</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://segmentfault.com/a/1190000022665540" target="_blank" rel="noopener noreferrer">CentOS7.5 设置 Nginx 开机自启动</a></p>`,36)]))}const l=a(t,[["render",r],["__file","nginx-y-auto-started.html.vue"]]),p=JSON.parse('{"path":"/posts/MiddleWare/Nginx/nginx-y-auto-started.html","title":"nginx设置开机自启动","lang":"zh-CN","frontmatter":{"description":"nginx设置开机自启动 centos 7开机自启动有两种不同的设置方式，如果是yum直接安装的软件服务，则直接开启即可，如果是源码编译安装的，则需要在系统服务（system）创建service文件，然后才能设置。 1. 前言 centos 7以上是用Systemd进行系统初始化的，Systemd 是 Linux 系统中最新的初始化系统（init），它...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/MiddleWare/Nginx/nginx-y-auto-started.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"nginx设置开机自启动"}],["meta",{"property":"og:description","content":"nginx设置开机自启动 centos 7开机自启动有两种不同的设置方式，如果是yum直接安装的软件服务，则直接开启即可，如果是源码编译安装的，则需要在系统服务（system）创建service文件，然后才能设置。 1. 前言 centos 7以上是用Systemd进行系统初始化的，Systemd 是 Linux 系统中最新的初始化系统（init），它..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nginx设置开机自启动\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1.  前言","slug":"_1-前言","link":"#_1-前言","children":[]},{"level":2,"title":"2. 安装方式为：yum直接安装Nginx服务","slug":"_2-安装方式为-yum直接安装nginx服务","link":"#_2-安装方式为-yum直接安装nginx服务","children":[]},{"level":2,"title":"3.安装方式为： 源码编译安装","slug":"_3-安装方式为-源码编译安装","link":"#_3-安装方式为-源码编译安装","children":[{"level":3,"title":"3.1 创建nginx.service文件","slug":"_3-1-创建nginx-service文件","link":"#_3-1-创建nginx-service文件","children":[]},{"level":3,"title":"3.2 设置开机启动","slug":"_3-2-设置开机启动","link":"#_3-2-设置开机启动","children":[]},{"level":3,"title":"3.3 查看nginx状态","slug":"_3-3-查看nginx状态","link":"#_3-3-查看nginx状态","children":[]},{"level":3,"title":"3.4 其他命令","slug":"_3-4-其他命令","link":"#_3-4-其他命令","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.82,"words":547},"filePathRelative":"posts/MiddleWare/Nginx/nginx-y-auto-started.md","localizedDate":"2024年10月28日","excerpt":"\\n<blockquote>\\n<p>centos 7开机自启动有两种不同的设置方式，如果是yum直接安装的软件服务，则直接开启即可，如果是源码编译安装的，则需要在系统服务（system）创建service文件，然后才能设置。</p>\\n</blockquote>\\n<h2>1.  前言</h2>\\n<p>centos 7以上是用Systemd进行系统初始化的，Systemd 是 Linux 系统中最新的初始化系统（init），它主要的设计目标是克服 sysvinit 固有的缺点，提高系统的启动速度。</p>\\n<h2>2. 安装方式为：yum直接安装Nginx服务</h2>\\n<p>Systemd服务文件以<code>.service</code>结尾，比如现在要建立nginx为开机启动，如果用<code>yum install</code>命令安装的，yum命令会自动创建<code>nginx.service</code>文件，直接用命令:</p>","autoDesc":true}');export{l as comp,p as data};
