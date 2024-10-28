import{_ as e,c as i,a,o as n}from"./app-W9QyTiMU.js";const t={};function r(h,l){return n(),i("div",null,l[0]||(l[0]=[a(`<h1 id="关系数据库设计理论" tabindex="-1"><a class="header-anchor" href="#关系数据库设计理论"><span>关系数据库设计理论</span></a></h1><h2 id="设计一个好的关系数据库系统-关键是要设计一个好的数据库模式-数据库逻辑设计问题" tabindex="-1"><a class="header-anchor" href="#设计一个好的关系数据库系统-关键是要设计一个好的数据库模式-数据库逻辑设计问题"><span>设计一个好的关系数据库系统，关键是要设计一个好的数据库模式（数据库逻辑设计问题）</span></a></h2><h2 id="数据库逻辑设计主要解决的问题" tabindex="-1"><a class="header-anchor" href="#数据库逻辑设计主要解决的问题"><span>数据库逻辑设计主要解决的问题</span></a></h2><h3 id="关系数据库应该组织成几个关系模式" tabindex="-1"><a class="header-anchor" href="#关系数据库应该组织成几个关系模式"><span>关系数据库应该组织成几个关系模式</span></a></h3><h3 id="关系模式中包括哪些属性" tabindex="-1"><a class="header-anchor" href="#关系模式中包括哪些属性"><span>关系模式中包括哪些属性</span></a></h3><h2 id="不好-的数据库设计" tabindex="-1"><a class="header-anchor" href="#不好-的数据库设计"><span>“不好”的数据库设计</span></a></h2><h3 id="举例-为学校设计一个关系数据库" tabindex="-1"><a class="header-anchor" href="#举例-为学校设计一个关系数据库"><span>举例：为学校设计一个关系数据库</span></a></h3><h3 id="关系模式-un-sno-cno-g-sdept-mn" tabindex="-1"><a class="header-anchor" href="#关系模式-un-sno-cno-g-sdept-mn"><span>关系模式: UN(Sno,Cno,G,Sdept,MN)</span></a></h3><ul><li>Sno:描述学生</li><li><pre><code>    Sdept:描述系名
</code></pre></li><li><pre><code>    MN:描述系主任
</code></pre></li><li><pre><code>    Cno:描述课程
</code></pre></li><li><pre><code>    G:描述学习成绩
</code></pre></li><li>根据对现实世界的分析,可得出:Sno,Cno是码</li><li>按照关系模式UN装入部分数据</li></ul><h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h3><h3 id="对数据库操作时-会出现以下问题" tabindex="-1"><a class="header-anchor" href="#对数据库操作时-会出现以下问题"><span>对数据库操作时,会出现以下问题</span></a></h3><ul><li><ol><li>数据冗余(系主任名的存储次数)</li></ol><ul><li>数据重复存储:浪费存储空间,数据库维护困难(更新异常)</li></ul></li><li><ol start="2"><li>插入异常(一个系刚成立)</li></ol><ul><li>主码为空的记录不能存在与数据库,导致不能进行插入操作</li></ul></li><li><ol start="3"><li>删除异常(一个系的学生全部毕业)</li></ol><ul><li><pre><code>删除操作后,一些相关信息无法保存在数据库中
</code></pre></li></ul></li></ul><h3 id="要消除以上的-弊病-把上面的关系数据库模式分解为三个关系模式" tabindex="-1"><a class="header-anchor" href="#要消除以上的-弊病-把上面的关系数据库模式分解为三个关系模式"><span>要消除以上的“弊病”,把上面的关系数据库模式分解为三个关系模式</span></a></h3><ul><li>S(Sno,Sdept)</li><li><pre><code>SG(Sno,Cno,G)
</code></pre></li><li><pre><code>Dept(Sdept,MN)
</code></pre></li></ul><h2 id="函数依赖" tabindex="-1"><a class="header-anchor" href="#函数依赖"><span>函数依赖</span></a></h2><h3 id="类似于变量之间的单值函数关系" tabindex="-1"><a class="header-anchor" href="#类似于变量之间的单值函数关系"><span>类似于变量之间的单值函数关系</span></a></h3><h3 id="y-f-x-其中自变量x的值-决定一个唯一的函数值y" tabindex="-1"><a class="header-anchor" href="#y-f-x-其中自变量x的值-决定一个唯一的函数值y"><span>Y=F(X),其中自变量X的值,决定一个唯一的函数值Y</span></a></h3><h3 id="在一个关系模式里的属性-由于它在不同元组里属性值可能不同-由此可以把关系中的属性看作变量" tabindex="-1"><a class="header-anchor" href="#在一个关系模式里的属性-由于它在不同元组里属性值可能不同-由此可以把关系中的属性看作变量"><span>在一个关系模式里的属性,由于它在不同元组里属性值可能不同,由此可以把关系中的属性看作变量</span></a></h3><h3 id="一个属性与另一个属性在取值上可能存在制约关系" tabindex="-1"><a class="header-anchor" href="#一个属性与另一个属性在取值上可能存在制约关系"><span>一个属性与另一个属性在取值上可能存在制约关系</span></a></h3><h3 id="函数依赖就是属性间的逻辑依赖关系" tabindex="-1"><a class="header-anchor" href="#函数依赖就是属性间的逻辑依赖关系"><span>函数依赖就是属性间的逻辑依赖关系</span></a></h3><h3 id="定义1-设r-u-是一个关系模式-u是r的属性集合-x和y是u的子集-对于r-u-的任何一个可能的关系r-如果r中不存在两个元组-它们在x上的属性值相同-而在y上的属性值不同-则称x函数决定y-或y函数依赖于x-记作-x-y" tabindex="-1"><a class="header-anchor" href="#定义1-设r-u-是一个关系模式-u是r的属性集合-x和y是u的子集-对于r-u-的任何一个可能的关系r-如果r中不存在两个元组-它们在x上的属性值相同-而在y上的属性值不同-则称x函数决定y-或y函数依赖于x-记作-x-y"><span>定义1 设R(U)是一个关系模式,U是R的属性集合,X和Y是U的子集.对于R(U)的任何一个可能的关系r,如果r中不存在两个元组,它们在X上的属性值相同,而在Y上的属性值不同,则称X函数决定Y,或Y函数依赖于X,记作:X Y.</span></a></h3><h3 id="x通常称为-决定因素" tabindex="-1"><a class="header-anchor" href="#x通常称为-决定因素"><span>X通常称为“决定因素”</span></a></h3><h3 id="几点说明" tabindex="-1"><a class="header-anchor" href="#几点说明"><span>几点说明</span></a></h3><ul><li><ol><li>函数依赖是语义范畴的概念.它反映了一种语义完整性约束,只能根据语义来确定一个函数依赖.</li></ol></li><li><ol start="2"><li>函数依赖是指关系R模式的所有关系元组均应满足的约束条件,而不是关系模式中的某个或某些元组满足的约束条件</li></ol></li><li><ol start="3"><li>函数依赖与属性间的联系类型有关</li></ol><ul><li>(1)若属性X和Y之间有“一对一”的联系,</li><li>(2)若属性X和Y之间有“多对一”的联系,</li><li>(3)若属性X和Y之间有“多对多”的联系,</li></ul></li><li><ol start="4"><li>如果X Y,并且Y不是X的子集,则称X Y是非平凡的函数依赖;如果Y是X的子集,则称X Y是平凡的函数依赖;</li></ol></li></ul><h2 id="完全函数依赖与部分函数依赖" tabindex="-1"><a class="header-anchor" href="#完全函数依赖与部分函数依赖"><span>完全函数依赖与部分函数依赖</span></a></h2><h3 id="完全函数依赖" tabindex="-1"><a class="header-anchor" href="#完全函数依赖"><span>完全函数依赖</span></a></h3><h3 id="部分函数依赖" tabindex="-1"><a class="header-anchor" href="#部分函数依赖"><span>部分函数依赖</span></a></h3><h2 id="码的形式定义" tabindex="-1"><a class="header-anchor" href="#码的形式定义"><span>码的形式定义</span></a></h2><h3 id="候选码的两个性质" tabindex="-1"><a class="header-anchor" href="#候选码的两个性质"><span>候选码的两个性质</span></a></h3><ul><li><ol><li>标识的唯一性: 对于R(U)中的每一元组,K的值确定后,该元组就相应确定了.</li></ol></li><li><ol start="2"><li>无冗余性: K是属性组的情况下,K的任何一部分都不能唯一标识该元组(定义中的完全函数依赖的意义)</li></ol></li></ul><h2 id="规范化" tabindex="-1"><a class="header-anchor" href="#规范化"><span>规范化</span></a></h2><h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h3><ul><li>用几个简单的关系去取代原来结构复杂的关系的过程叫做关系规范化.</li><li>规范化理论是研究如何把一个不好的关系模式转化为好的关系模式的理论</li><li>规范化理论是E.E.Codd在1971年首先提出的</li><li>规范化理论是数据库设计过程中的一个非常有用的辅助工具</li></ul><h3 id="范式" tabindex="-1"><a class="header-anchor" href="#范式"><span>范式</span></a></h3><ul><li>简介 <ul><li>规范化理论是围绕着范式建立的.</li><li>满足不同程度要求的约束集则称为不同的范式.</li><li>如果一个关系满足某个指定的约束集,则称它属于某个特定的范式.</li><li>较高层次的范式比较低层次的范式具有“更合乎要求的性质”</li><li>一个低一级范式的关系模式,通过投影运算可以转化为若干个高一级范式的关系模式的集合,这个过程叫做规范化.</li><li>如果一个关系满足某个范式要求,则它也会满足较其级别低的所有范式的要求</li></ul></li><li>范式层次</li><li>第一范式(1NF) <ul><li>定义5: 在关系模式R中的每一个具体关系r中,如果每个属性值都是不可再分的最小数据单位,则称R是第一范式的关系,记作R∈1NF.</li><li>数据库理论研究的是规范化关系.</li><li>1NF规范化: 把非规范化关系规范提高到1NF关系模式的集合.</li></ul></li><li>第二范式(2NF) <ul><li>定义6: 若关系模式R∈1NF,且每个非主属性都完全依赖于R的任意候选码,则关系模式R属于第二范式,记作R ∈2NF.</li><li>2NF规范化是把1NF关系模式规范提高到变成2NF关系模式的集合.</li><li>从1NF中消除非主属性对候选码的部分函数依赖,则获得2NF关系.</li><li>举例:UN(Sno,Cno,G,SDN,MN)</li></ul></li><li>第三范式(3NF) <ul><li>定义7: 若关系模式R∈2NF,且每个非主属性都不传递依赖于R的任意候选码,则R∈3NF.</li><li>从2NF关系中,消除非主属性对码的传递依赖函数而获得3NF关系</li><li>R∈3NF,则每个非主属性既不部分依赖,也不传递依赖于R的任何候选码.</li><li>3NF的规范化</li></ul></li><li>BCNF范式 <ul><li>3NF的不完善性 <ul><li>定义8: 若R∈1NF,且R中每个决定因素都是候选码,则R ∈BCNF.</li><li>满足BCNF的关系将消除任何属性对候选码的部分依赖与传递依赖</li><li>应用BCNF定义时,可直接判断1NF是否属于BCNF</li><li>BCNF规范化</li></ul></li></ul></li></ul>`,35)]))}const d=e(t,[["render",r],["__file","关系数据库设计理论.html.vue"]]),o=JSON.parse('{"path":"/posts/Database/MySQL/%E5%85%B3%E7%B3%BB%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AE%BE%E8%AE%A1%E7%90%86%E8%AE%BA.html","title":"6、关系数据库设计理论","lang":"zh-CN","frontmatter":{"title":"6、关系数据库设计理论","date":"2024-03-10 11:59","category":["数据库"],"tag":["MySQL"],"description":"关系数据库设计理论 设计一个好的关系数据库系统，关键是要设计一个好的数据库模式（数据库逻辑设计问题） 数据库逻辑设计主要解决的问题 关系数据库应该组织成几个关系模式 关系模式中包括哪些属性 “不好”的数据库设计 举例：为学校设计一个关系数据库 关系模式: UN(Sno,Cno,G,Sdept,MN) Sno:描述学生 根据对现实世界的分析,可得出:Sn...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/MySQL/%E5%85%B3%E7%B3%BB%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AE%BE%E8%AE%A1%E7%90%86%E8%AE%BA.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"6、关系数据库设计理论"}],["meta",{"property":"og:description","content":"关系数据库设计理论 设计一个好的关系数据库系统，关键是要设计一个好的数据库模式（数据库逻辑设计问题） 数据库逻辑设计主要解决的问题 关系数据库应该组织成几个关系模式 关系模式中包括哪些属性 “不好”的数据库设计 举例：为学校设计一个关系数据库 关系模式: UN(Sno,Cno,G,Sdept,MN) Sno:描述学生 根据对现实世界的分析,可得出:Sn..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2024-03-10T11:59:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6、关系数据库设计理论\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-10T11:59:00.000Z\\",\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"设计一个好的关系数据库系统，关键是要设计一个好的数据库模式（数据库逻辑设计问题）","slug":"设计一个好的关系数据库系统-关键是要设计一个好的数据库模式-数据库逻辑设计问题","link":"#设计一个好的关系数据库系统-关键是要设计一个好的数据库模式-数据库逻辑设计问题","children":[]},{"level":2,"title":"数据库逻辑设计主要解决的问题","slug":"数据库逻辑设计主要解决的问题","link":"#数据库逻辑设计主要解决的问题","children":[{"level":3,"title":"关系数据库应该组织成几个关系模式","slug":"关系数据库应该组织成几个关系模式","link":"#关系数据库应该组织成几个关系模式","children":[]},{"level":3,"title":"关系模式中包括哪些属性","slug":"关系模式中包括哪些属性","link":"#关系模式中包括哪些属性","children":[]}]},{"level":2,"title":"“不好”的数据库设计","slug":"不好-的数据库设计","link":"#不好-的数据库设计","children":[{"level":3,"title":"举例：为学校设计一个关系数据库","slug":"举例-为学校设计一个关系数据库","link":"#举例-为学校设计一个关系数据库","children":[]},{"level":3,"title":"关系模式: UN(Sno,Cno,G,Sdept,MN)","slug":"关系模式-un-sno-cno-g-sdept-mn","link":"#关系模式-un-sno-cno-g-sdept-mn","children":[]},{"level":3,"title":"","slug":"","link":"#","children":[]},{"level":3,"title":"对数据库操作时,会出现以下问题","slug":"对数据库操作时-会出现以下问题","link":"#对数据库操作时-会出现以下问题","children":[]},{"level":3,"title":"要消除以上的“弊病”,把上面的关系数据库模式分解为三个关系模式","slug":"要消除以上的-弊病-把上面的关系数据库模式分解为三个关系模式","link":"#要消除以上的-弊病-把上面的关系数据库模式分解为三个关系模式","children":[]}]},{"level":2,"title":"函数依赖","slug":"函数依赖","link":"#函数依赖","children":[{"level":3,"title":"类似于变量之间的单值函数关系","slug":"类似于变量之间的单值函数关系","link":"#类似于变量之间的单值函数关系","children":[]},{"level":3,"title":"Y=F(X),其中自变量X的值,决定一个唯一的函数值Y","slug":"y-f-x-其中自变量x的值-决定一个唯一的函数值y","link":"#y-f-x-其中自变量x的值-决定一个唯一的函数值y","children":[]},{"level":3,"title":"在一个关系模式里的属性,由于它在不同元组里属性值可能不同,由此可以把关系中的属性看作变量","slug":"在一个关系模式里的属性-由于它在不同元组里属性值可能不同-由此可以把关系中的属性看作变量","link":"#在一个关系模式里的属性-由于它在不同元组里属性值可能不同-由此可以把关系中的属性看作变量","children":[]},{"level":3,"title":"一个属性与另一个属性在取值上可能存在制约关系","slug":"一个属性与另一个属性在取值上可能存在制约关系","link":"#一个属性与另一个属性在取值上可能存在制约关系","children":[]},{"level":3,"title":"函数依赖就是属性间的逻辑依赖关系","slug":"函数依赖就是属性间的逻辑依赖关系","link":"#函数依赖就是属性间的逻辑依赖关系","children":[]},{"level":3,"title":"定义1 设R(U)是一个关系模式,U是R的属性集合,X和Y是U的子集.对于R(U)的任何一个可能的关系r,如果r中不存在两个元组,它们在X上的属性值相同,而在Y上的属性值不同,则称X函数决定Y,或Y函数依赖于X,记作:X  Y.","slug":"定义1-设r-u-是一个关系模式-u是r的属性集合-x和y是u的子集-对于r-u-的任何一个可能的关系r-如果r中不存在两个元组-它们在x上的属性值相同-而在y上的属性值不同-则称x函数决定y-或y函数依赖于x-记作-x-y","link":"#定义1-设r-u-是一个关系模式-u是r的属性集合-x和y是u的子集-对于r-u-的任何一个可能的关系r-如果r中不存在两个元组-它们在x上的属性值相同-而在y上的属性值不同-则称x函数决定y-或y函数依赖于x-记作-x-y","children":[]},{"level":3,"title":"X通常称为“决定因素”","slug":"x通常称为-决定因素","link":"#x通常称为-决定因素","children":[]},{"level":3,"title":"几点说明","slug":"几点说明","link":"#几点说明","children":[]}]},{"level":2,"title":"完全函数依赖与部分函数依赖","slug":"完全函数依赖与部分函数依赖","link":"#完全函数依赖与部分函数依赖","children":[{"level":3,"title":"完全函数依赖","slug":"完全函数依赖","link":"#完全函数依赖","children":[]},{"level":3,"title":"部分函数依赖","slug":"部分函数依赖","link":"#部分函数依赖","children":[]}]},{"level":2,"title":"码的形式定义","slug":"码的形式定义","link":"#码的形式定义","children":[{"level":3,"title":"候选码的两个性质","slug":"候选码的两个性质","link":"#候选码的两个性质","children":[]}]},{"level":2,"title":"规范化","slug":"规范化","link":"#规范化","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"范式","slug":"范式","link":"#范式","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.31,"words":1593},"filePathRelative":"posts/Database/MySQL/关系数据库设计理论.md","localizedDate":"2024年3月10日","excerpt":"\\n<h2>设计一个好的关系数据库系统，关键是要设计一个好的数据库模式（数据库逻辑设计问题）</h2>\\n<h2>数据库逻辑设计主要解决的问题</h2>\\n<h3>关系数据库应该组织成几个关系模式</h3>\\n<h3>关系模式中包括哪些属性</h3>\\n<h2>“不好”的数据库设计</h2>\\n<h3>举例：为学校设计一个关系数据库</h3>\\n<h3>关系模式: UN(Sno,Cno,G,Sdept,MN)</h3>\\n<ul>\\n<li>Sno:描述学生</li>\\n<li>\\n<pre><code>    Sdept:描述系名\\n</code></pre>\\n</li>\\n<li>\\n<pre><code>    MN:描述系主任\\n</code></pre>\\n</li>\\n<li>\\n<pre><code>    Cno:描述课程\\n</code></pre>\\n</li>\\n<li>\\n<pre><code>    G:描述学习成绩\\n</code></pre>\\n</li>\\n<li>根据对现实世界的分析,可得出:Sno,Cno是码</li>\\n<li>按照关系模式UN装入部分数据</li>\\n</ul>","autoDesc":true}');export{d as comp,o as data};
