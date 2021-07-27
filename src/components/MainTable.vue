<template>
  <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
    <el-table-column
        type="selection"
        width="55">
    </el-table-column>
    <el-table-column
        prop=""
        label="序号"
        width="120"
        >
    </el-table-column>
    <el-table-column
        prop="name"
        label="小区名称"
        width="120">
    </el-table-column>
    <el-table-column
        prop="address"
        label="小区类型"
        show-overflow-tooltip>
    </el-table-column>
    <el-table-column
        prop="address"
        label="小区类型"
        show-overflow-tooltip>
    </el-table-column>
  </el-table>
<!--  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>-->
</template>

<script>
import {GetMainTableninfo} from "../http/api";

export default {
  name: "MainTable",
  data () {
    return {
      tableData : [],
      multipleSelection: [],

    }
  },
  created() {
    const par = {}
    GetMainTableninfo()
    .then()
    .catch()
  },
  methods: {
    handleSelectionChange(val){
      console.log(val)
    }

  }
}
</script>

<style>
.el-table__header tr,
.el-table__header th {
  padding: 0;
  height: 20px;
}
.el-table__body tr,
.el-table__body td {
  padding: 0;
  height: 20px;
}
.el-table td, .el-table th{
  line-height: 2px;
}
.el-table__header-wrapper{
  background: #2c3e50;
}
</style>
