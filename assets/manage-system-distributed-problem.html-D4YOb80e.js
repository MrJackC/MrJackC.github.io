import{_ as t,c as a,a as n,o as i}from"./app-CZJgH_ea.js";const r={};function s(o,e){return i(),a("div",null,e[0]||(e[0]=[n('<h1 id="若依支持分布式场景需要考虑的地方" tabindex="-1"><a class="header-anchor" href="#若依支持分布式场景需要考虑的地方"><span>若依支持分布式场景需要考虑的地方</span></a></h1><p>主要考虑以下几个方向</p><ul><li>主键问题</li><li>分布式锁</li></ul><h3 id="_1-主键问题" tabindex="-1"><a class="header-anchor" href="#_1-主键问题"><span>1. 主键问题</span></a></h3><p>当前是数据库主键自增，需要权衡项目是否需要采用分布式id。</p><p>主要考虑点</p><ul><li>数据量是否非常大（想想推特每秒上万条消息的请求，自己的数据量能比吗）</li><li>数据库主从读写分离，是否就已经能满足了？</li></ul><h3 id="_2-分布式锁" tabindex="-1"><a class="header-anchor" href="#_2-分布式锁"><span>2. 分布式锁</span></a></h3><p>其实这个哪怕是单体应用某些场景也是需要分布式锁的，这个必须加上</p>',9)]))}const p=t(r,[["render",s],["__file","manage-system-distributed-problem.html.vue"]]),m=JSON.parse('{"path":"/posts/Architect/manage-system/manage-system-distributed-problem.html","title":"若依支持分布式场景需要考虑的地方","lang":"zh-CN","frontmatter":{"description":"若依支持分布式场景需要考虑的地方 主要考虑以下几个方向 主键问题 分布式锁 1. 主键问题 当前是数据库主键自增，需要权衡项目是否需要采用分布式id。 主要考虑点 数据量是否非常大（想想推特每秒上万条消息的请求，自己的数据量能比吗） 数据库主从读写分离，是否就已经能满足了？ 2. 分布式锁 其实这个哪怕是单体应用某些场景也是需要分布式锁的，这个必须加上","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/manage-system/manage-system-distributed-problem.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"若依支持分布式场景需要考虑的地方"}],["meta",{"property":"og:description","content":"若依支持分布式场景需要考虑的地方 主要考虑以下几个方向 主键问题 分布式锁 1. 主键问题 当前是数据库主键自增，需要权衡项目是否需要采用分布式id。 主要考虑点 数据量是否非常大（想想推特每秒上万条消息的请求，自己的数据量能比吗） 数据库主从读写分离，是否就已经能满足了？ 2. 分布式锁 其实这个哪怕是单体应用某些场景也是需要分布式锁的，这个必须加上"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"若依支持分布式场景需要考虑的地方\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":3,"title":"1. 主键问题","slug":"_1-主键问题","link":"#_1-主键问题","children":[]},{"level":3,"title":"2. 分布式锁","slug":"_2-分布式锁","link":"#_2-分布式锁","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.51,"words":154},"filePathRelative":"posts/Architect/manage-system/manage-system-distributed-problem.md","localizedDate":"2024年10月28日","excerpt":"\\n<p>主要考虑以下几个方向</p>\\n<ul>\\n<li>主键问题</li>\\n<li>分布式锁</li>\\n</ul>\\n<h3>1. 主键问题</h3>\\n<p>当前是数据库主键自增，需要权衡项目是否需要采用分布式id。</p>\\n<p>主要考虑点</p>\\n<ul>\\n<li>数据量是否非常大（想想推特每秒上万条消息的请求，自己的数据量能比吗）</li>\\n<li>数据库主从读写分离，是否就已经能满足了？</li>\\n</ul>\\n<h3>2. 分布式锁</h3>\\n<p>其实这个哪怕是单体应用某些场景也是需要分布式锁的，这个必须加上</p>\\n","autoDesc":true}');export{p as comp,m as data};
