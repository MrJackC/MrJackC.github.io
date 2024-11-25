import{_ as i,c as s,a,o as r}from"./app-BfIe-EZg.js";const t={};function d(n,e){return r(),s("div",null,e[0]||(e[0]=[a('<h1 id="redis大数据查询还不如直接查数据库" tabindex="-1"><a class="header-anchor" href="#redis大数据查询还不如直接查数据库"><span>redis大数据查询还不如直接查数据库</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>我们字典表数据会根据 字典名 存redis 作为缓存使用，但是字典并不单单有我们系统中新增的。还包括<code>国标 </code>的字典表。如 民族代码，职业代码，行政区划代码。这些国标字典表是单独存表的（我们以T_开头）</p><p>为了保持逻辑一致，我们在service 层通过表前缀 <code>T_ </code> 区分是系统字典表还是 国标字典表。转成统一的数据结构返回。其中会将字典表的数据存储在redis 中</p><h2 id="_2-问题" tabindex="-1"><a class="header-anchor" href="#_2-问题"><span>2. 问题</span></a></h2><p>在一次系统测试过程中发现业务接口响应时间长。排查发现是redis 查询 <code>全国行政区划代码</code> 慢，</p><ul><li>redis查询 <code>全国行政区划代码</code> 花费：200ms</li><li>直接查询数据库 花费10ms</li></ul><h2 id="_3-排查定位" tabindex="-1"><a class="header-anchor" href="#_3-排查定位"><span>3. 排查定位</span></a></h2><h3 id="_3-1-redis-慢日志" tabindex="-1"><a class="header-anchor" href="#_3-1-redis-慢日志"><span>3.1 redis 慢日志</span></a></h3><p>通过查询慢日志定位redis 中哪些key 操作的慢</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">SLOWLOG</span><span style="color:#98C379;--shiki-dark:#98C379;"> get</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131410765.png" alt="image-20220628173939773" tabindex="0" loading="lazy"><figcaption>image-20220628173939773</figcaption></figure><p>我们可以看到行政区划代码redis 中查询花费了10ms，再加上网络传输和数据格式组装就更久了</p><h3 id="_3-2-redis-查询bigkeys" tabindex="-1"><a class="header-anchor" href="#_3-2-redis-查询bigkeys"><span>3.2 redis 查询bigkeys</span></a></h3><p>查询bigkeys 信息</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>redis-cli -h 192.168.0.1 -p 6379 -a &quot;xxxx&quot; --bigkeys</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131410794.png" alt="image-20220628174234793" tabindex="0" loading="lazy"><figcaption>image-20220628174234793</figcaption></figure><p>我们可以看到行政区划就占了0.6M 大小。已经非常大了</p><h2 id="_4-解决方案" tabindex="-1"><a class="header-anchor" href="#_4-解决方案"><span>4. 解决方案</span></a></h2><p>根据实际业务需求，行政区划代码其实基本不变，我们可以将他放在前端或者服务端内存中做一级缓存就可以了。（ps：redis 属于二级缓存）</p><h2 id="_5-大bigkeys-怎么办" tabindex="-1"><a class="header-anchor" href="#_5-大bigkeys-怎么办"><span>5. 大bigkeys 怎么办</span></a></h2><p>这里有两点可以优化：</p><ul><li>业务应用尽量避免写入 bigkey</li><li>如果你使用的 Redis 是 4.0 以上版本，用 UNLINK 命令替代 DEL，此命令可以把释放 key 内存的操作，放到后台线程中去执行，从而降低对 Redis 的影响</li><li>如果你使用的 Redis 是 6.0 以上版本，可以开启 lazy-free 机制（lazyfree-lazy-user-del = yes），在执行 DEL 命令时，释放内存也会放到后台线程中执行</li></ul><p>但即便可以使用方案 2，我也不建议你在实例中存入 bigkey。</p><p>这是因为 bigkey 在很多场景下，依旧会产生性能问题。例如，bigkey 在分片集群模式下，对于数据的迁移也会有性能影响，以及我后面即将讲到的数据过期、数据淘汰、透明大页，都会受到 bigkey 的影响。</p>',25)]))}const l=i(t,[["render",d],["__file","redis-bigdata-slow-problem.html.vue"]]),p=JSON.parse('{"path":"/posts/Daily-Thoughts/deepImpression/redis-bigdata-slow-problem.html","title":"redis大数据查询还不如直接查数据库","lang":"zh-CN","frontmatter":{"aliases":"redis大数据查询还不如直接查数据库","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:53","updated":"2024-03-13 14:10","description":"redis大数据查询还不如直接查数据库 1. 背景 我们字典表数据会根据 字典名 存redis 作为缓存使用，但是字典并不单单有我们系统中新增的。还包括国标 的字典表。如 民族代码，职业代码，行政区划代码。这些国标字典表是单独存表的（我们以T_开头） 为了保持逻辑一致，我们在service 层通过表前缀 T_ 区分是系统字典表还是 国标字典表。转成统一...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Daily-Thoughts/deepImpression/redis-bigdata-slow-problem.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"redis大数据查询还不如直接查数据库"}],["meta",{"property":"og:description","content":"redis大数据查询还不如直接查数据库 1. 背景 我们字典表数据会根据 字典名 存redis 作为缓存使用，但是字典并不单单有我们系统中新增的。还包括国标 的字典表。如 民族代码，职业代码，行政区划代码。这些国标字典表是单独存表的（我们以T_开头） 为了保持逻辑一致，我们在service 层通过表前缀 T_ 区分是系统字典表还是 国标字典表。转成统一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131410765.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"redis大数据查询还不如直接查数据库\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131410765.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131410794.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 问题","slug":"_2-问题","link":"#_2-问题","children":[]},{"level":2,"title":"3. 排查定位","slug":"_3-排查定位","link":"#_3-排查定位","children":[{"level":3,"title":"3.1 redis 慢日志","slug":"_3-1-redis-慢日志","link":"#_3-1-redis-慢日志","children":[]},{"level":3,"title":"3.2 redis 查询bigkeys","slug":"_3-2-redis-查询bigkeys","link":"#_3-2-redis-查询bigkeys","children":[]}]},{"level":2,"title":"4. 解决方案","slug":"_4-解决方案","link":"#_4-解决方案","children":[]},{"level":2,"title":"5. 大bigkeys 怎么办","slug":"_5-大bigkeys-怎么办","link":"#_5-大bigkeys-怎么办","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.2,"words":659},"filePathRelative":"posts/Daily-Thoughts/deepImpression/redis-bigdata-slow-problem.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>我们字典表数据会根据 字典名 存redis 作为缓存使用，但是字典并不单单有我们系统中新增的。还包括<code>国标 </code>的字典表。如 民族代码，职业代码，行政区划代码。这些国标字典表是单独存表的（我们以T_开头）</p>\\n<p>为了保持逻辑一致，我们在service 层通过表前缀 <code>T_ </code> 区分是系统字典表还是 国标字典表。转成统一的数据结构返回。其中会将字典表的数据存储在redis 中</p>\\n<h2>2. 问题</h2>\\n<p>在一次系统测试过程中发现业务接口响应时间长。排查发现是redis 查询 <code>全国行政区划代码</code> 慢，</p>","autoDesc":true}');export{l as comp,p as data};
