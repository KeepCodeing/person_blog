<template>
  <div :style="{'backgroundColor' : color}" style="height: 100px; width: 100px;">
    {{color}}
  </div>
</template>

<script>
  import request from "../../network/request";
  export default {
    name: "te",
    data() {
      return {
        color: 'red'
      }
    },
    mounted() {
      request({
        url: './t.json'
      }).then(res => this.color = res.color);
    }
  }
</script>

<style scoped>

</style>