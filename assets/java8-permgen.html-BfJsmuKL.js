import{_ as a,c as n,a as e,o as i}from"./app-CZJgH_ea.js";const l={};function p(r,s){return i(),n("div",null,s[0]||(s[0]=[e(`<h1 id="java-8-移除jvm永久代permgen" tabindex="-1"><a class="header-anchor" href="#java-8-移除jvm永久代permgen"><span>Java 8 - 移除JVM永久代Permgen</span></a></h1><blockquote><p>很多开发者都在其系统中见过“java.lang.OutOfMemoryError: PermGen space”这一问题。这往往是由类加载器相关的内存泄漏以及新类加载器的创建导致的，通常出现于代码热部署时。相对于正式产品，该问题在开发机上出现的频率更高，在产品中最常见的“问题”是默认值太低了。常用的解决方法是将其设置为256MB或更高。</p></blockquote><h2 id="_1-permgen-space简单介绍" tabindex="-1"><a class="header-anchor" href="#_1-permgen-space简单介绍"><span>1. PermGen space简单介绍</span></a></h2><p>PermGen space的全称是Permanent Generation space,是指内存的永久保存区域，说说为什么会内存溢出: 这一部分用于存放Class和Meta的信息,Class在被 Load的时候被放入PermGen space区域，它和和存放Instance的Heap区域不同,所以如果你的APP会LOAD很多CLASS的话,就很可能出现PermGen space错误。这种错误常见在web服务器对JSP进行pre compile的时候。</p><p>JVM 种类有很多，比如 Oralce-Sun Hotspot, Oralce JRockit, IBM J9, Taobao JVM(淘宝好样的！)等等。当然武林盟主是Hotspot了，这个毫无争议。需要注意的是，PermGen space是Oracle-Sun Hotspot才有，JRockit以及J9是没有这个区域。</p><h2 id="_2-元空间-metaspace-一种新的内存空间诞生" tabindex="-1"><a class="header-anchor" href="#_2-元空间-metaspace-一种新的内存空间诞生"><span>2. 元空间(MetaSpace)一种新的内存空间诞生</span></a></h2><p>JDK8 HotSpot JVM 将移除永久区，使用本地内存来存储类元数据信息并称之为: 元空间(Metaspace)；这与Oracle JRockit 和IBM JVM’s很相似，如下图所示</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120941101.png" alt="image-20220818220125200" tabindex="0" loading="lazy"><figcaption>image-20220818220125200</figcaption></figure><p>这意味着不会再有java.lang.OutOfMemoryError: PermGen问题，也不再需要你进行调优及监控内存空间的使用……但请等等，这么说还为时过早。在默认情况下，这些改变是透明的，接下来我们的展示将使你知道仍然要关注类元数据内存的占用。请一定要牢记，这个新特性也不能神奇地消除类和类加载器导致的内存泄漏。</p><p>java8中metaspace总结如下:</p><ul><li>PermGen 空间的状况</li></ul><p>这部分内存空间将全部移除。</p><p>JVM的参数: PermSize 和 MaxPermSize 会被忽略并给出警告(如果在启用时设置了这两个参数)。</p><ul><li>Metaspace 内存分配模型</li></ul><p>大部分类元数据都在本地内存中分配。</p><p>用于描述类元数据的“klasses”已经被移除。</p><ul><li>Metaspace 容量</li></ul><p>默认情况下，类元数据只受可用的本地内存限制(容量取决于是32位或是64位操作系统的可用虚拟内存大小)。</p><p>新参数(MaxMetaspaceSize)用于限制本地内存分配给类元数据的大小。如果没有指定这个参数，元空间会在运行时根据需要动态调整。</p><ul><li>Metaspace 垃圾回收</li></ul><p>对于僵死的类及类加载器的垃圾回收将在元数据使用达到“MaxMetaspaceSize”参数的设定值时进行。</p><p>适时地监控和调整元空间对于减小垃圾回收频率和减少延时是很有必要的。持续的元空间垃圾回收说明，可能存在类、类加载器导致的内存泄漏或是大小设置不合适。</p><ul><li>Java 堆内存的影响</li></ul><p>一些杂项数据已经移到Java堆空间中。升级到JDK8之后，会发现Java堆 空间有所增长。</p><ul><li>Metaspace 监控</li></ul><p>元空间的使用情况可以从HotSpot1.8的详细GC日志输出中得到。</p><p>Jstat 和 JVisualVM两个工具，在使用b75版本进行测试时，已经更新了，但是还是能看到老的PermGen空间的出现。</p><p>前面已经从理论上充分说明，下面让我们通过“泄漏”程序进行新内存空间的观察……</p><h2 id="_3-permgen-vs-metaspace-运行时比较" tabindex="-1"><a class="header-anchor" href="#_3-permgen-vs-metaspace-运行时比较"><span>3. PermGen vs. Metaspace 运行时比较</span></a></h2><p>为了更好地理解Metaspace内存空间的运行时行为，</p><p>将进行以下几种场景的测试:</p><ul><li>使用JDK1.7运行Java程序，监控并耗尽默认设定的85MB大小的PermGen内存空间。</li><li>使用JDK1.8运行Java程序，监控新Metaspace内存空间的动态增长和垃圾回收过程。</li><li>使用JDK1.8运行Java程序，模拟耗尽通过“MaxMetaspaceSize”参数设定的128MB大小的Metaspace内存空间。</li></ul><p>首先建立了一个模拟PermGen OOM的代码</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ClassA</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> method</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // do nothing</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>上面是一个简单的ClassA，把他编译成class字节码放到D: /classes下面，测试代码中用URLClassLoader来加载此类型上面类编译成class</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 模拟PermGen OOM</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@author</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> benhail</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> OOMTest</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        try</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            //准备url</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            URL</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> url</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> File</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;D:/classes&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">toURI</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">toURL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            URL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;--shiki-dark:#E06C75;">urls</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {url};</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            //获取有关类型加载的JMX接口</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            ClassLoadingMXBean</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> loadingBean</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ManagementFactory</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getClassLoadingMXBean</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            //用于缓存类加载器</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ClassLoader</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#E06C75;--shiki-dark:#E06C75;">classLoaders</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ArrayList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ClassLoader</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;();</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            while</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                //加载类型并缓存类加载器实例</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                ClassLoader</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> classLoader</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> URLClassLoader</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(urls);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                classLoaders</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">add</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(classLoader);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                classLoader</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">loadClass</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;ClassA&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                //显示数量信息(共加载过的类型数目，当前还有效的类型数目，已经被卸载的类型数目)</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;total: &quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> loadingBean</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getTotalLoadedClassCount</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;active: &quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> loadingBean</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getLoadedClassCount</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;unloaded: &quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> loadingBean</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getUnloadedClassCount</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Exception</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">printStackTrace</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虚拟机器参数设置如下: -verbose -verbose:gc</p><p>设置-verbose参数是为了获取类型加载和卸载的信息</p><p>设置-verbose:gc是为了获取垃圾收集的相关信息</p><h3 id="_3-1-jdk-1-7-64-bit-–-permgen-耗尽测试" tabindex="-1"><a class="header-anchor" href="#_3-1-jdk-1-7-64-bit-–-permgen-耗尽测试"><span>3.1 JDK 1.7 @64-bit – PermGen 耗尽测试</span></a></h3><p>Java1.7的PermGen默认空间为85 MB(或者可以通过-XX:MaxPermSize=XXXm指定)</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120941180.png" alt="image-20220818221159680" tabindex="0" loading="lazy"><figcaption>image-20220818221159680</figcaption></figure><p>可以从上面的JVisualVM的截图看出: 当加载超过6万个类之后，PermGen被耗尽。我们也能通过程序和GC的输出观察耗尽的过程。</p><p>程序输出(摘取了部分)</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">......</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[Loaded ClassA from file:/D:/classes/]</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">total:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 64887</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">active:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 64887</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">unloaded:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[GC 245041K-</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">213978K(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">536768</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">K), </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0.0597188</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> secs]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[Full GC 213978K-</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">211425K(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">644992</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">K), </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0.6456638</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> secs]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[GC 211425K-</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">211425K(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">656448</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">K), </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0.0086696</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> secs]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[Full GC 211425K-</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">211411K(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">731008</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">K), </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0.6924754</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> secs]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[GC 211411K-</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">211411K(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">726528</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">K), </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0.0088992</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> secs]</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">...............</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">java.lang.OutOfMemoryError:</span><span style="color:#98C379;--shiki-dark:#98C379;"> PermGen</span><span style="color:#98C379;--shiki-dark:#98C379;"> space</span></span></code></pre></div><h3 id="_3-2-jdk-1-8-64-bit-–-metaspace大小动态调整测试" tabindex="-1"><a class="header-anchor" href="#_3-2-jdk-1-8-64-bit-–-metaspace大小动态调整测试"><span>3.2 JDK 1.8 @64-bit – Metaspace大小动态调整测试</span></a></h3><p>Java的Metaspace空间: 不受限制 (默认)</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120941206.png" alt="image-20220818221515514" tabindex="0" loading="lazy"><figcaption>image-20220818221515514</figcaption></figure><p>从上面的截图可以看到，JVM Metaspace进行了动态扩展，本地内存的使用由20MB增长到646MB，以满足程序中不断增长的类数据内存占用需求。我们也能观察到JVM的垃圾回收事件—试图销毁僵死的类或类加载器对象。但是，由于我们程序的泄漏，JVM别无选择只能动态扩展Metaspace内存空间。程序加载超过10万个类，而没有出现OOM事件。</p><h3 id="_3-3-jdk-1-8-64-bit-–-metaspace-受限测试" tabindex="-1"><a class="header-anchor" href="#_3-3-jdk-1-8-64-bit-–-metaspace-受限测试"><span>3.3 JDK 1.8 @64-bit – Metaspace 受限测试</span></a></h3><p>Java的Metaspace空间: 128MB(-XX:MaxMetaspaceSize=128m)</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120941245.png" alt="image-20220818221612558" tabindex="0" loading="lazy"><figcaption>image-20220818221612558</figcaption></figure><p>可以从上面的JVisualVM的截图看出: 当加载超过2万个类之后，Metaspace被耗尽；与JDK1.7运行时非常相似。我们也能通过程序和GC的输出观察耗尽的过程。另一个有趣的现象是，保留的原生内存占用量是设定的最大大小两倍之多。这可能表明，如果可能的话，可微调元空间容量大小策略，来避免本地内存的浪费。</p><p>从Java程序的输出中看到如下异常。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[Loaded ClassA from file:/D:/classes/]</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">total:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 21393</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">active:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 21393</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">unloaded:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[GC (</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Metadata</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> GC</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> Threshold</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 64306K-</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">57010K(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">111616</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">K), </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0.0145502</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> secs]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[Full GC (</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Metadata</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> GC</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> Threshold</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 57010K-</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">56810K(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">122368</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">K), </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0.1068084</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> secs]</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">java.lang.OutOfMemoryError:</span><span style="color:#98C379;--shiki-dark:#98C379;"> Metaspace</span></span></code></pre></div><p>在设置了MaxMetaspaceSize的情况下，该空间的内存仍然会耗尽，进而引发“java.lang.OutOfMemoryError: Metadata space”错误。因为类加载器的泄漏仍然存在，而通常Java又不希望无限制地消耗本机内存，因此设置一个类似于MaxPermSize的限制看起来也是合理的。</p><h2 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结"><span>4. 总结</span></a></h2><ul><li>之前不管是不是需要，JVM都会吃掉那块空间……如果设置得太小，JVM会死掉；如果设置得太大，这块内存就被JVM浪费了。理论上说，现在你完全可以不关注这个，因为JVM会在运行时自动调校为“合适的大小”；</li><li>提高Full GC的性能，在Full GC期间，Metadata到Metadata pointers之间不需要扫描了，别小看这几纳秒时间；</li><li>隐患就是如果程序存在内存泄露，像OOMTest那样，不停的扩展metaspace的空间，会导致机器的内存不足，所以还是要有必要的调试和监控。</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/java/java8/java8-permgen.html" target="_blank" rel="noopener noreferrer"><strong>Java 8 - 移除Permgen</strong></a></p>`,60)]))}const t=a(l,[["render",p],["__file","java8-permgen.html.vue"]]),B=JSON.parse(`{"path":"/posts/Java/Java8%E7%89%B9%E6%80%A7/java8-permgen.html","title":"Java 8 - 移除JVM永久代Permgen","lang":"zh-CN","frontmatter":{"aliases":"Java 8 - 移除JVM永久代Permgen, 'Java 8 - 移除JVM永久代Permgen'","tags":null,"cssclass":null,"source":null,"order":60,"category":["Java"],"created":"2024-02-22 10:48","updated":"2024-03-12 09:42","description":"Java 8 - 移除JVM永久代Permgen 很多开发者都在其系统中见过“java.lang.OutOfMemoryError: PermGen space”这一问题。这往往是由类加载器相关的内存泄漏以及新类加载器的创建导致的，通常出现于代码热部署时。相对于正式产品，该问题在开发机上出现的频率更高，在产品中最常见的“问题”是默认值太低了。常用的解决...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java8%E7%89%B9%E6%80%A7/java8-permgen.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Java 8 - 移除JVM永久代Permgen"}],["meta",{"property":"og:description","content":"Java 8 - 移除JVM永久代Permgen 很多开发者都在其系统中见过“java.lang.OutOfMemoryError: PermGen space”这一问题。这往往是由类加载器相关的内存泄漏以及新类加载器的创建导致的，通常出现于代码热部署时。相对于正式产品，该问题在开发机上出现的频率更高，在产品中最常见的“问题”是默认值太低了。常用的解决..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120941101.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 8 - 移除JVM永久代Permgen\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120941101.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120941180.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120941206.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120941245.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. PermGen space简单介绍","slug":"_1-permgen-space简单介绍","link":"#_1-permgen-space简单介绍","children":[]},{"level":2,"title":"2. 元空间(MetaSpace)一种新的内存空间诞生","slug":"_2-元空间-metaspace-一种新的内存空间诞生","link":"#_2-元空间-metaspace-一种新的内存空间诞生","children":[]},{"level":2,"title":"3. PermGen vs. Metaspace 运行时比较","slug":"_3-permgen-vs-metaspace-运行时比较","link":"#_3-permgen-vs-metaspace-运行时比较","children":[{"level":3,"title":"3.1 JDK 1.7 @64-bit – PermGen 耗尽测试","slug":"_3-1-jdk-1-7-64-bit-–-permgen-耗尽测试","link":"#_3-1-jdk-1-7-64-bit-–-permgen-耗尽测试","children":[]},{"level":3,"title":"3.2 JDK 1.8 @64-bit – Metaspace大小动态调整测试","slug":"_3-2-jdk-1-8-64-bit-–-metaspace大小动态调整测试","link":"#_3-2-jdk-1-8-64-bit-–-metaspace大小动态调整测试","children":[]},{"level":3,"title":"3.3 JDK 1.8 @64-bit – Metaspace 受限测试","slug":"_3-3-jdk-1-8-64-bit-–-metaspace-受限测试","link":"#_3-3-jdk-1-8-64-bit-–-metaspace-受限测试","children":[]}]},{"level":2,"title":"4. 总结","slug":"_4-总结","link":"#_4-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.99,"words":2097},"filePathRelative":"posts/Java/Java8特性/java8-permgen.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>很多开发者都在其系统中见过“java.lang.OutOfMemoryError: PermGen space”这一问题。这往往是由类加载器相关的内存泄漏以及新类加载器的创建导致的，通常出现于代码热部署时。相对于正式产品，该问题在开发机上出现的频率更高，在产品中最常见的“问题”是默认值太低了。常用的解决方法是将其设置为256MB或更高。</p>\\n</blockquote>\\n<h2>1. PermGen space简单介绍</h2>\\n<p>PermGen space的全称是Permanent Generation space,是指内存的永久保存区域，说说为什么会内存溢出: 这一部分用于存放Class和Meta的信息,Class在被 Load的时候被放入PermGen space区域，它和和存放Instance的Heap区域不同,所以如果你的APP会LOAD很多CLASS的话,就很可能出现PermGen space错误。这种错误常见在web服务器对JSP进行pre compile的时候。</p>","autoDesc":true}`);export{t as comp,B as data};
