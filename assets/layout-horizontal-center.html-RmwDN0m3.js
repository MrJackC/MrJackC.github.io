import{_ as n,c as s,a as e,o as i}from"./app-BOcQBfH9.js";const p={};function l(t,a){return i(),s("div",null,a[0]||(a[0]=[e(`<h1 id="css水平居中的7种实现方式" tabindex="-1"><a class="header-anchor" href="#css水平居中的7种实现方式"><span>CSS水平居中的7种实现方式</span></a></h1><h2 id="_1-实现方式" tabindex="-1"><a class="header-anchor" href="#_1-实现方式"><span>1. 实现方式</span></a></h2><h3 id="_1-1-方式一-text-align-center实现" tabindex="-1"><a class="header-anchor" href="#_1-1-方式一-text-align-center实现"><span>1.1 方式一：<code>text-align: center</code>实现</span></a></h3><p>如果父元素是块级元素且里面包含行内元素，则直接给父元素设置 <code>text-align: center</code>, 如果父元素是行内元素的话父元素无法设置宽高，则需要将其设为块级元素<code>display: block</code>。也对inline、inline-block、inline-table和inline-flex元素水平居中都有效。</p><p>HTML</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>// 父元素是块级元素</span></span>
<span class="line"><span>&lt;div id=&quot;parent&quot;&gt;</span></span>
<span class="line"><span>    &lt;span id=&quot;child&quot;&gt;我是行内元素&lt;/span&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 父元素是行内元素</span></span>
<span class="line"><span>&lt;span id=&quot;parent&quot;&gt;</span></span>
<span class="line"><span>    &lt;span id=&quot;child&quot;&gt;我是行内元素&lt;/span&gt;</span></span>
<span class="line"><span>&lt;/span&gt;</span></span></code></pre></div><p>CSS</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>// 父元素是块级元素</span></span>
<span class="line"><span>.parent {</span></span>
<span class="line"><span>  height: 300px;</span></span>
<span class="line"><span>  width: 300px;</span></span>
<span class="line"><span>  text-align: center;</span></span>
<span class="line"><span>  background: skyblue;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 父元素是行内元素</span></span>
<span class="line"><span>.parent {</span></span>
<span class="line"><span>  height: 300px;</span></span>
<span class="line"><span>  width: 300px;</span></span>
<span class="line"><span>  display: block;</span></span>
<span class="line"><span>  text-align: center;</span></span>
<span class="line"><span>  background: skyblue;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230910109.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_1-2-方式二-margin-0-aoto实现" tabindex="-1"><a class="header-anchor" href="#_1-2-方式二-margin-0-aoto实现"><span>1.2 方式二：<code>margin: 0 aoto</code>实现</span></a></h3><p>在宽度已知的情况下可以使用<code>margin：0 auto</code>，让元素水平居中。</p><p>HTML</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;div id=&quot;parent&quot;&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;child&quot;&gt;我是行内元素&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>CSS</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>.parent {</span></span>
<span class="line"><span>  height: 300px;</span></span>
<span class="line"><span>  width: 400px;</span></span>
<span class="line"><span>  background:  #fcc;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.child {</span></span>
<span class="line"><span>  height: 100px;</span></span>
<span class="line"><span>  width: 100px; //确保该块级元素定宽</span></span>
<span class="line"><span>  background: #f66;</span></span>
<span class="line"><span>  margin: 0 auto;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>效果：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230910155.png" alt="image-20210709201555384" tabindex="0" loading="lazy"><figcaption>image-20210709201555384</figcaption></figure><h3 id="_1-3-方式三-table-margin实现" tabindex="-1"><a class="header-anchor" href="#_1-3-方式三-table-margin实现"><span>1.3 方式三：table+margin实现</span></a></h3><p>先将子元素设置为块级表格来显示（类似），再将其设置水平居中<code>display:table</code>在表现上类似<code>block</code>元素，但是宽度为内容宽。</p><p>HTML</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;div class=&quot;parent&quot;&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;child&quot;&gt;我是块级元素&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>CSS</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>.parent {</span></span>
<span class="line"><span>  height: 300px;</span></span>
<span class="line"><span>  width: 400px;</span></span>
<span class="line"><span>  background:  #fcc;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.child {</span></span>
<span class="line"><span>  display: table;</span></span>
<span class="line"><span>  background: #f66;</span></span>
<span class="line"><span>  margin: 0 auto;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>效果：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230910181.png" alt="image-20210709201645304" tabindex="0" loading="lazy"><figcaption>image-20210709201645304</figcaption></figure><h3 id="_1-4-方式四-absolute-transform实现" tabindex="-1"><a class="header-anchor" href="#_1-4-方式四-absolute-transform实现"><span>1.4 方式四：absolute+transform实现</span></a></h3><p>首先设置父元素为相对定位，再设置子元素为绝对定位，首先设置子元素的<code>left:50%</code>，然后通过向左移动子元素的一半宽度以达到水平居中。</p><ul><li>定宽度，设置绝对子元素的<code>margin-left:-元素宽度的一半px</code>或者设置<code>transform: translateX(-50%)</code></li><li>不定宽，只能使用<code>transform: translateX(-50%)</code></li></ul><p>HTML</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;div class=&quot;parent&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;child&quot;&gt;我是块级元素&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>CSS</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>.parent {</span></span>
<span class="line"><span>  height: 300px;</span></span>
<span class="line"><span>  width: 400px;</span></span>
<span class="line"><span>  position: relative;</span></span>
<span class="line"><span>  background:  #fcc;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.child {</span></span>
<span class="line"><span>  position: absolute;</span></span>
<span class="line"><span>  background: #f66;</span></span>
<span class="line"><span>  left: 50%;</span></span>
<span class="line"><span>  transform: translateX(-50%); // 通用</span></span>
<span class="line"><span>  /** 定宽度可使用margin-left **/</span></span>
<span class="line"><span>  width：100px;</span></span>
<span class="line"><span>  margin-left：-50px;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230910205.png" alt="image-20210709201723869" tabindex="0" loading="lazy"><figcaption>image-20210709201723869</figcaption></figure><h3 id="_1-5-方式五-absolute-margin实现" tabindex="-1"><a class="header-anchor" href="#_1-5-方式五-absolute-margin实现"><span>1.5 方式五：absolute+margin实现</span></a></h3><p>通过子元素绝对定位，外加<code>margin: 0 auto</code>来实现。</p><p>HTML</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;div class=&quot;parent&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;child&quot;&gt;我是块级元素&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>CSS</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>.parent {</span></span>
<span class="line"><span>  height: 300px;</span></span>
<span class="line"><span>  width: 400px;</span></span>
<span class="line"><span>  position: relative;</span></span>
<span class="line"><span>  background:  #fcc;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.child {</span></span>
<span class="line"><span>  position: absolute;</span></span>
<span class="line"><span>  background: #f66;</span></span>
<span class="line"><span>  width: 200px;</span></span>
<span class="line"><span>  height: 100px;</span></span>
<span class="line"><span>  margin: 0 auto; /*水平居中*/</span></span>
<span class="line"><span>  left: 0; /*此处不能省略，且为0*/</span></span>
<span class="line"><span>  right: 0;/*此处不能省略，且为0*/</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230910230.png" alt="image-20210709201823067" tabindex="0" loading="lazy"><figcaption>image-20210709201823067</figcaption></figure><h3 id="_1-6-方式六-flexbox实现" tabindex="-1"><a class="header-anchor" href="#_1-6-方式六-flexbox实现"><span>1.6 方式六：flexbox实现</span></a></h3><p>使用flexbox布局，只需要给待处理的块状元素的父元素添加属性 <code>display: flex</code>、 <code>justify-content: center</code></p><p>HTML</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;div class=&quot;parent&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;child&quot;&gt;我是块级元素&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>CSS</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>.parent {</span></span>
<span class="line"><span>  height: 300px;</span></span>
<span class="line"><span>  width: 400px;</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: center;</span></span>
<span class="line"><span>  background:  #fcc;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.child {</span></span>
<span class="line"><span>  height: 100px;</span></span>
<span class="line"><span>  width: 100px;</span></span>
<span class="line"><span>  background: #f66;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>效果：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230910251.png" alt="image-20210709201903304" tabindex="0" loading="lazy"><figcaption>image-20210709201903304</figcaption></figure><h3 id="_1-7-方式七-flex-margin实现" tabindex="-1"><a class="header-anchor" href="#_1-7-方式七-flex-margin实现"><span>1.7 方式七：flex+margin实现</span></a></h3><p>通过<code>flex</code>将父容器设置为为<code>flex</code>布局，再设置子元素居中。</p><p>HTML</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;div class=&quot;parent&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;child&quot;&gt;我是块级元素&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>CSS</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>.parent {</span></span>
<span class="line"><span>  height: 300px;</span></span>
<span class="line"><span>  width: 400px;</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  background: #fcc;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.child {</span></span>
<span class="line"><span>  height: 100px;</span></span>
<span class="line"><span>  width: 100px;</span></span>
<span class="line"><span>  margin: 0 auto;</span></span>
<span class="line"><span>  background: #f66;</span></span>
<span class="line"><span>}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230910270.png" alt="image-20210709201948982" tabindex="0" loading="lazy"><figcaption>image-20210709201948982</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://segmentfault.com/a/1190000021249922" target="_blank" rel="noopener noreferrer">CSS水平居中的7种实现方式</a></p>`,60)]))}const d=n(p,[["render",l],["__file","layout-horizontal-center.html.vue"]]),r=JSON.parse('{"path":"/posts/Web/frontend-layout/layout-horizontal-center.html","title":"CSS水平居中的7种实现方式","lang":"zh-CN","frontmatter":{"created":"2024-05-13 20:48","updated":"2024-10-13 12:26","description":"CSS水平居中的7种实现方式 1. 实现方式 1.1 方式一：text-align: center实现 如果父元素是块级元素且里面包含行内元素，则直接给父元素设置 text-align: center, 如果父元素是行内元素的话父元素无法设置宽高，则需要将其设为块级元素display: block。也对inline、inline-block、inlin...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Web/frontend-layout/layout-horizontal-center.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"CSS水平居中的7种实现方式"}],["meta",{"property":"og:description","content":"CSS水平居中的7种实现方式 1. 实现方式 1.1 方式一：text-align: center实现 如果父元素是块级元素且里面包含行内元素，则直接给父元素设置 text-align: center, 如果父元素是行内元素的话父元素无法设置宽高，则需要将其设为块级元素display: block。也对inline、inline-block、inlin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230910109.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS水平居中的7种实现方式\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230910109.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230910155.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230910181.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230910205.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230910230.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230910251.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230910270.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 实现方式","slug":"_1-实现方式","link":"#_1-实现方式","children":[{"level":3,"title":"1.1 方式一：text-align: center实现","slug":"_1-1-方式一-text-align-center实现","link":"#_1-1-方式一-text-align-center实现","children":[]},{"level":3,"title":"1.2 方式二：margin: 0 aoto实现","slug":"_1-2-方式二-margin-0-aoto实现","link":"#_1-2-方式二-margin-0-aoto实现","children":[]},{"level":3,"title":"1.3 方式三：table+margin实现","slug":"_1-3-方式三-table-margin实现","link":"#_1-3-方式三-table-margin实现","children":[]},{"level":3,"title":"1.4 方式四：absolute+transform实现","slug":"_1-4-方式四-absolute-transform实现","link":"#_1-4-方式四-absolute-transform实现","children":[]},{"level":3,"title":"1.5 方式五：absolute+margin实现","slug":"_1-5-方式五-absolute-margin实现","link":"#_1-5-方式五-absolute-margin实现","children":[]},{"level":3,"title":"1.6 方式六：flexbox实现","slug":"_1-6-方式六-flexbox实现","link":"#_1-6-方式六-flexbox实现","children":[]},{"level":3,"title":"1.7 方式七：flex+margin实现","slug":"_1-7-方式七-flex-margin实现","link":"#_1-7-方式七-flex-margin实现","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.71,"words":812},"filePathRelative":"posts/Web/frontend-layout/layout-horizontal-center.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 实现方式</h2>\\n<h3>1.1 方式一：<code>text-align: center</code>实现</h3>\\n<p>如果父元素是块级元素且里面包含行内元素，则直接给父元素设置 <code>text-align: center</code>, 如果父元素是行内元素的话父元素无法设置宽高，则需要将其设为块级元素<code>display: block</code>。也对inline、inline-block、inline-table和inline-flex元素水平居中都有效。</p>\\n<p>HTML</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>// 父元素是块级元素</span></span>\\n<span class=\\"line\\"><span>&lt;div id=\\"parent\\"&gt;</span></span>\\n<span class=\\"line\\"><span>    &lt;span id=\\"child\\"&gt;我是行内元素&lt;/span&gt;</span></span>\\n<span class=\\"line\\"><span>&lt;/div&gt;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>// 父元素是行内元素</span></span>\\n<span class=\\"line\\"><span>&lt;span id=\\"parent\\"&gt;</span></span>\\n<span class=\\"line\\"><span>    &lt;span id=\\"child\\"&gt;我是行内元素&lt;/span&gt;</span></span>\\n<span class=\\"line\\"><span>&lt;/span&gt;</span></span></code></pre>\\n</div>","autoDesc":true}');export{d as comp,r as data};
