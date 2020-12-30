import request from "network/request";
import {GET_HEADER_CONFIG} from "../actions-types";
import {LOAD_HEADER_CONFIG} from "../mutations-types";
/*
* header组件的仓库，主要用来存放它里面的组件配置
* state里是代码里的默认值
* */
export default {
  state: {
    config: {
      menu_color: '#2f3542',
      menu_text_color: '#dfe4ea',
      menu_act_text_color: '#ffffff',
      pages: [
        {path: '/home', name: '首页', icon: 'el-icon-s-home'},
        {path: '/records', name: '留言', icon: 'el-icon-postcard'},
      ],
    }
  },
  mutations: {
    [LOAD_HEADER_CONFIG](state, config) {
      state.config = config;
    },
  },
  actions: {
    [GET_HEADER_CONFIG](context) {
      request({
        url: 'configs/HeaderConfig.json'
      }).then(res => context.commit(LOAD_HEADER_CONFIG, res.config));
    },
  },
};
