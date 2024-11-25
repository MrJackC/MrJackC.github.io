import{_ as a,c as n,a as i,o as l}from"./app-BfIe-EZg.js";const e={};function r(o,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="solr搜索大小写问题" tabindex="-1"><a class="header-anchor" href="#solr搜索大小写问题"><span>Solr搜索大小写问题</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>在ik分词中默认是区分大小写的。也就是无论原始字符是大写还是小写。你搜索时跟大小写也无关</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051135.png" alt="image-20220414100303196" tabindex="0" loading="lazy"><figcaption>image-20220414100303196</figcaption></figure><p>但有些场景我们不希望使用ik分词，希望是一个完整的字符串。例如我们这里指定类型为string</p><p>那么因为大小写的关系就会导致搜索不出结果</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051173.png" alt="image-20220414100339862" tabindex="0" loading="lazy"><figcaption>image-20220414100339862</figcaption></figure><h2 id="_2-问题分析" tabindex="-1"><a class="header-anchor" href="#_2-问题分析"><span>2. 问题分析</span></a></h2><p>我们在schema.xml 可以看到如下配置</p><h3 id="_2-1-ik分词的配置" tabindex="-1"><a class="header-anchor" href="#_2-1-ik分词的配置"><span>2.1 ik分词的配置</span></a></h3><p>ik分词默认将搜索结果都转为了小写</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">fieldType</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;text_ik&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;solr.TextField&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">analyzer</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;index&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">tokenizer</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;org.wltea.analyzer.lucene.IKTokenizerFactory&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;">  useSmart</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;false&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">filter</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;solr.LowerCaseFilterFactory&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">analyzer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">analyzer</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;query&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">tokenizer</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;org.wltea.analyzer.lucene.IKTokenizerFactory&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;">  useSmart</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		       &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">filter</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;solr.SynonymFilterFactory&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> synonyms</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;synonyms.txt&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> ignoreCase</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> expand</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">filter</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;solr.LowerCaseFilterFactory&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">analyzer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">fieldType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h3 id="_2-2-string-类型配置" tabindex="-1"><a class="header-anchor" href="#_2-2-string-类型配置"><span>2.2 string 类型配置</span></a></h3><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">fieldType</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;solr.StrField&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> sortMissingLast</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre></div><p>我们强制给string加上过滤器</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">filter</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;solr.LowerCaseFilterFactory&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span></code></pre></div><p>会导致项目无法正常启动</p><h2 id="_3-解决方案" tabindex="-1"><a class="header-anchor" href="#_3-解决方案"><span>3. 解决方案</span></a></h2><p>寻找合适的数据类型: lowercase</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> &lt;!-- lowercases the entire field value, keeping it as a single token.  --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">fieldType</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;lowercase&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;solr.TextField&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> positionIncrementGap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;100&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">analyzer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">tokenizer</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;solr.KeywordTokenizerFactory&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">filter</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;solr.LowerCaseFilterFactory&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">analyzer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">fieldType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>既不分词，同时不分区大小写</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051208.png" alt="image-20220414100839262" tabindex="0" loading="lazy"><figcaption>image-20220414100839262</figcaption></figure>`,22)]))}const p=a(e,[["render",r],["__file","solr-i-case.html.vue"]]),B=JSON.parse('{"path":"/posts/Database/SOLR/solr-i-case.html","title":"Solr搜索大小写问题","lang":"zh-CN","frontmatter":{"aliases":"Solr搜索大小写问题","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:51","description":"Solr搜索大小写问题 1. 简介 在ik分词中默认是区分大小写的。也就是无论原始字符是大写还是小写。你搜索时跟大小写也无关 image-20220414100303196image-20220414100303196 但有些场景我们不希望使用ik分词，希望是一个完整的字符串。例如我们这里指定类型为string 那么因为大小写的关系就会导致搜索不出结果...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/SOLR/solr-i-case.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Solr搜索大小写问题"}],["meta",{"property":"og:description","content":"Solr搜索大小写问题 1. 简介 在ik分词中默认是区分大小写的。也就是无论原始字符是大写还是小写。你搜索时跟大小写也无关 image-20220414100303196image-20220414100303196 但有些场景我们不希望使用ik分词，希望是一个完整的字符串。例如我们这里指定类型为string 那么因为大小写的关系就会导致搜索不出结果..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051135.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Solr搜索大小写问题\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051135.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051173.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051208.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 问题分析","slug":"_2-问题分析","link":"#_2-问题分析","children":[{"level":3,"title":"2.1 ik分词的配置","slug":"_2-1-ik分词的配置","link":"#_2-1-ik分词的配置","children":[]},{"level":3,"title":"2.2 string 类型配置","slug":"_2-2-string-类型配置","link":"#_2-2-string-类型配置","children":[]}]},{"level":2,"title":"3. 解决方案","slug":"_3-解决方案","link":"#_3-解决方案","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.1,"words":330},"filePathRelative":"posts/Database/SOLR/solr-i-case.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>在ik分词中默认是区分大小写的。也就是无论原始字符是大写还是小写。你搜索时跟大小写也无关</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051135.png\\" alt=\\"image-20220414100303196\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220414100303196</figcaption></figure>\\n<p>但有些场景我们不希望使用ik分词，希望是一个完整的字符串。例如我们这里指定类型为string</p>","autoDesc":true}');export{p as comp,B as data};