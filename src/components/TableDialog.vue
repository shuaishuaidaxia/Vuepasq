<template>
<div>
  <el-dialog  @close="handlclose" :title="this.gettitle" :visible.sync="getdialongstate" width="90%">
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title">
          <i class="header-icon el-icon-user-solid"></i>基本信息
        </template>
        <div class="el-collapse-item__content">
          <el-form class="el-form" ref="form" :model="form" >

            <el-row class="row-bg">
            <!--S 划分地址-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">区划地址</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-autocomplete
                        value-key="label"
                        key="value"
                        popper-class="my-autocomplete"
                        v-model="qhdzstate"
                        :fetch-suggestions="qhdzSearch"
                        placeholder="请输入内容"
                        :disabled="this.disabled"
                        @select="qhdzhandleSelect"
                        style="width: 100%"
                        class="el-input--small el-input--suffix"
                    >
                      <i
                        class="el-icon-edit el-input__icon"
                        slot="suffix"
                        @click="handleIconClick">
                    </i>
                      <template slot-scope="{item}">
                        <div class="qhdz">{{ item.label }}</div>
                      </template>
                    </el-autocomplete>
                  </div>
                    </div>
                  </div>
              <!--E 划分地址-->

              <!--S 街路巷-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">街路巷</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-autocomplete
                        value-key="label"
                        popper-class="my-autocomplete"
                        v-model="jlxstate"
                        :fetch-suggestions="jlxSearch"
                        placeholder="请输入内容"
                        :disabled="this.disabled"
                        @select="handleSelect"
                        style="width: 100%"
                        class="el-input--small el-input--suffix"
                    >
                      <i
                          class="el-icon-edit el-input__icon"
                          slot="suffix"
                          @click="handleIconClick">
                      </i>
                      <template slot-scope="{ item }">
                        <div class="name">{{ item.label}}</div>
                      </template>
                    </el-autocomplete>
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
                      <el-autocomplete
                          popper-class="my-autocomplete"
                          v-model="sqstate"
                          :fetch-suggestions="sqSearch"
                          placeholder="请输入内容"
                          :disabled="this.disabled"
                          @select="handleSelect"
                          style="width: 100%"
                          class="el-input--small el-input--suffix"
                      >
                        <i
                            class="el-icon-edit el-input__icon"
                            slot="suffix"
                            @click="handleIconClick">
                        </i>
                        <template slot-scope="{ item }">
                          <div class="name">{{ item.sqmc }}</div>
                        </template>
                      </el-autocomplete>
                    </div>
                  </div>
                </div>
                <!--E 社区-->

                <!--S 小区性质-->
                <div class="el-col el-col-11">
                  <div class="el-form-item  el-form-item--mini">
                    <label class="el-form-item__label" style="width: 150px;">小区性质</label>
                    <div class="el-form-item__content " style="margin-left: 150px;">
                      <el-select  value="" :disabled="this.disabled"  placeholder="请选择小区性质" class="el-input el-input--mini  el-input--suffix"></el-select>
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
                    <el-input  value="" :disabled="this.disabled"   class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
              <!--E 门牌-->

              <!--S 门牌后缀-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required  el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">门(楼)牌后缀</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-input  value="" :disabled="this.disabled"  placeholder="请选择门(楼)牌后缀" class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
            </div>
            <!--E 门牌后缀-->

            <!--S 全地址名称-->
            <div class="el-row">
              <div class="el-col el-col-22">
                <div class="el-form-item  is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">全地址名称</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-input  value="" :disabled="this.disabled"   class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
            </div>
            <!--E 全地址名称-->

            <div class="el-row">
              <!--S 小区名称-->
              <div class="el-col el-col-11">
                <div class="el-form-item  is-required el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">小区名称</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-input  value="" :disabled="this.disabled"   class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
              <!--E 小区名称-->

              <!--S 小区类型-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required  el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">小区类型</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="state"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入内容"
                        :disabled="this.disabled"
                        @select="handleSelect"
                        style="width: 100%"
                        class="el-input--small el-input--suffix"
                    >
                      <i
                          class="el-icon-edit el-input__icon"
                          slot="suffix"
                          @click="handleIconClick">
                      </i>
                      <template slot-scope="{ item }">
                        <div class="name">{{ item.value }}</div>
                        <span class="addr">{{ item.address }}</span>
                      </template>
                    </el-autocomplete>
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
                    <el-input  value="" :disabled="this.disabled"   class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
              <!--E 小区楼栋数量-->

              <!--S 建筑物房屋属性-->
              <div class="el-col el-col-11">
                <div class="el-form-item   el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">建筑物房屋属性</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select    value="" :disabled="this.disabled"  placeholder="请选择"  class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
            </div>
            <!--E 建筑物房屋属性-->

            <!--S 建筑物标签-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <div class="el-form-item   el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">建筑物标签</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-input  value="" :disabled="this.disabled"   class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
              <!--E 建筑物标签-->

              <!--S 物业公司单位名称-->
              <div class="el-col el-col-11">
                <div class="el-form-item   el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">物业公司单位名称</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select    value="" :disabled="this.disabled"  placeholder="请选择"  class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
            </div>
            <!--E 物业公司单位名称-->

            <!--S 使用状态代码-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <div class="el-form-item   el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">使用状态代码</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-select  value="" :disabled="this.disabled" placeholder="请选择"  class="el-input el-input--mini  el-input--suffix"></el-select>
                  </div>
                </div>
              </div>
              <!--E 使用状态代码-->

              <!--S 物业公司联系人姓名-->
              <div class="el-col el-col-11">
                <div class="el-form-item   el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">物业公司联系人姓名</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-input    value="" :disabled="this.disabled"    class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
            </div>
            <!--E 物业公司联系人姓名-->

            <!--S 物业公司联系电话-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <div class="el-form-item   el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">物业公司联系电话</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-input  value="" :disabled="this.disabled" class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
              <!--E 物业公司联系电话-->

              <!--S 小区启用日期-->
              <div class="el-col el-col-11">
                <div class="el-form-item   ">
                  <label class="el-form-item__label" style="width: 150px;">小区启用日期</label>
                  <div class="el-form-item__content" style="margin-left: 150px;">
                    <el-date-picker size="large" type="date"   value="" :disabled="this.disabled" placeholder="选择日期"  style="width: 100%"  class=" el-input--small el-input--suffix "></el-date-picker>
                  </div>
                </div>
              </div>
            </div>
            <!--E 小区启用日期-->

            <!--S 小区出入口数量-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <div class="el-form-item   el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">小区出入口数量</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-input  value="" :disabled="this.disabled"   class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
              <!--E 小区出入口数量-->

              <!--S 居村委代码-->
              <div class="el-col el-col-11">
                <div class="el-form-item   el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">居村委代码</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="state"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入内容"
                        :disabled="this.disabled"
                        @select="handleSelect"
                        style="width: 100%"
                        class="el-input--small el-input--suffix"
                    >
                      <i
                          class="el-icon-edit el-input__icon"
                          slot="suffix"
                          @click="handleIconClick">
                      </i>
                      <template slot-scope="{ item }">
                        <div class="name">{{ item.value }}</div>
                        <span class="addr">{{ item.address }}</span>
                      </template>
                    </el-autocomplete>
                  </div>
                </div>
              </div>
            </div>
            <!--E 居村委代码-->

            <!--S 乡镇街道-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <div class="el-form-item   el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">乡镇街道</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="state"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入内容"
                        :disabled="this.disabled"
                        @select="handleSelect"
                        style="width: 100%"
                        class="el-input--small el-input--suffix"
                    >
                      <i
                          class="el-icon-edit el-input__icon"
                          slot="suffix"
                          @click="handleIconClick">
                      </i>
                      <template slot-scope="{ item }">
                        <div class="name">{{ item.value }}</div>
                        <span class="addr">{{ item.address }}</span>
                      </template>
                    </el-autocomplete>
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
                    <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="state"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入内容"
                        :disabled="this.disabled"
                        @select="handleSelect"
                        style="width: 100%"
                        class="el-input--small el-input--suffix"
                    >
                      <i
                          class="el-icon-edit el-input__icon"
                          slot="suffix"
                          @click="handleIconClick">
                      </i>
                      <template slot-scope="{ item }">
                        <div class="name">{{ item.value }}</div>
                        <span class="addr">{{ item.address }}</span>
                      </template>
                    </el-autocomplete>
                  </div>
                </div>
              </div>
              <!--E 所属市局-->

              <!--S 所属分局-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required  el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">所属分局</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="state"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入内容"
                        :disabled="this.disabled"
                        @select="handleSelect"
                        style="width: 100%"
                        class="el-input--small el-input--suffix"
                    >
                      <i
                          class="el-icon-edit el-input__icon"
                          slot="suffix"
                          @click="handleIconClick">
                      </i>
                      <template slot-scope="{ item }">
                        <div class="name">{{ item.value }}</div>
                        <span class="addr">{{ item.address }}</span>
                      </template>
                    </el-autocomplete>
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
                    <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="state"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入内容"
                        :disabled="this.disabled"
                        @select="handleSelect"
                        style="width: 100%"
                        class="el-input--small el-input--suffix"
                    >
                      <i
                          class="el-icon-edit el-input__icon"
                          slot="suffix"
                          @click="handleIconClick">
                      </i>
                      <template slot-scope="{ item }">
                        <div class="name">{{ item.value }}</div>
                        <span class="addr">{{ item.address }}</span>
                      </template>
                    </el-autocomplete>
                  </div>
                </div>
              </div>
              <!--E 所属派出所-->

              <!--S 警务网格-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required  el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">警务网格</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="state"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入内容"
                        :disabled="this.disabled"
                        @select="handleSelect"
                        style="width: 100%"
                        class="el-input--small el-input--suffix"
                    >
                      <i
                          class="el-icon-edit el-input__icon"
                          slot="suffix"
                          @click="handleIconClick">
                      </i>
                      <template slot-scope="{ item }">
                        <div class="name">{{ item.value }}</div>
                        <span class="addr">{{ item.address }}</span>
                      </template>
                    </el-autocomplete>
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
                    <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="state"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入内容"
                        :disabled="this.disabled"
                        @select="handleSelect"
                        style="width: 100%"
                        class="el-input--small el-input--suffix"
                    >
                      <i
                          class="el-icon-edit el-input__icon"
                          slot="suffix"
                          @click="handleIconClick">
                      </i>
                      <template slot-scope="{ item }">
                        <div class="name">{{ item.value }}</div>
                        <span class="addr">{{ item.address }}</span>
                      </template>
                    </el-autocomplete>
                  </div>
                </div>
              </div>
              <!--E 所属责任区-->

              <!--S 小区边界-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required  el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">小区边界</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                      <el-input    value="" :disabled="this.disabled" placeholder="请选择"   class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
            </div>
            <!--E 小区边界-->

            <!--S 采集照片-->
            <div class="el-row">
              <div class="el-col el-col-22">
                <div class="el-form-item   el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">采集照片</label>
                  <div class="el-form-item__label-wrap" style="margin-left: 150px;">
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
          </el-form>
        </div>
      </el-collapse-item>
    </el-collapse>
    <ButGroup
    :butbc_isdisabled="this.$store.state.butbc_isdisabled"
    :butcz_isdisabled="this.$store.state.butcz_isdisabled"
    :butqx_isdisabled="this.$store.state.butqx_isdisabled"
    >
    </ButGroup>
  </el-dialog>
</div>
</template>

<script>
import ButGroup from "./ButGroup";
import {GetMainTableninfo, GetSqListByXzq, GetTreeChildren, GetTreeInfo} from "../http/api";
export default {
  name: "TableDialog",
  components: {ButGroup},
  props: {
    detailsitem: {}
  },
  data (){
    return {
      formLabelWidth: '100%',
      form:{},
      dialogImageUrl: '',
      dialogVisible: false,
      imagedisabled:false,
      state: '',
      /*autocomplete*/
      qhdzdata: [],  //区划分
      qhdzstate: '', //区划分
      jlxstate: '',  //街路巷
      jlxdata: [],  //街路巷
      sqstate: '',  //社区
      sqdata: [], //社区

      pId: '',
      max: '',
      hyzt: 0 ,
      level: ''
    }
  },
  computed:{
    getdialongstate:{
      get(){
        return this.$store.state.dilongstate
      },
      set(){}
    },
    disabled:{
     get(){
      return  this.$store.state.disabled
     },
      set() {
      }
    },
    gettitle(){
      return this.$store.state.dialogtitle
    },
    Treeparameter() {
      return  {pId : this.pId,max: this.max,hyzt: this.hyzt,level: this.level}
    },
    SqlistByXzqparameter(){
      return {xzq : this.pId}
    }
  },
  created() {
    console.log(this.disabled,'组件状态')
  },
  mounted() {
    this.max = 'W4'
    this.pId = '360100'
    this.Getqudz()
    console.log(this.detailsitem,'详情');
    },
  watch : {
    detailsitem(newvalue){
      console.log(newvalue,'aada')
    }
  },
  methods: {
    danlchangestate(){
      this.$emit("danlchangestate");
    },
    handleSelect(item){
      console.log(item,'')
    },
    qhdzhandleSelect(item)
    {
      //区划地址选择后
      console.log(item,'区划地址')
      this.max = 'fxj'
      this.pId = item.id
      this.GetXQTree()
      this.GetSqList()
    },
    handleIconClic(){

    },
    querySearch(){},
    handlclose(){
      //右上角的x
      console.log('我是右上角的x')
      this.$store.dispatch('Closemydialog')

    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      //图片下载点击
      console.log(file);
    },
    handleIconClick(ev) {
      //input图标点击事件
      console.log(ev);
    },
    qhdzSearch(queryString, cb) {
      let restaurants = this.qhdzdata;
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    jlxSearch(queryString, cb)
    {
      let restaurants = this.jlxdata;
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    sqSearch(queryString, cb)
    {
      let restaurants = this.sqdata;
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.address.toLowerCase().indexOf(queryString.toLowerCase()) >=0);
      };
    },
    Getqudz(){
      //区划地址
      GetTreeChildren(this.Treeparameter)
      .then( res =>{
        this.qhdzdata = res.data
        console.log(res,'mmmm')
      })
      .catch(err =>{
        alert(err)
      })
    },
    GetXQTree()
    {
      ///街角巷
      GetTreeChildren(this.Treeparameter)
          .then(res => {
            this.jlxdata = res.data
          })
          .catch(err => {
            console.log(err, '分页请求')
          })
    },
    GetSqList(){
      /*根据区地址加载社区*/
      GetSqListByXzq(this.SqlistByXzqparameter)
      .then( res =>{
        this.sqdata = res.data
        console.log(res,'社区资源')
      })
      .catch(err =>{
        alert(err)
      })
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
