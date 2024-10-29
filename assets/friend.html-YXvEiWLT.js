import{g as h,_ as C,o as p,c as B,F as A,h as m,f as E,b as s,t as F,e as k,w as o,a as y,r as g,d as a}from"./app-DEK5G3U7.js";const b=[{name:"春鸽鸽",desc:"到最后，竟庆幸于夕阳仍留在身上",icon:"/logo.svg",link:"https://mrjason.me/"},{name:"廿壴(GANXB2)博客",desc:"探讨WEB技术.交流日常生活.感悟短暂人生.分享简单快乐",icon:"https://blog.ganxb2.com/img/avatar.png",link:"https://blog.ganxb2.com/"},{name:"Mr.Hope",desc:"VuePress Theme Hope 主题作者。",icon:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com/"},{name:"一之笔",desc:"大圣，此去欲何？踏南天，碎凌霄，如若一去不回……？便一去不回！💪",icon:"https://yizibi.github.io/img/avatar-hux-ny.jpg",link:"https://yizibi.github.io/"},{name:"Vivian陈薇",desc:"《程序员》专题主编 Android程序媛",icon:"http://upload.jianshu.io/users/upload_avatars/196894/99323ae8-5924-4730-b73f-9d0d284ff243.png?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",link:"http://www.vivianchen.cn/"},{name:"Bing🐣",desc:"基于VuePress的个人博客，记录日常开发问题",icon:"https://liubing.me/logo.png",link:"https://liubing.me/"},{name:"SaraKale’s blog",desc:"星轮流转，唯心不变…",icon:"https://npm.elemecdn.com/sarakale-assets@v1/sarakale.jpg",link:"https://www.sarakale.top/blog/"},{name:"Leonus",desc:"进一寸有进一寸的欢喜。",icon:"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5",link:"https://blog.leonus.cn/"},{name:"UyoAhz",desc:"集中精神，以气御剪",icon:"https://q1.qlogo.cn/g?b=qq&nk=2496091142&s=640",link:"https://uyoahz.cn/"},{name:"铭心石刻",desc:"愿岁并谢，与友长兮",icon:" https://blog.kouseki.cn/imgs/avatar.webp",link:"https://blog.kouseki.cn/"},{name:"Anjhon’s blog",desc:"但知行好事，莫要问前程",icon:"https://s2.loli.net/2023/05/16/MdciSXAbrEx3LW9.jpg",link:"https://www.anjhon.top/"},{name:"OhYee ⭐",desc:"个人向笔记性质技术分享，共产主义开源编程🤪",icon:"https://static.ohyee.cc/logo.svg",link:"https://www.ohyee.cc/"},{name:"寒烟志",desc:"半山腰总是挤的，你得去山顶看看",icon:"https://www.qiaoxiao.top/static/avater/avater.jpg",link:"https://yanyuplus.cn/"},{name:"Quantum Bit",desc:"Never stop searching, even if only for a brief flash of light.",icon:"https://www.eula.club/avatar.png",link:"https://www.eula.club"},{name:"Camill",desc:"嵌入式、ROS、还有生活！",icon:"https://www.camill.love/img/myself.jpg",link:"https://camill.love"},{name:"SMallTIAN’s Blog",desc:"写我想写的，说我想说的。只要自己开心就好。",icon:"https://mcsmalltian.com/frontend/img/avatar.webp",link:"https://blog.mcsmalltian.com/"},{name:"LineXic书屋",desc:"念念不忘，必有回响",icon:"https://linexic.top/logo.png",link:"https://linexic.top/"},{name:"RichELF",desc:"给岁月以文明，给机器以生命。",icon:"https://richelf.tech/favicon.ico",link:"https://richelf.tech/"},{name:"文奚•技术驿站",desc:"代码在手，天下我有",icon:"https://vxcode.top/assets/icon/logo2.png",link:"https://vxcode.top"},{name:"火柴人儿的小站",desc:"仰望星空的打工人",icon:"https://bu.dusays.com/2024/09/11/66e1573305b78.jpg",link:"https://huochairener-blog.cn/"},{name:"运维开发绿皮书",desc:"放置运维开发笔记、搜集、摘录、实践，保持好奇心，看文需谨慎，后果很严重！",icon:"https://www.geekery.cn/logo.svg",link:"https://www.geekery.cn/"}],v=[],D=h({__name:"MyCoverLink",props:{type:{type:String,require:!0}},setup(r,{expose:e}){e();const i=r;let u;switch(i.type){case"friend":u=b;break;case"invalid":u=v;break;default:u=[];break}const c={props:i,get linkDatas(){return u},set linkDatas(d){u=d}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),f={class:"vp-project-panel"},_=["href"],w=["src"],x={class:"card-content"},j={class:"link-avatar my-auto"},q=["src"],M={class:"link-text"},S={class:"link-name"},L={class:"link-desc"};function N(r,e,i,u,c,d){return p(),B("div",f,[u.linkDatas.length>0?(p(!0),B(A,{key:0},m(u.linkDatas,(t,n)=>(p(),B("div",{key:n,class:"link-card"},[s("a",{class:"card-body",href:t.link,target:"_blank"},[s("img",{class:"link-picture",src:`https://s0.wp.com/mshots/v1/${encodeURIComponent(t.link)}?w=323&h=200`,alt:"",rel:"noopener noreferrer external"},null,8,w),s("div",x,[s("div",j,[s("img",{src:t.icon,onerror:'this.onerror=null,this.src=this.srcset="/assets/avatar.webp"'},null,8,q)]),s("div",M,[s("div",S,F(t.name),1),s("div",L,F(t.desc),1)])])],8,_)]))),128)):E("v-if",!0)])}const T=C(D,[["render",N],["__scopeId","data-v-6cab3d21"],["__file","MyCoverLink.vue"]]),V=h({__name:"friend.html",setup(r,{expose:e}){e();const i={get MyCoverLink(){return T}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}});function z(r,e,i,u,c,d){const t=g("CodeTabs");return p(),B("div",null,[e[6]||(e[6]=s("h2",{id:"小伙伴",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#小伙伴"},[s("span",null,"小伙伴")])],-1)),k(u.MyCoverLink,{type:"friend"}),e[7]||(e[7]=s("h2",{id:"失效链接",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#失效链接"},[s("span",null,"失效链接")])],-1)),k(u.MyCoverLink,{type:"invalid"}),e[8]||(e[8]=s("h2",{id:"本站信息如下",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#本站信息如下"},[s("span",null,"本站信息如下")])],-1)),k(t,{id:"14",data:[{id:"🌴General"},{id:"json"},{id:"yml"}]},{title0:o(({value:n,isActive:l})=>e[0]||(e[0]=[a("🌴General")])),title1:o(({value:n,isActive:l})=>e[1]||(e[1]=[a("json")])),title2:o(({value:n,isActive:l})=>e[2]||(e[2]=[a("yml")])),tab0:o(({value:n,isActive:l})=>e[3]||(e[3]=[s("div",{class:"language-yml","data-ext":"yml","data-title":"yml"},[s("pre",{class:"shiki shiki-themes one-dark-pro one-dark-pro vp-code",style:{"background-color":"#282c34","--shiki-dark-bg":"#282c34",color:"#abb2bf","--shiki-dark":"#abb2bf"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E06C75","--shiki-dark":"#E06C75"}},"昵称"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},": "),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'"春鸽鸽"'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E06C75","--shiki-dark":"#E06C75"}},"简介"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},": "),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'"到最后，竟庆幸于夕阳仍留在身上"'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E06C75","--shiki-dark":"#E06C75"}},"头像"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},": "),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'"https://mrjason.me/logo.svg"'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E06C75","--shiki-dark":"#E06C75"}},"连接"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},": "),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'"https://mrjason.me/"')])])])],-1)])),tab1:o(({value:n,isActive:l})=>e[4]||(e[4]=[s("div",{class:"language-json","data-ext":"json","data-title":"json"},[s("pre",{class:"shiki shiki-themes one-dark-pro one-dark-pro vp-code",style:{"background-color":"#282c34","--shiki-dark-bg":"#282c34",color:"#abb2bf","--shiki-dark":"#abb2bf"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E06C75","--shiki-dark":"#E06C75"}},'  "name"'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},": "),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'"春鸽鸽"'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E06C75","--shiki-dark":"#E06C75"}},'  "desc"'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},": "),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'"到最后，竟庆幸于夕阳仍留在身上"'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E06C75","--shiki-dark":"#E06C75"}},'  "ico"'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},": "),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'"https://mrjason.me/logo.svg"'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E06C75","--shiki-dark":"#E06C75"}},'  "link"'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},": "),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'"https://mrjason.me/"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"}")])])])],-1)])),tab2:o(({value:n,isActive:l})=>e[5]||(e[5]=[s("div",{class:"language-yml","data-ext":"yml","data-title":"yml"},[s("pre",{class:"shiki shiki-themes one-dark-pro one-dark-pro vp-code",style:{"background-color":"#282c34","--shiki-dark-bg":"#282c34",color:"#abb2bf","--shiki-dark":"#abb2bf"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"- "),s("span",{style:{color:"#E06C75","--shiki-dark":"#E06C75"}},"name"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},": "),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'"春鸽鸽"'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"- "),s("span",{style:{color:"#E06C75","--shiki-dark":"#E06C75"}},"desc"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},": "),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'"到最后，竟庆幸于夕阳仍留在身上"'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"- "),s("span",{style:{color:"#E06C75","--shiki-dark":"#E06C75"}},"ico"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},": "),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'"https://mrjason.me/logo.svg"'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"- "),s("span",{style:{color:"#E06C75","--shiki-dark":"#E06C75"}},"link"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},": "),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'"https://mrjason.me/"')])])])],-1)])),_:1}),e[9]||(e[9]=y(`<h3 id="申请方式" tabindex="-1"><a class="header-anchor" href="#申请方式"><span>🍭 申请方式</span></a></h3><ol><li><p>把本站添加到你的站点中</p></li><li><p>在评论区按照以下格式留言</p></li></ol><div class="language-yml" data-ext="yml" data-title="yml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">昵称</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">昵称或网站title</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">简介</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">网站或个人简介，多出两行部分不显示</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">头像</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">头像连接</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">链接</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">站点连接</span></span></code></pre></div><div class="hint-container warning"><p class="hint-container-title">免责声明</p><ol><li>本站将定期检查友情链接，确保所有链接都是有效的，避免死链等无效链接影响用户体验。</li><li>本站不接受涉及政治和非法内容的网站申请友情链接，维护健康和谐的网络环境。</li><li>长期无更新、无法访问的博客将被视为失效链接，本站有权终止相关的友情链接。</li><li>在友情链接之后，希望能够互勉互动，共同促进博客的发展和进步。</li><li>为了避免友情链接中断和影响用户体验，本站建议申请友情链接前请确保贵站能够长期稳定运营下去。</li><li>如有链接变更，请及时联系本站并告知变更信息，同时请填写正确的邮箱账号，方便联系和告知。</li></ol></div>`,4))])}const P=C(V,[["render",z],["__file","friend.html.vue"]]),O=JSON.parse('{"path":"/friend.html","title":"友情链接","lang":"zh-CN","frontmatter":{"title":"友情链接","icon":"link","sidebar":false,"article":false,"description":"小伙伴","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/friend.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"友情链接"}],["meta",{"property":"og:description","content":"小伙伴"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"友情链接\\",\\"description\\":\\"小伙伴\\"}"]]},"headers":[{"level":2,"title":"小伙伴","slug":"小伙伴","link":"#小伙伴","children":[]},{"level":2,"title":"失效链接","slug":"失效链接","link":"#失效链接","children":[]},{"level":2,"title":"本站信息如下","slug":"本站信息如下","link":"#本站信息如下","children":[{"level":3,"title":"🍭 申请方式","slug":"申请方式","link":"#申请方式","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.41,"words":424},"filePathRelative":"friend.md","localizedDate":"2024年10月21日","excerpt":"<h2>小伙伴</h2>\\n","autoDesc":true}');export{P as comp,O as data};
