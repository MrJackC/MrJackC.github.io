import{_ as a,c as i,a as t,o as n}from"./app-W9QyTiMU.js";const l={};function r(o,e){return n(),i("div",null,e[0]||(e[0]=[t('<h1 id="达梦数据库-控制台工具-备份-恢复" tabindex="-1"><a class="header-anchor" href="#达梦数据库-控制台工具-备份-恢复"><span>达梦数据库-控制台工具（备份，恢复）</span></a></h1><h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述"><span>1. 概述</span></a></h2><p>DM控制台工具是管理和维护数据库的基本工具。因为控制台是通过dm.ini 参数来连接实例的，所以该工具必须在DM 实例服务端运行。 无法向DM Manager 工具和 DM Monitor 那样远程连接。</p><ul><li>Windows 平台直接在程序里调用控制台工具来启动。</li><li>Linux 平台，执行DM_HOME/tool/console 启动。</li></ul><h2 id="_2-用控制台工具可以提供如下功能" tabindex="-1"><a class="header-anchor" href="#_2-用控制台工具可以提供如下功能"><span>2. 用控制台工具可以提供如下功能</span></a></h2><ul><li>服务器参数配置</li><li>脱机备份与还原</li><li>查看系统信息</li><li>查看许可证信息</li></ul><h2 id="_3-实例参数查看和修改" tabindex="-1"><a class="header-anchor" href="#_3-实例参数查看和修改"><span>3. 实例参数查看和修改</span></a></h2><p>在控制台工具中配置好实例后，可以直接查看和修改实例的参数。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121414887.png" alt="image-20210629184434337" tabindex="0" loading="lazy"><figcaption>image-20210629184434337</figcaption></figure><h2 id="_4-备份恢复实例" tabindex="-1"><a class="header-anchor" href="#_4-备份恢复实例"><span>4. 备份恢复实例</span></a></h2><p>DM实例的备份恢复可以通过命令行，DM Manager 工具来进行，</p><ul><li>注意DM Manager 中仅支持备份，不支持恢复。</li><li>这里的控制台空间是可以同时支持备份和恢复操作的。</li></ul><p>控制台支持如下操作：</p><ul><li>1)备份还原</li><li>2)新建备份</li><li>3)设置默认备份目录</li><li>4)指定归档文件还原</li><li>5)还原备份</li><li>6)备份属性</li><li>7)备份列表弹出菜单</li></ul><h3 id="_4-1-备份" tabindex="-1"><a class="header-anchor" href="#_4-1-备份"><span>4.1 备份</span></a></h3><blockquote><p>脱机备份，需关闭当前实例的服务</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121414935.png" alt="image-20210629184557627" tabindex="0" loading="lazy"><figcaption>image-20210629184557627</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121414968.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-2-还原" tabindex="-1"><a class="header-anchor" href="#_4-2-还原"><span>4.2 还原</span></a></h3><blockquote><p>脱机还原，需关闭当前实例的服务</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121414995.png" alt="image-20210629184854266" tabindex="0" loading="lazy"><figcaption>image-20210629184854266</figcaption></figure><h4 id="_4-2-1-dm8-还需要更新db-magic" tabindex="-1"><a class="header-anchor" href="#_4-2-1-dm8-还需要更新db-magic"><span>4.2.1 DM8 还需要更新DB_magic</span></a></h4><p>DM8使用DMRMAN工具备份还原恢复后，需要启动数据库服务，才能正常运行数据库。但是如果直接启动数据库服务，会报以下错误</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>Instance DMSERVER startup failed, execute &#39;recover database ... update db_magic&#39; in dmrman.</span></span></code></pre></div><p>原因是DM8比DM7多出了一步更新db_magic的步骤，若不执行该步骤则会报以上错误，且无法直接启动数据库服务。</p><p>更新db_magic语法:</p><ul><li>方式1：recover database ‘/home/dmdba/dmdbms/data/TEST/dm.ini’ update db_magic;</li><li>方式2：界面操作</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121414022.png" alt="image-20210629191451696" tabindex="0" loading="lazy"><figcaption>image-20210629191451696</figcaption></figure><p>更新完db_magic后即可启动数据库服务</p><h2 id="_5-可能遇到的问题" tabindex="-1"><a class="header-anchor" href="#_5-可能遇到的问题"><span>5. 可能遇到的问题</span></a></h2><h3 id="_5-1-信号量异常" tabindex="-1"><a class="header-anchor" href="#_5-1-信号量异常"><span>5.1 信号量异常</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121414045.png" alt="image-20210629192030430" tabindex="0" loading="lazy"><figcaption>image-20210629192030430</figcaption></figure><p>脱机备份还原，需关闭当前实例的服务</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.cndba.cn/dave/article/3842" target="_blank" rel="noopener noreferrer">DM 达梦数据库 控制台工具（console） 使用说明</a></p><p><a href="https://blog.csdn.net/weixin_42316663/article/details/107682674" target="_blank" rel="noopener noreferrer">达梦8数据库还原恢复后开启数据库服务报Instance DMSERVICETEST startup failed错误</a></p>',36)]))}const c=a(l,[["render",r],["__file","dm-operation-console.html.vue"]]),d=JSON.parse('{"path":"/posts/Database/DM/dm-operation-console.html","title":"达梦数据库-控制台工具（备份，恢复）","lang":"zh-CN","frontmatter":{"aliases":"达梦数据库-控制台工具（备份，恢复）","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-12 14:15","description":"达梦数据库-控制台工具（备份，恢复） 1. 概述 DM控制台工具是管理和维护数据库的基本工具。因为控制台是通过dm.ini 参数来连接实例的，所以该工具必须在DM 实例服务端运行。 无法向DM Manager 工具和 DM Monitor 那样远程连接。 Windows 平台直接在程序里调用控制台工具来启动。 Linux 平台，执行DM_HOME/to...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/DM/dm-operation-console.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"达梦数据库-控制台工具（备份，恢复）"}],["meta",{"property":"og:description","content":"达梦数据库-控制台工具（备份，恢复） 1. 概述 DM控制台工具是管理和维护数据库的基本工具。因为控制台是通过dm.ini 参数来连接实例的，所以该工具必须在DM 实例服务端运行。 无法向DM Manager 工具和 DM Monitor 那样远程连接。 Windows 平台直接在程序里调用控制台工具来启动。 Linux 平台，执行DM_HOME/to..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121414887.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"达梦数据库-控制台工具（备份，恢复）\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121414887.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121414935.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121414968.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121414995.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121414022.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121414045.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 概述","slug":"_1-概述","link":"#_1-概述","children":[]},{"level":2,"title":"2. 用控制台工具可以提供如下功能","slug":"_2-用控制台工具可以提供如下功能","link":"#_2-用控制台工具可以提供如下功能","children":[]},{"level":2,"title":"3. 实例参数查看和修改","slug":"_3-实例参数查看和修改","link":"#_3-实例参数查看和修改","children":[]},{"level":2,"title":"4. 备份恢复实例","slug":"_4-备份恢复实例","link":"#_4-备份恢复实例","children":[{"level":3,"title":"4.1 备份","slug":"_4-1-备份","link":"#_4-1-备份","children":[]},{"level":3,"title":"4.2 还原","slug":"_4-2-还原","link":"#_4-2-还原","children":[]}]},{"level":2,"title":"5. 可能遇到的问题","slug":"_5-可能遇到的问题","link":"#_5-可能遇到的问题","children":[{"level":3,"title":"5.1 信号量异常","slug":"_5-1-信号量异常","link":"#_5-1-信号量异常","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.09,"words":627},"filePathRelative":"posts/Database/DM/dm-operation-console.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 概述</h2>\\n<p>DM控制台工具是管理和维护数据库的基本工具。因为控制台是通过dm.ini 参数来连接实例的，所以该工具必须在DM 实例服务端运行。 无法向DM Manager 工具和 DM Monitor 那样远程连接。</p>\\n<ul>\\n<li>Windows 平台直接在程序里调用控制台工具来启动。</li>\\n<li>Linux 平台，执行DM_HOME/tool/console 启动。</li>\\n</ul>\\n<h2>2. 用控制台工具可以提供如下功能</h2>\\n<ul>\\n<li>服务器参数配置</li>\\n<li>脱机备份与还原</li>\\n<li>查看系统信息</li>\\n<li>查看许可证信息</li>\\n</ul>","autoDesc":true}');export{c as comp,d as data};
