import{_ as o,c as r,a,o as t}from"./app-BfIe-EZg.js";const n={};function i(p,e){return t(),r("div",null,e[0]||(e[0]=[a('<h1 id="自动回复" tabindex="-1"><a class="header-anchor" href="#自动回复"><span>自动回复</span></a></h1><p>本章节，讲解自动回复的相关内容，对应 [公众号管理 -&gt; 自动回复] 菜单。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/公众号手册/自动回复/界面.png" alt="自动回复" tabindex="0" loading="lazy"><figcaption>自动回复</figcaption></figure><p>在用户关注、发送消息时，公众号可以自动回复消息给用户。</p><h2 id="_1-表结构" tabindex="-1"><a class="header-anchor" href="#_1-表结构"><span><a href="https://doc.iocoder.cn/mp/auto-reply/#_1-%E8%A1%A8%E7%BB%93%E6%9E%84" target="_blank" rel="noopener noreferrer">#</a>1. 表结构</span></a></h2><p>自动回复对应 <code>mp_auto_reply</code> 表，结构如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/公众号手册/自动回复/表结构.png" alt="自动回复表结构" tabindex="0" loading="lazy"><figcaption>自动回复表结构</figcaption></figure><p><code>type</code> 字段：回复类型，</p><ul><li>1 - 关注回复：用户关注公众号时</li><li>3 - 关键字回复：消息类型为文本时，匹配到关键字</li><li>2 - 消息回复：没有匹配到关键字时，根据消息类型</li></ul><h2 id="_2-自动回复界面" tabindex="-1"><a class="header-anchor" href="#_2-自动回复界面"><span><a href="https://doc.iocoder.cn/mp/auto-reply/#_2-%E8%87%AA%E5%8A%A8%E5%9B%9E%E5%A4%8D%E7%95%8C%E9%9D%A2" target="_blank" rel="noopener noreferrer">#</a>2. 自动回复界面</span></a></h2><ul><li>前端：<a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-ui-admin/src/views/mp/autoReply/index.vue" target="_blank" rel="noopener noreferrer">/@views/mp/autoReply(opens new window)</a></li><li>后端：<a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-mp/yudao-module-mp-biz/src/main/java/cn/iocoder/yudao/module/mp/controller/admin/message/MpAutoReplyController.java" target="_blank" rel="noopener noreferrer">MpAutoReplyController(opens new window)</a></li></ul><h2 id="_3-关注回复" tabindex="-1"><a class="header-anchor" href="#_3-关注回复"><span><a href="https://doc.iocoder.cn/mp/auto-reply/#_3-%E5%85%B3%E6%B3%A8%E5%9B%9E%E5%A4%8D" target="_blank" rel="noopener noreferrer">#</a>3. 关注回复</span></a></h2><p>用户关注公众号时，被动回复用户消息，由 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-mp/yudao-module-mp-biz/src/main/java/cn/iocoder/yudao/module/mp/service/message/MpAutoReplyServiceImpl.java#L181-L200" target="_blank" rel="noopener noreferrer">MpAutoReplyServiceImpl (opens new window)</a>的 <code>replyForSubscribe</code> 方法来生成回复内容。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/公众号手册/自动回复/关注回复.png" alt="关注回复" tabindex="0" loading="lazy"><figcaption>关注回复</figcaption></figure><h2 id="_4-消息回复-关键字回复" tabindex="-1"><a class="header-anchor" href="#_4-消息回复-关键字回复"><span><a href="https://doc.iocoder.cn/mp/auto-reply/#_4-%E6%B6%88%E6%81%AF%E5%9B%9E%E5%A4%8D-%E5%85%B3%E9%94%AE%E5%AD%97%E5%9B%9E%E5%A4%8D" target="_blank" rel="noopener noreferrer">#</a>4. 消息回复 &amp; 关键字回复</span></a></h2><p>用户发送消息给公众号时，自动回复消息给用户，分为两种情况：</p><ul><li>关键字回复：消息类型为文本时，匹配到关键字，自动回复消息</li><li>消息回复：没有匹配到关键字时，根据消息类型，自动回复消息</li></ul><p>这两种情况，由 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-mp/yudao-module-mp-biz/src/main/java/cn/iocoder/yudao/module/mp/service/handler/message/MessageAutoReplyHandler.java" target="_blank" rel="noopener noreferrer">MessageAutoReplyHandler (opens new window)</a>调用 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-mp/yudao-module-mp-biz/src/main/java/cn/iocoder/yudao/module/mp/service/message/MpAutoReplyServiceImpl.java#L154-L179" target="_blank" rel="noopener noreferrer">MpAutoReplyServiceImpl (opens new window)</a>的 <code>replyForMessage</code> 方法来生成回复内容。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/公众号手册/自动回复/消息回复.png" alt="消息回复" tabindex="0" loading="lazy"><figcaption>消息回复</figcaption></figure><p>上次更新: 2023/07/09, 22:14:26</p>',20)]))}const c=o(n,[["render",i],["__file","6.自动回复.html.vue"]]),d=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/8.%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/6.%E8%87%AA%E5%8A%A8%E5%9B%9E%E5%A4%8D.html","title":"自动回复","lang":"zh-CN","frontmatter":{"description":"自动回复 本章节，讲解自动回复的相关内容，对应 [公众号管理 -> 自动回复] 菜单。如下图所示： 自动回复自动回复 在用户关注、发送消息时，公众号可以自动回复消息给用户。 #1. 表结构 自动回复对应 mp_auto_reply 表，结构如下图所示： 自动回复表结构自动回复表结构 type 字段：回复类型， 1 - 关注回复：用户关注公众号时 3 -...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/8.%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/6.%E8%87%AA%E5%8A%A8%E5%9B%9E%E5%A4%8D.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"自动回复"}],["meta",{"property":"og:description","content":"自动回复 本章节，讲解自动回复的相关内容，对应 [公众号管理 -> 自动回复] 菜单。如下图所示： 自动回复自动回复 在用户关注、发送消息时，公众号可以自动回复消息给用户。 #1. 表结构 自动回复对应 mp_auto_reply 表，结构如下图所示： 自动回复表结构自动回复表结构 type 字段：回复类型， 1 - 关注回复：用户关注公众号时 3 -..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E8%87%AA%E5%8A%A8%E5%9B%9E%E5%A4%8D/%E7%95%8C%E9%9D%A2.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-24T05:58:00.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-24T05:58:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自动回复\\",\\"image\\":[\\"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E8%87%AA%E5%8A%A8%E5%9B%9E%E5%A4%8D/%E7%95%8C%E9%9D%A2.png\\",\\"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E8%87%AA%E5%8A%A8%E5%9B%9E%E5%A4%8D/%E8%A1%A8%E7%BB%93%E6%9E%84.png\\",\\"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E8%87%AA%E5%8A%A8%E5%9B%9E%E5%A4%8D/%E5%85%B3%E6%B3%A8%E5%9B%9E%E5%A4%8D.png\\",\\"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E8%87%AA%E5%8A%A8%E5%9B%9E%E5%A4%8D/%E6%B6%88%E6%81%AF%E5%9B%9E%E5%A4%8D.png\\"],\\"dateModified\\":\\"2024-11-24T05:58:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#1. 表结构","slug":"_1-表结构","link":"#_1-表结构","children":[]},{"level":2,"title":"#2. 自动回复界面","slug":"_2-自动回复界面","link":"#_2-自动回复界面","children":[]},{"level":2,"title":"#3. 关注回复","slug":"_3-关注回复","link":"#_3-关注回复","children":[]},{"level":2,"title":"#4. 消息回复 & 关键字回复","slug":"_4-消息回复-关键字回复","link":"#_4-消息回复-关键字回复","children":[]}],"git":{"createdTime":1732174913000,"updatedTime":1732427880000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.95,"words":584},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/8.公众号手册/6.自动回复.md","localizedDate":"2024年11月21日","excerpt":"\\n<p>本章节，讲解自动回复的相关内容，对应 [公众号管理 -&gt; 自动回复] 菜单。如下图所示：</p>\\n<figure><img src=\\"https://doc.iocoder.cn/img/公众号手册/自动回复/界面.png\\" alt=\\"自动回复\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>自动回复</figcaption></figure>\\n<p>在用户关注、发送消息时，公众号可以自动回复消息给用户。</p>\\n<h2><a class=\\"header-anchor\\" href=\\"#_1-表结构\\"><span></span></a><a href=\\"https://doc.iocoder.cn/mp/auto-reply/#_1-%E8%A1%A8%E7%BB%93%E6%9E%84\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">#</a>1. 表结构</h2>","autoDesc":true}');export{c as comp,d as data};
