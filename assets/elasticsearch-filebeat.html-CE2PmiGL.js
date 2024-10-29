import{_ as a,c as t,a as s,o as i}from"./app-DEK5G3U7.js";const l={};function n(r,e){return i(),t("div",null,e[0]||(e[0]=[s(`<h1 id="elk实战-filebeat收集nginx日志" tabindex="-1"><a class="header-anchor" href="#elk实战-filebeat收集nginx日志"><span>ELK实战 - Filebeat收集Nginx日志</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121422257.png" alt="image-20230518173244820" tabindex="0" loading="lazy"><figcaption>image-20230518173244820</figcaption></figure><h3 id="_1-1-filebeat和beats的关系" tabindex="-1"><a class="header-anchor" href="#_1-1-filebeat和beats的关系"><span>1.1 Filebeat和Beats的关系</span></a></h3><p>首先Filebeat是Beats中的一员。</p><p>Beats在是一个轻量级日志采集器，其实Beats家族有6个成员，早期的ELK架构中使用Logstash收集、解析日志，但是Logstash对内存、CPU、io等资源消耗比较高。相比Logstash，Beats所占系统的CPU和内存几乎可以忽略不计。</p><p>目前Beats包含六种工具：</p><ul><li>Packetbeat：网络数据（收集网络流量数据）</li><li>Metricbeat：指标（收集系统、进程和文件系统级别的CPU和内存使用情况等数据）</li><li>Filebeat：日志文件（收集文件数据）</li><li>Winlogbeat：Windows事件日志（收集Windows事件日志数据）</li><li>Auditbeat：审计数据（收集审计日志）</li><li>Heartbeat：运行时间监控（收集系统运行时的数据）</li></ul><h3 id="_1-2-filebeat-是什么" tabindex="-1"><a class="header-anchor" href="#_1-2-filebeat-是什么"><span>1.2 Filebeat 是什么</span></a></h3><p>Filebeat是用于转发和集中日志数据的轻量级传送工具。Filebeat监视您指定的日志文件或位置，收集日志事件，并将它们转发到Elasticsearch或 Logstash进行索引。</p><h3 id="_1-3-filebeat-工作方式" tabindex="-1"><a class="header-anchor" href="#_1-3-filebeat-工作方式"><span>1.3 Filebeat 工作方式</span></a></h3><p>Filebeat的工作方式如下：启动Filebeat时，它将启动一个或多个输入，这些输入将在为日志数据指定的位置中查找。对于Filebeat所找到的每个日志，Filebeat都会启动收集器。每个收集器都读取单个日志以获取新内容，并将新日志数据发送到Filebeat，Filebeat将聚集事件，并将聚集的数据发送到为Filebeat配置的输出。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121422297.png" alt="image-20230518173604822" tabindex="0" loading="lazy"><figcaption>image-20230518173604822</figcaption></figure><h2 id="_2-filebeat-原理介绍" tabindex="-1"><a class="header-anchor" href="#_2-filebeat-原理介绍"><span>2. Filebeat 原理介绍</span></a></h2><h3 id="_2-1-filebeat-的构成" tabindex="-1"><a class="header-anchor" href="#_2-1-filebeat-的构成"><span>2.1 Filebeat 的构成</span></a></h3><p>Filebeat结构：由两个组件构成，分别是inputs（输入）和harvesters（收集器），这些组件一起工作来跟踪文件并将事件数据发送到您指定的输出，harvester负责读取单个文件的内容。harvester逐行读取每个文件，并将内容发送到输出。为每个文件启动一个harvester。harvester负责打开和关闭文件，这意味着文件描述符在harvester运行时保持打开状态。如果在收集文件时删除或重命名文件，Filebeat将继续读取该文件。这样做的副作用是，磁盘上的空间一直保留到harvester关闭。默认情况下，Filebeat保持文件打开，直到达到close_inactive。</p><p>关闭harvester可以会产生的结果：</p><ul><li>文件处理程序关闭，如果harvester仍在读取文件时被删除，则释放底层资源。</li><li>只有在scan_frequency结束之后，才会再次启动文件的收集。</li><li>如果该文件在harvester关闭时被移动或删除，该文件的收集将不会继续。</li></ul><p><strong>一个input负责管理harvesters和寻找所有来源读取</strong>。如果input类型是log，则input将查找驱动器上与定义的路径匹配的所有文件，并为每个文件启动一个harvester。每个input在它自己的Go进程中运行，Filebeat当前支持多种输入类型。每个输入类型可以定义多次。日志输入检查每个文件，以查看是否需要启动harvester、是否已经在运行harvester或是否可以忽略该文件。</p><h3 id="_2-2-filebeat如何保存文件的状态" tabindex="-1"><a class="header-anchor" href="#_2-2-filebeat如何保存文件的状态"><span>2.2 Filebeat如何保存文件的状态</span></a></h3><p>Filebeat保留每个文件的状态，并经常将状态刷新到磁盘中的注册表文件中。该状态用于记住harvester读取的最后一个偏移量，并确保发送所有日志行。如果无法访问输出（如Elasticsearch或Logstash），Filebeat将跟踪最后发送的行，并在输出再次可用时继续读取文件。当Filebeat运行时，每个输入的状态信息也保存在内存中。当Filebeat重新启动时，来自注册表文件的数据用于重建状态，Filebeat在最后一个已知位置继续每个harvester。对于每个输入，Filebeat都会保留它找到的每个文件的状态。由于文件可以重命名或移动，文件名和路径不足以标识文件。对于每个文件，Filebeat存储唯一的标识符，以检测文件是否以前被捕获。</p><h3 id="_2-3-filebeat何如保证至少一次数据消费" tabindex="-1"><a class="header-anchor" href="#_2-3-filebeat何如保证至少一次数据消费"><span>2.3 Filebeat何如保证至少一次数据消费</span></a></h3><p>Filebeat保证事件将至少传递到配置的输出一次，并且不会丢失数据。是因为它将每个事件的传递状态存储在注册表文件中。在已定义的输出被阻止且未确认所有事件的情况下，Filebeat将继续尝试发送事件，直到输出确认已接收到事件为止。如果Filebeat在发送事件的过程中关闭，它不会等待输出确认所有事件后再关闭。当Filebeat重新启动时，将再次将Filebeat关闭前未确认的所有事件发送到输出。这样可以确保每个事件至少发送一次，但最终可能会有重复的事件发送到输出。通过设置shutdown_timeout选项，可以将Filebeat配置为在关机前等待特定时间。</p><h2 id="_3-安装filebeat" tabindex="-1"><a class="header-anchor" href="#_3-安装filebeat"><span>3. 安装Filebeat</span></a></h2><blockquote><p>切记：和ELK版本一定要对应,否则没办法正确收集</p></blockquote><p><a href="https://www.elastic.co/guide/en/beats/filebeat/7.17/setup-repositories.html#_yum" target="_blank" rel="noopener noreferrer">官方文档安装</a></p><h2 id="_4-配置" tabindex="-1"><a class="header-anchor" href="#_4-配置"><span>4. 配置</span></a></h2><div class="language-yml" data-ext="yml" data-title="yml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">filebeat.inputs</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">- </span><span style="color:#E06C75;--shiki-dark:#E06C75;">type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">log</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  enabled</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  paths</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    - </span><span style="color:#98C379;--shiki-dark:#98C379;">/var/log/nginx/access.log</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  encoding</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">utf-8</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">output.elasticsearch</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # Array of hosts to connect to.</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  hosts</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;121.204.147.24:9200&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  indices</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    - </span><span style="color:#E06C75;--shiki-dark:#E06C75;">index</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;nginx-log-%{+yyyy.MM.dd}&quot;</span></span></code></pre></div><h2 id="_5-相关命令" tabindex="-1"><a class="header-anchor" href="#_5-相关命令"><span>5. 相关命令</span></a></h2><ul><li><p>启动 Filebeat</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>systemctl start filebeat</span></span></code></pre></div></li><li><p>停止</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>systemctl stop filebeat</span></span></code></pre></div></li><li><p>查看状态</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">systemctl</span><span style="color:#98C379;--shiki-dark:#98C379;"> status</span><span style="color:#98C379;--shiki-dark:#98C379;"> filebeat</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -l</span></span></code></pre></div></li></ul><h2 id="_6-实现效果" tabindex="-1"><a class="header-anchor" href="#_6-实现效果"><span>6. 实现效果</span></a></h2><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121422332.png" alt="image-20230518175846366" tabindex="0" loading="lazy"><figcaption>image-20230518175846366</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121422364.png" alt="image-20230518175824649" tabindex="0" loading="lazy"><figcaption>image-20230518175824649</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://segmentfault.com/a/1190000039410506" target="_blank" rel="noopener noreferrer">搞懂日志采集利器 Filebeat 并不难！</a></p><p><a href="https://www.elastic.co/guide/en/beats/filebeat/7.17/setup-repositories.html#_yum" target="_blank" rel="noopener noreferrer">官方文档安装</a></p>`,36)]))}const p=a(l,[["render",n],["__file","elasticsearch-filebeat.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/ES/elasticsearch-filebeat.html","title":"ELK实战 - Filebeat收集Nginx日志","lang":"zh-CN","frontmatter":{"aliases":"ELK实战 - Filebeat收集Nginx日志","tags":null,"cssclass":null,"source":null,"order":1120,"category":["es"],"created":"2024-02-22 10:49","updated":"2024-03-12 14:22","description":"ELK实战 - Filebeat收集Nginx日志 1. 简介 image-20230518173244820image-20230518173244820 1.1 Filebeat和Beats的关系 首先Filebeat是Beats中的一员。 Beats在是一个轻量级日志采集器，其实Beats家族有6个成员，早期的ELK架构中使用Logstash收集...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/ES/elasticsearch-filebeat.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"ELK实战 - Filebeat收集Nginx日志"}],["meta",{"property":"og:description","content":"ELK实战 - Filebeat收集Nginx日志 1. 简介 image-20230518173244820image-20230518173244820 1.1 Filebeat和Beats的关系 首先Filebeat是Beats中的一员。 Beats在是一个轻量级日志采集器，其实Beats家族有6个成员，早期的ELK架构中使用Logstash收集..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121422257.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ELK实战 - Filebeat收集Nginx日志\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121422257.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121422297.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121422332.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121422364.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 Filebeat和Beats的关系","slug":"_1-1-filebeat和beats的关系","link":"#_1-1-filebeat和beats的关系","children":[]},{"level":3,"title":"1.2 Filebeat 是什么","slug":"_1-2-filebeat-是什么","link":"#_1-2-filebeat-是什么","children":[]},{"level":3,"title":"1.3 Filebeat 工作方式","slug":"_1-3-filebeat-工作方式","link":"#_1-3-filebeat-工作方式","children":[]}]},{"level":2,"title":"2. Filebeat 原理介绍","slug":"_2-filebeat-原理介绍","link":"#_2-filebeat-原理介绍","children":[{"level":3,"title":"2.1 Filebeat 的构成","slug":"_2-1-filebeat-的构成","link":"#_2-1-filebeat-的构成","children":[]},{"level":3,"title":"2.2 Filebeat如何保存文件的状态","slug":"_2-2-filebeat如何保存文件的状态","link":"#_2-2-filebeat如何保存文件的状态","children":[]},{"level":3,"title":"2.3 Filebeat何如保证至少一次数据消费","slug":"_2-3-filebeat何如保证至少一次数据消费","link":"#_2-3-filebeat何如保证至少一次数据消费","children":[]}]},{"level":2,"title":"3. 安装Filebeat","slug":"_3-安装filebeat","link":"#_3-安装filebeat","children":[]},{"level":2,"title":"4. 配置","slug":"_4-配置","link":"#_4-配置","children":[]},{"level":2,"title":"5. 相关命令","slug":"_5-相关命令","link":"#_5-相关命令","children":[]},{"level":2,"title":"6. 实现效果","slug":"_6-实现效果","link":"#_6-实现效果","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.76,"words":1427},"filePathRelative":"posts/Database/ES/elasticsearch-filebeat.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121422257.png\\" alt=\\"image-20230518173244820\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20230518173244820</figcaption></figure>\\n<h3>1.1 Filebeat和Beats的关系</h3>\\n<p>首先Filebeat是Beats中的一员。</p>\\n<p>Beats在是一个轻量级日志采集器，其实Beats家族有6个成员，早期的ELK架构中使用Logstash收集、解析日志，但是Logstash对内存、CPU、io等资源消耗比较高。相比Logstash，Beats所占系统的CPU和内存几乎可以忽略不计。</p>","autoDesc":true}');export{p as comp,c as data};
