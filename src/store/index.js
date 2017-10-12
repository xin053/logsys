import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import dashboardStore from './modules/dashboardStore'
import errorlogStore from './modules/errorlogStore'

const state = {

}

const getters = {

}

export default new Vuex.Store({
  state,
  getters,
  modules: {
    dashboardStore,
    errorlogStore
  }
})