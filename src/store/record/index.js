import {GET_RECORD_DATA} from "../actions-types";
import {LOAD_RECORD_DATA} from "../mutations-types";
import request from "network/request";

export default {
  state: {
    record_data: []
  },
  mutations: {
    [LOAD_RECORD_DATA](state, data) {
      state.record_data = data;
    }
  },
  actions: {
    [GET_RECORD_DATA](context) {
      request({
        url: 'record/RecordContent.json'
      }).then(res => context.commit(LOAD_RECORD_DATA, res.data));
    }
  }
}