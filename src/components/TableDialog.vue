<template>
<div>
  <el-dialog  @close="handlclose" :title="this.gettitle" :visible.sync="getdialongstate" width="90%">
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title">
          <i class="header-icon el-icon-user-solid"></i>基本信息
        </template>
        <div class="el-collapse-item__content">
          <el-form class="el-form" ref="form" :model="form" label-width="150px" size="small" :rules="rules" >
            <el-row class="row-bg">
            <!--S 划分地址-->
              <div class="el-col el-col-11">
                    <el-form-item  label="区划分" required  prop="qhdzstate" >
                      <el-select clearable v-model="form.qhdzstate" filterable placeholder="请选择" :disabled="this.disabled"  @change="hanldselected('qhdz')" style="width: 100%">
                        <el-option
                            v-for="item in this.qhdzdata"
                            :key="item.id"
                            :label="item.label"
                            :value="item.id">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </div>
              <!--E 划分地址-->

              <!--S 街路巷-->
              <div class="el-col el-col-11">
                  <el-form-item  label="街路巷" required>
                    <el-select v-model="form.jlxstate" filterable placeholder="请选择" :disabled="this.disabled"  @change="hanldselected('jlx')" style="width: 100%">
                      <el-option
                          v-for="item in this.jlxdata"
                          :key="item.id"
                          :label="item.label"
                          :value="item.id">
                      </el-option>
                    </el-select>
                  </el-form-item>
              </div>
              <!--E 街路巷-->
            </el-row>

              <div class="el-row">
                <!--S 社区-->
                <div class="el-col el-col-11">
                  <el-form-item  label="社区" required>
                    <el-select v-model="form.sqstate" filterable placeholder="请选择" :disabled="this.disabled"  @change="hanldselected('sq')" style="width: 100%">
                      <el-option
                          v-for="item in this.sqdata"
                          :key="item.sqxxbz"
                          :label="item.sqmc"
                          :value="item.sqxxbz">
                      </el-option>
                    </el-select>
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
                    <el-select  value="" :disabled="this.disabled" v-model="form.syztdmstate" placeholder="请选择"  class="el-input el-input--mini  el-input--suffix">
                      <el-option
                          v-for="item in syztdmdata"
                          :key="item.value"
                          :label="item.title"
                          :value="item.value"
                      >
                      </el-option>
                    </el-select>
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
                    <el-date-picker size="large" type="date" v-model="form.xqqyrq"  value="" :disabled="this.disabled" placeholder="选择日期"  style="width: 100%"  class=" el-input--small el-input--suffix "></el-date-picker>
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
                  <el-select  value="" :disabled="this.disabled"   placeholder="请选择" class="el-input el-input--mini  el-input--suffix">
                  </el-select>
                </el-form-item>
            </div>
            </div>
            <!--E 居村委代码-->

            <!--S 乡镇街道-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <el-form-item  label="乡镇街道" required>
                  <el-select  value="" :disabled="this.disabled"  placeholder="请选择" class="el-input el-input--mini  el-input--suffix">

                  </el-select>
                </el-form-item>
              </div>
            </div>
              <!--E 小区出入口数量-->

            <!--S 所属市局-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <el-form-item  label="所属市局" required>
                  <el-select v-model="form.sssjstate" filterable placeholder="请选择" :disabled="this.disabled"  @change="hanldselected('sssj')" style="width: 100%">
                    <el-option
                        v-for="item in this.sssjdata"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
            </div>
              <!--E 所属市局-->

              <!--S 所属分局-->
              <div class="el-col el-col-11">
                <el-form-item  label="所属分局" required>
                  <el-select v-model="form.ssfsjstate" filterable placeholder="请选择" :disabled="this.disabled"  @change="hanldselected('ssfsj')" style="width: 100%">
                    <el-option
                        v-for="item in this.ssfxjdata"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
            <!--E 所属分局-->

            <!--S 所属派出所-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <el-form-item  label="所属派出所" required>
                  <el-select v-model="form.sspcsstate" filterable placeholder="请选择" :disabled="this.disabled"  @change="hanldselected('sspcs')" style="width: 100%">
                    <el-option
                        v-for="item in this.sspcsdata"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <!--E 所属派出所-->

              <!--S 警务网格-->
              <div class="el-col el-col-11">
                <el-form-item  label="警务网格" required>
                  <el-select v-model="form.wgdmstate" filterable placeholder="请选择" :disabled="this.disabled"  @change="hanldselected('wgdm')" style="width: 100%">
                    <el-option
                        v-for="item in this.jwwgdata"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
            <!--E 警务网格-->

            <!--S 所属责任区-->
            <div class="el-row">
              <div class="el-col el-col-11">
                <el-form-item  label="所属责任区" required>
                  <el-select v-model="form.sszrqstate" filterable placeholder="请选择" :disabled="this.disabled"  @change="hanldselected('sszrq')" style="width: 100%">
                    <el-option
                        v-for="item in this.sszrqdata"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id">
                    </el-option>
                  </el-select>
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
              <div class="el-col el-col-22" >
                <el-form-item  label="采集照片" required style="float: left">
                  <el-upload
                      action="https://jsonplaceholder.typicode.com/posts/"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible" :append-to-body="true" width="800px" >
                    <img width="100%" :src="form.dialogImageUrl" alt="">
                  </el-dialog>
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
    @qx_click="qx_click"
    @cz_click="zc_click"
    @bc_click="bc_click('form')"
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
        jlxstate: '',   //街路巷
        xqckslstate: '',  //小区出入口数量
        xqbjstate: '',    //小区边界
        xqmcstate: '',   //小区名称
        mlpstate: '',    // 门牌
        mlphzstate: '',  //门牌后缀
        qdzmcstate: '',  //全地址名称
        xqxzstate: '',   //小区性质
        xqldslstate: '',  //小区楼栋数量
        xqlxstate: '',    //小区类型
        qhdzstate: '',    //区划分地址
        sssjstate: '',    //所属sj
        ssfsjstate: '',   //所属fsj
        sspcsstate: '',   // 所属pcs
        wgdmstate: '',   //网格代码
        sszrqstate: '',  //责任区
        state: '',
        sqstate: '',      //社区
        syztdmstate:'',    //使用状态代码
        dialogImageUrl: '', //图片地址
        xqqyrq:'',          //小区启用日期
      },
      dialogVisible: false,
      xqxzdmdata: [{title: '智慧', value: 1}, {title: '非智慧', value: 0}],
      xqlxsetectdata: [{title: '单位', value: 1}, {title: '楼宇', value: 4}, {title: '开放式社区', value: 2}, {title: '农村', value: 5
      }, {title: '其他', value: 99}, {title: '封闭式小区商业', value: 3}],
      syztdmdata: [{title: '启用',value:10},{title:'未启用',value: 20}], //

      rules:{
        qhdzstate:[{require: true, message: '此处不能为空',trigger: 'blur'}]
      },
      sssjdata: [],
      ssfxjdata: [],
      sspcsdata: [],
      jwwgdata: [],
      qhdzdata: [],  //区划分
      jlxdata: [],  //街路巷
      sqdata: [], //社区
      sszrqdata: [],

      pId: '',
      max: '',
      hyzt: 0,
      level: '',
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
    },
  },
  created() {
    that = this
    console.log(this.disabled, '组件状态')
  },
  filters: {
   /* qhdzfilter: function (value) {
      console.log(value, 'qhdzfilter')
      const finditem = that.qhdzdata.find((item) => {
        return item.id == value
      })
      console.log(finditem, 'qhdzfilter')
      return finditem.label
    }*/
  },
  mounted() {
      that = this
      this.getjuinfo()
      this.max = 'W4'
      this.pId = '360100'
      this.Getqudz('360100') //加载所有小区信息
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
        this.cleanmodel()
    },
    'form.jlxstate': {
      handler() {
        if (this.getchecktype == 'add' ){
          if (this.form.jlxstate != '')
          {
            this.form.qdzmcstate = this.qhdzdata.find((item)=>{return item.id == this.form.qhdzstate}).label
            this.form.qdzmcstate += this.jlxdata.find((item)=>{return item.id == this.form.jlxstate}).label
          }

        }
        else {
          if (this.infodata != null){
            this.pId = this.infodata.ssfxj.substr(0, 6)
            console.log(this.pId, 'caaa');
            GetTreeChildren(this.Treeparameter)
                .then(res => {
                  this.jlxdata = res.data
                  let finditem = this.jlxdata.find((item) => {
                    return item.id == this.infodata.jlxdm
                  })
                  this.form.jlxstate = finditem != null ? finditem.label : this.infodata.jlxdm
                })
                .catch(err => {
                  alert(err)
                })
          }
        }

        }
    },
    'form.sspcsstate': {
      handler() {
        if (this.getchecktype == 'add') {

        } else {
          if (this.infodata != null) {
            this.pId = this.infodata.ssfxj
            GetTreeInfo(this.Treeparameter)
                .then(res => {
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
      }
    },
    'form.wgdmstate': {
      handler() {
        if (this.getchecktype == 'add') {

        } else {
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
      }
    },
   'form.sszrqstate': {
     handler() {
       if (this.getchecktype == 'add') {

       } else {
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
     }
   },
     'form.sssjstate': {
       handler() {
         if (this.getchecktype == 'add'){

         }
         else
         {
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
         }

     },
     'form.ssfsjstate': {
       handler() {
         console.log('cccc')
         if (this.getchecktype == 'add') {

         } else {
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
    'form.qhdzstate':{
      handler(){
        console.log(this.form.qhdzstate,'form.qhdzstate')
        if (this.getchecktype == 'add'){
          if (this.form.qhdzstate != '')
          {
            this.form.qdzmcstate = this.qhdzdata.find((item)=>{return item.id == this.form.qhdzstate}).label
            this.form.jlxstate = ''
          }

        }

      }
    }
  },

  methods: {
   async hanldselected(type){
      switch (type){
        case 'qhdz':
          this.pId = this.form.qhdzstate
          this.max = 'fsj'
          this.form.jlxstate = ''
          this.form.sqstate = ''
          this.GetXQTree()
          this.GetSqList()
          break;
          case 'jlx':
            break;
          case 'sq':
            break;
        case 'sssj':
         this.ssfxjdata  =  await this.getjjinfoBypId(this.form.sssjstate)
          break
        case 'ssfsj':
          this.sspcsdata = await this.getjjinfoBypId(this.form.ssfsjstate)
          break;
          case 'sspcs':
            this.jwwgdata = await this.getjjinfoBypId(this.form.sspcsstate)
            this.sszrqdata = await this.getzrqinfoBypcs(this.form.sspcsstate)
            break;
        case 'wgdm':
          break
      }
    },
   async getzrqinfoBypcs(pcs){
     /*通过派出所获取责任区*/
     this.pId = pcs
      let res = await GetTreeInfo(this.Treeparameter)
     console.log()
     return res.data
    },
    async  getjjinfoBypId(pid){
      /*根据pid获取数据*/
      this.pId = pid
      let  response = await  getSqBypcs(this.Treeparameter)
      return response.data
    },
    async getjuinfo(){
      /*开句获取sj信息*/
      await  getSqBypcs(this.Treeparameter)
          .then(res =>{
              console.log(res.data,'开句数据sj')
            this.sssjdata = res.data
          })
          .catch(err => alert(err))
    },
    qx_click(){
     //取消按钮
      this.$store.dispatch('Closemydialog')
    },
    zc_click(){
     //重置
     this.cleanmodel()
     },
    bc_click(){
     //保存代码
      this.$refs['form'].validate((vaid)=>{
        if (vaid){
              alert('提交表单')
        }
        else {
          console.log('提交失败!')
        }
      })
    },
    danlchangestate(){
     //改变对话框的可见状态
      this.$emit("danlchangestate");
    },
    handlclose(){
      //右上角的x 关闭
      this.$store.dispatch('Closemydialog')
    },
    handleRemove(file) {
     //照片移除
      console.log(file);
    },
    handlePictureCardPreview(file) {
     //放大图片
      this.form.dialogImageUrl = file.url;
      console.log(file.url,'图片路径')
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
    Getqudz(pid){
      //区划地址 区信息
      this.pId = pid
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
      this.form.sqstate = ''
      this.form.dialogImageUrl =''
      this.form.xqqyrq = ''
      this.form.syztdmstate = ''
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
