import{_ as e,c as t,a as i,o as a}from"./app-DP7tPpgD.js";const s={};function r(n,l){return a(),t("div",null,l[0]||(l[0]=[i('<h1 id="centos防火墙firewalld操作" tabindex="-1"><a class="header-anchor" href="#centos防火墙firewalld操作"><span>Centos防火墙firewalld操作</span></a></h1><h2 id="_1-firewalld的基本使用" tabindex="-1"><a class="header-anchor" href="#_1-firewalld的基本使用"><span>1. firewalld的基本使用</span></a></h2><ul><li><p>启动： systemctl start firewalld</p></li><li><p>关闭： systemctl stop firewalld</p></li><li><p>查看状态： systemctl status firewalld</p></li><li><p>开机禁用 ： systemctl disable firewalld</p></li><li><p>开机启用 ： systemctl enable firewalld</p></li></ul><h2 id="_2-systemctl-老版本操作" tabindex="-1"><a class="header-anchor" href="#_2-systemctl-老版本操作"><span>2. systemctl 老版本操作</span></a></h2><p>systemctl是CentOS7的服务管理工具中主要的工具，它融合之前service和chkconfig的功能于一体。</p><ul><li>启动一个服务：systemctl start firewalld.service</li><li>关闭一个服务：systemctl stop firewalld.service</li><li>重启一个服务：systemctl restart firewalld.service</li><li>显示一个服务的状态：systemctl status firewalld.service</li><li>在开机时启用一个服务：systemctl enable firewalld.service</li><li>在开机时禁用一个服务：systemctl disable firewalld.service</li><li>查看服务是否开机启动：systemctl is-enabled firewalld.service</li><li>查看已启动的服务列表：systemctl list-unit-files|grep enabled</li><li>查看启动失败的服务列表：systemctl --failed</li></ul><h2 id="_3-配置firewalld-cmd" tabindex="-1"><a class="header-anchor" href="#_3-配置firewalld-cmd"><span>3. 配置firewalld-cmd</span></a></h2><ul><li>查看版本： firewall-cmd --version</li><li>查看帮助： firewall-cmd --help</li><li>显示状态： firewall-cmd --state</li><li>查看所有打开的端口： firewall-cmd --zone=public --list-ports</li><li>更新防火墙规则： firewall-cmd --reload</li><li>查看区域信息: firewall-cmd --get-active-zones</li><li>查看指定接口所属区域： firewall-cmd --get-zone-of-interface=eth0</li><li>拒绝所有包：firewall-cmd --panic-on</li><li>取消拒绝状态： firewall-cmd --panic-off</li><li>查看是否拒绝： firewall-cmd --query-panic</li></ul><h2 id="_4-开启端口" tabindex="-1"><a class="header-anchor" href="#_4-开启端口"><span>4. 开启端口</span></a></h2><ol><li><p>添加</p><p>firewall-cmd --zone=public --add-port=80/tcp --permanent （--permanent永久生效，没有此参数重启后失效）</p></li><li><p>重新载入</p><p>firewall-cmd --reload</p></li><li><p>查看</p><p>firewall-cmd --zone= public --query-port=80/tcp</p></li><li><p>删除</p><p>firewall-cmd --zone= public --remove-port=80/tcp --permanent</p></li></ol><h2 id="_5-centos6-x-防火墙操作" tabindex="-1"><a class="header-anchor" href="#_5-centos6-x-防火墙操作"><span>5. Centos6.X 防火墙操作</span></a></h2><ul><li><p>开启命令：service iptables start</p></li><li><p>关闭命令：service iptables stop</p></li><li><p>永久关闭防火墙：chkconfig iptables off</p></li><li><p>查看防火墙状态：service iptables status</p></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.cnblogs.com/moxiaoan/p/5683743.html" target="_blank" rel="noopener noreferrer">CentOS7使用firewalld打开关闭防火墙与端口</a></p>',14)]))}const p=e(s,[["render",r],["__file","linux-y-firewalld.html.vue"]]),d=JSON.parse('{"path":"/posts/Linux/linux-y-firewalld.html","title":"Centos防火墙firewalld操作","lang":"zh-CN","frontmatter":{"description":"Centos防火墙firewalld操作 1. firewalld的基本使用 启动： systemctl start firewalld 关闭： systemctl stop firewalld 查看状态： systemctl status firewalld 开机禁用 ： systemctl disable firewalld 开机启用 ： syst...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Linux/linux-y-firewalld.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Centos防火墙firewalld操作"}],["meta",{"property":"og:description","content":"Centos防火墙firewalld操作 1. firewalld的基本使用 启动： systemctl start firewalld 关闭： systemctl stop firewalld 查看状态： systemctl status firewalld 开机禁用 ： systemctl disable firewalld 开机启用 ： syst..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Centos防火墙firewalld操作\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. firewalld的基本使用","slug":"_1-firewalld的基本使用","link":"#_1-firewalld的基本使用","children":[]},{"level":2,"title":"2. systemctl 老版本操作","slug":"_2-systemctl-老版本操作","link":"#_2-systemctl-老版本操作","children":[]},{"level":2,"title":"3. 配置firewalld-cmd","slug":"_3-配置firewalld-cmd","link":"#_3-配置firewalld-cmd","children":[]},{"level":2,"title":"4. 开启端口","slug":"_4-开启端口","link":"#_4-开启端口","children":[]},{"level":2,"title":"5. Centos6.X 防火墙操作","slug":"_5-centos6-x-防火墙操作","link":"#_5-centos6-x-防火墙操作","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.4,"words":419},"filePathRelative":"posts/Linux/linux-y-firewalld.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. firewalld的基本使用</h2>\\n<ul>\\n<li>\\n<p>启动： systemctl start firewalld</p>\\n</li>\\n<li>\\n<p>关闭： systemctl stop firewalld</p>\\n</li>\\n<li>\\n<p>查看状态： systemctl status firewalld</p>\\n</li>\\n<li>\\n<p>开机禁用 ： systemctl disable firewalld</p>\\n</li>\\n<li>\\n<p>开机启用 ： systemctl enable firewalld</p>\\n</li>\\n</ul>\\n<h2>2. systemctl 老版本操作</h2>","autoDesc":true}');export{p as comp,d as data};
