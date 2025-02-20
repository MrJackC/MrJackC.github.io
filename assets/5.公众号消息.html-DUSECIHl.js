import{_ as a,c as o,a as r,o as n}from"./app-4x2aIoqi.js";const t={};function s(i,e){return n(),o("div",null,e[0]||(e[0]=[r('<h1 id="公众号消息" tabindex="-1"><a class="header-anchor" href="#公众号消息"><span>公众号消息</span></a></h1><p>本章节，讲解公众号消息的相关内容，对应 [公众号管理 -&gt; 消息管理] 菜单。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/公众号手册/公众号消息/界面.png" alt="消息管理" tabindex="0" loading="lazy"><figcaption>消息管理</figcaption></figure><h2 id="_1-表结构" tabindex="-1"><a class="header-anchor" href="#_1-表结构"><span><a href="https://doc.iocoder.cn/mp/message/#_1-%E8%A1%A8%E7%BB%93%E6%9E%84" target="_blank" rel="noopener noreferrer">#</a>1. 表结构</span></a></h2><p>公众号消息对应 <code>mp_message</code> 表，结构如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/公众号手册/公众号消息/表结构.png" alt="表结构" tabindex="0" loading="lazy"><figcaption>表结构</figcaption></figure><p>① <code>type</code> 字段：消息类型，包括文本、图片、语音、视频、小视频、图文、音乐、地理位置、链接、事件等类型，对应 <code>mp_message_type</code> 字典。</p><p>② <code>send_from</code> 字段：消息发送方，分成两类：</p><ul><li>【接收】用户发送给公众号：<a href="https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Receiving_standard_messages.html" target="_blank" rel="noopener noreferrer">接收普通消息 (opens new window)</a>、<a href="https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Receiving_event_pushes.html" target="_blank" rel="noopener noreferrer">接收事件推送(opens new window)</a></li><li>【发送】公众号发给用户：<a href="https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Passive_user_reply_message.html" target="_blank" rel="noopener noreferrer">被动回复用户消息 (opens new window)</a>、<a href="https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html" target="_blank" rel="noopener noreferrer">客服消息(opens new window)</a></li></ul><h2 id="_2-消息管理界面" tabindex="-1"><a class="header-anchor" href="#_2-消息管理界面"><span><a href="https://doc.iocoder.cn/mp/message/#_2-%E6%B6%88%E6%81%AF%E7%AE%A1%E7%90%86%E7%95%8C%E9%9D%A2" target="_blank" rel="noopener noreferrer">#</a>2. 消息管理界面</span></a></h2><ul><li>前端：<a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-ui-admin/src/views/mp/message/index.vue" target="_blank" rel="noopener noreferrer">/@views/mp/message(opens new window)</a></li><li>后端：<a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-mp/yudao-module-mp-biz/src/main/java/cn/iocoder/yudao/module/mp/controller/admin/message/MpMessageController.java" target="_blank" rel="noopener noreferrer">MpMessageController(opens new window)</a></li></ul><h2 id="_3-【接收】" tabindex="-1"><a class="header-anchor" href="#_3-【接收】"><span><a href="https://doc.iocoder.cn/mp/message/#_3-%E3%80%90%E6%8E%A5%E6%94%B6%E3%80%91" target="_blank" rel="noopener noreferrer">#</a>3.【接收】</span></a></h2><h3 id="_3-1-接收普通消息" tabindex="-1"><a class="header-anchor" href="#_3-1-接收普通消息"><span><a href="https://doc.iocoder.cn/mp/message/#_3-1-%E6%8E%A5%E6%94%B6%E6%99%AE%E9%80%9A%E6%B6%88%E6%81%AF" target="_blank" rel="noopener noreferrer">#</a>3.1 接收普通消息</span></a></h3><blockquote><p>对应 <a href="https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Receiving_standard_messages.html" target="_blank" rel="noopener noreferrer">《微信公众号官方文档 —— 接收普通消息》 (opens new window)</a>文档。</p></blockquote><p>当用户向公众账号发消息时，会被 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-mp/yudao-module-mp-biz/src/main/java/cn/iocoder/yudao/module/mp/service/handler/message/MessageReceiveHandler.java" target="_blank" rel="noopener noreferrer">MessageReceiveHandler (opens new window)</a>处理，记录到 <code>mp_message</code> 表，消息类型为文本、图片、语音、视频、小视频、地理位置、链接。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/公众号手册/公众号消息/接收普通消息.png" alt="接收普通消息" tabindex="0" loading="lazy"><figcaption>接收普通消息</figcaption></figure><h3 id="_3-2-接收事件消息" tabindex="-1"><a class="header-anchor" href="#_3-2-接收事件消息"><span><a href="https://doc.iocoder.cn/mp/message/#_3-2-%E6%8E%A5%E6%94%B6%E4%BA%8B%E4%BB%B6%E6%B6%88%E6%81%AF" target="_blank" rel="noopener noreferrer">#</a>3.2 接收事件消息</span></a></h3><blockquote><p>对应 <a href="https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Receiving_event_pushes.html" target="_blank" rel="noopener noreferrer">《微信公众号官方文档 —— 接收事件推送》 (opens new window)</a>文档。</p></blockquote><p>在用户和公众号产交互的过程中，会被 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-mp/yudao-module-mp-biz/src/main/java/cn/iocoder/yudao/module/mp/service/handler/message/MessageReceiveHandler.java" target="_blank" rel="noopener noreferrer">MessageReceiveHandler (opens new window)</a>处理，记录到 <code>mp_message</code> 表，消息类型仅为事件。</p><h2 id="_4-【发送】" tabindex="-1"><a class="header-anchor" href="#_4-【发送】"><span><a href="https://doc.iocoder.cn/mp/message/#_4-%E3%80%90%E5%8F%91%E9%80%81%E3%80%91" target="_blank" rel="noopener noreferrer">#</a>4.【发送】</span></a></h2><h3 id="_4-1-被动回复用户消息" tabindex="-1"><a class="header-anchor" href="#_4-1-被动回复用户消息"><span><a href="https://doc.iocoder.cn/mp/message/#_4-1-%E8%A2%AB%E5%8A%A8%E5%9B%9E%E5%A4%8D%E7%94%A8%E6%88%B7%E6%B6%88%E6%81%AF" target="_blank" rel="noopener noreferrer">#</a>4.1 被动回复用户消息</span></a></h3><blockquote><p>对应 <a href="https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Passive_user_reply_message.html" target="_blank" rel="noopener noreferrer">《微信公众号官方文档 —— 被动回复用户消息》 (opens new window)</a>文档。</p></blockquote><p>在被动回复用户消息时，统一由 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-mp/yudao-module-mp-biz/src/main/java/cn/iocoder/yudao/module/mp/service/message/MpMessageServiceImpl.java#L85-L104" target="_blank" rel="noopener noreferrer">MpMessageServiceImpl (opens new window)</a>的 <code>sendOutMessage</code> 方法来构建回复消息，也会记录到 <code>mp_message</code> 表，消息类型为文本、图片、语音、视频、音乐、图文。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/公众号手册/公众号消息/被动回复用户消息.png" alt="被动回复用户消息" tabindex="0" loading="lazy"><figcaption>被动回复用户消息</figcaption></figure><h3 id="_4-2-主动发送客服消息" tabindex="-1"><a class="header-anchor" href="#_4-2-主动发送客服消息"><span><a href="https://doc.iocoder.cn/mp/message/#_4-2-%E4%B8%BB%E5%8A%A8%E5%8F%91%E9%80%81%E5%AE%A2%E6%9C%8D%E6%B6%88%E6%81%AF" target="_blank" rel="noopener noreferrer">#</a>4.2 主动发送客服消息</span></a></h3><blockquote><p>对应 <a href="https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html" target="_blank" rel="noopener noreferrer">《微信公众号官方文档 —— 客服消息》 (opens new window)</a>文档。</p></blockquote><p>点击消息管理界面的【消息】按钮，可以主动发送客服消息给用户。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/公众号手册/公众号消息/主动发送消息给用户.png" alt="主动发送消息给用户" tabindex="0" loading="lazy"><figcaption>主动发送消息给用户</figcaption></figure><p>主动发送客服消息，统一由 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-mp/yudao-module-mp-biz/src/main/java/cn/iocoder/yudao/module/mp/service/message/MpMessageServiceImpl.java#L106-L130" target="_blank" rel="noopener noreferrer">MpMessageServiceImpl (opens new window)</a>的 <code>sendKefuMessage</code> 方法来构建客服消息，也会记录到 <code>mp_message</code> 表，消息类型为文本、图片、语音、视频、音乐、图文。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/公众号手册/公众号消息/客服消息.png" alt="客服消息" tabindex="0" loading="lazy"><figcaption>客服消息</figcaption></figure><p>上次更新: 2023/07/09, 22:14:26</p>',31)]))}const c=a(t,[["render",s],["__file","5.公众号消息.html.vue"]]),l=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/8.%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/5.%E5%85%AC%E4%BC%97%E5%8F%B7%E6%B6%88%E6%81%AF.html","title":"公众号消息","lang":"zh-CN","frontmatter":{"description":"公众号消息 本章节，讲解公众号消息的相关内容，对应 [公众号管理 -> 消息管理] 菜单。如下图所示： 消息管理消息管理 #1. 表结构 公众号消息对应 mp_message 表，结构如下图所示： 表结构表结构 ① type 字段：消息类型，包括文本、图片、语音、视频、小视频、图文、音乐、地理位置、链接、事件等类型，对应 mp_message_type...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/8.%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/5.%E5%85%AC%E4%BC%97%E5%8F%B7%E6%B6%88%E6%81%AF.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"公众号消息"}],["meta",{"property":"og:description","content":"公众号消息 本章节，讲解公众号消息的相关内容，对应 [公众号管理 -> 消息管理] 菜单。如下图所示： 消息管理消息管理 #1. 表结构 公众号消息对应 mp_message 表，结构如下图所示： 表结构表结构 ① type 字段：消息类型，包括文本、图片、语音、视频、小视频、图文、音乐、地理位置、链接、事件等类型，对应 mp_message_type..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%B6%88%E6%81%AF/%E7%95%8C%E9%9D%A2.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T07:41:53.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-21T07:41:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"公众号消息\\",\\"image\\":[\\"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%B6%88%E6%81%AF/%E7%95%8C%E9%9D%A2.png\\",\\"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%B6%88%E6%81%AF/%E8%A1%A8%E7%BB%93%E6%9E%84.png\\",\\"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%B6%88%E6%81%AF/%E6%8E%A5%E6%94%B6%E6%99%AE%E9%80%9A%E6%B6%88%E6%81%AF.png\\",\\"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%B6%88%E6%81%AF/%E8%A2%AB%E5%8A%A8%E5%9B%9E%E5%A4%8D%E7%94%A8%E6%88%B7%E6%B6%88%E6%81%AF.png\\",\\"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%B6%88%E6%81%AF/%E4%B8%BB%E5%8A%A8%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF%E7%BB%99%E7%94%A8%E6%88%B7.png\\",\\"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%B6%88%E6%81%AF/%E5%AE%A2%E6%9C%8D%E6%B6%88%E6%81%AF.png\\"],\\"dateModified\\":\\"2024-11-21T07:41:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#1. 表结构","slug":"_1-表结构","link":"#_1-表结构","children":[]},{"level":2,"title":"#2. 消息管理界面","slug":"_2-消息管理界面","link":"#_2-消息管理界面","children":[]},{"level":2,"title":"#3.【接收】","slug":"_3-【接收】","link":"#_3-【接收】","children":[{"level":3,"title":"#3.1 接收普通消息","slug":"_3-1-接收普通消息","link":"#_3-1-接收普通消息","children":[]},{"level":3,"title":"#3.2 接收事件消息","slug":"_3-2-接收事件消息","link":"#_3-2-接收事件消息","children":[]}]},{"level":2,"title":"#4.【发送】","slug":"_4-【发送】","link":"#_4-【发送】","children":[{"level":3,"title":"#4.1 被动回复用户消息","slug":"_4-1-被动回复用户消息","link":"#_4-1-被动回复用户消息","children":[]},{"level":3,"title":"#4.2 主动发送客服消息","slug":"_4-2-主动发送客服消息","link":"#_4-2-主动发送客服消息","children":[]}]}],"git":{"createdTime":1732174913000,"updatedTime":1732174913000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.37,"words":1010},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/8.公众号手册/5.公众号消息.md","localizedDate":"2024年11月21日","excerpt":"\\n<p>本章节，讲解公众号消息的相关内容，对应 [公众号管理 -&gt; 消息管理] 菜单。如下图所示：</p>\\n<figure><img src=\\"https://doc.iocoder.cn/img/公众号手册/公众号消息/界面.png\\" alt=\\"消息管理\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>消息管理</figcaption></figure>\\n<h2><a class=\\"header-anchor\\" href=\\"#_1-表结构\\"><span></span></a><a href=\\"https://doc.iocoder.cn/mp/message/#_1-%E8%A1%A8%E7%BB%93%E6%9E%84\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">#</a>1. 表结构</h2>","autoDesc":true}');export{c as comp,l as data};
