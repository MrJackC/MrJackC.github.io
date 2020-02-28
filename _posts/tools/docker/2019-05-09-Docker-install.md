---
layout: post
title: Docker(二)：Docker在Mac平台下的安装
category: tools
tags: [docker]
copyright: mrjason
keywords: docker
---

## Docker Mac 下的安装
## 1、百度Docker 进入Docker官网

![官网](http://ww1.sinaimg.cn/large/9d229b41ly1gc1lkk7iupj20u00hp40b.jpg)

注册成功后到了下载界面，下载到Mac 后双击dmg文件，将Docker图标拖到Application中及完成Docker的安装。

使用Mac的命令行工具，输入 :

> docker

查看是否安装成功！

![image-20190506114606462](http://ws3.sinaimg.cn/large/006tNc79ly1g2v2hcse9kj30u60kdadt.jpg)

查看docker版本号,输入

> docker -v

查看版本号！

## Docker 下安装服务器所需服务

##  一、Docker 安装MySQL服务

## 1、MYSQL

查找Docker Hub上的mysql镜像

>docker search mysql

![image-20190506115511810](http://upload-images.jianshu.io/upload_images/16014890-dc0af9d61d75f53c.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这里我们拉取官方的镜像,标签为5.7

> docker pull mysql:5.7

![image-20190506115655512](http://upload-images.jianshu.io/upload_images/16014890-56c0b902eb0099e3.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

安装完成

![image-20190506115801925](http://upload-images.jianshu.io/upload_images/16014890-e2e0db839676f29e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

等待下载完成后，我们就可以在本地镜像列表里查到REPOSITORY为mysql,标签为5.7的镜像。

> docker images |grep mysql

![image-20190506115833001](http://upload-images.jianshu.io/upload_images/16014890-f913e796a824bbd3.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

启动mysql镜像
> docker run --name mysql -p3306:3306 -e MYSQL_ROOT_PASSWORD=525252 -d mysql:5.7

-name:容器名称mysql

-p：将端口号映射到主机

最后设置密码525252

## 二、Docker 安装Nginx服务

## 2、Nginx

查找Docker Hub上的Nginx镜像

> docker search nginx

这里我们拉取官方的镜像

> docker pull nginx

![image-20190506143054221](http://upload-images.jianshu.io/upload_images/16014890-e747fc58b69a98ad.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

等待下载完成后，我们就可以在本地镜像列表里查到 REPOSITORY 为 nginx 的镜像。

> docker images nginx

![image-20190506143237853](http://upload-images.jianshu.io/upload_images/16014890-81c3fc5c12461001.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 三、Docker 安装Tomcat服务

## 3、Tomcat

查找Docker Hub上的tomcat镜像

> docker search tomcat

![image-20190506145128285](http://upload-images.jianshu.io/upload_images/16014890-ec56070995b2128b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这里我们拉取官方的镜像

> docker pull tomcat

![image-20190506150410096](http://upload-images.jianshu.io/upload_images/16014890-f0e8eb7ed6e3cf9e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

等待下载完成后，我们就可以在本地镜像列表里查到REPOSITORY为tomcat的镜像。

> docker images|grep tomcat

![image-20190506150702387](http://upload-images.jianshu.io/upload_images/16014890-754cd54418f4fee0.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 四、 Docker 安装Redis服务

## 4、Redis

查找Docker Hub上的redis镜像

> docker search  redis

![image-20190506153922896](http://upload-images.jianshu.io/upload_images/16014890-4005b557eda10245.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这里我们拉取官方的镜像,标签为3.2

> docker pull  redis:3.2

![image-20190506154601096](http://upload-images.jianshu.io/upload_images/16014890-d33c94807b424853.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

等待下载完成后，我们就可以在本地镜像列表里查到REPOSITORY为redis,标签为3.2的镜像。

> docker images redis

![image-20190506154614188](http://upload-images.jianshu.io/upload_images/16014890-f0616ff24694e417.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

运行镜像
> docker run -p 6379:6379 -d redis:3.2 redis-server

## 五 、Docker 安装Java服务

## 5、Java

查找Docker Hub上的Java镜像

> docker search java 

![image-20190506160521180](http://upload-images.jianshu.io/upload_images/16014890-44ce5a504c3ff36c.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这里我们拉取官方的镜像.

> docker pull java

![image-20190506160842904](http://upload-images.jianshu.io/upload_images/16014890-585212e6c627bd03.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

等待下载完成后，我们就可以在本地镜像列表里查到REPOSITORY为Java,标签为latest的镜像。

![image-20190506160928568](http://upload-images.jianshu.io/upload_images/16014890-ce2d24643e8749d1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image-20190506161518098](http://upload-images.jianshu.io/upload_images/16014890-5418a3882505d9cf.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

切换为Java8 版本。

## 六 、Docker 安装ES服务
## 6、elasticsearch
> docker search elasticsearch

> docker pull elasticsearch:6.8.2

运行镜像
> docker run -d --name elasticsearch --net somenetwork -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:6.8.2

## 安装最新的elasticsearch
1.	下载ES镜像问题
docker pull elasticsearch
2.	运行ES
docker run -it --name elasticsearch -d -p 9200:9200 -p 9300:9300 -p 5601:5601 elasticsearch
3.	测试运行结果
http://192.168.1.30:9200/


> 注意：-p 5601:5601 是kibana的端口地址 (我这里kibana的container共用elasticsearch的网络，所以这样设置
## 七、Docker安装Kibana
## 7、安装Kibana

> docker run -it -d -e ELASTICSEARCH_URL=http://127.0.0.1:9200 --name kibana --network=container:elasticsearch kibana

测试运行结果
> http://192.168.1.30:5601/app/kibana
