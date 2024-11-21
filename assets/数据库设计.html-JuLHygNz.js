import{_ as l,c as a,a as n,o as i}from"./app-CpAF2rca.js";const h={};function s(t,e){return i(),a("div",null,e[0]||(e[0]=[n('<h1 id="数据库设计" tabindex="-1"><a class="header-anchor" href="#数据库设计"><span>数据库设计</span></a></h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><h3 id="数据库技术是信息资源管理最有效的手段。数据库设计是指对于一个给定的应用环境-构造最优的数据库模式-建立数据库极其应用系统-有效存储数据-满足用户信息要求和处理要求。" tabindex="-1"><a class="header-anchor" href="#数据库技术是信息资源管理最有效的手段。数据库设计是指对于一个给定的应用环境-构造最优的数据库模式-建立数据库极其应用系统-有效存储数据-满足用户信息要求和处理要求。"><span>数据库技术是信息资源管理最有效的手段。数据库设计是指对于一个给定的应用环境，构造最优的数据库模式，建立数据库极其应用系统，有效存储数据，满足用户信息要求和处理要求。</span></a></h3><h2 id="数据库设计的步骤" tabindex="-1"><a class="header-anchor" href="#数据库设计的步骤"><span>数据库设计的步骤</span></a></h2><h3 id="_1-需求分析阶段" tabindex="-1"><a class="header-anchor" href="#_1-需求分析阶段"><span>⒈需求分析阶段</span></a></h3><ul><li>收集和分析用户需求，结果得到数据字典描述的数据需求。</li><li>常用的调查方法 <ul><li>⑴跟班作业</li><li>⑵开调查会</li><li>⑶请专人介绍</li><li>⑷询问对某些调查中的问题，可以找专人询问。</li><li>⑸设计调查表请用户填写</li><li>⑹查阅记录</li></ul></li></ul><h3 id="_2-概念结构设计阶段" tabindex="-1"><a class="header-anchor" href="#_2-概念结构设计阶段"><span>⒉概念结构设计阶段</span></a></h3><ul><li>通过对用户需求进行综合、归纳与抽象，形成一个独立于具体DBMS的概念模型，可以用E-R图表示。这是数据库设计的关键</li></ul><h3 id="_3-逻辑结构设计阶段" tabindex="-1"><a class="header-anchor" href="#_3-逻辑结构设计阶段"><span>⒊逻辑结构设计阶段</span></a></h3><ul><li>将概念结构转换为某个DBMS所支持的数据模型（例如关系模型），并对其进行优化（例如使用范式理论）</li></ul><h3 id="_4-数据库物理设计阶段" tabindex="-1"><a class="header-anchor" href="#_4-数据库物理设计阶段"><span>⒋数据库物理设计阶段</span></a></h3><ul><li>为逻辑数据模型选取一个最适合应用环境的物理结构（包括存储结构和存取方法）。</li></ul><h3 id="_5-数据库实施阶段" tabindex="-1"><a class="header-anchor" href="#_5-数据库实施阶段"><span>⒌数据库实施阶段</span></a></h3><ul><li>运用DBMS提供的数据语言（例如SQL）及其宿主语言（例如C），根据逻辑设计和物理设计的结果建立数据库，编制与调试应用程序，组织数据入库，并进行试运行</li></ul><h3 id="_6-数据库运行和维护阶段" tabindex="-1"><a class="header-anchor" href="#_6-数据库运行和维护阶段"><span>⒍数据库运行和维护阶段</span></a></h3><ul><li>数据库应用系统经过试运行后即可投入正式运行。在数据库系统运行过程中必须不断地对其进行评价、调整与修改</li></ul><h2 id="数据字典" tabindex="-1"><a class="header-anchor" href="#数据字典"><span>数据字典</span></a></h2><h3 id="对数据库设计来讲-数据字典是进行数据收集和数据分析所获得的主要成果。数据字典是各类数据描述的集合。" tabindex="-1"><a class="header-anchor" href="#对数据库设计来讲-数据字典是进行数据收集和数据分析所获得的主要成果。数据字典是各类数据描述的集合。"><span>对数据库设计来讲，数据字典是进行数据收集和数据分析所获得的主要成果。数据字典是各类数据描述的集合。</span></a></h3><h3 id="数据字典通常包括数据项、数据结构、数据流、数据存储和处理过程五个部分。" tabindex="-1"><a class="header-anchor" href="#数据字典通常包括数据项、数据结构、数据流、数据存储和处理过程五个部分。"><span>数据字典通常包括数据项、数据结构、数据流、数据存储和处理过程五个部分。</span></a></h3><ul><li>数据项是不可再分的数据单位</li><li>数据结构反映了数据之间的组合关系。一个数据结构可以由若干个数据项组成，也可以由若干个数据结构组成，或由若干个数据项和数据结构混合组成</li><li>数据流是数据结构在系统内传输的路径</li><li>数据存储是数据结构停留或保存的地方，也是数据流的来源和去向之一</li><li>处理过程描述＝｛处理过程名，说明，输入:｛数据流｝，输出:｛数据流｝, 处理:｛简要说明｝｝</li></ul><h2 id="设计概念结构通常有四类方法" tabindex="-1"><a class="header-anchor" href="#设计概念结构通常有四类方法"><span>设计概念结构通常有四类方法</span></a></h2><h3 id="自顶向下" tabindex="-1"><a class="header-anchor" href="#自顶向下"><span>自顶向下</span></a></h3><ul><li>即首先定义全局概念结构的框架，然后逐步细化。</li></ul><h3 id="自底向上" tabindex="-1"><a class="header-anchor" href="#自底向上"><span>自底向上</span></a></h3><ul><li>即首先定义各局部应用的概念结构，然后将它们集成起来，得到全局概念结构。这是最经常采用的策略。即自顶向下地进行需求分析，然后再自底向上地设计概念结构</li></ul><h3 id="逐步扩张" tabindex="-1"><a class="header-anchor" href="#逐步扩张"><span>逐步扩张</span></a></h3><ul><li>首先定义最重要的核心概念结构，然后向外扩充，以滚雪球的方式逐步生成其他概念结构，直至总体概念结构</li></ul><h3 id="混合策略" tabindex="-1"><a class="header-anchor" href="#混合策略"><span>混合策略</span></a></h3><ul><li>即将自顶向下和自底向上相结合，用自顶向下策略设计一个全局概念结构的框架，以它为骨架集成由自底向上策略中设计的各局部概念结构</li></ul><h2 id="e-r图" tabindex="-1"><a class="header-anchor" href="#e-r图"><span>E-R图</span></a></h2><h3 id="e-r方法是抽象和描述现实世界的有力工具" tabindex="-1"><a class="header-anchor" href="#e-r方法是抽象和描述现实世界的有力工具"><span>E-R方法是抽象和描述现实世界的有力工具</span></a></h3><h3 id="要点" tabindex="-1"><a class="header-anchor" href="#要点"><span>要点</span></a></h3><ul><li>使用长方形来表示实体型，框内写上实体名</li><li>椭圆型表示实体的属性，并用无向边把实体和属性连接起来。</li><li>用菱形表示实体间的联系，菱形框内写上联系名，用无向边把菱形分别与有关实体相连接，在无向边旁标上联系的类型，若实体之间联系也具有属性，则把属性和菱形也用无向边连接上。</li></ul><h3 id="e-r图之间的冲突主要有三类" tabindex="-1"><a class="header-anchor" href="#e-r图之间的冲突主要有三类"><span>E-R图之间的冲突主要有三类</span></a></h3><ul><li>属性冲突 <ul><li>(1) 属性域冲突，即属性值的类型、取值范围或取值集合不同。</li><li>(2) 属性取值单位冲突</li></ul></li><li>命名冲突 <ul><li>(1) 同名异义</li><li>(2) 异名同义（一义多名）</li></ul></li><li>结构冲突 <ul><li>(1) 同一对象在不同应用中具有不同的抽象。例如“教材”在某一局部应用中被当作实体，而在另一局部应用中则被当作属性</li><li>(2) 同一实体在不同局部视图中所包含的属性不完全相同，或者属性的排列次序不完全相同</li><li>(3) 实体之间的联系在不同局部视图中呈现不同的类型。例如实体E1与E2在局部应用A中是多对多联系，而在局部应用B中是一对多联系；又如在局部应用X中E1与E2发生联系，而在局部应用Y中E1、E2、E3三者之间有联系</li></ul></li></ul><h2 id="逻辑结构设计阶段" tabindex="-1"><a class="header-anchor" href="#逻辑结构设计阶段"><span>逻辑结构设计阶段</span></a></h2><h3 id="_1-一个实体型转换为一个关系模式。实体的属性就是关系的属性。实体的码就是关系的码。" tabindex="-1"><a class="header-anchor" href="#_1-一个实体型转换为一个关系模式。实体的属性就是关系的属性。实体的码就是关系的码。"><span>⒈一个实体型转换为一个关系模式。实体的属性就是关系的属性。实体的码就是关系的码。</span></a></h3><h3 id="_2-一个m-n联系转换为一个关系模式。与该联系相连的各实体的码以及联系本身的属性均转换为关系的属性。而关系的码为各实体码的组合。" tabindex="-1"><a class="header-anchor" href="#_2-一个m-n联系转换为一个关系模式。与该联系相连的各实体的码以及联系本身的属性均转换为关系的属性。而关系的码为各实体码的组合。"><span>⒉一个m:n联系转换为一个关系模式。与该联系相连的各实体的码以及联系本身的属性均转换为关系的属性。而关系的码为各实体码的组合。</span></a></h3><h3 id="_3-一个1-n联系可以转换为一个独立的关系模式-也可以与n端对应的关系模式合并。如果转换为一个独立的关系模式-则与该联系相连的各实体的码以及联系本身的属性均转换为关系的属性-而关系的码为n端实体的码。" tabindex="-1"><a class="header-anchor" href="#_3-一个1-n联系可以转换为一个独立的关系模式-也可以与n端对应的关系模式合并。如果转换为一个独立的关系模式-则与该联系相连的各实体的码以及联系本身的属性均转换为关系的属性-而关系的码为n端实体的码。"><span>⒊一个1:n联系可以转换为一个独立的关系模式，也可以与n端对应的关系模式合并。如果转换为一个独立的关系模式，则与该联系相连的各实体的码以及联系本身的属性均转换为关系的属性，而关系的码为n端实体的码。</span></a></h3><h3 id="_4-一个1-1联系可以转换为一个独立的关系模式-也可以与任意一端对应的关系模式合并。如果转换为一个独立的关系模式-则与该联系相连的各实体的码以及联系本身的属性均转换为关系的属性-每个实体的码均是该关系的候选码。如果与某一端对应的关系模式合并-则需要在该关系模式的属性中加入另一个关系模式的码和联系本身的属性。" tabindex="-1"><a class="header-anchor" href="#_4-一个1-1联系可以转换为一个独立的关系模式-也可以与任意一端对应的关系模式合并。如果转换为一个独立的关系模式-则与该联系相连的各实体的码以及联系本身的属性均转换为关系的属性-每个实体的码均是该关系的候选码。如果与某一端对应的关系模式合并-则需要在该关系模式的属性中加入另一个关系模式的码和联系本身的属性。"><span>⒋一个1:1联系可以转换为一个独立的关系模式，也可以与任意一端对应的关系模式合并。如果转换为一个独立的关系模式，则与该联系相连的各实体的码以及联系本身的属性均转换为关系的属性，每个实体的码均是该关系的候选码。如果与某一端对应的关系模式合并，则需要在该关系模式的属性中加入另一个关系模式的码和联系本身的属性。</span></a></h3><h3 id="_5-三个或三个以上实体间的一个多元联系转换为一个关系模式。与该多元联系相连的各实体的码以及联系本身的属性均转换为关系的属性。而关系的码为各实体码的组合。" tabindex="-1"><a class="header-anchor" href="#_5-三个或三个以上实体间的一个多元联系转换为一个关系模式。与该多元联系相连的各实体的码以及联系本身的属性均转换为关系的属性。而关系的码为各实体码的组合。"><span>⒌三个或三个以上实体间的一个多元联系转换为一个关系模式。与该多元联系相连的各实体的码以及联系本身的属性均转换为关系的属性。而关系的码为各实体码的组合。</span></a></h3><h3 id="_6-具有相同码的关系模式可合并。" tabindex="-1"><a class="header-anchor" href="#_6-具有相同码的关系模式可合并。"><span>6. 具有相同码的关系模式可合并。</span></a></h3><h2 id="数据模型的优化" tabindex="-1"><a class="header-anchor" href="#数据模型的优化"><span>数据模型的优化</span></a></h2><h3 id="确定数据依赖" tabindex="-1"><a class="header-anchor" href="#确定数据依赖"><span>确定数据依赖</span></a></h3><h3 id="对于各个关系模式之间的数据依赖进行极小化处理-消除冗余的联系。" tabindex="-1"><a class="header-anchor" href="#对于各个关系模式之间的数据依赖进行极小化处理-消除冗余的联系。"><span>对于各个关系模式之间的数据依赖进行极小化处理，消除冗余的联系。</span></a></h3><h3 id="按照数据依赖的理论对关系模式逐一进行分析-考查是否存在部分函数依赖、传递函数依赖、多值依赖等-确定各关系模式分别属于第几范式。" tabindex="-1"><a class="header-anchor" href="#按照数据依赖的理论对关系模式逐一进行分析-考查是否存在部分函数依赖、传递函数依赖、多值依赖等-确定各关系模式分别属于第几范式。"><span>按照数据依赖的理论对关系模式逐一进行分析，考查是否存在部分函数依赖、传递函数依赖、多值依赖等，确定各关系模式分别属于第几范式。</span></a></h3><h3 id="按照需求分析阶段得到的各种应用对数据处理的要求-分析对于这样的应用环境这些模式是否合适-确定是否要对它们进行合并或分解。" tabindex="-1"><a class="header-anchor" href="#按照需求分析阶段得到的各种应用对数据处理的要求-分析对于这样的应用环境这些模式是否合适-确定是否要对它们进行合并或分解。"><span>按照需求分析阶段得到的各种应用对数据处理的要求，分析对于这样的应用环境这些模式是否合适，确定是否要对它们进行合并或分解。</span></a></h3><h3 id="对关系模式进行必要的分解。" tabindex="-1"><a class="header-anchor" href="#对关系模式进行必要的分解。"><span>对关系模式进行必要的分解。</span></a></h3><h2 id="设计用户子模式" tabindex="-1"><a class="header-anchor" href="#设计用户子模式"><span>设计用户子模式</span></a></h2><h3 id="_1-使用更符合用户习惯的别名" tabindex="-1"><a class="header-anchor" href="#_1-使用更符合用户习惯的别名"><span>(1) 使用更符合用户习惯的别名</span></a></h3><h3 id="_2-针对不同级别的用户定义不同的视图-以满足系统对安全性的要求" tabindex="-1"><a class="header-anchor" href="#_2-针对不同级别的用户定义不同的视图-以满足系统对安全性的要求"><span>(2) 针对不同级别的用户定义不同的视图，以满足系统对安全性的要求</span></a></h3><h3 id="_3-简化用户对系统的使用" tabindex="-1"><a class="header-anchor" href="#_3-简化用户对系统的使用"><span>(3) 简化用户对系统的使用</span></a></h3><h2 id="数据库物理设计" tabindex="-1"><a class="header-anchor" href="#数据库物理设计"><span>数据库物理设计</span></a></h2><h3 id="确定数据库存储结构时要综合考虑存取时间、存储空间利用率和维护代价三方面的因素。这三个方面常常是相互矛盾的。" tabindex="-1"><a class="header-anchor" href="#确定数据库存储结构时要综合考虑存取时间、存储空间利用率和维护代价三方面的因素。这三个方面常常是相互矛盾的。"><span>确定数据库存储结构时要综合考虑存取时间、存储空间利用率和维护代价三方面的因素。这三个方面常常是相互矛盾的。</span></a></h3><h3 id="为了提高系统性能-数据应该根据应用情况将易变部分与稳定部分、经常存取部分和存取频率较低部分分开存放" tabindex="-1"><a class="header-anchor" href="#为了提高系统性能-数据应该根据应用情况将易变部分与稳定部分、经常存取部分和存取频率较低部分分开存放"><span>为了提高系统性能，数据应该根据应用情况将易变部分与稳定部分、经常存取部分和存取频率较低部分分开存放</span></a></h3><p><em>XMind: ZEN - Trial Version</em></p>',56)]))}const d=l(h,[["render",s],["__file","数据库设计.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/MySQL/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AE%BE%E8%AE%A1.html","title":"3、数据库设计","lang":"zh-CN","frontmatter":{"title":"3、数据库设计","date":"2024-03-10 09:58","category":["数据库"],"tag":["MySQL"],"description":"数据库设计 概述 数据库技术是信息资源管理最有效的手段。数据库设计是指对于一个给定的应用环境，构造最优的数据库模式，建立数据库极其应用系统，有效存储数据，满足用户信息要求和处理要求。 数据库设计的步骤 ⒈需求分析阶段 收集和分析用户需求，结果得到数据字典描述的数据需求。 常用的调查方法 ⑴跟班作业 ⑵开调查会 ⑶请专人介绍 ⑷询问对某些调查中的问题，可...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MySQL/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AE%BE%E8%AE%A1.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"3、数据库设计"}],["meta",{"property":"og:description","content":"数据库设计 概述 数据库技术是信息资源管理最有效的手段。数据库设计是指对于一个给定的应用环境，构造最优的数据库模式，建立数据库极其应用系统，有效存储数据，满足用户信息要求和处理要求。 数据库设计的步骤 ⒈需求分析阶段 收集和分析用户需求，结果得到数据字典描述的数据需求。 常用的调查方法 ⑴跟班作业 ⑵开调查会 ⑶请专人介绍 ⑷询问对某些调查中的问题，可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2024-03-10T09:58:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3、数据库设计\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-10T09:58:00.000Z\\",\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[{"level":3,"title":"数据库技术是信息资源管理最有效的手段。数据库设计是指对于一个给定的应用环境，构造最优的数据库模式，建立数据库极其应用系统，有效存储数据，满足用户信息要求和处理要求。","slug":"数据库技术是信息资源管理最有效的手段。数据库设计是指对于一个给定的应用环境-构造最优的数据库模式-建立数据库极其应用系统-有效存储数据-满足用户信息要求和处理要求。","link":"#数据库技术是信息资源管理最有效的手段。数据库设计是指对于一个给定的应用环境-构造最优的数据库模式-建立数据库极其应用系统-有效存储数据-满足用户信息要求和处理要求。","children":[]}]},{"level":2,"title":"数据库设计的步骤","slug":"数据库设计的步骤","link":"#数据库设计的步骤","children":[{"level":3,"title":"⒈需求分析阶段","slug":"_1-需求分析阶段","link":"#_1-需求分析阶段","children":[]},{"level":3,"title":"⒉概念结构设计阶段","slug":"_2-概念结构设计阶段","link":"#_2-概念结构设计阶段","children":[]},{"level":3,"title":"⒊逻辑结构设计阶段","slug":"_3-逻辑结构设计阶段","link":"#_3-逻辑结构设计阶段","children":[]},{"level":3,"title":"⒋数据库物理设计阶段","slug":"_4-数据库物理设计阶段","link":"#_4-数据库物理设计阶段","children":[]},{"level":3,"title":"⒌数据库实施阶段","slug":"_5-数据库实施阶段","link":"#_5-数据库实施阶段","children":[]},{"level":3,"title":"⒍数据库运行和维护阶段","slug":"_6-数据库运行和维护阶段","link":"#_6-数据库运行和维护阶段","children":[]}]},{"level":2,"title":"数据字典","slug":"数据字典","link":"#数据字典","children":[{"level":3,"title":"对数据库设计来讲，数据字典是进行数据收集和数据分析所获得的主要成果。数据字典是各类数据描述的集合。","slug":"对数据库设计来讲-数据字典是进行数据收集和数据分析所获得的主要成果。数据字典是各类数据描述的集合。","link":"#对数据库设计来讲-数据字典是进行数据收集和数据分析所获得的主要成果。数据字典是各类数据描述的集合。","children":[]},{"level":3,"title":"数据字典通常包括数据项、数据结构、数据流、数据存储和处理过程五个部分。","slug":"数据字典通常包括数据项、数据结构、数据流、数据存储和处理过程五个部分。","link":"#数据字典通常包括数据项、数据结构、数据流、数据存储和处理过程五个部分。","children":[]}]},{"level":2,"title":"设计概念结构通常有四类方法","slug":"设计概念结构通常有四类方法","link":"#设计概念结构通常有四类方法","children":[{"level":3,"title":"自顶向下","slug":"自顶向下","link":"#自顶向下","children":[]},{"level":3,"title":"自底向上","slug":"自底向上","link":"#自底向上","children":[]},{"level":3,"title":"逐步扩张","slug":"逐步扩张","link":"#逐步扩张","children":[]},{"level":3,"title":"混合策略","slug":"混合策略","link":"#混合策略","children":[]}]},{"level":2,"title":"E-R图","slug":"e-r图","link":"#e-r图","children":[{"level":3,"title":"E-R方法是抽象和描述现实世界的有力工具","slug":"e-r方法是抽象和描述现实世界的有力工具","link":"#e-r方法是抽象和描述现实世界的有力工具","children":[]},{"level":3,"title":"要点","slug":"要点","link":"#要点","children":[]},{"level":3,"title":"E-R图之间的冲突主要有三类","slug":"e-r图之间的冲突主要有三类","link":"#e-r图之间的冲突主要有三类","children":[]}]},{"level":2,"title":"逻辑结构设计阶段","slug":"逻辑结构设计阶段","link":"#逻辑结构设计阶段","children":[{"level":3,"title":"⒈一个实体型转换为一个关系模式。实体的属性就是关系的属性。实体的码就是关系的码。","slug":"_1-一个实体型转换为一个关系模式。实体的属性就是关系的属性。实体的码就是关系的码。","link":"#_1-一个实体型转换为一个关系模式。实体的属性就是关系的属性。实体的码就是关系的码。","children":[]},{"level":3,"title":"⒉一个m:n联系转换为一个关系模式。与该联系相连的各实体的码以及联系本身的属性均转换为关系的属性。而关系的码为各实体码的组合。","slug":"_2-一个m-n联系转换为一个关系模式。与该联系相连的各实体的码以及联系本身的属性均转换为关系的属性。而关系的码为各实体码的组合。","link":"#_2-一个m-n联系转换为一个关系模式。与该联系相连的各实体的码以及联系本身的属性均转换为关系的属性。而关系的码为各实体码的组合。","children":[]},{"level":3,"title":"⒊一个1:n联系可以转换为一个独立的关系模式，也可以与n端对应的关系模式合并。如果转换为一个独立的关系模式，则与该联系相连的各实体的码以及联系本身的属性均转换为关系的属性，而关系的码为n端实体的码。","slug":"_3-一个1-n联系可以转换为一个独立的关系模式-也可以与n端对应的关系模式合并。如果转换为一个独立的关系模式-则与该联系相连的各实体的码以及联系本身的属性均转换为关系的属性-而关系的码为n端实体的码。","link":"#_3-一个1-n联系可以转换为一个独立的关系模式-也可以与n端对应的关系模式合并。如果转换为一个独立的关系模式-则与该联系相连的各实体的码以及联系本身的属性均转换为关系的属性-而关系的码为n端实体的码。","children":[]},{"level":3,"title":"⒋一个1:1联系可以转换为一个独立的关系模式，也可以与任意一端对应的关系模式合并。如果转换为一个独立的关系模式，则与该联系相连的各实体的码以及联系本身的属性均转换为关系的属性，每个实体的码均是该关系的候选码。如果与某一端对应的关系模式合并，则需要在该关系模式的属性中加入另一个关系模式的码和联系本身的属性。","slug":"_4-一个1-1联系可以转换为一个独立的关系模式-也可以与任意一端对应的关系模式合并。如果转换为一个独立的关系模式-则与该联系相连的各实体的码以及联系本身的属性均转换为关系的属性-每个实体的码均是该关系的候选码。如果与某一端对应的关系模式合并-则需要在该关系模式的属性中加入另一个关系模式的码和联系本身的属性。","link":"#_4-一个1-1联系可以转换为一个独立的关系模式-也可以与任意一端对应的关系模式合并。如果转换为一个独立的关系模式-则与该联系相连的各实体的码以及联系本身的属性均转换为关系的属性-每个实体的码均是该关系的候选码。如果与某一端对应的关系模式合并-则需要在该关系模式的属性中加入另一个关系模式的码和联系本身的属性。","children":[]},{"level":3,"title":"⒌三个或三个以上实体间的一个多元联系转换为一个关系模式。与该多元联系相连的各实体的码以及联系本身的属性均转换为关系的属性。而关系的码为各实体码的组合。","slug":"_5-三个或三个以上实体间的一个多元联系转换为一个关系模式。与该多元联系相连的各实体的码以及联系本身的属性均转换为关系的属性。而关系的码为各实体码的组合。","link":"#_5-三个或三个以上实体间的一个多元联系转换为一个关系模式。与该多元联系相连的各实体的码以及联系本身的属性均转换为关系的属性。而关系的码为各实体码的组合。","children":[]},{"level":3,"title":"6. 具有相同码的关系模式可合并。","slug":"_6-具有相同码的关系模式可合并。","link":"#_6-具有相同码的关系模式可合并。","children":[]}]},{"level":2,"title":"数据模型的优化","slug":"数据模型的优化","link":"#数据模型的优化","children":[{"level":3,"title":"确定数据依赖","slug":"确定数据依赖","link":"#确定数据依赖","children":[]},{"level":3,"title":"对于各个关系模式之间的数据依赖进行极小化处理，消除冗余的联系。","slug":"对于各个关系模式之间的数据依赖进行极小化处理-消除冗余的联系。","link":"#对于各个关系模式之间的数据依赖进行极小化处理-消除冗余的联系。","children":[]},{"level":3,"title":"按照数据依赖的理论对关系模式逐一进行分析，考查是否存在部分函数依赖、传递函数依赖、多值依赖等，确定各关系模式分别属于第几范式。","slug":"按照数据依赖的理论对关系模式逐一进行分析-考查是否存在部分函数依赖、传递函数依赖、多值依赖等-确定各关系模式分别属于第几范式。","link":"#按照数据依赖的理论对关系模式逐一进行分析-考查是否存在部分函数依赖、传递函数依赖、多值依赖等-确定各关系模式分别属于第几范式。","children":[]},{"level":3,"title":"按照需求分析阶段得到的各种应用对数据处理的要求，分析对于这样的应用环境这些模式是否合适，确定是否要对它们进行合并或分解。","slug":"按照需求分析阶段得到的各种应用对数据处理的要求-分析对于这样的应用环境这些模式是否合适-确定是否要对它们进行合并或分解。","link":"#按照需求分析阶段得到的各种应用对数据处理的要求-分析对于这样的应用环境这些模式是否合适-确定是否要对它们进行合并或分解。","children":[]},{"level":3,"title":"对关系模式进行必要的分解。","slug":"对关系模式进行必要的分解。","link":"#对关系模式进行必要的分解。","children":[]}]},{"level":2,"title":"设计用户子模式","slug":"设计用户子模式","link":"#设计用户子模式","children":[{"level":3,"title":"(1) 使用更符合用户习惯的别名","slug":"_1-使用更符合用户习惯的别名","link":"#_1-使用更符合用户习惯的别名","children":[]},{"level":3,"title":"(2) 针对不同级别的用户定义不同的视图，以满足系统对安全性的要求","slug":"_2-针对不同级别的用户定义不同的视图-以满足系统对安全性的要求","link":"#_2-针对不同级别的用户定义不同的视图-以满足系统对安全性的要求","children":[]},{"level":3,"title":"(3) 简化用户对系统的使用","slug":"_3-简化用户对系统的使用","link":"#_3-简化用户对系统的使用","children":[]}]},{"level":2,"title":"数据库物理设计","slug":"数据库物理设计","link":"#数据库物理设计","children":[{"level":3,"title":"确定数据库存储结构时要综合考虑存取时间、存储空间利用率和维护代价三方面的因素。这三个方面常常是相互矛盾的。","slug":"确定数据库存储结构时要综合考虑存取时间、存储空间利用率和维护代价三方面的因素。这三个方面常常是相互矛盾的。","link":"#确定数据库存储结构时要综合考虑存取时间、存储空间利用率和维护代价三方面的因素。这三个方面常常是相互矛盾的。","children":[]},{"level":3,"title":"为了提高系统性能，数据应该根据应用情况将易变部分与稳定部分、经常存取部分和存取频率较低部分分开存放","slug":"为了提高系统性能-数据应该根据应用情况将易变部分与稳定部分、经常存取部分和存取频率较低部分分开存放","link":"#为了提高系统性能-数据应该根据应用情况将易变部分与稳定部分、经常存取部分和存取频率较低部分分开存放","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.92,"words":2075},"filePathRelative":"posts/Database/MySQL/数据库设计.md","localizedDate":"2024年3月10日","excerpt":"\\n<h2>概述</h2>\\n<h3>数据库技术是信息资源管理最有效的手段。数据库设计是指对于一个给定的应用环境，构造最优的数据库模式，建立数据库极其应用系统，有效存储数据，满足用户信息要求和处理要求。</h3>\\n<h2>数据库设计的步骤</h2>\\n<h3>⒈需求分析阶段</h3>\\n<ul>\\n<li>收集和分析用户需求，结果得到数据字典描述的数据需求。</li>\\n<li>常用的调查方法\\n<ul>\\n<li>⑴跟班作业</li>\\n<li>⑵开调查会</li>\\n<li>⑶请专人介绍</li>\\n<li>⑷询问对某些调查中的问题，可以找专人询问。</li>\\n<li>⑸设计调查表请用户填写</li>\\n<li>⑹查阅记录</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{d as comp,c as data};
