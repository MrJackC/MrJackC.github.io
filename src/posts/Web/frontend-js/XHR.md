# 读懂XHR、Ajax，Fetch
## XHR、Ajax、Fetch到底是个啥                           
### 概述

要对[XHR](https://so.csdn.net/so/search?q=XHR&spm=1001.2101.3001.7020 )、Ajax、fetch有个深刻的掌握，让我们先来了解一下xhr、ajax、fetch 这三者都是个啥？以及他们的区别和联系。

1. 首先，什么是XHR，XHR是XMLHttpRequest的缩写，它是是**浏览器内置的一种对HTTP请求和响应的处理方式**，能够获取和发送数据，支持流处理、进度事件和断点续传，是fetch和Ajax的基础。
2. 其次，那什么是ajax呢？ ajax是Asynchronous JavaScript And XML（异步的JS和XML）的缩写，**是一种实现无页面刷新的情况下使用XHR对象向服务器发起请求获取服务器端数据的技术。** 它可以使用JSON、XML、html和text文本等格式发送和接收数据
 ajax最吸引人的**特性**就是它的**“异步”**特性，也就是说可以 **在不刷新页面的情况下实现与服务器的通信，交换数据，或更新页面。**
3. 最后，那什么又是Fetch呢？Fetch是基于Promise的新式API，主要用于获取资源，支持流处理和通过拦截器来处理请求和响应，可以在浏览器端和Node.js中使用。


### 一次完整的[Ajax](https://so.csdn.net/so/search?q=ajax&spm=1001.2101.3001.7020 )请求过程


1. 创建网络请求的ajax对象（使用XHR）
2. 监听XHR对象状态的变化，或者监听onload事件（请求完成时触发）
3. 配置网络请求（通过open方法）
4. 发送send网络请求

 
```javascript
// 1.创建XMLHttpReqest对象
const xhr = new XMLHttpRequest()
// 2.监听对象状态的改变（宏任务）
// 监听四种状态
// xhr.onreadystatechange = function() {
// 	// 1.如果状态不是DONE状态，直接返回
// 	if(xhr.readystate !== XMLHttpRequest.DONE)	return 
// 	// 2.确定拿到了数据
// 	console.log(xhr.response)
// }

// 监听onload事件，是可以确定拿到了数据的
xhr.onload = function() {
  console.log(xhr.response)
}
// 3.配置请求的方式/URL等
xhr.responseType = "json" 
xhr.timeout = 3000
xhr.open("get", "http://xxx.xx.xx", true)
// 4.发送请求
xhr.send()
// 5.获取数据
console.log(xhr.response)
```

#### XHR的state的说明
 
![图片来自 coderwhy 老师](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/20241126152401.png)

#### http的响应状态码的说明

![图片来自 coderwhy 老师](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/httpsi-blog.csdnimg.cnblog_migratea803d11aff4b3bc9c4549227f08bc159.png#pic_center.png)
 

### [客户端](https://so.csdn.net/so/search?q=%E5%AE%A2%E6%88%B7%E7%AB%AF&spm=1001.2101.3001.7020 )传递参数的四种方式

 
现在我们知道了一次完整的ajax的请求过程是什么样子，但是我们对于客户端发送请求传递的参数方式还不甚了解，接下来就一起来看一下吧
 
在开发中，我们使用最多的是get和post请求，在发送请求的过程中，我们也可以传递给服务器数据
 常见的传递给服务器数据的有以下几种：

1. get请求的query参数
2. post请求 x-www-form-urlencoded格式
3. post请求FormData格式
4. post请求JSON格式（最常用）
 接下来看一下示例吧

 
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>客户端传递参数的四种方式</title>
</head>
<body>
  <form class="info">
    <input type="text" name="username">
    <input type="password" name="password">
  </form>
  <button class="send">发送请求</button>
  <script>
  	const formEl = document.querySelector(".info")
    const sendBtn = document.querySelector(".send")
    sendBtn.onclick = function() {
	  // 创建xhr对象
      const xhr = new XMLHttpRequest()

      // 监听数据响应
      xhr.onload = function() {
        console.log(xhr.response)
      }

      // 配置请求
      xhr.responseType = "json"
      
	  // 1.方式1：get请求传递参数
	  xhr.open('get', 'http://xxx.xx.xx/getData?page=1&pageSize=30')
	  xhr.send()
	
	  // 2.方式2：post请求（urlencoded）
	  xhr.open('post', url)
	  const urlParams = "page=1&pageSize=30"
	  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
	  xhr.send(urlParams)
	
	  // 3.方式3：post请求传递参数（FormData）
	  // 说明：因为post请求的默认content-type就是formdata格式，所以就不用再设置了
	  xhr.open('post', url)
	  // 将formElement对象转成FormData对象
      const formData = new FormData(formEl)
      formData.append("admin", 123456)
      xhr.send(formData)

	  // 4.方式4：post => JSON
	  xhr.open('post', url)
	  const jsonParams = JSON.stringify({page: 1, pageSize: 30})
	  xhr.setRequestHeader('Content-type', 'application/json, charset=utf-8')
	  xhr.send(jsonParams)
	}
  	
  </script>
</body>
</html>
```
 

### ajax网络请求过程的封装
#### 方式1：普通封装
 
```javascript
function myAjax({
  url,
  method = "get",
  data = {},
  timeout = 5000,
  headers = {},
  success,
  failure
} = {}) {
  // 1.创建xhr对象
  const xhr = new XMLHttpRequest()
  // 2.监听XHR对象状态的变化
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return
    // 对网络请求返回的状态码进行处理
    if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
      success && success(xhr.response)
    } else {
      failure && failure(xhr.response)
    }
  }

  // 3.设置响应的类型
  xhr.responseType = "json"
  xhr.timeout = timeout

  // 4.1 设置请求参数
  const params = Object.keys(data)
  					.map(key => `${key}=${encodeURIComponent(data[key])}`)
  const paramsString = params.join("&")

  // 4.2 设置header，发送网络请求
  if (method.toLowerCase() === "get") {
    xhr.open(method, url + "?" + paramsString)
    Object.keys(headers).forEach(headerKey => {
    	return xhr.setRequestHeader(headerKey, headers[headerKey])
    })
    xhr.send()
  } else {
    xhr.open(method, url)
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    Object.keys(headers).forEach(headerKey => {
     	return xhr.setRequestHeader(headerKey, headers[headerKey]) 
    })
    xhr.send(paramsString)
  }

  return xhr
}
```



#### 复杂请求方式
SpringBoot后端通过这样的方式接收参数
@RequestBody  注解List接收工单编号，前端传递数组
![springBoot后端接收参数方式](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image.png.png)

Vue中的axios方式调用接口
![vue前端封装请求方式](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-2.png.png)

![浏览器中的网络请求](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/image-1.png.png)

xhr方式调用接口代码段

```javascript
// xhr发起post的请求   但是请求参数中还有部分参数的写法
this.getGisLayerInfoByWorkIdApi([],
      {
        sceneName: 'JMQ',
        city: '呼和浩特',
        minLongitude: 101.05931,
        maxLongitude: 111.896898,
        minLatitude: 39.906337,
        maxLatitude: 41.957453,
        layerType:'面'
      }
  );

  getGisLayerInfoByWorkIdApi(workOrderId, gisQuery) {
      var xhr = new XMLHttpRequest();
      // 创建查询字符串
      const queryString = new URLSearchParams(gisQuery).toString();
      // 配置请求参数
      xhr.open('POST', `http://xxxx/gis-management-system/api/layerLibrary/getGisLayerInfoByWorkId?${queryString}`, true);
      // 设置请求头
      xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
      // 处理响应
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // 解析 JSON 响应
            var response = JSON.parse(xhr.responseText);
            this.gisData = response.data; // 更新 gisData
          } else {
            console.error('请求错误：', xhr.status, xhr.statusText);
          }
        }
      }.bind(this); // 绑定 this
      // 发送请求，注意将工作订单 ID 和查询对象字符串化
      xhr.send(JSON.stringify(workOrderId));
    },

```

```javascript
// 单纯的xhr发起post的请求
// 创建一个新的 XMLHttpRequest 对象
var xhr = new XMLHttpRequest();
// 配置请求类型和 URL
xhr.open('POST', 'http://xxxx/gis-management-system/api/gisSceneInfo/pageList', true);  // true 表示异步请求
// 设置请求头（如果需要）
xhr.setRequestHeader('Content-Type', 'application/json');
// 监听请求状态变化
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        // 请求已完成，检查响应状态
        if (xhr.status === 200) {
            // 请求成功，处理响应
            console.log('Response:', xhr.responseText);
        } else {
            // 请求失败，处理错误
            console.error('Error:', xhr.status, xhr.statusText);
        }
    }
};

// 创建要发送的数据
var data = {
    sceneName: 'DZJ'
};

// 发送 JSON 数据
xhr.send(JSON.stringify(data));

```


#### 方式2：基于Promise进行抽取封装
```javascript
function myAjax({
  url,
  method = "get",
  data = {},
  timeout = 5000,
  headers = {},
  success,
  failure
} = {}) {
  const promise = new Promise((resolve, reject) => {
      // 1.创建xhr对象
    const xhr = new XMLHttpRequest()
    // 2.监听XHR对象状态的变化
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      // 对网络请求返回的状态码进行处理
      if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
        resolve(xhr.response)
      } else {
        reject({ status: xhr.status, message: xhr.statusText })
      }
    }

    // 3.设置响应的类型
    xhr.responseType = "json"
    xhr.timeout = timeout

    // 4.1 设置请求参数
    const params = Object.keys(data)
              		 .map(key => `${key}=${encodeURIComponent(data[key])}`)
    const paramsString = params.join("&")

    // 4.2 设置header，发送网络请求
    if (method.toLowerCase() === "get") {
      xhr.open(method, url + "?" + paramsString)
      Object.keys(headers).forEach(headerKey => {
        return xhr.setRequestHeader(headerKey, headers[headerKey])
      })
      xhr.send()
    } else {
      xhr.open(method, url)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      Object.keys(headers).forEach(headerKey => {
        return xhr.setRequestHeader(headerKey, headers[headerKey]) 
      })
      xhr.send(paramsString)
    }
  }) 
  promise.xhr = xhr
  return promise
}

```
 

### fetch网络请求
 
fetch可以看做是早期的XHR替代方案，它提供了一种更加现代化的处理方案：
 比如：

 - 返回值是一个Promise对象，可以优雅的对返回结果进行处理

 - 不像XHR一样，所有的操作都放在一个对象上
 

#### Fetch数据的响应

 
fetch的数据响应主要分为两个阶段：
 **阶段一：当服务器返回了响应（response）**

 - fetch返回的promise就使用内建的Response class 对象来对响应头进行解析

 - 在这个阶段，可以通过检查响应头，来检查HTTP状态以确定请求是否成功

 - 如果fetch无法建立HTTP请求，例如网络问题，亦或是请求的网址不存在，那么promise就会reject

 - 异常的HTTP状态，例如404或500，不会导致error

 
可以在response的属性中看到HTTP状态：

 - status：HTTP状态码，例如200

 - ok: 布尔值，如果HTTP状态码为200 - 299，则为true

 
**阶段二：为了获取response body，我们需要使用一个其他的方法调用**

 - response.text() – 读取response，并以文本形式返回response

 - response.json() – 将response解析为JSON

 

### fetch网络请求的过程

#### 基于Promise

 
```javascript
fetch(url).then(res => {
  console.log(res)
})
```
 

#### 基于async、await的方案

 
```javascript
async function getData() {
	const res = await fetch(url)
	const data = res.json()
	console.log(data)
}
```
 

### 基于XHR和fetch进行文件上传
 
最后，我们来说一下基于XHR和fetch如何进行文件上传，看代码吧

 

#### XHR
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>基于XHR进行文件上传</title>
</head>
<body>
  <input class="file" type="file">
  <button class="upload">上传文件</button>
  
  <script>
    const uploadBtn = document.querySelector(".upload")
    uploadBtn.onclick = function() {
      // 1.创建对象
      const xhr = new XMLHttpRequest()

      // 2.监听结果
      xhr.onload = function() {
        console.log(xhr.response)
      }

      xhr.onprogress = function(event) {
        console.log(event)
      }
      
      xhr.responseType = "json"
      xhr.open("post", url)

      // 表单
      const fileEl = document.querySelector(".file")
      const file = fileEl.files[0]

      const formData = new FormData()
      formData.append("avatar", file)

      xhr.send(formData)
    }
  </script>

</body>
</html>
```
 

#### fetch
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>基于fetch进行文件上传</title>
</head>
<body>
  <input class="file" type="file">
  <button class="upload">上传文件</button>
  
  <script>
    const uploadBtn = document.querySelector(".upload")
    uploadBtn.onclick = async function() {
      // 表单
      const fileEl = document.querySelector(".file")
      const file = fileEl.files[0]

      const formData = new FormData()
      formData.append("avatar", file)

      // 发送fetch请求
      const response = await fetch(url, {
        method: "post",
        body: formData
      })
      const res = await response.json()
      console.log("res:", res)
    }

  </script>

</body>
</html>
```

                

                
                
        

