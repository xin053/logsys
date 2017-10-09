import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'
import LogsView from '@/views/logs/LogsView'
import ErrorLog from '@/views/logs/ErrorLog'


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
          path: 'ErrorLog',
          name: 'ErrorLog',
          component: ErrorLog
        }
      ]
    }
  ]
})
