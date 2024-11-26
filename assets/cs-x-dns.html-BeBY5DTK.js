import{_ as a,c as i,a as n,o as s}from"./app-JRvFIbSa.js";const t={};function o(c,e){return s(),i("div",null,e[0]||(e[0]=[n(`<h1 id="dns域名解析" tabindex="-1"><a class="header-anchor" href="#dns域名解析"><span>DNS域名解析</span></a></h1><h2 id="_1-dns是什么" tabindex="-1"><a class="header-anchor" href="#_1-dns是什么"><span>1. DNS是什么？</span></a></h2><p>DNS（Domain Namo System，域名解析系统）的作用非常简单，就是根据<strong>域名查出ip地址</strong>（可以想象成一本巨大的电话本）</p><p>例如：你要访问<code>www.baidu.com</code> 那么首先要通过DNS查出他的ip地址是14.215.177.38</p><h2 id="_2-查询过程" tabindex="-1"><a class="header-anchor" href="#_2-查询过程"><span>2. 查询过程</span></a></h2><p>虽然只需要返回一个IP地址，但是DNS的查询过程非常复杂，分成多个步骤</p><p>dig命令可以显示整个查询过程,在终端输入</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>dig www.baidu.com</span></span></code></pre></div><p>会输出以下内容</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006890.png" alt="image-20190824211111182" tabindex="0" loading="lazy"><figcaption>image-20190824211111182</figcaption></figure><ul><li>第一段是查询参数和统计</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006931.png" alt="image-20190824211248412" tabindex="0" loading="lazy"><figcaption>image-20190824211248412</figcaption></figure><ul><li>第二段是查询内容</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006956.png" alt="image-20190824211311373" tabindex="0" loading="lazy"><figcaption>image-20190824211311373</figcaption></figure><p>上面的结果表示，查询域名<code>www.baidu.com</code> 的A记录，A是address的缩写</p><ul><li><p>第三段是DNS服务器的答复</p><p><code>www.baidu.com</code>被cname到了<code>www.a.shifen.com</code></p></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006976.png" alt="image-20190824211459211" tabindex="0" loading="lazy"><figcaption>image-20190824211459211</figcaption></figure><p>上面的结果显示，<code>www.baidu.com</code> 有三个A记录，既三个ip地址。600是TTL值（Time to live的缩写），表示缓存时间，既600秒之内不用重新查询</p><ul><li>第四段显示<code>www.a.shifen.com</code> 的NS记录（Name Service），既哪些服务器负责管路<code>www.a.shifen.com</code> 的DNS记录</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006004.png" alt="image-20190824211915750" tabindex="0" loading="lazy"><figcaption>image-20190824211915750</figcaption></figure><p>上面的结果显示a.shifen.com共有五条NS记录，既五域名服务器，<a href="http://xn--a-zn6aofy6ax4g1yeqg671mjd4ae9ssm1a5elc7b.shifen.com" target="_blank" rel="noopener noreferrer">向其中任一台查询都能知道a.shifen.com</a> 的ip地址是什么</p><ul><li>第五段是上面5个域名服务器的ip地址，这是随着前一段一起返回的</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006025.png" alt="image-20190824212924233" tabindex="0" loading="lazy"><figcaption>image-20190824212924233</figcaption></figure><ul><li>第六段是dns服务器的一些传输信息</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006056.png" alt="image-20190824213456662" tabindex="0" loading="lazy"><figcaption>image-20190824213456662</figcaption></figure><p>上面的结果显示，本机的DNS服务器是218.168.1.253，查询端口是53（dns服务器的默认端口），以及回应长度是260字节</p><h3 id="_2-1-简化-short" tabindex="-1"><a class="header-anchor" href="#_2-1-简化-short"><span>2.1 简化+short</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006085.png" alt="image-20190824213808554" tabindex="0" loading="lazy"><figcaption>image-20190824213808554</figcaption></figure><p>上面命令值返回<code>www.baidu.com</code> 对应的3个ip地址</p><h2 id="_3-dns-的记录类型" tabindex="-1"><a class="header-anchor" href="#_3-dns-的记录类型"><span>3.DNS 的记录类型</span></a></h2><p>域名和IP之间的对应关系，称为“记录”（record），根据使用场景，记录可以分成不同类型（type）</p><p>常见的DNS记录类型如下</p><ul><li>A：地址记录（Address），返回的域名指向ip地址</li><li>NS:域名服务器记录（Name Service），返回保存下一级域名信息的服务器地址。该记录只能设置为域名，不能设置为IP地址</li><li>MX:邮件记录（Mail eXchange），返回接收电子邮件的服务器地址</li><li>CNAME:规范名称记录（Canonical Name）,返回另一个域名，既当前查询的域名是另一个域名的调整。（例如百度）</li><li>PTR:逆向查询记录（Pointer Record），只用于从IP地址查询域名</li></ul><h3 id="_3-1-cname" tabindex="-1"><a class="header-anchor" href="#_3-1-cname"><span>3.1 CNAME</span></a></h3><p>CNAME 记录主要用于域名的内部跳转，为服务器配置提供灵活性，用户感知不到。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>dig www.baidu.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; &lt;&lt;&gt;&gt; DiG 9.8.3-P1 &lt;&lt;&gt;&gt; www.baidu.com</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>;; ANSWER SECTION:</span></span>
<span class="line"><span>www.baidu.com.		600	IN	CNAME	www.a.shifen.com.</span></span>
<span class="line"><span>www.a.shifen.com.	600	IN	A	14.215.177.39</span></span>
<span class="line"><span>www.a.shifen.com.	600	IN	A	14.215.177.38</span></span></code></pre></div><p>上面的结果显示，<code>www.baidu.com</code> 的cname 记录指向的是<code>www.a.shifen.com</code>.也就是说用户查询<code>www.baidu.com</code> 的时候，实际上返回的是<code>www.a.shifen.com</code> 的ip地址。</p><p><strong>好处</strong></p><p>变更服务器ip地址的时候，只要修改<code>www.a.shifen.com</code> 这个域名就可以了，用户的<code>www.baidu.com</code>域名不用修改</p><h2 id="_4-其他dns-工具" tabindex="-1"><a class="header-anchor" href="#_4-其他dns-工具"><span>4.其他DNS 工具</span></a></h2><h3 id="_4-1-host命令" tabindex="-1"><a class="header-anchor" href="#_4-1-host命令"><span>4.1 host命令</span></a></h3><p>host命令可以看作dig命令的简化版本，返回当前请求域名的各种记录</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006110.png" alt="image-20190824220258126" tabindex="0" loading="lazy"><figcaption>image-20190824220258126</figcaption></figure><h3 id="_4-2-nslookup命令" tabindex="-1"><a class="header-anchor" href="#_4-2-nslookup命令"><span>4.2 nslookup命令</span></a></h3><p>nslookup命令用于互动式的查询域名记录</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006128.png" alt="image-20190824220446036" tabindex="0" loading="lazy"><figcaption>image-20190824220446036</figcaption></figure><p>也可以直接过滤出cname</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006150.png" alt="image-20190824221338613" tabindex="0" loading="lazy"><figcaption>image-20190824221338613</figcaption></figure><h3 id="_4-3-whois-命令" tabindex="-1"><a class="header-anchor" href="#_4-3-whois-命令"><span>4.3 whois 命令</span></a></h3><p>whois 命令用来查看域名的注册情况</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">whois</span><span style="color:#98C379;--shiki-dark:#98C379;"> github.com</span></span></code></pre></div><h3 id="关于上文出现的218-85-152-99是我本机设置的dns地址" tabindex="-1"><a class="header-anchor" href="#关于上文出现的218-85-152-99是我本机设置的dns地址"><span>关于上文出现的218.85.152.99是我本机设置的dns地址</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006174.png" alt="image-20190824220945022" tabindex="0" loading="lazy"><figcaption>image-20190824220945022</figcaption></figure><h2 id="参考博客" tabindex="-1"><a class="header-anchor" href="#参考博客"><span>参考博客</span></a></h2><p><a href="http://www.ruanyifeng.com/blog/2016/06/dns.html" target="_blank" rel="noopener noreferrer">DNS 原理入门</a></p>`,55)]))}const p=a(t,[["render",o],["__file","cs-x-dns.html.vue"]]),l=JSON.parse('{"path":"/posts/Development-Tools/CS/cs-x-dns.html","title":"DNS域名解析","lang":"zh-CN","frontmatter":{"aliases":"DNS域名解析","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:50","updated":"2024-05-30 16:29","description":"DNS域名解析 1. DNS是什么？ DNS（Domain Namo System，域名解析系统）的作用非常简单，就是根据域名查出ip地址（可以想象成一本巨大的电话本） 例如：你要访问www.baidu.com 那么首先要通过DNS查出他的ip地址是14.215.177.38 2. 查询过程 虽然只需要返回一个IP地址，但是DNS的查询过程非常复杂，分...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Development-Tools/CS/cs-x-dns.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"DNS域名解析"}],["meta",{"property":"og:description","content":"DNS域名解析 1. DNS是什么？ DNS（Domain Namo System，域名解析系统）的作用非常简单，就是根据域名查出ip地址（可以想象成一本巨大的电话本） 例如：你要访问www.baidu.com 那么首先要通过DNS查出他的ip地址是14.215.177.38 2. 查询过程 虽然只需要返回一个IP地址，但是DNS的查询过程非常复杂，分..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006890.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DNS域名解析\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006890.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006931.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006956.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006976.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006004.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006025.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006056.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006085.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006110.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006128.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006150.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231006174.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. DNS是什么？","slug":"_1-dns是什么","link":"#_1-dns是什么","children":[]},{"level":2,"title":"2. 查询过程","slug":"_2-查询过程","link":"#_2-查询过程","children":[{"level":3,"title":"2.1 简化+short","slug":"_2-1-简化-short","link":"#_2-1-简化-short","children":[]}]},{"level":2,"title":"3.DNS 的记录类型","slug":"_3-dns-的记录类型","link":"#_3-dns-的记录类型","children":[{"level":3,"title":"3.1 CNAME","slug":"_3-1-cname","link":"#_3-1-cname","children":[]}]},{"level":2,"title":"4.其他DNS 工具","slug":"_4-其他dns-工具","link":"#_4-其他dns-工具","children":[{"level":3,"title":"4.1 host命令","slug":"_4-1-host命令","link":"#_4-1-host命令","children":[]},{"level":3,"title":"4.2 nslookup命令","slug":"_4-2-nslookup命令","link":"#_4-2-nslookup命令","children":[]},{"level":3,"title":"4.3 whois 命令","slug":"_4-3-whois-命令","link":"#_4-3-whois-命令","children":[]},{"level":3,"title":"关于上文出现的218.85.152.99是我本机设置的dns地址","slug":"关于上文出现的218-85-152-99是我本机设置的dns地址","link":"#关于上文出现的218-85-152-99是我本机设置的dns地址","children":[]}]},{"level":2,"title":"参考博客","slug":"参考博客","link":"#参考博客","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.08,"words":924},"filePathRelative":"posts/Development-Tools/CS/cs-x-dns.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. DNS是什么？</h2>\\n<p>DNS（Domain Namo System，域名解析系统）的作用非常简单，就是根据<strong>域名查出ip地址</strong>（可以想象成一本巨大的电话本）</p>\\n<p>例如：你要访问<code>www.baidu.com</code> 那么首先要通过DNS查出他的ip地址是14.215.177.38</p>\\n<h2>2. 查询过程</h2>\\n<p>虽然只需要返回一个IP地址，但是DNS的查询过程非常复杂，分成多个步骤</p>\\n<p>dig命令可以显示整个查询过程,在终端输入</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>dig www.baidu.com</span></span></code></pre>\\n</div>","autoDesc":true}');export{p as comp,l as data};
