import{_ as a,c as n,a as s,o as p}from"./app-fWubcX7c.js";const t={};function r(o,e){return p(),n("div",null,e[0]||(e[0]=[s(`<h1 id="支持websocket" tabindex="-1"><a class="header-anchor" href="#支持websocket"><span>支持websocket</span></a></h1><p>需要加上</p><p>proxy_set_header Upgrade $http_upgrade;<br> proxy_set_header Connection &quot;upgrade&quot;;</p><p>例如：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span> server {</span></span>
<span class="line"><span>        listen       80;</span></span>
<span class="line"><span>        server_name  gd.isture.com;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            proxy_pass http://120.79.200.111:9705/;</span></span>
<span class="line"><span>            proxy_read_timeout 300;</span></span>
<span class="line"><span>            proxy_connect_timeout 300;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>             proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>             proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div>`,5)]))}const c=a(t,[["render",r],["__file","nginx-x-websocket.html.vue"]]),l=JSON.parse('{"path":"/posts/MiddleWare/Nginx/nginx-x-websocket.html","title":"支持websocket","lang":"zh-CN","frontmatter":{"description":"支持websocket 需要加上 proxy_set_header Upgrade $http_upgrade; proxy_set_header Connection \\"upgrade\\"; 例如：","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/MiddleWare/Nginx/nginx-x-websocket.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"支持websocket"}],["meta",{"property":"og:description","content":"支持websocket 需要加上 proxy_set_header Upgrade $http_upgrade; proxy_set_header Connection \\"upgrade\\"; 例如："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"支持websocket\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.12,"words":36},"filePathRelative":"posts/MiddleWare/Nginx/nginx-x-websocket.md","localizedDate":"2024年10月28日","excerpt":"\\n<p>需要加上</p>\\n<p>proxy_set_header Upgrade $http_upgrade;<br>\\nproxy_set_header Connection \\"upgrade\\";</p>\\n<p>例如：</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span> server {</span></span>\\n<span class=\\"line\\"><span>        listen       80;</span></span>\\n<span class=\\"line\\"><span>        server_name  gd.isture.com;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>        location / {</span></span>\\n<span class=\\"line\\"><span>            proxy_pass http://120.79.200.111:9705/;</span></span>\\n<span class=\\"line\\"><span>            proxy_read_timeout 300;</span></span>\\n<span class=\\"line\\"><span>            proxy_connect_timeout 300;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>             proxy_set_header Upgrade $http_upgrade;</span></span>\\n<span class=\\"line\\"><span>             proxy_set_header Connection \\"upgrade\\";</span></span>\\n<span class=\\"line\\"><span>        }</span></span>\\n<span class=\\"line\\"><span>    }</span></span></code></pre>\\n</div>","autoDesc":true}');export{c as comp,l as data};
