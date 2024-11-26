import{_ as a,c as e,a as i,o as r}from"./app-JRvFIbSa.js";const t={};function n(o,s){return r(),e("div",null,s[0]||(s[0]=[i(`<h1 id="批量生成redis测试数据方法" tabindex="-1"><a class="header-anchor" href="#批量生成redis测试数据方法"><span>批量生成redis测试数据方法</span></a></h1><h2 id="_1-linux-bash下面执行" tabindex="-1"><a class="header-anchor" href="#_1-linux-bash下面执行"><span>1. Linux Bash下面执行</span></a></h2><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">for</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">((</span><span style="color:#E06C75;--shiki-dark:#E06C75;">i</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">i</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">20000000</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">i</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">++</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)); </span><span style="color:#C678DD;--shiki-dark:#C678DD;">do</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> echo</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;set k</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$i</span><span style="color:#98C379;--shiki-dark:#98C379;"> v</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$i</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &gt;&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">/tmp/redisTest.txt</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ;</span><span style="color:#C678DD;--shiki-dark:#C678DD;">done</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>生成2千万条redis批量设置kv的语句(key=kn,value=vn)写入到/tmp目录下的redisTest.txt文件中</p><h2 id="_2-用vim去掉行尾的-m符号-使用方式如下" tabindex="-1"><a class="header-anchor" href="#_2-用vim去掉行尾的-m符号-使用方式如下"><span>2.用vim去掉行尾的^M符号，使用方式如下：</span></a></h2><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>vim /tmp/redisTest.txt</span></span>
<span class="line"><span>:set fileformat=dos #设置文件的格式，通过这句话去掉每行结尾的^M符号</span></span>
<span class="line"><span>:wq #保存退出</span></span></code></pre></div><h2 id="_3-通过redis提供的管道–pipe形式-去跑redis-传入文件的指令批量灌数据" tabindex="-1"><a class="header-anchor" href="#_3-通过redis提供的管道–pipe形式-去跑redis-传入文件的指令批量灌数据"><span>3.通过redis提供的管道–pipe形式，去跑redis，传入文件的指令批量灌数据</span></a></h2><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>cat /tmp/redisTest.txt | 路径/redis-5.0.0/src/redis-cli -h 主机ip -p 端口号 --pipe</span></span></code></pre></div><p>我本机的地址</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>cat /tmp/redisTest.txt | /usr/local/redis/bin/redis-cli -h localhost -p 6379  --pipe</span></span></code></pre></div><p>大概需要花10分钟左右</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131027605.png" alt="image-20210410103828296" tabindex="0" loading="lazy"><figcaption>image-20210410103828296</figcaption></figure>`,12)]))}const l=a(t,[["render",n],["__file","redis-y-action-gen-test-data.html.vue"]]),d=JSON.parse('{"path":"/posts/Redis/redis-y-action-gen-test-data.html","title":"批量生成redis测试数据方法","lang":"zh-CN","frontmatter":{"aliases":"批量生成redis测试数据方法","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:27","description":"批量生成redis测试数据方法 1. Linux Bash下面执行 生成2千万条redis批量设置kv的语句(key=kn,value=vn)写入到/tmp目录下的redisTest.txt文件中 2.用vim去掉行尾的^M符号，使用方式如下： 3.通过redis提供的管道–pipe形式，去跑redis，传入文件的指令批量灌数据 我本机的地址 大概需要...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Redis/redis-y-action-gen-test-data.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"批量生成redis测试数据方法"}],["meta",{"property":"og:description","content":"批量生成redis测试数据方法 1. Linux Bash下面执行 生成2千万条redis批量设置kv的语句(key=kn,value=vn)写入到/tmp目录下的redisTest.txt文件中 2.用vim去掉行尾的^M符号，使用方式如下： 3.通过redis提供的管道–pipe形式，去跑redis，传入文件的指令批量灌数据 我本机的地址 大概需要..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131027605.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"批量生成redis测试数据方法\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131027605.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. Linux Bash下面执行","slug":"_1-linux-bash下面执行","link":"#_1-linux-bash下面执行","children":[]},{"level":2,"title":"2.用vim去掉行尾的^M符号，使用方式如下：","slug":"_2-用vim去掉行尾的-m符号-使用方式如下","link":"#_2-用vim去掉行尾的-m符号-使用方式如下","children":[]},{"level":2,"title":"3.通过redis提供的管道–pipe形式，去跑redis，传入文件的指令批量灌数据","slug":"_3-通过redis提供的管道–pipe形式-去跑redis-传入文件的指令批量灌数据","link":"#_3-通过redis提供的管道–pipe形式-去跑redis-传入文件的指令批量灌数据","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.71,"words":213},"filePathRelative":"posts/Redis/redis-y-action-gen-test-data.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. Linux Bash下面执行</h2>\\n<div class=\\"language-shell\\" data-ext=\\"shell\\" data-title=\\"shell\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">for</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">((</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">i</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">1</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">i</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&lt;=</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">20000000</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">i</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">++</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)); </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">do</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> echo</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"set k</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">$i</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> v</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">$i</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> &gt;&gt; </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">/tmp/redisTest.txt</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> ;</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">done</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span></code></pre>\\n</div>","autoDesc":true}');export{l as comp,d as data};