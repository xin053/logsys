import { getStatistics } from '../../service/dashboard'
import * as TYPE from '../actionType/dashboardType'

const state = {
  statistics: []
}

const getters = {
  statistics: state => state.statistics
}

const actions = {
  getStatisticsAPI({commit, state, rootState}) {
	commit(TYPE.DASHBOARD_GET_STATISTICS)
	getStatistics().then((response) => {
	  commit(TYPE.DASHBOARD_GET_STATISTICS_SUCCESS, response)
    }, (error) => {
      commit(TYPE.DASHBOARD_GET_STATISTICS_FAILURE)
	})
  }
}

const mutations = {
  [TYPE.DASHBOARD_GET_STATISTICS] (state) {

  },
  [TYPE.DASHBOARD_GET_STATISTICS_SUCCESS] (state, response) {
    state.statistics = response
  },
  [TYPE.DASHBOARD_GET_STATISTICS_FAILURE] (state) {
  //TODO 修改页面顶部提示信息的内容
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}