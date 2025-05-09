---
cssclass:
aliases: 'Java 基础 - 面向对象'
cssclasses: [indent]
source: 
order: 10
category: Java基础
tags:
  - Java
  - 学习
  - 基础
author: MrJason
created: "2024-02-22 10:42"
updated: "2024-03-11 14:54"
---

# Java 基础 - 面向对象

## 1. 面向对象三大特性：封装 继承 多态

### 1.1 封装

隐藏对象的属性和实现细节，仅对外公开访问方法，控制程序中属性的读和写的访问级别。

### 1.2 继承

在一个现有类的基础之上，增加新的方法或**重写**已有方法，从而产生一个新类。

关于继承如下3点：

1. 子类拥有父类对象所有的属性和方法（包括私有属性和私有方法），但是父类的私有属性和方法子类是无法访问的，**只是拥有**
2. 子类可以拥有自己属性和方法，既子类可以对父类进行扩展
3. 子类可以用自己的方式实现父类的方法（重写）

### 1.3 多态

对象在不同时刻表现出来的不同状态。在编译时并不能确定，只有在运行期间才能决定

> 所谓多态就是指程序中定义的引用变量所指向的具体类型和通过该引用变量发出的方法调用在**编程时并不确定**，而是在程序运行期间才确定，既**一个引用变量到底会指向哪个类的实例对象，该引用变量发出的方法调用到底是哪个类中实现的方法，必须在由程序运行期间才能决定**

#### 1.3.1 Java 中实现多态的方式

1. 继承：多个子类对同一方法的重写
2. 接口：实现接口并覆盖接口的统一方法

## 2. 类图

以下类图使用 [PlantUML](https://www.planttext.com/) 绘制，更多语法及使用请参考: http://plantuml.com/ 。

### 2.1 泛化关系 (Generalization)

用来描述继承关系，在 Java 中使用 extends 关键字。

![image-20220812205554172](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111454371.png)

### 2.2 实现关系 (Realization)

用来实现一个接口，在 Java 中使用 implement 关键字。

![image-20220812205633633](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111454428.png)

### 2.3 聚合关系 (Aggregation)

表示整体由部分组成，但是整体和部分不是强依赖的，整体不存在了部分还是会存在。

![image-20220812205717745](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111454482.png)

### 2.4 组合关系 (Composition)

和聚合不同，组合中整体和部分是强依赖的，整体不存在了部分也不存在了。比如公司和部门，公司没了部门就不存在了。但是公司和员工就属于聚合关系了，因为公司没了员工还在。

![image-20220812205744643](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111454520.png)

### 2.5 关联关系 (Association)

表示不同类对象之间有关联，这是一种静态关系，与运行过程的状态无关，在最开始就可以确定。因此也可以用 1 对 1、多对 1、多对多这种关联关系来表示。比如学生和学校就是一种关联关系，一个学校可以有很多学生，但是一个学生只属于一个学校，因此这是一种多对一的关系，在运行开始之前就可以确定。

![image-20220812205816656](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111454551.png)

### 2.6 依赖关系 (Dependency)

和关联关系不同的是，依赖关系是在运行过程中起作用的。A 类和 B 类是依赖关系主要有三种形式:

- A 类是 B 类中的(某中方法的)局部变量；
- A 类是 B 类方法当中的一个参数；
- A 类向 B 类发送消息，从而影响 B 类发生变化；

![image-20220812205907513](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403111454581.png)

## 参考文章

[**Java 基础 - 面向对象**](https://pdai.tech/md/java/basic/java-basic-oop.html)