import{_ as s,c as a,a as i,o as r}from"./app-W9QyTiMU.js";const t={};function n(o,e){return r(),a("div",null,e[0]||(e[0]=[i(`<h1 id="git-merge的三种操作" tabindex="-1"><a class="header-anchor" href="#git-merge的三种操作"><span>git merge的三种操作</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>git merge的三种操作merge, squash merge, 和rebase merge</p><p>举例来说：<br> 假设在master分支的B点拉出一个新的分支dev，经过一段时间开发后：</p><ul><li>master分支上有两个新的提交M1和M2</li><li>dev分支上有三个提交D1，D2，和D3</li></ul><p>如下图所示：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231017221.png" alt="image-20211210215256075" tabindex="0" loading="lazy"><figcaption>image-20211210215256075</figcaption></figure><p>现在我们完成了dev分支的开发测试工作，需要把dev分支合并回master分支。</p><h2 id="_2-merge-的三种操作" tabindex="-1"><a class="header-anchor" href="#_2-merge-的三种操作"><span>2. merge 的三种操作</span></a></h2><h3 id="_2-1-merge" tabindex="-1"><a class="header-anchor" href="#_2-1-merge"><span>2.1 merge</span></a></h3><p>这是最基本的merge，就是把提交历史原封不动的拷贝过来，包含完整的提交历史记录。</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">git</span><span style="color:#98C379;--shiki-dark:#98C379;"> checkout</span><span style="color:#98C379;--shiki-dark:#98C379;"> master</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">git</span><span style="color:#98C379;--shiki-dark:#98C379;"> merge</span><span style="color:#98C379;--shiki-dark:#98C379;"> dev</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231017264.png" alt="image-20211210215426765" tabindex="0" loading="lazy"><figcaption>image-20211210215426765</figcaption></figure><p><strong>此时还会生产一个merge commit (D4&#39;)</strong>，这个merge commit不包含任何代码改动，而包含在dev分支上的几个commit列表(D1, D2和D3)。查看git的提交历史(git log)可以看到所有的这些提交历史记录。</p><h3 id="_2-2-squash-merge" tabindex="-1"><a class="header-anchor" href="#_2-2-squash-merge"><span>2.2 squash merge</span></a></h3><p>根据字面意思，这个操作完成的是压缩的提交；解决的是什么问题呢，由于在dev分支上执行的是开发工作，有一些很小的提交，或者是纠正前面的错误的提交，对于这类提交对整个工程来说不需要单独显示出来一次提交，不然导致项目的提交历史过于复杂；所以基于这种原因，我们可以把dev上的所有提交都合并成一个提交；然后提交到主干。</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> git</span><span style="color:#98C379;--shiki-dark:#98C379;"> checkout</span><span style="color:#98C379;--shiki-dark:#98C379;"> master</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> git</span><span style="color:#98C379;--shiki-dark:#98C379;"> merge</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --squash</span><span style="color:#98C379;--shiki-dark:#98C379;"> dev</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231017292.png" alt="image-20211210215937039" tabindex="0" loading="lazy"><figcaption>image-20211210215937039</figcaption></figure><p>在这个例子中，我们把D1，D2和D3的改动合并成了一个D。</p><p>注意，squash merge并不会替你产生提交，它只是把所有的改动合并，然后放在本地文件，需要你再次手动执行git commit操作；此时又要注意了，因为你要你手动commit，也就是说这个commit是你产生的，不是有原来dev分支上的开发人员产生的，提交者本身发生了变化。也可以这么理解，就是你把dev分支上的所有代码改动一次性porting到master分支上而已。</p><h3 id="_2-3-rebase-merge" tabindex="-1"><a class="header-anchor" href="#_2-3-rebase-merge"><span>2.3 rebase merge</span></a></h3><p>由于squash merge会变更提交者作者信息，这是一个很大的问题，后期问题追溯不好处理(当然也可以由分支dev的所有者来执行squash merge操作，以解决部分问题)，rebase merge可以保留提交的作者信息，同时可以合并commit历史，完美的解决了上面的问题。</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> git</span><span style="color:#98C379;--shiki-dark:#98C379;"> checkout</span><span style="color:#98C379;--shiki-dark:#98C379;"> dev</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> git</span><span style="color:#98C379;--shiki-dark:#98C379;"> rebase</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -i</span><span style="color:#98C379;--shiki-dark:#98C379;"> master</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> git</span><span style="color:#98C379;--shiki-dark:#98C379;"> checkout</span><span style="color:#98C379;--shiki-dark:#98C379;"> master</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> git</span><span style="color:#98C379;--shiki-dark:#98C379;"> merge</span><span style="color:#98C379;--shiki-dark:#98C379;"> dev</span></span></code></pre></div><p>rebase merge分两步完成：<br> 第一步：执行rebase操作，结果是看起来dev分支是从M2拉出来的，而不是从B拉出来的，然后使用-i参数手动调整commit历史，是否合并如何合并。例如下rebase -i命令会弹出文本编辑框：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">pick</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">D</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">1&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">Message</span><span style="color:#98C379;--shiki-dark:#98C379;"> for</span><span style="color:#98C379;--shiki-dark:#98C379;"> commit</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">pick</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">D</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">2&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">Message</span><span style="color:#98C379;--shiki-dark:#98C379;"> for</span><span style="color:#98C379;--shiki-dark:#98C379;"> commit</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">pick</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">D</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">3&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">Message</span><span style="color:#98C379;--shiki-dark:#98C379;"> for</span><span style="color:#98C379;--shiki-dark:#98C379;"> commit</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #3</span></span></code></pre></div><p>假设D2是对D1的一个拼写错误修正，因此可以不需要显式的指出来，我们把D2修改为fixup：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">pick</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">D</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">1&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">Message</span><span style="color:#98C379;--shiki-dark:#98C379;"> for</span><span style="color:#98C379;--shiki-dark:#98C379;"> commit</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">fixup</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">D</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">2&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">Message</span><span style="color:#98C379;--shiki-dark:#98C379;"> for</span><span style="color:#98C379;--shiki-dark:#98C379;"> commit</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">pick</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">D</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">3&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">Message</span><span style="color:#98C379;--shiki-dark:#98C379;"> for</span><span style="color:#98C379;--shiki-dark:#98C379;"> commit</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #3</span></span></code></pre></div><p>rebase之后的状态变为：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231017318.png" alt="image-20211210220238914" tabindex="0" loading="lazy"><figcaption>image-20211210220238914</figcaption></figure><p>D1&#39;是D1和D2的合并。</p><p>第二步：再执行merge操作，把dev分支合并到master分支：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231017343.png" alt="image-20211210220256208" tabindex="0" loading="lazy"><figcaption>image-20211210220256208</figcaption></figure><p>注意：在执行rebase的时候可能会出现冲突的问题，此时需要手工解决冲突的问题，然后执行(git add)命令；所有冲突解决完之后，这时不需要执行(git commit)命令，而是运行(git rebase --continue)命令，一直到rebase完成；如果中途想放弃rebase操作，可以运行(git rebase --abort)命令回到rebase之前的状态。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.jianshu.com/p/ff1877c5864e" target="_blank" rel="noopener noreferrer">git merge的三种操作merge, squash merge, 和rebase merge</a></p>`,35)]))}const p=s(t,[["render",n],["__file","git-x-merge.html.vue"]]),c=JSON.parse('{"path":"/posts/Git/git-x-merge.html","title":"git merge的三种操作","lang":"zh-CN","frontmatter":{"description":"git merge的三种操作 1. 背景 git merge的三种操作merge, squash merge, 和rebase merge 举例来说： 假设在master分支的B点拉出一个新的分支dev，经过一段时间开发后： master分支上有两个新的提交M1和M2 dev分支上有三个提交D1，D2，和D3 如下图所示： image-20211210...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Git/git-x-merge.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"git merge的三种操作"}],["meta",{"property":"og:description","content":"git merge的三种操作 1. 背景 git merge的三种操作merge, squash merge, 和rebase merge 举例来说： 假设在master分支的B点拉出一个新的分支dev，经过一段时间开发后： master分支上有两个新的提交M1和M2 dev分支上有三个提交D1，D2，和D3 如下图所示： image-20211210..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231017221.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"git merge的三种操作\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231017221.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231017264.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231017292.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231017318.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231017343.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. merge 的三种操作","slug":"_2-merge-的三种操作","link":"#_2-merge-的三种操作","children":[{"level":3,"title":"2.1 merge","slug":"_2-1-merge","link":"#_2-1-merge","children":[]},{"level":3,"title":"2.2 squash merge","slug":"_2-2-squash-merge","link":"#_2-2-squash-merge","children":[]},{"level":3,"title":"2.3 rebase merge","slug":"_2-3-rebase-merge","link":"#_2-3-rebase-merge","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.25,"words":975},"filePathRelative":"posts/Git/git-x-merge.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>git merge的三种操作merge, squash merge, 和rebase merge</p>\\n<p>举例来说：<br>\\n假设在master分支的B点拉出一个新的分支dev，经过一段时间开发后：</p>\\n<ul>\\n<li>master分支上有两个新的提交M1和M2</li>\\n<li>dev分支上有三个提交D1，D2，和D3</li>\\n</ul>\\n<p>如下图所示：</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231017221.png\\" alt=\\"image-20211210215256075\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20211210215256075</figcaption></figure>","autoDesc":true}');export{p as comp,c as data};
