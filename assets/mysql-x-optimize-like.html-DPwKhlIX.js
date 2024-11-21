import{_ as a,c as s,a as t,o as i}from"./app-CZJgH_ea.js";const r={};function l(n,e){return i(),s("div",null,e[0]||(e[0]=[t('<h1 id="like模糊查询优化" tabindex="-1"><a class="header-anchor" href="#like模糊查询优化"><span>like模糊查询优化</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>在使用mysql进行模糊查询的时候，很自容的会用到 like 语句，通常情况下，在数量小的时候，不容易看出查询效率，<strong>但在数据量达到百万级，千万级的时候</strong>，查询的效率就很容易显现出来。这个时候查询的效率就显得很重要！</p><p>一般情况下like模糊查询的写法为（field已建立索引）</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT `column` FROM `table` WHERE `field` like `%keyword%`</span></span></code></pre></div><p>上面的语句用explain解释来看，SQL语句并未用到索引，而且是全表索引，如果在数据量超大的时候，可想而知最后的效率会是怎么样</p><h2 id="_2-对照组" tabindex="-1"><a class="header-anchor" href="#_2-对照组"><span>2. 对照组</span></a></h2><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT `column` FROM `table` WHERE `field` like &#39;keyword%&#39;;</span></span></code></pre></div><p>这样的写法用explain解释看到，SQL语句使用了索引，搜索的效率大大的提高了</p><p>但是有的时候，我们再作模糊查询的时候，并非要想查询的关键字都在开头，所以如果不是特别的要求，&quot;ketwork%&quot;并不适合所有的模糊查询</p><h2 id="_3-解决方案" tabindex="-1"><a class="header-anchor" href="#_3-解决方案"><span>3. 解决方案</span></a></h2><h3 id="_3-1-locate-substr-str-pos-方法" tabindex="-1"><a class="header-anchor" href="#_3-1-locate-substr-str-pos-方法"><span>3.1 LOCATE（&#39;substr&#39;,str,pos）方法</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT LOCATE(&#39;xbar&#39;,`foobar`);   返回0 </span></span>\n<span class="line"><span>SELECT LOCATE(&#39;bar&#39;,`foobarbar`);  返回4</span></span>\n<span class="line"><span>SELECT LOCATE(&#39;bar&#39;,`foobarbar`,**5**); 返回7</span></span></code></pre></div><p>备注：</p><ul><li>返回substr 的str中第一次出现的问题，如果substr 在str中不存在，返回值为0.</li><li>如果pos存在，返回substr 在第pos个位置后第一次出现的位置，如果substr中的str中不存在，返回值为0</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT `column` FROM `table` WHERE LOCATE(&#39;keyword&#39;, `field`)&gt;0</span></span></code></pre></div><p>备注：keyword是要搜索的内容，field为被匹配的字段，查询出所有存在keyword的数据</p><h3 id="_3-2-position-substr-in-field-方法" tabindex="-1"><a class="header-anchor" href="#_3-2-position-substr-in-field-方法"><span>3.2 POSITION(&#39;substr&#39; IN <code>field</code>)方法</span></a></h3><p>position可以看做是locate的别名，功能跟locate一样</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT `column` FROM `table` WHERE POSITION(&#39;keyword&#39; IN `filed`)</span></span></code></pre></div><h3 id="_3-3-instr-str-substr-方法" tabindex="-1"><a class="header-anchor" href="#_3-3-instr-str-substr-方法"><span>3.3 INSTR(<code>str</code>,&#39;substr&#39;)方法</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT `column` FROM `table` WHERE INSTR(`field`, &#39;keyword&#39; )&gt;0</span></span></code></pre></div><h3 id="_3-4-find-in-set-str1-str2" tabindex="-1"><a class="header-anchor" href="#_3-4-find-in-set-str1-str2"><span>3.4 FIND_IN_SET(str1,str2):</span></a></h3><p>返回str2中str1所在的位置索引，其中str2必须以&quot;,&quot;分割开。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT * FROM `person` WHERE FIND_IN_SET(&#39;apply&#39;,`name`);</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://yq.aliyun.com/articles/674870" target="_blank" rel="noopener noreferrer">mysql 优化 - like模糊查询优化</a></p>',27)]))}const d=a(r,[["render",l],["__file","mysql-x-optimize-like.html.vue"]]),p=JSON.parse('{"path":"/posts/Database/MySQL/mysql-x-optimize-like.html","title":"like模糊查询优化","lang":"zh-CN","frontmatter":{"aliases":"like模糊查询优化","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 08:52","description":"like模糊查询优化 1. 背景 在使用mysql进行模糊查询的时候，很自容的会用到 like 语句，通常情况下，在数量小的时候，不容易看出查询效率，但在数据量达到百万级，千万级的时候，查询的效率就很容易显现出来。这个时候查询的效率就显得很重要！ 一般情况下like模糊查询的写法为（field已建立索引） 上面的语句用explain解释来看，SQL语句...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MySQL/mysql-x-optimize-like.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"like模糊查询优化"}],["meta",{"property":"og:description","content":"like模糊查询优化 1. 背景 在使用mysql进行模糊查询的时候，很自容的会用到 like 语句，通常情况下，在数量小的时候，不容易看出查询效率，但在数据量达到百万级，千万级的时候，查询的效率就很容易显现出来。这个时候查询的效率就显得很重要！ 一般情况下like模糊查询的写法为（field已建立索引） 上面的语句用explain解释来看，SQL语句..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"like模糊查询优化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 对照组","slug":"_2-对照组","link":"#_2-对照组","children":[]},{"level":2,"title":"3. 解决方案","slug":"_3-解决方案","link":"#_3-解决方案","children":[{"level":3,"title":"3.1 LOCATE（\'substr\',str,pos）方法","slug":"_3-1-locate-substr-str-pos-方法","link":"#_3-1-locate-substr-str-pos-方法","children":[]},{"level":3,"title":"3.2 POSITION(\'substr\' IN field)方法","slug":"_3-2-position-substr-in-field-方法","link":"#_3-2-position-substr-in-field-方法","children":[]},{"level":3,"title":"3.3 INSTR(str,\'substr\')方法","slug":"_3-3-instr-str-substr-方法","link":"#_3-3-instr-str-substr-方法","children":[]},{"level":3,"title":"3.4 FIND_IN_SET(str1,str2):","slug":"_3-4-find-in-set-str1-str2","link":"#_3-4-find-in-set-str1-str2","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.77,"words":532},"filePathRelative":"posts/Database/MySQL/mysql-x-optimize-like.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>在使用mysql进行模糊查询的时候，很自容的会用到 like 语句，通常情况下，在数量小的时候，不容易看出查询效率，<strong>但在数据量达到百万级，千万级的时候</strong>，查询的效率就很容易显现出来。这个时候查询的效率就显得很重要！</p>\\n<p>一般情况下like模糊查询的写法为（field已建立索引）</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>SELECT `column` FROM `table` WHERE `field` like `%keyword%`</span></span></code></pre>\\n</div>","autoDesc":true}');export{d as comp,p as data};
