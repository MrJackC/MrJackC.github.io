import{_ as e,c as p,a as s,o as t}from"./app-CZJgH_ea.js";const a={};function r(i,o){return t(),p("div",null,o[0]||(o[0]=[s('<h1 id="hdfs-shell常用命令整理" tabindex="-1"><a class="header-anchor" href="#hdfs-shell常用命令整理"><span>HDFS shell常用命令整理</span></a></h1><h2 id="_1-启动与关闭hadoop集群" tabindex="-1"><a class="header-anchor" href="#_1-启动与关闭hadoop集群"><span>1.启动与关闭Hadoop集群</span></a></h2><blockquote><p>sbin/start-dfs.sh</p><p>sbin/start-yarn.sh</p><p>sbin/stop-dfs.sh</p><p>sbin/stop-yarn.sh</p></blockquote><h2 id="_2-目录相关操作" tabindex="-1"><a class="header-anchor" href="#_2-目录相关操作"><span>2.目录相关操作</span></a></h2><blockquote><p>hadoop fs -ls /dir</p><p>hadoop fs -mkdir -p /dir1/dir2</p><p>hadoop fs -mv /file /dir1/dir2</p><p>hadoop fs -rm /dir1/dir2/file</p><p>hadoop fs -rmdir /dir</p></blockquote><h2 id="_3-文件移动操作" tabindex="-1"><a class="header-anchor" href="#_3-文件移动操作"><span>3.文件移动操作</span></a></h2><blockquote><p>① 从本地上传到HDFS</p><p>hadoop fs -moveFromLocal ./file /dir1/dir2</p><p>hadoop fs -copyFromLocal file /dir1/dir2</p><p>hadoop fs -put file /dir1/dir2</p><p>②从HDFS下载到本地</p><p>hadoop fs -copyToLocal file /dir1/dir2</p><p>hadoop fs -get file /dir1/dir2</p><p>hadoop fs -getmerge file /dir1/dir2</p><p>③文件内部操作</p><p>hadoop fs -cat /file</p><p>hadoop fs -chmod/chown/chgrp</p><p>hadoop fs -cp /file /file</p><p>hadoop fs -mv /file /file</p></blockquote>',7)]))}const n=e(a,[["render",r],["__file","HDFS shell常用命令整理.html.vue"]]),l=JSON.parse('{"path":"/posts/BigData/05_%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86%E5%B1%82/01_%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8/01_HDFS/HDFS%20shell%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%E6%95%B4%E7%90%86.html","title":"HDFS shell常用命令整理","lang":"zh-CN","frontmatter":{"description":"HDFS shell常用命令整理 1.启动与关闭Hadoop集群 sbin/start-dfs.sh sbin/start-yarn.sh sbin/stop-dfs.sh sbin/stop-yarn.sh 2.目录相关操作 hadoop fs -ls /dir hadoop fs -mkdir -p /dir1/dir2 hadoop fs -mv...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/BigData/05_%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86%E5%B1%82/01_%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8/01_HDFS/HDFS%20shell%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%E6%95%B4%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"HDFS shell常用命令整理"}],["meta",{"property":"og:description","content":"HDFS shell常用命令整理 1.启动与关闭Hadoop集群 sbin/start-dfs.sh sbin/start-yarn.sh sbin/stop-dfs.sh sbin/stop-yarn.sh 2.目录相关操作 hadoop fs -ls /dir hadoop fs -mkdir -p /dir1/dir2 hadoop fs -mv..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HDFS shell常用命令整理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1.启动与关闭Hadoop集群","slug":"_1-启动与关闭hadoop集群","link":"#_1-启动与关闭hadoop集群","children":[]},{"level":2,"title":"2.目录相关操作","slug":"_2-目录相关操作","link":"#_2-目录相关操作","children":[]},{"level":2,"title":"3.文件移动操作","slug":"_3-文件移动操作","link":"#_3-文件移动操作","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.43,"words":128},"filePathRelative":"posts/BigData/05_数据处理层/01_数据存储/01_HDFS/HDFS shell常用命令整理.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1.启动与关闭Hadoop集群</h2>\\n<blockquote>\\n<p>sbin/start-dfs.sh</p>\\n<p>sbin/start-yarn.sh</p>\\n<p>sbin/stop-dfs.sh</p>\\n<p>sbin/stop-yarn.sh</p>\\n</blockquote>\\n<h2>2.目录相关操作</h2>\\n<blockquote>\\n<p>hadoop fs -ls /dir</p>\\n<p>hadoop fs -mkdir -p /dir1/dir2</p>\\n<p>hadoop fs -mv /file /dir1/dir2</p>\\n<p>hadoop fs -rm /dir1/dir2/file</p>\\n<p>hadoop fs -rmdir /dir</p>\\n</blockquote>","autoDesc":true}');export{n as comp,l as data};
