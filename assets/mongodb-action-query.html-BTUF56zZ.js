import{_ as a,c as n,a as i,o as l}from"./app-DEK5G3U7.js";const o={};function r(e,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="spring-data-mongodb的query查询" tabindex="-1"><a class="header-anchor" href="#spring-data-mongodb的query查询"><span>spring-data-mongodb的Query查询</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>spring-data-mongodb 的查询方法定义的两种方式</p><ol><li>根据方法名来自动推测</li><li>自定义查询（复杂场景）</li></ol><h2 id="_2-query注解" tabindex="-1"><a class="header-anchor" href="#_2-query注解"><span>2. @Query注解</span></a></h2><h3 id="_2-1-基础查询" tabindex="-1"><a class="header-anchor" href="#_2-1-基础查询"><span>2.1 基础查询</span></a></h3><p>Mongodb使用的是基于json的查询语句。</p><p>通过将org.springframework.data.mongodb.repository.Query批注添加到存储库查询方法，可以指定要使用的MongoDB JSON查询字符串，而不是从方法名称派生查询，如以下示例所示：</p><div class="language-kotlin" data-ext="kotlin" data-title="kotlin"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> interface</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> PersonRepository</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> extends MongoRepository</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">Person, String</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">  @Query</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;{ &#39;firstname&#39; : ?0 }&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  List</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">Person</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> findByThePersonsFirstname</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(String firstname);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p><strong>占位符 ?0 是函数的参数。</strong></p><blockquote><p>注意： String类型的参数在绑定过程中会进行转义， 这意味着不能为之添加特殊的参数。</p></blockquote><h3 id="_2-2-设置返回的字段" tabindex="-1"><a class="header-anchor" href="#_2-2-设置返回的字段"><span>2.2 设置返回的字段</span></a></h3><p>使用fields来设置返回的字段：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Query</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">value</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;{ &#39;firstname&#39; : ?0 }&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> fields</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;{ &#39;firstname&#39; : 1, &#39;lastname&#39; : 1}&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">  List</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Person</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> findByThePersonsFirstname</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> firstname)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>上例中结果Person对象中只会有firstname、lastname 和id 属性 ， 其他属性没有 。</p><h3 id="_2-3-spel表达式" tabindex="-1"><a class="header-anchor" href="#_2-3-spel表达式"><span>2.3 SpEL表达式</span></a></h3><p>在基于json的查询中使用SpEL表达式</p><p>查询串和field返回定义可以使用SpEL表达式 在运行时进行动态创建 。<br> 表达式通过包含所有参数的数组公开方法参数。 以下查询使用[0]声明lastname的谓词值（相当于?0参数绑定）：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> interface</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> PersonRepository</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> extends</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> MongoRepository</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Person</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Query</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;lastname&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> ?</span><span style="color:#E06C75;--shiki-dark:#E06C75;">#{[</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#E06C75;--shiki-dark:#E06C75;">]} </span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;)</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  List&lt;Person&gt; findByQueryWithExpression(String param0);</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">}</span></span></code></pre></div><h3 id="_2-4-参数为对象" tabindex="-1"><a class="header-anchor" href="#_2-4-参数为对象"><span>2.4 参数为对象</span></a></h3><p>当传入参数为对象时， 实例：</p><div class="language-csharp" data-ext="csharp" data-title="csharp"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    @Query</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">value</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;{&#39;name&#39;: ?#{ [0].name }}&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Page</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RcControllJournalDo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">querylikepages</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RcControllJournalDo</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> mdo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Pageable</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> pageable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><p>上例等价于 where name = <a href="http://mdo.name" target="_blank" rel="noopener noreferrer">mdo.name</a> .</p><h3 id="_2-5-三目表达式" tabindex="-1"><a class="header-anchor" href="#_2-5-三目表达式"><span>2.5 三目表达式</span></a></h3><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 当mdo.name为空时， 查询条件为  { &quot;name&quot; : { &quot;$exists&quot; : true } } ，即查询所有name列存在的记录（包括值为null的记录，但是对于没有name列的查询不到） ；</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 当mdo.name不空时，查询条件为   { &quot;name&quot; : [0].name }</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Query</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">value</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot; { &#39;name&#39;: ?#{ ([0].name == null) or ([0].name.length() == 0)  ? &#39;{$exists:true}&#39; : [0].name } } &quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Page</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">RcControllJournalDo</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> querylikepages2</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RcControllJournalDo</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> mdo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Pageable</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> pageable)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p><code>#{ ([0].name == null) or ([0].name.length() == 0) ? &#39;{$exists:true}&#39; : [0].name }</code> 为SpEL表达式 （三目表达式）。</p><h3 id="_2-6-模糊查询例子" tabindex="-1"><a class="header-anchor" href="#_2-6-模糊查询例子"><span>2.6 模糊查询例子：</span></a></h3><div class="language-kotlin" data-ext="kotlin" data-title="kotlin"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 使用正则表达式模糊查询 </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    @Query</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">value</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot; { &#39;idno&#39;: ?#{ ([0].name == null) or ([0].name.length() == 0)  ? {</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$exists</span><span style="color:#98C379;--shiki-dark:#98C379;">:true} : {</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$regex</span><span style="color:#98C379;--shiki-dark:#98C379;">: [0].name } } } &quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> Page</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">RcControllJournalDo</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> querylikepages21</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(RcControllJournalDo mdo, Pageable pageable);</span></span></code></pre></div><p>mongodb的正则表达式查询语法为：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#C678DD;--shiki-dark:#C678DD;">db</span><span style="color:#D19A66;--shiki-dark:#D19A66;">.posts</span><span style="color:#C678DD;--shiki-dark:#C678DD;">.find(</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{post_text:{$regex:</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;runoob&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}})</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#C678DD;--shiki-dark:#C678DD;">db</span><span style="color:#D19A66;--shiki-dark:#D19A66;">.posts</span><span style="color:#C678DD;--shiki-dark:#C678DD;">.find(</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{post_text:{$regex:</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;runoob&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,$options:</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;$i&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}})</span></span></code></pre></div><p>例子：<br> 根据前端上送的查询条件模糊匹配name 和idno ， 当有值时查询之，无则查询所有：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 模糊查询name 和 idno  &lt;br&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 1. mongodb or语法  ：{ $or :[{}, {},...] }  例子： {$or:[{&quot;by&quot;:&quot;aaa&quot;} , {&quot;title&quot;: &quot;bbb&quot;}]}  ， 即 where by=aaa or title=bbb &lt;BR&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 2. { $or :[{&#39;name&#39; : ?#{}}, {&#39;idno&#39; : ?#{}}] }  &lt;br&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Query</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">value</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot; { $or :[{&#39;name&#39; : ?#{ ([0].name == null) or ([0].name.length() == 0)  ? &#39;{$exists:true}&#39; :  {$regex:[0].name} }},&quot;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">            +</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot; {&#39;idno&#39; : ?#{ ([0].idno == null) or ([0].idno.length() == 0)  ? &#39;{$exists:true}&#39; : {$regex: [0].idno} }}] } &quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Page</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">RcControllJournalDo</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> querylikepages3</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RcControllJournalDo</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> mdo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Pageable</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> pageable)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>输入参数：<br> mdo.setName(&quot;宋&quot;);<br> mdo.setIdno(&quot;112&quot;);<br> 打印的日志为：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>find using query: { &quot;$or&quot; : [{ &quot;name&quot; : { &quot;$regex&quot; : &quot;宋&quot; } }, { &quot;idno&quot; : { &quot;$regex&quot; : &quot;112&quot; } }] }</span></span></code></pre></div><h2 id="_3-自定义查询-复杂场景" tabindex="-1"><a class="header-anchor" href="#_3-自定义查询-复杂场景"><span>3. 自定义查询（复杂场景）</span></a></h2><ol><li>创建接口</li><li>创建实现类 （命名与接口名一致，且以Impl结尾）</li><li>在实现类中实现方法， 可以使用MongoTemplate 或 其他数据源的模板</li><li>直接使用repo调用即可。</li></ol><p>下面着重介绍使用Query 、Criteria 来创建查询条件 并使用分页：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Page</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">RcControllJournalDo</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> selectSearchNameIdno</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RcControllJournalDo</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> mdo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Pageable</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> pageable) {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        </span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Query</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> query </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Query</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        </span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        logger</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">debug</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;开始搜风控流水，使用姓名和身份证号模糊匹配：&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> mdo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getName</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() );</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">StringUtils</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">isNotBlank</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">mdo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getName</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">())</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> StringUtils</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">isNotBlank</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">mdo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getIdno</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">())</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            query</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">addCriteria</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Criteria</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">orOperator</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Criteria</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;name&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">regex</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">mdo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getName</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()), </span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    Criteria</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;idno&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">regex</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">mdo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getIdno</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">())));</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 分页 和 排序 </span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        query</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">with</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(pageable);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        query</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">with</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Sort</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Direction</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">DESC</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;dateTm&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> totoal </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">mongoTemplate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(query, </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RcControllJournalDo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        </span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        logger</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">debug</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;查询统计总条数 :&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> totoal);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        logger</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">debug</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;分页参数：&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> pageable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getPageNumber</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;;&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> pageable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getPageSize</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        </span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RcControllJournalDo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> res </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">mongoTemplate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">find</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(query , </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RcControllJournalDo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        </span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        logger</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">debug</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;查询结束：&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> res</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">size</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> PageImpl</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RcControllJournalDo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(res</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> pageable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> totoal)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺点是， 总条数需要主动查询 。<br> query内部会根据上送的分页条件，综合使用skip 、limit 来实现分页效果。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.jianshu.com/p/24a44c4c7651" target="_blank" rel="noopener noreferrer">spring data mongodb Query 及分页</a></p>`,41)]))}const t=a(o,[["render",r],["__file","mongodb-action-query.html.vue"]]),B=JSON.parse(`{"path":"/posts/Database/MongoDB/mongodb-action-query.html","title":"spring-data-mongodb的Query查询","lang":"zh-CN","frontmatter":{"aliases":"spring-data-mongodb的Query查询","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 08:34","description":"spring-data-mongodb的Query查询 1. 简介 spring-data-mongodb 的查询方法定义的两种方式 根据方法名来自动推测 自定义查询（复杂场景） 2. @Query注解 2.1 基础查询 Mongodb使用的是基于json的查询语句。 通过将org.springframework.data.mongodb.reposi...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/MongoDB/mongodb-action-query.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"spring-data-mongodb的Query查询"}],["meta",{"property":"og:description","content":"spring-data-mongodb的Query查询 1. 简介 spring-data-mongodb 的查询方法定义的两种方式 根据方法名来自动推测 自定义查询（复杂场景） 2. @Query注解 2.1 基础查询 Mongodb使用的是基于json的查询语句。 通过将org.springframework.data.mongodb.reposi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"spring-data-mongodb的Query查询\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. @Query注解","slug":"_2-query注解","link":"#_2-query注解","children":[{"level":3,"title":"2.1 基础查询","slug":"_2-1-基础查询","link":"#_2-1-基础查询","children":[]},{"level":3,"title":"2.2 设置返回的字段","slug":"_2-2-设置返回的字段","link":"#_2-2-设置返回的字段","children":[]},{"level":3,"title":"2.3 SpEL表达式","slug":"_2-3-spel表达式","link":"#_2-3-spel表达式","children":[]},{"level":3,"title":"2.4 参数为对象","slug":"_2-4-参数为对象","link":"#_2-4-参数为对象","children":[]},{"level":3,"title":"2.5 三目表达式","slug":"_2-5-三目表达式","link":"#_2-5-三目表达式","children":[]},{"level":3,"title":"2.6 模糊查询例子：","slug":"_2-6-模糊查询例子","link":"#_2-6-模糊查询例子","children":[]}]},{"level":2,"title":"3. 自定义查询（复杂场景）","slug":"_3-自定义查询-复杂场景","link":"#_3-自定义查询-复杂场景","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.2,"words":959},"filePathRelative":"posts/Database/MongoDB/mongodb-action-query.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>spring-data-mongodb 的查询方法定义的两种方式</p>\\n<ol>\\n<li>根据方法名来自动推测</li>\\n<li>自定义查询（复杂场景）</li>\\n</ol>\\n<h2>2. @Query注解</h2>\\n<h3>2.1 基础查询</h3>\\n<p>Mongodb使用的是基于json的查询语句。</p>\\n<p>通过将org.springframework.data.mongodb.repository.Query批注添加到存储库查询方法，可以指定要使用的MongoDB JSON查询字符串，而不是从方法名称派生查询，如以下示例所示：</p>\\n<div class=\\"language-kotlin\\" data-ext=\\"kotlin\\" data-title=\\"kotlin\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">public</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> interface</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> PersonRepository</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> extends MongoRepository</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">Person, String</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&gt;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">  @Query</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"{ 'firstname' : ?0 }\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  List</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">Person</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&gt;</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> findByThePersonsFirstname</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(String firstname);</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n</div>","autoDesc":true}`);export{t as comp,B as data};
