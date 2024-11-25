import{_ as a,c as n,a as i,o as l}from"./app-BfIe-EZg.js";const r={};function o(e,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="solr搜索特殊字符转义" tabindex="-1"><a class="header-anchor" href="#solr搜索特殊字符转义"><span>Solr搜索特殊字符转义</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>在Solr检索中，下列字符有特殊含义，需 转义处理，否则查询会报查询错误。</p><div class="language-diff" data-ext="diff" data-title="diff"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">+ – &amp;&amp; || ! ( ) { } [ ] ^ ” ~ * ? : \\</span></span></code></pre></div><p>而我们的查询条件中，包含上述特性字符。</p><h2 id="_2-解决方案" tabindex="-1"><a class="header-anchor" href="#_2-解决方案"><span>2. 解决方案</span></a></h2><p>Solr 官方提供的转义</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ClientUtils</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">escapeQueryChars</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;solr search+ – &amp;&amp; || ! ( ) { } [ ] ^ ” ~ * ? :&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><h3 id="_2-1-转义源码" tabindex="-1"><a class="header-anchor" href="#_2-1-转义源码"><span>2.1 转义源码</span></a></h3><p>solr 工具类特性字符转义源码：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">https</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//svn.apache.org/repos/asf/lucene/dev/trunk/solr/solrj/src/java/org/apache/solr/client/solrj/util/ClientUtils.java</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> escapeQueryChars</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> s) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    StringBuilder</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> sb </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> StringBuilder</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    for</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> i </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> i </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> s</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">length</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> i</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">++</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">      char</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> s</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">charAt</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(i);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // These characters are part of the query syntax and must be escaped</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">      if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\\\</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;+&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;-&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;!&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">  ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;(&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;)&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;:&#39;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">        ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;^&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;[&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;]&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\&quot;</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;{&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;}&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;~&#39;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">        ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;*&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;?&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;|&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;&amp;&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">  ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;;&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;/&#39;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">        ||</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Character</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">isWhitespace</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(c)</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        sb</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">append</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\\\</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      }</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">      sb</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">append</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(c);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> sb</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">toString</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  }</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/zhouzhiwengang/article/details/111028381" target="_blank" rel="noopener noreferrer">Solr 特殊字符处理</a></p>`,13)]))}const t=a(r,[["render",o],["__file","solr-i-special-characters.html.vue"]]),k=JSON.parse('{"path":"/posts/Database/SOLR/solr-i-special-characters.html","title":"Solr搜索特殊字符转义","lang":"zh-CN","frontmatter":{"aliases":"Solr搜索特殊字符转义","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:51","description":"Solr搜索特殊字符转义 1. 简介 在Solr检索中，下列字符有特殊含义，需 转义处理，否则查询会报查询错误。 而我们的查询条件中，包含上述特性字符。 2. 解决方案 Solr 官方提供的转义 2.1 转义源码 solr 工具类特性字符转义源码： 参考文章 Solr 特殊字符处理","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/SOLR/solr-i-special-characters.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Solr搜索特殊字符转义"}],["meta",{"property":"og:description","content":"Solr搜索特殊字符转义 1. 简介 在Solr检索中，下列字符有特殊含义，需 转义处理，否则查询会报查询错误。 而我们的查询条件中，包含上述特性字符。 2. 解决方案 Solr 官方提供的转义 2.1 转义源码 solr 工具类特性字符转义源码： 参考文章 Solr 特殊字符处理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Solr搜索特殊字符转义\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 解决方案","slug":"_2-解决方案","link":"#_2-解决方案","children":[{"level":3,"title":"2.1 转义源码","slug":"_2-1-转义源码","link":"#_2-1-转义源码","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.66,"words":197},"filePathRelative":"posts/Database/SOLR/solr-i-special-characters.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>在Solr检索中，下列字符有特殊含义，需 转义处理，否则查询会报查询错误。</p>\\n<div class=\\"language-diff\\" data-ext=\\"diff\\" data-title=\\"diff\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#98C379;--shiki-dark:#98C379\\">+ – &amp;&amp; || ! ( ) { } [ ] ^ ” ~ * ? : \\\\</span></span></code></pre>\\n</div>","autoDesc":true}');export{t as comp,k as data};
