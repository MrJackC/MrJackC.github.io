import{_ as a,c as n,a as i,o as e}from"./app-fWubcX7c.js";const l={};function o(p,s){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="vue实战-vue组件打包成库" tabindex="-1"><a class="header-anchor" href="#vue实战-vue组件打包成库"><span>Vue实战 - Vue组件打包成库</span></a></h1><h2 id="_1-开发组件" tabindex="-1"><a class="header-anchor" href="#_1-开发组件"><span>1. 开发组件</span></a></h2><p>开发组件的过程并无特殊之处，跟平时在Vue项目里定义component是一样的。有一点需要注意的是，平时在Vue项目里，组件的name可以不写，但如果要打包成库，组件的name必须写。为了描述方便，我们把将要打包的组件定义为MyCom1、MyCom2。其示例代码如下：</p><div class="language-vue" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">template</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">template</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">script</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> default</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;MyCom1&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">script</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h2 id="_2-定义install方法" tabindex="-1"><a class="header-anchor" href="#_2-定义install方法"><span>2. 定义install方法</span></a></h2><blockquote><p>Vue引用组件使用Vue.use方法，此方法会调用组件的install方法，所以需要定义组件的install方法。可以在项目中新建一个文件夹，例如命名为lib，然后在此文件夹中添加各个组件的install方法定义。</p></blockquote><p>例如，新建lib/MyCom1Install.js，内容如下：</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> MyCom1</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;../src/MyCom1.vue&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">function</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> install</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">component</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">MyCom1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">MyCom1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> default</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> install</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h2 id="_3-定义打包入口文件" tabindex="-1"><a class="header-anchor" href="#_3-定义打包入口文件"><span>3. 定义打包入口文件</span></a></h2><p>当有多个组件时，需要有一个入口文件引用这些组件。例如，同样在lib文件夹下，添加一个lib.js，内容如下：</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> { </span><span style="color:#C678DD;--shiki-dark:#C678DD;">default</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> as</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> MyCom1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;./MyCom1Install&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> { </span><span style="color:#C678DD;--shiki-dark:#C678DD;">default</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> as</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> MyCom2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;./MyCom2Install&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h2 id="_4-package配置" tabindex="-1"><a class="header-anchor" href="#_4-package配置"><span>4. package配置</span></a></h2><blockquote><p>这一步直接命令行执行一直不成功，但是package 中的没有问题</p></blockquote><p>package配置需要做两件事件，但首先，我们要确定这个包的名称，例如为mycom。生成lib的脚本如下所示：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">vue-cli-service</span><span style="color:#98C379;--shiki-dark:#98C379;"> build</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --target</span><span style="color:#98C379;--shiki-dark:#98C379;"> lib</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --name</span><span style="color:#98C379;--shiki-dark:#98C379;"> mycom</span><span style="color:#98C379;--shiki-dark:#98C379;"> lib/lib.js</span></span></code></pre></div><p>完成之后，在工程的dist文件夹下，将生成以下文件：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230947076.png" alt="image-20221014132327142" tabindex="0" loading="lazy"><figcaption>image-20221014132327142</figcaption></figure><p>这些文件有不同的应用场合，我们需要用到的，其实就只有.umd.min.js和.css两个文件。由于有多个文件，需要在package中指明我们要用的是哪个，所以需要在package中加入：</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">&quot;main&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;dist/mycom.umd.min.js&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span></code></pre></div><p>package完整修改内容如下：</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  &quot;name&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;mycom&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  &quot;version&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;0.1.0&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  &quot;private&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//如果要上传npm，就为false</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  &quot;main&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;dist/mycom.umd.min.js&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  &quot;scripts&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    &quot;build:lib&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;vue-cli-service build --target lib --name mycom lib/lib.js&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  ...其他无关内容</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="_5-打包" tabindex="-1"><a class="header-anchor" href="#_5-打包"><span>5. 打包</span></a></h2><p>打包的话就没什么好说的了，</p><p>yarn build:lib 或者</p><p>npm run build:lib</p><p>结束之后，可以上传到npm，也可以复制相关内容到需要引用组件项目的node_modules文件夹中。如果要复制，需要复制以下内容：</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">mycom</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">  package</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">json</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  dist</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    mycom</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">umd</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">min</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">js</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    mycom</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">css</span></span></code></pre></div><h2 id="_6-使用组件库" tabindex="-1"><a class="header-anchor" href="#_6-使用组件库"><span>6. 使用组件库</span></a></h2><p>在main.js中，加入对组件的引用：</p><div class="language-javascript" data-ext="javascript" data-title="javascript"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">MyCom1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;">MyCom2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;mycom&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;mycom/dist/mycom.css&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">use</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">MyCom1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">use</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">MyCom2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><p>然后在Vue页面中，像其他组件一样引用即可：</p><div class="language-vue" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">template</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;app&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">MyCom1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">MyCom2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">template</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">script</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> default</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;App&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">script</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h2 id="_7-发布npm-补充" tabindex="-1"><a class="header-anchor" href="#_7-发布npm-补充"><span>7.发布npm（补充）</span></a></h2><p>1、先到NPM官网注册账号，如果已有账号则跳过此步骤</p><p>2、在组件库项目的根目录下执行</p><div class="language-coffeescript" data-ext="coffeescript" data-title="coffeescript"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> login</span></span></code></pre></div><p>登陆账号，输入你的账号和密码，并验证邮箱地址，登陆成功后则可以发布到NPM网站了</p><p>3、更新版本号</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">npm</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> version</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> patch</span></span></code></pre></div><p>这是把版本迭代一级，每次更新时都需要输入这个命令，或者直接在package.json中修改版本号，只要与npm上的版本不同就行</p><p>4、发布到npm官网</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>npm publish --access public</span></span></code></pre></div><h2 id="_8-如何同步淘宝镜像中-npm-包-补充" tabindex="-1"><a class="header-anchor" href="#_8-如何同步淘宝镜像中-npm-包-补充"><span>8. 如何同步淘宝镜像中 npm 包（补充）</span></a></h2><h3 id="_8-1-背景" tabindex="-1"><a class="header-anchor" href="#_8-1-背景"><span>8.1 背景</span></a></h3><p>我们使用npm安装模块的时候一般都使用淘宝镜像。<strong>淘宝镜像同步频率目前为 10分钟 一次</strong>，以保证尽量与官方服务同步。</p><p>我们发布模块至npm后，有时候短时间内无法从淘宝镜像安装最新发布的版本，这时候我们可以主动同步模块至淘宝镜像。</p><h3 id="_8-2-主动同步" tabindex="-1"><a class="header-anchor" href="#_8-2-主动同步"><span>8.2 主动同步</span></a></h3><blockquote><p>找到需要同步包的名字 这边假设 包名字为 vite</p></blockquote><h4 id="_8-2-1-方式一-sync-命令" tabindex="-1"><a class="header-anchor" href="#_8-2-1-方式一-sync-命令"><span>8.2.1 方式一：<code>sync</code> 命令</span></a></h4><p>直接通过 <code>sync</code> 命令马上同步一个模块, 只有 <code>cnpm</code> 命令行才有此功能:</p><div class="language-dart" data-ext="dart" data-title="dart"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">cnpm </span><span style="color:#C678DD;--shiki-dark:#C678DD;">sync</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> vite</span></span></code></pre></div><h4 id="_8-2-1-方式二-web-方式" tabindex="-1"><a class="header-anchor" href="#_8-2-1-方式二-web-方式"><span>8.2.1 方式二：web 方式</span></a></h4><p>还可以直接通过 web 方式来同步:</p><blockquote><p><a href="https://npmmirror.com/sync/%7B%E5%8C%85%E7%9A%84%E5%90%8D%E5%AD%97%7D" target="_blank" rel="noopener noreferrer">https://npmmirror.com/sync/{包的名字}</a> 如上假设包名字为 vite</p></blockquote><div class="language-kotlin" data-ext="kotlin" data-title="kotlin"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">open</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> https:</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//npm.taobao.org/sync/vite</span></span></code></pre></div><p>则访问 <a href="https://npmmirror.com/sync/vite" target="_blank" rel="noopener noreferrer">https://npmmirror.com/sync/vite</a> 就可以同步了</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230947121.png" alt="image-20221108172214025" tabindex="0" loading="lazy"><figcaption>image-20221108172214025</figcaption></figure><h2 id="_9-包上传公司仓库" tabindex="-1"><a class="header-anchor" href="#_9-包上传公司仓库"><span>9. 包上传公司仓库</span></a></h2><p><a href="https://juejin.cn/post/6986917713482350600" target="_blank" rel="noopener noreferrer">相关文章</a></p><ol><li><p>配置公司仓库地址</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> set</span><span style="color:#98C379;--shiki-dark:#98C379;"> registry</span><span style="color:#98C379;--shiki-dark:#98C379;"> http://192.168.x.x:8082/repository/npm_all/</span></span></code></pre></div></li><li><p>配置认证地址</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> login</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -registry</span><span style="color:#98C379;--shiki-dark:#98C379;"> http://192.168.x.x:8082/repository/npm_fd</span></span></code></pre></div></li><li><p>在package 下配置publishConfig</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;publishConfig&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> : {</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    &quot;access&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;public&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    &quot;registry&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;http://192.168.x.x:8082/repository/npm_fd&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span></code></pre></div></li><li><p>发布</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> publish</span></span></code></pre></div></li></ol><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/lweiyue/article/details/120064122" target="_blank" rel="noopener noreferrer">Vue组件打包成库和使用库的方法</a></p><p><a href="https://juejin.cn/post/6986917713482350600" target="_blank" rel="noopener noreferrer">npm私服配置介绍</a></p>`,63)]))}const t=a(l,[["render",o],["__file","vue-x-lib-package.html.vue"]]),c=JSON.parse('{"path":"/posts/Web/frontend-vue/vue-x-lib-package.html","title":"Vue实战 - Vue组件打包成库","lang":"zh-CN","frontmatter":{"description":"Vue实战 - Vue组件打包成库 1. 开发组件 开发组件的过程并无特殊之处，跟平时在Vue项目里定义component是一样的。有一点需要注意的是，平时在Vue项目里，组件的name可以不写，但如果要打包成库，组件的name必须写。为了描述方便，我们把将要打包的组件定义为MyCom1、MyCom2。其示例代码如下： 2. 定义install方法 V...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-vue/vue-x-lib-package.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Vue实战 - Vue组件打包成库"}],["meta",{"property":"og:description","content":"Vue实战 - Vue组件打包成库 1. 开发组件 开发组件的过程并无特殊之处，跟平时在Vue项目里定义component是一样的。有一点需要注意的是，平时在Vue项目里，组件的name可以不写，但如果要打包成库，组件的name必须写。为了描述方便，我们把将要打包的组件定义为MyCom1、MyCom2。其示例代码如下： 2. 定义install方法 V..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230947076.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue实战 - Vue组件打包成库\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230947076.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230947121.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 开发组件","slug":"_1-开发组件","link":"#_1-开发组件","children":[]},{"level":2,"title":"2. 定义install方法","slug":"_2-定义install方法","link":"#_2-定义install方法","children":[]},{"level":2,"title":"3. 定义打包入口文件","slug":"_3-定义打包入口文件","link":"#_3-定义打包入口文件","children":[]},{"level":2,"title":"4. package配置","slug":"_4-package配置","link":"#_4-package配置","children":[]},{"level":2,"title":"5. 打包","slug":"_5-打包","link":"#_5-打包","children":[]},{"level":2,"title":"6. 使用组件库","slug":"_6-使用组件库","link":"#_6-使用组件库","children":[]},{"level":2,"title":"7.发布npm（补充）","slug":"_7-发布npm-补充","link":"#_7-发布npm-补充","children":[]},{"level":2,"title":"8. 如何同步淘宝镜像中 npm 包（补充）","slug":"_8-如何同步淘宝镜像中-npm-包-补充","link":"#_8-如何同步淘宝镜像中-npm-包-补充","children":[{"level":3,"title":"8.1 背景","slug":"_8-1-背景","link":"#_8-1-背景","children":[]},{"level":3,"title":"8.2 主动同步","slug":"_8-2-主动同步","link":"#_8-2-主动同步","children":[]}]},{"level":2,"title":"9. 包上传公司仓库","slug":"_9-包上传公司仓库","link":"#_9-包上传公司仓库","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.71,"words":1112},"filePathRelative":"posts/Web/frontend-vue/vue-x-lib-package.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 开发组件</h2>\\n<p>开发组件的过程并无特殊之处，跟平时在Vue项目里定义component是一样的。有一点需要注意的是，平时在Vue项目里，组件的name可以不写，但如果要打包成库，组件的name必须写。为了描述方便，我们把将要打包的组件定义为MyCom1、MyCom2。其示例代码如下：</p>\\n<div class=\\"language-vue\\" data-ext=\\"vue\\" data-title=\\"vue\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">template</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">  &lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">template</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">script</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">export</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> default</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">  name</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">: </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"MyCom1\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">};</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">script</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span></code></pre>\\n</div>","autoDesc":true}');export{t as comp,c as data};
