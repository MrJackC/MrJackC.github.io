import{_ as a,c as n,a as e,o as i}from"./app-BOcQBfH9.js";const l={};function r(o,s){return i(),n("div",null,s[0]||(s[0]=[e(`<h1 id="es详解-查询-dsl查询之term详解" tabindex="-1"><a class="header-anchor" href="#es详解-查询-dsl查询之term详解"><span>ES详解 - 查询：DSL查询之Term详解</span></a></h1><blockquote><p>DSL查询另一种极为常用的是对词项进行搜索，官方文档中叫”term level“查询，本文主要对term level搜索进行详解。</p></blockquote><h2 id="_1-term查询引入" tabindex="-1"><a class="header-anchor" href="#_1-term查询引入"><span>1. Term查询引入</span></a></h2><p>如前文所述，查询分基于文本查询和基于词项的查询:</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429826.png" alt="image-20220805222938003" tabindex="0" loading="lazy"><figcaption>image-20220805222938003</figcaption></figure><p>本文主要讲基于词项的查询。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429863.png" alt="image-20220805223752733" tabindex="0" loading="lazy"><figcaption>image-20220805223752733</figcaption></figure><h2 id="_2-term查询" tabindex="-1"><a class="header-anchor" href="#_2-term查询"><span>2. Term查询</span></a></h2><blockquote><p>很多比较常用，也不难，就是需要结合实例理解。这里综合官方文档的内容，我设计一个测试场景的数据，以覆盖所有例子。</p></blockquote><p>准备数据</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">PUT</span><span style="color:#98C379;--shiki-dark:#98C379;"> /test-dsl-term-level</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  &quot;mappings&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    &quot;properties&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;name&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;type&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;keyword&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;programming_languages&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;type&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;keyword&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;required_matches&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;type&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;long&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">POST</span><span style="color:#98C379;--shiki-dark:#98C379;"> /test-dsl-term-level/_bulk</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{ </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;index&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;_id&quot;:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#98C379;--shiki-dark:#98C379;"> }}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;name&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;Jane Smith&quot;,</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;programming_languages&quot;:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [ </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;c++&quot;,</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;java&quot;</span><span style="color:#98C379;--shiki-dark:#98C379;"> ],</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;required_matches&quot;:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span><span style="color:#98C379;--shiki-dark:#98C379;">}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{ </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;index&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;_id&quot;:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span><span style="color:#98C379;--shiki-dark:#98C379;"> }}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;name&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;Jason Response&quot;,</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;programming_languages&quot;:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [ </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;java&quot;,</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;php&quot;</span><span style="color:#98C379;--shiki-dark:#98C379;"> ],</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;required_matches&quot;:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span><span style="color:#98C379;--shiki-dark:#98C379;">}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{ </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;index&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;_id&quot;:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 3</span><span style="color:#98C379;--shiki-dark:#98C379;"> }}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">&quot;name&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;Dave Pdai&quot;,</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;programming_languages&quot;:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [ </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;java&quot;,</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;c++&quot;,</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;php&quot;</span><span style="color:#98C379;--shiki-dark:#98C379;"> ],</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;required_matches&quot;:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 3,</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;remarks&quot;:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;hello world&quot;}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-字段是否存在-exist" tabindex="-1"><a class="header-anchor" href="#_2-1-字段是否存在-exist"><span>2.1 字段是否存在:exist</span></a></h3><p>由于多种原因，文档字段的索引值可能不存在：</p><ul><li>源JSON中的字段是null或[]</li><li>该字段已&quot;index&quot; : false在映射中设置</li><li>字段值的长度超出ignore_above了映射中的设置</li><li>字段值格式错误，并且ignore_malformed已在映射中定义</li></ul><p>所以exist表示查找是否存在字段。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429912.png" alt="image-20220805224415435" tabindex="0" loading="lazy"><figcaption>image-20220805224415435</figcaption></figure><h3 id="_2-2-id查询-ids" tabindex="-1"><a class="header-anchor" href="#_2-2-id查询-ids"><span>2.2 id查询:ids</span></a></h3><p>ids 即对id查找</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">GET</span><span style="color:#98C379;--shiki-dark:#98C379;"> /test-dsl-term-level/_search</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  &quot;query&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    &quot;ids&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;values&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [3, </span><span style="color:#98C379;--shiki-dark:#98C379;">1]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429950.png" alt="image-20220805224652643" tabindex="0" loading="lazy"><figcaption>image-20220805224652643</figcaption></figure><h3 id="_2-3-前缀-prefix" tabindex="-1"><a class="header-anchor" href="#_2-3-前缀-prefix"><span>2.3 前缀:prefix</span></a></h3><p>通过前缀查找某个字段</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">GET</span><span style="color:#98C379;--shiki-dark:#98C379;"> /test-dsl-term-level/_search</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  &quot;query&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    &quot;prefix&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;name&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;value&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;Jan&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429987.png" alt="image-20220805224755113" tabindex="0" loading="lazy"><figcaption>image-20220805224755113</figcaption></figure><h3 id="_2-4-分词匹配-term" tabindex="-1"><a class="header-anchor" href="#_2-4-分词匹配-term"><span>2.4 分词匹配:term</span></a></h3><p>前文最常见的根据分词查询</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">GET</span><span style="color:#98C379;--shiki-dark:#98C379;"> /test-dsl-term-level/_search</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  &quot;query&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    &quot;term&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;programming_languages&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;php&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429028.png" alt="image-20220805224847374" tabindex="0" loading="lazy"><figcaption>image-20220805224847374</figcaption></figure><h3 id="_2-5-多个分词匹配-terms" tabindex="-1"><a class="header-anchor" href="#_2-5-多个分词匹配-terms"><span>2.5 多个分词匹配:terms</span></a></h3><p>按照读个分词term匹配，它们是or的关系</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">GET</span><span style="color:#98C379;--shiki-dark:#98C379;"> /test-dsl-term-level/_search</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  &quot;query&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    &quot;terms&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;programming_languages&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;php&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;c++&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429065.png" alt="image-20220805224923467" tabindex="0" loading="lazy"><figcaption>image-20220805224923467</figcaption></figure><h3 id="_2-6-按某个数字字段分词匹配-term-set" tabindex="-1"><a class="header-anchor" href="#_2-6-按某个数字字段分词匹配-term-set"><span>2.6 按某个数字字段分词匹配:term set</span></a></h3><p>设计这种方式查询的初衷是用文档中的数字字段动态匹配查询满足term的个数</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">GET</span><span style="color:#98C379;--shiki-dark:#98C379;"> /test-dsl-term-level/_search</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  &quot;query&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    &quot;terms_set&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;programming_languages&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;terms&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [ </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;java&quot;,</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;php&quot;</span><span style="color:#98C379;--shiki-dark:#98C379;"> ],</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;minimum_should_match_field&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;required_matches&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429099.png" alt="image-20220805225032650" tabindex="0" loading="lazy"><figcaption>image-20220805225032650</figcaption></figure><h3 id="_2-7-通配符-wildcard" tabindex="-1"><a class="header-anchor" href="#_2-7-通配符-wildcard"><span>2.7 通配符:wildcard</span></a></h3><p>通配符匹配，比如<code>*</code></p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">GET</span><span style="color:#98C379;--shiki-dark:#98C379;"> /test-dsl-term-level/_search</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  &quot;query&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    &quot;wildcard&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;name&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;value&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;D*ai&quot;,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;boost&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 1.0,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;rewrite&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;constant_score&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429138.png" alt="image-20220805225153592" tabindex="0" loading="lazy"><figcaption>image-20220805225153592</figcaption></figure><h3 id="_2-8-范围-range" tabindex="-1"><a class="header-anchor" href="#_2-8-范围-range"><span>2.8 范围:range</span></a></h3><p>常常被用在数字或者日期范围的查询</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">GET</span><span style="color:#98C379;--shiki-dark:#98C379;"> /test-dsl-term-level/_search</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  &quot;query&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    &quot;range&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;required_matches&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;gte&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 3,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;lte&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 4</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429172.png" alt="image-20220805225640451" tabindex="0" loading="lazy"><figcaption>image-20220805225640451</figcaption></figure><h3 id="_2-9-正则-regexp" tabindex="-1"><a class="header-anchor" href="#_2-9-正则-regexp"><span>2.9 正则:regexp</span></a></h3><p>通过<a href="https://pdai.tech/md/develop/regex/dev-regex-all.html" target="_blank" rel="noopener noreferrer">正则表达式</a>查询</p><p>以&quot;Jan&quot;开头的name字段</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">GET</span><span style="color:#98C379;--shiki-dark:#98C379;"> /test-dsl-term-level/_search</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  &quot;query&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    &quot;regexp&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;name&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;value&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;Ja.*&quot;,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;case_insensitive&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429213.png" alt="image-20220805225727650" tabindex="0" loading="lazy"><figcaption>image-20220805225727650</figcaption></figure><h3 id="_2-10-模糊匹配-fuzzy" tabindex="-1"><a class="header-anchor" href="#_2-10-模糊匹配-fuzzy"><span>2.10 模糊匹配:fuzzy</span></a></h3><p>官方文档对模糊匹配：编辑距离是将一个术语转换为另一个术语所需的一个字符更改的次数。这些更改可以包括：</p><ul><li>更改字符（box→ fox）</li><li>删除字符（black→ lack）</li><li>插入字符（sic→ sick）</li><li>转置两个相邻字符（act→ cat）</li></ul><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">GET</span><span style="color:#98C379;--shiki-dark:#98C379;"> /test-dsl-term-level/_search</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  &quot;query&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    &quot;fuzzy&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;remarks&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;value&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;hell&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429249.png" alt="image-20220805225807567" tabindex="0" loading="lazy"><figcaption>image-20220805225807567</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/db/nosql-es/elasticsearch-x-dsl-term.html" target="_blank" rel="noopener noreferrer"><strong>ES详解 - 查询：DSL查询之Term详解</strong></a></p>`,56)]))}const t=a(l,[["render",r],["__file","elasticsearch-x-dsl-term.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/ES/elasticsearch-x-dsl-term.html","title":"ES详解 - 查询：DSL查询之Term详解","lang":"zh-CN","frontmatter":{"aliases":"ES详解 - 查询：DSL查询之Term详解","tags":null,"cssclass":null,"source":null,"order":100,"category":["ElasticSearch"],"created":"2024-02-22 10:49","updated":"2024-03-12 14:30","description":"ES详解 - 查询：DSL查询之Term详解 DSL查询另一种极为常用的是对词项进行搜索，官方文档中叫”term level“查询，本文主要对term level搜索进行详解。 1. Term查询引入 如前文所述，查询分基于文本查询和基于词项的查询: image-20220805222938003image-20220805222938003 本文主要...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/ES/elasticsearch-x-dsl-term.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"ES详解 - 查询：DSL查询之Term详解"}],["meta",{"property":"og:description","content":"ES详解 - 查询：DSL查询之Term详解 DSL查询另一种极为常用的是对词项进行搜索，官方文档中叫”term level“查询，本文主要对term level搜索进行详解。 1. Term查询引入 如前文所述，查询分基于文本查询和基于词项的查询: image-20220805222938003image-20220805222938003 本文主要..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429826.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ES详解 - 查询：DSL查询之Term详解\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429826.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429863.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429912.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429950.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429987.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429028.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429065.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429099.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429138.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429172.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429213.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429249.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. Term查询引入","slug":"_1-term查询引入","link":"#_1-term查询引入","children":[]},{"level":2,"title":"2. Term查询","slug":"_2-term查询","link":"#_2-term查询","children":[{"level":3,"title":"2.1 字段是否存在:exist","slug":"_2-1-字段是否存在-exist","link":"#_2-1-字段是否存在-exist","children":[]},{"level":3,"title":"2.2 id查询:ids","slug":"_2-2-id查询-ids","link":"#_2-2-id查询-ids","children":[]},{"level":3,"title":"2.3 前缀:prefix","slug":"_2-3-前缀-prefix","link":"#_2-3-前缀-prefix","children":[]},{"level":3,"title":"2.4 分词匹配:term","slug":"_2-4-分词匹配-term","link":"#_2-4-分词匹配-term","children":[]},{"level":3,"title":"2.5 多个分词匹配:terms","slug":"_2-5-多个分词匹配-terms","link":"#_2-5-多个分词匹配-terms","children":[]},{"level":3,"title":"2.6 按某个数字字段分词匹配:term set","slug":"_2-6-按某个数字字段分词匹配-term-set","link":"#_2-6-按某个数字字段分词匹配-term-set","children":[]},{"level":3,"title":"2.7 通配符:wildcard","slug":"_2-7-通配符-wildcard","link":"#_2-7-通配符-wildcard","children":[]},{"level":3,"title":"2.8 范围:range","slug":"_2-8-范围-range","link":"#_2-8-范围-range","children":[]},{"level":3,"title":"2.9 正则:regexp","slug":"_2-9-正则-regexp","link":"#_2-9-正则-regexp","children":[]},{"level":3,"title":"2.10 模糊匹配:fuzzy","slug":"_2-10-模糊匹配-fuzzy","link":"#_2-10-模糊匹配-fuzzy","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.56,"words":768},"filePathRelative":"posts/Database/ES/elasticsearch-x-dsl-term.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>DSL查询另一种极为常用的是对词项进行搜索，官方文档中叫”term level“查询，本文主要对term level搜索进行详解。</p>\\n</blockquote>\\n<h2>1. Term查询引入</h2>\\n<p>如前文所述，查询分基于文本查询和基于词项的查询:</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121429826.png\\" alt=\\"image-20220805222938003\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220805222938003</figcaption></figure>","autoDesc":true}');export{t as comp,c as data};
