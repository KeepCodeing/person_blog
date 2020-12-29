<template>
  <el-menu class="el-menu" mode="horizontal" :background-color="menu_color"
           :text-color="menu_text_color" :active-text-color="menu_act_text_color" :default-active="$route.path" router>
    <el-menu-item class="el-menu-item" v-for="(item, idx) in pages"
                  :index="item.path" :key="idx"><i :class="item.icon"/>{{item.name}}</el-menu-item>
  </el-menu>
</template>

<script>
  // Menu的路由用法：它的index属性就是要跳转的路径（和router-link一样），router属性写上去就表示启用路由写法
  // 几个坑点：router应该加在el-menu上，index，default-active等属性应该动态绑定上去
  export default {
    name: "Mean",
    methods: {

    },
    data() {
      return {

      }
    },
  }

</script>

<style scoped>

</style>