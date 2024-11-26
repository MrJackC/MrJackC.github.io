import{_ as a,c as e,a as r,o as i}from"./app-JRvFIbSa.js";const l={};function t(o,s){return i(),e("div",null,s[0]||(s[0]=[r(`<h1 id="安装rabbitmq" tabindex="-1"><a class="header-anchor" href="#安装rabbitmq"><span>安装RabbitMq</span></a></h1><ul><li>注意: 请使用资料里提供的CentOS-7-x86_64-DVD-1810.iso 安装虚拟机.</li></ul><h2 id="_1-安装依赖环境" tabindex="-1"><a class="header-anchor" href="#_1-安装依赖环境"><span>1. 安装依赖环境</span></a></h2><p>在线安装依赖环境：</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">yum</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> build-essential</span><span style="color:#98C379;--shiki-dark:#98C379;"> openssl</span><span style="color:#98C379;--shiki-dark:#98C379;"> openssl-devel</span><span style="color:#98C379;--shiki-dark:#98C379;"> unixODBC</span><span style="color:#98C379;--shiki-dark:#98C379;"> unixODBC-devel</span><span style="color:#98C379;--shiki-dark:#98C379;"> make</span><span style="color:#98C379;--shiki-dark:#98C379;"> gcc</span><span style="color:#98C379;--shiki-dark:#98C379;"> gcc-c++</span><span style="color:#98C379;--shiki-dark:#98C379;"> kernel-devel</span><span style="color:#98C379;--shiki-dark:#98C379;"> m4</span><span style="color:#98C379;--shiki-dark:#98C379;"> ncurses-devel</span><span style="color:#98C379;--shiki-dark:#98C379;"> tk</span><span style="color:#98C379;--shiki-dark:#98C379;"> tc</span><span style="color:#98C379;--shiki-dark:#98C379;"> xz</span></span></code></pre></div><h2 id="_2-安装erlang" tabindex="-1"><a class="header-anchor" href="#_2-安装erlang"><span>2. 安装Erlang</span></a></h2><p>上传</p><p>erlang-18.3-1.el7.centos.x86_64.rpm<br> socat-1.7.3.2-5.el7.lux.x86_64.rpm<br> rabbitmq-server-3.6.5-1.noarch.rpm</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rpm</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -ivh</span><span style="color:#98C379;--shiki-dark:#98C379;"> erlang-18.3-1.el7.centos.x86_64.rpm</span></span></code></pre></div><p>如果出现如下错误</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410111538189.png" alt="1565526174751" tabindex="0" loading="lazy"><figcaption>1565526174751</figcaption></figure><p>说明gblic 版本太低。我们可以查看当前机器的gblic 版本</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">strings</span><span style="color:#98C379;--shiki-dark:#98C379;"> /lib64/libc.so.6</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> | </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#98C379;--shiki-dark:#98C379;"> GLIBC</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410111538249.png" alt="1565526264426" tabindex="0" loading="lazy"><figcaption>1565526264426</figcaption></figure><p>当前最高版本2.12，需要2.15.所以需要升级glibc</p><ul><li><p>使用yum更新安装依赖</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sudo</span><span style="color:#98C379;--shiki-dark:#98C379;"> yum</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> zlib-devel</span><span style="color:#98C379;--shiki-dark:#98C379;"> bzip2-devel</span><span style="color:#98C379;--shiki-dark:#98C379;"> openssl-devel</span><span style="color:#98C379;--shiki-dark:#98C379;"> ncurses-devel</span><span style="color:#98C379;--shiki-dark:#98C379;"> sqlite-devel</span><span style="color:#98C379;--shiki-dark:#98C379;"> readline-devel</span><span style="color:#98C379;--shiki-dark:#98C379;"> tk-devel</span><span style="color:#98C379;--shiki-dark:#98C379;"> gcc</span><span style="color:#98C379;--shiki-dark:#98C379;"> make</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -y</span></span></code></pre></div></li><li><p>下载rpm包</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"></span></code></pre></div></li></ul><p>wget <a href="http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-utils-2.17-55.el6.x86_64.rpm" target="_blank" rel="noopener noreferrer">http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-utils-2.17-55.el6.x86_64.rpm</a> &amp;<br> wget <a href="http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-static-2.17-55.el6.x86_64.rpm" target="_blank" rel="noopener noreferrer">http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-static-2.17-55.el6.x86_64.rpm</a> &amp;<br> wget <a href="http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-2.17-55.el6.x86_64.rpm" target="_blank" rel="noopener noreferrer">http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-2.17-55.el6.x86_64.rpm</a> &amp;<br> wget <a href="http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-common-2.17-55.el6.x86_64.rpm" target="_blank" rel="noopener noreferrer">http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-common-2.17-55.el6.x86_64.rpm</a> &amp;<br> wget <a href="http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-devel-2.17-55.el6.x86_64.rpm" target="_blank" rel="noopener noreferrer">http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-devel-2.17-55.el6.x86_64.rpm</a> &amp;<br> wget <a href="http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-headers-2.17-55.el6.x86_64.rpm" target="_blank" rel="noopener noreferrer">http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-headers-2.17-55.el6.x86_64.rpm</a> &amp;<br> wget <a href="http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/nscd-2.17-55.el6.x86_64.rpm" target="_blank" rel="noopener noreferrer">http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/nscd-2.17-55.el6.x86_64.rpm</a> &amp;<br> \`\`\`</p><ul><li><p>安装rpm包</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sudo</span><span style="color:#98C379;--shiki-dark:#98C379;"> rpm</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -Uvh</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> *</span><span style="color:#98C379;--shiki-dark:#98C379;">-2.17-55.el6.x86_64.rpm</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --force</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --nodeps</span></span></code></pre></div></li><li><p>安装完毕后再查看glibc版本,发现glibc版本已经到2.17了</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">strings</span><span style="color:#98C379;--shiki-dark:#98C379;"> /lib64/libc.so.6</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> | </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#98C379;--shiki-dark:#98C379;"> GLIBC</span></span></code></pre></div></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410111538292.png" alt="1565528746057" tabindex="0" loading="lazy"><figcaption>1565528746057</figcaption></figure><h2 id="_3-安装rabbitmq" tabindex="-1"><a class="header-anchor" href="#_3-安装rabbitmq"><span>3. 安装RabbitMQ</span></a></h2><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rpm</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -ivh</span><span style="color:#98C379;--shiki-dark:#98C379;"> socat-1.7.3.2-5.el7.lux.x86_64.rpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rpm</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -ivh</span><span style="color:#98C379;--shiki-dark:#98C379;"> rabbitmq-server-3.6.5-1.noarch.rpm</span></span></code></pre></div><h2 id="_4-开启管理界面及配置" tabindex="-1"><a class="header-anchor" href="#_4-开启管理界面及配置"><span>4. 开启管理界面及配置</span></a></h2><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 开启管理界面</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rabbitmq-plugins</span><span style="color:#98C379;--shiki-dark:#98C379;"> enable</span><span style="color:#98C379;--shiki-dark:#98C379;"> rabbitmq_management</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 修改默认配置信息</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">vim</span><span style="color:#98C379;--shiki-dark:#98C379;"> /usr/lib/rabbitmq/lib/rabbitmq_server-3.6.5/ebin/rabbit.app</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 比如修改密码、配置等等，例如：loopback_users 中的 &lt;&lt;&quot;guest&quot;&gt;&gt;,只保留guest</span></span></code></pre></div><h2 id="_5-启动" tabindex="-1"><a class="header-anchor" href="#_5-启动"><span>5. 启动</span></a></h2><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">service</span><span style="color:#98C379;--shiki-dark:#98C379;"> rabbitmq-server</span><span style="color:#98C379;--shiki-dark:#98C379;"> start</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 启动服务</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">service</span><span style="color:#98C379;--shiki-dark:#98C379;"> rabbitmq-server</span><span style="color:#98C379;--shiki-dark:#98C379;"> stop</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 停止服务</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">service</span><span style="color:#98C379;--shiki-dark:#98C379;"> rabbitmq-server</span><span style="color:#98C379;--shiki-dark:#98C379;"> restart</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 重启服务</span></span></code></pre></div><ul><li>设置配置文件</li></ul><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">cd</span><span style="color:#98C379;--shiki-dark:#98C379;"> /usr/share/doc/rabbitmq-server-3.6.5/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cp</span><span style="color:#98C379;--shiki-dark:#98C379;"> rabbitmq.config.example</span><span style="color:#98C379;--shiki-dark:#98C379;"> /etc/rabbitmq/rabbitmq.config</span></span></code></pre></div><h2 id="_6-配置虚拟主机及用户" tabindex="-1"><a class="header-anchor" href="#_6-配置虚拟主机及用户"><span>6. 配置虚拟主机及用户</span></a></h2><h3 id="_6-1-用户角色" tabindex="-1"><a class="header-anchor" href="#_6-1-用户角色"><span>6.1. 用户角色</span></a></h3><p>RabbitMQ在安装好后，可以访问<code>http://ip地址:15672</code> ；其自带了guest/guest的用户名和密码；如果需要创建自定义用户；那么也可以登录管理界面后，如下操作：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410111538335.png" alt="1565098043833" tabindex="0" loading="lazy"><figcaption>1565098043833</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410111538375.png" alt="1565098315375" tabindex="0" loading="lazy"><figcaption>1565098315375</figcaption></figure><p><strong>角色说明</strong>：</p><p>1、 超级管理员(administrator)</p><p>可登陆管理控制台，可查看所有的信息，并且可以对用户，策略(policy)进行操作。</p><p>2、 监控者(monitoring)</p><p>可登陆管理控制台，同时可以查看rabbitmq节点的相关信息(进程数，内存使用情况，磁盘使用情况等)</p><p>3、 策略制定者(policymaker)</p><p>可登陆管理控制台, 同时可以对policy进行管理。但无法查看节点的相关信息(上图红框标识的部分)。</p><p>4、 普通管理者(management)</p><p>仅可登陆管理控制台，无法看到节点信息，也无法对策略进行管理。</p><p>5、 其他</p><p>无法登陆管理控制台，通常就是普通的生产者和消费者。</p><h3 id="_6-2-virtual-hosts配置" tabindex="-1"><a class="header-anchor" href="#_6-2-virtual-hosts配置"><span>6.2. Virtual Hosts配置</span></a></h3><p>像mysql拥有数据库的概念并且可以指定用户对库和表等操作的权限。RabbitMQ也有类似的权限管理；在RabbitMQ中可以虚拟消息服务器Virtual Host，每个Virtual Hosts相当于一个相对独立的RabbitMQ服务器，每个VirtualHost之间是相互隔离的。exchange、queue、message不能互通。 相当于mysql的db。Virtual Name一般以/开头。</p><h4 id="_6-2-1-创建virtual-hosts" tabindex="-1"><a class="header-anchor" href="#_6-2-1-创建virtual-hosts"><span>6.2.1. 创建Virtual Hosts</span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410111538430.png" alt="1565098496482" tabindex="0" loading="lazy"><figcaption>1565098496482</figcaption></figure><h4 id="_6-2-2-设置virtual-hosts权限" tabindex="-1"><a class="header-anchor" href="#_6-2-2-设置virtual-hosts权限"><span>6.2.2. 设置Virtual Hosts权限</span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410111538479.png" alt="1565098585317" tabindex="0" loading="lazy"><figcaption>1565098585317</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410111538516.png" alt="1565098719054" tabindex="0" loading="lazy"><figcaption>1565098719054</figcaption></figure>`,50)]))}const p=a(l,[["render",t],["__file","RabbitMQ安装说明文档.html.vue"]]),c=JSON.parse('{"path":"/posts/MiddleWare/MQ_Rabbitmq/RabbitMQ%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E%E6%96%87%E6%A1%A3.html","title":"安装RabbitMq","lang":"zh-CN","frontmatter":{"created":"2022-09-30 17:46","updated":"2024-10-11 15:38","description":"安装RabbitMq 注意: 请使用资料里提供的CentOS-7-x86_64-DVD-1810.iso 安装虚拟机. 1. 安装依赖环境 在线安装依赖环境： 2. 安装Erlang 上传 erlang-18.3-1.el7.centos.x86_64.rpm socat-1.7.3.2-5.el7.lux.x86_64.rpm rabbitmq-se...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/MiddleWare/MQ_Rabbitmq/RabbitMQ%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E%E6%96%87%E6%A1%A3.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"安装RabbitMq"}],["meta",{"property":"og:description","content":"安装RabbitMq 注意: 请使用资料里提供的CentOS-7-x86_64-DVD-1810.iso 安装虚拟机. 1. 安装依赖环境 在线安装依赖环境： 2. 安装Erlang 上传 erlang-18.3-1.el7.centos.x86_64.rpm socat-1.7.3.2-5.el7.lux.x86_64.rpm rabbitmq-se..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410111538189.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装RabbitMq\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410111538189.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410111538249.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410111538292.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410111538335.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410111538375.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410111538430.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410111538479.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410111538516.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 安装依赖环境","slug":"_1-安装依赖环境","link":"#_1-安装依赖环境","children":[]},{"level":2,"title":"2. 安装Erlang","slug":"_2-安装erlang","link":"#_2-安装erlang","children":[]},{"level":2,"title":"3. 安装RabbitMQ","slug":"_3-安装rabbitmq","link":"#_3-安装rabbitmq","children":[]},{"level":2,"title":"4. 开启管理界面及配置","slug":"_4-开启管理界面及配置","link":"#_4-开启管理界面及配置","children":[]},{"level":2,"title":"5. 启动","slug":"_5-启动","link":"#_5-启动","children":[]},{"level":2,"title":"6. 配置虚拟主机及用户","slug":"_6-配置虚拟主机及用户","link":"#_6-配置虚拟主机及用户","children":[{"level":3,"title":"6.1. 用户角色","slug":"_6-1-用户角色","link":"#_6-1-用户角色","children":[]},{"level":3,"title":"6.2. Virtual Hosts配置","slug":"_6-2-virtual-hosts配置","link":"#_6-2-virtual-hosts配置","children":[]}]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.74,"words":821},"filePathRelative":"posts/MiddleWare/MQ_Rabbitmq/RabbitMQ安装说明文档.md","localizedDate":"2024年10月28日","excerpt":"\\n<ul>\\n<li>注意: 请使用资料里提供的CentOS-7-x86_64-DVD-1810.iso 安装虚拟机.</li>\\n</ul>\\n<h2>1. 安装依赖环境</h2>\\n<p>在线安装依赖环境：</p>\\n<div class=\\"language-shell\\" data-ext=\\"shell\\" data-title=\\"shell\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">yum</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> install</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> build-essential</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> openssl</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> openssl-devel</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> unixODBC</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> unixODBC-devel</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> make</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> gcc</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> gcc-c++</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> kernel-devel</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> m4</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> ncurses-devel</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> tk</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> tc</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> xz</span></span></code></pre>\\n</div>","autoDesc":true}');export{p as comp,c as data};
