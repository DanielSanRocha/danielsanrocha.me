import Vue from 'vue'
import Router from 'vue-router'
import description from '../components/description.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'description',
      component: description
    }
  ]
})
