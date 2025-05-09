---
typora-root-url: MySQL数据库.assets
---

# MySQL数据库

***



## 一、为什么要使用数据库

- 持久化(persistence)：**把数据保存到可掉电式存储设备中以供之后使用**。大多数情况下，特别是企业级应用，**数据持久化意味着将内存中的数据保存到硬盘上加以”固化”**，而持久化的实现过程大多通过各种关系数据库来完成。
- 持久化的主要作用是**将内存中的数据存储在关系型数据库中**，当然也可以存储在磁盘文件、XML数据文件中。 

![1554944967857](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301065.png)

***



## 二、什么是数据库

### 2.1 数据库的相关概念

| DB：数据库（Database）                                       |
| ------------------------------------------------------------ |
| 即存储数据的“仓库”。它保存了一系列有组织的数据。             |
| **DBMS：数据库管理系统（Database Management System）**       |
| 是一种操纵和管理数据库的大型软件，例如建立、使用和维护数据库。 |
| **SQL：结构化查询语言（Structured Query Language）**         |
| 专门用来与数据库通信的语言。                                 |

### 2.2 常见的数据库管理系统(DBMS)

目前互联网上常见的数据库管理软件有Sybase、DB2、Oracle、MySQL、Access、MS SQL Server、Informix、PostgreSQL（最符合SQL标准，开放源码，具备商业级DBMS质量）这几种。以下是2020年**DB-Engines Ranking** 对各数据库受欢迎程度进行调查后的统计结果：（查看数据库最新排名:https://db-engines.com/en/ranking）

![image-20200716142533533](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301106.png)

对应的走势图：（https://db-engines.com/en/ranking_trend）

![image-20200716142707204](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301156.png)

### 2.3 关系型数据库和非关系型数据库区别

**1.** **实质**

- **关系型数据库**，采用关系模型来组织数据。简单来说，**关系模型指的就是二维表格模型**。类似于Excel工作表。

- **非关系型数据库**，可看成传统关系型数据库的功能阉割版本，基于键值对存储数据，通过减少很少用的功能，来提高性能

**2.** **价格**

目前基本上大部分主流的非关系型数据库都是免费的。而比较有名气的关系型数据库，比如Oracle、DB2、SQL  Server是收费的。虽然MySQL免费，但它需要做很多工作才能正式用于生产。

**3.** **应用场景**

实际开发中，有很多业务需求，其实并不需要完整的关系型数据库功能，非关系型数据库的功能就足够使用了。这种情况下，使用性能更高、成本更低的非关系型数据库当然是更明智的选择。比如：日志收集、排行榜、定时器等。

**4.** **各自优势**

- **关系型数据库的优势：**
  - **复杂查询**
     可以用SQL语句方便的在一个表以及多个表之间做非常复杂的数据查询。
  - **事务支持**
     使得对于安全性能很高的数据访问要求得以实现。

- **非关系型数据库的优势：**
  - **性能**
     NOSQL是基于键值对的，可以想象成表中的主键和值的对应关系，而且不需要经过SQL层的解析，所以性能非常高。
  - **可扩展性**
     同样也是因为基于键值对，数据之间没有耦合性，所以非常容易水平扩展。

### 2.4 关系型数据库设计规则

- **遵循ER模型和三范式**
  
  - E    entity   代表实体的意思      对应到数据库当中的一张表          
  - R    relationship 代表关系的意思  
  
- **三范式：1、列不能拆分     2、唯一标识    3、关系引用主键**

- **具体体现**
  - 将数据放到表中，表再放到库中。

  - 一个数据库中可以有多个表，每个表都有一个名字，用来标识自己。表名具有唯一性。

  - 表具有一些特性，这些特性定义了数据在表中如何存储，类似java和python中 “类”的设计。

  - 表由列组成，我们也称为**字段**。每个字段描述了它所含有的数据的意义，**数据表的设计实际上就是对字段的设计**。创建数据表时，为每个字段分配一个数据类型，定义它们的数据长度和字段名。每个字段类似java 或者python中的“实例属性”。

  - 表中的数据是按行存储的，一行即为一条记录。

    每一行类似于java或python中的“对象”。

  ![1554904472176](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301215.png)

  类似于生活的存储柜：

  ![image-20200716143510533](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301276.png)

### 2.5 MySQL数据库介绍

**MySQL**是一种开放源代码的关系型数据库管理系统，开发者为瑞典MySQL AB公司。在2008年1月16号被Sun公司收购。而2009年,SUN又被Oracle收购。目前 MySQL被广泛地应用在Internet上的中小型网站中，分为社区版和商业版。由于其**体积小、速度快、总体拥有成本低，尤其是开放源码这一特点，使得很多互联网公司选择了MySQL作为网站数据库**（Facebook, Twitter, YouTube，阿里的蚂蚁金服，去哪儿，魅族，百度外卖，腾讯）。

![1554945212252](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301376.png)

- 阿里巴巴/蚂蚁金服主要使用两种关系数据库：OceanBase和MySQL。数据规模：MySQL单台机器TB级，OceanBase单个集群从几个TB到几百个TB皆有。


- 去哪儿：MySQL，Redis，HBase


- 腾讯社交网络主要使用深度定制MySQL数据库+自研NoSQL，规模万台以上服务器，千万级qps。


- 百度外卖目前线上主要使用Mysql、redis等数据库。MySQL 数据数百TB级，redis 数据几TB级。


- 目前魅族OLTP场景主要使用的是MySQL，缓存服务使用的是Redis。数据库实例近1000，数据大小100T+, redis实例1000+。

***



## 三、MySQL数据库的卸载与安装

### 3.1 MySQL的卸载

#### 步骤一：软件的卸载

**方式一：通过控制面板卸载**

![1554904624331](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301452.png)

**方式二：通过360或电脑管家等软件卸载**

![1554904663651](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301452.png)

 **方式三：通过安装包提供的卸载功能卸载**

![1554904693231](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301510.png)

#### 步骤二：清理残余文件

如果再次安装不成功，可以卸载后对残余文件进行清理后再安装。

**操作一：清除安装残余文件**

![1554904949245](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301553.png)

**操作二：清除数据残余文件**

![image-20200716143653770](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301594.png)

> 注意：请在卸载前做好数据备份
>
> 在前两步操作完以后，需要重启计算机，然后进行安装即可。**如果仍然安装失败，需要继续操作如下步骤三。**

#### 步骤三：清理注册表（选做）

如何打开注册表编辑器：在系统的搜索框中输入regedit

1. HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\Eventlog\Application\MySQL服务 目录删除
2. HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\MySQL服务 目录删除
3. HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002\Services\Eventlog\Application\MySQL服务 目录删除
4. HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002\Services\MySQL服务 目录删除
5. HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Eventlog\Application\MySQL服务目录删除
6. HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MySQL服务删除

> 注册表中的ControlSet001,ControlSet002,不一定是001和002,可能是ControlSet005、006之类
>
> sptpitpn::

### 3.2 MySQL的安装

准备安装

![1554907061234](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301630.png)

欢迎安装

![1554907068327](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301693.png)

准许协议

![1554907082719](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301749.png)

选择安装模式

![1554907096758](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301803.png)

> Typical：表示一般常用的组件都会被安装，默认情况下安装到”C:\Program Files\MySQL\MySQL Server 5.5\”下。
>
> Complete：表示会安装所有的组件。此套件会占用比较大的磁盘空间。
>
> Custom：表示用户可以选择要安装的组件，可以更改默认按照的路径。这种按照类型最灵活，适用于高级用户。

选择安装组件及安装路径

![1554907133201](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301853.png)

> 这里可以选择安装哪些部分，主要是这里可以设置两个路径：
>
> - MySQL Server的应用软件的安装路径，默认在`“C:\Program Files\MySQL\MySQL Server 5.5\”`
>
>
> - Server data files的数据存储的目录路径，默认在`“C:\ProgramData\MySQL\MySQL Server 5.5\”`
>
>
> **建议把数据存储的目录路径修改一下，以防系统崩溃或重装系统时数据保留。**

开始安装

![1554907228157](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301915.png)

安装进度

![image-20200716143957676](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301953.png)

系统会显示MySQL Enterprise版（企业版）的一些功能介绍界面，可以单击“Next”继续。

![1554907261909](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301005.png)



> 单击“Finish”按钮完成安装过程。如果想马上配置数据库连接，选择“Launch the MySQL Instance Configuration Wizard”复选框。如果现在没有配置，以后想要配置或重新配置都可以在“MySQL Server”的安装目录的bin目录下（例如：D:\ProgramFiles\MySQL5.5\MySQL Server 5.5\bin）找到“MySQLInstanceConfig.exe”打开“MySQL Instance Configuration Wizard”向导。

### 3.3 MySQL的配置

准备开始



选择配置类型

![1554908978185](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301067.png)

> 选择配置方式，“Detailed Configuration（手动精确配置）”、“Standard Configuration（标准配置）”，我们选择“Detailed Configuration”，方便熟悉配置过程。

选择MySQL的应用模式

![1554909003949](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301127.png)

> Developer Machine，开发测试类型，mysql 占用很少资源
> Server Machine，服务器类型，使用中等大小的内存
> Dedicated MySQL Server Machine，专门的数据库服务器，使用当前可用的最大内存。

选择数据库用途选择界面

![1554909046069](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301191.png)

> 选择mysql数据库的大致用途：
> **“Multifunctional Database（通用多功能型，好）”**：此选项对事务性存储引擎（InnoDB）和非事务性（MyISAM）存储引擎的存取速度都很快。
> **“Transactional Database Only（服务器类型，专注于事务处理，一般）”**：此选项主要优化了事务性存储引擎（InnoDB），但是非事务性（MyISAM）存储引擎也能用。
> **“Non-Transactional Database Only（非事务处理型，较简单）**：主要做一些监控、记数用，对MyISAM数据类型的支持仅限于non-transactional，注意事务性存储引擎（InnoDB）不能用。

配置InnoDB数据文件目录

![1554909131039](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301245.png)

> InnoDB的数据文件会在数据库第一次启动的时候创建，默认会创建在MySQL的安装目录下。用户可以根据实际的空间状况进行路径的选择。

并发连接设置

![1554909164990](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301308.png)

> 选择您的网站的一般mysql 访问量，同时连接的数目，“Decision Support(DSS)/OLAP（决策支持系统，20个左右）”、“Online Transaction Processing(OLTP)（在线事务系统，500个左右）”、  “Manual Setting（手动设置，自己输一个数）”

网络选项设置

![1554909196996](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301387.png)

> - 是否启用TCP/IP连接，设定端口，如果不启用，就只能在自己的机器上访问mysql 数据库了，我这里启用，把前面的勾打上
> - Port Number：3306
> - 关于防火墙的设置“Add firewall exception ……”需要选中，将MySQL服务的监听端口加为windows防火墙例外，避免防火墙阻断。
>
> - 还可以选择“启用严格语法模式”（Enable Strict Mode），这样MySQL就不会允许细小的语法错误。尽量使用严格语法模式，因为它可以降低**有害数据**进入数据库的可能性。

选择字符集

![1554909221851](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301387.png)

> 注意：如果要用原来数据库的数据，最好能确定原来数据库用的是什么编码，如果这里设置的编码和原来数据库数据的编码不一致，在使用的时候可能会出现乱码。
>
> 这个比较重要，就是对mysql默认数据库语言编码进行设置，第一个是西文编码，第二个是多字节的通用utf8编码，第三个，手工选择字符集。
>
> 提示：
>
> 如果安装时选择了字符集和“utf8”，通过命令行客户端来操作数据库时，有时候会出现乱码，
>
> 这是因为“命令行客户端”默认是GBK字符集，因此客户端与服务器端就出现了不一致的情况，会出现乱码。
>

可以在客户端执行：

```sql
mysql> set names gbk;  
可以通过以下命令查看：
mysql> show variables like 'character_set_%';
```

> 说明：
>
> 对于客户端和服务器的交互操作，MySQL提供了3个不同的参数：character_set_client、character_set_connection、character_set_results，分别代表客户端、连接和返回结果的字符集。通常情况下，这3个字符集应该是相同的，才能确保用户写入的数据可以正确的读出和写入。“set names xxx;”命令可以同时修改这3个参数的值，但是需要每次连接都重新设置。

安全选择

![1554909644164](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301430.png)

> 选择是否将mysql 安装为windows服务，还可以指定Service Name（服务标识名称，例如我这里取名为“MySQL5.5”），是否将mysql的bin目录加入到Windows PATH环境变量中（加入后，就可以直接使用bin下的命令）”，我这里全部打上了勾。

设置密码

![1554909665730](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301482.png)

> 这一步询问是否要修改默认root 用户（超级管理）的密码（默认为空），“New root password”如果要修改，就在此填入新密码，“Confirm（再输一遍）”内再填一次，防止输错。（如果是重装，并且之前已经设置了密码，在这里更改密码可能会出错，请留空，并将“Modify Security Settings”前面的勾去掉，安装配置完成后另行修改密码）
>
> “Enable root access from remotemachines（是否允许root 用户在其它的机器或使用IP地址登陆，如果要安全，就不要勾上，如果要方便，就勾上它）”。如果没有勾选，默认只支持localhost和127.0.0.1连接。
>
> 最后“Create An Anonymous Account（新建一个匿名用户，匿名用户可以连接数据库，不能操作数据，包括查询，如果要有操作数据的权限需要单独分配）”，一般就不用勾了。
>



准备执行界面

![1554909714287](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301532.png)


***



## 四、MySQL的使用

### 4.1 启动和停止服务

关系型数据库分为桌面文件共享型数据库，例如Access，和C/S架构的网络共享型数据库，例如：MySQL，Oracle等。MySQL软件的服务器端必须先启动，客户端才可以连接和使用使用数据库。

启动服务的方式：

#### 方式一：图形化方式

“我的电脑/计算机”-->右键-->“管理”-->“服务”-->启动和关闭MySQL

“开始菜单”-->“控制面板”-->“管理工具”-->“服务”-->启动和关闭MySQL

“任务管理器”-->“服务”-->启动和关闭MySQL

![1554910645800](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301575.png)

![1554910661332](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301618.png)

#### 方式二：命令行

```cmd
net  start  MySQL服务名
net  stop  MySQL服务名
```

### 4.2 客户端登录

#### 方式一：MySQL自带客户端

“开始菜单”-->MySQL-->MySQL Server 5.5 --> MySQL 5.5 Command Line Client

![1554910754482](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301673.png)

> 说明：仅限于root用户

#### 方式二：命令行

**mysql -h 主机名 -P 端口号 -u 用户名 -p密码**

```sql
例如：mysql -h localhost -P 3306 -u root -proot   
```

注意：

（1）-p与密码之间不能有空格，其他参数名与参数值之间可以有空格也可以没有空格

```sql
mysql -hlocalhost -P3306 -uroot -proot
```

（2）密码建议在下一行输入

```sql
mysql -h localhost -P 3306 -u root -p
Enter password:****
```

（3）如果是连本机：-hlocalhost就可以省略，如果端口号没有修改：-P3306也可以省略

  简写成：

```sql
mysql -u root -p
Enter password:****
```

![1554910994523](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301708.png)

连接成功后，有关于MySQL Server服务版本的信息，还有第几次连接的id标识。

也可以在命令行通过以下方式获取MySQL Server服务版本的信息

![1554911047074](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301752.png)

或**登录**后，通过以下方式查看当前版本信息：

![1554911062159](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301783.png)

#### 方式三：可视化工具

例如：Navicat Preminum，SQLyog 等工具

还有其他工具：mysqlfront,phpMyAdmin

##### Navicat Preminum

![1554911185763](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301840.png)

![1554911194849](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301898.png)

##### SQLyog

![1554912367592](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301945.png)

![1554912376445](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301988.png)



***



## 五、常见SQL问题示例

### 5.1 示例小demo

查看当前的MySQL服务器中有哪些数据库

```sql
mysql> SHOW DATABASES;
```

使用test数据库

```sql
mysql> USE test;
```

创建表格

```sql
mysql> CREATE TABLE t_stu(
    ->  sid INT,
    ->  sname VARCHAR(100),
    ->  gender CHAR
    -> );
```

查看表结构

```sql
mysql> DESC t_stu;
```

插入记录

```sql
mysql> INSERT INTO t_stu VALUES(1,'张三','男');
mysql> INSERT INTO t_stu VALUES(2,'李四','男');
mysql> INSERT INTO t_stu VALUES(3,'王五','男');
```

查看记录

```sql
mysql> SELECT * FROM t_stu;
```

修改记录

```sql
mysql> UPDATE t_stu SET sname = '张三丰' WHERE sid = 1;
```

删除记录

```sql
mysql> DELETE FROM t_stu WHERE sid = 1;
```



### 5.2 错误ERROR ：没有选择数据库就操作表格和数据

| ERROR 1046 (3D000): No database selected                     |
| ------------------------------------------------------------ |
| 解决方案一：就是使用“USE 数据库名;”语句，这样接下来的语句就默认针对这个数据库进行操作 |
| 解决方案二：就是所有的表对象前面都加上“数据库.”              |

### 5.3 在命令行出现乱码问题

安装数据库时选择utf8, 而我们在windows下窗口是GBK的,因此,需要在命令行客户端声明字符集。

set names gbk;是为了告诉服务器,客户端用的GBK编码,防止乱码。

mysql> **set names gbk;**  

Query OK, 0 rows affected (0.00 sec)  

可以查看字符集

mysql> **show variables like 'character_set_%';** 

### 5.4 退出当前错误语句

语句打错以后应该退出本语句,再继续打新语句。

也可以打`ctrl + c`,快速退出本语句。

### 5.5 如何破解数据库的密码

使用安全模式登录。

1. 通过任务管理器或者服务管理,关掉mysqld(服务进程)

2. 通过命令行+特殊参数开启mysqld

   ```sql
   mysqld --skip-grant-tables
   ```

3. 此时,mysqld服务进程已经打开,并且,不需要权限检查

4. mysql -uroot  无密码登陆服务器

5. 修改权限表

   ```sql
   --A: 
   use mysql;
   
   --B: 
   update user set Password = password('123456') where User = 'root';
   
   --C: 
   flush privileges;
   ```

6. 通过任务管理器,关掉mysqld服务进程

7. 再次通过服务管理,打mysql服务

8. 即可用修改后的新密码登陆



### 5.6 命令行客户端的字符集问题

```sql
mysql> INSERT INTO t_stu VALUES(1,'张三','男');
ERROR 1366 (HY000): Incorrect string value: '\xD5\xC5\xC8\xFD' for column 'sname' at row 1
```

原因：服务器端认为你的客户端的字符集是utf-8，而实际上你的客户端的字符集是GBK。

![1554912924219](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301036.png)

查看所有字符集：**SHOW VARIABLES LIKE 'character_set_%';**

![1554912943186](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301083.png)

解决方案，设置当前连接的客户端字符集 **“SET NAMES GBK;”**

![1554912957353](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301129.png)



### 5.7 查看字符集和校对规则（了解，参考）

关于SQL的关键字和函数名等不区分大小写，但是对于数据值是否区分大小写，和字符集与校对规则有关。

ci（大小写不敏感），cs（大小写敏感），_bin（二元，即比较是基于字符编码的值而与language无关）

**1） 查看所有字符集和校对规则**

![1554913011329](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301189.png)

**2）查看GBK和UTF-8字符集的校对规则**

```sql
show collation like 'gbk%';
```

![1554913047662](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301242.png)

```sql
show collation like 'utf8%';
```

![1554913066128](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301242.png)

> utf8_unicode_ci和utf8_general_ci对中、英文来说没有实质的差别。
>  utf8_general_ci 校对速度快，但准确度稍差。
>  utf8_unicode_ci 准确度高，但校对速度稍慢。
>
> 如果你的应用有德语、法语或者俄语，请一定使用utf8_unicode_ci。一般用utf8_general_ci就够了。

**3）查看服务器的字符集和校对规则**

![1554913100475](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301242.png)

**4）查看和修改某个数据库的字符集和校对规则**


或

![1554913125783](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301293.png)

修改数据库的字符集和校对规则：

```sql
ALTER DATABASE 数据库名称 DEFAULT CHARACTER SET 字符集名称 【COLLATE 校对规则名称】;
```

例如：

```sql
ALTER DATABASE ceshi_db DEFAULT CHARACTER SET utf8 collate utf8_general_ci;
```

![1554913175055](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301293.png)

> 注意：修改了数据库的默认字符集和校对规则后，原来已经创建的表格的字符集和校对规则并不会改变，如果需要，那么需要单独修改。

**5）查看某个表格的字符集和校对规则**

查看字符集：

```sql
show create table users;
```

![1554913222667](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301293.png)

如果要查看校对规则：

```sql
show table status from bookstore like '%users%' ;
```

![1554913250394](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301335.png)

修改某个表格的字符集和校对规则：

修改表的默认字符集：

```sql
ALTER TABLE 表名称 DEFAULT CHARACTER SET 字符集名称 【COLLATE 校对规则名称】;
```

把表默认的字符集和所有字符列（CHAR,VARCHAR,TEXT）改为新的字符集：

```sql
ALTER TABLE 表名称 CONVERT TO CHARACTER SET 字符集名称 【COLLATE 校对规则名称】;
```

例如：ALTER TABLE ceshi_table DEFAULT CHARACTER SET gbk collate gbk_chinese_ci;





***



## 六、MySQL的数据类型

常用的数据类型有：

- **整型（xxxint）**
- 位类型(bit)
- **浮点型**（float和double、real）
- 定点数（decimal,numeric）
- **日期时间类型**（date,time,datetime,year）
- **字符串**（char,varchar,xxxtext）
- 二进制数据（xxxBlob、xxbinary）
- 枚举（enum）
- 集合（set）

### 6.1 整数（xxxint）

| **整数类型** | **字节** |   **最小值（有符号/**无符号）   | **最大值（有符号/**无符号）          |
| ------------ | -------- | ------------------------------- | ---------------------------------------- |
| TINYINT      | 1        | -128/0                          | 127/255                                  |
| SMALLINT     | 2        | -32768/0                        | 32767/65535                              |
| MEDIUMINT    | 3        | -8388608/0                      | 8388607/1677215                          |
| INT、INTEGER | 4        | -2147483648/0                   | 2147483647/4294967295                    |
| BIGINT       | 8        | -9223372036854775808/0          | 9223372036854775807/18446744073709551615 |

整数列的可选属性有三个：

- M: 宽度(在0填充的时候才有意义，否则不需要指定)
- unsigned: 无符号类型(非负)
- zerofill: 0填充,(如果某列是zerofill，那么默认就是无符号)，如果指定了zerofill只是表示不够M位时，用0在左边填充，如果超过M位，只要不超过数据存储范围即可

原来，在 int(M) 中，M 的值跟 int(M) 所占多少存储空间并无任何关系。 int(3)、int(4)、int(8) 在磁盘上都是占用 4 bytes 的存储空间。

### 6.2 浮点型

对于浮点列类型，在MySQL中单精度值使用4个字节，双精度值使用8个字节

- MySQL允许使用非标准语法（其他数据库未必支持，因此如果设计到数据迁移，则最好不要这么用）：FLOAT(M,D)或DOUBLE(M,D)。这里，(M,D)表示该值一共显示M位，其中D表示小数点后几位，M和D又称为精度和标度。例如，定义为FLOAT(5,2)的一个列可以显示为-999.99-999.99。M取值范围为0~255。D取值范围为0~30，同时必须<=M。


- 如果存储时，整数部分超出了范围（如上面的例子中，添加数值为1000.01），MySql就会报错，不允许存这样的值。如果存储时，小数点部分若超出范围，就分以下情况：若四舍五入后，整数部分没有超出范围，则只警告，但能成功操作并四舍五入删除多余的小数位后保存，例如在FLOAT(5,2)列内插入999.009，近似结果是999.01。若四舍五入后，整数部分超出范围，则MySql报错，并拒绝处理。如999.995和-999.995都会报错。


- 说明：小数类型，也可以加unsigned，但是不会改变数据范围，例如：float(3,2) unsigned仍然只能表示0-9.99的范围。


- float和double在不指定精度时，默认会按照实际的精度（由实际的硬件和操作系统决定）来显示


- REAL就是DOUBLE ，如果SQL服务器模式包括REAL_AS_FLOAT选项，REAL是FLOAT的同义词而不是DOUBLE的同义词。


> 注意：在编程中，如果用到浮点数，要特别注意误差问题，因为浮点数是不准确的，所以我们要避免使用“=”来判断两个数是否相等。如果希望保证值比较准确，推荐使用定点数数据类型。
>

### 6.3 定点型

- DECIMAL在MySQL内部以字符串形式存放，比浮点数更精确。定点类型占M+2个字节


- DECIMAL(M,D)与浮点型一样处理规则。M的取值范围为0~65，D的取值范围为0~30，而且必须<=M，超出范围会报错。


- DECIMAL如果指定精度时，默认的整数位是10，默认的小数位为0。


- NUMERIC等价于DECIMAL。




### 6.4 日期时间类型

![1555605777724](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301416.png)

- 对于year类型，可以输入4位数，例如2018，也可以输入两位数，例如18，如果输入的是两位，“00-68”表示2000-2069年，“70-99”表示1970-1999年。
- 'YYYY-MM-DD HH:MM:SS'或'YY-MM-DD HH:MM:SS'，'YYYY-MM-DD'或'YY-MM-DD'格式的字符串。允许“不严格”语法：任何标点符都可以用做日期部分或时间部分之间的间割符。例如，'98-12-31 11:30:45'、'98.12.31 11+30+45'、'98/12/31 11*30*45'和'98@12@31 11^30^45'是等价的。
- 'YYYYMMDD'或'YYMMDD'格式的没有间割符的字符串，假定字符串对于日期类型是有意义的。例如，'19970523'和'970523'被解释为 '1997-05-23'，但'971332'是不合法的(它有一个没有意义的月和日部分)，将变为'0000-00-00'。
- 对于包括日期部分间割符的字符串值，如果日和月的值小于10，不需要指定两位数。'1979-6-9'与'1979-06-09'是相同的。同样，对于包括时间部分间割符的字符串值，如果时、分和秒的值小于10，不需要指定两位数。'1979-10-30 1:2:3'与'1979-10-30 01:02:03'相同。
- 数字值应为6、8、12或者14位长。如果一个数值是8或14位长，则假定为YYYYMMDD或YYYYMMDDHHMMSS格式，前4位数表示年。如果数字 是6或12位长，则假定为YYMMDD或YYMMDDHHMMSS格式，前2位数表示年。其它数字被解释为仿佛用零填充到了最近的长度。
- 一般存注册时间、商品发布时间等，不建议使用datetime存储，而是使用时间戳，因为datetime虽然直观，但不便于计算。而且timestamp还有一个重要特点，就是和时区有关。还有如果插入NULL，会自动设置为当前系统时间。

### 6.5 字符串型

![1554913890687](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301460.png)

**char,varchar,text区别**

- char是一种固定长度的类型，varchar则是一种可变长度的类型
- char如果不指定(M)则表示长度默认是1个字符。varchar必须指定(M)。
- char(M)类型的数据列里，每个值都占用M个**字符**，如果某个长度小于M，MySQL就会在它的右边用空格字符补足（在检索操作中那些填补出来的空格字符将被去掉；如果存入时右边本身就带空格，检索时也会被去掉）；在varchar(M)类型的数据列里，每个值只占用刚好够用的字符再加上一个到两个用来记录其长度的字节（即总长度为L字符+1/2字字节）。（4.0版本以下，varchar(20)，指的是20字节，如果存放UTF8汉字时，只能存6个（每个汉字3字节） ；5.0版本以上，varchar(20)，指的是20字符）
- 由于某种原因char 固定长度，所以在处理速度上要比varchar快速很多，但相对费存储空间，所以对存储不大，但在速度上有要求的可以使用char类型，反之可以用varchar类型来实例。
- text文本类型，可以存比较大的文本段，搜索速度稍慢，因此如果不是特别大的内容，建议使用char，varchar来代替。还有text类型不用加默认值，加了也没用。而且text和blob类型的数据删除后容易导致“空洞”，使得文件碎片比较多，所以频繁使用的表不建议包含text类型字段，建议单独分出去，单独用一个表。

**哪些情况使用char或varchar更好**

- 一，存储很短的信息，比如门牌号码101，201……这样很短的信息应该用char，因为varchar还要占个byte用于存储信息长度，本来打算节约存储的现在得不偿失。
- 二，固定长度的。比如使用uuid作为主键，那用char应该更合适。因为他固定长度，varchar动态根据长度的特性就消失了，而且还要占个长度信息。
- 三，十分频繁改变的column。因为varchar每次存储都要有额外的计算，得到长度等工作，如果一个非常频繁改变的，那就要有很多的精力用于计算，而这些对于char来说是不需要的。
- MyISAM和MEMORY存储引擎中无论使用char还是varchar其实都是作为char类型处理的。
- 其他像InnoDB存储引擎，建议使用varchar类型，因为对于InnoDB数据表，内部的行存储格式并没有区分固定长度和可变长度列（所有数据行都使用指向数据列值的头指针），而且主要影响性能的因素是数据行使用的存储总量，由于char平均占用的空间多于varchar，所以除了简短并且固定长度的，其他考虑varchar。

### 6.6 位类型（了解）

BIT数据类型可用来保存位字段值。BIT(M)类型允许存储M位值。M范围为1~64，默认为1。

BIT其实就是存入二进制的值，类似010110。如果存入一个BIT类型的值，位数少于M值，则左补0。如果存入一个BIT类型的值，位数多于M值，MySQL的操作取决于此时有效的SQL模式：如果模式未设置，MySQL将值裁剪到范围的相应端点，并保存裁减好的值。如果模式设置为traditional(“严格模式”)，超出范围的值将被拒绝并提示错误，并且根据SQL标准插入会失败。

对于位字段，直接使用SELECT命令将不会看到结果，可以用bin()或hex()函数进行读取。

### 6.7 二进制值类型（了解）

包括：xxxBLOB和xxxBINARY

BINARY和VARBINARY类型类似于CHAR和VARCHAR类型，但是不同的是，它们存储的不是字符字符串，而是二进制串。所以它们没有字符集，并且排序和比较基于列值字节的数值值。当保存BINARY(M)值时，在它们右边填充0x00(零字节)值以达到指定长度。取值时不删除尾部的字节。比较时所有字节很重要（因为空格和0x00是不同的，0x00<空格），包括ORDER BY和DISTINCT操作。比如插入'a '会变成'a \0'。

BLOB是一个二进制大对象，可以容纳可变数量的数据。有4种BLOB类型：TINYBLOB、BLOB、MEDIUMBLOB和LONGBLOB。它们只是可容纳值的最大长度不同。分别与四种TEXT类型：TINYTEXT、TEXT、MEDIUMTEXT和LONGTEXT对应有相同的最大长度和存储需求。在TEXT或BLOB列的存储或检索过程中，不存在大小写转换。BLOB和TEXT列不能有默认值。BLOB或TEXT对象的最大大小由其类型确定，但在客户端和服务器之间实际可以传递的最大值由可用内存数量和通信缓存区大小确定。你可以通过更改max_allowed_packet变量的值更改消息缓存区的大小，但必须同时修改服务器和客户端程序。

### 6.8 枚举（ENUM）（了解）

​    MySql中的ENUM是一个字符串对象，其值来自表创建时在列规定中显式枚举的一列值：

- 可以插入空字符串""和NULL（如果运行NULL的话）。
- 如果你将一个非法值插入ENUM(也就是说，允许的值列之外的字符串)，如果是严格模式，将不能插入，如果是非严格模式，将选用第一个元素代替，并警告。
- ENUM最多可以有65,535个成员，需要2个字节存储。
- 当创建表时，ENUM成员值的尾部空格将自动被删除。

例如：enum(‘M’,’F’)

 

值的索引规则如下：

- 来自列规定的允许的值列中的值从1开始编号。
- 空字符串错误值的索引值是0。
- NULL值的索引是NULL。

 

### 6.9 集合（SET）（了解）

SET和ENUM类型非常类似，也是一个字符串对象，里面包含0~64个成员。

SET和ENUM存储上有所不同，SET是根据成员的个数决定存储的字节数。

SET和ENUM最主要的区别在于SET类型一次可以选择多个成员，而ENUM则只能选择一个。

例如：set(‘a’,’b’,’c’,’d’)

### 6.10 特殊的NULL值

**Null特征：**

（1）所有的类型的值都可以是null，包括int、float等数据类型

（2）空字符串””，不等于null，0也不等于null，false也不等于null

（3）任何运算符,判断符碰到NULL,都得NULL

（4）NULL的判断只能用is null,is not null

（5）NULL 影响查询速度,一般避免使值为NULL

 

**面试：**

**为什么建表时,加not null default '' 或 default 0**

答:不想让表中出现null值.

**为什么不想要的null的值**

答:（1）不好比较,null是一种特殊值,比较时,只能用专门的is null 和 is not null来比较.

碰到运算符,一律返回null

（2）效率不高,影响提高索引效果.

因此,我们往往,在建表时 not null default '' 或 default 0



***



## 七、Mysql的逻辑架构与存储引擎

### 7.1 MySQL的逻辑架构


### 7.2 逻辑架构

MySQL最重要、最与众不同的特性是它的**存储引擎架构**，这种架构的设计将查询处理（Query Processing）及其他系统任务（Server Task）和数据的存储/提取相分离。这种处理和存储分离的设计可以在使用时根据性能、特性，以及其他需求来选择数据存储的方式。

MySQL中同一个数据库，不同的表格可以选择不同的存储引擎。

![1554914228173](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301502.png)

- MyISAM不支持事务、也不支持外键，其优势是访问的速度快，对事务完整性没有要求或者以SELECT、INSERT为主的应用。每个MyISAM在磁盘上存储成三个文件。第一个文件的名字以表的名字开始，扩展名指出文件类型。.frm文件存储表定义。数据文件的扩展名为.MYD (MYData)。索引文件的扩展名是.MYI (MYIndex)。

- InnoDB存储引擎提供了具有提交、回滚和崩溃恢复能力的事务安全。但是对比MyISAM的存储引擎，InnoDB写的处理效率差一些，并且会占用更多的磁盘空间以保存数据和索引。InnoDB：所有的表都保存在同一个数据文件中，InnoDB表的大小只受限于操作系统文件的大小限制。Myisam只缓存索引，不缓存真实数据；Innodb不仅缓存索引还要缓存真实数据，对内存要求较高，而且内存大小对性能有决定性的影响。

- MEMORY存储引擎使用存在于内存中的内容来创建表。MEMORY类型的表访问非常的快，因为它的数据是放在内存中的，并且默认使用HASH索引，但是一旦服务关闭，表中的数据就会丢失。主要用于那些内容变化不频繁的代码表或者作为统计操作的中间结果表。

### 7.3 查看存储引擎

查看当前mysql数据库管理软件支持的存储引擎： 

```sql
SHOW ENGINES; 
```

![1554914289243](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301569.png)

查看默认存储引擎和当前选择的存储引擎：

```sql
SHOW VARIABLES LIKE '%storage_engine%';
```

![1554914334645](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301632.png)

创建新表时如果不指定存储引擎，那么系统就会使用默认存储引擎，MySQL5.5之前的默认存储引擎是MyISAM，5.5之后改为了InnoDB。

查看已经创建的表格的存储引擎： 

```sql
SHOW CREATE TABLE 表名称;
```

![1554914377907](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202503281301632.png)

 

