import{_ as a,c as n,a as i,o as l}from"./app-4x2aIoqi.js";const e={};function p(o,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="es详解-聚合-聚合查询之pipline聚合详解" tabindex="-1"><a class="header-anchor" href="#es详解-聚合-聚合查询之pipline聚合详解"><span>ES详解 - 聚合：聚合查询之Pipline聚合详解</span></a></h1><blockquote><p>前文主要讲了 ElasticSearch提供的三种聚合方式之指标聚合（Metric Aggregation)，本文主要讲讲管道聚合（Pipeline Aggregation)。简单而言就是让上一步的聚合结果成为下一个聚合的输入，这就是管道。</p></blockquote><h2 id="_1-如何理解pipeline聚合" tabindex="-1"><a class="header-anchor" href="#_1-如何理解pipeline聚合"><span>1. 如何理解pipeline聚合</span></a></h2><blockquote><p>如何理解管道聚合呢？最重要的是要站在设计者角度看这个功能的要实现的目的：让上一步的聚合结果成为下一个聚合的输入，这就是管道。</p></blockquote><h3 id="_1-1-管道机制的常见场景" tabindex="-1"><a class="header-anchor" href="#_1-1-管道机制的常见场景"><span>1.1 管道机制的常见场景</span></a></h3><blockquote><p>首先回顾下，我们之前在<a href="https://pdai.tech/md/framework/tomcat/tomcat-x-container-pipline.html#%E7%9F%A5%E8%AF%86%E5%87%86%E5%A4%87" target="_blank" rel="noopener noreferrer">Tomcat管道机制</a>中向你介绍的常见的管道机制设计中的应用场景。</p></blockquote><h4 id="_1-1-1-责任链模式" tabindex="-1"><a class="header-anchor" href="#_1-1-1-责任链模式"><span>1.1.1 责任链模式</span></a></h4><p>管道机制在设计模式上属于责任链模式，如果你不理解，请参看如下文章：</p><p><a href="https://pdai.tech/md/dev-spec/pattern/15_chain.html" target="_blank" rel="noopener noreferrer">责任链模式(Chain of responsibility pattern)</a>: 通过责任链模式, 你可以为某个请求创建一个对象链. 每个对象依序检查此请求并对其进行处理或者将它传给链中的下一个对象。</p><h4 id="_1-1-2-filterchain" tabindex="-1"><a class="header-anchor" href="#_1-1-2-filterchain"><span>1.1.2 FilterChain</span></a></h4><p>在软件开发的常接触的责任链模式是FilterChain，它体现在很多软件设计中：</p><ul><li><strong>比如Spring Security框架中</strong></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121426417.png" alt="image-20220806222013752" tabindex="0" loading="lazy"><figcaption>image-20220806222013752</figcaption></figure><ul><li><strong>比如HttpServletRequest处理的过滤器中</strong></li></ul><p>当一个request过来的时候，需要对这个request做一系列的加工，使用责任链模式可以使每个加工组件化，减少耦合。也可以使用在当一个request过来的时候，需要找到合适的加工方式。当一个加工方式不适合这个request的时候，传递到下一个加工方法，该加工方式再尝试对request加工。</p><p>网上找了图，这里我们后文将通过Tomcat请求处理向你阐述。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121426464.png" alt="image-20220806222120276" tabindex="0" loading="lazy"><figcaption>image-20220806222120276</figcaption></figure><h3 id="_1-2-elasticsearch设计管道机制" tabindex="-1"><a class="header-anchor" href="#_1-2-elasticsearch设计管道机制"><span>1.2 ElasticSearch设计管道机制</span></a></h3><p>简单而言：让上一步的聚合结果成为下一个聚合的输入，这就是管道。</p><p>接下来，无非就是对不同类型的聚合有接口的支撑，比如：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121426498.png" alt="image-20220806222204594" tabindex="0" loading="lazy"><figcaption>image-20220806222204594</figcaption></figure><blockquote><p>第一个维度：管道聚合有很多不同<strong>类型</strong>，每种类型都与其他聚合计算不同的信息，但是可以将这些类型分为两类：</p></blockquote><ul><li><strong>父级</strong> 父级聚合的输出提供了一组管道聚合，它可以计算新的存储桶或新的聚合以添加到现有存储桶中。</li><li><strong>兄弟</strong> 同级聚合的输出提供的管道聚合，并且能够计算与该同级聚合处于同一级别的新聚合。</li></ul><blockquote><p>第二个维度：根据<strong>功能设计</strong>的意图</p></blockquote><p>比如前置聚合可能是Bucket聚合，后置的可能是基于Metric聚合，那么它就可以成为一类管道</p><p>进而引出了：<code>xxx bucket</code>(是不是很容易理解了)</p><ul><li>Bucket聚合 -&gt; Metric聚合： bucket聚合的结果，成为下一步metric聚合的输入 <ul><li>Average bucket</li><li>Min bucket</li><li>Max bucket</li><li>Sum bucket</li><li>Stats bucket</li><li>Extended stats bucket</li></ul></li></ul><p>对构建体系而言，理解上面的已经够了，其它的类型不过是锦上添花而言。</p><h2 id="_2-一些例子" tabindex="-1"><a class="header-anchor" href="#_2-一些例子"><span>2. 一些例子</span></a></h2><blockquote><p>这里我们通过几个简单的例子看看即可，具体如果需要使用看看文档即可xw</p></blockquote><h3 id="_2-1-average-bucket-聚合" tabindex="-1"><a class="header-anchor" href="#_2-1-average-bucket-聚合"><span>2.1 Average bucket 聚合</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">POST</span><span style="color:#98C379;--shiki-dark:#98C379;"> _search</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  &quot;size&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 0,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  &quot;aggs&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    &quot;sales_per_month&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;date_histogram&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;field&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;date&quot;,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;calendar_interval&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;month&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;aggs&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;sales&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">          &quot;sum&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">            &quot;field&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;price&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    &quot;avg_monthly_sales&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">//</span><span style="color:#98C379;--shiki-dark:#98C379;"> tag::avg-bucket-agg-syntax[]</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">               </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;avg_bucket&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;buckets_path&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;sales_per_month&gt;sales&quot;,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;gap_policy&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;skip&quot;,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;format&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;#,##0.00;(#,##0.00)&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">//</span><span style="color:#98C379;--shiki-dark:#98C379;"> end::avg-bucket-agg-syntax[]</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">               </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>嵌套的bucket聚合：聚合出按月价格的直方图</li><li>Metic聚合：对上面的聚合再求平均值。</li></ul><p><strong>字段类型</strong>：</p><ul><li>buckets_path：指定聚合的名称，支持多级嵌套聚合。</li><li>gap_policy 当管道聚合遇到不存在的值，有点类似于term等聚合的(missing)时所采取的策略，可选择值为：skip、insert_zeros。</li><li>skip：此选项将丢失的数据视为bucket不存在。它将跳过桶并使用下一个可用值继续计算。</li><li>format 用于格式化聚合桶的输出(key)。</li></ul><p>输出结果如下</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  &quot;took&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">11</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  &quot;timed_out&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  &quot;_shards&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">...</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  &quot;hits&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">...</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  &quot;aggregations&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    &quot;sales_per_month&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      &quot;buckets&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          &quot;key_as_string&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;2015/01/01 00:00:00&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          &quot;key&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1420070400000</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          &quot;doc_count&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          &quot;sales&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            &quot;value&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">550.0</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          &quot;key_as_string&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;2015/02/01 00:00:00&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          &quot;key&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1422748800000</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          &quot;doc_count&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          &quot;sales&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            &quot;value&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">60.0</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          &quot;key_as_string&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;2015/03/01 00:00:00&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          &quot;key&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1425168000000</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          &quot;doc_count&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">2</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">          &quot;sales&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            &quot;value&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">375.0</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      ]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    &quot;avg_monthly_sales&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      &quot;value&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">328.33333333333333</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      &quot;value_as_string&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;328.33&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-stats-bucket-聚合" tabindex="-1"><a class="header-anchor" href="#_2-2-stats-bucket-聚合"><span>2.2 Stats bucket 聚合</span></a></h3><p>进一步的stat bucket也很容易理解了</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">POST</span><span style="color:#98C379;--shiki-dark:#98C379;"> /sales/_search</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  &quot;size&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 0,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  &quot;aggs&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    &quot;sales_per_month&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;date_histogram&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;field&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;date&quot;,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;calendar_interval&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;month&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;aggs&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;sales&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">          &quot;sum&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">            &quot;field&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;price&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    &quot;stats_monthly_sales&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;stats_bucket&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;buckets_path&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;sales_per_month&gt;sales&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   &quot;took&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 11,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   &quot;timed_out&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> false</span><span style="color:#98C379;--shiki-dark:#98C379;">,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   &quot;_shards&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> ...,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   &quot;hits&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> ...,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">   &quot;aggregations&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;sales_per_month&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">         &quot;buckets&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">               &quot;key_as_string&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;2015/01/01 00:00:00&quot;,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">               &quot;key&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 1420070400000,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">               &quot;doc_count&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 3,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">               &quot;sales&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">                  &quot;value&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 550.0</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">               }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">               &quot;key_as_string&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;2015/02/01 00:00:00&quot;,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">               &quot;key&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 1422748800000,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">               &quot;doc_count&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 2,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">               &quot;sales&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">                  &quot;value&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 60.0</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">               }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">               &quot;key_as_string&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;2015/03/01 00:00:00&quot;,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">               &quot;key&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 1425168000000,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">               &quot;doc_count&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 2,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">               &quot;sales&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">                  &quot;value&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 375.0</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">               }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">         ]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;stats_monthly_sales&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">         &quot;count&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 3,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">         &quot;min&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 60.0,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">         &quot;max&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 550.0,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">         &quot;avg&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 328.3333333333333,</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">         &quot;sum&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 985.0</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/db/nosql-es/elasticsearch-x-agg-pipeline.html" target="_blank" rel="noopener noreferrer"><strong>ES详解 - 聚合：聚合查询之Pipline聚合详解</strong></a></p>`,44)]))}const t=a(e,[["render",p],["__file","elasticsearch-x-agg-pipeline.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/ES/elasticsearch-x-agg-pipeline.html","title":"ES详解 - 聚合：聚合查询之Pipline聚合详解","lang":"zh-CN","frontmatter":{"aliases":"ES详解 - 聚合：聚合查询之Pipline聚合详解","tags":null,"cssclass":null,"source":null,"order":140,"category":["ElasticSearch"],"created":"2024-02-22 10:49","updated":"2024-03-12 14:27","description":"ES详解 - 聚合：聚合查询之Pipline聚合详解 前文主要讲了 ElasticSearch提供的三种聚合方式之指标聚合（Metric Aggregation)，本文主要讲讲管道聚合（Pipeline Aggregation)。简单而言就是让上一步的聚合结果成为下一个聚合的输入，这就是管道。 1. 如何理解pipeline聚合 如何理解管道聚合呢？最...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/ES/elasticsearch-x-agg-pipeline.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"ES详解 - 聚合：聚合查询之Pipline聚合详解"}],["meta",{"property":"og:description","content":"ES详解 - 聚合：聚合查询之Pipline聚合详解 前文主要讲了 ElasticSearch提供的三种聚合方式之指标聚合（Metric Aggregation)，本文主要讲讲管道聚合（Pipeline Aggregation)。简单而言就是让上一步的聚合结果成为下一个聚合的输入，这就是管道。 1. 如何理解pipeline聚合 如何理解管道聚合呢？最..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121426417.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ES详解 - 聚合：聚合查询之Pipline聚合详解\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121426417.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121426464.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121426498.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 如何理解pipeline聚合","slug":"_1-如何理解pipeline聚合","link":"#_1-如何理解pipeline聚合","children":[{"level":3,"title":"1.1 管道机制的常见场景","slug":"_1-1-管道机制的常见场景","link":"#_1-1-管道机制的常见场景","children":[]},{"level":3,"title":"1.2 ElasticSearch设计管道机制","slug":"_1-2-elasticsearch设计管道机制","link":"#_1-2-elasticsearch设计管道机制","children":[]}]},{"level":2,"title":"2. 一些例子","slug":"_2-一些例子","link":"#_2-一些例子","children":[{"level":3,"title":"2.1 Average bucket 聚合","slug":"_2-1-average-bucket-聚合","link":"#_2-1-average-bucket-聚合","children":[]},{"level":3,"title":"2.2 Stats bucket 聚合","slug":"_2-2-stats-bucket-聚合","link":"#_2-2-stats-bucket-聚合","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.18,"words":1255},"filePathRelative":"posts/Database/ES/elasticsearch-x-agg-pipeline.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>前文主要讲了 ElasticSearch提供的三种聚合方式之指标聚合（Metric Aggregation)，本文主要讲讲管道聚合（Pipeline Aggregation)。简单而言就是让上一步的聚合结果成为下一个聚合的输入，这就是管道。</p>\\n</blockquote>\\n<h2>1. 如何理解pipeline聚合</h2>\\n<blockquote>\\n<p>如何理解管道聚合呢？最重要的是要站在设计者角度看这个功能的要实现的目的：让上一步的聚合结果成为下一个聚合的输入，这就是管道。</p>\\n</blockquote>\\n<h3>1.1 管道机制的常见场景</h3>","autoDesc":true}');export{t as comp,c as data};
