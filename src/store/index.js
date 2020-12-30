import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import header from './header'
import carousel from './carousel'

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  mutations,
  state,
  modules: {
    header,
    carousel
  }
});

