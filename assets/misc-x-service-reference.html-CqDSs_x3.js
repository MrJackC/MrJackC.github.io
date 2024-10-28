import{_ as r,c as t,a as i,o as c}from"./app-BQBjlK2G.js";const o={};function a(s,e){return c(),t("div",null,e[0]||(e[0]=[i('<h1 id="一个模块中的service层能不能相互引用" tabindex="-1"><a class="header-anchor" href="#一个模块中的service层能不能相互引用"><span>一个模块中的service层能不能相互引用</span></a></h1><h2 id="_1-问题描述" tabindex="-1"><a class="header-anchor" href="#_1-问题描述"><span>1. 问题描述</span></a></h2><p>一个项目分多模块,那么每个模块内部分为control和service以及dao三层.那么如果在某个service里要调用其他dao,是直接注入dao还是应该将需要的dao用service封装,再注入到这个service层中?</p><h2 id="_2-3种写法" tabindex="-1"><a class="header-anchor" href="#_2-3种写法"><span>2. 3种写法</span></a></h2><ol><li><p>Service只调DAO</p><blockquote><p>主要是为了松耦合，如果调用Dao还会导致循环依赖问题，springboot2.6 已经禁止了循环依赖</p></blockquote></li><li><p>Service主调DAO，偶尔调其它Service</p></li><li><p>Service调其它Service，DAO只允许自己的Service调</p><blockquote><p>每个service 中还包含了业务逻辑。</p></blockquote></li></ol><p>所以后来也只能看项目是什么写法，然后用什么写法。</p><h2 id="_3-自己的考虑" tabindex="-1"><a class="header-anchor" href="#_3-自己的考虑"><span>3. 自己的考虑</span></a></h2><p>几种方式都可以，还是根据公司历史项目情况决定，没必要太纠结。</p><p>如果实现纠结就用一个<strong>facade封装某一具体业务</strong></p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.zhihu.com/question/27139263" target="_blank" rel="noopener noreferrer">一个模块中的service层能不能相互引用?</a></p>',11)]))}const l=r(o,[["render",a],["__file","misc-x-service-reference.html.vue"]]),p=JSON.parse('{"path":"/posts/Daily-Thoughts/misc/misc-x-service-reference.html","title":"一个模块中的service层能不能相互引用","lang":"zh-CN","frontmatter":{"aliases":"一个模块中的service层能不能相互引用","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:53","updated":"2024-05-30 16:45","description":"一个模块中的service层能不能相互引用 1. 问题描述 一个项目分多模块,那么每个模块内部分为control和service以及dao三层.那么如果在某个service里要调用其他dao,是直接注入dao还是应该将需要的dao用service封装,再注入到这个service层中? 2. 3种写法 Service只调DAO 主要是为了松耦合，如果调用...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Daily-Thoughts/misc/misc-x-service-reference.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"一个模块中的service层能不能相互引用"}],["meta",{"property":"og:description","content":"一个模块中的service层能不能相互引用 1. 问题描述 一个项目分多模块,那么每个模块内部分为control和service以及dao三层.那么如果在某个service里要调用其他dao,是直接注入dao还是应该将需要的dao用service封装,再注入到这个service层中? 2. 3种写法 Service只调DAO 主要是为了松耦合，如果调用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一个模块中的service层能不能相互引用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 问题描述","slug":"_1-问题描述","link":"#_1-问题描述","children":[]},{"level":2,"title":"2. 3种写法","slug":"_2-3种写法","link":"#_2-3种写法","children":[]},{"level":2,"title":"3. 自己的考虑","slug":"_3-自己的考虑","link":"#_3-自己的考虑","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.99,"words":297},"filePathRelative":"posts/Daily-Thoughts/misc/misc-x-service-reference.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 问题描述</h2>\\n<p>一个项目分多模块,那么每个模块内部分为control和service以及dao三层.那么如果在某个service里要调用其他dao,是直接注入dao还是应该将需要的dao用service封装,再注入到这个service层中?</p>\\n<h2>2. 3种写法</h2>\\n<ol>\\n<li>\\n<p>Service只调DAO</p>\\n<blockquote>\\n<p>主要是为了松耦合，如果调用Dao还会导致循环依赖问题，springboot2.6 已经禁止了循环依赖</p>\\n</blockquote>\\n</li>\\n<li>\\n<p>Service主调DAO，偶尔调其它Service</p>\\n</li>\\n<li>\\n<p>Service调其它Service，DAO只允许自己的Service调</p>\\n<blockquote>\\n<p>每个service 中还包含了业务逻辑。</p>\\n</blockquote>\\n</li>\\n</ol>","autoDesc":true}');export{l as comp,p as data};
