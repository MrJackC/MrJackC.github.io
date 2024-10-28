import{_ as t,c as a,a as n,o as i}from"./app-W9QyTiMU.js";const o={};function r(c,e){return i(),a("div",null,e[0]||(e[0]=[n('<h1 id="循环依赖问题" tabindex="-1"><a class="header-anchor" href="#循环依赖问题"><span>循环依赖问题</span></a></h1><h2 id="_1-什么是循环依赖" tabindex="-1"><a class="header-anchor" href="#_1-什么是循环依赖"><span>1. 什么是循环依赖</span></a></h2><p>循环依赖，其实就是循环引用，就是两个或者两个以上的bean 互相引用对方，最终形成一个闭环，如A 依赖B,B依赖C，C依赖A。如下图所示</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231724298.png" alt="image-20191103124214967" tabindex="0" loading="lazy"><figcaption>image-20191103124214967</figcaption></figure><p>循环依赖，其实就是一个<strong>死循环</strong>的过程，在初始化A的时候发现引用了B，这时候就会去初始化B，然后又开发B引用了A，则又会出初始化A，依次循环用不退出，除非有终结条件</p><h2 id="_2-循环依赖的两种场景" tabindex="-1"><a class="header-anchor" href="#_2-循环依赖的两种场景"><span>2. 循环依赖的两种场景</span></a></h2><ol><li>构造器的循环依赖</li><li>field 属性的循环依赖</li></ol><blockquote><p>对于构造器的循环依赖，Spring 是无法解决的，只能抛出 BeanCurrentlyInCreationException 异常表示循环依赖，<strong>所以下面我们分析的都是基于 field 属性的循环依赖</strong>。</p></blockquote><blockquote><p>Spring 只解决 scope 为 singleton 的循环依赖。对于scope 为 prototype 的 bean ，Spring 无法解决，直接抛出 BeanCurrentlyInCreationException 异常。</p></blockquote><h2 id="_3-解决流程总结" tabindex="-1"><a class="header-anchor" href="#_3-解决流程总结"><span>3. 解决流程总结</span></a></h2><ul><li>首先 A 完成初始化第一步并将自己提前曝光出来（通过 ObjectFactory 将自己提前曝光），在初始化的时候，发现自己依赖对象 B，此时就会去尝试 get(B)，这个时候发现 B 还没有被创建出来</li><li>然后 B 就走创建流程，在 B 初始化的时候，同样发现自己依赖 C，C 也没有被创建出来</li><li>这个时候 C 又开始初始化进程，但是在初始化的过程中发现自己依赖 A，于是尝试 get(A)，这个时候由于 A 已经添加至缓存中（一般都是添加至三级缓存 <code>singletonFactories</code> ），通过 ObjectFactory 提前曝光，所以可以通过 <code>ObjectFactory#getObject()</code> 方法来拿到 A 对象，C 拿到 A 对象后顺利完成初始化，然后将自己添加到一级缓存中</li><li>回到 B ，B 也可以拿到 C 对象，完成初始化，A 可以顺利拿到 B 完成初始化。到这里整个链路就已经完成了初始化过程了</li></ul>',11)]))}const p=t(o,[["render",r],["__file","spring-y-ioc-cyclic-dependence.html.vue"]]),s=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-ioc-cyclic-dependence.html","title":"循环依赖问题","lang":"zh-CN","frontmatter":{"aliases":"循环依赖问题","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:50","updated":"2024-10-11 16:46","description":"循环依赖问题 1. 什么是循环依赖 循环依赖，其实就是循环引用，就是两个或者两个以上的bean 互相引用对方，最终形成一个闭环，如A 依赖B,B依赖C，C依赖A。如下图所示 image-20191103124214967image-20191103124214967 循环依赖，其实就是一个死循环的过程，在初始化A的时候发现引用了B，这时候就会去初始化B...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-ioc-cyclic-dependence.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"循环依赖问题"}],["meta",{"property":"og:description","content":"循环依赖问题 1. 什么是循环依赖 循环依赖，其实就是循环引用，就是两个或者两个以上的bean 互相引用对方，最终形成一个闭环，如A 依赖B,B依赖C，C依赖A。如下图所示 image-20191103124214967image-20191103124214967 循环依赖，其实就是一个死循环的过程，在初始化A的时候发现引用了B，这时候就会去初始化B..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231724298.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"循环依赖问题\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231724298.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是循环依赖","slug":"_1-什么是循环依赖","link":"#_1-什么是循环依赖","children":[]},{"level":2,"title":"2. 循环依赖的两种场景","slug":"_2-循环依赖的两种场景","link":"#_2-循环依赖的两种场景","children":[]},{"level":2,"title":"3. 解决流程总结","slug":"_3-解决流程总结","link":"#_3-解决流程总结","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.85,"words":554},"filePathRelative":"posts/Java/Java框架/Spring/spring-y-ioc-cyclic-dependence.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 什么是循环依赖</h2>\\n<p>循环依赖，其实就是循环引用，就是两个或者两个以上的bean 互相引用对方，最终形成一个闭环，如A 依赖B,B依赖C，C依赖A。如下图所示</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231724298.png\\" alt=\\"image-20191103124214967\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20191103124214967</figcaption></figure>","autoDesc":true}');export{p as comp,s as data};
