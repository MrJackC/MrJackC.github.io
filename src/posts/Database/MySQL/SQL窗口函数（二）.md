---
title: "13、SQL窗口函数（二）"
date: 2024-03-10 18:59
category:
  - 数据库
tag:
  - MySQL
---

# SQL窗口函数（二）—— 连续问题

### 题目一

#### 表格

| user_id | login_date |
| ------- | ---------- |
| A       | 2022-09-02 |
| A       | 2022-09-03 |
| A       | 2022-09-04 |
| B       | 2021-11-25 |
| B       | 2021-12-31 |
| C       | 2022-01-01 |
| C       | 2022-04-04 |
| C       | 2022-09-03 |
| C       | 2022-09-04 |
| C       | 2022-09-05 |
| A       | 2022-09-03 |
| D       | 2022-10-20 |
| D       | 2022-10-21 |
| A       | 2022-10-03 |
| D       | 2022-10-22 |
| D       | 2022-10-23 |
| B       | 2022-01-04 |
| B       | 2022-01-05 |
| B       | 2022-11-16 |
| B       | 2022-11-17 |

#### 脚本

```sql
CREATE TABLE SQL_8
(
     user_id 	varchar(2),
     login_date date
);
INSERT INTO SQL_8 (user_id,login_date)
VALUES ('A', '2022-09-02'), ('A', '2022-09-03'), ('A', '2022-09-04'), ('B', '2021-11-25'),
       ('B', '2021-12-31'), ('C', '2022-01-01'), ('C', '2022-04-04'), ('C', '2022-09-03'),
       ('C', '2022-09-05'), ('C', '2022-09-04'), ('A', '2022-09-03'), ('D', '2022-10-20'),
       ('D', '2022-10-21'), ('A', '2022-10-03'), ('D', '2022-10-22'), ('D', '2022-10-23'),
       ('B', '2022-01-04'), ('B', '2022-01-05'), ('B', '2022-11-16'), ('B', '2022-11-17');
```

#### 问题

找出这张表中所有的连续3天登录用户

#### 分析

连续N天登录用户，要求数据行满足以下条件：

1) userid 要相同，表示同一用户

2) 同一用户每行记录以登录时间从小到大排序

3) 后一行记录比前一行记录的登录时间多一天

4) 数据行数大于等于N

#### 解答

```sql
-- 方法一
with t1 as (
    select distinct user_id, login_date from SQL_8
),
t2 as (
    select *, row_number() over (partition by user_id order by login_date) as rn from t1
),
t3 as (
    select *, DATE_SUB(login_date, interval rn day) as sub from t2
)
select distinct user_id from t3 group by user_id, sub having count(user_id) >= 3;

-- 方法二
with t1 as (
    select distinct user_id, login_date from SQL_8
),
t2 as (
    select *, DATEDIFF(login_date, lag(login_date, 1) over (partition by user_id order by login_date)) as diff,
           DATEDIFF(login_date, lag(login_date, 2) over (partition by user_id order by login_date)) as diff2 from t1
)
 select distinct user_id from t2 where diff = 1 and diff2 = 2 group by user_id;

```



### 题目二

#### 表格

| player_id | score | score_time          |
| --------- | ----- | ------------------- |
| B3        | 1     | 2022-09-20 19:00:14 |
| A2        | 1     | 2022-09-20 19:01:04 |
| A2        | 3     | 2022-09-20 19:01:16 |
| A2        | 3     | 2022-09-20 19:02:05 |
| A2        | 2     | 2022-09-20 19:02:25 |
| B3        | 2     | 2022-09-20 19:02:54 |
| A4        | 3     | 2022-09-20 19:03:10 |
| B1        | 2     | 2022-09-20 19:03:34 |
| B1        | 2     | 2022-09-20 19:03:58 |
| B1        | 3     | 2022-09-20 19:04:07 |
| A2        | 1     | 2022-09-20 19:04:19 |
| B3        | 2     | 2022-09-20 19:04:31 |
| A1        | 2     | 2022-09-20 19:04:51 |
| A1        | 2     | 2022-09-20 19:05:01 |
| B4        | 2     | 2022-09-20 19:05:06 |
| A1        | 2     | 2022-09-20 19:05:26 |
| A1        | 2     | 2022-09-20 19:05:48 |
| B4        | 2     | 2022-09-20 19:05:58 |

#### 脚本

```sql
CREATE TABLE SQL_9
(
     player_id 	varchar(2),
     score      int,
     score_time datetime
);
INSERT INTO SQL_9 (player_id, score, score_time)
VALUES ('B3', 1, '2022-09-20 19:00:14'), ('A2', 1, '2022-09-20 19:01:04'),
       ('A2', 3, '2022-09-20 19:01:16'), ('A2', 3, '2022-09-20 19:02:05'),
       ('A2', 2, '2022-09-20 19:02:25'), ('B3', 2, '2022-09-20 19:02:54'),
       ('A4', 3, '2022-09-20 19:03:10'), ('B1', 2, '2022-09-20 19:03:34'),
       ('B1', 2, '2022-09-20 19:03:58'), ('B1', 3, '2022-09-20 19:04:07'),
       ('A2', 1, '2022-09-20 19:04:19'), ('B3', 2, '2022-09-20 19:04:31'),
       ('A1', 2, '2022-09-20 19:04:51'), ('A1', 2, '2022-09-20 19:05:01'),
       ('B4', 2, '2022-09-20 19:05:06'), ('A1', 2, '2022-09-20 19:05:26'),
       ('A1', 2, '2022-09-20 19:05:48'), ('B4', 2, '2022-09-20 19:05:58');
```

#### 问题

统计出连续三次（及以上）为球队得分的球员名单

#### 分析

连续N次以上为球队得分， 要求数据行满足以下条件：

1) player_id 要相同表示同一球员

2) 每行记录以得分时间从小到大排序

3) 数据行数大于等于N

#### 解答

```sql
with t1 as (
    select *, lag(player_id, 1) over (order by score_time) as last_play_id,
           lag(player_id, 2) over (order by score_time) as last_two_play_id from SQL_9
)
select distinct player_id from t1 where player_id = last_play_id and last_play_id = last_two_play_id group by player_id;
```



### 题目三

#### 表格

| log_id |
| :----: |
|   1    |
|   2    |
|   3    |
|   7    |
|   8    |
|   10   |

#### 脚本

```sql
CREATE TABLE SQL_10
(
     log_id  int
);
INSERT INTO SQL_10 (log_id) VALUES (1), (2), (3), (7), (8), (10);
```

#### 问题

编写SQL 查询得到 Logs 表中的连续区间的开始数字和结束数字。按照 start_id 排序。查询结果格式如下:

| start_id | end_id |
| -------- | ------ |
| 1        | 3      |
| 7        | 8      |
| 10       | 10     |

#### 解答

```sql
with t1 as (
    select *, log_id - row_number() over (order by log_id) as gr from SQL_10
)

select min(log_id) as start_id, max(log_id) as end_id from t1 group by gr
```

### 技巧

如何求连续区间？

1）行号过滤法

​      通过row_number() 生成连续行号，与区间列进行差值运算，得到的临时结果如果相同表示为同一连续区间

2） 错位比较法

​      通过row_number() / row_number()  + 1 分别生成原生的和错位的连续行号列，进行连表操作

​      也可以通过lag/lead函数直接生成错位列