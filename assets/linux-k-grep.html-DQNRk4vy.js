import{_ as s,c as e,a as n,o as i}from"./app-CZJgH_ea.js";const r={};function l(t,a){return i(),e("div",null,a[0]||(a[0]=[n(`<h1 id="linux-grep文本搜索" tabindex="-1"><a class="header-anchor" href="#linux-grep文本搜索"><span>Linux-grep文本搜索</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1 简介</span></a></h2><p>Linux系统中grep命令是一种强大的<strong>文本搜索工具</strong>，它能使用<strong>正则表达式搜索文本</strong>，并把匹 <strong>配的行</strong>打印出来。grep全称是Global Regular Expression Print，表示全局正则表达式版本，它的使用权限是所有用户。</p><p>grep的工作方式是这样的，它在一个或多个文件中搜索字符串模板。如果模板包括空格，则必须被引用，模板后的所有字符串被看作文件名。搜索的结果被送到标准输出，不影响原文件内容。</p><p>grep可用于shell脚本，因为grep通过返回一个状态值来说明搜索的状态，如果<strong>模板搜索成功，则返回0，如果搜索不成功，则返回1</strong>，如果搜索的文件不存在，则返回2。我们利用这些返回值就可进行一些自动化的文本处理工作。</p><h2 id="_2-命令语法" tabindex="-1"><a class="header-anchor" href="#_2-命令语法"><span>2 命令语法</span></a></h2><p>用于过滤/搜索的特定字符。可使用正则表达式能多种命令配合使用，使用上十分灵活。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [选项] pattern [文件名]</span></span></code></pre></div><h2 id="_3-命令参数" tabindex="-1"><a class="header-anchor" href="#_3-命令参数"><span>3 命令参数</span></a></h2><p>-? 同时显示匹配行上下的？行，如：grep -2 pattern filename 同时显示匹配行的上下2行。<br> -b，—byte-offset 打印匹配行前面打印该行所在的块号码。<br> -c,—count 只打印匹配的行数，不显示匹配的内容。<br> -f File，—file=File 从文件中提取模板。空文件中包含0个模板，所以什么都不匹配。<br> -h，—no-filename 当搜索多个文件时，不显示匹配文件名前缀。<br> -i，—ignore-case 忽略大小写差别。<br> -q，—quiet 取消显示，只返回退出状态。0则表示找到了匹配的行。<br> -l，—files-with-matches 打印匹配模板的文件清单。<br> -L，—files-without-match 打印不匹配模板的文件清单。<br> -n，—line-number 在匹配的行前面打印行号。<br> -s，—silent 不显示关于不存在或者无法读取文件的错误信息。<br> -v，—revert-match 反检索，只显示不匹配的行。<br> -w，—word-regexp 如果被&lt;和&gt;引用，就把表达式做为一个单词搜索。<br> -V，—version 显示软件版本信息。</p><h2 id="_4-pattern-规则表达式" tabindex="-1"><a class="header-anchor" href="#_4-pattern-规则表达式"><span>4 pattern 规则表达式</span></a></h2><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>. 匹配任意一个字符</span></span>
<span class="line"><span>* 匹配0 个或多个*前的字符</span></span>
<span class="line"><span>^ 匹配行开头</span></span>
<span class="line"><span>$ 匹配行结尾</span></span>
<span class="line"><span>[] 匹配[ ]中的任意一个字符，[]中可用 - 表示范围，</span></span>
<span class="line"><span>例如[a-z]表示字母a 至z 中的任意一个</span></span>
<span class="line"><span>\\ 转意字符</span></span></code></pre></div><h2 id="_5-实例" tabindex="-1"><a class="header-anchor" href="#_5-实例"><span>5 实例</span></a></h2><p>文件fruits.txt</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>i like apple</span></span>
<span class="line"><span>i like pineapple</span></span>
<span class="line"><span>i like Apple</span></span>
<span class="line"><span>i like banana</span></span>
<span class="line"><span>i like watermelon</span></span></code></pre></div><h3 id="_5-1-在文件中搜索模式" tabindex="-1"><a class="header-anchor" href="#_5-1-在文件中搜索模式"><span>5.1 在文件中搜索模式</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 语法</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;search_pattern&quot;</span><span style="color:#98C379;--shiki-dark:#98C379;"> path/to/file</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 示例(查看文件中带有apple的行)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#98C379;--shiki-dark:#98C379;"> apple</span><span style="color:#98C379;--shiki-dark:#98C379;"> fruits.txt</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231045486.png" alt="image-20220412135702730" tabindex="0" loading="lazy"><figcaption>image-20220412135702730</figcaption></figure><h3 id="_5-2-or-条件" tabindex="-1"><a class="header-anchor" href="#_5-2-or-条件"><span>5.2 or 条件</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 语法</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 方式一： -E (E需要大写)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -E</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;string1|string2&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;"> filename</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 方式二： egrep</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">egrep</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;string1|string2&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;"> filename</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 示例</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -E</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;apple|banana&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;">  fruits.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">egrep</span><span style="color:#98C379;--shiki-dark:#98C379;"> apple</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">banana</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&#39;  fruits.txt</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231045527.png" alt="image-20220412135839507" tabindex="0" loading="lazy"><figcaption>image-20220412135839507</figcaption></figure><h3 id="_5-3-忽略大小写" tabindex="-1"><a class="header-anchor" href="#_5-3-忽略大小写"><span>5.3 忽略大小写</span></a></h3><p>默认情况下，grep区分大小写，这意味着您必须精确搜索大写的字符串。通过使用-i开关告诉grep忽略大小写，可以避免这种情况。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 语法</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -i</span><span style="color:#98C379;--shiki-dark:#98C379;"> string</span><span style="color:#98C379;--shiki-dark:#98C379;"> filename</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 示例</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -i</span><span style="color:#98C379;--shiki-dark:#98C379;"> apple</span><span style="color:#98C379;--shiki-dark:#98C379;"> fruits.txt</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231045553.png" alt="image-20220412140005854" tabindex="0" loading="lazy"><figcaption>image-20220412140005854</figcaption></figure><h3 id="_5-4-搜索精确的字符串-禁用正则表达式" tabindex="-1"><a class="header-anchor" href="#_5-4-搜索精确的字符串-禁用正则表达式"><span>5.4 搜索精确的字符串 (禁用正则表达式):</span></a></h3><p>在上面的示例中，每当我们在文档中搜索字符串“ apple”时，grep也会在输出中返回“ pineapple”。为了避免这种情况，并严格搜索“ apple”，可以使用以下命令：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 示例</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;\\&lt;apple\\&gt;&quot;</span><span style="color:#98C379;--shiki-dark:#98C379;"> fruits.txt</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231045580.png" alt="image-20220412140216431" tabindex="0" loading="lazy"><figcaption>image-20220412140216431</figcaption></figure><h3 id="_5-5-带行号的grep" tabindex="-1"><a class="header-anchor" href="#_5-5-带行号的grep"><span>5.5 <em><strong>带行号的Grep</strong></em></span></a></h3><p>要显示搜索字符串所在的行数，请使用-n开关。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 语法</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -n</span><span style="color:#98C379;--shiki-dark:#98C379;"> string</span><span style="color:#98C379;--shiki-dark:#98C379;"> filename</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 示例</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -n</span><span style="color:#98C379;--shiki-dark:#98C379;">  apple</span><span style="color:#98C379;--shiki-dark:#98C379;">  fruits.txt</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231045604.png" alt="image-20220412140342553" tabindex="0" loading="lazy"><figcaption>image-20220412140342553</figcaption></figure><h3 id="_5-6-显示之前和之后的行" tabindex="-1"><a class="header-anchor" href="#_5-6-显示之前和之后的行"><span>5.6 <em><strong>显示之前和之后的行</strong></em></span></a></h3><p>如果需要更多grep输出上下文，可以使用-c开关在指定的搜索字符串前后显示一行：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 语法 大写的C</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -C</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#98C379;--shiki-dark:#98C379;"> string</span><span style="color:#98C379;--shiki-dark:#98C379;"> filename</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 示例</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -C</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#98C379;--shiki-dark:#98C379;"> banana</span><span style="color:#98C379;--shiki-dark:#98C379;"> fruits.txt</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231045628.png" alt="image-20220412140621158" tabindex="0" loading="lazy"><figcaption>image-20220412140621158</figcaption></figure><h2 id="_6-与其他命令配合使用" tabindex="-1"><a class="header-anchor" href="#_6-与其他命令配合使用"><span>6 与其他命令配合使用</span></a></h2><p>Linux命令的输出通过管道传输到grep，grep就可以仅显示您需要查看的输出。</p><h3 id="_6-1-查找文件是否存在" tabindex="-1"><a class="header-anchor" href="#_6-1-查找文件是否存在"><span>6.1 查找文件是否存在</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#查找当前目录 .sh结尾的文件</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">ls</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#98C379;--shiki-dark:#98C379;"> .sh</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#查找当前目录 xx.sh结尾的文件，返回空则证明文件不存在</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">bin</span><span style="color:#98C379;--shiki-dark:#98C379;"> ls</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#98C379;--shiki-dark:#98C379;"> xx.sh</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231045652.png" alt="image-20220412151129285" tabindex="0" loading="lazy"><figcaption>image-20220412151129285</figcaption></figure>`,42)]))}const o=s(r,[["render",l],["__file","linux-k-grep.html.vue"]]),c=JSON.parse('{"path":"/posts/Linux/linux-k-grep.html","title":"Linux-grep文本搜索","lang":"zh-CN","frontmatter":{"description":"Linux-grep文本搜索 1 简介 Linux系统中grep命令是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹 配的行打印出来。grep全称是Global Regular Expression Print，表示全局正则表达式版本，它的使用权限是所有用户。 grep的工作方式是这样的，它在一个或多个文件中搜索字符串模板。如果模板包括空格...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Linux/linux-k-grep.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Linux-grep文本搜索"}],["meta",{"property":"og:description","content":"Linux-grep文本搜索 1 简介 Linux系统中grep命令是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹 配的行打印出来。grep全称是Global Regular Expression Print，表示全局正则表达式版本，它的使用权限是所有用户。 grep的工作方式是这样的，它在一个或多个文件中搜索字符串模板。如果模板包括空格..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231045486.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux-grep文本搜索\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231045486.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231045527.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231045553.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231045580.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231045604.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231045628.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231045652.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2 命令语法","slug":"_2-命令语法","link":"#_2-命令语法","children":[]},{"level":2,"title":"3 命令参数","slug":"_3-命令参数","link":"#_3-命令参数","children":[]},{"level":2,"title":"4 pattern 规则表达式","slug":"_4-pattern-规则表达式","link":"#_4-pattern-规则表达式","children":[]},{"level":2,"title":"5 实例","slug":"_5-实例","link":"#_5-实例","children":[{"level":3,"title":"5.1 在文件中搜索模式","slug":"_5-1-在文件中搜索模式","link":"#_5-1-在文件中搜索模式","children":[]},{"level":3,"title":"5.2 or 条件","slug":"_5-2-or-条件","link":"#_5-2-or-条件","children":[]},{"level":3,"title":"5.3 忽略大小写","slug":"_5-3-忽略大小写","link":"#_5-3-忽略大小写","children":[]},{"level":3,"title":"5.4 搜索精确的字符串 (禁用正则表达式):","slug":"_5-4-搜索精确的字符串-禁用正则表达式","link":"#_5-4-搜索精确的字符串-禁用正则表达式","children":[]},{"level":3,"title":"5.5 带行号的Grep","slug":"_5-5-带行号的grep","link":"#_5-5-带行号的grep","children":[]},{"level":3,"title":"5.6 显示之前和之后的行","slug":"_5-6-显示之前和之后的行","link":"#_5-6-显示之前和之后的行","children":[]}]},{"level":2,"title":"6 与其他命令配合使用","slug":"_6-与其他命令配合使用","link":"#_6-与其他命令配合使用","children":[{"level":3,"title":"6.1 查找文件是否存在","slug":"_6-1-查找文件是否存在","link":"#_6-1-查找文件是否存在","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.66,"words":1097},"filePathRelative":"posts/Linux/linux-k-grep.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1 简介</h2>\\n<p>Linux系统中grep命令是一种强大的<strong>文本搜索工具</strong>，它能使用<strong>正则表达式搜索文本</strong>，并把匹 <strong>配的行</strong>打印出来。grep全称是Global Regular Expression Print，表示全局正则表达式版本，它的使用权限是所有用户。</p>\\n<p>grep的工作方式是这样的，它在一个或多个文件中搜索字符串模板。如果模板包括空格，则必须被引用，模板后的所有字符串被看作文件名。搜索的结果被送到标准输出，不影响原文件内容。</p>\\n<p>grep可用于shell脚本，因为grep通过返回一个状态值来说明搜索的状态，如果<strong>模板搜索成功，则返回0，如果搜索不成功，则返回1</strong>，如果搜索的文件不存在，则返回2。我们利用这些返回值就可进行一些自动化的文本处理工作。</p>","autoDesc":true}');export{o as comp,c as data};
