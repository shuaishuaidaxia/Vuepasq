<template>
<div>
  <el-dialog  @close="handlclose" title="基本信息" :visible.sync="dialongstate" width="90%">
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
                    <el-select value="" disabled="disabled"  placeholder="请选择区域" class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                    </div>
                  </div>
              <!--E 划分地址-->

              <!--S 街路巷-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">街路巷</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select  value="" disabled="disabled"  placeholder="请选择街路巷" class="el-input el-input--mini  el-input--suffix"></el-select>
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
                      <el-select  value="" disabled="disabled"  placeholder="请选择社区" class="el-input el-input--mini  el-input--suffix"></el-select>
                    </div>
                  </div>
                </div>
                <!--E 社区-->

                <!--S 小区性质-->
                <div class="el-col el-col-11">
                  <div class="el-form-item  el-form-item--mini">
                    <label class="el-form-item__label" style="width: 150px;">小区性质</label>
                    <div class="el-form-item__content " style="margin-left: 150px;">
                      <el-select  value="" disabled="disabled"  placeholder="请选择小区性质" class="el-input el-input--mini  el-input--suffix"></el-select>
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
                    <el-input  value="" disabled="disabled"   class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
              <!--E 门牌-->

              <!--S 门牌后缀-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required  el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">门(楼)牌后缀</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select  value="" disabled="disabled"  placeholder="请选择门(楼)牌后缀" class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
            </div>
            <!--E 门牌后缀-->

            <!--S 门牌-->
            <div class="el-row">
              <div class="el-col el-col-22">
                <div class="el-form-item  is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">门(楼)牌</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-input  value="" disabled="disabled"   class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
            </div>
            <!--E 门牌-->

            <div class="el-row">
              <!--S 小区名称-->
              <div class="el-col el-col-11">
                <div class="el-form-item  is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">小区名称</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-input  value="" disabled="disabled"   class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
              <!--E 小区名称-->

              <!--S 小区类型-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required  el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">小区类型</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select    value="" disabled="disabled"  placeholder="请选择"  class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
            </div>
            <!--E 小区类型-->

            <!--S 小区楼栋数量-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <div class="el-form-item  is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">小区楼栋数量</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-input  value="" disabled="disabled"   class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
              <!--E 小区楼栋数量-->

              <!--S 建筑物房屋属性-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required  el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">建筑物房屋属性</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select    value="" disabled="disabled"  placeholder="请选择"  class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
            </div>
            <!--E 建筑物房屋属性-->

            <!--S 建筑物标签-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <div class="el-form-item  is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">建筑物标签</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-input  value="" disabled="disabled"   class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
              <!--E 建筑物标签-->

              <!--S 物业公司单位名称-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required  el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">物业公司单位名称</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select    value="" disabled="disabled"  placeholder="请选择"  class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
            </div>
            <!--E 物业公司单位名称-->

            <!--S 使用状态代码-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <div class="el-form-item  is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">使用状态代码</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select  value="" disabled="disabled" placeholder="请选择"  class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
              <!--E 使用状态代码-->

              <!--S 物业公司联系人姓名-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required  el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">物业公司联系人姓名</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-input    value="" disabled="disabled"    class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
            </div>
            <!--E 物业公司联系人姓名-->

            <!--S 物业公司联系电话-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <div class="el-form-item  is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">物业公司联系电话</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-input  value="" disabled="disabled" class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
              <!--E 物业公司联系电话-->

              <!--S 小区启用日期-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required  ">
                  <label class="el-form-item__label" style="width: 150px;">小区启用日期</label>
                  <div class="el-form-item__content" style="margin-left: 150px;">
                    <el-date-picker size="large" type="date"   value="" disabled="disabled" placeholder="选择日期"  style="width: 100%"  class=" el-input--small el-input--suffix "></el-date-picker>
                  </div>
                </div>
              </div>
            </div>
            <!--E 小区启用日期-->

            <!--S 小区出入口数量-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <div class="el-form-item  is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">小区出入口数量</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-input  value="" disabled="disabled"   class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
              <!--E 小区出入口数量-->

              <!--S 居村委代码-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required  el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">居村委代码</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select    value="" disabled="disabled" placeholder="请选择"   class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
            </div>
            <!--E 居村委代码-->

            <!--S 小区出入口数量-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <div class="el-form-item  is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">小区出入口数量</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-input  value="" disabled="disabled"   class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
              <!--E 小区出入口数量-->

              <!--S 居村委代码-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required  el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">居村委代码</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select    value="" disabled="disabled" placeholder="请选择"   class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
            </div>
            <!--E 居村委代码-->

            <!--S 乡镇街道-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <div class="el-form-item  is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">乡镇街道</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select  value="" disabled="disabled" placeholder="请选择街道"  class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
            </div>
              <!--E 小区出入口数量-->

            <!--S 所属市局-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <div class="el-form-item  is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">所属市局</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select  value="" disabled="disabled"    class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
              <!--E 所属市局-->

              <!--S 所属分局-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required  el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">所属分局</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select    value="" disabled="disabled" placeholder="请选择"   class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
            </div>
            <!--E 所属分局-->

            <!--S 所属派出所-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <div class="el-form-item  is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">所属派出所</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select  value="" disabled="disabled"   class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
              <!--E 所属派出所-->

              <!--S 警务网格-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required  el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">警务网格</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select    value="" disabled="disabled" placeholder="请选择"   class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
            </div>
            <!--E 警务网格-->

            <!--S 所属责任区-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <div class="el-form-item  is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">所属责任区</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select  value="" disabled="disabled"   class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
              <!--E 所属责任区-->

              <!--S 小区边界-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required  el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">小区边界</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select    value="" disabled="disabled" placeholder="请选择"   class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
            </div>
            <!--E 小区边界-->

            <!--S 采集照片-->
            <div class="el-row">
              <div class="el-col el-col-22">
                <div class="el-form-item  is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">所属责任区</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-upload
                        action="#"
                        list-type="picture-card"
                        :auto-upload="false">
                      <i slot="default" class="el-icon-plus"></i>
                      <div slot="file" slot-scope="{file}">
                        <img
                            class="el-upload-list__item-thumbnail"
                            :src="file.url" alt=""
                        >
                        <span class="el-upload-list__item-actions">
        <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
            v-if="!imagedisabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
            v-if="!imagedisabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
                      </div>
                    </el-upload>
                  </div>
                </div>
              </div>
            </div>
              <!--E 采集照片-->
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
      restaurants: [],
      dialogImageUrl: '',
      dialogVisible: false,
      imagedisabled:false
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
    handleSelect(item){
      console.log(item)
    },
    handleIconClic(){

    },
    handlclose(){
      //右上角的x
      this.$emit("danlchangestate");
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
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
