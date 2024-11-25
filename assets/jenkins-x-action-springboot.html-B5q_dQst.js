import{_ as a,c as n,a as i,o as l}from"./app-BfIe-EZg.js";const e={};function r(p,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="jenkins打包部署springboot应用" tabindex="-1"><a class="header-anchor" href="#jenkins打包部署springboot应用"><span>Jenkins打包部署SpringBoot应用</span></a></h1><blockquote><p>跟原文的主要区别是，他用docker部署，我是传统的文件上传形式，命令执行</p></blockquote><h2 id="_1-准备项目" tabindex="-1"><a class="header-anchor" href="#_1-准备项目"><span>1. 准备项目</span></a></h2><blockquote><p>这里我们使用<code>mall-learning</code>项目中的<code>mall-tiny-jenkins</code>模块代码来演示下如何使Jenkins一键打包部署SpringBoot应用。</p></blockquote><ul><li><p><code>mall-tiny-jenkins</code>项目源码地址：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmacrozheng%2Fmall-learning%2Ftree%2Fmaster%2Fmall-tiny-jenkins" target="_blank" rel="noopener noreferrer">github.com/macrozheng/…</a></p></li><li><p>将mall-tiny-jenkins 上传到我们自己的gitlab 或者github 等</p></li><li><p>上传完成后Gitlab中的展示效果如下：</p><p>我这里简单上传到gitee 做测试</p></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030630.png" alt="image-20210915191550138" tabindex="0" loading="lazy"><figcaption>image-20210915191550138</figcaption></figure><h2 id="_2-补充插件-publish-over-ssh" tabindex="-1"><a class="header-anchor" href="#_2-补充插件-publish-over-ssh"><span>2. 补充插件 Publish Over SSH</span></a></h2><h3 id="_2-1-背景" tabindex="-1"><a class="header-anchor" href="#_2-1-背景"><span>2.1 背景</span></a></h3><p>我们经常需要打包完后，将文件上传到服务器。但是</p><p>Jenkins配置任务默认是无 send files execute commands over SSH 的。</p><h3 id="_2-2-解决" tabindex="-1"><a class="header-anchor" href="#_2-2-解决"><span>2.2 解决</span></a></h3><p>安装插件 Publish Over SSH</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030669.png" alt="image-20210915201704009" tabindex="0" loading="lazy"><figcaption>image-20210915201704009</figcaption></figure><h3 id="_2-3-配置-ssh-servers" tabindex="-1"><a class="header-anchor" href="#_2-3-配置-ssh-servers"><span>2.3 配置 SSH Servers</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030695.png" alt="image-20210915202547951" tabindex="0" loading="lazy"><figcaption>image-20210915202547951</figcaption></figure><p>最下面设置</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030717.png" alt="image-20210915202923163" tabindex="0" loading="lazy"><figcaption>image-20210915202923163</figcaption></figure><h3 id="_2-4-测试连接" tabindex="-1"><a class="header-anchor" href="#_2-4-测试连接"><span>2.4 测试连接</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030738.png" alt="image-20210915204217543" tabindex="0" loading="lazy"><figcaption>image-20210915204217543</figcaption></figure><h2 id="_3-脚本设置" tabindex="-1"><a class="header-anchor" href="#_3-脚本设置"><span>3. 脚本设置</span></a></h2><p>新建脚本 <a href="http://deploy.sh" target="_blank" rel="noopener noreferrer">deploy.sh</a></p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/bin/sh</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># author ygn</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># ./deploy.sh start 启动</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># ./deploy.sh stop 停止</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># ./deploy.sh restart 重启</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># ./deploy.sh status 状态</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">AppName</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">mall-tiny-jenkins-1.0-SNAPSHOT.jar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># JVM参数</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">JVM_OPTS</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;-Dname=</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$AppName</span><span style="color:#98C379;--shiki-dark:#98C379;">  -Duser.timezone=Asia/Shanghai -Xms512M -Xmx512M -XX:PermSize=256M -XX:MaxPermSize=512M -XX:+HeapDumpOnOutOfMemoryError -XX:+PrintGCDateStamps  -XX:+PrintGCDetails -XX:NewRatio=1 -XX:SurvivorRatio=30 -XX:+UseParallelGC -XX:+UseParallelOldGC&quot;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">APP_HOME</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">\`</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">pwd</span><span style="color:#98C379;--shiki-dark:#98C379;">\`</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">LOG_PATH</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$APP_HOME</span><span style="color:#98C379;--shiki-dark:#98C379;">/logs/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$AppName</span><span style="color:#98C379;--shiki-dark:#98C379;">.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [ </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">$1</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ];</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">    echo</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -e</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;\\033[0;31m 未输入操作名 \\033[0m  \\033[0;34m {start|stop|restart|status} \\033[0m&quot;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">    exit</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [ </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$AppName</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ];</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">    echo</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -e</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;\\033[0;31m 未输入应用名 \\033[0m&quot;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">    exit</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">function</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> start</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    PID</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">\`</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">ps</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -ef</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#98C379;--shiki-dark:#98C379;"> java</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> $AppName</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -v</span><span style="color:#98C379;--shiki-dark:#98C379;"> grep</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">awk</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;{print $2}&#39;\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [ x</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$PID</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> !=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> x</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ]; </span><span style="color:#C678DD;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">	    echo</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$AppName</span><span style="color:#98C379;--shiki-dark:#98C379;"> is running...&quot;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	else</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">	  echo</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;启动完整命令： nohup java -jar  </span><span style="color:#E06C75;--shiki-dark:#E06C75;">$JVM_OPTS</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> $AppName</span><span style="color:#98C379;--shiki-dark:#98C379;">  &gt; /dev/null 2&gt;&amp;1 &amp;&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">		nohup</span><span style="color:#98C379;--shiki-dark:#98C379;"> java</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -jar</span><span style="color:#E06C75;--shiki-dark:#E06C75;">  $JVM_OPTS</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> $AppName</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">/dev/null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> 2&gt;&amp;1 &amp;</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">		echo</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;Start </span><span style="color:#E06C75;--shiki-dark:#E06C75;">$AppName</span><span style="color:#98C379;--shiki-dark:#98C379;"> success...&quot;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	fi</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">function</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> stop</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">    echo</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;Stop </span><span style="color:#E06C75;--shiki-dark:#E06C75;">$AppName</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">	PID</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">	query</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">		PID</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">\`</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">ps</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -ef</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#98C379;--shiki-dark:#98C379;"> java</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> $AppName</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -v</span><span style="color:#98C379;--shiki-dark:#98C379;"> grep</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">awk</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;{print $2}&#39;\`</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">	query</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [ x</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$PID</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> !=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> x</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ]; </span><span style="color:#C678DD;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">		kill</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -TERM</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> $PID</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">		echo</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$AppName</span><span style="color:#98C379;--shiki-dark:#98C379;"> (pid:</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$PID</span><span style="color:#98C379;--shiki-dark:#98C379;">) exiting...&quot;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">		while</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [ x</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$PID</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> !=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> x</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ]</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">		do</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">			sleep</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">			query</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">		done</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">		echo</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$AppName</span><span style="color:#98C379;--shiki-dark:#98C379;"> exited.&quot;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	else</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">		echo</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$AppName</span><span style="color:#98C379;--shiki-dark:#98C379;"> already stopped.&quot;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">	fi</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">function</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> restart</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    stop</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    sleep</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    start</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">function</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> status</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    PID</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">\`</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">ps</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -ef</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> |</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#98C379;--shiki-dark:#98C379;"> java</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> $AppName</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -v</span><span style="color:#98C379;--shiki-dark:#98C379;"> grep</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">|</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">wc</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -l</span><span style="color:#98C379;--shiki-dark:#98C379;">\`</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [ </span><span style="color:#E06C75;--shiki-dark:#E06C75;">$PID</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> !=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ];</span><span style="color:#C678DD;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">        echo</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$AppName</span><span style="color:#98C379;--shiki-dark:#98C379;"> is running...&quot;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    else</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">        echo</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$AppName</span><span style="color:#98C379;--shiki-dark:#98C379;"> is not running...&quot;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    fi</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">case</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> $1</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> in</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    start</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    start</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    stop</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    stop</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    restart</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    restart</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    status</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    status</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    *)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">esac</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-在jenkins中创建执行任务" tabindex="-1"><a class="header-anchor" href="#_4-在jenkins中创建执行任务"><span>4. 在Jenkins中创建执行任务</span></a></h2><h3 id="_4-1-创建新任务" tabindex="-1"><a class="header-anchor" href="#_4-1-创建新任务"><span>4.1 创建新任务</span></a></h3><ul><li><p>首先我们需要新建一个任务：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030762.png" alt="image-20210915192136448" tabindex="0" loading="lazy"><figcaption>image-20210915192136448</figcaption></figure></li><li><p>设置任务名称后选择构建一个自由风格的软件项目：</p></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030781.png" alt="image-20210915192225320" tabindex="0" loading="lazy"><figcaption>image-20210915192225320</figcaption></figure><h3 id="_4-2-配置仓库地址" tabindex="-1"><a class="header-anchor" href="#_4-2-配置仓库地址"><span>4.2 配置仓库地址</span></a></h3><ul><li><p>然后在源码管理中添加我们的git仓库地址：<a href="https://gitee.com/zszdevelop/mall-tiny-jenkins.git" target="_blank" rel="noopener noreferrer">https://gitee.com/zszdevelop/mall-tiny-jenkins.git</a></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030804.png" alt="image-20210915194454588" tabindex="0" loading="lazy"><figcaption>image-20210915194454588</figcaption></figure></li><li><p>此时需要添加一个凭据，也就是我们git仓库的账号密码：</p></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030830.png" alt="image-20210915192628228" tabindex="0" loading="lazy"><figcaption>image-20210915192628228</figcaption></figure><h3 id="_4-3-构建打包" tabindex="-1"><a class="header-anchor" href="#_4-3-构建打包"><span>4.3 构建打包</span></a></h3><ul><li><p>之后我们需要添加一个构建，选择调用顶层maven目标</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030853.png" alt="image-20210915192834926" tabindex="0" loading="lazy"><figcaption>image-20210915192834926</figcaption></figure></li><li><p>选择我们的maven版本，然后设置maven命令和指定pom文件位置：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030872.png" alt="image-20210915193207921" tabindex="0" loading="lazy"><figcaption>image-20210915193207921</figcaption></figure></li></ul><h3 id="_4-4-构建后续步骤-将文件发送到服务端" tabindex="-1"><a class="header-anchor" href="#_4-4-构建后续步骤-将文件发送到服务端"><span>4.4 构建后续步骤（将文件发送到服务端）</span></a></h3><ol><li>选择</li></ol><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030895.png" alt="image-20210915205201650" tabindex="0" loading="lazy"><figcaption>image-20210915205201650</figcaption></figure><ol><li><p>配置发送到远程的位置</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030914.png" alt="image-20210915205234136" tabindex="0" loading="lazy"><figcaption>image-20210915205234136</figcaption></figure></li></ol><h3 id="_4-5-构建环境-构建完后执行" tabindex="-1"><a class="header-anchor" href="#_4-5-构建环境-构建完后执行"><span>4.5 构建环境（构建完后执行）</span></a></h3><ul><li><p>需要设置执行的shell命令如下：/mydata/sh/mall-tiny-jenkins.sh</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030938.png" alt="image-20210915194403946" tabindex="0" loading="lazy"><figcaption>image-20210915194403946</figcaption></figure></li></ul><h3 id="_4-6-执行任务" tabindex="-1"><a class="header-anchor" href="#_4-6-执行任务"><span>4.6 执行任务</span></a></h3><ul><li>之后点击保存操作，我们的任务就创建完成了，在任务列表中我们可以点击运行来执行该任务；</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030964.png" alt="image-20210915194616357" tabindex="0" loading="lazy"><figcaption>image-20210915194616357</figcaption></figure><h3 id="_4-7-查看控制台" tabindex="-1"><a class="header-anchor" href="#_4-7-查看控制台"><span>4.7 查看控制台</span></a></h3><ul><li>我们可以通过控制台输出来查看整个任务的执行过程：</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030988.png" alt="image-20210915194756234" tabindex="0" loading="lazy"><figcaption>image-20210915194756234</figcaption></figure><h3 id="_4-8-查看项目效果" tabindex="-1"><a class="header-anchor" href="#_4-8-查看项目效果"><span>4.8 查看项目效果</span></a></h3><p>运行成功后，访问该地址即可查看API文档</p><p><a href="http://youip:8088/swagger-ui.html" target="_blank" rel="noopener noreferrer">http://youip:8088/swagger-ui.html</a></p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030008.png" alt="image-20210915194921830" tabindex="0" loading="lazy"><figcaption>image-20210915194921830</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://juejin.cn/post/6844904022097264648" target="_blank" rel="noopener noreferrer">使用Jenkins一键打包部署SpringBoot应用，就是这么6！</a></p>`,49)]))}const t=a(e,[["render",r],["__file","jenkins-x-action-springboot.html.vue"]]),c=JSON.parse('{"path":"/posts/MiddleWare/Jenkins/jenkins-x-action-springboot.html","title":"Jenkins打包部署SpringBoot应用","lang":"zh-CN","frontmatter":{"aliases":"Jenkins打包部署SpringBoot应用","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:50","updated":"2024-04-23 10:30","description":"Jenkins打包部署SpringBoot应用 跟原文的主要区别是，他用docker部署，我是传统的文件上传形式，命令执行 1. 准备项目 这里我们使用mall-learning项目中的mall-tiny-jenkins模块代码来演示下如何使Jenkins一键打包部署SpringBoot应用。 mall-tiny-jenkins项目源码地址：githu...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/MiddleWare/Jenkins/jenkins-x-action-springboot.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Jenkins打包部署SpringBoot应用"}],["meta",{"property":"og:description","content":"Jenkins打包部署SpringBoot应用 跟原文的主要区别是，他用docker部署，我是传统的文件上传形式，命令执行 1. 准备项目 这里我们使用mall-learning项目中的mall-tiny-jenkins模块代码来演示下如何使Jenkins一键打包部署SpringBoot应用。 mall-tiny-jenkins项目源码地址：githu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030630.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jenkins打包部署SpringBoot应用\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030630.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030669.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030695.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030717.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030738.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030762.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030781.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030804.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030830.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030853.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030872.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030895.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030914.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030938.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030964.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030988.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231030008.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 准备项目","slug":"_1-准备项目","link":"#_1-准备项目","children":[]},{"level":2,"title":"2. 补充插件 Publish Over SSH","slug":"_2-补充插件-publish-over-ssh","link":"#_2-补充插件-publish-over-ssh","children":[{"level":3,"title":"2.1 背景","slug":"_2-1-背景","link":"#_2-1-背景","children":[]},{"level":3,"title":"2.2 解决","slug":"_2-2-解决","link":"#_2-2-解决","children":[]},{"level":3,"title":"2.3 配置 SSH Servers","slug":"_2-3-配置-ssh-servers","link":"#_2-3-配置-ssh-servers","children":[]},{"level":3,"title":"2.4 测试连接","slug":"_2-4-测试连接","link":"#_2-4-测试连接","children":[]}]},{"level":2,"title":"3. 脚本设置","slug":"_3-脚本设置","link":"#_3-脚本设置","children":[]},{"level":2,"title":"4. 在Jenkins中创建执行任务","slug":"_4-在jenkins中创建执行任务","link":"#_4-在jenkins中创建执行任务","children":[{"level":3,"title":"4.1 创建新任务","slug":"_4-1-创建新任务","link":"#_4-1-创建新任务","children":[]},{"level":3,"title":"4.2 配置仓库地址","slug":"_4-2-配置仓库地址","link":"#_4-2-配置仓库地址","children":[]},{"level":3,"title":"4.3 构建打包","slug":"_4-3-构建打包","link":"#_4-3-构建打包","children":[]},{"level":3,"title":"4.4 构建后续步骤（将文件发送到服务端）","slug":"_4-4-构建后续步骤-将文件发送到服务端","link":"#_4-4-构建后续步骤-将文件发送到服务端","children":[]},{"level":3,"title":"4.5 构建环境（构建完后执行）","slug":"_4-5-构建环境-构建完后执行","link":"#_4-5-构建环境-构建完后执行","children":[]},{"level":3,"title":"4.6 执行任务","slug":"_4-6-执行任务","link":"#_4-6-执行任务","children":[]},{"level":3,"title":"4.7 查看控制台","slug":"_4-7-查看控制台","link":"#_4-7-查看控制台","children":[]},{"level":3,"title":"4.8 查看项目效果","slug":"_4-8-查看项目效果","link":"#_4-8-查看项目效果","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.05,"words":914},"filePathRelative":"posts/MiddleWare/Jenkins/jenkins-x-action-springboot.md","localizedDate":"2024年10月28日","excerpt":"\\n<blockquote>\\n<p>跟原文的主要区别是，他用docker部署，我是传统的文件上传形式，命令执行</p>\\n</blockquote>\\n<h2>1. 准备项目</h2>\\n<blockquote>\\n<p>这里我们使用<code>mall-learning</code>项目中的<code>mall-tiny-jenkins</code>模块代码来演示下如何使Jenkins一键打包部署SpringBoot应用。</p>\\n</blockquote>\\n<ul>\\n<li>\\n<p><code>mall-tiny-jenkins</code>项目源码地址：<a href=\\"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmacrozheng%2Fmall-learning%2Ftree%2Fmaster%2Fmall-tiny-jenkins\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">github.com/macrozheng/…</a></p>\\n</li>\\n<li>\\n<p>将mall-tiny-jenkins 上传到我们自己的gitlab 或者github 等</p>\\n</li>\\n<li>\\n<p>上传完成后Gitlab中的展示效果如下：</p>\\n<p>我这里简单上传到gitee 做测试</p>\\n</li>\\n</ul>","autoDesc":true}');export{t as comp,c as data};
