import{_ as a,c as t,a as i,o as n}from"./app-BQBjlK2G.js";const l={};function r(s,e){return n(),t("div",null,e[0]||(e[0]=[i('<h1 id="联合索引-最左匹配原则成因" tabindex="-1"><a class="header-anchor" href="#联合索引-最左匹配原则成因"><span>联合索引-最左匹配原则成因</span></a></h1><h2 id="_1-什么是联合索引" tabindex="-1"><a class="header-anchor" href="#_1-什么是联合索引"><span>1. 什么是联合索引</span></a></h2><p>联合索引就是由多列组合成的索引</p><h2 id="_2-什么是最左匹配原则" tabindex="-1"><a class="header-anchor" href="#_2-什么是最左匹配原则"><span>2. 什么是最左匹配原则</span></a></h2><h3 id="_2-1-简单概述" tabindex="-1"><a class="header-anchor" href="#_2-1-简单概述"><span>2.1 简单概述</span></a></h3><p>假设我们有两列a，b。我们对ab设置一个联合索引，我们再where 语句中</p><ul><li>调用a=？ and b=?,他就会走ab索引。</li><li>调用where a=？ 他也会走ab索引</li><li>调用where b=？，不走ab 索引</li></ul><h3 id="_2-2-定义" tabindex="-1"><a class="header-anchor" href="#_2-2-定义"><span>2.2 定义</span></a></h3><ol><li>mysql 会一直向右匹配知道遇到范围查询（&gt;、&lt;、between、like）就会停止匹配，比如a=3 and b=4 and c&gt;5 and d=6 如果建立（a,b,c,d）顺序的所有，d是用不到索引的，如果建立（a,b,d,c）的索引则都可以用到，a、b、d的顺序可以任意调整</li><li>=和in 可以乱序，比如a=1 and b=2 and c=3 建立（a,b,c）索引可以任意顺序，mysql的查询优化器会帮你优化成索引可以识别的形式</li></ol><h2 id="_3-示例" tabindex="-1"><a class="header-anchor" href="#_3-示例"><span>3. 示例</span></a></h2><ol><li><p>包含联合索引的表信息</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130844768.png" alt="image-20210405235609971" tabindex="0" loading="lazy"><figcaption>image-20210405235609971</figcaption></figure></li><li><p>走联合索引情况</p><p>查询</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130844806.png" alt="image-20210405235710376" tabindex="0" loading="lazy"><figcaption>image-20210405235710376</figcaption></figure><p>使用explain 查询</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130844840.png" alt="image-20210405235731210" tabindex="0" loading="lazy"><figcaption>image-20210405235731210</figcaption></figure></li><li><p>我们删了area，不走索引</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130844864.png" alt="image-20210406000020398" tabindex="0" loading="lazy"><figcaption>image-20210406000020398</figcaption></figure><p>此时的type：ALL</p></li></ol><h2 id="_4-成因分析" tabindex="-1"><a class="header-anchor" href="#_4-成因分析"><span>4. 成因分析</span></a></h2><p>建立复合索引会对第一个字段排序，再对第二个字段排序，类似于order by 字段1 ，再order by 字段2、所以的第一个字段是绝对有序的，所以直接使用第二个字段是用不到索引的</p>',13)]))}const o=a(l,[["render",r],["__file","mysql-c-index-right.html.vue"]]),d=JSON.parse('{"path":"/posts/Database/MySQL/mysql-c-index-right.html","title":"联合索引-最左匹配原则成因","lang":"zh-CN","frontmatter":{"aliases":"联合索引-最左匹配原则成因","tags":null,"cssclass":null,"source":null,"category":["数据库"],"created":"2024-02-22 10:49","updated":"2024-03-13 08:44","description":"联合索引-最左匹配原则成因 1. 什么是联合索引 联合索引就是由多列组合成的索引 2. 什么是最左匹配原则 2.1 简单概述 假设我们有两列a，b。我们对ab设置一个联合索引，我们再where 语句中 调用a=？ and b=?,他就会走ab索引。 调用where a=？ 他也会走ab索引 调用where b=？，不走ab 索引 2.2 定义 mysq...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/MySQL/mysql-c-index-right.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"联合索引-最左匹配原则成因"}],["meta",{"property":"og:description","content":"联合索引-最左匹配原则成因 1. 什么是联合索引 联合索引就是由多列组合成的索引 2. 什么是最左匹配原则 2.1 简单概述 假设我们有两列a，b。我们对ab设置一个联合索引，我们再where 语句中 调用a=？ and b=?,他就会走ab索引。 调用where a=？ 他也会走ab索引 调用where b=？，不走ab 索引 2.2 定义 mysq..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130844768.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"联合索引-最左匹配原则成因\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130844768.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130844806.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130844840.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130844864.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是联合索引","slug":"_1-什么是联合索引","link":"#_1-什么是联合索引","children":[]},{"level":2,"title":"2. 什么是最左匹配原则","slug":"_2-什么是最左匹配原则","link":"#_2-什么是最左匹配原则","children":[{"level":3,"title":"2.1 简单概述","slug":"_2-1-简单概述","link":"#_2-1-简单概述","children":[]},{"level":3,"title":"2.2 定义","slug":"_2-2-定义","link":"#_2-2-定义","children":[]}]},{"level":2,"title":"3. 示例","slug":"_3-示例","link":"#_3-示例","children":[]},{"level":2,"title":"4. 成因分析","slug":"_4-成因分析","link":"#_4-成因分析","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.41,"words":422},"filePathRelative":"posts/Database/MySQL/mysql-c-index-right.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 什么是联合索引</h2>\\n<p>联合索引就是由多列组合成的索引</p>\\n<h2>2. 什么是最左匹配原则</h2>\\n<h3>2.1 简单概述</h3>\\n<p>假设我们有两列a，b。我们对ab设置一个联合索引，我们再where 语句中</p>\\n<ul>\\n<li>调用a=？ and b=?,他就会走ab索引。</li>\\n<li>调用where a=？ 他也会走ab索引</li>\\n<li>调用where b=？，不走ab 索引</li>\\n</ul>\\n<h3>2.2 定义</h3>\\n<ol>\\n<li>mysql 会一直向右匹配知道遇到范围查询（&gt;、&lt;、between、like）就会停止匹配，比如a=3 and b=4 and c&gt;5 and d=6 如果建立（a,b,c,d）顺序的所有，d是用不到索引的，如果建立（a,b,d,c）的索引则都可以用到，a、b、d的顺序可以任意调整</li>\\n<li>=和in 可以乱序，比如a=1 and b=2 and c=3 建立（a,b,c）索引可以任意顺序，mysql的查询优化器会帮你优化成索引可以识别的形式</li>\\n</ol>","autoDesc":true}');export{o as comp,d as data};
