import{_ as s,c as l,a as n,o as i}from"./app-BOcQBfH9.js";const t={};function e(r,a){return i(),l("div",null,a[0]||(a[0]=[n(`<h1 id="java基础-java概述" tabindex="-1"><a class="header-anchor" href="#java基础-java概述"><span>Java基础 - Java概述</span></a></h1><h2 id="_1-1-java语言背景介绍-了解" tabindex="-1"><a class="header-anchor" href="#_1-1-java语言背景介绍-了解"><span>1.1 Java语言背景介绍（了解）</span></a></h2><p>语言：人与人交流沟通的表达方式</p><p>计算机语言：人与计算机之间进行信息交流沟通的一种特殊语言</p><p>Java语言是美国Sun公司（Stanford University Network）在1995年推出的计算机语言</p><p>Java之父：詹姆斯·高斯林（James Gosling）</p><p>2009年，Sun公司被甲骨文公司收购，所以我们现在访问oracle官网即可：<a href="https://www.oracle.com/" target="_blank" rel="noopener noreferrer">https://www.oracle.com</a></p><p>java语言的三个版本：</p><p>​ JavaSE: Java 语言的（标准版），用于桌面应用的开发，是其他两个版本的基础</p><p>​ JavaME: Java 语言的（小型版），用于嵌入式消费类电子设备</p><p>​ JavaEE: Java 语言的（企业版），用于 Web 方向的网站开发</p><h2 id="_1-2-java语言跨平台原理-理解" tabindex="-1"><a class="header-anchor" href="#_1-2-java语言跨平台原理-理解"><span>1.2 Java语言跨平台原理（理解）</span></a></h2><p>Java程序并非是直接运行的，Java编译器将Java源程序编译成与平台无关的字节码文件(class文件)，然后由Java虚拟机（JVM）对字节码文件解释执行。所以在不同的操作系统下，只需安装不同的Java虚拟机即可实现java程序的跨平台。</p><h2 id="_1-3-jre和jdk-记忆" tabindex="-1"><a class="header-anchor" href="#_1-3-jre和jdk-记忆"><span>1.3 JRE和JDK（记忆）</span></a></h2><p>JVM（Java Virtual Machine），Java虚拟机</p><p>JRE（Java Runtime Environment），Java运行环境，包含了JVM和Java的核心类库（Java API）</p><p>JDK（Java Development Kit）称为Java开发工具，包含了JRE和开发工具</p><p>总结：我们只需安装JDK即可，它包含了java的运行环境和虚拟机。</p><h2 id="_1-4-jdk的下载和安装-应用" tabindex="-1"><a class="header-anchor" href="#_1-4-jdk的下载和安装-应用"><span>1.4 JDK的下载和安装（应用）</span></a></h2><h3 id="_1-4-1-下载" tabindex="-1"><a class="header-anchor" href="#_1-4-1-下载"><span>1.4.1 下载</span></a></h3><p>通过官方网站获取JDK</p><p><a href="http://www.oracle.com/" target="_blank" rel="noopener noreferrer">http://www.oracle.com</a></p><p><strong>注意</strong>：针对不同的操作系统，需要下载对应版本的JDK。</p><h3 id="_1-4-2-安装" tabindex="-1"><a class="header-anchor" href="#_1-4-2-安装"><span>1.4.2 安装</span></a></h3><p>傻瓜式安装，下一步即可。但默认的安装路径是在C:\\Program Files下，为方便统一管理建议修改安装路径，将与开发相关的软件都安装到一个目录下，例如：E:\\develop。</p><p><strong>注意</strong>：安装路径不要包含中文或者空格等特殊字符（使用纯英文目录）。</p><h3 id="_1-4-3-jdk的安装目录介绍" tabindex="-1"><a class="header-anchor" href="#_1-4-3-jdk的安装目录介绍"><span>1.4.3 JDK的安装目录介绍</span></a></h3><table><thead><tr><th>目录名称</th><th>说明</th></tr></thead><tbody><tr><td>bin</td><td>该路径下存放了JDK的各种工具命令。javac和java就放在这个目录。</td></tr><tr><td>conf</td><td>该路径下存放了JDK的相关配置文件。</td></tr><tr><td>include</td><td>该路径下存放了一些平台特定的头文件。</td></tr><tr><td>jmods</td><td>该路径下存放了JDK的各种模块。</td></tr><tr><td>legal</td><td>该路径下存放了JDK各模块的授权文档。</td></tr><tr><td>lib</td><td>该路径下存放了JDK工具的一些补充JAR包。</td></tr></tbody></table><h1 id="_2-第一个演示程序" tabindex="-1"><a class="header-anchor" href="#_2-第一个演示程序"><span>2. 第一个演示程序</span></a></h1><h2 id="_2-1-常用dos命令-应用" tabindex="-1"><a class="header-anchor" href="#_2-1-常用dos命令-应用"><span>2.1 常用DOS命令（应用）</span></a></h2><p>在接触集成开发环境之前，我们需要使用命令行窗口对java程序进行编译和运行，所以需要知道一些常用DOS命令。</p><p>1、打开命令行窗口的方式：win + r打开运行窗口，输入cmd，回车。</p><p>2、常用命令及其作用</p><table><thead><tr><th>操作</th><th>说明</th></tr></thead><tbody><tr><td>盘符名称:</td><td>盘符切换。E:回车，表示切换到E盘。</td></tr><tr><td>dir</td><td>查看当前路径下的内容。</td></tr><tr><td>cd 目录</td><td>进入单级目录。cd itheima</td></tr><tr><td>cd ..</td><td>回退到上一级目录。</td></tr><tr><td>cd 目录1\\目录2...</td><td>进入多级目录。cd itheima\\JavaSE</td></tr><tr><td>cd \\</td><td>回退到盘符目录。</td></tr><tr><td>cls</td><td>清屏。</td></tr><tr><td>exit</td><td>退出命令提示符窗口。</td></tr></tbody></table><h2 id="_2-2-path环境变量的配置-应用" tabindex="-1"><a class="header-anchor" href="#_2-2-path环境变量的配置-应用"><span>2.2 Path环境变量的配置（应用）</span></a></h2><h3 id="_2-2-1-为什么配置环境变量" tabindex="-1"><a class="header-anchor" href="#_2-2-1-为什么配置环境变量"><span>2.2.1 为什么配置环境变量</span></a></h3><p>开发Java程序，需要使用JDK提供的开发工具（比如javac.exe、java.exe等命令），而这些工具在JDK的安装目录的bin目录下，如果不配置环境变量，那么这些命令只可以在该目录下执行。我们不可能把所有的java文件都放到JDK的bin目录下，所以配置环境变量的作用就是可以使bin目录下的java相关命令可以在任意目录下使用。</p><h2 id="_2-3-helloworld案例-应用" tabindex="-1"><a class="header-anchor" href="#_2-3-helloworld案例-应用"><span>2.3 HelloWorld案例（应用）</span></a></h2><p>HelloWorld案例是指在计算机屏幕上输出“HelloWorld”这行文字。</p><p>各种计算机语言都习惯使用该案例作为第一个演示案例。</p><h3 id="_2-3-1-java程序开发运行流程" tabindex="-1"><a class="header-anchor" href="#_2-3-1-java程序开发运行流程"><span>2.3.1 Java程序开发运行流程</span></a></h3><p>开发Java程序，需要三个步骤：编写程序，编译程序，运行程序。</p><h3 id="_2-3-2-helloworld案例的编写" tabindex="-1"><a class="header-anchor" href="#_2-3-2-helloworld案例的编写"><span>2.3.2 HelloWorld案例的编写</span></a></h3><p>1、新建文本文档文件，修改名称为HelloWorld.java。</p><p>2、用记事本打开HelloWorld.java文件，输写程序内容。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> HelloWorld</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;HelloWorld&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><blockquote><p>思考：这里的main函数中的String[] args 是干什么用的？</p><p>答案：在Java中，main方法是程序的入口点。它必须使用以下签名：public static void main(String[] args)。</p><p>其中，String[] args是一个数组，它包含从命令行传递给该程序的参数。在命令行中，您可以向Java程序传递参数，这些参数将被作为字符串数组传递到main方法中。</p><p>如果您不需要从命令行接收参数，则可以将args参数保留为空数组：public static void main(String[] args)，或者简写为public static void main(String... args)。但是，您仍然需要保留String[] args参数，因为Java规定了main方法的签名必须是这个样子。</p><p>要给 <code>String[] args</code> 传入值，您可以在运行配置中指定命令行参数。在 IntelliJ IDEA 中，您可以选择“Run”菜单中的“Edit Configurations”，然后在“Program arguments”字段中输入您想要传递的参数。然后，单击“OK”按钮并运行程序即可看到结果。</p></blockquote><h3 id="_2-3-3-helloworld案例的编译和运行" tabindex="-1"><a class="header-anchor" href="#_2-3-3-helloworld案例的编译和运行"><span>2.3.3 HelloWorld案例的编译和运行</span></a></h3><p>存文件，打开命令行窗口，将目录切换至java文件所在目录，编译java文件生成class文件，运行class文件。</p><blockquote><p>编译：javac 文件名.java</p><p>范例：javac HelloWorld.java</p><p>执行：java 类名</p><p>范例：java HelloWorld</p></blockquote><h2 id="_2-4-helloworld案例详解-理解" tabindex="-1"><a class="header-anchor" href="#_2-4-helloworld案例详解-理解"><span>2.4 HelloWorld案例详解（理解）</span></a></h2><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111121692.jpg" alt="图片1.jpg" tabindex="0" loading="lazy"><figcaption>图片1.jpg</figcaption></figure><h2 id="_2-5-helloworld案例常见问题-理解" tabindex="-1"><a class="header-anchor" href="#_2-5-helloworld案例常见问题-理解"><span>2.5 HelloWorld案例常见问题（理解）</span></a></h2><h3 id="_2-5-1-bug" tabindex="-1"><a class="header-anchor" href="#_2-5-1-bug"><span>2.5.1 BUG</span></a></h3><p>在电脑系统或程序中，隐藏着的一些未被发现的缺陷或问题统称为bug（漏洞）。</p><h3 id="_2-5-2-bug的解决" tabindex="-1"><a class="header-anchor" href="#_2-5-2-bug的解决"><span>2.5.2 BUG的解决</span></a></h3><p>1、具备识别BUG的能力：多看</p><p>2、具备分析BUG的能力：多思考，多查资料</p><p>3、具备解决BUG的能力：多尝试，多总结</p><h3 id="_2-5-3-helloworld案例常见问题" tabindex="-1"><a class="header-anchor" href="#_2-5-3-helloworld案例常见问题"><span>2.5.3 HelloWorld案例常见问题</span></a></h3><p>1、非法字符问题。Java中的符号都是英文格式的。</p><p>2、大小写问题。Java语言对大小写敏感（区分大小写）。</p><p>3、在系统中显示文件的扩展名，避免出现HelloWorld.java.txt文件。</p><p>4、编译命令后的java文件名需要带文件后缀.java</p><p>5、运行命令后的class文件名（类名）不带文件后缀</p><h1 id="_3-java基础语法" tabindex="-1"><a class="header-anchor" href="#_3-java基础语法"><span>3. java基础语法</span></a></h1><h2 id="_3-1-注释-理解" tabindex="-1"><a class="header-anchor" href="#_3-1-注释-理解"><span>3.1 注释（理解）</span></a></h2><p>注释是对代码的解释和说明文字，可以提高程序的可读性，因此在程序中添加必要的注释文字十分重要。Java中的注释分为三种：</p><p>单行注释。单行注释的格式是使用//，从//开始至本行结尾的文字将作为注释文字。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 这是单行注释文字</span></span></code></pre></div><p>多行注释。多行注释的格式是使用/* 和 */将一段较长的注释括起来。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/*</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">这是多行注释文字</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">这是多行注释文字</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">这是多行注释文字</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">*/</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">注意：多行注释不能嵌套使用。</span></span></code></pre></div><p>文档注释。文档注释以<code>/**</code>开始，以<code>*/</code>结束。（以后讲）</p><h2 id="_3-2-关键字-理解" tabindex="-1"><a class="header-anchor" href="#_3-2-关键字-理解"><span>3.2 关键字（理解）</span></a></h2><p>关键字是指被java语言赋予了特殊含义的单词。</p><p>关键字的特点：</p><p>​ 关键字的字母全部小写。</p><p>​ 常用的代码编辑器对关键字都有高亮显示，比如现在我们能看到的public、class、static等。</p><h2 id="_3-3-常量-应用" tabindex="-1"><a class="header-anchor" href="#_3-3-常量-应用"><span>3.3 常量（应用）</span></a></h2><p>常量：在程序运行过程中，其值不可以发生改变的量。</p><p>Java中的常量分类：</p><p>​ 字符串常量 用双引号括起来的多个字符（可以包含0个、一个或多个），例如&quot;a&quot;、&quot;abc&quot;、&quot;中国&quot;等</p><p>​ 整数常量 整数，例如：-10、0、88等</p><p>​ 小数常量 小数，例如：-5.5、1.0、88.88等</p><p>​ 字符常量 用单引号括起来的一个字符，例如：&#39;a&#39;、&#39;5&#39;、&#39;B&#39;、&#39;中&#39;等</p><p>​ 布尔常量 布尔值，表示真假，只有两个值true和false</p><p>​ 空常量 一个特殊的值，空值，值为null</p><p>除空常量外，其他常量均可使用输出语句直接输出。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Demo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 输出一个整数</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">5.5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 输出一个小数</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;a&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 输出一个字符</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 输出boolean值true</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;欢迎来到黑马程序员&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 输出字符串</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="_3-4-变量的介绍-理解" tabindex="-1"><a class="header-anchor" href="#_3-4-变量的介绍-理解"><span>3.4 变量的介绍(理解)</span></a></h2><p>变量的定义格式：</p><p>​ 数据类型 变量名 = 数据值；</p><p>​ 数据类型：为空间中存储的数据加入类型限制。整数？小数？</p><p>​ 变量名：自己要为空间起的名字，没有难度</p><p>​ 数据值： 空间中要存储的数值，没有难度</p><h2 id="_3-5-数据类型-应用" tabindex="-1"><a class="header-anchor" href="#_3-5-数据类型-应用"><span>3.5 数据类型（应用）</span></a></h2><h3 id="_3-5-1-计算机存储单元" tabindex="-1"><a class="header-anchor" href="#_3-5-1-计算机存储单元"><span>3.5.1 计算机存储单元</span></a></h3><p>我们知道计算机是可以用来存储数据的，但是无论是内存还是硬盘，计算机存储设备的最小信息单元叫“位（bit）”，我们又称之为“比特位”，通常用小写的字母”b”表示。而计算机中最基本的存储单元叫“字节（byte）”，</p><p>通常用大写字母”B”表示，字节是由连续的8个位组成。</p><p>除了字节外还有一些常用的存储单位，其换算单位如下：</p><p>1B（字节） = 8bit</p><p>1KB = 1024B</p><p>1MB = 1024KB</p><p>1GB = 1024MB</p><p>1TB = 1024GB</p><h3 id="_3-5-2-java中的数据类型" tabindex="-1"><a class="header-anchor" href="#_3-5-2-java中的数据类型"><span>3.5.2 Java中的数据类型</span></a></h3><p>Java是一个强类型语言，Java中的数据必须明确数据类型。在Java中的数据类型包括基本数据类型和引用数据类型两种。</p><p>Java中的基本数据类型：</p><table><thead><tr><th style="text-align:left;">数据类型</th><th>关键字</th><th>内存占用</th><th style="text-align:left;">取值范围</th></tr></thead><tbody><tr><td style="text-align:left;">整数类型</td><td>byte</td><td>1</td><td style="text-align:left;">-128~127</td></tr><tr><td style="text-align:left;"></td><td>short</td><td>2</td><td style="text-align:left;">-32768~32767</td></tr><tr><td style="text-align:left;"></td><td>int(默认)</td><td>4</td><td style="text-align:left;">-2的31次方到2的31次方-1</td></tr><tr><td style="text-align:left;"></td><td>long</td><td>8</td><td style="text-align:left;">-2的63次方到2的63次方-1</td></tr><tr><td style="text-align:left;">浮点类型</td><td>float</td><td>4</td><td style="text-align:left;">负数：-3.402823E+38到-1.401298E-45 正数： 1.401298E-45到3.402823E+38</td></tr><tr><td style="text-align:left;"></td><td>double(默认)</td><td>8</td><td style="text-align:left;">负数：-1.797693E+308到-4.9000000E-324 正数：4.9000000E-324 到1.797693E+308</td></tr><tr><td style="text-align:left;">字符类型</td><td>char</td><td>2</td><td style="text-align:left;">0-65535</td></tr><tr><td style="text-align:left;">布尔类型</td><td>boolean</td><td>1</td><td style="text-align:left;">true，false</td></tr></tbody></table><p>说明：</p><p>​ e+38表示是乘以10的38次方，同样，e-45表示乘以10的负45次方。</p><p>​ 在java中整数默认是int类型，浮点数默认是double类型。</p><h2 id="_3-6-变量-应用" tabindex="-1"><a class="header-anchor" href="#_3-6-变量-应用"><span>3.6 变量（应用）</span></a></h2><h3 id="_3-6-1-变量的定义" tabindex="-1"><a class="header-anchor" href="#_3-6-1-变量的定义"><span>3.6.1 变量的定义</span></a></h3><p>变量：在程序运行过程中，其值可以发生改变的量。</p><p>从本质上讲，变量是内存中的一小块区域，其值可以在一定范围内变化。</p><p>变量的定义格式：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">数据类型 变量名 </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> 初始化值</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 声明变量并赋值</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> age </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 18</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(age);</span></span></code></pre></div><p>或者(扩展)</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 先声明，后赋值（使用前赋值即可）</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">数据类型 变量名</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">变量名 </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> 初始化值</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">double</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> money</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">money </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 55.5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(money);</span></span></code></pre></div><p>还可以(扩展)</p><p>在同一行定义多个同一种数据类型的变量，中间使用逗号隔开。但不建议使用这种方式，降低程序的可读性。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> a </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> b </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 20</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 定义int类型的变量a和b，中间使用逗号隔开</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(a);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(b);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;">d</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 声明int类型的变量c和d，中间使用逗号隔开</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">c </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 30</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">d </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 40</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(c);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(d);</span></span></code></pre></div><h3 id="_3-6-2-变量的修改" tabindex="-1"><a class="header-anchor" href="#_3-6-2-变量的修改"><span>3.6.2 变量的修改</span></a></h3><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> a </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">a </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 30</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  //修改变量的值</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(a);</span></span></code></pre></div><p>变量前面不加数据类型时，表示修改已存在的变量的值。</p><h2 id="_3-7-变量的注意事项-理解" tabindex="-1"><a class="header-anchor" href="#_3-7-变量的注意事项-理解"><span>3.7 变量的注意事项(理解)</span></a></h2><ol><li>在同一对花括号中，变量名不能重复。</li><li>变量在使用之前，必须初始化（赋值）。</li><li>定义long类型的变量时，需要在整数的后面加L（大小写均可，建议大写）。因为整数默认是int类型，整数太大可能超出int范围。</li><li>定义float类型的变量时，需要在小数的后面加F（大小写均可，建议大写）。因为浮点数的默认类型是double， double的取值范围是大于float的，类型不兼容。</li></ol><h2 id="_3-8-键盘录入-理解" tabindex="-1"><a class="header-anchor" href="#_3-8-键盘录入-理解"><span>3.8 键盘录入（理解）</span></a></h2><p>我们可以通过 Scanner 类来获取用户的输入。使用步骤如下：</p><p>1、导包。Scanner 类在java.util包下，所以需要将该类导入。导包的语句需要定义在类的上面。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> java.util.Scanner</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>2、创建Scanner对象。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Scanner</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> sc </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Scanner</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">in</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 创建Scanner对象，sc表示变量名，其他均不可变</span></span></code></pre></div><p>3、接收数据</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> i </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> sc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">nextInt</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 表示将键盘录入的值作为int数返回。</span></span></code></pre></div><p>示例：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> java.util.Scanner</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ScannerDemo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //创建对象</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Scanner</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> sc</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Scanner</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">in</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //接收数据</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> a</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> sc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">nextInt</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //输出数据</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(a);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="_3-9-标识符-理解" tabindex="-1"><a class="header-anchor" href="#_3-9-标识符-理解"><span>3.9 标识符（理解）</span></a></h2><p>标识符是用户编程时使用的名字，用于给类、方法、变量、常量等命名。</p><p>Java中标识符的组成规则：</p><p>​ 由字母、数字、下划线“_”、美元符号“$”组成，第一个字符不能是数字。</p><p>​ 不能使用java中的关键字作为标识符。</p><p>​ 标识符对大小写敏感（区分大小写）。</p><p>Java中标识符的命名约定：</p><p>​ 小驼峰式命名：变量名、方法名</p><p>​ 首字母小写，从第二个单词开始每个单词的首字母大写。</p><p>​ 大驼峰式命名：类名</p><p>​ 每个单词的首字母都大写。</p><p>​ 另外，标识符的命名最好可以做到见名知意</p><p>​ 例如：username、studentNumber等。</p>`,151)]))}const o=s(t,[["render",e],["__file","day01-java基础语法.html.vue"]]),d=JSON.parse('{"path":"/posts/Java/Java%E5%9F%BA%E7%A1%80/day01-java%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.html","title":"Java基础 - Java概述","lang":"zh-CN","frontmatter":{"cssclass":null,"aliases":"Java基础 - Java概述","cssclasses":null,"source":null,"order":1,"category":"Java基础","tags":["Java","学习","基础"],"author":"MrJason","created":"2024-02-22 10:42","updated":"2024-05-22 15:57","description":"Java基础 - Java概述 1.1 Java语言背景介绍（了解） 语言：人与人交流沟通的表达方式 计算机语言：人与计算机之间进行信息交流沟通的一种特殊语言 Java语言是美国Sun公司（Stanford University Network）在1995年推出的计算机语言 Java之父：詹姆斯·高斯林（James Gosling） 2009年，Sun...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E5%9F%BA%E7%A1%80/day01-java%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Java基础 - Java概述"}],["meta",{"property":"og:description","content":"Java基础 - Java概述 1.1 Java语言背景介绍（了解） 语言：人与人交流沟通的表达方式 计算机语言：人与计算机之间进行信息交流沟通的一种特殊语言 Java语言是美国Sun公司（Stanford University Network）在1995年推出的计算机语言 Java之父：詹姆斯·高斯林（James Gosling） 2009年，Sun..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111121692.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"学习"}],["meta",{"property":"article:tag","content":"基础"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java基础 - Java概述\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111121692.jpg\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\"}]}"]]},"headers":[{"level":2,"title":"1.1 Java语言背景介绍（了解）","slug":"_1-1-java语言背景介绍-了解","link":"#_1-1-java语言背景介绍-了解","children":[]},{"level":2,"title":"1.2 Java语言跨平台原理（理解）","slug":"_1-2-java语言跨平台原理-理解","link":"#_1-2-java语言跨平台原理-理解","children":[]},{"level":2,"title":"1.3 JRE和JDK（记忆）","slug":"_1-3-jre和jdk-记忆","link":"#_1-3-jre和jdk-记忆","children":[]},{"level":2,"title":"1.4 JDK的下载和安装（应用）","slug":"_1-4-jdk的下载和安装-应用","link":"#_1-4-jdk的下载和安装-应用","children":[{"level":3,"title":"1.4.1 下载","slug":"_1-4-1-下载","link":"#_1-4-1-下载","children":[]},{"level":3,"title":"1.4.2 安装","slug":"_1-4-2-安装","link":"#_1-4-2-安装","children":[]},{"level":3,"title":"1.4.3 JDK的安装目录介绍","slug":"_1-4-3-jdk的安装目录介绍","link":"#_1-4-3-jdk的安装目录介绍","children":[]}]},{"level":2,"title":"2.1 常用DOS命令（应用）","slug":"_2-1-常用dos命令-应用","link":"#_2-1-常用dos命令-应用","children":[]},{"level":2,"title":"2.2 Path环境变量的配置（应用）","slug":"_2-2-path环境变量的配置-应用","link":"#_2-2-path环境变量的配置-应用","children":[{"level":3,"title":"2.2.1 为什么配置环境变量","slug":"_2-2-1-为什么配置环境变量","link":"#_2-2-1-为什么配置环境变量","children":[]}]},{"level":2,"title":"2.3 HelloWorld案例（应用）","slug":"_2-3-helloworld案例-应用","link":"#_2-3-helloworld案例-应用","children":[{"level":3,"title":"2.3.1 Java程序开发运行流程","slug":"_2-3-1-java程序开发运行流程","link":"#_2-3-1-java程序开发运行流程","children":[]},{"level":3,"title":"2.3.2 HelloWorld案例的编写","slug":"_2-3-2-helloworld案例的编写","link":"#_2-3-2-helloworld案例的编写","children":[]},{"level":3,"title":"2.3.3 HelloWorld案例的编译和运行","slug":"_2-3-3-helloworld案例的编译和运行","link":"#_2-3-3-helloworld案例的编译和运行","children":[]}]},{"level":2,"title":"2.4 HelloWorld案例详解（理解）","slug":"_2-4-helloworld案例详解-理解","link":"#_2-4-helloworld案例详解-理解","children":[]},{"level":2,"title":"2.5 HelloWorld案例常见问题（理解）","slug":"_2-5-helloworld案例常见问题-理解","link":"#_2-5-helloworld案例常见问题-理解","children":[{"level":3,"title":"2.5.1 BUG","slug":"_2-5-1-bug","link":"#_2-5-1-bug","children":[]},{"level":3,"title":"2.5.2 BUG的解决","slug":"_2-5-2-bug的解决","link":"#_2-5-2-bug的解决","children":[]},{"level":3,"title":"2.5.3 HelloWorld案例常见问题","slug":"_2-5-3-helloworld案例常见问题","link":"#_2-5-3-helloworld案例常见问题","children":[]}]},{"level":2,"title":"3.1 注释（理解）","slug":"_3-1-注释-理解","link":"#_3-1-注释-理解","children":[]},{"level":2,"title":"3.2 关键字（理解）","slug":"_3-2-关键字-理解","link":"#_3-2-关键字-理解","children":[]},{"level":2,"title":"3.3 常量（应用）","slug":"_3-3-常量-应用","link":"#_3-3-常量-应用","children":[]},{"level":2,"title":"3.4 变量的介绍(理解)","slug":"_3-4-变量的介绍-理解","link":"#_3-4-变量的介绍-理解","children":[]},{"level":2,"title":"3.5 数据类型（应用）","slug":"_3-5-数据类型-应用","link":"#_3-5-数据类型-应用","children":[{"level":3,"title":"3.5.1 计算机存储单元","slug":"_3-5-1-计算机存储单元","link":"#_3-5-1-计算机存储单元","children":[]},{"level":3,"title":"3.5.2 Java中的数据类型","slug":"_3-5-2-java中的数据类型","link":"#_3-5-2-java中的数据类型","children":[]}]},{"level":2,"title":"3.6 变量（应用）","slug":"_3-6-变量-应用","link":"#_3-6-变量-应用","children":[{"level":3,"title":"3.6.1 变量的定义","slug":"_3-6-1-变量的定义","link":"#_3-6-1-变量的定义","children":[]},{"level":3,"title":"3.6.2 变量的修改","slug":"_3-6-2-变量的修改","link":"#_3-6-2-变量的修改","children":[]}]},{"level":2,"title":"3.7 变量的注意事项(理解)","slug":"_3-7-变量的注意事项-理解","link":"#_3-7-变量的注意事项-理解","children":[]},{"level":2,"title":"3.8 键盘录入（理解）","slug":"_3-8-键盘录入-理解","link":"#_3-8-键盘录入-理解","children":[]},{"level":2,"title":"3.9 标识符（理解）","slug":"_3-9-标识符-理解","link":"#_3-9-标识符-理解","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":11.34,"words":3401},"filePathRelative":"posts/Java/Java基础/day01-java基础语法.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1.1 Java语言背景介绍（了解）</h2>\\n<p>语言：人与人交流沟通的表达方式</p>\\n<p>计算机语言：人与计算机之间进行信息交流沟通的一种特殊语言</p>\\n<p>Java语言是美国Sun公司（Stanford University Network）在1995年推出的计算机语言</p>\\n<p>Java之父：詹姆斯·高斯林（James Gosling）</p>\\n<p>2009年，Sun公司被甲骨文公司收购，所以我们现在访问oracle官网即可：<a href=\\"https://www.oracle.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.oracle.com</a></p>","copyright":{"author":"MrJason"},"autoDesc":true}');export{o as comp,d as data};
