import{_ as e,c as n,a,o as i}from"./app-BfIe-EZg.js";const r={};function o(s,t){return i(),n("div",null,t[0]||(t[0]=[a('<h1 id="minio基础-对象存储的元数据" tabindex="-1"><a class="header-anchor" href="#minio基础-对象存储的元数据"><span>Minio基础 - 对象存储的元数据</span></a></h1><h2 id="_1-文件存储vs块存储vs对象存储" tabindex="-1"><a class="header-anchor" href="#_1-文件存储vs块存储vs对象存储"><span>1. 文件存储VS块存储VS对象存储</span></a></h2><p><strong>文件、块和对象是三种以不同的方式来保存、整理和呈现数据的存储格式</strong>。这些格式各有各的功能和限制。</p><ul><li><p>文件存储：</p><p>会以<strong>文件和文件夹</strong>的层次结构来整理和呈现数据；</p></li><li><p>块存储会：</p><p><strong>将数据拆分到任意划分且大小相同</strong>的卷中；</p></li><li><p>对象存储：</p><p>会管理数据并将其链接至<strong>关联的元数据</strong>。</p><p>元数据包括 account（用户）， bucket， bucket index， Object 的 tag等信息</p></li></ul><h2 id="_2-对象存储的元数据" tabindex="-1"><a class="header-anchor" href="#_2-对象存储的元数据"><span>2. 对象存储的元数据</span></a></h2><p>在对象存储里，元数据包括 account（用户）， bucket， bucket index等信息。Minio没有独立的元数据服务器，这个和GlusterFs的架构设计很类似，在minio里都保存在底层的本地文件系统里。</p><p>在本地文件系统里，一个bucket对应本地文件系统中的一个目录。一个对象对应bucket目录下的一个目录（在EC的情况下对应多个part文件）。目录下保存者对象相关的数据和元数据。</p><p><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301410147.png" alt="image-20220721225001273.png" loading="lazy"><br> 如上图所示：在Erasure Set中有4个磁盘：Disk1，Disk2，Disk3，Disk4，四个磁盘组成一个Erasure Set。每个bucket对应一个相应桶名称的目录，每个对象对应bucket的一个目录：目录里保存着对应的数据和元数据文件。</p><p>创建bucket的元数据操作：对于Erasure Set(2+2)为例：创建一个bucket，对应底层文件系统的4次目录创建。创建一个文件，需要对应底层4次目录创建，8次文件创建操作。对于小文件，数据和元数据都保存在meta文件中，也需要4次文件创建操作。<strong>由此可知，minio对应大量小文件的性能非常差。</strong></p><h2 id="_3-实例" tabindex="-1"><a class="header-anchor" href="#_3-实例"><span>3. 实例</span></a></h2><p>对于小文件，<strong>数据和元数据都同时保存在对应的xl.meta的文件中</strong>。对应大文件的写入，会创建相应的目录，该目录下是对应的part的数据文件和元数据。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301410192.png" alt="image-20220721225520501" tabindex="0" loading="lazy"><figcaption>image-20220721225520501</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301410219.png" alt="image-20220721225531228" tabindex="0" loading="lazy"><figcaption>image-20220721225531228</figcaption></figure><p>由图3可知：当前集群中有2个bucket：test1和test2。 test1中有3个对象：分别是x，y，wget-log三个对象。x是30M的大文件，通过multipart上传到集群中，有2个part，分别为part.1和part.2文件。wget-log文件是一个小文件，大小为357.9KB.</p><p>通过图4：可以清晰的看到，每个bucket对应一个同名本地目录，每个对象也对应一个同名的目录，下面存数据和元数据。对应小文件，数据和元数据都保存在 xl.meta的元数据文件中。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/374939519" target="_blank" rel="noopener noreferrer">MinIO对象存储介绍</a></p>',17)]))}const c=e(r,[["render",o],["__file","minio-metadata.html.vue"]]),l=JSON.parse(`{"path":"/posts/Architect/minio/minio-metadata.html","title":"Minio基础 - 对象存储的元数据","lang":"zh-CN","frontmatter":{"aliases":"Minio基础 - 对象存储的元数据, 'Minio基础 - 对象存储的元数据'","tags":null,"cssclass":null,"source":null,"order":30,"category":["Minio"],"created":"2024-04-24 14:35","updated":"2024-04-30 14:11","description":"Minio基础 - 对象存储的元数据 1. 文件存储VS块存储VS对象存储 文件、块和对象是三种以不同的方式来保存、整理和呈现数据的存储格式。这些格式各有各的功能和限制。 文件存储： 会以文件和文件夹的层次结构来整理和呈现数据； 块存储会： 将数据拆分到任意划分且大小相同的卷中； 对象存储： 会管理数据并将其链接至关联的元数据。 元数据包括 accou...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/minio/minio-metadata.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Minio基础 - 对象存储的元数据"}],["meta",{"property":"og:description","content":"Minio基础 - 对象存储的元数据 1. 文件存储VS块存储VS对象存储 文件、块和对象是三种以不同的方式来保存、整理和呈现数据的存储格式。这些格式各有各的功能和限制。 文件存储： 会以文件和文件夹的层次结构来整理和呈现数据； 块存储会： 将数据拆分到任意划分且大小相同的卷中； 对象存储： 会管理数据并将其链接至关联的元数据。 元数据包括 accou..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301410147.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Minio基础 - 对象存储的元数据\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301410147.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301410192.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301410219.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 文件存储VS块存储VS对象存储","slug":"_1-文件存储vs块存储vs对象存储","link":"#_1-文件存储vs块存储vs对象存储","children":[]},{"level":2,"title":"2. 对象存储的元数据","slug":"_2-对象存储的元数据","link":"#_2-对象存储的元数据","children":[]},{"level":2,"title":"3. 实例","slug":"_3-实例","link":"#_3-实例","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.51,"words":752},"filePathRelative":"posts/Architect/minio/minio-metadata.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 文件存储VS块存储VS对象存储</h2>\\n<p><strong>文件、块和对象是三种以不同的方式来保存、整理和呈现数据的存储格式</strong>。这些格式各有各的功能和限制。</p>\\n<ul>\\n<li>\\n<p>文件存储：</p>\\n<p>会以<strong>文件和文件夹</strong>的层次结构来整理和呈现数据；</p>\\n</li>\\n<li>\\n<p>块存储会：</p>\\n<p><strong>将数据拆分到任意划分且大小相同</strong>的卷中；</p>\\n</li>\\n<li>\\n<p>对象存储：</p>\\n<p>会管理数据并将其链接至<strong>关联的元数据</strong>。</p>\\n<p>元数据包括 account（用户）， bucket， bucket index， Object 的 tag等信息</p>\\n</li>\\n</ul>","autoDesc":true}`);export{c as comp,l as data};
