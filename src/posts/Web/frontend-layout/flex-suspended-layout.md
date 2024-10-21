---
created: 2024-05-13 20:48
updated: 2024-10-13 12:27
---
# flex布局-悬挂式布局

有时，主栏的左侧或右侧，需要添加一个图片栏。

![img](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230909401.png)

HTML代码如下。

 ```HTML
 <div class="Media">
   <img class="Media-figure" src="" alt="">
   <p class="Media-body"...</p>
 </div>
 ```

CSS代码如下。

 ```css
 .Media {
   display: flex;
   align-items: flex-start;
 }
 
 .Media-figure {
   margin-right: 1em;
 }
 
 .Media-body {
   flex: 1;
 }
 ```
