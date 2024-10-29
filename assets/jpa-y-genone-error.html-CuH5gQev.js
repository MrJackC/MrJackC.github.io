import{_ as a,c as t,a as n,o as i}from"./app-DEK5G3U7.js";const o={};function r(s,e){return i(),t("div",null,e[0]||(e[0]=[n(`<h1 id="spring-data-jpa使用getone方法报错-method-threw-org-hibernate-lazyinitializationexception" tabindex="-1"><a class="header-anchor" href="#spring-data-jpa使用getone方法报错-method-threw-org-hibernate-lazyinitializationexception"><span>Spring Data JPA使用getOne方法报错：Method threw &#39;org.hibernate.LazyInitializationException</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>之前项目一直用 jpa的dao.getOne() 都是正常的，但是加入线程池后，程序直接卡主不动。debug 后发现，提示</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>Method threw &#39;org.hibernate.LazyInitializationException&#39; exception. Cannot evaluate com.xxx.xxx._$$_jvst6a8_a.toString()</span></span></code></pre></div><p>为什么会出现这个问题呢？</p><h2 id="_2-原因" tabindex="-1"><a class="header-anchor" href="#_2-原因"><span>2. 原因</span></a></h2><p><strong>getOne 是懒加载</strong>。每次初始化一个实体的关联就会创建一个<strong>临时的session来加载</strong>，每个临时的session都会获取一个<strong>临时的数据库连接</strong>，<strong>开启一个新的事物</strong>。这就导致对底层连接池压力很大，而且事物日志也会被每次flush.</p><p>设想一下：假如我们查询了一个分页list每次查出1000条，这个实体有三个lazy关联对象,那么，恭喜你，你至少需要创建3000个临时session+connection+transaction.</p><h2 id="_3-解决方案" tabindex="-1"><a class="header-anchor" href="#_3-解决方案"><span>3. 解决方案</span></a></h2><ul><li><p>增加配置</p><p>getOne 是懒加载，需要增加这个配置：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>spring.jpa.properties.hibernate.enable_lazy_load_no_trans=true</span></span></code></pre></div><p>这种方法不太友好，<strong>不建议使用</strong></p></li><li><p>改用findOne 或 findById</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>// findOne</span></span>
<span class="line"><span>Example&lt;MyEntity&gt; example = Example.of(entity);</span></span>
<span class="line"><span>MyEntity myEntity = riskWarnDao.findOne(example).get();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// findById</span></span>
<span class="line"><span>MyEntity myEntity = riskWarnDao.findById(idno).get();</span></span></code></pre></div></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.itdaan.com/blog/2018/12/19/286dcc4fd95fa33a5e22901e4ecc9832.html" target="_blank" rel="noopener noreferrer">Spring Data JPA使用getOne方法报错：Method threw &#39;org.hibernate.LazyInitializationException&#39; exception. Cannot evaluat</a></p>`,12)]))}const l=a(o,[["render",r],["__file","jpa-y-genone-error.html.vue"]]),c=JSON.parse(`{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/jpa/jpa-y-genone-error.html","title":"Spring Data JPA使用getOne方法报错：Method threw 'org.hibernate.LazyInitializationException","lang":"zh-CN","frontmatter":{"description":"Spring Data JPA使用getOne方法报错：Method threw 'org.hibernate.LazyInitializationException 1. 背景 之前项目一直用 jpa的dao.getOne() 都是正常的，但是加入线程池后，程序直接卡主不动。debug 后发现，提示 为什么会出现这个问题呢？ 2. 原因 getOne...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/jpa/jpa-y-genone-error.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Spring Data JPA使用getOne方法报错：Method threw 'org.hibernate.LazyInitializationException"}],["meta",{"property":"og:description","content":"Spring Data JPA使用getOne方法报错：Method threw 'org.hibernate.LazyInitializationException 1. 背景 之前项目一直用 jpa的dao.getOne() 都是正常的，但是加入线程池后，程序直接卡主不动。debug 后发现，提示 为什么会出现这个问题呢？ 2. 原因 getOne..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring Data JPA使用getOne方法报错：Method threw 'org.hibernate.LazyInitializationException\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 原因","slug":"_2-原因","link":"#_2-原因","children":[]},{"level":2,"title":"3. 解决方案","slug":"_3-解决方案","link":"#_3-解决方案","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.98,"words":295},"filePathRelative":"posts/Java/Java第三方依赖/jpa/jpa-y-genone-error.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>之前项目一直用 jpa的dao.getOne() 都是正常的，但是加入线程池后，程序直接卡主不动。debug 后发现，提示</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>Method threw 'org.hibernate.LazyInitializationException' exception. Cannot evaluate com.xxx.xxx._$$_jvst6a8_a.toString()</span></span></code></pre>\\n</div>","autoDesc":true}`);export{l as comp,c as data};
