
<template>
  <div class="box" id="app">
  <el-container style="height: 100%">
    <el-aside width="200px"  >
      <TreeNav @handleChechange="handleChechange">

      </TreeNav>
    </el-aside>
    <el-container>
      <el-header>
        <Topcomponet
            :selectCurriculums="selectCurriculums"
            v-on:receive="Rgselected"
            :zh-curriculums="zhselectdata"
            @zhreceive = "zhselected"
            :xqlx-curriculums="xqlxselectdata"
            @xqlxreceive="xqlxselectcd"
            :inputval="keyword"
            @xqmzreceive="inputchange"
        ></Topcomponet>
      </el-header>
      <el-main>
        <MainTable
        :maintabledata="Tabledata">
        </MainTable>
      </el-main>
    </el-container>
  </el-container>
  </div>

</template>
<script>
// @ is an alias to /src
import TreeNav from "../components/Tree-nav";
import Topcomponet from "../components/Topcomponet";
import MainTable from "../components/MainTable";
import {GetMainTableninfo} from "../http/api";
export default {
  name: 'Home',
  components: {
    MainTable,
    Topcomponet,
    TreeNav
  },
  data () {
    return {
      selectCurriculums:'', //警务网格下拉框
      zhselectdata: '',  //智慧小区下拉框
      xqlxselectdata: '', //小区类型下拉框
      keyword: '', //input输入框
      sssj: '',
      ssfxj: '',
      sspcs: '',
      wgdm: '',
      xqxxbz: '',
      pageSize: 10,
      pageIndex: 1,
      Tabledata: [] //表格数据
    }
  },
  watch: {
    selectCurriculums(val){
      console.log(val)
    },
    inputdata (val){
      console.log(val)
    }
  },
  computed: {
    parameter(){
      return {
        sssj: this.sssj,ssfxj: this.ssfxj,sspcs: this.sspcs,wgdw: this.wgdm,pageInfo:{pageSize:this.pageSize,pageIndex:this.pageIndex},
          keyword: this.keyword,xqxxbz: this.xqxxbz,isRelationGrid: this.selectCurriculums,xqxzdm: this.zhselectdata,xqlx: this.xqlxselectdata
      }
    }
  },
  methods: {
    Rgselected(value){
      //警务网格
      this.selectCurriculums = value
      console.log(this.selectCurriculums,'传值过来')
    },
    zhselected(value) {
      console.log(value)
      //智慧小区
      this.zhselectdata = value
    },
    xqlxselectcd(value) {
      //小区类型
      console.log(value)
      this.xqlxselectdata = value
    },
    inputchange(value){
      //小区名称查询
      console.log(value)
      this.keyword = value
    },
    handleChechange(e){
      //Tree选择点击事件
      this.getSimpleCheckedNodes(e)
      console.log(this.sssj,this.ssfxj,this.sspcs,this.wgdm,'aa')
      this.GetXQ()
    },
    getSimpleCheckedNodes(e) {
      this.cleanparentinfo()
      if (e.parent.data.id ===""){
        this.sssj = e.data.id
      }
      else{
        this.getSimpleCheckedNodes(e.parent)
        {
          if(e.data.level === 'fxj'){
            this.ssfxj =   e.data.id
          }
          if (e.data.level === 'pcs')
          {
            this.sspcs =   e.data.id
          }
          if (e.data.level === 'zrq')
          {
            this.wgdm =  e.data.id
          }

        }
      }
    },
    cleanparentinfo(){
      this.sssj = ''
      this.ssfxj = ''
      this.sspcs = ''
      this.wgdm = ''
    },
    GetXQ()
    {
      console.log(this.parameter,'请求头')
      GetMainTableninfo(this.parameter)
      .then(res =>{
        this.Tabledata = res.data.dataList
        console.log(this.Tabledata,'分页请求')
      })
      .catch(err =>{
        console.log(err,'分页请求')
      })

    }
  }
}
</script>
<style>
#app{
  height: 100%;
}
.el-header, .el-footer {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}
.el-aside {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  margin-top: 5px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 100%;
}
.el-container{
  margin-top: 5px;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.box{
  height: 100%;
}
html,
body {
  margin: 0;
  height: 100%;
}

.el-tree-node:focus > .el-tree-node__content {
  background-color: #2c3e50 !important;
  color: yellow !important;
}
.el-tree-node__content:hover {
  /*鼠标悬停*/
  background-color: #2c3e50;
  color: black;
}
</style>
