import{_ as a,c as n,a as i,o as l}from"./app-BfIe-EZg.js";const e={};function o(p,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="css层叠" tabindex="-1"><a class="header-anchor" href="#css层叠"><span>CSS层叠</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>自己在项目中对z-index 理解的并不到位，导致在使用过程中与预期效果不一致。</p><blockquote><p>一直认为<code>z-index</code>就是用来描述定义一个元素在屏幕<code>Z轴</code>上的堆叠顺序。<code>z-index</code>值越大在<code>Z轴</code>上就越靠上，也就是离屏幕观察者越近。最后才发现这个认识存在很大的问题：</p></blockquote><ol><li><p>首先，<code>z-index</code>属性值并不是在任何元素上都有效果。它<strong>仅在定位元素（定义了<code>position</code>属性，且属性值为非<code>static</code>值的元素）上有效果</strong>。</p></li><li><p>判断元素在<code>Z轴</code>上的堆叠顺序，不仅仅是直接比较两个元素的<code>z-index</code>值的大小，这个堆叠顺序实际由元素的<strong>层叠上下文</strong>、<strong>层叠等级</strong>共同决定。</p></li></ol><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230900432.png" alt="image-20220404110849700" tabindex="0" loading="lazy"><figcaption>image-20220404110849700</figcaption></figure><h2 id="_2-什么是-层叠上下文" tabindex="-1"><a class="header-anchor" href="#_2-什么是-层叠上下文"><span>2. 什么是“层叠上下文”</span></a></h2><p>层叠上下文(stacking context)，是HTML中一个三维的概念。在CSS2.1规范中，每个盒模型的位置是三维的，分别是平面画布上的<code>X轴</code>，<code>Y轴</code>以及表示层叠的<code>Z轴</code>。一般情况下，元素在页面上沿<code>X轴Y轴</code>平铺，我们察觉不到它们在<code>Z轴</code>上的层叠关系。而一旦元素发生堆叠，这时就能发现某个元素可能覆盖了另一个元素或者被另一个元素覆盖。</p><p>如果一个元素含有层叠上下文，(也就是说它是层叠上下文元素)，我们可以理解为这个元素在<code>Z轴</code>上就“高人一等”，最终表现就是它离屏幕观察者更近。</p><blockquote><p><strong>具象的比喻</strong>：你可以把层叠上下文元素理解为理解为<strong>该元素当了官</strong>，而其他非层叠上下文元素则可以理解为普通群众。凡是“当了官的元素”就比普通元素等级要高，也就是说元素在<code>Z轴</code>上更靠上，更靠近观察者。</p></blockquote><h2 id="_3-什么是-层叠等级" tabindex="-1"><a class="header-anchor" href="#_3-什么是-层叠等级"><span>3.什么是“层叠等级”</span></a></h2><p>那么，层叠等级指的又是什么？层叠等级(stacking level，叫“层叠级别”/“层叠水平”也行)</p><ul><li>在同一个层叠上下文中，它描述定义的是该层叠上下文中的层叠上下文元素在<code>Z轴</code>上的上下顺序。</li><li>在其他普通元素中，它描述定义的是这些普通元素在<code>Z轴</code>上的上下顺序。</li></ul><p>说到这，可能很多人疑问了，不论在层叠上下文中还是在普通元素中，层叠等级都表示元素在<code>Z轴</code>上的上下顺序，那就直接说它描述定义了所有元素在<code>Z轴</code>上的上下顺序就OK啊！为什么要分开描述？</p><p>为了说明原因，先举个栗子：</p><blockquote><p><strong>具象的比喻</strong>：我们之前说到，处于层叠上下文中的元素，就像是元素当了官，等级自然比普通元素高。再想象一下，假设一个官员A是个省级领导，他下属有一个秘书a-1，家里有一个保姆a-2。另一个官员B是一个县级领导，他下属有一个秘书b-1，家里有一个保姆b-2。a-1和b-1虽然都是秘书，但是你想一个省级领导的秘书和一个县级领导的秘书之间有可比性么？甚至保姆a-2都要比秘书b-1的等级高得多。谁大谁小，谁高谁低一目了然，所以根本没有比较的意义。只有在A下属的a-1、a-2以及B下属的b-1、b-2中相互比较大小高低才有意义。</p></blockquote><p><strong>再类比回“层叠上下文”和“层叠等级”，就得出一个结论：</strong></p><ol><li>普通元素的层叠等级优先由其所在的层叠上下文决定。</li><li>层叠等级的比较只有在当前层叠上下文元素中才有意义。不同层叠上下文中比较层叠等级是没有意义的。</li></ol><h2 id="_4-如何产生-层叠上下文" tabindex="-1"><a class="header-anchor" href="#_4-如何产生-层叠上下文"><span>4. 如何产生“层叠上下文”</span></a></h2><p>前面说了那么多，知道了“层叠上下文”和“层叠等级”，其中还有一个最关键的问题：到底如何产生层叠上下文呢？如何让一个元素变成层叠上下文元素呢？</p><p>其实，层叠上下文也基本上是有一些特定的CSS属性创建的，一般有3种方法：</p><ol><li><code>HTML</code>中的根元素<code>&lt;html&gt;&lt;/html&gt;</code>本身j就具有层叠上下文，称为“根层叠上下文”。</li><li>普通元素设置<code>position</code>属性为<strong>非</strong><code>static</code>值并设置<code>z-index</code>属性为具体数值，产生层叠上下文。</li><li>CSS3中的新属性也可以产生层叠上下文。</li></ol><p>至此，终于可以上代码了，我们用代码说话，来验证上面的结论：</p><p><strong>栗子1:</strong> <strong>有两个div，p.a、p.b被包裹在一个div里，p.c被包裹在另一个盒子里，只为.a、.b、.c设置<code>position</code>和<code>z-index</code>属性</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">style</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    position: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">relative</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    width: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    height: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }  </span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  p</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    position: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">absolute</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    font-size: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">20</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    width: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    height: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }  </span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">  .a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    background-color: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">blue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    z-index: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }  </span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">  .b</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    background-color: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">green</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    z-index: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    top: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">20</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    left: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">20</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }  </span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">  .c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    background-color: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">red</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    z-index: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    top: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">-20</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    left: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">40</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">style</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">body</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">p</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;a&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;a&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">p</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">p</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;b&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;b&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">p</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">p</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;c&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;c&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">p</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">body</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25)]))}const r=a(e,[["render",o],["__file","css-lamination.html.vue"]]),c=JSON.parse('{"path":"/posts/Web/frontend-css/css-lamination.html","title":"CSS层叠","lang":"zh-CN","frontmatter":{"description":"CSS层叠 1. 背景 自己在项目中对z-index 理解的并不到位，导致在使用过程中与预期效果不一致。 一直认为z-index就是用来描述定义一个元素在屏幕Z轴上的堆叠顺序。z-index值越大在Z轴上就越靠上，也就是离屏幕观察者越近。最后才发现这个认识存在很大的问题： 首先，z-index属性值并不是在任何元素上都有效果。它仅在定位元素（定义了po...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-css/css-lamination.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"CSS层叠"}],["meta",{"property":"og:description","content":"CSS层叠 1. 背景 自己在项目中对z-index 理解的并不到位，导致在使用过程中与预期效果不一致。 一直认为z-index就是用来描述定义一个元素在屏幕Z轴上的堆叠顺序。z-index值越大在Z轴上就越靠上，也就是离屏幕观察者越近。最后才发现这个认识存在很大的问题： 首先，z-index属性值并不是在任何元素上都有效果。它仅在定位元素（定义了po..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230900432.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS层叠\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230900432.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 什么是“层叠上下文”","slug":"_2-什么是-层叠上下文","link":"#_2-什么是-层叠上下文","children":[]},{"level":2,"title":"3.什么是“层叠等级”","slug":"_3-什么是-层叠等级","link":"#_3-什么是-层叠等级","children":[]},{"level":2,"title":"4. 如何产生“层叠上下文”","slug":"_4-如何产生-层叠上下文","link":"#_4-如何产生-层叠上下文","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.46,"words":1337},"filePathRelative":"posts/Web/frontend-css/css-lamination.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>自己在项目中对z-index 理解的并不到位，导致在使用过程中与预期效果不一致。</p>\\n<blockquote>\\n<p>一直认为<code>z-index</code>就是用来描述定义一个元素在屏幕<code>Z轴</code>上的堆叠顺序。<code>z-index</code>值越大在<code>Z轴</code>上就越靠上，也就是离屏幕观察者越近。最后才发现这个认识存在很大的问题：</p>\\n</blockquote>\\n<ol>\\n<li>\\n<p>首先，<code>z-index</code>属性值并不是在任何元素上都有效果。它<strong>仅在定位元素（定义了<code>position</code>属性，且属性值为非<code>static</code>值的元素）上有效果</strong>。</p>\\n</li>\\n<li>\\n<p>判断元素在<code>Z轴</code>上的堆叠顺序，不仅仅是直接比较两个元素的<code>z-index</code>值的大小，这个堆叠顺序实际由元素的<strong>层叠上下文</strong>、<strong>层叠等级</strong>共同决定。</p>\\n</li>\\n</ol>","autoDesc":true}');export{r as comp,c as data};
