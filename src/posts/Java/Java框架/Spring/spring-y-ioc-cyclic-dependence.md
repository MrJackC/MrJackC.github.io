---
aliases: 循环依赖问题
tags: 
cssclass: 
source: 
created: 2024-02-22 10:50
updated: 2024-10-11 16:46
---
# 循环依赖问题

## 1. 什么是循环依赖

循环依赖，其实就是循环引用，就是两个或者两个以上的bean 互相引用对方，最终形成一个闭环，如A 依赖B,B依赖C，C依赖A。如下图所示

![image-20191103124214967](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231724298.png)

循环依赖，其实就是一个**死循环**的过程，在初始化A的时候发现引用了B，这时候就会去初始化B，然后又开发B引用了A，则又会出初始化A，依次循环用不退出，除非有终结条件

## 2. 循环依赖的两种场景

1. 构造器的循环依赖
2. field 属性的循环依赖

> 对于构造器的循环依赖，Spring 是无法解决的，只能抛出 BeanCurrentlyInCreationException 异常表示循环依赖，**所以下面我们分析的都是基于 field 属性的循环依赖**。

>Spring 只解决 scope 为 singleton 的循环依赖。对于scope 为 prototype 的 bean ，Spring 无法解决，直接抛出 BeanCurrentlyInCreationException 异常。

## 3. 解决流程总结

- 首先 A 完成初始化第一步并将自己提前曝光出来（通过 ObjectFactory 将自己提前曝光），在初始化的时候，发现自己依赖对象 B，此时就会去尝试 get(B)，这个时候发现 B 还没有被创建出来
- 然后 B 就走创建流程，在 B 初始化的时候，同样发现自己依赖 C，C 也没有被创建出来
- 这个时候 C 又开始初始化进程，但是在初始化的过程中发现自己依赖 A，于是尝试 get(A)，这个时候由于 A 已经添加至缓存中（一般都是添加至三级缓存 `singletonFactories` ），通过 ObjectFactory 提前曝光，所以可以通过 `ObjectFactory#getObject()` 方法来拿到 A 对象，C 拿到 A 对象后顺利完成初始化，然后将自己添加到一级缓存中
- 回到 B ，B 也可以拿到 C 对象，完成初始化，A 可以顺利拿到 B 完成初始化。到这里整个链路就已经完成了初始化过程了

