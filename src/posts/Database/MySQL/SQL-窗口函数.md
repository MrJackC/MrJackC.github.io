---
title: "12、SQL窗口函数"
date: 2024-03-10 17:59
category:
  - 数据库
tag:
  - MySQL
---

# SQL窗口函数

### 一. 什么是窗口函数

#### 基本含义

窗口限定一个范围，它可以理解为满足某些条件的记录集合，窗口函数也就是在窗口范围内执行的函数。

#### 基本语法

窗口函数有over关键字，指定函数执行的范围，可分为三部分：分组子句(partition by)，排序子句(order by)，窗口子句(rows)

```sql
<函数名> over (partition by <分组的列> order by <排序的列> rows between <起始行> and <终止行>)
```



**注意Mysql8才支持窗口函数**



#### 演示表格

| cid(班级id) | sname(学生姓名) | score(分数) |
| ------------ | ----------------- | ------------- |
| 001          | 张三              | 78            |
| 001          | 李四              | 82            |
| 002          | 小明              | 90            |
| 001          | 王五              | 67            |
| 002          | 小红              | 85            |
| 002          | 小刚              | 62            |

#### 演示脚本

```sql
CREATE TABLE SQL_5 (
       cid varchar(4),
       sname varchar(4),
       score int
);

insert into SQL_5 (cid, sname, score) values ('001', '张三', 78);
insert into SQL_5 (cid, sname, score) values ('001', '李四', 82);
insert into SQL_5 (cid, sname, score) values ('002', '小明', 90);
insert into SQL_5 (cid, sname, score) values ('001', '王五', 67);
insert into SQL_5 (cid, sname, score) values ('002', '小红', 85);
insert into SQL_5 (cid, sname, score) values ('002', '小刚', 62);
```



### 二. 窗口的确定

例子：

```sql
select *, sum(score) over (partition by cid order by score rows between unbounded preceding and unbounded following) as '班级总分' from SQL_5;
```

#### 分组子句(partition by)

不分组可以写成partition by null或者直接不写

后面可以跟多个列， 如 partition by cid, sname

**注意 partition by与group by的区别**

1)前者不会压缩行数但是后者会

2)后者只能选取分组的列和聚合的列

也就是说group by 后生成的结果集与原表的行数和列数都不同

#### 排序子句(order by)

不排序可以写成order by null 或者直接不写

asc或不写表示升序，desc表示降序

后面可以跟多个列， 如 order by cid, sname

#### 窗口子句(rows)

窗口子句的描述

1) 起始行:   N preceding/unbounded preceding

2) 当前行:   current row

3) 终止行:   N following/unbounded following

举例：

rows between unbounded  preceding and current row  从之前所有的行到当前行

rows between 2 preceding and current row  从前面两行到当前行

rows between current row and unbounded following  从当前行到之后所有的行

rows between current row and 1following  从当前行到后面一行

**注意：**

**排序子句后面缺少窗口子句，窗口规范默认是 rows between unbounded preceding and current row**

**排序子句和窗口子句都缺失，窗口规范默认是 rows between unbounded preceding and unbounded following**

#### 总体流程

1) 通过partition by 和 order by 子句确定大窗口( 定义出上界unbounded preceding和下界unbounded following)

2) 通过row 子句针对每一行数据确定小窗口(滑动窗口)

3) 对每行的小窗口内的数据执行函数并生成新的列



### 三. 函数分类

#### 排序类

rank, dense_rank, row_number

```sql
-- 【排序类】
-- 按班级分组后打上序号 不考虑并列
select *, row_number() over (partition by cid order by score desc) as '不可并列排名' from SQL_5;
-- 按班级分组后作跳跃排名 考虑并列
select *, rank() over (partition by cid order by score desc) as '跳跃可并列排名' from SQL_5;
-- 按班级分组后作连续排名 考虑并列
select *, dense_rank() over (partition by cid order by score desc) as '连续可并列排名' from SQL_5;
-- 合并起来对比
select *, row_number() over (partition by cid order by score desc) as '不可并列排名' ,
          rank() over (partition by cid order by score desc) as '跳跃可并列排名',
          dense_rank() over (partition by cid order by score desc) as '连续可并列排名'
from SQL_5;
```

#### 聚合类

sum. avg, count, max, min

```sql
-- 【聚合类】
-- 让同一班级每个学生都知道班级总分是多少
select *, sum(score) over (partition by cid) as '班级总分' from SQL_5;
-- 或者可以写成
select *, sum(score) over (partition by cid rows between unbounded preceding and unbounded following) as '班级总分' from SQL_5;

-- 计算同一班级，每个同学和比他分数低的同学的累计总分是多少
select *, sum(score) over (partition by cid order by score) '累加分数' from SQL_5;
-- 或者可以写成 其中rows between ... and 是规定窗口大小
select *, sum(score) over (partition by cid order by score rows between unbounded preceding and current row) as '累加分数' from SQL_5;
```

#### 跨行类

lag, lead

```sql
-- 【跨行类】
-- lag/lead 函数 参数1:比较的列 参数2: 偏移量 参数3:找不到的默认值
-- 同一班级内，成绩比自己低一名的分数是多少
select *, lag(score, 1) over (partition by cid order by score) as '低一名的分数' from SQL_5;
-- 或者写成
select *, lag(score, 1, 0) over (partition by cid order by score) as '低一名的分数' from SQL_5;

-- 同一班级内，成绩比自己高2名的分数是多少
select *, lead(score, 2) over (partition by cid order by score) as '高两名的分数' from SQL_5;
```



### 四. 相关题目

#### 表格

| cid  | sname | course | score |
| ---- | ----- | ------ | ----- |
| 001  | 张三  | 语文   | 78    |
| 002  | 小刚  | 语文   | 71    |
| 001  | 李四  | 数学   | 56    |
| 002  | 小明  | 数学   | 54    |
| ...  | ...   | ...    | ...   |

#### 脚本

```sql
CREATE TABLE SQL_6 (
       cid varchar(4),
       sname varchar(4),
       course varchar(10),
       score int
);

insert into SQL_6 (cid, sname, course, score) values ('001', '张三', '语文', 78);
insert into SQL_6 (cid, sname, course, score) values ('002', '小刚', '语文', 71);
insert into SQL_6 (cid, sname, course, score) values ('001', '李四', '数学', 56);
insert into SQL_6 (cid, sname, course, score) values ('001', '王五', '数学', 97);
insert into SQL_6 (cid, sname, course, score) values ('002', '小明', '数学', 54);
insert into SQL_6 (cid, sname, course, score) values ('002', '小刚', '数学', 67);
insert into SQL_6 (cid, sname, course, score) values ('002', '小红', '数学', 82);
insert into SQL_6 (cid, sname, course, score) values ('001', '王五', '语文', 80);
insert into SQL_6 (cid, sname, course, score) values ('001', '张三', '数学', 77);
insert into SQL_6 (cid, sname, course, score) values ('002', '小明', '语文', 58);
insert into SQL_6 (cid, sname, course, score) values ('002', '小红', '语文', 87);
insert into SQL_6 (cid, sname, course, score) values ('001', '李四', '语文', 60);
insert into SQL_6 (cid, sname, course, score) values ('001', '张三', '英语', 66);
insert into SQL_6 (cid, sname, course, score) values ('002', '小刚', '英语', 50);
insert into SQL_6 (cid, sname, course, score) values ('001', '李四', '地理', 59);
insert into SQL_6 (cid, sname, course, score) values ('001', '王五', '地理', 88);
insert into SQL_6 (cid, sname, course, score) values ('002', '小明', '地理', 45);
insert into SQL_6 (cid, sname, course, score) values ('002', '小刚', '地理', 66);
insert into SQL_6 (cid, sname, course, score) values ('002', '小红', '地理', 82);
insert into SQL_6 (cid, sname, course, score) values ('001', '王五', '英语', 81);
insert into SQL_6 (cid, sname, course, score) values ('001', '张三', '地理', 77);
insert into SQL_6 (cid, sname, course, score) values ('002', '小明', '英语', 55);
insert into SQL_6 (cid, sname, course, score) values ('002', '小红', '英语', 87);
insert into SQL_6 (cid, sname, course, score) values ('001', '李四', '英语', 61);
```

##### 分组内topN

问题1：求出每个学生成绩最高的三条记录

```sql
select * from 
(
    select *, row_number() over (partition by sname order by score desc) as rn from SQL_6   
) temp
where rn <= 3
```

###### 公式:

```sql
select * from
(
	select *, row_number() over (partition by 分组列 order by 比较列) as rn from table
) as tmp
where rn <= N;
```



##### 汇总分析

问题2：找出每门课程都高于班级课程平均分的学生

可以拆解成以下几个问题：

1)求出每个班级，每门课程的平均分

```sql
with
-- 1) 求出每个班级，每门课程的平均分
t1 as
(
select *,
       avg(score) over (partition by cid, course) as 'avg'
from SQL_6
),
```

2)将学生每门课程的成绩与所在班级的对应课程平均分相减，结果大于0就说明该学生的这门成绩高于课程平均分

```sql
t2 as (
    select *,
           score - avg  as 'del'
    from t1
)
```

3)“找出每门课程都高于班级课程平均分的学生”说明对于学生来说，最小的“相减结果”都是大于0的

```sql
select sname from t2
group by sname
having min(del) > 0;
```

合并后的SQL语句

```sql
with
t1 as
(
select *,
       avg(score) over (partition by cid, course) as 'avg'
from SQL_6
),
t2 as (
    select *,
           score - avg  as 'del'
    from t1
)
select sname from t2
group by sname
having min(del) > 0;

-- 或者
select sname from (
                      select *,
                             score - avg  as 'del'
                      from (
                               select *,
                                      avg(score) over (partition by cid, course) as 'avg'
                               from SQL_6
                           ) t1
                  ) t2
group by sname
having min(del) > 0;
```



#### 表格

| empno | ename | hire_date  | salary | dept_no |
| ----- | ----- | ---------- | ------ | ------- |
| 001   | Adam  | 2018-03-01 | 1000   | A       |
| 002   | Bill  | 2021-03-01 | 1200   | A       |
| 003   | Cindy | 2016-03-01 | 1500   | A       |
| 004   | Danny | 2020-03-01 | 5000   | A       |
| 005   | Eason | 2020-03-01 | 4000   | B       |
| 006   | Fred  | 2018-03-01 | 3500   | B       |
| 007   | Gary  | 2017-03-01 | 1800   | B       |
| 008   | Hugo  | 2020-03-01 | 2500   | B       |

#### 脚本

```sql
CREATE TABLE SQL_7 (
       empno varchar(4),
       ename varchar(10),
       hire_date varchar(10),
       salary int,
       dept_no varchar(2)
);
insert into SQL_7 (empno, ename, hire_date, salary, dept_no) values ('001', 'Adam', '2018-03-01', 1000, 'A');
insert into SQL_7 (empno, ename, hire_date, salary, dept_no) values ('002', 'Bill', '2021-03-01', 1200, 'A');
insert into SQL_7 (empno, ename, hire_date, salary, dept_no) values ('003', 'Cindy', '2016-03-01', 1500, 'A');
insert into SQL_7 (empno, ename, hire_date, salary, dept_no) values ('004', 'Danny', '2020-03-01', 5000, 'A');
insert into SQL_7 (empno, ename, hire_date, salary, dept_no) values ('005', 'Eason', '2020-03-01', 4000, 'B');
insert into SQL_7 (empno, ename, hire_date, salary, dept_no) values ('006', 'Fred', '2018-03-01', 3500, 'B');
insert into SQL_7 (empno, ename, hire_date, salary, dept_no) values ('007', 'Gary', '2017-03-01', 1800, 'B');
insert into SQL_7 (empno, ename, hire_date, salary, dept_no) values ('008', 'Hugo', '2020-03-01', 4500, 'B');

select * from SQL_7;
```

##### 分组内topN

问题一：求出每个部门工资最高的前三名员工

```sql
select * from
    (
        select *, row_number() over (partition by dept_no order by salary desc) as rn from SQL_7
    ) as tmp
where rn <= 3;
```



##### 汇总分析

问题二：计算这些员工的工资占所属部门总工资的百分比

```sql
with
t1 as (
    select * , sum(salary) over (partition by dept_no) as 'sum_sal' from SQL_7
),
t2 as (
    select *, round(salary*100/sum_sal,2) as 'percentage' from t1
)
select * from t2;
```

问题三：对各部门员工的工资进行从小到大排序，排名前30%为低层，30%-80%为中层，高于80%为高层，并打上标签

``` sql
with
    t1 as (
        select * , row_number() over (partition by dept_no order by salary) as cnt,
               count(empno) over (partition by dept_no) as 'sum' from SQL_7
    ),
    t2 as (
        select *, round(cnt/sum,2) as 'percentage' from t1
    ),
    t3 as (
        select *, case when percentage <= 0.3 then '低层'
                       when percentage <= 0.8 then '中层'
                       when percentage <= 1 then '高层' end as 'label'
        from t2
    )
select empno, ename, hire_date, salary, dept_no, label from t3;
```

问题四：统计每年入职总数以及截至本年累计入职总人数(本年总入职人数 + 本年之前所有年的总入职人数之和)

```sql
select year(hire_date) as hire_year, count(empno) as cnt
    from SQL_7
    group by year(hire_date) order by hire_year;
```

```sql
with t1 as (
    select year(hire_date) as hire_year, count(empno) as cnt from SQL_7 group by year(hire_date) order by hire_year
)

select *, sum(cnt) over(partition by null rows between unbounded preceding and current row) as sum from t1;
```



### 五. 技巧

1)分组内topN公式

```sql
select * from
(
	select *, row_number() over (partition by 分组列 order by 比较列) as rn from table
) as tmp
where rn <= N;
```

2) 窗口函数 -> 生成辅助列(相当于高级语言的临时变量)

3)   with 语句 -> 生成临时表(相当于高级语言的局部方法)

​       把复杂的问题拆分成多个子问题并用临时表去表达





















