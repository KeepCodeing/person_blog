<template>
  <div>
    <el-row style="padding-top: 10px; cursor: pointer;" v-for="item in record_data"
            :key="item.id" >
      <el-col :span="24" style="margin: 0;">
        <el-card shadow="hover" :body-style="body_style">
          <div class="message_title" @click="openMessage(item.id)">
            <h1>{{item.title}}</h1>
          </div>
          <div class="message_tags_box">
            <el-tag class="message_tags" :hit="true" color="#f1f2f6" size="large" v-for="i in item.tags" type="info">{{i}}</el-tag>
          </div>
          <div class="message_background" :style="{'backgroundImage' : 'url(' + './images/' + item.image + ')'}"/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Message",
    methods: {
      openMessage(id) {
        console.log(id);
        this.$router.push('/message/' + id);
      }
    }
  }
</script>

<style scoped>
  .message_background {
    width: 100%;
    height: 100%;
    padding: 0;
    position: relative;
    top: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
  }
  .message_title {
    font-size: 40px;
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .message_title > h1 {
    transform: translateY(50%);
    text-align: center;
    font-family: '微软雅黑', 'Consolas', serif;
    color: #2f3542;
  }
  .message_tags_box {
    position: absolute;
    z-index: 2;
    bottom: 0;
    right: 0;
    margin: 0 7px 7px 0;
  }
  .message_tags {
    margin: 0 5px 0 5px;
    color: #2ed573;
  }
</style>