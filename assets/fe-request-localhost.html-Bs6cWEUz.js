import{_ as t,c as a,a as r,o as s}from"./app-fWubcX7c.js";const o={};function n(i,e){return s(),a("div",null,e[0]||(e[0]=[r('<h1 id="前端问题-无法访问本地接口" tabindex="-1"><a class="header-anchor" href="#前端问题-无法访问本地接口"><span>前端问题 - 无法访问本地接口</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>我们项目有个功能需要调用内网服务（或客户机的本地服务)接口，比如前端在 12.12.11.0 服务器上，但是要访问内网的服务（或本地服务127.0.0.1），浏览器会报跨域</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>The request client is not a secure context and the resource is in more-private address space private.</span></span></code></pre></div><h2 id="_2-问题原因" tabindex="-1"><a class="header-anchor" href="#_2-问题原因"><span>2. 问题原因</span></a></h2><p>新版的chrome浏览器会校验发起端的域名和访问资源的域名直接的关系，如果客户端发起域名比访问资源所在的域名更public（开放），会导致The request client is not a secure context and the resource is in more-private address …错误产生。</p><ul><li>报错内容<br><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230921220.png" alt="image-20230322194106860" loading="lazy"></li><li>错误原因<br><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230921270.png" alt="image-20230322194117956" loading="lazy"></li></ul><h2 id="_3-解决办法" tabindex="-1"><a class="header-anchor" href="#_3-解决办法"><span>3. 解决办法</span></a></h2><p>在浏览器地址栏输入</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">chrome://flags/#block-insecure-private-network-requests</span></span></code></pre></div><p>按照下图将Block insecure private network requests.项的Default改为Disabled即可。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230921295.png" alt="image-20230322194210401" tabindex="0" loading="lazy"><figcaption>image-20230322194210401</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.bmabk.com/index.php/post/100111.html" target="_blank" rel="noopener noreferrer">The request client is not a secure context and the resource is in more-private address …</a></p>',14)]))}const l=t(o,[["render",n],["__file","fe-request-localhost.html.vue"]]),p=JSON.parse('{"path":"/posts/Web/frontend-problem/fe-request-localhost.html","title":"前端问题 - 无法访问本地接口","lang":"zh-CN","frontmatter":{"dir":{"order":110},"category":["前端"],"description":"前端问题 - 无法访问本地接口 1. 背景 我们项目有个功能需要调用内网服务（或客户机的本地服务)接口，比如前端在 12.12.11.0 服务器上，但是要访问内网的服务（或本地服务127.0.0.1），浏览器会报跨域 2. 问题原因 新版的chrome浏览器会校验发起端的域名和访问资源的域名直接的关系，如果客户端发起域名比访问资源所在的域名更publi...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-problem/fe-request-localhost.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"前端问题 - 无法访问本地接口"}],["meta",{"property":"og:description","content":"前端问题 - 无法访问本地接口 1. 背景 我们项目有个功能需要调用内网服务（或客户机的本地服务)接口，比如前端在 12.12.11.0 服务器上，但是要访问内网的服务（或本地服务127.0.0.1），浏览器会报跨域 2. 问题原因 新版的chrome浏览器会校验发起端的域名和访问资源的域名直接的关系，如果客户端发起域名比访问资源所在的域名更publi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230921220.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前端问题 - 无法访问本地接口\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230921220.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230921270.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230921295.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 问题原因","slug":"_2-问题原因","link":"#_2-问题原因","children":[]},{"level":2,"title":"3. 解决办法","slug":"_3-解决办法","link":"#_3-解决办法","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.87,"words":261},"filePathRelative":"posts/Web/frontend-problem/fe-request-localhost.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>我们项目有个功能需要调用内网服务（或客户机的本地服务)接口，比如前端在 12.12.11.0 服务器上，但是要访问内网的服务（或本地服务127.0.0.1），浏览器会报跨域</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>The request client is not a secure context and the resource is in more-private address space private.</span></span></code></pre>\\n</div>","autoDesc":true}');export{l as comp,p as data};
