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
                        name="qhdz"
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
                      <el-select  value="" :disabled="this.disabled" v-model="xqxzstate"  placeholder="请选择小区性质" class="el-input el-input--mini  el-input--suffix">
                        <el-option
                            v-for="item in xqxzdmdata"
                            :key="item.value"
                            :label="item.title"
                            :value="item.value"
                        >
                        </el-option>
                      </el-select>
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
                    <el-input  value="" :disabled="this.disabled"  v-model="mlpstate"  class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
              <!--E 门牌-->

              <!--S 门牌后缀-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required  el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">门(楼)牌后缀</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                    <el-input  value="" :disabled="this.disabled" v-model="mlphzstate" placeholder="请选择门(楼)牌后缀" class="el-input el-input--mini  el-input--suffix"></el-input>
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
                    <el-input  value="" :disabled="this.disabled" v-model="qdzmcstate"  class="el-input el-input--mini  el-input--suffix"></el-input>
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
                    <el-input  value="" :disabled="this.disabled"  v-model="xqmcstate" class="el-input el-input--mini  el-input--suffix"></el-input>
                  </div>
                </div>
              </div>
              <!--E 小区名称-->

              <!--S 小区类型-->
              <div class="el-col el-col-11">
                <div class="el-form-item is-required  el-form-item--mini">
                  <label class="el-form-item__label" style="width: 150px;">小区类型</label>
                  <div class="el-form-item__content " style="margin-left: 150px;">
                  <el-select  value="" :disabled="this.disabled" v-model="xqlxstate"  placeholder="请选择小区类型" class="el-input el-input--mini  el-input--suffix">
                  <el-option
                      v-for="item in xqlxsetectdata"
                      :key="item.value"
                      :label="item.title"
                      :value="item.value"
                  >
                  </el-option>
                  </el-select>
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
                    <el-input  value="" :disabled="this.disabled" v-model="xqldslstate"  class="el-input el-input--mini  el-input--suffix"></el-input>
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
                    <el-input  value="" :disabled="this.disabled" v-model="xqckslstate"   class="el-input el-input--mini  el-input--suffix"></el-input>
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
                        v-model="sssjstate"
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
                        v-model="ssfsjstate"
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
                        v-model="sspcsstate"
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
                        v-model="wgdmstate"
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
                        v-model="sszrqstate"
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
                      <el-input    value="" :disabled="this.disabled" v-model="xqbjstate" placeholder="请选择"   class="el-input el-input--mini  el-input--suffix"></el-input>
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
import {GetMainTableninfo, GetSqListByXzq, GetTreeChildren, GetTreeInfo, getXQByXqxxbz, getZrqBypcs} from "../http/api";
export default {
  name: "TableDialog",
  components: {ButGroup},
  props: {
    detailsitem: {}
  },
  data (){
    return {
      formLabelWidth: '100%',
      form: {},
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
      xqxzdmdata: [{title: '智慧',value: 1},{title: '非智慧',value: 0}],
      xqlxsetectdata: [{title: '单位',value: 1},{title: '楼宇',value: 4},{title: '开放式社区',value: 2},{title: '农村',value: 5},{title: '其他',value: 99},{title: '封闭式小区商业',value: 3}],

      sssjdata: [],
      ssfxjdata: [],
      sspcsdata:[],
      jwwgdata: [],

      pId: '',
      max: '',
      hyzt: 0 ,
      level: '',
      sssj:'',
      sspcs: '',
      ssfxj: '',

      xqxxbz: '',
      xqbjstate: '',
      sszrqstate: '',
      wgdmstate: '',
      sspcsstate: '',
      ssfsjstate:'',
      sssjstate: '',
      xqckslstate: '',
      xqldslstate: '',
      xqlxstate: '',
      xqmcstate: '',
      qdzmcstate: '',
      mlphzstate: '',
      mlpstate: '',
      xqxzstate: '',
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
    },
    getchecktype(){
        return this.$store.state.dilongtype
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
    this.GetTreeInfo()

    },
  watch : {
    detailsitem(newvalue){
      this.xqxxbz = newvalue.xqxxbz
      this.GetXQByXqxxbz()
      console.log(newvalue,'aada')
    },
    getchecktype(newvalue){
     if (newvalue == 'add'){
       this.cleanmodel()
     }
    },
    ssfxj(newvalue){
      console.log(newvalue,'gfya');
      this.pId = newvalue
      GetTreeInfo(this.Treeparameter)
      .then(res =>{
        console.log(res,'wwww')
        this.sspcsdata = res.data
      })
      .catch(err =>{
        alert(err)
      })
    },
    sspcs(newvalue){
      if (this.sspcsdata!=null){
        console.log(newvalue,'pcs')
        this.sspcsstate = newvalue
        console.log(this.sspcsdata);
      }

      this.sspcsstate = this.findssfsj(this.sspcsdata,newvalue).label
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
      //this.cleanmodel()
      console.log(this.model)
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
      //区划地址 区信息
      GetTreeChildren(this.Treeparameter)
      .then( res =>{
        this.qhdzdata = res.data
        console.log(res,'mmmm')
      })
      .catch(err =>{
        alert(err)
      })
    },
    cleanmodel(){
      this.jlxstate = ''
      this.xqckslstate = ''
      this.sszrqstate = ''
      this.xqbjstate = ''
      this.xqmcstate = ''
      this.mlpstate = ''
      this.mlphzstate = ''
      this.qdzmcstate = ''
      this.xqxzstate = ''
      this.xqldslstate = ''
      this.xqlxstate = ''
      this.qhdzstate = ''
      this.sssjstate = ''
      this.ssfsjstate = ''
      this.sspcsstate = ''
      this.wgdmstate= ''
    },
    putmodel(data){
      //表单赋值
      console.log('赋值888888888888888888888888888')
      this.jlxstate = data.jlxdm //街路巷
      this.xqckslstate = data.xqcrkSl  //小区出入口数量
      this.sszrqstate = data.sszrq  //所属责任区
      this.xqbjstate = data.xqbj //小区边界
      this.xqmcstate = data.jlxxqmc  //小区名称
      this.mlpstate = data.mlph  //门楼牌
      this.mlphzstate = data.mlphz //门楼牌后缀
      this.qdzmcstate = data.dzmc  //全地址名称
      this.xqxzstate = data.xqxzdm == '1' ? '智慧小区': '非智慧小区' //小区性质
      this.xqldslstate = data.xqldSl //楼栋数量
      this.xqlxstate = data.xqlx == 1 ? '单位' : data.xqlx == 4 ? '楼宇' : data.xqlx ==2 ? '开放式社区' : data.xqlx == 5 ? '农村' : data.xqlx == 3 ? '封闭式小区商业': '其他'  //小区类型
      this.qhdzstate = this.finldqxx(this.qhdzdata,data.ssfxj).label  //所属区地址
      console.log(this.qhdzdata,'8888')
      this.ssfsjstate = this.findssfsj(this.ssfxjdata,data.ssfxj).label

      /*S 所属派出所*/
      this.pId = this.ssfxj
      GetTreeInfo(this.Treeparameter)
          .then(res =>{
            this.sspcsdata = res.data
            this.sspcsstate = this.findssfsj(res.data,data.sspcs).label
          })
          .catch(err =>{
            alert(err)
          })
      /*E 所属派出所赋值*/

      /*S 网格代码*/
      if (data.wgdm!=null){
        this.pId = this.sspcs
        this.max = 'W4'
        console.log(this.pId,'pcspid');
        getZrqBypcs(this.Treeparameter)
            .then(res =>{
              this.jwwgdata = res.data
              console.log(res.data,'qqqq')
              console.log(data.wgdm)
              if (!this.findssfsj(res.data,data.wgdm).label){
                this.wgdmstate =this.findssfsj(res.data,data.wgdm).label
              }
              else
              {
                this.wgdmstate =this.findssfsj(res.data,data.wgdm).label
              }

            })
            .catch(err =>{
              alert(err)
            })
      }
      /*E 网格代码*/
    },
   finldqxx(data,value){
      //查找小区
      let itemvalue = ''
      data.forEach((item) =>{
        if (item.id == value.substr(0,value.length-item.id.length))
        {
         itemvalue = item
        }
      }
   )
     return itemvalue
   },
    findssfsj(data,value){
      //查找分县局
      let find_item = ''
      data.forEach((item) =>{
        if (item.id == value){
          find_item = item
        }
      })
      return find_item
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
    GetTreeInfo(){
      //获取市局信息
      this.pId = ''
      GetTreeInfo(this.Treeparameter)
      .then( res =>{
        console.log(res.data[0].label,'是啥');
        this.sssjstate = res.data[0].label
        this.pId = res.data[0].id
        GetTreeInfo(this.Treeparameter)
        .then(res=>{
          this.ssfxjdata = res.data
          console.log(res,'草');
        })
        .catch(err =>{
          console.log(err);
        })
      })
      .catch(err =>{

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
    },
    GetXQByXqxxbz(){
    //  根据小区编码查询信息
      let xqxxbaparamter = {xqxxbz : this.xqxxbz}
      getXQByXqxxbz(xqxxbaparamter)
      .then(res =>{
        console.log(res,'详情查询')
        this.ssfsjstate = res.data.ssfxj
        this.ssfxj = res.data.ssfxj
        this.sspcs = res.data.sspcs
        this.putmodel(res.data)
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
.el-input__inner{
  color: black !important;
}
</style>
