# Spring Boot2 集成 jasypt 3.0.4 配置文件敏感信息加密
 
 
#### 文章目录

 - [1. 导入依赖]

 - [2. yml中添加配置文件]

 - [3. 加解密工具类]

 - [4. 敏感信息替换]

 - [5. 编译打包]

 - [6. 启动项目]

## 1. 导入依赖

 
```bash
        <!--敏感信息加密-->
        <dependency>
            <groupId>com.github.ulisesbocchio</groupId>
            <artifactId>jasypt-spring-boot-starter</artifactId>
            <version>3.0.4</version>
```
 

###### 2. yml中添加配置文件

 
第一种（盐值配置yml中，不推荐）：

 
```bash
jasypt:
  encryptor:
    # 盐加密
    password: aabbcc
    # 指定加密方式
    algorithm: PBEWithMD5AndDES
    iv-generator-classname: org.jasypt.iv.NoIvGenerator
```
 
第二种（盐值不配置yml中，推荐使用）：

 
```bash
# 数据源配置
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: ENC(+wjdzeW1IvjYZ5UJO3BLdAdPchlj51+8+ifwEN6BS9CGrDbbZCAviruFC5w1rm3KMGADu6cVvJ2zf2EYbC/p/iJzFF/2lR5LIzT1+bn8OvjyF1c9OFYlz+wucstoc8sPN9/OUnrGT31Ai/SSdViazQaoJuENGF253j1+L0yIV3F1r0vtbn8qkVhEpTDN8jOsVtLoe2A+CzwesWrVlJTYlQ==)
    username: ENC(8SMzrWEju/4nzVruNiLPDg==)
    password: ENC(lj77+RDcHHw6bH6MRQdntw==)
server:
  port: 80

jasypt:
  encryptor:
    # 指定加密方式
    algorithm: PBEWithMD5AndDES
    iv-generator-classname: org.jasypt.iv.NoIvGenerator
```
 

###### 3. 加解密工具类

 
```bash
package com.gblfy.ws.utils;

import org.jasypt.encryption.pbe.PooledPBEStringEncryptor;
import org.jasypt.encryption.pbe.config.SimpleStringPBEConfig;

/**
 * 加解密工具类
 *
 * @author mrjason
 * @date 2024-09-19
 **/
public class JasyptUtil {


    /**
     * Jasypt生成加密结果
     *
     * @param password 配置文件中设定的加密盐值
     * @param value    加密值
     * @return
     */
    public static String encyptPwd(String password, String value) {
        PooledPBEStringEncryptor encryptor = new PooledPBEStringEncryptor();
        encryptor.setConfig(cryptor(password));
        String result = encryptor.encrypt(value);
        return result;
    }

    /**
     * 解密
     *
     * @param password 配置文件中设定的加密盐值
     * @param value    解密密文
     * @return
     */
    public static String decyptPwd(String password, String value) {
        PooledPBEStringEncryptor encryptor = new PooledPBEStringEncryptor();
        encryptor.setConfig(cryptor(password));
        String result = encryptor.decrypt(value);
        return result;
    }

    public static SimpleStringPBEConfig cryptor(String password) {
        SimpleStringPBEConfig config = new SimpleStringPBEConfig();
        config.setPassword(password);
        config.setAlgorithm("PBEWithMD5AndDES");
        config.setKeyObtentionIterations("1000");
        config.setPoolSize("1");
        config.setProviderName("SunJCE");
        config.setSaltGeneratorClassName("org.jasypt.salt.RandomSaltGenerator");
        config.setStringOutputType("base64");
        return config;
    }


    public static void main(String[] args) {
        String slat = "gblfy.com";
        // 加密
        String encPwd = encyptPwd(slat, "123456");
        // 解密
        String decPwd = decyptPwd(slat, encPwd);
        System.out.println(encPwd);
        System.out.println(decPwd);
    }

}

```
 

 ![密码加密](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/20241129141239.png)

###### 4. 敏感信息替换

 

![密码替换](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/20241129141443.png)
 

###### 5. 编译打包

 
```bash
	mvn clean install -DskipTests
```
 

###### 6. 启动项目

 - 第一种（盐值明文启动）：

 
```bash
java  -Djasypt.encryptor.password=gblfy.com -jar unified-access-center-0.0.1-SNAPSHOT.jar
``` 

 - 第二种（盐值表达式启动）：
 在服务器的环境变量里配置,进一步提高安全性

 
```bash
# 打开/etc/profile文件
vim /etc/profile
 
# 文件末尾插入
export JASYPT_PASSWORD =gblfy.com
 
# 编译 
source /etc/profile
 
运行 
java -jar -Djasypt.encryptor.password=${JASYPT_PASSWORD} xxx.jar

```
 
```bash
java  -Djasypt.encryptor.password=${JASYPT_PASSWORD} -jar unified-access-center-0.0.1-SNAPSHOT.jar
```
 


                

                
                
        

