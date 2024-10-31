import{_ as a,c as s,a as l,o as i}from"./app-mWs04Xnh.js";const r={};function n(t,e){return i(),s("div",null,e[0]||(e[0]=[l(`<h1 id="mysql-索引-b-树" tabindex="-1"><a class="header-anchor" href="#mysql-索引-b-树"><span>MySQL - 索引(B+树)</span></a></h1><h2 id="_1-b-tree-原理" tabindex="-1"><a class="header-anchor" href="#_1-b-tree-原理"><span>1. B+ Tree 原理</span></a></h2><h3 id="_1-1-数据结构" tabindex="-1"><a class="header-anchor" href="#_1-1-数据结构"><span>1.1 数据结构</span></a></h3><p>B Tree 指的是 Balance Tree，也就是平衡树。平衡树是一颗查找树，并且所有叶子节点位于同一层。</p><p>B+ Tree 是基于 B Tree 和叶子节点顺序访问指针进行实现，它具有 B Tree 的平衡性，并且通过顺序访问指针来提高区间查询的性能。</p><p>在 B+ Tree 中，一个节点中的 key 从左到右非递减排列，如果某个指针的左右相邻 key 分别是 keyi 和 keyi+1，且不为 null，则该指针指向节点的所有 key 大于等于 keyi 且小于等于 keyi+1。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130943789.png" alt="image-20220607205004079" tabindex="0" loading="lazy"><figcaption>image-20220607205004079</figcaption></figure><h3 id="_1-2-操作" tabindex="-1"><a class="header-anchor" href="#_1-2-操作"><span>1.2. 操作</span></a></h3><p>进行查找操作时，首先在根节点进行二分查找，找到一个 key 所在的指针，然后递归地在指针所指向的节点进行查找。直到查找到叶子节点，然后在叶子节点上进行二分查找，找出 key 所对应的 data。</p><p>插入删除操作记录会破坏平衡树的平衡性，因此在插入删除操作之后，需要对树进行一个分裂、合并、旋转等操作来维护平衡性。</p><h3 id="_1-3-与红黑树的比较" tabindex="-1"><a class="header-anchor" href="#_1-3-与红黑树的比较"><span>1.3. 与红黑树的比较</span></a></h3><p>红黑树等平衡树也可以用来实现索引，但是文件系统及数据库系统普遍采用 B+ Tree 作为索引结构，主要有以下两个原因:</p><ol><li><p><strong>更少的查找次数</strong></p><p>平衡树查找操作的时间复杂度等于树高 h，而树高大致为 O(h)=O(logdN)，其中 d 为每个节点的出度。</p><p>红黑树的出度为 2，而 B+ Tree 的出度一般都非常大，所以<strong>红黑树的树高 h 很明显比 B+ Tree 大非常多，检索的次数也就更多。</strong></p></li><li><p><strong>利用计算机预读特性</strong></p><blockquote><p>B+Tree 的叶子节点中的 key 从左到右非递减排列，可以利用到计算机预读特性</p></blockquote><p>为了减少磁盘 I/O，磁盘往往不是严格按需读取，而是每次都会预读。预读过程中，磁盘进行顺序读取，顺序读取不需要进行磁盘寻道，并且只需要很短的旋转时间，因此速度会非常快。</p><p>操作系统一般将内存和磁盘分割成固态大小的块，每一块称为一页，内存与磁盘以页为单位交换数据。数据库系统将索引的一个节点的大小设置为页的大小，使得一次 I/O 就能完全载入一个节点，并且可以利用预读特性，相邻的节点也能够被预先载入。</p></li></ol><h2 id="_2-mysql-索引" tabindex="-1"><a class="header-anchor" href="#_2-mysql-索引"><span>2. MySQL 索引</span></a></h2><p>索引是在存储引擎层实现的，而不是在服务器层实现的，所以不同存储引擎具有不同的索引类型和实现。</p><h3 id="_2-1-b-tree-索引" tabindex="-1"><a class="header-anchor" href="#_2-1-b-tree-索引"><span>2.1. B+Tree 索引</span></a></h3><p>是大多数 MySQL 存储引擎的默认索引类型。</p><p>因为不再需要进行全表扫描，只需要对树进行搜索即可，因此查找速度快很多。除了用于查找，还可以用于排序和分组。</p><p>可以指定多个列作为索引列，多个索引列共同组成键。</p><p>适用于全键值、键值范围和键前缀查找，其中键前缀查找只适用于最左前缀查找。如果不是按照索引列的顺序进行查找，则无法使用索引。</p><p>InnoDB 的 B+Tree 索引分为主索引和辅助索引。</p><p>主索引的叶子节点 data 域记录着完整的数据记录，这种索引方式被称为聚簇索引。因为无法把数据行存放在两个不同的地方，所以一个表只能有一个聚簇索引。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130943837.png" alt="image-20220607211730533" tabindex="0" loading="lazy"><figcaption>image-20220607211730533</figcaption></figure><p>辅助索引的叶子节点的 data 域记录着主键的值，因此在使用辅助索引进行查找时，需要先查找到主键值，然后再到主索引中进行查找。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130943875.png" alt="image-20220607211800581" tabindex="0" loading="lazy"><figcaption>image-20220607211800581</figcaption></figure><h3 id="_2-2-哈希索引" tabindex="-1"><a class="header-anchor" href="#_2-2-哈希索引"><span>2.2. 哈希索引</span></a></h3><p>哈希索引能以 O(1) 时间进行查找，但是失去了有序性，它具有以下限制:</p><ul><li>无法用于排序与分组；</li><li>只支持精确查找，无法用于部分查找和范围查找。</li></ul><p>InnoDB 存储引擎有一个特殊的功能叫“自适应哈希索引”，当某个索引值被使用的非常频繁时，会在 B+Tree 索引之上再创建一个哈希索引，这样就让 B+Tree 索引具有哈希索引的一些优点，比如快速的哈希查找。</p><h3 id="_2-3-全文索引" tabindex="-1"><a class="header-anchor" href="#_2-3-全文索引"><span>2.3 全文索引</span></a></h3><p>MyISAM 存储引擎支持全文索引，用于查找文本中的关键词，而不是直接比较是否相等。查找条件使用 MATCH AGAINST，而不是普通的 WHERE。</p><p>全文索引一般使用倒排索引实现，它记录着关键词到其所在文档的映射。</p><p>InnoDB 存储引擎在 MySQL 5.6.4 版本中也开始支持全文索引。</p><h3 id="_2-4-空间数据索引" tabindex="-1"><a class="header-anchor" href="#_2-4-空间数据索引"><span>2.4 空间数据索引</span></a></h3><p>MyISAM 存储引擎支持空间数据索引(R-Tree)，可以用于地理数据存储。空间数据索引会从所有维度来索引数据，可以有效地使用任意维度来进行组合查询。</p><p>必须使用 GIS 相关的函数来维护数据。</p><h2 id="_3-索引优化" tabindex="-1"><a class="header-anchor" href="#_3-索引优化"><span>3.索引优化</span></a></h2><h3 id="_3-1-独立的列" tabindex="-1"><a class="header-anchor" href="#_3-1-独立的列"><span>3.1. 独立的列</span></a></h3><p>在进行查询时，索引列不能是表达式的一部分，也不能是函数的参数，否则无法使用索引。</p><p>例如下面的查询不能使用 actor_id 列的索引:</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">SELECT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> actor_id </span><span style="color:#C678DD;--shiki-dark:#C678DD;">FROM</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> sakila</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">actor</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> WHERE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> actor_id + </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h3 id="_3-2-多列索引" tabindex="-1"><a class="header-anchor" href="#_3-2-多列索引"><span>3.2 多列索引</span></a></h3><p>在需要使用多个列作为条件进行查询时，使用多列索引比使用多个单列索引性能更好。例如下面的语句中，最好把 actor_id 和 film_id 设置为多列索引。</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">SELECT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> film_id, actor_ id </span><span style="color:#C678DD;--shiki-dark:#C678DD;">FROM</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> sakila</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">film_actor</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">WHERE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> actor_id </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> AND</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> film_id </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h3 id="_3-3-索引列的顺序" tabindex="-1"><a class="header-anchor" href="#_3-3-索引列的顺序"><span>3.3. 索引列的顺序</span></a></h3><p>让选择性最强的索引列放在前面，索引的选择性是指: 不重复的索引值和记录总数的比值。最大值为 1，此时每个记录都有唯一的索引与其对应。选择性越高，查询效率也越高。</p><p>例如下面显示的结果中 customer_id 的选择性比 staff_id 更高，因此最好把 customer_id 列放在多列索引的前面。</p><blockquote><p>索引的选择性（Index Selectivity），它是指不重复的索引值（也称为基数 cardinality)和数据表的记录总数的比值，取值范围在 <code>[0,1]</code> 之间。索引的选择性越高则查询效率越高，因为选择性高的索引可以让 MySQL 在查找时过滤掉更多的行。</p></blockquote><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">SELECT</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> COUNT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">DISTINCT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> staff_id)/</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">COUNT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(*) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">AS</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> staff_id_selectivity,</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">COUNT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">DISTINCT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> customer_id)/</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">COUNT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(*) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">AS</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> customer_id_selectivity,</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">COUNT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(*)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> payment;</span></span></code></pre></div><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   staff_id_selectivity: 0.0001</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">customer_id_selectivity: 0.0373</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">               COUNT(*): 16049</span></span></code></pre></div><h3 id="_3-4-前缀索引" tabindex="-1"><a class="header-anchor" href="#_3-4-前缀索引"><span>3.4. 前缀索引</span></a></h3><p>对于 BLOB、TEXT 和 VARCHAR 类型的列，必须使用前缀索引，只索引开始的部分字符。</p><p>对于<strong>前缀长度的选取需要根据索引选择性来确定</strong>。</p><blockquote><p>前缀索引：<strong>对文本的前几个字符建立索引（具体是几个字符在建立索引时指定）</strong>，这样建立起来的索引更小，所以查询更快</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alter</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> table</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> system_user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">add</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> index</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user_uuid_index(user_uuid(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">));</span></span></code></pre></div></blockquote><h3 id="_3-5-覆盖索引" tabindex="-1"><a class="header-anchor" href="#_3-5-覆盖索引"><span>3.5. 覆盖索引</span></a></h3><p>索引包含所有需要查询的字段的值。</p><p>具有以下优点:</p><ul><li>索引通常远小于数据行的大小，只读取索引能大大减少数据访问量。</li><li>一些存储引擎(例如 MyISAM)在内存中只缓存索引，而数据依赖于操作系统来缓存。因此，只访问索引可以不使用系统调用(通常比较费时)。</li><li>对于 InnoDB 引擎，若辅助索引能够覆盖查询，则无需访问主索引。</li></ul><h2 id="_4-索引的优点" tabindex="-1"><a class="header-anchor" href="#_4-索引的优点"><span>4. 索引的优点</span></a></h2><ul><li>大大减少了服务器需要扫描的数据行数。</li><li>帮助服务器避免进行排序和分组，也就不需要创建临时表(B+Tree 索引是有序的，可以用于 ORDER BY 和 GROUP BY 操作。临时表主要是在排序和分组过程中创建，因为不需要排序和分组，也就不需要创建临时表)。</li><li>将随机 I/O 变为顺序 I/O(B+Tree 索引是有序的，也就将相邻的数据都存储在一起)。</li></ul><h2 id="_5-索引的使用场景" tabindex="-1"><a class="header-anchor" href="#_5-索引的使用场景"><span>5. 索引的使用场景</span></a></h2><ul><li>对于非常小的表、大部分情况下简单的全表扫描比建立索引更高效。</li><li>对于中到大型的表，索引就非常有效。</li><li>但是对于特大型的表，建立和维护索引的代价将会随之增长。这种情况下，需要用到一种技术可以直接区分出需要查询的一组数据，而不是一条记录一条记录地匹配，例如可以使用分区技术。</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/db/sql-mysql/sql-mysql-b-tree.html" target="_blank" rel="noopener noreferrer"><strong>MySQL - 索引(B+树)</strong></a></p><p><a href="https://blog.csdn.net/wdjnb/article/details/122880079" target="_blank" rel="noopener noreferrer">一篇文章弄懂前缀索引</a></p>`,65)]))}const o=a(r,[["render",n],["__file","sql-mysql-b-tree.html.vue"]]),d=JSON.parse('{"path":"/posts/Database/MySQL/sql-mysql-b-tree.html","title":"MySQL - 索引(B+树)","lang":"zh-CN","frontmatter":{"aliases":"MySQL - 索引(B+树)","tags":null,"cssclass":null,"source":null,"order":110,"category":["数据库","Mysql"],"created":"2024-02-22 10:49","updated":"2024-03-13 09:43","description":"MySQL - 索引(B+树) 1. B+ Tree 原理 1.1 数据结构 B Tree 指的是 Balance Tree，也就是平衡树。平衡树是一颗查找树，并且所有叶子节点位于同一层。 B+ Tree 是基于 B Tree 和叶子节点顺序访问指针进行实现，它具有 B Tree 的平衡性，并且通过顺序访问指针来提高区间查询的性能。 在 B+ Tree...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MySQL/sql-mysql-b-tree.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"MySQL - 索引(B+树)"}],["meta",{"property":"og:description","content":"MySQL - 索引(B+树) 1. B+ Tree 原理 1.1 数据结构 B Tree 指的是 Balance Tree，也就是平衡树。平衡树是一颗查找树，并且所有叶子节点位于同一层。 B+ Tree 是基于 B Tree 和叶子节点顺序访问指针进行实现，它具有 B Tree 的平衡性，并且通过顺序访问指针来提高区间查询的性能。 在 B+ Tree..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130943789.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL - 索引(B+树)\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130943789.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130943837.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130943875.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. B+ Tree 原理","slug":"_1-b-tree-原理","link":"#_1-b-tree-原理","children":[{"level":3,"title":"1.1 数据结构","slug":"_1-1-数据结构","link":"#_1-1-数据结构","children":[]},{"level":3,"title":"1.2. 操作","slug":"_1-2-操作","link":"#_1-2-操作","children":[]},{"level":3,"title":"1.3. 与红黑树的比较","slug":"_1-3-与红黑树的比较","link":"#_1-3-与红黑树的比较","children":[]}]},{"level":2,"title":"2. MySQL 索引","slug":"_2-mysql-索引","link":"#_2-mysql-索引","children":[{"level":3,"title":"2.1. B+Tree 索引","slug":"_2-1-b-tree-索引","link":"#_2-1-b-tree-索引","children":[]},{"level":3,"title":"2.2. 哈希索引","slug":"_2-2-哈希索引","link":"#_2-2-哈希索引","children":[]},{"level":3,"title":"2.3 全文索引","slug":"_2-3-全文索引","link":"#_2-3-全文索引","children":[]},{"level":3,"title":"2.4 空间数据索引","slug":"_2-4-空间数据索引","link":"#_2-4-空间数据索引","children":[]}]},{"level":2,"title":"3.索引优化","slug":"_3-索引优化","link":"#_3-索引优化","children":[{"level":3,"title":"3.1. 独立的列","slug":"_3-1-独立的列","link":"#_3-1-独立的列","children":[]},{"level":3,"title":"3.2 多列索引","slug":"_3-2-多列索引","link":"#_3-2-多列索引","children":[]},{"level":3,"title":"3.3. 索引列的顺序","slug":"_3-3-索引列的顺序","link":"#_3-3-索引列的顺序","children":[]},{"level":3,"title":"3.4. 前缀索引","slug":"_3-4-前缀索引","link":"#_3-4-前缀索引","children":[]},{"level":3,"title":"3.5. 覆盖索引","slug":"_3-5-覆盖索引","link":"#_3-5-覆盖索引","children":[]}]},{"level":2,"title":"4. 索引的优点","slug":"_4-索引的优点","link":"#_4-索引的优点","children":[]},{"level":2,"title":"5. 索引的使用场景","slug":"_5-索引的使用场景","link":"#_5-索引的使用场景","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":7.56,"words":2268},"filePathRelative":"posts/Database/MySQL/sql-mysql-b-tree.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. B+ Tree 原理</h2>\\n<h3>1.1 数据结构</h3>\\n<p>B Tree 指的是 Balance Tree，也就是平衡树。平衡树是一颗查找树，并且所有叶子节点位于同一层。</p>\\n<p>B+ Tree 是基于 B Tree 和叶子节点顺序访问指针进行实现，它具有 B Tree 的平衡性，并且通过顺序访问指针来提高区间查询的性能。</p>\\n<p>在 B+ Tree 中，一个节点中的 key 从左到右非递减排列，如果某个指针的左右相邻 key 分别是 keyi 和 keyi+1，且不为 null，则该指针指向节点的所有 key 大于等于 keyi 且小于等于 keyi+1。</p>","autoDesc":true}');export{o as comp,d as data};
