import{_ as n,c as e,a as d,o}from"./app-JRvFIbSa.js";const r={};function a(i,t){return o(),e("div",null,t[0]||(t[0]=[d('<h1 id="druid源码学习-十-druiddatasource中的一些计数器" tabindex="-1"><a class="header-anchor" href="#druid源码学习-十-druiddatasource中的一些计数器"><span>Druid源码学习（十）-DruidDataSource中的一些计数器</span></a></h1><p>在 Druid 连接池的工作过程中，会用到一些计数器对Druid的情况进行判断。然后根据计数器的数据采取一系列操作，整理如下:</p><h2 id="_1-统计类的计数器" tabindex="-1"><a class="header-anchor" href="#_1-统计类的计数器"><span>1. 统计类的计数器</span></a></h2><table><thead><tr><th>变量名</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>connectCount</td><td>long</td><td>getConnectionInternal被调用之后就会增加，意味着连接被get的次数。</td></tr><tr><td>closeCount</td><td>long</td><td>连接调用recycle中，包括回收、关闭等情况，成功之后会增加，标识连接关闭的次数。</td></tr><tr><td>recycleCount</td><td>long</td><td>连接调用recycle成功之后才会增加，不包括在回收过程中关闭的情况。标识连接真正回收的次数。</td></tr><tr><td>removeAbandonedCount</td><td>long</td><td>连接调用removeAbandoned成功之后才会增加，标识连接跟踪泄露机制的执行次数。</td></tr><tr><td>notEmptyWaitCount</td><td>long</td><td>连接调用pollLast或者tackLast之后就会增加，实际上是触发notEmpty.await的的次数.</td></tr><tr><td>notEmptySignalCount</td><td>long</td><td>连接触发notEmpty的signal的次数。</td></tr><tr><td>discardCount</td><td>volatile long</td><td>调用discard成功之后的次数。</td></tr></tbody></table><p>上述long类型的计数器，全部只会增加，不会减少，在Druid工作的过程中进行统计和监控作用。</p><h2 id="_2-状态相关的计数器" tabindex="-1"><a class="header-anchor" href="#_2-状态相关的计数器"><span>2.状态相关的计数器</span></a></h2><table><thead><tr><th>变量名</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>poolingCount</td><td>int</td><td>DruidConnectionHolder[] connections数组中连接的数量。</td></tr><tr><td>activeCount</td><td>int</td><td>Map&lt;DruidPooledConnection, Object&gt; activeConnections 中的连接数量。</td></tr><tr><td>notEmptyWaitThreadCount</td><td>int</td><td>连接被取出之后，触发notEmpty进行wait线程的数量。</td></tr><tr><td>activePeak</td><td>int</td><td>activeCount出现的峰值。</td></tr><tr><td>poolingPeak</td><td>int</td><td>poolingCount出现的峰值。</td></tr><tr><td>createTaskCount</td><td>int</td><td>创建连接线程数的计数器。</td></tr></tbody></table><h2 id="_3-相关的判断逻辑" tabindex="-1"><a class="header-anchor" href="#_3-相关的判断逻辑"><span>3. 相关的判断逻辑：</span></a></h2><p>poolingCount &lt; initialSize 时，创建连接以达到初始化连接数。<br> poolingCount &gt;= maxActive 时，回收的连接会被拒绝放入connections中。</p><p>activeCount + poolingCount &gt;= maxActive时， empty.await()，创建连接的线程会被取消。<br> activeCount + poolingCount &lt;= minIdle 时，通知emptySignal(),通知继续创建连接。<br> keepAlive &amp;&amp; poolingCount + activeCount &lt; minIdle 时，再shrink方法中needFill为true,会触发通知emptySignal(),继续创建连接。<br> activeCount + poolingCount + createTaskCount &gt;= maxActive 时，开启了createScheduler，则会取消createScheduler的创建任务。<br> activeCount &lt;= minIdle 时，触发emptySignal()，创建连接。</p><h2 id="_4-存储connection的容器" tabindex="-1"><a class="header-anchor" href="#_4-存储connection的容器"><span>4. 存储Connection的容器</span></a></h2><table><thead><tr><th>变量名</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>connections</td><td>DruidConnectionHolder[]</td><td>连接存放的数组。</td></tr><tr><td>keepAliveConnections</td><td>DruidConnectionHolder[]</td><td>keepAlive连接存放的数组。只会在shrink中开启了keepalive才会使用。</td></tr><tr><td>evictConnections</td><td>DruidConnectionHolder[]</td><td>需要关闭的连接存放的数组。shrink中该数组中的连接都会被关闭掉。</td></tr><tr><td>activeConnections</td><td>Map&lt;DruidPooledConnection, Object&gt;</td><td>getConnection之后，存放的容器。</td></tr></tbody></table><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231229574.png" alt="image-20220525230547564" tabindex="0" loading="lazy"><figcaption>image-20220525230547564</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/dhaibo1986/article/details/121430733?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Druid源码阅读10-DruidDataSource中的一些计数器</a></p>',15)]))}const l=n(r,[["render",a],["__file","dbcp-y-druid-source-counter.html.vue"]]),s=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/database-connection-pool/dbcp-y-druid-source-counter.html","title":"Druid源码学习（十）-DruidDataSource中的一些计数器","lang":"zh-CN","frontmatter":{"aliases":"Druid源码学习（十）-DruidDataSource中的一些计数器","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:50","updated":"2024-04-23 12:30","description":"Druid源码学习（十）-DruidDataSource中的一些计数器 在 Druid 连接池的工作过程中，会用到一些计数器对Druid的情况进行判断。然后根据计数器的数据采取一系列操作，整理如下: 1. 统计类的计数器 上述long类型的计数器，全部只会增加，不会减少，在Druid工作的过程中进行统计和监控作用。 2.状态相关的计数器 3. 相关的判...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/database-connection-pool/dbcp-y-druid-source-counter.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Druid源码学习（十）-DruidDataSource中的一些计数器"}],["meta",{"property":"og:description","content":"Druid源码学习（十）-DruidDataSource中的一些计数器 在 Druid 连接池的工作过程中，会用到一些计数器对Druid的情况进行判断。然后根据计数器的数据采取一系列操作，整理如下: 1. 统计类的计数器 上述long类型的计数器，全部只会增加，不会减少，在Druid工作的过程中进行统计和监控作用。 2.状态相关的计数器 3. 相关的判..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231229574.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Druid源码学习（十）-DruidDataSource中的一些计数器\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231229574.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 统计类的计数器","slug":"_1-统计类的计数器","link":"#_1-统计类的计数器","children":[]},{"level":2,"title":"2.状态相关的计数器","slug":"_2-状态相关的计数器","link":"#_2-状态相关的计数器","children":[]},{"level":2,"title":"3. 相关的判断逻辑：","slug":"_3-相关的判断逻辑","link":"#_3-相关的判断逻辑","children":[]},{"level":2,"title":"4. 存储Connection的容器","slug":"_4-存储connection的容器","link":"#_4-存储connection的容器","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.16,"words":649},"filePathRelative":"posts/Java/Java第三方依赖/database-connection-pool/dbcp-y-druid-source-counter.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>在 Druid 连接池的工作过程中，会用到一些计数器对Druid的情况进行判断。然后根据计数器的数据采取一系列操作，整理如下:</p>\\n<h2>1. 统计类的计数器</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>变量名</th>\\n<th>类型</th>\\n<th>说明</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>connectCount</td>\\n<td>long</td>\\n<td>getConnectionInternal被调用之后就会增加，意味着连接被get的次数。</td>\\n</tr>\\n<tr>\\n<td>closeCount</td>\\n<td>long</td>\\n<td>连接调用recycle中，包括回收、关闭等情况，成功之后会增加，标识连接关闭的次数。</td>\\n</tr>\\n<tr>\\n<td>recycleCount</td>\\n<td>long</td>\\n<td>连接调用recycle成功之后才会增加，不包括在回收过程中关闭的情况。标识连接真正回收的次数。</td>\\n</tr>\\n<tr>\\n<td>removeAbandonedCount</td>\\n<td>long</td>\\n<td>连接调用removeAbandoned成功之后才会增加，标识连接跟踪泄露机制的执行次数。</td>\\n</tr>\\n<tr>\\n<td>notEmptyWaitCount</td>\\n<td>long</td>\\n<td>连接调用pollLast或者tackLast之后就会增加，实际上是触发notEmpty.await的的次数.</td>\\n</tr>\\n<tr>\\n<td>notEmptySignalCount</td>\\n<td>long</td>\\n<td>连接触发notEmpty的signal的次数。</td>\\n</tr>\\n<tr>\\n<td>discardCount</td>\\n<td>volatile long</td>\\n<td>调用discard成功之后的次数。</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{l as comp,s as data};