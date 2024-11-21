import{_ as a,c as t,a as n,o as i}from"./app-CZJgH_ea.js";const r={};function o(p,e){return i(),t("div",null,e[0]||(e[0]=[n('<h1 id="minio进阶-minio断点续传和断点下载实现方案" tabindex="-1"><a class="header-anchor" href="#minio进阶-minio断点续传和断点下载实现方案"><span>Minio进阶 - Minio断点续传和断点下载实现方案</span></a></h1><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言"><span>1. 前言</span></a></h2><p>在之前，我们实现了常用的上传下载、分片上传、秒传等功能，实际一个文件存储管理系统，这些远远还是不够的，比如断点续传。</p><p>可以参考阿里的文档，是怎么实现这些功能的。</p><p><a href="https://help.aliyun.com/document_detail/84785.html" target="_blank" rel="noopener noreferrer">阿里OSS开发文档</a></p><h2 id="_2-断点续传" tabindex="-1"><a class="header-anchor" href="#_2-断点续传"><span>2. 断点续传</span></a></h2><h3 id="_2-1-概念" tabindex="-1"><a class="header-anchor" href="#_2-1-概念"><span>2.1 概念</span></a></h3><p>通过断点续传上传的方式将文件上传到OSS前，您可以指定断点记录点。上传过程中，如果出现网络异常或程序崩溃导致文件上传失败时，将从断点记录处继续上传未上传完成的部分。</p><h3 id="_2-2-方案" tabindex="-1"><a class="header-anchor" href="#_2-2-方案"><span>2.2 方案</span></a></h3><p>要实现断点续传，需要依赖于MD5秒传和分片上传。之前我们分片上传的简单流程如下图所示，我们可以在这个流程中加入断点续传。<br><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301231363.png" alt="image-20220724210700258" loading="lazy"></p><h4 id="_2-2-1-文件状态查询" tabindex="-1"><a class="header-anchor" href="#_2-2-1-文件状态查询"><span>2.2.1 文件状态查询</span></a></h4><p>首先上传文件之前，除了创建分片请求之外、获取uploadId之外，还需要在根据文件的MD5去查询该数据的状态，比如是已上传过、上传了一部分、上传完成、上传失败等。</p><p>如果该文件已上传过则直接返回访问链接。</p><h4 id="_2-2-2-查询已上传分片信息" tabindex="-1"><a class="header-anchor" href="#_2-2-2-查询已上传分片信息"><span>2.2.2 查询已上传分片信息</span></a></h4><p>如果是上传失败，则查询根据该文件uploadId 查询已上传的分片信息，Minio 是支持这种查询的，比如下图中就可查到分片的相关信息：<br><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301231403.png" alt="image-20220724210757660" loading="lazy"></p><h4 id="_2-2-3-继续上传" tabindex="-1"><a class="header-anchor" href="#_2-2-3-继续上传"><span>2.2.3. 继续上传</span></a></h4><p>对于已上传的分片，获取链接时，直接返回该分片已上传，前端根据状态去判断跳过该分片上传，执行未上传分片的请求，这样就能做到断点续传了。</p><h2 id="_3-断点下载" tabindex="-1"><a class="header-anchor" href="#_3-断点下载"><span>3. 断点下载</span></a></h2><p>当下载大文件时，如果网络不稳定或者程序异常退出，会导致下载失败，甚至重试多次仍无法完成下载。</p><p>为此，OSS需要提供了断点续传下载功能。断点续传下载将需要下载的文件分成若干个分片分别下载，所有分片都下载完成后，将所有分片合并成完整的文件。</p><p>在Minio中的java SDK 中是提供了对象数据查询的API，可以查看到对象的数据大小信息。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301231423.png" alt="image-20220724210915900" tabindex="0" loading="lazy"><figcaption>image-20220724210915900</figcaption></figure><p>知道文件大小之后，我们就可以进行切片，比如100M的大小，按照5M进行切分为20片，计算出每一片的起始位置和长度，Minio 获取文件的API 是支持分段获取流的。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301231454.png" alt="image-20220724210943891" tabindex="0" loading="lazy"><figcaption>image-20220724210943891</figcaption></figure><p>在实现了上述的分片下载后，就可以实现断点下载了，原理和上传一样，如下图所示：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301231478.png" alt="image-20220724211002451" tabindex="0" loading="lazy"><figcaption>image-20220724211002451</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://yunyanchengyu.blog.csdn.net/article/details/123522111" target="_blank" rel="noopener noreferrer">Minio入门系列【19】断点续传和断点下载实现方案</a></p>',28)]))}const l=a(r,[["render",o],["__file","minio-breakpoint-downloading.html.vue"]]),c=JSON.parse('{"path":"/posts/Architect/minio/minio-breakpoint-downloading.html","title":"Minio进阶 - Minio断点续传和断点下载实现方案","lang":"zh-CN","frontmatter":{"order":250,"category":["Minio"],"description":"Minio进阶 - Minio断点续传和断点下载实现方案 1. 前言 在之前，我们实现了常用的上传下载、分片上传、秒传等功能，实际一个文件存储管理系统，这些远远还是不够的，比如断点续传。 可以参考阿里的文档，是怎么实现这些功能的。 阿里OSS开发文档 2. 断点续传 2.1 概念 通过断点续传上传的方式将文件上传到OSS前，您可以指定断点记录点。上传过...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/minio/minio-breakpoint-downloading.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Minio进阶 - Minio断点续传和断点下载实现方案"}],["meta",{"property":"og:description","content":"Minio进阶 - Minio断点续传和断点下载实现方案 1. 前言 在之前，我们实现了常用的上传下载、分片上传、秒传等功能，实际一个文件存储管理系统，这些远远还是不够的，比如断点续传。 可以参考阿里的文档，是怎么实现这些功能的。 阿里OSS开发文档 2. 断点续传 2.1 概念 通过断点续传上传的方式将文件上传到OSS前，您可以指定断点记录点。上传过..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301231363.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Minio进阶 - Minio断点续传和断点下载实现方案\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301231363.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301231403.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301231423.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301231454.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301231478.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 前言","slug":"_1-前言","link":"#_1-前言","children":[]},{"level":2,"title":"2. 断点续传","slug":"_2-断点续传","link":"#_2-断点续传","children":[{"level":3,"title":"2.1 概念","slug":"_2-1-概念","link":"#_2-1-概念","children":[]},{"level":3,"title":"2.2 方案","slug":"_2-2-方案","link":"#_2-2-方案","children":[]}]},{"level":2,"title":"3. 断点下载","slug":"_3-断点下载","link":"#_3-断点下载","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.48,"words":744},"filePathRelative":"posts/Architect/minio/minio-breakpoint-downloading.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 前言</h2>\\n<p>在之前，我们实现了常用的上传下载、分片上传、秒传等功能，实际一个文件存储管理系统，这些远远还是不够的，比如断点续传。</p>\\n<p>可以参考阿里的文档，是怎么实现这些功能的。</p>\\n<p><a href=\\"https://help.aliyun.com/document_detail/84785.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">阿里OSS开发文档</a></p>\\n<h2>2. 断点续传</h2>\\n<h3>2.1 概念</h3>\\n<p>通过断点续传上传的方式将文件上传到OSS前，您可以指定断点记录点。上传过程中，如果出现网络异常或程序崩溃导致文件上传失败时，将从断点记录处继续上传未上传完成的部分。</p>","autoDesc":true}');export{l as comp,c as data};
