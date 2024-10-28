import{_ as e,c as r,a as i,o as l}from"./app-DQS7qcOs.js";const a={};function h(d,t){return l(),r("div",null,t[0]||(t[0]=[i('<h1 id="solr高亮" tabindex="-1"><a class="header-anchor" href="#solr高亮"><span>Solr高亮</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>大多数的搜索应用都存在类似的情况，那就是搜索结果显示的屏幕空间有限。</p><ul><li>如果文档很短并可以在结果列表中显示全部内容，对屏幕空间显示就不会构成太大的问题。</li><li>但大多数情况下都只能显示每个结果文档的一小部分。</li></ul><p>这就提出了一个问题：如何决定结果文档中显示哪一部分？理想情况下，<strong>应该是基于各片段与用户查询的匹配程度来决定</strong>。为查询结果选择最佳片段进行显示，这是Solr高亮框架提供的核心功能。</p><h2 id="_2-高亮所处流程" tabindex="-1"><a class="header-anchor" href="#_2-高亮所处流程"><span>2. 高亮所处流程</span></a></h2><h3 id="_2-1-查询全流程中的高亮" tabindex="-1"><a class="header-anchor" href="#_2-1-查询全流程中的高亮"><span>2.1 查询全流程中的高亮</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131049608.png" alt="image-20220418164457501" tabindex="0" loading="lazy"><figcaption>image-20220418164457501</figcaption></figure><h3 id="_2-2-高亮组件的内部流程" tabindex="-1"><a class="header-anchor" href="#_2-2-高亮组件的内部流程"><span>2.2 高亮组件的内部流程</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131049649.png" alt="image-20220418164555628" tabindex="0" loading="lazy"><figcaption>image-20220418164555628</figcaption></figure><h2 id="_3-四种高亮实现" tabindex="-1"><a class="header-anchor" href="#_3-四种高亮实现"><span>3. 四种高亮实现</span></a></h2><h3 id="_3-1-unified-highlighter" tabindex="-1"><a class="header-anchor" href="#_3-1-unified-highlighter"><span>3.1 <strong>Unified Highlighter ：</strong></span></a></h3><p>这是最灵活和最具选择性的选项,它支持最常见的突出显示参数，并且可以准确地处理任何查询，甚至是SpanQueries（例如从环绕解析器中可以看到）。 这种方式的的强大优势在于，</p><p>您可以选择配置Solr以将更多信息放入底层索引中，以加速突出显示大型文档; 即使在每个字段的基础上，也支持多种配置。 其他方式几乎没有这种灵活性</p><h3 id="_3-2-original-highlighter-最常用" tabindex="-1"><a class="header-anchor" href="#_3-2-original-highlighter-最常用"><span>3.2 <strong>Original Highlighter（最常用）：</strong></span></a></h3><p>这个Original Highlighter是高亮的一个典型.它拥有三个高亮的最复杂的和最细粒度的查询表示法.比如,高亮能够提供精确的匹配,甚至用于如surround这样的查询解析器。</p><p>它不要求任何的特殊的数据结果如termVectors.对于一个宽泛种类的搜索情况,这是一个很好的选择.</p><h3 id="_3-3-fastvector-highlighter" tabindex="-1"><a class="header-anchor" href="#_3-3-fastvector-highlighter"><span>3.3 <strong>FastVector Highlighter</strong>：</span></a></h3><p>FastVector Highlighter要求字段的term vector选项(termVectors,termPositions,termOffsets).并考虑到是最优化的,对于多语言环境它往往比standard highlighter会更好的工作。</p><p>因为它支持Unicode breakiterators(分解迭代).另一方面,它的查询表示没有standard highlighter那么高级.例如,它将不会很好的工作于surround解析器.它经常使用于大文档和多种类语言的高亮文本.</p><h3 id="_3-4-postings-highlighter" tabindex="-1"><a class="header-anchor" href="#_3-4-postings-highlighter"><span>3.4 Postings Highlighter**:</span></a></h3><p>Postings Highlighter要求存储storeOffsetsWithPositions(位置偏移量),需要在字段中配置.这是一个比vectors更简单有效的结果,但是不适合于大数量的查询terms。</p><p>像FastVector Highlighter,它支持Unicode算法来分割文档.另一方面,它有很粗略的查询表示:它注重于摘要的质量,完全忽略查询的结构,仅仅基于查询term和统计排序.</p><h2 id="_4-original-highlighter" tabindex="-1"><a class="header-anchor" href="#_4-original-highlighter"><span>4. Original Highlighter</span></a></h2><h3 id="_4-1-参数" tabindex="-1"><a class="header-anchor" href="#_4-1-参数"><span>4.1 参数</span></a></h3><table><thead><tr><th>参数</th><th>默认</th><th>含义</th></tr></thead><tbody><tr><td>hl :</td><td>默认为空白(不高亮).</td><td>为true时,开启高亮功能,为false或者空白或者缺少时,关闭高亮功能.</td></tr><tr><td>hl.fl:。</td><td>默认空白，</td><td>指定高亮字段列表.多个字段之间以逗号或空格分开.如果为空白,对于StandardRequestHandler,高亮默认搜索字段(或者指定的df参数).对于DisMaxRequestHandler,qf作为默认的 　　　　　　&quot;<em>&quot;可以用于匹配全局,如&quot;text_</em>&quot;或者&quot;<em>&quot;,当使用&quot;</em>&quot;时,hl.requireFieldMatch=true必填.</td></tr><tr><td>hl.snippets :</td><td>默认为1.</td><td>指定每个字段生成的高亮字段的最大数量.</td></tr><tr><td>hl.fragsize :</td><td>默认是100.</td><td>每个snippet返回的最大字符数。如果为0，那么该字段不会被fragmented且整个字段的值会被返回。</td></tr><tr><td>hl.mergeContiguous :</td><td>默认为false.</td><td>知识solr将邻近相连的片段合并为一个单独的片段.true表示合并.默认值为false,为向后兼容设置.</td></tr><tr><td><strong>hl.requireFieldMatch:</strong></td><td>默认为fasle.</td><td>如果置为true，除非该字段的查询结果不为空才会被高亮。它的默认值是false，意味 着它可能匹配某个字段却高亮一个不同的字段。如果hl.fl使用了通配符，那么就要启用该参数。 尽管如此，如果你的查询是all字段（可能是使用 copy-field 指令），那么还是把它设为false，这样搜索结果能表明哪个字段的查询文本未被找到</td></tr><tr><td>hl.maxAnalyzedChars:</td><td>默认51200.</td><td>会搜索高亮的最大字符，默认值为51200，如果你想禁用，设为-1</td></tr><tr><td>hl.maxMultiValuedToExamine:</td><td>默认integer.MAX_VALUE.</td><td>在停止之前,指定检查的多值字段的最大条木数.在任何匹配没有找到之前,如果达到限制,可能会返回0个结果.</td></tr><tr><td>hl.maxMultiValuedToMatch:</td><td>默认integer.MAX_VALUE.</td><td>在停止之前,指定在多值字段中找到的最大匹配数.如果hl.maxMultiValuedToExamine也已经定义了,首先达到的限制将决定何时停止查找。</td></tr><tr><td>hl.alternateField:</td><td>默认blank.</td><td>如果没有生成snippet（没有terms 匹配），那么使用另一个字段值作为返回。</td></tr><tr><td>hl.maxAlternateFieldLength :</td><td>默认 unlimited.</td><td>如果hl.alternateField启用，则有时需要制定alternateField的最大字符长度，默认0是即没有限制。所以合理的值是应该为 　hl.snippets * hl.fragsize这样返回结果的大小就能保持一致。</td></tr><tr><td>hl.formatter :</td><td>默认 simple.</td><td>一个提供可替换的formatting算法的扩展点。默认值是simple，这是目前仅有的选项。显然这不够用，你可 以看看org.apache.solr.highlight.HtmlFormatter.java 和 　solrconfig.xml中highlighting元素是如何配置的。 注意在不论原文中被高亮了什么值的情况下，如预先已存在的em tags，也不会被转义，所以在有时会导致假的高亮。</td></tr><tr><td>hl.simple.pre hl.simple.post :</td><td>默认<em> and </em> ．</td><td></td></tr><tr><td>hl.fragmenter :</td><td>默认gap．</td><td>这个是solr制定fragment算法的扩展点。gap是默认值。regex是另一种选项，这种选项指明 highlight的边界由一个正则表达式确 定。这是一种非典型 的高级选项。 为了知道默认设置和fragmenters (and formatters)是如何配置的，可以看看solrconfig.xml中的highlight段。</td></tr><tr><td>hl.usePhraseHighlighter :</td><td>默认true．</td><td>如果一个查询中含有短语（引号框起来的）那么会保证一定要完全匹配短语的才会被高亮</td></tr><tr><td>hl.highlightMultiTerm : 。</td><td>默认true.</td><td>如果设置为true,solr将会高亮出现在多terms查询中的短语</td></tr><tr><td>hl.regex.slop:</td><td>默认0.6.</td><td>在使用hl.fragmenter=regex时,意思是如果hl.fragsize=100那么fragment的大小会从40-160.</td></tr><tr><td>hl.regex.pattern:</td><td>默认空白.</td><td>为fragmenting指定正则表达式.这个可以用作提取句子。</td></tr><tr><td>hl.regex.maxAnalyzedChars:</td><td>默认10000.</td><td>搜索高亮的最大字符,对一个大字段使用一个复杂的正则表达式是非常昂贵的。</td></tr><tr><td>hl.preserveMulti :</td><td>默认false.</td><td>如果为true,多值字段将会按照它们在索引中顺序返回所有的值.如果false,只有匹配高亮请求的值返回。</td></tr></tbody></table><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.cnblogs.com/yszd/p/12867697.html" target="_blank" rel="noopener noreferrer">Solr搜索结果高亮及高级设置</a></p>',28)]))}const s=e(a,[["render",h],["__file","solr-b-highlight.html.vue"]]),g=JSON.parse('{"path":"/posts/Database/SOLR/solr-b-highlight.html","title":"Solr高亮","lang":"zh-CN","frontmatter":{"aliases":"Solr高亮","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:49","description":"Solr高亮 1. 简介 大多数的搜索应用都存在类似的情况，那就是搜索结果显示的屏幕空间有限。 如果文档很短并可以在结果列表中显示全部内容，对屏幕空间显示就不会构成太大的问题。 但大多数情况下都只能显示每个结果文档的一小部分。 这就提出了一个问题：如何决定结果文档中显示哪一部分？理想情况下，应该是基于各片段与用户查询的匹配程度来决定。为查询结果选择最佳...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/SOLR/solr-b-highlight.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Solr高亮"}],["meta",{"property":"og:description","content":"Solr高亮 1. 简介 大多数的搜索应用都存在类似的情况，那就是搜索结果显示的屏幕空间有限。 如果文档很短并可以在结果列表中显示全部内容，对屏幕空间显示就不会构成太大的问题。 但大多数情况下都只能显示每个结果文档的一小部分。 这就提出了一个问题：如何决定结果文档中显示哪一部分？理想情况下，应该是基于各片段与用户查询的匹配程度来决定。为查询结果选择最佳..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131049608.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Solr高亮\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131049608.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131049649.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 高亮所处流程","slug":"_2-高亮所处流程","link":"#_2-高亮所处流程","children":[{"level":3,"title":"2.1 查询全流程中的高亮","slug":"_2-1-查询全流程中的高亮","link":"#_2-1-查询全流程中的高亮","children":[]},{"level":3,"title":"2.2 高亮组件的内部流程","slug":"_2-2-高亮组件的内部流程","link":"#_2-2-高亮组件的内部流程","children":[]}]},{"level":2,"title":"3. 四种高亮实现","slug":"_3-四种高亮实现","link":"#_3-四种高亮实现","children":[{"level":3,"title":"3.1 Unified Highlighter ：","slug":"_3-1-unified-highlighter","link":"#_3-1-unified-highlighter","children":[]},{"level":3,"title":"3.2 Original Highlighter（最常用）：","slug":"_3-2-original-highlighter-最常用","link":"#_3-2-original-highlighter-最常用","children":[]},{"level":3,"title":"3.3 FastVector Highlighter：","slug":"_3-3-fastvector-highlighter","link":"#_3-3-fastvector-highlighter","children":[]},{"level":3,"title":"3.4 Postings Highlighter**:","slug":"_3-4-postings-highlighter","link":"#_3-4-postings-highlighter","children":[]}]},{"level":2,"title":"4. Original Highlighter","slug":"_4-original-highlighter","link":"#_4-original-highlighter","children":[{"level":3,"title":"4.1 参数","slug":"_4-1-参数","link":"#_4-1-参数","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.73,"words":1720},"filePathRelative":"posts/Database/SOLR/solr-b-highlight.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>大多数的搜索应用都存在类似的情况，那就是搜索结果显示的屏幕空间有限。</p>\\n<ul>\\n<li>如果文档很短并可以在结果列表中显示全部内容，对屏幕空间显示就不会构成太大的问题。</li>\\n<li>但大多数情况下都只能显示每个结果文档的一小部分。</li>\\n</ul>\\n<p>这就提出了一个问题：如何决定结果文档中显示哪一部分？理想情况下，<strong>应该是基于各片段与用户查询的匹配程度来决定</strong>。为查询结果选择最佳片段进行显示，这是Solr高亮框架提供的核心功能。</p>\\n<h2>2. 高亮所处流程</h2>\\n<h3>2.1 查询全流程中的高亮</h3>","autoDesc":true}');export{s as comp,g as data};
