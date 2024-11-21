import{_ as r,c as o,a as t,o as n}from"./app-CpAF2rca.js";const a={};function i(g,e){return n(),o("div",null,e[0]||(e[0]=[t('<h1 id="mongo进阶-原理和wiredtiger引擎" tabindex="-1"><a class="header-anchor" href="#mongo进阶-原理和wiredtiger引擎"><span>Mongo进阶 - 原理和WiredTiger引擎</span></a></h1><p>WiredTiger从被MongoDB收购到成为MongoDB的默认存储引擎的一年半得到了迅猛的发展，也逐步被外部熟知。WiredTiger（以下简称WT）是一个优秀的单机数据库存储引擎，它拥有诸多的特性，既支持BTree索引，也支持LSM Tree索引，支持行存储和列存储，实现ACID级别事务、支持大到4G的记录等。WT的产生不是因为这些特性，而是和计算机发展的现状息息相关。</p><p>现代计算机近20年来CPU的计算能力和内存容量飞速发展，但磁盘的访问速度并没有得到相应的提高，WT就是在这样的一个情况下研发出来，它设计了充分利用CPU并行计算的内存模型的无锁并行框架，使得WT引擎在多核CPU上的表现优于其他存储引擎。针对磁盘存储特性，WT实现了一套基于BLOCK/Extent的友好的磁盘访问算法，使得WT在数据压缩和磁盘I/O访问上优势明显。实现了基于snapshot技术的ACID事务，snapshot技术大大简化了WT的事务模型，摒弃了传统的事务锁隔离又同时能保证事务的ACID。WT根据现代内存容量特性实现了一种基于Hazard Pointer 的LRU cache模型，充分利用了内存容量的同时又能拥有很高的事务读写并发。</p><p><a href="https://mongoing.com/archives/2540" target="_blank" rel="noopener noreferrer">MongoDB Wiredtiger存储引擎实现原理</a></p><p><a href="https://mongoing.com/archives/5367" target="_blank" rel="noopener noreferrer">MongoDB 存储引擎 WiredTiger 原理解析</a></p><p><a href="https://github.com/wiredtiger/wiredtiger/wiki/Block-Manager-Overview" target="_blank" rel="noopener noreferrer">Block Manager Overview</a></p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/db/nosql-mongo/mongo-y-introduce.html" target="_blank" rel="noopener noreferrer">Mongo进阶 - 原理和WiredTiger引擎</a></p>',8)]))}const s=r(a,[["render",i],["__file","mongo-y-introduce.html.vue"]]),d=JSON.parse('{"path":"/posts/Database/MongoDB/mongo-y-introduce.html","title":"Mongo进阶 - 原理和WiredTiger引擎","lang":"zh-CN","frontmatter":{"aliases":"Mongo进阶 - 原理和WiredTiger引擎","tags":null,"cssclass":null,"source":null,"order":120,"category":["mongodb"],"created":"2024-02-22 10:49","updated":"2024-03-13 08:32","description":"Mongo进阶 - 原理和WiredTiger引擎 WiredTiger从被MongoDB收购到成为MongoDB的默认存储引擎的一年半得到了迅猛的发展，也逐步被外部熟知。WiredTiger（以下简称WT）是一个优秀的单机数据库存储引擎，它拥有诸多的特性，既支持BTree索引，也支持LSM Tree索引，支持行存储和列存储，实现ACID级别事务、支持...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MongoDB/mongo-y-introduce.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Mongo进阶 - 原理和WiredTiger引擎"}],["meta",{"property":"og:description","content":"Mongo进阶 - 原理和WiredTiger引擎 WiredTiger从被MongoDB收购到成为MongoDB的默认存储引擎的一年半得到了迅猛的发展，也逐步被外部熟知。WiredTiger（以下简称WT）是一个优秀的单机数据库存储引擎，它拥有诸多的特性，既支持BTree索引，也支持LSM Tree索引，支持行存储和列存储，实现ACID级别事务、支持..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mongo进阶 - 原理和WiredTiger引擎\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.55,"words":465},"filePathRelative":"posts/Database/MongoDB/mongo-y-introduce.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>WiredTiger从被MongoDB收购到成为MongoDB的默认存储引擎的一年半得到了迅猛的发展，也逐步被外部熟知。WiredTiger（以下简称WT）是一个优秀的单机数据库存储引擎，它拥有诸多的特性，既支持BTree索引，也支持LSM Tree索引，支持行存储和列存储，实现ACID级别事务、支持大到4G的记录等。WT的产生不是因为这些特性，而是和计算机发展的现状息息相关。</p>\\n<p>现代计算机近20年来CPU的计算能力和内存容量飞速发展，但磁盘的访问速度并没有得到相应的提高，WT就是在这样的一个情况下研发出来，它设计了充分利用CPU并行计算的内存模型的无锁并行框架，使得WT引擎在多核CPU上的表现优于其他存储引擎。针对磁盘存储特性，WT实现了一套基于BLOCK/Extent的友好的磁盘访问算法，使得WT在数据压缩和磁盘I/O访问上优势明显。实现了基于snapshot技术的ACID事务，snapshot技术大大简化了WT的事务模型，摒弃了传统的事务锁隔离又同时能保证事务的ACID。WT根据现代内存容量特性实现了一种基于Hazard Pointer 的LRU cache模型，充分利用了内存容量的同时又能拥有很高的事务读写并发。</p>","autoDesc":true}');export{s as comp,d as data};
