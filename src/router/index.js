import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Post from '@/components/Post'
import Callback from '@/components/Callback'
import AddPhoto from '@/components/Photo/AddPhoto'
import { requireAuth } from '../../services/utils/auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/Home',
      component: Home
    },
    {
      path: '/post',
      name: 'Post',
      component: Post,
      beforeEnter: requireAuth
    },
    {
      path: '/add-photo',
      name: 'AddPhoto',
      component: AddPhoto
    },
    {
      path: '/callback',
      component: Callback
    }
  ]
})
