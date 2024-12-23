---
aliases: 'mac版idea配置visualvm'
tags: 
cssclass:
source:
created: "2024-02-22 10:47"
updated: "2024-03-12 12:10"
---
# mac版idea配置visualvm

## 1. 下载插件

![image-20220506172009283](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121209570.png)

## 2. 配置

重启完后进行配置 prefences->other settings->visuialvm

![image-20220506172101313](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121209615.png)

mac获取jdk的路径

![image-20220506172135904](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121209645.png)

```bash
/Library/Java/JavaVirtualMachines/jdk1.8.0_231.jdk/Contents/Home/bin/jvisualvm
```

配置的时候选择home目录下bin中的jvisualvm工具即可。

## 3. 运行

![image-20220506172408003](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121209682.png)

## 4. 弹出查看

程序运行过程中，会自动弹出视图

![image-20220506172529724](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121209716.png)

### 5. 平时启动jvisualvm

```bash
/usr/libexec/java_home
cd /Library/Java/JavaVirtualMachines/jdk1.8.0_231.jdk/Contents/Home
jvisualvm
```

![image-20220506172810035](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403121209741.png)

## 参考文章

[Mac版idea如何配置visualvm](https://blog.csdn.net/sinat_24230393/article/details/93596359)