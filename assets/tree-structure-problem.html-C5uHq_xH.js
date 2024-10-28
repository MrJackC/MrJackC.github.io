import{_ as e,c as a,a as s,o as n}from"./app-W9QyTiMU.js";const r={};function i(l,t){return n(),a("div",null,t[0]||(t[0]=[s(`<h1 id="类似部门表查询子部门树结构" tabindex="-1"><a class="header-anchor" href="#类似部门表查询子部门树结构"><span>类似部门表查询子部门树结构</span></a></h1><h2 id="_1-问题背景" tabindex="-1"><a class="header-anchor" href="#_1-问题背景"><span>1. 问题背景</span></a></h2><p>假设类似部门表这种结构的数据有 100w条。层级大概有10层</p><table><thead><tr><th>id</th><th>name</th><th>pid</th></tr></thead><tbody><tr><td>1</td><td>总公司</td><td>0</td></tr><tr><td>2</td><td>分公司1</td><td>1</td></tr><tr><td>3</td><td>分公司2</td><td>1</td></tr><tr><td>4</td><td>部门1</td><td>2</td></tr><tr><td>....</td><td></td><td></td></tr></tbody></table><p>我们需要将部门表的转化为树结构</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131416660.png" alt="image-20210522110741641" tabindex="0" loading="lazy"><figcaption>image-20210522110741641</figcaption></figure><h2 id="_2-问题" tabindex="-1"><a class="header-anchor" href="#_2-问题"><span>2. 问题</span></a></h2><p>正常全表转树结构是没有任何问题的，但我实际想要的只有紫色框框的数据</p><ol><li>并不是每个用户都能看到所有的组织机构数据（例如分公司1只能看到分公司1下的所有数据）</li><li><strong>查询搜索</strong>的时候也需要只查拥有的权限数据</li></ol><h2 id="_3-解决方案" tabindex="-1"><a class="header-anchor" href="#_3-解决方案"><span>3. 解决方案</span></a></h2><h3 id="_3-1-同样全表查出后-找到自己的部-id-然后遍历出所有子树" tabindex="-1"><a class="header-anchor" href="#_3-1-同样全表查出后-找到自己的部-id-然后遍历出所有子树"><span>3.1 同样全表查出后,找到自己的部 id,然后遍历出所有子树</span></a></h3><p>面临的问题：数据量实在太大,我下级部门可能只有100个,但我却查了100w数据出来,去找所有子树</p><h3 id="_3-2-用户只查自己的单位-点击下级的时候-再查pid为自己的下级部门" tabindex="-1"><a class="header-anchor" href="#_3-2-用户只查自己的单位-点击下级的时候-再查pid为自己的下级部门"><span>3.2 用户只查自己的单位,点击下级的时候,再查pid为自己的下级部门</span></a></h3><p>问题:我搜案的时候,无法正常搜案。因为我还要知道下级的下级是否包含要搜案的数据。又得 遍历多次查询</p><h3 id="_3-3-新增父级路径-推荐" tabindex="-1"><a class="header-anchor" href="#_3-3-新增父级路径-推荐"><span>3.3 新增父级路径（推荐）</span></a></h3><p>只要部门父级id路径前缀（包含自己节点）相同，则为该节点的所有子节点。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131416708.png" alt="image-20210522112314946" tabindex="0" loading="lazy"><figcaption>image-20210522112314946</figcaption></figure><h2 id="_4-代码实现" tabindex="-1"><a class="header-anchor" href="#_4-代码实现"><span>4. 代码实现</span></a></h2><ol><li>Sql 语句 <ol><li><p>方式1：like</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> sys_dept</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">AND</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ancestors </span><span style="color:#C678DD;--shiki-dark:#C678DD;">like</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> concat</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(#{ancestors},</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;%&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div></li><li><p>FIND_IN_SET</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> sys_dept </span><span style="color:#C678DD;--shiki-dark:#C678DD;">where</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> FIND_IN_SET(#{deptId}, ancestors) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">!</span><span style="color:#E06C75;--shiki-dark:#E06C75;">[CDATA[ &lt;&gt; ]</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span></span></code></pre></div><blockquote><p>MySQL提供了一个名为<code>FIND_IN_SET()</code>的内置字符串函数，允许您在逗号分隔的字符串列表中查找指定字符串的位置。</p></blockquote><blockquote><p>oracle 没有该函数，需要自定义函数</p></blockquote></li></ol></li></ol>`,19)]))}const o=e(r,[["render",i],["__file","tree-structure-problem.html.vue"]]),p=JSON.parse('{"path":"/posts/Daily-Thoughts/deepImpression/tree-structure-problem.html","title":"类似部门表查询子部门树结构","lang":"zh-CN","frontmatter":{"aliases":"类似部门表查询子部门树结构","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:53","updated":"2024-03-13 14:20","description":"类似部门表查询子部门树结构 1. 问题背景 假设类似部门表这种结构的数据有 100w条。层级大概有10层 我们需要将部门表的转化为树结构 image-20210522110741641image-20210522110741641 2. 问题 正常全表转树结构是没有任何问题的，但我实际想要的只有紫色框框的数据 并不是每个用户都能看到所有的组织机构数据（...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Daily-Thoughts/deepImpression/tree-structure-problem.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"类似部门表查询子部门树结构"}],["meta",{"property":"og:description","content":"类似部门表查询子部门树结构 1. 问题背景 假设类似部门表这种结构的数据有 100w条。层级大概有10层 我们需要将部门表的转化为树结构 image-20210522110741641image-20210522110741641 2. 问题 正常全表转树结构是没有任何问题的，但我实际想要的只有紫色框框的数据 并不是每个用户都能看到所有的组织机构数据（..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131416660.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类似部门表查询子部门树结构\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131416660.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131416708.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 问题背景","slug":"_1-问题背景","link":"#_1-问题背景","children":[]},{"level":2,"title":"2. 问题","slug":"_2-问题","link":"#_2-问题","children":[]},{"level":2,"title":"3. 解决方案","slug":"_3-解决方案","link":"#_3-解决方案","children":[{"level":3,"title":"3.1 同样全表查出后,找到自己的部 id,然后遍历出所有子树","slug":"_3-1-同样全表查出后-找到自己的部-id-然后遍历出所有子树","link":"#_3-1-同样全表查出后-找到自己的部-id-然后遍历出所有子树","children":[]},{"level":3,"title":"3.2 用户只查自己的单位,点击下级的时候,再查pid为自己的下级部门","slug":"_3-2-用户只查自己的单位-点击下级的时候-再查pid为自己的下级部门","link":"#_3-2-用户只查自己的单位-点击下级的时候-再查pid为自己的下级部门","children":[]},{"level":3,"title":"3.3 新增父级路径（推荐）","slug":"_3-3-新增父级路径-推荐","link":"#_3-3-新增父级路径-推荐","children":[]}]},{"level":2,"title":"4. 代码实现","slug":"_4-代码实现","link":"#_4-代码实现","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.63,"words":488},"filePathRelative":"posts/Daily-Thoughts/deepImpression/tree-structure-problem.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 问题背景</h2>\\n<p>假设类似部门表这种结构的数据有 100w条。层级大概有10层</p>\\n<table>\\n<thead>\\n<tr>\\n<th>id</th>\\n<th>name</th>\\n<th>pid</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>1</td>\\n<td>总公司</td>\\n<td>0</td>\\n</tr>\\n<tr>\\n<td>2</td>\\n<td>分公司1</td>\\n<td>1</td>\\n</tr>\\n<tr>\\n<td>3</td>\\n<td>分公司2</td>\\n<td>1</td>\\n</tr>\\n<tr>\\n<td>4</td>\\n<td>部门1</td>\\n<td>2</td>\\n</tr>\\n<tr>\\n<td>....</td>\\n<td></td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{o as comp,p as data};
