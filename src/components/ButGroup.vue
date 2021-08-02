<template>
<div>
  <div class="el-row">
    <div class="el-col el-col-22">
      <div class="el-form-item__content">
        <template v-if="butqx_isdisabled">
          <el-button @click="qx_click">取消</el-button>
        </template>
       <template v-if="butcz_isdisabled">
         <el-button  type="primary" @click="cz_click">重置</el-button>
       </template>
      <template v-if="butbc_isdisabled">
        <el-button type="primary" @click="bc_click">保存</el-button>
      </template>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ButGroup",
  props: {
    butqx_isdisabled:Boolean,
    butcz_isdisabled:Boolean,
    butbc_isdisabled:Boolean
  },
  methods:{
    qx_click(){
      this.$emit('qx_click')
    },
    cz_click(){
      this.$emit('cz_click')
    },
    bc_click(){
      this.$emit('bc_click')
    }
  }
}
</script>

<style scoped>

</style>
