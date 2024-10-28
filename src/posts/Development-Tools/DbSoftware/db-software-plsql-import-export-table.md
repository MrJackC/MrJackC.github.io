---
aliases: PL/SQL Developer导入、导出表结构和表数据
tags: 
cssclass: 
source: 
created: 2024-02-22 10:50
updated: 2024-05-30 16:13
---
# PL/SQL Developer导入、导出表结构和表数据

## 1. 导出表结构:

Tools(工具)-->Export User Objects（导出用户对象）-->选择要导出的表(包括Sequence等)-->.sql文件，导出的都为sql文件

## 2. 导出表数据:

Tools(工具)-->Export Tables(导出表)-->选择表,选择SQL Inserts(SQL 插入)-->.sql文件

![image-20201111111105145](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231007707.png)

## 3. 导入步骤

注：导入之前最好把以前的表删除，当然导入另外数据库除外。
1、tools->import tables->SQL Inserts 导入.sql文件。
2、tools->import talbes->Oracle Import然后再导入dmp文件。



[PL/SQL Developer导入、导出表结构和表数据](https://www.jianshu.com/p/3e051d36c4bd)

