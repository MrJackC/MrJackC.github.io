import{_ as a,c as i,a as t,o as n}from"./app-BOcQBfH9.js";const s={};function o(r,e){return n(),i("div",null,e[0]||(e[0]=[t(`<h1 id="idea-插件" tabindex="-1"><a class="header-anchor" href="#idea-插件"><span>IDEA 插件</span></a></h1><p>工欲善其事必先利其器，分享几个比较好用的IDEA 插件</p><h2 id="lombok" tabindex="-1"><a class="header-anchor" href="#lombok"><span><strong>Lombok</strong></span></a></h2><blockquote><p>Lombok目前已经是开发Java应用的标配了，不仅SpringBoot默认支持它，连IDEA也内置了Lombok插件，无需安装即可使用。Lombok是一款Java代码功能增强库，通过Lombok的注解，你可以不用再写getter、setter、equals等方法，Lombok将在编译时为你自动生成。</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022473.png" alt="image-20220830170738919" tabindex="0" loading="lazy"><figcaption>image-20220830170738919</figcaption></figure><p>举个例子，当我们给一个类添加@Getter和@Setter注解后；</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 修改订单费用信息参数</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * Created by macro on 2018/10/29.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Getter</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Setter</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> OmsMoneyInfoParam</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ApiModelProperty</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;订单ID&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> orderId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ApiModelProperty</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;运费金额&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> BigDecimal</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> freightAmount</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ApiModelProperty</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;管理员后台调整订单所使用的折扣金额&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> BigDecimal</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> discountAmount</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ApiModelProperty</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;订单状态：0-&gt;待付款；1-&gt;待发货；2-&gt;已发货；3-&gt;已完成；4-&gt;已关闭；5-&gt;无效订单&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Integer</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> status</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lombok就会为我们自动生成所有属性的Getter和Setter方法，无需我们再手写，具体使用可以参考<a href="https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&amp;mid=2247488419&amp;idx=1&amp;sn=8fcd89fe0727a5b3fc4179db3aaf9891&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">Lombok的使用</a> 。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022516.png" alt="image-20220830170825950" tabindex="0" loading="lazy"><figcaption>image-20220830170825950</figcaption></figure><h2 id="maven-helper-maven依赖分析工具" tabindex="-1"><a class="header-anchor" href="#maven-helper-maven依赖分析工具"><span><strong>Maven Helper</strong>（Maven依赖分析工具）</span></a></h2><blockquote><p>解决Maven依赖冲突的好帮手，可以快速查找项目中的依赖冲突，并予以解决！</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022540.png" alt="image-20220830170334839" tabindex="0" loading="lazy"><figcaption>image-20220830170334839</figcaption></figure><p>我们可以通过<code>pom.xml</code>文件底部的<code>依赖分析</code>标签页查看当前项目中的所有依赖。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231026228.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>通过<code>冲突</code>按钮我们可以筛选出所有冲突的依赖，当前项目<code>guava</code>依赖有冲突，目前使用的是<code>18.0</code>版本。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022562.png" alt="image-20220830170442742" tabindex="0" loading="lazy"><figcaption>image-20220830170442742</figcaption></figure><p>选中有冲突的依赖，点击<code>Exclude</code>按钮可以直接排除该依赖。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022587.png" alt="image-20220830170500791" tabindex="0" loading="lazy"><figcaption>image-20220830170500791</figcaption></figure><p>同时<code>pom.xml</code>中也会对该依赖添加<code>&lt;exclusion&gt;</code>标签，是不是很方便啊！</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022609.png" alt="image-20220830170517332" tabindex="0" loading="lazy"><figcaption>image-20220830170517332</figcaption></figure><h2 id="restfultoolkit" tabindex="-1"><a class="header-anchor" href="#restfultoolkit"><span>RestfulToolkit</span></a></h2><p>一套 RESTful 服务开发辅助工具集。</p><p>1.根据 URL 直接跳转到对应的方法定义 ( 快捷键搜索 Ctrl + Alt + N 或者 Ctrl + \\ ); ---这个个人感觉非常好用，和Ctrl + F一样重要。</p><p>2.提供了一个 Services tree 的显示窗口;</p><p>3.一个简单的 http 请求工具;</p><p>4.在请求方法上添加了有用功能: 复制生成 URL;,复制方法参数...</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022630.png" alt="image-20220830172628438" tabindex="0" loading="lazy"><figcaption>image-20220830172628438</figcaption></figure><h2 id="save-actions-优化保存插件" tabindex="-1"><a class="header-anchor" href="#save-actions-优化保存插件"><span>Save Actions（优化保存插件）</span></a></h2><p>Save Actions是IDEA一款格式自动化的插件，当程序员将代码保存后，插件会自动进行格式化，代码洁癖者的福音。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022654.png" alt="image-20220830171935784" tabindex="0" loading="lazy"><figcaption>image-20220830171935784</figcaption></figure><h2 id="codeglance-代码编辑区缩略图插件" tabindex="-1"><a class="header-anchor" href="#codeglance-代码编辑区缩略图插件"><span>CodeGlance (代码编辑区缩略图插件)</span></a></h2><p>CodeGlance是一款代码编辑区缩略图插件，可以快速定位代码，使用起来比拖动滚动条方便多了</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022676.png" alt="image-20220830172526366" tabindex="0" loading="lazy"><figcaption>image-20220830172526366</figcaption></figure><h2 id="mybatisx" tabindex="-1"><a class="header-anchor" href="#mybatisx"><span><strong>MyBatisX</strong></span></a></h2><blockquote><p>MybatisX是一款基于IDEA的快速开发插件，由MyBatis-Plus团队开发维护，提示很全功能也很强大。支持xml和Mapper接口之间的跳转，自带图形化的代码生成器，可以通过类似JPA的方式，直接根据方法名称生成SQL实现。</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022694.png" alt="image-20220830170916236" tabindex="0" loading="lazy"><figcaption>image-20220830170916236</figcaption></figure><p>我们点击Mapper接口方法左侧的图标可以直接跳转到xml中对应的SQL实现，在xml点击左侧图标也可以直接跳转到Mapper接口中对应的方法。</p><p>![640 (2)](640 (2).gif)</p><p>当我们创建符合JPA规范的方法时，能直接生成SQL实现无需手写，MyBatisX的功能很强大，详细使用可以参考<a href="https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&amp;mid=2247502551&amp;idx=1&amp;sn=5017e6bf5b9aaabebcad8fb9f3fc7d89&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">MybatisX插件的使用</a> 。</p><p>![640 (3)](640 (3).gif)</p><h2 id="gsonformatplus" tabindex="-1"><a class="header-anchor" href="#gsonformatplus"><span>GsonFormatPlus</span></a></h2><blockquote><p>一款能根据JSON字符串自动生成实体类的插件，支持Lombok。</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022719.png" alt="image-20220830165920278" tabindex="0" loading="lazy"><figcaption>image-20220830165920278</figcaption></figure><p>选择类名，右键生成，输入JSON字符串即可快速生成对应实体类。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022744.gif" alt="640" tabindex="0" loading="lazy"><figcaption>640</figcaption></figure><h2 id="alibaba-java-coding-guidelines" tabindex="-1"><a class="header-anchor" href="#alibaba-java-coding-guidelines"><span><strong>Alibaba Java Coding Guidelines</strong></span></a></h2><blockquote><p>阿里巴巴《Java 开发手册》配套插件，可以实时检测代码中不符合手册规约的地方，助你码出高效，码出质量。</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022764.png" alt="image-20220830170124136" tabindex="0" loading="lazy"><figcaption>image-20220830170124136</figcaption></figure><p>比如说手册里有这么一条：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022788.png" alt="image-20220830170143315" tabindex="0" loading="lazy"><figcaption>image-20220830170143315</figcaption></figure><p>当我们违反手册规约时，该插件会自动检测并进行提示。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022813.png" alt="image-20220830170205756" tabindex="0" loading="lazy"><figcaption>image-20220830170205756</figcaption></figure><p>同时提供了一键检测所有代码规约情况和切换语言的功能。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022833.png" alt="image-20220830170232658" tabindex="0" loading="lazy"><figcaption>image-20220830170232658</figcaption></figure><p>如果你想修改某条规约的检测规则的话，可以通过设置的<code>Editor-&gt;Inspections</code>进行修改。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022858.png" alt="image-20220830170254540" tabindex="0" loading="lazy"><figcaption>image-20220830170254540</figcaption></figure><h2 id="arthas-idea" tabindex="-1"><a class="header-anchor" href="#arthas-idea"><span><strong>arthas idea</strong></span></a></h2><blockquote><p>基于IDEA开发的Arthas命令生成插件，支持Arthas官方常用的命令，比如 watch、trace、ognl static、ognl bean method、field、monitor、stack 、tt等命令。</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022889.png" alt="image-20220830171417627" tabindex="0" loading="lazy"><figcaption>image-20220830171417627</figcaption></figure><p>直接打开右键菜单，选择Arthas命令即可快速生成命令，具体使用可以参考<a href="https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&amp;mid=2247499910&amp;idx=1&amp;sn=05c3177e74009bcaf309d5abd27ec4d5&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">Arthas使用教程</a> 。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022919.png" alt="image-20220830171438377" tabindex="0" loading="lazy"><figcaption>image-20220830171438377</figcaption></figure><h2 id="key-promoter-x" tabindex="-1"><a class="header-anchor" href="#key-promoter-x"><span><strong>Key Promoter X</strong></span></a></h2><blockquote><p>Key Promoter X 是一款帮助你快速学习IDEA快捷键的插件，当你在IDEA中用鼠标点击某些功能时，它会自动提示你使用该功能的快捷键。它能让你更轻松地摆脱使用鼠标功能，从而只使用键盘来开发，这大概是刚开始使用IDEA的程序员最需要的插件了。</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022947.png" alt="image-20220830170623783" tabindex="0" loading="lazy"><figcaption>image-20220830170623783</figcaption></figure><p>当我们使用鼠标完成某些工作时，Key Promoter X会提示对应的快捷键，方便我们更快地掌握IDEA的快捷键。</p><p>![640 (1)](640 (1).gif)</p><h2 id="sequencediagram-方法调的深度-生产时序图" tabindex="-1"><a class="header-anchor" href="#sequencediagram-方法调的深度-生产时序图"><span><strong>SequenceDiagram</strong>（方法调的深度，生产时序图）</span></a></h2><blockquote><p>SequenceDiagram是一款能根据代码生成时序图的插件，还支持在时序图上直接导航到对应代码以及导出为图片或PlantUML文件。</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022972.png" alt="image-20220830171149521" tabindex="0" loading="lazy"><figcaption>image-20220830171149521</figcaption></figure><p>下面是一张使用SequenceDiagram制作的时序图，还是非常不错的，具体使用可以参考<a href="https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&amp;mid=2247502397&amp;idx=1&amp;sn=f741bdcb205cc3304ae754fe9403ae7e&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">SequenceDiagram插件的使用</a> 。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022994.png" alt="image-20220830171209255" tabindex="0" loading="lazy"><figcaption>image-20220830171209255</figcaption></figure><h2 id="plantuml" tabindex="-1"><a class="header-anchor" href="#plantuml"><span><strong>PlantUML</strong></span></a></h2><blockquote><p>PlantUML是一款开源的UML图绘制工具，支持通过文本来生成图形，使用起来非常高效。可以支持时序图、类图、对象图、活动图、思维导图等图形的绘制。</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022022.png" alt="image-20220830171240320" tabindex="0" loading="lazy"><figcaption>image-20220830171240320</figcaption></figure><p>下面使用PlantUML来绘制一张流程图，可以实时预览，速度也很快，具体使用可以参考<a href="https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&amp;mid=2247494438&amp;idx=1&amp;sn=d077f02bbe50276c9939d0c652809f4b&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">PlantUML插件的使用</a> 。</p><p>![640 (4)](640 (4).gif)</p><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span><strong>Docker</strong></span></a></h2><blockquote><p>IDEA官方提供的Docker插件，已内置，支持远程Docker环境的镜像和容器管理，同时支持使用Docker Compose实现批量部署。</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022050.png" alt="image-20220830171521120" tabindex="0" loading="lazy"><figcaption>image-20220830171521120</figcaption></figure><p>通过它能自动打包应用的镜像，jar包会直接上传到远程服务器并打包成镜像，具体使用可以参考<a href="https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&amp;mid=2247500482&amp;idx=1&amp;sn=713a30c88cea125f4768e6a0df939600&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">IDEA官方Docker插件的使用</a> 。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022079.png" alt="image-20220830171535473" tabindex="0" loading="lazy"><figcaption>image-20220830171535473</figcaption></figure><h2 id="grep-console" tabindex="-1"><a class="header-anchor" href="#grep-console"><span><strong>Grep Console</strong></span></a></h2><blockquote><p>一款帮你分析控制台日志的插件，可以对不同级别的日志进行不同颜色的高亮显示，还可以用来按关键字搜索日志内容。</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022106.png" alt="image-20220830171557762" tabindex="0" loading="lazy"><figcaption>image-20220830171557762</figcaption></figure><p>当项目打印日志的时候，可以发现不同日志级别的日志会以不同颜色来显示。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022143.png" alt="image-20220830171614137" tabindex="0" loading="lazy"><figcaption>image-20220830171614137</figcaption></figure><p>如果你需要修改配色方案的话，可以通过<code>Tools</code>打开该插件的配置菜单。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022183.png" alt="image-20220830171626774" tabindex="0" loading="lazy"><figcaption>image-20220830171626774</figcaption></figure><p>然后通过配置菜单修改配色方案。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022217.png" alt="image-20220830171641735" tabindex="0" loading="lazy"><figcaption>image-20220830171641735</figcaption></figure><p>可以通过在控制台右键并使用<code>Grep</code>按钮来调出日志分析的窗口。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022263.png" alt="image-20220830171654853" tabindex="0" loading="lazy"><figcaption>image-20220830171654853</figcaption></figure><p>然后直接通过关键字来搜索即可。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022308.png" alt="image-20220830171705764" tabindex="0" loading="lazy"><figcaption>image-20220830171705764</figcaption></figure><h2 id="statistic" tabindex="-1"><a class="header-anchor" href="#statistic"><span><strong>Statistic</strong></span></a></h2><blockquote><p>一款代码统计工具，可以用来统计当前项目中代码的行数和大小。</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022351.png" alt="image-20220830171751793" tabindex="0" loading="lazy"><figcaption>image-20220830171751793</figcaption></figure><p>我们可以通过顶部菜单中的<code>View-&gt;Tool Windows-&gt;Statistic</code>按钮开启该功能。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022376.png" alt="image-20220830171806817" tabindex="0" loading="lazy"><figcaption>image-20220830171806817</figcaption></figure><p>此时就可以看到我们项目代码的统计情况了，比如我的开源项目<code>mall</code>中<code>java</code>代码大小为<code>2818kB</code>，行数为<code>85645</code>。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022401.png" alt="image-20220830171820145" tabindex="0" loading="lazy"><figcaption>image-20220830171820145</figcaption></figure><h2 id="javadoc-javadoc生成插件" tabindex="-1"><a class="header-anchor" href="#javadoc-javadoc生成插件"><span>Javadoc（Javadoc生成插件）</span></a></h2><p>该插件可以在java类元素（如字段、方法等）上生成javadoc的插件。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022423.png" alt="image-20220830172336635" tabindex="0" loading="lazy"><figcaption>image-20220830172336635</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://mp.weixin.qq.com/s/KiXWyhteyAiHo6FkYr2wXg" target="_blank" rel="noopener noreferrer">看了我常用的IDEA插件，同事也开始悄悄安装了...</a></p><p><a href="https://developer.aliyun.com/article/803464" target="_blank" rel="noopener noreferrer">IntelliJ IDEA常用插件推荐</a></p>`,107)]))}const l=a(s,[["render",o],["__file","idea-plugin.html.vue"]]),g=JSON.parse(`{"path":"/posts/Development-Tools/IDEA/idea-plugin.html","title":"IDEA 插件","lang":"zh-CN","frontmatter":{"aliases":"IDEA 插件, 'IDEA 插件'","tags":null,"cssclass":null,"source":null,"Order":10,"Category":["IDEA"],"created":"2024-02-22 10:50","updated":"2024-04-23 10:26","description":"IDEA 插件 工欲善其事必先利其器，分享几个比较好用的IDEA 插件 Lombok Lombok目前已经是开发Java应用的标配了，不仅SpringBoot默认支持它，连IDEA也内置了Lombok插件，无需安装即可使用。Lombok是一款Java代码功能增强库，通过Lombok的注解，你可以不用再写getter、setter、equals等方法，L...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Development-Tools/IDEA/idea-plugin.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"IDEA 插件"}],["meta",{"property":"og:description","content":"IDEA 插件 工欲善其事必先利其器，分享几个比较好用的IDEA 插件 Lombok Lombok目前已经是开发Java应用的标配了，不仅SpringBoot默认支持它，连IDEA也内置了Lombok插件，无需安装即可使用。Lombok是一款Java代码功能增强库，通过Lombok的注解，你可以不用再写getter、setter、equals等方法，L..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022473.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"IDEA 插件\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022473.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022516.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022540.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231026228.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022562.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022587.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022609.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022630.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022654.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022676.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022694.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022719.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022744.gif\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022764.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022788.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022813.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022833.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022858.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022889.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022919.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022947.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022972.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022994.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022022.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022050.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022079.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022106.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022143.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022183.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022217.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022263.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022308.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022351.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022376.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022401.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022423.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Lombok","slug":"lombok","link":"#lombok","children":[]},{"level":2,"title":"Maven Helper（Maven依赖分析工具）","slug":"maven-helper-maven依赖分析工具","link":"#maven-helper-maven依赖分析工具","children":[]},{"level":2,"title":"RestfulToolkit","slug":"restfultoolkit","link":"#restfultoolkit","children":[]},{"level":2,"title":"Save Actions（优化保存插件）","slug":"save-actions-优化保存插件","link":"#save-actions-优化保存插件","children":[]},{"level":2,"title":"CodeGlance (代码编辑区缩略图插件)","slug":"codeglance-代码编辑区缩略图插件","link":"#codeglance-代码编辑区缩略图插件","children":[]},{"level":2,"title":"MyBatisX","slug":"mybatisx","link":"#mybatisx","children":[]},{"level":2,"title":"GsonFormatPlus","slug":"gsonformatplus","link":"#gsonformatplus","children":[]},{"level":2,"title":"Alibaba Java Coding Guidelines","slug":"alibaba-java-coding-guidelines","link":"#alibaba-java-coding-guidelines","children":[]},{"level":2,"title":"arthas idea","slug":"arthas-idea","link":"#arthas-idea","children":[]},{"level":2,"title":"Key Promoter X","slug":"key-promoter-x","link":"#key-promoter-x","children":[]},{"level":2,"title":"SequenceDiagram（方法调的深度，生产时序图）","slug":"sequencediagram-方法调的深度-生产时序图","link":"#sequencediagram-方法调的深度-生产时序图","children":[]},{"level":2,"title":"PlantUML","slug":"plantuml","link":"#plantuml","children":[]},{"level":2,"title":"Docker","slug":"docker","link":"#docker","children":[]},{"level":2,"title":"Grep Console","slug":"grep-console","link":"#grep-console","children":[]},{"level":2,"title":"Statistic","slug":"statistic","link":"#statistic","children":[]},{"level":2,"title":"Javadoc（Javadoc生成插件）","slug":"javadoc-javadoc生成插件","link":"#javadoc-javadoc生成插件","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":6.88,"words":2063},"filePathRelative":"posts/Development-Tools/IDEA/idea-plugin.md","localizedDate":"2024年10月28日","excerpt":"\\n<p>工欲善其事必先利其器，分享几个比较好用的IDEA 插件</p>\\n<h2><strong>Lombok</strong></h2>\\n<blockquote>\\n<p>Lombok目前已经是开发Java应用的标配了，不仅SpringBoot默认支持它，连IDEA也内置了Lombok插件，无需安装即可使用。Lombok是一款Java代码功能增强库，通过Lombok的注解，你可以不用再写getter、setter、equals等方法，Lombok将在编译时为你自动生成。</p>\\n</blockquote>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231022473.png\\" alt=\\"image-20220830170738919\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220830170738919</figcaption></figure>","autoDesc":true}`);export{l as comp,g as data};
