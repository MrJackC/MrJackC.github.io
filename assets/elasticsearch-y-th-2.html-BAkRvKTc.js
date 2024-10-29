import{_ as s,c as e,a as i,o as t}from"./app-DEK5G3U7.js";const l={};function r(n,a){return t(),e("div",null,a[0]||(a[0]=[i(`<h1 id="es详解-原理-es原理知识点补充和整体结构" tabindex="-1"><a class="header-anchor" href="#es详解-原理-es原理知识点补充和整体结构"><span>ES详解 - 原理：ES原理知识点补充和整体结构</span></a></h1><blockquote><p>通过上文图解了解了ES整体的原理后，我们便可以基于此知识体系下梳理下ES的整体结构以及相关的知识点，这将帮助你更好的理解ElasticSearch索引文档和搜索文档的原理。</p></blockquote><h2 id="_1-elasticsearch整体结构" tabindex="-1"><a class="header-anchor" href="#_1-elasticsearch整体结构"><span>1. ElasticSearch整体结构</span></a></h2><blockquote><p>通过上文，在通过图解了解了ES整体的原理后，我们梳理下ES的整体结构</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121446784.png" alt="image-20220807223012609" tabindex="0" loading="lazy"><figcaption>image-20220807223012609</figcaption></figure><ul><li>一个 ES Index 在集群模式下，有多个 Node （节点）组成。每个节点就是 ES 的Instance (实例)。</li><li>每个节点上会有多个 shard （分片）， P1 P2 是主分片, R1 R2 是副本分片</li><li>每个分片上对应着就是一个 Lucene Index（底层索引文件）</li><li>Lucene Index 是一个统称 <ul><li>由多个 Segment （段文件，就是倒排索引）组成。每个段文件存储着就是 Doc 文档。</li><li>commit point记录了所有 segments 的信息</li></ul></li></ul><h2 id="_2-补充-lucene索引结构" tabindex="-1"><a class="header-anchor" href="#_2-补充-lucene索引结构"><span>2. 补充:Lucene索引结构</span></a></h2><blockquote><p>上图中Lucene的索引结构中有哪些文件呢？</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121446839.png" alt="image-20220807223432842" tabindex="0" loading="lazy"><figcaption>image-20220807223432842</figcaption></figure><p>（更多文件类型可参考<a href="http://lucene.apache.org/core/7_2_1/core/org/apache/lucene/codecs/lucene70/package-summary.html#package.description" target="_blank" rel="noopener noreferrer">这里 (opens new window)</a>）</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121446885.png" alt="image-20220807223542331" tabindex="0" loading="lazy"><figcaption>image-20220807223542331</figcaption></figure><p>文件的关系如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121446919.png" alt="image-20220807223558097" tabindex="0" loading="lazy"><figcaption>image-20220807223558097</figcaption></figure><h2 id="_3-补充-lucene处理流程" tabindex="-1"><a class="header-anchor" href="#_3-补充-lucene处理流程"><span>3. 补充:Lucene处理流程</span></a></h2><blockquote><p>上文图解过程，还需要理解Lucene处理流程, 这将帮助你更好的索引文档和搜索文档。</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121446950.png" alt="image-20220807223722391" tabindex="0" loading="lazy"><figcaption>image-20220807223722391</figcaption></figure><p>创建索引的过程：</p><ul><li>准备待索引的原文档，数据来源可能是文件、数据库或网络</li><li>对文档的内容进行分词组件处理，形成一系列的Term</li><li>索引组件对文档和Term处理，形成字典和倒排表</li></ul><p>搜索索引的过程：</p><ul><li>对查询语句进行分词处理，形成一系列Term</li><li>根据倒排索引表查找出包含Term的文档，并进行合并形成符合结果的文档集</li><li>比对查询语句与各个文档相关性得分，并按照得分高低返回</li></ul><h2 id="_4-补充-elasticsearch分析器" tabindex="-1"><a class="header-anchor" href="#_4-补充-elasticsearch分析器"><span>4. 补充:ElasticSearch分析器</span></a></h2><blockquote><p>上图中很重要的一项是<strong>语法分析/语言处理</strong>, 所以我们还需要补充ElasticSearch分析器知识点。</p></blockquote><p>分析 包含下面的过程：</p><ul><li>首先，将一块文本分成适合于倒排索引的独立的 词条 ，</li><li>之后，将这些词条统一化为标准格式以提高它们的“可搜索性”，或者 recall</li></ul><p>分析器执行上面的工作。 分析器 实际上是将三个功能封装到了一个包里：</p><ul><li><strong>字符过滤器</strong> 首先，字符串按顺序通过每个 字符过滤器 。他们的任务是在分词前整理字符串。一个字符过滤器可以用来去掉HTML，或者将 &amp; 转化成 and。</li><li><strong>分词器</strong> 其次，字符串被 分词器 分为单个的词条。一个简单的分词器遇到空格和标点的时候，可能会将文本拆分成词条。</li><li><strong>Token 过滤器</strong> 最后，词条按顺序通过每个 token 过滤器 。这个过程可能会改变词条（例如，小写化 Quick ），删除词条（例如， 像 a， and， the 等无用词），或者增加词条（例如，像 jump 和 leap 这种同义词）。</li></ul><p>Elasticsearch提供了开箱即用的字符过滤器、分词器和token 过滤器。 这些可以组合起来形成自定义的分析器以用于不同的目的。</p><h3 id="_4-1-内置分析器" tabindex="-1"><a class="header-anchor" href="#_4-1-内置分析器"><span>4.1 内置分析器</span></a></h3><p>Elasticsearch还附带了可以直接使用的预包装的分析器。接下来我们会列出最重要的分析器。为了证明它们的差异，我们看看每个分析器会从下面的字符串得到哪些词条：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;Set the shape to semi-transparent by calling set_trans(5)&quot;</span></span></code></pre></div><ul><li><strong>标准分析器</strong></li></ul><p>标准分析器是Elasticsearch默认使用的分析器。它是分析各种语言文本最常用的选择。它根据 Unicode 联盟 定义的 <strong>单词边界</strong> 划分文本。删除绝大部分标点。最后，将词条小写。它会产生</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">set</span><span style="color:#98C379;--shiki-dark:#98C379;">,</span><span style="color:#98C379;--shiki-dark:#98C379;"> the,</span><span style="color:#98C379;--shiki-dark:#98C379;"> shape,</span><span style="color:#98C379;--shiki-dark:#98C379;"> to,</span><span style="color:#98C379;--shiki-dark:#98C379;"> semi,</span><span style="color:#98C379;--shiki-dark:#98C379;"> transparent,</span><span style="color:#98C379;--shiki-dark:#98C379;"> by,</span><span style="color:#98C379;--shiki-dark:#98C379;"> calling,</span><span style="color:#98C379;--shiki-dark:#98C379;"> set_trans,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 5</span></span></code></pre></div><ul><li><strong>简单分析器</strong></li></ul><p>简单分析器在任何不是字母的地方分隔文本，将词条小写。它会产生</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">set</span><span style="color:#98C379;--shiki-dark:#98C379;">,</span><span style="color:#98C379;--shiki-dark:#98C379;"> the,</span><span style="color:#98C379;--shiki-dark:#98C379;"> shape,</span><span style="color:#98C379;--shiki-dark:#98C379;"> to,</span><span style="color:#98C379;--shiki-dark:#98C379;"> semi,</span><span style="color:#98C379;--shiki-dark:#98C379;"> transparent,</span><span style="color:#98C379;--shiki-dark:#98C379;"> by,</span><span style="color:#98C379;--shiki-dark:#98C379;"> calling,</span><span style="color:#98C379;--shiki-dark:#98C379;"> set,</span><span style="color:#98C379;--shiki-dark:#98C379;"> trans</span></span></code></pre></div><ul><li><strong>空格分析器</strong></li></ul><p>空格分析器在空格的地方划分文本。它会产生</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Set,</span><span style="color:#98C379;--shiki-dark:#98C379;"> the,</span><span style="color:#98C379;--shiki-dark:#98C379;"> shape,</span><span style="color:#98C379;--shiki-dark:#98C379;"> to,</span><span style="color:#98C379;--shiki-dark:#98C379;"> semi-transparent,</span><span style="color:#98C379;--shiki-dark:#98C379;"> by,</span><span style="color:#98C379;--shiki-dark:#98C379;"> calling,</span><span style="color:#98C379;--shiki-dark:#98C379;"> set_trans</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><ul><li><strong>语言分析器</strong></li></ul><p>特定语言分析器可用于 很多语言。它们可以考虑指定语言的特点。例如， 英语 分析器附带了一组英语无用词（常用单词，例如 and 或者 the ，它们对相关性没有多少影响），它们会被删除。 由于理解英语语法的规则，这个分词器可以提取英语单词的 词干 。</p><p>英语 分词器会产生下面的词条：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">set</span><span style="color:#98C379;--shiki-dark:#98C379;">,</span><span style="color:#98C379;--shiki-dark:#98C379;"> shape,</span><span style="color:#98C379;--shiki-dark:#98C379;"> semi,</span><span style="color:#98C379;--shiki-dark:#98C379;"> transpar,</span><span style="color:#98C379;--shiki-dark:#98C379;"> call,</span><span style="color:#98C379;--shiki-dark:#98C379;"> set_tran,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 5</span></span></code></pre></div><p>注意看 transparent、 calling 和 set_trans 已经变为词根格式。</p><h3 id="_4-2-什么时候使用分析器" tabindex="-1"><a class="header-anchor" href="#_4-2-什么时候使用分析器"><span>4.2 什么时候使用分析器</span></a></h3><p>当我们 索引 一个文档，它的全文域被分析成词条以用来创建倒排索引。 但是，当我们在全文域 搜索 的时候，我们需要将查询字符串通过 相同的分析过程 ，以保证我们搜索的词条格式与索引中的词条格式一致。</p><p>全文查询，理解每个域是如何定义的，因此它们可以做正确的事：</p><ul><li>当你查询一个 全文 域时， 会对查询字符串应用相同的分析器，以产生正确的搜索词条列表。</li><li>当你查询一个 精确值 域时，不会分析查询字符串，而是搜索你指定的精确值。</li></ul><blockquote><p>举个例子</p></blockquote><p>ES中每天一条数据， 按照如下方式查询：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">GET</span><span style="color:#98C379;--shiki-dark:#98C379;"> /_search?q=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2014</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">              # 12 results</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">GET</span><span style="color:#98C379;--shiki-dark:#98C379;"> /_search?q=2014-09-15</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 12 results !</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">GET</span><span style="color:#98C379;--shiki-dark:#98C379;"> /_search?q=date:2014-09-15</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   # 1  result</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">GET</span><span style="color:#98C379;--shiki-dark:#98C379;"> /_search?q=date:2014</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">         # 0  results !</span></span></code></pre></div><p>为什么返回那样的结果？</p><ul><li>date 域包含一个精确值：单独的词条 2014-09-15。</li><li>_all 域是一个全文域，所以分词进程将日期转化为三个词条： 2014， 09， 和 15。</li></ul><p>当我们在 _all 域查询 2014，它匹配所有的12条推文，因为它们都含有 2014 ：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">GET</span><span style="color:#98C379;--shiki-dark:#98C379;"> /_search?q=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2014</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">              # 12 results</span></span></code></pre></div><p>当我们在 _all 域查询 2014-09-15，它首先分析查询字符串，产生匹配 2014， 09， 或 15 中 任意 词条的查询。这也会匹配所有12条推文，因为它们都含有 2014 ：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">GET</span><span style="color:#98C379;--shiki-dark:#98C379;"> /_search?q=2014-09-15</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 12 results !</span></span></code></pre></div><p>当我们在 date 域查询 2014-09-15，它寻找 精确 日期，只找到一个推文：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">GET</span><span style="color:#98C379;--shiki-dark:#98C379;"> /_search?q=date:2014-09-15</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   # 1  result</span></span></code></pre></div><p>当我们在 date 域查询 2014，它找不到任何文档，因为没有文档含有这个精确日志：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">GET</span><span style="color:#98C379;--shiki-dark:#98C379;"> /_search?q=date:2014</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">         # 0  results !</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/db/nosql-es/elasticsearch-y-th-2.html" target="_blank" rel="noopener noreferrer"><strong>ES详解 - 原理：ES原理知识点补充和整体结构</strong></a></p>`,63)]))}const c=s(l,[["render",r],["__file","elasticsearch-y-th-2.html.vue"]]),p=JSON.parse('{"path":"/posts/Database/ES/elasticsearch-y-th-2.html","title":"ES详解 - 原理：ES原理知识点补充和整体结构","lang":"zh-CN","frontmatter":{"aliases":"ES详解 - 原理：ES原理知识点补充和整体结构","tags":null,"cssclass":null,"source":null,"order":220,"category":["ElasticSearch"],"created":"2024-02-22 10:49","updated":"2024-03-12 14:48","description":"ES详解 - 原理：ES原理知识点补充和整体结构 通过上文图解了解了ES整体的原理后，我们便可以基于此知识体系下梳理下ES的整体结构以及相关的知识点，这将帮助你更好的理解ElasticSearch索引文档和搜索文档的原理。 1. ElasticSearch整体结构 通过上文，在通过图解了解了ES整体的原理后，我们梳理下ES的整体结构 image-202...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/ES/elasticsearch-y-th-2.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"ES详解 - 原理：ES原理知识点补充和整体结构"}],["meta",{"property":"og:description","content":"ES详解 - 原理：ES原理知识点补充和整体结构 通过上文图解了解了ES整体的原理后，我们便可以基于此知识体系下梳理下ES的整体结构以及相关的知识点，这将帮助你更好的理解ElasticSearch索引文档和搜索文档的原理。 1. ElasticSearch整体结构 通过上文，在通过图解了解了ES整体的原理后，我们梳理下ES的整体结构 image-202..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121446784.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ES详解 - 原理：ES原理知识点补充和整体结构\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121446784.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121446839.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121446885.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121446919.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121446950.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. ElasticSearch整体结构","slug":"_1-elasticsearch整体结构","link":"#_1-elasticsearch整体结构","children":[]},{"level":2,"title":"2. 补充:Lucene索引结构","slug":"_2-补充-lucene索引结构","link":"#_2-补充-lucene索引结构","children":[]},{"level":2,"title":"3. 补充:Lucene处理流程","slug":"_3-补充-lucene处理流程","link":"#_3-补充-lucene处理流程","children":[]},{"level":2,"title":"4. 补充:ElasticSearch分析器","slug":"_4-补充-elasticsearch分析器","link":"#_4-补充-elasticsearch分析器","children":[{"level":3,"title":"4.1 内置分析器","slug":"_4-1-内置分析器","link":"#_4-1-内置分析器","children":[]},{"level":3,"title":"4.2 什么时候使用分析器","slug":"_4-2-什么时候使用分析器","link":"#_4-2-什么时候使用分析器","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.91,"words":1774},"filePathRelative":"posts/Database/ES/elasticsearch-y-th-2.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>通过上文图解了解了ES整体的原理后，我们便可以基于此知识体系下梳理下ES的整体结构以及相关的知识点，这将帮助你更好的理解ElasticSearch索引文档和搜索文档的原理。</p>\\n</blockquote>\\n<h2>1. ElasticSearch整体结构</h2>\\n<blockquote>\\n<p>通过上文，在通过图解了解了ES整体的原理后，我们梳理下ES的整体结构</p>\\n</blockquote>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121446784.png\\" alt=\\"image-20220807223012609\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220807223012609</figcaption></figure>","autoDesc":true}');export{c as comp,p as data};
