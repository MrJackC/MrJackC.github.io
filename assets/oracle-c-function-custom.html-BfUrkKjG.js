import{_ as a,c as n,a as l,o as i}from"./app-tJW29Kmg.js";const e={};function r(o,s){return i(),n("div",null,s[0]||(s[0]=[l(`<h1 id="oracle-自定义函数语法" tabindex="-1"><a class="header-anchor" href="#oracle-自定义函数语法"><span>Oracle 自定义函数语法</span></a></h1><h2 id="_1-语法" tabindex="-1"><a class="header-anchor" href="#_1-语法"><span>1. 语法</span></a></h2><p><strong>Oracle自定义函数的语法如下：</strong></p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">create or replace</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> function</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> 函数名</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(参数1 模式 参数类型)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 返回值类型</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">as</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">变量1 变量类型;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">变量2 变量类型;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">begin</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    函数体;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">end</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 函数名;</span></span></code></pre></div><p>参数的模式有3种:(如果没有注明, 参数默认的类型为 in.)</p><ul><li>in: 为只读模式, 在函数中, 参数的值只能被引用, 不能被改变;</li><li>out: 为只写模式, 只能被赋值, 不能被引用;</li><li>in out: 可读可写.</li></ul><p>提醒:</p><ol><li>在Oracle自定义函数中, else if 的正确写法是 elsif 而不是 else if</li><li>使用 if 需要加 then &quot;if 条件 then 操作&quot;</li></ol><h2 id="_2-示例" tabindex="-1"><a class="header-anchor" href="#_2-示例"><span>2. 示例</span></a></h2><h3 id="_2-1-代替mysql的find-in-set" tabindex="-1"><a class="header-anchor" href="#_2-1-代替mysql的find-in-set"><span>2.1 代替MYSQL的FIND_IN_SET</span></a></h3><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- ----------------------------</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 函数 ，代替MYSQL的FIND_IN_SET</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 例如： SELECT * FROM SYS_DEPT WHERE FIND_IN_SET (101,ANCESTORS) &lt;&gt; 0</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- MYSQL可接受0或其它NUMBER做为WHERE 条件，ORACLE只接受表达式做为WHERE 条件</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- ----------------------------</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE OR REPLACE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> FUNCTION</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> FIND_IN_SET</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(ARG1 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">IN</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> VARCHAR2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,ARG2 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">IN</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> VARCHAR</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">RETURN</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> NUMBER</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> IS</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> RESULT </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NUMBER</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">BEGIN</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">SELECT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> INSTR(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;,&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">||ARG2||</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;,&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> , </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;,&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">||ARG1||</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;,&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">INTO</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> RESULT </span><span style="color:#C678DD;--shiki-dark:#C678DD;">FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> DUAL;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">RETURN</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(RESULT);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">END</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> FIND_IN_SET;</span></span></code></pre></div><h3 id="_2-2-读入两个值-返回比较大的值" tabindex="-1"><a class="header-anchor" href="#_2-2-读入两个值-返回比较大的值"><span>2.2 读入两个值, 返回比较大的值</span></a></h3><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">create or replace</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> function</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> function1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(para1 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">in</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> number</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, para2 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">in</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> number</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">return</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> number</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">as</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">begin</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> para1 </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> para2 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">      return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> para1;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  else</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">      return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> para2; </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  end</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">end</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> function1;</span></span></code></pre></div><p>使用</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> function1(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">666</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">333</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dual;</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/libertine1993/article/details/47264211" target="_blank" rel="noopener noreferrer">Oracle 自定义函数语法与实例</a></p>`,17)]))}const t=a(e,[["render",r],["__file","oracle-c-function-custom.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/ORACLE/oracle-c-function-custom.html","title":"Oracle 自定义函数语法","lang":"zh-CN","frontmatter":{"aliases":"Oracle 自定义函数语法","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 09:55","description":"Oracle 自定义函数语法 1. 语法 Oracle自定义函数的语法如下： 参数的模式有3种:(如果没有注明, 参数默认的类型为 in.) in: 为只读模式, 在函数中, 参数的值只能被引用, 不能被改变; out: 为只写模式, 只能被赋值, 不能被引用; in out: 可读可写. 提醒: 在Oracle自定义函数中, else if 的正确写...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/ORACLE/oracle-c-function-custom.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Oracle 自定义函数语法"}],["meta",{"property":"og:description","content":"Oracle 自定义函数语法 1. 语法 Oracle自定义函数的语法如下： 参数的模式有3种:(如果没有注明, 参数默认的类型为 in.) in: 为只读模式, 在函数中, 参数的值只能被引用, 不能被改变; out: 为只写模式, 只能被赋值, 不能被引用; in out: 可读可写. 提醒: 在Oracle自定义函数中, else if 的正确写..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle 自定义函数语法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 语法","slug":"_1-语法","link":"#_1-语法","children":[]},{"level":2,"title":"2. 示例","slug":"_2-示例","link":"#_2-示例","children":[{"level":3,"title":"2.1 代替MYSQL的FIND_IN_SET","slug":"_2-1-代替mysql的find-in-set","link":"#_2-1-代替mysql的find-in-set","children":[]},{"level":3,"title":"2.2 读入两个值, 返回比较大的值","slug":"_2-2-读入两个值-返回比较大的值","link":"#_2-2-读入两个值-返回比较大的值","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.17,"words":351},"filePathRelative":"posts/Database/ORACLE/oracle-c-function-custom.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 语法</h2>\\n<p><strong>Oracle自定义函数的语法如下：</strong></p>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">create or replace</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> function</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> 函数名</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(参数1 模式 参数类型)</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">return</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> 返回值类型</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">as</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">变量1 变量类型;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">变量2 变量类型;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">begin</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    函数体;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">end</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> 函数名;</span></span></code></pre>\\n</div>","autoDesc":true}');export{t as comp,c as data};
