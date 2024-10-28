import{_ as s,c as i,a as n,o as r}from"./app-BOcQBfH9.js";const o={};function e(t,a){return r(),i("div",null,a[0]||(a[0]=[n(`<h1 id="springboot监控-集成springboot-admin监控工具" tabindex="-1"><a class="header-anchor" href="#springboot监控-集成springboot-admin监控工具"><span>SpringBoot监控 - 集成springboot admin监控工具</span></a></h1><blockquote><p>上文中展示了SpringBoot提供了Actuator对应用进行监控和管理， 而Spring Boot Admin能够将 Actuator 中的信息进行界面化的展示，也可以监控所有 Spring Boot 应用的健康状况，提供实时警报功能。 本文主要介绍springboot admin以及SpringBoot和springboot admin的集成。</p></blockquote><h2 id="_1-知识准备" tabindex="-1"><a class="header-anchor" href="#_1-知识准备"><span>1. 知识准备</span></a></h2><blockquote><p>需要了解Spring Boot Admin和actuartor之间的关系等。</p></blockquote><h3 id="_1-1-什么是spring-boot-admin-和actuartor是什么关系" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是spring-boot-admin-和actuartor是什么关系"><span>1.1 什么是Spring Boot Admin？和actuartor是什么关系？</span></a></h3><blockquote><p>Spring Boot Admin能够将 Actuator 中的信息进行界面化的展示，也可以监控所有 Spring Boot 应用的健康状况，提供实时警报功能。</p></blockquote><ul><li><strong>Spring Boot Admin提供的主要功能</strong></li></ul><ol><li>显示健康状况</li><li>显示详细信息，例如 <ol><li>JVM和内存指标</li><li>micrometer.io指标</li><li>数据源指标</li><li>缓存指标</li></ol></li><li>显示构建信息编号</li><li>关注并下载日志文件</li><li>查看jvm系统和环境属性</li><li>查看Spring Boot配置属性</li><li>支持Spring Cloud的postable / env-和/ refresh-endpoint</li><li>轻松的日志级管理</li><li>与JMX-beans交互</li><li>查看线程转储</li><li>查看http跟踪</li><li>查看auditevents</li><li>查看http-endpoints</li><li>查看计划任务</li><li>查看和删除活动会话（使用spring-session）</li><li>查看Flyway / Liquibase数据库迁移</li><li>下载heapdump</li><li>状态变更通知（通过电子邮件，Slack，Hipchat，…）</li><li>状态更改的事件日志（非持久性）</li></ol><p>更多的可以<a href="https://github.com/codecentric/spring-boot-admin" target="_blank" rel="noopener noreferrer">参考</a></p><ul><li><strong>Spring Boot Admin不是Spring团队提供的模块</strong>？</li></ul><p>它是由Codecentric公司创建的，代码在<a href="https://github.com/codecentric/spring-boot-admin" target="_blank" rel="noopener noreferrer">Github： spring-boot-admin</a>上。</p><ul><li><strong>Spring Boot Admin和actuartor是什么关系？</strong></li></ul><p>从如下POM的依赖关系可以看出Spring Boot Admin本质上集成了actuartor，将实时警报，此外添加一些实时警报功能等。</p><figure><img src="https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201636.png" alt="image-20220720204640820" tabindex="0" loading="lazy"><figcaption>image-20220720204640820</figcaption></figure><h3 id="_1-2-springboot-admin的client和server" tabindex="-1"><a class="header-anchor" href="#_1-2-springboot-admin的client和server"><span>1.2 SpringBoot Admin的Client和Server？</span></a></h3><blockquote><p>Spring Boot Admin（简称SBA）由两部分组成：<strong>SBA Server</strong>和<strong>SBA Client</strong>。</p></blockquote><p><strong>SBA Server</strong>： 包括Admin用户界面并独立运行于被监控应用</p><p><strong>SBA Client</strong>： 提供一种方式将被监控应用注册到 SBA Server</p><h4 id="_1-2-1-为什么spring-boot-admin设计上会分为server和client两个部分" tabindex="-1"><a class="header-anchor" href="#_1-2-1-为什么spring-boot-admin设计上会分为server和client两个部分"><span>1.2.1 <strong>为什么Spring Boot Admin设计上会分为Server和Client两个部分</strong>？</span></a></h4><ol><li>首先，Spring Boot Admin做的是集中化的监控（比如应用的集群，多个服务或者微服务等），而不是每个应用都需要有一个UI。</li><li>其次，被监控的应用应该是和监控平台是分离的，比如Client应用会挂掉，这时候Server监控依然正常运行并发现和报警Client的异常状态。</li><li>再者，还要考虑和其它语言应用，其它平台等的集成等。</li></ol><h4 id="_1-2-2-只能通过sba-client注册到sba-server吗" tabindex="-1"><a class="header-anchor" href="#_1-2-2-只能通过sba-client注册到sba-server吗"><span>1.2.2 <strong>只能通过SBA Client注册到SBA Server吗</strong>？</span></a></h4><p>并不是， 除了SBA Client， SBA 还支持:</p><ol><li>Spring Cloud Discovery: 为了支持一些微服务框架如SpringCloud等（因为微服务框架中已经包含了服务发现和注册模块）</li><li>Python Applications Using Pyctuator: 为了支持其它语言开发的应用，比如Python</li></ol><h2 id="_2-简单示例" tabindex="-1"><a class="header-anchor" href="#_2-简单示例"><span>2. 简单示例</span></a></h2><blockquote><p>本例子主要展示SBA Server + SBA Client注册的方式。</p></blockquote><h3 id="_2-1-启用sba-server" tabindex="-1"><a class="header-anchor" href="#_2-1-启用sba-server"><span>2.1 启用SBA Server</span></a></h3><p>pom引入包</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;de.codecentric&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;spring-boot-admin-starter-server&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;2.5.3&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>通过@EnableAdminServer注解启用SBA Server</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@author</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> pdai</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Configuration</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">EnableAdminServer</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">SpringBootApplication</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> SpringBootHelloWorldApplication</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * main interface.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> args</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> args</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        SpringApplication</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">run</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">SpringBootHelloWorldApplication</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, args);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样你便可以打开如下网址查看Server UI，很显然目前没有客户端注册上来。</p><figure><img src="https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201679.png" alt="image-20220720205007867" tabindex="0" loading="lazy"><figcaption>image-20220720205007867</figcaption></figure><h3 id="_2-2-注册client" tabindex="-1"><a class="header-anchor" href="#_2-2-注册client"><span>2.2 注册Client</span></a></h3><p>这里采用Spring Boot Admin Client注册的方式。</p><p>引入SBA Client的pom依赖</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;de.codecentric&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;spring-boot-admin-starter-client&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;2.5.3&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>添加配置</p><div class="language-yml" data-ext="yml" data-title="yml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">spring</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  boot</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    admin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      client</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        url</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;http://localhost:8080&#39;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">management</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  endpoints</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    enabled-by-default</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    web</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      base-path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">/manage</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      exposure</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        include</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;*&#39;</span></span></code></pre></div><h3 id="_2-3-演示效果" tabindex="-1"><a class="header-anchor" href="#_2-3-演示效果"><span>2.3 演示效果</span></a></h3><p>打开 <a href="http://localhost:8080/wallboard" target="_blank" rel="noopener noreferrer">http://localhost:8080/wallboard</a></p><figure><img src="https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201711.png" alt="image-20220720205101689" tabindex="0" loading="lazy"><figcaption>image-20220720205101689</figcaption></figure><p>左侧是主要功能：</p><p>Insight - Details</p><figure><img src="https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201735.png" alt="image-20220720205624005" tabindex="0" loading="lazy"><figcaption>image-20220720205624005</figcaption></figure><p>Insight - Metrics</p><figure><img src="https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201774.png" alt="image-20220720205743086" tabindex="0" loading="lazy"><figcaption>image-20220720205743086</figcaption></figure><p>Insight - Configurations</p><figure><img src="https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201801.png" alt="image-20220720205832953" tabindex="0" loading="lazy"><figcaption>image-20220720205832953</figcaption></figure><p>Loggers</p><figure><img src="https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201845.png" alt="image-20220720205910150" tabindex="0" loading="lazy"><figcaption>image-20220720205910150</figcaption></figure><p>JVM</p><figure><img src="https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201884.png" alt="image-20220720210025579" tabindex="0" loading="lazy"><figcaption>image-20220720210025579</figcaption></figure><p>Mappings</p><figure><img src="https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201907.png" alt="image-20220720210045166" tabindex="0" loading="lazy"><figcaption>image-20220720210045166</figcaption></figure><h2 id="_3-进一步理解" tabindex="-1"><a class="header-anchor" href="#_3-进一步理解"><span>3. 进一步理解</span></a></h2><blockquote><p>我们再通过一些问题来帮助你更深入理解SBA， 更详细的内容可以参考<a href="https://codecentric.github.io/spring-boot-admin/current" target="_blank" rel="noopener noreferrer">官网文档</a>。</p></blockquote><h3 id="_3-1-如何启用jmx管理" tabindex="-1"><a class="header-anchor" href="#_3-1-如何启用jmx管理"><span>3.1 如何启用JMX管理？</span></a></h3><p>默认下SBA没有启用JMX，需要通过如下配置启用。</p><p>首先需要引入POM依赖（PS：需要SpringBoot2.2+ 版本）</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;org.jolokia&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;jolokia-core&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>启用JMX</p><div class="language-yml" data-ext="yml" data-title="yml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">spring</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  jmx</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    enabled</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span></span></code></pre></div><p>刷新SBA UI就可以看到增加了JMX相关的连接</p><figure><img src="https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201940.png" alt="image-20220720210348392" tabindex="0" loading="lazy"><figcaption>image-20220720210348392</figcaption></figure><h3 id="_3-2-如何显示日志内容" tabindex="-1"><a class="header-anchor" href="#_3-2-如何显示日志内容"><span>3.2 如何显示日志内容？</span></a></h3><p>默认下没有显示Log File的内容，如果需要显示SpringBoot应用日志需要进行如下配置（配置logging.file.path <a href="http://xn--logging-gf7nh96s.file.name" target="_blank" rel="noopener noreferrer">或者logging.file.name</a>）。</p><div class="language-yml" data-ext="yml" data-title="yml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">logging</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  file</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;pdai-spring-boot-application.log&#39;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  pattern</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    file</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;%clr(%d{yyyy-MM-dd HH:mm:ss.SSS}){faint} %clr(%5p) %clr(\${PID}){magenta} %clr(---){faint} %clr([%15.15t]){faint} %clr(%-40.40logger{39}){cyan} %clr(:){faint} %m%n%wEx&#39;</span></span></code></pre></div><p>刷新SBA UI就可以看到增加了日志文件相关的连接</p><figure><img src="https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201965.png" alt="image-20220720210606935" tabindex="0" loading="lazy"><figcaption>image-20220720210606935</figcaption></figure><h3 id="_3-3-如何继承spring-security" tabindex="-1"><a class="header-anchor" href="#_3-3-如何继承spring-security"><span>3.3 如何继承Spring Security？</span></a></h3><p>可以通过如下继承spring-boot-starter-security</p><p>添加pom依赖</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;org.springframework.boot&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;spring-boot-starter-security&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>添加HttpSecurity配置</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Configuration</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> SecurityPermitAllConfig</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> extends</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> WebSecurityConfigurerAdapter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    protected</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> configure</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">HttpSecurity</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> http</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> throws</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Exception</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        http</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">authorizeRequests</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">anyRequest</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">permitAll</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            .</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">and</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">csrf</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">disable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>其它安全相关配置可以参考<a href="https://codecentric.github.io/spring-boot-admin/current/#securing-spring-boot-admin" target="_blank" rel="noopener noreferrer">官网文档</a></p><h3 id="_3-4-如何通知告警信息" tabindex="-1"><a class="header-anchor" href="#_3-4-如何通知告警信息"><span>3.4 如何通知告警信息？</span></a></h3><p>可以通过集成 spring-boot-starter-mail 配置JavaMailSender 来用邮件通知信息。</p><p>添加pom依赖</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;org.springframework.boot&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;spring-boot-starter-mail&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>添加配置信息</p><div class="language-yml" data-ext="yml" data-title="yml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">spring.mail.host=smtp.example.com</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">spring.boot.admin.notify.mail.to=admin@example.com</span></span></code></pre></div><p>除了邮件通知这种，内置还支持很多其他方式以及支持自定义notification，比如钉钉，微信通知等</p><figure><img src="https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201990.png" alt="image-20220720210755484" tabindex="0" loading="lazy"><figcaption>image-20220720210755484</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/spring/springboot/springboot-x-monitor-boot-admin.html" target="_blank" rel="noopener noreferrer"><strong>SpringBoot监控 - 集成springboot admin监控工具</strong></a></p>`,86)]))}const p=s(o,[["render",e],["__file","springboot-y-monitor-admin.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-y-monitor-admin.html","title":"SpringBoot监控 - 集成springboot admin监控工具","lang":"zh-CN","frontmatter":{"aliases":"SpringBoot监控 - 集成springboot admin监控工具","tags":null,"cssclass":null,"source":null,"order":420,"created":"2024-04-23 20:40","updated":"2024-10-11 16:46","description":"SpringBoot监控 - 集成springboot admin监控工具 上文中展示了SpringBoot提供了Actuator对应用进行监控和管理， 而Spring Boot Admin能够将 Actuator 中的信息进行界面化的展示，也可以监控所有 Spring Boot 应用的健康状况，提供实时警报功能。 本文主要介绍springboot a...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-y-monitor-admin.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"SpringBoot监控 - 集成springboot admin监控工具"}],["meta",{"property":"og:description","content":"SpringBoot监控 - 集成springboot admin监控工具 上文中展示了SpringBoot提供了Actuator对应用进行监控和管理， 而Spring Boot Admin能够将 Actuator 中的信息进行界面化的展示，也可以监控所有 Spring Boot 应用的健康状况，提供实时警报功能。 本文主要介绍springboot a..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201636.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot监控 - 集成springboot admin监控工具\\",\\"image\\":[\\"https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201636.png\\",\\"https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201679.png\\",\\"https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201711.png\\",\\"https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201735.png\\",\\"https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201774.png\\",\\"https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201801.png\\",\\"https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201845.png\\",\\"https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201884.png\\",\\"https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201907.png\\",\\"https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201940.png\\",\\"https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201965.png\\",\\"https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232201990.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 知识准备","slug":"_1-知识准备","link":"#_1-知识准备","children":[{"level":3,"title":"1.1 什么是Spring Boot Admin？和actuartor是什么关系？","slug":"_1-1-什么是spring-boot-admin-和actuartor是什么关系","link":"#_1-1-什么是spring-boot-admin-和actuartor是什么关系","children":[]},{"level":3,"title":"1.2 SpringBoot Admin的Client和Server？","slug":"_1-2-springboot-admin的client和server","link":"#_1-2-springboot-admin的client和server","children":[]}]},{"level":2,"title":"2. 简单示例","slug":"_2-简单示例","link":"#_2-简单示例","children":[{"level":3,"title":"2.1 启用SBA Server","slug":"_2-1-启用sba-server","link":"#_2-1-启用sba-server","children":[]},{"level":3,"title":"2.2 注册Client","slug":"_2-2-注册client","link":"#_2-2-注册client","children":[]},{"level":3,"title":"2.3 演示效果","slug":"_2-3-演示效果","link":"#_2-3-演示效果","children":[]}]},{"level":2,"title":"3. 进一步理解","slug":"_3-进一步理解","link":"#_3-进一步理解","children":[{"level":3,"title":"3.1 如何启用JMX管理？","slug":"_3-1-如何启用jmx管理","link":"#_3-1-如何启用jmx管理","children":[]},{"level":3,"title":"3.2 如何显示日志内容？","slug":"_3-2-如何显示日志内容","link":"#_3-2-如何显示日志内容","children":[]},{"level":3,"title":"3.3 如何继承Spring Security？","slug":"_3-3-如何继承spring-security","link":"#_3-3-如何继承spring-security","children":[]},{"level":3,"title":"3.4 如何通知告警信息？","slug":"_3-4-如何通知告警信息","link":"#_3-4-如何通知告警信息","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.89,"words":1467},"filePathRelative":"posts/Java/Java框架/SpringBoot/springboot-y-monitor-admin.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>上文中展示了SpringBoot提供了Actuator对应用进行监控和管理， 而Spring Boot Admin能够将 Actuator 中的信息进行界面化的展示，也可以监控所有 Spring Boot 应用的健康状况，提供实时警报功能。 本文主要介绍springboot admin以及SpringBoot和springboot admin的集成。</p>\\n</blockquote>\\n<h2>1. 知识准备</h2>\\n<blockquote>\\n<p>需要了解Spring Boot Admin和actuartor之间的关系等。</p>\\n</blockquote>","autoDesc":true}');export{p as comp,c as data};
