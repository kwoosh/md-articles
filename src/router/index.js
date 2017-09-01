import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Posts from '@/components/Post/Posts'
import Post from '@/components/Post/Post'
import CreatePost from '@/components/Post/CreatePost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts',
      name: 'Posts',
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
      component: CreatePost
    },
  ],
  mode: 'history'
})
