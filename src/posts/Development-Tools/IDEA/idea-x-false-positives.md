---
aliases: 'IDEA中项目误报包不存在'
tags: 
cssclass:
source:
created: "2024-02-22 10:50"
updated: "2024-04-23 10:27"
---
# IDEA中项目误报包不存在

## 1. 现象

项目运行好好的，突然提示某些基础包不存在。如spring，slf4j 等等。你点进具体的类，他又莫名其妙可以了。而实际运行又一直提示找不到包

maven 同步和clean 都没有效果

## 2. 解决

删除项目中的 .idea/libraries 文件夹，重新打开就可以了

![image-20220324085125797](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231027776.png)
