import{_ as a,c as i,a as t,o as n}from"./app-BOcQBfH9.js";const p={};function r(l,e){return n(),i("div",null,e[0]||(e[0]=[t('<h1 id="宝塔面板使用感受" tabindex="-1"><a class="header-anchor" href="#宝塔面板使用感受"><span>宝塔面板使用感受</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>之前新服务器新项目需要部署，都是从一个个软件安装搭建开始的，各种配置（时间久了配置文件都找不到了），再部署项目，还需要监控项目情况</p><ol><li><p>安装软件</p><p>mysql，nginx,redis，mongo等</p></li><li><p>配置</p><p>针对安装的软件的各种配置，还有定时任务等</p></li><li><p>部署项目</p><p>传包，部署配置等</p></li><li><p>监控项目</p><p>服务是否正常运行，内存，cpu使用情况</p></li></ol><p>往往把这一系列弄好就花费了一天时间，虽然docker 的诞生已经解决了一大部分问题</p><h2 id="_2-宝塔面板" tabindex="-1"><a class="header-anchor" href="#_2-宝塔面板"><span>2. 宝塔面板</span></a></h2><h3 id="_2-1-首页" tabindex="-1"><a class="header-anchor" href="#_2-1-首页"><span>2.1 首页</span></a></h3><p>在首页中我们能看到服务器的一个基本情况</p><ul><li>负载状态</li><li>cpu使用率</li><li>内存使用率</li><li>磁盘使用率</li><li>网站域名</li><li>数据库</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231143283.png" alt="image-20220405172433096" tabindex="0" loading="lazy"><figcaption>image-20220405172433096</figcaption></figure><h3 id="_2-2-网站" tabindex="-1"><a class="header-anchor" href="#_2-2-网站"><span>2.2 网站</span></a></h3><p>网站主要负责域名管理和一些初始化配置</p><h4 id="_2-2-1-php项目" tabindex="-1"><a class="header-anchor" href="#_2-2-1-php项目"><span>2.2.1 php项目</span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231143327.png" alt="image-20220405173334010" tabindex="0" loading="lazy"><figcaption>image-20220405173334010</figcaption></figure><p>新建网站</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231143353.png" alt="image-20220405173436414" tabindex="0" loading="lazy"><figcaption>image-20220405173436414</figcaption></figure><h4 id="_2-2-2-java项目" tabindex="-1"><a class="header-anchor" href="#_2-2-2-java项目"><span>2.2.2 java项目</span></a></h4><p>可以配置启动端口和启动命令，以后就在这管理</p><p>还可以设置开机自动启动功能（还挺方便，不需要自己写任务了）</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231143384.png" alt="image-20220405173526821" tabindex="0" loading="lazy"><figcaption>image-20220405173526821</figcaption></figure><h3 id="_2-3-数据库" tabindex="-1"><a class="header-anchor" href="#_2-3-数据库"><span>2.3 数据库</span></a></h3><p>只需要简单的设置，一个数据库就配置好了</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231143409.png" alt="image-20220405174011895" tabindex="0" loading="lazy"><figcaption>image-20220405174011895</figcaption></figure><h3 id="_2-4-监控" tabindex="-1"><a class="header-anchor" href="#_2-4-监控"><span>2.4 监控</span></a></h3><p>可以监控负载，内存，cpu等性能信息</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231143440.png" alt="image-20220405182751236" tabindex="0" loading="lazy"><figcaption>image-20220405182751236</figcaption></figure><h3 id="_2-5-文件" tabindex="-1"><a class="header-anchor" href="#_2-5-文件"><span>2.5 文件</span></a></h3><p>文件可以当做ftp来使用，做一些上传下载的工作</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231143469.png" alt="image-20220405183112784" tabindex="0" loading="lazy"><figcaption>image-20220405183112784</figcaption></figure><h3 id="_2-6-计划任务" tabindex="-1"><a class="header-anchor" href="#_2-6-计划任务"><span>2.6 计划任务</span></a></h3><p>非常方便的添加定时任务，如备份数据库和https证书续订等</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231143495.png" alt="image-20220405183258796" tabindex="0" loading="lazy"><figcaption>image-20220405183258796</figcaption></figure><h3 id="_2-7-软件商店" tabindex="-1"><a class="header-anchor" href="#_2-7-软件商店"><span>2.7 软件商店</span></a></h3><p>非常方便的安装软件和配置</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231143516.png" alt="image-20220405183449140" tabindex="0" loading="lazy"><figcaption>image-20220405183449140</figcaption></figure><h2 id="_3-待优化项目" tabindex="-1"><a class="header-anchor" href="#_3-待优化项目"><span>3.待优化项目</span></a></h2><ul><li>网站服务模块 <ul><li>不能监控服务状态，当前是停用还是启动，我好自己启动</li></ul></li></ul>',37)]))}const s=a(p,[["render",r],["__file","operations-x-baota.html.vue"]]),c=JSON.parse('{"path":"/posts/Development-Tools/Operations/operations-x-baota.html","title":"宝塔面板使用感受","lang":"zh-CN","frontmatter":{"created":"2024-05-14 07:56","updated":"2024-05-30 14:51","description":"宝塔面板使用感受 1. 背景 之前新服务器新项目需要部署，都是从一个个软件安装搭建开始的，各种配置（时间久了配置文件都找不到了），再部署项目，还需要监控项目情况 安装软件 mysql，nginx,redis，mongo等 配置 针对安装的软件的各种配置，还有定时任务等 部署项目 传包，部署配置等 监控项目 服务是否正常运行，内存，cpu使用情况 往往把...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Development-Tools/Operations/operations-x-baota.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"宝塔面板使用感受"}],["meta",{"property":"og:description","content":"宝塔面板使用感受 1. 背景 之前新服务器新项目需要部署，都是从一个个软件安装搭建开始的，各种配置（时间久了配置文件都找不到了），再部署项目，还需要监控项目情况 安装软件 mysql，nginx,redis，mongo等 配置 针对安装的软件的各种配置，还有定时任务等 部署项目 传包，部署配置等 监控项目 服务是否正常运行，内存，cpu使用情况 往往把..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231143283.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"宝塔面板使用感受\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231143283.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231143327.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231143353.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231143384.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231143409.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231143440.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231143469.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231143495.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231143516.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 宝塔面板","slug":"_2-宝塔面板","link":"#_2-宝塔面板","children":[{"level":3,"title":"2.1 首页","slug":"_2-1-首页","link":"#_2-1-首页","children":[]},{"level":3,"title":"2.2 网站","slug":"_2-2-网站","link":"#_2-2-网站","children":[]},{"level":3,"title":"2.3 数据库","slug":"_2-3-数据库","link":"#_2-3-数据库","children":[]},{"level":3,"title":"2.4 监控","slug":"_2-4-监控","link":"#_2-4-监控","children":[]},{"level":3,"title":"2.5 文件","slug":"_2-5-文件","link":"#_2-5-文件","children":[]},{"level":3,"title":"2.6 计划任务","slug":"_2-6-计划任务","link":"#_2-6-计划任务","children":[]},{"level":3,"title":"2.7 软件商店","slug":"_2-7-软件商店","link":"#_2-7-软件商店","children":[]}]},{"level":2,"title":"3.待优化项目","slug":"_3-待优化项目","link":"#_3-待优化项目","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.63,"words":490},"filePathRelative":"posts/Development-Tools/Operations/operations-x-baota.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>之前新服务器新项目需要部署，都是从一个个软件安装搭建开始的，各种配置（时间久了配置文件都找不到了），再部署项目，还需要监控项目情况</p>\\n<ol>\\n<li>\\n<p>安装软件</p>\\n<p>mysql，nginx,redis，mongo等</p>\\n</li>\\n<li>\\n<p>配置</p>\\n<p>针对安装的软件的各种配置，还有定时任务等</p>\\n</li>\\n<li>\\n<p>部署项目</p>\\n<p>传包，部署配置等</p>\\n</li>\\n<li>\\n<p>监控项目</p>\\n<p>服务是否正常运行，内存，cpu使用情况</p>\\n</li>\\n</ol>\\n<p>往往把这一系列弄好就花费了一天时间，虽然docker 的诞生已经解决了一大部分问题</p>","autoDesc":true}');export{s as comp,c as data};
