import{_ as t,c as e,a as n,o as g}from"./app-W9QyTiMU.js";const r={};function a(i,o){return g(),e("div",null,o[0]||(o[0]=[n('<h1 id="mysql-三大日志-redo-log、undo-log、bin-log" tabindex="-1"><a class="header-anchor" href="#mysql-三大日志-redo-log、undo-log、bin-log"><span>MySQL - 三大日志(Redo Log、Undo Log、Bin Log)</span></a></h1><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130943302.png" alt="image-20221014223434777" tabindex="0" loading="lazy"><figcaption>image-20221014223434777</figcaption></figure><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span><strong>1. 背景</strong></span></a></h2><p>MySQL实现事务、崩溃恢复、集群的主从复制，底层都离不开日志，所以日志是MySQL的精华所在。只有了解MySQL日志，才算是彻底搞懂MySQL。</p><p>MySQL的三大日志系统，<strong>Redo Log（重做日志）</strong>、<strong>Undo Log（恢复日志）</strong>、<strong>Bin Log（备份日志）</strong>。</p><h2 id="_2-redo-log-重做日志" tabindex="-1"><a class="header-anchor" href="#_2-redo-log-重做日志"><span><strong>2. Redo Log（重做日志）</strong></span></a></h2><h3 id="_2-1-redo-log的内容与作用" tabindex="-1"><a class="header-anchor" href="#_2-1-redo-log的内容与作用"><span><strong>2.1 Redo Log的内容与作用</strong></span></a></h3><p>Redo Log 记录的是物理日志，也就是磁盘数据页的修改。</p><p><strong>作用：</strong> 用来保证服务崩溃后，仍能把事务中变更的数据持久化到磁盘上。</p><p>MySQL事务中持久性就是使用<strong>Redo Log</strong>实现的。</p><h3 id="_2-2-什么时候写入redo-log" tabindex="-1"><a class="header-anchor" href="#_2-2-什么时候写入redo-log"><span><strong>2.2 什么时候写入Redo Log？</strong></span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20221014221816524.png" alt="image-20221014221816524" tabindex="0" loading="lazy"><figcaption>image-20221014221816524</figcaption></figure><ol><li>从磁盘加载数据到内存</li><li>在内存中修改数据</li><li>把新数据写到<strong>Redo Log Buffer</strong>中</li><li>把<strong>Redo Log Buffer</strong>中数据持久化到<strong>Redo Log</strong>文件中</li><li>把<strong>Redo Log</strong>文件中数据持久化到数据库磁盘中</li></ol><p>你可能会问，为什么需要写<strong>Redo Log Buffer</strong>和<strong>Redo Log FIle</strong>？直接持久化到磁盘不好吗？</p><p>直接写磁盘会有产生严重的性能问题：</p><ol><li>InnoDB在磁盘中存储的基本单元是页，可能本次修改只变更一页中几个字节，但是需要刷新整页的数据，就很浪费资源。</li><li>一个事务可能修改了多页中的数据，页之间又是不连续的，就会产生随机IO，性能更差。</li></ol><p>这种方案叫做WAL（Write-Ahead Logging），预写日志，就是先写日志，再写磁盘。</p><h3 id="_2-3-redo-log刷盘规则" tabindex="-1"><a class="header-anchor" href="#_2-3-redo-log刷盘规则"><span><strong>2.3 Redo Log刷盘规则</strong></span></a></h3><p>写入<strong>Redo Log Buffer</strong>之后，并不会立即持久化到<strong>Redo Log FIle</strong>，需要等待操作系统调用fsync()操作，才会刷到磁盘上。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20221014222303772.png" alt="image-20221014222303772" tabindex="0" loading="lazy"><figcaption>image-20221014222303772</figcaption></figure><p>具体什么时候可以把<strong>Redo Log Buffer</strong>刷到<strong>Redo Log FIle</strong>中，可以通过<strong>innodb_flush_log_at_trx_commit</strong>参数配置决定。</p><table><thead><tr><th>参数值</th><th>含义</th></tr></thead><tbody><tr><td>0（延迟写）</td><td>提交事务后，不会立即刷到OS Buffer中，而是等一秒后刷新到OS Buffer并调用fsync()写入Redo Log FIle，可能会丢失一秒钟的数据。</td></tr><tr><td>1（实时写</td><td>每次提交事务，都会刷新到OS Buffer并调用fsync()写到Redo Log FIle，性能较差</td></tr><tr><td>2（延迟刷新）</td><td>每次提交事务只刷新到OS Buffer，一秒后再调用fsync()写入Redo Log FIle。</td></tr></tbody></table><p>InnoDB 的<strong>Redo Log File</strong>是固定大小的。可以配置为每组4个文件，每个文件的大小是 1GB，那么<strong>Redo Log File</strong>可以记录4GB的操作。</p><p>采用循环写入覆盖的方式，write pos记录开始写的位置，向后移动。checkpoint记录将要擦除的位置，也是向后移动。write pos到checkpoint之间的位置，是可写区域，checkpoint到write pos之间的位置是已写区域。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20221014222542586.png" alt="image-20221014222542586" tabindex="0" loading="lazy"><figcaption>image-20221014222542586</figcaption></figure><h2 id="_3-undo-log-回滚日志" tabindex="-1"><a class="header-anchor" href="#_3-undo-log-回滚日志"><span><strong>3. Undo Log（回滚日志）</strong></span></a></h2><h3 id="_3-1-undo-log的内容与作用" tabindex="-1"><a class="header-anchor" href="#_3-1-undo-log的内容与作用"><span><strong>3.1 Undo Log的内容与作用</strong></span></a></h3><p>Undo Log记录的是逻辑日志，也就是SQL语句。</p><p>比如：当我们执行一条insert语句时，Undo Log就记录一条相反的delete语句。</p><p><strong>作用：</strong></p><ol><li>回滚事务时，恢复到修改前的数据。</li><li>实现 <strong>MVCC（多版本并发控制，Multi-Version Concurrency Control）</strong> 。</li></ol><p>MySQL事务中原子性就是使用<strong>Undo Log</strong>实现的。</p><h3 id="_3-2-undo-log如何回滚到上一个版本" tabindex="-1"><a class="header-anchor" href="#_3-2-undo-log如何回滚到上一个版本"><span><strong>3.2 Undo Log如何回滚到上一个版本</strong></span></a></h3><p>实现方式通过两个隐藏列trx_id（最近一次提交事务的ID）和roll_pointer（上个版本的地址），建立一个版本链。并在事务中读取的时候生成一个ReadView（读视图），在Read Committed隔离级别下，每次读取都会生成一个读视图，而在Repeatable Read隔离级别下，只会在第一次读取时生成一个读视图。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130943370.png" alt="image-20221014222859478" tabindex="0" loading="lazy"><figcaption>image-20221014222859478</figcaption></figure><h2 id="_4-bin-log-备份日志" tabindex="-1"><a class="header-anchor" href="#_4-bin-log-备份日志"><span><strong>4. Bin Log（备份日志）</strong></span></a></h2><h3 id="_4-1-bin-log的内容与作用" tabindex="-1"><a class="header-anchor" href="#_4-1-bin-log的内容与作用"><span><strong>4.1 Bin Log的内容与作用</strong></span></a></h3><p><strong>Bin Log</strong>记录的是逻辑日志，即原始的SQL语句，是MySQL自带的。</p><p><strong>作用：</strong> 数据备份和主从同步。</p><p><strong>Bin Log</strong>共有三种日志格式，可以<strong>binlog_format</strong>配置参数指定。</p><table><thead><tr><th>参数值</th><th>含义</th></tr></thead><tbody><tr><td>Statement</td><td>记录原始SQL语句，会导致更新时间与原库不一致。 比如 update_time=now()</td></tr><tr><td>Row</td><td>记录每行数据的变化，保证了数据与原库一致，缺点是数据量较大。</td></tr><tr><td>Mixed</td><td>Statement和Row的混合模式，默认采用Statement模式，涉及日期、函数相关的时候采用Row模式，既减少了数据量，又保证了数据一致性。</td></tr></tbody></table><h3 id="_4-2-什么时候写入bin-log" tabindex="-1"><a class="header-anchor" href="#_4-2-什么时候写入bin-log"><span><strong>4.2 什么时候写入Bin Log？</strong></span></a></h3><p><strong>Bin Log</strong>采用追加写入的模式，并不会覆盖原有日志，所以可以用来恢复到之前某个时刻的数据。</p><p><strong>Bin Log</strong>也是采用WAL模式，先写日志，再写磁盘。</p><p>至于什么时候刷新到磁盘，可以<strong>sync_binlog</strong>配置参数指定。</p><table><thead><tr><th>参数值</th><th>含义</th></tr></thead><tbody><tr><td>0（延迟写）</td><td>每次提交事务都不会刷盘，由系统自己决定什么时候刷盘，可能会丢失数据。</td></tr><tr><td>1（实时写）</td><td>每次提交事务，都会刷盘，性能较差。</td></tr><tr><td>N（延迟写）</td><td>提交N个事务后，才会刷盘。</td></tr></tbody></table><p>加入写<strong>Bin Log</strong>之后的事务流程：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20221014223217737.png" alt="image-20221014223217737" tabindex="0" loading="lazy"><figcaption>image-20221014223217737</figcaption></figure><p>这就是二阶段提交的概念，先写处于prepare状态的Redo Log，事务提交后，再写处于commit状态的Redo Log。</p><h2 id="_5-知识点总结" tabindex="-1"><a class="header-anchor" href="#_5-知识点总结"><span>5. 知识点总结</span></a></h2><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130943302.png" alt="image-20221014223434777" tabindex="0" loading="lazy"><figcaption>image-20221014223434777</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/528575954" target="_blank" rel="noopener noreferrer">彻底搞懂三大MySQL日志，Redo Log、Undo Log、Bin Log</a></p>',53)]))}const s=t(r,[["render",a],["__file","sql-mysql-b-log.html.vue"]]),d=JSON.parse('{"path":"/posts/Database/MySQL/sql-mysql-b-log.html","title":"MySQL - 三大日志(Redo Log、Undo Log、Bin Log)","lang":"zh-CN","frontmatter":{"aliases":"MySQL - 三大日志(Redo Log、Undo Log、Bin Log)","tags":null,"cssclass":null,"source":null,"order":320,"category":["数据库","Mysql"],"created":"2024-02-22 10:49","updated":"2024-03-13 09:43","description":"MySQL - 三大日志(Redo Log、Undo Log、Bin Log) image-20221014223434777image-20221014223434777 1. 背景 MySQL实现事务、崩溃恢复、集群的主从复制，底层都离不开日志，所以日志是MySQL的精华所在。只有了解MySQL日志，才算是彻底搞懂MySQL。 MySQL的三大日志...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/MySQL/sql-mysql-b-log.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"MySQL - 三大日志(Redo Log、Undo Log、Bin Log)"}],["meta",{"property":"og:description","content":"MySQL - 三大日志(Redo Log、Undo Log、Bin Log) image-20221014223434777image-20221014223434777 1. 背景 MySQL实现事务、崩溃恢复、集群的主从复制，底层都离不开日志，所以日志是MySQL的精华所在。只有了解MySQL日志，才算是彻底搞懂MySQL。 MySQL的三大日志..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130943302.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL - 三大日志(Redo Log、Undo Log、Bin Log)\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130943302.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20221014221816524.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20221014222303772.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20221014222542586.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130943370.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20221014223217737.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130943302.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. Redo Log（重做日志）","slug":"_2-redo-log-重做日志","link":"#_2-redo-log-重做日志","children":[{"level":3,"title":"2.1 Redo Log的内容与作用","slug":"_2-1-redo-log的内容与作用","link":"#_2-1-redo-log的内容与作用","children":[]},{"level":3,"title":"2.2 什么时候写入Redo Log？","slug":"_2-2-什么时候写入redo-log","link":"#_2-2-什么时候写入redo-log","children":[]},{"level":3,"title":"2.3 Redo Log刷盘规则","slug":"_2-3-redo-log刷盘规则","link":"#_2-3-redo-log刷盘规则","children":[]}]},{"level":2,"title":"3. Undo Log（回滚日志）","slug":"_3-undo-log-回滚日志","link":"#_3-undo-log-回滚日志","children":[{"level":3,"title":"3.1 Undo Log的内容与作用","slug":"_3-1-undo-log的内容与作用","link":"#_3-1-undo-log的内容与作用","children":[]},{"level":3,"title":"3.2 Undo Log如何回滚到上一个版本","slug":"_3-2-undo-log如何回滚到上一个版本","link":"#_3-2-undo-log如何回滚到上一个版本","children":[]}]},{"level":2,"title":"4. Bin Log（备份日志）","slug":"_4-bin-log-备份日志","link":"#_4-bin-log-备份日志","children":[{"level":3,"title":"4.1 Bin Log的内容与作用","slug":"_4-1-bin-log的内容与作用","link":"#_4-1-bin-log的内容与作用","children":[]},{"level":3,"title":"4.2 什么时候写入Bin Log？","slug":"_4-2-什么时候写入bin-log","link":"#_4-2-什么时候写入bin-log","children":[]}]},{"level":2,"title":"5. 知识点总结","slug":"_5-知识点总结","link":"#_5-知识点总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.65,"words":1395},"filePathRelative":"posts/Database/MySQL/sql-mysql-b-log.md","localizedDate":"2024年10月21日","excerpt":"\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130943302.png\\" alt=\\"image-20221014223434777\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20221014223434777</figcaption></figure>\\n<h2><strong>1. 背景</strong></h2>\\n<p>MySQL实现事务、崩溃恢复、集群的主从复制，底层都离不开日志，所以日志是MySQL的精华所在。只有了解MySQL日志，才算是彻底搞懂MySQL。</p>","autoDesc":true}');export{s as comp,d as data};
