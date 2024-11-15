import{_ as a,c as e,a as o,o as r}from"./app-fWubcX7c.js";const i={};function n(l,s){return r(),e("div",null,s[0]||(s[0]=[o(`<h1 id="通过docker安装oracle" tabindex="-1"><a class="header-anchor" href="#通过docker安装oracle"><span>通过docker安装Oracle</span></a></h1><h2 id="_1-安装oracle" tabindex="-1"><a class="header-anchor" href="#_1-安装oracle"><span>1. 安装Oracle</span></a></h2><ol><li><p>拉取镜像</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">docker</span><span style="color:#98C379;--shiki-dark:#98C379;"> pull</span><span style="color:#98C379;--shiki-dark:#98C379;"> registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g</span></span></code></pre></div><p>镜像大概有6.8G</p><p>查看镜像信息：</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">docker</span><span style="color:#98C379;--shiki-dark:#98C379;"> iamges</span></span></code></pre></div></li><li><p>创建容器</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">docker</span><span style="color:#98C379;--shiki-dark:#98C379;"> run</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -d</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -p</span><span style="color:#98C379;--shiki-dark:#98C379;"> 1521:1521</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --name</span><span style="color:#98C379;--shiki-dark:#98C379;"> oracle_11g</span><span style="color:#98C379;--shiki-dark:#98C379;"> registry.aliyuncs.com/helowin/oracle_11g</span></span></code></pre></div><p>启动容器</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">docker</span><span style="color:#98C379;--shiki-dark:#98C379;"> start</span><span style="color:#98C379;--shiki-dark:#98C379;"> oracle_11g</span></span></code></pre></div></li><li><p>进入控制台设置用户信息：</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">docker</span><span style="color:#98C379;--shiki-dark:#98C379;"> exec</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -it</span><span style="color:#98C379;--shiki-dark:#98C379;"> oracle_11g</span><span style="color:#98C379;--shiki-dark:#98C379;"> bash</span></span></code></pre></div></li><li><p>切换成root进行操作：</p><blockquote><p>su - root</p></blockquote><p>输入密码helowin</p></li><li><p>设置oracle环境变量如下：</p><p>vi /etc/profile文件末尾添加：</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ORACLE_HOME</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">home</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">oracle</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">app</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">oracle</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">product</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">11</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dbhome_2</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ORACLE_SID</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;">helowin</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> PATH</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;">PATH</span></span></code></pre></div></li><li><p>切换回oracle用户：</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">su</span><span style="color:#98C379;--shiki-dark:#98C379;"> -</span><span style="color:#98C379;--shiki-dark:#98C379;"> oracle</span></span></code></pre></div></li><li><p>修改sys、system用户密码</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>sqlplus /nolog</span></span>
<span class="line"><span>conn /as sysdba</span></span>
<span class="line"><span>alter user system identified by oracle;</span></span>
<span class="line"><span>alter user sys identified by oracle;</span></span>
<span class="line"><span>ALTER PROFILE DEFAULT LIMIT PASSWORD_LIFE_TIME UNLIMITED;</span></span></code></pre></div><p>此处的oracle 就是你设置的密码</p><p>Ps:默认密码是：helowin</p></li></ol><h2 id="_2-遇到的问题" tabindex="-1"><a class="header-anchor" href="#_2-遇到的问题"><span>2. 遇到的问题</span></a></h2><h3 id="_2-1-远程连接提示" tabindex="-1"><a class="header-anchor" href="#_2-1-远程连接提示"><span>2.1 远程连接提示</span></a></h3><p>ORA-12514: TNS:listener does not currently know of service requested in connect descriptor</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130958957.png" alt="image-20200507212411220" tabindex="0" loading="lazy"><figcaption>image-20200507212411220</figcaption></figure><p>主要原因是service name 设置的并不是ORCL 导致</p><ul><li><p>解决方案：</p><p>service name 改为 helowin</p></li><li><p>解决步骤</p><ol><li><p>进入docker 容器</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">docker</span><span style="color:#98C379;--shiki-dark:#98C379;"> exec</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -it</span><span style="color:#98C379;--shiki-dark:#98C379;"> oracle_11g</span><span style="color:#98C379;--shiki-dark:#98C379;"> bash</span></span></code></pre></div></li><li><p>进入 tnsnames.ora所在的目录</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">cd</span><span style="color:#98C379;--shiki-dark:#98C379;"> /home/oracle/app/oracle/product/11.2.0/dbhome_2/network/admin</span></span></code></pre></div></li><li><p>查看 tnsnames.ora</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>vi  tnsnames.ora</span></span></code></pre></div><p>可以看到SERVICE_NAME = helowin</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130958007.png" alt="image-20200507213419605" tabindex="0" loading="lazy"><figcaption>image-20200507213419605</figcaption></figure><p>serviceName 改为helowin 或者这里改为orcl</p></li></ol></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://segmentfault.com/a/1190000020633619" target="_blank" rel="noopener noreferrer">centos7使用docker安装oracle</a></p><p><a href="https://blog.csdn.net/weixin_30657541/article/details/98204681" target="_blank" rel="noopener noreferrer">Linux下如何查找sqlnet.ora 和listener.ora 和tnsnames.ora 配置文件的目录</a></p>`,12)]))}const c=a(i,[["render",n],["__file","oracle-z-docker-install.html.vue"]]),t=JSON.parse('{"path":"/posts/Database/ORACLE/oracle-z-docker-install.html","title":"通过docker安装Oracle","lang":"zh-CN","frontmatter":{"aliases":"通过docker安装Oracle","tags":null,"cssclass":null,"source":null,"order":10,"category":["数据库"],"created":"2024-02-22 10:49","updated":"2024-03-13 09:58","description":"通过docker安装Oracle 1. 安装Oracle 拉取镜像 镜像大概有6.8G 查看镜像信息： 创建容器 启动容器 进入控制台设置用户信息： 切换成root进行操作： su - root 输入密码helowin 设置oracle环境变量如下： vi /etc/profile文件末尾添加： 切换回oracle用户： 修改sys、system用户密...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/ORACLE/oracle-z-docker-install.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"通过docker安装Oracle"}],["meta",{"property":"og:description","content":"通过docker安装Oracle 1. 安装Oracle 拉取镜像 镜像大概有6.8G 查看镜像信息： 创建容器 启动容器 进入控制台设置用户信息： 切换成root进行操作： su - root 输入密码helowin 设置oracle环境变量如下： vi /etc/profile文件末尾添加： 切换回oracle用户： 修改sys、system用户密..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130958957.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"通过docker安装Oracle\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130958957.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130958007.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 安装Oracle","slug":"_1-安装oracle","link":"#_1-安装oracle","children":[]},{"level":2,"title":"2. 遇到的问题","slug":"_2-遇到的问题","link":"#_2-遇到的问题","children":[{"level":3,"title":"2.1 远程连接提示","slug":"_2-1-远程连接提示","link":"#_2-1-远程连接提示","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.18,"words":353},"filePathRelative":"posts/Database/ORACLE/oracle-z-docker-install.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 安装Oracle</h2>\\n<ol>\\n<li>\\n<p>拉取镜像</p>\\n<div class=\\"language-sh\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">docker</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> pull</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g</span></span></code></pre>\\n</div><p>镜像大概有6.8G</p>\\n<p>查看镜像信息：</p>\\n<div class=\\"language-sh\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">docker</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> iamges</span></span></code></pre>\\n</div></li>\\n<li>\\n<p>创建容器</p>\\n<div class=\\"language-sh\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">docker</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> run</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -d</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -p</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 1521:1521</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> --name</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> oracle_11g</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> registry.aliyuncs.com/helowin/oracle_11g</span></span></code></pre>\\n</div><p>启动容器</p>\\n<div class=\\"language-sh\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">docker</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> start</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> oracle_11g</span></span></code></pre>\\n</div></li>\\n<li>\\n<p>进入控制台设置用户信息：</p>\\n<div class=\\"language-sh\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">docker</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> exec</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -it</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> oracle_11g</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> bash</span></span></code></pre>\\n</div></li>\\n<li>\\n<p>切换成root进行操作：</p>\\n<blockquote>\\n<p>su - root</p>\\n</blockquote>\\n<p>输入密码helowin</p>\\n</li>\\n<li>\\n<p>设置oracle环境变量如下：</p>\\n<p>vi /etc/profile文件末尾添加：</p>\\n<div class=\\"language-sh\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">export</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> ORACLE_HOME</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">home</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">oracle</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">app</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">oracle</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">product</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">11</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">2</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">0</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">dbhome_2</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">export</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> ORACLE_SID</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">helowin</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">export</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> PATH</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">PATH</span></span></code></pre>\\n</div></li>\\n<li>\\n<p>切换回oracle用户：</p>\\n<div class=\\"language-sh\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">su</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> -</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> oracle</span></span></code></pre>\\n</div></li>\\n<li>\\n<p>修改sys、system用户密码</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>sqlplus /nolog</span></span>\\n<span class=\\"line\\"><span>conn /as sysdba</span></span>\\n<span class=\\"line\\"><span>alter user system identified by oracle;</span></span>\\n<span class=\\"line\\"><span>alter user sys identified by oracle;</span></span>\\n<span class=\\"line\\"><span>ALTER PROFILE DEFAULT LIMIT PASSWORD_LIFE_TIME UNLIMITED;</span></span></code></pre>\\n</div><p>此处的oracle 就是你设置的密码</p>\\n<p>Ps:默认密码是：helowin</p>\\n</li>\\n</ol>","autoDesc":true}');export{c as comp,t as data};
