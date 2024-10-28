import{_ as l,c as t,a as r,o as n}from"./app-BOcQBfH9.js";const a={};function s(o,e){return n(),t("div",null,e[0]||(e[0]=[r('<h1 id="mysql知识体系详解" tabindex="-1"><a class="header-anchor" href="#mysql知识体系详解"><span>MySQL知识体系详解</span></a></h1><h2 id="知识体系" tabindex="-1"><a class="header-anchor" href="#知识体系"><span>知识体系</span></a></h2><p><em>相关文章</em></p><blockquote><p>** 掌握MySQL数据库**：在理解了SQL语言后，开始进阶MySQL相关的知识点吧（在开始前，建议你完整看一本MySQl相关的书，作为你的知识体系基础）；这里不会讲如何安装MySQL或者如何使用，因为这是容易的，而是会关注一些有助于我们构建MySQL相关知识体系的知识点等。</p></blockquote><ul><li><p><a href="https://pdai.tech/md/db/sql-mysql/sql-mysql-theory.html" target="_blank" rel="noopener noreferrer">MySQL - 数据类型</a></p><ul><li>本文主要整理MySQL中数据字段类型。</li></ul></li><li><p><a href="https://pdai.tech/md/db/sql-mysql/sql-mysql-engine.html" target="_blank" rel="noopener noreferrer">MySQL - 存储引擎</a></p><ul><li>本文主要介绍MySQL中的存储引擎。</li></ul></li><li><p><a href="https://pdai.tech/md/db/sql-mysql/sql-mysql-b-tree.html" target="_blank" rel="noopener noreferrer">MySQL - 索引(B+树)</a></p></li><li><p><a href="https://pdai.tech/md/db/sql-mysql/sql-mysql-performance.html" target="_blank" rel="noopener noreferrer">MySQL - 性能优化</a></p></li><li><p><a href="https://pdai.tech/md/db/sql-mysql/sql-mysql-devide.html" target="_blank" rel="noopener noreferrer">MySQL - 分表分库</a></p></li><li><p><a href="https://pdai.tech/md/db/sql-mysql/sql-mysql-slave.html" target="_blank" rel="noopener noreferrer">MySQL - 主从复制与读写分离</a></p></li><li><p><a href="https://pdai.tech/md/db/sql-mysql/sql-mysql-execute.html" target="_blank" rel="noopener noreferrer">MySQL - 一条 SQL 的执行过程详解</a></p><ul><li>天天和数据库打交道，一天能写上几十条 SQL 语句，但你知道我们的系统是如何和数据库交互的吗？MySQL 如何帮我们存储数据、又是如何帮我们管理事务？....是不是感觉真的除了写几个 「select * from dual」外基本脑子一片空白？这篇文章就将带你走进 MySQL 的世界，让你彻底了解系统到底是如何和 MySQL 交互的，MySQL 在接受到我们发送的 SQL 语句时又分别做了哪些事情。</li></ul></li><li><p><a href="https://pdai.tech/md/db/sql-mysql/sql-mysql-sql-parser.html" target="_blank" rel="noopener noreferrer">MySQL - MySQL中SQL是如何解析的</a></p><ul><li>前文我们分享了一篇文章学习一条SQL是如何在数据库中执行的，其中有一个阶段是SQL的解析。这个阶段对于更全面的SQL优化功能；多维度的慢查询分析；辅助故障分析等都有很大帮助。本文主要介绍一篇美团技术团队关于SQL解析和应用的文章，希望能给一些启示。</li></ul></li><li><p><a href="https://pdai.tech/md/db/sql-mysql/sql-mysql-index-improve-mt.html" target="_blank" rel="noopener noreferrer">大厂实践 - 美团: MySQL索引原理及慢查询优化</a></p><ul><li>目前常用的 SQL 优化方式包括但不限于：业务层优化、SQL逻辑优化、索引优化等。其中索引优化通常通过调整索引或新增索引从而达到 SQL 优化的目的，索引优化往往可以在短时间内产生非常巨大的效果。本文旨在以开发工程师的角度来解释数据库索引的原理和如何优化慢查询。</li></ul></li><li><p><a href="https://pdai.tech/md/db/sql-mysql/sql-mysql-sql-costmodel-mt.html" target="_blank" rel="noopener noreferrer">大厂实践 - 美团: 基于代价的慢查询优化建议</a></p><ul><li>前文我们介绍了优化慢查询最直接有效的方法就是选用一个查询效率高的索引, 也介绍了索引优化工具SQLAdvisor。关于高效率的索引推荐，主要在日常工作中，基于经验规则的推荐随处可见，对于简单的SQL，如<code>select * from sync_test1 where name like &#39;Bobby%&#39;</code>，直接添加索引IX(name) 就可以取得不错的效果；但对于稍微复杂点的SQL，如<code>select * from sync_test1 where name like &#39;Bobby%&#39; and dt &gt; &#39;2021-07-06&#39;</code>，到底选择IX(name)、IX(dt)、IX(dt,name) 还是IX(name,dt)，该方法也无法给出准确的回答。更别说像多表Join、子查询这样复杂的场景了。所以采用基于代价的推荐来解决该问题会更加普适，因为基于代价的方法使用了和数据库优化器相同的方式，去量化评估所有的可能性，选出的是执行SQL耗费代价最小的索引。</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/db/sql-mysql/sql-mysql-sql-costmodel-mt.html" target="_blank" rel="noopener noreferrer"><strong>大厂实践 - 美团: 基于代价的慢查询优化建议</strong></a></p></li></ul>',5)]))}const m=l(a,[["render",s],["__file","sql-mysql-overview.html.vue"]]),i=JSON.parse(`{"path":"/posts/Database/MySQL/sql-mysql-overview.html","title":"MySQL知识体系详解","lang":"zh-CN","frontmatter":{"aliases":"MySQL知识体系详解","tags":null,"cssclass":null,"source":null,"order":10,"category":["Mysql","数据库"],"created":"2024-02-22 10:49","updated":"2024-03-13 09:45","description":"MySQL知识体系详解 知识体系 相关文章 ** 掌握MySQL数据库**：在理解了SQL语言后，开始进阶MySQL相关的知识点吧（在开始前，建议你完整看一本MySQl相关的书，作为你的知识体系基础）；这里不会讲如何安装MySQL或者如何使用，因为这是容易的，而是会关注一些有助于我们构建MySQL相关知识体系的知识点等。 MySQL - 数据类型 本文...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/MySQL/sql-mysql-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"MySQL知识体系详解"}],["meta",{"property":"og:description","content":"MySQL知识体系详解 知识体系 相关文章 ** 掌握MySQL数据库**：在理解了SQL语言后，开始进阶MySQL相关的知识点吧（在开始前，建议你完整看一本MySQl相关的书，作为你的知识体系基础）；这里不会讲如何安装MySQL或者如何使用，因为这是容易的，而是会关注一些有助于我们构建MySQL相关知识体系的知识点等。 MySQL - 数据类型 本文..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL知识体系详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"知识体系","slug":"知识体系","link":"#知识体系","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.22,"words":965},"filePathRelative":"posts/Database/MySQL/sql-mysql-overview.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>知识体系</h2>\\n<p><em>相关文章</em></p>\\n<blockquote>\\n<p>** 掌握MySQL数据库**：在理解了SQL语言后，开始进阶MySQL相关的知识点吧（在开始前，建议你完整看一本MySQl相关的书，作为你的知识体系基础）；这里不会讲如何安装MySQL或者如何使用，因为这是容易的，而是会关注一些有助于我们构建MySQL相关知识体系的知识点等。</p>\\n</blockquote>\\n<ul>\\n<li>\\n<p><a href=\\"https://pdai.tech/md/db/sql-mysql/sql-mysql-theory.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MySQL - 数据类型</a></p>\\n<ul>\\n<li>本文主要整理MySQL中数据字段类型。</li>\\n</ul>\\n</li>\\n<li>\\n<p><a href=\\"https://pdai.tech/md/db/sql-mysql/sql-mysql-engine.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MySQL - 存储引擎</a></p>\\n<ul>\\n<li>本文主要介绍MySQL中的存储引擎。</li>\\n</ul>\\n</li>\\n<li>\\n<p><a href=\\"https://pdai.tech/md/db/sql-mysql/sql-mysql-b-tree.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MySQL - 索引(B+树)</a></p>\\n</li>\\n<li>\\n<p><a href=\\"https://pdai.tech/md/db/sql-mysql/sql-mysql-performance.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MySQL - 性能优化</a></p>\\n</li>\\n<li>\\n<p><a href=\\"https://pdai.tech/md/db/sql-mysql/sql-mysql-devide.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MySQL - 分表分库</a></p>\\n</li>\\n<li>\\n<p><a href=\\"https://pdai.tech/md/db/sql-mysql/sql-mysql-slave.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MySQL - 主从复制与读写分离</a></p>\\n</li>\\n<li>\\n<p><a href=\\"https://pdai.tech/md/db/sql-mysql/sql-mysql-execute.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MySQL - 一条 SQL 的执行过程详解</a></p>\\n<ul>\\n<li>天天和数据库打交道，一天能写上几十条 SQL 语句，但你知道我们的系统是如何和数据库交互的吗？MySQL 如何帮我们存储数据、又是如何帮我们管理事务？....是不是感觉真的除了写几个 「select * from dual」外基本脑子一片空白？这篇文章就将带你走进 MySQL 的世界，让你彻底了解系统到底是如何和 MySQL 交互的，MySQL 在接受到我们发送的 SQL 语句时又分别做了哪些事情。</li>\\n</ul>\\n</li>\\n<li>\\n<p><a href=\\"https://pdai.tech/md/db/sql-mysql/sql-mysql-sql-parser.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MySQL - MySQL中SQL是如何解析的</a></p>\\n<ul>\\n<li>前文我们分享了一篇文章学习一条SQL是如何在数据库中执行的，其中有一个阶段是SQL的解析。这个阶段对于更全面的SQL优化功能；多维度的慢查询分析；辅助故障分析等都有很大帮助。本文主要介绍一篇美团技术团队关于SQL解析和应用的文章，希望能给一些启示。</li>\\n</ul>\\n</li>\\n<li>\\n<p><a href=\\"https://pdai.tech/md/db/sql-mysql/sql-mysql-index-improve-mt.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">大厂实践 - 美团: MySQL索引原理及慢查询优化</a></p>\\n<ul>\\n<li>目前常用的 SQL 优化方式包括但不限于：业务层优化、SQL逻辑优化、索引优化等。其中索引优化通常通过调整索引或新增索引从而达到 SQL 优化的目的，索引优化往往可以在短时间内产生非常巨大的效果。本文旨在以开发工程师的角度来解释数据库索引的原理和如何优化慢查询。</li>\\n</ul>\\n</li>\\n<li>\\n<p><a href=\\"https://pdai.tech/md/db/sql-mysql/sql-mysql-sql-costmodel-mt.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">大厂实践 - 美团: 基于代价的慢查询优化建议</a></p>\\n<ul>\\n<li>前文我们介绍了优化慢查询最直接有效的方法就是选用一个查询效率高的索引, 也介绍了索引优化工具SQLAdvisor。关于高效率的索引推荐，主要在日常工作中，基于经验规则的推荐随处可见，对于简单的SQL，如<code>select * from sync_test1 where name like 'Bobby%'</code>，直接添加索引IX(name) 就可以取得不错的效果；但对于稍微复杂点的SQL，如<code>select * from sync_test1 where name like 'Bobby%' and dt &gt; '2021-07-06'</code>，到底选择IX(name)、IX(dt)、IX(dt,name) 还是IX(name,dt)，该方法也无法给出准确的回答。更别说像多表Join、子查询这样复杂的场景了。所以采用基于代价的推荐来解决该问题会更加普适，因为基于代价的方法使用了和数据库优化器相同的方式，去量化评估所有的可能性，选出的是执行SQL耗费代价最小的索引。</li>\\n</ul>\\n<h2>参考文章</h2>\\n<p><a href=\\"https://pdai.tech/md/db/sql-mysql/sql-mysql-sql-costmodel-mt.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><strong>大厂实践 - 美团: 基于代价的慢查询优化建议</strong></a></p>\\n</li>\\n</ul>","autoDesc":true}`);export{m as comp,i as data};
