import{_ as a,c as n,a as i,o as l}from"./app-DQS7qcOs.js";const e={};function p(r,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="druid多数据源配置" tabindex="-1"><a class="header-anchor" href="#druid多数据源配置"><span>Druid多数据源配置</span></a></h1><p>本篇介绍在 SpringBoot 下如何配置Druid 多数据源</p><h2 id="集成步骤目录" tabindex="-1"><a class="header-anchor" href="#集成步骤目录"><span>集成步骤目录</span></a></h2><ol><li>引入jar包</li><li>设置配置参数</li><li>编写配置文件与 <ol><li>编写数据源常量/枚举</li><li>创建动态数据源</li><li>动态数据源配置</li><li>定义动态数据源注解</li><li>设置数据源 AOP 代理</li></ol></li><li>修改启动文件</li></ol><h2 id="具体集成步骤" tabindex="-1"><a class="header-anchor" href="#具体集成步骤"><span>具体集成步骤</span></a></h2><h3 id="_1-引入jar包" tabindex="-1"><a class="header-anchor" href="#_1-引入jar包"><span>1.引入jar包</span></a></h3><p>以我们公司项目为例，数据库主要使用<code>oracle</code> 和 国产数据库 <code>gbase</code></p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;!-- oracle驱动 --&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>   &lt;groupId&gt;com.oracle&lt;/groupId&gt;</span></span>
<span class="line"><span>   &lt;artifactId&gt;ojdbc6&lt;/artifactId&gt;</span></span>
<span class="line"><span>   &lt;version&gt;11.2.0.4.0&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!--ifxjdbc gbase--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>   &lt;groupId&gt;com.informix&lt;/groupId&gt;</span></span>
<span class="line"><span>   &lt;artifactId&gt;ifxjdbc&lt;/artifactId&gt;</span></span>
<span class="line"><span>   &lt;version&gt;1.0.1&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- druid数据源驱动 --&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>   &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span>   &lt;artifactId&gt;druid-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>   &lt;version&gt;1.1.10&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-配置参数" tabindex="-1"><a class="header-anchor" href="#_2-配置参数"><span>2.配置参数</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>  profiles: dev</span></span>
<span class="line"><span>  application:</span></span>
<span class="line"><span>    name: app-platform</span></span>
<span class="line"><span>  datasource:</span></span>
<span class="line"><span>    druid:</span></span>
<span class="line"><span>      orac: #数据源1 oracle  </span></span>
<span class="line"><span>        # 数据库访问配置, 使用druid数据源</span></span>
<span class="line"><span>        type: com.alibaba.druid.pool.DruidDataSource</span></span>
<span class="line"><span>        driver-class-name: oracle.jdbc.driver.OracleDriver</span></span>
<span class="line"><span>        url: jdbc:oracle:thin:@192.168.0.xx:1521:orcl</span></span>
<span class="line"><span>        username: username</span></span>
<span class="line"><span>        password: password</span></span>
<span class="line"><span>      gbase:#数据源2 gbase  </span></span>
<span class="line"><span>        driver-class-name: com.informix.jdbc.IfxDriver</span></span>
<span class="line"><span>        type: com.alibaba.druid.pool.DruidDataSource</span></span>
<span class="line"><span>        name: test</span></span>
<span class="line"><span>        url: jdbc:informix-sqli://192.168.0.xx:9088/app_lzf:INFORMIXSERVER=gbaseserver;</span></span>
<span class="line"><span>        username: myusername</span></span>
<span class="line"><span>        password: mypassword</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>###3.编写配置文件</p><p>####3.1.定义数据源名称常量</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>public interface DataSourceNames {</span></span>
<span class="line"><span>    String ORAC = &quot;orac&quot;;</span></span>
<span class="line"><span>    String GBASE = &quot;gbase&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_3-2-创建动态数据源" tabindex="-1"><a class="header-anchor" href="#_3-2-创建动态数据源"><span>3.2 创建动态数据源</span></a></h4><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 动态数据源</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class DynamicDataSource extends AbstractRoutingDataSource {</span></span>
<span class="line"><span>    private static final ThreadLocal&lt;String&gt; contextHolder = new ThreadLocal&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 配置DataSource, defaultTargetDataSource为主数据库</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public DynamicDataSource(DataSource defaultTargetDataSource, Map&lt;Object, Object&gt; targetDataSources) {</span></span>
<span class="line"><span>        super.setDefaultTargetDataSource(defaultTargetDataSource);</span></span>
<span class="line"><span>        super.setTargetDataSources(targetDataSources);</span></span>
<span class="line"><span>        super.afterPropertiesSet();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protected Object determineCurrentLookupKey() {</span></span>
<span class="line"><span>        return getDataSource();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void setDataSource(String dataSource) {</span></span>
<span class="line"><span>        contextHolder.set(dataSource);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static String getDataSource() {</span></span>
<span class="line"><span>        return contextHolder.get();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void clearDataSource() {</span></span>
<span class="line"><span>        contextHolder.remove();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-动态数据源配置" tabindex="-1"><a class="header-anchor" href="#_3-3-动态数据源配置"><span>3.3 动态数据源配置</span></a></h4><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 配置多数据源</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class DynamicDataSourceConfig {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 创建 DataSource Bean</span></span>
<span class="line"><span>     * */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @ConfigurationProperties(&quot;spring.datasource.druid.orac&quot;)</span></span>
<span class="line"><span>    public DataSource oneDataSource(){</span></span>
<span class="line"><span>        DataSource dataSource = DruidDataSourceBuilder.create().build();</span></span>
<span class="line"><span>        return dataSource;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @ConfigurationProperties(&quot;spring.datasource.druid.gbase&quot;)</span></span>
<span class="line"><span>    public DataSource twoDataSource(){</span></span>
<span class="line"><span>        DataSource dataSource = DruidDataSourceBuilder.create().build();</span></span>
<span class="line"><span>        return dataSource;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 如果还有数据源,在这继续添加 DataSource Bean</span></span>
<span class="line"><span>     * */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @Primary</span></span>
<span class="line"><span>    public DynamicDataSource dataSource(DataSource oneDataSource, DataSource twoDataSource) {</span></span>
<span class="line"><span>        Map&lt;Object, Object&gt; targetDataSources = new HashMap&lt;&gt;(2);</span></span>
<span class="line"><span>        targetDataSources.put(DataSourceNames.ORAC, oneDataSource);</span></span>
<span class="line"><span>        targetDataSources.put(DataSourceNames.GBASE, twoDataSource);</span></span>
<span class="line"><span>        // 还有数据源,在targetDataSources中继续添加</span></span>
<span class="line"><span>        System.out.println(&quot;DataSources:&quot; + targetDataSources);</span></span>
<span class="line"><span>        return new DynamicDataSource(oneDataSource, targetDataSources);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-定义动态数据源注解" tabindex="-1"><a class="header-anchor" href="#_3-4-定义动态数据源注解"><span>3.4.定义动态数据源注解:</span></a></h4><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 多数据源注解</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Documented</span></span>
<span class="line"><span>@Target({ElementType.METHOD})</span></span>
<span class="line"><span>@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span>public @interface DataSource {</span></span>
<span class="line"><span>    String value() default DataSourceNames.ORAC;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_3-4-设置数据源-aop-代理" tabindex="-1"><a class="header-anchor" href="#_3-4-设置数据源-aop-代理"><span>3.4 设置数据源 AOP 代理:</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 数据源AOP切面处理</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Aspect</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Component</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> DataSourceAspect</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> implements</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Ordered</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    protected</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Logger</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> logger </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> LoggerFactory</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getLogger</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getClass</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 切点: 所有配置 DataSource 注解的方法</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Pointcut</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;@annotation(com.ylzinfo.common.druid.DataSource)&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> dataSourcePointCut</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Around</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;dataSourcePointCut()&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Object</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> around</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ProceedingJoinPoint</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> point</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> throws</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Throwable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        MethodSignature</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> signature</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (MethodSignature) </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">point</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getSignature</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Method</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> method</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> signature</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getMethod</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        DataSource</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ds</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> method</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getAnnotation</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">DataSource</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 通过判断 DataSource 中的值来判断当前方法应用哪个数据源</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        DynamicDataSource</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setDataSource</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ds</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;当前数据源: &quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ds</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        logger</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">debug</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;set datasource is &quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ds</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        try</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            return</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> point</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">proceed</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">finally</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            DynamicDataSource</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">clearDataSource</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            logger</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">debug</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;clean datasource&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getOrder</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-修改启动文件" tabindex="-1"><a class="header-anchor" href="#_4-修改启动文件"><span>4.修改启动文件</span></a></h3><p>如果设置了动态数据源，那么需要将自有的配置依赖去除(DataSourceAutoConfiguration)</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})</span></span>
<span class="line"><span>public class AppPlatformApplication {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public static void main(String[] args) {</span></span>
<span class="line"><span>		SpringApplication.run(AppPlatformApplication.class, args);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="参考博客" tabindex="-1"><a class="header-anchor" href="#参考博客"><span>参考博客</span></a></h2><p><a href="https://my.oschina.net/u/3681868/blog/1813011" target="_blank" rel="noopener noreferrer">SpringBoot--Druid多数据源配置</a></p><p><a href="https://gitee.com/wenshao/druid/tree/master/druid-spring-boot-starter" target="_blank" rel="noopener noreferrer">Druid配置</a></p>`,27)]))}const d=a(e,[["render",p],["__file","dbcp-x-druid-mutil.html.vue"]]),o=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/database-connection-pool/dbcp-x-druid-mutil.html","title":"Druid多数据源配置","lang":"zh-CN","frontmatter":{"description":"Druid多数据源配置 本篇介绍在 SpringBoot 下如何配置Druid 多数据源 集成步骤目录 引入jar包 设置配置参数 编写配置文件与 编写数据源常量/枚举 创建动态数据源 动态数据源配置 定义动态数据源注解 设置数据源 AOP 代理 修改启动文件 具体集成步骤 1.引入jar包 以我们公司项目为例，数据库主要使用oracle 和 国产数据...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/database-connection-pool/dbcp-x-druid-mutil.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Druid多数据源配置"}],["meta",{"property":"og:description","content":"Druid多数据源配置 本篇介绍在 SpringBoot 下如何配置Druid 多数据源 集成步骤目录 引入jar包 设置配置参数 编写配置文件与 编写数据源常量/枚举 创建动态数据源 动态数据源配置 定义动态数据源注解 设置数据源 AOP 代理 修改启动文件 具体集成步骤 1.引入jar包 以我们公司项目为例，数据库主要使用oracle 和 国产数据..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Druid多数据源配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"集成步骤目录","slug":"集成步骤目录","link":"#集成步骤目录","children":[]},{"level":2,"title":"具体集成步骤","slug":"具体集成步骤","link":"#具体集成步骤","children":[{"level":3,"title":"1.引入jar包","slug":"_1-引入jar包","link":"#_1-引入jar包","children":[]},{"level":3,"title":"2.配置参数","slug":"_2-配置参数","link":"#_2-配置参数","children":[]},{"level":3,"title":"4.修改启动文件","slug":"_4-修改启动文件","link":"#_4-修改启动文件","children":[]}]},{"level":2,"title":"参考博客","slug":"参考博客","link":"#参考博客","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.32,"words":695},"filePathRelative":"posts/Java/Java第三方依赖/database-connection-pool/dbcp-x-druid-mutil.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>本篇介绍在 SpringBoot 下如何配置Druid 多数据源</p>\\n<h2>集成步骤目录</h2>\\n<ol>\\n<li>引入jar包</li>\\n<li>设置配置参数</li>\\n<li>编写配置文件与\\n<ol>\\n<li>编写数据源常量/枚举</li>\\n<li>创建动态数据源</li>\\n<li>动态数据源配置</li>\\n<li>定义动态数据源注解</li>\\n<li>设置数据源 AOP 代理</li>\\n</ol>\\n</li>\\n<li>修改启动文件</li>\\n</ol>\\n<h2>具体集成步骤</h2>\\n<h3>1.引入jar包</h3>\\n<p>以我们公司项目为例，数据库主要使用<code>oracle</code> 和 国产数据库 <code>gbase</code></p>","autoDesc":true}');export{d as comp,o as data};
