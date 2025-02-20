---
aliases: '批量生成redis测试数据方法'
tags: 
cssclass:
source:
created: "2024-02-22 10:49"
updated: "2024-03-13 10:27"
---
# 批量生成redis测试数据方法

## 1. Linux Bash下面执行

```shell
for((i=1;i<=20000000;i++)); do echo "set k$i v$i" >> /tmp/redisTest.txt ;done;
```

生成2千万条redis批量设置kv的语句(key=kn,value=vn)写入到/tmp目录下的redisTest.txt文件中

## 2.用vim去掉行尾的^M符号，使用方式如下：

```
vim /tmp/redisTest.txt
:set fileformat=dos #设置文件的格式，通过这句话去掉每行结尾的^M符号
:wq #保存退出
```

## 3.通过redis提供的管道–pipe形式，去跑redis，传入文件的指令批量灌数据

```
cat /tmp/redisTest.txt | 路径/redis-5.0.0/src/redis-cli -h 主机ip -p 端口号 --pipe
```

我本机的地址

```
cat /tmp/redisTest.txt | /usr/local/redis/bin/redis-cli -h localhost -p 6379  --pipe
```

大概需要花10分钟左右

![image-20210410103828296](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131027605.png)
