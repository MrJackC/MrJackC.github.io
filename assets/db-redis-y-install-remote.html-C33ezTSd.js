import{_ as a,c as i,a as s,o as r}from"./app-4x2aIoqi.js";const t={};function d(o,e){return r(),i("div",null,e[0]||(e[0]=[s('<h1 id="开启远程访问" tabindex="-1"><a class="header-anchor" href="#开启远程访问"><span>开启远程访问</span></a></h1><h3 id="_1-1-注释-bind-127-0-0-1" tabindex="-1"><a class="header-anchor" href="#_1-1-注释-bind-127-0-0-1"><span>1.1 注释 bind 127.0.0.1</span></a></h3><p><strong>注释掉bind 127.0.0.1可以使所有的ip访问redis</strong></p><p>若是想指定多个ip访问，但并不是全部的ip访问，可以bind</p><p>vim /usr/local/redis/bin/redis.conf</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>#bind 127.0.0.1</span></span></code></pre></div><h3 id="_1-2-protected-mode-改为no" tabindex="-1"><a class="header-anchor" href="#_1-2-protected-mode-改为no"><span>1.2 protected-mode 改为no</span></a></h3><p>在redis3.2之后，redis增加了protected-mode，在这个模式下，即使注释掉了bind 127.0.0.1，再访问redisd时候还是报错，</p><p>将protected-mode 改成no</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>protected-mode no</span></span></code></pre></div><h3 id="_1-3-设置远程连接密码" tabindex="-1"><a class="header-anchor" href="#_1-3-设置远程连接密码"><span>1.3 设置远程连接密码</span></a></h3><p>如果不设置远程连接密码，那么不用密码就能登录，非常危险，很可能会被挖矿等程序入侵</p><p>找到requirepass 去掉注释，改成你要的密码</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># requirepass foobared</span></span></code></pre></div><h3 id="_1-4-重启redis" tabindex="-1"><a class="header-anchor" href="#_1-4-重启redis"><span>1.4 重启redis</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>./redis-server redis.conf</span></span></code></pre></div>',16)]))}const p=a(t,[["render",d],["__file","db-redis-y-install-remote.html.vue"]]),c=JSON.parse('{"path":"/posts/Redis/db-redis-y-install-remote.html","title":"开启远程访问","lang":"zh-CN","frontmatter":{"aliases":"开启远程访问","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:24","description":"开启远程访问 1.1 注释 bind 127.0.0.1 注释掉bind 127.0.0.1可以使所有的ip访问redis 若是想指定多个ip访问，但并不是全部的ip访问，可以bind vim /usr/local/redis/bin/redis.conf 1.2 protected-mode 改为no 在redis3.2之后，redis增加了prot...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Redis/db-redis-y-install-remote.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"开启远程访问"}],["meta",{"property":"og:description","content":"开启远程访问 1.1 注释 bind 127.0.0.1 注释掉bind 127.0.0.1可以使所有的ip访问redis 若是想指定多个ip访问，但并不是全部的ip访问，可以bind vim /usr/local/redis/bin/redis.conf 1.2 protected-mode 改为no 在redis3.2之后，redis增加了prot..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"开启远程访问\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":3,"title":"1.1 注释 bind 127.0.0.1","slug":"_1-1-注释-bind-127-0-0-1","link":"#_1-1-注释-bind-127-0-0-1","children":[]},{"level":3,"title":"1.2 protected-mode 改为no","slug":"_1-2-protected-mode-改为no","link":"#_1-2-protected-mode-改为no","children":[]},{"level":3,"title":"1.3 设置远程连接密码","slug":"_1-3-设置远程连接密码","link":"#_1-3-设置远程连接密码","children":[]},{"level":3,"title":"1.4 重启redis","slug":"_1-4-重启redis","link":"#_1-4-重启redis","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.64,"words":193},"filePathRelative":"posts/Redis/db-redis-y-install-remote.md","localizedDate":"2024年10月21日","excerpt":"\\n<h3>1.1 注释 bind 127.0.0.1</h3>\\n<p><strong>注释掉bind 127.0.0.1可以使所有的ip访问redis</strong></p>\\n<p>若是想指定多个ip访问，但并不是全部的ip访问，可以bind</p>\\n<p>vim /usr/local/redis/bin/redis.conf</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>#bind 127.0.0.1</span></span></code></pre>\\n</div>","autoDesc":true}');export{p as comp,c as data};
