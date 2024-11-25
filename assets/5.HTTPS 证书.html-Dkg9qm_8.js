import{_ as t,c as n,a as r,o}from"./app-BfIe-EZg.js";const a={};function i(p,e){return o(),n("div",null,e[0]||(e[0]=[r('<h1 id="https-证书" tabindex="-1"><a class="header-anchor" href="#https-证书"><span>HTTPS 证书</span></a></h1><p>本小节，讲解如何在 Nginx 配置 SSL 证书，实现前端和后端使用 HTTPS 安全访问的功能。</p><p>考虑到各大云服务厂商的文档写的比较齐全，这里更多做汇总与整理。</p><p>😜 如果想要免费的 SSL 证书，请申请 DV 单域名证书。如果要配置多个域名，可以申请多个 DV 单域名证书。</p><p>友情提示：HTTPS 的学习资料？</p><ul><li><a href="http://www.iocoder.cn/Fight/How-HTTPS-works/?yudao" target="_blank" rel="noopener noreferrer">《HTTPS 的工作原理》(opens new window)</a></li><li><a href="http://www.iocoder.cn/Fight/Interviewer-You-do-not-understand-how-HTTPS-works-and-you-are-telling-me-about-the-man-in-the-middle-attack/?yudao" target="_blank" rel="noopener noreferrer">《面试官：你连 HTTPS 原理没搞懂，还给我讲“中间人攻击”？》(opens new window)</a></li></ul><h2 id="_1-阿里云-ssl【最常用】" tabindex="-1"><a class="header-anchor" href="#_1-阿里云-ssl【最常用】"><span><a href="https://doc.iocoder.cn/https/#_1-%E9%98%BF%E9%87%8C%E4%BA%91-ssl%E3%80%90%E6%9C%80%E5%B8%B8%E7%94%A8%E3%80%91" target="_blank" rel="noopener noreferrer">#</a>1. 阿里云 SSL【最常用】</span></a></h2><p><a href="https://www.aliyun.com/product/cas" target="_blank" rel="noopener noreferrer">阿里云 SSL 证书(opens new window)</a></p><ul><li>第一步，<a href="https://help.aliyun.com/document_detail/205510.html" target="_blank" rel="noopener noreferrer">免费证书申购流程(opens new window)</a></li><li>第二步，<a href="https://help.aliyun.com/document_detail/98728.html" target="_blank" rel="noopener noreferrer">在 Nginx 或 Tengine 服务器上安装证书(opens new window)</a></li></ul>',9)]))}const s=t(a,[["render",i],["__file","5.HTTPS 证书.html.vue"]]),d=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/10.%E8%BF%90%E7%BB%B4%E6%89%8B%E5%86%8C/5.HTTPS%20%E8%AF%81%E4%B9%A6.html","title":"HTTPS 证书","lang":"zh-CN","frontmatter":{"description":"HTTPS 证书 本小节，讲解如何在 Nginx 配置 SSL 证书，实现前端和后端使用 HTTPS 安全访问的功能。 考虑到各大云服务厂商的文档写的比较齐全，这里更多做汇总与整理。 😜 如果想要免费的 SSL 证书，请申请 DV 单域名证书。如果要配置多个域名，可以申请多个 DV 单域名证书。 友情提示：HTTPS 的学习资料？ 《HTTPS 的工...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/10.%E8%BF%90%E7%BB%B4%E6%89%8B%E5%86%8C/5.HTTPS%20%E8%AF%81%E4%B9%A6.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"HTTPS 证书"}],["meta",{"property":"og:description","content":"HTTPS 证书 本小节，讲解如何在 Nginx 配置 SSL 证书，实现前端和后端使用 HTTPS 安全访问的功能。 考虑到各大云服务厂商的文档写的比较齐全，这里更多做汇总与整理。 😜 如果想要免费的 SSL 证书，请申请 DV 单域名证书。如果要配置多个域名，可以申请多个 DV 单域名证书。 友情提示：HTTPS 的学习资料？ 《HTTPS 的工..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-24T05:58:00.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-24T05:58:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTPS 证书\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-24T05:58:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#1. 阿里云 SSL【最常用】","slug":"_1-阿里云-ssl【最常用】","link":"#_1-阿里云-ssl【最常用】","children":[]}],"git":{"createdTime":1732174913000,"updatedTime":1732427880000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.79,"words":237},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/10.运维手册/5.HTTPS 证书.md","localizedDate":"2024年11月21日","excerpt":"\\n<p>本小节，讲解如何在 Nginx 配置 SSL 证书，实现前端和后端使用 HTTPS 安全访问的功能。</p>\\n<p>考虑到各大云服务厂商的文档写的比较齐全，这里更多做汇总与整理。</p>\\n<p>😜 如果想要免费的 SSL 证书，请申请 DV 单域名证书。如果要配置多个域名，可以申请多个 DV 单域名证书。</p>\\n<p>友情提示：HTTPS 的学习资料？</p>\\n<ul>\\n<li><a href=\\"http://www.iocoder.cn/Fight/How-HTTPS-works/?yudao\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">《HTTPS 的工作原理》(opens new window)</a></li>\\n<li><a href=\\"http://www.iocoder.cn/Fight/Interviewer-You-do-not-understand-how-HTTPS-works-and-you-are-telling-me-about-the-man-in-the-middle-attack/?yudao\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">《面试官：你连 HTTPS 原理没搞懂，还给我讲“中间人攻击”？》(opens new window)</a></li>\\n</ul>","autoDesc":true}');export{s as comp,d as data};
