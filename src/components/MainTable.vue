<template>
  <el-table
      ref="multipleTable"
      :data="maintabledata"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      border
      width="400px"
      height="500px"
      :header-cell-style="getRowClass"
  >
    <el-table-column
        type="selection"
        width="55">
    </el-table-column>
    <el-table-column
        prop=""
        label="序号"
        width="50px"
        >
      <template slot-scope="scope">
        {{scope.row.index}}
      </template>
    </el-table-column>
    <el-table-column
        prop="jlxxqmc"
        label="小区名称"
        width="160px">
    </el-table-column>
    <el-table-column
        prop=""
        label="小区类型"
        width="100px">
      <template slot-scope="scope">
        {{scope.row.xqlx | xqlxtype }}
      </template>
    </el-table-column>
    <el-table-column
        prop="dzmc"
        label="详细地址"
        width="150px">
    </el-table-column>

    <el-table-column
        prop="hyrHysj"
        label="核验时间"
        width="150px">
    </el-table-column>
    <el-table-column
        prop="hyzt"
        label="核验结果"
        width="150px">
      <template slot-scope="scope">
        {{scope.row.hyzt | hyzttype }}
      </template>
    </el-table-column>
    <el-table-column
        label="操作区"
       >
      <a>详情</a>
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
  props: {
    maintabledata: Array
  },
  data () {
    return {
      tableData : this.maintabledata,
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
    },
    getRowClass({ rowIndex }){
      if (rowIndex == 0) {
        return 'background:RGB(0,178,191);color: white'
      } else {
        return ''
      }
    }

  },
  filters: {
    xqlxtype(val){
      return val == 1 ? '单位' : val == 4 ? '楼宇' : val ==2 ? '开放式社区' : val == 5 ? '农村' : val == 3 ? '封闭式小区商业': '其他'
    },
    hyzttype(val){
      return val == 1 ? '已核验':'未核验'
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
.el-table-column{
  text-align: center;
}
</style>
