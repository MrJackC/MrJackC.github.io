import{_ as a,c as i,a as n,o as e}from"./app-BhoNqsD-.js";const l={};function t(r,s){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="jpa-批量删除" tabindex="-1"><a class="header-anchor" href="#jpa-批量删除"><span>Jpa 批量删除</span></a></h1><h2 id="_1-具体方法" tabindex="-1"><a class="header-anchor" href="#_1-具体方法"><span>1. 具体方法</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> interface</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> StudentsRepository</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> extends</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Repository</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Students</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> JpaRepository</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Students</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * @function 自定义JPQL</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> ids</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 注意更新和删除是需要加事务的， 并且要加上 @Modify的注解</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Modifying</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Transactional</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Query</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;delete from Students s where s.stuId in (?1)&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> deleteBatch</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">ids</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 这个是通过spring data拼接关键字进行的操作</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> deleteStudentsByStuIdIn</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">ids</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：</p><p><strong>@Modifying注解</strong></p><p>1、在@Query注解中编写JPQL实现DELETE和UPDATE操作时候必须加上@Modifying注解，通知Spring Data这是一个delete或者updata操作</p><p>2、 updata和delete操作需要使用事务，此时需要定义service层，在service方法上添加事务操作</p><p>3、 注意JPQL不支持insert操作</p><p>@Query 如果在注解中添加 nativeQuery=true 是支持原生SQL查询</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/yhflyl/article/details/81557670" target="_blank" rel="noopener noreferrer">SpringBoot2 Jpa 批量删除</a></p>`,11)]))}const p=a(l,[["render",t],["__file","jpa-j-multi-delete.html.vue"]]),d=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/jpa/jpa-j-multi-delete.html","title":"Jpa 批量删除","lang":"zh-CN","frontmatter":{"description":"Jpa 批量删除 1. 具体方法 注： @Modifying注解 1、在@Query注解中编写JPQL实现DELETE和UPDATE操作时候必须加上@Modifying注解，通知Spring Data这是一个delete或者updata操作 2、 updata和delete操作需要使用事务，此时需要定义service层，在service方法上添加事务操...","head":[["meta",{"property":"og:url","content":"https://mrjason.me/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/jpa/jpa-j-multi-delete.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Jpa 批量删除"}],["meta",{"property":"og:description","content":"Jpa 批量删除 1. 具体方法 注： @Modifying注解 1、在@Query注解中编写JPQL实现DELETE和UPDATE操作时候必须加上@Modifying注解，通知Spring Data这是一个delete或者updata操作 2、 updata和delete操作需要使用事务，此时需要定义service层，在service方法上添加事务操..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jpa 批量删除\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjason.me\\"}]}"]]},"headers":[{"level":2,"title":"1. 具体方法","slug":"_1-具体方法","link":"#_1-具体方法","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.69,"words":208},"filePathRelative":"posts/Java/Java第三方依赖/jpa/jpa-j-multi-delete.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 具体方法</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">public</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> interface</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> StudentsRepository</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> extends</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> Repository</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">Students</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> Integer</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;,</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> JpaRepository</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">Students</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> Integer</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    /**</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">     * @function 自定义JPQL</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">     * </span><span style=\\"color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic\\">@param</span><span style=\\"color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\"> ids</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">     */</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    // 注意更新和删除是需要加事务的， 并且要加上 @Modify的注解</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    @</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">Modifying</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    @</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">Transactional</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    @</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">Query</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">(</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"delete from Students s where s.stuId in (?1)\\"</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">    void</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> deleteBatch</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">List</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">Integer</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt; </span><span style=\\"color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">ids</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    // 这个是通过spring data拼接关键字进行的操作</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">    void</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> deleteStudentsByStuIdIn</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">List</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">Integer</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt; </span><span style=\\"color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">ids</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{p as comp,d as data};
