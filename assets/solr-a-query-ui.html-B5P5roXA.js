import{_ as a,c as n,a as r,b as t,d as e,o as l}from"./app-JRvFIbSa.js";const i={};function o(s,d){return l(),n("div",null,d[0]||(d[0]=[r('<h1 id="solr查询语法与参数" tabindex="-1"><a class="header-anchor" href="#solr查询语法与参数"><span>Solr查询语法与参数</span></a></h1><h2 id="_1-solr-查询界面" tabindex="-1"><a class="header-anchor" href="#_1-solr-查询界面"><span>1. Solr 查询界面</span></a></h2><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048641.png" alt="image-20210304140431497" tabindex="0" loading="lazy"><figcaption>image-20210304140431497</figcaption></figure><h2 id="_2-基本查询" tabindex="-1"><a class="header-anchor" href="#_2-基本查询"><span>2. 基本查询</span></a></h2><table><thead><tr><th>名称</th><th>作用</th><th>示例</th></tr></thead><tbody><tr><td>q</td><td>查询的关键字（最为重要）</td><td><code>q=id:1</code>,默认为<code>q=*:*</code></td></tr><tr><td>fl</td><td>指定返回哪些字段，用逗号或空格分隔，注意：字段区分大小写。<br><strong>如果想知道具体的评分需要手动加上score</strong></td><td>fl=id,title,sort</td></tr><tr><td>start</td><td>返回结果的第几条记录开始，一般分页用，默认0开始</td><td></td></tr><tr><td>rows</td><td>指定返回结果最多有多少条记录，默认值为10，配合start实现分页</td><td></td></tr><tr><td>sort</td><td>排序方式，例如id desc 表示按照id降序，多个字段： score desc，price asc</td><td></td></tr><tr><td>wt</td><td>（writer type）指定输出格式，有xml，json等</td><td></td></tr><tr><td>fq（filter query）</td><td>过滤查询，提供一个可选的筛选器查询。返回在q查询符合结果中同时符合的fq条件的查询结果</td><td>q=id:1&amp;fq=sort:[1 TO 5]，找关键字id为1 的，并且sort是1到5之间的。</td></tr><tr><td>df</td><td>默认的查询字段，一般默认指定（不太知道作用）</td><td></td></tr><tr><td>qt（query type）</td><td>指定哪个类型来处理查询请求，一般不用指定，默认是standard。（存疑）</td><td></td></tr><tr><td>indent</td><td>返回的结果是否缩进，默认关闭。 用indent=true|on 开启，一般调试json,php,phps,ruby输出才有必要用这个参数。</td><td></td></tr><tr><td>version</td><td>查询语法的版本，建议不使用它，由服务器指定默认值</td><td></td></tr></tbody></table><h2 id="_3-solr-的检索运算符" tabindex="-1"><a class="header-anchor" href="#_3-solr-的检索运算符"><span>3. Solr 的检索运算符</span></a></h2>',6),t("table",{201507:"",TO:"",201510:""},[t("thead",null,[t("tr",null,[t("th",null,"运算符"),t("th",null,"作用")])]),t("tbody",null,[t("tr",null,[t("td",null,"："),t("td",null,[e("指定字段查指定值，如返回所有值"),t("code",null,"*：*")])]),t("tr",null,[t("td",null,"?"),t("td",null,"表示单个任意字符的通配")]),t("tr",null,[t("td",null,"*"),t("td",null,"表示多个任意字符的通配（不能再搜索项开始使用* 或者？符号）")]),t("tr",null,[t("td",null,"~"),t("td",null,[e("表示模糊检索，如检索拼写类似于”roam”的项这样写：roam"),t("sub",null,"将找到形如foam和roams的单词；roam"),e("0.8，检索返回相似度在0.8以上的记录。")])]),t("tr",null,[t("td",null,"AND、||、OR、&&"),t("td",null,"布尔操作符")]),t("tr",null,[t("td",null,"NOT、!、-"),t("td",null,"排除操作符不能单独与项使用构成查询")]),t("tr",null,[t("td",null,"+"),t("td",null,"存在操作符，要求符号“+”后的项必须在文档相应的域中存在")]),t("tr",null,[t("td",null,"（）"),t("td",null,"用于构成子查询")]),t("tr",null,[t("td",null,"[]"),t("td",null,"包含范围检索、如检索某时间段记录，包含头尾，date:[201507 TO 201510]")]),t("tr",null,[t("td",null,"{}"),t("td",null,"不包含范围检索，如检索某时间段记录，不包含头尾date:")])])],-1),r('<h2 id="_4-高亮" tabindex="-1"><a class="header-anchor" href="#_4-高亮"><span>4. 高亮</span></a></h2><table><thead><tr><th>字段</th><th>含义</th></tr></thead><tbody><tr><td>hl</td><td>是否高亮，hl=true,表示采用高亮</td></tr><tr><td>hl.fl</td><td>设定高亮显示的字段，用空格或逗号隔开的字段列表。要启用某个字段的highlight功能，就得保证该字段在schema中是stored。如果该参数未被给出，那么就会高亮默认字段 standard handler会用df参数，dismax字段用qf参数。你可以使用星号去方便的高亮所有字段。如果你使用了通配符，那么要考虑启用hl.requiredFieldMatch选项。</td></tr><tr><td>hl.requireFieldMatch</td><td>如果置为true，除非用hl.fl 指定了该字段，查询结果才会被高亮。他的默认值是false</td></tr><tr><td>hl.usePhraseHighlighter</td><td>如果一个查询中含有短语（引号框起来的）那么会保证一定要完全匹配短语的才会被高亮。</td></tr><tr><td>hl.highlightMultiTerm</td><td>如果使用通配符和模糊搜索，那么会确保与通配符匹配的term会高亮。默认为false，同时hl.usePhraseHighlighter要为true。</td></tr><tr><td>hl.fragsize</td><td>返回的最大字符数。默认是100.如果为0，那么该字段不会被fragmented且整个字段的值会被返回。</td></tr></tbody></table><h2 id="_5-分组" tabindex="-1"><a class="header-anchor" href="#_5-分组"><span>5. 分组</span></a></h2><p><a href="http://wiki.apache.org/solr/SimpleFacetParameters#Facet_Fields_and_Facet_Queries" target="_blank" rel="noopener noreferrer">facet的官方wiki</a></p><p>Facet是Solr的核心搜索功能，主要是导航(Guided Navigation)、参数化查询(Paramatic Search)。Facet的主要好处是在搜索的同时，可以按照Facet条件进行分组统计，给出导航信息，改善搜索体验。</p><p>Facet主要分为：Field Facet 和 Date Facet 两大类</p><h3 id="_5-1-field-facet" tabindex="-1"><a class="header-anchor" href="#_5-1-field-facet"><span>5.1 field Facet</span></a></h3><table><thead><tr><th>字段</th><th>含义</th></tr></thead><tbody><tr><td>facet</td><td>facet参数字段必须被索引，facet=on 或 facet=true</td></tr><tr><td>facet.field</td><td>分组的字段</td></tr><tr><td>facet.prefix</td><td>表示Facet字段前缀</td></tr><tr><td>facet.limit</td><td>Facet字段返回条数</td></tr><tr><td>facet.offict</td><td>开始条数,偏移量,它与facet.limit配合使用可以达到分页的效果</td></tr><tr><td>facet.mincount</td><td>Facet字段最小count,默认为0</td></tr><tr><td>facet.missing</td><td>如果为on或true,那么将统计那些Facet字段值为null的记录</td></tr><tr><td>facet.sort</td><td>表示 Facet 字段值以哪种顺序返回 .格式为 true(count)</td></tr></tbody></table><h3 id="_5-2-date-facet" tabindex="-1"><a class="header-anchor" href="#_5-2-date-facet"><span>5.2 Date Facet</span></a></h3><p>对日期类型的字段进行 Facet. Solr 为日期字段提供了更为方便的查询统计方式 .注意 , Date Facet的字段类型必须是 DateField( 或其子类型 ). 需要注意的是 , 使用 Date Facet 时 , 字段名 , 起始时间 , 结束时间 , 时间间隔这 4 个参数都必须提供 .</p><table><thead><tr><th>facet.date</th><th>该参数表示需要进行 Date Facet 的字段名 , 与 facet.field 一样 , 该参数可以被设置多次 , 表示对多个字段进行 Date Facet.</th></tr></thead><tbody><tr><td>facet.date.start</td><td>起始时间 , 时间的一般格式为 ” 2015-12-31T23:59:59Z”, 另外可以使用 ”NOW”,”YEAR”,”MONTH” 等等 ,</td></tr><tr><td>facet.date.end</td><td>结束时间</td></tr><tr><td>facet.date.gap</td><td>时间间隔,如果 start 为 2015-1-1,end 为 2016-1-1，gap 设置为 ”+1MONTH” 表示间隔1 个月 , 那么将会把这段时间划分为 12 个间隔段 .</td></tr><tr><td>facet.date.hardend</td><td>表示 gap 迭代到 end 时，还剩余的一部分时间段，是否继续去下一个间隔. 取值可以为 true</td></tr></tbody></table><p>注意：Facet的字段必须被索引，无需分词，无需存储。无需分词是因为该字段的值代表了一个整体概念，无需存储是因为一般而言用户所关心的并不是该字段的具体值，而是作为对查询结果进行分组的一种手段，给出相关的分组信息，从而改善搜索体验。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.cnblogs.com/shaosks/p/8042867.html" target="_blank" rel="noopener noreferrer">Solr 查询语法/参数</a></p>',14)]))}const h=a(i,[["render",o],["__file","solr-a-query-ui.html.vue"]]),p=JSON.parse('{"path":"/posts/Database/SOLR/solr-a-query-ui.html","title":"Solr查询语法与参数","lang":"zh-CN","frontmatter":{"aliases":"Solr查询语法与参数","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:48","description":"Solr查询语法与参数 1. Solr 查询界面 image-20210304140431497image-20210304140431497 2. 基本查询 3. Solr 的检索运算符 4. 高亮 5. 分组 facet的官方wiki Facet是Solr的核心搜索功能，主要是导航(Guided Navigation)、参数化查询(Paramati...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/SOLR/solr-a-query-ui.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Solr查询语法与参数"}],["meta",{"property":"og:description","content":"Solr查询语法与参数 1. Solr 查询界面 image-20210304140431497image-20210304140431497 2. 基本查询 3. Solr 的检索运算符 4. 高亮 5. 分组 facet的官方wiki Facet是Solr的核心搜索功能，主要是导航(Guided Navigation)、参数化查询(Paramati..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048641.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Solr查询语法与参数\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048641.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. Solr 查询界面","slug":"_1-solr-查询界面","link":"#_1-solr-查询界面","children":[]},{"level":2,"title":"2. 基本查询","slug":"_2-基本查询","link":"#_2-基本查询","children":[]},{"level":2,"title":"3. Solr 的检索运算符","slug":"_3-solr-的检索运算符","link":"#_3-solr-的检索运算符","children":[]},{"level":2,"title":"4. 高亮","slug":"_4-高亮","link":"#_4-高亮","children":[]},{"level":2,"title":"5. 分组","slug":"_5-分组","link":"#_5-分组","children":[{"level":3,"title":"5.1 field Facet","slug":"_5-1-field-facet","link":"#_5-1-field-facet","children":[]},{"level":3,"title":"5.2 Date Facet","slug":"_5-2-date-facet","link":"#_5-2-date-facet","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.85,"words":1456},"filePathRelative":"posts/Database/SOLR/solr-a-query-ui.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. Solr 查询界面</h2>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131048641.png\\" alt=\\"image-20210304140431497\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20210304140431497</figcaption></figure>\\n<h2>2. 基本查询</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>名称</th>\\n<th>作用</th>\\n<th>示例</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>q</td>\\n<td>查询的关键字（最为重要）</td>\\n<td><code>q=id:1</code>,默认为<code>q=*:*</code></td>\\n</tr>\\n<tr>\\n<td>fl</td>\\n<td>指定返回哪些字段，用逗号或空格分隔，注意：字段区分大小写。<br><strong>如果想知道具体的评分需要手动加上score</strong></td>\\n<td>fl=id,title,sort</td>\\n</tr>\\n<tr>\\n<td>start</td>\\n<td>返回结果的第几条记录开始，一般分页用，默认0开始</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>rows</td>\\n<td>指定返回结果最多有多少条记录，默认值为10，配合start实现分页</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>sort</td>\\n<td>排序方式，例如id desc 表示按照id降序，多个字段： score desc，price asc</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>wt</td>\\n<td>（writer type）指定输出格式，有xml，json等</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>fq（filter query）</td>\\n<td>过滤查询，提供一个可选的筛选器查询。返回在q查询符合结果中同时符合的fq条件的查询结果</td>\\n<td>q=id:1&amp;fq=sort:[1 TO 5]，找关键字id为1 的，并且sort是1到5之间的。</td>\\n</tr>\\n<tr>\\n<td>df</td>\\n<td>默认的查询字段，一般默认指定（不太知道作用）</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>qt（query type）</td>\\n<td>指定哪个类型来处理查询请求，一般不用指定，默认是standard。（存疑）</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>indent</td>\\n<td>返回的结果是否缩进，默认关闭。 用indent=true|on 开启，一般调试json,php,phps,ruby输出才有必要用这个参数。</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>version</td>\\n<td>查询语法的版本，建议不使用它，由服务器指定默认值</td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{h as comp,p as data};