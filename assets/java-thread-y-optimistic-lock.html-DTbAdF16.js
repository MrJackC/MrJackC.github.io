import{_ as n,c as t,a as o,o as a}from"./app-DEK5G3U7.js";const r={};function s(i,e){return a(),t("div",null,e[0]||(e[0]=[o('<h1 id="乐观锁和悲观锁" tabindex="-1"><a class="header-anchor" href="#乐观锁和悲观锁"><span>乐观锁和悲观锁</span></a></h1><h2 id="_1-乐观锁和悲观锁简介" tabindex="-1"><a class="header-anchor" href="#_1-乐观锁和悲观锁简介"><span>1. 乐观锁和悲观锁简介</span></a></h2><blockquote><p>乐观锁对应于生活中乐观的人总是想着事情往好的方向发展，悲观锁对应于生活中悲观的人总是想着事情往坏的方向发展。这两种人各有优缺点，不能不以场景而定说一种人好于另外一种人。</p></blockquote><p><strong>悲观锁</strong></p><p><strong>总是假设最坏的情况</strong>，每次去拿数据的时候都认为别人会修改，所以<strong>每次再拿数据的时候都会上锁</strong>，这样别人想拿这个数据就会阻塞知道它拿到锁（<strong>共享资源每次只给一个线程使用，其他线程阻塞，用完后再把资源转让给其他线程</strong>）传统的关系型数据库里边就用到了很多这种锁机制，比如行锁，表锁等，读锁，写锁等，都是在做操作之前先上锁。Java中<code>synchronized</code>和<code>ReentrantLock</code>等独占锁就是悲观锁思想的实现。</p><p><strong>乐观锁</strong></p><p><strong>总是假设最好的情况</strong>，每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在<strong>更新的时候会判断一下期间别人有没有更新这个数据</strong>，可以使用<strong>版本号机制和CAS算法实现</strong>，<strong>乐观锁适用于多读的应用类型，这样可以提高吞吐量</strong>，像数据库提供的类似<strong>write_condition机制</strong>，其实都是乐观锁，在Java中<code>java.util.concurrent.atomic</code>包下面的原子变量类就是使用了乐观锁的一种实现方式<strong>CAS</strong>实现的。</p><h3 id="_1-1-两种锁的使用场景" tabindex="-1"><a class="header-anchor" href="#_1-1-两种锁的使用场景"><span>1.1 两种锁的使用场景</span></a></h3><p>从上面对两种锁的介绍，我们知道两种锁各有优缺点，不可认为一种好于另一种，像<strong>乐观锁适用于写比较少的情况下（多读场景）</strong>，即冲突真的很少发生的时候，这样可以省去了锁的开销，加大了系统的整个吞吐量。但如果是多写的情况，一般会经常产生冲突，这就会导致上层应用会不断的进行retry，这样反倒是降低了性能，所以<strong>一般多写的场景下用悲观锁就比较合适。</strong></p><h2 id="_2-乐观锁的两种实现方式" tabindex="-1"><a class="header-anchor" href="#_2-乐观锁的两种实现方式"><span>2. 乐观锁的两种实现方式</span></a></h2><blockquote><p><strong>乐观锁一般会使用版本号机制或CAS算法实现。</strong></p></blockquote><h3 id="_1-1-版本号机制" tabindex="-1"><a class="header-anchor" href="#_1-1-版本号机制"><span>1.1 版本号机制</span></a></h3><p>一般是在数据表中加上一个数据版本号version字段，表示数据被修改的次数，当数据被修改时，version值会加一。当线程A要更新数据值时，在读取数据的同时也会读取version值，在提交更新时，若刚才读取到的version值为当前数据库中的version值相等时才更新，否则重试更新操作，直到更新成功。</p><h4 id="_1-1-1-版本号案例" tabindex="-1"><a class="header-anchor" href="#_1-1-1-版本号案例"><span>1.1.1 版本号案例</span></a></h4><p>假设数据库中帐户信息表中有一个 version 字段，当前值为 1 ；而当前帐户余额字段（ balance ）为 $100 。</p><ol><li>操作员 A 此时将其读出（ version=1 ），并从其帐户余额中扣除 $50（ $100-$50 ）。</li><li>在操作员 A 操作的过程中，操作员B 也读入此用户信息（ version=1 ），并从其帐户余额中扣除 $20 （ $100-$20 ）。</li><li>操作员 A 完成了修改工作，将数据版本号加一（ version=2 ），连同帐户扣除后余额（ balance=$50 ），提交至数据库更新，此时由于提交数据版本大于数据库记录当前版本，数据被更新，数据库记录 version 更新为 2 。</li><li>操作员 B 完成了操作，也将版本号加一（ version=2 ）试图向数据库提交数据（ balance=$80 ），但此时比对数据库记录版本时发现，操作员 B 提交的数据版本号为 2 ，数据库记录当前版本也为 2 ，不满足 “ 提交版本必须大于记录当前版本才能执行更新 “ 的乐观锁策略，因此，操作员 B 的提交被驳回。</li></ol><p>这样，就避免了操作员 B 用基于 version=1 的旧数据修改的结果覆盖操作员A 的操作结果的可能。</p><h3 id="_1-2-cas算法" tabindex="-1"><a class="header-anchor" href="#_1-2-cas算法"><span>1.2 CAS算法</span></a></h3><p>即<strong>compare and swap（比较与交换）</strong>，是一种有名的<strong>无锁算法</strong>。无锁编程，即不使用锁的情况下实现多线程之间的变量同步，也就是在没有线程被阻塞的情况下实现变量的同步，所以也叫非阻塞同步（Non-blocking Synchronization）。<strong>CAS算法</strong>涉及到三个操作数</p><ul><li>需要读写的内存值 V</li><li>进行比较的值 A</li><li>拟写入的新值 B</li></ul><p>当且仅当 V 的值等于 A时，CAS通过原子方式用新值B来更新V的值，否则不会执行任何操作（比较和替换是一个原子操作）。一般情况下是一个<strong>自旋操作</strong>，即<strong>不断的重试</strong>。</p><h2 id="_3-乐观锁的缺点" tabindex="-1"><a class="header-anchor" href="#_3-乐观锁的缺点"><span>3. 乐观锁的缺点</span></a></h2><blockquote><p>ABA 问题是乐观锁一个常见的问题</p></blockquote><h3 id="_3-1-aba-问题" tabindex="-1"><a class="header-anchor" href="#_3-1-aba-问题"><span>3.1 ABA 问题</span></a></h3><p>如果一个变量V初次读取的时候是A值，并且在准备赋值的时候检查到它仍然是A值，那我们就能说明它的值没有被其他线程修改过了吗？很明显是不能的，因为在这段时间它的值可能被改为其他值，然后又改回A，那CAS操作就会误认为它从来没有被修改过。这个问题被称为CAS操作的 <strong>&quot;ABA&quot;问题。</strong></p><p>JDK 1.5 以后的 <code>AtomicStampedReference 类</code>就提供了此种能力，其中的 <code>compareAndSet 方法</code>就是首先检查当前引用是否等于预期引用，并且当前标志是否等于预期标志，如果全部相等，则以原子方式将该引用和该标志的值设置为给定的更新值。</p><h3 id="_3-2-循环时间长开销大" tabindex="-1"><a class="header-anchor" href="#_3-2-循环时间长开销大"><span>3.2 循环时间长开销大</span></a></h3><p><strong>自旋CAS（也就是不成功就一直循环执行直到成功）如果长时间不成功，会给CPU带来非常大的执行开销。</strong> 如果JVM能支持处理器提供的pause指令那么效率会有一定的提升，pause指令有两个作用，第一它可以延迟流水线执行指令（de-pipeline）,使CPU不会消耗过多的执行资源，延迟的时间取决于具体实现的版本，在一些处理器上延迟时间是零。第二它可以避免在退出循环的时候因内存顺序冲突（memory order violation）而引起CPU流水线被清空（CPU pipeline flush），从而提高CPU的执行效率。</p><h3 id="_3-3-只能保证一个共享变量的原子操作" tabindex="-1"><a class="header-anchor" href="#_3-3-只能保证一个共享变量的原子操作"><span>3.3 只能保证一个共享变量的原子操作</span></a></h3><p>CAS 只对单个共享变量有效，当操作涉及跨多个共享变量时 CAS 无效。但是从 JDK 1.5开始，提供了<code>AtomicReference类</code>来保证引用对象之间的原子性，你可以把多个变量放在一个对象里来进行 CAS 操作.所以我们可以使用锁或者利用<code>AtomicReference类</code>把多个共享变量合并成一个共享变量来操作。</p><h2 id="_4-cas与synchronized的使用场景" tabindex="-1"><a class="header-anchor" href="#_4-cas与synchronized的使用场景"><span>4. CAS与synchronized的使用场景</span></a></h2><blockquote><p><strong>简单的来说CAS适用于写比较少的情况下（多读场景，冲突一般较少），synchronized适用于写比较多的情况下（多写场景，冲突一般较多）</strong></p></blockquote><ol><li>对于资源竞争较少（线程冲突较轻）的情况，使用synchronized同步锁进行线程阻塞和唤醒切换以及用户态内核态间的切换操作额外浪费消耗cpu资源；而CAS基于硬件实现，不需要进入内核，不需要切换线程，操作自旋几率较少，因此可以获得更高的性能。</li><li>对于资源竞争严重（线程冲突严重）的情况，CAS自旋的概率会比较大，从而浪费更多的CPU资源，效率低于synchronized。</li></ol><p>补充： Java并发编程这个领域中synchronized关键字一直都是元老级的角色，很久之前很多人都会称它为 <strong>“重量级锁”</strong> 。但是，在JavaSE 1.6之后进行了主要包括为了减少获得锁和释放锁带来的性能消耗而引入的 <strong>偏向锁</strong> 和 <strong>轻量级锁</strong> 以及其它<strong>各种优化</strong>之后变得在某些情况下并不是那么重了。synchronized的底层实现主要依靠 <strong>Lock-Free</strong> 的队列，基本思路是 <strong>自旋后阻塞</strong>，<strong>竞争切换后继续竞争锁</strong>，<strong>稍微牺牲了公平性，但获得了高吞吐量</strong>。在线程冲突较少的情况下，可以获得和CAS类似的性能；而线程冲突严重的情况下，性能远高于CAS。</p><h3 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h3><p><a href="https://github.com/Snailclimb/JavaGuide/blob/master/docs/essential-content-for-interview/%E9%9D%A2%E8%AF%95%E5%BF%85%E5%A4%87%E4%B9%8B%E4%B9%90%E8%A7%82%E9%94%81%E4%B8%8E%E6%82%B2%E8%A7%82%E9%94%81.md" target="_blank" rel="noopener noreferrer">面试必备之乐观锁与悲观锁</a></p>',36)]))}const c=n(r,[["render",s],["__file","java-thread-y-optimistic-lock.html.vue"]]),p=JSON.parse('{"path":"/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-optimistic-lock.html","title":"乐观锁和悲观锁","lang":"zh-CN","frontmatter":{"aliases":"乐观锁和悲观锁","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:48","updated":"2024-03-12 08:52","description":"乐观锁和悲观锁 1. 乐观锁和悲观锁简介 乐观锁对应于生活中乐观的人总是想着事情往好的方向发展，悲观锁对应于生活中悲观的人总是想着事情往坏的方向发展。这两种人各有优缺点，不能不以场景而定说一种人好于另外一种人。 悲观锁 总是假设最坏的情况，每次去拿数据的时候都认为别人会修改，所以每次再拿数据的时候都会上锁，这样别人想拿这个数据就会阻塞知道它拿到锁（共享...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-optimistic-lock.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"乐观锁和悲观锁"}],["meta",{"property":"og:description","content":"乐观锁和悲观锁 1. 乐观锁和悲观锁简介 乐观锁对应于生活中乐观的人总是想着事情往好的方向发展，悲观锁对应于生活中悲观的人总是想着事情往坏的方向发展。这两种人各有优缺点，不能不以场景而定说一种人好于另外一种人。 悲观锁 总是假设最坏的情况，每次去拿数据的时候都认为别人会修改，所以每次再拿数据的时候都会上锁，这样别人想拿这个数据就会阻塞知道它拿到锁（共享..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"乐观锁和悲观锁\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 乐观锁和悲观锁简介","slug":"_1-乐观锁和悲观锁简介","link":"#_1-乐观锁和悲观锁简介","children":[{"level":3,"title":"1.1 两种锁的使用场景","slug":"_1-1-两种锁的使用场景","link":"#_1-1-两种锁的使用场景","children":[]}]},{"level":2,"title":"2. 乐观锁的两种实现方式","slug":"_2-乐观锁的两种实现方式","link":"#_2-乐观锁的两种实现方式","children":[{"level":3,"title":"1.1 版本号机制","slug":"_1-1-版本号机制","link":"#_1-1-版本号机制","children":[]},{"level":3,"title":"1.2 CAS算法","slug":"_1-2-cas算法","link":"#_1-2-cas算法","children":[]}]},{"level":2,"title":"3. 乐观锁的缺点","slug":"_3-乐观锁的缺点","link":"#_3-乐观锁的缺点","children":[{"level":3,"title":"3.1 ABA 问题","slug":"_3-1-aba-问题","link":"#_3-1-aba-问题","children":[]},{"level":3,"title":"3.2 循环时间长开销大","slug":"_3-2-循环时间长开销大","link":"#_3-2-循环时间长开销大","children":[]},{"level":3,"title":"3.3 只能保证一个共享变量的原子操作","slug":"_3-3-只能保证一个共享变量的原子操作","link":"#_3-3-只能保证一个共享变量的原子操作","children":[]}]},{"level":2,"title":"4. CAS与synchronized的使用场景","slug":"_4-cas与synchronized的使用场景","link":"#_4-cas与synchronized的使用场景","children":[{"level":3,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":7.52,"words":2257},"filePathRelative":"posts/Java/Java多线程/java-thread-y-optimistic-lock.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 乐观锁和悲观锁简介</h2>\\n<blockquote>\\n<p>乐观锁对应于生活中乐观的人总是想着事情往好的方向发展，悲观锁对应于生活中悲观的人总是想着事情往坏的方向发展。这两种人各有优缺点，不能不以场景而定说一种人好于另外一种人。</p>\\n</blockquote>\\n<p><strong>悲观锁</strong></p>\\n<p><strong>总是假设最坏的情况</strong>，每次去拿数据的时候都认为别人会修改，所以<strong>每次再拿数据的时候都会上锁</strong>，这样别人想拿这个数据就会阻塞知道它拿到锁（<strong>共享资源每次只给一个线程使用，其他线程阻塞，用完后再把资源转让给其他线程</strong>）传统的关系型数据库里边就用到了很多这种锁机制，比如行锁，表锁等，读锁，写锁等，都是在做操作之前先上锁。Java中<code>synchronized</code>和<code>ReentrantLock</code>等独占锁就是悲观锁思想的实现。</p>","autoDesc":true}');export{c as comp,p as data};
