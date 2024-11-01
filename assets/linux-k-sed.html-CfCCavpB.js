import{_ as a,c as e,a as i,o as n}from"./app-tJW29Kmg.js";const l={};function t(r,s){return n(),e("div",null,s[0]||(s[0]=[i(`<h1 id="sed替换-查找-删除命令" tabindex="-1"><a class="header-anchor" href="#sed替换-查找-删除命令"><span>sed替换/查找/删除命令</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1 简介</span></a></h2><p>sed是一个很好的文件处理工具，本身是一个管道命令，主要是以行为单位进行处理，可以将数据行进行替换、删除、新增、选取等特定工作</p><h2 id="_2-sed-语法" tabindex="-1"><a class="header-anchor" href="#_2-sed-语法"><span>2 sed 语法</span></a></h2><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>sed [-nefri] ‘command’ 输入文本</span></span></code></pre></div><h2 id="_3-常用选项" tabindex="-1"><a class="header-anchor" href="#_3-常用选项"><span>3 常用选项</span></a></h2><ul><li>-n∶使用安静(silent)模式。在一般 sed 的用法中，所有来自 STDIN的资料一般都会被列出到萤幕上。但如果加上 -n 参数后，则只有经过sed 特殊处理的那一行(或者动作)才会被列出来。</li><li>-e∶直接在指令列模式上进行 sed 的动作编辑；</li><li>-f∶直接将 sed 的动作写在一个档案内， -f filename 则可以执行 filename 内的sed 动作；</li><li>-r∶sed 的动作支援的是延伸型正规表示法的语法。(预设是基础正规表示法语法)</li><li>-i∶直接修改读取的档案内容，而不是由萤幕输出。</li></ul><h2 id="_4-常用命令" tabindex="-1"><a class="header-anchor" href="#_4-常用命令"><span>4 <strong>常用命令</strong></span></a></h2><ul><li>a ∶新增， a 的后面可以接字串，而这些字串会在新的一行出现(目前的下一行)～</li><li>c ∶取代， c 的后面可以接字串，这些字串可以取代 n1,n2 之间的行！</li><li>d ∶删除，因为是删除啊，所以 d 后面通常不接任何咚咚；</li><li>i ∶插入， i 的后面可以接字串，而这些字串会在新的一行出现(目前的上一行)；</li><li>p ∶列印，亦即将某个选择的资料印出。通常 p 会与参数 sed -n 一起运作～</li><li>s ∶取代，可以直接进行取代的工作哩！通常这个 s 的动作可以搭配正规表示法！例如 1,20s/old/new/g 就是啦！</li></ul><h2 id="_5-示例" tabindex="-1"><a class="header-anchor" href="#_5-示例"><span>5 示例</span></a></h2><p>假设我们有一文件名为my.txt。内容如下</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>Hello!</span></span>
<span class="line"><span>welcome to my blog.</span></span>
<span class="line"><span>end</span></span></code></pre></div><h3 id="_5-1-删除某行" tabindex="-1"><a class="header-anchor" href="#_5-1-删除某行"><span>5.1 删除某行</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># sed &#39;1d&#39; my.txt              #删除第一行 </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># sed &#39;$d&#39; my.txt              #删除最后一行</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># sed &#39;1,2d&#39; my.txt           #删除第一行到第二行</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># sed &#39;2,$d&#39; my.txt           #删除第二行到最后一行</span></span></code></pre></div><h3 id="_5-2-显示某行" tabindex="-1"><a class="header-anchor" href="#_5-2-显示某行"><span>5.2 显示某行：</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># sed -n &#39;1p&#39; my.txt           #显示第一行 </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># sed -n &#39;$p&#39; my.txt           #显示最后一行</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># sed -n &#39;1,2p&#39; my.txt        #显示第一行到第二行</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># sed -n &#39;2,$p&#39; my.txt        #显示第二行到最后一行</span></span></code></pre></div><h3 id="_5-3-使用模式进行查询" tabindex="-1"><a class="header-anchor" href="#_5-3-使用模式进行查询"><span>5.3 使用模式进行查询：</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># sed -n &#39;/blog/p&#39; my.txt    #查询包括关键字blog所在所有行</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># sed -n &#39;/\\$/p&#39; my.txt        #查询包括关键字$所在所有行，使用反斜线\\屏蔽特殊含义</span></span></code></pre></div><h3 id="_5-4-增加一行或多行字符串" tabindex="-1"><a class="header-anchor" href="#_5-4-增加一行或多行字符串"><span>5.4 增加一行或多行字符串：</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># cat my.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">     Hello!</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">     ruby</span><span style="color:#98C379;--shiki-dark:#98C379;"> is</span><span style="color:#98C379;--shiki-dark:#98C379;"> me,welcome</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> my</span><span style="color:#98C379;--shiki-dark:#98C379;"> blog.</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">     end</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># sed &#39;1a drink tea&#39; my.txt  #第一行后增加字符串&quot;drink tea&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">     Hello!</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">     drink</span><span style="color:#98C379;--shiki-dark:#98C379;"> tea</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">     ruby</span><span style="color:#98C379;--shiki-dark:#98C379;"> is</span><span style="color:#98C379;--shiki-dark:#98C379;"> me,welcome</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> my</span><span style="color:#98C379;--shiki-dark:#98C379;"> blog.</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">     end</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># sed &#39;1,3a drink tea&#39; my.txt #第一行到第三行后增加字符串&quot;drink tea&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">     Hello!</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">     drink</span><span style="color:#98C379;--shiki-dark:#98C379;"> tea</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">     ruby</span><span style="color:#98C379;--shiki-dark:#98C379;"> is</span><span style="color:#98C379;--shiki-dark:#98C379;"> me,welcome</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> my</span><span style="color:#98C379;--shiki-dark:#98C379;"> blog.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">     drink</span><span style="color:#98C379;--shiki-dark:#98C379;"> tea</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">     end</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">     drink</span><span style="color:#98C379;--shiki-dark:#98C379;"> tea</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># sed &#39;1a drink tea\\nor coffee&#39; my.txt   #第一行后增加多行，使用换行符\\n</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">     Hello!</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">     drink</span><span style="color:#98C379;--shiki-dark:#98C379;"> tea</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">     or</span><span style="color:#98C379;--shiki-dark:#98C379;"> coffee</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">     ruby</span><span style="color:#98C379;--shiki-dark:#98C379;"> is</span><span style="color:#98C379;--shiki-dark:#98C379;"> me,welcome</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> my</span><span style="color:#98C379;--shiki-dark:#98C379;"> blog.</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">     end</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-删除匹配行" tabindex="-1"><a class="header-anchor" href="#_5-5-删除匹配行"><span>5.5 删除匹配行：</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sed</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -i</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;/匹配字符串/d&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;">  filename</span><span style="color:#98C379;--shiki-dark:#98C379;">  （注：若匹配字符串是变量，则需要“”，而不是‘’。记得好像是）</span></span></code></pre></div><h3 id="_5-6-替换匹配行中的某个字符串" tabindex="-1"><a class="header-anchor" href="#_5-6-替换匹配行中的某个字符串"><span>5.6 替换匹配行中的某个字符串：</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sed</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -i</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;/匹配字符串/s/替换源字符串/替换目标字符串/g&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;"> filename</span></span></code></pre></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2>`,25)]))}const o=a(l,[["render",t],["__file","linux-k-sed.html.vue"]]),p=JSON.parse('{"path":"/posts/Linux/linux-k-sed.html","title":"sed替换/查找/删除命令","lang":"zh-CN","frontmatter":{"description":"sed替换/查找/删除命令 1 简介 sed是一个很好的文件处理工具，本身是一个管道命令，主要是以行为单位进行处理，可以将数据行进行替换、删除、新增、选取等特定工作 2 sed 语法 3 常用选项 -n∶使用安静(silent)模式。在一般 sed 的用法中，所有来自 STDIN的资料一般都会被列出到萤幕上。但如果加上 -n 参数后，则只有经过sed ...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Linux/linux-k-sed.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"sed替换/查找/删除命令"}],["meta",{"property":"og:description","content":"sed替换/查找/删除命令 1 简介 sed是一个很好的文件处理工具，本身是一个管道命令，主要是以行为单位进行处理，可以将数据行进行替换、删除、新增、选取等特定工作 2 sed 语法 3 常用选项 -n∶使用安静(silent)模式。在一般 sed 的用法中，所有来自 STDIN的资料一般都会被列出到萤幕上。但如果加上 -n 参数后，则只有经过sed ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sed替换/查找/删除命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2 sed 语法","slug":"_2-sed-语法","link":"#_2-sed-语法","children":[]},{"level":2,"title":"3 常用选项","slug":"_3-常用选项","link":"#_3-常用选项","children":[]},{"level":2,"title":"4 常用命令","slug":"_4-常用命令","link":"#_4-常用命令","children":[]},{"level":2,"title":"5 示例","slug":"_5-示例","link":"#_5-示例","children":[{"level":3,"title":"5.1 删除某行","slug":"_5-1-删除某行","link":"#_5-1-删除某行","children":[]},{"level":3,"title":"5.2 显示某行：","slug":"_5-2-显示某行","link":"#_5-2-显示某行","children":[]},{"level":3,"title":"5.3 使用模式进行查询：","slug":"_5-3-使用模式进行查询","link":"#_5-3-使用模式进行查询","children":[]},{"level":3,"title":"5.4 增加一行或多行字符串：","slug":"_5-4-增加一行或多行字符串","link":"#_5-4-增加一行或多行字符串","children":[]},{"level":3,"title":"5.5 删除匹配行：","slug":"_5-5-删除匹配行","link":"#_5-5-删除匹配行","children":[]},{"level":3,"title":"5.6 替换匹配行中的某个字符串：","slug":"_5-6-替换匹配行中的某个字符串","link":"#_5-6-替换匹配行中的某个字符串","children":[]}]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.71,"words":813},"filePathRelative":"posts/Linux/linux-k-sed.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1 简介</h2>\\n<p>sed是一个很好的文件处理工具，本身是一个管道命令，主要是以行为单位进行处理，可以将数据行进行替换、删除、新增、选取等特定工作</p>\\n<h2>2 sed 语法</h2>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>sed [-nefri] ‘command’ 输入文本</span></span></code></pre>\\n</div>","autoDesc":true}');export{o as comp,p as data};
