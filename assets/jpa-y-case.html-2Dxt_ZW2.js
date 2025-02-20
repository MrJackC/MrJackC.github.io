import{_ as t,c as e,a as n,o as i}from"./app-4x2aIoqi.js";const r={};function s(o,a){return i(),e("div",null,a[0]||(a[0]=[n(`<h1 id="jpa表大小写转换" tabindex="-1"><a class="header-anchor" href="#jpa表大小写转换"><span>JPA表大小写转换</span></a></h1><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><ol><li>使用PhysicalNamingStrategy<br> Spring Boot1.5.4 JPA是基于hibernate5.0的，有两种现成的方式实现PhysicalNamingStrategy <ul><li>org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl 无修改的</li><li>org.springframework.boot.orm.jpa.hibernate.SpringPhysicalNamingStrategy <strong>有修改，Spirng Boot 1.5.4默认使用SpringPhysicalNamingStrategy ，会处理添加“-”，会将表、字段名转化为小写</strong><br> application.yml中配置使用PhysicalNamingStrategy，就没有字段被小写的问题了</li></ul></li></ol><div class="language-yml" data-ext="yml" data-title="yml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">spring</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  jpa</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    hibernate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      naming</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        physical-strategy</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:  </span><span style="color:#98C379;--shiki-dark:#98C379;">org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl</span></span></code></pre></div>`,4)]))}const p=t(r,[["render",s],["__file","jpa-y-case.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/jpa/jpa-y-case.html","title":"JPA表大小写转换","lang":"zh-CN","frontmatter":{"description":"JPA表大小写转换 解决方案 使用PhysicalNamingStrategy Spring Boot1.5.4 JPA是基于hibernate5.0的，有两种现成的方式实现PhysicalNamingStrategy org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl ...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/jpa/jpa-y-case.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"JPA表大小写转换"}],["meta",{"property":"og:description","content":"JPA表大小写转换 解决方案 使用PhysicalNamingStrategy Spring Boot1.5.4 JPA是基于hibernate5.0的，有两种现成的方式实现PhysicalNamingStrategy org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JPA表大小写转换\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.31,"words":94},"filePathRelative":"posts/Java/Java第三方依赖/jpa/jpa-y-case.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>解决方案</h2>\\n<ol>\\n<li>使用PhysicalNamingStrategy<br>\\nSpring Boot1.5.4 JPA是基于hibernate5.0的，有两种现成的方式实现PhysicalNamingStrategy\\n<ul>\\n<li>org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl 无修改的</li>\\n<li>org.springframework.boot.orm.jpa.hibernate.SpringPhysicalNamingStrategy <strong>有修改，Spirng Boot 1.5.4默认使用SpringPhysicalNamingStrategy ，会处理添加“-”，会将表、字段名转化为小写</strong><br>\\napplication.yml中配置使用PhysicalNamingStrategy，就没有字段被小写的问题了</li>\\n</ul>\\n</li>\\n</ol>","autoDesc":true}');export{p as comp,c as data};
