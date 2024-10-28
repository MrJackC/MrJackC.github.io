import{_ as a,c as n,a as i,o as e}from"./app-BOcQBfH9.js";const l={};function r(p,s){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="scrapy入门-四-抓取ajax异步加载网页" tabindex="-1"><a class="header-anchor" href="#scrapy入门-四-抓取ajax异步加载网页"><span>Scrapy入门（四）-抓取AJAX异步加载网页</span></a></h1><h2 id="_1-什么是ajax" tabindex="-1"><a class="header-anchor" href="#_1-什么是ajax"><span>1. 什么是AJAX?</span></a></h2><blockquote><p>AJAX即“Asynchronous Javascript And XML”（异步JavaScript和XML），是指一种创建交互式网页应用的网页开发技术。</p><p>AJAX = 异步 JavaScript和XML（标准通用标记语言的子集）。</p><p>AJAX 是一种用于创建快速动态网页的技术。</p><p>通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。</p></blockquote><h2 id="_2-两个chrome插件" tabindex="-1"><a class="header-anchor" href="#_2-两个chrome插件"><span>2. 两个Chrome插件</span></a></h2><ul><li><p>Toggle JavaScript</p><p>这个插件可以帮助我们快速直观地检测网页里哪些信息是通过AJAX异步加载而来的</p><p>chrome商店下载地址：<a href="https://link.zhihu.com/?target=https%3A//chrome.google.com/webstore/detail/toggle-javascript/cidlcjdalomndpeagkjpnefhljffbnlo%3Futm_source%3Dchrome-app-launcher-info-dialog" target="_blank" rel="noopener noreferrer">https://chrome.google.com/webstore/detail/toggle-javascript/cidlcjdalomndpeagkjpnefhljffbnlo?utm_source=chrome-app-launcher-info-dialog</a></p></li><li><p>JSON-handle</p><p>这个插件可以帮我们格式化Json串,从而让我们以一个更友好的方式查看Json内的信息。 chrome商店下载地址：<a href="https://link.zhihu.com/?target=https%3A//chrome.google.com/webstore/detail/json-handle/iahnhfdhidomcpggpaimmmahffihkfnj" target="_blank" rel="noopener noreferrer">https://chrome.google.com/webstore/detail/json-handle/iahnhfdhidomcpggpaimmmahffihkfnj</a></p></li></ul><h2 id="_3-分析过程-分析页面是否采用ajax" tabindex="-1"><a class="header-anchor" href="#_3-分析过程-分析页面是否采用ajax"><span>3. 分析过程（分析页面是否采用AJAX）</span></a></h2><p>首先我们打<a href="https://link.zhihu.com/?target=https%3A//movie.douban.com/typerank%3Ftype_name%3D%E5%8A%A8%E4%BD%9C%26type%3D5%26interval_id%3D100%3A90%26action%3D" target="_blank" rel="noopener noreferrer">开豆瓣电影分类排行榜 - 动作片</a>栏目。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954446.png" alt="image-20210311151244551" tabindex="0" loading="lazy"><figcaption>image-20210311151244551</figcaption></figure><ul><li><p>方案1：</p><p>如果网络慢，会看到影片列表在别的页面显示后才慢慢展示出来，试着把界面往下滑会不断有新的电影信息更新出来。 遇到这种情况初步就可以认定这个页面是采用AJAX异步加载的</p></li><li><p>方案2：</p><p>右键查看网页源码来鉴别。比如说你右键查看源码ctrl+f搜索这个杀手不太冷这几个字，你会发现源码里没有。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954489.png" alt="image-20210311152003444" tabindex="0" loading="lazy"><figcaption>image-20210311152003444</figcaption></figure></li><li><p>方案3：</p><p>方案1和2，虽然能用，但是都不太方便，还记得上面推荐的那个chrome插件Toggle JavaScript吗？</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954514.png" alt="image-20210311152349107" tabindex="0" loading="lazy"><figcaption>image-20210311152349107</figcaption></figure><p>安好这个插件它就会出现在chrome浏览器的右边，试着轻轻点一下。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954534.png" alt="image-20210311152426689" tabindex="0" loading="lazy"><figcaption>image-20210311152426689</figcaption></figure><p>刚才的电影信息都不见了！还记得AJAX的介绍吗？AJAX = 异步 JavaScript和XML。当我们点击了插件就代表这个我们封禁了JavaScript,这个页面里的JavaScript代码无法执行，那么通过AJAX异步加载而来的信息当然就无法出现了。通过这种方法我们能快速精确地知道哪些信息是异步加载而来的。</p></li></ul><h2 id="_4-如何抓取ajax异步加载页面" tabindex="-1"><a class="header-anchor" href="#_4-如何抓取ajax异步加载页面"><span>4. 如何抓取AJAX异步加载页面</span></a></h2><p>对于这种网页我们一般会采用两种方法：</p><ol><li>通过抓包找到AJAX异步加载的请求地址；</li><li>通过使用PhantomJS等无头浏览器执行JS代码后再对网页进行抓取。</li></ol><p>通常情况下我会采用第一种方法，因为使用无头浏览器会大大降低抓取效率，而且第一种方法得到的数据格式往往以Json为主，非常干净。在这里我只讲解第一种方法，第二种方法作为爬虫的终极武器我会在后续的教程中进行讲解。<br> 回到我们需要抓取的页面，还记得我说过页面的一个细节吗，下拉更新。进入页面后我们按F12打开chrome浏览器的开发者工具选择Network，然后实现一次下拉更新。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954555.png" alt="image-20210311152726896" tabindex="0" loading="lazy"><figcaption>image-20210311152726896</figcaption></figure><p>你会在Network里发现一个Response为Json格式的请求，仔细看看Json里的内容你会明白这些都是网页上显示的电影信息。右键该请求地址选择Open Link in New Tab,如果你装了JSON-handle插件你会以下面这种更友好的方式查看这个Json串。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954581.png" alt="image-20210311152753926" tabindex="0" loading="lazy"><figcaption>image-20210311152753926</figcaption></figure><p>接着再让我们看一该请求的Header信息</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954602.png" alt="image-20210311152818193" tabindex="0" loading="lazy"><figcaption>image-20210311152818193</figcaption></figure><p>首先我们可以看出这是一个get请求，多看几个下拉请求的地址后你会发现地中的start=xxx在不断变化，每次增加20。所以我们只用更改这个参数就可以实现翻页不断获取新数据</p><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># -*- coding: utf-8 -*-</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># @Time     : 2017/4/9 14:32</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># @Author   : woodenrobot</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> re</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> json</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> scrapy </span><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> Request</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> scrapy.spiders </span><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> Spider</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> scrapyspider.items </span><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> DoubanMovieItem</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> DoubanAJAXSpider</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Spider</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    name </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;douban_ajax&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    headers </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">        &#39;User-Agent&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    def</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> start_requests</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;">self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        url </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;https://movie.douban.com/j/chart/top_list?type=5&amp;interval_id=100%3A90&amp;action=&amp;start=0&amp;limit=20&#39;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        yield</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Request</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(url, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">headers</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.headers)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    def</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> parse</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;">self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">response</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        datas </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> json.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">loads</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(response.body)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        item </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> DoubanMovieItem</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> datas:</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            for</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> data </span><span style="color:#C678DD;--shiki-dark:#C678DD;">in</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> datas:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                item[</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;ranking&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">] </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> data[</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;rank&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                item[</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;movie_name&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">] </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> data[</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;title&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                item[</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;score&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">] </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> data[</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;score&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                item[</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;score_num&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">] </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> data[</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;vote_count&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                yield</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> item</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            # 如果datas存在数据则对下一页进行采集</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            page_num </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> re.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">search</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">r</span><span style="color:#E06C75;--shiki-dark:#E06C75;">&#39;start=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">\\d</span><span style="color:#D19A66;--shiki-dark:#D19A66;">+)</span><span style="color:#E06C75;--shiki-dark:#E06C75;">&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, response.url).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">group</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            page_num </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;start=&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> str</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">int</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(page_num)</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#D19A66;--shiki-dark:#D19A66;">20</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            next_url </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> re.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sub</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">r</span><span style="color:#E06C75;--shiki-dark:#E06C75;">&#39;start=\\d</span><span style="color:#D19A66;--shiki-dark:#D19A66;">+</span><span style="color:#E06C75;--shiki-dark:#E06C75;">&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, page_num, response.url)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            yield</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Request</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(next_url, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">headers</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.headers)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Scrapy工程文件的spiders里写好爬虫文件后在settings.py所在的目录下打开终端运行以下代码就能输出相应的电影数据。</p><div class="language-python" data-ext="python" data-title="python"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">scrapy crawl douban_ajax </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">o douban_movie.csv</span></span></code></pre></div><h2 id="_5-更好的查看json" tabindex="-1"><a class="header-anchor" href="#_5-更好的查看json"><span>5. 更好的查看json</span></a></h2><ol><li><p>点击JSON-handle 查看</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954625.png" alt="image-20210311153418508" tabindex="0" loading="lazy"><figcaption>image-20210311153418508</figcaption></figure></li><li><p>将JSON文本复制进来，点击确定</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954648.png" alt="image-20210311153308124" tabindex="0" loading="lazy"><figcaption>image-20210311153308124</figcaption></figure></li><li><p>查看结果</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954673.png" alt="image-20210311153405800" tabindex="0" loading="lazy"><figcaption>image-20210311153405800</figcaption></figure></li></ol><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/26257790" target="_blank" rel="noopener noreferrer">Scrapy爬虫框架教程（四）-- 抓取AJAX异步加载网页</a></p>`,26)]))}const t=a(l,[["render",r],["__file","python-scrapy-ajax.html.vue"]]),c=JSON.parse('{"path":"/posts/Python/python-scrapy-ajax.html","title":"Scrapy入门（四）-抓取AJAX异步加载网页","lang":"zh-CN","frontmatter":{"description":"Scrapy入门（四）-抓取AJAX异步加载网页 1. 什么是AJAX? AJAX即“Asynchronous Javascript And XML”（异步JavaScript和XML），是指一种创建交互式网页应用的网页开发技术。 AJAX = 异步 JavaScript和XML（标准通用标记语言的子集）。 AJAX 是一种用于创建快速动态网页的技术。...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Python/python-scrapy-ajax.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Scrapy入门（四）-抓取AJAX异步加载网页"}],["meta",{"property":"og:description","content":"Scrapy入门（四）-抓取AJAX异步加载网页 1. 什么是AJAX? AJAX即“Asynchronous Javascript And XML”（异步JavaScript和XML），是指一种创建交互式网页应用的网页开发技术。 AJAX = 异步 JavaScript和XML（标准通用标记语言的子集）。 AJAX 是一种用于创建快速动态网页的技术。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954446.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Scrapy入门（四）-抓取AJAX异步加载网页\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954446.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954489.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954514.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954534.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954555.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954581.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954602.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954625.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954648.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230954673.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是AJAX?","slug":"_1-什么是ajax","link":"#_1-什么是ajax","children":[]},{"level":2,"title":"2. 两个Chrome插件","slug":"_2-两个chrome插件","link":"#_2-两个chrome插件","children":[]},{"level":2,"title":"3. 分析过程（分析页面是否采用AJAX）","slug":"_3-分析过程-分析页面是否采用ajax","link":"#_3-分析过程-分析页面是否采用ajax","children":[]},{"level":2,"title":"4. 如何抓取AJAX异步加载页面","slug":"_4-如何抓取ajax异步加载页面","link":"#_4-如何抓取ajax异步加载页面","children":[]},{"level":2,"title":"5. 更好的查看json","slug":"_5-更好的查看json","link":"#_5-更好的查看json","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.35,"words":1306},"filePathRelative":"posts/Python/python-scrapy-ajax.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 什么是AJAX?</h2>\\n<blockquote>\\n<p>AJAX即“Asynchronous Javascript And XML”（异步JavaScript和XML），是指一种创建交互式网页应用的网页开发技术。</p>\\n<p>AJAX = 异步 JavaScript和XML（标准通用标记语言的子集）。</p>\\n<p>AJAX 是一种用于创建快速动态网页的技术。</p>\\n<p>通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。</p>\\n</blockquote>\\n<h2>2. 两个Chrome插件</h2>","autoDesc":true}');export{t as comp,c as data};
