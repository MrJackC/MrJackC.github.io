import{_ as l,c as t,a as p,o as a}from"./app-JRvFIbSa.js";const i={};function o(n,e){return a(),t("div",null,e[0]||(e[0]=[p('<h1 id="拖拽排序后端设计思路" tabindex="-1"><a class="header-anchor" href="#拖拽排序后端设计思路"><span>拖拽排序后端设计思路</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>最近做项目的时候遇到一个问题，就是前端需要对图片材料等拖拽排序。但排序后怎么存储？是批量保存所有顺序</p><h2 id="_2-需求描述" tabindex="-1"><a class="header-anchor" href="#_2-需求描述"><span>2. 需求描述</span></a></h2><ul><li>允许更改元素的排序；</li><li>允许新增数据，并更新现有排序；</li><li>允许删除数据，并更新现有排序。</li></ul><h2 id="_3-解决方案" tabindex="-1"><a class="header-anchor" href="#_3-解决方案"><span>3. 解决方案</span></a></h2><h3 id="_3-1-方案一-全量更新元素位置" tabindex="-1"><a class="header-anchor" href="#_3-1-方案一-全量更新元素位置"><span>3.1 方案一： 全量更新元素位置</span></a></h3><ul><li><p>适用场景：</p><p>排序元素数量较少</p></li><li><p>原理：</p><p>每个元素拥有一个字段，表示元素当前排序的位置。通过前端排序，将排好的元素位置，一次性发送到后端。然后，后端统一更新所有元素的位置。</p></li><li><p>缺点</p><p>数据量过大，会导致频繁修改，造成数据库IO瓶颈</p></li><li><p>总结：</p><p>此方法仅适用于排序元素较少（例如，总元素为5~15个）的场景。对于大量数据排序并不适用</p></li></ul><h3 id="_3-2-取中值法-推荐" tabindex="-1"><a class="header-anchor" href="#_3-2-取中值法-推荐"><span>3.2 取中值法（推荐）</span></a></h3><p>原理与实现步骤：</p><ol><li>创建元素时给元素赋默认位置（<code>pos</code>字段记录该值）。赋值规则为，当创建第一个元素时，默认位置赋值为65536，第二个元素为 <code>2 * 65536 = 13172</code>，增加第N个元素时，位置赋值为N*65536。</li><li>当拖拽改变元素位置时，更新 <code>pos</code>。更新规则如下：</li></ol><ul><li>调整一个元素到两个元素中间时，<code>(pre_item.pos + after_item.pos）/ 2 = pos</code></li><li>调整一个元素到第一个元素时， <code>old_first_item.pos / 2 = pos</code></li><li>调整一个元素到最后一个元素时， <code>old_last_item.post + 65536 = pos</code></li></ul><ol><li>当前后两个元素的数值，不满足整数时，更新所有元素的排序。依次给每个元素的 <code>pos</code>赋新值。例如，第一位赋值65536，第二位为<code>2 * 65536</code>，第N位赋值N*65536。</li></ol><p>通过取中值的方法，改变元素的位置。当需要按序获取时，只需要对 <code>pos</code>进行排序，就可以获取元素的位置。</p><h4 id="_3-2-1-重排问题方案" tabindex="-1"><a class="header-anchor" href="#_3-2-1-重排问题方案"><span>3.2.1 重排问题方案</span></a></h4><ul><li><p>方案1：浮点数</p><p>可以使用浮点数储存 <code>pos</code>，但是需要考虑数据库存储的精度问题。而且，数值过小，会在前端丢失精度，元素排序会出现问题</p></li><li><p>方案2（推荐）：数值过小重排</p><p>如果在接口层，当检测到中值过小，则对所有元素进行重排，接口相应速度会存在问题</p></li><li><p>方案3：定时重排</p><p>利用定时任务每天对所有元素定时重排，来解决单次接口的性能问题。个人觉得这个方法，还是存在问题。若定时任务不及时，那么排序由于精度问题</p></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.jianshu.com/p/9ee708e43ebf" target="_blank" rel="noopener noreferrer">拖拽排序后端设计与实现</a></p>',18)]))}const s=l(i,[["render",o],["__file","drag-sort-problem.html.vue"]]),d=JSON.parse('{"path":"/posts/Daily-Thoughts/deepImpression/drag-sort-problem.html","title":"拖拽排序后端设计思路","lang":"zh-CN","frontmatter":{"description":"拖拽排序后端设计思路 1. 背景 最近做项目的时候遇到一个问题，就是前端需要对图片材料等拖拽排序。但排序后怎么存储？是批量保存所有顺序 2. 需求描述 允许更改元素的排序； 允许新增数据，并更新现有排序； 允许删除数据，并更新现有排序。 3. 解决方案 3.1 方案一： 全量更新元素位置 适用场景： 排序元素数量较少 原理： 每个元素拥有一个字段，表示...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Daily-Thoughts/deepImpression/drag-sort-problem.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"拖拽排序后端设计思路"}],["meta",{"property":"og:description","content":"拖拽排序后端设计思路 1. 背景 最近做项目的时候遇到一个问题，就是前端需要对图片材料等拖拽排序。但排序后怎么存储？是批量保存所有顺序 2. 需求描述 允许更改元素的排序； 允许新增数据，并更新现有排序； 允许删除数据，并更新现有排序。 3. 解决方案 3.1 方案一： 全量更新元素位置 适用场景： 排序元素数量较少 原理： 每个元素拥有一个字段，表示..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"拖拽排序后端设计思路\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 需求描述","slug":"_2-需求描述","link":"#_2-需求描述","children":[]},{"level":2,"title":"3. 解决方案","slug":"_3-解决方案","link":"#_3-解决方案","children":[{"level":3,"title":"3.1 方案一： 全量更新元素位置","slug":"_3-1-方案一-全量更新元素位置","link":"#_3-1-方案一-全量更新元素位置","children":[]},{"level":3,"title":"3.2 取中值法（推荐）","slug":"_3-2-取中值法-推荐","link":"#_3-2-取中值法-推荐","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.33,"words":698},"filePathRelative":"posts/Daily-Thoughts/deepImpression/drag-sort-problem.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>最近做项目的时候遇到一个问题，就是前端需要对图片材料等拖拽排序。但排序后怎么存储？是批量保存所有顺序</p>\\n<h2>2. 需求描述</h2>\\n<ul>\\n<li>允许更改元素的排序；</li>\\n<li>允许新增数据，并更新现有排序；</li>\\n<li>允许删除数据，并更新现有排序。</li>\\n</ul>\\n<h2>3. 解决方案</h2>\\n<h3>3.1 方案一： 全量更新元素位置</h3>\\n<ul>\\n<li>\\n<p>适用场景：</p>\\n<p>排序元素数量较少</p>\\n</li>\\n<li>\\n<p>原理：</p>\\n<p>每个元素拥有一个字段，表示元素当前排序的位置。通过前端排序，将排好的元素位置，一次性发送到后端。然后，后端统一更新所有元素的位置。</p>\\n</li>\\n<li>\\n<p>缺点</p>\\n<p>数据量过大，会导致频繁修改，造成数据库IO瓶颈</p>\\n</li>\\n<li>\\n<p>总结：</p>\\n<p>此方法仅适用于排序元素较少（例如，总元素为5~15个）的场景。对于大量数据排序并不适用</p>\\n</li>\\n</ul>","autoDesc":true}');export{s as comp,d as data};
