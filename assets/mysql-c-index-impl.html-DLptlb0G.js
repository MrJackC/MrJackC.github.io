import{_ as e,c as n,a,o as l}from"./app-tJW29Kmg.js";const t={};function s(r,i){return l(),n("div",null,i[0]||(i[0]=[a(`<h1 id="索引实现" tabindex="-1"><a class="header-anchor" href="#索引实现"><span>索引实现</span></a></h1><h2 id="_1-聚簇索引" tabindex="-1"><a class="header-anchor" href="#_1-聚簇索引"><span>1. 聚簇索引</span></a></h2><p>MyISAM 和 InnoDB 都使用B+Tree索引结构，但底层索引存储不同，MyISAM 采用非聚簇索引，而InnoDB采用聚簇索引</p><ul><li>聚簇索引：索引和数据文件为同一个文件</li><li>非聚簇索引：索引和数据文件 分开的索引</li></ul><h2 id="_2-myisam-索引原理" tabindex="-1"><a class="header-anchor" href="#_2-myisam-索引原理"><span>2. MyISAM 索引原理</span></a></h2><h3 id="_2-1-底层存储结构" tabindex="-1"><a class="header-anchor" href="#_2-1-底层存储结构"><span>2.1 底层存储结构</span></a></h3><ul><li>frm：定义表</li><li>myi: myisam索引</li><li>myd：myisam数据</li></ul><h3 id="_2-2-myisam-索引结构特性" tabindex="-1"><a class="header-anchor" href="#_2-2-myisam-索引结构特性"><span>2.2 myISAM 索引结构特性</span></a></h3><ul><li>采用非聚簇索引</li><li>MyISAM myi索引文件和myd 数据文件分离</li><li>索引文件仅保存数据记录的指针地址。</li><li>叶子节点data域存储指向数据记录的指针地址</li></ul><h3 id="_2-3-myisam-索引查找流程" tabindex="-1"><a class="header-anchor" href="#_2-3-myisam-索引查找流程"><span>2.3 MyISAM 索引查找流程</span></a></h3><ul><li>MyISAM 索引按照B+Tree搜索，</li><li>如果指定的key存在，则取出其data域值</li><li>然后以data阈值-数据地址去读取响应的数据记录，</li></ul><p>辅助索引和主索引在结构上没有任何区别，只是主索引要求key 是唯一的，而辅助索引的key 可以重复</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130839960.png" alt="image-20190906225153866" tabindex="0" loading="lazy"><figcaption>image-20190906225153866</figcaption></figure><h2 id="_3-innodb" tabindex="-1"><a class="header-anchor" href="#_3-innodb"><span>3. InnoDB</span></a></h2><h3 id="_3-1-innodb优势" tabindex="-1"><a class="header-anchor" href="#_3-1-innodb优势"><span>3.1 InnoDB优势</span></a></h3><ul><li>高扩展性</li><li>充分开发硬件性能</li><li>Crash Safe</li><li>支持事务</li><li>可以在线热备份</li></ul><h3 id="_3-2-innodb特性" tabindex="-1"><a class="header-anchor" href="#_3-2-innodb特性"><span>3.2 InnoDB特性</span></a></h3><ol><li>事务支持（ACID）</li><li>扩展性优良</li><li>读写不冲突</li><li>缓存加速</li></ol><h3 id="_3-3-组件功能" tabindex="-1"><a class="header-anchor" href="#_3-3-组件功能"><span>3.3 组件功能</span></a></h3><ul><li>redo/undo</li><li>异步IO</li><li>MVCC</li><li>行级别锁</li><li>Page Cache（LRU）</li></ul><h3 id="_3-4-innodb物理存储结构" tabindex="-1"><a class="header-anchor" href="#_3-4-innodb物理存储结构"><span>3.4 InnoDB物理存储结构</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130839004.png" alt="image-20190906225909455" tabindex="0" loading="lazy"><figcaption>image-20190906225909455</figcaption></figure><ul><li><p>表空间(ibd文件)</p><ul><li>InnoDB 以<strong>表空间Tablespace</strong>（idb文件）结构进行组织</li></ul></li><li><p>段(Segment)</p><ul><li><p>每个Tablespce 包含<strong>多个Segment段</strong></p><p>分为2种段：叶子节点Segment 和非叶子节点Segment</p></li></ul></li><li><p>Extent</p><ul><li><p>一个Segment段<strong>包含多个Extent</strong></p><p>一个Extent占用占用1M空间包含<strong>64个page</strong>（每个Page 16K）</p></li></ul></li><li><p>Page(16K)</p><ul><li>InnoDB B-Tree <strong>一个逻辑节点扣分配一个物理Page</strong>，一个节点一次IO操作</li></ul></li><li><p>Row</p><ul><li>一个Page里包含<strong>很多有序数据Row行</strong>数据</li></ul></li><li><p>Field</p><ul><li>Row行数据中包含<strong>Field 属性数据等信息</strong></li></ul></li></ul><h4 id="_3-5-表插入数据扩展原理" tabindex="-1"><a class="header-anchor" href="#_3-5-表插入数据扩展原理"><span>3.5 表插入数据扩展原理</span></a></h4><p>一次扩张一个Extent空间（IM）,64个page，按顺序结构向每个page中插入数据</p><h4 id="_3-6-innodb-逻辑组织结构" tabindex="-1"><a class="header-anchor" href="#_3-6-innodb-逻辑组织结构"><span>3.6 InnoDB 逻辑组织结构</span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130839042.png" alt="image-20190906233212924" tabindex="0" loading="lazy"><figcaption>image-20190906233212924</figcaption></figure><p><strong>每个索引一个B+Tree</strong>，一个B+Tree节点 = 一个物理Page（16K）</p><p>数据按16KB切片为Page 并编号，编号可映射到物流文件偏移（16K*N）,B+Tree树叶子节点前后形成双向链表，数据按主键聚簇，二级索引叶节点存储主键值，通过叶节点主键值<strong>回表查找数据</strong></p><h2 id="_4-innodb-索引原理" tabindex="-1"><a class="header-anchor" href="#_4-innodb-索引原理"><span>4. InnoDB 索引原理</span></a></h2><h3 id="_4-1-innodb-特点" tabindex="-1"><a class="header-anchor" href="#_4-1-innodb-特点"><span>4.1 InnoDB 特点</span></a></h3><ul><li><strong>采用聚簇索引</strong></li><li><strong>InnoDB 数据&amp;索引文件为idb文件，</strong></li><li><strong>表数据文件本身就是就是主索引</strong></li><li><strong>相邻的索引临近存储。</strong></li><li><strong>叶节点data域保存了完整的数据记录（数据[除了主键id外其他data]+主索引）</strong></li><li><strong>叶子节点直接存储数据记录，以主键id为key，叶子节点直接存储数据记录</strong></li></ul><h3 id="_4-2-底层存储结构" tabindex="-1"><a class="header-anchor" href="#_4-2-底层存储结构"><span>4.2 底层存储结构</span></a></h3><ul><li>frm: 表定义</li><li>idb: innoDB数据&amp;索引文件</li></ul><h3 id="_4-3-为什么innodb-一定要有主键" tabindex="-1"><a class="header-anchor" href="#_4-3-为什么innodb-一定要有主键"><span>4.3 为什么InnoDB 一定要有主键</span></a></h3><p>**由于InnoDB 采用聚簇索引结构存储，索引InnoDB 的数据文件需要按照主键聚集。**因此InnoDB 要求表必须有主键（MyISAM可以没有）。</p><p>如果没有指定mysql会<strong>自动选择一个可以唯一标识数据记录的列作为主键</strong>，如果不存在这样的列，mysql自动为innoDB表<strong>生成一个隐含字段（6个字节长整型）作为主键</strong>。innoDB所有辅助索引都引用数据记录的主键 作为data 域</p><h3 id="_4-4-辅助索引需要检索两遍" tabindex="-1"><a class="header-anchor" href="#_4-4-辅助索引需要检索两遍"><span>4.4 辅助索引需要检索两遍</span></a></h3><p>聚簇索引这种实现方式使得主键的搜索十分高效，但是<strong>辅助索引搜索需要检索两遍索引</strong></p><ol><li>首先检索辅助索引获得数据记录主键</li><li>然后用主键到主索引中检索获得数据记录</li></ol><h3 id="_4-5-聚簇索引结构" tabindex="-1"><a class="header-anchor" href="#_4-5-聚簇索引结构"><span>4.5 聚簇索引结构</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130839068.png" alt="image-20190906235927601" tabindex="0" loading="lazy"><figcaption>image-20190906235927601</figcaption></figure><h3 id="_4-6-索引的查找流程" tabindex="-1"><a class="header-anchor" href="#_4-6-索引的查找流程"><span>4.6 索引的查找流程</span></a></h3><h4 id="_2-6-1-索引精确查找" tabindex="-1"><a class="header-anchor" href="#_2-6-1-索引精确查找"><span>2.6.1 索引精确查找：</span></a></h4><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>select * from user_info where id = 23</span></span></code></pre></div><ol><li>确定定位条件，找到根节点的PageNo</li><li>根节点读到内存</li><li>逐层向下查找</li><li>读取叶子节点的Page</li><li><strong>通过二分查找找到记录或未命中</strong>。</li></ol><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130839100.png" alt="image-20190907002116080" tabindex="0" loading="lazy"><figcaption>image-20190907002116080</figcaption></figure><h4 id="_2-6-2-索引范围查找" tabindex="-1"><a class="header-anchor" href="#_2-6-2-索引范围查找"><span>2.6.2 索引范围查找</span></a></h4><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>select * from user_info where id &gt;= 18 and id &lt; 22</span></span></code></pre></div><ol><li>读取根节点至内存</li><li>确定索引定位条件 id=18</li><li>找到满足条件第一个叶子节点，</li><li>顺序扫描所有结果，直到终止条件满足id&gt;=22</li></ol><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130839131.png" alt="image-20190907002422372" tabindex="0" loading="lazy"><figcaption>image-20190907002422372</figcaption></figure><h4 id="_2-6-3-全表扫描" tabindex="-1"><a class="header-anchor" href="#_2-6-3-全表扫描"><span>2.6.3 全表扫描</span></a></h4><p>select * from user_info where name = &#39;abc&#39;</p><ol><li>直接读取叶子节点头结点</li><li>顺序扫描</li><li>返回符合条件记录，到最终节点结束</li></ol><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130839158.png" alt="image-20190907002631318" tabindex="0" loading="lazy"><figcaption>image-20190907002631318</figcaption></figure><h4 id="_2-6-4-二级索引查找" tabindex="-1"><a class="header-anchor" href="#_2-6-4-二级索引查找"><span>2.6.4 二级索引查找</span></a></h4><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>Create table table_x(int id primary key, varchar(64) name,key sec_index(name) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>• Select * from table_x where name = “d”;</span></span></code></pre></div><ol><li>通过二级索引查出主键</li><li>拿主键回表查主键索引得到数据</li><li>二级索引可筛选掉大量无效记录，提高效率</li></ol><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130839177.png" alt="image-20190907002924866" tabindex="0" loading="lazy"><figcaption>image-20190907002924866</figcaption></figure>`,59)]))}const d=e(t,[["render",s],["__file","mysql-c-index-impl.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/MySQL/mysql-c-index-impl.html","title":"索引实现","lang":"zh-CN","frontmatter":{"aliases":"索引实现","tags":null,"cssclass":null,"source":null,"category":["数据库"],"created":"2024-02-22 10:49","updated":"2024-03-13 08:43","description":"索引实现 1. 聚簇索引 MyISAM 和 InnoDB 都使用B+Tree索引结构，但底层索引存储不同，MyISAM 采用非聚簇索引，而InnoDB采用聚簇索引 聚簇索引：索引和数据文件为同一个文件 非聚簇索引：索引和数据文件 分开的索引 2. MyISAM 索引原理 2.1 底层存储结构 frm：定义表 myi: myisam索引 myd：myis...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MySQL/mysql-c-index-impl.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"索引实现"}],["meta",{"property":"og:description","content":"索引实现 1. 聚簇索引 MyISAM 和 InnoDB 都使用B+Tree索引结构，但底层索引存储不同，MyISAM 采用非聚簇索引，而InnoDB采用聚簇索引 聚簇索引：索引和数据文件为同一个文件 非聚簇索引：索引和数据文件 分开的索引 2. MyISAM 索引原理 2.1 底层存储结构 frm：定义表 myi: myisam索引 myd：myis..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130839960.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"索引实现\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130839960.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130839004.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130839042.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130839068.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130839100.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130839131.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130839158.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130839177.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 聚簇索引","slug":"_1-聚簇索引","link":"#_1-聚簇索引","children":[]},{"level":2,"title":"2. MyISAM 索引原理","slug":"_2-myisam-索引原理","link":"#_2-myisam-索引原理","children":[{"level":3,"title":"2.1 底层存储结构","slug":"_2-1-底层存储结构","link":"#_2-1-底层存储结构","children":[]},{"level":3,"title":"2.2 myISAM 索引结构特性","slug":"_2-2-myisam-索引结构特性","link":"#_2-2-myisam-索引结构特性","children":[]},{"level":3,"title":"2.3 MyISAM 索引查找流程","slug":"_2-3-myisam-索引查找流程","link":"#_2-3-myisam-索引查找流程","children":[]}]},{"level":2,"title":"3. InnoDB","slug":"_3-innodb","link":"#_3-innodb","children":[{"level":3,"title":"3.1 InnoDB优势","slug":"_3-1-innodb优势","link":"#_3-1-innodb优势","children":[]},{"level":3,"title":"3.2 InnoDB特性","slug":"_3-2-innodb特性","link":"#_3-2-innodb特性","children":[]},{"level":3,"title":"3.3 组件功能","slug":"_3-3-组件功能","link":"#_3-3-组件功能","children":[]},{"level":3,"title":"3.4 InnoDB物理存储结构","slug":"_3-4-innodb物理存储结构","link":"#_3-4-innodb物理存储结构","children":[]}]},{"level":2,"title":"4. InnoDB 索引原理","slug":"_4-innodb-索引原理","link":"#_4-innodb-索引原理","children":[{"level":3,"title":"4.1 InnoDB 特点","slug":"_4-1-innodb-特点","link":"#_4-1-innodb-特点","children":[]},{"level":3,"title":"4.2 底层存储结构","slug":"_4-2-底层存储结构","link":"#_4-2-底层存储结构","children":[]},{"level":3,"title":"4.3 为什么InnoDB 一定要有主键","slug":"_4-3-为什么innodb-一定要有主键","link":"#_4-3-为什么innodb-一定要有主键","children":[]},{"level":3,"title":"4.4 辅助索引需要检索两遍","slug":"_4-4-辅助索引需要检索两遍","link":"#_4-4-辅助索引需要检索两遍","children":[]},{"level":3,"title":"4.5 聚簇索引结构","slug":"_4-5-聚簇索引结构","link":"#_4-5-聚簇索引结构","children":[]},{"level":3,"title":"4.6 索引的查找流程","slug":"_4-6-索引的查找流程","link":"#_4-6-索引的查找流程","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.33,"words":1298},"filePathRelative":"posts/Database/MySQL/mysql-c-index-impl.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 聚簇索引</h2>\\n<p>MyISAM 和 InnoDB 都使用B+Tree索引结构，但底层索引存储不同，MyISAM 采用非聚簇索引，而InnoDB采用聚簇索引</p>\\n<ul>\\n<li>聚簇索引：索引和数据文件为同一个文件</li>\\n<li>非聚簇索引：索引和数据文件 分开的索引</li>\\n</ul>\\n<h2>2. MyISAM 索引原理</h2>\\n<h3>2.1 底层存储结构</h3>\\n<ul>\\n<li>frm：定义表</li>\\n<li>myi: myisam索引</li>\\n<li>myd：myisam数据</li>\\n</ul>\\n<h3>2.2 myISAM 索引结构特性</h3>","autoDesc":true}');export{d as comp,c as data};
