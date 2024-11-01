import{_ as l,c as a,a as i,o as n}from"./app-DP7tPpgD.js";const t={};function r(s,e){return n(),a("div",null,e[0]||(e[0]=[i('<h1 id="关系模型" tabindex="-1"><a class="header-anchor" href="#关系模型"><span>关系模型</span></a></h1><h2 id="关系模型组成的三要素" tabindex="-1"><a class="header-anchor" href="#关系模型组成的三要素"><span>关系模型组成的三要素</span></a></h2><h3 id="关系数据结构" tabindex="-1"><a class="header-anchor" href="#关系数据结构"><span>关系数据结构</span></a></h3><ul><li>基本概念 <ul><li>关系</li><li>关系模式 <ul><li>什么是关系模式 <ul><li>关系模式（Relation Schema）是型</li></ul></li><li>关系是值 <ul><li>关系模式是对关系的描述</li></ul></li></ul></li><li>关系数据库</li></ul></li></ul><h3 id="关系操作集合" tabindex="-1"><a class="header-anchor" href="#关系操作集合"><span>关系操作集合</span></a></h3><h3 id="关系完整性约束" tabindex="-1"><a class="header-anchor" href="#关系完整性约束"><span>关系完整性约束</span></a></h3><ul><li>关系模型的完整性规则是对关系的某种约束条件</li><li>实体完整性和参照完整性是关系模型必须满足的完整性约束条件，被称作是关系的两个不变性，应该由关系系统自动支持。</li></ul><h2 id="基本关系的六大性质" tabindex="-1"><a class="header-anchor" href="#基本关系的六大性质"><span>基本关系的六大性质</span></a></h2><h3 id="_1-列是同质的-homogeneous" tabindex="-1"><a class="header-anchor" href="#_1-列是同质的-homogeneous"><span>① 列是同质的（Homogeneous）</span></a></h3><ul><li>每一列中的分量是同一类型的数据，来自同一个域</li></ul><h3 id="_2-不同的列可出自同一个域" tabindex="-1"><a class="header-anchor" href="#_2-不同的列可出自同一个域"><span>② 不同的列可出自同一个域</span></a></h3><ul><li>其中的每一列称为一个属性</li><li>不同的属性要给予不同的属性名</li></ul><h3 id="_3-列的顺序无所谓" tabindex="-1"><a class="header-anchor" href="#_3-列的顺序无所谓"><span>③ 列的顺序无所谓</span></a></h3><ul><li>列的次序可以任意交换</li><li>遵循这一性质的数据库产品(如ORACLE)，增加新属性时，永远是插至最后一列。但也有许多关系数据库产品没有遵循这一性质，例如FoxPro仍然区分了属性顺序</li></ul><h3 id="_4-任意两个元组的候选码不能完全相同" tabindex="-1"><a class="header-anchor" href="#_4-任意两个元组的候选码不能完全相同"><span>④ 任意两个元组的候选码不能完全相同</span></a></h3><ul><li>候选码是可以惟一标识一个元组的属性或属性组。若一个关系中的候选码有多个，则选择一个作为主码</li></ul><h3 id="_5-行的顺序无所谓" tabindex="-1"><a class="header-anchor" href="#_5-行的顺序无所谓"><span>⑤ 行的顺序无所谓</span></a></h3><ul><li>行的次序可以任意交换</li><li>遵循这一性质的数据库产品(如ORACLE)，插入一个元组时永远插至最后一行。但也有许多关系数据库产品没有遵循这一性质，例如FoxPro仍然区分了元组的顺序</li></ul><h3 id="_6-分量必须取原子值" tabindex="-1"><a class="header-anchor" href="#_6-分量必须取原子值"><span>⑥ 分量必须取原子值</span></a></h3><ul><li>每一个分量都必须是不可分的数据项。</li></ul><h2 id="关系模型中的三类完整性约束" tabindex="-1"><a class="header-anchor" href="#关系模型中的三类完整性约束"><span>关系模型中的三类完整性约束</span></a></h2><h3 id="实体完整性" tabindex="-1"><a class="header-anchor" href="#实体完整性"><span>实体完整性</span></a></h3><h3 id="参照完整性" tabindex="-1"><a class="header-anchor" href="#参照完整性"><span>参照完整性</span></a></h3><ul><li>外码（Foreign Key）</li></ul><h3 id="用户定义的完整性" tabindex="-1"><a class="header-anchor" href="#用户定义的完整性"><span>用户定义的完整性</span></a></h3><p><em>XMind: ZEN - Trial Version</em></p>',26)]))}const o=l(t,[["render",r],["__file","关系模型.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/MySQL/%E5%85%B3%E7%B3%BB%E6%A8%A1%E5%9E%8B.html","title":"4、关系模型","lang":"zh-CN","frontmatter":{"title":"4、关系模型","date":"2024-03-10 10:58","category":["数据库"],"tag":["MySQL"],"description":"关系模型 关系模型组成的三要素 关系数据结构 基本概念 关系 关系模式 什么是关系模式 关系模式（Relation Schema）是型 关系是值 关系模式是对关系的描述 关系数据库 关系操作集合 关系完整性约束 关系模型的完整性规则是对关系的某种约束条件 实体完整性和参照完整性是关系模型必须满足的完整性约束条件，被称作是关系的两个不变性，应该由关系系统...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MySQL/%E5%85%B3%E7%B3%BB%E6%A8%A1%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"4、关系模型"}],["meta",{"property":"og:description","content":"关系模型 关系模型组成的三要素 关系数据结构 基本概念 关系 关系模式 什么是关系模式 关系模式（Relation Schema）是型 关系是值 关系模式是对关系的描述 关系数据库 关系操作集合 关系完整性约束 关系模型的完整性规则是对关系的某种约束条件 实体完整性和参照完整性是关系模型必须满足的完整性约束条件，被称作是关系的两个不变性，应该由关系系统..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2024-03-10T10:58:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4、关系模型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-10T10:58:00.000Z\\",\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"关系模型组成的三要素","slug":"关系模型组成的三要素","link":"#关系模型组成的三要素","children":[{"level":3,"title":"关系数据结构","slug":"关系数据结构","link":"#关系数据结构","children":[]},{"level":3,"title":"关系操作集合","slug":"关系操作集合","link":"#关系操作集合","children":[]},{"level":3,"title":"关系完整性约束","slug":"关系完整性约束","link":"#关系完整性约束","children":[]}]},{"level":2,"title":"基本关系的六大性质","slug":"基本关系的六大性质","link":"#基本关系的六大性质","children":[{"level":3,"title":"① 列是同质的（Homogeneous）","slug":"_1-列是同质的-homogeneous","link":"#_1-列是同质的-homogeneous","children":[]},{"level":3,"title":"② 不同的列可出自同一个域","slug":"_2-不同的列可出自同一个域","link":"#_2-不同的列可出自同一个域","children":[]},{"level":3,"title":"③ 列的顺序无所谓","slug":"_3-列的顺序无所谓","link":"#_3-列的顺序无所谓","children":[]},{"level":3,"title":"④ 任意两个元组的候选码不能完全相同","slug":"_4-任意两个元组的候选码不能完全相同","link":"#_4-任意两个元组的候选码不能完全相同","children":[]},{"level":3,"title":"⑤ 行的顺序无所谓","slug":"_5-行的顺序无所谓","link":"#_5-行的顺序无所谓","children":[]},{"level":3,"title":"⑥ 分量必须取原子值","slug":"_6-分量必须取原子值","link":"#_6-分量必须取原子值","children":[]}]},{"level":2,"title":"关系模型中的三类完整性约束","slug":"关系模型中的三类完整性约束","link":"#关系模型中的三类完整性约束","children":[{"level":3,"title":"实体完整性","slug":"实体完整性","link":"#实体完整性","children":[]},{"level":3,"title":"参照完整性","slug":"参照完整性","link":"#参照完整性","children":[]},{"level":3,"title":"用户定义的完整性","slug":"用户定义的完整性","link":"#用户定义的完整性","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.73,"words":520},"filePathRelative":"posts/Database/MySQL/关系模型.md","localizedDate":"2024年3月10日","excerpt":"\\n<h2>关系模型组成的三要素</h2>\\n<h3>关系数据结构</h3>\\n<ul>\\n<li>基本概念\\n<ul>\\n<li>关系</li>\\n<li>关系模式\\n<ul>\\n<li>什么是关系模式\\n<ul>\\n<li>关系模式（Relation Schema）是型</li>\\n</ul>\\n</li>\\n<li>关系是值\\n<ul>\\n<li>关系模式是对关系的描述</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>关系数据库</li>\\n</ul>\\n</li>\\n</ul>\\n<h3>关系操作集合</h3>\\n<h3>关系完整性约束</h3>\\n<ul>\\n<li>关系模型的完整性规则是对关系的某种约束条件</li>\\n<li>实体完整性和参照完整性是关系模型必须满足的完整性约束条件，被称作是关系的两个不变性，应该由关系系统自动支持。</li>\\n</ul>","autoDesc":true}');export{o as comp,c as data};
