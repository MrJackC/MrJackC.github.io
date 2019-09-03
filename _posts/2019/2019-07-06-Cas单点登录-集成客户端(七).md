---
layout: post
title: Cas单点登录-服务端集成客户端Spring方式(七)
category: server
tags: [server]
copyright: mrjason
keywords: 单点登录,sso
---

上一篇博客,我们已经与客户端集成了,也实现了单点登录,一个系统登录之后,另一个系统无需再次登录，客户端是从官网下载的例子，一般我们的项目都是与spring集成的，那么本篇来整合spring，改造之前从官网下载的客户端。为了后面整合别的东西方便，这里直接将mybatis和springmvc整合进来。

整合之后目录如下：

![2](http://ww3.sinaimg.cn/large/006tNc79ly1g4pxft9irij30u00zhact.jpg)

### 整合过程

### 1.客户端导入证书

网上说必须保证客户端证书和服务端证书是同一个证书，不然就会报错，我因为是在同一台机器,所以就没有进行这一步操作。

如果需要的话，请见骨架搭建（一）

2.在src/main下新建java目录,默认是没有java这个目录的

创建好java目录,然后创建自己的包,之后可以在spring配置文件中配置扫描包。 

在idea中新建的java只是一个普通的文件夹,还需要将它配置为一个source文件，具体步骤如下： 

File -> Project Structure… -> 最后点击应用。 

![2](http://ww2.sinaimg.cn/large/006tNc79ly1g4pxfu4w5sj31mg0rawk0.jpg)

或者右键Java文件夹

![2](http://ww2.sinaimg.cn/large/006tNc79ly1g4pxfvjrdkj30ik0nw0v3.jpg)

### 3.配置pom.xml
```css
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>iamlabs.unicon.net</groupId>
    <artifactId>cas-login-spring-client1</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>war</packaging>
    <name>cas-login-spring-client1</name>
    <description>A sample web application that exercises the CAS protocol features via the Java CAS Client.</description>
    <build>
        <finalName>cas-login-spring-client1</finalName>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.5.1</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
            </plugin>
            <!--  tomcat7 plugin -->
            <plugin>
                <groupId>org.apache.tomcat.maven</groupId>
                <artifactId>tomcat7-maven-plugin</artifactId>
                <version>2.2</version>
                <configuration>
                    <port>8081</port>
                    <uriEncoding>UTF-8</uriEncoding>
                    <server>tomcat7</server>
                    <path>/</path>
                </configuration>
            </plugin>
        </plugins>
    </build>

​    <properties>
​        <spring.version>4.3.18.RELEASE</spring.version>
​        <!--mybatis-->
​        <mybatis-spring.version>1.2.2</mybatis-spring.version>
​        <mybatis.version>3.3.1</mybatis.version>
​        <!--druid连接池-->
​        <druid.version>1.0.28</druid.version>
​    </properties>

​    <dependencies>

​        <!-- Spring配置开始 -->
​        <dependency>
​            <groupId>org.springframework</groupId>
​            <artifactId>spring-core</artifactId>
​            <version>${spring.version}</version>
​        </dependency>
​        <dependency>
​            <groupId>org.springframework</groupId>
​            <artifactId>spring-web</artifactId>
​            <version>${spring.version}</version>
​        </dependency>
​        <dependency>
​            <groupId>org.springframework</groupId>
​            <artifactId>spring-context</artifactId>
​            <version>${spring.version}</version>
​        </dependency>
​        <dependency>
​            <groupId>org.springframework</groupId>
​            <artifactId>spring-beans</artifactId>
​            <version>${spring.version}</version>
​        </dependency>
​        <dependency>
​            <groupId>org.springframework</groupId>
​            <artifactId>spring-tx</artifactId>
​            <version>${spring.version}</version>
​        </dependency>
​        <dependency>
​            <groupId>org.springframework</groupId>
​            <artifactId>spring-webmvc</artifactId>
​            <version>${spring.version}</version>
​        </dependency>
​        <dependency>
​            <groupId>org.springframework</groupId>
​            <artifactId>spring-aop</artifactId>
​            <version>${spring.version}</version>
​        </dependency>
​        <dependency>
​            <groupId>org.aspectj</groupId>
​            <artifactId>aspectjweaver</artifactId>
​            <version>1.8.10</version>
​        </dependency>
​        <dependency>
​            <groupId>org.springframework</groupId>
​            <artifactId>spring-orm</artifactId>
​            <version>${spring.version}</version>
​        </dependency>
​        <!-- Spring配置结束 -->

​        <!--mybatis与Spring集成-->
​        <dependency>
​            <groupId>org.mybatis</groupId>
​            <artifactId>mybatis</artifactId>
​            <version>${mybatis.version}</version>
​        </dependency>
​        <dependency>
​            <groupId>org.mybatis</groupId>
​            <artifactId>mybatis-spring</artifactId>
​            <version>${mybatis-spring.version}</version>
​        </dependency>
​        <dependency>
​            <groupId>mysql</groupId>
​            <artifactId>mysql-connector-java</artifactId>
​            <version>5.1.43</version>
​        </dependency>
​        <!--连接池  -->
​        <dependency>
​            <groupId>com.alibaba</groupId>
​            <artifactId>druid</artifactId>
​            <version>${druid.version}</version>
​        </dependency>

​        <!-- 配置spring aop 使用 cglib代理-->
​        <dependency>
​            <groupId>cglib</groupId>
​            <artifactId>cglib-nodep</artifactId>
​            <version>3.2.5</version>
​        </dependency>

​        <!-- 采用 logback +slf4j 打印日志，不使用log4j打印日志 -->
​        <!-- 声明slf4j的底层实现是logback，是企业级开发高性能日志框架，非常优化的实现了slf4j-->
​        <dependency>
​            <groupId>ch.qos.logback</groupId>
​            <artifactId>logback-classic</artifactId>
​            <version>1.2.3</version>
​        </dependency>
​        <!-- slf4j核心抽象日志框架。使程序中的日志系统面向抽象，而不是具体的实现 -->
​        <dependency>
​            <groupId>org.slf4j</groupId>
​            <artifactId>slf4j-api</artifactId>
​            <version>1.7.24</version>
​        </dependency>
​        <!-- 日志桥接工具：排除现有commons-logging依赖的影响。
​        如果你的jar包中有commons-logging打印日志，jcl动态桥架工具会将其骗到slf4j的日志系统中-->
​        <dependency>
​            <groupId>org.slf4j</groupId>
​            <artifactId>jcl-over-slf4j</artifactId>
​            <version>1.7.7</version>
​        </dependency>

​        <dependency>
​            <groupId>javax.servlet</groupId>
​            <artifactId>servlet-api</artifactId>
​            <version>2.5</version>
​        </dependency>

​        <dependency>
​            <groupId>javax.servlet</groupId>
​            <artifactId>jstl</artifactId>
​            <version>1.2</version>
​        </dependency>

​        <dependency>
​            <groupId>org.jasig.cas.client</groupId>
​            <artifactId>cas-client-core</artifactId>
​            <version>3.5.0</version>
​        </dependency>
​    </dependencies>
</project>
```
### 4.spring.xml
```java

<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:context="http://www.springframework.org/schema/context"
    xmlns:aop="http://www.springframework.org/schema/aop"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-4.0.xsd
    http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-4.0.xsd
    http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop-4.0.xsd">

​    <!-- 扫描包加载Service实现类 -->
​    <context:component-scan base-package="com.wangsaichao.cas"></context:component-scan>

​    <!-- 加载配置文件 -->
​    <context:property-placeholder location="classpath:config/*.properties" />

​    <!-- 激活自动代理功能 -->
​    <aop:aspectj-autoproxy proxy-target-class="true"/>

​    <!--导入springmvc的配置-->
​    <import resource="spring-mvc.xml"/>
​    <import resource="spring-mybatis.xml"/>
</beans>

### 5.spring-mvc.xml

<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:mvc="http://www.springframework.org/schema/mvc"
    xmlns:context="http://www.springframework.org/schema/context"
    xsi:schemaLocation="http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc-3.1.xsd
        http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd">

​    <!-- 自动扫描该包，使SpringMVC认为包下用了@controller注解的类是控制器 -->
​    <context:component-scan base-package="com.wangsaichao.cas" use-default-filters="false" >
​        <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
​        <context:include-filter type="annotation" expression="org.springframework.web.bind.annotation.ControllerAdvice"/>
​    </context:component-scan>

​    <!-- 通过Annotation 来控制Controller -->
​    <mvc:annotation-driven></mvc:annotation-driven>
​    <mvc:default-servlet-handler/>

​    <!-- 静态资源处理  css js imgs -->
​    <!--<mvc:resources mapping="/images/**" location="/images/" />-->
​    <!--<mvc:resources mapping="/js/**" location="/js/" />-->
​    <!--<mvc:resources mapping="/css/**" location="/css/" />-->

​    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
​        <!-- 3.0.5后默认加上了jstl的属性配置.这个就是默认的配置 -->
​        <property name="viewClass" value="org.springframework.web.servlet.view.JstlView"></property>
​        <!-- 设定前缀 -->
​        <property name="prefix" value="/WEB-INF/jsp/"></property>
​        <!-- 设定后缀 -->
​        <property name="suffix" value=".jsp"></property>
​    </bean>
</beans>
```
### 6.spring-mybatis.xml
```css
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd">

​    <!-- 数据源druid -->
​    <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource" init-method="init" destroy-method="close">
​        <property name="driverClassName" value="${jdbc.driver}" />
​        <property name="url" value="${jdbc.url}" />
​        <property name="username" value="${jdbc.username}" />
​        <property name="password" value="${jdbc.password}" />
​        <!-- 以下是有关连接池的配置： -->
​        <!-- 最大连接数量 -->
​        <property name="maxActive" value="90" />
​        <!-- 程序初始化连接的数量： -->
​        <property name="initialSize" value="30"/>
​        <!-- 程序中最小空闲连接数  -->
​        <property name="minIdle" value="20" />
​        <!-- 连接等待超时时间 单位为毫秒 -->
​        <property name="maxWait" value="60000"/>
​        <!-- 配置间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒 -->
​        <property name="timeBetweenEvictionRunsMillis" value="60000" />
​        <!-- 配置一个连接在池中最小生存的时间，单位是毫秒，这里是五分钟 -->
​        <property name="minEvictableIdleTimeMillis" value="300000" />
​        <!-- 使用非公平锁获取连接 -->
​        <property name="useUnfairLock" value="true"/>
​        <!-- 用来检测连接是否有效的sql，要求是一个查询语句-->
​        <property name="validationQuery" value="select 'x'" />
​        <!-- 申请连接的时候检测 -->
​        <property name="testWhileIdle" value="true" />
​        <!-- 申请连接时执行validationQuery检测连接是否有效，配置为true会降低性能 -->
​        <property name="testOnBorrow" value="false" />
​        <!-- 归还连接时执行validationQuery检测连接是否有效，配置为true会降低性能  -->
​        <property name="testOnReturn" value="false" />
​    </bean>

​    <!-- 2. mybatis的SqlSession的工厂: SqlSessionFactoryBean  dataSource / typeAliasesPackage       -->
​    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
​        <property name="dataSource" ref="dataSource"/>
​        <!--自动扫描指定包下的mapper.xml文件-->
​        <property name="mapperLocations" value="classpath:mapper/*.xml" />
​    </bean>

​    <!--3. mybatis配置扫描器 : MapperScannerConfigurer sqlSessionFactory / basePackage -->
​    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
​        <!--扫描指定包以及它的子包下的所有映射接口类-->
​        <property name="basePackage" value="com.wangsaichao.cas.dao"/>
​        <property name="sqlSessionFactoryBeanName" value="sqlSessionFactory"/>
​    </bean>

​    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
​        <property name="dataSource" ref="dataSource"/>
​    </bean>

​    <!-- enable transaction annotation support -->
​    <tx:annotation-driven transaction-manager="transactionManager"/>

</beans>
```
### 7.web.xml
```css
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xmlns="http://java.sun.com/xml/ns/javaee" xmlns:jsp="http://java.sun.com/xml/ns/javaee/jsp"
         xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"
         version="2.5">
    <display-name>cas-app</display-name>

​    <!-- 配置springmvc的监听器 -->
​    <listener>
​        <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
​    </listener>

​    <!-- springmvc 的配置信息 -->
​    <context-param>
​        <param-name>contextConfigLocation</param-name>
​        <param-value>classpath:spring/spring.xml</param-value>
​    </context-param>

​    <filter>
​        <filter-name>SetCharacterEncoding</filter-name>
​        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
​        <init-param>
​            <param-name>encoding</param-name>
​            <param-value>UTF-8</param-value>
​        </init-param>
​    </filter>
​    <filter-mapping>
​        <filter-name>SetCharacterEncoding</filter-name>
​        <url-pattern>/*</url-pattern>
​    </filter-mapping>

​    <!-- ========================单点登录开始 ======================== -->
​    <!-- 用于单点退出，该过滤器用于实现单点登出功能，可选配置 -->
​    <listener>
​        <listener-class>org.jasig.cas.client.session.SingleSignOutHttpSessionListener</listener-class>
​    </listener>
​    <!-- 该过滤器用于实现单点登出功能，可选配置。 -->
​    <filter>
​        <filter-name>CAS Single Sign Out Filter</filter-name>
​        <filter-class>org.jasig.cas.client.session.SingleSignOutFilter</filter-class>
​        <init-param>
​            <param-name>casServerUrlPrefix</param-name>
​            <param-value>https://server.cas.com:8443/cas</param-value>
​        </init-param>
​    </filter>
​    <filter-mapping>
​        <filter-name>CAS Single Sign Out Filter</filter-name>
​        <url-pattern>/*</url-pattern>
​    </filter-mapping>

​    <!-- 该过滤器用于实现单点登录功能 -->
​    <filter>
​        <filter-name>CAS Filter</filter-name>
​        <filter-class>org.jasig.cas.client.authentication.AuthenticationFilter</filter-class>
​        <init-param>
​            <param-name>casServerLoginUrl</param-name>
​            <param-value>https://server.cas.com:8443/cas/login</param-value>
​            <!-- 使用的CAS-Server的登录地址,一定是到登录的action -->
​        </init-param>
​        <init-param>
​            <param-name>serverName</param-name>
​            <param-value>http://app1.cas.com:8081</param-value>
​            <!-- 当前Client系统的地址 -->
​        </init-param>
​    </filter>
​    <filter-mapping>
​        <filter-name>CAS Filter</filter-name>
​        <url-pattern>/*</url-pattern>
​    </filter-mapping>
​    <!-- 该过滤器负责对Ticket的校验工作 -->
​    <filter>
​        <filter-name>CAS Validation Filter</filter-name>
​        <filter-class>org.jasig.cas.client.validation.Cas30ProxyReceivingTicketValidationFilter</filter-class>
​        <init-param>
​            <param-name>casServerUrlPrefix</param-name>
​            <param-value>https://server.cas.com:8443/cas</param-value>
​            <!-- 使用的CAS-Server的地址,一定是在浏览器输入该地址能正常打开CAS-Server的根地址 -->
​        </init-param>
​        <init-param>
​            <param-name>serverName</param-name>
​            <param-value>http://app1.cas.com:8081</param-value>
​            <!-- 当前Client系统的地址 -->
​        </init-param>
​    </filter>
​    <filter-mapping>
​        <filter-name>CAS Validation Filter</filter-name>
​        <url-pattern>/*</url-pattern>
​    </filter-mapping>

​    <!-- 该过滤器负责实现HttpServletRequest请求的包裹， 比如允许开发者通过HttpServletRequest的getRemoteUser()方法获得SSO登录用户的登录名，可选配置。 -->
​    <filter>
​        <filter-name>CAS HttpServletRequest Wrapper Filter</filter-name>
​        <filter-class>org.jasig.cas.client.util.HttpServletRequestWrapperFilter</filter-class>
​    </filter>
​    <filter-mapping>
​        <filter-name>CAS HttpServletRequest Wrapper Filter</filter-name>
​        <url-pattern>/*</url-pattern>
​    </filter-mapping>

​    <!--
​        该过滤器使得开发者可以通过org.jasig.cas.client.util.AssertionHolder来获取用户的登录名。
​         比如AssertionHolder.getAssertion().getPrincipal().getName()
​         或者request.getUserPrincipal().getName()
​    -->
​    <filter>
​        <filter-name>CAS Assertion Thread Local Filter</filter-name>
​        <filter-class>org.jasig.cas.client.util.AssertionThreadLocalFilter</filter-class>
​    </filter>
​    <filter-mapping>
​        <filter-name>CAS Assertion Thread Local Filter</filter-name>
​        <url-pattern>/*</url-pattern>
​    </filter-mapping>
​    <!-- ========================单点登录结束 ======================== -->

​    <!-- 配置springmvc -->
​    <servlet>
​        <servlet-name>spring-mvc</servlet-name>
​        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
​        <init-param>
​            <description>spring mvc 配置文件</description>
​            <param-name>contextConfigLocation</param-name>
​            <param-value>classpath:spring/spring-mvc.xml</param-value>
​        </init-param>
​        <load-on-startup>1</load-on-startup>
​    </servlet>
​    <servlet-mapping>
​        <servlet-name>spring-mvc</servlet-name>
​        <url-pattern>/</url-pattern>
​    </servlet-mapping>
</web-app>
```
### 测试

直接访问添加用户的路径 http://app1.cas.com:8081/insert?username=lisi 	

然后跳转到cas服务端登录 

https://server.cas.com:8443/cas/login?service=http%3A%2F%2Fapp1.cas.com%3A8081%2Finsert%3Fusername%3Dlisi 

登录之后，操作成功。 

![2](http://ww4.sinaimg.cn/large/006tNc79ly1g4pxfuyp55j30yw0hhn10.jpg)