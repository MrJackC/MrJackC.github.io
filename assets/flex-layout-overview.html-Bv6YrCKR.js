import{_ as a,c as n,a as s,o as l}from"./app-tJW29Kmg.js";const i={};function t(o,e){return l(),n("div",null,e[0]||(e[0]=[s(`<h1 id="flex布局" tabindex="-1"><a class="header-anchor" href="#flex布局"><span>flex布局</span></a></h1><h2 id="_1-什么是flex布局" tabindex="-1"><a class="header-anchor" href="#_1-什么是flex布局"><span>1. 什么是flex布局</span></a></h2><blockquote><p>2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。</p></blockquote><p>flex 是一种新型的布局方式，使用该布局方式可以实现几乎所有你想要的效果。但是要注意其浏览器的兼容性，flex 只支持 ie 10+</p><p><a href="https://caniuse.com/#feat=flexbox" target="_blank" rel="noopener noreferrer">浏览器兼容性查询</a></p><h2 id="_2-使用-flex-布局" tabindex="-1"><a class="header-anchor" href="#_2-使用-flex-布局"><span>2. 使用 flex 布局</span></a></h2><p>flex 的使用方法很简单，只需要将其 <code>display</code> 属性设置为 <code>flex</code> 就可以，也可以设置行内的 flex，记得 Webkit 内核的浏览器，必须加上 <code>-webkit</code> 前缀。<strong>注意，设为 Flex 布局以后，子元素的 <code>float</code>、<code>clear</code> 和 <code>vertical-align</code> 属性将失效。</strong></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>   .container{</span></span>
<span class="line"><span>       display: -webkit-flex;</span></span>
<span class="line"><span>       display: flex;</span></span>
<span class="line"><span>       display: inline-flex;</span></span>
<span class="line"><span>       display: -webkit-inline-flex;</span></span>
<span class="line"><span>   }</span></span></code></pre></div><h2 id="_2-主轴与交叉轴" tabindex="-1"><a class="header-anchor" href="#_2-主轴与交叉轴"><span>2. 主轴与交叉轴</span></a></h2><blockquote><p>在 flex 中，最核心的概念就是容器和轴，所有的属性都是围绕容器和轴设置的。其中，容器分为父容器和子容器。轴分为主轴和交叉轴（主轴默认为水平方向，方向向右，交叉轴为主轴顺时针旋转 90°）。</p></blockquote><p>在使用 flex 的元素中，默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）<br> 主轴开始的位置称为 <code>main start</code>，主轴结束的位置称为 <code>main end</code>。<br> 同理，交叉轴开始的位置称为 <code>cross start</code>，交叉轴结束的位置称为 <code>cross end</code>。<br> 在使用 flex 的子元素中，占据的主轴空间叫做 <code>main size</code>，占据的交叉轴空间叫做 <code>cross size</code>。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228482.png" alt="基本概念" tabindex="0" loading="lazy"><figcaption>基本概念</figcaption></figure><h2 id="_3-父容器属性" tabindex="-1"><a class="header-anchor" href="#_3-父容器属性"><span>3. 父容器属性</span></a></h2><p>父容器上有六个属性</p><ul><li>flex-direction：主轴的方向。</li><li>flex-wrap：超出父容器子容器的排列样式。</li><li>flex-flow：<code>flex-direction</code> 属性和 <code>flex-wrap</code> 属性的简写形式。</li><li>justify-content：子容器在主轴的排列方向。</li><li>align-items：子容器在交叉轴的排列方向。</li><li>align-content：多根轴线的对齐方式。</li></ul><h3 id="_3-1-flex-direction-属性" tabindex="-1"><a class="header-anchor" href="#_3-1-flex-direction-属性"><span>3.1 flex-direction 属性</span></a></h3><p>flex-direction 属性决定主轴的方向（<strong>主轴的方向不一定是水平的，这个属性就是设置主轴的方向，主轴默认是水平方向，从左至右，如果主轴方向设置完毕，那么交叉轴就不需要设置，交叉轴永远是主轴顺时针旋转 90°</strong>）。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>.container {</span></span>
<span class="line"><span>  flex-direction: row;                // 默认值，主轴为水平方向，起点在左端。</span></span>
<span class="line"><span>  flex-direction: row-reverse;        // 主轴为水平方向，起点在右端。</span></span>
<span class="line"><span>  flex-direction: column;             // 主轴为垂直方向，起点在上。</span></span>
<span class="line"><span>  flex-direction: column-reverse;     // 主轴为垂直方向，起点在下。</span></span>
<span class="line"><span>}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228534.png" alt="flex-direction 属性" tabindex="0" loading="lazy"><figcaption>flex-direction 属性</figcaption></figure><h3 id="_3-2-flex-wrap-属性" tabindex="-1"><a class="header-anchor" href="#_3-2-flex-wrap-属性"><span>3.2 flex-wrap 属性</span></a></h3><p><code>flex-wrap</code> 属性决定子容器如果在一条轴线排不下时，如何换行。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>.container {</span></span>
<span class="line"><span> flex-wrap: nowrap;          // 默认，不换行</span></span>
<span class="line"><span> flex-wrap: wrap;            // 换行，第一行在上方。</span></span>
<span class="line"><span> flex-wrap: wrap-reverse     // 换行，第一行在下方</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228568.png" alt="flex-wrap 属性" tabindex="0" loading="lazy"><figcaption>flex-wrap 属性</figcaption></figure><h3 id="_3-3-justify-content-属性" tabindex="-1"><a class="header-anchor" href="#_3-3-justify-content-属性"><span>3.3 justify-content 属性</span></a></h3><p><code>justify-content</code> 属性定义了子容器在主轴上的对齐方式。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>.container {</span></span>
<span class="line"><span>    justify-content: flex-start;      // 默认，左对齐</span></span>
<span class="line"><span>    justify-content: flex-end;        // 右对齐</span></span>
<span class="line"><span>    justify-content: center;          // 居中</span></span>
<span class="line"><span>    justify-content: space-between;   // 两端对齐，项目之间的间隔都相等。</span></span>
<span class="line"><span>    justify-content: space-around;    // 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228589.png" alt="justify-content 属性" tabindex="0" loading="lazy"><figcaption>justify-content 属性</figcaption></figure><h3 id="_3-4-flex-flow-属性" tabindex="-1"><a class="header-anchor" href="#_3-4-flex-flow-属性"><span>3.4 flex-flow 属性</span></a></h3><p><code>flex-flow</code> 属性是 <code>flex-direction</code> 属性和 <code>flex-wrap</code> 属性的简写形式，默认值为 <code>row nowrap</code>。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>.container {</span></span>
<span class="line"><span>  flex-flow: &lt;flex-direction&gt; || &lt;flex-wrap&gt;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_3-5-align-items-属性" tabindex="-1"><a class="header-anchor" href="#_3-5-align-items-属性"><span>3.5 align-items 属性</span></a></h3><p><code>align-items</code>属性定义子容器在交叉轴上如何对齐。<br> 具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>.ele{</span></span>
<span class="line"><span>    align-items: flex-start;    // 交叉轴的起点对齐。</span></span>
<span class="line"><span>    align-items: flex-end;      // 交叉轴的终点对齐。</span></span>
<span class="line"><span>    align-items: center;        // 交叉轴的中点对齐。</span></span>
<span class="line"><span>    align-items: baseline;      // 项目的第一行文字的基线对齐。</span></span>
<span class="line"><span>    align-items: stretch;       // 默认，如果项目未设置高度或设为auto，将占满整个容器的高度。</span></span>
<span class="line"><span>}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228619.png" alt="align-items 属性" tabindex="0" loading="lazy"><figcaption>align-items 属性</figcaption></figure><h3 id="_3-6-align-content-属性" tabindex="-1"><a class="header-anchor" href="#_3-6-align-content-属性"><span>3.6 align-content 属性</span></a></h3><p><code>align-content</code> 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>.ele{</span></span>
<span class="line"><span>    align-content: flex-start;   // 与交叉轴的起点对齐</span></span>
<span class="line"><span>    align-content; flex-end;     // 与交叉轴的终点对齐。</span></span>
<span class="line"><span>    align-content: center;       // 与交叉轴的中点对齐。</span></span>
<span class="line"><span>    align-content: space-between;// 与交叉轴两端对齐，轴线之间的间隔平均分布。</span></span>
<span class="line"><span>    align-content: space-around; // 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</span></span>
<span class="line"><span>    align-content: stretch;     // 默认 轴线占满整个交叉轴。</span></span>
<span class="line"><span>}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228644.png" alt="align-content " tabindex="0" loading="lazy"><figcaption>align-content </figcaption></figure><h2 id="_4-子容器属性" tabindex="-1"><a class="header-anchor" href="#_4-子容器属性"><span>4. 子容器属性</span></a></h2><p>子容器也有 6 个属性：</p><ul><li>order：子容器的排列顺序</li><li>flex-grow：子容器剩余空间的拉伸比例</li><li>flex-shrink：子容器超出空间的压缩比例</li><li>flex-basis：子容器在不伸缩情况下的原始尺寸</li><li>flex：子元素的 <code>flex</code> 属性是 <code>flex-grow</code>,<code>flex-shrink</code> 和 <code>flex-basis</code> 的简写</li><li>align-self</li></ul><h3 id="_4-1-order-属性" tabindex="-1"><a class="header-anchor" href="#_4-1-order-属性"><span>4.1 order 属性</span></a></h3><p><code>order</code> 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>.item{</span></span>
<span class="line"><span>   order: num; </span></span>
<span class="line"><span>}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228664.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-2-flex-grow-属性" tabindex="-1"><a class="header-anchor" href="#_4-2-flex-grow-属性"><span>4.2 flex-grow 属性</span></a></h3><p><code>flex-grow</code> : 指定如果有多余宽度，项目是否可以扩大。</p><blockquote><p>属性定义子容器的伸缩比例。按照该比例给子容器分配空间。</p></blockquote><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>.item{</span></span>
<span class="line"><span>    flex-grow: &lt;number&gt;; /* default 0 */</span></span>
<span class="line"><span>}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228689.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-3-flex-shrink-属性" tabindex="-1"><a class="header-anchor" href="#_4-3-flex-shrink-属性"><span>4.3 flex-shrink 属性</span></a></h3><p><code>flex-shrink</code> :指定如果宽度不足，项目是否可以缩小</p><blockquote><p>属性定义了子容器弹性收缩的比例。如图，超出的部分按 1:2 的比例从给子容器中减去。<strong>此属性要生效，父容器的 <code>flex-wrap</code> 属性要设置为 <code>nowrap</code></strong></p></blockquote><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>.item{</span></span>
<span class="line"><span>    flex-shrink: &lt;number&gt;; /* default 0 */</span></span>
<span class="line"><span>}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228711.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-4-flex-basis-属性" tabindex="-1"><a class="header-anchor" href="#_4-4-flex-basis-属性"><span>4.4 flex-basis 属性</span></a></h3><p><code>flex-basis</code> : 项目的初始宽度。</p><blockquote><p>属性定义了子容器在不伸缩情况下的原始尺寸，主轴为横向时代表宽度，主轴为纵向时代表高度。</p></blockquote><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>.item{</span></span>
<span class="line"><span>    flex-basis: &lt;length&gt; | auto; /* default auto */</span></span>
<span class="line"><span>}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228731.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-5-flex-属性" tabindex="-1"><a class="header-anchor" href="#_4-5-flex-属性"><span>4.5 flex 属性</span></a></h3><p>子元素的 <code>flex</code> 属性是 <code>flex-grow</code>,<code>flex-shrink</code> 和 <code>flex-basis</code> 的简写，默认值为 <code>0</code> <code>1</code> <code>auto</code>。后两个属性可选。</p><p>该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。</p><ul><li><code>flex-grow</code>：指定如果有多余宽度，项目是否可以扩大。</li><li><code>flex-shrink</code>：指定如果宽度不足，项目是否可以缩小。</li><li><code>flex-basis</code>：项目的初始宽度。</li></ul><p><code>flex: 0 1 150px;</code>的意思就是，项目的初始宽度是150px，且不可以扩大，但是当容器宽度不足150px时，项目可以缩小。</p><p>如果写成<code>flex: 1 1 150px;</code>，就表示项目始终会占满所有宽度。</p><h3 id="_4-6-align-self-属性" tabindex="-1"><a class="header-anchor" href="#_4-6-align-self-属性"><span>4.6 align-self 属性</span></a></h3><p>子容器的 <code>align-self</code> 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖父容器 <code>align-items</code> 属性。默认值为 <code>auto</code>，表示继承父元素的 <code>align-items</code>属性，如果没有父元素，则等同于 <code>stretch</code>。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>.item {</span></span>
<span class="line"><span>    align-self: auto;             // 继承父元素的 align-items 属性</span></span>
<span class="line"><span>    align-self: flex-start;       // 交叉轴的起点对齐。</span></span>
<span class="line"><span>    align-self: flex-end;         // 交叉轴的终点对齐。</span></span>
<span class="line"><span>    align-self: center;           // 交叉轴的中点对齐。</span></span>
<span class="line"><span>    align-self: baseline;         // 项目的第一行文字的基线对齐。</span></span>
<span class="line"><span>    align-self: stretch;          // 默认，如果项目未设置高度或设为auto，将占满整个容器的高度。</span></span>
<span class="line"><span>}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228756.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://juejin.im/post/6844903491891118087" target="_blank" rel="noopener noreferrer">CSS 常见布局方式</a></p>`,72)]))}const p=a(i,[["render",t],["__file","flex-layout-overview.html.vue"]]),r=JSON.parse('{"path":"/posts/Web/frontend-layout/flex-layout-overview.html","title":"flex布局","lang":"zh-CN","frontmatter":{"created":"2024-05-13 20:48","updated":"2024-10-13 12:29","description":"flex布局 1. 什么是flex布局 2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。 flex 是一种新型的布局方式，使用该布局方式可以实现几乎所有你想要的效果。但是要注意其浏览器的兼容性，flex 只支持 ie 10+ 浏览器兼容性查询 2. 使用 flex 布局 flex 的使用方法很简单...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-layout/flex-layout-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"flex布局"}],["meta",{"property":"og:description","content":"flex布局 1. 什么是flex布局 2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。 flex 是一种新型的布局方式，使用该布局方式可以实现几乎所有你想要的效果。但是要注意其浏览器的兼容性，flex 只支持 ie 10+ 浏览器兼容性查询 2. 使用 flex 布局 flex 的使用方法很简单..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228482.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"flex布局\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228482.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228534.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228568.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228589.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228619.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228644.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228664.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228689.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228711.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228731.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131228756.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是flex布局","slug":"_1-什么是flex布局","link":"#_1-什么是flex布局","children":[]},{"level":2,"title":"2. 使用 flex 布局","slug":"_2-使用-flex-布局","link":"#_2-使用-flex-布局","children":[]},{"level":2,"title":"2. 主轴与交叉轴","slug":"_2-主轴与交叉轴","link":"#_2-主轴与交叉轴","children":[]},{"level":2,"title":"3. 父容器属性","slug":"_3-父容器属性","link":"#_3-父容器属性","children":[{"level":3,"title":"3.1 flex-direction 属性","slug":"_3-1-flex-direction-属性","link":"#_3-1-flex-direction-属性","children":[]},{"level":3,"title":"3.2 flex-wrap 属性","slug":"_3-2-flex-wrap-属性","link":"#_3-2-flex-wrap-属性","children":[]},{"level":3,"title":"3.3 justify-content 属性","slug":"_3-3-justify-content-属性","link":"#_3-3-justify-content-属性","children":[]},{"level":3,"title":"3.4 flex-flow 属性","slug":"_3-4-flex-flow-属性","link":"#_3-4-flex-flow-属性","children":[]},{"level":3,"title":"3.5 align-items 属性","slug":"_3-5-align-items-属性","link":"#_3-5-align-items-属性","children":[]},{"level":3,"title":"3.6 align-content 属性","slug":"_3-6-align-content-属性","link":"#_3-6-align-content-属性","children":[]}]},{"level":2,"title":"4. 子容器属性","slug":"_4-子容器属性","link":"#_4-子容器属性","children":[{"level":3,"title":"4.1 order 属性","slug":"_4-1-order-属性","link":"#_4-1-order-属性","children":[]},{"level":3,"title":"4.2 flex-grow 属性","slug":"_4-2-flex-grow-属性","link":"#_4-2-flex-grow-属性","children":[]},{"level":3,"title":"4.3 flex-shrink 属性","slug":"_4-3-flex-shrink-属性","link":"#_4-3-flex-shrink-属性","children":[]},{"level":3,"title":"4.4 flex-basis 属性","slug":"_4-4-flex-basis-属性","link":"#_4-4-flex-basis-属性","children":[]},{"level":3,"title":"4.5 flex 属性","slug":"_4-5-flex-属性","link":"#_4-5-flex-属性","children":[]},{"level":3,"title":"4.6 align-self 属性","slug":"_4-6-align-self-属性","link":"#_4-6-align-self-属性","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.23,"words":1870},"filePathRelative":"posts/Web/frontend-layout/flex-layout-overview.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 什么是flex布局</h2>\\n<blockquote>\\n<p>2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。</p>\\n</blockquote>\\n<p>flex 是一种新型的布局方式，使用该布局方式可以实现几乎所有你想要的效果。但是要注意其浏览器的兼容性，flex 只支持 ie 10+</p>\\n<p><a href=\\"https://caniuse.com/#feat=flexbox\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">浏览器兼容性查询</a></p>\\n<h2>2. 使用 flex 布局</h2>","autoDesc":true}');export{p as comp,r as data};
