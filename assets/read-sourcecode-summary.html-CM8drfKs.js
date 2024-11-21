import{_ as a,c as t,a as r,o as n}from"./app-CpAF2rca.js";const s={};function o(l,e){return n(),t("div",null,e[0]||(e[0]=[r('<h1 id="阅读源码总结" tabindex="-1"><a class="header-anchor" href="#阅读源码总结"><span>阅读源码总结</span></a></h1><h2 id="_1-为什么要阅读源码" tabindex="-1"><a class="header-anchor" href="#_1-为什么要阅读源码"><span>1. 为什么要阅读源码？</span></a></h2><h3 id="_1-1-在通用型基础技术中提高技术能力" tabindex="-1"><a class="header-anchor" href="#_1-1-在通用型基础技术中提高技术能力"><span>1.1 <strong>在通用型基础技术中提高技术能力</strong></span></a></h3><p>在 JAVA 领域中包含 JAVA 集合、Java并发(JUC)等， 它们是项目中使用的高频技术，在各种复杂的场景中选用合适的数据结构、线程并发模型，合理控制锁粒度等都能显著提高应用程序的可用性、健壮性</p><h3 id="_1-2-从优秀的源码中学习设计和编码" tabindex="-1"><a class="header-anchor" href="#_1-2-从优秀的源码中学习设计和编码"><span>1.2 <strong>从优秀的源码中学习设计和编码</strong></span></a></h3><p>学习编程的过程其实就是一个模仿的过程， 优秀的源码都是大师级作品，极具营养，可以看到大师们是如何抽象接口的，如何应用SOLID原则的，还有很多非常有用的编程技巧。</p><p>例如JUnit是从模式开始构建系统， 其中你可以看到大量的设计模式的应用，这些都是活生生的案例，比干巴巴地看那些设计模式理论，或者简单的例子不知道好到哪里去了。</p><h2 id="_2-如何阅读源码" tabindex="-1"><a class="header-anchor" href="#_2-如何阅读源码"><span>2. <strong>如何阅读源码</strong></span></a></h2><ol><li>了解这款软件的使用场景、以及架构设计中将承担的责任。</li><li>寻找官方文档，从整体上把握这款软件的设计理念。</li><li>搭建自己的开发调试环境，运行官方提供Demo示例，为后续深入研究打下基础。</li><li>先主干流程再分支流程，注意切割，逐个击破。</li></ol><h2 id="_3-阅读源码很容易放弃-怎么办" tabindex="-1"><a class="header-anchor" href="#_3-阅读源码很容易放弃-怎么办"><span>3. <strong>阅读源码很容易放弃，怎么办？</strong></span></a></h2><p>1、向“度娘”求救</p><p>在阅读源码时可以将看不懂的代码直接COPY一小段到百度上去搜索，可能会有大牛已经对这些代码做过解读，能起到指点作用。</p><p>当时经过我的搜索，发现Netty的内存分配算法并不是首创，而是对 jemalloc 算法的实现，通过查阅相关的技术文档，可以从整体上理解Netty的内存分配算法。</p><p>2、Debug Netty追求极致的性能，采用了大量的位运算，由于平时工作中很少会使用位运算，看起来比较吃力，为了弥补这方面的不足，使用DEBUG模式，结合运行时数据，去理解位运算，更容易开窍。</p><h2 id="_4-源码阅读的三层境界" tabindex="-1"><a class="header-anchor" href="#_4-源码阅读的三层境界"><span>4. <strong>源码阅读的三层境界</strong></span></a></h2><hr><h4 id="_4-1-初级-记流水账" tabindex="-1"><a class="header-anchor" href="#_4-1-初级-记流水账"><span><strong>4.1 初级：记流水账</strong></span></a></h4><p>我初期的源码阅读文章基本上是记流水账，例如对源码一样一行加注释，只关注底层实现细节，但并未形成更高层次认知，对其设计理念没有提炼与深度领悟。</p><h4 id="_4-2-中级-能提问、思考、提炼" tabindex="-1"><a class="header-anchor" href="#_4-2-中级-能提问、思考、提炼"><span><strong>4.2 中级：能提问、思考、提炼</strong></span></a></h4><p>随着技术类文章的持续分享， 我认识了很多大牛，发现和他们交流的时候，发现他们一开始并不会说细节，而是讲设计理念。</p><p>这就要求我们在阅读源码的时候多思考，并反问自己如果自己实现的话该如何着手，如何设计，带着疑问去研究源码。通过对比，思考，会对其背后的理念有了更深刻的理解。</p><h4 id="_4-3-高级-思考、质疑、验证" tabindex="-1"><a class="header-anchor" href="#_4-3-高级-思考、质疑、验证"><span><strong>4.3 高级：思考、质疑、验证</strong></span></a></h4><p>不管是哪个开源框架，都会存在BUG或者实现并不合理的地方，如果大家在阅读源码的时候能够深入思考， 合理质疑，并能通过验证证明自己的观点，然后与官方取得联系，交流，共同促进社区的发展，说明我们的能力、思考得到了极大的提升。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://cloud.tencent.com/developer/article/1772680" target="_blank" rel="noopener noreferrer">优秀工程师必备技能之如何高效阅读源码</a></p>',25)]))}const p=a(s,[["render",o],["__file","read-sourcecode-summary.html.vue"]]),h=JSON.parse('{"path":"/posts/Daily-Thoughts/summary/read-sourcecode-summary.html","title":"阅读源码总结","lang":"zh-CN","frontmatter":{"aliases":"阅读源码总结","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:53","updated":"2024-05-30 17:36","description":"阅读源码总结 1. 为什么要阅读源码？ 1.1 在通用型基础技术中提高技术能力 在 JAVA 领域中包含 JAVA 集合、Java并发(JUC)等， 它们是项目中使用的高频技术，在各种复杂的场景中选用合适的数据结构、线程并发模型，合理控制锁粒度等都能显著提高应用程序的可用性、健壮性 1.2 从优秀的源码中学习设计和编码 学习编程的过程其实就是一个模仿的...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Daily-Thoughts/summary/read-sourcecode-summary.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"阅读源码总结"}],["meta",{"property":"og:description","content":"阅读源码总结 1. 为什么要阅读源码？ 1.1 在通用型基础技术中提高技术能力 在 JAVA 领域中包含 JAVA 集合、Java并发(JUC)等， 它们是项目中使用的高频技术，在各种复杂的场景中选用合适的数据结构、线程并发模型，合理控制锁粒度等都能显著提高应用程序的可用性、健壮性 1.2 从优秀的源码中学习设计和编码 学习编程的过程其实就是一个模仿的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"阅读源码总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 为什么要阅读源码？","slug":"_1-为什么要阅读源码","link":"#_1-为什么要阅读源码","children":[{"level":3,"title":"1.1 在通用型基础技术中提高技术能力","slug":"_1-1-在通用型基础技术中提高技术能力","link":"#_1-1-在通用型基础技术中提高技术能力","children":[]},{"level":3,"title":"1.2 从优秀的源码中学习设计和编码","slug":"_1-2-从优秀的源码中学习设计和编码","link":"#_1-2-从优秀的源码中学习设计和编码","children":[]}]},{"level":2,"title":"2. 如何阅读源码","slug":"_2-如何阅读源码","link":"#_2-如何阅读源码","children":[]},{"level":2,"title":"3. 阅读源码很容易放弃，怎么办？","slug":"_3-阅读源码很容易放弃-怎么办","link":"#_3-阅读源码很容易放弃-怎么办","children":[]},{"level":2,"title":"4. 源码阅读的三层境界","slug":"_4-源码阅读的三层境界","link":"#_4-源码阅读的三层境界","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.12,"words":936},"filePathRelative":"posts/Daily-Thoughts/summary/read-sourcecode-summary.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 为什么要阅读源码？</h2>\\n<h3>1.1 <strong>在通用型基础技术中提高技术能力</strong></h3>\\n<p>在 JAVA 领域中包含 JAVA 集合、Java并发(JUC)等， 它们是项目中使用的高频技术，在各种复杂的场景中选用合适的数据结构、线程并发模型，合理控制锁粒度等都能显著提高应用程序的可用性、健壮性</p>\\n<h3>1.2 <strong>从优秀的源码中学习设计和编码</strong></h3>\\n<p>学习编程的过程其实就是一个模仿的过程， 优秀的源码都是大师级作品，极具营养，可以看到大师们是如何抽象接口的，如何应用SOLID原则的，还有很多非常有用的编程技巧。</p>","autoDesc":true}');export{p as comp,h as data};