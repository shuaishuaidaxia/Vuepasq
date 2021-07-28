<template>
  <div>
<!-- 警务网格下拉框   -->
    <div class="inlinback">
  <el-select v-model="isRelationGrid" clearable placeholder="请选择"  @change="RGselectcd" class="inlinback">
    <el-option
        v-for="item in curriculums"
        :key="item.value"
        :label="item.title"
        :value="item.value"
        >
    </el-option>
  </el-select>
<!-- 智慧小区下拉框  -->
  </div>
    <div class="inlinback">
    <el-select v-model="zhCurrdata" clearable placeholder="请选择"  @change="zhselectcd">
      <el-option
          v-for="item in xqxzdmdata"
          :key="item.value"
          :label="item.title"
          :value="item.value"
      >
      </el-option>
    </el-select
    ></div>
<!-- 小区类型下拉框   -->
    <div class="inlinback">
      <el-select v-model="xqlxCurrdata" clearable placeholder="请选择"  @change="xqlxselectcd">
        <el-option
            v-for="item in xqlxsetectdata"
            :key="item.value"
            :label="item.title"
            :value="item.value"
        >
        </el-option>
      </el-select
      ></div>
    <div class="inlinback">
      <el-input v-model="inputdata" placeholder="请输入小区名字或地址" ></el-input>
    </div>
    <div class="inlinback">
      <el-button type="primary" @click="SearchBut">搜索</el-button>
    </div>
    <div rbinlibock>
      <el-button type="primary">新增</el-button>
      <el-button type="primary">批量删除</el-button>
    </div>
  </div>
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
      this.$emit('SearchBut',this.inputdata)
    }
  }
}
</script>

<style scoped>
.inlinback{
  display: inline-block;
  float: left;
  margin-right: 5px;
}
.el-select{
  width: 130px;
  margin-left: 0px;
}
.el-button{
  width: auto;
}
.rbinlibock{
 /* display: inline-block;*/
  float: right;
}
.el-input{
  width: 300px;
}
</style>
