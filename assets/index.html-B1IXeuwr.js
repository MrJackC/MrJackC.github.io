import{_ as c,c as d,a,f as o,o as i}from"./app-W9QyTiMU.js";const n={};function r(p,e){return i(),d("div",null,[e[0]||(e[0]=a('<h1 id="_01-大数据生态圈" tabindex="-1"><a class="header-anchor" href="#_01-大数据生态圈"><span>01 大数据生态圈</span></a></h1><p>这是一份有关于大数据生态圈学习过程中各类知识点整理的思维导图集，最近一次更新为</p><ol><li><p><code>00_装配文件</code>：在此模块中，我对大数据相关软件在 <code>Linux</code> 和 <code>Mac</code> 环境下的安装进行了详细的说明，以确保大数据软件能够尽可能成功的运行在你的电脑上。</p></li><li><p><code>0.5_Shell</code>：学习大数据究竟需不需要 <code>Shell</code> 脚本基础，这取决于你自身，若没有 <code>Shell</code> 脚本基础，也不妨碍你进行大数据的学习，若是拥有 <code>Shell</code> 脚本基础，那么你在处理一些进程的时候，将会事半功倍。</p></li><li><p><code>01_数据源</code>：这部分的思路是 <code>Docker （数据库安装环境）</code>→ <code>Database （数据库）</code>→<code> DataX （数据转换离线同步）</code>，是一个从无到有的过程， <code>Database</code> 部分目前（2019年6月28日）拥有<code> Oracle</code>、<code>MySQL</code>、<code>HBase</code>、<code>Redis</code>、<code>ClickHouse</code>五个部分。</p></li><li><p><code>02_接入层</code>：主要是<code>Flume</code>和<code>Sqoop</code>以及<code>Kafka</code>。</p></li><li><p><code>03_数据处理层</code>：这一层面的内容十分丰富，因而我又做了一次划分，主要分为五个部分:<code>数据存储：如HDFS</code>，<code>数据计算：MapReduce及Spark</code>，<code>数据查询：Hive及Impala</code>，<code>任务调度：Oozie，Azkaban，Kettle等</code>，<code>监控报警：Zookeeper</code>。</p></li></ol><p>针对每一个框架，思维导图的思路如下：</p><p>1.每一个框架我都会整理两个文件：理论文件和代码文件。（如无代码文件需要我会专门说明）</p><p>2.在理论文件中，我会解释清楚每个框架运作的原理，相应需要注意的细节点。在此部分中将不会或很少会出现代码。</p><p>3.在代码文件中，基于理论文件的理解，我会将理论文件中每一部分的功能具体实现写明，以便于在工作中可以直接查询或使用。</p><p>说明：红色标记的是重要点</p><p>最后说一句我想说的话：</p><blockquote><p>理解原理或许很简单，但如何在理解原理以后根据它的原理去进行使用创新，是一件非常困难的事，经过了长久的学习以后并非旅程的终点，而是旅程的起点。</p></blockquote><h1 id="索引" tabindex="-1"><a class="header-anchor" href="#索引"><span>索引</span></a></h1>',11)),o(" TOC "),e[1]||(e[1]=a('<ul><li><p><a href="#%E5%A4%A7%E6%95%B0%E6%8D%AE%E8%BD%AF%E4%BB%B6%E8%A3%85%E9%85%8D">1.大数据软件装配</a></p></li><li><p><a href="#Shell">2.Shell</a></p></li><li><p><a href="#%E6%95%B0%E6%8D%AE%E6%BA%90">3.数据源</a></p></li></ul><p>- <a href="#Docker">Docker</a></p><p>- <a href="#Database">Database</a></p><p>- <a href="#MySQL">MySQL</a></p><p>- <a href="#Oracle">Oracle</a></p><p>- <a href="#Redis">Redis</a></p><p>- <a href="#HBase">HBase</a></p><p>- <a href="#ClickHouse">ClickHouse</a></p><p>- <a href="#DataX">DataX</a></p><ul><li><a href="#%E6%8E%A5%E5%85%A5%E5%B1%82">4.接入层</a></li></ul><p>- <a href="#Flume">Flume</a></p><p>- <a href="#Sqoop">Sqoop</a></p><p>- <a href="#Kafka">Kafka</a></p><ul><li><a href="#%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86%E5%B1%82">5.数据处理层</a></li></ul><p>- <a href="#%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8">数据存储</a></p><p>- <a href="#HDFS">HDFS</a></p><p>- <a href="#Yarn">Yarn</a></p><p>- <a href="#%E6%95%B0%E6%8D%AE%E8%AE%A1%E7%AE%97">数据计算</a></p><p>- <a href="#MapReduce">MapReduce</a></p><p>- <a href="#Spark">Spark</a></p><p>- <a href="#%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2">数据查询</a></p><p>- <a href="#Hive">Hive</a></p><p>- <a href="#Impala">Impala</a></p><p>- <a href="#%E4%BB%BB%E5%8A%A1%E8%B0%83%E5%BA%A6">任务调度</a></p><p>- <a href="#Oozie">Oozie</a></p><p>- <a href="#Azkaban">Azkaban</a></p><p>- <a href="#Kettle">Kettle</a></p><p>- <a href="#%E7%9B%91%E6%8E%A7%E6%8A%A5%E8%AD%A6">监控报警</a></p><p>- <a href="#Zookeeper">Zookeeper</a></p>',29)),o(" /TOC "),e[2]||(e[2]=a('<h1 id="大数据软件装配" tabindex="-1"><a class="header-anchor" href="#大数据软件装配"><span>大数据软件装配</span></a></h1><blockquote><p>工欲善其事，必先利其器。</p></blockquote><p>我的配置环境是：</p><p><code>CentOs 6.8</code></p><p><code>Hadoop Apache 2.7.2</code></p><p><code>Zookeeper 3.4.10</code></p><p><code>Hive 1.2.1</code></p><p><code>Flume 1.7.0</code></p><p><code>Kafka 2.11-0.11.0.2</code></p><p><code>HBase 1.3.1</code></p><p><code>Sqoop 1.4.6</code></p><p><code>Oozie 4.0.0</code></p><p><code>Azkaban 2.5.0</code></p><p><code>ClickHouse 19.7.3.9</code></p><p><code>DataX</code></p><p><code>Oracle 18.3.0(这部分内容在Docker中)</code></p><p><code>MogoDB 4.0.10</code></p><h1 id="大数据软件装配-1" tabindex="-1"><a class="header-anchor" href="#大数据软件装配-1"><span>大数据软件装配</span></a></h1><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/01_大数据各软件详细安装流程.png" alt="01_大数据各软件详细安装流程" tabindex="0" loading="lazy"><figcaption>01_大数据各软件详细安装流程</figcaption></figure><h1 id="shell" tabindex="-1"><a class="header-anchor" href="#shell"><span>Shell</span></a></h1><p>本框架内部所做的<code>Shell</code>思维导图仅仅是一个简单的入门，学习结束以后可以看懂基本的脚本流程，和撰写一些简单的脚本，更深入的推荐去看<code>Linux命令行与shell脚本编程大全</code>。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261012170.png" alt="Shell" tabindex="0" loading="lazy"><figcaption>Shell</figcaption></figure><h1 id="数据源" tabindex="-1"><a class="header-anchor" href="#数据源"><span>数据源</span></a></h1><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h2><p><code>Docker</code>是一个解决了运行环境和配置问题的软件容器，主要由三部分组成，<code>镜像（Image）</code>、<code>容器(Container)</code>、以及 <code>仓库(Repository)</code> ，我使用 <code>Docker</code> 的主要目的是在<code>Mac</code>系统上安装<code>Oracle</code>，因而在<code>Docker</code>的文档中，如何安装与使用是我的重点。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261012213.png" alt="Docker" tabindex="0" loading="lazy"><figcaption>Docker</figcaption></figure><h2 id="database" tabindex="-1"><a class="header-anchor" href="#database"><span>Database</span></a></h2><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL</span></a></h3><p><code>MySQL</code>目前需要更新的地方仍然很多，目前有一份依照<code>DDL、DML及DCL</code>思路进行制作的说明文档。</p><h3 id="oracle" tabindex="-1"><a class="header-anchor" href="#oracle"><span>Oracle</span></a></h3><p>暂无</p><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>Redis</span></a></h3><p><code>Redis</code>是一个开源的<code>key-value</code>式存储系统，配合关系型数据库做高速缓存，由于其拥有持久化能力,利用其多样的数据结构存储特定的数据是它的两个主要用途。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261010940.png" alt="Redis" tabindex="0" loading="lazy"><figcaption>Redis</figcaption></figure><h3 id="hbase" tabindex="-1"><a class="header-anchor" href="#hbase"><span>HBase</span></a></h3><h4 id="理论文件" tabindex="-1"><a class="header-anchor" href="#理论文件"><span>理论文件</span></a></h4><p><code>HBase</code> 作为基于 <code>hadoop</code> 的 <code>NoSQL</code> 数据库，其原理性和操作性的要求都比较强，在原理阶段讲解了 <code>HBase</code> 的逻辑结构和物理存储结构，以及针对于其结构进行优化的的操作手段。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/1726554.png" alt="HBase" tabindex="0" loading="lazy"><figcaption>HBase</figcaption></figure><h4 id="代码文件" tabindex="-1"><a class="header-anchor" href="#代码文件"><span>代码文件</span></a></h4><p><code>HBase</code>的代码文件是基于<code>HbaseAPI</code>操作搭建了一个微博项目，项目源码已写好，但具体分析文件还在制作中。</p><h3 id="clickhouse" tabindex="-1"><a class="header-anchor" href="#clickhouse"><span>ClickHouse</span></a></h3><p><code>ClickHouse</code>能够使用<code>SQL</code>查询实时生成分析数据报告，主要用于在线分析处理查询。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016963.png" alt="ClickHouse" tabindex="0" loading="lazy"><figcaption>ClickHouse</figcaption></figure><h2 id="datax" tabindex="-1"><a class="header-anchor" href="#datax"><span>DataX</span></a></h2><p><code>DataX</code>是一个异构数据源离线同步工具，致力于实现各种数据库间的数据同步功能，它的框架设计与<code>Flume</code>有些类似，通过<code>Reader</code>、<code>Framework</code>、<code>Writer</code>进行数据的转换同步，它的使用重点在于通过<code>json</code>的配置文件设定执行任务。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016003.png" alt="DataX" tabindex="0" loading="lazy"><figcaption>DataX</figcaption></figure><h1 id="接入层" tabindex="-1"><a class="header-anchor" href="#接入层"><span>接入层</span></a></h1><h2 id="flume" tabindex="-1"><a class="header-anchor" href="#flume"><span>Flume</span></a></h2><p><code>Flume</code>是一个基于流式架构数据采集、聚合和传输系统，因而它实用性较强，通过<code>Source</code> ，<code>Channel</code>，<code>Sink</code> 进行控制。所以我把它理论和代码文件归并。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016039.png" alt="Flume" tabindex="0" loading="lazy"><figcaption>Flume</figcaption></figure><h2 id="sqoop" tabindex="-1"><a class="header-anchor" href="#sqoop"><span>Sqoop</span></a></h2><p><code>Sqoop</code> 是一个用于 <code>Hadoop</code> 和关系型数据库数据互导的小框架，其原理就是讲导入导出操作译作 <code>MapReduce</code> 语言，最关键的操作就是根据其语法进行脚本写作，因而理论与代码文件合并，同时整理出了 <code>Sqoop</code> 的常用命令。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016086.png" alt="Sqoop" tabindex="0" loading="lazy"><figcaption>Sqoop</figcaption></figure><h2 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka"><span>Kafka</span></a></h2><p><code>Kafka</code>的用途多种多样，并不只局限于数据接入一种，它可以进行日志收集，消息系统，用户活动跟踪，流式处理等，要理解<code>Kafka</code>，首先要了解它的架构运行，其次了解它的文件存储机制。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016131.png" alt="Kafka" tabindex="0" loading="lazy"><figcaption>Kafka</figcaption></figure><h1 id="数据处理层" tabindex="-1"><a class="header-anchor" href="#数据处理层"><span>数据处理层</span></a></h1><h2 id="数据存储" tabindex="-1"><a class="header-anchor" href="#数据存储"><span>数据存储</span></a></h2><h3 id="hdfs" tabindex="-1"><a class="header-anchor" href="#hdfs"><span>HDFS</span></a></h3><h4 id="理论文件-1" tabindex="-1"><a class="header-anchor" href="#理论文件-1"><span>理论文件</span></a></h4><p><code>HDFS</code> 是 <code>Hadoop</code> 的基石，因此我把 <code>Hadoop</code> 的概述与它进行了合并，作为一个小简介，从而引出 <code>HDFS</code> ,<code>HDFS</code>的主要部分在于理解<code>NN</code>、<code>DN</code>、<code>Client</code>和<code>2NN</code>的运行机制。</p><p>在2019年7月13日<code>HDFS理论文件</code>进行了一次更新，将<code>HDFS</code>架构，读写流程，以及<code>NN与2NN</code>的关系纳入了<code>HDFS运作原理</code>模块中，同时新增了<code>Hadoop压缩格式</code>，及<code>Hadoop优化</code>两个模块，完善了<code>HDFS</code>的内容。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016160.png" alt="HDFS" tabindex="0" loading="lazy"><figcaption>HDFS</figcaption></figure><h4 id="代码文件-1" tabindex="-1"><a class="header-anchor" href="#代码文件-1"><span>代码文件</span></a></h4><p>已更新，主要是<code>Hadoop</code>在<code>shell</code>命令行中的一些常用命令整理归纳</p><h3 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn"><span>Yarn</span></a></h3><p><code>Yarn</code>是<code>Hadoop</code>中的资源调度平台，在这一内容中的重点主要有<code>Yarn工作机制</code>（以<code>MapReduce</code>程序为例，详细的介绍了<code>Yarn</code>的资源调度流程），<code>Yarn资源调度器</code>(介绍了<code>Yarn</code>的三种资源调度器)，以及<code>Yarn的资源推测执行机制</code>。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016181.png" alt="Yarn" tabindex="0" loading="lazy"><figcaption>Yarn</figcaption></figure><h2 id="数据计算" tabindex="-1"><a class="header-anchor" href="#数据计算"><span>数据计算</span></a></h2><h3 id="mapreduce" tabindex="-1"><a class="header-anchor" href="#mapreduce"><span>MapReduce</span></a></h3><h4 id="理论文件-2" tabindex="-1"><a class="header-anchor" href="#理论文件-2"><span>理论文件</span></a></h4><p><code>MapReduce</code> 是 <code>Hadoop</code> 中的分布式计算系统，在之后的内容中，有许多框架都是基于 <code>MapReduce</code> 所进行的，比如 <code>Oozie</code> ，比如 <code>Hive</code> ，因而理解 <code>MapReduce</code> 的原理是非常必要的。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016206.png" alt="MR" tabindex="0" loading="lazy"><figcaption>MR</figcaption></figure><h4 id="备注" tabindex="-1"><a class="header-anchor" href="#备注"><span>备注</span></a></h4><p><code>MapReduce</code> 的知识框架整理方面，还是存在一些代码混杂于理论文件之中的情况，在接下来的版本中应该会对这一点进行更新。</p><h3 id="spark" tabindex="-1"><a class="header-anchor" href="#spark"><span>Spark</span></a></h3><p><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/13_Spark笔记.png" alt="13_Spark笔记" loading="lazy"><br><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/14_Spark内核.png" alt="14_Spark内核" loading="lazy"><br><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/15_Spark调优.png" alt="15_Spark调优" loading="lazy"></p><h2 id="数据查询" tabindex="-1"><a class="header-anchor" href="#数据查询"><span>数据查询</span></a></h2><h3 id="hive" tabindex="-1"><a class="header-anchor" href="#hive"><span>Hive</span></a></h3><p><code>Hive</code> 的情况恰恰与 <code>Zookeeper</code> 相反，<code>Hive</code> 作为一个基于 <code>Hadoop</code> 的数仓工具，其原理运作并不难，即底层基于 <code>MapRuduce</code> 的类 <code>SQL</code> 查询工具，因此 <code>Hive</code> 更注重的是代码文件，其中 <code>4 ~ 9</code> 章我以 <code>sql</code> 整理出来。</p><p><code>Hive理论文档</code>在2019年7月14日又进行了一次更新，这次更新主要是增加了其与数据库的关系、保存元数据的方式，以及针对压缩和调优，进行了一次总结。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016231.png" alt="Hive" tabindex="0" loading="lazy"><figcaption>Hive</figcaption></figure><h3 id="impala" tabindex="-1"><a class="header-anchor" href="#impala"><span>Impala</span></a></h3><h2 id="任务调度" tabindex="-1"><a class="header-anchor" href="#任务调度"><span>任务调度</span></a></h2><h3 id="oozie" tabindex="-1"><a class="header-anchor" href="#oozie"><span>Oozie</span></a></h3><p><code>Oozie</code> 是一个任务调度的小框架，其原理是把<code> xml</code> 语言转译为<code> mapreduce</code> 程序来做，但 <code>Oozie1</code> 只有<code>Map</code>阶段，此处我们归纳总结的是<code> Oozie1</code>。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016257.png" alt="Oozie" tabindex="0" loading="lazy"><figcaption>Oozie</figcaption></figure><h3 id="azkaban" tabindex="-1"><a class="header-anchor" href="#azkaban"><span>Azkaban</span></a></h3><p><code>Azkaban</code>作为任务调度框架，其易用性无论从环境配置上来讲，以及配置文件的撰写上来讲，都要比<code>Oozie</code>更好。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016289.png" alt="Azkaban" tabindex="0" loading="lazy"><figcaption>Azkaban</figcaption></figure><h3 id="kettle" tabindex="-1"><a class="header-anchor" href="#kettle"><span>Kettle</span></a></h3><p><code>Kettle</code>是一个可视化的<code>ETL工具</code>，简单易上手，使用很轻松。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016314.png" alt="Kettle" tabindex="0" loading="lazy"><figcaption>Kettle</figcaption></figure><h2 id="监控报警" tabindex="-1"><a class="header-anchor" href="#监控报警"><span>监控报警</span></a></h2><h3 id="zookeeper" tabindex="-1"><a class="header-anchor" href="#zookeeper"><span>Zookeeper</span></a></h3><p><code>Zookeeper</code> 的主要目的是为了监控集群中的修改操作，它的架设与操作都非常简单，因此 <code>Zookeeper</code> 只有理论文件，在理论中，尤其要注意理解的是它的监听器原理和选举机制（类 <code>Paxos</code> 算法），此外，<code>Zookeeper</code>的写数据流程也值得注意。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016341.png" alt="Zookeeper" tabindex="0" loading="lazy"><figcaption>Zookeeper</figcaption></figure>',97))])}const l=c(n,[["render",r],["__file","index.html.vue"]]),s=JSON.parse('{"path":"/posts/BigData/","title":"01 大数据生态圈","lang":"zh-CN","frontmatter":{"created":"2024-03-30 15:07","updated":"2024-10-26 10:17","description":"01 大数据生态圈 这是一份有关于大数据生态圈学习过程中各类知识点整理的思维导图集，最近一次更新为 00_装配文件：在此模块中，我对大数据相关软件在 Linux 和 Mac 环境下的安装进行了详细的说明，以确保大数据软件能够尽可能成功的运行在你的电脑上。 0.5_Shell：学习大数据究竟需不需要 Shell 脚本基础，这取决于你自身，若没有 Shel...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/BigData/"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"01 大数据生态圈"}],["meta",{"property":"og:description","content":"01 大数据生态圈 这是一份有关于大数据生态圈学习过程中各类知识点整理的思维导图集，最近一次更新为 00_装配文件：在此模块中，我对大数据相关软件在 Linux 和 Mac 环境下的安装进行了详细的说明，以确保大数据软件能够尽可能成功的运行在你的电脑上。 0.5_Shell：学习大数据究竟需不需要 Shell 脚本基础，这取决于你自身，若没有 Shel..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/01_大数据各软件详细安装流程.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01 大数据生态圈\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/01_大数据各软件详细安装流程.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261012170.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261012213.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261010940.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/1726554.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016963.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016003.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016039.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016086.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016131.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016160.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016181.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016206.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/13_Spark笔记.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/14_Spark内核.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/15_Spark调优.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016231.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016257.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016289.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016314.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410261016341.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Docker","slug":"docker","link":"#docker","children":[]},{"level":2,"title":"Database","slug":"database","link":"#database","children":[{"level":3,"title":"MySQL","slug":"mysql","link":"#mysql","children":[]},{"level":3,"title":"Oracle","slug":"oracle","link":"#oracle","children":[]},{"level":3,"title":"Redis","slug":"redis","link":"#redis","children":[]},{"level":3,"title":"HBase","slug":"hbase","link":"#hbase","children":[]},{"level":3,"title":"ClickHouse","slug":"clickhouse","link":"#clickhouse","children":[]}]},{"level":2,"title":"DataX","slug":"datax","link":"#datax","children":[]},{"level":2,"title":"Flume","slug":"flume","link":"#flume","children":[]},{"level":2,"title":"Sqoop","slug":"sqoop","link":"#sqoop","children":[]},{"level":2,"title":"Kafka","slug":"kafka","link":"#kafka","children":[]},{"level":2,"title":"数据存储","slug":"数据存储","link":"#数据存储","children":[{"level":3,"title":"HDFS","slug":"hdfs","link":"#hdfs","children":[]},{"level":3,"title":"Yarn","slug":"yarn","link":"#yarn","children":[]}]},{"level":2,"title":"数据计算","slug":"数据计算","link":"#数据计算","children":[{"level":3,"title":"MapReduce","slug":"mapreduce","link":"#mapreduce","children":[]},{"level":3,"title":"Spark","slug":"spark","link":"#spark","children":[]}]},{"level":2,"title":"数据查询","slug":"数据查询","link":"#数据查询","children":[{"level":3,"title":"Hive","slug":"hive","link":"#hive","children":[]},{"level":3,"title":"Impala","slug":"impala","link":"#impala","children":[]}]},{"level":2,"title":"任务调度","slug":"任务调度","link":"#任务调度","children":[{"level":3,"title":"Oozie","slug":"oozie","link":"#oozie","children":[]},{"level":3,"title":"Azkaban","slug":"azkaban","link":"#azkaban","children":[]},{"level":3,"title":"Kettle","slug":"kettle","link":"#kettle","children":[]}]},{"level":2,"title":"监控报警","slug":"监控报警","link":"#监控报警","children":[{"level":3,"title":"Zookeeper","slug":"zookeeper","link":"#zookeeper","children":[]}]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":7.58,"words":2274},"filePathRelative":"posts/BigData/README.md","localizedDate":"2024年10月28日","excerpt":"\\n<p>这是一份有关于大数据生态圈学习过程中各类知识点整理的思维导图集，最近一次更新为</p>\\n<ol>\\n<li>\\n<p><code>00_装配文件</code>：在此模块中，我对大数据相关软件在 <code>Linux</code> 和 <code>Mac</code> 环境下的安装进行了详细的说明，以确保大数据软件能够尽可能成功的运行在你的电脑上。</p>\\n</li>\\n<li>\\n<p><code>0.5_Shell</code>：学习大数据究竟需不需要 <code>Shell</code> 脚本基础，这取决于你自身，若没有 <code>Shell</code> 脚本基础，也不妨碍你进行大数据的学习，若是拥有 <code>Shell</code> 脚本基础，那么你在处理一些进程的时候，将会事半功倍。</p>\\n</li>\\n<li>\\n<p><code>01_数据源</code>：这部分的思路是 <code>Docker （数据库安装环境）</code>→ <code>Database （数据库）</code>→<code> DataX （数据转换离线同步）</code>，是一个从无到有的过程， <code>Database</code> 部分目前（2019年6月28日）拥有<code> Oracle</code>、<code>MySQL</code>、<code>HBase</code>、<code>Redis</code>、<code>ClickHouse</code>五个部分。</p>\\n</li>\\n<li>\\n<p><code>02_接入层</code>：主要是<code>Flume</code>和<code>Sqoop</code>以及<code>Kafka</code>。</p>\\n</li>\\n<li>\\n<p><code>03_数据处理层</code>：这一层面的内容十分丰富，因而我又做了一次划分，主要分为五个部分:<code>数据存储：如HDFS</code>，<code>数据计算：MapReduce及Spark</code>，<code>数据查询：Hive及Impala</code>，<code>任务调度：Oozie，Azkaban，Kettle等</code>，<code>监控报警：Zookeeper</code>。</p>\\n</li>\\n</ol>","autoDesc":true}');export{l as comp,s as data};
