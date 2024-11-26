import{_ as n,c as a,a as e,o as i}from"./app-JRvFIbSa.js";const l={};function p(c,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="线程池使用示例" tabindex="-1"><a class="header-anchor" href="#线程池使用示例"><span>线程池使用示例</span></a></h1><p>具体使用示例</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>public class Test {</span></span>
<span class="line"><span>     public static void main(String[] args) {   </span></span>
<span class="line"><span>         ThreadPoolExecutor executor = new ThreadPoolExecutor(5, 10, 200, TimeUnit.MILLISECONDS,</span></span>
<span class="line"><span>                 new ArrayBlockingQueue&lt;Runnable&gt;(5));</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>         for(int i=0;i&lt;15;i++){</span></span>
<span class="line"><span>             MyTask myTask = new MyTask(i);</span></span>
<span class="line"><span>             executor.execute(myTask);</span></span>
<span class="line"><span>             System.out.println(&quot;线程池中线程数目：&quot;+executor.getPoolSize()+&quot;，队列中等待执行的任务数目：&quot;+</span></span>
<span class="line"><span>             executor.getQueue().size()+&quot;，已执行玩别的任务数目：&quot;+executor.getCompletedTaskCount());</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span>         executor.shutdown();</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>class MyTask implements Runnable {</span></span>
<span class="line"><span>    private int taskNum;</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>    public MyTask(int num) {</span></span>
<span class="line"><span>        this.taskNum = num;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        System.out.println(&quot;正在执行task &quot;+taskNum);</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            Thread.currentThread().sleep(4000);</span></span>
<span class="line"><span>        } catch (InterruptedException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        System.out.println(&quot;task &quot;+taskNum+&quot;执行完毕&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>线程池中线程数目：1，队列中等待执行的任务数目：0，已执行玩别的任务数目：0</span></span>
<span class="line"><span>正在执行task 0</span></span>
<span class="line"><span>线程池中线程数目：2，队列中等待执行的任务数目：0，已执行玩别的任务数目：0</span></span>
<span class="line"><span>线程池中线程数目：3，队列中等待执行的任务数目：0，已执行玩别的任务数目：0</span></span>
<span class="line"><span>正在执行task 1</span></span>
<span class="line"><span>正在执行task 2</span></span>
<span class="line"><span>线程池中线程数目：4，队列中等待执行的任务数目：0，已执行玩别的任务数目：0</span></span>
<span class="line"><span>正在执行task 3</span></span>
<span class="line"><span>线程池中线程数目：5，队列中等待执行的任务数目：0，已执行玩别的任务数目：0</span></span>
<span class="line"><span>线程池中线程数目：5，队列中等待执行的任务数目：1，已执行玩别的任务数目：0</span></span>
<span class="line"><span>线程池中线程数目：5，队列中等待执行的任务数目：2，已执行玩别的任务数目：0</span></span>
<span class="line"><span>线程池中线程数目：5，队列中等待执行的任务数目：3，已执行玩别的任务数目：0</span></span>
<span class="line"><span>线程池中线程数目：5，队列中等待执行的任务数目：4，已执行玩别的任务数目：0</span></span>
<span class="line"><span>线程池中线程数目：5，队列中等待执行的任务数目：5，已执行玩别的任务数目：0</span></span>
<span class="line"><span>正在执行task 4</span></span>
<span class="line"><span>线程池中线程数目：6，队列中等待执行的任务数目：5，已执行玩别的任务数目：0</span></span>
<span class="line"><span>线程池中线程数目：7，队列中等待执行的任务数目：5，已执行玩别的任务数目：0</span></span>
<span class="line"><span>正在执行task 11</span></span>
<span class="line"><span>正在执行task 10</span></span>
<span class="line"><span>线程池中线程数目：8，队列中等待执行的任务数目：5，已执行玩别的任务数目：0</span></span>
<span class="line"><span>正在执行task 12</span></span>
<span class="line"><span>线程池中线程数目：9，队列中等待执行的任务数目：5，已执行玩别的任务数目：0</span></span>
<span class="line"><span>正在执行task 13</span></span>
<span class="line"><span>线程池中线程数目：10，队列中等待执行的任务数目：5，已执行玩别的任务数目：0</span></span>
<span class="line"><span>正在执行task 14</span></span>
<span class="line"><span>task 1执行完毕</span></span>
<span class="line"><span>task 0执行完毕</span></span>
<span class="line"><span>正在执行task 5</span></span>
<span class="line"><span>正在执行task 6</span></span>
<span class="line"><span>task 12执行完毕</span></span>
<span class="line"><span>task 11执行完毕</span></span>
<span class="line"><span>正在执行task 8</span></span>
<span class="line"><span>task 10执行完毕</span></span>
<span class="line"><span>正在执行task 9</span></span>
<span class="line"><span>task 3执行完毕</span></span>
<span class="line"><span>task 2执行完毕</span></span>
<span class="line"><span>task 4执行完毕</span></span>
<span class="line"><span>task 13执行完毕</span></span>
<span class="line"><span>正在执行task 7</span></span>
<span class="line"><span>task 14执行完毕</span></span>
<span class="line"><span>task 5执行完毕</span></span>
<span class="line"><span>task 6执行完毕</span></span>
<span class="line"><span>task 9执行完毕</span></span>
<span class="line"><span>task 7执行完毕</span></span>
<span class="line"><span>task 8执行完毕</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从执行结果可以看出，当线程池中线程的数目大于5时，便将任务放入任务缓存队列里面，当任务缓存队列满了之后，便创建新的线程。如果上面程序中，将for循环中改成执行20个任务，就会抛出任务拒绝异常了。</p>`,6)]))}const r=n(l,[["render",p],["__file","java-thread-y-threadpool-example.html.vue"]]),t=JSON.parse('{"path":"/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-threadpool-example.html","title":"线程池使用示例","lang":"zh-CN","frontmatter":{"aliases":"线程池使用示例","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:48","updated":"2024-03-12 08:56","description":"线程池使用示例 具体使用示例 执行结果： 从执行结果可以看出，当线程池中线程的数目大于5时，便将任务放入任务缓存队列里面，当任务缓存队列满了之后，便创建新的线程。如果上面程序中，将for循环中改成执行20个任务，就会抛出任务拒绝异常了。","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B/java-thread-y-threadpool-example.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"线程池使用示例"}],["meta",{"property":"og:description","content":"线程池使用示例 具体使用示例 执行结果： 从执行结果可以看出，当线程池中线程的数目大于5时，便将任务放入任务缓存队列里面，当任务缓存队列满了之后，便创建新的线程。如果上面程序中，将for循环中改成执行20个任务，就会抛出任务拒绝异常了。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线程池使用示例\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.04,"words":911},"filePathRelative":"posts/Java/Java多线程/java-thread-y-threadpool-example.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>具体使用示例</p>\\n<div class=\\"language- line-numbers-mode\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>public class Test {</span></span>\\n<span class=\\"line\\"><span>     public static void main(String[] args) {   </span></span>\\n<span class=\\"line\\"><span>         ThreadPoolExecutor executor = new ThreadPoolExecutor(5, 10, 200, TimeUnit.MILLISECONDS,</span></span>\\n<span class=\\"line\\"><span>                 new ArrayBlockingQueue&lt;Runnable&gt;(5));</span></span>\\n<span class=\\"line\\"><span>          </span></span>\\n<span class=\\"line\\"><span>         for(int i=0;i&lt;15;i++){</span></span>\\n<span class=\\"line\\"><span>             MyTask myTask = new MyTask(i);</span></span>\\n<span class=\\"line\\"><span>             executor.execute(myTask);</span></span>\\n<span class=\\"line\\"><span>             System.out.println(\\"线程池中线程数目：\\"+executor.getPoolSize()+\\"，队列中等待执行的任务数目：\\"+</span></span>\\n<span class=\\"line\\"><span>             executor.getQueue().size()+\\"，已执行玩别的任务数目：\\"+executor.getCompletedTaskCount());</span></span>\\n<span class=\\"line\\"><span>         }</span></span>\\n<span class=\\"line\\"><span>         executor.shutdown();</span></span>\\n<span class=\\"line\\"><span>     }</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span> </span></span>\\n<span class=\\"line\\"><span> </span></span>\\n<span class=\\"line\\"><span>class MyTask implements Runnable {</span></span>\\n<span class=\\"line\\"><span>    private int taskNum;</span></span>\\n<span class=\\"line\\"><span>     </span></span>\\n<span class=\\"line\\"><span>    public MyTask(int num) {</span></span>\\n<span class=\\"line\\"><span>        this.taskNum = num;</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span>     </span></span>\\n<span class=\\"line\\"><span>    @Override</span></span>\\n<span class=\\"line\\"><span>    public void run() {</span></span>\\n<span class=\\"line\\"><span>        System.out.println(\\"正在执行task \\"+taskNum);</span></span>\\n<span class=\\"line\\"><span>        try {</span></span>\\n<span class=\\"line\\"><span>            Thread.currentThread().sleep(4000);</span></span>\\n<span class=\\"line\\"><span>        } catch (InterruptedException e) {</span></span>\\n<span class=\\"line\\"><span>            e.printStackTrace();</span></span>\\n<span class=\\"line\\"><span>        }</span></span>\\n<span class=\\"line\\"><span>        System.out.println(\\"task \\"+taskNum+\\"执行完毕\\");</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{r as comp,t as data};
