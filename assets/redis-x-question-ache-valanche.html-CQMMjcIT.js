import{_ as t,c as a,a as i,o as s}from"./app-CpAF2rca.js";const r={};function n(o,e){return s(),a("div",null,e[0]||(e[0]=[i('<h1 id="redis缓存雪崩" tabindex="-1"><a class="header-anchor" href="#redis缓存雪崩"><span>Redis缓存雪崩</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>缓存同一时间大面积的失效，所以，后面的请求都会落到数据库上，造成<strong>数据库短时间内承受大量请求而崩掉</strong></p><h2 id="_2-解决办法" tabindex="-1"><a class="header-anchor" href="#_2-解决办法"><span>2. 解决办法</span></a></h2><ul><li>事前：尽量保证整个 redis 集群的高可用性，发现机器宕机尽快补上。选择合适的内存淘汰策略</li><li>事中：本地chcache缓存 + hystrix限流&amp;降级，避免Mysql崩掉</li><li>事后：利用 redis 持久化机制保存的数据尽快恢复缓存</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131024185.png" alt="image-20191008225446152" tabindex="0" loading="lazy"><figcaption>image-20191008225446152</figcaption></figure>',6)]))}const l=t(r,[["render",n],["__file","redis-x-question-ache-valanche.html.vue"]]),d=JSON.parse('{"path":"/posts/Redis/redis-x-question-ache-valanche.html","title":"Redis缓存雪崩","lang":"zh-CN","frontmatter":{"aliases":"Redis缓存雪崩","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:24","description":"Redis缓存雪崩 1. 简介 缓存同一时间大面积的失效，所以，后面的请求都会落到数据库上，造成数据库短时间内承受大量请求而崩掉 2. 解决办法 事前：尽量保证整个 redis 集群的高可用性，发现机器宕机尽快补上。选择合适的内存淘汰策略 事中：本地chcache缓存 + hystrix限流&降级，避免Mysql崩掉 事后：利用 redis 持久化机制...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Redis/redis-x-question-ache-valanche.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis缓存雪崩"}],["meta",{"property":"og:description","content":"Redis缓存雪崩 1. 简介 缓存同一时间大面积的失效，所以，后面的请求都会落到数据库上，造成数据库短时间内承受大量请求而崩掉 2. 解决办法 事前：尽量保证整个 redis 集群的高可用性，发现机器宕机尽快补上。选择合适的内存淘汰策略 事中：本地chcache缓存 + hystrix限流&降级，避免Mysql崩掉 事后：利用 redis 持久化机制..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131024185.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis缓存雪崩\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131024185.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 解决办法","slug":"_2-解决办法","link":"#_2-解决办法","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.53,"words":158},"filePathRelative":"posts/Redis/redis-x-question-ache-valanche.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>缓存同一时间大面积的失效，所以，后面的请求都会落到数据库上，造成<strong>数据库短时间内承受大量请求而崩掉</strong></p>\\n<h2>2. 解决办法</h2>\\n<ul>\\n<li>事前：尽量保证整个 redis 集群的高可用性，发现机器宕机尽快补上。选择合适的内存淘汰策略</li>\\n<li>事中：本地chcache缓存 + hystrix限流&amp;降级，避免Mysql崩掉</li>\\n<li>事后：利用 redis 持久化机制保存的数据尽快恢复缓存</li>\\n</ul>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131024185.png\\" alt=\\"image-20191008225446152\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20191008225446152</figcaption></figure>","autoDesc":true}');export{l as comp,d as data};
