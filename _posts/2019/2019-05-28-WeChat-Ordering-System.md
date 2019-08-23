---
layout: post
title: 企业微信订餐系统
no-post-nav: true
category: gitchat
tags: [gitchat]
keywords: 毕业设计,项目
---


# 微信企业级订餐系统
## 项目设计

### 角色划分

### 买家（微信端）

### 卖家（PC端）

### 功能分析

![](http://ww3.sinaimg.cn/large/006tNc79ly1g3grnbst44j30jg07sjrh.jpg)

### 关系

![](http://ww3.sinaimg.cn/large/006tNc79ly1g3grnbvrqcj30jg08gdg1.jpg)


### 部署架构

![](http://ww1.sinaimg.cn/large/006tNc79ly1g3grnbxos1j30jg06e0ss.jpg)


### 架构和基础框架
演进：单一应用架构->垂直应用架构->分布式服务架构->流动计算架构

![](http://ww4.sinaimg.cn/large/006tNc79ly1g3grr8azrqj30jg07sq3j.jpg)

### 国内微服务门派：
- 阿里系：
- Duboo
- Zookeeper
- SpringMVC or SpringBoot
- Spring Cloud系：
- Spring Cloud
- Netfilx Eureka
- SpringBoot
### 数据库设计
#### 数据库表之间的关系
- 类目表(product_category)
- 商品表(product_info)
- 订单主表(order_master)
- 订单详情表(order_detail)
- 卖家信息表(order_detail)

![](http://ww2.sinaimg.cn/large/006tNc79ly1g3grtiqrd9j30jg06tq31.jpg)
### 数据库表结构
```css
create table `product_info`(    `product_id` varchar(32) not null, --企业级的用varchar，自己玩的项目可以用自增的但数量大了可能不够用    `product_name` varchar(64) not null comment '商品名称',    `product_price` decimal(8,2) not null comment '单价',    `product_stock` int not null comment '库存',    `product_description` varchar(64) comment '描述',    `product_icon` varchar(512) comment '小图',    `category_type` int not null comment '类目编号',    `create_time` timestamp not null default current_timestamp comment '创建时间',    `update_time` timestamp not null default current_timestamp on update current_timestamp comment '更新时间',  --MYSQL5.7才可以default current_timestamp
    primary key (`product_id`)
) comment '商品表';
create table `product_category`(    `category_id` int not null auto_increment,  -- 类目不太可能爆多，所以可以自增    `category_name` varchar(64) not null comment '类目名字',    `category_type` int not null comment '类目编号',    `create_time` timestamp not null default current_timestamp comment '创建时间',    `update_time` timestamp not null default current_timestamp on update current_timestamp comment '更新时间',  --MYSQL5.7才可以default current_timestamp
    primary key (`category_id`)
    unique key `uqe_category_type` (`category_type`) --类目是唯一的
) comment '类目表'
create table `order_master`(    `order_id` varchar(32) not null,    `buyer_name` varchar(32) not null comment '买家名字',    `buyer_phone` varchar(32) not null comment '买家电话',    `buyer_address` varchar(128) not null comment '买家地址',    `buyer_openid` varchar(64) not null comment '买家微信openid',    `order_amount` decimal(8,2) not null comment '订单总金额'，    `order_status` tinyint(3) not null default '0' comment '订单状态，默认0新下单',    `pay_status` tinyint(3) not null default '0' comment '支付状态，默认0未支付',    `create_time` timestamp not null default current_timestamp comment '创建时间',    `update_time` timestamp not null default current_timestamp on update current_timestamp comment '更新时间',  --MYSQL5.7才可以default current_timestamp
    primary key (`order_id`),
    key `idx_buyer_openid` (`buyer_openid`)
) comment '订单表';
create table `order_detail`(    `detail_id` varchar(32) not null,    `order_id` varchar(32) not null,    `product_id` varchar(32) not null,    `product_name` varchar(64) not null comment '商品名字',    `product_price` decimal(8,2) not null comment '商品价格',    `product_quantity` int not null comment '商品数量'，    `product_icon` varchar(512) comment '商品小图',    `create_time` timestamp not null default current_timestamp comment '创建时间',    `update_time` timestamp not null default current_timestamp on update current_timestamp comment '更新时间',  --MYSQL5.7才可以default current_timestamp
    primary key (`detail_id`),
    key `idx_order_id`(`order_id`)
) comment '订单详情表';
```

### 项目起步
#### 日志的使用和配置
选用：logback
配置方式：
在application.yml配置
在logback-spring.xml
logback-spring.xml配置示例
```css
<?xml version="1.0" encoding="UTF-8" ?><configuration>
    <appender name="consoleLog" class="ch.qos.logback.core.ConsoleAppender">
        <layout class="ch.qos.logback.classic.PatternLayout">
            <pattern>
                %d - %msg%n            </pattern>
        </layout>
    </appender>

    <appender name="fileInfoLog" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <level>ERROR</level>
            <onMatch>DENY</onMatch>
            <onMismatch>ACCEPT</onMismatch>
        </filter>
        <encoder>
            <pattern>
                %msg%n            </pattern>
        </encoder>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>/Users/ztev/tomcat/sell/info.%d.log</fileNamePattern>
        </rollingPolicy>
    </appender>

    <appender name="fileErrorLog" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <filter class="ch.qos.logback.classic.filter.ThresholdFilter">
            <level>ERROR</level>
        </filter>
        <encoder>
            <pattern>
                %msg%n            </pattern>
        </encoder>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>/Users/ztev/tomcat/sell/error.%d.log</fileNamePattern>
        </rollingPolicy>
    </appender>

    <root level="info">
        <appender-ref ref="consoleLog"/>
        <appender-ref ref="fileInfoLog"/>
        <appender-ref ref="fileErrorLog"/>
    </root></configuration>
```
### 买家端开发
买家端类目模块的开发，按照dao->service->api的顺序开发。贯穿单元测试。
SpringBoot JPA把驼峰命名和表映时，小写+下划线，如
```css
ProductCategory=product_category
@Entitypublic class ProductCategory {    @Id
    @GeneratedValue
    private Integer categoryId;    private String categoryName;    private Integer categoryType;
    ...
}
```
在测试里增加@Transactional就可以回滚插入的测试数据
Getter和Setter方法的快捷实现，配合IDEA的插件lombok
```css
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
</dependency>
```
MySQL里的DECIMAL对应java里的BigDecimal
反复用到的类型值如categoryType可以定义一个枚举
```css 
@Getterpublic enum ProductStatusEnum {
    UP(0, "在架"),
    DOWN(1, "下架");    private Integer code;    private String message;

    ProductStatusEnum(Integer code, String message) {        this.code = code;        this.message = message;
    }
}
```
项目统一前缀
```css
server:
  context-path: /sell
```
返回给前端和数据库不同字段的话用VO，通过@JsonProperty可以起名不一致
```css
@Datapublic class ProductVO {    @JsonProperty("name")    private String categoryName;    
    private Integer type;
}
```
千万不要把数据库的查询放入for循环，开销巨大，一次性查出来以后再用for循环遍历处理比较合适。
OrderMaster和OrderDetail之间有关联在创建订单的时候，用一个OrderDTO的类把他们连接起来
多线程，查库存再扣库存的操作在数据库层面是分两步的，可能存在超卖
Controller里传进来的参数用表单验证注解。
```css 
@Datapublic class OrderForm {
    @NotEmpty(message = "姓名必填")
    private String name;

    @NotEmpty(message = "手机号必填")
    private String phone;

    @NotEmpty(message = "地址必填")
    private String address;

    @NotEmpty(message = "openid必填")
    private String openid;

    @NotEmpty(message = "购物车不能为空")
    private String items;
}
```
```css
public ResultVO<Map<String, String>> create(@Valid OrderForm orderForm, BindingResult bindingResult) {
如果你的类型在返回给json不一致时，可以用自定义的JsonSerialize
public class Date2LongSerializer extends JsonSerializer<Date> {    @Override
    public void serialize(Date date, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException, JsonProcessingException {
        jsonGenerator.writeNumber(date.getTime() / 1000);
    }
}//另一个类@JsonSerialize(using = Date2LongSerializer.class)private Date updateTime;
不想把null的传给前端
类上用`@JsonInclude(JsonInclude.Include.NON_NULL)
你也可以全局配置在application.yml上用jackson:default-property-inclusion: non_null
如果null的情况下想返回空，则在类里的成员变量里用上初始化，如stirng就用""
```

### 卖家端开发
freemarker的模版更新时，只需要在IDEA的IDE里面重新build项目即可。不需要重启整个web进程
使用微信登陆的原理是，openid相当于密码
分布式系统下的session
定义：多个自治的处理元素，不共享内存，通过消息通信合作。
分布式系统，强调的是不同的功能，组成一整套不同功能的集合，比如后厨里，炒菜和洗菜的构成分布式系统
功能类似的互为备份的就是集群。比如后厨里，两个洗菜的
分布式计算：例如hadoop的mapreduce，比如后厨里，两个炒菜的炒完放一个篮子里分不清谁是谁的。

![](http://ww3.sinaimg.cn/large/006tNc79ly1g3gs1slc1ij30jg0a40sw.jpg)

- session集中给redis集群控制
- 分布式系统统一取一个redis集群里取session
- 应对大用户量
- ip哈希，同一个用户一直访问同一台服务器，但是那个挂了的没辙了
- 通用方案是有个专门的Redis服务集群，都去他这里找
- 垂直拆分就是把服务拆成多份
- 横向拆分就是把同一个功能做集群
- 但是都会面临session的问题
### 项目优化
#### MyBatis
- 基于注解
- 基于XML方式，老传统，官方已不再推荐
- JPA和MyBatis的注意
- 建表用sql，jpa建表可控性较差，慎用@OneToMany和@ManyToOne以后不容易分库分表
### 压测
使用简易工具Apache ab
```css
ab -n 100 -c 100 http://www.baidu.com -n是请求，-c是并发，相当于100个人同时访问
ab -t 60 -c 100 http://www.baidu.com -t是60秒，连续60秒并发100个
```
### 秒杀
- 秒杀时，会有线程并发的问题
- 支持分布式
- 可以更细粒度的控制
- 多台机器上多个进程对一个数据进行操作的互斥
- 是一种解决方法
- 无法细粒度控制
- 只适合单点的情况
- 使用方法锁synchronized
### Redis实现分布式锁
### Redis缓存
```css
命中@Cacheable(cacheNames = "product", key = "123")
失效
更新@CachePut(cacheNames = "product",key="123")
结合场景，避免乱用。缓存和更新要及时。
```` 

### 项目的部署
切换到项目的所在目录下,
```css
cd Desktop/code/sell
```

使用mvn命令进行打包
```css
mvn clean package -Dmaven.test.skip=true
```
打包完成后,进入到target
```css
cd target
```
将打包好的jar包拷贝到服务器。
```css
scp sell.jar root@192.168.1.27:/opt/javaapps
```
SSH远程登陆服务器,查看/opt/javaapps目录下是否存在打包好的项目。
![](http://ww2.sinaimg.cn/large/006tNc79ly1g3r8sdvzdrj30u608mtbx.jpg)

设置sell.service 服务
```css
cd /etc/systemd/system/
```
编辑/新建 服务启动配置
```css
vim sell.service
```
```css
[Unit]
Description=sell
After=syslog.target.network.target
[Service]
Type=simple
ExecStart=/usr/bin/java -jar /opt/javaapps/sell.jar
ExecStop=/bin/kill -15 $MAINPID
User=root
Group=root
[Install]
WanteBy=muti-user.target
```

启动服务,并设置开机自启动
```css
systemctl start sell.service

systemctl enable sell.service
```

查看进程
```css
ps -ef | grep sell
```
![](http://ww1.sinaimg.cn/large/006tNc79ly1g3r99e66skj310u042jtd.jpg)

关闭服务,并取消开机自启动
```css
systemctl stop sell.service

systemctl disable sell.service
```
访问服务端接口,测试是否部署成功。
![](http://ww3.sinaimg.cn/large/006tNc79ly1g3r99v3j06j30vk0u0qco.jpg)

项目部署完成

