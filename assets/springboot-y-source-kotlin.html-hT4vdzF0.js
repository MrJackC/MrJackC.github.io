import{_ as a,c as i,a as t,o}from"./app-tJW29Kmg.js";const n={};function r(s,e){return o(),i("div",null,e[0]||(e[0]=[t(`<h1 id="springboot源码编译kotlin版本过低问题" tabindex="-1"><a class="header-anchor" href="#springboot源码编译kotlin版本过低问题"><span>Springboot源码编译Kotlin版本过低问题</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>Springboot源码编译时报错</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>Kotlin: Language version 1.1 is no longer supported； please, use version 1.2</span></span></code></pre></div><figure><img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232210713.png" alt="image-20220511195643200" tabindex="0" loading="lazy"><figcaption>image-20220511195643200</figcaption></figure><p>报错原因：就是kotlin版本太低，但是百度的答案问题，都不能解决这个报错</p><h2 id="_2-网上的步骤" tabindex="-1"><a class="header-anchor" href="#_2-网上的步骤"><span>2. 网上的步骤</span></a></h2><h3 id="_2-1-kotlin-compiler-设置版本" tabindex="-1"><a class="header-anchor" href="#_2-1-kotlin-compiler-设置版本"><span>2.1 Kotlin Compiler 设置版本</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>1.打开Settings,在搜索栏搜索 Kotlin</span></span>
<span class="line"><span>2.设置 language version、API version 为1.2，点击确定即可</span></span></code></pre></div><figure><img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232210750.png" alt="image-20220511200249271" tabindex="0" loading="lazy"><figcaption>image-20220511200249271</figcaption></figure><h3 id="_2-2-更新渠道" tabindex="-1"><a class="header-anchor" href="#_2-2-更新渠道"><span>2.2 更新渠道</span></a></h3><figure><img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232210782.png" alt="image-20220511200347450" tabindex="0" loading="lazy"><figcaption>image-20220511200347450</figcaption></figure><h2 id="_3-最终解决" tabindex="-1"><a class="header-anchor" href="#_3-最终解决"><span>3. 最终解决</span></a></h2><p>不是说上面两个不行，是具体的模块中还有kotlin的配置。会以具体模块为准</p><h3 id="_3-1-修改具体模块的kotlin版本" tabindex="-1"><a class="header-anchor" href="#_3-1-修改具体模块的kotlin版本"><span>3.1 修改具体模块的kotlin版本</span></a></h3><p>Project Structure -》modules</p><p><strong>改成具体的版本或使用项目的配置</strong></p><figure><img src="https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232210806.png" alt="image-20220511200623611" tabindex="0" loading="lazy"><figcaption>image-20220511200623611</figcaption></figure>`,18)]))}const l=a(n,[["render",r],["__file","springboot-y-source-kotlin.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-y-source-kotlin.html","title":"Springboot源码编译Kotlin版本过低问题","lang":"zh-CN","frontmatter":{"created":"2024-05-14 07:56","updated":"2024-10-11 16:46","description":"Springboot源码编译Kotlin版本过低问题 1. 简介 Springboot源码编译时报错 image-20220511195643200image-20220511195643200 报错原因：就是kotlin版本太低，但是百度的答案问题，都不能解决这个报错 2. 网上的步骤 2.1 Kotlin Compiler 设置版本 image-2...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-y-source-kotlin.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Springboot源码编译Kotlin版本过低问题"}],["meta",{"property":"og:description","content":"Springboot源码编译Kotlin版本过低问题 1. 简介 Springboot源码编译时报错 image-20220511195643200image-20220511195643200 报错原因：就是kotlin版本太低，但是百度的答案问题，都不能解决这个报错 2. 网上的步骤 2.1 Kotlin Compiler 设置版本 image-2..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232210713.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-01T03:19:07.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-01T03:19:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Springboot源码编译Kotlin版本过低问题\\",\\"image\\":[\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232210713.png\\",\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232210750.png\\",\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232210782.png\\",\\"https://raw.gitmirror.com/MrJackC/PicGoImages/main/other/202404232210806.png\\"],\\"dateModified\\":\\"2024-11-01T03:19:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 网上的步骤","slug":"_2-网上的步骤","link":"#_2-网上的步骤","children":[{"level":3,"title":"2.1 Kotlin Compiler 设置版本","slug":"_2-1-kotlin-compiler-设置版本","link":"#_2-1-kotlin-compiler-设置版本","children":[]},{"level":3,"title":"2.2 更新渠道","slug":"_2-2-更新渠道","link":"#_2-2-更新渠道","children":[]}]},{"level":2,"title":"3. 最终解决","slug":"_3-最终解决","link":"#_3-最终解决","children":[{"level":3,"title":"3.1 修改具体模块的kotlin版本","slug":"_3-1-修改具体模块的kotlin版本","link":"#_3-1-修改具体模块的kotlin版本","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1730431147000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":2}]},"readingTime":{"minutes":0.67,"words":200},"filePathRelative":"posts/Java/Java框架/SpringBoot/springboot-y-source-kotlin.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>Springboot源码编译时报错</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>Kotlin: Language version 1.1 is no longer supported； please, use version 1.2</span></span></code></pre>\\n</div>","autoDesc":true}');export{l as comp,c as data};
