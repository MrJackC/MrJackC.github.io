# Element 实现动态的el-tab

因业务要求要改造el-tabs组件，根据页面上的交互来动态新增和删除el-tabs组件，现在el-tabs组件下放置着el-table，el-table下涉及到分页、导出、其他交互功能，改造组件如下。页面结构代码如下，activeName是当前面板的索引值，handleClick为切换el-tabs的方法，根据业务情况来觉得怎么使用，handleTabsEdit为关闭el-tabs标签的动作，关闭后要跳转到当前页签的前一个页签。新增页签时，已经存在的不再新建。

## vue 代码
``` html
<el-tabs v-model='activeName' type='card' @tab-click='handleClick' @edit='handleTabsEdit'>
    <el-tab-pane v-for='(tab, index) in tabList' :key='tab.label' :label='tab.label'
                :name='tab.name' :closable='tab.close'>
    <el-table :data='tab.data' style='width: 100%'
                v-loading="tab.tableLoading"
                :header-cell-style="{background:'#91c9f7  !important',color:'#125289','text-align':'center'}"
                :row-style="{height: '1'}"
                :cell-style="{'text-align':'center',padding: '0','line-height':'25px','font-size':'14px'}"
    >
        <el-table-column v-for='(column, colIndex) in tab.columns'
                        :key='colIndex'
                        :prop='column.prop'
                        :label='column.label'
                        :align='column.align'
                        :show-overflow-tooltip="column.tooltip"
                        :min-width="column.width ? column.width : column.label.length * 12 + 20">
        </el-table-column>
    </el-table>
    <div class='pagination-wrapper'
            style='float: right; display: flex; align-items: center;'>
        <el-button v-if='tab.export' type='success' size="mini"
                    @click='exportButtonClick(index)'>
        <i class='el-icon-download' style='color: #FFFFFF'></i> 导出
        </el-button>
        <el-pagination v-if='tab.pagination'
                        background
                        @current-change='handleCurrentChange(index, $event)'
                        :current-page='tab.page' :total='tab.total'
                        :page-size='tab.size'
                        layout='total, prev, pager, next'>
        </el-pagination>
    </div>
    </el-tab-pane>
</el-tabs>
```

定义所需要的变量值，如果el-tabs初始要加载第一个tab-pane 则给定tabList初始值，否则不需要定义，在页面逻辑中需要呈现的时候给tabList添加值即可。

``` javascript
export default {

  data() {
    return {
        activeName: '0',
        tabIndex: 0,
        tabList: [
            {
            label: '站址级',
            name: '0',
            data: [],
            columns: [
                {index:1,prop:"stime",label:'时间',align:'center',width:100},
                {index:2,prop:"importTime",label:'扩容时间',align:'center',width:90},
                {index:3,prop:"city",label:'城市',align:'center',width:100},
                {index:4,prop:"fullArea",label:'所属区域',align:'center'},
                {index:5,prop:"area_name",label:'扩容物理站址名',align:'center',clickable:true,width:200,tooltip:true}
            ],
            tableLoading: false,
            pagination: true,
            export: true,
            total: 0,
            page: 1,
            pageSize: 10,
            //当前标签下分页导出需要的参数
            params: {
                stime: '',
                etime: '',
                city: '',
                nettype: '',
                covertype: '',
                areaname:''
            },
            },
        ],
        },

    methods: {
        handleClick(tab, event) {

        },
        handleTabsEdit(targetName, action) {
        if (action === 'remove') {
            const tabs = this.tabList;
            const currentTab = tabs.find(tab => tab.name === targetName);
            if (currentTab) {
            const index = tabs.indexOf(currentTab);
            tabs.splice(index, 1);
            // 更新 activeName，选择下一个标签页或第一个标签页作为选中项
            let nextTabName = this.activeName;
            if (nextTabName === targetName) {
                const nextTab = tabs[index] || tabs[index - 1];
                nextTabName = nextTab ? nextTab.name : tabs[0] ? tabs[0].name : ''; // 默认选中第一个标签页，或者为空字符串
            }
            this.activeName = nextTabName;
            this.tabList = tabs; // 更新标签列表
            }
        }
        },
        async handleCurrentChange(index, currentPage) {
        for (let i = 0; i < this.tabList.length; i++) {
            if (this.tabList[i].name === this.activeName.toString()) {
            this.tabList[index].tableLoading = true
            const params = this.tabList[index].params
            params.page = currentPage
            params.pageSize = this.tabList[index].pageSize
            var result = {}
            if(this.tabList[index].label.indexOf('标签条件')>-1){
                result = await this.AAAAA(params)
            }else if(this.tabList[index].label.indexOf('标签条件')>-1){
                result = await this.BBBBB(params)
            }else if(this.tabList[index].label.indexOf('标签条件')>-1){
                result = await this.CCCCC(params)
            }
            this.tabList[index].data = []
            this.tabList[index].data = result.data
            this.tabList[index].total = result.total
            this.tabList[index].tableLoading = false
            break
            }
        }
        },
        // 新增tabs关键代码
        createNewTab(){
            obj.data = res.data  //数据
            obj.total = res.total //数据总数
            obj.label = row.stime + '_' + row.city + '_' + row.area_name + '_' + obj.label //tab名称
            let newTabName = ++this.tabIndex + ''
            obj.name = newTabName
            //判断是否存在  存在同样标签  则不添加
            const existingTab = this.tabList.find(existing => existing.label === obj.label)
            if (!existingTab) {
            this.tabList.push(obj)
            this.activeName = newTabName
            // 在这里你可以操作向 el-tabs 动态添加新 tab 的逻辑
            } else {
            this.activeName = existingTab.name
            }
        },
        async exportButtonClick(index) {
            for (let i = 0; i < this.tabList.length; i++) {
                if (this.tabList[i].name === this.activeName.toString()) {
                const params = this.tabList[index].params
                if(this.tabList[index].label.indexOf('多tab条件')>-1){
                    await ExportAAA(params).then()
                }else if(this.tabList[index].label.indexOf('多tab条件')>-1){
                    await ExportBBB(params).then()
                }else if(this.tabList[index].label.indexOf('多tab条件')>-1){
                    await ExportCCC(params).then()
                }
                break
                }
            }
        },
    }
  }
}
```

如果单元格需要点击操作，可以通过对象中的属性值来控制，比如tabList中column对象的属性来决定进行什么样的操作。

``` html

<template slot-scope='scope'>
    <span v-if="column.clickable"
        @click="handleGisClick(scope.row, scope.column)"
        style="cursor: pointer; color: #009dd9;">
            {{ scope.row[column.prop] }}
    </span>
    <span v-else>{{ scope.row[column.prop] }}</span>
</template>

```

![实际效果](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/20241105155035.png)



## 添加右键菜单

el-tabs 组件中添加以下方法：

**@contextmenu.prevent.native="openContextMenu1($event)"**


添加html代码
``` html
<!-- 右键功能 -->
    <div v-show="contextMenuVisible">
      <ul :style="{left:menuLeft +'px',top:menuTop+'px'}" class="contextmenu">
        <li>
          <el-button type="text" @click="closeAll()" size="mini"  icon="el-icon-error">关闭所有</el-button>
        </li>
        <li>
          <el-button type="text" @click="closeOther()" size="mini" icon="el-icon-circle-close" >关闭其他</el-button>
        </li>
        <li>
          <el-button type="text" @click="closeLeft()" size="mini" icon="el-icon-d-arrow-left">关闭左侧</el-button>
        </li>
        <li>
          <el-button type="text" @click="closeRight()" size="mini" icon="el-icon-d-arrow-right">关闭右侧</el-button>
        </li>
      </ul>
    </div>
```


``` javascript
//关闭所有功能
    closeAll(){ // 关闭所有标签卡
      //这里写你自己的关闭标签页的逻辑代码
      if (this.tabList.length > 1) {
        this.tabList = [this.tabList[0]]; // 只保留第一个标签页
        this.tabIndex = 0
      }
      this.activeName = this.tabList[0].name; // 确保激活第一个Tab
      //最后调用隐藏菜单的方法
      this.closeMenu(); //完成点击事件后，关闭菜单
    },
    closeOther() {
      // 保留当前标签和第一个标签，移除其他标签
      const currentTab = this.tabList.find(tab => tab.name === this.activeName);
      if (currentTab) {
        this.tabList = [this.tabList[0], currentTab]; // 只保留第一个标签和当前标签
      }
      this.closeMenu(); // 隐藏右键菜单
    },
    closeLeft() {
      const currentIndex = this.tabList.findIndex(tab => tab.name === this.activeName);
      if (currentIndex > 0) {
        // 保留第一个标签和当前索引及右边的所有标签
        this.tabList = [this.tabList[0], ...this.tabList.slice(currentIndex)];
        this.activeName = this.tabList[1].name; // 激活当前标签
      }
      this.closeMenu();
    },
    closeRight() {
      const currentIndex = this.tabList.findIndex(tab => tab.name === this.activeName);
      if (currentIndex >= 0) {
        // 保留当前标签及所有左侧标签
        this.tabList = this.tabList.slice(0, currentIndex + 1); // 只保留当前及左侧所有标签
        this.activeName = this.tabList[this.tabList.length - 1].name; // 激活当前标签
      }
      this.closeMenu();
    },
    //解决空白标签页右键
    openContextMenu1(e) {
      if (e.srcElement.id !='') {
        this.contextMenuVisible = true;
        // console.log(e.srcElement);
        // console.log(e.srcElement.id);
        //这个参数是获取右键标签页的id属性，应该和你的key有关，你要截取-后面部分的
        this.closeindex=e.srcElement.id.split("-")[1];
        // console.log(this.closeindex);
      }else{
        this.contextMenuVisible = false;
      }
    },
```

![右键菜单效果](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/20241105160158.png)