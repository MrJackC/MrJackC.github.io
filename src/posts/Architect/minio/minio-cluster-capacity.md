---
aliases: 'Minio部署 - MinIO集群扩容方法'
tags: 
cssclass:
source:
order: 520
category: [Minio]
created: "2024-04-24 14:35"
updated: "2024-04-30 12:34"
---

# Minio部署 - MinIO集群扩容方法

## 1. 简介

MinIO是采用Golang实现的高性能对象存储系统，基于Apache License V2.0进行开源，适用于海量非结构化数据存储，如图片、视频、镜像等。MinIO以极简主义为指导进行设计，追求极致的维护精简性和卓越的读写性能表现。据MinIO官方数据，在标准硬件上，MinIO的读写速率可分别高达183GB/s和171GB/s。

MinIO支持以单点、分布式集群等方式进行部署。其中，MinIO分布式集群是指在多个服务器节点均部署MinIO服务，并将其组建为分布式存储集群，对外提供标准S3接口以进行统一访问，其架构如图2-1所示。

![image-20220722211312080](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301234380.png)

MinIO集群采用去中心化无共享架构，各节点间为对等关系，连接至任一节点均可实现对集群的访问，并通过DNS轮询等方式实现节点间的负载均衡。这种节点间保持对等关系的设计并非最常见的分布式集群架构。当前大多数的分布式存储集群，其节点往往可划分为多类角色，例如负责连接并处理外部应用请求的访问节点、负责存储元数据的管理节点、实际的数据存储节点等。MinIO则与之不同，MinIO集群中的所有节点都同时承担了多种角色，集元数据存储、数据存储、应用访问等功能于一体，真正实现了去中心化和所有节点的完全对等。其优势在于有效地减少了集群内的复杂调度过程以及因中心节点带来的故障风险和性能瓶颈。

数据对象在MinIO集群中进行存储时，先进行纠删分片，后打散存储在各硬盘上。具体为：

1. MinIO自动在集群内生成若干纠删组，每个纠删组包含一组硬盘，其数量通常为4至16块；
2. 对数据对象进行分片，默认策略是得到相同数量的数据分片和校验分片；
3. 而后通过哈希算法计算出该数据对象对应的纠删组，并将数据和校验分片存储至纠删组内的硬盘上。

![image-20220722211726136](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301234416.png)

如图2-2所示，假设某MinIO集群内纠删组包含4块硬盘，某数据对象名为MyObject，其隶属存储桶名为MyBucket，哈希计算得到对应的纠删组为Disk 1~4。那么在Disk 1~4的数据路径下，都会生成MyBucket/MyObject子路径，子路径中包含2个文件，分别为存储元数据信息的xl.json和MyObject对象在该盘上的第一个分片part.1。其中，xl表示MinIO中数据对象的默认存储格式。

## 2. 集群扩容方法

常见的集群扩容方法可分为两类：水平扩容和垂直扩容。**水平扩容，一般指通过增加节点数扩展系统性能；而垂直扩容则指提升各节点自身的性能，例如增加节点的磁盘存储空间**。直接采用垂直扩容方式扩容MinIO集群的节点磁盘空间，会为集群运行带来若干问题，官方也并不推荐。因此本文主要介绍MinIO的两种水平扩容方式：对等扩容和联邦扩容。

### 2.1 对等扩容

首先，MinIO的极简设计理念使得MinIO分布式集群**并不支持向集群中添加单个节点并进行自动调节的扩容方式**，这是**因为加入单个节点后所引发的数据均衡以及纠删组划分等问题会为整个集群带来复杂的调度和处理过程**，并不利于维护。因此，MinIO提供了一种对等扩容的方式，即要求增加的节点数和磁盘数均需与原集群保持对等。

#### 2.1.1 示例

例如原集群包含4个节点4块磁盘，则在扩容时必须同样增加4个节点4块磁盘（或为其倍数），以便系统维持相同的数据冗余SLA，从而极大地降低扩容的复杂性。如上例，在扩容后，MinIO集群并不会对全部的8个节点进行完全的数据均衡，而是将原本的4个节点视作一个区域，新加入的4节点视作另一区域，当有新对象上传时，集群将依据各区域的可用空间比例确定存放区域，在各区域内仍旧通过哈希算法确定对应的纠删组进行最终的存放。此外，集群进行一次对等扩容后，还可依据扩容规则继续进行对等扩容，但出于安全性考虑，集群的最大节点数一般不得超过32个。

#### 2.1.2 优缺点

对等扩容的优点在于配置操作简单易行，通过一条命令即可完成扩容（注意：推荐使用连续的节点IP，并参照MinIO官网在扩容命令中使用{}）。而对等扩容的局限性在于：①扩容需重启；②扩容存在限制，集群节点数一般不超过32个，这是由于MinIO集群通过分布式锁保证强一致性，若集群节点数过大，维护强一致性将带来性能问题。

### **2.2 联邦扩容**

MinIO官方提供了另一种扩容机制——联邦扩容，即通过引入etcd，将多个MinIO分布式集群在逻辑上组成一个联邦，对外以一个整体提供服务，并提供统一的命名空间。MinIO联邦集群的架构如图3-1所示。

![image-20220722212622430](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301234435.png)

其中，etcd是一个开源的分布式键值存储数据库，在联邦中用于记录存储桶IP地址。联邦内的各个集群其数据存储以及一致性维护仍由各集群自行管理，联邦只是对外提供一个整体逻辑视图。通过连接到联邦中任一集群的任一节点，可以查询并访问联邦内所有集群的全部数据，由此获得了逻辑上的空间扩大感。但实际上，对于一个外部应用访问，联邦需依赖etcd定位到存储桶的实际存储节点，再进行数据访问，联邦则对外屏蔽了桶IP查找和定位过程，从而在逻辑上对外形成了一个统一整体。因此，etcd实际上起到了类似路由寻址的效果。

#### 2.2.1 MinIO联邦集群的数据访问机制

MinIO联邦集群的数据访问机制具体如下：

①客户端应用向联邦集群发送创建存储桶请求，桶名为bucket1；

②联邦会将bucket1实际所在的集群节点IP地址写入etcd中，例如bucket1实际将存储于联邦中的集群1上，而集群1包含2个节点，其节点IP地址分别为192.168.1.103和192.168.1.104，则etcd中将写入如下两条记录：

![image-20220722212921098](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301234462.png)

③客户端应用向联邦请求上传1个对象至bucket1；

④联邦会先查询etcd，定位到bucket1的实际存储节点103和104，再进行相应的上传操作。

#### 2.2.2 优缺点

相较于对等扩容，联邦扩容的优点在于：①联邦中的各集群不要求节点数和磁盘数的对等；②联邦可以无限扩展，不断加入新集群；③若联邦中某个集群出现故障，该故障将不影响联邦中的其他集群提供服务。其缺点为需要额外引入etcd，且配置过程较为复杂。

因此，本文将简要介绍MinIO联邦扩容配置方法。

## 3. **联邦扩容部署操作**

本文针对联邦扩容，提供参考配置操作如下：

假定将两个MinIO集群组成联邦，每个集群包含2个节点4块磁盘。etcd建议配置为3节点集群，以避免单点故障。具体部署信息如表4-1所示。

![image-20220722213126008](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301234485.png)

**第一步：搭建etcd集群。**在http://github.com/etcd-io/etcd/releases中下载合适版本进行解压安装，创建配置文件etcd.conf，以192.168.1.107为例，配置内容如下：

![image-20220722213157388](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301234508.png)

在192.168.1.108和192.168.1.109上同样进行上述配置。需注意：配置文件为YAML格式，参数initial-cluster必须与各节点上配置的name参数以及initial-advertise-peer-urls参数进行对应。

然后，在各节点分别执行命令./etcd --config-file /home/user/etcd/etcd.conf进行启动，集群开始运行。在任一节点执行命令etcdctl member list，若能显示三个节点信息，则etcd集群部署成功。

**第二步：逐一搭建各MinIO集群。**建议在搭建新集群时就直接加入到联邦，以便后续的扩容操作。以集群1为例，其上192.168.1.103和192.168.1.104节点的配置和启动命令如下：

![image-20220722213310216](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301234526.png)

注意：MinIO_ETCD_ENDPOINTS参数需与搭建的ETCD集群所有节点IP相对应；MINIO_PUBLIC_IPS参数则为该集群的所有节点IP，如上述示例中对应集群1的2个节点IP；MINIO_DOMAIN参数必须进行配置，即使你并不通过域名访问存储桶，否则联邦无法生效。

对集群2的各节点同样添加上述配置项。启动后，进行联邦测试

首先，连接至集群1中的192.168.1.103节点，创建存储桶bucket1，并上传1个对象；然后连接至任一etcd节点，通过命令 ETCDCTL_API=3 etcdctl get --from-key '' 查看etcd中是否已写入bucket1的相关记录；最后连接至集群2中的192.168.1.105节点，测试是否能访问到bucket1及桶内对象。若能访问，则联邦模式组建成功。

后续若需进行扩容，可参照上述配置方式分别部署集群3、集群4、集群n，由于配置了相同的etcd地址，这些集群将自动加入联邦，从而实现集群的无限扩展。

## 4. 总结

本文基于MinIO开源对象存储系统的分布式集群模式，简要介绍了其常见的集群扩容方法，旨在为满足实际需求，在进行扩容操作时提供一定参考。**建议优先考虑联邦扩容**，但在原集群节点数和磁盘数较少、系统数据量增长较慢、后续扩容操作不频繁、服务可中断的情况下，可考虑对等扩容。此外，可考虑在首次进行单个集群部署时就引入etcd联邦模式，这样后续进行联邦扩容时能简化很多流程。

## 参考文章

[漫谈 MinIO 集群扩容方法](https://mp.weixin.qq.com/s/0W7_UaqeSUfSnG9wr2nywA)