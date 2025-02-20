import{_ as t,c as r,a,o as s}from"./app-4x2aIoqi.js";const n={};function l(p,e){return s(),r("div",null,e[0]||(e[0]=[a('<h1 id="restful" tabindex="-1"><a class="header-anchor" href="#restful"><span>RESTful</span></a></h1><h2 id="_1-rest-是什么" tabindex="-1"><a class="header-anchor" href="#_1-rest-是什么"><span>1. REST 是什么</span></a></h2><p>REST（REpresentational State Transfer） 直译就是：抽象状态转移。</p><p>他通过 <strong>URL定位资源，用HTTP动词（GET,POST,DELETE,DETC）描述操作</strong>。</p><ul><li>看Url就知道要什么</li><li>看http method就知道干什么</li><li>看http status code就知道结果如何</li></ul><h2 id="_2-资源是什么" tabindex="-1"><a class="header-anchor" href="#_2-资源是什么"><span>2. 资源是什么</span></a></h2><p>资源是指数据在 REST 架构中如何显示的。将实体作为资源公开，他允许客户端通过HTTP 方法如：GET、POST、PUT、DELETE 等读、写、修改和创建资源</p><h2 id="_3-什么是安全的-rest-操作" tabindex="-1"><a class="header-anchor" href="#_3-什么是安全的-rest-操作"><span>3. 什么是安全的 REST 操作</span></a></h2><p>REST 接口是通过 HTTP 方法完成操作</p><ul><li>一些HTTP操作是安全的，如GET 和 HEAD, 他不能在服务端修改资源</li><li>PUT、POST、和 DELETE 是不安全的，因为他们能修改服务端的资源</li></ul><p>所以，是否安全的界限，在于<strong>是否修改服务端的资源</strong></p><h2 id="_4-什么是幂等操作-为什么幂等操作如此重要" tabindex="-1"><a class="header-anchor" href="#_4-什么是幂等操作-为什么幂等操作如此重要"><span>4. 什么是幂等操作？为什么幂等操作如此重要？</span></a></h2><p>有一些HTTP方法，如：GET,不管你使用多少次他都能产生相同的结果，在没有任何一边影响的情况下，发送多个GET 请求到相同的 URI 将会<strong>产生相同的响应结果</strong>。因此。这就是所谓幂等操作</p><p>换句话说，<strong>POST 方法不是幂等操作</strong>，因为如果发送多个 POST 请求，他将在服务端创建不同资源。但是，假如你用PUT 更新资源，它将是幂等操作</p><h2 id="_5-rest-是可扩展的或说是协同的吗" tabindex="-1"><a class="header-anchor" href="#_5-rest-是可扩展的或说是协同的吗"><span>5. REST 是可扩展的或说是协同的吗？</span></a></h2><p>是的，REST 是可扩展的和可协作的，他既不托管一种特定的技术选择，也不定在客户端或者服务端。你可以用JAVA,C++、Python 来创建 RESTful WEB 服务，也可以在客户端使用他们</p><h2 id="_6-rest-用哪种-http-方法呢" tabindex="-1"><a class="header-anchor" href="#_6-rest-用哪种-http-方法呢"><span>6. REST 用哪种 HTTP 方法呢？</span></a></h2><p>REST 能用任何的 HTTP 方法，但是比较受欢迎的是</p><ul><li>用 GET 来检索服务端资源</li><li>用 POST 来创建服务端资源</li><li>用 PUT 来更新服务端资源</li><li>用 DELETE 来删除服务端资源</li></ul><p>以上四个操作，分别对应日常的 CRUD 操作</p><h2 id="_7-删除的-http-状态返回码是什么" tabindex="-1"><a class="header-anchor" href="#_7-删除的-http-状态返回码是什么"><span>7. 删除的 HTTP 状态返回码是什么？</span></a></h2><p>在删除成功之后，您的 REST API 应该返回什么状态代码，并没有严格的规则，他可以返回200 或204 没有内容</p><ul><li>一般来说，如果删除操作成功，响应主体为空，返回204</li><li>如果删除请求成功且响应体不是空的，则返回 200。</li></ul><h2 id="_8-rest-api-是无状态的吗" tabindex="-1"><a class="header-anchor" href="#_8-rest-api-是无状态的吗"><span>8. REST API 是无状态的吗?</span></a></h2><p>是的， REST API 应该是无状态的，因为他是基于 HTTP 的，他也是无状态的</p><h2 id="_9-rest-安全码-你能做什么来保护他" tabindex="-1"><a class="header-anchor" href="#_9-rest-安全码-你能做什么来保护他"><span>9. REST 安全码？你能做什么来保护他</span></a></h2><p>安全是一个宽泛的术语，他可能意味着消息的安全性，这是通过<strong>认证和授权提供的加密和访问限制提供</strong>的</p><blockquote><p>REST 通常不是安全的，但是您可以通过使用 Spring Security 或者Shiro 来保护它</p></blockquote><h2 id="_10-resttemplate-的优势是什么" tabindex="-1"><a class="header-anchor" href="#_10-resttemplate-的优势是什么"><span>10. RestTemplate 的优势是什么？</span></a></h2><p>在Spring Framework 中，RestTemplate 类是 模板方法模式 的实现。跟其他主流的模板类相似，如 JdbcTemplate 或 JmsTempalte ，它将在客户端简化跟 RESTful Web 服务的集成。正如在 RestTemplate 例子中显示的一样，<strong>你能非常容易地用它来调用 RESTful Web 服务</strong>。</p><h2 id="_11-httpmessageconverter-在-spring-rest-中代表什么" tabindex="-1"><a class="header-anchor" href="#_11-httpmessageconverter-在-spring-rest-中代表什么"><span>11. HttpMessageConverter 在 Spring REST 中代表什么？</span></a></h2><p>HttpMessageConverter 是一种 <strong>策略接口</strong>，他指定了一个转换器，他可以转换 HTTP 请求和响应。Spring REST 用这个接口转换 HTTP 响应到多种格式，例如：JSON 或 XML。</p><p>每个 HttpMessageconverter 实现都有一种或几种相关联的 MIME 协议。Spring 使用 ”Accept“的标头来确定客户端所期待的内容类型</p><p>然后，他将尝试找到一个注册的 HTTPMessageConverter，他能够处理特定的内容类型，并使用它将响应转换成这种格式，然后再将其发送给客户端</p><h2 id="_12-如何创建-httpmessageconverter-的自定义实现来支持一种新的请求-响应" tabindex="-1"><a class="header-anchor" href="#_12-如何创建-httpmessageconverter-的自定义实现来支持一种新的请求-响应"><span>12. 如何创建 HttpMessageConverter 的自定义实现来支持一种新的请求/响应？</span></a></h2><p>我们仅需要创建自定义的 AbstractHttpMessageConverter 的实现、并使用 WebMvcConfigurerAdaper 的 <code>#extendMessageConverters(List&gt; converters)</code> 方法注中册它，该方法可以生成一种新的请求/ 响应类型</p><h2 id="_13-pathvariable-注解-在spring-mvc-做了什么-为什么-rest-在-spring-中如此有用" tabindex="-1"><a class="header-anchor" href="#_13-pathvariable-注解-在spring-mvc-做了什么-为什么-rest-在-spring-中如此有用"><span>13. @PathVariable 注解，在Spring MVC 做了什么？为什么 REST 在 Spring 中如此有用？</span></a></h2><p>@PathVariable 注解，是Spring MVC 中常用的注解之一，它允许您从 URI 读取值，比如查询参数。它使用 Spring 创建 RESTful Web 服务时特别有用，因为在 REST 中，资源标识符是URI 的一部分</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="http://www.spring4all.com/article/1445" target="_blank" rel="noopener noreferrer">排名前20的REST和Spring MVC面试题</a></p>',40)]))}const h=t(n,[["render",l],["__file","spring-y-mvc-restful.html.vue"]]),o=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-mvc-restful.html","title":"RESTful","lang":"zh-CN","frontmatter":{"created":"2024-05-14 07:56","updated":"2024-10-11 16:46","description":"RESTful 1. REST 是什么 REST（REpresentational State Transfer） 直译就是：抽象状态转移。 他通过 URL定位资源，用HTTP动词（GET,POST,DELETE,DETC）描述操作。 看Url就知道要什么 看http method就知道干什么 看http status code就知道结果如何 2. 资...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-mvc-restful.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"RESTful"}],["meta",{"property":"og:description","content":"RESTful 1. REST 是什么 REST（REpresentational State Transfer） 直译就是：抽象状态转移。 他通过 URL定位资源，用HTTP动词（GET,POST,DELETE,DETC）描述操作。 看Url就知道要什么 看http method就知道干什么 看http status code就知道结果如何 2. 资..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RESTful\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. REST 是什么","slug":"_1-rest-是什么","link":"#_1-rest-是什么","children":[]},{"level":2,"title":"2. 资源是什么","slug":"_2-资源是什么","link":"#_2-资源是什么","children":[]},{"level":2,"title":"3. 什么是安全的 REST 操作","slug":"_3-什么是安全的-rest-操作","link":"#_3-什么是安全的-rest-操作","children":[]},{"level":2,"title":"4. 什么是幂等操作？为什么幂等操作如此重要？","slug":"_4-什么是幂等操作-为什么幂等操作如此重要","link":"#_4-什么是幂等操作-为什么幂等操作如此重要","children":[]},{"level":2,"title":"5. REST 是可扩展的或说是协同的吗？","slug":"_5-rest-是可扩展的或说是协同的吗","link":"#_5-rest-是可扩展的或说是协同的吗","children":[]},{"level":2,"title":"6. REST 用哪种 HTTP 方法呢？","slug":"_6-rest-用哪种-http-方法呢","link":"#_6-rest-用哪种-http-方法呢","children":[]},{"level":2,"title":"7. 删除的 HTTP 状态返回码是什么？","slug":"_7-删除的-http-状态返回码是什么","link":"#_7-删除的-http-状态返回码是什么","children":[]},{"level":2,"title":"8. REST API 是无状态的吗?","slug":"_8-rest-api-是无状态的吗","link":"#_8-rest-api-是无状态的吗","children":[]},{"level":2,"title":"9. REST 安全码？你能做什么来保护他","slug":"_9-rest-安全码-你能做什么来保护他","link":"#_9-rest-安全码-你能做什么来保护他","children":[]},{"level":2,"title":"10. RestTemplate 的优势是什么？","slug":"_10-resttemplate-的优势是什么","link":"#_10-resttemplate-的优势是什么","children":[]},{"level":2,"title":"11. HttpMessageConverter 在 Spring REST 中代表什么？","slug":"_11-httpmessageconverter-在-spring-rest-中代表什么","link":"#_11-httpmessageconverter-在-spring-rest-中代表什么","children":[]},{"level":2,"title":"12. 如何创建 HttpMessageConverter 的自定义实现来支持一种新的请求/响应？","slug":"_12-如何创建-httpmessageconverter-的自定义实现来支持一种新的请求-响应","link":"#_12-如何创建-httpmessageconverter-的自定义实现来支持一种新的请求-响应","children":[]},{"level":2,"title":"13. @PathVariable 注解，在Spring MVC 做了什么？为什么 REST 在 Spring 中如此有用？","slug":"_13-pathvariable-注解-在spring-mvc-做了什么-为什么-rest-在-spring-中如此有用","link":"#_13-pathvariable-注解-在spring-mvc-做了什么-为什么-rest-在-spring-中如此有用","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.84,"words":1153},"filePathRelative":"posts/Java/Java框架/Spring/spring-y-mvc-restful.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. REST 是什么</h2>\\n<p>REST（REpresentational State Transfer） 直译就是：抽象状态转移。</p>\\n<p>他通过 <strong>URL定位资源，用HTTP动词（GET,POST,DELETE,DETC）描述操作</strong>。</p>\\n<ul>\\n<li>看Url就知道要什么</li>\\n<li>看http method就知道干什么</li>\\n<li>看http status code就知道结果如何</li>\\n</ul>\\n<h2>2. 资源是什么</h2>\\n<p>资源是指数据在 REST 架构中如何显示的。将实体作为资源公开，他允许客户端通过HTTP 方法如：GET、POST、PUT、DELETE 等读、写、修改和创建资源</p>","autoDesc":true}');export{h as comp,o as data};
