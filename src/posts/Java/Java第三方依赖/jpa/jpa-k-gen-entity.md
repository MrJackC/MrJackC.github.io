---
aliases: 'IDEA下SpringData-JPA根据数据库表生成实体类'
tags: 
cssclass:
source:
created: "2024-02-22 10:50"
updated: "2024-04-23 14:12"
---
# IDEA下SpringData-JPA根据数据库表生成实体类

1. 首先要给项目的Modules添加JPA:

   ![image-20201120100921592](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231409427.png)

   ![image-20201120101005602](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231409468.png)

2. 数据源的配置

   View --> Tool Windows下看到 database

   ![image-20201120103112676](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231409495.png)

3. 完成上述操作后即可在View --> Tool Windows下看到 Persistence选项,将其打开

   ![image-20201120101142287](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231409515.png)

   ![image-20201120103153121](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231409548.png)

   ![image-20201120103244179](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231409574.png)

4. 在弹出的Persistence窗口的项目上右键,选择Generate Persistence Mapping --> By Database Schema

   ![image-20201120101503223](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231409605.png)

5. 在此处进行数据库相关配置,配置成功后即可在下方看到数据库中的表

![image-20201120103333205](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231409627.png)

