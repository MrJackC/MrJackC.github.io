---
created: 2024-05-14 07:56
updated: 2024-05-30 16:13
---
# CPU架构(ARM和X86架构)

## 1. 什么是CPU

中央处理单元（CPU）主要由运算器、控制器、寄存器三部分组成

- 运算器:运算的作用
- 控制器: 负责发出CPU每条指令所需要的信息
- 寄存器:保存运算或者指令的一些临时文件，这样可以保证更高的速度。

CPU有着**处理指令、执行操作、控制时间、处理数据四大作用**。

CPU就像我们的大脑，帮我们完成各种各样的生理活动。因此如果没有CPU，那么电脑就是一堆废物，无法工作

## 2. 区别

### 2.1 指令集

按逻辑角度 ：指令集分为：**复杂指令集（CISC)和精简指令集（RISC）**

- Intel处理器 ：复杂指令集（CISC)

- ARM处理器：精简指令集（RISC）

### 2.2 制作工艺/功耗

- Intel处理器 ：高功率
  - 设计超高性能的台式机和服务器处理器。

- ARM处理器：低功耗处理器
  - 所以手机大部分都采用ARM架构

### 2.3 64位计算

对于64位计算，ARM和Intel也有一些显著区别。

>Intel并没有开发64位版本的x86指令集。64位的指令集名为x86-64（有时简称为x64），实际上是AMD设计开发的。

- Intel处理器 ：

- ARM处理器：
  - ARM针对移动端64位计算需求，发布ARMv8 64位架构
    - ARMv8使用了两种执行模式，AArch32和AArch64

## 参考文章

[分不清ARM和X86架构，别跟我说你懂CPU！](https://zhuanlan.zhihu.com/p/21266987)

