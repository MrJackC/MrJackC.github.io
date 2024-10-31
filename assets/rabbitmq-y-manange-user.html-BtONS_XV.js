import{_ as a,c as e,a as r,o as n}from"./app-mWs04Xnh.js";const i={};function t(l,s){return n(),e("div",null,s[0]||(s[0]=[r(`<h1 id="rabbitmq管理-用户管理-user" tabindex="-1"><a class="header-anchor" href="#rabbitmq管理-用户管理-user"><span>RabbitMQ管理 - 用户管理：user</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>在 RabbitMQ 中，<strong>用户</strong> 是访问控制（Access Control）的基本单元，且用户可以跨越多个 vhost 授权。使用标准的用户名和密码来认证用户。</p><h2 id="_2-创建用户-add-user" tabindex="-1"><a class="header-anchor" href="#_2-创建用户-add-user"><span>2. 创建用户：add_user</span></a></h2><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rabbitmqctl</span><span style="color:#98C379;--shiki-dark:#98C379;"> add_user</span><span style="color:#98C379;--shiki-dark:#98C379;"> {username}</span><span style="color:#98C379;--shiki-dark:#98C379;"> {password}</span></span></code></pre></div><p>实践练习</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@study ~]# rabbitmqctl add_user test1 123456</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Creating</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;test1&quot;</span></span></code></pre></div><h2 id="_3-修改密码-change-password" tabindex="-1"><a class="header-anchor" href="#_3-修改密码-change-password"><span>3. 修改密码：change_password</span></a></h2><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rabbitmqctl</span><span style="color:#98C379;--shiki-dark:#98C379;"> change_password</span><span style="color:#98C379;--shiki-dark:#98C379;"> {username}</span><span style="color:#98C379;--shiki-dark:#98C379;"> {newpassword}</span></span></code></pre></div><p>实践练习</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@study ~]# rabbitmqctl change_password test1 1234567</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Changing</span><span style="color:#98C379;--shiki-dark:#98C379;"> password</span><span style="color:#98C379;--shiki-dark:#98C379;"> for</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;test1&quot;</span></span></code></pre></div><h2 id="_4-清除密码-clear-password" tabindex="-1"><a class="header-anchor" href="#_4-清除密码-clear-password"><span>4. 清除密码：clear_password</span></a></h2><p>清除密码后，该用户就不能使用密码登录了</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rabbitmqctl</span><span style="color:#98C379;--shiki-dark:#98C379;"> change_password</span><span style="color:#98C379;--shiki-dark:#98C379;"> {username}</span></span></code></pre></div><h2 id="_5-验证用户密码-authenticate-user" tabindex="-1"><a class="header-anchor" href="#_5-验证用户密码-authenticate-user"><span>5. 验证用户密码：authenticate_user</span></a></h2><p>可以验证用户密码是否匹配</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rabbitmqctl</span><span style="color:#98C379;--shiki-dark:#98C379;"> authenticate_user</span><span style="color:#98C379;--shiki-dark:#98C379;"> {username}</span><span style="color:#98C379;--shiki-dark:#98C379;"> {newpassword}</span></span></code></pre></div><p>实践练习</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 验证失败</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@study ~]# rabbitmqctl authenticate_user test1 123456</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Authenticating</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;test1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Error:</span><span style="color:#98C379;--shiki-dark:#98C379;"> failed</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> authenticate</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;test1&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 验证成</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@study ~]# rabbitmqctl authenticate_user test1 1234567</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Authenticating</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;test1&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Success</span></span></code></pre></div><h2 id="_6-用户列表-list-users" tabindex="-1"><a class="header-anchor" href="#_6-用户列表-list-users"><span>6. 用户列表：list_users</span></a></h2><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rabbitmqctl</span><span style="color:#98C379;--shiki-dark:#98C379;"> list_users</span></span></code></pre></div><p>实践练习</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@study ~]# rabbitmqctl list_users</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Listing</span><span style="color:#98C379;--shiki-dark:#98C379;"> users</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">test1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   []</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">admin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   [administrator]</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">guest</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   [administrator]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 可以看到有 3 个用户</span></span></code></pre></div><p>方括号中的是角色类型，有 5 种：</p><ul><li><p>none：无任何角色。新创建的为这种；怎么显示的是没有？</p></li><li><p>management：可以访问 web 管理页面（下一节讲解）</p></li><li><p>policymaker：</p><p>包含 management 的所有权限，并且可以管理 <strong>策略（Policy）</strong> 和 <strong>参数（Parameter）</strong>（下一章讲解）</p></li><li><p>monitoring：</p><p>包含 management 的所有权限，并且可以看到所有连接、信道及节点相关的信息</p></li><li><p>administrator：</p><p>最高权限，包含 monitoring 的所有权限，并且可以管理用户、虚拟主机、权限、策略、参数等。</p></li></ul><h2 id="_7-设置角色-set-user-tags" tabindex="-1"><a class="header-anchor" href="#_7-设置角色-set-user-tags"><span>7. 设置角色 set_user_tags</span></a></h2><p>可以给用户设置角色，设置角色之后，现有的角色会被删除。也就是以这次设置的角色为准</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rabbitmqctl</span><span style="color:#98C379;--shiki-dark:#98C379;"> set_user_tags</span><span style="color:#98C379;--shiki-dark:#98C379;"> {username}</span><span style="color:#98C379;--shiki-dark:#98C379;"> {tag</span><span style="color:#98C379;--shiki-dark:#98C379;"> ...}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tag</span><span style="color:#98C379;--shiki-dark:#98C379;"> ：表示要设置的角色，可以多个，空格隔开</span></span></code></pre></div><p>实践练习</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@study ~]# rabbitmqctl set_user_tags test1 management policymaker</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Setting</span><span style="color:#98C379;--shiki-dark:#98C379;"> tags</span><span style="color:#98C379;--shiki-dark:#98C379;"> for</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;test1&quot;</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [management,policymaker]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看用户，就看到了刚刚设置的角色</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@study ~]# rabbitmqctl list_users</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Listing</span><span style="color:#98C379;--shiki-dark:#98C379;"> users</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">test1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   [management, </span><span style="color:#98C379;--shiki-dark:#98C379;">policymaker]</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">admin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   [administrator]</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">guest</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   [administrator]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 不带 tag 就是清空角色</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@study ~]# rabbitmqctl set_user_tags test1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Setting</span><span style="color:#98C379;--shiki-dark:#98C379;"> tags</span><span style="color:#98C379;--shiki-dark:#98C379;"> for</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;test1&quot;</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> []</span></span></code></pre></div><h2 id="_8-删除用户-delete-user" tabindex="-1"><a class="header-anchor" href="#_8-删除用户-delete-user"><span>8. 删除用户：delete_user</span></a></h2><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rabbitmqctl</span><span style="color:#98C379;--shiki-dark:#98C379;"> delete_user</span><span style="color:#98C379;--shiki-dark:#98C379;"> {username}</span></span></code></pre></div><p>实践练习</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@study ~]# rabbitmqctl delete_user test1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Deleting</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;test1&quot;</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zq99299.github.io/mq-tutorial/rabbitmq-ac/05/02.html" target="_blank" rel="noopener noreferrer">用户管理：user</a></p>`,36)]))}const p=a(i,[["render",t],["__file","rabbitmq-y-manange-user.html.vue"]]),d=JSON.parse('{"path":"/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-y-manange-user.html","title":"RabbitMQ管理 - 用户管理：user","lang":"zh-CN","frontmatter":{"order":430,"category":["RabbitMQ","MQ"],"created":"2024-10-26 09:41","updated":"2024-10-26 09:48","description":"RabbitMQ管理 - 用户管理：user 1. 简介 在 RabbitMQ 中，用户 是访问控制（Access Control）的基本单元，且用户可以跨越多个 vhost 授权。使用标准的用户名和密码来认证用户。 2. 创建用户：add_user 实践练习 3. 修改密码：change_password 实践练习 4. 清除密码：clear_pas...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/MiddleWare/MQ_Rabbitmq/rabbitmq-y-manange-user.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"RabbitMQ管理 - 用户管理：user"}],["meta",{"property":"og:description","content":"RabbitMQ管理 - 用户管理：user 1. 简介 在 RabbitMQ 中，用户 是访问控制（Access Control）的基本单元，且用户可以跨越多个 vhost 授权。使用标准的用户名和密码来认证用户。 2. 创建用户：add_user 实践练习 3. 修改密码：change_password 实践练习 4. 清除密码：clear_pas..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RabbitMQ管理 - 用户管理：user\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 创建用户：add_user","slug":"_2-创建用户-add-user","link":"#_2-创建用户-add-user","children":[]},{"level":2,"title":"3. 修改密码：change_password","slug":"_3-修改密码-change-password","link":"#_3-修改密码-change-password","children":[]},{"level":2,"title":"4. 清除密码：clear_password","slug":"_4-清除密码-clear-password","link":"#_4-清除密码-clear-password","children":[]},{"level":2,"title":"5. 验证用户密码：authenticate_user","slug":"_5-验证用户密码-authenticate-user","link":"#_5-验证用户密码-authenticate-user","children":[]},{"level":2,"title":"6. 用户列表：list_users","slug":"_6-用户列表-list-users","link":"#_6-用户列表-list-users","children":[]},{"level":2,"title":"7. 设置角色 set_user_tags","slug":"_7-设置角色-set-user-tags","link":"#_7-设置角色-set-user-tags","children":[]},{"level":2,"title":"8. 删除用户：delete_user","slug":"_8-删除用户-delete-user","link":"#_8-删除用户-delete-user","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.82,"words":547},"filePathRelative":"posts/MiddleWare/MQ_Rabbitmq/rabbitmq-y-manange-user.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>在 RabbitMQ 中，<strong>用户</strong> 是访问控制（Access Control）的基本单元，且用户可以跨越多个 vhost 授权。使用标准的用户名和密码来认证用户。</p>\\n<h2>2. 创建用户：add_user</h2>\\n<div class=\\"language-bash\\" data-ext=\\"bash\\" data-title=\\"bash\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">rabbitmqctl</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> add_user</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> {username}</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> {password}</span></span></code></pre>\\n</div>","autoDesc":true}');export{p as comp,d as data};
