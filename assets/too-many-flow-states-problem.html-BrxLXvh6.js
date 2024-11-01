import{_ as l,c as t,a as i,o}from"./app-tJW29Kmg.js";const n={};function a(s,e){return o(),t("div",null,e[0]||(e[0]=[i('<h1 id="多角色业务流程流转状态问题" tabindex="-1"><a class="header-anchor" href="#多角色业务流程流转状态问题"><span>多角色业务流程流转状态问题</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>之前处理过这样一个业务需求</p><blockquote><p>用户可以新建方案，方案下可以有多个子例。每个子例中会有状态流转。子例中的状态流转到某一环节方案才可以统一下发。到方案的下一个环节</p></blockquote><p>例如：</p><ul><li><p>方案的状态：创建中，流程A，流程B，流程C，已完成</p></li><li><p>子例：</p><ul><li>流程A10,A21,A22,A30</li><li>流程B10,B21,B22,B30</li><li>流程C10,C20,C30</li></ul><p>注意点：</p><ul><li>流程要全部进入到A30才能下发到B10</li><li>B10流转的时候也不一定直接进入B21,他还需要判断自身情况，决定流转到B21,还是B22</li><li>C10流转的时候也不一定直接进入B20,他还需要判断自身情况，决定流转到B20还是B30</li><li>流程A10,A21等流程是由<strong>多个角色操作</strong>，在每个角色在的状态名又不一致</li></ul></li></ul><h2 id="_2-遇到的问题" tabindex="-1"><a class="header-anchor" href="#_2-遇到的问题"><span>2. 遇到的问题</span></a></h2><p>因为我用一个状态码，在做业务的流转问题时，我面临以下问题</p><ol><li>在处理状态流转时需要判断特别多的情况</li><li>一个状态码只对应一个流程，流程是否在待开始，进行中，已完成也并不明确</li><li>因为涉及不同角色，显示的文案也不同。我需要校验很多情况</li><li>在与新人沟通状态流转时，特别的晕</li></ol><h2 id="_3-解决" tabindex="-1"><a class="header-anchor" href="#_3-解决"><span>3.解决</span></a></h2><ol><li>按角色细分状态码 <ol><li>角色A：A10、A21,A30。。。。</li><li>角色B: A10,A22，A30。。。。</li></ol></li></ol>',11)]))}const r=l(n,[["render",a],["__file","too-many-flow-states-problem.html.vue"]]),c=JSON.parse('{"path":"/posts/Daily-Thoughts/deepImpression/too-many-flow-states-problem.html","title":"多角色业务流程流转状态问题","lang":"zh-CN","frontmatter":{"aliases":"多角色业务流程流转状态问题","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:53","updated":"2024-03-13 14:16","description":"多角色业务流程流转状态问题 1. 背景 之前处理过这样一个业务需求 用户可以新建方案，方案下可以有多个子例。每个子例中会有状态流转。子例中的状态流转到某一环节方案才可以统一下发。到方案的下一个环节 例如： 方案的状态：创建中，流程A，流程B，流程C，已完成 子例： 流程A10,A21,A22,A30 流程B10,B21,B22,B30 流程C10,C2...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Daily-Thoughts/deepImpression/too-many-flow-states-problem.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"多角色业务流程流转状态问题"}],["meta",{"property":"og:description","content":"多角色业务流程流转状态问题 1. 背景 之前处理过这样一个业务需求 用户可以新建方案，方案下可以有多个子例。每个子例中会有状态流转。子例中的状态流转到某一环节方案才可以统一下发。到方案的下一个环节 例如： 方案的状态：创建中，流程A，流程B，流程C，已完成 子例： 流程A10,A21,A22,A30 流程B10,B21,B22,B30 流程C10,C2..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多角色业务流程流转状态问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 遇到的问题","slug":"_2-遇到的问题","link":"#_2-遇到的问题","children":[]},{"level":2,"title":"3.解决","slug":"_3-解决","link":"#_3-解决","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.42,"words":425},"filePathRelative":"posts/Daily-Thoughts/deepImpression/too-many-flow-states-problem.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>之前处理过这样一个业务需求</p>\\n<blockquote>\\n<p>用户可以新建方案，方案下可以有多个子例。每个子例中会有状态流转。子例中的状态流转到某一环节方案才可以统一下发。到方案的下一个环节</p>\\n</blockquote>\\n<p>例如：</p>\\n<ul>\\n<li>\\n<p>方案的状态：创建中，流程A，流程B，流程C，已完成</p>\\n</li>\\n<li>\\n<p>子例：</p>\\n<ul>\\n<li>流程A10,A21,A22,A30</li>\\n<li>流程B10,B21,B22,B30</li>\\n<li>流程C10,C20,C30</li>\\n</ul>\\n<p>注意点：</p>\\n<ul>\\n<li>流程要全部进入到A30才能下发到B10</li>\\n<li>B10流转的时候也不一定直接进入B21,他还需要判断自身情况，决定流转到B21,还是B22</li>\\n<li>C10流转的时候也不一定直接进入B20,他还需要判断自身情况，决定流转到B20还是B30</li>\\n<li>流程A10,A21等流程是由<strong>多个角色操作</strong>，在每个角色在的状态名又不一致</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{r as comp,c as data};
