<template>
  <div>
    <div class="mytable">
  <el-table
      v-loading="loading"
      ref="multipleTable"
      :data="maintabledata"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      border
      :header-cell-style="getRowClass"
      :cell-style="{ textAlign: 'center' }"
  >
    <el-table-column
        type="selection"
       >
    </el-table-column>
    <el-table-column
        type="index"
        label="序号"
        width="80px"
        >
    </el-table-column>
    <el-table-column
        prop="jlxxqmc"
        label="小区名称"
        show-overflow-tooltip
        >
    </el-table-column>
    <el-table-column
        prop=""
        label="小区类型"
      >
      <template slot-scope="scope">
        {{scope.row.xqlx | xqlxtype }}
      </template>
    </el-table-column>
    <el-table-column
        prop="dzmc"
        label="详细地址"
        show-overflow-tooltip>
    </el-table-column>

    <el-table-column
        prop="hyrHysj"
        label="核验时间"
    >
    </el-table-column>
    <el-table-column
        prop="hyzt"
        label="核验结果"
     >
      <template slot-scope="scope">
        {{scope.row.hyzt | hyzttype }}
      </template>
    </el-table-column>
    <el-table-column
        label="操作区"
        min-width="200px"
       >
      <template slot-scope="scope">
        <el-button  type="text" @click="handleClick(scope.row)">详情</el-button>
        <el-button  type="text"  @click="handlupdate(scope.row)" >修改</el-button>
        <el-button  type="text" :disabled="scope.row.hyzt == 1 ? true : false">核验</el-button>
        <el-button  type="text" @click="handldelete(scope.row)">删除</el-button>
        <el-button  type="text">物业</el-button>
      </template>
    </el-table-column>
  </el-table>

  <div class="block">
    <el-pagination
        layout="total,prev, pager, next,jumper"
        :total=this.pagetotal
        @current-change="tablechange"
        :current-page="currentpage"
        >
    </el-pagination>
  </div>
    </div>
    <TableDialog
        @danlchangestate="danlchangestate"
        :detailsitem="detailsitem"
        @changedetailsitem="changedetailsitem"
    >
    </TableDialog>
  </div>
</template>

<script>
import {GetMainTableninfo} from "../http/api";
import TableDialog from "./TableDialog";
import Topcomponet from "./Topcomponet";

export default {
  name: "MainTable",
  components: {Topcomponet, TableDialog},
  props: {
    maintabledata: Array,
    pagetotal: Number,
    currentpage: Number,
    loading: false,
  },
  data () {
    return {
      tableData : this.maintabledata,
      multipleSelection: [],
      detailsitem: {},
    }
  },
  watch: {
  },
  mounted() {

  },
  created() {
  },
  methods: {
    handleSelectionChange(val){
      //check选择
      this.$emit('batchDelete',val)
      console.log(val)
    },
    getRowClass({ rowIndex }){
      //改变表格第一行背景色
      if (rowIndex == 0) {
        return 'background:RGB(0,178,191);color: white;textAlign:center'
      } else {
        return ''
      }
    },
    tablechange (pageIndex){
      //分页页码改变
      this.$emit("handlcurrent",pageIndex);
      //改变页码
    },
    handleClick(value){
      //详情按钮
      this.$store.dispatch('Openmydialong','details')
      this.detailsitem = value
      console.log(value,'详情按钮')
    },
    danlchangestate(){
      //改变对话框的可见状态
      this.dialogFormVisible =! this.dialogFormVisible
    },
    changedetailsitem(){
      //新增页面关闭后删除之前请求的小区详情数据 以便刷新
      this.detailsitem = null
    },
    handldelete(value){
      //删除行数据
      console.log(value,'删除行数据')
      this.$emit("handldelete",value);
    },
    handlupdate(value){
      //修改
      this.$store.dispatch('Openmydialong','update')
      this.detailsitem = value
      console.log('修改')
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
.el-table__body tr,
.el-table__body td {
  padding: 0;
  height: 20px;
}
.el-table td,
.el-table th{
  line-height: 2px;
  text-align: center;
}
.el-table__header-wrapper{
  background: #2c3e50;
}
.el-table-column{
  text-align: center;
}
.block{
  float: right;
  margin-top: 5px;
}
.cell{max-height: 30px !important;overflow: hidden !important; }
.mytable{
  width: 100%;
  height: 80%;
}
</style>
