import{_ as t,c as i,a,o as n}from"./app-fWubcX7c.js";const l={};function o(r,e){return n(),i("div",null,e[0]||(e[0]=[a('<h1 id="cas单点登录-登录流程" tabindex="-1"><a class="header-anchor" href="#cas单点登录-登录流程"><span>CAS单点登录 - 登录流程</span></a></h1><h2 id="_1-相关术语" tabindex="-1"><a class="header-anchor" href="#_1-相关术语"><span>1. 相关术语</span></a></h2><blockquote><p>此处将不介绍验签相关的术语，约等于CAS1</p></blockquote><ul><li>CAS (Central Authentication Service) - 中央认证服务器</li><li>SSO (Single Sign On) - 单点登录</li><li>CAS Client - 集成CAS登录流程的应用服务</li><li>TGT (Ticket Granting Ticket) - 存在 CAS 服务端的用户票据，可使用此票据颁发ST</li><li>TGC (Ticket Granting Cookie)- 存在浏览器的 Cookie，对应 CAS 服务端的 TGT</li><li>ST (Service Ticket) - 服务票据，CAS为每个登录成功的应用服务生成唯一票据，对应应用服务的服务名（serverName）</li></ul><h2 id="_2-cas单点登录流程" tabindex="-1"><a class="header-anchor" href="#_2-cas单点登录流程"><span>2. CAS单点登录流程</span></a></h2><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231220929.png" alt="image-20230215215146399" tabindex="0" loading="lazy"><figcaption>image-20230215215146399</figcaption></figure><p><strong>单点登录流程：</strong></p><blockquote><p>1~5步 为首次访问服务A的单点登录流程，6~9步为访问A服务单点登录成功后再访问服务B的单点流程</p></blockquote><ol><li>用户通过浏览器请求服务A资源</li><li>服务A校验发现此请求未认证，<strong>重定向浏览器到CAS服务端登录地址</strong></li><li>用户通过浏览器输入用户名密码，发起登录请求</li><li>CAS服务端校验用户名密码通过，响应头会<strong>将TGC写入浏览器CAS域名的Cookie中</strong>，重定向浏览器到 <code>服务A地址 + 服务A的ST</code></li><li><strong>服务A向CAS服务端发起校验ST请求</strong>，验证通过后服务A重定向请求到服务A未携带ST的地址，业务响应返回结果</li><li>用户通过浏览器请求服务B的资源</li><li>服务B发现此请求未认证，重定向浏览器到CAS服务端登录地址，<strong>由于CAS地址的Cookie有TGC</strong>，重定向时会被携带传递给CAS服务端</li><li>CAS服务端校验TGC发现有对应的TGT，颁发ST给服务B，重定向浏览器到 <code>服务B + 服务B的ST</code></li><li>服务B向CAS服务端发起校验ST请求，验证通过后服务B重定向请求到服务B未携带ST的地址，业务响应返回结果</li></ol><h2 id="_3-总结" tabindex="-1"><a class="header-anchor" href="#_3-总结"><span>3. 总结</span></a></h2><blockquote><ul><li>TGT (Ticket Granting Ticket) - 存在 CAS 服务端的用户票据，可使用此票据颁发ST</li><li>TGC (Ticket Granting Cookie)- 存在浏览器的 Cookie，对应 CAS 服务端的 TGT</li><li>ST (Service Ticket) - 服务票据，CAS为每个登录成功的应用服务生成唯一票据，对应应用服务的服务名（serverName）</li></ul></blockquote><ol><li>用户登录成功会创建TGT，由TGT颁发ST。</li><li>用户浏览器端会保存TGC，它对应一个TGT</li><li>浏览器端存在未过期的TGC，访问CAS服务端时携带TGC，CAS使用TGT颁发ST，实现单点登录</li></ol><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.cnblogs.com/hellxz/p/15766277.html" target="_blank" rel="noopener noreferrer">CAS学习笔记二：CAS单点登录流程</a></p>',14)]))}const s=t(l,[["render",o],["__file","cas-x-process.html.vue"]]),S=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/cas/cas-x-process.html","title":"CAS单点登录 - 登录流程","lang":"zh-CN","frontmatter":{"aliases":"CAS单点登录 - 登录流程","tags":null,"cssclass":null,"source":null,"order":20,"category":["CAS"],"created":"2024-02-22 10:50","updated":"2024-04-23 12:20","description":"CAS单点登录 - 登录流程 1. 相关术语 此处将不介绍验签相关的术语，约等于CAS1 CAS (Central Authentication Service) - 中央认证服务器 SSO (Single Sign On) - 单点登录 CAS Client - 集成CAS登录流程的应用服务 TGT (Ticket Granting Ticket) ...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/cas/cas-x-process.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"CAS单点登录 - 登录流程"}],["meta",{"property":"og:description","content":"CAS单点登录 - 登录流程 1. 相关术语 此处将不介绍验签相关的术语，约等于CAS1 CAS (Central Authentication Service) - 中央认证服务器 SSO (Single Sign On) - 单点登录 CAS Client - 集成CAS登录流程的应用服务 TGT (Ticket Granting Ticket) ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231220929.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CAS单点登录 - 登录流程\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231220929.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 相关术语","slug":"_1-相关术语","link":"#_1-相关术语","children":[]},{"level":2,"title":"2. CAS单点登录流程","slug":"_2-cas单点登录流程","link":"#_2-cas单点登录流程","children":[]},{"level":2,"title":"3. 总结","slug":"_3-总结","link":"#_3-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.4,"words":719},"filePathRelative":"posts/Java/Java第三方依赖/cas/cas-x-process.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 相关术语</h2>\\n<blockquote>\\n<p>此处将不介绍验签相关的术语，约等于CAS1</p>\\n</blockquote>\\n<ul>\\n<li>CAS (Central Authentication Service) - 中央认证服务器</li>\\n<li>SSO (Single Sign On) - 单点登录</li>\\n<li>CAS Client - 集成CAS登录流程的应用服务</li>\\n<li>TGT (Ticket Granting Ticket) - 存在 CAS 服务端的用户票据，可使用此票据颁发ST</li>\\n<li>TGC (Ticket Granting Cookie)- 存在浏览器的 Cookie，对应 CAS 服务端的 TGT</li>\\n<li>ST (Service Ticket) - 服务票据，CAS为每个登录成功的应用服务生成唯一票据，对应应用服务的服务名（serverName）</li>\\n</ul>","autoDesc":true}');export{s as comp,S as data};
