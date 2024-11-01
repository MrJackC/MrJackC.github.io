import{_ as a,c as n,a as i,o as l}from"./app-DP7tPpgD.js";const e={};function o(t,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="python爬取12306城市编码转换" tabindex="-1"><a class="header-anchor" href="#python爬取12306城市编码转换"><span>python爬取12306城市编码转换</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>在做项目的时候，遇到铁路城市编码问题。其中：BJP为北京站编码；TJP为天津站编码。</p><p>我们在信息查询-&gt;正晚点-&gt;可以看到station_name.js返回了城市编码信息</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131415320.png" alt="image-20210202094628947" tabindex="0" loading="lazy"><figcaption>image-20210202094628947</figcaption></figure><p><strong>请求地址</strong>：<a href="https://kyfw.12306.cn/otn/resources/js/framework/station_name.js" target="_blank" rel="noopener noreferrer">https://kyfw.12306.cn/otn/resources/js/framework/station_name.js</a></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131415361.png" alt="image-20210202095058660" tabindex="0" loading="lazy"><figcaption>image-20210202095058660</figcaption></figure><h2 id="_2-爬虫" tabindex="-1"><a class="header-anchor" href="#_2-爬虫"><span>2. 爬虫</span></a></h2><p>爬虫目的： 从如上链接获取城市对应的三字码</p><ol><li>获取链接内容</li><li>去掉前20个无用字符</li><li>以|分隔，每5个是一组城市</li><li>取每组第二三个，返回dict</li></ol><p>代码如下：</p><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 由于火车站使用三字码，所以我们需要先获取站点对应的三字码</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">code_data </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> requests.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">get</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;https://kyfw.12306.cn/otn/resources/js/framework/station_name.js&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">print</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(code_data.text)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 处理获得的字符串，返回字典类型</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">def</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> zip_dic</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">code_data</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 去除前20个字符</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    code_data </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> code_data[</span><span style="color:#D19A66;--shiki-dark:#D19A66;">20</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # print(code_data)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 以竖线划分字符，每5个是一组城市信息，每组第二三个是城市编码和城市名称</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    list_code </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> code_data.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">split</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;|&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">    print</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(list_code)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    a</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    b</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    t1</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    t2</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[]</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    while</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (a </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">len</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(list_code))):</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        t1.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">append</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(list_code[a])</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        t2.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">append</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(list_code[b])</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        a </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> a</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#D19A66;--shiki-dark:#D19A66;">5</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        b </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> b</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#D19A66;--shiki-dark:#D19A66;">5</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    dic </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> dict</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">zip</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(t1,t2))</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dic</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">code_dic </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> zip_dic</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(code_data.text)</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">print</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(code_dic)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-附录" tabindex="-1"><a class="header-anchor" href="#_3-附录"><span>3. 附录</span></a></h2><p>城市编码和城市转换json文件</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">	&quot;北京北&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;VAP&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">	&quot;北京东&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;BOP&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">	&quot;北京&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;BJP&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">	&quot;北京南&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;VNP&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">	&quot;北京西&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;BXP&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">	&quot;广州南&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;IZQ&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">	&quot;重庆北&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;CUW&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">	&quot;重庆&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;CQW&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">	&quot;重庆南&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;CRW&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">	&quot;重庆西&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;CXW&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">	&quot;广州东&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;GGQ&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	....</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>链接：<a href="https://pan.baidu.com/s/1QYZnGQP7BadfvccHZq6ASA" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1QYZnGQP7BadfvccHZq6ASA</a><br> 提取码：v8cf<br> 复制这段内容后打开百度网盘手机App，操作更方便哦</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/kcyxws/article/details/105823767" target="_blank" rel="noopener noreferrer">python爬虫：获取12306网站火车站对应三字码</a></p>`,18)]))}const r=a(e,[["render",o],["__file","python-12306-coty-code.html.vue"]]),B=JSON.parse('{"path":"/posts/Python/python-12306-coty-code.html","title":"python爬取12306城市编码转换","lang":"zh-CN","frontmatter":{"created":"2024-05-13 20:48","updated":"2024-10-13 14:15","description":"python爬取12306城市编码转换 1. 背景 在做项目的时候，遇到铁路城市编码问题。其中：BJP为北京站编码；TJP为天津站编码。 我们在信息查询->正晚点->可以看到station_name.js返回了城市编码信息 image-20210202094628947image-20210202094628947 请求地址：https://kyfw....","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Python/python-12306-coty-code.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"python爬取12306城市编码转换"}],["meta",{"property":"og:description","content":"python爬取12306城市编码转换 1. 背景 在做项目的时候，遇到铁路城市编码问题。其中：BJP为北京站编码；TJP为天津站编码。 我们在信息查询->正晚点->可以看到station_name.js返回了城市编码信息 image-20210202094628947image-20210202094628947 请求地址：https://kyfw...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131415320.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"python爬取12306城市编码转换\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131415320.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131415361.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 爬虫","slug":"_2-爬虫","link":"#_2-爬虫","children":[]},{"level":2,"title":"3. 附录","slug":"_3-附录","link":"#_3-附录","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.36,"words":409},"filePathRelative":"posts/Python/python-12306-coty-code.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>在做项目的时候，遇到铁路城市编码问题。其中：BJP为北京站编码；TJP为天津站编码。</p>\\n<p>我们在信息查询-&gt;正晚点-&gt;可以看到station_name.js返回了城市编码信息</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131415320.png\\" alt=\\"image-20210202094628947\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20210202094628947</figcaption></figure>","autoDesc":true}');export{r as comp,B as data};
