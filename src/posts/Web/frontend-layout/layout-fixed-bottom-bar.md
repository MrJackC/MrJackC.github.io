---
created: 2024-05-13 20:48
updated: 2024-10-13 12:27
---
# flex布局-固定的底栏

有时，页面内容太少，无法占满一屏的高度，底栏就会抬高到页面的中间。这时可以采用Flex布局，让底栏总是出现在页面的底部。

![img](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230909068.png)

HTML代码如下。

 ```html
 <body class="Site">
   <header...</header>
   <main class="Site-content"...</main>
   <footer...</footer>
 </body
 ```

CSS代码如下。

 ```css
 .Site {
   display: flex;
   min-height: 100vh;
   flex-direction: column;
 }
 
 .Site-content {
   flex: 1;
 }
 ```
