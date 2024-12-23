---
aliases: 'MySQL基础-字符集与排序规则'
tags: 
cssclass:
source:
order: 920
category: [MySql, 数据库]
created: "2024-02-22 10:49"
updated: "2024-03-13 09:44"
---

# MySQL基础-字符集与排序规则

## 1. 是什么

- 字符集`character set`）：**用来定义存储字符串的方式**

  定义了字符以及字符编码

  字符集分为几个等级： server, database, table, 和 column 。


- 排序规则（`collations`）：**用来定义比较字符串的方式**

  定义了字符的比较规则

MySQL采用类似继承的方式制定字符集默认值，每个数据库每张表都有自己的默认值，他们逐层继承。如：某个库中所有表的默认字符集将是该数据库所指定的字符集（这些表在没有指定字符集的情况下，才会采用默认字符集）

### 1.1 排序规则的命名规则

`字符集名_`[`语言名_`]`类型` （语言名并非一定有的，后缀为 `_bin` 的就没有），并且可通过后缀来区分类型：

- `_ci` ：大小写不敏感
- `_cs` ：大小写敏感
- `_bin` ：标识比较是基于字符编码的值，而与语言无关

## 2. 指定字符集

我们在命令行创建一个新的数据库时，可以通过如下命令

```
CREATE DATABASE 数据库名;
```

此时**会使用默认**的字符集及默认排序规则来创建数据库，而这个默认值可以在Mysql安装的根目录下的`my.ini` （或者 `my-defualt.ini` ）中进行配置，例如都设为 `utf8`：

```
[mysqld]
# 服务端使用的字符集默认为UTF8
character-set-server=utf8
[mysql]
# 设置mysql客户端默认字符集(可能会有问题，只需设置上面的)
default-character-set=utf8
[client]
default-character-set=utf8
```

如果要在创建数据库时指定字符集和排序规则

```
CREATE DATABASE 数据库名 CHARACTER SET '字符集，如：utf8' COLLATE '排序规则，如：utf8_bin';
```

## 3. 查询字符集和排序规则

对于已创建的数据库结构，可以通过指令来查询其使用的字符集信息。

### 3.1 查询各级的字符集

```
mysql> SHOW VARIABLES LIKE '%char%';                                                                                                              +--------------------------+----------------------------------+
| Variable_name            | Value                            |
+--------------------------+----------------------------------+
| character_set_client     | utf8                             |
| character_set_connection | utf8                             |
| character_set_database   | utf8                             |
| character_set_filesystem | binary                           |
| character_set_results    | utf8                             |
| character_set_server     | utf8                             |
| character_set_system     | utf8                             |
| character_sets_dir       | /usr/local/mysql/share/charsets/ |
+--------------------------+----------------------------------+
8 rows in set (0.00 sec)
```

### 3.2 查询对应的排序规则

```
mysql> SHOW VARIABLES LIKE '%collation_%';
+----------------------+-----------------+
| Variable_name        | Value           |
+----------------------+-----------------+
| collation_connection | utf8_general_ci |
| collation_database   | utf8_general_ci |
| collation_server     | utf8_general_ci |
+----------------------+-----------------+
3 rows in set (0.00 sec)
```

## 4. 修改字符集和排序规则

### 4.1 未创建数据库

可以通过在创建命令中指定字符集的方式实现修改，也可以通过修改MySQL 安装根目录下的 `my.ini` （或者 `my-defualt.ini` ）中的配置实现修改。

### 4.2 已创建数据库无数据

可以使用如下指令进行修改：

```
ALTER DATABASE 数据库名 CHARACTER SET '字符集，如：utf8' COLLATE '排序规则，如：utf8_bin';

```

### 4.3 已创建且有数据的数据库

直接修改的话只会对新创建的表或者记录有效，已存入的数据不会被修改。假如需要修改所有数据，需要将原表导出，创建新表再将旧表数据迁移过来。

