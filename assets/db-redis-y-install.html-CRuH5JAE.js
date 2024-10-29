import{_ as a,c as s,a as i,o as r}from"./app-DEK5G3U7.js";const n={};function d(c,e){return r(),s("div",null,e[0]||(e[0]=[i(`<h1 id="redis安装" tabindex="-1"><a class="header-anchor" href="#redis安装"><span>Redis安装</span></a></h1><h2 id="_1-具体安装步骤" tabindex="-1"><a class="header-anchor" href="#_1-具体安装步骤"><span>1. 具体安装步骤</span></a></h2><h3 id="_1-1-使用wget命令下载" tabindex="-1"><a class="header-anchor" href="#_1-1-使用wget命令下载"><span>1.1 使用wget命令下载</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>wget http://download.redis.io/releases/redis-5.0.5.tar.gz</span></span></code></pre></div><p>具体下载哪个版本可以在<a href="http://download.redis.io/releases/" target="_blank" rel="noopener noreferrer">redis官网</a>上选择</p><h3 id="_1-2-解压源码" tabindex="-1"><a class="header-anchor" href="#_1-2-解压源码"><span>1.2 解压源码</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>tar -zxvf redis-5.0.5.tar.gz</span></span></code></pre></div><h3 id="_1-3-编译" tabindex="-1"><a class="header-anchor" href="#_1-3-编译"><span>1.3 编译</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>cd /usr/local/redis-5.0.5</span></span>
<span class="line"><span>make PREFIX=/usr/local/redis install</span></span></code></pre></div><p>编译后的redis在 <code>/usr/local/redis</code>目录下</p><h4 id="_1-3-1-如遇安装异常cc-command-not-found" tabindex="-1"><a class="header-anchor" href="#_1-3-1-如遇安装异常cc-command-not-found"><span>1.3.1 如遇安装异常cc: command not found</span></a></h4><p>/bin/sh: cc: command not found</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131023887.png" alt="image-20191203115107725" tabindex="0" loading="lazy"><figcaption>image-20191203115107725</figcaption></figure><p>**解决方案：**安装gcc命令</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>yum install gcc</span></span></code></pre></div><h4 id="_1-3-2-make时报如下错误" tabindex="-1"><a class="header-anchor" href="#_1-3-2-make时报如下错误"><span>1.3.2 make时报如下错误</span></a></h4><p>原因是jemalloc重载了Linux下的ANSI C的malloc和free函数。解决办法：make时添加参数。</p><h3 id="_1-4-redis的配置文件" tabindex="-1"><a class="header-anchor" href="#_1-4-redis的配置文件"><span>1.4 redis的配置文件</span></a></h3><p>redis.conf是redis的配置文件，redis.conf在redis源码目录。<br> 拷贝配置文件到安装目录下<br> 进入源码目录，里面有一份配置文件 redis.conf，然后将其拷贝到安装路径下</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>cp redis.conf /usr/local/redis/bin/</span></span></code></pre></div><h2 id="_2-bin目录结构" tabindex="-1"><a class="header-anchor" href="#_2-bin目录结构"><span>2. bin目录结构</span></a></h2><p>进入安装目录bin下</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>cd /usr/local/redis/bin</span></span></code></pre></div><p>目录结构</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131023927.png" alt="image-20190909112349183" tabindex="0" loading="lazy"><figcaption>image-20190909112349183</figcaption></figure><ul><li>redis-benchmark: redis 性能检测工具</li><li>redis-check-aof： AOF文件修复工具</li><li>redis-check-rdb： RDB文件修复工具</li><li>redis-cli： 客户端命令行</li><li>redis.conf： redis配置文件</li><li>redis-sentinel： redis集群</li><li>redis-server： redis 服务进程</li></ul><h2 id="_3-启动redis" tabindex="-1"><a class="header-anchor" href="#_3-启动redis"><span>3. 启动redis</span></a></h2><h3 id="_3-1-前端模式启动" tabindex="-1"><a class="header-anchor" href="#_3-1-前端模式启动"><span>3.1 前端模式启动</span></a></h3><p>直接运行redis-server将以前端模式启动</p><p><strong>缺点</strong>：ssh命令窗口关闭则redis-server程序结束，<strong>不推荐</strong></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>./redis-server</span></span></code></pre></div><p>如图</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131023952.png" alt="image-20190909112943727" tabindex="0" loading="lazy"><figcaption>image-20190909112943727</figcaption></figure><h3 id="_3-2-后端模式启动" tabindex="-1"><a class="header-anchor" href="#_3-2-后端模式启动"><span>3.2 后端模式启动</span></a></h3><p>修改redis.conf 配置文件。daemonize yes 以后端模式启动</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>vim /usr/local/redis/bin/redis.conf</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131023977.png" alt="image-20190909113153794" tabindex="0" loading="lazy"><figcaption>image-20190909113153794</figcaption></figure><p>执行如下命令</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># 相对路径情况执行</span></span>
<span class="line"><span>./redis-server redis.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 全路径执行</span></span>
<span class="line"><span>/usr/local/redis/bin/redis-server /usr/local/redis/bin/redis.conf</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131023010.png" alt="image-20190909114017734" tabindex="0" loading="lazy"><figcaption>image-20190909114017734</figcaption></figure><h2 id="_4-连接redis" tabindex="-1"><a class="header-anchor" href="#_4-连接redis"><span>4. 连接redis</span></a></h2><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>/usr/local/redis/bin/redis-cli</span></span></code></pre></div><h2 id="_5-关闭redis" tabindex="-1"><a class="header-anchor" href="#_5-关闭redis"><span>5.关闭redis</span></a></h2><p>强行终止redis进程可能会导致redis持久化数据丢失。正确停止Redis的方式应该是向Redis发送SHUTDOWN命令，命令为：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>cd /usr/local/redis</span></span>
<span class="line"><span>./bin/redis-cli shutdown</span></span></code></pre></div><h3 id="_5-1-强行终止redis-不推荐" tabindex="-1"><a class="header-anchor" href="#_5-1-强行终止redis-不推荐"><span>5.1 强行终止redis(不推荐)</span></a></h3><p>会造成数据丢失</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>pkill redis-server</span></span></code></pre></div><h2 id="_6-开机自启动" tabindex="-1"><a class="header-anchor" href="#_6-开机自启动"><span>6. 开机自启动</span></a></h2><p>在<code>/etc/rc.local</code>编辑</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>vim /etc/rc.local</span></span></code></pre></div><p>添加</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># redis 开机自启动</span></span>
<span class="line"><span>/usr/local/redis/bin/redis-server /usr/local/redis/etc/redis-conf</span></span></code></pre></div>`,53)]))}const l=a(n,[["render",d],["__file","db-redis-y-install.html.vue"]]),o=JSON.parse('{"path":"/posts/Redis/db-redis-y-install.html","title":"Redis安装","lang":"zh-CN","frontmatter":{"aliases":"Redis安装","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:49","updated":"2024-03-13 10:23","description":"Redis安装 1. 具体安装步骤 1.1 使用wget命令下载 具体下载哪个版本可以在redis官网上选择 1.2 解压源码 1.3 编译 编译后的redis在 /usr/local/redis目录下 1.3.1 如遇安装异常cc: command not found /bin/sh: cc: command not found image-2019...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Redis/db-redis-y-install.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Redis安装"}],["meta",{"property":"og:description","content":"Redis安装 1. 具体安装步骤 1.1 使用wget命令下载 具体下载哪个版本可以在redis官网上选择 1.2 解压源码 1.3 编译 编译后的redis在 /usr/local/redis目录下 1.3.1 如遇安装异常cc: command not found /bin/sh: cc: command not found image-2019..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131023887.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis安装\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131023887.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131023927.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131023952.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131023977.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131023010.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 具体安装步骤","slug":"_1-具体安装步骤","link":"#_1-具体安装步骤","children":[{"level":3,"title":"1.1 使用wget命令下载","slug":"_1-1-使用wget命令下载","link":"#_1-1-使用wget命令下载","children":[]},{"level":3,"title":"1.2 解压源码","slug":"_1-2-解压源码","link":"#_1-2-解压源码","children":[]},{"level":3,"title":"1.3 编译","slug":"_1-3-编译","link":"#_1-3-编译","children":[]},{"level":3,"title":"1.4 redis的配置文件","slug":"_1-4-redis的配置文件","link":"#_1-4-redis的配置文件","children":[]}]},{"level":2,"title":"2. bin目录结构","slug":"_2-bin目录结构","link":"#_2-bin目录结构","children":[]},{"level":2,"title":"3. 启动redis","slug":"_3-启动redis","link":"#_3-启动redis","children":[{"level":3,"title":"3.1 前端模式启动","slug":"_3-1-前端模式启动","link":"#_3-1-前端模式启动","children":[]},{"level":3,"title":"3.2 后端模式启动","slug":"_3-2-后端模式启动","link":"#_3-2-后端模式启动","children":[]}]},{"level":2,"title":"4. 连接redis","slug":"_4-连接redis","link":"#_4-连接redis","children":[]},{"level":2,"title":"5.关闭redis","slug":"_5-关闭redis","link":"#_5-关闭redis","children":[{"level":3,"title":"5.1 强行终止redis(不推荐)","slug":"_5-1-强行终止redis-不推荐","link":"#_5-1-强行终止redis-不推荐","children":[]}]},{"level":2,"title":"6. 开机自启动","slug":"_6-开机自启动","link":"#_6-开机自启动","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.7,"words":510},"filePathRelative":"posts/Redis/db-redis-y-install.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 具体安装步骤</h2>\\n<h3>1.1 使用wget命令下载</h3>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>wget http://download.redis.io/releases/redis-5.0.5.tar.gz</span></span></code></pre>\\n</div>","autoDesc":true}');export{l as comp,o as data};
