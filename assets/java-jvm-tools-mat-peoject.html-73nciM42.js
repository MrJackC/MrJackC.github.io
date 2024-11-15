import{_ as a,c as t,a as n,o as s}from"./app-fWubcX7c.js";const r={};function i(o,e){return s(),t("div",null,e[0]||(e[0]=[n(`<h1 id="记一次mat分析线上项目过程" tabindex="-1"><a class="header-anchor" href="#记一次mat分析线上项目过程"><span>记一次MAT分析线上项目过程</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>前段时间接手了一个项目，正常运行都没有问题。但是<strong>运行个几天就会OOM异常</strong>，导致服务不可用。我们首先第一个想到的就是该项目内存泄漏导致，但是项目本身已经比较庞大，要找到一个内存泄漏的点，还是比较难得。</p><p>所以我们使用MAT来分析线上项目的运行情况</p><h2 id="_2-jmap-生成堆转储快照" tabindex="-1"><a class="header-anchor" href="#_2-jmap-生成堆转储快照"><span>2. <code>jmap</code>:生成堆转储快照</span></a></h2><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>jmap -dump:format=b,file=./heap.hprof 19012</span></span>
<span class="line"><span>Dumping heap to /home/ftpuser/services/mywebsocket/heap.hprof ...</span></span>
<span class="line"><span>Heap dump file created</span></span></code></pre></div><p>19012 是进程号</p><p>我们将heap.hprof 导出到我们本地，使用MAT来分析</p><h2 id="_3-mat分析" tabindex="-1"><a class="header-anchor" href="#_3-mat分析"><span>3. MAT分析</span></a></h2><h3 id="_3-1-查看内存泄漏疑点报告" tabindex="-1"><a class="header-anchor" href="#_3-1-查看内存泄漏疑点报告"><span>3.1 查看内存泄漏疑点报告</span></a></h3><p>这是最简单有效的方式，我们根据报告的提示来进行分析</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121204893.png" alt="image-20200107232248818" tabindex="0" loading="lazy"><figcaption>image-20200107232248818</figcaption></figure><p>我们点开报告得到</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121204945.png" alt="image-20200107232335036" tabindex="0" loading="lazy"><figcaption>image-20200107232335036</figcaption></figure><p>我们根据报告得知，有个对象已经占用了44.4 MB的内存，他来源于<strong>ConcurrentHashMap$Node[]</strong></p><h3 id="_3-2-查看histogram" tabindex="-1"><a class="header-anchor" href="#_3-2-查看histogram"><span>3.2 查看Histogram</span></a></h3><p>通过查看<strong>Histogram</strong>，列出内存中的对象情况（个数，大小）</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121204967.png" alt="image-20200107233119349" tabindex="0" loading="lazy"><figcaption>image-20200107233119349</figcaption></figure><ul><li><strong>Class Name</strong> ： 类名称，java类名</li><li>**Objects **： 类的对象的数量，这个对象被创建了多少个</li><li><strong>Shallow Heap ：一个对象内存的消耗大小，不包含对其他对象的引用</strong></li><li><strong>Retained Heap ：是shallow Heap的总和，也就是该对象被GC之后所能回收到内存的总和</strong></li></ul><h4 id="_3-2-1-通过正则查找自己的类" tabindex="-1"><a class="header-anchor" href="#_3-2-1-通过正则查找自己的类"><span>3.2.1 通过正则查找自己的类</span></a></h4><p>这儿借助工具提供的regex正则搜索一下我们自己的类，排序后看看哪些相对是占用比较大的。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121204008.png" alt="image-20200107233400178" tabindex="0" loading="lazy"><figcaption>image-20200107233400178</figcaption></figure><p>我们可以看出内存泄漏是有EsscWebSocket开始的</p><h3 id="_3-3-查看dominator-tree" tabindex="-1"><a class="header-anchor" href="#_3-3-查看dominator-tree"><span>3.3 查看Dominator Tree</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121204035.png" alt="image-20200107233826983" tabindex="0" loading="lazy"><figcaption>image-20200107233826983</figcaption></figure><h3 id="_3-4-top-consumers" tabindex="-1"><a class="header-anchor" href="#_3-4-top-consumers"><span>3.4 Top consumers</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121204068.png" alt="image-20200107233905138" tabindex="0" loading="lazy"><figcaption>image-20200107233905138</figcaption></figure><p><strong>这张图展示的是占用内存比较多的****对象的分布，下面是具体的一些类和占用。</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121204102.png" alt="image-20200107234011953" tabindex="0" loading="lazy"><figcaption>image-20200107234011953</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.cnblogs.com/AloneSword/p/3821569.html" target="_blank" rel="noopener noreferrer">Java程序内存分析：使用mat工具分析内存占用</a></p>`,31)]))}const c=a(r,[["render",i],["__file","java-jvm-tools-mat-peoject.html.vue"]]),l=JSON.parse('{"path":"/posts/Java/JavaJVM/java-jvm-tools-mat-peoject.html","title":"记一次MAT分析线上项目过程","lang":"zh-CN","frontmatter":{"aliases":"记一次MAT分析线上项目过程","tags":null,"cssclass":null,"source":null,"category":["Java","JVM"],"created":"2024-02-22 10:47","updated":"2024-03-12 12:05","description":"记一次MAT分析线上项目过程 1. 背景 前段时间接手了一个项目，正常运行都没有问题。但是运行个几天就会OOM异常，导致服务不可用。我们首先第一个想到的就是该项目内存泄漏导致，但是项目本身已经比较庞大，要找到一个内存泄漏的点，还是比较难得。 所以我们使用MAT来分析线上项目的运行情况 2. jmap:生成堆转储快照 19012 是进程号 我们将heap...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/JavaJVM/java-jvm-tools-mat-peoject.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"记一次MAT分析线上项目过程"}],["meta",{"property":"og:description","content":"记一次MAT分析线上项目过程 1. 背景 前段时间接手了一个项目，正常运行都没有问题。但是运行个几天就会OOM异常，导致服务不可用。我们首先第一个想到的就是该项目内存泄漏导致，但是项目本身已经比较庞大，要找到一个内存泄漏的点，还是比较难得。 所以我们使用MAT来分析线上项目的运行情况 2. jmap:生成堆转储快照 19012 是进程号 我们将heap..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121204893.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"记一次MAT分析线上项目过程\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121204893.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121204945.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121204967.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121204008.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121204035.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121204068.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121204102.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. jmap:生成堆转储快照","slug":"_2-jmap-生成堆转储快照","link":"#_2-jmap-生成堆转储快照","children":[]},{"level":2,"title":"3. MAT分析","slug":"_3-mat分析","link":"#_3-mat分析","children":[{"level":3,"title":"3.1 查看内存泄漏疑点报告","slug":"_3-1-查看内存泄漏疑点报告","link":"#_3-1-查看内存泄漏疑点报告","children":[]},{"level":3,"title":"3.2 查看Histogram","slug":"_3-2-查看histogram","link":"#_3-2-查看histogram","children":[]},{"level":3,"title":"3.3 查看Dominator Tree","slug":"_3-3-查看dominator-tree","link":"#_3-3-查看dominator-tree","children":[]},{"level":3,"title":"3.4 Top consumers","slug":"_3-4-top-consumers","link":"#_3-4-top-consumers","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.79,"words":537},"filePathRelative":"posts/Java/JavaJVM/java-jvm-tools-mat-peoject.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>前段时间接手了一个项目，正常运行都没有问题。但是<strong>运行个几天就会OOM异常</strong>，导致服务不可用。我们首先第一个想到的就是该项目内存泄漏导致，但是项目本身已经比较庞大，要找到一个内存泄漏的点，还是比较难得。</p>\\n<p>所以我们使用MAT来分析线上项目的运行情况</p>\\n<h2>2. <code>jmap</code>:生成堆转储快照</h2>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>jmap -dump:format=b,file=./heap.hprof 19012</span></span>\\n<span class=\\"line\\"><span>Dumping heap to /home/ftpuser/services/mywebsocket/heap.hprof ...</span></span>\\n<span class=\\"line\\"><span>Heap dump file created</span></span></code></pre>\\n</div>","autoDesc":true}');export{c as comp,l as data};
