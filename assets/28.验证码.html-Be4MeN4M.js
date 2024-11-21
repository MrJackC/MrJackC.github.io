import{_ as s,c as e,a as n,o}from"./app-CpAF2rca.js";const i={};function r(l,a){return o(),e("div",null,a[0]||(a[0]=[n(`<h1 id="验证码" tabindex="-1"><a class="header-anchor" href="#验证码"><span>验证码</span></a></h1><p>项目基于 <a href="https://gitee.com/anji-plus/captcha" target="_blank" rel="noopener noreferrer">AJ-Captcha (opens new window)</a>实现行为验证码，包含滑动拼图、文字点选两种方式，UI 支持弹出和嵌入两种方式。如下图所示：</p><table><thead><tr><th>滑动拼图</th><th>文字点选</th></tr></thead><tbody><tr><td><img src="https://doc.iocoder.cn/img/验证码/滑动拼图.gif" alt="滑动拼图" loading="lazy"></td><td><img src="https://doc.iocoder.cn/img/验证码/点选文字.gif" alt="点选文字" loading="lazy"></td></tr></tbody></table><p>疑问：为什么采用行为验证码？</p><p>相比传统的「传统字符型验证码」的“展示验证码-填写字符-比对答案”的流程来说，「行为验证码」的“展示验证码-操作-比对答案”的流程，用户只需要使用鼠标产生指定的行为轨迹，不需要键盘手动输入，用户体验更好，更加难以被机器识别，更加安全可靠。</p><h2 id="_1-交互流程" tabindex="-1"><a class="header-anchor" href="#_1-交互流程"><span><a href="https://doc.iocoder.cn/captcha/#_1-%E4%BA%A4%E4%BA%92%E6%B5%81%E7%A8%8B" target="_blank" rel="noopener noreferrer">#</a>1. 交互流程</span></a></h2><figure><img src="https://doc.iocoder.cn/img/验证码/shixu.png" alt="交互流程" tabindex="0" loading="lazy"><figcaption>交互流程</figcaption></figure><ul><li>① 用户访问应用页面，请求显示行为验证码</li><li>② 用户按照提示要求完成验证码拼图/点击</li><li>③ 用户提交表单，前端将第二步的输出一同提交到后台</li><li>④ 验证数据随表单提交到后台后，后台需要调用 <a href="https://gitee.com/anji-plus/captcha/blob/master/core/captcha/src/main/java/com/anji/captcha/service/CaptchaService.java#L39-44" target="_blank" rel="noopener noreferrer">captchaService.verification (opens new window)</a>做二次校验</li><li>⑤ 第 4 步返回校验通过/失败到产品应用后端，再返回到前端</li></ul><h2 id="_2-如何关闭验证码" tabindex="-1"><a class="header-anchor" href="#_2-如何关闭验证码"><span><a href="https://doc.iocoder.cn/captcha/#_2-%E5%A6%82%E4%BD%95%E5%85%B3%E9%97%AD%E9%AA%8C%E8%AF%81%E7%A0%81" target="_blank" rel="noopener noreferrer">#</a>2. 如何关闭验证码</span></a></h2><p>管理后台的登录界面，默认开启验证码。如果需要关闭验证码，操作如下：</p><p>① 后端的 <code>application-local.yaml</code> 配置文件中，将 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-server/src/main/resources/application-local.yaml#L184-L187" target="_blank" rel="noopener noreferrer"><code>yudao.captcha.enabled</code> (opens new window)</a>设置为 <code>false</code>。</p><p>② 如果前端使用 <code>yudao-ui-admin</code> 项目，将 <code>.env.local</code> 配置文件中，将 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-ui-admin/.env.local#L17-L18" target="_blank" rel="noopener noreferrer"><code>VUE_APP_DOC_ENABLE</code> (opens new window)</a>设置为 <code>false</code>。</p><p>如果前端使用 <code>yudao-ui-admin-vue3</code> 项目，将 <code>.env</code> 配置文件中，将 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/.env#L13-L14" target="_blank" rel="noopener noreferrer"><code>VITE_APP_CAPTCHA_ENABLE</code> (opens new window)</a>设置为 <code>false</code>。</p><h2 id="_3-接入场景" tabindex="-1"><a class="header-anchor" href="#_3-接入场景"><span><a href="https://doc.iocoder.cn/captcha/#_3-%E6%8E%A5%E5%85%A5%E5%9C%BA%E6%99%AF" target="_blank" rel="noopener noreferrer">#</a>3. 接入场景</span></a></h2><h3 id="_3-1-后端接入" tabindex="-1"><a class="header-anchor" href="#_3-1-后端接入"><span><a href="https://doc.iocoder.cn/captcha/#_3-1-%E5%90%8E%E7%AB%AF%E6%8E%A5%E5%85%A5" target="_blank" rel="noopener noreferrer">#</a>3.1 后端接入</span></a></h3><p>① <a href="https://github.com/YunaiV/ruoyi-vue-pro/tree/master/yudao-framework/yudao-spring-boot-starter-captcha" target="_blank" rel="noopener noreferrer">yudao-spring-boot-starter-captcha (opens new window)</a>对 AJ-Captcha 进行封装，使用 Redis 存储验证码数据，保证分布式环境下的可用性。</p><blockquote><p>由于 AJ-Captcha 对 Spring Boot 3.X 版本的支持还不完善，所以使用 <a href="https://github.com/xingyuv/captcha-plus" target="_blank" rel="noopener noreferrer">captcha-plus (opens new window)</a>替代，它是基于 AJ-Captcha 进行增强。</p></blockquote><p>使用时，需要在 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/pom.xml#L104-L107" target="_blank" rel="noopener noreferrer"><code>pom.xml</code> (opens new window)</a>引入该依赖，如下所示：</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;cn.iocoder.boot&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;yudao-spring-boot-starter-captcha&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>② 验证码的配置，在 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-server/src/main/resources/application.yaml#L64-L81" target="_blank" rel="noopener noreferrer"><code>application.yaml</code> (opens new window)</a>配置文件中，配置项如下：</p><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">aj</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  captcha</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    jigsaw</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">classpath:images/jigsaw</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 滑动验证，底图路径，不配置将使用默认图片；以 classpath: 开头，取 resource 目录下路径</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    pic-click</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">classpath:images/pic-click</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 滑动验证，底图路径，不配置将使用默认图片；以 classpath: 开头，取 resource 目录下路径</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    cache-type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">redis</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 缓存 local/redis...</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    cache-number</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1000</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # local 缓存的阈值,达到这个值，清除缓存</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    timing-clear</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">180</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # local定时清除过期缓存(单位秒),设置为0代表不执行</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">blockPuzzle</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 验证码类型 default两种都实例化。 blockPuzzle 滑块拼图 clickWord 文字点选</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    water-mark</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">芋道源码</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 右下角水印文字(我的水印)，可使用 https://tool.chinaz.com/tools/unicode.aspx 中文转 Unicode，Linux 可能需要转 unicode</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    interference-options</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 滑动干扰项(0/1/2)</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    req-frequency-limit-enable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">false</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 接口请求次数一分钟限制是否开启 true|false</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    req-get-lock-limit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">5</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 验证失败 5 次，get接口锁定</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    req-get-lock-seconds</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">10</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 验证失败后，锁定时间间隔</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    req-get-minute-limit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">30</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # get 接口一分钟内请求数限制</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    req-check-minute-limit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">60</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # check 接口一分钟内请求数限制</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    req-verify-minute-limit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">60</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # verify 接口一分钟内请求数限制</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想修改验证码的 <strong>图片</strong>，修改 <a href="https://github.com/YunaiV/ruoyi-vue-pro/tree/master/yudao-framework/yudao-spring-boot-starter-captcha/src/main/resources/images" target="_blank" rel="noopener noreferrer">resources/images (opens new window)</a>目录即可。</p><p>③ 验证码的使用，可以参考 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/controller/admin/captcha/CaptchaController.java" target="_blank" rel="noopener noreferrer">CaptchaController (opens new window)</a>和 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/controller/admin/auth/AuthController.java#L61-L67" target="_blank" rel="noopener noreferrer">AuthController (opens new window)</a>两个类的实现代码。</p><h3 id="_3-2-vue2-x-管理后台" tabindex="-1"><a class="header-anchor" href="#_3-2-vue2-x-管理后台"><span><a href="https://doc.iocoder.cn/captcha/#_3-2-vue2-x-%E7%AE%A1%E7%90%86%E5%90%8E%E5%8F%B0" target="_blank" rel="noopener noreferrer">#</a>3.2 Vue2.X 管理后台</span></a></h3><p>① 验证码组件：<a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-ui-admin/src/components/Verifition/" target="_blank" rel="noopener noreferrer">Verifition(opens new window)</a></p><p>② 登录界面的接入：<a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-ui-admin/src/views/login.vue#L91-L93" target="_blank" rel="noopener noreferrer">login.vue(opens new window)</a></p><div class="language-vue" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- 图形验证码 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Verify</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> ref</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;verify&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> :</span><span style="color:#D19A66;--shiki-dark:#D19A66;">captcha-type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;blockPuzzle&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> :</span><span style="color:#D19A66;--shiki-dark:#D19A66;">img-size</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span><span style="color:#E06C75;--shiki-dark:#E06C75;">width</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;400px&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;">height</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;200px&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        @</span><span style="color:#D19A66;--shiki-dark:#D19A66;">success</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">handleLogin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre></div><h3 id="_3-3-vue3-x-管理后台" tabindex="-1"><a class="header-anchor" href="#_3-3-vue3-x-管理后台"><span><a href="https://doc.iocoder.cn/captcha/#_3-3-vue3-x-%E7%AE%A1%E7%90%86%E5%90%8E%E5%8F%B0" target="_blank" rel="noopener noreferrer">#</a>3.3 Vue3.X 管理后台</span></a></h3><p>① 验证码组件：<a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/components/Verifition/" target="_blank" rel="noopener noreferrer">Verifition(opens new window)</a></p><p>② 登录界面的接入：<a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/views/Login/components/LoginForm.vue#L77-L83" target="_blank" rel="noopener noreferrer">LoginForm.vue(opens new window)</a></p><div class="language-vue" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Verify</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">    ref</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;verify&quot;</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">    mode</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;pop&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    :</span><span style="color:#D19A66;--shiki-dark:#D19A66;">captchaType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">captchaType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    :</span><span style="color:#D19A66;--shiki-dark:#D19A66;">imgSize</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{ </span><span style="color:#E06C75;--shiki-dark:#E06C75;">width</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;400px&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">height</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;200px&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> }</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#D19A66;--shiki-dark:#D19A66;">success</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">handleLogin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span></code></pre></div><h3 id="_3-4-uni-app-用户-app" tabindex="-1"><a class="header-anchor" href="#_3-4-uni-app-用户-app"><span><a href="https://doc.iocoder.cn/captcha/#_3-4-uni-app-%E7%94%A8%E6%88%B7-app" target="_blank" rel="noopener noreferrer">#</a>3.4 uni-app 用户 App</span></a></h3><p>① 验证码组件：<a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-ui-admin-uniapp/components/verifition/" target="_blank" rel="noopener noreferrer">verifition(opens new window)</a></p><p>② 登录界面的接入：<a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-ui-admin-uniapp/pages/login.vue#L17-L18" target="_blank" rel="noopener noreferrer">login.vue(opens new window)</a></p><div class="language-vue" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Verify</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> @</span><span style="color:#D19A66;--shiki-dark:#D19A66;">success</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">pwdLogin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> :</span><span style="color:#D19A66;--shiki-dark:#D19A66;">mode</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;pop&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> :</span><span style="color:#D19A66;--shiki-dark:#D19A66;">captchaType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;blockPuzzle&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        :</span><span style="color:#D19A66;--shiki-dark:#D19A66;">imgSize</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{ </span><span style="color:#E06C75;--shiki-dark:#E06C75;">width</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;330px&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">height</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;155px&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> }</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> ref</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;verify&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Verify</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div>`,35)]))}const p=s(i,[["render",r],["__file","28.验证码.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/28.%E9%AA%8C%E8%AF%81%E7%A0%81.html","title":"验证码","lang":"zh-CN","frontmatter":{"description":"验证码 项目基于 AJ-Captcha (opens new window)实现行为验证码，包含滑动拼图、文字点选两种方式，UI 支持弹出和嵌入两种方式。如下图所示： 疑问：为什么采用行为验证码？ 相比传统的「传统字符型验证码」的“展示验证码-填写字符-比对答案”的流程来说，「行为验证码」的“展示验证码-操作-比对答案”的流程，用户只需要使用鼠标产生指...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/2.%E5%90%8E%E7%AB%AF%E6%89%8B%E5%86%8C/28.%E9%AA%8C%E8%AF%81%E7%A0%81.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"验证码"}],["meta",{"property":"og:description","content":"验证码 项目基于 AJ-Captcha (opens new window)实现行为验证码，包含滑动拼图、文字点选两种方式，UI 支持弹出和嵌入两种方式。如下图所示： 疑问：为什么采用行为验证码？ 相比传统的「传统字符型验证码」的“展示验证码-填写字符-比对答案”的流程来说，「行为验证码」的“展示验证码-操作-比对答案”的流程，用户只需要使用鼠标产生指..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/%E9%AA%8C%E8%AF%81%E7%A0%81/%E6%BB%91%E5%8A%A8%E6%8B%BC%E5%9B%BE.gif"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T07:41:53.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-21T07:41:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"验证码\\",\\"image\\":[\\"https://doc.iocoder.cn/img/%E9%AA%8C%E8%AF%81%E7%A0%81/%E6%BB%91%E5%8A%A8%E6%8B%BC%E5%9B%BE.gif\\",\\"https://doc.iocoder.cn/img/%E9%AA%8C%E8%AF%81%E7%A0%81/%E7%82%B9%E9%80%89%E6%96%87%E5%AD%97.gif\\",\\"https://doc.iocoder.cn/img/%E9%AA%8C%E8%AF%81%E7%A0%81/shixu.png\\"],\\"dateModified\\":\\"2024-11-21T07:41:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#1. 交互流程","slug":"_1-交互流程","link":"#_1-交互流程","children":[]},{"level":2,"title":"#2. 如何关闭验证码","slug":"_2-如何关闭验证码","link":"#_2-如何关闭验证码","children":[]},{"level":2,"title":"#3. 接入场景","slug":"_3-接入场景","link":"#_3-接入场景","children":[{"level":3,"title":"#3.1 后端接入","slug":"_3-1-后端接入","link":"#_3-1-后端接入","children":[]},{"level":3,"title":"#3.2 Vue2.X 管理后台","slug":"_3-2-vue2-x-管理后台","link":"#_3-2-vue2-x-管理后台","children":[]},{"level":3,"title":"#3.3 Vue3.X 管理后台","slug":"_3-3-vue3-x-管理后台","link":"#_3-3-vue3-x-管理后台","children":[]},{"level":3,"title":"#3.4 uni-app 用户 App","slug":"_3-4-uni-app-用户-app","link":"#_3-4-uni-app-用户-app","children":[]}]}],"git":{"createdTime":1732174913000,"updatedTime":1732174913000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.21,"words":1264},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/2.后端手册/28.验证码.md","localizedDate":"2024年11月21日","excerpt":"\\n<p>项目基于 <a href=\\"https://gitee.com/anji-plus/captcha\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">AJ-Captcha (opens new window)</a>实现行为验证码，包含滑动拼图、文字点选两种方式，UI 支持弹出和嵌入两种方式。如下图所示：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>滑动拼图</th>\\n<th>文字点选</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><img src=\\"https://doc.iocoder.cn/img/验证码/滑动拼图.gif\\" alt=\\"滑动拼图\\" loading=\\"lazy\\"></td>\\n<td><img src=\\"https://doc.iocoder.cn/img/验证码/点选文字.gif\\" alt=\\"点选文字\\" loading=\\"lazy\\"></td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{p as comp,c as data};
