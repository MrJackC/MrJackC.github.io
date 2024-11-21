import{_ as a,c as e,a as n,o as i}from"./app-CZJgH_ea.js";const o={};function r(t,s){return i(),e("div",null,s[0]||(s[0]=[n(`<h1 id="站内信" tabindex="-1"><a class="header-anchor" href="#站内信"><span>站内信</span></a></h1><p>本章节，介绍项目的站内信功能。它在管理后台有三个菜单，分别是：</p><p><strong>① 站内信模版：管理站内信的内容模版</strong></p><figure><img src="https://doc.iocoder.cn/img/站内信配置/演示-站内信模版.png" alt="站内信模版" tabindex="0" loading="lazy"><figcaption>站内信模版</figcaption></figure><p><strong>② 站内信管理：查看站内信的发送记录</strong></p><figure><img src="https://doc.iocoder.cn/img/站内信配置/演示-站内信管理.png" alt="站内信管理" tabindex="0" loading="lazy"><figcaption>站内信管理</figcaption></figure><p><strong>③ 我的站内信：查看发送给我的站内信</strong></p><figure><img src="https://doc.iocoder.cn/img/站内信配置/演示-我的站内信.png" alt="我的站内信" tabindex="0" loading="lazy"><figcaption>我的站内信</figcaption></figure><h2 id="_1-表结构" tabindex="-1"><a class="header-anchor" href="#_1-表结构"><span><a href="https://doc.iocoder.cn/notify/#_1-%E8%A1%A8%E7%BB%93%E6%9E%84" target="_blank" rel="noopener noreferrer">#</a>1. 表结构</span></a></h2><figure><img src="https://doc.iocoder.cn/img/站内信配置/表结构.png" alt="表结构" tabindex="0" loading="lazy"><figcaption>表结构</figcaption></figure><h2 id="_2-实现代码" tabindex="-1"><a class="header-anchor" href="#_2-实现代码"><span><a href="https://doc.iocoder.cn/notify/#_2-%E5%AE%9E%E7%8E%B0%E4%BB%A3%E7%A0%81" target="_blank" rel="noopener noreferrer">#</a>2. 实现代码</span></a></h2><ul><li>前端代码：<a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-ui-admin/src/views/system/notify/" target="_blank" rel="noopener noreferrer">views/system/notify(opens new window)</a></li><li>后端代码：<a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/controller/admin/notify/" target="_blank" rel="noopener noreferrer">controller/admin/notify(opens new window)</a></li></ul><h2 id="_3-站内信配置" tabindex="-1"><a class="header-anchor" href="#_3-站内信配置"><span><a href="https://doc.iocoder.cn/notify/#_3-%E7%AB%99%E5%86%85%E4%BF%A1%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">#</a>3. 站内信配置</span></a></h2><p>本小节，讲解如何配置站内信功能，整个过程如下：</p><ol><li>新建一个站内信【模版】，配置站内信的内容模版</li><li>测试该站内信模板，查看对应的站内信【记录】，确认是否发送成功</li></ol><h3 id="_3-1-新建站内信模版" tabindex="-1"><a class="header-anchor" href="#_3-1-新建站内信模版"><span><a href="https://doc.iocoder.cn/notify/#_3-1-%E6%96%B0%E5%BB%BA%E7%AB%99%E5%86%85%E4%BF%A1%E6%A8%A1%E7%89%88" target="_blank" rel="noopener noreferrer">#</a>3.1 新建站内信模版</span></a></h3><p>① 点击 [系统管理 -&gt; 站内信管理 -&gt; 模板管理] 菜单，查看站内信模板的列表。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/站内信配置/演示-站内信模版.png" alt="站内信模版" tabindex="0" loading="lazy"><figcaption>站内信模版</figcaption></figure><p>② 点击 [新增] 按钮，填写信息如下图：</p><figure><img src="https://doc.iocoder.cn/img/站内信配置/站内信配置-新增站内信模版.png" alt="站内信模板的新增" tabindex="0" loading="lazy"><figcaption>站内信模板的新增</figcaption></figure><ul><li>模版编号：站内信模板的唯一标识，使用站内信 API 时，通过它标识使用的站内信模板</li><li>发件人名称：发送站内信显示的发件人名字</li><li>模板内容：站内信模板的内容，使用 <code>{var}</code> 作为占位符，例如说 <code>{name}</code>、<code>{code}</code> 等</li><li>模版类型：站内信的分类，可使用 <code>system_notify_template_type</code> 字典进行自定义</li><li>开启状态：站内信模板被禁用时，该站内信模板将不发送站内信，只打印 logger 日志</li></ul><p>疑问：为什么设计站内信模板的功能？</p><p>在一些场景下，产品会希望修改发送站内信的内容、发送人昵称，此时只需要修改站内信模版的对应属性，无需重启应用。</p><h3 id="_3-2-测试站内信模版" tabindex="-1"><a class="header-anchor" href="#_3-2-测试站内信模版"><span><a href="https://doc.iocoder.cn/notify/#_3-2-%E6%B5%8B%E8%AF%95%E7%AB%99%E5%86%85%E4%BF%A1%E6%A8%A1%E7%89%88" target="_blank" rel="noopener noreferrer">#</a>3.2 测试站内信模版</span></a></h3><p>① 点击 [测试] 按钮，选择接收人为「芋道源码」，进行该站内信模板的模拟发送。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/站内信配置/站内信配置-测试站内信.png" alt="测试站内信" tabindex="0" loading="lazy"><figcaption>测试站内信</figcaption></figure><p>② 点击 [系统管理 -&gt; 站内信管理 -&gt; 消息记录] 菜单，可以查看到刚发送的站内信。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/站内信配置/站内信配置-站内信发送日志.png" alt="站内信发送日志" tabindex="0" loading="lazy"><figcaption>站内信发送日志</figcaption></figure><p>③ 点击右上角的 [消息] 图标，也可以查看到刚发送的站内信。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/站内信配置/站内信配置-站内信接收日志.png" alt="站内信接收日志" tabindex="0" loading="lazy"><figcaption>站内信接收日志</figcaption></figure><h2 id="_4-站内信发送" tabindex="-1"><a class="header-anchor" href="#_4-站内信发送"><span><a href="https://doc.iocoder.cn/notify/#_4-%E7%AB%99%E5%86%85%E4%BF%A1%E5%8F%91%E9%80%81" target="_blank" rel="noopener noreferrer">#</a>4. 站内信发送</span></a></h2><h3 id="_4-1-notifymessagesendapi" tabindex="-1"><a class="header-anchor" href="#_4-1-notifymessagesendapi"><span><a href="https://doc.iocoder.cn/notify/#_4-1-notifymessagesendapi" target="_blank" rel="noopener noreferrer">#</a>4.1 NotifyMessageSendApi</span></a></h3><p><a href="https://doc.iocoder.cn/#_3-%E7%AB%99%E5%86%85%E4%BF%A1%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">站内信配置</a>完成后，可使用 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-api/src/main/java/cn/iocoder/yudao/module/system/api/notify/NotifyMessageSendApi.java" target="_blank" rel="noopener noreferrer">NotifyMessageSendApi (opens new window)</a>进行站内信的发送，支持多种用户类型。它的方法如下：</p><figure><img src="https://doc.iocoder.cn/img/站内信配置/站内信发送-NotifyMessageSendApi.png" alt="NotifyMessageSendApi" tabindex="0" loading="lazy"><figcaption>NotifyMessageSendApi</figcaption></figure><h3 id="_4-2-接入示例" tabindex="-1"><a class="header-anchor" href="#_4-2-接入示例"><span><a href="https://doc.iocoder.cn/notify/#_4-2-%E6%8E%A5%E5%85%A5%E7%A4%BA%E4%BE%8B" target="_blank" rel="noopener noreferrer">#</a>4.2 接入示例</span></a></h3><p>以 <code>yudao-module-infra</code> 模块，需要发站内信为例子，讲解 SmsCodeApi 的使用。</p><p>① 在 <code>yudao-module-infra-biz</code> 模块的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-infra/yudao-module-infra-biz/pom.xml" target="_blank" rel="noopener noreferrer"><code>pom.xml</code> (opens new window)</a>引入 <code>yudao-module-system-api</code> 依赖，如所示：</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;cn.iocoder.boot&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;yudao-module-system-api&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;\${revision}&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>② 在代码中注入 NotifyMessageSendApi Bean，并调用发送站内信的方法。代码如下：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> TestDemoServiceImpl</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> implements</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> TestDemoService</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 0. 注入 NotifyMessageSendApi Bean</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Resource</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> NotifyMessageSendApi</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> notifySendApi</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> sendDemo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 1. 准备参数</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> userId</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1L</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 示例中写死，你可以改成你业务中的 userId 噢</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> templateCode</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;test_01&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 站内信模版，记得在【站内信管理】中配置噢</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Map</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Object</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#E06C75;--shiki-dark:#E06C75;">templateParams</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> HashMap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        templateParams</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">put</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;key1&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;奥特曼&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        templateParams</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">put</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;key2&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;变身&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 2. 发送站内信</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        notifySendApi</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sendSingleNotifylToAdmin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> NotifySendSingleToUserReqDTO</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                .</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setUserId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(userId).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setTemplateCode</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(templateCode).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setTemplateParams</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(templateParams));</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上次更新: 2023/01/29, 19:16:45</p>`,41)]))}const p=a(o,[["render",r],["__file","3.站内信配置.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/9.%E7%B3%BB%E7%BB%9F%E6%89%8B%E5%86%8C/3.%E7%AB%99%E5%86%85%E4%BF%A1%E9%85%8D%E7%BD%AE.html","title":"站内信","lang":"zh-CN","frontmatter":{"description":"站内信 本章节，介绍项目的站内信功能。它在管理后台有三个菜单，分别是： ① 站内信模版：管理站内信的内容模版 站内信模版站内信模版 ② 站内信管理：查看站内信的发送记录 站内信管理站内信管理 ③ 我的站内信：查看发送给我的站内信 我的站内信我的站内信 #1. 表结构 表结构表结构 #2. 实现代码 前端代码：views/system/notify(op...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/9.%E7%B3%BB%E7%BB%9F%E6%89%8B%E5%86%8C/3.%E7%AB%99%E5%86%85%E4%BF%A1%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"站内信"}],["meta",{"property":"og:description","content":"站内信 本章节，介绍项目的站内信功能。它在管理后台有三个菜单，分别是： ① 站内信模版：管理站内信的内容模版 站内信模版站内信模版 ② 站内信管理：查看站内信的发送记录 站内信管理站内信管理 ③ 我的站内信：查看发送给我的站内信 我的站内信我的站内信 #1. 表结构 表结构表结构 #2. 实现代码 前端代码：views/system/notify(op..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/%E7%AB%99%E5%86%85%E4%BF%A1%E9%85%8D%E7%BD%AE/%E6%BC%94%E7%A4%BA-%E7%AB%99%E5%86%85%E4%BF%A1%E6%A8%A1%E7%89%88.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T08:42:43.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-21T08:42:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"站内信\\",\\"image\\":[\\"https://doc.iocoder.cn/img/%E7%AB%99%E5%86%85%E4%BF%A1%E9%85%8D%E7%BD%AE/%E6%BC%94%E7%A4%BA-%E7%AB%99%E5%86%85%E4%BF%A1%E6%A8%A1%E7%89%88.png\\",\\"https://doc.iocoder.cn/img/%E7%AB%99%E5%86%85%E4%BF%A1%E9%85%8D%E7%BD%AE/%E6%BC%94%E7%A4%BA-%E7%AB%99%E5%86%85%E4%BF%A1%E7%AE%A1%E7%90%86.png\\",\\"https://doc.iocoder.cn/img/%E7%AB%99%E5%86%85%E4%BF%A1%E9%85%8D%E7%BD%AE/%E6%BC%94%E7%A4%BA-%E6%88%91%E7%9A%84%E7%AB%99%E5%86%85%E4%BF%A1.png\\",\\"https://doc.iocoder.cn/img/%E7%AB%99%E5%86%85%E4%BF%A1%E9%85%8D%E7%BD%AE/%E8%A1%A8%E7%BB%93%E6%9E%84.png\\",\\"https://doc.iocoder.cn/img/%E7%AB%99%E5%86%85%E4%BF%A1%E9%85%8D%E7%BD%AE/%E6%BC%94%E7%A4%BA-%E7%AB%99%E5%86%85%E4%BF%A1%E6%A8%A1%E7%89%88.png\\",\\"https://doc.iocoder.cn/img/%E7%AB%99%E5%86%85%E4%BF%A1%E9%85%8D%E7%BD%AE/%E7%AB%99%E5%86%85%E4%BF%A1%E9%85%8D%E7%BD%AE-%E6%96%B0%E5%A2%9E%E7%AB%99%E5%86%85%E4%BF%A1%E6%A8%A1%E7%89%88.png\\",\\"https://doc.iocoder.cn/img/%E7%AB%99%E5%86%85%E4%BF%A1%E9%85%8D%E7%BD%AE/%E7%AB%99%E5%86%85%E4%BF%A1%E9%85%8D%E7%BD%AE-%E6%B5%8B%E8%AF%95%E7%AB%99%E5%86%85%E4%BF%A1.png\\",\\"https://doc.iocoder.cn/img/%E7%AB%99%E5%86%85%E4%BF%A1%E9%85%8D%E7%BD%AE/%E7%AB%99%E5%86%85%E4%BF%A1%E9%85%8D%E7%BD%AE-%E7%AB%99%E5%86%85%E4%BF%A1%E5%8F%91%E9%80%81%E6%97%A5%E5%BF%97.png\\",\\"https://doc.iocoder.cn/img/%E7%AB%99%E5%86%85%E4%BF%A1%E9%85%8D%E7%BD%AE/%E7%AB%99%E5%86%85%E4%BF%A1%E9%85%8D%E7%BD%AE-%E7%AB%99%E5%86%85%E4%BF%A1%E6%8E%A5%E6%94%B6%E6%97%A5%E5%BF%97.png\\",\\"https://doc.iocoder.cn/img/%E7%AB%99%E5%86%85%E4%BF%A1%E9%85%8D%E7%BD%AE/%E7%AB%99%E5%86%85%E4%BF%A1%E5%8F%91%E9%80%81-NotifyMessageSendApi.png\\"],\\"dateModified\\":\\"2024-11-21T08:42:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#1. 表结构","slug":"_1-表结构","link":"#_1-表结构","children":[]},{"level":2,"title":"#2. 实现代码","slug":"_2-实现代码","link":"#_2-实现代码","children":[]},{"level":2,"title":"#3. 站内信配置","slug":"_3-站内信配置","link":"#_3-站内信配置","children":[{"level":3,"title":"#3.1 新建站内信模版","slug":"_3-1-新建站内信模版","link":"#_3-1-新建站内信模版","children":[]},{"level":3,"title":"#3.2 测试站内信模版","slug":"_3-2-测试站内信模版","link":"#_3-2-测试站内信模版","children":[]}]},{"level":2,"title":"#4. 站内信发送","slug":"_4-站内信发送","link":"#_4-站内信发送","children":[{"level":3,"title":"#4.1 NotifyMessageSendApi","slug":"_4-1-notifymessagesendapi","link":"#_4-1-notifymessagesendapi","children":[]},{"level":3,"title":"#4.2 接入示例","slug":"_4-2-接入示例","link":"#_4-2-接入示例","children":[]}]}],"git":{"createdTime":1732174913000,"updatedTime":1732178563000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":2}]},"readingTime":{"minutes":4.45,"words":1336},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/9.系统手册/3.站内信配置.md","localizedDate":"2024年11月21日","excerpt":"\\n<p>本章节，介绍项目的站内信功能。它在管理后台有三个菜单，分别是：</p>\\n<p><strong>① 站内信模版：管理站内信的内容模版</strong></p>\\n<figure><img src=\\"https://doc.iocoder.cn/img/站内信配置/演示-站内信模版.png\\" alt=\\"站内信模版\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>站内信模版</figcaption></figure>\\n<p><strong>② 站内信管理：查看站内信的发送记录</strong></p>\\n<figure><img src=\\"https://doc.iocoder.cn/img/站内信配置/演示-站内信管理.png\\" alt=\\"站内信管理\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>站内信管理</figcaption></figure>","autoDesc":true}');export{p as comp,c as data};
