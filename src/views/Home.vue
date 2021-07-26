<template>
  <div class="box">
  <el-container>
    <el-aside width="300px"  >
      <Treenav></Treenav>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
import Treenav from '../components/Tree-nav'
export default {
  name: 'Home',
  components: {
    Treenav
  }
}
</script>
<style>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  color: #333;
  text-align: center;
  margin-top: 10px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
  height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 800px;
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app,.box{
  height: 100%;
}
.el-container {
  height: 100%;
}

</style>
