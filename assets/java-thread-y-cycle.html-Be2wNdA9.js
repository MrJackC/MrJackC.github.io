import{_ as e,c as a,a as r,o as n}from"./app-DEK5G3U7.js";const o={};function i(d,t){return n(),a("div",null,t[0]||(t[0]=[r('<h1 id="线程生命周期" tabindex="-1"><a class="header-anchor" href="#线程生命周期"><span>线程生命周期</span></a></h1><h2 id="_1-线程的生命周期" tabindex="-1"><a class="header-anchor" href="#_1-线程的生命周期"><span>1. 线程的生命周期</span></a></h2><p>Java 线程在运行的生命周期中的指定时刻只可能处于下面6种不同状态的其中一个状态</p><table><thead><tr><th>状态名称</th><th>说明</th></tr></thead><tbody><tr><td>NEW</td><td>初始状态，线程被构建，但是还没调用start方法</td></tr><tr><td>RUNNABLE</td><td>运行状态，Java线程将操作系统中的就绪和运行两种状态统称为”运行中“</td></tr><tr><td>BLOCKED</td><td>阻塞状态，表示线程阻塞与所</td></tr><tr><td>WAITING</td><td>等待状态，表示线程进入等待状态，进入该状态表示当前线程需要等待其他线程做出一些特定动作（通知或中断）</td></tr><tr><td>TIME_WAITING</td><td>超时等待状态，该状态不同与WAITING,他是可以在指定时间自行返回的</td></tr><tr><td>TERMINATED</td><td>终止状态，表示当前线程已经执行完毕</td></tr></tbody></table><p>线程在生命周期中并不是固定处于某一个状态，而是随着代码的执行在不同状态之间切换。状态变迁如下图所示</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120851533.png" alt="image-20190920002523155" tabindex="0" loading="lazy"><figcaption>image-20190920002523155</figcaption></figure><p>由上图可以看出：</p><ul><li><p>NEW（新建）</p><p>线程创建之后它将处于 <strong>NEW（新建）</strong> 状态</p></li><li><p>RUNNABLE(运行状态)</p><p>调用 <code>start()</code> 方法后开始运行，线程这时候处于 <strong>READY（可运行）</strong> 状态。可运行状态的线程获得了 CPU 时间片（timeslice）后就处于 <strong>RUNNING（运行）</strong> 状态。</p><blockquote><p>操作系统隐藏 Java 虚拟机（JVM）中的 RUNNABLE 和 RUNNING 状态，它只能看到 RUNNABLE 状态（图源：<a href="https://howtodoinjava.com/" target="_blank" rel="noopener noreferrer">HowToDoInJava</a>：<a href="https://howtodoinjava.com/java/multi-threading/java-thread-life-cycle-and-thread-states/" target="_blank" rel="noopener noreferrer">Java Thread Life Cycle and Thread States</a>），所以 Java 系统一般将这两个状态统称为 <strong>RUNNABLE（运行中）</strong> 状态 。</p></blockquote></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120851575.png" alt="image-20190920002612452" tabindex="0" loading="lazy"><figcaption>image-20190920002612452</figcaption></figure><ul><li><p>WAITING (等待)</p><p>当线程执行 <code>wait()</code>方法之后，线程进入**WAITING (等待)**状态，进入等待状态的线程需要依靠其他线程的通知才能够返回到运行状态</p></li><li><p>TIME_WAITING(超时等待)</p><p>TIME_WAITING(超时等待)状态相当于在等待状态的基础上加上超时限制，比如<code>sleep(long millis)</code>方法或<code>wait(long millis)</code>方法可以将java线程置于 TIMED WAITING 状态，当超时时间到达后 JAVA线程将会返回RUNNABLE 状态</p></li><li><p>BLOCKED（阻塞）</p><p>当线程调用同步方法时，在没有获取到锁的情况下，线程将进入<strong>BLOCKED（阻塞）</strong> 状态</p></li><li><p>TERMINATED（终止）</p><p>线程在执行Runnale的run() 方法之后将会进入到**TERMINATED（终止）**状态</p></li></ul><h2 id="_2-sleep-方法和wait-方法区别和共同点" tabindex="-1"><a class="header-anchor" href="#_2-sleep-方法和wait-方法区别和共同点"><span>2. sleep() 方法和wait()方法区别和共同点</span></a></h2><ul><li><p>两者最主要的区别在于：<strong>sleep方法没有释放锁，而wait 方法释放了锁</strong></p></li><li><p>两者都可以暂停线程的执行</p></li><li><p>wait通常被用于线程间的交互/通信，sleep通常被用于暂停执行</p></li><li><p>wait() 方法被调用后，线程不会自动苏醒，需要别的线程调用同一个对象上的notify()或者notifyAll方法</p><p>sleep（）方法执行完成后，线程会自动苏醒，或者可以使用wait(long timeout)超时后线程会自动苏醒</p></li></ul>',12)]))}const p=e(o,[["render",i],["__file","java-thread-y-cycle.html.vue"]]),s=JSON.parse('{"path":"/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-cycle.html","title":"线程生命周期","lang":"zh-CN","frontmatter":{"aliases":"线程生命周期","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:48","updated":"2024-03-12 08:52","description":"线程生命周期 1. 线程的生命周期 Java 线程在运行的生命周期中的指定时刻只可能处于下面6种不同状态的其中一个状态 线程在生命周期中并不是固定处于某一个状态，而是随着代码的执行在不同状态之间切换。状态变迁如下图所示 image-20190920002523155image-20190920002523155 由上图可以看出： NEW（新建） 线程创...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-cycle.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"线程生命周期"}],["meta",{"property":"og:description","content":"线程生命周期 1. 线程的生命周期 Java 线程在运行的生命周期中的指定时刻只可能处于下面6种不同状态的其中一个状态 线程在生命周期中并不是固定处于某一个状态，而是随着代码的执行在不同状态之间切换。状态变迁如下图所示 image-20190920002523155image-20190920002523155 由上图可以看出： NEW（新建） 线程创..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120851533.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线程生命周期\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120851533.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120851575.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 线程的生命周期","slug":"_1-线程的生命周期","link":"#_1-线程的生命周期","children":[]},{"level":2,"title":"2. sleep() 方法和wait()方法区别和共同点","slug":"_2-sleep-方法和wait-方法区别和共同点","link":"#_2-sleep-方法和wait-方法区别和共同点","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.55,"words":766},"filePathRelative":"posts/Java/Java多线程/java-thread-y-cycle.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 线程的生命周期</h2>\\n<p>Java 线程在运行的生命周期中的指定时刻只可能处于下面6种不同状态的其中一个状态</p>\\n<table>\\n<thead>\\n<tr>\\n<th>状态名称</th>\\n<th>说明</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>NEW</td>\\n<td>初始状态，线程被构建，但是还没调用start方法</td>\\n</tr>\\n<tr>\\n<td>RUNNABLE</td>\\n<td>运行状态，Java线程将操作系统中的就绪和运行两种状态统称为”运行中“</td>\\n</tr>\\n<tr>\\n<td>BLOCKED</td>\\n<td>阻塞状态，表示线程阻塞与所</td>\\n</tr>\\n<tr>\\n<td>WAITING</td>\\n<td>等待状态，表示线程进入等待状态，进入该状态表示当前线程需要等待其他线程做出一些特定动作（通知或中断）</td>\\n</tr>\\n<tr>\\n<td>TIME_WAITING</td>\\n<td>超时等待状态，该状态不同与WAITING,他是可以在指定时间自行返回的</td>\\n</tr>\\n<tr>\\n<td>TERMINATED</td>\\n<td>终止状态，表示当前线程已经执行完毕</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{p as comp,s as data};
