import{_ as a,c as t,a as i,o as r}from"./app-4x2aIoqi.js";const s={};function n(o,e){return r(),t("div",null,e[0]||(e[0]=[i(`<h1 id="gitlab内存占用过大" tabindex="-1"><a class="header-anchor" href="#gitlab内存占用过大"><span>gitlab内存占用过大</span></a></h1><p>我的服务器配置是2核4G内存，启动gitlab 就占用了很大内存空间(停止gitlab 会释放1.5G内存)</p><h2 id="_1-解决方案" tabindex="-1"><a class="header-anchor" href="#_1-解决方案"><span>1. 解决方案</span></a></h2><h3 id="_1-1-减少-unicorn-worker进程数" tabindex="-1"><a class="header-anchor" href="#_1-1-减少-unicorn-worker进程数"><span>1.1 减少 unicorn worker进程数</span></a></h3><p>我们可以使用 top -ac 先看一下开启了多少unicorn worker进程，gitlab默认开启进程数与CPU内核数相同</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>vim /etc/gitlab/gitlab.rb</span></span>
<span class="line"><span>unicorn[&#39;worker_processes&#39;] = 8</span></span></code></pre></div><p>默认是被注释掉的，官方建议该值是CPU核心数加一，可以提高服务器的响应速度，如果内存只有4G，或者服务器上有其它业务，就不要改了，以免内存不足。另外，这个参数最小值是2，设为1，服务器可能会卡死。</p><h3 id="_1-2-减少数据库缓存" tabindex="-1"><a class="header-anchor" href="#_1-2-减少数据库缓存"><span>1.2 减少数据库缓存</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span> postgresql[&#39;shared_buffers&#39;] = &quot;128MB&quot;</span></span></code></pre></div><p>默认为256MB，可适当改小</p><h3 id="_1-3-减少数据库并发数" tabindex="-1"><a class="header-anchor" href="#_1-3-减少数据库并发数"><span>1.3 减少数据库并发数</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>postgresql[&#39;max_worker_processes&#39;] = 4</span></span></code></pre></div><p>默认为8，可适当减少</p><h3 id="_1-4-减少sidekiq并发数" tabindex="-1"><a class="header-anchor" href="#_1-4-减少sidekiq并发数"><span>1.4 减少sidekiq并发数</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>sidekiq[&#39;concurrency&#39;] = 10</span></span></code></pre></div><p>默认是25，可适当改小</p>`,16)]))}const c=a(s,[["render",n],["__file","gitlab-x-memory-size.html.vue"]]),p=JSON.parse(`{"path":"/posts/Git/gitlab-x-memory-size.html","title":"gitlab内存占用过大","lang":"zh-CN","frontmatter":{"description":"gitlab内存占用过大 我的服务器配置是2核4G内存，启动gitlab 就占用了很大内存空间(停止gitlab 会释放1.5G内存) 1. 解决方案 1.1 减少 unicorn worker进程数 我们可以使用 top -ac 先看一下开启了多少unicorn worker进程，gitlab默认开启进程数与CPU内核数相同 默认是被注释掉的，官方建...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Git/gitlab-x-memory-size.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"gitlab内存占用过大"}],["meta",{"property":"og:description","content":"gitlab内存占用过大 我的服务器配置是2核4G内存，启动gitlab 就占用了很大内存空间(停止gitlab 会释放1.5G内存) 1. 解决方案 1.1 减少 unicorn worker进程数 我们可以使用 top -ac 先看一下开启了多少unicorn worker进程，gitlab默认开启进程数与CPU内核数相同 默认是被注释掉的，官方建..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"gitlab内存占用过大\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 解决方案","slug":"_1-解决方案","link":"#_1-解决方案","children":[{"level":3,"title":"1.1 减少 unicorn worker进程数","slug":"_1-1-减少-unicorn-worker进程数","link":"#_1-1-减少-unicorn-worker进程数","children":[]},{"level":3,"title":"1.2 减少数据库缓存","slug":"_1-2-减少数据库缓存","link":"#_1-2-减少数据库缓存","children":[]},{"level":3,"title":"1.3 减少数据库并发数","slug":"_1-3-减少数据库并发数","link":"#_1-3-减少数据库并发数","children":[]},{"level":3,"title":"1.4 减少sidekiq并发数","slug":"_1-4-减少sidekiq并发数","link":"#_1-4-减少sidekiq并发数","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.8,"words":240},"filePathRelative":"posts/Git/gitlab-x-memory-size.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>我的服务器配置是2核4G内存，启动gitlab 就占用了很大内存空间(停止gitlab 会释放1.5G内存)</p>\\n<h2>1. 解决方案</h2>\\n<h3>1.1 减少 unicorn worker进程数</h3>\\n<p>我们可以使用 top -ac 先看一下开启了多少unicorn worker进程，gitlab默认开启进程数与CPU内核数相同</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>vim /etc/gitlab/gitlab.rb</span></span>\\n<span class=\\"line\\"><span>unicorn['worker_processes'] = 8</span></span></code></pre>\\n</div>","autoDesc":true}`);export{c as comp,p as data};
