<template>
<div>
  <el-dialog   title="收货地址" :visible.sync="dialongstate" width="80%">
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title">
          <i class="header-icon el-icon-user-solid"></i>基本信息
        </template>
        <div class="el-collapse-item__content">
          <form class="el-form">

            <el-row class="row-bg">
              <!--S 划分地址-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">区划地址</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select disabled="disabled"  aria-placeholder="请选择区域" class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                    </div>
                  </div>
              <!--E 划分地址-->

              <!--S 街路巷-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">街路巷</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select disabled="disabled"  aria-placeholder="请选择区域" class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
              <!--E 街路巷-->
            </el-row>

              <div class="el-row">
                <!--S 社区-->
                <div class="el-col el-col-11">
                  <div class="el-form-item  el-form-item--mini">
                    <label class="el-form-item__label" style="width: 150px;">社区</label>
                    <div class="el-form-item__content " style="margin-left: 150px;">
                      <el-select disabled="disabled"  aria-placeholder="请选择区域" class="el-input el-input--mini  el-input--suffix"></el-select>
                    </div>
                  </div>
                </div>
                <!--E 社区-->

                <!--S 小区性质-->
                <div class="el-col el-col-11">
                  <div class="el-form-item  el-form-item--mini">
                    <label class="el-form-item__label" style="width: 150px;">小区性质</label>
                    <div class="el-form-item__content " style="margin-left: 150px;">
                      <el-select disabled="disabled"  aria-placeholder="请选择区域" class="el-input el-input--mini  el-input--suffix"></el-select>
                    </div>
                  </div>
                </div>
              </div>
            <!--E 小区性质-->

            <div class="el-row">
              <!--S 门牌-->
              <div class="el-col el-col-11">
                <div class="el-form-item  is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">门(楼)牌</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select disabled="disabled"  aria-placeholder="请选择区域" class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
              <!--E 门牌-->

              <!--S 门牌后缀-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required  el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">门(楼)牌后缀</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select disabled="disabled"  aria-placeholder="请选择区域" class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
            </div>
            <!--E 门牌后缀-->

            <div class="el-row">
              <!--S 门牌-->
              <div class="el-col el-col-22">
                <div class="el-form-item  is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">门(楼)牌</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select disabled="disabled"  aria-placeholder="请选择区域" class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
            </div>
            <!--E 门牌-->

          </form>
        </div>
      </el-collapse-item>
    </el-collapse>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: "TableDialog",
  props: {
    dialogFormVisible: Boolean,
    disabled: Boolean
  },
  data (){
    return {
      dialongstate: this.dialogFormVisible,
      formLabelWidth: '120px',
      form:{},
      state1: '',
      restaurants: []
    }
  },
  watch:{
    dialogFormVisible(newvalue){
      this.dialongstate = newvalue
      console.log(this.dialogFormVisible,'dialog');
    }
  },
  methods: {
    danlchangestate(){
      this.$emit("danlchangestate");
    },
    querySearch(queryString, cb) {
      let restaurants = this.restaurants;
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      }
    },
    handleSelect(item){
      console.log(item)
    },
    handleIconClic(){

    }
  }

}
</script>

<style >
.el-dialog__header{
  height: 50px;
  background: #2c3e50;
  padding: initial !important;

}
.el-main{
  line-height: 0;
}
.el-dialog__title{
 margin-top: 12.5px

}
.el-dialog__body{
  padding: 10px 20px !important;
}

</style>
