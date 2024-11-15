import{_ as t,c as a,a as n,o as s}from"./app-fWubcX7c.js";const r={};function i(p,e){return s(),a("div",null,e[0]||(e[0]=[n('<h1 id="redis缓存预热" tabindex="-1"><a class="header-anchor" href="#redis缓存预热"><span>Redis缓存预热</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>缓存预热就是系统上线后，<strong>将相关的缓存数据直接加载到缓存系统</strong></p><p>这样可以避免在用户请求的时候，先查询数据库，然后再将数据缓存的问题！用户直接查询事先被预热的缓存数据！</p><h2 id="_2-解决方案" tabindex="-1"><a class="header-anchor" href="#_2-解决方案"><span>2.解决方案</span></a></h2><h3 id="_2-1-缓存刷新页面" tabindex="-1"><a class="header-anchor" href="#_2-1-缓存刷新页面"><span>2.1 缓存刷新页面</span></a></h3><p>直接写个缓存刷新页面，上线时手工操作</p><h3 id="_2-2-项目启动自动加载" tabindex="-1"><a class="header-anchor" href="#_2-2-项目启动自动加载"><span>2.2 项目启动自动加载</span></a></h3><p>数据量不大，可以在项目启动的时候自动进行加载</p><p>目的就是在系统上线前，将数据加载到缓存中。</p>',10)]))}const c=t(r,[["render",i],["__file","redis-x-questuin-cache-warm-up.html.vue"]]),l=JSON.parse('{"path":"/posts/Redis/redis-x-questuin-cache-warm-up.html","title":"Redis缓存预热","lang":"zh-CN","frontmatter":{"aliases":"Redis缓存预热","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:24","description":"Redis缓存预热 1. 简介 缓存预热就是系统上线后，将相关的缓存数据直接加载到缓存系统 这样可以避免在用户请求的时候，先查询数据库，然后再将数据缓存的问题！用户直接查询事先被预热的缓存数据！ 2.解决方案 2.1 缓存刷新页面 直接写个缓存刷新页面，上线时手工操作 2.2 项目启动自动加载 数据量不大，可以在项目启动的时候自动进行加载 目的就是在系...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Redis/redis-x-questuin-cache-warm-up.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis缓存预热"}],["meta",{"property":"og:description","content":"Redis缓存预热 1. 简介 缓存预热就是系统上线后，将相关的缓存数据直接加载到缓存系统 这样可以避免在用户请求的时候，先查询数据库，然后再将数据缓存的问题！用户直接查询事先被预热的缓存数据！ 2.解决方案 2.1 缓存刷新页面 直接写个缓存刷新页面，上线时手工操作 2.2 项目启动自动加载 数据量不大，可以在项目启动的时候自动进行加载 目的就是在系..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis缓存预热\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2.解决方案","slug":"_2-解决方案","link":"#_2-解决方案","children":[{"level":3,"title":"2.1 缓存刷新页面","slug":"_2-1-缓存刷新页面","link":"#_2-1-缓存刷新页面","children":[]},{"level":3,"title":"2.2 项目启动自动加载","slug":"_2-2-项目启动自动加载","link":"#_2-2-项目启动自动加载","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.61,"words":182},"filePathRelative":"posts/Redis/redis-x-questuin-cache-warm-up.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>缓存预热就是系统上线后，<strong>将相关的缓存数据直接加载到缓存系统</strong></p>\\n<p>这样可以避免在用户请求的时候，先查询数据库，然后再将数据缓存的问题！用户直接查询事先被预热的缓存数据！</p>\\n<h2>2.解决方案</h2>\\n<h3>2.1 缓存刷新页面</h3>\\n<p>直接写个缓存刷新页面，上线时手工操作</p>\\n<h3>2.2 项目启动自动加载</h3>\\n<p>数据量不大，可以在项目启动的时候自动进行加载</p>\\n<p>目的就是在系统上线前，将数据加载到缓存中。</p>\\n","autoDesc":true}');export{c as comp,l as data};
