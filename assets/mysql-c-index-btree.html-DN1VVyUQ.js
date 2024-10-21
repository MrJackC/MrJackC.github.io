import{_ as t,c as a,a as n,o as r}from"./app-BhoNqsD-.js";const s={};function o(i,e){return r(),a("div",null,e[0]||(e[0]=[n('<h1 id="b-tree索引的优势" tabindex="-1"><a class="header-anchor" href="#b-tree索引的优势"><span>B+TREE索引的优势</span></a></h1><h2 id="_1-影响索引查询效率的主要原因" tabindex="-1"><a class="header-anchor" href="#_1-影响索引查询效率的主要原因"><span>1. 影响索引查询效率的主要原因</span></a></h2><ol><li><p>索引存储在磁盘上</p><p>索引本身也很大，不可能全部存储在内存中，因此索引往往以索引文件的形式存储在磁盘上</p></li><li><p>磁盘I/O存取慢</p><p>索引在查找过程汇总要产生磁盘I/O消耗，相对于内存存储，<strong>I/O存储的消耗要高几个数量级</strong></p></li></ol><p>所以索引的结构组织要尽量减少查找过程<strong>中磁盘I/O的存取次数，提升索引效率</strong></p><h2 id="_2-为什么磁盘存储慢" tabindex="-1"><a class="header-anchor" href="#_2-为什么磁盘存储慢"><span>2. 为什么磁盘存储慢</span></a></h2><h3 id="_2-1-磁盘存取原理" tabindex="-1"><a class="header-anchor" href="#_2-1-磁盘存取原理"><span>2.1 磁盘存取原理</span></a></h3><p>索引一般以文件形式存储在磁盘上，索引检索需要磁盘I/O 操作，与主存不同，磁盘I/O<strong>存在机械运动耗费</strong>。因此磁盘I/O的时间消耗时巨大的</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130838837.png" alt="image-20210207165425148" tabindex="0" loading="lazy"><figcaption>image-20210207165425148</figcaption></figure><h4 id="_2-1-1-磁盘的组成" tabindex="-1"><a class="header-anchor" href="#_2-1-1-磁盘的组成"><span>2.1.1 磁盘的组成</span></a></h4><ul><li><p>一个磁盘由大小相同且同轴的圆形<strong>盘片</strong>组成</p><p>磁盘可以转动（各个磁盘必须同步转动）。</p></li><li><p>在磁盘的一则有<strong>磁头支架</strong></p></li><li><p>磁头支架固定了一组<strong>磁头</strong></p><ul><li>每个磁头负责存储存取一个磁盘的内容</li><li>磁头不能转动，但是可以沿磁盘半径方向运动（实际是斜切向运动）</li><li>每个磁头同一时刻必须是同轴的</li></ul></li></ul><h4 id="_2-1-2-磁盘组成和工作原理" tabindex="-1"><a class="header-anchor" href="#_2-1-2-磁盘组成和工作原理"><span>2.1.2 磁盘组成和工作原理</span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130838867.png" alt="image-20210207165434956" tabindex="0" loading="lazy"><figcaption>image-20210207165434956</figcaption></figure><ul><li><p>磁道</p><p>每个同心环叫做一个</p></li><li><p>扇区</p><p>磁盘的最小存取单元</p></li></ul><h5 id="_2-1-2-1-确定数据位置" tabindex="-1"><a class="header-anchor" href="#_2-1-2-1-确定数据位置"><span>2.1.2.1 确定数据位置</span></a></h5><p>当需要从磁盘读取数据时，系统会将数据<strong>逻辑地址传给磁盘</strong>，磁盘的控制电路按照寻址逻辑将逻辑地址<strong>翻译成物理地址</strong>。既确定要读的数据在哪个磁道，哪个扇区</p><h5 id="_2-1-2-2-磁头寻道" tabindex="-1"><a class="header-anchor" href="#_2-1-2-2-磁头寻道"><span>2.1.2.2 磁头寻道</span></a></h5><p>为了读取这个扇区的数据，需要将磁头放在这个扇区上方，为了实现这一点，磁头需要移动对准响应的磁道，这个过程叫做寻道，所耗费的时间叫寻道时间，</p><h5 id="_2-1-2-3-磁盘旋转到对应扇区" tabindex="-1"><a class="header-anchor" href="#_2-1-2-3-磁盘旋转到对应扇区"><span>2.1.2.3 磁盘旋转到对应扇区</span></a></h5><p>然后磁盘旋转将目标扇区旋转到磁头下,这个过程耗费的时间叫做旋转时间</p><h2 id="_3-磁盘局部性原理与磁盘预读" tabindex="-1"><a class="header-anchor" href="#_3-磁盘局部性原理与磁盘预读"><span>3. 磁盘局部性原理与磁盘预读</span></a></h2><p>由于存储介质的特性，磁盘本身存储就比主存慢很多，在加上机械运动耗费，磁盘的存取速度往往是主存的几百分之一，因此为了提高效率，<strong>要尽量减少磁盘I/O</strong>，为了达到这个目的，磁盘往往不是严格按需读取，而是每次都会<strong>预读</strong>，即使只需要一个字节，磁盘也会从这个位置开始，<strong>顺序向后读取一定长度的数据放入内存，预读可以提高I/O效率</strong>。<strong>预读的长度一般为页</strong>（page:计算机管理存储器的逻辑块-通常为4k）的整数倍。主存和磁盘以页为单位交换数据。当程序要去<strong>读的数据不再主存中时</strong>，会触发一个<strong>缺页异常</strong>，此时系统会向磁盘发出读盘信号，<strong>磁盘会找到数据的起始位置并向后连续读取一页或几页载入内存中</strong></p><h2 id="_4-b-b-tree索引的优势" tabindex="-1"><a class="header-anchor" href="#_4-b-b-tree索引的优势"><span>4.B-/B+Tree索引的优势</span></a></h2><p><strong>一般使用磁盘的I/O 次数评价索引优势</strong></p><p>那么BTree如何减少磁盘次数的呢</p><ol><li><p>结合操作系统存储结构优化处理：MySQL巧妙运用操作系统存储结构**（一个节点分配到一个存储页中-&gt;尽量减少I/O操作）&amp;磁盘预读（缓存预读-&gt;加速预读马上要用到的数据）**</p><ul><li><p>详解:</p><p><strong>Mysql设计利用了磁盘预读原理，将一个b+tree节点大小设为一个页大小，在新建节点时直接申请一个页的控件，这样就能保证一个节点物理上存储在一个页里，加之计算机存储分配都是按页对其，这样就实现了每个Node节点只需要一次IO操作</strong></p></li></ul></li><li><p><strong>B+Tree单个节点能放多个子节点</strong>，相同IO次数，检索出更多东西<br> 这也是B+Tree相比B-Tree能查询出更多数据的原因</p><ul><li><p>详解</p><p><strong>单个节点能放多个子节点</strong>，查询IO次数相同(mysql查询IO次数最多3-5次-所以需要每个节点需要存储很多数据)</p></li></ul></li><li><p>B+Tree<strong>只在叶子节点存储数据&amp;所有叶子节点包含一个链指针&amp;其他内层非叶子节点只存储索引数据</strong>，只利用索引<strong>快速定位数据索引范围</strong>，先定位索引<strong>再通过索引高效快速定位数据</strong></p></li></ol><ul><li><p>B+Tree更适合外存索引，原因和内节点出度d有关。从上面分析可以看到，d越大索引的性能越好，而出度的上限取决于节点内key和data的大小：</p></li><li><p>B+Tree内节点去掉了data域，因此可以拥有更大的出度，拥有更好的性能。只利用索引快速定位数据索引范围，先定位索引再通过索引高效快速定位数据。</p><p>dmax=floor(pagesize/(keysize+datasize+pointsize))</p></li></ul>',26)]))}const l=t(s,[["render",o],["__file","mysql-c-index-btree.html.vue"]]),g=JSON.parse('{"path":"/posts/Database/MySQL/mysql-c-index-btree.html","title":"B+TREE索引的优势","lang":"zh-CN","frontmatter":{"aliases":"B+TREE索引的优势","tags":null,"cssclass":null,"source":null,"order":40,"category":["数据库"],"created":"2024-02-22 10:49","updated":"2024-03-13 08:39","description":"B+TREE索引的优势 1. 影响索引查询效率的主要原因 索引存储在磁盘上 索引本身也很大，不可能全部存储在内存中，因此索引往往以索引文件的形式存储在磁盘上 磁盘I/O存取慢 索引在查找过程汇总要产生磁盘I/O消耗，相对于内存存储，I/O存储的消耗要高几个数量级 所以索引的结构组织要尽量减少查找过程中磁盘I/O的存取次数，提升索引效率 2. 为什么磁盘...","head":[["meta",{"property":"og:url","content":"https://mrjason.me/posts/Database/MySQL/mysql-c-index-btree.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"B+TREE索引的优势"}],["meta",{"property":"og:description","content":"B+TREE索引的优势 1. 影响索引查询效率的主要原因 索引存储在磁盘上 索引本身也很大，不可能全部存储在内存中，因此索引往往以索引文件的形式存储在磁盘上 磁盘I/O存取慢 索引在查找过程汇总要产生磁盘I/O消耗，相对于内存存储，I/O存储的消耗要高几个数量级 所以索引的结构组织要尽量减少查找过程中磁盘I/O的存取次数，提升索引效率 2. 为什么磁盘..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130838837.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"B+TREE索引的优势\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130838837.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130838867.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjason.me\\"}]}"]]},"headers":[{"level":2,"title":"1. 影响索引查询效率的主要原因","slug":"_1-影响索引查询效率的主要原因","link":"#_1-影响索引查询效率的主要原因","children":[]},{"level":2,"title":"2. 为什么磁盘存储慢","slug":"_2-为什么磁盘存储慢","link":"#_2-为什么磁盘存储慢","children":[{"level":3,"title":"2.1 磁盘存取原理","slug":"_2-1-磁盘存取原理","link":"#_2-1-磁盘存取原理","children":[]}]},{"level":2,"title":"3. 磁盘局部性原理与磁盘预读","slug":"_3-磁盘局部性原理与磁盘预读","link":"#_3-磁盘局部性原理与磁盘预读","children":[]},{"level":2,"title":"4.B-/B+Tree索引的优势","slug":"_4-b-b-tree索引的优势","link":"#_4-b-b-tree索引的优势","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.5,"words":1351},"filePathRelative":"posts/Database/MySQL/mysql-c-index-btree.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 影响索引查询效率的主要原因</h2>\\n<ol>\\n<li>\\n<p>索引存储在磁盘上</p>\\n<p>索引本身也很大，不可能全部存储在内存中，因此索引往往以索引文件的形式存储在磁盘上</p>\\n</li>\\n<li>\\n<p>磁盘I/O存取慢</p>\\n<p>索引在查找过程汇总要产生磁盘I/O消耗，相对于内存存储，<strong>I/O存储的消耗要高几个数量级</strong></p>\\n</li>\\n</ol>\\n<p>所以索引的结构组织要尽量减少查找过程<strong>中磁盘I/O的存取次数，提升索引效率</strong></p>\\n<h2>2. 为什么磁盘存储慢</h2>\\n<h3>2.1 磁盘存取原理</h3>","autoDesc":true}');export{l as comp,g as data};
