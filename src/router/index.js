import Vue from 'vue'
import Router from 'vue-router'

import description from '../components/description.vue'
import curriculum from '../components/curriculum.vue'
import snakeai from '../components/snakeai.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'description',
      component: description
    },
    {
      path: '/curriculum',
      name: 'curriculum',
      component: curriculum
    },
    {
      path: '/snakeai',
      name: 'snakeai',
      component: snakeai
    }
  ]
})
