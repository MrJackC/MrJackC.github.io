import{_ as a,c as t,a as n,o as e}from"./app-DQS7qcOs.js";const i={};function l(o,s){return e(),t("div",null,s[0]||(s[0]=[n(`<h1 id="安装ftp服务" tabindex="-1"><a class="header-anchor" href="#安装ftp服务"><span>安装FTP服务</span></a></h1><h2 id="_1-安装vsftpd" tabindex="-1"><a class="header-anchor" href="#_1-安装vsftpd"><span>1.安装vsftpd</span></a></h2><p>安装前先查看ftp 是否已经安装，使用yum 安装</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>vsftpd -v</span></span>
<span class="line"><span>yum -y install vsftpd</span></span></code></pre></div><h2 id="_2-修改配置文件" tabindex="-1"><a class="header-anchor" href="#_2-修改配置文件"><span>2. 修改配置文件</span></a></h2><p>根据自己的需求，修改ftp配置文件<code>/etc/vsftpd/vsftpd.conf</code></p><div class="language-nginx" data-ext="nginx" data-title="nginx"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">anonymous_enable=</span><span style="color:#C678DD;--shiki-dark:#C678DD;">NO</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 是否允许匿名访问</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">local_enable=</span><span style="color:#C678DD;--shiki-dark:#C678DD;">YES</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 是否允许使用本地帐户进行 FTP 用户登录验证</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">local_umask=</span><span style="color:#C678DD;--shiki-dark:#C678DD;">022</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 设置本地用户默认文件掩码022</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">chroot_local_user=</span><span style="color:#C678DD;--shiki-dark:#C678DD;">YES</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   # 是否限定用户在其主目录下（NO 表示允许切换到上级目录）</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#chroot_list_enable=YES # 是否启用限制用户的名单（注释掉为禁用）</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">chroot_list_file=/</span><span style="color:#D19A66;--shiki-dark:#D19A66;">etc/vsftpd</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/chroot_list </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 用户列表文件（一行一个用户）</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">allow_writeable_chroot=YES </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 如果启用了限定用户在其主目录下需要添加这个配置，解决报错 500 OOPS: vsftpd: refusing to run with writable root inside chroot()</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">xferlog_enable=YES     </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 启用上传和下载的日志功能，默认开启。</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">use_localtime=YES     </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 是否使用本地时(自行添加)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">userlist_enable=YES</span></span></code></pre></div><p>chroot_local_user 与 chroot_list_enable 的组合效果如下：</p><table><thead><tr><th></th><th>chroot_local_user=YES</th><th>chroot_local_user=NO</th></tr></thead><tbody><tr><td>chroot_list_enable=YES</td><td>1. 所有用户都被限制在其主目录下 2. 使用 chroot_list_file 指定的用户列表，这些用户作为“例外”，不受限制</td><td>1. 所有用户都不被限制其主目录下 2. 使用 chroot_list_file 指定的用户列表，这些用户作为“例外”，受到限制</td></tr><tr><td>chroot_list_enable=NO</td><td>1. 所有用户都被限制在其主目录下 2. 不使用 chroot_list_file 指定的用户列表，没有任何“例外”用户</td><td>1. 所有用户都不被限制其主目录下 2. 不使用 chroot_list_file 指定的用户列表，没有任何“例外”用户</td></tr></tbody></table><blockquote><p>注意：如果设置了 local_enable=YES ，自带</p></blockquote><h2 id="_3-启动ftp服务" tabindex="-1"><a class="header-anchor" href="#_3-启动ftp服务"><span>3. 启动ftp服务</span></a></h2><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>systemctl start vsftpd</span></span></code></pre></div><h2 id="_4-用户管理" tabindex="-1"><a class="header-anchor" href="#_4-用户管理"><span>4. 用户管理</span></a></h2><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># 使用useradd 命令添加一个用户</span></span>
<span class="line"><span>useradd ftpuser</span></span>
<span class="line"><span># 设置用户密码</span></span>
<span class="line"><span>passwd ftpuser</span></span></code></pre></div><h2 id="_5-主动模式和被动模式" tabindex="-1"><a class="header-anchor" href="#_5-主动模式和被动模式"><span>5. 主动模式和被动模式</span></a></h2><p>ftp 的主动模式（Port 模式）与被动模式（PASV 模式）的区别：<a href="https://link.jianshu.com/?t=https%3A%2F%2Fwww.cnblogs.com%2Fxiaohh%2Fp%2F4789813.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/xiaohh/p/4789813.html</a><br> 本文推荐使用<strong>被动模式</strong>，vsftp 默认即为被动模式</p><ul><li>开启被动模式（PASV）</li></ul><p>在 <code>/etc/vsftpd/vsftpd.conf</code> 配置文件添加如下配置</p><div class="language-nginx" data-ext="nginx" data-title="nginx"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">pasv_enable=</span><span style="color:#C678DD;--shiki-dark:#C678DD;">YES</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 是否允许数据传输时使用PASV模式（默认值为 YES）</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">pasv_min_port=</span><span style="color:#C678DD;--shiki-dark:#C678DD;">port</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> port_number </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># PASV 模式下，数据传输使用的端口下界（0 表示任意。默认值为 0）把端口范围设在比较高的一段范围内，比如 50000-60000，将有助于安全性的提高.</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">pasv_max_port=</span><span style="color:#C678DD;--shiki-dark:#C678DD;">port_number</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # PASV 模式下，数据传输使用的端口上界（0 表示任意。默认值为 0）</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">pasv_promiscuous=</span><span style="color:#C678DD;--shiki-dark:#C678DD;">NO</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 是否屏蔽对 PASV 进行安全检查，默认值为 NO（当有安全隧道时可禁用）</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">pasv_address</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # PASV 模式中服务器传回的 ip 地址。默认值为 none，即地址是从呼入的连接套接字中获取。</span></span></code></pre></div><ul><li>开启主动模式（PORT）的配置</li></ul><div class="language-nginx" data-ext="nginx" data-title="nginx"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">port_enable=</span><span style="color:#C678DD;--shiki-dark:#C678DD;">YES</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 是否开启 Port 模式</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">connect_from_port_20=</span><span style="color:#C678DD;--shiki-dark:#C678DD;">YES</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 当 Port 模式开启的时候，是否启用默认的 20 端口监听</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">ftp_data_port=</span><span style="color:#C678DD;--shiki-dark:#C678DD;">port_number</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # Port 模式下 FTP 数据传输所使用的端口，默认值为20</span></span></code></pre></div><h3 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h3><p><a href="https://www.jianshu.com/p/05dc6455b513" target="_blank" rel="noopener noreferrer">CentOS 7 安装 FTP 服务</a></p>`,23)]))}const p=a(i,[["render",l],["__file","linux-y-ftp-install.html.vue"]]),c=JSON.parse('{"path":"/posts/Linux/linux-y-ftp-install.html","title":"安装FTP服务","lang":"zh-CN","frontmatter":{"description":"安装FTP服务 1.安装vsftpd 安装前先查看ftp 是否已经安装，使用yum 安装 2. 修改配置文件 根据自己的需求，修改ftp配置文件/etc/vsftpd/vsftpd.conf chroot_local_user 与 chroot_list_enable 的组合效果如下： 注意：如果设置了 local_enable=YES ，自带 3. ...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Linux/linux-y-ftp-install.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"安装FTP服务"}],["meta",{"property":"og:description","content":"安装FTP服务 1.安装vsftpd 安装前先查看ftp 是否已经安装，使用yum 安装 2. 修改配置文件 根据自己的需求，修改ftp配置文件/etc/vsftpd/vsftpd.conf chroot_local_user 与 chroot_list_enable 的组合效果如下： 注意：如果设置了 local_enable=YES ，自带 3. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装FTP服务\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1.安装vsftpd","slug":"_1-安装vsftpd","link":"#_1-安装vsftpd","children":[]},{"level":2,"title":"2. 修改配置文件","slug":"_2-修改配置文件","link":"#_2-修改配置文件","children":[]},{"level":2,"title":"3. 启动ftp服务","slug":"_3-启动ftp服务","link":"#_3-启动ftp服务","children":[]},{"level":2,"title":"4. 用户管理","slug":"_4-用户管理","link":"#_4-用户管理","children":[]},{"level":2,"title":"5. 主动模式和被动模式","slug":"_5-主动模式和被动模式","link":"#_5-主动模式和被动模式","children":[{"level":3,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.58,"words":774},"filePathRelative":"posts/Linux/linux-y-ftp-install.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1.安装vsftpd</h2>\\n<p>安装前先查看ftp 是否已经安装，使用yum 安装</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>vsftpd -v</span></span>\\n<span class=\\"line\\"><span>yum -y install vsftpd</span></span></code></pre>\\n</div>","autoDesc":true}');export{p as comp,c as data};
