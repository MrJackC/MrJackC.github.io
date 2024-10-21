import{_ as a,c as n,a as i,o as l}from"./app-BhoNqsD-.js";const o={};function p(e,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="awk强大的文本分析命令" tabindex="-1"><a class="header-anchor" href="#awk强大的文本分析命令"><span>awk强大的文本分析命令</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1 简介</span></a></h2><p>awk是一个强大的文本分析工具，相对于grep的查找，sed的编辑，awk在其对数据分析并生成报告时，显得尤为强大。简单来说awk就是把文件逐行的读入，以空格为默认分隔符将每行切片，切开的部分再进行各种分析处理。</p><h2 id="_2-语法" tabindex="-1"><a class="header-anchor" href="#_2-语法"><span>2 语法</span></a></h2><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">awk</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;{pattern + action}&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;"> {filenames}</span></span></code></pre></div><p>尽管操作可能会很复杂，但语法总是这样，其中 pattern 表示 AWK 在数据中查找的内容，而 action 是在找到匹配内容时所执行的一系列命令。花括号（{}）不需要在程序中始终出现，但它们用于根据特定的模式对一系列指令进行分组。 pattern就是要表示的正则表达式，用斜杠括起来。</p><p>awk语言的最基本功能是在文件或者字符串中基于指定规则浏览和抽取信息，awk抽取信息后，才能进行其他文本操作。完整的awk脚本通常用来格式化文本文件中的信息。</p><p>通常，awk是以文件的一行为处理单位的。awk每接收文件的一行，然后执行相应的命令，来处理文本。</p><h2 id="_3-awk入门" tabindex="-1"><a class="header-anchor" href="#_3-awk入门"><span>3 awk入门</span></a></h2><p>假设last -n 5的输出如下：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@iZwz914d1peizv4h7laju4Z ~]#  last -n 5 </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 仅取出前五行</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root</span><span style="color:#98C379;--shiki-dark:#98C379;">     pts/3</span><span style="color:#D19A66;--shiki-dark:#D19A66;">        223.104.6.18</span><span style="color:#98C379;--shiki-dark:#98C379;">     Thu</span><span style="color:#98C379;--shiki-dark:#98C379;"> Apr</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 21</span><span style="color:#98C379;--shiki-dark:#98C379;"> 17:22</span><span style="color:#98C379;--shiki-dark:#98C379;">   still</span><span style="color:#98C379;--shiki-dark:#98C379;"> logged</span><span style="color:#98C379;--shiki-dark:#98C379;"> in</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root</span><span style="color:#98C379;--shiki-dark:#98C379;">     pts/2</span><span style="color:#D19A66;--shiki-dark:#D19A66;">        223.104.6.18</span><span style="color:#98C379;--shiki-dark:#98C379;">     Thu</span><span style="color:#98C379;--shiki-dark:#98C379;"> Apr</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 21</span><span style="color:#98C379;--shiki-dark:#98C379;"> 17:22</span><span style="color:#98C379;--shiki-dark:#98C379;">   still</span><span style="color:#98C379;--shiki-dark:#98C379;"> logged</span><span style="color:#98C379;--shiki-dark:#98C379;"> in</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root</span><span style="color:#98C379;--shiki-dark:#98C379;">     pts/3</span><span style="color:#D19A66;--shiki-dark:#D19A66;">        223.104.6.18</span><span style="color:#98C379;--shiki-dark:#98C379;">     Thu</span><span style="color:#98C379;--shiki-dark:#98C379;"> Apr</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 21</span><span style="color:#98C379;--shiki-dark:#98C379;"> 16:30</span><span style="color:#98C379;--shiki-dark:#98C379;"> -</span><span style="color:#98C379;--shiki-dark:#98C379;"> 17:13</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  (00:43)    </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root</span><span style="color:#98C379;--shiki-dark:#98C379;">     pts/2</span><span style="color:#D19A66;--shiki-dark:#D19A66;">        223.104.6.18</span><span style="color:#98C379;--shiki-dark:#98C379;">     Thu</span><span style="color:#98C379;--shiki-dark:#98C379;"> Apr</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 21</span><span style="color:#98C379;--shiki-dark:#98C379;"> 16:30</span><span style="color:#98C379;--shiki-dark:#98C379;"> -</span><span style="color:#98C379;--shiki-dark:#98C379;"> 17:13</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  (00:43)    </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root</span><span style="color:#98C379;--shiki-dark:#98C379;">     pts/3</span><span style="color:#D19A66;--shiki-dark:#D19A66;">        223.104.6.12</span><span style="color:#98C379;--shiki-dark:#98C379;">     Tue</span><span style="color:#98C379;--shiki-dark:#98C379;"> Apr</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 19</span><span style="color:#98C379;--shiki-dark:#98C379;"> 17:35</span><span style="color:#98C379;--shiki-dark:#98C379;"> -</span><span style="color:#98C379;--shiki-dark:#98C379;"> 17:52</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  (00:17)</span></span></code></pre></div><p>如果只是显示最近登录的5个帐号：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@iZwz914d1peizv4h7laju4Z ~]# last -n 5 | </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">awk</span><span style="color:#98C379;--shiki-dark:#98C379;">  &#39;{print $1}&#39;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root</span></span></code></pre></div><p>awk工作流程是这样的：读入有&#39;\\n&#39;换行符分割的一条记录，然后将记录按指定的域分隔符划分域，填充域，0则表示所有域,0则表示所有域,1表示第一个域,𝑛表示第𝑛个域。默认域分隔符是&quot;空白键&quot;或&quot;[𝑡𝑎𝑏]键&quot;,所以n表示第n个域。默认域分隔符是&quot;空白键&quot;或&quot;[tab]键&quot;,所以1表示登录用户，$3表示登录用户ip,以此类推。</p><p>如果只是显示/etc/passwd的账户：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@iZwz914d1peizv4h7laju4Z ~]# cat /etc/passwd |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">awk</span><span style="color:#D19A66;--shiki-dark:#D19A66;">  -F</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;:&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;">  &#39;{print $1}&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">bin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">daemon</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">adm</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">lp</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sync</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">shutdown</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">halt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mail</span></span></code></pre></div><p>这种是awk+action的示例，每行都会执行action{print $1}。</p><p><strong>-F指定域分隔符为&#39;:&#39;。</strong></p><p>如果只是显示/etc/passwd的账户和账户对应的shell,而账户与shell之间以tab键分割：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@iZwz914d1peizv4h7laju4Z ~]# cat /etc/passwd |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">awk</span><span style="color:#D19A66;--shiki-dark:#D19A66;">  -F</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;:&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;">  &#39;{print $1&quot;\\t&quot;$7}&#39;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root</span><span style="color:#98C379;--shiki-dark:#98C379;">    /bin/bash</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">bin</span><span style="color:#98C379;--shiki-dark:#98C379;">     /sbin/nologin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">daemon</span><span style="color:#98C379;--shiki-dark:#98C379;">  /sbin/nologin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">adm</span><span style="color:#98C379;--shiki-dark:#98C379;">     /sbin/nologin</span></span></code></pre></div><p>如果只是显示/etc/passwd的账户和账户对应的shell,而账户与shell之间以逗号分割,而且在所有行添加列名name,shell,在最后一行添加&quot;blue,/bin/nosh&quot;：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@iZwz914d1peizv4h7laju4Z ~]# cat /etc/passwd |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">awk</span><span style="color:#D19A66;--shiki-dark:#D19A66;">  -F</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;:&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;">  &#39;BEGIN {print &quot;name,shell&quot;}  {print $1&quot;,&quot;$7} END {print &quot;blue,/bin/nosh&quot;}&#39;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">name,shell</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root,/bin/bash</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">bin,/sbin/nologin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">daemon,/sbin/nologin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">adm,/sbin/nologin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">lp,/sbin/nologin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sync,/bin/sync</span></span></code></pre></div><p>awk工作流程是这样的：先执行BEGING，然后读取文件，读入有/n换行符分割的一条记录，然后将记录按指定的域分隔符划分域，填充域，0则表示所有域,0则表示所有域,1表示第一个域,$n表示第n个域,随后开始执行模式所对应的动作action。接着开始读入第二条记录······直到所有的记录都读完，最后执行END操作。</p><p>搜索/etc/passwd有root关键字的所有行：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@iZwz914d1peizv4h7laju4Z ~]# awk -F: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;/root/{print $7}&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> /etc/passwd   </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">/bin/bash</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">/sbin/nologin</span></span></code></pre></div><p>这里指定了action{print $7}。</p><h2 id="_4-awk-进阶" tabindex="-1"><a class="header-anchor" href="#_4-awk-进阶"><span>4 awk 进阶</span></a></h2><h3 id="_4-1-内置变量" tabindex="-1"><a class="header-anchor" href="#_4-1-内置变量"><span>4.1 内置变量</span></a></h3><p>awk有许多内置变量用来设置环境信息，这些变量可以被改变，下面给出了最常用的一些变量。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">ARGC</span><span style="color:#98C379;--shiki-dark:#98C379;">               命令行参数个数</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">ARGV</span><span style="color:#98C379;--shiki-dark:#98C379;">               命令行参数排列</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">ENVIRON</span><span style="color:#98C379;--shiki-dark:#98C379;">            支持队列中系统环境变量的使用</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">FILENAME</span><span style="color:#98C379;--shiki-dark:#98C379;">           awk浏览的文件名</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">FNR</span><span style="color:#98C379;--shiki-dark:#98C379;">                浏览文件的记录数</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">FS</span><span style="color:#98C379;--shiki-dark:#98C379;">                 设置输入域分隔符，等价于命令行</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -F选项</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">NF</span><span style="color:#98C379;--shiki-dark:#98C379;">                 浏览记录的域的个数</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">NR</span><span style="color:#98C379;--shiki-dark:#98C379;">                 已读的记录数</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">OFS</span><span style="color:#98C379;--shiki-dark:#98C379;">                输出域分隔符</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">ORS</span><span style="color:#98C379;--shiki-dark:#98C379;">                输出记录分隔符</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">RS</span><span style="color:#98C379;--shiki-dark:#98C379;">                 控制记录分隔符</span></span></code></pre></div><p>此外,0变量是指整条记录。0变量是指整条记录。1表示当前行的第一个域,$2表示当前行的第二个域,......以此类推。</p><p>统计/etc/passwd:文件名，每行的行号，每行的列数，对应的完整行内容:</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@iZwz914d1peizv4h7laju4Z ~]# awk  -F </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;:&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;">  &#39;{print &quot;filename:&quot; FILENAME &quot;,linenumber:&quot; NR &quot;,columns:&quot; NF &quot;,linecontent:&quot;$0}&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> /etc/passwd</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">filename:/etc/passwd,linenumber:1,columns:7,linecontent:root:x:0:0:root:/root:/bin/bash</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">filename:/etc/passwd,linenumber:2,columns:7,linecontent:bin:x:1:1:bin:/bin:/sbin/nologin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">filename:/etc/passwd,linenumber:3,columns:7,linecontent:daemon:x:2:2:daemon:/sbin:/sbin/nologin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">filename:/etc/passwd,linenumber:4,columns:7,linecontent:adm:x:3:4:adm:/var/adm:/sbin/nologin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">filename:/etc/passwd,linenumber:5,columns:7,linecontent:lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">filename:/etc/passwd,linenumber:6,columns:7,linecontent:sync:x:5:0:sync:/sbin:/bin/sync</span></span></code></pre></div><h3 id="_4-2-变量和赋值" tabindex="-1"><a class="header-anchor" href="#_4-2-变量和赋值"><span>4.2 变量和赋值</span></a></h3><p>除了awk的内置变量，awk还可以自定义变量。</p><p>下面统计/etc/passwd的账户人数：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">awk</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;{count++;print $0;} END{print &quot;user count is &quot;, count}&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;"> /etc/passwd</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root:x:0:0:root:/root:/bin/bash</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">...</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">user</span><span style="color:#98C379;--shiki-dark:#98C379;"> count</span><span style="color:#98C379;--shiki-dark:#98C379;"> is</span><span style="color:#D19A66;--shiki-dark:#D19A66;">  25</span></span></code></pre></div><p>count是自定义变量。之前的action{}里都是只有一个print,其实print只是一个语句，而action{}可以有多个语句，以;号隔开。</p><p>这里没有初始化count，虽然默认是0，但是妥当的做法还是初始化为0:</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">awk</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;BEGIN {count=0;print &quot;[start]user count is &quot;, count} {count=count+1;print $0;} END{print &quot;[end]user count is &quot;, count}&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;"> /etc/passwd</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[start]user count is  0</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root:x:0:0:root:/root:/bin/bash</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">...</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">nexus:x:1001:1001::/home/nexus:/bin/bash</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[end]user count is  25</span></span></code></pre></div><h3 id="_4-3-条件语句" tabindex="-1"><a class="header-anchor" href="#_4-3-条件语句"><span>4.3 条件语句</span></a></h3><p>awk中的条件语句是从C语言中借鉴来的，用法与C语言一致。</p><p>统计某个文件夹下的文件占用的字节数,过滤4096大小的文件(一般都是文件夹):</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#ls -l |awk &#39;BEGIN {size=0;print &quot;[start]size is &quot;, size} {if($5!=4096){size=size+$5;}} END{print &quot;[end]size is &quot;, size/1024/1024,&quot;M&quot;}&#39; </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[end]size is  8.22339 M</span></span></code></pre></div><h3 id="_4-4-循环语句" tabindex="-1"><a class="header-anchor" href="#_4-4-循环语句"><span>4.4 循环语句</span></a></h3><p>awk中的循环语句同样借鉴于C语言，支持while、do/while、for、break、continue，这些关键字的语义和C语言中的语义完全相同。</p><h3 id="_4-5-数组" tabindex="-1"><a class="header-anchor" href="#_4-5-数组"><span>4.5 数组</span></a></h3><p>因为awk中数组的下标可以是数字和字母，数组的下标通常被称为关键字(key)。值和关键字都存储在内部的一张针对key/value应用hash的表格里。由于hash不是顺序存储，因此在显示数组内容时会发现，它们并不是按照你预料的顺序显示出来的。数组和变量一样，都是在使用时自动创建的，awk也同样会自动判断其存储的是数字还是字符串。一般而言，awk中的数组用来从记录中收集信息，可以用于计算总和、统计单词以及跟踪模板被匹配的次数等等。</p><p>显示/etc/passwd的账户：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#awk -F &#39;:&#39; &#39;BEGIN {count=0;} {name[count] = $1;count++;}; END{for (i = 0; i &lt; NR; i++) print i, name[i]}&#39; /etc/passwd</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">0</span><span style="color:#98C379;--shiki-dark:#98C379;"> root</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#98C379;--shiki-dark:#98C379;"> daemon</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#98C379;--shiki-dark:#98C379;"> bin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span><span style="color:#98C379;--shiki-dark:#98C379;"> sys</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4</span><span style="color:#98C379;--shiki-dark:#98C379;"> sync</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">5</span><span style="color:#98C379;--shiki-dark:#98C379;"> games</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">......</span></span></code></pre></div><p>这里使用for循环遍历数组。</p>`,51)]))}const t=a(o,[["render",p],["__file","linux-k-awk.html.vue"]]),k=JSON.parse(`{"path":"/posts/Linux/linux-k-awk.html","title":"awk强大的文本分析命令","lang":"zh-CN","frontmatter":{"description":"awk强大的文本分析命令 1 简介 awk是一个强大的文本分析工具，相对于grep的查找，sed的编辑，awk在其对数据分析并生成报告时，显得尤为强大。简单来说awk就是把文件逐行的读入，以空格为默认分隔符将每行切片，切开的部分再进行各种分析处理。 2 语法 尽管操作可能会很复杂，但语法总是这样，其中 pattern 表示 AWK 在数据中查找的内容，...","head":[["meta",{"property":"og:url","content":"https://mrjason.me/posts/Linux/linux-k-awk.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"awk强大的文本分析命令"}],["meta",{"property":"og:description","content":"awk强大的文本分析命令 1 简介 awk是一个强大的文本分析工具，相对于grep的查找，sed的编辑，awk在其对数据分析并生成报告时，显得尤为强大。简单来说awk就是把文件逐行的读入，以空格为默认分隔符将每行切片，切开的部分再进行各种分析处理。 2 语法 尽管操作可能会很复杂，但语法总是这样，其中 pattern 表示 AWK 在数据中查找的内容，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"awk强大的文本分析命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjason.me\\"}]}"]]},"headers":[{"level":2,"title":"1 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2 语法","slug":"_2-语法","link":"#_2-语法","children":[]},{"level":2,"title":"3 awk入门","slug":"_3-awk入门","link":"#_3-awk入门","children":[]},{"level":2,"title":"4 awk 进阶","slug":"_4-awk-进阶","link":"#_4-awk-进阶","children":[{"level":3,"title":"4.1 内置变量","slug":"_4-1-内置变量","link":"#_4-1-内置变量","children":[]},{"level":3,"title":"4.2 变量和赋值","slug":"_4-2-变量和赋值","link":"#_4-2-变量和赋值","children":[]},{"level":3,"title":"4.3 条件语句","slug":"_4-3-条件语句","link":"#_4-3-条件语句","children":[]},{"level":3,"title":"4.4 循环语句","slug":"_4-4-循环语句","link":"#_4-4-循环语句","children":[]},{"level":3,"title":"4.5 数组","slug":"_4-5-数组","link":"#_4-5-数组","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.86,"words":1759},"filePathRelative":"posts/Linux/linux-k-awk.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1 简介</h2>\\n<p>awk是一个强大的文本分析工具，相对于grep的查找，sed的编辑，awk在其对数据分析并生成报告时，显得尤为强大。简单来说awk就是把文件逐行的读入，以空格为默认分隔符将每行切片，切开的部分再进行各种分析处理。</p>\\n<h2>2 语法</h2>\\n<div class=\\"language-bash\\" data-ext=\\"bash\\" data-title=\\"bash\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">awk</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> '{pattern + action}'</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> {filenames}</span></span></code></pre>\\n</div>","autoDesc":true}`);export{t as comp,k as data};
