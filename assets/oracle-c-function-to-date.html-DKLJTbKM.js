import{_ as a,c as n,a as o,o as l}from"./app-CQys7GfP.js";const e={};function r(i,s){return l(),n("div",null,s[0]||(s[0]=[o(`<h1 id="oracle函数日期格式转换-to-date" tabindex="-1"><a class="header-anchor" href="#oracle函数日期格式转换-to-date"><span>Oracle函数日期格式转换 to_date</span></a></h1><h2 id="_1-比较日期" tabindex="-1"><a class="header-anchor" href="#_1-比较日期"><span>1. 比较日期</span></a></h2><p>查找出大于指定日期的数据</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT EMP_NAME, DEPT</span></span>
<span class="line"><span>FROM EMPLOYEE</span></span>
<span class="line"><span>WHERE TIME_CREATED &gt;= TO_DATE(&#39;2020/11/11&#39;,&#39;yyyy/MM/dd&#39;)</span></span></code></pre></div><h2 id="_1-字符串和时间转换" tabindex="-1"><a class="header-anchor" href="#_1-字符串和时间转换"><span>1. 字符串和时间转换</span></a></h2><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> to_date(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;2004-05-07 13:23:44&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;yyyy-mm-dd hh24:mi:ss&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dual</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> to_char( to_date(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">222</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;J&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">),</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;Jsp&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dual //显示Two Hundred Twenty-Two</span></span></code></pre></div><h2 id="_2-日期和字符转换函数用法-to-date-to-char" tabindex="-1"><a class="header-anchor" href="#_2-日期和字符转换函数用法-to-date-to-char"><span>2. 日期和字符转换函数用法（to_date,to_char)</span></a></h2><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> to_char(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">sysdate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;yyyy-mm-dd hh24:mi:ss&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">as</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> nowTime </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dual; //日期转化为字符串</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> to_char(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">sysdate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;yyyy&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">as</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> nowYear </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dual; //获取时间的年</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> to_char(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">sysdate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;mm&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">as</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> nowMonth </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dual; //获取时间的月</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> to_char(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">sysdate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;dd&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">as</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> nowDay </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dual; //获取时间的日</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> to_char(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">sysdate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;hh24&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">as</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> nowHour </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dual; //获取时间的时</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> to_char(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">sysdate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;mi&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">as</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> nowMinute </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dual; //获取时间的分</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> to_char(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">sysdate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;ss&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">as</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> nowSecond </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dual; //获取时间的秒</span></span></code></pre></div><h2 id="_3-求某天是星期几" tabindex="-1"><a class="header-anchor" href="#_3-求某天是星期几"><span>3. 求某天是星期几</span></a></h2><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> to_char(to_date(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;2002-08-26&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;yyyy-mm-dd&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">),</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;day&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dual; //星期一</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> to_char(to_date(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;2002-08-26&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;day&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">&#39;NLS_DATE_LANGUAGE = American&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dual; // monday</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">//设置日期语言</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">ALTER</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> SESSION</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> SET</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> NLS_DATE_LANGUAGE</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;AMERICAN&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">//也可以这样</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">TO_DATE (</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;2002-08-26&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;YYYY-mm-dd&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;NLS_DATE_LANGUAGE = American&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><h2 id="_4-两个日期间的天数" tabindex="-1"><a class="header-anchor" href="#_4-两个日期间的天数"><span>4. 两个日期间的天数</span></a></h2><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> floor</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">sysdate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> - to_date(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;20200405&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;yyyymmdd&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dual;</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.jb51.cc/oracle/65401.html" target="_blank" rel="noopener noreferrer">oracle中to_date详细用法示例(oracle日期格式转换)</a></p>`,14)]))}const p=a(e,[["render",r],["__file","oracle-c-function-to-date.html.vue"]]),B=JSON.parse(`{"path":"/posts/Database/ORACLE/oracle-c-function-to-date.html","title":"Oracle函数日期格式转换 to_date","lang":"zh-CN","frontmatter":{"aliases":"Oracle函数日期格式转换 to_date","tags":null,"cssclass":null,"source":null,"order":10,"category":["数据库"],"created":"2024-02-22 10:49","updated":"2024-03-13 09:56","description":"Oracle函数日期格式转换 to_date 1. 比较日期 查找出大于指定日期的数据 1. 字符串和时间转换 2. 日期和字符转换函数用法（to_date,to_char) 3. 求某天是星期几 4. 两个日期间的天数 参考文章 oracle中to_date详细用法示例(oracle日期格式转换)","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/ORACLE/oracle-c-function-to-date.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Oracle函数日期格式转换 to_date"}],["meta",{"property":"og:description","content":"Oracle函数日期格式转换 to_date 1. 比较日期 查找出大于指定日期的数据 1. 字符串和时间转换 2. 日期和字符转换函数用法（to_date,to_char) 3. 求某天是星期几 4. 两个日期间的天数 参考文章 oracle中to_date详细用法示例(oracle日期格式转换)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle函数日期格式转换 to_date\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 比较日期","slug":"_1-比较日期","link":"#_1-比较日期","children":[]},{"level":2,"title":"1. 字符串和时间转换","slug":"_1-字符串和时间转换","link":"#_1-字符串和时间转换","children":[]},{"level":2,"title":"2. 日期和字符转换函数用法（to_date,to_char)","slug":"_2-日期和字符转换函数用法-to-date-to-char","link":"#_2-日期和字符转换函数用法-to-date-to-char","children":[]},{"level":2,"title":"3. 求某天是星期几","slug":"_3-求某天是星期几","link":"#_3-求某天是星期几","children":[]},{"level":2,"title":"4. 两个日期间的天数","slug":"_4-两个日期间的天数","link":"#_4-两个日期间的天数","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.14,"words":342},"filePathRelative":"posts/Database/ORACLE/oracle-c-function-to-date.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 比较日期</h2>\\n<p>查找出大于指定日期的数据</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>SELECT EMP_NAME, DEPT</span></span>\\n<span class=\\"line\\"><span>FROM EMPLOYEE</span></span>\\n<span class=\\"line\\"><span>WHERE TIME_CREATED &gt;= TO_DATE('2020/11/11','yyyy/MM/dd')</span></span></code></pre>\\n</div>","autoDesc":true}`);export{p as comp,B as data};