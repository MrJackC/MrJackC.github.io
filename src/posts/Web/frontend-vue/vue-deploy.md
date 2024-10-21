
# Vue前端部署

## 1.简介

## 2.Vue部署配置

### 2.1 修改vue.config.js 文件

主要修改module.exports

``` js
module.exports = {
  publicPath: "./",
  outputDir: 'dist',
  assetsDir: 'assets'
  ...
  }
```

- **publicPath**:  部署应用包时的基本 URL

  **如果为配置，会导致资源无法正常加载**

  - 部署在域名的根路径 `https://www.my-app.com/`，则设置 `publicPath` 为 `/`即可
  - 部署在 `https://www.my-app.com/my-app/`，则设置 `publicPath` 为 `/my-app/`
  - 直接使用相对路径 (`'./'`)，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径

  ```js
  module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? './'
      : '/'
  }
  ```

- **outputDir**: 打包输出目录名称

  默认为dist。可改为项目打包名称，以免每次打包更改

## 3. 部署

### 3.1 部署在nginx

```nginx
# 边检执法办案管理系统
server {
    listen          9802;
    location / {
        root   /home/my_app;
        index  index.html index.htm;
		try_files $uri $uri/ /index.html;
    }
}
```
如果vue 以history模式需要增加try_files $uri $uri/ /index.html; ,has 模式则不需要


## 4.大文件处理方案
### 4.1 部署在nginx解决Vue项目打包后js文件过大的问题
引入插件

我们可以通过引入 compression-webpack-plugin 插件，然后开启 gzip 来解决本问题

首先安装插件依赖
> npm i compression-webpack-plugin@5.0.1

修改文件 vue.config.js

``` js
const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new CompressionPlugin({
                        filename: '[path][name].gz',
                        algorithm: 'gzip',
                        test: /\.js$|\.html$|\.css/,
                        threshold: 10240,
                        minRatio: 0.8,
                        deleteOriginalAssets: false
                    })
                ]
            }
        }
    }
}
```
### 4.2修改Nginx配置
``` nginx
# on为启用，off为关闭
gzip on;
# Nginx的动态压缩是对每个请求先压缩再输出，这样造成虚拟机浪费了很多cpu，解决这个问题可以利用nginx模块Gzip Precompression，这个模块的作用是对于需要压缩的文件，直接读取已经压缩好的文件(文件名为加.gz)，而不是动态压缩，对于不支持gzip的请求则读取原文件
gzip_static on;
# 设置允许压缩的页面最小字节数，页面字节数从header头中的Content-Length中进行获取。默认值是0，不管页面多大都压缩。建议设置成大于1k的字节数，小于1k可能会越压越大。
gzip_min_length 1k;
# 获取多少内存用于缓存压缩结果，‘4 16k’表示以16k*4为单位获得
gzip_buffers 4 32k;
# 识别http协议的版本,早起浏览器可能不支持gzip自解压,用户会看到乱码
gzip_http_version 1.1;
# gzip压缩比（1~9），越小压缩效果越差，但是越大处理越慢，所以一般取中间值;
gzip_comp_level 5;
# 对特定的MIME类型生效,其中'text/html’被系统强制启用
#gzip_types text/plain application/x-javascript text/css application/xml;
gzip_types text/plain application/javascript application/x-javascript text/javascript text/xml text/css;  
# 启用应答头"Vary: Accept-Encoding"
gzip_vary on;
# IE5.5和IE6 SP1使用msie6参数来禁止gzip压缩 )指定哪些不需要gzip压缩的浏览器(将和User-Agents进行匹配),依赖于PCRE库
gzip_disable "MSIE [1-6].";
```

设置后重启nginx服务。