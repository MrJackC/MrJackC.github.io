---
aliases: 'oracle取出，号分割的id对应中文名'
tags: 
cssclass:
source:
created: "2024-02-22 10:49"
updated: "2024-03-13 09:56"
---
# oracle取出，号分割的id对应中文名

## 1. 需求

我们部门表中存着祖籍列表，我们希望能直接查出所有祖籍部门的中文名

![image-20220302144445229](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403130956609.png)

如：这几个部门的祖籍都是什么

## 2.实现

### 2.1 达梦数据库

```sql
select D.DEPT_ID,D.PARENT_ID,D.ANCESTORS,D.DEPT_NAME,
       (SELECT WM_CONCAT(T.DEPT_NAME)
        FROM (SELECT DEPT_NAME
              FROM SYS_DEPT S START
              WITH S.DEPT_ID=D.DEPT_ID
              CONNECT BY NOCYCLE PRIOR S.PARENT_ID = S.DEPT_ID) T) DEPT_URL
from SYS_DEPT AS D;

```