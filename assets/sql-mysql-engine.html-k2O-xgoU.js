import{_ as t,c as a,a as n,o as s}from"./app-JRvFIbSa.js";const r={};function i(l,e){return s(),a("div",null,e[0]||(e[0]=[n('<h1 id="mysql-存储引擎" tabindex="-1"><a class="header-anchor" href="#mysql-存储引擎"><span>MySQL - 存储引擎</span></a></h1><blockquote><p>本文主要介绍MySQL中的存储引擎。</p></blockquote><h2 id="_1-innodb" tabindex="-1"><a class="header-anchor" href="#_1-innodb"><span>1. InnoDB</span></a></h2><p>是 MySQL 默认的事务型存储引擎，<strong>只有在需要它不支持的特性时，才考虑使用其它存储引擎</strong>。</p><p>实现了四个标准的隔离级别，默认级别是可重复读(REPEATABLE READ)。在可重复读隔离级别下，通过多版本并发控制(MVCC)+ 间隙锁(Next-Key Locking)防止幻影读。</p><p>主索引是聚簇索引，在索引中保存了数据，从而避免直接读取磁盘，因此对查询性能有很大的提升。</p><p>内部做了很多优化，包括从磁盘读取数据时采用的可预测性读、能够加快读操作并且自动创建的自适应哈希索引、能够加速插入操作的插入缓冲区等。</p><p>支持真正的在线热备份。其它存储引擎不支持在线热备份，要获取一致性视图需要停止对所有表的写入，而在读写混合场景中，停止写入可能也意味着停止读取。</p><h2 id="_2-myisam" tabindex="-1"><a class="header-anchor" href="#_2-myisam"><span>2. MyISAM</span></a></h2><p>设计简单，数据以紧密格式存储。对于只读数据，或者表比较小、可以容忍修复操作，则依然可以使用它。</p><p>提供了大量的特性，包括压缩表、空间数据索引等。</p><p><strong>不支持事务</strong>。</p><p>不支持行级锁，只能对整张表加锁，读取时会对需要读到的所有表加共享锁，写入时则对表加排它锁。但在表有读取操作的同时，也可以往表中插入新的记录，这被称为并发插入(CONCURRENT INSERT)。</p><p>可以手工或者自动执行检查和修复操作，但是和事务恢复以及崩溃恢复不同，可能导致一些数据丢失，而且修复操作是非常慢的。</p><p>如果指定了 DELAY_KEY_WRITE 选项，在每次修改执行完成时，不会立即将修改的索引数据写入磁盘，而是会写到内存中的键缓冲区，只有在清理键缓冲区或者关闭表的时候才会将对应的索引块写入磁盘。这种方式可以极大的提升写入性能，但是在数据库或者主机崩溃时会造成索引损坏，需要执行修复操作。</p><h2 id="_3-比较" tabindex="-1"><a class="header-anchor" href="#_3-比较"><span>3. 比较</span></a></h2><table><thead><tr><th></th><th>MyISAM</th><th>InnoDB</th></tr></thead><tbody><tr><td>是否支持行级锁</td><td>只有表级锁（table-level locking）</td><td>支持行级锁（row-level locking）和表级锁，默认行级锁</td></tr><tr><td>是否支持事务</td><td>不支持</td><td>支持</td></tr><tr><td>崩溃后的安全恢复</td><td>不支持</td><td>支持</td></tr><tr><td>支持外键</td><td>不支持</td><td>支持</td></tr><tr><td>支持MVCC</td><td>不支持</td><td>支持</td></tr><tr><td>在线热备份</td><td>不支持</td><td>支持</td></tr></tbody></table><h2 id="_4-查看存储引擎" tabindex="-1"><a class="header-anchor" href="#_4-查看存储引擎"><span>4. 查看存储引擎</span></a></h2><h3 id="_4-1-查看mysql提供的所有存储引擎" tabindex="-1"><a class="header-anchor" href="#_4-1-查看mysql提供的所有存储引擎"><span>4.1 查看MySQL提供的所有存储引擎</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>mysql&gt; show engines;</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130944856.png" alt="image-20190902000239425" tabindex="0" loading="lazy"><figcaption>image-20190902000239425</figcaption></figure><p>从上图我们可以出Mysql 当前的默认存储引擎是InnoDB,也提示了innoDB 支持事务，行级锁等特性</p><h3 id="_4-2-查看mysql-当前默认的存储引擎" tabindex="-1"><a class="header-anchor" href="#_4-2-查看mysql-当前默认的存储引擎"><span>4.2 查看MySQL 当前默认的存储引擎</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>show variables like &#39;%storage_engine%&#39;;</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130944904.png" alt="image-20190902000442313" tabindex="0" loading="lazy"><figcaption>image-20190902000442313</figcaption></figure><h3 id="_4-3-查看表的存储引擎" tabindex="-1"><a class="header-anchor" href="#_4-3-查看表的存储引擎"><span>4.3 查看表的存储引擎</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>show table status like &quot;t_user&quot;;</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/db/sql-mysql/sql-mysql-engine.html" target="_blank" rel="noopener noreferrer">MySQL - 存储引擎</a></p>',29)]))}const d=t(r,[["render",i],["__file","sql-mysql-engine.html.vue"]]),p=JSON.parse('{"path":"/posts/Database/MySQL/sql-mysql-engine.html","title":"MySQL - 存储引擎","lang":"zh-CN","frontmatter":{"aliases":"MySQL - 存储引擎","tags":null,"cssclass":null,"source":null,"order":30,"category":["数据库","Mysql"],"created":"2024-02-22 10:49","updated":"2024-03-13 09:44","description":"MySQL - 存储引擎 本文主要介绍MySQL中的存储引擎。 1. InnoDB 是 MySQL 默认的事务型存储引擎，只有在需要它不支持的特性时，才考虑使用其它存储引擎。 实现了四个标准的隔离级别，默认级别是可重复读(REPEATABLE READ)。在可重复读隔离级别下，通过多版本并发控制(MVCC)+ 间隙锁(Next-Key Locking)...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MySQL/sql-mysql-engine.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"MySQL - 存储引擎"}],["meta",{"property":"og:description","content":"MySQL - 存储引擎 本文主要介绍MySQL中的存储引擎。 1. InnoDB 是 MySQL 默认的事务型存储引擎，只有在需要它不支持的特性时，才考虑使用其它存储引擎。 实现了四个标准的隔离级别，默认级别是可重复读(REPEATABLE READ)。在可重复读隔离级别下，通过多版本并发控制(MVCC)+ 间隙锁(Next-Key Locking)..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130944856.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL - 存储引擎\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130944856.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130944904.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. InnoDB","slug":"_1-innodb","link":"#_1-innodb","children":[]},{"level":2,"title":"2. MyISAM","slug":"_2-myisam","link":"#_2-myisam","children":[]},{"level":2,"title":"3. 比较","slug":"_3-比较","link":"#_3-比较","children":[]},{"level":2,"title":"4. 查看存储引擎","slug":"_4-查看存储引擎","link":"#_4-查看存储引擎","children":[{"level":3,"title":"4.1 查看MySQL提供的所有存储引擎","slug":"_4-1-查看mysql提供的所有存储引擎","link":"#_4-1-查看mysql提供的所有存储引擎","children":[]},{"level":3,"title":"4.2 查看MySQL 当前默认的存储引擎","slug":"_4-2-查看mysql-当前默认的存储引擎","link":"#_4-2-查看mysql-当前默认的存储引擎","children":[]},{"level":3,"title":"4.3 查看表的存储引擎","slug":"_4-3-查看表的存储引擎","link":"#_4-3-查看表的存储引擎","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.73,"words":820},"filePathRelative":"posts/Database/MySQL/sql-mysql-engine.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>本文主要介绍MySQL中的存储引擎。</p>\\n</blockquote>\\n<h2>1. InnoDB</h2>\\n<p>是 MySQL 默认的事务型存储引擎，<strong>只有在需要它不支持的特性时，才考虑使用其它存储引擎</strong>。</p>\\n<p>实现了四个标准的隔离级别，默认级别是可重复读(REPEATABLE READ)。在可重复读隔离级别下，通过多版本并发控制(MVCC)+ 间隙锁(Next-Key Locking)防止幻影读。</p>\\n<p>主索引是聚簇索引，在索引中保存了数据，从而避免直接读取磁盘，因此对查询性能有很大的提升。</p>\\n<p>内部做了很多优化，包括从磁盘读取数据时采用的可预测性读、能够加快读操作并且自动创建的自适应哈希索引、能够加速插入操作的插入缓冲区等。</p>","autoDesc":true}');export{d as comp,p as data};
