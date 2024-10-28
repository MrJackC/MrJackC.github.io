import{_ as s,c as e,a as n,o as p}from"./app-W9QyTiMU.js";const l={};function t(r,a){return p(),e("div",null,a[0]||(a[0]=[n(`<h1 id="oracle基础-序列" tabindex="-1"><a class="header-anchor" href="#oracle基础-序列"><span>Oracle基础-序列</span></a></h1><p>create sequence SEQ_TEST</p><p>minvalue 1 --最小值</p><p>nomaxvalue --不设置最大值</p><p>start with 1 --从1开始计数</p><p>increment by 1 --每次加1个</p><p>nocycle --一直累加，不循环</p><p>nocache; --不建缓冲区</p><h2 id="_1-创建序列" tabindex="-1"><a class="header-anchor" href="#_1-创建序列"><span>1. 创建序列</span></a></h2><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>create sequence seq_user</span></span>
<span class="line"><span>  increment by 1</span></span>
<span class="line"><span>  minvalue 1</span></span>
<span class="line"><span>  nomaxvalue</span></span>
<span class="line"><span>  start with 1</span></span>
<span class="line"><span>  nocycle </span></span>
<span class="line"><span>  cache 20;</span></span></code></pre></div><h2 id="_2-修改序列的当前值的3种方式" tabindex="-1"><a class="header-anchor" href="#_2-修改序列的当前值的3种方式"><span>2. 修改序列的当前值的3种方式</span></a></h2><h3 id="_2-1-方式一-使用plsql" tabindex="-1"><a class="header-anchor" href="#_2-1-方式一-使用plsql"><span>2.1 <strong>方式一：使用plsql；</strong></span></a></h3><p>打开plsql，找到sequences</p><p>找到要修改的序列--》右键--》编辑--》更改：下一个数字的值即可。</p><h3 id="_2-2-方式二-重建序列" tabindex="-1"><a class="header-anchor" href="#_2-2-方式二-重建序列"><span>2.2 <strong>方式二：重建序列；</strong></span></a></h3><p>错误方式：</p><p>具体步骤是：删除原来的序列，重新创建。</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 删除序列</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">DROP</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> SEQUENCE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> seq_sys_dept;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 重建序列</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 其中，start with 后面跟的就是起始值（下次调用此序列时，将会出现的值）</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> SEQUENCE</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> seq_sys_dept</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    minvalue </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    maxvalue </span><span style="color:#D19A66;--shiki-dark:#D19A66;">9999999999999999999</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    INCREMENT </span><span style="color:#C678DD;--shiki-dark:#C678DD;">BY</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    START</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> WITH</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 23725</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>start with 后面跟的就是起始值（下次调用此序列时，将会出现的值） 。</p><h3 id="_2-3-方式三-使用sql。" tabindex="-1"><a class="header-anchor" href="#_2-3-方式三-使用sql。"><span>2.3 <strong>方式三：使用sql。</strong></span></a></h3><p>这一个，是本文的重点；</p><p>我们由方式一可以知道：通过plsql的可视化操作界面，是可以修改的。</p><p>那plsql到底是怎么实现的？一起来看下：</p><p>选中序列--》右键--》编辑</p><p>第一步：修改起始值；</p><p>第二步：点击右下角的“查看SQL”。</p><p>说明：</p><p>起初，这里的起始值是300，我给它改成了30，实现的效果就是：</p><p>将序列的下一个值改成了30，以后序列将会从30往后叠加。</p><p>然后，看下面这张图，要实现序列起始值的修改，需要3步。</p><p>第一步：更改序列的步长；</p><p>alter sequence SEQ_META_THEME_TABLE increment by -271 nocache;</p><p>我们需要明白一个前提：</p><p>序列的值是怎么来的？</p><p>当前值+步长（增量）</p><p>所以，我们想要修改序列的当前值，就必须自改序列的增量。</p><p>第二步：查询序列值；</p><p>select SEQ_META_THEME_TABLE.nextval from dual;</p><p>这一步的目的是：改变序列的当前值，让其按照自己预设的增量来完成序列当前值的修改工作。</p><p>到这一步，该序列返回的当前值已经改成了300-271=29（下次调用将会返回30）。</p><p>第三步：将序列的增量改成1。</p><p>alter sequence SEQ_META_THEME_TABLE increment by 1 cache 20;</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- Modify the last number </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alter</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> sequence</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> SEQ_META_THEME_TABLE increment </span><span style="color:#C678DD;--shiki-dark:#C678DD;">by</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> -</span><span style="color:#D19A66;--shiki-dark:#D19A66;">271</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> nocache;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> SEQ_META_THEME_TABLE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">nextval</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dual;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alter</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> sequence</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> SEQ_META_THEME_TABLE increment </span><span style="color:#C678DD;--shiki-dark:#C678DD;">by</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> cache </span><span style="color:#D19A66;--shiki-dark:#D19A66;">20</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>不信？我们把SQL复制出来，执行一下。</p><p>把序列值变大（30--&gt;300）</p><p>关于增量的计算：</p><p>如果更改后值(afterNum)&gt;现在序列的下一个值(nextNum)，增量(step)=afterNum - nextNum；</p><p>如果更改后值(afterNum)&lt;现在序列的下一个值(nextNum)，增量(step)=afterNum - nextNum - 1；</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="http://www.manongjc.com/detail/28-blnqrnlyhtnlqul.html" target="_blank" rel="noopener noreferrer">Oracle 修改序列的当前值的3种方式</a></p>`,50)]))}const c=s(l,[["render",t],["__file","oracle-b-sequence.html.vue"]]),o=JSON.parse('{"path":"/posts/Database/ORACLE/oracle-b-sequence.html","title":"Oracle基础-序列","lang":"zh-CN","frontmatter":{"aliases":"Oracle基础-序列","tags":null,"cssclass":null,"source":null,"order":10,"category":["数据库"],"created":"2024-02-22 10:49","updated":"2024-03-13 09:48","description":"Oracle基础-序列 create sequence SEQ_TEST minvalue 1 --最小值 nomaxvalue --不设置最大值 start with 1 --从1开始计数 increment by 1 --每次加1个 nocycle --一直累加，不循环 nocache; --不建缓冲区 1. 创建序列 2. 修改序列的当前值的3种...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/ORACLE/oracle-b-sequence.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Oracle基础-序列"}],["meta",{"property":"og:description","content":"Oracle基础-序列 create sequence SEQ_TEST minvalue 1 --最小值 nomaxvalue --不设置最大值 start with 1 --从1开始计数 increment by 1 --每次加1个 nocycle --一直累加，不循环 nocache; --不建缓冲区 1. 创建序列 2. 修改序列的当前值的3种..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle基础-序列\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 创建序列","slug":"_1-创建序列","link":"#_1-创建序列","children":[]},{"level":2,"title":"2. 修改序列的当前值的3种方式","slug":"_2-修改序列的当前值的3种方式","link":"#_2-修改序列的当前值的3种方式","children":[{"level":3,"title":"2.1 方式一：使用plsql；","slug":"_2-1-方式一-使用plsql","link":"#_2-1-方式一-使用plsql","children":[]},{"level":3,"title":"2.2 方式二：重建序列；","slug":"_2-2-方式二-重建序列","link":"#_2-2-方式二-重建序列","children":[]},{"level":3,"title":"2.3 方式三：使用sql。","slug":"_2-3-方式三-使用sql。","link":"#_2-3-方式三-使用sql。","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.33,"words":699},"filePathRelative":"posts/Database/ORACLE/oracle-b-sequence.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>create sequence SEQ_TEST</p>\\n<p>minvalue 1 --最小值</p>\\n<p>nomaxvalue --不设置最大值</p>\\n<p>start with 1 --从1开始计数</p>\\n<p>increment by 1 --每次加1个</p>\\n<p>nocycle --一直累加，不循环</p>\\n<p>nocache; --不建缓冲区</p>\\n<h2>1. 创建序列</h2>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>create sequence seq_user</span></span>\\n<span class=\\"line\\"><span>  increment by 1</span></span>\\n<span class=\\"line\\"><span>  minvalue 1</span></span>\\n<span class=\\"line\\"><span>  nomaxvalue</span></span>\\n<span class=\\"line\\"><span>  start with 1</span></span>\\n<span class=\\"line\\"><span>  nocycle </span></span>\\n<span class=\\"line\\"><span>  cache 20;</span></span></code></pre>\\n</div>","autoDesc":true}');export{c as comp,o as data};
