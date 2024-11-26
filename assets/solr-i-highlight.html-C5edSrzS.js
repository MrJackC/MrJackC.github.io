import{_ as a,c as i,a as e,o as n}from"./app-JRvFIbSa.js";const l={};function r(t,s){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="solr命中关键字高亮不准确" tabindex="-1"><a class="header-anchor" href="#solr命中关键字高亮不准确"><span>Solr命中关键字高亮不准确</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>solr 在搜索时，明明搜索的是 A词组，但是B 词组也亮了，而且在 分词解析器中，怎么设置都不可能出现这种情况</p><p>因涉及一些内部数据，就不放截图了</p><h2 id="_2-原因分析" tabindex="-1"><a class="header-anchor" href="#_2-原因分析"><span>2. 原因分析</span></a></h2><p>经过不断的排查，确定问题的原因是出现多词语搜索的情况</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>a_ik:张 OR  b_s:*张*</span></span></code></pre></div><p>我们需要过滤多个词，在ik 的时候是直接搜索词，在string下是搜索like 匹配。</p><p>solr 默认情况，我们虽然搜索的是不同字段，但<strong>高亮</strong>时他还是会用b的条件带入a用做高亮</p><p>我们需要指定</p><ul><li><strong>hl.requireFieldMatch， 必须字段匹配</strong></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051631.png" alt="image-20220418155546278" tabindex="0" loading="lazy"><figcaption>image-20220418155546278</figcaption></figure><h2 id="_3-代码设置" tabindex="-1"><a class="header-anchor" href="#_3-代码设置"><span>3. 代码设置</span></a></h2><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> addHighlight</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">AjSearchRequest</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> request</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> SolrQuery</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> sq</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> highlightField) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //如果存在高亮字段则高亮显示</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">StringUtils</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">isNotEmpty</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">request</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getSearchContentList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">())</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            sq</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setHighlight</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            sq</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setHighlightSimplePre</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(HIGHHIGHT_PRE_PRIX);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            sq</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setHighlightSimplePost</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(HIGHLIGHT_POST_PRIX);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            sq</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">set</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;hl.fl&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, highlightField);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            sq</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setHighlightRequireFieldMatch</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            sq</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setHighlightFragsize</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">300</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span></code></pre></div>`,14)]))}const p=a(l,[["render",r],["__file","solr-i-highlight.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/SOLR/solr-i-highlight.html","title":"Solr命中关键字高亮不准确","lang":"zh-CN","frontmatter":{"aliases":"Solr命中关键字高亮不准确","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:51","description":"Solr命中关键字高亮不准确 1. 简介 solr 在搜索时，明明搜索的是 A词组，但是B 词组也亮了，而且在 分词解析器中，怎么设置都不可能出现这种情况 因涉及一些内部数据，就不放截图了 2. 原因分析 经过不断的排查，确定问题的原因是出现多词语搜索的情况 我们需要过滤多个词，在ik 的时候是直接搜索词，在string下是搜索like 匹配。 sol...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/SOLR/solr-i-highlight.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Solr命中关键字高亮不准确"}],["meta",{"property":"og:description","content":"Solr命中关键字高亮不准确 1. 简介 solr 在搜索时，明明搜索的是 A词组，但是B 词组也亮了，而且在 分词解析器中，怎么设置都不可能出现这种情况 因涉及一些内部数据，就不放截图了 2. 原因分析 经过不断的排查，确定问题的原因是出现多词语搜索的情况 我们需要过滤多个词，在ik 的时候是直接搜索词，在string下是搜索like 匹配。 sol..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051631.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Solr命中关键字高亮不准确\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051631.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 原因分析","slug":"_2-原因分析","link":"#_2-原因分析","children":[]},{"level":2,"title":"3. 代码设置","slug":"_3-代码设置","link":"#_3-代码设置","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.88,"words":265},"filePathRelative":"posts/Database/SOLR/solr-i-highlight.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>solr 在搜索时，明明搜索的是 A词组，但是B 词组也亮了，而且在 分词解析器中，怎么设置都不可能出现这种情况</p>\\n<p>因涉及一些内部数据，就不放截图了</p>\\n<h2>2. 原因分析</h2>\\n<p>经过不断的排查，确定问题的原因是出现多词语搜索的情况</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>a_ik:张 OR  b_s:*张*</span></span></code></pre>\\n</div>","autoDesc":true}');export{p as comp,c as data};
