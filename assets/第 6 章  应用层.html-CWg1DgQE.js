import{_ as i,c as e,a,o as n}from"./app-DQS7qcOs.js";const t={};function r(s,l){return n(),e("div",null,l[0]||(l[0]=[a(`<h1 id="第-6-章-应用层" tabindex="-1"><a class="header-anchor" href="#第-6-章-应用层"><span>第 6 章 应用层</span></a></h1><h2 id="域名系统-dns" tabindex="-1"><a class="header-anchor" href="#域名系统-dns"><span>域名系统 DNS</span></a></h2><h3 id="域名系统概述" tabindex="-1"><a class="header-anchor" href="#域名系统概述"><span>域名系统概述</span></a></h3><ul><li>DNS 是一个分布式数据库，提供了主机名和 IP 地址之间相互转换的服务。这里的分布式数据库是指，每个站点只保留它自己的那部分数据。</li></ul><h3 id="因特网的域名结构" tabindex="-1"><a class="header-anchor" href="#因特网的域名结构"><span>因特网的域名结构</span></a></h3><ul><li>域名具有层次结构，从上到下依次为：根域名、顶级域名、二级域名。</li></ul><h3 id="域名服务器" tabindex="-1"><a class="header-anchor" href="#域名服务器"><span>域名服务器</span></a></h3><ul><li>一个服务器所负责管辖的（或有权限的）范围叫做区(zone)。</li><li>每一个区设置相应的权限域名服务器，用来保存该区中的所有主机的域名到IP地址的映射。</li><li></li><li>DNS 可以使用 UDP 或者 TCP 进行传输，使用的端口号都为 53。大多数情况下 DNS 使用 UDP 进行传输，这就要求域名解析器和域名服务器都必须自己处理超时和重传从而保证可靠性。在两种情况下会使用 TCP 进行传输： <ul><li>如果返回的响应超过的 512 字节（UDP 最大只支持 512 字节的数据）。</li><li>区域传送（区域传送是主域名服务器向辅助域名服务器传送变化的那部分数据）。</li></ul></li></ul><h2 id="文件传送协议" tabindex="-1"><a class="header-anchor" href="#文件传送协议"><span>文件传送协议</span></a></h2><h3 id="ftp-概述" tabindex="-1"><a class="header-anchor" href="#ftp-概述"><span>FTP 概述</span></a></h3><ul><li>文件传送协议 FTP (File Transfer Protocol) 是因特网上使用得最广泛的文件传送协议。</li><li>FTP 提供交互式的访问，允许客户指明文件的类型与格式，并允许文件具有存取权限。</li><li>FTP 屏蔽了各计算机系统的细节，因而适合于在异构网络中任意计算机之间传送文件。</li></ul><h3 id="ftp-的基本工作原理" tabindex="-1"><a class="header-anchor" href="#ftp-的基本工作原理"><span>FTP 的基本工作原理</span></a></h3><ul><li>FTP 使用 TCP 进行连接，它需要两个连接来传送一个文件： <ul><li>控制连接：服务器打开端口号 21 等待客户端的连接，客户端主动建立连接后，使用这个连接将客户端的命令传送给服务器，并传回服务器的应答。</li><li>数据连接：用来传送一个文件数据。</li></ul></li><li>根据数据连接是否是服务器端主动建立，FTP 有主动和被动两种模式： <ul><li>主动模式：服务器端主动建立数据连接，其中服务器端的端口号为 20，客户端的端口号随机，但是必须大于 1024，因为 0~1023 是熟知端口号。</li><li>被动模式：客户端主动建立数据连接，其中客户端的端口号由客户端自己指定，服务器端的端口号随机。</li><li>主动模式要求客户端开放端口号给服务器端，需要去配置客户端的防火墙。被动模式只需要服务器端开放端口号即可，无需客户端配置防火墙。但是被动模式会导致服务器端的安全性减弱，因为开放了过多的端口号。</li></ul></li></ul><h3 id="简单文件传送协议-tftp" tabindex="-1"><a class="header-anchor" href="#简单文件传送协议-tftp"><span>简单文件传送协议 TFTP</span></a></h3><ul><li>TFTP 是一个很小且易于实现的文件传送协议。</li><li>TFTP 使用客户服务器方式和使用 UDP 数据报，因此 TFTP 需要有自己的差错改正措施。</li><li>TFTP 只支持文件传输而不支持交互。</li><li>TFTP 没有一个庞大的命令集，没有列目录的功能，也不能对用户进行身份鉴别。</li><li>TFTP 的主要特点是 <ul><li><pre><code>(1) 每次传送的数据 PDU 中有 512 字节的数据，但最后一次可不足 512 字节。
</code></pre></li><li><pre><code>(2) 数据 PDU 也称为文件块(block)，每个块按序编号，从 1 开始。
</code></pre></li><li><pre><code>(3) 支持 ASCII 码或二进制传送。
</code></pre></li><li><pre><code>(4) 可对文件进行读或写。
</code></pre></li><li><pre><code>(5) 使用很简单的首部。 
</code></pre></li></ul></li></ul><h2 id="远程终端协议-telnet" tabindex="-1"><a class="header-anchor" href="#远程终端协议-telnet"><span>远程终端协议 TELNET</span></a></h2><h3 id="简述" tabindex="-1"><a class="header-anchor" href="#简述"><span>简述</span></a></h3><ul><li>TELNET 是一个简单的远程终端协议，也是因特网的正式标准。</li><li>用户用 TELNET 就可在其所在地通过 TCP 连接注册（即登录）到远地的另一个主机上（使用主机名或 IP 地址）。</li><li>TELNET 能将用户的击键传到远地主机，同时也能将远地主机的输出通过 TCP 连接返回到用户屏幕。这种服务是透明的，因为用户感觉到好像键盘和显示器是直接连在远地主机上。</li></ul><h2 id="万维网-www" tabindex="-1"><a class="header-anchor" href="#万维网-www"><span>万维网 WWW</span></a></h2><h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h3><ul><li>万维网 WWW (World Wide Web)并非某种特殊的计算机网络。</li><li>万维网是一个大规模的、联机式的信息储藏所。</li><li>万维网用链接的方法能非常方便地从因特网上的一个站点访问另一个站点，从而主动地按需获取丰富的信息。</li><li>这种访问方式称为“链接”。</li><li>万维网是分布式超媒体(hypermedia)系统，它是超文本(hypertext)系统的扩充。</li></ul><h3 id="万维网的工作方式" tabindex="-1"><a class="header-anchor" href="#万维网的工作方式"><span>万维网的工作方式</span></a></h3><ul><li>万维网以客户服务器方式工作。</li><li>浏览器就是在用户计算机上的万维网客户程序。万维网文档所驻留的计算机则运行服务器程序，因此这个计算机也称为万维网服务器。</li></ul><h3 id="万维网必须解决的问题" tabindex="-1"><a class="header-anchor" href="#万维网必须解决的问题"><span>万维网必须解决的问题</span></a></h3><ul><li>(1) 怎样标志分布在整个因特网上的万维网文档？<br> 使用统一资源定位符 URL (Uniform Resource Locator)来标志万维网上的各种文档。<br> 使每一个文档在整个因特网的范围内具有唯一的标识符 URL。</li><li>(2) 用何协议实现万维网上各种超链的链接？<br> 在万维网客户程序与万维网服务器程序之间进行交互所使用的协议，是超文本传送协议 HTTP (HyperText Transfer Protocol)。<br> HTTP 是一个应用层协议，它使用 TCP 连接进行可靠的传送。</li><li>(3) 怎样使各种万维网文档都能在因特网上的各种计算机上显示出来，同时使用户清楚地知道在什么地方存在着超链？<br> 超文本标记语言 HTML (HyperText Markup Language)使得万维网页面的设计者可以很方便地用一个超链从本页面的某处链接到因特网上的任何一个万维网页面，并且能够在自己的计算机屏幕上将这些页面显示出来。</li><li>(4) 怎样使用户能够很方便地找到所需的信息？<br> 为了在万维网上方便地查找信息，用户可使用各种的搜索工具（即搜索引擎）。</li></ul><h3 id="统一资源定位符-url" tabindex="-1"><a class="header-anchor" href="#统一资源定位符-url"><span>统一资源定位符 URL</span></a></h3><ul><li>统一资源定位符 URL 是对可以从因特网上得到的资源的位置和访问方法的一种简洁的表示。</li><li>URL 的一般形式是：&lt;协议&gt;://&lt;主机&gt;:&lt;端口&gt;/&lt;路径&gt;</li></ul><h3 id="超文本传送协议-http" tabindex="-1"><a class="header-anchor" href="#超文本传送协议-http"><span>超文本传送协议 HTTP</span></a></h3><ul><li>HTTP 是面向事务的客户服务器协议。</li><li>HTTP 1.0 协议是无状态的(stateless)。</li><li>HTTP 协议本身也是无连接的，虽然它使用了面向连接的 TCP 向上提供的服务。</li></ul><h3 id="万维网的文档" tabindex="-1"><a class="header-anchor" href="#万维网的文档"><span>万维网的文档</span></a></h3><ul><li>超文本标记语言 HTML <ul><li>超文本标记语言 HTML 中的 Markup 的意思就是“设置标记”。</li><li>HTML 定义了许多用于排版的命令（即标签）。</li><li>HTML 把各种标签嵌入到万维网的页面中。这样就构成了所谓的 HTML 文档。HTML 文档是一种可以用任何文本编辑器创建的 ASCII 码文件。</li></ul></li><li>动态万维网文档 <ul><li>静态文档是指该文档创作完毕后就存放在万维网服务器中，在被用户浏览的过程中，内容不会改变。</li><li>动态文档是指文档的内容是在浏览器访问万维网服务器时才由应用程序动态创建。</li><li>动态文档和静态文档之间的主要差别体现在服务器一端。这主要是文档内容的生成方法不同。而从浏览器的角度看，这两种文档并没有区别。</li></ul></li></ul><h3 id="万维网的信息检索系统" tabindex="-1"><a class="header-anchor" href="#万维网的信息检索系统"><span>万维网的信息检索系统</span></a></h3><ul><li>全文检索搜索 <ul><li>全文检索搜索引擎是一种纯技术型的检索工具。它的工作原理是通过搜索软件到因特网上的各网站收集信息，找到一个网站后可以从这个网站再链接到另一个网站。然后按照一定的规则建立一个很大的在线数据库供用户查询。</li></ul></li><li>分类目录搜索 <ul><li>分类目录搜索引擎并不采集网站的任何信息，而是利用各网站向搜索引擎提交的网站信息时填写的关键词和网站描述等信息，经过人工审核编辑后，如果认为符合网站登录的条件，则输入到分类目录的数据库中，供网上用户查询。</li></ul></li></ul><h2 id="电子邮件" tabindex="-1"><a class="header-anchor" href="#电子邮件"><span>电子邮件</span></a></h2><h3 id="电子邮件概述" tabindex="-1"><a class="header-anchor" href="#电子邮件概述"><span>电子邮件概述</span></a></h3><ul><li>电子邮件(e-mail)是因特网上使用得最多的和最受用户欢迎的一种应用。</li><li>电子邮件把邮件发送到收件人使用的邮件服务器，并放在其中的收件人邮箱中，收件人可随时上网到自己使用的邮件服务器进行读取。</li><li>电子邮件不仅使用方便，而且还具有传递迅速和费用低廉的优点。</li><li>一个电子邮件系统由三部分组成：用户代理、邮件服务器以及邮件协议。</li></ul><h3 id="电子邮件的最主要的组成构件" tabindex="-1"><a class="header-anchor" href="#电子邮件的最主要的组成构件"><span>电子邮件的最主要的组成构件</span></a></h3><h3 id="简单邮件传送协议-smtp" tabindex="-1"><a class="header-anchor" href="#简单邮件传送协议-smtp"><span>简单邮件传送协议 SMTP</span></a></h3><ul><li>SMTP 只能发送 ASCII 码，而互联网邮件扩充 MIME 可以发送二进制文件。MIME 并没有改动或者取代 SMTP，而是增加邮件主体的结构，定义了非 ASCII 码的编码规则。</li></ul><h3 id="电子邮件的信息格式" tabindex="-1"><a class="header-anchor" href="#电子邮件的信息格式"><span>电子邮件的信息格式</span></a></h3><ul><li>一个电子邮件分为信封和内容两大部分。</li><li>RFC 822 只规定了邮件内容中的首部(header)格式，而对邮件的主体(body)部分则让用户自由撰写。 <ul><li>邮件内容的首部 <ul><li>“To:”后面填入一个或多个收件人的电子邮件地址。用户只需打开地址簿，点击收件人名字，收件人的电子邮件地址就会自动地填入到合适的位置上。</li><li>“Subject:”是邮件的主题。它反映了邮件的主要内容，便于用户查找邮件。</li><li>抄送 “Cc:” 表示应给某某人发送一个邮件副本。</li><li>“From” 和 “Date” 表示发信人的电子邮件地址和发信日期。“Reply-To” 是对方回信所用的地址。</li></ul></li></ul></li></ul><h3 id="邮件读取协议-pop3-和-imap" tabindex="-1"><a class="header-anchor" href="#邮件读取协议-pop3-和-imap"><span>邮件读取协议 POP3 和 IMAP</span></a></h3><ul><li>POP3 <ul><li>POP3 的特点是只要用户从服务器上读取了邮件，就把该邮件删除。但最新版本的 POP3 可以不删除邮件。</li></ul></li><li>IMAP <ul><li>IMAP 协议中客户端和服务器上的邮件保持同步，如果不手动删除邮件，那么服务器上的邮件也不会被删除。IMAP 这种做法可以让用户随时随地去访问服务器上的邮件。</li></ul></li></ul><h3 id="基于万维网的电子邮件" tabindex="-1"><a class="header-anchor" href="#基于万维网的电子邮件"><span>基于万维网的电子邮件</span></a></h3><ul><li>例子 <ul><li>电子邮件从 A 发送到网易邮件服务器是使用 HTTP 协议。</li><li>两个邮件服务器之间的传送使用 SMTP。</li><li>邮件从新浪邮件服务器传送到 B 是使用 HTTP 协议。</li><li>概要: 示意图</li></ul></li></ul><h3 id="通用因特网邮件扩充-mime" tabindex="-1"><a class="header-anchor" href="#通用因特网邮件扩充-mime"><span>通用因特网邮件扩充 MIME</span></a></h3><ul><li>MIME 概述 <ul><li>MIME 并没有改动 SMTP 或取代它。</li><li>MIME 的意图是继续使用目前的[RFC 822]格式，但增加了邮件主体的结构，并定义了传送非 ASCII 码的编码规则。</li></ul></li></ul><h2 id="动态主机配置协议-dhcp" tabindex="-1"><a class="header-anchor" href="#动态主机配置协议-dhcp"><span>动态主机配置协议 DHCP</span></a></h2><ul><li>DHCP (Dynamic Host Configuration Protocol) 提供了即插即用的连网方式，用户不再需要手动配置 IP 地址等信息。</li><li>DHCP 配置的内容不仅是 IP 地址，还包括子网掩码、网关 IP 地址。</li></ul><h3 id="dhcp-工作过程如下" tabindex="-1"><a class="header-anchor" href="#dhcp-工作过程如下"><span>DHCP 工作过程如下：</span></a></h3><ul><li>1.客户端发送 Discover 报文，该报文的目的地址为 255.255.255.255:67，源地址为 0.0.0.0:68，被放入 UDP 中，该报文被广播到同一个子网的所有主机上。如果客户端和 DHCP 服务器不在同一个子网，就需要使用中继代理。<br> 2.DHCP 服务器收到 Discover 报文之后，发送 Offer 报文给客户端，该报文包含了客户端所需要的信息。因为客户端可能收到多个 DHCP 服务器提供的信息，因此客户端需要进行选择。<br> 3.如果客户端选择了某个 DHCP 服务器提供的信息，那么就发送 Request 报文给该 DHCP 服务器。<br> 4.DHCP 服务器发送 Ack 报文，表示客户端此时可以使用提供给它的信息。</li></ul><h2 id="简单网络管理协议-snmp" tabindex="-1"><a class="header-anchor" href="#简单网络管理协议-snmp"><span>简单网络管理协议 SNMP</span></a></h2><h3 id="网络管理的基本概念" tabindex="-1"><a class="header-anchor" href="#网络管理的基本概念"><span>网络管理的基本概念</span></a></h3><ul><li>网络管理包括对硬件、软件和人力的使用、综合与协调，以便对网络资源进行监视、测试、配置、分析、评价和控制，这样就能以合理的价格满足网络的一些需求，如实时运行性能，服务质量等。网络管理常简称为网管。</li><li>SNMP 的网络管理由三个部分组成 <ul><li>SNMP 本身 <ul><li>SNMP 定义了管理站和代理之间所交换的分组格式。所交换的分组包含各代理中的对象（变量）名及其状态（值）。</li></ul></li><li>管理信息结构 SMI (Structure of Management Information) <ul><li>SMI 定义了命名对象和定义对象类型（包括范围和长度）的通用规则，以及把对象和对象的值进行编码的规则。</li></ul></li><li>管理信息库 MIB(Management Information Base)。 <ul><li>MIB 在被管理的实体中创建了命名对象，并规定了其类型。</li></ul></li></ul></li></ul><h3 id="管理信息结构-smi" tabindex="-1"><a class="header-anchor" href="#管理信息结构-smi"><span>管理信息结构 SMI</span></a></h3><ul><li>SMI 的功能： <ul><li>(1) 被管对象应怎样命名；</li><li><pre><code>(2) 用来存储被管对象的数据类型有哪些种；
</code></pre></li><li><pre><code>(3) 在网络上传送的管理数据应如何编码。
</code></pre></li></ul></li></ul><h3 id="管理信息库-mib" tabindex="-1"><a class="header-anchor" href="#管理信息库-mib"><span>管理信息库 MIB</span></a></h3><ul><li>被管对象必须维持可供管理程序读写的若干控制和状态信息。这些信息总称为管理信息库 MIB 。</li></ul><h3 id="snmp-的协议数据单元和报文" tabindex="-1"><a class="header-anchor" href="#snmp-的协议数据单元和报文"><span>SNMP 的协议数据单元和报文</span></a></h3><ul><li>SNMP的操作只有两种基本的管理功能，即： <ul><li>“读”操作，用 get 报文来检测各被管对象的状况；</li><li>“写”操作，用 set 报文来改变各被管对象的状况。</li></ul></li><li>SNMP 的报文格式</li></ul>`,60)]))}const d=i(t,[["render",r],["__file","第 6 章  应用层.html.vue"]]),p=JSON.parse('{"path":"/posts/Computer-Basics/Computer-Network/%E7%AC%AC%206%20%E7%AB%A0%20%20%E5%BA%94%E7%94%A8%E5%B1%82.html","title":"6、应用层","lang":"zh-CN","frontmatter":{"title":"6、应用层","date":"2024-02-05 12:56","category":["计算机网络"],"tag":["计算机网络"],"description":"第 6 章 应用层 域名系统 DNS 域名系统概述 DNS 是一个分布式数据库，提供了主机名和 IP 地址之间相互转换的服务。这里的分布式数据库是指，每个站点只保留它自己的那部分数据。 因特网的域名结构 域名具有层次结构，从上到下依次为：根域名、顶级域名、二级域名。 域名服务器 一个服务器所负责管辖的（或有权限的）范围叫做区(zone)。 每一个区设置...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Computer-Basics/Computer-Network/%E7%AC%AC%206%20%E7%AB%A0%20%20%E5%BA%94%E7%94%A8%E5%B1%82.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"6、应用层"}],["meta",{"property":"og:description","content":"第 6 章 应用层 域名系统 DNS 域名系统概述 DNS 是一个分布式数据库，提供了主机名和 IP 地址之间相互转换的服务。这里的分布式数据库是指，每个站点只保留它自己的那部分数据。 因特网的域名结构 域名具有层次结构，从上到下依次为：根域名、顶级域名、二级域名。 域名服务器 一个服务器所负责管辖的（或有权限的）范围叫做区(zone)。 每一个区设置..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-25T09:16:19.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"计算机网络"}],["meta",{"property":"article:published_time","content":"2024-02-05T12:56:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-25T09:16:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6、应用层\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-05T12:56:00.000Z\\",\\"dateModified\\":\\"2024-10-25T09:16:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"域名系统 DNS","slug":"域名系统-dns","link":"#域名系统-dns","children":[{"level":3,"title":"域名系统概述","slug":"域名系统概述","link":"#域名系统概述","children":[]},{"level":3,"title":"因特网的域名结构","slug":"因特网的域名结构","link":"#因特网的域名结构","children":[]},{"level":3,"title":"域名服务器","slug":"域名服务器","link":"#域名服务器","children":[]}]},{"level":2,"title":"文件传送协议","slug":"文件传送协议","link":"#文件传送协议","children":[{"level":3,"title":"FTP 概述","slug":"ftp-概述","link":"#ftp-概述","children":[]},{"level":3,"title":"FTP 的基本工作原理","slug":"ftp-的基本工作原理","link":"#ftp-的基本工作原理","children":[]},{"level":3,"title":"简单文件传送协议 TFTP","slug":"简单文件传送协议-tftp","link":"#简单文件传送协议-tftp","children":[]}]},{"level":2,"title":"远程终端协议 TELNET","slug":"远程终端协议-telnet","link":"#远程终端协议-telnet","children":[{"level":3,"title":"简述","slug":"简述","link":"#简述","children":[]}]},{"level":2,"title":"万维网 WWW","slug":"万维网-www","link":"#万维网-www","children":[{"level":3,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":3,"title":"万维网的工作方式","slug":"万维网的工作方式","link":"#万维网的工作方式","children":[]},{"level":3,"title":"万维网必须解决的问题","slug":"万维网必须解决的问题","link":"#万维网必须解决的问题","children":[]},{"level":3,"title":"统一资源定位符 URL","slug":"统一资源定位符-url","link":"#统一资源定位符-url","children":[]},{"level":3,"title":"超文本传送协议 HTTP","slug":"超文本传送协议-http","link":"#超文本传送协议-http","children":[]},{"level":3,"title":"万维网的文档","slug":"万维网的文档","link":"#万维网的文档","children":[]},{"level":3,"title":"万维网的信息检索系统","slug":"万维网的信息检索系统","link":"#万维网的信息检索系统","children":[]}]},{"level":2,"title":"电子邮件","slug":"电子邮件","link":"#电子邮件","children":[{"level":3,"title":"电子邮件概述","slug":"电子邮件概述","link":"#电子邮件概述","children":[]},{"level":3,"title":"电子邮件的最主要的组成构件","slug":"电子邮件的最主要的组成构件","link":"#电子邮件的最主要的组成构件","children":[]},{"level":3,"title":"简单邮件传送协议 SMTP","slug":"简单邮件传送协议-smtp","link":"#简单邮件传送协议-smtp","children":[]},{"level":3,"title":"电子邮件的信息格式","slug":"电子邮件的信息格式","link":"#电子邮件的信息格式","children":[]},{"level":3,"title":"邮件读取协议 POP3 和 IMAP","slug":"邮件读取协议-pop3-和-imap","link":"#邮件读取协议-pop3-和-imap","children":[]},{"level":3,"title":"基于万维网的电子邮件","slug":"基于万维网的电子邮件","link":"#基于万维网的电子邮件","children":[]},{"level":3,"title":"通用因特网邮件扩充 MIME","slug":"通用因特网邮件扩充-mime","link":"#通用因特网邮件扩充-mime","children":[]}]},{"level":2,"title":"动态主机配置协议 DHCP","slug":"动态主机配置协议-dhcp","link":"#动态主机配置协议-dhcp","children":[{"level":3,"title":"DHCP 工作过程如下：","slug":"dhcp-工作过程如下","link":"#dhcp-工作过程如下","children":[]}]},{"level":2,"title":"简单网络管理协议 SNMP","slug":"简单网络管理协议-snmp","link":"#简单网络管理协议-snmp","children":[{"level":3,"title":"网络管理的基本概念","slug":"网络管理的基本概念","link":"#网络管理的基本概念","children":[]},{"level":3,"title":"管理信息结构 SMI","slug":"管理信息结构-smi","link":"#管理信息结构-smi","children":[]},{"level":3,"title":"管理信息库 MIB","slug":"管理信息库-mib","link":"#管理信息库-mib","children":[]},{"level":3,"title":"SNMP 的协议数据单元和报文","slug":"snmp-的协议数据单元和报文","link":"#snmp-的协议数据单元和报文","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729847779000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":2}]},"readingTime":{"minutes":12,"words":3599},"filePathRelative":"posts/Computer-Basics/Computer-Network/第 6 章  应用层.md","localizedDate":"2024年2月5日","excerpt":"\\n<h2>域名系统 DNS</h2>\\n<h3>域名系统概述</h3>\\n<ul>\\n<li>DNS 是一个分布式数据库，提供了主机名和 IP 地址之间相互转换的服务。这里的分布式数据库是指，每个站点只保留它自己的那部分数据。</li>\\n</ul>\\n<h3>因特网的域名结构</h3>\\n<ul>\\n<li>域名具有层次结构，从上到下依次为：根域名、顶级域名、二级域名。</li>\\n</ul>\\n<h3>域名服务器</h3>\\n<ul>\\n<li>一个服务器所负责管辖的（或有权限的）范围叫做区(zone)。</li>\\n<li>每一个区设置相应的权限域名服务器，用来保存该区中的所有主机的域名到IP地址的映射。</li>\\n<li></li>\\n<li>DNS 可以使用 UDP 或者 TCP 进行传输，使用的端口号都为 53。大多数情况下 DNS 使用 UDP 进行传输，这就要求域名解析器和域名服务器都必须自己处理超时和重传从而保证可靠性。在两种情况下会使用 TCP 进行传输：\\n<ul>\\n<li>如果返回的响应超过的 512 字节（UDP 最大只支持 512 字节的数据）。</li>\\n<li>区域传送（区域传送是主域名服务器向辅助域名服务器传送变化的那部分数据）。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{d as comp,p as data};
