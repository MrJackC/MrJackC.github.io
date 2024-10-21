import{_ as h,c as k,b as s,d as e,e as n,w as i,f as b,a as o,r as p,o as m}from"./app-BhoNqsD-.js";const g={},u={class:"hint-container tip"},y={class:"table-of-contents"};function f(B,a){const d=p("RouteLink"),t=p("router-link"),c=p("CodeTabs");return m(),k("div",null,[s("div",u,[a[2]||(a[2]=s("p",{class:"hint-container-title"},"提示",-1)),a[3]||(a[3]=s("p",null,"之前介绍了ZSH的安装和使用，这次把最终成果介绍一下，就是ZSH + iTerm2 + Pure",-1)),s("p",null,[a[1]||(a[1]=e("前置工作：安装ZSH，请参照之前的文章👉")),n(d,{to:"/posts/Linux/zsh.html"},{default:i(()=>a[0]||(a[0]=[e("zsh安装")])),_:1})])]),b(" more "),a[20]||(a[20]=s("h2",{id:"目录",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#目录"},[s("span",null,"目录")])],-1)),s("nav",y,[s("ul",null,[s("li",null,[n(t,{to:"#目录"},{default:i(()=>a[4]||(a[4]=[e("目录")])),_:1})]),s("li",null,[n(t,{to:"#先看效果图"},{default:i(()=>a[5]||(a[5]=[e("先看效果图")])),_:1})]),s("li",null,[n(t,{to:"#安装pure"},{default:i(()=>a[6]||(a[6]=[e("安装pure")])),_:1})]),s("li",null,[n(t,{to:"#iterm2"},{default:i(()=>a[7]||(a[7]=[e("iTerm2")])),_:1}),s("ul",null,[s("li",null,[n(t,{to:"#_1-主题配置"},{default:i(()=>a[8]||(a[8]=[e("1.主题配置")])),_:1})]),s("li",null,[n(t,{to:"#_2-标签页配色"},{default:i(()=>a[9]||(a[9]=[e("2. 标签页配色")])),_:1})]),s("li",null,[n(t,{to:"#_3-设置-status-bar"},{default:i(()=>a[10]||(a[10]=[e("3. 设置 Status bar")])),_:1})]),s("li",null,[n(t,{to:"#_4-光标选择"},{default:i(()=>a[11]||(a[11]=[e("4. 光标选择")])),_:1})]),s("li",null,[n(t,{to:"#_5-配置ssh快速连接"},{default:i(()=>a[12]||(a[12]=[e("5.配置SSH快速连接")])),_:1})])])]),s("li",null,[n(t,{to:"#结语"},{default:i(()=>a[13]||(a[13]=[e("结语")])),_:1})])])]),a[21]||(a[21]=o('<h2 id="先看效果图" tabindex="-1"><a class="header-anchor" href="#先看效果图"><span>先看效果图</span></a></h2><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/140a5562a8b9e334.png" alt="界面" tabindex="0" loading="lazy"><figcaption>界面</figcaption></figure><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/810d0c1d2a4d7069.png" alt="命令提示" tabindex="0" loading="lazy"><figcaption>命令提示</figcaption></figure><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/052c26b51ecde528.png" alt="流输出" tabindex="0" loading="lazy"><figcaption>流输出</figcaption></figure><h2 id="安装pure" tabindex="-1"><a class="header-anchor" href="#安装pure"><span>安装pure</span></a></h2><p>👉<a href="https://github.com/sindresorhus/pure" target="_blank" rel="noopener noreferrer">官方文档</a></p><p>可以使用 npm 或手动安装。需要 Git 2.15.2+ 和 ZSH 5.2+。已知旧版本的 ZSH 可以工作，但不推荐使用。</p>',7)),n(c,{id:"36",data:[{id:"npm"},{id:"Homebrew"},{id:"手动"}]},{title0:i(({value:r,isActive:l})=>a[14]||(a[14]=[e("npm")])),title1:i(({value:r,isActive:l})=>a[15]||(a[15]=[e("Homebrew")])),title2:i(({value:r,isActive:l})=>a[16]||(a[16]=[e("手动")])),tab0:i(({value:r,isActive:l})=>a[17]||(a[17]=[s("div",{class:"language-bash","data-ext":"bash","data-title":"bash"},[s("pre",{class:"shiki shiki-themes one-dark-pro one-dark-pro vp-code",style:{"background-color":"#282c34","--shiki-dark-bg":"#282c34",color:"#abb2bf","--shiki-dark":"#abb2bf"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}}," install"),s("span",{style:{color:"#D19A66","--shiki-dark":"#D19A66"}}," --global"),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}}," pure-prompt")])])])],-1)])),tab1:i(({value:r,isActive:l})=>a[18]||(a[18]=[s("div",{class:"language-bash","data-ext":"bash","data-title":"bash"},[s("pre",{class:"shiki shiki-themes one-dark-pro one-dark-pro vp-code",style:{"background-color":"#282c34","--shiki-dark-bg":"#282c34",color:"#abb2bf","--shiki-dark":"#abb2bf"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF","--shiki-dark":"#61AFEF"}},"brew"),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}}," install"),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}}," pure")])])])],-1)])),tab2:i(({value:r,isActive:l})=>a[19]||(a[19]=[s("div",{class:"language-bash","data-ext":"bash","data-title":"bash"},[s("pre",{class:"shiki shiki-themes one-dark-pro one-dark-pro vp-code",style:{"background-color":"#282c34","--shiki-dark-bg":"#282c34",color:"#abb2bf","--shiki-dark":"#abb2bf"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"# 在某处克隆此 repo。在这里我们将使用 $HOME/.zsh/pure")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#61AFEF","--shiki-dark":"#61AFEF"}},"mkdir"),s("span",{style:{color:"#D19A66","--shiki-dark":"#D19A66"}}," -p"),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},' "'),s("span",{style:{color:"#E06C75","--shiki-dark":"#E06C75"}},"$HOME"),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'/.zsh"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#61AFEF","--shiki-dark":"#61AFEF"}},"git"),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}}," clone"),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}}," https://github.com/sindresorhus/pure.git"),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},' "'),s("span",{style:{color:"#E06C75","--shiki-dark":"#E06C75"}},"$HOME"),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'/.zsh/pure"')])])])],-1)])),_:1}),a[22]||(a[22]=o(`<p>如果是手动安装的，将克隆的 repo 的路径添加到 $HOME/.zshrc 中的 $fpath 。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># .zshrc</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">fpath</span><span style="color:#C678DD;--shiki-dark:#C678DD;">+=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$HOME</span><span style="color:#98C379;--shiki-dark:#98C379;">/.zsh/pure</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><p>将以下内容复制到 <code>.zshrc</code>文件中</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">autoload</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -U</span><span style="color:#98C379;--shiki-dark:#98C379;"> promptinit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">promptinit</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">prompt</span><span style="color:#98C379;--shiki-dark:#98C379;"> pure</span></span></code></pre></div><p>在 .zshrc 中设置 ZSH_THEME=&quot;&quot; 以禁用 oh-my-zsh 主题。</p><p>到这里就基本完成了，如果要基于pure做详细定制，请参考文档</p><h2 id="iterm2" tabindex="-1"><a class="header-anchor" href="#iterm2"><span>iTerm2</span></a></h2><p>👉戳这里下载 <a href="https://iterm2.com/downloads.html" target="_blank" rel="noopener noreferrer">官方下载地址</a></p><p>效果图我自用的配置文件在这里 👉 <a href="https://pan.baidu.com/s/1cG-gSwoPouYXeZ-P2pjmAg" target="_blank" rel="noopener noreferrer">链接</a> 密码:74aq</p><h3 id="_1-主题配置" tabindex="-1"><a class="header-anchor" href="#_1-主题配置"><span>1.主题配置</span></a></h3><p>访问iTerm2主题网站👉<a href="https://github.com/mbadolato/iTerm2-Color-Schemes" target="_blank" rel="noopener noreferrer">iTerm2-Color-Schemes</a></p><p>可以下载zip包并解压到本地，进入解压缩的文件目录，找到schemes文件夹，里边全是主题配置，可以对照github上的效果图来选择</p><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/2eee92812c17fc48.png" alt="导入" tabindex="0" loading="lazy"><figcaption>导入</figcaption></figure><h3 id="_2-标签页配色" tabindex="-1"><a class="header-anchor" href="#_2-标签页配色"><span>2. 标签页配色</span></a></h3><p>标签配色默认为黑色，不能与操作页面保持统一</p><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/9995b0382a76bba8.png" alt="默认" tabindex="0" loading="lazy"><figcaption>默认</figcaption></figure><p>打开iTerm2，打开Preferences配置界面，Appearence -&gt; General，将 Theme 改为 Minimal</p><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/411e917c7fb3d2b9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-设置-status-bar" tabindex="-1"><a class="header-anchor" href="#_3-设置-status-bar"><span>3. 设置 Status bar</span></a></h3><p>iTerm2 提供了不少的 Status bar，开启后我们可以在终端的最上方非常方便的实时查看本机的一些信息。</p><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/d93a133dcd5fe00c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>打开iTerm2，打开Preferences配置界面，Profiles -&gt; session-&gt; 勾选 Status bar enable-&gt; configure Status bar，选择自己想要的展示内容即可。向下托动放入Active Components 中即可,我这里只选了CPU、内存、网络</p><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/918522902136668f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-光标选择" tabindex="-1"><a class="header-anchor" href="#_4-光标选择"><span>4. 光标选择</span></a></h3><p>iterm提供了三种光标可供选择：_、|、[]。</p><p>打开iTerm2，打开Preferences配置界面，Profiles -&gt; text-&gt; cursor，选择自己想要的光标即可。</p><h3 id="_5-配置ssh快速连接" tabindex="-1"><a class="header-anchor" href="#_5-配置ssh快速连接"><span>5.配置SSH快速连接</span></a></h3><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#首先在/Users目录下按照如下命令创建sh脚本</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">cd</span><span style="color:#98C379;--shiki-dark:#98C379;"> /Users/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#创建iterm文件夹</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mkdir</span><span style="color:#98C379;--shiki-dark:#98C379;"> iterm</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#进入iterm文件夹</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">cd</span><span style="color:#98C379;--shiki-dark:#98C379;"> iterm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#创建myserver.sh文件</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">touch</span><span style="color:#98C379;--shiki-dark:#98C379;"> myserver.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#编辑myserver.sh文件</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">vi</span><span style="color:#98C379;--shiki-dark:#98C379;"> myserver.sh</span></span></code></pre></div><p>如果出现没有权限，就命令前面加上sudo</p><p>键盘输入i编辑文件，插入以下内容：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/usr/bin/expect</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">set</span><span style="color:#98C379;--shiki-dark:#98C379;"> timeout</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 30</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">spawn</span><span style="color:#98C379;--shiki-dark:#98C379;"> ssh</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -p</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [lindex </span><span style="color:#E06C75;--shiki-dark:#E06C75;">$argv</span><span style="color:#98C379;--shiki-dark:#98C379;"> 0]</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [lindex </span><span style="color:#E06C75;--shiki-dark:#E06C75;">$argv</span><span style="color:#98C379;--shiki-dark:#98C379;"> 1]@[lindex</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> $argv</span><span style="color:#98C379;--shiki-dark:#98C379;"> 2]</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">expect</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;(yes/no)?&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        {</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">send</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;yes\\n&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">exp_continue}</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;password:&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        {</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">send</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;[lindex </span><span style="color:#E06C75;--shiki-dark:#E06C75;">$argv</span><span style="color:#98C379;--shiki-dark:#98C379;"> 3]\\n&quot;}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">interact</span></span></code></pre></div><p>myserver.sh文件中变量解释：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[lindex </span><span style="color:#E06C75;--shiki-dark:#E06C75;">$argv</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 0]：端口号</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[lindex </span><span style="color:#E06C75;--shiki-dark:#E06C75;">$argv</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 1]：服务器用户名</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[lindex </span><span style="color:#E06C75;--shiki-dark:#E06C75;">$argv</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 2]：服务器IP地址</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[lindex </span><span style="color:#E06C75;--shiki-dark:#E06C75;">$argv</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 3]：服务器密码</span></span></code></pre></div><p>插入完成后键盘esc 然后输入:wq退出，接下来给文件赋权</p><p>chmod 777 <a href="http://myserver.sh" target="_blank" rel="noopener noreferrer">myserver.sh</a><br> 打开iTerm2，打开Preferences配置界面，Profiles -&gt; general，左下角点击+号，新建profile，参考下面图片在对应位置输入内容即可。</p><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/349fdd06e7bc428d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Name:根据需求输入，通常选择标识性较强的内容便于区分，例如服务器的IP地址</p><p>Command：这里选择login Shell</p><p>Send text at start ：填写格式形如A B C D E这样，每一个部分之间用空格隔开，根据自己实际情况填写,下面是对每一部分内容的解释</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>A 代表咱们上面写的本机保存sh脚本的路径：/Users/iterm/myserver.sh</p><p>B 代表服务器端口号一般远程连接端口为：22</p><p>C 代表服务器用户名一般为：root</p><p>D 代表服务器IP：公网IP填写</p><p>E 代表服务器密码：根据自己实际的服务器密码填写<br> 设置好之后打开iTerm2，点击profiles，点击前面自己新增的连接远程服务器的profile的名字</p><p>首次连接需要输入一次服务器密码，之后再连接就免密码登陆了</p></div><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语"><span>结语</span></a></h2><p>当然这里只介绍一部分，还有很多高级玩法，需要用到的时候自己去研究一下了</p>`,42))])}const C=h(g,[["render",f],["__file","iterm2-pure.html.vue"]]),A=JSON.parse('{"path":"/posts/Linux/iterm2-pure.html","title":"终端究极美化iTerm2+Pure","lang":"zh-CN","frontmatter":{"title":"终端究极美化iTerm2+Pure","icon":"hk-zsh","subtitle":"Pure","date":"2023-03-24T16:40:37.000Z","star":true,"category":["Linux"],"tag":["terminal","Linux"],"description":"提示 之前介绍了ZSH的安装和使用，这次把最终成果介绍一下，就是ZSH + iTerm2 + Pure 前置工作：安装ZSH，请参照之前的文章👉zsh安装","head":[["meta",{"property":"og:url","content":"https://mrjason.me/posts/Linux/iterm2-pure.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"终端究极美化iTerm2+Pure"}],["meta",{"property":"og:description","content":"提示 之前介绍了ZSH的安装和使用，这次把最终成果介绍一下，就是ZSH + iTerm2 + Pure 前置工作：安装ZSH，请参照之前的文章👉zsh安装"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://s3.bmp.ovh/imgs/2023/03/24/140a5562a8b9e334.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"terminal"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2023-03-24T16:40:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"终端究极美化iTerm2+Pure\\",\\"image\\":[\\"https://s3.bmp.ovh/imgs/2023/03/24/140a5562a8b9e334.png\\",\\"https://s3.bmp.ovh/imgs/2023/03/24/810d0c1d2a4d7069.png\\",\\"https://s3.bmp.ovh/imgs/2023/03/24/052c26b51ecde528.png\\",\\"https://s3.bmp.ovh/imgs/2023/03/24/2eee92812c17fc48.png\\",\\"https://s3.bmp.ovh/imgs/2023/03/24/9995b0382a76bba8.png\\",\\"https://s3.bmp.ovh/imgs/2023/03/24/411e917c7fb3d2b9.png\\",\\"https://s3.bmp.ovh/imgs/2023/03/24/d93a133dcd5fe00c.png\\",\\"https://s3.bmp.ovh/imgs/2023/03/24/918522902136668f.png\\",\\"https://s3.bmp.ovh/imgs/2023/03/24/349fdd06e7bc428d.png\\"],\\"datePublished\\":\\"2023-03-24T16:40:37.000Z\\",\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjason.me\\"}]}"]]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"先看效果图","slug":"先看效果图","link":"#先看效果图","children":[]},{"level":2,"title":"安装pure","slug":"安装pure","link":"#安装pure","children":[]},{"level":2,"title":"iTerm2","slug":"iterm2","link":"#iterm2","children":[{"level":3,"title":"1.主题配置","slug":"_1-主题配置","link":"#_1-主题配置","children":[]},{"level":3,"title":"2. 标签页配色","slug":"_2-标签页配色","link":"#_2-标签页配色","children":[]},{"level":3,"title":"3. 设置 Status bar","slug":"_3-设置-status-bar","link":"#_3-设置-status-bar","children":[]},{"level":3,"title":"4. 光标选择","slug":"_4-光标选择","link":"#_4-光标选择","children":[]},{"level":3,"title":"5.配置SSH快速连接","slug":"_5-配置ssh快速连接","link":"#_5-配置ssh快速连接","children":[]}]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.58,"words":1075},"filePathRelative":"posts/Linux/iterm2-pure.md","localizedDate":"2023年3月24日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>之前介绍了ZSH的安装和使用，这次把最终成果介绍一下，就是ZSH + iTerm2 + Pure</p>\\n<p>前置工作：安装ZSH，请参照之前的文章👉<a href=\\"/posts/Linux/zsh.html\\" target=\\"_blank\\">zsh安装</a></p>\\n</div>\\n","autoDesc":true}');export{C as comp,A as data};
