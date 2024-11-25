import{_ as t,c as a,a as i,o as n}from"./app-BfIe-EZg.js";const o={};function r(l,e){return n(),a("div",null,e[0]||(e[0]=[i('<h1 id="solr多字段搜索" tabindex="-1"><a class="header-anchor" href="#solr多字段搜索"><span>Solr多字段搜索</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>有些场景我们需要搜索多字段，</p><p>比如，现在有一个需求，想要输入关键字搜索标题（title）和内容（content）等多个字段</p><h2 id="_2-解决方案" tabindex="-1"><a class="header-anchor" href="#_2-解决方案"><span>2. 解决方案</span></a></h2><h3 id="_2-1-方案一-采用copyfield-复制字段-推荐" tabindex="-1"><a class="header-anchor" href="#_2-1-方案一-采用copyfield-复制字段-推荐"><span>2.1 方案一：采用copyField（复制字段）（推荐）</span></a></h3><p>应定义如下几个名字为title、content以及text的域。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051903.png" alt="image-20220417211216815" tabindex="0" loading="lazy"><figcaption>image-20220417211216815</figcaption></figure><p>然后，将title域和content域中的内容复制到text域中，如下图所示。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051948.png" alt="image-20220417211240887" tabindex="0" loading="lazy"><figcaption>image-20220417211240887</figcaption></figure><p>这样就定义好了一个复制字段。现在根据关键字只搜索text域中的内容就相当于搜索title域和content域了。</p><h3 id="_2-2-方案2-or" tabindex="-1"><a class="header-anchor" href="#_2-2-方案2-or"><span>2.2 方案2：OR</span></a></h3><p>循环字段</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>(title:张三) OR (content:张三) OR (author:张三)</span></span></code></pre></div><p>如果只有四五个字段，我们可以用or 来查询。但如果字段多的话，用or效率就很低了</p>',15)]))}const c=t(o,[["render",r],["__file","solr-i-multi-field.html.vue"]]),p=JSON.parse('{"path":"/posts/Database/SOLR/solr-i-multi-field.html","title":"Solr多字段搜索","lang":"zh-CN","frontmatter":{"aliases":"Solr多字段搜索","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:51","description":"Solr多字段搜索 1. 简介 有些场景我们需要搜索多字段， 比如，现在有一个需求，想要输入关键字搜索标题（title）和内容（content）等多个字段 2. 解决方案 2.1 方案一：采用copyField（复制字段）（推荐） 应定义如下几个名字为title、content以及text的域。 image-20220417211216815image...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/SOLR/solr-i-multi-field.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Solr多字段搜索"}],["meta",{"property":"og:description","content":"Solr多字段搜索 1. 简介 有些场景我们需要搜索多字段， 比如，现在有一个需求，想要输入关键字搜索标题（title）和内容（content）等多个字段 2. 解决方案 2.1 方案一：采用copyField（复制字段）（推荐） 应定义如下几个名字为title、content以及text的域。 image-20220417211216815image..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051903.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Solr多字段搜索\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051903.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051948.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 解决方案","slug":"_2-解决方案","link":"#_2-解决方案","children":[{"level":3,"title":"2.1 方案一：采用copyField（复制字段）（推荐）","slug":"_2-1-方案一-采用copyfield-复制字段-推荐","link":"#_2-1-方案一-采用copyfield-复制字段-推荐","children":[]},{"level":3,"title":"2.2 方案2：OR","slug":"_2-2-方案2-or","link":"#_2-2-方案2-or","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.78,"words":235},"filePathRelative":"posts/Database/SOLR/solr-i-multi-field.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>有些场景我们需要搜索多字段，</p>\\n<p>比如，现在有一个需求，想要输入关键字搜索标题（title）和内容（content）等多个字段</p>\\n<h2>2. 解决方案</h2>\\n<h3>2.1 方案一：采用copyField（复制字段）（推荐）</h3>\\n<p>应定义如下几个名字为title、content以及text的域。</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131051903.png\\" alt=\\"image-20220417211216815\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220417211216815</figcaption></figure>","autoDesc":true}');export{c as comp,p as data};
