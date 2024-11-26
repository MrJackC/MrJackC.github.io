import{_ as a,c as i,a as n,o as t}from"./app-JRvFIbSa.js";const l={};function e(o,s){return t(),i("div",null,s[0]||(s[0]=[n(`<h1 id="字典数据" tabindex="-1"><a class="header-anchor" href="#字典数据"><span>字典数据</span></a></h1><p>本小节，讲解前端如何使用 [系统管理 -&gt; 字典管理] 菜单的字典数据，例如说字典数据的下拉框、单选 / 多选按钮、高亮展示等等。</p><figure><img src="https://doc.iocoder.cn/img/Vue3/字典数据/01.png" alt="字典管理" tabindex="0" loading="lazy"><figcaption>字典管理</figcaption></figure><h2 id="_1-全局缓存" tabindex="-1"><a class="header-anchor" href="#_1-全局缓存"><span><a href="https://doc.iocoder.cn/vue3/dict/#_1-%E5%85%A8%E5%B1%80%E7%BC%93%E5%AD%98" target="_blank" rel="noopener noreferrer">#</a>1. 全局缓存</span></a></h2><p>用户登录成功后，前端会从后端获取到全量的字典数据，缓存在 store 中。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/Vue3/字典数据/02.png" alt="字典 store" tabindex="0" loading="lazy"><figcaption>字典 store</figcaption></figure><p>这样，前端在使用到字典数据时，无需重复请求后端，提升用户体验。</p><p>不过，缓存暂时未提供刷新，所以在字典数据发生变化时，需要用户刷新浏览器，进行重新加载。</p><h2 id="_2-dict-type" tabindex="-1"><a class="header-anchor" href="#_2-dict-type"><span><a href="https://doc.iocoder.cn/vue3/dict/#_2-dict-type" target="_blank" rel="noopener noreferrer">#</a>2. DICT_TYPE</span></a></h2><p>在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/utils/dict.ts#L73-L125" target="_blank" rel="noopener noreferrer"><code>dict.ts</code> (opens new window)</a>文件中，使用 <code>DICT_TYPE</code> 枚举了字典的 KEY。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/Vue3/字典数据/03.png" alt=" 枚举" tabindex="0" loading="lazy"><figcaption> 枚举</figcaption></figure><p>后续如果有新的字典 KEY，需要你自己进行添加。</p><h2 id="_3-dicttag-字典标签" tabindex="-1"><a class="header-anchor" href="#_3-dicttag-字典标签"><span><a href="https://doc.iocoder.cn/vue3/dict/#_3-dicttag-%E5%AD%97%E5%85%B8%E6%A0%87%E7%AD%BE" target="_blank" rel="noopener noreferrer">#</a>3. DictTag 字典标签</span></a></h2><p><a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/components/DictTag/index.ts" target="_blank" rel="noopener noreferrer">\`\` (opens new window)</a>组件，翻译字段对应的字典展示文本，并根据 <code>colorType</code>、<code>cssClass</code> 进行高亮。使用示例如下：</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!--</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    type: 字典 KEY</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    value: 字典值</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dict-tag</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> :type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;DICT_TYPE.SYSTEM_LOGIN_TYPE&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> :value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;row.logType&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre></div><figure><img src="https://doc.iocoder.cn/img/Vue3/字典数据/04.png" alt="DictTag" tabindex="0" loading="lazy"><figcaption>DictTag</figcaption></figure><p>【推荐】注意，一般情况下使用 CRUD schemas 方式，不需要直接使用 <code>&lt;dict-tag /&gt;</code>，而是通过 <code>columns</code> 的 <code>dictType</code> 和 <code>dictClass</code> 属性即可。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/Vue3/字典数据/04-a.png" alt=" 的  和  属性" tabindex="0" loading="lazy"><figcaption> 的 和 属性</figcaption></figure><h2 id="_4-字典工具类" tabindex="-1"><a class="header-anchor" href="#_4-字典工具类"><span><a href="https://doc.iocoder.cn/vue3/dict/#_4-%E5%AD%97%E5%85%B8%E5%B7%A5%E5%85%B7%E7%B1%BB" target="_blank" rel="noopener noreferrer">#</a>4. 字典工具类</span></a></h2><p>在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/utils/dict.ts#L23-L71" target="_blank" rel="noopener noreferrer"><code>dict.ts</code> (opens new window)</a>文件中，提供了字典工具类，方法如下：</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 获取 dictType 对应的数据字典数组【object】</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> const</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getDictOptions</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">dictType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">string</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {{ </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/** 省略代码 */</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 获取 dictType 对应的数据字典数组【int】</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> const</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getIntDictOptions</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">dictType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">string</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> { </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/** 省略代码 */</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 获取 dictType 对应的数据字典数组【string】</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> const</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getStrDictOptions</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">dictType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">string</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> { </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/** 省略代码 */</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 获取 dictType 对应的数据字典数组【boolean】</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> const</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getBoolDictOptions</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">dictType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">string</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> { </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/** 省略代码 */</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 获取 dictType 对应的数据字典数组【object】</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> const</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getDictObj</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">dictType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">string</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">any</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> { </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/** 省略代码 */</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> }</span></span></code></pre></div><p>结合 Element Plus 的表单组件，使用示例如下：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">template</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  &lt;!-- radio 单选框 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">el-radio</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">    v-for</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;dict in getIntDictOptions(DICT_TYPE.COMMON_STATUS)&quot;</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">    :key</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;dict.value&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">    :label</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;parseInt(dict.value)&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    {{dict.label}}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">el-radio</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  &lt;!-- select 下拉框 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">el-select</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> v-model</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;form.code&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> placeholder</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;请选择渠道编码&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> clearable</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">el-option</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      v-for</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;dict in getStrDictOptions(DICT_TYPE.SYSTEM_SMS_CHANNEL_CODE)&quot;</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      :key</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;dict.value&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      :label</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;dict.label&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">      :value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;dict.value&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">el-select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">template</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">script</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> setup</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> lang</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;tsx&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">DICT_TYPE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">getIntDictOptions</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">getStrDictOptions</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;@/utils/dict&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">script</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上次更新: 2023/04/04, 22:45:16</p>`,24)]))}const p=a(l,[["render",e],["__file","4.字典数据.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/12.%E5%89%8D%E7%AB%AF%E6%89%8B%E5%86%8C%20Vue%203/4.%E5%AD%97%E5%85%B8%E6%95%B0%E6%8D%AE.html","title":"字典数据","lang":"zh-CN","frontmatter":{"description":"字典数据 本小节，讲解前端如何使用 [系统管理 -> 字典管理] 菜单的字典数据，例如说字典数据的下拉框、单选 / 多选按钮、高亮展示等等。 字典管理字典管理 #1. 全局缓存 用户登录成功后，前端会从后端获取到全量的字典数据，缓存在 store 中。如下图所示： 字典 store字典 store 这样，前端在使用到字典数据时，无需重复请求后端，提升用...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/12.%E5%89%8D%E7%AB%AF%E6%89%8B%E5%86%8C%20Vue%203/4.%E5%AD%97%E5%85%B8%E6%95%B0%E6%8D%AE.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"字典数据"}],["meta",{"property":"og:description","content":"字典数据 本小节，讲解前端如何使用 [系统管理 -> 字典管理] 菜单的字典数据，例如说字典数据的下拉框、单选 / 多选按钮、高亮展示等等。 字典管理字典管理 #1. 全局缓存 用户登录成功后，前端会从后端获取到全量的字典数据，缓存在 store 中。如下图所示： 字典 store字典 store 这样，前端在使用到字典数据时，无需重复请求后端，提升用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/Vue3/%E5%AD%97%E5%85%B8%E6%95%B0%E6%8D%AE/01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T07:41:53.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-21T07:41:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"字典数据\\",\\"image\\":[\\"https://doc.iocoder.cn/img/Vue3/%E5%AD%97%E5%85%B8%E6%95%B0%E6%8D%AE/01.png\\",\\"https://doc.iocoder.cn/img/Vue3/%E5%AD%97%E5%85%B8%E6%95%B0%E6%8D%AE/02.png\\",\\"https://doc.iocoder.cn/img/Vue3/%E5%AD%97%E5%85%B8%E6%95%B0%E6%8D%AE/03.png\\",\\"https://doc.iocoder.cn/img/Vue3/%E5%AD%97%E5%85%B8%E6%95%B0%E6%8D%AE/04.png\\",\\"https://doc.iocoder.cn/img/Vue3/%E5%AD%97%E5%85%B8%E6%95%B0%E6%8D%AE/04-a.png\\"],\\"dateModified\\":\\"2024-11-21T07:41:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#1. 全局缓存","slug":"_1-全局缓存","link":"#_1-全局缓存","children":[]},{"level":2,"title":"#2. DICT_TYPE","slug":"_2-dict-type","link":"#_2-dict-type","children":[]},{"level":2,"title":"#3. DictTag 字典标签","slug":"_3-dicttag-字典标签","link":"#_3-dicttag-字典标签","children":[]},{"level":2,"title":"#4. 字典工具类","slug":"_4-字典工具类","link":"#_4-字典工具类","children":[]}],"git":{"createdTime":1732174913000,"updatedTime":1732174913000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.26,"words":677},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/12.前端手册 Vue 3/4.字典数据.md","localizedDate":"2024年11月21日","excerpt":"\\n<p>本小节，讲解前端如何使用 [系统管理 -&gt; 字典管理] 菜单的字典数据，例如说字典数据的下拉框、单选 / 多选按钮、高亮展示等等。</p>\\n<figure><img src=\\"https://doc.iocoder.cn/img/Vue3/字典数据/01.png\\" alt=\\"字典管理\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>字典管理</figcaption></figure>\\n<h2><a class=\\"header-anchor\\" href=\\"#_1-全局缓存\\"><span></span></a><a href=\\"https://doc.iocoder.cn/vue3/dict/#_1-%E5%85%A8%E5%B1%80%E7%BC%93%E5%AD%98\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">#</a>1. 全局缓存</h2>","autoDesc":true}');export{p as comp,c as data};
