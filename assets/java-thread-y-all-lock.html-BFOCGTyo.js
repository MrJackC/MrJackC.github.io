import{_ as s,c as n,a as e,o as i}from"./app-CpAF2rca.js";const t={};function l(r,a){return i(),n("div",null,a[0]||(a[0]=[e(`<h1 id="java并发-java中所有的锁" tabindex="-1"><a class="header-anchor" href="#java并发-java中所有的锁"><span>Java并发 - Java中所有的锁</span></a></h1><h2 id="_0-简介" tabindex="-1"><a class="header-anchor" href="#_0-简介"><span>0. 简介</span></a></h2><p>Java提供了种类丰富的锁，每种锁因其特性的不同，在适当的场景下能够展现出非常高的效率。本文旨在对锁相关源码（本文中的源码来自JDK 8和Netty 3.10.6）、使用场景进行举例，为读者介绍主流锁的知识点，以及不同的锁的适用场景。</p><p>Java中往往是按照是否含有某一特性来定义锁，我们通过特性将锁进行分组归类，再使用对比的方式进行介绍，帮助大家更快捷的理解相关知识。下面给出本文内容的总体分类目录：</p><blockquote></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841164.png" alt="image-20220525212721156" tabindex="0" loading="lazy"><figcaption>image-20220525212721156</figcaption></figure><h2 id="_1-乐观锁-vs-悲观锁" tabindex="-1"><a class="header-anchor" href="#_1-乐观锁-vs-悲观锁"><span>1. 乐观锁 VS 悲观锁</span></a></h2><blockquote><p>乐观锁与悲观锁是一种广义上的概念，体现了看待线程同步的不同角度。在Java和数据库中都有此概念对应的实际应用。</p></blockquote><p>先说概念。对于同一个数据的并发操作，悲观锁认为自己在使用数据的时候一定有别的线程来修改数据，因此在获取数据的时候会先加锁，确保数据不会被别的线程修改。Java中，synchronized关键字和Lock的实现类都是悲观锁。</p><p>而乐观锁认为自己在使用数据时不会有别的线程修改数据，所以不会添加锁，只是在更新数据的时候去判断之前有没有别的线程更新了这个数据。如果这个数据没有被更新，当前线程将自己修改的数据成功写入。如果数据已经被其他线程更新，则根据不同的实现方式执行不同的操作（例如报错或者自动重试）。</p><p>乐观锁在Java中是通过使用无锁编程来实现，最常采用的是CAS算法，Java原子类中的递增操作就通过CAS自旋实现的。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841198.png" alt="image-20220525212947017" tabindex="0" loading="lazy"><figcaption>image-20220525212947017</figcaption></figure><p>根据从上面的概念描述我们可以发现：</p><ul><li><strong>悲观锁适合写操作多的场景</strong>，先加锁可以保证写操作时数据正确。</li><li><strong>乐观锁适合读操作多的场景</strong>，不加锁的特点能够使其读操作的性能大幅提升。</li></ul><p>光说概念有些抽象，我们来看下乐观锁和悲观锁的调用方式示例：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// ------------------------- 悲观锁的调用方式 -------------------------</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// synchronized</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> synchronized</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> testMethod</span><span style="color:#E06C75;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	// 操作同步资源</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// ReentrantLock</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ReentrantLock</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> lock </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> ReentrantLock</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 需要保证多个线程使用的是同一个锁</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> modifyPublicResources</span><span style="color:#E06C75;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">	lock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">lock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	// 操作同步资源</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">	lock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">unlock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// ------------------------- 乐观锁的调用方式 -------------------------</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> AtomicInteger</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> atomicInteger </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> AtomicInteger</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 需要保证多个线程使用的是同一个AtomicInteger</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">atomicInteger</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">incrementAndGet</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //执行自增1</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过调用方式示例，我们可以发现悲观锁基本都是在显式的锁定之后再操作同步资源，而乐观锁则直接去操作同步资源。</p><h2 id="_2-自旋锁-vs-适应性自旋锁" tabindex="-1"><a class="header-anchor" href="#_2-自旋锁-vs-适应性自旋锁"><span>2. 自旋锁 VS 适应性自旋锁</span></a></h2><blockquote><p>在介绍自旋锁前，我们需要介绍一些前提知识来帮助大家明白自旋锁的概念。</p></blockquote><p><strong>阻塞或唤醒一个Java线程需要操作系统切换CPU状态来完成</strong>，这种状态转换需要耗费处理器时间。如果同步代码块中的内容过于简单，状态转换消耗的时间有可能比用户代码执行的时间还要长。</p><p>在许多场景中，同步资源的锁定时间很短，为了这一小段时间去切换线程，线程挂起和恢复现场的花费可能会让系统得不偿失。如果物理机器有多个处理器，能够让两个或以上的线程同时并行执行，我们就可以让后面那个请求锁的线程不放弃CPU的执行时间，看看持有锁的线程是否很快就会释放锁。</p><p>而为了让当前线程“稍等一下”，我们需让当前线程进行自旋，如果在自旋完成后前面锁定同步资源的线程已经释放了锁，那么当前线程就可以不必阻塞而是直接获取同步资源，从而避免切换线程的开销。这就是自旋锁。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841222.png" alt="image-20220525213859276" tabindex="0" loading="lazy"><figcaption>image-20220525213859276</figcaption></figure><p>自旋锁本身是有缺点的，它不能代替阻塞。自旋等待虽然避免了线程切换的开销，但它要占用处理器时间。如果锁被占用的时间很短，自旋等待的效果就会非常好。反之，如果锁被占用的时间很长，那么自旋的线程只会白浪费处理器资源。所以，自旋等待的时间必须要有一定的限度，如果自旋超过了限定次数（默认是10次，可以使用-XX:PreBlockSpin来更改）没有成功获得锁，就应当挂起线程。</p><p>自旋锁的实现原理同样也是CAS，AtomicInteger中调用unsafe进行自增操作的源码中的do-while循环就是一个自旋操作，如果修改数值失败则通过循环来执行自旋，直至修改成功。</p><h2 id="_3-无锁-vs-偏向锁-vs-轻量级锁-vs-重量级锁" tabindex="-1"><a class="header-anchor" href="#_3-无锁-vs-偏向锁-vs-轻量级锁-vs-重量级锁"><span>3. 无锁 VS 偏向锁 VS 轻量级锁 VS 重量级锁</span></a></h2><blockquote><p>这四种锁是指锁的状态，专门针对synchronized的。在介绍这四种锁状态之前还需要介绍一些额外的知识。</p></blockquote><p>总结而言： 偏向锁通过对比Mark Word解决加锁问题，避免执行CAS操作。而轻量级锁是通过用CAS操作和自旋来解决加锁问题，避免线程阻塞和唤醒而影响性能。重量级锁是将除了拥有锁的线程以外的线程都阻塞。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841243.png" alt="image-20220525214145459" tabindex="0" loading="lazy"><figcaption>image-20220525214145459</figcaption></figure><h2 id="_4-公平锁-vs-非公平锁" tabindex="-1"><a class="header-anchor" href="#_4-公平锁-vs-非公平锁"><span>4. 公平锁 VS 非公平锁</span></a></h2><p>公平锁是指多个线程按照申请锁的顺序来获取锁，线程直接进入队列中排队，队列中的第一个线程才能获得锁。公平锁的优点是等待锁的线程不会饿死。缺点是整体吞吐效率相对非公平锁要低，等待队列中除第一个线程以外的所有线程都会阻塞，CPU唤醒阻塞线程的开销比非公平锁大。</p><p>非公平锁是多个线程加锁时直接尝试获取锁，获取不到才会到等待队列的队尾等待。但如果此时锁刚好可用，那么这个线程可以无需阻塞直接获取到锁，所以非公平锁有可能出现后申请锁的线程先获取锁的场景。非公平锁的优点是可以减少唤起线程的开销，整体的吞吐效率高，因为线程有几率不阻塞直接获得锁，CPU不必唤醒所有线程。缺点是处于等待队列中的线程可能会饿死，或者等很久才会获得锁。</p><p>直接用语言描述可能有点抽象，这里作者用从别处看到的一个例子来讲述一下公平锁和非公平锁。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841264.png" alt="image-20220525214407781" tabindex="0" loading="lazy"><figcaption>image-20220525214407781</figcaption></figure><p>如上图所示，假设有一口水井，有管理员看守，管理员有一把锁，只有拿到锁的人才能够打水，打完水要把锁还给管理员。每个过来打水的人都要管理员的允许并拿到锁之后才能去打水，如果前面有人正在打水，那么这个想要打水的人就必须排队。管理员会查看下一个要去打水的人是不是队伍里排最前面的人，如果是的话，才会给你锁让你去打水；如果你不是排第一的人，就必须去队尾排队，这就是公平锁。</p><p>但是对于非公平锁，管理员对打水的人没有要求。即使等待队伍里有排队等待的人，但如果在上一个人刚打完水把锁还给管理员而且管理员还没有允许等待队伍里下一个人去打水时，刚好来了一个插队的人，这个插队的人是可以直接从管理员那里拿到锁去打水，不需要排队，原本排队等待的人只能继续等待。如下图所示：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841287.png" alt="image-20220525214702064" tabindex="0" loading="lazy"><figcaption>image-20220525214702064</figcaption></figure><h2 id="_5-可重入锁-vs-非可重入锁" tabindex="-1"><a class="header-anchor" href="#_5-可重入锁-vs-非可重入锁"><span>5. 可重入锁 VS 非可重入锁</span></a></h2><p>可重入锁又名递归锁，是指在同一个线程在外层方法获取锁的时候，再进入该线程的内层方法会自动获取锁（前提锁对象得是同一个对象或者class），不会因为之前已经获取过还没释放而阻塞。Java中ReentrantLock和synchronized都是可重入锁，可重入锁的一个优点是可一定程度避免死锁。下面用示例代码来进行分析：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Widget</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> synchronized</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> doSomething</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;方法1执行...&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        doOthers</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> synchronized</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> doOthers</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;方法2执行...&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>在上面的代码中，类中的两个方法都是被内置锁synchronized修饰的，doSomething()方法中调用doOthers()方法。因为内置锁是可重入的，所以同一个线程在调用doOthers()时可以直接获得当前对象的锁，进入doOthers()进行操作。</p><p>如果是一个不可重入锁，那么当前线程在调用doOthers()之前需要将执行doSomething()时获取当前对象的锁释放掉，实际上该对象锁已被当前线程所持有，且无法释放。所以此时会出现死锁。</p><p>而为什么可重入锁就可以在嵌套调用时可以自动获得锁呢？我们通过图示和源码来分别解析一下。</p><p>还是打水的例子，有多个人在排队打水，此时管理员允许锁和同一个人的多个水桶绑定。这个人用多个水桶打水时，第一个水桶和锁绑定并打完水之后，第二个水桶也可以直接和锁绑定并开始打水，所有的水桶都打完水之后打水人才会将锁还给管理员。这个人的所有打水流程都能够成功执行，后续等待的人也能够打到水。这就是可重入锁。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841309.png" alt="image-20220525214920016" tabindex="0" loading="lazy"><figcaption>image-20220525214920016</figcaption></figure><p>但如果是非可重入锁的话，此时管理员只允许锁和同一个人的一个水桶绑定。第一个水桶和锁绑定打完水之后并不会释放锁，导致第二个水桶不能和锁绑定也无法打水。当前线程出现死锁，整个等待队列中的所有线程都无法被唤醒。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841328.png" alt="image-20220525215010238" tabindex="0" loading="lazy"><figcaption>image-20220525215010238</figcaption></figure><p>之前我们说过ReentrantLock和synchronized都是重入锁，那么我们通过重入锁ReentrantLock以及非可重入锁NonReentrantLock的源码来对比分析一下为什么非可重入锁在重复调用同步资源时会出现死锁。</p><p>首先ReentrantLock和NonReentrantLock都继承父类AQS，其父类AQS中维护了一个同步状态status来计数重入次数，status初始值为0。</p><p>当线程尝试获取锁时，可重入锁先尝试获取并更新status值，如果status == 0表示没有其他线程在执行同步代码，则把status置为1，当前线程开始执行。如果status != 0，则判断当前线程是否是获取到这个锁的线程，如果是的话执行status+1，且当前线程可以再次获取锁。而非可重入锁是直接去获取并尝试更新当前status的值，如果status != 0的话会导致其获取锁失败，当前线程阻塞。</p><p>释放锁时，可重入锁同样先获取当前status的值，在当前线程是持有锁的线程的前提下。如果status-1 == 0，则表示当前线程所有重复获取锁的操作都已经执行完毕，然后该线程才会真正释放锁。而非可重入锁则是在确定当前线程是持有锁的线程之后，直接将status置为0，将锁释放。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841349.png" alt="image-20220525215154882" tabindex="0" loading="lazy"><figcaption>image-20220525215154882</figcaption></figure><h2 id="_6-独享锁-排他锁-vs-共享锁" tabindex="-1"><a class="header-anchor" href="#_6-独享锁-排他锁-vs-共享锁"><span>6. 独享锁(排他锁) VS 共享锁</span></a></h2><blockquote><p>独享锁和共享锁同样是一种概念。我们先介绍一下具体的概念，然后通过ReentrantLock和ReentrantReadWriteLock的源码来介绍独享锁和共享锁。</p></blockquote><p><strong>独享锁也叫排他锁</strong>，是指该锁一次只能被一个线程所持有。如果线程T对数据A加上排它锁后，则其他线程不能再对A加任何类型的锁。获得排它锁的线程即能读数据又能修改数据。JDK中的synchronized和JUC中Lock的实现类就是互斥锁。</p><p><strong>共享锁</strong>是指该锁可被多个线程所持有。如果线程T对数据A加上共享锁后，则其他线程只能对A再加共享锁，不能加排它锁。获得共享锁的线程只能读数据，不能修改数据。</p><p>独享锁与共享锁也是通过AQS来实现的，通过实现不同的方法，来实现独享或者共享。</p><p>下图为ReentrantReadWriteLock的部分源码：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841372.png" alt="image-20220525215327629" tabindex="0" loading="lazy"><figcaption>image-20220525215327629</figcaption></figure><p>我们看到ReentrantReadWriteLock有两把锁：ReadLock和WriteLock，由词知意，一个读锁一个写锁，合称“读写锁”。再进一步观察可以发现ReadLock和WriteLock是靠内部类Sync实现的锁。Sync是AQS的一个子类，这种结构在CountDownLatch、ReentrantLock、Semaphore里面也都存在。</p><p>在ReentrantReadWriteLock里面，读锁和写锁的锁主体都是Sync，但读锁和写锁的加锁方式不一样。读锁是共享锁，写锁是独享锁。读锁的共享锁可保证并发读非常高效，而读写、写读、写写的过程互斥，因为读锁和写锁是分离的。所以ReentrantReadWriteLock的并发性相比一般的互斥锁有了很大提升。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/java/thread/java-thread-x-lock-all.html" target="_blank" rel="noopener noreferrer">Java并发 - Java中所有的锁</a></p>`,63)]))}const p=s(t,[["render",l],["__file","java-thread-y-all-lock.html.vue"]]),c=JSON.parse(`{"path":"/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-all-lock.html","title":"Java并发 - Java中所有的锁","lang":"zh-CN","frontmatter":{"aliases":"Java并发 - Java中所有的锁, 'Java并发 - Java中所有的锁'","tags":null,"cssclass":null,"source":null,"order":40,"category":["Java","并发"],"created":"2024-02-22 10:48","updated":"2024-03-12 08:43","description":"Java并发 - Java中所有的锁 0. 简介 Java提供了种类丰富的锁，每种锁因其特性的不同，在适当的场景下能够展现出非常高的效率。本文旨在对锁相关源码（本文中的源码来自JDK 8和Netty 3.10.6）、使用场景进行举例，为读者介绍主流锁的知识点，以及不同的锁的适用场景。 Java中往往是按照是否含有某一特性来定义锁，我们通过特性将锁进行分...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-all-lock.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Java并发 - Java中所有的锁"}],["meta",{"property":"og:description","content":"Java并发 - Java中所有的锁 0. 简介 Java提供了种类丰富的锁，每种锁因其特性的不同，在适当的场景下能够展现出非常高的效率。本文旨在对锁相关源码（本文中的源码来自JDK 8和Netty 3.10.6）、使用场景进行举例，为读者介绍主流锁的知识点，以及不同的锁的适用场景。 Java中往往是按照是否含有某一特性来定义锁，我们通过特性将锁进行分..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841164.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java并发 - Java中所有的锁\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841164.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841198.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841222.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841243.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841264.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841287.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841309.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841328.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841349.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841372.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"0. 简介","slug":"_0-简介","link":"#_0-简介","children":[]},{"level":2,"title":"1. 乐观锁 VS 悲观锁","slug":"_1-乐观锁-vs-悲观锁","link":"#_1-乐观锁-vs-悲观锁","children":[]},{"level":2,"title":"2. 自旋锁 VS 适应性自旋锁","slug":"_2-自旋锁-vs-适应性自旋锁","link":"#_2-自旋锁-vs-适应性自旋锁","children":[]},{"level":2,"title":"3. 无锁 VS 偏向锁 VS 轻量级锁 VS 重量级锁","slug":"_3-无锁-vs-偏向锁-vs-轻量级锁-vs-重量级锁","link":"#_3-无锁-vs-偏向锁-vs-轻量级锁-vs-重量级锁","children":[]},{"level":2,"title":"4. 公平锁 VS 非公平锁","slug":"_4-公平锁-vs-非公平锁","link":"#_4-公平锁-vs-非公平锁","children":[]},{"level":2,"title":"5. 可重入锁 VS 非可重入锁","slug":"_5-可重入锁-vs-非可重入锁","link":"#_5-可重入锁-vs-非可重入锁","children":[]},{"level":2,"title":"6. 独享锁(排他锁) VS 共享锁","slug":"_6-独享锁-排他锁-vs-共享锁","link":"#_6-独享锁-排他锁-vs-共享锁","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":11.81,"words":3544},"filePathRelative":"posts/Java/Java多线程/java-thread-y-all-lock.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>0. 简介</h2>\\n<p>Java提供了种类丰富的锁，每种锁因其特性的不同，在适当的场景下能够展现出非常高的效率。本文旨在对锁相关源码（本文中的源码来自JDK 8和Netty 3.10.6）、使用场景进行举例，为读者介绍主流锁的知识点，以及不同的锁的适用场景。</p>\\n<p>Java中往往是按照是否含有某一特性来定义锁，我们通过特性将锁进行分组归类，再使用对比的方式进行介绍，帮助大家更快捷的理解相关知识。下面给出本文内容的总体分类目录：</p>\\n<blockquote></blockquote>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120841164.png\\" alt=\\"image-20220525212721156\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220525212721156</figcaption></figure>","autoDesc":true}`);export{p as comp,c as data};
