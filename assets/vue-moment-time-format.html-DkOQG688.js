import{_ as a,c as n,a as t,o as e}from"./app-fWubcX7c.js";const i={};function l(o,s){return e(),n("div",null,s[0]||(s[0]=[t(`<h1 id="moment时间格式化" tabindex="-1"><a class="header-anchor" href="#moment时间格式化"><span>moment时间格式化</span></a></h1><h2 id="_1-全局导入方法" tabindex="-1"><a class="header-anchor" href="#_1-全局导入方法"><span>1. 全局导入方法</span></a></h2><ol><li><p>安装moment</p><div class="language-tex" data-ext="tex" data-title="tex"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">npm install moment --save</span></span></code></pre></div></li><li><p>main.js 引入注册</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 导入时间插件momentjs</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> moment</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;moment&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 定义时间格式全局过滤器</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Vue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">filter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;dateFormat&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#C678DD;--shiki-dark:#C678DD;">function</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">daraStr</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">pattern</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;YYYY-MM-DD HH:mm:ss&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  return</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> moment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">daraStr</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">format</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">pattern</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div></li><li><p>模板中使用</p><div class="language-vue" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- 显示2019-12-05 10:10 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;time&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;{{nowDate | dateFormat(&#39;YYYY-MM-DD HH:mm&#39;)}}&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> &lt;!-- 显示10:10 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;time&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;{{nowDate | dateFormat(&#39;HH:mm&#39;)}}&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> &lt;!-- 显示2019-12-05 10:10:10 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;time&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;{{nowDate | dateFormat}}&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div></li></ol><h2 id="_2-单个组件引入" tabindex="-1"><a class="header-anchor" href="#_2-单个组件引入"><span>2. 单个组件引入</span></a></h2><ol><li>直接在所需要的组件中引入就可以了</li></ol><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">script</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">let moment = require(&quot;moment&quot;) // 引入</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">export default </span><span style="color:#C678DD;--shiki-dark:#C678DD;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    data</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        return {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            nowDate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span><span style="color:#C678DD;--shiki-dark:#C678DD;">new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Date</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getTime</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 获取时间戳</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    created</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 转换时间格式年月日时分秒</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        this.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">nowDate</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> moment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">nowDate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">format</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;YYYY-MM-DD HH:mm&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">script</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>模板中</p><div class="language-vue" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;time&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;{{nowDate}}&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">div</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h2 id="_3-使用" tabindex="-1"><a class="header-anchor" href="#_3-使用"><span>3. 使用</span></a></h2><h3 id="_3-1-基础使用" tabindex="-1"><a class="header-anchor" href="#_3-1-基础使用"><span>3.1 基础使用</span></a></h3><ol><li><p>moment()</p><p>要获取当前的日期和时间， 只需调用不带参数的<code>moment()</code> 即可。</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">var</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> now</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> moment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span></code></pre></div></li><li><p>moment(dateStr)</p><ul><li>当从字符串创建 moment 时，需要首先检查字符串是否与已知的 <a href="http://nodejs.cn/s/eV6MeQ" target="_blank" rel="noopener noreferrer">ISO 8601</a> 格式匹配</li><li>如果未找到已知的格式，则在降维到 <code>new Date(string)</code> 之前检查字符串是否与 <a href="http://nodejs.cn/s/ETQ1d1" target="_blank" rel="noopener noreferrer">RFC 2822 日期时间</a>格式匹配。</li></ul><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">var</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> day</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> moment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;1995-12-25&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div></li><li><p><strong>moment(dateStr,format) 指定格式</strong></p><p>如果不指定格式，降维到 new Date(string)</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$moment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;20210513150959&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;YYYYMMDDHHmmss&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">format</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;YYYY-MM-DD HH:mm&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div></li><li><p>moment(dateStr,format[]) 多个格式</p><p>如果不知道输入字符串的确切格式，但是知道它可能是多种格式之一，则可以使用格式数组。</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">moment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;12-25-1995&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, [</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;MM-DD-YYYY&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;YYYY-MM-DD&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]);</span></span></code></pre></div></li></ol><h3 id="_3-2-日期操作" tabindex="-1"><a class="header-anchor" href="#_3-2-日期操作"><span>3.2 日期操作</span></a></h3><p>moment.js 使用流式接口，操作如</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>moment().add(7, &#39;days&#39;).subtract(1, &#39;months&#39;).year(2009).hours(0).minutes(0).seconds(0);</span></span></code></pre></div><ol><li><p>add()</p><p>为现有的 moment 增加时间</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>moment().add(Number, String);</span></span>
<span class="line"><span>moment().add(Duration);</span></span>
<span class="line"><span>moment().add(Object);</span></span></code></pre></div><p>如：</p><div class="language-javascript" data-ext="javascript" data-title="javascript"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">moment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">add</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">7</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;days&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><p>如果对希望简短，也有一些快捷的键。</p><div class="language-javascript" data-ext="javascript" data-title="javascript"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">moment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">add</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">7</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;d&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><table><thead><tr><th style="text-align:left;">键</th><th style="text-align:left;">快捷键</th></tr></thead><tbody><tr><td style="text-align:left;">years</td><td style="text-align:left;">y</td></tr><tr><td style="text-align:left;">quarters</td><td style="text-align:left;">Q</td></tr><tr><td style="text-align:left;">months</td><td style="text-align:left;">M</td></tr><tr><td style="text-align:left;">weeks</td><td style="text-align:left;">w</td></tr><tr><td style="text-align:left;">days</td><td style="text-align:left;">d</td></tr><tr><td style="text-align:left;">hours</td><td style="text-align:left;">h</td></tr><tr><td style="text-align:left;">minutes</td><td style="text-align:left;">m</td></tr><tr><td style="text-align:left;">seconds</td><td style="text-align:left;">s</td></tr><tr><td style="text-align:left;">milliseconds</td><td style="text-align:left;">ms</td></tr></tbody></table></li><li><h3 id="subtract" tabindex="-1"><a class="header-anchor" href="#subtract"><span>subtract()</span></a></h3><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">moment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">subtract</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Number</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E06C75;--shiki-dark:#E06C75;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">moment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">subtract</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Duration</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">moment</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">subtract</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Object</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><p>通过减去时间来改变原始的 moment。</p></li></ol><p>​ <a href="http://momentjs.cn/docs/" target="_blank" rel="noopener noreferrer">更多使用参考官方文档</a></p><h3 id="_3-3-获取本月-年最后一天" tabindex="-1"><a class="header-anchor" href="#_3-3-获取本月-年最后一天"><span>3.3 获取本月/年最后一天</span></a></h3><p>获取某年某月的最后一天</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>moment(日期).endOf(&#39;month&#39;).format(&quot;YYYY-MM-DD&quot;)//日期可以是 年月的格式 也可以是年月日的格式</span></span></code></pre></div><p>moment.js获取某年的最后一天</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>oment(日期).endOf(&#39;year&#39;).format(&quot;YYYY-MM-DD&quot;)//日期可以是年的格式 或者 年月的格式 也可以是年月日的格式</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="http://momentjs.cn/docs/" target="_blank" rel="noopener noreferrer">官方文档</a></p><p><a href="https://segmentfault.com/a/1190000021200938" target="_blank" rel="noopener noreferrer">vue+moment.js使用</a></p><p><a href="https://blog.csdn.net/qq_37899792/article/details/89914476" target="_blank" rel="noopener noreferrer">moment.js 获取某年某月的最后一天 以及 获取某年最后一天</a></p>`,25)]))}const p=a(i,[["render",l],["__file","vue-moment-time-format.html.vue"]]),k=JSON.parse(`{"path":"/posts/Web/frontend-lib/vue-moment-time-format.html","title":"moment时间格式化","lang":"zh-CN","frontmatter":{"description":"moment时间格式化 1. 全局导入方法 安装moment main.js 引入注册 模板中使用 2. 单个组件引入 直接在所需要的组件中引入就可以了 模板中 3. 使用 3.1 基础使用 moment() 要获取当前的日期和时间， 只需调用不带参数的moment() 即可。 moment(dateStr) 当从字符串创建 moment 时，需要首先...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Web/frontend-lib/vue-moment-time-format.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"moment时间格式化"}],["meta",{"property":"og:description","content":"moment时间格式化 1. 全局导入方法 安装moment main.js 引入注册 模板中使用 2. 单个组件引入 直接在所需要的组件中引入就可以了 模板中 3. 使用 3.1 基础使用 moment() 要获取当前的日期和时间， 只需调用不带参数的moment() 即可。 moment(dateStr) 当从字符串创建 moment 时，需要首先..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"moment时间格式化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 全局导入方法","slug":"_1-全局导入方法","link":"#_1-全局导入方法","children":[]},{"level":2,"title":"2. 单个组件引入","slug":"_2-单个组件引入","link":"#_2-单个组件引入","children":[]},{"level":2,"title":"3. 使用","slug":"_3-使用","link":"#_3-使用","children":[{"level":3,"title":"3.1 基础使用","slug":"_3-1-基础使用","link":"#_3-1-基础使用","children":[]},{"level":3,"title":"3.2 日期操作","slug":"_3-2-日期操作","link":"#_3-2-日期操作","children":[]},{"level":3,"title":"3.3 获取本月/年最后一天","slug":"_3-3-获取本月-年最后一天","link":"#_3-3-获取本月-年最后一天","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.28,"words":683},"filePathRelative":"posts/Web/frontend-lib/vue-moment-time-format.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 全局导入方法</h2>\\n<ol>\\n<li>\\n<p>安装moment</p>\\n<div class=\\"language-tex\\" data-ext=\\"tex\\" data-title=\\"tex\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">npm install moment --save</span></span></code></pre>\\n</div></li>\\n<li>\\n<p>main.js 引入注册</p>\\n<div class=\\"language-js\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// 导入时间插件momentjs</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">import</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> moment</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> from</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 'moment'</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// 定义时间格式全局过滤器</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">Vue</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">filter</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'dateFormat'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">function</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">daraStr</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">, </span><span style=\\"color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">pattern</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 'YYYY-MM-DD HH:mm:ss'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">  return</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> moment</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">daraStr</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">).</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">format</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">pattern</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">})</span></span></code></pre>\\n</div></li>\\n<li>\\n<p>模板中使用</p>\\n<div class=\\"language-vue\\" data-ext=\\"vue\\" data-title=\\"vue\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">&lt;!-- 显示2019-12-05 10:10 --&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> class</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"time\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;{{nowDate | dateFormat('YYYY-MM-DD HH:mm')}}&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> &lt;!-- 显示10:10 --&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> class</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"time\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;{{nowDate | dateFormat('HH:mm')}}&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> &lt;!-- 显示2019-12-05 10:10:10 --&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> class</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"time\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;{{nowDate | dateFormat}}&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">div</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span></code></pre>\\n</div></li>\\n</ol>","autoDesc":true}`);export{p as comp,k as data};
