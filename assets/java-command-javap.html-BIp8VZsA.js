import{_ as a,c as n,a as i,o as l}from"./app-4x2aIoqi.js";const p={};function e(o,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="java反编译命令-javap" tabindex="-1"><a class="header-anchor" href="#java反编译命令-javap"><span>Java反编译命令-javap</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>javap是jdk自带的一个工具，可以对代码 反编译 ，也可以查看java编译器生成的字节码。</p><p><strong>javap命令分解一个class文件</strong>，它根据options来决定到底输出什么。如果没有使用options,那么javap将会输出包，类里的protected和public域以及类里的所有方法。<code>javap</code>将会把它们输出在标准输出上。</p><blockquote><p>一般情况下，很少有人使用javap对class文件进行反编译，因为有很多成熟的反编译工具可以使用，比如jad。但是，javap还可以查看java编译器为我们生成的字节码。通过它，可以对照源代码和字节码，从而了解很多编译器内部的工作。</p></blockquote><h2 id="_2-实例" tabindex="-1"><a class="header-anchor" href="#_2-实例"><span>2. 实例</span></a></h2><p>来看这个例子，先编译(<code>javac</code>)下面这个类。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> SynchronizedTest</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> synchronized</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> doSth</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Hello World&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> doSth1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        synchronized</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">SynchronizedTest</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Hello World&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="_2-1-编译-javac" tabindex="-1"><a class="header-anchor" href="#_2-1-编译-javac"><span>2.1 编译 javac</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>javac SynchronizedTest.java</span></span></code></pre></div><p>我们可以看到编译出来的class 代码我们是无法直接阅读的二进制文件</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111506246.png" alt="image-20220519170413379" tabindex="0" loading="lazy"><figcaption>image-20220519170413379</figcaption></figure><h3 id="_2-2-反编译javap" tabindex="-1"><a class="header-anchor" href="#_2-2-反编译javap"><span>2.2 反编译javap</span></a></h3><p>我们先来使用 Javap 来反编译以上代码</p><h4 id="_2-2-1-不加参数情况" tabindex="-1"><a class="header-anchor" href="#_2-2-1-不加参数情况"><span>2.2.1 不加参数情况</span></a></h4><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>javap SynchronizedTest</span></span></code></pre></div><p>编译结果</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>Compiled from &quot;SynchronizedTest.java&quot;</span></span>
<span class="line"><span>public class SynchronizedTest {</span></span>
<span class="line"><span>  public SynchronizedTest();</span></span>
<span class="line"><span>  public synchronized void doSth();</span></span>
<span class="line"><span>  public void doSth1();</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_2-2-2-c-参数" tabindex="-1"><a class="header-anchor" href="#_2-2-2-c-参数"><span>2.2.2 -c 参数</span></a></h4><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>javap -c SynchronizedTest</span></span></code></pre></div><p>编译出的结果</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Compiled</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> from </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;SynchronizedTest.java&quot;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> SynchronizedTest</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  public</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> SynchronizedTest</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    Code</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       0</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> aload_0</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       1</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> invokespecial #</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  // Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       4</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> return</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> synchronized</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> doSth</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    Code</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       0</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> get</span><span style="color:#C678DD;--shiki-dark:#C678DD;">static</span><span style="color:#E06C75;--shiki-dark:#E06C75;">     #</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  // Field java/lang/System.out:Ljava/io/PrintStream;</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       3</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ldc           #</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  // String Hello World</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       5</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> invokevirtual #</span><span style="color:#D19A66;--shiki-dark:#D19A66;">4</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  // Method java/io/PrintStream.println:(Ljava/lang/String;)V</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       8</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> return</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> doSth1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    Code</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       0</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ldc           #</span><span style="color:#D19A66;--shiki-dark:#D19A66;">5</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  // class SynchronizedTest</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       2</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> dup</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       3</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> astore_1</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       4</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> monitorenter</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       5</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> get</span><span style="color:#C678DD;--shiki-dark:#C678DD;">static</span><span style="color:#E06C75;--shiki-dark:#E06C75;">     #</span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  // Field java/lang/System.out:Ljava/io/PrintStream;</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">       8</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ldc           #</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  // String Hello World</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      10</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> invokevirtual #</span><span style="color:#D19A66;--shiki-dark:#D19A66;">4</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  // Method java/io/PrintStream.println:(Ljava/lang/String;)V</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      13</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> aload_1</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      14</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> monitorexit</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      15</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> goto</span><span style="color:#D19A66;--shiki-dark:#D19A66;">          23</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      18</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> astore_2</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      19</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> aload_1</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      20</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> monitorexit</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      21</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> aload_2</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      22</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> athrow</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      23</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> return</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    Exception</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> table</span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">       from    to  target type</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">           5</span><span style="color:#D19A66;--shiki-dark:#D19A66;">    15</span><span style="color:#D19A66;--shiki-dark:#D19A66;">    18</span><span style="color:#E06C75;--shiki-dark:#E06C75;">   any</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">          18</span><span style="color:#D19A66;--shiki-dark:#D19A66;">    21</span><span style="color:#D19A66;--shiki-dark:#D19A66;">    18</span><span style="color:#E06C75;--shiki-dark:#E06C75;">   any</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-用法摘要" tabindex="-1"><a class="header-anchor" href="#_3-用法摘要"><span>3. 用法摘要</span></a></h2><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">-help</span><span style="color:#98C379;--shiki-dark:#98C379;"> 帮助</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">-l</span><span style="color:#98C379;--shiki-dark:#98C379;"> 输出行和变量的表</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">-public</span><span style="color:#98C379;--shiki-dark:#98C379;"> 只输出public方法和域</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">-protected</span><span style="color:#98C379;--shiki-dark:#98C379;"> 只输出public和protected类和成员</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">-package</span><span style="color:#98C379;--shiki-dark:#98C379;"> 只输出包，public和protected类和成员，这是默认的</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">-p</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -private</span><span style="color:#98C379;--shiki-dark:#98C379;"> 输出所有类和成员</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">-s</span><span style="color:#98C379;--shiki-dark:#98C379;"> 输出内部类型签名</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">-c</span><span style="color:#98C379;--shiki-dark:#98C379;"> 输出分解后的代码，例如，类中每一个方法内，包含java字节码的指令，</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">-verbose</span><span style="color:#98C379;--shiki-dark:#98C379;"> 输出栈大小，方法参数的个数</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">-constants</span><span style="color:#98C379;--shiki-dark:#98C379;"> 输出静态final常量</span></span></code></pre></div><h2 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结"><span>4. 总结</span></a></h2><p>javap可以用于反编译和查看编译器编译后的字节码。平时一般用<code>javap -c</code>比较多，该命令用于列出每个方法所执行的JVM指令，并显示每个方法的字节码的实际作用。可以通过字节码和源代码的对比，深入分析java的编译原理，了解和解决各种Java原理级别的问题。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.hollischuang.com/archives/1107" target="_blank" rel="noopener noreferrer">Java命令学习系列（七）——javap</a></p>`,28)]))}const t=a(p,[["render",e],["__file","java-command-javap.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E7%BC%96%E8%AF%91/java-command-javap.html","title":"Java反编译命令-javap","lang":"zh-CN","frontmatter":{"aliases":"Java反编译命令-javap","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:48","updated":"2024-03-11 15:06","description":"Java反编译命令-javap 1. 简介 javap是jdk自带的一个工具，可以对代码 反编译 ，也可以查看java编译器生成的字节码。 javap命令分解一个class文件，它根据options来决定到底输出什么。如果没有使用options,那么javap将会输出包，类里的protected和public域以及类里的所有方法。javap将会把它们输...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E7%BC%96%E8%AF%91/java-command-javap.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Java反编译命令-javap"}],["meta",{"property":"og:description","content":"Java反编译命令-javap 1. 简介 javap是jdk自带的一个工具，可以对代码 反编译 ，也可以查看java编译器生成的字节码。 javap命令分解一个class文件，它根据options来决定到底输出什么。如果没有使用options,那么javap将会输出包，类里的protected和public域以及类里的所有方法。javap将会把它们输..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111506246.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java反编译命令-javap\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111506246.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 实例","slug":"_2-实例","link":"#_2-实例","children":[{"level":3,"title":"2.1 编译 javac","slug":"_2-1-编译-javac","link":"#_2-1-编译-javac","children":[]},{"level":3,"title":"2.2 反编译javap","slug":"_2-2-反编译javap","link":"#_2-2-反编译javap","children":[]}]},{"level":2,"title":"3. 用法摘要","slug":"_3-用法摘要","link":"#_3-用法摘要","children":[]},{"level":2,"title":"4. 总结","slug":"_4-总结","link":"#_4-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.43,"words":728},"filePathRelative":"posts/Java/Java编译/java-command-javap.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>javap是jdk自带的一个工具，可以对代码 反编译 ，也可以查看java编译器生成的字节码。</p>\\n<p><strong>javap命令分解一个class文件</strong>，它根据options来决定到底输出什么。如果没有使用options,那么javap将会输出包，类里的protected和public域以及类里的所有方法。<code>javap</code>将会把它们输出在标准输出上。</p>\\n<blockquote>\\n<p>一般情况下，很少有人使用javap对class文件进行反编译，因为有很多成熟的反编译工具可以使用，比如jad。但是，javap还可以查看java编译器为我们生成的字节码。通过它，可以对照源代码和字节码，从而了解很多编译器内部的工作。</p>\\n</blockquote>","autoDesc":true}');export{t as comp,c as data};
