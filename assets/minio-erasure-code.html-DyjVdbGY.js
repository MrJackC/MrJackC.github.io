import{_ as a,c as i,a as n,o as t}from"./app-fWubcX7c.js";const o={};function r(s,e){return t(),i("div",null,e[0]||(e[0]=[n('<h1 id="minio基础-minio纠删码" tabindex="-1"><a class="header-anchor" href="#minio基础-minio纠删码"><span>Minio基础 - Minio纠删码</span></a></h1><blockquote><p>Minio使用纠删码<code>erasure code</code>和校验和<code>checksum</code>来保护数据免受硬件故障和无声数据损坏。 即便您丢失一半数量（N/2）的硬盘，您仍然可以恢复数据。</p></blockquote><h2 id="_1-什么是纠删码erasure-code" tabindex="-1"><a class="header-anchor" href="#_1-什么是纠删码erasure-code"><span>1. 什么是纠删码<code>erasure code</code>？</span></a></h2><p><strong>纠删码是一种恢复丢失和损坏数据的数学算法， Minio采用Reed-Solomon code将对象拆分成N/2数据和N/2 奇偶校验块</strong>。 这就意味着如果是12块盘，一个对象会被分成6个数据块、6个奇偶校验块，你可以丢失任意6块盘（不管其是存放的数据块还是奇偶校验块），你仍可以从剩下的盘中的数据进行恢复</p><h2 id="_2-为什么纠删码有用" tabindex="-1"><a class="header-anchor" href="#_2-为什么纠删码有用"><span>2. 为什么纠删码有用?</span></a></h2><p>纠删码的工作原理和RAID或者复制不同，像RAID6可以在损失两块盘的情况下不丢数据</p><ul><li><p>而Minio纠删码可以在丢失一半的盘的情况下，仍可以保证数据安全。</p></li><li><p>而且Minio纠删码是作用在对象级别，可以一次恢复一个对象，而RAID是作用在卷级别，数据恢复时间很长。</p><p>Minio对每个对象单独编码，存储服务一经部署，通常情况下是不需要更换硬盘或者修复。Minio纠删码的设计目标是为了性能和尽可能的使用硬件加速。</p></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301237385.png" alt="image-20220715111328603" tabindex="0" loading="lazy"><figcaption>image-20220715111328603</figcaption></figure><h2 id="_3-什么是位衰减bit-rot保护" tabindex="-1"><a class="header-anchor" href="#_3-什么是位衰减bit-rot保护"><span>3. 什么是位衰减<code>bit rot</code>保护?</span></a></h2><p>位衰减又被称为数据腐化<code>Data Rot</code>、无声数据损坏<code>Silent Data Corruption</code>,是目前硬盘数据的一种严重数据丢失问题。硬盘上的数据可能会神不知鬼不觉就损坏了，也没有什么错误日志。正所谓明枪易躲，暗箭难防，这种背地里犯的错比硬盘直接咔咔宕了还危险。 不过不用怕，Minio纠删码采用了高速 <a href="https://github.com/minio/highwayhash" target="_blank" rel="noopener noreferrer">HighwayHash</a> 基于哈希的校验和来防范位衰减。</p><h2 id="_4-更深入的理解" tabindex="-1"><a class="header-anchor" href="#_4-更深入的理解"><span>4. 更深入的理解</span></a></h2><h3 id="_4-1-数据冗余技术" tabindex="-1"><a class="header-anchor" href="#_4-1-数据冗余技术"><span>4.1 数据冗余技术</span></a></h3><p><strong>副本策略</strong>和<strong>纠删码</strong>是存储领域常见的两种数据冗余技术。相比于副本策略，纠删码具有更高的磁盘利用率。 Reed-Solomon码是一种常见的纠删码。</p><h4 id="_4-1-1-纠删码-erasure-code" tabindex="-1"><a class="header-anchor" href="#_4-1-1-纠删码-erasure-code"><span>4.1.1 纠删码 Erasure Code</span></a></h4><p>Erasure Code是一种编码技术，它可以将n份原始数据，增加m份数据，并能通过n+m份中的任意n份数据，还原为原始数据。即如果有任意小于等于m份的数据失效，仍然能通过剩下的数据还原出来。</p><p>纠删码技术在分布式存储 系统中的应用主要有三类，</p><ul><li>阵列纠删码（Array Code: RAID5、RAID6等）</li><li><strong>RS(Reed-Solomon)里德-所罗门类纠删码</strong></li><li>LDPC(LowDensity Parity Check Code)低密度奇偶校验纠删码。 LDPC码目前主要用于通信、视频和音频编码等领域。</li></ul><p>纠删码技术主要是通过纠删码算法将原始的数据进行编码得到冗余，并将数据和冗余一并存储起来，以达到容错的目的。<strong>其基本思想是将n块原始的数据元素通过一定的计算，得到m块冗余元素（校验块）。对于这n+m块的元素，当其中任意的m块元素出错（包括原始数据和冗余数据）时，均可以通过对应的重构算法恢复出原来的n块数据</strong>。</p><ul><li>生成校验的过程被成为编码（encoding）</li><li>恢复丢失数据块的过程被称为解码（decoding）。磁盘利用率为n/(n+m)。</li></ul><p>基于纠删码的方法与多副本方法相比具有冗余度低、磁盘利用率高等优点。</p><h4 id="_4-1-2-多副本策略" tabindex="-1"><a class="header-anchor" href="#_4-1-2-多副本策略"><span>4.1.2 多副本策略</span></a></h4><p>多副本策略即将数据存储多个副本（一般是三副本，比如HDFS），当某个副本丢失时，可以通过其他副本复制回来。三副本的磁盘利用率为1/3。</p><h4 id="_4-1-3-两种冗余技术对比" tabindex="-1"><a class="header-anchor" href="#_4-1-3-两种冗余技术对比"><span>4.1.3 两种冗余技术对比</span></a></h4><table><thead><tr><th>两种技术</th><th>磁盘利用率</th><th>计算开销</th><th>网络消耗</th><th>恢复效率</th></tr></thead><tbody><tr><td>多副本(3副本)</td><td>1/3</td><td>几乎没有</td><td>较低</td><td>较高</td></tr><tr><td>纠删码(n+m)</td><td>n/(n+m)</td><td>高</td><td>较高</td><td>较低</td></tr></tbody></table><blockquote><p>工程实践中，<strong>一般对于热数据还是会使用多副本策略来冗余，冷数据使用纠删码</strong>。</p></blockquote><h3 id="_4-2-reed-solomon-rs-码" tabindex="-1"><a class="header-anchor" href="#_4-2-reed-solomon-rs-码"><span>4.2 Reed-Solomon(RS)码</span></a></h3><p>Reed-Solomon（RS）码是存储系统较为常用的一种纠删码，它有两个参数n和m，记为RS(n,m)。n代表原始数据块个数。m代表校验块个数。接下来介绍RS码的原理。</p><h4 id="_4-2-1-rs码原理" tabindex="-1"><a class="header-anchor" href="#_4-2-1-rs码原理"><span>4.2.1 RS码原理</span></a></h4><p>以n=5，m=3为例。即5个原始数据块，乘上一个(n+m)*n的矩阵，然后得出一个(n+m)*1的矩阵。根据矩阵特点可以得知结果矩阵中前面5个值与原来的5个数据块的值相等，而最后3个则是计算出来的校验块。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301237426.png" alt="image-20220715143632700" tabindex="0" loading="lazy"><figcaption>image-20220715143632700</figcaption></figure><p>以上过程为编码过程。D是原始数据块，得到的C为校验块。</p><h4 id="_4-2-2-丢失了m块数据" tabindex="-1"><a class="header-anchor" href="#_4-2-2-丢失了m块数据"><span>4.2.2 丢失了m块数据</span></a></h4><p>假设丢失了m块数据。如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301237448.png" alt="image-20220715143811177" tabindex="0" loading="lazy"><figcaption>image-20220715143811177</figcaption></figure><p>那我们如何从剩余的n个数据块（注意，这里剩余的n块可能包含几个原始数据块+几个校验块）恢复出来原始的n个数据块呢，就需要通过下面的decoding（解码）过程来实现。</p><h5 id="_4-2-2-1-第一步-删除丢失的行" tabindex="-1"><a class="header-anchor" href="#_4-2-2-1-第一步-删除丢失的行"><span>4.2.2.1 第一步：删除丢失的行</span></a></h5><p>第一步：从编码矩阵中删去丢失数据块和丢失编码块对应行。 将删掉m个块的(n+m)<em>1个矩阵变形为n</em>1矩阵，同时B矩阵也需要删掉对应的m个行得出一个B&#39;的变形矩阵，这个B&#39;就是n*n矩阵。如下：假设D1、D4、C2丢失，我们得到如下B’矩阵及等式。</p><h5 id="_4-2-2-2-第二步-求出b-的逆矩阵。" tabindex="-1"><a class="header-anchor" href="#_4-2-2-2-第二步-求出b-的逆矩阵。"><span>4.2.2.2 第二步：求出B’的逆矩阵。</span></a></h5><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301237473.png" alt="image-20220715144222171" tabindex="0" loading="lazy"><figcaption>image-20220715144222171</figcaption></figure><h5 id="_4-2-2-3-第三步-等式两边分别乘上b-的逆矩阵。" tabindex="-1"><a class="header-anchor" href="#_4-2-2-3-第三步-等式两边分别乘上b-的逆矩阵。"><span>4.2.2.3 第三步：等式两边分别乘上B’的逆矩阵。</span></a></h5><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301237498.png" alt="image-20220715144253191" tabindex="0" loading="lazy"><figcaption>image-20220715144253191</figcaption></figure><p>B’和它的逆矩阵相乘得到单位矩阵I，如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301237519.png" alt="image-20220715144311947" tabindex="0" loading="lazy"><figcaption>image-20220715144311947</figcaption></figure><p>左边只剩下原始数据矩阵D：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301237538.png" alt="image-20220715144327852" tabindex="0" loading="lazy"><figcaption>image-20220715144327852</figcaption></figure><p>至此完成解码过程。</p><p>注：图中黄色部分为范德蒙矩阵。至于如何生成B矩阵，以及如何求B’的逆矩阵，请查看其他相关文献，这里不再赘述。</p><h4 id="_4-2-3-rs的特点" tabindex="-1"><a class="header-anchor" href="#_4-2-3-rs的特点"><span>4.2.3 RS的特点</span></a></h4><ul><li>低冗余度，高磁盘利用率。</li><li>数据恢复代价高。 丢失数据块或者编码块时， RS需要读取n个数据块和校验块才能恢复数据， 数据恢复效率也在一定程度上制约了RS的可靠性。</li><li>数据更新代价高。 数据更新相当于重新编码， 代价很高， 因此常常针对只读数据，或者冷数据。</li></ul><h3 id="_4-3-纠删码优-劣势" tabindex="-1"><a class="header-anchor" href="#_4-3-纠删码优-劣势"><span>4.3 纠删码优/劣势</span></a></h3><h4 id="_4-3-1-优势" tabindex="-1"><a class="header-anchor" href="#_4-3-1-优势"><span>4.3.1 优势</span></a></h4><p>纠删码技术作为一门数据保护技术，自然有许多的优势，首先可以解决的就是目前分布式系统，云计算中采用副本来防止数据的丢失。副本机制确实可以解决数据丢失的问题，但是翻倍的数据存储空间也必然要被消耗，这一点却是非常致命的。EC技术的运用就可以直接解决这个问题。</p><h4 id="_4-3-2-劣势" tabindex="-1"><a class="header-anchor" href="#_4-3-2-劣势"><span>4.3.2 劣势</span></a></h4><p>EC技术的优势确实明显，但是他的使用也是需要一些代价的，一旦数据需要恢复，他会造成2大资源的消耗:</p><ol><li>网络带宽的消耗，因为数据恢复需要去读其他的数据块和校验块</li><li>进行编码，解码计算需要消耗CPU资源</li></ol><p>就是既耗网络又耗CPU</p><h3 id="_4-3-3-总结" tabindex="-1"><a class="header-anchor" href="#_4-3-3-总结"><span>4.3.3 总结</span></a></h3><p>最好的选择是用于冷数据集群，有下面2点原因可以支持这种选择</p><ol><li>冷数据集群往往有大量的长期没有被访问的数据，体量确实很大，采用EC技术，可以大大减少副本数</li><li>冷数据集群基本稳定，耗资源量少，所以一旦进行数据恢复，将不会对集群造成大的影响</li></ol><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="http://docs.minio.org.cn/docs/master/minio-erasure-code-quickstart-guide" target="_blank" rel="noopener noreferrer">Minio纠删码快速入门</a></p><p><a href="https://www.jianshu.com/p/acf0f392bac9" target="_blank" rel="noopener noreferrer">纠删码Erasure Coding （分布式存储系统）</a></p>',62)]))}const c=a(o,[["render",r],["__file","minio-erasure-code.html.vue"]]),h=JSON.parse('{"path":"/posts/Architect/minio/minio-erasure-code.html","title":"Minio基础 - Minio纠删码","lang":"zh-CN","frontmatter":{"order":40,"category":["Minio"],"description":"Minio基础 - Minio纠删码 Minio使用纠删码erasure code和校验和checksum来保护数据免受硬件故障和无声数据损坏。 即便您丢失一半数量（N/2）的硬盘，您仍然可以恢复数据。 1. 什么是纠删码erasure code？ 纠删码是一种恢复丢失和损坏数据的数学算法， Minio采用Reed-Solomon code将对象拆分成...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/minio/minio-erasure-code.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Minio基础 - Minio纠删码"}],["meta",{"property":"og:description","content":"Minio基础 - Minio纠删码 Minio使用纠删码erasure code和校验和checksum来保护数据免受硬件故障和无声数据损坏。 即便您丢失一半数量（N/2）的硬盘，您仍然可以恢复数据。 1. 什么是纠删码erasure code？ 纠删码是一种恢复丢失和损坏数据的数学算法， Minio采用Reed-Solomon code将对象拆分成..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301237385.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Minio基础 - Minio纠删码\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301237385.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301237426.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301237448.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301237473.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301237498.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301237519.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301237538.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是纠删码erasure code？","slug":"_1-什么是纠删码erasure-code","link":"#_1-什么是纠删码erasure-code","children":[]},{"level":2,"title":"2. 为什么纠删码有用?","slug":"_2-为什么纠删码有用","link":"#_2-为什么纠删码有用","children":[]},{"level":2,"title":"3. 什么是位衰减bit rot保护?","slug":"_3-什么是位衰减bit-rot保护","link":"#_3-什么是位衰减bit-rot保护","children":[]},{"level":2,"title":"4. 更深入的理解","slug":"_4-更深入的理解","link":"#_4-更深入的理解","children":[{"level":3,"title":"4.1 数据冗余技术","slug":"_4-1-数据冗余技术","link":"#_4-1-数据冗余技术","children":[]},{"level":3,"title":"4.2 Reed-Solomon(RS)码","slug":"_4-2-reed-solomon-rs-码","link":"#_4-2-reed-solomon-rs-码","children":[]},{"level":3,"title":"4.3 纠删码优/劣势","slug":"_4-3-纠删码优-劣势","link":"#_4-3-纠删码优-劣势","children":[]},{"level":3,"title":"4.3.3 总结","slug":"_4-3-3-总结","link":"#_4-3-3-总结","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.98,"words":2095},"filePathRelative":"posts/Architect/minio/minio-erasure-code.md","localizedDate":"2024年10月28日","excerpt":"\\n<blockquote>\\n<p>Minio使用纠删码<code>erasure code</code>和校验和<code>checksum</code>来保护数据免受硬件故障和无声数据损坏。 即便您丢失一半数量（N/2）的硬盘，您仍然可以恢复数据。</p>\\n</blockquote>\\n<h2>1. 什么是纠删码<code>erasure code</code>？</h2>\\n<p><strong>纠删码是一种恢复丢失和损坏数据的数学算法， Minio采用Reed-Solomon code将对象拆分成N/2数据和N/2 奇偶校验块</strong>。 这就意味着如果是12块盘，一个对象会被分成6个数据块、6个奇偶校验块，你可以丢失任意6块盘（不管其是存放的数据块还是奇偶校验块），你仍可以从剩下的盘中的数据进行恢复</p>","autoDesc":true}');export{c as comp,h as data};
