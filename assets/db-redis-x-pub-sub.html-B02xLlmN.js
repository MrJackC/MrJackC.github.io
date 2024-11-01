import{_ as a,c as n,a as i,o as e}from"./app-DP7tPpgD.js";const l={};function r(p,s){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="redis进阶-消息传递-发布订阅模式详解" tabindex="-1"><a class="header-anchor" href="#redis进阶-消息传递-发布订阅模式详解"><span>Redis进阶 - 消息传递：发布订阅模式详解</span></a></h1><h2 id="_1-redis发布订阅简介" tabindex="-1"><a class="header-anchor" href="#_1-redis发布订阅简介"><span>1. Redis发布订阅简介</span></a></h2><blockquote><p>Redis 发布订阅(pub/sub)是一种消息通信模式：发送者(pub)发送消息，订阅者(sub)接收消息。</p></blockquote><p>Redis 的 SUBSCRIBE 命令可以让客户端订阅任意数量的频道， 每当有新信息发送到被订阅的频道时， 信息就会被发送给所有订阅指定频道的客户端。</p><h3 id="_1-1-例子" tabindex="-1"><a class="header-anchor" href="#_1-1-例子"><span>1.1 例子</span></a></h3><p>作为例子， 下图展示了频道 channel1 ， 以及订阅这个频道的三个客户端 —— client2 、 client5 和 client1 之间的关系：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220624195054351.png" alt="image-20220624195054351" tabindex="0" loading="lazy"><figcaption>image-20220624195054351</figcaption></figure><p>当有新消息通过 PUBLISH 命令发送给频道 channel1 时， 这个消息就会被发送给订阅它的三个客户端：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220624195118822.png" alt="image-20220624195118822" tabindex="0" loading="lazy"><figcaption>image-20220624195118822</figcaption></figure><h2 id="_2-发布-订阅使用" tabindex="-1"><a class="header-anchor" href="#_2-发布-订阅使用"><span>2. 发布/订阅使用</span></a></h2><blockquote><p>Redis有两种发布/订阅模式：</p><ul><li>基于频道(Channel)的发布/订阅</li><li>基于模式(pattern)的发布/订阅</li></ul></blockquote><h3 id="_2-1-基于频道-channel-的发布-订阅" tabindex="-1"><a class="header-anchor" href="#_2-1-基于频道-channel-的发布-订阅"><span>2.1 基于频道(Channel)的发布/订阅</span></a></h3><p>&quot;发布/订阅&quot;模式包含两种角色，分别是发布者和订阅者。发布者可以向指定的频道(channel)发送消息; 订阅者可以订阅一个或者多个频道(channel),所有订阅此频道的订阅者都会收到此消息。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220624195302437.png" alt="image-20220624195302437" tabindex="0" loading="lazy"><figcaption>image-20220624195302437</figcaption></figure><h4 id="_2-1-1-基于频道发布者-publish发布消息" tabindex="-1"><a class="header-anchor" href="#_2-1-1-基于频道发布者-publish发布消息"><span>2.1.1 基于频道<strong>发布者 publish发布消息</strong></span></a></h4><p>发布者发布消息的命令是 publish,用法是 publish channel message，如向 channel1.1说一声hi</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">publish</span><span style="color:#98C379;--shiki-dark:#98C379;"> channel:1</span><span style="color:#98C379;--shiki-dark:#98C379;"> hi</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span></code></pre></div><p>这样消息就发出去了。返回值表示接收这条消息的订阅者数量。<strong>发出去的消息不会被持久化</strong>，也就是有客户端订阅channel:1后只能接收到后续发布到该频道的消息，<strong>之前的就接收不到了</strong>。</p><h4 id="_2-1-2-基于频道订阅者subscribe-订阅频道" tabindex="-1"><a class="header-anchor" href="#_2-1-2-基于频道订阅者subscribe-订阅频道"><span>2.1.2 基于频道<strong>订阅者subscribe 订阅频道</strong></span></a></h4><p>订阅频道的命令是 subscribe，可以同时订阅多个频道，用法是 subscribe channel1 [channel2 ...],例如新开一个客户端订阅上面频道:(不会收到消息，因为不会收到订阅之前就发布到该频道的消息)</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">subscribe</span><span style="color:#98C379;--shiki-dark:#98C379;"> channel:1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Reading</span><span style="color:#98C379;--shiki-dark:#98C379;"> messages...</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (press </span><span style="color:#98C379;--shiki-dark:#98C379;">Ctrl-C</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> quit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;subscribe&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> // 消息类型</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;channel:1&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> // 频道</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;hi&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> // 消息内容</span></span></code></pre></div><p>执行上面命令客户端会进入订阅状态，处于此状态下客户端不能使用除<code>subscribe</code>、<code>unsubscribe</code>、<code>psubscribe</code>和<code>punsubscribe</code>这四个属于&quot;发布/订阅&quot;之外的命令，否则会报错。</p><p>进入订阅状态后客户端可能收到3种类型的回复。每种类型的回复都包含3个值，第一个值是消息的类型，根据消类型的不同，第二个和第三个参数的含义可能不同。</p><p>消息类型的取值可能是以下3个:</p><ul><li>subscribe。表示订阅成功的反馈信息。第二个值是订阅成功的频道名称，第三个是当前客户端订阅的频道数量。</li><li>message。表示接收到的消息，第二个值表示产生消息的频道名称，第三个值是消息的内容。</li><li>unsubscribe。表示成功取消订阅某个频道。第二个值是对应的频道名称，第三个值是当前客户端订阅的频道数量，当此值为0时客户端会退出订阅状态，之后就可以执行其他非&quot;发布/订阅&quot;模式的命令了。</li></ul><h3 id="_2-2-基于模式-pattern-的发布-订阅" tabindex="-1"><a class="header-anchor" href="#_2-2-基于模式-pattern-的发布-订阅"><span>2.2 基于模式(pattern)的发布/订阅</span></a></h3><p>如果有某个/某些模式和这个频道匹配的话，那么所有订阅这个/这些频道的客户端也同样会收到信息。</p><ul><li><strong>用图例解释什么是基于模式的发布订阅</strong></li></ul><p>下图展示了一个带有频道和模式的例子， 其中 <a href="http://tweet.shop" target="_blank" rel="noopener noreferrer">tweet.shop</a>.* 模式匹配了 tweet.shop.kindle 频道和 tweet.shop.ipad 频道， 并且有不同的客户端分别订阅它们三个：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220624195827766.png" alt="image-20220624195827766" tabindex="0" loading="lazy"><figcaption>image-20220624195827766</figcaption></figure><p>当有信息发送到 tweet.shop.kindle 频道时， 信息除了发送给 clientX 和 clientY 之外， 还会发送给订阅 <a href="http://tweet.shop" target="_blank" rel="noopener noreferrer">tweet.shop</a>.* 模式的 client123 和 client256 ：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220624201134778.png" alt="image-20220624201134778" tabindex="0" loading="lazy"><figcaption>image-20220624201134778</figcaption></figure><p>另一方面， 如果接收到信息的是频道 tweet.shop.ipad ， 那么 client123 和 client256 同样会收到信息：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131020064.png" alt="image-20220624201156477" tabindex="0" loading="lazy"><figcaption>image-20220624201156477</figcaption></figure><p><strong>基于模式的例子</strong></p><p>通配符中?表示1个占位符，*表示任意个占位符(包括0)，?*表示1个以上占位符。</p><h4 id="_2-2-1基于模式publish发布" tabindex="-1"><a class="header-anchor" href="#_2-2-1基于模式publish发布"><span>2.2.1基于模式publish发布</span></a></h4><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">publish</span><span style="color:#98C379;--shiki-dark:#98C379;"> c</span><span style="color:#98C379;--shiki-dark:#98C379;"> m1</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">0</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">publish</span><span style="color:#98C379;--shiki-dark:#98C379;"> c1</span><span style="color:#98C379;--shiki-dark:#98C379;"> m1</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">publish</span><span style="color:#98C379;--shiki-dark:#98C379;"> c11</span><span style="color:#98C379;--shiki-dark:#98C379;"> m1</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">0</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">publish</span><span style="color:#98C379;--shiki-dark:#98C379;"> b</span><span style="color:#98C379;--shiki-dark:#98C379;"> m1</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">publish</span><span style="color:#98C379;--shiki-dark:#98C379;"> b1</span><span style="color:#98C379;--shiki-dark:#98C379;"> m1</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">publish</span><span style="color:#98C379;--shiki-dark:#98C379;"> b11</span><span style="color:#98C379;--shiki-dark:#98C379;"> m1</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">publish</span><span style="color:#98C379;--shiki-dark:#98C379;"> d</span><span style="color:#98C379;--shiki-dark:#98C379;"> m1</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">0</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">publish</span><span style="color:#98C379;--shiki-dark:#98C379;"> d1</span><span style="color:#98C379;--shiki-dark:#98C379;"> m1</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">publish</span><span style="color:#98C379;--shiki-dark:#98C379;"> d11</span><span style="color:#98C379;--shiki-dark:#98C379;"> m1</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-基于模式psubscribe订阅" tabindex="-1"><a class="header-anchor" href="#_2-2-2-基于模式psubscribe订阅"><span>2.2.2 基于模式psubscribe订阅</span></a></h4><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">psubscribe</span><span style="color:#98C379;--shiki-dark:#98C379;"> c?</span><span style="color:#98C379;--shiki-dark:#98C379;"> b</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">*</span><span style="color:#98C379;--shiki-dark:#98C379;"> d?</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">*</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Reading</span><span style="color:#98C379;--shiki-dark:#98C379;"> messages...</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (press </span><span style="color:#98C379;--shiki-dark:#98C379;">Ctrl-C</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> quit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;psubscribe&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;c?&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) (</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;psubscribe&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;b*&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) (</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;psubscribe&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;d?*&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) (</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">integer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) 3</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;pmessage&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;c?&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;c1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;m1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;pmessage&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;b*&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;b&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;m1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;pmessage&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;b*&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;b1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;m1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;pmessage&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;b*&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;b11&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;m1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;pmessage&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;d?*&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;d1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;m1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;pmessage&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;d?*&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;d11&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;m1&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>注意点</strong></li></ul><p>(1)使用psubscribe命令可以重复订阅同一个频道，如客户端执行了<code>psubscribe c? c?*</code>。这时向c1发布消息客户端会接受到两条消息，而同时publish命令的返回值是2而不是1。同样的，如果有另一个客户端执行了<code>subscribe c1</code> 和<code>psubscribe c?*</code>的话，向c1发送一条消息该客户顿也会受到两条消息(但是是两种类型:message和pmessage)，同时publish命令也返回2.</p><p>(2)punsubscribe命令可以退订指定的规则，用法是: <code>punsubscribe [pattern [pattern ...]]</code>,如果没有参数则会退订所有规则。</p><p>(3)使用punsubscribe只能退订通过psubscribe命令订阅的规则，不会影响直接通过subscribe命令订阅的频道；同样unsubscribe命令也不会影响通过psubscribe命令订阅的规则。另外需要注意punsubscribe命令退订某个规则时不会将其中的通配符展开，而是进行严格的字符串匹配，所以<code>punsubscribe *</code> 无法退订<code>c*</code>规则，而是必须使用<code>punsubscribe c*</code>才可以退订。（它们是相互独立的，后文可以看到数据结构上看也是两种实现）</p><h2 id="_3-深入理解" tabindex="-1"><a class="header-anchor" href="#_3-深入理解"><span>3. 深入理解</span></a></h2><blockquote><p>我们通过几个问题，来深入理解Redis的订阅发布机制</p></blockquote><h3 id="_3-1-基于频道-channel-的发布-订阅如何实现的" tabindex="-1"><a class="header-anchor" href="#_3-1-基于频道-channel-的发布-订阅如何实现的"><span>3.1 基于频道(Channel)的发布/订阅如何实现的？</span></a></h3><p>底层是通过字典（图中的pubsub_channels）实现的，这个字典就用于保存订阅频道的信息：字典的键为正在被订阅的频道， 而字典的值则是一个链表， 链表中保存了所有订阅这个频道的客户端。</p><ul><li><strong>数据结构</strong></li></ul><p>比如说，在下图展示的这个 pubsub_channels 示例中， client2 、 client5 和 client1 就订阅了 channel1 ， 而其他频道也分别被别的客户端所订阅：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131020111.png" alt="image-20220624201831631" tabindex="0" loading="lazy"><figcaption>image-20220624201831631</figcaption></figure><ul><li><strong>订阅</strong></li></ul><p>当客户端调用 SUBSCRIBE 命令时， 程序就将客户端和要订阅的频道在 pubsub_channels 字典中关联起来。</p><p>举个例子，如果客户端 client10086 执行命令 <code>SUBSCRIBE channel1 channel2 channel3</code> ，那么前面展示的 pubsub_channels 将变成下面这个样子：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131020145.png" alt="image-20220624201950967" tabindex="0" loading="lazy"><figcaption>image-20220624201950967</figcaption></figure><ul><li><strong>发布</strong></li></ul><p>当调用 <code>PUBLISH channel message</code> 命令， 程序首先根据 channel 定位到字典的键， 然后将信息发送给字典值链表中的所有客户端。</p><p>比如说，对于以下这个 pubsub_channels 实例， 如果某个客户端执行命令 <code>PUBLISH channel1 &quot;hello moto&quot;</code> ，那么 client2 、 client5 和 client1 三个客户端都将接收到 &quot;hello moto&quot; 信息：</p><ul><li><strong>退订</strong></li></ul><p>使用 UNSUBSCRIBE 命令可以退订指定的频道， 这个命令执行的是订阅的反操作： 它从 pubsub_channels 字典的给定频道（键）中， 删除关于当前客户端的信息， 这样被退订频道的信息就不会再发送给这个客户端。</p><h3 id="_3-2-基于模式-pattern-的发布-订阅如何实现的" tabindex="-1"><a class="header-anchor" href="#_3-2-基于模式-pattern-的发布-订阅如何实现的"><span>3.2 基于模式(Pattern)的发布/订阅如何实现的？</span></a></h3><p>底层是pubsubPattern节点的链表。</p><ul><li><strong>数据结构</strong> redisServer.pubsub_patterns 属性是一个链表，链表中保存着所有和模式相关的信息：</li></ul><div class="language-c" data-ext="c" data-title="c"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">struct</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> redisServer {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // ...</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    list </span><span style="color:#C678DD;--shiki-dark:#C678DD;">*</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">pubsub_patterns;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // ...</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div><p>链表中的每个节点都包含一个 redis.h/pubsubPattern 结构：</p><div class="language-c" data-ext="c" data-title="c"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">typedef</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> struct</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> pubsubPattern {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    redisClient </span><span style="color:#C678DD;--shiki-dark:#C678DD;">*</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">client;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    robj </span><span style="color:#C678DD;--shiki-dark:#C678DD;">*</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">pattern;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">} pubsubPattern;</span></span></code></pre></div><p>client 属性保存着订阅模式的客户端，而 pattern 属性则保存着被订阅的模式。</p><p>每当调用 PSUBSCRIBE 命令订阅一个模式时， 程序就创建一个包含客户端信息和被订阅模式的 pubsubPattern 结构， 并将该结构添加到 redisServer.pubsub_patterns 链表中。</p><p>作为例子，下图展示了一个包含两个模式的 pubsub_patterns 链表， 其中 client123 和 client256 都正在订阅 <a href="http://tweet.shop" target="_blank" rel="noopener noreferrer">tweet.shop</a>.* 模式：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131020170.png" alt="image-20220624202234467" tabindex="0" loading="lazy"><figcaption>image-20220624202234467</figcaption></figure><ul><li><strong>订阅</strong></li></ul><p>如果这时客户端 client10086 执行 <code>PSUBSCRIBE broadcast.list.*</code> ， 那么 pubsub_patterns 链表将被更新成这样：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131020200.png" alt="image-20220624202251148" tabindex="0" loading="lazy"><figcaption>image-20220624202251148</figcaption></figure><p>通过遍历整个 pubsub_patterns 链表，程序可以检查所有正在被订阅的模式，以及订阅这些模式的客户端。</p><ul><li><strong>发布</strong></li></ul><p>发送信息到模式的工作也是由 PUBLISH 命令进行的, 显然就是匹配模式获得Channels，然后再把消息发给客户端。</p><ul><li><strong>退订</strong></li></ul><p>使用 PUNSUBSCRIBE 命令可以退订指定的模式， 这个命令执行的是订阅模式的反操作： 程序会删除 redisServer.pubsub_patterns 链表中， 所有和被退订模式相关联的 pubsubPattern 结构， 这样客户端就不会再收到和模式相匹配的频道发来的信息。</p><h3 id="_3-3-springboot结合redis发布-订阅实例" tabindex="-1"><a class="header-anchor" href="#_3-3-springboot结合redis发布-订阅实例"><span>3.3 SpringBoot结合Redis发布/订阅实例？</span></a></h3><p>最佳实践是通过RedisTemplate，关键代码如下：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 发布</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">redisTemplate</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">convertAndSend</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;my_topic_name&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;message_content&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 配置订阅</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">RedisMessageListenerContainer</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> container </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> RedisMessageListenerContainer</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">container</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setConnectionFactory</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(connectionFactory);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">container</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">addMessageListener</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(xxxMessageListenerAdapter, </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;my_topic_name&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/db/nosql-redis/db-redis-x-pub-sub.html" target="_blank" rel="noopener noreferrer"><strong>Redis进阶 - 消息传递：发布订阅模式详解</strong></a></p>`,83)]))}const t=a(l,[["render",r],["__file","db-redis-x-pub-sub.html.vue"]]),c=JSON.parse('{"path":"/posts/Redis/db-redis-x-pub-sub.html","title":"Redis进阶 - 消息传递：发布订阅模式详解","lang":"zh-CN","frontmatter":{"aliases":"Redis进阶 - 消息传递：发布订阅模式详解","tags":null,"cssclass":null,"source":null,"order":150,"category":["数据库","Redis"],"created":"2024-02-22 10:49","updated":"2024-03-13 10:20","description":"Redis进阶 - 消息传递：发布订阅模式详解 1. Redis发布订阅简介 Redis 发布订阅(pub/sub)是一种消息通信模式：发送者(pub)发送消息，订阅者(sub)接收消息。 Redis 的 SUBSCRIBE 命令可以让客户端订阅任意数量的频道， 每当有新信息发送到被订阅的频道时， 信息就会被发送给所有订阅指定频道的客户端。 1.1 例...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Redis/db-redis-x-pub-sub.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis进阶 - 消息传递：发布订阅模式详解"}],["meta",{"property":"og:description","content":"Redis进阶 - 消息传递：发布订阅模式详解 1. Redis发布订阅简介 Redis 发布订阅(pub/sub)是一种消息通信模式：发送者(pub)发送消息，订阅者(sub)接收消息。 Redis 的 SUBSCRIBE 命令可以让客户端订阅任意数量的频道， 每当有新信息发送到被订阅的频道时， 信息就会被发送给所有订阅指定频道的客户端。 1.1 例..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220624195054351.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis进阶 - 消息传递：发布订阅模式详解\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220624195054351.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220624195118822.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220624195302437.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220624195827766.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220624201134778.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131020064.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131020111.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131020145.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131020170.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131020200.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. Redis发布订阅简介","slug":"_1-redis发布订阅简介","link":"#_1-redis发布订阅简介","children":[{"level":3,"title":"1.1 例子","slug":"_1-1-例子","link":"#_1-1-例子","children":[]}]},{"level":2,"title":"2. 发布/订阅使用","slug":"_2-发布-订阅使用","link":"#_2-发布-订阅使用","children":[{"level":3,"title":"2.1 基于频道(Channel)的发布/订阅","slug":"_2-1-基于频道-channel-的发布-订阅","link":"#_2-1-基于频道-channel-的发布-订阅","children":[]},{"level":3,"title":"2.2 基于模式(pattern)的发布/订阅","slug":"_2-2-基于模式-pattern-的发布-订阅","link":"#_2-2-基于模式-pattern-的发布-订阅","children":[]}]},{"level":2,"title":"3. 深入理解","slug":"_3-深入理解","link":"#_3-深入理解","children":[{"level":3,"title":"3.1 基于频道(Channel)的发布/订阅如何实现的？","slug":"_3-1-基于频道-channel-的发布-订阅如何实现的","link":"#_3-1-基于频道-channel-的发布-订阅如何实现的","children":[]},{"level":3,"title":"3.2 基于模式(Pattern)的发布/订阅如何实现的？","slug":"_3-2-基于模式-pattern-的发布-订阅如何实现的","link":"#_3-2-基于模式-pattern-的发布-订阅如何实现的","children":[]},{"level":3,"title":"3.3 SpringBoot结合Redis发布/订阅实例？","slug":"_3-3-springboot结合redis发布-订阅实例","link":"#_3-3-springboot结合redis发布-订阅实例","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":8.22,"words":2467},"filePathRelative":"posts/Redis/db-redis-x-pub-sub.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. Redis发布订阅简介</h2>\\n<blockquote>\\n<p>Redis 发布订阅(pub/sub)是一种消息通信模式：发送者(pub)发送消息，订阅者(sub)接收消息。</p>\\n</blockquote>\\n<p>Redis 的 SUBSCRIBE 命令可以让客户端订阅任意数量的频道， 每当有新信息发送到被订阅的频道时， 信息就会被发送给所有订阅指定频道的客户端。</p>\\n<h3>1.1 例子</h3>\\n<p>作为例子， 下图展示了频道 channel1 ， 以及订阅这个频道的三个客户端 —— client2 、 client5 和 client1 之间的关系：</p>\\n","autoDesc":true}');export{t as comp,c as data};
