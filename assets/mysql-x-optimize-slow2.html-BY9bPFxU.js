import{_ as e,c as s,a as i,o as l}from"./app-tJW29Kmg.js";const n={};function t(r,a){return l(),s("div",null,a[0]||(a[0]=[i(`<h1 id="如何调优慢查询sql" tabindex="-1"><a class="header-anchor" href="#如何调优慢查询sql"><span>如何调优慢查询SQL</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>我们在写程序的时候如何定位并优化慢查询呢？具体场景具体分析，大体思路如下</p><ol><li>根据慢日志定位慢查询sql</li><li>使用explain等工具分析sql</li><li>修改sql或者尽量让sql走索引</li></ol><h2 id="_2-根据慢日志定位慢查询sql" tabindex="-1"><a class="header-anchor" href="#_2-根据慢日志定位慢查询sql"><span>2. 根据慢日志定位慢查询sql</span></a></h2><ol><li><p>查看慢日志配置情况</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">show VARIABLES </span><span style="color:#C678DD;--shiki-dark:#C678DD;">like</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;%query%&#39;</span></span></code></pre></div><p>结果如下</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932512.png" alt="image-20210405231229429" tabindex="0" loading="lazy"><figcaption>image-20210405231229429</figcaption></figure></li></ol><ul><li>Long_query_time: 默认是10s就算是慢日志了</li><li>Show_query_log: 慢日志的开启状态</li><li>show_query_log_file: 慢日志所在的地址</li></ul><ol><li><p>慢日志的数量</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">show </span><span style="color:#C678DD;--shiki-dark:#C678DD;">status</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> like</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;%slow_queries%&#39;</span></span></code></pre></div><p>结果如下</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932554.png" alt="image-20210405231632132" tabindex="0" loading="lazy"><figcaption>image-20210405231632132</figcaption></figure></li><li><p>慢日志打开</p><ul><li>方式一：会话中更改（重启后会恢复默认）</li></ul><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">#慢日志打开</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">set</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> global</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> slow_query_log </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> on</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">#慢查询的时间设置成1s</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">set</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> global</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  long_query_time </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>结果如下</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932583.png" alt="image-20210405231723049" tabindex="0" loading="lazy"><figcaption>image-20210405231723049</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932614.png" alt="image-20210405231849634" tabindex="0" loading="lazy"><figcaption>image-20210405231849634</figcaption></figure></li></ol><ul><li><p>方式二：修改配置文件（重启后配置还在）</p><p>修改配置文件my.cnf，在[mysqld]下的下方加入</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[mysqld]</span></span>
<span class="line"><span>slow_query_log = ON</span></span>
<span class="line"><span>long_query_time = 1</span></span></code></pre></div></li></ul><ol><li><p>重启MySQL服务</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>service mysqld restart</span></span></code></pre></div></li><li><p>查看设置后的参数</p><p>show VARIABLES like &#39;%query%&#39;</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932652.png" alt="image-20210405233551896" tabindex="0" loading="lazy"><figcaption>image-20210405233551896</figcaption></figure></li><li><p>查看慢日志</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> vim</span><span style="color:#98C379;--shiki-dark:#98C379;"> /var/lib/mysql/iZwz914d1peizv4h7laju4Z-slow.log</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932678.png" alt="image-20210405234141934" tabindex="0" loading="lazy"><figcaption>image-20210405234141934</figcaption></figure></li></ol><h2 id="_3-使用explain等工具分析sql" tabindex="-1"><a class="header-anchor" href="#_3-使用explain等工具分析sql"><span>3. 使用explain等工具分析sql</span></a></h2><ol><li><p>在查询语句前面加上explain</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932709.png" alt="image-20210405234252604" tabindex="0" loading="lazy"><figcaption>image-20210405234252604</figcaption></figure><p>其中两个字段非常重要</p><ul><li><p>type：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932738.png" alt="image-20210405234357173" tabindex="0" loading="lazy"><figcaption>image-20210405234357173</figcaption></figure></li><li><p>extra：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932760.png" alt="image-20210405234420498" tabindex="0" loading="lazy"><figcaption>image-20210405234420498</figcaption></figure></li></ul></li></ol><h2 id="_4-修改sql或者尽量让sql走索引" tabindex="-1"><a class="header-anchor" href="#_4-修改sql或者尽量让sql走索引"><span>4. 修改sql或者尽量让sql走索引</span></a></h2><h3 id="_4-1-方案一-查询其他有索引的字段" tabindex="-1"><a class="header-anchor" href="#_4-1-方案一-查询其他有索引的字段"><span>4.1 方案一：查询其他有索引的字段</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932793.png" alt="image-20210405234611399" tabindex="0" loading="lazy"><figcaption>image-20210405234611399</figcaption></figure><h3 id="_4-2-方案二-添加索引" tabindex="-1"><a class="header-anchor" href="#_4-2-方案二-添加索引"><span>4.2 方案二：添加索引</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932822.png" alt="image-20210405234645956" tabindex="0" loading="lazy"><figcaption>image-20210405234645956</figcaption></figure>`,17)]))}const p=e(n,[["render",t],["__file","mysql-x-optimize-slow2.html.vue"]]),c=JSON.parse(`{"path":"/posts/Database/MySQL/mysql-x-optimize-slow2.html","title":"如何调优慢查询SQL","lang":"zh-CN","frontmatter":{"aliases":"如何调优慢查询SQL","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 09:34","description":"如何调优慢查询SQL 1. 简介 我们在写程序的时候如何定位并优化慢查询呢？具体场景具体分析，大体思路如下 根据慢日志定位慢查询sql 使用explain等工具分析sql 修改sql或者尽量让sql走索引 2. 根据慢日志定位慢查询sql 查看慢日志配置情况 结果如下 image-20210405231229429image-2021040523122...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MySQL/mysql-x-optimize-slow2.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"如何调优慢查询SQL"}],["meta",{"property":"og:description","content":"如何调优慢查询SQL 1. 简介 我们在写程序的时候如何定位并优化慢查询呢？具体场景具体分析，大体思路如下 根据慢日志定位慢查询sql 使用explain等工具分析sql 修改sql或者尽量让sql走索引 2. 根据慢日志定位慢查询sql 查看慢日志配置情况 结果如下 image-20210405231229429image-2021040523122..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932512.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何调优慢查询SQL\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932512.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932554.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932583.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932614.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932652.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932678.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932709.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932738.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932760.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932793.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932822.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 根据慢日志定位慢查询sql","slug":"_2-根据慢日志定位慢查询sql","link":"#_2-根据慢日志定位慢查询sql","children":[]},{"level":2,"title":"3. 使用explain等工具分析sql","slug":"_3-使用explain等工具分析sql","link":"#_3-使用explain等工具分析sql","children":[]},{"level":2,"title":"4. 修改sql或者尽量让sql走索引","slug":"_4-修改sql或者尽量让sql走索引","link":"#_4-修改sql或者尽量让sql走索引","children":[{"level":3,"title":"4.1 方案一：查询其他有索引的字段","slug":"_4-1-方案一-查询其他有索引的字段","link":"#_4-1-方案一-查询其他有索引的字段","children":[]},{"level":3,"title":"4.2 方案二：添加索引","slug":"_4-2-方案二-添加索引","link":"#_4-2-方案二-添加索引","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.37,"words":411},"filePathRelative":"posts/Database/MySQL/mysql-x-optimize-slow2.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>我们在写程序的时候如何定位并优化慢查询呢？具体场景具体分析，大体思路如下</p>\\n<ol>\\n<li>根据慢日志定位慢查询sql</li>\\n<li>使用explain等工具分析sql</li>\\n<li>修改sql或者尽量让sql走索引</li>\\n</ol>\\n<h2>2. 根据慢日志定位慢查询sql</h2>\\n<ol>\\n<li>\\n<p>查看慢日志配置情况</p>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">show VARIABLES </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">like</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> '%query%'</span></span></code></pre>\\n</div><p>结果如下</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130932512.png\\" alt=\\"image-20210405231229429\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20210405231229429</figcaption></figure>\\n</li>\\n</ol>","autoDesc":true}`);export{p as comp,c as data};
