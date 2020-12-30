import request from "network/request";
import {LOAD_CAROUSEL_CONFIG} from "../../store/mutations-types";
import {GET_CAROUSEL_CONFIG} from "store/actions-types";

export default {
  state: {
    config: {
      chart_height: '350px',
      chart_name: ['20170814.jpg', 'COOKIE.png', '7509.jpg', '20190317.jpg'],
      trigger: 'hover',
      base_file: './images/'
    }
  },
  mutations: {
    [LOAD_CAROUSEL_CONFIG](state, config) {
      state.config = config;
    }
  },
  actions: {
    [GET_CAROUSEL_CONFIG](context) {
      request({
        url: 'configs/CarouselConfig.json'
      }).then(res => context.commit(LOAD_CAROUSEL_CONFIG, res.config));
    }
  }
}