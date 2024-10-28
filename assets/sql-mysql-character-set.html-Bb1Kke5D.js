import{_ as s,c as e,a as n,o as l}from"./app-DQS7qcOs.js";const t={};function c(p,a){return l(),e("div",null,a[0]||(a[0]=[n(`<h1 id="mysql基础-字符集与排序规则" tabindex="-1"><a class="header-anchor" href="#mysql基础-字符集与排序规则"><span>MySQL基础-字符集与排序规则</span></a></h1><h2 id="_1-是什么" tabindex="-1"><a class="header-anchor" href="#_1-是什么"><span>1. 是什么</span></a></h2><ul><li><p>字符集<code>character set</code>）：<strong>用来定义存储字符串的方式</strong></p><p>定义了字符以及字符编码</p><p>字符集分为几个等级： server, database, table, 和 column 。</p></li><li><p>排序规则（<code>collations</code>）：<strong>用来定义比较字符串的方式</strong></p><p>定义了字符的比较规则</p></li></ul><p>MySQL采用类似继承的方式制定字符集默认值，每个数据库每张表都有自己的默认值，他们逐层继承。如：某个库中所有表的默认字符集将是该数据库所指定的字符集（这些表在没有指定字符集的情况下，才会采用默认字符集）</p><h3 id="_1-1-排序规则的命名规则" tabindex="-1"><a class="header-anchor" href="#_1-1-排序规则的命名规则"><span>1.1 排序规则的命名规则</span></a></h3><p><code>字符集名_</code>[<code>语言名_</code>]<code>类型</code> （语言名并非一定有的，后缀为 <code>_bin</code> 的就没有），并且可通过后缀来区分类型：</p><ul><li><code>_ci</code> ：大小写不敏感</li><li><code>_cs</code> ：大小写敏感</li><li><code>_bin</code> ：标识比较是基于字符编码的值，而与语言无关</li></ul><h2 id="_2-指定字符集" tabindex="-1"><a class="header-anchor" href="#_2-指定字符集"><span>2. 指定字符集</span></a></h2><p>我们在命令行创建一个新的数据库时，可以通过如下命令</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>CREATE DATABASE 数据库名;</span></span></code></pre></div><p>此时<strong>会使用默认</strong>的字符集及默认排序规则来创建数据库，而这个默认值可以在Mysql安装的根目录下的<code>my.ini</code> （或者 <code>my-defualt.ini</code> ）中进行配置，例如都设为 <code>utf8</code>：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[mysqld]</span></span>
<span class="line"><span># 服务端使用的字符集默认为UTF8</span></span>
<span class="line"><span>character-set-server=utf8</span></span>
<span class="line"><span>[mysql]</span></span>
<span class="line"><span># 设置mysql客户端默认字符集(可能会有问题，只需设置上面的)</span></span>
<span class="line"><span>default-character-set=utf8</span></span>
<span class="line"><span>[client]</span></span>
<span class="line"><span>default-character-set=utf8</span></span></code></pre></div><p>如果要在创建数据库时指定字符集和排序规则</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>CREATE DATABASE 数据库名 CHARACTER SET &#39;字符集，如：utf8&#39; COLLATE &#39;排序规则，如：utf8_bin&#39;;</span></span></code></pre></div><h2 id="_3-查询字符集和排序规则" tabindex="-1"><a class="header-anchor" href="#_3-查询字符集和排序规则"><span>3. 查询字符集和排序规则</span></a></h2><p>对于已创建的数据库结构，可以通过指令来查询其使用的字符集信息。</p><h3 id="_3-1-查询各级的字符集" tabindex="-1"><a class="header-anchor" href="#_3-1-查询各级的字符集"><span>3.1 查询各级的字符集</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>mysql&gt; SHOW VARIABLES LIKE &#39;%char%&#39;;                                                                                                              +--------------------------+----------------------------------+</span></span>
<span class="line"><span>| Variable_name            | Value                            |</span></span>
<span class="line"><span>+--------------------------+----------------------------------+</span></span>
<span class="line"><span>| character_set_client     | utf8                             |</span></span>
<span class="line"><span>| character_set_connection | utf8                             |</span></span>
<span class="line"><span>| character_set_database   | utf8                             |</span></span>
<span class="line"><span>| character_set_filesystem | binary                           |</span></span>
<span class="line"><span>| character_set_results    | utf8                             |</span></span>
<span class="line"><span>| character_set_server     | utf8                             |</span></span>
<span class="line"><span>| character_set_system     | utf8                             |</span></span>
<span class="line"><span>| character_sets_dir       | /usr/local/mysql/share/charsets/ |</span></span>
<span class="line"><span>+--------------------------+----------------------------------+</span></span>
<span class="line"><span>8 rows in set (0.00 sec)</span></span></code></pre></div><h3 id="_3-2-查询对应的排序规则" tabindex="-1"><a class="header-anchor" href="#_3-2-查询对应的排序规则"><span>3.2 查询对应的排序规则</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>mysql&gt; SHOW VARIABLES LIKE &#39;%collation_%&#39;;</span></span>
<span class="line"><span>+----------------------+-----------------+</span></span>
<span class="line"><span>| Variable_name        | Value           |</span></span>
<span class="line"><span>+----------------------+-----------------+</span></span>
<span class="line"><span>| collation_connection | utf8_general_ci |</span></span>
<span class="line"><span>| collation_database   | utf8_general_ci |</span></span>
<span class="line"><span>| collation_server     | utf8_general_ci |</span></span>
<span class="line"><span>+----------------------+-----------------+</span></span>
<span class="line"><span>3 rows in set (0.00 sec)</span></span></code></pre></div><h2 id="_4-修改字符集和排序规则" tabindex="-1"><a class="header-anchor" href="#_4-修改字符集和排序规则"><span>4. 修改字符集和排序规则</span></a></h2><h3 id="_4-1-未创建数据库" tabindex="-1"><a class="header-anchor" href="#_4-1-未创建数据库"><span>4.1 未创建数据库</span></a></h3><p>可以通过在创建命令中指定字符集的方式实现修改，也可以通过修改MySQL 安装根目录下的 <code>my.ini</code> （或者 <code>my-defualt.ini</code> ）中的配置实现修改。</p><h3 id="_4-2-已创建数据库无数据" tabindex="-1"><a class="header-anchor" href="#_4-2-已创建数据库无数据"><span>4.2 已创建数据库无数据</span></a></h3><p>可以使用如下指令进行修改：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>ALTER DATABASE 数据库名 CHARACTER SET &#39;字符集，如：utf8&#39; COLLATE &#39;排序规则，如：utf8_bin&#39;;</span></span></code></pre></div><h3 id="_4-3-已创建且有数据的数据库" tabindex="-1"><a class="header-anchor" href="#_4-3-已创建且有数据的数据库"><span>4.3 已创建且有数据的数据库</span></a></h3><p>直接修改的话只会对新创建的表或者记录有效，已存入的数据不会被修改。假如需要修改所有数据，需要将原表导出，创建新表再将旧表数据迁移过来。</p>`,28)]))}const i=s(t,[["render",c],["__file","sql-mysql-character-set.html.vue"]]),o=JSON.parse('{"path":"/posts/Database/MySQL/sql-mysql-character-set.html","title":"MySQL基础-字符集与排序规则","lang":"zh-CN","frontmatter":{"aliases":"MySQL基础-字符集与排序规则","tags":null,"cssclass":null,"source":null,"order":920,"category":["MySql","数据库"],"created":"2024-02-22 10:49","updated":"2024-03-13 09:44","description":"MySQL基础-字符集与排序规则 1. 是什么 字符集character set）：用来定义存储字符串的方式 定义了字符以及字符编码 字符集分为几个等级： server, database, table, 和 column 。 排序规则（collations）：用来定义比较字符串的方式 定义了字符的比较规则 MySQL采用类似继承的方式制定字符集默认值...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/MySQL/sql-mysql-character-set.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"MySQL基础-字符集与排序规则"}],["meta",{"property":"og:description","content":"MySQL基础-字符集与排序规则 1. 是什么 字符集character set）：用来定义存储字符串的方式 定义了字符以及字符编码 字符集分为几个等级： server, database, table, 和 column 。 排序规则（collations）：用来定义比较字符串的方式 定义了字符的比较规则 MySQL采用类似继承的方式制定字符集默认值..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL基础-字符集与排序规则\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 是什么","slug":"_1-是什么","link":"#_1-是什么","children":[{"level":3,"title":"1.1 排序规则的命名规则","slug":"_1-1-排序规则的命名规则","link":"#_1-1-排序规则的命名规则","children":[]}]},{"level":2,"title":"2. 指定字符集","slug":"_2-指定字符集","link":"#_2-指定字符集","children":[]},{"level":2,"title":"3. 查询字符集和排序规则","slug":"_3-查询字符集和排序规则","link":"#_3-查询字符集和排序规则","children":[{"level":3,"title":"3.1 查询各级的字符集","slug":"_3-1-查询各级的字符集","link":"#_3-1-查询各级的字符集","children":[]},{"level":3,"title":"3.2 查询对应的排序规则","slug":"_3-2-查询对应的排序规则","link":"#_3-2-查询对应的排序规则","children":[]}]},{"level":2,"title":"4. 修改字符集和排序规则","slug":"_4-修改字符集和排序规则","link":"#_4-修改字符集和排序规则","children":[{"level":3,"title":"4.1 未创建数据库","slug":"_4-1-未创建数据库","link":"#_4-1-未创建数据库","children":[]},{"level":3,"title":"4.2 已创建数据库无数据","slug":"_4-2-已创建数据库无数据","link":"#_4-2-已创建数据库无数据","children":[]},{"level":3,"title":"4.3 已创建且有数据的数据库","slug":"_4-3-已创建且有数据的数据库","link":"#_4-3-已创建且有数据的数据库","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.56,"words":769},"filePathRelative":"posts/Database/MySQL/sql-mysql-character-set.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 是什么</h2>\\n<ul>\\n<li>\\n<p>字符集<code>character set</code>）：<strong>用来定义存储字符串的方式</strong></p>\\n<p>定义了字符以及字符编码</p>\\n<p>字符集分为几个等级： server, database, table, 和 column 。</p>\\n</li>\\n<li>\\n<p>排序规则（<code>collations</code>）：<strong>用来定义比较字符串的方式</strong></p>\\n<p>定义了字符的比较规则</p>\\n</li>\\n</ul>\\n<p>MySQL采用类似继承的方式制定字符集默认值，每个数据库每张表都有自己的默认值，他们逐层继承。如：某个库中所有表的默认字符集将是该数据库所指定的字符集（这些表在没有指定字符集的情况下，才会采用默认字符集）</p>","autoDesc":true}');export{i as comp,o as data};
