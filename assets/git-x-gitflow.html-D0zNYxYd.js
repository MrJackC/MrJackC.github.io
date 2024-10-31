import{_ as t,c as i,a,o as r}from"./app-mWs04Xnh.js";const l={};function n(o,e){return r(),i("div",null,e[0]||(e[0]=[a('<h1 id="git工作流" tabindex="-1"><a class="header-anchor" href="#git工作流"><span>git工作流</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>Git 有多种工作流方式，我们接下来就介绍几种常见的工作流，以便大家选择最适合自己的方式。</p><h2 id="_2-常见工作流" tabindex="-1"><a class="header-anchor" href="#_2-常见工作流"><span>2. 常见工作流</span></a></h2><h3 id="_2-1-主干开发" tabindex="-1"><a class="header-anchor" href="#_2-1-主干开发"><span>2.1 主干开发</span></a></h3><p>严格意义上说他并不算工作流，所有提交都在主干上</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231016835.png" alt="image-20211209213253441" tabindex="0" loading="lazy"><figcaption>image-20211209213253441</figcaption></figure><h4 id="_2-1-1-优势" tabindex="-1"><a class="header-anchor" href="#_2-1-1-优势"><span>2.1.1 优势</span></a></h4><ul><li>方便，所有都提交到master</li><li>适合一些小组件/工具</li></ul><h4 id="_2-1-2-缺陷" tabindex="-1"><a class="header-anchor" href="#_2-1-2-缺陷"><span>2.1.2 缺陷</span></a></h4><ul><li>缺乏有效管理</li></ul><h3 id="_2-2-git-flow" tabindex="-1"><a class="header-anchor" href="#_2-2-git-flow"><span>2.2 Git Flow</span></a></h3><p><code>Git工作流</code> 是最广为人知的工作流。由<code>Vincent Driessen</code> 在2010年所发明，这种工作流建立在两个具有永久生命周期的分支基础之上：</p><ul><li>master分支 - 对应生产环境的线上代码。所有开发代码都会在某个时间点合并到master分支。</li><li>develop分支 - 对应的是预生产的代码。当功能分支开发完毕之后，会被合并到develop分支。</li></ul><p>与之并行的，是在开发周期之内，还会使用一些其他类型的分支以便支持开发流程：</p><ul><li>feature-* ( * 表示通配符，下同) 分支 — 功能分支用来开发下次发布包含的新功能。这些分支应当都是从develop分支派生出来，然后最终也应该合并回develop分支。</li><li>hotfix-* 分支 — 当master分支中含有不应出现的状况时，则有必要派生出hotfix分支对master分支进行紧急修复。这些分支应当派生自master 分支，并且最终应当同时合并回master 和develop 分支。</li><li>release-* 分支 — release 分支用于准备一次新的生产环境版本更新。创建release-*分支用来修复一些在测试环境未发现的小BUG，以及更新此版本的原信息。其应当派生自develop分支，并且最终同时合并回master 分支和 develop分支。</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231016881.png" alt="image-20211209213326278" tabindex="0" loading="lazy"><figcaption>image-20211209213326278</figcaption></figure><h4 id="_2-2-1-优势" tabindex="-1"><a class="header-anchor" href="#_2-2-1-优势"><span>2.2.1 <strong>优势</strong></span></a></h4><ul><li>在项目周期之内，该工作流保证任何时刻两个主要分支都是处于纯净状态的</li><li>由于遵循系统化的模式，因此分支命名容易理解</li><li>大多数Git工具都支持该工作流的<a href="https://link.zhihu.com/?target=https%3A//github.com/nvie/gitflow" target="_blank" rel="noopener noreferrer">扩展工具</a></li><li>当项目中需要同时维护多个生产版本时，该工作流模式非常理想</li></ul><h4 id="_2-2-2-缺陷" tabindex="-1"><a class="header-anchor" href="#_2-2-2-缺陷"><span>2.2.2 <strong>缺陷</strong></span></a></h4><ul><li>Git 的历史记录将变得异常混乱，可读性很差</li><li>master / develop 分支的割裂使CI/CD流程变得更加困难</li><li>当项目维护单一生产环境版本时，该工作流则不适用</li></ul><h3 id="_2-3-github-flow" tabindex="-1"><a class="header-anchor" href="#_2-3-github-flow"><span>2.3 <strong>GitHub Flow</strong></span></a></h3><p>GitHub 工作流是一个轻型的工作流，它是GitHub 在2011年 创建，其工作流遵循以下6个原则：</p><ol><li>任何时刻的master分支代码都是可以用来部署的</li><li>任何新变更都需要从master派生出一个分支，并且为其起一个描述新变更内容的名字：比如 new-oauth2-scopes</li><li>在本地提交该新分支变更，并且应经常性的向服务器端该同名分支推送变更</li><li>当你需要帮助、反馈，或认为新分支可以合并的时候，新建一个<a href="https://link.zhihu.com/?target=http%3A//help.github.com/send-pull-requests/" target="_blank" rel="noopener noreferrer">pull request</a></li><li>只有在其他人review通过之后，新分支才允许合并到 <code>master</code> 分支</li><li>一旦新分支被合并推送至<code>master</code>分支，master分支应当立即进行部署</li></ol><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231016907.png" alt="image-20211209213349934" tabindex="0" loading="lazy"><figcaption>image-20211209213349934</figcaption></figure><h4 id="_2-3-1-优势" tabindex="-1"><a class="header-anchor" href="#_2-3-1-优势"><span>2.3.1 <strong>优势</strong></span></a></h4><ul><li>该工作流对于CI/CD流程友好</li><li>是Git工作流的一种简版替换</li><li>当项目维护单一生产环境版本时，该工作流适用</li></ul><h4 id="_2-3-2-缺陷" tabindex="-1"><a class="header-anchor" href="#_2-3-2-缺陷"><span>2.3.2 缺陷</span></a></h4><ul><li>生产环境对应的代码极易处于不稳定状态</li><li>对于依赖<a href="https://www.zhihu.com/search?q=%E5%8F%91%E5%B8%83%E8%AE%A1%E5%88%92&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A434078984%7D" target="_blank" rel="noopener noreferrer">发布计划</a>的项目无法充分支持</li><li>该工作流并不涉及关于部署，环境，发布和问题等方面的解决方案</li><li>当项目维护多生产环境版本时，该工作流不适用</li></ul><h3 id="_2-4-gitlab-flow" tabindex="-1"><a class="header-anchor" href="#_2-4-gitlab-flow"><span>2.4 <strong>GitLab Flow</strong></span></a></h3><p>GitLab工作流由<a href="https://link.zhihu.com/?target=https%3A//about.gitlab.com/2014/09/29/gitlab-flow/" target="_blank" rel="noopener noreferrer">GitLab</a>创建于2014年。这种工作流将<a href="https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/Feature-driven_development" target="_blank" rel="noopener noreferrer">功能驱动的开发模式</a>与问题跟踪结合在一起。与GitHub工作流最大的不同，是GitLab工作流新创建了与环境相关的分支（比如，<code>staging</code>分支和<code>production</code>分支），适用于每次合并功能分支后不需马上部署至生产环境的项目（如SaaS软件，移动软件项目等）。</p><p>GitLab工作流遵循以下11条原则：</p><ol><li>使用功能分支进行开发，而不是直接在<code>master</code>分支上提交代码 （如果你的开发主分支是 <code>master</code>的话，下同）</li><li>测试每一次commit，而不仅仅是对<code>master</code>分支进行测试</li><li>在所有commits上运行自动化测试（如果你的测试脚本运行时间超过5分钟，就让他们并行）</li><li>在<a href="https://www.zhihu.com/search?q=%E5%90%88%E5%B9%B6%E4%BB%A3%E7%A0%81&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A434078984%7D" target="_blank" rel="noopener noreferrer">合并代码</a>之前进行code review，而不是在合并之后</li><li>以分支名或者tag为准进行自动化的部署</li><li>tag由人来设定，而不是CI</li><li>发布版本应建立在tag上</li><li>已push的commits永远不要进行rebase</li><li>所有人从<code>master</code>派生新分支，最终合并回`master</li><li>修复bug时应该优先修复<code>master</code>分支的代码，修复之后再cherry-pick到线上分支</li><li>commit messages 要有意义</li></ol><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231016931.png" alt="image-20211209213428242" tabindex="0" loading="lazy"><figcaption>image-20211209213428242</figcaption></figure><h4 id="_2-4-1-优势" tabindex="-1"><a class="header-anchor" href="#_2-4-1-优势"><span>2.4.1 <strong>优势</strong></span></a></h4><ul><li>相对于前两种工作流，GitLab工作流定义了如何进行CI和CD流程的整合</li><li>提交历史会非常清爽，历史信息看上去会更具可读性</li><li>当项目维护单一生产环境版本时，该工作流适用</li></ul><h4 id="_2-4-2-缺陷" tabindex="-1"><a class="header-anchor" href="#_2-4-2-缺陷"><span>2.4.2 <strong>缺陷</strong></span></a></h4><ul><li>比GitHub工作流更加复杂</li><li>当项目维护多生产环境版本时，将会变得和Git Flow一样复杂</li></ul><h3 id="_2-5-one-flow" tabindex="-1"><a class="header-anchor" href="#_2-5-one-flow"><span>2.5 <strong>One Flow</strong></span></a></h3><p>One Flow 最初在<a href="https://link.zhihu.com/?target=http%3A//endoflineblog.com/gitflow-considered-harmful" target="_blank" rel="noopener noreferrer">GitFlow considered harmful by Adam Ruka, 2015</a>这篇文章中提出，作为Git Flow的另一种选择。使用One Flow需要满足的最重要的条件，是生产版本的每一次更新都基于前一生产版本，与Git Flow最大的区别是没有<code>develop</code>这一分支。</p><h4 id="_2-5-1-优势" tabindex="-1"><a class="header-anchor" href="#_2-5-1-优势"><span>2.5.1 <strong>优势</strong></span></a></h4><ul><li>提交历史会非常清爽，历史信息看上去会更具可读性</li><li>灵活的团队协作机制</li><li>当项目维护单一生产环境版本时，该工作流适用</li></ul><h4 id="_2-5-2-缺陷" tabindex="-1"><a class="header-anchor" href="#_2-5-2-缺陷"><span>2.5.2 <strong>缺陷</strong></span></a></h4><ul><li>自动化CI/CD能力的项目慎用</li><li>功能分支不明确，不适用<a href="https://www.zhihu.com/search?q=%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A434078984%7D" target="_blank" rel="noopener noreferrer">持续集成</a></li><li>当项目维护多生产环境版本时，该工作流不适用</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/434078984" target="_blank" rel="noopener noreferrer">四种常见的Git工作流</a></p>',46)]))}const h=t(l,[["render",n],["__file","git-x-gitflow.html.vue"]]),c=JSON.parse('{"path":"/posts/Git/git-x-gitflow.html","title":"git工作流","lang":"zh-CN","frontmatter":{"description":"git工作流 1. 简介 Git 有多种工作流方式，我们接下来就介绍几种常见的工作流，以便大家选择最适合自己的方式。 2. 常见工作流 2.1 主干开发 严格意义上说他并不算工作流，所有提交都在主干上 image-20211209213253441image-20211209213253441 2.1.1 优势 方便，所有都提交到master 适合一些...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Git/git-x-gitflow.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"git工作流"}],["meta",{"property":"og:description","content":"git工作流 1. 简介 Git 有多种工作流方式，我们接下来就介绍几种常见的工作流，以便大家选择最适合自己的方式。 2. 常见工作流 2.1 主干开发 严格意义上说他并不算工作流，所有提交都在主干上 image-20211209213253441image-20211209213253441 2.1.1 优势 方便，所有都提交到master 适合一些..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231016835.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"git工作流\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231016835.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231016881.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231016907.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231016931.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 常见工作流","slug":"_2-常见工作流","link":"#_2-常见工作流","children":[{"level":3,"title":"2.1 主干开发","slug":"_2-1-主干开发","link":"#_2-1-主干开发","children":[]},{"level":3,"title":"2.2 Git Flow","slug":"_2-2-git-flow","link":"#_2-2-git-flow","children":[]},{"level":3,"title":"2.3 GitHub Flow","slug":"_2-3-github-flow","link":"#_2-3-github-flow","children":[]},{"level":3,"title":"2.4 GitLab Flow","slug":"_2-4-gitlab-flow","link":"#_2-4-gitlab-flow","children":[]},{"level":3,"title":"2.5 One Flow","slug":"_2-5-one-flow","link":"#_2-5-one-flow","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.73,"words":1718},"filePathRelative":"posts/Git/git-x-gitflow.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>Git 有多种工作流方式，我们接下来就介绍几种常见的工作流，以便大家选择最适合自己的方式。</p>\\n<h2>2. 常见工作流</h2>\\n<h3>2.1 主干开发</h3>\\n<p>严格意义上说他并不算工作流，所有提交都在主干上</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231016835.png\\" alt=\\"image-20211209213253441\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20211209213253441</figcaption></figure>","autoDesc":true}');export{h as comp,c as data};