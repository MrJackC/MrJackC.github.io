import{_ as e,c as r,a,o as i}from"./app-BOcQBfH9.js";const l={};function n(o,t){return i(),r("div",null,t[0]||(t[0]=[a('<h1 id="aws-s3兼容性" tabindex="-1"><a class="header-anchor" href="#aws-s3兼容性"><span>AWS S3兼容性</span></a></h1><blockquote><p>参考阿里云官方文档，两个都差不多</p></blockquote><blockquote><p>之前一直疑惑什么是AWS S3,还是个Restful API. 但我从始至终压根没有感知。其实是因为我们都使用的是minio 客户端。他的minio 服务端提供的是S3 接口，minio client 封装了s3 的http 请求</p></blockquote><h2 id="_1-oss兼容的s3-api" tabindex="-1"><a class="header-anchor" href="#_1-oss兼容的s3-api"><span>1. OSS兼容的S3 API</span></a></h2><p>OSS对S3 Bucket、Object以及Multipart操作兼容的API如下：</p><table><thead><tr><th style="text-align:left;">操作类型</th><th style="text-align:left;">API</th></tr></thead><tbody><tr><td style="text-align:left;">Bucket操作</td><td style="text-align:left;">PutBucket <br> DeleteBucket<br> GetBucket <br> GetBucketACL<br> GetBucketLifecycle<br> GetBucketLocation<br> GetBucketLogging<br> HeadBucket<br> PutBucketACL<br> PutBucketLifecycle<br> PutBucketLogging</td></tr><tr><td style="text-align:left;">Object操作</td><td style="text-align:left;">DeleteObject <br> DeleteObjects<br> GetObject<br> GetObjectACL<br> HeadObject<br> PostObject<br> PutObject<br> PutObjectCopy<br> PutObjectACL</td></tr><tr><td style="text-align:left;">Multipart操作</td><td style="text-align:left;">InitiateMultipartUpload<br> AbortMultipartUpload<br> CompleteMultipartUpload<br> ListParts<br> UploadPart<br> UploadPartCopy</td></tr></tbody></table><h2 id="oss与s3的差异" tabindex="-1"><a class="header-anchor" href="#oss与s3的差异"><span>OSS与S3的差异</span></a></h2><p>这块minio 与S3区别待补充</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://help.aliyun.com/document_detail/389025.html" target="_blank" rel="noopener noreferrer">AWS S3兼容性</a></p>',10)]))}const s=e(l,[["render",n],["__file","minio-aws.html.vue"]]),p=JSON.parse('{"path":"/posts/Architect/minio/minio-aws.html","title":"AWS S3兼容性","lang":"zh-CN","frontmatter":{"description":"AWS S3兼容性 参考阿里云官方文档，两个都差不多 之前一直疑惑什么是AWS S3,还是个Restful API. 但我从始至终压根没有感知。其实是因为我们都使用的是minio 客户端。他的minio 服务端提供的是S3 接口，minio client 封装了s3 的http 请求 1. OSS兼容的S3 API OSS对S3 Bucket、Obje...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Architect/minio/minio-aws.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"AWS S3兼容性"}],["meta",{"property":"og:description","content":"AWS S3兼容性 参考阿里云官方文档，两个都差不多 之前一直疑惑什么是AWS S3,还是个Restful API. 但我从始至终压根没有感知。其实是因为我们都使用的是minio 客户端。他的minio 服务端提供的是S3 接口，minio client 封装了s3 的http 请求 1. OSS兼容的S3 API OSS对S3 Bucket、Obje..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AWS S3兼容性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. OSS兼容的S3 API","slug":"_1-oss兼容的s3-api","link":"#_1-oss兼容的s3-api","children":[]},{"level":2,"title":"OSS与S3的差异","slug":"oss与s3的差异","link":"#oss与s3的差异","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.74,"words":223},"filePathRelative":"posts/Architect/minio/minio-aws.md","localizedDate":"2024年10月28日","excerpt":"\\n<blockquote>\\n<p>参考阿里云官方文档，两个都差不多</p>\\n</blockquote>\\n<blockquote>\\n<p>之前一直疑惑什么是AWS S3,还是个Restful API. 但我从始至终压根没有感知。其实是因为我们都使用的是minio 客户端。他的minio 服务端提供的是S3 接口，minio client 封装了s3 的http 请求</p>\\n</blockquote>\\n<h2>1. OSS兼容的S3 API</h2>\\n<p>OSS对S3 Bucket、Object以及Multipart操作兼容的API如下：</p>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">操作类型</th>\\n<th style=\\"text-align:left\\">API</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\">Bucket操作</td>\\n<td style=\\"text-align:left\\">PutBucket <br> DeleteBucket<br> GetBucket <br> GetBucketACL<br> GetBucketLifecycle<br> GetBucketLocation<br> GetBucketLogging<br> HeadBucket<br> PutBucketACL<br> PutBucketLifecycle<br> PutBucketLogging</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">Object操作</td>\\n<td style=\\"text-align:left\\">DeleteObject <br> DeleteObjects<br> GetObject<br> GetObjectACL<br> HeadObject<br> PostObject<br> PutObject<br> PutObjectCopy<br> PutObjectACL</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">Multipart操作</td>\\n<td style=\\"text-align:left\\">InitiateMultipartUpload<br> AbortMultipartUpload<br> CompleteMultipartUpload<br> ListParts<br> UploadPart<br> UploadPartCopy</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{s as comp,p as data};
