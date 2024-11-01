import{_ as e,c as r,a as n,o as a}from"./app-tJW29Kmg.js";const i={};function d(s,t){return a(),r("div",null,t[0]||(t[0]=[n('<h1 id="minio基础-对象存储oss概述" tabindex="-1"><a class="header-anchor" href="#minio基础-对象存储oss概述"><span>Minio基础 - 对象存储OSS概述</span></a></h1><blockquote><p>文档来源于<a href="https://help.aliyun.com/product/31815.html" target="_blank" rel="noopener noreferrer">阿里云对象存储 OSS</a>，<a href="https://so.csdn.net/so/search?q=Minio&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">Minio</a>也是对象存储 OSS，很多概念都是相通的，所以了解下。实际企业应用使用阿里OSS是一个很不错的选择。</p></blockquote><h2 id="_1-对象存储oss" tabindex="-1"><a class="header-anchor" href="#_1-对象存储oss"><span>1. 对象存储OSS</span></a></h2><p>对象存储服务（Object Storage Service，OSS）是一种海量、安全、低成本、高可靠的云存储服务，适合存放任意类型的文件。容量和处理能力弹性扩展，多种存储类型供选择，全面优化存储成本。</p><p>阿里云对象存储OSS（Object Storage Service）是阿里云提供的海量、安全、低成本、高持久的云存储服务。其数据设计持久性不低于99.9999999999%（12个9），服务可用性（或业务连续性）不低于99.995%。</p><h2 id="_2-基本概念" tabindex="-1"><a class="header-anchor" href="#_2-基本概念"><span>2. 基本概念</span></a></h2><h3 id="_2-1-存储空间-bucket" tabindex="-1"><a class="header-anchor" href="#_2-1-存储空间-bucket"><span>2.1 存储空间（Bucket）</span></a></h3><p>存储空间是用户用于存储对象（Object）的容器，所有的对象都必须隶属于某个存储空间。存储空间具有各种配置属性，包括地域、访问权限、存储类型等。用户可以根据实际需求，创建不同类型的存储空间来存储不同的数据。</p><ul><li><strong>同一个存储空间的内部是扁平的，没有文件系统的目录等概念，所有的对象都直接隶属于其对应的存储空间</strong>。</li><li>每个用户可以拥有多个存储空间。</li><li>存储空间的名称在OSS范围内必须是全局唯一的，一旦创建之后无法修改名称。</li><li>存储空间内部的对象数目没有限制。</li></ul><p>存储空间的命名规范如下：</p><ul><li>只能包括小写字母、数字和短划线（-）。</li><li>必须以小写字母或者数字开头和结尾。</li><li>长度必须在3~63字符之间。</li></ul><h3 id="_2-2-对象-object" tabindex="-1"><a class="header-anchor" href="#_2-2-对象-object"><span>2.2 对象（Object）</span></a></h3><p>对象是OSS存储数据的基本单元，也被称为OSS的文件。<strong>和传统的文件系统不同，对象没有文件目录层级结构的关系</strong>。<strong>对象由元信息（Object Meta），用户数据（Data）和文件名（Key）组成</strong>，并且由存储空间内部唯一的Key来标识。对象元信息是一组键值对，表示了对象的一些属性，比如最后修改时间、大小等信息，同时用户也可以在元信息中存储一些自定义的信息。</p><p>对象的生命周期是从上传成功到被删除为止。在整个生命周期内，除通过追加方式上传的Object可以通过继续追加上传写入数据外，其他方式上传的Object内容无法编辑，您可以通过重复上传同名的对象来覆盖之前的对象。</p><p>对象的命名规范如下：</p><ul><li>使用UTF-8编码。</li><li>长度必须在1~1023字符之间。</li><li>不能以正斜线（/）或者反斜线（\\）开头。</li><li>对象名称需要区分大小写。如无特殊说明，本文档中的对象、文件称谓等同于Object。</li></ul><h3 id="_2-3-objectkey" tabindex="-1"><a class="header-anchor" href="#_2-3-objectkey"><span>2.3 ObjectKey</span></a></h3><p>在各语言SDK中，ObjectKey、Key以及ObjectName是同一概念，均表示对Object执行相关操作时需要填写的Object名称。例如向某一存储空间上传Object时，ObjectKey表示上传的Object所在存储空间的完整名称，即包含文件后缀在内的完整路径，如填写为abc/efg/123.jpg。</p><h3 id="_2-4-region-地域" tabindex="-1"><a class="header-anchor" href="#_2-4-region-地域"><span>2.4 Region（地域）</span></a></h3><p>Region表示OSS的数据中心所在物理位置。用户可以根据费用、请求来源等选择合适的地域创建Bucket。一般来说，距离用户更近的Region访问速度更快。详情请参见OSS已经开通的Region。</p><p>Region是在创建Bucket的时候指定的，一旦指定之后就不允许更改。该Bucket下所有的Object都存储在对应的数据中心，目前不支持Object级别的Region设置。</p><h3 id="_2-5-endpoint-访问域名" tabindex="-1"><a class="header-anchor" href="#_2-5-endpoint-访问域名"><span>2.5 Endpoint（访问域名）</span></a></h3><p>Endpoint表示OSS对外服务的访问域名。OSS以HTTP RESTful API的形式对外提供服务，当访问不同的Region的时候，需要不同的域名。通过内网和外网访问同一个Region所需要的Endpoint也是不同的。<a href="http://xn--RegionEndpointoss-cn-hangzhou-kt90c896mt2ci65cvd3dscju30l1b0c.aliyuncs.com" target="_blank" rel="noopener noreferrer">例如杭州Region的外网Endpoint是oss-cn-hangzhou.aliyuncs.com</a>，<a href="http://xn--Endpointoss-cn-hangzhou-internal-2z27cdy55a02wh.aliyuncs.com" target="_blank" rel="noopener noreferrer">内网Endpoint是oss-cn-hangzhou-internal.aliyuncs.com</a>。具体的内容请参见各个Region对应的Endpoint。</p><h3 id="_2-6-accesskey-访问密钥" tabindex="-1"><a class="header-anchor" href="#_2-6-accesskey-访问密钥"><span>2.6 AccessKey（访问密钥）</span></a></h3><p>AccessKey简称AK，指的是访问身份验证中用到的AccessKeyId和AccessKeySecret。OSS通过使用AccessKeyId和AccessKeySecret对称加密的方法来验证某个请求的发送者身份。AccessKeyId用于标识用户；AccessKeySecret是用户用于加密签名字符串和OSS用来验证签名字符串的密钥，必须保密。对于OSS来说，AccessKey的来源有：</p><ul><li>Bucket的拥有者申请的AccessKey。</li><li>被Bucket的拥有者通过RAM授权给第三方请求者的AccessKey。</li><li>被Bucket的拥有者通过STS授权给第三方请求者的AccessKey。</li></ul><h3 id="_2-7-强一致性" tabindex="-1"><a class="header-anchor" href="#_2-7-强一致性"><span>2.7 强一致性</span></a></h3><p>Object操作在OSS上具有原子性，操作要么成功要么失败，不会存在有中间状态的Object。OSS保证用户一旦上传完成之后读到的Object是完整的，OSS不会返回给用户一个部分上传成功的Object。</p><p>Object操作在OSS同样具有强一致性，用户一旦收到了一个上传（PUT）成功的响应，该上传的Object就已经立即可读，并且Object的冗余数据已经写成功。不存在一种上传的中间状态，即read-after-write却无法读取到数据。对于删除操作也是一样的，用户删除指定的Object成功之后，该Object立即变为不存在。</p><h3 id="_2-8-数据冗余机制" tabindex="-1"><a class="header-anchor" href="#_2-8-数据冗余机制"><span>2.8 数据冗余机制</span></a></h3><p>OSS使用基于纠删码、多副本的数据冗余存储机制，将每个对象的不同冗余存储在同一个区域内多个设施的多个设备上，确保硬件失效时的数据持久性和可用性。</p><p>OSS Object操作具有强一致性，用户一旦收到了上传或复制成功的响应，则该上传的Object就已经立即可读，且数据已经冗余写入到多个设备中。</p><p>OSS会通过计算网络流量包的校验和，验证数据包在客户端和服务端之间传输中是否出错，保证数据完整传输。</p><p>OSS的冗余存储机制，可支持两个存储设施并发损坏时，仍维持数据不丢失。</p><p>当数据存入OSS后，OSS会检测和修复丢失的冗余，确保数据持久性和可用性。</p><p>OSS会周期性地通过校验等方式验证数据的完整性，及时发现因硬件失效等原因造成的数据损坏。当检测到数据有部分损坏或丢失时，OSS会利用冗余的数据，进行重建并修复损坏数据。</p><h2 id="_3-oss与文件系统的对比" tabindex="-1"><a class="header-anchor" href="#_3-oss与文件系统的对比"><span>3. OSS与文件系统的对比</span></a></h2><h3 id="_3-1-oss与文件系统的对比" tabindex="-1"><a class="header-anchor" href="#_3-1-oss与文件系统的对比"><span>3.1 OSS与文件系统的对比</span></a></h3><table><thead><tr><th>对比项</th><th>OSS</th><th>文件系统</th></tr></thead><tbody><tr><td>数据模型</td><td>OSS是一个分布式的对象存储服务，提供的是一个Key-Value对形式的对象存储服务。</td><td>文件系统是一种典型的树状索引结构。</td></tr><tr><td>数据获取</td><td>根据Object的名称（Key）唯一的获取该Object的内容。虽然用户可以使用类似test1/test.jpg的名字，但是这并不表示用户的Object是保存在test1目录下面的。对于OSS来说，test1/test.jpg仅仅只是一个字符串，与example.jpg并没有本质的区别。因此不同名称的Object之间的访问消耗的资源是类似的。</td><td>一个名为test1/test.jpg的文件，访问过程需要先访问到test1这个目录，然后再在该目录下查找名为test.jpg的文件。</td></tr><tr><td>优势</td><td>支持海量的用户并发访问。</td><td>支持文件的修改，比如修改指定偏移位置的内容、截断文件尾部等。也支持文件夹的操作，比如重命名目录、删除目录、移动目录等非常容易。</td></tr><tr><td>劣势</td><td>OSS保存的Object不支持修改（追加写Object需要调用特定的接口，生成的Object也和正常上传的Object类型上有差别）。用户哪怕是仅仅需要修改一个字节也需要重新上传整个Object。OSS可以通过一些操作来模拟类似文件夹的功能，但是代价非常昂贵。比如重命名目录，希望将test1目录重命名成test2，那么OSS的实际操作是将所有以test1/开头的Object都重新复制成以test2/开头的Object，这是一个非常消耗资源的操作。因此在使用OSS的时候要尽量避免类似的操作。</td><td>受限于单个设备的性能。访问越深的目录消耗的资源也越大，操作拥有很多文件的目录也会非常慢。</td></tr></tbody></table><p>因此，将OSS映射为文件系统是非常低效的，也是不建议的做法。如果一定要挂载成文件系统的话，建议尽量只做写新文件、删除文件、读取文件这几种操作。使用OSS应该充分发挥其优点，即海量数据处理能力，优先用来存储海量的非结构化数据，比如图片、视频、文档等。</p><h3 id="_3-2-oss与文件系统的概念对比" tabindex="-1"><a class="header-anchor" href="#_3-2-oss与文件系统的概念对比"><span>3.2 OSS与文件系统的概念对比：</span></a></h3><table><thead><tr><th>对象存储 OSS</th><th>文件系统</th></tr></thead><tbody><tr><td>Object</td><td>文件</td></tr><tr><td>Bucket</td><td>主目录</td></tr><tr><td>Region</td><td>无</td></tr><tr><td>Endpoint</td><td>无</td></tr><tr><td>AccessKey</td><td>无</td></tr><tr><td>无</td><td>多级目录</td></tr><tr><td>GetService</td><td>获取主目录列表</td></tr><tr><td>GetBucket</td><td>获取文件列表</td></tr><tr><td>PutObject</td><td>写文件</td></tr><tr><td>AppendObject</td><td>追加写文件</td></tr><tr><td>GetObject</td><td>读文件</td></tr><tr><td>DeleteObject</td><td>删除文件</td></tr><tr><td>无</td><td>修改文件内容</td></tr><tr><td>CopyObject</td><td>（目标文件和源文件相同） 修改文件属性</td></tr><tr><td>CopyObject</td><td>（目标文件和源文件不同） 复制文件</td></tr><tr><td>无</td><td>重命名文件</td></tr></tbody></table><h3 id="_3-3-oss术语表" tabindex="-1"><a class="header-anchor" href="#_3-3-oss术语表"><span>3.3 OSS术语表</span></a></h3><table><thead><tr><th>英文</th><th>中文</th></tr></thead><tbody><tr><td>Bucket</td><td>存储空间</td></tr><tr><td>Object</td><td>对象或者文件</td></tr><tr><td>Endpoint</td><td>OSS 访问域名</td></tr><tr><td>Region</td><td>地域或者数据中心</td></tr><tr><td>AccessKey</td><td>AccessKeyId和AccessKeySecret的统称，访问密钥</td></tr><tr><td>Put Object</td><td>简单上传</td></tr><tr><td>Post Object</td><td>表单上传</td></tr><tr><td>Multipart Upload</td><td>分片上传</td></tr><tr><td>Append Object</td><td>追加上传</td></tr><tr><td>Get Object</td><td>简单下载</td></tr><tr><td>Callback</td><td>回调</td></tr><tr><td>Object Meta</td><td>文件元信息。用来描述文件信息，例如长度，类型等</td></tr><tr><td>Data</td><td>文件数据</td></tr><tr><td>Key</td><td>文件名</td></tr><tr><td>ACL</td><td>(Access Control List) 存储空间或者文件的权限</td></tr></tbody></table><h2 id="_4-应用场景" tabindex="-1"><a class="header-anchor" href="#_4-应用场景"><span>4. 应用场景</span></a></h2><h3 id="_4-1-图片和音视频等应用的海量存储" tabindex="-1"><a class="header-anchor" href="#_4-1-图片和音视频等应用的海量存储"><span>4.1 图片和音视频等应用的海量存储</span></a></h3><p>OSS可用于图片、音视频、日志等海量文件的存储。各种终端设备、Web网站程序、移动应用可以直接向OSS写入或读取数据。OSS支持流式写入和文件写入两种方式。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301414419.png" alt="image-20220722223504937" tabindex="0" loading="lazy"><figcaption>image-20220722223504937</figcaption></figure><h3 id="_4-2-网页或者移动应用的静态和动态资源分离" tabindex="-1"><a class="header-anchor" href="#_4-2-网页或者移动应用的静态和动态资源分离"><span>4.2 网页或者移动应用的静态和动态资源分离</span></a></h3><p>利用海量互联网带宽，OSS可以实现海量数据的互联网并发下载。OSS提供原生的传输加速功能，支持上传加速、下载加速，提升跨国、跨洋数据上传、下载的体验。同时，OSS也可以结合CDN产品，提供静态内容存储、分发到边缘节点的解决方案，利用CDN边缘节点缓存的数据，提升同一个文件被同一地区客户大量重复并发下载的体验。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301414465.png" alt="image-20220722223627660" tabindex="0" loading="lazy"><figcaption>image-20220722223627660</figcaption></figure><h3 id="_4-3-云端数据处理" tabindex="-1"><a class="header-anchor" href="#_4-3-云端数据处理"><span>4.3 云端数据处理</span></a></h3><p>上传文件到OSS后，可以配合媒体处理服务和图片处理服务进行云端的数据处理。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301414498.png" alt="image-20220722223702103" tabindex="0" loading="lazy"><figcaption>image-20220722223702103</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://yunyanchengyu.blog.csdn.net/article/details/120835522?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Minio入门系列【7】对象存储 OSS概述</a></p>',56)]))}const o=e(i,[["render",d],["__file","minio-oos-overview.html.vue"]]),l=JSON.parse('{"path":"/posts/Architect/minio/minio-oos-overview.html","title":"Minio基础 - 对象存储OSS概述","lang":"zh-CN","frontmatter":{"aliases":"Minio基础 - 对象存储OSS概述","tags":null,"cssclass":null,"source":null,"order":21,"category":["Minio"],"created":"2024-04-24 14:35","updated":"2024-04-30 14:15","description":"Minio基础 - 对象存储OSS概述 文档来源于阿里云对象存储 OSS，Minio也是对象存储 OSS，很多概念都是相通的，所以了解下。实际企业应用使用阿里OSS是一个很不错的选择。 1. 对象存储OSS 对象存储服务（Object Storage Service，OSS）是一种海量、安全、低成本、高可靠的云存储服务，适合存放任意类型的文件。容量和处...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/minio/minio-oos-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Minio基础 - 对象存储OSS概述"}],["meta",{"property":"og:description","content":"Minio基础 - 对象存储OSS概述 文档来源于阿里云对象存储 OSS，Minio也是对象存储 OSS，很多概念都是相通的，所以了解下。实际企业应用使用阿里OSS是一个很不错的选择。 1. 对象存储OSS 对象存储服务（Object Storage Service，OSS）是一种海量、安全、低成本、高可靠的云存储服务，适合存放任意类型的文件。容量和处..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301414419.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Minio基础 - 对象存储OSS概述\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301414419.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301414465.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301414498.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 对象存储OSS","slug":"_1-对象存储oss","link":"#_1-对象存储oss","children":[]},{"level":2,"title":"2. 基本概念","slug":"_2-基本概念","link":"#_2-基本概念","children":[{"level":3,"title":"2.1 存储空间（Bucket）","slug":"_2-1-存储空间-bucket","link":"#_2-1-存储空间-bucket","children":[]},{"level":3,"title":"2.2 对象（Object）","slug":"_2-2-对象-object","link":"#_2-2-对象-object","children":[]},{"level":3,"title":"2.3 ObjectKey","slug":"_2-3-objectkey","link":"#_2-3-objectkey","children":[]},{"level":3,"title":"2.4 Region（地域）","slug":"_2-4-region-地域","link":"#_2-4-region-地域","children":[]},{"level":3,"title":"2.5 Endpoint（访问域名）","slug":"_2-5-endpoint-访问域名","link":"#_2-5-endpoint-访问域名","children":[]},{"level":3,"title":"2.6 AccessKey（访问密钥）","slug":"_2-6-accesskey-访问密钥","link":"#_2-6-accesskey-访问密钥","children":[]},{"level":3,"title":"2.7 强一致性","slug":"_2-7-强一致性","link":"#_2-7-强一致性","children":[]},{"level":3,"title":"2.8 数据冗余机制","slug":"_2-8-数据冗余机制","link":"#_2-8-数据冗余机制","children":[]}]},{"level":2,"title":"3. OSS与文件系统的对比","slug":"_3-oss与文件系统的对比","link":"#_3-oss与文件系统的对比","children":[{"level":3,"title":"3.1 OSS与文件系统的对比","slug":"_3-1-oss与文件系统的对比","link":"#_3-1-oss与文件系统的对比","children":[]},{"level":3,"title":"3.2 OSS与文件系统的概念对比：","slug":"_3-2-oss与文件系统的概念对比","link":"#_3-2-oss与文件系统的概念对比","children":[]},{"level":3,"title":"3.3 OSS术语表","slug":"_3-3-oss术语表","link":"#_3-3-oss术语表","children":[]}]},{"level":2,"title":"4. 应用场景","slug":"_4-应用场景","link":"#_4-应用场景","children":[{"level":3,"title":"4.1 图片和音视频等应用的海量存储","slug":"_4-1-图片和音视频等应用的海量存储","link":"#_4-1-图片和音视频等应用的海量存储","children":[]},{"level":3,"title":"4.2 网页或者移动应用的静态和动态资源分离","slug":"_4-2-网页或者移动应用的静态和动态资源分离","link":"#_4-2-网页或者移动应用的静态和动态资源分离","children":[]},{"level":3,"title":"4.3 云端数据处理","slug":"_4-3-云端数据处理","link":"#_4-3-云端数据处理","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":9.78,"words":2935},"filePathRelative":"posts/Architect/minio/minio-oos-overview.md","localizedDate":"2024年10月28日","excerpt":"\\n<blockquote>\\n<p>文档来源于<a href=\\"https://help.aliyun.com/product/31815.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">阿里云对象存储 OSS</a>，<a href=\\"https://so.csdn.net/so/search?q=Minio&amp;spm=1001.2101.3001.7020\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Minio</a>也是对象存储 OSS，很多概念都是相通的，所以了解下。实际企业应用使用阿里OSS是一个很不错的选择。</p>\\n</blockquote>","autoDesc":true}');export{o as comp,l as data};
