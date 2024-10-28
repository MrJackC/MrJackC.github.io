import{_ as s,c as e,a,o as i}from"./app-W9QyTiMU.js";const l={};function r(p,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="solr倒排索引原理" tabindex="-1"><a class="header-anchor" href="#solr倒排索引原理"><span>Solr倒排索引原理</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>solr是基于Lucence开发的企业级搜索引擎技术，而lucence的原理是倒排索引。那么什么是倒排索引呢？</p><h3 id="_1-1-正排索引" tabindex="-1"><a class="header-anchor" href="#_1-1-正排索引"><span>1.1 正排索引</span></a></h3><p>我们传统的方式（正排索引）是从关键点出发，然后再通过关键点找到关键点代表的信息中能够满足搜索条件的特定信息，既通过<strong>KEY寻找VALUE</strong>。</p><p>例如我们sql 语句，他是通过key ,来找值</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>where name like &#39;%张三%&#39;</span></span></code></pre></div><p><strong>正排索引从文档编号找词：</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131049531.png" alt="image-20220417133453806" tabindex="0" loading="lazy"><figcaption>image-20220417133453806</figcaption></figure><h3 id="_1-2-倒排索引" tabindex="-1"><a class="header-anchor" href="#_1-2-倒排索引"><span>1.2 倒排索引</span></a></h3><p>而Lucene的搜索则是采用了倒排索引的方式，即通过<strong>VALUE找KEY</strong>。而在中文全文搜索中VALUE就是我们要搜索的单词，存放所有单词的地方叫词典。KEY是文档标号列表（通过文档标号列表我们可以找到出现过要搜索单词VALUE的文档）</p><p><strong>倒排索引是从词找文档编号：</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131049582.png" alt="image-20220417133516596" tabindex="0" loading="lazy"><figcaption>image-20220417133516596</figcaption></figure><h2 id="_2-索引的创建过程" tabindex="-1"><a class="header-anchor" href="#_2-索引的创建过程"><span>2. 索引的创建过程</span></a></h2><p>索引的创建过程可以分为：<strong>1.分词组件，2.语言处理组件，2.索引组件</strong></p><h3 id="_2-1-分词组件-tokenizer" tabindex="-1"><a class="header-anchor" href="#_2-1-分词组件-tokenizer"><span>2.1 分词组件（Tokenizer）</span></a></h3><ul><li>将原文档交给分词组件（Tokenizer）</li></ul><p>此过程叫做Tokenize，得到的结果称为Token。</p><p>分词组件的作用</p><ol><li>将数据分成一个个词汇</li><li>去除标点符号</li><li>去除停词(比如中文的“的”，“和”，“啦”等等)</li></ol><h4 id="_2-1-1-示例" tabindex="-1"><a class="header-anchor" href="#_2-1-1-示例"><span>2.1.1 示例</span></a></h4><p>比如存入“Students should be allowed to go out！”</p><ol><li>分词组件会先将句子分成多个单词“Students”，“should”，“be” ，“allowed”，“to”，“go”，“out”,“！”。</li><li>随后会进行第二部将标点符号“！”去掉，</li><li>最后第三步会将“to”,“be”去掉。</li></ol><p>最后留下的结果为：“Students”，“should”，“allowed”，“go”，“out”。</p><h3 id="_2-2-语言处理组件-linguisticprocessor" tabindex="-1"><a class="header-anchor" href="#_2-2-语言处理组件-linguisticprocessor"><span>2.2 语言处理组件（LinguisticProcessor）：</span></a></h3><p>将得到的Token交给语言处理组件（LinguisticProcessor）</p><p>此过程处理的结果是Term</p><p>语言处理组件的作用如下：</p><ol><li>变为小写(Lowercase)。</li><li>将单词缩减为词根形式，如”cars”到”car”等。这种操作称为：stemming。</li><li>将单词转变为词根形式，如”drove”到”drive”等。这种操作称为：lemmatization。</li></ol><blockquote><p>注意：至此索引创建完成，搜索”drive”时，”driving”，”drove”，”driven”也能够被搜到。因为在索引中，”driving”，”drove”，”driven”都会经过语言处理而变成”drive”，在搜索时，如果您输入”driving”，输入的查询语句同样经过分词组件和语言处理组件处理的步骤，变为查询”drive”，从而可以搜索到想要的文档。Lowercase，stemming同理</p></blockquote><h3 id="_2-4-索引组件-indexer" tabindex="-1"><a class="header-anchor" href="#_2-4-索引组件-indexer"><span>2.4 <strong>索引组件（Indexer）</strong></span></a></h3><p>将得到的Term交给索引组件（Indexer）</p><ol><li>将得到的Term创建字典</li><li>对字典按字母排序</li><li>合并相同的Term为倒排索引表</li></ol><p>假设现在有两个文档：</p><ul><li>文档一：Students should be allowed to go out with their friends, but not allowed to drink beer.</li><li>文档二：My friend Jerry went to school to see his students but found them drunk which is not allowed</li></ul><p>经过前两个组件的处理后得到如下索引：</p><h4 id="_2-4-1-初始索引" tabindex="-1"><a class="header-anchor" href="#_2-4-1-初始索引"><span>2.4.1 初始索引</span></a></h4><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>Term Document ID</span></span>
<span class="line"><span>student 1</span></span>
<span class="line"><span>allow 1</span></span>
<span class="line"><span>go 1</span></span>
<span class="line"><span>their 1</span></span>
<span class="line"><span>friend 1</span></span>
<span class="line"><span>allow 1</span></span>
<span class="line"><span>drink 1</span></span>
<span class="line"><span>beer 1</span></span>
<span class="line"><span>my 2</span></span>
<span class="line"><span>friend 2</span></span>
<span class="line"><span>jerry 2</span></span>
<span class="line"><span>go 2</span></span>
<span class="line"><span>school 2</span></span>
<span class="line"><span>see 2</span></span>
<span class="line"><span>his 2</span></span>
<span class="line"><span>student 2</span></span>
<span class="line"><span>find 2</span></span>
<span class="line"><span>them 2</span></span>
<span class="line"><span>drink 2</span></span>
<span class="line"><span>allow 2</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-2-对字典按字母顺序排序" tabindex="-1"><a class="header-anchor" href="#_2-4-2-对字典按字母顺序排序"><span>2.4.2 对字典按字母顺序排序：</span></a></h4><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>Term Document ID</span></span>
<span class="line"><span>allow 1</span></span>
<span class="line"><span>allow 1</span></span>
<span class="line"><span>allow 2</span></span>
<span class="line"><span>beer 1</span></span>
<span class="line"><span>drink 1</span></span>
<span class="line"><span>drink 2</span></span>
<span class="line"><span>find 2</span></span>
<span class="line"><span>friend 1</span></span>
<span class="line"><span>friend 2</span></span>
<span class="line"><span>go 1</span></span>
<span class="line"><span>go 2</span></span>
<span class="line"><span>his 2</span></span>
<span class="line"><span>jerry 2</span></span>
<span class="line"><span>my 2</span></span>
<span class="line"><span>school 2</span></span>
<span class="line"><span>see 2</span></span>
<span class="line"><span>student 1</span></span>
<span class="line"><span>student 2</span></span>
<span class="line"><span>their 1</span></span>
<span class="line"><span>them 2</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-3-合并相同的词-term-成为文档倒排-posting-list-链表" tabindex="-1"><a class="header-anchor" href="#_2-4-3-合并相同的词-term-成为文档倒排-posting-list-链表"><span>2.4.3 合并相同的词(Term)成为文档倒排(Posting List)链表</span></a></h4><p>合并相同的词(Term)成为文档倒排(Posting List)链表</p><ul><li>Document Frequency：文档频次，表示多少文档出现过此词(Term)</li><li>Frequency：词频，表示某个文档中该词(Term)出现过几次</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131049615.png" alt="image-20220417131709282" tabindex="0" loading="lazy"><figcaption>image-20220417131709282</figcaption></figure><h2 id="_3-索引的检索" tabindex="-1"><a class="header-anchor" href="#_3-索引的检索"><span>3. <strong>索引的检索</strong></span></a></h2><p>通过前几步索引的创建，现在就可以对创建的索引进行检索了。</p><ol><li>当用户的检索关键词进入solr后，solr会对传入的关键词进行处理，具体处理过程类似创建索引时语言处理组件对文档词汇的处理过程。</li><li>将处理后的词在词典中搜索得到一个文档集。</li><li>将文档集根据词频将文档集进行相关性排序。</li><li>将结果集返回给用户。</li></ol><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://cloud.tencent.com/developer/article/1675434" target="_blank" rel="noopener noreferrer">solr索引基本原理</a></p><p><a href="https://blog.nowcoder.net/n/7806530b1e9343848024ec20e87ff8cf" target="_blank" rel="noopener noreferrer">Solr倒排索引原理</a></p>`,50)]))}const d=s(l,[["render",r],["__file","solr-b-index.html.vue"]]),o=JSON.parse(`{"path":"/posts/Database/SOLR/solr-b-index.html","title":"Solr倒排索引原理","lang":"zh-CN","frontmatter":{"aliases":"Solr倒排索引原理","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:50","description":"Solr倒排索引原理 1. 简介 solr是基于Lucence开发的企业级搜索引擎技术，而lucence的原理是倒排索引。那么什么是倒排索引呢？ 1.1 正排索引 我们传统的方式（正排索引）是从关键点出发，然后再通过关键点找到关键点代表的信息中能够满足搜索条件的特定信息，既通过KEY寻找VALUE。 例如我们sql 语句，他是通过key ,来找值 正排...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/SOLR/solr-b-index.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Solr倒排索引原理"}],["meta",{"property":"og:description","content":"Solr倒排索引原理 1. 简介 solr是基于Lucence开发的企业级搜索引擎技术，而lucence的原理是倒排索引。那么什么是倒排索引呢？ 1.1 正排索引 我们传统的方式（正排索引）是从关键点出发，然后再通过关键点找到关键点代表的信息中能够满足搜索条件的特定信息，既通过KEY寻找VALUE。 例如我们sql 语句，他是通过key ,来找值 正排..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131049531.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Solr倒排索引原理\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131049531.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131049582.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131049615.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 正排索引","slug":"_1-1-正排索引","link":"#_1-1-正排索引","children":[]},{"level":3,"title":"1.2 倒排索引","slug":"_1-2-倒排索引","link":"#_1-2-倒排索引","children":[]}]},{"level":2,"title":"2. 索引的创建过程","slug":"_2-索引的创建过程","link":"#_2-索引的创建过程","children":[{"level":3,"title":"2.1 分词组件（Tokenizer）","slug":"_2-1-分词组件-tokenizer","link":"#_2-1-分词组件-tokenizer","children":[]},{"level":3,"title":"2.2 语言处理组件（LinguisticProcessor）：","slug":"_2-2-语言处理组件-linguisticprocessor","link":"#_2-2-语言处理组件-linguisticprocessor","children":[]},{"level":3,"title":"2.4 索引组件（Indexer）","slug":"_2-4-索引组件-indexer","link":"#_2-4-索引组件-indexer","children":[]}]},{"level":2,"title":"3. 索引的检索","slug":"_3-索引的检索","link":"#_3-索引的检索","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.71,"words":1112},"filePathRelative":"posts/Database/SOLR/solr-b-index.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>solr是基于Lucence开发的企业级搜索引擎技术，而lucence的原理是倒排索引。那么什么是倒排索引呢？</p>\\n<h3>1.1 正排索引</h3>\\n<p>我们传统的方式（正排索引）是从关键点出发，然后再通过关键点找到关键点代表的信息中能够满足搜索条件的特定信息，既通过<strong>KEY寻找VALUE</strong>。</p>\\n<p>例如我们sql 语句，他是通过key ,来找值</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>where name like '%张三%'</span></span></code></pre>\\n</div>","autoDesc":true}`);export{d as comp,o as data};
