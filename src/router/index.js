import Vue from 'vue'
import Router from 'vue-router'
import datavis from '@/views/datavis'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'datavis',
      component: datavis
    }
  ]
})
