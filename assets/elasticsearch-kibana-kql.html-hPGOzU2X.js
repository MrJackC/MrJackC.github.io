import{_ as s,c as n,a as e,o as p}from"./app-DEK5G3U7.js";const i={};function t(l,a){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="elk日志-kibana中的kql语法" tabindex="-1"><a class="header-anchor" href="#elk日志-kibana中的kql语法"><span>ELK日志 - Kibana中的KQL语法</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>KQL：（Kibana Query Language ）查询语法是Kibana为了简化ES查询设计的一套简单查询语法，Kibana支持索引字段和语法补全，可以非常方便的查询数据。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121424648.png" alt="image-20230506144617336" tabindex="0" loading="lazy"><figcaption>image-20230506144617336</figcaption></figure><p>如果关闭 KQL，Kibana 将使用 Lucene。</p><p>在Kibana中使用Filters对数据进行过滤使用KQL语法来完成。</p><h2 id="_2-查询语法" tabindex="-1"><a class="header-anchor" href="#_2-查询语法"><span>2. 查询语法</span></a></h2><h3 id="_2-1-等值匹配-equals" tabindex="-1"><a class="header-anchor" href="#_2-1-等值匹配-equals"><span>2.1 等值匹配（equals）</span></a></h3><p>用于查询字段值</p><p><strong>语法</strong></p><blockquote><p>字段名:匹配值</p></blockquote><p><strong>示例一</strong></p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>response:200</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 匹配到的结果</span></span>
<span class="line"><span>200</span></span>
<span class="line"><span>hello world 200</span></span>
<span class="line"><span>hello 200 world</span></span></code></pre></div><p>查询出response字段中<strong>包含</strong>200的文档对象，注意是包含，包含的是200这一个词。</p><p>需要注意的是<strong>1200</strong>或者<strong>2001</strong>，是不能被查出来的。</p><p><strong>示例二</strong></p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>message:&quot;hello world yes&quot;</span></span></code></pre></div><p>上面这个表达式，是针对message字段进行搜索，在搜索的时候不会区分大小写。<br> 需要注意，上面的&quot;hello world yes&quot;使用了引号，这样的话，这3个单词会被作为一个词进行查询，不会再进行分词。</p><p><strong>示例三</strong></p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>message:hello world</span></span>
<span class="line"><span>#匹配到的结果</span></span>
<span class="line"><span>hello</span></span>
<span class="line"><span>world</span></span>
<span class="line"><span>Hello</span></span>
<span class="line"><span>World</span></span>
<span class="line"><span>hello world</span></span>
<span class="line"><span>Hello world</span></span>
<span class="line"><span>hello yes World</span></span>
<span class="line"><span>yes world</span></span>
<span class="line"><span>world yes</span></span></code></pre></div><p>上面这个表达式，针对message字段进行搜索，搜索message中<strong>包含</strong>hello，或者<strong>包含</strong>world，或者两者都<strong>包含</strong>的情况；</p><p><strong>不区分大小写，也不会保证顺序</strong></p><h3 id="_2-2-关系运算符" tabindex="-1"><a class="header-anchor" href="#_2-2-关系运算符"><span>2.2 关系运算符</span></a></h3><p>关系运算符只能用在数值和时间类型的字段</p><table><thead><tr><th>符号</th><th>说明</th></tr></thead><tbody><tr><td>&lt;=</td><td>小于等于</td></tr><tr><td>&gt;=</td><td>大于等于</td></tr><tr><td>&lt;</td><td>小于</td></tr><tr><td>大于</td><td></td></tr></tbody></table><p><strong>示例一</strong></p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>account_number &gt;=100</span></span></code></pre></div><p>上面这个表达式，针对account_number字段进行搜索，搜索account_number的值大于等于100的数据。</p><p><strong>示例二</strong></p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># 搜索日期</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 搜索具体时间</span></span>
<span class="line"><span>@timestamp &lt; &quot;2021-01-02T21:55:59&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 搜索年-月份</span></span>
<span class="line"><span>@timestamp &lt; &quot;2021-01&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#搜索年</span></span>
<span class="line"><span>@timestamp &lt; &quot;2021&quot;</span></span></code></pre></div><h3 id="_2-3-逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_2-3-逻辑运算符"><span>2.3 逻辑运算符</span></a></h3><p><strong>支持逻辑运算符如下:</strong></p><ul><li>and：与</li><li>or：或</li><li>not：非</li></ul><p><strong>示例一</strong></p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># and 的用法</span></span>
<span class="line"><span>name:jane and addr:beijing</span></span></code></pre></div><p>上面这个条件，会查询name字段包含jane，且addr字段包含beijing的记录。</p><p>注意：查询结果不区分大小写</p><p><strong>示例二</strong></p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># or 的用法</span></span>
<span class="line"><span>name:jane or addr:beijing</span></span></code></pre></div><p>上面这个查询条件，会查询name字段包含jane，或者addr字段包含beijing的记录，或者两者都匹配；</p><p><strong>示例三</strong></p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># not 的用法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查询出response字段中不包含200的记录</span></span>
<span class="line"><span>not response:200</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查询response包含200，并且整条记录不包含yes的数据记录 </span></span>
<span class="line"><span>response:200 and not yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查询response包含200，且response不包含yes的记录</span></span>
<span class="line"><span>response:(200 and not yes)</span></span></code></pre></div><p><strong>示例四</strong></p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>name:jane and addr:beijing or job:teacher</span></span></code></pre></div><p>上面的查询条件，查询name包含jane，且addr包含beijing的记录，或者job包含teacher的记录。</p><p><em>注意：KQL中，and的优先级高于or</em></p><p>对于上方结果可以使用小括号来更好的理解</p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>(name:jane and addr:beijing) or job:teacher</span></span></code></pre></div><p><strong>示例五</strong></p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>response:(200 or 404)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 与上方表达式等价</span></span>
<span class="line"><span>response:200 or response:400</span></span></code></pre></div><p>上面这个表达式，会查询response包含200，或者response包含404，或者包含200和404的记录（不保证顺序、不区分大小写）；</p><p>同时可以使用and来表示“且”的关系。</p><h3 id="_2-4-通配符查询" tabindex="-1"><a class="header-anchor" href="#_2-4-通配符查询"><span>2.4 通配符查询</span></a></h3><p>匹配包含指定字段的文档。</p><p><strong>语法</strong></p><blockquote><p>字段名:*</p><p>字段名*:属性值</p><p>字段名:属性值*</p></blockquote><p>&quot;*&quot;代表通配符，可以添加到字段名中，也可以添加到属性值当中，代表匹配任意字符。</p><p><strong>示例一</strong></p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>response:*</span></span></code></pre></div><p>上面这个查询条件，会返回所有包含response字段的文档对象。</p><p><strong>示例二</strong></p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>machine*:hello</span></span></code></pre></div><p>查询字段名以machine开头，字段值为hello的数据。</p><p><strong>示例三</strong></p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># 查询字段名为machine，字段值以hello开头的数据</span></span>
<span class="line"><span>machine:hello*</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查询字段名为FlightNum，字段值开头为T，结尾为V的数据</span></span>
<span class="line"><span>FlightNum:T*V</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121424713.png" alt="image-20230506145238415" tabindex="0" loading="lazy"><figcaption>image-20230506145238415</figcaption></figure><h3 id="_2-5-字段嵌套查询" tabindex="-1"><a class="header-anchor" href="#_2-5-字段嵌套查询"><span>2.5 字段嵌套查询</span></a></h3><p>首先准备一个多层的数据，比如下面的这几条数据。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  &quot;level1&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      &quot;level2&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          &quot;prop1&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;foo&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          &quot;prop2&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;bar&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          &quot;prop1&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;baz&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          &quot;prop2&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;qux&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      ]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如想筛选 level1.level2.prop1 是 <code>foo</code> 或者是 <code>baz</code>的，可以这样写：</p><div class="language-json" data-ext="json" data-title="json"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">level</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.level</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> { </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">prop1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;foo&quot;</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> or</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> prop</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;baz&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> }</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://juejin.cn/post/7045085869979467789" target="_blank" rel="noopener noreferrer">详解Kibana中的KQL语法</a></p>`,73)]))}const r=s(i,[["render",t],["__file","elasticsearch-kibana-kql.html.vue"]]),d=JSON.parse('{"path":"/posts/Database/ES/elasticsearch-kibana-kql.html","title":"ELK日志 - Kibana中的KQL语法","lang":"zh-CN","frontmatter":{"aliases":"ELK日志 - Kibana中的KQL语法","tags":null,"cssclass":null,"source":null,"order":1110,"category":["es"],"created":"2024-02-22 10:49","updated":"2024-03-12 14:25","description":"ELK日志 - Kibana中的KQL语法 1. 简介 KQL：（Kibana Query Language ）查询语法是Kibana为了简化ES查询设计的一套简单查询语法，Kibana支持索引字段和语法补全，可以非常方便的查询数据。 image-20230506144617336image-20230506144617336 如果关闭 KQL，Kib...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/ES/elasticsearch-kibana-kql.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"ELK日志 - Kibana中的KQL语法"}],["meta",{"property":"og:description","content":"ELK日志 - Kibana中的KQL语法 1. 简介 KQL：（Kibana Query Language ）查询语法是Kibana为了简化ES查询设计的一套简单查询语法，Kibana支持索引字段和语法补全，可以非常方便的查询数据。 image-20230506144617336image-20230506144617336 如果关闭 KQL，Kib..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121424648.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-25T09:16:19.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-25T09:16:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ELK日志 - Kibana中的KQL语法\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121424648.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121424713.png\\"],\\"dateModified\\":\\"2024-10-25T09:16:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 查询语法","slug":"_2-查询语法","link":"#_2-查询语法","children":[{"level":3,"title":"2.1 等值匹配（equals）","slug":"_2-1-等值匹配-equals","link":"#_2-1-等值匹配-equals","children":[]},{"level":3,"title":"2.2 关系运算符","slug":"_2-2-关系运算符","link":"#_2-2-关系运算符","children":[]},{"level":3,"title":"2.3 逻辑运算符","slug":"_2-3-逻辑运算符","link":"#_2-3-逻辑运算符","children":[]},{"level":3,"title":"2.4 通配符查询","slug":"_2-4-通配符查询","link":"#_2-4-通配符查询","children":[]},{"level":3,"title":"2.5 字段嵌套查询","slug":"_2-5-字段嵌套查询","link":"#_2-5-字段嵌套查询","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729847779000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":2}]},"readingTime":{"minutes":3.61,"words":1082},"filePathRelative":"posts/Database/ES/elasticsearch-kibana-kql.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>KQL：（Kibana Query Language ）查询语法是Kibana为了简化ES查询设计的一套简单查询语法，Kibana支持索引字段和语法补全，可以非常方便的查询数据。</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121424648.png\\" alt=\\"image-20230506144617336\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20230506144617336</figcaption></figure>","autoDesc":true}');export{r as comp,d as data};
