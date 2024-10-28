import{_ as a,c as n,a as l,o as i}from"./app-W9QyTiMU.js";const e={};function o(p,s){return i(),n("div",null,s[0]||(s[0]=[l(`<h1 id="element文件上传-upload" tabindex="-1"><a class="header-anchor" href="#element文件上传-upload"><span>Element文件上传-Upload</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>element 的官网已经挺详尽了，这里主要是针对自己的疑惑点，进行描述补充。</p><h2 id="_2-基础使用" tabindex="-1"><a class="header-anchor" href="#_2-基础使用"><span>2. 基础使用</span></a></h2><h3 id="_2-1-点击上传" tabindex="-1"><a class="header-anchor" href="#_2-1-点击上传"><span>2.1 点击上传</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230911547.png" alt="image-20210607093813556" tabindex="0" loading="lazy"><figcaption>image-20210607093813556</figcaption></figure><blockquote><p>通过 slot 你可以传入自定义的上传按钮类型和文字提示。可通过设置<code>limit</code>和<code>on-exceed</code>来限制上传文件的个数和定义超出限制时的行为。可通过设置<code>before-remove</code>来阻止文件移除操作。</p></blockquote><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">el-upload</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">  class</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;upload-demo&quot;</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">  action</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;https://jsonplaceholder.typicode.com/posts/&quot;</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">  :on-preview=&quot;handlePreview&quot;</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">  :on-remove=&quot;handleRemove&quot;</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">  :before-remove=&quot;beforeRemove&quot;</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">  multiple</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">  :limit=&quot;3&quot;</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">  :on-exceed=&quot;handleExceed&quot;</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">  :file-list=&quot;fileList&quot;&gt;</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">  &lt;el-button</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> size</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;small&quot;</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> type</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;primary&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;点击上传&lt;/</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">el-button</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> slot</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;tip&quot;</span><span style="color:#D19A66;font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> class</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;el-upload__tip&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;只能上传jpg/png文件，且不超过500kb&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">el</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">-</span><span style="color:#E06C75;--shiki-dark:#E06C75;">upload</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">script</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  export default </span><span style="color:#C678DD;--shiki-dark:#C678DD;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    data</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      return {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        fileList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [{</span><span style="color:#E06C75;--shiki-dark:#E06C75;">name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;food.jpeg&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">url</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}, {</span><span style="color:#E06C75;--shiki-dark:#E06C75;">name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;food2.jpeg&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">url</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      };</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    methods</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      handleRemove</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">file</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">fileList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        console</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">log</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">file</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">fileList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      handlePreview</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">file</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        console</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">log</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">file</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      handleExceed</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">files</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">fileList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">$message</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">warning</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">\`当前限制选择 3 个文件，本次选择了 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">\${</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">files</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">length</span><span style="color:#C678DD;--shiki-dark:#C678DD;">}</span><span style="color:#98C379;--shiki-dark:#98C379;"> 个文件，共选择了 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">\${</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">files</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">length</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> fileList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">length</span><span style="color:#C678DD;--shiki-dark:#C678DD;">}</span><span style="color:#98C379;--shiki-dark:#98C379;"> 个文件\`</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      beforeRemove</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">file</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">fileList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$confirm</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">\`确定移除 </span><span style="color:#C678DD;--shiki-dark:#C678DD;">\${</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> file</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">name</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> }</span><span style="color:#98C379;--shiki-dark:#98C379;">？\`</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">script</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-常见问题与解决方案" tabindex="-1"><a class="header-anchor" href="#_3-常见问题与解决方案"><span>3. 常见问题与解决方案</span></a></h2><h3 id="_3-1-上传服务的oauth认证" tabindex="-1"><a class="header-anchor" href="#_3-1-上传服务的oauth认证"><span>3.1 上传服务的Oauth认证</span></a></h3><p>项目如果是采用OAuth 的token 认证形式</p><p>el-upload 中添加请求头</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;el-upload</span></span>
<span class="line"><span>   ...</span></span>
<span class="line"><span>   :headers=&quot;headers&quot;</span></span>
<span class="line"><span>   /&gt;</span></span></code></pre></div><p>js代码</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">script</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    import </span><span style="color:#C678DD;--shiki-dark:#C678DD;">{</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> getToken</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> }</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> from &quot;@/utils/auth&quot;;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    export default </span><span style="color:#C678DD;--shiki-dark:#C678DD;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> 			data</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            return {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                 headers</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        					Authorization</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Bearer &quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getToken</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(),</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      		}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/script&gt;</span></span></code></pre></div><h3 id="_3-2-上传文件额外指定参数" tabindex="-1"><a class="header-anchor" href="#_3-2-上传文件额外指定参数"><span>3.2 上传文件额外指定参数</span></a></h3><div class="language-vue" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">el-upload</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   ...</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   :</span><span style="color:#D19A66;--shiki-dark:#D19A66;">data</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">data</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   /&gt;</span></span></code></pre></div><h2 id="_3-参考文章" tabindex="-1"><a class="header-anchor" href="#_3-参考文章"><span>3. 参考文章</span></a></h2><p><a href="https://element.eleme.cn/#/zh-CN/component/upload" target="_blank" rel="noopener noreferrer">element-Upload 上传</a></p>`,19)]))}const t=a(e,[["render",o],["__file","element-upload.html.vue"]]),B=JSON.parse('{"path":"/posts/Web/frontend-lib/element-upload.html","title":"Element文件上传-Upload","lang":"zh-CN","frontmatter":{"description":"Element文件上传-Upload 1. 简介 element 的官网已经挺详尽了，这里主要是针对自己的疑惑点，进行描述补充。 2. 基础使用 2.1 点击上传 image-20210607093813556image-20210607093813556 通过 slot 你可以传入自定义的上传按钮类型和文字提示。可通过设置limit和on-excee...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Web/frontend-lib/element-upload.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Element文件上传-Upload"}],["meta",{"property":"og:description","content":"Element文件上传-Upload 1. 简介 element 的官网已经挺详尽了，这里主要是针对自己的疑惑点，进行描述补充。 2. 基础使用 2.1 点击上传 image-20210607093813556image-20210607093813556 通过 slot 你可以传入自定义的上传按钮类型和文字提示。可通过设置limit和on-excee..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230911547.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Element文件上传-Upload\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230911547.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2.  基础使用","slug":"_2-基础使用","link":"#_2-基础使用","children":[{"level":3,"title":"2.1 点击上传","slug":"_2-1-点击上传","link":"#_2-1-点击上传","children":[]}]},{"level":2,"title":"3. 常见问题与解决方案","slug":"_3-常见问题与解决方案","link":"#_3-常见问题与解决方案","children":[{"level":3,"title":"3.1 上传服务的Oauth认证","slug":"_3-1-上传服务的oauth认证","link":"#_3-1-上传服务的oauth认证","children":[]},{"level":3,"title":"3.2 上传文件额外指定参数","slug":"_3-2-上传文件额外指定参数","link":"#_3-2-上传文件额外指定参数","children":[]}]},{"level":2,"title":"3. 参考文章","slug":"_3-参考文章","link":"#_3-参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.17,"words":351},"filePathRelative":"posts/Web/frontend-lib/element-upload.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>element 的官网已经挺详尽了，这里主要是针对自己的疑惑点，进行描述补充。</p>\\n<h2>2.  基础使用</h2>\\n<h3>2.1 点击上传</h3>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230911547.png\\" alt=\\"image-20210607093813556\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20210607093813556</figcaption></figure>","autoDesc":true}');export{t as comp,B as data};
