import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chartList: []
  },
  mutations: {
    pushArray: function(state, value){
      state.chartList.push(value);
    }
  }
})
