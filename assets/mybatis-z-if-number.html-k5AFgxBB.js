import{_ as a,c as n,a as i,o as e}from"./app-CQys7GfP.js";const t={};function B(l,s){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="mybatis中if关于数字的判断" tabindex="-1"><a class="header-anchor" href="#mybatis中if关于数字的判断"><span>mybatis中if关于数字的判断</span></a></h1><p>mybatis 中关于数字的判断，如果直接写<code>&lt;if test = &quot;xx == &#39;1&#39; &quot;&gt; &lt;/if&gt;</code>,这样即使是<code>xx==‘1’</code>，通常情况下也不会进入判断的。必须如下写：</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">select</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;getByNameAndPwd&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> parameterType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;String&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> resultMap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;MemberResult&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        select</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">           *</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        from \`member\`</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">if</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> test</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;isMerch != &#39;&#39; and isMerch == &#39;1&#39;.toString() &quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            where  \`mobile\` = #{name} </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            and \`password\` = #{password}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">if</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> test</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;isMerch != &#39;&#39; and isMerch == &#39;2&#39;.toString() &quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            where  \`name\` = #{name}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            and \`password\` = #{password}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;   </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/xinyuebaihe/article/details/86437431" target="_blank" rel="noopener noreferrer">mybatis 中if关于数字的判断</a></p>`,5)]))}const o=a(t,[["render",B],["__file","mybatis-z-if-number.html.vue"]]),p=JSON.parse(`{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/mybatis/mybatis-z-if-number.html","title":"mybatis中if关于数字的判断","lang":"zh-CN","frontmatter":{"description":"mybatis中if关于数字的判断 mybatis 中关于数字的判断，如果直接写<if test = \\"xx == '1' \\"> </if>,这样即使是xx==‘1’，通常情况下也不会进入判断的。必须如下写： 参考文章 mybatis 中if关于数字的判断","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/mybatis/mybatis-z-if-number.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"mybatis中if关于数字的判断"}],["meta",{"property":"og:description","content":"mybatis中if关于数字的判断 mybatis 中关于数字的判断，如果直接写<if test = \\"xx == '1' \\"> </if>,这样即使是xx==‘1’，通常情况下也不会进入判断的。必须如下写： 参考文章 mybatis 中if关于数字的判断"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mybatis中if关于数字的判断\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.37,"words":110},"filePathRelative":"posts/Java/Java第三方依赖/mybatis/mybatis-z-if-number.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>mybatis 中关于数字的判断，如果直接写<code>&lt;if test = \\"xx == '1' \\"&gt; &lt;/if&gt;</code>,这样即使是<code>xx==‘1’</code>，通常情况下也不会进入判断的。必须如下写：</p>\\n<div class=\\"language-xml\\" data-ext=\\"xml\\" data-title=\\"xml\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">select</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> id</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"getByNameAndPwd\\"</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> parameterType</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"String\\"</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> resultMap</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"MemberResult\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        select</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">           *</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        from \`member\`</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">if</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> test</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"isMerch != '' and isMerch == '1'.toString() \\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> &gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">            where  \`mobile\` = #{name} </span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">            and \`password\` = #{password}</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        &lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">if</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">if</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> test</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"isMerch != '' and isMerch == '2'.toString() \\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> &gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">            where  \`name\` = #{name}</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">            and \`password\` = #{password}</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        &lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">if</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;   </span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">select</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span></code></pre>\\n</div>","autoDesc":true}`);export{o as comp,p as data};
