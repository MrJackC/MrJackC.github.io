import{_ as a,c as n,a as i,o as l}from"./app-DQS7qcOs.js";const r={};function B(e,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="mysql-覆盖索引" tabindex="-1"><a class="header-anchor" href="#mysql-覆盖索引"><span>MySQL - 覆盖索引</span></a></h1><h2 id="_1-覆盖索引" tabindex="-1"><a class="header-anchor" href="#_1-覆盖索引"><span>1. 覆盖索引</span></a></h2><p>覆盖索引：<strong>SQL只需要通过索引就可以返回查询所需要的数据，而不必通过二级索引查到主键之后再去查询数据。</strong></p><blockquote><p>首先要了解覆盖索引之前，你必须要了解</p><ul><li><p>什么是聚簇索引和非聚簇索引，</p></li><li><p>回表，覆盖索引其实就是跟到底需不需要回表有直接的关系的。</p></li></ul></blockquote><h3 id="_1-1-什么是回表" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是回表"><span>1.1 什么是回表?</span></a></h3><p>什么是回表呢? 通俗的讲就是，如果索引的列在 select 所需获得的列中 或者根据一次索引查询就能获得记录就不需要回表，<strong>如果 select 所需获得列中有大量的非索引列，索引就需要到表中找到相应的列的信息，这就叫回表</strong>。只有非聚簇索引是需要回表的，所以如果你懂得非聚簇索引的存储的结构，你自然就知道为啥需要回表了。</p><blockquote><p>注意：不是所有类型的索引都可以成为覆盖索引。覆盖索引必须要存储索引的列，而哈希索引、空间索引和全文索引等都不存储索引列的值，所以MySQL只能使用B-Tree索引做覆盖索引</p></blockquote><h2 id="_2-举例" tabindex="-1"><a class="header-anchor" href="#_2-举例"><span>2. 举例</span></a></h2><p>我这里举一个例子你就可以很快明白了。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">create</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> table</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> t1</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    a </span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> primary key</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    b </span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    c </span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    d </span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    e </span><span style="color:#C678DD;--shiki-dark:#C678DD;">varchar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">20</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)engine</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">InnoDB;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">insert into</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t1 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;d&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">insert into</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t1 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;a&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">insert into</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t1 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">8</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">8</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">8</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">8</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;h&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">insert into</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t1 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;b&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">insert into</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t1 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;e&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">insert into</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t1 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;c&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">insert into</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t1 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">7</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;g&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">insert into</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t1 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">6</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">6</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;f&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">create</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> index</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> idx_t1_bcd</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> on</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t1(b,c,d); </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 创建复合索引</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们来看这些SQL，看看哪些SQL满足了覆盖索引。</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">explain </span><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t1 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> b </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 回表</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">explain </span><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> e </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t1 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> b </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 回表</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">explain </span><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> b </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t1 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> b </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 不用回表 Using index  覆盖索引</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">explain </span><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> b,c </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t1 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> b </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 不用回表 Using index  覆盖索引</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">explain </span><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> b,d </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t1 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> b </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 不用回表 Using index  覆盖索引</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">explain </span><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> b,c,d </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t1 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> b </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 不用回表 Using index  覆盖索引</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">explain </span><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> a,b,c,d </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t1 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> b </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 不用回表 Using index  覆盖索引</span></span></code></pre></div><p>其实上面已经给出答案了。</p><p>我们通过执行计划就可以知道是不是满足了覆盖索引的条件了。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130944120.png" alt="image-20221204214426240" tabindex="0" loading="lazy"><figcaption>image-20221204214426240</figcaption></figure><p>如果Extra使用了<strong>Using index</strong>，就说明了他是满足了覆盖索引了，这个就是覆盖索引的标志了。</p><p>而下面这种很明显就是不满足索引覆盖了。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130944182.png" alt="image-20221204214458013" tabindex="0" loading="lazy"><figcaption>image-20221204214458013</figcaption></figure><p>因为我们建立的是复合索引，所以就是非聚簇索引，非聚簇索引的叶子节点上会存放键的值，也就是我们的(b,c,d) 这三个字段，还会存放主键a字段用于回表操作。</p><p>所以只要查询的列是你建立的索引字段再加上主键字段，都是满足索引覆盖的，这个时候我们在非聚簇索引的叶子节点就能给够获取到这些数据，不需要回表操作。</p><h2 id="_3-总结" tabindex="-1"><a class="header-anchor" href="#_3-总结"><span>3. 总结</span></a></h2><p>如果要使用覆盖索引，一定要注意SELECT 列表值取出需要的列(并且这些列是有索引的)，不可以是SELECT *，但有的人说可以全部列都加索引，但如果将所有字段一起做索引会导致索引文件过大，查询性能下降，不能为了利用覆盖索引而这么做。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/cckevincyh/article/details/119655516" target="_blank" rel="noopener noreferrer">五分钟告诉你什么是MySQL的覆盖索引</a></p>`,24)]))}const p=a(r,[["render",B],["__file","sql-mysql-cover-index.html.vue"]]),t=JSON.parse('{"path":"/posts/Database/MySQL/sql-mysql-cover-index.html","title":"MySQL - 覆盖索引","lang":"zh-CN","frontmatter":{"aliases":"MySQL - 覆盖索引","tags":null,"cssclass":null,"source":null,"order":110,"category":["数据库","Mysql"],"created":"2024-02-22 10:49","updated":"2024-03-13 09:44","description":"MySQL - 覆盖索引 1. 覆盖索引 覆盖索引：SQL只需要通过索引就可以返回查询所需要的数据，而不必通过二级索引查到主键之后再去查询数据。 首先要了解覆盖索引之前，你必须要了解 什么是聚簇索引和非聚簇索引， 回表，覆盖索引其实就是跟到底需不需要回表有直接的关系的。 1.1 什么是回表? 什么是回表呢? 通俗的讲就是，如果索引的列在 select ...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/MySQL/sql-mysql-cover-index.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"MySQL - 覆盖索引"}],["meta",{"property":"og:description","content":"MySQL - 覆盖索引 1. 覆盖索引 覆盖索引：SQL只需要通过索引就可以返回查询所需要的数据，而不必通过二级索引查到主键之后再去查询数据。 首先要了解覆盖索引之前，你必须要了解 什么是聚簇索引和非聚簇索引， 回表，覆盖索引其实就是跟到底需不需要回表有直接的关系的。 1.1 什么是回表? 什么是回表呢? 通俗的讲就是，如果索引的列在 select ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130944120.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL - 覆盖索引\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130944120.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130944182.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 覆盖索引","slug":"_1-覆盖索引","link":"#_1-覆盖索引","children":[{"level":3,"title":"1.1 什么是回表?","slug":"_1-1-什么是回表","link":"#_1-1-什么是回表","children":[]}]},{"level":2,"title":"2. 举例","slug":"_2-举例","link":"#_2-举例","children":[]},{"level":2,"title":"3. 总结","slug":"_3-总结","link":"#_3-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.22,"words":967},"filePathRelative":"posts/Database/MySQL/sql-mysql-cover-index.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 覆盖索引</h2>\\n<p>覆盖索引：<strong>SQL只需要通过索引就可以返回查询所需要的数据，而不必通过二级索引查到主键之后再去查询数据。</strong></p>\\n<blockquote>\\n<p>首先要了解覆盖索引之前，你必须要了解</p>\\n<ul>\\n<li>\\n<p>什么是聚簇索引和非聚簇索引，</p>\\n</li>\\n<li>\\n<p>回表，覆盖索引其实就是跟到底需不需要回表有直接的关系的。</p>\\n</li>\\n</ul>\\n</blockquote>\\n<h3>1.1 什么是回表?</h3>\\n<p>什么是回表呢? 通俗的讲就是，如果索引的列在 select 所需获得的列中 或者根据一次索引查询就能获得记录就不需要回表，<strong>如果 select 所需获得列中有大量的非索引列，索引就需要到表中找到相应的列的信息，这就叫回表</strong>。只有非聚簇索引是需要回表的，所以如果你懂得非聚簇索引的存储的结构，你自然就知道为啥需要回表了。</p>","autoDesc":true}');export{p as comp,t as data};
