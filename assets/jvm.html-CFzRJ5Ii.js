import{_ as e,c as a,a as i,o as l}from"./app-JRvFIbSa.js";const n={};function s(o,t){return l(),a("div",null,t[0]||(t[0]=[i('<h1 id="类加载过程" tabindex="-1"><a class="header-anchor" href="#类加载过程"><span>类加载过程</span></a></h1><p>Class 文件需要加载到虚拟机中之后才能运行和使用，那么虚拟机是如何加载这些Class文件呢？</p><p>系统加载Class类型的文件主要三步：加载-&gt;连接 -&gt;初始化。连接过程又可以分为三步：验证-&gt;准备-&gt;解析。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410151614544.png" alt="image-20190928000659249" tabindex="0" loading="lazy"><figcaption>image-20190928000659249</figcaption></figure><h2 id="_1-加载" tabindex="-1"><a class="header-anchor" href="#_1-加载"><span>1. 加载</span></a></h2><p>类加载过程的第一步，主要完成下面3件事情</p><ol><li>通过全类名获取定义此类的二进制字节流（<strong>这个步骤就是类加载器</strong>）</li><li>将字节流所代表的静态存储结构转换为方法区的运行时数据结构</li><li>在内存中生成一个代表该类的 Class 对象,作为方法区这些数据的访问入口</li></ol><p>虚拟机规范多上面这3点并不具体，因此是非常灵活的。比如：&quot;通过全类名获取定义此类的二进制字节流&quot; 并没有指明具体从哪里获取、怎样获取。比如：比较常见的就是从 ZIP 包中读取（日后出现的JAR、EAR、WAR格式的基础）、其他文件生成（典型应用就是JSP）等等。</p><p><strong>一个非数组类的加载阶段（加载阶段获取类的二进制字节流的动作）是可控性最强的阶段，这一步我们可以去完成还可以自定义类加载器去控制字节流的获取方式（重写一个类加载器的 loadClass() 方法）。数组类型不通过类加载器创建，它由 Java 虚拟机直接创建。</strong></p><p>类加载器、双亲委派模型也是非常重要的知识点，这部分内容会在后面的文章中单独介绍到。</p><p>加载阶段和连接阶段的部分内容是交叉进行的，加载阶段尚未结束，连接阶段可能就已经开始了。</p><h2 id="_2-连接" tabindex="-1"><a class="header-anchor" href="#_2-连接"><span>2.连接</span></a></h2><h3 id="_2-1-验证" tabindex="-1"><a class="header-anchor" href="#_2-1-验证"><span>2.1 验证</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410151614585.png" alt="image-20190928001109063" tabindex="0" loading="lazy"><figcaption>image-20190928001109063</figcaption></figure><h3 id="_2-2-准备" tabindex="-1"><a class="header-anchor" href="#_2-2-准备"><span>2.2 准备</span></a></h3><p><strong>准备阶段是正式为类变量分配内存并设置类变量初始值的阶段</strong>，这些内存都将在方法区中分配。对于该阶段有以下几点需要注意：</p><ol><li>这时候进行内存分配的仅包括类变量（static），而不包括实例变量，实例变量会在对象实例化时随着对象一块分配在 Java 堆中。</li><li>这里所设置的初始值&quot;通常情况&quot;下是数据类型默认的零值（如0、0L、null、false等），比如我们定义了<code>public static int value=111</code> ，那么 value 变量在准备阶段的初始值就是 0 而不是111（初始化阶段才会复制）。特殊情况：比如给 value 变量加上了 fianl 关键字<code>public static final int value=111</code> ，那么准备阶段 value 的值就被复制为 111。</li></ol><p><strong>基本数据类型的零值：</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410151614617.png" alt="image-20190928001409383" tabindex="0" loading="lazy"><figcaption>image-20190928001409383</figcaption></figure><h3 id="_2-3-解析" tabindex="-1"><a class="header-anchor" href="#_2-3-解析"><span>2.3 解析</span></a></h3><p>解析阶段是虚拟<strong>机将常量池内</strong>的<strong>符号引用</strong>替换为<strong>直接引用</strong>的过程。</p><blockquote><p>解析动作主要针对类或接口、字段、类方法、接口方法、方法类型、方法句柄和调用限定符7类符号引用进行。</p></blockquote><ul><li><p><strong>符号引用：</strong></p><p>符号引用就是一组符号来描述目标，可以是任何字面量</p></li><li><p>直接引用</p><p><strong>直接引用</strong>就是直接指向目标的指针、相对偏移量或一个间接定位到目标的句柄</p></li></ul><p>在程序实际运行时，只有符号引用是不够的，举个例子：在程序执行方法时，系统需要明确知道这个方法所在的位置。Java 虚拟机为每个类都准备了一张方法表来存放类中所有的方法。当需要调用一个类的方法的时候，只要知道这个方法在方发表中的偏移量就可以直接调用该方法了。通过解析操作符号引用就可以直接转变为目标方法在类中方法表的位置，从而使得方法可以被调用。</p><p>综上，<strong>解析阶段是虚拟机将常量池内的符号引用替换为直接引用的过程</strong>，也就是得到类或者字段、方法在内存中的指针或者偏移量。</p><h2 id="_3-初始化" tabindex="-1"><a class="header-anchor" href="#_3-初始化"><span>3. 初始化</span></a></h2><p>初始化是类加载的最后一步，也是真正执行类中定义的 Java 程序代码(字节码)，初始化阶段是<strong>执行类构造器 <code>&lt;clinit&gt; ()</code>方法的过程</strong>。</p><p>对于<code>&lt;clinit&gt;（）</code> 方法的调用，虚拟机会自己确保其在多线程环境中的安全性。因为 <code>&lt;clinit&gt;（）</code> 方法是带锁线程安全，所以在多线程环境下进行类初始化的话可能会引起死锁，并且这种死锁很难被发现。</p><p>对于初始化阶段，虚拟机严格规范了有且只有5中情况下，必须对类进行初始化：</p><ol><li>当遇到 new 、 getstatic、putstatic或invokestatic 这4条直接码指令时，比如 new 一个类，读取一个静态字段(未被 final 修饰)、或调用一个类的静态方法时。</li><li>使用 <code>java.lang.reflect</code> 包的方法对类进行反射调用时 ，如果类没初始化，需要触发其初始化。</li><li>初始化一个类，如果其父类还未初始化，则先触发该父类的初始化。</li><li>当虚拟机启动时，用户需要定义一个要执行的主类 (包含 main 方法的那个类)，虚拟机会先初始化这个类。</li><li>当使用 JDK1.7 的动态动态语言时，如果一个 MethodHandle 实例的最后解析结构为 REF_getStatic、REF_putStatic、REF_invokeStatic、的方法句柄，并且这个句柄没有初始化，则需要先触发器初始化。</li></ol><h2 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结"><span>4. 总结</span></a></h2><p>类加载主要包含三个步骤：加载-&gt;连接-&gt;初始化，连接又可以分为：验证-&gt;准备-解析。</p><ul><li><p>加载：</p><ul><li>通过全类名获取此类二进制字节流</li><li>将字节流静态存储结构转为方法区运行时数据结构</li><li>内存生成一个代表该类的class对象，作为方法区这些数据的访问入口</li></ul></li><li><p>连接</p><ul><li><p>验证</p></li><li><p>准备</p><p>为类变量（static）分配内存，设置初始化值（是0，不是111）</p></li><li><p>解析</p><p>将常量池的符号引用替换为直接引用</p></li></ul></li><li><p>初始化</p><p>执行类构造器</p></li></ul>',33)]))}const p=e(n,[["render",s],["__file","jvm.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/JavaJVM/jvm.html","title":"类加载过程","lang":"zh-CN","frontmatter":{"category":["Java","JVM"],"created":"2024-05-14 07:56","updated":"2024-10-15 16:14","description":"类加载过程 Class 文件需要加载到虚拟机中之后才能运行和使用，那么虚拟机是如何加载这些Class文件呢？ 系统加载Class类型的文件主要三步：加载->连接 ->初始化。连接过程又可以分为三步：验证->准备->解析。 image-20190928000659249image-20190928000659249 1. 加载 类加载过程的第一步，主要完...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/JavaJVM/jvm.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"类加载过程"}],["meta",{"property":"og:description","content":"类加载过程 Class 文件需要加载到虚拟机中之后才能运行和使用，那么虚拟机是如何加载这些Class文件呢？ 系统加载Class类型的文件主要三步：加载->连接 ->初始化。连接过程又可以分为三步：验证->准备->解析。 image-20190928000659249image-20190928000659249 1. 加载 类加载过程的第一步，主要完..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410151614544.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类加载过程\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410151614544.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410151614585.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410151614617.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 加载","slug":"_1-加载","link":"#_1-加载","children":[]},{"level":2,"title":"2.连接","slug":"_2-连接","link":"#_2-连接","children":[{"level":3,"title":"2.1 验证","slug":"_2-1-验证","link":"#_2-1-验证","children":[]},{"level":3,"title":"2.2 准备","slug":"_2-2-准备","link":"#_2-2-准备","children":[]},{"level":3,"title":"2.3 解析","slug":"_2-3-解析","link":"#_2-3-解析","children":[]}]},{"level":2,"title":"3. 初始化","slug":"_3-初始化","link":"#_3-初始化","children":[]},{"level":2,"title":"4. 总结","slug":"_4-总结","link":"#_4-总结","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.36,"words":1607},"filePathRelative":"posts/Java/JavaJVM/jvm.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>Class 文件需要加载到虚拟机中之后才能运行和使用，那么虚拟机是如何加载这些Class文件呢？</p>\\n<p>系统加载Class类型的文件主要三步：加载-&gt;连接 -&gt;初始化。连接过程又可以分为三步：验证-&gt;准备-&gt;解析。</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410151614544.png\\" alt=\\"image-20190928000659249\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20190928000659249</figcaption></figure>","autoDesc":true}');export{p as comp,c as data};
