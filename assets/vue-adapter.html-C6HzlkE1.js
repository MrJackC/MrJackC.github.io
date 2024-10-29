import{_ as a,c as n,a as i,o as l}from"./app-DEK5G3U7.js";const e={};function p(r,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="vue移动端和pc端适配方案" tabindex="-1"><a class="header-anchor" href="#vue移动端和pc端适配方案"><span>Vue移动端和pc端适配方案</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>vue项目移动端、pc端适配方案</p><ul><li>lib-flexible 根据屏幕宽度，自动设置html的font-size</li><li>postcss-px2rem 自动将px单位转换成rem</li></ul><h2 id="_2-基础集成使用" tabindex="-1"><a class="header-anchor" href="#_2-基础集成使用"><span>2. 基础集成使用</span></a></h2><h3 id="_2-1-安装依赖" tabindex="-1"><a class="header-anchor" href="#_2-1-安装依赖"><span>2.1 安装依赖</span></a></h3><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> px2rem-loader</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --save-dev</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> lib-flexible</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --save</span></span></code></pre></div><h3 id="_2-2-main-js中引入-lib-flexible" tabindex="-1"><a class="header-anchor" href="#_2-2-main-js中引入-lib-flexible"><span>2.2 main.js中引入 &quot;lib-flexible&quot;</span></a></h3><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">import</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;lib-flexible&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;"> //</span><span style="color:#98C379;--shiki-dark:#98C379;"> 移动端适配</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (目录:project/src/main.js)</span></span></code></pre></div><h3 id="_2-3-vue-config-js-引入px2rem-loader" tabindex="-1"><a class="header-anchor" href="#_2-3-vue-config-js-引入px2rem-loader"><span>2.3 vue.config.js 引入px2rem-loader</span></a></h3><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> module</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">exports</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">     chainWebpack</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: (</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">     </span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">         &lt;!--</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">新增的内容</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">--&gt;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">         config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">module</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         .</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rule</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;css&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         .</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">test</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">/</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">css</span><span style="color:#C678DD;--shiki-dark:#C678DD;">$</span><span style="color:#E06C75;--shiki-dark:#E06C75;">/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         .</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">oneOf</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;vue&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         .</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">resourceQuery</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">/</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\?</span><span style="color:#E06C75;--shiki-dark:#E06C75;">vue/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         .</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">use</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;px2rem&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         .</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">loader</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;px2rem-loader&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         .</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">options</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">             remUnit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">75</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         })</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">         &lt;!--</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">新增结束</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">--&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">     }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> }</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-login-vue中根据750px设计图写页面" tabindex="-1"><a class="header-anchor" href="#_2-4-login-vue中根据750px设计图写页面"><span>2.4 login.vue中根据750px设计图写页面</span></a></h3><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">style</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> scoped</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        .login-wrap </span><span style="color:#C678DD;--shiki-dark:#C678DD;">{</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            background</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: #</span><span style="color:#D19A66;--shiki-dark:#D19A66;">666666</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            height</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: 100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">style</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    iphone6</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">： </span><span style="color:#E06C75;--shiki-dark:#E06C75;">height</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: 1.3333</span><span style="color:#E06C75;--shiki-dark:#E06C75;">rem</span></span></code></pre></div><p>此时是已经成功了，但是px2rem-loader这里只能仅限于css，并不能满足大多数开发需求，比如使用less,stylus,scss...这个时候就需要postcss</p><h2 id="_3-集成-postcss-plugin-px2rem" tabindex="-1"><a class="header-anchor" href="#_3-集成-postcss-plugin-px2rem"><span>3. 集成 postcss-plugin-px2rem</span></a></h2><h3 id="_3-1-安装-postcss-plugin-px2rem-devdependencies" tabindex="-1"><a class="header-anchor" href="#_3-1-安装-postcss-plugin-px2rem-devdependencies"><span>3.1 安装 &quot;postcss-plugin-px2rem&quot; (devDependencies)</span></a></h3><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> postcss-plugin-px2rem</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --save-dev</span></span></code></pre></div><h3 id="_3-2-vue-config-js-配置-postcss-plugin-px2rem" tabindex="-1"><a class="header-anchor" href="#_3-2-vue-config-js-配置-postcss-plugin-px2rem"><span>3.2 vue.config.js 配置 postcss-plugin-px2rem</span></a></h3><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        module</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">exports</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            lintOnSave</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;!--新增的内容--&gt;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            css</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                loaderOptions</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                    postcss</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                        plugins</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">                            require</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;postcss-plugin-px2rem&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)({</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                                rootValue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">75</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                                // unitPrecision: 5, //允许REM单位增长到的十进制数字。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                                //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                                // propBlackList: [], //黑名单</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                                exclude</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> /(node_module)/</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                                // selectorBlackList: [], //要忽略并保留为px的选择器</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                                // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                                // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                                mediaQuery</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//（布尔值）允许在媒体查询中转换px。</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                                minPixelValue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //设置要替换的最小像素值(3px会被转rem)。 默认 0</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                            }),</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                        ]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">            &lt;!--</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">新增结束</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">--&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-package-json-中加入postcss-相关插件" tabindex="-1"><a class="header-anchor" href="#_3-3-package-json-中加入postcss-相关插件"><span>3.3 package.json 中加入postcss 相关插件</span></a></h3><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">            &quot;dependencies&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: { .. }</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">            &quot;postcss&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">                &quot;plugins&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">                    &quot;autoprefixer&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {},</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">                    &quot;precss&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span></code></pre></div><h3 id="_3-4-在login-vue中" tabindex="-1"><a class="header-anchor" href="#_3-4-在login-vue中"><span>3.4 在login.vue中</span></a></h3><div class="language-vue" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">style</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> lang</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;scss&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> scoped</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">            .login-wrap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                background: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">#666666</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                height: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">100</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">                .text-span</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                    font-size: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">16</span><span style="color:#E06C75;--shiki-dark:#E06C75;">px</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                    color: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">red</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">style</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>phone6： </span></span>
<span class="line"><span>        height: 100px;  =&gt; height: 1.3333rem</span></span>
<span class="line"><span>        font-size: 16px; =&gt; font-size: 0.21333rem</span></span></code></pre></div><p>此时就可以在项目中成功使用less,scss,styuls和px2rem了</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://juejin.cn/post/6844903780673142792" target="_blank" rel="noopener noreferrer">vue-cli3.0 使用px2rem 或 postcss-plugin-px2rem</a></p>`,27)]))}const t=a(e,[["render",p],["__file","vue-adapter.html.vue"]]),c=JSON.parse('{"path":"/posts/Web/frontend-base/vue-adapter.html","title":"Vue移动端和pc端适配方案","lang":"zh-CN","frontmatter":{"description":"Vue移动端和pc端适配方案 1. 简介 vue项目移动端、pc端适配方案 lib-flexible 根据屏幕宽度，自动设置html的font-size postcss-px2rem 自动将px单位转换成rem 2. 基础集成使用 2.1 安装依赖 2.2 main.js中引入 \\"lib-flexible\\" 2.3 vue.config.js 引入px...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Web/frontend-base/vue-adapter.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Vue移动端和pc端适配方案"}],["meta",{"property":"og:description","content":"Vue移动端和pc端适配方案 1. 简介 vue项目移动端、pc端适配方案 lib-flexible 根据屏幕宽度，自动设置html的font-size postcss-px2rem 自动将px单位转换成rem 2. 基础集成使用 2.1 安装依赖 2.2 main.js中引入 \\"lib-flexible\\" 2.3 vue.config.js 引入px..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue移动端和pc端适配方案\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 基础集成使用","slug":"_2-基础集成使用","link":"#_2-基础集成使用","children":[{"level":3,"title":"2.1 安装依赖","slug":"_2-1-安装依赖","link":"#_2-1-安装依赖","children":[]},{"level":3,"title":"2.2 main.js中引入 \\"lib-flexible\\"","slug":"_2-2-main-js中引入-lib-flexible","link":"#_2-2-main-js中引入-lib-flexible","children":[]},{"level":3,"title":"2.3 vue.config.js 引入px2rem-loader","slug":"_2-3-vue-config-js-引入px2rem-loader","link":"#_2-3-vue-config-js-引入px2rem-loader","children":[]},{"level":3,"title":"2.4 login.vue中根据750px设计图写页面","slug":"_2-4-login-vue中根据750px设计图写页面","link":"#_2-4-login-vue中根据750px设计图写页面","children":[]}]},{"level":2,"title":"3. 集成 postcss-plugin-px2rem","slug":"_3-集成-postcss-plugin-px2rem","link":"#_3-集成-postcss-plugin-px2rem","children":[{"level":3,"title":"3.1 安装 \\"postcss-plugin-px2rem\\" (devDependencies)","slug":"_3-1-安装-postcss-plugin-px2rem-devdependencies","link":"#_3-1-安装-postcss-plugin-px2rem-devdependencies","children":[]},{"level":3,"title":"3.2 vue.config.js 配置 postcss-plugin-px2rem","slug":"_3-2-vue-config-js-配置-postcss-plugin-px2rem","link":"#_3-2-vue-config-js-配置-postcss-plugin-px2rem","children":[]},{"level":3,"title":"3.3 package.json 中加入postcss 相关插件","slug":"_3-3-package-json-中加入postcss-相关插件","link":"#_3-3-package-json-中加入postcss-相关插件","children":[]},{"level":3,"title":"3.4 在login.vue中","slug":"_3-4-在login-vue中","link":"#_3-4-在login-vue中","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.03,"words":610},"filePathRelative":"posts/Web/frontend-base/vue-adapter.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>vue项目移动端、pc端适配方案</p>\\n<ul>\\n<li>lib-flexible 根据屏幕宽度，自动设置html的font-size</li>\\n<li>postcss-px2rem 自动将px单位转换成rem</li>\\n</ul>\\n<h2>2. 基础集成使用</h2>\\n<h3>2.1 安装依赖</h3>\\n<div class=\\"language-sh\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">npm</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> install</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> px2rem-loader</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> --save-dev</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">npm</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> install</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> lib-flexible</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> --save</span></span></code></pre>\\n</div>","autoDesc":true}');export{t as comp,c as data};
