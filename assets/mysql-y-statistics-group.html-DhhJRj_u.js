import{_ as a,c as n,a as l,o as i}from"./app-CZJgH_ea.js";const r={};function p(e,s){return i(),n("div",null,s[0]||(s[0]=[l(`<h1 id="mysql按日、周、月进行分组统计" tabindex="-1"><a class="header-anchor" href="#mysql按日、周、月进行分组统计"><span>Mysql按日、周、月进行分组统计</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>我们在用Mysql抽取数据时候，经常需要按照天、周、月等不同的粒度对数据进行分组统计。而我们的时间可能是“2017/12/5 0:0:0”这种准确的时间。所以在进行分组之前我们需要对时间进行一下处理。</p><h2 id="_2-date-format" tabindex="-1"><a class="header-anchor" href="#_2-date-format"><span>2. DATE_FORMAT</span></a></h2><p><strong>DATE_FORMAT</strong>是MySQL内置的一个函数，作用是以不同的格式显示日期/时间数据。具体的语法如下：</p><p>DATE_FORMAT(date,format)，其中</p><p>date：合法的日期。format：规定日期/时间的输出格式，其中format可使用的格式见文末链接。</p><h3 id="_2-1-示例" tabindex="-1"><a class="header-anchor" href="#_2-1-示例"><span>2.1 示例</span></a></h3><p>下面我们通过具体例子来看如何通过DATE_FORMAT进行分组统计：</p><p>下表两列分别代表产品买出的准确时间（精确到秒），和买出的产品类型。</p><table><thead><tr><th>start_time</th><th>product_no</th></tr></thead><tbody><tr><td>2017/12/1 00:00:11</td><td>2A</td></tr><tr><td>2017/12/3 07:51:11</td><td>3C</td></tr><tr><td>2017/12/3 07:59:25</td><td>3C</td></tr><tr><td>2017/12/5 15:40:45</td><td>6C</td></tr></tbody></table><p>现在我们需要对每天，每周，每月各个产品的销量进行统计，</p><p>1）按天统计：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DATE_FORMAT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(start_time,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;**%Y%m%d**&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">days</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(product_no) count </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> test </span><span style="color:#C678DD;--shiki-dark:#C678DD;">group by</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> days</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>2）按周统计：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DATE_FORMAT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(start_time,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;**%Y%u**&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) weeks,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(product_no) count </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> test </span><span style="color:#C678DD;--shiki-dark:#C678DD;">group by</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> weeks;</span></span></code></pre></div><p>3）按月统计:</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> DATE_FORMAT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(start_time,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;**%Y%m**&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) months,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(product_no) count </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> test group bymonths;</span></span></code></pre></div><h3 id="_2-2-面临问题" tabindex="-1"><a class="header-anchor" href="#_2-2-面临问题"><span>2.2 面临问题</span></a></h3><p>如果有一天没有数据，则改直接直接为空白</p><blockquote><p>需求注：按照时间段来查询显示该时间段内每一天的数据量，如果某一天没有数据，显示数据量为0.</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130940201.png" alt="image-20210126170727871" tabindex="0" loading="lazy"><figcaption>image-20210126170727871</figcaption></figure><h2 id="_3-优化方案" tabindex="-1"><a class="header-anchor" href="#_3-优化方案"><span>3. 优化方案</span></a></h2><p>查询日期表，外连接数据表来显示<br> 网络上查询到生成日期表的方法有几种</p><ol><li>需要另建一张日期表，直接从此表查询（比较麻烦）</li><li>使用笛卡尔积生成时间（推荐）</li></ol><h3 id="_3-1-生成连续日期表" tabindex="-1"><a class="header-anchor" href="#_3-1-生成连续日期表"><span>3.1 生成连续日期表</span></a></h3><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> date_add(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;2020-04-01&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,interval </span><span style="color:#E06C75;--shiki-dark:#E06C75;">@i</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;">@i</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">+</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> day</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">as</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> date</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">union all</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> select</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">union all</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> select</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">union all</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> select</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">union all</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> select</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">union all</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> select</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">union all</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> select</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">union all</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> select</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">as</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tmp,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> @i</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> -</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) t</span></span></code></pre></div><p>结果如下</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130940245.png" alt="image-20210126171101910" tabindex="0" loading="lazy"><figcaption>image-20210126171101910</figcaption></figure><h3 id="_3-2-关联查询显示" tabindex="-1"><a class="header-anchor" href="#_3-2-关联查询显示"><span>3.2 关联查询显示</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>select count(u.id) as count,s.date from </span></span>
<span class="line"><span>(select date_add(&#39;2020-04-01&#39;,interval @i:=@i+1 day) as date </span></span>
<span class="line"><span>from (</span></span>
<span class="line"><span>select 1 </span></span>
<span class="line"><span>union all select 1 </span></span>
<span class="line"><span>union all select 1</span></span>
<span class="line"><span>union all select 1 </span></span>
<span class="line"><span>union all select 1 </span></span>
<span class="line"><span>union all select 1 </span></span>
<span class="line"><span>union all select 1 </span></span>
<span class="line"><span>union all select 1) as tmp,</span></span>
<span class="line"><span> (select @i:= -1) t</span></span>
<span class="line"><span>) s left join user u on s.date = date_format(u.createtime,&#39;%Y-%m-%d&#39;)</span></span>
<span class="line"><span>GROUP BY s.date</span></span></code></pre></div><h3 id="_3-3-如何控制生成多少个日期" tabindex="-1"><a class="header-anchor" href="#_3-3-如何控制生成多少个日期"><span>3.3 如何控制生成多少个日期</span></a></h3><p>现在还有一个问题，如何控制生成多少个日期，也就是<strong>union all select 1</strong> 的个数，</p><ol><li>使用存储过程（耦合性过高，不易维护，暂不考虑）</li><li>mybatis 循环拼接（√）</li></ol><p>选择了java代码计算日期差，使用mybatis的 <strong>foreach</strong> 标签实现sql拼接，全部代码如下</p><ul><li><p>service</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Object</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> queryByDate</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;">[] date) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> date1 </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> date[</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#E06C75;--shiki-dark:#E06C75;">]</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> date2 </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> date[</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">]</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> num </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> calcBetweenDate</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(date1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> date2)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        String</span><span style="color:#E06C75;--shiki-dark:#E06C75;">[] countArr </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#E06C75;--shiki-dark:#E06C75;">[num]</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> userMapper</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">queryByDate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(date1,countArr);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> calcBetweenDate</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> start</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> end) {  </span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        SimpleDateFormat</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> df </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> SimpleDateFormat</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;yyyy-MM-dd&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Date</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> startDate </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Date</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> endDate </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        try</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {  </span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            startDate </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> df</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">parse</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(start);</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            endDate </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> df</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">parse</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(end);</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Exception</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {  </span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;日期转换出错&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        }  </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> count </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) ((</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">endDate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getTime</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> -</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> startDate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getTime</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">/</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">24</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> *</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 60</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> *</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 60</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> *</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1000</span><span style="color:#E06C75;--shiki-dark:#E06C75;">))</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>mapper</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">List</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Map</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Object</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> queryByDate</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Param</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;date&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> date</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Param</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;countArr&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;">[] countArr)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div></li><li><p>xml</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">select</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;queryByDate&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> resultType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;java.util.HashMap&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	   select count(u.id) as count,s.date from </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		(select date_add(&#39;2020-04-01&#39;,interval @i:=@i+1 day) as date </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		from (</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		select 1 </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	   	&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">foreach</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> item</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;index&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> collection</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;countArr&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		  union all select 1 </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">foreach</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		) as tmp,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		 (select @i:= -1) t</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		) s left join user u on s.date = date_format(u.createtime,&#39;%Y-%m-%d&#39;)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		GROUP BY s.date</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/new_yao/article/details/105572684" target="_blank" rel="noopener noreferrer">mysql查询一个时间段每天数据数量，没有显示为0</a></p>`,38)]))}const t=a(r,[["render",p],["__file","mysql-y-statistics-group.html.vue"]]),k=JSON.parse('{"path":"/posts/Database/MySQL/mysql-y-statistics-group.html","title":"Mysql按日、周、月进行分组统计","lang":"zh-CN","frontmatter":{"aliases":"Mysql按日、周、月进行分组统计","tags":null,"cssclass":null,"source":null,"category":["数据库"],"created":"2024-02-22 10:49","updated":"2024-03-13 09:40","description":"Mysql按日、周、月进行分组统计 1. 背景 我们在用Mysql抽取数据时候，经常需要按照天、周、月等不同的粒度对数据进行分组统计。而我们的时间可能是“2017/12/5 0:0:0”这种准确的时间。所以在进行分组之前我们需要对时间进行一下处理。 2. DATE_FORMAT DATE_FORMAT是MySQL内置的一个函数，作用是以不同的格式显示日...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MySQL/mysql-y-statistics-group.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Mysql按日、周、月进行分组统计"}],["meta",{"property":"og:description","content":"Mysql按日、周、月进行分组统计 1. 背景 我们在用Mysql抽取数据时候，经常需要按照天、周、月等不同的粒度对数据进行分组统计。而我们的时间可能是“2017/12/5 0:0:0”这种准确的时间。所以在进行分组之前我们需要对时间进行一下处理。 2. DATE_FORMAT DATE_FORMAT是MySQL内置的一个函数，作用是以不同的格式显示日..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130940201.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mysql按日、周、月进行分组统计\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130940201.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130940245.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. DATE_FORMAT","slug":"_2-date-format","link":"#_2-date-format","children":[{"level":3,"title":"2.1 示例","slug":"_2-1-示例","link":"#_2-1-示例","children":[]},{"level":3,"title":"2.2 面临问题","slug":"_2-2-面临问题","link":"#_2-2-面临问题","children":[]}]},{"level":2,"title":"3. 优化方案","slug":"_3-优化方案","link":"#_3-优化方案","children":[{"level":3,"title":"3.1 生成连续日期表","slug":"_3-1-生成连续日期表","link":"#_3-1-生成连续日期表","children":[]},{"level":3,"title":"3.2 关联查询显示","slug":"_3-2-关联查询显示","link":"#_3-2-关联查询显示","children":[]},{"level":3,"title":"3.3 如何控制生成多少个日期","slug":"_3-3-如何控制生成多少个日期","link":"#_3-3-如何控制生成多少个日期","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.06,"words":919},"filePathRelative":"posts/Database/MySQL/mysql-y-statistics-group.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>我们在用Mysql抽取数据时候，经常需要按照天、周、月等不同的粒度对数据进行分组统计。而我们的时间可能是“2017/12/5 0:0:0”这种准确的时间。所以在进行分组之前我们需要对时间进行一下处理。</p>\\n<h2>2. DATE_FORMAT</h2>\\n<p><strong>DATE_FORMAT</strong>是MySQL内置的一个函数，作用是以不同的格式显示日期/时间数据。具体的语法如下：</p>\\n<p>DATE_FORMAT(date,format)，其中</p>\\n<p>date：合法的日期。format：规定日期/时间的输出格式，其中format可使用的格式见文末链接。</p>","autoDesc":true}');export{t as comp,k as data};
