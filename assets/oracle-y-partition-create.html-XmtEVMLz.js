import{_ as a,c as n,a as i,o as e}from"./app-DP7tPpgD.js";const l={};function r(o,s){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="oracle分区表-自动创建的分区" tabindex="-1"><a class="header-anchor" href="#oracle分区表-自动创建的分区"><span>oracle分区表-自动创建的分区</span></a></h1><h2 id="_1-创建按月分区的分区表" tabindex="-1"><a class="header-anchor" href="#_1-创建按月分区的分区表"><span>1. 创建按月分区的分区表</span></a></h2><h3 id="_1-1-创建分区表" tabindex="-1"><a class="header-anchor" href="#_1-1-创建分区表"><span>1.1 创建分区表</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> TABLE</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> intervalpart</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (c1 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NUMBER</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, c3 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">DATE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">PARTITION</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> BY</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> RANGE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (c3)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   INTERVAL ( NUMTOYMINTERVAL (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;MONTH&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">PARTITION</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> part1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">       VALUES</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> LESS THAN (TO_DATE (</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;01/12/2010&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;MM/DD/YYYY&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    PARTITION</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> part2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">       VALUES</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> LESS THAN (TO_DATE (</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;02/12/2010&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;MM/DD/YYYY&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  )</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：<strong>如果在建Interval分区表是没有把所有的分区写完成，在插入相关数据后</strong>会自动生成分区</strong></p><h3 id="_1-2-查看现在表的分区" tabindex="-1"><a class="header-anchor" href="#_1-2-查看现在表的分区"><span>1.2 查看现在表的分区:</span></a></h3><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> table_name,partition_name </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user_tab_partitions </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> table_name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;INTERVALPART&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130957136.png" alt="image-20201103234450655" tabindex="0" loading="lazy"><figcaption>image-20201103234450655</figcaption></figure><h3 id="_1-3-插入测试数据" tabindex="-1"><a class="header-anchor" href="#_1-3-插入测试数据"><span>1.3 插入测试数据：</span></a></h3><p>向intervalpart 表插入2020.1.1号后的19个月数据</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">begin</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">for</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> i </span><span style="color:#C678DD;--shiki-dark:#C678DD;">in</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> .. </span><span style="color:#D19A66;--shiki-dark:#D19A66;">11</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> loop</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">insert into</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> intervalpart </span><span style="color:#C678DD;--shiki-dark:#C678DD;">values</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(i,add_months(to_date(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;2020-1-1&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;yyyy-mm-dd&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">),i));</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">end</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> loop</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">commit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> end</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>**补充：**add_months()函数获取前一个月或者下一个月的月份， 参数中 负数 代表 往前， 正数 代表 往后。</p><ul><li><p>上一个月</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> to_char(add_months(trunc(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">sysdate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">),-</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">),</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;yyyymm&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dual;</span></span></code></pre></div></li><li><p>下一个月</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> to_char(add_months(trunc(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">sysdate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">),</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">),</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;yyyymm&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dual;</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130957183.png" alt="image-20201103234904783" tabindex="0" loading="lazy"><figcaption>image-20201103234904783</figcaption></figure></li></ul><h3 id="_1-4-观察自动创建的分区" tabindex="-1"><a class="header-anchor" href="#_1-4-观察自动创建的分区"><span>1.4 观察自动创建的分区：</span></a></h3><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> table_name,partition_name </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user_tab_partitions </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> table_name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;INTERVALPART&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130957210.png" alt="image-20201103235039044" tabindex="0" loading="lazy"><figcaption>image-20201103235039044</figcaption></figure><h3 id="_1-5-查看分区内容" tabindex="-1"><a class="header-anchor" href="#_1-5-查看分区内容"><span>1.5 查看分区内容：</span></a></h3><ul><li><p>查询所有</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>select * from INTERVALPART;</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130957269.png" alt="image-20201103235352870" tabindex="0" loading="lazy"><figcaption>image-20201103235352870</figcaption></figure></li><li><p>查询指定分区</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>select * from INTERVALPART partition(part2);</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130957315.png" alt="image-20201103235835676" tabindex="0" loading="lazy"><figcaption>image-20201103235835676</figcaption></figure></li></ul><h2 id="_2-创建一个以天为间隔的分区表" tabindex="-1"><a class="header-anchor" href="#_2-创建一个以天为间隔的分区表"><span>2. 创建一个以天为间隔的分区表：</span></a></h2><h3 id="_2-1-创建分区表" tabindex="-1"><a class="header-anchor" href="#_2-1-创建分区表"><span>2.1 创建分区表：</span></a></h3><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">create</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> table</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> dave</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		id    </span><span style="color:#C678DD;--shiki-dark:#C678DD;">number</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		dt    </span><span style="color:#C678DD;--shiki-dark:#C678DD;">date</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">partition</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> by</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> range</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (dt)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	INTERVAL (NUMTODSINTERVAL(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;day&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	(</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> 		partition</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> p100101 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">values</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> less than (to_date(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;2020-01-01&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;yyyy-mm-dd&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><h3 id="_2-2-查看表分区" tabindex="-1"><a class="header-anchor" href="#_2-2-查看表分区"><span>2.2 查看表分区</span></a></h3><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> table_name,partition_name </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user_tab_partitions </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> table_name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;DAVE&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130957351.png" alt="image-20201104000207367" tabindex="0" loading="lazy"><figcaption>image-20201104000207367</figcaption></figure><h3 id="_2-3-插入测试数据" tabindex="-1"><a class="header-anchor" href="#_2-3-插入测试数据"><span>2.3 插入测试数据</span></a></h3><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">begin</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">for</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> i </span><span style="color:#C678DD;--shiki-dark:#C678DD;">in</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> .. </span><span style="color:#D19A66;--shiki-dark:#D19A66;">12</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> loop</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">insert into</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dave </span><span style="color:#C678DD;--shiki-dark:#C678DD;">values</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(i,trunc(to_date(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;2020-1-1&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;yyyy-mm-dd&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)+i));</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">end</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> loop</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">commit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">end</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h3 id="_2-4-观察自动创建的分区" tabindex="-1"><a class="header-anchor" href="#_2-4-观察自动创建的分区"><span>2.4 观察自动创建的分区：</span></a></h3><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> table_name,partition_name </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> user_tab_partitions </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> table_name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;DAVE&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130957381.png" alt="image-20201104000413036" tabindex="0" loading="lazy"><figcaption>image-20201104000413036</figcaption></figure><h3 id="_2-5-查看分区内容" tabindex="-1"><a class="header-anchor" href="#_2-5-查看分区内容"><span>2.5 查看分区内容：</span></a></h3><ul><li><p>查看所有</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dave ;</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130957412.png" alt="image-20201104000802542" tabindex="0" loading="lazy"><figcaption>image-20201104000802542</figcaption></figure></li><li><p>查看指定分区</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> dave </span><span style="color:#C678DD;--shiki-dark:#C678DD;">partition</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(SYS_P54);</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130957442.png" alt="image-20201104000653069" tabindex="0" loading="lazy"><figcaption>image-20201104000653069</figcaption></figure></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/tianlesoftware/article/details/5662337" target="_blank" rel="noopener noreferrer">分区表 之 Interval分区 和 虚拟列 按星期分区表</a></p>`,33)]))}const t=a(l,[["render",r],["__file","oracle-y-partition-create.html.vue"]]),c=JSON.parse(`{"path":"/posts/Database/ORACLE/oracle-y-partition-create.html","title":"oracle分区表-自动创建的分区","lang":"zh-CN","frontmatter":{"aliases":"oracle分区表-自动创建的分区","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 09:57","description":"oracle分区表-自动创建的分区 1. 创建按月分区的分区表 1.1 创建分区表 注意：如果在建Interval分区表是没有把所有的分区写完成，在插入相关数据后会自动生成分区 1.2 查看现在表的分区: image-20201103234450655image-20201103234450655 1.3 插入测试数据： 向intervalpart 表...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/ORACLE/oracle-y-partition-create.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"oracle分区表-自动创建的分区"}],["meta",{"property":"og:description","content":"oracle分区表-自动创建的分区 1. 创建按月分区的分区表 1.1 创建分区表 注意：如果在建Interval分区表是没有把所有的分区写完成，在插入相关数据后会自动生成分区 1.2 查看现在表的分区: image-20201103234450655image-20201103234450655 1.3 插入测试数据： 向intervalpart 表..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130957136.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"oracle分区表-自动创建的分区\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130957136.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130957183.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130957210.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130957269.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130957315.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130957351.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130957381.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130957412.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130957442.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 创建按月分区的分区表","slug":"_1-创建按月分区的分区表","link":"#_1-创建按月分区的分区表","children":[{"level":3,"title":"1.1 创建分区表","slug":"_1-1-创建分区表","link":"#_1-1-创建分区表","children":[]},{"level":3,"title":"1.2 查看现在表的分区:","slug":"_1-2-查看现在表的分区","link":"#_1-2-查看现在表的分区","children":[]},{"level":3,"title":"1.3 插入测试数据：","slug":"_1-3-插入测试数据","link":"#_1-3-插入测试数据","children":[]},{"level":3,"title":"1.4 观察自动创建的分区：","slug":"_1-4-观察自动创建的分区","link":"#_1-4-观察自动创建的分区","children":[]},{"level":3,"title":"1.5 查看分区内容：","slug":"_1-5-查看分区内容","link":"#_1-5-查看分区内容","children":[]}]},{"level":2,"title":"2. 创建一个以天为间隔的分区表：","slug":"_2-创建一个以天为间隔的分区表","link":"#_2-创建一个以天为间隔的分区表","children":[{"level":3,"title":"2.1 创建分区表：","slug":"_2-1-创建分区表","link":"#_2-1-创建分区表","children":[]},{"level":3,"title":"2.2 查看表分区","slug":"_2-2-查看表分区","link":"#_2-2-查看表分区","children":[]},{"level":3,"title":"2.3 插入测试数据","slug":"_2-3-插入测试数据","link":"#_2-3-插入测试数据","children":[]},{"level":3,"title":"2.4 观察自动创建的分区：","slug":"_2-4-观察自动创建的分区","link":"#_2-4-观察自动创建的分区","children":[]},{"level":3,"title":"2.5 查看分区内容：","slug":"_2-5-查看分区内容","link":"#_2-5-查看分区内容","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.66,"words":499},"filePathRelative":"posts/Database/ORACLE/oracle-y-partition-create.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 创建按月分区的分区表</h2>\\n<h3>1.1 创建分区表</h3>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">CREATE</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> TABLE</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> intervalpart</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (c1 </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">NUMBER</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, c3 </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">DATE</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">PARTITION</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> BY</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> RANGE</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (c3)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">   INTERVAL ( NUMTOYMINTERVAL (</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">1</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'MONTH'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) )</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">   (</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">PARTITION</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> part1</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">       VALUES</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> LESS THAN (TO_DATE (</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'01/12/2010'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'MM/DD/YYYY'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)),</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">    PARTITION</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> part2</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">       VALUES</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> LESS THAN (TO_DATE (</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'02/12/2010'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'MM/DD/YYYY'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">))</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  )</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as comp,c as data};
