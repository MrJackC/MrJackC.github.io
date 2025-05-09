# Vue组件抽离分分合合的思考

## 1. 背景

公司有个业务流程，需要超多步骤，大概15个步骤左右，每个步骤

又有操作和详情。

每个步骤的内容大概是，针对一份文件进行打分处理。

- 左边是文件
- 右上的操作记录
- 右下是操作区

## 2. 分分合合流程

### 2.1 前端30多个页面的组合

前端将30多个页面分别复制一份出来，针对不同步骤改动。

- 面临的问题

  我在对接业务的时候，很多业务逻辑其实是共用的，我需要将业务复制到30个地方（业务还是非常多且复杂的）

### 2.2 共用一个组件通过状态码判断

我将前端的30多个组件整合到一个组件，通过状态码判断。

- 优势

  我所有的业务逻辑只需要写在一个页面中，一个改动不需要涉及过多页面同步更改

- 缺点

  1. 状态码实在太多了，单单一个显示隐藏就需要很多状态判断来控制。而且非常容易出错。
  2. 一个页面代码行数近3000行了，难以维护

### 2.3 结合业务再一次拆分

1. 将左边不易变的文件预览区，抽离成一个单独的组件
2. 将右上的操作记录区按业务大节点拆分成5个小组件。
   - 每个小组件只负责一个业务大节点的html处理,数据由统一的父级下发数据
   - 右上是所有情况都要显示的。只是显示多少问题
3. 将右下的操作区，根据步骤流程节点划分为20多个小组件
   - 操作流程节点独立划分
   - 详情与操作拆分



