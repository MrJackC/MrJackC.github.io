import{_ as a,c as i,a as n,o as l}from"./app-mWs04Xnh.js";const e={};function r(o,s){return l(),i("div",null,s[0]||(s[0]=[n(`<h1 id="rabbitmq进阶-消息确认机制-事务-confirm" tabindex="-1"><a class="header-anchor" href="#rabbitmq进阶-消息确认机制-事务-confirm"><span>RabbitMQ进阶 - 消息确认机制（事务+Confirm）</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>生产者将消息发送出去之后，消息到底有没有正确到达服务器？如果不进行特殊配置，默认情况下发送消息的操作是不会返回任何信息给生产者的。也就是说默认情况下，生产者不知道消息是否正确到达服务器。</p><p>RabbitMQ 针对这个问题，提供了两种解决方式：</p><ul><li>事物机制</li><li>发送方确认（publisher confirm）机制</li></ul><h2 id="_2-事物机制" tabindex="-1"><a class="header-anchor" href="#_2-事物机制"><span>2. 事物机制</span></a></h2><p>RabbitMQ 客户端中与事物机制相关的方法有三个：</p><ul><li><code>channel.txSelect</code>：将当前的信道设置为 <strong>事物模式</strong></li><li><code>channel.txCommit</code>：提交事物</li><li><code>channel.txRollback</code>：回滚事物</li></ul><p>开启事物（设置为事物模式）后，可以发送消息，然后提交事物，如果在提交事物前 RabbitMQ 异常崩溃或则其他原因抛出异常，可以将其捕获，然后再执行回滚事物。</p><p>这里事物与数据库中的事物概念并不同。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 开启事物</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">txSelect</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 发送消息</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">basicPublish</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, reqestQueue, properties, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;message&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getBytes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 提交事物</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">txCommit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span></code></pre></div><p>AMQP 协议流转过程如下图所示</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231116454.png" alt="image-20210514144523551" tabindex="0" loading="lazy"><figcaption>image-20210514144523551</figcaption></figure><ol><li>客户端发送 Tx.Select 开启事物</li><li>Broker 回复 Tx.Select-Ok，确认事物开启</li><li>发送消息后，客户端 Tx.Commit 提交事物</li><li>Broker 回复 Tx.Commit-Ok ，确认事物提交</li></ol><p>事物回滚的代码则如下所示</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">try</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">txSelect</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">basicPublish</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, reqestQueue, properties, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;message&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getBytes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 故意制造异常</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> result </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> /</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">txCommit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Exception</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    	// 回滚事物1</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">txRollback</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><p>交互流程如下</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231116504.png" alt="image-20210514144758771" tabindex="0" loading="lazy"><figcaption>image-20210514144758771</figcaption></figure><p>如果要发送多条消息，则如下做</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">txSelect</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">for</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> i </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> i </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> i</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">++</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    try</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">basicPublish</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, reqestQueue, properties, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;message&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getBytes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">txCommit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Exception</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">txRollback</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><p>事物机制解决了 <strong>消息发送方</strong> 和 RabbitMQ 之间消息确认的问题，只有消息成功被 RabbitMQ 接收，事物才能提交成功。但是事物机制对 RabbitMQ 的性能影响很大。所以提供了一个改进机制：发送方确认机制</p><h2 id="_3-confirm-发送方确认机制" tabindex="-1"><a class="header-anchor" href="#_3-confirm-发送方确认机制"><span>3. Confirm 发送方确认机制</span></a></h2><p>在 AMQP 协议层面提供了事物机制解决消息是否有正确到达 RabbitMQ 这个问题，但是事物机制会严重降低 RabbitMQ 的消息吞吐量。</p><p>发送方确认机制（publisher confirm）是一种轻量级的方式。</p><p><strong>生产者将信道设置为 confirm（确认）模式</strong>，所有再该信道上 <strong>发布的消息</strong> 都会被 <strong>指派一个唯一的 ID</strong>（从 1 开始），当消息被匹配到队列后，RabbitMQ 会 <strong>发送一个确认（Basic.ack）给生产者</strong>（包含消息的唯一 ID），这就使得生产者知道消息已经正确到达了目的地了。如果消息和队列是 <strong>可持久化</strong>的，那么确认消息会在 <strong>消息写入磁盘</strong>后 发出。</p><p>RabbitMQ 回传给生产者的确认消息中的 deliveryTag 包含了确认消息的序号，此外还可以设置 <code>channel.basicAck 方法中的 multple 参数</code>，表示在这个序号之前的所有消息都已经得到了处理。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231116531.png" alt="image-20210514145114090" tabindex="0" loading="lazy"><figcaption>image-20210514145114090</figcaption></figure><p>如上图所示：生产者发送了 3 条消息，开启了 mutilple，那么 RabbitMQ 回调确认时，deliveryTag = 3，表示前面的 2 条消息，包含自己都已经正确到达 RabbitMQ 了。</p><ul><li><p>事物机制：发送方是同步的</p><p>发送一条消息后，发送端阻塞，等待 RabbitMQ 回应后，才能继续下一条消息的发送</p></li><li><p>发送方确认机制：可以是异步的</p></li></ul><p>发送方确认有两种方式：</p><ul><li>同步方式：发送消息后，调用 channel.waitForConfirms 方法，等待服务器的确认返回</li><li>异步方式：提供一个回调方法，服务端确认了一条或多条消息后客户端会收到回调事件</li></ul><h3 id="_3-1-同步方式" tabindex="-1"><a class="header-anchor" href="#_3-1-同步方式"><span>3.1 同步方式</span></a></h3><p>与事物机制使用类似，不过可以发布多条消息，再等待确认</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 将信道设置为生产者确认模式</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">confirmSelect</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">for</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> i </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> i </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> i</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">++</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 发布消息</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">basicPublish</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, reqestQueue, properties, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;message&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getBytes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">basicPublish</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, reqestQueue, properties, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;message&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getBytes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">basicPublish</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, reqestQueue, properties, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;message&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getBytes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">basicPublish</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, reqestQueue, properties, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;message&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getBytes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">basicPublish</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, reqestQueue, properties, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;message&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getBytes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    try</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">waitForConfirms</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // 发送的 5 条消息成功</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">else</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // 发送失败，这一批消息都需要重发？</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // 不清楚他的机制，全部失败？</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">catch</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">InterruptedException</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        e</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">printStackTrace</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 发送失败，这一批消息都需要重发？</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到如上的代码，批量发送后再等待并确认发送成功。但是有一个问题，当失败时（Basic.Nack 或 超时）时，就需要将这一批消息重新发送；这种情况过多的时候，性能不升返降</p><h3 id="_3-2-异步方式" tabindex="-1"><a class="header-anchor" href="#_3-2-异步方式"><span>3.2 异步方式</span></a></h3><p>通过添加 ConfirmListener 的方式，来知晓是否成功还是失败</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">final</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Channel</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> channel </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> connection</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">createChannel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 将信道设置为生产者确认模式</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">confirmSelect</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">addConfirmListener</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> ConfirmListener</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">             * 处理 RabbitMQ 的 Basic.Ack 指令</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">             * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> deliveryTag</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 那一条消息</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">             * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> multiple</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">             * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@throws</span><span style="color:#E5C07B;font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;"> IOException</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">             */</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> handleAck</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">long</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> deliveryTag</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#C678DD;--shiki-dark:#C678DD;">boolean</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> multiple</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> throws</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> IOException</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;发送成功&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">             * 处理 RabbitMQ 的 Basic.Nack 指令</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">             * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> deliveryTag</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">             * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> multiple</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">             * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@throws</span><span style="color:#E5C07B;font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;"> IOException</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">             */</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> handleNack</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">long</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> deliveryTag</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#C678DD;--shiki-dark:#C678DD;">boolean</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> multiple</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> throws</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> IOException</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;发送失败&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 可进行消息的重发处理</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">for</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">int</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> i </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> i </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> i</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">++</span><span style="color:#E06C75;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 发布消息</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">basicPublish</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, reqestQueue, properties, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;message&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getBytes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">basicPublish</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, reqestQueue, properties, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;message&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getBytes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">basicPublish</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, reqestQueue, properties, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;message&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getBytes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">basicPublish</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, reqestQueue, properties, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;message&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getBytes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    channel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">basicPublish</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, reqestQueue, properties, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;message&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getBytes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-性能对比" tabindex="-1"><a class="header-anchor" href="#_4-性能对比"><span>4. 性能对比</span></a></h2><p>在性能方面，QPS 对比如下</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231116561.png" alt="image-20210514145538216" tabindex="0" loading="lazy"><figcaption>image-20210514145538216</figcaption></figure><p>普通 confirm 就是发送一条就 waitForConfirms 一次。可见异步方式效率是最高的</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zq99299.github.io/mq-tutorial/rabbitmq-ac/04/08.html#%E4%BA%8B%E7%89%A9%E6%9C%BA%E5%88%B6" target="_blank" rel="noopener noreferrer">生产者确认</a></p>`,44)]))}const t=a(e,[["render",r],["__file","rabbitmq-x-confirm.html.vue"]]),k=JSON.parse('{"path":"/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-confirm.html","title":"RabbitMQ进阶 - 消息确认机制（事务+Confirm）","lang":"zh-CN","frontmatter":{"aliases":"RabbitMQ进阶 - 消息确认机制（事务+Confirm）","tags":null,"cssclass":null,"source":null,"order":100,"category":["RabbitMQ","MQ"],"created":"2024-02-22 10:50","updated":"2024-04-23 11:16","description":"RabbitMQ进阶 - 消息确认机制（事务+Confirm） 1. 背景 生产者将消息发送出去之后，消息到底有没有正确到达服务器？如果不进行特殊配置，默认情况下发送消息的操作是不会返回任何信息给生产者的。也就是说默认情况下，生产者不知道消息是否正确到达服务器。 RabbitMQ 针对这个问题，提供了两种解决方式： 事物机制 发送方确认（publish...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-confirm.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"RabbitMQ进阶 - 消息确认机制（事务+Confirm）"}],["meta",{"property":"og:description","content":"RabbitMQ进阶 - 消息确认机制（事务+Confirm） 1. 背景 生产者将消息发送出去之后，消息到底有没有正确到达服务器？如果不进行特殊配置，默认情况下发送消息的操作是不会返回任何信息给生产者的。也就是说默认情况下，生产者不知道消息是否正确到达服务器。 RabbitMQ 针对这个问题，提供了两种解决方式： 事物机制 发送方确认（publish..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231116454.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RabbitMQ进阶 - 消息确认机制（事务+Confirm）\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231116454.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231116504.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231116531.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231116561.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 事物机制","slug":"_2-事物机制","link":"#_2-事物机制","children":[]},{"level":2,"title":"3. Confirm 发送方确认机制","slug":"_3-confirm-发送方确认机制","link":"#_3-confirm-发送方确认机制","children":[{"level":3,"title":"3.1 同步方式","slug":"_3-1-同步方式","link":"#_3-1-同步方式","children":[]},{"level":3,"title":"3.2 异步方式","slug":"_3-2-异步方式","link":"#_3-2-异步方式","children":[]}]},{"level":2,"title":"4. 性能对比","slug":"_4-性能对比","link":"#_4-性能对比","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.72,"words":1416},"filePathRelative":"posts/MiddleWare/MQ_Rabbitmq/rabbitmq-x-confirm.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>生产者将消息发送出去之后，消息到底有没有正确到达服务器？如果不进行特殊配置，默认情况下发送消息的操作是不会返回任何信息给生产者的。也就是说默认情况下，生产者不知道消息是否正确到达服务器。</p>\\n<p>RabbitMQ 针对这个问题，提供了两种解决方式：</p>\\n<ul>\\n<li>事物机制</li>\\n<li>发送方确认（publisher confirm）机制</li>\\n</ul>\\n<h2>2. 事物机制</h2>\\n<p>RabbitMQ 客户端中与事物机制相关的方法有三个：</p>\\n<ul>\\n<li><code>channel.txSelect</code>：将当前的信道设置为 <strong>事物模式</strong></li>\\n<li><code>channel.txCommit</code>：提交事物</li>\\n<li><code>channel.txRollback</code>：回滚事物</li>\\n</ul>","autoDesc":true}');export{t as comp,k as data};