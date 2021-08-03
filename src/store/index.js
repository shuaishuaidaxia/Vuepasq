import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dilongstate: false,
    dilongtype: '',
    disabled: false,
    dialogtitle: '',
    butbc_isdisabled: false,
    butcz_isdisabled: false,
    butqx_isdisabled: false,
  },
  mutations: {
    SET_OPENDIALONG(state,type){
      state.dilongstate = true
      state.dilongtype = type
      if (type == 'details'){
        //详情
        state.disabled = true
        state.dialogtitle = '详情'
        state.butqx_isdisabled = true
        state.butbc_isdisabled = false
        state.butcz_isdisabled = false
      }
      if (type == 'add')
      {
        //新增
        state.disabled = false
        state.dialogtitle = '新增'
        state.butbc_isdisabled = true
        state.butcz_isdisabled = true
        state.butqx_isdisabled = true
      }
      if (type == 'update')
      {
        state.disabled = false
        state.dialogtitle = '修改'
        state.butbc_isdisabled = true
        state.butcz_isdisabled = false
        state.butqx_isdisabled = true
      }
    },
    SET_CLOSEDIALONG(state){
      state.dilongstate = false
    }
  },
  actions: {
    Openmydialong(context,type){
        context.commit('SET_OPENDIALONG',type)
    },
    Closemydialog(context){
      context.commit('SET_CLOSEDIALONG')
    }
  },
  modules: {
  }
})
