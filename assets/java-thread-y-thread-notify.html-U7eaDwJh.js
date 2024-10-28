import{_ as a,c as n,a as i,o as l}from"./app-W9QyTiMU.js";const e={};function p(r,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="线程通信-等待通知wait-notify机制" tabindex="-1"><a class="header-anchor" href="#线程通信-等待通知wait-notify机制"><span>线程通信(等待通知wait/notify机制)</span></a></h1><h2 id="_1-等待-通知机制介绍" tabindex="-1"><a class="header-anchor" href="#_1-等待-通知机制介绍"><span>1. 等待/通知机制介绍</span></a></h2><h3 id="_1-1-不使用等待-通知机制-轮询" tabindex="-1"><a class="header-anchor" href="#_1-1-不使用等待-通知机制-轮询"><span>1.1 不使用等待/通知机制（轮询）</span></a></h3><p>当两个线程之间存在<strong>生产者和消费者关系</strong>，也就是说<strong>第一个线程（生产者）做相应的操作然后第二个线程（消费者）感知到了变化又进行相应的操作</strong></p><h4 id="_1-1-1-轮询方式案例" tabindex="-1"><a class="header-anchor" href="#_1-1-1-轮询方式案例"><span>1.1.1 轮询方式案例</span></a></h4><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;"> while</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(value</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;">desire){</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        doSomething</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span></code></pre></div><p>假设这个value值就是第一个线程操作的结果，doSomething()是第二个线程要做的事，当满足条件value=desire后才执行doSomething()。</p><h4 id="_1-1-2-轮询方式缺点" tabindex="-1"><a class="header-anchor" href="#_1-1-2-轮询方式缺点"><span>1.1.2 轮询方式缺点</span></a></h4><p>第二个语句不停过通过轮询机制来检测判断条件是否成立。如果<strong>轮询时间的间隔太小会浪费CPU资源，轮询时间的间隔太大，就可能取不到自己想要的数据</strong>。</p><p>所以这里就需要我们今天讲到的等待/通知（wait/notify）机制来解决这两个矛盾。</p><h3 id="_1-2-什么是等待-通知机制" tabindex="-1"><a class="header-anchor" href="#_1-2-什么是等待-通知机制"><span>1.2 什么是等待/通知机制</span></a></h3><h3 id="_1-2-1-等待-通知生活中的案例原型" tabindex="-1"><a class="header-anchor" href="#_1-2-1-等待-通知生活中的案例原型"><span>1.2.1 等待/通知生活中的案例原型</span></a></h3><p>等待/通知机制在我们生活中比比皆是，一个形象的例子就是厨师和服务员之间就存在等待/通知机制。</p><ol><li>厨师做完一道菜的时间是不确定的，所以菜到服务员手中的时间是不确定的；</li><li>服务员就需要去“等待（wait）”；</li><li>厨师把菜做完之后，按一下铃，这里的按铃就是“通知（nofity）”；</li><li>服务员听到铃声之后就知道菜做好了，他可以去端菜了。</li></ol><h3 id="_1-2-2-简介" tabindex="-1"><a class="header-anchor" href="#_1-2-2-简介"><span>1.2.2 简介</span></a></h3><p>等待/通知机制，是指一个线程A调用了对象O的wait()方法进入等待状态，而另一个线程B调用了对象O的notify()/notifyAll()方法，线程A收到通知后退出等待队列，进入可运行状态，进而执行后续操作。上诉两个线程通过对象O来完成交互，而对象上的<strong>wait()方法</strong>和<strong>notify()/notifyAll()方法</strong>的关系就如同开关信号一样，用来完成等待方和通知方之间的交互工作。</p><h3 id="_1-3-等待-通知机制的相关方法" tabindex="-1"><a class="header-anchor" href="#_1-3-等待-通知机制的相关方法"><span>1.3 等待/通知机制的相关方法</span></a></h3><table><thead><tr><th>方法名称</th><th>描述</th></tr></thead><tbody><tr><td>notify()</td><td>随机唤醒等待队列中等待<strong>同一共享资源的“一个线程”</strong>，并使该线程退出等待队列，进入可运行状态，也就是<strong>notify()方法仅通知“一个线程”</strong></td></tr><tr><td>notifyAll()</td><td>使所有正在等待队列中等待同一共享资源的 <strong>“全部线程”</strong> 退出等待队列，进入可运行状态。此时，优先级最高的那个线程最先执行，但也有可能是随机执行，这取决于JVM虚拟机的实现</td></tr><tr><td>wait()</td><td>使调用该方法的线程释放共享资源锁，然后从运行状态退出，进入等待队列，直到被再次唤醒</td></tr><tr><td>wait(long)</td><td>超时等待一段时间，这里的参数时间是毫秒，也就是等待长达n毫秒，如果没有通知就超时返回</td></tr><tr><td>wait(long，int)</td><td>对于超时时间更细力度的控制，可以达到纳秒</td></tr></tbody></table><h2 id="_2-等待-通知机制的实现" tabindex="-1"><a class="header-anchor" href="#_2-等待-通知机制的实现"><span>2. 等待/通知机制的实现</span></a></h2><h3 id="_2-1-实现案例" tabindex="-1"><a class="header-anchor" href="#_2-1-实现案例"><span>2.1 实现案例</span></a></h3><p>MyList.java</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> MyList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> list </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ArrayList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> add</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		list</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">add</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;anyString&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> size</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">		return</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> list</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">size</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>ThreadA.java</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ThreadA</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> extends</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> lock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	public</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> ThreadA</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Object</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> lock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		super</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">lock</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> lock;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> run</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">		try</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">			synchronized</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (lock) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">				if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">MyList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">size</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">					System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;wait begin &quot;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">							+</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">currentTimeMillis</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">					lock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">wait</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">					System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;wait end  &quot;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">							+</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">currentTimeMillis</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">				}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">			}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		} </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">InterruptedException</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">			e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">printStackTrace</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ThreadB.java</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ThreadB</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> extends</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> lock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	public</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> ThreadB</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Object</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> lock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		super</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">		this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">lock</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> lock;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> run</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">		try</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">			synchronized</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (lock) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">				for</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> i</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; i </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; i++) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">					MyList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">add</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">					if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">MyList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">size</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 5</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">						lock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">notify</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">						System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;已发出通知！&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">					}</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">					System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;添加了&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (i </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;个元素!&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">					Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sleep</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1000</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">				}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">			}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		} </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">InterruptedException</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">			e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">printStackTrace</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Run.java</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Run</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">		try</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">			Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> lock</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Object</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">			ThreadA</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> a</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> ThreadA</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(lock);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">			a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">start</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">			Thread</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sleep</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">50</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">			ThreadB</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> b</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> ThreadB</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(lock);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">			b</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">start</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		} </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">InterruptedException</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">			e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">printStackTrace</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>2019-09-21 00:48:52 JRebel:  </span></span>
<span class="line"><span>wait begin 1568998132460</span></span>
<span class="line"><span>添加了1个元素!</span></span>
<span class="line"><span>添加了2个元素!</span></span>
<span class="line"><span>添加了3个元素!</span></span>
<span class="line"><span>添加了4个元素!</span></span>
<span class="line"><span>已发出通知！</span></span>
<span class="line"><span>添加了5个元素!</span></span>
<span class="line"><span>添加了6个元素!</span></span>
<span class="line"><span>添加了7个元素!</span></span>
<span class="line"><span>添加了8个元素!</span></span>
<span class="line"><span>添加了9个元素!</span></span>
<span class="line"><span>添加了10个元素!</span></span>
<span class="line"><span>wait end  1568998142540</span></span></code></pre></div><h3 id="_2-2-synchronized关键字在线程通信中的作用" tabindex="-1"><a class="header-anchor" href="#_2-2-synchronized关键字在线程通信中的作用"><span>2.2 synchronized关键字在线程通信中的作用</span></a></h3><p><strong>synchronized关键字</strong>可以将任何一个<strong>Object对象作为同步对象</strong>看待，而<strong>java为每个Object 都实现了等待/通知（wait/notify）机制的相关方法</strong>，他们必须用synchronized关键字同步的Object的临界区内。</p><ul><li>通过调用wait()方法可以使处于临界区内的线程进入等待状态，同时释放被同步对象的锁</li><li>而notify()方法可以唤醒一个因调用wait操作而处于阻塞状态中的线程，使其进入就绪状态。</li><li>被重新唤醒的线程会视图重新获得临界区的控制权也就是锁，并继续执行wait方法之后的代码。如果发出notify操作时没有处于阻塞状态中的线程，那么该命令会被忽略。</li></ul><h2 id="_3-相关知识点" tabindex="-1"><a class="header-anchor" href="#_3-相关知识点"><span>3.相关知识点</span></a></h2><h3 id="_3-1-notify-锁不释放" tabindex="-1"><a class="header-anchor" href="#_3-1-notify-锁不释放"><span>3.1 notify()锁不释放</span></a></h3><p>当方法wait()被执行后，锁自动被释放，但执行玩notify()方法后，锁不会自动释放。<strong>必须执行完notify()方法所在的synchronized代码块</strong>后才释放。</p><h3 id="_3-2-thread-join" tabindex="-1"><a class="header-anchor" href="#_3-2-thread-join"><span>3.2 Thread.join()</span></a></h3><h4 id="_3-2-1-thread-join-使用背景" tabindex="-1"><a class="header-anchor" href="#_3-2-1-thread-join-使用背景"><span>3.2.1 Thread.join()使用背景</span></a></h4><p>在很多情况下，主线程生成并起动了子线程，如果子线程里要进行大量的耗时的运算，主线程往往将于子线程之前结束，但是如果主线程处理完其他的事务后，需要用到子线程的处理结果，也就是<strong>主线程需要等待子线程执行完成之后再结束，这个时候就要用到join()方法了。另外，一个线程需要等待另一个线程也需要用到join()方法。</strong></p><p>Thread类除了提供join()方法之外，还提供了join(long millis)、join(long millis, int nanos)两个具有超时特性的方法。这两个超时方法表示，如果线程thread在指定的超时时间没有终止，那么将会从该超时方法中返回。</p><h4 id="_3-2-2-子线程执行完主线程才退出" tabindex="-1"><a class="header-anchor" href="#_3-2-2-子线程执行完主线程才退出"><span>3.2.2 子线程执行完主线程才退出</span></a></h4><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>public class Test {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		MyThread threadTest = new MyThread();</span></span>
<span class="line"><span>		threadTest.start();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		//Thread.sleep(?);//因为不知道子线程要花的时间这里不知道填多少时间</span></span>
<span class="line"><span>		threadTest.join();</span></span>
<span class="line"><span>		System.out.println(&quot;我想当threadTest对象执行完毕后我再执行&quot;);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	static public class MyThread extends Thread {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		@Override</span></span>
<span class="line"><span>		public void run() {</span></span>
<span class="line"><span>			System.out.println(&quot;我想先执行&quot;);</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码仅仅加上了一句：threadTest.join();。在这里join方法的作用就是<strong>主线程需要等待子线程执行完成之后再结束</strong>。</p>`,43)]))}const o=a(e,[["render",p],["__file","java-thread-y-thread-notify.html.vue"]]),B=JSON.parse('{"path":"/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-thread-notify.html","title":"线程通信(等待通知wait/notify机制)","lang":"zh-CN","frontmatter":{"aliases":"线程通信(等待通知wait/notify机制)","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:48","updated":"2024-03-12 08:53","description":"线程通信(等待通知wait/notify机制) 1. 等待/通知机制介绍 1.1 不使用等待/通知机制（轮询） 当两个线程之间存在生产者和消费者关系，也就是说第一个线程（生产者）做相应的操作然后第二个线程（消费者）感知到了变化又进行相应的操作 1.1.1 轮询方式案例 假设这个value值就是第一个线程操作的结果，doSomething()是第二个线程...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-thread-notify.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"线程通信(等待通知wait/notify机制)"}],["meta",{"property":"og:description","content":"线程通信(等待通知wait/notify机制) 1. 等待/通知机制介绍 1.1 不使用等待/通知机制（轮询） 当两个线程之间存在生产者和消费者关系，也就是说第一个线程（生产者）做相应的操作然后第二个线程（消费者）感知到了变化又进行相应的操作 1.1.1 轮询方式案例 假设这个value值就是第一个线程操作的结果，doSomething()是第二个线程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线程通信(等待通知wait/notify机制)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 等待/通知机制介绍","slug":"_1-等待-通知机制介绍","link":"#_1-等待-通知机制介绍","children":[{"level":3,"title":"1.1 不使用等待/通知机制（轮询）","slug":"_1-1-不使用等待-通知机制-轮询","link":"#_1-1-不使用等待-通知机制-轮询","children":[]},{"level":3,"title":"1.2 什么是等待/通知机制","slug":"_1-2-什么是等待-通知机制","link":"#_1-2-什么是等待-通知机制","children":[]},{"level":3,"title":"1.2.1 等待/通知生活中的案例原型","slug":"_1-2-1-等待-通知生活中的案例原型","link":"#_1-2-1-等待-通知生活中的案例原型","children":[]},{"level":3,"title":"1.2.2 简介","slug":"_1-2-2-简介","link":"#_1-2-2-简介","children":[]},{"level":3,"title":"1.3 等待/通知机制的相关方法","slug":"_1-3-等待-通知机制的相关方法","link":"#_1-3-等待-通知机制的相关方法","children":[]}]},{"level":2,"title":"2. 等待/通知机制的实现","slug":"_2-等待-通知机制的实现","link":"#_2-等待-通知机制的实现","children":[{"level":3,"title":"2.1 实现案例","slug":"_2-1-实现案例","link":"#_2-1-实现案例","children":[]},{"level":3,"title":"2.2 synchronized关键字在线程通信中的作用","slug":"_2-2-synchronized关键字在线程通信中的作用","link":"#_2-2-synchronized关键字在线程通信中的作用","children":[]}]},{"level":2,"title":"3.相关知识点","slug":"_3-相关知识点","link":"#_3-相关知识点","children":[{"level":3,"title":"3.1 notify()锁不释放","slug":"_3-1-notify-锁不释放","link":"#_3-1-notify-锁不释放","children":[]},{"level":3,"title":"3.2 Thread.join()","slug":"_3-2-thread-join","link":"#_3-2-thread-join","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.7,"words":1709},"filePathRelative":"posts/Java/Java多线程/java-thread-y-thread-notify.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 等待/通知机制介绍</h2>\\n<h3>1.1 不使用等待/通知机制（轮询）</h3>\\n<p>当两个线程之间存在<strong>生产者和消费者关系</strong>，也就是说<strong>第一个线程（生产者）做相应的操作然后第二个线程（消费者）感知到了变化又进行相应的操作</strong></p>\\n<h4>1.1.1 轮询方式案例</h4>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> while</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">(value</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">desire){</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">        doSomething</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">()</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">    }</span></span></code></pre>\\n</div>","autoDesc":true}');export{o as comp,B as data};
