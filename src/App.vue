<template>
  <div id="app">
    <el-scrollbar style="height: 100%">
      <el-container class="el-container" style="min-height: 100%;">
        <el-header class="el-header">
          <HeaderMenu />
        </el-header>
        <el-main class="el-main" style="padding-top: 0; overflow-y: hidden;">
          <keep-alive>
            <router-view style="height: 100%" />
          </keep-alive>

        </el-main>
      </el-container>
    </el-scrollbar>
  </div>
</template>

<script>
  import HeaderMenu from "./components/common/header/HeaderMenu";

  export default {
    name: 'app',
    components: {
      HeaderMenu,
    },
  }
</script>

<style>
  @import "assets/css/base.css";
  .el-scrollbar__wrap {
    overflow-x: hidden!important;
  }
</style>