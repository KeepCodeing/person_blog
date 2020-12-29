<template>
  <div id="app">
    <el-container class="el-container" style="height: 100%">
      <el-header class="el-header">
        <Header />
      </el-header>
      <el-main class="el-main" style="padding-top: 0;">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import Header from "./components/common/header/Header";

  export default {
    name: 'app',
    components: {
      Header,
    },
  }
</script>

<style type="text/css" scoped>
  @import "assets/css/base.css";
</style>