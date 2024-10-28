import{_ as a,c as n,a as B,o as l}from"./app-BQBjlK2G.js";const i={};function p(r,s){return l(),n("div",null,s[0]||(s[0]=[B(`<h1 id="消息中心数据库设计" tabindex="-1"><a class="header-anchor" href="#消息中心数据库设计"><span>消息中心数据库设计</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>消息中心是大部分系统都有的功能，如何设计一个合理的消息系统呢？</p><p>需求：</p><ul><li>每个用户收到消息都应该知道，该消息的已读未读状态</li></ul><h2 id="_2-数据库设计" tabindex="-1"><a class="header-anchor" href="#_2-数据库设计"><span>2. 数据库设计</span></a></h2><h3 id="_2-1-消息表" tabindex="-1"><a class="header-anchor" href="#_2-1-消息表"><span>2.1 消息表</span></a></h3><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> TABLE</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> T_SYS_NOTIFY</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    ID </span><span style="color:#C678DD;--shiki-dark:#C678DD;">BIGINT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">19</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NOT NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> AUTO_INCREMENT  COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;主键&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ,</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    TYPE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> INT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)    COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;操作类型，1 系统通知，2，用户消息&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    TITLE </span><span style="color:#C678DD;--shiki-dark:#C678DD;">VARCHAR</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">64</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)    COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;标题&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    CONTENT </span><span style="color:#C678DD;--shiki-dark:#C678DD;">VARCHAR</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">512</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)    COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;通知内容&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    CREATE_BY </span><span style="color:#C678DD;--shiki-dark:#C678DD;">BIGINT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">19</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)    COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;创建人&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    CREATE_TIME </span><span style="color:#C678DD;--shiki-dark:#C678DD;">DATETIME</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;创建时间&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    REMARK </span><span style="color:#C678DD;--shiki-dark:#C678DD;">VARCHAR</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">64</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)    COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;备注&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ,</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    PRIMARY KEY</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (ID)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) COMMENT </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;系统消息表 &#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>基础的消息表如上</p><h4 id="_2-1-1-消息表补充" tabindex="-1"><a class="header-anchor" href="#_2-1-1-消息表补充"><span>2.1.1 消息表补充</span></a></h4><p>如果需要记录</p><ul><li><p>该条提醒<strong>所关联的对象</strong></p></li><li><p>该条提醒<strong>所关联的动作</strong></p></li></ul><p>例如</p><ul><li>小明喜欢了文章， <ul><li>喜欢是：action</li><li>那篇文章：target，targetType</li></ul></li></ul><p>则需要新增<code>target</code>、<code>targetType</code>、<code>action</code>字段。</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">ALTER</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> TABLE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> T_SYS_NOTIFY </span><span style="color:#C678DD;--shiki-dark:#C678DD;">ADD</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COLUMN </span><span style="color:#C678DD;--shiki-dark:#C678DD;">target</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> VARCHAR</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">32</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)     COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;目标的ID&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> AFTER</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> CONTENT;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">ALTER</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> TABLE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> T_SYS_NOTIFY </span><span style="color:#C678DD;--shiki-dark:#C678DD;">ADD</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COLUMN targetType </span><span style="color:#C678DD;--shiki-dark:#C678DD;">VARCHAR</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">32</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)     COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;目标的类型&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> AFTER</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> target</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">ALTER</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> TABLE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> T_SYS_NOTIFY </span><span style="color:#C678DD;--shiki-dark:#C678DD;">ADD</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> COLUMN </span><span style="color:#C678DD;--shiki-dark:#C678DD;">action</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> VARCHAR</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">32</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)     COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;提醒信息的动作类型&#39;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> AFTER</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> targetType;</span></span></code></pre></div><h3 id="_2-2-用户消息表" tabindex="-1"><a class="header-anchor" href="#_2-2-用户消息表"><span>2.2 用户消息表</span></a></h3><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">CREATE</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> TABLE</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> T_SYS_USER_NOTIFY</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    ID </span><span style="color:#C678DD;--shiki-dark:#C678DD;">BIGINT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">19</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NOT NULL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> AUTO_INCREMENT  COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;主键&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    NOTIFY_ID </span><span style="color:#C678DD;--shiki-dark:#C678DD;">BIGINT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">19</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)    COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;通知id&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    USER_ID </span><span style="color:#C678DD;--shiki-dark:#C678DD;">BIGINT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">19</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)    COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;用户id&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    IS_READ </span><span style="color:#C678DD;--shiki-dark:#C678DD;">INT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)    COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;是否已读&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    CREATE_TIME </span><span style="color:#C678DD;--shiki-dark:#C678DD;">DATETIME</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    COMMENT </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;创建时间&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ,</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    PRIMARY KEY</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (ID)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) COMMENT </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;用户消息表 &#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.jianshu.com/p/6bf8166b291c" target="_blank" rel="noopener noreferrer">消息系统设计与实现「下篇」</a></p>`,20)]))}const e=a(i,[["render",p],["__file","message-system-db-design.html.vue"]]),k=JSON.parse(`{"path":"/posts/Architect/messagesystem/message-system-db-design.html","title":"消息中心数据库设计","lang":"zh-CN","frontmatter":{"description":"消息中心数据库设计 1. 背景 消息中心是大部分系统都有的功能，如何设计一个合理的消息系统呢？ 需求： 每个用户收到消息都应该知道，该消息的已读未读状态 2. 数据库设计 2.1 消息表 基础的消息表如上 2.1.1 消息表补充 如果需要记录 该条提醒所关联的对象 该条提醒所关联的动作 例如 小明喜欢了文章， 喜欢是：action 那篇文章：targe...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Architect/messagesystem/message-system-db-design.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"消息中心数据库设计"}],["meta",{"property":"og:description","content":"消息中心数据库设计 1. 背景 消息中心是大部分系统都有的功能，如何设计一个合理的消息系统呢？ 需求： 每个用户收到消息都应该知道，该消息的已读未读状态 2. 数据库设计 2.1 消息表 基础的消息表如上 2.1.1 消息表补充 如果需要记录 该条提醒所关联的对象 该条提醒所关联的动作 例如 小明喜欢了文章， 喜欢是：action 那篇文章：targe..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"消息中心数据库设计\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 数据库设计","slug":"_2-数据库设计","link":"#_2-数据库设计","children":[{"level":3,"title":"2.1 消息表","slug":"_2-1-消息表","link":"#_2-1-消息表","children":[]},{"level":3,"title":"2.2 用户消息表","slug":"_2-2-用户消息表","link":"#_2-2-用户消息表","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.15,"words":345},"filePathRelative":"posts/Architect/messagesystem/message-system-db-design.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>消息中心是大部分系统都有的功能，如何设计一个合理的消息系统呢？</p>\\n<p>需求：</p>\\n<ul>\\n<li>每个用户收到消息都应该知道，该消息的已读未读状态</li>\\n</ul>\\n<h2>2. 数据库设计</h2>\\n<h3>2.1 消息表</h3>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">CREATE</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> TABLE</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> T_SYS_NOTIFY</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    ID </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">BIGINT</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">19</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">NOT NULL</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> AUTO_INCREMENT  COMMENT </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'主键'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> ,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">    TYPE</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\"> INT</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">10</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)    COMMENT </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'操作类型，1 系统通知，2，用户消息'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> ,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    TITLE </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">VARCHAR</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">64</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)    COMMENT </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'标题'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> ,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    CONTENT </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">VARCHAR</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">512</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)    COMMENT </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'通知内容'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> ,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    CREATE_BY </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">BIGINT</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">19</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)    COMMENT </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'创建人'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> ,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    CREATE_TIME </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">DATETIME</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    COMMENT </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'创建时间'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> ,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    REMARK </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">VARCHAR</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">64</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">)    COMMENT </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">'备注'</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> ,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">    PRIMARY KEY</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (ID)</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) COMMENT </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> '系统消息表 '</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span></code></pre>\\n</div>","autoDesc":true}`);export{e as comp,k as data};
