import{_ as a,c as i,a as n,o as l}from"./app-CpAF2rca.js";const e={};function r(o,s){return l(),i("div",null,s[0]||(s[0]=[n(`<h1 id="redis布隆过滤器" tabindex="-1"><a class="header-anchor" href="#redis布隆过滤器"><span>Redis布隆过滤器</span></a></h1><h2 id="_1-使用场景" tabindex="-1"><a class="header-anchor" href="#_1-使用场景"><span>1. 使用场景</span></a></h2><p>比如有如下几个需求：</p><ol><li><p>原本有10亿个号码，现在又来了10万个号码，要快速准确判断这10万个号码是否在10亿个号码库中？</p><ul><li>解决办法一：将10亿个号码存入数据库中，进行数据库查询，准确性有了，但是速度会比较慢。</li><li>解决办法二：将10亿号码放入内存中，比如Redis缓存中，这里我们算一下占用内存大小：10亿*8字节=8GB，通过内存查询，准确性和速度都有了，但是大约8gb的内存空间，挺浪费内存空间的。</li></ul></li><li><p>接触过爬虫的，应该有这么一个需求，需要爬虫的网站千千万万，对于一个新的网站url，我们如何判断这个url我们是否已经爬过了？</p><p>解决办法还是上面的两种，很显然，都不太好。</p></li><li><p>同理还有垃圾邮箱的过滤。</p></li></ol><p>那么对于类似这种，大数据量集合，如何准确快速的判断某个数据是否在大数据量集合中，并且不占用内存，<strong>布隆过滤器</strong>应运而生了。</p><h2 id="_2-简介" tabindex="-1"><a class="header-anchor" href="#_2-简介"><span>2. 简介</span></a></h2><p>带着上面的几个疑问，我们来看看到底什么是布隆过滤器。</p><p><strong>布隆过滤器：一种数据结构，是由一串很长的二进制向量组成，可以将其看成一个二进制数组。既然是二进制，那么里面存放的不是0，就是1，但是初始默认值都是0。</strong></p><p>如下所示：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131026008.png" alt="image-20220628211038045" tabindex="0" loading="lazy"><figcaption>image-20220628211038045</figcaption></figure><h3 id="_2-1-添加数据" tabindex="-1"><a class="header-anchor" href="#_2-1-添加数据"><span>2.1 添加数据</span></a></h3><p>介绍概念的时候，我们说可以将布隆过滤器看成一个容器，那么如何向布隆过滤器中添加一个数据呢？</p><p>如下图所示：当要向布隆过滤器中添加一个元素key时，<strong>我们通过多个hash函数</strong>，算出一个值，然后将这个值所在的方格置为1。</p><p>比如，下图hash1(key)=1，那么在第2个格子将0变为1（数组是从0开始计数的），hash2(key)=7，那么将第8个格子置位1，依次类推。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131026072.png" alt="image-20220628211153829" tabindex="0" loading="lazy"><figcaption>image-20220628211153829</figcaption></figure><h3 id="_2-2-判断数据是否存在" tabindex="-1"><a class="header-anchor" href="#_2-2-判断数据是否存在"><span><strong>2.2 判断数据是否存在？</strong></span></a></h3><p>知道了如何向布隆过滤器中添加一个数据，那么新来一个数据，我们如何判断其是否存在于这个布隆过滤器中呢？</p><p>很简单，我们只需要将这个新的数据通过上面自定义的几个哈希函数，分别算出各个值，然后看其对应的地方是否都是1，如果存在一个不是1的情况，那么我们可以说，该新数据一定不存在于这个布隆过滤器中。</p><p>反过来说，如果通过哈希函数算出来的值，对应的地方都是1，那么我们能够肯定的得出：这个数据一定存在于这个布隆过滤器中吗？</p><p>答案是否定的，因为多个不同的数据通过hash函数算出来的结果是会有重复的，所以会存在某个位置是别的数据通过hash函数置为的1。</p><p>我们可以得到一个结论：<strong>布隆过滤器可以判断某个数据一定不存在，但是无法判断一定存在</strong>。</p><blockquote><p><strong>布隆过滤器可以判断某个数据一定不存在，但是无法判断一定存在</strong>。</p></blockquote><h3 id="_2-3-布隆过滤器优缺点" tabindex="-1"><a class="header-anchor" href="#_2-3-布隆过滤器优缺点"><span>2.3 布隆过滤器优缺点</span></a></h3><ul><li><p>优点：</p><p>优点很明显，二进制组成的数组，占用内存极少，并且插入和查询速度都足够快。</p></li><li><p>缺点：</p><p>随着数据的增加，误判率会增加；还有无法判断数据一定存在；</p><p>另外还有一个重要缺点，无法删除数据。</p></li></ul><h2 id="_3-redis实现布隆过滤器" tabindex="-1"><a class="header-anchor" href="#_3-redis实现布隆过滤器"><span>3. Redis实现布隆过滤器</span></a></h2><h3 id="_3-1-bitmaps" tabindex="-1"><a class="header-anchor" href="#_3-1-bitmaps"><span>3.1 bitmaps</span></a></h3><p>我们知道计算机是以二进制位作为底层存储的基础单位，一个字节等于8位。</p><p>比如“big”字符串是由三个字符组成的，这三个字符对应的ASCII码分为是98、105、103，对应的二进制存储如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131026106.png" alt="image-20220628211504219" tabindex="0" loading="lazy"><figcaption>image-20220628211504219</figcaption></figure><p>在Redis中，Bitmaps 提供了一套命令用来操作类似上面字符串中的每一个位。</p><p><strong>一、设置值</strong></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>setbit key offset value</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131026142.png" alt="image-20220628211525940" tabindex="0" loading="lazy"><figcaption>image-20220628211525940</figcaption></figure><p>我们知道&quot;b&quot;的二进制表示为0110 0010，我们将第7位（从0开始）设置为1，那0110 0011 表示的就是字符“c”，所以最后的字符 “big”变成了“cig”。</p><p><strong>二、获取值</strong></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>gitbit key offset</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131026173.png" alt="image-20220628211547391" tabindex="0" loading="lazy"><figcaption>image-20220628211547391</figcaption></figure><p><strong>三、获取位图指定范围值为1的个数</strong></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>bitcount key [start end]</span></span></code></pre></div><p>如果不指定，那就是获取全部值为1的个数。</p><p>注意：start和end指定的是<strong>字节的个数</strong>，而不是位数组下标。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131026209.png" alt="image-20220628211604556" tabindex="0" loading="lazy"><figcaption>image-20220628211604556</figcaption></figure><h3 id="_3-2-redisson" tabindex="-1"><a class="header-anchor" href="#_3-2-redisson"><span>3.2 Redisson</span></a></h3><p>Redis 实现布隆过滤器的底层就是通过 bitmap 这种数据结构，至于如何实现，这里就不重复造轮子了，介绍业界比较好用的一个客户端工具——Redisson。</p><p>Redisson 是用于在 Java 程序中操作 Redis 的库，利用Redisson 我们可以在程序中轻松地使用 Redis。</p><p>下面我们就通过 Redisson 来构造布隆过滤器。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">package</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> com.ys.rediscluster.bloomfilter.redisson</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> org.redisson.Redisson</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> org.redisson.api.RBloomFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> org.redisson.api.RedissonClient</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> org.redisson.config.Config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> RedissonBloomFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        Config</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> config</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> Config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">useSingleServer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setAddress</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;redis://192.168.14.104:6379&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">useSingleServer</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setPassword</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;123&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //构造Redisson</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        RedissonClient</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> redisson</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Redisson</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">create</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(config);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        RBloomFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#E06C75;--shiki-dark:#E06C75;">bloomFilter</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> redisson</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getBloomFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;phoneList&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //初始化布隆过滤器：预计元素为100000000L,误差率为3%</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        bloomFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tryInit</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">100000000L</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0.03</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //将号码10086插入到布隆过滤器中</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        bloomFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">add</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;10086&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //判断下面号码是否在布隆过滤器中</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">bloomFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">contains</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;123456&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">));</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//false</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">bloomFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">contains</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;10086&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">));</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//true</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是单节点的Redis实现方式，如果数据量比较大，期望的误差率又很低，那单节点所提供的内存是无法满足的，这时候可以使用分布式布隆过滤器，同样也可以用 Redisson 来实现，这里我就不做代码演示了，大家有兴趣可以试试。</p><h2 id="_4-guava-工具" tabindex="-1"><a class="header-anchor" href="#_4-guava-工具"><span>4. guava 工具</span></a></h2><p>最后提一下不用Redis如何来实现布隆过滤器。</p><p>guava 工具包，这是谷歌公司提供的，里面也提供了布隆过滤器的实现。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">package</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> com.ys.rediscluster.bloomfilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> com.google.common.base.Charsets</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> com.google.common.hash.BloomFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> com.google.common.hash.Funnel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> com.google.common.hash.Funnels</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> GuavaBloomFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> main</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        BloomFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#E06C75;--shiki-dark:#E06C75;">bloomFilter</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> BloomFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">create</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Funnels</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">stringFunnel</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Charsets</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">UTF_8</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">),</span><span style="color:#D19A66;--shiki-dark:#D19A66;">100000</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0.01</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        bloomFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">put</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;10086&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">bloomFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mightContain</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;123456&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">bloomFilter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mightContain</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;10086&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.cnblogs.com/ysocean/p/12594982.html" target="_blank" rel="noopener noreferrer">Redis详解（十三）------ Redis布隆过滤器</a></p>`,54)]))}const t=a(e,[["render",r],["__file","redis-y-action-bloom.html.vue"]]),B=JSON.parse('{"path":"/posts/Redis/redis-y-action-bloom.html","title":"Redis布隆过滤器","lang":"zh-CN","frontmatter":{"aliases":"Redis布隆过滤器","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:26","description":"Redis布隆过滤器 1. 使用场景 比如有如下几个需求： 原本有10亿个号码，现在又来了10万个号码，要快速准确判断这10万个号码是否在10亿个号码库中？ 解决办法一：将10亿个号码存入数据库中，进行数据库查询，准确性有了，但是速度会比较慢。 解决办法二：将10亿号码放入内存中，比如Redis缓存中，这里我们算一下占用内存大小：10亿*8字节=8GB...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Redis/redis-y-action-bloom.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis布隆过滤器"}],["meta",{"property":"og:description","content":"Redis布隆过滤器 1. 使用场景 比如有如下几个需求： 原本有10亿个号码，现在又来了10万个号码，要快速准确判断这10万个号码是否在10亿个号码库中？ 解决办法一：将10亿个号码存入数据库中，进行数据库查询，准确性有了，但是速度会比较慢。 解决办法二：将10亿号码放入内存中，比如Redis缓存中，这里我们算一下占用内存大小：10亿*8字节=8GB..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131026008.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis布隆过滤器\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131026008.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131026072.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131026106.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131026142.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131026173.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131026209.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 使用场景","slug":"_1-使用场景","link":"#_1-使用场景","children":[]},{"level":2,"title":"2. 简介","slug":"_2-简介","link":"#_2-简介","children":[{"level":3,"title":"2.1 添加数据","slug":"_2-1-添加数据","link":"#_2-1-添加数据","children":[]},{"level":3,"title":"2.2 判断数据是否存在？","slug":"_2-2-判断数据是否存在","link":"#_2-2-判断数据是否存在","children":[]},{"level":3,"title":"2.3 布隆过滤器优缺点","slug":"_2-3-布隆过滤器优缺点","link":"#_2-3-布隆过滤器优缺点","children":[]}]},{"level":2,"title":"3. Redis实现布隆过滤器","slug":"_3-redis实现布隆过滤器","link":"#_3-redis实现布隆过滤器","children":[{"level":3,"title":"3.1 bitmaps","slug":"_3-1-bitmaps","link":"#_3-1-bitmaps","children":[]},{"level":3,"title":"3.2 Redisson","slug":"_3-2-redisson","link":"#_3-2-redisson","children":[]}]},{"level":2,"title":"4. guava 工具","slug":"_4-guava-工具","link":"#_4-guava-工具","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":5.48,"words":1643},"filePathRelative":"posts/Redis/redis-y-action-bloom.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 使用场景</h2>\\n<p>比如有如下几个需求：</p>\\n<ol>\\n<li>\\n<p>原本有10亿个号码，现在又来了10万个号码，要快速准确判断这10万个号码是否在10亿个号码库中？</p>\\n<ul>\\n<li>解决办法一：将10亿个号码存入数据库中，进行数据库查询，准确性有了，但是速度会比较慢。</li>\\n<li>解决办法二：将10亿号码放入内存中，比如Redis缓存中，这里我们算一下占用内存大小：10亿*8字节=8GB，通过内存查询，准确性和速度都有了，但是大约8gb的内存空间，挺浪费内存空间的。</li>\\n</ul>\\n</li>\\n<li>\\n<p>接触过爬虫的，应该有这么一个需求，需要爬虫的网站千千万万，对于一个新的网站url，我们如何判断这个url我们是否已经爬过了？</p>\\n<p>解决办法还是上面的两种，很显然，都不太好。</p>\\n</li>\\n<li>\\n<p>同理还有垃圾邮箱的过滤。</p>\\n</li>\\n</ol>","autoDesc":true}');export{t as comp,B as data};
