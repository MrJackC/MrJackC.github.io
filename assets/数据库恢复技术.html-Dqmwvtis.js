import{_ as a,c as e,a as i,o as n}from"./app-BQBjlK2G.js";const t={};function s(r,l){return n(),e("div",null,l[0]||(l[0]=[i('<h1 id="数据库恢复技术" tabindex="-1"><a class="header-anchor" href="#数据库恢复技术"><span>数据库恢复技术</span></a></h1><h2 id="什么是事务" tabindex="-1"><a class="header-anchor" href="#什么是事务"><span>什么是事务</span></a></h2><h3 id="事务-transaction-是用户定义的一个数据库操作序列-这些操作要么全做-要么全不做-是一个不可分割的工作单位" tabindex="-1"><a class="header-anchor" href="#事务-transaction-是用户定义的一个数据库操作序列-这些操作要么全做-要么全不做-是一个不可分割的工作单位"><span>事务(Transaction)是用户定义的一个数据库操作序列，这些操作要么全做，要么全不做，是一个不可分割的工作单位</span></a></h3><h3 id="事务和程序是两个概念" tabindex="-1"><a class="header-anchor" href="#事务和程序是两个概念"><span>事务和程序是两个概念</span></a></h3><ul><li>在关系数据库中，一个事务可以是一条SQL语句，一组SQL语句或整个程序</li><li>一个应用程序通常包含多个事务</li></ul><h3 id="事务是恢复和并发控制的基本单位" tabindex="-1"><a class="header-anchor" href="#事务是恢复和并发控制的基本单位"><span>事务是恢复和并发控制的基本单位</span></a></h3><h2 id="事务结束" tabindex="-1"><a class="header-anchor" href="#事务结束"><span>事务结束</span></a></h2><h3 id="commit" tabindex="-1"><a class="header-anchor" href="#commit"><span>COMMIT</span></a></h3><ul><li>事务正常结束</li><li>提交事务的所有操作（读+更新）</li><li>事务中所有对数据库的更新永久生效</li></ul><h3 id="rollback" tabindex="-1"><a class="header-anchor" href="#rollback"><span>ROLLBACK</span></a></h3><ul><li>事务异常终止 <ul><li>事务运行的过程中发生了故障，不能继续执行</li><li>回滚事务的所有更新操作</li><li>事务滚回到开始时的状态</li></ul></li></ul><h2 id="事务的特性-acid特性" tabindex="-1"><a class="header-anchor" href="#事务的特性-acid特性"><span>事务的特性(ACID特性)</span></a></h2><h3 id="原子性-atomicity" tabindex="-1"><a class="header-anchor" href="#原子性-atomicity"><span>原子性（Atomicity）</span></a></h3><ul><li>事务是数据库的逻辑工作单位</li><li>事务中包括的诸操作要么都做，要么都不做</li></ul><h3 id="一致性-consistency" tabindex="-1"><a class="header-anchor" href="#一致性-consistency"><span>一致性（Consistency）</span></a></h3><ul><li>事务执行的结果必须是使数据库从一个 一致性状态变到另一个一致性状态</li><li>一致性状态： <ul><li>数据库中只包含成功事务提交的结果</li></ul></li><li>不一致状态： <ul><li>数据库中包含失败事务的结果</li></ul></li></ul><h3 id="隔离性-isolation" tabindex="-1"><a class="header-anchor" href="#隔离性-isolation"><span>隔离性（Isolation）</span></a></h3><ul><li><p>对并发执行而言一个事务的执行不能被其他事务干扰</p></li><li><p>一个事务内部的操作及使用的数据对其他并发事务是隔离的</p></li><li><p>并发执行的各个事务之间不能互相干扰</p></li></ul><h3 id="持续性-durability" tabindex="-1"><a class="header-anchor" href="#持续性-durability"><span>持续性（Durability ）</span></a></h3><ul><li>持续性也称永久性（Permanence）</li><li>一个事务一旦提交，它对数据库中数据的改变就应该是永久性的。</li><li>接下来的其他操作或故障不应该对其执行结果有任何影响。</li></ul><h2 id="故障" tabindex="-1"><a class="header-anchor" href="#故障"><span>故障</span></a></h2><h3 id="故障原因" tabindex="-1"><a class="header-anchor" href="#故障原因"><span>故障原因</span></a></h3><ul><li>计算机硬件故障</li><li>系统软件和应用软件的错误</li><li>操作员的失误</li><li>恶意的破坏</li></ul><h3 id="故障的影响" tabindex="-1"><a class="header-anchor" href="#故障的影响"><span>故障的影响</span></a></h3><ul><li>运行事务非正常中断</li><li>破坏数据库</li></ul><h3 id="故障的种类" tabindex="-1"><a class="header-anchor" href="#故障的种类"><span>故障的种类</span></a></h3><ul><li>事务故障</li><li>系统故障</li><li>介质故障</li><li>计算机病毒</li></ul><h2 id="恢复操作的基本原理" tabindex="-1"><a class="header-anchor" href="#恢复操作的基本原理"><span>恢复操作的基本原理</span></a></h2><h3 id="恢复操作的基本原理-冗余" tabindex="-1"><a class="header-anchor" href="#恢复操作的基本原理-冗余"><span>恢复操作的基本原理：冗余</span></a></h3><h3 id="利用存储在系统其它地方的冗余数据来重建数据库中已被破坏或不正确的那部分数据" tabindex="-1"><a class="header-anchor" href="#利用存储在系统其它地方的冗余数据来重建数据库中已被破坏或不正确的那部分数据"><span>利用存储在系统其它地方的冗余数据来重建数据库中已被破坏或不正确的那部分数据</span></a></h3><h2 id="恢复的实现技术" tabindex="-1"><a class="header-anchor" href="#恢复的实现技术"><span>恢复的实现技术</span></a></h2><h3 id="数据转储-backup" tabindex="-1"><a class="header-anchor" href="#数据转储-backup"><span>数据转储（backup）</span></a></h3><h3 id="登录日志文件-logging" tabindex="-1"><a class="header-anchor" href="#登录日志文件-logging"><span>登录日志文件（logging）</span></a></h3><p><em>XMind: ZEN - Trial Version</em></p>',34)]))}const c=a(t,[["render",s],["__file","数据库恢复技术.html.vue"]]),o=JSON.parse('{"path":"/posts/Database/MySQL/%E6%95%B0%E6%8D%AE%E5%BA%93%E6%81%A2%E5%A4%8D%E6%8A%80%E6%9C%AF.html","title":"11、数据库恢复技术","lang":"zh-CN","frontmatter":{"title":"11、数据库恢复技术","date":"2024-03-10 16:59","category":["数据库"],"tag":["MySQL"],"description":"数据库恢复技术 什么是事务 事务(Transaction)是用户定义的一个数据库操作序列，这些操作要么全做，要么全不做，是一个不可分割的工作单位 事务和程序是两个概念 在关系数据库中，一个事务可以是一条SQL语句，一组SQL语句或整个程序 一个应用程序通常包含多个事务 事务是恢复和并发控制的基本单位 事务结束 COMMIT 事务正常结束 提交事务的所有...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/MySQL/%E6%95%B0%E6%8D%AE%E5%BA%93%E6%81%A2%E5%A4%8D%E6%8A%80%E6%9C%AF.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"11、数据库恢复技术"}],["meta",{"property":"og:description","content":"数据库恢复技术 什么是事务 事务(Transaction)是用户定义的一个数据库操作序列，这些操作要么全做，要么全不做，是一个不可分割的工作单位 事务和程序是两个概念 在关系数据库中，一个事务可以是一条SQL语句，一组SQL语句或整个程序 一个应用程序通常包含多个事务 事务是恢复和并发控制的基本单位 事务结束 COMMIT 事务正常结束 提交事务的所有..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2024-03-10T16:59:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"11、数据库恢复技术\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-10T16:59:00.000Z\\",\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"什么是事务","slug":"什么是事务","link":"#什么是事务","children":[{"level":3,"title":"事务(Transaction)是用户定义的一个数据库操作序列，这些操作要么全做，要么全不做，是一个不可分割的工作单位","slug":"事务-transaction-是用户定义的一个数据库操作序列-这些操作要么全做-要么全不做-是一个不可分割的工作单位","link":"#事务-transaction-是用户定义的一个数据库操作序列-这些操作要么全做-要么全不做-是一个不可分割的工作单位","children":[]},{"level":3,"title":"事务和程序是两个概念","slug":"事务和程序是两个概念","link":"#事务和程序是两个概念","children":[]},{"level":3,"title":"事务是恢复和并发控制的基本单位","slug":"事务是恢复和并发控制的基本单位","link":"#事务是恢复和并发控制的基本单位","children":[]}]},{"level":2,"title":"事务结束","slug":"事务结束","link":"#事务结束","children":[{"level":3,"title":"COMMIT","slug":"commit","link":"#commit","children":[]},{"level":3,"title":"ROLLBACK","slug":"rollback","link":"#rollback","children":[]}]},{"level":2,"title":"事务的特性(ACID特性)","slug":"事务的特性-acid特性","link":"#事务的特性-acid特性","children":[{"level":3,"title":"原子性（Atomicity）","slug":"原子性-atomicity","link":"#原子性-atomicity","children":[]},{"level":3,"title":"一致性（Consistency）","slug":"一致性-consistency","link":"#一致性-consistency","children":[]},{"level":3,"title":"隔离性（Isolation）","slug":"隔离性-isolation","link":"#隔离性-isolation","children":[]},{"level":3,"title":"持续性（Durability ）","slug":"持续性-durability","link":"#持续性-durability","children":[]}]},{"level":2,"title":"故障","slug":"故障","link":"#故障","children":[{"level":3,"title":"故障原因","slug":"故障原因","link":"#故障原因","children":[]},{"level":3,"title":"故障的影响","slug":"故障的影响","link":"#故障的影响","children":[]},{"level":3,"title":"故障的种类","slug":"故障的种类","link":"#故障的种类","children":[]}]},{"level":2,"title":"恢复操作的基本原理","slug":"恢复操作的基本原理","link":"#恢复操作的基本原理","children":[{"level":3,"title":"恢复操作的基本原理：冗余","slug":"恢复操作的基本原理-冗余","link":"#恢复操作的基本原理-冗余","children":[]},{"level":3,"title":"利用存储在系统其它地方的冗余数据来重建数据库中已被破坏或不正确的那部分数据","slug":"利用存储在系统其它地方的冗余数据来重建数据库中已被破坏或不正确的那部分数据","link":"#利用存储在系统其它地方的冗余数据来重建数据库中已被破坏或不正确的那部分数据","children":[]}]},{"level":2,"title":"恢复的实现技术","slug":"恢复的实现技术","link":"#恢复的实现技术","children":[{"level":3,"title":"数据转储（backup）","slug":"数据转储-backup","link":"#数据转储-backup","children":[]},{"level":3,"title":"登录日志文件（logging）","slug":"登录日志文件-logging","link":"#登录日志文件-logging","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.14,"words":641},"filePathRelative":"posts/Database/MySQL/数据库恢复技术.md","localizedDate":"2024年3月10日","excerpt":"\\n<h2>什么是事务</h2>\\n<h3>事务(Transaction)是用户定义的一个数据库操作序列，这些操作要么全做，要么全不做，是一个不可分割的工作单位</h3>\\n<h3>事务和程序是两个概念</h3>\\n<ul>\\n<li>在关系数据库中，一个事务可以是一条SQL语句，一组SQL语句或整个程序</li>\\n<li>一个应用程序通常包含多个事务</li>\\n</ul>\\n<h3>事务是恢复和并发控制的基本单位</h3>\\n<h2>事务结束</h2>\\n<h3>COMMIT</h3>\\n<ul>\\n<li>事务正常结束</li>\\n<li>提交事务的所有操作（读+更新）</li>\\n<li>事务中所有对数据库的更新永久生效</li>\\n</ul>","autoDesc":true}');export{c as comp,o as data};
