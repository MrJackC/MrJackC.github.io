---
aliases: 'final,static,this,super 关键字总结'
cssclass:
source:
order: 120
category: Java基础
tags:
  - Java
  - 学习
  - 基础
author: MrJason
created: "2024-02-22 10:42"
updated: "2024-03-11 14:48"
---

# final,static,this,super 关键字总结

## 1. final 关键字

final 关键字主要用在三个地方：变量、方法、类

1. **final 变量**

   - 如果是**基本数据类型**的变量，其**数值一旦初始化之后便不能改变**
   - 如果是**引用类型**的变量：则在对其初始化之后便**不能再让其指向另一个对象*

2. **final 类**

   表明这个类**不能被继承**，final 类中的**所有成员方法都会被隐式得指定为final方法**

3. **final方法**

   final修饰的成员方法**不能被子类重写**

## 2. static关键字

static 关键字主要有以下四种使用场景

1. 修饰成员变量和成员方法：

   被static 修饰的成员属于类，不属于这个类的某个实例，被类中所有实例共享。可以并且建议通过类名调用。

   被static 声明的成员变量属于静态成员变量，静态变量存在java 内存区域的方法区。

   调用格式：类名.静态变量名 类名.静态方法名

2. 静态代码块：

   静态代码块定义在类中方法外，静态代码块在非静态代码块之前执行（静态代码块—》非静态代码—》构造方法）。该类不管创建多少对象，静态代码块只执行一次

3. 静态内部类（static修饰类的话只能修饰内部类）：

   静态内部类与非静态内部类之间存在一个最大区别：

   - 非静态内部类在编译完成之后会隐含得保存着一个引用，该引用是指向他的外围类
   - 静态内部类，没有保存外部类引用

   没有这个引用意味着

   1. 他的创建不需要依赖外围类的创建
   2. 他不能使用任何外围类的非static成员变量和方法
4. 静态导包（用来导入类中的静态资源，1.5 之后的新特性）

   格式为：`import static` 这两个关键字连用可以指定导入某个类中的指定静态资源，并且不需要使用类名调用类中静态成员，可以直接使用类中静态成员变量和成员方法。

## 3. this关键字

定义：java 中的this 关键字用于在方法中引用当前实例

### 3.1 this 的使用方法

1. 明确表示使用的成员变量（instance）而不是静态变量（static）或者局部变量（local）。

   ```java
   private String javaFAQ;
       void methodName(String javaFAQ) {
       this.javaFAQ = javaFAQ;
   }
   ```

   this在这里代表成员变量（译者注：`this.javaFAQ`表示成员变量，`javaFAQ`表示局部变量）。在这个方法里，局部变量的优先级更高。因此，如果没有用`this.`表示的话则指定的是局部变量。在这个方法里面，如果局部变量的名字和成员变量的名字并不一样的话，那么用不用这个this其实就没有关系了。

2. this用来表示构造函数

   ```java
   public JavaQuestions(String javapapers) {
       this(javapapers, true);
   }
   ```

   这里使用this调用同一个类中的另一个包含两个参数的构造方法

3. 用于将当前java实例作为参数传递

   ```java
   obj.itIsMe(this);
   ```

4. 和上一个类似，this还可以用于返回当前java实例

   ```java
   CurrentClassName startMethod() {
       return this;
   }
   ```

5. this也可以表示当前类的句柄

   ```
   Class className = this.getClass(); // this methodology is preferable in java
   ```

   也可以通过 `Class className = ABC.class;`实现，这里的ABC指的是java类的类名。

通常，java中的this都与他的实例相关联，不能在静态方法中使用。

## 4. Super 关键字

super关键字用于从子类访问父类的变量和方法

```java
public class Super {
    protected int number;
     
    protected showNumber() {
        System.out.println("number = " + number);
    }
}
 
public class Sub extends Super {
    void bar() {
        super.number = 10;
        super.showNumber();
    }
}
```

在上面的例子中，Sub 类访问父类成员变量 number 并调用其其父类 Super 的 `showNumber（）` 方法。

**使用 this 和 super 要注意的问题：**

- 在构造器中使用 `super（）` 调用父类中的其他构造方法时，该语句必须处于构造器的首行，否则编译器会报错。另外，this 调用本类中的其他构造方法时，也要放在首行。
- this、super不能用在static方法中。

**简单解释一下：**

被 static 修饰的成员属于类，不属于单个这个类的某个对象，被类中所有对象共享。而 this 代表对本类对象的引用，指向本类对象；而 super 代表对父类对象的引用，指向父类对象；所以， **this和super是属于对象范畴的东西，而静态方法是属于类范畴的东西**。

## 参考文章

[final,static,this,super 关键字总结](https://gitee.com/SnailClimb/JavaGuide/blob/master/docs/java/Basis/final%E3%80%81static%E3%80%81this%E3%80%81super.md#finalstaticthissuper-%E5%85%B3%E9%94%AE%E5%AD%97%E6%80%BB%E7%BB%93)

