import{_ as i,c as e,a as t,o as l}from"./app-CpAF2rca.js";const n={};function r(o,a){return l(),e("div",null,a[0]||(a[0]=[t('<h1 id="分布式系统-分布式事务及实现方案" tabindex="-1"><a class="header-anchor" href="#分布式系统-分布式事务及实现方案"><span>分布式系统-分布式事务及实现方案</span></a></h1><blockquote><p><strong>事务</strong>是一个程序执行单元，里面的所有操作要么全部执行成功，要么全部执行失败。而<strong>分布式事务</strong>是指事务的参与者、支持事务的服务器、资源服务器以及事务管理器分别位于不同的分布式系统的不同节点之上。</p></blockquote><h2 id="_1-什么是分布式事务" tabindex="-1"><a class="header-anchor" href="#_1-什么是分布式事务"><span>1. 什么是分布式事务</span></a></h2><blockquote><p><strong>事务</strong>是一个程序执行单元，里面的所有操作要么全部执行成功，要么全部执行失败。在分布式系统中，这些操作可能是位于不同的服务中，那么如果也能保证这些操作要么全部执行成功要么全部执行失败呢？这便是分布式事务要解决的问题。</p></blockquote><p><strong>以一个网上的经典下单减库存例子为例</strong>：</p><p>单体应用所有的业务都使用一个数据库，整个下单流程或许只用在一个方法里同一个事务下操作数据库即可。此时所有操作都在一个事务里，要么全部提交，要么全部回滚。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009050.png" alt="image-20220620194336102" tabindex="0" loading="lazy"><figcaption>image-20220620194336102</figcaption></figure><p>但随着业务量不断增长，业务服务化拆分，就会分离出订单中心、库存中心等。而这样就造成业务间相互隔离，每个业务都维护着自己的数据库，数据的交换只能进行服务调用。</p><p>用户再下单时，创建订单和扣减库存，需要同时对订单DB和库存DB进行操作。两步操作必须同时成功，否则就会造成业务混乱，可此时我们只能保证自己服务的数据一致性，无法保证调用其他服务的操作是否成功，所以为了保证整个下单流程的数据一致性，就需要分布式事务介入。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009102.png" alt="image-20220620194459985" tabindex="0" loading="lazy"><figcaption>image-20220620194459985</figcaption></figure><h2 id="_2-如何理解分布式事务" tabindex="-1"><a class="header-anchor" href="#_2-如何理解分布式事务"><span>2. 如何理解分布式事务</span></a></h2><blockquote><p>分布式的理论角度和分布式事务的知识体系角度理解分布式事务。</p></blockquote><h3 id="_2-1-从分布式的理论的角度看" tabindex="-1"><a class="header-anchor" href="#_2-1-从分布式的理论的角度看"><span>2.1 从分布式的理论的角度看</span></a></h3><blockquote><p>分布式的理论基础是CAP，由于P(分区容错）是必选项，所以只能在AP或者CP中选择。</p></blockquote><ul><li><strong>分布式理论的CP</strong> -&gt; 刚性事务</li></ul><p>遵循ACID，对数据要求强一致性</p><ul><li><strong>分布式理论的AP+BASE</strong> -&gt; 柔性事务</li></ul><p>遵循BASE，允许一定时间内不同节点的数据不一致，但要求最终一致。</p><h3 id="_2-2-从分布式事务的体系看" tabindex="-1"><a class="header-anchor" href="#_2-2-从分布式事务的体系看"><span>2.2 从分布式事务的体系看</span></a></h3><p>如下图，可以帮助你构筑分布式事务的知识体系，一目了然。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009129.png" alt="image-20220620194648624" tabindex="0" loading="lazy"><figcaption>image-20220620194648624</figcaption></figure><h4 id="_2-2-1-刚性事务" tabindex="-1"><a class="header-anchor" href="#_2-2-1-刚性事务"><span>2.2.1 刚性事务</span></a></h4><p><strong>刚性事务</strong>：分布式理论的CP，遵循ACID，对数据要求强一致性。</p><ul><li><strong>XA协议</strong> 是一个基于数据库层面的分布式事务协议，其分为两部分：<strong>事务管理器（Transaction Manager）<strong>和</strong>本地资源管理器（Resource Manager）</strong>。事务管理器作为一个全局的调度者，负责对各个本地资源管理器统一号令提交或者回滚。主流的诸如Oracle、MySQL等数据库均已实现了XA接口。 <ul><li><strong>二阶提交协议（2PC）</strong>: 根据XA协议衍生出来而来; 引入一个作为协调者的组件来统一掌控所有参与者的操作结果并最终指示这些节点是否要把操作结果进行真正的提交; 参与者将操作成败通知协调者，再由协调者根据所有参与者的反馈情报决定各参与者是否要提交操作还是中止操作。所谓的两个阶段是指：第一阶段：准备阶段 (投票阶段) 和第二阶段：提交阶段（执行阶段）</li><li><strong>三阶提交协议（3PC）</strong>: 是对两段提交（2PC）的一种升级优化，<strong>3PC在2PC的第一阶段和第二阶段中插入一个准备阶段</strong>。保证了在最后提交阶段之前，各参与者节点的状态都一致。同时在协调者和参与者中都引入超时机制，当参与者各种原因未收到协调者的commit请求后，会对本地事务进行commit，不会一直阻塞等待，解决了2PC的单点故障问题，但3PC还是没能从根本上解决数据一致性的问题。</li></ul></li><li>Java事务规范 <ul><li><strong>JTA</strong>：Java事务API（Java Transaction API）是一个Java企业版的应用程序接口，在Java环境中，允许完成跨越多个XA资源的分布式事务。</li><li><strong>JTS</strong>：Java事务服务（Java Transaction Service）是J2EE平台提供了分布式事务服务的具体实现规范，j2ee服务器提供商根据JTS规范实现事务并提供JTA接口。</li></ul></li></ul><h4 id="_2-2-2-柔性事务" tabindex="-1"><a class="header-anchor" href="#_2-2-2-柔性事务"><span>2.2.2 柔性事务</span></a></h4><p><strong>柔性事务</strong>：分布式理论的AP，遵循BASE，允许一定时间内不同节点的数据不一致，但要求最终一致。</p><ul><li>基于业务层 <ul><li><strong>TCC</strong>: TCC（Try-Confirm-Cancel）又被称补偿事务，TCC与2PC的思想很相似，事务处理流程也很相似，但2PC是应用于在DB层面，TCC则可以理解为在应用层面的2PC，是需要我们编写业务逻辑来实现。</li><li><strong>SAGA</strong>：Saga是由一系列的本地事务构成。每一个本地事务在更新完数据库之后，会发布一条消息或者一个事件来触发Saga中的下一个本地事务的执行。如果一个本地事务因为某些业务规则无法满足而失败，Saga会执行在这个失败的事务之前成功提交的所有事务的补偿操作。Saga的实现有很多种方式，其中最流行的两种方式是：基于事件的方式和基于命令的方式。</li></ul></li><li>最终一致性 <ul><li><strong>消息表</strong>：本地消息表的方案最初是由 eBay 提出，核心思路是将分布式事务拆分成本地事务进行处理。</li><li><strong>消息队列</strong>：基于 MQ 的分布式事务方案其实是对本地消息表的封装，将本地消息表基于 MQ 内部，其他方面的协议基本与本地消息表一致。</li><li><strong>最大努力通知</strong>：最大努力通知也称为定期校对，是对MQ事务方案的进一步优化。它在事务主动方增加了消息校对的接口，如果事务被动方没有接收到消息，此时可以调用事务主动方提供的消息校对的接口主动获取。</li></ul></li></ul><h2 id="_3-分布式事务方案之刚性事务" tabindex="-1"><a class="header-anchor" href="#_3-分布式事务方案之刚性事务"><span>3. 分布式事务方案之刚性事务</span></a></h2><blockquote><p>说到刚性事务，首先要讲的是XA协议。XA协议是一个基于<strong>数据库</strong>的分布式事务协议，其分为两部分：<strong>事务管理器（Transaction Manager）**和**本地资源管理器（Resource Manager）</strong>。事务管理器作为一个全局的调度者，负责对各个本地资源管理器统一号令提交或者回滚。<code>二阶提交协议（2PC）</code>和<code>三阶提交协议（3PC）</code>就是根据此协议衍生出来而来。主流的诸如Oracle、MySQL等数据库均已实现了XA接口。</p></blockquote><p>XA接口是双向的系统接口，在事务管理器（Transaction Manager）以及一个或多个资源管理器（Resource Manager）之间形成通信桥梁。也就是说，在基于XA的一个事务中，我们可以针对多个资源进行事务管理，例如一个系统访问多个数据库，或即访问数据库、又访问像消息中间件这样的资源。这样我们就能够实现在多个数据库和消息中间件直接实现全部提交、或全部取消的事务。<strong>XA规范不是java的规范，而是一种通用的规范; Java 中的规范是JTA和JTS：Java事务API（Java Transaction API）是一个Java企业版的应用程序接口，在Java环境中，允许完成跨越多个XA资源的分布式事务；Java事务服务（Java Transaction Service）是J2EE平台提供了分布式事务服务的具体实现规范，j2ee服务器提供商根据JTS规范实现事务并提供JTA接口</strong>。</p><h3 id="_3-1-两段提交-2pc" tabindex="-1"><a class="header-anchor" href="#_3-1-两段提交-2pc"><span>3.1 两段提交（2PC）</span></a></h3><blockquote><p>引入一个作为协调者（coordinator）的组件来统一掌控所有参与者（participant）的操作结果，并最终指示这些节点是否要把操作结果进行真正的提交。</p></blockquote><p>简单而言：参与者（participant）用来管理资源，协调者（coordinator）用来协调事务状态</p><p>两段提交（2PC - Prepare &amp; Commit）是指两个阶段的提交：</p><ul><li>第一阶段: 准备阶段； <ul><li>协调者向所有参与者发送 REQUEST-TO-PREPARE</li><li>当参与者收到REQUEST-TO-PREPARE 消息后, 它向协调者发送消息PREPARED或者NO，表示事务是否准备好；如果发送的是NO，那么事务要回滚；</li></ul></li><li>第二阶段: 提交阶段。 <ul><li>协调者收集所有参与者的返回消息, 如果所有的参与者都回复的是PREPARED， 那么协调者向所有参与者发送COMMIT 消息；否则，协调者向所有回复PREPARED的参与者发送ABORT消息；</li><li>参与者如果回复了PREPARED消息并且收到协调者发来的COMMIT消息，或者它收到ABORT消息，它将执行提交或回滚，并向协调者发送DONE消息以确认。</li></ul></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009159.png" alt="image-20220620202716714" tabindex="0" loading="lazy"><figcaption>image-20220620202716714</figcaption></figure><p><strong>两段提交（2PC）的缺点</strong>：</p><p>二阶段提交看似能够提供原子性的操作，但它存在着严重的缺陷：</p><ul><li><strong>网络抖动导致的数据不一致</strong>：第二阶段中协调者向参与者发送commit命令之后，一旦此时发生网络抖动，导致一部分参与者接收到了commit请求并执行，可其他未接到commit请求的参与者无法执行事务提交。进而导致整个分布式系统出现了数据不一致。</li><li><strong>超时导致的同步阻塞问题</strong>：2PC中的所有的参与者节点都为事务阻塞型，当某一个参与者节点出现通信超时，其余参与者都会被动阻塞占用资源不能释放。</li><li><strong>单点故障的风险</strong>：由于严重的依赖协调者，一旦协调者发生故障，而此时参与者还都处于锁定资源的状态，无法完成事务commit操作。虽然协调者出现故障后，会重新选举一个协调者，可无法解决因前一个协调者宕机导致的参与者处于阻塞状态的问题。</li></ul><p><strong>2PC小结</strong></p><p>2PC除本身的算法局限外，还有一个使用上的限制，就是它主要用在两个数据库之间（数据库实现了XA协议）。两个系统之间是无法使用2PC的，因为不会直接在底层的两个业务数据库之间做一致性，而是在两个服务上面实现一致性。</p><blockquote><p><em>2PC只适用两个数据库（数据库实现了XA协议）之间；2PC有诸多问题和不便，在实践中一般很少使用</em>。</p></blockquote><h3 id="_3-2-三段提交-3pc" tabindex="-1"><a class="header-anchor" href="#_3-2-三段提交-3pc"><span>3.2 三段提交（3PC）</span></a></h3><blockquote><p>三段提交（3PC）是对两段提交（2PC）的一种升级优化，<strong>3PC在2PC的第一阶段和第二阶段中插入一个准备阶段</strong>。保证了在最后提交阶段之前，各参与者节点的状态都一致。同时在协调者和参与者中都引入超时机制，当参与者各种原因未收到协调者的commit请求后，会对本地事务进行commit，不会一直阻塞等待，解决了2PC的单点故障问题，但3PC还是没能从根本上解决数据一致性的问题。</p></blockquote><p><strong>3PC的三个阶段分别是CanCommit、PreCommit、DoCommit</strong>：</p><ul><li><strong>CanCommit</strong>：协调者向所有参与者发送CanCommit命令，询问是否可以执行事务提交操作。如果全部响应YES则进入下一个阶段。</li><li><strong>PreCommit</strong>：协调者向所有参与者发送PreCommit命令，询问是否可以进行事务的预提交操作，参与者接收到PreCommit请求后，如参与者成功的执行了事务操作，则返回Yes响应，进入最终commit阶段。一旦参与者中有向协调者发送了No响应，或因网络造成超时，协调者没有接到参与者的响应，协调者向所有参与者发送abort请求，参与者接受abort命令执行事务的中断。</li><li><strong>DoCommit</strong>：在前两个阶段中所有参与者的响应反馈均是YES后，协调者向参与者发送DoCommit命令正式提交事务，如协调者没有接收到参与者发送的ACK响应，会向所有参与者发送abort请求命令，执行事务的中断。</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009182.png" alt="image-20220620203825150" tabindex="0" loading="lazy"><figcaption>image-20220620203825150</figcaption></figure><p><strong>3PC存在的问题</strong></p><p>3PC工作在同步网络模型上，它假设消息传输时间是有上界的，只存在机器失败而不存在消息失败。这个假设太强，现实的情形是，机器失败是无法完美地检测出来的，消息传输可能因为网络拥堵花费很多时间。同时, 说阻塞是相对, 存在协调者和参与者同时失败的情形下, 3PC事务依然会阻塞。实际上，很少会有系统实现3PC，多数现实的系统会通过复制状态机解决2PC阻塞的问题。比如，如果失败模型不是失败-停止, 而是消息失败（消息延迟或网络分区），那样3PC会产生不一致的情形。</p><p><strong>3PC小结</strong></p><blockquote><p><em>3PC并没有完美解决2PC的阻塞，也引入了新的问题（不一致问题），所以3PC很少会被真正的使用</em>。</p></blockquote><h2 id="_4-分布式事务方案之柔性事务" tabindex="-1"><a class="header-anchor" href="#_4-分布式事务方案之柔性事务"><span>4. 分布式事务方案之柔性事务</span></a></h2><blockquote><p>柔性事务：分布式理论的AP，遵循BASE，允许一定时间内不同节点的数据不一致，但要求最终一致。</p></blockquote><h3 id="_4-1-补偿事务-tcc" tabindex="-1"><a class="header-anchor" href="#_4-1-补偿事务-tcc"><span>4.1 补偿事务 (TCC)</span></a></h3><blockquote><p>TCC（Try-Confirm-Cancel）又被称补偿事务，TCC与2PC的思想很相似，事务处理流程也很相似，但<strong>2PC是应用于在DB层面，TCC则可以理解为在应用层面的2PC，是需要我们编写业务逻辑来实现</strong>。</p></blockquote><p>TCC它的核心思想是：&quot;针对每个操作都要注册一个与其对应的确认（Try）和补偿（Cancel）&quot;。</p><p>还拿下单扣库存解释下它的三个操作：</p><ul><li><strong>Try阶段</strong>：下单时通过Try操作去扣除库存预留资源。</li><li><strong>Confirm阶段</strong>：确认执行业务操作，在只预留的资源基础上，发起购买请求。</li><li><strong>Cancel阶段</strong>：只要涉及到的相关业务中，有一个业务方预留资源未成功，则取消所有业务资源的预留请求。</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009223.png" alt="image-20220620204222513" tabindex="0" loading="lazy"><figcaption>image-20220620204222513</figcaption></figure><p><strong>TCC的缺点</strong>：</p><ol><li><p>空回滚</p><p>当一个分支事务所在的服务发生宕机或者网络异常导致调用失败，并未执行try方法，当恢复后事务执行回滚操作就会调用此分支事务的cancel方法,如果cancel方法不能处理此种情况就会出现空回滚。</p><p>是否出现空回滚，我们需要需要判断是否执行了try方法，如果执行了就没有空回滚。解决方法就是当主业务发起事务时，生成一个全局事务记录，并生成一个全局唯一ID，贯穿整个事务，再创建一张分支事务记录表，用于记录分支事务，try执行时将全局事务ID和分支事务ID存入分支事务表中，表示执行了try阶段，当cancel执行时，先判断表中是否有该全局事务ID的数据，如果有则回滚，否则不做任何操作。比如seata的AT模式中就有分支事务表。</p></li><li><p>幂等问题</p><p>由于服务宕机或者网络问题，方法的调用可能出现超时，为了保证事务正常执行我们往往会加入重试的机制，因此就需要保证confirm和cancel阶段操作的幂等性。</p><p>我们可以在分支事务记录表中增加事务执行状态，每次执行confirm和cancel方法时都查询该事务的执行状态，以此判断事务的幂等性。</p></li><li><p>悬挂问题</p><p>TCC中，在调用try之前会先注册分支事务，注册分支事务之后，调用出现超时，此时try请求还未到达对应的服务，因为调用超时了，所以会执行cancel调用，此时cancel已经执行完了，然而这个时候try请求到达了，这个时候执行了try之后就没有后续的操作了，就会导致资源挂起，无法释放。</p><p>执行try方法时我们可以判断confirm或者cancel方法是否执行，如果执行了那么就不执行try阶段。同样借助分支事务表中事务的执行状态。如果已经执行了confirm或者cancel那么try就执行。</p></li></ol><h3 id="_4-2-saga事务" tabindex="-1"><a class="header-anchor" href="#_4-2-saga事务"><span>4.2 Saga事务</span></a></h3><blockquote><p>Saga是分布式事务领域最有名气的解决方案之一，最初出现在1987年Hector Garcaa-Molrna &amp; Kenneth Salem发表的论文SAGAS里。 如下内容主要来源于<a href="https://blog.couchbase.com/saga-pattern-implement-business-transactions-using-microservices-part/" target="_blank" rel="noopener noreferrer">这里</a>，然后由flyingww翻译整理在<a href="https://zhuanlan.zhihu.com/p/95852045" target="_blank" rel="noopener noreferrer">知乎</a>。</p></blockquote><p>Saga是由一系列的本地事务构成。每一个本地事务在更新完数据库之后，会发布一条消息或者一个事件来触发Saga中的下一个本地事务的执行。如果一个本地事务因为某些业务规则无法满足而失败，Saga会执行在这个失败的事务之前成功提交的所有事务的补偿操作。</p><p>Saga的实现有很多种方式，其中最流行的两种方式是：</p><ul><li><strong>基于事件的方式</strong>。这种方式没有协调中心，整个模式的工作方式就像舞蹈一样，各个舞蹈演员按照预先编排的动作和走位各自表演，最终形成一只舞蹈。处于当前Saga下的各个服务，会产生某类事件，或者监听其它服务产生的事件并决定是否需要针对监听到的事件做出响应。</li><li><strong>基于命令的方式</strong>。这种方式的工作形式就像一只乐队，由一个指挥家（协调中心）来协调大家的工作。协调中心来告诉Saga的参与方应该执行哪一个本地事务。</li></ul><p>我们继续以订单流程为例，说明一下该模式。</p><p>假设一个完整的订单流程包含了如下几个服务：</p><ol><li>Order Service：订单服务</li><li>Payment Service：支付服务</li><li>Stock Service：库存服务</li><li>Delivery Service：物流服务</li></ol><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009250.png" alt="image-20220620204857819" tabindex="0" loading="lazy"><figcaption>image-20220620204857819</figcaption></figure><h4 id="_4-2-1-基于事件的方式" tabindex="-1"><a class="header-anchor" href="#_4-2-1-基于事件的方式"><span>4.2.1 基于事件的方式</span></a></h4><p>在基于事件的方式中，第一个服务执行完本地事务之后，会产生一个事件。其它服务会监听这个事件，触发该服务本地事务的执行，并产生新的事件。</p><p>采用基于事件的saga模式的订单处理流程如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009276.png" alt="image-20220620204955668" tabindex="0" loading="lazy"><figcaption>image-20220620204955668</figcaption></figure><ol><li>订单服务创建一笔新订单，将订单状态设置为&quot;待处理&quot;，产生事件ORDER_CREATED_EVENT。</li><li>支付服务监听ORDER_CREATED_EVENT，完成扣款并产生事件BILLED_ORDER_EVENT。</li><li>库存服务监听BILLED_ORDER_EVENT，完成库存扣减和备货，产生事件ORDER_PREPARED_EVENT。</li><li>物流服务监听ORDER_PREPARED_EVENT，完成商品配送，产生事件ORDER_DELIVERED_EVENT。</li><li>订单服务监听ORDER_DELIVERED_EVENT，将订单状态更新为&quot;完成&quot;。</li></ol><p>在这个流程中，订单服务很可能还会监听BILLED_ORDER_EVENT，ORDER_PREPARED_EVENT来完成订单状态的实时更新。将订单状态分别更新为&quot;已经支付&quot;和&quot;已经出库&quot;等状态来及时反映订单的最新状态。</p><h5 id="_4-2-1-1-该模式下分布式事务的回滚" tabindex="-1"><a class="header-anchor" href="#_4-2-1-1-该模式下分布式事务的回滚"><span>4.2.1.1 <strong>该模式下分布式事务的回滚</strong></span></a></h5><p>为了在异常情况下回滚整个分布式事务，我们需要为相关服务提供补偿操作接口。</p><p>假设库存服务由于库存不足没能正确完成备货，我们可以按照下面的流程来回滚整个Saga事务：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009300.png" alt="image-image-20220620205136726.png" tabindex="0" loading="lazy"><figcaption>image-image-20220620205136726.png</figcaption></figure><ol><li>库存服务产生事件PRODUCT_OUT_OF_STOCK_EVENT。</li><li>订单服务和支付服务都会监听该事件并做出响应： <ol><li>支付服务完成退款。</li><li>订单服务将订单状态设置为&quot;失败&quot;。</li></ol></li></ol><h5 id="_4-2-1-2-基于事件方式的优缺点" tabindex="-1"><a class="header-anchor" href="#_4-2-1-2-基于事件方式的优缺点"><span>4.2.1.2 <strong>基于事件方式的优缺点</strong></span></a></h5><p><strong>优点</strong>：简单且容易理解。各参与方相互之间无直接沟通，完全解耦。这种方式比较适合整个分布式事务只有2-4个步骤的情形。</p><p><strong>缺点</strong>：这种方式如果涉及比较多的业务参与方，则比较容易失控。各业务参与方可随意监听对方的消息，以至于最后没人知道到底有哪些系统在监听哪些消息。更悲催的是，这个模式还可能产生环形监听，也就是两个业务方相互监听对方所产生的事件。</p><p>接下来，我们将介绍如何使用命令的方式来克服上面提到的缺点。</p><h4 id="_4-2-2-基于命令的方式" tabindex="-1"><a class="header-anchor" href="#_4-2-2-基于命令的方式"><span>4.2.2 基于命令的方式</span></a></h4><p>在基于命令的方式中，我们会定义一个新的服务，这个服务扮演的角色就和一支交响乐乐队的指挥一样，告诉各个业务参与方，在什么时候做什么事情。我们管这个新服务叫做协调中心。协调中心通过命令/回复的方式来和Saga中其它服务进行交互。</p><p>我们继续以之前的订单流程来举例。下图中的Order Saga Orchestrator就是新引入的协调中心。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009327.png" alt="image-20220620205512563" tabindex="0" loading="lazy"><figcaption>image-20220620205512563</figcaption></figure><ol><li>订单服务创建一笔新订单，将订单状态设置为&quot;待处理&quot;，然后让Order Saga Orchestrator（OSO）开启创建订单事务。</li><li>OSO发送一个&quot;支付命令&quot;给支付服务，支付服务完成扣款并回复&quot;支付完成&quot;消息。</li><li>OSO发送一个&quot;备货命令&quot;给库存服务，库存服务完成库存扣减和备货，并回复&quot;出库&quot;消息。</li><li>OSO发送一个&quot;配送命令&quot;给物流服务，物流服务完成配送，并回复&quot;配送完成&quot;消息。</li><li>OSO向订单服务发送&quot;订单结束命令&quot;给订单服务，订单服务将订单状态设置为&quot;完成&quot;。</li><li>OSO清楚一个订单处理Saga的具体流程，并在出现异常时向相关服务发送补偿命令来回滚整个分布式事务。</li></ol><p>实现协调中心的一个比较好的方式是使用<strong>状态机(Sate Machine)</strong>。</p><h5 id="_4-2-2-1-该模式下分布式事务的回滚" tabindex="-1"><a class="header-anchor" href="#_4-2-2-1-该模式下分布式事务的回滚"><span>4.2.2.1 <strong>该模式下分布式事务的回滚</strong></span></a></h5><p>该模式下的回滚流程如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009347.png" alt="image-20220620205704545" tabindex="0" loading="lazy"><figcaption>image-20220620205704545</figcaption></figure><ol><li>库存服务回复OSO一个&quot;库存不足&quot;消息。</li><li>OSO意识到该分布式事务失败了，触发回滚流程：</li><li>OSO发送&quot;退款命令&quot;给支付服务，支付服务完成退款并回复&quot;退款成功&quot;消息。</li><li>OSO向订单服务发送&quot;将订单状态改为失败命令&quot;，订单服务将订单状态更新为&quot;失败&quot;。</li></ol><h5 id="_4-2-2-2-基于命令方式的优缺点" tabindex="-1"><a class="header-anchor" href="#_4-2-2-2-基于命令方式的优缺点"><span>4.2.2.2 <strong>基于命令方式的优缺点</strong></span></a></h5><p>优点：</p><ol><li>避免了业务方之间的环形依赖。</li><li>将分布式事务的管理交由协调中心管理，协调中心对整个逻辑非常清楚。</li><li>减少了业务参与方的复杂度。这些业务参与方不再需要监听不同的消息，只是需要响应命令并回复消息。</li><li>测试更容易（分布式事务逻辑存在于协调中心，而不是分散在各业务方）。</li><li>回滚也更容易。</li></ol><p>缺点：</p><ol><li>一个可能的缺点就是需要维护协调中心，而这个协调中心并不属于任何业务方。</li></ol><h4 id="_4-2-3-saga模式建议" tabindex="-1"><a class="header-anchor" href="#_4-2-3-saga模式建议"><span>4.2.3 Saga模式建议</span></a></h4><ol><li>给每一个分布式事务创建一个唯一的Tx id。这个唯一的Tx id可以用来在各个业务参与方沟通时精确定位哪一笔分布式事务。</li><li>对于基于命令的方式，在命令中携带回复地址。这种方式可以让服务同时响应多个协调中心请求。</li><li>幂等性。幂等性能够增加系统的容错性，让各个业务参与方服务提供幂等性操作，能够在遇到异常情况下进行重试。</li><li>尽量在命令或者消息中携带下游处理需要的业务数据，避免下游处理时需要调用消息产生方接口获取更多数据。减少系统之间的相互依赖。</li></ol><h3 id="_4-3-本地消息表" tabindex="-1"><a class="header-anchor" href="#_4-3-本地消息表"><span>4.3 本地消息表</span></a></h3><blockquote><p>本地消息表的方案最初是由 eBay 提出，核心思路是将分布式事务拆分成本地事务进行处理。</p></blockquote><p>角色：</p><ul><li>事务主动方</li><li>事务被动方</li></ul><p>通过在事务主动发起方额外新建事务消息表，事务发起方处理业务和记录事务消息在本地事务中完成，轮询事务消息表的数据发送事务消息，事务被动方基于消息中间件消费事务消息表中的事务。</p><p>这样可以避免以下两种情况导致的数据不一致性：</p><ul><li>业务处理成功、事务消息发送失败</li><li>业务处理失败、事务消息发送成功</li></ul><p>整体的流程如下图：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009367.png" alt="image-20220620210356716" tabindex="0" loading="lazy"><figcaption>image-20220620210356716</figcaption></figure><p>上图中整体的处理步骤如下：</p><ol><li>事务主动方在同一个本地事务中处理业务和写消息表操作</li><li>事务主动方通过消息中间件，通知事务被动方处理事务通知事务待消息。消息中间件可以基于 Kafka、RocketMQ 消息队列，事务主动方主动写消息到消息队列，事务消费方消费并处理消息队列中的消息。</li><li>事务被动方通过消息中间件，通知事务主动方事务已处理的消息。</li><li>事务主动方接收中间件的消息，更新消息表的状态为已处理。</li></ol><p>一些必要的容错处理如下：</p><ul><li>当1处理出错，由于还在事务主动方的本地事务中，直接回滚即可</li><li>当2,3处理出错，由于事务主动方本地保存了消息，只需要轮询消息重新通过消息中间件发送，事务被动方重新读取消息处理业务即可。</li><li>如果是业务上处理失败，事务被动方可以发消息给事务主动方回滚事务</li><li>如果事务被动方已经消费了消息，事务主动方需要回滚事务的话，需要发消息通知事务主动方进行回滚事务。</li></ul><p><strong>优点</strong></p><ul><li>从应用设计开发的角度实现了消息数据的可靠性，消息数据的可靠性不依赖于消息中间件，弱化了对 MQ 中间件特性的依赖。</li><li>方案轻量，容易实现。</li></ul><p><strong>缺点</strong></p><ul><li>与具体的业务场景绑定，耦合性强，不可公用。</li><li>消息数据与业务数据同库，占用业务系统资源。</li><li>业务系统在使用关系型数据库的情况下，消息服务性能会受到关系型数据库并发性能的局限。</li></ul><h3 id="_4-4-mq事务方案-可靠消息事务" tabindex="-1"><a class="header-anchor" href="#_4-4-mq事务方案-可靠消息事务"><span>4.4 MQ事务方案（可靠消息事务）</span></a></h3><blockquote><p>基于 MQ 的分布式事务方案其实是对本地消息表的封装，将本地消息表基于 MQ 内部，其他方面的协议基本与本地消息表一致。</p></blockquote><p>MQ事务方案整体流程和本地消息表的流程很相似，如下图：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009392.png" alt="image-20220620210812437" tabindex="0" loading="lazy"><figcaption>image-20220620210812437</figcaption></figure><p>从上图可以看出和本地消息表方案唯一不同就是将本地消息表存在了MQ内部，而不是业务数据库中。</p><p>那么MQ内部的处理尤为重要，下面主要基于 RocketMQ 4.3 之后的版本介绍 MQ 的分布式事务方案。</p><p>在本地消息表方案中，保证事务主动方发写业务表数据和写消息表数据的一致性是基于数据库事务，RocketMQ 的事务消息相对于普通 MQ提供了 2PC 的提交接口，方案如下：</p><h4 id="_4-4-1-正常情况-事务主动方发消息" tabindex="-1"><a class="header-anchor" href="#_4-4-1-正常情况-事务主动方发消息"><span>4.4.1 <strong>正常情况：事务主动方发消息</strong></span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009415.png" alt="image-20220620210923960" tabindex="0" loading="lazy"><figcaption>image-20220620210923960</figcaption></figure><p>这种情况下，事务主动方服务正常，没有发生故障，发消息流程如下：</p><ul><li>发送方向 MQ 服务端(MQ Server)发送 half 消息。</li><li>MQ Server 将消息持久化成功之后，向发送方 ack 确认消息已经发送成功。</li><li>发送方开始执行本地事务逻辑。</li><li>发送方根据本地事务执行结果向 MQ Server 提交二次确认（commit 或是 rollback）。</li><li>MQ Server 收到 commit 状态则将半消息标记为可投递，订阅方最终将收到该消息；MQ Server 收到 rollback 状态则删除半消息，订阅方将不会接受该消息。</li></ul><h4 id="_4-4-2-异常情况-事务主动方消息恢复" tabindex="-1"><a class="header-anchor" href="#_4-4-2-异常情况-事务主动方消息恢复"><span>4.4.2 <strong>异常情况：事务主动方消息恢复</strong></span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009440.png" alt="image-20220620211120347" tabindex="0" loading="lazy"><figcaption>image-20220620211120347</figcaption></figure><p>在断网或者应用重启等异常情况下，图中 4 提交的二次确认超时未到达 MQ Server，此时处理逻辑如下：</p><ul><li>MQ Server 对该消息发起消息回查。</li><li>发送方收到消息回查后，需要检查对应消息的本地事务执行的最终结果。</li><li>发送方根据检查得到的本地事务的最终状态再次提交二次确认。</li><li>MQ Server基于 commit/rollback 对消息进行投递或者删除。</li></ul><h4 id="_4-4-3-优点" tabindex="-1"><a class="header-anchor" href="#_4-4-3-优点"><span>4.4.3 <strong>优点</strong></span></a></h4><p>相比本地消息表方案，MQ 事务方案优点是：</p><ul><li>消息数据独立存储 ，降低业务系统与消息系统之间的耦合。</li><li>吞吐量大于使用本地消息表方案。</li></ul><h4 id="_4-4-4-缺点" tabindex="-1"><a class="header-anchor" href="#_4-4-4-缺点"><span>4.4.4 <strong>缺点</strong></span></a></h4><ul><li>一次消息发送需要两次网络请求(half 消息 + commit/rollback 消息) 。</li><li>业务处理服务需要实现消息状态回查接口。</li></ul><h3 id="_4-5-最大努力通知" tabindex="-1"><a class="header-anchor" href="#_4-5-最大努力通知"><span>4.5 最大努力通知</span></a></h3><blockquote><p>最大努力通知也称为定期校对，是对MQ事务方案的进一步优化。它在事务主动方增加了消息校对的接口，如果事务被动方没有接收到消息，此时可以调用事务主动方提供的消息校对的接口主动获取。</p></blockquote><p>最大努力通知的整体流程如下图：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009467.png" alt="image-20220620211354603" tabindex="0" loading="lazy"><figcaption>image-20220620211354603</figcaption></figure><p>在可靠消息事务中，事务主动方需要将消息发送出去，并且消息接收方成功接收，这种可靠性发送是由事务主动方保证的；</p><p>但是最大努力通知，事务主动方尽最大努力（重试，轮询....）将事务发送给事务接收方，但是仍然存在消息接收不到，此时需要事务被动方主动调用事务主动方的消息校对接口查询业务消息并消费，这种通知的可靠性是由事务被动方保证的。</p><p>最大努力通知适用于业务通知类型，<strong>例如微信交易的结果，就是通过最大努力通知方式通知各个商户，既有回调通知，也有交易查询接口</strong>。</p><h2 id="_5-分布式事务的中间件seata" tabindex="-1"><a class="header-anchor" href="#_5-分布式事务的中间件seata"><span>5. 分布式事务的中间件Seata</span></a></h2><blockquote><p>Seata 是一款开源的分布式事务解决方案，致力于提供高性能和简单易用的分布式事务服务。Seata 将为用户提供了 AT、TCC、SAGA 和 XA 事务模式，为用户打造一站式的分布式解决方案。如下内容来源于<a href="https://seata.io/zh-cn/docs/overview/what-is-seata.html" target="_blank" rel="noopener noreferrer">Seata官网</a></p></blockquote><ul><li><strong>TC (Transaction Coordinator) - 事务协调者</strong>: 维护全局和分支事务的状态，驱动全局事务提交或回滚。</li><li><strong>TM (Transaction Manager) - 事务管理器</strong>: 定义全局事务的范围：开始全局事务、提交或回滚全局事务。</li><li><strong>RM (Resource Manager) - 资源管理器</strong>: 管理分支事务处理的资源，与TC交谈以注册分支事务和报告分支事务的状态，并驱动分支事务提交或回滚。</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009492.png" alt="image-20220620211847193" tabindex="0" loading="lazy"><figcaption>image-20220620211847193</figcaption></figure><h3 id="_5-1-seata-at-模式" tabindex="-1"><a class="header-anchor" href="#_5-1-seata-at-模式"><span>5.1 Seata AT 模式</span></a></h3><h4 id="_5-1-1-前提" tabindex="-1"><a class="header-anchor" href="#_5-1-1-前提"><span>5.1.1 <strong>前提</strong></span></a></h4><ul><li>基于支持本地 ACID 事务的关系型数据库。</li><li>Java 应用，通过 JDBC 访问数据库。</li></ul><h4 id="_5-1-2-整体机制" tabindex="-1"><a class="header-anchor" href="#_5-1-2-整体机制"><span>5.1.2 <strong>整体机制</strong></span></a></h4><p>两阶段提交协议的演变：</p><ul><li>一阶段：业务数据和回滚日志记录在同一个本地事务中提交，释放本地锁和连接资源。</li><li>二阶段： <ul><li>提交异步化，非常快速地完成。</li><li>回滚通过一阶段的回滚日志进行反向补偿。</li></ul></li></ul><h4 id="_5-1-3-写隔离" tabindex="-1"><a class="header-anchor" href="#_5-1-3-写隔离"><span>5.1.3 <strong>写隔离</strong></span></a></h4><ul><li>一阶段本地事务提交前，需要确保先拿到 全局锁 。</li><li>拿不到 全局锁 ，不能提交本地事务。</li><li>拿 全局锁 的尝试被限制在一定范围内，超出范围将放弃，并回滚本地事务，释放本地锁。</li></ul><p>以一个示例来说明：</p><p>两个全局事务 tx1 和 tx2，分别对 a 表的 m 字段进行更新操作，m 的初始值 1000。</p><p>tx1 先开始，开启本地事务，拿到本地锁，更新操作 m = 1000 - 100 = 900。本地事务提交前，先拿到该记录的 全局锁 ，本地提交释放本地锁。 tx2 后开始，开启本地事务，拿到本地锁，更新操作 m = 900 - 100 = 800。本地事务提交前，尝试拿该记录的 全局锁 ，tx1 全局提交前，该记录的全局锁被 tx1 持有，tx2 需要重试等待 全局锁 。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009523.png" alt="image-20220620212124418" tabindex="0" loading="lazy"><figcaption>image-20220620212124418</figcaption></figure><p>tx1 二阶段全局提交，释放 全局锁 。tx2 拿到 全局锁 提交本地事务。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009543.png" alt="image-20220620212145672" tabindex="0" loading="lazy"><figcaption>image-20220620212145672</figcaption></figure><p>如果 tx1 的二阶段全局回滚，则 tx1 需要重新获取该数据的本地锁，进行反向补偿的更新操作，实现分支的回滚。</p><p>此时，如果 tx2 仍在等待该数据的 全局锁，同时持有本地锁，则 tx1 的分支回滚会失败。分支的回滚会一直重试，直到 tx2 的 全局锁 等锁超时，放弃 全局锁 并回滚本地事务释放本地锁，tx1 的分支回滚最终成功。</p><p>因为整个过程 全局锁 在 tx1 结束前一直是被 tx1 持有的，所以不会发生 脏写 的问题。</p><h4 id="_5-1-4-读隔离" tabindex="-1"><a class="header-anchor" href="#_5-1-4-读隔离"><span>5.1.4 <strong>读隔离</strong></span></a></h4><p>在数据库本地事务隔离级别 读已提交（Read Committed） 或以上的基础上，Seata（AT 模式）的默认全局隔离级别是 读未提交（Read Uncommitted） 。</p><p>如果应用在特定场景下，必需要求全局的 读已提交 ，目前 Seata 的方式是通过 SELECT FOR UPDATE 语句的代理。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009572.png" alt="image-20220620212306075" tabindex="0" loading="lazy"><figcaption>image-20220620212306075</figcaption></figure><p>SELECT FOR UPDATE 语句的执行会申请 全局锁 ，如果 全局锁 被其他事务持有，则释放本地锁（回滚 SELECT FOR UPDATE 语句的本地执行）并重试。这个过程中，查询是被 block 住的，直到 全局锁 拿到，即读取的相关数据是 已提交 的，才返回。</p><p>出于总体性能上的考虑，Seata 目前的方案并没有对所有 SELECT 语句都进行代理，仅针对 FOR UPDATE 的 SELECT 语句。</p><h3 id="_5-2-seata-xa-模式" tabindex="-1"><a class="header-anchor" href="#_5-2-seata-xa-模式"><span>5.2 Seata XA 模式</span></a></h3><h4 id="_5-2-1-前提" tabindex="-1"><a class="header-anchor" href="#_5-2-1-前提"><span>5.2.1 前提</span></a></h4><ul><li>支持XA 事务的数据库。</li><li>Java 应用，通过 JDBC 访问数据库。</li></ul><h4 id="_5-2-2-整体机制" tabindex="-1"><a class="header-anchor" href="#_5-2-2-整体机制"><span>5.2.2 整体机制</span></a></h4><p>在 Seata 定义的分布式事务框架内，利用事务资源（数据库、消息服务等）对 XA 协议的支持，以 XA 协议的机制来管理分支事务的一种 事务模式。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009594.png" alt="image-20220620212439618" tabindex="0" loading="lazy"><figcaption>image-20220620212439618</figcaption></figure><p><strong>执行阶段</strong>：</p><ol><li>可回滚：业务 SQL 操作放在 XA 分支中进行，由资源对 XA 协议的支持来保证 可回滚</li><li>持久化：XA 分支完成后，执行 XA prepare，同样，由资源对 XA 协议的支持来保证 持久化（即，之后任何意外都不会造成无法回滚的情况）</li></ol><p><strong>完成阶段</strong>：</p><ol><li>分支提交：执行 XA 分支的 commit</li><li>分支回滚：执行 XA 分支的 rollback</li></ol><h4 id="_5-2-3-工作机制" tabindex="-1"><a class="header-anchor" href="#_5-2-3-工作机制"><span>5.2.3 工作机制</span></a></h4><ol><li><strong>整体运行机制</strong></li></ol><p>XA 模式 运行在 Seata 定义的事务框架内：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009615.png" alt="image-20220620212552183" tabindex="0" loading="lazy"><figcaption>image-20220620212552183</figcaption></figure><ul><li>执行阶段（E xecute）： XA start/XA end/XA prepare + SQL + 注册分支</li><li>完成阶段（F inish）：XA commit/XA rollback</li></ul><ol><li>数据源代理</li></ol><p>XA 模式需要 XAConnection。</p><p>获取 XAConnection 两种方式：</p><ul><li>方式一：要求开发者配置 XADataSource</li><li>方式二：根据开发者的普通 DataSource 来创建</li></ul><p>第一种方式，给开发者增加了认知负担，需要为 XA 模式专门去学习和使用 XA 数据源，与 透明化 XA 编程模型的设计目标相违背。</p><p>第二种方式，对开发者比较友好，和 AT 模式使用一样，开发者完全不必关心 XA 层面的任何问题，保持本地编程模型即可。</p><p>我们优先设计实现第二种方式：数据源代理根据普通数据源中获取的普通 JDBC 连接创建出相应的 XAConnection。</p><p>类比 AT 模式的数据源代理机制，如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009642.png" alt="image-20220620212702983" tabindex="0" loading="lazy"><figcaption>image-20220620212702983</figcaption></figure><p>但是，第二种方法有局限：无法保证兼容的正确性。</p><p>实际上，这种方法是在做数据库驱动程序要做的事情。不同的厂商、不同版本的数据库驱动实现机制是厂商私有的，我们只能保证在充分测试过的驱动程序上是正确的，开发者使用的驱动程序版本差异很可能造成机制的失效。</p><p>这点在 Oracle 上体现非常明显。参见 Druid issue：<a href="https://github.com/alibaba/druid/issues/3707" target="_blank" rel="noopener noreferrer">https://github.com/alibaba/druid/issues/3707</a></p><p>综合考虑，XA 模式的数据源代理设计需要同时支持第一种方式：基于 XA 数据源进行代理。</p><p>类比 AT 模式的数据源代理机制，如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009667.png" alt="image-20220620212758686" tabindex="0" loading="lazy"><figcaption>image-20220620212758686</figcaption></figure><ol><li><strong>分支注册</strong></li></ol><p>XA start 需要 Xid 参数。</p><p>这个 Xid 需要和 Seata 全局事务的 XID 和 BranchId 关联起来，以便由 TC 驱动 XA 分支的提交或回滚。</p><p>目前 Seata 的 BranchId 是在分支注册过程，由 TC 统一生成的，所以 XA 模式分支注册的时机需要在 XA start 之前。</p><p><em>将来一个可能的优化方向</em>：</p><p>把分支注册尽量延后。类似 AT 模式在本地事务提交之前才注册分支，避免分支执行失败情况下，没有意义的分支注册。</p><p>这个优化方向需要 BranchId 生成机制的变化来配合。BranchId 不通过分支注册过程生成，而是生成后再带着 BranchId 去注册分支。</p><h3 id="_5-3-seata-tcc-模式" tabindex="-1"><a class="header-anchor" href="#_5-3-seata-tcc-模式"><span>5.3 Seata TCC 模式</span></a></h3><p>回顾总览中的描述：一个分布式的全局事务，整体是 两阶段提交 的模型。全局事务是由若干分支事务组成的，分支事务要满足 两阶段提交 的模型要求，即需要每个分支事务都具备自己的：</p><ul><li>一阶段 prepare 行为</li><li>二阶段 commit 或 rollback 行为</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009691.png" alt="image-20220620212921535" tabindex="0" loading="lazy"><figcaption>image-20220620212921535</figcaption></figure><p>根据两阶段行为模式的不同，我们将分支事务划分为 Automatic (Branch) Transaction Mode 和 TCC (Branch) Transaction Mode.</p><p>AT 模式基于 支持本地 ACID 事务 的 关系型数据库：</p><ol><li>一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。</li><li>二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。</li><li>二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。</li></ol><p>相应的，TCC 模式，不依赖于底层数据资源的事务支持：</p><ol><li>一阶段 prepare 行为：调用 自定义 的 prepare 逻辑。</li><li>二阶段 commit 行为：调用 自定义 的 commit 逻辑。</li><li>二阶段 rollback 行为：调用 自定义 的 rollback 逻辑。</li></ol><p>所谓 TCC 模式，是指支持把 自定义 的分支事务纳入到全局事务的管理中。</p><h3 id="_5-4-seata-saga-模式" tabindex="-1"><a class="header-anchor" href="#_5-4-seata-saga-模式"><span>5.4 Seata Saga 模式</span></a></h3><blockquote><p>Saga模式是SEATA提供的长事务解决方案，在Saga模式中，业务流程中每个参与者都提交本地事务，当出现某一个参与者失败则补偿前面已经成功的参与者，一阶段正向服务和二阶段补偿服务都由业务开发实现。</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009717.png" alt="image-20220620213127266" tabindex="0" loading="lazy"><figcaption>image-20220620213127266</figcaption></figure><h4 id="_5-4-1-概述" tabindex="-1"><a class="header-anchor" href="#_5-4-1-概述"><span>5.4.1 概述</span></a></h4><p><strong>适用场景</strong>：</p><ol><li>业务流程长、业务流程多</li><li>参与者包含其它公司或遗留系统服务，无法提供 TCC 模式要求的三个接口</li></ol><p><strong>优势</strong>：</p><ol><li>一阶段提交本地事务，无锁，高性能</li><li>事件驱动架构，参与者可异步执行，高吞吐</li><li>补偿服务易于实现</li></ol><p><strong>缺点</strong>：</p><ol><li>不保证隔离性（应对方案见后面文档）</li></ol><h4 id="_5-4-2-saga的实现" tabindex="-1"><a class="header-anchor" href="#_5-4-2-saga的实现"><span>5.4.2 Saga的实现</span></a></h4><p>目前SEATA提供的Saga模式是基于状态机引擎来实现的，机制是：</p><ol><li>通过状态图来定义服务调用的流程并生成 json 状态语言定义文件</li><li>状态图中一个节点可以是调用一个服务，节点可以配置它的补偿节点</li><li>状态图 json 由状态机引擎驱动执行，当出现异常时状态引擎反向执行已成功节点对应的补偿节点将事务回滚 <ol><li>注意: 异常发生时是否进行补偿也可由用户自定义决定</li></ol></li><li>可以实现服务编排需求，支持单项选择、并发、子流程、参数转换、参数映射、服务执行状态判断、异常捕获等功能</li></ol><p>示例状态图:</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009737.png" alt="image-20220620213300286" tabindex="0" loading="lazy"><figcaption>image-20220620213300286</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/arch/arch-z-transection.html" target="_blank" rel="noopener noreferrer"><strong>分布式系统 - 分布式事务及实现方案</strong></a></p>',237)]))}const g=i(n,[["render",r],["__file","arch-z-transection.html.vue"]]),p=JSON.parse(`{"path":"/posts/Architect/distributed/arch-z-transection.html","title":"分布式系统-分布式事务及实现方案","lang":"zh-CN","frontmatter":{"aliases":"分布式系统-分布式事务及实现方案, '分布式系统-分布式事务及实现方案'","tags":null,"cssclass":null,"source":null,"order":40,"category":["架构"],"created":"2024-04-24 14:35","updated":"2024-04-30 10:10","description":"分布式系统-分布式事务及实现方案 事务是一个程序执行单元，里面的所有操作要么全部执行成功，要么全部执行失败。而分布式事务是指事务的参与者、支持事务的服务器、资源服务器以及事务管理器分别位于不同的分布式系统的不同节点之上。 1. 什么是分布式事务 事务是一个程序执行单元，里面的所有操作要么全部执行成功，要么全部执行失败。在分布式系统中，这些操作可能是位于...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/distributed/arch-z-transection.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"分布式系统-分布式事务及实现方案"}],["meta",{"property":"og:description","content":"分布式系统-分布式事务及实现方案 事务是一个程序执行单元，里面的所有操作要么全部执行成功，要么全部执行失败。而分布式事务是指事务的参与者、支持事务的服务器、资源服务器以及事务管理器分别位于不同的分布式系统的不同节点之上。 1. 什么是分布式事务 事务是一个程序执行单元，里面的所有操作要么全部执行成功，要么全部执行失败。在分布式系统中，这些操作可能是位于..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009050.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式系统-分布式事务及实现方案\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009050.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009102.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009129.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009159.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009182.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009223.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009250.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009276.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009300.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009327.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009347.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009367.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009392.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009415.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009440.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009467.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009492.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009523.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009543.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009572.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009594.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009615.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009642.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009667.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009691.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009717.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301009737.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是分布式事务","slug":"_1-什么是分布式事务","link":"#_1-什么是分布式事务","children":[]},{"level":2,"title":"2. 如何理解分布式事务","slug":"_2-如何理解分布式事务","link":"#_2-如何理解分布式事务","children":[{"level":3,"title":"2.1 从分布式的理论的角度看","slug":"_2-1-从分布式的理论的角度看","link":"#_2-1-从分布式的理论的角度看","children":[]},{"level":3,"title":"2.2 从分布式事务的体系看","slug":"_2-2-从分布式事务的体系看","link":"#_2-2-从分布式事务的体系看","children":[]}]},{"level":2,"title":"3. 分布式事务方案之刚性事务","slug":"_3-分布式事务方案之刚性事务","link":"#_3-分布式事务方案之刚性事务","children":[{"level":3,"title":"3.1 两段提交（2PC）","slug":"_3-1-两段提交-2pc","link":"#_3-1-两段提交-2pc","children":[]},{"level":3,"title":"3.2 三段提交（3PC）","slug":"_3-2-三段提交-3pc","link":"#_3-2-三段提交-3pc","children":[]}]},{"level":2,"title":"4. 分布式事务方案之柔性事务","slug":"_4-分布式事务方案之柔性事务","link":"#_4-分布式事务方案之柔性事务","children":[{"level":3,"title":"4.1 补偿事务 (TCC)","slug":"_4-1-补偿事务-tcc","link":"#_4-1-补偿事务-tcc","children":[]},{"level":3,"title":"4.2 Saga事务","slug":"_4-2-saga事务","link":"#_4-2-saga事务","children":[]},{"level":3,"title":"4.3 本地消息表","slug":"_4-3-本地消息表","link":"#_4-3-本地消息表","children":[]},{"level":3,"title":"4.4 MQ事务方案（可靠消息事务）","slug":"_4-4-mq事务方案-可靠消息事务","link":"#_4-4-mq事务方案-可靠消息事务","children":[]},{"level":3,"title":"4.5 最大努力通知","slug":"_4-5-最大努力通知","link":"#_4-5-最大努力通知","children":[]}]},{"level":2,"title":"5. 分布式事务的中间件Seata","slug":"_5-分布式事务的中间件seata","link":"#_5-分布式事务的中间件seata","children":[{"level":3,"title":"5.1 Seata AT 模式","slug":"_5-1-seata-at-模式","link":"#_5-1-seata-at-模式","children":[]},{"level":3,"title":"5.2 Seata XA 模式","slug":"_5-2-seata-xa-模式","link":"#_5-2-seata-xa-模式","children":[]},{"level":3,"title":"5.3 Seata TCC 模式","slug":"_5-3-seata-tcc-模式","link":"#_5-3-seata-tcc-模式","children":[]},{"level":3,"title":"5.4 Seata Saga 模式","slug":"_5-4-seata-saga-模式","link":"#_5-4-seata-saga-模式","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":35.11,"words":10532},"filePathRelative":"posts/Architect/distributed/arch-z-transection.md","localizedDate":"2024年10月28日","excerpt":"\\n<blockquote>\\n<p><strong>事务</strong>是一个程序执行单元，里面的所有操作要么全部执行成功，要么全部执行失败。而<strong>分布式事务</strong>是指事务的参与者、支持事务的服务器、资源服务器以及事务管理器分别位于不同的分布式系统的不同节点之上。</p>\\n</blockquote>\\n<h2>1. 什么是分布式事务</h2>\\n<blockquote>\\n<p><strong>事务</strong>是一个程序执行单元，里面的所有操作要么全部执行成功，要么全部执行失败。在分布式系统中，这些操作可能是位于不同的服务中，那么如果也能保证这些操作要么全部执行成功要么全部执行失败呢？这便是分布式事务要解决的问题。</p>\\n</blockquote>","autoDesc":true}`);export{g as comp,p as data};