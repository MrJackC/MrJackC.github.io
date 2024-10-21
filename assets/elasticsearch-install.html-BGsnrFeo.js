import{_ as a,c as n,a as i,o as l}from"./app-BhoNqsD-.js";const e={};function r(t,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="es详解-docker安装elk" tabindex="-1"><a class="header-anchor" href="#es详解-docker安装elk"><span>ES详解 - Docker安装Elk</span></a></h1><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121423632.png" alt="image-20220803230055166" tabindex="0" loading="lazy"><figcaption>image-20220803230055166</figcaption></figure><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>ELK是Elasticsearch+Logstash+Kibana简称</p><ul><li>Elasticsearch 是一个分布式的搜索和分析引擎，可以用于全文检索、结构化检索和分析，并能将这三者结合起来。Elasticsearch 基于 Lucene 开发，现在是使用最广的开源搜索引擎之一。</li><li>Logstash 简单来说就是一根具备实时数据传输能力的管道，负责将数据信息从管道的输入端传输到管道的输出端，与此同时这根管道还可以让你根据自己的需求在中间加上滤网，Logstash提供了很多功能强大的滤网以满足你的各种应用场景。</li><li>Kibana 是一个开源的分析与可视化平台，设计出来用于和Elasticsearch一起使用的。你可以用kibana搜索、查看、交互存放在Elasticsearch索引里的数据，使用各种不同的图标、表格、地图等，kibana能够很轻易的展示高级数据分析与可视化。</li></ul><h2 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装"><span>2. 安装</span></a></h2><h3 id="_2-1-编写docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#_2-1-编写docker-compose-yml"><span>2.1 编写docker-compose.yml</span></a></h3><div class="language-yml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;3&#39;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">services</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  elasticsearch</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    image</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">elasticsearch:7.7.0</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  #镜像</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    container_name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">elk_elasticsearch</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  #定义容器名称</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    restart</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">always</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  #开机启动，失败也会一直重启</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    environment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;cluster.name=elasticsearch&quot;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #设置集群名称为elasticsearch</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;discovery.type=single-node&quot;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #以单一节点模式启动</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;ES_JAVA_OPTS=-Xms512m -Xmx1024m&quot;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #设置使用jvm内存大小</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    volumes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">./elasticsearch/plugins:/usr/share/elasticsearch/plugins</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #插件文件挂载</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">./elasticsearch/data:/usr/share/elasticsearch/data</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #数据文件挂载</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    ports</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">9200:9200</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  kibana</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    image</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">kibana:7.7.0</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    container_name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">elk_kibana</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    restart</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">always</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    depends_on</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">elasticsearch</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #kibana在elasticsearch启动之后再启动</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    environment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">ELASTICSEARCH_URL=http://elasticsearch:9200</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #设置访问elasticsearch的地址</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    ports</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">5601:5601</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  logstash</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    image</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">logstash:7.7.0</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    container_name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">elk_logstash</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    restart</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">always</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    volumes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">./logstash/logstash-springboot.conf:/usr/share/logstash/pipeline/logstash.conf</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #挂载logstash的配置文件</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    depends_on</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">elasticsearch</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #kibana在elasticsearch启动之后再启动</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    links</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">elasticsearch:es</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #可以用es这个域名访问elasticsearch服务</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    ports</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#98C379;--shiki-dark:#98C379;">4560:4560</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-新建logstash-logstash-springboot-conf文件" tabindex="-1"><a class="header-anchor" href="#_2-2-新建logstash-logstash-springboot-conf文件"><span>2.2 新建logstash/logstash-springboot.conf文件</span></a></h3><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">input</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  tcp</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    mode</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> =&gt;</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;server&quot;</span></span>
<span class="line"><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    host</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> =&gt;</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;0.0.0.0&quot;</span></span>
<span class="line"><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    port</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> =&gt;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 4560</span></span>
<span class="line"><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    codec</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> =&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> json_lines</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">output</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  elasticsearch</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    hosts</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> =&gt;</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;es:9200&quot;</span></span>
<span class="line"><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    index</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> =&gt;</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;springboot-logstash-%{+YYYY.MM.dd}&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="_2-3-安装-运行elk" tabindex="-1"><a class="header-anchor" href="#_2-3-安装-运行elk"><span>2.3 安装，运行ELK</span></a></h3><div class="language-php" data-ext="php" data-title="php"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">docker</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">compose up </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">d</span></span></code></pre></div><h3 id="_2-4-访问kibana" tabindex="-1"><a class="header-anchor" href="#_2-4-访问kibana"><span>2.4 访问Kibana</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121423683.png" alt="image-20220803230538798" tabindex="0" loading="lazy"><figcaption>image-20220803230538798</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.jianshu.com/p/2d78ce6bc504" target="_blank" rel="noopener noreferrer">docker-compose安装ELK</a></p>`,16)]))}const c=a(e,[["render",r],["__file","elasticsearch-install.html.vue"]]),p=JSON.parse('{"path":"/posts/Database/ES/elasticsearch-install.html","title":"ES详解 - Docker安装Elk","lang":"zh-CN","frontmatter":{"aliases":"ES详解 - Docker安装Elk","tags":null,"cssclass":null,"source":null,"order":30,"category":["ElasticSearch"],"created":"2024-02-22 10:49","updated":"2024-03-12 14:23","description":"ES详解 - Docker安装Elk image-20220803230055166image-20220803230055166 1. 简介 ELK是Elasticsearch+Logstash+Kibana简称 Elasticsearch 是一个分布式的搜索和分析引擎，可以用于全文检索、结构化检索和分析，并能将这三者结合起来。Elasticsear...","head":[["meta",{"property":"og:url","content":"https://mrjason.me/posts/Database/ES/elasticsearch-install.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"ES详解 - Docker安装Elk"}],["meta",{"property":"og:description","content":"ES详解 - Docker安装Elk image-20220803230055166image-20220803230055166 1. 简介 ELK是Elasticsearch+Logstash+Kibana简称 Elasticsearch 是一个分布式的搜索和分析引擎，可以用于全文检索、结构化检索和分析，并能将这三者结合起来。Elasticsear..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121423632.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ES详解 - Docker安装Elk\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121423632.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121423683.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjason.me\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 安装","slug":"_2-安装","link":"#_2-安装","children":[{"level":3,"title":"2.1 编写docker-compose.yml","slug":"_2-1-编写docker-compose-yml","link":"#_2-1-编写docker-compose-yml","children":[]},{"level":3,"title":"2.2 新建logstash/logstash-springboot.conf文件","slug":"_2-2-新建logstash-logstash-springboot-conf文件","link":"#_2-2-新建logstash-logstash-springboot-conf文件","children":[]},{"level":3,"title":"2.3 安装，运行ELK","slug":"_2-3-安装-运行elk","link":"#_2-3-安装-运行elk","children":[]},{"level":3,"title":"2.4 访问Kibana","slug":"_2-4-访问kibana","link":"#_2-4-访问kibana","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.76,"words":528},"filePathRelative":"posts/Database/ES/elasticsearch-install.md","localizedDate":"2024年10月21日","excerpt":"\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121423632.png\\" alt=\\"image-20220803230055166\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220803230055166</figcaption></figure>\\n<h2>1. 简介</h2>\\n<p>ELK是Elasticsearch+Logstash+Kibana简称</p>\\n<ul>\\n<li>Elasticsearch 是一个分布式的搜索和分析引擎，可以用于全文检索、结构化检索和分析，并能将这三者结合起来。Elasticsearch 基于 Lucene 开发，现在是使用最广的开源搜索引擎之一。</li>\\n<li>Logstash 简单来说就是一根具备实时数据传输能力的管道，负责将数据信息从管道的输入端传输到管道的输出端，与此同时这根管道还可以让你根据自己的需求在中间加上滤网，Logstash提供了很多功能强大的滤网以满足你的各种应用场景。</li>\\n<li>Kibana 是一个开源的分析与可视化平台，设计出来用于和Elasticsearch一起使用的。你可以用kibana搜索、查看、交互存放在Elasticsearch索引里的数据，使用各种不同的图标、表格、地图等，kibana能够很轻易的展示高级数据分析与可视化。</li>\\n</ul>","autoDesc":true}');export{c as comp,p as data};
