import{_ as a,c as n,a as l,o as i}from"./app-BQBjlK2G.js";const B={};function r(e,s){return i(),n("div",null,s[0]||(s[0]=[l(`<h1 id="springboot应用部署-使用第三方jar包" tabindex="-1"><a class="header-anchor" href="#springboot应用部署-使用第三方jar包"><span>SpringBoot应用部署 - 使用第三方JAR包</span></a></h1><blockquote><p>在项目中我们经常需要使用第三方的Jar，比如某些SDK，<strong>这些SDK没有直接发布到公开的maven仓库中</strong>，这种情况下如何使用这些三方JAR呢？本文提供最常用的两种方式。</p></blockquote><h2 id="方案一-安装到maven仓库" tabindex="-1"><a class="header-anchor" href="#方案一-安装到maven仓库"><span>方案一：安装到Maven仓库</span></a></h2><blockquote><p>如果有项目的Maven仓库，则推荐按照到的Maven仓库（比如私服）中。（最好不是本地的Maven仓库，因为还有CI环境需要集成。）</p></blockquote><p>配置Maven私服, server &amp; profile</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- server --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">server</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;nexus&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">username</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;pdai&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">username</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">password</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;passw0rd&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">password</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">server</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- profile --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">profile</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;pdai-artifactory&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">repositories</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">repository</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;nexus&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">url</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;xxx.xxx.xxx.xxx&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">url</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">releases</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">enabled</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;true&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">enabled</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">releases</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">snapshots</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">enabled</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;true&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">enabled</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">snapshots</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">repository</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">repositories</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">profile</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># -X：详细信息输出用于调试</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># -Dfile：本地jar路径</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># gav: group, artifactId, verson</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># -Durl：仓库地址</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># -DrepositoryId：settings文件中的ID</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mvn</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -X</span><span style="color:#98C379;--shiki-dark:#98C379;"> deploy:deploy-file</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -DgroupId=tech.pdai</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -DartifactId=test-xxx</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -Dversion=1.1.0</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -Dpackaging=jar</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -Dfile=/xxxx/xxx.jar</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -Durl=http://nexus.pdai.tech/repository/releases/</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -DrepositoryId=nexus</span></span></code></pre></div><h2 id="方案二-使用systempath属性" tabindex="-1"><a class="header-anchor" href="#方案二-使用systempath属性"><span>方案二：使用systemPath属性</span></a></h2><blockquote><p>如果Jar无法放到maven仓库，即放在项目代码中，比如项目中libs文件夹中</p></blockquote><p>使用systemPath属性，<code>&lt;scope&gt;system&lt;/scope&gt;</code>, 其它<strong>gav三元组是可以随意填写的</strong>。</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;com.aliyun&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;taobao-sdk-java&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;1.0.0&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">scope</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;system&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">scope</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">systemPath</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;\${project.basedir}/libs/taobao-sdk-java-auto_1479188381469-20180831.jar&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">systemPath</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">dependency</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><ul><li><strong>SpringBoot JAR打包</strong></li></ul><p>springboot在打包的时候，调用spring-boot-maven-plugin，执行repackage把tomcat和resource，lib等合成一个新的jar。想要将系统jar打进去，必须配置includeSystemScope。最终会将lib放入BOOT-INF\\lib</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">build</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">plugins</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">plugin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;org.springframework.boot&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;spring-boot-maven-plugin&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">configuration</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">includeSystemScope</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;true&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">includeSystemScope</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">configuration</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">executions</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">execution</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">goals</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">goal</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;build-info&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">goal</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">goal</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;repackage&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">goal</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">goals</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">execution</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">executions</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">plugin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">plugins</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">build</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>SpringBoot War打包</strong></li></ul><p>使用mvn clean package命令打包时需要在pom文件加入以下webResources配置，并设置jar包在WEB-INF/lib目录下</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">plugin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;org.apache.maven.plugins&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">groupId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;maven-war-plugin&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">artifactId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;2.4&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">version</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">configuration</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">webResources</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">resource</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">directory</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;src/main/resources/libs/&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">directory</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">targetPath</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;WEB-INF/lib/&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">targetPath</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">includes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">include</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;**/*.jar&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">include</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">includes</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">resource</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">webResources</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">configuration</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">plugin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/spring/springboot/springboot-x-deploy-jar-3rd.html" target="_blank" rel="noopener noreferrer"><strong>SpringBoot应用部署 - 使用第三方JAR包</strong></a></p>`,19)]))}const o=a(B,[["render",r],["__file","springboot-x-deploy-jar-3rd.html.vue"]]),t=JSON.parse('{"path":"/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-x-deploy-jar-3rd.html","title":"SpringBoot应用部署 - 使用第三方JAR包","lang":"zh-CN","frontmatter":{"order":390,"created":"2024-05-14 07:56","updated":"2024-10-11 16:46","description":"SpringBoot应用部署 - 使用第三方JAR包 在项目中我们经常需要使用第三方的Jar，比如某些SDK，这些SDK没有直接发布到公开的maven仓库中，这种情况下如何使用这些三方JAR呢？本文提供最常用的两种方式。 方案一：安装到Maven仓库 如果有项目的Maven仓库，则推荐按照到的Maven仓库（比如私服）中。（最好不是本地的Maven仓库...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/Java%E6%A1%86%E6%9E%B6/SpringBoot/springboot-x-deploy-jar-3rd.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"SpringBoot应用部署 - 使用第三方JAR包"}],["meta",{"property":"og:description","content":"SpringBoot应用部署 - 使用第三方JAR包 在项目中我们经常需要使用第三方的Jar，比如某些SDK，这些SDK没有直接发布到公开的maven仓库中，这种情况下如何使用这些三方JAR呢？本文提供最常用的两种方式。 方案一：安装到Maven仓库 如果有项目的Maven仓库，则推荐按照到的Maven仓库（比如私服）中。（最好不是本地的Maven仓库..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot应用部署 - 使用第三方JAR包\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"方案一：安装到Maven仓库","slug":"方案一-安装到maven仓库","link":"#方案一-安装到maven仓库","children":[]},{"level":2,"title":"方案二：使用systemPath属性","slug":"方案二-使用systempath属性","link":"#方案二-使用systempath属性","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.72,"words":515},"filePathRelative":"posts/Java/Java框架/SpringBoot/springboot-x-deploy-jar-3rd.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>在项目中我们经常需要使用第三方的Jar，比如某些SDK，<strong>这些SDK没有直接发布到公开的maven仓库中</strong>，这种情况下如何使用这些三方JAR呢？本文提供最常用的两种方式。</p>\\n</blockquote>\\n<h2>方案一：安装到Maven仓库</h2>\\n<blockquote>\\n<p>如果有项目的Maven仓库，则推荐按照到的Maven仓库（比如私服）中。（最好不是本地的Maven仓库，因为还有CI环境需要集成。）</p>\\n</blockquote>\\n<p>配置Maven私服, server &amp; profile</p>\\n","autoDesc":true}');export{o as comp,t as data};
