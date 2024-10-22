import{_ as n,c as i,a as e,o as t}from"./app-CQys7GfP.js";const o={};function a(r,l){return t(),i("div",null,l[0]||(l[0]=[e('<h1 id="锁机制锁" tabindex="-1"><a class="header-anchor" href="#锁机制锁"><span>锁机制锁</span></a></h1><h2 id="_1-myisam-和innodb-存储引擎使用的锁" tabindex="-1"><a class="header-anchor" href="#_1-myisam-和innodb-存储引擎使用的锁"><span>1. MyISAM 和InnoDB 存储引擎使用的锁</span></a></h2><ul><li>MyISAM 采用的是表级锁（table-level locking）</li><li>InnoDB 支持行级锁（row-level locking）和表级锁，默认行为是行级锁</li></ul><h2 id="_2-表级锁和行级锁对比" tabindex="-1"><a class="header-anchor" href="#_2-表级锁和行级锁对比"><span>2.表级锁和行级锁对比</span></a></h2><ul><li><p>表级锁</p><p>MySQL 中锁定 <strong>粒度最大</strong>的一种锁，对当前<strong>操作的整张表加锁</strong></p><ul><li>优势 <ul><li>实现简单，资源消耗少，加锁快</li><li>不会出现死锁</li></ul></li><li>缺点 <ul><li>其锁粒度最大，触发锁冲突的概率最高</li><li>并发度最低</li></ul></li></ul></li><li><p>行级锁</p><p>MySQL 中锁定 <strong>粒度最小</strong>的一种锁，只针对当前<strong>操作的行加锁</strong></p><ul><li>优势 <ul><li>大大减少数据库操作的冲突</li><li>加锁粒度小，并发度高</li></ul></li><li>缺点 <ul><li>加锁的开销大</li><li>加锁慢</li><li>会出现死锁</li></ul></li></ul></li></ul><h2 id="_3-innodb存储引擎的锁算法" tabindex="-1"><a class="header-anchor" href="#_3-innodb存储引擎的锁算法"><span>3. InnoDB存储引擎的锁算法</span></a></h2><ul><li>Record lock：单个行记录上的锁</li><li>Gap lock: 间隙锁，锁定一个范围，不包括记录本身</li><li><strong>Next-key lock: record+gap 锁定一个锁范围，包含记录本身</strong></li></ul><h3 id="_3-1-相关知识点" tabindex="-1"><a class="header-anchor" href="#_3-1-相关知识点"><span>3.1 相关知识点</span></a></h3><ol><li>innodb 对于行的查询使用next-key lock</li><li>next-locking keying 为了解决Phantom Problem幻读问题</li><li>当查询的索引含有唯一属性时，将next-key lock降级为 record key</li><li>Gap 锁设计的目的是为了阻止多个事务将记录插入到同一范围内，这会导致幻读问题的产生</li><li>有两种方式显示关闭gap 锁：（除了外键约束和唯一性检查外，其余情况仅使用record lock） <ol><li>将事务隔离级别设置为READ-COMMITTED</li><li>将参数innodb_locks_unsafe_for_binlog 设置为1</li></ol></li></ol>',9)]))}const c=n(o,[["render",a],["__file","mysql-y-lock.html.vue"]]),p=JSON.parse('{"path":"/posts/Database/MySQL/mysql-y-lock.html","title":"锁机制锁","lang":"zh-CN","frontmatter":{"aliases":"锁机制锁","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 09:39","description":"锁机制锁 1. MyISAM 和InnoDB 存储引擎使用的锁 MyISAM 采用的是表级锁（table-level locking） InnoDB 支持行级锁（row-level locking）和表级锁，默认行为是行级锁 2.表级锁和行级锁对比 表级锁 MySQL 中锁定 粒度最大的一种锁，对当前操作的整张表加锁 优势 实现简单，资源消耗少，加锁快...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/MySQL/mysql-y-lock.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"锁机制锁"}],["meta",{"property":"og:description","content":"锁机制锁 1. MyISAM 和InnoDB 存储引擎使用的锁 MyISAM 采用的是表级锁（table-level locking） InnoDB 支持行级锁（row-level locking）和表级锁，默认行为是行级锁 2.表级锁和行级锁对比 表级锁 MySQL 中锁定 粒度最大的一种锁，对当前操作的整张表加锁 优势 实现简单，资源消耗少，加锁快..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"锁机制锁\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. MyISAM 和InnoDB 存储引擎使用的锁","slug":"_1-myisam-和innodb-存储引擎使用的锁","link":"#_1-myisam-和innodb-存储引擎使用的锁","children":[]},{"level":2,"title":"2.表级锁和行级锁对比","slug":"_2-表级锁和行级锁对比","link":"#_2-表级锁和行级锁对比","children":[]},{"level":2,"title":"3. InnoDB存储引擎的锁算法","slug":"_3-innodb存储引擎的锁算法","link":"#_3-innodb存储引擎的锁算法","children":[{"level":3,"title":"3.1 相关知识点","slug":"_3-1-相关知识点","link":"#_3-1-相关知识点","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.4,"words":419},"filePathRelative":"posts/Database/MySQL/mysql-y-lock.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. MyISAM 和InnoDB 存储引擎使用的锁</h2>\\n<ul>\\n<li>MyISAM 采用的是表级锁（table-level locking）</li>\\n<li>InnoDB 支持行级锁（row-level locking）和表级锁，默认行为是行级锁</li>\\n</ul>\\n<h2>2.表级锁和行级锁对比</h2>\\n<ul>\\n<li>\\n<p>表级锁</p>\\n<p>MySQL 中锁定 <strong>粒度最大</strong>的一种锁，对当前<strong>操作的整张表加锁</strong></p>\\n<ul>\\n<li>优势\\n<ul>\\n<li>实现简单，资源消耗少，加锁快</li>\\n<li>不会出现死锁</li>\\n</ul>\\n</li>\\n<li>缺点\\n<ul>\\n<li>其锁粒度最大，触发锁冲突的概率最高</li>\\n<li>并发度最低</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>行级锁</p>\\n<p>MySQL 中锁定 <strong>粒度最小</strong>的一种锁，只针对当前<strong>操作的行加锁</strong></p>\\n<ul>\\n<li>优势\\n<ul>\\n<li>大大减少数据库操作的冲突</li>\\n<li>加锁粒度小，并发度高</li>\\n</ul>\\n</li>\\n<li>缺点\\n<ul>\\n<li>加锁的开销大</li>\\n<li>加锁慢</li>\\n<li>会出现死锁</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{c as comp,p as data};
