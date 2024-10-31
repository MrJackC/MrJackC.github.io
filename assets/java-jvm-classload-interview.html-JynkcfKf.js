import{_ as a,c as n,a as l,o as i}from"./app-mWs04Xnh.js";const e={};function r(p,s){return i(),n("div",null,s[0]||(s[0]=[l(`<h1 id="类加载器-常见面试" tabindex="-1"><a class="header-anchor" href="#类加载器-常见面试"><span>类加载器（常见面试）</span></a></h1><h2 id="面试官-请说说你理解的类加载器。" tabindex="-1"><a class="header-anchor" href="#面试官-请说说你理解的类加载器。"><span><strong>面试官：请说说你理解的类加载器。</strong></span></a></h2><hr><p>我：通过一个类的<strong>全限定名来获取描述此类的二进制字节流</strong>这个动作放到<strong>Java虚拟机外部去实现</strong>，以便让应用程序<strong>自己决定</strong>如何去获取所需要的类。实现这个动作的代码模块称为**“类加载器”**。</p><h2 id="面试官-说说有哪几种类加载器-他们的职责分别是什么-他们之前存在什么样的约定。" tabindex="-1"><a class="header-anchor" href="#面试官-说说有哪几种类加载器-他们的职责分别是什么-他们之前存在什么样的约定。"><span><strong>面试官：说说有哪几种类加载器，他们的职责分别是什么，他们之前存在什么样的约定。</strong></span></a></h2><hr><p>我：emmmm，我在纸上边画边讲吧。</p><p>类加载的结构如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120945736.png" alt="image-20190929221807667" tabindex="0" loading="lazy"><figcaption>image-20190929221807667</figcaption></figure><p><strong>BootstrapClassLoader</strong>：启动类类加载器，它用来加载&lt;JAVA_HOME&gt;/jre/lib路径,**-**Xbootclasspath参数指定的路径以&lt;JAVA_HOME&gt;/jre/classes中的类。BootStrapClassLoader是由c++实现的。</p><p><strong>ExtClassLoader</strong>：拓展类类加载器，它用来加载&lt;JAVA_HOME&gt;/jre/lib/ext路径以及java.ext.dirs系统变量指定的类路径下的类。</p><p><strong>AppClassLoader</strong>：应用程序类类加载器，它主要加载应用程序ClassPath下的类（包含jar包中的类）。它是java应用程序默认的类加载器。</p><p><strong>用户自定义类加载器</strong>：用户根据自定义需求，自由的定制加载的逻辑，继承ClassLoader，仅仅覆盖findClass（）即将继续遵守双亲委派模型。</p><p>在虚拟机启动的时候会初始化BootstrapClassLoader，然后在Launcher类中去加载ExtClassLoader、AppClassLoader，并将AppClassLoader的parent设置为ExtClassLoader，并设置线程上下文类加载器。</p><p><strong>Launcher</strong>是JRE中用于启动程序入口main()的类，让我们看下Launcher的代码</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>public Launcher() {</span></span>
<span class="line"><span>        Launcher.ExtClassLoader var1;</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            //加载扩展类类加载器</span></span>
<span class="line"><span>            var1 = Launcher.ExtClassLoader.getExtClassLoader();</span></span>
<span class="line"><span>        } catch (IOException var10) {</span></span>
<span class="line"><span>            throw new InternalError(&quot;Could not create extension class loader&quot;, var10);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            //加载应用程序类加载器，并设置parent为extClassLoader</span></span>
<span class="line"><span>            this.loader = Launcher.AppClassLoader.getAppClassLoader(var1);</span></span>
<span class="line"><span>        } catch (IOException var9) {</span></span>
<span class="line"><span>            throw new InternalError(&quot;Could not create application class loader&quot;, var9);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //设置默认的线程上下文类加载器为AppClassLoader</span></span>
<span class="line"><span>        Thread.currentThread().setContextClassLoader(this.loader);</span></span>
<span class="line"><span>        //此处删除无关代码。。。</span></span>
<span class="line"><span>        }</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面画的几种类加载器是遵循<strong>双亲委派模型</strong>的，其实就是，当一个类加载器去加载类时先尝试让父类加载器去加载，如果父类加载器加载不了再尝试自身加载。这也是我们在自定义ClassLoader时java官方建议遵守的约定。</p><h2 id="面试官插嘴-extclassloader为什么没有设置parent" tabindex="-1"><a class="header-anchor" href="#面试官插嘴-extclassloader为什么没有设置parent"><span>**面试官插嘴：**ExtClassLoader为什么没有设置parent？</span></a></h2><p>让我们看看下面代码的输出结果</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;">[] args) throws ClassNotFoundException {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        ClassLoader</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> classLoader </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Test</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getClassLoader</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(classLoader);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">classLoader</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getParent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">classLoader</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getParent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getParent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span></code></pre></div><p>看看结果是啥</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">sun</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">misc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Launcher$AppClassLoader</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">18b4aac2</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">sun</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">misc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Launcher$ExtClassLoader</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">5a61f5df</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">null</span></span></code></pre></div><p>因为BootstrapClassLoader是由c++实现的，所以并不存在一个Java的类，因此会打印出null，所以在ClassLoader中，null就代表了BootStrapClassLoader（有些片面）。</p><h3 id="双亲委派模型的好处" tabindex="-1"><a class="header-anchor" href="#双亲委派模型的好处"><span>双亲委派模型的好处</span></a></h3><p>双亲委派模型能<strong>保证基础类仅加载一次</strong>，不会让jvm中存在重名的类。比如String.class，每次加载都委托给父加载器，最终都是BootstrapClassLoader，都保证java核心类都是BootstrapClassLoader加载的，保证了java的安全与稳定性。</p><p>API不会被篡改</p><h2 id="面试官-那自己怎么去实现一个classloader呢-请举个实际的例子。" tabindex="-1"><a class="header-anchor" href="#面试官-那自己怎么去实现一个classloader呢-请举个实际的例子。"><span><strong>面试官：那自己怎么去实现一个ClassLoader呢？请举个实际的例子。</strong></span></a></h2><hr><p>我：好的（脸上笑嘻嘻，心里mmp）。</p><p>自己实现ClassLoader时只需要继承ClassLoader类，然后覆盖findClass（String name）方法即可完成一个带有双亲委派模型的类加载器。</p><p>我们看下ClassLoader#loadClass的代码</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">protected</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Class</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#C678DD;--shiki-dark:#C678DD;">?</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> loadClass</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> boolean</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> resolve)</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        throws </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ClassNotFoundException</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        synchronized</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getClassLoadingLock</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(name)) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // 查看是否已经加载过该类，加载过的类会有缓存，是使用native方法实现的</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            Class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#C678DD;--shiki-dark:#C678DD;">?</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> findLoadedClass</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(name)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> t0 </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">nanoTime</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                try</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                    //父类不为空则先让父类加载</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (parent </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                        c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> parent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">loadClass</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(name, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                    } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">else</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                    //父类是null就是BootstrapClassLoader，使用启动类类加载器加载</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                        c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> findBootstrapClassOrNull</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(name)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ClassNotFoundException</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                    // 父类类加载器不能加载该类</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                //如果父类未加载该类</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                    // If still not found, then invoke findClass in order</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                    // to find the class.</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                    long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> t1 </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">nanoTime</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                    //让当前类加载器加载</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                    c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> findClass</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(name)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经典的模板方法模式，子类只需要实现findClass，关心从哪里加载即可。</p><p>还有一点，parent需要自己设置哦，可以放在构造函数做这个事情。</p><h2 id="面试官插嘴-为什么不继承appclassloader呢" tabindex="-1"><a class="header-anchor" href="#面试官插嘴-为什么不继承appclassloader呢"><span>**面试官插嘴：**为什么不继承AppClassLoader呢？</span></a></h2><p>我：因为它和ExtClassLoader都是Launcher的静态类，都是包访问路径权限的。</p><h3 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h3><p><a href="https://zhuanlan.zhihu.com/p/54693308" target="_blank" rel="noopener noreferrer">好怕怕的<em>类加载器</em></a></p>`,38)]))}const t=a(e,[["render",r],["__file","java-jvm-classload-interview.html.vue"]]),d=JSON.parse('{"path":"/posts/Java/JavaJVM/java-jvm-classload-interview.html","title":"类加载器（常见面试）","lang":"zh-CN","frontmatter":{"aliases":"类加载器（常见面试）","tags":null,"cssclass":null,"source":null,"category":["Java","JVM"],"created":"2024-02-22 10:47","updated":"2024-03-12 09:45","description":"类加载器（常见面试） 面试官：请说说你理解的类加载器。 我：通过一个类的全限定名来获取描述此类的二进制字节流这个动作放到Java虚拟机外部去实现，以便让应用程序自己决定如何去获取所需要的类。实现这个动作的代码模块称为**“类加载器”**。 面试官：说说有哪几种类加载器，他们的职责分别是什么，他们之前存在什么样的约定。 我：emmmm，我在纸上边画边讲吧...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/JavaJVM/java-jvm-classload-interview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"类加载器（常见面试）"}],["meta",{"property":"og:description","content":"类加载器（常见面试） 面试官：请说说你理解的类加载器。 我：通过一个类的全限定名来获取描述此类的二进制字节流这个动作放到Java虚拟机外部去实现，以便让应用程序自己决定如何去获取所需要的类。实现这个动作的代码模块称为**“类加载器”**。 面试官：说说有哪几种类加载器，他们的职责分别是什么，他们之前存在什么样的约定。 我：emmmm，我在纸上边画边讲吧..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120945736.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类加载器（常见面试）\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120945736.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"面试官：请说说你理解的类加载器。","slug":"面试官-请说说你理解的类加载器。","link":"#面试官-请说说你理解的类加载器。","children":[]},{"level":2,"title":"面试官：说说有哪几种类加载器，他们的职责分别是什么，他们之前存在什么样的约定。","slug":"面试官-说说有哪几种类加载器-他们的职责分别是什么-他们之前存在什么样的约定。","link":"#面试官-说说有哪几种类加载器-他们的职责分别是什么-他们之前存在什么样的约定。","children":[]},{"level":2,"title":"**面试官插嘴：**ExtClassLoader为什么没有设置parent？","slug":"面试官插嘴-extclassloader为什么没有设置parent","link":"#面试官插嘴-extclassloader为什么没有设置parent","children":[{"level":3,"title":"双亲委派模型的好处","slug":"双亲委派模型的好处","link":"#双亲委派模型的好处","children":[]}]},{"level":2,"title":"面试官：那自己怎么去实现一个ClassLoader呢？请举个实际的例子。","slug":"面试官-那自己怎么去实现一个classloader呢-请举个实际的例子。","link":"#面试官-那自己怎么去实现一个classloader呢-请举个实际的例子。","children":[]},{"level":2,"title":"**面试官插嘴：**为什么不继承AppClassLoader呢？","slug":"面试官插嘴-为什么不继承appclassloader呢","link":"#面试官插嘴-为什么不继承appclassloader呢","children":[{"level":3,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.77,"words":1132},"filePathRelative":"posts/Java/JavaJVM/java-jvm-classload-interview.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2><strong>面试官：请说说你理解的类加载器。</strong></h2>\\n<hr>\\n<p>我：通过一个类的<strong>全限定名来获取描述此类的二进制字节流</strong>这个动作放到<strong>Java虚拟机外部去实现</strong>，以便让应用程序<strong>自己决定</strong>如何去获取所需要的类。实现这个动作的代码模块称为**“类加载器”**。</p>\\n<h2><strong>面试官：说说有哪几种类加载器，他们的职责分别是什么，他们之前存在什么样的约定。</strong></h2>\\n<hr>\\n<p>我：emmmm，我在纸上边画边讲吧。</p>\\n<p>类加载的结构如下：</p>","autoDesc":true}');export{t as comp,d as data};
