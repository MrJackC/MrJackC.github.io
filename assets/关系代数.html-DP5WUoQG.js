import{_ as l,c as i,a as n,o as a}from"./app-BhoNqsD-.js";const t={};function s(r,e){return a(),i("div",null,e[0]||(e[0]=[n('<h1 id="关系代数" tabindex="-1"><a class="header-anchor" href="#关系代数"><span>关系代数</span></a></h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><h3 id="关系代数是一种抽象的查询语言-用对关系的运算来表达查询-作为研究关系数据语言的数学工具。" tabindex="-1"><a class="header-anchor" href="#关系代数是一种抽象的查询语言-用对关系的运算来表达查询-作为研究关系数据语言的数学工具。"><span>关系代数是一种抽象的查询语言，用对关系的运算来表达查询，作为研究关系数据语言的数学工具。</span></a></h3><h3 id="关系代数的运算对象是关系-运算结果亦为关系。" tabindex="-1"><a class="header-anchor" href="#关系代数的运算对象是关系-运算结果亦为关系。"><span>关系代数的运算对象是关系，运算结果亦为关系。</span></a></h3><h2 id="关系代数的运算" tabindex="-1"><a class="header-anchor" href="#关系代数的运算"><span>关系代数的运算</span></a></h2><h3 id="普通的集合运算" tabindex="-1"><a class="header-anchor" href="#普通的集合运算"><span>普通的集合运算</span></a></h3><ul><li>并、交、差</li></ul><h3 id="删除部分关系的运算" tabindex="-1"><a class="header-anchor" href="#删除部分关系的运算"><span>删除部分关系的运算</span></a></h3><ul><li>选择、投影</li></ul><h3 id="合并两个关系元组的运算" tabindex="-1"><a class="header-anchor" href="#合并两个关系元组的运算"><span>合并两个关系元组的运算</span></a></h3><ul><li>连接、积</li></ul><h3 id="改名运算" tabindex="-1"><a class="header-anchor" href="#改名运算"><span>改名运算</span></a></h3><h2 id="关系代数-1" tabindex="-1"><a class="header-anchor" href="#关系代数-1"><span>关系代数</span></a></h2><h3 id="并union-∪" tabindex="-1"><a class="header-anchor" href="#并union-∪"><span>并Union (∪)</span></a></h3><ul><li>R和S的并，R∪S，是在R或S或两者中的元素的集合</li><li>一个元素在并集中只出现一次</li><li>R和S必须同类型（属性集相同、次序相同，但属性名可以不同）</li></ul><h3 id="交intersect-∩" tabindex="-1"><a class="header-anchor" href="#交intersect-∩"><span>交Intersect (∩)</span></a></h3><ul><li>R和S的交，R∩S，是在R和S中都存在的元素的集合</li><li>一个元素在交集中只出现一次</li><li>R和S必须同类型（属性集相同、次序相同，但属性名可以不同）</li></ul><h3 id="差minus" tabindex="-1"><a class="header-anchor" href="#差minus"><span>差Minus (-)</span></a></h3><ul><li>R和S的差，R-S，是在R中而不在S中的元素的集合</li><li>R和S必须同类型（属性集相同、次序相同，但属性名可以不同）</li></ul><h3 id="投影projection-π" tabindex="-1"><a class="header-anchor" href="#投影projection-π"><span>投影Projection(π)</span></a></h3><ul><li>从关系R中选择若干属性组成新的关系</li><li>πA1,A2,…,An(R),表示从R中选择属性集A1,A2,…,An组成新的关系</li><li>列的运算</li><li>投影运算的结果中,也要去除可能的重复元组</li></ul><h3 id="广义笛卡儿积-×" tabindex="-1"><a class="header-anchor" href="#广义笛卡儿积-×"><span>广义笛卡儿积(×)</span></a></h3><ul><li>关系R、S的广义笛卡儿积是两个关系的元组对的集合所组成的新关系</li><li>R×S： <ul><li>属性是R和S的组合（有重复）</li><li>元组是R和S所有元组的可能组合</li><li>是R、S的无条件连接，使任意两个关系的信息能组合在一起</li></ul></li></ul><h3 id="选择selection-σ" tabindex="-1"><a class="header-anchor" href="#选择selection-σ"><span>选择Selection(σ)</span></a></h3><ul><li>从关系R中选择符合条件的元组构成新的关系</li><li>σC(R),表示从R中选择满足条件(使逻辑表达式C为真)的元组</li><li>行的运算</li></ul><h3 id="条件连接-θ" tabindex="-1"><a class="header-anchor" href="#条件连接-θ"><span>条件连接(θ)</span></a></h3><ul><li>从R×S的结果集中，选取在指定的属性集上满足AθB条件的元组，组成新的关系</li><li>θ是一个关于属性集的比较运算符</li><li>θ为“＝”的连接运算称为等值连接。</li></ul><h3 id="自然连接" tabindex="-1"><a class="header-anchor" href="#自然连接"><span>自然连接</span></a></h3><ul><li>从R×S的结果集中，选取在某些公共属性上具有相同值的元组，组成新的关系</li><li>R、S的公共属性 <ul><li>属性集的交集（名称及类型相同）</li></ul></li><li>公共属性在结果中只出现一次</li><li>等值连接</li></ul>',29)]))}const o=l(t,[["render",s],["__file","关系代数.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/MySQL/%E5%85%B3%E7%B3%BB%E4%BB%A3%E6%95%B0.html","title":"5、关系代数","lang":"zh-CN","frontmatter":{"title":"5、关系代数","date":"2024-03-10 11:58","category":["数据库"],"tag":["MySQL"],"description":"关系代数 概述 关系代数是一种抽象的查询语言，用对关系的运算来表达查询，作为研究关系数据语言的数学工具。 关系代数的运算对象是关系，运算结果亦为关系。 关系代数的运算 普通的集合运算 并、交、差 删除部分关系的运算 选择、投影 合并两个关系元组的运算 连接、积 改名运算 关系代数 并Union (∪) R和S的并，R∪S，是在R或S或两者中的元素的集合...","head":[["meta",{"property":"og:url","content":"https://mrjason.me/posts/Database/MySQL/%E5%85%B3%E7%B3%BB%E4%BB%A3%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"5、关系代数"}],["meta",{"property":"og:description","content":"关系代数 概述 关系代数是一种抽象的查询语言，用对关系的运算来表达查询，作为研究关系数据语言的数学工具。 关系代数的运算对象是关系，运算结果亦为关系。 关系代数的运算 普通的集合运算 并、交、差 删除部分关系的运算 选择、投影 合并两个关系元组的运算 连接、积 改名运算 关系代数 并Union (∪) R和S的并，R∪S，是在R或S或两者中的元素的集合..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2024-03-10T11:58:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5、关系代数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-10T11:58:00.000Z\\",\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjason.me\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[{"level":3,"title":"关系代数是一种抽象的查询语言，用对关系的运算来表达查询，作为研究关系数据语言的数学工具。","slug":"关系代数是一种抽象的查询语言-用对关系的运算来表达查询-作为研究关系数据语言的数学工具。","link":"#关系代数是一种抽象的查询语言-用对关系的运算来表达查询-作为研究关系数据语言的数学工具。","children":[]},{"level":3,"title":"关系代数的运算对象是关系，运算结果亦为关系。","slug":"关系代数的运算对象是关系-运算结果亦为关系。","link":"#关系代数的运算对象是关系-运算结果亦为关系。","children":[]}]},{"level":2,"title":"关系代数的运算","slug":"关系代数的运算","link":"#关系代数的运算","children":[{"level":3,"title":"普通的集合运算","slug":"普通的集合运算","link":"#普通的集合运算","children":[]},{"level":3,"title":"删除部分关系的运算","slug":"删除部分关系的运算","link":"#删除部分关系的运算","children":[]},{"level":3,"title":"合并两个关系元组的运算","slug":"合并两个关系元组的运算","link":"#合并两个关系元组的运算","children":[]},{"level":3,"title":"改名运算","slug":"改名运算","link":"#改名运算","children":[]}]},{"level":2,"title":"关系代数","slug":"关系代数-1","link":"#关系代数-1","children":[{"level":3,"title":"并Union (∪)","slug":"并union-∪","link":"#并union-∪","children":[]},{"level":3,"title":"交Intersect (∩)","slug":"交intersect-∩","link":"#交intersect-∩","children":[]},{"level":3,"title":"差Minus (-)","slug":"差minus","link":"#差minus","children":[]},{"level":3,"title":"投影Projection(π)","slug":"投影projection-π","link":"#投影projection-π","children":[]},{"level":3,"title":"广义笛卡儿积(×)","slug":"广义笛卡儿积-×","link":"#广义笛卡儿积-×","children":[]},{"level":3,"title":"选择Selection(σ)","slug":"选择selection-σ","link":"#选择selection-σ","children":[]},{"level":3,"title":"条件连接(θ)","slug":"条件连接-θ","link":"#条件连接-θ","children":[]},{"level":3,"title":"自然连接","slug":"自然连接","link":"#自然连接","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.17,"words":652},"filePathRelative":"posts/Database/MySQL/关系代数.md","localizedDate":"2024年3月10日","excerpt":"\\n<h2>概述</h2>\\n<h3>关系代数是一种抽象的查询语言，用对关系的运算来表达查询，作为研究关系数据语言的数学工具。</h3>\\n<h3>关系代数的运算对象是关系，运算结果亦为关系。</h3>\\n<h2>关系代数的运算</h2>\\n<h3>普通的集合运算</h3>\\n<ul>\\n<li>并、交、差</li>\\n</ul>\\n<h3>删除部分关系的运算</h3>\\n<ul>\\n<li>选择、投影</li>\\n</ul>\\n<h3>合并两个关系元组的运算</h3>\\n<ul>\\n<li>连接、积</li>\\n</ul>\\n<h3>改名运算</h3>\\n<h2>关系代数</h2>\\n<h3>并Union (∪)</h3>\\n<ul>\\n<li>R和S的并，R∪S，是在R或S或两者中的元素的集合</li>\\n<li>一个元素在并集中只出现一次</li>\\n<li>R和S必须同类型（属性集相同、次序相同，但属性名可以不同）</li>\\n</ul>","autoDesc":true}');export{o as comp,c as data};
