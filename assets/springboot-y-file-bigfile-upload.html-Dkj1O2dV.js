import{_ as a,c as n,a as o,o as i}from"./app-CpAF2rca.js";const l={};function e(t,s){return i(),n("div",null,s[0]||(s[0]=[o(`<h1 id="springboot集成文件-大文件的上传-异步-分片-断点续传和秒传" tabindex="-1"><a class="header-anchor" href="#springboot集成文件-大文件的上传-异步-分片-断点续传和秒传"><span>SpringBoot集成文件 - 大文件的上传(异步，分片，断点续传和秒传)</span></a></h1><blockquote><p>上文中介绍的是常规文件的上传和下载，而超大文件的上传技术手段和普通文件上传是有差异的，主要通过基于分片的断点续传和秒传和异步上传等技术手段解决。本文主要介绍SpringBoot集成大文件上传的案例。</p></blockquote><h2 id="_1-知识准备" tabindex="-1"><a class="header-anchor" href="#_1-知识准备"><span>1. 知识准备</span></a></h2><blockquote><p>大文件的上传技术手段和普通文件上传是有差异的，主要通过基于分片的断点续传和秒传和异步上传解决。</p></blockquote><h3 id="_1-1-大文件面临的问题" tabindex="-1"><a class="header-anchor" href="#_1-1-大文件面临的问题"><span>1.1 大文件面临的问题</span></a></h3><ol><li>上传速度慢 -- 应对: <strong>分块上传</strong></li><li>上传文件到一半中断后，继续上传却只能重头开始上传 -- 应对: <strong>断点续传</strong></li><li>相同文件未修改再次上传, 却只能重头开始上传 -- 应对: <strong>秒传</strong></li></ol><h3 id="_1-2-基于分片的断点续传和秒传" tabindex="-1"><a class="header-anchor" href="#_1-2-基于分片的断点续传和秒传"><span>1.2 基于分片的断点续传和秒传</span></a></h3><blockquote><p>当我们上传的文件很大时，对大文件的处理通常通过<strong>分片上传</strong>、<strong>断点续传</strong>和<strong>秒传</strong>技术手段实现。</p></blockquote><ul><li><strong>分片上传</strong></li></ul><p>分片上传就是将一个大文件分成若干份大小相等的小块文件，等所有小块文件上传成功后，再将文件进行合并成完整的原始文件。</p><ul><li><strong>断点续传</strong></li></ul><p>断点续传就是重新上传文件时<strong>先判断哪些文件块已经上传过了</strong>（比如将分片的chuck md5等信息保存在DB中)，如果上传过了则跳过这些块，否则上传没有上传的块。</p><ul><li><strong>秒传</strong></li></ul><p>当用户选择上传一个文件时，服务端检测该文件之前是否已经被上传过，如果服务器已经存有该文件（完全一样），就立马返回前端 “文件已上传成功”。前端随即将进度条更新至100%。 这样给用户的感觉就是 “秒传” 的感觉。</p><h4 id="_1-2-1-前后端该怎么做" tabindex="-1"><a class="header-anchor" href="#_1-2-1-前后端该怎么做"><span>1.2.1 前后端该怎么做？</span></a></h4><p>对于分片上传，<strong>前后端分别需要怎么做呢</strong>？</p><ol><li><strong>前端</strong>：需要将文件file.slice()成多个文件块，并计算每一块的md5值，每次请求上传都是传一个小文件块。</li><li><strong>后端</strong>：需要接收每次上传的文件块并保存文件块的信息（比如md5), 如果已经上传则跳过；最后等所有文件上传完成之后，将所有的文件块合并成一个大文件。</li></ol><h3 id="_1-3-异步上传" tabindex="-1"><a class="header-anchor" href="#_1-3-异步上传"><span>1.3 异步上传</span></a></h3><blockquote><p>当我们上传的文件很大，后台需要处理的时间很长，用户期望切换到其它页面继续工作，而不需要等待完成。这时候我们可以采用异步上传的方式。</p></blockquote><p>在SpringBoot中将一个方法声明为异步方法非常简单，只需两个注解即可<code>@EnableAsync</code>和<code>@Async</code>。</p><ol><li><code>@EnableAsync</code>用于开启SpringBoot支持异步的功能，用在SpringBoot的启动类上。</li></ol><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">SpringBootApplication</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">EnableAsync</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 这里</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> App</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        SpringApplication</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">run</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">App</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, args);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><ol start="2"><li><code>@Async</code>用于方法上，标记该方法为异步处理方法。</li></ol><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Service</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> UserServiceImpl</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Async</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 这里带@Async的方法，会被当成一个子线程</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> processFile</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">InputStream</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> inputStream</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/spring/springboot/springboot-x-file-upload-bigfile.html" target="_blank" rel="noopener noreferrer">SpringBoot集成文件 - 大文件的上传(异步，分片，断点续传和秒传)</a></p><p><a href="https://blog.csdn.net/fly910905/article/details/114284285" target="_blank" rel="noopener noreferrer">基于SpringBoot和WebUploader实现大文件分块上传.断点续传.秒传</a></p>`,27)]))}const p=a(l,[["render",e],["__file","springboot-y-file-bigfile-upload.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-y-file-bigfile-upload.html","title":"SpringBoot集成文件 - 大文件的上传(异步，分片，断点续传和秒传)","lang":"zh-CN","frontmatter":{"order":320,"created":"2024-05-14 07:56","updated":"2024-10-11 16:46","description":"SpringBoot集成文件 - 大文件的上传(异步，分片，断点续传和秒传) 上文中介绍的是常规文件的上传和下载，而超大文件的上传技术手段和普通文件上传是有差异的，主要通过基于分片的断点续传和秒传和异步上传等技术手段解决。本文主要介绍SpringBoot集成大文件上传的案例。 1. 知识准备 大文件的上传技术手段和普通文件上传是有差异的，主要通过基于分...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-y-file-bigfile-upload.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"SpringBoot集成文件 - 大文件的上传(异步，分片，断点续传和秒传)"}],["meta",{"property":"og:description","content":"SpringBoot集成文件 - 大文件的上传(异步，分片，断点续传和秒传) 上文中介绍的是常规文件的上传和下载，而超大文件的上传技术手段和普通文件上传是有差异的，主要通过基于分片的断点续传和秒传和异步上传等技术手段解决。本文主要介绍SpringBoot集成大文件上传的案例。 1. 知识准备 大文件的上传技术手段和普通文件上传是有差异的，主要通过基于分..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot集成文件 - 大文件的上传(异步，分片，断点续传和秒传)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 知识准备","slug":"_1-知识准备","link":"#_1-知识准备","children":[{"level":3,"title":"1.1 大文件面临的问题","slug":"_1-1-大文件面临的问题","link":"#_1-1-大文件面临的问题","children":[]},{"level":3,"title":"1.2 基于分片的断点续传和秒传","slug":"_1-2-基于分片的断点续传和秒传","link":"#_1-2-基于分片的断点续传和秒传","children":[]},{"level":3,"title":"1.3 异步上传","slug":"_1-3-异步上传","link":"#_1-3-异步上传","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.94,"words":882},"filePathRelative":"posts/Java/Java框架/SpringBoot/springboot-y-file-bigfile-upload.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>上文中介绍的是常规文件的上传和下载，而超大文件的上传技术手段和普通文件上传是有差异的，主要通过基于分片的断点续传和秒传和异步上传等技术手段解决。本文主要介绍SpringBoot集成大文件上传的案例。</p>\\n</blockquote>\\n<h2>1. 知识准备</h2>\\n<blockquote>\\n<p>大文件的上传技术手段和普通文件上传是有差异的，主要通过基于分片的断点续传和秒传和异步上传解决。</p>\\n</blockquote>\\n<h3>1.1 大文件面临的问题</h3>\\n<ol>\\n<li>上传速度慢 -- 应对: <strong>分块上传</strong></li>\\n<li>上传文件到一半中断后，继续上传却只能重头开始上传 -- 应对: <strong>断点续传</strong></li>\\n<li>相同文件未修改再次上传, 却只能重头开始上传 -- 应对: <strong>秒传</strong></li>\\n</ol>","autoDesc":true}');export{p as comp,c as data};
