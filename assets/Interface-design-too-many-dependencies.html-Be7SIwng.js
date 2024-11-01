import{_ as t,c as n,a,o as i}from"./app-tJW29Kmg.js";const l={};function s(o,e){return i(),n("div",null,e[0]||(e[0]=[a('<h1 id="接口设计之依赖项过多时方案选择" tabindex="-1"><a class="header-anchor" href="#接口设计之依赖项过多时方案选择"><span>接口设计之依赖项过多时方案选择</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>在开发中有时候会面对一些复杂场景，例如</p><ol><li>表单项采集项特别多，有二三十个。</li><li>针对表单我们还有额外操作，这些操作需要表单中的10个参数</li></ol><h2 id="_2-两种方案" tabindex="-1"><a class="header-anchor" href="#_2-两种方案"><span>2. 两种方案</span></a></h2><h3 id="_2-1-方案1-把需要的参数传过来" tabindex="-1"><a class="header-anchor" href="#_2-1-方案1-把需要的参数传过来"><span>2.1 方案1：把需要的参数传过来</span></a></h3><p>传10个基础参数进来（我嫌太多，每个操作接口都要传）</p><h3 id="_2-2-方案2-每次操作前保存信息-只传表单id" tabindex="-1"><a class="header-anchor" href="#_2-2-方案2-每次操作前保存信息-只传表单id"><span>2.2 方案2：每次操作前保存信息，只传表单id</span></a></h3><p>方案2：每次操作前保存基础信息，多传一个表单id就可以（又觉得每次操作前保存是不是太浪费性能）</p><h2 id="_3-最终方案" tabindex="-1"><a class="header-anchor" href="#_3-最终方案"><span>3. 最终方案</span></a></h2><p><strong>我们程序在乎的是性能和用户体验。</strong></p><p>方案2每次保存的方案，需要额外浪费2次不必要的网络请求，</p><ol><li>前端先保存表单</li><li>后端拿表单id查表单信息</li></ol><p>这两步完全是没必要做的。</p><p>如果我们觉得写参数麻烦。我们<strong>可以直接把表单对象整个传进去</strong>，暴力一点也没事</p><h2 id="_4-为什么会有这种问题产生" tabindex="-1"><a class="header-anchor" href="#_4-为什么会有这种问题产生"><span>4. 为什么会有这种问题产生？</span></a></h2><p>温水煮青蛙的结果</p><ol><li>刚开始只需要表单id关联就好</li><li>随后需要校验2个表单参数，ok再这几个操作中加2个新字段就好</li><li>随着业务的发展，需要校验的数据越来越多。重复参数的增加导致多个操作方法都要加。索性改成通过表单id 后台查一遍</li></ol><p>其实回过头来，如果一开始就有这样的需求，或许自己不会在这两种方案中纠结。</p><p>当遇到问题时，要看透本质</p>',20)]))}const p=t(l,[["render",s],["__file","Interface-design-too-many-dependencies.html.vue"]]),d=JSON.parse('{"path":"/posts/Daily-Thoughts/summary/Interface-design-too-many-dependencies.html","title":"接口设计之依赖项过多时方案选择","lang":"zh-CN","frontmatter":{"aliases":"接口设计之依赖项过多时方案选择","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:53","updated":"2024-05-30 17:36","description":"接口设计之依赖项过多时方案选择 1. 背景 在开发中有时候会面对一些复杂场景，例如 表单项采集项特别多，有二三十个。 针对表单我们还有额外操作，这些操作需要表单中的10个参数 2. 两种方案 2.1 方案1：把需要的参数传过来 传10个基础参数进来（我嫌太多，每个操作接口都要传） 2.2 方案2：每次操作前保存信息，只传表单id 方案2：每次操作前保存...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Daily-Thoughts/summary/Interface-design-too-many-dependencies.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"接口设计之依赖项过多时方案选择"}],["meta",{"property":"og:description","content":"接口设计之依赖项过多时方案选择 1. 背景 在开发中有时候会面对一些复杂场景，例如 表单项采集项特别多，有二三十个。 针对表单我们还有额外操作，这些操作需要表单中的10个参数 2. 两种方案 2.1 方案1：把需要的参数传过来 传10个基础参数进来（我嫌太多，每个操作接口都要传） 2.2 方案2：每次操作前保存信息，只传表单id 方案2：每次操作前保存..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"接口设计之依赖项过多时方案选择\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 两种方案","slug":"_2-两种方案","link":"#_2-两种方案","children":[{"level":3,"title":"2.1 方案1：把需要的参数传过来","slug":"_2-1-方案1-把需要的参数传过来","link":"#_2-1-方案1-把需要的参数传过来","children":[]},{"level":3,"title":"2.2 方案2：每次操作前保存信息，只传表单id","slug":"_2-2-方案2-每次操作前保存信息-只传表单id","link":"#_2-2-方案2-每次操作前保存信息-只传表单id","children":[]}]},{"level":2,"title":"3. 最终方案","slug":"_3-最终方案","link":"#_3-最终方案","children":[]},{"level":2,"title":"4. 为什么会有这种问题产生？","slug":"_4-为什么会有这种问题产生","link":"#_4-为什么会有这种问题产生","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.59,"words":478},"filePathRelative":"posts/Daily-Thoughts/summary/Interface-design-too-many-dependencies.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>在开发中有时候会面对一些复杂场景，例如</p>\\n<ol>\\n<li>表单项采集项特别多，有二三十个。</li>\\n<li>针对表单我们还有额外操作，这些操作需要表单中的10个参数</li>\\n</ol>\\n<h2>2. 两种方案</h2>\\n<h3>2.1 方案1：把需要的参数传过来</h3>\\n<p>传10个基础参数进来（我嫌太多，每个操作接口都要传）</p>\\n<h3>2.2 方案2：每次操作前保存信息，只传表单id</h3>\\n<p>方案2：每次操作前保存基础信息，多传一个表单id就可以（又觉得每次操作前保存是不是太浪费性能）</p>\\n<h2>3. 最终方案</h2>","autoDesc":true}');export{p as comp,d as data};
