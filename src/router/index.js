import Vue from 'vue'
import Router from 'vue-router'
import auth from './auth'

import Posts from '@/components/Post/Posts'
import Post from '@/components/Post/Post'
import CreatePost from '@/components/Post/CreatePost'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home and posts page',
      component: Posts
    },
    {
      path: '/post/:id',
      name: 'Single post',
      props: true,
      component: Post
    },
    {
      path: '/new',
      name: 'New post',
      component: CreatePost,
      beforeEnter: auth
    },
    {
      path: '/signup',
      name: 'User sign up',
      component: Signup
    },
    {
      path: '/signin',
      name: 'User sign in',
      component: Signin
    }
  ],
  mode: 'history'
})
