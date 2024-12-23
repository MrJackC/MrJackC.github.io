---
aliases: "APP更新方案选择, 'APP更新方案选择'"
tags: 
cssclass:
source:
created: "2024-02-22 10:53"
updated: "2024-04-23 16:07"
---
# APP更新方案选择

## 1. 背景

app升级项目发展必不可少的环节，因`掌上12333`用户量大，用户同时更新会造成服务器带宽压力过大。

**版本更新时，每天的下载量为400G，那么1个月就需要10T 左右的下行流量。**

>100M带宽
>
>下载速度总和=100M/8=12.5M
>
>APP版本更新时：假如100个人同时下载，理论的下载速度就是125kb/s，随着下载人数的增加，速度持续下降

## 2. 可选方案

1. 阿里云存储
2. 阿里CND
3. 云服务器购买带宽
4. 人社部/易联众公司等文件服务器
5. 跳转应用市场
6. 用应用宝apk下载链接

### 2.1 推荐方案

**用应用宝apk下载链接+阿里CDN**

## 3. 方案对比

| 方案                                                                                                                                                                                                                                                                                                      | 优势           | 缺点                                                                      | 价格                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------- | ---------------------------- |
| [阿里云存储]([https://common-buy.aliyun.com/?spm=5176.8465980.packages.1.4e701450eY8YdY&commodityCode=ossbag&request=%7B%22region%22%3A%22china-common%22%7D#/buy](https://common-buy.aliyun.com/?spm=5176.8465980.packages.1.4e701450eY8YdY&commodityCode=ossbag&request={"region"%3A"china-common"}#/buy)) | 使用方便         | 1.价格高<br />2.超出部分按流量计费                                                  | 10T每月4874                    |
| [阿里CND](https://common-buy.aliyun.com/?spm=5176.11785003.overview.24.54c8142fNKi80t&commodityCode=dcdnpaybag#/buy)                                                                                                                                                                                      | 1.价格是云存储的1/3 | 1.可能存在缓存问题<br />2. 为了不影响其他服务，需要有独立的域名                                   | 10T每年1620                    |
| [云服务器购买带宽](https://ecs-buy.aliyun.com/wizard/#/prepay/cn-shenzhen)                                                                                                                                                                                                                                      |              | 1.价格高<br />2.峰值时带宽不够（最高200M带宽）                                          | 100M带宽7899<br />200M的带宽15819 |
| 人社部/易联众公司等文件服务器                                                                                                                                                                                                                                                                                         | 免费           | 带宽不够，下载速度慢                                                              |                              |
| 跳转应用市场                                                                                                                                                                                                                                                                                                  | 免费           | 1.需要各个平台上架，时间成本，且登录各平台不便<br />2.用户跳转过去可能就不会下载了<br />3.小众手机无法覆盖          |                              |
| 用应用宝apk下载链接                                                                                                                                                                                                                                                                                             | 免费，下载速度快     | 1.应用市场下载地址(抓包获得)可能会变<br />2.需要应用宝上架，时间成本，且登录不便<br/>3. 可能会被应用宝风控，链接失效等风险 |                              |

## 4. 总结

**采用应用宝apk下载链接+阿里CDN**

![未命名文件.jpg](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403131429063.jpeg)

