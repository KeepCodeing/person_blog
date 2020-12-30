<template>
  <div>
    <MessageContent :body_style="body_style" :record_data="record_data['data']"/>
  </div>
</template>

<script>
  import MessageContent from "components/content/message/MessageContent";
  import request from "network/request";
  export default {
    name: "MessageContainer",
    components: {
      MessageContent,
    },
    data() {
      return {
        body_style: {'padding': '0', 'height': '200px'},
        record_data: []
      }
    },
    created() {
      MessageContent.props = Object.keys(this.$data);
    },
    mounted() {
      request({
        url: 'record/RecordContent.json'
      }).then(res => {this.record_data = res;});
    }
  }
</script>

<style scoped>

</style>