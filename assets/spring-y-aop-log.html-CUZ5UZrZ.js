import{_ as s,c as a,a as e,o as i}from"./app-CQys7GfP.js";const p={};function l(t,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="aop打印日志" tabindex="-1"><a class="header-anchor" href="#aop打印日志"><span>AOP打印日志</span></a></h1><h2 id="_1-log-注解" tabindex="-1"><a class="header-anchor" href="#_1-log-注解"><span>1. @Log 注解</span></a></h2><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Target(ElementType.METHOD)</span></span>
<span class="line"><span>@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span>public @interface Log {</span></span>
<span class="line"><span>    String value() default &quot;&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_2-aop记录操作日志" tabindex="-1"><a class="header-anchor" href="#_2-aop记录操作日志"><span>2. AOP记录操作日志</span></a></h2><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * AOP 记录用户操作日志</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class LogAspect {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private FebsProperties febsProperties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private LogService logService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Pointcut(&quot;@annotation(com.ylzinfo.common.annotation.Log)&quot;)</span></span>
<span class="line"><span>    public void pointcut() {</span></span>
<span class="line"><span>        // do nothing</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Around(&quot;pointcut()&quot;)</span></span>
<span class="line"><span>    public Object around(ProceedingJoinPoint point) throws JsonProcessingException {</span></span>
<span class="line"><span>        Object result = null;</span></span>
<span class="line"><span>        long beginTime = System.currentTimeMillis();</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // 执行方法</span></span>
<span class="line"><span>            result = point.proceed();</span></span>
<span class="line"><span>        } catch (Throwable e) {</span></span>
<span class="line"><span>            log.error(e.getMessage());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 获取 request</span></span>
<span class="line"><span>        HttpServletRequest request = HttpContextUtil.getHttpServletRequest();</span></span>
<span class="line"><span>        // 设置 IP 地址</span></span>
<span class="line"><span>        String ip = IPUtil.getIpAddr(request);</span></span>
<span class="line"><span>        // 执行时长(毫秒)</span></span>
<span class="line"><span>        long time = System.currentTimeMillis() - beginTime;</span></span>
<span class="line"><span>        if (febsProperties.isOpenAopLog()) {</span></span>
<span class="line"><span>            // 保存日志</span></span>
<span class="line"><span>            String token = (String) SecurityUtils.getSubject().getPrincipal();</span></span>
<span class="line"><span>            String username = JWTUtil.getUsername(token);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            SysLog log = new SysLog();</span></span>
<span class="line"><span>            log.setUsername(username);</span></span>
<span class="line"><span>            log.setIp(ip);</span></span>
<span class="line"><span>            log.setTime(time);</span></span>
<span class="line"><span>            logService.saveLog(point, log);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将用户名、操作ip、操作时长记录到数据库中</p><h2 id="_3-具体使用" tabindex="-1"><a class="header-anchor" href="#_3-具体使用"><span>3. 具体使用</span></a></h2><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Log(&quot;新增用户&quot;)</span></span>
<span class="line"><span>@PostMapping</span></span>
<span class="line"><span>@RequiresPermissions(&quot;user:add&quot;)</span></span>
<span class="line"><span>public void addUser( @Valid User user) throws FebsException {</span></span>
<span class="line"><span>       ....</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,8)]))}const r=s(p,[["render",l],["__file","spring-y-aop-log.html.vue"]]),o=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-aop-log.html","title":"AOP打印日志","lang":"zh-CN","frontmatter":{"created":"2024-05-14 07:56","updated":"2024-10-11 16:46","description":"AOP打印日志 1. @Log 注解 2. AOP记录操作日志 将用户名、操作ip、操作时长记录到数据库中 3. 具体使用","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-aop-log.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"AOP打印日志"}],["meta",{"property":"og:description","content":"AOP打印日志 1. @Log 注解 2. AOP记录操作日志 将用户名、操作ip、操作时长记录到数据库中 3. 具体使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AOP打印日志\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. @Log 注解","slug":"_1-log-注解","link":"#_1-log-注解","children":[]},{"level":2,"title":"2.  AOP记录操作日志","slug":"_2-aop记录操作日志","link":"#_2-aop记录操作日志","children":[]},{"level":2,"title":"3. 具体使用","slug":"_3-具体使用","link":"#_3-具体使用","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.67,"words":201},"filePathRelative":"posts/Java/Java框架/Spring/spring-y-aop-log.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. @Log 注解</h2>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>@Target(ElementType.METHOD)</span></span>\\n<span class=\\"line\\"><span>@Retention(RetentionPolicy.RUNTIME)</span></span>\\n<span class=\\"line\\"><span>public @interface Log {</span></span>\\n<span class=\\"line\\"><span>    String value() default \\"\\";</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n</div>","autoDesc":true}');export{r as comp,o as data};
