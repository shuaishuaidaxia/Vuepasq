
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
            @SearchBut="SearchBut"
            @addxq="addxq"
            @batchDelete="deleteitem"
        ></Topcomponet>
      </el-header>
      <el-main>
        <MainTable
        :maintabledata="Tabledata"
        :pagetotal="pagetotal"
        @handlcurrent="handlcurrent"
        :loading="loading"
        :currentpage="pageIndex"
        @batchDelete="batchDelete"
        @handldelete="handldelete"
        >
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
      loading: false,
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
      Tabledata: [], //表格数据
      pagetotal: 0,
      deleteitems: [] //批量删除数据
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
      this.GetXQ()
      console.log(this.selectCurriculums,'传值过来')
    },
    zhselected(value) {
      console.log(value)
      //智慧小区
      this.zhselectdata = value
      this.GetXQ()
    },
    xqlxselectcd(value) {
      //小区类型
      console.log(value)
      this.xqlxselectdata = value
      this.GetXQ()
    },
    inputchange(value){
      //小区名称查询
      console.log(value)
      this.keyword = value
    },
    SearchBut(value){
      //搜索小区名称
      console.log('点击搜索',value)
      this.keyword = value
      this.GetXQ()
    },
    handleChechange(e){
      //Tree选择点击事件
      this.getSimpleCheckedNodes(e)
      console.log(this.sssj,this.ssfxj,this.sspcs,this.wgdm,'aa')
      this.GetXQ()
    },
    getSimpleCheckedNodes(e) {
      this.cleanparentinfo()

      if (e.data.id != '')
      {
        if (e.parent.data.id == ''){
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
      }
    },
    handlchangeloding(){
      this.loading = ! this.loading
    },
    cleanparentinfo(){
      //tree选择 清空表单项
      this.sssj = ''
      this.ssfxj = ''
      this.sspcs = ''
      this.wgdm = ''
      this.pageIndex = 1
    },
    GetXQ()
    {
      console.log(this.parameter,'请求头')
     this.handlchangeloding()
      GetMainTableninfo(this.parameter)
        .then(res => {
          this.handlchangeloding()
          this.Tabledata = res.data.dataList
          this.pagetotal = res.data.totalCount
          this. pageIndex = res.data.pageIndex
          console.log(this.Tabledata, '分页请求')
        })
            .catch(err => {
              console.log(err, '分页请求')
            })
    },
    handlcurrent(pageindex){
      //改变表格页码
      console.log('aaaaaaaa')
      this.pageIndex = pageindex
      this.GetXQ()
    },
    addxq(){
      //新增按钮点击
      console.log('新增按钮被点击',this.addxqstate)
      this.$store.dispatch('Openmydialong','add')
    },
    batchDelete(value){
      //批量删除
      console.log(value,'home-deletedata')
      this.deleteitems = value
    },
    deleteitem(){
      //批量删除按钮
      console.log('批量删除按钮')
      this.$confirm('此操作将永久删除'+this.deleteitems.length+'条'+'数据, 是否继续?', '提示', {
       confirmButtonText: '确定',
       cancelButtonText: '取消',
       type: 'warning'
     }).then(() => {
       this.$message({
         type: 'success',
         message: '删除成功!(只做提示并未删除)'
       });
     }).catch(() => {
       this.$message({
         type: 'info',
         message: '已取消删除'
       });
     });
    },
    handldelete(value){
      //删除单行数据
      this.$confirm('此操作将永久删除'+value.dzmc+', 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!(只做提示并未删除)'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
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
  line-height: 0px;
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
.el-dialog__title{
  float: left;
  color: white !important;
}

</style>
