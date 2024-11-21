import{_ as e,c as d,a as n,o}from"./app-CZJgH_ea.js";const a={};function r(i,t){return o(),d("div",null,t[0]||(t[0]=[n('<h1 id="druid源码学习-九-druiddatasource和druidconnection中的状态" tabindex="-1"><a class="header-anchor" href="#druid源码学习-九-druiddatasource和druidconnection中的状态"><span>Druid源码学习（九）-DruidDataSource和DruidConnection中的状态</span></a></h1><h2 id="_1-druidpooledconnection中的状态" tabindex="-1"><a class="header-anchor" href="#_1-druidpooledconnection中的状态"><span>1. DruidPooledConnection中的状态：</span></a></h2><table><thead><tr><th>字段</th><th>类型</th><th>所在类</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>closed</td><td>volatile boolean</td><td>DruidPooledConnection</td><td>FALSE</td><td>关闭状态，recycle到连接池中的连接会修改为true。但是这个状态通常只在checkStateInternal中单独使用。判断连接是否关闭需要结合(closed or disable)</td></tr><tr><td>disable</td><td>volatile boolean</td><td>DruidPooledConnection</td><td>FALSE</td><td>不可用状态，当连接出现异常调用handleFatalError之后，将此状态设置为true.之后连接处于不可用状态。</td></tr><tr><td>traceEnable</td><td>volatile boolean</td><td>DruidPooledConnection</td><td>FALSE</td><td>traceEnable跟踪开关，默认为false,这个开关配合abandoned使用，当DruidDataSource开启removeAbandoned之后，这个状态设置为true,当连接从activeConnections中取出的时候，设置为false.</td></tr><tr><td>abandoned</td><td>volatile boolean</td><td>DruidPooledConnection</td><td>FALSE</td><td>连接泄露检测状态，默认为false,当removeAbandoned开始执行之后，对符合条件的连接，将其设置为true的时候开启连接泄露检测。</td></tr><tr><td>running</td><td>volatile boolean</td><td>DruidPooledConnection</td><td>FALSE</td><td>运行状态，执行Statement之前的beforeExecute设置为true,执行完成之后afterExecute方法设置为false.</td></tr><tr><td>active</td><td>volatile boolean</td><td>DruidConnectionHolder</td><td>FALSE</td><td>活动状态,默认值为false,getConnectionInternal之后设置为true,discardConnection设置为false,recycle如果物理连接被关闭或者测试连接不通，以及回收成功，都修改为false。这是连接被用户线程调用的持有状态。标识连接被用户线程持有。</td></tr><tr><td>discard</td><td>volatile boolean</td><td>DruidConnectionHolder</td><td>FALSE</td><td>关闭状态，默认为false,调用discardConnection方法 或者recycle出现异常的时候改为true,之后关闭连接，</td></tr></tbody></table><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231231767.png" alt="image-20220525225828469" tabindex="0" loading="lazy"><figcaption>image-20220525225828469</figcaption></figure><h2 id="_2-druiddatasource中的状态" tabindex="-1"><a class="header-anchor" href="#_2-druiddatasource中的状态"><span>2. DruidDataSource中的状态：</span></a></h2><table><thead><tr><th>字段</th><th>类型</th><th>所在类</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>closing</td><td>volatile boolean</td><td>DruidDataSource</td><td>FALSE</td><td>关闭中状态，调用close方法设置为true，如果关闭完成，则这个状态设置为false.</td></tr><tr><td>closed</td><td>volatile boolean</td><td>DruidDataSource</td><td>FALSE</td><td>关闭完成状态,close方法调用完成为true.这样连接池将不可使用。</td></tr><tr><td>enable</td><td>volatile boolean</td><td>DruidDataSource</td><td>TRUE</td><td>可用状态，默认为true,当调用close完成之后，设置为false。这样连接池将不可用。</td></tr><tr><td>keepAlive</td><td>volatile boolean</td><td>DruidDataSource</td><td>FALSE</td><td>keepAlive开关，由用户自行设置，如果开启了keepAlive，则在shrink方法中将符合条件的连接回收到keepAliveConnections中，并进行复用。</td></tr><tr><td>inited</td><td>volatile boolean</td><td>DruidDataSource</td><td>FALSE</td><td>初始化状态，默认为false,调用init之后设置为true标识初始化完成，之后调用restart设置为false。</td></tr></tbody></table><p>各状态关系：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231231807.png" alt="6cbb8cdd3d29cf99c3e4f012a37640a2" tabindex="0" loading="lazy"><figcaption>6cbb8cdd3d29cf99c3e4f012a37640a2</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="Druid%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB9-DruidDataSource%E5%92%8CDruidConnection%E4%B8%AD%E7%9A%84%E7%8A%B6%E6%80%81">https://blog.csdn.net/dhaibo1986/article/details/121407085?spm=1001.2014.3001.5502</a></p>',10)]))}const l=e(a,[["render",r],["__file","dbcp-ydruid-source-status.html.vue"]]),u=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/database-connection-pool/dbcp-ydruid-source-status.html","title":"Druid源码学习（九）-DruidDataSource和DruidConnection中的状态","lang":"zh-CN","frontmatter":{"description":"Druid源码学习（九）-DruidDataSource和DruidConnection中的状态 1. DruidPooledConnection中的状态： image-20220525225828469image-20220525225828469 2. DruidDataSource中的状态： 各状态关系： 6cbb8cdd3d29cf99c3e4...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/database-connection-pool/dbcp-ydruid-source-status.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Druid源码学习（九）-DruidDataSource和DruidConnection中的状态"}],["meta",{"property":"og:description","content":"Druid源码学习（九）-DruidDataSource和DruidConnection中的状态 1. DruidPooledConnection中的状态： image-20220525225828469image-20220525225828469 2. DruidDataSource中的状态： 各状态关系： 6cbb8cdd3d29cf99c3e4..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231231767.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Druid源码学习（九）-DruidDataSource和DruidConnection中的状态\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231231767.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231231807.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. DruidPooledConnection中的状态：","slug":"_1-druidpooledconnection中的状态","link":"#_1-druidpooledconnection中的状态","children":[]},{"level":2,"title":"2. DruidDataSource中的状态：","slug":"_2-druiddatasource中的状态","link":"#_2-druiddatasource中的状态","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.05,"words":614},"filePathRelative":"posts/Java/Java第三方依赖/database-connection-pool/dbcp-ydruid-source-status.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. DruidPooledConnection中的状态：</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>字段</th>\\n<th>类型</th>\\n<th>所在类</th>\\n<th>默认值</th>\\n<th>说明</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>closed</td>\\n<td>volatile boolean</td>\\n<td>DruidPooledConnection</td>\\n<td>FALSE</td>\\n<td>关闭状态，recycle到连接池中的连接会修改为true。但是这个状态通常只在checkStateInternal中单独使用。判断连接是否关闭需要结合(closed or disable)</td>\\n</tr>\\n<tr>\\n<td>disable</td>\\n<td>volatile boolean</td>\\n<td>DruidPooledConnection</td>\\n<td>FALSE</td>\\n<td>不可用状态，当连接出现异常调用handleFatalError之后，将此状态设置为true.之后连接处于不可用状态。</td>\\n</tr>\\n<tr>\\n<td>traceEnable</td>\\n<td>volatile boolean</td>\\n<td>DruidPooledConnection</td>\\n<td>FALSE</td>\\n<td>traceEnable跟踪开关，默认为false,这个开关配合abandoned使用，当DruidDataSource开启removeAbandoned之后，这个状态设置为true,当连接从activeConnections中取出的时候，设置为false.</td>\\n</tr>\\n<tr>\\n<td>abandoned</td>\\n<td>volatile boolean</td>\\n<td>DruidPooledConnection</td>\\n<td>FALSE</td>\\n<td>连接泄露检测状态，默认为false,当removeAbandoned开始执行之后，对符合条件的连接，将其设置为true的时候开启连接泄露检测。</td>\\n</tr>\\n<tr>\\n<td>running</td>\\n<td>volatile boolean</td>\\n<td>DruidPooledConnection</td>\\n<td>FALSE</td>\\n<td>运行状态，执行Statement之前的beforeExecute设置为true,执行完成之后afterExecute方法设置为false.</td>\\n</tr>\\n<tr>\\n<td>active</td>\\n<td>volatile boolean</td>\\n<td>DruidConnectionHolder</td>\\n<td>FALSE</td>\\n<td>活动状态,默认值为false,getConnectionInternal之后设置为true,discardConnection设置为false,recycle如果物理连接被关闭或者测试连接不通，以及回收成功，都修改为false。这是连接被用户线程调用的持有状态。标识连接被用户线程持有。</td>\\n</tr>\\n<tr>\\n<td>discard</td>\\n<td>volatile boolean</td>\\n<td>DruidConnectionHolder</td>\\n<td>FALSE</td>\\n<td>关闭状态，默认为false,调用discardConnection方法 或者recycle出现异常的时候改为true,之后关闭连接，</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{l as comp,u as data};
