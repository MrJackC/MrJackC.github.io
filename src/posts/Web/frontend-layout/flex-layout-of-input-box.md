---
created: 2024-05-13 20:48
updated: 2024-10-13 12:27
---
# flex布局-输入框的布局

我们常常需要在输入框的前方添加提示，后方添加按钮。

![img](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230908979.png)

HTML代码如下。

> ```HTML
> <div class="InputAddOn">
>   <span class="InputAddOn-item">...</span>
>   <input class="InputAddOn-field">
>   <button class="InputAddOn-item">...</button>
> </div>
> ```

CSS代码如下。

> ```css
> .InputAddOn {
>   display: flex;
> }
> 
> .InputAddOn-field {
>   flex: 1;
> }
> ```
