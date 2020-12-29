<template>
  <div>
    <Charts :chart_height="chart_height" :chart_name="chart_name"
            :trigger="trigger" :base_file="base_file"/>
  </div>
</template>

<script>
  import Charts from "components/content/carousel/Charts";
  export default {
    name: "CarouselBox",
    components: {
      Charts,
    },
    data() {
      return {
        chart_height: '350px',
        chart_name: ['20170814.jpg', 'COOKIE.png'],
        trigger: 'hover',
        base_file: './images/'
      }
    },
    created() {
      // 和之前一样的操作
      Charts.props = Object.keys(this.$data);
    }
  }
</script>

<style scoped>

</style>