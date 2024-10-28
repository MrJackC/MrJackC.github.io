import{_ as a,c as n,a as i,o as l}from"./app-BOcQBfH9.js";const e={};function r(p,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="hibernate实体类创建规则" tabindex="-1"><a class="header-anchor" href="#hibernate实体类创建规则"><span>Hibernate实体类创建规则</span></a></h1><h2 id="_1-注意事项" tabindex="-1"><a class="header-anchor" href="#_1-注意事项"><span>1. 注意事项</span></a></h2><ol><li>为持久化类(实体类)提供无参构造</li><li>成员变量私有，提供get/set方法访问，需提供属性</li><li>持久化类中的属性应尽量用包装类型, 如Long 、String 因为基本类型不一定能用null</li><li>持久化类需提供唯一标志oid，与数据库中的主键列相对应</li><li>尽量不要用final修饰class。<br> //因为hibernate使用cglib代理生成代理对象，代理对象是即成被代理对象的，final会导致无法代理</li></ol><h2 id="_2-主键" tabindex="-1"><a class="header-anchor" href="#_2-主键"><span>2. 主键</span></a></h2><h3 id="_2-1-主键类型" tabindex="-1"><a class="header-anchor" href="#_2-1-主键类型"><span>2.1 主键类型</span></a></h3><p>自然主键(少见)和代理主键(常见)</p><pre><code>1. 自然主键：表的业务列中，某列必须有且不重复时，该列可当作主键使用
</code></pre><ol start="2"><li>代理主键：表的业务列中，没有某列必须有且不重复时，则需创建一个没有业务意义的列作为主键</li></ol><h3 id="_2-2-主键生成策略" tabindex="-1"><a class="header-anchor" href="#_2-2-主键生成策略"><span>2.2 主键生成策略</span></a></h3><p>即每条记录录入时，主键的生成规则（位于orm元数据配置的id标签里的generator标签）</p><ol><li>identity：主键自增：有数据库来维护主键值，录入时不需指定主</li><li>sequence：Oracle的主键生成策略</li><li>increment：主键自增：由hibernate来维护，每次插入时先查询表中id最大值，+1作为主键(线程不安全，不用)<br> //此时执行save方法，为了生成id，会执行查询id最大值的sql语句</li><li>hilo(了解)：主键自增，高低位算法，有hibernate来维护（不使用）</li><li><strong>native</strong>：hilo+sequence+identity，自动三选一策略</li><li><strong>uuid</strong>：产生随机字符串作为主键。主键类型必须为String</li><li>assigned：自然主键生成策略，hibernate不管理主键值，由开发人员自己控制录入</li></ol><h2 id="_3-实体类注解" tabindex="-1"><a class="header-anchor" href="#_3-实体类注解"><span>3. 实体类注解</span></a></h2><h3 id="_3-1-id" tabindex="-1"><a class="header-anchor" href="#_3-1-id"><span>3.1 @Id</span></a></h3><p>@Id 标注用于声明一个实体类的属性映射为<a href="http://lib.csdn.net/base/mysql" target="_blank" rel="noopener noreferrer">数据库</a>的主键列。该属性通常置于属性声明语句之前，可与声明语句同行，也可写在单独行上。<br> @Id标注也可置于属性的getter方法之前。</p><h3 id="_3-2-generatedvalue" tabindex="-1"><a class="header-anchor" href="#_3-2-generatedvalue"><span>3.2 @GeneratedValue</span></a></h3><p>@GeneratedValue 用于标注主键的生成策略，通过strategy 属性指定。默认情况下，JPA 自动选择一个最适合底层数据库的主键生成策略：SqlServer对应identity，<a href="http://lib.csdn.net/base/mysql" target="_blank" rel="noopener noreferrer">MySQL</a> 对应 auto increment。<br> 在javax.persistence.GenerationType中定义了以下几种可供选择的策略：</p><ul><li>IDENTITY：采用数据库ID自增长的方式来自增主键字段，<a href="http://lib.csdn.net/base/oracle" target="_blank" rel="noopener noreferrer">Oracle</a> 不支持这种方式；</li><li>AUTO： JPA自动选择合适的策略，是默认选项；</li><li>SEQUENCE：通过序列产生主键，通过@SequenceGenerator 注解指定序列名，MySql不支持这种方式</li><li>TABLE：通过表产生主键，框架借由表模拟序列产生主键，使用该策略可以使应用更易于数据库移植。</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>@Table(name=&quot;CUSTOMERS&quot;)</span></span>
<span class="line"><span>@Entity</span></span>
<span class="line"><span>public class Customer {</span></span>
<span class="line"><span>    @GeneratedValue(strategy=GenerationType.AUTO)</span></span>
<span class="line"><span>    @Id</span></span>
<span class="line"><span>    private Integer id;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private String email;</span></span>
<span class="line"><span>    private int age;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    public Integer getId() {</span></span>
<span class="line"><span>        return id;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setId(Integer id) {</span></span>
<span class="line"><span>        this.id = id;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-column" tabindex="-1"><a class="header-anchor" href="#_3-3-column"><span>3.3 @Column</span></a></h3><p>当实体的属性与其映射的<a href="http://lib.csdn.net/base/mysql" target="_blank" rel="noopener noreferrer">数据库</a>表的列不同名时需要使用@Column 标注说明，该属性通常置于实体的属性声明语句之前，还可与 @Id 标注一起使用。</p><blockquote><ul><li>@Column 标注的常用属性是name，用于设置映射数据库表的列名。此外，该标注还包含其它多个属性，如：unique、nullable、length 等。</li><li>@Column 标注的columnDefinition属性: 表示该字段在数据库中的实际类型.通常 ORM 框架可以根据属性类型自动判断数据库中字段的类型,但是对于Date类型仍无法确定数据库中字段类型究竟是DATE,TIME还是TIMESTAMP.此外,String的默认映射类型为VARCHAR,如果要将 String 类型映射到特定数据库的 BLOB 或TEXT字段类型.</li></ul></blockquote><ul><li><p>name属性：<br> name属性定义了被标注字段在数据库表中所对应字段的名称</p></li><li><p>unique属性：<br> unique属性表示该字段是否为唯一标识，默认为false。<br> 如果表中有一个字段需要唯一标识，则既可以使用该标记，也可以使用@Table注解中的@UniqueConstraint</p></li><li><p>nullable属性：<br> nullable属性表示该字段是否可以为null值，默认为true</p></li><li><p>insertable属性：<br> insertable属性表示在使用”INSERT”语句插入数据时，是否需要插入该字段的值</p></li><li><p>updateable属性：<br> updateable属性表示在使用”UPDATE”语句插入数据时，是否需要更新该字段的值</p><p>insertable和updateable属性一般多用于只读的属性，例如主键和外键等，这些字段通常是自动生成的\\</p></li><li><p>columnDefinition属性：<br> columnDefinition属性表示创建表时，该字段创建的SQL语句，一般用于通过Entity生成表定义时使用<br> 如果数据库中表已经建好，该属性没有必要使用</p></li><li><p>table属性：<br> table属性定义了包含当前字段的表名</p></li><li><p>length属性：<br> length属性表示字段的长度，当字段的类型为varchar时，该属性才有效，默认为255个字符</p></li><li><p>precision属性和scale属性：<br> precision属性和scale属性一起表示精度，当字段类型为double时，precision表示数值的总长度，scale表示小数点所占的位数</p></li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Table</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;CUSTOMERS&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Entity</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Customer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Column</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;ID&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">GeneratedValue</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">strategy</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> GenerationType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">AUTO</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Id</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Integer</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Column</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;Name&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Column</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;Email&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> nullable</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> length</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 128</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> email</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Column</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;Age&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> age</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Column</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;Remark&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> columnDefinition</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;text&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> remark</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Column</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;Salary1&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> columnDefinition</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;decimal(5,2)&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> double</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> salary1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Column</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;Salary2&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> precision</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> scale</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> double</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> salary2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Column</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;Salary3&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> columnDefinition</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;decimal(5,2)&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> BigDecimal</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> salary3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Column</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;Salary4&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> precision</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> scale</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> BigDecimal</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> salary4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    ......</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://sourceforge.net/projects/hibernate/files/hibernate-orm/" target="_blank" rel="noopener noreferrer">Hibernate</a></p>`,25)]))}const t=a(e,[["render",r],["__file","hibernate-x-entity.html.vue"]]),d=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/hibernate/hibernate-x-entity.html","title":"Hibernate实体类创建规则","lang":"zh-CN","frontmatter":{"description":"Hibernate实体类创建规则 1. 注意事项 为持久化类(实体类)提供无参构造 成员变量私有，提供get/set方法访问，需提供属性 持久化类中的属性应尽量用包装类型, 如Long 、String 因为基本类型不一定能用null 持久化类需提供唯一标志oid，与数据库中的主键列相对应 尽量不要用final修饰class。 //因为hibernate...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/hibernate/hibernate-x-entity.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Hibernate实体类创建规则"}],["meta",{"property":"og:description","content":"Hibernate实体类创建规则 1. 注意事项 为持久化类(实体类)提供无参构造 成员变量私有，提供get/set方法访问，需提供属性 持久化类中的属性应尽量用包装类型, 如Long 、String 因为基本类型不一定能用null 持久化类需提供唯一标志oid，与数据库中的主键列相对应 尽量不要用final修饰class。 //因为hibernate..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hibernate实体类创建规则\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 注意事项","slug":"_1-注意事项","link":"#_1-注意事项","children":[]},{"level":2,"title":"2. 主键","slug":"_2-主键","link":"#_2-主键","children":[{"level":3,"title":"2.1 主键类型","slug":"_2-1-主键类型","link":"#_2-1-主键类型","children":[]},{"level":3,"title":"2.2 主键生成策略","slug":"_2-2-主键生成策略","link":"#_2-2-主键生成策略","children":[]}]},{"level":2,"title":"3. 实体类注解","slug":"_3-实体类注解","link":"#_3-实体类注解","children":[{"level":3,"title":"3.1 @Id","slug":"_3-1-id","link":"#_3-1-id","children":[]},{"level":3,"title":"3.2 @GeneratedValue","slug":"_3-2-generatedvalue","link":"#_3-2-generatedvalue","children":[]},{"level":3,"title":"3.3 @Column","slug":"_3-3-column","link":"#_3-3-column","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.79,"words":1437},"filePathRelative":"posts/Java/Java第三方依赖/hibernate/hibernate-x-entity.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 注意事项</h2>\\n<ol>\\n<li>为持久化类(实体类)提供无参构造</li>\\n<li>成员变量私有，提供get/set方法访问，需提供属性</li>\\n<li>持久化类中的属性应尽量用包装类型, 如Long 、String  因为基本类型不一定能用null</li>\\n<li>持久化类需提供唯一标志oid，与数据库中的主键列相对应</li>\\n<li>尽量不要用final修饰class。<br>\\n//因为hibernate使用cglib代理生成代理对象，代理对象是即成被代理对象的，final会导致无法代理</li>\\n</ol>\\n<h2>2. 主键</h2>\\n<h3>2.1 主键类型</h3>","autoDesc":true}');export{t as comp,d as data};
