import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'
import LogsView from '@/views/logs/LogsView'
import DatabaseLog from '@/views/logs/DatabaseLog'
import GatewayLog from '@/views/logs/GatewayLog'
import WebLog from '@/views/logs/WebLog'
import ServerLog from '@/views/logs/ServerLog'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logs',
      name: 'LogViews',
      component: LogsView,
      children: [
        {
          path: 'DatabaseLog',
          name: 'DatabaseLog',
          component: DatabaseLog,
          meta: { keepAlive: false }
        },
        {
          path: 'GatewayLog',
          name: 'GatewayLog',
          component: GatewayLog
        },
        {
          path: 'WebLog',
          name: 'WebLog',
          component: WebLog
        },
        {
          path: 'ServerLog',
          name: 'ServerLog',
          component: ServerLog
        }
      ]
    }
  ]
})
