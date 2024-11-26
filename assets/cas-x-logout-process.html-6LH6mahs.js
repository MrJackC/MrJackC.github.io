import{_ as a,c as t,a as r,o as n}from"./app-JRvFIbSa.js";const s={};function o(i,e){return n(),t("div",null,e[0]||(e[0]=[r('<h1 id="cas单点登录-登出" tabindex="-1"><a class="header-anchor" href="#cas单点登录-登出"><span>CAS单点登录 - 登出</span></a></h1><p>CAS 的登出包含两种情况，一种是CAS客户端登出，另一种是CAS单点登出，使用流程图说明这两者的不同。（一图胜千言）</p><h2 id="_1-cas客户端登出流程" tabindex="-1"><a class="header-anchor" href="#_1-cas客户端登出流程"><span>1. CAS客户端登出流程</span></a></h2><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219563.png" alt="image-20230215224130109" tabindex="0" loading="lazy"><figcaption>image-20230215224130109</figcaption></figure><p>如图，客户端的登出仅仅是<strong>过期当前用户与客户端之间的会话</strong>，并未过期用户浏览器与CAS服务端建立的会话（没有处理TGC），此时如果用户再访问客户端的接口，无需输入账号密码立即登录成功。</p><h2 id="_2-全局单点登出流程" tabindex="-1"><a class="header-anchor" href="#_2-全局单点登出流程"><span>2. 全局单点登出流程</span></a></h2><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219613.png" alt="image-20230215224210538" tabindex="0" loading="lazy"><figcaption>image-20230215224210538</figcaption></figure><p>如图，用户访问CAS服务端单点登出接口（由客户端提供），CAS服务端根据请求携带的TGC，不仅过期了服务内TGT与ST，还向该TGC对应的客户端服务发起登出请求，客户端过期对应用户的会话，CAS服务端响应用户浏览器过期TGC以及重定向到指定页面(单点登出的重定向页面必须是 <code>serviceName</code> 开始的地址)</p><h2 id="_3-总结" tabindex="-1"><a class="header-anchor" href="#_3-总结"><span>3. 总结</span></a></h2><p>CAS登出有两种情况：客户端登出（过期自己）及单点登出（过期自己以及所有相关客户端）。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.cnblogs.com/hellxz/p/15819781.html" target="_blank" rel="noopener noreferrer">CAS学习笔记四：CAS单点登出流程</a></p>',12)]))}const p=a(s,[["render",o],["__file","cas-x-logout-process.html.vue"]]),l=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/cas/cas-x-logout-process.html","title":"CAS单点登录 - 登出","lang":"zh-CN","frontmatter":{"aliases":"CAS单点登录 - 登出","tags":null,"cssclass":null,"source":null,"order":40,"category":["CAS"],"created":"2024-02-22 10:50","updated":"2024-04-23 12:19","description":"CAS单点登录 - 登出 CAS 的登出包含两种情况，一种是CAS客户端登出，另一种是CAS单点登出，使用流程图说明这两者的不同。（一图胜千言） 1. CAS客户端登出流程 image-20230215224130109image-20230215224130109 如图，客户端的登出仅仅是过期当前用户与客户端之间的会话，并未过期用户浏览器与CAS服务...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/cas/cas-x-logout-process.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"CAS单点登录 - 登出"}],["meta",{"property":"og:description","content":"CAS单点登录 - 登出 CAS 的登出包含两种情况，一种是CAS客户端登出，另一种是CAS单点登出，使用流程图说明这两者的不同。（一图胜千言） 1. CAS客户端登出流程 image-20230215224130109image-20230215224130109 如图，客户端的登出仅仅是过期当前用户与客户端之间的会话，并未过期用户浏览器与CAS服务..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219563.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CAS单点登录 - 登出\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219563.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219613.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. CAS客户端登出流程","slug":"_1-cas客户端登出流程","link":"#_1-cas客户端登出流程","children":[]},{"level":2,"title":"2. 全局单点登出流程","slug":"_2-全局单点登出流程","link":"#_2-全局单点登出流程","children":[]},{"level":2,"title":"3. 总结","slug":"_3-总结","link":"#_3-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.2,"words":360},"filePathRelative":"posts/Java/Java第三方依赖/cas/cas-x-logout-process.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>CAS 的登出包含两种情况，一种是CAS客户端登出，另一种是CAS单点登出，使用流程图说明这两者的不同。（一图胜千言）</p>\\n<h2>1. CAS客户端登出流程</h2>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219563.png\\" alt=\\"image-20230215224130109\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20230215224130109</figcaption></figure>\\n","autoDesc":true}');export{p as comp,l as data};
