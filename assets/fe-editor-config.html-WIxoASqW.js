import{_ as n,c as a,a as i,o as e}from"./app-W9QyTiMU.js";const l={};function r(o,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="统一代码风格工具editorconfig" tabindex="-1"><a class="header-anchor" href="#统一代码风格工具editorconfig"><span>统一代码风格工具editorConfig</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>团队中有多人进行项目开发时，每个人可能喜欢的编辑器不同，有人喜欢webstrom、有人用VsCode、还有人用sublime。</p><p>我们无法强迫开发者使用某种开发工具，那么我们如何让开发者都遵循统一的代码规范呢？</p><p>这时候我们就需要editorConfig了，<strong>在editorConfig里的配置的代码规范优先级是高于编辑器默认的代码格式化规则</strong>。</p><h2 id="_2-editorconfig-简介" tabindex="-1"><a class="header-anchor" href="#_2-editorconfig-简介"><span>2. editorConfig 简介</span></a></h2><p>editorConfig不是什么软件，而是一个名称为.editorconfig的自定义文件。该文件用来定义项目的编码规范，编辑器的行为会与.editorconfig 文件中定义的一致，并且<strong>其优先级比编辑器自身的设置要高</strong></p><p>当打开一个文件时，EditorConfig插件会在打开文件的目录和其每一级父目录查找.editorconfig文件，直到有一个配置文件root=true</p><p>EditorConfig的配置文件是从上往下读取的并且最近的EditorConfig配置文件会被最先读取. 匹配EditorConfig配置文件中的配置项会按照读取顺序被应用, 所以最近的配置文件中的配置项拥有优先权</p><p><strong>如果.editorconfig文件没有进行某些配置，则使用编辑器默认的设置</strong></p><h2 id="_3-配置-editorconfig" tabindex="-1"><a class="header-anchor" href="#_3-配置-editorconfig"><span>3. 配置.editorconfig</span></a></h2><p>在当前项目根目录下添加<code>.editorconfig</code>文件</p><p>editorconfig文件是定义一些格式化规则（此规则并不会被vscode直接解析）</p><h3 id="_3-1-官网的一个配置" tabindex="-1"><a class="header-anchor" href="#_3-1-官网的一个配置"><span>3.1 官网的一个配置</span></a></h3><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"># </span><span style="color:#E06C75;--shiki-dark:#E06C75;">EditorConfig</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> is</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> awesome</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E06C75;--shiki-dark:#E06C75;">https</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//EditorConfig.org</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"># </span><span style="color:#E06C75;--shiki-dark:#E06C75;">top</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#E06C75;--shiki-dark:#E06C75;">most</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> EditorConfig</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> file</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 表示是最顶层的配置文件，发现设为</span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">时，才会停止查找.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">editorconfig</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">文件</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">root</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"># </span><span style="color:#E06C75;--shiki-dark:#E06C75;">Unix</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#E06C75;--shiki-dark:#E06C75;">style</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> newlines</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> with</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> a</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> newline</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ending</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> every</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> file</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 对于所有的文件  始终在文件末尾插入一个新行</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">*</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">end_of_line</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> lf</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">insert_final_newline</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"># </span><span style="color:#E06C75;--shiki-dark:#E06C75;">Matches</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> multiple</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> files</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> with</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> brace</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> expansion</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> notation</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"># </span><span style="color:#E06C75;--shiki-dark:#E06C75;">Set</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> default</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> charset</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  对于所有的</span><span style="color:#E06C75;--shiki-dark:#E06C75;">js</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;">py</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">文件，设置文件字符集为</span><span style="color:#E06C75;--shiki-dark:#E06C75;">utf</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#D19A66;--shiki-dark:#D19A66;">8</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">*</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.{</span><span style="color:#E06C75;--shiki-dark:#E06C75;">js</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;">py</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}]</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">charset</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> utf</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#D19A66;--shiki-dark:#D19A66;">8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"># </span><span style="color:#D19A66;--shiki-dark:#D19A66;">4</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> space</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> indentation</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 控制</span><span style="color:#E06C75;--shiki-dark:#E06C75;">py</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">文件类型的缩进大小</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">*</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">py</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">indent_style</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> space</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">indent_size</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"># </span><span style="color:#E06C75;--shiki-dark:#E06C75;">Tab</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> indentation</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E06C75;--shiki-dark:#E06C75;">no</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> size</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> specified</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 设置某中文件的缩进风格为</span><span style="color:#E06C75;--shiki-dark:#E06C75;">tab</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> Makefile</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">未指明</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Makefile</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">indent_style</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> tab</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"># </span><span style="color:#E06C75;--shiki-dark:#E06C75;">Indentation</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> override</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> for</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> all</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> JS</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> under</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> lib</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> directory</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  设置在</span><span style="color:#E06C75;--shiki-dark:#E06C75;">lib</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">目录下所有</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">JS</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">的缩进为</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#E06C75;--shiki-dark:#E06C75;">lib</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**.js]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">indent_style = space</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">indent_size = 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Matches the exact files either package.json or .travis.yml 设置确切文件 package.json/.travis/.yml的缩进类型</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">[{package.json,.travis.yml}]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">indent_style = space</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">indent_size = 2</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-语法" tabindex="-1"><a class="header-anchor" href="#_4-语法"><span>4. 语法</span></a></h2><p>editorConfig配置文件需要是UTF-8字符集编码的, 以回车换行或换行作为一行的分隔符</p><p>斜线(/)被用作为一个路径分隔符，井号(#)或分号(;)被用作于注释. 注释需要与注释符号写在同一行</p><h3 id="_4-1-通配符" tabindex="-1"><a class="header-anchor" href="#_4-1-通配符"><span>4.1 通配符</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>*                匹配除/之外的任意字符串</span></span>
<span class="line"><span>**               匹配任意字符串</span></span>
<span class="line"><span>?                匹配任意单个字符</span></span>
<span class="line"><span>[name]           匹配name中的任意一个单一字符</span></span>
<span class="line"><span>[!name]          匹配不存在name中的任意一个单一字符</span></span>
<span class="line"><span>{s1,s2,s3}       匹配给定的字符串中的任意一个(用逗号分隔) </span></span>
<span class="line"><span>{num1..num2}   　匹配num1到num2之间的任意一个整数, 这里的num1和num2可以为正整数也可以为负整数</span></span></code></pre></div><h3 id="_4-2-属性" tabindex="-1"><a class="header-anchor" href="#_4-2-属性"><span>4.2 属性</span></a></h3><p>所有的属性和值都是忽略大小写的. 解析时它们都是小写的</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>indent_style    设置缩进风格(tab是硬缩进，space为软缩进)</span></span>
<span class="line"><span>indent_size     用一个整数定义的列数来设置缩进的宽度，如果indent_style为tab，则此属性默认为tab_width</span></span>
<span class="line"><span>tab_width       用一个整数来设置tab缩进的列数。默认是indent_size</span></span>
<span class="line"><span>end_of_line     设置换行符，值为lf、cr和crlf</span></span>
<span class="line"><span>charset         设置编码，值为latin1、utf-8、utf-8-bom、utf-16be和utf-16le，不建议使用utf-8-bom</span></span>
<span class="line"><span>trim_trailing_whitespace  设为true表示会去除换行行首的任意空白字符。</span></span>
<span class="line"><span>insert_final_newline      设为true表示使文件以一个空白行结尾</span></span>
<span class="line"><span>root        　　　表示是最顶层的配置文件，发现设为true时，才会停止查找.editorconfig文件</span></span></code></pre></div><h3 id="_4-3-控制指定文件类型的缩进大小" tabindex="-1"><a class="header-anchor" href="#_4-3-控制指定文件类型的缩进大小"><span>4.3 控制指定文件类型的缩进大小</span></a></h3><p>这里可以设置，如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[{*.json,*.yml}]</span></span>
<span class="line"><span>indent_style = space</span></span>
<span class="line"><span>indent_size = 2</span></span></code></pre></div><p>对于<code>.json</code> <code>.yml</code> 文件，使用空格替代tab，并且一个tab会被替换为2个空格。</p><h3 id="_4-4-文件末尾新行" tabindex="-1"><a class="header-anchor" href="#_4-4-文件末尾新行"><span>4.4 文件末尾新行</span></a></h3><p>始终在文件末尾插入一个新行</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[*]</span></span>
<span class="line"><span>end_of_line = lf</span></span>
<span class="line"><span>insert_final_newline = true</span></span></code></pre></div><p>对于所有的文件</p><ul><li>每一行的尾部自动调整为 Lf</li><li>文件的末尾是一个空行</li></ul><h2 id="_5-实例" tabindex="-1"><a class="header-anchor" href="#_5-实例"><span>5. 实例</span></a></h2><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># 告诉EditorConfig插件，这是根文件，不用继续往上查找</span></span>
<span class="line"><span>root = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 匹配全部文件</span></span>
<span class="line"><span>[*]</span></span>
<span class="line"><span># 设置字符集</span></span>
<span class="line"><span>charset = utf-8</span></span>
<span class="line"><span># 缩进风格，可选space、tab</span></span>
<span class="line"><span>indent_style = space</span></span>
<span class="line"><span># 缩进的空格数</span></span>
<span class="line"><span>indent_size = 4</span></span>
<span class="line"><span># 结尾换行符，可选lf、cr、crlf</span></span>
<span class="line"><span>end_of_line = lf</span></span>
<span class="line"><span># 在文件结尾插入新行</span></span>
<span class="line"><span>insert_final_newline = true</span></span>
<span class="line"><span># 删除一行中的前后空格</span></span>
<span class="line"><span>trim_trailing_whitespace = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 匹配md结尾的文件</span></span>
<span class="line"><span>[*.md]</span></span>
<span class="line"><span>insert_final_newline = false</span></span>
<span class="line"><span>trim_trailing_whitespace = false</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-1-测试是否可用" tabindex="-1"><a class="header-anchor" href="#_5-1-测试是否可用"><span>5.1 测试是否可用：</span></a></h4><p>在项目的 js 文件中使用 tab 键进行缩进，分别修改 indent_size 属性值为 2 和 4，观察是否有变化。如果没有任何变化，说明还没有安装 Editorconfig 插件。</p><h2 id="_6-编辑器中安装使用" tabindex="-1"><a class="header-anchor" href="#_6-编辑器中安装使用"><span>6. 编辑器中安装使用</span></a></h2><h3 id="_6-1-vscode中安装editorconfig" tabindex="-1"><a class="header-anchor" href="#_6-1-vscode中安装editorconfig"><span>6.1 VSCode中安装EditorConfig</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131242032.png" alt="image-20210924210740884" tabindex="0" loading="lazy"><figcaption>image-20210924210740884</figcaption></figure><p>EditorConfig扩展的作用是读取第一步创建的editorconfig文件中定义的规则，并覆盖user/workspace settings中的对应配置（从这我们也可以看出vscode本身其实是并不直接支持editorconfig的）</p><h4 id="_6-1-1-全局安装或局部安装" tabindex="-1"><a class="header-anchor" href="#_6-1-1-全局安装或局部安装"><span>6.1.1 全局安装或局部安装</span></a></h4><p>editorconfig依赖包(npm install -g editorconfig | npm install -D editorconfig)<br> 安装editorconfig依赖包主要是因为EditorConfig依赖于editorconfig包，不安装的可能会导致EditorConfig无法正常解析我们在第一步定义的editorconfig文件</p><h3 id="_6-1-2-使用" tabindex="-1"><a class="header-anchor" href="#_6-1-2-使用"><span>6.1.2 使用</span></a></h3><p>打开需要格式化的文件并手动格式化代码（shift+alt+f）</p><h2 id="_7-导出editorconfig文件" tabindex="-1"><a class="header-anchor" href="#_7-导出editorconfig文件"><span>7. 导出editorconfig文件</span></a></h2><h3 id="_7-1-webstorm-导出editorconfig文件" tabindex="-1"><a class="header-anchor" href="#_7-1-webstorm-导出editorconfig文件"><span>7.1 webstorm 导出editorconfig文件</span></a></h3><p>操作步骤：webstorm里找到配置，按照以下图示导出.editorconfig，.editorconfig文件会出现在项目的根目录里：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131242081.png" alt="image-20210924210543587" tabindex="0" loading="lazy"><figcaption>image-20210924210543587</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131242113.png" alt="image-20210924210707992" tabindex="0" loading="lazy"><figcaption>image-20210924210707992</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/Gabriel_wei/article/details/90286668" target="_blank" rel="noopener noreferrer">vscode使用editorconfig插件以及.editorconfig配置文件说明(统一代码风格工具——editorConfig)</a></p>`,51)]))}const t=n(l,[["render",r],["__file","fe-editor-config.html.vue"]]),d=JSON.parse('{"path":"/posts/Web/frontend-base/fe-editor-config.html","title":"统一代码风格工具editorConfig","lang":"zh-CN","frontmatter":{"description":"统一代码风格工具editorConfig 1. 背景 团队中有多人进行项目开发时，每个人可能喜欢的编辑器不同，有人喜欢webstrom、有人用VsCode、还有人用sublime。 我们无法强迫开发者使用某种开发工具，那么我们如何让开发者都遵循统一的代码规范呢？ 这时候我们就需要editorConfig了，在editorConfig里的配置的代码规范优...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Web/frontend-base/fe-editor-config.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"统一代码风格工具editorConfig"}],["meta",{"property":"og:description","content":"统一代码风格工具editorConfig 1. 背景 团队中有多人进行项目开发时，每个人可能喜欢的编辑器不同，有人喜欢webstrom、有人用VsCode、还有人用sublime。 我们无法强迫开发者使用某种开发工具，那么我们如何让开发者都遵循统一的代码规范呢？ 这时候我们就需要editorConfig了，在editorConfig里的配置的代码规范优..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131242032.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"统一代码风格工具editorConfig\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131242032.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131242081.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202410131242113.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. editorConfig 简介","slug":"_2-editorconfig-简介","link":"#_2-editorconfig-简介","children":[]},{"level":2,"title":"3. 配置.editorconfig","slug":"_3-配置-editorconfig","link":"#_3-配置-editorconfig","children":[{"level":3,"title":"3.1 官网的一个配置","slug":"_3-1-官网的一个配置","link":"#_3-1-官网的一个配置","children":[]}]},{"level":2,"title":"4. 语法","slug":"_4-语法","link":"#_4-语法","children":[{"level":3,"title":"4.1 通配符","slug":"_4-1-通配符","link":"#_4-1-通配符","children":[]},{"level":3,"title":"4.2 属性","slug":"_4-2-属性","link":"#_4-2-属性","children":[]},{"level":3,"title":"4.3 控制指定文件类型的缩进大小","slug":"_4-3-控制指定文件类型的缩进大小","link":"#_4-3-控制指定文件类型的缩进大小","children":[]},{"level":3,"title":"4.4 文件末尾新行","slug":"_4-4-文件末尾新行","link":"#_4-4-文件末尾新行","children":[]}]},{"level":2,"title":"5. 实例","slug":"_5-实例","link":"#_5-实例","children":[]},{"level":2,"title":"6. 编辑器中安装使用","slug":"_6-编辑器中安装使用","link":"#_6-编辑器中安装使用","children":[{"level":3,"title":"6.1 VSCode中安装EditorConfig","slug":"_6-1-vscode中安装editorconfig","link":"#_6-1-vscode中安装editorconfig","children":[]},{"level":3,"title":"6.1.2 使用","slug":"_6-1-2-使用","link":"#_6-1-2-使用","children":[]}]},{"level":2,"title":"7. 导出editorconfig文件","slug":"_7-导出editorconfig文件","link":"#_7-导出editorconfig文件","children":[{"level":3,"title":"7.1 webstorm 导出editorconfig文件","slug":"_7-1-webstorm-导出editorconfig文件","link":"#_7-1-webstorm-导出editorconfig文件","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.05,"words":1514},"filePathRelative":"posts/Web/frontend-base/fe-editor-config.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>团队中有多人进行项目开发时，每个人可能喜欢的编辑器不同，有人喜欢webstrom、有人用VsCode、还有人用sublime。</p>\\n<p>我们无法强迫开发者使用某种开发工具，那么我们如何让开发者都遵循统一的代码规范呢？</p>\\n<p>这时候我们就需要editorConfig了，<strong>在editorConfig里的配置的代码规范优先级是高于编辑器默认的代码格式化规则</strong>。</p>\\n<h2>2. editorConfig 简介</h2>\\n<p>editorConfig不是什么软件，而是一个名称为.editorconfig的自定义文件。该文件用来定义项目的编码规范，编辑器的行为会与.editorconfig 文件中定义的一致，并且<strong>其优先级比编辑器自身的设置要高</strong></p>","autoDesc":true}');export{t as comp,d as data};
