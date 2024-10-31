import{_ as s,c as n,a as p,o as e}from"./app-mWs04Xnh.js";const l={};function r(i,a){return e(),n("div",null,a[0]||(a[0]=[p(`<h1 id="mysql-备份" tabindex="-1"><a class="header-anchor" href="#mysql-备份"><span>MySQL - 备份</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>备份方案主要分为</p><ul><li>mysqldump</li><li>xtrabackup(推荐)</li></ul><h2 id="_2-mysqldump-命令备份" tabindex="-1"><a class="header-anchor" href="#_2-mysqldump-命令备份"><span>2. mysqldump 命令备份</span></a></h2><p>mysqldump 可以导出MYSQL表中的数据</p><p>mysqldump该工具会将数据查出来，转换成insert语句，写入到某个文件中，相当于数据备份。</p><p>我们获取到该文件，然后执行相应的insert语句，就能创建相关的表，并且写入数据了，这就相当于数据还原。</p><blockquote><p>mysqldump命令的语法为：mysqldump -h主机名 -P端口 -u用户名 -p密码 参数1,参数2.... &gt; 文件名称.sql</p></blockquote><p>备份远程数据库中的数据库：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>mysqldump -h 192.168.0.1 -u root -p123456 dbname &gt; backup.sql</span></span></code></pre></div><h2 id="_3-xtrabackup-备份-推荐" tabindex="-1"><a class="header-anchor" href="#_3-xtrabackup-备份-推荐"><span>3. xtrabackup 备份（推荐）</span></a></h2><h3 id="_3-1-备份脚本" tabindex="-1"><a class="header-anchor" href="#_3-1-备份脚本"><span>3.1 备份脚本</span></a></h3><p>backup_script.sh</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">BACKUP_DIR</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">/home/dataexa/db-backup</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">DOCKER_BACKUP_DIR</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">/var/lib/db-backup</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">MYSQL_USER</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">root</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">MYSQL_PASS</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">mypassword</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">MYSQL_HOST</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">127.0.0.1</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">MYSQL_PORT</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">3306</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">DATE</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">$(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">date</span><span style="color:#98C379;--shiki-dark:#98C379;"> +%Y-%m-%d_%H-%M-%S</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mkdir</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -p</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> $BACKUP_DIR</span><span style="color:#98C379;--shiki-dark:#98C379;">/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$DATE</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">chmod</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -R</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 777</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> $BACKUP_DIR</span><span style="color:#98C379;--shiki-dark:#98C379;">/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$DATE</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sudo</span><span style="color:#98C379;--shiki-dark:#98C379;"> docker</span><span style="color:#98C379;--shiki-dark:#98C379;"> stop</span><span style="color:#98C379;--shiki-dark:#98C379;"> percona-xtrabackup</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sudo</span><span style="color:#98C379;--shiki-dark:#98C379;"> docker</span><span style="color:#98C379;--shiki-dark:#98C379;"> rm</span><span style="color:#98C379;--shiki-dark:#98C379;"> percona-xtrabackup</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sudo</span><span style="color:#98C379;--shiki-dark:#98C379;"> docker</span><span style="color:#98C379;--shiki-dark:#98C379;"> run</span><span style="color:#D19A66;--shiki-dark:#D19A66;">   --user</span><span style="color:#98C379;--shiki-dark:#98C379;"> 0:0</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --name</span><span style="color:#98C379;--shiki-dark:#98C379;"> percona-xtrabackup</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --volumes-from</span><span style="color:#98C379;--shiki-dark:#98C379;"> mysql</span><span style="color:#98C379;--shiki-dark:#98C379;"> percona/percona-xtrabackup</span><span style="color:#98C379;--shiki-dark:#98C379;"> xtrabackup</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --backup</span><span style="color:#D19A66;--shiki-dark:#D19A66;">  --user=</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$MYSQL_USER</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --target-dir=</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$DOCKER_BACKUP_DIR</span><span style="color:#D19A66;--shiki-dark:#D19A66;">/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$DATE</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --user=</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$MYSQL_USER</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --password=</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$MYSQL_PASS</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --port=</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$MYSQL_PORT</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --host=</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$MYSQL_HOST</span></span></code></pre></div><p>注意点：</p><ul><li>--user : 以root 角色运行容器，以免因为权限问题无法备份</li><li>--volumes-from：挂在到docker 的mysql 容器的相同数据卷、实现数据共享</li></ul><h3 id="_3-2-恢复数据-方案1-xtrabackup-恢复" tabindex="-1"><a class="header-anchor" href="#_3-2-恢复数据-方案1-xtrabackup-恢复"><span>3.2 恢复数据：方案1 xtrabackup 恢复</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>还有点问题</span></span></code></pre></div><h4 id="_3-2-1-步骤1-准备恢复的数据" tabindex="-1"><a class="header-anchor" href="#_3-2-1-步骤1-准备恢复的数据"><span>3.2.1 步骤1：准备恢复的数据</span></a></h4><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">shell</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">xtrabackup</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --prepare</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --target-dir=/data/backups/full</span></span></code></pre></div><h4 id="_3-2-2-步骤2-trabackup-恢复" tabindex="-1"><a class="header-anchor" href="#_3-2-2-步骤2-trabackup-恢复"><span>3.2.2 步骤2：trabackup 恢复</span></a></h4><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>shell&gt; systemctl stop mysqld.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>shell&gt; rm -rf /var/lib/mysql/*</span></span>
<span class="line"><span></span></span>
<span class="line"><span>shell&gt; xtrabackup --copy-back --datadir=/var/lib/mysql --target-dir=/backups/full</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 下面为完成后的输出结果</span></span>
<span class="line"><span>180818 10:59:25 [01]        ...done</span></span>
<span class="line"><span>180818 10:59:25 completed OK!</span></span></code></pre></div><h3 id="_3-3-恢复数据-方案2-rsync命令" tabindex="-1"><a class="header-anchor" href="#_3-3-恢复数据-方案2-rsync命令"><span>3.3 恢复数据：方案2 <code>rsync</code>命令</span></a></h3><blockquote><p>验证成功</p></blockquote><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rsync</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -avrP</span><span style="color:#98C379;--shiki-dark:#98C379;"> /backup/</span><span style="color:#98C379;--shiki-dark:#98C379;"> /var/lib/mysql/</span></span></code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://docs.percona.com/percona-xtrabackup/8.0/installation/docker.html" target="_blank" rel="noopener noreferrer">官方文档-xtrabackup-8.0文档</a></p><p><a href="https://cn.openjianghu.org/doc/page/article/10080" target="_blank" rel="noopener noreferrer">数据库备份之Xtrabackup</a></p><p><a href="https://www.jianshu.com/p/e8bd79e84f55" target="_blank" rel="noopener noreferrer">MySQL 物理备份： Innobackupex 和 xtrabackup（热备）</a></p>`,30)]))}const t=s(l,[["render",r],["__file","mysql-x-backup.html.vue"]]),c=JSON.parse('{"path":"/posts/Database/MySQL/mysql-x-backup.html","title":"MySQL - 备份","lang":"zh-CN","frontmatter":{"aliases":"MySQL - 备份","tags":null,"cssclass":null,"source":null,"order":910,"category":["数据库","Mysql"],"created":"2024-02-22 10:49","updated":"2024-03-13 08:51","description":"MySQL - 备份 1. 简介 备份方案主要分为 mysqldump xtrabackup(推荐) 2. mysqldump 命令备份 mysqldump 可以导出MYSQL表中的数据 mysqldump该工具会将数据查出来，转换成insert语句，写入到某个文件中，相当于数据备份。 我们获取到该文件，然后执行相应的insert语句，就能创建相关的表...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Database/MySQL/mysql-x-backup.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"MySQL - 备份"}],["meta",{"property":"og:description","content":"MySQL - 备份 1. 简介 备份方案主要分为 mysqldump xtrabackup(推荐) 2. mysqldump 命令备份 mysqldump 可以导出MYSQL表中的数据 mysqldump该工具会将数据查出来，转换成insert语句，写入到某个文件中，相当于数据备份。 我们获取到该文件，然后执行相应的insert语句，就能创建相关的表..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL - 备份\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. mysqldump 命令备份","slug":"_2-mysqldump-命令备份","link":"#_2-mysqldump-命令备份","children":[]},{"level":2,"title":"3. xtrabackup 备份（推荐）","slug":"_3-xtrabackup-备份-推荐","link":"#_3-xtrabackup-备份-推荐","children":[{"level":3,"title":"3.1 备份脚本","slug":"_3-1-备份脚本","link":"#_3-1-备份脚本","children":[]},{"level":3,"title":"3.2 恢复数据：方案1 xtrabackup 恢复","slug":"_3-2-恢复数据-方案1-xtrabackup-恢复","link":"#_3-2-恢复数据-方案1-xtrabackup-恢复","children":[]},{"level":3,"title":"3.3 恢复数据：方案2 rsync命令","slug":"_3-3-恢复数据-方案2-rsync命令","link":"#_3-3-恢复数据-方案2-rsync命令","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.52,"words":456},"filePathRelative":"posts/Database/MySQL/mysql-x-backup.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>备份方案主要分为</p>\\n<ul>\\n<li>mysqldump</li>\\n<li>xtrabackup(推荐)</li>\\n</ul>\\n<h2>2. mysqldump 命令备份</h2>\\n<p>mysqldump 可以导出MYSQL表中的数据</p>\\n<p>mysqldump该工具会将数据查出来，转换成insert语句，写入到某个文件中，相当于数据备份。</p>\\n<p>我们获取到该文件，然后执行相应的insert语句，就能创建相关的表，并且写入数据了，这就相当于数据还原。</p>\\n<blockquote>\\n<p>mysqldump命令的语法为：mysqldump -h主机名 -P端口 -u用户名 -p密码 参数1,参数2.... &gt; 文件名称.sql</p>\\n</blockquote>","autoDesc":true}');export{t as comp,c as data};