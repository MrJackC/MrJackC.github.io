import{_ as a,c as n,a as i,o as l}from"./app-JRvFIbSa.js";const t={};function r(e,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="vue使用print-js实现打印功能" tabindex="-1"><a class="header-anchor" href="#vue使用print-js实现打印功能"><span>Vue使用print-js实现打印功能</span></a></h1><h2 id="_1-官网地址" tabindex="-1"><a class="header-anchor" href="#_1-官网地址"><span>1. 官网地址</span></a></h2><p><a href="https://printjs.crabbly.com/" target="_blank" rel="noopener noreferrer">https://printjs.crabbly.com/</a></p><h2 id="_2-下载" tabindex="-1"><a class="header-anchor" href="#_2-下载"><span>2. 下载</span></a></h2><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>npm install print-js --save</span></span></code></pre></div><h2 id="_3-导入" tabindex="-1"><a class="header-anchor" href="#_3-导入"><span>3. 导入</span></a></h2><p>在main.js 中全局导入</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> printjs</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;print-js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;print-js/dist/print.css&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">prototype</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$print</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> printjs</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h2 id="_4-使用" tabindex="-1"><a class="header-anchor" href="#_4-使用"><span>4. 使用</span></a></h2><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">template</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> id</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;printBox&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">img</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> src</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;@/assets/resources/images/zuyoulogo.png&quot;</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> alt</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">img</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> src</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;@/assets/logo.png&quot;</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> alt</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">h1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;abc&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">h1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> style</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;page-break-after:always;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;分页1&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> style</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;page-break-after:always;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;分页2&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> style</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;page-break-after:always;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;分页3&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> style</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;page-break-after:always;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;分页4&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">a-button</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> @click=&quot;printHTML&quot;&gt;打印HTML&lt;/a-button&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">  &lt;a-button</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> @click=&quot;printPDF&quot;&gt;打印PDF&lt;/a-button&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">  &lt;a-button</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> @click=&quot;printImg&quot;&gt;打印图片&lt;/a-button&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">  &lt;a-button</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> @click=&quot;printJSON&quot;&gt;打印JSON&lt;/a-button&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">export</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> default</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  data</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    return {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      printUrl</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      printUrl2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      someJSONdata</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;John Doe&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          email</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;john@doe.com&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          phone</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;111-111-1111&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;Barry Allen&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          email</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;barry@flash.com&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          phone</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;222-222-2222&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;Cool Dude&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          email</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;cool@dude.com&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          phone</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;333-333-3333&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      ]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  methods</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    printHTML</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">      this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$print</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      	printable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;printBox&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;html&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        header</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;打印标题&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        targetStyles</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;*&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">], </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 打印内容使用所有HTML样式，没有设置这个属性/值，设置分页打印没有效果</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      })</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    printJSON</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">      this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$print</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span><span style="color:#E06C75;--shiki-dark:#E06C75;">printable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">someJSONdata</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">properties</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;name&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;email&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;phone&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">], </span><span style="color:#E06C75;--shiki-dark:#E06C75;">type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;json&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    printPDF</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">      this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$print</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span><span style="color:#E06C75;--shiki-dark:#E06C75;">printable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;docs/xx_large_printjs.pdf&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;pdf&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    printImg</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">      this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$print</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      	printable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">printUrl</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 也可设置清晰度比html绑定更高精度的图片</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;image&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      });</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">      this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$print</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      	printable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">printUrl</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">printUrl2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">], </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 打印多张图片</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;image&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      });</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">}</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">;</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-具体参数" tabindex="-1"><a class="header-anchor" href="#_5-具体参数"><span>5. 具体参数</span></a></h2><table><thead><tr><th>参数</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>printable</td><td>null</td><td>文档来源：pdf或图像的url，html元素的id或json数据的对象</td></tr><tr><td>type</td><td>PDF</td><td>可打印类型。可用的打印选项包括：pdf，html，image，json和raw-html。</td></tr><tr><td>header</td><td>null</td><td>用于HTML，Image或JSON打印的可选标头。它将放在页面顶部。此属性将接受文本或原始HTML</td></tr><tr><td>headerStyle</td><td>&#39;font-weight：300;&#39;</td><td>要应用于标题文本的可选标题样式</td></tr><tr><td>maxWidth</td><td>800</td><td>最大文档宽度（像素）。根据需要更改此项。在打印HTML，图像或JSON时使用。</td></tr><tr><td>css</td><td>null</td><td>这允许我们传递一个或多个应该应用于正在打印的html的css文件URL。值可以是包含单个URL的字符串，也可以是包含多个URL的数组。</td></tr><tr><td>style</td><td>null</td><td>这允许我们传递一个字符串，该字符串应该应用于正在打印的html。</td></tr><tr><td>scanStyles</td><td>true</td><td>设置为false时，库不会处理应用于正在打印的html的样式。使用css参数时很有用。</td></tr><tr><td>targetStyle</td><td>null</td><td>默认情况下，在打印HTML元素时，库仅处理某些样式。此选项允许您传递要处理的样式数组。例如：[&#39;padding-top&#39;，&#39;border-bottom&#39;]</td></tr><tr><td>targetStyles</td><td>null</td><td>与targetStyle相同，这将处理任何一系列样式。例如：[&#39;border&#39;，&#39;padding&#39;]，将包括&#39;border-bottom&#39;，&#39;border-top&#39;，&#39;border-left&#39;，&#39;border-right&#39;，&#39;padding-top&#39;等。你也可以传递[&#39;*&#39;]来处理所有样式</td></tr><tr><td>ignoreElements</td><td>[]</td><td>接受打印父html元素时应忽略的html的id数组。</td></tr><tr><td>properties</td><td>null</td><td>在打印JSON时使用。这些是对象属性名称。</td></tr><tr><td>gridHeaderStyle</td><td>&#39;font-weight：bold;&#39;</td><td>打印JSON数据时网格标题的可选样式。</td></tr><tr><td>gridStyle</td><td>&#39;border: 1px solid lightgray; margin-bottom: -1px;&#39;</td><td>打印JSON数据时网格行的可选样式</td></tr><tr><td>repeatTableHeader</td><td>true</td><td>在打印JSON数据时使用。设置为时false，数据表标题仅显示在第一页中。</td></tr><tr><td>showModal</td><td>null</td><td>启用此选项可在检索或处理大型PDF文件时显示用户反馈</td></tr><tr><td>modalMessage</td><td>&#39;Retrieving Document...&#39;</td><td>当向用户显示的消息showModal被设定为true。</td></tr><tr><td>onLoadingStart</td><td>null</td><td>加载PDF时要执行的功能</td></tr><tr><td>onLoadingEnd</td><td>null</td><td>加载PDF后要执行的功能</td></tr><tr><td>documentTitle</td><td>&#39;Document&#39;</td><td>打印html，image或json时，它将显示为文档标题。如果用户尝试将打印作业保存为pdf文件，它也将是文档的名称。</td></tr><tr><td>fallbackPrintable</td><td>null</td><td>打印pdf时，如果浏览器不兼容（检查浏览器兼容性表），库将在新选项卡中打开pdf。这允许您传递要打开的不同pdf文档，而不是传递给printable的原始文档。如果您在备用pdf文件中注入javascript，这可能很有用。</td></tr><tr><td>onPdfOpen</td><td>null</td><td>打印pdf时，如果浏览器不兼容（检查浏览器兼容性表），库将在新选项卡中打开pdf。可以在此处传递回调函数，这将在发生这种情况时执行。在您想要处理打印流程，更新用户界面等的某些情况下，它可能很有用。</td></tr><tr><td>onPrintDialogClose</td><td>null</td><td>关闭浏览器打印对话框后执行回调功能</td></tr><tr><td>onError</td><td>error =&gt; throw error</td><td>发生错误时要执行的回调函数。</td></tr><tr><td>base64</td><td>false</td><td>在打印作为base64数据传递的PDF文档时使用</td></tr><tr><td>honorMarginPadding(不建议使用)</td><td>true</td><td>这用于保留或删除正在打印的元素的填充和边距。有时这些样式设置在屏幕上很棒，但在打印时看起来很糟糕。您可以通过将其设置为false来删除它。</td></tr><tr><td>honorColor(不建议使用)</td><td>false</td><td>要以彩色打印文本，请将此属性设置为true。默认情况下，所有文本都将以黑色打印。</td></tr><tr><td>font(不建议使用)</td><td>&#39;TimesNewRoman&#39;</td><td>打印HTML或JSON时使用的字体</td></tr><tr><td>font_size(不建议使用)</td><td>&#39;12pt&#39;</td><td>打印HTML或JSON时使用的字体大小</td></tr><tr><td>imageStyle (不建议使用)</td><td>&#39;width:100%;&#39;</td><td>打印图像时使用。接受包含要应用于每个图像的自定义样式的字符串。</td></tr><tr><td>frameId</td><td>null</td><td>print.js会将要打印的内容复制到一个新的Frame中,此参数是frame的id值</td></tr></tbody></table><h2 id="_6-参考文章" tabindex="-1"><a class="header-anchor" href="#_6-参考文章"><span>6. 参考文章</span></a></h2><p><a href="https://juejin.cn/post/6888519415717953549" target="_blank" rel="noopener noreferrer">Vue使用print-js实现打印功能</a></p>`,14)]))}const o=a(t,[["render",r],["__file","fe-lib-print.html.vue"]]),d=JSON.parse('{"path":"/posts/Web/frontend-lib/fe-lib-print.html","title":"Vue使用print-js实现打印功能","lang":"zh-CN","frontmatter":{"description":"Vue使用print-js实现打印功能 1. 官网地址 https://printjs.crabbly.com/ 2. 下载 3. 导入 在main.js 中全局导入 4. 使用 5. 具体参数 6. 参考文章 Vue使用print-js实现打印功能","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-lib/fe-lib-print.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Vue使用print-js实现打印功能"}],["meta",{"property":"og:description","content":"Vue使用print-js实现打印功能 1. 官网地址 https://printjs.crabbly.com/ 2. 下载 3. 导入 在main.js 中全局导入 4. 使用 5. 具体参数 6. 参考文章 Vue使用print-js实现打印功能"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue使用print-js实现打印功能\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 官网地址","slug":"_1-官网地址","link":"#_1-官网地址","children":[]},{"level":2,"title":"2. 下载","slug":"_2-下载","link":"#_2-下载","children":[]},{"level":2,"title":"3. 导入","slug":"_3-导入","link":"#_3-导入","children":[]},{"level":2,"title":"4. 使用","slug":"_4-使用","link":"#_4-使用","children":[]},{"level":2,"title":"5. 具体参数","slug":"_5-具体参数","link":"#_5-具体参数","children":[]},{"level":2,"title":"6. 参考文章","slug":"_6-参考文章","link":"#_6-参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.36,"words":1308},"filePathRelative":"posts/Web/frontend-lib/fe-lib-print.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 官网地址</h2>\\n<p><a href=\\"https://printjs.crabbly.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://printjs.crabbly.com/</a></p>\\n<h2>2. 下载</h2>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>npm install print-js --save</span></span></code></pre>\\n</div>","autoDesc":true}');export{o as comp,d as data};
