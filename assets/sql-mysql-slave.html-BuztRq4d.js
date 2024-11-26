import{_ as e,c as n,a,o as i}from"./app-JRvFIbSa.js";const l={};function r(o,t){return i(),n("div",null,t[0]||(t[0]=[a('<h1 id="mysql-主从复制原理" tabindex="-1"><a class="header-anchor" href="#mysql-主从复制原理"><span>MySQL - 主从复制原理</span></a></h1><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/20221014225826741.png" alt="20221014225826741" tabindex="0" loading="lazy"><figcaption>20221014225826741</figcaption></figure><h2 id="_1-mysql主从同步实现方式" tabindex="-1"><a class="header-anchor" href="#_1-mysql主从同步实现方式"><span>1. <strong>MySQL主从同步实现方式</strong></span></a></h2><p>MySQL主从同步是基于Bin Log实现的，而Bin Log记录的是原始SQL语句。</p><p><strong>Bin Log</strong>共有三种日志格式，可以<strong>binlog_format</strong>配置参数指定。</p><table><thead><tr><th>参数值</th><th>含义</th></tr></thead><tbody><tr><td>Statement</td><td>记录原始SQL语句，会导致更新时间与原库不一致。 比如 update_time=now()</td></tr><tr><td>Row</td><td>记录每行数据的变化，保证了数据与原库一致，缺点是数据量较大。</td></tr><tr><td>Mixed</td><td>Statement和Row的混合模式，默认采用Statement模式，涉及日期、函数相关的时候采用Row模式，既减少了数据量，又保证了数据一致性。</td></tr></tbody></table><p><strong>常见的主从同步架构有一主多从、双主多从。</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/20221014224519505.png" alt="20221014224519505" tabindex="0" loading="lazy"><figcaption>20221014224519505</figcaption></figure><h2 id="_2-mysql主从同步的作用" tabindex="-1"><a class="header-anchor" href="#_2-mysql主从同步的作用"><span><strong>2. MySQL主从同步的作用</strong></span></a></h2><ol><li>读写分离，提升数据库性能</li><li>容灾恢复，主服务器不可用时，从服务器提供服务，提高可用性</li><li>冗余备份，主服务器数据损坏丢失，从服务器保留备份</li></ol><h3 id="_2-1-一主多从架构" tabindex="-1"><a class="header-anchor" href="#_2-1-一主多从架构"><span>2.1 <strong>一主多从架构：</strong></span></a></h3><p>一般是主库负责所有读写请求，而从库只负责容灾恢复和冗余备份。</p><p>如果做了读写分离的话，主库负责写请求，从库负责读请求，可以提升数据库性能。</p><h3 id="_2-2-双主多从架构" tabindex="-1"><a class="header-anchor" href="#_2-2-双主多从架构"><span>2.2 <strong>双主多从架构：</strong></span></a></h3><p>一般是主库1负责所有读写请求，主库2不对外提供服务，只用来容灾恢复。</p><p>相比一主多从架构，双主多从架构可以减少宕机时间，更快恢复数据库可用状态。</p><h2 id="_3-主动同步的原理" tabindex="-1"><a class="header-anchor" href="#_3-主动同步的原理"><span><strong>3. 主动同步的原理</strong></span></a></h2><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20221014224754176.png" alt="image-20221014224754176" tabindex="0" loading="lazy"><figcaption>image-20221014224754176</figcaption></figure><ol><li>当主库数据发生变更时，写入本地Bin Log文件</li><li>从库IO线程发起dump主库Bin Log文件的请求</li><li>主库IO线程推送Bin Log文件到从库中</li><li>从库IO线程把Bin Log内容写入本地的Relay Log文件中</li><li>从库SQL线程读取Relay Log文件内容</li><li>从库SQL线程重新执行一遍SQL语句</li></ol><h2 id="_4-主从同步延迟问题" tabindex="-1"><a class="header-anchor" href="#_4-主从同步延迟问题"><span><strong>4. 主从同步延迟问题</strong></span></a></h2><p>主从同步最常遇到的问题就是主从同步延迟，可以通过在从库上执行<strong>show slave status</strong>命令查看延迟时间，<strong>Seconds_Behind_Master</strong>表示延迟的秒数。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130946632.png" alt="image-20221014225151555" tabindex="0" loading="lazy"><figcaption>image-20221014225151555</figcaption></figure><h3 id="_4-1-主从同步延迟的原因有哪些" tabindex="-1"><a class="header-anchor" href="#_4-1-主从同步延迟的原因有哪些"><span><strong>4.1 主从同步延迟的原因有哪些？</strong></span></a></h3><ol><li>从库机器性能较差<br> 主库负责所有读写请求，从库只用来备份，会用性能较差的机器，执行时间自然较慢。</li><li>从库压力更大<br> 读写分离后，主库负责写请求，从库负责读请求。<br> 互联网应用一般读请求更多，所以从库读压力更大，占用更多CPU资源。</li><li>网络延迟<br> 当主库的Bin Log文件往从库上发送时，可能产生网络延迟，也会导致从库数据跟不上。</li><li>主库有大事务<br> 当主库上有个大事务需要执行5分钟，把Bin Log文件发送到从库，从库至少也需要执行5分钟，所以这时候从库就出现了5分钟的延迟。</li></ol><h3 id="_4-2-主从同步延迟的解决方案" tabindex="-1"><a class="header-anchor" href="#_4-2-主从同步延迟的解决方案"><span>4.2 <strong>主从同步延迟的解决方案？</strong></span></a></h3><ol><li>从库机器性能较差<br> 把从库换成跟主库同等规格的机器。</li><li>从库压力更大<br> 多搞几台从库，分担读请求压力。</li><li>网络延迟<br> 联系运维或者云服务提供商解决。</li><li>主库有大事务<br> 把大事务分割成小事务执行，大事务不但会产生从库延迟，还可能产生死锁，降低数据库并发性能，所以尽量少用大事务。</li></ol><h2 id="_5-如何提升主从同步性能" tabindex="-1"><a class="header-anchor" href="#_5-如何提升主从同步性能"><span><strong>5. 如何提升主从同步性能</strong></span></a></h2><h3 id="_5-1-从库开启多线程复制" tabindex="-1"><a class="header-anchor" href="#_5-1-从库开启多线程复制"><span>5.1. 从库开启多线程复制</span></a></h3><p>就是在主从同步的最后两步使用多线程，修改配置 <strong>slave_parallel_workers</strong>=4，代表开启4个复制线程。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20221014225527025.png" alt="image-20221014225527025" tabindex="0" loading="lazy"><figcaption>image-20221014225527025</figcaption></figure><h3 id="_5-2-修改同步模式-改为异步" tabindex="-1"><a class="header-anchor" href="#_5-2-修改同步模式-改为异步"><span>5.2 修改同步模式，改为异步</span></a></h3><p><strong>主从同步共有三种复制方式：</strong></p><ol><li>全同步复制<br> 当主库执行完一个事务，并且所有从库都执行完该事务后，才给客户端返回成功。</li><li>半同步复制<br> 至少有一个从库执行完成后，就给客户端返回成功。</li><li>异步复制<br> 主库执行完后，立即返回成功，不关心从库是否执行完成。</li></ol><p>如果对数据安全性要求没那么高，可以把同步模式改成半同步复制或者异步复制。</p><h3 id="_5-3-修改从库bin-log配置" tabindex="-1"><a class="header-anchor" href="#_5-3-修改从库bin-log配置"><span>5.3 修改从库Bin Log配置</span></a></h3><p><strong>修改sync_binlog配置：</strong></p><blockquote><p>sync_binlog=0 ，表示写binlog不立即刷新磁盘，由系统决定什么时候刷新磁盘。<br> sync_binlog=1，每次写binlog都刷新磁盘，安全性高，性能差。<br> sync_binlog=N，写N次binlog才刷新磁盘。</p></blockquote><p>从库对数据安全性要求没那么高，可以设置sync_binlog=0。</p><p><strong>修改innodb_flush_log_at_trx_commit配置：</strong></p><blockquote><p>innodb_flush_log_at_trx_commit=0，每隔一秒钟，把事务日志刷新到磁盘。<br> innodb_flush_log_at_trx_commit=1，每次事务都刷新到磁盘。<br> innodb_flush_log_at_trx_commit=2，每次事务都不主动刷新磁盘，由系统决定什么时候刷新磁盘。</p></blockquote><p>从库对数据安全性要求没那么高，可以设置innodb_flush_log_at_trx_commit=2。</p><h2 id="_6-知识点总结" tabindex="-1"><a class="header-anchor" href="#_6-知识点总结"><span>6. <strong>知识点总结：</strong></span></a></h2><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130946663.png" alt="image-20221014225826741" tabindex="0" loading="lazy"><figcaption>image-20221014225826741</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/533187002" target="_blank" rel="noopener noreferrer">高级程序员必知必会，一文详解MySQL主从同步原理</a></p><p><a href="https://pdai.tech/md/db/sql-mysql/sql-mysql-slave.html" target="_blank" rel="noopener noreferrer">MySQL - 主从复制与读写分离</a></p>',46)]))}const g=e(l,[["render",r],["__file","sql-mysql-slave.html.vue"]]),h=JSON.parse('{"path":"/posts/Database/MySQL/sql-mysql-slave.html","title":"MySQL - 主从复制原理","lang":"zh-CN","frontmatter":{"order":325,"category":["Mysql","数据库"],"description":"MySQL - 主从复制原理 2022101422582674120221014225826741 1. MySQL主从同步实现方式 MySQL主从同步是基于Bin Log实现的，而Bin Log记录的是原始SQL语句。 Bin Log共有三种日志格式，可以binlog_format配置参数指定。 常见的主从同步架构有一主多从、双主多从。 202210...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MySQL/sql-mysql-slave.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"MySQL - 主从复制原理"}],["meta",{"property":"og:description","content":"MySQL - 主从复制原理 2022101422582674120221014225826741 1. MySQL主从同步实现方式 MySQL主从同步是基于Bin Log实现的，而Bin Log记录的是原始SQL语句。 Bin Log共有三种日志格式，可以binlog_format配置参数指定。 常见的主从同步架构有一主多从、双主多从。 202210..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/20221014225826741.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL - 主从复制原理\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/20221014225826741.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/20221014224519505.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20221014224754176.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130946632.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20221014225527025.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130946663.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. MySQL主从同步实现方式","slug":"_1-mysql主从同步实现方式","link":"#_1-mysql主从同步实现方式","children":[]},{"level":2,"title":"2. MySQL主从同步的作用","slug":"_2-mysql主从同步的作用","link":"#_2-mysql主从同步的作用","children":[{"level":3,"title":"2.1 一主多从架构：","slug":"_2-1-一主多从架构","link":"#_2-1-一主多从架构","children":[]},{"level":3,"title":"2.2 双主多从架构：","slug":"_2-2-双主多从架构","link":"#_2-2-双主多从架构","children":[]}]},{"level":2,"title":"3. 主动同步的原理","slug":"_3-主动同步的原理","link":"#_3-主动同步的原理","children":[]},{"level":2,"title":"4. 主从同步延迟问题","slug":"_4-主从同步延迟问题","link":"#_4-主从同步延迟问题","children":[{"level":3,"title":"4.1 主从同步延迟的原因有哪些？","slug":"_4-1-主从同步延迟的原因有哪些","link":"#_4-1-主从同步延迟的原因有哪些","children":[]},{"level":3,"title":"4.2 主从同步延迟的解决方案？","slug":"_4-2-主从同步延迟的解决方案","link":"#_4-2-主从同步延迟的解决方案","children":[]}]},{"level":2,"title":"5. 如何提升主从同步性能","slug":"_5-如何提升主从同步性能","link":"#_5-如何提升主从同步性能","children":[{"level":3,"title":"5.1. 从库开启多线程复制","slug":"_5-1-从库开启多线程复制","link":"#_5-1-从库开启多线程复制","children":[]},{"level":3,"title":"5.2 修改同步模式，改为异步","slug":"_5-2-修改同步模式-改为异步","link":"#_5-2-修改同步模式-改为异步","children":[]},{"level":3,"title":"5.3 修改从库Bin Log配置","slug":"_5-3-修改从库bin-log配置","link":"#_5-3-修改从库bin-log配置","children":[]}]},{"level":2,"title":"6. 知识点总结：","slug":"_6-知识点总结","link":"#_6-知识点总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.52,"words":1357},"filePathRelative":"posts/Database/MySQL/sql-mysql-slave.md","localizedDate":"2024年10月21日","excerpt":"\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/20221014225826741.png\\" alt=\\"20221014225826741\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>20221014225826741</figcaption></figure>\\n<h2>1. <strong>MySQL主从同步实现方式</strong></h2>\\n<p>MySQL主从同步是基于Bin Log实现的，而Bin Log记录的是原始SQL语句。</p>\\n<p><strong>Bin Log</strong>共有三种日志格式，可以<strong>binlog_format</strong>配置参数指定。</p>","autoDesc":true}');export{g as comp,h as data};