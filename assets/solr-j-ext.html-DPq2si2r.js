import{_ as s,c as e,a as t,o as n}from"./app-tJW29Kmg.js";const l={};function r(i,a){return n(),e("div",null,a[0]||(a[0]=[t(`<h1 id="solr配置ik分词停用词与扩展词" tabindex="-1"><a class="header-anchor" href="#solr配置ik分词停用词与扩展词"><span>Solr配置ik分词停用词与扩展词</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><h3 id="_1-1-停用词" tabindex="-1"><a class="header-anchor" href="#_1-1-停用词"><span>1.1 停用词</span></a></h3><p>停用词(Stop Words) ，词典译为“电脑检索中的虚字、非检索用字”。在SEO中，为节省存储空间和提高搜索效率，搜索引擎在索引页面或处理<strong>搜索请求时会自动忽略某些字或词</strong>，这些字或词即被称为Stop Words(停用词)。</p><p>停用词一定程度上相当于过滤词(Filter Words)，不过过滤词的范围更大一些，包含黄色、政治等敏感信息的关键词都会被视做过滤词加以处理，停用词本身则没有这个限制。通常意义上，停用词(Stop Words)大致可分为如下两类：</p><ul><li><p><strong>使用十分广泛，甚至是过于频繁的一些单词。</strong></p><p>比如英文的“i”、“is”、“what”，中文的“我”、“就”之类词几乎在每个文档上均会出现，查询这样的词搜索引擎就无法保证能够给出真正相关的搜索结果，难于缩小搜索范围提高搜索结果的准确性，同时还会降低搜索的效率。因此，在真正的工作中，Google和百度等搜索引擎会忽略掉特定的常用词，在搜索的时候，如果我们使用了太多的停用词，也同样有可能无法得到非常精确的结果，甚至是可能大量毫不相关的搜索结果。</p></li><li><p><strong>文本中出现频率很高，但实际意义又不大的词。</strong></p><p>这一类主要包括了语气助词、副词、介词、连词等，通常自身并无明确意义，只有将其放入一个完整的句子中才有一定作用的词语。如常见的“的”、“在”、“和”、“接着”之类，比如“SEO研究院是原创的SEO博客”这句话中的“是”、“的”就是两个停用词</p></li></ul><h3 id="_1-2-扩展词" tabindex="-1"><a class="header-anchor" href="#_1-2-扩展词"><span>1.2 扩展词</span></a></h3><p>基于自己项目进行扩展的一些特定词语</p><h2 id="_2-配置" tabindex="-1"><a class="header-anchor" href="#_2-配置"><span>2. 配置</span></a></h2><h3 id="_2-1-复制文件" tabindex="-1"><a class="header-anchor" href="#_2-1-复制文件"><span>2.1 复制文件</span></a></h3><p>将ext.dic 与 IKAnalyzer.cfg.xml 和 stopword.dic 复制到 webapps\\solr\\WEB-INF\\classes 文件夹下</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051081.png" alt="image-20220412154252936" tabindex="0" loading="lazy"><figcaption>image-20220412154252936</figcaption></figure><h3 id="_2-2-ikanalyzer-cfg-xml-配置" tabindex="-1"><a class="header-anchor" href="#_2-2-ikanalyzer-cfg-xml-配置"><span>2.2 IKAnalyzer.cfg.xml 配置</span></a></h3><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;?</span><span style="color:#E06C75;--shiki-dark:#E06C75;">xml</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1.0&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> encoding</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;UTF-8&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">?&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;!</span><span style="color:#C678DD;--shiki-dark:#C678DD;">DOCTYPE</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> properties</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> SYSTEM &quot;http://java.sun.com/dtd/properties.dtd&quot;&gt;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">properties</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">comment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;IK Analyzer 扩展配置&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">comment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	&lt;!--用户可以在这里配置自己的扩展字典 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">entry</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> key</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;ext_dict&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;ik_ext.dic;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">entry</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	&lt;!--用户可以在这里配置自己的扩展停止词字典--&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">entry</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> key</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;ext_stopwords&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;stopword.dic;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">entry</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">properties</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h3 id="_2-3-配置扩展词" tabindex="-1"><a class="header-anchor" href="#_2-3-配置扩展词"><span>2.3 配置扩展词</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051136.png" alt="image-20220412154445335" tabindex="0" loading="lazy"><figcaption>image-20220412154445335</figcaption></figure><h3 id="_2-4-配置停用词" tabindex="-1"><a class="header-anchor" href="#_2-4-配置停用词"><span>2.4 配置停用词</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051169.png" alt="image-20220412154516180" tabindex="0" loading="lazy"><figcaption>image-20220412154516180</figcaption></figure><h2 id="_3-扩展词验证" tabindex="-1"><a class="header-anchor" href="#_3-扩展词验证"><span>3. 扩展词验证</span></a></h2><h3 id="_3-1-未配置前" tabindex="-1"><a class="header-anchor" href="#_3-1-未配置前"><span>3.1 未配置前</span></a></h3><p>未配置前网红分词，分为网和红。但是我们也希望他们是一体的</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051210.png" alt="image-20220412155122059" tabindex="0" loading="lazy"><figcaption>image-20220412155122059</figcaption></figure><h4 id="_3-2-配置后的效果" tabindex="-1"><a class="header-anchor" href="#_3-2-配置后的效果"><span>3.2 配置后的效果</span></a></h4><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/Appleyk/article/details/79270363" target="_blank" rel="noopener noreferrer">Solr 7.2.1 配置中文分词器 IK Analyzer</a></p>`,25)]))}const p=s(l,[["render",r],["__file","solr-j-ext.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/SOLR/solr-j-ext.html","title":"Solr配置ik分词停用词与扩展词","lang":"zh-CN","frontmatter":{"aliases":"Solr配置ik分词停用词与扩展词","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:51","description":"Solr配置ik分词停用词与扩展词 1. 简介 1.1 停用词 停用词(Stop Words) ，词典译为“电脑检索中的虚字、非检索用字”。在SEO中，为节省存储空间和提高搜索效率，搜索引擎在索引页面或处理搜索请求时会自动忽略某些字或词，这些字或词即被称为Stop Words(停用词)。 停用词一定程度上相当于过滤词(Filter Words)，不过过...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/SOLR/solr-j-ext.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Solr配置ik分词停用词与扩展词"}],["meta",{"property":"og:description","content":"Solr配置ik分词停用词与扩展词 1. 简介 1.1 停用词 停用词(Stop Words) ，词典译为“电脑检索中的虚字、非检索用字”。在SEO中，为节省存储空间和提高搜索效率，搜索引擎在索引页面或处理搜索请求时会自动忽略某些字或词，这些字或词即被称为Stop Words(停用词)。 停用词一定程度上相当于过滤词(Filter Words)，不过过..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051081.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Solr配置ik分词停用词与扩展词\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051081.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051136.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051169.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051210.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 停用词","slug":"_1-1-停用词","link":"#_1-1-停用词","children":[]},{"level":3,"title":"1.2 扩展词","slug":"_1-2-扩展词","link":"#_1-2-扩展词","children":[]}]},{"level":2,"title":"2. 配置","slug":"_2-配置","link":"#_2-配置","children":[{"level":3,"title":"2.1 复制文件","slug":"_2-1-复制文件","link":"#_2-1-复制文件","children":[]},{"level":3,"title":"2.2 IKAnalyzer.cfg.xml 配置","slug":"_2-2-ikanalyzer-cfg-xml-配置","link":"#_2-2-ikanalyzer-cfg-xml-配置","children":[]},{"level":3,"title":"2.3 配置扩展词","slug":"_2-3-配置扩展词","link":"#_2-3-配置扩展词","children":[]},{"level":3,"title":"2.4 配置停用词","slug":"_2-4-配置停用词","link":"#_2-4-配置停用词","children":[]}]},{"level":2,"title":"3. 扩展词验证","slug":"_3-扩展词验证","link":"#_3-扩展词验证","children":[{"level":3,"title":"3.1 未配置前","slug":"_3-1-未配置前","link":"#_3-1-未配置前","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.38,"words":714},"filePathRelative":"posts/Database/SOLR/solr-j-ext.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<h3>1.1 停用词</h3>\\n<p>停用词(Stop Words) ，词典译为“电脑检索中的虚字、非检索用字”。在SEO中，为节省存储空间和提高搜索效率，搜索引擎在索引页面或处理<strong>搜索请求时会自动忽略某些字或词</strong>，这些字或词即被称为Stop Words(停用词)。</p>\\n<p>停用词一定程度上相当于过滤词(Filter Words)，不过过滤词的范围更大一些，包含黄色、政治等敏感信息的关键词都会被视做过滤词加以处理，停用词本身则没有这个限制。通常意义上，停用词(Stop Words)大致可分为如下两类：</p>\\n<ul>\\n<li>\\n<p><strong>使用十分广泛，甚至是过于频繁的一些单词。</strong></p>\\n<p>比如英文的“i”、“is”、“what”，中文的“我”、“就”之类词几乎在每个文档上均会出现，查询这样的词搜索引擎就无法保证能够给出真正相关的搜索结果，难于缩小搜索范围提高搜索结果的准确性，同时还会降低搜索的效率。因此，在真正的工作中，Google和百度等搜索引擎会忽略掉特定的常用词，在搜索的时候，如果我们使用了太多的停用词，也同样有可能无法得到非常精确的结果，甚至是可能大量毫不相关的搜索结果。</p>\\n</li>\\n<li>\\n<p><strong>文本中出现频率很高，但实际意义又不大的词。</strong></p>\\n<p>这一类主要包括了语气助词、副词、介词、连词等，通常自身并无明确意义，只有将其放入一个完整的句子中才有一定作用的词语。如常见的“的”、“在”、“和”、“接着”之类，比如“SEO研究院是原创的SEO博客”这句话中的“是”、“的”就是两个停用词</p>\\n</li>\\n</ul>","autoDesc":true}');export{p as comp,c as data};