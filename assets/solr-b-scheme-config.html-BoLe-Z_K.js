import{_ as s,c as e,a as i,o as l}from"./app-tJW29Kmg.js";const n={};function o(r,a){return l(),e("div",null,a[0]||(a[0]=[i(`<h1 id="solr-schema配置" tabindex="-1"><a class="header-anchor" href="#solr-schema配置"><span>Solr-Schema配置</span></a></h1><blockquote><p>Solr 5.5以上版本中没有schema.xml这个配置文件，而是出现了一个叫managed-schema的配置文件</p></blockquote><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>schema即模式，它是集合/内核中<strong>字段的定义</strong>，主要是<strong>让Solr知道集合/内核包含哪些字段、字段的数据类型以及该字段是否存储索引</strong>。</p><p>Solr中提供了两种方式来配置schema，但两者只能选其一</p><ul><li>默认的托管模式</li><li>经典的schema.xml模式</li></ul><h2 id="_2-配置方式" tabindex="-1"><a class="header-anchor" href="#_2-配置方式"><span>2. 配置方式</span></a></h2><h3 id="_2-1-默认的托管模式" tabindex="-1"><a class="header-anchor" href="#_2-1-默认的托管模式"><span>2.1 默认的托管模式</span></a></h3><p>Solr默认使用的就是托管模式。也就是说当在solrconfig.xml配置文件中没有显式声明<code>&lt;schemaFactory/&gt;</code>时，Solr隐式地使用ManagedIndexSchemaFactory，它是默认的&quot;mutable&quot;，并且将模式信息保存在一个名为managed-schema文件中。</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">schemaFactory</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;ManagedIndexSchemaFactory&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">bool</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;mutable&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;true&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">bool</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">str</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;managedSchemaResourceName&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;managed-schema&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">str</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">schemaFactory</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>当然，也可以显式的声明schema文件，但是，当显式的声明schema文件的时候，文件的名字不能是managed-schema也不能是schema.xml。同时schema文件的名字要与solrconfig.xml配置文件中声明的schema文件名一样。</p><h3 id="_2-2-经典的schema-xml模式" tabindex="-1"><a class="header-anchor" href="#_2-2-经典的schema-xml模式"><span>2.2 经典的schema.xml模式</span></a></h3><p>这种模式的配置方式是在solrconfig.xml配置文件中显式配置一个ClassicIndexSchemaFactory。</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">schemaFactory</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;ClassicIndexSchemaFactory&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span></code></pre></div><p>ClassicIndexSchemaFactory需要使用schema.xml配置文件，并且不允许在运行时对架构进行任何编程式更改。而且该schema.xml文件必须手动编辑，编辑完后需要<strong>重载集合/内核才会生效</strong>。</p><h2 id="_3-两种模式的区别" tabindex="-1"><a class="header-anchor" href="#_3-两种模式的区别"><span>3. 两种模式的区别</span></a></h2><ul><li>区别一：两种模式下，schema文件的格式形式不同，默认的托管模式下的schema文件名字必须是managed-schema；而经典的schema.xml模式下的schema文件名字必须是schema.xml。</li><li>区别二：两种模式下，solrconfig.xml配置文件中的<code>&lt;schemaFactory/&gt;</code>声明的方式也不同。</li></ul><h2 id="_4-两种模式之间的相互切换" tabindex="-1"><a class="header-anchor" href="#_4-两种模式之间的相互切换"><span>4. 两种模式之间的相互切换</span></a></h2><p>这两种模式之间是可以切换的，比如用于升级操作，从旧版本到新版本的升级。接下来，我会详细讲解切换方式。</p><p>这两种模式之间是可以切换的，比如用于升级操作，从旧版本到新版本的升级。接下来，我会详细讲解切换方式。</p><h3 id="_4-1-从经典的schema-xml模式切换到默认的托管模式" tabindex="-1"><a class="header-anchor" href="#_4-1-从经典的schema-xml模式切换到默认的托管模式"><span>4.1 从经典的schema.xml模式切换到默认的托管模式</span></a></h3><p>只需要将solrconfig.xml配置文件中显示配置的<code>&lt;schemaFactory class=&quot;ClassicIndexSchemaFactory&quot;/&gt;</code>删除或注释掉，然后重新启动Solr服务器即可。</p><p>当Solr服务器启动的时候，会检测是否存在managed-schema文件，如果存在，那么这个managed-schema文件就是将要被读取的文件；如果managed-schema文件不存在，那么Solr服务器就会将schema.xml文件中的内容读取并将内容写入新建的managed-schema文件，然后将schema.xml文件重命名为schema.xml.bak。</p><h3 id="_4-2-从默认的托管模式切换到经典的schema-xml模式" tabindex="-1"><a class="header-anchor" href="#_4-2-从默认的托管模式切换到经典的schema-xml模式"><span>4.2 从默认的托管模式切换到经典的schema.xml模式</span></a></h3><p>从默认的托管模式切换到经典的schema.xml模式，只须三步即可实现。</p><p>第一步：将managed-schema文件重命名为schema.xml；<br> 第二步：在solrconfig.xml配置文件中显示的配置<code>&lt;schemaFactory class=&quot;ClassicIndexSchemaFactory&quot;/&gt;</code>；<br> 第三步：重新启动Solr服务器。</p><h2 id="_5-managed-schema配置文件详解" tabindex="-1"><a class="header-anchor" href="#_5-managed-schema配置文件详解"><span>5. managed-schema配置文件详解</span></a></h2><p>在Solr-home里面的核内的conf目录下有两个配置文件是我们要掌握的，一个是solrconfig.xml核心配置文件，另外一个就是managed-schema配置文件。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050948.png" alt="image-20220417194419788" tabindex="0" loading="lazy"><figcaption>image-20220417194419788</figcaption></figure><h3 id="_5-1-managed-schema配置文件内容" tabindex="-1"><a class="header-anchor" href="#_5-1-managed-schema配置文件内容"><span>5.1 managed-schema配置文件内容</span></a></h3><p>managed-schema配置文件中配置的到底是些什么东西呢？</p><p>该配置文件在Solr Core的conf目录下，它是Solr数据表配置文件，它定义了加入索引的数据的数据类型，主要包括很多field字段、唯一ID、fieldType字段类型和其他的一些缺省设置。我们先了解下managed-schema配置文件的大致结构。</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;?</span><span style="color:#E06C75;--shiki-dark:#E06C75;">xml</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1.0&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> encoding</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;UTF-8&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ?&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">schema</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1.6&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">field</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> .../&gt;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dynamicField</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> .../&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">uniqueKey</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;id&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">uniqueKey</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">copyField</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> .../&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">fieldType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ...&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">analyzer</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;index&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">			&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">tokenizer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> .../&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">			&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">filter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ... /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">analyzer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">analyzer</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;query&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">			&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">tokenizer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> .../&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">			&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">filter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ... /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">analyzer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">fieldType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">schema</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-field-字段" tabindex="-1"><a class="header-anchor" href="#_5-2-field-字段"><span>5.2 field（字段）</span></a></h3><p>字段定义</p><p>其实，在managed-schema配置文件中配置了大量的域。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050997.png" alt="image-20220417204142175" tabindex="0" loading="lazy"><figcaption>image-20220417204142175</figcaption></figure><h4 id="_5-2-1-示例1-version" tabindex="-1"><a class="header-anchor" href="#_5-2-1-示例1-version"><span>5.2.1 示例1：<em>version</em></span></a></h4><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">field</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;_version_&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;plong&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> indexed</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;false&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> stored</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;false&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span></code></pre></div><p>以上配置的意思就是说配置了一个域，名字叫_version_，类型是plong类型（注意：这里的plong是别名）。以plong为关键字继续在managed-schema配置文件中查找，你就能很快找到它的位置了。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050046.png" alt="image-20220417204559038" tabindex="0" loading="lazy"><figcaption>image-20220417204559038</figcaption></figure><p>这就说明了名字为_version_的这个域，是LongPoint类型的（之前在学习Lucene时介绍过）。从该域的配置中还可以看到indexed和stored属性明确地设置为了false，这表明该域既不索引也不存储。</p><p>想一想，之前我们在学习Lucene时，创建索引的时候，要想构建一个Long数值型的Field，是不是要像下面这样写代码？</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 1. 数值类型可以使用XxxPoint添加到索引中</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">document</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">add</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> LongPoint</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;fileSize&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, file_size));</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // file_size表示文件大小</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 2. 如果该域还想要被存储，那么就需要再使用StoreField来构建它</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">document</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">add</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> StoredField</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;fileSize&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, file_size));</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 3. 添加排序支持</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">document</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">add</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> NumericDocValuesField</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;fileSize&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, file_size));</span></span></code></pre></div><p>现在就不必这么麻烦了，Solr中的managed-schema配置文件已经帮我们配置好了，使用的时候，就直接用_version_这个名字，然后填写好对应的域值，就OK了。</p><h4 id="_5-2-2-示例2-id" tabindex="-1"><a class="header-anchor" href="#_5-2-2-示例2-id"><span>5.2.2 示例2：id</span></a></h4><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">field</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;id&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> multiValued</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;false&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> indexed</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> required</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> stored</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span></code></pre></div><p>以上配置的是id域，可以发现该域中required属性的值为true（即必须），这又意味着什么呢？之前我们在学习Lucene时，id是不必须的，但是这实际上是因为当我们将文档对象扔进索引库的时候，会自动为每个文档创建索引，即每个文档都有一个唯一的编号，就是文档id。而使用Solr的时候，它就不再自己创建这个域了，因此就得我们自个儿指定了。咱自个儿指定，就要求咱必须给它来一个id，而且这个id是必须的。</p><blockquote><p>如果你要是对于文档对象的id还不是理解很透彻，那么可以对比数据库来进行理解，它就相当于数据库表中的主键id。Lucene是自己生成，类似自增长；Solr是在managed-schema配置文件中进行配置，需要我们自己进行指定，类似于assigned。总而言之，<strong>以后在用Solr保存一个数据的时候，一定记得要给id。</strong></p></blockquote><h4 id="_5-2-3-示例3-title" tabindex="-1"><a class="header-anchor" href="#_5-2-3-示例3-title"><span>5.2.3 示例3：title</span></a></h4><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">field</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;title&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;text_general&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> indexed</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> stored</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> multiValued</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span></code></pre></div><p>可以看到以上配置的title域中multiValued属性的值为true，这意味着什么呢？如果某个域要存储多个值，那么multiValued属性的值设置为true即可。Solr允许一个域存储多个值，比如存储一个用户的好友id（多个），商品的图片（多个，大图和小图）。就拿title域来说，我们可以向该域中存储多个值，就像下面这样。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050077.png" alt="image-20220417205227588" tabindex="0" loading="lazy"><figcaption>image-20220417205227588</figcaption></figure><p>最后使用Solr查询，我们可以看出返回给客户端的是<a href="https://so.csdn.net/so/search?q=%E6%95%B0%E7%BB%84&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">数组</a>，类似于下图这样。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050111.png" alt="image-20220417205304124" tabindex="0" loading="lazy"><figcaption>image-20220417205304124</figcaption></figure><h4 id="_5-2-4-字段属性" tabindex="-1"><a class="header-anchor" href="#_5-2-4-字段属性"><span>5.2.4 字段属性</span></a></h4><p>字段定义可以具有以下属性：</p><ul><li>name：该字段的名称。字段名称只能由字母、数字或下划线字符组成，不能以数字开头。目前这并不是严格执行的，但其他字段名称将不具备所有组件的第一类支持，并且不保证向后的兼容性。以下划线开头和结尾的名字为保留字段名，如_version_。每个字段都必须要有一个name；</li><li>type：字段的fieldType名，而且必须，该属性的值为fieldType标签中定义的name属性的值；</li><li>default：默认值，非必须。如果提交的文档中没有该字段的值，则自动会为文档添加这个默认值。相当于传统数据库中的字段默认值。<br> 除此之外，字段还有很多可选属性，如下列表所示。</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050139.png" alt="image-20220417205439256" tabindex="0" loading="lazy"><figcaption>image-20220417205439256</figcaption></figure><h3 id="_5-3-dynamicfield-动态字段" tabindex="-1"><a class="header-anchor" href="#_5-3-dynamicfield-动态字段"><span>5.3 dynamicField（动态字段）</span></a></h3><p>为了防止以上的域依然不够用，所以这才有了dynamicField（动态字段）。你可能要问了，动态字段到底是什么呢？如果模式中有近百个字段需要定义，其中有很多字段的定义都是相同的，那么重复地定义就十分的麻烦，因此可以定一个规则，字段名以某前缀开头或结尾的是相同的定义配置，那这些重复字段就只需要配置一个，保证提交的字段名称遵守这个前缀或后缀即可，这就是动态字段。例如，整型字段都是一样的定义，则可以定义一个如下的动态字段。</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dynamicField</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;*_i&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;pint&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> indexed</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> stored</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span></code></pre></div><blockquote><p>温馨提示：动态字段只能用符号*通配符进行表示，且只有前缀和后缀两种方式。</p></blockquote><p>其实说白了，动态字段就是不用指定具体的名称，只须定义字段名称的规则即可。例如，定义一个dynamicField，name为*_s，type为string，那么在使用这个字段的时候，任何以_s结尾的字段都被认为是符合这个定义的，比方说name_s、gender_s、school_i等。</p><h4 id="_5-3-1-示例-t" tabindex="-1"><a class="header-anchor" href="#_5-3-1-示例-t"><span>5.3.1 示例 *_t</span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050166.png" alt="image-20220417205830079" tabindex="0" loading="lazy"><figcaption>image-20220417205830079</figcaption></figure><p>那么咱们在创建索引时，就可以像下图这样做了。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050192.png" alt="image-20220417210432570" tabindex="0" loading="lazy"><figcaption>image-20220417210432570</figcaption></figure><p>然后咱们再搜索一下索引，此时，就能看到返回给客户端的结果就是下图这样子的了。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050225.png" alt="image-20220417210452242" tabindex="0" loading="lazy"><figcaption>image-20220417210452242</figcaption></figure><h4 id="_5-3-2-为什么需要动态域" tabindex="-1"><a class="header-anchor" href="#_5-3-2-为什么需要动态域"><span>5.3.2 为什么需要动态域</span></a></h4><p>你有没有思考过这样一个问题：提前设定好这些域的目的到底是什么？managed-schema配置文件中配置的域，就是我们要使用的域，意思就是说我们在使用Solr进行开发，在用任何一个域的时候，这个域一定得要在managed-schema配置文件中提前配置好。如果你曾经没配置过，而且又用了一个没配置过的域，那么这时就会报错，因为Solr服务器本身就不认识这个域。这就是为什么Solr要在managed-schema配置文件帮我们配置大量的域的原因。</p><p>虽然managed-schema配置文件中配置了很多域，但是你可以直接使用，也可以自己自行配置，即自定义域。例如，可以自定义一个如下域。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050244.png" alt="image-20220417210604800" tabindex="0" loading="lazy"><figcaption>image-20220417210604800</figcaption></figure><p>这样，咱们就可以像下图所示那样创建索引了。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050273.png" alt="image-20220417210653435" tabindex="0" loading="lazy"><figcaption>image-20220417210653435</figcaption></figure><p><strong>结论：没有配置过的域不能用，配置过的域就能用。</strong></p><h2 id="_5-4-uniquekey-唯一主键" tabindex="-1"><a class="header-anchor" href="#_5-4-uniquekey-唯一主键"><span>5.4 uniqueKey（唯一主键）</span></a></h2><p>Solr中默认定义唯一主键key为id域，如下所示。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050303.png" alt="image-20220417210810970" tabindex="0" loading="lazy"><figcaption>image-20220417210810970</figcaption></figure><p>Solr在删除、更新索引时使用id域进行判断，当然了，我们也可以自定义唯一主键，例如指定商品ID为唯一主键（类似于传统数据库的主键ID）。</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- 指定商品ID为唯一键，类似于传统数据库的主键ID --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">uniqueKey</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;productId&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">uniqueKey</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>这里，我还要提醒大家注意以下三点。</p><ol><li>在创建索引时必须指定唯一约束；</li><li>这里的唯一主键是指业务主键，并不是Document的主键；</li><li>唯一主键字段不可以是保留字段、复制字段，且不能分词。</li></ol><h2 id="_5-5-copyfield-复制字段" tabindex="-1"><a class="header-anchor" href="#_5-5-copyfield-复制字段"><span>5.5 copyField（复制字段）</span></a></h2><p>在managed-schema配置文件中，你会看到如下配置。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050335.png" alt="image-20220417211047704" tabindex="0" loading="lazy"><figcaption>image-20220417211047704</figcaption></figure><p>复制字段允许将一个或多个字段的值填充到一个字段中。它的用途通常来说有两种：</p><ol><li>将多个字段内容填充到一个字段，来进行搜索；</li><li>对同一个字段内容进行不同的分词过滤，创建一个新的可搜索字段。</li></ol><p>总归一句话：<strong>复制域，就是说白了，当你搜索的时候，想搜两个域，但能不能把这两个域合并在一下，就搜一个域呢！</strong></p><h3 id="_5-5-1-示例" tabindex="-1"><a class="header-anchor" href="#_5-5-1-示例"><span>5.5.1 示例</span></a></h3><p>比如，现在有一个需求，想要输入关键字搜索标题（title）和内容（content）。为了解决这样的需求，首先应定义如下几个名字为title、content以及text的域。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050369.png" alt="image-20220417211216815" tabindex="0" loading="lazy"><figcaption>image-20220417211216815</figcaption></figure><p>然后，将title域和content域中的内容复制到text域中，如下图所示。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050399.png" alt="image-20220417211240887" tabindex="0" loading="lazy"><figcaption>image-20220417211240887</figcaption></figure><p>这样就定义好了一个复制字段。现在根据关键字只搜索text域中的内容就相当于搜索title域和content域了。</p><blockquote><p>回想一下，在之前咱们学习Lucene时，实现的查找文档的需求的案例代码。我们在搜索的时候，指定了在fileName域中去搜索&quot;lucene&quot;，而如果要搜索内容，那么我们就要指定到内容的域中去搜索，意思就是说，域不同，搜索的时候我们就要在指定的域中进行搜索。但是，我们在实际开发过程中面对的需求，往往是不知道在哪个域中进行搜索或者不指定域进行搜索。这个时候，我们要想搜索文件名字和文件内容中都包含有&quot;lucene&quot;的文档，只能进行遍历，这样显然不好，性能也会大大降低，而这个复制域的出现就帮我们解决了这个问题，因为复制域的作用就是将多个域中的内容复制到一个域中去，在搜索的时候，只须搜索复制域就OK了。</p></blockquote><h2 id="_5-6-fieldtype-字段类型" tabindex="-1"><a class="header-anchor" href="#_5-6-fieldtype-字段类型"><span>5.6 fieldType（字段类型）</span></a></h2><p>浏览managed-schema配置文件时，你或许会看到如下配置。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050422.png" alt="image-20220417211638547" tabindex="0" loading="lazy"><figcaption>image-20220417211638547</figcaption></figure><h4 id="_5-6-1-fieldtype节点属性" tabindex="-1"><a class="header-anchor" href="#_5-6-1-fieldtype节点属性"><span>5.6.1 fieldType节点属性</span></a></h4><p>可以看到以上fieldType节点包含有name、class、positionIncrementGap等一些属性。下面我会详细解释下这几个属性。</p><ul><li>name：字段类型fieldType的名称（必填）。该值用于字段定义中的type属性中。强烈建议名称仅包含字母、数字或下划线字符，不能以数字开头；</li><li>class：用于存储和索引此类型数据的实现类的类名（必填）。关于该属性的取值，你应注意如下两点： <ul><li>可以用&quot;solr&quot;作为前缀包含的类名称。Solr会自动找出哪些软件包可以搜索这个类实现类负责确保字段被正确处理。在managed-schema配置文件中，字符串solr是org.apache.solr.schema或者org.apache.solr.analysis的简写形式。所以，solr.TextField实际上是org.apache.solr.schema.TextField；</li><li>如果你使用的是第三方类，那么可能需要具有完全限定的类名称。比如，solr.TextField的完全限定类名是org.apache.solr.schema.TextField。</li></ul></li><li>positionIncrementGap：对于多值字段，指定多个值之间的距离，这可以防止虚假词组匹配。此值相当于Lucene的短语查询设置slop值，根据经验设置为100。</li></ul><p>在定义fieldType的时候，最重要的就是定义这个类型的数据在建立索引和进行查询的时候要使用的分析器analyzer，包括分词和过滤。仔细看以上名为text_general的fieldType，你将会看到：</p><h4 id="_5-6-2-fieldtype-子节点属性" tabindex="-1"><a class="header-anchor" href="#_5-6-2-fieldtype-子节点属性"><span>5.6.2 fieldType 子节点属性</span></a></h4><p>在定义fieldType的时候，最重要的就是定义这个类型的数据在建立索引和进行查询的时候要使用的分析器analyzer，包括分词和过滤。仔细看以上名为text_general的fieldType，你将会看到：</p><ul><li>在索引分析器中，使用的是solr.StandardTokenizerFactory标准分词器、solr.StopFilterFactory停用词过滤器以及solr.LowerCaseFilterFactory小写过滤器；</li><li>在搜索分析器中，使用的是solr.StandardTokenizerFactory标准分词器、solr.StopFilterFactory停用词过滤器以及solr.LowerCaseFilterFactory小写过滤器，除此之外，这里还用到了solr.SynonymGraphFilterFactory同义词过滤器。</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/yerenyuan_pku/article/details/105679097" target="_blank" rel="noopener noreferrer">Solr快速入门第四讲——Solr managed-schema配置文件详解</a></p>`,109)]))}const p=s(n,[["render",o],["__file","solr-b-scheme-config.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/SOLR/solr-b-scheme-config.html","title":"Solr-Schema配置","lang":"zh-CN","frontmatter":{"aliases":"Solr-Schema配置","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:50","description":"Solr-Schema配置 Solr 5.5以上版本中没有schema.xml这个配置文件，而是出现了一个叫managed-schema的配置文件 1. 简介 schema即模式，它是集合/内核中字段的定义，主要是让Solr知道集合/内核包含哪些字段、字段的数据类型以及该字段是否存储索引。 Solr中提供了两种方式来配置schema，但两者只能选其一 ...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/SOLR/solr-b-scheme-config.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Solr-Schema配置"}],["meta",{"property":"og:description","content":"Solr-Schema配置 Solr 5.5以上版本中没有schema.xml这个配置文件，而是出现了一个叫managed-schema的配置文件 1. 简介 schema即模式，它是集合/内核中字段的定义，主要是让Solr知道集合/内核包含哪些字段、字段的数据类型以及该字段是否存储索引。 Solr中提供了两种方式来配置schema，但两者只能选其一 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050948.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Solr-Schema配置\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050948.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050997.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050046.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050077.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050111.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050139.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050166.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050192.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050225.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050244.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050273.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050303.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050335.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050369.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050399.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131050422.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 配置方式","slug":"_2-配置方式","link":"#_2-配置方式","children":[{"level":3,"title":"2.1 默认的托管模式","slug":"_2-1-默认的托管模式","link":"#_2-1-默认的托管模式","children":[]},{"level":3,"title":"2.2 经典的schema.xml模式","slug":"_2-2-经典的schema-xml模式","link":"#_2-2-经典的schema-xml模式","children":[]}]},{"level":2,"title":"3. 两种模式的区别","slug":"_3-两种模式的区别","link":"#_3-两种模式的区别","children":[]},{"level":2,"title":"4. 两种模式之间的相互切换","slug":"_4-两种模式之间的相互切换","link":"#_4-两种模式之间的相互切换","children":[{"level":3,"title":"4.1 从经典的schema.xml模式切换到默认的托管模式","slug":"_4-1-从经典的schema-xml模式切换到默认的托管模式","link":"#_4-1-从经典的schema-xml模式切换到默认的托管模式","children":[]},{"level":3,"title":"4.2 从默认的托管模式切换到经典的schema.xml模式","slug":"_4-2-从默认的托管模式切换到经典的schema-xml模式","link":"#_4-2-从默认的托管模式切换到经典的schema-xml模式","children":[]}]},{"level":2,"title":"5. managed-schema配置文件详解","slug":"_5-managed-schema配置文件详解","link":"#_5-managed-schema配置文件详解","children":[{"level":3,"title":"5.1 managed-schema配置文件内容","slug":"_5-1-managed-schema配置文件内容","link":"#_5-1-managed-schema配置文件内容","children":[]},{"level":3,"title":"5.2 field（字段）","slug":"_5-2-field-字段","link":"#_5-2-field-字段","children":[]},{"level":3,"title":"5.3 dynamicField（动态字段）","slug":"_5-3-dynamicfield-动态字段","link":"#_5-3-dynamicfield-动态字段","children":[]}]},{"level":2,"title":"5.4 uniqueKey（唯一主键）","slug":"_5-4-uniquekey-唯一主键","link":"#_5-4-uniquekey-唯一主键","children":[]},{"level":2,"title":"5.5 copyField（复制字段）","slug":"_5-5-copyfield-复制字段","link":"#_5-5-copyfield-复制字段","children":[{"level":3,"title":"5.5.1 示例","slug":"_5-5-1-示例","link":"#_5-5-1-示例","children":[]}]},{"level":2,"title":"5.6 fieldType（字段类型）","slug":"_5-6-fieldtype-字段类型","link":"#_5-6-fieldtype-字段类型","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":13.44,"words":4032},"filePathRelative":"posts/Database/SOLR/solr-b-scheme-config.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>Solr 5.5以上版本中没有schema.xml这个配置文件，而是出现了一个叫managed-schema的配置文件</p>\\n</blockquote>\\n<h2>1. 简介</h2>\\n<p>schema即模式，它是集合/内核中<strong>字段的定义</strong>，主要是<strong>让Solr知道集合/内核包含哪些字段、字段的数据类型以及该字段是否存储索引</strong>。</p>\\n<p>Solr中提供了两种方式来配置schema，但两者只能选其一</p>\\n<ul>\\n<li>默认的托管模式</li>\\n<li>经典的schema.xml模式</li>\\n</ul>","autoDesc":true}');export{p as comp,c as data};