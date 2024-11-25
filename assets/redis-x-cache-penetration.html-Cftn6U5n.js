import{_ as t,c as a,a as r,o as s}from"./app-BfIe-EZg.js";const i={};function n(d,e){return s(),a("div",null,e[0]||(e[0]=[r('<h1 id="redis缓存穿透" tabindex="-1"><a class="header-anchor" href="#redis缓存穿透"><span>Redis缓存穿透</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>一般是黑客故意去请求缓存中不存在的数据，导致所有的请求都落到数据库上，造成数据库短时间内承受大量请求而崩掉</p><blockquote><p>我们redis中的数据都是从数据库中放进来的，他之所以会穿透是因为在redis里面没有查到，在数据库里也没有查到。</p><p>这样数据库就不能吧这条数据放到redis里，redis就拿不到那条数据。你每次要来那条数据的时候，都要去查数据库，然后数据库还没有一个反馈，这样就是一个恶性循环。导致了缓存穿透</p><p>如果大量的访问或者恶意的攻击，你直接去查你那条没有的数据。他会给你的数据库造成很大压力。也就是说他跳过了redis缓存。我们使用redis 就是为了减少数据库压力，但是现在redis 就没有起到相应的作用。这样就给数据库造成了很大压力</p></blockquote><h2 id="_2-解决办法" tabindex="-1"><a class="header-anchor" href="#_2-解决办法"><span>2. 解决办法</span></a></h2><h3 id="方案1-布隆过滤器" tabindex="-1"><a class="header-anchor" href="#方案1-布隆过滤器"><span>方案1：布隆过滤器</span></a></h3><p>将所有可能存在的数据哈希到一个足够大的bitmap中，一个一定不存在的数据会被 这个bitmap拦截掉。从而避免了对底层存储系统的查询压力</p><h3 id="方案2-返回数据为空也缓存" tabindex="-1"><a class="header-anchor" href="#方案2-返回数据为空也缓存"><span>方案2：返回数据为空也缓存</span></a></h3><p>如果一个查询返回的数据为空（不管是数据不存在，还是系统故障），我们仍然把这个空结果进行缓存，但它的过期时间会很短，最长不超过5分钟</p><h3 id="方案3" tabindex="-1"><a class="header-anchor" href="#方案3"><span>方案3：</span></a></h3><p>如果数据库没有，我们可以把他的key存上，给他返回null。然后把这个null 存在redis里面</p><h3 id="方案4" tabindex="-1"><a class="header-anchor" href="#方案4"><span>方案4：</span></a></h3><p>如果一个ip频繁的访问你数据库里面没有的那个字段，那么我就认定这是一条恶性攻击行为。我会锁定ip</p>',13)]))}const l=t(i,[["render",n],["__file","redis-x-cache-penetration.html.vue"]]),o=JSON.parse('{"path":"/posts/Redis/redis-x-cache-penetration.html","title":"Redis缓存穿透","lang":"zh-CN","frontmatter":{"aliases":"Redis缓存穿透","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:24","description":"Redis缓存穿透 1. 简介 一般是黑客故意去请求缓存中不存在的数据，导致所有的请求都落到数据库上，造成数据库短时间内承受大量请求而崩掉 我们redis中的数据都是从数据库中放进来的，他之所以会穿透是因为在redis里面没有查到，在数据库里也没有查到。 这样数据库就不能吧这条数据放到redis里，redis就拿不到那条数据。你每次要来那条数据的时候，...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Redis/redis-x-cache-penetration.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis缓存穿透"}],["meta",{"property":"og:description","content":"Redis缓存穿透 1. 简介 一般是黑客故意去请求缓存中不存在的数据，导致所有的请求都落到数据库上，造成数据库短时间内承受大量请求而崩掉 我们redis中的数据都是从数据库中放进来的，他之所以会穿透是因为在redis里面没有查到，在数据库里也没有查到。 这样数据库就不能吧这条数据放到redis里，redis就拿不到那条数据。你每次要来那条数据的时候，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis缓存穿透\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 解决办法","slug":"_2-解决办法","link":"#_2-解决办法","children":[{"level":3,"title":"方案1：布隆过滤器","slug":"方案1-布隆过滤器","link":"#方案1-布隆过滤器","children":[]},{"level":3,"title":"方案2：返回数据为空也缓存","slug":"方案2-返回数据为空也缓存","link":"#方案2-返回数据为空也缓存","children":[]},{"level":3,"title":"方案3：","slug":"方案3","link":"#方案3","children":[]},{"level":3,"title":"方案4：","slug":"方案4","link":"#方案4","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.73,"words":520},"filePathRelative":"posts/Redis/redis-x-cache-penetration.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>一般是黑客故意去请求缓存中不存在的数据，导致所有的请求都落到数据库上，造成数据库短时间内承受大量请求而崩掉</p>\\n<blockquote>\\n<p>我们redis中的数据都是从数据库中放进来的，他之所以会穿透是因为在redis里面没有查到，在数据库里也没有查到。</p>\\n<p>这样数据库就不能吧这条数据放到redis里，redis就拿不到那条数据。你每次要来那条数据的时候，都要去查数据库，然后数据库还没有一个反馈，这样就是一个恶性循环。导致了缓存穿透</p>\\n<p>如果大量的访问或者恶意的攻击，你直接去查你那条没有的数据。他会给你的数据库造成很大压力。也就是说他跳过了redis缓存。我们使用redis 就是为了减少数据库压力，但是现在redis 就没有起到相应的作用。这样就给数据库造成了很大压力</p>\\n</blockquote>","autoDesc":true}');export{l as comp,o as data};
