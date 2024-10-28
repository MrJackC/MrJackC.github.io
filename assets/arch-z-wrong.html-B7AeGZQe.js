import{_ as s,c as e,a as n,o as l}from"./app-BOcQBfH9.js";const i={};function r(p,a){return l(),e("div",null,a[0]||(a[0]=[n(`<h1 id="分布式系统-分布式系统的8个谬误" tabindex="-1"><a class="header-anchor" href="#分布式系统-分布式系统的8个谬误"><span>分布式系统-分布式系统的8个谬误</span></a></h1><p>20多年前，Peter Deutsch和James Gosling定义了分布式计算的8个谬误。这些是许多开发人员对分布式系统做出的错误假设。从长远来看，这些通常被证明是错误的，导致难以修复错误。<strong>这篇文章从反面警示我们分布式系统需要注意的事项</strong>。</p><h2 id="_1-网络可靠" tabindex="-1"><a class="header-anchor" href="#_1-网络可靠"><span>1. 网络可靠</span></a></h2><h3 id="_1-1-问题" tabindex="-1"><a class="header-anchor" href="#_1-1-问题"><span>1.1 问题</span></a></h3><blockquote><p>通过网络呼叫将失败。</p></blockquote><blockquote><p>问题：</p><p>网络不可靠，无响应并不能确定是服务挂了还是超时。服务挂了，可以重试。但如果是超时就会面临重复请求问题。重复请求又不能确定是重试，万一是客户自己多次发起呢？</p><p>解决</p><p>不超时，改为消息队列的形式来进行排队处理。前端去查是否完成(改动巨大)</p><p>有时候直接报错也是一种选择，根据自己实际业务决定</p></blockquote><p>今天的大多数系统都会调用其他系统。您是否正在与第三方系统（支付网关，会计系统，CRM）集成？你在做网络服务电话吗？如果呼叫失败会发生什么？如果您要查询数据，则可以进行简单的重试。但是如果您发送命令会发生什么？我们举一个简单的例子：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 发起信息用支付</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">var</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> creditCardProcessor </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> CreditCardPaymentService</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 信息卡收费</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">creditCardProcessor</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Charge</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(chargeRequest);</span></span></code></pre></div><p>如果我们收到HTTP超时异常会怎么样？</p><ul><li>如果服务器没有处理请求，那么我们可以重试。但是，如果它确实处理了请求，我们需要确保我们不会对客户进行双重收费。您可以通过使服务器具有幂等性来实现此目的。</li><li>使用了幂等，这意味着如果您使用相同的收费请求拨打10次，则客户只需支付一次费用。如果您没有正确处理这些错误，那么您的系统是不确定的。处理所有这些情况可能会非常复杂</li></ul><h3 id="_1-2-解决方案" tabindex="-1"><a class="header-anchor" href="#_1-2-解决方案"><span>1.2 解决方案</span></a></h3><p>因此，如果网络上的呼叫失败，我们能做什么？好吧，我们可以自动重试。排队系统非常擅长这一点。它们通常使用称为存储和转发的模式。它们在将消息转发给收件人之前在本地存储消息。如果收件人处于脱机状态，则排队系统将重试发送邮件。MSMQ是这种排队系统的一个例子。</p><p>但是这种变化将对您的系统设计产生重大影响。您正在从请求/响应模型转移到触发并忘记。由于您不再等待响应，因此您需要更改系统中的用户行程。您不能只使用队列发送替换每个Web服务调用。</p><h3 id="_1-3-结论" tabindex="-1"><a class="header-anchor" href="#_1-3-结论"><span>1.3 结论</span></a></h3><p>你可能会说网络现在更可靠 - 而且它们是。但事情发生了。硬件和软件可能会出现故障 - 电源，路由器，更新或补丁失败，无线信号弱，网络拥塞，啮齿动物或鲨鱼。是的，鲨鱼：在一系列鲨鱼叮咬之后，谷歌正在加强与Kevlar的海底数据线。</p><p>还有人为因素。人们可以开始DDOS攻击，也可以破坏物理设备。</p><p>这是否意味着您需要删除当前的技术堆栈并使用消息传递系统？并不是的！您需要权衡失败的风险与您需要进行的投资。您可以通过投资基础架构和软件来最小化失败的可能性。在许多情况下，失败是一种选择。但在设计分布式系统时，您确实需要考虑失败的问题。</p><h2 id="_2-延迟是零" tabindex="-1"><a class="header-anchor" href="#_2-延迟是零"><span>2. 延迟是零</span></a></h2><h3 id="_2-1-问题" tabindex="-1"><a class="header-anchor" href="#_2-1-问题"><span>2.1 问题</span></a></h3><blockquote><p>通过网络拨打电话不是即时的。</p></blockquote><blockquote><p>还是不太明白</p></blockquote><p>内存呼叫和互联网呼叫之间存在七个数量级的差异。您的应用程序应该是网络感知。这意味着您应该清楚地将本地呼叫与远程呼叫分开。让我们看看我在代码库中看到的一个例子：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">var</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> viewModel </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> ViewModel</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 进行一次调用以获取文档摘要列表</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">var</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> documents </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> DocumentsCollection</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">foreach</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (var document in documents)</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">{</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 它检索有关每个文档的更多信息</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    var</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> snapshot </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> document</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">GetSnapshot</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    viewModel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Add</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(snapshot);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><p>没有进一步检查，这看起来很好。但是，有两个远程呼叫。第2行进行一次调用以获取文档摘要列表。在第5行，还有另一个调用，它检索有关每个文档的更多信息。<strong>这是一个经典的Select n + 1问题</strong>。为了解决网络延迟问题，您应该在一次调用中返回所有必需的数据。一般的建议是本地调用可以细粒度，但远程调用应该更粗粒度。这就是为什么分布式对象和“网络透明度”的想法死了。但是，即使每个人都同意分布式对象是一个坏主意，有些人仍然认为延迟加载总是一个好主意：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">var</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> employee </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> EmployeeRepository</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">GetBy</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(someCriteria)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">var</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> department </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> employee</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Department</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">var</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> manager </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> department</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Manager</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">foreach</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (var peer in </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">manager</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Employees</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">{</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // do something</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre></div><p>您不希望财产获取者进行网络呼叫。但是，每个“。” 在上面的代码中调用实际上可以触发数据库之旅。</p><h3 id="_2-2-解决方案" tabindex="-1"><a class="header-anchor" href="#_2-2-解决方案"><span>2.2 解决方案</span></a></h3><ul><li><strong>带回您可能需要的所有数据</strong> 如果您进行远程呼叫，请确保恢复可能需要的所有数据。网络通信不应该是唠叨的。</li><li><strong>将Data Closer移动到客户端</strong> 另一种可能的解决方案是将数据移近客户端。如果您正在使用云，请根据客户的位置仔细选择可用区。缓存还可以帮助最小化网络呼叫的数量。对于静态内容，内容交付网络（CDN）是另一个不错的选择。</li><li><strong>反转数据流</strong> 删除远程调用的另一个选项是反转数据流。我们可以使用Pub / Sub并在本地存储数据，而不是查询其他服务。这样，我们就可以在需要时获取数据。当然，这会带来一些复杂性，但它可能是工具箱中的一个很好的工具。</li></ul><h3 id="_2-3-结论" tabindex="-1"><a class="header-anchor" href="#_2-3-结论"><span>2.3 结论</span></a></h3><p>虽然延迟可能不是LAN中的问题，但当您转移到WAN或Internet时，您会注意到延迟。这就是为什么将网络呼叫与内存中的呼叫明确分开是很重要的。在采用微服务架构模式时，您应该牢记这一点。您不应该只使用远程调用替换本地呼叫。这可能会使你的系统变成分布式的大泥球。</p><h2 id="_3-带宽是无限的" tabindex="-1"><a class="header-anchor" href="#_3-带宽是无限的"><span>3. 带宽是无限的</span></a></h2><h3 id="_3-1-问题" tabindex="-1"><a class="header-anchor" href="#_3-1-问题"><span>3.1 问题</span></a></h3><blockquote><p>带宽是有限的。</p></blockquote><p>带宽是网络在一段时间内发送数据的容量。到目前为止，我还没有发现它是一个问题，但我可以看到为什么它在某些条件下可能是一个问题。虽然带宽随着时间的推移而有所改善，但我们发送的数据量也有所增加。与通过网络传递简单DTO的应用相比，视频流或VoIP需要更多带宽。带宽对于移动应用程序来说更为重要，因此开发人员在设计后端API时需要考虑它。</p><p>错误地使用ORM也会造成伤害。我见过开发人员在查询中过早调用.ToList（）的示例，因此在内存中加载整个表。</p><h3 id="_3-2-解决方案" tabindex="-1"><a class="header-anchor" href="#_3-2-解决方案"><span>3.2 解决方案</span></a></h3><p><strong>领域驱动的设计模式</strong></p><p>那么我们怎样才能确保我们不会带来太多数据呢？域驱动设计模式可以帮助：</p><ul><li>首先，您不应该争取单一的企业级域模型。您应该将域划分为有界上下文。</li><li>要避免有界上下文中的大型复杂对象图，可以使用聚合模式。聚合确保一致性并定义事务边界。</li></ul><p><strong>命令和查询责任隔离</strong></p><p>我们有时会加载复杂的对象图，因为我们需要在屏幕上显示它的一部分。如果我们在很多地方这样做，我们最终会得到一个庞大而复杂的模型，对于写作和阅读来说都是次优的。另一种方法可以是使用命令和查询责任隔离 - CQRS。这意味着将域模型分为两部分：</p><ul><li>在写模式将确保不变保持真实的数据是一致的。由于写模型不关心视图问题，因此可以保持较小且集中。</li><li>该读取模型是视图的担忧进行了优化，所以我们可以获取所有所需的特定视图中的数据（例如，我们的应用程序的屏幕）。</li></ul><h3 id="_3-3-结论" tabindex="-1"><a class="header-anchor" href="#_3-3-结论"><span>3.3 结论</span></a></h3><p>在第二个谬误（延迟不是0）和第三个谬误（带宽是无限的）之间有延伸，您应该传输更多数据，以最大限度地减少网络往返次数。您应该传输较少的数据以最小化带宽使用。您需要平衡这两种力量，并找到通过线路发送的正确数据量。</p><p>虽然您可能不会经常遇到带宽限制，但考虑传输的数据非常重要。更少的数据更容易理解。<strong>数据越少意味着耦合越少。因此，只传输您可能需要的数据。</strong></p><h2 id="_4-网络是安全的" tabindex="-1"><a class="header-anchor" href="#_4-网络是安全的"><span>4. 网络是安全的</span></a></h2><h3 id="_4-1-问题" tabindex="-1"><a class="header-anchor" href="#_4-1-问题"><span>4.1 问题</span></a></h3><blockquote><p>网络并不安全。</p></blockquote><p>这是一个比其他人更多的媒体报道的假设。您的系统仅与最薄弱的链接一样安全。坏消息是分布式系统中有很多链接。您正在使用HTTPS，除非与不支持它的第三方遗留系统进行通信。您正在查看自己的代码，寻找安全问题，但正在使用可能存在风险的开源库。一个OpenSSL的漏洞允许人们通过盗取SSL / TLS保护的数据。Apache Struts中的一个错误允许攻击者在服务器上执行代码。即使你正在抵御所有这些，仍然存在人为因素。恶意DBA可能“错放”数据库备份。今天的攻击者掌握着大量的计算能力和耐心。所以问题不在于他们是否会攻击你的系统，而是什么时候。</p><h3 id="_4-2-解决方案" tabindex="-1"><a class="header-anchor" href="#_4-2-解决方案"><span>4.2 解决方案</span></a></h3><ul><li><strong>深度防御</strong></li></ul><p>您应该使用分层方法来保护您的系统。您需要在网络，基础架构和应用程序级别进行不同的安全检查。</p><ul><li><strong>安全心态</strong></li></ul><p>在设计系统时要牢记安全性。十大漏洞列表在过去5年中没有发生太大变化。您应遵循安全软件设计的最佳实践，并检查常见安全漏洞的代码。您应该定期搜索第三方库以查找新漏洞。常见漏洞和暴露列表可以提供帮助。</p><ul><li><strong>威胁建模</strong></li></ul><p>威胁建模是一种识别系统中可能存在的安全威胁的系统方法。首先确定系统中的所有资产（数据库中的用户数据，文件等）以及如何访问它们。之后，您可以识别可能的攻击并开始执行它们。我建议阅读高级API安全性的第2章，以便更好地概述威胁建模。</p><h3 id="_4-3-结论" tabindex="-1"><a class="header-anchor" href="#_4-3-结论"><span>4.3 结论</span></a></h3><p>唯一安全的系统是关闭电源的系统，不连接到任何网络（理想情况下是在一个有形模块中）。它是多么有用的系统！事实是，安全是艰难而昂贵的。分布式系统中有许多组件和链接，每个组件和链接都是恶意用户的可能目标。企业需要平衡攻击的风险和概率与实施预防机制的成本。</p><p>攻击者手上有很多耐心和计算能力。我们可以通过使用威胁建模来防止某些类型的攻击，但我们无法保证100％的安全性。因此，向业务部门明确表示这一点是个好主意，共同决定投资安全性的程度，并制定安全漏洞何时发生的计划。</p><h2 id="_5-拓扑不会改变" tabindex="-1"><a class="header-anchor" href="#_5-拓扑不会改变"><span>5. 拓扑不会改变</span></a></h2><h3 id="_5-1-问题" tabindex="-1"><a class="header-anchor" href="#_5-1-问题"><span>5.1 问题</span></a></h3><blockquote><p>网络拓扑不断变化。</p></blockquote><p>网络拓扑始终在变化。有时它会因意外原因而发生变化 - 当您的应用服务器出现故障并需要更换时。很多时候它是故意的 - 在新服务器上添加新进程。如今，随着云和容器的增加，这一点更加明显。弹性扩展 - 根据工作负载添加或删除服务器的能力 - 需要一定程度的网络灵活性。</p><h3 id="_5-2-解决方案" tabindex="-1"><a class="header-anchor" href="#_5-2-解决方案"><span>5.2 解决方案</span></a></h3><p><strong>摘要网络的物理结构</strong></p><p>您需要做的第一件事是抽象网络的物理结构。有几种方法可以做到这一点：</p><ul><li>停止硬编码IP - 您应该更喜欢使用主机名。通过使用URI，我们依靠DNS将主机名解析为IP。</li><li>当DNS不够时（例如，当您需要映射IP和端口时），则使用发现服务。</li><li>Service Bus框架还可以提供位置透明性。</li></ul><p><strong>无价值的，而非重要的</strong></p><p>通过将您的服务器视为没有价值的，而不是很重要的，您确保没有服务器是不可替代的。这一点智慧可以帮助您进入正确的思维模式：任何服务器都可能出现故障（从而改变拓扑结构），因此您应该尽可能地自动化。</p><p><strong>测试</strong></p><p>最后一条建议是测试你的假设。停止服务或关闭服务器，看看您的系统是否仍在运行。像Netflix的Chaos Monkey这样的工具可以通过随机关闭生产环境中的VM或容器来实现这一目标。通过带来痛苦，您更有动力构建一个可以处理拓扑更改的更具弹性的系统。</p><h3 id="_5-3-结论" tabindex="-1"><a class="header-anchor" href="#_5-3-结论"><span>5.3 结论</span></a></h3><p>十年前，大多数拓扑结构并没有经常改变。但是当它发生时，它可能发生在生产中并引入了一些停机时间。如今，随着云和容器的增加，很难忽视这种谬误。你需要为失败做好准备并进行测试。不要等到它在生产中发生！</p><h2 id="_6-有一位管理员" tabindex="-1"><a class="header-anchor" href="#_6-有一位管理员"><span>6. 有一位管理员</span></a></h2><h3 id="_6-1-问题" tabindex="-1"><a class="header-anchor" href="#_6-1-问题"><span>6.1 问题</span></a></h3><blockquote><p>这个知道一切的并不存在。</p></blockquote><p>嗯，这个看起来很明显。当然，没有一个人知道一切。这是一个问题吗？只要应用程序运行顺利，它就不是。但是，当出现问题时，您需要修复它。因为很多人触摸了应用程序，知道如何解决问题的人可能不在那里。</p><p>有很多事情可能会出错。一个例子是配置。今天的应用程序在多个商店中存储配置：配置文件，环境变量，数据库，命令行参数。没有人知道每个可能的配置值的影响是什么。</p><p>另一件可能出错的事情是系统升级。分布式应用程序有许多移动部件，您需要确保它们是同步的。例如，您需要确保当前版本的代码适用于当前版本的数据库。如今，人们关注DevOps和持续交付。但支持零停机部署并非易事。</p><p>但是，至少这些东西都在你的控制之下。许多应用程序与第三方系统交互。这意味着，如果它们失效，你可以做的事情就不多了。因此，即使您的系统有一名管理员，您仍然无法控制第三方系统。</p><h3 id="_6-2-解决方案" tabindex="-1"><a class="header-anchor" href="#_6-2-解决方案"><span>6.2 解决方案</span></a></h3><p><strong>每个人都应对释放过程负责</strong></p><p>这意味着从一开始就涉及Ops人员或系统管理员。理想情况下，他们将成为团队的一员。尽早让系统管理员了解您的进度可以帮助您发现限制因素。例如，生产环境可能具有与开发环境不同的配置，安全限制，防火墙规则或可用端口。</p><p><strong>记录和监控</strong></p><p>系统管理员应该拥有用于错误报告和管理问题的正确工具。你应该从一开始就考虑监控。分布式系统应具有集中式日志。访问十个不同服务器上的日志以调查问题是不可接受的方法。</p><p><strong>解耦</strong></p><p>您应该在系统升级期间争取最少的停机时间。这意味着您应该能够独立升级系统的不同部分。通过使组件向后兼容，您可以在不同时间更新服务器和客户端。</p><p>通过在组件之间放置队列，您可以暂时将它们分离。这意味着，例如，即使后端关闭，Web服务器仍然可以接受请求。</p><p><strong>隔离第三方依赖关系</strong></p><p>您应该以不同于您拥有的组件的方式处理控制之外的系统。这意味着使您的系统更能适应第三方故障。您可以通过引入抽象层来减少外部依赖的影响。这意味着当第三方系统出现故障时，您将找到更少的地方来查找错误。</p><h3 id="_6-3-结论" tabindex="-1"><a class="header-anchor" href="#_6-3-结论"><span>6.3 结论</span></a></h3><p>要解决这个谬论，您需要使系统易于管理。DevOps，日志记录和监控可以提供帮助。您还需要考虑系统的升级过程。如果升级需要数小时的停机时间，则无法部署每个sprint。没有一个管理员，所以每个人都应该对发布过程负责。</p><h2 id="_7-运输成本为零" tabindex="-1"><a class="header-anchor" href="#_7-运输成本为零"><span>7. 运输成本为零</span></a></h2><h3 id="_7-1-问题" tabindex="-1"><a class="header-anchor" href="#_7-1-问题"><span>7.1 问题</span></a></h3><blockquote><p>运输成本不是零。</p></blockquote><p>这种谬论与第二个谬误有关，即 延迟为零。通过网络传输内容在时间和资源上都有代价。如果第二个谬误讨论了时间方面，那么谬误＃7就会解决资源消耗问题。</p><p>这种谬论有两个不同的方面：</p><p><strong>网络基础设施的成本</strong></p><p>网络基础设施需要付出代价。服务器，SAN，网络交换机，负载平衡器以及负责此设备的人员 - 所有这些都需要花钱。如果您的系统是在内部部署的，那么您需要预先支付这个价格。如果您正在使用云，那么您只需为您使用的内容付费，但您仍然需要付费。</p><p><strong>序列化/反序列化的成本</strong></p><p>这种谬误的第二个方面是在传输级别和应用程序级别之间传输数据的成本。序列化和反序列化会消耗CPU时间，因此需要花钱。如果您的应用程序是内部部署的，那么如果您不主动监视资源消耗，则会隐藏此成本。但是，如果您的应用程序部署在云端，那么这笔费用就会非常明显，因为您需要为使用的内容付费。</p><h3 id="_7-2-解决方案" tabindex="-1"><a class="header-anchor" href="#_7-2-解决方案"><span>7.2 解决方案</span></a></h3><p>关于基础设施的成本，你无能为力。您只能确保尽可能高效地使用它。SOAP或XML比JSON更昂贵。JSON比像Google的Protocol Buffers这样的二进制协议更昂贵。根据系统的类型，这可能或多或少重要。例如，对于与视频流或VoIP有关的应用，传输成本更为重要。</p><h3 id="_7-3-结论" tabindex="-1"><a class="header-anchor" href="#_7-3-结论"><span>7.3 结论</span></a></h3><p>您应该注意运输成本以及应用程序正在执行的序列化和反序列化程度。这并不意味着您应该优化，除非需要它。您应该对资源消耗进行基准测试和监控，并确定运输成本是否对您有用。</p><h2 id="_8-网络是同质的" tabindex="-1"><a class="header-anchor" href="#_8-网络是同质的"><span>8. 网络是同质的</span></a></h2><h3 id="_8-1-问题" tabindex="-1"><a class="header-anchor" href="#_8-1-问题"><span>8.1 问题</span></a></h3><blockquote><p>网络不是同质的。</p></blockquote><p>同质网络是使用类似配置和相同通信协议的计算机网络。拥有类似配置的计算机是一项艰巨的任务。例如，您几乎无法控制哪些移动设备可以连接到您的应用。这就是为什么重点关注标准协议。</p><h3 id="_8-2-解决方案" tabindex="-1"><a class="header-anchor" href="#_8-2-解决方案"><span>8.2 解决方案</span></a></h3><p>您应该选择标准格式以避免供应商锁定。这可能意味着XML，JSON或协议缓冲区。有很多选择可供选择。</p><h3 id="_8-3-结论" tabindex="-1"><a class="header-anchor" href="#_8-3-结论"><span>8.3 结论</span></a></h3><p>您需要确保系统的组件可以相互通信。使用专有协议会损害应用程序的互操作性。</p><h2 id="_9-总结" tabindex="-1"><a class="header-anchor" href="#_9-总结"><span>9. 总结</span></a></h2><blockquote><p>设计分布式系统很难</p></blockquote><p>这些谬论发表于20多年前。但他们今天仍然坚持，其中一些比其他人更多。我认为今天许多开发人员都知道它们，但我们编写的代码并没有显示出来。</p><p>我们必须接受这些事实：<strong>网络不可靠，不安全并且需要花钱。带宽有限。网络的拓扑结构将发生变化。其组件的配置方式不同。意识到这些限制将有助于我们设计更好的分布式系统。</strong></p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/arch/arch-z-wrong.html" target="_blank" rel="noopener noreferrer"><strong>分布式系统 - 分布式系统的8个谬误</strong></a></p>`,119)]))}const o=s(i,[["render",r],["__file","arch-z-wrong.html.vue"]]),h=JSON.parse('{"path":"/posts/Architect/distributed/arch-z-wrong.html","title":"分布式系统-分布式系统的8个谬误","lang":"zh-CN","frontmatter":{"order":90,"category":["架构"],"description":"分布式系统-分布式系统的8个谬误 20多年前，Peter Deutsch和James Gosling定义了分布式计算的8个谬误。这些是许多开发人员对分布式系统做出的错误假设。从长远来看，这些通常被证明是错误的，导致难以修复错误。这篇文章从反面警示我们分布式系统需要注意的事项。 1. 网络可靠 1.1 问题 通过网络呼叫将失败。 问题： 网络不可靠，无响...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Architect/distributed/arch-z-wrong.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"分布式系统-分布式系统的8个谬误"}],["meta",{"property":"og:description","content":"分布式系统-分布式系统的8个谬误 20多年前，Peter Deutsch和James Gosling定义了分布式计算的8个谬误。这些是许多开发人员对分布式系统做出的错误假设。从长远来看，这些通常被证明是错误的，导致难以修复错误。这篇文章从反面警示我们分布式系统需要注意的事项。 1. 网络可靠 1.1 问题 通过网络呼叫将失败。 问题： 网络不可靠，无响..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式系统-分布式系统的8个谬误\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 网络可靠","slug":"_1-网络可靠","link":"#_1-网络可靠","children":[{"level":3,"title":"1.1 问题","slug":"_1-1-问题","link":"#_1-1-问题","children":[]},{"level":3,"title":"1.2 解决方案","slug":"_1-2-解决方案","link":"#_1-2-解决方案","children":[]},{"level":3,"title":"1.3 结论","slug":"_1-3-结论","link":"#_1-3-结论","children":[]}]},{"level":2,"title":"2. 延迟是零","slug":"_2-延迟是零","link":"#_2-延迟是零","children":[{"level":3,"title":"2.1 问题","slug":"_2-1-问题","link":"#_2-1-问题","children":[]},{"level":3,"title":"2.2 解决方案","slug":"_2-2-解决方案","link":"#_2-2-解决方案","children":[]},{"level":3,"title":"2.3 结论","slug":"_2-3-结论","link":"#_2-3-结论","children":[]}]},{"level":2,"title":"3. 带宽是无限的","slug":"_3-带宽是无限的","link":"#_3-带宽是无限的","children":[{"level":3,"title":"3.1 问题","slug":"_3-1-问题","link":"#_3-1-问题","children":[]},{"level":3,"title":"3.2 解决方案","slug":"_3-2-解决方案","link":"#_3-2-解决方案","children":[]},{"level":3,"title":"3.3 结论","slug":"_3-3-结论","link":"#_3-3-结论","children":[]}]},{"level":2,"title":"4. 网络是安全的","slug":"_4-网络是安全的","link":"#_4-网络是安全的","children":[{"level":3,"title":"4.1 问题","slug":"_4-1-问题","link":"#_4-1-问题","children":[]},{"level":3,"title":"4.2 解决方案","slug":"_4-2-解决方案","link":"#_4-2-解决方案","children":[]},{"level":3,"title":"4.3 结论","slug":"_4-3-结论","link":"#_4-3-结论","children":[]}]},{"level":2,"title":"5. 拓扑不会改变","slug":"_5-拓扑不会改变","link":"#_5-拓扑不会改变","children":[{"level":3,"title":"5.1 问题","slug":"_5-1-问题","link":"#_5-1-问题","children":[]},{"level":3,"title":"5.2 解决方案","slug":"_5-2-解决方案","link":"#_5-2-解决方案","children":[]},{"level":3,"title":"5.3 结论","slug":"_5-3-结论","link":"#_5-3-结论","children":[]}]},{"level":2,"title":"6. 有一位管理员","slug":"_6-有一位管理员","link":"#_6-有一位管理员","children":[{"level":3,"title":"6.1 问题","slug":"_6-1-问题","link":"#_6-1-问题","children":[]},{"level":3,"title":"6.2 解决方案","slug":"_6-2-解决方案","link":"#_6-2-解决方案","children":[]},{"level":3,"title":"6.3 结论","slug":"_6-3-结论","link":"#_6-3-结论","children":[]}]},{"level":2,"title":"7. 运输成本为零","slug":"_7-运输成本为零","link":"#_7-运输成本为零","children":[{"level":3,"title":"7.1 问题","slug":"_7-1-问题","link":"#_7-1-问题","children":[]},{"level":3,"title":"7.2 解决方案","slug":"_7-2-解决方案","link":"#_7-2-解决方案","children":[]},{"level":3,"title":"7.3 结论","slug":"_7-3-结论","link":"#_7-3-结论","children":[]}]},{"level":2,"title":"8. 网络是同质的","slug":"_8-网络是同质的","link":"#_8-网络是同质的","children":[{"level":3,"title":"8.1 问题","slug":"_8-1-问题","link":"#_8-1-问题","children":[]},{"level":3,"title":"8.2 解决方案","slug":"_8-2-解决方案","link":"#_8-2-解决方案","children":[]},{"level":3,"title":"8.3 结论","slug":"_8-3-结论","link":"#_8-3-结论","children":[]}]},{"level":2,"title":"9. 总结","slug":"_9-总结","link":"#_9-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":17.81,"words":5344},"filePathRelative":"posts/Architect/distributed/arch-z-wrong.md","localizedDate":"2024年10月28日","excerpt":"\\n<p>20多年前，Peter Deutsch和James Gosling定义了分布式计算的8个谬误。这些是许多开发人员对分布式系统做出的错误假设。从长远来看，这些通常被证明是错误的，导致难以修复错误。<strong>这篇文章从反面警示我们分布式系统需要注意的事项</strong>。</p>\\n<h2>1. 网络可靠</h2>\\n<h3>1.1 问题</h3>\\n<blockquote>\\n<p>通过网络呼叫将失败。</p>\\n</blockquote>\\n<blockquote>\\n<p>问题：</p>\\n<p>网络不可靠，无响应并不能确定是服务挂了还是超时。服务挂了，可以重试。但如果是超时就会面临重复请求问题。重复请求又不能确定是重试，万一是客户自己多次发起呢？</p>\\n<p>解决</p>\\n<p>不超时，改为消息队列的形式来进行排队处理。前端去查是否完成(改动巨大)</p>\\n<p>有时候直接报错也是一种选择，根据自己实际业务决定</p>\\n</blockquote>","autoDesc":true}');export{o as comp,h as data};
