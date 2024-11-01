import{_ as a,c as e,a as s,o as n}from"./app-tJW29Kmg.js";const o={};function t(r,i){return n(),e("div",null,i[0]||(i[0]=[s(`<h1 id="minio基础-minio基础概念" tabindex="-1"><a class="header-anchor" href="#minio基础-minio基础概念"><span>Minio基础 - Minio基础概念</span></a></h1><blockquote><p><strong>文件、块和对象是三种以不同的方式来保存、整理和呈现数据的存储格式</strong>。这些格式各有各的功能和限制。</p><ul><li><p>文件存储会以<strong>文件和文件夹</strong>的层次结构来整理和呈现数据；</p></li><li><p>块存储会<strong>将数据拆分到任意划分且大小相同</strong>的卷中；</p></li><li><p>对象存储会管理数据并将其链接至<strong>关联的元数据</strong>。</p></li></ul><p>元数据包括 account（用户）， bucket， bucket index等信息</p></blockquote><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>Minio 是个基于 Golang 编写的开源对象存储套件，虽然轻量，却拥有着不错的性能。</p><p>官网地址：<a href="https://min.io/" target="_blank" rel="noopener noreferrer">MinIO | High Performance, Kubernetes Native Object Storage</a></p><h3 id="_1-1-何为对象存储" tabindex="-1"><a class="header-anchor" href="#_1-1-何为对象存储"><span>1.1 何为对象存储？</span></a></h3><p>对象存储服务（Object Storage Service，OSS）是一种海量、安全、低成本、高可靠的云存储服务，适合存放任意类型的文件。容量和处理能力弹性扩展，多种存储类型供选择，全面优化存储成本。</p><h3 id="_1-2-特点" tabindex="-1"><a class="header-anchor" href="#_1-2-特点"><span>1.2 特点</span></a></h3><ul><li>MinIO 是一个基于Apache License v2.0开源协议的对象存储服务。</li><li>它兼容亚马逊S3云存储服务接口，非常适合于存储大容量非结构化的数据，例如图片、视频、日志文件、备份数据和容器/虚拟机镜像等，而一个对象文件可以是任意大小，从几kb到最大5T不等。</li><li>MinIO是一个非常轻量的服务,可以很简单的和其他应用的结合，类似 NodeJS, Redis 或者 MySQL。</li><li>对于中小型企业，如果不选择存储上云，那么 Minio 是个不错的选择，麻雀虽小，五脏俱全。</li><li>当然 Minio 除了直接作为对象存储使用，还可以作为云上对象存储服务的网关层，无缝对接到 Amazon S3、MicroSoft Azure。</li></ul><blockquote><p>亚马逊云的 S3 API（接口协议） 是在全球范围内达到共识的对象存储的协议，是全世界内大家都认可的标准。MinIO 在很早的时候就采用了 S3 兼容协议，并且MinIO 是第一个支持 S3 Select 的产品.</p></blockquote><h2 id="_2-minio-基础概念" tabindex="-1"><a class="header-anchor" href="#_2-minio-基础概念"><span>2. MINIO 基础概念</span></a></h2><p>MINIO 有几个概念比较重要:</p><ul><li><p>Object：存储到 Minio 的基本对象，如文件、字节流，Anything…</p></li><li><p>Bucket：用来存储 Object 的逻辑空间。每个 Bucket 之间的数据是相互隔离的。对于客户端而言，就相当于一个存放文件的顶层文件夹。</p></li><li><p>Drive：即存储数据的磁盘，在 MinIO 启动时，以参数的方式传入。Minio 中所有的对象数据都会存储在 Drive 里。</p></li><li><p>Set</p><p>即一组 Drive 的集合，分布式部署根据集群规模自动划分一个或多个 Set ，每个 Set 中的 Drive 分布在不同位置。一个对象存储在一个 Set 上。（For example: {1…64} is divided into 4 sets each of size 16.）</p><ul><li>一个对象存储在一个Set上</li><li>一个集群划分为多个Set</li><li>一个Set包含的Drive数量是固定的，默认由系统根据集群规模自动计算得出</li><li>一个SET中的Drive尽可能分布在不同的节点上</li></ul><blockquote><p>一个对象存储在一个 Set 上。</p><p><strong>如果有3个set，那么我们存入一个对象。可能在某些drive 磁盘上没有存</strong></p></blockquote></li></ul><h3 id="_2-1-set-drive-的关系" tabindex="-1"><a class="header-anchor" href="#_2-1-set-drive-的关系"><span>2.1 Set /Drive 的关系</span></a></h3><p>Set /Drive 这两个概念是 MINIO 里面最重要的两个概念，一个对象最终是存储在 Set 上面的。</p><p>我们来看下边 MINIO 集群存储示意图，每一行是一个节点机器，这有 32 个节点，每个节点里有一个小方块我们称之 Drive，Drive 可以简单地理解为一个硬盘。</p><p>图中，一个节点有 32 个 Drive，相当于 32 块硬盘。</p><p>Set 是另外一个概念，Set 是一组 Drive 的集合，图中，所有蓝色、橙色背景的Drive（硬盘）的就组成了一个 Set.</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236208.png" alt="image-20220721211109769" tabindex="0" loading="lazy"><figcaption>image-20220721211109769</figcaption></figure><h3 id="_2-2-miino如何写入对象" tabindex="-1"><a class="header-anchor" href="#_2-2-miino如何写入对象"><span>2.2 MIINO如何写入对象？</span></a></h3><p>MINIO 是通过数据编码，将原来的数据编码成 N 份，N 就是一个 Set 上面 Drive 的数量，后面多次提到的 N 都是指这个意思。</p><blockquote><p>上图中，一个 Set 上面 Drive 的数量，是3.</p></blockquote><p>对象被编码成N份之后，把每一份，写到对应的 Drive 上面，这就是把一个对象存储在整个 Set 上。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236253.png" alt="image-20220721211712213" tabindex="0" loading="lazy"><figcaption>image-20220721211712213</figcaption></figure><p>一个集群包含多个 Set，每个对象最终存储在哪个 Set 上是根据对象的名称进行哈希，然后影射到唯一的 Set 上面，这个方式从理论上保证数据可以均匀的分布到所有的 Set 上。</p><p>根据的观测，数据分布的也非常均匀，一个 Set 上包含多少个 Drive 是由系统自动根据集群规模算出来的，当然，也可以自己去配置。</p><p>一个 Set 的 Drive 系统会考虑尽可能把它放在多的节点上面，保证它的可靠性。</p><h2 id="_3-minio存储架构" tabindex="-1"><a class="header-anchor" href="#_3-minio存储架构"><span>3. Minio存储架构</span></a></h2><p>Minio针对不同应用场景也设置了对应的存储架构：</p><h3 id="_3-1-单主机-单硬盘模式" tabindex="-1"><a class="header-anchor" href="#_3-1-单主机-单硬盘模式"><span>3.1 单主机，单硬盘模式</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236282.png" alt="image-20220721212134078" tabindex="0" loading="lazy"><figcaption>image-20220721212134078</figcaption></figure><p>该模式下，Minio只在一台服务器上搭建服务，且数据都存在单块磁盘上，该模式存在单点风险，主要用作开发、测试等使用</p><h4 id="_3-1-1-启动的命令为" tabindex="-1"><a class="header-anchor" href="#_3-1-1-启动的命令为"><span>3.1.1 启动的命令为：</span></a></h4><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">minio</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --config-dir</span><span style="color:#98C379;--shiki-dark:#98C379;"> ~/tenant1</span><span style="color:#98C379;--shiki-dark:#98C379;"> server</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --address</span><span style="color:#98C379;--shiki-dark:#98C379;"> :9001</span><span style="color:#98C379;--shiki-dark:#98C379;"> /disk1/data/tenant1</span></span></code></pre></div><h3 id="_3-2-单主机-多硬盘模式" tabindex="-1"><a class="header-anchor" href="#_3-2-单主机-多硬盘模式"><span>3.2 单主机，多硬盘模式</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236312.png" alt="image-20220721212316800" tabindex="0" loading="lazy"><figcaption>image-20220721212316800</figcaption></figure><p>该模式下，Minio在一台服务器上搭建服务，但数据分散在多块（大于4块）磁盘上，提供了数据上的安全保障</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">minio</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --config-dir</span><span style="color:#98C379;--shiki-dark:#98C379;"> ~/tenant1</span><span style="color:#98C379;--shiki-dark:#98C379;"> server</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --address</span><span style="color:#98C379;--shiki-dark:#98C379;"> :9001</span><span style="color:#98C379;--shiki-dark:#98C379;"> /disk1/data/tenant1</span><span style="color:#98C379;--shiki-dark:#98C379;"> /disk2/data/tenant1</span><span style="color:#98C379;--shiki-dark:#98C379;"> /disk3/data/tenant1</span><span style="color:#98C379;--shiki-dark:#98C379;"> /disk4/data/enant1</span></span></code></pre></div><h3 id="_3-3-多主机、多硬盘模式-分布式" tabindex="-1"><a class="header-anchor" href="#_3-3-多主机、多硬盘模式-分布式"><span>3.3 多主机、多硬盘模式（分布式）</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236342.png" alt="image-20220721212406208" tabindex="0" loading="lazy"><figcaption>image-20220721212406208</figcaption></figure><p>该模式是Minio服务最常用的架构，通过共享一个access_key和secret_key,在多台（2-32）服务器上搭建服务，且数据分散在多块（大于4块，无上限）磁盘上，提供了较为强大的数据冗余机制（Reed-Solomon纠删码）。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> MINIO_ACCESS_KEY</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">TENANT1_ACCESS_KEY</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> MINIO_SECRET_KEY</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">TENANT1_SECRET_KEY</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">minio</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --config-dir</span><span style="color:#98C379;--shiki-dark:#98C379;"> ~/tenant1</span><span style="color:#98C379;--shiki-dark:#98C379;"> server</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --address</span><span style="color:#98C379;--shiki-dark:#98C379;"> :9001</span><span style="color:#98C379;--shiki-dark:#98C379;"> http://192.168.10.11/data/tenant1</span><span style="color:#98C379;--shiki-dark:#98C379;"> http://192.168.10.12/data/tenant1</span><span style="color:#98C379;--shiki-dark:#98C379;"> http://192.168.10.13/data/tenant1</span><span style="color:#98C379;--shiki-dark:#98C379;"> http://192.168.10.14/data/tenant1</span></span></code></pre></div><h2 id="_4-分布式minio有什么好处" tabindex="-1"><a class="header-anchor" href="#_4-分布式minio有什么好处"><span>4. 分布式Minio有什么好处?</span></a></h2><p>在大数据领域，通常的设计理念都是无中心和分布式。Minio分布式模式可以帮助你搭建一个高可用的对象存储服务，你可以使用这些存储设备，而不用考虑其真实物理位置。</p><h3 id="_4-1-数据保护" tabindex="-1"><a class="header-anchor" href="#_4-1-数据保护"><span>4.1 数据保护</span></a></h3><p>分布式Minio采用 纠删码来防范多个节点宕机和位衰减bit rot。</p><p>分布式Minio至少需要4个硬盘，使用分布式Minio自动引入了纠删码功能。</p><h3 id="_4-2-高可用" tabindex="-1"><a class="header-anchor" href="#_4-2-高可用"><span>4.2 高可用</span></a></h3><p>单机Minio服务存在单点故障，相反，如果是一个有N块硬盘的分布式Minio, 只要有N/2硬盘在线，你的数据就是安全的。</p><p>不过你需要至少有N/2+1个硬盘来创建新的对象。</p><p>例如，一个16节点的Minio集群，每个节点16块硬盘，就算8台服務器宕机，这个集群仍然是可读的，不过你需要9台服務器才能写数据。</p><p>注意，只要遵守分布式Minio的限制，你可以组合不同的节点和每个节点几块硬盘。</p><p>比如，你可以使用2个节点，每个节点4块硬盘，也可以使用4个节点，每个节点两块硬盘，诸如此类。</p><h3 id="_4-3-一致性" tabindex="-1"><a class="header-anchor" href="#_4-3-一致性"><span>4.3 一致性</span></a></h3><p>Minio在分布式和单机模式下，所有读写操作都严格遵守<strong>read-after-write</strong>一致性模型。</p><h2 id="_5-minio的数据高可靠" tabindex="-1"><a class="header-anchor" href="#_5-minio的数据高可靠"><span>5. MinIO的数据高可靠</span></a></h2><p>Minio使用了<strong>Erasure Code 纠删码</strong>和 <strong>Bit Rot Protection 数据腐化保护</strong>这两个特性，所以MinIO的数据可靠性做的高。</p><h3 id="_5-1-erasure-code纠删码" tabindex="-1"><a class="header-anchor" href="#_5-1-erasure-code纠删码"><span>5.1 Erasure Code纠删码</span></a></h3><p><strong>纠删码（Erasure Code）简称EC，是一种数据保护方法，它将数据分割成片段，把冗余数据块扩展、编码，并将其存储在不同的位置，比如磁盘、存储节点或者其它地理位置</strong>。</p><p>从数据函数角度来说，纠删码提供的保护可以用下面这个简单的公式来表示：n = k + m。</p><ul><li>变量“k”代表原始数据或符号的值</li><li>变量“m”代表故障后添加的提供保护的额外或冗余符号的值。</li><li>变量“n”代表纠删码过程后创建的符号的总值。</li></ul><p>举个例子，假设n=16，代表有16块磁盘，另外，有10份原始文件一模一样，称为k，16 = 10 +m，这个m就是可以恢复的校验块个数，所以m是6，任意6个不可用，原始文件都可以恢复，极端情况，10个原始文件坏掉6个，靠4个原始的加上6个校验块，可以把坏掉的6个原始文件恢复，这个用到数学行列式矩阵知识，不做展开。</p><blockquote><p>MinIO的编码方式，将一个对象编码成若干个数据块和校验块，我们简称为Erasure Code码，这个是编码的类型，这种编码的类型，还需要算法来实现，minio 采用的是 Reed-Solomon算法。</p></blockquote><p>MinIO使用Reed-Solomon算法，该算法把对象编码成若干个数据块和校验块。</p><p>Reed-Solomon算法的特点：</p><ul><li>低冗余</li><li>高可靠</li></ul><p>为了表述方便，把数据块和校验块统称为编码块，之后我们可以通过编码块的一部分就能还原出整个对象。</p><h3 id="_5-2-reed-solomon-code" tabindex="-1"><a class="header-anchor" href="#_5-2-reed-solomon-code"><span>5.2 Reed-Solomon code</span></a></h3><p>Reed-Solomon 是纠删码的实现算法的一种，当然，也是一种恢复丢失和损坏数据的数学算法，</p><p><strong>Minio默认采用Reed-Solomon code将数据拆分成N/2个数据块和N/2个奇偶校验块。</strong></p><p>这就意味着如果是16块盘，一个对象会被分成8个数据块、8个奇偶校验块，你可以丢失任意8块盘（不管其是存放的数据块还是校验块），你仍可以从剩下的盘中的数据进行恢复。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236374.png" alt="image-20220721213946979" tabindex="0" loading="lazy"><figcaption>image-20220721213946979</figcaption></figure><p>如上图，如我们所知，一个对象存储在一个Set上面，这个Set包含16个Drive，其中灰色的一半是数据块，橙色的一半是校验块，这种方式最多能忍受一半的编码丢失或损坏。</p><p><strong>所有编码块的大小是原对象的2倍，跟传统多副本存储方案相比，他只冗余存了一份，但可靠性更高。</strong></p><h4 id="_5-2-1-可靠性体现" tabindex="-1"><a class="header-anchor" href="#_5-2-1-可靠性体现"><span>5.2.1 可靠性体现</span></a></h4><ul><li>纠删码的工作原理和RAID或者副本不同，像RAID6只能在损失两块盘，或者以下的情况下不丢数据，而<strong>Minio纠删码可以在丢失一半的盘的情况下，仍可以保证数据安全</strong>。</li><li>而且<strong>Minio纠删码是作用在对象级别，可以一次恢复一个对象</strong>，而RAID是作用在卷级别，数据恢复时间很长。</li><li>Minio对每个对象单独编码，存储服务一经部署，通常情况下是不需要更换硬盘或者修复。</li><li>此外，针对不同应用所需的数据安全级别不同，Minio还提供了存储级别（Storage Class）的配置，调整数据块和校验块的比例，做到对空间的最佳使用。</li></ul><h4 id="_5-2-2-存储空间计算" tabindex="-1"><a class="header-anchor" href="#_5-2-2-存储空间计算"><span>5.2.2 存储空间计算</span></a></h4><blockquote><p>校验块的数量决定可损坏的磁盘数，可以损坏更多的磁盘，那么意味着要更多的存储空间。</p><p>最多一半的校验码，用2倍存储</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236393.png" alt="image-20220721214657092" tabindex="0" loading="lazy"><figcaption>image-20220721214657092</figcaption></figure><p>比如在将比例调整为14:2后，存储100M的数据占用的空间仅为114M。</p><h3 id="_5-3-bit-rot-protection" tabindex="-1"><a class="header-anchor" href="#_5-3-bit-rot-protection"><span>5.3 Bit Rot Protection：</span></a></h3><p>接下来讲Bit Rot Protection，直译就是腐烂。</p><p>它只是物理设备上的一些文件细微的损坏，还没有被操作系统所硬件所察觉，但是他已经损坏了。</p><p>Bit Rot 位衰减又被称为<strong>数据腐化Data Rot</strong>、<strong>无声数据损坏Silent Data Corruption</strong>,</p><blockquote><p>位衰减可以理解为无形中的数据丢失——或者称为“Bit rot”, 是指物理存储介质的衰减所带来的隐患将凸显出来。</p></blockquote><p>位衰减是目前硬盘数据的一种严重数据丢失问题。</p><p>硬盘上的数据可能会神不知鬼不觉就损坏了，也没有什么错误日志。</p><p>一项对150万块硬盘的研究表明，每90块硬盘就有1块有这种“软错误”，这个错误不但会导致数据丢失，还会导致RAID错误。</p><p>针对这一问题，最新的Minio采用了HighwayHash算法计算校验和来防范位衰减，根据测试结果，其可以实现10GB/s的处理速度。</p><p><strong>大致的做法是：</strong></p><blockquote><p>MinIO把之前的编码块进行 HighwayHash 编码，最后要校验这个编码，以确保每个编码是正确的。</p></blockquote><h3 id="_5-4-文件的修复" tabindex="-1"><a class="header-anchor" href="#_5-4-文件的修复"><span>5.4 文件的修复</span></a></h3><p>另外，MinIO提供了一个管理工具，可以对所有编码块进行校验，如果发现编码块有问题，再去修复它。</p><p>得益于Reed-Solomon纠删码，Minio可以更加灵活的对文件进行修复。</p><p>目前，Minio提供了全量、bucket、文件夹、文件等各个粒度的修复操作：</p><p>递归修复</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> admin</span><span style="color:#98C379;--shiki-dark:#98C379;"> heal</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -r</span><span style="color:#98C379;--shiki-dark:#98C379;"> myminio</span></span></code></pre></div><p>指定桶修复</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> admin</span><span style="color:#98C379;--shiki-dark:#98C379;"> heal</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -r</span><span style="color:#98C379;--shiki-dark:#98C379;"> myminio/dev</span></span></code></pre></div><p>下面是几个例子：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236419.png" alt="image-20220721215704818" tabindex="0" loading="lazy"><figcaption>image-20220721215704818</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236445.png" alt="image-20220721215724700" tabindex="0" loading="lazy"><figcaption>image-20220721215724700</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236466.png" alt="image-20220721215753800" tabindex="0" loading="lazy"><figcaption>image-20220721215753800</figcaption></figure><p>相比一般的RAID方式，Minio可以在非常小的粒度下对文件进行修复操作，灵活性有了很大提高。</p><p>修复后，可以JSON格式列出指定路径（文件、大小）</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> ls</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -r</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --json</span><span style="color:#98C379;--shiki-dark:#98C379;"> myminio/dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> &quot;status&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;success&quot;,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> &quot;type&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;file&quot;,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> &quot;lastModified&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;2019-05-30T09:43:07.763-04:00&quot;,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> &quot;size&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 44996289,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> &quot;key&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;myFile&quot;,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> &quot;etag&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;bae58dc18zzzzz54c14e233b520e0a&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/crazymakercircle/article/details/120855464" target="_blank" rel="noopener noreferrer">minio 高可用 （原理+秒懂+史上最全）</a></p>`,108)]))}const p=a(o,[["render",t],["__file","minio-concept.html.vue"]]),c=JSON.parse('{"path":"/posts/Architect/minio/minio-concept.html","title":"Minio基础 - Minio基础概念","lang":"zh-CN","frontmatter":{"aliases":"Minio基础 - Minio基础概念","tags":null,"cssclass":null,"source":null,"order":10,"category":["Minio"],"created":"2024-04-24 14:35","updated":"2024-04-30 12:37","description":"Minio基础 - Minio基础概念 文件、块和对象是三种以不同的方式来保存、整理和呈现数据的存储格式。这些格式各有各的功能和限制。 文件存储会以文件和文件夹的层次结构来整理和呈现数据； 块存储会将数据拆分到任意划分且大小相同的卷中； 对象存储会管理数据并将其链接至关联的元数据。 元数据包括 account（用户）， bucket， bucket i...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/minio/minio-concept.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Minio基础 - Minio基础概念"}],["meta",{"property":"og:description","content":"Minio基础 - Minio基础概念 文件、块和对象是三种以不同的方式来保存、整理和呈现数据的存储格式。这些格式各有各的功能和限制。 文件存储会以文件和文件夹的层次结构来整理和呈现数据； 块存储会将数据拆分到任意划分且大小相同的卷中； 对象存储会管理数据并将其链接至关联的元数据。 元数据包括 account（用户）， bucket， bucket i..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236208.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Minio基础 - Minio基础概念\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236208.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236253.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236282.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236312.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236342.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236374.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236393.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236419.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236445.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301236466.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 何为对象存储？","slug":"_1-1-何为对象存储","link":"#_1-1-何为对象存储","children":[]},{"level":3,"title":"1.2 特点","slug":"_1-2-特点","link":"#_1-2-特点","children":[]}]},{"level":2,"title":"2. MINIO 基础概念","slug":"_2-minio-基础概念","link":"#_2-minio-基础概念","children":[{"level":3,"title":"2.1 Set /Drive 的关系","slug":"_2-1-set-drive-的关系","link":"#_2-1-set-drive-的关系","children":[]},{"level":3,"title":"2.2 MIINO如何写入对象？","slug":"_2-2-miino如何写入对象","link":"#_2-2-miino如何写入对象","children":[]}]},{"level":2,"title":"3. Minio存储架构","slug":"_3-minio存储架构","link":"#_3-minio存储架构","children":[{"level":3,"title":"3.1 单主机，单硬盘模式","slug":"_3-1-单主机-单硬盘模式","link":"#_3-1-单主机-单硬盘模式","children":[]},{"level":3,"title":"3.2 单主机，多硬盘模式","slug":"_3-2-单主机-多硬盘模式","link":"#_3-2-单主机-多硬盘模式","children":[]},{"level":3,"title":"3.3 多主机、多硬盘模式（分布式）","slug":"_3-3-多主机、多硬盘模式-分布式","link":"#_3-3-多主机、多硬盘模式-分布式","children":[]}]},{"level":2,"title":"4. 分布式Minio有什么好处?","slug":"_4-分布式minio有什么好处","link":"#_4-分布式minio有什么好处","children":[{"level":3,"title":"4.1 数据保护","slug":"_4-1-数据保护","link":"#_4-1-数据保护","children":[]},{"level":3,"title":"4.2 高可用","slug":"_4-2-高可用","link":"#_4-2-高可用","children":[]},{"level":3,"title":"4.3 一致性","slug":"_4-3-一致性","link":"#_4-3-一致性","children":[]}]},{"level":2,"title":"5. MinIO的数据高可靠","slug":"_5-minio的数据高可靠","link":"#_5-minio的数据高可靠","children":[{"level":3,"title":"5.1 Erasure Code纠删码","slug":"_5-1-erasure-code纠删码","link":"#_5-1-erasure-code纠删码","children":[]},{"level":3,"title":"5.2 Reed-Solomon code","slug":"_5-2-reed-solomon-code","link":"#_5-2-reed-solomon-code","children":[]},{"level":3,"title":"5.3 Bit Rot Protection：","slug":"_5-3-bit-rot-protection","link":"#_5-3-bit-rot-protection","children":[]},{"level":3,"title":"5.4 文件的修复","slug":"_5-4-文件的修复","link":"#_5-4-文件的修复","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":11.58,"words":3473},"filePathRelative":"posts/Architect/minio/minio-concept.md","localizedDate":"2024年10月28日","excerpt":"\\n<blockquote>\\n<p><strong>文件、块和对象是三种以不同的方式来保存、整理和呈现数据的存储格式</strong>。这些格式各有各的功能和限制。</p>\\n<ul>\\n<li>\\n<p>文件存储会以<strong>文件和文件夹</strong>的层次结构来整理和呈现数据；</p>\\n</li>\\n<li>\\n<p>块存储会<strong>将数据拆分到任意划分且大小相同</strong>的卷中；</p>\\n</li>\\n<li>\\n<p>对象存储会管理数据并将其链接至<strong>关联的元数据</strong>。</p>\\n</li>\\n</ul>\\n<p>元数据包括 account（用户）， bucket， bucket index等信息</p>\\n</blockquote>","autoDesc":true}');export{p as comp,c as data};
