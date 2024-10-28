import{_ as l,c as e,a,b as r,d as n,e as p,w as o,r as t,o as k}from"./app-BQBjlK2G.js";const c={};function d(h,s){const i=t("RouteLink");return k(),e("div",null,[s[2]||(s[2]=a('<h1 id="关于本站" tabindex="-1"><a class="header-anchor" href="#关于本站"><span>关于本站</span></a></h1><div class="hint-container info"><p class="hint-container-title">✨📒</p><p>详细记录一下此次建站过程</p></div><h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始"><span>开始</span></a></h2><p>之前的博客是基于jekyll打造的，要添加和定制化的东西都只能基于html+js+css完成，有些麻烦，所以一直有想更换引擎的想法<br> 直到偶然间发现vuepress，首先是被<code>vue3</code>+<code>typescript</code>+<code>vite</code>吸引，然后看到默认主题属实有点不合符我的期待，自己动手成本又太高，也没有太急着去折腾，直到无意中发现了<br><a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">vuepress-theme-hope</a>，漂亮的外观一下子就吸引到我了，然后去官网深入研究了一番，发现二次开发的成本并不高，对于我来说比较友好，基本都是基于选项的配置型，和一小部分的定制开发，也可以基于vue来写，这让我觉得很合适。所以，一步步折腾了起来……</p><h2 id="markdown增强" tabindex="-1"><a class="header-anchor" href="#markdown增强"><span>Markdown增强</span></a></h2>',5)),r("p",null,[s[1]||(s[1]=n("hope主题的markdown效果是出乎意料的好，而且支持了很多普通markdown不支持的东西，如自定义容器、带tab的代码块，最方便的是可以直接写流程图了，可选高亮主题（本站代码高亮基于shikiPlugin,虽不如默认的prismjs轻量高效，但能提供更准确的语法高亮）具体效果看这里☞")),p(i,{to:"/demo/markdown.html"},{default:o(()=>s[0]||(s[0]=[n("Markdown展示")])),_:1})]),s[3]||(s[3]=a(`<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> .github</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> ISSUE_TEMPLATE</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # issus 模版</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   └──</span><span style="color:#98C379;--shiki-dark:#98C379;"> bug-report.yml</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   └──</span><span style="color:#98C379;--shiki-dark:#98C379;"> workflows</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">       └──</span><span style="color:#98C379;--shiki-dark:#98C379;"> deploy-docs.yml</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 推送脚本</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> CNAME</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> LICENSE</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> README.md</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> api</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   └──</span><span style="color:#98C379;--shiki-dark:#98C379;"> proxy.js</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 跨域代理</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> env.d.ts</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> package.json</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> pnpm-lock.yaml</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> script</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> requirements.txt</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   └──</span><span style="color:#98C379;--shiki-dark:#98C379;"> submit.py</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # Github Actions 推送URL使用脚本</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> src</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> .vuepress</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> client.ts</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 客户端配置文件</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> components</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> MyCoverLink.vue</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 友链组件</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   └──</span><span style="color:#98C379;--shiki-dark:#98C379;"> Mylink.vue</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 卡片组件</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> config.ts</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # vuepress配置文件</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> data</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 数据</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> navbar</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> plugins</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> vuepress-plugin-canvas</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> vuepress-plugin-gradient-cover</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> vuepress-plugin-hitokoto</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> vuepress-plugin-live2DAssist</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   └──</span><span style="color:#98C379;--shiki-dark:#98C379;"> vuepress-plugin-popper</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> public</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> assets</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 资源</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> sidebar</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> styles</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> theme</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> api</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   └──</span><span style="color:#98C379;--shiki-dark:#98C379;"> bing.ts</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # bing 每日壁纸</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> components</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #自定义组件</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> index.ts</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> layouts</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 自定义布局</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   └──</span><span style="color:#98C379;--shiki-dark:#98C379;"> utils</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">       ├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> busuanzi.pure.js</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 不蒜子统计</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">       └──</span><span style="color:#98C379;--shiki-dark:#98C379;"> time.ts</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #运行时间</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   │</span><span style="color:#98C379;--shiki-dark:#98C379;">   └──</span><span style="color:#98C379;--shiki-dark:#98C379;"> theme.ts</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 主题配置文件</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">│</span><span style="color:#98C379;--shiki-dark:#98C379;">   └──</span><span style="color:#98C379;--shiki-dark:#98C379;"> README.md</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">├──</span><span style="color:#98C379;--shiki-dark:#98C379;"> tsconfig.json</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">└──</span><span style="color:#98C379;--shiki-dark:#98C379;"> vercel.json</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # vercel 配置文件</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="框架支持" tabindex="-1"><a class="header-anchor" href="#框架支持"><span>框架支持</span></a></h2><p><a href="https://v2.vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">vuepress2.x</a></p><h2 id="主题支持" tabindex="-1"><a class="header-anchor" href="#主题支持"><span>主题支持</span></a></h2><p><a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">vuepress-theme-hope</a></p><h2 id="自定义内容" tabindex="-1"><a class="header-anchor" href="#自定义内容"><span>自定义内容</span></a></h2><p>基于原主题进行了继承，个性化内容如下，主要自定义内容分为</p><ol><li><p><strong>自定义布局</strong></p><ul><li>NotFound.vue</li><li>Layout.vue(增加打赏组件)</li><li>News.vue(说说列表布局)</li></ul></li><li><p><strong>自定义组件</strong></p><ul><li>BlogHero.vue</li><li>PageFooter.vue</li><li>Sponsor.vue（打赏组件）</li><li>NewsList.vue （说说列表）</li><li>NewsItem.vue （说说item）</li></ul></li><li><p><strong>本地插件开发</strong></p><ul><li>vuepress-plugin-canvas（支持彩虹背景和动态几何图形两种）</li><li>vuepress-plugin-gradient-cover （遮罩背景）</li><li>vuepress-plugin-hitokoto （一言插件）</li><li>vuepress-plugin-live2DAssist （看板娘辅助，由于子页有sidebar，看板娘会挡住，所以写了一个子页隐藏的小东西）</li><li>vuepress-plugin-popper （鼠标特效，基于<a href="https://github.com/moefyit/moefy-canvas" target="_blank" rel="noopener noreferrer">@moefy-canvas/theme-popper</a>）</li></ul></li><li><p><strong>引用外部内容</strong></p><ul><li><p><a href="https://github.com/oh-my-live2d/vuepress-plugin-oh-my-live2d" target="_blank" rel="noopener noreferrer">vuepress-plugin-oh-my-live2d</a> 看板娘插件</p></li><li><p>不蒜子统计</p></li><li><p><a href="https://github.com/moefyit/moefy-canvas" target="_blank" rel="noopener noreferrer">@moefy-canvas/theme-popper</a>原有插件只支持vuepress1.x，自己基于moefy-canvas进行了支持vuepress2.x的本地化插件开发</p></li><li><p><a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/google-analytics.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-google-analytics</a> 支持Google Analytics 4 正好看到通知原来的UA也要被强制转换了，所以更换了G4</p></li></ul></li><li><p><strong>配置内容</strong></p><ul><li>navbar</li><li>sidebar</li><li>评论基于 <a href="https://waline.js.org/" target="_blank" rel="noopener noreferrer">Waline</a></li><li>搜索基于<a href="https://www.algolia.com/developers/?utm_content=powered_by&amp;utm_source=localhost&amp;utm_medium=referral&amp;utm_campaign=docsearch" target="_blank" rel="noopener noreferrer">algolia</a></li><li>启用 copyright 版权信息插件</li><li>feed rss插件</li><li>增加文章类型-说说，为说说markdown图片添加预览选择器</li></ul></li><li><p><strong>零碎</strong></p><ul><li>运行时间统计</li><li>CSS 样式美化</li><li>引入字体，品如手写体，夏行楷体</li><li>wanlie 增加自定义emoji，并修改展示样式</li><li>个性log</li><li>自动推送新文章url到搜索引擎（百度、Bing、Google）👉<a href="/platform/github/github-action">详细配置</a></li></ul></li></ol>`,9))])}const C=l(c,[["render",d],["__file","about.html.vue"]]),F=JSON.parse('{"path":"/about.html","title":"关于本站","lang":"zh-CN","frontmatter":{"date":"2023-03-14T21:45:45.000Z","icon":"info","sidebar":false,"category":["Blog"],"tag":["Blog"],"description":"关于本站 ✨📒 详细记录一下此次建站过程 开始 之前的博客是基于jekyll打造的，要添加和定制化的东西都只能基于html+js+css完成，有些麻烦，所以一直有想更换引擎的想法 直到偶然间发现vuepress，首先是被vue3+typescript+vite吸引，然后看到默认主题属实有点不合符我的期待，自己动手成本又太高，也没有太急着去折腾，直到无...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/about.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"关于本站"}],["meta",{"property":"og:description","content":"关于本站 ✨📒 详细记录一下此次建站过程 开始 之前的博客是基于jekyll打造的，要添加和定制化的东西都只能基于html+js+css完成，有些麻烦，所以一直有想更换引擎的想法 直到偶然间发现vuepress，首先是被vue3+typescript+vite吸引，然后看到默认主题属实有点不合符我的期待，自己动手成本又太高，也没有太急着去折腾，直到无..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:07:05.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"Blog"}],["meta",{"property":"article:published_time","content":"2023-03-14T21:45:45.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:07:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"关于本站\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-14T21:45:45.000Z\\",\\"dateModified\\":\\"2024-10-21T07:07:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"开始","slug":"开始","link":"#开始","children":[]},{"level":2,"title":"Markdown增强","slug":"markdown增强","link":"#markdown增强","children":[]},{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"框架支持","slug":"框架支持","link":"#框架支持","children":[]},{"level":2,"title":"主题支持","slug":"主题支持","link":"#主题支持","children":[]},{"level":2,"title":"自定义内容","slug":"自定义内容","link":"#自定义内容","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494425000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":2}]},"readingTime":{"minutes":3.03,"words":910},"filePathRelative":"about.md","localizedDate":"2023年3月14日","excerpt":"\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">✨📒</p>\\n<p>详细记录一下此次建站过程</p>\\n</div>\\n<h2>开始</h2>\\n<p>之前的博客是基于jekyll打造的，要添加和定制化的东西都只能基于html+js+css完成，有些麻烦，所以一直有想更换引擎的想法<br>\\n直到偶然间发现vuepress，首先是被<code>vue3</code>+<code>typescript</code>+<code>vite</code>吸引，然后看到默认主题属实有点不合符我的期待，自己动手成本又太高，也没有太急着去折腾，直到无意中发现了<br>\\n<a href=\\"https://theme-hope.vuejs.press/zh/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">vuepress-theme-hope</a>，漂亮的外观一下子就吸引到我了，然后去官网深入研究了一番，发现二次开发的成本并不高，对于我来说比较友好，基本都是基于选项的配置型，和一小部分的定制开发，也可以基于vue来写，这让我觉得很合适。所以，一步步折腾了起来……</p>","autoDesc":true}');export{C as comp,F as data};
