
<template>
  <div class="box" id="app">
  <el-container style="height: 100%">
    <el-aside width="200px"  >
      <TreeNav></TreeNav>
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
            :inputval="inputdata"
            @xqmzreceive="inputchange"
        ></Topcomponet>
      </el-header>
      <el-main>
        <MainTable></MainTable>
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
      inputdata: '' //input输入框
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
      console.log(value)
      this.xqlxselectdata = value
    },
    inputchange(value){
      console.log(value)
      this.xqlxselectdata = value
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
  margin-top: 10px;
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
