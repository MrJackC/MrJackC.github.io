import{_ as t,c as a,a as i,o as n}from"./app-fWubcX7c.js";const r={};function o(s,e){return n(),a("div",null,e[0]||(e[0]=[i('<h1 id="垃圾收集器垃圾收集算法" tabindex="-1"><a class="header-anchor" href="#垃圾收集器垃圾收集算法"><span>垃圾收集器垃圾收集算法</span></a></h1><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003087.png" alt="image-20190925225149527" tabindex="0" loading="lazy"><figcaption>image-20190925225149527</figcaption></figure><h2 id="_1-标记-清除算法" tabindex="-1"><a class="header-anchor" href="#_1-标记-清除算法"><span>1. 标记-清除算法</span></a></h2><p>该算法分为“标记”和“清除”阶段：首先标记出所有需要回收的对象，在标记完成后统一回收所有被标记的对象。它是最基础的收集算法，后续的算法都是对其不足进行改进得到。这种垃圾收集算法会带来两个明显的问题：</p><ol><li><strong>效率问题</strong></li><li><strong>空间问题（标记清除后会产生大量不连续的碎片）</strong></li></ol><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003136.png" alt="image-20190925225333900" tabindex="0" loading="lazy"><figcaption>image-20190925225333900</figcaption></figure><h2 id="_2-复制算法" tabindex="-1"><a class="header-anchor" href="#_2-复制算法"><span>2. 复制算法</span></a></h2><p>为了解决效率问题，“复制”收集算法出现了。它可以将内存分为大小相同的两块，每次使用其中的一块。当这一块的内存使用完后，就将还存活的对象复制到另一块去，然后再把使用的空间一次清理掉。这样就使每次的内存回收都是对内存区间的一半进行回收。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003165.png" alt="image-20190925225448917" tabindex="0" loading="lazy"><figcaption>image-20190925225448917</figcaption></figure><h2 id="_3-标记-整理算法" tabindex="-1"><a class="header-anchor" href="#_3-标记-整理算法"><span>3. 标记-整理算法</span></a></h2><p>根据老年代的特点提出的一种标记算法，标记过程仍然与“标记-清除”算法一样，但后续步骤不是直接对可回收对象回收，而是让所有存活的对象向一端移动，然后直接清理掉端边界以外的内存。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003197.png" alt="image-20190925225549662" tabindex="0" loading="lazy"><figcaption>image-20190925225549662</figcaption></figure><h2 id="_4-分代收集算法" tabindex="-1"><a class="header-anchor" href="#_4-分代收集算法"><span>4. 分代收集算法</span></a></h2><p>当前虚拟机的垃圾收集都采用分代收集算法，这种算法没有什么新的思想，只是根据对象存活周期的不同将内存分为几块。一般将 java 堆分为新生代和老年代，这样我们就可以根据各个年代的特点选择合适的垃圾收集算法。</p><p><strong>比如在新生代中，每次收集都会有大量对象死去，所以可以选择复制算法，只需要付出少量对象的复制成本就可以完成每次垃圾收集。而老年代的对象存活几率是比较高的，而且没有额外的空间对它进行分配担保，所以我们必须选择“标记-清除”或“标记-整理”算法进行垃圾收集。</strong></p><p><strong>延伸面试问题：</strong> HotSpot 为什么要分为新生代和老年代？</p>',16)]))}const c=t(r,[["render",o],["__file","java-jvm-gc-orth.html.vue"]]),p=JSON.parse('{"path":"/posts/Java/JavaJVM/java-jvm-gc-orth.html","title":"垃圾收集器垃圾收集算法","lang":"zh-CN","frontmatter":{"aliases":"垃圾收集器垃圾收集算法","tags":null,"cssclass":null,"source":null,"category":["Java","JVM"],"created":"2024-02-22 10:47","updated":"2024-03-12 10:03","description":"垃圾收集器垃圾收集算法 image-20190925225149527image-20190925225149527 1. 标记-清除算法 该算法分为“标记”和“清除”阶段：首先标记出所有需要回收的对象，在标记完成后统一回收所有被标记的对象。它是最基础的收集算法，后续的算法都是对其不足进行改进得到。这种垃圾收集算法会带来两个明显的问题： 效率问题 空间...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/JavaJVM/java-jvm-gc-orth.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"垃圾收集器垃圾收集算法"}],["meta",{"property":"og:description","content":"垃圾收集器垃圾收集算法 image-20190925225149527image-20190925225149527 1. 标记-清除算法 该算法分为“标记”和“清除”阶段：首先标记出所有需要回收的对象，在标记完成后统一回收所有被标记的对象。它是最基础的收集算法，后续的算法都是对其不足进行改进得到。这种垃圾收集算法会带来两个明显的问题： 效率问题 空间..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003087.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"垃圾收集器垃圾收集算法\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003087.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003136.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003165.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003197.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 标记-清除算法","slug":"_1-标记-清除算法","link":"#_1-标记-清除算法","children":[]},{"level":2,"title":"2. 复制算法","slug":"_2-复制算法","link":"#_2-复制算法","children":[]},{"level":2,"title":"3. 标记-整理算法","slug":"_3-标记-整理算法","link":"#_3-标记-整理算法","children":[]},{"level":2,"title":"4. 分代收集算法","slug":"_4-分代收集算法","link":"#_4-分代收集算法","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.03,"words":610},"filePathRelative":"posts/Java/JavaJVM/java-jvm-gc-orth.md","localizedDate":"2024年10月21日","excerpt":"\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121003087.png\\" alt=\\"image-20190925225149527\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20190925225149527</figcaption></figure>\\n<h2>1. 标记-清除算法</h2>\\n<p>该算法分为“标记”和“清除”阶段：首先标记出所有需要回收的对象，在标记完成后统一回收所有被标记的对象。它是最基础的收集算法，后续的算法都是对其不足进行改进得到。这种垃圾收集算法会带来两个明显的问题：</p>","autoDesc":true}');export{c as comp,p as data};
