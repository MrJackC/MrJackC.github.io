import{_ as l,c as r,a as e,b as s,d as a,o as i}from"./app-JRvFIbSa.js";const o={};function p(t,n){return i(),r("div",null,n[0]||(n[0]=[e(`<h1 id="mybatis问题-mybatis是如何防止sql注入的" tabindex="-1"><a class="header-anchor" href="#mybatis问题-mybatis是如何防止sql注入的"><span>MyBatis问题 - Mybatis是如何防止SQL注入的</span></a></h1><h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1.引入</span></a></h2><p><strong>1、首先看一下下面两个sql语句的区别：</strong></p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> id</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;selectByNameAndPassword&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> parameterType</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;java.util.Map&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> resultMap</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;BaseResultMap&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> id, username, </span><span style="color:#C678DD;--shiki-dark:#C678DD;">password</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#C678DD;--shiki-dark:#C678DD;">role</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> username </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> #{username,jdbcType</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;">VARCHAR</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">and</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> password</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> #{</span><span style="color:#C678DD;--shiki-dark:#C678DD;">password</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,jdbcType</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;">VARCHAR</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/</span><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span></code></pre></div><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> id</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;selectByNameAndPassword&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> parameterType</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;java.util.Map&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> resultMap</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;BaseResultMap&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> id, username, </span><span style="color:#C678DD;--shiki-dark:#C678DD;">password</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#C678DD;--shiki-dark:#C678DD;">role</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> username </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> \${username,jdbcType</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;">VARCHAR</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">and</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> password</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> \${</span><span style="color:#C678DD;--shiki-dark:#C678DD;">password</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,jdbcType</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;">VARCHAR</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/</span><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span></code></pre></div><h3 id="_1-1-mybatis中的-和-的区别" tabindex="-1"><a class="header-anchor" href="#_1-1-mybatis中的-和-的区别"><span>1.1 <strong>mybatis中的#和$的区别：</strong></span></a></h3>`,6),s("ol",null,[s("li",null,[a("#将传入的数据都当成一个字符串,会对自动传入的数据加一个双引号。"),s("br"),a(' 如：where username=#{username},如果传入的值是111,那么解析成sql时的值为where username="111", 如果传入的值是id,则解析成的sql为where username="id".')]),s("li",null,[s("code",null,"$"),a("将传入的数据直接显示生成在sql中。"),s("br"),a(" 如：where username=${username},如果传入的值是111,那么解析成sql时的值为where username=111；"),s("br"),a(" 如果传入的值是：drop table user;,则解析成的sql为：select id, username, password, role from user where username=;drop table user;")]),s("li",null,[a("#方式能够很大程度防止sql注入,"),s("code",null,"$"),a("方式无法防止Sql注入。")]),s("li",null,[s("code",null,"$"),a("方式一般用于传入数据库对象,例如传入表名.")]),s("li",null,[a("一般能用#的就别用"),s("code",null,"$"),a(',若不得不使用"'),s("code",{xxx:""},"$"),a('"这样的参数,要手工地做好过滤工作,来防止sql注入攻击。')]),s("li",null,[a('在MyBatis中," '),s("code",{xxx:""},"$"),a('" 这样格式的参数会直接参与SQL编译,从而不能避免注入攻击。但涉及到动态表名和列名时,只能使用"'),s("code",{xxx:""},"$"),a('"这样的参数格式。所以,这样的参数需要我们在代码中手工进行处理来防止注入。')])],-1),s("blockquote",null,[s("p",null,[a('【结论】在编写MyBatis的映射语句时,尽量采用"#{xxx}"这样的格式。若不得不使用"'),s("code",{xxx:""},"$"),a('"这样的参数,要手工地做好过滤工作,来防止SQL注入攻击。')])],-1),e(`<h2 id="_2-什么是sql注入" tabindex="-1"><a class="header-anchor" href="#_2-什么是sql注入"><span>2. 什么是sql注入</span></a></h2><blockquote><p>sql注入解释：是一种代码注入技术,用于攻击数据驱动的应用,恶意的SQL语句被插入到执行的实体字段中（例如,为了转储数据库内容给攻击者）</p></blockquote><p><strong>SQL注入</strong>,大家都不陌生,是一种常见的攻击方式。<strong>攻击者</strong>在界面的表单信息或URL上输入一些奇怪的SQL片段（例如&quot;or ‘1’=’1’&quot;这样的语句）,有可能入侵<strong>参数检验不足</strong>的应用程序。所以,在我们的应用中需要做一些工作,来防备这样的攻击方式。在一些安全性要求很高的应用中（比如银行软件）,经常使用将<strong>SQL语句</strong>全部替换为<strong>存储过程</strong>这样的方式,来防止SQL注入。这当然是<strong>一种很安全的方式</strong>,但我们平时开发中,可能不需要这种死板的方式。</p><h2 id="_3-mybatis是如何做到防止sql注入的" tabindex="-1"><a class="header-anchor" href="#_3-mybatis是如何做到防止sql注入的"><span>3. mybatis是如何做到防止sql注入的</span></a></h2><p>MyBatis框架作为一款半自动化的持久层框架,其SQL语句都要我们自己手动编写,这个时候当然需要防止SQL注入。其实,MyBatis的SQL是一个具有&quot;<strong>输入+输出</strong>&quot;的功能,类似于函数的结构,参考上面的两个例子。其中,parameterType表示了输入的参数类型,resultType表示了输出的参数类型。回应上文,如果我们想防止SQL注入,理所当然地要在输入参数上下功夫。上面代码中使用#的即输入参数在SQL中拼接的部分,传入参数后,打印出执行的SQL语句,会看到SQL是这样的：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> id, username, </span><span style="color:#C678DD;--shiki-dark:#C678DD;">password</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#C678DD;--shiki-dark:#C678DD;">role</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> username</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">? </span><span style="color:#C678DD;--shiki-dark:#C678DD;">and</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> password</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">?</span></span></code></pre></div><p>不管输入什么参数,打印出的SQL都是这样的。这是因为MyBatis启用了预编译功能,在SQL执行前,会先将上面的SQL发送给数据库进行编译；执行时,直接使用编译好的SQL,替换占位符&quot;?&quot;就可以了。因为SQL注入只能对编译过程起作用,所以这样的方式就很好地避免了SQL注入的问题。</p><h3 id="_3-1-底层实现原理" tabindex="-1"><a class="header-anchor" href="#_3-1-底层实现原理"><span>3.1 底层实现原理</span></a></h3><p>MyBatis是如何做到SQL预编译的呢？其实在框架底层,是JDBC中的PreparedStatement类在起作用,PreparedStatement是我们很熟悉的Statement的子类,它的对象包含了编译好的SQL语句。这种&quot;准备好&quot;的方式不仅能提高安全性,而且在多次执行同一个SQL时,能够提高效率。原因是SQL已编译好,再次执行时无需再编译。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//安全的,预编译了的</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Connection</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> conn </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getConn</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//获得连接</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> sql </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;select id, username, password, role from user where id=?&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //执行sql前会预编译号该条语句</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">PreparedStatement</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> pstmt </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> conn</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">prepareStatement</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(sql);</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">pstmt</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setString</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, id);</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ResultSet</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> rs</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">pstmt</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">executeUpdate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">......</span></span></code></pre></div><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//不安全的,没进行预编译</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getNameByUserId</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> userId) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    Connection</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> conn </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getConn</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//获得连接</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> sql </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;select id,username,password,role from user where id=&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //当id参数为&quot;3;drop table user;&quot;时,执行的sql语句如下:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //select id,username,password,role from user where id=3; drop table user;  </span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    PreparedStatement</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> pstmt </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">  conn</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">prepareStatement</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(sql);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    ResultSet</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> rs</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">pstmt</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">executeUpdate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    ......</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><h3 id="_3-2-结论" tabindex="-1"><a class="header-anchor" href="#_3-2-结论"><span>3.2 结论</span></a></h3><p>#{}：相当于JDBC中的PreparedStatement</p><p><code>$</code>{}：是输出变量的值</p><p>简单说,#{}是经过预编译的,是安全的； <code>$</code>{} 是未经过预编译的,仅仅是取变量的值,是非安全的,存在SQL注入。<br> 如果我们order by语句后用了<code>$</code>{},那么不做任何处理的时候是存在SQL注入危险的。你说怎么防止,那我只能悲惨的告诉你,你得手动处理过滤一下输入的内容。如判断一下输入的参数的长度是否正常（注入语句一般很长）,更精确的过滤则可以查询一下输入的参数是否在预期的参数集合中。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/39408398" target="_blank" rel="noopener noreferrer">mybatis是如何防止SQL注入的</a></p>`,17)]))}const k=l(o,[["render",p],["__file","mybatis-z-injection.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/mybatis/mybatis-z-injection.html","title":"MyBatis问题 - Mybatis是如何防止SQL注入的","lang":"zh-CN","frontmatter":{"order":510,"category":["MyBatis"],"description":"MyBatis问题 - Mybatis是如何防止SQL注入的 1.引入 1、首先看一下下面两个sql语句的区别： 1.1 mybatis中的#和$的区别： #将传入的数据都当成一个字符串,会对自动传入的数据加一个双引号。 如：where username=#{username},如果传入的值是111,那么解析成sql时的值为where username...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/mybatis/mybatis-z-injection.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"MyBatis问题 - Mybatis是如何防止SQL注入的"}],["meta",{"property":"og:description","content":"MyBatis问题 - Mybatis是如何防止SQL注入的 1.引入 1、首先看一下下面两个sql语句的区别： 1.1 mybatis中的#和$的区别： #将传入的数据都当成一个字符串,会对自动传入的数据加一个双引号。 如：where username=#{username},如果传入的值是111,那么解析成sql时的值为where username..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MyBatis问题 - Mybatis是如何防止SQL注入的\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1.引入","slug":"_1-引入","link":"#_1-引入","children":[{"level":3,"title":"1.1 mybatis中的#和$的区别：","slug":"_1-1-mybatis中的-和-的区别","link":"#_1-1-mybatis中的-和-的区别","children":[]}]},{"level":2,"title":"2. 什么是sql注入","slug":"_2-什么是sql注入","link":"#_2-什么是sql注入","children":[]},{"level":2,"title":"3. mybatis是如何做到防止sql注入的","slug":"_3-mybatis是如何做到防止sql注入的","link":"#_3-mybatis是如何做到防止sql注入的","children":[{"level":3,"title":"3.1 底层实现原理","slug":"_3-1-底层实现原理","link":"#_3-1-底层实现原理","children":[]},{"level":3,"title":"3.2 结论","slug":"_3-2-结论","link":"#_3-2-结论","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.79,"words":1437},"filePathRelative":"posts/Java/Java第三方依赖/mybatis/mybatis-z-injection.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1.引入</h2>\\n<p><strong>1、首先看一下下面两个sql语句的区别：</strong></p>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> id</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"selectByNameAndPassword\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> parameterType</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"java.util.Map\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> resultMap</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"BaseResultMap\\"</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> id, username, </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">password</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">role</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> user</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">where</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> username </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> #{username,jdbcType</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">VARCHAR</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">and</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> password</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> #{</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">password</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,jdbcType</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">VARCHAR</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">/</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&gt;</span></span></code></pre>\\n</div>","autoDesc":true}');export{k as comp,c as data};
