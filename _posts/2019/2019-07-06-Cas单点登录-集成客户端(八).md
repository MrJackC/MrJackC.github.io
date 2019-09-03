---
layout: post
title: Cas单点登录-服务端集成客户端SpringBoot方式(八)
category: server
tags: [server]
copyright: mrjason
keywords: 单点登录,sso
---


之前整合了客户端的demo，也和spring整合了,现在的很多项目,都已经开始使用springboot了，spring传统方式是配置在web.xml中,Springboot和cas集成开发,主要也就是配置了四个过滤器，和一个监听器到Springboot中，其实和传统的配置方式，没有太大的区别。只是将web.xml配置都通过代码的配置改为基于javabean的配置。本次整合使用别人写好的一个starter。别人写好的第三方的starter,大家可以看一下源码,很简单，抽空我会写一篇 sprigboot自己实现一个starter。

### 整合之后目录如下：

![1](http://ww4.sinaimg.cn/large/006tNc79ly1g4pybathvtj30u00wbtc7.jpg)

整合了mybatis和 使用jsp,并且写了一个添加用户的功能,这些代码就不上了,看源码吧，只记录下面这些配置。lib包中的jar包是本次使用的第三方starter,如果没有使用maven可以使用这个jar包。

### 整合过程

### 1.pom添加依赖
```css
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">

​    <modelVersion>4.0.0</modelVersion>
​    <groupId>iamlabs.unicon.net</groupId>
​    <artifactId>cas-login-springboot-client2</artifactId>
​    <version>0.0.1-SNAPSHOT</version>
​    <packaging>jar</packaging>
​    <name>cas-login-springboot-client2</name>
​    <description>A sample web application that exercises the CAS protocol features via the Java CAS Client.</description>

​    <parent>
​        <groupId>org.springframework.boot</groupId>
​        <artifactId>spring-boot-starter-parent</artifactId>
​        <version>2.0.0.RELEASE</version>
​    </parent>

​    <properties>
​        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
​        <java.cas.client.version>3.5.0</java.cas.client.version>
​    </properties>

​    <dependencies>
​        <!-- 添加spring-web的依赖，直接就可以使用springmvc了 -->
​        <dependency>
​            <groupId>org.springframework.boot</groupId>
​            <artifactId>spring-boot-starter-web</artifactId>
​        </dependency>
​        <!--jsp页面使用jstl标签-->
​        <dependency>
​            <groupId>javax.servlet</groupId>
​            <artifactId>jstl</artifactId>
​        </dependency>
​        <!--用于编译jsp-->
​        <dependency>
​            <groupId>org.apache.tomcat.embed</groupId>
​            <artifactId>tomcat-embed-jasper</artifactId>
​            <scope>provided</scope>
​        </dependency>
​        <!-- Spring Boot 整合Mybatis -->
​        <dependency>
​            <groupId>org.mybatis.spring.boot</groupId>
​            <artifactId>mybatis-spring-boot-starter</artifactId>
​            <version>1.3.0</version>
​        </dependency>
​        <!-- MySql -->
​        <dependency>
​            <groupId>mysql</groupId>
​            <artifactId>mysql-connector-java</artifactId>
​        </dependency>
​        <!--连接池  -->
​        <dependency>
​            <groupId>com.alibaba</groupId>
​            <artifactId>druid</artifactId>
​            <version>1.0.28</version>
​        </dependency>
​        <!--cas的客户端 -->
​        <dependency>
​            <groupId>net.unicon.cas</groupId>
​            <artifactId>cas-client-autoconfig-support</artifactId>
​            <version>1.4.0-GA</version>
​            <exclusions>
​                <exclusion>
​                    <groupId>org.jasig.cas.client</groupId>
​                    <artifactId>cas-client-core</artifactId>
​                </exclusion>
​            </exclusions>
​        </dependency>
​        <dependency>
​            <groupId>org.jasig.cas.client</groupId>
​            <artifactId>cas-client-core</artifactId>
​            <version>${java.cas.client.version}</version>
​        </dependency>
​        <!-- Spring AOP -->
​        <dependency>
​            <groupId>org.springframework.boot</groupId>
​            <artifactId>spring-boot-starter-aop</artifactId>
​        </dependency>

​    </dependencies>

​    <build>
​        <!--打包后的项目名称  -->
​        <finalName>cas-login-springboot-client2</finalName>
​        <plugins>
​            <!-- java编译插件 -->
​            <plugin>
​                <groupId>org.apache.maven.plugins</groupId>
​                <artifactId>maven-compiler-plugin</artifactId>
​                <configuration>
​                    <source>1.8</source>
​                    <target>1.8</target>
​                    <encoding>UTF-8</encoding>
​                </configuration>
​            </plugin>
​            <!-- 打jar包的插件 -->
​            <plugin>
​                <groupId>org.apache.maven.plugins</groupId>
​                <artifactId>maven-jar-plugin</artifactId>
​                <configuration>
​                    <archive>
​                        <manifest>
​                            <addClasspath>true</addClasspath>
​                            <classpathPrefix>lib</classpathPrefix>
​                            <!-- 程序启动入口 -->
​                            <mainClass>com.wangsaichao.cas.Application</mainClass>
​                        </manifest>
​                        <manifestEntries>
​                            <!-- 将lib包抽到上一层文件夹中, classpathPrefix属性是包名-->
​                            <Class-Path>./</Class-Path>
​                        </manifestEntries>
​                    </archive>
​                    <excludes>
​                        <!-- 将config/**抽离出来 -->
​                        <exclude>config/**</exclude>
​                    </excludes>
​                </configuration>
​            </plugin>
​            <plugin>
​                <artifactId>maven-assembly-plugin</artifactId>
​                <configuration>
​                    <!-- not append assembly id in release file name -->
​                    <appendAssemblyId>false</appendAssemblyId>
​                    <descriptors>
​                        <!-- 注意这里的路径 -->
​                        <descriptor>src/main/build/package.xml</descriptor>
​                    </descriptors>
​                </configuration>
​                <executions>
​                    <execution>
​                        <id>make-assembly</id>
​                        <phase>package</phase>
​                        <goals>
​                            <goal>single</goal>
​                        </goals>
​                    </execution>
​                </executions>
​            </plugin>
​        </plugins>
​    </build>
</project>
```
### 2.application.properties添加配置

### cas配置

### cas服务端前缀,不是登录地址
```css
cas.server-url-prefix=https://server.cas.com:8443/cas
```
### cas的登录地址
```css
cas.server-login-url=https://server.cas.com:8443/cas/login
```
# 当前客户端的地址
```css
cas.client-host-url=http://app2.cas.com:8082
```
### Ticket校验器使用Cas30ProxyReceivingTicketValidationFilter
```css
cas.validation-type=CAS3
```
cas.validation-type目前支持3中方式：1、CAS；2、CAS3；3、SAML 可以自己看一下源码,都是之前使用过的类。

### 3.开启CAS Client支持
```java
@SpringBootApplication 
//@PropertySource(value={"classpath:config/path.properties"},ignoreResourceNotFound=true,encoding="utf-8") 
//@ImportResource("classpath:spring/*.xml") 
//@EnableAspectJAutoProxy(proxyTargetClass = true,exposeProxy = true) @EnableCasClient
//开启cas 
public class Application {    
     public static void main(String[] args) {  
                SpringApplication.run(Application.class, args);    
                 } 
            } 
```
通过上面的3步，就可以完成CAS的客户端认证了！

**测试**

注意：启动的时候不能使用main方法启动,使用java -jar 或者 在命令窗口执行 mvn clean spring-boot:run; 否则将找不到jsp。 

开始测试

直接访问添加用户的路径 http://app2.cas.com:8082/ 

然后跳转到cas服务端登录 

https://server.cas.com:8443/cas/login?service=http%3A%2F%2Fapp2.cas.com%3A8082%2F 

登录之后，操作成功。 

然后浏览器输入添加用户的地址,跳转到添加成功页面。客户端1是上一篇整合的 spring传统方式的客户端。可以实现单点的登录,没有影响。也可以添加用户操作,整合成功。 

![1](http://ww1.sinaimg.cn/large/006tNc79ly1g4pyb9ujd0j30yw0hhgo2.jpg)