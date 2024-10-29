import{_ as e,c as t,a as s,o as i}from"./app-DEK5G3U7.js";const r={};function o(n,a){return i(),t("div",null,a[0]||(a[0]=[s(`<h1 id="rabbitmq安装-docker安装rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq安装-docker安装rabbitmq"><span>RabbitMQ安装 - Docker安装RabbitMQ</span></a></h1><h2 id="_1-创建rabbitmq容器" tabindex="-1"><a class="header-anchor" href="#_1-创建rabbitmq容器"><span>1. 创建rabbitMq容器</span></a></h2><ol><li><p>获取镜像并运行</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>docker run -d -p 5672:5672 -p 15672:15672 rabbitmq:3-management</span></span></code></pre></div><p>-d 后台运行程序</p><p>包含删除历史rabbitmq</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management</span></span></code></pre></div></li><li><p>查看容器运行状态</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>docker ps</span></span></code></pre></div></li><li><p>查看容器日志</p><p>查看容器日志 使用<code>docker logs -f 容器ID</code>命令可以查看容器日志，我们执行<code>docker logs -f 3ae</code>命令查看rabbitMq在启动过程中日志，3ae是容器ID的简写——容器ID太长，使用时其写前几位即可</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231124220.png" alt="image-20200802235358837" tabindex="0" loading="lazy"><figcaption>image-20200802235358837</figcaption></figure><p>从日志可以看出，rabbitMq默认创建了guest用户，并且赋予administrator角色权限，同时服务监听5672端口TCP连接和15672端口的HTTP连接，至此说明安装成功。</p></li></ol><h2 id="_2-访问rabbitmq" tabindex="-1"><a class="header-anchor" href="#_2-访问rabbitmq"><span>2. 访问rabbitMq</span></a></h2><ol><li><p>访问web界面</p><p>在浏览器 输入你的<code>主机Ip:15672</code>回车即可访问rabbitMq的Web端管理界面，默认用户名和密码都是<code>guest</code>，如图出现如下界面代表已经成功了。</p></li><li><p>新添加一个账户</p><p>默认的<code>guest</code> 账户有访问限制，默认只能通过本地网络(如 localhost) 访问，远程网络访问受限，所以在使用时我们一般另外添加用户，例如我们添加一个root用户：</p><p>1.1 进入到rabbitMq容器内部</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">docker</span><span style="color:#98C379;--shiki-dark:#98C379;"> exec</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -i</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -t</span><span style="color:#98C379;--shiki-dark:#98C379;"> 3a8161fea5d8</span><span style="color:#98C379;--shiki-dark:#98C379;"> bin/bash</span></span></code></pre></div><p>2.2 添加用户，用户名为root,密码为123456</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>rabbitmqctl add_user root 123456</span></span></code></pre></div><p>3.3 赋予root用户所有权限</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> rabbitmqctl</span><span style="color:#98C379;--shiki-dark:#98C379;"> set_permissions</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -p</span><span style="color:#98C379;--shiki-dark:#98C379;"> /</span><span style="color:#98C379;--shiki-dark:#98C379;"> root</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;.*&quot;</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;.*&quot;</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;.*&quot;</span></span></code></pre></div></li></ol><p>2.4 赋予root用户administrator角色</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>   root@3ae75edc48e2:/# rabbitmqctl set_user_tags root administrator</span></span></code></pre></div><p>2.5查看所有用户,即可看到root用户已经添加成功</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>root@3ae75edc48e2:/# rabbitmqctl list_users</span></span>
<span class="line"><span>Listing users ...</span></span>
<span class="line"><span>user	tags</span></span>
<span class="line"><span>guest	[administrator]</span></span>
<span class="line"><span>root	[administrator]</span></span></code></pre></div><p>执行<code>exit</code>命令，从容器内部退出即可。这时我们使用root账户登录web界面也是可以的。到此，rabbitMq的安装就结束了，接下里就实际代码开发。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://juejin.im/post/6844903970545090574" target="_blank" rel="noopener noreferrer">docker安装RabbitMq</a></p>`,12)]))}const c=e(r,[["render",o],["__file","rabbitmq-y-docker-install.html.vue"]]),p=JSON.parse('{"path":"/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-y-docker-install.html","title":"RabbitMQ安装 - Docker安装RabbitMQ","lang":"zh-CN","frontmatter":{"aliases":"RabbitMQ安装 - Docker安装RabbitMQ","tags":null,"cssclass":null,"source":null,"order":910,"category":["RabbitMQ","MQ"],"created":"2024-02-22 10:50","updated":"2024-10-26 09:48","description":"RabbitMQ安装 - Docker安装RabbitMQ 1. 创建rabbitMq容器 获取镜像并运行 -d 后台运行程序 包含删除历史rabbitmq 查看容器运行状态 查看容器日志 查看容器日志 使用docker logs -f 容器ID命令可以查看容器日志，我们执行docker logs -f 3ae命令查看rabbitMq在启动过程中日志，...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-y-docker-install.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"RabbitMQ安装 - Docker安装RabbitMQ"}],["meta",{"property":"og:description","content":"RabbitMQ安装 - Docker安装RabbitMQ 1. 创建rabbitMq容器 获取镜像并运行 -d 后台运行程序 包含删除历史rabbitmq 查看容器运行状态 查看容器日志 查看容器日志 使用docker logs -f 容器ID命令可以查看容器日志，我们执行docker logs -f 3ae命令查看rabbitMq在启动过程中日志，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231124220.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RabbitMQ安装 - Docker安装RabbitMQ\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231124220.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 创建rabbitMq容器","slug":"_1-创建rabbitmq容器","link":"#_1-创建rabbitmq容器","children":[]},{"level":2,"title":"2. 访问rabbitMq","slug":"_2-访问rabbitmq","link":"#_2-访问rabbitmq","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.76,"words":527},"filePathRelative":"posts/MiddleWare/MQ_Rabbitmq/rabbitmq-y-docker-install.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 创建rabbitMq容器</h2>\\n<ol>\\n<li>\\n<p>获取镜像并运行</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>docker run -d -p 5672:5672 -p 15672:15672 rabbitmq:3-management</span></span></code></pre>\\n</div><p>-d 后台运行程序</p>\\n<p>包含删除历史rabbitmq</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management</span></span></code></pre>\\n</div></li>\\n<li>\\n<p>查看容器运行状态</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>docker ps</span></span></code></pre>\\n</div></li>\\n<li>\\n<p>查看容器日志</p>\\n<p>查看容器日志 使用<code>docker logs -f 容器ID</code>命令可以查看容器日志，我们执行<code>docker logs -f 3ae</code>命令查看rabbitMq在启动过程中日志，3ae是容器ID的简写——容器ID太长，使用时其写前几位即可</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231124220.png\\" alt=\\"image-20200802235358837\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20200802235358837</figcaption></figure>\\n<p>从日志可以看出，rabbitMq默认创建了guest用户，并且赋予administrator角色权限，同时服务监听5672端口TCP连接和15672端口的HTTP连接，至此说明安装成功。</p>\\n</li>\\n</ol>","autoDesc":true}');export{c as comp,p as data};
