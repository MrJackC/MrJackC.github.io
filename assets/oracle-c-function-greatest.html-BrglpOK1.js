import{_ as a,c as e,a as n,o as l}from"./app-DP7tPpgD.js";const t={};function i(r,s){return l(),e("div",null,s[0]||(s[0]=[n(`<h1 id="oracle中greatest-least函数的使用" tabindex="-1"><a class="header-anchor" href="#oracle中greatest-least函数的使用"><span>Oracle中greatest()/least函数的使用</span></a></h1><h2 id="_1-示例" tabindex="-1"><a class="header-anchor" href="#_1-示例"><span>1. 示例</span></a></h2><p>已知表如下</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">SQL</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> tb;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        ID      CHINESE       MATH    ENGLISH</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    ---------- ----------          ----------     ----------</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      1001</span><span style="color:#D19A66;--shiki-dark:#D19A66;">         89</span><span style="color:#D19A66;--shiki-dark:#D19A66;">                 98</span><span style="color:#D19A66;--shiki-dark:#D19A66;">            87</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      1002</span><span style="color:#D19A66;--shiki-dark:#D19A66;">         81</span><span style="color:#D19A66;--shiki-dark:#D19A66;">                 87</span><span style="color:#D19A66;--shiki-dark:#D19A66;">           79</span></span></code></pre></div><p>现在要得到如下的结果</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  ID      CHINESE  MATH ENGLISH  MAX       MIN</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     ---------- ----------   ----------   ----------  ----------  ----------</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      1001</span><span style="color:#D19A66;--shiki-dark:#D19A66;">       89</span><span style="color:#D19A66;--shiki-dark:#D19A66;">             98</span><span style="color:#D19A66;--shiki-dark:#D19A66;">             87</span><span style="color:#D19A66;--shiki-dark:#D19A66;">          98</span><span style="color:#D19A66;--shiki-dark:#D19A66;">          87</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      1002</span><span style="color:#D19A66;--shiki-dark:#D19A66;">       81</span><span style="color:#D19A66;--shiki-dark:#D19A66;">             87</span><span style="color:#D19A66;--shiki-dark:#D19A66;">             79</span><span style="color:#D19A66;--shiki-dark:#D19A66;">          87</span><span style="color:#D19A66;--shiki-dark:#D19A66;">          79</span></span></code></pre></div><p>该怎么解决？</p><p>首先自然想到MAX 和 MIN 函数，但这两个是聚集函数，是要作用在同一列上面的，而现在要得到的MAX和 MIN 的值确实作用与每一列上面的，如果要借助于MAX()和MIN()，还需要对原表的数据结构进行行转列处理，复杂度上升</p><h2 id="_2-使用greatest-least函数" tabindex="-1"><a class="header-anchor" href="#_2-使用greatest-least函数"><span>2. 使用greatest()/least函数</span></a></h2><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">SQL</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> SELECT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> id, chinese, math, english,</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">            greatest</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(chinese, math, english) max,</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">            least</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(chinese, math, english) min</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">     FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   tb;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        ID     CHINESE MATH  ENGLISH   MAX        MIN</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    ---------- ----------   ----------   ----------   ---------- ----------</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      1001</span><span style="color:#D19A66;--shiki-dark:#D19A66;">         89</span><span style="color:#D19A66;--shiki-dark:#D19A66;">         98</span><span style="color:#D19A66;--shiki-dark:#D19A66;">             87</span><span style="color:#D19A66;--shiki-dark:#D19A66;">           98</span><span style="color:#D19A66;--shiki-dark:#D19A66;">          87</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      1002</span><span style="color:#D19A66;--shiki-dark:#D19A66;">         81</span><span style="color:#D19A66;--shiki-dark:#D19A66;">         87</span><span style="color:#D19A66;--shiki-dark:#D19A66;">             79</span><span style="color:#D19A66;--shiki-dark:#D19A66;">           87</span><span style="color:#D19A66;--shiki-dark:#D19A66;">          79</span></span></code></pre></div>`,10)]))}const p=a(t,[["render",i],["__file","oracle-c-function-greatest.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/ORACLE/oracle-c-function-greatest.html","title":"Oracle中greatest()/least函数的使用","lang":"zh-CN","frontmatter":{"aliases":"Oracle中greatest()/least函数的使用","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 09:56","description":"Oracle中greatest()/least函数的使用 1. 示例 已知表如下 现在要得到如下的结果 该怎么解决？ 首先自然想到MAX 和 MIN 函数，但这两个是聚集函数，是要作用在同一列上面的，而现在要得到的MAX和 MIN 的值确实作用与每一列上面的，如果要借助于MAX()和MIN()，还需要对原表的数据结构进行行转列处理，复杂度上升 2. 使...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/ORACLE/oracle-c-function-greatest.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Oracle中greatest()/least函数的使用"}],["meta",{"property":"og:description","content":"Oracle中greatest()/least函数的使用 1. 示例 已知表如下 现在要得到如下的结果 该怎么解决？ 首先自然想到MAX 和 MIN 函数，但这两个是聚集函数，是要作用在同一列上面的，而现在要得到的MAX和 MIN 的值确实作用与每一列上面的，如果要借助于MAX()和MIN()，还需要对原表的数据结构进行行转列处理，复杂度上升 2. 使..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle中greatest()/least函数的使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 示例","slug":"_1-示例","link":"#_1-示例","children":[]},{"level":2,"title":"2. 使用greatest()/least函数","slug":"_2-使用greatest-least函数","link":"#_2-使用greatest-least函数","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.74,"words":223},"filePathRelative":"posts/Database/ORACLE/oracle-c-function-greatest.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 示例</h2>\\n<p>已知表如下</p>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">SQL</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">&gt;</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> select</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> * </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> tb;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        ID      CHINESE       MATH    ENGLISH</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    ---------- ----------          ----------     ----------</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">      1001</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">         89</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">                 98</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">            87</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">      1002</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">         81</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">                 87</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">           79</span></span></code></pre>\\n</div>","autoDesc":true}');export{p as comp,c as data};
