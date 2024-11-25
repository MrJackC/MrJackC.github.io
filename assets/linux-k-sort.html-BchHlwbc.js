import{_ as a,c as n,a as i,o as l}from"./app-BfIe-EZg.js";const e={};function r(p,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="sort排序命令" tabindex="-1"><a class="header-anchor" href="#sort排序命令"><span>sort排序命令</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1 简介</span></a></h2><p>sort命令是帮我们依据不同的数据类型进行排序</p><blockquote><p>sort可针对文本文件的内容，以行为单位来排序。</p></blockquote><h2 id="_2-语法" tabindex="-1"><a class="header-anchor" href="#_2-语法"><span>2 语法</span></a></h2><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>sort [-bcfMnrtk][源文件][-o 输出文件]</span></span></code></pre></div><h2 id="_3-参数" tabindex="-1"><a class="header-anchor" href="#_3-参数"><span>3 参数</span></a></h2><ul><li>-b 忽略每行前面开始出的空格字符。</li><li>-c 检查文件是否已经按照顺序排序。</li><li>-f 排序时，忽略大小写字母。</li><li>-M 将前面3个字母依照月份的缩写进行排序。</li><li>-n 依照数值的大小排序。</li><li>-o&lt;输出文件&gt; 将排序后的结果存入指定的文件。</li><li>-r 以相反的顺序来排序。</li><li>-t&lt;分隔字符&gt; 指定排序时所用的栏位分隔字符。</li><li>-k 选择以哪个区间进行排序。</li></ul><h2 id="_4-示例" tabindex="-1"><a class="header-anchor" href="#_4-示例"><span>4 示例</span></a></h2><h3 id="_4-1-示例1" tabindex="-1"><a class="header-anchor" href="#_4-1-示例1"><span>4.1 示例1</span></a></h3><p>sort将文件的每一行作为一个单位，相互比较，比较原则是从首字符向后，依次按ASCII码值进行比较，最后将他们按升序输出。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cat</span><span style="color:#98C379;--shiki-dark:#98C379;"> seq.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">banana</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">apple</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">pear</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">orange</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> sort</span><span style="color:#98C379;--shiki-dark:#98C379;"> seq.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">apple</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">banana</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">orange</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">pear</span></span></code></pre></div><p>用户可以保存排序后的文件内容，或把排序后的文件内容输出至打印机。下例中用户把排序后的文件内容保存到名为result的文件中。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sort</span><span style="color:#98C379;--shiki-dark:#98C379;"> seq.txt</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">result</span></span></code></pre></div><h3 id="_4-2-示例2-sort的-u选项" tabindex="-1"><a class="header-anchor" href="#_4-2-示例2-sort的-u选项"><span>4.2 示例2:sort的-u选项</span></a></h3><p>它的作用很简单，就是在输出行中去除重复行。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> cat</span><span style="color:#98C379;--shiki-dark:#98C379;"> seq.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">banana</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">apple</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">pear</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">orange</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">pear</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> sort</span><span style="color:#98C379;--shiki-dark:#98C379;"> seq.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">apple</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">banana</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">orange</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">pear</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">pear</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> sort</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -u</span><span style="color:#98C379;--shiki-dark:#98C379;"> seq.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">apple</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">banana</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">orange</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">pear</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pear由于重复被-u选项无情的删除了。</p><h3 id="_4-3-示例3-sort的-r选项" tabindex="-1"><a class="header-anchor" href="#_4-3-示例3-sort的-r选项"><span>4.3 示例3：sort的-r选项</span></a></h3><p>sort默认的排序方式是升序，如果想改成降序，就加个-r就搞定了。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> cat</span><span style="color:#98C379;--shiki-dark:#98C379;"> number.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">5</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> sort</span><span style="color:#98C379;--shiki-dark:#98C379;"> number.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">5</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> sort</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -r</span><span style="color:#98C379;--shiki-dark:#98C379;"> number.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">5</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-示例4-sort的-o选项" tabindex="-1"><a class="header-anchor" href="#_4-4-示例4-sort的-o选项"><span>4.4 示例4：sort的-o选项</span></a></h3><p>由于sort默认是把结果输出到标准输出，所以需要用重定向才能将结果写入文件，形如sort filename &gt; newfile。</p><p>但是，如果你想把排序结果输出到原文件中，用重定向可就不行了。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> sort</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -r</span><span style="color:#98C379;--shiki-dark:#98C379;"> number.txt</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">number.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> cat</span><span style="color:#98C379;--shiki-dark:#98C379;"> number.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span></span></code></pre></div><p>看，竟然将number清空了。就在这个时候，-o选项出现了，它成功的解决了这个问题，让你放心的将结果写入原文件。这或许也是-o比重定向的唯一优势所在。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> cat</span><span style="color:#98C379;--shiki-dark:#98C379;"> number.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">5</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> sort</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -r</span><span style="color:#98C379;--shiki-dark:#98C379;"> number.txt</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -o</span><span style="color:#98C379;--shiki-dark:#98C379;"> number.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> cat</span><span style="color:#98C379;--shiki-dark:#98C379;"> number.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">5</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span></code></pre></div><h3 id="_4-5-示例5-sort的-n选项" tabindex="-1"><a class="header-anchor" href="#_4-5-示例5-sort的-n选项"><span>4.5 示例5：sort的-n选项</span></a></h3><p>你有没有遇到过10比2小的情况。我反正遇到过。出现这种情况是由于排序程序将这些数字按字符来排序了，排序程序会先比较1和2，显然1小，所以就将10放在2前面喽。这也是sort的一贯作风。我们如果想改变这种现状，就要使用-n选项，来告诉sort，“要以数值来排序”！</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cat</span><span style="color:#98C379;--shiki-dark:#98C379;"> number.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">10</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">19</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">11</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">5</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> sort</span><span style="color:#98C379;--shiki-dark:#98C379;"> number.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">10</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">11</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">19</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">5</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> sort</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -n</span><span style="color:#98C379;--shiki-dark:#98C379;"> number.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">5</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">10</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">11</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">19</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-示例6-sort的-t选项和-k选项" tabindex="-1"><a class="header-anchor" href="#_4-6-示例6-sort的-t选项和-k选项"><span>4.6 示例6： sort的-t选项和-k选项</span></a></h3><p>如果有一个文件的内容是这样：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>$ cat facebook.txt</span></span>
<span class="line"><span>banana:30:5.5</span></span>
<span class="line"><span>apple:10:2.5</span></span>
<span class="line"><span>pear:90:2.3</span></span>
<span class="line"><span>orange:20:3.4</span></span></code></pre></div><p>这个文件有三列，列与列之间用冒号隔开了，第一列表示水果类型，第二列表示水果数量，第三列表示水果价格。那么我想以水果数量来排序，也就是以第二列来排序，如何利用sort实现？幸好，sort提供了-t选项，后面可以设定间隔符。指定了间隔符之后，就可以用-k来指定列数了。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>$ sort -n -k 2 -t ‘:’ facebook.txt</span></span>
<span class="line"><span>apple:10:2.5</span></span>
<span class="line"><span>orange:20:3.4</span></span>
<span class="line"><span>banana:30:5.5</span></span>
<span class="line"><span>pear:90:2.3</span></span></code></pre></div><h2 id="_5-其他的sort常用选项" tabindex="-1"><a class="header-anchor" href="#_5-其他的sort常用选项"><span>5 其他的sort常用选项</span></a></h2><ul><li>-f 会将小写字母都转换为大写字母来进行比较，亦即忽略大小写</li><li>-c 会检查文件是否已排好序，如果乱序，则输出第一个乱序的行的相关信息，最后返回1</li><li>-C 会检查文件是否已排好序，如果乱序，不输出内容，仅返回1</li><li>-M 会以月份来排序，比如JAN小于FEB等等</li><li>-b 会忽略每一行前面的所有空白部分，从第一个可见字符开始比较。</li></ul>`,37)]))}const t=a(e,[["render",r],["__file","linux-k-sort.html.vue"]]),c=JSON.parse('{"path":"/posts/Linux/linux-k-sort.html","title":"sort排序命令","lang":"zh-CN","frontmatter":{"description":"sort排序命令 1 简介 sort命令是帮我们依据不同的数据类型进行排序 sort可针对文本文件的内容，以行为单位来排序。 2 语法 3 参数 -b 忽略每行前面开始出的空格字符。 -c 检查文件是否已经按照顺序排序。 -f 排序时，忽略大小写字母。 -M 将前面3个字母依照月份的缩写进行排序。 -n 依照数值的大小排序。 -o<输出文件> 将排序后...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Linux/linux-k-sort.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"sort排序命令"}],["meta",{"property":"og:description","content":"sort排序命令 1 简介 sort命令是帮我们依据不同的数据类型进行排序 sort可针对文本文件的内容，以行为单位来排序。 2 语法 3 参数 -b 忽略每行前面开始出的空格字符。 -c 检查文件是否已经按照顺序排序。 -f 排序时，忽略大小写字母。 -M 将前面3个字母依照月份的缩写进行排序。 -n 依照数值的大小排序。 -o<输出文件> 将排序后..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sort排序命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2 语法","slug":"_2-语法","link":"#_2-语法","children":[]},{"level":2,"title":"3 参数","slug":"_3-参数","link":"#_3-参数","children":[]},{"level":2,"title":"4 示例","slug":"_4-示例","link":"#_4-示例","children":[{"level":3,"title":"4.1 示例1","slug":"_4-1-示例1","link":"#_4-1-示例1","children":[]},{"level":3,"title":"4.2 示例2:sort的-u选项","slug":"_4-2-示例2-sort的-u选项","link":"#_4-2-示例2-sort的-u选项","children":[]},{"level":3,"title":"4.3 示例3：sort的-r选项","slug":"_4-3-示例3-sort的-r选项","link":"#_4-3-示例3-sort的-r选项","children":[]},{"level":3,"title":"4.4 示例4：sort的-o选项","slug":"_4-4-示例4-sort的-o选项","link":"#_4-4-示例4-sort的-o选项","children":[]},{"level":3,"title":"4.5 示例5：sort的-n选项","slug":"_4-5-示例5-sort的-n选项","link":"#_4-5-示例5-sort的-n选项","children":[]},{"level":3,"title":"4.6 示例6： sort的-t选项和-k选项","slug":"_4-6-示例6-sort的-t选项和-k选项","link":"#_4-6-示例6-sort的-t选项和-k选项","children":[]}]},{"level":2,"title":"5 其他的sort常用选项","slug":"_5-其他的sort常用选项","link":"#_5-其他的sort常用选项","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.53,"words":1059},"filePathRelative":"posts/Linux/linux-k-sort.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1 简介</h2>\\n<p>sort命令是帮我们依据不同的数据类型进行排序</p>\\n<blockquote>\\n<p>sort可针对文本文件的内容，以行为单位来排序。</p>\\n</blockquote>\\n<h2>2 语法</h2>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>sort [-bcfMnrtk][源文件][-o 输出文件]</span></span></code></pre>\\n</div>","autoDesc":true}');export{t as comp,c as data};
