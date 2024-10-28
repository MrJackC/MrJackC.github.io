import{_ as a,c as i,a as n,o as l}from"./app-BQBjlK2G.js";const e={};function o(r,s){return l(),i("div",null,s[0]||(s[0]=[n(`<h1 id="minio部署-minio分布式集群搭建部署" tabindex="-1"><a class="header-anchor" href="#minio部署-minio分布式集群搭建部署"><span>Minio部署 Minio分布式集群搭建部署</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>分布式 Minio 可以让你将多块硬盘或者多台服务器组成一个对象存储服务。由于硬盘分布在不同的节点上，分布式 Minio 避免了单点故障。MinioMinio分布式模式可以帮助你搭建一个高可用的对象存储服务，你可以使用这些存储设备，而不用考虑其真实物理位置。</p><h2 id="_2-minio分布式部署的优势" tabindex="-1"><a class="header-anchor" href="#_2-minio分布式部署的优势"><span>2. Minio分布式部署的优势</span></a></h2><h3 id="_2-1-数据保护" tabindex="-1"><a class="header-anchor" href="#_2-1-数据保护"><span>2.1 数据保护</span></a></h3><ul><li>分布式 Minio 采用纠删码来防范多个节点宕机和位衰减。</li><li>分布式 Minio 至少需要 4 个节点（4台服务器），使用分布式 Minio 就 自动引入了纠删码功能。</li><li>纠删码是一种恢复丢失和损坏数据的数学算法， Minio 采用 Reed-Solomon code 将对象拆分成 N/2 数据和 N/2 奇偶校验块。 这就意味着如果是 12 块盘，一个对象会被分成 6 个数据块、6 个奇偶校验块，你可以丢失任意 6 块盘（不管其是存放的数据块还是奇偶校验块），你仍可以从剩下的盘中的数据进行恢复。</li><li>纠删码的工作原理和 RAID 或者复制不同，像 RAID6 可以在损失两块盘的情况下不丢数据，而 Minio 纠删码可以在丢失一半的盘的情况下，仍可以保证数据安全。 而且 Minio 纠删码是作用在对象级别，可以一次恢复一个对象，而RAID 是作用在卷级别，数据恢复时间很长。 Minio 对每个对象单独编码，存储服务一经部署，通常情况下是不需要更换硬盘或者修复。Minio 纠删码的设计目标是为了性能和尽可能的使用硬件加速。</li><li>位衰减又被称为数据腐化 Data Rot、无声数据损坏 Silent Data Corruption ，是目前硬盘数据的一种严重数据丢失问题。硬盘上的数据可能会神不知鬼不觉就损坏了，也没有什么错误日志。正所谓明枪易躲，暗箭难防，这种背地里犯的错比硬盘直接故障还危险。 所以 Minio 纠删码采用了高速 HighwayHash 基于哈希的校验和来防范位衰减。</li></ul><h3 id="_2-2-高可用" tabindex="-1"><a class="header-anchor" href="#_2-2-高可用"><span>2.2 高可用</span></a></h3><ul><li>单机 Minio 服务存在单点故障，相反，如果是一个 N 节点的分布式 Minio ,只要有 N/2 节点在线，你的数据就是安全的。不过你需要至少有 N/2+1 个节点来创建新的对象。</li><li>例如，一个 8 节点的 Minio 集群，每个节点一块盘，就算 4 个节点宕机，这个集群仍然是可读的，不过你需要 5 个节点才能写数据。</li></ul><h3 id="_2-3-限制" tabindex="-1"><a class="header-anchor" href="#_2-3-限制"><span>2.3 限制</span></a></h3><ul><li>分布式 Minio 单租户存在最少 4 个盘最多 16 个盘的限制（受限于纠删码）。这种限制确保了 Minio 的简洁，同时仍拥有伸缩性。如果你需要搭建一个多租户环境，你可以轻松的使用编排工具（Kubernetes）来管理多个Minio实例。</li><li>注意，只要遵守分布式 Minio 的限制，你可以组合不同的节点和每个节点几块盘。比如，你可以使用 2 个节点，每个节点 4 块盘，也可以使用 4 个节点，每个节点两块盘，诸如此类。</li></ul><h3 id="_2-4-一致性" tabindex="-1"><a class="header-anchor" href="#_2-4-一致性"><span>2.4 一致性</span></a></h3><ul><li>Minio 在分布式和单机模式下，所有读写操作都严格遵守 read-after-write 一致性模型。</li></ul><h2 id="minio分布式集群搭建" tabindex="-1"><a class="header-anchor" href="#minio分布式集群搭建"><span>Minio分布式集群搭建</span></a></h2><h3 id="_3-1-环境准备" tabindex="-1"><a class="header-anchor" href="#_3-1-环境准备"><span>3.1 环境准备</span></a></h3><table><thead><tr><th>节点</th><th>目录</th></tr></thead><tbody><tr><td>192.168.1.1</td><td>/data/minio/data</td></tr><tr><td>192.168.1.2</td><td>/data/minio/data</td></tr><tr><td>192.168.1.3</td><td>/data/minio/data</td></tr><tr><td>192.168.1.4</td><td>/data/minio/data</td></tr></tbody></table><p>从<a href="https://dl.min.io/server/minio/release/linux-amd64/minio" target="_blank" rel="noopener noreferrer">官网</a>获取Minio！</p><h3 id="_3-2-目录创建" tabindex="-1"><a class="header-anchor" href="#_3-2-目录创建"><span>3.2 目录创建</span></a></h3><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> mkdir</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -p</span><span style="color:#98C379;--shiki-dark:#98C379;"> /data/minio/{run,data}</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mkdir</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -p</span><span style="color:#98C379;--shiki-dark:#98C379;"> /etc/minio</span></span></code></pre></div><p>run：启动脚本及二进制文件目录；<br> data：数据存储目录；<br> /etc/minio：配置文件目录；</p><h3 id="_3-3-集群启动文件" tabindex="-1"><a class="header-anchor" href="#_3-3-集群启动文件"><span>3.3 集群启动文件</span></a></h3><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> vim</span><span style="color:#98C379;--shiki-dark:#98C379;"> /data/minio/run/run.sh</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> MINIO_ACCESS_KEY</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Minio</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> MINIO_SECRET_KEY</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Test1234</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">!</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">/data/minio/run/minio</span><span style="color:#98C379;--shiki-dark:#98C379;"> server</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --config-dir</span><span style="color:#98C379;--shiki-dark:#98C379;"> /etc/minio</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">http://192.168.99.1/data/minio/data </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">http://192.168.99.2/data/minio/data </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">http://192.168.99.3/data/minio/data </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">http://192.168.99.4/data/minio/data </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\</span></span></code></pre></div><ul><li><code>MINIO_ACCESS_KEY</code>：用户名，长度最小是5个字符；</li><li><code>MINIO_SECRET_KEY</code>：密码，密码不能设置过于简单，不然minio会启动失败，长度最小是8个字符；</li><li><code>–config-dir</code>：指定集群配置文件目录；</li></ul><h3 id="_3-4-配置为系统服务" tabindex="-1"><a class="header-anchor" href="#_3-4-配置为系统服务"><span>3.4 配置为系统服务</span></a></h3><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> vim</span><span style="color:#98C379;--shiki-dark:#98C379;"> /usr/lib/systemd/system/minio.service</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[Unit]</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">Description</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">Minio</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> service</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">Documentation</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">https://docs.minio.io/</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[Service]</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">WorkingDirectory</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">/data/minio/run/</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">ExecStart</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">/data/minio/run/run.sh</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">Restart</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">on-failure</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">RestartSec</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">5</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[Install]</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">WantedBy</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">multi-user.target</span></span></code></pre></div><p><strong>注意：</strong></p><ul><li><strong>将minio二进制文件上传到<code>/data/minio/run</code>目录！</strong></li><li><strong>给所有涉及到的文件或目录添加权限！</strong></li></ul><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> chmod</span><span style="color:#98C379;--shiki-dark:#98C379;"> +x</span><span style="color:#98C379;--shiki-dark:#98C379;"> /data/minio/run/minio</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">chmod</span><span style="color:#98C379;--shiki-dark:#98C379;"> +x</span><span style="color:#98C379;--shiki-dark:#98C379;"> /data/minio/run/run.sh</span></span></code></pre></div><h3 id="_3-5-启动集群" tabindex="-1"><a class="header-anchor" href="#_3-5-启动集群"><span>3.5 启动集群</span></a></h3><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> systemctl</span><span style="color:#98C379;--shiki-dark:#98C379;"> daemon-reload</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> systemctl</span><span style="color:#98C379;--shiki-dark:#98C379;"> enable</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">systemctl</span><span style="color:#98C379;--shiki-dark:#98C379;"> start</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio</span></span></code></pre></div><h3 id="_3-6-代理集群-nginx负载均衡" tabindex="-1"><a class="header-anchor" href="#_3-6-代理集群-nginx负载均衡"><span>3.6 代理集群（nginx负载均衡）</span></a></h3><p>生产环境需要使用Nginx将集群地址进行代理，对外统一入口！</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">upstream</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> minio{</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        server</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 192.168.99.1:9000;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        server</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 192.168.99.2:9000;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        server</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 192.168.99.3:9000;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        server</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 192.168.99.4:9000;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">server</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        listen </span><span style="color:#D19A66;--shiki-dark:#D19A66;">9000</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        server_name </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">minio;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        location</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> / {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                proxy_pass </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">http://minio;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                proxy_set_header </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">Host $</span><span style="color:#E06C75;--shiki-dark:#E06C75;">http_host</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                client_max_body_size </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1000m</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-访问测试" tabindex="-1"><a class="header-anchor" href="#_3-7-访问测试"><span>3.7 访问测试</span></a></h3><p>浏览器访问minio集群代理地址+9000端口，用户名密码为上文中启动文件run.sh中我们设置的！</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.cnblogs.com/lvzhenjiang/p/14943939.html" target="_blank" rel="noopener noreferrer">Minio分布式集群搭建部署</a></p>`,36)]))}const p=a(e,[["render",o],["__file","minio-cluster-deploy.html.vue"]]),d=JSON.parse('{"path":"/posts/Architect/minio/minio-cluster-deploy.html","title":"Minio部署   Minio分布式集群搭建部署","lang":"zh-CN","frontmatter":{"aliases":"Minio部署 -  Minio分布式集群搭建部署","tags":null,"cssclass":null,"source":null,"order":510,"category":null,"created":"2024-04-24 14:35","updated":"2024-04-30 12:36","description":"Minio部署 Minio分布式集群搭建部署 1. 简介 分布式 Minio 可以让你将多块硬盘或者多台服务器组成一个对象存储服务。由于硬盘分布在不同的节点上，分布式 Minio 避免了单点故障。MinioMinio分布式模式可以帮助你搭建一个高可用的对象存储服务，你可以使用这些存储设备，而不用考虑其真实物理位置。 2. Minio分布式部署的优势 2...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Architect/minio/minio-cluster-deploy.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Minio部署   Minio分布式集群搭建部署"}],["meta",{"property":"og:description","content":"Minio部署 Minio分布式集群搭建部署 1. 简介 分布式 Minio 可以让你将多块硬盘或者多台服务器组成一个对象存储服务。由于硬盘分布在不同的节点上，分布式 Minio 避免了单点故障。MinioMinio分布式模式可以帮助你搭建一个高可用的对象存储服务，你可以使用这些存储设备，而不用考虑其真实物理位置。 2. Minio分布式部署的优势 2..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Minio部署   Minio分布式集群搭建部署\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. Minio分布式部署的优势","slug":"_2-minio分布式部署的优势","link":"#_2-minio分布式部署的优势","children":[{"level":3,"title":"2.1 数据保护","slug":"_2-1-数据保护","link":"#_2-1-数据保护","children":[]},{"level":3,"title":"2.2 高可用","slug":"_2-2-高可用","link":"#_2-2-高可用","children":[]},{"level":3,"title":"2.3 限制","slug":"_2-3-限制","link":"#_2-3-限制","children":[]},{"level":3,"title":"2.4 一致性","slug":"_2-4-一致性","link":"#_2-4-一致性","children":[]}]},{"level":2,"title":"Minio分布式集群搭建","slug":"minio分布式集群搭建","link":"#minio分布式集群搭建","children":[{"level":3,"title":"3.1 环境准备","slug":"_3-1-环境准备","link":"#_3-1-环境准备","children":[]},{"level":3,"title":"3.2 目录创建","slug":"_3-2-目录创建","link":"#_3-2-目录创建","children":[]},{"level":3,"title":"3.3 集群启动文件","slug":"_3-3-集群启动文件","link":"#_3-3-集群启动文件","children":[]},{"level":3,"title":"3.4 配置为系统服务","slug":"_3-4-配置为系统服务","link":"#_3-4-配置为系统服务","children":[]},{"level":3,"title":"3.5 启动集群","slug":"_3-5-启动集群","link":"#_3-5-启动集群","children":[]},{"level":3,"title":"3.6 代理集群（nginx负载均衡）","slug":"_3-6-代理集群-nginx负载均衡","link":"#_3-6-代理集群-nginx负载均衡","children":[]},{"level":3,"title":"3.7 访问测试","slug":"_3-7-访问测试","link":"#_3-7-访问测试","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.31,"words":1293},"filePathRelative":"posts/Architect/minio/minio-cluster-deploy.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>分布式 Minio 可以让你将多块硬盘或者多台服务器组成一个对象存储服务。由于硬盘分布在不同的节点上，分布式 Minio 避免了单点故障。MinioMinio分布式模式可以帮助你搭建一个高可用的对象存储服务，你可以使用这些存储设备，而不用考虑其真实物理位置。</p>\\n<h2>2. Minio分布式部署的优势</h2>\\n<h3>2.1 数据保护</h3>\\n<ul>\\n<li>分布式 Minio 采用纠删码来防范多个节点宕机和位衰减。</li>\\n<li>分布式 Minio 至少需要 4 个节点（4台服务器），使用分布式 Minio 就 自动引入了纠删码功能。</li>\\n<li>纠删码是一种恢复丢失和损坏数据的数学算法， Minio 采用 Reed-Solomon code 将对象拆分成 N/2 数据和 N/2 奇偶校验块。 这就意味着如果是 12 块盘，一个对象会被分成 6 个数据块、6 个奇偶校验块，你可以丢失任意 6 块盘（不管其是存放的数据块还是奇偶校验块），你仍可以从剩下的盘中的数据进行恢复。</li>\\n<li>纠删码的工作原理和 RAID 或者复制不同，像 RAID6 可以在损失两块盘的情况下不丢数据，而 Minio 纠删码可以在丢失一半的盘的情况下，仍可以保证数据安全。 而且 Minio 纠删码是作用在对象级别，可以一次恢复一个对象，而RAID 是作用在卷级别，数据恢复时间很长。 Minio 对每个对象单独编码，存储服务一经部署，通常情况下是不需要更换硬盘或者修复。Minio 纠删码的设计目标是为了性能和尽可能的使用硬件加速。</li>\\n<li>位衰减又被称为数据腐化 Data Rot、无声数据损坏 Silent Data Corruption ，是目前硬盘数据的一种严重数据丢失问题。硬盘上的数据可能会神不知鬼不觉就损坏了，也没有什么错误日志。正所谓明枪易躲，暗箭难防，这种背地里犯的错比硬盘直接故障还危险。 所以 Minio 纠删码采用了高速 HighwayHash 基于哈希的校验和来防范位衰减。</li>\\n</ul>","autoDesc":true}');export{p as comp,d as data};
