import{_ as t,c as a,a as i,o as n}from"./app-mWs04Xnh.js";const r={};function s(o,e){return n(),a("div",null,e[0]||(e[0]=[i('<h1 id="hibernate概念与原理" tabindex="-1"><a class="header-anchor" href="#hibernate概念与原理"><span>Hibernate概念与原理</span></a></h1><h2 id="_1-hibernate的核心组件" tabindex="-1"><a class="header-anchor" href="#_1-hibernate的核心组件"><span>1. Hibernate的核心组件</span></a></h2><ul><li>Configuration类：用来读取Hibernate配置文件，并生成SessionFactory对象。</li><li>SessionFactory接口：产生Session实例工厂。</li><li>Session接口：用来操作PO。它有get(),load(),save(),update()和delete()等方法用来对PO进行加载，保存，更新及删除等操作。它是Hibernate的核心接口。</li><li>Query接口：用来对PO进行查询操。它可以从Session的createQuery()方法生成。</li><li>Transaction接口：用来管理Hibernate事务，它主要方法有commit()和rollback()，可以从Session的beginTrancation()方法生成。</li></ul><h2 id="_2-persistent-object-持久化对象" tabindex="-1"><a class="header-anchor" href="#_2-persistent-object-持久化对象"><span>2. Persistent Object（持久化对象）</span></a></h2><p>持久化对象可以是普通的Javabeans,惟一特殊的是它们与（仅一个）Session相关联。JavaBeans在Hibernate中存在三种状态：</p><ol><li><p>临时状态(transient)</p><p>当一个JavaBean对象在内存中孤立存在，不与数据库中的数据有任何关联关系时，那么这个JavaBeans对象就称为临时对象(TransientObject)。</p></li><li><p>持久化状态(persistent):</p><p>当一个JavaBean对象与一个Session相关联时，就变成持久化对象(PersistentObject)</p></li><li><p>脱管状态(detached):</p><p>在这个Session被关闭的同时，这个对象也会脱离持久化状态，就变成脱管状态(DetachedObject)，可以被应用程序的任何层自由使用，例如可以做与表示层打交道的数据舆对象(Data Transfer Object)。</p></li></ol><h2 id="_3-hibernate的运行过程" tabindex="-1"><a class="header-anchor" href="#_3-hibernate的运行过程"><span>3. Hibernate的运行过程</span></a></h2><ol><li>应用程序先调用Configration类，该类读取Hibernate的配置文件及映射文件中的信息，并用这些信息生成一个SessionFactory对象。</li><li>然后从SessionFactory对象生成一个Session对象，并用Session对象生成Transaction对象;可通过Session对象的get(),load(),save(),update(),delete()和saveOrUpdate()等方法对PO进行加载，保存，更新，删除等操作;在查询的情况下，可通过Session对象生成一个Query对象，然后利用Query对象执行查询操作;如果没有异常，Transaction对象将 提交这些操作结果到数据库中。</li></ol><h4 id="_3-1-运行过程图" tabindex="-1"><a class="header-anchor" href="#_3-1-运行过程图"><span>3.1 运行过程图</span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231246669.png" alt="image-20201010142111373" tabindex="0" loading="lazy"><figcaption>image-20201010142111373</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231246709.png" alt="image-20201010142134280" tabindex="0" loading="lazy"><figcaption>image-20201010142134280</figcaption></figure><h2 id="_4-hibernate工作原理总结" tabindex="-1"><a class="header-anchor" href="#_4-hibernate工作原理总结"><span>4. hibernate工作原理总结</span></a></h2><ol><li>通过Configuration().configure();读取并解析hibernate.cfg.xml<a href="http://baike.baidu.com/view/2117618.htm" target="_blank" rel="noopener noreferrer">配置文件</a>。</li><li>由hibernate.cfg.xml中的&lt;mappingresource=&quot;com/xx/User.hbm.xml&quot;/&gt;读取解析映射信息。</li><li>通过config.buildSessionFactory();//得到sessionFactory。</li><li>sessionFactory.openSession();//得到session。</li><li>session.beginTransaction();//开启事务。</li><li>persistent operate;</li><li>session.getTransaction().commit();//提交事务</li><li>关闭session;</li><li>关闭sessionFactory;</li></ol><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/lmb55/article/details/46536925" target="_blank" rel="noopener noreferrer">Hibernate基本原理及概念详解</a></p>',15)]))}const c=t(r,[["render",s],["__file","hibernate-x-overview.html.vue"]]),p=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/hibernate/hibernate-x-overview.html","title":"Hibernate概念与原理","lang":"zh-CN","frontmatter":{"aliases":"Hibernate概念与原理","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:50","updated":"2024-04-23 12:47","description":"Hibernate概念与原理 1. Hibernate的核心组件 Configuration类：用来读取Hibernate配置文件，并生成SessionFactory对象。 SessionFactory接口：产生Session实例工厂。 Session接口：用来操作PO。它有get(),load(),save(),update()和delete()等方...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/hibernate/hibernate-x-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Hibernate概念与原理"}],["meta",{"property":"og:description","content":"Hibernate概念与原理 1. Hibernate的核心组件 Configuration类：用来读取Hibernate配置文件，并生成SessionFactory对象。 SessionFactory接口：产生Session实例工厂。 Session接口：用来操作PO。它有get(),load(),save(),update()和delete()等方..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231246669.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hibernate概念与原理\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231246669.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231246709.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. Hibernate的核心组件","slug":"_1-hibernate的核心组件","link":"#_1-hibernate的核心组件","children":[]},{"level":2,"title":"2. Persistent Object（持久化对象）","slug":"_2-persistent-object-持久化对象","link":"#_2-persistent-object-持久化对象","children":[]},{"level":2,"title":"3. Hibernate的运行过程","slug":"_3-hibernate的运行过程","link":"#_3-hibernate的运行过程","children":[]},{"level":2,"title":"4. hibernate工作原理总结","slug":"_4-hibernate工作原理总结","link":"#_4-hibernate工作原理总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.11,"words":632},"filePathRelative":"posts/Java/Java第三方依赖/hibernate/hibernate-x-overview.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. Hibernate的核心组件</h2>\\n<ul>\\n<li>Configuration类：用来读取Hibernate配置文件，并生成SessionFactory对象。</li>\\n<li>SessionFactory接口：产生Session实例工厂。</li>\\n<li>Session接口：用来操作PO。它有get(),load(),save(),update()和delete()等方法用来对PO进行加载，保存，更新及删除等操作。它是Hibernate的核心接口。</li>\\n<li>Query接口：用来对PO进行查询操。它可以从Session的createQuery()方法生成。</li>\\n<li>Transaction接口：用来管理Hibernate事务，它主要方法有commit()和rollback()，可以从Session的beginTrancation()方法生成。</li>\\n</ul>","autoDesc":true}');export{c as comp,p as data};
