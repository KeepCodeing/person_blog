<template>
  <div>
    <el-carousel :trigger="$store.state.carousel.config.trigger"
                 :height="$store.state.carousel.config.chart_height" class="el-carousel">
      <el-carousel-item v-for="(item, idx) in $store.state.carousel.config.chart_name"
                        :key="idx"
                        class="el-carousel__item">
        <img :src="$store.state.carousel.config.base_file + item" alt="" class="carousel-image">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import {GET_CAROUSEL_CONFIG} from 'store/actions-types'
  export default {
    name: "NewCharts",
    created() {
      this.$store.dispatch(GET_CAROUSEL_CONFIG)
    }
  }
</script>

<style scoped>
  .carousel-image {
    transform: translate(0, -50%);
    width: 100%;
  }
</style>