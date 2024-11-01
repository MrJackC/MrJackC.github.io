import{_ as s,c as n,a as t,o as e}from"./app-tJW29Kmg.js";const i={};function o(r,a){return e(),n("div",null,a[0]||(a[0]=[t(`<h1 id="druid源码学习-一-druiddatasource数据结构" tabindex="-1"><a class="header-anchor" href="#druid源码学习-一-druiddatasource数据结构"><span>Druid源码学习（一）-DruidDataSource数据结构</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>DruidDataSource是DruidCP最关键的类之一，承载了连接池的启动、关闭、以及连接的获取和管理等功能。</p><h2 id="_2-druiddatasource的数据结构" tabindex="-1"><a class="header-anchor" href="#_2-druiddatasource的数据结构"><span>2. DruidDataSource的数据结构</span></a></h2><p>DruidDataSource 其内部关键的的数据结构如下表:</p><table><thead><tr><th>name</th><th>type</th><th>说明</th></tr></thead><tbody><tr><td>connections</td><td>volatile DruidConnectionHolder[]</td><td>pool的关键数组，存放连接，实际上是DruidConnectionHolder的数组。Connection由DruidConnectionHolder持有</td></tr><tr><td>evictConnections</td><td>DruidConnectionHolder[]</td><td>被驱逐的Connection的pool,调用收缩方法shrink之后，被收缩的连接都会进入这个数组。</td></tr><tr><td>keepAliveConnections</td><td>DruidConnectionHolder[]</td><td>收缩方法shrink中，满足keepalive状态的连接都进入这个数组。</td></tr><tr><td>autoFilters</td><td>static List</td><td>这个list存全部的filter</td></tr><tr><td>enable</td><td>volatile boolean</td><td>默认值为true,标识连接池是否可用，调用close方法设置该值为false,当为false的时候，连接的error次数增加1,get连接或者其他操作会失败。</td></tr><tr><td>inited</td><td>volatile boolean</td><td>默认值为false,初始化完成的标识。</td></tr><tr><td>closing</td><td>volatile boolean</td><td>关闭过程中的状态。正在close</td></tr></tbody></table><p><strong>连接池最关键的数据结构是内部持有DruidConnectionHolder的数组，connections。</strong></p><h2 id="_3-druidconnectionholder的数据结构" tabindex="-1"><a class="header-anchor" href="#_3-druidconnectionholder的数据结构"><span>3. DruidConnectionHolder的数据结构</span></a></h2><table><thead><tr><th>name</th><th>type</th><th>说明</th></tr></thead><tbody><tr><td>dataSource</td><td>final DruidAbstractDataSource</td><td>指向DataSource的指针。</td></tr><tr><td>conn</td><td>final Connection</td><td>指向真正的数据库连接，由数据库驱动实现。</td></tr><tr><td>connectionId</td><td>final long</td><td>连接编号。</td></tr><tr><td>connectionEventListeners</td><td>final List</td><td>连接事件监听器。</td></tr><tr><td>statementEventListeners</td><td>final List</td><td>statement事件监听器。</td></tr><tr><td>statementPool</td><td>PreparedStatementPool</td><td>其内部是一个LRUCache，对Statement做缓存。</td></tr><tr><td>statementTrace</td><td>final List</td><td>一个对Statement进行追踪的list,这个statementTrace的作用后面需要详细看看。</td></tr></tbody></table><p>DruidConnectionHolder是连接池中物理连接的载体，在DruidDataSource中，获取连接的getConnection方法，拿到的是DruidPooledConnection。</p><h2 id="_4-获取连接-getconnection" tabindex="-1"><a class="header-anchor" href="#_4-获取连接-getconnection"><span>4. 获取连接 getConnection</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> DruidPooledConnection</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getConnection</span><span style="color:#E06C75;--shiki-dark:#E06C75;">() throws SQLException {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getConnection</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(maxWait)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> DruidPooledConnection</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getConnection</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> maxWaitMillis) throws SQLException {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //执行初始化</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        init</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //如果filter存在 则执行filter,通过filter的代理类来得到连接。</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">filters</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">size</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> &gt;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            //filter的chain</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            FilterChainImpl</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> filterChain </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> FilterChainImpl</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            return</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> filterChain</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">dataSource_connect</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, maxWaitMillis);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">else</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            //如果filter不存在，则直接获取连接。</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            return</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getConnectionDirect</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(maxWaitMillis)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终得到connection的方法：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">poolableConnection </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getConnectionInternal</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(maxWaitMillis)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>这个方法中，也是根据DruidConnectionHolder产生连接池：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> DruidPooledConnection</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> poolalbeConnection </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> DruidPooledConnection</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(holder)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> poolalbeConnection</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>查看这个构造函数：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> public</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> DruidPooledConnection</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">DruidConnectionHolder</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> holder){</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        super</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">holder</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getConnection</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">conn</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> holder</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getConnection</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">holder</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> holder</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">lock</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> holder</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">lock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        dupCloseLogEnable </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> holder</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getDataSource</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">isDupCloseLogEnable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        ownerThread </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">currentThread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        connectedTimeMillis </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">currentTimeMillis</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span></code></pre></div><p>实际上DruidPooledConnection内部持有了一个DruidConnectionHolder。<br> DruidPooledConnection的数据结构如下表：</p><table><thead><tr><th>name</th><th>type</th><th>说明</th></tr></thead><tbody><tr><td>conn</td><td>Connection</td><td>指向真实的数据库连接。</td></tr><tr><td>holder</td><td>volatile DruidConnectionHolder</td><td>指向DruidConnectionHolder。</td></tr><tr><td>transactionInfo</td><td>TransactionInfo</td><td>事务相关的信息</td></tr></tbody></table><h2 id="_5-类关系图" tabindex="-1"><a class="header-anchor" href="#_5-类关系图"><span>5. 类关系图</span></a></h2><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231230617.png" alt="image-20220517224826098" tabindex="0" loading="lazy"><figcaption>image-20220517224826098</figcaption></figure><p>DruidConnectionHolder与DruidPooledConnection，实际上是对连接进行了分层。将频繁变更的内容抽象到了DruidConnectionHolder类。<br> 而DruidPooledConnection则存放了Statement的的缓存pool。</p><h2 id="_6-相关知识点" tabindex="-1"><a class="header-anchor" href="#_6-相关知识点"><span>6. 相关知识点</span></a></h2><h3 id="_6-1-volatile" tabindex="-1"><a class="header-anchor" href="#_6-1-volatile"><span>6.1 volatile</span></a></h3><p><code>volatile</code> 在druid 中也非常常用</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // store</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> volatile</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> DruidConnectionHolder</span><span style="color:#E06C75;--shiki-dark:#E06C75;">[] connections</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> volatile</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> boolean</span><span style="color:#E06C75;--shiki-dark:#E06C75;">                 closing                   </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> volatile</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> boolean</span><span style="color:#E06C75;--shiki-dark:#E06C75;">                 closed                    </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h4 id="_6-1-1-volatile-简介与作用" tabindex="-1"><a class="header-anchor" href="#_6-1-1-volatile-简介与作用"><span>6.1.1 <code>volatile</code> 简介与作用</span></a></h4><p><code>volatile</code>通常被比喻成&quot;轻量级的<code>synchronized</code>，<code>synchronized</code>可以保证原子性、有序性和可见性。而<code>volatile</code>却只能保证有序性和可见性（不保证原子性）。</p><ul><li>保证了不同线程对这个变量进行操作时的可见性，即一个线程修改了某个变量的值，这新值对其他线程来说是立即可见的。</li><li>禁止进行指令重排序。</li></ul><h4 id="_6-1-2-什么场景下使用volatile" tabindex="-1"><a class="header-anchor" href="#_6-1-2-什么场景下使用volatile"><span>6.1.2 什么场景下使用<code>volatile</code></span></a></h4><p>在以下两个场景中可以使用<code>volatile</code>来代替<code>synchronized</code>：</p><blockquote><p>1、运算结果并不依赖变量的当前值，或者能够确保只有单一的线程会修改变量的值。</p><p>2、变量不需要与其他状态变量共同参与不变约束。</p></blockquote><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/dhaibo1986/article/details/121215459?spm=1001.2014.3001.5501" target="_blank" rel="noopener noreferrer">Druid源码阅读1-DruidDataSource数据结构</a></p>`,35)]))}const d=s(i,[["render",o],["__file","dbcp-y-druid-source-data-structure.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/database-connection-pool/dbcp-y-druid-source-data-structure.html","title":"Druid源码学习（一）-DruidDataSource数据结构","lang":"zh-CN","frontmatter":{"aliases":"Druid源码学习（一）-DruidDataSource数据结构","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:50","updated":"2024-04-23 12:30","description":"Druid源码学习（一）-DruidDataSource数据结构 1. 简介 DruidDataSource是DruidCP最关键的类之一，承载了连接池的启动、关闭、以及连接的获取和管理等功能。 2. DruidDataSource的数据结构 DruidDataSource 其内部关键的的数据结构如下表: 连接池最关键的数据结构是内部持有DruidCo...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/database-connection-pool/dbcp-y-druid-source-data-structure.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Druid源码学习（一）-DruidDataSource数据结构"}],["meta",{"property":"og:description","content":"Druid源码学习（一）-DruidDataSource数据结构 1. 简介 DruidDataSource是DruidCP最关键的类之一，承载了连接池的启动、关闭、以及连接的获取和管理等功能。 2. DruidDataSource的数据结构 DruidDataSource 其内部关键的的数据结构如下表: 连接池最关键的数据结构是内部持有DruidCo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231230617.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Druid源码学习（一）-DruidDataSource数据结构\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231230617.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. DruidDataSource的数据结构","slug":"_2-druiddatasource的数据结构","link":"#_2-druiddatasource的数据结构","children":[]},{"level":2,"title":"3. DruidConnectionHolder的数据结构","slug":"_3-druidconnectionholder的数据结构","link":"#_3-druidconnectionholder的数据结构","children":[]},{"level":2,"title":"4. 获取连接 getConnection","slug":"_4-获取连接-getconnection","link":"#_4-获取连接-getconnection","children":[]},{"level":2,"title":"5. 类关系图","slug":"_5-类关系图","link":"#_5-类关系图","children":[]},{"level":2,"title":"6. 相关知识点","slug":"_6-相关知识点","link":"#_6-相关知识点","children":[{"level":3,"title":"6.1 volatile","slug":"_6-1-volatile","link":"#_6-1-volatile","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.12,"words":935},"filePathRelative":"posts/Java/Java第三方依赖/database-connection-pool/dbcp-y-druid-source-data-structure.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>DruidDataSource是DruidCP最关键的类之一，承载了连接池的启动、关闭、以及连接的获取和管理等功能。</p>\\n<h2>2. DruidDataSource的数据结构</h2>\\n<p>DruidDataSource 其内部关键的的数据结构如下表:</p>\\n<table>\\n<thead>\\n<tr>\\n<th>name</th>\\n<th>type</th>\\n<th>说明</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>connections</td>\\n<td>volatile DruidConnectionHolder[]</td>\\n<td>pool的关键数组，存放连接，实际上是DruidConnectionHolder的数组。Connection由DruidConnectionHolder持有</td>\\n</tr>\\n<tr>\\n<td>evictConnections</td>\\n<td>DruidConnectionHolder[]</td>\\n<td>被驱逐的Connection的pool,调用收缩方法shrink之后，被收缩的连接都会进入这个数组。</td>\\n</tr>\\n<tr>\\n<td>keepAliveConnections</td>\\n<td>DruidConnectionHolder[]</td>\\n<td>收缩方法shrink中，满足keepalive状态的连接都进入这个数组。</td>\\n</tr>\\n<tr>\\n<td>autoFilters</td>\\n<td>static List</td>\\n<td>这个list存全部的filter</td>\\n</tr>\\n<tr>\\n<td>enable</td>\\n<td>volatile boolean</td>\\n<td>默认值为true,标识连接池是否可用，调用close方法设置该值为false,当为false的时候，连接的error次数增加1,get连接或者其他操作会失败。</td>\\n</tr>\\n<tr>\\n<td>inited</td>\\n<td>volatile boolean</td>\\n<td>默认值为false,初始化完成的标识。</td>\\n</tr>\\n<tr>\\n<td>closing</td>\\n<td>volatile boolean</td>\\n<td>关闭过程中的状态。正在close</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{d as comp,c as data};
