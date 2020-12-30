<template>
  <div>
    <button @click="t">111</button>
    <Menu />

  </div>

</template>

<script>
  import Menu from 'components/common/header/Menu'
  export default {
    name: "Header",
    components: {
      Menu,
    },
    methods: {
      t() {
        this.menu_color = '#1ff3f2';
        console.log(Menu.props);
      }
    },
    data() {
      return {
        menu_color: '#2f3542',
        menu_text_color: '#dfe4ea',
        menu_act_text_color: '#ffffff',
        pages: [
          {path: '/home', name: '首页', icon: 'el-icon-s-home'},
          {path: '/message', name: '留言', icon: 'el-icon-postcard'},
        ],
      }
    },
    created() {
      // 要传递给Menu的参数，菜单颜色，菜单字体颜色，菜单字体激活颜色，路由（这里得把props当成个属性加进去）
      // 这里做的就是声明要加入那些变量，也就是Header的data里属性，仅限于这里这样用，因为Header除了包装
      // Menu之外就没别的用了
      let that = this;
      Menu.props = {
        menu_color: {
          type: String,
          require: true,
          default: function() {
            return that.menu_color;
          }
        },
        menu_text_color: {
          type: String,
          require: true,
          default: function() {
            return '#dfe4ea';
          }
        },
        menu_act_text_color: {
          type: String,
          require: true,
          default: function() {
            return '#ffffff';
          }
        },
        pages: {
          type: Array,
          require: true,
          default: function() {
            return [
              {path: '/home', name: '首页', icon: 'el-icon-s-home'},
              {path: '/message', name: '留言', icon: 'el-icon-postcard'},
            ];
          }
        }
      };
      // menu_color: '#2f3542',
      // menu_text_color: '#dfe4ea',
      // menu_act_text_color: '#ffffff',
      // pages: [
      //   {path: '/home', name: '首页', icon: 'el-icon-s-home'},
      //   {path: '/message', name: '留言', icon: 'el-icon-postcard'},
      // ],
      // Menu.props = Object.keys(this.$data);
    },
  }
</script>

<style scoped>

</style>