import{_ as a,c as e,a as t,o}from"./app-JRvFIbSa.js";const n={};function i(s,r){return o(),e("div",null,r[0]||(r[0]=[t(`<h1 id="docker管理-可视化工具portainer" tabindex="-1"><a class="header-anchor" href="#docker管理-可视化工具portainer"><span>docker管理 - 可视化工具Portainer</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p><a href="https://github.com/portainer/portainer" target="_blank" rel="noopener noreferrer">https://github.com/portainer/portainer</a><br> Portainer是一个轻量级的管理UI，可让您轻松管理不同的Docker环境（Docker主机或Swarm集群）。 Portainer的意图是易于部署和使用。它由一个可以在任何Docker引擎上运行的容器组成（可以部署为Linux容器或Windows本机容器，也支持其他平台）。 Portainer允许您管理所有Docker资源（容器，映像，卷，网络等）！它与独立的Docker引擎和 Docker Swarm模式兼容。</p><h3 id="_1-1-优点" tabindex="-1"><a class="header-anchor" href="#_1-1-优点"><span>1.1 优点</span></a></h3><ol><li>支持容器管理、镜像管理(导入、导出)</li><li>轻量级，消耗资源少</li><li>基于docker api，安全性高，可指定docker api端口，支持TLS证书认证</li><li>支持权限分配</li><li>支持集群</li><li>github上目前持续维护更新</li></ol><h2 id="_2-下载portainer镜像" tabindex="-1"><a class="header-anchor" href="#_2-下载portainer镜像"><span>2. 下载Portainer镜像</span></a></h2><div class="language-powershell" data-ext="powershell" data-title="powershell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">docker search portainer   </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#搜索当前有哪些Portainer的镜像</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">docker pull portainer</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">portainer   </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#pull 标星最多的镜像（STARS数最多的）</span></span></code></pre></div><h2 id="_3-运行portainer镜像" tabindex="-1"><a class="header-anchor" href="#_3-运行portainer镜像"><span>3. 运行Portainer镜像</span></a></h2><p>运行方式有两种：单机运行 和 集群运行</p><h3 id="_3-1-单机运行" tabindex="-1"><a class="header-anchor" href="#_3-1-单机运行"><span>3.1 单机运行</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">docker</span><span style="color:#98C379;--shiki-dark:#98C379;"> run</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -d</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -p</span><span style="color:#98C379;--shiki-dark:#98C379;"> 9000:9000</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --restart=always</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -v</span><span style="color:#98C379;--shiki-dark:#98C379;"> /var/run/docker.sock:/var/run/docker.sock</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -v</span><span style="color:#98C379;--shiki-dark:#98C379;"> portainer_data:/data</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --name</span><span style="color:#98C379;--shiki-dark:#98C379;"> prtainer</span><span style="color:#98C379;--shiki-dark:#98C379;"> portainer/portainer</span></span></code></pre></div><p>参数说明：<br> -d：容器在后台运行；<br> -p 9000:9000 ：宿主机9000端口映射容器中的9000端口（前面的是宿主机端口，后面的是容器端口）；<br> –restart 标志会检查容器的退出代码，并据此来决定是否要重启容器，默认不会重启；<br> –restart=always：自动重启该容器；<br> -v /var/run/docker.sock:/var/run/docker.sock ：把宿主机的Docker守护进程(Docker daemon)默认监听的Unix域套接字挂载到容器中；<br> -v portainer_data:/data ：把宿主机portainer_data数据卷挂载到容器/data目录；<br> –name prtainer-test ： 给容器起名为portainer-libai；</p><h3 id="_3-2-汉化安装" tabindex="-1"><a class="header-anchor" href="#_3-2-汉化安装"><span>3.2 汉化安装：</span></a></h3><p>默认安装的是英文版的，有需要中文汉化的可以上传汉化包进行汉化。（<a href="https://pan.baidu.com/s/1ksUzbf9jkoWiCOSKBH6kEQ" target="_blank" rel="noopener noreferrer">汉化版点击下载</a>）提取码：6chp</p><p>将解压后的public文件夹上传到centos系统的根目录下，请注意，是centos系统的根目录。</p><p>然后执行以下命令：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">docker</span><span style="color:#98C379;--shiki-dark:#98C379;"> run</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -d</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -p</span><span style="color:#98C379;--shiki-dark:#98C379;"> 9000:9000</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --restart=always</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -v</span><span style="color:#98C379;--shiki-dark:#98C379;"> /var/run/docker.sock:/var/run/docker.sock</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -v</span><span style="color:#98C379;--shiki-dark:#98C379;"> portainer_data:/data</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -v</span><span style="color:#98C379;--shiki-dark:#98C379;"> /public:/public</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --name</span><span style="color:#98C379;--shiki-dark:#98C379;"> prtainer-test</span><span style="color:#98C379;--shiki-dark:#98C379;"> portainer/portainer（如果已部署，需要将已部署的容器删除）</span></span></code></pre></div><p>docker ps #查看下进程</p><h2 id="_3-3-使用portainer" tabindex="-1"><a class="header-anchor" href="#_3-3-使用portainer"><span>3.3 使用Portainer</span></a></h2><p>地址：<a href="http://ip:9000" target="_blank" rel="noopener noreferrer">http://ip:9000</a>，首次访问需要先创建管理员账号和密码，设置下</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231015082.png" alt="image-20221118133933435" tabindex="0" loading="lazy"><figcaption>image-20221118133933435</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/qq_34528463/article/details/106687234" target="_blank" rel="noopener noreferrer">docker可视化管理——Portainer安装教程</a></p>`,23)]))}const l=a(n,[["render",i],["__file","docker-y-manage-portainer.html.vue"]]),c=JSON.parse('{"path":"/posts/Docker/docker-y-manage-portainer.html","title":"docker管理 - 可视化工具Portainer","lang":"zh-CN","frontmatter":{"description":"docker管理 - 可视化工具Portainer 1. 简介 https://github.com/portainer/portainer Portainer是一个轻量级的管理UI，可让您轻松管理不同的Docker环境（Docker主机或Swarm集群）。 Portainer的意图是易于部署和使用。它由一个可以在任何Docker引擎上运行的容器组成（...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Docker/docker-y-manage-portainer.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"docker管理 - 可视化工具Portainer"}],["meta",{"property":"og:description","content":"docker管理 - 可视化工具Portainer 1. 简介 https://github.com/portainer/portainer Portainer是一个轻量级的管理UI，可让您轻松管理不同的Docker环境（Docker主机或Swarm集群）。 Portainer的意图是易于部署和使用。它由一个可以在任何Docker引擎上运行的容器组成（..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231015082.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"docker管理 - 可视化工具Portainer\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231015082.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 优点","slug":"_1-1-优点","link":"#_1-1-优点","children":[]}]},{"level":2,"title":"2. 下载Portainer镜像","slug":"_2-下载portainer镜像","link":"#_2-下载portainer镜像","children":[]},{"level":2,"title":"3. 运行Portainer镜像","slug":"_3-运行portainer镜像","link":"#_3-运行portainer镜像","children":[{"level":3,"title":"3.1 单机运行","slug":"_3-1-单机运行","link":"#_3-1-单机运行","children":[]},{"level":3,"title":"3.2 汉化安装：","slug":"_3-2-汉化安装","link":"#_3-2-汉化安装","children":[]}]},{"level":2,"title":"3.3 使用Portainer","slug":"_3-3-使用portainer","link":"#_3-3-使用portainer","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.06,"words":617},"filePathRelative":"posts/Docker/docker-y-manage-portainer.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p><a href=\\"https://github.com/portainer/portainer\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/portainer/portainer</a><br>\\nPortainer是一个轻量级的管理UI，可让您轻松管理不同的Docker环境（Docker主机或Swarm集群）。 Portainer的意图是易于部署和使用。它由一个可以在任何Docker引擎上运行的容器组成（可以部署为Linux容器或Windows本机容器，也支持其他平台）。 Portainer允许您管理所有Docker资源（容器，映像，卷，网络等）！它与独立的Docker引擎和 Docker Swarm模式兼容。</p>","autoDesc":true}');export{l as comp,c as data};
