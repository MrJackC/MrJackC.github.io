import{_ as o,c as r,a as n,o as a}from"./app-CZJgH_ea.js";const i={};function t(s,e){return a(),r("div",null,e[0]||(e[0]=[n(`<h1 id="异常处理-错误码" tabindex="-1"><a class="header-anchor" href="#异常处理-错误码"><span>异常处理（错误码）</span></a></h1><p>本章节，将讲解异常相关的统一响应、异常处理、业务异常、错误码这 4 块的内容。</p><h2 id="_1-统一响应" tabindex="-1"><a class="header-anchor" href="#_1-统一响应"><span><a href="https://doc.iocoder.cn/exception/#_1-%E7%BB%9F%E4%B8%80%E5%93%8D%E5%BA%94" target="_blank" rel="noopener noreferrer">#</a>1. 统一响应</span></a></h2><p>后端提供 RESTful API 给前端时，需要响应前端 API 调用是否成功：</p><ul><li>如果成功，成功的数据是什么。后续，前端会将数据渲染到页面上</li><li>如果失败，失败的原因是什么。一般，前端会将原因弹出提示给用户</li></ul><p>因此，需要有<strong>统一响应</strong>，而不能是每个接口定义自己的风格。一般来说，统一响应返回信息如下：</p><ul><li>成功时，返回成功的状态码 + 数据</li><li>失败时，返回失败的状态码 + 错误提示</li></ul><p>在标准的 RESTful API 的定义，是推荐使用 <a href="https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81" target="_blank" rel="noopener noreferrer">HTTP 响应状态码 (opens new window)</a>作为状态码。一般来说，我们实践很少这么去做，主要原因如下：</p><ul><li>业务返回的错误状态码很多，HTTP 响应状态码无法很好的映射。例如说，活动还未开始、订单已取消等等</li><li>学习成本高，开发者对 HTTP 响应状态码不是很了解。例如说，可能只知道 200、403、404、500 几种常见的</li></ul><h3 id="_1-1-commonresult" tabindex="-1"><a class="header-anchor" href="#_1-1-commonresult"><span><a href="https://doc.iocoder.cn/exception/#_1-1-commonresult" target="_blank" rel="noopener noreferrer">#</a>1.1 CommonResult</span></a></h3><p><a href="https://github.com/YunaiV/ruoyi-vue-pro" target="_blank" rel="noopener noreferrer"><code>ruoyi-vue-pro</code> (opens new window)</a>项目在实践时，将状态码放在 Response Body 响应内容中返回。一共有 3 个字段，通过 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-common/src/main/java/cn/iocoder/yudao/framework/common/pojo/CommonResult.java" target="_blank" rel="noopener noreferrer">CommonResult (opens new window)</a>定义如下：</p><figure><img src="https://doc.iocoder.cn/img/异常处理/01.png" alt="CommonResult" tabindex="0" loading="lazy"><figcaption>CommonResult</figcaption></figure><div class="language-json" data-ext="json" data-title="json"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 成功响应</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">    code</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">    data</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">        id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">        username</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;yudaoyuanma&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 失败响应</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">    code</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">233666</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">    message</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;徐妈太丑了&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>可以增加 success 字段吗？</p><p>有些团队在实践时，会增加了 <code>success</code> 字段，通过 <code>true</code> 和 <code>false</code> 表示成功还是失败。<br> 这个看每个团队的习惯吧。艿艿的话，还是偏好基于约定，返回 <code>0</code> 时表示成功。</p><p>失败时的 <code>code</code> 字段，使用全局的错误码，稍后在 <a href="https://doc.iocoder.cn/exception/#_4-%E9%94%99%E8%AF%AF%E7%A0%81" target="_blank" rel="noopener noreferrer">「4. 错误码」</a> 小节来讲解。</p><p>① 在 RESTful API 成功时，定义 Controller 对应方法的返回类型为 CommonResult，并调用 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-common/src/main/java/cn/iocoder/yudao/framework/common/pojo/CommonResult.java#L63-L69" target="_blank" rel="noopener noreferrer"><code>#success(T data)</code> (opens new window)</a>方法来返回。代码如下图：</p><figure><img src="https://doc.iocoder.cn/img/异常处理/02.png" alt="CommonResult" tabindex="0" loading="lazy"><figcaption>CommonResult</figcaption></figure><p>CommonResult 的 <code>data</code> 字段是<strong>泛型</strong>，建议定义对应的 VO 类，而不是使用 Map 类。</p><p>② 在 RESTful API 失败时，通过抛出 Exception 异常，具体在 <a href="https://doc.iocoder.cn/exception/#_2-%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86" target="_blank" rel="noopener noreferrer">「2. 异常处理」</a> 小节。</p><h3 id="_1-2-使用-controlleradvice" tabindex="-1"><a class="header-anchor" href="#_1-2-使用-controlleradvice"><span><a href="https://doc.iocoder.cn/exception/#_1-2-%E4%BD%BF%E7%94%A8-controlleradvice" target="_blank" rel="noopener noreferrer">#</a>1.2 使用 <code>@ControllerAdvice</code> ？</span></a></h3><p>在 Spring MVC 中，可以使用 <code>@ControllerAdvice</code> 注解，通过 Spring AOP 拦截修改 Controller 方法的返回结果，从而实现全局的统一返回。</p><p>使用 @ControllerAdvice 注解的实战案例？</p><p>如果你感兴趣的话，可以阅读 <a href="https://www.iocoder.cn/Spring-Boot/SpringMVC/?yudao" target="_blank" rel="noopener noreferrer">《芋道 Spring Boot SpringMVC 入门 》 (opens new window)</a>文章的「4. 全局统一返回 」小节。</p><p>为什么项目不采用这种方式呢？主要原因是，这样的方式“破坏”了方法的定义，导致一些隐性的问题。例如说，Swagger 接口定义错误，展示的响应结果不是 CommonResult。</p><p>还有个原因，部分 RESTful API 不需要自动包装 CommonResult 结果。例如说，第三方支付回调只需要返回 <code>&quot;success&quot;</code> 字符串。</p><h2 id="_2-异常处理" tabindex="-1"><a class="header-anchor" href="#_2-异常处理"><span><a href="https://doc.iocoder.cn/exception/#_2-%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86" target="_blank" rel="noopener noreferrer">#</a>2. 异常处理</span></a></h2><p>RESTful API 发生异常时，需要拦截 Exception 异常，转换成<strong>统一响应</strong>的格式，否则前端无法处理。</p><h3 id="_2-1-spring-mvc-的异常" tabindex="-1"><a class="header-anchor" href="#_2-1-spring-mvc-的异常"><span><a href="https://doc.iocoder.cn/exception/#_2-1-spring-mvc-%E7%9A%84%E5%BC%82%E5%B8%B8" target="_blank" rel="noopener noreferrer">#</a>2.1 Spring MVC 的异常</span></a></h3><p>在 Spring MVC 中，通过 <code>@ControllerAdvice</code> + <code>@ExceptionHandler</code> 注解，声明将指定类型的异常，转换成对应的 CommonResult 响应。实现的代码，可见 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-web/src/main/java/cn/iocoder/yudao/framework/web/core/handler/GlobalExceptionHandler.java" target="_blank" rel="noopener noreferrer">GlobalExceptionHandler (opens new window)</a>类，代码如下：</p><figure><img src="https://doc.iocoder.cn/img/异常处理/03.png" alt="GlobalExceptionHandler 异常处理" tabindex="0" loading="lazy"><figcaption>GlobalExceptionHandler 异常处理</figcaption></figure><h3 id="_2-2-filter-的异常" tabindex="-1"><a class="header-anchor" href="#_2-2-filter-的异常"><span><a href="https://doc.iocoder.cn/exception/#_2-2-filter-%E7%9A%84%E5%BC%82%E5%B8%B8" target="_blank" rel="noopener noreferrer">#</a>2.2 Filter 的异常</span></a></h3><p>在请求被 Spring MVC 处理之前，是先经过 Filter 处理的，此时发生异常时，是无法通过 <code>@ExceptionHandler</code> 注解来处理的。只能通过 <code>try catch</code> 的方式来实现，代码如下：</p><figure><img src="https://doc.iocoder.cn/img/异常处理/04.png" alt="Filter 异常处理" tabindex="0" loading="lazy"><figcaption>Filter 异常处理</figcaption></figure><h2 id="_3-业务异常" tabindex="-1"><a class="header-anchor" href="#_3-业务异常"><span><a href="https://doc.iocoder.cn/exception/#_3-%E4%B8%9A%E5%8A%A1%E5%BC%82%E5%B8%B8" target="_blank" rel="noopener noreferrer">#</a>3. 业务异常</span></a></h2><p>在 Service 发生业务异常时，如果进行返回呢？例如说，用户名已经存在，商品库存不足等。常用的方案选择，主要有两种：</p><ul><li>方案一，使用 CommonResult 统一响应结果，里面有错误码和错误提示，然后进行 <code>return</code> 返回</li><li>方案二，使用 ServiceException 统一业务异常，里面有错误码和错误提示，然后进行 <code>throw</code> 抛出</li></ul><p>选择方案一 CommonResult 会存在两个问题：</p><ul><li>因为 Spring <code>@Transactional</code> 声明式事务，是基于异常进行回滚的，如果使用 CommonResult 返回，则事务回滚会非常麻烦</li><li>当调用别的方法时，如果别人返回的是 CommonResult 对象，还需要不断的进行判断，写起来挺麻烦的</li></ul><p>因此，项目采用方案二 ServiceException 异常。</p><h3 id="_3-1-serviceexception" tabindex="-1"><a class="header-anchor" href="#_3-1-serviceexception"><span><a href="https://doc.iocoder.cn/exception/#_3-1-serviceexception" target="_blank" rel="noopener noreferrer">#</a>3.1 ServiceException</span></a></h3><p>定义 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-common/src/main/java/cn/iocoder/yudao/framework/common/exception/ServiceException.java" target="_blank" rel="noopener noreferrer">ServiceException (opens new window)</a>异常类，继承 RuntimeException 异常类（非受检），用于定义业务异常。代码如下：</p><figure><img src="https://doc.iocoder.cn/img/异常处理/05.png" alt="ServiceException 业务异常" tabindex="0" loading="lazy"><figcaption>ServiceException 业务异常</figcaption></figure><p>为什么继承 RuntimeException 异常？</p><p>大多数业务场景下，我们无需处理 ServiceException 业务异常，而是通过 GlobalExceptionHandler 统一处理，转换成对应的 CommonResult 对象，进而提示给前端即可。<br> 如果真的需要处理 ServiceException 时，通过 <code>try catch</code> 的方式进行主动捕获。</p><h3 id="_3-2-serviceexceptionutil" tabindex="-1"><a class="header-anchor" href="#_3-2-serviceexceptionutil"><span><a href="https://doc.iocoder.cn/exception/#_3-2-serviceexceptionutil" target="_blank" rel="noopener noreferrer">#</a>3.2 ServiceExceptionUtil</span></a></h3><p>在 Service 需抛出业务异常时，通过调用 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-common/src/main/java/cn/iocoder/yudao/framework/common/exception/util/ServiceExceptionUtil.java" target="_blank" rel="noopener noreferrer">ServiceExceptionUtil (opens new window)</a>的 <code>#exception(ErrorCode errorCode, Object... params)</code> 方法来构建 ServiceException 异常，然后使用 <code>throw</code> 进行抛出。代码如下：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// ServiceExceptionUtil.java</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ServiceException</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> exception</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ErrorCode</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> errorCode) { </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/** 省略参数 */</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ServiceException</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> exception</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ErrorCode</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> errorCode</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Object</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">...</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> params</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) { </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/** 省略参数 */</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> }</span></span></code></pre></div><figure><img src="https://doc.iocoder.cn/img/异常处理/06.png" alt="ServiceException 业务异常" tabindex="0" loading="lazy"><figcaption>ServiceException 业务异常</figcaption></figure><p>为什么使用 ServiceExceptionUtil 来构建 ServiceException 异常？</p><p>错误提示的内容，支持使用管理后台进行动态配置，所以通过 ServiceExceptionUtil 获取内容的配置与格式化。</p><h2 id="_4-错误码" tabindex="-1"><a class="header-anchor" href="#_4-错误码"><span><a href="https://doc.iocoder.cn/exception/#_4-%E9%94%99%E8%AF%AF%E7%A0%81" target="_blank" rel="noopener noreferrer">#</a>4. 错误码</span></a></h2><p>错误码，对应 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-common/src/main/java/cn/iocoder/yudao/framework/common/exception/ErrorCode.java" target="_blank" rel="noopener noreferrer">ErrorCode (opens new window)</a>类，枚举项目中的错误，<strong>全局唯一</strong>，方便定位是谁的错、错在哪。</p><figure><img src="https://doc.iocoder.cn/img/异常处理/07.png" alt="错误码" tabindex="0" loading="lazy"><figcaption>错误码</figcaption></figure><h3 id="_4-1-错误码分类" tabindex="-1"><a class="header-anchor" href="#_4-1-错误码分类"><span><a href="https://doc.iocoder.cn/exception/#_4-1-%E9%94%99%E8%AF%AF%E7%A0%81%E5%88%86%E7%B1%BB" target="_blank" rel="noopener noreferrer">#</a>4.1 错误码分类</span></a></h3><p>错误码分成两类：全局的系统错误码、模块的业务错误码。</p><h4 id="_4-1-1-系统错误码" tabindex="-1"><a class="header-anchor" href="#_4-1-1-系统错误码"><span><a href="https://doc.iocoder.cn/exception/#_4-1-1-%E7%B3%BB%E7%BB%9F%E9%94%99%E8%AF%AF%E7%A0%81" target="_blank" rel="noopener noreferrer">#</a>4.1.1 系统错误码</span></a></h4><p>全局的系统错误码，使用 0-999 错误码段，和 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status" target="_blank" rel="noopener noreferrer">HTTP 响应状态码 (opens new window)</a>对应。虽然说，HTTP 响应状态码作为业务使用表达能力偏弱，但是使用在系统层面还是非常不错的。</p><p>系统错误码定义在 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-common/src/main/java/cn/iocoder/yudao/framework/common/exception/enums/GlobalErrorCodeConstants.java" target="_blank" rel="noopener noreferrer">GlobalErrorCodeConstants (opens new window)</a>类，代码如下：</p><figure><img src="https://doc.iocoder.cn/img/异常处理/08.png" alt="GlobalErrorCodeConstants 类" tabindex="0" loading="lazy"><figcaption>GlobalErrorCodeConstants 类</figcaption></figure><h4 id="_4-1-2-业务错误码" tabindex="-1"><a class="header-anchor" href="#_4-1-2-业务错误码"><span><a href="https://doc.iocoder.cn/exception/#_4-1-2-%E4%B8%9A%E5%8A%A1%E9%94%99%E8%AF%AF%E7%A0%81" target="_blank" rel="noopener noreferrer">#</a>4.1.2 业务错误码</span></a></h4><p>模块的业务错误码，按照模块分配错误码的<strong>区间</strong>，避免模块之间的错误码冲突。</p><p>① 业务错误码一共 10 位，分成 4 段，在 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-common/src/main/java/cn/iocoder/yudao/framework/common/exception/enums/ServiceErrorCodeRange.java" target="_blank" rel="noopener noreferrer">ServiceErrorCodeRange (opens new window)</a>分配，规则与代码如下图：</p><figure><img src="https://doc.iocoder.cn/img/异常处理/09.png" alt="ServiceErrorCodeRange 类" tabindex="0" loading="lazy"><figcaption>ServiceErrorCodeRange 类</figcaption></figure><p>② 每个业务模块，定义自己的 ErrorCodeConstants 错误码枚举类。以 <code>yudao-module-system</code> 模块举例子，代码如下：</p><figure><img src="https://doc.iocoder.cn/img/异常处理/10.png" alt="ErrorCodeConstants 类" tabindex="0" loading="lazy"><figcaption>ErrorCodeConstants 类</figcaption></figure><h3 id="_4-2-错误码管理" tabindex="-1"><a class="header-anchor" href="#_4-2-错误码管理"><span><a href="https://doc.iocoder.cn/exception/#_4-2-%E9%94%99%E8%AF%AF%E7%A0%81%E7%AE%A1%E7%90%86" target="_blank" rel="noopener noreferrer">#</a>4.2 错误码管理</span></a></h3><p>在管理后台的 [系统管理 -&gt; 错误码管理] 菜单，可以进行错误码的管理。</p><figure><img src="https://doc.iocoder.cn/img/异常处理/11.png" alt="系统管理 -&gt; 错误码管理" tabindex="0" loading="lazy"><figcaption>系统管理 -&gt; 错误码管理</figcaption></figure><p>启动中的项目会每 60 秒，加载最新的错误码配置。所以，我们在修改完错误码的提示后，无需重启项目。</p><h4 id="_4-2-1-手动添加" tabindex="-1"><a class="header-anchor" href="#_4-2-1-手动添加"><span><a href="https://doc.iocoder.cn/exception/#_4-2-1-%E6%89%8B%E5%8A%A8%E6%B7%BB%E5%8A%A0" target="_blank" rel="noopener noreferrer">#</a>4.2.1 手动添加</span></a></h4><p>点击 [新增] 按钮，进行错误码的手动添加。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/异常处理/13.png" alt="系统管理 -&gt; 错误码管理" tabindex="0" loading="lazy"><figcaption>系统管理 -&gt; 错误码管理</figcaption></figure><h4 id="_4-2-2-自动添加" tabindex="-1"><a class="header-anchor" href="#_4-2-2-自动添加"><span><a href="https://doc.iocoder.cn/exception/#_4-2-2-%E8%87%AA%E5%8A%A8%E6%B7%BB%E5%8A%A0" target="_blank" rel="noopener noreferrer">#</a>4.2.2 自动添加</span></a></h4><p>通过 <code>yudao.error-code.constants-class-list</code> 配置项，设置需要自动添加的 ErrorCodeConstants 错误码枚举类。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/异常处理/12.png" alt=" 配置项" tabindex="0" loading="lazy"><figcaption> 配置项</figcaption></figure><p>项目启动时，会自动扫描对应的 ErrorCodeConstants 中的错误码，自动添加或修改错误码的配置。</p><p><strong>注意</strong>，自动添加的错误码的类型为【自动生成】，一旦在管理后台手动 [编辑] 后，该错误码就不再支持自动修改。</p><p>自动添加是如何实现的？</p><p>参见 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/framework/errorcode/" target="_blank" rel="noopener noreferrer"><code>system/framework/errorcode</code> (opens new window)</a>包的代码。</p>`,80)]))}const p=o(i,[["render",t],["__file","10.异常处理（错误码）.html.vue"]]),l=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/10.%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%EF%BC%88%E9%94%99%E8%AF%AF%E7%A0%81%EF%BC%89.html","title":"异常处理（错误码）","lang":"zh-CN","frontmatter":{"description":"异常处理（错误码） 本章节，将讲解异常相关的统一响应、异常处理、业务异常、错误码这 4 块的内容。 #1. 统一响应 后端提供 RESTful API 给前端时，需要响应前端 API 调用是否成功： 如果成功，成功的数据是什么。后续，前端会将数据渲染到页面上 如果失败，失败的原因是什么。一般，前端会将原因弹出提示给用户 因此，需要有统一响应，而不能是每...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/10.%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%EF%BC%88%E9%94%99%E8%AF%AF%E7%A0%81%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"异常处理（错误码）"}],["meta",{"property":"og:description","content":"异常处理（错误码） 本章节，将讲解异常相关的统一响应、异常处理、业务异常、错误码这 4 块的内容。 #1. 统一响应 后端提供 RESTful API 给前端时，需要响应前端 API 调用是否成功： 如果成功，成功的数据是什么。后续，前端会将数据渲染到页面上 如果失败，失败的原因是什么。一般，前端会将原因弹出提示给用户 因此，需要有统一响应，而不能是每..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86/01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T07:41:53.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-21T07:41:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"异常处理（错误码）\\",\\"image\\":[\\"https://doc.iocoder.cn/img/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86/01.png\\",\\"https://doc.iocoder.cn/img/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86/02.png\\",\\"https://doc.iocoder.cn/img/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86/03.png\\",\\"https://doc.iocoder.cn/img/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86/04.png\\",\\"https://doc.iocoder.cn/img/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86/05.png\\",\\"https://doc.iocoder.cn/img/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86/06.png\\",\\"https://doc.iocoder.cn/img/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86/07.png\\",\\"https://doc.iocoder.cn/img/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86/08.png\\",\\"https://doc.iocoder.cn/img/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86/09.png\\",\\"https://doc.iocoder.cn/img/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86/10.png\\",\\"https://doc.iocoder.cn/img/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86/11.png\\",\\"https://doc.iocoder.cn/img/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86/13.png\\",\\"https://doc.iocoder.cn/img/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86/12.png\\"],\\"dateModified\\":\\"2024-11-21T07:41:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#1. 统一响应","slug":"_1-统一响应","link":"#_1-统一响应","children":[{"level":3,"title":"#1.1 CommonResult","slug":"_1-1-commonresult","link":"#_1-1-commonresult","children":[]},{"level":3,"title":"#1.2 使用 @ControllerAdvice ？","slug":"_1-2-使用-controlleradvice","link":"#_1-2-使用-controlleradvice","children":[]}]},{"level":2,"title":"#2. 异常处理","slug":"_2-异常处理","link":"#_2-异常处理","children":[{"level":3,"title":"#2.1 Spring MVC 的异常","slug":"_2-1-spring-mvc-的异常","link":"#_2-1-spring-mvc-的异常","children":[]},{"level":3,"title":"#2.2 Filter 的异常","slug":"_2-2-filter-的异常","link":"#_2-2-filter-的异常","children":[]}]},{"level":2,"title":"#3. 业务异常","slug":"_3-业务异常","link":"#_3-业务异常","children":[{"level":3,"title":"#3.1 ServiceException","slug":"_3-1-serviceexception","link":"#_3-1-serviceexception","children":[]},{"level":3,"title":"#3.2 ServiceExceptionUtil","slug":"_3-2-serviceexceptionutil","link":"#_3-2-serviceexceptionutil","children":[]}]},{"level":2,"title":"#4. 错误码","slug":"_4-错误码","link":"#_4-错误码","children":[{"level":3,"title":"#4.1 错误码分类","slug":"_4-1-错误码分类","link":"#_4-1-错误码分类","children":[]},{"level":3,"title":"#4.2 错误码管理","slug":"_4-2-错误码管理","link":"#_4-2-错误码管理","children":[]}]}],"git":{"createdTime":1732174913000,"updatedTime":1732174913000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":7.54,"words":2263},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/2.后端手册/10.异常处理（错误码）.md","localizedDate":"2024年11月21日","excerpt":"\\n<p>本章节，将讲解异常相关的统一响应、异常处理、业务异常、错误码这 4 块的内容。</p>\\n<h2><a class=\\"header-anchor\\" href=\\"#_1-统一响应\\"><span></span></a><a href=\\"https://doc.iocoder.cn/exception/#_1-%E7%BB%9F%E4%B8%80%E5%93%8D%E5%BA%94\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">#</a>1. 统一响应</h2>\\n<p>后端提供 RESTful API 给前端时，需要响应前端 API 调用是否成功：</p>","autoDesc":true}');export{p as comp,l as data};
