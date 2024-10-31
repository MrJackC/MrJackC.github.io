import{_ as s,c as a,a as p,o as i}from"./app-mWs04Xnh.js";const n={};function r(l,e){return i(),a("div",null,e[0]||(e[0]=[p(`<h1 id="scrapy入门" tabindex="-1"><a class="header-anchor" href="#scrapy入门"><span>Scrapy入门</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>Scrapy 是一个为了爬取网站数据，提取结构性数据而编写的应用框架。</p><h3 id="_1-1-与requests-beautifulsoup-的区别" tabindex="-1"><a class="header-anchor" href="#_1-1-与requests-beautifulsoup-的区别"><span>1.1 与Requests+BeautifulSoup 的区别</span></a></h3><ul><li><p>Requests+BeautifulSoup</p><p>适合快速实现的小项目</p></li><li><p>scrapy</p><p>大的工程化项目</p></li></ul><h2 id="_2-架构概览" tabindex="-1"><a class="header-anchor" href="#_2-架构概览"><span>2. 架构概览</span></a></h2><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230955513.png" alt="image-20210310164531835" tabindex="0" loading="lazy"><figcaption>image-20210310164531835</figcaption></figure><h3 id="_2-1-scrapy-engine" tabindex="-1"><a class="header-anchor" href="#_2-1-scrapy-engine"><span>2.1 Scrapy Engine</span></a></h3><blockquote><p>引擎负责控制数据流在系统中所有组件中流动，并在相应动作发生时触发事件。 详细内容查看下面的数据流(Data Flow)部分。</p></blockquote><p>此组件相当于爬虫的“大脑”，是整个爬虫的调度中心。</p><h3 id="_2-2-调度器-scheduler" tabindex="-1"><a class="header-anchor" href="#_2-2-调度器-scheduler"><span>2.2 调度器（Scheduler）</span></a></h3><blockquote><p>调度器从引擎接受request并将他们入队，以便之后引擎请求他们时提供给引擎。</p></blockquote><p>初始的爬取URL和后续在页面中获取的待爬取的URL将放入调度器中，等待爬取。同时调度器会自动去除重复的URL（如果特定的URL不需要去重也可以通过设置实现，如post请求的URL）</p><h3 id="_2-3-下载器-downloader" tabindex="-1"><a class="header-anchor" href="#_2-3-下载器-downloader"><span>2.3 下载器（Downloader）</span></a></h3><p>下载器负责获取页面数据并提供给引擎，而后提供给spider。</p><h3 id="_2-4-spiders" tabindex="-1"><a class="header-anchor" href="#_2-4-spiders"><span>2.4 Spiders</span></a></h3><p>Spider是Scrapy用户编写用于分析response并提取item(即获取到的item)或额外跟进的URL的类。 每个spider负责处理一个特定(或一些)网站。</p><h3 id="_2-5-item-pipeline" tabindex="-1"><a class="header-anchor" href="#_2-5-item-pipeline"><span>2.5 Item Pipeline</span></a></h3><blockquote><p>Item Pipeline负责处理被spider提取出来的item。典型的处理有清理、 验证及持久化(例如存取到数据库中)。</p></blockquote><p>当页面被爬虫解析所需的数据存入Item后，将被发送到项目管道(Pipeline)，并经过几个特定的次序处理数据，最后存入本地文件或存入数据库。</p><h3 id="_2-6-下载器中间件-downloader-middlewares" tabindex="-1"><a class="header-anchor" href="#_2-6-下载器中间件-downloader-middlewares"><span>2.6 下载器中间件(Downloader middlewares)</span></a></h3><blockquote><p>下载器中间件是在引擎及下载器之间的特定钩子(specific hook)，处理Downloader传递给引擎的response。 其提供了一个简便的机制，通过插入自定义代码来扩展Scrapy功能。</p></blockquote><p>通过设置下载器中间件可以实现爬虫自动更换user-agent、IP等功能。</p><h3 id="_2-7-spider中间件-spider-middlewares" tabindex="-1"><a class="header-anchor" href="#_2-7-spider中间件-spider-middlewares"><span>2.7 Spider中间件(Spider middlewares)</span></a></h3><blockquote><p>Spider中间件是在引擎及Spider之间的特定钩子(specific hook)，处理spider的输入(response)和输出(items及requests)。 其提供了一个简便的机制，通过插入自定义代码来扩展Scrapy功能。</p></blockquote><h3 id="_2-8-数据流-data-flow" tabindex="-1"><a class="header-anchor" href="#_2-8-数据流-data-flow"><span>2.8 数据流(Data flow)</span></a></h3><ol><li>引擎打开一个网站(open a domain)，找到处理该网站的Spider并向该spider请求第一个要爬取的URL(s)。</li><li>引擎从Spider中获取到第一个要爬取的URL并在调度器(Scheduler)以Request调度。</li><li>引擎向调度器请求下一个要爬取的URL。</li><li>调度器返回下一个要爬取的URL给引擎，引擎将URL通过下载中间件(请求(request)方向)转发给下载器(Downloader)。</li><li>一旦页面下载完毕，下载器生成一个该页面的Response，并将其通过下载中间件(返回(response)方向)发送给引擎。</li><li>引擎从下载器中接收到Response并通过Spider中间件(输入方向)发送给Spider处理。</li><li>Spider处理Response并返回爬取到的Item及(跟进的)新的Request给引擎。</li><li>引擎将(Spider返回的)爬取到的Item给Item Pipeline，将(Spider返回的)Request给调度器。</li><li>(从第二步)重复直到调度器中没有更多地request，引擎关闭该网站。</li></ol><h2 id="_3-建立scrapy爬虫项目流程" tabindex="-1"><a class="header-anchor" href="#_3-建立scrapy爬虫项目流程"><span>3. 建立Scrapy爬虫项目流程</span></a></h2><h3 id="_3-1-创建项目" tabindex="-1"><a class="header-anchor" href="#_3-1-创建项目"><span>3.1 创建项目</span></a></h3><p>在开始爬取之前，首先要创建一个新的Scrapy项目。这里以爬取博客为例，进入你打算存储代码的目录中，运行下列命令:</p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>scrapy startproject scrapyspider</span></span></code></pre></div><p>该命令将会创建包含下列内容的scrapyspider目录:</p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>scrapyspider/</span></span>
<span class="line"><span>    scrapy.cfg</span></span>
<span class="line"><span>    scrapyspider/</span></span>
<span class="line"><span>        __init__.py</span></span>
<span class="line"><span>        items.py</span></span>
<span class="line"><span>        pipelines.py</span></span>
<span class="line"><span>        settings.py</span></span>
<span class="line"><span>        spiders/</span></span>
<span class="line"><span>            __init__.py</span></span>
<span class="line"><span>            ...</span></span></code></pre></div><p>这些文件分别是:</p><ul><li>scrapy.cfg: 项目的配置文件。</li><li>scrapyspider/: 该项目的python模块。之后您将在此加入代码。</li><li>scrapyspider/items.py: 项目中的item文件。</li><li>scrapyspider/pipelines.py: 项目中的pipelines文件。</li><li>scrapyspider/settings.py: 项目的设置文件。</li><li>scrapyspider/spiders/: 放置spider代码的目录。</li></ul><h3 id="_3-2-编写第一个爬虫-spider" tabindex="-1"><a class="header-anchor" href="#_3-2-编写第一个爬虫-spider"><span>3.2 编写第一个爬虫(Spider)</span></a></h3><blockquote><p>Spider是用户编写用于从单个网站(或者一些网站)爬取数据的类。</p><p>其包含了一个用于下载的初始URL，如何跟进网页中的链接以及如何分析页面中的内容， 提取生成 item 的方法。</p><p>为了创建一个Spider，您必须继承 scrapy.Spider 类， 且定义以下三个属性:</p><ul><li>name: 用于区别Spider。 该名字必须是唯一的，您不可以为不同的Spider设定相同的名字。</li><li>start_urls: 包含了Spider在启动时进行爬取的url列表。 因此，第一个被获取到的页面将是其中之一。 后续的URL则从初始的URL获取到的数据中提取。</li><li>parse() 是spider的一个方法。 被调用时，每个初始URL完成下载后生成的 Response 对象将会作为唯一的参数传递给该函数。 该方法负责解析返回的数据(response data)，提取数据(生成item)以及生成需要进一步处理的URL的 Request 对象。</li></ul></blockquote><p>以下为我们的第一个Spider代码，保存在scrapyspider/spiders目录下的blog_spider.py文件中:</p><div class="language-python" data-ext="python" data-title="python"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> scrapy.spiders </span><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> Spider</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> BlogSpider</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Spider</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    name </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;woodenrobot&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    start_urls </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;http://woodenrobot.me&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    def</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> parse</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;">self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">response</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        titles </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> response.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">xpath</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;//a[@class=&quot;post-title-link&quot;]/text()&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">extract</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        for</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> title </span><span style="color:#C678DD;--shiki-dark:#C678DD;">in</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> titles:</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">            print</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(title.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">strip</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">())</span></span></code></pre></div><h3 id="_3-3-启动爬虫" tabindex="-1"><a class="header-anchor" href="#_3-3-启动爬虫"><span>3.3 启动爬虫</span></a></h3><p>打开终端进入项目所在路径(即:scrapyspider路径下)运行下列命令：</p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>scrapy crawl woodenrobot</span></span></code></pre></div><p>启动爬虫后就可以看到打印出来当前页所有文章标题了。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/24669128" target="_blank" rel="noopener noreferrer">Scrapy爬虫框架教程（一）-- Scrapy入门</a></p>`,45)]))}const o=s(n,[["render",r],["__file","python-scrapy-started.html.vue"]]),d=JSON.parse('{"path":"/posts/Python/python-scrapy-started.html","title":"Scrapy入门","lang":"zh-CN","frontmatter":{"description":"Scrapy入门 1. 简介 Scrapy 是一个为了爬取网站数据，提取结构性数据而编写的应用框架。 1.1 与Requests+BeautifulSoup 的区别 Requests+BeautifulSoup 适合快速实现的小项目 scrapy 大的工程化项目 2. 架构概览 image-20210310164531835image-20210310...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Python/python-scrapy-started.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Scrapy入门"}],["meta",{"property":"og:description","content":"Scrapy入门 1. 简介 Scrapy 是一个为了爬取网站数据，提取结构性数据而编写的应用框架。 1.1 与Requests+BeautifulSoup 的区别 Requests+BeautifulSoup 适合快速实现的小项目 scrapy 大的工程化项目 2. 架构概览 image-20210310164531835image-20210310..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230955513.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Scrapy入门\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230955513.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 与Requests+BeautifulSoup 的区别","slug":"_1-1-与requests-beautifulsoup-的区别","link":"#_1-1-与requests-beautifulsoup-的区别","children":[]}]},{"level":2,"title":"2. 架构概览","slug":"_2-架构概览","link":"#_2-架构概览","children":[{"level":3,"title":"2.1 Scrapy Engine","slug":"_2-1-scrapy-engine","link":"#_2-1-scrapy-engine","children":[]},{"level":3,"title":"2.2 调度器（Scheduler）","slug":"_2-2-调度器-scheduler","link":"#_2-2-调度器-scheduler","children":[]},{"level":3,"title":"2.3 下载器（Downloader）","slug":"_2-3-下载器-downloader","link":"#_2-3-下载器-downloader","children":[]},{"level":3,"title":"2.4 Spiders","slug":"_2-4-spiders","link":"#_2-4-spiders","children":[]},{"level":3,"title":"2.5 Item Pipeline","slug":"_2-5-item-pipeline","link":"#_2-5-item-pipeline","children":[]},{"level":3,"title":"2.6 下载器中间件(Downloader middlewares)","slug":"_2-6-下载器中间件-downloader-middlewares","link":"#_2-6-下载器中间件-downloader-middlewares","children":[]},{"level":3,"title":"2.7 Spider中间件(Spider middlewares)","slug":"_2-7-spider中间件-spider-middlewares","link":"#_2-7-spider中间件-spider-middlewares","children":[]},{"level":3,"title":"2.8 数据流(Data flow)","slug":"_2-8-数据流-data-flow","link":"#_2-8-数据流-data-flow","children":[]}]},{"level":2,"title":"3. 建立Scrapy爬虫项目流程","slug":"_3-建立scrapy爬虫项目流程","link":"#_3-建立scrapy爬虫项目流程","children":[{"level":3,"title":"3.1 创建项目","slug":"_3-1-创建项目","link":"#_3-1-创建项目","children":[]},{"level":3,"title":"3.2 编写第一个爬虫(Spider)","slug":"_3-2-编写第一个爬虫-spider","link":"#_3-2-编写第一个爬虫-spider","children":[]},{"level":3,"title":"3.3 启动爬虫","slug":"_3-3-启动爬虫","link":"#_3-3-启动爬虫","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.69,"words":1408},"filePathRelative":"posts/Python/python-scrapy-started.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>Scrapy 是一个为了爬取网站数据，提取结构性数据而编写的应用框架。</p>\\n<h3>1.1 与Requests+BeautifulSoup 的区别</h3>\\n<ul>\\n<li>\\n<p>Requests+BeautifulSoup</p>\\n<p>适合快速实现的小项目</p>\\n</li>\\n<li>\\n<p>scrapy</p>\\n<p>大的工程化项目</p>\\n</li>\\n</ul>\\n<h2>2. 架构概览</h2>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230955513.png\\" alt=\\"image-20210310164531835\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20210310164531835</figcaption></figure>","autoDesc":true}');export{o as comp,d as data};
