<template>
  <el-row :gutter="10">
    <el-form :inline="true" v-model="form">
      <div style="float:left">
        <el-form-item>
          <el-select v-model="isRelationGrid" clearable placeholder="请选择"  @change="RGselectcd">
            <el-option
                v-for="item in curriculums"
                :key="item.value"
                :label="item.title"
                :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-select v-model="zhCurrdata" clearable placeholder="请选择"  @change="zhselectcd">
            <el-option
                v-for="item in xqxzdmdata"
                :key="item.value"
                :label="item.title"
                :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-select v-model="xqlxCurrdata" clearable placeholder="请选择"  @change="xqlxselectcd">
            <el-option
                v-for="item in xqlxsetectdata"
                :key="item.value"
                :label="item.title"
                :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="inputdata" placeholder="请输入小区名字或地址" ></el-input>
          <el-button type="primary" @click="SearchBut">搜索</el-button>
        </el-form-item>
      </div>

       <div style="float: right"  >
         <el-form-item>
           <el-button type="primary" @click="addxq">新增</el-button>
           <el-button type="primary">批量删除</el-button>
         </el-form-item>
       </div>

    </el-form>
  </el-row>
</template>

<script>
export default {
  name: "Topcomponet",
  props: {
    selectCurriculums: '',
    zhCurriculums: '',
    xqlxCurriculums: '',
  },
  data () {
    return {
      form:'',
      inputdata:'',
      isRelationGrid:this.selectCurriculums,
      zhCurrdata: this.zhCurriculums,
      xqlxCurrdata: this.xqlxCurriculums,
      curriculums: [{title: '全部',value: ''},{title: '关联',value: 1},{title: '未关联',value: 0}],
      xqxzdmdata: [{title: '智慧',value: 1},{title: '非智慧',value: 0}],
      xqlxsetectdata: [{title: '单位',value: 1},{title: '楼宇',value: 4},{title: '开放式社区',value: 2},{title: '农村',value: 5},{title: '其他',value: 99},{title: '封闭式小区商业',value: 3}]
    }
  },
  watch: {
    selectCurriculums(val){
      this.selectCurriculums = val
      console.log(val)
    }
  },
  computed: {

  },
  methods: {
    RGselectcd(){
      //警务网格关联下拉框
      console.log('改变')
      this.$emit("receive", this.isRelationGrid);
    },
    zhselectcd(){
      //小区智慧下拉框选中按钮
      this.$emit("zhreceive", this.zhCurrdata);
    },
    xqlxselectcd(){
      //小区类型下拉框
      this.$emit("xqlxreceive", this.xqlxCurrdata);
    },
    SearchBut() {
      //搜索按钮
      this.$emit('SearchBut',this.inputdata)
    },
    addxq(){
      //点击了新增
      this.$emit("addxq");
    }

  }
}
</script>

<style scoped>

.el-select{
  width: 130px;
  margin-left: 0px;
}
.el-button{
  width: auto;
}

.el-input{
  width: 300px;
}
</style>
