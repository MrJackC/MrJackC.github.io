import{_ as a,c as n,a as i,o as l}from"./app-fWubcX7c.js";const p={};function e(o,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="cut切分命令" tabindex="-1"><a class="header-anchor" href="#cut切分命令"><span>cut切分命令</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1 简介</span></a></h2><p>cut 命令从文件的每一行剪切字节、字符和字段并将这些字节、字符和字段写至标准输出。</p><blockquote><p>如果不指定 File 参数，cut 命令将读取标准输入。必须指定 -b、-c 或 -f 标志之一。</p></blockquote><h2 id="_2-语法" tabindex="-1"><a class="header-anchor" href="#_2-语法"><span>2 语法</span></a></h2><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cut</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  [-bn] [file] 或 cut [-c] [file]  或  cut [-df] [file]</span></span></code></pre></div><h2 id="_3-参数" tabindex="-1"><a class="header-anchor" href="#_3-参数"><span>3 参数</span></a></h2><ul><li>**-b ：**以字节为单位进行分割。这些字节位置将忽略多字节字符边界，除非也指定了 -n 标志。</li><li>**-c ：**以字符为单位进行分割。</li><li>**-d ：**自定义分隔符，默认为制表符。</li><li>**-f ：**与-d一起使用，指定显示哪个区域。</li><li>**-n ：**取消分割多字节字符。仅和 -b 标志一起使用。如果字符的最后一个字节落在由 -b 标志的 List 参数指示的<br>范围之内，该字符将被写出；否则，该字符将被排除。</li></ul><h2 id="_4-如何定位到剪切内容" tabindex="-1"><a class="header-anchor" href="#_4-如何定位到剪切内容"><span>4 如何定位到剪切内容</span></a></h2><p>cut命令主要是接受三个定位方法：</p><p>第一，字节（bytes），用选项-b</p><p>第二，字符（characters），用选项-c</p><p>第三，域（fields），用选项-f</p><h3 id="_4-1-以-字节-为单位切分" tabindex="-1"><a class="header-anchor" href="#_4-1-以-字节-为单位切分"><span>4.1 <strong>以“字节”为单位切分</strong></span></a></h3><p>举个例子吧，当你执行who命令时，会输出类似如下的内容：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">who</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root</span><span style="color:#98C379;--shiki-dark:#98C379;">     pts/2</span><span style="color:#98C379;--shiki-dark:#98C379;">        2022-04-24</span><span style="color:#98C379;--shiki-dark:#98C379;"> 16:17</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (223.104.6.4)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root</span><span style="color:#98C379;--shiki-dark:#98C379;">     pts/3</span><span style="color:#98C379;--shiki-dark:#98C379;">        2022-04-24</span><span style="color:#98C379;--shiki-dark:#98C379;"> 16:17</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (223.104.6.4)</span></span></code></pre></div><p>如果我们想提取每一行的第4个字节，就这样：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>who|cut -b 4</span></span>
<span class="line"><span>t</span></span>
<span class="line"><span>t</span></span></code></pre></div><p><strong>如果“字节”定位中，我想提取第1，第2、第3和第10个字节，怎么办?</strong></p><p>-b支持形如3-5的写法，而且多个定位之间用逗号隔开就成了。看看例子吧：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">who</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cut</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -b</span><span style="color:#98C379;--shiki-dark:#98C379;"> 1-3,10</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">roop</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">roop</span></span></code></pre></div><p>但有一点要注意，cut命令如果使用了-b选项，那么执行此命令时，cut会先把-b后面所有的定位进行从小到大排序，然后再提取。因此这跟我们书写的顺序没有关系。这个例子就可以说明这个问题：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>who|cut -b 10,1-3</span></span>
<span class="line"><span>roop</span></span>
<span class="line"><span>roop</span></span></code></pre></div><h4 id="_4-1-1-还有哪些类似-3-5-这样的小技巧-列举一下吧" tabindex="-1"><a class="header-anchor" href="#_4-1-1-还有哪些类似-3-5-这样的小技巧-列举一下吧"><span>4.1.1　<strong>还有哪些类似“3-5”这样的小技巧，列举一下吧!</strong></span></a></h4><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@iZwz914d1peizv4h7laju4Z ~]# who|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cut</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -b</span><span style="color:#98C379;--shiki-dark:#98C379;"> 3-</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">ot</span><span style="color:#98C379;--shiki-dark:#98C379;">     pts/2</span><span style="color:#98C379;--shiki-dark:#98C379;">        2022-04-24</span><span style="color:#98C379;--shiki-dark:#98C379;"> 16:17</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (223.104.6.4)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">ot</span><span style="color:#98C379;--shiki-dark:#98C379;">     pts/3</span><span style="color:#98C379;--shiki-dark:#98C379;">        2022-04-24</span><span style="color:#98C379;--shiki-dark:#98C379;"> 16:17</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (223.104.6.4)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@iZwz914d1peizv4h7laju4Z ~]# who</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root</span><span style="color:#98C379;--shiki-dark:#98C379;">     pts/2</span><span style="color:#98C379;--shiki-dark:#98C379;">        2022-04-24</span><span style="color:#98C379;--shiki-dark:#98C379;"> 16:17</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (223.104.6.4)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root</span><span style="color:#98C379;--shiki-dark:#98C379;">     pts/3</span><span style="color:#98C379;--shiki-dark:#98C379;">        2022-04-24</span><span style="color:#98C379;--shiki-dark:#98C379;"> 16:17</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (223.104.6.4)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@iZwz914d1peizv4h7laju4Z ~]# who|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cut</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -b</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -3</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">roo</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">roo</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@iZwz914d1peizv4h7laju4Z ~]# who|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cut</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -b</span><span style="color:#98C379;--shiki-dark:#98C379;"> 3-</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">ot</span><span style="color:#98C379;--shiki-dark:#98C379;">     pts/2</span><span style="color:#98C379;--shiki-dark:#98C379;">        2022-04-24</span><span style="color:#98C379;--shiki-dark:#98C379;"> 16:17</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (223.104.6.4)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">ot</span><span style="color:#98C379;--shiki-dark:#98C379;">     pts/3</span><span style="color:#98C379;--shiki-dark:#98C379;">        2022-04-24</span><span style="color:#98C379;--shiki-dark:#98C379;"> 16:17</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (223.104.6.4)</span></span></code></pre></div><p>想必你也看到了，-3表示从第一个字节到第三个字节，而3-表示从第三个字节到行尾。如果你细心，你可以看到这两种情况下，都包括了第三个字节“c”。如果我执行who|cut -b -3,3-，你觉得会如何呢？答案是输出整行，不会出现连续两个重叠的c的。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> who</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cut</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -b</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -3,3-</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root</span><span style="color:#98C379;--shiki-dark:#98C379;">     pts/2</span><span style="color:#98C379;--shiki-dark:#98C379;">        2022-04-24</span><span style="color:#98C379;--shiki-dark:#98C379;"> 16:17</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (223.104.6.4)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root</span><span style="color:#98C379;--shiki-dark:#98C379;">     pts/3</span><span style="color:#98C379;--shiki-dark:#98C379;">        2022-04-24</span><span style="color:#98C379;--shiki-dark:#98C379;"> 16:17</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (223.104.6.4)</span></span></code></pre></div><h3 id="_4-2-以-字符-为单位切分" tabindex="-1"><a class="header-anchor" href="#_4-2-以-字符-为单位切分"><span>4.2 以&quot;字符&quot;为单位切分</span></a></h3><p>下面例子你似曾相识，提取第1，第2，第3和第10个字符：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># who|cut -c 1-3,10</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">roop</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">roop</span></span></code></pre></div><p>不过，看着怎么和-b没有什么区别啊？莫非-b和-c作用一样? 其实不然，看似相同，只是因为这个例子举的不好，who输出的都是单字节字符，所以用-b和-c没有区别，如果你提取中文，区别就看出来了，来，看看中文提取的情况：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[root@iZwz914d1peizv4h7laju4Z ~]# cat cut_ch.txt</span></span>
<span class="line"><span>星期一</span></span>
<span class="line"><span>星期二</span></span>
<span class="line"><span>星期三</span></span>
<span class="line"><span>星期四</span></span>
<span class="line"><span>[root@iZwz914d1peizv4h7laju4Z ~]# cut -b 3 cut_ch.txt</span></span>
<span class="line"><span>�</span></span>
<span class="line"><span>�</span></span>
<span class="line"><span>�</span></span>
<span class="line"><span>�</span></span>
<span class="line"><span>[root@iZwz914d1peizv4h7laju4Z ~]# cut -c 3 cut_ch.txt</span></span>
<span class="line"><span>一</span></span>
<span class="line"><span>二</span></span>
<span class="line"><span>三</span></span>
<span class="line"><span>四</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看到了吧，用-c则会以字符为单位，输出正常；而-b只会傻傻的以字节（8位二进制位）来计算，输出就是乱码。既然提到了这个知识点，就再补充一句，如果你学有余力，就提高一下。当遇到多字节字符时，可以使用-n选项，-n用于告诉cut不要将多字节字符拆开。</p><blockquote><p>跟文档不太一样</p></blockquote><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cat</span><span style="color:#98C379;--shiki-dark:#98C379;"> cut_ch.txt</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cut</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -b</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">�</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">�</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">�</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">�</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@iZwz914d1peizv4h7laju4Z ~]# cat cut_ch.txt |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cut</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -nb</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">期</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">期</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">期</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">期</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@iZwz914d1peizv4h7laju4Z ~]# cat cut_ch.txt |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cut</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -nb</span><span style="color:#98C379;--shiki-dark:#98C379;"> 1,2,3</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">星期一</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">星期二</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">星期三</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">星期四</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-以-域-为单位切分" tabindex="-1"><a class="header-anchor" href="#_4-3-以-域-为单位切分"><span>4.3 以&quot;域&quot;为单位切分</span></a></h3><p>为什么会有“域”的提取呢，因为刚才提到的-b和-c只能在固定格式的文档中提取信息，而对于非固定格式的信息则束手无策。这时候“域”就派上用场了。如果你观察过/etc/passwd文件，你会发现，它并不像who的输出信息那样具有固定格式，而是比较零散的排放。但是，冒号在这个文件的每一行中都起到了非常重要的作用，冒号用来隔开每一个项。</p><p>我们很幸运，cut命令提供了这样的提取方式，具体的说就是设置“间隔符”，再设置“提取第几个域”，就OK了！</p><p>以/etc/passwd的前五行内容为例：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@iZwz914d1peizv4h7laju4Z ~]#  cat /etc/passwd|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">head</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -n</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 5</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root:x:0:0:root:/root:/bin/bash</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">bin:x:1:1:bin:/bin:/sbin/nologin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">daemon:x:2:2:daemon:/sbin:/sbin/nologin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">adm:x:3:4:adm:/var/adm:/sbin/nologin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@iZwz914d1peizv4h7laju4Z ~]# cat /etc/passwd|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">head</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -n</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cut</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -d</span><span style="color:#98C379;--shiki-dark:#98C379;"> :</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -f</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">bin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">daemon</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">adm</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">lp</span></span></code></pre></div><p>看到了吧，用-d来设置间隔符为冒号，然后用-f来设置我要取的是第一个域，再按回车，所有的用户名就都列出来了！呵呵 有成就感吧！</p><p>当然，在设定-f时，也可以使用例如3-5或者4-类似的格式：</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@iZwz914d1peizv4h7laju4Z ~]# cat /etc/passwd|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">head</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -n</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cut</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -d</span><span style="color:#98C379;--shiki-dark:#98C379;"> :</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -f</span><span style="color:#98C379;--shiki-dark:#98C379;"> 1,3-5</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root:0:0:root</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">bin:1:1:bin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">daemon:2:2:daemon</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">adm:3:4:adm</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">lp:4:7:lp</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@iZwz914d1peizv4h7laju4Z ~]# cat /etc/passwd|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">head</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -n</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cut</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -d</span><span style="color:#98C379;--shiki-dark:#98C379;"> :</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -f</span><span style="color:#98C379;--shiki-dark:#98C379;"> 1,3-5,7</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root:0:0:root:/bin/bash</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">bin:1:1:bin:/sbin/nologin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">daemon:2:2:daemon:/sbin/nologin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">adm:3:4:adm:/sbin/nologin</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">lp:4:7:lp:/sbin/nologin</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@iZwz914d1peizv4h7laju4Z ~]# cat /etc/passwd|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">head</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -n</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cut</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -d</span><span style="color:#98C379;--shiki-dark:#98C379;"> :</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -f</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">root:x</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">bin:x</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">daemon:x</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">adm:x</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">lp:x</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-cut的弊端" tabindex="-1"><a class="header-anchor" href="#_4-4-cut的弊端"><span>4.4 cut的弊端</span></a></h3><p><strong>如果遇到空格和制表符时，怎么分辨呢？我觉得有点乱，怎么办？</strong></p><p>有时候制表符确实很难辨认，有一个方法可以看出一段空格到底是由若干个空格组成的还是由一个制表符组成的。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>cat tab_space.txt</span></span>
<span class="line"><span>this is tab finish.</span></span>
<span class="line"><span>this is several space      finish.</span></span>
<span class="line"><span>$ sed -n l tab_space.txt</span></span>
<span class="line"><span>this is tab\\tfinish.$</span></span>
<span class="line"><span>this is several space      finish.$</span></span></code></pre></div><p>看到了吧，如果是制表符（TAB），那么会显示为\\t符号，如果是空格，就会原样显示。通过此方法即可以判断制表符和空格了。注意，上面sed -n后面的字符是L的小写字母哦，不要看错。</p><p><strong>我应该在cut -d中用什么符号来设定制表符或空格呢?</strong></p><p>其实cut的-d选项的默认间隔符就是制表符，所以当你就是要使用制表符的时候，完全就可以省略-d选项，而直接用－f来取域就可以了。如果你设定一个空格为间隔符，那么就这样：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>$cat tab_space.txt |cut -d &#39; &#39; -f 1</span></span>
<span class="line"><span>this</span></span>
<span class="line"><span>this</span></span></code></pre></div><p>注意，两个单引号之间可确实要有一个空格哦，不能偷懒。而且，你只能在-d后面设置一个空格，可不许设置多个空格，因为cut只允许间隔符是一个字符。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>$ cat tab_space.txt |cut -d &#39; &#39; -f 1</span></span>
<span class="line"><span>cut: the delimiter must be a single character</span></span>
<span class="line"><span>Try \`cut --help&#39; for more information.</span></span></code></pre></div><p>此外，cut在处理多空格的时候会更麻烦，因为<strong>cut只擅长处理“以一个字符间隔”的文本内容。</strong></p>`,54)]))}const c=a(p,[["render",e],["__file","linux-k-cut.html.vue"]]),t=JSON.parse('{"path":"/posts/Linux/linux-k-cut.html","title":"cut切分命令","lang":"zh-CN","frontmatter":{"description":"cut切分命令 1 简介 cut 命令从文件的每一行剪切字节、字符和字段并将这些字节、字符和字段写至标准输出。 如果不指定 File 参数，cut 命令将读取标准输入。必须指定 -b、-c 或 -f 标志之一。 2 语法 3 参数 **-b ：**以字节为单位进行分割。这些字节位置将忽略多字节字符边界，除非也指定了 -n 标志。 **-c ：**以字符...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Linux/linux-k-cut.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"cut切分命令"}],["meta",{"property":"og:description","content":"cut切分命令 1 简介 cut 命令从文件的每一行剪切字节、字符和字段并将这些字节、字符和字段写至标准输出。 如果不指定 File 参数，cut 命令将读取标准输入。必须指定 -b、-c 或 -f 标志之一。 2 语法 3 参数 **-b ：**以字节为单位进行分割。这些字节位置将忽略多字节字符边界，除非也指定了 -n 标志。 **-c ：**以字符..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cut切分命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2 语法","slug":"_2-语法","link":"#_2-语法","children":[]},{"level":2,"title":"3 参数","slug":"_3-参数","link":"#_3-参数","children":[]},{"level":2,"title":"4 如何定位到剪切内容","slug":"_4-如何定位到剪切内容","link":"#_4-如何定位到剪切内容","children":[{"level":3,"title":"4.1 以“字节”为单位切分","slug":"_4-1-以-字节-为单位切分","link":"#_4-1-以-字节-为单位切分","children":[]},{"level":3,"title":"4.2 以\\"字符\\"为单位切分","slug":"_4-2-以-字符-为单位切分","link":"#_4-2-以-字符-为单位切分","children":[]},{"level":3,"title":"4.3 以\\"域\\"为单位切分","slug":"_4-3-以-域-为单位切分","link":"#_4-3-以-域-为单位切分","children":[]},{"level":3,"title":"4.4 cut的弊端","slug":"_4-4-cut的弊端","link":"#_4-4-cut的弊端","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.12,"words":1837},"filePathRelative":"posts/Linux/linux-k-cut.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1 简介</h2>\\n<p>cut 命令从文件的每一行剪切字节、字符和字段并将这些字节、字符和字段写至标准输出。</p>\\n<blockquote>\\n<p>如果不指定 File 参数，cut 命令将读取标准输入。必须指定 -b、-c 或 -f 标志之一。</p>\\n</blockquote>\\n<h2>2 语法</h2>\\n<div class=\\"language-bash\\" data-ext=\\"bash\\" data-title=\\"bash\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">cut</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  [-bn] [file] 或 cut [-c] [file]  或  cut [-df] [file]</span></span></code></pre>\\n</div>","autoDesc":true}');export{c as comp,t as data};
