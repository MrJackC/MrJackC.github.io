import{_ as i,c as r,a as t,o}from"./app-DP7tPpgD.js";const e={};function n(s,a){return o(),r("div",null,a[0]||(a[0]=[t(`<h1 id="导入springboot源码" tabindex="-1"><a class="header-anchor" href="#导入springboot源码"><span>导入SpringBoot源码</span></a></h1><h2 id="_1-导入源码" tabindex="-1"><a class="header-anchor" href="#_1-导入源码"><span>1. 导入源码</span></a></h2><blockquote><p>我们项目中的springboot 版本为2.1.0.RELEASE，所以我们就以2.1.0.RELEASE为学习标准</p></blockquote><ol><li><p>源码地址</p><p><a href="https://github.com/spring-projects/spring-boot/tree/v2.1.0.RELEASE" target="_blank" rel="noopener noreferrer">https://github.com/spring-projects/spring-boot/tree/v2.1.0.RELEASE</a></p></li><li><p>fork到自己github仓库</p><p>fork 到自己仓库，可以方便的写一些注释帮助我们阅读理解源码</p></li><li><p>建个分支来学习</p><p>分支的基础版本为：2.1.0.RELEASE</p><figure><img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206965.png" alt="image-20220308192302601" tabindex="0" loading="lazy"><figcaption>image-20220308192302601</figcaption></figure></li></ol><h2 id="_2-将springboot源码项目导入到idea中" tabindex="-1"><a class="header-anchor" href="#_2-将springboot源码项目导入到idea中"><span>2. 将SpringBoot源码项目导入到IDEA中</span></a></h2><p>导入后的结果</p><figure><img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206027.png" alt="image-20220308190307742" tabindex="0" loading="lazy"><figcaption>image-20220308190307742</figcaption></figure><h2 id="_3-编译构建springboot源码项目" tabindex="-1"><a class="header-anchor" href="#_3-编译构建springboot源码项目"><span>3. 编译构建SpringBoot源码项目</span></a></h2><h3 id="_3-1-前置配置" tabindex="-1"><a class="header-anchor" href="#_3-1-前置配置"><span>3.1 前置配置</span></a></h3><p>此时导入项目后，我们进行编译构建SpringBoot源码项目了，在构建之前做两个配置：</p><ol><li><p>我们要禁用maven的代码检查，在根pom.xml中增加一下配置即可，如下图：</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!--设置disable.checks为true--&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">disable.checks</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;true&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">disable.checks</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!--设置disable.checks为true--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">disable.checks</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;true&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">disable.checks</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div></li></ol><p>​ <img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206050.png" alt="image-20220308190609199" loading="lazy"></p><ol><li>可能有的小伙伴们的pom.xml文件的project标签上显示<code>java.lang.OutOfMemoryError</code>错误，这是因为IDEA里的Maven的importer设置的JVM最大堆内存过小而导致的，如下图,此时可参考<a href="https://blog.csdn.net/w605283073/article/details/85107497" target="_blank" rel="noopener noreferrer">Maven依赖包导入错误（IntelliJ IDEA）</a>解决即可。</li></ol><p>​ <img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206078.png" alt="image-20220308190638212" loading="lazy"></p><h3 id="_3-2-命令编译" tabindex="-1"><a class="header-anchor" href="#_3-2-命令编译"><span>3.2 命令编译</span></a></h3><p>进行了上面的两点配置后，此时我们就可以直接执行以下maven命令来编译构建源码项目了。</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">mvn</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> clean</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> install</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> -</span><span style="color:#E06C75;--shiki-dark:#E06C75;">DskipTests</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> -</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Pfast</span></span></code></pre></div><figure><img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206111.png" alt="image-20220308190825164" tabindex="0" loading="lazy"><figcaption>image-20220308190825164</figcaption></figure><p>此时又是漫长的等待构建成功了，如下图：</p><figure><img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206138.png" alt="image-20220308195059235" tabindex="0" loading="lazy"><figcaption>image-20220308195059235</figcaption></figure><h2 id="_4-运行springboot自带的sample" tabindex="-1"><a class="header-anchor" href="#_4-运行springboot自带的sample"><span>4. 运行SpringBoot自带的sample</span></a></h2><p>因为SpringBoot源码中的spring-boot-samples模块自带了很多DEMO样例，我们可以利用其中的一个sample来测试运行刚刚构建的springboot源码项目即可。但此时发现spring-boot-samples模块是灰色的，如下图</p><figure><img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206166.png" alt="image-20220308195141434" tabindex="0" loading="lazy"><figcaption>image-20220308195141434</figcaption></figure><p>这是因为spring-boot-samples模块没有被添加到根pom.xml中，此时将其添加到根pom.xml中即可，增加如下配置，如下图：</p><figure><img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206190.png" alt="image-20220308195320473" tabindex="0" loading="lazy"><figcaption>image-20220308195320473</figcaption></figure><p>此时我们挑选spring-boot-samples模块下的spring-boot-sample-tomcat样例项目来测试好了，此时启动<code>SampleTomcatApplication</code>的<code>main</code>函数，启动成功界面如下：</p><figure><img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206211.png" alt="image-20220308202332052" tabindex="0" loading="lazy"><figcaption>image-20220308202332052</figcaption></figure><p>然后我们再在浏览器发送一个HTTP请求，此时可以看到服务端成功返回响应，说明此时SpringBoot源码环境就已经构建成功了，接下来我们就可以进行调试了，如下图：</p><figure><img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206241.png" alt="image-20220308202423116" tabindex="0" loading="lazy"><figcaption>image-20220308202423116</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://cloud.tencent.com/developer/article/1595465" target="_blank" rel="noopener noreferrer">如何搭建自己的SpringBoot源码调试环境？--SpringBoot源码（一）</a></p><p><a href="https://blog.csdn.net/w605283073/article/details/85106902" target="_blank" rel="noopener noreferrer">搭建SpringBoot源码环境的正确姿势（避坑必备）</a></p>`,32)]))}const l=i(e,[["render",n],["__file","springboot-y-source-import.html.vue"]]),g=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-y-source-import.html","title":"导入SpringBoot源码","lang":"zh-CN","frontmatter":{"aliases":"导入SpringBoot源码","tags":null,"cssclass":null,"source":null,"created":"2024-04-23 20:40","updated":"2024-10-11 16:46","description":"导入SpringBoot源码 1. 导入源码 我们项目中的springboot 版本为2.1.0.RELEASE，所以我们就以2.1.0.RELEASE为学习标准 源码地址 https://github.com/spring-projects/spring-boot/tree/v2.1.0.RELEASE fork到自己github仓库 fork 到自...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-y-source-import.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"导入SpringBoot源码"}],["meta",{"property":"og:description","content":"导入SpringBoot源码 1. 导入源码 我们项目中的springboot 版本为2.1.0.RELEASE，所以我们就以2.1.0.RELEASE为学习标准 源码地址 https://github.com/spring-projects/spring-boot/tree/v2.1.0.RELEASE fork到自己github仓库 fork 到自..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206965.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-01T03:19:07.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-01T03:19:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"导入SpringBoot源码\\",\\"image\\":[\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206965.png\\",\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206027.png\\",\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206050.png\\",\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206078.png\\",\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206111.png\\",\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206138.png\\",\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206166.png\\",\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206190.png\\",\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206211.png\\",\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206241.png\\"],\\"dateModified\\":\\"2024-11-01T03:19:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 导入源码","slug":"_1-导入源码","link":"#_1-导入源码","children":[]},{"level":2,"title":"2. 将SpringBoot源码项目导入到IDEA中","slug":"_2-将springboot源码项目导入到idea中","link":"#_2-将springboot源码项目导入到idea中","children":[]},{"level":2,"title":"3. 编译构建SpringBoot源码项目","slug":"_3-编译构建springboot源码项目","link":"#_3-编译构建springboot源码项目","children":[{"level":3,"title":"3.1 前置配置","slug":"_3-1-前置配置","link":"#_3-1-前置配置","children":[]},{"level":3,"title":"3.2 命令编译","slug":"_3-2-命令编译","link":"#_3-2-命令编译","children":[]}]},{"level":2,"title":"4. 运行SpringBoot自带的sample","slug":"_4-运行springboot自带的sample","link":"#_4-运行springboot自带的sample","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1730431147000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":2}]},"readingTime":{"minutes":2.2,"words":661},"filePathRelative":"posts/Java/Java框架/SpringBoot/springboot-y-source-import.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 导入源码</h2>\\n<blockquote>\\n<p>我们项目中的springboot 版本为2.1.0.RELEASE，所以我们就以2.1.0.RELEASE为学习标准</p>\\n</blockquote>\\n<ol>\\n<li>\\n<p>源码地址</p>\\n<p><a href=\\"https://github.com/spring-projects/spring-boot/tree/v2.1.0.RELEASE\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/spring-projects/spring-boot/tree/v2.1.0.RELEASE</a></p>\\n</li>\\n<li>\\n<p>fork到自己github仓库</p>\\n<p>fork 到自己仓库，可以方便的写一些注释帮助我们阅读理解源码</p>\\n</li>\\n<li>\\n<p>建个分支来学习</p>\\n<p>分支的基础版本为：2.1.0.RELEASE</p>\\n<figure><img src=\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232206965.png\\" alt=\\"image-20220308192302601\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220308192302601</figcaption></figure>\\n</li>\\n</ol>","autoDesc":true}');export{l as comp,g as data};
