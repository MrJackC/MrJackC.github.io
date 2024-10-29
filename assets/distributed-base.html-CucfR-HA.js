import{_ as e,c as a,a as n,o}from"./app-DEK5G3U7.js";const i={};function s(r,t){return o(),a("div",null,t[0]||(t[0]=[n('<h1 id="分布式理论-base" tabindex="-1"><a class="header-anchor" href="#分布式理论-base"><span>分布式理论-BASE</span></a></h1><blockquote><p>BASE是“Basically Available, Soft state, Eventually consistent(基本可用、软状态、最终一致性)”的首字母缩写。其中的软状态和最终一致性这两种技巧擅于对付存在分区的场合，并因此提高了可用性</p></blockquote><h2 id="_1-什么是base" tabindex="-1"><a class="header-anchor" href="#_1-什么是base"><span>1. 什么是BASE</span></a></h2><blockquote><p>eBay 的架构师 Dan Pritchett 源于对大规模分布式系统的实践总结，在 ACM 上发表文章提出 BASE 理论，BASE 理论是对 CAP 理论的延伸，<strong>核心思想是即使无法做到强一致性（Strong Consistency，CAP 的一致性就是强一致性），但应用可以采用适合的方式达到最终一致性（Eventual Consitency）。</strong></p></blockquote><ol><li><strong>Basically Available</strong>（基本可用）分布式系统在出现不可预知故障的时候，允许损失部分可用性</li><li><strong>Soft state</strong>（软状态）软状态也称为弱状态，和硬状态相对，是指允许系统中的数据存在中间状态，并认为该中间状态的存在不会影响系统的整体可用性，即允许系统在不同节点的数据副本之间进行数据同步的过程存在延时。</li><li><strong>Eventually consistent</strong>（最终一致性）最终一致性强调的是系统中所有的数据副本，在经过一段时间的同步后，最终能够达到一个一致的状态。因此，最终一致性的本质是需要系统保证最终数据能够达到一致，而不需要实时保证系统数据的强一致性</li></ol><h2 id="_2-cap-与-base-关系" tabindex="-1"><a class="header-anchor" href="#_2-cap-与-base-关系"><span>2. CAP 与 BASE 关系</span></a></h2><p>BASE是对CAP中一致性和可用性权衡的结果，其来源于对大规模互联网系统分布式实践的结论，是基于CAP定理逐步演化而来的，其核心思想是即使无法做到强一致性（Strong consistency），更具体地说，是对 CAP 中 AP 方案的一个补充。其基本思路就是：通过业务，牺牲强一致性而获得可用性，并允许数据在一段时间内是不一致的，但是最终达到一致性状态。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220617214817618.png" alt="image-20220617214817618" tabindex="0" loading="lazy"><figcaption>image-20220617214817618</figcaption></figure><h2 id="_3-cap-与-acid-关系" tabindex="-1"><a class="header-anchor" href="#_3-cap-与-acid-关系"><span>3. CAP 与 ACID 关系</span></a></h2><p>ACID 是传统数据库常用的设计理念，追求强一致性模型。BASE 支持的是大型分布式系统，提出通过牺牲强一致性获得高可用性。</p><p>ACID 和 BASE 代表了两种截然相反的设计哲学，在分布式系统设计的场景中，系统组件对一致性要求是不同的，因此 ACID 和 BASE 又会结合使用。</p>',11)]))}const l=e(i,[["render",s],["__file","distributed-base.html.vue"]]),p=JSON.parse('{"path":"/posts/Architect/distributed/theory/distributed-base.html","title":"分布式理论-BASE","lang":"zh-CN","frontmatter":{"order":30,"category":["架构"],"description":"分布式理论-BASE BASE是“Basically Available, Soft state, Eventually consistent(基本可用、软状态、最终一致性)”的首字母缩写。其中的软状态和最终一致性这两种技巧擅于对付存在分区的场合，并因此提高了可用性 1. 什么是BASE eBay 的架构师 Dan Pritchett 源于对大规模分布...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Architect/distributed/theory/distributed-base.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"分布式理论-BASE"}],["meta",{"property":"og:description","content":"分布式理论-BASE BASE是“Basically Available, Soft state, Eventually consistent(基本可用、软状态、最终一致性)”的首字母缩写。其中的软状态和最终一致性这两种技巧擅于对付存在分区的场合，并因此提高了可用性 1. 什么是BASE eBay 的架构师 Dan Pritchett 源于对大规模分布..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220617214817618.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式理论-BASE\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-20220617214817618.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是BASE","slug":"_1-什么是base","link":"#_1-什么是base","children":[]},{"level":2,"title":"2. CAP 与 BASE 关系","slug":"_2-cap-与-base-关系","link":"#_2-cap-与-base-关系","children":[]},{"level":2,"title":"3. CAP 与 ACID 关系","slug":"_3-cap-与-acid-关系","link":"#_3-cap-与-acid-关系","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.16,"words":649},"filePathRelative":"posts/Architect/distributed/theory/distributed-base.md","localizedDate":"2024年10月28日","excerpt":"\\n<blockquote>\\n<p>BASE是“Basically Available, Soft state, Eventually consistent(基本可用、软状态、最终一致性)”的首字母缩写。其中的软状态和最终一致性这两种技巧擅于对付存在分区的场合，并因此提高了可用性</p>\\n</blockquote>\\n<h2>1. 什么是BASE</h2>\\n<blockquote>\\n<p>eBay 的架构师 Dan Pritchett 源于对大规模分布式系统的实践总结，在 ACM 上发表文章提出 BASE 理论，BASE 理论是对 CAP 理论的延伸，<strong>核心思想是即使无法做到强一致性（Strong Consistency，CAP 的一致性就是强一致性），但应用可以采用适合的方式达到最终一致性（Eventual Consitency）。</strong></p>\\n</blockquote>","autoDesc":true}');export{l as comp,p as data};
