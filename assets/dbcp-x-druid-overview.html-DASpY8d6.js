import{_ as r,c as t,a as i,o as a}from"./app-CpAF2rca.js";const d={};function n(o,e){return a(),t("div",null,e[0]||(e[0]=[i('<h1 id="为什么选择druid" tabindex="-1"><a class="header-anchor" href="#为什么选择druid"><span>为什么选择Druid</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>Druid 除了提供性能卓越的连接池功能外，还集成了SQL监控，黑名单拦截等功能，用它自己的话说，Druid是“为监控而生”。借助于阿里这个平台的号召力，产品一经发布就赢得了大批用户的拥趸，从用户使用的反馈来看，Druid也确实没让用户失望。</p><p>相较于其他产品，Druid另一个比较大的优势，就是中文文档比较全面（毕竟是国人的项目么），在github的wiki页面，列举了日常使用中可能遇到的问题，对一个新用户来讲，上面提供的内容已经足够指导它完成产品的配置和使用了。</p><h2 id="_2-druid-相对于其他数据库连接池的优点" tabindex="-1"><a class="header-anchor" href="#_2-druid-相对于其他数据库连接池的优点"><span>2. Druid 相对于其他数据库连接池的优点</span></a></h2><ol><li>强大的监控特性，通过Druid提供的监控功能，可以清楚知道连接池和SQL的工作情况。<br> a. 监控SQL的执行时间、ResultSet持有时间、返回行数、更新行数、错误次数、错误堆栈信息；<br> b. SQL执行的耗时区间分布。什么是耗时区间分布呢？比如说，某个SQL执行了1000次，其中01毫秒区间50次，110毫秒800次，10100毫秒100次，1001000毫秒30次，1~10秒15次，10秒以上5次。通过耗时区间分布，能够非常清楚知道SQL的执行耗时情况；<br> c. 监控连接池的物理连接创建和销毁次数、逻辑连接的申请和关闭次数、非空等待次数、PSCache命中率等。</li><li>方便扩展。Druid提供了Filter-Chain模式的扩展API，可以自己编写Filter拦截JDBC中的任何方法，可以在上面做任何事情，比如说性能监控、SQL审计、用户名密码加密、日志等等。</li><li>Druid集合了开源和商业数据库连接池的优秀特性，并结合阿里巴巴大规模苛刻生产环境的使用经验进行优化。</li></ol><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.jianshu.com/p/0f58804b3dea" target="_blank" rel="noopener noreferrer">数据库连接池原理介绍+常用连接池介绍</a></p>',8)]))}const p=r(d,[["render",n],["__file","dbcp-x-druid-overview.html.vue"]]),s=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/database-connection-pool/dbcp-x-druid-overview.html","title":"为什么选择Druid","lang":"zh-CN","frontmatter":{"description":"为什么选择Druid 1. 简介 Druid 除了提供性能卓越的连接池功能外，还集成了SQL监控，黑名单拦截等功能，用它自己的话说，Druid是“为监控而生”。借助于阿里这个平台的号召力，产品一经发布就赢得了大批用户的拥趸，从用户使用的反馈来看，Druid也确实没让用户失望。 相较于其他产品，Druid另一个比较大的优势，就是中文文档比较全面（毕竟是国...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/database-connection-pool/dbcp-x-druid-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"为什么选择Druid"}],["meta",{"property":"og:description","content":"为什么选择Druid 1. 简介 Druid 除了提供性能卓越的连接池功能外，还集成了SQL监控，黑名单拦截等功能，用它自己的话说，Druid是“为监控而生”。借助于阿里这个平台的号召力，产品一经发布就赢得了大批用户的拥趸，从用户使用的反馈来看，Druid也确实没让用户失望。 相较于其他产品，Druid另一个比较大的优势，就是中文文档比较全面（毕竟是国..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"为什么选择Druid\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. Druid 相对于其他数据库连接池的优点","slug":"_2-druid-相对于其他数据库连接池的优点","link":"#_2-druid-相对于其他数据库连接池的优点","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.8,"words":541},"filePathRelative":"posts/Java/Java第三方依赖/database-connection-pool/dbcp-x-druid-overview.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>Druid 除了提供性能卓越的连接池功能外，还集成了SQL监控，黑名单拦截等功能，用它自己的话说，Druid是“为监控而生”。借助于阿里这个平台的号召力，产品一经发布就赢得了大批用户的拥趸，从用户使用的反馈来看，Druid也确实没让用户失望。</p>\\n<p>相较于其他产品，Druid另一个比较大的优势，就是中文文档比较全面（毕竟是国人的项目么），在github的wiki页面，列举了日常使用中可能遇到的问题，对一个新用户来讲，上面提供的内容已经足够指导它完成产品的配置和使用了。</p>\\n<h2>2. Druid 相对于其他数据库连接池的优点</h2>\\n<ol>\\n<li>强大的监控特性，通过Druid提供的监控功能，可以清楚知道连接池和SQL的工作情况。<br>\\na. 监控SQL的执行时间、ResultSet持有时间、返回行数、更新行数、错误次数、错误堆栈信息；<br>\\nb. SQL执行的耗时区间分布。什么是耗时区间分布呢？比如说，某个SQL执行了1000次，其中01毫秒区间50次，110毫秒800次，10100毫秒100次，1001000毫秒30次，1~10秒15次，10秒以上5次。通过耗时区间分布，能够非常清楚知道SQL的执行耗时情况；<br>\\nc. 监控连接池的物理连接创建和销毁次数、逻辑连接的申请和关闭次数、非空等待次数、PSCache命中率等。</li>\\n<li>方便扩展。Druid提供了Filter-Chain模式的扩展API，可以自己编写Filter拦截JDBC中的任何方法，可以在上面做任何事情，比如说性能监控、SQL审计、用户名密码加密、日志等等。</li>\\n<li>Druid集合了开源和商业数据库连接池的优秀特性，并结合阿里巴巴大规模苛刻生产环境的使用经验进行优化。</li>\\n</ol>","autoDesc":true}');export{p as comp,s as data};
