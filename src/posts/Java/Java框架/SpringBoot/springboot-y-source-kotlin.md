---
created: 2024-05-14 07:56
updated: 2024-10-11 16:46
---
# Springboot源码编译Kotlin版本过低问题

## 1. 简介

Springboot源码编译时报错

```
Kotlin: Language version 1.1 is no longer supported； please, use version 1.2
```

![image-20220511195643200](https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232210713.png)

报错原因：就是kotlin版本太低，但是百度的答案问题，都不能解决这个报错

## 2. 网上的步骤

### 2.1 Kotlin Compiler 设置版本

```
1.打开Settings,在搜索栏搜索 Kotlin
2.设置 language version、API version 为1.2，点击确定即可
```

![image-20220511200249271](https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232210750.png)

### 2.2 更新渠道

![image-20220511200347450](https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232210782.png)

## 3. 最终解决

不是说上面两个不行，是具体的模块中还有kotlin的配置。会以具体模块为准

### 3.1 修改具体模块的kotlin版本

Project Structure -》modules

**改成具体的版本或使用项目的配置**

![image-20220511200623611](https://raw.githubusercontent.com/MrJackC/PicGoImages/main/other/202404232210806.png)