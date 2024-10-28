import{_ as t,c as a,a as l,o as n}from"./app-BOcQBfH9.js";const i={};function r(s,e){return n(),a("div",null,e[0]||(e[0]=[l(`<h1 id="查询优化" tabindex="-1"><a class="header-anchor" href="#查询优化"><span>查询优化</span></a></h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><h3 id="关系系统和关系模型是两个密切相关而有不同的概念。支持关系模型的数据库管理系统称为关系系统。但是关系模型中并非每一部分都是同等重要的-所以我们不苛求完全支持关系模型的系统才能称为关系系统。因此-我们给出一个关系系统的最小要求以及分类的定义。" tabindex="-1"><a class="header-anchor" href="#关系系统和关系模型是两个密切相关而有不同的概念。支持关系模型的数据库管理系统称为关系系统。但是关系模型中并非每一部分都是同等重要的-所以我们不苛求完全支持关系模型的系统才能称为关系系统。因此-我们给出一个关系系统的最小要求以及分类的定义。"><span>关系系统和关系模型是两个密切相关而有不同的概念。支持关系模型的数据库管理系统称为关系系统。但是关系模型中并非每一部分都是同等重要的，所以我们不苛求完全支持关系模型的系统才能称为关系系统。因此，我们给出一个关系系统的最小要求以及分类的定义。</span></a></h3><h3 id="关系系统的定义" tabindex="-1"><a class="header-anchor" href="#关系系统的定义"><span>关系系统的定义</span></a></h3><ul><li>1.支持关系数据库（关系数据结构） <ul><li><pre><code>  从用户观点看，数据库由表构成，并且只有表这一种结构。
</code></pre></li></ul></li><li>2.支持选择、投影和（自然）连接运算，对这些运算不必要求定义任何物理存取路径 <ul><li><pre><code>   当然并不要求关系系统的选择、投影、连接运算和关系代数的相应运算完全一样，而只要求有等价的这三种运算功能就行。 
</code></pre></li></ul></li></ul><h2 id="查询优化-1" tabindex="-1"><a class="header-anchor" href="#查询优化-1"><span>查询优化</span></a></h2><h3 id="查询优化-对于给定的查询选择代价最小的操作序列-使查询过程既省时间-具有较高的效率-这就是所谓的查询优化。对于关系数据库系统-用户只要提出-做什么-而由系统解决-怎么做-的问题。具体来说-是数据库管理系统中的查询处理程序自动实现查询优化。" tabindex="-1"><a class="header-anchor" href="#查询优化-对于给定的查询选择代价最小的操作序列-使查询过程既省时间-具有较高的效率-这就是所谓的查询优化。对于关系数据库系统-用户只要提出-做什么-而由系统解决-怎么做-的问题。具体来说-是数据库管理系统中的查询处理程序自动实现查询优化。"><span>查询优化：对于给定的查询选择代价最小的操作序列，使查询过程既省时间，具有较高的效率，这就是所谓的查询优化。对于关系数据库系统，用户只要提出“做什么”，而由系统解决“怎么做”的问题。具体来说，是数据库管理系统中的查询处理程序自动实现查询优化。</span></a></h3><h3 id="关系查询优化是影响rdbms性能的关键因素。关系系统的查询优化既是rdbms实现的关键技术又是关系系统的优点所在。" tabindex="-1"><a class="header-anchor" href="#关系查询优化是影响rdbms性能的关键因素。关系系统的查询优化既是rdbms实现的关键技术又是关系系统的优点所在。"><span>关系查询优化是影响RDBMS性能的关键因素。关系系统的查询优化既是RDBMS实现的关键技术又是关系系统的优点所在。</span></a></h3><h3 id="查询优化的优点不仅在于用户不必考虑如何最好地表达查询以获得较好的效率-而且在于系统可以比用户程序的-优化-做得更好。" tabindex="-1"><a class="header-anchor" href="#查询优化的优点不仅在于用户不必考虑如何最好地表达查询以获得较好的效率-而且在于系统可以比用户程序的-优化-做得更好。"><span>查询优化的优点不仅在于用户不必考虑如何最好地表达查询以获得较好的效率，而且在于系统可以比用户程序的“优化”做得更好。</span></a></h3><h3 id="查询优化的一般准则" tabindex="-1"><a class="header-anchor" href="#查询优化的一般准则"><span>查询优化的一般准则</span></a></h3><ul><li>1.选择运算应尽可能先做。在优化策略中这是最重要、最基本的一条。它常常可使执行时节约几个数量级，因为选择运算一般使计算的中间结果大大变小</li><li>2.在执行连接前对关系适当地预处理。预处理方法主要有两种，在连接属性上建立索引和对关系排序 。</li><li>3.把投影运算和选择运算同时进行。如有若干投影和选择运算，并且它们都对同一个关系操作，则可以在扫描此关系的同时完成所有的这些运算以避免重复扫描关系。</li><li>4.把投影同其前或其后的双目运算结合起来，没有必要为了去掉某些字段而扫描一遍关系</li><li>5.杷某些选择同在它前面要执行的笛卡尔积结合起来成为一个连接运算，连接特别是等值连接运算要比同样关系上的笛卡尔积省很多时间</li><li>6.找出公共子表达式。<br><em>XMind: ZEN - Trial Version</em></li></ul>`,11)]))}const c=t(i,[["render",r],["__file","查询优化.html.vue"]]),d=JSON.parse('{"path":"/posts/Database/MySQL/%E6%9F%A5%E8%AF%A2%E4%BC%98%E5%8C%96.html","title":"9、查询优化","lang":"zh-CN","frontmatter":{"title":"9、查询优化","date":"2024-03-10 14:59","category":["数据库"],"tag":["MySQL"],"description":"查询优化 概述 关系系统和关系模型是两个密切相关而有不同的概念。支持关系模型的数据库管理系统称为关系系统。但是关系模型中并非每一部分都是同等重要的，所以我们不苛求完全支持关系模型的系统才能称为关系系统。因此，我们给出一个关系系统的最小要求以及分类的定义。 关系系统的定义 1.支持关系数据库（关系数据结构） 2.支持选择、投影和（自然）连接运算，对这些运...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/MySQL/%E6%9F%A5%E8%AF%A2%E4%BC%98%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"9、查询优化"}],["meta",{"property":"og:description","content":"查询优化 概述 关系系统和关系模型是两个密切相关而有不同的概念。支持关系模型的数据库管理系统称为关系系统。但是关系模型中并非每一部分都是同等重要的，所以我们不苛求完全支持关系模型的系统才能称为关系系统。因此，我们给出一个关系系统的最小要求以及分类的定义。 关系系统的定义 1.支持关系数据库（关系数据结构） 2.支持选择、投影和（自然）连接运算，对这些运..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2024-03-10T14:59:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9、查询优化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-10T14:59:00.000Z\\",\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[{"level":3,"title":"关系系统和关系模型是两个密切相关而有不同的概念。支持关系模型的数据库管理系统称为关系系统。但是关系模型中并非每一部分都是同等重要的，所以我们不苛求完全支持关系模型的系统才能称为关系系统。因此，我们给出一个关系系统的最小要求以及分类的定义。","slug":"关系系统和关系模型是两个密切相关而有不同的概念。支持关系模型的数据库管理系统称为关系系统。但是关系模型中并非每一部分都是同等重要的-所以我们不苛求完全支持关系模型的系统才能称为关系系统。因此-我们给出一个关系系统的最小要求以及分类的定义。","link":"#关系系统和关系模型是两个密切相关而有不同的概念。支持关系模型的数据库管理系统称为关系系统。但是关系模型中并非每一部分都是同等重要的-所以我们不苛求完全支持关系模型的系统才能称为关系系统。因此-我们给出一个关系系统的最小要求以及分类的定义。","children":[]},{"level":3,"title":"关系系统的定义","slug":"关系系统的定义","link":"#关系系统的定义","children":[]}]},{"level":2,"title":"查询优化","slug":"查询优化-1","link":"#查询优化-1","children":[{"level":3,"title":"查询优化：对于给定的查询选择代价最小的操作序列，使查询过程既省时间，具有较高的效率，这就是所谓的查询优化。对于关系数据库系统，用户只要提出“做什么”，而由系统解决“怎么做”的问题。具体来说，是数据库管理系统中的查询处理程序自动实现查询优化。","slug":"查询优化-对于给定的查询选择代价最小的操作序列-使查询过程既省时间-具有较高的效率-这就是所谓的查询优化。对于关系数据库系统-用户只要提出-做什么-而由系统解决-怎么做-的问题。具体来说-是数据库管理系统中的查询处理程序自动实现查询优化。","link":"#查询优化-对于给定的查询选择代价最小的操作序列-使查询过程既省时间-具有较高的效率-这就是所谓的查询优化。对于关系数据库系统-用户只要提出-做什么-而由系统解决-怎么做-的问题。具体来说-是数据库管理系统中的查询处理程序自动实现查询优化。","children":[]},{"level":3,"title":"关系查询优化是影响RDBMS性能的关键因素。关系系统的查询优化既是RDBMS实现的关键技术又是关系系统的优点所在。","slug":"关系查询优化是影响rdbms性能的关键因素。关系系统的查询优化既是rdbms实现的关键技术又是关系系统的优点所在。","link":"#关系查询优化是影响rdbms性能的关键因素。关系系统的查询优化既是rdbms实现的关键技术又是关系系统的优点所在。","children":[]},{"level":3,"title":"查询优化的优点不仅在于用户不必考虑如何最好地表达查询以获得较好的效率，而且在于系统可以比用户程序的“优化”做得更好。","slug":"查询优化的优点不仅在于用户不必考虑如何最好地表达查询以获得较好的效率-而且在于系统可以比用户程序的-优化-做得更好。","link":"#查询优化的优点不仅在于用户不必考虑如何最好地表达查询以获得较好的效率-而且在于系统可以比用户程序的-优化-做得更好。","children":[]},{"level":3,"title":"查询优化的一般准则","slug":"查询优化的一般准则","link":"#查询优化的一般准则","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.56,"words":768},"filePathRelative":"posts/Database/MySQL/查询优化.md","localizedDate":"2024年3月10日","excerpt":"\\n<h2>概述</h2>\\n<h3>关系系统和关系模型是两个密切相关而有不同的概念。支持关系模型的数据库管理系统称为关系系统。但是关系模型中并非每一部分都是同等重要的，所以我们不苛求完全支持关系模型的系统才能称为关系系统。因此，我们给出一个关系系统的最小要求以及分类的定义。</h3>\\n<h3>关系系统的定义</h3>\\n<ul>\\n<li>1.支持关系数据库（关系数据结构）\\n<ul>\\n<li>\\n<pre><code>  从用户观点看，数据库由表构成，并且只有表这一种结构。\\n</code></pre>\\n</li>\\n</ul>\\n</li>\\n<li>2.支持选择、投影和（自然）连接运算，对这些运算不必要求定义任何物理存取路径\\n<ul>\\n<li>\\n<pre><code>   当然并不要求关系系统的选择、投影、连接运算和关系代数的相应运算完全一样，而只要求有等价的这三种运算功能就行。 \\n</code></pre>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{c as comp,d as data};
