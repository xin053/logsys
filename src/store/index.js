import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import dashboardStore from './modules/dashboardStore'

const state = {

}

const getters = {

}

export default new Vuex.Store({
  state,
  getters,
  modules: {
    dashboardStore
  }
})