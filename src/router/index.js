import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddPhoto from '@/components/Photo/AddPhoto'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add-photo',
      name: 'AddPhoto',
      component: AddPhoto
    }
  ]
})
