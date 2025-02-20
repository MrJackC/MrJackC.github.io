import{_ as e,c as r,a as s,o as n}from"./app-4x2aIoqi.js";const i={};function t(l,a){return n(),r("div",null,a[0]||(a[0]=[s(`<h1 id="rabbitmq安装-rabbitmq安装" tabindex="-1"><a class="header-anchor" href="#rabbitmq安装-rabbitmq安装"><span>RabbitMQ安装 - RabbitMQ安装</span></a></h1><h2 id="_1-安装erlang" tabindex="-1"><a class="header-anchor" href="#_1-安装erlang"><span>1. 安装erlang</span></a></h2><h3 id="_1-1-下载erlang-安装包" tabindex="-1"><a class="header-anchor" href="#_1-1-下载erlang-安装包"><span>1.1 下载erlang 安装包</span></a></h3><p>在官网下载然后上传到 Linux 上或者直接使用下面的命令下载对应的版本。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>wget http://erlang.org/download/otp_src_19.3.tar.gz</span></span></code></pre></div><h3 id="_1-2-解压erlang-安装包" tabindex="-1"><a class="header-anchor" href="#_1-2-解压erlang-安装包"><span>1.2 解压erlang 安装包</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>tar -xvzf otp_src_19.3.tar.gz</span></span></code></pre></div><h3 id="_1-3-删除erlang-安装包" tabindex="-1"><a class="header-anchor" href="#_1-3-删除erlang-安装包"><span>1.3 删除erlang 安装包</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>rm -rf otp_src_19.3.tar.gz</span></span></code></pre></div><h3 id="_1-4-安装erlang-的依赖工具" tabindex="-1"><a class="header-anchor" href="#_1-4-安装erlang-的依赖工具"><span>1.4 安装erlang 的依赖工具</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>yum -y install make gcc gcc-c++ kernel-devel m4 ncurses-devel openssl-devel unixODBC-devel</span></span></code></pre></div><h3 id="_1-5-进入-erlang-安装包解压文件对erlang-进行安装环境的配置" tabindex="-1"><a class="header-anchor" href="#_1-5-进入-erlang-安装包解压文件对erlang-进行安装环境的配置"><span>1.5 进入 erlang 安装包解压文件对erlang 进行安装环境的配置</span></a></h3><p>在/usr/local新建一个文件夹</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>mkdir erlang</span></span></code></pre></div><p>对erlang 进行安装环境配置</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>./configure --prefix=/usr/local/erlang --without-javac</span></span></code></pre></div><h3 id="_1-6-编译安装" tabindex="-1"><a class="header-anchor" href="#_1-6-编译安装"><span>1.6 编译安装</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>make &amp;&amp; make install</span></span></code></pre></div><h3 id="_1-7-验证erlang-是否安装成功" tabindex="-1"><a class="header-anchor" href="#_1-7-验证erlang-是否安装成功"><span>1.7 验证erlang 是否安装成功</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>./bin/erl</span></span></code></pre></div><p>运行下面的语句输出“hello world”</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>io:format(&quot;hello world~n&quot;, []).</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231124149.png" alt="image-20191107002303817" tabindex="0" loading="lazy"><figcaption>image-20191107002303817</figcaption></figure><p>到此就安装完毕</p><h3 id="_1-8-配置-erlang-环境变量" tabindex="-1"><a class="header-anchor" href="#_1-8-配置-erlang-环境变量"><span>1.8 配置 erlang 环境变量</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>vim /etc/profile</span></span></code></pre></div><p>追加下列环境变量到文件末尾</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>#erlang</span></span>
<span class="line"><span>ERL_HOME=/usr/local/erlang</span></span>
<span class="line"><span>PATH=$ERL_HOME/bin:$PATH</span></span>
<span class="line"><span>export ERL_HOME PATH</span></span></code></pre></div><p>运行下列命令使配置文件<code>profile</code>生效</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>source /etc/profile</span></span></code></pre></div><p>输入 erl 查看 erlang 环境变量是否配置正确</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231124193.png" alt="image-20191107002712325" tabindex="0" loading="lazy"><figcaption>image-20191107002712325</figcaption></figure><h2 id="_2-安装-rabbitmq" tabindex="-1"><a class="header-anchor" href="#_2-安装-rabbitmq"><span>2. 安装 RabbitMQ</span></a></h2><h3 id="_2-1-下载-rpm" tabindex="-1"><a class="header-anchor" href="#_2-1-下载-rpm"><span>2.1 下载 rpm</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>wget https://www.rabbitmq.com/releases/rabbitmq-server/v3.6.8/rabbitmq-server-3.6.8-1.el7.noarch.rpm</span></span></code></pre></div><h3 id="_2-2-安装rpm" tabindex="-1"><a class="header-anchor" href="#_2-2-安装rpm"><span>2.2 安装rpm</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>rpm --import https://www.rabbitmq.com/rabbitmq-release-signing-key.asc</span></span></code></pre></div><p>紧接着执行</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>yum install rabbitmq-server-3.6.8-1.el7.noarch.rpm</span></span></code></pre></div><h3 id="_2-3-开启-web-管理插件" tabindex="-1"><a class="header-anchor" href="#_2-3-开启-web-管理插件"><span>2.3 开启 web 管理插件</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>rabbitmq-plugins enable rabbitmq_management</span></span></code></pre></div><h3 id="_2-4-设置开机启动" tabindex="-1"><a class="header-anchor" href="#_2-4-设置开机启动"><span>2.4 设置开机启动</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>chkconfig rabbitmq-server on</span></span></code></pre></div><h3 id="_2-5-启动服务" tabindex="-1"><a class="header-anchor" href="#_2-5-启动服务"><span>2.5 启动服务</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>service rabbitmq-server start</span></span></code></pre></div><h3 id="_2-6-查看服务状态" tabindex="-1"><a class="header-anchor" href="#_2-6-查看服务状态"><span>2.6 查看服务状态</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>service rabbitmq-server status</span></span></code></pre></div><h3 id="_2-7-访问rabbitmq-控制台" tabindex="-1"><a class="header-anchor" href="#_2-7-访问rabbitmq-控制台"><span>2.7 访问RabbitMQ 控制台</span></a></h3><p>浏览器访问：<a href="http://xn--ip-0p3ck01akcu41v:15672/" target="_blank" rel="noopener noreferrer">http://你的ip地址:15672/</a></p><p>默认用户名和密码： guest/guest;但是需要注意的是：guestuest用户只是被容许从localhost访问。官网文档描述如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>“guest” user can only connect via localhost</span></span></code></pre></div><p><strong>解决远程访问 RabbitMQ 远程访问密码错误</strong></p><p>新建用户并授权</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>rabbitmqctl add_user root root</span></span>
<span class="line"><span>rabbitmqctl set_user_tags root administrator</span></span>
<span class="line"><span>rabbitmqctl set_permissions -p / root &quot;.*&quot; &quot;.*&quot; &quot;.*&quot;</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231124224.png" alt="image-20191107003531187" tabindex="0" loading="lazy"><figcaption>image-20191107003531187</figcaption></figure><p>再次访问:<a href="http://xn--ip-0p3ck01akcu41v:15672/" target="_blank" rel="noopener noreferrer">http://你的ip地址:15672/</a> ,输入用户名和密码：root root</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231124247.png" alt="image-20191107003626827" tabindex="0" loading="lazy"><figcaption>image-20191107003626827</figcaption></figure>`,57)]))}const d=e(i,[["render",t],["__file","rabbitmq-y-install.html.vue"]]),c=JSON.parse('{"path":"/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-y-install.html","title":"RabbitMQ安装 - RabbitMQ安装","lang":"zh-CN","frontmatter":{"aliases":"RabbitMQ安装 - RabbitMQ安装","tags":null,"cssclass":null,"source":null,"order":920,"category":["RabbitMQ","MQ"],"created":"2024-02-22 10:50","updated":"2024-10-26 09:48","description":"RabbitMQ安装 - RabbitMQ安装 1. 安装erlang 1.1 下载erlang 安装包 在官网下载然后上传到 Linux 上或者直接使用下面的命令下载对应的版本。 1.2 解压erlang 安装包 1.3 删除erlang 安装包 1.4 安装erlang 的依赖工具 1.5 进入 erlang 安装包解压文件对erlang 进行安装...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-y-install.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"RabbitMQ安装 - RabbitMQ安装"}],["meta",{"property":"og:description","content":"RabbitMQ安装 - RabbitMQ安装 1. 安装erlang 1.1 下载erlang 安装包 在官网下载然后上传到 Linux 上或者直接使用下面的命令下载对应的版本。 1.2 解压erlang 安装包 1.3 删除erlang 安装包 1.4 安装erlang 的依赖工具 1.5 进入 erlang 安装包解压文件对erlang 进行安装..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231124149.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RabbitMQ安装 - RabbitMQ安装\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231124149.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231124193.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231124224.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231124247.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 安装erlang","slug":"_1-安装erlang","link":"#_1-安装erlang","children":[{"level":3,"title":"1.1 下载erlang 安装包","slug":"_1-1-下载erlang-安装包","link":"#_1-1-下载erlang-安装包","children":[]},{"level":3,"title":"1.2 解压erlang 安装包","slug":"_1-2-解压erlang-安装包","link":"#_1-2-解压erlang-安装包","children":[]},{"level":3,"title":"1.3 删除erlang 安装包","slug":"_1-3-删除erlang-安装包","link":"#_1-3-删除erlang-安装包","children":[]},{"level":3,"title":"1.4 安装erlang 的依赖工具","slug":"_1-4-安装erlang-的依赖工具","link":"#_1-4-安装erlang-的依赖工具","children":[]},{"level":3,"title":"1.5 进入 erlang 安装包解压文件对erlang 进行安装环境的配置","slug":"_1-5-进入-erlang-安装包解压文件对erlang-进行安装环境的配置","link":"#_1-5-进入-erlang-安装包解压文件对erlang-进行安装环境的配置","children":[]},{"level":3,"title":"1.6 编译安装","slug":"_1-6-编译安装","link":"#_1-6-编译安装","children":[]},{"level":3,"title":"1.7 验证erlang 是否安装成功","slug":"_1-7-验证erlang-是否安装成功","link":"#_1-7-验证erlang-是否安装成功","children":[]},{"level":3,"title":"1.8 配置 erlang 环境变量","slug":"_1-8-配置-erlang-环境变量","link":"#_1-8-配置-erlang-环境变量","children":[]}]},{"level":2,"title":"2. 安装 RabbitMQ","slug":"_2-安装-rabbitmq","link":"#_2-安装-rabbitmq","children":[{"level":3,"title":"2.1 下载 rpm","slug":"_2-1-下载-rpm","link":"#_2-1-下载-rpm","children":[]},{"level":3,"title":"2.2 安装rpm","slug":"_2-2-安装rpm","link":"#_2-2-安装rpm","children":[]},{"level":3,"title":"2.3 开启 web 管理插件","slug":"_2-3-开启-web-管理插件","link":"#_2-3-开启-web-管理插件","children":[]},{"level":3,"title":"2.4 设置开机启动","slug":"_2-4-设置开机启动","link":"#_2-4-设置开机启动","children":[]},{"level":3,"title":"2.5 启动服务","slug":"_2-5-启动服务","link":"#_2-5-启动服务","children":[]},{"level":3,"title":"2.6 查看服务状态","slug":"_2-6-查看服务状态","link":"#_2-6-查看服务状态","children":[]},{"level":3,"title":"2.7 访问RabbitMQ 控制台","slug":"_2-7-访问rabbitmq-控制台","link":"#_2-7-访问rabbitmq-控制台","children":[]}]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.69,"words":507},"filePathRelative":"posts/MiddleWare/MQ_Rabbitmq/rabbitmq-y-install.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 安装erlang</h2>\\n<h3>1.1 下载erlang 安装包</h3>\\n<p>在官网下载然后上传到 Linux 上或者直接使用下面的命令下载对应的版本。</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>wget http://erlang.org/download/otp_src_19.3.tar.gz</span></span></code></pre>\\n</div>","autoDesc":true}');export{d as comp,c as data};
