---
aliases: '微服务 - 软件架构'
tags: 
cssclass:
source:
order: 20
category: [架构, 微服务]
created: "2024-04-24 14:35"
updated: "2024-04-30 12:27"
---



# 微服务 - 软件架构

![image-20221124221146555](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301227385.png)

- 前端通过api 请求 到服务端经过F5硬件负载均衡和nginx 软件负载均衡、走到我们服务网关集群
- 网关针对请求做路由转发到各个的服务集群、各服务之间通过dubbo进行通信
- 其中各服务通过nacos 做服务注册中心与配置中心、sentinel 做流控降级
- 底层采用redis、mysql、minio、es 、rabbitmq 做数据支持
- 通过skywalking 和 springboot admin、elk 做系统监控