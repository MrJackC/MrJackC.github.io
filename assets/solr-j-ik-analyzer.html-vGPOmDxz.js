import{_ as s,c as e,a as n,o as l}from"./app-DEK5G3U7.js";const o={};function i(r,a){return l(),e("div",null,a[0]||(a[0]=[n(`<h1 id="solr配置中文分词器ik-analyzer" tabindex="-1"><a class="header-anchor" href="#solr配置中文分词器ik-analyzer"><span>Solr配置中文分词器ik-analyzer</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><h2 id="_2-集成步骤" tabindex="-1"><a class="header-anchor" href="#_2-集成步骤"><span>2. 集成步骤</span></a></h2><p>下载ik分词器</p><p><a href="https://github.com/magese/ik-analyzer-solr" target="_blank" rel="noopener noreferrer">官方文档</a></p><p><a href="https://search.maven.org/search?q=g:com.github.magese%20AND%20a:ik-analyzer&amp;core=gav" target="_blank" rel="noopener noreferrer">下载地址</a></p><ol><li><p>将jar包放入Solr服务的<code>Jetty</code>或<code>Tomcat</code>的<code>webapp/WEB-INF/lib/</code>目录下；</p><blockquote><p>默认位置：E:\\solr-7.7\\solr-7.7.3\\server\\solr-webapp\\webapp\\WEB-INF\\lib</p></blockquote></li><li><p>将<code>resources</code>目录下的5个配置文件放入solr服务的<code>Jetty</code>或<code>Tomcat</code>的<code>webapp/WEB-INF/classes/</code>目录下；</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>① IKAnalyzer.cfg.xml</span></span>
<span class="line"><span>② ext.dic</span></span>
<span class="line"><span>③ stopword.dic</span></span>
<span class="line"><span>④ ik.conf</span></span>
<span class="line"><span>⑤ dynamicdic.txt</span></span></code></pre></div></li><li><p>配置Solr的<code>managed-schema</code>，添加<code>ik分词器</code>，示例如下；</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- ik分词器 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">fieldType</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;text_ik&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;solr.TextField&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">analyzer</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;index&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">tokenizer</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;org.wltea.analyzer.lucene.IKTokenizerFactory&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> useSmart</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;false&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> conf</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;ik.conf&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">filter</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;solr.LowerCaseFilterFactory&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">analyzer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">analyzer</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;query&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">tokenizer</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;org.wltea.analyzer.lucene.IKTokenizerFactory&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> useSmart</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> conf</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;ik.conf&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">filter</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;solr.LowerCaseFilterFactory&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">analyzer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">fieldType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div></li><li><p>配置完成，重启服务</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">solr</span><span style="color:#98C379;--shiki-dark:#98C379;"> stop</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -all</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">solr</span><span style="color:#98C379;--shiki-dark:#98C379;"> start</span></span></code></pre></div></li><li><p>启动Solr服务测试分词</p><p>选择core-&gt; Analysis -&gt; 选择分词器 text_ik 输入 &quot;黑夜给了我黑色的眼睛&quot;-&gt;点击&quot;Analyse Values&quot;按钮</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131052892.png" alt="image-20210304172543651" tabindex="0" loading="lazy"><figcaption>image-20210304172543651</figcaption></figure></li></ol><h2 id="_3-ik分词器配置" tabindex="-1"><a class="header-anchor" href="#_3-ik分词器配置"><span>3. ik分词器配置</span></a></h2><ol><li><p><code>ik.conf</code>文件说明：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>files=dynamicdic.txt</span></span>
<span class="line"><span>lastupdate=0</span></span></code></pre></div><ol><li><code>files</code>为动态词典列表，可以设置多个词典表，用逗号进行分隔，默认动态词典表为<code>dynamicdic.txt</code>；</li><li><code>lastupdate</code>默认值为<code>0</code>，每次对动态词典表修改后请+1，不然不会将词典表中新的词语添加到内存中。</li></ol></li><li><p><code>dynamicdic.txt</code> 为动态词典</p><p>在此文件配置的词语不需重启服务即可加载进内存中。 以<code>#</code>开头的词语视为注释，将不会加载到内存中。</p></li></ol><h2 id="_4-设置同义词或停止词" tabindex="-1"><a class="header-anchor" href="#_4-设置同义词或停止词"><span>4. 设置同义词或停止词</span></a></h2><h3 id="_4-1-同义词示例" tabindex="-1"><a class="header-anchor" href="#_4-1-同义词示例"><span>4.1 同义词示例</span></a></h3><p>例如在利用word分词后，查询“下跌”，得到结果如下：</p><h4 id="_4-1-1-没有同义词的情况" tabindex="-1"><a class="header-anchor" href="#_4-1-1-没有同义词的情况"><span>4.1.1 没有同义词的情况</span></a></h4><p>查询“下跌”，找到一片文档</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131052938.png" alt="image-20220408163051893" tabindex="0" loading="lazy"><figcaption>image-20220408163051893</figcaption></figure><p>查询“下降”是没有结果的：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131052982.png" alt="image-20220408163108228" tabindex="0" loading="lazy"><figcaption>image-20220408163108228</figcaption></figure><h4 id="_4-1-2-同义词配置" tabindex="-1"><a class="header-anchor" href="#_4-1-2-同义词配置"><span>4.1.2 同义词配置</span></a></h4><p>在synonyms.txt配置：<br><code>下降=&gt;下跌</code><br> 或者设置为：<br><code>下降,下跌</code><br> 前者表示为将下降转换为下跌，后者表示这些词可以相互替换。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># Some synonym groups specific to this example</span></span>
<span class="line"><span>GB,gib,gigabyte,gigabytes</span></span>
<span class="line"><span>MB,mib,megabyte,megabytes</span></span>
<span class="line"><span>Television, Televisions, TV, TVs</span></span>
<span class="line"><span># 用逗号和=&gt;都可以</span></span>
<span class="line"><span># 下降,下跌</span></span>
<span class="line"><span>下降=&gt;都可以下跌</span></span></code></pre></div><p>另外，还要记得在相应的fieldType加上对同义词的支持：</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">fieldType</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;text_general&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;solr.TextField&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> positionIncrementGap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;100&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> multiValued</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">analyzer</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;index&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">tokenizer</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;org.apdplat.word.solr.ChineseWordTokenizerFactory&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;  </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">analyzer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">analyzer</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;query&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">tokenizer</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;org.apdplat.word.solr.ChineseWordTokenizerFactory&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">       &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">filter</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;solr.SynonymFilterFactory&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> expand</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> ignoreCase</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> synonyms</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;synonyms.txt&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">analyzer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h4 id="_4-1-3-重启后生效" tabindex="-1"><a class="header-anchor" href="#_4-1-3-重启后生效"><span>4.1.3 重启后生效</span></a></h4><p>重启solr之后再查询“下降”：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131052011.png" alt="image-20220408163420536" tabindex="0" loading="lazy"><figcaption>image-20220408163420536</figcaption></figure><p>配置同义词转换后，查询“下降”则会返回跟“下跌”一样的结果</p><h2 id="_5-遇到的问题" tabindex="-1"><a class="header-anchor" href="#_5-遇到的问题"><span>5. 遇到的问题</span></a></h2><h3 id="_5-1-ik搜索不要加" tabindex="-1"><a class="header-anchor" href="#_5-1-ik搜索不要加"><span>5.1 ik搜索不要加*</span></a></h3><p>如果手动设置加 * 内容 *，那么星号里面的内容将不会被分词</p><h2 id="_5-2-搜索结果问题" tabindex="-1"><a class="header-anchor" href="#_5-2-搜索结果问题"><span>5.2 搜索结果问题</span></a></h2><p>ik 分词，对于既有文字又有数字的搜索。他的拆词是不合适的</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131052040.png" alt="image-20220408205357892" tabindex="0" loading="lazy"><figcaption>image-20220408205357892</figcaption></figure>`,32)]))}const t=s(o,[["render",i],["__file","solr-j-ik-analyzer.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/SOLR/solr-j-ik-analyzer.html","title":"Solr配置中文分词器ik-analyzer","lang":"zh-CN","frontmatter":{"aliases":"Solr配置中文分词器ik-analyzer","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:52","description":"Solr配置中文分词器ik-analyzer 1. 背景 2. 集成步骤 下载ik分词器 官方文档 下载地址 将jar包放入Solr服务的Jetty或Tomcat的webapp/WEB-INF/lib/目录下； 默认位置：E:\\\\solr-7.7\\\\solr-7.7.3\\\\server\\\\solr-webapp\\\\webapp\\\\WEB-INF\\\\lib 将reso...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/SOLR/solr-j-ik-analyzer.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Solr配置中文分词器ik-analyzer"}],["meta",{"property":"og:description","content":"Solr配置中文分词器ik-analyzer 1. 背景 2. 集成步骤 下载ik分词器 官方文档 下载地址 将jar包放入Solr服务的Jetty或Tomcat的webapp/WEB-INF/lib/目录下； 默认位置：E:\\\\solr-7.7\\\\solr-7.7.3\\\\server\\\\solr-webapp\\\\webapp\\\\WEB-INF\\\\lib 将reso..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131052892.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Solr配置中文分词器ik-analyzer\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131052892.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131052938.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131052982.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131052011.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131052040.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 集成步骤","slug":"_2-集成步骤","link":"#_2-集成步骤","children":[]},{"level":2,"title":"3. ik分词器配置","slug":"_3-ik分词器配置","link":"#_3-ik分词器配置","children":[]},{"level":2,"title":"4. 设置同义词或停止词","slug":"_4-设置同义词或停止词","link":"#_4-设置同义词或停止词","children":[{"level":3,"title":"4.1 同义词示例","slug":"_4-1-同义词示例","link":"#_4-1-同义词示例","children":[]}]},{"level":2,"title":"5. 遇到的问题","slug":"_5-遇到的问题","link":"#_5-遇到的问题","children":[{"level":3,"title":"5.1 ik搜索不要加*","slug":"_5-1-ik搜索不要加","link":"#_5-1-ik搜索不要加","children":[]}]},{"level":2,"title":"5.2 搜索结果问题","slug":"_5-2-搜索结果问题","link":"#_5-2-搜索结果问题","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.43,"words":728},"filePathRelative":"posts/Database/SOLR/solr-j-ik-analyzer.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<h2>2. 集成步骤</h2>\\n<p>下载ik分词器</p>\\n<p><a href=\\"https://github.com/magese/ik-analyzer-solr\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方文档</a></p>\\n<p><a href=\\"https://search.maven.org/search?q=g:com.github.magese%20AND%20a:ik-analyzer&amp;core=gav\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">下载地址</a></p>","autoDesc":true}');export{t as comp,c as data};
