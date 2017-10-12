import { getStatistics } from '@/service/errorlog'
import * as TYPE from '../actionType/errorlogType'

const state = {
  statistics: []
}

const getters = {
  errorlogStatistics: state => state.statistics
}

const actions = {
  getErrorLogStatistics({commit, state, rootState}) {
	commit(TYPE.ERRORLOG_GET_STATISTICS)
	getStatistics().then((response) => {
	  commit(TYPE.ERRORLOG_GET_STATISTICS_SUCCESS, response)
    }, (error) => {
      commit(TYPE.ERRORLOG_GET_STATISTICS_FAILURE)
	})
  }
}

const mutations = {
  [TYPE.ERRORLOG_GET_STATISTICS] (state) {

  },
  [TYPE.ERRORLOG_GET_STATISTICS_SUCCESS] (state, response) {
    state.statistics = response
  },
  [TYPE.ERRORLOG_GET_STATISTICS_FAILURE] (state) {
  //TODO 修改页面顶部提示信息的内容
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}