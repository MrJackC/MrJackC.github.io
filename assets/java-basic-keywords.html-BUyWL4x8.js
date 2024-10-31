import{_ as a,c as i,a as n,o as l}from"./app-mWs04Xnh.js";const e={};function t(r,s){return l(),i("div",null,s[0]||(s[0]=[n(`<h1 id="final-static-this-super-关键字总结" tabindex="-1"><a class="header-anchor" href="#final-static-this-super-关键字总结"><span>final,static,this,super 关键字总结</span></a></h1><h2 id="_1-final-关键字" tabindex="-1"><a class="header-anchor" href="#_1-final-关键字"><span>1. final 关键字</span></a></h2><p>final 关键字主要用在三个地方：变量、方法、类</p><ol><li><p><strong>final 变量</strong></p><ul><li>如果是<strong>基本数据类型</strong>的变量，其<strong>数值一旦初始化之后便不能改变</strong></li><li>如果是<strong>引用类型</strong>的变量：则在对其初始化之后便**不能再让其指向另一个对象*</li></ul></li><li><p><strong>final 类</strong></p><p>表明这个类<strong>不能被继承</strong>，final 类中的<strong>所有成员方法都会被隐式得指定为final方法</strong></p></li><li><p><strong>final方法</strong></p><p>final修饰的成员方法<strong>不能被子类重写</strong></p></li></ol><h2 id="_2-static关键字" tabindex="-1"><a class="header-anchor" href="#_2-static关键字"><span>2. static关键字</span></a></h2><p>static 关键字主要有以下四种使用场景</p><ol><li><p>修饰成员变量和成员方法：</p><p>被static 修饰的成员属于类，不属于这个类的某个实例，被类中所有实例共享。可以并且建议通过类名调用。</p><p>被static 声明的成员变量属于静态成员变量，静态变量存在java 内存区域的方法区。</p><p>调用格式：类名.静态变量名 类名.静态方法名</p></li><li><p>静态代码块：</p><p>静态代码块定义在类中方法外，静态代码块在非静态代码块之前执行（静态代码块—》非静态代码—》构造方法）。该类不管创建多少对象，静态代码块只执行一次</p></li><li><p>静态内部类（static修饰类的话只能修饰内部类）：</p><p>静态内部类与非静态内部类之间存在一个最大区别：</p><ul><li>非静态内部类在编译完成之后会隐含得保存着一个引用，该引用是指向他的外围类</li><li>静态内部类，没有保存外部类引用</li></ul><p>没有这个引用意味着</p><ol><li>他的创建不需要依赖外围类的创建</li><li>他不能使用任何外围类的非static成员变量和方法</li></ol></li><li><p>静态导包（用来导入类中的静态资源，1.5 之后的新特性）</p><p>格式为：<code>import static</code> 这两个关键字连用可以指定导入某个类中的指定静态资源，并且不需要使用类名调用类中静态成员，可以直接使用类中静态成员变量和成员方法。</p></li></ol><h2 id="_3-this关键字" tabindex="-1"><a class="header-anchor" href="#_3-this关键字"><span>3. this关键字</span></a></h2><p>定义：java 中的this 关键字用于在方法中引用当前实例</p><h3 id="_3-1-this-的使用方法" tabindex="-1"><a class="header-anchor" href="#_3-1-this-的使用方法"><span>3.1 this 的使用方法</span></a></h3><ol><li><p>明确表示使用的成员变量（instance）而不是静态变量（static）或者局部变量（local）。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> javaFAQ</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> methodName</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> javaFAQ) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">javaFAQ</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> javaFAQ</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><p>this在这里代表成员变量（译者注：<code>this.javaFAQ</code>表示成员变量，<code>javaFAQ</code>表示局部变量）。在这个方法里，局部变量的优先级更高。因此，如果没有用<code>this.</code>表示的话则指定的是局部变量。在这个方法里面，如果局部变量的名字和成员变量的名字并不一样的话，那么用不用这个this其实就没有关系了。</p></li><li><p>this用来表示构造函数</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> JavaQuestions</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> javapapers) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    this</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(javapapers</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><p>这里使用this调用同一个类中的另一个包含两个参数的构造方法</p></li><li><p>用于将当前java实例作为参数传递</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">obj</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">itIsMe</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div></li><li><p>和上一个类似，this还可以用于返回当前java实例</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">CurrentClassName</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> startMethod</span><span style="color:#E06C75;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div></li><li><p>this也可以表示当前类的句柄</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>Class className = this.getClass(); // this methodology is preferable in java</span></span></code></pre></div><p>也可以通过 <code>Class className = ABC.class;</code>实现，这里的ABC指的是java类的类名。</p></li></ol><p>通常，java中的this都与他的实例相关联，不能在静态方法中使用。</p><h2 id="_4-super-关键字" tabindex="-1"><a class="header-anchor" href="#_4-super-关键字"><span>4. Super 关键字</span></a></h2><p>super关键字用于从子类访问父类的变量和方法</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Super</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    protected</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> number</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">     </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    protected</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> showNumber</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;number = &quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> number);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Sub</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> extends</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Super</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> bar</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        super</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">number</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        super</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">showNumber</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>在上面的例子中，Sub 类访问父类成员变量 number 并调用其其父类 Super 的 <code>showNumber（）</code> 方法。</p><p><strong>使用 this 和 super 要注意的问题：</strong></p><ul><li>在构造器中使用 <code>super（）</code> 调用父类中的其他构造方法时，该语句必须处于构造器的首行，否则编译器会报错。另外，this 调用本类中的其他构造方法时，也要放在首行。</li><li>this、super不能用在static方法中。</li></ul><p><strong>简单解释一下：</strong></p><p>被 static 修饰的成员属于类，不属于单个这个类的某个对象，被类中所有对象共享。而 this 代表对本类对象的引用，指向本类对象；而 super 代表对父类对象的引用，指向父类对象；所以， <strong>this和super是属于对象范畴的东西，而静态方法是属于类范畴的东西</strong>。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://gitee.com/SnailClimb/JavaGuide/blob/master/docs/java/Basis/final%E3%80%81static%E3%80%81this%E3%80%81super.md#finalstaticthissuper-%E5%85%B3%E9%94%AE%E5%AD%97%E6%80%BB%E7%BB%93" target="_blank" rel="noopener noreferrer">final,static,this,super 关键字总结</a></p>`,22)]))}const o=a(e,[["render",t],["__file","java-basic-keywords.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E5%9F%BA%E7%A1%80/java-basic-keywords.html","title":"final,static,this,super 关键字总结","lang":"zh-CN","frontmatter":{"aliases":"final,static,this,super 关键字总结","cssclass":null,"source":null,"order":120,"category":"Java基础","tags":["Java","学习","基础"],"author":"MrJason","created":"2024-02-22 10:42","updated":"2024-03-11 14:48","description":"final,static,this,super 关键字总结 1. final 关键字 final 关键字主要用在三个地方：变量、方法、类 final 变量 如果是基本数据类型的变量，其数值一旦初始化之后便不能改变 如果是引用类型的变量：则在对其初始化之后便**不能再让其指向另一个对象* final 类 表明这个类不能被继承，final 类中的所有成员方...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E5%9F%BA%E7%A1%80/java-basic-keywords.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"final,static,this,super 关键字总结"}],["meta",{"property":"og:description","content":"final,static,this,super 关键字总结 1. final 关键字 final 关键字主要用在三个地方：变量、方法、类 final 变量 如果是基本数据类型的变量，其数值一旦初始化之后便不能改变 如果是引用类型的变量：则在对其初始化之后便**不能再让其指向另一个对象* final 类 表明这个类不能被继承，final 类中的所有成员方..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"学习"}],["meta",{"property":"article:tag","content":"基础"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"final,static,this,super 关键字总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\"}]}"]]},"headers":[{"level":2,"title":"1. final 关键字","slug":"_1-final-关键字","link":"#_1-final-关键字","children":[]},{"level":2,"title":"2. static关键字","slug":"_2-static关键字","link":"#_2-static关键字","children":[]},{"level":2,"title":"3. this关键字","slug":"_3-this关键字","link":"#_3-this关键字","children":[{"level":3,"title":"3.1 this 的使用方法","slug":"_3-1-this-的使用方法","link":"#_3-1-this-的使用方法","children":[]}]},{"level":2,"title":"4. Super 关键字","slug":"_4-super-关键字","link":"#_4-super-关键字","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.16,"words":1249},"filePathRelative":"posts/Java/Java基础/java-basic-keywords.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. final 关键字</h2>\\n<p>final 关键字主要用在三个地方：变量、方法、类</p>\\n<ol>\\n<li>\\n<p><strong>final 变量</strong></p>\\n<ul>\\n<li>如果是<strong>基本数据类型</strong>的变量，其<strong>数值一旦初始化之后便不能改变</strong></li>\\n<li>如果是<strong>引用类型</strong>的变量：则在对其初始化之后便**不能再让其指向另一个对象*</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>final 类</strong></p>\\n<p>表明这个类<strong>不能被继承</strong>，final 类中的<strong>所有成员方法都会被隐式得指定为final方法</strong></p>\\n</li>\\n<li>\\n<p><strong>final方法</strong></p>\\n<p>final修饰的成员方法<strong>不能被子类重写</strong></p>\\n</li>\\n</ol>","copyright":{"author":"MrJason"},"autoDesc":true}');export{o as comp,c as data};
