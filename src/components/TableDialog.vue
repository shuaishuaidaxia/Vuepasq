<template>
<div>
  <el-dialog  @close="handlclose" :title="this.gettitle" :visible.sync="getdialongstate" width="90%">
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title">
          <i class="header-icon el-icon-user-solid"></i>基本信息
        </template>
        <div class="el-collapse-item__content">
          <el-form class="el-form" ref="form" :model="form" label-width="150px" size="small">
            <el-row class="row-bg">
            <!--S 划分地址-->
              <div class="el-col el-col-11">
                    <el-form-item  label="区划分" required >
                    <el-autocomplete
                        value-key="label"
                        value="id"
                        popper-class="my-autocomplete"
                        v-model="form.qhdzstate"
                        :fetch-suggestions="((queryString, cb)=>{querySearch(queryString, cb,'qhdz')})"
                        placeholder="请输入内容"
                        :disabled="this.disabled"
                        @select="((item)=>{handleSelect(item,'qhdz')})"
                        style="width: 100%"
                        name="qhdzname"
                        size="mini"
                        clearable
                        ref="myAutocomplete"
                    >
                      <i
                        class="el-icon-edit el-input__icon"
                        slot="suffix"
                        @click="handleIconClick">
                    </i>
                      <template slot-scope="{item}">
                        <div class="qhdz">{{ item.label}}</div>
                      </template>
                    </el-autocomplete>
                    </el-form-item>
                  </div>
              <!--E 划分地址-->

              <!--S 街路巷-->
              <div class="el-col el-col-11">
                  <el-form-item  label="街路巷" required>
                    <el-autocomplete
                        value-key="label"
                        popper-class="my-autocomplete"
                        v-model="form.jlxstate"
                        :fetch-suggestions="((queryString, cb)=>{querySearch(queryString, cb,'jlx')})"
                        placeholder="请输入内容"
                        :disabled="this.disabled"
                        @select="((item)=>{handleSelect(item,'jlx')})"
                        style="width: 100%"
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
                  </el-form-item>
              </div>
              <!--E 街路巷-->
            </el-row>

              <div class="el-row">
                <!--S 社区-->
                <div class="el-col el-col-11">
                  <el-form-item  label="社区" required>
                      <el-autocomplete
                          popper-class="my-autocomplete"
                          v-model="form.sqstate"
                          :fetch-suggestions="((queryString, cb)=>{querySearch(queryString, cb,'sq')})"
                          placeholder="请输入内容"
                          :disabled="this.disabled"
                          @select="((item)=>{handleSelect(item,'sq')})"
                          style="width: 100%"
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
                  </el-form-item>
                </div>
                <!--E 社区-->

                <!--S 小区性质-->
                <div class="el-col el-col-11">
                  <el-form-item  label="小区性质" required>
                      <el-select  value="" :disabled="this.disabled" v-model="form.xqxzstate"  placeholder="请选择小区性质" class="el-input el-input--mini  el-input--suffix">
                        <el-option
                            v-for="item in xqxzdmdata"
                            :key="item.value"
                            :label="item.title"
                            :value="item.value"
                        >
                        </el-option>
                      </el-select>
                  </el-form-item>
                </div>
              </div>
            <!--E 小区性质-->

            <div class="el-row">
              <!--S 门牌-->
              <div class="el-col el-col-11">
                <el-form-item  label="门牌" required>
                    <el-input  value="" :disabled="this.disabled"  v-model="form.mlpstate"></el-input>
                </el-form-item>
              </div>
              <!--E 门牌-->

              <!--S 门牌后缀-->
              <div class="el-col el-col-11">
                <el-form-item  label="门牌后缀" required>
                    <el-input  value="" :disabled="this.disabled" v-model="form.mlphzstate" placeholder="请选择门(楼)牌后缀" class="el-input el-input--mini  el-input--suffix"></el-input>
                </el-form-item>
              </div>
            </div>
            <!--E 门牌后缀-->

            <!--S 全地址名称-->
            <div class="el-row">
              <div class="el-col el-col-22">
                <el-form-item  label="全地址名称" required>
                    <el-input  value="" :disabled="this.disabled" v-model="form.qdzmcstate"  class="el-input el-input--mini  el-input--suffix"></el-input>
                </el-form-item>
              </div>
            </div>
            <!--E 全地址名称-->

            <div class="el-row">
              <!--S 小区名称-->
              <div class="el-col el-col-11">
                <el-form-item  label="小区名称" required>
                    <el-input  value="" :disabled="this.disabled"  v-model="form.xqmcstate" class="el-input el-input--mini  el-input--suffix"></el-input>
                </el-form-item>
              </div>
              <!--E 小区名称-->

              <!--S 小区类型-->
              <div class="el-col el-col-11">
                <el-form-item  label="小区类型" required>
                  <el-select  value="" :disabled="this.disabled" v-model="form.xqlxstate"  placeholder="请选择小区类型" class="el-input el-input--mini  el-input--suffix">
                  <el-option
                      v-for="item in xqlxsetectdata"
                      :key="item.value"
                      :label="item.title"
                      :value="item.value"
                  >
                  </el-option>
                  </el-select>
                </el-form-item>
            </div>
            </div>
            <!--E 小区类型-->

            <!--S 小区楼栋数量-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <el-form-item  label="小区楼栋数量" required>
                    <el-input  value="" :disabled="this.disabled" v-model="form.xqldslstate"  class="el-input el-input--mini  el-input--suffix"></el-input>
                </el-form-item>
              </div>
              <!--E 小区楼栋数量-->

              <!--S 建筑物房屋属性-->
              <div class="el-col el-col-11">
                <el-form-item  label="建筑物房屋属性" required>
                    <el-select    value="" :disabled="this.disabled"  placeholder="请选择"  class="el-input el-input--mini  el-input--suffix"></el-select>
                </el-form-item>
            </div>
            </div>
            <!--E 建筑物房屋属性-->

            <!--S 建筑物标签-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <el-form-item  label="建筑物标签" required>
                    <el-input  value="" :disabled="this.disabled"   class="el-input el-input--mini  el-input--suffix"></el-input>
                </el-form-item>
              </div>
              <!--E 建筑物标签-->

              <!--S 物业公司单位名称-->
              <div class="el-col el-col-11">
                <el-form-item  label="物业公司单位名称" required>
                    <el-select    value="" :disabled="this.disabled"  placeholder="请选择"  class="el-input el-input--mini  el-input--suffix"></el-select>
                </el-form-item>
              </div>
            </div>
            <!--E 物业公司单位名称-->

            <!--S 使用状态代码-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <el-form-item  label="使用状态代码" required>
                    <el-select  value="" :disabled="this.disabled" placeholder="请选择"  class="el-input el-input--mini  el-input--suffix"></el-select>
                </el-form-item>
              </div>
              <!--E 使用状态代码-->

              <!--S 物业公司联系人姓名-->
              <div class="el-col el-col-11">
                <el-form-item  label="物业公司联系人姓名" required>
                    <el-input    value="" :disabled="this.disabled"    class="el-input el-input--mini  el-input--suffix"></el-input>
                </el-form-item>
              </div>
            </div>
            <!--E 物业公司联系人姓名-->

            <!--S 物业公司联系电话-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <el-form-item  label="物业公司联系电话" required>
                    <el-input  value="" :disabled="this.disabled" class="el-input el-input--mini  el-input--suffix"></el-input>
                </el-form-item>
              </div>
              <!--E 物业公司联系电话-->

              <!--S 小区启用日期-->
              <div class="el-col el-col-11">
                <el-form-item  label="小区启用日期" required>
                    <el-date-picker size="large" type="date"   value="" :disabled="this.disabled" placeholder="选择日期"  style="width: 100%"  class=" el-input--small el-input--suffix "></el-date-picker>
                </el-form-item>
              </div>
            </div>
            <!--E 小区启用日期-->

            <!--S 小区出入口数量-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <el-form-item  label="小区出入口数量" required>
                    <el-input  value="" :disabled="this.disabled" v-model="form.xqckslstate"   class="el-input el-input--mini  el-input--suffix"></el-input>
                </el-form-item>
              </div>
              <!--E 小区出入口数量-->

              <!--S 居村委代码-->
              <div class="el-col el-col-11">
                <el-form-item  label="居村委代码" required>
                    <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="form.state"
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
                </el-form-item>
            </div>
            </div>
            <!--E 居村委代码-->

            <!--S 乡镇街道-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <el-form-item  label="乡镇街道" required>
                    <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="form.state"
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
                </el-form-item>
              </div>
            </div>
              <!--E 小区出入口数量-->

            <!--S 所属市局-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <el-form-item  label="所属市局" required>
                    <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="form.sssjstate"
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
                </el-form-item>
            </div>
              <!--E 所属市局-->

              <!--S 所属分局-->
              <div class="el-col el-col-11">
                <el-form-item  label="所属分局" required>
                    <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="form.ssfsjstate"
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
                </el-form-item>
              </div>
            </div>
            <!--E 所属分局-->

            <!--S 所属派出所-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <el-form-item  label="所属派出所" required>
                    <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="form.sspcsstate"
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
                </el-form-item>
              </div>
              <!--E 所属派出所-->

              <!--S 警务网格-->
              <div class="el-col el-col-11">
                <el-form-item  label="警务网格" required>
                    <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="form.wgdmstate"
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
                </el-form-item>
              </div>
            </div>
            <!--E 警务网格-->

            <!--S 所属责任区-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <el-form-item  label="所属责任区" required>
                    <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="form.sszrqstate"
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
                </el-form-item>
              </div>
              <!--E 所属责任区-->

              <!--S 小区边界-->
              <div class="el-col el-col-11">
                <el-form-item  label="小区边界" required>
                      <el-input    value="" :disabled="this.disabled" v-model="form.xqbjstate" placeholder="请选择"   class="el-input el-input--mini  el-input--suffix"></el-input>
                </el-form-item>
              </div>
            </div>
            <!--E 小区边界-->

            <!--S 采集照片-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <el-form-item  label="采集照片" required>
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
                </el-form-item>
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
import {
  GetMainTableninfo,
  getSqBypcs,
  GetSqListByXzq,
  GetTreeChildren,
  GetTreeInfo,
  getXQByXqxxbz,
  getZrqBypcs
} from "../http/api";
var that=''
export default {
  name: "TableDialog",
  components: {ButGroup},
  props: {
    detailsitem: {}
  },
  data() {
    return {
      formLabelWidth: '100%',
      form: {
        jlxstate: '',
        xqckslstate: '',
        sszrqstatec: '',
        xqbjstate: '',
        xqmcstate: '',
        mlpstate: '',
        mlphzstate: '',
        qdzmcstate: '',
        xqxzstate: '',
        xqldslstate: '',
        xqlxstate: '',
        qhdzstate: '',
        sssjstate: '',
        ssfsjstate: '',
        sspcsstate: '',
        wgdmstate: '',
        sszrqstate: '',
        state: '',
        sqstate: ''
      },
      dialogImageUrl: '',
      dialogVisible: false,
      imagedisabled: false,

      /*autocomplete*/
      qhdzdata: [],  //区划分
      jlxdata: [],  //街路巷
      sqdata: [], //社区
      xqxzdmdata: [{title: '智慧', value: 1}, {title: '非智慧', value: 0}],
      xqlxsetectdata: [{title: '单位', value: 1}, {title: '楼宇', value: 4}, {title: '开放式社区', value: 2}, {title: '农村', value: 5
      }, {title: '其他', value: 99}, {title: '封闭式小区商业', value: 3}],

      sssjdata: [],
      ssfxjdata: [],
      sspcsdata: [],
      jwwgdata: [],

      pId: '',
      max: '',
      hyzt: 0,
      level: '',
      sssj: '',
      sspcs: '',
      ssfxj: '',

      qdzdm: '', //此属性为区地址代码 表示区划地址 如果此属性发生变化 街路巷也跟着变
      xqxxbz: '',
      infodata: []  //小区详情数据
    }
  },
  computed: {
    getdialongstate: {
      get() {
        return this.$store.state.dilongstate
      },
      set() {
      }
    },
    disabled: {
      get() {
        return this.$store.state.disabled
      },
      set() {
      }
    },
    gettitle() {
      return this.$store.state.dialogtitle
    },
    Treeparameter() {
      return {pId: this.pId, max: this.max, hyzt: this.hyzt, level: this.level}
    },
    SqlistByXzqparameter() {
      return {xzq: this.pId}
    },
    getchecktype() {
      return this.$store.state.dilongtype
    }
  },
  created() {
    that = this
    console.log(this.disabled, '组件状态')
  },
  filters: {
    qhdzfilter: function (value) {
      console.log(value, 'qhdzfilter')
      /* console.log(that.qhdzdata,'qhdzfilter');*/
      const finditem = that.qhdzdata.find((item) => {
        return item.id == value
      })
      console.log(finditem, 'qhdzfilter')
      return finditem.label
    }
  },
  mounted() {
    that = this
    this.max = 'W4'
    this.pId = '360100'
    this.Getqudz() //加载所有小区信息
    console.log(this.detailsitem, '详情');
    //this.GetTreeInfo()
  },
  watch: {
    /*详情item变化后更新数据*/
    detailsitem(newvalue) {
      this.xqxxbz = newvalue.xqxxbz
      this.GetXQByXqxxbz()
    },
    getchecktype(newvalue) {
      if (newvalue == 'add') {
        this.cleanmodel()
      }
    },
    'form.jlxstate': {
      handler() {
        if (this.infodata != null){
          this.pId = this.infodata.ssfxj.substr(0, 6)
          console.log(this.pId, 'caaa');
          GetTreeChildren(this.Treeparameter)
              .then(res => {
                console.log(res, '区地址变了后的街路巷地址')
                this.jlxdata = res.data
                let finditem = this.jlxdata.find((item) => {
                  return item.id == this.infodata.jlxdm
                })
                console.log(finditem)
                this.form.jlxstate = finditem != null ? finditem.label : this.infodata.jlxdm
              })
              .catch(err => {
                alert(err)
              })
        }
        }
    },
    'form.sspcsstate': {
      handler() {
        if (this.infodata != null) {
          this.pId = this.infodata.ssfxj
          console.log(this.pId, 'pcs数据重新加载')
          console.log(this.Treeparameter, 'pcs表单');
          GetTreeInfo(this.Treeparameter)
              .then(res => {
                console.log(res, 'pcs数据重新加载')
                let finditem = res.data.find((item) => {
                  return item.id == this.infodata.sspcs
                })
                this.form.sspcsstate = finditem != null ? finditem.label : this.infodata.sspcs
              })
              .catch(err => {
                alert(err)
              })
        }
      }
    },
    'form.wgdmstate': {
      handler() {
        if (this.infodata != null) {
          this.pId = this.infodata.sspcs
          console.log(this.pId, 'wgdm数据重新加载')
          getSqBypcs(this.Treeparameter)
              .then(res => {
                console.log(res, 'wgdm')
                let finditem = res.data.find((item) => {
                  return item.id == this.infodata.wgdm
                })
                console.log(finditem, 'wgdm')
                this.form.wgdmstate = finditem != null ? finditem.label : this.infodata.wgdm
              })
              .catch(err => {
                alert(err)
              })
        }
      }
    },
   'form.sszrqstate': {
     handler() {
       if (this.infodata != null) {
         this.pId = this.infodata.sspcs
         this.max = 'W4'
         GetTreeInfo(this.Treeparameter)
             .then(res => {
               let finditem = res.data.find((item) => {
                 return item.id == this.infodata.sssj
               })
               this.form.sszrqstate = finditem != null ? finditem.label : this.infodata.sszrq
             })
             .catch(err => {
               alert(err)
             })
       }
     }
   },
     'form.sssjstate': {
       handler() {
         if (this.infodata != null) {
           this.pId = ''
           GetTreeInfo(this.Treeparameter)
               .then(res => {
                 let finditem = res.data.find((item) => {
                   return item.id == this.infodata.sssj
                 })
                 this.form.sssjstate = finditem != null ? finditem.label : this.infodata.sssj
               })
               .catch(err => {
                 alert(err)
               })
         }
       }
     },
     'form.ssfsjstate': {
       handler() {
         console.log('cccc')
         if (this.infodata != null) {
           this.pId = this.infodata.sssj
           GetTreeInfo(this.Treeparameter)
               .then(res => {
                 let finditem = res.data.find((item) => {
                   return item.id == this.infodata.ssfxj
                 })

                 this.form.ssfsjstate = finditem != null ? finditem.label : this.infodata.ssfxj
               })
               .catch(err => {
                 alert(err)
               })
         }
       }
     }
  },

  methods: {
    danlchangestate(){
      this.$emit("danlchangestate");
    },
    handleSelect(item,filed){
      console.log(item,filed,'input点击')
      switch (filed){
        case 'qhdz':
          this.max = 'fxj'
          this.pId = item.id
          console.log(item,'取地址id');
          this.form.qhdzstate = item.label
          this.GetXQTree()
          this.GetSqList()
          break;
          case 'jlx':
            this.form.jlxstate = item.label
          break;
          case 'sq':
            this.form.sqstate = item.sqmc
          break;
      }
    },
    handleIconClic(){
      console.log('hadleIconclic')
    },
    querySearch(queryString, cb,filed){
      //搜所
      this.$refs.myAutocomplete.activated=true || this.$refs.myAutocomplete.handleFocus()
      console.log(filed,'fild')
      let restaurants = null
      switch (filed){
        case 'qhdz':
          restaurants = this.qhdzdata
          break;
        case 'jlx':
          restaurants = this.jlxdata
          break;
          case 'sq':
            restaurants = this.sqdata
          break;
      }
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    handlclose(){
      //右上角的x 关闭
      console.log('我是右上角的x')
      //this.cleanmodel()
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
    createFilter(queryString) {
      //过滤建议列表
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) >=0);
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
      /*清空组件数据*/
      this.infodata = null
      this.form.jlxstate = ''
      this.form.xqckslstate = ''
      this.form.sszrqstate = ''
      this.form.xqbjstate = ''
      this.form.xqmcstate = ''
      this.form.mlpstate = ''
      this.form.mlphzstate = ''
      this.form.qdzmcstate = ''
      this.form.xqxzstate = ''
      this.form.xqldslstate = ''
      this.form.xqlxstate = ''
      this.form.qhdzstate = ''
      this.form.sssjstate = ''
      this.form.ssfsjstate = ''
      this.form.sspcsstate = ''
      this.form.wgdmstate = ''
      this.form.jlxstate =''
      this.form.sspcsstate = ''
      this.form.wgdmstate = ''
      this.form.sszrqstate = ''
    },
    putmodel(data){
      //表单赋值
      this.form.jlxstate = data.jlxdm //街路巷
      this.form.xqckslstate = data.xqcrkSl  //小区出入口数量
      this.form.sszrqstate = data.sszrq  //所属责任区
      this.form.xqbjstate = data.xqbj //小区边界
      this.form.xqmcstate = data.jlxxqmc  //小区名称
      this.form.mlpstate = data.mlph  //门楼牌
      this.form.mlphzstate = data.mlphz //门楼牌后缀
      this.form.qdzmcstate = data.dzmc  //全地址名称
      this.form.xqxzstate = data.xqxzdm == '1' ? '智慧小区': '非智慧小区' //小区性质
      this.form.xqldslstate = data.xqldSl //楼栋数量
      this.form.xqlxstate = data.xqlx == 1 ? '单位' : data.xqlx == 4 ? '楼宇' : data.xqlx ==2 ? '开放式社区' : data.xqlx == 5 ? '农村' : data.xqlx == 3 ? '封闭式小区商业': '其他'  //小区类型
      /*this.qhdzstate = this.finldqxx(this.qhdzdata,data.ssfxj).label  //所属区地址*/
      let  qhdzfinditem = this.qhdzdata.find((item) =>{ return item .id == data.ssfxj.substr(0,data.ssfxj.length-item.id.length)})
      this.form.qhdzstate = qhdzfinditem != null ? qhdzfinditem.label : data.ssfxj
      this.form.ssfsjstate = data.ssfxj   //所属分市局
      this.form.sspcsstate = data.sspcs  //所属派出所
      this.form.wgdmstate = data.wgdm  //所属网格代码
      this.form.sssjstate = data.sssj   //所属市局
    },
    GetXQTree()
    {
      ///根据区信息加载街角巷
      GetTreeChildren(this.Treeparameter)
          .then(res => {
            this.jlxdata = res.data
            console.log(res,'街路巷请求后的数据')
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
    },
    GetXQByXqxxbz(){
    //  根据小区编码查询信息
      let xqxxbaparamter = {xqxxbz : this.xqxxbz}
      getXQByXqxxbz(xqxxbaparamter)
      .then(res =>{
        console.log(res,'详情查询')
        this.infodata = res.data
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
