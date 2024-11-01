import{_ as t,c as a,a as n,o as r}from"./app-DP7tPpgD.js";const s={};function o(i,e){return r(),a("div",null,e[0]||(e[0]=[n('<h1 id="磁盘存取" tabindex="-1"><a class="header-anchor" href="#磁盘存取"><span>磁盘存取</span></a></h1><h3 id="_1-磁盘存取原理" tabindex="-1"><a class="header-anchor" href="#_1-磁盘存取原理"><span>1 磁盘存取原理</span></a></h3><p>索引一般以文件形式存储在磁盘上，索引检索需要磁盘I/O 操作，与主存不同，磁盘I/O<strong>存在机械运动耗费</strong>。因此磁盘I/O的时间消耗时巨大的</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231005293.png" alt="image-20190905233758433" tabindex="0" loading="lazy"><figcaption>image-20190905233758433</figcaption></figure><h4 id="_1-1-磁盘的组成" tabindex="-1"><a class="header-anchor" href="#_1-1-磁盘的组成"><span>1.1 磁盘的组成</span></a></h4><ul><li><p>一个磁盘由大小相同且同轴的圆形<strong>盘片</strong>组成</p><p>磁盘可以转动（各个磁盘必须同步转动）。</p></li><li><p>在磁盘的一则有<strong>磁头支架</strong></p></li><li><p>磁头支架固定了一组<strong>磁头</strong></p><ul><li>每个磁头负责存储存取一个磁盘的内容</li><li>磁头不能转动，但是可以沿磁盘半径方向运动（实际是斜切向运动）</li><li>每个磁头同一时刻必须是同轴的</li></ul></li></ul><h4 id="_1-2-磁盘组成和工作原理" tabindex="-1"><a class="header-anchor" href="#_1-2-磁盘组成和工作原理"><span>1.2 磁盘组成和工作原理</span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231005338.png" alt="image-20190905235059595" tabindex="0" loading="lazy"><figcaption>image-20190905235059595</figcaption></figure><ul><li><p>磁道</p><p>每个同心环叫做一个</p></li><li><p>扇区</p><p>磁盘的最小存取单元</p></li></ul><h5 id="_1-2-1-确定数据位置" tabindex="-1"><a class="header-anchor" href="#_1-2-1-确定数据位置"><span>1.2.1 确定数据位置</span></a></h5><p>当需要从磁盘读取数据时，系统会将数据<strong>逻辑地址传给磁盘</strong>，磁盘的控制电路按照寻址逻辑将逻辑地址<strong>翻译成物理地址</strong>。既确定要读的数据在哪个磁道，哪个扇区</p><h5 id="_1-2-2-磁头寻道" tabindex="-1"><a class="header-anchor" href="#_1-2-2-磁头寻道"><span>1.2.2 磁头寻道</span></a></h5><p>为了读取这个扇区的数据，需要将磁头放在这个扇区上方，为了实现这一点，磁头需要移动对准响应的磁道，这个过程叫做寻道，所耗费的时间叫寻道时间，</p><h5 id="_1-2-3-磁盘旋转到对应扇区" tabindex="-1"><a class="header-anchor" href="#_1-2-3-磁盘旋转到对应扇区"><span>1.2.3 磁盘旋转到对应扇区</span></a></h5><p>然后磁盘旋转将目标扇区旋转到磁头下,这个过程耗费的时间叫做旋转时间</p><h2 id="_2-磁盘局部性原理与磁盘预读" tabindex="-1"><a class="header-anchor" href="#_2-磁盘局部性原理与磁盘预读"><span>2. 磁盘局部性原理与磁盘预读</span></a></h2><p>由于存储介质的特性，磁盘本身存储就比主存慢很多，在加上机械运动耗费，磁盘的存取速度往往是主存的几百分之一，因此为了提高效率，<strong>要尽量减少磁盘I/O</strong>，为了达到这个目的，磁盘往往不是严格按需读取，而是每次都会<strong>预读</strong>，即使只需要一个字节，磁盘也会从这个位置开始，<strong>顺序向后读取一定长度的数据放入内存，预读可以提高I/O效率</strong>。<strong>预读的长度一般为页</strong>（page:计算机管理存储器的逻辑块-通常为4k）的整数倍。主存和磁盘以页为单位交换数据。当程序要去<strong>读的数据不再主存中时</strong>，会触发一个<strong>缺页异常</strong>，此时系统会向磁盘发出读盘信号，<strong>磁盘会找到数据的起始位置并向后连续读取一页或几页载入内存中</strong></p>',17)]))}const l=t(s,[["render",o],["__file","cs-x-disk.html.vue"]]),g=JSON.parse(`{"path":"/posts/Development-Tools/CS/cs-x-disk.html","title":"磁盘存取","lang":"zh-CN","frontmatter":{"aliases":"磁盘存取, '磁盘存取'","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:50","updated":"2024-05-30 16:24","description":"磁盘存取 1 磁盘存取原理 索引一般以文件形式存储在磁盘上，索引检索需要磁盘I/O 操作，与主存不同，磁盘I/O存在机械运动耗费。因此磁盘I/O的时间消耗时巨大的 image-20190905233758433image-20190905233758433 1.1 磁盘的组成 一个磁盘由大小相同且同轴的圆形盘片组成 磁盘可以转动（各个磁盘必须同步转动）...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Development-Tools/CS/cs-x-disk.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"磁盘存取"}],["meta",{"property":"og:description","content":"磁盘存取 1 磁盘存取原理 索引一般以文件形式存储在磁盘上，索引检索需要磁盘I/O 操作，与主存不同，磁盘I/O存在机械运动耗费。因此磁盘I/O的时间消耗时巨大的 image-20190905233758433image-20190905233758433 1.1 磁盘的组成 一个磁盘由大小相同且同轴的圆形盘片组成 磁盘可以转动（各个磁盘必须同步转动）..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231005293.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"磁盘存取\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231005293.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231005338.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":3,"title":"1 磁盘存取原理","slug":"_1-磁盘存取原理","link":"#_1-磁盘存取原理","children":[]},{"level":2,"title":"2. 磁盘局部性原理与磁盘预读","slug":"_2-磁盘局部性原理与磁盘预读","link":"#_2-磁盘局部性原理与磁盘预读","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.33,"words":699},"filePathRelative":"posts/Development-Tools/CS/cs-x-disk.md","localizedDate":"2024年10月28日","excerpt":"\\n<h3>1 磁盘存取原理</h3>\\n<p>索引一般以文件形式存储在磁盘上，索引检索需要磁盘I/O 操作，与主存不同，磁盘I/O<strong>存在机械运动耗费</strong>。因此磁盘I/O的时间消耗时巨大的</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231005293.png\\" alt=\\"image-20190905233758433\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20190905233758433</figcaption></figure>","autoDesc":true}`);export{l as comp,g as data};
