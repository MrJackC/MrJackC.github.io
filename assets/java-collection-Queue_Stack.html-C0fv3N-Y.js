import{_ as a,c as e,a as l,o as t}from"./app-tJW29Kmg.js";const n={};function i(o,s){return t(),e("div",null,s[0]||(s[0]=[l(`<h1 id="collection-stack-queue-源码解析" tabindex="-1"><a class="header-anchor" href="#collection-stack-queue-源码解析"><span>Collection - Stack &amp; Queue 源码解析</span></a></h1><h2 id="_1-stack-queue概述" tabindex="-1"><a class="header-anchor" href="#_1-stack-queue概述"><span>1. Stack &amp; Queue概述</span></a></h2><p>Java里有一个叫做<em>Stack</em>的类，却没有叫做<em>Queue</em>的类(它是个接口名字)。当需要使用栈时，Java已不推荐使用<em>Stack</em>，而是推荐使用更高效的<em>ArrayDeque</em>；既然<em>Queue</em>只是一个接口，当需要使用队列时也就首选<em>ArrayDeque</em>了(次选是<em>LinkedList</em>)。</p><h2 id="_2-queue" tabindex="-1"><a class="header-anchor" href="#_2-queue"><span>2. Queue</span></a></h2><p><em>Queue</em>接口继承自Collection接口，除了最基本的Collection的方法之外，它还支持额外的<em>insertion</em>, <em>extraction</em>和<em>inspection</em>操作。这里有两组格式，共6个方法，一组是抛出异常的实现；另外一组是返回值的实现(没有则返回null)。</p><table><thead><tr><th></th><th>Throws exception</th><th>Returns special value</th></tr></thead><tbody><tr><td>Insert</td><td>add(e)</td><td>offer(e)</td></tr><tr><td>Remove</td><td>remove()</td><td>poll()</td></tr><tr><td>Examine</td><td>element()</td><td>peek()</td></tr></tbody></table><h2 id="_3-deque" tabindex="-1"><a class="header-anchor" href="#_3-deque"><span>3. Deque</span></a></h2><p><code>Deque</code>是&quot;double ended queue&quot;, 表示双向的队列，英文读作&quot;deck&quot;. Deque 继承自 Queue接口，除了支持Queue的方法之外，还支持<code>insert</code>, <code>remove</code>和<code>examine</code>操作，由于Deque是双向的，所以可以对队列的头和尾都进行操作，它同时也支持两组格式，一组是抛出异常的实现；另外一组是返回值的实现(没有则返回null)。共12个方法如下:</p><table><thead><tr><th></th><th>First Element - Head</th><th></th><th>Last Element - Tail</th><th></th></tr></thead><tbody><tr><td></td><td>Throws exception</td><td>Special value</td><td>Throws exception</td><td>Special value</td></tr><tr><td>Insert</td><td>addFirst(e)</td><td>offerFirst(e)</td><td>addLast(e)</td><td>offerLast(e)</td></tr><tr><td>Remove</td><td>removeFirst()</td><td>pollFirst()</td><td>removeLast()</td><td>pollLast()</td></tr><tr><td>Examine</td><td>getFirst()</td><td>peekFirst()</td><td>getLast()</td><td>peekLast()</td></tr></tbody></table><p>当把<code>Deque</code>当做FIFO的<code>queue</code>来使用时，元素是从<code>deque</code>的尾部添加，从头部进行删除的； 所以<code>deque</code>的部分方法是和<code>queue</code>是等同的。具体如下:</p><table><thead><tr><th>Queue Method</th><th>Equivalent Deque Method</th></tr></thead><tbody><tr><td>add(e)</td><td>addLast(e)</td></tr><tr><td>offer(e)</td><td>offerLast(e)</td></tr><tr><td>remove()</td><td>removeFirst()</td></tr><tr><td>poll()</td><td>pollFirst()</td></tr><tr><td>element()</td><td>getFirst()</td></tr><tr><td>peek()</td><td>peekFirst()</td></tr></tbody></table><p><em>Deque</em>的含义是“double ended queue”，即双端队列，它既可以当作栈使用，也可以当作队列使用。下表列出了<em>Deque</em>与<em>Queue</em>相对应的接口:</p><table><thead><tr><th>Queue Method</th><th>Equivalent Deque Method</th><th>说明</th></tr></thead><tbody><tr><td><code>add(e)</code></td><td><code>addLast(e)</code></td><td>向队尾插入元素，失败则抛出异常</td></tr><tr><td><code>offer(e)</code></td><td><code>offerLast(e)</code></td><td>向队尾插入元素，失败则返回<code>false</code></td></tr><tr><td><code>remove()</code></td><td><code>removeFirst()</code></td><td>获取并删除队首元素，失败则抛出异常</td></tr><tr><td><code>poll()</code></td><td><code>pollFirst()</code></td><td>获取并删除队首元素，失败则返回<code>null</code></td></tr><tr><td><code>element()</code></td><td><code>getFirst()</code></td><td>获取但不删除队首元素，失败则抛出异常</td></tr><tr><td><code>peek()</code></td><td><code>peekFirst()</code></td><td>获取但不删除队首元素，失败则返回<code>null</code></td></tr></tbody></table><p>下表列出了<em>Deque</em>与<em>Stack</em>对应的接口:</p><table><thead><tr><th>Stack Method</th><th>Equivalent Deque Method</th><th>说明</th></tr></thead><tbody><tr><td><code>push(e)</code></td><td><code>addFirst(e)</code></td><td>向栈顶插入元素，失败则抛出异常</td></tr><tr><td>无</td><td><code>offerFirst(e)</code></td><td>向栈顶插入元素，失败则返回<code>false</code></td></tr><tr><td><code>pop()</code></td><td><code>removeFirst()</code></td><td>获取并删除栈顶元素，失败则抛出异常</td></tr><tr><td>无</td><td><code>pollFirst()</code></td><td>获取并删除栈顶元素，失败则返回<code>null</code></td></tr><tr><td><code>peek()</code></td><td><code>getFirst()</code></td><td>获取但不删除栈顶元素，失败则抛出异常</td></tr><tr><td>无</td><td><code>peekFirst()</code></td><td>获取但不删除栈顶元素，失败则返回<code>null</code></td></tr></tbody></table><p>上面两个表共定义了<em>Deque</em>的12个接口。添加，删除，取值都有两套接口，它们功能相同，区别是对失败情况的处理不同。<strong>一套接口遇到失败就会抛出异常，另一套遇到失败会返回特殊值(<code>false</code>或<code>null</code>)</strong>。除非某种实现对容量有限制，大多数情况下，添加操作是不会失败的。<strong>虽然*Deque*的接口有12个之多，但无非就是对容器的两端进行操作，或添加，或删除，或查看</strong>。明白了这一点讲解起来就会非常简单。</p><p><em>ArrayDeque</em>和<em>LinkedList</em>是<em>Deque</em>的两个通用实现，由于官方更推荐使用<em>AarryDeque</em>用作栈和队列，加之上一篇已经讲解过<em>LinkedList</em>，本文将着重讲解<em>ArrayDeque</em>的具体实现。</p><p>从名字可以看出<em>ArrayDeque</em>底层通过数组实现，为了满足可以同时在数组两端插入或删除元素的需求，该数组还必须是循环的，即<strong>循环数组(circular array)</strong>，也就是说数组的任何一点都可能被看作起点或者终点。<em>ArrayDeque</em>是非线程安全的(not thread-safe)，当多个线程同时使用的时候，需要程序员手动同步；另外，该容器不允许放入<code>null</code>元素。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120915430.png" alt="image-20220816211332105" tabindex="0" loading="lazy"><figcaption>image-20220816211332105</figcaption></figure><p>上图中我们看到，<strong><code>head</code>指向首端第一个有效元素，<code>tail</code>指向尾端第一个可以插入元素的空位</strong>。因为是循环数组，所以<code>head</code>不一定总等于0，<code>tail</code>也不一定总是比<code>head</code>大。</p><h2 id="_4-方法剖析" tabindex="-1"><a class="header-anchor" href="#_4-方法剖析"><span>4. 方法剖析</span></a></h2><h3 id="_4-1-addfirst" tabindex="-1"><a class="header-anchor" href="#_4-1-addfirst"><span>4.1 addFirst()</span></a></h3><p><code>addFirst(E e)</code>的作用是在<em>Deque</em>的首端插入元素，也就是在<code>head</code>的前面插入元素，在空间足够且下标没有越界的情况下，只需要将<code>elements[--head] = e</code>即可。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120915469.png" alt="image-20220816211527313" tabindex="0" loading="lazy"><figcaption>image-20220816211527313</figcaption></figure><p>实际需要考虑: 1.空间是否够用，以及2.下标是否越界的问题。上图中，如果<code>head</code>为<code>0</code>之后接着调用<code>addFirst()</code>，虽然空余空间还够用，但<code>head</code>为<code>-1</code>，下标越界了。下列代码很好的解决了这两个问题。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//addFirst(E e)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> addFirst</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">E</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> e) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (e </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//不允许放入null</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        throw</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> NullPointerException</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    elements[head </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (head </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&amp;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">elements</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">length</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> -</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)] </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//2.下标是否越界</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (head </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> tail)</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//1.空间是否够用</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        doubleCapacity</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//扩容</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><p>上述代码我们看到，<strong>空间问题是在插入之后解决的</strong>，因为<code>tail</code>总是指向下一个可插入的空位，也就意味着<code>elements</code>数组至少有一个空位，所以插入元素的时候不用考虑空间问题。</p><p>下标越界的处理解决起来非常简单，<code>head = (head - 1) &amp; (elements.length - 1)</code>就可以了，<strong>这段代码相当于取余，同时解决了<code>head</code>为负值的情况</strong>。因为<code>elements.length</code>必需是<code>2</code>的指数倍，<code>elements - 1</code>就是二进制低位全<code>1</code>，跟<code>head - 1</code>相与之后就起到了取模的作用，如果<code>head - 1</code>为负数(其实只可能是-1)，则相当于对其取相对于<code>elements.length</code>的补码。</p><p>下面再说说扩容函数<code>doubleCapacity()</code>，其逻辑是申请一个更大的数组(原数组的两倍)，然后将原数组复制过去。过程如下图所示:</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120915518.png" alt="image-20220816212042861" tabindex="0" loading="lazy"><figcaption>image-20220816212042861</figcaption></figure><p>图中我们看到，复制分两次进行，第一次复制<code>head</code>右边的元素，第二次复制<code>head</code>左边的元素。</p><blockquote><p>扩容成原来的2倍</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//doubleCapacity()</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> doubleCapacity</span><span style="color:#E06C75;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    assert</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> head </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> tail</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> p </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> head</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> n </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> elements</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">length</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> r </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> n </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> p</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // head右边元素的个数</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> newCapacity </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> n </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;&lt;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//原空间的2倍</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (newCapacity </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        throw</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> IllegalStateException</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Sorry, deque too big&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;">[] a </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Object</span><span style="color:#E06C75;--shiki-dark:#E06C75;">[newCapacity]</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">arraycopy</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(elements, p, a, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, r);</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//复制右半部分，对应上图中绿色部分</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">arraycopy</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(elements, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, a, r, p);</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//复制左半部分，对应上图中灰色部分</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    elements </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">E</span><span style="color:#E06C75;--shiki-dark:#E06C75;">[])a</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    head </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    tail </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> n</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-addlast" tabindex="-1"><a class="header-anchor" href="#_4-2-addlast"><span>4.2 addLast()</span></a></h3><p><code>addLast(E e)</code>的作用是在<em>Deque</em>的尾端插入元素，也就是在<code>tail</code>的位置插入元素，由于<code>tail</code>总是指向下一个可以插入的空位，因此只需要<code>elements[tail] = e;</code>即可。插入完成后再检查空间，如果空间已经用光，则调用<code>doubleCapacity()</code>进行扩容。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120915556.png" alt="image-20220816213145335" tabindex="0" loading="lazy"><figcaption>image-20220816213145335</figcaption></figure><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> addLast</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">E</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> e) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (e </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//不允许放入null</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        throw</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> NullPointerException</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    elements[tail] </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//赋值</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ( (tail </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (tail </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&amp;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">elements</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">length</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> -</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> head)</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//下标越界处理</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        doubleCapacity</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//扩容</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><p>下标越界处理方式<code>addFirt()</code>中已经讲过，不再赘述。</p><h3 id="_4-3-pollfirst" tabindex="-1"><a class="header-anchor" href="#_4-3-pollfirst"><span>4.3 pollFirst()</span></a></h3><p><code>pollFirst()</code>的作用是删除并返回<em>Deque</em>首端元素，也即是<code>head</code>位置处的元素。如果容器不空，只需要直接返回<code>elements[head]</code>即可，当然还需要处理下标的问题。由于<code>ArrayDeque</code>中不允许放入<code>null</code>，当<code>elements[head] == null</code>时，意味着容器为空。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> E</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> pollFirst</span><span style="color:#E06C75;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    E</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> result </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> elements[head]</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (result </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//null值意味着deque为空</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    elements[h] </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//let GC work</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    head </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (head </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">+</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&amp;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">elements</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">length</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> -</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//下标越界处理</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> result</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><h3 id="_4-4-polllast" tabindex="-1"><a class="header-anchor" href="#_4-4-polllast"><span>4.4 pollLast()</span></a></h3><p><code>pollLast()</code>的作用是删除并返回<em>Deque</em>尾端元素，也即是<code>tail</code>位置前面的那个元素。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> E</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> pollLast</span><span style="color:#E06C75;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> t </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (tail </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&amp;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">elements</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">length</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> -</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//tail的上一个位置是最后一个元素</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    E</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> result </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> elements[t]</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (result </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//null值意味着deque为空</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    elements[t] </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//let GC work</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    tail </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> t</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> result</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><h3 id="_4-5-peekfirst" tabindex="-1"><a class="header-anchor" href="#_4-5-peekfirst"><span>4.5 peekFirst()</span></a></h3><p><code>peekFirst()</code>的作用是返回但不删除<em>Deque</em>首端元素，也即是<code>head</code>位置处的元素，直接返回<code>elements[head]</code>即可。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> E</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> peekFirst</span><span style="color:#E06C75;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> elements[head]</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // elements[head] is null if deque empty</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><h3 id="_4-6-peeklast" tabindex="-1"><a class="header-anchor" href="#_4-6-peeklast"><span>4.6 peekLast()</span></a></h3><p><code>peekLast()</code>的作用是返回但不删除<em>Deque</em>尾端元素，也即是<code>tail</code>位置前面的那个元素。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> E</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> peekLast</span><span style="color:#E06C75;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> elements[(tail </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&amp;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">elements</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">length</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> -</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)]</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/java/collection/java-collection-Queue&amp;Stack.html" target="_blank" rel="noopener noreferrer"><strong>Collection - Stack &amp; Queue 源码解析</strong></a></p>`,52)]))}const d=a(n,[["render",i],["__file","java-collection-Queue_Stack.html.vue"]]),p=JSON.parse('{"path":"/posts/Java/Java%E9%9B%86%E5%90%88/java-collection-Queue_Stack.html","title":"Collection - Stack & Queue 源码解析","lang":"zh-CN","frontmatter":{"aliases":"Collection - Stack & Queue 源码解析","tags":null,"cssclass":null,"source":null,"order":50,"category":["Java"],"created":"2024-02-22 10:47","updated":"2024-03-12 09:15","description":"Collection - Stack & Queue 源码解析 1. Stack & Queue概述 Java里有一个叫做Stack的类，却没有叫做Queue的类(它是个接口名字)。当需要使用栈时，Java已不推荐使用Stack，而是推荐使用更高效的ArrayDeque；既然Queue只是一个接口，当需要使用队列时也就首选ArrayDeque了(次选是...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E9%9B%86%E5%90%88/java-collection-Queue_Stack.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Collection - Stack & Queue 源码解析"}],["meta",{"property":"og:description","content":"Collection - Stack & Queue 源码解析 1. Stack & Queue概述 Java里有一个叫做Stack的类，却没有叫做Queue的类(它是个接口名字)。当需要使用栈时，Java已不推荐使用Stack，而是推荐使用更高效的ArrayDeque；既然Queue只是一个接口，当需要使用队列时也就首选ArrayDeque了(次选是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120915430.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Collection - Stack & Queue 源码解析\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120915430.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120915469.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120915518.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120915556.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. Stack & Queue概述","slug":"_1-stack-queue概述","link":"#_1-stack-queue概述","children":[]},{"level":2,"title":"2. Queue","slug":"_2-queue","link":"#_2-queue","children":[]},{"level":2,"title":"3. Deque","slug":"_3-deque","link":"#_3-deque","children":[]},{"level":2,"title":"4. 方法剖析","slug":"_4-方法剖析","link":"#_4-方法剖析","children":[{"level":3,"title":"4.1 addFirst()","slug":"_4-1-addfirst","link":"#_4-1-addfirst","children":[]},{"level":3,"title":"4.2 addLast()","slug":"_4-2-addlast","link":"#_4-2-addlast","children":[]},{"level":3,"title":"4.3 pollFirst()","slug":"_4-3-pollfirst","link":"#_4-3-pollfirst","children":[]},{"level":3,"title":"4.4 pollLast()","slug":"_4-4-polllast","link":"#_4-4-polllast","children":[]},{"level":3,"title":"4.5 peekFirst()","slug":"_4-5-peekfirst","link":"#_4-5-peekfirst","children":[]},{"level":3,"title":"4.6 peekLast()","slug":"_4-6-peeklast","link":"#_4-6-peeklast","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":7.09,"words":2127},"filePathRelative":"posts/Java/Java集合/java-collection-Queue&Stack.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. Stack &amp; Queue概述</h2>\\n<p>Java里有一个叫做<em>Stack</em>的类，却没有叫做<em>Queue</em>的类(它是个接口名字)。当需要使用栈时，Java已不推荐使用<em>Stack</em>，而是推荐使用更高效的<em>ArrayDeque</em>；既然<em>Queue</em>只是一个接口，当需要使用队列时也就首选<em>ArrayDeque</em>了(次选是<em>LinkedList</em>)。</p>\\n<h2>2. Queue</h2>\\n<p><em>Queue</em>接口继承自Collection接口，除了最基本的Collection的方法之外，它还支持额外的<em>insertion</em>, <em>extraction</em>和<em>inspection</em>操作。这里有两组格式，共6个方法，一组是抛出异常的实现；另外一组是返回值的实现(没有则返回null)。</p>","autoDesc":true}');export{d as comp,p as data};
