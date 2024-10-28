import{_ as a,c as n,a as i,o as l}from"./app-W9QyTiMU.js";const e={};function r(p,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="minio客户端mc使用" tabindex="-1"><a class="header-anchor" href="#minio客户端mc使用"><span>Minio客户端mc使用</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>MinIO Client (mc)为ls，cat，cp，mirror，diff，find等UNIX命令提供了一种替代方案。它支持文件系统和兼容Amazon S3的云存储服务（AWS Signature v2和v4）。</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">ls</span><span style="color:#98C379;--shiki-dark:#98C379;"> 列出文件和文件夹。</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mb</span><span style="color:#98C379;--shiki-dark:#98C379;"> 创建一个存储桶或一个文件夹。</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cat</span><span style="color:#98C379;--shiki-dark:#98C379;"> 显示文件和对象内容。</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">pipe</span><span style="color:#98C379;--shiki-dark:#98C379;"> 将一个STDIN重定向到一个对象或者文件或者STDOUT。</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">share</span><span style="color:#98C379;--shiki-dark:#98C379;"> 生成用于共享的URL。</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cp</span><span style="color:#98C379;--shiki-dark:#98C379;"> 拷贝文件和对象。</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mirror</span><span style="color:#98C379;--shiki-dark:#98C379;"> 给存储桶和文件夹做镜像。</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">find</span><span style="color:#98C379;--shiki-dark:#98C379;"> 基于参数查找文件。</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">diff</span><span style="color:#98C379;--shiki-dark:#98C379;"> 对两个文件夹或者存储桶比较差异。</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rm</span><span style="color:#98C379;--shiki-dark:#98C379;"> 删除文件和对象。</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">events</span><span style="color:#98C379;--shiki-dark:#98C379;"> 管理对象通知。</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">watch</span><span style="color:#98C379;--shiki-dark:#98C379;"> 监视文件和对象的事件。</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">policy</span><span style="color:#98C379;--shiki-dark:#98C379;"> 管理访问策略。</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">config</span><span style="color:#98C379;--shiki-dark:#98C379;"> 管理mc配置文件。</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">update</span><span style="color:#98C379;--shiki-dark:#98C379;"> 检查软件更新。</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">version</span><span style="color:#98C379;--shiki-dark:#98C379;"> 输出版本信息。</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-客户端下载" tabindex="-1"><a class="header-anchor" href="#_2-客户端下载"><span>2. 客户端下载</span></a></h2><h3 id="_2-1-mac安装" tabindex="-1"><a class="header-anchor" href="#_2-1-mac安装"><span>2.1 Mac安装</span></a></h3><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">brew</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio/stable/mc</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --help</span></span></code></pre></div><h3 id="_2-2-window下载" tabindex="-1"><a class="header-anchor" href="#_2-2-window下载"><span>2.2 window下载</span></a></h3><p><a href="http://dl.minio.org.cn/client/mc/release/windows-amd64/mc.exe%5B" target="_blank" rel="noopener noreferrer">下载地址</a></p><h2 id="_3-配置mc" tabindex="-1"><a class="header-anchor" href="#_3-配置mc"><span>3. 配置mc</span></a></h2><p>mc 将所有的配置信息都存储在~/.mc/config.json 文件中</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查询mc host配置</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> config</span><span style="color:#98C379;--shiki-dark:#98C379;"> host</span><span style="color:#98C379;--shiki-dark:#98C379;"> ls</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 添加minio服务</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> config</span><span style="color:#98C379;--shiki-dark:#98C379;"> host</span><span style="color:#98C379;--shiki-dark:#98C379;"> add</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server</span><span style="color:#98C379;--shiki-dark:#98C379;"> http://192.168.0.1:9000</span><span style="color:#98C379;--shiki-dark:#98C379;"> admin</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 12345678</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除host</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> config</span><span style="color:#98C379;--shiki-dark:#98C379;"> host</span><span style="color:#98C379;--shiki-dark:#98C379;"> remove</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server</span></span></code></pre></div><h2 id="_4-mc命令使用" tabindex="-1"><a class="header-anchor" href="#_4-mc命令使用"><span>4. mc命令使用</span></a></h2><table><thead><tr><th>ls - 列出存储桶和 对象</th><th>mb - 创建存储桶</th><th>cat - 合并对象</th></tr></thead><tbody><tr><td>cp - 拷贝对象</td><td>rm - 删除对象</td><td>pipe - Pipe到一个对象</td></tr><tr><td>share - 共享</td><td>mirror - 存储桶镜像</td><td>find - 查找文件和对象</td></tr><tr><td>diff - 比较存储桶差异</td><td>policy - 给存储桶或前缀设置访问策略</td><td></td></tr><tr><td>config - 管理配置文件</td><td>watch - 事件监听</td><td>events - 管理存储桶事件</td></tr><tr><td>update - 管理软件更新</td><td>version - 显示版本信息</td><td></td></tr></tbody></table><h3 id="_4-1-上传下载" tabindex="-1"><a class="header-anchor" href="#_4-1-上传下载"><span>4.1 上传下载</span></a></h3><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查询minio服务上的所有buckets(文件和文件夹)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> ls</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 下载文件</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> cp</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server/test/dog.png</span><span style="color:#98C379;--shiki-dark:#98C379;"> /Users/zsz/Desktop/temp/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#删除文件</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> rm</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server/test/dog.png</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#上传文件</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> cp</span><span style="color:#98C379;--shiki-dark:#98C379;"> /Users/zsz/Desktop/temp/dog.png</span><span style="color:#98C379;--shiki-dark:#98C379;">  minio-server/test/</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301408517.png" alt="image-20210930140312806" tabindex="0" loading="lazy"><figcaption>image-20210930140312806</figcaption></figure><h3 id="_4-2-bucket管理" tabindex="-1"><a class="header-anchor" href="#_4-2-bucket管理"><span>4.2 Bucket管理</span></a></h3><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 创建bucket</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> mb</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server/bucket01</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除bucket</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> rb</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server/bucket01</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># bucket不为空，可以强制删除 慎用</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> rb</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --force</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server/bucket01</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301408568.png" alt="image-20210930143222201" tabindex="0" loading="lazy"><figcaption>image-20210930143222201</figcaption></figure><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#查询bucket03磁盘使用情况</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> du</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server/bucket03</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301408592.png" alt="image-20210930145523482" tabindex="0" loading="lazy"><figcaption>image-20210930145523482</figcaption></figure><h2 id="_5-mc-admin使用" tabindex="-1"><a class="header-anchor" href="#_5-mc-admin使用"><span>5 mc admin使用</span></a></h2><p>MinIO Client（mc）提供了“ admin”子命令来对您的MinIO部署执行管理任务。</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">service</span><span style="color:#98C379;--shiki-dark:#98C379;"> 服务重启并停止所有MinIO服务器</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">update</span><span style="color:#98C379;--shiki-dark:#98C379;"> 更新更新所有MinIO服务器</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">info</span><span style="color:#98C379;--shiki-dark:#98C379;"> 信息显示MinIO服务器信息</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">user</span><span style="color:#98C379;--shiki-dark:#98C379;"> 用户管理用户</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">group</span><span style="color:#98C379;--shiki-dark:#98C379;"> 小组管理小组</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">policy</span><span style="color:#98C379;--shiki-dark:#98C379;"> MinIO服务器中定义的策略管理策略</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">config</span><span style="color:#98C379;--shiki-dark:#98C379;"> 配置管理MinIO服务器配置</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">heal</span><span style="color:#98C379;--shiki-dark:#98C379;"> 修复MinIO服务器上的磁盘，存储桶和对象</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">profile</span><span style="color:#98C379;--shiki-dark:#98C379;"> 概要文件生成概要文件数据以进行调试</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">top</span><span style="color:#98C379;--shiki-dark:#98C379;"> 顶部提供MinIO的顶部统计信息</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">trace</span><span style="color:#98C379;--shiki-dark:#98C379;"> 跟踪显示MinIO服务器的http跟踪</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">console</span><span style="color:#98C379;--shiki-dark:#98C379;"> 控制台显示MinIO服务器的控制台日志</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">prometheus</span><span style="color:#98C379;--shiki-dark:#98C379;"> Prometheus管理Prometheus配置</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">kms</span><span style="color:#98C379;--shiki-dark:#98C379;"> kms执行KMS管理操作</span></span></code></pre></div><h3 id="_5-1-用户管理" tabindex="-1"><a class="header-anchor" href="#_5-1-用户管理"><span>5.1 用户管理</span></a></h3><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> admin</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --help</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#新建用户</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> admin</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> add</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server</span><span style="color:#98C379;--shiki-dark:#98C379;"> fox</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> admin</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> add</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server</span><span style="color:#98C379;--shiki-dark:#98C379;"> fox02</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 12345678</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#查看用户</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> admin</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> list</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#禁用用户</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> admin</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> disable</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server</span><span style="color:#98C379;--shiki-dark:#98C379;"> fox02</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#启用用户</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> admin</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> disable</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server</span><span style="color:#98C379;--shiki-dark:#98C379;"> fox02</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#查看用户信息</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> admin</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> info</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server</span><span style="color:#98C379;--shiki-dark:#98C379;"> fox</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#删除用户</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> admin</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> remove</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server</span><span style="color:#98C379;--shiki-dark:#98C379;"> fox02</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301408620.png" alt="image-20210930145919383" tabindex="0" loading="lazy"><figcaption>image-20210930145919383</figcaption></figure><h3 id="_5-2-策略管理" tabindex="-1"><a class="header-anchor" href="#_5-2-策略管理"><span>5.2 策略管理</span></a></h3><p>policy命令，用于添加，删除，列出策略，获取有关策略的信息并为MinIO服务器上的用户设置策略。</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> admin</span><span style="color:#98C379;--shiki-dark:#98C379;"> policy</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --help</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#列出MinIO上的所有固定策略</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> admin</span><span style="color:#98C379;--shiki-dark:#98C379;"> policy</span><span style="color:#98C379;--shiki-dark:#98C379;"> list</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看plicy信息</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> admin</span><span style="color:#98C379;--shiki-dark:#98C379;"> policy</span><span style="color:#98C379;--shiki-dark:#98C379;"> info</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server</span><span style="color:#98C379;--shiki-dark:#98C379;"> readwrite</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301408643.png" alt="image-20210930150314231" tabindex="0" loading="lazy"><figcaption>image-20210930150314231</figcaption></figure><h4 id="_5-2-1-添加新的策略" tabindex="-1"><a class="header-anchor" href="#_5-2-1-添加新的策略"><span>5.2.1 添加新的策略</span></a></h4><p>编写策略文件：mall.json</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">	&quot;Version&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;2012-10-17&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">	&quot;Statement&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [{</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">		&quot;Effect&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Allow&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">		&quot;Action&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">			&quot;s3:GetBucketLocation&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">			&quot;s3:GetObject&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		],</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">		&quot;Resource&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">			&quot;arn:aws:s3:::mall&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	}, {</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">		&quot;Effect&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Allow&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">		&quot;Action&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">			&quot;s3:*&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		],</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">		&quot;Resource&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">			&quot;arn:aws:s3:::mall/*&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	}]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：策略文件的 <strong>Version</strong> 固定设置为 2012-10-17。</p><p>action 可选</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&quot;Action&quot;: [</span></span>
<span class="line"><span>&quot;s3:GetBucketLocation&quot;,</span></span>
<span class="line"><span>&quot;s3:ListBucket&quot;,</span></span>
<span class="line"><span>&quot;s3:GetObject&quot;,</span></span>
<span class="line"><span>&quot;s3:PutObject&quot;,</span></span>
<span class="line"><span>&quot;s3:DeleteObject&quot;</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>将mall.json添加到策略数据库</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>#添加新的策略</span></span>
<span class="line"><span>mc admin policy add minio-server mall /Users/zsz/Desktop/miniotest/mall.json</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mc admin policy list minio-server</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301408678.png" alt="image-20210930151708195" tabindex="0" loading="lazy"><figcaption>image-20210930151708195</figcaption></figure><h4 id="_5-2-2-设置用户访问策略" tabindex="-1"><a class="header-anchor" href="#_5-2-2-设置用户访问策略"><span>5.2.2 设置用户访问策略</span></a></h4><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> admin</span><span style="color:#98C379;--shiki-dark:#98C379;"> user</span><span style="color:#98C379;--shiki-dark:#98C379;"> add</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server</span><span style="color:#98C379;--shiki-dark:#98C379;"> fox03</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 12345678</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 设置用户的访问策略</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mc</span><span style="color:#98C379;--shiki-dark:#98C379;"> admin</span><span style="color:#98C379;--shiki-dark:#98C379;"> policy</span><span style="color:#98C379;--shiki-dark:#98C379;"> set</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-server</span><span style="color:#98C379;--shiki-dark:#98C379;"> mall</span><span style="color:#98C379;--shiki-dark:#98C379;"> user=fox03</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301408704.png" alt="image-20210930152101436" tabindex="0" loading="lazy"><figcaption>image-20210930152101436</figcaption></figure><p>测试：fox03/12345678 登录minio控制台<a href="http://192.168.3.14:50000/%EF%BC%8C%E5%8F%AA%E8%83%BD%E6%93%8D%E4%BD%9Ctulingmall%E7%9A%84bucket" target="_blank" rel="noopener noreferrer">http://192.168.3.14:50000/，只能操作tulingmall的bucket</a></p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="http://docs.minio.org.cn/docs/master/minio-client-quickstart-guide" target="_blank" rel="noopener noreferrer">MinIO客户端快速入门指南</a></p>`,47)]))}const t=a(e,[["render",r],["__file","minio-mc-use.html.vue"]]),c=JSON.parse('{"path":"/posts/Architect/minio/minio-mc-use.html","title":"Minio客户端mc使用","lang":"zh-CN","frontmatter":{"aliases":"Minio客户端mc使用","tags":null,"cssclass":null,"source":null,"created":"2024-04-24 14:35","updated":"2024-04-30 14:09","description":"Minio客户端mc使用 1. 简介 MinIO Client (mc)为ls，cat，cp，mirror，diff，find等UNIX命令提供了一种替代方案。它支持文件系统和兼容Amazon S3的云存储服务（AWS Signature v2和v4）。 2. 客户端下载 2.1 Mac安装 2.2 window下载 下载地址 3. 配置mc mc 将...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Architect/minio/minio-mc-use.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Minio客户端mc使用"}],["meta",{"property":"og:description","content":"Minio客户端mc使用 1. 简介 MinIO Client (mc)为ls，cat，cp，mirror，diff，find等UNIX命令提供了一种替代方案。它支持文件系统和兼容Amazon S3的云存储服务（AWS Signature v2和v4）。 2. 客户端下载 2.1 Mac安装 2.2 window下载 下载地址 3. 配置mc mc 将..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301408517.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Minio客户端mc使用\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301408517.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301408568.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301408592.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301408620.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301408643.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301408678.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301408704.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 客户端下载","slug":"_2-客户端下载","link":"#_2-客户端下载","children":[{"level":3,"title":"2.1 Mac安装","slug":"_2-1-mac安装","link":"#_2-1-mac安装","children":[]},{"level":3,"title":"2.2 window下载","slug":"_2-2-window下载","link":"#_2-2-window下载","children":[]}]},{"level":2,"title":"3. 配置mc","slug":"_3-配置mc","link":"#_3-配置mc","children":[]},{"level":2,"title":"4. mc命令使用","slug":"_4-mc命令使用","link":"#_4-mc命令使用","children":[{"level":3,"title":"4.1 上传下载","slug":"_4-1-上传下载","link":"#_4-1-上传下载","children":[]},{"level":3,"title":"4.2 Bucket管理","slug":"_4-2-bucket管理","link":"#_4-2-bucket管理","children":[]}]},{"level":2,"title":"5 mc admin使用","slug":"_5-mc-admin使用","link":"#_5-mc-admin使用","children":[{"level":3,"title":"5.1 用户管理","slug":"_5-1-用户管理","link":"#_5-1-用户管理","children":[]},{"level":3,"title":"5.2 策略管理","slug":"_5-2-策略管理","link":"#_5-2-策略管理","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.68,"words":1104},"filePathRelative":"posts/Architect/minio/minio-mc-use.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>MinIO Client (mc)为ls，cat，cp，mirror，diff，find等UNIX命令提供了一种替代方案。它支持文件系统和兼容Amazon S3的云存储服务（AWS Signature v2和v4）。</p>\\n<div class=\\"language-sh line-numbers-mode\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">ls</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 列出文件和文件夹。</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">mb</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 创建一个存储桶或一个文件夹。</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">cat</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 显示文件和对象内容。</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">pipe</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 将一个STDIN重定向到一个对象或者文件或者STDOUT。</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">share</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 生成用于共享的URL。</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">cp</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 拷贝文件和对象。</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">mirror</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 给存储桶和文件夹做镜像。</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">find</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 基于参数查找文件。</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">diff</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 对两个文件夹或者存储桶比较差异。</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">rm</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 删除文件和对象。</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">events</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 管理对象通知。</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">watch</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 监视文件和对象的事件。</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">policy</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 管理访问策略。</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">config</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 管理mc配置文件。</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">update</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 检查软件更新。</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">version</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> 输出版本信息。</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as comp,c as data};
