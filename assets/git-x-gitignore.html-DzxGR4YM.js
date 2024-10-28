import{_ as s,c as a,a as e,o as n}from"./app-W9QyTiMU.js";const l={};function t(o,i){return n(),a("div",null,i[0]||(i[0]=[e(`<h1 id="gitignore文件屏蔽规则" tabindex="-1"><a class="header-anchor" href="#gitignore文件屏蔽规则"><span>gitignore文件屏蔽规则</span></a></h1><p>在使用git仓库时，我们并不希望将所有的文件都提交到仓库中，需要对一些文件进行屏蔽，有些则要保留</p><p>此时我们就需要使用到<code>.gitignore</code>文件</p><h2 id="_2-gitignore-文件格式规范" tabindex="-1"><a class="header-anchor" href="#_2-gitignore-文件格式规范"><span>2. gitignore 文件格式规范</span></a></h2><ul><li>所有空行或#开通的行都会被忽略</li><li>可以使用标准的<strong>glob 模式匹配</strong></li><li>文件或目录前加<code>/</code>表示仓库根目录的对应文件</li><li>匹配模式最后跟反斜杠<code>/</code>说明要忽略目录</li><li>要特殊不许了某个文件或目录，可以在模式钱加上取反<code>!</code></li></ul><h3 id="_2-1-glob-模式" tabindex="-1"><a class="header-anchor" href="#_2-1-glob-模式"><span>2.1 glob 模式</span></a></h3><p>其中glob模式是指shell 所使用的简化了的正则表达式</p><ul><li><p>星号<code>*</code>匹配零个或多个任意字符</p></li><li><p><code>[abc]</code>匹配任何一个列在方括号中的字符（这个例子要么匹配一个a，要么匹配一个b，要么匹配一个c），</p><ul><li><code>？</code>匹配一个任意字符</li></ul></li><li><p>如果在方括号中使用短划线分割两个字符，表示所有在这两个字符范围内的都可以匹配</p><p>例如：[0-9] 表示匹配所有0-9的数字</p></li></ul><h2 id="_3-案例" tabindex="-1"><a class="header-anchor" href="#_3-案例"><span>3. 案例</span></a></h2><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">*.a                    </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 所有以 &#39;.a&#39; 为后缀的文件都屏蔽掉</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Office 缓存文件</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">~</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;$&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">*.docx</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">~</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;$&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">*.ppt</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">~</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;$&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">*.pptx </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">~</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;$&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">*.xls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tags</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                   # 仓库中所有名为 tags 的文件都屏蔽</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">core.*</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                 # 仓库中所有以 &#39;core.&#39; 开头的文件都屏蔽</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tools/</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                # 屏蔽目录 tools</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">log/*</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  # 屏蔽目录 log 下的所有文件，但不屏蔽 log 目录本身</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">/log.log</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">               # 只屏蔽仓库根目录下的 log.log 文件，其他目录中的不屏蔽</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">readme.md</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">       # 屏蔽仓库中所有名为 readme.md 的文件</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">!</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">/readme.md</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     # 在上一条屏蔽规则的条件下，不屏蔽仓库根目录下的 readme.md 文</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<br> 例子中的最后两条的顺序很重要，必须要先屏蔽所有的，然后才建立特殊不屏蔽的规则！</p>`,11)]))}const c=s(l,[["render",t],["__file","git-x-gitignore.html.vue"]]),p=JSON.parse('{"path":"/posts/Git/git-x-gitignore.html","title":"gitignore文件屏蔽规则","lang":"zh-CN","frontmatter":{"description":"gitignore文件屏蔽规则 在使用git仓库时，我们并不希望将所有的文件都提交到仓库中，需要对一些文件进行屏蔽，有些则要保留 此时我们就需要使用到.gitignore文件 2. gitignore 文件格式规范 所有空行或#开通的行都会被忽略 可以使用标准的glob 模式匹配 文件或目录前加/表示仓库根目录的对应文件 匹配模式最后跟反斜杠/说明要忽...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Git/git-x-gitignore.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"gitignore文件屏蔽规则"}],["meta",{"property":"og:description","content":"gitignore文件屏蔽规则 在使用git仓库时，我们并不希望将所有的文件都提交到仓库中，需要对一些文件进行屏蔽，有些则要保留 此时我们就需要使用到.gitignore文件 2. gitignore 文件格式规范 所有空行或#开通的行都会被忽略 可以使用标准的glob 模式匹配 文件或目录前加/表示仓库根目录的对应文件 匹配模式最后跟反斜杠/说明要忽..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"gitignore文件屏蔽规则\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"2. gitignore 文件格式规范","slug":"_2-gitignore-文件格式规范","link":"#_2-gitignore-文件格式规范","children":[{"level":3,"title":"2.1 glob 模式","slug":"_2-1-glob-模式","link":"#_2-1-glob-模式","children":[]}]},{"level":2,"title":"3. 案例","slug":"_3-案例","link":"#_3-案例","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.61,"words":483},"filePathRelative":"posts/Git/git-x-gitignore.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>在使用git仓库时，我们并不希望将所有的文件都提交到仓库中，需要对一些文件进行屏蔽，有些则要保留</p>\\n<p>此时我们就需要使用到<code>.gitignore</code>文件</p>\\n<h2>2. gitignore 文件格式规范</h2>\\n<ul>\\n<li>所有空行或#开通的行都会被忽略</li>\\n<li>可以使用标准的<strong>glob 模式匹配</strong></li>\\n<li>文件或目录前加<code>/</code>表示仓库根目录的对应文件</li>\\n<li>匹配模式最后跟反斜杠<code>/</code>说明要忽略目录</li>\\n<li>要特殊不许了某个文件或目录，可以在模式钱加上取反<code>!</code></li>\\n</ul>","autoDesc":true}');export{c as comp,p as data};
