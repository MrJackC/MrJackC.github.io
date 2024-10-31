import{_ as a,c as t,a as r,o as n}from"./app-mWs04Xnh.js";const i={};function s(l,e){return n(),t("div",null,e[0]||(e[0]=[r('<h1 id="索引常见的数据结构" tabindex="-1"><a class="header-anchor" href="#索引常见的数据结构"><span>索引常见的数据结构</span></a></h1><h2 id="_1-顺序查找" tabindex="-1"><a class="header-anchor" href="#_1-顺序查找"><span>1. 顺序查找</span></a></h2><p><strong>算法复杂度：O(n)</strong></p><p>最基本的查询算法，复杂度O(n),大数据量时此算法效率非常糟糕</p><h2 id="_2-二叉树查找-binary-tree-search" tabindex="-1"><a class="header-anchor" href="#_2-二叉树查找-binary-tree-search"><span>2. 二叉树查找(binary tree search)</span></a></h2><p><strong>算法复杂度：O(log2n)</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130844979.png" alt="image-20190904230943376" tabindex="0" loading="lazy"><figcaption>image-20190904230943376</figcaption></figure><p>左边是数据表，一共有两列七条记录，最左边的是数据记录的物理地址。（逻辑相邻的记录在磁盘上也并不一定是物理相邻）。</p><p>为了加快col2 的查找，可以维护一个右边所示的二叉查找树，<strong>每个节点分别包含索引键值和一个指向对应数据记录物理地址的指针</strong>，这样就可以运用二叉查找在O(log2n)的复杂度内获取响应的数据</p><h2 id="_3-hash索引" tabindex="-1"><a class="header-anchor" href="#_3-hash索引"><span>3. hash索引</span></a></h2><ul><li>优点： <ul><li>查询效率高</li></ul></li><li>缺点 <ul><li>无法满足范围查找 <ul><li>仅仅能满足“=”，“in” ,不能使用范围查询</li><li>无法被用来避免数据的排序操作</li><li>不能利用部分索引键查询</li><li>不能避免表扫描</li><li>遇到大量Hash值相等的情况后，性能不一定就会比B-Tree索引高</li></ul></li></ul></li></ul><h2 id="_4-二叉树、红黑树" tabindex="-1"><a class="header-anchor" href="#_4-二叉树、红黑树"><span>4. 二叉树、红黑树</span></a></h2><p><strong>算法复杂度：O(h)</strong></p><p>这将导致树的高度非常高。（平衡二叉树一个节点只能有左子树和右子树），<strong>逻辑上很近的节点（父子）物理上可能很远，无法利用局部性，IO次数多查找慢，效率低</strong>（逻辑上相邻节点没法直接通过顺序指针关联，可能需要迭代回上层节点重复向下遍历查找对应的节点，效率低）</p><h2 id="_5-b-tree" tabindex="-1"><a class="header-anchor" href="#_5-b-tree"><span>5. B-Tree</span></a></h2><p>结构：<strong>B-Tree 每个节点都是一个二元数组</strong>，所有的节点都可以存储数据，key为索引key，data为除key 指代的数据。结构如下</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130845018.png" alt="image-20190904234252606" tabindex="0" loading="lazy"><figcaption>image-20190904234252606</figcaption></figure><h3 id="_5-1-检索原理" tabindex="-1"><a class="header-anchor" href="#_5-1-检索原理"><span>5.1 检索原理：</span></a></h3><p>首先从<strong>根节点进行二分查找</strong>，如果找到则返回对应节点的data，否则<strong>对相应区间的指针指向的节点递归</strong>进行查找，直到找到节点或未找到节点返回null指针。</p><h3 id="_5-2-b-tree缺点" tabindex="-1"><a class="header-anchor" href="#_5-2-b-tree缺点"><span>5.2 B-Tree缺点</span></a></h3><ul><li>插入删除新的数据记录会破坏B-Tree的性质，因此在插入删除时，需要对树进行一个分裂、合并、转移等操作以保持B-Tree性质。造成IO操作频繁</li><li>区间查找可能需要返回上层节点重复遍历，IO操作繁琐。</li></ul><h2 id="_6-b-tree" tabindex="-1"><a class="header-anchor" href="#_6-b-tree"><span>6. B+Tree</span></a></h2><p>B+Tree 是B-Tree的变种</p><h3 id="_6-1-与b-tree的不同点" tabindex="-1"><a class="header-anchor" href="#_6-1-与b-tree的不同点"><span>6.1 与B-Tree的不同点</span></a></h3><ul><li>非叶子节点不存储data，只存储索引key；</li><li>只有叶子节点才存储data</li></ul><h3 id="_6-2-b-tree数据结构" tabindex="-1"><a class="header-anchor" href="#_6-2-b-tree数据结构"><span>6.2 B+Tree数据结构</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130845048.png" alt="image-20190904235621742" tabindex="0" loading="lazy"><figcaption>image-20190904235621742</figcaption></figure><h3 id="_6-3-mysql-中的b-tree" tabindex="-1"><a class="header-anchor" href="#_6-3-mysql-中的b-tree"><span>6.3 MySQL 中的B+Tree</span></a></h3><h4 id="_6-3-1-概述" tabindex="-1"><a class="header-anchor" href="#_6-3-1-概述"><span>6.3.1 概述</span></a></h4><p>在经典B+Tree的基础上进行了优化，增加了<strong>顺序访问指针</strong>。</p><h4 id="_6-3-2-详细" tabindex="-1"><a class="header-anchor" href="#_6-3-2-详细"><span>6.3.2 详细</span></a></h4><p>在B+Tree的每个叶子节点增加一个指向相邻叶子节点的指针，就形成了<strong>带有顺序访问指针的B+Tree</strong>。这样就<strong>提高了区间访问性能</strong>：</p><h4 id="_6-3-3-案例" tabindex="-1"><a class="header-anchor" href="#_6-3-3-案例"><span>6.3.3 案例：</span></a></h4><p>如果要查询key为从18到49的所有数据记录，当找到18后，只需顺着节点和指针顺序遍历就可以一次性访问到所有数据节点，极大提到了区间查询效率(<strong>无需返回上层父节点重复遍历查找减少IO操作</strong>)。</p><h4 id="_6-3-4-数据结构" tabindex="-1"><a class="header-anchor" href="#_6-3-4-数据结构"><span>6.3.4 数据结构</span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130845078.png" alt="image-20190905000332979" tabindex="0" loading="lazy"><figcaption>image-20190905000332979</figcaption></figure><h3 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h3><p><a href="https://www.jianshu.com/p/486a514b0ded" target="_blank" rel="noopener noreferrer">MYSQL-B+TREE索引原理</a></p>',38)]))}const o=a(i,[["render",s],["__file","mysql-c-index-structure.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/MySQL/mysql-c-index-structure.html","title":"索引常见的数据结构","lang":"zh-CN","frontmatter":{"aliases":"索引常见的数据结构","tags":null,"cssclass":null,"source":null,"category":["数据库"],"created":"2024-02-22 10:49","updated":"2024-03-13 08:51","description":"索引常见的数据结构 1. 顺序查找 算法复杂度：O(n) 最基本的查询算法，复杂度O(n),大数据量时此算法效率非常糟糕 2. 二叉树查找(binary tree search) 算法复杂度：O(log2n) image-20190904230943376image-20190904230943376 左边是数据表，一共有两列七条记录，最左边的是数据记...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MySQL/mysql-c-index-structure.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"索引常见的数据结构"}],["meta",{"property":"og:description","content":"索引常见的数据结构 1. 顺序查找 算法复杂度：O(n) 最基本的查询算法，复杂度O(n),大数据量时此算法效率非常糟糕 2. 二叉树查找(binary tree search) 算法复杂度：O(log2n) image-20190904230943376image-20190904230943376 左边是数据表，一共有两列七条记录，最左边的是数据记..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130844979.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"索引常见的数据结构\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130844979.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130845018.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130845048.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130845078.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 顺序查找","slug":"_1-顺序查找","link":"#_1-顺序查找","children":[]},{"level":2,"title":"2. 二叉树查找(binary tree search)","slug":"_2-二叉树查找-binary-tree-search","link":"#_2-二叉树查找-binary-tree-search","children":[]},{"level":2,"title":"3. hash索引","slug":"_3-hash索引","link":"#_3-hash索引","children":[]},{"level":2,"title":"4. 二叉树、红黑树","slug":"_4-二叉树、红黑树","link":"#_4-二叉树、红黑树","children":[]},{"level":2,"title":"5. B-Tree","slug":"_5-b-tree","link":"#_5-b-tree","children":[{"level":3,"title":"5.1 检索原理：","slug":"_5-1-检索原理","link":"#_5-1-检索原理","children":[]},{"level":3,"title":"5.2 B-Tree缺点","slug":"_5-2-b-tree缺点","link":"#_5-2-b-tree缺点","children":[]}]},{"level":2,"title":"6. B+Tree","slug":"_6-b-tree","link":"#_6-b-tree","children":[{"level":3,"title":"6.1 与B-Tree的不同点","slug":"_6-1-与b-tree的不同点","link":"#_6-1-与b-tree的不同点","children":[]},{"level":3,"title":"6.2 B+Tree数据结构","slug":"_6-2-b-tree数据结构","link":"#_6-2-b-tree数据结构","children":[]},{"level":3,"title":"6.3 MySQL 中的B+Tree","slug":"_6-3-mysql-中的b-tree","link":"#_6-3-mysql-中的b-tree","children":[]},{"level":3,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3,"words":900},"filePathRelative":"posts/Database/MySQL/mysql-c-index-structure.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 顺序查找</h2>\\n<p><strong>算法复杂度：O(n)</strong></p>\\n<p>最基本的查询算法，复杂度O(n),大数据量时此算法效率非常糟糕</p>\\n<h2>2. 二叉树查找(binary tree search)</h2>\\n<p><strong>算法复杂度：O(log2n)</strong></p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130844979.png\\" alt=\\"image-20190904230943376\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20190904230943376</figcaption></figure>","autoDesc":true}');export{o as comp,c as data};
