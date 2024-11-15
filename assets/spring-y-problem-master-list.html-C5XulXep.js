import{_ as s,c as t,a as n,o as e}from"./app-fWubcX7c.js";const r={};function i(p,a){return e(),t("div",null,a[0]||(a[0]=[n(`<h1 id="打jar包-没有主清单属性" tabindex="-1"><a class="header-anchor" href="#打jar包-没有主清单属性"><span>打jar包，没有主清单属性</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>在springboot 设置打jar包后，使用java -jar 运行提示 没有主清单属性</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231729352.png" alt="image-20201026103541437" tabindex="0" loading="lazy"><figcaption>image-20201026103541437</figcaption></figure><h2 id="_2-解决办法" tabindex="-1"><a class="header-anchor" href="#_2-解决办法"><span>2. 解决办法</span></a></h2><p>在pom文件中添加 spring-boot-maven-plugin 插件</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">build</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">plugins</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">plugin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;org.springframework.boot&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;spring-boot-maven-plugin&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">plugin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">plugins</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">     &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">build</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div>`,7)]))}const l=s(r,[["render",i],["__file","spring-y-problem-master-list.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-problem-master-list.html","title":"打jar包，没有主清单属性","lang":"zh-CN","frontmatter":{"created":"2024-05-14 07:56","updated":"2024-10-11 16:46","description":"打jar包，没有主清单属性 1. 背景 在springboot 设置打jar包后，使用java -jar 运行提示 没有主清单属性 image-20201026103541437image-20201026103541437 2. 解决办法 在pom文件中添加 spring-boot-maven-plugin 插件","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-problem-master-list.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"打jar包，没有主清单属性"}],["meta",{"property":"og:description","content":"打jar包，没有主清单属性 1. 背景 在springboot 设置打jar包后，使用java -jar 运行提示 没有主清单属性 image-20201026103541437image-20201026103541437 2. 解决办法 在pom文件中添加 spring-boot-maven-plugin 插件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231729352.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"打jar包，没有主清单属性\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231729352.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 解决办法","slug":"_2-解决办法","link":"#_2-解决办法","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.29,"words":86},"filePathRelative":"posts/Java/Java框架/Spring/spring-y-problem-master-list.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>在springboot 设置打jar包后，使用java -jar 运行提示 没有主清单属性</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231729352.png\\" alt=\\"image-20201026103541437\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20201026103541437</figcaption></figure>\\n<h2>2. 解决办法</h2>\\n<p>在pom文件中添加 spring-boot-maven-plugin 插件</p>","autoDesc":true}');export{l as comp,c as data};
