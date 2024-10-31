import{_ as e,c as i,a,o as r}from"./app-mWs04Xnh.js";const n={};function s(o,t){return r(),i("div",null,t[0]||(t[0]=[a('<h1 id="css样式权重和优先级" tabindex="-1"><a class="header-anchor" href="#css样式权重和优先级"><span>css样式权重和优先级</span></a></h1><h2 id="_1-总结" tabindex="-1"><a class="header-anchor" href="#_1-总结"><span>1. 总结</span></a></h2><ol><li><strong>常用选择器权重优先级：!important &gt; id &gt; class &gt; tag</strong></li><li>!important可以提升样式优先级，但不建议使用。如果!important被用于一个简写的样式属性，那么这条简写的样式属性所代表的子属性都会被应用上!important。 例如：<em>background: blue !important;</em></li><li>如果两条样式都使用!important，则权重值高的优先级更高</li><li>在css样式表中，同一个CSS样式你写了两次，后面的会覆盖前面的</li><li>样式指向同一元素，权重规则生效，权重大的被应用</li><li>样式指向同一元素，权重规则生效，权重相同时，就近原则生效，后面定义的被应用</li><li>样式不指向同一元素时，权重规则失效，就近原则生效，离目标元素最近的样式被应用</li></ol><h2 id="_2-什么是权重" tabindex="-1"><a class="header-anchor" href="#_2-什么是权重"><span>2. 什么是权重</span></a></h2><ol><li>权重决定了你css规则怎样被浏览器解析直到生效。“css权重关系到你的css规则是怎样显示的”。</li><li>当很多的样式被应用到某一个元素上时，权重是一个决定哪种样式生效，或者是优先级的过程。</li><li>每个选择器都有自己的权重。你的每条css规则，都包含一个权重级别。 这个级别是由不同的选择器加权计算的，通过权重，不同的样式最终会作用到你的网页中 。</li><li>如果两个选择器同时作用到一个元素上，权重高者生效。</li></ol><p><strong>权重记忆口诀</strong>：<em>从0开始，一个行内样式+1000，一个id选择器+100，一个属性选择器、class或者伪类+10，一个元素选择器，或者伪元素+1，通配符+0。</em></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230858284.png" alt="image-20201013153629997" tabindex="0" loading="lazy"><figcaption>image-20201013153629997</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/41604775" target="_blank" rel="noopener noreferrer">你必须懂的css样式权重和优先级</a></p>',9)]))}const c=e(n,[["render",s],["__file","css-attr-priority.html.vue"]]),p=JSON.parse('{"path":"/posts/Web/frontend-css/css-attr-priority.html","title":"css样式权重和优先级","lang":"zh-CN","frontmatter":{"description":"css样式权重和优先级 1. 总结 常用选择器权重优先级：!important > id > class > tag !important可以提升样式优先级，但不建议使用。如果!important被用于一个简写的样式属性，那么这条简写的样式属性所代表的子属性都会被应用上!important。 例如：background: blue !important...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-css/css-attr-priority.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"css样式权重和优先级"}],["meta",{"property":"og:description","content":"css样式权重和优先级 1. 总结 常用选择器权重优先级：!important > id > class > tag !important可以提升样式优先级，但不建议使用。如果!important被用于一个简写的样式属性，那么这条简写的样式属性所代表的子属性都会被应用上!important。 例如：background: blue !important..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230858284.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"css样式权重和优先级\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230858284.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 总结","slug":"_1-总结","link":"#_1-总结","children":[]},{"level":2,"title":"2. 什么是权重","slug":"_2-什么是权重","link":"#_2-什么是权重","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.61,"words":483},"filePathRelative":"posts/Web/frontend-css/css-attr-priority.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 总结</h2>\\n<ol>\\n<li><strong>常用选择器权重优先级：!important &gt; id &gt; class &gt; tag</strong></li>\\n<li>!important可以提升样式优先级，但不建议使用。如果!important被用于一个简写的样式属性，那么这条简写的样式属性所代表的子属性都会被应用上!important。 例如：<em>background: blue !important;</em></li>\\n<li>如果两条样式都使用!important，则权重值高的优先级更高</li>\\n<li>在css样式表中，同一个CSS样式你写了两次，后面的会覆盖前面的</li>\\n<li>样式指向同一元素，权重规则生效，权重大的被应用</li>\\n<li>样式指向同一元素，权重规则生效，权重相同时，就近原则生效，后面定义的被应用</li>\\n<li>样式不指向同一元素时，权重规则失效，就近原则生效，离目标元素最近的样式被应用</li>\\n</ol>","autoDesc":true}');export{c as comp,p as data};
