import{_ as a,c as i,a as t,o as n}from"./app-DQS7qcOs.js";const r={};function g(s,e){return n(),i("div",null,e[0]||(e[0]=[t('<h1 id="达梦数据库迁移工具dts" tabindex="-1"><a class="header-anchor" href="#达梦数据库迁移工具dts"><span>达梦数据库迁移工具DTS</span></a></h1><h1 id="_1-具体操作" tabindex="-1"><a class="header-anchor" href="#_1-具体操作"><span>1. 具体操作</span></a></h1><h3 id="_1-1-打开-dm-数据迁移工具-dts" tabindex="-1"><a class="header-anchor" href="#_1-1-打开-dm-数据迁移工具-dts"><span>1.1 打开 DM 数据迁移工具 DTS</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415066.png" alt="image-20210629095241281" tabindex="0" loading="lazy"><figcaption>image-20210629095241281</figcaption></figure><h3 id="_1-2-新建工程" tabindex="-1"><a class="header-anchor" href="#_1-2-新建工程"><span>1.2 新建工程</span></a></h3><p>空白位置点击新建工程</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415116.png" alt="image-20210629095346165" tabindex="0" loading="lazy"><figcaption>image-20210629095346165</figcaption></figure><h3 id="_1-3-输入工程名" tabindex="-1"><a class="header-anchor" href="#_1-3-输入工程名"><span>1.3 输入工程名</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415147.png" alt="image-20210629095437062" tabindex="0" loading="lazy"><figcaption>image-20210629095437062</figcaption></figure><h3 id="_1-4-新建迁移-创建迁移任务" tabindex="-1"><a class="header-anchor" href="#_1-4-新建迁移-创建迁移任务"><span>1.4 新建迁移，创建迁移任务</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415176.png" alt="image-20210629095728500" tabindex="0" loading="lazy"><figcaption>image-20210629095728500</figcaption></figure><h3 id="_1-5-输入迁移名称" tabindex="-1"><a class="header-anchor" href="#_1-5-输入迁移名称"><span>1.5 输入迁移名称</span></a></h3><p>输入迁移名称，迁移名称可自定义，输入后点击确定。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415202.png" alt="image-20210629095821871" tabindex="0" loading="lazy"><figcaption>image-20210629095821871</figcaption></figure><h3 id="_1-6-迁移创建好后-会弹出迁移向导-如下图所示" tabindex="-1"><a class="header-anchor" href="#_1-6-迁移创建好后-会弹出迁移向导-如下图所示"><span>1.6 迁移创建好后，会弹出迁移向导，如下图所示</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415232.png" alt="image-20210629095920224" tabindex="0" loading="lazy"><figcaption>image-20210629095920224</figcaption></figure><h3 id="_1-7-点击下一步-选择迁移类型-源端-目标端" tabindex="-1"><a class="header-anchor" href="#_1-7-点击下一步-选择迁移类型-源端-目标端"><span>1.7 点击下一步，选择迁移类型（源端 ==&gt; 目标端）</span></a></h3><p>选择合适的数据库迁移类型</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415261.png" alt="image-20210629100058437" tabindex="0" loading="lazy"><figcaption>image-20210629100058437</figcaption></figure><h3 id="_1-8-输入源端连接信息" tabindex="-1"><a class="header-anchor" href="#_1-8-输入源端连接信息"><span>1.8 输入源端连接信息</span></a></h3><ul><li>这里最好选择sysdba 角色的用户，否则加载表的时候会有异常</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415291.png" alt="image-20210629144625735" tabindex="0" loading="lazy"><figcaption>image-20210629144625735</figcaption></figure><p>输入源端连接信息包括：主机 ip ，数据库监听端口，数据库实例名，源端数据库登录账号，源端数据库登录密码</p><p>以上信息确保输入正确后，点击下一步</p><h3 id="_1-9-输入目标端连接信息" tabindex="-1"><a class="header-anchor" href="#_1-9-输入目标端连接信息"><span>1.9 输入目标端连接信息</span></a></h3><ul><li>这里的用户名最好自己新建，否则在查询的时候需要加上模式名（数据库名）</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415323.png" alt="image-20210629111958489" tabindex="0" loading="lazy"><figcaption>image-20210629111958489</figcaption></figure><h3 id="_1-10-迁移方式-对象的选择" tabindex="-1"><a class="header-anchor" href="#_1-10-迁移方式-对象的选择"><span>1.10 迁移方式 / 对象的选择</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415347.png" alt="image-20210629103553498" tabindex="0" loading="lazy"><figcaption>image-20210629103553498</figcaption></figure><p>可选择方式 1 （ sql 结果集），方式 2 （数据对象用户直接迁移）进行迁移；可通过输入“查找对象名”中输入源端需迁移用户名进行过滤，且可以通过手动修改“目的模式”设置目标端导入用户。</p><p>点击下一步继续。</p><h3 id="_1-11-选择迁移的表" tabindex="-1"><a class="header-anchor" href="#_1-11-选择迁移的表"><span>1.11 选择迁移的表</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415378.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1-12-确认迁移信息-开始迁移" tabindex="-1"><a class="header-anchor" href="#_1-12-确认迁移信息-开始迁移"><span>1.12 确认迁移信息，开始迁移</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415408.png" alt="image-20210629105203767" tabindex="0" loading="lazy"><figcaption>image-20210629105203767</figcaption></figure><h3 id="_1-13-检查迁移日志-无报错信息-即证明迁移完成。" tabindex="-1"><a class="header-anchor" href="#_1-13-检查迁移日志-无报错信息-即证明迁移完成。"><span>1.13 检查迁移日志，无报错信息，即证明迁移完成。</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415437.png" alt="image-20210629105824615" tabindex="0" loading="lazy"><figcaption>image-20210629105824615</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://m.yisu.com/zixun/305021.html" target="_blank" rel="noopener noreferrer">达梦数据库迁移工具DTS使用手册</a></p>',39)]))}const l=a(r,[["render",g],["__file","dm-operation-dts.html.vue"]]),h=JSON.parse('{"path":"/posts/Database/DM/dm-operation-dts.html","title":"达梦数据库迁移工具DTS","lang":"zh-CN","frontmatter":{"aliases":"达梦数据库迁移工具DTS","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-12 14:16","description":"达梦数据库迁移工具DTS 1. 具体操作 1.1 打开 DM 数据迁移工具 DTS image-20210629095241281image-20210629095241281 1.2 新建工程 空白位置点击新建工程 image-20210629095346165image-20210629095346165 1.3 输入工程名 image-20210...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Database/DM/dm-operation-dts.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"达梦数据库迁移工具DTS"}],["meta",{"property":"og:description","content":"达梦数据库迁移工具DTS 1. 具体操作 1.1 打开 DM 数据迁移工具 DTS image-20210629095241281image-20210629095241281 1.2 新建工程 空白位置点击新建工程 image-20210629095346165image-20210629095346165 1.3 输入工程名 image-20210..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415066.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"达梦数据库迁移工具DTS\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415066.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415116.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415147.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415176.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415202.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415232.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415261.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415291.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415323.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415347.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415378.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415408.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415437.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":3,"title":"1.1 打开 DM 数据迁移工具 DTS","slug":"_1-1-打开-dm-数据迁移工具-dts","link":"#_1-1-打开-dm-数据迁移工具-dts","children":[]},{"level":3,"title":"1.2 新建工程","slug":"_1-2-新建工程","link":"#_1-2-新建工程","children":[]},{"level":3,"title":"1.3 输入工程名","slug":"_1-3-输入工程名","link":"#_1-3-输入工程名","children":[]},{"level":3,"title":"1.4 新建迁移，创建迁移任务","slug":"_1-4-新建迁移-创建迁移任务","link":"#_1-4-新建迁移-创建迁移任务","children":[]},{"level":3,"title":"1.5 输入迁移名称","slug":"_1-5-输入迁移名称","link":"#_1-5-输入迁移名称","children":[]},{"level":3,"title":"1.6 迁移创建好后，会弹出迁移向导，如下图所示","slug":"_1-6-迁移创建好后-会弹出迁移向导-如下图所示","link":"#_1-6-迁移创建好后-会弹出迁移向导-如下图所示","children":[]},{"level":3,"title":"1.7 点击下一步，选择迁移类型（源端 ==> 目标端）","slug":"_1-7-点击下一步-选择迁移类型-源端-目标端","link":"#_1-7-点击下一步-选择迁移类型-源端-目标端","children":[]},{"level":3,"title":"1.8 输入源端连接信息","slug":"_1-8-输入源端连接信息","link":"#_1-8-输入源端连接信息","children":[]},{"level":3,"title":"1.9 输入目标端连接信息","slug":"_1-9-输入目标端连接信息","link":"#_1-9-输入目标端连接信息","children":[]},{"level":3,"title":"1.10 迁移方式 / 对象的选择","slug":"_1-10-迁移方式-对象的选择","link":"#_1-10-迁移方式-对象的选择","children":[]},{"level":3,"title":"1.11 选择迁移的表","slug":"_1-11-选择迁移的表","link":"#_1-11-选择迁移的表","children":[]},{"level":3,"title":"1.12 确认迁移信息，开始迁移","slug":"_1-12-确认迁移信息-开始迁移","link":"#_1-12-确认迁移信息-开始迁移","children":[]},{"level":3,"title":"1.13 检查迁移日志，无报错信息，即证明迁移完成。","slug":"_1-13-检查迁移日志-无报错信息-即证明迁移完成。","link":"#_1-13-检查迁移日志-无报错信息-即证明迁移完成。","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.64,"words":493},"filePathRelative":"posts/Database/DM/dm-operation-dts.md","localizedDate":"2024年10月21日","excerpt":"\\n<h1>1. 具体操作</h1>\\n<h3>1.1 打开 DM 数据迁移工具 DTS</h3>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415066.png\\" alt=\\"image-20210629095241281\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20210629095241281</figcaption></figure>\\n<h3>1.2 新建工程</h3>\\n<p>空白位置点击新建工程</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121415116.png\\" alt=\\"image-20210629095346165\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20210629095346165</figcaption></figure>","autoDesc":true}');export{l as comp,h as data};
