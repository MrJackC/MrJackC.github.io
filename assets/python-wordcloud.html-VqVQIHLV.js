import{_ as s,c as a,a as e,o as i}from"./app-DP7tPpgD.js";const l={};function p(t,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="wordcloud入门" tabindex="-1"><a class="header-anchor" href="#wordcloud入门"><span>wordcloud入门</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>基于Python的词云生成类库,很好用,而且功能强大。可以根据文本的词条内容划分出词组的</p><p>github: <a href="https://github.com/amueller/word_cloud" target="_blank" rel="noopener noreferrer">https://github.com/amueller/word_cloud</a></p><p>效果如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230957262.png" alt="image-20210204151203285" tabindex="0" loading="lazy"><figcaption>image-20210204151203285</figcaption></figure><h2 id="_2-集成使用" tabindex="-1"><a class="header-anchor" href="#_2-集成使用"><span>2. 集成使用</span></a></h2><p>可以参考官网的simple</p><blockquote><p>解决中文乱码问题，手动指定字体</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>font = r&#39;C:\\Windows\\Fonts\\simfang.ttf&#39;</span></span>
<span class="line"><span>WordCloud( font_path=font</span></span></code></pre></div></blockquote><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># -*- coding: utf-8 -*-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from wordcloud import WordCloud</span></span>
<span class="line"><span>import matplotlib.pyplot as plt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>text = &#39;&#39;&#39;文案 文案</span></span>
<span class="line"><span>The  抱抱 Zen of LOVE 抱抱 Python, 快乐 by Tim Peters</span></span>
<span class="line"><span>公众号 公众号 Python 最好的 语言 语言</span></span>
<span class="line"><span>一辈子 is better LOVE than 一辈子.</span></span>
<span class="line"><span>喵小姐 is 爱你 than  implicit.爱你 喵小姐</span></span>
<span class="line"><span>蟹先生 is 爱你 than complex.</span></span>
<span class="line"><span>一辈子 is 蟹先生  than complicated.</span></span>
<span class="line"><span>二中 is 喵小姐 我想你了 than nested. 二中 蟹先生</span></span>
<span class="line"><span>清湖 is 胜于 than 清湖.</span></span>
<span class="line"><span>思旺 counts. 想你</span></span>
<span class="line"><span>Special 喵小姐 我想你了 aren&#39;t special enough 思旺 break 思旺 rules.</span></span>
<span class="line"><span>别生气 practicality beats 厨艺好.</span></span>
<span class="line"><span>Errors should 我想你了 never pass 小龙虾 silently. 运营</span></span>
<span class="line"><span>别生气 explicitly 好不好. LOVE</span></span>
<span class="line"><span>In the face of ambiguity, 程序员 the 厨艺好 to guess.龙华 龙华</span></span>
<span class="line"><span>There 快乐 should be one-- 我想你了 and preferably 红烧肉 only one 小龙虾--obvious way to do it.运营</span></span>
<span class="line"><span>Although 共享单车 way may not 我想你了 be obvious at first unless you&#39;re Dutch. 新媒体 地铁</span></span>
<span class="line"><span>Now is better 红烧肉 than never.</span></span>
<span class="line"><span>程序员 Although 共享单车 is often 高铁 than 东莞 now. 高铁 地铁</span></span>
<span class="line"><span>If the implementation 想你 is hard to explain, it&#39;s a bad idea. 想你了</span></span>
<span class="line"><span>If 成都 implementation is 想你 easy to explain, it may be a good idea.</span></span>
<span class="line"><span>Namespaces are 端午one 端午 honking great idea -- 成都 do more of those! 想你了</span></span>
<span class="line"><span>深圳 晚安 深圳 新媒体</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># the font from github: https://github.com/adobe-fonts</span></span>
<span class="line"><span>font = r&#39;C:\\Windows\\Fonts\\simfang.ttf&#39;</span></span>
<span class="line"><span>wc = WordCloud(collocations=False, font_path=font, width=1400, height=1400, margin=2).generate(text.lower())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>plt.imshow(wc)</span></span>
<span class="line"><span>plt.axis(&quot;off&quot;)</span></span>
<span class="line"><span>plt.show()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>wc.to_file(&#39;show_Chinese.png&#39;)  # 把词云保存下来</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const r=s(l,[["render",p],["__file","python-wordcloud.html.vue"]]),d=JSON.parse('{"path":"/posts/Python/python-wordcloud.html","title":"wordcloud入门","lang":"zh-CN","frontmatter":{"description":"wordcloud入门 1. 简介 基于Python的词云生成类库,很好用,而且功能强大。可以根据文本的词条内容划分出词组的 github: https://github.com/amueller/word_cloud 效果如下： image-20210204151203285image-20210204151203285 2. 集成使用 可以参考官网...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Python/python-wordcloud.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"wordcloud入门"}],["meta",{"property":"og:description","content":"wordcloud入门 1. 简介 基于Python的词云生成类库,很好用,而且功能强大。可以根据文本的词条内容划分出词组的 github: https://github.com/amueller/word_cloud 效果如下： image-20210204151203285image-20210204151203285 2. 集成使用 可以参考官网..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230957262.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"wordcloud入门\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230957262.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 集成使用","slug":"_2-集成使用","link":"#_2-集成使用","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.52,"words":455},"filePathRelative":"posts/Python/python-wordcloud.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>基于Python的词云生成类库,很好用,而且功能强大。可以根据文本的词条内容划分出词组的</p>\\n<p>github: <a href=\\"https://github.com/amueller/word_cloud\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/amueller/word_cloud</a></p>\\n<p>效果如下：</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230957262.png\\" alt=\\"image-20210204151203285\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20210204151203285</figcaption></figure>","autoDesc":true}');export{r as comp,d as data};
