import{_ as e,c as s,a as i,o as t}from"./app-CpAF2rca.js";const n={};function r(l,a){return t(),s("div",null,a[0]||(a[0]=[i(`<h1 id="mybatis-pagehelper源码分析" tabindex="-1"><a class="header-anchor" href="#mybatis-pagehelper源码分析"><span>Mybatis-PageHelper源码分析</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>项目中分页是非常常见的需求，在项目中我们一般集成第三方的分页插件，避免在业务层嵌入过多业务代码。</p><p>分页插件，我们项目中是采用<code>Mybatis-PageHelper </code>，作为一款轻量级的插件，源码应该不难，我们就来分析分析他的源码</p><h2 id="_2-分页插件实现原理与基础" tabindex="-1"><a class="header-anchor" href="#_2-分页插件实现原理与基础"><span>2. 分页插件实现原理与基础</span></a></h2><h3 id="_2-1-拦截器" tabindex="-1"><a class="header-anchor" href="#_2-1-拦截器"><span>2.1 拦截器</span></a></h3><p>Mybatis 提供了拦截器接口<code>Interceptor(org.apache.ibatis.plugin.Interceptor)</code>, 我们仅需要在实现类中对拦截对象和方法进行处理即可</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556777.png" alt="image-20211023103716074" tabindex="0" loading="lazy"><figcaption>image-20211023103716074</figcaption></figure><h4 id="_2-1-1-object-intercept-invocation-invocation" tabindex="-1"><a class="header-anchor" href="#_2-1-1-object-intercept-invocation-invocation"><span>2.1.1 Object intercept(Invocation invocation)</span></a></h4><p><strong>intercept 是mybatis 运行时要执行的方法</strong>。通过该方法的参数<code>invocation</code> 可以得到很多有用的信息，该参数的方法常用如下</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ZszInterceptor</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> implements</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Interceptor</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Object</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> intercept</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Invocation</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> invocation</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> throws</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Throwable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> target</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> invocation</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getTarget</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Method</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> method</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> invocation</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getMethod</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Object</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;--shiki-dark:#E06C75;">args</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> invocation</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getArgs</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> result</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> invocation</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">proceed</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> result;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><ul><li><p>getTarget ():</p><p>获取当前拦截的对象</p></li><li><p>getMethod()：</p><p>获取当前被拦截的方法</p></li><li><p>getArgs()：</p><p>可以返回被拦截方法中的参数</p></li><li><p>invocation.proceed()：</p><p>proceed() 方法实际上执行了method.invoke(target,args)方法，上面的代码中没有做任何处理，直接返回了结果</p></li></ul><h4 id="_2-1-2-plugin-object-target" tabindex="-1"><a class="header-anchor" href="#_2-1-2-plugin-object-target"><span>2.1.2 plugin(Object target)</span></a></h4><p>这个方法的参数target 就是拦截器要拦截的对象，该方法会在创建被拦截的接口实现类时被调用。</p><p>听起来有点绕，其实现其实我们只需要调用mybatis 提供的 <code>Plugin.wrap(target, this)</code> 静态方法就可以通过java的动态代理拦截目标对象</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Object</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> plugin</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> target) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Plugin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">wrap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(target, </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span></code></pre></div><h4 id="_2-1-3-setproperties-properties-properties" tabindex="-1"><a class="header-anchor" href="#_2-1-3-setproperties-properties-properties"><span>2.1.3 setProperties(Properties properties)</span></a></h4><p>传递插件的参数，可以通过参数来改变插件的行为</p><ul><li><p>如何配置参数：</p><p>我们在配置拦截器的时候，就需要配置</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">plugins</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">plugin</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> interceptor</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;com.github.pagehelper.PageInterceptor&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            &lt;!-- 支持通过Mapper接口参数来传递分页参数 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">property</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;helperDialect&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;mysql&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">property</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;supportMethodsArguments&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">property</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;rowBoundsWithCount&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">plugin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">plugins</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div></li></ul><h3 id="_2-2-拦截器签名" tabindex="-1"><a class="header-anchor" href="#_2-2-拦截器签名"><span>2.2 拦截器签名</span></a></h3><p><code>@Intercepts</code> 和 注解签名 <code>@Signature</code> 用来配置拦截器要拦截的接口的方法</p><p><code>@Intercepts</code> 注解中的属性是一个 <code>@Signature</code>签名数组，可以在同一个拦截器中同时拦截不同的接口和方法</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556819.png" alt="image-20211023111853954" tabindex="0" loading="lazy"><figcaption>image-20211023111853954</figcaption></figure><p><code>@Signature</code> 注解包含以下三个属性</p><ul><li><p>type: 配置拦截器的接口，可选值是</p><ul><li>Executor()</li><li>ParameterHandler()</li><li>ResultSetHandler()</li><li>StatementHandler()</li></ul></li><li><p>Method: 设置拦截器中的方法名，可选值是上面4个接口中对应的方法，需要和接口匹配</p><p>例如Executor 中能选query，update等</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556849.png" alt="image-20211023112540386" tabindex="0" loading="lazy"><figcaption>image-20211023112540386</figcaption></figure></li><li><p>args：设置拦截方法的参数类型数组，通过方法名和参数类型可以确定唯一一个方法</p></li></ul><h2 id="_3-pagehelper源码实现" tabindex="-1"><a class="header-anchor" href="#_3-pagehelper源码实现"><span>3. PageHelper源码实现</span></a></h2><h3 id="_3-1-拦截器与拦截器签名" tabindex="-1"><a class="header-anchor" href="#_3-1-拦截器与拦截器签名"><span>3.1 拦截器与拦截器签名</span></a></h3><p>这样我们就能拦截到sql 查询语句</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556881.png" alt="image-20211023164728249" tabindex="0" loading="lazy"><figcaption>image-20211023164728249</figcaption></figure><h3 id="_3-2-获取拦截参数" tabindex="-1"><a class="header-anchor" href="#_3-2-获取拦截参数"><span>3.2 获取拦截参数</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556919.png" alt="image-20211023164930142" tabindex="0" loading="lazy"><figcaption>image-20211023164930142</figcaption></figure><h3 id="_3-3-分页判断" tabindex="-1"><a class="header-anchor" href="#_3-3-分页判断"><span>3.3 分页判断</span></a></h3><ol><li>判断是否需要分页</li><li>判断是否需要进行count 查询 <ol><li>查询总数</li></ol></li><li>分页查询</li></ol><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556945.png" alt="image-20211023165357858" tabindex="0" loading="lazy"><figcaption>image-20211023165357858</figcaption></figure><h3 id="_3-4-计算总数" tabindex="-1"><a class="header-anchor" href="#_3-4-计算总数"><span>3.4 计算总数</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556971.png" alt="image-20211023165640099" tabindex="0" loading="lazy"><figcaption>image-20211023165640099</figcaption></figure><p>计算总数实现</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556005.png" alt="image-20211023165903830" tabindex="0" loading="lazy"><figcaption>image-20211023165903830</figcaption></figure><p>获取方言count sql</p><p>此时还贴心的去除了order by</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556042.png" alt="image-20211023170153258" tabindex="0" loading="lazy"><figcaption>image-20211023170153258</figcaption></figure><p>获取普通的Count-sql</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556073.png" alt="image-20211023170559536" tabindex="0" loading="lazy"><figcaption>image-20211023170559536</figcaption></figure><h3 id="_3-5-分页查询" tabindex="-1"><a class="header-anchor" href="#_3-5-分页查询"><span>3.5 分页查询</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556104.png" alt="image-20211023170703110" tabindex="0" loading="lazy"><figcaption>image-20211023170703110</figcaption></figure><ul><li>boundSql 包含了执行的sql 和对应的参数</li></ul><p>调用方言获取分页 sql</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556133.png" alt="image-20211023171056962" tabindex="0" loading="lazy"><figcaption>image-20211023171056962</figcaption></figure><ol><li><code>String sql = boundSql.getSql()</code> 方言sql</li><li>其中<code>Page page = this.getLocalPage();</code> 就是获得分页的参数</li><li>判断是否需要排序，添加orderby 语句</li></ol><p>获取分页的 getPageSql</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556163.png" alt="image-20211023171543077" tabindex="0" loading="lazy"><figcaption>image-20211023171543077</figcaption></figure><p>转换为分页语句</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556190.png" alt="image-20211023171621305" tabindex="0" loading="lazy"><figcaption>image-20211023171621305</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556217.png" alt="image-20211023171656921" tabindex="0" loading="lazy"><figcaption>image-20211023171656921</figcaption></figure><h3 id="_3-6-添加order-by-语句" tabindex="-1"><a class="header-anchor" href="#_3-6-添加order-by-语句"><span>3.6 添加order by 语句</span></a></h3><p>在做分页查询的时候校验了是否需要order by 语句</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556246.png" alt="image-20211023171330695" tabindex="0" loading="lazy"><figcaption>image-20211023171330695</figcaption></figure><p>添加order 语句</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556273.png" alt="image-20211023171410950" tabindex="0" loading="lazy"><figcaption>image-20211023171410950</figcaption></figure><h2 id="_4-dialect-方言接口" tabindex="-1"><a class="header-anchor" href="#_4-dialect-方言接口"><span>4. Dialect 方言接口</span></a></h2><p>Dialect 方言 包含了数据库支持的类型</p><p>我们可以看到几个关键节点上都调用了Dialect</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556301.png" alt="image-20211023173219075" tabindex="0" loading="lazy"><figcaption>image-20211023173219075</figcaption></figure><h3 id="_4-1-dialect-接口" tabindex="-1"><a class="header-anchor" href="#_4-1-dialect-接口"><span>4.1 dialect 接口</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556331.png" alt="image-20211023173328549" tabindex="0" loading="lazy"><figcaption>image-20211023173328549</figcaption></figure><h3 id="_4-2-dialect-实例" tabindex="-1"><a class="header-anchor" href="#_4-2-dialect-实例"><span>4.2 dialect 实例</span></a></h3><h4 id="_4-2-1-oracle-版本" tabindex="-1"><a class="header-anchor" href="#_4-2-1-oracle-版本"><span>4.2.1 oracle 版本</span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556363.png" alt="image-20211023173426394" tabindex="0" loading="lazy"><figcaption>image-20211023173426394</figcaption></figure><h4 id="_4-2-2-mysql版本" tabindex="-1"><a class="header-anchor" href="#_4-2-2-mysql版本"><span>4.2.2 mysql版本</span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556395.png" alt="image-20211023173527432" tabindex="0" loading="lazy"><figcaption>image-20211023173527432</figcaption></figure>`,70)]))}const o=e(n,[["render",r],["__file","mybatis-z-pageHelper-source.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/mybatis/mybatis-z-pageHelper-source.html","title":"Mybatis-PageHelper源码分析","lang":"zh-CN","frontmatter":{"description":"Mybatis-PageHelper源码分析 1. 背景 项目中分页是非常常见的需求，在项目中我们一般集成第三方的分页插件，避免在业务层嵌入过多业务代码。 分页插件，我们项目中是采用Mybatis-PageHelper ，作为一款轻量级的插件，源码应该不难，我们就来分析分析他的源码 2. 分页插件实现原理与基础 2.1 拦截器 Mybatis 提供了拦...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/mybatis/mybatis-z-pageHelper-source.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Mybatis-PageHelper源码分析"}],["meta",{"property":"og:description","content":"Mybatis-PageHelper源码分析 1. 背景 项目中分页是非常常见的需求，在项目中我们一般集成第三方的分页插件，避免在业务层嵌入过多业务代码。 分页插件，我们项目中是采用Mybatis-PageHelper ，作为一款轻量级的插件，源码应该不难，我们就来分析分析他的源码 2. 分页插件实现原理与基础 2.1 拦截器 Mybatis 提供了拦..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556777.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mybatis-PageHelper源码分析\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556777.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556819.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556849.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556881.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556919.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556945.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556971.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556005.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556042.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556073.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556104.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556133.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556163.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556190.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556217.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556246.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556273.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556301.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556331.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556363.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231556395.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 分页插件实现原理与基础","slug":"_2-分页插件实现原理与基础","link":"#_2-分页插件实现原理与基础","children":[{"level":3,"title":"2.1 拦截器","slug":"_2-1-拦截器","link":"#_2-1-拦截器","children":[]},{"level":3,"title":"2.2 拦截器签名","slug":"_2-2-拦截器签名","link":"#_2-2-拦截器签名","children":[]}]},{"level":2,"title":"3. PageHelper源码实现","slug":"_3-pagehelper源码实现","link":"#_3-pagehelper源码实现","children":[{"level":3,"title":"3.1 拦截器与拦截器签名","slug":"_3-1-拦截器与拦截器签名","link":"#_3-1-拦截器与拦截器签名","children":[]},{"level":3,"title":"3.2 获取拦截参数","slug":"_3-2-获取拦截参数","link":"#_3-2-获取拦截参数","children":[]},{"level":3,"title":"3.3 分页判断","slug":"_3-3-分页判断","link":"#_3-3-分页判断","children":[]},{"level":3,"title":"3.4 计算总数","slug":"_3-4-计算总数","link":"#_3-4-计算总数","children":[]},{"level":3,"title":"3.5 分页查询","slug":"_3-5-分页查询","link":"#_3-5-分页查询","children":[]},{"level":3,"title":"3.6 添加order by 语句","slug":"_3-6-添加order-by-语句","link":"#_3-6-添加order-by-语句","children":[]}]},{"level":2,"title":"4. Dialect 方言接口","slug":"_4-dialect-方言接口","link":"#_4-dialect-方言接口","children":[{"level":3,"title":"4.1 dialect 接口","slug":"_4-1-dialect-接口","link":"#_4-1-dialect-接口","children":[]},{"level":3,"title":"4.2 dialect 实例","slug":"_4-2-dialect-实例","link":"#_4-2-dialect-实例","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.35,"words":1006},"filePathRelative":"posts/Java/Java第三方依赖/mybatis/mybatis-z-pageHelper-source.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>项目中分页是非常常见的需求，在项目中我们一般集成第三方的分页插件，避免在业务层嵌入过多业务代码。</p>\\n<p>分页插件，我们项目中是采用<code>Mybatis-PageHelper </code>，作为一款轻量级的插件，源码应该不难，我们就来分析分析他的源码</p>\\n<h2>2. 分页插件实现原理与基础</h2>\\n<h3>2.1 拦截器</h3>\\n<p>Mybatis 提供了拦截器接口<code>Interceptor(org.apache.ibatis.plugin.Interceptor)</code>, 我们仅需要在实现类中对拦截对象和方法进行处理即可</p>","autoDesc":true}');export{o as comp,c as data};
