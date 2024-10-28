import{_ as t,c as l,a as i,o as n}from"./app-DQS7qcOs.js";const a={};function p(o,e){return n(),l("div",null,e[0]||(e[0]=[i('<h1 id="vue组件抽离分分合合的思考" tabindex="-1"><a class="header-anchor" href="#vue组件抽离分分合合的思考"><span>Vue组件抽离分分合合的思考</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>公司有个业务流程，需要超多步骤，大概15个步骤左右，每个步骤</p><p>又有操作和详情。</p><p>每个步骤的内容大概是，针对一份文件进行打分处理。</p><ul><li>左边是文件</li><li>右上的操作记录</li><li>右下是操作区</li></ul><h2 id="_2-分分合合流程" tabindex="-1"><a class="header-anchor" href="#_2-分分合合流程"><span>2. 分分合合流程</span></a></h2><h3 id="_2-1-前端30多个页面的组合" tabindex="-1"><a class="header-anchor" href="#_2-1-前端30多个页面的组合"><span>2.1 前端30多个页面的组合</span></a></h3><p>前端将30多个页面分别复制一份出来，针对不同步骤改动。</p><ul><li><p>面临的问题</p><p>我在对接业务的时候，很多业务逻辑其实是共用的，我需要将业务复制到30个地方（业务还是非常多且复杂的）</p></li></ul><h3 id="_2-2-共用一个组件通过状态码判断" tabindex="-1"><a class="header-anchor" href="#_2-2-共用一个组件通过状态码判断"><span>2.2 共用一个组件通过状态码判断</span></a></h3><p>我将前端的30多个组件整合到一个组件，通过状态码判断。</p><ul><li><p>优势</p><p>我所有的业务逻辑只需要写在一个页面中，一个改动不需要涉及过多页面同步更改</p></li><li><p>缺点</p><ol><li>状态码实在太多了，单单一个显示隐藏就需要很多状态判断来控制。而且非常容易出错。</li><li>一个页面代码行数近3000行了，难以维护</li></ol></li></ul><h3 id="_2-3-结合业务再一次拆分" tabindex="-1"><a class="header-anchor" href="#_2-3-结合业务再一次拆分"><span>2.3 结合业务再一次拆分</span></a></h3><ol><li>将左边不易变的文件预览区，抽离成一个单独的组件</li><li>将右上的操作记录区按业务大节点拆分成5个小组件。 <ul><li>每个小组件只负责一个业务大节点的html处理,数据由统一的父级下发数据</li><li>右上是所有情况都要显示的。只是显示多少问题</li></ul></li><li>将右下的操作区，根据步骤流程节点划分为20多个小组件 <ul><li>操作流程节点独立划分</li><li>详情与操作拆分</li></ul></li></ol>',15)]))}const s=t(a,[["render",p],["__file","vue-components-split-problem.html.vue"]]),h=JSON.parse('{"path":"/posts/Daily-Thoughts/deepImpression/vue-components-split-problem.html","title":"Vue组件抽离分分合合的思考","lang":"zh-CN","frontmatter":{"description":"Vue组件抽离分分合合的思考 1. 背景 公司有个业务流程，需要超多步骤，大概15个步骤左右，每个步骤 又有操作和详情。 每个步骤的内容大概是，针对一份文件进行打分处理。 左边是文件 右上的操作记录 右下是操作区 2. 分分合合流程 2.1 前端30多个页面的组合 前端将30多个页面分别复制一份出来，针对不同步骤改动。 面临的问题 我在对接业务的时候，...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Daily-Thoughts/deepImpression/vue-components-split-problem.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Vue组件抽离分分合合的思考"}],["meta",{"property":"og:description","content":"Vue组件抽离分分合合的思考 1. 背景 公司有个业务流程，需要超多步骤，大概15个步骤左右，每个步骤 又有操作和详情。 每个步骤的内容大概是，针对一份文件进行打分处理。 左边是文件 右上的操作记录 右下是操作区 2. 分分合合流程 2.1 前端30多个页面的组合 前端将30多个页面分别复制一份出来，针对不同步骤改动。 面临的问题 我在对接业务的时候，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue组件抽离分分合合的思考\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 分分合合流程","slug":"_2-分分合合流程","link":"#_2-分分合合流程","children":[{"level":3,"title":"2.1 前端30多个页面的组合","slug":"_2-1-前端30多个页面的组合","link":"#_2-1-前端30多个页面的组合","children":[]},{"level":3,"title":"2.2 共用一个组件通过状态码判断","slug":"_2-2-共用一个组件通过状态码判断","link":"#_2-2-共用一个组件通过状态码判断","children":[]},{"level":3,"title":"2.3 结合业务再一次拆分","slug":"_2-3-结合业务再一次拆分","link":"#_2-3-结合业务再一次拆分","children":[]}]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.54,"words":461},"filePathRelative":"posts/Daily-Thoughts/deepImpression/vue-components-split-problem.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>公司有个业务流程，需要超多步骤，大概15个步骤左右，每个步骤</p>\\n<p>又有操作和详情。</p>\\n<p>每个步骤的内容大概是，针对一份文件进行打分处理。</p>\\n<ul>\\n<li>左边是文件</li>\\n<li>右上的操作记录</li>\\n<li>右下是操作区</li>\\n</ul>\\n<h2>2. 分分合合流程</h2>\\n<h3>2.1 前端30多个页面的组合</h3>\\n<p>前端将30多个页面分别复制一份出来，针对不同步骤改动。</p>\\n<ul>\\n<li>\\n<p>面临的问题</p>\\n<p>我在对接业务的时候，很多业务逻辑其实是共用的，我需要将业务复制到30个地方（业务还是非常多且复杂的）</p>\\n</li>\\n</ul>","autoDesc":true}');export{s as comp,h as data};
