<template>
  <div class="block">
    <el-carousel :trigger="trigger" :height="chart_height" class="el-carousel">
      <el-carousel-item v-for="(item, idx) in chart_name" :key="idx" class="el-carousel__item">
        <img :src="base_file + item" alt="" class="carousel-image">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "Charts"
  }
</script>

<style scoped>
  .carousel-image {
    transform: translate(0, -50%);
    width: 100%;
  }
</style>