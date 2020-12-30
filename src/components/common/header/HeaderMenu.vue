<template>
  <el-menu class="el-menu" mode="horizontal"
           :background-color="$store.state.header.config.menu_color"
           :text-color="$store.state.header.config.menu_text_color"
           :active-text-color="$store.state.header.config.menu_act_text_color"
           :default-active="$route.path" router>
    <el-menu-item class="el-menu-item"
                  v-for="(item, idx) in $store.state.header.config.pages"
                  :index="item.path"
                  :key="idx"><i
      :class="item.icon"/>{{item.name}}</el-menu-item>
  </el-menu>
</template>

<script>
  import {GET_HEADER_CONFIG} from "store/actions-types";
  export default {
    name: "NewHeader",
    created() {
      // 在created中请求本地配置
      this.$store.dispatch(GET_HEADER_CONFIG);
    }
  }
</script>

<style scoped>

</style>