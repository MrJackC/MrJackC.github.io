import{_ as e,c as a,a as r,o as l}from"./app-mWs04Xnh.js";const o={};function n(d,t){return l(),a("div",null,t[0]||(t[0]=[r('<h1 id="如何合理配置线程池的大小" tabindex="-1"><a class="header-anchor" href="#如何合理配置线程池的大小"><span>如何合理配置线程池的大小</span></a></h1><h2 id="_1-理论背景" tabindex="-1"><a class="header-anchor" href="#_1-理论背景"><span>1. 理论背景</span></a></h2><p>一般需要根据任务的类型来配置线程池大小：</p><ul><li>如果是CPU密集型任务，<strong>就需要尽量压榨CPU</strong>，应配置尽可能小的线程，参考值可以设为 <em>N</em>CPU+1</li><li>如果是IO密集型任务，<strong>因为IO操作不占用CPU</strong>，不要让CPU闲下来，应加大线程数量,参考值可以设置为2NCPU+1</li></ul><p>当然，这只是一个参考值，具体的设置还需要根据实际情况进行调整，比如可以先将线程池大小设置为参考值，再观察任务运行情况和系统负载、资源利用率来进行适当调整。</p><h2 id="_2-什么是io秘籍和cpu-秘籍" tabindex="-1"><a class="header-anchor" href="#_2-什么是io秘籍和cpu-秘籍"><span>2. 什么是io秘籍和CPU 秘籍</span></a></h2><ul><li><p>io密集型（要减少请求数量或请求大小）</p><ol><li>数据库操作</li><li>网络请求操作</li></ol></li><li><p>cpu 密集型<br> 3. 程序计算</p></li></ul><h2 id="_3-实例测试" tabindex="-1"><a class="header-anchor" href="#_3-实例测试"><span>3. 实例测试</span></a></h2><p>在做数据清理时，需要查询数据库，做数据清洗完成后，再保存到数据库</p><p><strong>测试逻辑步骤</strong></p><ol><li>查询出总记录数</li><li>每100条记录划分一组在线程池中操作</li></ol><blockquote><p>我win 核心线程为4</p></blockquote><blockquote><p>不使用多线程的时候，每分钟执行500条</p></blockquote><p>改用多线程后</p><table><thead><tr><th>线程数</th><th>每分钟执行条数</th><th>5分钟执行条数</th></tr></thead><tbody><tr><td>核心线程数5，最大线程数10</td><td>4400（初次线程停顿条数1100）</td><td></td></tr><tr><td>核心线程数10，最大线程数20</td><td>8400（初次线程停顿条数2100）</td><td></td></tr><tr><td>核心线程数20，最大线程数40</td><td>12300（初次线程停顿条数4100）</td><td></td></tr><tr><td>核心线程数30，最大线程数60</td><td>18300（初次线程停顿条数6100）</td><td></td></tr><tr><td>核心线程数40，最大线程数80</td><td>24300（初次线程停顿条数8100）</td><td></td></tr><tr><td>核心线程数50，最大线程数100</td><td>26716（初次线程停顿条数9994）</td><td></td></tr><tr><td>核心线程数60，最大线程数120</td><td>27300（初次线程停顿条数9854）</td><td></td></tr><tr><td>核心线程数70，最大线程数140</td><td>19942（初次线程停顿条数9747）</td><td></td></tr><tr><td>核心线程数80，最大线程数160</td><td>29770（初次线程停顿条数9747）</td><td></td></tr></tbody></table><p>初次线程停顿条数：清理到数据库中的数据从0开始到一个稳定的数（线程池差不多同一时间执行完毕的，过渡到其他线程）</p><p>该实验建立在每分钟的基础上。每个线程执行时间15-20s左右。那1分钟执行3-4次。所以误差比较明显</p><h3 id="_3-1-实验分析" tabindex="-1"><a class="header-anchor" href="#_3-1-实验分析"><span>3.1 实验分析</span></a></h3><p>实现出的结果显示2n+1 的结论。线程数量还远不能达到最佳线程。继续查阅资料发现一个估算公式</p><blockquote><p>最佳线程数目 = （（线程等待时间+线程CPU时间）/线程CPU时间 ）* CPU数目</p></blockquote><p>比如平均每个线程 CPU 运行时间为 0.5s，而线程等待时间（非 CPU 运行时间，比如 IO）为 1.5s，CPU 核心数为 8，那么根据上面这个公式估算得到：((0.5+1.5)/0.5)*8=32。这个公式进一步转化为：</p><blockquote><p>最佳线程数目 = （线程等待时间与线程CPU时间之比 + 1）* CPU数目</p></blockquote><p><strong>线程等待时间所占比例越高，需要越多线程。线程 CPU 时间所占比例越高，需要越少线程。</strong></p><p>一个系统最快的部分是 CPU，所以决定一个系统吞吐量上限的是 CPU。增强 CPU 处理能力，可以提高系统吞吐量上限。但根据短板效应，真实的系统吞吐量并不能单纯根据 CPU 来计算。那要提高系统吞吐量，就需要从 “系统短板”（比如网络延迟、IO）着手：</p><ul><li>尽量提高短板操作的并行化比率，比如多线程下载技术</li><li>增强短板能力，比如用 NIO 替代 IO</li></ul><h2 id="代码测算" tabindex="-1"><a class="header-anchor" href="#代码测算"><span>代码测算</span></a></h2><p><a href="https://github.com/sunshanpeng/dark_magic" target="_blank" rel="noopener noreferrer">合理估算java的线程池大小及队列数</a></p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/feilang00/article/details/95940059?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-2&amp;spm=1001.2101.3001.4242" target="_blank" rel="noopener noreferrer">如何合理地估算线程池大小？</a></p>',29)]))}const p=e(o,[["render",n],["__file","java-thread-y-threadpool-size.html.vue"]]),s=JSON.parse('{"path":"/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-threadpool-size.html","title":"如何合理配置线程池的大小","lang":"zh-CN","frontmatter":{"aliases":"如何合理配置线程池的大小","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:48","updated":"2024-03-12 08:57","description":"如何合理配置线程池的大小 1. 理论背景 一般需要根据任务的类型来配置线程池大小： 如果是CPU密集型任务，就需要尽量压榨CPU，应配置尽可能小的线程，参考值可以设为 NCPU+1 如果是IO密集型任务，因为IO操作不占用CPU，不要让CPU闲下来，应加大线程数量,参考值可以设置为2NCPU+1 当然，这只是一个参考值，具体的设置还需要根据实际情况进行...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-threadpool-size.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"如何合理配置线程池的大小"}],["meta",{"property":"og:description","content":"如何合理配置线程池的大小 1. 理论背景 一般需要根据任务的类型来配置线程池大小： 如果是CPU密集型任务，就需要尽量压榨CPU，应配置尽可能小的线程，参考值可以设为 NCPU+1 如果是IO密集型任务，因为IO操作不占用CPU，不要让CPU闲下来，应加大线程数量,参考值可以设置为2NCPU+1 当然，这只是一个参考值，具体的设置还需要根据实际情况进行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何合理配置线程池的大小\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 理论背景","slug":"_1-理论背景","link":"#_1-理论背景","children":[]},{"level":2,"title":"2. 什么是io秘籍和CPU 秘籍","slug":"_2-什么是io秘籍和cpu-秘籍","link":"#_2-什么是io秘籍和cpu-秘籍","children":[]},{"level":2,"title":"3. 实例测试","slug":"_3-实例测试","link":"#_3-实例测试","children":[{"level":3,"title":"3.1 实验分析","slug":"_3-1-实验分析","link":"#_3-1-实验分析","children":[]}]},{"level":2,"title":"代码测算","slug":"代码测算","link":"#代码测算","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.48,"words":1045},"filePathRelative":"posts/Java/Java多线程/java-thread-y-threadpool-size.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 理论背景</h2>\\n<p>一般需要根据任务的类型来配置线程池大小：</p>\\n<ul>\\n<li>如果是CPU密集型任务，<strong>就需要尽量压榨CPU</strong>，应配置尽可能小的线程，参考值可以设为 <em>N</em>CPU+1</li>\\n<li>如果是IO密集型任务，<strong>因为IO操作不占用CPU</strong>，不要让CPU闲下来，应加大线程数量,参考值可以设置为2NCPU+1</li>\\n</ul>\\n<p>当然，这只是一个参考值，具体的设置还需要根据实际情况进行调整，比如可以先将线程池大小设置为参考值，再观察任务运行情况和系统负载、资源利用率来进行适当调整。</p>","autoDesc":true}');export{p as comp,s as data};