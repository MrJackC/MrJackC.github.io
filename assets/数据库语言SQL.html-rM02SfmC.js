import{_ as e,c as i,a,o as n}from"./app-DQS7qcOs.js";const r={};function t(s,l){return n(),i("div",null,l[0]||(l[0]=[a(`<h1 id="数据库语言sql" tabindex="-1"><a class="header-anchor" href="#数据库语言sql"><span>数据库语言SQL</span></a></h1><h2 id="sql的发展" tabindex="-1"><a class="header-anchor" href="#sql的发展"><span>SQL的发展</span></a></h2><h3 id="_1974年-由boyce和chamberlin提出" tabindex="-1"><a class="header-anchor" href="#_1974年-由boyce和chamberlin提出"><span>1974年，由Boyce和Chamberlin提出</span></a></h3><h3 id="_1975-1979-ibm-san-jose-research-lab的关系数据库管理系统原型system-r实施了这种语言" tabindex="-1"><a class="header-anchor" href="#_1975-1979-ibm-san-jose-research-lab的关系数据库管理系统原型system-r实施了这种语言"><span>1975~1979，IBM San Jose Research Lab的关系数据库管理系统原型System R实施了这种语言</span></a></h3><h3 id="sql-86是第一个sql标准" tabindex="-1"><a class="header-anchor" href="#sql-86是第一个sql标准"><span>SQL-86是第一个SQL标准</span></a></h3><h3 id="sql-89、sql-92-sql2-、sql-99-sql3" tabindex="-1"><a class="header-anchor" href="#sql-89、sql-92-sql2-、sql-99-sql3"><span>SQL-89、SQL-92(SQL2)、SQL-99(SQL3)</span></a></h3><h2 id="非过程化语言" tabindex="-1"><a class="header-anchor" href="#非过程化语言"><span>非过程化语言</span></a></h2><h3 id="sql语言进行数据库操作时-只需要提出-做什么-不需要指明-怎么做-。-怎么做-是由dbms来完成" tabindex="-1"><a class="header-anchor" href="#sql语言进行数据库操作时-只需要提出-做什么-不需要指明-怎么做-。-怎么做-是由dbms来完成"><span>SQL语言进行数据库操作时，只需要提出“做什么”，不需要指明“怎么做”。“怎么做”是由DBMS来完成</span></a></h3><h2 id="sql的形式" tabindex="-1"><a class="header-anchor" href="#sql的形式"><span>SQL的形式</span></a></h2><h3 id="交互式sql" tabindex="-1"><a class="header-anchor" href="#交互式sql"><span>交互式SQL</span></a></h3><ul><li>一般DBMS都提供联机交互工具</li><li>用户可直接键入SQL命令对数据库进行操作</li><li>由DBMS来进行解释</li></ul><h3 id="嵌入式sql" tabindex="-1"><a class="header-anchor" href="#嵌入式sql"><span>嵌入式SQL</span></a></h3><ul><li>能将SQL语句嵌入到高级语言（宿主语言）</li><li>使应用程序充分利用SQL访问数据库的能力、宿主语言的过程处理能力</li><li>一般需要预编译，将嵌入的SQL语句转化为宿主语言编译器能处理的语句</li></ul><h2 id="sql语言主要组成部分" tabindex="-1"><a class="header-anchor" href="#sql语言主要组成部分"><span>SQL语言主要组成部分</span></a></h2><h3 id="数据定义语言-ddl-data-definition-language" tabindex="-1"><a class="header-anchor" href="#数据定义语言-ddl-data-definition-language"><span>数据定义语言（DDL，Data Definition Language）</span></a></h3><ul><li>数据定义语言是指用来定义和管理数据库以及数据库中的各种对象的语句，这些语句包括CREATE、ALTER和DROP等语句。在SQL Server中，数据库对象包括表、视图、触发器、存储过程、规则、缺省、用户自定义的数据类型等。这些对象的创建、修改和删除等都可以通过使用CREATE、ALTER、DROP等语句来完成。</li><li>常见的数据类型 <ul><li>字符型： <ul><li><pre><code> 定长字符型 char(n) 由于是定长，所以速度快
</code></pre></li><li><pre><code> 变长字符型 varchar(n)   
</code></pre></li></ul></li><li>数值型： <ul><li><pre><code> 整型 int(或integer)   -231~+231
</code></pre></li><li>短整型 smallint -215~+215的</li><li><pre><code> 浮点型 real、float、double
</code></pre></li><li><pre><code> 数值型 numeric (p [,d])
</code></pre></li></ul></li><li>日期／时间型： <ul><li><pre><code> DateTime
</code></pre></li></ul></li><li>文本和图像型 <ul><li>Text：存放大量文本数据。在SQLServer中，Text对象实际为一指针</li><li>Image：存放图形数据</li></ul></li></ul></li></ul><h3 id="数据操纵语言-dml-data-manipulation-language" tabindex="-1"><a class="header-anchor" href="#数据操纵语言-dml-data-manipulation-language"><span>数据操纵语言（DML，Data Manipulation Language）</span></a></h3><ul><li>数据操纵语言是指用来查询、添加、修改和删除数据库中数据的语句，这些语句包括SELECT、INSERT、UPDATE、DELETE等。在默认情况下，只有sysadmin、dbcreator、db_owner或db_datawriter等角色的成员才有权利执行数据操纵语言。</li></ul><h3 id="数据控制语言-dcl-data-control-language" tabindex="-1"><a class="header-anchor" href="#数据控制语言-dcl-data-control-language"><span>数据控制语言（DCL，Data Control Language）</span></a></h3><ul><li>数据控制语言（DCL）是用来设置或者更改数据库用户或角色权限的语句，这些语句包括GRANT、REVOKE 、DENY等语句，在默认状态下，只有sysadmin、dbcreator、db_owner或db_securityadmin等角色的成员才有权利执行数据控制语言。</li></ul><h2 id="sql语句" tabindex="-1"><a class="header-anchor" href="#sql语句"><span>SQL语句</span></a></h2><h3 id="建立表结构-create" tabindex="-1"><a class="header-anchor" href="#建立表结构-create"><span>建立表结构 Create</span></a></h3><ul><li>定义基本表的语句格式：</li><li>CREATE TABLE &lt;表名&gt;(&lt;列定义&gt;[{,&lt;列定义&gt;,&lt;表约束&gt;}])</li><li>表名：</li><li>列定义：列名、列数据类型、长度、是否允许空值等。</li><li>定义完整性约束：列约束和表约束</li><li>[CONSTRAINT&lt;约束名&gt;] &lt;约束定义&gt;</li></ul><h3 id="删除表结构-drop" tabindex="-1"><a class="header-anchor" href="#删除表结构-drop"><span>删除表结构 Drop</span></a></h3><ul><li>用SQL删除关系（表） <ul><li>将整个关系模式（表结构）彻底删除</li><li>表中的数据也将被删除</li></ul></li></ul><h3 id="修改表结构-alter" tabindex="-1"><a class="header-anchor" href="#修改表结构-alter"><span>修改表结构 Alter</span></a></h3><ul><li>增加表中的属性 <ul><li>向已经存在的表中添加属性</li><li>allow null （新添加的属性要允许为空）</li><li>已有的元组中该属性的值被置为Null</li></ul></li><li>修改表中的某属性(某列) <ul><li>修改属性类型或精度</li></ul></li><li>删除表中的某属性(某列) <ul><li>去除属性及相应的数据</li></ul></li></ul><h3 id="向表中添加数据-insert" tabindex="-1"><a class="header-anchor" href="#向表中添加数据-insert"><span>向表中添加数据(Insert)</span></a></h3><ul><li>数据添加 <ul><li>用SQL的插入语句，向数据库表中添加数据</li><li>按关系模式的属性顺序</li><li>按指定的属性顺序，也可以只添加部分属性（非Null属性为必需）</li></ul></li></ul><h3 id="数据删除-delete" tabindex="-1"><a class="header-anchor" href="#数据删除-delete"><span>数据删除（Delete）</span></a></h3><ul><li>只能对整个元组操作，不能只删除某些属性上的值</li><li>只能对一个关系起作用，若要从多个关系中删除元组，则必须对每个关系分别执行删除命令</li><li>删除单个元组</li><li>删除多个元组</li><li>删除整个关系中的所有数据</li></ul><h3 id="数据更新-update" tabindex="-1"><a class="header-anchor" href="#数据更新-update"><span>数据更新（Update）</span></a></h3><ul><li>改变符合条件的某个（某些）元组的属性值</li></ul><h2 id="视-图-view" tabindex="-1"><a class="header-anchor" href="#视-图-view"><span>视 图 (VIEW)</span></a></h2><h3 id="视图是从一个或者多个表或视图中导出的表-其结构和数据是建立在对表的查询基础上的。和真实的表一样-视图也包括几个被定义的数据列和多个数据行-但从本质上讲-这些数据列和数据行来源于其所引用的表。因此-视图不是真实存在的基础表而是一个虚拟表-视图所对应的数据并不实际地以视图结构存储在数据库中-而是存储在视图所引用的表中。" tabindex="-1"><a class="header-anchor" href="#视图是从一个或者多个表或视图中导出的表-其结构和数据是建立在对表的查询基础上的。和真实的表一样-视图也包括几个被定义的数据列和多个数据行-但从本质上讲-这些数据列和数据行来源于其所引用的表。因此-视图不是真实存在的基础表而是一个虚拟表-视图所对应的数据并不实际地以视图结构存储在数据库中-而是存储在视图所引用的表中。"><span>视图是从一个或者多个表或视图中导出的表，其结构和数据是建立在对表的查询基础上的。和真实的表一样，视图也包括几个被定义的数据列和多个数据行，但从本质上讲，这些数据列和数据行来源于其所引用的表。因此，视图不是真实存在的基础表而是一个虚拟表，视图所对应的数据并不实际地以视图结构存储在数据库中，而是存储在视图所引用的表中。</span></a></h3><h3 id="创建视图" tabindex="-1"><a class="header-anchor" href="#创建视图"><span>创建视图</span></a></h3><h3 id="视图的更新" tabindex="-1"><a class="header-anchor" href="#视图的更新"><span>视图的更新</span></a></h3><h2 id="数据查询-select" tabindex="-1"><a class="header-anchor" href="#数据查询-select"><span>数据查询（Select）</span></a></h2><h3 id="数据查询是数据库应用的核心功能" tabindex="-1"><a class="header-anchor" href="#数据查询是数据库应用的核心功能"><span>数据查询是数据库应用的核心功能</span></a></h3><h3 id="select子句——重复元组" tabindex="-1"><a class="header-anchor" href="#select子句——重复元组"><span>Select子句——重复元组</span></a></h3><ul><li>SQL具有包的特性</li><li>Select 子句的缺省情况是保留重复元组（ ALL ），可用 Distinct 去除重复元组</li><li>去除重复元组:费时</li><li>需要临时表的支持</li></ul><h3 id="select子句——-与属性列表" tabindex="-1"><a class="header-anchor" href="#select子句——-与属性列表"><span>Select子句—— *与属性列表</span></a></h3><ul><li>星号 * 表示所有属性 <ul><li>星号 * ：按关系模式中属性的顺序排列</li><li>显式列出属性名：按用户顺序排列</li></ul></li></ul><h3 id="select子句——更名" tabindex="-1"><a class="header-anchor" href="#select子句——更名"><span>Select子句——更名</span></a></h3><ul><li>为结果集中的某个属性改名</li><li>使结果集更具可读性</li></ul><h3 id="where-子句" tabindex="-1"><a class="header-anchor" href="#where-子句"><span>Where 子句</span></a></h3><ul><li>查询满足指定条件的元组可以通过Where子句来实现</li><li>使where子句中的逻辑表达式返回True值的元组，是符合要求的元组，将被选择出来</li><li>Where 子句——运算符 <ul><li>比较：&lt;、&lt;=、&gt;、&gt;=、=、&lt;&gt; 等</li><li>确定范围： <ul><li>Between A and B、Not Between A and B</li></ul></li><li>确定集合：IN、NOT IN</li><li>字符匹配：LIKE，NOT LIKE</li><li>空值：IS NULL、IS NOT NULL</li><li>多重条件：AND、OR、NOT</li></ul></li><li>Where 子句——Like <ul><li>字符匹配：Like、Not Like</li><li>通配符</li><li>% —— 匹配任意字符串</li><li>_ —— 匹配任意一个字符</li><li>大小写敏感</li></ul></li><li>Where 子句——转义符 escape</li></ul><h3 id="from-子句" tabindex="-1"><a class="header-anchor" href="#from-子句"><span>From 子句</span></a></h3><ul><li>列出将被查询的关系（表）</li><li>From 子句——元组变量 <ul><li>为 From 子句中的关系定义元组变量</li><li>方便关系名的引用</li></ul></li><li>连接子句 <ul><li>内连接 <ul><li>内连接是指包括符合条件的每个表的记录，也称之为全记录操作。</li></ul></li><li>外连接 <ul><li>外连接是指把两个表分为左右两个表。右外连接是指连接满足条件右侧表的全部记录。左外连接是指连接满足条件左侧表的全部记录。全外连接是指连接满足条件表的全部记录。</li><li>左外连接</li><li>右外连接</li><li>全外连接</li></ul></li></ul></li></ul><h3 id="order-by子句" tabindex="-1"><a class="header-anchor" href="#order-by子句"><span>Order By子句</span></a></h3><ul><li>指定结果集中元组的排列次序</li><li>耗时</li><li>ASC升序（缺省）、DESC降序</li></ul><h3 id="子查询-subquery" tabindex="-1"><a class="header-anchor" href="#子查询-subquery"><span>子查询（Subquery ）</span></a></h3><ul><li>子查询是嵌套在另一查询中的 Select-From-Where 表达式（Where/Having）</li><li>SQL允许多层嵌套，由内而外地进行分析，子查询的结果作为父查询的查找条件</li><li>可以用多个简单查询来构成复杂查询，以增强SQL的查询能力</li><li>子查询中不使用 Order By 子句，Order By子句只能对最终查询结果进行排序</li><li>子查询——单值比较 <ul><li>返回单值的子查询，只返回一行一列</li><li>父查询与单值子查询之间用比较运算符进行连接 <ul><li>运算符：&gt;、&gt;=、=、&lt;=、&lt;、 &lt;&gt;</li></ul></li></ul></li><li>子查询——多值 <ul><li>子查询返回多行一列</li><li>运算符：In、All、Some(或Any)、Exists <ul><li>子查询——多值成员In <ul><li>若值与子查询返回集中的某一个相等，则返回true <ul><li>IN 被用来测试多值中的成员</li></ul></li></ul></li><li>子查询——多值比较 ALL <ul><li>父查询与多值子查询之间的比较用All来连接</li><li>值s比子查询返回集R中的每个都大时，s&gt;All R 为True</li><li>All表示所有</li><li><blockquote><p>all、&lt; all、&lt;=all、&gt;=all、&lt;&gt; all</p></blockquote></li><li>&lt;&gt; all 等价于 not in</li></ul></li><li>子查询——多值比较Some/Any <ul><li>父查询与多值子查询之间的比较需用Some/Any来连接</li><li>值s比子查询返回集R中的某一个都大时返回 Ture <ul><li>s &gt; Some R为True 或</li><li>s &gt; Any R为True</li></ul></li><li>Some(早期用Any)表示某一个（任意一个）</li><li><blockquote><p>some、&lt; some、&lt;=some、&gt;=some、&lt;&gt; some</p></blockquote></li><li>= some 等价于 in、&lt;&gt; some 不等价于 not in</li></ul></li></ul></li></ul></li><li>子查询——存在判断Exists <ul><li>Exists + 子查询用来判断该子查询是否返回元组</li><li>当子查询的结果集非空时，Exists为True</li><li>当子查询的结果集为空时，Exists为False</li><li>不关心子查询的具体内容，因此用 Select *</li><li>具有外部引用的子查询，称为相关子查询（Correlated Queries）</li><li>外层元组的属性作为内层子查询的条件</li></ul></li></ul><h3 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数"><span>聚合函数</span></a></h3><ul><li>把一列中的值进行聚合运算，返回单值的函数</li><li>五个预定义的聚合函数 <ul><li>平均值：Avg( )</li><li>总和： Sum( )</li><li>最小值：Min( )</li><li>最大值：Max( )</li><li>计数： Count( ) 返回所选列中不为NULL的数</li></ul></li><li>Group By <ul><li>将查询结果集按某一列或多列的值分组，值相等的为一组，一个分组以一个元组的形式出现</li><li>只有出现在Group By子句中的属性，才可出现在Select子句中</li></ul></li><li>Having <ul><li>针对聚合函数的结果值进行筛选（选择），它作用于分组计算结果集</li><li>跟在Group By子句的后面。</li></ul></li><li>Having 与 Where的区别 <ul><li>Where 决定哪些元组被选择参加运算，作用于关系中的元组</li><li>Having 决定哪些分组符合要求，作用于分组</li><li>聚合函数的条件关系必须用Having，Where中不应出现聚合函数</li></ul></li><li>聚合函数对Null的处理 <ul><li>Count：不计</li><li>Sum：不将其计入</li><li>Avg：具有 Null 的元组不参与</li><li>Max / Min：不参与</li></ul></li></ul><h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引"><span>索引</span></a></h2><h3 id="数据库中的索引与书籍中的索引类似-在一本书中-利用索引可以快速查找所需信息-无须阅读整本书。在数据库中-索引使数据库程序无须对整个表进行扫描-就可以在其中找到所需数据。书中的索引是一个词语列表-其中注明了包含各个词的页码。而数据库中的索引是某个表中一列或者若干列值的集合和相应的指向表中物理标识这些值的数据页的逻辑指针清单" tabindex="-1"><a class="header-anchor" href="#数据库中的索引与书籍中的索引类似-在一本书中-利用索引可以快速查找所需信息-无须阅读整本书。在数据库中-索引使数据库程序无须对整个表进行扫描-就可以在其中找到所需数据。书中的索引是一个词语列表-其中注明了包含各个词的页码。而数据库中的索引是某个表中一列或者若干列值的集合和相应的指向表中物理标识这些值的数据页的逻辑指针清单"><span>数据库中的索引与书籍中的索引类似，在一本书中，利用索引可以快速查找所需信息，无须阅读整本书。在数据库中，索引使数据库程序无须对整个表进行扫描，就可以在其中找到所需数据。书中的索引是一个词语列表，其中注明了包含各个词的页码。而数据库中的索引是某个表中一列或者若干列值的集合和相应的指向表中物理标识这些值的数据页的逻辑指针清单</span></a></h3><h3 id="索引的作用" tabindex="-1"><a class="header-anchor" href="#索引的作用"><span>索引的作用</span></a></h3><ul><li>通过创建唯一索引，可以保证数据记录的唯一性。</li><li>可以大大加快数据检索速度。</li><li>可以加速表与表之间的连接，这一点在实现数据的参照完整性方面有特别的意义。</li><li>在使用ORDER BY和GROUP BY子句中进行检索数据时，可以显著减少查询中分组和排序的时间。</li><li>使用索引可以在检索数据的过程中使用优化隐藏器，提高系统性能</li></ul><h3 id="聚集索引与非聚集索引" tabindex="-1"><a class="header-anchor" href="#聚集索引与非聚集索引"><span>聚集索引与非聚集索引</span></a></h3><ul><li>聚集索引对表的物理数据页中的数据按列进行排序，然后再重新存储到磁盘上，即聚集索引与数据是混为一体的，它的叶节点中存储的是实际的数据</li><li>非聚集索引具有完全独立于数据行的结构，使用非聚集索引不用将物理数据页中的数据按列排序。非聚集索引的叶节点存储了组成非聚集索引的关键字值和行定位器</li></ul><h3 id="创建索引" tabindex="-1"><a class="header-anchor" href="#创建索引"><span>创建索引</span></a></h3><h2 id="约束" tabindex="-1"><a class="header-anchor" href="#约束"><span>约束</span></a></h2><h3 id="主键约束-primary-key-constraint" tabindex="-1"><a class="header-anchor" href="#主键约束-primary-key-constraint"><span>主键约束（primary key constraint）</span></a></h3><h3 id="唯一性约束-unique-constraint" tabindex="-1"><a class="header-anchor" href="#唯一性约束-unique-constraint"><span>唯一性约束（unique constraint）</span></a></h3><h3 id="检查约束-check-constraint" tabindex="-1"><a class="header-anchor" href="#检查约束-check-constraint"><span>检查约束（check constraint）</span></a></h3><h3 id="缺省约束-default-constraint" tabindex="-1"><a class="header-anchor" href="#缺省约束-default-constraint"><span>缺省约束（default constraint）</span></a></h3><h3 id="外部键约束-foreign-key-constraint" tabindex="-1"><a class="header-anchor" href="#外部键约束-foreign-key-constraint"><span>外部键约束（foreign key constraint）</span></a></h3><h2 id="sql-server权限管理" tabindex="-1"><a class="header-anchor" href="#sql-server权限管理"><span>SQL SERVER权限管理</span></a></h2><h3 id="sql-server权限管理策略" tabindex="-1"><a class="header-anchor" href="#sql-server权限管理策略"><span>SQL Server权限管理策略</span></a></h3><ul><li>安全帐户认证 <ul><li>安全帐户认证是用来确认登录SQL Server的用户的登录帐号和密码的正确性，由此来验证其是否具有连接SQL Server的权限。 SQL Server 2000提供了两种确认用户的认证模式： <ul><li>（一）Windows NT认证模式。 <ul><li>SQL Server数据库系统通常运行在Windows NT服务器平台上，而NT作为网络操作系统，本身就具备管理登录、验证用户合法性的能力，因此Windows NT认证模式正是利用了这一用户安全性和帐号管理的机制，允许SQL Server也可以使用NT的用户名和口令。在这种模式下，用户只需要通过Windows NT的认证，就可以连接到SQL Server，而SQL Server本身也就不需要管理一套登录数据。</li></ul></li><li>（二）混合认证模式。 <ul><li>混合认证模式允许用户使用Windows NT安全性或SQL Server安全性连接到SQL Server，这就意味着用户可以使用他的帐号登录到Windows NT，或者使用他的登录名登录到SQL Server系统。NT的用户既可以使用NT认证，也可以使用SQL Server认证</li></ul></li></ul></li></ul></li><li>访问许可确认 <ul><li>但是通过认证阶段并不代表用户能够访问SQL Server中的数据，同时他还必须通过许可确认。用户只有在具有访问数据库的权限之后，才能够对服务器上的数据库进行权限许可下的各种操作，这种用户访问数据库权限的设置是通过用户帐号来实现的。</li></ul></li></ul><h3 id="用户权限管理" tabindex="-1"><a class="header-anchor" href="#用户权限管理"><span>用户权限管理</span></a></h3><ul><li>服务器登录帐号和用户帐号管理 <ul><li>1.利用企业管理器创建、管理SQL Server登录帐号 <ul><li>（１）打开企业管理器，单击需要登录的服务器左边的“+”号，然后展开安全性文件夹。</li><li>（２）用右键单击登录（login）图标，从快捷菜单中选择新建登录（new login）选项，则出现SQL Server登录属性—新建登录对话框，如图6-2所示。</li><li>（3）在名称编辑框中输入登录名，在身份验证选项栏中选择新建的用户帐号是Windows NT认证模式，还是SQL Server认证模式。</li><li>（４）选择服务器角色页框。在服务器角色列表框中，列出了系统的固定服务器角色。</li><li>（５）选择用户映射页框。上面的列表框列出了该帐号可以访问的数据库，单击数据库左边的复选框，表示该用户可以访问相应的数据库以及该帐号在数据库中的用户名。</li><li>（６）设置完成后，单击“确定”按钮即可完成登录帐号的创建。</li></ul></li><li>使用SQL 语句创建登录帐号</li><li>2.用户帐号管理 <ul><li>在数据库中，一个用户或工作组取得合法的登录帐号，只表明该帐号通过了Windows NT认证或者SQL Server认证，但不能表明其可以对数据库数据和数据库对象进行某种或者某些操作，只有当他同时拥有了用户权限后，才能够访问数据库。</li><li>利用企业管理器可以授予SQL Server登录访问数据库的许可权限。使用它可创建一个新数据库用户帐号</li></ul></li></ul></li><li>许可（权限）管理 <ul><li>许可用来指定授权用户可以使用的数据库对象和这些授权用户可以对这些数据库对象执行的操作。用户在登录到SQL Server之后，其用户帐号所归属的NT组或角色所被赋予的许可（权限）决定了该用户能够对哪些数据库对象执行哪种操作以及能够访问、修改哪些数据。在每个数据库中用户的许可独立于用户帐号和用户在数据库中的角色，每个数据库都有自己独立的许可系统，在SQL Server中包括三种类型的许可：即对象许可、语句许可和预定义许可。 <ul><li>三种许可类型 <ul><li>1、对象许可 <ul><li>表示对特定的数据库对象，即表、视图、字段和存储过程的操作许可，它决定了能对表、视图等数据库对象执行哪些操作。</li></ul></li><li>2、语句许可 <ul><li>表示对数据库的操作许可，也就是说，创建数据库或者创建数据库中的其它内容所需要的许可类型称为语句许可。</li></ul></li><li>3、预定义许可 <ul><li>是指系统安装以后有些用户和角色不必授权就有的许可。</li></ul></li></ul></li></ul></li></ul></li><li>角色管理 <ul><li>角色是SQL Server 7.0版本引进的新概念，它代替了以前版本中组的概念。利用角色，SQL Server管理者可以将某些用户设置为某一角色，这样只对角色进行权限设置便可以实现对所有用户权限的设置，大大减少了管理员的工作量。SQL Server提供了用户通常管理工作的预定义服务器角色和数据库角色。 <ul><li>1、服务器角色 <ul><li>服务器角色是指根据SQL Server的管理任务，以及这些任务相对的重要性等级来把具有SQL Server管理职能的用户划分为不同的用户组，每一组所具有的管理SQL Server的权限都是SQL Server内置的，即不能对其进行添加、修改和删除，只能向其中加入用户或者其他角色。</li><li>几种常用的固定服务器角色 <ul><li>系统管理员：拥有SQL Server所有的权限许可。</li><li>服务器管理员：管理SQL Server服务器端的设置。</li><li>磁盘管理员：管理磁盘文件。</li><li>进程管理员：管理SQL Server系统进程。</li><li>安全管理员：管理和审核SQL Server系统登录。</li><li>安装管理员：增加、删除连接服务器，建立数据库复制以及管理扩展存储过程。</li><li>数据库创建者：创建数据库，并对数据库进行修改。</li></ul></li></ul></li><li>2、数据库角色 <ul><li>数据库角色是为某一用户或某一组用户授予不同级别的管理或访问数据库以及数据库对象的权限，这些权限是数据库专有的，并且还可以使一个用户具有属于同一数据库的多个角色。SQL Server提供了两种类型的数据库角色：即固定的数据库角色和用户自定义的数据库角色。</li><li>（１）固定的数据库角色 <ul><li>public：维护全部默认许可。</li><li>db_owner：数据库的所有者，可以对所拥有的数据库执行任何操作。</li><li>db_accessadmin：可以增加或者删除数据库用户、工作组和角色。</li><li>db_addladmin：可以增加、删除和修改数据库中的任何对象。</li><li>db_securityadmin：执行语句许可和对象许可。</li><li>db_backupoperator：可以备份和恢复数据库。</li><li>db_datareader：能且仅能对数据库中的任何表执行select操作，从而读取所有表的信息。</li><li>db_datawriter：能够增加、修改和删除表中的数据，但不能进行select操作。</li><li>db_denydatareader：不能读取数据库中任何表中的数据。</li><li>db_denydatawriter：不能对数据库中的任何表执行增加、修改和删除数据操作。</li></ul></li><li>（２）用户自定义角色 <ul><li>创建用户定义的数据库角色就是创建一组用户，这些用户具有相同的一组许可。如果一组用户需要执行在SQL Server中指定的一组操作并且不存在对应的Windows NT组，或者没有管理Windows NT用户帐号的许可，就可以在数据库中建立一个用户自定义的数据库角色。用户自定义的数据库角色有两种类型：即标准角色和应用程序角色。</li></ul></li></ul></li></ul></li></ul></li></ul><h3 id="transaction-sql-语句" tabindex="-1"><a class="header-anchor" href="#transaction-sql-语句"><span>Transaction_SQL 语句</span></a></h3><ul><li>赋权语句——Grant</li><li>收回权限——Revoke</li><li>收回权限——Deny<br><em>XMind: ZEN - Trial Version</em></li></ul>`,75)]))}const d=e(r,[["render",t],["__file","数据库语言SQL.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/MySQL/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AF%AD%E8%A8%80SQL.html","title":"7、数据库语言SQL","lang":"zh-CN","frontmatter":{"title":"7、数据库语言SQL","date":"2024-03-10 12:59","category":["数据库"],"tag":["MySQL"],"description":"数据库语言SQL SQL的发展 1974年，由Boyce和Chamberlin提出 1975~1979，IBM San Jose Research Lab的关系数据库管理系统原型System R实施了这种语言 SQL-86是第一个SQL标准 SQL-89、SQL-92(SQL2)、SQL-99(SQL3) 非过程化语言 SQL语言进行数据库操作时，只需...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/MySQL/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AF%AD%E8%A8%80SQL.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"7、数据库语言SQL"}],["meta",{"property":"og:description","content":"数据库语言SQL SQL的发展 1974年，由Boyce和Chamberlin提出 1975~1979，IBM San Jose Research Lab的关系数据库管理系统原型System R实施了这种语言 SQL-86是第一个SQL标准 SQL-89、SQL-92(SQL2)、SQL-99(SQL3) 非过程化语言 SQL语言进行数据库操作时，只需..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2024-03-10T12:59:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7、数据库语言SQL\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-10T12:59:00.000Z\\",\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"SQL的发展","slug":"sql的发展","link":"#sql的发展","children":[{"level":3,"title":"1974年，由Boyce和Chamberlin提出","slug":"_1974年-由boyce和chamberlin提出","link":"#_1974年-由boyce和chamberlin提出","children":[]},{"level":3,"title":"1975~1979，IBM San Jose Research Lab的关系数据库管理系统原型System R实施了这种语言","slug":"_1975-1979-ibm-san-jose-research-lab的关系数据库管理系统原型system-r实施了这种语言","link":"#_1975-1979-ibm-san-jose-research-lab的关系数据库管理系统原型system-r实施了这种语言","children":[]},{"level":3,"title":"SQL-86是第一个SQL标准","slug":"sql-86是第一个sql标准","link":"#sql-86是第一个sql标准","children":[]},{"level":3,"title":"SQL-89、SQL-92(SQL2)、SQL-99(SQL3)","slug":"sql-89、sql-92-sql2-、sql-99-sql3","link":"#sql-89、sql-92-sql2-、sql-99-sql3","children":[]}]},{"level":2,"title":"非过程化语言","slug":"非过程化语言","link":"#非过程化语言","children":[{"level":3,"title":"SQL语言进行数据库操作时，只需要提出“做什么”，不需要指明“怎么做”。“怎么做”是由DBMS来完成","slug":"sql语言进行数据库操作时-只需要提出-做什么-不需要指明-怎么做-。-怎么做-是由dbms来完成","link":"#sql语言进行数据库操作时-只需要提出-做什么-不需要指明-怎么做-。-怎么做-是由dbms来完成","children":[]}]},{"level":2,"title":"SQL的形式","slug":"sql的形式","link":"#sql的形式","children":[{"level":3,"title":"交互式SQL","slug":"交互式sql","link":"#交互式sql","children":[]},{"level":3,"title":"嵌入式SQL","slug":"嵌入式sql","link":"#嵌入式sql","children":[]}]},{"level":2,"title":"SQL语言主要组成部分","slug":"sql语言主要组成部分","link":"#sql语言主要组成部分","children":[{"level":3,"title":"数据定义语言（DDL，Data Definition Language）","slug":"数据定义语言-ddl-data-definition-language","link":"#数据定义语言-ddl-data-definition-language","children":[]},{"level":3,"title":"数据操纵语言（DML，Data Manipulation Language）","slug":"数据操纵语言-dml-data-manipulation-language","link":"#数据操纵语言-dml-data-manipulation-language","children":[]},{"level":3,"title":"数据控制语言（DCL，Data Control Language）","slug":"数据控制语言-dcl-data-control-language","link":"#数据控制语言-dcl-data-control-language","children":[]}]},{"level":2,"title":"SQL语句","slug":"sql语句","link":"#sql语句","children":[{"level":3,"title":"建立表结构 Create","slug":"建立表结构-create","link":"#建立表结构-create","children":[]},{"level":3,"title":"删除表结构 Drop","slug":"删除表结构-drop","link":"#删除表结构-drop","children":[]},{"level":3,"title":"修改表结构 Alter","slug":"修改表结构-alter","link":"#修改表结构-alter","children":[]},{"level":3,"title":"向表中添加数据(Insert)","slug":"向表中添加数据-insert","link":"#向表中添加数据-insert","children":[]},{"level":3,"title":"数据删除（Delete）","slug":"数据删除-delete","link":"#数据删除-delete","children":[]},{"level":3,"title":"数据更新（Update）","slug":"数据更新-update","link":"#数据更新-update","children":[]}]},{"level":2,"title":"视     图   (VIEW)","slug":"视-图-view","link":"#视-图-view","children":[{"level":3,"title":"视图是从一个或者多个表或视图中导出的表，其结构和数据是建立在对表的查询基础上的。和真实的表一样，视图也包括几个被定义的数据列和多个数据行，但从本质上讲，这些数据列和数据行来源于其所引用的表。因此，视图不是真实存在的基础表而是一个虚拟表，视图所对应的数据并不实际地以视图结构存储在数据库中，而是存储在视图所引用的表中。","slug":"视图是从一个或者多个表或视图中导出的表-其结构和数据是建立在对表的查询基础上的。和真实的表一样-视图也包括几个被定义的数据列和多个数据行-但从本质上讲-这些数据列和数据行来源于其所引用的表。因此-视图不是真实存在的基础表而是一个虚拟表-视图所对应的数据并不实际地以视图结构存储在数据库中-而是存储在视图所引用的表中。","link":"#视图是从一个或者多个表或视图中导出的表-其结构和数据是建立在对表的查询基础上的。和真实的表一样-视图也包括几个被定义的数据列和多个数据行-但从本质上讲-这些数据列和数据行来源于其所引用的表。因此-视图不是真实存在的基础表而是一个虚拟表-视图所对应的数据并不实际地以视图结构存储在数据库中-而是存储在视图所引用的表中。","children":[]},{"level":3,"title":"创建视图","slug":"创建视图","link":"#创建视图","children":[]},{"level":3,"title":"视图的更新","slug":"视图的更新","link":"#视图的更新","children":[]}]},{"level":2,"title":"数据查询（Select）","slug":"数据查询-select","link":"#数据查询-select","children":[{"level":3,"title":"数据查询是数据库应用的核心功能","slug":"数据查询是数据库应用的核心功能","link":"#数据查询是数据库应用的核心功能","children":[]},{"level":3,"title":"Select子句——重复元组","slug":"select子句——重复元组","link":"#select子句——重复元组","children":[]},{"level":3,"title":"Select子句—— *与属性列表","slug":"select子句——-与属性列表","link":"#select子句——-与属性列表","children":[]},{"level":3,"title":"Select子句——更名","slug":"select子句——更名","link":"#select子句——更名","children":[]},{"level":3,"title":"Where 子句","slug":"where-子句","link":"#where-子句","children":[]},{"level":3,"title":"From 子句","slug":"from-子句","link":"#from-子句","children":[]},{"level":3,"title":"Order By子句","slug":"order-by子句","link":"#order-by子句","children":[]},{"level":3,"title":"子查询（Subquery ）","slug":"子查询-subquery","link":"#子查询-subquery","children":[]},{"level":3,"title":"聚合函数","slug":"聚合函数","link":"#聚合函数","children":[]}]},{"level":2,"title":"索引","slug":"索引","link":"#索引","children":[{"level":3,"title":"数据库中的索引与书籍中的索引类似，在一本书中，利用索引可以快速查找所需信息，无须阅读整本书。在数据库中，索引使数据库程序无须对整个表进行扫描，就可以在其中找到所需数据。书中的索引是一个词语列表，其中注明了包含各个词的页码。而数据库中的索引是某个表中一列或者若干列值的集合和相应的指向表中物理标识这些值的数据页的逻辑指针清单","slug":"数据库中的索引与书籍中的索引类似-在一本书中-利用索引可以快速查找所需信息-无须阅读整本书。在数据库中-索引使数据库程序无须对整个表进行扫描-就可以在其中找到所需数据。书中的索引是一个词语列表-其中注明了包含各个词的页码。而数据库中的索引是某个表中一列或者若干列值的集合和相应的指向表中物理标识这些值的数据页的逻辑指针清单","link":"#数据库中的索引与书籍中的索引类似-在一本书中-利用索引可以快速查找所需信息-无须阅读整本书。在数据库中-索引使数据库程序无须对整个表进行扫描-就可以在其中找到所需数据。书中的索引是一个词语列表-其中注明了包含各个词的页码。而数据库中的索引是某个表中一列或者若干列值的集合和相应的指向表中物理标识这些值的数据页的逻辑指针清单","children":[]},{"level":3,"title":"索引的作用","slug":"索引的作用","link":"#索引的作用","children":[]},{"level":3,"title":"聚集索引与非聚集索引","slug":"聚集索引与非聚集索引","link":"#聚集索引与非聚集索引","children":[]},{"level":3,"title":"创建索引","slug":"创建索引","link":"#创建索引","children":[]}]},{"level":2,"title":"约束","slug":"约束","link":"#约束","children":[{"level":3,"title":"主键约束（primary key constraint）","slug":"主键约束-primary-key-constraint","link":"#主键约束-primary-key-constraint","children":[]},{"level":3,"title":"唯一性约束（unique constraint）","slug":"唯一性约束-unique-constraint","link":"#唯一性约束-unique-constraint","children":[]},{"level":3,"title":"检查约束（check constraint）","slug":"检查约束-check-constraint","link":"#检查约束-check-constraint","children":[]},{"level":3,"title":"缺省约束（default constraint）","slug":"缺省约束-default-constraint","link":"#缺省约束-default-constraint","children":[]},{"level":3,"title":"外部键约束（foreign key constraint）","slug":"外部键约束-foreign-key-constraint","link":"#外部键约束-foreign-key-constraint","children":[]}]},{"level":2,"title":"SQL SERVER权限管理","slug":"sql-server权限管理","link":"#sql-server权限管理","children":[{"level":3,"title":"SQL Server权限管理策略","slug":"sql-server权限管理策略","link":"#sql-server权限管理策略","children":[]},{"level":3,"title":"用户权限管理","slug":"用户权限管理","link":"#用户权限管理","children":[]},{"level":3,"title":"Transaction_SQL 语句","slug":"transaction-sql-语句","link":"#transaction-sql-语句","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":16.38,"words":4915},"filePathRelative":"posts/Database/MySQL/数据库语言SQL.md","localizedDate":"2024年3月10日","excerpt":"\\n<h2>SQL的发展</h2>\\n<h3>1974年，由Boyce和Chamberlin提出</h3>\\n<h3>1975~1979，IBM San Jose Research Lab的关系数据库管理系统原型System R实施了这种语言</h3>\\n<h3>SQL-86是第一个SQL标准</h3>\\n<h3>SQL-89、SQL-92(SQL2)、SQL-99(SQL3)</h3>\\n<h2>非过程化语言</h2>\\n<h3>SQL语言进行数据库操作时，只需要提出“做什么”，不需要指明“怎么做”。“怎么做”是由DBMS来完成</h3>\\n<h2>SQL的形式</h2>\\n<h3>交互式SQL</h3>\\n<ul>\\n<li>一般DBMS都提供联机交互工具</li>\\n<li>用户可直接键入SQL命令对数据库进行操作</li>\\n<li>由DBMS来进行解释</li>\\n</ul>","autoDesc":true}');export{d as comp,c as data};
