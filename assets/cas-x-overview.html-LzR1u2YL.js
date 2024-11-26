import{_ as e,c as s,a as t,o as i}from"./app-JRvFIbSa.js";const r={};function n(o,a){return i(),s("div",null,a[0]||(a[0]=[t(`<h1 id="cas单点登录-服务搭建" tabindex="-1"><a class="header-anchor" href="#cas单点登录-服务搭建"><span>CAS单点登录 - 服务搭建</span></a></h1><h2 id="_1-什么是cas" tabindex="-1"><a class="header-anchor" href="#_1-什么是cas"><span>1. 什么是CAS</span></a></h2><p>CAS是Central Authentication Service的缩写，中央认证服务，一种独立开放指令协议。CAS 是 耶鲁大学（Yale University）发起的一个开源项目，旨在为 Web 应用系统提供一种可靠的单点登录方法，CAS 在 2004 年 12 月正式成为 JA-SIG 的一个项目。</p><p>简单来说，就是开源的企业级单点登录（SSO）服务。</p><h2 id="_2-cas-server-搭建思路" tabindex="-1"><a class="header-anchor" href="#_2-cas-server-搭建思路"><span>2. CAS Server 搭建思路</span></a></h2><p>CAS 官方提供了一种使用 Apereo CAS WAR Overlay Template 的方式（开发人员通过 克隆模板仓库<a href="https://github.com/apereo/cas-overlay-template" target="_blank" rel="noopener noreferrer">https://github.com/apereo/cas-overlay-template</a> ，修改Maven/Gradle配置引入官方发布War包依赖，构建时将变更的文件更新到新的War中）简化了开发人员二次开发复杂性，提高了开发效率。</p><p>对于简单部署一个CAS 服务端，就可以直接下载 Maven 仓库中的War包进行部署，本文亦使用此方法部署 <code>5.3.16</code> 版本的CAS 服务端。如需定制开发，请使用官方模板仓库进行开发。</p><blockquote><p>CAS 服务端 5.x 使用 JDK 1.8，6.x 开始使用 JDK 11，由于公司项目在用1.8，就用 CAS 5.x 最新版本 5.3.16 了</p></blockquote><h2 id="_3-方案1-官网war包部署" tabindex="-1"><a class="header-anchor" href="#_3-方案1-官网war包部署"><span>3. 方案1：官网war包部署</span></a></h2><h3 id="_3-1-下载maven仓库war包" tabindex="-1"><a class="header-anchor" href="#_3-1-下载maven仓库war包"><span>3.1 下载Maven仓库War包</span></a></h3><p><a href="https://repo1.maven.org/maven2/org/apereo/cas/cas-server-webapp-tomcat/5.3.16/" target="_blank" rel="noopener noreferrer">https://repo1.maven.org/maven2/org/apereo/cas/cas-server-webapp-tomcat/5.3.16/</a></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219372.png" alt="image-20230214222622428" tabindex="0" loading="lazy"><figcaption>image-20230214222622428</figcaption></figure><h3 id="_3-2-使用tomcat-部署" tabindex="-1"><a class="header-anchor" href="#_3-2-使用tomcat-部署"><span>3.2 使用tomcat 部署</span></a></h3><blockquote><p>这里手动将war包改成zip、并手动解压后改名为cas了</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219415.png" alt="image-20230214222859311" tabindex="0" loading="lazy"><figcaption>image-20230214222859311</figcaption></figure><h3 id="_3-3-启动服务" tabindex="-1"><a class="header-anchor" href="#_3-3-启动服务"><span>3.3 启动服务</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>#启动tomcat</span></span>
<span class="line"><span>cd apache-tomcat-9.0.56/bin</span></span>
<span class="line"><span>./startup.sh</span></span>
<span class="line"><span>#查看日志</span></span>
<span class="line"><span>cd ..</span></span>
<span class="line"><span>tail -f logs/catalina.out</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219443.png" alt="image-20230214223125899" tabindex="0" loading="lazy"><figcaption>image-20230214223125899</figcaption></figure><h3 id="_3-4-查看服务是否正常" tabindex="-1"><a class="header-anchor" href="#_3-4-查看服务是否正常"><span>3.4 查看服务是否正常</span></a></h3><p>出现Ready后，Ctrl+C停止日志输出控制台，访问服务器IP:8080/cas，查看cas是否启动成功</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219467.png" alt="image-20230214223316372" tabindex="0" loading="lazy"><figcaption>image-20230214223316372</figcaption></figure><p>默认用户名与密码在配置文件application.properties中(CAS 服务端是用SpringBoot实现的)</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#打开配置文件</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">vim</span><span style="color:#98C379;--shiki-dark:#98C379;"> /opt/apache-tomcat-9.0.56/webapps/cas/WEB-INF/classes/application.properties</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#Shift + G 跳转到最后，能看到casuser是用户名，Mellon是密码</span></span></code></pre></div><p>输入用户名与密码，登录</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219492.png" alt="image-20230214223409995" tabindex="0" loading="lazy"><figcaption>image-20230214223409995</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219517.png" alt="image-20230214223420862" tabindex="0" loading="lazy"><figcaption>image-20230214223420862</figcaption></figure><p>提示登录成功，到此一个最基础的CAS服务端搭建完成了，接下来将开启 http 协议支持，这是用来应用服务授权时使用的。</p><h2 id="_4-调整-cas-服务端配置" tabindex="-1"><a class="header-anchor" href="#_4-调整-cas-服务端配置"><span>4. 调整 CAS 服务端配置</span></a></h2><p>默认CAS 服务端将 http 协议的客户端都认为是不合法的，需要修改配置文件 <code>HTTPSandIMAPS-10000001.json</code> 添加 http协议支持。</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">cd</span><span style="color:#98C379;--shiki-dark:#98C379;"> /opt/apache-tomcat-9.0.56/webapps/cas/WEB-INF/classes/services</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">vim</span><span style="color:#98C379;--shiki-dark:#98C379;"> HTTPSandIMAPS-10000001.json</span></span></code></pre></div><p>添加绿框部分文字 <code>|http</code>，添加 http 协议支持。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219540.png" alt="image-20230214223553143" tabindex="0" loading="lazy"><figcaption>image-20230214223553143</figcaption></figure><p>修改完成保存退出，还需要编辑 application.properties</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">vim /opt/apache-tomcat-9.0.56/webapps/cas/WEB-INF/classes/application.properties</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#在配置文件最后添加如下两行</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">cas.tgc.secure</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">false </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#取消票根对应的Cookie的Secure配置，否则非https无法完成单点登录（但是能达到每个应用都需要登录的目的）</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">cas.serviceRegistry.initFromJson</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">true </span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#使用services目录下的json配置初始化serviceRegistry</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219560.png" alt="image-20230214223646403" tabindex="0" loading="lazy"><figcaption>image-20230214223646403</figcaption></figure><p>重启 tomcat 就可以使用应用服务进行单点登录测试了。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.cnblogs.com/hellxz/p/15740935.html" target="_blank" rel="noopener noreferrer">CAS学习笔记一：CAS 授权服务器简易搭建</a></p>`,38)]))}const p=e(r,[["render",n],["__file","cas-x-overview.html.vue"]]),l=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/cas/cas-x-overview.html","title":"CAS单点登录 - 服务搭建","lang":"zh-CN","frontmatter":{"aliases":"CAS单点登录 - 服务搭建","tags":null,"cssclass":null,"source":null,"order":10,"category":["CAS"],"created":"2024-02-22 10:50","updated":"2024-04-23 12:20","description":"CAS单点登录 - 服务搭建 1. 什么是CAS CAS是Central Authentication Service的缩写，中央认证服务，一种独立开放指令协议。CAS 是 耶鲁大学（Yale University）发起的一个开源项目，旨在为 Web 应用系统提供一种可靠的单点登录方法，CAS 在 2004 年 12 月正式成为 JA-SIG 的一个项...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/cas/cas-x-overview.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"CAS单点登录 - 服务搭建"}],["meta",{"property":"og:description","content":"CAS单点登录 - 服务搭建 1. 什么是CAS CAS是Central Authentication Service的缩写，中央认证服务，一种独立开放指令协议。CAS 是 耶鲁大学（Yale University）发起的一个开源项目，旨在为 Web 应用系统提供一种可靠的单点登录方法，CAS 在 2004 年 12 月正式成为 JA-SIG 的一个项..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219372.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CAS单点登录 - 服务搭建\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219372.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219415.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219443.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219467.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219492.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219517.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219540.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231219560.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是CAS","slug":"_1-什么是cas","link":"#_1-什么是cas","children":[]},{"level":2,"title":"2. CAS Server 搭建思路","slug":"_2-cas-server-搭建思路","link":"#_2-cas-server-搭建思路","children":[]},{"level":2,"title":"3. 方案1：官网war包部署","slug":"_3-方案1-官网war包部署","link":"#_3-方案1-官网war包部署","children":[{"level":3,"title":"3.1 下载Maven仓库War包","slug":"_3-1-下载maven仓库war包","link":"#_3-1-下载maven仓库war包","children":[]},{"level":3,"title":"3.2 使用tomcat 部署","slug":"_3-2-使用tomcat-部署","link":"#_3-2-使用tomcat-部署","children":[]},{"level":3,"title":"3.3 启动服务","slug":"_3-3-启动服务","link":"#_3-3-启动服务","children":[]},{"level":3,"title":"3.4 查看服务是否正常","slug":"_3-4-查看服务是否正常","link":"#_3-4-查看服务是否正常","children":[]}]},{"level":2,"title":"4. 调整 CAS 服务端配置","slug":"_4-调整-cas-服务端配置","link":"#_4-调整-cas-服务端配置","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.67,"words":802},"filePathRelative":"posts/Java/Java第三方依赖/cas/cas-x-overview.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 什么是CAS</h2>\\n<p>CAS是Central Authentication Service的缩写，中央认证服务，一种独立开放指令协议。CAS 是 耶鲁大学（Yale University）发起的一个开源项目，旨在为 Web 应用系统提供一种可靠的单点登录方法，CAS 在 2004 年 12 月正式成为 JA-SIG 的一个项目。</p>\\n<p>简单来说，就是开源的企业级单点登录（SSO）服务。</p>\\n<h2>2. CAS Server 搭建思路</h2>\\n<p>CAS 官方提供了一种使用 Apereo CAS WAR Overlay Template 的方式（开发人员通过 克隆模板仓库<a href=\\"https://github.com/apereo/cas-overlay-template\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/apereo/cas-overlay-template</a> ，修改Maven/Gradle配置引入官方发布War包依赖，构建时将变更的文件更新到新的War中）简化了开发人员二次开发复杂性，提高了开发效率。</p>","autoDesc":true}');export{p as comp,l as data};
