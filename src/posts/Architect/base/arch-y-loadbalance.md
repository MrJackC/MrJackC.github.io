---
aliases: '架构之高可用: 负载均衡'
tags: 
cssclass:
source:
order: 91
category: [架构]
created: "2024-04-24 14:35"
updated: "2024-04-30 09:13"
---

# 架构之高可用: 负载均衡

>负载均衡（Load Balance），意思是将负载（工作任务，访问请求）进行平衡、分摊到多个操作单元（服务器，组件）上进行执行。是解决高性能，单点故障（高可用），扩展性（水平伸缩）的终极解决方案。

## 1. 简介

负载均衡（Load Balance），意思是将负载（工作任务，访问请求）进行平衡、分摊到多个操作单元（服务器，组件）上进行执行。是解决高性能，单点故障（高可用），扩展性（水平伸缩）的终极解决方案。

>- 从提高单机性能到分布式解决
>
>面对大量用户访问、高并发请求，海量数据，可以使用高性能的服务器、大型数据库，存储设备，高性能Web服务器，采用高效率的编程语言比如(Go,Scala)等，当单机容量达到极限时，我们需要考虑业务拆分和分布式部署，来解决大型网站访问量大，并发量高，海量数据的问题。
>
>- 分布式解决统一入口问题
>
>从单机网站到分布式网站，很重要的区别是业务拆分和分布式部署，将应用拆分后，部署到不同的机器上，实现大规模分布式系统。分布式和业务拆分解决了，从集中到分布的问题，但是每个部署的独立业务还存在单点的问题和访问统一入口问题，为解决单点故障，我们可以采取冗余的方式。将相同的应用部署到多台机器上。解决访问统一入口问题，我们可以在集群前面增加负载均衡设备，实现流量分发。

## 2. 负载均衡原理

系统的扩展可分为纵向（垂直）扩展和横向（水平）扩展。

- 纵向扩展
  - 从单机的角度通过增加硬件处理能力，比如CPU处理能力，内存容量，磁盘等方面，实现服务器处理能力的提升
  - 不能满足大型分布式系统（网站），大流量，高并发，海量数据的问题。

  因此需要采用横向扩展的方式，

- 横向扩展
  - 通过添加机器来满足大型网站服务的处理能力。
  - 比如：一台机器不能满足，则增加两台或者多台机器，共同承担访问压力。这就是典型的集群和负载均衡架构：如下图：


![image-20220701210221965](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300940313.png)

### 2.1 **负载均衡的方式**

- **应用集群**：将同一应用部署到多台机器上，组成处理集群，接收负载均衡设备分发的请求，进行处理，并返回相应数据。
- **负载均衡设备**：将用户访问的请求，根据负载均衡算法，分发到集群中的一台处理服务器。（一种把网络请求分散到一个服务器集群中的可用服务器上去的设备）

### 2.2 **负载均衡的作用**（解决的问题）：

1. 解决并发压力，提高应用处理性能（增加吞吐量，加强网络处理能力）；
2. 提供故障转移，实现高可用；
3. 通过添加或减少服务器数量，提供网站伸缩性（扩展性）；
4. 安全防护；（负载均衡设备上做一些过滤，黑白名单等处理）

## 3. 负载均衡分类

### 3.1 DNS 负载均衡

思路是 DNS 解析同一个域名时可以返回不同的IP地址。

用来实现地理级别的均衡，例如，北方用户访问北京机房、南方用户访问深圳机房。

- 优点：
  - 简单，成本低，直接交给DNS服务器处理即可，无需自己维护。
  - 就近访问，提升访问速度。
- 缺点：
  - DNS缓存时间较长，更新不及时。
  - DNS控制权在域名商那里，无法根据业务特点定制扩展。

### 3.2 硬件负载均衡

通过单独的硬件设备实现负载均衡，**典型设备例如 F5**、A10。

- 优点：
  - 功能强大，支持各级负载均衡，支持各种负载均衡算法，支持全局负载均衡。
  - 性能强大，可以支持100万以上的并发。
  - 稳定性高。
  - 支持安全防护，除了负载均衡的功能，还有防火墙、防DDoS攻击等安全功能。
- 缺点：
  - 昂贵，价格几万甚至数十万。
  - 扩展能力差。

### 3.3 软件负载均衡

通过软件实现，例如我们熟悉的 Nginx（7层负载均衡） 和 LVS（4层负载均衡）。

> 和硬件负载均衡相比，性能差了很多，**Nginx 能支持5万/秒，而F5是百万级**，但价格也便宜了很多。

- 优点：
  - 简单
  - 便宜
  - 灵活
- 缺点：
  - 性能一般
  - 没有防火墙等安全功能

## 4. 负载均衡的典型架构

DNS、硬件、软件这3中方式可以组合使用，基本原则：

- DNS方式用于实现**地理级别**的负载均衡。
- 硬件方式用于实现**集群级别**的负载均衡。
- 软件方式用于实现**机器级别**的负载均衡。


![image-20220701211454617](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404300940351.png)
## 5. 负载均衡算法

### 5.1 轮询

负载均衡系统接收到请求后，按照顺序轮流分配给服务器。

这种方式非常简单，只管按顺序分配，至于服务器当前负载情况、硬件能力等都不关心，只要服务器还能工作，就可以分配，除非服务器挂了。

### 5.2 加权轮询

是轮询方式的一种改进，轮询方式是无差别分配，但实际服务器的处理能力是有差异的，所以需要区别对待。

为服务器设置权值，权值高的就多分配点。

### 5.3 负载最低优先

将任务分配给当前负载最低的服务器。

例如 LVS 可以根据“连接数”判断服务器状态，NGINX 可以根据“HTTP请求数”来判断。

这种方式比轮询高级很多，可以感知服务器的状态了，但其复杂度也大大提高了，要收集统计服务器的负载信息。

### 5.4 性能最优

优先将任务分配给处理速度最快的服务器，来达到最快响应客户端的目的。

此方式也是感知服务器的状态，标准是响应时间。

需要收集分析服务器的响应时间，这个工作本身消耗也不小，所以采用采样的方式，不统计所有任务的响应时间，统计一个周期（例如 10秒/1分钟/5分钟）内的状态。

优缺点与 负载最低优先 相同。

### 5.5 Hash

对请求中的关键信息（如IP）进行hash计算，hash值相同的请求分配到同一台服务器，例如业务中希望同一用户的请求都由同一台服务器来处理。

## 参考文章

[负载均衡的分类及算法](https://blog.51cto.com/u_15127579/2722198)

[架构之高可用：负载均衡](https://pdai.tech/md/arch/arch-y-loadbalance.html)