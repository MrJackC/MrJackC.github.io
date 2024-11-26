import{_ as a,c as e,a as n,o as i}from"./app-JRvFIbSa.js";const l={};function r(o,s){return i(),e("div",null,s[0]||(s[0]=[n(`<h1 id="jenkins共享库编写与使用" tabindex="-1"><a class="header-anchor" href="#jenkins共享库编写与使用"><span>Jenkins共享库编写与使用</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>如果你经常使用 Jenkins Pipeline 一定会遇到多个不同流水线中有大量重复代码的情况，很多时候为了方便我们都是直接复制粘贴到不同的管道中去的，但是长期下去这些代码的维护就会越来越麻烦。为了解决这个问题，Jenkins 中提供了共享库的概念来解决重复代码的问题，我们只需要将公共部分提取出来，然后就可以在所有的 Pipeline 中引用这些共享库下面的代码了。</p><h2 id="_2-共享库是什么" tabindex="-1"><a class="header-anchor" href="#_2-共享库是什么"><span>2. 共享库是什么？</span></a></h2><p>共享库（shared library）是一些<strong>独立的 Groovy 脚本的集合</strong>，我们可以在运行 Pipeline 的时候去获取这些共享库代码。使用共享库最好的方式同样是把代码使用 Git 仓库进行托管，这样我们就可以进行版本化管理了。</p><p>使用共享库一般只需要3个步骤即可：</p><ul><li>首先创建 Groovy 脚本，添加到 Git 仓库中</li><li>然后在 Jenkins 中配置将共享库添加到 Jenkins 中来</li><li>最后，在我们的流水线中导入需要使用的共享库：<code>@Library(&#39;your-shared-library&#39;)</code>，这样就可以使用共享库中的代码了。</li></ul><h2 id="_3-共享库内容" tabindex="-1"><a class="header-anchor" href="#_3-共享库内容"><span>3. 共享库内容</span></a></h2><p>在共享库中一般会有两种通用的代码：</p><h3 id="_3-1-vars-下的steps" tabindex="-1"><a class="header-anchor" href="#_3-1-vars-下的steps"><span>3.1 vars 下的steps</span></a></h3><blockquote><p><strong>Steps</strong>：这些 Steps 在 Jenkins 中被称为<strong>全局变量</strong>，我们可以在所有的 Jenkins Pipeline 中使用这些自定义的 Steps。</p></blockquote><p>比如，我们可以编写一个标准的 Step 来部署应用或者发送消息通知等，我们就可以将代码添加到 <code>vars/YourStepName.groovy</code> 文件中，然后实现一个 <code>call</code> 函数即可：</p><div class="language-groovy" data-ext="groovy" data-title="groovy"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/usr/bin/env groovy</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// vars/YourStepName.groovy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">def</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> call</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // Do something here...</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="_3-2-src下的通用代码-通常放帮助类" tabindex="-1"><a class="header-anchor" href="#_3-2-src下的通用代码-通常放帮助类"><span>3.2 src下的通用代码（通常放帮助类）</span></a></h3><p>这些代码需要放在 <code>src/your/package/name</code> 目录下面，然后就可以使用常规的 Groovy 语法了，例如：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>#!/usr/bin/env groovy</span></span>
<span class="line"><span>// com/qikqiak/GlobalVars.groovy</span></span>
<span class="line"><span>package com.qikqiak</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class GlobalVars {</span></span>
<span class="line"><span>   static String foo = &quot;bar&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我们可以在 Jenkins Pipeline 中使用 <code>import</code> 导入上面的类，并引用其中的静态变量，比如 <code>GlobalVars.foo</code>。</p><h2 id="_4-示例" tabindex="-1"><a class="header-anchor" href="#_4-示例"><span>4. 示例</span></a></h2><h3 id="_4-1-步骤1-vars的steps示例" tabindex="-1"><a class="header-anchor" href="#_4-1-步骤1-vars的steps示例"><span>4.1 步骤1：vars的steps示例</span></a></h3><p>新建一个名为 <code>pipeline-library-demo</code> 的文件夹，将该项目加入到 Git 仓库中。首先创建一个名为 <code>vars</code> 的目录，自定义一个 step 就是在 <code>vars</code> 目录下面的一个 <code>.groovy</code> 文件，这些被称为全局变量，比如我们添加一个 <code>sayHi.groovy</code> 的文件，代码如下所示：</p><div class="language-groovy" data-ext="groovy" data-title="groovy"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/usr/bin/env groovy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">def</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> call</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">String</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> name</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;zsz&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  echo </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Hello, </span><span style="color:#C678DD;--shiki-dark:#C678DD;">\${</span><span style="color:#98C379;--shiki-dark:#98C379;">name</span><span style="color:#C678DD;--shiki-dark:#C678DD;">}</span><span style="color:#98C379;--shiki-dark:#98C379;">.&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>需要注意的是需要实现 call 方法，添加了一个名为 name 的参数，具有默认值 <code>zsz</code>，可以用 <code>\${name}</code> 来进行访问。</p><h3 id="_4-2-步骤2-src-的通用代码示例" tabindex="-1"><a class="header-anchor" href="#_4-2-步骤2-src-的通用代码示例"><span>4.2 步骤2：src 的通用代码示例</span></a></h3><p>然后创建一个名为 <code>src/com/zsz/GlobalVars.groovy</code> 的文件，文件内容如下所示：</p><div class="language-groovy" data-ext="groovy" data-title="groovy"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/usr/bin/env groovy</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">package</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> com.qikqiak</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> GlobalVars</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> foo</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;bar&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 在 Pipeline 中可以引用这里的静态变量：</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // import com.zsz.GlobalVars</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // println GlobalVars.foo</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="_4-3-完整的代码目录如下所示" tabindex="-1"><a class="header-anchor" href="#_4-3-完整的代码目录如下所示"><span>4.3 完整的代码目录如下所示：</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>$ tree .</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>├── README.md</span></span>
<span class="line"><span>├── src</span></span>
<span class="line"><span>│   └── com</span></span>
<span class="line"><span>│       └── zsz</span></span>
<span class="line"><span>│           └── GlobalVars.groovy</span></span>
<span class="line"><span>└── vars</span></span>
<span class="line"><span>    └── sayHi.groovy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4 directories, 3 files</span></span></code></pre></div><h3 id="_4-4-上传代码到git" tabindex="-1"><a class="header-anchor" href="#_4-4-上传代码到git"><span>4.4 上传代码到git</span></a></h3><p><a href="https://gitee.com/zszdevelop/pipeline-library-demo" target="_blank" rel="noopener noreferrer">https://gitee.com/zszdevelop/pipeline-library-demo</a></p><h3 id="_4-5-jenkins-添加共享库" tabindex="-1"><a class="header-anchor" href="#_4-5-jenkins-添加共享库"><span>4.5 Jenkins 添加共享库</span></a></h3><p>共享库创建完成后，我们需要让 Jenkins 知道这个共享库，我们可以从 Jenkins 的 Web 页面进行添加。在 Jenkins 首页 -&gt; 系统管理 -&gt; 系统配置，在 <code>Global Pipeline Libraries</code> 区域配置共享库：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231031898.png" alt="image-20211001182353785" tabindex="0" loading="lazy"><figcaption>image-20211001182353785</figcaption></figure><h3 id="_4-6-新建流水线项目" tabindex="-1"><a class="header-anchor" href="#_4-6-新建流水线项目"><span>4.6 新建流水线项目</span></a></h3><p>保存后即可使用配置共享库。接下来新建一个名为 <code>share-lib-demo</code> 的流水线项目，在 <code>Pipeline script</code> 区域添加如下代码：</p><div class="language-groovy" data-ext="groovy" data-title="groovy"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">@Library</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;pipeline-library-demo&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)_</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> com.qikqiak.GlobalVars</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">stage</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;Demo&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    echo </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;Hello world&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    sayHi </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;张三&#39;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">    println</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> GlobalVars</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.foo</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231031936.png" alt="image-20211001182543979" tabindex="0" loading="lazy"><figcaption>image-20211001182543979</figcaption></figure><p>需要注意的是 <code>@Library(&#39;pipeline-library-demo&#39;)_</code> 最后有一个下划线 <code>_</code>，这个下划线并不是写错了，如果 <code>@Libray</code> 后面紧接的一行不是 <code>import</code> 语句的话，就需要这个下划线，我们这里后面就是一条 <code>import</code> 语句，所以这里可以省略这个下划线。</p><h3 id="_4-7-构建输出" tabindex="-1"><a class="header-anchor" href="#_4-7-构建输出"><span>4.7 构建输出</span></a></h3><p>配置完成后，构建这个 Pipeline，正常就可以看到如下所示的构建结果</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231031965.png" alt="image-20211001182654054" tabindex="0" loading="lazy"><figcaption>image-20211001182654054</figcaption></figure><h2 id="_5-参考文章" tabindex="-1"><a class="header-anchor" href="#_5-参考文章"><span>5. 参考文章</span></a></h2><p><a href="https://www.jenkins.io/zh/doc/book/pipeline/shared-libraries/" target="_blank" rel="noopener noreferrer">jenkins官网</a></p><p><a href="https://www.qikqiak.com/post/jenkins-shared-library-demo/" target="_blank" rel="noopener noreferrer">Jenkins 共享库示例</a></p><p><a href="https://github.com/zszdevelop/jenkinslibrary" target="_blank" rel="noopener noreferrer">DevOps流水线最佳实践</a></p>`,44)]))}const t=a(l,[["render",r],["__file","jenkins-x-sharedlib.html.vue"]]),c=JSON.parse('{"path":"/posts/MiddleWare/Jenkins/jenkins-x-sharedlib.html","title":"Jenkins共享库编写与使用","lang":"zh-CN","frontmatter":{"aliases":"Jenkins共享库编写与使用","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:50","updated":"2024-04-23 10:31","description":"Jenkins共享库编写与使用 1. 背景 如果你经常使用 Jenkins Pipeline 一定会遇到多个不同流水线中有大量重复代码的情况，很多时候为了方便我们都是直接复制粘贴到不同的管道中去的，但是长期下去这些代码的维护就会越来越麻烦。为了解决这个问题，Jenkins 中提供了共享库的概念来解决重复代码的问题，我们只需要将公共部分提取出来，然后就可...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/MiddleWare/Jenkins/jenkins-x-sharedlib.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Jenkins共享库编写与使用"}],["meta",{"property":"og:description","content":"Jenkins共享库编写与使用 1. 背景 如果你经常使用 Jenkins Pipeline 一定会遇到多个不同流水线中有大量重复代码的情况，很多时候为了方便我们都是直接复制粘贴到不同的管道中去的，但是长期下去这些代码的维护就会越来越麻烦。为了解决这个问题，Jenkins 中提供了共享库的概念来解决重复代码的问题，我们只需要将公共部分提取出来，然后就可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231031898.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jenkins共享库编写与使用\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231031898.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231031936.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231031965.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 共享库是什么？","slug":"_2-共享库是什么","link":"#_2-共享库是什么","children":[]},{"level":2,"title":"3. 共享库内容","slug":"_3-共享库内容","link":"#_3-共享库内容","children":[{"level":3,"title":"3.1 vars 下的steps","slug":"_3-1-vars-下的steps","link":"#_3-1-vars-下的steps","children":[]},{"level":3,"title":"3.2 src下的通用代码（通常放帮助类）","slug":"_3-2-src下的通用代码-通常放帮助类","link":"#_3-2-src下的通用代码-通常放帮助类","children":[]}]},{"level":2,"title":"4. 示例","slug":"_4-示例","link":"#_4-示例","children":[{"level":3,"title":"4.1 步骤1：vars的steps示例","slug":"_4-1-步骤1-vars的steps示例","link":"#_4-1-步骤1-vars的steps示例","children":[]},{"level":3,"title":"4.2 步骤2：src 的通用代码示例","slug":"_4-2-步骤2-src-的通用代码示例","link":"#_4-2-步骤2-src-的通用代码示例","children":[]},{"level":3,"title":"4.3 完整的代码目录如下所示：","slug":"_4-3-完整的代码目录如下所示","link":"#_4-3-完整的代码目录如下所示","children":[]},{"level":3,"title":"4.4 上传代码到git","slug":"_4-4-上传代码到git","link":"#_4-4-上传代码到git","children":[]},{"level":3,"title":"4.5 Jenkins 添加共享库","slug":"_4-5-jenkins-添加共享库","link":"#_4-5-jenkins-添加共享库","children":[]},{"level":3,"title":"4.6 新建流水线项目","slug":"_4-6-新建流水线项目","link":"#_4-6-新建流水线项目","children":[]},{"level":3,"title":"4.7 构建输出","slug":"_4-7-构建输出","link":"#_4-7-构建输出","children":[]}]},{"level":2,"title":"5. 参考文章","slug":"_5-参考文章","link":"#_5-参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.67,"words":1102},"filePathRelative":"posts/MiddleWare/Jenkins/jenkins-x-sharedlib.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>如果你经常使用 Jenkins Pipeline 一定会遇到多个不同流水线中有大量重复代码的情况，很多时候为了方便我们都是直接复制粘贴到不同的管道中去的，但是长期下去这些代码的维护就会越来越麻烦。为了解决这个问题，Jenkins 中提供了共享库的概念来解决重复代码的问题，我们只需要将公共部分提取出来，然后就可以在所有的 Pipeline 中引用这些共享库下面的代码了。</p>\\n<h2>2. 共享库是什么？</h2>\\n<p>共享库（shared library）是一些<strong>独立的 Groovy 脚本的集合</strong>，我们可以在运行 Pipeline 的时候去获取这些共享库代码。使用共享库最好的方式同样是把代码使用 Git 仓库进行托管，这样我们就可以进行版本化管理了。</p>","autoDesc":true}');export{t as comp,c as data};
