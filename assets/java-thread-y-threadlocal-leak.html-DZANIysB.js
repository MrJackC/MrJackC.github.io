import{_ as e,c as t,a as r,o}from"./app-BQBjlK2G.js";const l={};function n(c,a){return o(),t("div",null,a[0]||(a[0]=[r('<h1 id="threadlocal使用不当导致内存泄漏" tabindex="-1"><a class="header-anchor" href="#threadlocal使用不当导致内存泄漏"><span>ThreadLocal使用不当导致内存泄漏</span></a></h1><p>线程池的一个线程使用完 Threadlocal 对象之后，由于线程池中的线程不会退出，线程池中的线程池存在，同时ThreadLocal变量也会存在，占用内存，造成OOM溢出。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/xlgen157387/article/details/78297568" target="_blank" rel="noopener noreferrer">多图深入分析ThreadLocal原理</a></p><p><a href="https://blog.csdn.net/xlgen157387/article/details/78298840" target="_blank" rel="noopener noreferrer">Java多线程编程-（9）-ThreadLocal造成OOM内存溢出案例演示与原理分析</a></p>',5)]))}const h=e(l,[["render",n],["__file","java-thread-y-threadlocal-leak.html.vue"]]),p=JSON.parse('{"path":"/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-threadlocal-leak.html","title":"ThreadLocal使用不当导致内存泄漏","lang":"zh-CN","frontmatter":{"aliases":"ThreadLocal使用不当导致内存泄漏","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:48","updated":"2024-03-12 08:54","description":"ThreadLocal使用不当导致内存泄漏 线程池的一个线程使用完 Threadlocal 对象之后，由于线程池中的线程不会退出，线程池中的线程池存在，同时ThreadLocal变量也会存在，占用内存，造成OOM溢出。 参考文章 多图深入分析ThreadLocal原理 Java多线程编程-（9）-ThreadLocal造成OOM内存溢出案例演示与原理分析","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-threadlocal-leak.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"ThreadLocal使用不当导致内存泄漏"}],["meta",{"property":"og:description","content":"ThreadLocal使用不当导致内存泄漏 线程池的一个线程使用完 Threadlocal 对象之后，由于线程池中的线程不会退出，线程池中的线程池存在，同时ThreadLocal变量也会存在，占用内存，造成OOM溢出。 参考文章 多图深入分析ThreadLocal原理 Java多线程编程-（9）-ThreadLocal造成OOM内存溢出案例演示与原理分析"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ThreadLocal使用不当导致内存泄漏\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.45,"words":136},"filePathRelative":"posts/Java/Java多线程/java-thread-y-threadlocal-leak.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>线程池的一个线程使用完 Threadlocal 对象之后，由于线程池中的线程不会退出，线程池中的线程池存在，同时ThreadLocal变量也会存在，占用内存，造成OOM溢出。</p>\\n<h2>参考文章</h2>\\n<p><a href=\\"https://blog.csdn.net/xlgen157387/article/details/78297568\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">多图深入分析ThreadLocal原理</a></p>\\n<p><a href=\\"https://blog.csdn.net/xlgen157387/article/details/78298840\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Java多线程编程-（9）-ThreadLocal造成OOM内存溢出案例演示与原理分析</a></p>","autoDesc":true}');export{h as comp,p as data};
