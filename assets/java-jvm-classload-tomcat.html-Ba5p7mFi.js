import{_ as t,c as e,a as o,o as s}from"./app-BQBjlK2G.js";const l={};function c(r,a){return s(),e("div",null,a[0]||(a[0]=[o('<h1 id="tomcat类加载器" tabindex="-1"><a class="header-anchor" href="#tomcat类加载器"><span>tomcat类加载器</span></a></h1><p>通过前文我们已经了解了类加载器以及双亲委派模型，并且了解为什么使用双亲委派模型。但我们考虑一下我们tomcat 中的场景</p><ul><li>一个web容器可能需要部署两个应用程序，不同的应用程序可能会<strong>依赖同一个第三方类库的不同版本</strong>。不能要求同一个类库在同一个服务器只有一份，因此要保证每个应用程序的类库都是独立的，保证相互隔离。</li></ul><p>如果我们使用双亲委派模型就不能保证他们的隔离性了，那么我们如果要破坏双亲委派模型</p><h2 id="_1-如何破坏双亲委派模型" tabindex="-1"><a class="header-anchor" href="#_1-如何破坏双亲委派模型"><span>1. 如何破坏双亲委派模型</span></a></h2><p>双亲委任模型<strong>不是一个强制性的约束模型</strong>，而是一个建议型的类加载器实现方式。</p><p>历史上出现的三次破坏</p><ul><li><p>第一次：双亲委派模型出现之前，既jdk 1.2 发布之前</p></li><li><p>第二次：因为自身模型缺陷</p><p>双亲委派模型解决了各个类加载器的基础类的同一问题（越基础的类由越上层的加载器进行加载），基础类之所以称为“基础”，是因为它们总是作为被用户代码调用的API， 但没有绝对，<strong>如果基础类调用会用户的代码</strong>怎么办呢？</p><blockquote><p>为了解决这个问题，Java设计团队只好引入了一个不太优雅的设计：<strong>线程上下文类加载器（Thread Context ClassLoader）</strong>。这个类加载器可以通过java.lang.Thread类的setContextClassLoader方法进行设置。如果创建线程时还未设置，它将会从父线程中继承一个，如果在应用程序的全局范围内都没有设置过多的话，那这个类加载器默认即使应用程序类加载器。</p><p>嘿嘿，有了线程上下文加载器，JNDI服务使用这个线程上下文加载器去加载所需要的SPI代码，也就是父类加载器请求子类加载器去完成类加载的动作，这种行为实际上就是打通了双亲委派模型的层次结构来逆向使用类加载器，实际上已经违背了双亲委派模型的一般性原则。但这无可奈何，Java中所有涉及SPI的加载动作基本胜都采用这种方式。例如JNDI，<strong>JDBC</strong>，JCE，JAXB，JBI等。</p></blockquote></li><li><p><strong>第三次</strong>：为了实现热插拔，热部署，模块化，意思是添加一个功能或减去一个功能不用重启，只需要把这模块连同类加载器一起换掉就实现了代码的热替换。</p></li></ul><h2 id="_2-tomcat-的类加载器是怎么设计的" tabindex="-1"><a class="header-anchor" href="#_2-tomcat-的类加载器是怎么设计的"><span>2. Tomcat 的类加载器是怎么设计的？</span></a></h2><h3 id="_2-1-tomcat是个web容器-那么他要解决什么问题" tabindex="-1"><a class="header-anchor" href="#_2-1-tomcat是个web容器-那么他要解决什么问题"><span>2.1 tomcat是个web容器，那么他要解决什么问题</span></a></h3><ol><li>一个web容器可能需要部署两个应用程序，不同的应用程序可能会依赖<strong>同一个第三方类库的不同版本</strong>，不能要求同一个类库在同一个服务器只有一份，因此要保证每个应用程序的类库都是独立的，保证相互隔离。</li><li>部署在同一个web容器中相同的类库相同的版本可以共享。否则，如果服务器有10个应用程序，那么要有10份相同的类库加载进虚拟机，这是扯淡的。</li><li>web容器也有自己依赖的类库，不能于应用程序的类库混淆。基于安全考虑，应该让容器的类库和程序的类库隔离开来。</li><li>web容器要支持jsp的修改，我们知道，jsp 文件最终也是要编译成class文件才能在虚拟机中运行，但程序运行后修改jsp已经是司空见惯的事情，否则要你何用？ 所以，web容器需要支持 jsp 修改后不用重启。</li></ol><p>再看看我们的问题：Tomcat 如果使用默认的类加载机制行不行？ 答案是不行的。为什么？我们看，</p><ul><li>第一个问题，如果使用默认的类加载器机制，那么是无法加载两个相同类库的不同版本的，默认的累加器是不管你是什么版本的，只在乎你的全限定类名，并且只有一份。</li><li>第二个问题，默认的类加载器是能够实现的，因为他的职责就是保证唯一性。</li><li>第三个问题和第一个问题一样。</li><li>四个问题，我们想我们要怎么实现jsp文件的热修改（楼主起的名字），jsp 文件其实也就是class文件，那么如果修改了，但类名还是一样，类加载器会直接取方法区中已经存在的，修改后的jsp是不会重新加载的。那么怎么办呢？我们可以直接卸载掉这jsp文件的类加载器，所以你应该想到了，每个jsp文件对应一个唯一的类加载器，当一个jsp文件修改了，就直接卸载这个jsp类加载器。重新创建类加载器，重新加载jsp文件。</li></ul><h3 id="_2-2-tomcat-如何实现自己独特的类加载机制" tabindex="-1"><a class="header-anchor" href="#_2-2-tomcat-如何实现自己独特的类加载机制"><span>2.2 Tomcat 如何实现自己独特的类加载机制？</span></a></h3><p>所以，Tomcat 是怎么实现的呢？牛逼的Tomcat团队已经设计好了。我们看看他们的设计图：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120945817.png" alt="image-20190930101804101" tabindex="0" loading="lazy"><figcaption>image-20190930101804101</figcaption></figure><p>我们看到，前面3个类加载和默认的一致，CommonClassLoader、CatalinaClassLoader、SharedClassLoader和WebappClassLoader则是Tomcat自己定义的类加载器，它们分别加载<code>/common/*</code>、<code>/server/*</code>、<code>/shared/*</code>（在tomcat 6之后已经合并到根目录下的lib目录下）和<code>/WebApp/WEB-INF/*</code>中的Java类库。其中WebApp类加载器和Jsp类加载器通常会存在多个实例，<strong>每一个Web应用程序</strong>对应一个WebApp类加载器，每一个JSP文件对应一个Jsp类加载器。</p><ul><li>commonLoader：Tomcat最基本的类加载器，加载路径中的class可以被Tomcat容器本身以及各个Webapp访问；</li><li>catalinaLoader：Tomcat容器私有的类加载器，加载路径中的class对于Webapp不可见；</li><li>sharedLoader：各个Webapp共享的类加载器，加载路径中的class对于所有Webapp可见，但是对于Tomcat容器不可见；</li><li>WebappClassLoader：各个Webapp私有的类加载器，加载路径中的class只对当前Webapp可见；</li></ul><p>从图中的委派关系中可以看出：</p><blockquote><p>CommonClassLoader能加载的类都可以被Catalina ClassLoader和SharedClassLoader使用，从而实现了公有类库的共用，而CatalinaClassLoader和Shared ClassLoader自己能加载的类则与对方相互隔离。</p></blockquote><blockquote><p>WebAppClassLoader可以使用SharedClassLoader加载到的类，但各个WebAppClassLoader实例之间相互隔离。</p></blockquote><blockquote><p>而JasperLoader的加载范围仅仅是这个JSP文件所编译出来的那一个.Class文件，它出现的目的就是为了被丢弃：当Web容器检测到JSP文件被修改时，会替换掉目前的JasperLoader的实例，并通过再建立一个新的Jsp类加载器来实现JSP文件的HotSwap功能。</p></blockquote><p>很显然，tomcat 不是这样实现，tomcat 为了实现隔离性，没有遵守这个约定，每个webappClassLoader加载自己的目录下的class文件，不会传递给父类加载器。</p><h5 id="我们扩展出一个问题-如果tomcat-的-common-classloader-想加载-webapp-classloader-中的类-该怎么办" tabindex="-1"><a class="header-anchor" href="#我们扩展出一个问题-如果tomcat-的-common-classloader-想加载-webapp-classloader-中的类-该怎么办"><span>我们扩展出一个问题：如果tomcat 的 Common ClassLoader 想加载 WebApp ClassLoader 中的类，该怎么办？</span></a></h5><p>看了前面的关于破坏双亲委派模型的内容，我们心里有数了，我们可以使用线程上下文类加载器实现，使用线程上下文加载器，可以让父类加载器请求子类加载器去完成类加载的动作。牛逼吧。</p><h3 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h3><p><a href="https://juejin.im/post/5a59f2296fb9a01ca871eb8c" target="_blank" rel="noopener noreferrer">深入理解 Tomcat（四）Tomcat 类加载器之为何违背双亲委派模型</a></p>',27)]))}const n=t(l,[["render",c],["__file","java-jvm-classload-tomcat.html.vue"]]),i=JSON.parse('{"path":"/posts/Java/JavaJVM/java-jvm-classload-tomcat.html","title":"tomcat类加载器","lang":"zh-CN","frontmatter":{"aliases":"tomcat类加载器","tags":null,"cssclass":null,"source":null,"category":["Java","JVM"],"created":"2024-02-22 10:47","updated":"2024-03-12 09:45","description":"tomcat类加载器 通过前文我们已经了解了类加载器以及双亲委派模型，并且了解为什么使用双亲委派模型。但我们考虑一下我们tomcat 中的场景 一个web容器可能需要部署两个应用程序，不同的应用程序可能会依赖同一个第三方类库的不同版本。不能要求同一个类库在同一个服务器只有一份，因此要保证每个应用程序的类库都是独立的，保证相互隔离。 如果我们使用双亲委派...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/JavaJVM/java-jvm-classload-tomcat.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"tomcat类加载器"}],["meta",{"property":"og:description","content":"tomcat类加载器 通过前文我们已经了解了类加载器以及双亲委派模型，并且了解为什么使用双亲委派模型。但我们考虑一下我们tomcat 中的场景 一个web容器可能需要部署两个应用程序，不同的应用程序可能会依赖同一个第三方类库的不同版本。不能要求同一个类库在同一个服务器只有一份，因此要保证每个应用程序的类库都是独立的，保证相互隔离。 如果我们使用双亲委派..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120945817.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"tomcat类加载器\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120945817.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 如何破坏双亲委派模型","slug":"_1-如何破坏双亲委派模型","link":"#_1-如何破坏双亲委派模型","children":[]},{"level":2,"title":"2. Tomcat 的类加载器是怎么设计的？","slug":"_2-tomcat-的类加载器是怎么设计的","link":"#_2-tomcat-的类加载器是怎么设计的","children":[{"level":3,"title":"2.1 tomcat是个web容器，那么他要解决什么问题","slug":"_2-1-tomcat是个web容器-那么他要解决什么问题","link":"#_2-1-tomcat是个web容器-那么他要解决什么问题","children":[]},{"level":3,"title":"2.2 Tomcat 如何实现自己独特的类加载机制？","slug":"_2-2-tomcat-如何实现自己独特的类加载机制","link":"#_2-2-tomcat-如何实现自己独特的类加载机制","children":[]},{"level":3,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.65,"words":1995},"filePathRelative":"posts/Java/JavaJVM/java-jvm-classload-tomcat.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>通过前文我们已经了解了类加载器以及双亲委派模型，并且了解为什么使用双亲委派模型。但我们考虑一下我们tomcat 中的场景</p>\\n<ul>\\n<li>一个web容器可能需要部署两个应用程序，不同的应用程序可能会<strong>依赖同一个第三方类库的不同版本</strong>。不能要求同一个类库在同一个服务器只有一份，因此要保证每个应用程序的类库都是独立的，保证相互隔离。</li>\\n</ul>\\n<p>如果我们使用双亲委派模型就不能保证他们的隔离性了，那么我们如果要破坏双亲委派模型</p>\\n<h2>1. 如何破坏双亲委派模型</h2>\\n<p>双亲委任模型<strong>不是一个强制性的约束模型</strong>，而是一个建议型的类加载器实现方式。</p>","autoDesc":true}');export{n as comp,i as data};
