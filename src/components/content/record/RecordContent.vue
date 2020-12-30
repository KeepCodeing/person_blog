<template>
  <div>
    <el-collapse accordion>
      <el-collapse-item v-for="item in $store.state.record.record_data">
        <div slot="title">
          <el-row style="padding-top: 10px; cursor: pointer;" >
            <el-col :span="24" style="margin: 0;">
              <el-card shadow="hover" :body-style="{'padding': '0', 'height': '200px'}">
                <div class="message_title">
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
        <h4>{{item.content}}</h4>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  // 这个页面用了抽屉和卡片，抽屉标题作为卡片容器，抽屉内容作为记录内容
  import {GET_RECORD_DATA} from "../../../store/actions-types";
  export default {
    name: "RecordContent",
    created() {
      this.$store.dispatch(GET_RECORD_DATA);
    }
  }
</script>

<style>
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
    transform: translateY(50px);
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
  .el-collapse-item__header {
    display: block;
    height: auto;
  }
</style>