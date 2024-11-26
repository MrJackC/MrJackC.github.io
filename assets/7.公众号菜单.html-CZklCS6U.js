import{_ as o,c as t,a as n,o as r}from"./app-JRvFIbSa.js";const a={};function i(p,e){return r(),t("div",null,e[0]||(e[0]=[n('<h1 id="公众号菜单" tabindex="-1"><a class="header-anchor" href="#公众号菜单"><span>公众号菜单</span></a></h1><p>本章节，讲解公众号菜单的相关内容，对应 [公众号管理 -&gt; 菜单管理] 菜单，对应 <a href="https://developers.weixin.qq.com/doc/offiaccount/Custom_Menus/Creating_Custom-Defined_Menu.html" target="_blank" rel="noopener noreferrer">《微信公众号官方文档 —— 自定义菜单》 (opens new window)</a>文档。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/公众号手册/公众号菜单/界面.png" alt="界面" tabindex="0" loading="lazy"><figcaption>界面</figcaption></figure><h2 id="_1-表结构" tabindex="-1"><a class="header-anchor" href="#_1-表结构"><span><a href="https://doc.iocoder.cn/mp/menu/#_1-%E8%A1%A8%E7%BB%93%E6%9E%84" target="_blank" rel="noopener noreferrer">#</a>1. 表结构</span></a></h2><p>公众号菜单对应 <code>mp_menu</code> 表，结构如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/公众号手册/公众号菜单/表结构.png" alt="表结构" tabindex="0" loading="lazy"><figcaption>表结构</figcaption></figure><p><code>type</code> 字段：按钮类型。如果类型为 <code>CLICK</code> 点击回复时，可进行文本、图片、语音、视频、图文、音乐消息。</p><h2 id="_2-菜单管理界面" tabindex="-1"><a class="header-anchor" href="#_2-菜单管理界面"><span><a href="https://doc.iocoder.cn/mp/menu/#_2-%E8%8F%9C%E5%8D%95%E7%AE%A1%E7%90%86%E7%95%8C%E9%9D%A2" target="_blank" rel="noopener noreferrer">#</a>2. 菜单管理界面</span></a></h2><ul><li>前端：<a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-ui-admin/src/views/mp/menu/index.vue" target="_blank" rel="noopener noreferrer">/@views/mp/menu(opens new window)</a></li><li>后端：<a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-mp/yudao-module-mp-biz/src/main/java/cn/iocoder/yudao/module/mp/controller/admin/menu/MpMenuController.java" target="_blank" rel="noopener noreferrer">MpMenuController(opens new window)</a></li></ul><h2 id="_3-点击回复" tabindex="-1"><a class="header-anchor" href="#_3-点击回复"><span><a href="https://doc.iocoder.cn/mp/menu/#_3-%E7%82%B9%E5%87%BB%E5%9B%9E%E5%A4%8D" target="_blank" rel="noopener noreferrer">#</a>3. 点击回复</span></a></h2><p>用户点击菜单按钮时，会接收事件消息，进而被 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-mp/yudao-module-mp-biz/src/main/java/cn/iocoder/yudao/module/mp/service/handler/menu/MenuHandler.java" target="_blank" rel="noopener noreferrer">MenuHandler (opens new window)</a>处理。如果类型为 <code>CLICK</code> 点击回复时，自动回复对应的消息。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/公众号手册/公众号菜单/点击回复.png" alt="点击回复" tabindex="0" loading="lazy"><figcaption>点击回复</figcaption></figure><p>上次更新: 2023/07/09, 22:14:26</p>',13)]))}const d=o(a,[["render",i],["__file","7.公众号菜单.html.vue"]]),l=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/8.%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/7.%E5%85%AC%E4%BC%97%E5%8F%B7%E8%8F%9C%E5%8D%95.html","title":"公众号菜单","lang":"zh-CN","frontmatter":{"description":"公众号菜单 本章节，讲解公众号菜单的相关内容，对应 [公众号管理 -> 菜单管理] 菜单，对应 《微信公众号官方文档 —— 自定义菜单》 (opens new window)文档。如下图所示： 界面界面 #1. 表结构 公众号菜单对应 mp_menu 表，结构如下图所示： 表结构表结构 type 字段：按钮类型。如果类型为 CLICK 点击回复时，可进...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/8.%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/7.%E5%85%AC%E4%BC%97%E5%8F%B7%E8%8F%9C%E5%8D%95.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"公众号菜单"}],["meta",{"property":"og:description","content":"公众号菜单 本章节，讲解公众号菜单的相关内容，对应 [公众号管理 -> 菜单管理] 菜单，对应 《微信公众号官方文档 —— 自定义菜单》 (opens new window)文档。如下图所示： 界面界面 #1. 表结构 公众号菜单对应 mp_menu 表，结构如下图所示： 表结构表结构 type 字段：按钮类型。如果类型为 CLICK 点击回复时，可进..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E5%85%AC%E4%BC%97%E5%8F%B7%E8%8F%9C%E5%8D%95/%E7%95%8C%E9%9D%A2.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T07:41:53.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-21T07:41:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"公众号菜单\\",\\"image\\":[\\"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E5%85%AC%E4%BC%97%E5%8F%B7%E8%8F%9C%E5%8D%95/%E7%95%8C%E9%9D%A2.png\\",\\"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E5%85%AC%E4%BC%97%E5%8F%B7%E8%8F%9C%E5%8D%95/%E8%A1%A8%E7%BB%93%E6%9E%84.png\\",\\"https://doc.iocoder.cn/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%8B%E5%86%8C/%E5%85%AC%E4%BC%97%E5%8F%B7%E8%8F%9C%E5%8D%95/%E7%82%B9%E5%87%BB%E5%9B%9E%E5%A4%8D.png\\"],\\"dateModified\\":\\"2024-11-21T07:41:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#1. 表结构","slug":"_1-表结构","link":"#_1-表结构","children":[]},{"level":2,"title":"#2. 菜单管理界面","slug":"_2-菜单管理界面","link":"#_2-菜单管理界面","children":[]},{"level":2,"title":"#3. 点击回复","slug":"_3-点击回复","link":"#_3-点击回复","children":[]}],"git":{"createdTime":1732174913000,"updatedTime":1732174913000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.26,"words":377},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/8.公众号手册/7.公众号菜单.md","localizedDate":"2024年11月21日","excerpt":"\\n<p>本章节，讲解公众号菜单的相关内容，对应 [公众号管理 -&gt; 菜单管理] 菜单，对应 <a href=\\"https://developers.weixin.qq.com/doc/offiaccount/Custom_Menus/Creating_Custom-Defined_Menu.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">《微信公众号官方文档 —— 自定义菜单》 (opens new window)</a>文档。如下图所示：</p>\\n<figure><img src=\\"https://doc.iocoder.cn/img/公众号手册/公众号菜单/界面.png\\" alt=\\"界面\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>界面</figcaption></figure>","autoDesc":true}');export{d as comp,l as data};
