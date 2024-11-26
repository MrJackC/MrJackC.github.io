import{_ as e,c as t,a as n,o as i}from"./app-JRvFIbSa.js";const r={};function o(s,a){return i(),t("div",null,a[0]||(a[0]=[n('<h1 id="java-基础-面向对象" tabindex="-1"><a class="header-anchor" href="#java-基础-面向对象"><span>Java 基础 - 面向对象</span></a></h1><h2 id="_1-面向对象三大特性-封装-继承-多态" tabindex="-1"><a class="header-anchor" href="#_1-面向对象三大特性-封装-继承-多态"><span>1. 面向对象三大特性：封装 继承 多态</span></a></h2><h3 id="_1-1-封装" tabindex="-1"><a class="header-anchor" href="#_1-1-封装"><span>1.1 封装</span></a></h3><p>隐藏对象的属性和实现细节，仅对外公开访问方法，控制程序中属性的读和写的访问级别。</p><h3 id="_1-2-继承" tabindex="-1"><a class="header-anchor" href="#_1-2-继承"><span>1.2 继承</span></a></h3><p>在一个现有类的基础之上，增加新的方法或<strong>重写</strong>已有方法，从而产生一个新类。</p><p>关于继承如下3点：</p><ol><li>子类拥有父类对象所有的属性和方法（包括私有属性和私有方法），但是父类的私有属性和方法子类是无法访问的，<strong>只是拥有</strong></li><li>子类可以拥有自己属性和方法，既子类可以对父类进行扩展</li><li>子类可以用自己的方式实现父类的方法（重写）</li></ol><h3 id="_1-3-多态" tabindex="-1"><a class="header-anchor" href="#_1-3-多态"><span>1.3 多态</span></a></h3><p>对象在不同时刻表现出来的不同状态。在编译时并不能确定，只有在运行期间才能决定</p><blockquote><p>所谓多态就是指程序中定义的引用变量所指向的具体类型和通过该引用变量发出的方法调用在<strong>编程时并不确定</strong>，而是在程序运行期间才确定，既<strong>一个引用变量到底会指向哪个类的实例对象，该引用变量发出的方法调用到底是哪个类中实现的方法，必须在由程序运行期间才能决定</strong></p></blockquote><h4 id="_1-3-1-java-中实现多态的方式" tabindex="-1"><a class="header-anchor" href="#_1-3-1-java-中实现多态的方式"><span>1.3.1 Java 中实现多态的方式</span></a></h4><ol><li>继承：多个子类对同一方法的重写</li><li>接口：实现接口并覆盖接口的统一方法</li></ol><h2 id="_2-类图" tabindex="-1"><a class="header-anchor" href="#_2-类图"><span>2. 类图</span></a></h2><p>以下类图使用 <a href="https://www.planttext.com/" target="_blank" rel="noopener noreferrer">PlantUML</a> 绘制，更多语法及使用请参考: <a href="http://plantuml.com/" target="_blank" rel="noopener noreferrer">http://plantuml.com/</a> 。</p><h3 id="_2-1-泛化关系-generalization" tabindex="-1"><a class="header-anchor" href="#_2-1-泛化关系-generalization"><span>2.1 泛化关系 (Generalization)</span></a></h3><p>用来描述继承关系，在 Java 中使用 extends 关键字。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111454371.png" alt="image-20220812205554172" tabindex="0" loading="lazy"><figcaption>image-20220812205554172</figcaption></figure><h3 id="_2-2-实现关系-realization" tabindex="-1"><a class="header-anchor" href="#_2-2-实现关系-realization"><span>2.2 实现关系 (Realization)</span></a></h3><p>用来实现一个接口，在 Java 中使用 implement 关键字。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111454428.png" alt="image-20220812205633633" tabindex="0" loading="lazy"><figcaption>image-20220812205633633</figcaption></figure><h3 id="_2-3-聚合关系-aggregation" tabindex="-1"><a class="header-anchor" href="#_2-3-聚合关系-aggregation"><span>2.3 聚合关系 (Aggregation)</span></a></h3><p>表示整体由部分组成，但是整体和部分不是强依赖的，整体不存在了部分还是会存在。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111454482.png" alt="image-20220812205717745" tabindex="0" loading="lazy"><figcaption>image-20220812205717745</figcaption></figure><h3 id="_2-4-组合关系-composition" tabindex="-1"><a class="header-anchor" href="#_2-4-组合关系-composition"><span>2.4 组合关系 (Composition)</span></a></h3><p>和聚合不同，组合中整体和部分是强依赖的，整体不存在了部分也不存在了。比如公司和部门，公司没了部门就不存在了。但是公司和员工就属于聚合关系了，因为公司没了员工还在。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111454520.png" alt="image-20220812205744643" tabindex="0" loading="lazy"><figcaption>image-20220812205744643</figcaption></figure><h3 id="_2-5-关联关系-association" tabindex="-1"><a class="header-anchor" href="#_2-5-关联关系-association"><span>2.5 关联关系 (Association)</span></a></h3><p>表示不同类对象之间有关联，这是一种静态关系，与运行过程的状态无关，在最开始就可以确定。因此也可以用 1 对 1、多对 1、多对多这种关联关系来表示。比如学生和学校就是一种关联关系，一个学校可以有很多学生，但是一个学生只属于一个学校，因此这是一种多对一的关系，在运行开始之前就可以确定。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111454551.png" alt="image-20220812205816656" tabindex="0" loading="lazy"><figcaption>image-20220812205816656</figcaption></figure><h3 id="_2-6-依赖关系-dependency" tabindex="-1"><a class="header-anchor" href="#_2-6-依赖关系-dependency"><span>2.6 依赖关系 (Dependency)</span></a></h3><p>和关联关系不同的是，依赖关系是在运行过程中起作用的。A 类和 B 类是依赖关系主要有三种形式:</p><ul><li>A 类是 B 类中的(某中方法的)局部变量；</li><li>A 类是 B 类方法当中的一个参数；</li><li>A 类向 B 类发送消息，从而影响 B 类发生变化；</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111454581.png" alt="image-20220812205907513" tabindex="0" loading="lazy"><figcaption>image-20220812205907513</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/java/basic/java-basic-oop.html" target="_blank" rel="noopener noreferrer"><strong>Java 基础 - 面向对象</strong></a></p>',36)]))}const p=e(r,[["render",o],["__file","Java-basis-oop.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E5%9F%BA%E7%A1%80/Java-basis-oop.html","title":"Java 基础 - 面向对象","lang":"zh-CN","frontmatter":{"cssclass":null,"aliases":"Java 基础 - 面向对象","cssclasses":["indent"],"source":null,"order":10,"category":"Java基础","tags":["Java","学习","基础"],"author":"MrJason","created":"2024-02-22 10:42","updated":"2024-03-11 14:54","description":"Java 基础 - 面向对象 1. 面向对象三大特性：封装 继承 多态 1.1 封装 隐藏对象的属性和实现细节，仅对外公开访问方法，控制程序中属性的读和写的访问级别。 1.2 继承 在一个现有类的基础之上，增加新的方法或重写已有方法，从而产生一个新类。 关于继承如下3点： 子类拥有父类对象所有的属性和方法（包括私有属性和私有方法），但是父类的私有属性和...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E5%9F%BA%E7%A1%80/Java-basis-oop.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Java 基础 - 面向对象"}],["meta",{"property":"og:description","content":"Java 基础 - 面向对象 1. 面向对象三大特性：封装 继承 多态 1.1 封装 隐藏对象的属性和实现细节，仅对外公开访问方法，控制程序中属性的读和写的访问级别。 1.2 继承 在一个现有类的基础之上，增加新的方法或重写已有方法，从而产生一个新类。 关于继承如下3点： 子类拥有父类对象所有的属性和方法（包括私有属性和私有方法），但是父类的私有属性和..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111454371.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-31T08:54:07.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"学习"}],["meta",{"property":"article:tag","content":"基础"}],["meta",{"property":"article:modified_time","content":"2024-10-31T08:54:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 基础 - 面向对象\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111454371.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111454428.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111454482.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111454520.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111454551.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111454581.png\\"],\\"dateModified\\":\\"2024-10-31T08:54:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\"}]}"]]},"headers":[{"level":2,"title":"1. 面向对象三大特性：封装 继承 多态","slug":"_1-面向对象三大特性-封装-继承-多态","link":"#_1-面向对象三大特性-封装-继承-多态","children":[{"level":3,"title":"1.1 封装","slug":"_1-1-封装","link":"#_1-1-封装","children":[]},{"level":3,"title":"1.2 继承","slug":"_1-2-继承","link":"#_1-2-继承","children":[]},{"level":3,"title":"1.3 多态","slug":"_1-3-多态","link":"#_1-3-多态","children":[]}]},{"level":2,"title":"2. 类图","slug":"_2-类图","link":"#_2-类图","children":[{"level":3,"title":"2.1 泛化关系 (Generalization)","slug":"_2-1-泛化关系-generalization","link":"#_2-1-泛化关系-generalization","children":[]},{"level":3,"title":"2.2 实现关系 (Realization)","slug":"_2-2-实现关系-realization","link":"#_2-2-实现关系-realization","children":[]},{"level":3,"title":"2.3 聚合关系 (Aggregation)","slug":"_2-3-聚合关系-aggregation","link":"#_2-3-聚合关系-aggregation","children":[]},{"level":3,"title":"2.4 组合关系 (Composition)","slug":"_2-4-组合关系-composition","link":"#_2-4-组合关系-composition","children":[]},{"level":3,"title":"2.5 关联关系 (Association)","slug":"_2-5-关联关系-association","link":"#_2-5-关联关系-association","children":[]},{"level":3,"title":"2.6 依赖关系 (Dependency)","slug":"_2-6-依赖关系-dependency","link":"#_2-6-依赖关系-dependency","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1730364847000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":2}]},"readingTime":{"minutes":3,"words":900},"filePathRelative":"posts/Java/Java基础/Java-basis-oop.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 面向对象三大特性：封装 继承 多态</h2>\\n<h3>1.1 封装</h3>\\n<p>隐藏对象的属性和实现细节，仅对外公开访问方法，控制程序中属性的读和写的访问级别。</p>\\n<h3>1.2 继承</h3>\\n<p>在一个现有类的基础之上，增加新的方法或<strong>重写</strong>已有方法，从而产生一个新类。</p>\\n<p>关于继承如下3点：</p>\\n<ol>\\n<li>子类拥有父类对象所有的属性和方法（包括私有属性和私有方法），但是父类的私有属性和方法子类是无法访问的，<strong>只是拥有</strong></li>\\n<li>子类可以拥有自己属性和方法，既子类可以对父类进行扩展</li>\\n<li>子类可以用自己的方式实现父类的方法（重写）</li>\\n</ol>","copyright":{"author":"MrJason"},"autoDesc":true}');export{p as comp,c as data};
