/**
 * dashborad页面中涉及到的数据请求
 */
import { baseUrl } from '../config'
import axios from 'axios'


/**
 * 获取dashboard面板最上面的四个统计数据
 */
export const getStatistics = () => {
  return axios.get(baseUrl).then((response) => {
    return response.data
  })
}