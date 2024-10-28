import{_ as s,c as n,a as i,o as e}from"./app-BQBjlK2G.js";const l={};function p(t,a){return e(),n("div",null,a[0]||(a[0]=[i(`<h1 id="gitlab搭建" tabindex="-1"><a class="header-anchor" href="#gitlab搭建"><span>gitlab搭建</span></a></h1><h2 id="_1-搭建方式" tabindex="-1"><a class="header-anchor" href="#_1-搭建方式"><span>1. 搭建方式</span></a></h2><p>gitlab 搭建有两种方式</p><ul><li><p>第一种方法</p><p>说白了其实gitlab就是一个web端，打散后其实也是由（nginx，gitaly，redis，gitlab-workhorse...）等这些东西构成；所以你可以一个个组装一个个编译安装；这样你也可以深入去了解gitlab，同时也可以达到最简化（将不必要的东西去掉）</p></li><li><p>第二种方法</p><p>rpm 安装。。。官方和社区都有提供</p></li></ul><p>第一种太折腾人了，本文演示第二种方式</p><h2 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装"><span>2. 安装</span></a></h2><h3 id="_2-1-安装并配置必要的依赖关系" tabindex="-1"><a class="header-anchor" href="#_2-1-安装并配置必要的依赖关系"><span>2.1 安装并配置必要的依赖关系</span></a></h3><p>在 CentOS 系统上，下面的命令将会打开系统防火墙 HTTP 和 SSH 的访问。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>sudo yum install curl policycoreutils openssh-server openssh-clients</span></span>
<span class="line"><span>sudo systemctl enable sshd</span></span>
<span class="line"><span>sudo systemctl start sshd</span></span>
<span class="line"><span>sudo yum install postfix</span></span>
<span class="line"><span>sudo systemctl enable postfix</span></span>
<span class="line"><span>sudo systemctl start postfix</span></span>
<span class="line"><span>sudo firewall-cmd --permanent --add-service=http</span></span>
<span class="line"><span>sudo systemctl reload firewalld</span></span></code></pre></div><h3 id="_2-2-添加-gitlab-镜像源并安装" tabindex="-1"><a class="header-anchor" href="#_2-2-添加-gitlab-镜像源并安装"><span>2.2 添加 GitLab 镜像源并安装</span></a></h3><ul><li><p>方式1：命令管道的方式安装镜像仓库</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>curl -sS http://packages.gitlab.com.cn/install/gitlab-ce/script.rpm.sh | sudo bash</span></span>
<span class="line"><span>sudo yum install gitlab-ce</span></span></code></pre></div><p>我使用不成功</p></li><li><p>方式2：使用命名手动安装</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>curl -LJO https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-XXX.rpm</span></span>
<span class="line"><span>rpm -i gitlab-ce-XXX.rpm</span></span></code></pre></div><p>gitlab-ce-xxx.rpm 具体是哪个版本可以进<a href="https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/" target="_blank" rel="noopener noreferrer">gitlab镜像</a>中选择</p></li></ul><h4 id="_2-2-1-安装时异常" tabindex="-1"><a class="header-anchor" href="#_2-2-1-安装时异常"><span>2.2.1 安装时异常</span></a></h4><p>在使用命令rpm -i gitlab-ce-XXX.rpm 时提示</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>rpm -i gitlab-ce-12.2.4-ce.0.el7.x86_64.rpm</span></span>
<span class="line"><span>warning: gitlab-ce-12.2.4-ce.0.el7.x86_64.rpm: Header V4 RSA/SHA1 Signature, key ID f27eab47: NOKEY</span></span>
<span class="line"><span>error: Failed dependencies:</span></span>
<span class="line"><span>	policycoreutils-python is needed by gitlab-ce-12.2.4-ce.0.el7.x86_64</span></span></code></pre></div><p>需要安装</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>yum install policycoreutils-python</span></span></code></pre></div><h4 id="_2-2-2-安装完成提示" tabindex="-1"><a class="header-anchor" href="#_2-2-2-安装完成提示"><span>2.2.2 安装完成提示</span></a></h4><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[root@iZwz97t3ru69kye3l7uj70Z ~]# rpm -i gitlab-ce-12.2.4-ce.0.el7.x86_64.rpm</span></span>
<span class="line"><span>warning: gitlab-ce-12.2.4-ce.0.el7.x86_64.rpm: Header V4 RSA/SHA1 Signature, key ID f27eab47: NOKEY</span></span>
<span class="line"><span>It looks like GitLab has not been configured yet; skipping the upgrade script.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       *.                  *.</span></span>
<span class="line"><span>      ***                 ***</span></span>
<span class="line"><span>     *****               *****</span></span>
<span class="line"><span>    .******             *******</span></span>
<span class="line"><span>    ********            ********</span></span>
<span class="line"><span>   ,,,,,,,,,***********,,,,,,,,,</span></span>
<span class="line"><span>  ,,,,,,,,,,,*********,,,,,,,,,,,</span></span>
<span class="line"><span>  .,,,,,,,,,,,*******,,,,,,,,,,,,</span></span>
<span class="line"><span>      ,,,,,,,,,*****,,,,,,,,,.</span></span>
<span class="line"><span>         ,,,,,,,****,,,,,,</span></span>
<span class="line"><span>            .,,,***,,,,</span></span>
<span class="line"><span>                ,*,.</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>     _______ __  __          __</span></span>
<span class="line"><span>    / ____(_) /_/ /   ____ _/ /_</span></span>
<span class="line"><span>   / / __/ / __/ /   / __ \`/ __ \\</span></span>
<span class="line"><span>  / /_/ / / /_/ /___/ /_/ / /_/ /</span></span>
<span class="line"><span>  \\____/_/\\__/_____/\\__,_/_.___/</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Thank you for installing GitLab!</span></span>
<span class="line"><span>GitLab was unable to detect a valid hostname for your instance.</span></span>
<span class="line"><span>Please configure a URL for your GitLab instance by setting \`external_url\`</span></span>
<span class="line"><span>configuration in /etc/gitlab/gitlab.rb file.</span></span>
<span class="line"><span>Then, you can start your GitLab instance by running the following command:</span></span>
<span class="line"><span>  sudo gitlab-ctl reconfigure</span></span>
<span class="line"><span></span></span>
<span class="line"><span>For a comprehensive list of configuration options please see the Omnibus GitLab readme</span></span>
<span class="line"><span>https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/README.md</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-配置" tabindex="-1"><a class="header-anchor" href="#_2-3-配置"><span>2.3 配置</span></a></h3><h4 id="_2-3-1-配置外网访问的地址-必须改" tabindex="-1"><a class="header-anchor" href="#_2-3-1-配置外网访问的地址-必须改"><span>2.3.1 配置外网访问的地址(必须改)</span></a></h4><p>修改/etc/gitlab/gitlab.rb，将默认external_url改成，你的ip或者域名</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>external_url &#39;http://gitlab.isture.com&#39;</span></span>
<span class="line"><span>#external_url &#39;http://120.79.200.xxx&#39;</span></span></code></pre></div><h4 id="_2-3-2-nginx端口冲突" tabindex="-1"><a class="header-anchor" href="#_2-3-2-nginx端口冲突"><span>2.3.2 nginx端口冲突</span></a></h4><p>gitlab 其实是个web，他自带了nginx。但是我们本身服务器也有一个nginx这样就冲突了</p><h5 id="_2-3-2-1-解决方案" tabindex="-1"><a class="header-anchor" href="#_2-3-2-1-解决方案"><span>2.3.2.1 解决方案</span></a></h5><ul><li><p>第一种（不建议）</p><p>禁用gitlab自带的nginx，使用我们自己安装的nginx</p></li><li><p>第二种</p><p>更改gitlab 自带的nginx的默认端口，域名加端口访问。</p><p>如果有强迫症，可以在自己的服务器nginx映射到gitlab 的nginx就好了</p></li></ul><h5 id="_2-3-2-2-修改配置" tabindex="-1"><a class="header-anchor" href="#_2-3-2-2-修改配置"><span>2.3.2.2 修改配置</span></a></h5><p>修改/etc/gitlab/gitlab.rb的端口配置</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span> nginx[&#39;listen_port&#39;] = 9999</span></span></code></pre></div><h4 id="_2-3-3-修改gitlab数据存储路径-非必选" tabindex="-1"><a class="header-anchor" href="#_2-3-3-修改gitlab数据存储路径-非必选"><span>2.3.3 修改Gitlab数据存储路径（非必选）</span></a></h4><p>默认的Gitlab数据存储路径在<code>/var/opt/gitlab/git-data</code></p><p>修改/etc/gitlab/gitlab.rb</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>###!   path that doesn&#39;t contain symlinks.**</span></span>
<span class="line"><span># git_data_dirs({</span></span>
<span class="line"><span>#   &quot;default&quot; =&gt; {</span></span>
<span class="line"><span>#     &quot;path&quot; =&gt; &quot;你需要放置的路径&quot;</span></span>
<span class="line"><span>#    }</span></span>
<span class="line"><span># })</span></span></code></pre></div><h3 id="_2-4-启用配置并启动gitlab" tabindex="-1"><a class="header-anchor" href="#_2-4-启用配置并启动gitlab"><span>2.4 启用配置并启动GitLab</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>sudo gitlab-ctl reconfigure</span></span></code></pre></div><p>其他gitlab 命令</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>sudo gitlab-ctl reconfigure</span></span>
<span class="line"><span>sudo gitlab-ctl restart</span></span>
<span class="line"><span>sudo gitlab-ctl status</span></span></code></pre></div><h3 id="_2-5-浏览器打开配置的地址" tabindex="-1"><a class="header-anchor" href="#_2-5-浏览器打开配置的地址"><span>2.5 浏览器打开配置的地址</span></a></h3><ul><li><p>在第一次访问时，将被重定向到密码重置页面</p><p>默认账户是root，密码在此页面设置</p></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231020676.png" alt="image-20190907201354004" tabindex="0" loading="lazy"><figcaption>image-20190907201354004</figcaption></figure><h2 id="_3-常用的几个gitlab命令" tabindex="-1"><a class="header-anchor" href="#_3-常用的几个gitlab命令"><span>3. 常用的几个Gitlab命令</span></a></h2><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># 重新应用gitlab的配置,每次修改/etc/gitlab/gitlab.rb文件之后执行</span></span>
<span class="line"><span>sudo gitlab-ctl reconfigure</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启动gitlab服务</span></span>
<span class="line"><span>sudo gitlab-ctl start</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 重启gitlab服务</span></span>
<span class="line"><span>sudo gitlab-ctl restart</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看gitlab运行状态</span></span>
<span class="line"><span>sudo gitlab-ctl status</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#停止gitlab服务</span></span>
<span class="line"><span>sudo gitlab-ctl stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看gitlab运行所有日志</span></span>
<span class="line"><span>sudo gitlab-ctl tail</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查看 nginx 访问日志</span></span>
<span class="line"><span>sudo gitlab-ctl tail nginx/gitlab_acces.log </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查看 postgresql 日志</span></span>
<span class="line"><span>sudo gitlab-ctl tail postgresql </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 停止相关数据连接服务</span></span>
<span class="line"><span>gitlab-ctl stop unicorn</span></span>
<span class="line"><span>gitlab-ctl stop sidekiq</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 系统信息监测</span></span>
<span class="line"><span>gitlab-rake gitlab:env:info</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-gitlab相关目录" tabindex="-1"><a class="header-anchor" href="#_4-gitlab相关目录"><span>4. gitlab相关目录</span></a></h2><ul><li>/var/opt/gitlab/git-data/repositories/root：库默认存储目录</li><li>/opt/gitlab：是gitlab的应用代码和相应的依赖程序</li><li>/var/opt/gitlab：此目录下是运行gitlab-ctl reconfigure命令编译后的应用数据和配置文件，不需要人为修改配置</li><li>/etc/gitlab：此目录下存放了以omnibus-gitlab包安装方式时的配置文件，这里的配置文件才需要管理员手动编译配置</li><li>/var/log/gitlab：此目录下存放了gitlab各个组件产生的日志</li><li>/opt/gitlab/backups/：默认备份文件生成的目录</li></ul><h3 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h3><p><a href="https://segmentfault.com/a/1190000011632220" target="_blank" rel="noopener noreferrer">搭建gitlab服务</a></p><p><a href="https://blog.csdn.net/ouyang_peng/article/details/72903221" target="_blank" rel="noopener noreferrer">在CenterOS系统上安装GitLab并自定义域名访问GitLab管理页面</a></p>`,47)]))}const c=s(l,[["render",p],["__file","gitlab-x-install.html.vue"]]),d=JSON.parse('{"path":"/posts/Git/gitlab-x-install.html","title":"gitlab搭建","lang":"zh-CN","frontmatter":{"description":"gitlab搭建 1. 搭建方式 gitlab 搭建有两种方式 第一种方法 说白了其实gitlab就是一个web端，打散后其实也是由（nginx，gitaly，redis，gitlab-workhorse...）等这些东西构成；所以你可以一个个组装一个个编译安装；这样你也可以深入去了解gitlab，同时也可以达到最简化（将不必要的东西去掉） 第二种方法...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Git/gitlab-x-install.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"gitlab搭建"}],["meta",{"property":"og:description","content":"gitlab搭建 1. 搭建方式 gitlab 搭建有两种方式 第一种方法 说白了其实gitlab就是一个web端，打散后其实也是由（nginx，gitaly，redis，gitlab-workhorse...）等这些东西构成；所以你可以一个个组装一个个编译安装；这样你也可以深入去了解gitlab，同时也可以达到最简化（将不必要的东西去掉） 第二种方法..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231020676.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"gitlab搭建\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231020676.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 搭建方式","slug":"_1-搭建方式","link":"#_1-搭建方式","children":[]},{"level":2,"title":"2. 安装","slug":"_2-安装","link":"#_2-安装","children":[{"level":3,"title":"2.1 安装并配置必要的依赖关系","slug":"_2-1-安装并配置必要的依赖关系","link":"#_2-1-安装并配置必要的依赖关系","children":[]},{"level":3,"title":"2.2 添加 GitLab 镜像源并安装","slug":"_2-2-添加-gitlab-镜像源并安装","link":"#_2-2-添加-gitlab-镜像源并安装","children":[]},{"level":3,"title":"2.3 配置","slug":"_2-3-配置","link":"#_2-3-配置","children":[]},{"level":3,"title":"2.4 启用配置并启动GitLab","slug":"_2-4-启用配置并启动gitlab","link":"#_2-4-启用配置并启动gitlab","children":[]},{"level":3,"title":"2.5 浏览器打开配置的地址","slug":"_2-5-浏览器打开配置的地址","link":"#_2-5-浏览器打开配置的地址","children":[]}]},{"level":2,"title":"3. 常用的几个Gitlab命令","slug":"_3-常用的几个gitlab命令","link":"#_3-常用的几个gitlab命令","children":[]},{"level":2,"title":"4. gitlab相关目录","slug":"_4-gitlab相关目录","link":"#_4-gitlab相关目录","children":[{"level":3,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.68,"words":1105},"filePathRelative":"posts/Git/gitlab-x-install.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 搭建方式</h2>\\n<p>gitlab 搭建有两种方式</p>\\n<ul>\\n<li>\\n<p>第一种方法</p>\\n<p>说白了其实gitlab就是一个web端，打散后其实也是由（nginx，gitaly，redis，gitlab-workhorse...）等这些东西构成；所以你可以一个个组装一个个编译安装；这样你也可以深入去了解gitlab，同时也可以达到最简化（将不必要的东西去掉）</p>\\n</li>\\n<li>\\n<p>第二种方法</p>\\n<p>rpm 安装。。。官方和社区都有提供</p>\\n</li>\\n</ul>\\n<p>第一种太折腾人了，本文演示第二种方式</p>\\n<h2>2. 安装</h2>","autoDesc":true}');export{c as comp,d as data};
