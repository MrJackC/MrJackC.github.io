---
layout: post
title: 每特教育互联网微服务电商项目学习第二天
category: springcloud
tags: [springcloud]
keywords: Spring Boot,Spring Cloud,微服务,open source,每特项目
---
##  分布式基础设施环境环境准备

## 基于Docker部署GitLab环境搭建

建议虚拟机内存2G以上

1.下载镜像文件

> docker pull beginor/gitlab-ce:11.0.1-ce.0

注意：一定要配置阿里云的加速镜像

2.创建GitLab 的配置 (etc) 、 日志 (log) 、数据 (data) 放到容器之外， 便于日后升级， 因此请先准备这三个目录。
> mkdir -p /mnt/gitlab/etc

> mkdir -p /mnt/gitlab/log

> mkdir -p /mnt/gitlab/data

3.	运行GitLab容器
```css
docker run \
    --detach \
    --publish 8443:443 \
    --publish 8090:80 \
    --name gitlab \
    --restart unless-stopped \
    -v /mnt/gitlab/etc:/etc/gitlab \
    -v /mnt/gitlab/log:/var/log/gitlab \
    -v /mnt/gitlab/data:/var/opt/gitlab \
    beginor/gitlab-ce:11.0.1-ce.0 
```
停止docker容器，并且删除
Docker stop 容器id
Docker rm 容器id
> systemctl stop firewall

4.修改/mnt/gitlab/etc/gitlab.rb把external_url改成部署机器的域名或者IP地址
PS:这里可能遇到的问题是在/mnt/gitlab/etc 目录下找不到gitlab.rb文件，原因是因为Gitlab文件没有挂载出来，通过上面的三步,停止docker容器,删除docker镜像,重新启动gitlab镜像。重启如果还是没有找到文件,就在命令行中加入相关参数
```css
docker run \
    --detach \
    --publish 8443:443 \
    --publish 8090:80 \
    --name gitlab \
    --restart unless-stopped \
    -v /mnt/gitlab/etc:/etc/gitlab \
    -v /mnt/gitlab/log:/var/log/gitlab \
    -v /mnt/gitlab/data:/var/opt/gitlab \
    --privileged=true
    beginor/gitlab-ce:11.0.1-ce.0 
```
> --privileged=true

> --privileged=true 添加权限，不然无权限创建/mnt/gitlab/etc/gitlab.rb等配置文件
添加相关权限再次重新启动gitlab容器后,既可以找到相关的配置文件。

> vi /mnt/gitlab/etc/gitlab.rb

external_url 'http://192.168.1.30'

4.修改/mnt/gitlab/data/gitlab-rails/etc/gitlab.yml

> vi /mnt/gitlab/data/gitlab-rails/etc/gitlab.yml

找到关键字 * ## Web server settings * 
将host的值改成映射的外部主机ip地址和端口，这里会显示在gitlab克隆地址
到此为止，gitlab的web管理页面就可以正常访问
修改默认root账户密码
自定义密码XXXX


## 新增用户权限
1.	注册用户mayikt 密码1314XXXX 授权Git代码地址
2.	设置中找到成员，添加项目权限即可


## SwaggerApi管理

### meite-shop-service-api

引入Maven依赖
```java
<!-- swagger-spring-boot -->
		<dependency>
			<groupId>com.spring4all</groupId>
			<artifactId>swagger-spring-boot-starter</artifactId>
			<version>1.7.0.RELEASE</version>
		</dependency>
```
### meite-shop-service-member
配置文件新增

### swagger相关配`
```css
swagger:
  base-package: com.mayikt.member.service
  title: SpringCloud2.x构建微服务电商项目-微信服务接口
  description: 该项目“基于SpringCloud2.x构建微服务电商项目”由每特教育|蚂蚁课堂版权所有，未经过允许的情况下，私自分享视频和源码属于违法行为。
  version: 1.1
  terms-of-service-url: www.mayikt.com
  contact:
    name: 97后互联网架构师-余胜军
    email: 644064779@qq.com
```
@EnableSwagger2Doc 开启Swagger生成文件

### meite-shop-service-api-weixin


## 配置文件新配置文件新增

### swagger相关配置
```css
swagger:
  base-package: com.mayikt.weixin.service
  title: SpringCloud2.x构建微服务电商项目-微信服务接口
  description: 该项目“基于SpringCloud2.x构建微服务电商项目”由每特教育|蚂蚁课堂版权所有，未经过允许的情况下，私自分享视频和源码属于违法行为。
  version: 1.1
  terms-of-service-url: www.mayikt.com
  contact:
    name: 97后互联网架构师-余胜军
    email: 644064779@qq.com
```
@EnableSwagger2Doc 开启Swagger生成文件

http://127.0.0.1:8300/swagger-ui.html
http://127.0.0.1:8200/swagger-ui.html

使用微服务网关统一管理Api
创建项目meite-shop-basics-springcloud-zuul
Maven依赖
```java
<dependencies>
		<dependency>
			<groupId>org.springframework.cloud</groupId>
			<artifactId>spring-cloud-starter-netflix-zuul</artifactId>
		</dependency>
		<!-- swagger-spring-boot -->
		<dependency>
			<groupId>com.spring4all</groupId>
			<artifactId>swagger-spring-boot-starter</artifactId>
			<version>1.7.0.RELEASE</version>
		</dependency>
	</dependencies>
```

统一管理API代`
```java
@SpringBootApplication
@EnableEurekaClient
@EnableZuulProxy
@EnableSwagger2Doc
public class AppGateWay {

	public static void main(String[] args) {
		SpringApplication.run(AppGateWay.class, args);
	}
	
	// 添加文档来源
	@Component
	@Primary
	class DocumentationConfig implements SwaggerResourcesProvider {
		@Override
		public List<SwaggerResource> get() {
			List resources = new ArrayList<>();
			// app-itmayiedu-order
			resources.add(swaggerResource("app-mayikt-member", "/app-mayikt-member/v2/api-docs", "2.0"));
			resources.add(swaggerResource("app-mayikt-weixin", "/app-mayikt-weixin/v2/api-docs", "2.0"));
			return resources;
		}
	
		private SwaggerResource swaggerResource(String name, String location, String version) {
			SwaggerResource swaggerResource = new SwaggerResource();
			swaggerResource.setName(name);
			swaggerResource.setLocation(location);
			swaggerResource.setSwaggerVersion(version);
			return swaggerResource;
		}
	
	}

}
```

## 相关配置

Maven私服环境搭建
Maven  Nexus私服的原理
Nexus就是Maven的私服
我们从项目实际开发来看：
1.一些无法从外部仓库下载的构件，例如内部的项目还能部署到私服上，以便供其他依赖项目使用。
2. 为了节省带宽和时间，在局域网内架设一个私有的仓库服务器，用其代理所有外部的远程仓库。当本地Maven项目需要下载构件时，先去私服请求，如果私服没有，则再去远程仓库请求，从远程仓库下载构件后，把构件缓存在私服上。这样，及时暂时没有Internet链接，由于私服已经缓存了大量构件，整个项目还是可以正常使用的。同时，也降低了中央仓库的负荷。

什么场景用Maven私服呢？
在实际开发中，项目中可能会用到第三方的jar、内部通讯的服务接口都会打入到公司的私服中。
基于Docker搭建Maven私服
1.	下载一个nexus3的镜像
> docker pull sonatype/nexus3
2.	将容器内部/var/nexus-data挂载到主机/root/nexus-data目录。
> docker run -d -p 8081:8081 --name nexus -v /root/nexus-data:/var/nexus-data --restart=always sonatype/nexus3

关闭防火墙,访问http://ip:8081  
Maven私服启动容器稍微比较慢，等待1分钟即可。
默认登陆账号 admin admin123
PS:这里遇到的问题，使用默认的admin123登录登录不成功。
解决方案：
> 3.17之后的版本密码改成随即的了，而且登录时候提示密码在/nexus-data/admin.password里。
>
> 查询容器id

```shell
docker ps 
```

> 进入容器里面 

```shell
docker exec -it 容器id bash
```

> 找到admin.password文件，默认位置在

```shell
/opt/sonatype/sonatype-work/sonatype-work/admin.password
```

> 查看密码

```shell
vim admin.password 
```
* 将查看到的密码直接复制，到登录地址输入用户名和密码登录
* 进入之后，就会提示修改密码。修改成你想要修改的密码即可！！！
* 
## 创建Maven私服仓库
创建私服仓库
创建仓库，点击Create repository,然后选择maven2(hosted)然后输入仓库名称（test-release）。在version policy中选择这个仓库的类型，这里选择release,在Deployment policy中选择Allow redeploy（这个很重要）.

## 创建私服账号
点击左侧菜单栏的Users菜单，然后点击Create local user.我这里创建了一个用户，账号密码都是：mayikt 
Mayikt-release
本地settings.xml
```css
<servers>
	<server>
	    <id>mayikt</id>
	    <username>mayikt</username>
	    <password>mayikt</password>
	</server>
</servers>
```

创建一个Maven工程
创建一个maven工程，并且打包到maven私服。
相关配置
```java
	<!--注意限定版本一定为RELEASE,因为上传的对应仓库的存储类型为RELEASE -->
	<!--指定仓库地址 -->
	<distributionManagement>
		<repository>
			<!--此名称要和.m2/settings.xml中设置的ID一致 -->
			<id>mayikt</id>
			<url>http://192.168.1.30:8081/repository/mayikt-release/</url>
		</repository>
	</distributionManagement>
	
	<build>
		<plugins>
			<!--发布代码Jar插件 -->
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-deploy-plugin</artifactId>
				<version>2.7</version>
			</plugin>
			<!--发布源码插件 -->
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-source-plugin</artifactId>
				<version>2.2.1</version>
				<executions>
					<execution>
						<phase>package</phase>
						<goals>
							<goal>jar</goal>
						</goals>
					</execution>
				</executions>
			</plugin>
		</plugins>
	</build>
```

> mvn deploy

测试依赖信息
```java
	<dependencies>
		<dependency>
			<groupId>com.mayikt</groupId>
			<artifactId>mayikt_springboot</artifactId>
			<version>0.0.1-RELEASE</version>
		</dependency>
	</dependencies>
	
	<repositories>
		<repository>
			<id>mayikt</id>
			<url>http://192.168.1.30:8081/repository/mayikt-release/</url>
		</repository>
	</repositories>
```
如何判断文件是否发生改变 
如何知道一个文件是否改变了呢？当然是用比较文件hash值的方法，文件hash又叫文件签名，文件中哪怕一个bit位被改变了，文件hash就会不同。比较常用的文件hash算法有MD5和SHA-1。

Docker相关命令
> systemctl stop firewalld.service

## 微服务项目中如何统一管理Swagger文档

在网关实现
集成步骤：
在会员和微信项目加入Swagger依赖jar包
注意：将Swagger依赖放入api项目中，注解统一写在接口中
Swagger一般只会在测试环境搭建，可以在描述中写上不同环境的接口地址。
Maven私服如果没有对应的jar包，手动打入本地仓库或者私服中。
大家企业级私服，私服不允许外网访问，只能够在内网进行访问。
Maven私服应用场景
①	缓存企业级jar
②	微服务开发中，实现对微服务接口实现发布与调用。
③	正常在微服务开发中，不会直接引入到其他接口源码项目。引入接口jar包进行调用。
会员项目调用订单项目
为什么在微服务电商项目中？要使用Maven私服？Maven的作用？
管理微服务接口RPC通讯
原理：因为微服务架构采用的是分布式开发模式，生产者将自己服务接口发布到maven私服仓库中，消费者直接从maven私服仓库中下载对应的服务接口即可。实现微服务中的，消费者与生产者通讯。




