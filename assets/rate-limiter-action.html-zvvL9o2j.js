import{_ as a,c as i,a as n,o as l}from"./app-W9QyTiMU.js";const e={};function r(p,s){return l(),i("div",null,s[0]||(s[0]=[n(`<h1 id="系统高并发-限流" tabindex="-1"><a class="header-anchor" href="#系统高并发-限流"><span>系统高并发-限流</span></a></h1><blockquote><p><strong>高并发实现的三板斧：缓存，限流和降级</strong>。</p></blockquote><h2 id="_1-什么是限流-为什么要限流" tabindex="-1"><a class="header-anchor" href="#_1-什么是限流-为什么要限流"><span>1. 什么是限流？为什么要限流？</span></a></h2><p>程序处理请求的能力也是有限的，一旦请求多到超出它的处理极限就会崩溃。</p><p><strong>限流(Ratelimiting)指对应用服务的请求进行限制</strong>，例如某一接口的请求限制为 100 个每秒,对超过限制的请求则进行快速失败或丢弃。</p><blockquote><p>限流是保证系统高可用的重要手段！</p><p>由于互联网公司的流量巨大，系统上线会做一个流量峰值的评估，尤其是像各种秒杀促销活动，为了保证系统不被巨大的流量压垮，会在系统流量到达一定阈值时，拒绝掉一部分流量。</p><p>限流会导致用户在短时间内（这个时间段是毫秒级的）系统不可用，一般我们衡量系统处理能力的指标是每秒的QPS或者TPS，假设系统每秒的流量阈值是1000，理论上一秒内有第1001个请求进来时，那么这个请求就会被限流。</p></blockquote><h2 id="_2-限流的作用" tabindex="-1"><a class="header-anchor" href="#_2-限流的作用"><span>2. 限流的作用</span></a></h2><p>限流可以应对：</p><ul><li>热点业务带来的突发请求；</li><li>调用方 bug 导致的突发请求；</li><li>恶意攻击请求。</li></ul><p>因此，<strong>对于公开的接口最好采取限流措施</strong>。</p><h2 id="_3-限流方案" tabindex="-1"><a class="header-anchor" href="#_3-限流方案"><span>3. 限流方案</span></a></h2><h3 id="_3-1-计数器算法" tabindex="-1"><a class="header-anchor" href="#_3-1-计数器算法"><span>3.1 计数器算法</span></a></h3><p>Java内部也可以通过原子类计数器AtomicInteger、Semaphore信号量来做简单的限流。</p><h4 id="_3-1-1-实现思路" tabindex="-1"><a class="header-anchor" href="#_3-1-1-实现思路"><span>3.1.1 实现思路：</span></a></h4><ol><li>一般我们会限制一秒钟的能够通过的请求数，比如限流qps为100，</li><li>算法的实现思路就是从第一个请求进来开始计时</li><li>在接下来的1s内，每来一个请求，就把计数加1</li><li>如果累加的数字达到100，那么后续的请求就会被全部拒绝</li><li>等到1s结束后，把计数恢复成0，重新开始计数</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 限流的个数</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> maxCount </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 100</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 指定的时间内</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> interval </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 60</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 原子类计数器</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> AtomicInteger</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> atomicInteger </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> AtomicInteger</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 起始时间</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> startTime </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">currentTimeMillis</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> boolean</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> limit</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> maxCount</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> interval) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    atomicInteger</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">addAndGet</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">atomicInteger</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">get</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        startTime </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">currentTimeMillis</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        atomicInteger</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">addAndGet</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 超过了间隔时间，直接重新开始计数</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">currentTimeMillis</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> -</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> startTime </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> interval </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">*</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1000</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        startTime </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">currentTimeMillis</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        atomicInteger</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">set</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 还在间隔时间内,check有没有超过限流的个数</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">atomicInteger</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">get</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> &gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> maxCount) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-漏桶算法" tabindex="-1"><a class="header-anchor" href="#_3-2-漏桶算法"><span>3.2 漏桶算法</span></a></h3><p>漏桶算法思路很简单，我们把水比作是请求，<strong>漏桶比作是系统处理能力极限</strong>，水先进入到漏桶里，漏桶里的<strong>水按一定速率流出</strong>，当流出的速率小于流入的速率时，由于<strong>漏桶容量有限，后续进入的水直接溢出（拒绝请求）</strong>，以此实现限流。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300938962.png" alt="image-20220610211108002" tabindex="0" loading="lazy"><figcaption>image-20220610211108002</figcaption></figure><h4 id="_3-2-1-实现思路" tabindex="-1"><a class="header-anchor" href="#_3-2-1-实现思路"><span>3.2.1 实现思路：</span></a></h4><ul><li>可以准备一个队列，用来保存请求，</li><li>另外通过一个线程池定期从队列中获取请求并执行，可以一次性获取多个并发执行</li></ul><p><strong>弊端</strong>：无法对应短时间的突发流量</p><h3 id="_3-3-令牌桶算法" tabindex="-1"><a class="header-anchor" href="#_3-3-令牌桶算法"><span>3.3 令牌桶算法</span></a></h3><blockquote><p>从某种意义上，令牌桶是对漏桶算法的一种改进，桶算法能够限制请求调用的速率，而令牌桶算法能够在限制调用的平均速率的同时还允许一定程度的突发调用</p></blockquote><p>令牌桶算法的原理也比较简单，我们可以理解成医院的挂号看病，只有拿到号以后才可以进行诊病。</p><p>系统会维护一个令牌（token）桶，<strong>以一个恒定的速度往桶里放入令牌（token）</strong>，这时如果有请求进来想要被处理，则需要先从桶里获取一个令牌（token），当桶里没有令牌（token）可取时，则该请求将被拒绝服务。<strong>令牌桶算法通过控制桶的容量、发放令牌的速率，来达到对请求的限制</strong>。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300938997.png" alt="image-20220610211432413" tabindex="0" loading="lazy"><figcaption>image-20220610211432413</figcaption></figure><h4 id="_3-3-1-实现思路" tabindex="-1"><a class="header-anchor" href="#_3-3-1-实现思路"><span>3.3.1 实现思路：</span></a></h4><p>可以准备一个队列，用来保存令牌，另外通过一个线程池定期生成令牌放到队列中，每来一个请求，就从队列中获取一个令牌，并继续执行。</p><h3 id="_3-4-redis-lua" tabindex="-1"><a class="header-anchor" href="#_3-4-redis-lua"><span>3.4 Redis + Lua</span></a></h3><blockquote><p>之前介绍的3中都是单机限流，单机限流无法满足五花八门的需求。如</p><ul><li>限制某个资源被每个用户或者商户的访问次数，5秒只能访问2次，或者一天只能调用100次，单机限流无法实现，需要集群限流</li></ul><p>如何实现？</p><p>为了控制访问次数，肯定需要一个计数器，而且这个计数器只能保存在第三方服务，比如redis</p></blockquote><p>很多同学不知道Lua是啥？个人理解，Lua脚本和 MySQL数据库的存储过程比较相似，他们执行一组命令，所有命令的执行要么全部成功或者失败，以此达到原子性。也可以把Lua脚本理解为，一段具有业务逻辑的代码块。</p><p>而Lua本身就是一种编程语言，虽然redis 官方没有直接提供限流相应的API，但却支持了 Lua 脚本的功能，可以使用它实现复杂的令牌桶或漏桶算法，也是分布式系统中实现限流的主要方式之一。</p><p>相比Redis事务，Lua脚本的优点：</p><ul><li>减少网络开销：使用Lua脚本，无需向Redis发送多次请求，执行一次即可，减少网络传输</li><li>原子操作：Redis将整个Lua脚本作为一个命令执行，原子，无需担心并发</li><li>复用：Lua脚本一旦执行，会永久保存 Redis 中，其他客户端可复用</li></ul><p>Lua脚本大致逻辑如下：</p><div class="language-lua line-numbers-mode" data-ext="lua" data-title="lua"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 获取调用脚本时传入的第一个key值（用作限流的 key）</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">local</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> key</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> = </span><span style="color:#E06C75;--shiki-dark:#E06C75;">KEYS</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 获取调用脚本时传入的第一个参数值（限流大小）</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">local</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> limit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> = </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">tonumber</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">ARGV</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 获取当前流量大小</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">local</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> curentLimit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> = </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">tonumber</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">redis</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">call</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;get&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">key</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) or </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;0&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 是否超出限流</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> curentLimit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> + </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &gt; </span><span style="color:#E06C75;--shiki-dark:#E06C75;">limit</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> then</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 返回(拒绝)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">else</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 没有超出 value + 1</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">redis</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">call</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;INCRBY&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">key</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 设置过期时间</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">redis</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">call</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;EXPIRE&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">key</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 返回(放行)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">end</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过KEYS[1] 获取传入的key参数</li><li>通过ARGV[1]获取传入的limit参数</li><li>redis.call方法，从缓存中get和key相关的值，如果为null那么就返回0</li><li>接着判断缓存中记录的数值是否会大于限制大小，如果超出表示该被限流，返回0</li><li>如果未超过，那么该key的缓存值+1，并设置过期时间为1秒钟以后，并返回缓存值+1</li></ul><blockquote><p>总的这1秒钟就只有这么多个请求。理论上来说他是令牌桶算法</p></blockquote><h3 id="_3-5-网关层限流" tabindex="-1"><a class="header-anchor" href="#_3-5-网关层限流"><span>3.5 网关层限流</span></a></h3><p>限流常在网关这一层做，比如Nginx、Openresty、Kong、Zuul、Spring Cloud Gateway等，而像spring cloud - gateway网关限流底层实现原理，就是基于Redis + Lua，通过内置Lua限流脚本的方式。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300938026.png" alt="image-20220610212734116" tabindex="0" loading="lazy"><figcaption>image-20220610212734116</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="http://dockone.io/article/10137" target="_blank" rel="noopener noreferrer">我司用了6年的Redis分布式限流器，可以说是非常厉害了！</a></p>`,44)]))}const t=a(e,[["render",r],["__file","rate-limiter-action.html.vue"]]),c=JSON.parse(`{"path":"/posts/Architect/base/rate-limiter-action.html","title":"系统高并发-限流","lang":"zh-CN","frontmatter":{"aliases":"系统高并发-限流, '系统高并发-限流'","tags":null,"cssclass":null,"source":null,"order":71,"category":["架构"],"created":"2024-04-24 14:35","updated":"2024-04-30 09:39","description":"系统高并发-限流 高并发实现的三板斧：缓存，限流和降级。 1. 什么是限流？为什么要限流？ 程序处理请求的能力也是有限的，一旦请求多到超出它的处理极限就会崩溃。 限流(Ratelimiting)指对应用服务的请求进行限制，例如某一接口的请求限制为 100 个每秒,对超过限制的请求则进行快速失败或丢弃。 限流是保证系统高可用的重要手段！ 由于互联网公司的...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Architect/base/rate-limiter-action.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"系统高并发-限流"}],["meta",{"property":"og:description","content":"系统高并发-限流 高并发实现的三板斧：缓存，限流和降级。 1. 什么是限流？为什么要限流？ 程序处理请求的能力也是有限的，一旦请求多到超出它的处理极限就会崩溃。 限流(Ratelimiting)指对应用服务的请求进行限制，例如某一接口的请求限制为 100 个每秒,对超过限制的请求则进行快速失败或丢弃。 限流是保证系统高可用的重要手段！ 由于互联网公司的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300938962.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"系统高并发-限流\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300938962.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300938997.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300938026.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是限流？为什么要限流？","slug":"_1-什么是限流-为什么要限流","link":"#_1-什么是限流-为什么要限流","children":[]},{"level":2,"title":"2. 限流的作用","slug":"_2-限流的作用","link":"#_2-限流的作用","children":[]},{"level":2,"title":"3. 限流方案","slug":"_3-限流方案","link":"#_3-限流方案","children":[{"level":3,"title":"3.1 计数器算法","slug":"_3-1-计数器算法","link":"#_3-1-计数器算法","children":[]},{"level":3,"title":"3.2 漏桶算法","slug":"_3-2-漏桶算法","link":"#_3-2-漏桶算法","children":[]},{"level":3,"title":"3.3 令牌桶算法","slug":"_3-3-令牌桶算法","link":"#_3-3-令牌桶算法","children":[]},{"level":3,"title":"3.4 Redis + Lua","slug":"_3-4-redis-lua","link":"#_3-4-redis-lua","children":[]},{"level":3,"title":"3.5 网关层限流","slug":"_3-5-网关层限流","link":"#_3-5-网关层限流","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.17,"words":1851},"filePathRelative":"posts/Architect/base/rate-limiter-action.md","localizedDate":"2024年10月28日","excerpt":"\\n<blockquote>\\n<p><strong>高并发实现的三板斧：缓存，限流和降级</strong>。</p>\\n</blockquote>\\n<h2>1. 什么是限流？为什么要限流？</h2>\\n<p>程序处理请求的能力也是有限的，一旦请求多到超出它的处理极限就会崩溃。</p>\\n<p><strong>限流(Ratelimiting)指对应用服务的请求进行限制</strong>，例如某一接口的请求限制为 100 个每秒,对超过限制的请求则进行快速失败或丢弃。</p>\\n<blockquote>\\n<p>限流是保证系统高可用的重要手段！</p>\\n<p>由于互联网公司的流量巨大，系统上线会做一个流量峰值的评估，尤其是像各种秒杀促销活动，为了保证系统不被巨大的流量压垮，会在系统流量到达一定阈值时，拒绝掉一部分流量。</p>\\n<p>限流会导致用户在短时间内（这个时间段是毫秒级的）系统不可用，一般我们衡量系统处理能力的指标是每秒的QPS或者TPS，假设系统每秒的流量阈值是1000，理论上一秒内有第1001个请求进来时，那么这个请求就会被限流。</p>\\n</blockquote>","autoDesc":true}`);export{t as comp,c as data};
