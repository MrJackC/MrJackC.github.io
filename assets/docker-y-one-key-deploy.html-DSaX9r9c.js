import{_ as a,c as n,a as i,o as e}from"./app-DP7tPpgD.js";const l={};function o(r,s){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="集成docker实现一键部署" tabindex="-1"><a class="header-anchor" href="#集成docker实现一键部署"><span>集成docker实现一键部署</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>这里的一键部署 主要以若依前后端分离项目为例，仅提供一个思路，项目实际使用中可根据自己项目情况调整</p><h2 id="_2-环境搭建" tabindex="-1"><a class="header-anchor" href="#_2-环境搭建"><span>2. 环境搭建</span></a></h2><p><code>Docker</code>是一个虚拟环境容器，可以将你的开发环境、代码、配置文件等一并打包到这个容器中，最终只需要一个命令即可打包发布应用到任意平台中。</p><p>1、安装docker</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">yum</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> https://download.docker.com/linux/fedora/30/x86_64/stable/Packages/containerd.io-1.2.6-3.3.fc30.x86_64.rpm</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">yum</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -y</span><span style="color:#98C379;--shiki-dark:#98C379;"> yum-utils</span><span style="color:#98C379;--shiki-dark:#98C379;"> device-mapper-persistent-data</span><span style="color:#98C379;--shiki-dark:#98C379;"> lvm2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">yum-config-manager</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --add-repo</span><span style="color:#98C379;--shiki-dark:#98C379;"> https://download.docker.com/linux/centos/docker-ce.repo</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">yum</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -y</span><span style="color:#98C379;--shiki-dark:#98C379;"> docker-ce</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">curl</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -L</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">uname</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -s</span><span style="color:#98C379;--shiki-dark:#98C379;">)-$(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">uname</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -m</span><span style="color:#98C379;--shiki-dark:#98C379;">)&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -o</span><span style="color:#98C379;--shiki-dark:#98C379;"> /usr/local/bin/docker-compose</span></span></code></pre></div><p>2、检查<code>docker</code>和<code>docker-compose</code>是否安装成功</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">docker</span><span style="color:#98C379;--shiki-dark:#98C379;"> version</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">docker-compose</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --version</span></span></code></pre></div><p>3、文件授权</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">chmod</span><span style="color:#98C379;--shiki-dark:#98C379;"> +x</span><span style="color:#98C379;--shiki-dark:#98C379;"> /usr/local/bin/docker-compose</span></span></code></pre></div><h2 id="_3-docker-脚本下载" tabindex="-1"><a class="header-anchor" href="#_3-docker-脚本下载"><span>3. docker 脚本下载</span></a></h2><p>链接:<a href="https://pan.baidu.com/s/1yse7-5G5wsghnz4MqUQmvQ" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1yse7-5G5wsghnz4MqUQmvQ</a> 密码:ru81</p><ul><li>其中<code>db目录</code>存放<code>ruoyi数据库脚本</code></li><li>其中<code>jar目录</code>存放打包好的<code>jar应用文件</code></li><li>数据库<code>mysql</code>地址需要修改成<code>ruoyi-mysql</code></li><li>数据库脚本头部需要添加<code>SET NAMES &#39;utf8&#39;;</code>（防止乱码）</li><li>redis地址也需要修改</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231015759.png" alt="image-20220616205125631" tabindex="0" loading="lazy"><figcaption>image-20220616205125631</figcaption></figure><h2 id="_4-启动docker" tabindex="-1"><a class="header-anchor" href="#_4-启动docker"><span>4. 启动docker</span></a></h2><blockquote><p>启动docker</p></blockquote><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">systemctl</span><span style="color:#98C379;--shiki-dark:#98C379;"> start</span><span style="color:#98C379;--shiki-dark:#98C379;"> docker</span></span></code></pre></div><blockquote><p>构建docker服务</p></blockquote><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">docker-compose</span><span style="color:#98C379;--shiki-dark:#98C379;"> build</span></span></code></pre></div><blockquote><p>启动docker容器</p></blockquote><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">docker-compose</span><span style="color:#98C379;--shiki-dark:#98C379;"> up</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -d</span></span></code></pre></div><blockquote><p>访问应用地址</p></blockquote><p>打开浏览器，输入：<a href="http://localhost/" target="_blank" rel="noopener noreferrer">http://localhost:80</a>，若能正确展示页面，则表明环境搭建成功。</p><blockquote><p>提示</p><p>启动服务的容器<code>docker-compose up ruoyi-mysql ruoyi-server</code></p><p>停止服务的容器<code>docker-compose stop ruoyi-mysql ruoyi-server</code></p></blockquote><h2 id="_5-脚本介绍" tabindex="-1"><a class="header-anchor" href="#_5-脚本介绍"><span>5. 脚本介绍</span></a></h2><h3 id="_5-1-mysql-dockerfile" tabindex="-1"><a class="header-anchor" href="#_5-1-mysql-dockerfile"><span>5.1 mysql-dockerfile</span></a></h3><div class="language-dockerfile" data-ext="dockerfile" data-title="dockerfile"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 基础镜像</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> mysql:5.7</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># author</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">MAINTAINER</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ruoyi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 执行sql脚本</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">ADD</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ./db/*.sql /docker-entrypoint-initdb.d/</span></span></code></pre></div><h3 id="_5-2-mysql-dockerfile" tabindex="-1"><a class="header-anchor" href="#_5-2-mysql-dockerfile"><span>5.2 mysql-dockerfile</span></a></h3><div class="language-dockerfile" data-ext="dockerfile" data-title="dockerfile"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 基础镜像</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> redis</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># author</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">MAINTAINER</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ruoyi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 挂载目录</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">VOLUME</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> /zsz/ruoyi/redis</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 创建目录</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">RUN</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> mkdir -p /zsz/ruoyi/redis</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 指定路径</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">WORKDIR</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> /zsz/ruoyi/redis</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 复制conf文件到路径</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">COPY</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ./conf/redis.conf /zsz/ruoyi/redis/redis.conf</span></span></code></pre></div><h3 id="_5-3-ruoyi-dockerfile" tabindex="-1"><a class="header-anchor" href="#_5-3-ruoyi-dockerfile"><span>5.3 ruoyi-dockerfile</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># 基础镜像</span></span>
<span class="line"><span>FROM java:8</span></span>
<span class="line"><span># author</span></span>
<span class="line"><span>MAINTAINER ruoyi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 挂载目录</span></span>
<span class="line"><span>VOLUME /zsz/ruoyi</span></span>
<span class="line"><span># 创建目录</span></span>
<span class="line"><span>RUN mkdir -p /zsz/ruoyi</span></span>
<span class="line"><span># 指定路径</span></span>
<span class="line"><span>WORKDIR /zsz/ruoyi</span></span>
<span class="line"><span># 复制jar文件到路径de</span></span>
<span class="line"><span>COPY ./jar/*.jar /zsz/ruoyi/ruoyi.jar</span></span>
<span class="line"><span># 启动应用</span></span>
<span class="line"><span>ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;ruoyi.jar&quot;]</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#_5-4-docker-compose-yml"><span>5.4 docker-compose.yml</span></a></h3><div class="language-yml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> : </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;3&#39;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">services</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  ruoyi-mysql</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    container_name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">ruoyi-mysql</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    image</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">mysql:5.7</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    build</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      context</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">.</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      dockerfile</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">mysql-dockerfile</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    ports</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;8306:3306&quot;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    volumes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">./mysql/conf:/zsz/ruoyi/mysql/conf.d</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">./mysql/logs:/zsz/ruoyi/mysql/logs</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">./mysql/data:/zsz/ruoyi/mysql/mysqldata</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    command</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">          &#39;mysqld&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">          &#39;--innodb-buffer-pool-size=80M&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">          &#39;--character-set-server=utf8mb4&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">          &#39;--collation-server=utf8mb4_unicode_ci&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">          &#39;--default-time-zone=+8:00&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">          &#39;--lower-case-table-names=1&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        ]</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    environment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      MYSQL_DATABASE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">ry-vue</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      MYSQL_ROOT_PASSWORD</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">123456</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  ruoyi-redis</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    container_name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">ruoyi-redis</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    image</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">redis</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    build</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      context</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">.</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      dockerfile</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">redis-dockerfile</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    ports</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;8379:6379&quot;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    volumes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">./conf/redis.conf:/zsz/ruoyi/redis/redis.conf</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">./redis/data:/data</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    command</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">redis-server /zsz/ruoyi/redis/redis.conf</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  ruoyi-server</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    container_name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">ruoyi-server</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    build</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      context</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">.</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      dockerfile</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">ruoyi-dockerfile</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    ports</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;8080:8080&quot;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    volumes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">./ruoyi/logs:/zsz/ruoyi/logs</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">./ruoyi/uploadPath:/zsz/ruoyi/uploadPath</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    depends_on</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">ruoyi-mysql</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">ruoyi-redis</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    links</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">ruoyi-mysql</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">ruoyi-redis</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="http://doc.ruoyi.vip/ruoyi/document/cjjc.html#%E9%9B%86%E6%88%90docker%E5%AE%9E%E7%8E%B0%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2" target="_blank" rel="noopener noreferrer">集成docker实现一键部署</a></p>`,36)]))}const c=a(l,[["render",o],["__file","docker-y-one-key-deploy.html.vue"]]),d=JSON.parse('{"path":"/posts/Docker/docker-y-one-key-deploy.html","title":"集成docker实现一键部署","lang":"zh-CN","frontmatter":{"description":"集成docker实现一键部署 1. 简介 这里的一键部署 主要以若依前后端分离项目为例，仅提供一个思路，项目实际使用中可根据自己项目情况调整 2. 环境搭建 Docker是一个虚拟环境容器，可以将你的开发环境、代码、配置文件等一并打包到这个容器中，最终只需要一个命令即可打包发布应用到任意平台中。 1、安装docker 2、检查docker和docker...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Docker/docker-y-one-key-deploy.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"集成docker实现一键部署"}],["meta",{"property":"og:description","content":"集成docker实现一键部署 1. 简介 这里的一键部署 主要以若依前后端分离项目为例，仅提供一个思路，项目实际使用中可根据自己项目情况调整 2. 环境搭建 Docker是一个虚拟环境容器，可以将你的开发环境、代码、配置文件等一并打包到这个容器中，最终只需要一个命令即可打包发布应用到任意平台中。 1、安装docker 2、检查docker和docker..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231015759.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集成docker实现一键部署\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231015759.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 环境搭建","slug":"_2-环境搭建","link":"#_2-环境搭建","children":[]},{"level":2,"title":"3. docker 脚本下载","slug":"_3-docker-脚本下载","link":"#_3-docker-脚本下载","children":[]},{"level":2,"title":"4. 启动docker","slug":"_4-启动docker","link":"#_4-启动docker","children":[]},{"level":2,"title":"5. 脚本介绍","slug":"_5-脚本介绍","link":"#_5-脚本介绍","children":[{"level":3,"title":"5.1 mysql-dockerfile","slug":"_5-1-mysql-dockerfile","link":"#_5-1-mysql-dockerfile","children":[]},{"level":3,"title":"5.2 mysql-dockerfile","slug":"_5-2-mysql-dockerfile","link":"#_5-2-mysql-dockerfile","children":[]},{"level":3,"title":"5.3 ruoyi-dockerfile","slug":"_5-3-ruoyi-dockerfile","link":"#_5-3-ruoyi-dockerfile","children":[]},{"level":3,"title":"5.4 docker-compose.yml","slug":"_5-4-docker-compose-yml","link":"#_5-4-docker-compose-yml","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.2,"words":660},"filePathRelative":"posts/Docker/docker-y-one-key-deploy.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>这里的一键部署 主要以若依前后端分离项目为例，仅提供一个思路，项目实际使用中可根据自己项目情况调整</p>\\n<h2>2. 环境搭建</h2>\\n<p><code>Docker</code>是一个虚拟环境容器，可以将你的开发环境、代码、配置文件等一并打包到这个容器中，最终只需要一个命令即可打包发布应用到任意平台中。</p>\\n<p>1、安装docker</p>\\n<div class=\\"language-sh\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">yum</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> install</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> https://download.docker.com/linux/fedora/30/x86_64/stable/Packages/containerd.io-1.2.6-3.3.fc30.x86_64.rpm</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">yum</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> install</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -y</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> yum-utils</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> device-mapper-persistent-data</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> lvm2</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">yum-config-manager</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> --add-repo</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> https://download.docker.com/linux/centos/docker-ce.repo</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">yum</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> install</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -y</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> docker-ce</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">curl</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -L</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">uname</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -s</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">)-$(</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">uname</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -m</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">)\\"</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -o</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> /usr/local/bin/docker-compose</span></span></code></pre>\\n</div>","autoDesc":true}');export{c as comp,d as data};
