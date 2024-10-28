import{_ as a,c as n,a as i,o as e}from"./app-DQS7qcOs.js";const l={};function p(r,s){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="spring-aop实现原理" tabindex="-1"><a class="header-anchor" href="#spring-aop实现原理"><span>Spring AOP实现原理</span></a></h1><h2 id="_1-代理模式" tabindex="-1"><a class="header-anchor" href="#_1-代理模式"><span>1. 代理模式</span></a></h2><p>代理模式UML 类图如下</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231722304.png" alt="image-20191011005747639" tabindex="0" loading="lazy"><figcaption>image-20191011005747639</figcaption></figure><blockquote><p>类图中虚线箭头表示接口实现</p><p>菱形和箭头表示组合</p></blockquote><p>代理类实现了被代理类的接口，同时与被代理类是组合关系。下面看一下代理模式的实现</p><h2 id="_2-静态代理" tabindex="-1"><a class="header-anchor" href="#_2-静态代理"><span>2. 静态代理</span></a></h2><p>接口类：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>interface Person {</span></span>
<span class="line"><span>    void speak();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>真实实体类：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>class Actor implements Person {</span></span>
<span class="line"><span>    private String content;</span></span>
<span class="line"><span>    public Actor(String content) {</span></span>
<span class="line"><span>        this.content = content;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void speak() {</span></span>
<span class="line"><span>        System.out.println(this.content);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>代理类：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>class Agent implements Person {</span></span>
<span class="line"><span>    private Actor actor;</span></span>
<span class="line"><span>    private String before;</span></span>
<span class="line"><span>    private String after;</span></span>
<span class="line"><span>    public Agent(Actor actor, String before, String after) {</span></span>
<span class="line"><span>        this.actor = actor;</span></span>
<span class="line"><span>        this.before = before;</span></span>
<span class="line"><span>        this.after = after;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void speak() {</span></span>
<span class="line"><span>        //before speak</span></span>
<span class="line"><span>        System.out.println(&quot;Before actor speak, Agent say: &quot; + before);</span></span>
<span class="line"><span>        //real speak</span></span>
<span class="line"><span>        this.actor.speak();</span></span>
<span class="line"><span>        //after speak</span></span>
<span class="line"><span>        System.out.println(&quot;After actor speak, Agent say: &quot; + after);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试方法:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>public class StaticProxy {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Actor actor = new Actor(&quot;I am a famous actor!&quot;);</span></span>
<span class="line"><span>        Agent agent = new Agent(actor, &quot;Hello I am an agent.&quot;, &quot;That&#39;s all!&quot;);</span></span>
<span class="line"><span>        agent.speak();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>结果：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231722350.png" alt="image-20191011010421666" tabindex="0" loading="lazy"><figcaption>image-20191011010421666</figcaption></figure><h2 id="_3-动态代理" tabindex="-1"><a class="header-anchor" href="#_3-动态代理"><span>3.动态代理</span></a></h2><h3 id="_3-1-jdk自带方法" tabindex="-1"><a class="header-anchor" href="#_3-1-jdk自带方法"><span>3.1 JDK自带方法</span></a></h3><h4 id="_3-1-1-invocationhandler接口" tabindex="-1"><a class="header-anchor" href="#_3-1-1-invocationhandler接口"><span>3.1.1 InvocationHandler接口</span></a></h4><p>InvocationHandler接口是最核心的接口</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>public interface InvocationHandler {</span></span>
<span class="line"><span>    public Object invoke(Object proxy, Method method, Object[] args)</span></span>
<span class="line"><span>        throws Throwable;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我们对于被代理的类的操作都会由该接口中的invoke方法实现，其中的参数的含义分别是：</p><ul><li>proxy：被代理的类的实例</li><li>method：调用被代理的类的方法</li><li>args：该方法需要的参数</li></ul><p><strong>使用方法</strong></p><p>使用方法首先是需要实现该接口，并且我们可以在invoke方法中调用被代理类的方法并获得返回值，自然也可以在调用该方法的前后去做一些额外的事情，从而实现动态代理</p><h4 id="_3-1-2-proxy类的newproxyinstance方法" tabindex="-1"><a class="header-anchor" href="#_3-1-2-proxy类的newproxyinstance方法"><span>3.1.2 Proxy类的newProxyInstance方法</span></a></h4><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>public static Object newProxyInstance(ClassLoader loader,</span></span>
<span class="line"><span>                                      Class&lt;?&gt;[] interfaces,</span></span>
<span class="line"><span>                                      InvocationHandler h)</span></span>
<span class="line"><span>    throws IllegalArgumentException</span></span></code></pre></div><p>其中的参数含义如下：</p><ul><li>loader：被代理的类的类加载器</li><li>interfaces：被代理类的接口数组</li><li>invocationHandler：就是刚刚介绍的调用处理器类的对象实例</li></ul><p>该方法会返回一个被修改过的类的实例，从而可以自由的调用该实例的方法。下面是一个实际例子。</p><h4 id="_3-1-3-jdk自动代理实际例子" tabindex="-1"><a class="header-anchor" href="#_3-1-3-jdk自动代理实际例子"><span>3.1.3 JDK自动代理实际例子</span></a></h4><p>Fruit接口：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>public interface Fruit {</span></span>
<span class="line"><span>    public void show();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Apple实现Fruit接口：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>public class Apple implements Fruit{</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void show() {</span></span>
<span class="line"><span>        System.out.println(&quot;&lt;&lt;&lt;&lt;show method is invoked&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>代理类Agent.java：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>public class DynamicAgent {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //实现InvocationHandler接口，并且可以初始化被代理类的对象</span></span>
<span class="line"><span>    static class MyHandler implements InvocationHandler {</span></span>
<span class="line"><span>        private Object proxy;</span></span>
<span class="line"><span>        public MyHandler(Object proxy) {</span></span>
<span class="line"><span>            this.proxy = proxy;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>        //自定义invoke方法</span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>        public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {</span></span>
<span class="line"><span>            System.out.println(&quot;&gt;&gt;&gt;&gt;before invoking&quot;);</span></span>
<span class="line"><span>            //真正调用方法的地方</span></span>
<span class="line"><span>            Object ret = method.invoke(this.proxy, args);</span></span>
<span class="line"><span>            System.out.println(&quot;&gt;&gt;&gt;&gt;after invoking&quot;);</span></span>
<span class="line"><span>            return ret;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //返回一个被修改过的对象</span></span>
<span class="line"><span>    public static Object agent(Class interfaceClazz, Object proxy) {</span></span>
<span class="line"><span>        return Proxy.newProxyInstance(interfaceClazz.getClassLoader(), new Class[]{interfaceClazz},</span></span>
<span class="line"><span>                new MyHandler(proxy));</span></span>
<span class="line"><span>    }    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>public class ReflectTest {</span></span>
<span class="line"><span>    public static void main(String[] args) throws InvocationTargetException, IllegalAccessException {</span></span>
<span class="line"><span>        //注意一定要返回接口，不能返回实现类否则会报错</span></span>
<span class="line"><span>        Fruit fruit = (Fruit) DynamicAgent.agent(Fruit.class, new Apple());</span></span>
<span class="line"><span>        fruit.show();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>结果：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231722389.png" alt="image-20191011011313856" tabindex="0" loading="lazy"><figcaption>image-20191011011313856</figcaption></figure><p>可以看到对于不同的实现类来说，可以用同一个动态代理类来进行代理，实现了“一次编写到处代理”的效果。但是这种方法有个缺点，就是被代理的类一定要是实现了某个接口的，这很大程度限制了本方法的使用场景。下面还有另外一个使用了CGlib增强库的方法。</p><h3 id="_3-2-cglib-库的方法" tabindex="-1"><a class="header-anchor" href="#_3-2-cglib-库的方法"><span>3.2 CGLIB 库的方法</span></a></h3><p><a href="https://github.com/cglib/cglib" target="_blank" rel="noopener noreferrer">CGlib</a>是一个字节码增强库，为AOP等提供了底层支持。下面看看它是怎么实现动态代理的。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> com.zszdevelop.aopdemo.case2.Apple</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> org.springframework.cglib.proxy.Enhancer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> org.springframework.cglib.proxy.MethodInterceptor</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> org.springframework.cglib.proxy.MethodProxy</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> java.lang.reflect.Method</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@author</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> zhangshengzhong</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * @date 2019/10/11</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> CGlibAgent</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> implements</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> MethodInterceptor</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> proxy</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Object</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getInstance</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Object</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> proxy</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">proxy</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> proxy;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Enhancer</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> enhancer</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Enhancer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        enhancer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setSuperclass</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">proxy</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getClass</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 回调方法</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        enhancer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setCallback</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 创建代理对象</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> enhancer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">create</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //回调方法</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Object</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> intercept</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Object</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> o</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Method</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> method</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Object</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">objects</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">MethodProxy</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> methodProxy</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> throws</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Throwable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&gt;&gt;&gt;&gt;before invoking&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //真正调用</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ret</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> methodProxy</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">invokeSuper</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(o, objects);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&gt;&gt;&gt;&gt;after invoking&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ret;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        CGlibAgent</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> cGlibAgent</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> CGlibAgent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Apple</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> apple</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (Apple) </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">cGlibAgent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getInstance</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Apple</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        apple</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">show</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231722428.png" alt="image-20191011011509222" tabindex="0" loading="lazy"><figcaption>image-20191011011509222</figcaption></figure><p>可以看到结果和JDK动态代理是一样的，但是可以直接对实现类进行操作而非接口，这样会有很大的便利。</p><h3 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h3><p><a href="https://www.cnblogs.com/puyangsky/p/6218925.html" target="_blank" rel="noopener noreferrer">Spring AOP实现原理</a>spring/aop/SpringAOP实现原理.md</p>`,50)]))}const o=a(l,[["render",p],["__file","spring-y-aop-impl.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-aop-impl.html","title":"Spring AOP实现原理","lang":"zh-CN","frontmatter":{"aliases":"Spring AOP实现原理","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:50","updated":"2024-10-11 16:46","description":"Spring AOP实现原理 1. 代理模式 代理模式UML 类图如下 image-20191011005747639image-20191011005747639 类图中虚线箭头表示接口实现 菱形和箭头表示组合 代理类实现了被代理类的接口，同时与被代理类是组合关系。下面看一下代理模式的实现 2. 静态代理 接口类： 真实实体类： 代理类： 测试方法:...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E6%A1%86%E6%9E%B6/Spring/spring-y-aop-impl.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Spring AOP实现原理"}],["meta",{"property":"og:description","content":"Spring AOP实现原理 1. 代理模式 代理模式UML 类图如下 image-20191011005747639image-20191011005747639 类图中虚线箭头表示接口实现 菱形和箭头表示组合 代理类实现了被代理类的接口，同时与被代理类是组合关系。下面看一下代理模式的实现 2. 静态代理 接口类： 真实实体类： 代理类： 测试方法:..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231722304.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring AOP实现原理\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231722304.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231722350.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231722389.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231722428.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 代理模式","slug":"_1-代理模式","link":"#_1-代理模式","children":[]},{"level":2,"title":"2. 静态代理","slug":"_2-静态代理","link":"#_2-静态代理","children":[]},{"level":2,"title":"3.动态代理","slug":"_3-动态代理","link":"#_3-动态代理","children":[{"level":3,"title":"3.1 JDK自带方法","slug":"_3-1-jdk自带方法","link":"#_3-1-jdk自带方法","children":[]},{"level":3,"title":"3.2 CGLIB 库的方法","slug":"_3-2-cglib-库的方法","link":"#_3-2-cglib-库的方法","children":[]},{"level":3,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.5,"words":1051},"filePathRelative":"posts/Java/Java框架/Spring/spring-y-aop-impl.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 代理模式</h2>\\n<p>代理模式UML 类图如下</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231722304.png\\" alt=\\"image-20191011005747639\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20191011005747639</figcaption></figure>\\n<blockquote>\\n<p>类图中虚线箭头表示接口实现</p>\\n<p>菱形和箭头表示组合</p>\\n</blockquote>","autoDesc":true}');export{o as comp,c as data};
