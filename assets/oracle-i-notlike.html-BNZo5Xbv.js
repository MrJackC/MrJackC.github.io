import{_ as t,c as n,a as i,o as a}from"./app-W9QyTiMU.js";const l={};function o(r,e){return a(),n("div",null,e[0]||(e[0]=[i('<h1 id="notlike优化" tabindex="-1"><a class="header-anchor" href="#notlike优化"><span>notlike优化</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>我们有些查询条件需要使用not like ，过滤掉不包含某些文字的数据。但dot like 会导致全表扫描。有没有什么办法既能满足我们需求又保证效率呢？</p><h2 id="_2-解决" tabindex="-1"><a class="header-anchor" href="#_2-解决"><span>2. 解决</span></a></h2><p>instr(title,’手册’)&gt;0 相当于like</p><p>instr(title,’手册’)=0 相当于not like</p><p>对于LIKE语句，我们可以使用instr函数来进行SQL调优</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/weixin_30715523/article/details/101579345" target="_blank" rel="noopener noreferrer">like not like 优化</a></p>',9)]))}const p=t(l,[["render",o],["__file","oracle-i-notlike.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/ORACLE/oracle-i-notlike.html","title":"notlike优化","lang":"zh-CN","frontmatter":{"aliases":"notlike优化","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 09:56","description":"notlike优化 1. 简介 我们有些查询条件需要使用not like ，过滤掉不包含某些文字的数据。但dot like 会导致全表扫描。有没有什么办法既能满足我们需求又保证效率呢？ 2. 解决 instr(title,’手册’)>0 相当于like instr(title,’手册’)=0 相当于not like 对于LIKE语句，我们可以使用ins...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/ORACLE/oracle-i-notlike.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"notlike优化"}],["meta",{"property":"og:description","content":"notlike优化 1. 简介 我们有些查询条件需要使用not like ，过滤掉不包含某些文字的数据。但dot like 会导致全表扫描。有没有什么办法既能满足我们需求又保证效率呢？ 2. 解决 instr(title,’手册’)>0 相当于like instr(title,’手册’)=0 相当于not like 对于LIKE语句，我们可以使用ins..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"notlike优化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 解决","slug":"_2-解决","link":"#_2-解决","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.45,"words":136},"filePathRelative":"posts/Database/ORACLE/oracle-i-notlike.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>我们有些查询条件需要使用not like ，过滤掉不包含某些文字的数据。但dot like 会导致全表扫描。有没有什么办法既能满足我们需求又保证效率呢？</p>\\n<h2>2. 解决</h2>\\n<p>instr(title,’手册’)&gt;0 相当于like</p>\\n<p>instr(title,’手册’)=0 相当于not like</p>\\n<p>对于LIKE语句，我们可以使用instr函数来进行SQL调优</p>\\n<h2>参考文章</h2>\\n<p><a href=\\"https://blog.csdn.net/weixin_30715523/article/details/101579345\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">like not like 优化</a></p>","autoDesc":true}');export{p as comp,c as data};
