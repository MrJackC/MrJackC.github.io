---
layout: post
title: 安装Nginx 服务器搭建小型视频服务器
category: server
tags: [server]
copyright: mrjason
keywords: server,服务搭建
---
1、安装Git

```css
yum -y install git
```

下载nginx-rtmp-module 

```css
[官方GitHub](https://github.com/arut/nginx-rtmp-module)
```

2、通过git clone 下载到服务器上

```css
git clone https://github.com/arut/nginx-rtmp-module.git
```

3、 安装

```css
yum -y install openssl openssl-devel
```

**安装Nginx服务器**   [**官网地址**](http://nginx.org/en/download.html)

下载Nginx解压，并添加rtmp和openssl支持



这里是 nginx-1.15.8 版本

```css
wget http://nginx.org/download/nginx-1.15.8.tar.gz
```

```css
tar -zxvf nginx-1.15.8.tar.gz
```

```css
cd nginx-1.15.8
```

添加rtmp和openssl支持

```css
./configure --add-module=/替换为自己的安装路径(path/to)/nginx-rtmp-module --with-http_ssl_module
```

```css
make && make install
```

如果已经安装过Nginx，只需要找到Nginx源码目录添加rtmp的支持即可



1.查看当前安装的Nginx版本

```css
/usr/local/nginx/sbin/nginx -v
```

查询结果：nginx version: nginx/1.15.8

2.再使用find命令查找其位置

```css
find / -name nginx-1.15.8
```

查询结果：/root/nginx-1.15.8

3.cd到查询到的源目录

```css
cd  /root/nginx-1.15.8
```

4.添加rtmp的支持(如果看到一个绿色的 configure 文件就说明查找对了)

```css
./configure --add-module=/替换为自己的安装路径(path/to)/nginx-rtmp-module
```

```css
make && make install
```

5.启动nignx

```css
/usr/local/nginx/sbin/nginx
```

```css
./nginx -s reload
```

默认是80端口，一般情况下都是被占用的，所以修改端口，到nginx.conf文件中修改文件即可。

如果被占用。 查看端口



```css
lsof -i tcp:8080
```

根据端口PID，kill进程，下面的PID需更换为自己机器的PID



```css
kill 9603
```

![img](https://ws3.sinaimg.cn/large/006tNc79ly1g2ymbrybj6j31ea0fsgnb.jpg)

nginx访问成功

**修改Nginx配置文件nginx.conf，rtmp配置**

使用vim命令打开nginx.conf，输入i进入编辑状态

```css
vim /usr/local/nginx/conf/nginx.conf
```

直接滚到最后一行, 在最后一个}(即最后的空白处, 没有任何{})后面添加



\# 在http节点后面加上rtmp配置：

```css
rtmp {  
	server {  
		listen 1935;  #监听的端口
		chunk_size 4000;  

		application hls {  #rtmp推流请求路径

		live on;	
		record off;

			}  

		}  
}
```

参数说明



rtmp是协议名称

server 说明内部中是服务器相关配置

listen 监听的端口号, rtmp协议的默认端口号是1935

application 访问的应用路径是 hls

live on; 开启实时

record off; 不记录数据

最后保存退出 点esc 输入:wq 回车保存，并重启nginx



```css
/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
```

**服务器开放1935端口或关闭防火墙**

//CentOS7 默认使用firewalld防火墙

//关闭firewall

```css
systemctl stop firewalld.service
```

//禁止firewall开机启动

```css
systemctl disable firewalld.service
```

//查看防火墙状态(关闭后显示not running，开启后显示 running)

```css
firewall-cmd --state
```



//iptables开放端口

```css
/sbin/iptables -I INPUT -p tcp --dport 1935 -j ACCEPT
```

//保存配置

```css
/etc/rc.d/init.d/iptables save
```

//重启服务

```css
/etc/rc.d/init.d/iptables restart
```

//查看端口开放状态

```css
/etc/init.d/iptables status
```

**安装FFmpeg**

安装EPEL Release，因为安装需要使用其他的repo源，所以需要EPEL支持

```css
yum install -y epel-release
```

如果出现缺少Code提示，可以：

```css
sudo rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7
```

安装完成之后，可以查看是否安装成功

```css
yum repolist
```

安装Nux-Dextop源，导入一个Code

```css
sudo rpm --import http://li.nux.ro/download/nux/RPM-GPG-KEY-nux.ro
```

```css
sudo rpm -Uvh http://li.nux.ro/download/nux/dextop/el7/x86_64/nux-dextop-release-0-1.el7.nux.noarch.rpm
```

使用yum ffmpeg，这个安装耗时较长

```css
yum install -y ffmpeg
```

安装完成后检查ffmpeg 版本

```css
ffmpeg -version
```

出现下图，证明安装成功

![img](https://ws4.sinaimg.cn/large/006tNc79ly1g2ymbskmkij30on0hzgs3.jpg)



**配置HLS**

使用vim命令打开nginx.conf，输入i进入编辑状态

```css
vim /usr/local/nginx/conf/nginx.conf
```

//修改rtmp配置

```css
rtmp {

server {
		listen 1935; #监听的端口
		chunk_size 4000;
		application hls { #rtmp推流请求路径
		live on;
		hls on;
		hls_path /home/hls/test; #视频流文件目录(自己创建)
		hls_fragment 3s;
			}
	}
}
```

//修改server的配置



```css
server

{

​        listen 80 default_server;

​        server_name 绑定的域名;

​        index index.html index.htm index.php;

​        root  /home/wwwroot/default;

​        \#error_page   404   /404.html;

​          

​        \#加入hls支持

​        location /hls {

​            types {

​                application/vnd.apple.mpegurl m3u8;

​                \#或 application/x-mpegURL

​                video/mp2t ts;

​            }

​            alias /home/hls/test/;  #视频流文件目录(自己创建)

​            expires -1;

​            add_header Cache-Control no-cache;

​        }

​        \#end...

​         

​        \#以下代码省略.....

}
```

配置完成后重启Nginx



ffmpeg 进行推流

```css
ffmpeg -re -i /home/wwwroot/ziyuan/1546494994873625.mp4 -vcodec copy -f flv rtmp://192.168.1.40:1935/hls/video
```

![img](https:////note.youdao.com/src/DC1B35BE7C824AA8A36796B64CABDDB2)



推流成功



VLC进行拉流

```css
rtmp://192.168.1.40:1935/hls/video
```

![img](https://ws2.sinaimg.cn/large/006tNc79ly1g2ymcxvl3zj31660rrndb.jpg)



服务端没有推流。 



![img](https://ws2.sinaimg.cn/large/006tNc79ly1g2ymcy4az5j31i70u0jz2.jpg)



服务端开始推流

![img](https://ws1.sinaimg.cn/large/006tNc79ly1g2ymcx740vj30mg0cuab5.jpg)





![img](https://ws1.sinaimg.cn/large/006tNc79ly1g2ymbro1tjj30n60dtaet.jpg)



本人nginx.conf 配置

```css
\#user  nobody;

worker_processes  1;

\#error_log  logs/error.log;

\#error_log  logs/error.log  notice;

\#error_log  logs/error.log  info;

\#pid        logs/nginx.pid;

events {

​    worker_connections  1024;

}

http {

​    include       mime.types;

​    default_type  application/octet-stream;

​    \#log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '

​    \#                  '$status $body_bytes_sent "$http_referer" '

​    \#                  '"$http_user_agent" "$http_x_forwarded_for"';

​    \#access_log  logs/access.log  main;

​    sendfile        on;

​    \#tcp_nopush     on;

​    \#keepalive_timeout  0;

​    keepalive_timeout  65;

​    \#gzip  on;

​    server {

​        listen       8080;

​        server_name  localhost;

​        \#root  /home/wwwroot;

​      \#  root /user/local/nginx/html1;

​        \#charset koi8-r;

charset utf-8; # 避免中文乱码

​        \#access_log  logs/host.access.log  main;

​        location / {

​           autoindex on;             #开启索引功能  

​            autoindex_exact_size off; # 关闭计算文件确切大小（单位bytes），只显示大概大小（单位kb、mb、gb）  

​            autoindex_localtime on;   # 显示本机时间而非 GMT 时间  

​            root /home/tc;

​            \#root   html;

​         index  index.html index.htm;

   add_header Cache-Control "no-cache, must-revalidate";

​        }

​        location /hls {

​            types {

​               \# application/vnd.apple.mpegurl m3u8;

​                \#或 application/x-mpegURL     

​                \#  video/mp2t ts;

​                                            }

​                 \# alias /home/hls/video/;  #视频流文件目录(自己创建)

​                 \# expires -1;

​                 \# add_header Cache-Control no-cache;

​                                                                                        }

​        location /stat.xsl {

​            root /root/nginx/nginx-rtmp-module/;

​        }

​        \#error_page  404              /404.html;

​        \# redirect server error pages to the static page /50x.html

​        \#

​        error_page   500 502 503 504  /50x.html;

​        location = /50x.html {

​            root   html;

​        }

​        \# proxy the PHP scripts to Apache listening on 127.0.0.1:80

​        \#

​        \#location ~ \.php$ {

​        \#    proxy_pass   http://127.0.0.1;

​        \#}

​        \# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000

​        \#

​        \#location ~ \.php$ {

​        \#    root           html;

​        \#    fastcgi_pass   127.0.0.1:9000;

​        \#    fastcgi_index  index.php;

​        \#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;

​        \#    include        fastcgi_params;

​        \#}

​        \# deny access to .htaccess files, if Apache's document root

​        \# concurs with nginx's one

​        \#

​        \#location ~ /\.ht {

​        \#    deny  all;

​        \#}

​      

​       }

​    \# another virtual host using mix of IP-, name-, and port-based configuration

​    \#

​    \#server {

​    \#    listen       8000;

​    \#    listen       somename:8080;

​    \#    server_name  somename  alias  another.alias;

​    \#    location / {

​    \#        root   html;

​    \#        index  index.html index.htm;

​    \#    }

​    \#}

​    \# HTTPS server

​    \#

​    \#server {

​    \#    listen       443 ssl;

​    \#    server_name  localhost;

​    \#    ssl_certificate      cert.pem;

​    \#    ssl_certificate_key  cert.key;

​    \#    ssl_session_cache    shared:SSL:1m;

​    \#    ssl_session_timeout  5m;

​    \#    ssl_ciphers  HIGH:!aNULL:!MD5;

​    \#    ssl_prefer_server_ciphers  on;

​    \#    location / {

​    \#        root   html;

​    \#        index  index.html index.htm;

​    \#    }

​    \#}

}

rtmp {  

​    server {  

​        listen 1935;  #监听的端口

​        chunk_size 4000;  

​         

​        application live{

​         live on;

​        }

​        application remote{

​        live on;

​        \# pull rtmp://192.168.1.40:8080/live;

​        }

​        application hls {  #rtmp推流请求路径

​            live on;

​            record off;

​            hls_path /home/hls/video; #视频流文件目录(自己创建)

​            hls_fragment 3s;

​     }  

​    }  

}

纯净版





worker_processes  1;

events {

   worker_connections  1024;

}

http {

​    include       mime.types;

​    default_type  application/octet-stream;

​    sendfile        on;

​    keepalive_timeout  65;

​     server {

​        listen       8080;

​        server_name  localhost;

​        

​        charset utf-8;         

​        location / {

​           autoindex on;             

​           autoindex_exact_size off;  

​           autoindex_localtime on;

​           root /home/tc;

​          

​           index  index.html index.htm;

​           add_header Cache-Control "no-cache, must-revalidate";

​           }

​     location /hls {

​            types {

​               application/vnd.apple.mpegurl m3u8;

​                 

​               video/mp2t ts;                                           

​         }

​             alias /home/hls/video/;

​                expires -1;

​                add_header Cache-Control no-cache;

​        }

​     location /stat.xsl {

​            root /root/nginx/nginx-rtmp-module/;

​        }

​     

​       

​     error_page   500 502 503 504  /50x.html;

​     location = /50x.html {

​            root   html;

​             }

​     }

}

rtmp {  

​    server {  

​        listen 1935;  

​         

​        application live{

​         live on;

​        }

​        application remote{

​        live on;

​        }

​        application hls {

​              live on;

​              record off;

​              hls_path /home/hls/video/;

​              hls_fragment 3s;

​        }  

​    }  

}

```





参考文献  

- [文献1]<https://blog.qiaohewei.cc/?p=485>
- [文献2]<https://www.cnblogs.com/52fhy/p/10226651.html>
- [文献3<https://segmentfault.com/a/1190000012899673>
- [文献4]<https://aenes.com/post/ffmpeg.html>
- [文献5<https://blog.csdn.net/u013510614/article/details/50171241>

远程复制文件  <https://www.cnblogs.com/webnote/p/5877920.html>

命令：  

scp /Users/tc/Desktop/录制视频.mov  -r root@192.168.1.40:/home/wwwroot/ziyuan

报错信息：<https://blog.csdn.net/lh756437907/article/details/52151000>

  转编码

ffmpeg -i input.flv -strict -2 output.mp4