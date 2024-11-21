import{_ as s,c as a,a as e,o as p}from"./app-CZJgH_ea.js";const i={};function l(t,n){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="分布式系统-分布式事务-补充" tabindex="-1"><a class="header-anchor" href="#分布式系统-分布式事务-补充"><span>分布式系统-分布式事务(补充)</span></a></h1><h2 id="_1-分布式事务" tabindex="-1"><a class="header-anchor" href="#_1-分布式事务"><span>1. <strong>分布式事务</strong></span></a></h2><p>分布式事务顾名思义就是要在分布式系统中实现事务，它其实是由多个本地事务组合而成。</p><p>对于分布式事务而言几乎满足不了 ACID，其实对于单机事务而言大部分情况下也没有满足 ACID，不然怎么会有四种隔离级别呢？所以更别说分布在不同数据库或者不同应用上的分布式事务了。</p><p>我们先来看下 2PC。</p><h2 id="_2-2pc" tabindex="-1"><a class="header-anchor" href="#_2-2pc"><span>2. <strong>2PC</strong></span></a></h2><h3 id="_2-1-简介" tabindex="-1"><a class="header-anchor" href="#_2-1-简介"><span>2.1 简介</span></a></h3><p>2PC（Two-phase commit protocol），中文叫二阶段提交。 <strong>二阶段提交是一种强一致性设计</strong>，2PC 引入一个事务协调者的角色来协调管理各参与者（也可称之为各本地资源）的提交和回滚，二阶段分别指的是准备（投票）和提交两个阶段。</p><p>注意这只是协议或者说是理论指导，只阐述了大方向，具体落地还是有会有差异的。</p><p>让我们来看下两个阶段的具体流程。</p><p><strong>准备阶段</strong>协调者会给各参与者发送准备命令，你可以把准备命令理解成除了提交事务之外啥事都做完了。</p><p>同步等待所有资源的响应之后就进入第二阶段即提交阶段（注意提交阶段不一定是提交事务，也可能是回滚事务）。</p><p>假如在第一阶段所有参与者都返回准备成功，那么协调者则向所有参与者发送提交事务命令，然后等待所有事务都提交成功之后，返回事务执行成功。</p><h3 id="_2-2-流程图" tabindex="-1"><a class="header-anchor" href="#_2-2-流程图"><span>2.2 流程图</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301010616.png" alt="image-20221017145021149" tabindex="0" loading="lazy"><figcaption>image-20221017145021149</figcaption></figure><p>假如在第一阶段有一个参与者返回失败，那么协调者就会向所有参与者发送回滚事务的请求，即分布式事务执行失败。<img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301010653.png" alt="image-20221017145054323" loading="lazy"></p><h3 id="_2-3-第二阶段提交失败处理" tabindex="-1"><a class="header-anchor" href="#_2-3-第二阶段提交失败处理"><span>2.3 第二阶段提交失败处理？</span></a></h3><p>那可能就有人问了，那第二阶段提交失败的话呢？</p><p>这里有两种情况。</p><p>第一种是<strong>第二阶段执行的是回滚事务操作</strong>，那么答案是不断重试，直到所有参与者都回滚了，不然那些在第一阶段准备成功的参与者会一直阻塞着。</p><p>第二种是<strong>第二阶段执行的是提交事务操作</strong>，那么答案也是不断重试，因为有可能一些参与者的事务已经提交成功了，这个时候只有一条路，就是头铁往前冲，不断的重试，直到提交成功，到最后真的不行只能人工介入处理。</p><p>大体上二阶段提交的流程就是这样，<strong>我们再来看看细节</strong>。</p><p>首先 2PC 是一个<strong>同步阻塞协议</strong>，像第一阶段协调者会等待所有参与者响应才会进行下一步操作，当然第一阶段的<strong>协调者有超时机制</strong>，假设因为网络原因没有收到某参与者的响应或某参与者挂了，那么超时后就会判断事务失败，向所有参与者发送回滚命令。</p><p>在第二阶段协调者的没法超时，因为按照我们上面分析只能不断重试！</p><h3 id="_2-4-协调者故障分析" tabindex="-1"><a class="header-anchor" href="#_2-4-协调者故障分析"><span>2.4 <strong>协调者故障分析</strong></span></a></h3><p><strong>协调者是一个单点，存在单点故障问题</strong>。</p><p>假设协调者在<strong>发送准备命令之前</strong>挂了，还行等于事务还没开始。</p><p>假设协调者在<strong>发送准备命令之后</strong>挂了，这就不太行了，有些参与者等于都执行了处于事务资源锁定的状态。不仅事务执行不下去，还会因为锁定了一些公共资源而阻塞系统其它操作。</p><p>假设协调者在<strong>发送回滚事务命令之前</strong>挂了，那么事务也是执行不下去，且在第一阶段那些准备成功参与者都阻塞着。</p><p>假设协调者在<strong>发送回滚事务命令之后</strong>挂了，这个还行，至少命令发出去了，很大的概率都会回滚成功，资源都会释放。但是如果出现网络分区问题，某些参与者将因为收不到命令而阻塞着。</p><p>假设协调者在<strong>发送提交事务命令之前</strong>挂了，这个不行，傻了！这下是所有资源都阻塞着。</p><p>假设协调者在<strong>发送提交事务命令之后</strong>挂了，这个还行，也是至少命令发出去了，很大概率都会提交成功，然后释放资源，但是如果出现网络分区问题某些参与者将因为收不到命令而阻塞着。</p><h3 id="_2-5-协调者故障-通过选举得到新协调者" tabindex="-1"><a class="header-anchor" href="#_2-5-协调者故障-通过选举得到新协调者"><span><strong>2.5 协调者故障，通过选举得到新协调者</strong></span></a></h3><p>因为协调者单点问题，因此我们可以通过选举等操作选出一个新协调者来顶替。</p><p>如果处于第一阶段，其实影响不大都回滚好了，在第一阶段事务肯定还没提交。</p><p>如果处于第二阶段，假设参与者都没挂，此时新协调者可以向所有参与者确认它们自身情况来推断下一步的操作。</p><p>假设有个别参与者挂了！这就有点僵硬了，比如协调者发送了回滚命令，此时第一个参与者收到了并执行，然后协调者和第一个参与者都挂了。</p><p>此时其他参与者都没收到请求，然后新协调者来了，它询问其他参与者都说OK，但它不知道挂了的那个参与者到底O不OK，所以它傻了。</p><p>问题其实就出在<strong>每个参与者自身的状态只有自己和协调者知道</strong>，因此新协调者无法通过在场的参与者的状态推断出挂了的参与者是什么情况。</p><p>虽然协议上没说，不过在实现的时候我们可以灵活的让协调者将自己发过的请求在哪个地方记一下，也就是日志记录，这样新协调者来的时候不就知道此时该不该发了？</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301010675.png" alt="image-20221017145424300" tabindex="0" loading="lazy"><figcaption>image-20221017145424300</figcaption></figure><p>但是就算协调者知道自己该发提交请求，那么在参与者也一起挂了的情况下没用，因为你不知道参与者在挂之前有没有提交事务。</p><p>如果参与者在挂之前事务提交成功，新协调者确定存活着的参与者都没问题，那肯定得向其他参与者发送提交事务命令才能保证数据一致。</p><p>如果参与者在挂之前事务还未提交成功，参与者恢复了之后数据是回滚的，此时协调者必须是向其他参与者发送回滚事务命令才能保持事务的一致。</p><p>所以说极端情况下还是无法避免数据不一致问题。</p><h3 id="_2-6-伪代码" tabindex="-1"><a class="header-anchor" href="#_2-6-伪代码"><span>2.6 伪代码</span></a></h3><p>talk is cheap 让我们再来看下代码，可能更加的清晰。以下代码取自 <code>&lt;&lt;Distributed System: Principles and Paradigms&gt;&gt;</code>。</p><p>这个代码就是实现了 2PC，但是相比于2PC增加了写日志的动作、参与者之间还会互相通知、参与者也实现了超时。这里要注意，一般所说的2PC，不含上述功能，这都是实现的时候添加的。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>协调者:</span></span>
<span class="line"><span>    write START_2PC to local log; //开始事务</span></span>
<span class="line"><span>    multicast VOTE_REQUEST to all participants; //广播通知参与者投票</span></span>
<span class="line"><span>    while not all votes have been collected {</span></span>
<span class="line"><span>        wait for any incoming vote;</span></span>
<span class="line"><span>        if timeout { //协调者超时</span></span>
<span class="line"><span>            write GLOBAL_ABORT to local log; //写日志</span></span>
<span class="line"><span>            multicast GLOBAL_ABORT to all participants; //通知事务中断</span></span>
<span class="line"><span>            exit;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        record vote;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //如果所有参与者都ok</span></span>
<span class="line"><span>    if all participants sent VOTE_COMMIT and coordinator votes COMMIT {</span></span>
<span class="line"><span>        write GLOBAL_COMMIT to local log;</span></span>
<span class="line"><span>        multicast GLOBAL_COMMIT to all participants;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        write GLOBAL_ABORT to local log;</span></span>
<span class="line"><span>        multicast GLOBAL_ABORT to all participants;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参与者:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    write INIT to local log; //写日志</span></span>
<span class="line"><span>    wait for VOTE_REQUEST from coordinator;</span></span>
<span class="line"><span>    if timeout { //等待超时</span></span>
<span class="line"><span>        write VOTE_ABORT to local log;</span></span>
<span class="line"><span>        exit;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if participant votes COMMIT {</span></span>
<span class="line"><span>        write VOTE_COMMIT to local log; //记录自己的决策</span></span>
<span class="line"><span>        send VOTE_COMMIT to coordinator;</span></span>
<span class="line"><span>        wait for DECISION from coordinator;</span></span>
<span class="line"><span>        if timeout {</span></span>
<span class="line"><span>            multicast DECISION_REQUEST to other participants; //超时通知</span></span>
<span class="line"><span>            wait until DECISION is received;  /* remain blocked*/</span></span>
<span class="line"><span>            write DECISION to local log;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if DECISION == GLOBAL_COMMIT</span></span>
<span class="line"><span>            write GLOBAL_COMMIT to local log;</span></span>
<span class="line"><span>        else if DECISION == GLOBAL_ABORT</span></span>
<span class="line"><span>            write GLOBAL_ABORT to local log;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        write VOTE_ABORT to local log;</span></span>
<span class="line"><span>        send VOTE_ABORT to coordinator;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>每个参与者维护一个线程处理其它参与者的DECISION_REQUEST请求：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while true {</span></span>
<span class="line"><span>        wait until any incoming DECISION_REQUEST is received;</span></span>
<span class="line"><span>        read most recently recorded STATE from the local log;</span></span>
<span class="line"><span>        if STATE == GLOBAL_COMMIT</span></span>
<span class="line"><span>            send GLOBAL_COMMIT to requesting participant;</span></span>
<span class="line"><span>        else if STATE == INIT or STATE == GLOBAL_ABORT;</span></span>
<span class="line"><span>            send GLOBAL_ABORT to requesting participant;</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>            skip;  /* participant remains blocked */</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此我们已经详细的分析的 2PC 的各种细节，我们来总结一下！</p><h3 id="_2-7-总结" tabindex="-1"><a class="header-anchor" href="#_2-7-总结"><span>2.7 总结</span></a></h3><p>2PC 是一种<strong>尽量保证强一致性</strong>的分布式事务，因此它是<strong>同步阻塞</strong>的，而同步阻塞就导致长久的资源锁定问题，<strong>总体而言效率低</strong>，并且存在<strong>单点故障</strong>问题，在极端条件下存在<strong>数据不一致</strong>的风险。</p><p>当然具体的实现可以变形，而且 2PC 也有变种，例如 Tree 2PC、Dynamic 2PC。</p><p>还有一点不知道你们看出来没，2PC 适用于<strong>数据库层面的分布式事务场景</strong>，而我们业务需求有时候不仅仅关乎数据库，也有可能是上传一张图片或者发送一条短信。</p><p>而且像 Java 中的 JTA 只能解决一个应用下多数据库的分布式事务问题，跨服务了就不能用了。</p><p>简单说下 Java 中 JTA，它是基于XA规范实现的事务接口，这里的 XA 你可以简单理解为基于数据库的 XA 规范来实现的 2PC。（至于XA规范到底是啥，篇幅有限，下次有机会再说）</p><p>接下来我们再来看看 3PC。</p><h2 id="_3-3pc" tabindex="-1"><a class="header-anchor" href="#_3-3pc"><span>3. <strong>3PC</strong></span></a></h2><h3 id="_3-1-简介" tabindex="-1"><a class="header-anchor" href="#_3-1-简介"><span>3.1 简介</span></a></h3><p>3PC 的出现是为了解决 2PC 的一些问题，相比于 2PC 它在<strong>参与者中也引入了超时机制</strong>，并且<strong>新增了一个阶段</strong>使得参与者可以利用这一个阶段统一各自的状态。</p><p>让我们来详细看一下。</p><p>3PC 包含了三个阶段，分别是<strong>准备阶段、预提交阶段和提交阶段</strong>，对应的英文就是：<code>CanCommit、PreCommit 和 DoCommit</code>。</p><p>看起来是<strong>把 2PC 的提交阶段变成了预提交阶段和提交阶段</strong>，但是 3PC 的准备阶段协调者只是询问参与者的自身状况，比如你现在还好吗？负载重不重？这类的。</p><p>而预提交阶段就是和 2PC 的准备阶段一样，除了事务的提交该做的都做了。</p><p>提交阶段和 2PC 的一样，让我们来看一下图。</p><h3 id="_3-2-流程图" tabindex="-1"><a class="header-anchor" href="#_3-2-流程图"><span>3.2 流程图</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301010702.png" alt="image-20221017150527845" tabindex="0" loading="lazy"><figcaption>image-20221017150527845</figcaption></figure><p>不管哪一个阶段有参与者返回失败都会宣布事务失败，这和 2PC 是一样的（当然到最后的提交阶段和 2PC 一样只要是提交请求就只能不断重试）。</p><h3 id="_3-3-3pc-阶段变更有什么影响" tabindex="-1"><a class="header-anchor" href="#_3-3-3pc-阶段变更有什么影响"><span>3.3 3PC 阶段变更有什么影响?</span></a></h3><p>我们先来看一下 3PC 的阶段变更有什么影响。</p><p>首先<strong>准备阶段的变更成不会直接执行事务</strong>，而是会先去询问此时的参与者是否有条件接这个事务，因此<strong>不会一来就干活直接锁资源</strong>，使得在某些资源不可用的情况下所有参与者都阻塞着。</p><p>而<strong>预提交阶段的引入起到了一个统一状态的作用</strong>，它像一道栅栏，表明在预提交阶段前所有参与者其实还未都回应，在预处理阶段表明所有参与者都已经回应了。</p><p>假如你是一位参与者，你知道自己进入了预提交状态那你就可以推断出来其他参与者也都进入了预提交状态。</p><p>但是多引入一个阶段也多一个交互，因此<strong>性能会差一些</strong>，而且<strong>绝大部分的情况下资源应该都是可用的</strong>，这样等于每次明知可用执行还得询问一次。</p><h3 id="_3-4-3pc-超时能带来什么样的影响" tabindex="-1"><a class="header-anchor" href="#_3-4-3pc-超时能带来什么样的影响"><span>3.4 3PC 超时能带来什么样的影响?</span></a></h3><p>我们再来看下参与者超时能带来什么样的影响。</p><p>我们知道 2PC 是同步阻塞的，上面我们已经分析了协调者挂在了提交请求还未发出去的时候是最伤的，所有参与者都已经锁定资源并且阻塞等待着。</p><p>那么引入了超时机制，参与者就不会傻等了，<strong>如果是等待提交命令超时，那么参与者就会提交事务了</strong>，因为都到了这一阶段了大概率是提交的，<strong>如果是等待预提交命令超时，那该干啥就干啥了，反正本来啥也没干</strong>。</p><p>然而超时机制也会带来数据不一致的问题，比如在等待提交命令时候超时了，参与者默认执行的是提交事务操作，但是<strong>有可能执行的是回滚操作，这样一来数据就不一致了</strong>。</p><p>当然 3PC 协调者超时还是在的，具体不分析了和 2PC 是一样的。</p><h3 id="_3-5-3pc-的引入是为了解决什么问题" tabindex="-1"><a class="header-anchor" href="#_3-5-3pc-的引入是为了解决什么问题"><span>3.5 3PC 的引入是为了解决什么问题？</span></a></h3><p>3PC 的引入是为了解决提交阶段 2PC 协调者和某参与者都挂了之后新选举的协调者不知道当前应该提交还是回滚的问题。</p><p>新协调者来的时候发现有一个参与者处于预提交或者提交阶段，那么表明已经经过了所有参与者的确认了，所以此时执行的就是提交命令。</p><p>所以说 3PC 就是通过引入预提交阶段来使得参与者之间的状态得到统一，也就是留了一个阶段让大家同步一下。</p><p>但是这也只能让协调者知道该如果做，但不能保证这样做一定对，这其实和上面 2PC 分析一致，因为挂了的参与者到底有没有执行事务无法断定。</p><p>所以说 3PC 通过预提交阶段可以减少故障恢复时候的复杂性，但是不能保证数据一致，除非挂了的那个参与者恢复。</p><h3 id="_3-5-总结" tabindex="-1"><a class="header-anchor" href="#_3-5-总结"><span>3.5 总结</span></a></h3><p>3PC 相对于 2PC 做了一定的改进：引入了参与者超时机制，并且增加了预提交阶段使得故障恢复之后协调者的决策复杂度降低，但整体的交互过程更长了，性能有所下降，并且还是会存在数据不一致问题。</p><p>所以 2PC 和 3PC 都不能保证数据100%一致，因此一般都需要有定时扫描补偿机制。</p><blockquote><p>3PC 我没有找到具体的实现，所以我认为 3PC 只是纯的理论上的东西，而且可以看到相比于 2PC 它是做了一些努力但是效果甚微，所以只做了解即可。</p></blockquote><h2 id="_4-tcc" tabindex="-1"><a class="header-anchor" href="#_4-tcc"><span>4. <strong>TCC</strong></span></a></h2><h3 id="_4-1-简介" tabindex="-1"><a class="header-anchor" href="#_4-1-简介"><span>4.1 简介</span></a></h3><p><strong>2PC 和 3PC 都是数据库层面的，而 TCC 是业务层面的分布式事务</strong>，就像我前面说的分布式事务不仅仅包括数据库的操作，还包括发送短信等，这时候 TCC 就派上用场了！</p><p>TCC 指的是<code>Try - Confirm - Cancel</code>。</p><ul><li>Try 指的是预留，即资源的预留和锁定，<strong>注意是预留</strong>。</li><li>Confirm 指的是确认操作，这一步其实就是真正的执行了。</li><li>Cancel 指的是撤销操作，可以理解为把预留阶段的动作撤销了。</li></ul><p>其实从思想上看和 2PC 差不多，都是先试探性的执行，如果都可以那就真正的执行，如果不行就回滚。</p><p>比如说一个事务要执行A、B、C三个操作，那么先对三个操作执行预留动作。如果都预留成功了那么就执行确认操作，如果有一个预留失败那就都执行撤销动作。</p><p>我们来看下流程，TCC模型还有个事务管理者的角色，用来记录TCC全局事务状态并提交或者回滚事务。</p><h3 id="_4-2-流程图" tabindex="-1"><a class="header-anchor" href="#_4-2-流程图"><span>4.2 流程图</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301010726.png" alt="image-20221017151334188" tabindex="0" loading="lazy"><figcaption>image-20221017151334188</figcaption></figure><p>可以看到流程还是很简单的，难点在于业务上的定义，对于每一个操作你都需要定义三个动作分别对应<code>Try - Confirm - Cancel</code>。</p><h3 id="_4-3-总结" tabindex="-1"><a class="header-anchor" href="#_4-3-总结"><span>4.3 总结</span></a></h3><p>因此 <strong>TCC 对业务的侵入较大和业务紧耦合</strong>，需要根据特定的场景和业务逻辑来设计相应的操作。</p><p>还有一点要注意，撤销和确认操作的执行可能需要重试，因此还需要保证<strong>操作的幂等</strong>。</p><p>相对于 2PC、3PC ，TCC 适用的范围更大，但是开发量也更大，毕竟都在业务上实现，而且有时候你会发现这三个方法还真不好写。不过也因为是在业务上实现的，所以<strong>TCC可以跨数据库、跨不同的业务系统来实现事务</strong>。</p><h2 id="_5-本地消息表" tabindex="-1"><a class="header-anchor" href="#_5-本地消息表"><span>5. <strong>本地消息表</strong></span></a></h2><p>本地消息表其实就是利用了 <strong>各系统本地的事务</strong>来实现分布式事务。</p><p>本地消息表顾名思义就是会有一张存放本地消息的表，一般都是放在数据库中，然后在执行业务的时候 <strong>将业务的执行和将消息放入消息表中的操作放在同一个事务中</strong>，这样就能保证消息放入本地表中业务肯定是执行成功的。</p><p>然后再去调用下一个操作，如果下一个操作调用成功了好说，消息表的消息状态可以直接改成已成功。</p><p>如果调用失败也没事，会有 <strong>后台任务定时去读取本地消息表</strong>，筛选出还未成功的消息再调用对应的服务，服务更新成功了再变更消息的状态。</p><p>这时候有可能消息对应的操作不成功，因此也需要重试，重试就得保证对应服务的方法是幂等的，而且一般重试会有最大次数，超过最大次数可以记录下报警让人工处理。</p><p>可以看到本地消息表其实实现的是<strong>最终一致性</strong>，容忍了数据暂时不一致的情况。</p><h2 id="_6-消息事务" tabindex="-1"><a class="header-anchor" href="#_6-消息事务"><span>6. <strong>消息事务</strong></span></a></h2><p>RocketMQ 就很好的支持了消息事务，让我们来看一下如何通过消息实现事务。</p><p>第一步先给 Broker 发送事务消息即半消息，<strong>半消息不是说一半消息，而是这个消息对消费者来说不可见</strong>，然后<strong>发送成功后发送方再执行本地事务</strong>。</p><p>再根据<strong>本地事务的结果向 Broker 发送 Commit 或者 RollBack 命令</strong>。</p><p>并且 RocketMQ 的发送方会提供一个<strong>反查事务状态接口</strong>，如果一段时间内半消息没有收到任何操作请求，那么 Broker 会通过反查接口得知发送方事务是否执行成功，然后执行 Commit 或者 RollBack 命令。</p><p>如果是 Commit 那么订阅方就能收到这条消息，然后再做对应的操作，做完了之后再消费这条消息即可。</p><p>如果是 RollBack 那么订阅方收不到这条消息，等于事务就没执行过。</p><p>可以看到通过 RocketMQ 还是比较容易实现的，RocketMQ 提供了事务消息的功能，我们只需要定义好事务反查接口即可。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301010749.png" alt="image-20221017151848307" tabindex="0" loading="lazy"><figcaption>image-20221017151848307</figcaption></figure><p>可以看到消息事务实现的也是最终一致性。</p><h2 id="_7-最大努力通知" tabindex="-1"><a class="header-anchor" href="#_7-最大努力通知"><span>7. <strong>最大努力通知</strong></span></a></h2><p>其实我觉得本地消息表也可以算最大努力，事务消息也可以算最大努力。</p><p>就本地消息表来说会有后台任务定时去查看未完成的消息，然后去调用对应的服务，当一个消息多次调用都失败的时候可以记录下然后引入人工，或者直接舍弃。这其实算是最大努力了。</p><p>事务消息也是一样，当半消息被commit了之后确实就是普通消息了，如果订阅者一直不消费或者消费不了则会一直重试，到最后进入死信队列。其实这也算最大努力。</p><p>所以<strong>最大努力通知其实只是表明了一种柔性事务的思想</strong>：我已经尽力我最大的努力想达成事务的最终一致了。</p><p>适用于对时间不敏感的业务，例如短信通知。</p><h2 id="_8-saga事务" tabindex="-1"><a class="header-anchor" href="#_8-saga事务"><span>8. Saga事务</span></a></h2><blockquote><p>详情可以查看上一篇文章<a href="https://java.isture.com/arch/distributed/arch-z-transection.html" target="_blank" rel="noopener noreferrer">分布式系统-分布式事务及实现方案</a></p></blockquote><p>Saga是由一系列的本地事务构成。每一个本地事务在更新完数据库之后，会发布一条消息或者一个事件来触发Saga中的下一个本地事务的执行。如果一个本地事务因为某些业务规则无法满足而失败，Saga会执行在这个失败的事务之前成功提交的所有事务的补偿操作。</p><p>Saga的实现有很多种方式，其中最流行的两种方式是：</p><ul><li><strong>基于事件的方式</strong>。这种方式没有协调中心，整个模式的工作方式就像舞蹈一样，各个舞蹈演员按照预先编排的动作和走位各自表演，最终形成一只舞蹈。处于当前Saga下的各个服务，会产生某类事件，或者监听其它服务产生的事件并决定是否需要针对监听到的事件做出响应。</li><li><strong>基于命令的方式</strong>。这种方式的工作形式就像一只乐队，由一个指挥家（协调中心）来协调大家的工作。协调中心来告诉Saga的参与方应该执行哪一个本地事务。</li></ul><h2 id="_9-总结" tabindex="-1"><a class="header-anchor" href="#_9-总结"><span>9. <strong>总结</strong></span></a></h2><p>可以看出 2PC 和 3PC 是一种强一致性事务，不过还是有数据不一致，阻塞等风险，而且只能用在数据库层面。</p><p>而 TCC 是一种补偿性事务思想，适用的范围更广，在业务层面实现，因此对业务的侵入性较大，每一个操作都需要实现对应的三个方法。</p><p>本地消息、事务消息和最大努力通知其实都是最终一致性事务，因此适用于一些对时间不敏感的业务。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/183753774" target="_blank" rel="noopener noreferrer">面试必问：分布式事务六种解决方案</a></p>`,139)]))}const c=s(i,[["render",l],["__file","arch-z-transection02.html.vue"]]),o=JSON.parse('{"path":"/posts/Architect/distributed/arch-z-transection02.html","title":"分布式系统-分布式事务(补充)","lang":"zh-CN","frontmatter":{"aliases":"分布式系统-分布式事务(补充)","tags":null,"cssclass":null,"source":null,"order":41,"category":["架构"],"created":"2024-04-24 14:35","updated":"2024-04-30 10:11","description":"分布式系统-分布式事务(补充) 1. 分布式事务 分布式事务顾名思义就是要在分布式系统中实现事务，它其实是由多个本地事务组合而成。 对于分布式事务而言几乎满足不了 ACID，其实对于单机事务而言大部分情况下也没有满足 ACID，不然怎么会有四种隔离级别呢？所以更别说分布在不同数据库或者不同应用上的分布式事务了。 我们先来看下 2PC。 2. 2PC 2...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/distributed/arch-z-transection02.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"分布式系统-分布式事务(补充)"}],["meta",{"property":"og:description","content":"分布式系统-分布式事务(补充) 1. 分布式事务 分布式事务顾名思义就是要在分布式系统中实现事务，它其实是由多个本地事务组合而成。 对于分布式事务而言几乎满足不了 ACID，其实对于单机事务而言大部分情况下也没有满足 ACID，不然怎么会有四种隔离级别呢？所以更别说分布在不同数据库或者不同应用上的分布式事务了。 我们先来看下 2PC。 2. 2PC 2..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301010616.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式系统-分布式事务(补充)\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301010616.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301010653.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301010675.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301010702.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301010726.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301010749.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 分布式事务","slug":"_1-分布式事务","link":"#_1-分布式事务","children":[]},{"level":2,"title":"2. 2PC","slug":"_2-2pc","link":"#_2-2pc","children":[{"level":3,"title":"2.1 简介","slug":"_2-1-简介","link":"#_2-1-简介","children":[]},{"level":3,"title":"2.2 流程图","slug":"_2-2-流程图","link":"#_2-2-流程图","children":[]},{"level":3,"title":"2.3 第二阶段提交失败处理？","slug":"_2-3-第二阶段提交失败处理","link":"#_2-3-第二阶段提交失败处理","children":[]},{"level":3,"title":"2.4 协调者故障分析","slug":"_2-4-协调者故障分析","link":"#_2-4-协调者故障分析","children":[]},{"level":3,"title":"2.5 协调者故障，通过选举得到新协调者","slug":"_2-5-协调者故障-通过选举得到新协调者","link":"#_2-5-协调者故障-通过选举得到新协调者","children":[]},{"level":3,"title":"2.6 伪代码","slug":"_2-6-伪代码","link":"#_2-6-伪代码","children":[]},{"level":3,"title":"2.7 总结","slug":"_2-7-总结","link":"#_2-7-总结","children":[]}]},{"level":2,"title":"3. 3PC","slug":"_3-3pc","link":"#_3-3pc","children":[{"level":3,"title":"3.1 简介","slug":"_3-1-简介","link":"#_3-1-简介","children":[]},{"level":3,"title":"3.2 流程图","slug":"_3-2-流程图","link":"#_3-2-流程图","children":[]},{"level":3,"title":"3.3 3PC 阶段变更有什么影响?","slug":"_3-3-3pc-阶段变更有什么影响","link":"#_3-3-3pc-阶段变更有什么影响","children":[]},{"level":3,"title":"3.4 3PC 超时能带来什么样的影响?","slug":"_3-4-3pc-超时能带来什么样的影响","link":"#_3-4-3pc-超时能带来什么样的影响","children":[]},{"level":3,"title":"3.5 3PC 的引入是为了解决什么问题？","slug":"_3-5-3pc-的引入是为了解决什么问题","link":"#_3-5-3pc-的引入是为了解决什么问题","children":[]},{"level":3,"title":"3.5 总结","slug":"_3-5-总结","link":"#_3-5-总结","children":[]}]},{"level":2,"title":"4. TCC","slug":"_4-tcc","link":"#_4-tcc","children":[{"level":3,"title":"4.1 简介","slug":"_4-1-简介","link":"#_4-1-简介","children":[]},{"level":3,"title":"4.2 流程图","slug":"_4-2-流程图","link":"#_4-2-流程图","children":[]},{"level":3,"title":"4.3 总结","slug":"_4-3-总结","link":"#_4-3-总结","children":[]}]},{"level":2,"title":"5. 本地消息表","slug":"_5-本地消息表","link":"#_5-本地消息表","children":[]},{"level":2,"title":"6. 消息事务","slug":"_6-消息事务","link":"#_6-消息事务","children":[]},{"level":2,"title":"7. 最大努力通知","slug":"_7-最大努力通知","link":"#_7-最大努力通知","children":[]},{"level":2,"title":"8. Saga事务","slug":"_8-saga事务","link":"#_8-saga事务","children":[]},{"level":2,"title":"9. 总结","slug":"_9-总结","link":"#_9-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":18.99,"words":5697},"filePathRelative":"posts/Architect/distributed/arch-z-transection02.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. <strong>分布式事务</strong></h2>\\n<p>分布式事务顾名思义就是要在分布式系统中实现事务，它其实是由多个本地事务组合而成。</p>\\n<p>对于分布式事务而言几乎满足不了 ACID，其实对于单机事务而言大部分情况下也没有满足 ACID，不然怎么会有四种隔离级别呢？所以更别说分布在不同数据库或者不同应用上的分布式事务了。</p>\\n<p>我们先来看下 2PC。</p>\\n<h2>2. <strong>2PC</strong></h2>\\n<h3>2.1 简介</h3>\\n<p>2PC（Two-phase commit protocol），中文叫二阶段提交。 <strong>二阶段提交是一种强一致性设计</strong>，2PC 引入一个事务协调者的角色来协调管理各参与者（也可称之为各本地资源）的提交和回滚，二阶段分别指的是准备（投票）和提交两个阶段。</p>","autoDesc":true}');export{c as comp,o as data};
