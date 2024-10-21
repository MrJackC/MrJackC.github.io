import{_ as a,c as n,a as i,o as l}from"./app-BhoNqsD-.js";const e={};function r(o,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="前后端分离项目跨域解决" tabindex="-1"><a class="header-anchor" href="#前后端分离项目跨域解决"><span>前后端分离项目跨域解决</span></a></h1><h2 id="_1-什么是跨域" tabindex="-1"><a class="header-anchor" href="#_1-什么是跨域"><span>1. 什么是跨域</span></a></h2><blockquote><p><strong>跨域</strong>是指 不同域名之间相互访问。即浏览器控制当前网页下不能执行其他网站的脚本，这是由浏览器的同源策略造成的，是浏览器对JavaScript施加的安全限制。</p></blockquote><p>也就是如果在A网站中，我们希望使用Ajax来获得B网站中的特定内容<br> 如果A网站与B网站不在同一个域中，那么就出现了跨域访问问题。</p><p><strong>跨域的安全限制都是对浏览器端来说的，服务器端是不存在跨域安全限制的。</strong></p><h2 id="_2-同源策略" tabindex="-1"><a class="header-anchor" href="#_2-同源策略"><span>2. 同源策略</span></a></h2><p>同源策略/SOP（Same origin policy）是一种约定，由Netscape公司1995年引入浏览器，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSFR等攻击。所谓同源是指&quot;协议+域名+端口&quot;三者相同，即便两个不同的域名指向同一个ip地址，也非同源。<br> 前端发起的请求只要不符合同源策略就会出现跨域问题。</p><p><strong>案例分析</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230912971.png" alt="image-20211017111604402" tabindex="0" loading="lazy"><figcaption>image-20211017111604402</figcaption></figure><h2 id="_3-为什么前后端分离后会导致跨域问题" tabindex="-1"><a class="header-anchor" href="#_3-为什么前后端分离后会导致跨域问题"><span>3. 为什么前后端分离后会导致跨域问题？</span></a></h2><p>前后端分离后，前端代码和后端代码都是独立部署的，一般前端采用Nginx作为web服务器部署，后端spring boot由于内置了tomcat，一般都是通过jar包直接启动。</p><ul><li>假设前后端部署在同一台服务器上，那么2者访问的端口必定不一致，不符合同源策略，所以出现跨域问题。</li><li>如果前后端部署在不同服务器上，那么访问的ip或者域名必然不一致，也会出现跨域问题。</li></ul><h2 id="_4-解决" tabindex="-1"><a class="header-anchor" href="#_4-解决"><span>4. 解决</span></a></h2><h3 id="_4-1-利用nginx解决跨域" tabindex="-1"><a class="header-anchor" href="#_4-1-利用nginx解决跨域"><span>4.1 利用Nginx解决跨域</span></a></h3><p>通过反向代理服务器监听同端口，同域名的访问，不同路径映射到不同的地址，比如，在nginx服务器中，监听同一个域名和端口，不同路径转发到客户端和服务器，把不同端口和域名的限制通过反向代理，来解决跨域的问题。</p><p>通过Nginx反向代理，将跨域请求转变为非跨域请求，不同请求路径代理到不同的地址：</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    server</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        listen </span><span style="color:#D19A66;--shiki-dark:#D19A66;">         80</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        server_name </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    www.mysite.com;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        location</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> / {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            #allow all;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            root </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  /mysite/my-web/;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            index </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> index.html index.htm;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            try_files </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">$</span><span style="color:#E06C75;--shiki-dark:#E06C75;">uri</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> $</span><span style="color:#E06C75;--shiki-dark:#E06C75;">uri</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/ /index.html;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        location</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> /prod-api/ {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            #allow all;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            rewrite</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  ^/prod-api/(.*)$</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> /$</span><span style="color:#E06C75;--shiki-dark:#E06C75;">1</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> break</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            proxy_pass </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">http://localhost:9602;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-服务端不设置跨域" tabindex="-1"><a class="header-anchor" href="#_4-2-服务端不设置跨域"><span>4.2 服务端不设置跨域</span></a></h3><p>违法了跨域原则，不安全。但是非常好用，快速解决</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> org.springframework.context.annotation.Bean</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> org.springframework.context.annotation.Configuration</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> org.springframework.web.cors.CorsConfiguration</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> org.springframework.web.cors.UrlBasedCorsConfigurationSource</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> org.springframework.web.filter.CorsFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> java.util.Arrays</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Configuration</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> CorsConfig</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Bean</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> CorsFilter</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> corsFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        final</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> UrlBasedCorsConfigurationSource</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> source</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> UrlBasedCorsConfigurationSource</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        final</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> CorsConfiguration</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> config</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> CorsConfiguration</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setAllowCredentials</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                // SpringBoot 2.4.0后 此方法已失效</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//        config.setAllowedOrigins(Arrays.asList(&quot;*&quot;)); //http:www.a.com</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 新版本的springboot 采用此方法</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setAllowedOriginPatterns</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Arrays</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">asList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;*&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setAllowedHeaders</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Arrays</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">asList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;*&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setAllowedMethods</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Arrays</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">asList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;*&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setMaxAge</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">300L</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        source</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">registerCorsConfiguration</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;/**&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, config);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> CorsFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(source);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/w1014074794/article/details/106226429" target="_blank" rel="noopener noreferrer">Spring boot前后端分离后，跨域问题怎么解决？</a></p>`,22)]))}const t=a(e,[["render",r],["__file","fe-lib-cross-domain.html.vue"]]),B=JSON.parse('{"path":"/posts/Web/frontend-lib/fe-lib-cross-domain.html","title":"前后端分离项目跨域解决","lang":"zh-CN","frontmatter":{"description":"前后端分离项目跨域解决 1. 什么是跨域 跨域是指 不同域名之间相互访问。即浏览器控制当前网页下不能执行其他网站的脚本，这是由浏览器的同源策略造成的，是浏览器对JavaScript施加的安全限制。 也就是如果在A网站中，我们希望使用Ajax来获得B网站中的特定内容 如果A网站与B网站不在同一个域中，那么就出现了跨域访问问题。 跨域的安全限制都是对浏览器...","head":[["meta",{"property":"og:url","content":"https://mrjason.me/posts/Web/frontend-lib/fe-lib-cross-domain.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"前后端分离项目跨域解决"}],["meta",{"property":"og:description","content":"前后端分离项目跨域解决 1. 什么是跨域 跨域是指 不同域名之间相互访问。即浏览器控制当前网页下不能执行其他网站的脚本，这是由浏览器的同源策略造成的，是浏览器对JavaScript施加的安全限制。 也就是如果在A网站中，我们希望使用Ajax来获得B网站中的特定内容 如果A网站与B网站不在同一个域中，那么就出现了跨域访问问题。 跨域的安全限制都是对浏览器..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230912971.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前后端分离项目跨域解决\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230912971.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjason.me\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是跨域","slug":"_1-什么是跨域","link":"#_1-什么是跨域","children":[]},{"level":2,"title":"2. 同源策略","slug":"_2-同源策略","link":"#_2-同源策略","children":[]},{"level":2,"title":"3. 为什么前后端分离后会导致跨域问题？","slug":"_3-为什么前后端分离后会导致跨域问题","link":"#_3-为什么前后端分离后会导致跨域问题","children":[]},{"level":2,"title":"4. 解决","slug":"_4-解决","link":"#_4-解决","children":[{"level":3,"title":"4.1 利用Nginx解决跨域","slug":"_4-1-利用nginx解决跨域","link":"#_4-1-利用nginx解决跨域","children":[]},{"level":3,"title":"4.2 服务端不设置跨域","slug":"_4-2-服务端不设置跨域","link":"#_4-2-服务端不设置跨域","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.53,"words":758},"filePathRelative":"posts/Web/frontend-lib/fe-lib-cross-domain.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 什么是跨域</h2>\\n<blockquote>\\n<p><strong>跨域</strong>是指 不同域名之间相互访问。即浏览器控制当前网页下不能执行其他网站的脚本，这是由浏览器的同源策略造成的，是浏览器对JavaScript施加的安全限制。</p>\\n</blockquote>\\n<p>也就是如果在A网站中，我们希望使用Ajax来获得B网站中的特定内容<br>\\n如果A网站与B网站不在同一个域中，那么就出现了跨域访问问题。</p>\\n<p><strong>跨域的安全限制都是对浏览器端来说的，服务器端是不存在跨域安全限制的。</strong></p>\\n<h2>2. 同源策略</h2>\\n","autoDesc":true}');export{t as comp,B as data};
