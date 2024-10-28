import{_ as a,c as n,a as p,o as i}from"./app-BOcQBfH9.js";const o={};function r(l,s){return i(),n("div",null,s[0]||(s[0]=[p(`<h1 id="springboot集成rabbitmq-spring-boot-starter-amqp" tabindex="-1"><a class="header-anchor" href="#springboot集成rabbitmq-spring-boot-starter-amqp"><span>SpringBoot集成RabbitMQ（spring-boot-starter-amqp）</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p><strong>主要作用</strong>：解耦</p><p><strong>最标准的用法</strong>：</p><ul><li>生产者生产消息队列</li><li>消费者从队列中拿取消息并处理</li></ul><p>生产者不用关系是谁来消费，消费者不用关心谁在生产消息，从而达到解耦的目的</p><p>**分布式系统中的应用：**分布式事务的支持，RPC的调用等等</p><h2 id="_2-spring-boot-集成-rabbitmq" tabindex="-1"><a class="header-anchor" href="#_2-spring-boot-集成-rabbitmq"><span>2. Spring Boot 集成 RabbitMQ</span></a></h2><p>Spring Boot 集成 RabbitMQ 非常简单，如果只是简单的使用配置非常少，Spring Boot 提供了<code>spring-boot-starter-amqp</code> 项目对消息各种支持。</p><h3 id="_2-1-简单使用" tabindex="-1"><a class="header-anchor" href="#_2-1-简单使用"><span>2.1 简单使用</span></a></h3><p>1、配置 Pom 包，主要是添加 <code>spring-boot-starter-amqp</code> 的支持</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;org.springframework.boot&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;spring-boot-starter-amqp&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>2、配置文件</p><p>配置 RabbitMQ 的安装地址、端口以及账户信息</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>spring.application.name=Spring-boot-rabbitmq</span></span>
<span class="line"><span>spring.rabbitmq.host=120.79.200.111</span></span>
<span class="line"><span>spring.rabbitmq.port=5672</span></span>
<span class="line"><span>spring.rabbitmq.username=febs</span></span>
<span class="line"><span>spring.rabbitmq.password=123456</span></span></code></pre></div><p>3、队列配置</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Configuration</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> RabbitConfig</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Bean</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Queue</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Queue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Queue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;hello&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>4、发送者</p><p>rabbitTemplate 是 Spring Boot 提供的默认实现</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">component</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> HelloSender</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Autowired</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> AmqpTemplate</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> rabbitTemplate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> send</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> context</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;hello &quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Date</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Sender : &quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> context);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">rabbitTemplate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">convertAndSend</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;hello&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, context);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>5、接收者</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Component</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RabbitListener</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">queues</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;hello&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> HelloReceiver</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RabbitHandler</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> process</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> hello</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Receiver  : &quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> hello);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>6、测试</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@RunWith(SpringRunner.class)</span></span>
<span class="line"><span>@SpringBootTest</span></span>
<span class="line"><span>public class RabbitMqHelloTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	@Autowired</span></span>
<span class="line"><span>	private HelloSender helloSender;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	@Test</span></span>
<span class="line"><span>	public void hello() throws Exception {</span></span>
<span class="line"><span>		helloSender.send();</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>注意，发送者和接收者的 queue name 必须一致，不然不能接收</p></blockquote><p>多对多参考以下文章</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="http://www.ityouknow.com/springboot/2016/11/30/spring-boot-rabbitMQ.html" target="_blank" rel="noopener noreferrer">Spring Boot(八)：RabbitMQ 详解</a></p>`,28)]))}const t=a(o,[["render",r],["__file","rabbitmq-y-action-springboot.html.vue"]]),B=JSON.parse('{"path":"/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-y-action-springboot.html","title":"SpringBoot集成RabbitMQ（spring-boot-starter-amqp）","lang":"zh-CN","frontmatter":{"created":"2024-10-26 09:41","updated":"2024-10-26 09:48","description":"SpringBoot集成RabbitMQ（spring-boot-starter-amqp） 1. 简介 主要作用：解耦 最标准的用法： 生产者生产消息队列 消费者从队列中拿取消息并处理 生产者不用关系是谁来消费，消费者不用关心谁在生产消息，从而达到解耦的目的 **分布式系统中的应用：**分布式事务的支持，RPC的调用等等 2. Spring Boot...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-y-action-springboot.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"SpringBoot集成RabbitMQ（spring-boot-starter-amqp）"}],["meta",{"property":"og:description","content":"SpringBoot集成RabbitMQ（spring-boot-starter-amqp） 1. 简介 主要作用：解耦 最标准的用法： 生产者生产消息队列 消费者从队列中拿取消息并处理 生产者不用关系是谁来消费，消费者不用关心谁在生产消息，从而达到解耦的目的 **分布式系统中的应用：**分布式事务的支持，RPC的调用等等 2. Spring Boot..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot集成RabbitMQ（spring-boot-starter-amqp）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. Spring Boot 集成 RabbitMQ","slug":"_2-spring-boot-集成-rabbitmq","link":"#_2-spring-boot-集成-rabbitmq","children":[{"level":3,"title":"2.1 简单使用","slug":"_2-1-简单使用","link":"#_2-1-简单使用","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.24,"words":371},"filePathRelative":"posts/MiddleWare/MQ_Rabbitmq/rabbitmq-y-action-springboot.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<p><strong>主要作用</strong>：解耦</p>\\n<p><strong>最标准的用法</strong>：</p>\\n<ul>\\n<li>生产者生产消息队列</li>\\n<li>消费者从队列中拿取消息并处理</li>\\n</ul>\\n<p>生产者不用关系是谁来消费，消费者不用关心谁在生产消息，从而达到解耦的目的</p>\\n<p>**分布式系统中的应用：**分布式事务的支持，RPC的调用等等</p>\\n<h2>2. Spring Boot 集成 RabbitMQ</h2>\\n<p>Spring Boot 集成 RabbitMQ 非常简单，如果只是简单的使用配置非常少，Spring Boot 提供了<code>spring-boot-starter-amqp</code> 项目对消息各种支持。</p>","autoDesc":true}');export{t as comp,B as data};
