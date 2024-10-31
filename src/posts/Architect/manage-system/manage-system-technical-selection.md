# 后台管理系统技术选型

## 1. 背景简介

### 1.1 原有框架问题 

原有公司内部框架已经很老了，最早的架构师已经离职了，维护更新不及时。且原有框架也有不少槽点

- UI 样式丑陋，原有框架是前后端不分离的，早期都是由java后端人员开发。现在的前端人员接手困难，后端人员维护起来效率低
- 数据持久层框架采用beetlsql，学习成本高，且后期遇到问题难排查
- 在改造成前后端分离时，登录与权限控制改造成本高
- 缺少数据监控功能

### 1.2 新框架选型目标

现年底公司业务比较平稳，明年新项目启动，这段时间正好有时间可以做一个技术选型。以下是选型目标

- 技术特性
  - 易用性：使用常用技术框架（减少大家学习成本）
  - 可维护性
  - 可扩展性：
  - 性能
- 技术成熟度： 
  - 不追求新技术，成熟稳定即可
- 社区活跃度：
  - 尽量使用开源技术
  - 社区活跃后期有问题方便咨询等
- 架构匹配和演化：
  - 目前项目只需要前后端分离，未来可能有微服务改造需求，需提前有预案
  - 数据库mysql、oralce、国产数据库-达梦（可自己改造，但不希望花太多时间）
- 团队成员因素:
  - 前端同事技术栈：Vue、element、vue-element-admin

## 2. 考量点

| 考量点       | 公司内部框架                                        | 若依管理系统                                                 | jeecg管理系统                                                | FEBS权限管理系统                                             |
| ------------ | --------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 核心功能     | 满足核心功能需求                                    | 满足核心功能需求<br />部门管理、角色用户、菜单及按钮授权、数据权限、系统参数、日志管理、代码生成等。在线定时任务配置；支持集群，支持多数据源，支持分布式事务。 | 功能强大，部分付费。                                         | 满足核心功能需求                                             |
| 支持架构版本 | 单应用（随着业务壮大，缺乏扩展性）                  | 单应用、前后端分离，微服务Cloud、还支持多语言平台            | 前后端分离，支持微服务                                       | 单应用、前后端分离，支持微服务                               |
| 前端技术     | easy-ui<br />(技术老，样式丑)                       | element<br />                                                | antd<br />（前端人员不太熟）                                 | element<br />                                                |
| 技术成熟度   | 相对老旧，学习成本高<br />springboot、betsql,easyui | 技术常用且成熟，学习成本低<br />Spring Boot、Spring Security、MyBatis、Jwt、Vue | 技术常用且成熟（前端有问题），学习成本低<br />SpringBoot 2.x，SpringCloud，Ant Design&Vue，Mybatis-plus，Shiro，JWT | 技术常用且成熟，学习成本低Spring Cloud 、Spring Cloud OAuth2 & Spring Cloud Alibaba、 vue element admin |
| 社区活跃度   | 只有公司内部使用。维护得少                          | 维护活跃<br />2018年维护至今<br />gitee赞：18.9K<br /><br />2020gitee十佳开源项目 | 2013年维护至今<br />维护活跃<br />gitlab赞：18.9K<br />      | 维护活跃<br />github赞:5.3K                                  |
| 文档完善度   | 文档相对较少                                        | 文档完善<br />每个版本都有文档<br />                         |                                                              | 文档完善度中等，部分文档还需要付费                           |
| 付费情况     | 无                                                  | 无                                                           | 商业版付费                                                   | 部分文档付费                                                 |
| 性能         |                                                     |                                                              |                                                              |                                                              |
|              |                                                     |                                                              |                                                              |                                                              |
|              |                                                     |                                                              |                                                              |                                                              |
|              |                                                     |                                                              |                                                              |                                                              |
|              |                                                     |                                                              |                                                              |                                                              |

## 3. 功能点区别

| 考量点                       | 公司内部框架 | 若依管理系统                                   | jeecg管理系统                                 | FEBS权限管理系统 |
| ---------------------------- | ------------ | ---------------------------------------------- | --------------------------------------------- | ---------------- |
| 基础RBAC权限                 | 支持         | 支持                                           | 支持                                          | 支持             |
| 登录日志                     | 支持         | 支持                                           | 支持                                          | 支持             |
| 操作日志                     | 支持         | 支持                                           | 支持                                          | 支持             |
| 字典管理                     | 支持         | 支持                                           | 支持                                          | 不支持           |
| 数据权限（仅部门成员能查看） | 不支持       | 支持                                           | 支持                                          | 不支持           |
| 岗位                         | 不支持       | 支持                                           | 支持                                          | 不支持           |
| 租户管理（SAAS）             | 不支持       | 不支持                                         | 支持                                          | 不支持           |
| 系统通告                     | 不支持       | 不支持                                         | 支持                                          | 不支持           |
| 消息中心&消息模板            | 不支持       | 不支持                                         | 支持                                          | 不支持           |
| 在线用户与强退               | 不支持       | 支持                                           | 支持                                          | 支持             |
| 监控                         | 无           | cpu,服务器信息，jvm，磁盘,缓存监控             | 网管，sql监控，性能监控，jvm，tomcat,缓存监控 |                  |
| 参数配置                     | 支持         | 支持                                           |                                               |                  |
| 代码生成                     | 不支持       | 支持（包含前后端代码，非常规范，扩展性也很强） |                                               |                  |
|                              |              |                                                |                                               |                  |
|                              |              |                                                |                                               |                  |



## 4. 总结

- jeecg管理系统

  项目功能强大，同时也造成过于复杂化，很多功能本身用不着。部分功能还收费，暂不考虑

  - 租户设计（SAAS）：适合需要将系统分配给其他公司自管理

    >平台管理员只能管理租户的账号和相关信息，不能操作租户的内部业务。各租户拥有自己的角色和权限，相互不能影响。不同租户的数据、服务在物理上共享，而在逻辑上完全隔离，对于每个租户来说这个系统好像只为自己服务。为了确保系统数据的安全性，使用户能放心地将商业数据放在系统上使用，SaaS系统的权限管理在系统设计中成为尤为重要的一环。

  - 大屏设计器：非常适合有拖拽业务设计场景

- **若依（推荐）：**

  满足核心功能，文档齐全。与当前团队适配程度高。推荐这个若依

- febs：

  相对来说偏简单了点，可以学习借鉴

## 参考文章

[技术选型的艺术](https://zhuanlan.zhihu.com/p/36619380)

[SaaS系统用户权限设计](http://www.woshipm.com/pd/824126.html)