import{_ as e,c as s,a as r,o as i}from"./app-BOcQBfH9.js";const o={};function l(t,a){return i(),s("div",null,a[0]||(a[0]=[r(`<h1 id="solr入门" tabindex="-1"><a class="header-anchor" href="#solr入门"><span>Solr入门</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>Solr是基于Lucene全文搜索引擎</p><h2 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装"><span>2. 安装</span></a></h2><ol><li><p>下载安装（我下载的是7.7.3版本）</p><p><a href="https://lucene.apache.org/solr/downloads.html" target="_blank" rel="noopener noreferrer">下载solr</a></p><blockquote><p>下载二进制包（Binary releases） 不要下载源码包（Source release） 否则启动可能遇到问题</p></blockquote></li><li><p>目录结构</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048616.png" alt="image-20210301153307778" tabindex="0" loading="lazy"><figcaption>image-20210301153307778</figcaption></figure><ul><li>bin： 启动和停止服务器的脚本</li><li>example：示例</li><li>server/logs 文件夹： 所有solr 日志都写入该文件夹</li><li>server/solr 文件夹：包含不同的集合或核心（core/collection）。对于各集合或核心的配置和数据都存储在相应的集合或核心文件夹、</li></ul></li></ol><h2 id="_3-启动solr" tabindex="-1"><a class="header-anchor" href="#_3-启动solr"><span>3. 启动Solr</span></a></h2><p>solr 内置 <code>Jetty</code>服务器 ，可以直接启动</p><p>在bin目录下</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>solr start</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048660.png" alt="image-20210301153900527" tabindex="0" loading="lazy"><figcaption>image-20210301153900527</figcaption></figure><p>默认端口为8983</p><p><a href="http://localhost:8983/solr/" target="_blank" rel="noopener noreferrer">http://localhost:8983/solr/</a></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048702.png" alt="image-20210301154015030" tabindex="0" loading="lazy"><figcaption>image-20210301154015030</figcaption></figure><h2 id="_4-配置solr" tabindex="-1"><a class="header-anchor" href="#_4-配置solr"><span>4. 配置Solr</span></a></h2><h3 id="_4-1-建立核心-core" tabindex="-1"><a class="header-anchor" href="#_4-1-建立核心-core"><span>4.1 建立核心（core）</span></a></h3><h4 id="_4-1-1-方式1-命令行建core" tabindex="-1"><a class="header-anchor" href="#_4-1-1-方式1-命令行建core"><span>4.1.1 方式1：命令行建core</span></a></h4><blockquote><p>核心：独立模式下启动的配置称为核心</p><p>集合：在SolrCloud模式启动的配置称为集合</p></blockquote><p>首先，创建一个核心的索引数据</p><p><code>solr create</code>：<br><code>-c &lt;name&gt;</code>:要创建的核心或集合的名称（必需）。<br><code>-d &lt;confdir&gt;</code>:配置目录，在SolrCloud模式非常有用。<br><code>-n &lt;configName&gt;</code>:配置名称。这将默认为核心或集合的名称。<br><code>-p &lt;port&gt;</code>:本地Solr的实例的端口发送<code>create</code>命令; 默认脚本试图通过寻找运行Solr的实例来检测端口。<br><code>-s &lt;shards&gt;</code>:Number of shards to split a collection into, default is 1.<br><code>-rf &lt;replicas&gt;</code>:集合中的每个文件的份数。默认值是1。</p><p>使用核心名称<code>-c</code>参数。对于所有其它参数使用默认设置。</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">solr</span><span style="color:#98C379;--shiki-dark:#98C379;"> create</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -c</span><span style="color:#98C379;--shiki-dark:#98C379;"> jcg</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048734.png" alt="image-20210301155837877" tabindex="0" loading="lazy"><figcaption>image-20210301155837877</figcaption></figure><p>JCG核心被填充在核心选择器上。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048764.png" alt="image-20210301160034928" tabindex="0" loading="lazy"><figcaption>image-20210301160034928</figcaption></figure><h4 id="_4-1-2-方式二-界面操作" tabindex="-1"><a class="header-anchor" href="#_4-1-2-方式二-界面操作"><span>4.1.2 方式二：界面操作</span></a></h4><ol><li><p>在core admin上点击new core新建</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048796.png" alt="image-20210304151629768" tabindex="0" loading="lazy"><figcaption>image-20210304151629768</figcaption></figure></li><li><p>此时会提示**&#39;solrconfig.xml** 文件找不到</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048825.png" alt="image-20210304151726594" tabindex="0" loading="lazy"><figcaption>image-20210304151726594</figcaption></figure></li><li><p>此时我们去安装目录下，可以看到已经新建了一个core目录。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048858.png" alt="image-20210304151943980" tabindex="0" loading="lazy"><figcaption>image-20210304151943980</figcaption></figure><ol><li><p>报错是因为需要的配置文件不存在，我们去拷贝过来即可。</p><p>进入F:\\solr-7.7.3\\server\\solr\\configsets_default 目录下，把conf文件夹copy到</p><p>F:\\solr-7.7.3\\server\\solr\\new_core 目录下，然后再执行Add core。</p><p>然后等待1-2s，会进入以下界面：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048885.png" alt="image-20210304152230352" tabindex="0" loading="lazy"><figcaption>image-20210304152230352</figcaption></figure></li></ol></li></ol><h3 id="_4-2-修改schema-xml-文件" tabindex="-1"><a class="header-anchor" href="#_4-2-修改schema-xml-文件"><span>4.2 修改Schema.xml 文件</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048912.png" alt="image-20210301160308308" tabindex="0" loading="lazy"><figcaption>image-20210301160308308</figcaption></figure><ul><li>conf ： 保存核心配置</li><li>data： 索引数据</li></ul><p>solr-7.7.3\\server\\solr\\jcg\\conf\\managed-schema中添加如下内容：</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">field</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;cat&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;text_general&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> indexed</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> stored</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">field</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;name&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;text_general&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> indexed</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> stored</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">field</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;price&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;double&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> indexed</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> stored</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">field</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;inStock&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;boolean&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> indexed</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> stored</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">field</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;author&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;text_general&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> indexed</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> stored</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span></code></pre></div><ul><li><code>indexed</code>: 为<code>true</code>指定字段被索引。</li><li><code>stored</code>指定字段是否被存储。</li></ul><h3 id="_4-3-重启服务器" tabindex="-1"><a class="header-anchor" href="#_4-3-重启服务器"><span>4.3 重启服务器</span></a></h3><p>修改配置必须重启服务器</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">solr</span><span style="color:#98C379;--shiki-dark:#98C379;"> stop</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -all</span></span></code></pre></div><p>重启服务：</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">solr</span><span style="color:#98C379;--shiki-dark:#98C379;"> start</span></span></code></pre></div><h3 id="_4-4-索引数据" tabindex="-1"><a class="header-anchor" href="#_4-4-索引数据"><span>4.4 索引数据</span></a></h3><p>Apache Solr自带SimplePostTool的程序。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048940.png" alt="image-20210301163115327" tabindex="0" loading="lazy"><figcaption>image-20210301163115327</figcaption></figure><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">java </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#E06C75;--shiki-dark:#E06C75;">jar </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">post</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">jar</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> -</span><span style="color:#E06C75;--shiki-dark:#E06C75;">h</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048971.png" alt="image-20210301163318496" tabindex="0" loading="lazy"><figcaption>image-20210301163318496</figcaption></figure><p>索引数据：</p><div class="language-ruby" data-ext="ruby" data-title="ruby"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">java </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Dtype</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">text</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">csv </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Durl</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=http</span><span style="color:#D19A66;--shiki-dark:#D19A66;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;">//</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">localhost</span><span style="color:#D19A66;--shiki-dark:#D19A66;">:8983</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">solr</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">jcg</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">update  </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">jar post.jar   books.csv</span></span></code></pre></div><ul><li><p>-Dtype</p><p>数据文件的类型。</p></li><li><p>-Durl</p><p>JCG核心的地址。</p></li></ul><p>导航到以下网址并选择核心JCG:</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048000.png" alt="image-20210301163549574" tabindex="0" loading="lazy"><figcaption>image-20210301163549574</figcaption></figure><h2 id="_5-搜索" tabindex="-1"><a class="header-anchor" href="#_5-搜索"><span>5. 搜索</span></a></h2><h3 id="_5-1-按名称搜索" tabindex="-1"><a class="header-anchor" href="#_5-1-按名称搜索"><span>5.1 按名称搜索</span></a></h3><p><a href="https://link.jianshu.com/?t=http://localhost:8983/solr/jcg/select?q=name" target="_blank" rel="noopener noreferrer">http://localhost:8983/solr/jcg/select?q=name</a>:&quot;A Clash of Kings&quot;</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048030.png" alt="image-20210301163908343" tabindex="0" loading="lazy"><figcaption>image-20210301163908343</figcaption></figure><h3 id="_5-2-首字母搜索" tabindex="-1"><a class="header-anchor" href="#_5-2-首字母搜索"><span>5.2 首字母搜索</span></a></h3><p><a href="https://link.jianshu.com/?t=http://localhost:8983/solr/jcg/select?q=name" target="_blank" rel="noopener noreferrer">http://localhost:8983/solr/jcg/select?q=name</a>:&quot;A&quot;</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048059.png" alt="image-20210301164023760" tabindex="0" loading="lazy"><figcaption>image-20210301164023760</figcaption></figure><h3 id="_5-3-使用通配符" tabindex="-1"><a class="header-anchor" href="#_5-3-使用通配符"><span>5.3 使用通配符</span></a></h3><p><a href="https://link.jianshu.com/?t=http://localhost:8983/solr/jcg/select?q=name" target="_blank" rel="noopener noreferrer">http://localhost:8983/solr/jcg/select?q=name</a>:&quot;*of&quot;</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048091.png" alt="image-20210301164102113" tabindex="0" loading="lazy"><figcaption>image-20210301164102113</figcaption></figure><h3 id="_5-4-使用条件" tabindex="-1"><a class="header-anchor" href="#_5-4-使用条件"><span>5.4 使用条件</span></a></h3><p>如何查询价格低于￥6的书。</p><p><a href="http://localhost:8983/solr/jcg/select?q=*&amp;fq=price:" target="_blank" rel="noopener noreferrer">http://localhost:8983/solr/jcg/select?q=*&amp;fq=price:</a>[0 TO 6]</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048125.png" alt="image-20210301164140115" tabindex="0" loading="lazy"><figcaption>image-20210301164140115</figcaption></figure><h2 id="_6-solr-页面进行查询" tabindex="-1"><a class="header-anchor" href="#_6-solr-页面进行查询"><span>6. Solr 页面进行查询</span></a></h2><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048153.png" alt="image-20210301164448216" tabindex="0" loading="lazy"><figcaption>image-20210301164448216</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.jianshu.com/p/1b725a783d50" target="_blank" rel="noopener noreferrer">Apache Solr入门教程</a></p>`,65)]))}const p=e(o,[["render",l],["__file","solr-a-satrted.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/SOLR/solr-a-satrted.html","title":"Solr入门","lang":"zh-CN","frontmatter":{"aliases":"Solr入门","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:49","description":"Solr入门 1. 简介 Solr是基于Lucene全文搜索引擎 2. 安装 下载安装（我下载的是7.7.3版本） 下载solr 下载二进制包（Binary releases） 不要下载源码包（Source release） 否则启动可能遇到问题 目录结构 image-20210301153307778image-20210301153307778 b...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/SOLR/solr-a-satrted.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Solr入门"}],["meta",{"property":"og:description","content":"Solr入门 1. 简介 Solr是基于Lucene全文搜索引擎 2. 安装 下载安装（我下载的是7.7.3版本） 下载solr 下载二进制包（Binary releases） 不要下载源码包（Source release） 否则启动可能遇到问题 目录结构 image-20210301153307778image-20210301153307778 b..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048616.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Solr入门\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048616.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048660.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048702.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048734.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048764.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048796.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048825.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048858.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048885.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048912.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048940.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048971.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048000.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048030.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048059.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048091.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048125.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048153.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 安装","slug":"_2-安装","link":"#_2-安装","children":[]},{"level":2,"title":"3. 启动Solr","slug":"_3-启动solr","link":"#_3-启动solr","children":[]},{"level":2,"title":"4. 配置Solr","slug":"_4-配置solr","link":"#_4-配置solr","children":[{"level":3,"title":"4.1 建立核心（core）","slug":"_4-1-建立核心-core","link":"#_4-1-建立核心-core","children":[]},{"level":3,"title":"4.2 修改Schema.xml 文件","slug":"_4-2-修改schema-xml-文件","link":"#_4-2-修改schema-xml-文件","children":[]},{"level":3,"title":"4.3 重启服务器","slug":"_4-3-重启服务器","link":"#_4-3-重启服务器","children":[]},{"level":3,"title":"4.4 索引数据","slug":"_4-4-索引数据","link":"#_4-4-索引数据","children":[]}]},{"level":2,"title":"5. 搜索","slug":"_5-搜索","link":"#_5-搜索","children":[{"level":3,"title":"5.1 按名称搜索","slug":"_5-1-按名称搜索","link":"#_5-1-按名称搜索","children":[]},{"level":3,"title":"5.2 首字母搜索","slug":"_5-2-首字母搜索","link":"#_5-2-首字母搜索","children":[]},{"level":3,"title":"5.3 使用通配符","slug":"_5-3-使用通配符","link":"#_5-3-使用通配符","children":[]},{"level":3,"title":"5.4 使用条件","slug":"_5-4-使用条件","link":"#_5-4-使用条件","children":[]}]},{"level":2,"title":"6. Solr 页面进行查询","slug":"_6-solr-页面进行查询","link":"#_6-solr-页面进行查询","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.09,"words":928},"filePathRelative":"posts/Database/SOLR/solr-a-satrted.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>Solr是基于Lucene全文搜索引擎</p>\\n<h2>2. 安装</h2>\\n<ol>\\n<li>\\n<p>下载安装（我下载的是7.7.3版本）</p>\\n<p><a href=\\"https://lucene.apache.org/solr/downloads.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">下载solr</a></p>\\n<blockquote>\\n<p>下载二进制包（Binary releases） 不要下载源码包（Source release） 否则启动可能遇到问题</p>\\n</blockquote>\\n</li>\\n<li>\\n<p>目录结构</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048616.png\\" alt=\\"image-20210301153307778\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20210301153307778</figcaption></figure>\\n<ul>\\n<li>bin： 启动和停止服务器的脚本</li>\\n<li>example：示例</li>\\n<li>server/logs 文件夹： 所有solr 日志都写入该文件夹</li>\\n<li>server/solr 文件夹：包含不同的集合或核心（core/collection）。对于各集合或核心的配置和数据都存储在相应的集合或核心文件夹、</li>\\n</ul>\\n</li>\\n</ol>","autoDesc":true}');export{p as comp,c as data};
