import{_ as d,c as r,a as n,o as e}from"./app-DEK5G3U7.js";const o={};function s(a,t){return e(),r("div",null,t[0]||(t[0]=[n('<h1 id="solr与es搜索引擎技术选择" tabindex="-1"><a class="header-anchor" href="#solr与es搜索引擎技术选择"><span>Solr与ES搜索引擎技术选择</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>solr和Elasticsearch都是基于Lucene搜索服务器基础之上开发的，<strong>高性能</strong>的企业级搜索服务器【他们都是基于分词技术构<strong>建倒排索引</strong>的方式进行查询】</p><h2 id="_2-对比" tabindex="-1"><a class="header-anchor" href="#_2-对比"><span>2. 对比</span></a></h2><table><thead><tr><th>比较类目</th><th>solr</th><th>Elasticsearch</th></tr></thead><tbody><tr><td>诞生时间</td><td>2004</td><td>2010</td></tr><tr><td>搜索基础</td><td>Lucene搜索</td><td>Lucene搜索</td></tr><tr><td>实时建立索引</td><td><strong>solr会产生io阻塞，效率低</strong></td><td>不阻塞，效率高</td></tr><tr><td>不断动态添加数据</td><td><strong>检索效率变低</strong></td><td>变化不大</td></tr><tr><td>自身系统管理</td><td>利用zookeeper进行分布式管理</td><td><strong>自身带有分布式系统管理功能</strong></td></tr><tr><td>部署</td><td>一般都要部署到web服务器上，如tomcat。启动tomcat的时候需要配置tomcat与solr的关联</td><td>自带运行功能，下载安装包直接安装就行</td></tr><tr><td>功用范围</td><td>官网提供的功能</td><td>更专注核心搜索，其它依赖<strong>第三方插件</strong></td></tr><tr><td>支持索引方式</td><td>HTML、PDF、微软 Office 系列软件格式以及 JSON、XML、CSV 等纯文本格式</td><td><strong>仅支持json文件格式</strong></td></tr><tr><td>社区和开发者</td><td>apache 软件基金和社区支持</td><td>单一商业实体及其员工</td></tr><tr><td>节点发现</td><td>Apache Zookeeper ,在大师项目中成熟且经过实战测试</td><td>Zen内置于ES本身，需要专用的主节点才能进行分裂脑保护</td></tr><tr><td>高速缓存</td><td>全局，每个段更改无效</td><td><strong>每段，更适合动态更改数据</strong></td></tr><tr><td>分析引挚性能</td><td>非常适合精确计算的静态数据</td><td>结果的准确性取决于数据放置</td></tr><tr><td>全文搜索功能</td><td>基于lucene语文分析，多建议，拼写检查，丰富的高亮显示支持</td><td>基于Lucene语文分析，单一建议API实现</td></tr><tr><td>DevOps支持</td><td>尚未完全，还在完善中。。</td><td>非常好的API</td></tr><tr><td>机器学习</td><td>内置-在流聚合之上，专注于逻辑回归和学习排名贡献模块</td><td>商业功能，专注于异常和异常值以及时间序列数据</td></tr></tbody></table>',5)]))}const l=d(o,[["render",s],["__file","elasticsearch-vs-solr.html.vue"]]),i=JSON.parse('{"path":"/posts/Database/ES/elasticsearch-vs-solr.html","title":"Solr与ES搜索引擎技术选择","lang":"zh-CN","frontmatter":{"description":"Solr与ES搜索引擎技术选择 1. 简介 solr和Elasticsearch都是基于Lucene搜索服务器基础之上开发的，高性能的企业级搜索服务器【他们都是基于分词技术构建倒排索引的方式进行查询】 2. 对比","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/ES/elasticsearch-vs-solr.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Solr与ES搜索引擎技术选择"}],["meta",{"property":"og:description","content":"Solr与ES搜索引擎技术选择 1. 简介 solr和Elasticsearch都是基于Lucene搜索服务器基础之上开发的，高性能的企业级搜索服务器【他们都是基于分词技术构建倒排索引的方式进行查询】 2. 对比"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Solr与ES搜索引擎技术选择\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 对比","slug":"_2-对比","link":"#_2-对比","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.7,"words":511},"filePathRelative":"posts/Database/ES/elasticsearch-vs-solr.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>solr和Elasticsearch都是基于Lucene搜索服务器基础之上开发的，<strong>高性能</strong>的企业级搜索服务器【他们都是基于分词技术构<strong>建倒排索引</strong>的方式进行查询】</p>\\n<h2>2. 对比</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>比较类目</th>\\n<th>solr</th>\\n<th>Elasticsearch</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>诞生时间</td>\\n<td>2004</td>\\n<td>2010</td>\\n</tr>\\n<tr>\\n<td>搜索基础</td>\\n<td>Lucene搜索</td>\\n<td>Lucene搜索</td>\\n</tr>\\n<tr>\\n<td>实时建立索引</td>\\n<td><strong>solr会产生io阻塞，效率低</strong></td>\\n<td>不阻塞，效率高</td>\\n</tr>\\n<tr>\\n<td>不断动态添加数据</td>\\n<td><strong>检索效率变低</strong></td>\\n<td>变化不大</td>\\n</tr>\\n<tr>\\n<td>自身系统管理</td>\\n<td>利用zookeeper进行分布式管理</td>\\n<td><strong>自身带有分布式系统管理功能</strong></td>\\n</tr>\\n<tr>\\n<td>部署</td>\\n<td>一般都要部署到web服务器上，如tomcat。启动tomcat的时候需要配置tomcat与solr的关联</td>\\n<td>自带运行功能，下载安装包直接安装就行</td>\\n</tr>\\n<tr>\\n<td>功用范围</td>\\n<td>官网提供的功能</td>\\n<td>更专注核心搜索，其它依赖<strong>第三方插件</strong></td>\\n</tr>\\n<tr>\\n<td>支持索引方式</td>\\n<td>HTML、PDF、微软 Office 系列软件格式以及 JSON、XML、CSV 等纯文本格式</td>\\n<td><strong>仅支持json文件格式</strong></td>\\n</tr>\\n<tr>\\n<td>社区和开发者</td>\\n<td>apache 软件基金和社区支持</td>\\n<td>单一商业实体及其员工</td>\\n</tr>\\n<tr>\\n<td>节点发现</td>\\n<td>Apache Zookeeper ,在大师项目中成熟且经过实战测试</td>\\n<td>Zen内置于ES本身，需要专用的主节点才能进行分裂脑保护</td>\\n</tr>\\n<tr>\\n<td>高速缓存</td>\\n<td>全局，每个段更改无效</td>\\n<td><strong>每段，更适合动态更改数据</strong></td>\\n</tr>\\n<tr>\\n<td>分析引挚性能</td>\\n<td>非常适合精确计算的静态数据</td>\\n<td>结果的准确性取决于数据放置</td>\\n</tr>\\n<tr>\\n<td>全文搜索功能</td>\\n<td>基于lucene语文分析，多建议，拼写检查，丰富的高亮显示支持</td>\\n<td>基于Lucene语文分析，单一建议API实现</td>\\n</tr>\\n<tr>\\n<td>DevOps支持</td>\\n<td>尚未完全，还在完善中。。</td>\\n<td>非常好的API</td>\\n</tr>\\n<tr>\\n<td>机器学习</td>\\n<td>内置-在流聚合之上，专注于逻辑回归和学习排名贡献模块</td>\\n<td>商业功能，专注于异常和异常值以及时间序列数据</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{l as comp,i as data};
