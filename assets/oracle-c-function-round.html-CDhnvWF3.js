import{_ as a,c as B,a as n,o as i}from"./app-BfIe-EZg.js";const l={};function o(r,s){return i(),B("div",null,s[0]||(s[0]=[n(`<h1 id="oracle中四舍五入round函数的使用" tabindex="-1"><a class="header-anchor" href="#oracle中四舍五入round函数的使用"><span>Oracle中四舍五入Round函数的使用</span></a></h1><h1 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h1><p>Round 函数</p><p>​ 语法：ROUND(number，num_digits)</p><p>其中Number 是需要进行四舍五入的数字，Num_digits为指定的位置，按此位数进行四舍五入。</p><ul><li>如何num_digits 大于0，则四舍五入到指定的小数位</li><li>如果num_digits等于0，则四舍五入到最接近的整数</li><li>如果num_digits小于0，则在小数点左侧进行四舍五入</li></ul><h2 id="_2-案例" tabindex="-1"><a class="header-anchor" href="#_2-案例"><span>2. 案例</span></a></h2><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> sum</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">long_time</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)/</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">round</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">sum</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">long_time</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)/</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) r0 </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">round</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">sum</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">long_time</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)/</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) r1 </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">round</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">sum</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">long_time</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)/</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) r2 </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">round</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">sum</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">long_time</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)/</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) r3 </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">round</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">sum</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">long_time</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)/</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) r4 </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">round</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">sum</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">long_time</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)/</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) r5 </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">round</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">sum</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">long_time</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)/</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,-</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) r_1 </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">round</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">sum</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">long_time</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)/</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,-</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) r_2 </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">round</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">sum</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">long_time</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)/</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,-</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) r_3 </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">round</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">sum</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">long_time</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)/</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,-</span><span style="color:#D19A66;--shiki-dark:#D19A66;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) r_4 </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">round</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">sum</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">long_time</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)/</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,-</span><span style="color:#D19A66;--shiki-dark:#D19A66;">5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) r_5 </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  hd_agent_voice_seq a</span></span></code></pre></div><p>结果</p><p>SUM(A.LONG_TIME)/3 R0 R1 R2 R3 R4 R5 R_1 R_2 R_3 R_4 R_5<br> 4001.33333333333 4001 4001.3 4001.33 4001.333 4001.3333 4001.33333 4000 4000 4000 0 0</p>`,10)]))}const k=a(l,[["render",o],["__file","oracle-c-function-round.html.vue"]]),e=JSON.parse('{"path":"/posts/Database/ORACLE/oracle-c-function-round.html","title":"Oracle中四舍五入Round函数的使用","lang":"zh-CN","frontmatter":{"aliases":"Oracle中四舍五入Round函数的使用","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 09:56","description":"Oracle中四舍五入Round函数的使用 1. 简介 Round 函数 ​ 语法：ROUND(number，num_digits) 其中Number 是需要进行四舍五入的数字，Num_digits为指定的位置，按此位数进行四舍五入。 如何num_digits 大于0，则四舍五入到指定的小数位 如果num_digits等于0，则四舍五入到最接近的整数 ...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/ORACLE/oracle-c-function-round.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Oracle中四舍五入Round函数的使用"}],["meta",{"property":"og:description","content":"Oracle中四舍五入Round函数的使用 1. 简介 Round 函数 ​ 语法：ROUND(number，num_digits) 其中Number 是需要进行四舍五入的数字，Num_digits为指定的位置，按此位数进行四舍五入。 如何num_digits 大于0，则四舍五入到指定的小数位 如果num_digits等于0，则四舍五入到最接近的整数 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle中四舍五入Round函数的使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"2. 案例","slug":"_2-案例","link":"#_2-案例","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.81,"words":243},"filePathRelative":"posts/Database/ORACLE/oracle-c-function-round.md","localizedDate":"2024年10月21日","excerpt":"\\n<h1>1. 简介</h1>\\n<p>Round 函数</p>\\n<p>​\\t\\t语法：ROUND(number，num_digits)</p>\\n<p>其中Number 是需要进行四舍五入的数字，Num_digits为指定的位置，按此位数进行四舍五入。</p>\\n<ul>\\n<li>如何num_digits 大于0，则四舍五入到指定的小数位</li>\\n<li>如果num_digits等于0，则四舍五入到最接近的整数</li>\\n<li>如果num_digits小于0，则在小数点左侧进行四舍五入</li>\\n</ul>\\n<h2>2. 案例</h2>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">select</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> sum</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">a</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">long_time</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)/</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">3</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">round</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">sum</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">a</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">long_time</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)/</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">3</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">0</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) r0 </span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">round</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">sum</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">a</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">long_time</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)/</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">3</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">1</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) r1 </span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">round</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">sum</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">a</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">long_time</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)/</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">3</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">2</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) r2 </span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">round</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">sum</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">a</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">long_time</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)/</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">3</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">3</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) r3 </span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">round</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">sum</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">a</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">long_time</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)/</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">3</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">4</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) r4 </span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">round</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">sum</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">a</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">long_time</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)/</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">3</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">5</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) r5 </span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">round</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">sum</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">a</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">long_time</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)/</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">3</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,-</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">1</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) r_1 </span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">round</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">sum</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">a</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">long_time</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)/</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">3</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,-</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">2</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) r_2 </span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">round</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">sum</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">a</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">long_time</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)/</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">3</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,-</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">3</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) r_3 </span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">round</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">sum</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">a</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">long_time</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)/</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">3</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,-</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">4</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) r_4 </span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">round</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">sum</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">a</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">long_time</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)/</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">3</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,-</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">5</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) r_5 </span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> from</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  hd_agent_voice_seq a</span></span></code></pre>\\n</div>","autoDesc":true}');export{k as comp,e as data};
