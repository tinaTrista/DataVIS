import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chartList: [],
    current_chart:0
  },
  mutations: {
    pushArray: function(state, value){
      state.chartList.push(value)
    },
    editArray: function(state,value){
      state.chartList = value
    },
    current_chart_update: function(state,value){
      state.current_chart = value
    }
  }
})
