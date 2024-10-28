import{_ as a,c as n,a as e,o as i}from"./app-DQS7qcOs.js";const l={};function r(o,s){return i(),n("div",null,s[0]||(s[0]=[e(`<h1 id="vue自定义防抖指令" tabindex="-1"><a class="header-anchor" href="#vue自定义防抖指令"><span>Vue自定义防抖指令</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>项目中经常会遇到说，一个按钮因为网络IO等问题，可能还在请求过程中，用户连续点击。导致重复发送请求。</p><p>这种情况下我们使用防抖/节流就能很好的解决，实现得方案有很多，但是自定义指令的方式是最简单的。后面有需要使用防抖的地方只要使用改指令即可。</p><h2 id="_2-原始情况" tabindex="-1"><a class="header-anchor" href="#_2-原始情况"><span>2. 原始情况</span></a></h2><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">button</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> @click</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;sayHello&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;提交&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">button</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sayHello</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    console</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">log</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;Hello!&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>当我们连续点击多次，控制台会输出多次 Hello!</p><h2 id="_3-我想达到的效果" tabindex="-1"><a class="header-anchor" href="#_3-我想达到的效果"><span>3. 我想达到的效果：</span></a></h2><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">button</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> v-throttle</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">“200”</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> @click</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;sayHello&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;提交&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">button</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>通过此设置，可以让提交按钮在200ms内的多次点击只能执行一次，并且刚点击时就执行。若不设置时间（200），则默认2000ms内只执行一次。</p><h2 id="_4-防抖-节流的区别和选择" tabindex="-1"><a class="header-anchor" href="#_4-防抖-节流的区别和选择"><span>4. 防抖 / 节流的区别和选择</span></a></h2><h3 id="_4-1-解释" tabindex="-1"><a class="header-anchor" href="#_4-1-解释"><span>4.1 解释</span></a></h3><ul><li><p>节流</p><p>指一定时间内js方法只跑一次。比如人的眨眼睛，就是一定时间内眨一次。这是函数。</p></li><li><p>防抖</p><p>指频繁触发的情况下，只有足够的空闲时间，才执行代码一次。比如生活中的坐公交，就是一定时间内，如果有人陆续刷卡上车，司机就不会开车。只有别人没刷卡了，司机才开车。</p></li></ul><h3 id="_4-2-区别" tabindex="-1"><a class="header-anchor" href="#_4-2-区别"><span>4.2 区别</span></a></h3><p>在我看来它们的差别在于应用场景，举例如下：</p><p>【应用场景】：分别在时间段0.2s,0.4s,0.6s,0.8s进行连续点击，触发searchAPI。</p><p>【防抖后的效果】：0.8s后才真正进行searchAPI的发送；</p><p>【节流的效果】：0.2s时发现有人点击，立即触发searchAPI接口，并且在x秒内，用户点击无效。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230945516.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_4-3-如何选择" tabindex="-1"><a class="header-anchor" href="#_4-3-如何选择"><span>4.3 如何选择</span></a></h3><p>我这边需要在用户刚点击的时候就立即响应，后面几秒钟的点击无效，是节流的效果，所以选择节流。</p><h2 id="_5-如何创建自定义指令" tabindex="-1"><a class="header-anchor" href="#_5-如何创建自定义指令"><span>5. 如何创建自定义指令</span></a></h2><h3 id="_5-1-选择合适的钩子函数" tabindex="-1"><a class="header-anchor" href="#_5-1-选择合适的钩子函数"><span>5.1 选择合适的钩子函数</span></a></h3><p>自定义指令的钩子函数：bind，inserted，update，componentUpdated，unbind</p><p>我选用bind，只需要一次性的初始化就够了。</p><h3 id="_5-2-钩子函数参数" tabindex="-1"><a class="header-anchor" href="#_5-2-钩子函数参数"><span>5.2 钩子函数参数</span></a></h3><p>el：可直接操作DOM(例如， <code>el.addEventListener</code> , <code>el.onclick</code> )。</p><p>binding：可通过value获得指令绑定值。</p><h3 id="_5-3-思考-如何在不妨碍原本click事件的情况下-添加监听click事件" tabindex="-1"><a class="header-anchor" href="#_5-3-思考-如何在不妨碍原本click事件的情况下-添加监听click事件"><span>5.3 思考：如何在不妨碍原本click事件的情况下，添加监听click事件</span></a></h3><blockquote><p>onclick事件的处理程序在有多个的情况下，后者会覆盖前者。addEventListener给一个事件注册多个listener，不会出现覆盖的情况。</p></blockquote><p>当然是使用<code>addEventListener</code>（<em>IE浏览器要用 <code>attachEvent</code> ，然而我的项目中只需要支持chrome即可，就不考虑啦</em>）</p><h2 id="_6-实现" tabindex="-1"><a class="header-anchor" href="#_6-实现"><span>6. 实现</span></a></h2><h3 id="_6-1-定义防抖指令" tabindex="-1"><a class="header-anchor" href="#_6-1-定义防抖指令"><span>6.1 定义防抖指令：</span></a></h3><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">directive</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;throttle&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  bind</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: (</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">el</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">binding</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    let</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> throttleTime</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> binding</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 防抖时间</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!</span><span style="color:#E06C75;--shiki-dark:#E06C75;">throttleTime</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) { </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 用户若不设置防抖时间，则默认2s</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      throttleTime</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2000</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    let</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> cbFun</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    el</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">addEventListener</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;click&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">event</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> =&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">      if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!</span><span style="color:#E06C75;--shiki-dark:#E06C75;">cbFun</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) { </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 第一次执行</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        cbFun</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> setTimeout</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(() </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          cbFun</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">throttleTime</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">else</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        event</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> event</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">stopImmediatePropagation</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-使用指令" tabindex="-1"><a class="header-anchor" href="#_6-2-使用指令"><span>6.2 使用指令：</span></a></h3><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">button</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> @click</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;sayHello&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> v-throttle</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;提交&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">button</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sayHello</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    console</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">log</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;Hello!&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://juejin.cn/post/6844903944653651981" target="_blank" rel="noopener noreferrer">【实战】Vue自定义防抖指令</a></p>`,40)]))}const p=a(l,[["render",r],["__file","vue-shake-instructions.html.vue"]]),c=JSON.parse('{"path":"/posts/Web/frontend-vue/vue-shake-instructions.html","title":"Vue自定义防抖指令","lang":"zh-CN","frontmatter":{"description":"Vue自定义防抖指令 1. 背景 项目中经常会遇到说，一个按钮因为网络IO等问题，可能还在请求过程中，用户连续点击。导致重复发送请求。 这种情况下我们使用防抖/节流就能很好的解决，实现得方案有很多，但是自定义指令的方式是最简单的。后面有需要使用防抖的地方只要使用改指令即可。 2. 原始情况 当我们连续点击多次，控制台会输出多次 Hello! 3. 我想...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Web/frontend-vue/vue-shake-instructions.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Vue自定义防抖指令"}],["meta",{"property":"og:description","content":"Vue自定义防抖指令 1. 背景 项目中经常会遇到说，一个按钮因为网络IO等问题，可能还在请求过程中，用户连续点击。导致重复发送请求。 这种情况下我们使用防抖/节流就能很好的解决，实现得方案有很多，但是自定义指令的方式是最简单的。后面有需要使用防抖的地方只要使用改指令即可。 2. 原始情况 当我们连续点击多次，控制台会输出多次 Hello! 3. 我想..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230945516.webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue自定义防抖指令\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230945516.webp\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 原始情况","slug":"_2-原始情况","link":"#_2-原始情况","children":[]},{"level":2,"title":"3. 我想达到的效果：","slug":"_3-我想达到的效果","link":"#_3-我想达到的效果","children":[]},{"level":2,"title":"4. 防抖 / 节流的区别和选择","slug":"_4-防抖-节流的区别和选择","link":"#_4-防抖-节流的区别和选择","children":[{"level":3,"title":"4.1 解释","slug":"_4-1-解释","link":"#_4-1-解释","children":[]},{"level":3,"title":"4.2 区别","slug":"_4-2-区别","link":"#_4-2-区别","children":[]},{"level":3,"title":"4.3 如何选择","slug":"_4-3-如何选择","link":"#_4-3-如何选择","children":[]}]},{"level":2,"title":"5. 如何创建自定义指令","slug":"_5-如何创建自定义指令","link":"#_5-如何创建自定义指令","children":[{"level":3,"title":"5.1 选择合适的钩子函数","slug":"_5-1-选择合适的钩子函数","link":"#_5-1-选择合适的钩子函数","children":[]},{"level":3,"title":"5.2 钩子函数参数","slug":"_5-2-钩子函数参数","link":"#_5-2-钩子函数参数","children":[]},{"level":3,"title":"5.3 思考：如何在不妨碍原本click事件的情况下，添加监听click事件","slug":"_5-3-思考-如何在不妨碍原本click事件的情况下-添加监听click事件","link":"#_5-3-思考-如何在不妨碍原本click事件的情况下-添加监听click事件","children":[]}]},{"level":2,"title":"6. 实现","slug":"_6-实现","link":"#_6-实现","children":[{"level":3,"title":"6.1 定义防抖指令：","slug":"_6-1-定义防抖指令","link":"#_6-1-定义防抖指令","children":[]},{"level":3,"title":"6.2 使用指令：","slug":"_6-2-使用指令","link":"#_6-2-使用指令","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.58,"words":773},"filePathRelative":"posts/Web/frontend-vue/vue-shake-instructions.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>项目中经常会遇到说，一个按钮因为网络IO等问题，可能还在请求过程中，用户连续点击。导致重复发送请求。</p>\\n<p>这种情况下我们使用防抖/节流就能很好的解决，实现得方案有很多，但是自定义指令的方式是最简单的。后面有需要使用防抖的地方只要使用改指令即可。</p>\\n<h2>2. 原始情况</h2>\\n<div class=\\"language-html\\" data-ext=\\"html\\" data-title=\\"html\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">button</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> @click</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"sayHello\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;提交&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">button</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span></code></pre>\\n</div>","autoDesc":true}');export{p as comp,c as data};
