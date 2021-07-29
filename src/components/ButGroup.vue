<template>
<div>
  <div class="el-row">
    <div class="el-col el-col-22">
      <div class="el-form-item__content">
        <template v-if="butqx_isdisabled">
          <el-button>取消</el-button>
        </template>
       <template v-if="butcz_isdisabled">
         <el-button  type="primary">重置</el-button>
       </template>
      <template v-if="butbc_isdisabled">
        <el-button type="primary">保存</el-button>
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
  }
}
</script>

<style scoped>

</style>
