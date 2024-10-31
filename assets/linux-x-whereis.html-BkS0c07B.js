import{_ as a,c as i,a as t,o as n}from"./app-mWs04Xnh.js";const s={};function r(l,e){return n(),i("div",null,e[0]||(e[0]=[t('<h1 id="linux-whereis搜索二进制文件" tabindex="-1"><a class="header-anchor" href="#linux-whereis搜索二进制文件"><span>Linux-whereis搜索二进制文件</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1 简介</span></a></h2><p><strong>whereis命令只能用于程序名的搜索</strong>，而且只搜索二进制文件（参数-b）、man说明文件（参数-m）和源代码文件（参数-s）。如果省略参数，则返回所有信息。</p><p>搜索来源是数据库索引</p><blockquote><p>在搜索一些进程位置时，</p><ul><li><p>如果是可执行文件，which的准确性会好一点</p></li><li><p>但如果只是普通程序，可能并不会加入PATH，可以使用whereis 搜索</p></li></ul></blockquote><h2 id="_2-文件支持" tabindex="-1"><a class="header-anchor" href="#_2-文件支持"><span>2 文件支持</span></a></h2><ul><li>二进制文件</li><li>源文件</li><li>帮助文档</li></ul><h2 id="_3-实例" tabindex="-1"><a class="header-anchor" href="#_3-实例"><span>3 实例</span></a></h2><h3 id="_3-1-java的二进制文件" tabindex="-1"><a class="header-anchor" href="#_3-1-java的二进制文件"><span>3.1 java的二进制文件</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> whereis</span><span style="color:#98C379;--shiki-dark:#98C379;">  java</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231054387.png" alt="image-20220419105359735" tabindex="0" loading="lazy"><figcaption>image-20220419105359735</figcaption></figure><p>返回的结果就比which 多了很多</p><h3 id="_3-2-查找redis的二进制文件" tabindex="-1"><a class="header-anchor" href="#_3-2-查找redis的二进制文件"><span>3.2 查找redis的二进制文件</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>whereis redis</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231054430.png" alt="image-20220419105732272" tabindex="0" loading="lazy"><figcaption>image-20220419105732272</figcaption></figure><h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h3>',16)]))}const h=a(s,[["render",r],["__file","linux-x-whereis.html.vue"]]),p=JSON.parse('{"path":"/posts/Linux/linux-x-whereis.html","title":"Linux-whereis搜索二进制文件","lang":"zh-CN","frontmatter":{"description":"Linux-whereis搜索二进制文件 1 简介 whereis命令只能用于程序名的搜索，而且只搜索二进制文件（参数-b）、man说明文件（参数-m）和源代码文件（参数-s）。如果省略参数，则返回所有信息。 搜索来源是数据库索引 在搜索一些进程位置时， 如果是可执行文件，which的准确性会好一点 但如果只是普通程序，可能并不会加入PATH，可以使用...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Linux/linux-x-whereis.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Linux-whereis搜索二进制文件"}],["meta",{"property":"og:description","content":"Linux-whereis搜索二进制文件 1 简介 whereis命令只能用于程序名的搜索，而且只搜索二进制文件（参数-b）、man说明文件（参数-m）和源代码文件（参数-s）。如果省略参数，则返回所有信息。 搜索来源是数据库索引 在搜索一些进程位置时， 如果是可执行文件，which的准确性会好一点 但如果只是普通程序，可能并不会加入PATH，可以使用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231054387.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux-whereis搜索二进制文件\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231054387.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231054430.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2 文件支持","slug":"_2-文件支持","link":"#_2-文件支持","children":[]},{"level":2,"title":"3 实例","slug":"_3-实例","link":"#_3-实例","children":[{"level":3,"title":"3.1 java的二进制文件","slug":"_3-1-java的二进制文件","link":"#_3-1-java的二进制文件","children":[]},{"level":3,"title":"3.2 查找redis的二进制文件","slug":"_3-2-查找redis的二进制文件","link":"#_3-2-查找redis的二进制文件","children":[]},{"level":3,"title":"","slug":"","link":"#","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.64,"words":192},"filePathRelative":"posts/Linux/linux-x-whereis.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1 简介</h2>\\n<p><strong>whereis命令只能用于程序名的搜索</strong>，而且只搜索二进制文件（参数-b）、man说明文件（参数-m）和源代码文件（参数-s）。如果省略参数，则返回所有信息。</p>\\n<p>搜索来源是数据库索引</p>\\n<blockquote>\\n<p>在搜索一些进程位置时，</p>\\n<ul>\\n<li>\\n<p>如果是可执行文件，which的准确性会好一点</p>\\n</li>\\n<li>\\n<p>但如果只是普通程序，可能并不会加入PATH，可以使用whereis 搜索</p>\\n</li>\\n</ul>\\n</blockquote>\\n<h2>2 文件支持</h2>","autoDesc":true}');export{h as comp,p as data};
