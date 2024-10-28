import{_ as a,c as i,a as n,o as l}from"./app-W9QyTiMU.js";const r={};function e(o,s){return l(),i("div",null,s[0]||(s[0]=[n(`<h1 id="hibernate的四种查询方式" tabindex="-1"><a class="header-anchor" href="#hibernate的四种查询方式"><span>Hibernate的四种查询方式</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1.简介</span></a></h2><ol><li>主键查询</li><li>HQL查询</li><li>QBC查询</li><li>本地SQL查询</li></ol><h2 id="_2-主键查询" tabindex="-1"><a class="header-anchor" href="#_2-主键查询"><span>2. 主键查询</span></a></h2><p>通过主键来查询数据库的记录，从而返回一个JavaBean对象</p><ul><li><strong>session.get(javaBean.class, int id); 【传入对应的class和id就可以查询】</strong></li><li><strong>session.load(javaBean.class, int id); 【支持懒加载】</strong></li></ul><p>示例：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>       User user1 = (User) session.get(User.class, 1);</span></span>
<span class="line"><span>        System.out.println(user1);</span></span></code></pre></div><h2 id="_3-hql查询" tabindex="-1"><a class="header-anchor" href="#_3-hql查询"><span>3. HQL查询</span></a></h2><p>HQL:hibernate query language 即hibernate提供的面向对象的查询语言</p><ul><li><p>优点：可读性好，功能强大效率高。</p></li><li><p>缺点：由于是字符串形式，只有在运行时才被解析，故扩展性差。</p></li></ul><h3 id="_3-1-hql简单示例" tabindex="-1"><a class="header-anchor" href="#_3-1-hql简单示例"><span>3.1 HQL简单示例</span></a></h3><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Query</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> query </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> session</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">createQuery</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;FROM User WHERE id=?&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //这里的？号是从0开始的，并不像JDBC从1开始的！</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        query</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setParameter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">user</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        List</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> list </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> query</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">list</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(list);</span></span></code></pre></div><h3 id="_3-2-hql详细操作" tabindex="-1"><a class="header-anchor" href="#_3-2-hql详细操作"><span>3.2 HQL详细操作</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//1.书写HQL语句：</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    基本查询：</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> hql </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;对象的完整类名&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //查询所有的对象</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    条件查询：</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> hql </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;from 对象名 where 属性名=***&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		     String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> hql </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;select ** from 对象名 where 属性名=***&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		     String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> hql </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;from 对象名 where 属性名=*** order by ** desc/asc&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //排序</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		     String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> hql </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;select count(*) from 对象名 where 属性名=***&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //聚合函数</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">              //其他聚合函数：sum(列名) avg(列名) max(列名) min(列名)</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    投影查询：</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> hql </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;select new 对象名(参数) from 对象名 &quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    多表查询：普通内连接：</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> hql </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;from 对象名1 别名 inner join 别名.对象名2&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            迫切内连接：</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> hql </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;from 对象名1 别名 inner join fetch 别名.对象名2&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            左外连接：</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> hql </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;from 对象名1 别名 left  join 别名.对象名2&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            右外连接：</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> hql </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;from 对象名1 别名 right join 别名.对象名2&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    ?</span><span style="color:#E06C75;--shiki-dark:#E06C75;">号占位符：</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> hql </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;from 对象名 where 属性名=?&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    :</span><span style="color:#E06C75;--shiki-dark:#E06C75;">号占位符：</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> hql </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;from 对象名 where 属性名=:***&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  //***为该&quot;:&quot;的名称</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//2.创建查询对象</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    Quert</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> query </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> session</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">createQuery</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(hql);</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//3.设置查询参数</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    query</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setLong</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1l</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //?参数类型为Long</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    query</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setParameter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(索引号,参数数据);</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  //?参数类型为任意</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    query</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setParameter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;:的名称&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,参数数据);</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    query</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setFirstResult</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //分页：开始查询的页数</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    query</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setMaxResults</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  //分页：每页显示多少条数据</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//4.查询并获取结果</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    query</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">list</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //返回List&lt;Object[]&gt;   List&lt;对象名&gt;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    query</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">uniqueResult</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //唯一查询结果</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-qbc查询" tabindex="-1"><a class="header-anchor" href="#_4-qbc查询"><span>4. QBC查询</span></a></h2><p><strong>QBC查询: query by criteria 完全面向对象的查询</strong></p><ul><li><p>QBC优点：提供面向对象的接口，编译时即可被解析，便于调试，扩展性好，允许用户扩展Criteria接口。</p></li><li><p>QBC缺点：可读性差；不支持报表查询和子查询。</p></li></ul><h3 id="_4-1-qbc简单示例" tabindex="-1"><a class="header-anchor" href="#_4-1-qbc简单示例"><span>4.1 QBC简单示例</span></a></h3><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //创建关于user对象的criteria对象</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Criteria</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> criteria </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> session</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">createCriteria</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">User</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //添加条件</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        criteria</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">add</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Restrictions</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">eq</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;id&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //查询全部数据</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        List</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> list </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> criteria</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">list</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(list);</span></span></code></pre></div><h3 id="_4-2-qbc-详细操作" tabindex="-1"><a class="header-anchor" href="#_4-2-qbc-详细操作"><span>4.2 QBC 详细操作</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//1.创建查询对象    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //创建Criteria查询对象</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    Criteria</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">session</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">createCriteria</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">**</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //查询所有的**对象。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //创建离线Criteria对象</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    DetachedCriteria</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> dc </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> DetachedCriteria</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">forClass</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">**</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    Criteria</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> dc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getExecutableCriteria</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(session);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//2.添加查询参数</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">add</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Restrictions</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">eq</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;属性名&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,属性值));</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //除了eq(==)，还有下面这些：</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //（&gt;,gt） （&gt;=,ge） （&lt;,lt） （&lt;=,le）（!=,ne） （between and,between）（is null,isNull）</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //（Nullis not null,isNotNull）还有几个一样的：in、like、or、and</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setFirstResult</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  //分页信息</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setMaxResults</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  //分页信息</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setProjection</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Projections</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rowCount</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //聚合函数，此处为查询总行数</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">addOrder</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Order</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">desc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;属性名&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">));</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  //排序。desc(降序)、asc(升序)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//3.查询并获取结果</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">list</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  //方式一</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    对象 </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">*</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (强转</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">*</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">uniqueResult</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //方式二</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">泛型</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> list </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">List</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">泛型</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getHibernateTemplate</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">findByCriteria</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(dc);</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //方式三</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-本地sql查询-复杂的业务查询" tabindex="-1"><a class="header-anchor" href="#_5-本地sql查询-复杂的业务查询"><span>5. 本地SQL查询 **(**复杂的业务查询)</span></a></h2><ul><li>适合场景：复杂的业务查询</li><li>缺点：无法跨平台</li></ul><h3 id="_5-1-原生sql简单实用" tabindex="-1"><a class="header-anchor" href="#_5-1-原生sql简单实用"><span>5.1 原生SQL简单实用</span></a></h3><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //将所有的记录封装成User对象存进List集合中</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        SQLQuery</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> sqlQuery </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> session</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">createSQLQuery</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;SELECT * FROM user&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">addEntity</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">User</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        List</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> list </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> sqlQuery</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">list</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(list);</span></span></code></pre></div><h3 id="_5-2-原生sql详细操作" tabindex="-1"><a class="header-anchor" href="#_5-2-原生sql详细操作"><span>5.2 原生SQL详细操作</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>//1.书写sql语句</span></span>
<span class="line"><span>    String sql = &quot;……limit ?,?&quot;;</span></span>
<span class="line"><span>//2.创建sql查询对象</span></span>
<span class="line"><span>    SQLQuery query = session.createSQLQuery(sql);</span></span>
<span class="line"><span>//3.设置查询参数</span></span>
<span class="line"><span>    query.addEntity(**.class); //指定结果集封装到某对象中</span></span>
<span class="line"><span>    query.setParameter(0,索引0的数据); //?参数</span></span>
<span class="line"><span>//4.查询并获取结果</span></span>
<span class="line"><span>    List&lt;类名&gt; list = query.list(); //设置步骤3</span></span>
<span class="line"><span>    List&lt;Object[]&gt; list = query.list(); //未设置步骤3</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.yuque.com/yiwang/java/sbvuni" target="_blank" rel="noopener noreferrer"><strong>Hibernate</strong></a></p><p><a href="https://cloud.tencent.com/developer/article/1010155" target="_blank" rel="noopener noreferrer">Hibernate的四种查询方式（主键查询，HQL查询，Criteria</a></p>`,31)]))}const p=a(r,[["render",e],["__file","hibernate-x-query.html.vue"]]),B=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/hibernate/hibernate-x-query.html","title":"Hibernate的四种查询方式","lang":"zh-CN","frontmatter":{"description":"Hibernate的四种查询方式 1.简介 主键查询 HQL查询 QBC查询 本地SQL查询 2. 主键查询 通过主键来查询数据库的记录，从而返回一个JavaBean对象 session.get(javaBean.class, int id); 【传入对应的class和id就可以查询】 session.load(javaBean.class, int ...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/hibernate/hibernate-x-query.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Hibernate的四种查询方式"}],["meta",{"property":"og:description","content":"Hibernate的四种查询方式 1.简介 主键查询 HQL查询 QBC查询 本地SQL查询 2. 主键查询 通过主键来查询数据库的记录，从而返回一个JavaBean对象 session.get(javaBean.class, int id); 【传入对应的class和id就可以查询】 session.load(javaBean.class, int ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hibernate的四种查询方式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1.简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 主键查询","slug":"_2-主键查询","link":"#_2-主键查询","children":[]},{"level":2,"title":"3. HQL查询","slug":"_3-hql查询","link":"#_3-hql查询","children":[{"level":3,"title":"3.1 HQL简单示例","slug":"_3-1-hql简单示例","link":"#_3-1-hql简单示例","children":[]},{"level":3,"title":"3.2 HQL详细操作","slug":"_3-2-hql详细操作","link":"#_3-2-hql详细操作","children":[]}]},{"level":2,"title":"4. QBC查询","slug":"_4-qbc查询","link":"#_4-qbc查询","children":[{"level":3,"title":"4.1 QBC简单示例","slug":"_4-1-qbc简单示例","link":"#_4-1-qbc简单示例","children":[]},{"level":3,"title":"4.2 QBC 详细操作","slug":"_4-2-qbc-详细操作","link":"#_4-2-qbc-详细操作","children":[]}]},{"level":2,"title":"5. 本地SQL查询 **(**复杂的业务查询)","slug":"_5-本地sql查询-复杂的业务查询","link":"#_5-本地sql查询-复杂的业务查询","children":[{"level":3,"title":"5.1 原生SQL简单实用","slug":"_5-1-原生sql简单实用","link":"#_5-1-原生sql简单实用","children":[]},{"level":3,"title":"5.2 原生SQL详细操作","slug":"_5-2-原生sql详细操作","link":"#_5-2-原生sql详细操作","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.48,"words":1045},"filePathRelative":"posts/Java/Java第三方依赖/hibernate/hibernate-x-query.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1.简介</h2>\\n<ol>\\n<li>主键查询</li>\\n<li>HQL查询</li>\\n<li>QBC查询</li>\\n<li>本地SQL查询</li>\\n</ol>\\n<h2>2. 主键查询</h2>\\n<p>通过主键来查询数据库的记录，从而返回一个JavaBean对象</p>\\n<ul>\\n<li><strong>session.get(javaBean.class, int id); 【传入对应的class和id就可以查询】</strong></li>\\n<li><strong>session.load(javaBean.class, int id); 【支持懒加载】</strong></li>\\n</ul>","autoDesc":true}');export{p as comp,B as data};
