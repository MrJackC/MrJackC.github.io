import{_ as a,c as o,a as n,o as p}from"./app-DEK5G3U7.js";const e={};function r(i,s){return p(),o("div",null,s[0]||(s[0]=[n(`<h1 id="docker基础-docker数据卷和数据管理" tabindex="-1"><a class="header-anchor" href="#docker基础-docker数据卷和数据管理"><span>Docker基础 - Docker数据卷和数据管理</span></a></h1><blockquote><p>Docker 容器的数据放哪里呢？ 本文带你理解如何在 Docker 内部以及容器之间管理数据</p></blockquote><h2 id="_1-docker-数据管理简介" tabindex="-1"><a class="header-anchor" href="#_1-docker-数据管理简介"><span>1. Docker 数据管理简介</span></a></h2><blockquote><p>实际上我们的容器就好像是一个简易版的操作系统，只不过系统中只安装了我们的程序运行所需要的环境，前边说到我们的容器是可以删除的，那如果删除了，容器中的程序产生的需要持久化的数据怎么办呢？容器运行的时候我们可以进容器去查看，容器一旦删除就什么都没有了。</p></blockquote><p>所以数据卷就是来解决这个问题的，是<strong>用来将数据持久化到我们宿主机上，与容器间实现数据共享，简单的说就是将宿主机的目录映射到容器中的目录</strong>，应用程序在容器中的目录读写数据会同步到宿主机上，这样容器产生的数据就可以持久化了，比如我们的数据库容器，就可以把数据存储到我们宿主机上的真实磁盘中。</p><h3 id="_1-1-数据卷-data-volume" tabindex="-1"><a class="header-anchor" href="#_1-1-数据卷-data-volume"><span>1.1 数据卷(Data Volume)</span></a></h3><p>数据卷(Data Volume)是一个可供一个或多个容器使用的特殊目录，它绕过 UFS，可以提供很多有用的特性：</p><ul><li>数据卷可以在容器之间共享和重用</li><li>对数据卷的修改会立马生效</li><li>对数据卷的更新，不会影响镜像</li><li>卷会一直存在，直到没有容器使用</li></ul><h4 id="_1-1-1-建一个数据卷" tabindex="-1"><a class="header-anchor" href="#_1-1-1-建一个数据卷"><span>1.1.1 建一个数据卷</span></a></h4><blockquote><p>在用 docker run 命令的时候，使用 -v 标记来创建一个数据卷并挂载到容器里。在一次 run 中多次使用可以挂载多个数据卷。</p></blockquote><p>下面创建一个 web 容器，并加载一个数据卷到容器的 /webapp-data 目录。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai ~]# docker run -d -P --name web -v /webapp-data training/webapp python app.py</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">e331e83e59486a131919cba8698b24eaee051a947838bb1c15c03df8b3464b97</span></span></code></pre></div><p>我们看下容器内部是否生成/webapp-data目录</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai ~]# docker exec -it web /bin/bash</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root@e331e83e5948:/opt/webapp#</span><span style="color:#98C379;--shiki-dark:#98C379;"> cd</span><span style="color:#98C379;--shiki-dark:#98C379;"> /webapp-data</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root@e331e83e5948:/webapp-data#</span><span style="color:#98C379;--shiki-dark:#98C379;"> ll</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">total</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 8</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">drwxr-xr-x</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span><span style="color:#98C379;--shiki-dark:#98C379;"> root</span><span style="color:#98C379;--shiki-dark:#98C379;"> root</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 4096</span><span style="color:#98C379;--shiki-dark:#98C379;"> Feb</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 20</span><span style="color:#98C379;--shiki-dark:#98C379;"> 01:24</span><span style="color:#98C379;--shiki-dark:#98C379;"> ./</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">drwxr-xr-x</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#98C379;--shiki-dark:#98C379;"> root</span><span style="color:#98C379;--shiki-dark:#98C379;"> root</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 4096</span><span style="color:#98C379;--shiki-dark:#98C379;"> Feb</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 20</span><span style="color:#98C379;--shiki-dark:#98C379;"> 01:24</span><span style="color:#98C379;--shiki-dark:#98C379;"> ../</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root@e331e83e5948:/webapp-data#</span></span></code></pre></div><p>注意：也可以在 Dockerfile 中使用 VOLUME 来添加一个或者多个新的卷到由该镜像创建的任意容器。</p><h4 id="_1-1-2-挂载一个主机目录作为数据卷" tabindex="-1"><a class="header-anchor" href="#_1-1-2-挂载一个主机目录作为数据卷"><span>1.1.2 挂载一个主机目录作为数据卷</span></a></h4><blockquote><p>使用 -v 标记也可以指定挂载一个本地主机的目录到容器中去。</p></blockquote><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai ~]# docker rm -f web</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">web</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai opt]# docker run -d --name web -v /opt/webapp-data5:/opt/webapp2 training/webapp</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">fce27f6ea9ce9699864644a48aed6db8b772c96be36f46bee6154d2e2c9915b9</span></span></code></pre></div><p>我们验证下：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai opt]# docker exec -it web /bin/bash</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root@fce27f6ea9ce:/opt/webapp#</span><span style="color:#98C379;--shiki-dark:#98C379;"> cd</span><span style="color:#98C379;--shiki-dark:#98C379;"> ..</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root@fce27f6ea9ce:/opt#</span><span style="color:#98C379;--shiki-dark:#98C379;"> ls</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">webapp</span><span style="color:#98C379;--shiki-dark:#98C379;">  webapp2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root@fce27f6ea9ce:/opt#</span><span style="color:#98C379;--shiki-dark:#98C379;"> cd</span><span style="color:#98C379;--shiki-dark:#98C379;"> webapp2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root@fce27f6ea9ce:/opt/webapp2#</span><span style="color:#98C379;--shiki-dark:#98C379;"> mkdir</span><span style="color:#98C379;--shiki-dark:#98C379;"> test</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root@fce27f6ea9ce:/opt/webapp2#</span><span style="color:#98C379;--shiki-dark:#98C379;"> exit</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">exit</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai opt]# cd webapp-data5</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai webapp-data5]# ll</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">total</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 4</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">drwxr-xr-x</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span><span style="color:#98C379;--shiki-dark:#98C379;"> root</span><span style="color:#98C379;--shiki-dark:#98C379;"> root</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 4096</span><span style="color:#98C379;--shiki-dark:#98C379;"> Feb</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 20</span><span style="color:#98C379;--shiki-dark:#98C379;"> 10:12</span><span style="color:#98C379;--shiki-dark:#98C379;"> test</span></span></code></pre></div><p>上面的命令加载主机的 /opt/webapp-data5 目录到容器的 /opt/webapp2 目录。这个功能在进行测试的时候十分方便，比如用户可以放置一些程序到本地目录中，来查看容器是否正常工作。<strong>本地目录的路径必须是绝对路径，如果目录不存在 Docker 会自动为你创建它</strong>。</p><p>*注意：Dockerfile 显然是不支持这种用法，这是因为 Dockerfile 是为了移植和分享用的, 因为不同操作系统的路径格式不一样，所以目前还不能支持。</p><p>我们删除容器，看主机上数据是否会被删除</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai opt]# docker rm -f web</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">web</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai opt]# cd /opt/webapp-data5</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai webapp-data5]# ll</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">total</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 4</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">drwxr-xr-x</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span><span style="color:#98C379;--shiki-dark:#98C379;"> root</span><span style="color:#98C379;--shiki-dark:#98C379;"> root</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 4096</span><span style="color:#98C379;--shiki-dark:#98C379;"> Feb</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 20</span><span style="color:#98C379;--shiki-dark:#98C379;"> 10:12</span><span style="color:#98C379;--shiki-dark:#98C379;"> test</span></span></code></pre></div><p>很明显，没有被删除</p><h4 id="_1-1-3-挂载一个本地主机文件作为数据卷" tabindex="-1"><a class="header-anchor" href="#_1-1-3-挂载一个本地主机文件作为数据卷"><span>1.1.3 挂载一个本地主机文件作为数据卷</span></a></h4><blockquote><p>-v 标记也可以从主机挂载单个文件到容器中</p></blockquote><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai ~]# docker run --rm -it -v ~/.bash_history:/.bash_history ubuntu /bin/bash</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root@79eca07938db:/#</span><span style="color:#98C379;--shiki-dark:#98C379;"> ll</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> | </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#98C379;--shiki-dark:#98C379;"> .bash_history</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">-rw-------</span><span style="color:#D19A66;--shiki-dark:#D19A66;">   1</span><span style="color:#98C379;--shiki-dark:#98C379;"> root</span><span style="color:#98C379;--shiki-dark:#98C379;"> root</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 19549</span><span style="color:#98C379;--shiki-dark:#98C379;"> Feb</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 19</span><span style="color:#98C379;--shiki-dark:#98C379;"> 10:28</span><span style="color:#98C379;--shiki-dark:#98C379;"> .bash_history</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root@79eca07938db:/#</span><span style="color:#98C379;--shiki-dark:#98C379;"> exit</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">exit</span></span></code></pre></div><p>这样就可以记录在容器输入过的命令了。</p><p>*注意：如果直接挂载一个文件，很多文件编辑工具，包括 <code>vi</code> 或者 <code>sed --in-place</code>，可能会造成文件 inode 的改变，从 Docker 1.1 .0起，这会导致报错误信息。所以最简单的办法就直接挂载文件的父目录。</p><h3 id="_1-2-数据卷容器-data-volume-container" tabindex="-1"><a class="header-anchor" href="#_1-2-数据卷容器-data-volume-container"><span>1.2 数据卷容器(Data Volume Container)</span></a></h3><blockquote><p>上面讲述的是主机和容器之间共享数据，那么如何你有一些持续更新的数据需要在容器之间共享，最好的方法就是创建数据卷容器。</p></blockquote><p>数据卷容器，其实就是一个正常的容器，专门用来提供数据卷供其它容器挂载的。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai ~]# docker run -d -v /dbdata --name dbdata training/postgres</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">70966085a85b05dd741a44a96725e2e44f146cc404b1b4e3aa3e519cd546c6b4</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai ~]# docker run -d --volumes-from dbdata --name db1 training/postgres</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4c92240096d919724b233e1a5cfca94b5ceb0505e43262a7121cb83cfd8542f6</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai ~]# docker run -d --volumes-from dbdata --name db2 training/postgres</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">25246ebfae2f8437316b10d7eac3b34c1bd1522f50ba81651aec198bc79415a2</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai ~]# docker ps -a</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">CONTAINER</span><span style="color:#98C379;--shiki-dark:#98C379;"> ID</span><span style="color:#98C379;--shiki-dark:#98C379;">        IMAGE</span><span style="color:#98C379;--shiki-dark:#98C379;">               COMMAND</span><span style="color:#98C379;--shiki-dark:#98C379;">                  CREATED</span><span style="color:#98C379;--shiki-dark:#98C379;">              STATUS</span><span style="color:#98C379;--shiki-dark:#98C379;">              PORTS</span><span style="color:#98C379;--shiki-dark:#98C379;">               NAMES</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">70966085a85b</span><span style="color:#98C379;--shiki-dark:#98C379;">        training/postgres</span><span style="color:#98C379;--shiki-dark:#98C379;">   &quot;su postgres -c &#39;/us…&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;">   46</span><span style="color:#98C379;--shiki-dark:#98C379;"> seconds</span><span style="color:#98C379;--shiki-dark:#98C379;"> ago</span><span style="color:#98C379;--shiki-dark:#98C379;">       Up</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 45</span><span style="color:#98C379;--shiki-dark:#98C379;"> seconds</span><span style="color:#98C379;--shiki-dark:#98C379;">       5432/tcp</span><span style="color:#98C379;--shiki-dark:#98C379;">            dbdata</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">25246ebfae2f</span><span style="color:#98C379;--shiki-dark:#98C379;">        training/postgres</span><span style="color:#98C379;--shiki-dark:#98C379;">   &quot;su postgres -c &#39;/us…&quot;</span><span style="color:#98C379;--shiki-dark:#98C379;">   About</span><span style="color:#98C379;--shiki-dark:#98C379;"> a</span><span style="color:#98C379;--shiki-dark:#98C379;"> minute</span><span style="color:#98C379;--shiki-dark:#98C379;"> ago</span><span style="color:#98C379;--shiki-dark:#98C379;">   Up</span><span style="color:#98C379;--shiki-dark:#98C379;"> About</span><span style="color:#98C379;--shiki-dark:#98C379;"> a</span><span style="color:#98C379;--shiki-dark:#98C379;"> minute</span><span style="color:#98C379;--shiki-dark:#98C379;">   5432/tcp</span><span style="color:#98C379;--shiki-dark:#98C379;">            db2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4c92240096d9</span><span style="color:#98C379;--shiki-dark:#98C379;">        training/postgres</span><span style="color:#98C379;--shiki-dark:#98C379;">   &quot;su postgres -c &#39;/us…&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;">   2</span><span style="color:#98C379;--shiki-dark:#98C379;"> minutes</span><span style="color:#98C379;--shiki-dark:#98C379;"> ago</span><span style="color:#98C379;--shiki-dark:#98C379;">        Up</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span><span style="color:#98C379;--shiki-dark:#98C379;"> minutes</span><span style="color:#98C379;--shiki-dark:#98C379;">        5432/tcp</span><span style="color:#98C379;--shiki-dark:#98C379;">            db1</span></span></code></pre></div><p>-volumes-from 可以多次使用来 mount 多个conatainer里的多个volumes。</p><p>这个操作是链式的， 我们在db1 中通过 --volumes-from mount进来的 volume可以继续被其他container使用</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai ~]# docker run -d --name db3 --volumes-from db1 training/postgres</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">44d0719377e86e3080b26d22adcb6055de93033dc9509ca2ecd8be2c93dc33b5</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai ~]# docker ps</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">CONTAINER</span><span style="color:#98C379;--shiki-dark:#98C379;"> ID</span><span style="color:#98C379;--shiki-dark:#98C379;">        IMAGE</span><span style="color:#98C379;--shiki-dark:#98C379;">               COMMAND</span><span style="color:#98C379;--shiki-dark:#98C379;">                  CREATED</span><span style="color:#98C379;--shiki-dark:#98C379;">             STATUS</span><span style="color:#98C379;--shiki-dark:#98C379;">              PORTS</span><span style="color:#98C379;--shiki-dark:#98C379;">               NAMES</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">44d0719377e8</span><span style="color:#98C379;--shiki-dark:#98C379;">        training/postgres</span><span style="color:#98C379;--shiki-dark:#98C379;">   &quot;su postgres -c &#39;/us…&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;">   3</span><span style="color:#98C379;--shiki-dark:#98C379;"> seconds</span><span style="color:#98C379;--shiki-dark:#98C379;"> ago</span><span style="color:#98C379;--shiki-dark:#98C379;">       Up</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span><span style="color:#98C379;--shiki-dark:#98C379;"> seconds</span><span style="color:#98C379;--shiki-dark:#98C379;">        5432/tcp</span><span style="color:#98C379;--shiki-dark:#98C379;">            db3</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">70966085a85b</span><span style="color:#98C379;--shiki-dark:#98C379;">        training/postgres</span><span style="color:#98C379;--shiki-dark:#98C379;">   &quot;su postgres -c &#39;/us…&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;">   3</span><span style="color:#98C379;--shiki-dark:#98C379;"> minutes</span><span style="color:#98C379;--shiki-dark:#98C379;"> ago</span><span style="color:#98C379;--shiki-dark:#98C379;">       Up</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 3</span><span style="color:#98C379;--shiki-dark:#98C379;"> minutes</span><span style="color:#98C379;--shiki-dark:#98C379;">        5432/tcp</span><span style="color:#98C379;--shiki-dark:#98C379;">            dbdata</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">25246ebfae2f</span><span style="color:#98C379;--shiki-dark:#98C379;">        training/postgres</span><span style="color:#98C379;--shiki-dark:#98C379;">   &quot;su postgres -c &#39;/us…&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;">   4</span><span style="color:#98C379;--shiki-dark:#98C379;"> minutes</span><span style="color:#98C379;--shiki-dark:#98C379;"> ago</span><span style="color:#98C379;--shiki-dark:#98C379;">       Up</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 4</span><span style="color:#98C379;--shiki-dark:#98C379;"> minutes</span><span style="color:#98C379;--shiki-dark:#98C379;">        5432/tcp</span><span style="color:#98C379;--shiki-dark:#98C379;">            db2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4c92240096d9</span><span style="color:#98C379;--shiki-dark:#98C379;">        training/postgres</span><span style="color:#98C379;--shiki-dark:#98C379;">   &quot;su postgres -c &#39;/us…&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;">   4</span><span style="color:#98C379;--shiki-dark:#98C379;"> minutes</span><span style="color:#98C379;--shiki-dark:#98C379;"> ago</span><span style="color:#98C379;--shiki-dark:#98C379;">       Up</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 4</span><span style="color:#98C379;--shiki-dark:#98C379;"> minutes</span><span style="color:#98C379;--shiki-dark:#98C379;">        5432/tcp</span><span style="color:#98C379;--shiki-dark:#98C379;">            db1</span></span></code></pre></div><p><strong>使用 --volumes-from 参数所挂载数据卷的容器自己并不需要保持在运行状态</strong>。</p><p><strong>如果删除了挂载的容器（包括 dbdata、db1 和 db2），数据卷并不会被自动删除。如果要删除一个数据卷，必须在删除最后一个还挂载着它的容器时使用 <code>docker rm -v</code> 命令来指定同时删除关联的容器。 这可以让用户在容器之间升级和移动数据卷</strong>。</p><h3 id="_1-3-数据备份、恢复、迁移数据卷" tabindex="-1"><a class="header-anchor" href="#_1-3-数据备份、恢复、迁移数据卷"><span>1.3 数据备份、恢复、迁移数据卷</span></a></h3><p>可以利用数据卷对其中的数据进行进行备份、恢复和迁移。</p><h4 id="_1-3-1-备份" tabindex="-1"><a class="header-anchor" href="#_1-3-1-备份"><span>1.3.1 备份</span></a></h4><p>首先使用 --volumes-from 标记来创建一个加载 dbdata 容器卷的容器，并从本地主机挂载当前到容器的 /backup 目录。命令如下：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai ~]# docker run --volumes-from dbdata -v $(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">pwd</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">):/backup ubuntu tar cvf /backup/backup.tar /dbdata</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tar:</span><span style="color:#98C379;--shiki-dark:#98C379;"> Removing</span><span style="color:#98C379;--shiki-dark:#98C379;"> leading</span><span style="color:#98C379;--shiki-dark:#98C379;"> \`</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">/&#39; from member names</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">/dbdata/</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">[root@pdai ~]# ll | grep backup.tar</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">-rw-r--r-- 1 root root    10240 Feb 20 12:39 backup.tar</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">[root@pdai ~]#</span></span></code></pre></div><p>容器启动后，使用了 tar 命令来将 dbdata 卷备份为本地的 /backup/backup.tar。</p><h4 id="_1-3-2-恢复" tabindex="-1"><a class="header-anchor" href="#_1-3-2-恢复"><span>1.3.2 恢复</span></a></h4><p>如果要恢复数据到一个容器</p><p>首先创建一个带有数据卷的容器 dbdata2</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai ~]# docker run -v /dbdata --name dbdata2 ubuntu /bin/bash</span></span></code></pre></div><p>然后创建另一个容器，挂载 dbdata2 的容器，并使用 untar 解压备份文件到挂载的容器卷中。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@pdai ~]# docker run --volumes-from dbdata2 -v $(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">pwd</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">):/backup ubuntu tar xvf /backup/backup.tar</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">dbdata/</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/devops/docker/docker-06-data.html" target="_blank" rel="noopener noreferrer"><strong>Docker基础 - Docker数据卷和数据管理</strong></a></p>`,53)]))}const t=a(e,[["render",r],["__file","docker-06-data.html.vue"]]),k=JSON.parse('{"path":"/posts/Docker/docker-06-data.html","title":"Docker基础 - Docker数据卷和数据管理","lang":"zh-CN","frontmatter":{"description":"Docker基础 - Docker数据卷和数据管理 Docker 容器的数据放哪里呢？ 本文带你理解如何在 Docker 内部以及容器之间管理数据 1. Docker 数据管理简介 实际上我们的容器就好像是一个简易版的操作系统，只不过系统中只安装了我们的程序运行所需要的环境，前边说到我们的容器是可以删除的，那如果删除了，容器中的程序产生的需要持久化的数...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Docker/docker-06-data.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Docker基础 - Docker数据卷和数据管理"}],["meta",{"property":"og:description","content":"Docker基础 - Docker数据卷和数据管理 Docker 容器的数据放哪里呢？ 本文带你理解如何在 Docker 内部以及容器之间管理数据 1. Docker 数据管理简介 实际上我们的容器就好像是一个简易版的操作系统，只不过系统中只安装了我们的程序运行所需要的环境，前边说到我们的容器是可以删除的，那如果删除了，容器中的程序产生的需要持久化的数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker基础 - Docker数据卷和数据管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. Docker 数据管理简介","slug":"_1-docker-数据管理简介","link":"#_1-docker-数据管理简介","children":[{"level":3,"title":"1.1 数据卷(Data Volume)","slug":"_1-1-数据卷-data-volume","link":"#_1-1-数据卷-data-volume","children":[]},{"level":3,"title":"1.2 数据卷容器(Data Volume Container)","slug":"_1-2-数据卷容器-data-volume-container","link":"#_1-2-数据卷容器-data-volume-container","children":[]},{"level":3,"title":"1.3 数据备份、恢复、迁移数据卷","slug":"_1-3-数据备份、恢复、迁移数据卷","link":"#_1-3-数据备份、恢复、迁移数据卷","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.85,"words":1756},"filePathRelative":"posts/Docker/docker-06-data.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>Docker 容器的数据放哪里呢？ 本文带你理解如何在 Docker 内部以及容器之间管理数据</p>\\n</blockquote>\\n<h2>1. Docker 数据管理简介</h2>\\n<blockquote>\\n<p>实际上我们的容器就好像是一个简易版的操作系统，只不过系统中只安装了我们的程序运行所需要的环境，前边说到我们的容器是可以删除的，那如果删除了，容器中的程序产生的需要持久化的数据怎么办呢？容器运行的时候我们可以进容器去查看，容器一旦删除就什么都没有了。</p>\\n</blockquote>\\n<p>所以数据卷就是来解决这个问题的，是<strong>用来将数据持久化到我们宿主机上，与容器间实现数据共享，简单的说就是将宿主机的目录映射到容器中的目录</strong>，应用程序在容器中的目录读写数据会同步到宿主机上，这样容器产生的数据就可以持久化了，比如我们的数据库容器，就可以把数据存储到我们宿主机上的真实磁盘中。</p>","autoDesc":true}');export{t as comp,k as data};
