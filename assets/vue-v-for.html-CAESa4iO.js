import{_ as a,c as n,a as i,o as l}from"./app-DP7tPpgD.js";const e={};function o(r,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="vue指令v-for之遍历输出javascript数组-json对象的几种方式" tabindex="-1"><a class="header-anchor" href="#vue指令v-for之遍历输出javascript数组-json对象的几种方式"><span>Vue指令v-for之遍历输出JavaScript数组，json对象的几种方式</span></a></h1><h2 id="_1-基础准备" tabindex="-1"><a class="header-anchor" href="#_1-基础准备"><span>1. 基础准备</span></a></h2><ol><li><p>定义数据</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> default</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    data</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            list</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:[</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;a&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;b&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;c&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;d&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;e&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            web</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:{</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">                &quot;百度&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;https://www.baidu.com&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">                &quot;搜狐&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;https://www.sohu.com&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">                &quot;新浪&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;https://www.sina.com&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">                &quot;淘宝&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;https://www.taobao.com&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div></li><li><p>html结构</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;test&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;{{ list }}&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;{{ web }}&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div></li><li><p>输出结果<br><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/20201210162547578.png" alt="20201210162547578" loading="lazy"></p></li></ol><h2 id="_2-v-for对-json-数组-几种输出方式" tabindex="-1"><a class="header-anchor" href="#_2-v-for对-json-数组-几种输出方式"><span>2. v-for对 JSON 数组 几种输出方式</span></a></h2><h3 id="_2-1-只输出value" tabindex="-1"><a class="header-anchor" href="#_2-1-只输出value"><span>2.1 只输出value</span></a></h3><p>html 代码</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;test&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> v-for</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> = </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;item in list&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> :key</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;index&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;{{ item }}&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>输出结果：</p><p><a href="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20201210164049745.png" target="_blank" rel="noopener noreferrer">image-20201210164049745</a></p><h3 id="_2-2-输出value值且输出对应的索引值" tabindex="-1"><a class="header-anchor" href="#_2-2-输出value值且输出对应的索引值"><span>2.2 输出value值且输出对应的索引值</span></a></h3><p>html代码：</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;test&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> v-for</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> = </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;(item,index) in list&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> :key</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;index&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;{{ item }}的索引值是{{ index }}&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>输出结果：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20201210164215652.png" alt="image-20201210164215652" tabindex="0" loading="lazy"><figcaption>image-20201210164215652</figcaption></figure><h2 id="_3-v-for对json格式的几种输出方式" tabindex="-1"><a class="header-anchor" href="#_3-v-for对json格式的几种输出方式"><span>3. v-for对json格式的几种输出方式</span></a></h2><h3 id="_3-1-只输出value值" tabindex="-1"><a class="header-anchor" href="#_3-1-只输出value值"><span>3.1 只输出value值</span></a></h3><p>html代码</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;test&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> v-for</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> = </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;value in web&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> :key</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;index&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;{{ value }}&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>输出结果：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20201210164447098.png" alt="image-20201210164447098" tabindex="0" loading="lazy"><figcaption>image-20201210164447098</figcaption></figure><h3 id="_3-2-输出value值和key值" tabindex="-1"><a class="header-anchor" href="#_3-2-输出value值和key值"><span>3.2 输出value值和key值</span></a></h3><p>html 代码</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;test&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> v-for</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> = </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;(value,key) in web&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> :key</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;index&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;{{ key }} 的网址是 ： {{ value }}&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>输出结果：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20201210164606587.png" alt="image-20201210164606587" tabindex="0" loading="lazy"><figcaption>image-20201210164606587</figcaption></figure><h2 id="_3-输出value值-key值和索引值index" tabindex="-1"><a class="header-anchor" href="#_3-输出value值-key值和索引值index"><span>3.输出value值，key值和索引值index</span></a></h2><p>html代码：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span> &lt;div id=&quot;test&quot;&gt;</span></span>
<span class="line"><span>        &lt;div v-for = &quot;(value,key,index) in web&quot; :key=&quot;index&quot;&gt;{{ index }}__{{ key }} 的网址是 ： {{ value }}&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span></code></pre></div><p>输出结果：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20201210164817986.png" alt="image-20201210164817986" tabindex="0" loading="lazy"><figcaption>image-20201210164817986</figcaption></figure><h2 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结"><span>4. 总结</span></a></h2><ul><li><p>在数组里面，小括号里面的参数第一位是value值，第二位是索引值</p></li><li><p>在json里面，第一位是value值，第二位是key值，第三位是索引值</p></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.cnblogs.com/mmzuo-798/p/9435215.html" target="_blank" rel="noopener noreferrer">Vue指令v-for之遍历输出JavaScript数组，json对象的几种方式</a></p>`,34)]))}const t=a(e,[["render",o],["__file","vue-v-for.html.vue"]]),B=JSON.parse('{"path":"/posts/Web/frontend-vue/vue-v-for.html","title":"Vue指令v-for之遍历输出JavaScript数组，json对象的几种方式","lang":"zh-CN","frontmatter":{"description":"Vue指令v-for之遍历输出JavaScript数组，json对象的几种方式 1. 基础准备 定义数据 html结构 输出结果 20201210162547578 2. v-for对 JSON 数组 几种输出方式 2.1 只输出value html 代码 输出结果： image-20201210164049745 2.2 输出value值且输出对应的...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-vue/vue-v-for.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Vue指令v-for之遍历输出JavaScript数组，json对象的几种方式"}],["meta",{"property":"og:description","content":"Vue指令v-for之遍历输出JavaScript数组，json对象的几种方式 1. 基础准备 定义数据 html结构 输出结果 20201210162547578 2. v-for对 JSON 数组 几种输出方式 2.1 只输出value html 代码 输出结果： image-20201210164049745 2.2 输出value值且输出对应的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/20201210162547578.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue指令v-for之遍历输出JavaScript数组，json对象的几种方式\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/20201210162547578.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20201210164215652.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20201210164447098.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20201210164606587.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20201210164817986.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 基础准备","slug":"_1-基础准备","link":"#_1-基础准备","children":[]},{"level":2,"title":"2. v-for对 JSON 数组 几种输出方式","slug":"_2-v-for对-json-数组-几种输出方式","link":"#_2-v-for对-json-数组-几种输出方式","children":[{"level":3,"title":"2.1 只输出value","slug":"_2-1-只输出value","link":"#_2-1-只输出value","children":[]},{"level":3,"title":"2.2 输出value值且输出对应的索引值","slug":"_2-2-输出value值且输出对应的索引值","link":"#_2-2-输出value值且输出对应的索引值","children":[]}]},{"level":2,"title":"3. v-for对json格式的几种输出方式","slug":"_3-v-for对json格式的几种输出方式","link":"#_3-v-for对json格式的几种输出方式","children":[{"level":3,"title":"3.1 只输出value值","slug":"_3-1-只输出value值","link":"#_3-1-只输出value值","children":[]},{"level":3,"title":"3.2 输出value值和key值","slug":"_3-2-输出value值和key值","link":"#_3-2-输出value值和key值","children":[]}]},{"level":2,"title":"3.输出value值，key值和索引值index","slug":"_3-输出value值-key值和索引值index","link":"#_3-输出value值-key值和索引值index","children":[]},{"level":2,"title":"4. 总结","slug":"_4-总结","link":"#_4-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.3,"words":390},"filePathRelative":"posts/Web/frontend-vue/vue-v-for.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 基础准备</h2>\\n<ol>\\n<li>\\n<p>定义数据</p>\\n<div class=\\"language-js\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">export</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> default</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">    data</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(){</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">        return</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">            list</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:[</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"a\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"b\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"c\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"d\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"e\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">],</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">            web</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:{</span></span>\\n<span class=\\"line\\"><span style=\\"color:#98C379;--shiki-dark:#98C379\\">                \\"百度\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"https://www.baidu.com\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#98C379;--shiki-dark:#98C379\\">                \\"搜狐\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"https://www.sohu.com\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#98C379;--shiki-dark:#98C379\\">                \\"新浪\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"https://www.sina.com\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#98C379;--shiki-dark:#98C379\\">                \\"淘宝\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">:</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"https://www.taobao.com\\"</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">            }</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        }</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n</div></li>\\n<li>\\n<p>html结构</p>\\n<div class=\\"language-html\\" data-ext=\\"html\\" data-title=\\"html\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> id</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"test\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;{{ list }}&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;{{ web }}&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    &lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span></code></pre>\\n</div></li>\\n<li>\\n<p>输出结果<br>\\n<img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/20201210162547578.png\\" alt=\\"20201210162547578\\" loading=\\"lazy\\"></p>\\n</li>\\n</ol>","autoDesc":true}');export{t as comp,B as data};
