import{_ as a,c as n,a as i,o as l}from"./app-tJW29Kmg.js";const e={};function r(p,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="kafka-安装" tabindex="-1"><a class="header-anchor" href="#kafka-安装"><span>Kafka - 安装</span></a></h1><h2 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装"><span>1. 安装</span></a></h2><h3 id="_1-1-docker-compose-安装" tabindex="-1"><a class="header-anchor" href="#_1-1-docker-compose-安装"><span>1.1 docker-compose 安装</span></a></h3><h4 id="_1-1-1-docker-compose-yml-编写" tabindex="-1"><a class="header-anchor" href="#_1-1-1-docker-compose-yml-编写"><span>1.1.1 docker-compose.yml 编写</span></a></h4><div class="language-yml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">services</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  zookeeper</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    image</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;bitnami/zookeeper:3.8.0&#39;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    container_name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">zookeeper</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    ports</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;2181:2181&quot;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    environment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      TZ</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">Asia/Shanghai</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      ALLOW_ANONYMOUS_LOGIN</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;yes&quot;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      ZOO_SERVER_ID</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      ZOO_PORT_NUMBER</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">2181</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # network_mode: &quot;host&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  kafka</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    image</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;bitnami/kafka:3.2.0&#39;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    container_name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">kafka</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    ports</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;9092:9092&quot;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    environment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      TZ</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">Asia/Shanghai</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 更多变量 查看文档 https://github.com/bitnami/bitnami-docker-kafka/blob/master/README.md</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      KAFKA_BROKER_ID</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 监听端口</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      KAFKA_CFG_LISTENERS</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">PLAINTEXT://:9092</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 实际访问ip 本地用 127 内网用 192 外网用 外网ip</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      KAFKA_CFG_ADVERTISED_LISTENERS</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">PLAINTEXT://192.168.31.165:9092</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      KAFKA_CFG_ZOOKEEPER_CONNECT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">127.0.0.1:2181</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      ALLOW_PLAINTEXT_LISTENER</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;yes&quot;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    volumes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">./data:/bitnami/kafka/data</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    depends_on</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">zookeeper</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #network_mode: &quot;host&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  kafka-manager</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    image</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">sheepkiller/kafka-manager:latest</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    container_name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">kafka-manager</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    ports</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;19092:19092&quot;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    environment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      ZK_HOSTS</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">127.0.0.1:2181</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      APPLICATION_SECRET</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">letmein</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      KAFKA_MANAGER_USERNAME</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">ruoyi</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      KAFKA_MANAGER_PASSWORD</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">ruoyi123</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      KM_ARGS</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">-Dhttp.port=19092</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    depends_on</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">kafka</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #network_mode: &quot;host&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-2-启动" tabindex="-1"><a class="header-anchor" href="#_1-1-2-启动"><span>1.1.2 启动</span></a></h4><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">docker-compose</span><span style="color:#98C379;--shiki-dark:#98C379;"> up</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -d</span></span></code></pre></div><h2 id="_2-控制台管理" tabindex="-1"><a class="header-anchor" href="#_2-控制台管理"><span>2. 控制台管理</span></a></h2><h3 id="_2-1-进入控制台" tabindex="-1"><a class="header-anchor" href="#_2-1-进入控制台"><span>2.1 进入控制台</span></a></h3><p><a href="http://localhost:19092/" target="_blank" rel="noopener noreferrer">http://localhost:19092/</a></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231111290.png" alt="image-20220922133836608" tabindex="0" loading="lazy"><figcaption>image-20220922133836608</figcaption></figure><h3 id="_2-2-创建集群链接" tabindex="-1"><a class="header-anchor" href="#_2-2-创建集群链接"><span>2.2 创建集群链接</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231111337.png" alt="image-20220922133941643" tabindex="0" loading="lazy"><figcaption>image-20220922133941643</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231111367.png" alt="image-20220922134027419" tabindex="0" loading="lazy"><figcaption>image-20220922134027419</figcaption></figure><h3 id="_2-3-添加list" tabindex="-1"><a class="header-anchor" href="#_2-3-添加list"><span>2.3 添加List</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231111388.png" alt="image-20220922134525592" tabindex="0" loading="lazy"><figcaption>image-20220922134525592</figcaption></figure><h3 id="_2-4-查看" tabindex="-1"><a class="header-anchor" href="#_2-4-查看"><span>2.4 查看</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231111414.png" alt="image-20220922134557163" tabindex="0" loading="lazy"><figcaption>image-20220922134557163</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://lionli.blog.csdn.net/article/details/125855550" target="_blank" rel="noopener noreferrer">docker-compose 安装 Kafka 3.X 附带可视化界面</a></p>`,20)]))}const c=a(e,[["render",r],["__file","kafka-x-install.html.vue"]]),t=JSON.parse(`{"path":"/posts/MiddleWare/MQ_KAFKA/kafka-x-install.html","title":"Kafka - 安装","lang":"zh-CN","frontmatter":{"aliases":"Kafka - 安装","tags":null,"cssclass":null,"source":null,"order":40,"category":["kafka","MQ"],"created":"2024-02-22 10:50","updated":"2024-04-23 11:11","description":"Kafka - 安装 1. 安装 1.1 docker-compose 安装 1.1.1 docker-compose.yml 编写 1.1.2 启动 2. 控制台管理 2.1 进入控制台 http://localhost:19092/ image-20220922133836608image-20220922133836608 2.2 创建集群链接 ...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/MiddleWare/MQ_KAFKA/kafka-x-install.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Kafka - 安装"}],["meta",{"property":"og:description","content":"Kafka - 安装 1. 安装 1.1 docker-compose 安装 1.1.1 docker-compose.yml 编写 1.1.2 启动 2. 控制台管理 2.1 进入控制台 http://localhost:19092/ image-20220922133836608image-20220922133836608 2.2 创建集群链接 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231111290.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kafka - 安装\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231111290.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231111337.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231111367.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231111388.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231111414.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 安装","slug":"_1-安装","link":"#_1-安装","children":[{"level":3,"title":"1.1 docker-compose 安装","slug":"_1-1-docker-compose-安装","link":"#_1-1-docker-compose-安装","children":[]}]},{"level":2,"title":"2. 控制台管理","slug":"_2-控制台管理","link":"#_2-控制台管理","children":[{"level":3,"title":"2.1 进入控制台","slug":"_2-1-进入控制台","link":"#_2-1-进入控制台","children":[]},{"level":3,"title":"2.2 创建集群链接","slug":"_2-2-创建集群链接","link":"#_2-2-创建集群链接","children":[]},{"level":3,"title":"2.3 添加List","slug":"_2-3-添加list","link":"#_2-3-添加list","children":[]},{"level":3,"title":"2.4 查看","slug":"_2-4-查看","link":"#_2-4-查看","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.8,"words":241},"filePathRelative":"posts/MiddleWare/MQ_KAFKA/kafka-x-install.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 安装</h2>\\n<h3>1.1 docker-compose 安装</h3>\\n<h4>1.1.1 docker-compose.yml 编写</h4>\\n<div class=\\"language-yml line-numbers-mode\\" data-ext=\\"yml\\" data-title=\\"yml\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">version</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'3'</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">services</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">  zookeeper</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">    image</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'bitnami/zookeeper:3.8.0'</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">    container_name</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">zookeeper</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">    ports</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">      - </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"2181:2181\\"</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">    environment</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">      TZ</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">Asia/Shanghai</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">      ALLOW_ANONYMOUS_LOGIN</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"yes\\"</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">      ZOO_SERVER_ID</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">1</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">      ZOO_PORT_NUMBER</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">2181</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    # network_mode: \\"host\\"</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">  kafka</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">    image</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'bitnami/kafka:3.2.0'</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">    container_name</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">kafka</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">    ports</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">      - </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"9092:9092\\"</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">    environment</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">      TZ</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">Asia/Shanghai</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">      # 更多变量 查看文档 https://github.com/bitnami/bitnami-docker-kafka/blob/master/README.md</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">      KAFKA_BROKER_ID</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">1</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">      # 监听端口</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">      KAFKA_CFG_LISTENERS</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">PLAINTEXT://:9092</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">      # 实际访问ip 本地用 127 内网用 192 外网用 外网ip</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">      KAFKA_CFG_ADVERTISED_LISTENERS</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">PLAINTEXT://192.168.31.165:9092</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">      KAFKA_CFG_ZOOKEEPER_CONNECT</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">127.0.0.1:2181</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">      ALLOW_PLAINTEXT_LISTENER</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"yes\\"</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">    volumes</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">      - </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">./data:/bitnami/kafka/data</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">    depends_on</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">      - </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">zookeeper</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    #network_mode: \\"host\\"</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">  kafka-manager</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">    image</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">sheepkiller/kafka-manager:latest</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">    container_name</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">kafka-manager</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">    ports</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">      - </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"19092:19092\\"</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">    environment</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">      ZK_HOSTS</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">127.0.0.1:2181</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">      APPLICATION_SECRET</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">letmein</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">      KAFKA_MANAGER_USERNAME</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">ruoyi</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">      KAFKA_MANAGER_PASSWORD</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">ruoyi123</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">      KM_ARGS</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">-Dhttp.port=19092</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">    depends_on</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">      - </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">kafka</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    #network_mode: \\"host\\"</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{c as comp,t as data};
