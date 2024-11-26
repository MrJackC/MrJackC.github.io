import{_ as o,c as t,a as r,o as n}from"./app-JRvFIbSa.js";const a={};function i(s,e){return n(),t("div",null,e[0]||(e[0]=[r('<h1 id="oauth-2-0-sso-单点登录" tabindex="-1"><a class="header-anchor" href="#oauth-2-0-sso-单点登录"><span>OAuth 2.0（SSO 单点登录)</span></a></h1><h2 id="oauth-2-0-是什么" tabindex="-1"><a class="header-anchor" href="#oauth-2-0-是什么"><span><a href="https://doc.iocoder.cn/oauth2/#oauth-2-0-%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noopener noreferrer">#</a>OAuth 2.0 是什么？</span></a></h2><p>OAuth 2.0 的概念讲解，可以阅读如下三篇文章：</p><ul><li><a href="https://www.iocoder.cn/Fight/ruanyifeng-oauth_2_0/?self" target="_blank" rel="noopener noreferrer">《理解 OAuth 2.0》(opens new window)</a></li><li><a href="https://www.iocoder.cn/Fight/ruanyifeng-oauth_design/?self" target="_blank" rel="noopener noreferrer">《OAuth 2.0 的一个简单解释》(opens new window)</a></li><li><a href="https://www.iocoder.cn/Fight/ruanyifeng-oauth-grant-types/?self" target="_blank" rel="noopener noreferrer">《OAuth 2.0 的四种方式》(opens new window)</a></li></ul><p>重点是理解 <strong>授权码模式</strong> 和 <strong>密码模式</strong>，它们是最常用的两种授权模式。</p><p>本文，我们也会基于它们，分别实现 SSO 单点登录。</p><h2 id="oauth-2-0-授权模式的选择" tabindex="-1"><a class="header-anchor" href="#oauth-2-0-授权模式的选择"><span><a href="https://doc.iocoder.cn/oauth2/#oauth-2-0-%E6%8E%88%E6%9D%83%E6%A8%A1%E5%BC%8F%E7%9A%84%E9%80%89%E6%8B%A9" target="_blank" rel="noopener noreferrer">#</a>OAuth 2.0 授权模式的选择？</span></a></h2><p>授权模式的选择，其实非常简单，总结起来就是一张图：</p><figure><img src="https://doc.iocoder.cn/img/OAuth2/授权模式的选择.png" alt="授权模式的选择" tabindex="0" loading="lazy"><figcaption>授权模式的选择</figcaption></figure><p>问题一：什么场景下，使用客户端模式（Client Credentials）？</p><p>如果令牌拥有者是<strong>机器</strong>的情况下，那就使用客户端模式。 例如说：</p><ul><li>开发了一个开放平台，提供给其它外部服务调用</li><li>开发了一个 RPC 服务，提供给其它内部服务调用</li></ul><p>实际的案例，我们接入微信公众号时，会使用 <code>appid</code> 和 <code>secret</code> 参数，<a href="https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_access_token.html" target="_blank" rel="noopener noreferrer">获取 Access token (opens new window)</a>访问令牌。</p><p>问题二：什么场景下，使用密码模式（Resource Owner Password Credentials）？</p><p>接入的 Client 客户端，是属于<strong>自己</strong>的情况下，可以使用密码模式。 例如说：</p><ul><li>客户端是你自己公司的 App 或网页，然后授权服务也是你公司的</li></ul><p>不过，如果客户端是<strong>第三方</strong>的情况下，使用密码模式的话，该客户端是可以拿到用户的账号、密码，存在安全的风险，此时可以考虑使用授权码或简化模式。</p><p>问题三：什么场景下，使用授权码模式（Authorization Code）？</p><p>接入的 Client 客户端，是属于<strong>第三方</strong>的情况下，可以使用授权码模式。例如说：</p><ul><li>客户端是你自己公司的 App 或网页，作为第三方，接入 <a href="https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html" target="_blank" rel="noopener noreferrer">微信 (opens new window)</a>、<a href="https://wiki.connect.qq.com/oauth2-0%E7%AE%80%E4%BB%8B" target="_blank" rel="noopener noreferrer">QQ (opens new window)</a>、<a href="https://open.dingtalk.com/document/mobile-app-guide/mobile-application-access" target="_blank" rel="noopener noreferrer">钉钉 (opens new window)</a>等等进行 OAuth 2.0 登录</li></ul><p>当然，如果客户端是<strong>自己</strong>的情况下，也可以采用授权码模式。例如说：</p><ul><li>客户端是腾讯旗下的各种游戏，可使用微信、QQ，接入 <a href="https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html" target="_blank" rel="noopener noreferrer">微信 (opens new window)</a>、<a href="https://wiki.connect.qq.com/oauth2-0%E7%AE%80%E4%BB%8B" target="_blank" rel="noopener noreferrer">QQ (opens new window)</a>等等进行 OAuth 2.0 登录</li><li>客户端是公司内的各种管理后台（ERP、OA、CRM 等），跳转到统一的 SSO 单点登录，使用授权码模式进行授权</li></ul><p>问题四：什么场景下，使用简化模式（Implicit）？</p><p>简化模式，<strong>简化</strong> 的是授权码模式的流程的 <strong>第二步</strong>，差异在于：</p><ul><li>授权码模式：授权完成后，获得的是 code 授权码，需要 Server Side 服务端使用该授权码，再向授权服务器获取 Access Token 访问令牌</li><li>简化模式：授权完成后，Client Side 客户端直接获得 Access Token 访问令牌</li></ul><p>暂时没有特别好的案例，感兴趣可以看看如下文档，也可以不看：</p><ul><li><a href="https://wiki.connect.qq.com/%E5%BC%80%E5%8F%91%E6%94%BB%E7%95%A5_client-side" target="_blank" rel="noopener noreferrer">《QQ OAuth 2.0 开发指定 —— 开发攻略_Client-side》(opens new window)</a></li><li><a href="http://developer.baidu.com/wiki/index.php?title=docs/oauth/implicit" target="_blank" rel="noopener noreferrer">《百度 OAuth —— Implicit Grant 授权》(opens new window)</a></li></ul><p>问题五：该项目中，使用了哪些授权模式？</p><figure><img src="https://doc.iocoder.cn/img/OAuth2/项目使用的授权模式.png" alt="项目使用的授权模式" tabindex="0" loading="lazy"><figcaption>项目使用的授权模式</figcaption></figure><p>如上图所示，分成 <strong>外部授权</strong> 和 <strong>内部登录</strong> 两种方式。</p><p>① 红色的“外部授权”：基于【授权码模式】，实现 SSO 单点登录，将用户授权给接入的客户端。客户端可以是内部的其它管理系统，也可以是外部的第三方。</p><p>② 绿色的“内部登录”：管理后台的登录接口，还是采用传统的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/controller/admin/auth/AuthController.java#L61-L67" target="_blank" rel="noopener noreferrer"><code>/admin-api/system/auth/login</code> (opens new window)</a>账号密码登录，并没有使用【密码模式】，主要考虑降低大家的学习成本，如果没有将用户授权给其它系统的情况下，这样做已经可以很好的满足业务的需要。当然，这里也可以将管理后台作为一个客户端，使用【密码模式】进行授权。</p><p>另外，考虑到 OAuth 2.0 使用的访问令牌 + 刷新令牌可以提供更好的安全性，所以即使是传统的账号密码登录，也复用了它作为令牌的实现。</p><h2 id="oauth-2-0-技术选型" tabindex="-1"><a class="header-anchor" href="#oauth-2-0-技术选型"><span><a href="https://doc.iocoder.cn/oauth2/#oauth-2-0-%E6%8A%80%E6%9C%AF%E9%80%89%E5%9E%8B" target="_blank" rel="noopener noreferrer">#</a>OAuth 2.0 技术选型？</span></a></h2><p>实现 OAuth 2.0 的功能，一般采用 <a href="https://spring.io/projects/spring-security-oauth" target="_blank" rel="noopener noreferrer">Spring Security OAuth (opens new window)</a>或 <a href="https://spring.io/projects/spring-authorization-server" target="_blank" rel="noopener noreferrer">Spring Authorization Server (opens new window)</a>(SAS) 框架，前者已废弃，被后者所替代。但是使用它们，会面临三大问题：</p><ul><li>学习成本大：SAS 是新出的框架，入门容易精通难，引入项目中需要花费 1-2 周深入学习</li><li>排查问题难：使用碰到问题时，往往需要调试到源码层面，团队只有个别人具备这种能力</li><li>定制成本高：根据业务需要，想要在 SAS 上定制功能，对源码要有不错的掌控力，难度可能过大</li></ul><p>⚔ 因此，项目参考多个 OAuth 2.0 框架，<strong>自研</strong>实现 OAuth 2.0 的功能，具备学习成本小、排查问题容易、定制成本低的优点，支持多种授权模式，并内置 SSO 单点登录的功能。</p><p>友情提示：具备一定规模的互联网公司，基本不会直接采用 Spring Security OAuth 或 Spring Authorization Server 框架，也是采用自研的方式，更好的满足自身的业务需求与技术拓展。</p><p>🙂 另外，通过学习项目的 OAuth 2.0 实现，可以进一步加深对 OAuth 2.0 的理解，知其然而不知其所以然！</p><p>最终实现的整体架构，如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/OAuth2/实现架构图.png" alt="整体架构" tabindex="0" loading="lazy"><figcaption>整体架构</figcaption></figure><p>详细的代码实现，我们在视频中进行讲解。</p><h2 id="如何实现-sso-单点登录" tabindex="-1"><a class="header-anchor" href="#如何实现-sso-单点登录"><span><a href="https://doc.iocoder.cn/oauth2/#%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0-sso-%E5%8D%95%E7%82%B9%E7%99%BB%E5%BD%95" target="_blank" rel="noopener noreferrer">#</a>如何实现 SSO 单点登录？</span></a></h2><h3 id="实战一-基于授权码模式-实现-sso-单点登录" tabindex="-1"><a class="header-anchor" href="#实战一-基于授权码模式-实现-sso-单点登录"><span><a href="https://doc.iocoder.cn/oauth2/#%E5%AE%9E%E6%88%98%E4%B8%80-%E5%9F%BA%E4%BA%8E%E6%8E%88%E6%9D%83%E7%A0%81%E6%A8%A1%E5%BC%8F-%E5%AE%9E%E7%8E%B0-sso-%E5%8D%95%E7%82%B9%E7%99%BB%E5%BD%95" target="_blank" rel="noopener noreferrer">#</a>实战一：基于授权码模式，实现 SSO 单点登录</span></a></h3><p>示例代码见 <a href="https://github.com/YunaiV/ruoyi-vue-pro/tree/master/yudao-example/yudao-sso-demo-by-code" target="_blank" rel="noopener noreferrer">https://github.com/YunaiV/ruoyi-vue-pro/tree/master/yudao-example/yudao-sso-demo-by-code (opens new window)</a>地址，整体流程如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/OAuth2/授权码模式的单点登录.png" alt="整体流程" tabindex="0" loading="lazy"><figcaption>整体流程</figcaption></figure><p>具体的使用流程如下：</p><p><strong>① 第一步</strong>，分别启动 <code>ruoyi-vue-pro</code> 项目的前端和后端。注意，前端需要使用 Vue2 版本，因为 Vue3 版本暂时没有实现 SSO 页面。</p><p><strong>② 第二步</strong>，访问 <a href="http://127.0.0.1:1024/system/oauth2/oauth2/application" target="_blank" rel="noopener noreferrer">系统管理 -&gt; OAuth 2.0 -&gt; 应用管理 (opens new window)</a>菜单，新增一个应用（客户端），信息如下图：</p><figure><img src="https://doc.iocoder.cn/img/OAuth2/授权码模式的客户端信息.png" alt="授权码模式的客户端信息" tabindex="0" loading="lazy"><figcaption>授权码模式的客户端信息</figcaption></figure><ul><li>客户端编号：<code>yudao-sso-demo-by-code</code></li><li>客户端密钥：<code>test</code></li><li>应用名：<code>基于授权码模式，如何实现 SSO 单点登录？</code></li><li>授权类型：<code>authorization_code</code>、<code>refresh_token</code></li><li>授权范围：<code>user.read</code>、<code>user.write</code></li><li>可重定向的 URI 地址：<code>http://127.0.0.1:18080</code></li></ul><p>ps：如果已经有这个客户端，可以不用新增。</p><p><strong>③ 第三步</strong>，运行 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-example/yudao-sso-demo-by-code/src/main/java/cn/iocoder/yudao/ssodemo/SSODemoApplication.java" target="_blank" rel="noopener noreferrer">SSODemoApplication (opens new window)</a>类，启动接入方的项目，它已经包含前端和后端部分。启动成功的日志如下：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2022-10-01</span><span style="color:#98C379;--shiki-dark:#98C379;"> 21:24:35.572</span><span style="color:#98C379;--shiki-dark:#98C379;">  INFO</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 60265</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> ---</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [           </span><span style="color:#98C379;--shiki-dark:#98C379;">main]</span><span style="color:#98C379;--shiki-dark:#98C379;"> o.s.b.w.embedded.tomcat.TomcatWebServer</span><span style="color:#98C379;--shiki-dark:#98C379;">  :</span><span style="color:#98C379;--shiki-dark:#98C379;"> Tomcat</span><span style="color:#98C379;--shiki-dark:#98C379;"> started</span><span style="color:#98C379;--shiki-dark:#98C379;"> on</span><span style="color:#98C379;--shiki-dark:#98C379;"> port</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">s</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#98C379;--shiki-dark:#98C379;">:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 18080</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (http) with context path </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;&#39;</span></span></code></pre></div><p><strong>④ 第四步</strong>，浏览器访问 <a href="http://127.0.0.1:18080/index.html" target="_blank" rel="noopener noreferrer">http://127.0.0.1:18080/index.html (opens new window)</a>地址，进入接入方的 index.html 首页。因为暂未登录，可以点击「跳转」按钮，跳转到 <code>ruoyi-vue-pro</code> 项目的 SSO 单点登录页。</p><figure><img src="https://doc.iocoder.cn/img/OAuth2/授权码模式的未登录首页.png" alt="授权码模式的未登录首页" tabindex="0" loading="lazy"><figcaption>授权码模式的未登录首页</figcaption></figure><p>疑问：为什么没有跳转到 SSO 单点登录页，而是跳转到 ruoyi-vue-pro 项目的登录页？</p><p>因为在 <code>ruoyi-vue-pro</code> 项目也未登录，所以先跳转到该项目的登录页，使用账号密码进行登录。登录完成后，会跳转回 SSO 单点登录页，继续完成 OAuth 2.0 的授权流程。</p><p><strong>⑤ 第五步</strong>，勾选 &quot;访问你的个人信息&quot; 和 &quot;修改你的个人信息&quot;，点击「同意授权」按钮，完成 code 授权码的申请。</p><figure><img src="https://doc.iocoder.cn/img/OAuth2/授权码模式的同意授权.png" alt="同意授权" tabindex="0" loading="lazy"><figcaption>同意授权</figcaption></figure><p><strong>⑥ 第六步</strong>，完成授权后，会跳转到接入方的 callback.html 回调页，并在 URL 上可以看到 code 授权码。</p><figure><img src="https://doc.iocoder.cn/img/OAuth2/授权码模式的回调跳转.png" alt="授权码模式的回调跳转" tabindex="0" loading="lazy"><figcaption>授权码模式的回调跳转</figcaption></figure><p><strong>⑦ 第七步</strong>，点击「确认」按钮，接入方的前端会使用 code 授权码，向接入方的后端获取 accessToken 访问令牌。</p><p>而接入方的后端，使用接收到的 code 授权码，通过调用 <code>ruoyi-vue-pro</code> 项目的后端，获取到 accessToken 访问令牌，并最终返回给接入方的前端。</p><p><strong>⑧ 第八步</strong>，在接入方的前端拿到 accessToken 访问令牌后，跳转回自己的 index.html 首页，并进一步从 <code>ruoyi-vue-pro</code> 项目获取到该用户的昵称等个人信息。后续，你可以执行「修改昵称」、「刷新令牌」、「退出登录」等操作。</p><figure><img src="https://doc.iocoder.cn/img/OAuth2/授权码模式的登录后首页.png" alt="授权码模式的登录后首页" tabindex="0" loading="lazy"><figcaption>授权码模式的登录后首页</figcaption></figure><hr><p>示例代码的具体实现，与详细的解析，可以观看如下视频：</p><ul><li><a href="https://t.zsxq.com/06fUne6yZ" target="_blank" rel="noopener noreferrer">02、基于授权码模式，如何实现 SSO 单点登录？(opens new window)</a></li><li><a href="https://t.zsxq.com/06iuNRvjM" target="_blank" rel="noopener noreferrer">03、请求时，如何校验 accessToken 访问令牌？(opens new window)</a></li><li><a href="https://t.zsxq.com/06jAqFimu" target="_blank" rel="noopener noreferrer">04、访问令牌过期时，如何刷新 Token 令牌？(opens new window)</a></li><li><a href="https://t.zsxq.com/06ne6e6aE" target="_blank" rel="noopener noreferrer">05、登录成功后，如何获得用户信息？(opens new window)</a></li><li><a href="https://t.zsxq.com/06fUJIUfq" target="_blank" rel="noopener noreferrer">06、退出时，如何删除 Token 令牌？(opens new window)</a></li></ul><h3 id="实战二-基于密码模式-实现-sso-登录" tabindex="-1"><a class="header-anchor" href="#实战二-基于密码模式-实现-sso-登录"><span><a href="https://doc.iocoder.cn/oauth2/#%E5%AE%9E%E6%88%98%E4%BA%8C-%E5%9F%BA%E4%BA%8E%E5%AF%86%E7%A0%81%E6%A8%A1%E5%BC%8F-%E5%AE%9E%E7%8E%B0-sso-%E7%99%BB%E5%BD%95" target="_blank" rel="noopener noreferrer">#</a>实战二：基于密码模式，实现 SSO 登录</span></a></h3><p>示例代码见 <a href="https://github.com/YunaiV/ruoyi-vue-pro/tree/master/yudao-example/yudao-sso-demo-by-password" target="_blank" rel="noopener noreferrer">https://github.com/YunaiV/ruoyi-vue-pro/tree/master/yudao-example/yudao-sso-demo-by-password (opens new window)</a>地址，整体流程如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/OAuth2/密码模式的单点登录.png" alt="整体流程" tabindex="0" loading="lazy"><figcaption>整体流程</figcaption></figure><p>具体的使用流程如下：</p><p><strong>① 第一步</strong>，分别启动 <code>ruoyi-vue-pro</code> 项目的前端和后端。注意，前端需要使用 Vue2 版本，因为 Vue3 版本暂时没有实现 SSO 页面。</p><p><strong>② 第二步</strong>，访问 <a href="http://127.0.0.1:1024/system/oauth2/oauth2/application" target="_blank" rel="noopener noreferrer">系统管理 -&gt; OAuth 2.0 -&gt; 应用管理 (opens new window)</a>菜单，新增一个应用（客户端），信息如下图：</p><figure><img src="https://doc.iocoder.cn/img/OAuth2/密码模式的客户端信息.png" alt="密码模式的客户端信息" tabindex="0" loading="lazy"><figcaption>密码模式的客户端信息</figcaption></figure><ul><li>客户端编号：<code>yudao-sso-demo-by-password</code></li><li>客户端密钥：<code>test</code></li><li>应用名：<code>基于密码模式，如何实现 SSO 单点登录？</code></li><li>授权类型：<code>password</code>、<code>refresh_token</code></li><li>授权范围：<code>user.read</code>、<code>user.write</code></li><li>可重定向的 URI 地址：<code>http://127.0.0.1:18080</code></li></ul><p>ps：如果已经有这个客户端，可以不用新增。</p><p><strong>③ 第三步</strong>，运行 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-example/yudao-sso-demo-by-password/src/main/java/cn/iocoder/yudao/ssodemo/SSODemoApplication.java" target="_blank" rel="noopener noreferrer">SSODemoApplication (opens new window)</a>类，启动接入方的项目，它已经包含前端和后端部分。启动成功的日志如下：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2022-10-04</span><span style="color:#98C379;--shiki-dark:#98C379;"> 21:24:35.572</span><span style="color:#98C379;--shiki-dark:#98C379;">  INFO</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 60265</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> ---</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [           </span><span style="color:#98C379;--shiki-dark:#98C379;">main]</span><span style="color:#98C379;--shiki-dark:#98C379;"> o.s.b.w.embedded.tomcat.TomcatWebServer</span><span style="color:#98C379;--shiki-dark:#98C379;">  :</span><span style="color:#98C379;--shiki-dark:#98C379;"> Tomcat</span><span style="color:#98C379;--shiki-dark:#98C379;"> started</span><span style="color:#98C379;--shiki-dark:#98C379;"> on</span><span style="color:#98C379;--shiki-dark:#98C379;"> port</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">s</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#98C379;--shiki-dark:#98C379;">:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 18080</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (http) with context path </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;&#39;</span></span></code></pre></div><p><strong>④ 第四步</strong>，浏览器访问 <a href="http://127.0.0.1:18080/index.html" target="_blank" rel="noopener noreferrer">http://127.0.0.1:18080/index.html (opens new window)</a>地址，进入接入方的 index.html 首页。因为暂未登录，可以点击「跳转」按钮，跳转到 login.html 登录页。</p><figure><img src="https://doc.iocoder.cn/img/OAuth2/密码模式的未登录首页.png" alt="密码模式的未登录首页" tabindex="0" loading="lazy"><figcaption>密码模式的未登录首页</figcaption></figure><figure><img src="https://doc.iocoder.cn/img/OAuth2/密码模式的未登录首页2.png" alt="密码模式的未登录首页2" tabindex="0" loading="lazy"><figcaption>密码模式的未登录首页2</figcaption></figure><p><strong>⑤ 第五步</strong>，点击「登录」按钮，调用 <code>ruoyi-vue-pro</code> 项目的后端，获取到 accessToken 访问令牌，完成登录操作。</p><figure><img src="https://doc.iocoder.cn/img/OAuth2/密码模式的发起登录.png" alt="密码模式的发起登录.png" tabindex="0" loading="lazy"><figcaption>密码模式的发起登录.png</figcaption></figure><p><strong>⑥ 第六步</strong>，登录完成后，跳转回自己的 index.html 首页，并进一步从 <code>ruoyi-vue-pro</code> 项目获取到该用户的昵称等个人信息。后续，你可以执行「修改昵称」、「刷新令牌」、「退出登录」等操作。</p><figure><img src="https://doc.iocoder.cn/img/OAuth2/密码模式的登录后首页.png" alt="密码模式的登录后首页" tabindex="0" loading="lazy"><figcaption>密码模式的登录后首页</figcaption></figure><hr><p>示例代码的具体实现，与详细的解析，可以观看如下视频：</p><ul><li><a href="https://t.zsxq.com/06rrrzBAu" target="_blank" rel="noopener noreferrer">07、基于密码模式，如何实现 SSO 单点登录？(opens new window)</a></li></ul><h2 id="oauth-2-0-表结构" tabindex="-1"><a class="header-anchor" href="#oauth-2-0-表结构"><span><a href="https://doc.iocoder.cn/oauth2/#oauth-2-0-%E8%A1%A8%E7%BB%93%E6%9E%84" target="_blank" rel="noopener noreferrer">#</a>OAuth 2.0 表结构</span></a></h2><figure><img src="https://doc.iocoder.cn/img/OAuth2/表结构.png" alt="表结构" tabindex="0" loading="lazy"><figcaption>表结构</figcaption></figure><p>每个表的具体设计，与详细的解析，可以观看如下视频：</p><ul><li><a href="https://t.zsxq.com/06ubEmeII" target="_blank" rel="noopener noreferrer">08、如何实现客户端的管理？(opens new window)</a></li><li><a href="https://t.zsxq.com/06qjm2rbQ" target="_blank" rel="noopener noreferrer">09、单点登录界面，如何进行初始化？(opens new window)</a></li><li><a href="https://t.zsxq.com/06AEQfA2j" target="_blank" rel="noopener noreferrer">10、单点登录界面，如何进行【手动】授权？(opens new window)</a></li><li><a href="https://t.zsxq.com/06JIQvrrN" target="_blank" rel="noopener noreferrer">11、单点登录界面，如何进行【自动】授权？(opens new window)</a></li><li><a href="https://t.zsxq.com/06jEQZNfE" target="_blank" rel="noopener noreferrer">12、基于【授权码】模式，如何获得 Token 令牌？(opens new window)</a></li><li><a href="https://t.zsxq.com/06aEynUZF" target="_blank" rel="noopener noreferrer">13、基于【密码】模式，如何获得 Token 令牌？(opens new window)</a></li><li><a href="https://t.zsxq.com/06MbM3n2v" target="_blank" rel="noopener noreferrer">14、如何校验、刷新、删除访问令牌？</a></li></ul>',94)]))}const l=o(a,[["render",i],["__file","7.OAuth 2.0（SSO 单点登录).html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/7.OAuth%202.0%EF%BC%88SSO%20%E5%8D%95%E7%82%B9%E7%99%BB%E5%BD%95).html","title":"OAuth 2.0（SSO 单点登录)","lang":"zh-CN","frontmatter":{"description":"OAuth 2.0（SSO 单点登录) #OAuth 2.0 是什么？ OAuth 2.0 的概念讲解，可以阅读如下三篇文章： 《理解 OAuth 2.0》(opens new window) 《OAuth 2.0 的一个简单解释》(opens new window) 《OAuth 2.0 的四种方式》(opens new window) 重点是理解 ...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/7.OAuth%202.0%EF%BC%88SSO%20%E5%8D%95%E7%82%B9%E7%99%BB%E5%BD%95).html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"OAuth 2.0（SSO 单点登录)"}],["meta",{"property":"og:description","content":"OAuth 2.0（SSO 单点登录) #OAuth 2.0 是什么？ OAuth 2.0 的概念讲解，可以阅读如下三篇文章： 《理解 OAuth 2.0》(opens new window) 《OAuth 2.0 的一个简单解释》(opens new window) 《OAuth 2.0 的四种方式》(opens new window) 重点是理解 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/OAuth2/%E6%8E%88%E6%9D%83%E6%A8%A1%E5%BC%8F%E7%9A%84%E9%80%89%E6%8B%A9.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T07:41:53.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-21T07:41:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"OAuth 2.0（SSO 单点登录)\\",\\"image\\":[\\"https://doc.iocoder.cn/img/OAuth2/%E6%8E%88%E6%9D%83%E6%A8%A1%E5%BC%8F%E7%9A%84%E9%80%89%E6%8B%A9.png\\",\\"https://doc.iocoder.cn/img/OAuth2/%E9%A1%B9%E7%9B%AE%E4%BD%BF%E7%94%A8%E7%9A%84%E6%8E%88%E6%9D%83%E6%A8%A1%E5%BC%8F.png\\",\\"https://doc.iocoder.cn/img/OAuth2/%E5%AE%9E%E7%8E%B0%E6%9E%B6%E6%9E%84%E5%9B%BE.png\\",\\"https://doc.iocoder.cn/img/OAuth2/%E6%8E%88%E6%9D%83%E7%A0%81%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%8D%95%E7%82%B9%E7%99%BB%E5%BD%95.png\\",\\"https://doc.iocoder.cn/img/OAuth2/%E6%8E%88%E6%9D%83%E7%A0%81%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%BF%A1%E6%81%AF.png\\",\\"https://doc.iocoder.cn/img/OAuth2/%E6%8E%88%E6%9D%83%E7%A0%81%E6%A8%A1%E5%BC%8F%E7%9A%84%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5.png\\",\\"https://doc.iocoder.cn/img/OAuth2/%E6%8E%88%E6%9D%83%E7%A0%81%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%90%8C%E6%84%8F%E6%8E%88%E6%9D%83.png\\",\\"https://doc.iocoder.cn/img/OAuth2/%E6%8E%88%E6%9D%83%E7%A0%81%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%9B%9E%E8%B0%83%E8%B7%B3%E8%BD%AC.png\\",\\"https://doc.iocoder.cn/img/OAuth2/%E6%8E%88%E6%9D%83%E7%A0%81%E6%A8%A1%E5%BC%8F%E7%9A%84%E7%99%BB%E5%BD%95%E5%90%8E%E9%A6%96%E9%A1%B5.png\\",\\"https://doc.iocoder.cn/img/OAuth2/%E5%AF%86%E7%A0%81%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%8D%95%E7%82%B9%E7%99%BB%E5%BD%95.png\\",\\"https://doc.iocoder.cn/img/OAuth2/%E5%AF%86%E7%A0%81%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%BF%A1%E6%81%AF.png\\",\\"https://doc.iocoder.cn/img/OAuth2/%E5%AF%86%E7%A0%81%E6%A8%A1%E5%BC%8F%E7%9A%84%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5.png\\",\\"https://doc.iocoder.cn/img/OAuth2/%E5%AF%86%E7%A0%81%E6%A8%A1%E5%BC%8F%E7%9A%84%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B52.png\\",\\"https://doc.iocoder.cn/img/OAuth2/%E5%AF%86%E7%A0%81%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%8F%91%E8%B5%B7%E7%99%BB%E5%BD%95.png\\",\\"https://doc.iocoder.cn/img/OAuth2/%E5%AF%86%E7%A0%81%E6%A8%A1%E5%BC%8F%E7%9A%84%E7%99%BB%E5%BD%95%E5%90%8E%E9%A6%96%E9%A1%B5.png\\",\\"https://doc.iocoder.cn/img/OAuth2/%E8%A1%A8%E7%BB%93%E6%9E%84.png\\"],\\"dateModified\\":\\"2024-11-21T07:41:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#OAuth 2.0 是什么？","slug":"oauth-2-0-是什么","link":"#oauth-2-0-是什么","children":[]},{"level":2,"title":"#OAuth 2.0 授权模式的选择？","slug":"oauth-2-0-授权模式的选择","link":"#oauth-2-0-授权模式的选择","children":[]},{"level":2,"title":"#OAuth 2.0 技术选型？","slug":"oauth-2-0-技术选型","link":"#oauth-2-0-技术选型","children":[]},{"level":2,"title":"#如何实现 SSO 单点登录？","slug":"如何实现-sso-单点登录","link":"#如何实现-sso-单点登录","children":[{"level":3,"title":"#实战一：基于授权码模式，实现 SSO 单点登录","slug":"实战一-基于授权码模式-实现-sso-单点登录","link":"#实战一-基于授权码模式-实现-sso-单点登录","children":[]},{"level":3,"title":"#实战二：基于密码模式，实现 SSO 登录","slug":"实战二-基于密码模式-实现-sso-登录","link":"#实战二-基于密码模式-实现-sso-登录","children":[]}]},{"level":2,"title":"#OAuth 2.0 表结构","slug":"oauth-2-0-表结构","link":"#oauth-2-0-表结构","children":[]}],"git":{"createdTime":1732174913000,"updatedTime":1732174913000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":11.75,"words":3525},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/2.后端手册/7.OAuth 2.0（SSO 单点登录).md","localizedDate":"2024年11月21日","excerpt":"\\n<h2><a class=\\"header-anchor\\" href=\\"#oauth-2-0-是什么\\"><span></span></a><a href=\\"https://doc.iocoder.cn/oauth2/#oauth-2-0-%E6%98%AF%E4%BB%80%E4%B9%88\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">#</a>OAuth 2.0 是什么？</h2>\\n<p>OAuth 2.0 的概念讲解，可以阅读如下三篇文章：</p>\\n<ul>\\n<li><a href=\\"https://www.iocoder.cn/Fight/ruanyifeng-oauth_2_0/?self\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">《理解 OAuth 2.0》(opens new window)</a></li>\\n<li><a href=\\"https://www.iocoder.cn/Fight/ruanyifeng-oauth_design/?self\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">《OAuth 2.0 的一个简单解释》(opens new window)</a></li>\\n<li><a href=\\"https://www.iocoder.cn/Fight/ruanyifeng-oauth-grant-types/?self\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">《OAuth 2.0 的四种方式》(opens new window)</a></li>\\n</ul>","autoDesc":true}');export{l as comp,c as data};
