# CSS层叠

## 1. 背景

自己在项目中对z-index 理解的并不到位，导致在使用过程中与预期效果不一致。

>一直认为`z-index`就是用来描述定义一个元素在屏幕`Z轴`上的堆叠顺序。`z-index`值越大在`Z轴`上就越靠上，也就是离屏幕观察者越近。最后才发现这个认识存在很大的问题：

1. 首先，`z-index`属性值并不是在任何元素上都有效果。它**仅在定位元素（定义了`position`属性，且属性值为非`static`值的元素）上有效果**。

2. 判断元素在`Z轴`上的堆叠顺序，不仅仅是直接比较两个元素的`z-index`值的大小，这个堆叠顺序实际由元素的**层叠上下文**、**层叠等级**共同决定。

![image-20220404110849700](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230900432.png)

## 2. 什么是“层叠上下文”

层叠上下文(stacking context)，是HTML中一个三维的概念。在CSS2.1规范中，每个盒模型的位置是三维的，分别是平面画布上的`X轴`，`Y轴`以及表示层叠的`Z轴`。一般情况下，元素在页面上沿`X轴Y轴`平铺，我们察觉不到它们在`Z轴`上的层叠关系。而一旦元素发生堆叠，这时就能发现某个元素可能覆盖了另一个元素或者被另一个元素覆盖。

如果一个元素含有层叠上下文，(也就是说它是层叠上下文元素)，我们可以理解为这个元素在`Z轴`上就“高人一等”，最终表现就是它离屏幕观察者更近。

> **具象的比喻**：你可以把层叠上下文元素理解为理解为**该元素当了官**，而其他非层叠上下文元素则可以理解为普通群众。凡是“当了官的元素”就比普通元素等级要高，也就是说元素在`Z轴`上更靠上，更靠近观察者。

## 3.什么是“层叠等级”

那么，层叠等级指的又是什么？层叠等级(stacking level，叫“层叠级别”/“层叠水平”也行)

- 在同一个层叠上下文中，它描述定义的是该层叠上下文中的层叠上下文元素在`Z轴`上的上下顺序。
- 在其他普通元素中，它描述定义的是这些普通元素在`Z轴`上的上下顺序。

说到这，可能很多人疑问了，不论在层叠上下文中还是在普通元素中，层叠等级都表示元素在`Z轴`上的上下顺序，那就直接说它描述定义了所有元素在`Z轴`上的上下顺序就OK啊！为什么要分开描述？

为了说明原因，先举个栗子：

> **具象的比喻**：我们之前说到，处于层叠上下文中的元素，就像是元素当了官，等级自然比普通元素高。再想象一下，假设一个官员A是个省级领导，他下属有一个秘书a-1，家里有一个保姆a-2。另一个官员B是一个县级领导，他下属有一个秘书b-1，家里有一个保姆b-2。a-1和b-1虽然都是秘书，但是你想一个省级领导的秘书和一个县级领导的秘书之间有可比性么？甚至保姆a-2都要比秘书b-1的等级高得多。谁大谁小，谁高谁低一目了然，所以根本没有比较的意义。只有在A下属的a-1、a-2以及B下属的b-1、b-2中相互比较大小高低才有意义。

**再类比回“层叠上下文”和“层叠等级”，就得出一个结论：**

1. 普通元素的层叠等级优先由其所在的层叠上下文决定。
2. 层叠等级的比较只有在当前层叠上下文元素中才有意义。不同层叠上下文中比较层叠等级是没有意义的。

## 4. 如何产生“层叠上下文”

前面说了那么多，知道了“层叠上下文”和“层叠等级”，其中还有一个最关键的问题：到底如何产生层叠上下文呢？如何让一个元素变成层叠上下文元素呢？

其实，层叠上下文也基本上是有一些特定的CSS属性创建的，一般有3种方法：

1. `HTML`中的根元素`<html></html>`本身j就具有层叠上下文，称为“根层叠上下文”。
2. 普通元素设置`position`属性为**非**`static`值并设置`z-index`属性为具体数值，产生层叠上下文。
3. CSS3中的新属性也可以产生层叠上下文。

至此，终于可以上代码了，我们用代码说话，来验证上面的结论：

**栗子1:** **有两个div，p.a、p.b被包裹在一个div里，p.c被包裹在另一个盒子里，只为.a、.b、.c设置`position`和`z-index`属性**

```html
<style>
  div {  
    position: relative;  
    width: 100px;  
    height: 100px;  
  }  
  p {  
    position: absolute;  
    font-size: 20px;  
    width: 100px;  
    height: 100px;  
  }  
  .a {  
    background-color: blue;  
    z-index: 1;  
  }  
  .b {  
    background-color: green;  
    z-index: 2;  
    top: 20px;  
    left: 20px;  
  }  
  .c {  
    background-color: red;  
    z-index: 3;  
    top: -20px;  
    left: 40px;  
  }
</style>

<body>  
  <div>  
    <p class="a">a</p>  
    <p class="b">b</p>  
  </div> 

  <div>  
    <p class="c">c</p>  
  </div>  
</body> 

```
