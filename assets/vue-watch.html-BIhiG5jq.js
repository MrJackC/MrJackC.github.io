import{_ as a,c as n,a as l,o as i}from"./app-BQBjlK2G.js";const e={};function p(o,s){return i(),n("div",null,s[0]||(s[0]=[l(`<h1 id="vue中watch监听对象内属性的方法" tabindex="-1"><a class="header-anchor" href="#vue中watch监听对象内属性的方法"><span>Vue中watch监听对象内属性的方法</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>我们有个场景，需要监听表单中任意一个属性变化，再将变化通过vuex 传递给其他组件使用。因为实时性要求高，且字段多。并不想每个字段变化后去触发事件。</p><ul><li><p>需求：</p><p>我们watch监听对象内的属性变化</p></li><li><p>问题</p><p>现在我们正常的写法，只能监听对象的变化，对象内的属性变化并不会被监听到</p></li><li><p>案例</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>new Vue({</span></span>
<span class="line"><span>  data: {</span></span>
<span class="line"><span>    count: 10，</span></span>
<span class="line"><span>    blog:{</span></span>
<span class="line"><span>        title:&#39;my-blog&#39;,</span></span>
<span class="line"><span>        categories:[]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  watch: {</span></span>
<span class="line"><span>    count: function (newval, oldVal) {</span></span>
<span class="line"><span>      console.log(\`new: %s, old: %s\`, newVal, oldVal);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>上述情况里<code>data</code>中的<code>count</code>属性可以直接监听，但是如果需要监听的数据是对象内的某一属性值的变化，直接<code>watch</code>对象<code>blog</code>是检测不到变化的，这是因为<code>blog</code>这个对象的指向并没有发生改变。</p></li></ul><h2 id="_2-解决方法" tabindex="-1"><a class="header-anchor" href="#_2-解决方法"><span>2. 解决方法</span></a></h2><h3 id="_2-1-方案一-深度检测" tabindex="-1"><a class="header-anchor" href="#_2-1-方案一-深度检测"><span>2.1 方案一：深度检测</span></a></h3><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">new</span><span style="color:#98C379;--shiki-dark:#98C379;"> Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  data:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    count:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 10，</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    blog:</span><span style="color:#98C379;--shiki-dark:#98C379;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        title:</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&#39;my-blog&#39;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        categories:[]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  watch:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    blog:</span><span style="color:#98C379;--shiki-dark:#98C379;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        handler(newVal,oldVal</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#98C379;--shiki-dark:#98C379;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">            console.log(</span><span style="color:#98C379;--shiki-dark:#98C379;">\`</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">new:</span><span style="color:#98C379;--shiki-dark:#98C379;"> \${</span><span style="color:#E06C75;--shiki-dark:#E06C75;">newVal</span><span style="color:#98C379;--shiki-dark:#98C379;">}, old: \${</span><span style="color:#E06C75;--shiki-dark:#E06C75;">oldVal</span><span style="color:#98C379;--shiki-dark:#98C379;">}\`</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        deep:true</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>里面的<code>deep</code>设为了<code>true</code>，这样的话，如果修改了这个<code>blog</code>中的任何一个属性，都会执行<code>handler</code>这个方法。</p><blockquote><p>不过这样会造成更多的性能开销，尤其是对象里面属性过多，结构嵌套过深的时候。而且有时候我们就只想关心这个对象中的某个特定属性</p></blockquote><p>我们也可以监听某一个属性</p><h3 id="_2-2-用字符串来表示对象的属性调用" tabindex="-1"><a class="header-anchor" href="#_2-2-用字符串来表示对象的属性调用"><span>2.2 用字符串来表示对象的属性调用</span></a></h3><div class="language-javascript" data-ext="javascript" data-title="javascript"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  data</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">，</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    blog</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:{</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        title</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;my-blog&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        categories</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:[]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  watch</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    &#39;blog.categories&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">newVal</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">oldVal</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        console</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">log</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">\`new:</span><span style="color:#C678DD;--shiki-dark:#C678DD;">\${</span><span style="color:#E06C75;--shiki-dark:#E06C75;">newVal</span><span style="color:#C678DD;--shiki-dark:#C678DD;">}</span><span style="color:#98C379;--shiki-dark:#98C379;">, old:</span><span style="color:#C678DD;--shiki-dark:#C678DD;">\${</span><span style="color:#E06C75;--shiki-dark:#E06C75;">oldVal</span><span style="color:#C678DD;--shiki-dark:#C678DD;">}</span><span style="color:#98C379;--shiki-dark:#98C379;">\`</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }, </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><h3 id="_2-3-使用computed计算属性" tabindex="-1"><a class="header-anchor" href="#_2-3-使用computed计算属性"><span>2.3 使用<code>computed</code>计算属性</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  data</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    count</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">，</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    blog</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:{</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        title</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;my-blog&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        categories</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:[]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  computed</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    categories</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">      return</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">blog</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">categories</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  watch</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    categories</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">newVal</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">oldVal</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">      console</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">log</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">\`new:</span><span style="color:#C678DD;--shiki-dark:#C678DD;">\${</span><span style="color:#E06C75;--shiki-dark:#E06C75;">newVal</span><span style="color:#C678DD;--shiki-dark:#C678DD;">}</span><span style="color:#98C379;--shiki-dark:#98C379;">, old:</span><span style="color:#C678DD;--shiki-dark:#C678DD;">\${</span><span style="color:#E06C75;--shiki-dark:#E06C75;">oldVal</span><span style="color:#C678DD;--shiki-dark:#C678DD;">}</span><span style="color:#98C379;--shiki-dark:#98C379;">\`</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }, </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://segmentfault.com/a/1190000018080301" target="_blank" rel="noopener noreferrer">Vue中watch对象内属性的方法</a></p>`,16)]))}const c=a(e,[["render",p],["__file","vue-watch.html.vue"]]),t=JSON.parse('{"path":"/posts/Web/frontend-vue/vue-watch.html","title":"Vue中watch监听对象内属性的方法","lang":"zh-CN","frontmatter":{"description":"Vue中watch监听对象内属性的方法 1. 背景 我们有个场景，需要监听表单中任意一个属性变化，再将变化通过vuex 传递给其他组件使用。因为实时性要求高，且字段多。并不想每个字段变化后去触发事件。 需求： 我们watch监听对象内的属性变化 问题 现在我们正常的写法，只能监听对象的变化，对象内的属性变化并不会被监听到 案例 上述情况里data中的c...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Web/frontend-vue/vue-watch.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Vue中watch监听对象内属性的方法"}],["meta",{"property":"og:description","content":"Vue中watch监听对象内属性的方法 1. 背景 我们有个场景，需要监听表单中任意一个属性变化，再将变化通过vuex 传递给其他组件使用。因为实时性要求高，且字段多。并不想每个字段变化后去触发事件。 需求： 我们watch监听对象内的属性变化 问题 现在我们正常的写法，只能监听对象的变化，对象内的属性变化并不会被监听到 案例 上述情况里data中的c..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue中watch监听对象内属性的方法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 解决方法","slug":"_2-解决方法","link":"#_2-解决方法","children":[{"level":3,"title":"2.1 方案一：深度检测","slug":"_2-1-方案一-深度检测","link":"#_2-1-方案一-深度检测","children":[]},{"level":3,"title":"2.2 用字符串来表示对象的属性调用","slug":"_2-2-用字符串来表示对象的属性调用","link":"#_2-2-用字符串来表示对象的属性调用","children":[]},{"level":3,"title":"2.3 使用computed计算属性","slug":"_2-3-使用computed计算属性","link":"#_2-3-使用computed计算属性","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.52,"words":455},"filePathRelative":"posts/Web/frontend-vue/vue-watch.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>我们有个场景，需要监听表单中任意一个属性变化，再将变化通过vuex 传递给其他组件使用。因为实时性要求高，且字段多。并不想每个字段变化后去触发事件。</p>\\n<ul>\\n<li>\\n<p>需求：</p>\\n<p>我们watch监听对象内的属性变化</p>\\n</li>\\n<li>\\n<p>问题</p>\\n<p>现在我们正常的写法，只能监听对象的变化，对象内的属性变化并不会被监听到</p>\\n</li>\\n<li>\\n<p>案例</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>new Vue({</span></span>\\n<span class=\\"line\\"><span>  data: {</span></span>\\n<span class=\\"line\\"><span>    count: 10，</span></span>\\n<span class=\\"line\\"><span>    blog:{</span></span>\\n<span class=\\"line\\"><span>        title:\'my-blog\',</span></span>\\n<span class=\\"line\\"><span>        categories:[]</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span>  },</span></span>\\n<span class=\\"line\\"><span>  watch: {</span></span>\\n<span class=\\"line\\"><span>    count: function (newval, oldVal) {</span></span>\\n<span class=\\"line\\"><span>      console.log(`new: %s, old: %s`, newVal, oldVal);</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span>  }</span></span>\\n<span class=\\"line\\"><span>})</span></span></code></pre>\\n</div><p>上述情况里<code>data</code>中的<code>count</code>属性可以直接监听，但是如果需要监听的数据是对象内的某一属性值的变化，直接<code>watch</code>对象<code>blog</code>是检测不到变化的，这是因为<code>blog</code>这个对象的指向并没有发生改变。</p>\\n</li>\\n</ul>","autoDesc":true}');export{c as comp,t as data};
