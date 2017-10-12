import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/Main'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'
import LogsView from '@/views/logs/LogsView'
import ErrorLog from '@/views/logs/ErrorLog'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        login: Login
      }
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard
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
    }
  ]
})
