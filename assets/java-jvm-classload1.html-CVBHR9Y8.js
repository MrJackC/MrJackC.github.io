import{_ as a,c as n,a as l,o as i}from"./app-CpAF2rca.js";const e={};function o(r,s){return i(),n("div",null,s[0]||(s[0]=[l(`<h1 id="类加载器" tabindex="-1"><a class="header-anchor" href="#类加载器"><span>类加载器</span></a></h1><h2 id="_1-回顾类加载过程" tabindex="-1"><a class="header-anchor" href="#_1-回顾类加载过程"><span>1. 回顾类加载过程</span></a></h2><p>类加载过程：<strong>加载-&gt;连接-&gt;初始化</strong>。连接过程由可以分成三步：<strong>验证-&gt;准备-&gt;解析</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120945757.png" alt="image-20190929170059337" tabindex="0" loading="lazy"><figcaption>image-20190929170059337</figcaption></figure><p>一个非数组类的加载阶段（加载阶段获取类的二进制字节流的动作）是可控最强的阶段，这一步我们可以去完成还可以自定义类加载器去控制字节流的获取方式（重写一个类加载器的 <code>loadClass()</code> 方法）。数组类型不通过类加载器创建，他由Java虚拟机直接创建</p><p>所有的类都是由类加载器加载，加载的作用就是将.class文件加载到内存</p><h2 id="_2-类加载器总结" tabindex="-1"><a class="header-anchor" href="#_2-类加载器总结"><span>2. 类加载器总结</span></a></h2><p>JVM中内置了三个重要的ClassLoader，除了BootstrapClassLoader 其他类加载器均有 Java 实现且全部继承自<code>java.lang.ClassLoader</code>：</p><ul><li><strong>BootstrapClassLoader(启动类加载器)</strong>：最顶层的加载类，由C++实现。负责加载<code>%JAVA_HOME%/lib</code>目录下的jar包和类或者或被 <code>-Xbootclasspath</code>参数指定的路径中的所有类。</li><li><strong>ExtClassLoader（扩展类加载器）</strong>：主要负责加载目录 <code>%JRE_HOME%/lib/ext</code> 目录下的jar包和类，或被 <code>java.ext.dirs</code> 系统变量所指定的路径下的jar包。</li><li><strong>AppClassLoader(应用程序类加载器)</strong> ：面向我们用户的加载器，负责加载当前应用classpath下的所有jar包和类</li></ul><h2 id="_3-双亲委派模型" tabindex="-1"><a class="header-anchor" href="#_3-双亲委派模型"><span>3. 双亲委派模型</span></a></h2><h3 id="_3-1-介绍" tabindex="-1"><a class="header-anchor" href="#_3-1-介绍"><span>3.1 介绍</span></a></h3><p>每一个类都有一个对应他的类加载器。系统中的ClassLoader 在协同工作的时候会默认使用 <strong>双亲委派模型</strong>。既在类加载的时候，系统会首先判断当前类是否被加载过。已经被加载的类会直接返回，否则才会尝试加载。加载的时候，首先会把该请求委派该父类加载器的 <code>loadClass()</code> 处理，因此所有的请求最终都应该传送到顶层的启动类加载器 <code>BootstrapClassLoader</code> 中。当父类加载器无法处理时，才由自己来处理。当父类加载器为null时，会使用启动类加载器 <code>BootstrapClassLoader</code> 作为父类加载器。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120945806.png" alt="image-20190929215241442" tabindex="0" loading="lazy"><figcaption>image-20190929215241442</figcaption></figure><p>每个类加载都有一个父类加载器，我们通过下面的程序来验证。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ClassLoaderDemo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;ClassLodarDemo&#39;s ClassLoader is &quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ClassLoaderDemo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getClassLoader</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;The Parent of ClassLodarDemo&#39;s ClassLoader is &quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ClassLoaderDemo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getClassLoader</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getParent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;The GrandParent of ClassLodarDemo&#39;s ClassLoader is &quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ClassLoaderDemo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getClassLoader</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getParent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getParent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>输出</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>ClassLodarDemo&#39;s ClassLoader is sun.misc.Launcher$AppClassLoader@18b4aac2</span></span>
<span class="line"><span>The Parent of ClassLodarDemo&#39;s ClassLoader is sun.misc.Launcher$ExtClassLoader@1b6d3586</span></span>
<span class="line"><span>The GrandParent of ClassLodarDemo&#39;s ClassLoader is null</span></span></code></pre></div><p><code>AppClassLoader</code>的父类加载器为<code>ExtClassLoader</code> <code>ExtClassLoader</code>的父类加载器为null，<strong>null并不代表ExtClassLoader没有父类加载器，而是 BootstrapClassLoader</strong> 。</p><p>其实这个双亲翻译的容易让别人误解，我们一般理解的双亲都是父母，这里的双亲更多地表达的是“父母这一辈”的人而已，并不是说真的有一个 Mother ClassLoader 和一个 Father ClassLoader 。另外，类加载器之间的“父子”关系也不是通过继承来体现的，是由“优先级”来决定。官方API文档对这部分的描述如下:</p><blockquote><p>The Java platform uses a delegation model for loading classes. <strong>The basic idea is that every class loader has a &quot;parent&quot; class loader.</strong> When loading a class, a class loader first &quot;delegates&quot; the search for the class to its parent class loader before attempting to find the class itself.</p></blockquote><h3 id="_3-2-双亲委派模型源码分析" tabindex="-1"><a class="header-anchor" href="#_3-2-双亲委派模型源码分析"><span>3.2 双亲委派模型源码分析</span></a></h3><p>双亲委派模型的实现代码非常简单，逻辑非常清晰，都集中在 <code>java.lang.ClassLoader</code> 的 <code>loadClass()</code> 中，相关代码如下所示。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> final</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ClassLoader</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> parent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">protected</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Class</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#C678DD;--shiki-dark:#C678DD;">?</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> loadClass</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> boolean</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> resolve)</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        throws </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ClassNotFoundException</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        synchronized</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getClassLoadingLock</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(name)) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // 首先，检查请求的类是否已经被加载过</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            Class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#C678DD;--shiki-dark:#C678DD;">?</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> findLoadedClass</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(name)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> t0 </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">nanoTime</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                try</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (parent </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//父加载器不为空，调用父加载器loadClass()方法处理</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                        c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> parent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">loadClass</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(name, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                    } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">else</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//父加载器为空，使用启动类加载器 BootstrapClassLoader 加载</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                        c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> findBootstrapClassOrNull</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(name)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ClassNotFoundException</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                   //抛出异常说明父类加载器无法完成加载请求</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                    long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> t1 </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">nanoTime</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                    //自己尝试加载</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                    c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> findClass</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(name)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                    // this is the defining class loader; record the stats</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    sun</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">misc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">PerfCounter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getParentDelegationTime</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">addTime</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(t1 </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> t0);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    sun</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">misc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">PerfCounter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getFindClassTime</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">addElapsedTimeFrom</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(t1);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    sun</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">misc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">PerfCounter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getFindClasses</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">increment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (resolve) {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">                resolveClass</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(c)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-双亲委派模型的好处" tabindex="-1"><a class="header-anchor" href="#_3-3-双亲委派模型的好处"><span>3.3 双亲委派模型的好处</span></a></h3><ul><li><p>双亲委派模型保证了Java程序的稳定运行，可以避免类的重复加载</p><p>（JVM 区分不同类的方式不仅仅根据类名，相同的类文件被不同的类加载器加载产生的是两个不同的类）</p></li><li><p>保证了 Java 的核心 API 不被篡改</p><p>如果没有使用双亲委派模型，而是每个类加载器加载自己的话就会出现一些问题，比如我们编写一个称为 <code>java.lang.Object</code> 类的话，那么程序运行的时候，系统就会出现多个不同的 <code>Object</code> 类。</p></li></ul><h2 id="_4-不使用双亲委派模型" tabindex="-1"><a class="header-anchor" href="#_4-不使用双亲委派模型"><span>4. 不使用双亲委派模型</span></a></h2><h3 id="如果我们不想用双亲委派模型怎么办" tabindex="-1"><a class="header-anchor" href="#如果我们不想用双亲委派模型怎么办"><span>如果我们不想用双亲委派模型怎么办？</span></a></h3><p>为了避免双亲委托机制，我们可以自己定义一个类加载器，然后重载 <code>loadClass()</code> 即可。</p><h2 id="_5-自定义类加载器" tabindex="-1"><a class="header-anchor" href="#_5-自定义类加载器"><span>5. 自定义类加载器</span></a></h2><p>除了 <code>BootstrapClassLoader</code> 其他类加载器均由 Java 实现且全部继承自<code>java.lang.ClassLoader</code>。如果我们要自定义自己的类加载器，很明显需要继承 <code>ClassLoader</code>。</p>`,30)]))}const t=a(e,[["render",o],["__file","java-jvm-classload1.html.vue"]]),d=JSON.parse('{"path":"/posts/Java/JavaJVM/java-jvm-classload1.html","title":"类加载器","lang":"zh-CN","frontmatter":{"aliases":"类加载器","tags":null,"cssclass":null,"source":null,"category":["Java","JVM"],"created":"2024-02-22 10:47","updated":"2024-03-12 09:45","description":"类加载器 1. 回顾类加载过程 类加载过程：加载->连接->初始化。连接过程由可以分成三步：验证->准备->解析 image-20190929170059337image-20190929170059337 一个非数组类的加载阶段（加载阶段获取类的二进制字节流的动作）是可控最强的阶段，这一步我们可以去完成还可以自定义类加载器去控制字节流的获取方式（重写...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/JavaJVM/java-jvm-classload1.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"类加载器"}],["meta",{"property":"og:description","content":"类加载器 1. 回顾类加载过程 类加载过程：加载->连接->初始化。连接过程由可以分成三步：验证->准备->解析 image-20190929170059337image-20190929170059337 一个非数组类的加载阶段（加载阶段获取类的二进制字节流的动作）是可控最强的阶段，这一步我们可以去完成还可以自定义类加载器去控制字节流的获取方式（重写..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120945757.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类加载器\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120945757.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120945806.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 回顾类加载过程","slug":"_1-回顾类加载过程","link":"#_1-回顾类加载过程","children":[]},{"level":2,"title":"2. 类加载器总结","slug":"_2-类加载器总结","link":"#_2-类加载器总结","children":[]},{"level":2,"title":"3. 双亲委派模型","slug":"_3-双亲委派模型","link":"#_3-双亲委派模型","children":[{"level":3,"title":"3.1 介绍","slug":"_3-1-介绍","link":"#_3-1-介绍","children":[]},{"level":3,"title":"3.2 双亲委派模型源码分析","slug":"_3-2-双亲委派模型源码分析","link":"#_3-2-双亲委派模型源码分析","children":[]},{"level":3,"title":"3.3 双亲委派模型的好处","slug":"_3-3-双亲委派模型的好处","link":"#_3-3-双亲委派模型的好处","children":[]}]},{"level":2,"title":"4. 不使用双亲委派模型","slug":"_4-不使用双亲委派模型","link":"#_4-不使用双亲委派模型","children":[{"level":3,"title":"如果我们不想用双亲委派模型怎么办？","slug":"如果我们不想用双亲委派模型怎么办","link":"#如果我们不想用双亲委派模型怎么办","children":[]}]},{"level":2,"title":"5. 自定义类加载器","slug":"_5-自定义类加载器","link":"#_5-自定义类加载器","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.39,"words":1317},"filePathRelative":"posts/Java/JavaJVM/java-jvm-classload1.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 回顾类加载过程</h2>\\n<p>类加载过程：<strong>加载-&gt;连接-&gt;初始化</strong>。连接过程由可以分成三步：<strong>验证-&gt;准备-&gt;解析</strong></p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120945757.png\\" alt=\\"image-20190929170059337\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20190929170059337</figcaption></figure>","autoDesc":true}');export{t as comp,d as data};